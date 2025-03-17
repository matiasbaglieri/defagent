import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-online-payment-send-receive',
  templateUrl: './online-payment-send-receive.component.html',
  styleUrls: ['./online-payment-send-receive.component.scss']
})
export class OnlinePaymentSendReceiveComponent implements OnInit {
  cards = [
    {
      img: 'send',
      title: 'We are your gateway to RPA world',
      animation: 'fade-up',
      description:
        'We do your RPA journey to be easy. That is why we created EveryThink where anyone can easily and quickly implement realtime solutions without coding.'
    },
    {
      img: 'receive',
      title: 'Take control of your automated processes',
      animation: 'fade-up',
      description:
        'We give you all the tools so that you can create, buy and sell automation processes quickly and simply, 24 hours a day, every day of the year.'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
