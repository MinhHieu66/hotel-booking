<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bed;

class BedsController extends Controller
{
    // Hiển thị danh sách tất cả các bed
    public function index()
    {
        // $beds = \App\Models\Bed::all();
        // return response()->json($beds);

        $beds = Bed::latest()->paginate(5);
        return response()->json([
            'success' => true,
            'message' => 'Danh sách bed',
            'data' => $beds,
        ]);
    }

    // Tạo mới một bed
    public function store(Request $request)
    {
        $validated = $request->validate([
            'bed_type_name' => 'required|string|max:80',
        ]);
        $bed = \App\Models\Bed::create($validated);
        return response()->json($bed, 201);
    }

    // Hiển thị thông tin một bed cụ thể
    public function show($id)
    {
        $bed = \App\Models\Bed::findOrFail($id);
        return response()->json($bed);
    }

    // Cập nhật thông tin một bed
    public function update(Request $request, $id)
    {
        $bed = \App\Models\Bed::findOrFail($id);
        $validated = $request->validate([
            'bed_type_name' => 'sometimes|required|string|max:80',
        ]);
        $bed->update($validated);
        return response()->json($bed);
    }

    // Xóa một bed
    public function destroy($id)
    {
        $bed = \App\Models\Bed::findOrFail($id);
        $bed->delete();
        return response()->json(['message' => 'Bed deleted successfully']);
    }
}