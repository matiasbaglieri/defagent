import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-app-landing-feature-cards',
  templateUrl: './app-landing-feature-cards.component.html',
  styleUrls: ['./app-landing-feature-cards.component.scss']
})
export class AppLandingFeatureCardsComponent implements OnInit {
  elements: object[] = [
    {
      icon: 'target',
      title: {
        en: 'Affordability',
        es: 'Asequibilidad'
      },
      description: {
        en:
          'We reduces the need for human intervention while still increasing work-flow efficiency ',
        es:
          'Reducimos la necesidad de intervención humana al tiempo que aumentamos la eficiencia del flujo de trabajo.'
      }
    },
    {
      icon: 'database',
      title: {
        en: 'Technology',
        es: 'Tecnología'
      },
      description: {
        en:
          'Our Cognitive engine knows no limits. It continues to learn and suggest new and better ways of solving problems based on who it’s interacting with—without coding! ',
        es:
          'Nuestro motor cognitivo no tiene límites. Sigue aprendiendo y sugiriendo nuevas y mejores maneras de resolver problemas según con quién interactúa, ¡sin necesidad de programar!'
      }
    },
    {
      icon: 'eye',
      title: {
        en: 'Competitive edge',
        es: 'Ventaja competitiva'
      },
      description: {
        en:
          'We can be quickly deployed to employees, customers, vendors, members and more to introduce value to your market.  It’s the fastest way to leverage skills and knowledge across your entire enterprise to foster innovation and connection using ai agents. ',
        es:
          'Podemos implementar rápidamente con empleados, clientes, proveedores, miembros y más para aportar valor a su mercado. Es la forma más rápida de aprovechar las habilidades y el conocimiento de toda su empresa para fomentar la innovación y la conexión usando agentes ai.'
      }
    }
  ];
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
