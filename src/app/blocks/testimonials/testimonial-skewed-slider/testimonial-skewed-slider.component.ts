import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-testimonial-skewed-slider',
  templateUrl: './testimonial-skewed-slider.component.html',
  styleUrls: ['./testimonial-skewed-slider.component.scss']
})
export class TestimonialSkewedSliderComponent implements OnInit {
  testimonials = [
    {
      logo: 1,
      customer: { name: 'Estefany Güechá', picture: 3 },
      testimonial:
        'This is an incredible tool that can help anyone to create their own algorithms and generate a more sustainable business. Thank you very much for helping us help other people!'
    },
    {
      logo: 2,
      customer: { name: 'Estefany Güechá', picture: 2 },
      testimonial:
        'This is an incredible tool that can help anyone to create their own algorithms and generate a more sustainable business. Thank you very much for helping us help other people!'
    },
    {
      logo: 1,
      customer: { name: 'Estefany Güechá', picture: 5 },
      testimonial:
        'This is an incredible tool that can help anyone to create their own algorithms and generate a more sustainable business. Thank you very much for helping us help other people!'
    },
    {
      logo: 2,
      customer: { name: 'Estefany Güechá', picture: 6 },
      testimonial:
        'This is an incredible tool that can help anyone to create their own algorithms and generate a more sustainable business. Thank you very much for helping us help other people!'
    }
  ];

  fadingConfig: SwiperConfigInterface = {
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: false
  };

  slidingConfig: SwiperConfigInterface = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: false
  };

  currentSlide: number = 0;

  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  updateSlider(currentSlide) {
    this.currentSlide = currentSlide;
  }

  public onIndexChange(index: number): void {
    this.currentSlide = index;
  }
}
