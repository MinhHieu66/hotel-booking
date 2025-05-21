<?php
namespace App\Http\Controllers;

use App\Models\Carousel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // All Product
        $carousel = Carousel::all();

        // Return Json Response
        return response()->json([
            'carousel' => $carousel,
        ], 200);
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
    public function store(Request $request)
    {
        // dd($request->all());
        try {
            $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();

            // Create Product
            Carousel::create([
                'title'   => $request->title,
                'content' => $request->content,
                'image'   => $imageName,
            ]);

            // Save Image in Storage folder
            Storage::disk('public')->put($imageName, file_get_contents($request->image));

            // Return Json Response
            return response()->json([
                'message' => "Carousel successfully created.",
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!",
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Product Detail
        $carousel = Carousel::find($id);
        if (! $carousel) {
            return response()->json([
                'message' => 'Carousel Not Found.',
            ], 404);
        }

        // Return Json Response
        return response()->json([
            'carousel' => $carousel,
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

        try {
            // Find product
            $carousel = Carousel::find($id);
            if (! $carousel) {
                return response()->json([
                    'message' => 'Carousel Not Found.',
                ], 404);
            }

            $carousel->title   = $request->title;
            $carousel->content = $request->content;

            if ($request->image) {

                // Public storage
                $storage = Storage::disk('public');

                // Old iamge delete
                if ($storage->exists($carousel->image)) {
                    $storage->delete($carousel->image);
                }

                // Image name
                $imageName       = Str::random(32) . "." . $request->image->getClientOriginalExtension();
                $carousel->image = $imageName;

                // Image save in public folder
                $storage->put($imageName, file_get_contents($request->image));
            }

            // Update Product
            $carousel->save();

            // Return Json Response
            return response()->json([
                'message' => "Carousel successfully updated.",
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!",
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Detail
        $carousel = Carousel::find($id);
        if (! $carousel) {
            return response()->json([
                'message' => 'Carousel Not Found.',
            ], 404);
        }

        // Public storage
        $storage = Storage::disk('public');

        // Iamge delete
        if ($storage->exists($carousel->image)) {
            $storage->delete($carousel->image);
        }

        // Delete Product
        $carousel->delete();

        // Return Json Response
        return response()->json([
            'message' => "Carousel successfully deleted.",
        ], 200);
    }
}
