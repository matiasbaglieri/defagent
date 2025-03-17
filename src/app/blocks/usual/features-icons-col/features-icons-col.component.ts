import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-features-icons-col',
  templateUrl: './features-icons-col.component.html',
  styleUrls: ['./features-icons-col.component.scss']
})
export class FeaturesIconsColComponent implements OnInit {
  elements = [
    {
      icon: 'activity',
      title: 'Deliver Actionable Insights',
      description:
        'EveryThink AIaaS synthesizes data from diverse clinical data points into tangible and actionable insights. The advanced analytics and machine learning algorithms also make it easier to connect physicians with up-to-date treatment options and relevant insights for patients on a case-by-case basis.'
    },
    {
      icon: 'sliders',
      title: 'Find and compare similar patients',
      description:
        'EveryThink’s software as a service AI solution empowers clinicians to make better and more efficient data-driven treatment decisions thanks to the ability to cross-reference similar patients within clinical, treatment, and outcome datasets.'
    },
    {
      icon: 'database',
      title: 'Access rich clinical data with a single click',
      description:
        'EveryThink’s low-code platform synthesizes and analyzes data from multiple electronic medical records, including progress notes, path reports, and radiology scans/reports, among other enormous and disparate sources. This allows for easy access at any point.'
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
