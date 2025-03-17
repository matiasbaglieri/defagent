import { Component, OnInit } from '@angular/core';
import { I18nService } from '@app/core';

@Component({
  selector: 'dc-saas',
  templateUrl: './saas.component.html',
  styleUrls: ['./saas.component.scss']
})
export class SaasComponent implements OnInit {
  constructor(private i18nService: I18nService) {
    this.updateSeoTags();
  }

  ngOnInit() {
    this.updateSeoTags();
  }
  updateSeoTags() {
    this.i18nService.updateSeoTags(
      'DEMOS.SAAS.NETWORK_SEARCH_META.TITLE',
      'DEMOS.SAAS.NETWORK_SEARCH_META.KEYWORDS'
    );
  }
}
