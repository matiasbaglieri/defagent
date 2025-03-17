import { Component, OnInit } from '@angular/core';
import { I18nService } from '@app/core/i18n.service';

@Component({
  selector: 'dc-app-landing2',
  templateUrl: './app-landing2.component.html',
  styleUrls: ['./app-landing2.component.scss']
})
export class AppLanding2Component implements OnInit {
  constructor(private i18nService: I18nService) {
    this.updateSeoTags();
  }

  ngOnInit() {
    this.updateSeoTags();
  }
  updateSeoTags() {
    this.i18nService.updateSeoTags(
      'DEMOS.SALES.NETWORK_SEARCH_META.TITLE',
      'DEMOS.SALES.NETWORK_SEARCH_META.KEYWORDS'
    );
  }
}
