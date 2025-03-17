import { Component, OnInit } from '@angular/core';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-terms-terms',
  templateUrl: './terms-terms.component.html',
  styleUrls: ['./terms-terms.component.scss']
})
export class TermsTermsComponent implements OnInit {
  tag = faTag;

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
