import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-online-payment-features',
  templateUrl: './online-payment-features.component.html',
  styleUrls: ['./online-payment-features.component.scss']
})
export class OnlinePaymentFeaturesComponent implements OnInit {
  elements = [
    {
      icon: 'credit-card',
      title: 'Create',
      description:
        'Everythink Studio allows you to develop automation processes quickly and smoothly. No technical, programming or scripting skills required.'
    },
    {
      icon: 'pie-chart',
      title: 'Buy',
      description:
        'Find a wide variety of automated processes created by 3rd party developers and certified by EveryThink. Find the process you need, see how it works, purchase it and implement it in your business in real-time. Not waste your time with outdated technologies anymore!'
    },
    {
      icon: 'book',
      title: 'Sell',
      description:
        'Market the automation processes created by you! Helps automate more and more processes and interactions; and also get your reward!'
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
