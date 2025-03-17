import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-faqs1',
  templateUrl: './faqs1.component.html',
  styleUrls: ['./faqs1.component.scss']
})
export class Faqs1Component implements OnInit {
  @Input()
  edge: string;

  @Input()
  background: string;

  @Input()
  classes: string;

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
