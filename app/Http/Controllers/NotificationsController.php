<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers;
use Illuminate\Http\Request;

class NotificationsController extends Controller
{
    public function index(Request $request)
{
    $user = $request->user();
    $eventId = $request->event_id; // Get the event_id from the query parameters

    $notifications = $user->unreadNotifications;

    // // Debugging output
    // foreach ($notifications as $notification) {
    //     dump($notification->data); // Should be 'array'
    // }

    $filteredNotifications = $notifications->filter(function ($notification) use ($eventId) {
        // Ensure that data is an array and event_id exists
        return isset($notification->data['event_id']) && $notification->data['event_id'] == $eventId;
    });

    return response()->json(['notifications' => $filteredNotifications]);
}
    public function markNotificationAsRead($id)
    {
        // Get the authenticated user
        $user = Auth::user();
        
        // Find the notification by ID
        $notification = $user->notifications()->findorfail($id);
        $type = $notification->type;
        // Mark the notification as read
        $notifications = $user->notifications()->where('type', $type)->get();

        // Mark each notification as read and delete it
        foreach ($notifications as $notification) {
            $notification->markAsRead();
            $notification->delete();
        }
    
    
    }
}
