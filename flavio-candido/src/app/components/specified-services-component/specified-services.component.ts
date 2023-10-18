import { Component, OnInit } from "@angular/core";
@Component({
 selector: 'app-specified-services',
 templateUrl: './specified-services.component.html',
 styleUrls: ['./specified-services.component.css']
})

export class SpecifiedServices implements OnInit{

  services : Array<{ title: string, icon: string, services: Array<{ servicesName: string}>}> = [
    {
      title: 'Elétrico',
      icon: 'electric_bolt',
      services: [{
          servicesName: 'Elaboração de projetos'
        },
        {
          servicesName: 'Diagrama unifilar'
        },
        {
          servicesName: 'Dimensionamento de proteções'
        },
        {
          servicesName: 'Transformadores'
        },
        {
          servicesName: 'Quadros e painés elétricos'
        },
        {
          servicesName: 'Instalaçoes elétricas para áreas classificadas'
        },
      ]
    },
    {
      title: 'Telecomunicações',
      icon: 'cell_tower',
      services: [{
          servicesName: 'Cabeamento estruturado'
        },
        {
          servicesName: 'Rede cabeada metálica e fibra Óptica'
        },
        {
          servicesName: 'Controle de acesso'
        },
        {
          servicesName: 'Rede telefonia'
        },
        {
          servicesName: 'Rede de internet'
        },
        {
          servicesName: 'Rede de interfone'
        },
        {
          servicesName: 'Sistema de pabx'
        },
        {
          servicesName: 'Dimensionamento e especificação do rack'
        },
        {
          servicesName: 'Switchs, Di0, Dvr, Nvr, Voice e Patch Panel'
        },
        {
          servicesName: 'Sala de telecom'
        },
        {
          servicesName: 'Antena de tv -  CATV'
        },
        {
          servicesName: 'Câmeras de segurança - CFTV'
        },
      ]
    },
    {
      title: 'SPDA - Para Raios',
      icon: 'flash_on',
      services: [{
          servicesName: 'Gerenciamento de risco do PDA (SPDA + DPS) Especificação dos níveis de proteção conforme NBR 5419 - parte 2'
        },
        {
          servicesName: 'Sistema de captação, descidas e aterramento do SPDA (Para raios) para as edificações. Conforme NBR 5419 - parte 3'
        },
        {
          servicesName: 'SPDA Estrutural - Quando utiliza a ferragens estruturais como parte do SPDA'
        },
        {
          servicesName: 'SPDA Natural - Quando utilizar parte da estrutura metálica como componente natural de captação descida ou ateramentom do SPDA'
        },
        {
          servicesName: 'SPDA Artificial - Quando são dimensionados elementos como cabos e eletrodos para compor o SPDA'
        },
        {
          servicesName: 'Dimensionamentos e especificação do sist3ema de MPS (Medidas de proteção contra surtos) provenientes da rede elétrica ou da própria estrutura quando atingida por um raio. NBR 5419 - parte 4.'
        },
      ]
    },
    {
      title: 'Luminotécnico',
      icon: 'lightbulb_circle',
        services: [{
          servicesName: 'Estudos Luminotécnicos para ambientes de trabalho para atendimento ao nível mínimo de iluminação exigida por norma e emissão do relatório luminotécnico'
        },
        {
          servicesName: 'Estudo luminotécnico para ambientes residenciais'
        },
        {
          servicesName: 'Dimensionamento luminotecnico para os ambientes externos (Campos, Praças, Ruas, Pistas de caminhada, Patios e Estacionamento)'
        },
        {
          servicesName: 'Iluminação de fachada, igrejas galpão, e ambientes comerciais'
        },
        {
          servicesName: 'Simulação luminotécnica em software 3D com emissão do relatório indicando os níveis de luminância no ambiente'
        },
        {
          servicesName: 'Software Dial Lux, Relux, Tecnowatt Simon Ligthting e similares'
        },
      ]
    },
    {
      title: 'Subestação',
      icon: 'dynamic_form',
        services: [{
          servicesName: 'Subestação conforme ND - 5.3 Cemig'
        },
        {
          servicesName: 'Elaboração do coordenograma'
        },
        {
          servicesName: 'Parametrização do relé função 50/51/32'
        },
        {
          servicesName: 'Subestação interna particular em poste e obrigada'
        },
        {
          servicesName: 'Dimensionamento de grupo moto gerador funcionamento em regime de emergência e paralelismo com a rede'
        },
        {
          servicesName: 'Dimensionamento de transformadores'
        },
        {
          servicesName: 'Dimensionamento de painéis eleétricos'
        },
        {
          servicesName: 'Aprovação na concessionaria'
        },
      ]
    },
    {
      title: 'Fotovoltaico',
      icon: 'solar_power',
        services: [{
          servicesName: 'Usinas de geração de energia fotovoltaica'
        },
        {
          servicesName: 'Micro e mini geração conforme nd cemig'
        },
        {
          servicesName: 'Dimensionamento e especificação dos componentes da usina'
        },
        {
          servicesName: 'Módulos, inversores, cabos e String Box CC e Ca'
        },
        {
          servicesName: 'Cálculos da potência para especificação do sistema'
        },
        {
          servicesName: 'Aprovação do projeto junto à concessionaria'
        },
        {
          servicesName: 'Implantação e Start Up da usina fotovoltaica'
        },
        {
          servicesName: 'Acompanhamento pósenergização para orientação ao cliente'
        },
      ]
    }
  ]

  ngOnInit(): void {

  }

  constructor(){

  }

}
