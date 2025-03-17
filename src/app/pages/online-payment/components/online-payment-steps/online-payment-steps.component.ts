import { Component, OnInit } from '@angular/core';
import {
  faUser,
  faUsersCog,
  faUserShield
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-online-payment-steps',
  templateUrl: './online-payment-steps.component.html',
  styleUrls: ['./online-payment-steps.component.scss']
})
export class OnlinePaymentStepsComponent implements OnInit {
  steps = [
    {
      icon: faUser,
      image: { name: 'register', class: 'w-50' },
      title: 'Build fast. Build more.',
      description:
        'Using EveryThink Studio’s unique software for fast and fluid automated process development, you can build the automated process you need in days. No scripting, programming, or technical skills required.',
      button: { text: 'Sign Up Free' }
    },
    {
      icon: faUsersCog,
      image: { name: 'configure' },
      title: 'Grow fast. Grow big.',
      description:
        'With EveryThink Studio’s easy-to-use interface, anyone can create automated process in a matter of minutes, without writing a single line of code.',
      button: { text: 'Learn More' }
    },
    {
      icon: faUserShield,
      image: { name: 'receive' },
      title: 'Automate more processes in real time',
      description:
        'EveryThink does ALL OF THE HEAVY LIFTING so you can focus on more valuable and complex tasks.',
      button: { text: 'Learn More' }
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
