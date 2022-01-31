import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';
import { ToastController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router, private datos:DatosService, private toastController: ToastController,
              private loadingController: LoadingController) { }

  //Variables para la validación de la contraseña en ver o no la misma.
  passwordType:string = 'password';
  passwordShow:boolean = false;
  passwordType2:string = 'password';
  passwordShow2:boolean = false;

  //Variables de Ingreso
  correo; contra; 

  //Variables de registro
  nombres; apellidos; correoR; contraR; 

  asignar = true;

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
      message:"Cargando...",
      cssClass: 'my-custom-class',
    });
    return await loading.present();
  }

  async Incorrecto() {
    const toast = await this.toastController.create({
      message: 'Usuario no encontrado',
      position: 'top',
      duration: 3000,
      color:"danger",
      buttons: [
        {
          side: 'start',
          icon: 'close',
          text: 'Datos Incorrectos',
          handler: () => {
            
          }
        }, {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    toast.present();
    this.loadingController.dismiss();
  }

  IniciarSesion(){
    if(this.correo==null || this.contra==null || this.correo=="" || this.contra==""){
      this.Toast("Existen campos vacíos", "danger");
    }else{
      this.Cargando();
      this.datos.ValidarUsuarioIngreso(this.correo, this.contra).then(data =>{
      if(data['code']=='201'){
        localStorage.setItem('id', data['data'][0].id);
        this.router.navigate(['/estrenos']);
        this.loadingController.dismiss();
        this.LimpiarL();
        this.asignar=true;
      }else{
        this.Incorrecto();
      }
   
    }).catch(error =>{
        console.log(error);
    })
  }
  }

  IngresarUsuario(){
    if(this.nombres==null || this.apellidos==null || this.correoR==null || this.contraR==null 
      || this.nombres=="" || this.apellidos=="" || this.correoR=="" || this.contraR==""){
        this.Toast("Existen campos vacíos", "danger");
      }else{
        this.Cargando();
        let datos = {
          'nombres':this.nombres,
          'apellidos':this.apellidos,
          'email': this.correoR,
          'password': this.contraR,
        }

        this.datos.RegistrarUsuario(datos).then(data =>{
          if(data['code']=='200'){
            this.Toast("El usuario ya se encuentra registrado", "danger");
            this.correoR= "";
            this.loadingController.dismiss();
          }else{  
          this.Toast("Usuario registrado correctamente", "tertiary");
          this.LimpiarR();
          this.loadingController.dismiss();
          this.asignar=true;
        }
        }).catch(error =>{
            console.log(error);
        });


      }

  }

  DireccionarRegistrar(){
    this.router.navigate(['/registrar']);
  }

  VerL(){
    if(this.passwordShow){
      this.passwordShow=false;
      this.passwordType='password';
    }else{
      this.passwordShow=true;
      this.passwordType='text';
    }
  }

  VerR(){
    if(this.passwordShow2){
      this.passwordShow2=false;
      this.passwordType2='password';
    }else{
      this.passwordShow2=true;
      this.passwordType2='text';
    }
  }

  LimpiarR(){
    this.nombres= "";
    this.apellidos= "";
    this.correoR= "";
    this.contraR="";
    this.correo="";
    this.contra="";
    this.asignar = true;
    this.passwordType = 'password';
    this.passwordShow = false;
  }

  LimpiarL(){
    this.correo="";
    this.contra="";
    this.asignar = false;
    this.passwordType2 = 'password';
    this.passwordShow2 = false;
  }

}
