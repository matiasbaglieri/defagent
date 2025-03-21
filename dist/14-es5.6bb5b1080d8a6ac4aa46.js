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
    [14],
    {
      '8klf': function(n, e, c) {
        'use strict';
        c.d(e, 'a', function() {
          return s;
        });
        var a = c('M0ag'),
          o = c('tyNb'),
          i = c('sYmb'),
          r = c('fXoL'),
          s = (function() {
            var n = function n() {
              t(this, n);
            };
            return (
              (n.ɵmod = r.Jb({ type: n })),
              (n.ɵinj = r.Ib({
                factory: function(e) {
                  return new (e || n)();
                },
                imports: [[a.a, o.g, i.a.forChild()]]
              })),
              n
            );
          })();
      },
      IXWp: function(n, c, a) {
        'use strict';
        a.r(c),
          a.d(c, 'PricingModule', function() {
            return U;
          });
        var o = a('M0ag'),
          i = a('kpBo'),
          r = a('P6su'),
          s = a('8klf'),
          u = a('ORAR'),
          l = a('M0Rk'),
          d = a('tyNb'),
          b = a('ey9i'),
          f = a('fXoL'),
          p = a('WGuQ'),
          P = a('sYmb'),
          m = a('ofXK');
        function S(n, e) {
          if (
            (1 & n && (f.Qb(0, 'li'), f.Fc(1), f.gc(2, 'translate'), f.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            f.Ab('list-group-item ', t.class, ''),
              f.xb(1),
              f.Hc('\n              ', f.hc(2, 4, t.name), '\n            ');
          }
        }
        function g(n, e) {
          if (
            (1 & n &&
              (f.Qb(0, 'div', 6),
              f.Fc(1, '\n        '),
              f.Qb(2, 'div', 7),
              f.Fc(3, '\n          '),
              f.Qb(4, 'div'),
              f.Fc(5, '\n            '),
              f.Qb(6, 'h4'),
              f.Fc(7),
              f.gc(8, 'translate'),
              f.Pb(),
              f.Fc(9, '\n\n            '),
              f.Fc(10, '\n\n            '),
              f.Qb(11, 'p'),
              f.Fc(12),
              f.gc(13, 'translate'),
              f.Pb(),
              f.Fc(14, '\n          '),
              f.Pb(),
              f.Fc(15, '\n\n          '),
              f.Qb(16, 'ul', 8),
              f.Fc(17, '\n            '),
              f.Dc(18, S, 3, 6, 'li', 9),
              f.Fc(19, '\n          '),
              f.Pb(),
              f.Fc(20, '\n\n          '),
              f.Qb(21, 'div', 10),
              f.Fc(22, '\n            '),
              f.Qb(23, 'a', 11),
              f.Fc(24),
              f.gc(25, 'translate'),
              f.Pb(),
              f.Fc(26, '\n          '),
              f.Pb(),
              f.Fc(27, '\n        '),
              f.Pb(),
              f.Fc(28, '\n      '),
              f.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            f.xb(4),
              f.zb(
                'pricing card-header d-flex align-items-center flex-column ' +
                  (t.best
                    ? 'bg-primary-gradient text-contrast'
                    : 'bg-light-gradient')
              ),
              f.xb(2),
              f.Db('text-contrast', t.best),
              f.xb(1),
              f.Hc(
                '\n              ',
                f.hc(8, 11, t.plan.name),
                '\n            '
              ),
              f.xb(5),
              f.Gc(f.hc(13, 13, t.plan.description)),
              f.xb(6),
              f.kc('ngForOf', t.features),
              f.xb(5),
              f.Ab(
                'btn ',
                t.best ? 'btn-primary' : 'btn-outline-secondary',
                ''
              ),
              f.xb(1),
              f.Hc(
                '\n              ',
                f.hc(25, 15, 'DEMOS.START_UP.PRICING.BUY'),
                '\n            '
              );
          }
        }
        var F,
          I =
            (((F = (function() {
              function n(e) {
                t(this, n),
                  (this.translate = e),
                  (this.plans = [
                    {
                      icon: 'box',
                      plan: {
                        name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL',
                        price: 0.99,
                        description: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL_DESC'
                      },
                      features: [
                        { name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL1' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL2' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL3' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL4' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL5' }
                      ]
                    },
                    {
                      icon: 'download-cloud',
                      best: !0,
                      plan: {
                        name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS',
                        price: 29.99,
                        description: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS_DESC'
                      },
                      features: [
                        { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS1' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS2' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS3' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS4' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS5' }
                      ]
                    },
                    {
                      icon: 'settings',
                      plan: {
                        name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE',
                        price: 99.99,
                        description:
                          'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE_DESC'
                      },
                      features: [
                        { name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE1' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE2' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE3' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE4' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE5' }
                      ]
                    },
                    {
                      icon: 'download-cloud',
                      best: !0,
                      plan: {
                        name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD',
                        price: 29.99,
                        description:
                          'DEMOS.START_UP.PRICING.PLAN_BUSINESSD_DESC'
                      },
                      features: [
                        { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD1' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD2' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD3' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD4' },
                        { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD5' }
                      ]
                    }
                  ]);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || F)(f.Lb(P.c));
            }),
            (F.ɵcmp = f.Fb({
              type: F,
              selectors: [['dc-pricing-cards']],
              decls: 22,
              vars: 7,
              consts: [
                [1, 'container'],
                [1, 'section-heading', 'text-center'],
                [1, 'mb-2'],
                [1, 'lead', 'text-secondary'],
                [1, 'row'],
                ['class', 'col-md-3 mt-4', 4, 'ngFor', 'ngForOf'],
                [1, 'col-md-3', 'mt-4'],
                [1, 'card', 'text-center'],
                [1, 'list-group', 'list-group-flush'],
                [3, 'class', 4, 'ngFor', 'ngForOf'],
                [1, 'card-body'],
                ['href', 'https://everythink.ai/app/#/sessions/signup']
              ],
              template: function(n, e) {
                1 & n &&
                  (f.Qb(0, 'section'),
                  f.Fc(1, '\n  '),
                  f.Qb(2, 'div', 0),
                  f.Fc(3, '\n    '),
                  f.Qb(4, 'div', 1),
                  f.Fc(5, '\n      '),
                  f.Qb(6, 'h2', 2),
                  f.Fc(7),
                  f.gc(8, 'translate'),
                  f.Pb(),
                  f.Fc(9, '\n      '),
                  f.Qb(10, 'p', 3),
                  f.Fc(11),
                  f.gc(12, 'translate'),
                  f.Pb(),
                  f.Fc(13, '\n    '),
                  f.Pb(),
                  f.Fc(14, '\n\n    '),
                  f.Qb(15, 'div', 4),
                  f.Fc(16, '\n      '),
                  f.Dc(17, g, 29, 17, 'div', 5),
                  f.Fc(18, '\n    '),
                  f.Pb(),
                  f.Fc(19, '\n  '),
                  f.Pb(),
                  f.Fc(20, '\n'),
                  f.Pb(),
                  f.Fc(21, '\n')),
                  2 & n &&
                    (f.xb(7),
                    f.Gc(f.hc(8, 3, 'DEMOS.START_UP.PRICING.TITLE')),
                    f.xb(4),
                    f.Hc(
                      '\n        ',
                      f.hc(12, 5, 'DEMOS.START_UP.PRICING.SUBTITLE'),
                      '\n      '
                    ),
                    f.xb(6),
                    f.kc('ngForOf', e.plans));
              },
              directives: [m.j],
              pipes: [P.b],
              styles: ['']
            })),
            F),
          h = a('AL06');
        function N(n, e) {
          if (
            (1 & n &&
              (f.Qb(0, 'div', 5),
              f.Fc(1, '\n        '),
              f.Mb(2, 'dc-feather', 6),
              f.Fc(3, '\n        '),
              f.Qb(4, 'h5', 7),
              f.Fc(5),
              f.Pb(),
              f.Fc(6, '\n        '),
              f.Qb(7, 'p', 8),
              f.Fc(
                8,
                '\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci\n          atque beatae dicta dolores hic porro quam voluptatibus.\n        '
              ),
              f.Pb(),
              f.Fc(9, '\n      '),
              f.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            f.xb(2),
              f.kc('name', t.icon)('iconClass', 'stroke-info'),
              f.xb(3),
              f.Gc(t.title);
          }
        }
        var v,
          R,
          A,
          E,
          T =
            (((v = (function() {
              function n() {
                t(this, n),
                  (this.features = [
                    { icon: 'headphones', title: 'First class support' },
                    { icon: 'box', title: 'Code snippets' },
                    { icon: 'headphones', title: 'Full documentation' },
                    { icon: 'lock', title: 'Total control of your code' },
                    { icon: 'airplay', title: 'Responsive design' },
                    { icon: 'monitor', title: 'Browser support' }
                  ]);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || v)();
            }),
            (v.ɵcmp = f.Fb({
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
              template: function(n, e) {
                1 & n &&
                  (f.Qb(0, 'section'),
                  f.Fc(1, '\n  '),
                  f.Qb(2, 'div', 0),
                  f.Fc(3, '\n    '),
                  f.Qb(4, 'div', 1),
                  f.Fc(5, '\n      '),
                  f.Qb(6, 'h2'),
                  f.Fc(7, 'All our plans include'),
                  f.Pb(),
                  f.Fc(8, '\n      '),
                  f.Qb(9, 'p', 2),
                  f.Fc(
                    10,
                    '\n        Get access to a ton of features out of the box\n      '
                  ),
                  f.Pb(),
                  f.Fc(11, '\n    '),
                  f.Pb(),
                  f.Fc(12, '\n\n    '),
                  f.Qb(13, 'div', 3),
                  f.Fc(14, '\n      '),
                  f.Dc(15, N, 10, 3, 'div', 4),
                  f.Fc(16, '\n    '),
                  f.Pb(),
                  f.Fc(17, '\n  '),
                  f.Pb(),
                  f.Fc(18, '\n'),
                  f.Pb(),
                  f.Fc(19, '\n')),
                  2 & n && (f.xb(15), f.kc('ngForOf', e.features));
              },
              directives: [m.j, h.a],
              styles: ['']
            })),
            v),
          y = a('ZuuT'),
          _ = a('q+Ce'),
          w = a('VKEt'),
          D = a('iLZQ'),
          O = [
            {
              path: '',
              component:
                ((R = (function() {
                  function n() {
                    t(this, n);
                  }
                  return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
                })()),
                (R.ɵfac = function(n) {
                  return new (n || R)();
                }),
                (R.ɵcmp = f.Fb({
                  type: R,
                  selectors: [['dc-pricing']],
                  decls: 15,
                  vars: 5,
                  consts: [
                    [3, 'title', 'subtitle'],
                    [3, 'edge', 'background', 'classes']
                  ],
                  template: function(n, e) {
                    1 & n &&
                      (f.Qb(0, 'dc-page-header-wave', 0),
                      f.Fc(1, '\n'),
                      f.Pb(),
                      f.Fc(2, '\n\n'),
                      f.Mb(3, 'dc-pricing-cards'),
                      f.Fc(4, '\n'),
                      f.Mb(5, 'dc-pricing-include'),
                      f.Fc(6, '\n'),
                      f.Mb(7, 'dc-faqs1', 1),
                      f.Fc(8, '\n'),
                      f.Mb(9, 'dc-start-now-box'),
                      f.Fc(10, '\n'),
                      f.Mb(11, 'dc-cta1'),
                      f.Fc(12, '\n\n'),
                      f.Mb(13, 'dc-footer2'),
                      f.Fc(14, '\n')),
                      2 & n &&
                        (f.kc('title', 'Pricing Plans')(
                          'subtitle',
                          'Simple and affordable pricing plans. Try EveryThink with no obligation.'
                        ),
                        f.xb(7),
                        f.kc('edge', 'bottom-right')('background', 'light')(
                          'classes',
                          'border-top'
                        ));
                  },
                  directives: [p.a, I, T, y.a, _.a, w.a, D.a],
                  styles: ['']
                })),
                R),
              data: { title: Object(b.c)('Pricing') }
            }
          ],
          L =
            (((E = function n() {
              t(this, n);
            }).ɵmod = f.Jb({ type: E })),
            (E.ɵinj = f.Ib({
              factory: function(n) {
                return new (n || E)();
              },
              imports: [[d.g.forChild(O)], d.g]
            })),
            E),
          U =
            (((A = function n() {
              t(this, n);
            }).ɵmod = f.Jb({ type: A })),
            (A.ɵinj = f.Ib({
              factory: function(n) {
                return new (n || A)();
              },
              imports: [[o.a, l.a, u.a, s.a, r.a, i.a, L, P.a.forChild()]]
            })),
            A);
      },
      ORAR: function(n, e, c) {
        'use strict';
        c.d(e, 'a', function() {
          return r;
        });
        var a = c('tyNb'),
          o = c('sYmb'),
          i = c('fXoL'),
          r = (function() {
            var n = function n() {
              t(this, n);
            };
            return (
              (n.ɵmod = i.Jb({ type: n })),
              (n.ɵinj = i.Ib({
                factory: function(e) {
                  return new (e || n)();
                },
                imports: [[a.g, o.a.forChild()]]
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
          i = c('hKFN'),
          r = c('sYmb'),
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
                providers: [i.a],
                imports: [[o.a, a.c, r.a.forChild()]]
              })),
              n
            );
          })();
      },
      ZuuT: function(n, c, a) {
        'use strict';
        a.d(c, 'a', function() {
          return N;
        });
        var o = a('fXoL'),
          i = a('sYmb'),
          r = a('ofXK'),
          s = a('wHSu'),
          u = a('hKFN'),
          l = a('1kSV'),
          d = a('6NWb');
        function b(n, e) {
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
              o.Dc(1, b, 4, 2, 'button', 5),
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
        function P(n, e) {
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
        function S(n, e) {
          if (
            (1 & n &&
              (o.Fc(0, '\n      '),
              o.Dc(1, P, 1, 1, 'div', 8),
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
        function g(n, e) {
          1 & n &&
            (o.Qb(0, 'ngb-panel'),
            o.Fc(1, '\n    '),
            o.Dc(2, p, 5, 2, 'ng-template', 3),
            o.Fc(3, '\n\n    '),
            o.Dc(4, S, 5, 2, 'ng-template', 4),
            o.Fc(5, '\n  '),
            o.Pb());
        }
        var F,
          I,
          h =
            (((I = (function() {
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
              return new (n || I)(o.Lb(l.b), o.Lb(u.a), o.Lb(i.c));
            }),
            (I.ɵcmp = o.Fb({
              type: I,
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
                  o.Dc(3, g, 6, 0, 'ngb-panel', 2),
                  o.Fc(4, '\n'),
                  o.Pb(),
                  o.Fc(5, '\n')),
                  2 & n && (o.xb(3), o.kc('ngForOf', e.faqs));
              },
              directives: [l.a, r.j, l.i, l.k, l.j, r.k, l.l, d.a],
              styles: ['']
            })),
            I),
          N =
            (((F = (function() {
              function n(e) {
                t(this, n), (this.translate = e);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || F)(o.Lb(i.c));
            }),
            (F.ɵcmp = o.Fb({
              type: F,
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
              directives: [r.i, h],
              pipes: [i.b],
              styles: ['']
            })),
            F);
      },
      hKFN: function(n, c, a) {
        'use strict';
        a.d(c, 'a', function() {
          return r;
        });
        var o = a('LRne'),
          i = a('fXoL'),
          r = (function() {
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
              (n.ɵprov = i.Hb({
                token: n,
                factory: n.ɵfac,
                providedIn: 'root'
              })),
              n
            );
          })();
      }
    }
  ]);
})();
