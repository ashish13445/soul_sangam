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
        $profiles = User::all();

        return response()->json($profiles);
    }
}
