<?php
namespace App\Http\Controllers;

use App\Mail\SendCodeResetPassword;
use App\Models\ResetCodePassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ForgotPasswordController extends Controller
{
    public function __invoke(Request $request)
    {
        // dd($request->all());
        $data = $request->validate([
            'email_address' => 'required|email|exists:guests',
        ]);

        // Delete all old code that the user sent before.
        ResetCodePassword::where('email_address', $request->email)->delete();

        // Generate random code
        $data['code'] = mt_rand(100000, 999999);
        // $data['created_at'] = now()->timestamp;
        // dd($data);
        // Create a new code
        $codeData = ResetCodePassword::create($data);
        // Send email to user
        Mail::to($request->email_address)->send(new SendCodeResetPassword($codeData->code));
        return response(['message' => trans('passwords.sent')], 200);
    }
}
