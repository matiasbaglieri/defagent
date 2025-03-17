import { Component, OnInit } from '@angular/core';
import { I18nService } from '@app/core';

@Component({
  selector: 'dc-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {
  constructor(private i18nService: I18nService) {
    this.updateSeoTags();
  }

  ngOnInit() {
    this.updateSeoTags();
  }
  updateSeoTags() {
    this.i18nService.updateSeoTags(
      'DEMOS.DATAFLOWS_CREATOORS.NETWORK_SEARCH_META.TITLE',
      'DEMOS.DATAFLOWS_CREATOORS.NETWORK_SEARCH_META.KEYWORDS'
    );
  }
}
