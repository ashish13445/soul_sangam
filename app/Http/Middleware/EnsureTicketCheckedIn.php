<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureTicketCheckedIn
{
    public function handle(Request $request, Closure $next)
    {
        $allSessions = $request->session()->all();

        if (!session()->has('ticket')) {
            return redirect()->route('dashboard'); // Redirect to the home page if no valid ticket is found
        }

        return $next($request);
    }
}
