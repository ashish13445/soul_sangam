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
        'preference' => 'required|string|in:Male,Female',
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
        'preference' => $request->preference
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
    $request->validate([
        'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    $user = auth()->user();

    // Delete the old profile photo if exists
    if ($user->profile_picture) {
        Storage::delete('public/profile_pictures/' . $user->profile_picture);
    }
    // Store the new profile photo
    $fileName = time() . '.' . $request->photo->extension();
    $request->photo->storeAs('public/profile_pictures', $fileName);

    // Update user's profile photo path in the database
    $user->profile_picture = $fileName ;
    $user->save();
    return response()->json(['profile_picture' => $user->profile_picture], 200);
}
}
