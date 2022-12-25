import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  constructor() {
    this.listaTransferencia = [];
  }
  get transferencias(){
    return this.listaTransferencia;
  }
  adicionar(tranferencia: any) {
    this.hidratar(tranferencia);
    this.transferencias.push(tranferencia)
  }
  private hidratar (tranferencia: any){
    tranferencia.data = new Date()
  }
}
