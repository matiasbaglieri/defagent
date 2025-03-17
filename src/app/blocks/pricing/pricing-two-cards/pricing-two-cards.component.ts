import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'dc-pricing-two-cards',
  templateUrl: './pricing-two-cards.component.html',
  styleUrls: ['./pricing-two-cards.component.scss']
})
export class PricingTwoCardsComponent implements OnInit {
  plans = [
    {
      icon: 'box',
      plan: {
        name: 'DEMOS.START_UP.PRICING_TWO.PLAN_BASIC',
        price: { monthly: 9.99, yearly: 99.78 },
        description: 'DEMOS.START_UP.PRICING_TWO.PLAN_BASIC_DESC'
      },
      features: [
        {
          name: 'DEMOS.START_UP.PRICING_TWO.FEATURES1',
          icon: 'calendar'
        },
        {
          name: 'DEMOS.START_UP.PRICING_TWO.FEATURES2',
          icon: 'dollar-sign'
        },
        {
          name: 'DEMOS.START_UP.PRICING_TWO.FEATURES3',
          icon: 'smartphone'
        },
        {
          name: 'DEMOS.START_UP.PRICING_TWO.FEATURES4',
          icon: 'layout'
        }
      ]
    }
  ];

  xtras = [
    {
      icon: 'home',
      title: 'DEMOS.START_UP.PRICING_TWO.FEATURES5',
      border: 'right'
    },
    { icon: 'git-branch', title: 'DEMOS.START_UP.PRICING_TWO.FEATURES6' },
    {
      icon: 'headphones',
      title: 'DEMOS.START_UP.PRICING_TWO.FEATURES7',
      border: 'right'
    },
    { icon: 'activity', title: 'DEMOS.START_UP.PRICING_TWO.FEATURES8' },
    {
      icon: 'trello',
      title: 'DEMOS.START_UP.PRICING_TWO.FEATURES9',
      border: 'right'
    },
    { icon: 'volume-2', title: 'DEMOS.START_UP.PRICING_TWO.FEATURES10' },
    {
      icon: 'box',
      title: 'DEMOS.START_UP.PRICING_TWO.FEATURES11',
      border: 'right'
    },
    { icon: 'share-2', title: 'DEMOS.START_UP.PRICING_TWO.FEATURES12' }
  ];
  constructor(private translate: TranslateService) {}
  ngOnInit() {}
}
