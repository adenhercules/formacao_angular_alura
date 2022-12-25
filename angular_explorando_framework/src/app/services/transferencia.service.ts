import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transferencia} from "../models/transferencia.module";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private url: 'http://localhost:3000/transferencias';
  private listaTransferencia: any[];
  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }
  adicionar(tranferencia: any) {
    this.hidratar(tranferencia);
    this.listaTransferencia.push(tranferencia)
  }
  private hidratar (tranferencia: any){
    tranferencia.data = new Date()
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }


}
