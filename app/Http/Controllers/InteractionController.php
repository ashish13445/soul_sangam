<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\UserMatch;

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
            
            if ($existingLike->isNotEmpty()) {  // Use isNotEmpty() to check if the collection is not empty
                return response()->json(['message' => 'User already liked'], 500);
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
            if ($existingLike->isNotEmpty()) {  // Use isNotEmpty() to check if the collection is not empty
                return response()->json(['message' => 'User already liked'], 500);
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
        $likedUser->notify(new LikedUserNotification($liker, $likedUser));
        

    }
    
    $isMatch = Interaction::where('user_id', $liked_user_id)
    ->where('interactable_id', $user_id)
    ->exists();

    if ($isMatch) {
    // If there's a match, trigger a notification popup
    UserMatch::create([
        'user_id' => $user_id,
        'matched_user_id' => $liked_user_id,
    ]);

    // Optionally, store the match in reverse order for easy querying
    UserMatch::create([
        'user_id' => $liked_user_id,
        'matched_user_id' => $user_id,
    ]);
    return response()->json(['status' => 'matched'], 200);
    }

        return response()->json(['message' => 'User liked successfully.']);
    }
    public function skip(Request $request)
{
    $user_id = Auth::id();
    $skipped_user_id = $request->input('user_id');
    $existingLike = Interaction::where('user_id',$user_id)
            ->where('interactable_id',$skipped_user_id)
            ->where('category','dating')->get();
            

    Interaction::create([
        'user_id' => $user_id,
        'interactable_id' => $skipped_user_id,
        'interactable_type' => User::class,
        'type' => 'skip',
    ]);

    return response()->json(['message' => 'Profile skipped successfully.']);
}

public function getMatches()
{
    $user = auth()->user();

    // Fetch users the current user has matched with
    $matches = $user->matches()->with('matchedUser')->get();

    // Fetch users who matched the current user
    
    return response()->json($matches);
}
}