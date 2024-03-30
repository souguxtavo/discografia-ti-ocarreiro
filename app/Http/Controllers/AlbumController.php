<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Album;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Album::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $album = Album::create($request->all());

        return response()->json(['message' => 'Album criado com sucesso!', 'album' => $album], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $album = Album::find($id);

        if ($album) {
            return $album;
        } else {
            return response()->json(['message' => 'Album não encontrado!'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $album = Album::find($id);

        if ($album) {
            $album->update($request->all());

            return response()->json(['message' => 'Album atualizado com sucesso!', 'album' => $album], 200);
        } else {
            return response()->json(['message' => 'Album não encontrado!'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $album = Album::find($id);

        if ($album) {
            $album->delete();

            return response()->json(['message' => 'Album deletado com sucesso!'], 200);
        } else {
            return response()->json(['message' => 'Album não encontrado!'], 404);
        }
    }
}
