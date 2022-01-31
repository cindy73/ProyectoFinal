<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $table = 'comentarios';
    protected $primaryKey = 'id';
    protected $fillable = [
        'id_persona','id_pelicula', 'comentario'
     ];

    public function usuario(){
    	return $this->belongsTo('App\Models\Persona','id_persona');
    }
}
