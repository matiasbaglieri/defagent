import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-startup-download',
  templateUrl: './startup-download.component.html',
  styleUrls: ['./startup-download.component.scss']
})
export class StartupDownloadComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  ngOnInit() {}
}
