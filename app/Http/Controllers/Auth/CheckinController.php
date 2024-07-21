<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\CheckinRequest;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Session;

class CheckinController extends Controller
{
     /**
     * Store the check-in information.
     *
     * @param  CheckinRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function checkTicket($eventId)
    {
        $userId = Auth::user()->id;

        $ticket = Ticket::where('user_id', $userId)
                        ->where('event_id', $eventId)
                        ->first();

        if ($ticket) {
            return response()->json(['success' => true, 'message' => 'User has a valid ticket.']);
        } else {
            return response()->json(['success' => false, 'message' => 'User does not have a valid ticket.']);
        }
    }

    // public function checkin($ticketId)
    // {
    //     $ticket = Ticket::where('ticket_code', $ticketId)
    //                     ->with('event')
    //                     ->with('user')
    //                     ->first();
        
    //     if ($ticket) {

    //         session(['event' => $ticket->event, 'ticket' => $ticket]);
            
    //         // Render the Inertia view if ticket is found
    //         return redirect()->route('checkin.event');

    //     } else {
    //         // Handle case where ticket is not found
    //         return response()->json(['error' => 'Ticket not wef found.'], 404);
    //     }
    // }

    public function dashboard(): Response
    {
        return Inertia::render('EventDashboard', [
            'ticket' => session('ticket'),
            'user' => Auth::user() ? Auth::user()->only('id', 'name', 'email') : null,
        ]);
    }
    public function storeCheckin(CheckinRequest $request)
    {
        $request->authenticate();
        $request->session()->regenerate();
        // return Inertia::render('EventDashboard', [
        //     'event' => session('ticket') ? session('ticket') : null,
        // ]);
        return redirect()->route('eventDashboard'); // This will redirect to the intended URL after login
    }

    public function createCheckin(): Response
    {
        return Inertia::render('Auth/CheckInModal', [
            'status' => session('status'),
            'user' => Auth::user() ? Auth::user()->only('id', 'name', 'email') : null,
        ]);
    }

    public function destroy(Request $request){
        $request->session()->forget('ticket');
    $request->session()->forget('event');

    // Perform any other checkout logic here, such as processing payments, etc.

    return redirect()->route('dashboard')->with('status', 'Checkout completed successfully.');
    }
}
