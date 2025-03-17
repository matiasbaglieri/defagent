import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-automate-social-automation-solution',
  templateUrl: './automate-social-automation-solution.component.html',
  styleUrls: ['./automate-social-automation-solution.component.scss']
})
export class AutomateSocialAutomationSolutionComponent implements OnInit {
  bubbles = [
    { text: 'Accesible option', position: { top: 47, left: 1 } },
    { text: 'Geolocated metrics', position: { top: 69, left: 61 } },
    { text: 'Key metrics', position: { top: 15, left: 85 } },
    { text: 'Custom Dashboard', position: { top: 7, left: 30 } }
  ];
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
