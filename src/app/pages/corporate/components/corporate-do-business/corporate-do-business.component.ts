import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-corporate-do-business',
  templateUrl: './corporate-do-business.component.html',
  styleUrls: ['./corporate-do-business.component.scss']
})
export class CorporateDoBusinessComponent implements OnInit {
  cards = [
    {
      img: 'grow',
      title: 'Growth',
      animation: 'fade-up',
      description:
        'Stay on the cutting-edge of health-tech with EveryThink AIaaS tool with a powerful cognitive engine and learning capability that gets better with time, suggesting and implementing better ways to solve key administrative problems and everyday tasks.'
    },
    {
      img: 'time',
      title: 'Affordability',
      animation: 'fade-up',
      description:
        'We utilizes machine learning to automate costly and repetitive administrative labor into a far less expensive and more efficient, digital workforce. This helps improve healthcare quality, deliver better patient/client experiences while being affordable.'
    },
    {
      img: 'done',
      title: 'Quick development',
      animation: 'fade-up',
      description:
        'Our IAs can be ready for deployment and implementation across the entire organization in less than 24 hours. We guarantees high-performance as well as fast and error-free execution.'
    },
    {
      img: 'goals',
      title: 'Unique experience',
      animation: 'fade-up',
      description:
        'Improve clinician and provider productivity, patient engagement, quality of care, and overall user experience with EveryThink’s software as a service AI intuitive low-code platform.'
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
