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
    [19],
    {
      '/jaR': function(e, c, i) {
        'use strict';
        i.r(c),
          i.d(c, 'OnlinePaymentModule', function() {
            return V;
          });
        var a,
          s = i('M0ag'),
          o = i('ORAR'),
          r = i('pu65'),
          b = i('M0Rk'),
          l = i('8klf'),
          d = i('XMwz'),
          p = i('tyNb'),
          u = i('ey9i'),
          F = i('fXoL'),
          m = i('wHSu'),
          g = i('sYmb'),
          f = i('6NWb'),
          h = function() {
            return ['/pricing'];
          },
          v =
            (((a = (function() {
              function e(t) {
                n(this, e), (this.translate = t), (this.tag = m.t);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || a)(F.Lb(g.c));
            }),
            (a.ɵcmp = F.Fb({
              type: a,
              selectors: [['dc-online-payment-heading']],
              decls: 51,
              vars: 18,
              consts: [
                [
                  1,
                  'header',
                  'page',
                  'online-payment-header',
                  'section',
                  'text-contrast'
                ],
                ['id', 'stripes'],
                [1, 'container', 'overflow-hidden', 'bring-to-front'],
                [1, 'row'],
                [1, 'col-md-6'],
                [1, 'text-contrast', 'bold'],
                [1, 'd-block', 'light'],
                [1, 'lead'],
                [1, 'nav', 'mt-5'],
                [
                  1,
                  'nav-link',
                  'mr-3',
                  'btn',
                  'btn',
                  'btn-rounded',
                  'btn-contrast',
                  3,
                  'routerLink'
                ],
                [1, 'mr-3', 3, 'icon'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'nav-link',
                  'btn',
                  'btn-rounded',
                  'btn-success'
                ],
                [
                  'src',
                  'assets/images/online-payment/bg/online-payment.svg',
                  'alt',
                  '',
                  1,
                  'img-hero',
                  'img-responsive',
                  'absolute-md'
                ]
              ],
              template: function(n, e) {
                1 & n &&
                  (F.Qb(0, 'header', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'div', 1),
                  F.Fc(3, '\n    '),
                  F.Mb(4, 'span'),
                  F.Mb(5, 'span'),
                  F.Mb(6, 'span'),
                  F.Mb(7, 'span'),
                  F.Mb(8, 'span'),
                  F.Fc(9, '\n  '),
                  F.Pb(),
                  F.Fc(10, '\n\n  '),
                  F.Qb(11, 'div', 2),
                  F.Fc(12, '\n    '),
                  F.Qb(13, 'div', 3),
                  F.Fc(14, '\n      '),
                  F.Qb(15, 'div', 4),
                  F.Fc(16, '\n        '),
                  F.Qb(17, 'h1', 5),
                  F.Fc(18),
                  F.gc(19, 'translate'),
                  F.Qb(20, 'span', 6),
                  F.Fc(21),
                  F.gc(22, 'translate'),
                  F.Pb(),
                  F.Fc(23, '\n        '),
                  F.Pb(),
                  F.Fc(24, '\n        '),
                  F.Qb(25, 'p', 7),
                  F.Fc(26),
                  F.gc(27, 'translate'),
                  F.Pb(),
                  F.Fc(28, '\n\n        '),
                  F.Qb(29, 'nav', 8),
                  F.Fc(30, '\n          '),
                  F.Qb(31, 'a', 9),
                  F.Fc(32, '\n            '),
                  F.Mb(33, 'fa-icon', 10),
                  F.Fc(34),
                  F.gc(35, 'translate'),
                  F.Pb(),
                  F.Fc(36, '\n\n          '),
                  F.Qb(37, 'a', 11),
                  F.Fc(38),
                  F.gc(39, 'translate'),
                  F.Pb(),
                  F.Fc(40, '\n        '),
                  F.Pb(),
                  F.Fc(41, '\n      '),
                  F.Pb(),
                  F.Fc(42, '\n\n      '),
                  F.Qb(43, 'div', 4),
                  F.Fc(44, '\n        '),
                  F.Mb(45, 'img', 12),
                  F.Fc(46, '\n      '),
                  F.Pb(),
                  F.Fc(47, '\n    '),
                  F.Pb(),
                  F.Fc(48, '\n  '),
                  F.Pb(),
                  F.Fc(49, '\n'),
                  F.Pb(),
                  F.Fc(50, '\n')),
                  2 & n &&
                    (F.xb(18),
                    F.Hc(
                      '\n          ',
                      F.hc(
                        19,
                        7,
                        'DEMOS.RPACREAORS.ONLINE_PAYMENT.HEADING.GO_BIG'
                      ),
                      '\n          '
                    ),
                    F.xb(3),
                    F.Gc(
                      F.hc(
                        22,
                        9,
                        'DEMOS.RPACREAORS.ONLINE_PAYMENT.HEADING.CREATE_BUY'
                      )
                    ),
                    F.xb(5),
                    F.Hc(
                      '\n          -\n          ',
                      F.hc(
                        27,
                        11,
                        'DEMOS.RPACREAORS.ONLINE_PAYMENT.HEADING.WITHOUT_CODING'
                      ),
                      '\n        '
                    ),
                    F.xb(5),
                    F.kc('routerLink', F.nc(17, h)),
                    F.xb(2),
                    F.kc('icon', e.tag),
                    F.xb(1),
                    F.Hc(
                      '\n            ',
                      F.hc(
                        35,
                        13,
                        'DEMOS.RPACREAORS.ONLINE_PAYMENT.HEADING.KNOW_MORE'
                      ),
                      '\n          '
                    ),
                    F.xb(4),
                    F.Hc(
                      '\n            ',
                      F.hc(
                        39,
                        15,
                        'DEMOS.RPACREAORS.ONLINE_PAYMENT.HEADING.START_NOW'
                      ),
                      '\n          '
                    ));
              },
              directives: [p.f, f.a],
              pipes: [g.b],
              styles: ['']
            })),
            a),
          y = i('ofXK'),
          E = i('AL06');
        function P(n, e) {
          if (
            (1 & n &&
              (F.Qb(0, 'div', 6),
              F.Fc(1, '\n        '),
              F.Qb(2, 'div', 7),
              F.Fc(3, '\n          '),
              F.ec(),
              F.Qb(4, 'svg', 8),
              F.Fc(5, '\n            '),
              F.Qb(6, 'defs'),
              F.Fc(7, '\n              '),
              F.Qb(8, 'style'),
              F.Fc(
                9,
                '\n                .cls-1 {\n                  fill: #53f;\n                }\n              '
              ),
              F.Pb(),
              F.Fc(10, '\n            '),
              F.Pb(),
              F.Fc(11, '\n            '),
              F.Qb(12, 'g', 9),
              F.Fc(13, '\n              '),
              F.Qb(14, 'g', 10),
              F.Fc(15, '\n                '),
              F.Mb(16, 'path', 11),
              F.Fc(17, '\n              '),
              F.Pb(),
              F.Fc(18, '\n            '),
              F.Pb(),
              F.Fc(19, '\n          '),
              F.Pb(),
              F.Fc(20, '\n          '),
              F.dc(),
              F.Mb(21, 'dc-feather', 12),
              F.Fc(22, '\n        '),
              F.Pb(),
              F.Fc(23, '\n\n        '),
              F.Qb(24, 'h5', 13),
              F.Fc(25),
              F.Pb(),
              F.Fc(26, '\n        '),
              F.Qb(27, 'p'),
              F.Fc(28),
              F.Pb(),
              F.Fc(29, '\n      '),
              F.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            F.xb(21),
              F.zb('icon center-xy'),
              F.kc('name', t.icon)('iconClass', 'stroke-contrast'),
              F.xb(4),
              F.Gc(t.title),
              F.xb(3),
              F.Hc('\n          ', t.description, '\n        ');
          }
        }
        var x,
          M =
            (((x = (function() {
              function e(t) {
                n(this, e),
                  (this.translate = t),
                  (this.elements = [
                    {
                      icon: 'credit-card',
                      title: 'Create',
                      description:
                        'Everythink Studio allows you to develop automation processes quickly and smoothly. No technical, programming or scripting skills required.'
                    },
                    {
                      icon: 'pie-chart',
                      title: 'Buy',
                      description:
                        'Find a wide variety of automated processes created by 3rd party developers and certified by EveryThink. Find the process you need, see how it works, purchase it and implement it in your business in real-time. Not waste your time with outdated technologies anymore!'
                    },
                    {
                      icon: 'book',
                      title: 'Sell',
                      description:
                        'Market the automation processes created by you! Helps automate more and more processes and interactions; and also get your reward!'
                    }
                  ]);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || x)(F.Lb(g.c));
            }),
            (x.ɵcmp = F.Fb({
              type: x,
              selectors: [['dc-online-payment-features']],
              decls: 22,
              vars: 7,
              consts: [
                [
                  'id',
                  'features',
                  1,
                  'section',
                  'bg-contrast',
                  'edge',
                  'top-left'
                ],
                [1, 'container'],
                [1, 'section-heading', 'mb-6', 'text-center'],
                [1, 'text-primary', 'bold', 'small', 'text-uppercase'],
                [1, 'row', 'gap-y', 'text-center', 'text-md-left'],
                [
                  'class',
                  'col-md-4 py-4 rounded shadow-hover text-center',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [
                  1,
                  'col-md-4',
                  'py-4',
                  'rounded',
                  'shadow-hover',
                  'text-center'
                ],
                [1, 'icon-shape', 'mb-4'],
                [
                  'xmlns',
                  'http://www.w3.org/2000/svg',
                  0,
                  'xmlns',
                  'xlink',
                  'http://www.w3.org/1999/xlink',
                  'viewBox',
                  '0 0 276.1 281.01',
                  1,
                  'shape',
                  'shape-xxl',
                  'drop-shadow'
                ],
                ['id', 'layer_2', 'data-name', 'layer 2'],
                ['id', 'OBJECTS'],
                [
                  'd',
                  'M261.95,86.82a83.45,83.45,0,0,0-8.57-10.71l0,0s-50.84-57.89-137-73.9l0,0A92.94,92.94,0,0,0,5,77.21c-17.58,85.56,16.63,154.31,16.83,154.72a83.17,83.17,0,0,0,6.67,11.93c21.11,31.38,60.18,43.83,96.07,33.7,0,0,58.12-14.28,123.33-79h0C278.76,169,285.58,121.95,261.95,86.82Z',
                  1,
                  'cls-1'
                ],
                [3, 'name', 'iconClass'],
                [1, 'bold', 'text-capitalize']
              ],
              template: function(n, e) {
                1 & n &&
                  (F.Qb(0, 'section', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'div', 1),
                  F.Fc(3, '\n    '),
                  F.Qb(4, 'div', 2),
                  F.Fc(5, '\n      '),
                  F.Qb(6, 'h5', 3),
                  F.Fc(7),
                  F.gc(8, 'translate'),
                  F.Pb(),
                  F.Fc(9, '\n      '),
                  F.Qb(10, 'h2'),
                  F.Fc(11),
                  F.gc(12, 'translate'),
                  F.Pb(),
                  F.Fc(13, '\n    '),
                  F.Pb(),
                  F.Fc(14, '\n\n    '),
                  F.Qb(15, 'div', 4),
                  F.Fc(16, '\n      '),
                  F.Dc(17, P, 30, 6, 'div', 5),
                  F.Fc(18, '\n    '),
                  F.Pb(),
                  F.Fc(19, '\n  '),
                  F.Pb(),
                  F.Fc(20, '\n'),
                  F.Pb(),
                  F.Fc(21, '\n')),
                  2 & n &&
                    (F.xb(7),
                    F.Hc(
                      '\n        ',
                      F.hc(
                        8,
                        3,
                        'DEMOS.RPACREAORS.ONLINE_PAYMENT.FEATURES.REASONS_TO_USE_EVERYTHINK'
                      ),
                      '\n      '
                    ),
                    F.xb(4),
                    F.Hc(
                      '\n        ',
                      F.hc(
                        12,
                        5,
                        'DEMOS.RPACREAORS.ONLINE_PAYMENT.FEATURES.KNOW_WHAT_YOU_CAN_DO_WITH_US'
                      ),
                      '\n      '
                    ),
                    F.xb(6),
                    F.kc('ngForOf', e.elements));
              },
              directives: [y.j, E.a],
              pipes: [g.b],
              styles: ['']
            })),
            x);
        function O(n, e) {
          1 & n && F.Mb(0, 'img', 20);
        }
        function w(n, e) {
          if (
            (1 & n &&
              (F.Qb(0, 'div', 6),
              F.Fc(1, '\n      '),
              F.Qb(2, 'div', 7),
              F.Fc(3, '\n        '),
              F.Qb(4, 'figure'),
              F.Fc(5, '\n          '),
              F.Mb(6, 'img', 8),
              F.Fc(7, '\n\n          '),
              F.Dc(8, O, 1, 0, 'img', 9),
              F.Fc(9, '\n        '),
              F.Pb(),
              F.Fc(10, '\n      '),
              F.Pb(),
              F.Fc(11, '\n\n      '),
              F.Qb(12, 'div', 7),
              F.Fc(13, '\n        '),
              F.Qb(14, 'div', 10),
              F.Fc(15, '\n          '),
              F.Qb(16, 'div', 11),
              F.Fc(17, '\n            '),
              F.ec(),
              F.Qb(18, 'svg', 12),
              F.Fc(19, '\n              '),
              F.Qb(20, 'defs'),
              F.Fc(21, '\n                '),
              F.Qb(22, 'style'),
              F.Fc(
                23,
                '\n                  .cls-shape {\n                    fill: #1fa2ff;\n                  }\n                '
              ),
              F.Pb(),
              F.Fc(24, '\n              '),
              F.Pb(),
              F.Fc(25, '\n              '),
              F.Qb(26, 'title'),
              F.Fc(27, 'shape-4'),
              F.Pb(),
              F.Fc(28, '\n              '),
              F.Qb(29, 'g', 13),
              F.Fc(30, '\n                '),
              F.Qb(31, 'g', 14),
              F.Fc(32, '\n                  '),
              F.Mb(33, 'path', 15),
              F.Fc(34, '\n                '),
              F.Pb(),
              F.Fc(35, '\n              '),
              F.Pb(),
              F.Fc(36, '\n            '),
              F.Pb(),
              F.Fc(37, '\n\n            '),
              F.dc(),
              F.Mb(38, 'fa-icon', 16),
              F.Fc(39, '\n          '),
              F.Pb(),
              F.Fc(40, '\n        '),
              F.Pb(),
              F.Fc(41, '\n\n        '),
              F.Qb(42, 'h2', 17),
              F.Fc(43),
              F.Pb(),
              F.Fc(44, '\n        '),
              F.Qb(45, 'p', 18),
              F.Fc(46),
              F.Pb(),
              F.Fc(47, '\n        '),
              F.Qb(48, 'a', 19),
              F.Fc(49),
              F.Pb(),
              F.Fc(50, '\n      '),
              F.Pb(),
              F.Fc(51, '\n    '),
              F.Pb()),
            2 & n)
          ) {
            var t = e.$implicit,
              c = e.index;
            F.xb(2),
              F.Db('order-md-2', (c + 1) % 2 == 0),
              F.xb(2),
              F.yb('data-aos', (c + 1) % 2 == 0 ? 'fade-left' : 'fade-right'),
              F.xb(2),
              F.Ab('img-responsive ', t.image.class, ''),
              F.mc(
                'src',
                'assets/images/online-payment/shps/payments/',
                t.image.name,
                '.svg',
                F.yc
              ),
              F.xb(2),
              F.kc('ngIf', 0 === c),
              F.xb(30),
              F.kc('icon', t.icon),
              F.xb(5),
              F.Gc(t.title),
              F.xb(3),
              F.Hc('\n          ', t.description, '\n        '),
              F.xb(3),
              F.Gc(t.button.text);
          }
        }
        var A,
          S,
          Q,
          T =
            (((S = (function() {
              function e(t) {
                n(this, e),
                  (this.translate = t),
                  (this.steps = [
                    {
                      icon: m.u,
                      image: { name: 'register', class: 'w-50' },
                      title: 'Build fast. Build more.',
                      description:
                        'Using EveryThink Studio\u2019s unique software for fast and fluid automated process development, you can build the automated process you need in days. No scripting, programming, or technical skills required.',
                      button: { text: 'Sign Up Free' }
                    },
                    {
                      icon: m.x,
                      image: { name: 'configure' },
                      title: 'Grow fast. Grow big.',
                      description:
                        'With EveryThink Studio\u2019s easy-to-use interface, anyone can create automated process in a matter of minutes, without writing a single line of code.',
                      button: { text: 'Learn More' }
                    },
                    {
                      icon: m.w,
                      image: { name: 'receive' },
                      title: 'Automate more processes in real time',
                      description:
                        'EveryThink does ALL OF THE HEAVY LIFTING so you can focus on more valuable and complex tasks.',
                      button: { text: 'Learn More' }
                    }
                  ]);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || S)(F.Lb(g.c));
            }),
            (S.ɵcmp = F.Fb({
              type: S,
              selectors: [['dc-online-payment-steps']],
              decls: 15,
              vars: 1,
              consts: [
                [1, 'section'],
                [1, 'shape-wrapper'],
                [1, 'shape', 'shape-background', 'shape-right'],
                [
                  1,
                  'shape',
                  'shape-background',
                  'top',
                  'shape-left',
                  'bg-info',
                  'op-1'
                ],
                [1, 'container', 'pb-9'],
                [
                  'class',
                  'row gap-y align-items-center py-5',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [1, 'row', 'gap-y', 'align-items-center', 'py-5'],
                [1, 'col-md-6'],
                ['alt', '', 3, 'src'],
                [
                  'src',
                  'assets/images/online-payment/shps/payments/register-click.svg',
                  'class',
                  'img-responsive absolute w-50',
                  'alt',
                  '',
                  'style',
                  'bottom: 10%; left: 125px;',
                  'data-aos',
                  'fade-up',
                  4,
                  'ngIf'
                ],
                [1, 'icon-xxl', 'mb-4'],
                [1, 'icon-shape'],
                [
                  'xmlns',
                  'http://www.w3.org/2000/svg',
                  'viewBox',
                  '0 0 219.98 213.35',
                  1,
                  'shape',
                  'shape-xxl',
                  'drop-shadow'
                ],
                ['id', 'layer_1', 'data-name', 'layer_1'],
                ['id', 'OBJECTS'],
                [
                  'd',
                  'M92.2.36c58.51-4,85.65,25.71,100.68,65.52s37.29,53.51,21.92,99.33-70.9,51.88-92.59,46.52S78,192.49,51,182.07C10.79,166.56.86,146.16.06,126.06-1.07,97.63,13.92,94.45,18.73,63.28,24.51,25.93,46.43,3.47,92.2.36Z',
                  1,
                  'cls-shape'
                ],
                [
                  'size',
                  '2x',
                  1,
                  'icon',
                  'center-xy',
                  'text-contrast',
                  3,
                  'icon'
                ],
                [1, 'bold', 'text-capitalize'],
                [1, 'regular'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'btn',
                  'gradient',
                  'gradient-purple-blue',
                  'text-contrast',
                  'btn-rounded',
                  'btn-outline-contrast',
                  'bw-2',
                  'bold',
                  'mt-4'
                ],
                [
                  'src',
                  'assets/images/online-payment/shps/payments/register-click.svg',
                  'alt',
                  '',
                  'data-aos',
                  'fade-up',
                  1,
                  'img-responsive',
                  'absolute',
                  'w-50',
                  2,
                  'bottom',
                  '10%',
                  'left',
                  '125px'
                ]
              ],
              template: function(n, e) {
                1 & n &&
                  (F.Qb(0, 'section', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'div', 1),
                  F.Fc(3, '\n    '),
                  F.Mb(4, 'div', 2),
                  F.Fc(5, '\n    '),
                  F.Mb(6, 'div', 3),
                  F.Fc(7, '\n  '),
                  F.Pb(),
                  F.Fc(8, '\n\n  '),
                  F.Qb(9, 'div', 4),
                  F.Fc(10, '\n    '),
                  F.Dc(11, w, 52, 12, 'div', 5),
                  F.Fc(12, '\n  '),
                  F.Pb(),
                  F.Fc(13, '\n'),
                  F.Pb(),
                  F.Fc(14, '\n')),
                  2 & n && (F.xb(11), F.kc('ngForOf', e.steps));
              },
              directives: [y.j, y.k, f.a],
              styles: ['']
            })),
            S),
          R =
            (((A = (function() {
              function e(t) {
                n(this, e), (this.translate = t);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || A)(F.Lb(g.c));
            }),
            (A.ɵcmp = F.Fb({
              type: A,
              selectors: [['dc-online-payment-customers-management']],
              decls: 39,
              vars: 15,
              consts: [
                [1, 'section'],
                [1, 'container', 'pt-5'],
                [1, 'section-heading', 'text-center'],
                [1, 'bold'],
                [1, 'lead', 'text-secondary'],
                [1, 'centered-screen'],
                [
                  'data-aos',
                  'fade-up',
                  'data-aos-delay',
                  '500',
                  1,
                  'absolute-md',
                  'right',
                  'message',
                  'text-center',
                  'text-md-left'
                ],
                [
                  1,
                  'bg-primary',
                  'p-3',
                  'm-0',
                  'text-contrast',
                  'arrow',
                  'bottom',
                  'small',
                  'rounded'
                ],
                [1, 'px-5', 'mt-5', 'mt-md-0'],
                [
                  'src',
                  'assets/images/online-payment/screens/payments/customer-list.png',
                  'alt',
                  '',
                  1,
                  'shadow-lg',
                  'rounded',
                  'img-responsive',
                  'mx-auto',
                  'op-7'
                ],
                [
                  'src',
                  'assets/images/online-payment/screens/payments/highlight.png',
                  'alt',
                  '',
                  'data-aos',
                  'zoom-in',
                  1,
                  'absolute',
                  'shadow-lg',
                  'rounded',
                  'img-responsive',
                  'screen-highlight'
                ]
              ],
              template: function(n, e) {
                1 & n &&
                  (F.Qb(0, 'section', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'div', 1),
                  F.Fc(3, '\n    '),
                  F.Qb(4, 'div', 2),
                  F.Fc(5, '\n      '),
                  F.Qb(6, 'h2', 3),
                  F.Fc(7),
                  F.gc(8, 'translate'),
                  F.Qb(9, 'span', 3),
                  F.Fc(10),
                  F.gc(11, 'translate'),
                  F.Pb(),
                  F.Fc(12),
                  F.gc(13, 'translate'),
                  F.Pb(),
                  F.Fc(14, '\n      '),
                  F.Qb(15, 'p', 4),
                  F.Fc(16),
                  F.gc(17, 'translate'),
                  F.Pb(),
                  F.Fc(18, '\n    '),
                  F.Pb(),
                  F.Fc(19, '\n\n    '),
                  F.Qb(20, 'div', 5),
                  F.Fc(21, '\n      '),
                  F.Qb(22, 'div', 6),
                  F.Fc(23, '\n        '),
                  F.Qb(24, 'span', 7),
                  F.Fc(25),
                  F.gc(26, 'translate'),
                  F.Pb(),
                  F.Fc(27, '\n      '),
                  F.Pb(),
                  F.Fc(28, '\n\n      '),
                  F.Qb(29, 'div', 8),
                  F.Fc(30, '\n        '),
                  F.Mb(31, 'img', 9),
                  F.Fc(32, '\n      '),
                  F.Pb(),
                  F.Fc(33, '\n\n      '),
                  F.Mb(34, 'img', 10),
                  F.Fc(35, '\n    '),
                  F.Pb(),
                  F.Fc(36, '\n  '),
                  F.Pb(),
                  F.Fc(37, '\n'),
                  F.Pb(),
                  F.Fc(38, '\n')),
                  2 & n &&
                    (F.xb(7),
                    F.Hc(
                      '\n        ',
                      F.hc(
                        8,
                        5,
                        'DEMOS.RPACREAORS.ONLINE_PAYMENT.CUSTOMERS_MANAGEMENT.CREATE_SMART'
                      ),
                      '\n        '
                    ),
                    F.xb(3),
                    F.Hc(
                      '\n          ',
                      F.hc(
                        11,
                        7,
                        'DEMOS.RPACREAORS.ONLINE_PAYMENT.CUSTOMERS_MANAGEMENT.EXERIENCES_WITH'
                      ),
                      '\n        '
                    ),
                    F.xb(2),
                    F.Hc(
                      '\n        ',
                      F.hc(
                        13,
                        9,
                        'DEMOS.RPACREAORS.ONLINE_PAYMENT.CUSTOMERS_MANAGEMENT.EVERYTHINK'
                      ),
                      '\n      '
                    ),
                    F.xb(4),
                    F.Hc(
                      '\n        ',
                      F.hc(
                        17,
                        11,
                        'DEMOS.RPACREAORS.ONLINE_PAYMENT.CUSTOMERS_MANAGEMENT.SIMPLE_IMPLEMENTATION'
                      ),
                      '\n      '
                    ),
                    F.xb(9),
                    F.Hc(
                      '\n          ',
                      F.hc(
                        26,
                        13,
                        'DEMOS.RPACREAORS.ONLINE_PAYMENT.CUSTOMERS_MANAGEMENT.CUSTOMERSADMINISTRATION'
                      ),
                      ''
                    ));
              },
              pipes: [g.b],
              styles: ['']
            })),
            A),
          N = i('cqDB'),
          k =
            (((Q = (function() {
              function e() {
                n(this, e);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || Q)();
            }),
            (Q.ɵcmp = F.Fb({
              type: Q,
              selectors: [['dc-online-payment-register']],
              decls: 14,
              vars: 0,
              consts: [
                [1, 'section', 'overflow-hidden'],
                [1, 'container', 'pt-4', 'bring-to-front'],
                [1, 'row'],
                [1, 'col-md-10', 'mx-md-auto']
              ],
              template: function(n, e) {
                1 & n &&
                  (F.Qb(0, 'section', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'div', 1),
                  F.Fc(3, '\n    '),
                  F.Qb(4, 'div', 2),
                  F.Fc(5, '\n      '),
                  F.Qb(6, 'div', 3),
                  F.Fc(7, '\n        '),
                  F.Mb(8, 'dc-form-register-simple-inline'),
                  F.Fc(9, '\n      '),
                  F.Pb(),
                  F.Fc(10, '\n    '),
                  F.Pb(),
                  F.Fc(11, '\n  '),
                  F.Pb(),
                  F.Fc(12, '\n'),
                  F.Pb(),
                  F.Fc(13, '\n'));
              },
              directives: [N.a],
              styles: ['']
            })),
            Q),
          I = i('nhfI'),
          _ = function(n, e) {
            return { left: n, top: e };
          };
        function C(n, e) {
          if (1 & n) {
            var t = F.Rb();
            F.Qb(0, 'a', 19),
              F.bc('click', function() {
                F.vc(t);
                var n = e.index;
                return F.fc().updateSlider(n);
              }),
              F.Fc(1, '\n              '),
              F.Qb(2, 'div', 20),
              F.Fc(3, '\n                '),
              F.Mb(4, 'img', 21),
              F.Fc(5, '\n              '),
              F.Pb(),
              F.Fc(6, '\n            '),
              F.Pb();
          }
          if (2 & n) {
            var c = e.$implicit,
              i = e.index,
              a = F.fc();
            F.Db('active', i === a.currentSlide),
              F.kc('ngStyle', F.pc(5, _, c.position.left, c.position.top)),
              F.yb('data-step', i),
              F.xb(4),
              F.kc('src', 'assets/img/avatar/' + (i + 1) + '.jpg', F.yc);
          }
        }
        function L(n, e) {
          1 & n &&
            (F.Qb(0, 'div', 22),
            F.Fc(1, '\n            '),
            F.Qb(2, 'blockquote'),
            F.Fc(3, '\n              '),
            F.Mb(4, 'i', 23),
            F.Fc(5, '\n              '),
            F.Qb(6, 'p', 24),
            F.Fc(7),
            F.gc(8, 'translate'),
            F.Pb(),
            F.Fc(9, '\n\n              '),
            F.Mb(10, 'hr', 25),
            F.Fc(11, '\n              '),
            F.Qb(12, 'div', 26),
            F.Fc(13, '\n                '),
            F.Qb(14, 'span', 27),
            F.Fc(15),
            F.gc(16, 'translate'),
            F.Pb(),
            F.Fc(17),
            F.gc(18, 'translate'),
            F.Pb(),
            F.Fc(19, '\n            '),
            F.Pb(),
            F.Fc(20, '\n          '),
            F.Pb()),
            2 & n &&
              (F.xb(7),
              F.Hc(
                '\n                ',
                F.hc(
                  8,
                  3,
                  'TESTIMONIALS.TESTIMONIAL_WORLD_MAP.SED_OUT_PERSPICIATIS'
                ),
                '\n              '
              ),
              F.xb(8),
              F.Hc(
                '\n                  ',
                F.hc(16, 5, 'TESTIMONIALS.TESTIMONIAL_WORLD_MAP.JANE_DOE'),
                ''
              ),
              F.xb(2),
              F.Hc(
                '\n                ',
                F.hc(
                  18,
                  7,
                  'TESTIMONIALS.TESTIMONIAL_WORLD_MAP.MARKEYING_DIRECTOR'
                ),
                '\n              '
              ));
        }
        var D,
          H =
            (((D = (function() {
              function e(t) {
                n(this, e),
                  (this.translate = t),
                  (this.reviews = [
                    { position: { left: 'calc(50% - 40px)', top: '75px' } },
                    { position: { left: 0, top: '140px' } },
                    { position: { left: 'calc(100% - 80px)', top: '300px' } },
                    { position: { left: 'calc(100% - 80px)', top: '200px' } },
                    { position: { left: '50%', top: '63%' } },
                    { position: { left: '27%', top: '30%' } },
                    { position: { left: '27%', top: '54%' } }
                  ]),
                  (this.currentSlide = 0);
              }
              return (
                t(e, [
                  { key: 'ngOnInit', value: function() {} },
                  {
                    key: 'updateSlider',
                    value: function(n) {
                      (this.currentSlide = n), console.log('cs', n);
                    }
                  },
                  {
                    key: 'onIndexChange',
                    value: function(n) {
                      this.currentSlide = n;
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function(n) {
              return new (n || D)(F.Lb(g.c));
            }),
            (D.ɵcmp = F.Fb({
              type: D,
              selectors: [['dc-testimonial-world-map']],
              decls: 55,
              vars: 6,
              consts: [
                [
                  1,
                  'section',
                  'shape-testimonials',
                  'edge',
                  'bg-light',
                  'top-left'
                ],
                [1, 'shape-wrapper'],
                [
                  'xmlns',
                  'http://www.w3.org/2000/svg',
                  0,
                  'xmlns',
                  'xlink',
                  'http://www.w3.org/1999/xlink',
                  'viewBox',
                  '0 0 249.28 253.71',
                  1,
                  'shape',
                  'h-100'
                ],
                ['id', 'Capa_2', 'data-name', 'Capa 2'],
                ['id', 'OBJECTS'],
                [
                  'd',
                  'M236.5,78.38a75.26,75.26,0,0,0-7.74-9.67l0,0S182.91,16.47,105.14,2l0,0A83.91,83.91,0,0,0,4.53,69.71C-11.34,147,19.55,209,19.73,209.4a75,75,0,0,0,6,10.77c19.06,28.33,54.33,39.57,86.73,30.43,0,0,52.47-12.9,111.35-71.37h0C251.68,152.56,257.84,110.1,236.5,78.38Z',
                  1,
                  'cls-1'
                ],
                [1, 'container', 'bring-to-front'],
                [1, 'row'],
                [1, 'col-lg-6', 'ml-lg-auto'],
                [1, 'section-heading', 'text-center', 'text-lg-left'],
                [1, 'bold'],
                [1, 'row', 'align-items-center'],
                [1, 'col-md-6', 'order-sm-last'],
                [
                  1,
                  'image-background',
                  'contain',
                  2,
                  'background-image',
                  'url(assets/img/shps/map-dots.svg)'
                ],
                ['id', 'user-review-nav', 1, 'user-reviews'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  'class',
                  'review absolute user nav-item',
                  3,
                  'active',
                  'ngStyle',
                  'click',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [1, 'col-md-6'],
                [3, 'index', 'indexChange'],
                ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'review',
                  'absolute',
                  'user',
                  'nav-item',
                  3,
                  'ngStyle',
                  'click'
                ],
                [1, 'text'],
                [
                  'alt',
                  '...',
                  'data-aos',
                  'zoom-in',
                  1,
                  'img-responsive',
                  'shadow',
                  'rounded-circle',
                  3,
                  'src'
                ],
                [1, 'swiper-slide'],
                [1, 'quote', 'fas', 'fa-quote-left'],
                [1, 'lead', 'bold'],
                [1, 'w-10', 'mt-5'],
                [1, 'small'],
                [1, 'bold', 'd-block']
              ],
              template: function(n, e) {
                1 & n &&
                  (F.Qb(0, 'section', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'div', 1),
                  F.Fc(3, '\n    '),
                  F.ec(),
                  F.Qb(4, 'svg', 2),
                  F.Fc(5, '\n      '),
                  F.Qb(6, 'g', 3),
                  F.Fc(7, '\n        '),
                  F.Qb(8, 'g', 4),
                  F.Fc(9, '\n          '),
                  F.Mb(10, 'path', 5),
                  F.Fc(11, '\n        '),
                  F.Pb(),
                  F.Fc(12, '\n      '),
                  F.Pb(),
                  F.Fc(13, '\n    '),
                  F.Pb(),
                  F.Fc(14, '\n  '),
                  F.Pb(),
                  F.Fc(15, '\n\n  '),
                  F.dc(),
                  F.Qb(16, 'div', 6),
                  F.Fc(17, '\n    '),
                  F.Qb(18, 'div', 7),
                  F.Fc(19, '\n      '),
                  F.Qb(20, 'div', 8),
                  F.Fc(21, '\n        '),
                  F.Qb(22, 'div', 9),
                  F.Fc(23, '\n          '),
                  F.Qb(24, 'h2', 10),
                  F.Fc(25),
                  F.gc(26, 'translate'),
                  F.Pb(),
                  F.Fc(27, '\n        '),
                  F.Pb(),
                  F.Fc(28, '\n      '),
                  F.Pb(),
                  F.Fc(29, '\n    '),
                  F.Pb(),
                  F.Fc(30, '\n\n    '),
                  F.Qb(31, 'div', 11),
                  F.Fc(32, '\n      '),
                  F.Qb(33, 'div', 12),
                  F.Fc(34, '\n        '),
                  F.Qb(35, 'div', 13),
                  F.Fc(36, '\n          '),
                  F.Qb(37, 'div', 14),
                  F.Fc(38, '\n            '),
                  F.Dc(39, C, 7, 8, 'a', 15),
                  F.Fc(40, '\n          '),
                  F.Pb(),
                  F.Fc(41, '\n        '),
                  F.Pb(),
                  F.Fc(42, '\n      '),
                  F.Pb(),
                  F.Fc(43, '\n\n      '),
                  F.Qb(44, 'div', 16),
                  F.Fc(45, '\n        '),
                  F.Qb(46, 'swiper', 17),
                  F.bc('indexChange', function(n) {
                    return e.onIndexChange(n);
                  }),
                  F.Fc(47, '\n          '),
                  F.Dc(48, L, 21, 9, 'div', 18),
                  F.Fc(49, '\n        '),
                  F.Pb(),
                  F.Fc(50, '\n      '),
                  F.Pb(),
                  F.Fc(51, '\n    '),
                  F.Pb(),
                  F.Fc(52, '\n  '),
                  F.Pb(),
                  F.Fc(53, '\n'),
                  F.Pb(),
                  F.Fc(54, '\n')),
                  2 & n &&
                    (F.xb(25),
                    F.Hc(
                      '\n            ',
                      F.hc(
                        26,
                        4,
                        'TESTIMONIALS.TESTIMONIAL_WORLD_MAP.WE_HEARD_OUR_CUSTOMERS_SAY'
                      ),
                      '\n          '
                    ),
                    F.xb(14),
                    F.kc('ngForOf', e.reviews),
                    F.xb(7),
                    F.kc('index', e.currentSlide),
                    F.xb(2),
                    F.kc('ngForOf', e.reviews));
              },
              directives: [y.j, I.a, y.l],
              pipes: [g.b],
              styles: ['']
            })),
            D),
          Y = i('YJ7q');
        function G(n, e) {
          if (
            (1 & n &&
              (F.Qb(0, 'div', 4),
              F.Fc(1, '\n        '),
              F.Qb(2, 'div', 5),
              F.Fc(3, '\n          '),
              F.Qb(4, 'h3'),
              F.Fc(5),
              F.Pb(),
              F.Fc(6, '\n          '),
              F.Qb(7, 'p', 6),
              F.Fc(8),
              F.Pb(),
              F.Fc(9, '\n        '),
              F.Pb(),
              F.Fc(10, '\n      '),
              F.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            F.xb(2),
              F.Cc(
                'background-image',
                'url(assets/images/online-payment/payments/' + t.img + '.svg)'
              ),
              F.xb(3),
              F.Gc(t.title),
              F.xb(3),
              F.Hc('\n            ', t.description, '\n          ');
          }
        }
        var W,
          U,
          j,
          B,
          J =
            (((W = (function() {
              function e() {
                n(this, e),
                  (this.cards = [
                    {
                      img: 'send',
                      title: 'We are your gateway to RPA world',
                      animation: 'fade-up',
                      description:
                        'We do your RPA journey to be easy. That is why we created EveryThink where anyone can easily and quickly implement realtime solutions without coding.'
                    },
                    {
                      img: 'receive',
                      title: 'Take control of your automated processes',
                      animation: 'fade-up',
                      description:
                        'We give you all the tools so that you can create, buy and sell automation processes quickly and simply, 24 hours a day, every day of the year.'
                    }
                  ]);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || W)();
            }),
            (W.ɵcmp = F.Fb({
              type: W,
              selectors: [['dc-online-payment-send-receive']],
              decls: 11,
              vars: 1,
              consts: [
                [1, 'section', 'bg-light', 'send-and-receive'],
                [1, 'container', 'bring-to-front'],
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
                  'p-3',
                  'pl-6',
                  'pl-md-12'
                ],
                [1, 'text-secondary', 'mb-0']
              ],
              template: function(n, e) {
                1 & n &&
                  (F.Qb(0, 'section', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'div', 1),
                  F.Fc(3, '\n    '),
                  F.Qb(4, 'div', 2),
                  F.Fc(5, '\n      '),
                  F.Dc(6, G, 11, 4, 'div', 3),
                  F.Fc(7, '\n    '),
                  F.Pb(),
                  F.Fc(8, '\n  '),
                  F.Pb(),
                  F.Fc(9, '\n'),
                  F.Pb(),
                  F.Fc(10, '\n')),
                  2 & n && (F.xb(6), F.kc('ngForOf', e.cards));
              },
              directives: [y.j],
              styles: ['']
            })),
            W),
          q = i('VKEt'),
          K = i('iLZQ'),
          z = [
            {
              path: '',
              component:
                ((U = (function() {
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
                            'DEMOS.RPACREAORS.NETWORK_SEARCH_META.TITLE',
                            'DEMOS.RPACREAORS.NETWORK_SEARCH_META.KEYWORDS'
                          );
                        }
                      }
                    ]),
                    e
                  );
                })()),
                (U.ɵfac = function(n) {
                  return new (n || U)(F.Lb(u.a));
                }),
                (U.ɵcmp = F.Fb({
                  type: U,
                  selectors: [['dc-online-payment']],
                  decls: 20,
                  vars: 3,
                  consts: [[3, 'title'], [3, 'edge', 'background']],
                  template: function(n, e) {
                    1 & n &&
                      (F.Mb(0, 'dc-online-payment-heading'),
                      F.Fc(1, '\n'),
                      F.Mb(2, 'dc-online-payment-features'),
                      F.Fc(3, '\n'),
                      F.Mb(4, 'dc-online-payment-steps'),
                      F.Fc(5, '\n'),
                      F.Mb(6, 'dc-online-payment-customers-management'),
                      F.Fc(7, '\n'),
                      F.Mb(8, 'dc-online-payment-register'),
                      F.Fc(9, '\n'),
                      F.Mb(10, 'dc-testimonial-world-map'),
                      F.Fc(11, '\n'),
                      F.Mb(12, 'dc-trust-us', 0),
                      F.Fc(13, '\n'),
                      F.Mb(14, 'dc-online-payment-send-receive'),
                      F.Fc(15, '\n'),
                      F.Mb(16, 'dc-cta1', 1),
                      F.Fc(17, '\n'),
                      F.Mb(18, 'dc-footer2'),
                      F.Fc(19, '\n')),
                      2 & n &&
                        (F.xb(12),
                        F.kc('title', 'They trust us'),
                        F.xb(4),
                        F.kc('edge', 'top-left')('background', 'contrast'));
                  },
                  directives: [v, M, T, R, k, H, Y.a, J, q.a, K.a],
                  styles: ['']
                })),
                U),
              data: { title: Object(u.c)('Online Payment') }
            }
          ],
          X =
            (((B = function e() {
              n(this, e);
            }).ɵmod = F.Jb({ type: B })),
            (B.ɵinj = F.Ib({
              factory: function(n) {
                return new (n || B)();
              },
              imports: [[p.g.forChild(z)], p.g]
            })),
            B),
          V =
            (((j = function e() {
              n(this, e);
            }).ɵmod = F.Jb({ type: j })),
            (j.ɵinj = F.Ib({
              factory: function(n) {
                return new (n || j)();
              },
              imports: [[s.a, o.a, r.a, b.a, l.a, d.a, X, g.a.forChild()]]
            })),
            j);
      },
      '8klf': function(e, t, c) {
        'use strict';
        c.d(t, 'a', function() {
          return r;
        });
        var i = c('M0ag'),
          a = c('tyNb'),
          s = c('sYmb'),
          o = c('fXoL'),
          r = (function() {
            var e = function e() {
              n(this, e);
            };
            return (
              (e.ɵmod = o.Jb({ type: e })),
              (e.ɵinj = o.Ib({
                factory: function(n) {
                  return new (n || e)();
                },
                imports: [[i.a, a.g, s.a.forChild()]]
              })),
              e
            );
          })();
      },
      ORAR: function(e, t, c) {
        'use strict';
        c.d(t, 'a', function() {
          return o;
        });
        var i = c('tyNb'),
          a = c('sYmb'),
          s = c('fXoL'),
          o = (function() {
            var e = function e() {
              n(this, e);
            };
            return (
              (e.ɵmod = s.Jb({ type: e })),
              (e.ɵinj = s.Ib({
                factory: function(n) {
                  return new (n || e)();
                },
                imports: [[i.g, a.a.forChild()]]
              })),
              e
            );
          })();
      },
      pu65: function(e, t, c) {
        'use strict';
        c.d(t, 'a', function() {
          return r;
        });
        var i = c('nhfI'),
          a = c('M0ag'),
          s = c('sYmb'),
          o = c('fXoL'),
          r = (function() {
            var e = function e() {
              n(this, e);
            };
            return (
              (e.ɵmod = o.Jb({ type: e })),
              (e.ɵinj = o.Ib({
                factory: function(n) {
                  return new (n || e)();
                },
                imports: [[i.c, a.a, s.a.forChild()]]
              })),
              e
            );
          })();
      }
    }
  ]);
})();
