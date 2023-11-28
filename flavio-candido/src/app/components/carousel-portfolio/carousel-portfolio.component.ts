import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-portfolio',
  templateUrl: './carousel-portfolio.component.html',
  styleUrls: ['./carousel-portfolio.component.css']
})
export class CarouselPortfolioComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-right"></i>', '<i class="fa fa-caret-left"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      },
    },
    nav: true
  }
  infoImagens: any = [
    {
      caminho: "../../../assets/images/outras/imagens-carousel/Fachada-Cecílio.jpeg",
      informacao: "Residências Construtora C&F - Projeto de Instalações Elétricas, Projeto de Instalações de Telecomunicações – 4 Casas Geminadas sendo 2 com terraço de 2 quartos sendo 1 suíte, 1 banheiro, Sala de Estar, Copa, Cozinha, Área de Serviço e Garagem."
    },
    {
      caminho: "../../../assets/images/outras/imagens-carousel/Fachada-Emilog.jpeg",
      informacao: "Residência Emilog - Projeto de Instalações Elétricas, Projeto de Instalações de Telecomunicações – 279,86m² , 4 quartos sendo 1 suíte, 2 banheiros, 1 lavabo, cozinha, área de serviço, sala de televisão, copa, sala de estar, área gourmet e garagem."
    },
    {
      caminho: "../../../assets/images/outras/imagens-carousel/Fachada-Wellyngton.jpg",
      informacao: "Residência Família Esteves da Silva - Projeto de Instalações Elétricas, Projeto de Instalações de Telecomunicações – 156,26m² - 3 quartos sendo 1 suíte, 1 banheiro, Sala copa, cozinha, área de serviço, área gourmet e garagem."
    },
    {
      caminho: "../../../assets/images/outras/imagens-carousel/Posto-VilaBeneves2.jpeg",
      informacao: "Posto de Combustível - Vila Beneves - Contagem/MG. Projeto de Instalações Elétricas, Projeto de Instalações de Telecomunicações."
    },
  ]
}
