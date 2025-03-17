import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {
  faInfoCircle,
  faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-slider-card-projects',
  templateUrl: './slider-card-projects.component.html',
  styleUrls: ['./slider-card-projects.component.scss']
})
export class SliderCardProjectsComponent implements OnInit {
  infoCircle = faInfoCircle;
  longArrowAltRight = faLongArrowAltRight;

  @Input()
  liftUp: boolean = true;

  features = [
    {
      title: ['NGO', ''],
      description: 'Together we transform and build the reality we dream of!',
      image: ''
    },
    {
      title: ['Human', 'Resources'],
      description: 'Your HR consultant in your hands with global reach!',
      image: ''
    },
    {
      title: ['Sales', ''],
      description: 'Better marketing, better sales, better results!',
      image: ''
    },
    {
      title: ['Customer', 'Service'],
      description: 'Don’t think it; don’t even answer, because we have it!',
      image: ''
    },
    {
      title: ['Real', 'Estate'],
      description: 'Your agent in your hands with global reach!',
      image: ''
    },
    {
      title: ['Healthcare', ''],
      description: 'Driving the wave of innovation, don’t be left behind!',
      image: ''
    }
    // {
    //   title: ['Insightful', 'Statistics'],
    //   description: 'facere quasi rem suscipit!',
    //   image: ''
    // }
  ];

  config: SwiperConfigInterface = {
    slidesPerView: 4,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    loop: true,
    breakpoints: {
      '1024': { slidesPerView: 4, spaceBetween: 40 },
      '992': { slidesPerView: 4, spaceBetween: 15 },
      '768': { slidesPerView: 4.5, spaceBetween: 15 },
      '576': { slidesPerView: 1.5, spaceBetween: 10 }
    },
    navigation: {
      nextEl: '.features-nav-next',
      prevEl: '.features-nav-prev'
    },
    pagination: false
  };

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
