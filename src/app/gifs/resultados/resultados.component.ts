import { Component } from '@angular/core';
import { GifsServicesService } from '../services/gifs-services.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

  get resultados(){
    return this.gifsservice.resultado;
  }

  constructor(private gifsservice : GifsServicesService){}
}
