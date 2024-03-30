<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faixa;

class FaixaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Faixa::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $faixa = Faixa::create($request->all());

        return response()->json(['message' => 'Faixa criada com sucesso!', 'faixa' => $faixa], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $faixa = Faixa::find($id);

        if ($faixa) {
            return $faixa;
        } else {
            return response()->json(['message' => 'Faixa não encontrada!'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $faixa = Faixa::find($id);

        if ($faixa) {
            $faixa->update($request->all());

            return response()->json(['message' => 'Faixa atualizada com sucesso!', 'faixa' => $faixa], 200);
        } else {
            return response()->json(['message' => 'Faixa não encontrada!'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $faixa = Faixa::find($id);

        if ($faixa) {
            $faixa->delete();

            return response()->json(['message' => 'Faixa deletada com sucesso!'], 200);
        } else {
            return response()->json(['message' => 'Faixa não encontrada!'], 404);
        }
    }
}
