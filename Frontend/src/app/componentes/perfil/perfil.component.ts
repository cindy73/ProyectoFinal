import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { DatosService } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  constructor( private datos:DatosService, private rutas:Router, 
              private popoverCtrl: PopoverController,) { }

  //Variables a mostrar
  nombres; correo;

  ngOnInit() {
    let id = localStorage.getItem('id');
    this.DatosUsuario(id);
  }

  CerrarSesion(){
    localStorage.removeItem('id');
    this.popoverCtrl.dismiss();
    this.rutas.navigate(['/login']);
  }



  DatosUsuario(id:any){
      this.datos.ConsultarUsuario(id).then(data =>{
      this.nombres = data['data'][0].nombres +' '+data['data'][0].apellidos;
      this.correo = data['data'][0].email; 
    }).catch(error =>{
        console.log(error);
    })
  }

}
