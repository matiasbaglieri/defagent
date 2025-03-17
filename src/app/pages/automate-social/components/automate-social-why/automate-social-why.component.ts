import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-automate-social-why',
  templateUrl: './automate-social-why.component.html',
  styleUrls: ['./automate-social-why.component.scss']
})
export class AutomateSocialWhyComponent implements OnInit {
  features = [
    {
      name: 'Real-time Solution',
      icon: 'activity',
      color: 'info',
      description:
        'Create your own white-label apps. Streamline processes. Discover deficiencies. Access valuable insights and information and iterate in real-time.'
    },
    {
      name: 'Affordability',
      icon: 'bar-chart',
      color: 'success',
      description:
        'Reduced human intervention and improved workflow efficiency help you reduce costs. EveryThink does ALL OF THE HEAVY LIFTING so your employees can focus on more valuable and complex tasks all while being super affordable!'
    },
    {
      name: 'Unique user experience',
      icon: 'thumbs-up',
      color: 'alternate',
      description:
        'A new and intuitive experience fosters seamless interaction among stakeholders at every stage and aspect of the business. Makes absolute sense when clients need quick and accurate solutions so employees don’t have to go crazy looking for answers.'
    },
    {
      name: 'Analytics',
      icon: 'archive',
      color: 'danger',
      description:
        'Your “teachable” IAs gather and thoroughly review all user interactions for analysis and iteration to improve communications and make relevant process suggestions. Continuously check in with your IAs for new suggestions on automating processes or ways to give better solutions to your clients and employees.'
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
