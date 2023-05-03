import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {
  private apiKey: string = 'ky8gZOc3VzQ6OYhVcW2Rjy1NUKtA6GTZ'
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = [];
  //Cambiar any por su tipo correspondiente
  public resultado: Gif[] = [];

  get historial(){
    return [...this._historial];
  }
  constructor(private http:HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultado = JSON.parse(localStorage.getItem('image')!)||[];
  }
  buscargifs(query:string =''){
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);//Limita la cantidad de entradas a la busqueda 

      localStorage.setItem('historial',JSON.stringify(this._historial));
      

    } 
    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10' )
      .set('q',query);
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
    .subscribe( (resp:SearchGifsResponse) =>{
      this.resultado=resp.data;
      localStorage.setItem('image',JSON.stringify(this.resultado)); 
    });
  }
}
