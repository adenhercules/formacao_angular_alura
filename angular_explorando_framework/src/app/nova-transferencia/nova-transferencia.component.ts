import { Component } from "@angular/core";

@Component({
    selector: "app-nova-transferencia",
    templateUrl: "./nova-transferencia.component.html",
    styleUrls: ["./nova-transferencia.component.scss"]
})

export class TransferenciaComponent {

  transferir(){
    console.log("Transferir");
  }

}