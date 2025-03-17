import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-integration-heading',
  templateUrl: './integration-heading.component.html',
  styleUrls: ['./integration-heading.component.scss']
})
export class IntegrationHeadingComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
