import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPage implements OnInit {
  mensagem: string = 'Olá, vim por meio do site e quero saber mais!'
  numero: string = "5531993930770"
  isMouseOver: boolean = false;
  ngOnInit(): void {

  }

  constructor() {

  }



  construirLink(): string {
    const mensagemCodificada = encodeURIComponent(this.mensagem);
    return `https://wa.me//${this.numero}?text=${mensagemCodificada}`;
  }

  enviarParaWpp() {
    window.open(this.construirLink(), '_blank');
  }
}
