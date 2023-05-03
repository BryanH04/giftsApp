import { Component, ElementRef, Injectable, ViewChild } from '@angular/core';
import { GifsServicesService } from '../services/gifs-services.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement >;
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length === 0){return;}
    this.gifsservice.buscargifs(valor); 
    this.txtBuscar.nativeElement.value = '';
  }
  constructor(private gifsservice:GifsServicesService){}

}
