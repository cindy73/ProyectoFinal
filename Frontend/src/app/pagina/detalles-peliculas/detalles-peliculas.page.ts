import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { IonInfiniteScroll, ModalController, ToastController } from '@ionic/angular';
import { ApisMovieService } from 'src/app/servicios/apis-movie.service';
import { DatosService } from 'src/app/servicios/datos.service';



@Component({
  selector: 'app-detalles-peliculas',
  templateUrl: './detalles-peliculas.page.html',
  styleUrls: ['./detalles-peliculas.page.scss'],
})
export class DetallesPeliculasPage implements OnInit {

  constructor(private modalController: ModalController, private peliculas:ApisMovieService, private datos:DatosService,
              private toastController: ToastController,) { }

  @Input () id;
  @Input () id_p;
  descripcion;

  ArrayDetalles: any=[];
  ArrayComen: any[];

  id_pelicula; id_persona;
  asignar=true;

  ngOnInit() {
    
    this.id_pelicula = this.id;
    this.id_persona = this.id_p;

    this.MostrarDetalles();
    this.GetComentarios(event);
  }

  Salir(){
    this.modalController.dismiss();
  }


  MostrarDetalles(){
    this.peliculas.Detalles(this.id_pelicula).then(data =>{
      this.ArrayDetalles=data;
    }).catch(error =>{
        console.log(error);
    })

  }

  GetComentarios(event){
    this.datos.ObtenerComentarios(this.id_pelicula).then(data =>{
        this.ArrayComen=data['data'];
        
    }).catch(error =>{
        console.log(error);
    })
  }


  async Toast(mensaje:string, color:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color:color,
    });
    toast.present();
  }



  AgregarComentario(){
    if(this.descripcion==null || this.descripcion==""){
        this.Toast("Agregue un comentario", "danger");
    }else{
      let data = {
      'id_persona': this.id_persona,
      'comentario':this.descripcion,
      'id_pelicula': this.id_pelicula
    }
    this.datos.AddComentarios(data).then(data =>{
      this.descripcion= "";
      this.GetComentarios(event);
      this.Toast("Comentario agregado exitosamente", "tertiary");
    }).catch(error =>{
        console.log(error);
    });
    }
    
  }

}
