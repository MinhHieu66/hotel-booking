<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoomStatus;

class RoomStatusController extends Controller
{
    // Hiển thị danh sách tất cả trạng thái phòng
    public function index()
    {
        $statuses = RoomStatus::latest()->paginate(5);
        return response()->json([
            'success' => true,
            'message' => 'Danh sách Room Status',
            'data' => $statuses,
        ]);
    }

    // Tạo mới một trạng thái phòng
    public function store(Request $request)
    {
        $validated = $request->validate([
            'status_name' => 'required|string|max:80',
        ]);
        $status = RoomStatus::create($validated);
        return response()->json($status, 201);
    }

    // Hiển thị thông tin một trạng thái phòng cụ thể
    public function show($id)
    {
        $status = RoomStatus::findOrFail($id);
        return response()->json($status);
    }

    // Cập nhật thông tin một trạng thái phòng
    public function update(Request $request, $id)
    {
        $status = RoomStatus::findOrFail($id);
        $validated = $request->validate([
            'status_name' => 'sometimes|required|string|max:80',
        ]);
        $status->update($validated);
        return response()->json($status);
    }

    // Xóa một trạng thái phòng
    public function destroy($id)
    {
        $status = RoomStatus::findOrFail($id);
        $status->delete();
        return response()->json(['message' => 'Room status deleted successfully']);
    }
}