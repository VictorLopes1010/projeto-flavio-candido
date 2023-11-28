import { Component, OnInit } from "@angular/core";
@Component({
 selector: 'app-our-services',
 templateUrl: './our-services.html',
 styleUrls: ['./our-services.css']
})

export class OurServices implements OnInit {
  services : Array<{ nome: string;}> = [
    {
      nome: 'Desenvolvimento de Projetos',
    },
    {
      nome: 'Execução de Instalações',
    },
    {
      nome: 'Consultoria',
    },
    {
      nome: 'Representação e distribuição comercial',
    },
    {
      nome: 'Laudo, medições e pareceres',
    },
    {
      nome: 'Cálculos, simulações e estudos técnicos',
    },
    {
      nome: 'Acompanhamento e Gerenciamento de obras e projetos',
    },
  ];
  ngOnInit(): void {

  }
  constructor(){

  }
}
