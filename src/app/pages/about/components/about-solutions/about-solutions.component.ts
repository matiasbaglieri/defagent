import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-about-solutions',
  templateUrl: './about-solutions.component.html',
  styleUrls: ['./about-solutions.component.scss']
})
export class AboutSolutionsComponent implements OnInit {
  features: object[] = [
    {
      icon: 'box',
      title: 'Full Code',
      description:
        'Everythink comes with fully documented  all in a well organized and structured way.'
    },
    {
      icon: 'settings',
      title: 'Free Updates',
      description:
        "You'll get lifetime free updates as we improve or add new features."
    },
    {
      icon: 'award',
      title: 'Premium Support',
      description:
        'In case you need it, We got you covered, with our premium quality fast support service.'
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
