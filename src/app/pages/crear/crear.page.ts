import { ElectrodomesticosService } from './../../service/electrodomesticos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Electrodomesticos } from 'src/app/domain/Electrodomesticos';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  nombre : string;
  categoria: string;
  color: string;
  precio: string;

  electrodomestico: Electrodomesticos = new Electrodomesticos();

  constructor(private route: ActivatedRoute,
    private electrodomesticosService: ElectrodomesticosService) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.electrodomestico);
    this.electrodomesticosService.save(this.electrodomestico);
  }

}
