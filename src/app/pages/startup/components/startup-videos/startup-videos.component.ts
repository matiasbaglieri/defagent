import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-startup-videos',
  templateUrl: './startup-videos.component.html',
  styleUrls: ['./startup-videos.component.scss']
})
export class StartupVideosComponent implements OnInit {
  posts = [
    {
      gravity: '3.jpeg',
      title: 'DEMOS.START_UP.VIDEOs.1_TITLE',
      description: 'DEMOS.START_UP.VIDEOs.1_DESC',
      videoId: '_VArFyZxGzg'
    },
    {
      gravity: '1.jpeg',
      title: 'DEMOS.START_UP.VIDEOs.2_TITLE',
      description: 'DEMOS.START_UP.VIDEOs.2_DESC',
      videoId: 'elysFgtMrPY'
    },
    {
      gravity: '2.jpeg',
      title: 'DEMOS.START_UP.VIDEOs.3_TITLE',
      description: 'DEMOS.START_UP.VIDEOs.3_DESC',
      videoId: 'a4Z_PQ99lAU'
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
