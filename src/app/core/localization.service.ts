import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  lang: string;
  defaultLanguage;

  private readonly value$: EventEmitter<any>;
  protected value: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService,

    private _meta: Meta,
    private _title: Title
  ) {
    this.value$ = new EventEmitter();
    this.defaultLanguage = 'en';

    let selectedLang = sessionStorage.getItem('LANGUAGE');
    if (selectedLang) {
      translateService.setDefaultLang(selectedLang);
      translateService.use(selectedLang);
    } else {
      translateService.setDefaultLang(this.defaultLanguage || 'en');
      translateService.use(this.defaultLanguage || 'en');
      sessionStorage.setItem('LANGUAGE', this.defaultLanguage || 'en');
    }
  }

  /**
   * Load Translation
   *
   * @param args: Locale[]
   */
  loadTranslations(): void {
    // add new langIds to the list
    this.translateService.addLangs(['en', 'es']);

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('en');

    // use setTranslation() with the third argument set to true
    // to append translations instead of replacing them
  }

  /*this will append query parameter(lang) to url*/
  switchLanguage(lang: string) {
    if (!lang) {
      return;
    }
    lang = lang.toLowerCase();
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    sessionStorage.setItem('LANGUAGE', lang);
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { lang: lang },
      queryParamsHandling: 'merge'
    });
    this.set(true);
  }

  /* This method is used to translate according to the language.
   * params: translateObj:- {en: string, es: string: de: string}
   * */
  translate(translateObj) {
    let lang = sessionStorage.getItem('LANGUAGE');
    lang = lang ? lang : this.defaultLanguage ? this.defaultLanguage : 'en';
    if (translateObj) {
      return translateObj[lang];
    }
    return null;
  }

  set(value: any): void {
    this.value = value;
    this.getObserver().emit(this.value);
  }

  getObserver(): EventEmitter<any> {
    return this.value$;
  }

  updateSeoTags(title: string, keywords: string) {
    this.translateService.get([title, keywords]).subscribe(metaData => {
      this._title.setTitle(metaData[title]);
      this._meta.updateTag({
        name: 'keywords',
        content: metaData[keywords]
      });
    });
  }
}
