(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    '2d4A': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return i;
      });
      var c = t('nhfI'),
        s = t('6NWb'),
        a = t('M0ag'),
        o = t('sYmb'),
        r = t('fXoL');
      let i = (() => {
        class n {}
        return (
          (n.ɵmod = r.Jb({ type: n })),
          (n.ɵinj = r.Ib({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[c.c, s.b, a.a, o.a.forChild()]]
          })),
          n
        );
      })();
    },
    '8klf': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      });
      var c = t('M0ag'),
        s = t('tyNb'),
        a = t('sYmb'),
        o = t('fXoL');
      let r = (() => {
        class n {}
        return (
          (n.ɵmod = o.Jb({ type: n })),
          (n.ɵinj = o.Ib({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[c.a, s.g, a.a.forChild()]]
          })),
          n
        );
      })();
    },
    P6su: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return i;
      });
      var c = t('1kSV'),
        s = t('M0ag'),
        a = t('hKFN'),
        o = t('sYmb'),
        r = t('fXoL');
      let i = (() => {
        class n {}
        return (
          (n.ɵmod = r.Jb({ type: n })),
          (n.ɵinj = r.Ib({
            factory: function(e) {
              return new (e || n)();
            },
            providers: [a.a],
            imports: [[s.a, c.c, o.a.forChild()]]
          })),
          n
        );
      })();
    },
    ZuuT: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return h;
      });
      var c = t('fXoL'),
        s = t('sYmb'),
        a = t('ofXK'),
        o = t('wHSu'),
        r = t('hKFN'),
        i = t('1kSV'),
        l = t('6NWb');
      function b(n, e) {
        if (
          (1 & n &&
            (c.Qb(0, 'button', 6),
            c.Fc(1, '\n        '),
            c.Mb(2, 'fa-icon', 7),
            c.Fc(3),
            c.Pb()),
          2 & n)
        ) {
          const n = c.fc(2).$implicit,
            e = c.fc();
          c.xb(2),
            c.kc('icon', e.chevronDown),
            c.xb(1),
            c.Hc('\n        ', n.question.es, '\n      ');
        }
      }
      function u(n, e) {
        if (
          (1 & n &&
            (c.Qb(0, 'button', 6),
            c.Fc(1, '\n        '),
            c.Mb(2, 'fa-icon', 7),
            c.Fc(3),
            c.Pb()),
          2 & n)
        ) {
          const n = c.fc(2).$implicit,
            e = c.fc();
          c.xb(2),
            c.kc('icon', e.chevronDown),
            c.xb(1),
            c.Hc('\n        ', n.question.en, '\n      ');
        }
      }
      function d(n, e) {
        if (
          (1 & n &&
            (c.Fc(0, '\n      '),
            c.Dc(1, b, 4, 2, 'button', 5),
            c.Fc(2, '\n      '),
            c.Dc(3, u, 4, 2, 'button', 5),
            c.Fc(4, '\n    ')),
          2 & n)
        ) {
          const n = c.fc(2);
          c.xb(1),
            c.kc('ngIf', 'es' === n.translate.currentLang),
            c.xb(2),
            c.kc('ngIf', 'en-US' === n.translate.currentLang);
        }
      }
      function f(n, e) {
        if ((1 & n && c.Mb(0, 'div', 9), 2 & n)) {
          const n = c.fc(2).$implicit;
          c.kc('innerHTML', n.answer.es, c.wc);
        }
      }
      function p(n, e) {
        if ((1 & n && c.Mb(0, 'div', 9), 2 & n)) {
          const n = c.fc(2).$implicit;
          c.kc('innerHTML', n.answer.en, c.wc);
        }
      }
      function g(n, e) {
        if (
          (1 & n &&
            (c.Fc(0, '\n      '),
            c.Dc(1, f, 1, 1, 'div', 8),
            c.Fc(2, '\n      '),
            c.Dc(3, p, 1, 1, 'div', 8),
            c.Fc(4, '\n    ')),
          2 & n)
        ) {
          const n = c.fc(2);
          c.xb(1),
            c.kc('ngIf', 'es' === n.translate.currentLang),
            c.xb(2),
            c.kc('ngIf', 'en-US' === n.translate.currentLang);
        }
      }
      function m(n, e) {
        1 & n &&
          (c.Qb(0, 'ngb-panel'),
          c.Fc(1, '\n    '),
          c.Dc(2, d, 5, 2, 'ng-template', 3),
          c.Fc(3, '\n\n    '),
          c.Dc(4, g, 5, 2, 'ng-template', 4),
          c.Fc(5, '\n  '),
          c.Pb());
      }
      let F = (() => {
          class n {
            constructor(n, e, t) {
              (this.faqService = e),
                (this.translate = t),
                (this.chevronDown = o.e),
                (this.faqs = []),
                (n.closeOthers = !0);
            }
            ngOnInit() {
              this.faqService.getFaqs().subscribe(n => (this.faqs = n));
            }
          }
          return (
            (n.ɵfac = function(e) {
              return new (e || n)(c.Lb(i.b), c.Lb(r.a), c.Lb(s.c));
            }),
            (n.ɵcmp = c.Fb({
              type: n,
              selectors: [['dc-faqs-accordion']],
              features: [c.wb([i.b])],
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
              template: function(n, e) {
                1 & n &&
                  (c.Qb(0, 'ngb-accordion', 0, 1),
                  c.Fc(2, '\n  '),
                  c.Dc(3, m, 6, 0, 'ngb-panel', 2),
                  c.Fc(4, '\n'),
                  c.Pb(),
                  c.Fc(5, '\n')),
                  2 & n && (c.xb(3), c.kc('ngForOf', e.faqs));
              },
              directives: [i.a, a.j, i.i, i.k, i.j, a.k, i.l, l.a],
              styles: ['']
            })),
            n
          );
        })(),
        h = (() => {
          class n {
            constructor(n) {
              this.translate = n;
            }
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(e) {
              return new (e || n)(c.Lb(s.c));
            }),
            (n.ɵcmp = c.Fb({
              type: n,
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
              template: function(n, e) {
                1 & n &&
                  (c.Qb(0, 'section', 0),
                  c.Fc(1, '\n  '),
                  c.Qb(2, 'div', 1),
                  c.Fc(3, '\n    '),
                  c.Qb(4, 'div', 2),
                  c.Fc(5, '\n      '),
                  c.Qb(6, 'div', 3),
                  c.Fc(7, '\n        '),
                  c.Qb(8, 'h2'),
                  c.Fc(9),
                  c.gc(10, 'translate'),
                  c.Qb(11, 'span', 4),
                  c.Fc(12),
                  c.gc(13, 'translate'),
                  c.Pb(),
                  c.Fc(14, '\n        '),
                  c.Pb(),
                  c.Fc(15, '\n\n        '),
                  c.Qb(16, 'p', 5),
                  c.Fc(17),
                  c.gc(18, 'translate'),
                  c.Pb(),
                  c.Fc(19, '\n\n        '),
                  c.Qb(20, 'p', 6),
                  c.Fc(21),
                  c.gc(22, 'translate'),
                  c.Pb(),
                  c.Fc(23, '\n      '),
                  c.Pb(),
                  c.Fc(24, '\n\n      '),
                  c.Qb(25, 'div', 7),
                  c.Fc(26, '\n        '),
                  c.Qb(27, 'div', 8),
                  c.Fc(28, '\n          '),
                  c.Mb(29, 'dc-faqs-accordion'),
                  c.Fc(30, '\n        '),
                  c.Pb(),
                  c.Fc(31, '\n      '),
                  c.Pb(),
                  c.Fc(32, '\n    '),
                  c.Pb(),
                  c.Fc(33, '\n  '),
                  c.Pb(),
                  c.Fc(34, '\n'),
                  c.Pb(),
                  c.Fc(35, '\n')),
                  2 & n &&
                    (c.Bb(
                      'section ',
                      e.background ? 'bg-' + e.background : '',
                      ' ',
                      e.edge ? 'edge ' + e.edge : '',
                      ''
                    ),
                    c.kc('ngClass', e.classes),
                    c.xb(9),
                    c.Hc(
                      '\n          ',
                      c.hc(10, 9, 'FAQS.FAQS1.DO_YOU_HAVE'),
                      '\n          '
                    ),
                    c.xb(3),
                    c.Gc(c.hc(13, 11, 'FAQS.FAQS1.QUESTIONS')),
                    c.xb(5),
                    c.Hc(
                      '\n          ',
                      c.hc(18, 13, 'FAQS.FAQS1.NOT_SURE_HOW'),
                      '\n        '
                    ),
                    c.xb(4),
                    c.Hc(
                      '\n          ',
                      c.hc(22, 15, 'FAQS.FAQS1.HERE_ARE_THE_ANSWERS'),
                      '\n        '
                    ));
              },
              directives: [a.i, F],
              pipes: [s.b],
              styles: ['']
            })),
            n
          );
        })();
    },
    akeW: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return b;
      });
      var c = t('fXoL'),
        s = t('ofXK');
      function a(n, e) {
        if (
          (1 & n &&
            (c.Qb(0, 'div', 7),
            c.Fc(1, '\n    '),
            c.Mb(2, 'img', 8),
            c.Fc(3, '\n  '),
            c.Pb()),
          2 & n)
        ) {
          const n = c.fc();
          c.xb(2),
            c.Ab(
              'absolute top h-100 ',
              n.isScreenLeft() ? 'left' : 'right',
              ''
            ),
            c.kc('src', n.imgShape, c.yc);
        }
      }
      function o(n, e) {
        if ((1 & n && c.Mb(0, 'img', 9), 2 & n)) {
          const n = c.fc();
          c.kc('src', n.img, c.yc),
            c.yb('data-aos', 'fade-' + (n.isScreenLeft() ? 'right' : 'left'));
        }
      }
      function r(n, e) {
        1 & n && (c.Fc(0, '\n          '), c.ic(1, 2), c.Fc(2, '\n        '));
      }
      const i = [[['', 'section-heading', '']], '*', [['', 'images', '']]],
        l = ['[section-heading]', '*', '[images]'];
      let b = (() => {
        class n {
          constructor() {}
          ngOnInit() {}
          isScreenLeft() {
            return 'left' === this.screenPos;
          }
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵcmp = c.Fb({
            type: n,
            selectors: [['dc-big-screen']],
            inputs: {
              img: 'img',
              screenPos: 'screenPos',
              imgShape: 'imgShape'
            },
            ngContentSelectors: l,
            decls: 26,
            vars: 8,
            consts: [
              [1, 'section'],
              ['class', 'shape-wrapper', 4, 'ngIf'],
              [1, 'container-wide', 'bring-to-front'],
              [
                1,
                'row',
                'gap-y',
                'align-items-center',
                'text-center',
                'text-lg-left'
              ],
              [1, 'col-10', 'col-lg-4', 'mx-auto'],
              [
                'alt',
                '',
                'class',
                'img-responsive shadow',
                3,
                'src',
                4,
                'ngIf',
                'ngIfElse'
              ],
              ['iContent', ''],
              [1, 'shape-wrapper'],
              ['alt', '...', 3, 'src'],
              ['alt', '', 1, 'img-responsive', 'shadow', 3, 'src']
            ],
            template: function(n, e) {
              if (
                (1 & n &&
                  (c.jc(i),
                  c.Qb(0, 'section', 0),
                  c.Fc(1, '\n  '),
                  c.Dc(2, a, 4, 4, 'div', 1),
                  c.Fc(3, '\n\n  '),
                  c.Qb(4, 'div', 2),
                  c.Fc(5, '\n    '),
                  c.ic(6),
                  c.Fc(7, '\n\n    '),
                  c.Qb(8, 'div', 3),
                  c.Fc(9, '\n      '),
                  c.Qb(10, 'div', 4),
                  c.Fc(11, '\n        '),
                  c.ic(12, 1),
                  c.Fc(13, '\n      '),
                  c.Pb(),
                  c.Fc(14, '\n\n      '),
                  c.Qb(15, 'div'),
                  c.Fc(16, '\n        '),
                  c.Dc(17, o, 1, 2, 'img', 5),
                  c.Fc(18, '\n\n        '),
                  c.Dc(19, r, 3, 0, 'ng-template', null, 6, c.Ec),
                  c.Fc(21, '\n      '),
                  c.Pb(),
                  c.Fc(22, '\n    '),
                  c.Pb(),
                  c.Fc(23, '\n  '),
                  c.Pb(),
                  c.Fc(24, '\n'),
                  c.Pb(),
                  c.Fc(25, '\n')),
                2 & n)
              ) {
                const n = c.tc(20);
                c.xb(2),
                  c.kc('ngIf', e.imgShape),
                  c.xb(8),
                  c.Db('order-md-last', e.isScreenLeft()),
                  c.xb(5),
                  c.Ab('col-12 col-lg-6 p', e.isScreenLeft() ? 'l' : 'r', '-0'),
                  c.xb(2),
                  c.kc('ngIf', e.img)('ngIfElse', n);
              }
            },
            directives: [s.k],
            styles: ['']
          })),
          n
        );
      })();
    },
    hKFN: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return a;
      });
      var c = t('LRne'),
        s = t('fXoL');
      let a = (() => {
        class n {
          constructor() {}
          getFaqs() {
            return Object(c.a)([
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
          (n.ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵprov = s.Hb({ token: n, factory: n.ɵfac, providedIn: 'root' })),
          n
        );
      })();
    },
    nZwE: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return f;
      });
      var c = t('wHSu'),
        s = t('fXoL'),
        a = t('sYmb'),
        o = t('AL06'),
        r = t('6NWb'),
        i = t('ofXK'),
        l = t('nhfI');
      function b(n, e) {
        if (1 & n) {
          const n = s.Rb();
          s.Qb(0, 'li', 17),
            s.Fc(1, '\n            '),
            s.Qb(2, 'a', 18),
            s.bc('click', function() {
              s.vc(n);
              const t = e.index;
              return s.fc().updateSlider(t);
            }),
            s.Fc(3, '\n              '),
            s.Qb(4, 'small', 19),
            s.Fc(5),
            s.Pb(),
            s.Fc(6, '\n            '),
            s.Pb(),
            s.Fc(7, '\n          '),
            s.Pb();
        }
        if (2 & n) {
          const n = e.$implicit,
            t = e.index,
            c = s.fc();
          s.Db('active', t === c.currentSlide),
            s.xb(2),
            s.yb('data-step', t + 1),
            s.xb(3),
            s.Gc(n);
        }
      }
      function u(n, e) {
        if (
          (1 & n &&
            (s.Qb(0, 'div', 20),
            s.Fc(1, '\n              '),
            s.Fc(2, '\n              '),
            s.Qb(3, 'video', 21),
            s.Fc(4, '\n                '),
            s.Mb(5, 'source', 22),
            s.Fc(6, '\n              '),
            s.Pb(),
            s.Fc(7, '\n            '),
            s.Pb()),
          2 & n)
        ) {
          const n = e.$implicit;
          s.xb(5),
            s.mc(
              'src',
              'assets/img/screens/dash/website_dashboard_0',
              n,
              '.mp4',
              s.yc
            );
        }
      }
      const d = function() {
        return [1, 2, 3, 4];
      };
      let f = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
              (this.elements = ['Build', 'Customize', 'Deploy', 'Automate']),
              (this.longArrowAltRight = c.l),
              (this.currentSlide = 0);
          }
          ngOnInit() {}
          updateSlider(n) {
            this.currentSlide = n;
          }
          onIndexChange(n) {
            this.currentSlide = n;
          }
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)(s.Lb(a.c));
          }),
          (n.ɵcmp = s.Fb({
            type: n,
            selectors: [['dc-slider-start-right-way']],
            decls: 61,
            vars: 27,
            consts: [
              [1, 'section', 'b-b', 'b-t', 'bg-light'],
              [1, 'container'],
              [1, 'section-heading', 'text-center'],
              [3, 'name', 'iconClass'],
              [1, 'lead', 'text-secondary'],
              [1, 'row', 'align-items-end'],
              [1, 'col-lg-4'],
              [1, 'bold'],
              [1, 'light'],
              [
                'href',
                'https://everythink.ai/pages/pricing',
                1,
                'btn',
                'btn-primary',
                'btn-rounded',
                'mt-4'
              ],
              [3, 'icon'],
              [
                'id',
                'sw-nav-tools',
                1,
                'nav',
                'nav-process',
                'nav-circle',
                'nav-justified',
                'mt-5'
              ],
              ['class', 'nav-item', 3, 'active', 4, 'ngFor', 'ngForOf'],
              [1, 'col-lg-7', 'ml-lg-auto'],
              ['data-aos', 'fade-left', 1, ''],
              [3, 'index', 'indexChange'],
              ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
              [1, 'nav-item'],
              ['href', 'javascript:void(0)', 1, 'nav-link', 3, 'click'],
              [1, 'mt-4', 'absolute'],
              [1, 'swiper-slide'],
              [
                'width',
                '100%',
                'autoplay',
                'autoplay',
                'controls',
                '',
                2,
                'margin-top',
                '50px',
                'margin-bottom',
                '20px'
              ],
              ['type', 'video/mp4', 3, 'src']
            ],
            template: function(n, e) {
              1 & n &&
                (s.Fc(0, '\n'),
                s.Qb(1, 'section', 0),
                s.Fc(2, '\n  '),
                s.Qb(3, 'div', 1),
                s.Fc(4, '\n    '),
                s.Qb(5, 'div', 2),
                s.Fc(6, '\n      '),
                s.Mb(7, 'dc-feather', 3),
                s.Fc(8, '\n      '),
                s.Qb(9, 'h2'),
                s.Fc(10),
                s.gc(11, 'translate'),
                s.Pb(),
                s.Fc(12, '\n      '),
                s.Qb(13, 'p', 4),
                s.Fc(14),
                s.gc(15, 'translate'),
                s.Pb(),
                s.Fc(16, '\n    '),
                s.Pb(),
                s.Fc(17, '\n\n    '),
                s.Qb(18, 'div', 5),
                s.Fc(19, '\n      '),
                s.Qb(20, 'div', 6),
                s.Fc(21, '\n        '),
                s.Qb(22, 'h2', 7),
                s.Fc(23),
                s.gc(24, 'translate'),
                s.Mb(25, 'br'),
                s.Qb(26, 'span', 8),
                s.Fc(27),
                s.gc(28, 'translate'),
                s.Pb(),
                s.Fc(29, '\n        '),
                s.Pb(),
                s.Fc(30, '\n        '),
                s.Qb(31, 'p', 4),
                s.Fc(32),
                s.gc(33, 'translate'),
                s.Pb(),
                s.Fc(34, '\n\n        '),
                s.Qb(35, 'a', 9),
                s.Fc(36),
                s.gc(37, 'translate'),
                s.Mb(38, 'fa-icon', 10),
                s.Fc(39, '\n        '),
                s.Pb(),
                s.Fc(40, '\n\n        '),
                s.Qb(41, 'ol', 11),
                s.Fc(42, '\n          '),
                s.Dc(43, b, 8, 4, 'li', 12),
                s.Fc(44, '\n        '),
                s.Pb(),
                s.Fc(45, '\n      '),
                s.Pb(),
                s.Fc(46, '\n\n      '),
                s.Qb(47, 'div', 13),
                s.Fc(48, '\n        '),
                s.Qb(49, 'div', 14),
                s.Fc(50, '\n          '),
                s.Qb(51, 'swiper', 15),
                s.bc('indexChange', function(n) {
                  return e.onIndexChange(n);
                }),
                s.Fc(52, '\n            '),
                s.Dc(53, u, 8, 1, 'div', 16),
                s.Fc(54, '\n          '),
                s.Pb(),
                s.Fc(55, '\n        '),
                s.Pb(),
                s.Fc(56, '\n      '),
                s.Pb(),
                s.Fc(57, '\n    '),
                s.Pb(),
                s.Fc(58, '\n  '),
                s.Pb(),
                s.Fc(59, '\n'),
                s.Pb(),
                s.Fc(60, '\n')),
                2 & n &&
                  (s.xb(7),
                  s.kc('name', 'sliders')('iconClass', 'stroke-primary'),
                  s.xb(3),
                  s.Gc(
                    s.hc(11, 14, 'SLIDERS.SLIDER_START_RIGHT_WAY.FOR_EVERYONE')
                  ),
                  s.xb(4),
                  s.Hc(
                    '\n        ',
                    s.hc(
                      15,
                      16,
                      'SLIDERS.SLIDER_START_RIGHT_WAY.EVERYTHINK_DOES_ALL'
                    ),
                    '\n      '
                  ),
                  s.xb(9),
                  s.Hc(
                    '\n          ',
                    s.hc(
                      24,
                      18,
                      'SLIDERS.SLIDER_START_RIGHT_WAY.START_THE_RIGHT_WAY'
                    ),
                    ''
                  ),
                  s.xb(4),
                  s.Gc(
                    s.hc(
                      28,
                      20,
                      'SLIDERS.SLIDER_START_RIGHT_WAY.START_WITH_EVERy_THINK'
                    )
                  ),
                  s.xb(5),
                  s.Hc(
                    '\n          ',
                    s.hc(
                      33,
                      22,
                      'SLIDERS.SLIDER_START_RIGHT_WAY.THINKING_ABOUT_YOUR_AI_JOURNEY'
                    ),
                    '\n        '
                  ),
                  s.xb(4),
                  s.Hc(
                    '',
                    s.hc(
                      37,
                      24,
                      'SLIDERS.SLIDER_START_RIGHT_WAY.CHOOSE_THE_RIGHT_PLAN'
                    ),
                    '\n          '
                  ),
                  s.xb(2),
                  s.zb('ml-3'),
                  s.kc('icon', e.longArrowAltRight),
                  s.xb(5),
                  s.kc('ngForOf', e.elements),
                  s.xb(8),
                  s.kc('index', e.currentSlide),
                  s.xb(2),
                  s.kc('ngForOf', s.nc(26, d)));
            },
            directives: [o.a, r.a, i.j, l.a],
            pipes: [a.b],
            styles: ['']
          })),
          n
        );
      })();
    },
    pETt: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return a;
      });
      var c = t('fXoL'),
        s = t('sYmb');
      let a = (() => {
        class n {
          constructor(n) {
            this.translate = n;
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)(c.Lb(s.c));
          }),
          (n.ɵcmp = c.Fb({
            type: n,
            selectors: [['dc-testimonial-simple-text-left']],
            decls: 32,
            vars: 14,
            consts: [
              [1, 'singl-testimonial', 'shadow'],
              [1, 'container-fluid', 'py-0'],
              [
                1,
                'row',
                'align-items-center',
                'gradient',
                'gradient-blue-navy',
                'text-contrast'
              ],
              [1, 'col-md-3', 'mx-auto', 'py-4', 'py-md-0'],
              [
                1,
                'rounded-pill',
                'py-2',
                'px-4',
                'text-uppercase',
                'mb-0',
                'badge',
                'badge-contrast'
              ],
              [1, 'font-md', 'bold', 'mt-1', 'text-contrast'],
              [1, 'my-4'],
              [1, 'small', 'text-contrast'],
              [1, 'bold', 'd-block'],
              [1, 'col-12', 'col-md-7', 'image-background', 'cover']
            ],
            template: function(n, e) {
              1 & n &&
                (c.Qb(0, 'section', 0),
                c.Fc(1, '\n  '),
                c.Qb(2, 'div', 1),
                c.Fc(3, '\n    '),
                c.Qb(4, 'div', 2),
                c.Fc(5, '\n      '),
                c.Qb(6, 'div', 3),
                c.Fc(7, '\n        '),
                c.Qb(8, 'p', 4),
                c.Fc(9),
                c.gc(10, 'translate'),
                c.Pb(),
                c.Fc(11, '\n\n        '),
                c.Qb(12, 'p', 5),
                c.Fc(13),
                c.gc(14, 'translate'),
                c.Pb(),
                c.Fc(15, '\n\n        '),
                c.Mb(16, 'hr', 6),
                c.Fc(17, '\n        '),
                c.Qb(18, 'div', 7),
                c.Fc(19, '\n          '),
                c.Qb(20, 'span', 8),
                c.Fc(21),
                c.gc(22, 'translate'),
                c.Pb(),
                c.Fc(23),
                c.gc(24, 'translate'),
                c.Pb(),
                c.Fc(25, '\n      '),
                c.Pb(),
                c.Fc(26, '\n\n      '),
                c.Mb(27, 'div', 9),
                c.Fc(28, '\n    '),
                c.Pb(),
                c.Fc(29, '\n  '),
                c.Pb(),
                c.Fc(30, '\n'),
                c.Pb(),
                c.Fc(31, '\n')),
                2 & n &&
                  (c.xb(9),
                  c.Hc(
                    '\n          ',
                    c.hc(
                      10,
                      6,
                      'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_LEFT.EVERYTHIN_IS_GREAT_FOR'
                    ),
                    '\n        '
                  ),
                  c.xb(4),
                  c.Hc(
                    '\n          ',
                    c.hc(
                      14,
                      8,
                      'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_LEFT.ANYONE_WHO_IS_LOOKING_FOR_SIMPLE'
                    ),
                    '\n        '
                  ),
                  c.xb(8),
                  c.Hc(
                    '\n            ',
                    c.hc(
                      22,
                      10,
                      'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_LEFT.EVERYTHINK_LTD_TEAM'
                    ),
                    ''
                  ),
                  c.xb(2),
                  c.Hc(
                    '\n          ',
                    c.hc(
                      24,
                      12,
                      'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_LEFT.DoING_GREATE_SINCE'
                    ),
                    '\n        '
                  ),
                  c.xb(4),
                  c.Cc(
                    'background-image',
                    'url(assets/img/testimonials/1.jpg)'
                  ));
            },
            pipes: [s.b],
            styles: ['']
          })),
          n
        );
      })();
    },
    pu65: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      });
      var c = t('nhfI'),
        s = t('M0ag'),
        a = t('sYmb'),
        o = t('fXoL');
      let r = (() => {
        class n {}
        return (
          (n.ɵmod = o.Jb({ type: n })),
          (n.ɵinj = o.Ib({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[c.c, s.a, a.a.forChild()]]
          })),
          n
        );
      })();
    }
  }
]);
