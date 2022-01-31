import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisMovieService {

  constructor(private http: HttpClient) { }

  Populares(page:number) {
    let  url = 'https://api.themoviedb.org/3/movie/popular?api_key=40c68044240c61abae9b6e85ee409414&language=en-US&page='+page;
    return new Promise ((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }

  Estrenos(page:number) {
    let  url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=40c68044240c61abae9b6e85ee409414&language=en-US&page='+page;
    return new Promise ((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }

  Cartelera(page:number) {
    let  url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=40c68044240c61abae9b6e85ee409414&language=en-US&page='+page;
    return new Promise ((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }


  BuscarPelicula(nombre:string, page:number) {
    let  url = 'https://api.themoviedb.org/3/search/movie?api_key=40c68044240c61abae9b6e85ee409414&language=en&query='+nombre+'&page='+page+'&include_adult=false';
    return new Promise ((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }

  BuscarActor(nombre:string, page:number) {
    let  url = 'https://api.themoviedb.org/3/search/person?api_key=40c68044240c61abae9b6e85ee409414&language=en-US&query='+nombre+'&page='+page+'&include_adult=false';
    return new Promise ((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }

  Detalles(id:string) {
    let  url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key=40c68044240c61abae9b6e85ee409414&language=en-US';
    return new Promise ((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }
  
}
