import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-app-landing-twin-phone-right-list',
  templateUrl: './app-landing-twin-phone-right-list.component.html',
  styleUrls: ['./app-landing-twin-phone-right-list.component.scss']
})
export class AppLandingTwinPhoneRightListComponent implements OnInit {
  boxes: object[] = [
    {
      icon: 'activity',
      title: {
        en: 'Sensor Interface',
        es: 'Interfaz del sensor'
      },
      description: {
        en:
          'AI agents gather intelligence from radar, cameras, and cyber monitoring systems. ',
        es:
          'Los agentes de IA recopilan información de radares, cámaras y sistemas de monitoreo cibernético.'
      }
    },
    {
      icon: 'eye',
      title: {
        en: 'Processing Module',
        es: 'Módulo de procesamiento'
      },
      description: {
        en:
          'They interpret data and execute decisions using high-performance computing. ',
        es:
          'Interpretan datos y ejecutan decisiones utilizando computación de alto rendimiento.'
      }
    },
    {
      icon: 'bar-chart',
      title: {
        en: 'Decision-Making Engine',
        es: 'Motor de toma de decisiones'
      },
      description: {
        en:
          'Whether reactive (rule-based) or deliberative (learning-based), these agents optimize strategic choices. ',
        es:
          'Ya sean reactivos (basados ​​en reglas) o deliberativos (basados ​​en aprendizaje), estos agentes optimizan las opciones estratégicas.'
      }
    },
    {
      icon: 'life-buoy',
      title: {
        en: 'Feedback and Learning Module',
        es: 'Módulo de retroalimentación y aprendizaje'
      },
      description: {
        en:
          'Many AI systems continuously refine their performance through feedback loops.',
        es:
          'Muchos sistemas de IA perfeccionan continuamente su rendimiento a través de ciclos de retroalimentación.'
      }
    }
  ];
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
