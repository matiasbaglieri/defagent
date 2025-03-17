import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-counter6',
  templateUrl: './counter6.component.html',
  styleUrls: ['./counter6.component.scss']
})
export class Counter6Component implements OnInit {
  counters = [
    { value: 273, title: 'Components' },
    { value: 654, title: 'Downloads' },
    { value: 7941, title: 'Followers' },
    { value: 654, title: 'New users' }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
