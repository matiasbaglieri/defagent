import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-testimonial-simple-slider-boxed',
  templateUrl: './testimonial-simple-slider-boxed.component.html',
  styleUrls: ['./testimonial-simple-slider-boxed.component.scss']
})
export class TestimonialSimpleSliderBoxedComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  ngOnInit() {}
}
