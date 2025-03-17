import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-testimonial-simple-text-left',
  templateUrl: './testimonial-simple-text-left.component.html',
  styleUrls: ['./testimonial-simple-text-left.component.scss']
})
export class TestimonialSimpleTextLeftComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  ngOnInit() {}
}
