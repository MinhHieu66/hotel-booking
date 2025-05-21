<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoomClass;

class RoomClassController extends Controller
{
    public function index()
    {
        $classes = RoomClass::latest()->paginate(5);
        return response()->json([
            'success' => true,
            'message' => 'Danh sách Room Class',
            'data' => $classes,
        ]);
    }

    // Tạo mới một loại phòng
    public function store(Request $request)
    {
        $validated = $request->validate([
            'class_name' => 'required|string|max:80',
            'base_price' => 'required|numeric',
        ]);
        $roomClass = RoomClass::create($validated);

        return response()->json($roomClass, 201);
    }

    // Hiển thị thông tin một loại phòng cụ thể
    public function show($id)
    {
        $roomClass = RoomClass::findOrFail($id);
        return response()->json($roomClass);
    }

    // Cập nhật thông tin một loại phòng
    public function update(Request $request, $id)
    {
        $roomClass = RoomClass::findOrFail($id);
        $validated = $request->validate([
            'class_name' => 'sometimes|required|string|max:80',
            'base_price' => 'sometimes|required|numeric',
        ]);
        $roomClass->update($validated);
        return response()->json($roomClass);
    }

    // Xóa một loại phòng
    public function destroy($id)
    {
        $roomClass = RoomClass::findOrFail($id);
        $roomClass->delete();
        return response()->json(['message' => 'Room class deleted successfully']);
    }
}