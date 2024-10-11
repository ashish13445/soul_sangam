<?php

namespace App\Http\Controllers;
use App\Providers\RouteServiceProvider;
use App\Models\User;
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


class UserController extends Controller
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
        return Inertia::render('EventProfile');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'dob' => 'required|date',
        'occupation' => 'required|string|max:255',
        'education' => 'required|string|max:255',
        'city' => 'required|string|max:255',
        'profile_picture' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

    if ($validator->fails()) {
        return redirect()->back()->withErrors($validator)->withInput();
    }

    $dob = Carbon::parse($request->dob);
    $age = $dob->age;

    $data = [
        'name' => $request->name,
        'dob' => $request->dob,
        'age' => $age,
        'occupation' => $request->occupation,
        'education' => $request->education,
        'city' => $request->city,
    ];

    if ($request->hasFile('profile_picture')) {
        $image = $request->file('profile_picture');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('profile_pictures', $imageName, 'public');
        $data['profile_picture'] = $imageName;
    }

    User::where('id', Auth::id())->update($data);

    return redirect()->route('dashboard');
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
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function getUsers()
    {
        return User::all();
    }

    public function updateProfilePhoto(Request $request)
{
    // Validate the input
    $request->validate([
        'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        'index' => 'required|integer|min:0', // Validate the index
    ]);

    $user = auth()->user();
    $index = $request->input('index');

    // Ensure profile_pictures is an array
    $currentPictures = is_array($user->profile_pictures) 
        ? $user->profile_pictures 
        : json_decode($user->profile_pictures, true);

    // If decoding failed, initialize it as an empty array
    if (!is_array($currentPictures)) {
        $currentPictures = [];
    }

    // Check if the index already has a photo and delete it from the server
    if (isset($currentPictures[$index]) && !empty($currentPictures[$index])) {
        $existingPhotoPath = storage_path('app/public/profile_pictures/' . $currentPictures[$index]);
        
        // Delete the file if it exists
        if (file_exists($existingPhotoPath)) {
            unlink($existingPhotoPath);
        }
    }

    // Handle file upload
    if ($request->hasFile('photo')) {
        $file = $request->file('photo');
        $filename = time() . '-' . $file->getClientOriginalName();
        $file->storeAs('public/profile_pictures', $filename);

        // Replace the photo at the specific index, or add if the index does not exist
        $currentPictures[$index] = $filename;
    }

    // Save the updated pictures array to the user's profile_pictures field
    $user->profile_pictures = json_encode($currentPictures);
    $user->save();

    return response()->json(['profile_picture' => $currentPictures[$index]]);
}

    public function removeProfilePhoto(Request $request)
    {
        // Get the authenticated user
        $user = Auth::user();

        // Get the index of the photo to be removed
        $index = $request->input('index');

        // Get the current profile pictures array from the user
        $profilePictures = json_decode($user->profile_pictures, true);

        // Check if the index is valid and the picture exists
        if (isset($profilePictures[$index])) {
            // Remove the file from storage
            $filePath = 'public/profile_pictures/' . $profilePictures[$index];
            if (Storage::exists($filePath)) {
                Storage::delete($filePath);
            }

            // Remove the picture from the array
            unset($profilePictures[$index]);

            // Re-index the array to maintain consistency
            $profilePictures = array_values($profilePictures);

            // Update the user's profile_pictures column
            $user->profile_pictures = json_encode($profilePictures);
            $user->save();

            return response()->json(['success' => true, 'message' => 'Profile picture removed successfully.']);
        }

        return response()->json(['success' => false, 'message' => 'Invalid index or picture does not exist.'], 400);
    }
    

}
