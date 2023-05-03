import { Component } from '@angular/core';
import { GifsServicesService } from '../../gifs/services/gifs-services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  get historial(){
    return [...this.gifsservices.historial]
  }
  constructor(private gifsservices:GifsServicesService){}
  buscar(termino:string){ 
    this.gifsservices.buscargifs(termino);
  }
}
