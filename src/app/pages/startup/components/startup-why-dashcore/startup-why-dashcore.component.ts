import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-startup-why-dashcore',
  templateUrl: './startup-why-dashcore.component.html',
  styleUrls: ['./startup-why-dashcore.component.scss']
})
export class StartupWhyDashcoreComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
