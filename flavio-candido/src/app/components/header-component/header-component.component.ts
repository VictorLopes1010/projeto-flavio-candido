import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})

export class HeaderComponent implements OnInit {
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

  constructor() {}


}
