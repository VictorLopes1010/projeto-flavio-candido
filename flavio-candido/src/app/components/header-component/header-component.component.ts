import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})

export class HeaderComponent implements OnInit {
  linksHeader: Array<{ nome: string;}> = [
    {
      nome: 'INÍCIO',
    },
    {
      nome: 'SERVIÇOS',
    },
    {
      nome: 'PORTFÓLIO',
    },
    {
      nome: 'PARCEIROS',
    },
    {
      nome: 'CONTATO',
    },
  ];

  ngOnInit(): void {}

  constructor() {}
}
