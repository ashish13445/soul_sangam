<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use App\Models\Interaction;
use App\Models\User;
use App\Notifications\LikedUserNotification;
use Illuminate\Support\Facades\Notification;
use Illuminate\Http\Request;


class InteractionController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Interaction $interaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Interaction $interaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Interaction $interaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Interaction $interaction)
    {
        //
    }
    public function like(request $request){
        $user_id = Auth::id();
        $liked_user_id = $request->input('user_id');
       
        if($request->event_id) {
            $existingLike = Interaction::where('user_id',$user_id)
            ->where('interactable_id',$liked_user_id)
            ->where('category','event')->get();
            if($existingLike){
                return response()->json('user already liked');
            }
            Interaction::create([
                'user_id' => $user_id,
                'interactable_id' => $liked_user_id,
                'event_id' => $request->event_id,
                'interactable_type' => User::class,
                'category'=> 'event',
                'type' => 'like',

            ]);
        }
        else{
            $existingLike = Interaction::where('user_id',$user_id)
            ->where('interactable_id',$liked_user_id)
            ->where('category','dating')->get();
            if($existingLike){
                return response()->json('user already liked');
            }
            Interaction::create([
                'user_id' => $user_id,
                'interactable_id' => $liked_user_id,
                'interactable_type' => User::class,
                'category'=> 'dating',
                'type'=>'like'
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
    public function skip(Request $request)
{
    $user_id = Auth::id();
    $skipped_user_id = $request->input('user_id');
    $existingLike = Interaction::where('user_id',$user_id)
            ->where('interactable_id',$liked_user_id)
            ->where('category','dating')->get();
            if($existingLike){
                return response()->json('user already skipped');
            }

    Interaction::create([
        'user_id' => $user_id,
        'interactable_id' => $skipped_user_id,
        'interactable_type' => User::class,
        'type' => 'skip',
    ]);

    return response()->json(['message' => 'Profile skipped successfully.']);
}
}