import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-app-landing-download',
  templateUrl: './app-landing-download.component.html',
  styleUrls: ['./app-landing-download.component.scss']
})
export class AppLandingDownloadComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
