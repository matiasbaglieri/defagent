import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-online-payment-customers-management',
  templateUrl: './online-payment-customers-management.component.html',
  styleUrls: ['./online-payment-customers-management.component.scss']
})
export class OnlinePaymentCustomersManagementComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
