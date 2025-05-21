<?php
namespace App\Http\Controllers;

use App\Http\Requests\GuestStoreRequest;
use App\Http\Requests\GuestUpdateRequest;
use App\Models\Guest;
use Illuminate\Http\JsonResponse;

class GuestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $guests = Guest::latest()->paginate(10);

        return response()->json([
            'success' => true,
            'message' => 'Danh sách khách',
            'data'    => $guests,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(GuestStoreRequest $request)
    {
        try {
            $data = $request->validated();

            $guest = Guest::create([
                'fullname'      => $data['fullname'],
                'email_address' => $data['email_address'],
                'password'      => bcrypt($data['password']),
            ]);

            $token = $guest->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message'      => 'Thêm mới khách hàng thành công!',
                'guest'        => $guest,
                'access_token' => $token,
                'token_type'   => 'Bearer',
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Tạo mới khách hàng thất bại!',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Guest $guest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Guest $guest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(GuestUpdateRequest $request, $id)
    {
        try {
            $data = $request->validated();

            $guest = Guest::findOrFail($id);

            $guest->fullname      = $data['fullname'];
            $guest->email_address = $data['email_address'];

            // Nếu có truyền mật khẩu thì mới cập nhật
            if (! empty($data['password'])) {
                $guest->password = bcrypt($data['password']);
            }

            $guest->save();

            return response()->json([
                'message' => 'Cập nhật khách hàng thành công!',
                'guest'   => $guest,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Cập nhật khách hàng thất bại!',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $guest = Guest::findOrFail($id);
            $guest->delete();

            return response()->json([
                'message' => 'Xóa khách hàng thành công!',
            ], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Khách hàng không tồn tại!',
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Xóa khách hàng thất bại!',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }
}
