import { Component, OnInit } from '@angular/core';
import { I18nService } from '@app/core';

@Component({
  selector: 'dc-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent implements OnInit {
  constructor(private i18nService: I18nService) {
    this.updateSeoTags();
  }

  ngOnInit() {
    this.updateSeoTags();
  }
  updateSeoTags() {
    this.i18nService.updateSeoTags(
      'DEMOS.HEALTH.NETWORK_SEARCH_META.TITLE',
      'DEMOS.HEALTH.NETWORK_SEARCH_META.KEYWORDS'
    );
  }
}
