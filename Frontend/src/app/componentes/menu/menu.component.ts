import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menu: MenuController, private datos:DatosService) { }

  //Variables a mostrar
  nombres; correo;

  ngOnInit() {
    let id = localStorage.getItem('id');
    this.DatosUsuario(id);
  }

  menuCerrar() {
    this.menu.close();
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
