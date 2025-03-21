(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    '8klf': function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return r;
      });
      var c = t('M0ag'),
        a = t('tyNb'),
        o = t('sYmb'),
        s = t('fXoL');
      let r = (() => {
        class e {}
        return (
          (e.ɵmod = s.Jb({ type: e })),
          (e.ɵinj = s.Ib({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[c.a, a.g, o.a.forChild()]]
          })),
          e
        );
      })();
    },
    IXWp: function(e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'PricingModule', function() {
          return y;
        });
      var c = t('M0ag'),
        a = t('kpBo'),
        o = t('P6su'),
        s = t('8klf'),
        r = t('ORAR'),
        i = t('M0Rk'),
        l = t('tyNb'),
        u = t('ey9i'),
        d = t('fXoL'),
        b = t('WGuQ'),
        p = t('sYmb'),
        f = t('ofXK');
      function P(e, n) {
        if (
          (1 & e && (d.Qb(0, 'li'), d.Fc(1), d.gc(2, 'translate'), d.Pb()),
          2 & e)
        ) {
          const e = n.$implicit;
          d.Ab('list-group-item ', e.class, ''),
            d.xb(1),
            d.Hc('\n              ', d.hc(2, 4, e.name), '\n            ');
        }
      }
      function m(e, n) {
        if (
          (1 & e &&
            (d.Qb(0, 'div', 6),
            d.Fc(1, '\n        '),
            d.Qb(2, 'div', 7),
            d.Fc(3, '\n          '),
            d.Qb(4, 'div'),
            d.Fc(5, '\n            '),
            d.Qb(6, 'h4'),
            d.Fc(7),
            d.gc(8, 'translate'),
            d.Pb(),
            d.Fc(9, '\n\n            '),
            d.Fc(10, '\n\n            '),
            d.Qb(11, 'p'),
            d.Fc(12),
            d.gc(13, 'translate'),
            d.Pb(),
            d.Fc(14, '\n          '),
            d.Pb(),
            d.Fc(15, '\n\n          '),
            d.Qb(16, 'ul', 8),
            d.Fc(17, '\n            '),
            d.Dc(18, P, 3, 6, 'li', 9),
            d.Fc(19, '\n          '),
            d.Pb(),
            d.Fc(20, '\n\n          '),
            d.Qb(21, 'div', 10),
            d.Fc(22, '\n            '),
            d.Qb(23, 'a', 11),
            d.Fc(24),
            d.gc(25, 'translate'),
            d.Pb(),
            d.Fc(26, '\n          '),
            d.Pb(),
            d.Fc(27, '\n        '),
            d.Pb(),
            d.Fc(28, '\n      '),
            d.Pb()),
          2 & e)
        ) {
          const e = n.$implicit;
          d.xb(4),
            d.zb(
              'pricing card-header d-flex align-items-center flex-column ' +
                (e.best
                  ? 'bg-primary-gradient text-contrast'
                  : 'bg-light-gradient')
            ),
            d.xb(2),
            d.Db('text-contrast', e.best),
            d.xb(1),
            d.Hc(
              '\n              ',
              d.hc(8, 11, e.plan.name),
              '\n            '
            ),
            d.xb(5),
            d.Gc(d.hc(13, 13, e.plan.description)),
            d.xb(6),
            d.kc('ngForOf', e.features),
            d.xb(5),
            d.Ab('btn ', e.best ? 'btn-primary' : 'btn-outline-secondary', ''),
            d.xb(1),
            d.Hc(
              '\n              ',
              d.hc(25, 15, 'DEMOS.START_UP.PRICING.BUY'),
              '\n            '
            );
        }
      }
      let S = (() => {
        class e {
          constructor(e) {
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
                    description: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE_DESC'
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
                    description: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD_DESC'
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
          ngOnInit() {}
        }
        return (
          (e.ɵfac = function(n) {
            return new (n || e)(d.Lb(p.c));
          }),
          (e.ɵcmp = d.Fb({
            type: e,
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
            template: function(e, n) {
              1 & e &&
                (d.Qb(0, 'section'),
                d.Fc(1, '\n  '),
                d.Qb(2, 'div', 0),
                d.Fc(3, '\n    '),
                d.Qb(4, 'div', 1),
                d.Fc(5, '\n      '),
                d.Qb(6, 'h2', 2),
                d.Fc(7),
                d.gc(8, 'translate'),
                d.Pb(),
                d.Fc(9, '\n      '),
                d.Qb(10, 'p', 3),
                d.Fc(11),
                d.gc(12, 'translate'),
                d.Pb(),
                d.Fc(13, '\n    '),
                d.Pb(),
                d.Fc(14, '\n\n    '),
                d.Qb(15, 'div', 4),
                d.Fc(16, '\n      '),
                d.Dc(17, m, 29, 17, 'div', 5),
                d.Fc(18, '\n    '),
                d.Pb(),
                d.Fc(19, '\n  '),
                d.Pb(),
                d.Fc(20, '\n'),
                d.Pb(),
                d.Fc(21, '\n')),
                2 & e &&
                  (d.xb(7),
                  d.Gc(d.hc(8, 3, 'DEMOS.START_UP.PRICING.TITLE')),
                  d.xb(4),
                  d.Hc(
                    '\n        ',
                    d.hc(12, 5, 'DEMOS.START_UP.PRICING.SUBTITLE'),
                    '\n      '
                  ),
                  d.xb(6),
                  d.kc('ngForOf', n.plans));
            },
            directives: [f.j],
            pipes: [p.b],
            styles: ['']
          })),
          e
        );
      })();
      var g = t('AL06');
      function F(e, n) {
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
      let I = (() => {
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
                d.Dc(15, F, 10, 3, 'div', 4),
                d.Fc(16, '\n    '),
                d.Pb(),
                d.Fc(17, '\n  '),
                d.Pb(),
                d.Fc(18, '\n'),
                d.Pb(),
                d.Fc(19, '\n')),
                2 & e && (d.xb(15), d.kc('ngForOf', n.features));
            },
            directives: [f.j, g.a],
            styles: ['']
          })),
          e
        );
      })();
      var N = t('ZuuT'),
        h = t('q+Ce'),
        R = t('VKEt'),
        A = t('iLZQ');
      const E = [
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
                directives: [b.a, S, I, N.a, h.a, R.a, A.a],
                styles: ['']
              })),
              e
            );
          })(),
          data: { title: Object(u.c)('Pricing') }
        }
      ];
      let T = (() => {
          class e {}
          return (
            (e.ɵmod = d.Jb({ type: e })),
            (e.ɵinj = d.Ib({
              factory: function(n) {
                return new (n || e)();
              },
              imports: [[l.g.forChild(E)], l.g]
            })),
            e
          );
        })(),
        y = (() => {
          class e {}
          return (
            (e.ɵmod = d.Jb({ type: e })),
            (e.ɵinj = d.Ib({
              factory: function(n) {
                return new (n || e)();
              },
              imports: [[c.a, i.a, r.a, s.a, o.a, a.a, T, p.a.forChild()]]
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
      var c = t('tyNb'),
        a = t('sYmb'),
        o = t('fXoL');
      let s = (() => {
        class e {}
        return (
          (e.ɵmod = o.Jb({ type: e })),
          (e.ɵinj = o.Ib({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[c.g, a.a.forChild()]]
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
      var c = t('1kSV'),
        a = t('M0ag'),
        o = t('hKFN'),
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
            providers: [o.a],
            imports: [[a.a, c.c, s.a.forChild()]]
          })),
          e
        );
      })();
    },
    ZuuT: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return g;
      });
      var c = t('fXoL'),
        a = t('sYmb'),
        o = t('ofXK'),
        s = t('wHSu'),
        r = t('hKFN'),
        i = t('1kSV'),
        l = t('6NWb');
      function u(e, n) {
        if (
          (1 & e &&
            (c.Qb(0, 'button', 6),
            c.Fc(1, '\n        '),
            c.Mb(2, 'fa-icon', 7),
            c.Fc(3),
            c.Pb()),
          2 & e)
        ) {
          const e = c.fc(2).$implicit,
            n = c.fc();
          c.xb(2),
            c.kc('icon', n.chevronDown),
            c.xb(1),
            c.Hc('\n        ', e.question.es, '\n      ');
        }
      }
      function d(e, n) {
        if (
          (1 & e &&
            (c.Qb(0, 'button', 6),
            c.Fc(1, '\n        '),
            c.Mb(2, 'fa-icon', 7),
            c.Fc(3),
            c.Pb()),
          2 & e)
        ) {
          const e = c.fc(2).$implicit,
            n = c.fc();
          c.xb(2),
            c.kc('icon', n.chevronDown),
            c.xb(1),
            c.Hc('\n        ', e.question.en, '\n      ');
        }
      }
      function b(e, n) {
        if (
          (1 & e &&
            (c.Fc(0, '\n      '),
            c.Dc(1, u, 4, 2, 'button', 5),
            c.Fc(2, '\n      '),
            c.Dc(3, d, 4, 2, 'button', 5),
            c.Fc(4, '\n    ')),
          2 & e)
        ) {
          const e = c.fc(2);
          c.xb(1),
            c.kc('ngIf', 'es' === e.translate.currentLang),
            c.xb(2),
            c.kc('ngIf', 'en-US' === e.translate.currentLang);
        }
      }
      function p(e, n) {
        if ((1 & e && c.Mb(0, 'div', 9), 2 & e)) {
          const e = c.fc(2).$implicit;
          c.kc('innerHTML', e.answer.es, c.wc);
        }
      }
      function f(e, n) {
        if ((1 & e && c.Mb(0, 'div', 9), 2 & e)) {
          const e = c.fc(2).$implicit;
          c.kc('innerHTML', e.answer.en, c.wc);
        }
      }
      function P(e, n) {
        if (
          (1 & e &&
            (c.Fc(0, '\n      '),
            c.Dc(1, p, 1, 1, 'div', 8),
            c.Fc(2, '\n      '),
            c.Dc(3, f, 1, 1, 'div', 8),
            c.Fc(4, '\n    ')),
          2 & e)
        ) {
          const e = c.fc(2);
          c.xb(1),
            c.kc('ngIf', 'es' === e.translate.currentLang),
            c.xb(2),
            c.kc('ngIf', 'en-US' === e.translate.currentLang);
        }
      }
      function m(e, n) {
        1 & e &&
          (c.Qb(0, 'ngb-panel'),
          c.Fc(1, '\n    '),
          c.Dc(2, b, 5, 2, 'ng-template', 3),
          c.Fc(3, '\n\n    '),
          c.Dc(4, P, 5, 2, 'ng-template', 4),
          c.Fc(5, '\n  '),
          c.Pb());
      }
      let S = (() => {
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
              return new (n || e)(c.Lb(i.b), c.Lb(r.a), c.Lb(a.c));
            }),
            (e.ɵcmp = c.Fb({
              type: e,
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
              template: function(e, n) {
                1 & e &&
                  (c.Qb(0, 'ngb-accordion', 0, 1),
                  c.Fc(2, '\n  '),
                  c.Dc(3, m, 6, 0, 'ngb-panel', 2),
                  c.Fc(4, '\n'),
                  c.Pb(),
                  c.Fc(5, '\n')),
                  2 & e && (c.xb(3), c.kc('ngForOf', n.faqs));
              },
              directives: [i.a, o.j, i.i, i.k, i.j, o.k, i.l, l.a],
              styles: ['']
            })),
            e
          );
        })(),
        g = (() => {
          class e {
            constructor(e) {
              this.translate = e;
            }
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function(n) {
              return new (n || e)(c.Lb(a.c));
            }),
            (e.ɵcmp = c.Fb({
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
              directives: [o.i, S],
              pipes: [a.b],
              styles: ['']
            })),
            e
          );
        })();
    },
    hKFN: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return o;
      });
      var c = t('LRne'),
        a = t('fXoL');
      let o = (() => {
        class e {
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
          (e.ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵprov = a.Hb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
    }
  }
]);
