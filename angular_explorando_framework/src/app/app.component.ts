import {Component} from '@angular/core';
import {TransferenciaService} from "./services/transferencia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular_explorando_framework';
  transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  transferir($event) {
    this.service.adicionar($event).subscribe(x => console.log(x));
  }
}

