import { Component, OnInit } from "@angular/core";
@Component({
 selector: 'app-specified-services',
 templateUrl: './specified-services.component.html',
 styleUrls: ['./specified-services.component.css']
})

export class SpecifiedServices implements OnInit{

  services : Services[] = [
    {
      id: 0,
      title: 'Elétrico',
      icon: 'electric_bolt',
      isOpen: true,
      services: [{
          serviceName: 'Elaboração de projetos'
        },
        {
          serviceName: 'Diagrama unifilar'
        },
        {
          serviceName: 'Dimensionamento de proteções'
        },
        {
          serviceName: 'Transformadores'
        },
        {
          serviceName: 'Quadros e painés elétricos'
        },
        {
          serviceName: 'Instalaçoes elétricas para áreas classificadas'
        },
      ]
    },
    {
      id: 1,
      title: 'Telecomunicações',
      icon: 'cell_tower',
      isOpen: true,
      services: [{
          serviceName: 'Cabeamento estruturado'
        },
        {
          serviceName: 'Rede cabeada metálica e fibra Óptica'
        },
        {
          serviceName: 'Controle de acesso'
        },
        {
          serviceName: 'Rede telefonia'
        },
        {
          serviceName: 'Rede de internet'
        },
        {
          serviceName: 'Rede de interfone'
        },
        {
          serviceName: 'Sistema de pabx'
        },
        {
          serviceName: 'Dimensionamento e especificação do rack'
        },
        {
          serviceName: 'Switchs, Di0, Dvr, Nvr, Voice e Patch Panel'
        },
        {
          serviceName: 'Sala de telecom'
        },
        {
          serviceName: 'Antena de tv -  CATV'
        },
        {
          serviceName: 'Câmeras de segurança - CFTV'
        },
      ]
    },
    {
      id: 2,
      title: 'SPDA - Para Raios',
      icon: 'flash_on',
      isOpen: true,
      services: [{
          serviceName: 'Gerenciamento de risco do PDA (SPDA + DPS) Especificação dos níveis de proteção conforme NBR 5419 - parte 2'
        },
        {
          serviceName: 'Sistema de captação, descidas e aterramento do SPDA (Para raios) para as edificações. Conforme NBR 5419 - parte 3'
        },
        {
          serviceName: 'SPDA Estrutural - Quando utiliza a ferragens estruturais como parte do SPDA'
        },
        {
          serviceName: 'SPDA Natural - Quando utilizar parte da estrutura metálica como componente natural de captação descida ou ateramentom do SPDA'
        },
        {
          serviceName: 'SPDA Artificial - Quando são dimensionados elementos como cabos e eletrodos para compor o SPDA'
        },
        {
          serviceName: 'Dimensionamentos e especificação do sist3ema de MPS (Medidas de proteção contra surtos) provenientes da rede elétrica ou da própria estrutura quando atingida por um raio. NBR 5419 - parte 4.'
        },
      ]
    },
    {
      id: 3,
      title: 'Luminotécnico',
      icon: 'lightbulb_circle',
      isOpen: true,
        services: [{
          serviceName: 'Estudos Luminotécnicos para ambientes de trabalho para atendimento ao nível mínimo de iluminação exigida por norma e emissão do relatório luminotécnico'
        },
        {
          serviceName: 'Estudo luminotécnico para ambientes residenciais'
        },
        {
          serviceName: 'Dimensionamento luminotecnico para os ambientes externos (Campos, Praças, Ruas, Pistas de caminhada, Patios e Estacionamento)'
        },
        {
          serviceName: 'Iluminação de fachada, igrejas galpão, e ambientes comerciais'
        },
        {
          serviceName: 'Simulação luminotécnica em software 3D com emissão do relatório indicando os níveis de luminância no ambiente'
        },
        {
          serviceName: 'Software Dial Lux, Relux, Tecnowatt Simon Ligthting e similares'
        },
      ]
    },
    {
      id: 4,
      title: 'Subestação',
      icon: 'dynamic_form',
      isOpen: true,
        services: [{
          serviceName: 'Subestação conforme ND - 5.3 Cemig'
        },
        {
          serviceName: 'Elaboração do coordenograma'
        },
        {
          serviceName: 'Parametrização do relé função 50/51/32'
        },
        {
          serviceName: 'Subestação interna particular em poste e obrigada'
        },
        {
          serviceName: 'Dimensionamento de grupo moto gerador funcionamento em regime de emergência e paralelismo com a rede'
        },
        {
          serviceName: 'Dimensionamento de transformadores'
        },
        {
          serviceName: 'Dimensionamento de painéis eleétricos'
        },
        {
          serviceName: 'Aprovação na concessionaria'
        },
      ]
    },
    {
      id: 5,
      title: 'Fotovoltaico',
      icon: 'solar_power',
      isOpen: true,
        services: [{
          serviceName: 'Usinas de geração de energia fotovoltaica'
        },
        {
          serviceName: 'Micro e mini geração conforme nd cemig'
        },
        {
          serviceName: 'Dimensionamento e especificação dos componentes da usina'
        },
        {
          serviceName: 'Módulos, inversores, cabos e String Box CC e Ca'
        },
        {
          serviceName: 'Cálculos da potência para especificação do sistema'
        },
        {
          serviceName: 'Aprovação do projeto junto à concessionaria'
        },
        {
          serviceName: 'Implantação e Start Up da usina fotovoltaica'
        },
        {
          serviceName: 'Acompanhamento pósenergização para orientação ao cliente'
        },
      ]
    }
  ]

  ngOnInit(): void {
    setInterval(() => this.toggleRandomService(), 2500);
  }

  constructor(){

  }

  toggleServicesList(service: Services) {
    service.isOpen = !service.isOpen;
  }

  toggleRandomService() {
    const randomIndex = Math.floor(Math.random() * this.services.length);
    const randomService = this.services[randomIndex];
    this.toggleServicesList(randomService);
  }

}
export class Services {
  id: number;
  title: string;
  icon: string;
  services: Array<{ serviceName: string }>;
  isOpen: boolean;

  constructor(id: number, title: string, icon: string, services: Array<{ serviceName: string }>, isOpen: boolean) {
    this.id = id;
    this.title = title;
    this.icon = icon;
    this.services = services;
    this.isOpen = isOpen
  }
}
