<?php
namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Models\Guest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(AuthRequest $request)
    {
        $data = $request->validated();

        $guest = Guest::create([
            'fullname'      => $data['fullname'],
            'email_address' => $data['email_address'],
            'password'      => bcrypt($data['password']),
        ]);

        $token = $guest->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type'   => 'Bearer',
        ]);
    }

    // public function register(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'fullname'      => 'required|string|max:255',
    //         'email_address' => 'required|string|email|max:255|unique:guests',
    //         'password'      => 'required|string|min:6|confirmed',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json($validator->errors(), 400);
    //     }

    //     $guest = Guest::create([
    //         'fullname'      => $request->fullname,
    //         'email_address' => $request->email_address,
    //         'password'      => Hash::make($request->password),
    //     ]);
    //     $token = $guest->createToken('auth_token')->plainTextToken;

    //     return response()->json([
    //         'access_token' => $token,
    //         'token_type'   => 'Bearer',
    //     ]);
    // }

    public function login(Request $request)
    {

        $guest = Guest::where('email_address', $request['email_address'])->firstOrFail();

        if (! $guest || ! Hash::check($request->password, $guest->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $guest->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type'   => 'Bearer',
        ]);
    }
}
