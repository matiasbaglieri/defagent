import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.scss']
})
export class Counter1Component implements OnInit {
  @Input('container-padding-bottom')
  ContainerPaddingBottom: number;

  counters: object[] = [
    { icon: 'box', value: 273, en: 'Components', es: 'Componentes' },
    { icon: 'download-cloud', value: 654, en: 'Downloads', es: 'Descargas' },
    { icon: 'anchor', value: 7941, en: 'Followers', es: 'Seguidores' },
    { icon: 'award', value: 654, en: 'New users', es: 'Nuevos Usuarios' }
  ];

  constructor(private translate: TranslateService) {
    // console.log( translate.currentLang)
  }

  ngOnInit() {}

  getPaddingBottom() {
    return this.ContainerPaddingBottom
      ? `pb-${this.ContainerPaddingBottom}`
      : '';
  }
}
