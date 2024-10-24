<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CorsMiddleware;
return Application::configure(basePath: dirname(__DIR__))
                ->withRouting(
                        web: __DIR__ . '/../routes/web.php',
                        api: __DIR__ . '/../routes/api.php',
                        commands: __DIR__ . '/../routes/console.php',
                        health: '/up',
                )
                ->withMiddleware(function (Middleware $middleware) {
                    
                    $middleware->group('web', [
                        \Illuminate\Cookie\Middleware\EncryptCookies::class,
                        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
                        \Illuminate\Session\Middleware\StartSession::class,
                        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
                        \Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class,
                        \Illuminate\Routing\Middleware\SubstituteBindings::class,
                        \Illuminate\Session\Middleware\AuthenticateSession::class,
                        \App\Http\Middleware\CorsMiddleware::class,
                        \App\Http\Middleware\ShareUserWithInertia::class,
                        \App\Http\Middleware\HandleInertiaRequests::class,


                    ]);
            
                    $middleware->group('api', [
           
                        \Illuminate\Session\Middleware\StartSession::class,

            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
            // Other API middleware
                    ]);

                    $middleware->alias([
                        'auth.check' => \App\Http\Middleware\CheckAuthenticated::class,
                        'checkedin' => \App\Http\Middleware\EnsureTicketCheckedIn::class,
                        'admin.email' => \App\Http\Middleware\EnsureAdminEmail::class,

                    ]);


                        
                            
                        
                })
                ->withExceptions(function (Exceptions $exceptions) {
                    
                })->create();


