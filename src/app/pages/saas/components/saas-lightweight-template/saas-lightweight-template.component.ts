import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-saas-lightweight-template',
  templateUrl: './saas-lightweight-template.component.html',
  styleUrls: ['./saas-lightweight-template.component.scss']
})
export class SaasLightweightTemplateComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
