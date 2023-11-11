import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-carousel-portfolio',
  templateUrl: './carousel-portfolio.component.html',
  styleUrls: ['./carousel-portfolio.component.css']
})
export class CarouselPortfolioComponent {
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  private swiper: any;

  onSwiper(swiper: any) {
    this.swiper = swiper;
  }

  onSlideChange() {
    console.log('slide change');
  }

  // Função para avançar para o próximo slide
  goToNextSlide() {
    if (this.swiper) {
      this.swiper.slideNext();
    }
  }

  // Função para voltar para o slide anterior
  goToPreviousSlide() {
    if (this.swiper) {
      this.swiper.slidePrev();
    }
  }
}
