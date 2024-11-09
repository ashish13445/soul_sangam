<?php

use Illuminate\Http\Request;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\StripeController;
use App\Http\Middleware\CorsMiddleware;
use App\Http\Controllers\UserPreferenceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\InteractionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NotificationsController;


use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\CheckinController;
use App\Http\Controllers\DatingController;
use Illuminate\Support\Facades\Route;


// Route::middleware('api')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    })->middleware('auth:sanctum');
    
    
    Route::middleware('guest')->group(function () {
        Route::get('register', [RegisteredUserController::class, 'create']);
    
        Route::post('register', [RegisteredUserController::class, 'store']);
    
        Route::get('login', [AuthenticatedSessionController::class, 'create']);    
        Route::get('/events', [EventController::class, 'index']);
        Route::get('/events/{id}', [EventController::class, 'event']);
        Route::post('login', [AuthenticatedSessionController::class, 'store']);
    
        Route::get('forgot-password', [PasswordResetLinkController::class, 'create']);

        Route::post('forgot-password', [PasswordResetLinkController::class, 'store']);
    
        Route::get('reset-password/{token}', [NewPasswordController::class, 'create']);

        Route::post('reset-password', [NewPasswordController::class, 'store']);
        });
    
    Route::middleware('auth')->group(function () {
        Route::get('verify-email', EmailVerificationPromptController::class);
    
        Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)->middleware(['signed', 'throttle:6,1']);
    
        Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                    ->middleware('throttle:6,1');
    
        Route::get('confirm-password', [ConfirmablePasswordController::class, 'show']);
    
        Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);
    
        Route::put('password', [PasswordController::class, 'update']);
    
        Route::post('logout', [AuthenticatedSessionController::class, 'destroy']);
                   
    
                    
    Route::post('/checkin',[CheckinController::class, 'storeCheckin']);
    
    Route::get('/checkin',[CheckinController::class,'createCheckin']);
    Route::get('/ticket/purchased/{eventId}', [CheckinController::class, 'checkTicket']);
    Route::post('event/logout', [CheckinController::class, 'destroy']);
    
    
    });
    
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('dating', [DatingController::class, 'index']);
        Route::get('dating/profiles', [DatingController::class, 'showProfiles']);
        Route::get('dating/profile/{id}', [ProfileController::class, 'show']);
        Route::get('dating/matches', [InteractionController::class, 'getMatches']);
        Route::get('/auth/events/{id}', [EventController::class, 'authShow']);
    Route::get('/auth/event/participants', [EventController::class, 'getParticipants']);
    Route::post('/like',[InteractionController::class,'like']);
    Route::post('/skip',[InteractionController::class,'skip']);
    Route::post('/profile/photo/update', [UserController::class, 'updateProfilePhoto']);
    Route::post('/profile/photo/remove', [UserController::class, 'removeProfilePhoto']);
    
    });

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user/preferences', [UserPreferenceController::class, 'show']);
    Route::patch('/user/preferences/update', [UserPreferenceController::class, 'update']);
    Route::patch('/profile', [ProfileController::class, 'updateApi']);
            Route::delete('/profile', [ProfileController::class, 'destroy']);
            Route::get('/notifications',[NotificationsController::class,'getNotifications']);
});
Route::get('/eventDates',[EventController::class,'getEventDates']);
Route::get('/cities',[EventController::class,'getCities']);
// });

