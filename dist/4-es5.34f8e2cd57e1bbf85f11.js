!(function() {
  function n(n, e) {
    for (var t = 0; t < e.length; t++) {
      var c = e[t];
      (c.enumerable = c.enumerable || !1),
        (c.configurable = !0),
        'value' in c && (c.writable = !0),
        Object.defineProperty(n, c.key, c);
    }
  }
  function e(e, t, c) {
    return t && n(e.prototype, t), c && n(e, c), e;
  }
  function t(n, e) {
    if (!(n instanceof e))
      throw new TypeError('Cannot call a class as a function');
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
      '2d4A': function(n, e, c) {
        'use strict';
        c.d(e, 'a', function() {
          return u;
        });
        var a = c('nhfI'),
          o = c('6NWb'),
          r = c('M0ag'),
          i = c('sYmb'),
          s = c('fXoL'),
          u = (function() {
            var n = function n() {
              t(this, n);
            };
            return (
              (n.ɵmod = s.Jb({ type: n })),
              (n.ɵinj = s.Ib({
                factory: function(e) {
                  return new (e || n)();
                },
                imports: [[a.c, o.b, r.a, i.a.forChild()]]
              })),
              n
            );
          })();
      },
      '8klf': function(n, e, c) {
        'use strict';
        c.d(e, 'a', function() {
          return s;
        });
        var a = c('M0ag'),
          o = c('tyNb'),
          r = c('sYmb'),
          i = c('fXoL'),
          s = (function() {
            var n = function n() {
              t(this, n);
            };
            return (
              (n.ɵmod = i.Jb({ type: n })),
              (n.ɵinj = i.Ib({
                factory: function(e) {
                  return new (e || n)();
                },
                imports: [[a.a, o.g, r.a.forChild()]]
              })),
              n
            );
          })();
      },
      P6su: function(n, e, c) {
        'use strict';
        c.d(e, 'a', function() {
          return u;
        });
        var a = c('1kSV'),
          o = c('M0ag'),
          r = c('hKFN'),
          i = c('sYmb'),
          s = c('fXoL'),
          u = (function() {
            var n = function n() {
              t(this, n);
            };
            return (
              (n.ɵmod = s.Jb({ type: n })),
              (n.ɵinj = s.Ib({
                factory: function(e) {
                  return new (e || n)();
                },
                providers: [r.a],
                imports: [[o.a, a.c, i.a.forChild()]]
              })),
              n
            );
          })();
      },
      ZuuT: function(n, c, a) {
        'use strict';
        a.d(c, 'a', function() {
          return S;
        });
        var o = a('fXoL'),
          r = a('sYmb'),
          i = a('ofXK'),
          s = a('wHSu'),
          u = a('hKFN'),
          l = a('1kSV'),
          b = a('6NWb');
        function d(n, e) {
          if (
            (1 & n &&
              (o.Qb(0, 'button', 6),
              o.Fc(1, '\n        '),
              o.Mb(2, 'fa-icon', 7),
              o.Fc(3),
              o.Pb()),
            2 & n)
          ) {
            var t = o.fc(2).$implicit,
              c = o.fc();
            o.xb(2),
              o.kc('icon', c.chevronDown),
              o.xb(1),
              o.Hc('\n        ', t.question.es, '\n      ');
          }
        }
        function f(n, e) {
          if (
            (1 & n &&
              (o.Qb(0, 'button', 6),
              o.Fc(1, '\n        '),
              o.Mb(2, 'fa-icon', 7),
              o.Fc(3),
              o.Pb()),
            2 & n)
          ) {
            var t = o.fc(2).$implicit,
              c = o.fc();
            o.xb(2),
              o.kc('icon', c.chevronDown),
              o.xb(1),
              o.Hc('\n        ', t.question.en, '\n      ');
          }
        }
        function p(n, e) {
          if (
            (1 & n &&
              (o.Fc(0, '\n      '),
              o.Dc(1, d, 4, 2, 'button', 5),
              o.Fc(2, '\n      '),
              o.Dc(3, f, 4, 2, 'button', 5),
              o.Fc(4, '\n    ')),
            2 & n)
          ) {
            var t = o.fc(2);
            o.xb(1),
              o.kc('ngIf', 'es' === t.translate.currentLang),
              o.xb(2),
              o.kc('ngIf', 'en-US' === t.translate.currentLang);
          }
        }
        function g(n, e) {
          if ((1 & n && o.Mb(0, 'div', 9), 2 & n)) {
            var t = o.fc(2).$implicit;
            o.kc('innerHTML', t.answer.es, o.wc);
          }
        }
        function m(n, e) {
          if ((1 & n && o.Mb(0, 'div', 9), 2 & n)) {
            var t = o.fc(2).$implicit;
            o.kc('innerHTML', t.answer.en, o.wc);
          }
        }
        function F(n, e) {
          if (
            (1 & n &&
              (o.Fc(0, '\n      '),
              o.Dc(1, g, 1, 1, 'div', 8),
              o.Fc(2, '\n      '),
              o.Dc(3, m, 1, 1, 'div', 8),
              o.Fc(4, '\n    ')),
            2 & n)
          ) {
            var t = o.fc(2);
            o.xb(1),
              o.kc('ngIf', 'es' === t.translate.currentLang),
              o.xb(2),
              o.kc('ngIf', 'en-US' === t.translate.currentLang);
          }
        }
        function v(n, e) {
          1 & n &&
            (o.Qb(0, 'ngb-panel'),
            o.Fc(1, '\n    '),
            o.Dc(2, p, 5, 2, 'ng-template', 3),
            o.Fc(3, '\n\n    '),
            o.Dc(4, F, 5, 2, 'ng-template', 4),
            o.Fc(5, '\n  '),
            o.Pb());
        }
        var h,
          y,
          I =
            (((y = (function() {
              function n(e, c, a) {
                t(this, n),
                  (this.faqService = c),
                  (this.translate = a),
                  (this.chevronDown = s.e),
                  (this.faqs = []),
                  (e.closeOthers = !0);
              }
              return (
                e(n, [
                  {
                    key: 'ngOnInit',
                    value: function() {
                      var n = this;
                      this.faqService.getFaqs().subscribe(function(e) {
                        return (n.faqs = e);
                      });
                    }
                  }
                ]),
                n
              );
            })()).ɵfac = function(n) {
              return new (n || y)(o.Lb(l.b), o.Lb(u.a), o.Lb(r.c));
            }),
            (y.ɵcmp = o.Fb({
              type: y,
              selectors: [['dc-faqs-accordion']],
              features: [o.wb([l.b])],
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
                  (o.Qb(0, 'ngb-accordion', 0, 1),
                  o.Fc(2, '\n  '),
                  o.Dc(3, v, 6, 0, 'ngb-panel', 2),
                  o.Fc(4, '\n'),
                  o.Pb(),
                  o.Fc(5, '\n')),
                  2 & n && (o.xb(3), o.kc('ngForOf', e.faqs));
              },
              directives: [l.a, i.j, l.i, l.k, l.j, i.k, l.l, b.a],
              styles: ['']
            })),
            y),
          S =
            (((h = (function() {
              function n(e) {
                t(this, n), (this.translate = e);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || h)(o.Lb(r.c));
            }),
            (h.ɵcmp = o.Fb({
              type: h,
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
                  2 & n &&
                    (o.Bb(
                      'section ',
                      e.background ? 'bg-' + e.background : '',
                      ' ',
                      e.edge ? 'edge ' + e.edge : '',
                      ''
                    ),
                    o.kc('ngClass', e.classes),
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
              directives: [i.i, I],
              pipes: [r.b],
              styles: ['']
            })),
            h);
      },
      akeW: function(n, c, a) {
        'use strict';
        a.d(c, 'a', function() {
          return d;
        });
        var o = a('fXoL'),
          r = a('ofXK');
        function i(n, e) {
          if (
            (1 & n &&
              (o.Qb(0, 'div', 7),
              o.Fc(1, '\n    '),
              o.Mb(2, 'img', 8),
              o.Fc(3, '\n  '),
              o.Pb()),
            2 & n)
          ) {
            var t = o.fc();
            o.xb(2),
              o.Ab(
                'absolute top h-100 ',
                t.isScreenLeft() ? 'left' : 'right',
                ''
              ),
              o.kc('src', t.imgShape, o.yc);
          }
        }
        function s(n, e) {
          if ((1 & n && o.Mb(0, 'img', 9), 2 & n)) {
            var t = o.fc();
            o.kc('src', t.img, o.yc),
              o.yb('data-aos', 'fade-' + (t.isScreenLeft() ? 'right' : 'left'));
          }
        }
        function u(n, e) {
          1 & n && (o.Fc(0, '\n          '), o.ic(1, 2), o.Fc(2, '\n        '));
        }
        var l = [[['', 'section-heading', '']], '*', [['', 'images', '']]],
          b = ['[section-heading]', '*', '[images]'],
          d = (function() {
            var n = (function() {
              function n() {
                t(this, n);
              }
              return (
                e(n, [
                  { key: 'ngOnInit', value: function() {} },
                  {
                    key: 'isScreenLeft',
                    value: function() {
                      return 'left' === this.screenPos;
                    }
                  }
                ]),
                n
              );
            })();
            return (
              (n.ɵfac = function(e) {
                return new (e || n)();
              }),
              (n.ɵcmp = o.Fb({
                type: n,
                selectors: [['dc-big-screen']],
                inputs: {
                  img: 'img',
                  screenPos: 'screenPos',
                  imgShape: 'imgShape'
                },
                ngContentSelectors: b,
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
                      (o.jc(l),
                      o.Qb(0, 'section', 0),
                      o.Fc(1, '\n  '),
                      o.Dc(2, i, 4, 4, 'div', 1),
                      o.Fc(3, '\n\n  '),
                      o.Qb(4, 'div', 2),
                      o.Fc(5, '\n    '),
                      o.ic(6),
                      o.Fc(7, '\n\n    '),
                      o.Qb(8, 'div', 3),
                      o.Fc(9, '\n      '),
                      o.Qb(10, 'div', 4),
                      o.Fc(11, '\n        '),
                      o.ic(12, 1),
                      o.Fc(13, '\n      '),
                      o.Pb(),
                      o.Fc(14, '\n\n      '),
                      o.Qb(15, 'div'),
                      o.Fc(16, '\n        '),
                      o.Dc(17, s, 1, 2, 'img', 5),
                      o.Fc(18, '\n\n        '),
                      o.Dc(19, u, 3, 0, 'ng-template', null, 6, o.Ec),
                      o.Fc(21, '\n      '),
                      o.Pb(),
                      o.Fc(22, '\n    '),
                      o.Pb(),
                      o.Fc(23, '\n  '),
                      o.Pb(),
                      o.Fc(24, '\n'),
                      o.Pb(),
                      o.Fc(25, '\n')),
                    2 & n)
                  ) {
                    var t = o.tc(20);
                    o.xb(2),
                      o.kc('ngIf', e.imgShape),
                      o.xb(8),
                      o.Db('order-md-last', e.isScreenLeft()),
                      o.xb(5),
                      o.Ab(
                        'col-12 col-lg-6 p',
                        e.isScreenLeft() ? 'l' : 'r',
                        '-0'
                      ),
                      o.xb(2),
                      o.kc('ngIf', e.img)('ngIfElse', t);
                  }
                },
                directives: [r.k],
                styles: ['']
              })),
              n
            );
          })();
      },
      hKFN: function(n, c, a) {
        'use strict';
        a.d(c, 'a', function() {
          return i;
        });
        var o = a('LRne'),
          r = a('fXoL'),
          i = (function() {
            var n = (function() {
              function n() {
                t(this, n);
              }
              return (
                e(n, [
                  {
                    key: 'getFaqs',
                    value: function() {
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
                n
              );
            })();
            return (
              (n.ɵfac = function(e) {
                return new (e || n)();
              }),
              (n.ɵprov = r.Hb({
                token: n,
                factory: n.ɵfac,
                providedIn: 'root'
              })),
              n
            );
          })();
      },
      nZwE: function(n, c, a) {
        'use strict';
        a.d(c, 'a', function() {
          return g;
        });
        var o = a('wHSu'),
          r = a('fXoL'),
          i = a('sYmb'),
          s = a('AL06'),
          u = a('6NWb'),
          l = a('ofXK'),
          b = a('nhfI');
        function d(n, e) {
          if (1 & n) {
            var t = r.Rb();
            r.Qb(0, 'li', 17),
              r.Fc(1, '\n            '),
              r.Qb(2, 'a', 18),
              r.bc('click', function() {
                r.vc(t);
                var n = e.index;
                return r.fc().updateSlider(n);
              }),
              r.Fc(3, '\n              '),
              r.Qb(4, 'small', 19),
              r.Fc(5),
              r.Pb(),
              r.Fc(6, '\n            '),
              r.Pb(),
              r.Fc(7, '\n          '),
              r.Pb();
          }
          if (2 & n) {
            var c = e.$implicit,
              a = e.index,
              o = r.fc();
            r.Db('active', a === o.currentSlide),
              r.xb(2),
              r.yb('data-step', a + 1),
              r.xb(3),
              r.Gc(c);
          }
        }
        function f(n, e) {
          if (
            (1 & n &&
              (r.Qb(0, 'div', 20),
              r.Fc(1, '\n              '),
              r.Fc(2, '\n              '),
              r.Qb(3, 'video', 21),
              r.Fc(4, '\n                '),
              r.Mb(5, 'source', 22),
              r.Fc(6, '\n              '),
              r.Pb(),
              r.Fc(7, '\n            '),
              r.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            r.xb(5),
              r.mc(
                'src',
                'assets/img/screens/dash/website_dashboard_0',
                t,
                '.mp4',
                r.yc
              );
          }
        }
        var p = function() {
            return [1, 2, 3, 4];
          },
          g = (function() {
            var n = (function() {
              function n(e) {
                t(this, n),
                  (this.translate = e),
                  (this.elements = [
                    'Build',
                    'Customize',
                    'Deploy',
                    'Automate'
                  ]),
                  (this.longArrowAltRight = o.l),
                  (this.currentSlide = 0);
              }
              return (
                e(n, [
                  { key: 'ngOnInit', value: function() {} },
                  {
                    key: 'updateSlider',
                    value: function(n) {
                      this.currentSlide = n;
                    }
                  },
                  {
                    key: 'onIndexChange',
                    value: function(n) {
                      this.currentSlide = n;
                    }
                  }
                ]),
                n
              );
            })();
            return (
              (n.ɵfac = function(e) {
                return new (e || n)(r.Lb(i.c));
              }),
              (n.ɵcmp = r.Fb({
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
                    (r.Fc(0, '\n'),
                    r.Qb(1, 'section', 0),
                    r.Fc(2, '\n  '),
                    r.Qb(3, 'div', 1),
                    r.Fc(4, '\n    '),
                    r.Qb(5, 'div', 2),
                    r.Fc(6, '\n      '),
                    r.Mb(7, 'dc-feather', 3),
                    r.Fc(8, '\n      '),
                    r.Qb(9, 'h2'),
                    r.Fc(10),
                    r.gc(11, 'translate'),
                    r.Pb(),
                    r.Fc(12, '\n      '),
                    r.Qb(13, 'p', 4),
                    r.Fc(14),
                    r.gc(15, 'translate'),
                    r.Pb(),
                    r.Fc(16, '\n    '),
                    r.Pb(),
                    r.Fc(17, '\n\n    '),
                    r.Qb(18, 'div', 5),
                    r.Fc(19, '\n      '),
                    r.Qb(20, 'div', 6),
                    r.Fc(21, '\n        '),
                    r.Qb(22, 'h2', 7),
                    r.Fc(23),
                    r.gc(24, 'translate'),
                    r.Mb(25, 'br'),
                    r.Qb(26, 'span', 8),
                    r.Fc(27),
                    r.gc(28, 'translate'),
                    r.Pb(),
                    r.Fc(29, '\n        '),
                    r.Pb(),
                    r.Fc(30, '\n        '),
                    r.Qb(31, 'p', 4),
                    r.Fc(32),
                    r.gc(33, 'translate'),
                    r.Pb(),
                    r.Fc(34, '\n\n        '),
                    r.Qb(35, 'a', 9),
                    r.Fc(36),
                    r.gc(37, 'translate'),
                    r.Mb(38, 'fa-icon', 10),
                    r.Fc(39, '\n        '),
                    r.Pb(),
                    r.Fc(40, '\n\n        '),
                    r.Qb(41, 'ol', 11),
                    r.Fc(42, '\n          '),
                    r.Dc(43, d, 8, 4, 'li', 12),
                    r.Fc(44, '\n        '),
                    r.Pb(),
                    r.Fc(45, '\n      '),
                    r.Pb(),
                    r.Fc(46, '\n\n      '),
                    r.Qb(47, 'div', 13),
                    r.Fc(48, '\n        '),
                    r.Qb(49, 'div', 14),
                    r.Fc(50, '\n          '),
                    r.Qb(51, 'swiper', 15),
                    r.bc('indexChange', function(n) {
                      return e.onIndexChange(n);
                    }),
                    r.Fc(52, '\n            '),
                    r.Dc(53, f, 8, 1, 'div', 16),
                    r.Fc(54, '\n          '),
                    r.Pb(),
                    r.Fc(55, '\n        '),
                    r.Pb(),
                    r.Fc(56, '\n      '),
                    r.Pb(),
                    r.Fc(57, '\n    '),
                    r.Pb(),
                    r.Fc(58, '\n  '),
                    r.Pb(),
                    r.Fc(59, '\n'),
                    r.Pb(),
                    r.Fc(60, '\n')),
                    2 & n &&
                      (r.xb(7),
                      r.kc('name', 'sliders')('iconClass', 'stroke-primary'),
                      r.xb(3),
                      r.Gc(
                        r.hc(
                          11,
                          14,
                          'SLIDERS.SLIDER_START_RIGHT_WAY.FOR_EVERYONE'
                        )
                      ),
                      r.xb(4),
                      r.Hc(
                        '\n        ',
                        r.hc(
                          15,
                          16,
                          'SLIDERS.SLIDER_START_RIGHT_WAY.EVERYTHINK_DOES_ALL'
                        ),
                        '\n      '
                      ),
                      r.xb(9),
                      r.Hc(
                        '\n          ',
                        r.hc(
                          24,
                          18,
                          'SLIDERS.SLIDER_START_RIGHT_WAY.START_THE_RIGHT_WAY'
                        ),
                        ''
                      ),
                      r.xb(4),
                      r.Gc(
                        r.hc(
                          28,
                          20,
                          'SLIDERS.SLIDER_START_RIGHT_WAY.START_WITH_EVERy_THINK'
                        )
                      ),
                      r.xb(5),
                      r.Hc(
                        '\n          ',
                        r.hc(
                          33,
                          22,
                          'SLIDERS.SLIDER_START_RIGHT_WAY.THINKING_ABOUT_YOUR_AI_JOURNEY'
                        ),
                        '\n        '
                      ),
                      r.xb(4),
                      r.Hc(
                        '',
                        r.hc(
                          37,
                          24,
                          'SLIDERS.SLIDER_START_RIGHT_WAY.CHOOSE_THE_RIGHT_PLAN'
                        ),
                        '\n          '
                      ),
                      r.xb(2),
                      r.zb('ml-3'),
                      r.kc('icon', e.longArrowAltRight),
                      r.xb(5),
                      r.kc('ngForOf', e.elements),
                      r.xb(8),
                      r.kc('index', e.currentSlide),
                      r.xb(2),
                      r.kc('ngForOf', r.nc(26, p)));
                },
                directives: [s.a, u.a, l.j, b.a],
                pipes: [i.b],
                styles: ['']
              })),
              n
            );
          })();
      },
      pETt: function(n, c, a) {
        'use strict';
        a.d(c, 'a', function() {
          return i;
        });
        var o = a('fXoL'),
          r = a('sYmb'),
          i = (function() {
            var n = (function() {
              function n(e) {
                t(this, n), (this.translate = e);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })();
            return (
              (n.ɵfac = function(e) {
                return new (e || n)(o.Lb(r.c));
              }),
              (n.ɵcmp = o.Fb({
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
                    (o.Qb(0, 'section', 0),
                    o.Fc(1, '\n  '),
                    o.Qb(2, 'div', 1),
                    o.Fc(3, '\n    '),
                    o.Qb(4, 'div', 2),
                    o.Fc(5, '\n      '),
                    o.Qb(6, 'div', 3),
                    o.Fc(7, '\n        '),
                    o.Qb(8, 'p', 4),
                    o.Fc(9),
                    o.gc(10, 'translate'),
                    o.Pb(),
                    o.Fc(11, '\n\n        '),
                    o.Qb(12, 'p', 5),
                    o.Fc(13),
                    o.gc(14, 'translate'),
                    o.Pb(),
                    o.Fc(15, '\n\n        '),
                    o.Mb(16, 'hr', 6),
                    o.Fc(17, '\n        '),
                    o.Qb(18, 'div', 7),
                    o.Fc(19, '\n          '),
                    o.Qb(20, 'span', 8),
                    o.Fc(21),
                    o.gc(22, 'translate'),
                    o.Pb(),
                    o.Fc(23),
                    o.gc(24, 'translate'),
                    o.Pb(),
                    o.Fc(25, '\n      '),
                    o.Pb(),
                    o.Fc(26, '\n\n      '),
                    o.Mb(27, 'div', 9),
                    o.Fc(28, '\n    '),
                    o.Pb(),
                    o.Fc(29, '\n  '),
                    o.Pb(),
                    o.Fc(30, '\n'),
                    o.Pb(),
                    o.Fc(31, '\n')),
                    2 & n &&
                      (o.xb(9),
                      o.Hc(
                        '\n          ',
                        o.hc(
                          10,
                          6,
                          'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_LEFT.EVERYTHIN_IS_GREAT_FOR'
                        ),
                        '\n        '
                      ),
                      o.xb(4),
                      o.Hc(
                        '\n          ',
                        o.hc(
                          14,
                          8,
                          'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_LEFT.ANYONE_WHO_IS_LOOKING_FOR_SIMPLE'
                        ),
                        '\n        '
                      ),
                      o.xb(8),
                      o.Hc(
                        '\n            ',
                        o.hc(
                          22,
                          10,
                          'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_LEFT.EVERYTHINK_LTD_TEAM'
                        ),
                        ''
                      ),
                      o.xb(2),
                      o.Hc(
                        '\n          ',
                        o.hc(
                          24,
                          12,
                          'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_LEFT.DoING_GREATE_SINCE'
                        ),
                        '\n        '
                      ),
                      o.xb(4),
                      o.Cc(
                        'background-image',
                        'url(assets/img/testimonials/1.jpg)'
                      ));
                },
                pipes: [r.b],
                styles: ['']
              })),
              n
            );
          })();
      },
      pu65: function(n, e, c) {
        'use strict';
        c.d(e, 'a', function() {
          return s;
        });
        var a = c('nhfI'),
          o = c('M0ag'),
          r = c('sYmb'),
          i = c('fXoL'),
          s = (function() {
            var n = function n() {
              t(this, n);
            };
            return (
              (n.ɵmod = i.Jb({ type: n })),
              (n.ɵinj = i.Ib({
                factory: function(e) {
                  return new (e || n)();
                },
                imports: [[a.c, o.a, r.a.forChild()]]
              })),
              n
            );
          })();
      }
    }
  ]);
})();
