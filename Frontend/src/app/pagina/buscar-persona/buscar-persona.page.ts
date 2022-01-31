import { Component, OnInit, ViewChild, OnDestroy  } from '@angular/core';
import { IonInfiniteScroll, PopoverController, ModalController, ToastController } from '@ionic/angular';
import { PerfilComponent } from 'src/app/componentes/perfil/perfil.component';
import { ApisMovieService } from 'src/app/servicios/apis-movie.service';
import { DetallesPeliculasPage } from '../detalles-peliculas/detalles-peliculas.page';


@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.page.html',
  styleUrls: ['./buscar-persona.page.scss'],
})
export class BuscarPersonaPage implements OnInit {

  constructor(private peliculas:ApisMovieService, private popoverCtrl: PopoverController, private toastController: ToastController,
              private modalController: ModalController) { }

  lista: any = [];
  lista2: any = [];
  buscar: string;
  ContadorPagina: number=1;
  TitulosAnterior: string;
  id_persona
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  ngOnInit() {
    this.id_persona = localStorage.getItem('id');
  }
  
  ngOnDestroy() {
    this.buscar="";
    this.lista.length=0;
  }

  async Detalles(id:string){
    const modal= await this.modalController.create({
      component: DetallesPeliculasPage,
      componentProps: {
        id: id,
        id_p:  this.id_persona,   
      }
    });
    return modal.present();
  }

  async Perfil(ev: any){
    const popover= await this.popoverCtrl.create({
      component:PerfilComponent,
      event:ev,
      mode:"ios",
    });

    await popover.present();
  }

 async alerta(text:string, color:string) {
  const toast = await this.toastController.create({
    message:text,
    duration: 2000,
    color:color,
    
  });
  toast.present();
  }

 ObtenerPelicula(event){
  if (this.buscar!=this.TitulosAnterior) {
    this.lista.length=0;
    this.TitulosAnterior=this.buscar;
    this.ContadorPagina=1;
  }

  if(this.buscar=="" || this.buscar==null){
      this.alerta('Ingrese el actor a buscar', 'danger');
  }else{

   this.peliculas.BuscarActor(this.buscar, this.ContadorPagina).then(data => {

    for (let index = 0; index < data['results'].length; index++) {
      for (let i = 0; i < data['results'][index]['known_for'].length; i++){
          this.lista.push(data['results'][index]['known_for'][i]);  
      } 
    }

    


    console.log(this.lista);

    if(this.lista.length==0||this.lista.length==null){
      this.alerta('Actor no encontrado', 'danger');
     }

    if (this.lista.length == 200) {
      event.target.disabled = true;
    }
    event.target.complete();
    this.ContadorPagina++;
   }).catch(error => { 

   });
  }
  }

 toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
