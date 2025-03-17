import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-app-landing-heading',
  templateUrl: './app-landing-heading.component.html',
  styleUrls: ['./app-landing-heading.component.scss']
})
export class AppLandingHeadingComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
