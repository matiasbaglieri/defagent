import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-testimonials-slider',
  templateUrl: './testimonials-slider.component.html',
  styleUrls: ['./testimonials-slider.component.scss']
})
export class TestimonialsSliderComponent implements OnInit {
  public config: SwiperConfigInterface = {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: false,
    navigation: true,
    pagination: false
  };

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
