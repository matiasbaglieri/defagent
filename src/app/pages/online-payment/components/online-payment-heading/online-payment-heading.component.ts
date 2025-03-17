import { Component, OnInit } from '@angular/core';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-online-payment-heading',
  templateUrl: './online-payment-heading.component.html',
  styleUrls: ['./online-payment-heading.component.scss']
})
export class OnlinePaymentHeadingComponent implements OnInit {
  tag = faTag;

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
