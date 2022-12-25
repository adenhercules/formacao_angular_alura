import {Component, Input, OnInit} from '@angular/core';
import {TransferenciaService} from "../services/transferencia.service";
import {Transferencia} from "../models/transferencia.module";

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit{
  tranferencias: any[];
  constructor(private service: TransferenciaService) {}

  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.tranferencias = transferencias;
    });
  }

}
