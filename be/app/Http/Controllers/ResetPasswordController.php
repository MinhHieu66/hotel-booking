<?php
namespace App\Http\Controllers;

use App\Models\Guest;
use App\Models\ResetCodePassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'code'     => 'required|string|exists:reset_code_passwords',
            'password' => 'required|string|min:6|confirmed',
        ]);

        // find the code
        $passwordReset = ResetCodePassword::firstWhere('code', $request->code);
        //Check if it has not expired: the time is one hour
        if ($passwordReset->created_at > now()->addHour()) {
            $passwordReset->delete();
            return response(['message' => trans('passwords.code_is_expire')], 422);
        }

        // find user's email
        $guest = Guest::firstWhere('email_address', $passwordReset->email_address);
        // update user password
        // $guest->update($request->only('password'));
        $guest->update([
            'password' => Hash::make($request->password),
        ]);

        // dd($guest->update($request->only('password')));
        // delete current code
        DB::table('reset_code_passwords')->where('email_address', $passwordReset->email_address)->delete();

        return response(['message' => 'password has been successfully reset'], 200);
    }
}
