import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, ModalController, PopoverController } from '@ionic/angular';
import { PerfilComponent } from 'src/app/componentes/perfil/perfil.component';
import { ApisMovieService } from 'src/app/servicios/apis-movie.service';
import { DetallesPeliculasPage } from '../detalles-peliculas/detalles-peliculas.page';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.page.html',
  styleUrls: ['./cartelera.page.scss'],
})
export class CarteleraPage implements OnInit {

    constructor(private router:Router, private peliculas:ApisMovieService, private popoverCtrl: PopoverController,
              private modalController: ModalController ) { }

  portada: any = [];
  nombreD:string;
  ContadorPagina: number=1;
  id_persona;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  ngOnInit() {
    this.GetCartelera(event);
    this.id_persona = localStorage.getItem('id');
  }

  async Detalles(id:string, nom:string){
    const modal= await this.modalController.create({
      component: DetallesPeliculasPage,
      componentProps: {
        id: id,
        id_p:  this.id_persona,   
        
      }
      
    });
    return modal.present();
  }

  GetCartelera(event){
    this.peliculas.Cartelera(this.ContadorPagina).then(data =>{
      for (let index = 0; index < data['results'].length; index++) {
        this.portada.push(data['results'][index]);   
      }

      if (this.portada.length == 200) {
        event.target.disabled = true;
      }
      event.target.complete();
      this.ContadorPagina++;

    }).catch(error =>{
        console.log(error);
    })

  }

  
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  Direccionar(){
    this.router.navigate(['/buscar']);
  }

  async Perfil(ev: any){
    const popover= await this.popoverCtrl.create({
      component:PerfilComponent,
      event:ev,
      mode:"ios",
      
      
    });

    await popover.present();
 }

}
