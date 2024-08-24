<?php

namespace App\Http\Controllers\Auth;
use App\Providers\RouteServiceProvider;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Session;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            'user' => Auth::user() ? Auth::user(): null,
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {       $request->session()->start();

        $request->authenticate();
        $request->session()->regenerate();
        $token = $request->user()->createToken('Soul Sangam')->plainTextToken;
        if ($request->wantsJson()) {
        return response()->json([
            'message' => 'Login successful',
            'user' => Auth::user(),
            'token'=>$token
        ], 200);
    }
        $redirectTo = $request->session()->get('url.intended');
        
        if ($redirectTo) {
            return redirect()->to($redirectTo);
        
        } 
    }

   
    public function destroy(Request $request)
    {
        // Auth::guard('web')->logout();

        // $request->session()->invalidate();
        // $request->user()->tokens()->delete();

        // $request->session()->regenerateToken();

        // 
        $request->user()->tokens()->delete();
        
        Auth::logout();

    // Invalidate the session
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    if ($request->wantsJson()) {
    return response()->json(['message' => 'Logged out successfully.']);
    }
    return redirect('/');
    }
}
