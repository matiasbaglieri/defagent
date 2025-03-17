import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-slider-all-in-one',
  templateUrl: './slider-all-in-one.component.html',
  styleUrls: ['./slider-all-in-one.component.scss']
})
export class SliderAllInOneComponent implements OnInit {
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
