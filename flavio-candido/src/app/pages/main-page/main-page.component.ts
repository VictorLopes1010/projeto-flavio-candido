import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPage implements OnInit {
  mensagem: string = ''
  numero: string = "+55 31 99393-0770"
  isMouseOver: boolean = false;
  isMouseOverTxt: boolean = false;
  ngOnInit(): void {

  }

  constructor() {

  }



  construirLink(): string {
    const mensagemCodificada = encodeURIComponent(this.mensagem);
    return `https://api.whatsapp.com/send?phone=${this.numero}&text=${mensagemCodificada}`;
  }
  openTextArea(){
    setTimeout(()=>{
      this.isMouseOverTxt = true;
  }, 600);
  }
  enviarParaWpp() {
    window.open(this.construirLink(), '_blank');
  }
}
