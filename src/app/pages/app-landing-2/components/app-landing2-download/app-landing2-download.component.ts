import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-app-landing2-download',
  templateUrl: './app-landing2-download.component.html',
  styleUrls: ['./app-landing2-download.component.scss']
})
export class AppLanding2DownloadComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  ngOnInit() {}
}
