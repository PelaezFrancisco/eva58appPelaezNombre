import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Electrodomesticos } from '../domain/Electrodomesticos';

@Injectable({
  providedIn: 'root'
})
export class ElectrodomesticosService {

  constructor(public afs: AngularFirestore) { }

  save(electrodomestico: Electrodomesticos){
    const refElectro = this.afs.collection("Electrodomesticos");

    if (electrodomestico.uid == null){
      electrodomestico.uid = this.afs.createId();
      
    }

    refElectro.doc(electrodomestico.uid).set(Object.assign({},electrodomestico));
  }

  getElectrodomesticos(): Observable<any[]> {
    return this.afs.collection("Electrodomesticos").valueChanges();
  }

  findElectrodomesticos(busqueda): Observable<any[]> {
    return this.afs.collection("Electrodomesticos",
    ref => ref.where("nombre","==",busqueda)).valueChanges();
  }
}
