import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-startup-features',
  templateUrl: './startup-features.component.html',
  styleUrls: ['./startup-features.component.scss']
})
export class StartupFeaturesComponent implements OnInit {
  elements = [
    {
      icon: 'bar-chart',
      title: 'DEMOS.START_UP.FEATURES.BUSINESS_TITLE',
      desc: 'DEMOS.START_UP.FEATURES.BUSINESS_DESC'
    },
    {
      icon: 'dollar-sign',
      title: 'DEMOS.START_UP.FEATURES.PAYMENTS_TITLE',
      desc: 'DEMOS.START_UP.FEATURES.PAYMENTS_DESC'
    },
    {
      icon: 'clock',
      title: 'DEMOS.START_UP.FEATURES.SCHEDULES_TITLE',
      desc: 'DEMOS.START_UP.FEATURES.SCHEDULES_DESC'
    },
    {
      icon: 'calendar',
      title: 'DEMOS.START_UP.FEATURES.SAVING_TITLE',
      desc: 'DEMOS.START_UP.FEATURES.SAVING_DESC'
    },
    {
      icon: 'tablet',
      title: 'DEMOS.START_UP.FEATURES.INTERFACE_TITLE',
      desc: 'DEMOS.START_UP.FEATURES.INTERFACE_DESC'
    },
    {
      icon: 'layout',
      title: 'DEMOS.START_UP.FEATURES.SITE_TITLE',
      desc: 'DEMOS.START_UP.FEATURES.SITE_DESC'
    }
  ];
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
