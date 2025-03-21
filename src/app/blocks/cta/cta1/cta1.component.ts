import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-cta1',
  templateUrl: './cta1.component.html',
  styleUrls: ['./cta1.component.scss']
})
export class Cta1Component implements OnInit {
  @Input()
  edge: string;

  @Input()
  background: string;

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
