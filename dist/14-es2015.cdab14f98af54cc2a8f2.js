(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    '8klf': function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return r;
      });
      var o = t('M0ag'),
        c = t('tyNb'),
        a = t('sYmb'),
        s = t('fXoL');
      let r = (() => {
        class e {}
        return (
          (e.ɵmod = s.Jb({ type: e })),
          (e.ɵinj = s.Ib({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[o.a, c.g, a.a.forChild()]]
          })),
          e
        );
      })();
    },
    IXWp: function(e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'PricingModule', function() {
          return x;
        });
      var o = t('M0ag'),
        c = t('kpBo'),
        a = t('P6su'),
        s = t('8klf'),
        r = t('ORAR'),
        i = t('M0Rk'),
        u = t('tyNb'),
        l = t('ey9i'),
        d = t('fXoL'),
        b = t('WGuQ'),
        p = t('u8tZ'),
        f = t('ofXK'),
        m = t('AL06');
      function g(e, n) {
        if (
          (1 & e &&
            (d.Qb(0, 'div', 5),
            d.Fc(1, '\n        '),
            d.Mb(2, 'dc-feather', 6),
            d.Fc(3, '\n        '),
            d.Qb(4, 'h5', 7),
            d.Fc(5),
            d.Pb(),
            d.Fc(6, '\n        '),
            d.Qb(7, 'p', 8),
            d.Fc(
              8,
              '\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci\n          atque beatae dicta dolores hic porro quam voluptatibus.\n        '
            ),
            d.Pb(),
            d.Fc(9, '\n      '),
            d.Pb()),
          2 & e)
        ) {
          const e = n.$implicit;
          d.xb(2),
            d.kc('name', e.icon)('iconClass', 'stroke-info'),
            d.xb(3),
            d.Gc(e.title);
        }
      }
      let F = (() => {
        class e {
          constructor() {
            this.features = [
              { icon: 'headphones', title: 'First class support' },
              { icon: 'box', title: 'Code snippets' },
              { icon: 'headphones', title: 'Full documentation' },
              { icon: 'lock', title: 'Total control of your code' },
              { icon: 'airplay', title: 'Responsive design' },
              { icon: 'monitor', title: 'Browser support' }
            ];
          }
          ngOnInit() {}
        }
        return (
          (e.ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵcmp = d.Fb({
            type: e,
            selectors: [['dc-pricing-include']],
            decls: 20,
            vars: 1,
            consts: [
              [1, 'container'],
              [1, 'section-heading', 'text-center'],
              [1, 'lead', 'text-secondary'],
              [1, 'row', 'gap-y', 'text-center', 'text-md-left'],
              ['class', 'col-md-4', 4, 'ngFor', 'ngForOf'],
              [1, 'col-md-4'],
              [1, 'mr-2', 'm-0', 3, 'name', 'iconClass'],
              [1, 'bold', 'my-3'],
              [1, 'my-0']
            ],
            template: function(e, n) {
              1 & e &&
                (d.Qb(0, 'section'),
                d.Fc(1, '\n  '),
                d.Qb(2, 'div', 0),
                d.Fc(3, '\n    '),
                d.Qb(4, 'div', 1),
                d.Fc(5, '\n      '),
                d.Qb(6, 'h2'),
                d.Fc(7, 'All our plans include'),
                d.Pb(),
                d.Fc(8, '\n      '),
                d.Qb(9, 'p', 2),
                d.Fc(
                  10,
                  '\n        Get access to a ton of features out of the box\n      '
                ),
                d.Pb(),
                d.Fc(11, '\n    '),
                d.Pb(),
                d.Fc(12, '\n\n    '),
                d.Qb(13, 'div', 3),
                d.Fc(14, '\n      '),
                d.Dc(15, g, 10, 3, 'div', 4),
                d.Fc(16, '\n    '),
                d.Pb(),
                d.Fc(17, '\n  '),
                d.Pb(),
                d.Fc(18, '\n'),
                d.Pb(),
                d.Fc(19, '\n')),
                2 & e && (d.xb(15), d.kc('ngForOf', n.features));
            },
            directives: [f.j, m.a],
            styles: ['']
          })),
          e
        );
      })();
      var h = t('ZuuT'),
        y = t('q+Ce'),
        w = t('VKEt'),
        v = t('iLZQ');
      const k = [
        {
          path: '',
          component: (() => {
            class e {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (e.ɵfac = function(n) {
                return new (n || e)();
              }),
              (e.ɵcmp = d.Fb({
                type: e,
                selectors: [['dc-pricing']],
                decls: 15,
                vars: 5,
                consts: [
                  [3, 'title', 'subtitle'],
                  [3, 'edge', 'background', 'classes']
                ],
                template: function(e, n) {
                  1 & e &&
                    (d.Qb(0, 'dc-page-header-wave', 0),
                    d.Fc(1, '\n'),
                    d.Pb(),
                    d.Fc(2, '\n\n'),
                    d.Mb(3, 'dc-pricing-cards'),
                    d.Fc(4, '\n'),
                    d.Mb(5, 'dc-pricing-include'),
                    d.Fc(6, '\n'),
                    d.Mb(7, 'dc-faqs1', 1),
                    d.Fc(8, '\n'),
                    d.Mb(9, 'dc-start-now-box'),
                    d.Fc(10, '\n'),
                    d.Mb(11, 'dc-cta1'),
                    d.Fc(12, '\n\n'),
                    d.Mb(13, 'dc-footer2'),
                    d.Fc(14, '\n')),
                    2 & e &&
                      (d.kc('title', 'Pricing Plans')(
                        'subtitle',
                        'Simple and affordable pricing plans. Try EveryThink with no obligation.'
                      ),
                      d.xb(7),
                      d.kc('edge', 'bottom-right')('background', 'light')(
                        'classes',
                        'border-top'
                      ));
                },
                directives: [b.a, p.a, F, h.a, y.a, w.a, v.a],
                styles: ['']
              })),
              e
            );
          })(),
          data: { title: Object(l.c)('Pricing') }
        }
      ];
      let P = (() => {
        class e {}
        return (
          (e.ɵmod = d.Jb({ type: e })),
          (e.ɵinj = d.Ib({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[u.g.forChild(k)], u.g]
          })),
          e
        );
      })();
      var Q = t('sYmb');
      let x = (() => {
        class e {}
        return (
          (e.ɵmod = d.Jb({ type: e })),
          (e.ɵinj = d.Ib({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[o.a, i.a, r.a, s.a, a.a, c.a, P, Q.a.forChild()]]
          })),
          e
        );
      })();
    },
    ORAR: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return s;
      });
      var o = t('tyNb'),
        c = t('sYmb'),
        a = t('fXoL');
      let s = (() => {
        class e {}
        return (
          (e.ɵmod = a.Jb({ type: e })),
          (e.ɵinj = a.Ib({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[o.g, c.a.forChild()]]
          })),
          e
        );
      })();
    },
    P6su: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return i;
      });
      var o = t('1kSV'),
        c = t('M0ag'),
        a = t('hKFN'),
        s = t('sYmb'),
        r = t('fXoL');
      let i = (() => {
        class e {}
        return (
          (e.ɵmod = r.Jb({ type: e })),
          (e.ɵinj = r.Ib({
            factory: function(n) {
              return new (n || e)();
            },
            providers: [a.a],
            imports: [[c.a, o.c, s.a.forChild()]]
          })),
          e
        );
      })();
    },
    ZuuT: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return h;
      });
      var o = t('fXoL'),
        c = t('sYmb'),
        a = t('ofXK'),
        s = t('wHSu'),
        r = t('hKFN'),
        i = t('1kSV'),
        u = t('6NWb');
      function l(e, n) {
        if (
          (1 & e &&
            (o.Qb(0, 'button', 6),
            o.Fc(1, '\n        '),
            o.Mb(2, 'fa-icon', 7),
            o.Fc(3),
            o.Pb()),
          2 & e)
        ) {
          const e = o.fc(2).$implicit,
            n = o.fc();
          o.xb(2),
            o.kc('icon', n.chevronDown),
            o.xb(1),
            o.Hc('\n        ', e.question.es, '\n      ');
        }
      }
      function d(e, n) {
        if (
          (1 & e &&
            (o.Qb(0, 'button', 6),
            o.Fc(1, '\n        '),
            o.Mb(2, 'fa-icon', 7),
            o.Fc(3),
            o.Pb()),
          2 & e)
        ) {
          const e = o.fc(2).$implicit,
            n = o.fc();
          o.xb(2),
            o.kc('icon', n.chevronDown),
            o.xb(1),
            o.Hc('\n        ', e.question.en, '\n      ');
        }
      }
      function b(e, n) {
        if (
          (1 & e &&
            (o.Fc(0, '\n      '),
            o.Dc(1, l, 4, 2, 'button', 5),
            o.Fc(2, '\n      '),
            o.Dc(3, d, 4, 2, 'button', 5),
            o.Fc(4, '\n    ')),
          2 & e)
        ) {
          const e = o.fc(2);
          o.xb(1),
            o.kc('ngIf', 'es' === e.translate.currentLang),
            o.xb(2),
            o.kc('ngIf', 'en-US' === e.translate.currentLang);
        }
      }
      function p(e, n) {
        if ((1 & e && o.Mb(0, 'div', 9), 2 & e)) {
          const e = o.fc(2).$implicit;
          o.kc('innerHTML', e.answer.es, o.wc);
        }
      }
      function f(e, n) {
        if ((1 & e && o.Mb(0, 'div', 9), 2 & e)) {
          const e = o.fc(2).$implicit;
          o.kc('innerHTML', e.answer.en, o.wc);
        }
      }
      function m(e, n) {
        if (
          (1 & e &&
            (o.Fc(0, '\n      '),
            o.Dc(1, p, 1, 1, 'div', 8),
            o.Fc(2, '\n      '),
            o.Dc(3, f, 1, 1, 'div', 8),
            o.Fc(4, '\n    ')),
          2 & e)
        ) {
          const e = o.fc(2);
          o.xb(1),
            o.kc('ngIf', 'es' === e.translate.currentLang),
            o.xb(2),
            o.kc('ngIf', 'en-US' === e.translate.currentLang);
        }
      }
      function g(e, n) {
        1 & e &&
          (o.Qb(0, 'ngb-panel'),
          o.Fc(1, '\n    '),
          o.Dc(2, b, 5, 2, 'ng-template', 3),
          o.Fc(3, '\n\n    '),
          o.Dc(4, m, 5, 2, 'ng-template', 4),
          o.Fc(5, '\n  '),
          o.Pb());
      }
      let F = (() => {
          class e {
            constructor(e, n, t) {
              (this.faqService = n),
                (this.translate = t),
                (this.chevronDown = s.e),
                (this.faqs = []),
                (e.closeOthers = !0);
            }
            ngOnInit() {
              this.faqService.getFaqs().subscribe(e => (this.faqs = e));
            }
          }
          return (
            (e.ɵfac = function(n) {
              return new (n || e)(o.Lb(i.b), o.Lb(r.a), o.Lb(c.c));
            }),
            (e.ɵcmp = o.Fb({
              type: e,
              selectors: [['dc-faqs-accordion']],
              features: [o.wb([i.b])],
              decls: 6,
              vars: 1,
              consts: [
                ['activeIds', 'ngb-panel-0'],
                ['acc', 'ngbAccordion'],
                [4, 'ngFor', 'ngForOf'],
                ['ngbPanelHeader', '', 'class', 'mb-3'],
                ['ngbPanelContent', ''],
                ['class', 'card-title btn', 'ngbPanelToggle', '', 4, 'ngIf'],
                ['ngbPanelToggle', '', 1, 'card-title', 'btn'],
                [1, 'angle', 3, 'icon'],
                [3, 'innerHTML', 4, 'ngIf'],
                [3, 'innerHTML']
              ],
              template: function(e, n) {
                1 & e &&
                  (o.Qb(0, 'ngb-accordion', 0, 1),
                  o.Fc(2, '\n  '),
                  o.Dc(3, g, 6, 0, 'ngb-panel', 2),
                  o.Fc(4, '\n'),
                  o.Pb(),
                  o.Fc(5, '\n')),
                  2 & e && (o.xb(3), o.kc('ngForOf', n.faqs));
              },
              directives: [i.a, a.j, i.i, i.k, i.j, a.k, i.l, u.a],
              styles: ['']
            })),
            e
          );
        })(),
        h = (() => {
          class e {
            constructor(e) {
              this.translate = e;
            }
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function(n) {
              return new (n || e)(o.Lb(c.c));
            }),
            (e.ɵcmp = o.Fb({
              type: e,
              selectors: [['dc-faqs1']],
              inputs: {
                edge: 'edge',
                background: 'background',
                classes: 'classes'
              },
              decls: 36,
              vars: 17,
              consts: [
                [3, 'ngClass'],
                [1, 'container', 'bring-to-front'],
                [1, 'row'],
                [1, 'col-md-4'],
                [1, 'bold'],
                [1, 'lead'],
                [1, 'text-muted'],
                [1, 'col-md-8'],
                [1, 'accordion', 'accordion-clean']
              ],
              template: function(e, n) {
                1 & e &&
                  (o.Qb(0, 'section', 0),
                  o.Fc(1, '\n  '),
                  o.Qb(2, 'div', 1),
                  o.Fc(3, '\n    '),
                  o.Qb(4, 'div', 2),
                  o.Fc(5, '\n      '),
                  o.Qb(6, 'div', 3),
                  o.Fc(7, '\n        '),
                  o.Qb(8, 'h2'),
                  o.Fc(9),
                  o.gc(10, 'translate'),
                  o.Qb(11, 'span', 4),
                  o.Fc(12),
                  o.gc(13, 'translate'),
                  o.Pb(),
                  o.Fc(14, '\n        '),
                  o.Pb(),
                  o.Fc(15, '\n\n        '),
                  o.Qb(16, 'p', 5),
                  o.Fc(17),
                  o.gc(18, 'translate'),
                  o.Pb(),
                  o.Fc(19, '\n\n        '),
                  o.Qb(20, 'p', 6),
                  o.Fc(21),
                  o.gc(22, 'translate'),
                  o.Pb(),
                  o.Fc(23, '\n      '),
                  o.Pb(),
                  o.Fc(24, '\n\n      '),
                  o.Qb(25, 'div', 7),
                  o.Fc(26, '\n        '),
                  o.Qb(27, 'div', 8),
                  o.Fc(28, '\n          '),
                  o.Mb(29, 'dc-faqs-accordion'),
                  o.Fc(30, '\n        '),
                  o.Pb(),
                  o.Fc(31, '\n      '),
                  o.Pb(),
                  o.Fc(32, '\n    '),
                  o.Pb(),
                  o.Fc(33, '\n  '),
                  o.Pb(),
                  o.Fc(34, '\n'),
                  o.Pb(),
                  o.Fc(35, '\n')),
                  2 & e &&
                    (o.Bb(
                      'section ',
                      n.background ? 'bg-' + n.background : '',
                      ' ',
                      n.edge ? 'edge ' + n.edge : '',
                      ''
                    ),
                    o.kc('ngClass', n.classes),
                    o.xb(9),
                    o.Hc(
                      '\n          ',
                      o.hc(10, 9, 'FAQS.FAQS1.DO_YOU_HAVE'),
                      '\n          '
                    ),
                    o.xb(3),
                    o.Gc(o.hc(13, 11, 'FAQS.FAQS1.QUESTIONS')),
                    o.xb(5),
                    o.Hc(
                      '\n          ',
                      o.hc(18, 13, 'FAQS.FAQS1.NOT_SURE_HOW'),
                      '\n        '
                    ),
                    o.xb(4),
                    o.Hc(
                      '\n          ',
                      o.hc(22, 15, 'FAQS.FAQS1.HERE_ARE_THE_ANSWERS'),
                      '\n        '
                    ));
              },
              directives: [a.i, F],
              pipes: [c.b],
              styles: ['']
            })),
            e
          );
        })();
    },
    hKFN: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return a;
      });
      var o = t('LRne'),
        c = t('fXoL');
      let a = (() => {
        class e {
          constructor() {}
          getFaqs() {
            return Object(o.a)([
              {
                question: {
                  en:
                    'Can I commercialize the data flows and automated processes I made?',
                  es:
                    '\xbfPuedo comercializar los flujos de datos y los procesos automatizados que realic\xe9?'
                },
                answer: {
                  en:
                    'Sure! You\u2019ll need to incorporate as a third-party developer within the DefAgent studio. This way, you can create and sell a wider variety of data flows and automated processes that the IAs can carry out in different networks, automate more processes to improve all interactions as well as a chance to earn returns.',
                  es:
                    '\xa1Por supuesto! Deber\xe1 incorporarse como desarrollador externo dentro del estudio DefAgent. De esta manera, puede crear y vender una variedad m\xe1s amplia de flujos de datos y procesos automatizados que los AI pueden llevar a cabo en diferentes redes, automatizar m\xe1s procesos para mejorar todas las interacciones y tener la oportunidad de obtener ganancias.'
                }
              },
              {
                question: {
                  en: 'What\u2019s your typical support response time?',
                  es:
                    '\xbfCu\xe1l es su tiempo de respuesta de soporte t\xedpico?'
                },
                answer: {
                  en:
                    'We care about our people and strive to respond as soon as we can. Usually, this can be in minutes or hours. But then, how fast we reply may depend on how long it takes for us to find out what exactly the problem is. This differs on a case-by-case basis but you can trust that we\u2019ll respond as fast as we possibly can.',
                  es:
                    'Nos preocupamos por nuestra gente y nos esforzamos por responder lo antes posible. Por lo general, esto puede ser en minutos u horas. Pero entonces, la rapidez con la que respondamos puede depender de cu\xe1nto tiempo nos lleve averiguar cu\xe1l es exactamente el problema. Esto difiere seg\xfan el caso, pero puede confiar en que responderemos lo m\xe1s r\xe1pido posible.'
                }
              },
              {
                question: {
                  en: 'What do I need to know to customize my network?',
                  es: '\xbfQu\xe9 necesito saber para personalizar mi red?'
                },
                answer: {
                  en:
                    'Our documentation contains everything you need to know to customize your spreadsheet. From here, you can also learn how to create IAs interactions and deliver a perfect experience for end-users. That said, you can also connect with us to help you achieve your goals if need be.',
                  es:
                    'Nuestra documentaci\xf3n contiene todo lo que necesita saber para personalizar su hoja de c\xe1lculo. Desde aqu\xed, tambi\xe9n puede aprender a crear interacciones de AI y ofrecer una experiencia perfecta para los usuarios finales. Dicho esto, tambi\xe9n puede conectarse con nosotros para ayudarlo a lograr sus objetivos si es necesario.'
                }
              },
              {
                question: {
                  en: 'Can I suggest new features?',
                  es: '\xbfPuedo sugerir nuevas funciones?'
                },
                answer: {
                  en:
                    "Definitely<span class='bold'> yes!</span> You can always contact us to let us know your needs. You can trust that we\u2019ll include it in the network if we find your suggestion to hold value for both of us. If not, you can simply request a custom build, at an extra cost. However, it may take a while before the feature gets implemented.",
                  es:
                    "\xa1Definitivamente<span class='bold'> s\xed!</span> Siempre puede contactarnos para informarnos sus necesidades. Puede confiar en que lo incluiremos en la red si consideramos que su sugerencia tiene valor para ambos. De lo contrario, simplemente puede solicitar una construcci\xf3n personalizada, a un costo adicional. Sin embargo, puede pasar un tiempo antes de que se implemente la funci\xf3n."
                }
              }
            ]);
          }
        }
        return (
          (e.ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵprov = c.Hb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
    }
  }
]);
