<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Guest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
        // return Socialite::driver('google')->stateless()->redirect();
    }

    public function handleGoogleCallback()
    {
        // dd(Socialite::driver('google')->stateless()->user());
        try {
            $user     = Socialite::driver('google')->stateless()->user();
            $finduser = Guest::where('google_id', $user->id)->first();

            if ($finduser) {
                Auth::login($finduser);
                // return redirect('http://localhost:3000/');
                // Tạo token (nếu dùng Laravel Sanctum hoặc Passport)
                $token = $finduser->createToken('google')->plainTextToken;
                return redirect("http://localhost:3000/?login=google&token={$token}");
            } else {
                $newUser = Guest::create([
                    'fullname'      => $user->name,
                    'email_address' => $user->email,
                    'google_id'     => $user->id,
                    'password'      => encrypt('123456dummy'),
                ]);

                Auth::login($newUser);
                $token = $newUser->createToken('google')->plainTextToken;
                return redirect("http://localhost:3000/?login=google&token={$token}");
            }
        } catch (\Exception $e) {
            return redirect('http://localhost:3000/login')
                ->with('error', 'Login failed: ' . $e->getMessage());
        }
    }
}
