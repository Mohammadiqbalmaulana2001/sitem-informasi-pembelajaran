<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role_or_permission:admin'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
})->name('profile');

// Route::get('/admin', function () {
//     return Inertia::render('Admin/index');
// })->middleware(['auth', 'verified', 'role_or_permission:admin'])->name('admin');

Route::middleware('auth','verified', 'role_or_permission:admin')->group(function () {
    Route::get('/admin/home', function () {
        return Inertia::render('Admin/Home');
    })->name('admin');
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    });
    Route::get('/admin/profile', function () {
        return Inertia::render('Admin/Profile');
    });
});
require __DIR__.'/auth.php';
