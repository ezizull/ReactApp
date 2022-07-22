<?php

namespace App\Http\Controllers\API;

use App\Models\Blog;
use Illuminate\Http\Request;
use App\Http\Resources\BlogResource;
use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;

class BlogController extends Controller
{

    public function index(){
        $blogs = Blog::all();
        return response()->json([
            'status' => 200,
            'blogs' => $blogs
        ]);
    }

    public function store(Request $request)
    {
        $blog = new Blog($request->all());
        $blog->save();

        return response()->json([
            'status' => 200,
            'blog' => $blog,
        ]);
    }

    public function edit($id){
        $blog = Blog::find($id);
        return response()->json([
            'status' => 200,
            'blog' => $blog
        ]);
    }

    public function update(Request $request, $id){
        $blog = Blog::find($id);
        $blog->title = $request->input('title');
        $blog->body = $request->input('body');
        $blog->update();

        return response()->json([
            'status' => 200,
            'blog' => $blog
        ]);
    }

    public function destroy($id){
        $blog = Blog::find($id);
        $blog->delete();

        return response()->json([
            'status' => 200,
        ]);
    }
}
