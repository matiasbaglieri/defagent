import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-about-video',
  templateUrl: './about-video.component.html',
  styleUrls: ['./about-video.component.scss']
})
export class AboutVideoComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  ngOnInit() {}
}
