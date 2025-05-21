<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Floor;

class FloorsController extends Controller
{
    // Hiển thị danh sách tất cả các tầng
    public function index()
    {
        $floors = Floor::latest()->paginate(5);
        return response()->json([
            'success' => true,
            'message' => 'Danh sách Floor',
            'data' => $floors,
        ]);
    }

    // Tạo mới một tầng
    public function store(Request $request)
    {
        $validated = $request->validate([
            'floor_number' => 'required|integer|max:11',
        ]);
        $floor = \App\Models\Floor::create($validated);
        return response()->json($floor, 201);
    }

    // Hiển thị thông tin một tầng cụ thể
    public function show($id)
    {
        $floor = \App\Models\Floor::findOrFail($id);
        return response()->json($floor);
    }

    // Cập nhật thông tin một tầng
    public function update(Request $request, $id)
    {
        $floor = \App\Models\Floor::findOrFail($id);
        $validated = $request->validate([
            'floor_number' => 'sometimes|required|integer|max:11',
        ]);
        $floor->update($validated);
        return response()->json($floor);
    }

    // Xóa một tầng
    public function destroy($id)
    {
        $floor = \App\Models\Floor::findOrFail($id);
        $floor->delete();
        return response()->json(['message' => 'Floor deleted successfully']);
    }
}