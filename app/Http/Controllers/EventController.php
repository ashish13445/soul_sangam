<?php

namespace App\Http\Controllers;
use App\Models\Ticket;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function index()
    {
        return Event::with('tickets')->get();
    }

    public function show($id)
    {
        $event = Event::findOrFail($id);

        return Inertia::render('Event/Details',[
            'event'=>$event
        ]);
 
    }
    public function store(Request $request)
    {
        $event = Event::create($request->all());
        return response()->json([$event]);
    }

    public function authShow($id)
    {
        $event = Event::findOrFail($id);

        return Inertia::render('Event/Auth/Details',[
            'event'=>$event,
            'user'=>Auth::user()
        ]);
 
    }
    public function userEventsWithFutureTickets()
    {
        $userId = Auth::user()->id;
        $today = Carbon::today();

        // Get events where the user has tickets and the event date is today or in the future
        $events = Event::whereHas('tickets', function($query) use ($userId) {
            $query->where('user_id', $userId);
        })->whereDate('start_date', '>=', $today)->get();

        return response()->json(['success' => true, 'events' => $events]);
    }

    public function getParticipants(){
        $ticketCode = session('ticket')['ticket_code'];
        $eventId = session('ticket')['event_id'];
        $tickets = Ticket::where('event_id',$eventId)->get();
        $users = $tickets->filter(function ($ticket) {
            return $ticket->user->id !== Auth::id();
        })->pluck('user')->unique('id')->values()->toArray();
        
        return response()->json(['users'=>$users]);
    }

}