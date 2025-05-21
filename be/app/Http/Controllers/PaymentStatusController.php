<?php
namespace App\Http\Controllers;

use App\Http\Requests\PaymentStatusStoreRequest;
use App\Http\Requests\PaymentStatusUpdateRequest;
use App\Models\PaymentStatus;
use Illuminate\Http\JsonResponse;

class PaymentStatusController extends Controller
{
    // protected $table = 'payment_status';
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $paymentStatus = PaymentStatus::all();

        return response()->json([
            'success' => true,
            'message' => 'Danh sách trạng thái thanh toán',
            'data'    => $paymentStatus,
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
    public function store(PaymentStatusStoreRequest $request)
    {
        try {
            $data = $request->validated();

            $paymentStatus = PaymentStatus::create([
                'payment_status_name' => $data['payment_status_name'],
            ]);

            // $token = $guest->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message'       => 'Thêm mới trạng thái thanh toán thành công!',
                'paymentStatus' => $paymentStatus,
                // 'access_token' => $token,
                // 'token_type'   => 'Bearer',
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Tạo mới trạng thái thanh toán thất bại!',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $paymentStatus = PaymentStatus::find($id);
        if (! $paymentStatus) {
            return response()->json([
                'message' => 'Không tìm thấy trạng thái thanh toán',
            ], 404);
        }

        // Return Json Response
        return response()->json([
            'payment_status' => $paymentStatus,
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PaymentStatus $paymentStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PaymentStatusUpdateRequest $request, $id)
    {
        try {
            $data = $request->validated();

            $paymentStatus = PaymentStatus::findOrFail($id);

            $paymentStatus->payment_status_name = $data['payment_status_name'];

            $paymentStatus->save();

            return response()->json([
                'message'        => 'Cập nhật trạng thái thanh toán thành công!',
                'payment_status' => $paymentStatus,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Cập nhật trạng thái thanh toán thất bại!',
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
            $paymentStatus = PaymentStatus::findOrFail($id);
            $paymentStatus->delete();

            return response()->json([
                'message' => 'Xóa trạng thái thanh toán thành công!',
            ], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'message' => 'trạng thái thanh toán không tồn tại!',
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Xóa trạng thái thanh toán thất bại!',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }
}
