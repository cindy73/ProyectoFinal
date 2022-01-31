import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';
import { ToastController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private router:Router, private datos:DatosService, private toastController: ToastController,
              private loadingController: LoadingController) { }

  //Variables para la validación de la contraseña en ver o no la misma.
  passwordType:string = 'password';
  passwordShow:boolean = false;

  //Variables para el ingreso de datos.
  nombres; apellidos; correo; contra;  


  ngOnInit() {
  }

  async Toast(text, color) {
    const toast = await this.toastController.create({
      message:text,
      duration: 3000,
      color:color,
      
    });
    toast.present();
  }

  async Cargando(){
    const loading = await this.loadingController.create({
      message:"Creando cuenta...",
      cssClass: 'my-custom-class',
    });
    return await loading.present();
  }

  IngresarUsuario(){
    if(this.nombres==null || this.apellidos==null || this.correo==null || this.contra==null 
      || this.nombres=="" || this.apellidos=="" || this.correo=="" || this.contra==""){
        this.Toast("Existen campos vacíos", "danger");
      }else{
        this.Cargando();
        let datos = {
          'nombres':this.nombres,
          'apellidos':this.apellidos,
          'email': this.correo,
          'password': this.contra,
        }

        this.datos.RegistrarUsuario(datos).then(data =>{
          if(data['code']=='200'){
            this.Toast("El usuario ya se encuentra registrado", "danger");
            this.correo= "";
            this.loadingController.dismiss();
          }else{  
          this.Toast("Usuario registrado correctamente", "tertiary");
          this.nombres= "";
          this.apellidos= "";
          this.correo= "";
          this.contra="";
          this.loadingController.dismiss();
          this.router.navigate(['/login']);}
        }).catch(error =>{
            console.log(error);
        });


      }

  }


  Ver(){
    if(this.passwordShow){
      this.passwordShow=false;
      this.passwordType='password';
    }else{
      this.passwordShow=true;
      this.passwordType='text';
    }
  }

}
