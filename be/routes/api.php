<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BedsController;
use App\Http\Controllers\CarouselController;
use App\Http\Controllers\CodeCheckController;
use App\Http\Controllers\FacebookController;
use App\Http\Controllers\FloorsController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\PaymentStatusController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\RoomClassController;
use App\Http\Controllers\RoomStatusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::resource('guests', GuestController::class);
Route::Resource('beds', BedsController::class);
Route::Resource('floors', FloorsController::class);
Route::Resource('roomstatus', RoomStatusController::class);
Route::Resource('roomclass', RoomClassController::class);
Route::resource('banner', CarouselController::class);
Route::resource('payment_status', PaymentStatusController::class);

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::post('password/email', ForgotPasswordController::class);
Route::post('password/code/check', CodeCheckController::class);
Route::post('password/reset', ResetPasswordController::class);

// Route::get('/upload', [GuestController::class, 'upload']);

Route::controller(FacebookController::class)->group(function () {
    Route::get('auth/facebook', 'redirectToFacebook')->name('auth.facebook');
    Route::get('auth/facebook/callback', 'handleFacebookCallback');
});

Route::get('/images', [GuestController::class, 'index']);
Route::post('/images', [GuestController::class, 'store']);

Route::get('carousels', [CarouselController::class, 'index']);
Route::get('carousels/{id}', [CarouselController::class, 'show']);
Route::post('carousels', [CarouselController::class, 'store']);
Route::put('carousels/{id}', [CarouselController::class, 'update']);
Route::delete('carousels/{id}', [CarouselController::class, 'destroy']);

// Route::get('login/google', [GoogleController::class, 'redirectToGoogle'])->name('login.google');
// Route::get('login/google/callback', [GoogleController::class, 'handleGoogleCallback']);

// Route::controller(FacebookController::class)->group(function () {
//     Route::post('auth/facebook', 'redirectToFacebook')->name('auth.facebook');
//     Route::get('auth/facebook/callback', 'handleFacebookCallback');
// });

// Route::post('/api/auth/facebook', [FacebookController::class, 'loginWithFacebook']);
