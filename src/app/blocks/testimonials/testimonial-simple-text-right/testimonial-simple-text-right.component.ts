import { Component, OnInit } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-testimonial-simple-text-right',
  templateUrl: './testimonial-simple-text-right.component.html',
  styleUrls: ['./testimonial-simple-text-right.component.scss']
})
export class TestimonialSimpleTextRightComponent implements OnInit {
  quoteLeft = faQuoteLeft;

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
