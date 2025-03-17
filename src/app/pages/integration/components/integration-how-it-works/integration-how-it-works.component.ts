import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-integration-how-it-works',
  templateUrl: './integration-how-it-works.component.html',
  styleUrls: ['./integration-how-it-works.component.scss']
})
export class IntegrationHowItWorksComponent implements OnInit {
  elements = [
    {
      icon: 'plan',
      title: 'Create',
      description:
        'EveryThink Studio allows you to develop data flows quickly and smoothly, in a spreadsheet. No technical, programming or scripting skills required.'
    },
    {
      icon: 'payment',
      title: 'Buy',
      description:
        'Find a wide variety of data flows created by 3rd party developers and certified by EveryThink. Find the interactions you need, see how it works, purchase it and implement it in your business in real-time.'
    },
    {
      icon: 'work',
      title: 'Sell',
      description:
        'Market the data flows created by you! Helps automate more and more interactions; and also get your reward!'
    }
  ];
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
