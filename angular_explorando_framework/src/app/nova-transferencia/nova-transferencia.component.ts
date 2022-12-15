import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-nova-transferencia",
    templateUrl: "./nova-transferencia.component.html",
    styleUrls: ["./nova-transferencia.component.scss"]
})

export class TransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<String>();

  valor: number;
  destino: number;

  transferir(){
    console.log("Transferir");
    const valorEmitir = {valor: this.valor, destino: this.destino}
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

  private  ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
        this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
}

exibirModalErro(mensagem){
    this.valoresComErro.emit(mensagem);
}

}
