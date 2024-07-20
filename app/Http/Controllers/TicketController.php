<?php

namespace App\Http\Controllers;
use App\Mail\TicketPurchased;

use Illuminate\Support\Str;
use App\Models\Ticket;
use App\Models\Event;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail; // Ensure this line is included

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Charge;

class TicketController extends Controller
{
    public function getTickets(){
        $ticket = Ticket::where('user_id',Auth::id())->with('event')->with('user')
        ->orderBy('created_at', 'desc')
        ->get();
        return response()->json($ticket);

    }
    public function generateUniqueTicketCode() {
        do {
            $ticketCode = 'TICKET-' . Str::upper(Str::random(10));
        } while (Ticket::where('ticket_code', $ticketCode)->exists());
    
        return $ticketCode;
    }
    public function store(Request $request)
    {
        $ticket = Ticket::create($request->all());
        return response()->json($ticket, 201);
    }

    public function purchase(Request $request)
    {
        Stripe::setApiKey('sk_test_51K4koBSFlDb60EYr8AaKb2vZSkMAnUymPlD8uuFKOdRHAsXokuIQokpIYJ7IuLfGW0H4KVxJjmt5dW4PTv7TJ6Ty00qSSRjzHF');
        $event = Event::find($request->event_id);
        $user = User::find($request->user_id);
        try {
            $charge = Charge::create([
                'amount' => $event->price,
                'currency' => 'inr',
                'source' => 'tok_visa',
                'description' => 'Ticket Purchase',
            ]);
            $ticketCode = $this->generateUniqueTicketCode();

            $ticket = Ticket::create([
                'user_id' => $request->user_id,
                'event_id' => $request->event_id,
                'ticket_code' => $ticketCode // You should generate a unique code here
            ]);
            Mail::to($user->email)->send(new TicketPurchased($ticket));
            return redirect()->route('event.profile');
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
