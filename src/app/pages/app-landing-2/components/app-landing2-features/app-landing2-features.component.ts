import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-app-landing2-features',
  templateUrl: './app-landing2-features.component.html',
  styleUrls: ['./app-landing2-features.component.scss']
})
export class AppLanding2FeaturesComponent implements OnInit {
  features = [
    {
      icon: 'bar-chart',
      title: {
        en: 'Growth',
        es: 'Crecimiento'
      },
      description: {
        en:
          'This powerful AIaaS platform leverages AI and machine learning to help your team drive high performance and enable scalable growth.',
        es:
          'Esta poderosa plataforma AIaaS aprovecha la IA y el aprendizaje automático para ayudar a su equipo a impulsar un alto rendimiento y permitir un crecimiento escalable.'
      }
    },
    {
      icon: 'activity',
      title: {
        en: 'Affordability',
        es: 'Asequibilidad'
      },
      description: {
        en:
          'Maximize ROI for your business with the affordable DefAgent AI solution that helps your team achieve more for less.',
        es:
          'Maximice el ROI de su negocio con la asequible solución DefAgent AI que ayuda a su equipo a lograr más por menos.'
      }
    },
    {
      icon: 'codesandbox',
      title: {
        en: 'No-coding',
        es: 'Sin codificación'
      },
      description: {
        en:
          'Our low-code development platform helps businesses democratize data science, obtain your own brand products in less than 24 hours, and create intelligent white-label apps.',
        es:
          'Nuestra plataforma de desarrollo de código bajo ayuda a las empresas a democratizar la ciencia de datos, obtener sus propios productos de marca en menos de 24 horas y crear aplicaciones inteligentes de marca blanca.'
      }
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
