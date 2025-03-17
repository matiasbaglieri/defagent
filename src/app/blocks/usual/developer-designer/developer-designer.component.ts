import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-developer-designer',
  templateUrl: './developer-designer.component.html',
  styleUrls: ['./developer-designer.component.scss']
})
export class DeveloperDesignerComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
