import { Component, OnInit } from "@angular/core";
import { MethodsUtils } from "src/app/Methods/Methods.utils";

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})



export class HeaderComponent implements OnInit {

  isMobileHeaderVisible = false;

  linksHeader: Array<{ nome: string; targetId: string; }> = [
    {
      nome: 'INÍCIO',
      targetId: 'inicio',
    },
    {
      nome: 'SERVIÇOS',
      targetId: 'servicos',
    },
    {
      nome: 'PORTFÓLIO',
      targetId: 'portfolio',
    },
    {
      nome: 'PARCEIROS',
      targetId: 'parceiros',
    },
    {
      nome: 'CONTATO',
      targetId: 'contato',
    },
  ];

  ngOnInit(): void {}

  tamanhoTela(){
    console.log(MethodsUtils.getSizePage())
    return MethodsUtils.getSizePage();
  }

  showMobileHeader() {
    this.isMobileHeaderVisible = true;
  }

  hideMobileHeader() {
    this.isMobileHeaderVisible = false;
  }
}
