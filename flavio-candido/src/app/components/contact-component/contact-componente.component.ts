import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-componente.component.html',
  styleUrls: ['./contact-componente.component.css']
})

export class ContactComponent implements OnInit{

  nome: string = ''
  mensagem: string = ''
  numero: string = "5531993930770"
  ngOnInit(): void {

  }

  constructor (private toastr: ToastrService) {}

  enviarMensagem() {
    if(this.nome.length < 1){
      this.toastr.warning("Favor Inserir nome")
    }else if(this.mensagem.length < 1){
      this.toastr.warning("Favor Inserir mensagem desejada")
    }else{
      const link = this.construirLink();
      this.enviarParaWpp(link);
    }
  }

  construirLink(): string {
    const mensagemCodificada = encodeURIComponent(`Olá sou ${this.nome}, ${this.mensagem}`);
    return `https://wa.me//${this.numero}?text=${mensagemCodificada}`;
  }

  enviarParaWpp(link: string) {
    window.open(link, '_blank');
  }

}
