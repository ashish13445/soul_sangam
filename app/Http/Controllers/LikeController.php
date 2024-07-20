<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\Like;
use App\Models\User;
use App\Notifications\LikedUserNotification;
use Illuminate\Support\Facades\Notification;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
     
        $user_id = Auth::id();
        $liked_user_id = $request->input('user_id');
        $event_id = session('ticket')['event_id'];
        
        // Ensure user cannot like themselves
        if ($user_id == $liked_user_id) {
            return response()->json(['error' => 'You cannot like yourself.'], 400);
        }

        // Check if like already exists
        if (Like::where('user_id', $user_id)
            ->where('liked_user_id', $liked_user_id)
            ->where('event_id', $event_id)
            ->exists()) {
            return response()->json(['error' => 'You have already liked this user.'], 400);
        }

        Like::create([
            'user_id' => $user_id,
            'liked_user_id' => $liked_user_id,
            'event_id' => $event_id,
        ]);
        $liker = User::find($user_id);
    $likedUser = User::find($liked_user_id);

    // Notify the liked user
    $likedUser->notify(new LikedUserNotification($liker, $likedUser,$event_id));


        return response()->json(['message' => 'User liked successfully.']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
