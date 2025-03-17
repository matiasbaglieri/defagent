import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  constructor() {}

  getFaqs(): Observable<any> {
    return of([
      {
        question: {
          en:
            'Can I commercialize the data flows and automated processes I made?',
          es:
            '¿Puedo comercializar los flujos de datos y los procesos automatizados que realicé?'
        },
        answer: {
          en:
            'Sure! You’ll need to incorporate as a third-party developer within the DefAgent studio. This way, you can create and sell a wider variety of data flows and automated processes that the IAs can carry out in different networks, automate more processes to improve all interactions as well as a chance to earn returns.',
          es:
            '¡Por supuesto! Deberá incorporarse como desarrollador externo dentro del estudio DefAgent. De esta manera, puede crear y vender una variedad más amplia de flujos de datos y procesos automatizados que los AI pueden llevar a cabo en diferentes redes, automatizar más procesos para mejorar todas las interacciones y tener la oportunidad de obtener ganancias.'
        }
      },
      {
        question: {
          en: 'What’s your typical support response time?',
          es: '¿Cuál es su tiempo de respuesta de soporte típico?'
        },
        answer: {
          en:
            'We care about our people and strive to respond as soon as we can. Usually, this can be in minutes or hours. But then, how fast we reply may depend on how long it takes for us to find out what exactly the problem is. This differs on a case-by-case basis but you can trust that we’ll respond as fast as we possibly can.',
          es:
            'Nos preocupamos por nuestra gente y nos esforzamos por responder lo antes posible. Por lo general, esto puede ser en minutos u horas. Pero entonces, la rapidez con la que respondamos puede depender de cuánto tiempo nos lleve averiguar cuál es exactamente el problema. Esto difiere según el caso, pero puede confiar en que responderemos lo más rápido posible.'
        }
      },
      {
        question: {
          en: 'What do I need to know to customize my network?',
          es: '¿Qué necesito saber para personalizar mi red?'
        },
        answer: {
          en:
            'Our documentation contains everything you need to know to customize your spreadsheet. From here, you can also learn how to create IAs interactions and deliver a perfect experience for end-users. That said, you can also connect with us to help you achieve your goals if need be.',
          es:
            'Nuestra documentación contiene todo lo que necesita saber para personalizar su hoja de cálculo. Desde aquí, también puede aprender a crear interacciones de AI y ofrecer una experiencia perfecta para los usuarios finales. Dicho esto, también puede conectarse con nosotros para ayudarlo a lograr sus objetivos si es necesario.'
        }
      },
      {
        question: {
          en: 'Can I suggest new features?',
          es: '¿Puedo sugerir nuevas funciones?'
        },
        answer: {
          en:
            "Definitely<span class='bold'> yes!</span> You can always contact us to let us know your needs. You can trust that we’ll include it in the network if we find your suggestion to hold value for both of us. If not, you can simply request a custom build, at an extra cost. However, it may take a while before the feature gets implemented.",
          es:
            "¡Definitivamente<span class='bold'> sí!</span> Siempre puede contactarnos para informarnos sus necesidades. Puede confiar en que lo incluiremos en la red si consideramos que su sugerencia tiene valor para ambos. De lo contrario, simplemente puede solicitar una construcción personalizada, a un costo adicional. Sin embargo, puede pasar un tiempo antes de que se implemente la función."
        }
      }
    ]);
  }
}
