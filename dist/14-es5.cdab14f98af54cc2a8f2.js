!(function() {
  function e(e, n) {
    for (var t = 0; t < n.length; t++) {
      var o = n[t];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        'value' in o && (o.writable = !0),
        Object.defineProperty(e, o.key, o);
    }
  }
  function n(n, t, o) {
    return t && e(n.prototype, t), o && e(n, o), n;
  }
  function t(e, n) {
    if (!(e instanceof n))
      throw new TypeError('Cannot call a class as a function');
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [14],
    {
      '8klf': function(e, n, o) {
        'use strict';
        o.d(n, 'a', function() {
          return i;
        });
        var a = o('M0ag'),
          c = o('tyNb'),
          r = o('sYmb'),
          s = o('fXoL'),
          i = (function() {
            var e = function e() {
              t(this, e);
            };
            return (
              (e.ɵmod = s.Jb({ type: e })),
              (e.ɵinj = s.Ib({
                factory: function(n) {
                  return new (n || e)();
                },
                imports: [[a.a, c.g, r.a.forChild()]]
              })),
              e
            );
          })();
      },
      IXWp: function(e, o, a) {
        'use strict';
        a.r(o),
          a.d(o, 'PricingModule', function() {
            return D;
          });
        var c = a('M0ag'),
          r = a('kpBo'),
          s = a('P6su'),
          i = a('8klf'),
          u = a('ORAR'),
          l = a('M0Rk'),
          d = a('tyNb'),
          f = a('ey9i'),
          b = a('fXoL'),
          p = a('WGuQ'),
          m = a('u8tZ'),
          g = a('ofXK'),
          h = a('AL06');
        function F(e, n) {
          if (
            (1 & e &&
              (b.Qb(0, 'div', 5),
              b.Fc(1, '\n        '),
              b.Mb(2, 'dc-feather', 6),
              b.Fc(3, '\n        '),
              b.Qb(4, 'h5', 7),
              b.Fc(5),
              b.Pb(),
              b.Fc(6, '\n        '),
              b.Qb(7, 'p', 8),
              b.Fc(
                8,
                '\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci\n          atque beatae dicta dolores hic porro quam voluptatibus.\n        '
              ),
              b.Pb(),
              b.Fc(9, '\n      '),
              b.Pb()),
            2 & e)
          ) {
            var t = n.$implicit;
            b.xb(2),
              b.kc('name', t.icon)('iconClass', 'stroke-info'),
              b.xb(3),
              b.Gc(t.title);
          }
        }
        var v,
          y,
          w,
          k,
          P =
            (((v = (function() {
              function e() {
                t(this, e),
                  (this.features = [
                    { icon: 'headphones', title: 'First class support' },
                    { icon: 'box', title: 'Code snippets' },
                    { icon: 'headphones', title: 'Full documentation' },
                    { icon: 'lock', title: 'Total control of your code' },
                    { icon: 'airplay', title: 'Responsive design' },
                    { icon: 'monitor', title: 'Browser support' }
                  ]);
              }
              return n(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(e) {
              return new (e || v)();
            }),
            (v.ɵcmp = b.Fb({
              type: v,
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
                  (b.Qb(0, 'section'),
                  b.Fc(1, '\n  '),
                  b.Qb(2, 'div', 0),
                  b.Fc(3, '\n    '),
                  b.Qb(4, 'div', 1),
                  b.Fc(5, '\n      '),
                  b.Qb(6, 'h2'),
                  b.Fc(7, 'All our plans include'),
                  b.Pb(),
                  b.Fc(8, '\n      '),
                  b.Qb(9, 'p', 2),
                  b.Fc(
                    10,
                    '\n        Get access to a ton of features out of the box\n      '
                  ),
                  b.Pb(),
                  b.Fc(11, '\n    '),
                  b.Pb(),
                  b.Fc(12, '\n\n    '),
                  b.Qb(13, 'div', 3),
                  b.Fc(14, '\n      '),
                  b.Dc(15, F, 10, 3, 'div', 4),
                  b.Fc(16, '\n    '),
                  b.Pb(),
                  b.Fc(17, '\n  '),
                  b.Pb(),
                  b.Fc(18, '\n'),
                  b.Pb(),
                  b.Fc(19, '\n')),
                  2 & e && (b.xb(15), b.kc('ngForOf', n.features));
              },
              directives: [g.j, h.a],
              styles: ['']
            })),
            v),
          Q = a('ZuuT'),
          x = a('q+Ce'),
          q = a('VKEt'),
          I = a('iLZQ'),
          S = [
            {
              path: '',
              component:
                ((y = (function() {
                  function e() {
                    t(this, e);
                  }
                  return n(e, [{ key: 'ngOnInit', value: function() {} }]), e;
                })()),
                (y.ɵfac = function(e) {
                  return new (e || y)();
                }),
                (y.ɵcmp = b.Fb({
                  type: y,
                  selectors: [['dc-pricing']],
                  decls: 15,
                  vars: 5,
                  consts: [
                    [3, 'title', 'subtitle'],
                    [3, 'edge', 'background', 'classes']
                  ],
                  template: function(e, n) {
                    1 & e &&
                      (b.Qb(0, 'dc-page-header-wave', 0),
                      b.Fc(1, '\n'),
                      b.Pb(),
                      b.Fc(2, '\n\n'),
                      b.Mb(3, 'dc-pricing-cards'),
                      b.Fc(4, '\n'),
                      b.Mb(5, 'dc-pricing-include'),
                      b.Fc(6, '\n'),
                      b.Mb(7, 'dc-faqs1', 1),
                      b.Fc(8, '\n'),
                      b.Mb(9, 'dc-start-now-box'),
                      b.Fc(10, '\n'),
                      b.Mb(11, 'dc-cta1'),
                      b.Fc(12, '\n\n'),
                      b.Mb(13, 'dc-footer2'),
                      b.Fc(14, '\n')),
                      2 & e &&
                        (b.kc('title', 'Pricing Plans')(
                          'subtitle',
                          'Simple and affordable pricing plans. Try EveryThink with no obligation.'
                        ),
                        b.xb(7),
                        b.kc('edge', 'bottom-right')('background', 'light')(
                          'classes',
                          'border-top'
                        ));
                  },
                  directives: [p.a, m.a, P, Q.a, x.a, q.a, I.a],
                  styles: ['']
                })),
                y),
              data: { title: Object(f.c)('Pricing') }
            }
          ],
          A =
            (((w = function e() {
              t(this, e);
            }).ɵmod = b.Jb({ type: w })),
            (w.ɵinj = b.Ib({
              factory: function(e) {
                return new (e || w)();
              },
              imports: [[d.g.forChild(S)], d.g]
            })),
            w),
          L = a('sYmb'),
          D =
            (((k = function e() {
              t(this, e);
            }).ɵmod = b.Jb({ type: k })),
            (k.ɵinj = b.Ib({
              factory: function(e) {
                return new (e || k)();
              },
              imports: [[c.a, l.a, u.a, i.a, s.a, r.a, A, L.a.forChild()]]
            })),
            k);
      },
      ORAR: function(e, n, o) {
        'use strict';
        o.d(n, 'a', function() {
          return s;
        });
        var a = o('tyNb'),
          c = o('sYmb'),
          r = o('fXoL'),
          s = (function() {
            var e = function e() {
              t(this, e);
            };
            return (
              (e.ɵmod = r.Jb({ type: e })),
              (e.ɵinj = r.Ib({
                factory: function(n) {
                  return new (n || e)();
                },
                imports: [[a.g, c.a.forChild()]]
              })),
              e
            );
          })();
      },
      P6su: function(e, n, o) {
        'use strict';
        o.d(n, 'a', function() {
          return u;
        });
        var a = o('1kSV'),
          c = o('M0ag'),
          r = o('hKFN'),
          s = o('sYmb'),
          i = o('fXoL'),
          u = (function() {
            var e = function e() {
              t(this, e);
            };
            return (
              (e.ɵmod = i.Jb({ type: e })),
              (e.ɵinj = i.Ib({
                factory: function(n) {
                  return new (n || e)();
                },
                providers: [r.a],
                imports: [[c.a, a.c, s.a.forChild()]]
              })),
              e
            );
          })();
      },
      ZuuT: function(e, o, a) {
        'use strict';
        a.d(o, 'a', function() {
          return k;
        });
        var c = a('fXoL'),
          r = a('sYmb'),
          s = a('ofXK'),
          i = a('wHSu'),
          u = a('hKFN'),
          l = a('1kSV'),
          d = a('6NWb');
        function f(e, n) {
          if (
            (1 & e &&
              (c.Qb(0, 'button', 6),
              c.Fc(1, '\n        '),
              c.Mb(2, 'fa-icon', 7),
              c.Fc(3),
              c.Pb()),
            2 & e)
          ) {
            var t = c.fc(2).$implicit,
              o = c.fc();
            c.xb(2),
              c.kc('icon', o.chevronDown),
              c.xb(1),
              c.Hc('\n        ', t.question.es, '\n      ');
          }
        }
        function b(e, n) {
          if (
            (1 & e &&
              (c.Qb(0, 'button', 6),
              c.Fc(1, '\n        '),
              c.Mb(2, 'fa-icon', 7),
              c.Fc(3),
              c.Pb()),
            2 & e)
          ) {
            var t = c.fc(2).$implicit,
              o = c.fc();
            c.xb(2),
              c.kc('icon', o.chevronDown),
              c.xb(1),
              c.Hc('\n        ', t.question.en, '\n      ');
          }
        }
        function p(e, n) {
          if (
            (1 & e &&
              (c.Fc(0, '\n      '),
              c.Dc(1, f, 4, 2, 'button', 5),
              c.Fc(2, '\n      '),
              c.Dc(3, b, 4, 2, 'button', 5),
              c.Fc(4, '\n    ')),
            2 & e)
          ) {
            var t = c.fc(2);
            c.xb(1),
              c.kc('ngIf', 'es' === t.translate.currentLang),
              c.xb(2),
              c.kc('ngIf', 'en-US' === t.translate.currentLang);
          }
        }
        function m(e, n) {
          if ((1 & e && c.Mb(0, 'div', 9), 2 & e)) {
            var t = c.fc(2).$implicit;
            c.kc('innerHTML', t.answer.es, c.wc);
          }
        }
        function g(e, n) {
          if ((1 & e && c.Mb(0, 'div', 9), 2 & e)) {
            var t = c.fc(2).$implicit;
            c.kc('innerHTML', t.answer.en, c.wc);
          }
        }
        function h(e, n) {
          if (
            (1 & e &&
              (c.Fc(0, '\n      '),
              c.Dc(1, m, 1, 1, 'div', 8),
              c.Fc(2, '\n      '),
              c.Dc(3, g, 1, 1, 'div', 8),
              c.Fc(4, '\n    ')),
            2 & e)
          ) {
            var t = c.fc(2);
            c.xb(1),
              c.kc('ngIf', 'es' === t.translate.currentLang),
              c.xb(2),
              c.kc('ngIf', 'en-US' === t.translate.currentLang);
          }
        }
        function F(e, n) {
          1 & e &&
            (c.Qb(0, 'ngb-panel'),
            c.Fc(1, '\n    '),
            c.Dc(2, p, 5, 2, 'ng-template', 3),
            c.Fc(3, '\n\n    '),
            c.Dc(4, h, 5, 2, 'ng-template', 4),
            c.Fc(5, '\n  '),
            c.Pb());
        }
        var v,
          y,
          w =
            (((y = (function() {
              function e(n, o, a) {
                t(this, e),
                  (this.faqService = o),
                  (this.translate = a),
                  (this.chevronDown = i.e),
                  (this.faqs = []),
                  (n.closeOthers = !0);
              }
              return (
                n(e, [
                  {
                    key: 'ngOnInit',
                    value: function() {
                      var e = this;
                      this.faqService.getFaqs().subscribe(function(n) {
                        return (e.faqs = n);
                      });
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function(e) {
              return new (e || y)(c.Lb(l.b), c.Lb(u.a), c.Lb(r.c));
            }),
            (y.ɵcmp = c.Fb({
              type: y,
              selectors: [['dc-faqs-accordion']],
              features: [c.wb([l.b])],
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
                  (c.Qb(0, 'ngb-accordion', 0, 1),
                  c.Fc(2, '\n  '),
                  c.Dc(3, F, 6, 0, 'ngb-panel', 2),
                  c.Fc(4, '\n'),
                  c.Pb(),
                  c.Fc(5, '\n')),
                  2 & e && (c.xb(3), c.kc('ngForOf', n.faqs));
              },
              directives: [l.a, s.j, l.i, l.k, l.j, s.k, l.l, d.a],
              styles: ['']
            })),
            y),
          k =
            (((v = (function() {
              function e(n) {
                t(this, e), (this.translate = n);
              }
              return n(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(e) {
              return new (e || v)(c.Lb(r.c));
            }),
            (v.ɵcmp = c.Fb({
              type: v,
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
                  2 & e &&
                    (c.Bb(
                      'section ',
                      n.background ? 'bg-' + n.background : '',
                      ' ',
                      n.edge ? 'edge ' + n.edge : '',
                      ''
                    ),
                    c.kc('ngClass', n.classes),
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
              directives: [s.i, w],
              pipes: [r.b],
              styles: ['']
            })),
            v);
      },
      hKFN: function(e, o, a) {
        'use strict';
        a.d(o, 'a', function() {
          return s;
        });
        var c = a('LRne'),
          r = a('fXoL'),
          s = (function() {
            var e = (function() {
              function e() {
                t(this, e);
              }
              return (
                n(e, [
                  {
                    key: 'getFaqs',
                    value: function() {
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
                            en:
                              'What\u2019s your typical support response time?',
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
                            en:
                              'What do I need to know to customize my network?',
                            es:
                              '\xbfQu\xe9 necesito saber para personalizar mi red?'
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
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function(n) {
                return new (n || e)();
              }),
              (e.ɵprov = r.Hb({
                token: e,
                factory: e.ɵfac,
                providedIn: 'root'
              })),
              e
            );
          })();
      }
    }
  ]);
})();
