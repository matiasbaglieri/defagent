import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-automate-social-get-started',
  templateUrl: './automate-social-get-started.component.html',
  styleUrls: ['./automate-social-get-started.component.scss']
})
export class AutomateSocialGetStartedComponent implements OnInit {
  play = faPlay;

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
