import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'dc-pricing-cards',
  templateUrl: './pricing-cards.component.html',
  styleUrls: ['./pricing-cards.component.scss']
})
export class PricingCardsComponent implements OnInit {
  plans = [
    {
      icon: 'box',
      plan: {
        name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL',
        price: 0.99,
        description: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL_DESC'
      },
      features: [
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL1'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL2'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL3'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL4'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL5'
        }
      ]
    },
    {
      icon: 'download-cloud',
      best: true,
      plan: {
        name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS',
        price: 29.99,
        description: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS_DESC'
      },
      features: [
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS1'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS2'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS3'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS4'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS5'
        }
      ]
    },
    {
      icon: 'settings',
      plan: {
        name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE',
        price: 99.99,
        description: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE_DESC'
      },
      features: [
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE1'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE2'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE3'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE4'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE5'
        }
      ]
    },
    {
      icon: 'download-cloud',
      best: true,
      plan: {
        name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD',
        price: 29.99,
        description: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD_DESC'
      },
      features: [
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD1'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD2'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD3'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD4'
        },
        {
          name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD5'
        }
      ]
    }
  ];

  constructor(private translate: TranslateService) {}
  ngOnInit() {}
}
