<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $datos=Persona::where('email', $request->email)->get()->first(); 
        if($datos != null){
           return response()->json(['code'=>'200' ]); 
        }else{
        $coment=new Persona();
        $coment->nombres=$request->nombres;
        $coment->apellidos=$request->apellidos;
        $coment->email=$request->email;
        $coment->password=$request->password;
        $coment->save();
        return response()->json(['code'=>'201']);
        }
    }

    public function ValidarUsuario($email, $password)
    {
        $datos=Persona::where('email', $email)->where('password', $password)->get();  
        $num_rows = count($datos);
        if($num_rows != 0){
            return response()->json(['data'=>$datos,'code'=>'201']);
        }else{
            return response()->json(['code'=>'200']);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Persona  $persona
     * @return \Illuminate\Http\Response
     */
    public function show($id_persona)
    {
        $datos=Persona::where('id', $id_persona)->get();
        return response()->json(['data'=>$datos]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Persona  $persona
     * @return \Illuminate\Http\Response
     */
    public function edit(Persona $persona)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Persona  $persona
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Persona $persona)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Persona  $persona
     * @return \Illuminate\Http\Response
     */
    public function destroy(Persona $persona)
    {
        //
    }
}
