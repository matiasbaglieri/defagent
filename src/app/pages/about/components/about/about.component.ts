import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { I18nService } from '@app/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;

  constructor(private i18nService: I18nService) {
    this.updateSeoTags();
  }

  ngOnInit() {
    this.updateSeoTags();
  }
  updateSeoTags() {
    this.i18nService.updateSeoTags(
      'ABOUT.NETWORK_SEARCH_META.TITLE',
      'ABOUT.NETWORK_SEARCH_META.KEYWORDS'
    );
  }
}
