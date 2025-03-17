import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-form-register-company',
  templateUrl: './form-register-company.component.html',
  styleUrls: ['./form-register-company.component.scss']
})
export class FormRegisterCompanyComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  ngOnInit() {}
}
