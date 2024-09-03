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
        // $event_id = session('ticket')['event_id'];
       
        if($request->event_id) {
            Like::create([
                'user_id' => $user_id,
                'liked_user_id' => $liked_user_id,
                'event_id' => $request->event_id,
                'type'=> 'event'
            ]);
        }
        else{
            Like::create([
                'user_id' => $user_id,
                'liked_user_id' => $liked_user_id,
                'type'=> 'dating'
            ]);
        }

        $liker = User::find($user_id);
    $likedUser = User::find($liked_user_id);

    // Notify the liked user
    if($request->event_id){
        $likedUser->notify(new LikedUserNotification($liker, $likedUser,$request->event_id));
    }
    else{
        // $likedUser->notify(new LikedUserNotification($liker, $likedUser,null));
        

    }


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
