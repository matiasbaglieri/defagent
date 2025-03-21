import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-startup-heading',
  templateUrl: './startup-heading.component.html',
  styleUrls: ['./startup-heading.component.scss']
})
export class StartupHeadingComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
