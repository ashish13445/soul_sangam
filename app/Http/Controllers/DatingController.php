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
    public function showProfiles()
    {
        $user = Auth::user();

        // Get the user's preferences
        $preferences = $user->preferences;


    $userId = $user->id;
    $likedUserIds = User::find($userId)
        ->interactions()
        ->pluck('interactable_id')
        ->toArray();

    // Get users that the current user has not liked
    $profiles = User::query()
    ->whereNotIn('id', $likedUserIds) // Exclude already liked profiles
    ->where('id', '<>', $user->id) // Exclude the current user's profile
    ->where('allow_dating', true) // Only include users who allow dating
    ->when($preferences->gender, function ($query) use ($preferences) {
        $query->where('gender', $preferences->gender);
    })
    ->when($preferences->start_age && $preferences->end_age, function ($query) use ($preferences) {
        $query->whereBetween('age', [$preferences->start_age, $preferences->end_age]);
    })
    ->when($preferences->religion, function ($query) use ($preferences) {
        $query->where('religion', $preferences->religion);
    })
    ->first();


    return $profiles;

    }
}
