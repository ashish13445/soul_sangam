<?php

namespace App\Http\Controllers;
use App\Models\Ticket;
use App\Models\Event;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class EventController extends Controller
{
    public function index(Request $request)
    {
        if(auth()->user()){
            if (auth()->user()->email === 'admin@gmail.com') {
                return $this->indexForAdmin();
            } else {
                return $this->indexForUsers();
            }
        }
        else{
            return $this->indexForUsers();

        }
        // Check if the authenticated user is admin
        
    }

    // Function for admin to show events
    private function indexForAdmin()
    {
        // Logic for admin, show all events or specific admin logic
        return Event::with('tickets')->get();

    }

    // Function for regular users to show events
    private function indexForUsers()
    {
        // Logic for regular users, show only certain events or specific user logic
        $today = Carbon::today();
        return Event::with('tickets')
        ->whereDate('start_date', '<=', $today)
        ->whereDate('end_date', '>=', $today)
        ->get();
    }
    public function event($id)
    {
        $event = Event::findOrFail($id);

        return response()->json($event);
 
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

    public function addPhoto(Request $request)
{
    $request->validate([
        'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);
    $imageName = time().'.'.$request->photo->extension();  

    // Save the image to storage/app/public/event
    $request->photo->storeAs('public/event', $imageName);

    // Find the event and update the event_image column
    $event = Event::find($request->id); // Replace with the actual event ID or logic to get the event
    if ($event->event_image) {
        Storage::delete('public/event/' . $event->event_image);
    }
    $event->event_image = $imageName;
    $event->save();

    return response()->json(['event_image' => $imageName]);
}

    public function destroy(string $id)
    {
        $event = Event::findOrFail($id);
        $event->tickets()->delete();
        $event->delete();
        return response()->json("Event Deleted successfully");
    }

    public function update( string $id, Request $request,)
    {
        $event = Event::findOrFail($id);
        $event->update($request->all());
        return response()->json('Event Updated successfully');
    }

    public function getCities()
{
    // Retrieve all unique cities from the events table
    $cities = Event::select('city')->distinct()->pluck('city');

    // Return the cities as an array
    return response()->json($cities);
}
}