<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class DatingController extends Controller
{
    public function index()
    {

        return Inertia::render('Dating/Index',[
            'user' => auth()->user()
        ]);
 
    }
    // public function showProfiles()
    // {
    //     $user = Auth::user();

    //     // Get the user's preferences
    //     $preferences = $user->preferences;


    // $userId = $user->id;
    // $likedUserIds = User::find($userId)
    //     ->interactions()
    //     ->pluck('interactable_id')
    //     ->toArray();

    // // Get users that the current user has not liked
    // $profiles = User::query()
    // ->whereNotIn('id', $likedUserIds) // Exclude already liked profiles
    // ->where('id', '<>', $user->id) // Exclude the current user's profile
    // ->where('allow_dating', true) // Only include users who allow dating
    // ->when($preferences->gender, function ($query) use ($preferences) {
    //     $query->where('gender', $preferences->gender);
    // })
    // ->when($preferences->start_age && $preferences->end_age, function ($query) use ($preferences) {
    //     $query->whereBetween('age', [$preferences->start_age, $preferences->end_age]);
    // })
    // ->when($preferences->religion, function ($query) use ($preferences) {
    //     $query->where('religion', $preferences->religion);
    // })
    // ->first();


    // return $profiles;

    // }

    public function showProfiles()
{
    $user = Auth::user();

    // Get the user's preferences
    $preferences = $user->preferences;

    $userId = $user->id;
    $likedUserIds = User::find($userId)
        ->interactions()
        ->where('event_id',null)
        ->pluck('interactable_id')
        ->toArray();

    // Get users that the current user has not liked
    $profiles = User::query()
    ->whereNotIn('id', $likedUserIds) // Exclude already liked profiles
    ->where('id', '<>', $user->id)    // Exclude the current user's profile
    ->where('allow_dating', true)     // Only include users who allow dating
    ->selectRaw(
        '*, 
        (CASE 
            WHEN ? IS NOT NULL AND gender IS NOT NULL AND gender = ? THEN 1 
            ELSE 0 
         END) as gender_match, 
         
         (CASE 
            WHEN ? IS NOT NULL AND age IS NOT NULL AND age BETWEEN ? AND ? THEN 1 
            ELSE 0 
         END) as age_match, 
         
         (CASE 
            WHEN ? IS NOT NULL AND religion IS NOT NULL AND religion = ? THEN 1 
            ELSE 0 
         END) as religion_match', 
        [
            optional($preferences)->gender,                // Preferred gender, check for null
            optional($preferences)->gender,                // Compare gender
            
            optional($preferences)->start_age,             // Check if start age is not null
            optional($preferences)->start_age ?? 0,        // Preferred start age, default to 0 if null
            optional($preferences)->end_age ?? 100,        // Preferred end age, default to 100 if null

            optional($preferences)->religion,              // Check if religion is not null
            optional($preferences)->religion               // Preferred religion for comparison
        ]
    )
    ->orderByDesc('gender_match')     // Sort by gender match first
    ->orderByDesc('age_match')        // Then sort by age match
    ->orderByDesc('religion_match')   // Then sort by religion match
    ->with('preferences')
    ->first();

    return $profiles;
}


}
