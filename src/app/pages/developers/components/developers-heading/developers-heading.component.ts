import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-developers-heading',
  templateUrl: './developers-heading.component.html',
  styleUrls: ['./developers-heading.component.scss']
})
export class DevelopersHeadingComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  ngOnInit() {}
}
