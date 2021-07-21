import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Electrodomesticos } from 'src/app/domain/Electrodomesticos';
import { ElectrodomesticosService } from './../../service/electrodomesticos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  busqueda: string;
  electrodomesticos : any;

  constructor(private route: ActivatedRoute,
    private electrodomesticosService: ElectrodomesticosService) { }

  ngOnInit() {
    this.electrodomesticos = this.electrodomesticosService.getElectrodomesticos();
  }

  buscar(){
    console.log(this.busqueda);
    this.electrodomesticos = this.electrodomesticosService.findElectrodomesticos(this.busqueda);
  }

}
