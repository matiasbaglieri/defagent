import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-app-landing2-safety',
  templateUrl: './app-landing2-safety.component.html',
  styleUrls: ['./app-landing2-safety.component.scss']
})
export class AppLanding2SafetyComponent implements OnInit {
  items: object[] = [
    {
      icon: 'activity',
      title: {
        en: 'Real-time results',
        es: 'Resultados en tiempo real'
      },
      description: {
        en:
          'Gain instant insights on happenings and make real-time analytics more accurate and real.',
        es:
          'Obtenga información instantánea sobre los acontecimientos y haga que los análisis en tiempo real sean más precisos y reales.'
      }
    },
    {
      icon: 'upload-cloud',
      title: {
        en: 'Instant deployment',
        es: 'Implementación instantánea'
      },
      description: {
        en:
          'Accelerate and simplify your business’s deployment of machine learning and data analytics.',
        es:
          'Acelere y simplifique la implementación de aprendizaje automático y análisis de datos de su empresa.'
      }
    }
  ];

  cards: object[] = [
    { class: 'mt-md-6', uri: 'assets/images/app-landing-2/screens/app/9.jpg' },
    { class: '', uri: 'assets/images/app-landing-2/screens/app/8.jpg' },
    {
      class: 'mt-md-6',
      uri: 'assets/images/app-landing-2/screens/app/10.jpg'
    },
    {
      class: 'mx-auto mt-md-4n',
      uri: 'assets/images/app-landing-2/screens/app/11.png'
    }
  ];
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
