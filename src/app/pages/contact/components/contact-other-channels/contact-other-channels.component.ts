import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-contact-other-channels',
  templateUrl: './contact-other-channels.component.html',
  styleUrls: ['./contact-other-channels.component.scss']
})
export class ContactOtherChannelsComponent implements OnInit {
  longArrowAltRight = faLongArrowAltRight;

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
