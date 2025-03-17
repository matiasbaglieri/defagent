!(function() {
  function n(n, c) {
    if (!(n instanceof c))
      throw new TypeError('Cannot call a class as a function');
  }
  function c(n, c) {
    for (var t = 0; t < c.length; t++) {
      var e = c[t];
      (e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        'value' in e && (e.writable = !0),
        Object.defineProperty(n, e.key, e);
    }
  }
  function t(n, t, e) {
    return t && c(n.prototype, t), e && c(n, e), n;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [24],
    {
      akeW: function(c, e, a) {
        'use strict';
        a.d(e, 'a', function() {
          return S;
        });
        var b = a('fXoL'),
          s = a('ofXK');
        function i(n, c) {
          if (
            (1 & n &&
              (b.Qb(0, 'div', 7),
              b.Fc(1, '\n    '),
              b.Mb(2, 'img', 8),
              b.Fc(3, '\n  '),
              b.Pb()),
            2 & n)
          ) {
            var t = b.fc();
            b.xb(2),
              b.Ab(
                'absolute top h-100 ',
                t.isScreenLeft() ? 'left' : 'right',
                ''
              ),
              b.kc('src', t.imgShape, b.yc);
          }
        }
        function r(n, c) {
          if ((1 & n && b.Mb(0, 'img', 9), 2 & n)) {
            var t = b.fc();
            b.kc('src', t.img, b.yc),
              b.yb('data-aos', 'fade-' + (t.isScreenLeft() ? 'right' : 'left'));
          }
        }
        function F(n, c) {
          1 & n && (b.Fc(0, '\n          '), b.ic(1, 2), b.Fc(2, '\n        '));
        }
        var E = [[['', 'section-heading', '']], '*', [['', 'images', '']]],
          o = ['[section-heading]', '*', '[images]'],
          S = (function() {
            var c = (function() {
              function c() {
                n(this, c);
              }
              return (
                t(c, [
                  { key: 'ngOnInit', value: function() {} },
                  {
                    key: 'isScreenLeft',
                    value: function() {
                      return 'left' === this.screenPos;
                    }
                  }
                ]),
                c
              );
            })();
            return (
              (c.ɵfac = function(n) {
                return new (n || c)();
              }),
              (c.ɵcmp = b.Fb({
                type: c,
                selectors: [['dc-big-screen']],
                inputs: {
                  img: 'img',
                  screenPos: 'screenPos',
                  imgShape: 'imgShape'
                },
                ngContentSelectors: o,
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
                template: function(n, c) {
                  if (
                    (1 & n &&
                      (b.jc(E),
                      b.Qb(0, 'section', 0),
                      b.Fc(1, '\n  '),
                      b.Dc(2, i, 4, 4, 'div', 1),
                      b.Fc(3, '\n\n  '),
                      b.Qb(4, 'div', 2),
                      b.Fc(5, '\n    '),
                      b.ic(6),
                      b.Fc(7, '\n\n    '),
                      b.Qb(8, 'div', 3),
                      b.Fc(9, '\n      '),
                      b.Qb(10, 'div', 4),
                      b.Fc(11, '\n        '),
                      b.ic(12, 1),
                      b.Fc(13, '\n      '),
                      b.Pb(),
                      b.Fc(14, '\n\n      '),
                      b.Qb(15, 'div'),
                      b.Fc(16, '\n        '),
                      b.Dc(17, r, 1, 2, 'img', 5),
                      b.Fc(18, '\n\n        '),
                      b.Dc(19, F, 3, 0, 'ng-template', null, 6, b.Ec),
                      b.Fc(21, '\n      '),
                      b.Pb(),
                      b.Fc(22, '\n    '),
                      b.Pb(),
                      b.Fc(23, '\n  '),
                      b.Pb(),
                      b.Fc(24, '\n'),
                      b.Pb(),
                      b.Fc(25, '\n')),
                    2 & n)
                  ) {
                    var t = b.tc(20);
                    b.xb(2),
                      b.kc('ngIf', c.imgShape),
                      b.xb(8),
                      b.Db('order-md-last', c.isScreenLeft()),
                      b.xb(5),
                      b.Ab(
                        'col-12 col-lg-6 p',
                        c.isScreenLeft() ? 'l' : 'r',
                        '-0'
                      ),
                      b.xb(2),
                      b.kc('ngIf', c.img)('ngIfElse', t);
                  }
                },
                directives: [s.k],
                styles: ['']
              })),
              c
            );
          })();
      },
      koon: function(c, e, a) {
        'use strict';
        a.r(e),
          a.d(e, 'StartupModule', function() {
            return Sn;
          });
        var b,
          s = a('M0ag'),
          i = a('2d4A'),
          r = a('ORAR'),
          F = a('8klf'),
          E = a('M0Rk'),
          o = a('T7/b'),
          S = a('1kSV'),
          l = a('kpBo'),
          d = a('tyNb'),
          P = a('ey9i'),
          A = a('fXoL'),
          T = a('sYmb'),
          g =
            (((b = (function() {
              function c(t) {
                n(this, c), (this.translate = t);
              }
              return t(c, [{ key: 'ngOnInit', value: function() {} }]), c;
            })()).ɵfac = function(n) {
              return new (n || b)(A.Lb(T.c));
            }),
            (b.ɵcmp = A.Fb({
              type: b,
              selectors: [['dc-startup-heading']],
              decls: 58,
              vars: 12,
              consts: [
                [
                  1,
                  'header',
                  'page',
                  'section',
                  'blanket',
                  'gradient',
                  'gradient-purple-blue',
                  'alpha-8',
                  'text-contrast',
                  'image-background',
                  'cover',
                  2,
                  'background-image',
                  'url(assets/img/bg/waves.jpg)'
                ],
                [1, 'divider-shape'],
                [
                  'xmlns',
                  'http://www.w3.org/2000/svg',
                  'viewBox',
                  '0 0 1000 100',
                  'preserveAspectRatio',
                  'none',
                  1,
                  'shape-waves',
                  2,
                  'left',
                  '0',
                  'transform',
                  'rotate3d(0,1,0,180deg)'
                ],
                [
                  'd',
                  'M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z',
                  1,
                  'shape-fill',
                  'shape-fill-contrast'
                ],
                [1, 'container-fluid'],
                [1, 'row', 'gap-y', 'align-items-center'],
                [1, 'col-lg-5', 'mx-auto', 'text-center', 'text-lg-left'],
                [1, 'light', 'display-4', 'text-contrast'],
                [1, 'bold', 'd-block', 2, 'font-size', '35px'],
                [1, 'text-contrast', 'lead', 'my-5'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'btn',
                  'btn-contrast',
                  'btn-lg',
                  'btn-rounded',
                  'bold',
                  'px-5',
                  'bw-2',
                  'border-primary'
                ],
                [1, 'col-lg-6', 'col-md-9', 'mx-md-auto', 'mx-lg-0', 'pr-lg-0'],
                [1, 'device-twin', 'align-items-center', 'mt-4', 'mt-lg-0'],
                ['data-aos', 'fade-left', 1, 'browser', 'shadow'],
                ['src', 'assets/img/screens/dash/4.png', 'alt', '...'],
                [
                  'data-aos',
                  'fade-right',
                  1,
                  'front',
                  'iphone-x',
                  'absolute',
                  'd-none',
                  'd-lg-block',
                  2,
                  'left',
                  '-5.5rem',
                  'bottom',
                  '-3.5rem'
                ],
                [1, 'screen'],
                ['src', 'assets/images/calendar/1.png', 'alt', '...'],
                [1, 'notch']
              ],
              template: function(n, c) {
                1 & n &&
                  (A.Qb(0, 'header', 0),
                  A.Fc(1, '\n  '),
                  A.Qb(2, 'div', 1),
                  A.Fc(3, '\n    '),
                  A.Fc(4, '\n    '),
                  A.ec(),
                  A.Qb(5, 'svg', 2),
                  A.Fc(6, '\n      '),
                  A.Mb(7, 'path', 3),
                  A.Fc(8, '\n    '),
                  A.Pb(),
                  A.Fc(9, '\n  '),
                  A.Pb(),
                  A.Fc(10, '\n\n  '),
                  A.dc(),
                  A.Qb(11, 'div', 4),
                  A.Fc(12, '\n    '),
                  A.Qb(13, 'div', 5),
                  A.Fc(14, '\n      '),
                  A.Qb(15, 'div', 6),
                  A.Fc(16, '\n        '),
                  A.Qb(17, 'h1', 7),
                  A.Fc(18),
                  A.gc(19, 'translate'),
                  A.Qb(20, 'span', 8),
                  A.Fc(21),
                  A.gc(22, 'translate'),
                  A.Pb(),
                  A.Fc(23, '\n        '),
                  A.Pb(),
                  A.Fc(24, '\n        '),
                  A.Qb(25, 'p', 9),
                  A.Fc(26),
                  A.gc(27, 'translate'),
                  A.Pb(),
                  A.Fc(28, '\n\n        '),
                  A.Qb(29, 'a', 10),
                  A.Fc(30),
                  A.gc(31, 'translate'),
                  A.Pb(),
                  A.Fc(32, '\n      '),
                  A.Pb(),
                  A.Fc(33, '\n\n      '),
                  A.Qb(34, 'div', 11),
                  A.Fc(35, '\n        '),
                  A.Qb(36, 'div', 12),
                  A.Fc(37, '\n          '),
                  A.Qb(38, 'div', 13),
                  A.Fc(39, '\n            '),
                  A.Mb(40, 'img', 14),
                  A.Fc(41, '\n          '),
                  A.Pb(),
                  A.Fc(42, '\n\n          '),
                  A.Qb(43, 'div', 15),
                  A.Fc(44, '\n            '),
                  A.Qb(45, 'div', 16),
                  A.Fc(46, '\n              '),
                  A.Mb(47, 'img', 17),
                  A.Fc(48, '\n            '),
                  A.Pb(),
                  A.Fc(49, '\n\n            '),
                  A.Mb(50, 'div', 18),
                  A.Fc(51, '\n          '),
                  A.Pb(),
                  A.Fc(52, '\n        '),
                  A.Pb(),
                  A.Fc(53, '\n      '),
                  A.Pb(),
                  A.Fc(54, '\n    '),
                  A.Pb(),
                  A.Fc(55, '\n  '),
                  A.Pb(),
                  A.Fc(56, '\n'),
                  A.Pb(),
                  A.Fc(57, '\n')),
                  2 & n &&
                    (A.xb(18),
                    A.Hc(
                      '\n          ',
                      A.hc(
                        19,
                        4,
                        'DEMOS.START_UP.HEADING.DELIVERING_THE_TOOLS'
                      ),
                      '\n          '
                    ),
                    A.xb(3),
                    A.Hc(
                      '\n            ',
                      A.hc(22, 6, 'DEMOS.START_UP.HEADING.YOU_NEED_TO_SUCCEED'),
                      ''
                    ),
                    A.xb(5),
                    A.Hc(
                      '\n          ',
                      A.hc(
                        27,
                        8,
                        'DEMOS.START_UP.HEADING.IT_ALL_BEGINS_BY_CHOSSING'
                      ),
                      '\n        '
                    ),
                    A.xb(4),
                    A.Hc(
                      '\n          ',
                      A.hc(31, 10, 'DEMOS.START_UP.HEADING.TRY_IT_FREE'),
                      ''
                    ));
              },
              pipes: [T.b],
              styles: ['']
            })),
            b),
          _ = a('akeW'),
          p = a('ofXK'),
          D = a('AL06');
        function O(n, c) {
          if (
            (1 & n &&
              (A.Qb(0, 'div', 6),
              A.Fc(1, '\n        '),
              A.Mb(2, 'dc-feather', 7),
              A.Fc(3, '\n        '),
              A.Qb(4, 'h5', 8),
              A.Fc(5),
              A.gc(6, 'translate'),
              A.Pb(),
              A.Fc(7, '\n        '),
              A.Qb(8, 'p'),
              A.Fc(9),
              A.gc(10, 'translate'),
              A.Pb(),
              A.Fc(11, '\n      '),
              A.Pb()),
            2 & n)
          ) {
            var t = c.$implicit;
            A.xb(2),
              A.kc('name', t.icon)('iconClass', 'stroke-primary mb-3'),
              A.xb(3),
              A.Gc(A.hc(6, 4, t.title)),
              A.xb(4),
              A.Hc('\n          ', A.hc(10, 6, t.desc), '\n        ');
          }
        }
        var R,
          G =
            (((R = (function() {
              function c(t) {
                n(this, c),
                  (this.translate = t),
                  (this.elements = [
                    {
                      icon: 'bar-chart',
                      title: 'DEMOS.START_UP.FEATURES.BUSINESS_TITLE',
                      desc: 'DEMOS.START_UP.FEATURES.BUSINESS_DESC'
                    },
                    {
                      icon: 'dollar-sign',
                      title: 'DEMOS.START_UP.FEATURES.PAYMENTS_TITLE',
                      desc: 'DEMOS.START_UP.FEATURES.PAYMENTS_DESC'
                    },
                    {
                      icon: 'clock',
                      title: 'DEMOS.START_UP.FEATURES.SCHEDULES_TITLE',
                      desc: 'DEMOS.START_UP.FEATURES.SCHEDULES_DESC'
                    },
                    {
                      icon: 'calendar',
                      title: 'DEMOS.START_UP.FEATURES.SAVING_TITLE',
                      desc: 'DEMOS.START_UP.FEATURES.SAVING_DESC'
                    },
                    {
                      icon: 'tablet',
                      title: 'DEMOS.START_UP.FEATURES.INTERFACE_TITLE',
                      desc: 'DEMOS.START_UP.FEATURES.INTERFACE_DESC'
                    },
                    {
                      icon: 'layout',
                      title: 'DEMOS.START_UP.FEATURES.SITE_TITLE',
                      desc: 'DEMOS.START_UP.FEATURES.SITE_DESC'
                    }
                  ]);
              }
              return t(c, [{ key: 'ngOnInit', value: function() {} }]), c;
            })()).ɵfac = function(n) {
              return new (n || R)(A.Lb(T.c));
            }),
            (R.ɵcmp = A.Fb({
              type: R,
              selectors: [['dc-startup-features']],
              decls: 18,
              vars: 4,
              consts: [
                ['id', 'features', 1, 'section'],
                [1, 'container', 'pb-5'],
                [1, 'section-heading', 'mb-6', 'text-center'],
                [1, 'mt-3'],
                [1, 'row', 'gap-y', 'text-center', 'text-md-left'],
                [
                  'class',
                  'col-md-4 py-4 rounded shadow-hover',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [1, 'col-md-4', 'py-4', 'rounded', 'shadow-hover'],
                [3, 'name', 'iconClass'],
                [1, 'bold']
              ],
              template: function(n, c) {
                1 & n &&
                  (A.Qb(0, 'section', 0),
                  A.Fc(1, '\n  '),
                  A.Qb(2, 'div', 1),
                  A.Fc(3, '\n    '),
                  A.Qb(4, 'div', 2),
                  A.Fc(5, '\n      '),
                  A.Qb(6, 'h2', 3),
                  A.Fc(7),
                  A.gc(8, 'translate'),
                  A.Pb(),
                  A.Fc(9, '\n    '),
                  A.Pb(),
                  A.Fc(10, '\n\n    '),
                  A.Qb(11, 'div', 4),
                  A.Fc(12, '\n      '),
                  A.Dc(13, O, 12, 8, 'div', 5),
                  A.Fc(14, '\n    '),
                  A.Pb(),
                  A.Fc(15, '\n  '),
                  A.Pb(),
                  A.Fc(16, '\n'),
                  A.Pb(),
                  A.Fc(17, '\n')),
                  2 & n &&
                    (A.xb(7),
                    A.Hc(
                      '\n        ',
                      A.hc(
                        8,
                        2,
                        'DEMOS.START_UP.FEATURES.WHAT_DASHCORE_CAN_DO'
                      ),
                      '\n      '
                    ),
                    A.xb(6),
                    A.kc('ngForOf', c.elements));
              },
              directives: [p.j, D.a],
              pipes: [T.b],
              styles: ['']
            })),
            R);
        function h(n, c) {
          1 & n &&
            (A.Fc(0, '\n            '),
            A.Qb(1, 'span', 8),
            A.Fc(2),
            A.gc(3, 'translate'),
            A.Pb(),
            A.Fc(4, '\n          ')),
            2 & n &&
              (A.xb(2),
              A.Hc(
                '\n              ',
                A.hc(3, 1, 'DEMOS.START_UP.WHY_DASHCORE.DEVELOPERS'),
                '\n            '
              ));
        }
        function H(n, c) {
          1 & n &&
            (A.Fc(0, '\n            '),
            A.Qb(1, 'div', 9),
            A.Fc(2, '\n              '),
            A.Qb(3, 'div', 10),
            A.Fc(4, '\n                '),
            A.Qb(5, 'h2', 11),
            A.Fc(6, '\n                  '),
            A.Qb(7, 'p', 12),
            A.Fc(8),
            A.gc(9, 'translate'),
            A.Qb(10, 'span', 13),
            A.Fc(11),
            A.gc(12, 'translate'),
            A.Pb(),
            A.Fc(13, '\n                  '),
            A.Pb(),
            A.Fc(14, '\n                  '),
            A.Qb(15, 'p', 13),
            A.Fc(16),
            A.gc(17, 'translate'),
            A.Qb(18, 'span', 12),
            A.Fc(19),
            A.gc(20, 'translate'),
            A.Pb(),
            A.Fc(21, '\n                  '),
            A.Pb(),
            A.Fc(22, '\n                  '),
            A.Qb(23, 'p', 13),
            A.Fc(24),
            A.gc(25, 'translate'),
            A.Qb(26, 'span', 12),
            A.Fc(27),
            A.gc(28, 'translate'),
            A.Pb(),
            A.Fc(29, '\n                  '),
            A.Pb(),
            A.Fc(30, '\n                '),
            A.Pb(),
            A.Fc(31, '\n              '),
            A.Pb(),
            A.Fc(32, '\n              '),
            A.Qb(33, 'div', 10),
            A.Fc(34, '\n                '),
            A.Qb(35, 'figure', 14),
            A.Fc(36, '\n                  '),
            A.Mb(37, 'img', 15),
            A.Fc(38, '\n                '),
            A.Pb(),
            A.Fc(39, '\n              '),
            A.Pb(),
            A.Fc(40, '\n            '),
            A.Pb(),
            A.Fc(41, '\n          ')),
            2 & n &&
              (A.xb(8),
              A.Hc(
                '\n                    ',
                A.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS0'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS01')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(
                  17,
                  10,
                  'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS1'
                ),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(
                  20,
                  12,
                  'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS11'
                )
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(
                  25,
                  14,
                  'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS2'
                ),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(
                  28,
                  16,
                  'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS22'
                )
              ));
        }
        function u(n, c) {
          1 & n && (A.Qb(0, 'span', 8), A.Fc(1), A.gc(2, 'translate'), A.Pb()),
            2 & n &&
              (A.xb(1),
              A.Gc(A.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.DESIGNER')));
        }
        function N(n, c) {
          1 & n &&
            (A.Fc(0, '\n            '),
            A.Qb(1, 'div', 9),
            A.Fc(2, '\n              '),
            A.Qb(3, 'div', 10),
            A.Fc(4, '\n                '),
            A.Qb(5, 'h2', 11),
            A.Fc(6, '\n                  '),
            A.Qb(7, 'p', 12),
            A.Fc(8),
            A.gc(9, 'translate'),
            A.Qb(10, 'span', 13),
            A.Fc(11),
            A.gc(12, 'translate'),
            A.Pb(),
            A.Fc(13, '\n                  '),
            A.Pb(),
            A.Fc(14, '\n                  '),
            A.Qb(15, 'p', 13),
            A.Fc(16),
            A.gc(17, 'translate'),
            A.Qb(18, 'span', 12),
            A.Fc(19),
            A.gc(20, 'translate'),
            A.Pb(),
            A.Fc(21, '\n                  '),
            A.Pb(),
            A.Fc(22, '\n                  '),
            A.Qb(23, 'p', 13),
            A.Fc(24),
            A.gc(25, 'translate'),
            A.Qb(26, 'span', 12),
            A.Fc(27),
            A.gc(28, 'translate'),
            A.Pb(),
            A.Fc(29, '\n                  '),
            A.Pb(),
            A.Fc(30, '\n                '),
            A.Pb(),
            A.Fc(31, '\n              '),
            A.Pb(),
            A.Fc(32, '\n              '),
            A.Qb(33, 'div', 10),
            A.Fc(34, '\n                '),
            A.Qb(35, 'figure', 14),
            A.Fc(36, '\n                  '),
            A.Mb(37, 'img', 16),
            A.Fc(38, '\n                '),
            A.Pb(),
            A.Fc(39, '\n              '),
            A.Pb(),
            A.Fc(40, '\n            '),
            A.Pb(),
            A.Fc(41, '\n          ')),
            2 & n &&
              (A.xb(8),
              A.Hc(
                '\n                    ',
                A.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER0'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER01')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER1'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER11')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER2'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER22')
              ));
        }
        function Q(n, c) {
          1 & n && (A.Qb(0, 'span', 8), A.Fc(1), A.gc(2, 'translate'), A.Pb()),
            2 & n &&
              (A.xb(1),
              A.Gc(A.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.REMINDERS')));
        }
        function f(n, c) {
          1 & n &&
            (A.Fc(0, '\n            '),
            A.Qb(1, 'div', 9),
            A.Fc(2, '\n              '),
            A.Qb(3, 'div', 10),
            A.Fc(4, '\n                '),
            A.Qb(5, 'h2', 11),
            A.Fc(6, '\n                  '),
            A.Qb(7, 'p', 12),
            A.Fc(8),
            A.gc(9, 'translate'),
            A.Qb(10, 'span', 13),
            A.Fc(11),
            A.gc(12, 'translate'),
            A.Pb(),
            A.Fc(13, '\n                  '),
            A.Pb(),
            A.Fc(14, '\n                  '),
            A.Qb(15, 'p', 13),
            A.Fc(16),
            A.gc(17, 'translate'),
            A.Qb(18, 'span', 12),
            A.Fc(19),
            A.gc(20, 'translate'),
            A.Pb(),
            A.Fc(21, '\n                  '),
            A.Pb(),
            A.Fc(22, '\n                  '),
            A.Qb(23, 'p', 13),
            A.Fc(24),
            A.gc(25, 'translate'),
            A.Qb(26, 'span', 12),
            A.Fc(27),
            A.gc(28, 'translate'),
            A.Pb(),
            A.Fc(29, '\n                  '),
            A.Pb(),
            A.Fc(30, '\n                '),
            A.Pb(),
            A.Fc(31, '\n              '),
            A.Pb(),
            A.Fc(32, '\n              '),
            A.Qb(33, 'div', 10),
            A.Fc(34, '\n                '),
            A.Qb(35, 'figure', 14),
            A.Fc(36, '\n                  '),
            A.Mb(37, 'img', 17),
            A.Fc(38, '\n                '),
            A.Pb(),
            A.Fc(39, '\n              '),
            A.Pb(),
            A.Fc(40, '\n            '),
            A.Pb(),
            A.Fc(41, '\n          ')),
            2 & n &&
              (A.xb(8),
              A.Hc(
                '\n                    ',
                A.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS0'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS01')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS1'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS11')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS2'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS22')
              ));
        }
        function m(n, c) {
          1 & n && (A.Qb(0, 'span', 8), A.Fc(1), A.gc(2, 'translate'), A.Pb()),
            2 & n &&
              (A.xb(1),
              A.Gc(A.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.PAYMENTS')));
        }
        function M(n, c) {
          1 & n &&
            (A.Fc(0, '\n            '),
            A.Qb(1, 'div', 9),
            A.Fc(2, '\n              '),
            A.Qb(3, 'div', 10),
            A.Fc(4, '\n                '),
            A.Qb(5, 'h2', 11),
            A.Fc(6, '\n                  '),
            A.Qb(7, 'p', 12),
            A.Fc(8),
            A.gc(9, 'translate'),
            A.Qb(10, 'span', 13),
            A.Fc(11),
            A.gc(12, 'translate'),
            A.Pb(),
            A.Fc(13, '\n                  '),
            A.Pb(),
            A.Fc(14, '\n                  '),
            A.Qb(15, 'p', 13),
            A.Fc(16),
            A.gc(17, 'translate'),
            A.Qb(18, 'span', 12),
            A.Fc(19),
            A.gc(20, 'translate'),
            A.Pb(),
            A.Fc(21, '\n                  '),
            A.Pb(),
            A.Fc(22, '\n                  '),
            A.Qb(23, 'p', 13),
            A.Fc(24),
            A.gc(25, 'translate'),
            A.Qb(26, 'span', 12),
            A.Fc(27),
            A.gc(28, 'translate'),
            A.Pb(),
            A.Fc(29, '\n                  '),
            A.Pb(),
            A.Fc(30, '\n                '),
            A.Pb(),
            A.Fc(31, '\n              '),
            A.Pb(),
            A.Fc(32, '\n              '),
            A.Qb(33, 'div', 10),
            A.Fc(34, '\n                '),
            A.Qb(35, 'figure', 14),
            A.Fc(36, '\n                  '),
            A.Mb(37, 'img', 18),
            A.Fc(38, '\n                '),
            A.Pb(),
            A.Fc(39, '\n              '),
            A.Pb(),
            A.Fc(40, '\n            '),
            A.Pb(),
            A.Fc(41, '\n          ')),
            2 & n &&
              (A.xb(8),
              A.Hc(
                '\n                    ',
                A.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS0'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS01')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS1'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS11')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS2'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS22')
              ));
        }
        function I(n, c) {
          1 & n && (A.Qb(0, 'span', 8), A.Fc(1), A.gc(2, 'translate'), A.Pb()),
            2 & n &&
              (A.xb(1), A.Gc(A.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.PAGE')));
        }
        function v(n, c) {
          1 & n &&
            (A.Fc(0, '\n            '),
            A.Qb(1, 'div', 9),
            A.Fc(2, '\n              '),
            A.Qb(3, 'div', 10),
            A.Fc(4, '\n                '),
            A.Qb(5, 'h2', 11),
            A.Fc(6, '\n                  '),
            A.Qb(7, 'p', 12),
            A.Fc(8),
            A.gc(9, 'translate'),
            A.Qb(10, 'span', 13),
            A.Fc(11),
            A.gc(12, 'translate'),
            A.Pb(),
            A.Fc(13, '\n                  '),
            A.Pb(),
            A.Fc(14, '\n                  '),
            A.Qb(15, 'p', 13),
            A.Fc(16),
            A.gc(17, 'translate'),
            A.Qb(18, 'span', 12),
            A.Fc(19),
            A.gc(20, 'translate'),
            A.Pb(),
            A.Fc(21, '\n                  '),
            A.Pb(),
            A.Fc(22, '\n                  '),
            A.Qb(23, 'p', 13),
            A.Fc(24),
            A.gc(25, 'translate'),
            A.Qb(26, 'span', 12),
            A.Fc(27),
            A.gc(28, 'translate'),
            A.Pb(),
            A.Fc(29, '\n                  '),
            A.Pb(),
            A.Fc(30, '\n                '),
            A.Pb(),
            A.Fc(31, '\n              '),
            A.Pb(),
            A.Fc(32, '\n              '),
            A.Qb(33, 'div', 10),
            A.Fc(34, '\n                '),
            A.Qb(35, 'figure', 14),
            A.Fc(36, '\n                  '),
            A.Mb(37, 'img', 19),
            A.Fc(38, '\n                '),
            A.Pb(),
            A.Fc(39, '\n              '),
            A.Pb(),
            A.Fc(40, '\n            '),
            A.Pb(),
            A.Fc(41, '\n          ')),
            2 & n &&
              (A.xb(8),
              A.Hc(
                '\n                    ',
                A.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE0'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(A.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE01')),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE1'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(A.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE11')),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE2'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE22')
              ));
        }
        function x(n, c) {
          1 & n && (A.Qb(0, 'span', 8), A.Fc(1), A.gc(2, 'translate'), A.Pb()),
            2 & n &&
              (A.xb(1),
              A.Gc(A.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.CALENDARS')));
        }
        function U(n, c) {
          1 & n &&
            (A.Fc(0, '\n            '),
            A.Qb(1, 'div', 9),
            A.Fc(2, '\n              '),
            A.Qb(3, 'div', 10),
            A.Fc(4, '\n                '),
            A.Qb(5, 'h2', 11),
            A.Fc(6, '\n                  '),
            A.Qb(7, 'p', 12),
            A.Fc(8),
            A.gc(9, 'translate'),
            A.Qb(10, 'span', 13),
            A.Fc(11),
            A.gc(12, 'translate'),
            A.Pb(),
            A.Fc(13, '\n                  '),
            A.Pb(),
            A.Fc(14, '\n                  '),
            A.Qb(15, 'p', 13),
            A.Fc(16),
            A.gc(17, 'translate'),
            A.Qb(18, 'span', 12),
            A.Fc(19),
            A.gc(20, 'translate'),
            A.Pb(),
            A.Fc(21, '\n                  '),
            A.Pb(),
            A.Fc(22, '\n                  '),
            A.Qb(23, 'p', 13),
            A.Fc(24),
            A.gc(25, 'translate'),
            A.Qb(26, 'span', 12),
            A.Fc(27),
            A.gc(28, 'translate'),
            A.Pb(),
            A.Fc(29, '\n                  '),
            A.Pb(),
            A.Fc(30, '\n                '),
            A.Pb(),
            A.Fc(31, '\n              '),
            A.Pb(),
            A.Fc(32, '\n              '),
            A.Qb(33, 'div', 10),
            A.Fc(34, '\n                '),
            A.Qb(35, 'figure', 14),
            A.Fc(36, '\n                  '),
            A.Mb(37, 'img', 20),
            A.Fc(38, '\n                '),
            A.Pb(),
            A.Fc(39, '\n              '),
            A.Pb(),
            A.Fc(40, '\n            '),
            A.Pb(),
            A.Fc(41, '\n          ')),
            2 & n &&
              (A.xb(8),
              A.Hc(
                '\n                    ',
                A.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_CALENDARS0'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_CALENDARS01')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_CALENDARS1'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_CALENDARS11')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_CALENDARS2'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_CALENDARS22')
              ));
        }
        function C(n, c) {
          1 & n && (A.Qb(0, 'span', 8), A.Fc(1), A.gc(2, 'translate'), A.Pb()),
            2 & n &&
              (A.xb(1),
              A.Gc(A.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.REPORTING')));
        }
        function Y(n, c) {
          1 & n &&
            (A.Fc(0, '\n            '),
            A.Qb(1, 'div', 9),
            A.Fc(2, '\n              '),
            A.Qb(3, 'div', 10),
            A.Fc(4, '\n                '),
            A.Qb(5, 'h2', 11),
            A.Fc(6, '\n                  '),
            A.Qb(7, 'p', 12),
            A.Fc(8),
            A.gc(9, 'translate'),
            A.Qb(10, 'span', 13),
            A.Fc(11),
            A.gc(12, 'translate'),
            A.Pb(),
            A.Fc(13, '\n                  '),
            A.Pb(),
            A.Fc(14, '\n                  '),
            A.Qb(15, 'p', 13),
            A.Fc(16),
            A.gc(17, 'translate'),
            A.Qb(18, 'span', 12),
            A.Fc(19),
            A.gc(20, 'translate'),
            A.Pb(),
            A.Fc(21, '\n                  '),
            A.Pb(),
            A.Fc(22, '\n                  '),
            A.Qb(23, 'p', 13),
            A.Fc(24),
            A.gc(25, 'translate'),
            A.Qb(26, 'span', 12),
            A.Fc(27),
            A.gc(28, 'translate'),
            A.Pb(),
            A.Fc(29, '\n                  '),
            A.Pb(),
            A.Fc(30, '\n                '),
            A.Pb(),
            A.Fc(31, '\n              '),
            A.Pb(),
            A.Fc(32, '\n              '),
            A.Qb(33, 'div', 10),
            A.Fc(34, '\n                '),
            A.Qb(35, 'figure', 14),
            A.Fc(36, '\n                  '),
            A.Mb(37, 'img', 21),
            A.Fc(38, '\n                '),
            A.Pb(),
            A.Fc(39, '\n              '),
            A.Pb(),
            A.Fc(40, '\n            '),
            A.Pb(),
            A.Fc(41, '\n          ')),
            2 & n &&
              (A.xb(8),
              A.Hc(
                '\n                    ',
                A.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REPORTING0'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REPORTING01')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REPORTING1'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REPORTING11')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REPORTING2'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REPORTING22')
              ));
        }
        function W(n, c) {
          1 & n && (A.Qb(0, 'span', 8), A.Fc(1), A.gc(2, 'translate'), A.Pb()),
            2 & n &&
              (A.xb(1),
              A.Gc(A.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.SECURITY')));
        }
        function L(n, c) {
          1 & n &&
            (A.Fc(0, '\n            '),
            A.Qb(1, 'div', 9),
            A.Fc(2, '\n              '),
            A.Qb(3, 'div', 10),
            A.Fc(4, '\n                '),
            A.Qb(5, 'h2', 11),
            A.Fc(6, '\n                  '),
            A.Qb(7, 'p', 12),
            A.Fc(8),
            A.gc(9, 'translate'),
            A.Qb(10, 'span', 13),
            A.Fc(11),
            A.gc(12, 'translate'),
            A.Pb(),
            A.Fc(13, '\n                  '),
            A.Pb(),
            A.Fc(14, '\n                  '),
            A.Qb(15, 'p', 13),
            A.Fc(16),
            A.gc(17, 'translate'),
            A.Qb(18, 'span', 12),
            A.Fc(19),
            A.gc(20, 'translate'),
            A.Pb(),
            A.Fc(21, '\n                  '),
            A.Pb(),
            A.Fc(22, '\n                  '),
            A.Qb(23, 'p', 13),
            A.Fc(24),
            A.gc(25, 'translate'),
            A.Qb(26, 'span', 12),
            A.Fc(27),
            A.gc(28, 'translate'),
            A.Pb(),
            A.Fc(29, '\n                  '),
            A.Pb(),
            A.Fc(30, '\n                '),
            A.Pb(),
            A.Fc(31, '\n              '),
            A.Pb(),
            A.Fc(32, '\n              '),
            A.Qb(33, 'div', 10),
            A.Fc(34, '\n                '),
            A.Qb(35, 'figure', 14),
            A.Fc(36, '\n                  '),
            A.Mb(37, 'img', 22),
            A.Fc(38, '\n                '),
            A.Pb(),
            A.Fc(39, '\n              '),
            A.Pb(),
            A.Fc(40, '\n            '),
            A.Pb(),
            A.Fc(41, '\n          ')),
            2 & n &&
              (A.xb(8),
              A.Hc(
                '\n                    ',
                A.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_SECURITY0'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_SECURITY01')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_SECURITY1'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_SECURITY11')
              ),
              A.xb(5),
              A.Hc(
                '\n                    ',
                A.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_SECURITY2'),
                '\n                    '
              ),
              A.xb(3),
              A.Gc(
                A.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_SECURITY22')
              ));
        }
        var y,
          w =
            (((y = (function() {
              function c(t) {
                n(this, c), (this.translate = t);
              }
              return t(c, [{ key: 'ngOnInit', value: function() {} }]), c;
            })()).ɵfac = function(n) {
              return new (n || y)(A.Lb(T.c));
            }),
            (y.ɵcmp = A.Fb({
              type: y,
              selectors: [['dc-startup-why-dashcore']],
              decls: 79,
              vars: 7,
              consts: [
                [1, 'section', 'bg-light'],
                [1, 'container', 'bring-to-front', 'pb-0'],
                [1, 'section-heading', 'text-center', 'w-75', 'mx-auto'],
                [1, 'lead', 'text-secondary'],
                [1, 'shadow', 'bg-contrast', 'p-5', 'rounded'],
                [
                  'type',
                  'tabs tabs-clean slide d-inline-flex mb-4',
                  3,
                  'destroyOnHide'
                ],
                ['ngbTabTitle', ''],
                ['ngbTabContent', ''],
                [1, 'bold', 'text-uppercase'],
                [1, 'row', 'gap-y'],
                [1, 'col-lg-6'],
                [1, 'bold', 'mb-4'],
                [
                  2,
                  'color',
                  '#212121',
                  'font-size',
                  '35px',
                  'font-weight',
                  'normal'
                ],
                [
                  2,
                  'color',
                  '#000000',
                  'font-weight',
                  'bold',
                  'font-size',
                  '40px'
                ],
                [1, 'px-2'],
                [
                  'src',
                  'assets/images/calendar/matchmaking.png',
                  'alt',
                  '...',
                  1,
                  'img-responsive',
                  'shadow',
                  'rounded'
                ],
                [
                  'src',
                  'assets/images/calendar/Imagen 1.png',
                  'alt',
                  '...',
                  1,
                  'img-responsive',
                  'shadow',
                  'rounded'
                ],
                [
                  'src',
                  'assets/images/calendar/notificaciones_calendar.png',
                  'alt',
                  '...',
                  1,
                  'img-responsive',
                  'shadow',
                  'rounded'
                ],
                [
                  'src',
                  'assets/images/calendar/integraciones.png',
                  'alt',
                  '...',
                  1,
                  'img-responsive',
                  'shadow',
                  'rounded'
                ],
                [
                  'src',
                  'assets/img/screens/designer.png',
                  'alt',
                  '...',
                  1,
                  'img-responsive',
                  'shadow',
                  'rounded'
                ],
                [
                  'src',
                  'assets/images/calendar/sync_calendars_others.png',
                  'alt',
                  '...',
                  1,
                  'img-responsive',
                  'shadow',
                  'rounded'
                ],
                [
                  'src',
                  'assets/images/calendar/reports.png',
                  'alt',
                  '...',
                  1,
                  'img-responsive',
                  'shadow',
                  'rounded'
                ],
                [
                  'src',
                  'assets/images/calendar/seguridad.png',
                  'alt',
                  '...',
                  1,
                  'img-responsive',
                  'shadow',
                  'rounded'
                ]
              ],
              template: function(n, c) {
                1 & n &&
                  (A.Qb(0, 'section', 0),
                  A.Fc(1, '\n  '),
                  A.Qb(2, 'div', 1),
                  A.Fc(3, '\n    '),
                  A.Qb(4, 'div', 2),
                  A.Fc(5, '\n      '),
                  A.Qb(6, 'h2'),
                  A.Fc(7),
                  A.gc(8, 'translate'),
                  A.Pb(),
                  A.Fc(9, '\n      '),
                  A.Qb(10, 'p', 3),
                  A.Fc(11),
                  A.gc(12, 'translate'),
                  A.Pb(),
                  A.Fc(13, '\n    '),
                  A.Pb(),
                  A.Fc(14, '\n\n    '),
                  A.Qb(15, 'div', 4),
                  A.Fc(16, '\n      '),
                  A.Qb(17, 'ngb-tabset', 5),
                  A.Fc(18, '\n        '),
                  A.Qb(19, 'ngb-tab'),
                  A.Fc(20, '\n          '),
                  A.Dc(21, h, 5, 3, 'ng-template', 6),
                  A.Fc(22, '\n          '),
                  A.Dc(23, H, 42, 18, 'ng-template', 7),
                  A.Fc(24, '\n        '),
                  A.Pb(),
                  A.Fc(25, '\n\n        '),
                  A.Qb(26, 'ngb-tab'),
                  A.Fc(27, '\n          '),
                  A.Dc(28, u, 3, 3, 'ng-template', 6),
                  A.Fc(29, '\n          '),
                  A.Dc(30, N, 42, 18, 'ng-template', 7),
                  A.Fc(31, '\n        '),
                  A.Pb(),
                  A.Fc(32, '\n\n        '),
                  A.Qb(33, 'ngb-tab'),
                  A.Fc(34, '\n          '),
                  A.Dc(35, Q, 3, 3, 'ng-template', 6),
                  A.Fc(36, '\n          '),
                  A.Dc(37, f, 42, 18, 'ng-template', 7),
                  A.Fc(38, '\n        '),
                  A.Pb(),
                  A.Fc(39, '\n        '),
                  A.Qb(40, 'ngb-tab'),
                  A.Fc(41, '\n          '),
                  A.Dc(42, m, 3, 3, 'ng-template', 6),
                  A.Fc(43, '\n          '),
                  A.Dc(44, M, 42, 18, 'ng-template', 7),
                  A.Fc(45, '\n        '),
                  A.Pb(),
                  A.Fc(46, '\n\n        '),
                  A.Qb(47, 'ngb-tab'),
                  A.Fc(48, '\n          '),
                  A.Dc(49, I, 3, 3, 'ng-template', 6),
                  A.Fc(50, '\n          '),
                  A.Dc(51, v, 42, 18, 'ng-template', 7),
                  A.Fc(52, '\n        '),
                  A.Pb(),
                  A.Fc(53, '\n\n        '),
                  A.Qb(54, 'ngb-tab'),
                  A.Fc(55, '\n          '),
                  A.Dc(56, x, 3, 3, 'ng-template', 6),
                  A.Fc(57, '\n          '),
                  A.Dc(58, U, 42, 18, 'ng-template', 7),
                  A.Fc(59, '\n        '),
                  A.Pb(),
                  A.Fc(60, '\n        '),
                  A.Qb(61, 'ngb-tab'),
                  A.Fc(62, '\n          '),
                  A.Dc(63, C, 3, 3, 'ng-template', 6),
                  A.Fc(64, '\n          '),
                  A.Dc(65, Y, 42, 18, 'ng-template', 7),
                  A.Fc(66, '\n        '),
                  A.Pb(),
                  A.Fc(67, '\n        '),
                  A.Qb(68, 'ngb-tab'),
                  A.Fc(69, '\n          '),
                  A.Dc(70, W, 3, 3, 'ng-template', 6),
                  A.Fc(71, '\n          '),
                  A.Dc(72, L, 42, 18, 'ng-template', 7),
                  A.Fc(73, '\n        '),
                  A.Pb(),
                  A.Fc(74, '\n      '),
                  A.Pb(),
                  A.Fc(75, '\n    '),
                  A.Pb(),
                  A.Fc(76, '\n  '),
                  A.Pb(),
                  A.Fc(77, '\n'),
                  A.Pb(),
                  A.Fc(78, '\n')),
                  2 & n &&
                    (A.xb(7),
                    A.Hc(
                      '\n        ',
                      A.hc(
                        8,
                        3,
                        'DEMOS.START_UP.WHY_DASHCORE.WHY_DASHCORE_TEMPLATE'
                      ),
                      '\n      '
                    ),
                    A.xb(4),
                    A.Hc(
                      '\n        ',
                      A.hc(12, 5, 'DEMOS.START_UP.WHY_DASHCORE.WHEN_LOOKING'),
                      '\n      '
                    ),
                    A.xb(6),
                    A.kc('destroyOnHide', !1));
              },
              directives: [S.r, S.o, S.q, S.p],
              pipes: [T.b],
              styles: ['']
            })),
            y),
          k = a('u3Pa');
        function V(n, c) {
          if (
            (1 & n &&
              (A.Qb(0, 'div', 7),
              A.Fc(1, '\n        '),
              A.Qb(2, 'div', 8),
              A.Fc(3, '\n          '),
              A.Qb(4, 'dc-modal-video', 9),
              A.Fc(5, '\n            '),
              A.Qb(6, 'div', 10),
              A.Fc(7, '\n              '),
              A.Qb(8, 'div', 11),
              A.Fc(9, '\n                '),
              A.Mb(10, 'dc-feather', 12),
              A.Fc(11, '\n              '),
              A.Pb(),
              A.Fc(12, '\n            '),
              A.Pb(),
              A.Fc(13, '\n          '),
              A.Pb(),
              A.Fc(14, '\n\n          '),
              A.Qb(15, 'div', 13),
              A.Fc(16, '\n            '),
              A.Qb(17, 'h4', 14),
              A.Fc(18),
              A.gc(19, 'translate'),
              A.Pb(),
              A.Fc(20, '\n\n            '),
              A.Qb(21, 'p', 15),
              A.Fc(22),
              A.gc(23, 'translate'),
              A.Pb(),
              A.Fc(24, '\n          '),
              A.Pb(),
              A.Fc(25, '\n        '),
              A.Pb(),
              A.Fc(26, '\n      '),
              A.Pb()),
            2 & n)
          ) {
            var t = c.$implicit;
            A.xb(4),
              A.kc('identifier', 'myModal')('videoId', t.videoId),
              A.xb(2),
              A.Cc(
                'background-image',
                'url(assets/images/calendar/' + t.gravity + ')'
              ),
              A.xb(4),
              A.kc('name', 'play')('iconClass', 'stroke-contrast'),
              A.xb(8),
              A.Gc(A.hc(19, 8, t.title)),
              A.xb(4),
              A.Hc(
                '\n              ',
                A.hc(23, 10, t.description),
                '.\n            '
              );
          }
        }
        var j,
          B,
          K =
            (((j = (function() {
              function c(t) {
                n(this, c),
                  (this.translate = t),
                  (this.posts = [
                    {
                      gravity: '3.jpeg',
                      title: 'DEMOS.START_UP.VIDEOs.1_TITLE',
                      description: 'DEMOS.START_UP.VIDEOs.1_DESC',
                      videoId: '_VArFyZxGzg'
                    },
                    {
                      gravity: '1.jpeg',
                      title: 'DEMOS.START_UP.VIDEOs.2_TITLE',
                      description: 'DEMOS.START_UP.VIDEOs.2_DESC',
                      videoId: 'elysFgtMrPY'
                    },
                    {
                      gravity: '2.jpeg',
                      title: 'DEMOS.START_UP.VIDEOs.3_TITLE',
                      description: 'DEMOS.START_UP.VIDEOs.3_DESC',
                      videoId: 'a4Z_PQ99lAU'
                    }
                  ]);
              }
              return t(c, [{ key: 'ngOnInit', value: function() {} }]), c;
            })()).ɵfac = function(n) {
              return new (n || j)(A.Lb(T.c));
            }),
            (j.ɵcmp = A.Fb({
              type: j,
              selectors: [['dc-startup-videos']],
              decls: 23,
              vars: 7,
              consts: [
                [1, 'section', 'bg-darker', 'edge', 'top-left'],
                [1, 'container', 'pt-8'],
                [1, 'section-heading', 'text-center', 'w-75', 'mx-auto'],
                [1, 'text-contrast', 'bold'],
                [1, 'lead', 'text-contrast'],
                [1, 'row', 'gap-y'],
                ['class', 'col-12 col-sm-6 col-md-4', 4, 'ngFor', 'ngForOf'],
                [1, 'col-12', 'col-sm-6', 'col-md-4'],
                [1, 'card', 'shadow-box', 'shadow-hover', 'border-0'],
                [3, 'identifier', 'videoId'],
                [
                  1,
                  'blanket',
                  'gradient',
                  'gradient-blue-purple',
                  'alpha-3',
                  'p-6',
                  'image-background',
                  'cover',
                  'center-flex'
                ],
                [1, 'content'],
                [3, 'name', 'iconClass'],
                [1, 'card-body'],
                [1, 'card-title', 'regular'],
                [1, 'card-text', 'text-secondary']
              ],
              template: function(n, c) {
                1 & n &&
                  (A.Fc(0, '\n'),
                  A.Qb(1, 'section', 0),
                  A.Fc(2, '\n  '),
                  A.Qb(3, 'div', 1),
                  A.Fc(4, '\n    '),
                  A.Qb(5, 'div', 2),
                  A.Fc(6, '\n      '),
                  A.Qb(7, 'h2', 3),
                  A.Fc(8),
                  A.gc(9, 'translate'),
                  A.Pb(),
                  A.Fc(10, '\n      '),
                  A.Qb(11, 'p', 4),
                  A.Fc(12),
                  A.gc(13, 'translate'),
                  A.Pb(),
                  A.Fc(14, '\n    '),
                  A.Pb(),
                  A.Fc(15, '\n\n    '),
                  A.Qb(16, 'div', 5),
                  A.Fc(17, '\n      '),
                  A.Dc(18, V, 27, 12, 'div', 6),
                  A.Fc(19, '\n    '),
                  A.Pb(),
                  A.Fc(20, '\n  '),
                  A.Pb(),
                  A.Fc(21, '\n'),
                  A.Pb(),
                  A.Fc(22, '\n')),
                  2 & n &&
                    (A.xb(8),
                    A.Hc(
                      '\n        ',
                      A.hc(9, 3, 'DEMOS.START_UP.VIDEOs.HOW_TO_VIDEO'),
                      '\n      '
                    ),
                    A.xb(4),
                    A.Hc(
                      '\n        ',
                      A.hc(13, 5, 'DEMOS.START_UP.VIDEOs.TAKE_A_LOOKING_AT'),
                      '\n      '
                    ),
                    A.xb(6),
                    A.kc('ngForOf', c.posts));
              },
              directives: [p.j, k.a, D.a],
              pipes: [T.b],
              styles: ['']
            })),
            j),
          X = a('u8tZ'),
          z = a('aaX3'),
          J = a('mrcQ'),
          Z =
            (((B = (function() {
              function c(t) {
                n(this, c), (this.translate = t);
              }
              return t(c, [{ key: 'ngOnInit', value: function() {} }]), c;
            })()).ɵfac = function(n) {
              return new (n || B)(A.Lb(T.c));
            }),
            (B.ɵcmp = A.Fb({
              type: B,
              selectors: [['dc-startup-download']],
              decls: 63,
              vars: 21,
              consts: [
                [1, 'section', 'app-download'],
                [1, 'container', 'bring-to-front'],
                [1, 'shadow-lg', 'bg-primary', 'p-5', 'rounded'],
                [1, 'section-heading', 'text-center'],
                [
                  1,
                  'badge',
                  'badge-contrast',
                  'badge-pill',
                  'bold',
                  'py-2',
                  'px-4'
                ],
                ['href', 'https://everythink.ai/app/#/sessions/signup'],
                [1, 'text-contrast'],
                [
                  1,
                  'nav',
                  'flex-column',
                  'flex-md-row',
                  'justify-content-center',
                  'align-items-center',
                  'mt-5'
                ],
                [
                  'href',
                  'https://apps.apple.com/us/app/id1513474218',
                  1,
                  'nav-link',
                  'py-3',
                  'px-4',
                  'btn',
                  'btn-rounded',
                  'btn-download',
                  'btn-dark',
                  'text-contrast',
                  'mr-0',
                  'mr-md-4',
                  'mb-4',
                  'mb-md-0'
                ],
                [
                  'src',
                  'assets/images/app-landing-2/svg/apple.svg',
                  'alt',
                  '...',
                  1,
                  'icon',
                  'icon-md'
                ],
                [1, 'ml-2'],
                [1, 'small', 'bold'],
                [1, 'd-block', 'bold', 'text-contrast'],
                [
                  'href',
                  'https://play.google.com/store/apps/details?id=ai.everythink.community',
                  1,
                  'nav-link',
                  'py-3',
                  'px-4',
                  'btn',
                  'btn-rounded',
                  'btn-download',
                  'btn-light',
                  'text-darker'
                ],
                [
                  'src',
                  'assets/images/app-landing-2/svg/google-play.svg',
                  'alt',
                  '...',
                  1,
                  'icon',
                  'icon-md'
                ],
                [1, 'd-block', 'bold', 'text-darker']
              ],
              template: function(n, c) {
                1 & n &&
                  (A.Fc(0, '\n'),
                  A.Qb(1, 'section', 0),
                  A.Fc(2, '\n  '),
                  A.Qb(3, 'div', 1),
                  A.Fc(4, '\n    '),
                  A.Qb(5, 'div', 2),
                  A.Fc(6, '\n      '),
                  A.Qb(7, 'div', 3),
                  A.Fc(8, '\n        '),
                  A.Qb(9, 'p', 4),
                  A.Fc(10, '\n          '),
                  A.Qb(11, 'a', 5),
                  A.Fc(12),
                  A.gc(13, 'translate'),
                  A.Pb(),
                  A.Fc(14, '\n        '),
                  A.Pb(),
                  A.Fc(15, '\n        '),
                  A.Qb(16, 'h2', 6),
                  A.Fc(17),
                  A.gc(18, 'translate'),
                  A.Pb(),
                  A.Fc(19, '\n        '),
                  A.Qb(20, 'p', 6),
                  A.Fc(21),
                  A.gc(22, 'translate'),
                  A.Pb(),
                  A.Fc(23, '\n      '),
                  A.Pb(),
                  A.Fc(24, '\n\n      '),
                  A.Qb(25, 'nav', 7),
                  A.Fc(26, '\n        '),
                  A.Qb(27, 'a', 8),
                  A.Fc(28, '\n          '),
                  A.Mb(29, 'img', 9),
                  A.Fc(30, '\n          '),
                  A.Qb(31, 'p', 10),
                  A.Fc(32, '\n            '),
                  A.Qb(33, 'span', 11),
                  A.Fc(34),
                  A.gc(35, 'translate'),
                  A.Pb(),
                  A.Fc(36, '\n            '),
                  A.Qb(37, 'span', 12),
                  A.Fc(38),
                  A.gc(39, 'translate'),
                  A.Pb(),
                  A.Fc(40, '\n          '),
                  A.Pb(),
                  A.Fc(41, '\n        '),
                  A.Pb(),
                  A.Fc(42, '\n\n        '),
                  A.Qb(43, 'a', 13),
                  A.Fc(44, '\n          '),
                  A.Mb(45, 'img', 14),
                  A.Fc(46, '\n          '),
                  A.Qb(47, 'p', 10),
                  A.Fc(48, '\n            '),
                  A.Qb(49, 'span', 11),
                  A.Fc(50),
                  A.gc(51, 'translate'),
                  A.Pb(),
                  A.Fc(52, '\n            '),
                  A.Qb(53, 'span', 15),
                  A.Fc(54),
                  A.gc(55, 'translate'),
                  A.Pb(),
                  A.Fc(56, '\n          '),
                  A.Pb(),
                  A.Fc(57, '\n        '),
                  A.Pb(),
                  A.Fc(58, '\n      '),
                  A.Pb(),
                  A.Fc(59, '\n    '),
                  A.Pb(),
                  A.Fc(60, '\n  '),
                  A.Pb(),
                  A.Fc(61, '\n'),
                  A.Pb(),
                  A.Fc(62, '\n')),
                  2 & n &&
                    (A.xb(12),
                    A.Hc(
                      '\n            ',
                      A.hc(
                        13,
                        7,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.START_TODAY'
                      ),
                      '\n          '
                    ),
                    A.xb(5),
                    A.Hc(
                      '\n          ',
                      A.hc(
                        18,
                        9,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.DOWNLOAD_THE_APP'
                      ),
                      '\n        '
                    ),
                    A.xb(4),
                    A.Hc(
                      '\n          ',
                      A.hc(
                        22,
                        11,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.DOWNLOAD_EVERTTHINK'
                      ),
                      '\n        '
                    ),
                    A.xb(13),
                    A.Hc(
                      '\n              ',
                      A.hc(
                        35,
                        13,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.GET_IT_ON_THE'
                      ),
                      ''
                    ),
                    A.xb(4),
                    A.Hc(
                      '\n              ',
                      A.hc(
                        39,
                        15,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.APP_STORE'
                      ),
                      ''
                    ),
                    A.xb(12),
                    A.Hc(
                      '\n              ',
                      A.hc(
                        51,
                        17,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.DOWNLOAD_ON'
                      ),
                      ''
                    ),
                    A.xb(4),
                    A.Hc(
                      '\n              ',
                      A.hc(
                        55,
                        19,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.GOOGLE_PLAY'
                      ),
                      ''
                    ));
              },
              pipes: [T.b],
              styles: ['']
            })),
            B),
          $ = a('iLZQ');
        function q(n, c) {
          if (
            (1 & n &&
              (A.Qb(0, 'div', 7),
              A.Fc(1, '\n      '),
              A.Mb(2, 'dc-feather', 8),
              A.Fc(3, '\n      '),
              A.Qb(4, 'p', 9),
              A.Fc(5),
              A.gc(6, 'translate'),
              A.Pb(),
              A.Fc(7, '\n      '),
              A.Qb(8, 'p'),
              A.Fc(9),
              A.gc(10, 'translate'),
              A.Pb(),
              A.Fc(11, '\n    '),
              A.Pb()),
            2 & n)
          ) {
            var t = c.$implicit;
            A.xb(2),
              A.kc('name', t.icon)('iconClass', 'stroke-primary mb-3'),
              A.xb(3),
              A.Gc(A.hc(6, 4, t.title)),
              A.xb(4),
              A.Hc('\n        ', A.hc(10, 6, t.description), '\n      ');
          }
        }
        var nn,
          cn,
          tn,
          en = function() {
            return {
              icon: 'briefcase',
              title: 'DEMOS.START_UP.WHAT_YOU_GET.BUSINESS_TITLE',
              description: 'DEMOS.START_UP.WHAT_YOU_GET.BUSINESS_DESC'
            };
          },
          an = function() {
            return {
              icon: 'dollar-sign',
              title: 'DEMOS.START_UP.WHAT_YOU_GET.PAYMENTS_TITLE',
              description: 'DEMOS.START_UP.WHAT_YOU_GET.PAYMENTS_DESC'
            };
          },
          bn = function() {
            return {
              icon: 'home',
              title: 'DEMOS.START_UP.WHAT_YOU_GET.SCHEDULES_TITLE',
              description: 'DEMOS.START_UP.WHAT_YOU_GET.SCHEDULES_DESC'
            };
          },
          sn = function() {
            return {
              icon: 'clock',
              title: 'DEMOS.START_UP.WHAT_YOU_GET.SITE_TITLE',
              description: 'DEMOS.START_UP.WHAT_YOU_GET.SAVING_DESC'
            };
          },
          rn = function(n, c, t, e) {
            return [n, c, t, e];
          },
          Fn = [
            {
              path: '',
              component:
                ((nn = (function() {
                  function c(t) {
                    n(this, c), (this.i18nService = t), this.updateSeoTags();
                  }
                  return (
                    t(c, [
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
                            'DEMOS.START_UP.NETWORK_SEARCH_META.TITLE',
                            'DEMOS.START_UP.NETWORK_SEARCH_META.KEYWORDS'
                          );
                        }
                      }
                    ]),
                    c
                  );
                })()),
                (nn.ɵfac = function(n) {
                  return new (n || nn)(A.Lb(P.a));
                }),
                (nn.ɵcmp = A.Fb({
                  type: nn,
                  selectors: [['dc-startup']],
                  decls: 73,
                  vars: 23,
                  consts: [
                    [3, 'img'],
                    [
                      'section-heading',
                      '',
                      1,
                      'section-heading',
                      'text-center'
                    ],
                    [
                      1,
                      'handwritten',
                      'highlight',
                      'font-md',
                      'text-alternate'
                    ],
                    [
                      'href',
                      'https://everythink.ai/app/#/sessions/signup',
                      1,
                      'btn',
                      'btn-darker',
                      'btn-rounded',
                      'mt-4'
                    ],
                    [
                      1,
                      'lead',
                      'text-secondary',
                      'px-6',
                      'col-md-12',
                      'text-center'
                    ],
                    [1, 'row', 'gap-y', 'text-center', 'text-md-left'],
                    ['class', 'col-md-6', 4, 'ngFor', 'ngForOf'],
                    [1, 'col-md-6'],
                    [3, 'name', 'iconClass'],
                    [1, 'my-0', 'bold', 'lead', 'text-dark']
                  ],
                  template: function(n, c) {
                    1 & n &&
                      (A.Mb(0, 'dc-startup-heading'),
                      A.Fc(1, '\n\n'),
                      A.Qb(2, 'dc-big-screen', 0),
                      A.Fc(3, '\n  '),
                      A.Qb(4, 'div', 1),
                      A.Fc(5, '\n    '),
                      A.Qb(6, 'p', 2),
                      A.Fc(7),
                      A.gc(8, 'translate'),
                      A.Pb(),
                      A.Fc(9, '\n\n    '),
                      A.Qb(10, 'a', 3),
                      A.Fc(11),
                      A.gc(12, 'translate'),
                      A.Pb(),
                      A.Fc(13, '\n    '),
                      A.Mb(14, 'br'),
                      A.Fc(15, '\n    '),
                      A.Mb(16, 'br'),
                      A.Fc(17, '\n    '),
                      A.Mb(18, 'br'),
                      A.Fc(19, '\n    '),
                      A.Mb(20, 'br'),
                      A.Fc(21, '\n\n    '),
                      A.Qb(22, 'h2'),
                      A.Fc(23),
                      A.gc(24, 'translate'),
                      A.Pb(),
                      A.Fc(25, '\n    '),
                      A.Qb(26, 'p', 4),
                      A.Fc(27),
                      A.gc(28, 'translate'),
                      A.Pb(),
                      A.Fc(29, '\n  '),
                      A.Pb(),
                      A.Fc(30, '\n  '),
                      A.Qb(31, 'div', 5),
                      A.Fc(32, '\n    '),
                      A.Dc(33, q, 12, 8, 'div', 6),
                      A.Fc(34, '\n  '),
                      A.Pb(),
                      A.Fc(35, '\n'),
                      A.Pb(),
                      A.Fc(36, '\n'),
                      A.Mb(37, 'dc-startup-features'),
                      A.Fc(38, '\n\n'),
                      A.Mb(39, 'dc-startup-why-dashcore'),
                      A.Fc(40, '\n'),
                      A.Mb(41, 'dc-startup-videos'),
                      A.Fc(42, '\n'),
                      A.Mb(43, 'dc-pricing-cards'),
                      A.Fc(44, '\n'),
                      A.Mb(45, 'dc-slider-icons'),
                      A.Fc(46, '\n'),
                      A.Mb(47, 'br'),
                      A.Fc(48, '\n'),
                      A.Mb(49, 'br'),
                      A.Fc(50, '\n'),
                      A.Mb(51, 'br'),
                      A.Fc(52, '\n'),
                      A.Mb(53, 'br'),
                      A.Fc(54, '\n'),
                      A.Mb(55, 'br'),
                      A.Fc(56, '\n'),
                      A.Mb(57, 'br'),
                      A.Fc(58, '\n'),
                      A.Mb(59, 'br'),
                      A.Fc(60, '\n'),
                      A.Mb(61, 'br'),
                      A.Fc(62, '\n'),
                      A.Mb(63, 'br'),
                      A.Fc(64, '\n'),
                      A.Mb(65, 'br'),
                      A.Fc(66, '\n'),
                      A.Mb(67, 'dc-pricing-two-cards'),
                      A.Fc(68, '\n'),
                      A.Mb(69, 'dc-startup-download'),
                      A.Fc(70, '\n'),
                      A.Mb(71, 'dc-footer2'),
                      A.Fc(72, '\n')),
                      2 & n &&
                        (A.xb(2),
                        A.kc('img', 'assets/images/calendar/calendar.png'),
                        A.xb(5),
                        A.Hc(
                          '\n      ',
                          A.hc(8, 6, 'USUAL.START_NOW_BOX.WHY_WAIT'),
                          '\n    '
                        ),
                        A.xb(4),
                        A.Hc(
                          '\n      ',
                          A.hc(12, 8, 'USUAL.START_NOW_BOX.START_NOW'),
                          '\n    '
                        ),
                        A.xb(12),
                        A.Gc(
                          A.hc(
                            24,
                            10,
                            'DEMOS.SAAS.WHAT_YOU_WILL_GET_WITH_EVERTTHINK'
                          )
                        ),
                        A.xb(4),
                        A.Hc(
                          '\n      ',
                          A.hc(
                            28,
                            12,
                            'DEMOS.SAAS.GEOLOCATED_INTELLIGENT_ASSISTANTS'
                          ),
                          '\n    '
                        ),
                        A.xb(6),
                        A.kc(
                          'ngForOf',
                          A.rc(
                            18,
                            rn,
                            A.nc(14, en),
                            A.nc(15, an),
                            A.nc(16, bn),
                            A.nc(17, sn)
                          )
                        ));
                  },
                  directives: [
                    g,
                    _.a,
                    p.j,
                    G,
                    w,
                    K,
                    X.a,
                    z.a,
                    J.a,
                    Z,
                    $.a,
                    D.a
                  ],
                  pipes: [T.b],
                  styles: ['']
                })),
                nn),
              data: { title: Object(P.c)('EveryThink - Social Demo') }
            }
          ],
          En =
            (((cn = function c() {
              n(this, c);
            }).ɵmod = A.Jb({ type: cn })),
            (cn.ɵinj = A.Ib({
              factory: function(n) {
                return new (n || cn)();
              },
              imports: [[d.g.forChild(Fn)], d.g]
            })),
            cn),
          on = a('N7aX'),
          Sn =
            (((tn = function c() {
              n(this, c);
            }).ɵmod = A.Jb({ type: tn })),
            (tn.ɵinj = A.Ib({
              factory: function(n) {
                return new (n || tn)();
              },
              providers: [on.a],
              imports: [
                [s.a, i.a, r.a, F.a, E.a, S.s, o.a, l.a, En, T.a.forChild()]
              ]
            })),
            tn);
      }
    }
  ]);
})();
