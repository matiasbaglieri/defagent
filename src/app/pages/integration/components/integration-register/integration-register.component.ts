import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-integration-register',
  templateUrl: './integration-register.component.html',
  styleUrls: ['./integration-register.component.scss']
})
export class IntegrationRegisterComponent implements OnInit {
  check = faCheck;
  features = [
    'Service integrations',
    'Partners integration',
    'No-coding',
    'Get discovered'
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
