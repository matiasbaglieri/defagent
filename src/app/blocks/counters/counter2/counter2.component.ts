import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss']
})
export class Counter2Component implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
