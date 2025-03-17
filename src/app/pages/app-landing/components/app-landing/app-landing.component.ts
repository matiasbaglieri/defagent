import { Component, OnInit } from '@angular/core';
import { I18nService } from '@app/core';

@Component({
  selector: 'dc-app-landing',
  templateUrl: './app-landing.component.html',
  styleUrls: ['./app-landing.component.scss']
})
export class AppLandingComponent implements OnInit {
  constructor(private i18nService: I18nService) {
    this.updateSeoTags();
  }

  ngOnInit() {
    this.updateSeoTags();
  }

  updateSeoTags() {
    this.i18nService.updateSeoTags(
      'HOME.NETWORK_SEARCH_META.TITLE',
      'HOME.NETWORK_SEARCH_META.KEYWORDS'
    );
  }
}
