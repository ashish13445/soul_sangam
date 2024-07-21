<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\StripeController;
use App\Http\Middleware\CorsMiddleware;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::middleware([CorsMiddleware::class])->group(function () {

    // Route::post('/create-checkout-session', [StripeController::class, 'createCheckoutSession'])->middleware(['auth','web','verified'])->name('checkout');
    //All the routes that belongs to the group goes here
// });

// Route::get('/payment-success', [StripeController::class, 'paymentSuccess'])->name('payment.success.api');
// Route::get('/payment-cancel', [StripeController::class, 'paymentCancel'])->name('payment.cancel.api');


// Route::get('/events', [EventController::class, 'index']);
// Route::get('/events/{id}', [EventController::class, 'show'])->name('event.get');
// Route::post('/tickets', [TicketController::class, 'store']);
// Route::post('/purchase', [TicketController::class, 'purchase']);
