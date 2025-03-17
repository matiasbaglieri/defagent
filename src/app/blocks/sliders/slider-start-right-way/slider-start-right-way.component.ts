import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-slider-start-right-way',
  templateUrl: './slider-start-right-way.component.html',
  styleUrls: ['./slider-start-right-way.component.scss']
})
export class SliderStartRightWayComponent implements OnInit {
  elements = ['Build', 'Customize', 'Deploy', 'Automate'];
  longArrowAltRight = faLongArrowAltRight;
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
