import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-start-now-box',
  templateUrl: './start-now-box.component.html',
  styleUrls: ['./start-now-box.component.scss']
})
export class StartNowBoxComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  ngOnInit() {}
}
