!(function() {
  function n(n, e) {
    if (!(n instanceof e))
      throw new TypeError('Cannot call a class as a function');
  }
  function e(n, e) {
    for (var t = 0; t < e.length; t++) {
      var c = e[t];
      (c.enumerable = c.enumerable || !1),
        (c.configurable = !0),
        'value' in c && (c.writable = !0),
        Object.defineProperty(n, c.key, c);
    }
  }
  function t(n, t, c) {
    return t && e(n.prototype, t), c && e(n, c), n;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [26],
    {
      gJiE: function(e, c, a) {
        'use strict';
        a.r(c),
          a.d(c, 'CorporateModule', function() {
            return D;
          });
        var i,
          r = a('M0ag'),
          o = a('M0Rk'),
          s = a('XMwz'),
          b = a('pu65'),
          l = a('P6su'),
          d = a('2d4A'),
          p = a('8klf'),
          g = a('tyNb'),
          E = a('ey9i'),
          u = a('fXoL'),
          F = a('wHSu'),
          T = a('sYmb'),
          h = a('6NWb'),
          f =
            (((i = (function() {
              function e(t) {
                n(this, e), (this.translate = t), (this.tag = F.t);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || i)(u.Lb(T.c));
            }),
            (i.ɵcmp = u.Fb({
              type: i,
              selectors: [['dc-corporate-heading']],
              decls: 41,
              vars: 20,
              consts: [
                [
                  1,
                  'header',
                  'page',
                  'section',
                  'parallax',
                  'image-background',
                  'center-bottom',
                  'cover',
                  'blanket',
                  'gradient',
                  'gradient-purple-navy',
                  'alpha-8',
                  'text-contrast'
                ],
                [1, 'container', 'overflow-hidden'],
                [1, 'row'],
                [1, 'col-md-10', 'col-lg-8'],
                [1, 'display-4', 'text-contrast', 'bold'],
                [1, 'd-block', 'light'],
                [1, 'lead'],
                [1, 'handwritten', 'font-md', 'highlight', 'px-4'],
                [1, 'nav', 'mt-5'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'nav-link',
                  'mr-3',
                  'btn',
                  'btn-rounded',
                  'btn-success'
                ],
                [
                  'href',
                  'https://everythink.ai/pages/pricing',
                  1,
                  'nav-link',
                  'btn',
                  'btn',
                  'btn-rounded',
                  'btn-contrast'
                ],
                [3, 'icon']
              ],
              template: function(n, e) {
                1 & n &&
                  (u.Fc(0, '\n'),
                  u.Qb(1, 'header', 0),
                  u.Fc(2, '\n  '),
                  u.Qb(3, 'div', 1),
                  u.Fc(4, '\n    '),
                  u.Qb(5, 'div', 2),
                  u.Fc(6, '\n      '),
                  u.Qb(7, 'div', 3),
                  u.Fc(8, '\n        '),
                  u.Qb(9, 'h1', 4),
                  u.Fc(10),
                  u.gc(11, 'translate'),
                  u.Qb(12, 'span', 5),
                  u.Fc(13),
                  u.gc(14, 'translate'),
                  u.Pb(),
                  u.Fc(15, '\n        '),
                  u.Pb(),
                  u.Fc(16, '\n        '),
                  u.Qb(17, 'p', 6),
                  u.Fc(18),
                  u.gc(19, 'translate'),
                  u.Pb(),
                  u.Fc(20, '\n        '),
                  u.Qb(21, 'p', 7),
                  u.Fc(22, 'Why wait? Start now!'),
                  u.Pb(),
                  u.Fc(23, '\n\n        '),
                  u.Qb(24, 'nav', 8),
                  u.Fc(25, '\n          '),
                  u.Qb(26, 'a', 9),
                  u.Fc(27),
                  u.gc(28, 'translate'),
                  u.Pb(),
                  u.Fc(29, '\n\n          '),
                  u.Qb(30, 'a', 10),
                  u.Fc(31, '\n            '),
                  u.Mb(32, 'fa-icon', 11),
                  u.Fc(33),
                  u.gc(34, 'translate'),
                  u.Pb(),
                  u.Fc(35, '\n        '),
                  u.Pb(),
                  u.Fc(36, '\n      '),
                  u.Pb(),
                  u.Fc(37, '\n    '),
                  u.Pb(),
                  u.Fc(38, '\n  '),
                  u.Pb(),
                  u.Fc(39, '\n'),
                  u.Pb(),
                  u.Fc(40, '\n')),
                  2 & n &&
                    (u.xb(1),
                    u.Cc(
                      'background-image',
                      'url(assets/images/corporate/bg/grid.jpg)'
                    ),
                    u.xb(9),
                    u.Hc(
                      '\n          ',
                      u.hc(
                        11,
                        10,
                        'DEMOS.HEALTH.CORPORATE.HEADING.EVERYTHINK_FOR_HEALTH'
                      ),
                      '\n          '
                    ),
                    u.xb(3),
                    u.Gc(
                      u.hc(
                        14,
                        12,
                        'DEMOS.HEALTH.CORPORATE.HEADING.WELCOME_TO_THE_FUTURE'
                      )
                    ),
                    u.xb(5),
                    u.Hc(
                      '\n          ',
                      u.hc(
                        19,
                        14,
                        'DEMOS.HEALTH.CORPORATE.HEADING.WITH_THE_RIGHT_DATA'
                      ),
                      '\n        '
                    ),
                    u.xb(9),
                    u.Hc(
                      '\n            ',
                      u.hc(28, 16, 'DEMOS.HEALTH.CORPORATE.HEADING.START_NOW'),
                      '\n          '
                    ),
                    u.xb(5),
                    u.zb('mr-3'),
                    u.kc('icon', e.tag),
                    u.xb(1),
                    u.Hc(
                      '\n            ',
                      u.hc(
                        34,
                        18,
                        'DEMOS.HEALTH.CORPORATE.HEADING.PLANS_AND_PRICEING'
                      ),
                      '\n          '
                    ));
              },
              directives: [h.a],
              pipes: [T.b],
              styles: ['']
            })),
            i),
          m = a('aaX3'),
          O = a('7cks'),
          H = a('nZwE'),
          v = a('pETt'),
          A = a('ofXK');
        function I(n, e) {
          if (
            (1 & n &&
              (u.Qb(0, 'div', 6),
              u.Fc(1, '\n        '),
              u.Qb(2, 'div', 7),
              u.Fc(3, '\n          '),
              u.Qb(4, 'h3'),
              u.Fc(5),
              u.Pb(),
              u.Fc(6, '\n          '),
              u.Qb(7, 'p', 8),
              u.Fc(8),
              u.Pb(),
              u.Fc(9, '\n        '),
              u.Pb(),
              u.Fc(10, '\n      '),
              u.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            u.xb(2),
              u.Cc(
                'background-image',
                'url(assets/images/corporate/lcards/' + t.img + '.svg)'
              ),
              u.xb(3),
              u.Gc(t.title),
              u.xb(3),
              u.Hc('\n            ', t.description, '\n          ');
          }
        }
        var S,
          P,
          M,
          R,
          y,
          _ =
            (((S = (function() {
              function e(t) {
                n(this, e),
                  (this.translate = t),
                  (this.cards = [
                    {
                      img: 'grow',
                      title: 'Growth',
                      animation: 'fade-up',
                      description:
                        'Stay on the cutting-edge of health-tech with EveryThink AIaaS tool with a powerful cognitive engine and learning capability that gets better with time, suggesting and implementing better ways to solve key administrative problems and everyday tasks.'
                    },
                    {
                      img: 'time',
                      title: 'Affordability',
                      animation: 'fade-up',
                      description:
                        'We utilizes machine learning to automate costly and repetitive administrative labor into a far less expensive and more efficient, digital workforce. This helps improve healthcare quality, deliver better patient/client experiences while being affordable.'
                    },
                    {
                      img: 'done',
                      title: 'Quick development',
                      animation: 'fade-up',
                      description:
                        'Our IAs can be ready for deployment and implementation across the entire organization in less than 24 hours. We guarantees high-performance as well as fast and error-free execution.'
                    },
                    {
                      img: 'goals',
                      title: 'Unique experience',
                      animation: 'fade-up',
                      description:
                        'Improve clinician and provider productivity, patient engagement, quality of care, and overall user experience with EveryThink\u2019s software as a service AI intuitive low-code platform.'
                    }
                  ]);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || S)(u.Lb(T.c));
            }),
            (S.ɵcmp = u.Fb({
              type: S,
              selectors: [['dc-corporate-do-business']],
              decls: 22,
              vars: 7,
              consts: [
                [
                  1,
                  'section',
                  'bg-light',
                  'bg-light-gradient',
                  'edge',
                  'bottom-right'
                ],
                [1, 'container', 'bring-to-front'],
                [1, 'section-heading', 'text-center'],
                [
                  1,
                  'rounded-pill',
                  'py-2',
                  'px-4',
                  'bold',
                  'badge',
                  'badge-info'
                ],
                [1, 'row', 'gap-y'],
                ['class', 'col-md-6', 4, 'ngFor', 'ngForOf'],
                [1, 'col-md-6'],
                [
                  1,
                  'rounded',
                  'bg-contrast',
                  'shadow-box',
                  'image-background',
                  'off-left-background',
                  'p-1',
                  'pl-12',
                  'pl-md-12'
                ],
                [1, 'text-secondary', 'mb-0']
              ],
              template: function(n, e) {
                1 & n &&
                  (u.Qb(0, 'section', 0),
                  u.Fc(1, '\n  '),
                  u.Qb(2, 'div', 1),
                  u.Fc(3, '\n    '),
                  u.Qb(4, 'div', 2),
                  u.Fc(5, '\n      '),
                  u.Qb(6, 'p', 3),
                  u.Fc(7),
                  u.gc(8, 'translate'),
                  u.Pb(),
                  u.Fc(9, '\n      '),
                  u.Qb(10, 'h2'),
                  u.Fc(11),
                  u.gc(12, 'translate'),
                  u.Pb(),
                  u.Fc(13, '\n    '),
                  u.Pb(),
                  u.Fc(14, '\n\n    '),
                  u.Qb(15, 'div', 4),
                  u.Fc(16, '\n      '),
                  u.Dc(17, I, 11, 4, 'div', 5),
                  u.Fc(18, '\n    '),
                  u.Pb(),
                  u.Fc(19, '\n  '),
                  u.Pb(),
                  u.Fc(20, '\n'),
                  u.Pb(),
                  u.Fc(21, '\n')),
                  2 & n &&
                    (u.xb(7),
                    u.Hc(
                      '\n        ',
                      u.hc(
                        8,
                        3,
                        'DEMOS.HEALTH.CORPORATE.BUSINESS.LETS_DO_BUSINESS'
                      ),
                      '\n      '
                    ),
                    u.xb(4),
                    u.Hc(
                      '\n        ',
                      u.hc(
                        12,
                        5,
                        'DEMOS.HEALTH.CORPORATE.BUSINESS.WHAT_EVERYTHINK_OFFERS'
                      ),
                      '\n      '
                    ),
                    u.xb(6),
                    u.kc('ngForOf', e.cards));
              },
              directives: [A.j],
              pipes: [T.b],
              styles: ['']
            })),
            S),
          x = a('akeW'),
          L =
            (((P = (function() {
              function e(t) {
                n(this, e), (this.translate = t), (this.quoteLeft = F.q);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || P)(u.Lb(T.c));
            }),
            (P.ɵcmp = u.Fb({
              type: P,
              selectors: [['dc-testimonial-simple-text-right']],
              decls: 35,
              vars: 20,
              consts: [
                [1, 'singl-testimonial', 'shadow'],
                [1, 'container-fluid', 'py-0'],
                [
                  1,
                  'row',
                  'align-items-center',
                  'gradient',
                  'gradient-navy-blue',
                  'text-contrast'
                ],
                [1, 'col-md-7', 'image-background', 'cover', 'center-top'],
                [1, 'col-md-3', 'mx-auto', 'py-5', 'py-md-2'],
                [1, 'bold', 'mt-1', 'text-contrast'],
                [3, 'icon'],
                [1, 'bold'],
                [1, 'my-4'],
                [1, 'small', 'text-contrast'],
                [1, 'bold', 'd-block']
              ],
              template: function(n, e) {
                1 & n &&
                  (u.Qb(0, 'section', 0),
                  u.Fc(1, '\n  '),
                  u.Qb(2, 'div', 1),
                  u.Fc(3, '\n    '),
                  u.Qb(4, 'div', 2),
                  u.Fc(5, '\n      '),
                  u.Mb(6, 'div', 3),
                  u.Fc(7, '\n\n      '),
                  u.Qb(8, 'div', 4),
                  u.Fc(9, '\n        '),
                  u.Qb(10, 'blockquote', 5),
                  u.Fc(11, '\n          '),
                  u.Mb(12, 'fa-icon', 6),
                  u.Fc(13),
                  u.gc(14, 'translate'),
                  u.Qb(15, 'span', 7),
                  u.Fc(16),
                  u.gc(17, 'translate'),
                  u.Pb(),
                  u.Fc(18),
                  u.gc(19, 'translate'),
                  u.Pb(),
                  u.Fc(20, '\n\n        '),
                  u.Mb(21, 'hr', 8),
                  u.Fc(22, '\n        '),
                  u.Qb(23, 'div', 9),
                  u.Fc(24, '\n          '),
                  u.Qb(25, 'span', 10),
                  u.Fc(26),
                  u.gc(27, 'translate'),
                  u.Pb(),
                  u.Fc(28),
                  u.gc(29, 'translate'),
                  u.Pb(),
                  u.Fc(30, '\n      '),
                  u.Pb(),
                  u.Fc(31, '\n    '),
                  u.Pb(),
                  u.Fc(32, '\n  '),
                  u.Pb(),
                  u.Fc(33, '\n'),
                  u.Pb(),
                  u.Fc(34, '\n')),
                  2 & n &&
                    (u.xb(6),
                    u.Cc(
                      'background-image',
                      'url(assets/img/testimonials/2.jpg)'
                    ),
                    u.xb(6),
                    u.zb('quote'),
                    u.kc('icon', e.quoteLeft),
                    u.xb(1),
                    u.Hc(
                      '\n          ',
                      u.hc(
                        14,
                        10,
                        'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_RIGHT.IF_YOU_ARE_STRUGGLING'
                      ),
                      '\n          '
                    ),
                    u.xb(3),
                    u.Hc(
                      '\n            ',
                      u.hc(
                        17,
                        12,
                        'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_RIGHT.EVERYTHINK'
                      ),
                      ''
                    ),
                    u.xb(2),
                    u.Hc(
                      '\n          ',
                      u.hc(
                        19,
                        14,
                        'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_RIGHT.IS_THE_PERFECT_TOOL'
                      ),
                      '\n        '
                    ),
                    u.xb(8),
                    u.Gc(
                      u.hc(
                        27,
                        16,
                        'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_RIGHT.CARO_FOGLIATO'
                      )
                    ),
                    u.xb(2),
                    u.Hc(
                      '\n          ',
                      u.hc(
                        29,
                        18,
                        'TESTIMONIALS.TESTIMONIAL_SIMPLE_TEXT_RIGHT.CEOANDFOUNDER'
                      ),
                      '\n        '
                    ));
              },
              directives: [h.a],
              pipes: [T.b],
              styles: ['']
            })),
            P),
          w = a('ZuuT'),
          k = a('iLZQ'),
          Q = [
            {
              path: '',
              component:
                ((M = (function() {
                  function e(t) {
                    n(this, e), (this.i18nService = t), this.updateSeoTags();
                  }
                  return (
                    t(e, [
                      {
                        key: 'ngOnInit',
                        value: function() {
                          this.updateSeoTags();
                        }
                      },
                      {
                        key: 'updateSeoTags',
                        value: function() {
                          this.i18nService.updateSeoTags(
                            'DEMOS.HEALTH.NETWORK_SEARCH_META.TITLE',
                            'DEMOS.HEALTH.NETWORK_SEARCH_META.KEYWORDS'
                          );
                        }
                      }
                    ]),
                    e
                  );
                })()),
                (M.ɵfac = function(n) {
                  return new (n || M)(u.Lb(E.a));
                }),
                (M.ɵcmp = u.Fb({
                  type: M,
                  selectors: [['dc-corporate']],
                  decls: 51,
                  vars: 19,
                  consts: [
                    [3, 'img', 'screenPos'],
                    [1, 'lead', 'text-secondary'],
                    ['href', '#', 1, 'btn', 'btn-info', 'btn-rounded', 'mt-2']
                  ],
                  template: function(n, e) {
                    1 & n &&
                      (u.Mb(0, 'dc-corporate-heading'),
                      u.Fc(1, '\n'),
                      u.Mb(2, 'dc-slider-icons'),
                      u.Fc(3, '\n\n'),
                      u.Mb(4, 'dc-features-icons-col'),
                      u.Fc(5, '\n'),
                      u.Mb(6, 'dc-slider-start-right-way'),
                      u.Fc(7, '\n'),
                      u.Mb(8, 'dc-testimonial-simple-text-left'),
                      u.Fc(9, '\n'),
                      u.Mb(10, 'dc-corporate-do-business'),
                      u.Fc(11, '\n'),
                      u.Qb(12, 'dc-big-screen', 0),
                      u.Fc(13, '\n  '),
                      u.Qb(14, 'h2'),
                      u.Fc(15),
                      u.gc(16, 'translate'),
                      u.Pb(),
                      u.Fc(17, '\n  '),
                      u.Qb(18, 'p', 1),
                      u.Fc(19),
                      u.gc(20, 'translate'),
                      u.Pb(),
                      u.Fc(21, '\n  '),
                      u.Mb(22, 'p'),
                      u.Fc(23, '\n  '),
                      u.Qb(24, 'a', 2),
                      u.Fc(25, 'Learn More'),
                      u.Pb(),
                      u.Fc(26, '\n'),
                      u.Pb(),
                      u.Fc(27, '\n'),
                      u.Qb(28, 'dc-big-screen', 0),
                      u.Fc(29, '\n  '),
                      u.Qb(30, 'h2'),
                      u.Fc(31),
                      u.gc(32, 'translate'),
                      u.Pb(),
                      u.Fc(33, '\n  '),
                      u.Qb(34, 'p', 1),
                      u.Fc(35),
                      u.gc(36, 'translate'),
                      u.Pb(),
                      u.Fc(37, '\n  '),
                      u.Mb(38, 'p'),
                      u.Fc(39, '\n  '),
                      u.Qb(40, 'a', 2),
                      u.Fc(41),
                      u.gc(42, 'translate'),
                      u.Pb(),
                      u.Fc(43, '\n'),
                      u.Pb(),
                      u.Fc(44, '\n'),
                      u.Mb(45, 'dc-testimonial-simple-text-right'),
                      u.Fc(46, '\n'),
                      u.Mb(47, 'dc-faqs1'),
                      u.Fc(48, '\n'),
                      u.Mb(49, 'dc-footer2'),
                      u.Fc(50, '\n')),
                      2 & n &&
                        (u.xb(12),
                        u.kc(
                          'img',
                          'assets/images/corporate/screens/dash/2.png'
                        )('screenPos', 'left'),
                        u.xb(3),
                        u.Hc(
                          '\n    ',
                          u.hc(16, 9, 'DEMOS.HEALTH.CORPORATE.DID_YOU_KNOW'),
                          '\n  '
                        ),
                        u.xb(4),
                        u.Hc(
                          '\n    ',
                          u.hc(
                            20,
                            11,
                            'DEMOS.HEALTH.CORPORATE.80_OF_THE_CASE_ARISE'
                          ),
                          '\n  '
                        ),
                        u.xb(9),
                        u.kc(
                          'img',
                          'assets/images/corporate/screens/dash/1.png'
                        )('screenPos', 'right'),
                        u.xb(3),
                        u.Hc(
                          '\n    ',
                          u.hc(
                            32,
                            13,
                            'DEMOS.HEALTH.CORPORATE.EVERYTHINK_MAKE_TREATMENT_MORE'
                          ),
                          '\n  '
                        ),
                        u.xb(4),
                        u.Hc(
                          '\n    ',
                          u.hc(
                            36,
                            15,
                            'DEMOS.HEALTH.CORPORATE.EVERYTHINK_IS_THE_SOLUTION'
                          ),
                          '\n  '
                        ),
                        u.xb(6),
                        u.Gc(
                          u.hc(42, 17, 'DEMOS.HEALTH.CORPORATE.LEARN_MORE')
                        ));
                  },
                  directives: [f, m.a, O.a, H.a, v.a, _, x.a, L, w.a, k.a],
                  pipes: [T.b],
                  styles: ['']
                })),
                M),
              data: { title: Object(E.c)('EveryThink Health') }
            }
          ],
          N =
            (((y = function e() {
              n(this, e);
            }).ɵmod = u.Jb({ type: y })),
            (y.ɵinj = u.Ib({
              factory: function(n) {
                return new (n || y)();
              },
              imports: [[g.g.forChild(Q)], g.g]
            })),
            y),
          D =
            (((R = function e() {
              n(this, e);
            }).ɵmod = u.Jb({ type: R })),
            (R.ɵinj = u.Ib({
              factory: function(n) {
                return new (n || R)();
              },
              imports: [[r.a, o.a, s.a, b.a, l.a, d.a, p.a, N, T.a.forChild()]]
            })),
            R);
      }
    }
  ]);
})();
