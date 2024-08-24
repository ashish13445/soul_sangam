<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\EventController;
use App\Http\Controllers\UserController;

use App\Http\Controllers\TicketController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\Auth\CheckinController;
use App\Http\Controllers\DatingController;


use App\Http\Middleware\CorsMiddleware;

// Route::middleware([CorsMiddleware::class,])->group(function () {
    Route::middleware(['web'])->group(function () {
        Route::post('/create-checkout-session', [StripeController::class, 'createCheckoutSession'])
            ->middleware('auth.check')
            ->name('checkout');
    });

Route::get('/payment-success', [StripeController::class, 'paymentSuccess'])->name('payment.success');
Route::get('/payment-cancel', [StripeController::class, 'paymentCancel'])->name('payment.cancel');


Route::get('/events', [EventController::class, 'index']);
Route::get('/events/page', function () {
    return Inertia::render('Event/Index');
})->middleware(['web'])->name('events.page');

Route::get('/auth/events/page', function () {
    return Inertia::render('Event/Auth/Index');
})->middleware(['web','auth','verified'])->name('auth.events.page');


Route::get('/events/{id}', [EventController::class, 'show'])->name('event.get');
Route::post('/tickets', [TicketController::class, 'store']);
Route::get('/purchase', [TicketController::class, 'purchase'])->name('purchase.ticket');
Route::get('/tickets/get', [TicketController::class, 'getTickets']);
Route::post('event/add',[EventController::class,'store'])->name('event.add');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    $user = Auth::user();
    
    if ($user->email === env('ADMIN_EMAIL', 'admin@gmail.com')) {
        return Inertia::render('AdminDashboard');
    } else {
        return Inertia::render('Dashboard');
    }
})->middleware(['web', 'auth', 'verified'])->name('dashboard');

Route::get('admin/users',[UserController::class,'getUsers'])->middleware(['web','auth','verified','admin.email']);

Route::get('/notifications', function () {
    return Inertia::render('Notifications');
})->middleware(['web','auth', 'verified','checkedin'])->name('notifications');

Route::get('/notifications/{event_id}',[NotificationsController::class,'index']);
Route::get('/eventDashboard',[CheckinController::class,'dashboard'])->middleware(['web','auth', 'verified','checkedin'])->name('eventDashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('event-profile', [UserController::class, 'create'])
->name('event.profile');

Route::post('event-profile', [UserController::class, 'store']);
Route::post('/profile/update-photo', [UserController::class, 'updateProfilePhoto']);


Route::middleware(['web','auth', 'verified'])->group(function () {
    Route::get('dating', [DatingController::class, 'index'])->name('dating.index');
    Route::get('dating/profiles', [DatingController::class, 'showProfiles'])->name('dating.show.profiles');
    Route::get('dating/profile/{id}', [ProfileController::class, 'show'])->name('dating.profile.show');
    Route::post('dating/match', [DatingController::class, 'match'])->name('dating.match');
    Route::get('dating/matches', [DatingController::class, 'matches'])->name('dating.matches');
    Route::get('/auth/events/{id}', [EventController::class, 'authShow'])->name('auth.event.get');
Route::get('/auth/event/participants', [EventController::class, 'getParticipants'])->name('participants.get');
Route::post('/like/like',[LikeController::class,'store'])->name('likeUser');

});

require __DIR__.'/auth.php';
