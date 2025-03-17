import { Component, OnInit, Input } from '@angular/core';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { I18nService } from '@app/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-navbar-default',
  templateUrl: './navbar-default.component.html',
  styleUrls: ['./navbar-default.component.scss']
})
export class NavbarDefaultComponent implements OnInit {
  @Input()
  useOnlyDarkLogo: boolean;

  @Input()
  darkLinks: boolean;

  @Input()
  position: string;

  signInAlt = faSignInAlt;
  userPlus = faUserPlus;

  constructor(
    private i18nService: I18nService,
    private translate: TranslateService
  ) {}

  ngOnInit() {}

  setLanguage(lang) {
    this.i18nService.language = lang;
  }

  isRightPositioned() {
    return this.position === 'right';
  }
}
