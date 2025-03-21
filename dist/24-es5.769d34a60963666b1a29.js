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
          i = a('ofXK');
        function s(n, c) {
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
        function E(n, c) {
          1 & n && (b.Fc(0, '\n          '), b.ic(1, 2), b.Fc(2, '\n        '));
        }
        var o = [[['', 'section-heading', '']], '*', [['', 'images', '']]],
          F = ['[section-heading]', '*', '[images]'],
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
                ngContentSelectors: F,
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
                      (b.jc(o),
                      b.Qb(0, 'section', 0),
                      b.Fc(1, '\n  '),
                      b.Dc(2, s, 4, 4, 'div', 1),
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
                      b.Dc(19, E, 3, 0, 'ng-template', null, 6, b.Ec),
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
                directives: [i.k],
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
            return nn;
          });
        var b,
          i = a('M0ag'),
          s = a('2d4A'),
          r = a('ORAR'),
          E = a('8klf'),
          o = a('M0Rk'),
          F = a('T7/b'),
          S = a('1kSV'),
          T = a('kpBo'),
          l = a('tyNb'),
          d = a('ey9i'),
          _ = a('fXoL'),
          A = a('sYmb'),
          P =
            (((b = (function() {
              function c(t) {
                n(this, c), (this.translate = t);
              }
              return t(c, [{ key: 'ngOnInit', value: function() {} }]), c;
            })()).ɵfac = function(n) {
              return new (n || b)(_.Lb(A.c));
            }),
            (b.ɵcmp = _.Fb({
              type: b,
              selectors: [['dc-startup-heading']],
              decls: 49,
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
                ['src', 'assets/images/drone/drone-detection.png', 'alt', '...']
              ],
              template: function(n, c) {
                1 & n &&
                  (_.Qb(0, 'header', 0),
                  _.Fc(1, '\n  '),
                  _.Qb(2, 'div', 1),
                  _.Fc(3, '\n    '),
                  _.Fc(4, '\n    '),
                  _.ec(),
                  _.Qb(5, 'svg', 2),
                  _.Fc(6, '\n      '),
                  _.Mb(7, 'path', 3),
                  _.Fc(8, '\n    '),
                  _.Pb(),
                  _.Fc(9, '\n  '),
                  _.Pb(),
                  _.Fc(10, '\n\n  '),
                  _.dc(),
                  _.Qb(11, 'div', 4),
                  _.Fc(12, '\n    '),
                  _.Qb(13, 'div', 5),
                  _.Fc(14, '\n      '),
                  _.Qb(15, 'div', 6),
                  _.Fc(16, '\n        '),
                  _.Qb(17, 'h1', 7),
                  _.Fc(18),
                  _.gc(19, 'translate'),
                  _.Qb(20, 'span', 8),
                  _.Fc(21),
                  _.gc(22, 'translate'),
                  _.Pb(),
                  _.Fc(23, '\n        '),
                  _.Pb(),
                  _.Fc(24, '\n        '),
                  _.Qb(25, 'p', 9),
                  _.Fc(26),
                  _.gc(27, 'translate'),
                  _.Pb(),
                  _.Fc(28, '\n\n        '),
                  _.Qb(29, 'a', 10),
                  _.Fc(30),
                  _.gc(31, 'translate'),
                  _.Pb(),
                  _.Fc(32, '\n      '),
                  _.Pb(),
                  _.Fc(33, '\n\n      '),
                  _.Qb(34, 'div', 11),
                  _.Fc(35, '\n        '),
                  _.Qb(36, 'div', 12),
                  _.Fc(37, '\n          '),
                  _.Qb(38, 'div', 13),
                  _.Fc(39, '\n            '),
                  _.Mb(40, 'img', 14),
                  _.Fc(41, '\n          '),
                  _.Pb(),
                  _.Fc(42, '\n\n          '),
                  _.Fc(43, '\n        '),
                  _.Pb(),
                  _.Fc(44, '\n      '),
                  _.Pb(),
                  _.Fc(45, '\n    '),
                  _.Pb(),
                  _.Fc(46, '\n  '),
                  _.Pb(),
                  _.Fc(47, '\n'),
                  _.Pb(),
                  _.Fc(48, '\n')),
                  2 & n &&
                    (_.xb(18),
                    _.Hc(
                      '\n          ',
                      _.hc(
                        19,
                        4,
                        'DEMOS.START_UP.HEADING.DELIVERING_THE_TOOLS'
                      ),
                      '\n          '
                    ),
                    _.xb(3),
                    _.Hc(
                      '\n            ',
                      _.hc(22, 6, 'DEMOS.START_UP.HEADING.YOU_NEED_TO_SUCCEED'),
                      ''
                    ),
                    _.xb(5),
                    _.Hc(
                      '\n          ',
                      _.hc(
                        27,
                        8,
                        'DEMOS.START_UP.HEADING.IT_ALL_BEGINS_BY_CHOSSING'
                      ),
                      '\n        '
                    ),
                    _.xb(4),
                    _.Hc(
                      '\n          ',
                      _.hc(31, 10, 'DEMOS.START_UP.HEADING.TRY_IT_FREE'),
                      ''
                    ));
              },
              pipes: [A.b],
              styles: ['']
            })),
            b),
          g = a('akeW'),
          p = a('ofXK');
        function D(n, c) {
          if (
            (1 & n &&
              (_.Qb(0, 'div', 6),
              _.Fc(1, '\n        '),
              _.Qb(2, 'h5', 7),
              _.Fc(3),
              _.gc(4, 'translate'),
              _.Pb(),
              _.Fc(5, '\n        '),
              _.Qb(6, 'p'),
              _.Fc(7),
              _.gc(8, 'translate'),
              _.Pb(),
              _.Fc(9, '\n      '),
              _.Pb()),
            2 & n)
          ) {
            var t = c.$implicit;
            _.xb(3),
              _.Gc(_.hc(4, 2, t.title)),
              _.xb(4),
              _.Hc('\n          ', _.hc(8, 4, t.desc), '\n        ');
          }
        }
        var O,
          R =
            (((O = (function() {
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
              return new (n || O)(_.Lb(A.c));
            }),
            (O.ɵcmp = _.Fb({
              type: O,
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
                [1, 'bold']
              ],
              template: function(n, c) {
                1 & n &&
                  (_.Qb(0, 'section', 0),
                  _.Fc(1, '\n  '),
                  _.Qb(2, 'div', 1),
                  _.Fc(3, '\n    '),
                  _.Qb(4, 'div', 2),
                  _.Fc(5, '\n      '),
                  _.Qb(6, 'h2', 3),
                  _.Fc(7),
                  _.gc(8, 'translate'),
                  _.Pb(),
                  _.Fc(9, '\n    '),
                  _.Pb(),
                  _.Fc(10, '\n\n    '),
                  _.Qb(11, 'div', 4),
                  _.Fc(12, '\n      '),
                  _.Dc(13, D, 10, 6, 'div', 5),
                  _.Fc(14, '\n    '),
                  _.Pb(),
                  _.Fc(15, '\n  '),
                  _.Pb(),
                  _.Fc(16, '\n'),
                  _.Pb(),
                  _.Fc(17, '\n')),
                  2 & n &&
                    (_.xb(7),
                    _.Hc(
                      '\n        ',
                      _.hc(
                        8,
                        2,
                        'DEMOS.START_UP.FEATURES.WHAT_DASHCORE_CAN_DO'
                      ),
                      '\n      '
                    ),
                    _.xb(6),
                    _.kc('ngForOf', c.elements));
              },
              directives: [p.j],
              pipes: [A.b],
              styles: ['']
            })),
            O);
        function h(n, c) {
          1 & n &&
            (_.Fc(0, '\n            '),
            _.Qb(1, 'span', 8),
            _.Fc(2),
            _.gc(3, 'translate'),
            _.Pb(),
            _.Fc(4, '\n          ')),
            2 & n &&
              (_.xb(2),
              _.Hc(
                '\n              ',
                _.hc(3, 1, 'DEMOS.START_UP.WHY_DASHCORE.DEVELOPERS'),
                '\n            '
              ));
        }
        function u(n, c) {
          1 & n &&
            (_.Fc(0, '\n            '),
            _.Qb(1, 'div', 9),
            _.Fc(2, '\n              '),
            _.Qb(3, 'div', 10),
            _.Fc(4, '\n                '),
            _.Qb(5, 'h2', 11),
            _.Fc(6, '\n                  '),
            _.Qb(7, 'p', 12),
            _.Fc(8),
            _.gc(9, 'translate'),
            _.Qb(10, 'span', 13),
            _.Fc(11),
            _.gc(12, 'translate'),
            _.Pb(),
            _.Fc(13, '\n                  '),
            _.Pb(),
            _.Fc(14, '\n                  '),
            _.Qb(15, 'p', 13),
            _.Fc(16),
            _.gc(17, 'translate'),
            _.Qb(18, 'span', 12),
            _.Fc(19),
            _.gc(20, 'translate'),
            _.Pb(),
            _.Fc(21, '\n                  '),
            _.Pb(),
            _.Fc(22, '\n                  '),
            _.Qb(23, 'p', 13),
            _.Fc(24),
            _.gc(25, 'translate'),
            _.Qb(26, 'span', 12),
            _.Fc(27),
            _.gc(28, 'translate'),
            _.Pb(),
            _.Fc(29, '\n                  '),
            _.Pb(),
            _.Fc(30, '\n                '),
            _.Pb(),
            _.Fc(31, '\n              '),
            _.Pb(),
            _.Fc(32, '\n              '),
            _.Fc(33, '\n            '),
            _.Pb(),
            _.Fc(34, '\n          ')),
            2 & n &&
              (_.xb(8),
              _.Hc(
                '\n                    ',
                _.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS0'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS01')
              ),
              _.xb(5),
              _.Hc(
                '\n                    ',
                _.hc(
                  17,
                  10,
                  'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS1'
                ),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(
                  20,
                  12,
                  'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS11'
                )
              ),
              _.xb(5),
              _.Hc(
                '\n                    ',
                _.hc(
                  25,
                  14,
                  'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS2'
                ),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(
                  28,
                  16,
                  'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS22'
                )
              ));
        }
        function f(n, c) {
          1 & n && (_.Qb(0, 'span', 8), _.Fc(1), _.gc(2, 'translate'), _.Pb()),
            2 & n &&
              (_.xb(1),
              _.Gc(_.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.DESIGNER')));
        }
        function G(n, c) {
          1 & n &&
            (_.Fc(0, '\n            '),
            _.Qb(1, 'div', 9),
            _.Fc(2, '\n              '),
            _.Qb(3, 'div', 14),
            _.Fc(4, '\n                '),
            _.Qb(5, 'h2', 11),
            _.Fc(6, '\n                  '),
            _.Qb(7, 'p', 15),
            _.Fc(8),
            _.gc(9, 'translate'),
            _.Qb(10, 'span', 16),
            _.Fc(11),
            _.gc(12, 'translate'),
            _.Pb(),
            _.Fc(13, '\n                  '),
            _.Pb(),
            _.Fc(14, '\n                  '),
            _.Qb(15, 'p', 16),
            _.Fc(16),
            _.gc(17, 'translate'),
            _.Qb(18, 'span', 15),
            _.Fc(19),
            _.gc(20, 'translate'),
            _.Pb(),
            _.Fc(21, '\n                  '),
            _.Pb(),
            _.Fc(22, '\n                  '),
            _.Qb(23, 'p', 16),
            _.Fc(24),
            _.gc(25, 'translate'),
            _.Qb(26, 'span', 15),
            _.Fc(27),
            _.gc(28, 'translate'),
            _.Pb(),
            _.Fc(29, '\n                  '),
            _.Pb(),
            _.Fc(30, '\n                '),
            _.Pb(),
            _.Fc(31, '\n              '),
            _.Pb(),
            _.Fc(32, '\n              '),
            _.Qb(33, 'div', 14),
            _.Fc(34, '\n                '),
            _.Qb(35, 'figure', 17),
            _.Fc(36, '\n                  '),
            _.Mb(37, 'img', 18),
            _.Fc(38, '\n                '),
            _.Pb(),
            _.Fc(39, '\n              '),
            _.Pb(),
            _.Fc(40, '\n            '),
            _.Pb(),
            _.Fc(41, '\n          ')),
            2 & n &&
              (_.xb(8),
              _.Hc(
                '\n                    ',
                _.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER0'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER01')
              ),
              _.xb(5),
              _.Hc(
                '\n                    ',
                _.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER1'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER11')
              ),
              _.xb(5),
              _.Hc(
                '\n                    ',
                _.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER2'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER22')
              ));
        }
        function H(n, c) {
          1 & n && (_.Qb(0, 'span', 8), _.Fc(1), _.gc(2, 'translate'), _.Pb()),
            2 & n &&
              (_.xb(1),
              _.Gc(_.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.REMINDERS')));
        }
        function M(n, c) {
          1 & n &&
            (_.Fc(0, '\n            '),
            _.Qb(1, 'div', 9),
            _.Fc(2, '\n              '),
            _.Qb(3, 'div', 10),
            _.Fc(4, '\n                '),
            _.Qb(5, 'h2', 11),
            _.Fc(6, '\n                  '),
            _.Qb(7, 'p', 12),
            _.Fc(8),
            _.gc(9, 'translate'),
            _.Qb(10, 'span', 13),
            _.Fc(11),
            _.gc(12, 'translate'),
            _.Pb(),
            _.Fc(13, '\n                  '),
            _.Pb(),
            _.Fc(14, '\n                  '),
            _.Qb(15, 'p', 13),
            _.Fc(16),
            _.gc(17, 'translate'),
            _.Qb(18, 'span', 12),
            _.Fc(19),
            _.gc(20, 'translate'),
            _.Pb(),
            _.Fc(21, '\n                  '),
            _.Pb(),
            _.Fc(22, '\n                  '),
            _.Qb(23, 'p', 13),
            _.Fc(24),
            _.gc(25, 'translate'),
            _.Qb(26, 'span', 12),
            _.Fc(27),
            _.gc(28, 'translate'),
            _.Pb(),
            _.Fc(29, '\n                  '),
            _.Pb(),
            _.Fc(30, '\n                '),
            _.Pb(),
            _.Fc(31, '\n              '),
            _.Pb(),
            _.Fc(32, '\n            '),
            _.Pb(),
            _.Fc(33, '\n          ')),
            2 & n &&
              (_.xb(8),
              _.Hc(
                '\n                    ',
                _.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS0'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS01')
              ),
              _.xb(5),
              _.Hc(
                '\n                    ',
                _.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS1'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS11')
              ),
              _.xb(5),
              _.Hc(
                '\n                    ',
                _.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS2'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS22')
              ));
        }
        function I(n, c) {
          1 & n && (_.Qb(0, 'span', 8), _.Fc(1), _.gc(2, 'translate'), _.Pb()),
            2 & n &&
              (_.xb(1),
              _.Gc(_.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.PAYMENTS')));
        }
        function N(n, c) {
          1 & n &&
            (_.Fc(0, '\n            '),
            _.Qb(1, 'div', 9),
            _.Fc(2, '\n              '),
            _.Qb(3, 'div', 10),
            _.Fc(4, '\n                '),
            _.Qb(5, 'h2', 11),
            _.Fc(6, '\n                  '),
            _.Qb(7, 'p', 12),
            _.Fc(8),
            _.gc(9, 'translate'),
            _.Qb(10, 'span', 13),
            _.Fc(11),
            _.gc(12, 'translate'),
            _.Pb(),
            _.Fc(13, '\n                  '),
            _.Pb(),
            _.Fc(14, '\n                  '),
            _.Qb(15, 'p', 13),
            _.Fc(16),
            _.gc(17, 'translate'),
            _.Qb(18, 'span', 12),
            _.Fc(19),
            _.gc(20, 'translate'),
            _.Pb(),
            _.Fc(21, '\n                  '),
            _.Pb(),
            _.Fc(22, '\n                  '),
            _.Qb(23, 'p', 13),
            _.Fc(24),
            _.gc(25, 'translate'),
            _.Qb(26, 'span', 12),
            _.Fc(27),
            _.gc(28, 'translate'),
            _.Pb(),
            _.Fc(29, '\n                  '),
            _.Pb(),
            _.Fc(30, '\n                '),
            _.Pb(),
            _.Fc(31, '\n              '),
            _.Pb(),
            _.Fc(32, '\n            '),
            _.Pb(),
            _.Fc(33, '\n          ')),
            2 & n &&
              (_.xb(8),
              _.Hc(
                '\n                    ',
                _.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS0'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS01')
              ),
              _.xb(5),
              _.Hc(
                '\n                    ',
                _.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS1'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS11')
              ),
              _.xb(5),
              _.Hc(
                '\n                    ',
                _.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS2'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS22')
              ));
        }
        function Q(n, c) {
          1 & n && (_.Qb(0, 'span', 8), _.Fc(1), _.gc(2, 'translate'), _.Pb()),
            2 & n &&
              (_.xb(1), _.Gc(_.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.PAGE')));
        }
        function v(n, c) {
          1 & n &&
            (_.Fc(0, '\n            '),
            _.Qb(1, 'div', 9),
            _.Fc(2, '\n              '),
            _.Qb(3, 'div', 10),
            _.Fc(4, '\n                '),
            _.Qb(5, 'h2', 11),
            _.Fc(6, '\n                  '),
            _.Qb(7, 'p', 12),
            _.Fc(8),
            _.gc(9, 'translate'),
            _.Qb(10, 'span', 13),
            _.Fc(11),
            _.gc(12, 'translate'),
            _.Pb(),
            _.Fc(13, '\n                  '),
            _.Pb(),
            _.Fc(14, '\n                  '),
            _.Qb(15, 'p', 13),
            _.Fc(16),
            _.gc(17, 'translate'),
            _.Qb(18, 'span', 12),
            _.Fc(19),
            _.gc(20, 'translate'),
            _.Pb(),
            _.Fc(21, '\n                  '),
            _.Pb(),
            _.Fc(22, '\n                  '),
            _.Qb(23, 'p', 13),
            _.Fc(24),
            _.gc(25, 'translate'),
            _.Qb(26, 'span', 12),
            _.Fc(27),
            _.gc(28, 'translate'),
            _.Pb(),
            _.Fc(29, '\n                  '),
            _.Pb(),
            _.Fc(30, '\n                '),
            _.Pb(),
            _.Fc(31, '\n              '),
            _.Pb(),
            _.Fc(32, '\n            '),
            _.Pb(),
            _.Fc(33, '\n          ')),
            2 & n &&
              (_.xb(8),
              _.Hc(
                '\n                    ',
                _.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE0'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(_.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE01')),
              _.xb(5),
              _.Hc(
                '\n                    ',
                _.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE1'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(_.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE11')),
              _.xb(5),
              _.Hc(
                '\n                    ',
                _.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE2'),
                '\n                    '
              ),
              _.xb(3),
              _.Gc(
                _.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE22')
              ));
        }
        var U,
          x =
            (((U = (function() {
              function c(t) {
                n(this, c), (this.translate = t);
              }
              return t(c, [{ key: 'ngOnInit', value: function() {} }]), c;
            })()).ɵfac = function(n) {
              return new (n || U)(_.Lb(A.c));
            }),
            (U.ɵcmp = _.Fb({
              type: U,
              selectors: [['dc-startup-why-dashcore']],
              decls: 58,
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
                [1, 'col-lg-12'],
                [1, 'bold', 'mb-4'],
                [
                  2,
                  'color',
                  '#212121',
                  'font-size',
                  '25px',
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
                  '25px'
                ],
                [1, 'col-lg-6'],
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
                  'assets/images/calendar/Imagen 1.png',
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
                  (_.Qb(0, 'section', 0),
                  _.Fc(1, '\n  '),
                  _.Qb(2, 'div', 1),
                  _.Fc(3, '\n    '),
                  _.Qb(4, 'div', 2),
                  _.Fc(5, '\n      '),
                  _.Qb(6, 'h2'),
                  _.Fc(7),
                  _.gc(8, 'translate'),
                  _.Pb(),
                  _.Fc(9, '\n      '),
                  _.Qb(10, 'p', 3),
                  _.Fc(11),
                  _.gc(12, 'translate'),
                  _.Pb(),
                  _.Fc(13, '\n    '),
                  _.Pb(),
                  _.Fc(14, '\n\n    '),
                  _.Qb(15, 'div', 4),
                  _.Fc(16, '\n      '),
                  _.Qb(17, 'ngb-tabset', 5),
                  _.Fc(18, '\n        '),
                  _.Qb(19, 'ngb-tab'),
                  _.Fc(20, '\n          '),
                  _.Dc(21, h, 5, 3, 'ng-template', 6),
                  _.Fc(22, '\n          '),
                  _.Dc(23, u, 35, 18, 'ng-template', 7),
                  _.Fc(24, '\n        '),
                  _.Pb(),
                  _.Fc(25, '\n\n        '),
                  _.Qb(26, 'ngb-tab'),
                  _.Fc(27, '\n          '),
                  _.Dc(28, f, 3, 3, 'ng-template', 6),
                  _.Fc(29, '\n          '),
                  _.Dc(30, G, 42, 18, 'ng-template', 7),
                  _.Fc(31, '\n        '),
                  _.Pb(),
                  _.Fc(32, '\n\n        '),
                  _.Qb(33, 'ngb-tab'),
                  _.Fc(34, '\n          '),
                  _.Dc(35, H, 3, 3, 'ng-template', 6),
                  _.Fc(36, '\n          '),
                  _.Dc(37, M, 34, 18, 'ng-template', 7),
                  _.Fc(38, '\n        '),
                  _.Pb(),
                  _.Fc(39, '\n        '),
                  _.Qb(40, 'ngb-tab'),
                  _.Fc(41, '\n          '),
                  _.Dc(42, I, 3, 3, 'ng-template', 6),
                  _.Fc(43, '\n          '),
                  _.Dc(44, N, 34, 18, 'ng-template', 7),
                  _.Fc(45, '\n        '),
                  _.Pb(),
                  _.Fc(46, '\n\n        '),
                  _.Qb(47, 'ngb-tab'),
                  _.Fc(48, '\n          '),
                  _.Dc(49, Q, 3, 3, 'ng-template', 6),
                  _.Fc(50, '\n          '),
                  _.Dc(51, v, 34, 18, 'ng-template', 7),
                  _.Fc(52, '\n        '),
                  _.Pb(),
                  _.Fc(53, '\n      '),
                  _.Pb(),
                  _.Fc(54, '\n    '),
                  _.Pb(),
                  _.Fc(55, '\n  '),
                  _.Pb(),
                  _.Fc(56, '\n'),
                  _.Pb(),
                  _.Fc(57, '\n')),
                  2 & n &&
                    (_.xb(7),
                    _.Hc(
                      '\n        ',
                      _.hc(
                        8,
                        3,
                        'DEMOS.START_UP.WHY_DASHCORE.WHY_DASHCORE_TEMPLATE'
                      ),
                      '\n      '
                    ),
                    _.xb(4),
                    _.Hc(
                      '\n        ',
                      _.hc(12, 5, 'DEMOS.START_UP.WHY_DASHCORE.WHEN_LOOKING'),
                      '\n      '
                    ),
                    _.xb(6),
                    _.kc('destroyOnHide', !1));
              },
              directives: [S.r, S.o, S.q, S.p],
              pipes: [A.b],
              styles: ['']
            })),
            U),
          m = a('u3Pa'),
          C = a('AL06');
        function Y(n, c) {
          if (
            (1 & n &&
              (_.Qb(0, 'div', 7),
              _.Fc(1, '\n        '),
              _.Qb(2, 'div', 8),
              _.Fc(3, '\n          '),
              _.Qb(4, 'dc-modal-video', 9),
              _.Fc(5, '\n            '),
              _.Qb(6, 'div', 10),
              _.Fc(7, '\n              '),
              _.Qb(8, 'div', 11),
              _.Fc(9, '\n                '),
              _.Mb(10, 'dc-feather', 12),
              _.Fc(11, '\n              '),
              _.Pb(),
              _.Fc(12, '\n            '),
              _.Pb(),
              _.Fc(13, '\n          '),
              _.Pb(),
              _.Fc(14, '\n\n          '),
              _.Qb(15, 'div', 13),
              _.Fc(16, '\n            '),
              _.Qb(17, 'h4', 14),
              _.Fc(18),
              _.gc(19, 'translate'),
              _.Pb(),
              _.Fc(20, '\n\n            '),
              _.Qb(21, 'p', 15),
              _.Fc(22),
              _.gc(23, 'translate'),
              _.Pb(),
              _.Fc(24, '\n          '),
              _.Pb(),
              _.Fc(25, '\n        '),
              _.Pb(),
              _.Fc(26, '\n      '),
              _.Pb()),
            2 & n)
          ) {
            var t = c.$implicit;
            _.xb(4),
              _.kc('identifier', 'myModal')('videoId', t.videoId),
              _.xb(2),
              _.Cc(
                'background-image',
                'url(assets/images/drone/' + t.gravity + ')'
              ),
              _.xb(4),
              _.kc('name', 'play')('iconClass', 'stroke-contrast'),
              _.xb(8),
              _.Gc(_.hc(19, 8, t.title)),
              _.xb(4),
              _.Hc(
                '\n              ',
                _.hc(23, 10, t.description),
                '.\n            '
              );
          }
        }
        var y,
          W =
            (((y = (function() {
              function c(t) {
                n(this, c),
                  (this.translate = t),
                  (this.posts = [
                    {
                      gravity: '3.png',
                      title: 'DEMOS.START_UP.VIDEOs.1_TITLE',
                      description: 'DEMOS.START_UP.VIDEOs.1_DESC',
                      videoId: '_VArFyZxGzg'
                    },
                    {
                      gravity: '1.png',
                      title: 'DEMOS.START_UP.VIDEOs.2_TITLE',
                      description: 'DEMOS.START_UP.VIDEOs.2_DESC',
                      videoId: 'elysFgtMrPY'
                    },
                    {
                      gravity: '2.png',
                      title: 'DEMOS.START_UP.VIDEOs.3_TITLE',
                      description: 'DEMOS.START_UP.VIDEOs.3_DESC',
                      videoId: 'a4Z_PQ99lAU'
                    }
                  ]);
              }
              return t(c, [{ key: 'ngOnInit', value: function() {} }]), c;
            })()).ɵfac = function(n) {
              return new (n || y)(_.Lb(A.c));
            }),
            (y.ɵcmp = _.Fb({
              type: y,
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
                  (_.Fc(0, '\n'),
                  _.Qb(1, 'section', 0),
                  _.Fc(2, '\n  '),
                  _.Qb(3, 'div', 1),
                  _.Fc(4, '\n    '),
                  _.Qb(5, 'div', 2),
                  _.Fc(6, '\n      '),
                  _.Qb(7, 'h2', 3),
                  _.Fc(8),
                  _.gc(9, 'translate'),
                  _.Pb(),
                  _.Fc(10, '\n      '),
                  _.Qb(11, 'p', 4),
                  _.Fc(12),
                  _.gc(13, 'translate'),
                  _.Pb(),
                  _.Fc(14, '\n    '),
                  _.Pb(),
                  _.Fc(15, '\n\n    '),
                  _.Qb(16, 'div', 5),
                  _.Fc(17, '\n      '),
                  _.Dc(18, Y, 27, 12, 'div', 6),
                  _.Fc(19, '\n    '),
                  _.Pb(),
                  _.Fc(20, '\n  '),
                  _.Pb(),
                  _.Fc(21, '\n'),
                  _.Pb(),
                  _.Fc(22, '\n')),
                  2 & n &&
                    (_.xb(8),
                    _.Hc(
                      '\n        ',
                      _.hc(9, 3, 'DEMOS.START_UP.VIDEOs.HOW_TO_VIDEO'),
                      '\n      '
                    ),
                    _.xb(4),
                    _.Hc(
                      '\n        ',
                      _.hc(13, 5, 'DEMOS.START_UP.VIDEOs.TAKE_A_LOOKING_AT'),
                      '\n      '
                    ),
                    _.xb(6),
                    _.kc('ngForOf', c.posts));
              },
              directives: [p.j, m.a, C.a],
              pipes: [A.b],
              styles: ['']
            })),
            y),
          w = a('iLZQ');
        function L(n, c) {
          if (
            (1 & n &&
              (_.Qb(0, 'div', 7),
              _.Fc(1, '\n      '),
              _.Qb(2, 'p', 8),
              _.Fc(3),
              _.gc(4, 'translate'),
              _.Pb(),
              _.Fc(5, '\n      '),
              _.Qb(6, 'p'),
              _.Fc(7),
              _.gc(8, 'translate'),
              _.Pb(),
              _.Fc(9, '\n    '),
              _.Pb()),
            2 & n)
          ) {
            var t = c.$implicit;
            _.xb(3),
              _.Gc(_.hc(4, 2, t.title)),
              _.xb(4),
              _.Hc('\n        ', _.hc(8, 4, t.description), '\n      ');
          }
        }
        var k,
          V,
          B,
          j = function() {
            return {
              icon: 'briefcase',
              title: 'DEMOS.START_UP.WHAT_YOU_GET.BUSINESS_TITLE',
              description: 'DEMOS.START_UP.WHAT_YOU_GET.BUSINESS_DESC'
            };
          },
          K = function() {
            return {
              icon: 'dollar-sign',
              title: 'DEMOS.START_UP.WHAT_YOU_GET.PAYMENTS_TITLE',
              description: 'DEMOS.START_UP.WHAT_YOU_GET.PAYMENTS_DESC'
            };
          },
          z = function() {
            return {
              icon: 'home',
              title: 'DEMOS.START_UP.WHAT_YOU_GET.SCHEDULES_TITLE',
              description: 'DEMOS.START_UP.WHAT_YOU_GET.SCHEDULES_DESC'
            };
          },
          X = function() {
            return {
              icon: 'clock',
              title: 'DEMOS.START_UP.WHAT_YOU_GET.SITE_TITLE',
              description: 'DEMOS.START_UP.WHAT_YOU_GET.SAVING_DESC'
            };
          },
          J = function(n, c, t, e) {
            return [n, c, t, e];
          },
          Z = [
            {
              path: '',
              component:
                ((k = (function() {
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
                (k.ɵfac = function(n) {
                  return new (n || k)(_.Lb(d.a));
                }),
                (k.ɵcmp = _.Fb({
                  type: k,
                  selectors: [['dc-startup']],
                  decls: 63,
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
                    [1, 'my-0', 'bold', 'lead', 'text-dark']
                  ],
                  template: function(n, c) {
                    1 & n &&
                      (_.Mb(0, 'dc-startup-heading'),
                      _.Fc(1, '\n\n'),
                      _.Qb(2, 'dc-big-screen', 0),
                      _.Fc(3, '\n  '),
                      _.Qb(4, 'div', 1),
                      _.Fc(5, '\n    '),
                      _.Qb(6, 'p', 2),
                      _.Fc(7),
                      _.gc(8, 'translate'),
                      _.Pb(),
                      _.Fc(9, '\n\n    '),
                      _.Qb(10, 'a', 3),
                      _.Fc(11),
                      _.gc(12, 'translate'),
                      _.Pb(),
                      _.Fc(13, '\n    '),
                      _.Mb(14, 'br'),
                      _.Fc(15, '\n    '),
                      _.Mb(16, 'br'),
                      _.Fc(17, '\n    '),
                      _.Mb(18, 'br'),
                      _.Fc(19, '\n    '),
                      _.Mb(20, 'br'),
                      _.Fc(21, '\n\n    '),
                      _.Qb(22, 'h2'),
                      _.Fc(23),
                      _.gc(24, 'translate'),
                      _.Pb(),
                      _.Fc(25, '\n    '),
                      _.Qb(26, 'p', 4),
                      _.Fc(27),
                      _.gc(28, 'translate'),
                      _.Pb(),
                      _.Fc(29, '\n  '),
                      _.Pb(),
                      _.Fc(30, '\n  '),
                      _.Qb(31, 'div', 5),
                      _.Fc(32, '\n    '),
                      _.Dc(33, L, 10, 6, 'div', 6),
                      _.Fc(34, '\n  '),
                      _.Pb(),
                      _.Fc(35, '\n'),
                      _.Pb(),
                      _.Fc(36, '\n'),
                      _.Mb(37, 'dc-startup-features'),
                      _.Fc(38, '\n\n'),
                      _.Mb(39, 'dc-startup-why-dashcore'),
                      _.Fc(40, '\n'),
                      _.Mb(41, 'dc-startup-videos'),
                      _.Fc(42, '\n'),
                      _.Fc(43, '\n'),
                      _.Mb(44, 'br'),
                      _.Fc(45, '\n'),
                      _.Mb(46, 'br'),
                      _.Fc(47, '\n'),
                      _.Mb(48, 'br'),
                      _.Fc(49, '\n'),
                      _.Mb(50, 'br'),
                      _.Fc(51, '\n'),
                      _.Mb(52, 'br'),
                      _.Fc(53, '\n'),
                      _.Mb(54, 'br'),
                      _.Fc(55, '\n'),
                      _.Mb(56, 'br'),
                      _.Fc(57, '\n'),
                      _.Mb(58, 'br'),
                      _.Fc(59, '\n'),
                      _.Fc(60, '\n'),
                      _.Mb(61, 'dc-footer2'),
                      _.Fc(62, '\n')),
                      2 & n &&
                        (_.xb(2),
                        _.kc('img', 'assets/images/drone/drone-1.png'),
                        _.xb(5),
                        _.Hc(
                          '\n      ',
                          _.hc(8, 6, 'USUAL.START_NOW_BOX.WHY_WAIT'),
                          '\n    '
                        ),
                        _.xb(4),
                        _.Hc(
                          '\n      ',
                          _.hc(12, 8, 'USUAL.START_NOW_BOX.START_NOW'),
                          '\n    '
                        ),
                        _.xb(12),
                        _.Hc(
                          '\n      ',
                          _.hc(
                            24,
                            10,
                            'DEMOS.START_UP.WHAT_YOU_GET.WHAT_YOU_WILL_GET_WITH_EVERTTHINK'
                          ),
                          '\n    '
                        ),
                        _.xb(4),
                        _.Hc(
                          '\n      ',
                          _.hc(
                            28,
                            12,
                            'DEMOS.START_UP.WHAT_YOU_GET.GEOLOCATED_INTELLIGENT_ASSISTANTS'
                          ),
                          '\n    '
                        ),
                        _.xb(6),
                        _.kc(
                          'ngForOf',
                          _.rc(
                            18,
                            J,
                            _.nc(14, j),
                            _.nc(15, K),
                            _.nc(16, z),
                            _.nc(17, X)
                          )
                        ));
                  },
                  directives: [P, g.a, p.j, R, x, W, w.a],
                  pipes: [A.b],
                  styles: ['']
                })),
                k),
              data: { title: Object(d.c)('EveryThink - Social Demo') }
            }
          ],
          $ =
            (((V = function c() {
              n(this, c);
            }).ɵmod = _.Jb({ type: V })),
            (V.ɵinj = _.Ib({
              factory: function(n) {
                return new (n || V)();
              },
              imports: [[l.g.forChild(Z)], l.g]
            })),
            V),
          q = a('N7aX'),
          nn =
            (((B = function c() {
              n(this, c);
            }).ɵmod = _.Jb({ type: B })),
            (B.ɵinj = _.Ib({
              factory: function(n) {
                return new (n || B)();
              },
              providers: [q.a],
              imports: [
                [i.a, s.a, r.a, E.a, o.a, S.s, F.a, T.a, $, A.a.forChild()]
              ]
            })),
            B);
      }
    }
  ]);
})();
