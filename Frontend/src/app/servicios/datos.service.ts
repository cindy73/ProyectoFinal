import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  RegistrarUsuario(data:any) {
    //let  url = 'http://127.0.0.1:8000/api/Persona';
    let  url = 'https://ancient-tundra-60909.herokuapp.com/api/Persona';
    return new Promise ((resolve, reject) => {
      this.http.post(url, data).subscribe(res => {
        resolve(res);  
      }, error => {
        reject(error);
      });
    });
  }

  ValidarUsuarioIngreso(email:string, contrase:string) {
    //let  url = 'http://127.0.0.1:8000/api/Login/'+email+'/'+contrase;
    let  url = 'https://ancient-tundra-60909.herokuapp.com/api/Login/'+email+'/'+contrase;
    return new Promise ((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }

  ConsultarUsuario(id:any) {
    //let  url = 'http://127.0.0.1:8000/api/Persona/'+id;
    let  url = 'https://ancient-tundra-60909.herokuapp.com/api/Persona/'+id;
    return new Promise ((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }

  AddComentarios(data:any) {
    //let  url = 'http://127.0.0.1:8000/api/Comentario';
    let  url = 'https://ancient-tundra-60909.herokuapp.com/api/Comentario';
    return new Promise ((resolve, reject) => {
      this.http.post(url, data).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }

  ObtenerComentarios(id:string) {
    //let  url = 'http://127.0.0.1:8000/api/Comentario/'+id;
    let  url = 'https://ancient-tundra-60909.herokuapp.com/api/Comentario/'+id;
    return new Promise ((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }
  
}
