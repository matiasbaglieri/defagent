import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-integration-why-choose-us',
  templateUrl: './integration-why-choose-us.component.html',
  styleUrls: ['./integration-why-choose-us.component.scss']
})
export class IntegrationWhyChooseUsComponent implements OnInit {
  features = [
    {
      name: 'In spreadsheet',
      icon: 'box',
      description:
        'The process is very simple and user friendly. Only limited to the ingenuity of people who want to utilize AI to improve their quality of life.'
    },
    {
      name: 'Real-time results',
      icon: 'layers',
      description:
        'Streamlines processes, discovers deficiencies, provides information and iterates in real-time.'
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
