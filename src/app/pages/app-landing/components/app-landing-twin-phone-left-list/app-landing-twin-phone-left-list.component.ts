import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-app-landing-twin-phone-left-list',
  templateUrl: './app-landing-twin-phone-left-list.component.html',
  styleUrls: ['./app-landing-twin-phone-left-list.component.scss']
})
export class AppLandingTwinPhoneLeftListComponent implements OnInit {
  elements: object[] = [
    {
      icon: 'database',
      title: {
        en: 'Reactive AI Agents ',
        es: 'Agentes de IA reactivos'
      },
      description: {
        en:
          'These agents follow predefined rules and respond to real-time inputs without learning from past experiences. They are highly reliable for rapid-response scenarios like missile defence systems.',
        es:
          'Estos agentes siguen reglas predefinidas y responden a información en tiempo real sin aprender de experiencias previas. Son altamente confiables para escenarios de respuesta rápida, como los sistemas de defensa antimisiles.'
      }
    },
    {
      icon: 'codesandbox',
      title: {
        en: 'Deliberative AI Agents',
        es: 'Agentes deliberadas de inteligencia artificial'
      },
      description: {
        en:
          'More advanced than reactive systems, these agents analyze situations, assess multiple strategies, and make optimal decisions. They are used in mission planning and threat assessment.',
        es:
          'Más avanzados que los sistemas reactivos, estos agentes analizan situaciones, evalúan múltiples estrategias y toman decisiones óptimas. Se utilizan en la planificación de misiones y la evaluación de amenazas.'
      }
    },
    {
      icon: 'shopping-bag',
      title: {
        en: 'Multi-Agent Systems (MAS)',
        es: 'Sistemas multiagente (MAS)'
      },
      description: {
        en:
          'These involve AI agents working in coordinated networks to achieve complex defence objectives. MAS enhances distributed intelligence and collaboration in military operations, such as drone swarms and autonomous naval fleets.',
        es:
          'Estos implican que agentes de IA trabajen en redes coordinadas para lograr objetivos de defensa complejos. El MAS mejora la inteligencia distribuida y la colaboración en operaciones militares, como enjambres de drones y flotas navales autónomas.'
      }
    }
  ];
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
