import { Component } from "@angular/core";

@Component({
    selector: "app-nova-transferencia",
    templateUrl: "./nova-transferencia.component.html",
    styleUrls: ["./nova-transferencia.component.scss"]
})

export class TransferenciaComponent {

  valor: number;
  destino: number;

  transferir(){
    console.log("Transferir");
    console.log('valor', this.valor)
    console.log('destino', this.destino)
  }


}
