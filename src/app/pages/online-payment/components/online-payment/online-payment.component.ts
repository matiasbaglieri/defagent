import { Component, OnInit } from '@angular/core';
import { I18nService } from '@app/core';

@Component({
  selector: 'dc-online-payment',
  templateUrl: './online-payment.component.html',
  styleUrls: ['./online-payment.component.scss']
})
export class OnlinePaymentComponent implements OnInit {
  constructor(private i18nService: I18nService) {
    this.updateSeoTags();
  }

  ngOnInit() {
    this.updateSeoTags();
  }
  updateSeoTags() {
    this.i18nService.updateSeoTags(
      'DEMOS.RPACREAORS.NETWORK_SEARCH_META.TITLE',
      'DEMOS.RPACREAORS.NETWORK_SEARCH_META.KEYWORDS'
    );
  }
}
