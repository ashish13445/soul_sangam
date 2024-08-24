<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $user = $request->user();
        $user->allow_dating = (bool) $user->allow_dating; // Convert 1/0 to true/false
    
        return Inertia::render('Profile/Edit', [
            'user' => $user,
            'mustVerifyEmail' => $user instanceof MustVerifyEmail,
            'status' => session('status'),
        ]); 
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $dob = Carbon::parse($request->input('dob'));
        $age = $dob->age;

        // Fill the user's information with validated data
        $request->user()->fill($request->validated());

        // Update the user's age
        $request->user()->age = $age;

        // If the email has been changed, reset email verification
        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        // Save the updated user data
        $request->user()->save();

        // Redirect back to the profile edit page
        return Redirect::route('profile.edit');

    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
