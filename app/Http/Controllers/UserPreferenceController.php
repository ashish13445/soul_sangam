<?php
namespace App\Http\Controllers;

use App\Models\UserPreference;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserPreferenceController extends Controller
{
    /**
     * Update the user preferences.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        // Validate the request data
        $request->validate([
            'start_age' => 'nullable|integer|min:25|max:45',
            'end_age' => 'nullable|integer|min:25|max:45',
            'religion' => 'nullable|string|max:255',
            'gender' => 'nullable|string|in:Male,Female',
            'income'=>'nullable|string',
            'occupation'=>'nullable|string',
            'education'=>'nullable|string',
            'relationship_status'=>'nullable|string'
        ]);

        // Get the authenticated user
        $user = Auth::user();

        // Update or create user preferences
        $user->preferences()->updateOrCreate(
            ['user_id' => $user->id],
            [
                'start_age' => $request->input('start_age'),
                'end_age' => $request->input('end_age'),
                'religion' => $request->input('religion'),
                'gender' => $request->input('gender'),
                'income'=>$request->input('income'),
                'relationship_status'=>$request->input('relationship_status'),
                'education'=>$request->input('education'),
                'occupation'=>$request->input('occupation'),

            ]
        );

        // Return a successful response
        return response()->json(['message' => 'Preferences updated successfully'], 200);
    }

    /**
     * Show the user preferences.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        // Get the authenticated user
        $user = Auth::user();

        // Get the user's preferences
        $preferences = $user->preferences;

        // Return the preferences
        return response()->json($preferences);
    }
}
