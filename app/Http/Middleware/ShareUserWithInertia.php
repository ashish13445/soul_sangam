<?php
namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class ShareUserWithInertia extends Middleware
{
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth.user' => function () use ($request) {
                return $request->user() ? $request->user()->only('id', 'name', 'email') : null;
            },
        ]);
    }
}
