import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-about-register',
  templateUrl: './about-register.component.html',
  styleUrls: ['./about-register.component.scss']
})
export class AboutRegisterComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
