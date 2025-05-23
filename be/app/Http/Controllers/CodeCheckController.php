<?php
namespace App\Http\Controllers;

use App\Models\ResetCodePassword;
use Illuminate\Http\Request;

class CodeCheckController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'code' => 'required|string|exists:reset_code_passwords',
        ]);

        // find the code
        $passwordReset = ResetCodePassword::firstWhere('code', $request->code);

        //Check if it has not expired: the time is one hour
        // dd($passwordReset->created_at);
        if ($passwordReset->created_at > now()->addHour()) {
            $passwordReset->delete();
            return response(['message' => trans('passwords.code_is_expire')], 422);
        }

        return response([
            'code'    => $passwordReset->code,
            'message' => trans('passwords.code_is_valid'),
        ], 200);
    }
}
