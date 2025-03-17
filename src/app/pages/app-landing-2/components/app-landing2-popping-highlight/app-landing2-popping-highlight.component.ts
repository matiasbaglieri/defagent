import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dc-app-landing2-popping-highlight',
  templateUrl: './app-landing2-popping-highlight.component.html',
  styleUrls: ['./app-landing2-popping-highlight.component.scss']
})
export class AppLanding2PoppingHighlightComponent implements OnInit {
  items = [
    {
      icon: 'check-circle',
      title: {
        en: 'Real-time Solution',
        es: 'Solución en tiempo real'
      },
      description: {
        en:
          'Leverage our high-throughput, real-time AI engine to streamline processes, uncover rich insights, and transform your business’s decision making, real-time.',
        es:
          'Aproveche nuestro motor de inteligencia artificial en tiempo real y de alto rendimiento para optimizar los procesos, descubrir información valiosa y transformar la toma de decisiones de su empresa en tiempo real.'
      }
    },
    {
      icon: 'command',
      title: {
        en: 'Customer & Employees Tracking',
        es: 'Seguimiento de clientes y empleados'
      },
      description: {
        en:
          'Our AI-powered platform keeps track of operations and transactions immutably to help you enhance employee productivity and efficiency, customer centricity, and deliver KPIs.',
        es:
          'Nuestra plataforma impulsada por inteligencia artificial realiza un seguimiento de las operaciones y transacciones de manera inmutable para ayudarlo a mejorar la productividad y la eficiencia de los empleados, la atención al cliente y entregar KPIs.'
      }
    },
    {
      icon: 'archive',
      title: {
        en: 'Advanced Reporting & Analytics',
        es: 'Informes y análisis avanzados'
      },
      description: {
        en:
          'DefAgent IAs gathers and reviews all user interactions for analysis to help with faster, smarter, and better decision-making. You can always check with your IAs for new insights and suggestions on process automation for effective sales and marketing solutions to fascinate customers and employees.',
        es:
          'DefAgent IAs recopila y revisa todas las interacciones de los usuarios para analizarlas y ayudar con una toma de decisiones más rápida, inteligente y mejor. Siempre puede consultar con sus AI para obtener nuevos conocimientos y sugerencias sobre la automatización de procesos para soluciones de marketing y ventas efectivas para fascinar a los clientes y empleados.'
      }
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
