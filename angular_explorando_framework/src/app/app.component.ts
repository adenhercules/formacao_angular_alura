import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular_explorando_framework';
  transferencias: any[] = [];

  transferir($event) {
    console.log($event);
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push($event);
  }
}
