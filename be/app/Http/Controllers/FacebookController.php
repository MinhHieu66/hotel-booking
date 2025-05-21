<?php
namespace App\Http\Controllers;

use App\Models\Guest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

// use Laravel\Socialite\Two\User;

class FacebookController extends Controller
{
    // public function dataDeletionCallback(Request $request)
    // {
    //     $signed = $request->input('signed_request');
    //     $data   = json_decode(base64_decode(strtr(explode('.', $signed)[1], '-_', '+/')), true);
    //     $userId = $data['user_id'] ?? null;
    //     // Thực hiện xóa dữ liệu người dùng...
    // }

    // public function uninstallCallback(Request $request)
    // {
    //     $signed                      = $request->input('signed_request');
    //     list($encoded_sig, $payload) = explode('.', $signed, 2);
    //     $data                        = json_decode(base64_decode(strtr($payload, '-_', '+/')), true);
    //     $userId                      = $data['user_id'] ?? null;
    //     // Xác thực chữ ký với APP_SECRET, sau đó xử lý...
    // }

    public function index()
    {
        return view("auth.login");
    }
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function redirectToFacebook()
    {
        // dd("Minh Hieu");
        // return Socialite::driver('facebook')->redirect();
        // return Socialite::driver('facebook')->stateless()->redirect()->getTargetUrl();
        return Socialite::driver('facebook')->stateless()->redirect();
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function handleFacebookCallback()
    {
        // dd($user = Socialite::driver('facebook')->user());
        // dd($user = Socialite::driver('facebook')->stateless()->user());
        // try {

        //     $user = Socialite::driver('facebook')->stateless()->user();

        //     $findUser = Guest::where('facebook_id', $user->id)->first();
        //     dd($findUser);
        //     if ($findUser) {
        //         dd("Tim thay");
        //         Auth::login($findUser);

        //         return redirect()->intended('home');

        //     } else {
        //         dd("Khong tim thay");
        //         $newUser = User::updateOrCreate(['email' => $user->email], [
        //             'name'        => $user->name,
        //             'facebook_id' => $user->id,
        //             'password'    => encrypt('123456dummy'),
        //         ]);

        //         Auth::login($newUser);

        //         return redirect()->intended('home');
        //     }

        // } catch (Exception $e) {
        //     dd($e->getMessage());
        // }

        $user = Socialite::driver('facebook')->stateless()->user();

        $findUser = Guest::where('facebook_id', $user->id)->first();
        if ($findUser) {
            Auth::login($findUser);

        } else {

            $newUser = Guest::updateOrCreate(['email_address' => $user->email], [
                'fullname'    => $user->name,
                'facebook_id' => $user->id,
                'password'    => encrypt('123456dummy'),
            ]);
            Auth::login($newUser);
        }

        // Tạo token (nếu dùng Laravel Sanctum hoặc Passport)
        $token = $findUser->createToken('facebook')->plainTextToken;

        // Redirect về trang React kèm token
        return redirect("http://localhost:3000/facebook-success?token={$token}");
    }
}
