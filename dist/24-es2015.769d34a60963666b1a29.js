(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    akeW: function(c, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return o;
      });
      var e = t('fXoL'),
        b = t('ofXK');
      function a(c, n) {
        if (
          (1 & c &&
            (e.Qb(0, 'div', 7),
            e.Fc(1, '\n    '),
            e.Mb(2, 'img', 8),
            e.Fc(3, '\n  '),
            e.Pb()),
          2 & c)
        ) {
          const c = e.fc();
          e.xb(2),
            e.Ab(
              'absolute top h-100 ',
              c.isScreenLeft() ? 'left' : 'right',
              ''
            ),
            e.kc('src', c.imgShape, e.yc);
        }
      }
      function s(c, n) {
        if ((1 & c && e.Mb(0, 'img', 9), 2 & c)) {
          const c = e.fc();
          e.kc('src', c.img, e.yc),
            e.yb('data-aos', 'fade-' + (c.isScreenLeft() ? 'right' : 'left'));
        }
      }
      function r(c, n) {
        1 & c && (e.Fc(0, '\n          '), e.ic(1, 2), e.Fc(2, '\n        '));
      }
      const i = [[['', 'section-heading', '']], '*', [['', 'images', '']]],
        E = ['[section-heading]', '*', '[images]'];
      let o = (() => {
        class c {
          constructor() {}
          ngOnInit() {}
          isScreenLeft() {
            return 'left' === this.screenPos;
          }
        }
        return (
          (c.ɵfac = function(n) {
            return new (n || c)();
          }),
          (c.ɵcmp = e.Fb({
            type: c,
            selectors: [['dc-big-screen']],
            inputs: {
              img: 'img',
              screenPos: 'screenPos',
              imgShape: 'imgShape'
            },
            ngContentSelectors: E,
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
            template: function(c, n) {
              if (
                (1 & c &&
                  (e.jc(i),
                  e.Qb(0, 'section', 0),
                  e.Fc(1, '\n  '),
                  e.Dc(2, a, 4, 4, 'div', 1),
                  e.Fc(3, '\n\n  '),
                  e.Qb(4, 'div', 2),
                  e.Fc(5, '\n    '),
                  e.ic(6),
                  e.Fc(7, '\n\n    '),
                  e.Qb(8, 'div', 3),
                  e.Fc(9, '\n      '),
                  e.Qb(10, 'div', 4),
                  e.Fc(11, '\n        '),
                  e.ic(12, 1),
                  e.Fc(13, '\n      '),
                  e.Pb(),
                  e.Fc(14, '\n\n      '),
                  e.Qb(15, 'div'),
                  e.Fc(16, '\n        '),
                  e.Dc(17, s, 1, 2, 'img', 5),
                  e.Fc(18, '\n\n        '),
                  e.Dc(19, r, 3, 0, 'ng-template', null, 6, e.Ec),
                  e.Fc(21, '\n      '),
                  e.Pb(),
                  e.Fc(22, '\n    '),
                  e.Pb(),
                  e.Fc(23, '\n  '),
                  e.Pb(),
                  e.Fc(24, '\n'),
                  e.Pb(),
                  e.Fc(25, '\n')),
                2 & c)
              ) {
                const c = e.tc(20);
                e.xb(2),
                  e.kc('ngIf', n.imgShape),
                  e.xb(8),
                  e.Db('order-md-last', n.isScreenLeft()),
                  e.xb(5),
                  e.Ab('col-12 col-lg-6 p', n.isScreenLeft() ? 'l' : 'r', '-0'),
                  e.xb(2),
                  e.kc('ngIf', n.img)('ngIfElse', c);
              }
            },
            directives: [b.k],
            styles: ['']
          })),
          c
        );
      })();
    },
    koon: function(c, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'StartupModule', function() {
          return B;
        });
      var e = t('M0ag'),
        b = t('2d4A'),
        a = t('ORAR'),
        s = t('8klf'),
        r = t('M0Rk'),
        i = t('T7/b'),
        E = t('1kSV'),
        o = t('kpBo'),
        F = t('tyNb'),
        S = t('ey9i'),
        T = t('fXoL'),
        l = t('sYmb');
      let d = (() => {
        class c {
          constructor(c) {
            this.translate = c;
          }
          ngOnInit() {}
        }
        return (
          (c.ɵfac = function(n) {
            return new (n || c)(T.Lb(l.c));
          }),
          (c.ɵcmp = T.Fb({
            type: c,
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
            template: function(c, n) {
              1 & c &&
                (T.Qb(0, 'header', 0),
                T.Fc(1, '\n  '),
                T.Qb(2, 'div', 1),
                T.Fc(3, '\n    '),
                T.Fc(4, '\n    '),
                T.ec(),
                T.Qb(5, 'svg', 2),
                T.Fc(6, '\n      '),
                T.Mb(7, 'path', 3),
                T.Fc(8, '\n    '),
                T.Pb(),
                T.Fc(9, '\n  '),
                T.Pb(),
                T.Fc(10, '\n\n  '),
                T.dc(),
                T.Qb(11, 'div', 4),
                T.Fc(12, '\n    '),
                T.Qb(13, 'div', 5),
                T.Fc(14, '\n      '),
                T.Qb(15, 'div', 6),
                T.Fc(16, '\n        '),
                T.Qb(17, 'h1', 7),
                T.Fc(18),
                T.gc(19, 'translate'),
                T.Qb(20, 'span', 8),
                T.Fc(21),
                T.gc(22, 'translate'),
                T.Pb(),
                T.Fc(23, '\n        '),
                T.Pb(),
                T.Fc(24, '\n        '),
                T.Qb(25, 'p', 9),
                T.Fc(26),
                T.gc(27, 'translate'),
                T.Pb(),
                T.Fc(28, '\n\n        '),
                T.Qb(29, 'a', 10),
                T.Fc(30),
                T.gc(31, 'translate'),
                T.Pb(),
                T.Fc(32, '\n      '),
                T.Pb(),
                T.Fc(33, '\n\n      '),
                T.Qb(34, 'div', 11),
                T.Fc(35, '\n        '),
                T.Qb(36, 'div', 12),
                T.Fc(37, '\n          '),
                T.Qb(38, 'div', 13),
                T.Fc(39, '\n            '),
                T.Mb(40, 'img', 14),
                T.Fc(41, '\n          '),
                T.Pb(),
                T.Fc(42, '\n\n          '),
                T.Fc(43, '\n        '),
                T.Pb(),
                T.Fc(44, '\n      '),
                T.Pb(),
                T.Fc(45, '\n    '),
                T.Pb(),
                T.Fc(46, '\n  '),
                T.Pb(),
                T.Fc(47, '\n'),
                T.Pb(),
                T.Fc(48, '\n')),
                2 & c &&
                  (T.xb(18),
                  T.Hc(
                    '\n          ',
                    T.hc(19, 4, 'DEMOS.START_UP.HEADING.DELIVERING_THE_TOOLS'),
                    '\n          '
                  ),
                  T.xb(3),
                  T.Hc(
                    '\n            ',
                    T.hc(22, 6, 'DEMOS.START_UP.HEADING.YOU_NEED_TO_SUCCEED'),
                    ''
                  ),
                  T.xb(5),
                  T.Hc(
                    '\n          ',
                    T.hc(
                      27,
                      8,
                      'DEMOS.START_UP.HEADING.IT_ALL_BEGINS_BY_CHOSSING'
                    ),
                    '\n        '
                  ),
                  T.xb(4),
                  T.Hc(
                    '\n          ',
                    T.hc(31, 10, 'DEMOS.START_UP.HEADING.TRY_IT_FREE'),
                    ''
                  ));
            },
            pipes: [l.b],
            styles: ['']
          })),
          c
        );
      })();
      var _ = t('akeW'),
        A = t('ofXK');
      function P(c, n) {
        if (
          (1 & c &&
            (T.Qb(0, 'div', 6),
            T.Fc(1, '\n        '),
            T.Qb(2, 'h5', 7),
            T.Fc(3),
            T.gc(4, 'translate'),
            T.Pb(),
            T.Fc(5, '\n        '),
            T.Qb(6, 'p'),
            T.Fc(7),
            T.gc(8, 'translate'),
            T.Pb(),
            T.Fc(9, '\n      '),
            T.Pb()),
          2 & c)
        ) {
          const c = n.$implicit;
          T.xb(3),
            T.Gc(T.hc(4, 2, c.title)),
            T.xb(4),
            T.Hc('\n          ', T.hc(8, 4, c.desc), '\n        ');
        }
      }
      let g = (() => {
        class c {
          constructor(c) {
            (this.translate = c),
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
          ngOnInit() {}
        }
        return (
          (c.ɵfac = function(n) {
            return new (n || c)(T.Lb(l.c));
          }),
          (c.ɵcmp = T.Fb({
            type: c,
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
            template: function(c, n) {
              1 & c &&
                (T.Qb(0, 'section', 0),
                T.Fc(1, '\n  '),
                T.Qb(2, 'div', 1),
                T.Fc(3, '\n    '),
                T.Qb(4, 'div', 2),
                T.Fc(5, '\n      '),
                T.Qb(6, 'h2', 3),
                T.Fc(7),
                T.gc(8, 'translate'),
                T.Pb(),
                T.Fc(9, '\n    '),
                T.Pb(),
                T.Fc(10, '\n\n    '),
                T.Qb(11, 'div', 4),
                T.Fc(12, '\n      '),
                T.Dc(13, P, 10, 6, 'div', 5),
                T.Fc(14, '\n    '),
                T.Pb(),
                T.Fc(15, '\n  '),
                T.Pb(),
                T.Fc(16, '\n'),
                T.Pb(),
                T.Fc(17, '\n')),
                2 & c &&
                  (T.xb(7),
                  T.Hc(
                    '\n        ',
                    T.hc(8, 2, 'DEMOS.START_UP.FEATURES.WHAT_DASHCORE_CAN_DO'),
                    '\n      '
                  ),
                  T.xb(6),
                  T.kc('ngForOf', n.elements));
            },
            directives: [A.j],
            pipes: [l.b],
            styles: ['']
          })),
          c
        );
      })();
      function p(c, n) {
        1 & c &&
          (T.Fc(0, '\n            '),
          T.Qb(1, 'span', 8),
          T.Fc(2),
          T.gc(3, 'translate'),
          T.Pb(),
          T.Fc(4, '\n          ')),
          2 & c &&
            (T.xb(2),
            T.Hc(
              '\n              ',
              T.hc(3, 1, 'DEMOS.START_UP.WHY_DASHCORE.DEVELOPERS'),
              '\n            '
            ));
      }
      function D(c, n) {
        1 & c &&
          (T.Fc(0, '\n            '),
          T.Qb(1, 'div', 9),
          T.Fc(2, '\n              '),
          T.Qb(3, 'div', 10),
          T.Fc(4, '\n                '),
          T.Qb(5, 'h2', 11),
          T.Fc(6, '\n                  '),
          T.Qb(7, 'p', 12),
          T.Fc(8),
          T.gc(9, 'translate'),
          T.Qb(10, 'span', 13),
          T.Fc(11),
          T.gc(12, 'translate'),
          T.Pb(),
          T.Fc(13, '\n                  '),
          T.Pb(),
          T.Fc(14, '\n                  '),
          T.Qb(15, 'p', 13),
          T.Fc(16),
          T.gc(17, 'translate'),
          T.Qb(18, 'span', 12),
          T.Fc(19),
          T.gc(20, 'translate'),
          T.Pb(),
          T.Fc(21, '\n                  '),
          T.Pb(),
          T.Fc(22, '\n                  '),
          T.Qb(23, 'p', 13),
          T.Fc(24),
          T.gc(25, 'translate'),
          T.Qb(26, 'span', 12),
          T.Fc(27),
          T.gc(28, 'translate'),
          T.Pb(),
          T.Fc(29, '\n                  '),
          T.Pb(),
          T.Fc(30, '\n                '),
          T.Pb(),
          T.Fc(31, '\n              '),
          T.Pb(),
          T.Fc(32, '\n              '),
          T.Fc(33, '\n            '),
          T.Pb(),
          T.Fc(34, '\n          ')),
          2 & c &&
            (T.xb(8),
            T.Hc(
              '\n                    ',
              T.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS0'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(
              T.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS01')
            ),
            T.xb(5),
            T.Hc(
              '\n                    ',
              T.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS1'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(
              T.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS11')
            ),
            T.xb(5),
            T.Hc(
              '\n                    ',
              T.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS2'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(
              T.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS22')
            ));
      }
      function O(c, n) {
        1 & c && (T.Qb(0, 'span', 8), T.Fc(1), T.gc(2, 'translate'), T.Pb()),
          2 & c &&
            (T.xb(1), T.Gc(T.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.DESIGNER')));
      }
      function R(c, n) {
        1 & c &&
          (T.Fc(0, '\n            '),
          T.Qb(1, 'div', 9),
          T.Fc(2, '\n              '),
          T.Qb(3, 'div', 14),
          T.Fc(4, '\n                '),
          T.Qb(5, 'h2', 11),
          T.Fc(6, '\n                  '),
          T.Qb(7, 'p', 15),
          T.Fc(8),
          T.gc(9, 'translate'),
          T.Qb(10, 'span', 16),
          T.Fc(11),
          T.gc(12, 'translate'),
          T.Pb(),
          T.Fc(13, '\n                  '),
          T.Pb(),
          T.Fc(14, '\n                  '),
          T.Qb(15, 'p', 16),
          T.Fc(16),
          T.gc(17, 'translate'),
          T.Qb(18, 'span', 15),
          T.Fc(19),
          T.gc(20, 'translate'),
          T.Pb(),
          T.Fc(21, '\n                  '),
          T.Pb(),
          T.Fc(22, '\n                  '),
          T.Qb(23, 'p', 16),
          T.Fc(24),
          T.gc(25, 'translate'),
          T.Qb(26, 'span', 15),
          T.Fc(27),
          T.gc(28, 'translate'),
          T.Pb(),
          T.Fc(29, '\n                  '),
          T.Pb(),
          T.Fc(30, '\n                '),
          T.Pb(),
          T.Fc(31, '\n              '),
          T.Pb(),
          T.Fc(32, '\n              '),
          T.Qb(33, 'div', 14),
          T.Fc(34, '\n                '),
          T.Qb(35, 'figure', 17),
          T.Fc(36, '\n                  '),
          T.Mb(37, 'img', 18),
          T.Fc(38, '\n                '),
          T.Pb(),
          T.Fc(39, '\n              '),
          T.Pb(),
          T.Fc(40, '\n            '),
          T.Pb(),
          T.Fc(41, '\n          ')),
          2 & c &&
            (T.xb(8),
            T.Hc(
              '\n                    ',
              T.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER0'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(
              T.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER01')
            ),
            T.xb(5),
            T.Hc(
              '\n                    ',
              T.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER1'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(
              T.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER11')
            ),
            T.xb(5),
            T.Hc(
              '\n                    ',
              T.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER2'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(
              T.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER22')
            ));
      }
      function G(c, n) {
        1 & c && (T.Qb(0, 'span', 8), T.Fc(1), T.gc(2, 'translate'), T.Pb()),
          2 & c &&
            (T.xb(1),
            T.Gc(T.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.REMINDERS')));
      }
      function h(c, n) {
        1 & c &&
          (T.Fc(0, '\n            '),
          T.Qb(1, 'div', 9),
          T.Fc(2, '\n              '),
          T.Qb(3, 'div', 10),
          T.Fc(4, '\n                '),
          T.Qb(5, 'h2', 11),
          T.Fc(6, '\n                  '),
          T.Qb(7, 'p', 12),
          T.Fc(8),
          T.gc(9, 'translate'),
          T.Qb(10, 'span', 13),
          T.Fc(11),
          T.gc(12, 'translate'),
          T.Pb(),
          T.Fc(13, '\n                  '),
          T.Pb(),
          T.Fc(14, '\n                  '),
          T.Qb(15, 'p', 13),
          T.Fc(16),
          T.gc(17, 'translate'),
          T.Qb(18, 'span', 12),
          T.Fc(19),
          T.gc(20, 'translate'),
          T.Pb(),
          T.Fc(21, '\n                  '),
          T.Pb(),
          T.Fc(22, '\n                  '),
          T.Qb(23, 'p', 13),
          T.Fc(24),
          T.gc(25, 'translate'),
          T.Qb(26, 'span', 12),
          T.Fc(27),
          T.gc(28, 'translate'),
          T.Pb(),
          T.Fc(29, '\n                  '),
          T.Pb(),
          T.Fc(30, '\n                '),
          T.Pb(),
          T.Fc(31, '\n              '),
          T.Pb(),
          T.Fc(32, '\n            '),
          T.Pb(),
          T.Fc(33, '\n          ')),
          2 & c &&
            (T.xb(8),
            T.Hc(
              '\n                    ',
              T.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS0'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(
              T.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS01')
            ),
            T.xb(5),
            T.Hc(
              '\n                    ',
              T.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS1'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(
              T.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS11')
            ),
            T.xb(5),
            T.Hc(
              '\n                    ',
              T.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS2'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(
              T.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS22')
            ));
      }
      function H(c, n) {
        1 & c && (T.Qb(0, 'span', 8), T.Fc(1), T.gc(2, 'translate'), T.Pb()),
          2 & c &&
            (T.xb(1), T.Gc(T.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.PAYMENTS')));
      }
      function M(c, n) {
        1 & c &&
          (T.Fc(0, '\n            '),
          T.Qb(1, 'div', 9),
          T.Fc(2, '\n              '),
          T.Qb(3, 'div', 10),
          T.Fc(4, '\n                '),
          T.Qb(5, 'h2', 11),
          T.Fc(6, '\n                  '),
          T.Qb(7, 'p', 12),
          T.Fc(8),
          T.gc(9, 'translate'),
          T.Qb(10, 'span', 13),
          T.Fc(11),
          T.gc(12, 'translate'),
          T.Pb(),
          T.Fc(13, '\n                  '),
          T.Pb(),
          T.Fc(14, '\n                  '),
          T.Qb(15, 'p', 13),
          T.Fc(16),
          T.gc(17, 'translate'),
          T.Qb(18, 'span', 12),
          T.Fc(19),
          T.gc(20, 'translate'),
          T.Pb(),
          T.Fc(21, '\n                  '),
          T.Pb(),
          T.Fc(22, '\n                  '),
          T.Qb(23, 'p', 13),
          T.Fc(24),
          T.gc(25, 'translate'),
          T.Qb(26, 'span', 12),
          T.Fc(27),
          T.gc(28, 'translate'),
          T.Pb(),
          T.Fc(29, '\n                  '),
          T.Pb(),
          T.Fc(30, '\n                '),
          T.Pb(),
          T.Fc(31, '\n              '),
          T.Pb(),
          T.Fc(32, '\n            '),
          T.Pb(),
          T.Fc(33, '\n          ')),
          2 & c &&
            (T.xb(8),
            T.Hc(
              '\n                    ',
              T.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS0'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(
              T.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS01')
            ),
            T.xb(5),
            T.Hc(
              '\n                    ',
              T.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS1'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(
              T.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS11')
            ),
            T.xb(5),
            T.Hc(
              '\n                    ',
              T.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS2'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(
              T.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS22')
            ));
      }
      function u(c, n) {
        1 & c && (T.Qb(0, 'span', 8), T.Fc(1), T.gc(2, 'translate'), T.Pb()),
          2 & c &&
            (T.xb(1), T.Gc(T.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.PAGE')));
      }
      function f(c, n) {
        1 & c &&
          (T.Fc(0, '\n            '),
          T.Qb(1, 'div', 9),
          T.Fc(2, '\n              '),
          T.Qb(3, 'div', 10),
          T.Fc(4, '\n                '),
          T.Qb(5, 'h2', 11),
          T.Fc(6, '\n                  '),
          T.Qb(7, 'p', 12),
          T.Fc(8),
          T.gc(9, 'translate'),
          T.Qb(10, 'span', 13),
          T.Fc(11),
          T.gc(12, 'translate'),
          T.Pb(),
          T.Fc(13, '\n                  '),
          T.Pb(),
          T.Fc(14, '\n                  '),
          T.Qb(15, 'p', 13),
          T.Fc(16),
          T.gc(17, 'translate'),
          T.Qb(18, 'span', 12),
          T.Fc(19),
          T.gc(20, 'translate'),
          T.Pb(),
          T.Fc(21, '\n                  '),
          T.Pb(),
          T.Fc(22, '\n                  '),
          T.Qb(23, 'p', 13),
          T.Fc(24),
          T.gc(25, 'translate'),
          T.Qb(26, 'span', 12),
          T.Fc(27),
          T.gc(28, 'translate'),
          T.Pb(),
          T.Fc(29, '\n                  '),
          T.Pb(),
          T.Fc(30, '\n                '),
          T.Pb(),
          T.Fc(31, '\n              '),
          T.Pb(),
          T.Fc(32, '\n            '),
          T.Pb(),
          T.Fc(33, '\n          ')),
          2 & c &&
            (T.xb(8),
            T.Hc(
              '\n                    ',
              T.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE0'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(T.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE01')),
            T.xb(5),
            T.Hc(
              '\n                    ',
              T.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE1'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(T.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE11')),
            T.xb(5),
            T.Hc(
              '\n                    ',
              T.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE2'),
              '\n                    '
            ),
            T.xb(3),
            T.Gc(T.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE22')));
      }
      let I = (() => {
        class c {
          constructor(c) {
            this.translate = c;
          }
          ngOnInit() {}
        }
        return (
          (c.ɵfac = function(n) {
            return new (n || c)(T.Lb(l.c));
          }),
          (c.ɵcmp = T.Fb({
            type: c,
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
            template: function(c, n) {
              1 & c &&
                (T.Qb(0, 'section', 0),
                T.Fc(1, '\n  '),
                T.Qb(2, 'div', 1),
                T.Fc(3, '\n    '),
                T.Qb(4, 'div', 2),
                T.Fc(5, '\n      '),
                T.Qb(6, 'h2'),
                T.Fc(7),
                T.gc(8, 'translate'),
                T.Pb(),
                T.Fc(9, '\n      '),
                T.Qb(10, 'p', 3),
                T.Fc(11),
                T.gc(12, 'translate'),
                T.Pb(),
                T.Fc(13, '\n    '),
                T.Pb(),
                T.Fc(14, '\n\n    '),
                T.Qb(15, 'div', 4),
                T.Fc(16, '\n      '),
                T.Qb(17, 'ngb-tabset', 5),
                T.Fc(18, '\n        '),
                T.Qb(19, 'ngb-tab'),
                T.Fc(20, '\n          '),
                T.Dc(21, p, 5, 3, 'ng-template', 6),
                T.Fc(22, '\n          '),
                T.Dc(23, D, 35, 18, 'ng-template', 7),
                T.Fc(24, '\n        '),
                T.Pb(),
                T.Fc(25, '\n\n        '),
                T.Qb(26, 'ngb-tab'),
                T.Fc(27, '\n          '),
                T.Dc(28, O, 3, 3, 'ng-template', 6),
                T.Fc(29, '\n          '),
                T.Dc(30, R, 42, 18, 'ng-template', 7),
                T.Fc(31, '\n        '),
                T.Pb(),
                T.Fc(32, '\n\n        '),
                T.Qb(33, 'ngb-tab'),
                T.Fc(34, '\n          '),
                T.Dc(35, G, 3, 3, 'ng-template', 6),
                T.Fc(36, '\n          '),
                T.Dc(37, h, 34, 18, 'ng-template', 7),
                T.Fc(38, '\n        '),
                T.Pb(),
                T.Fc(39, '\n        '),
                T.Qb(40, 'ngb-tab'),
                T.Fc(41, '\n          '),
                T.Dc(42, H, 3, 3, 'ng-template', 6),
                T.Fc(43, '\n          '),
                T.Dc(44, M, 34, 18, 'ng-template', 7),
                T.Fc(45, '\n        '),
                T.Pb(),
                T.Fc(46, '\n\n        '),
                T.Qb(47, 'ngb-tab'),
                T.Fc(48, '\n          '),
                T.Dc(49, u, 3, 3, 'ng-template', 6),
                T.Fc(50, '\n          '),
                T.Dc(51, f, 34, 18, 'ng-template', 7),
                T.Fc(52, '\n        '),
                T.Pb(),
                T.Fc(53, '\n      '),
                T.Pb(),
                T.Fc(54, '\n    '),
                T.Pb(),
                T.Fc(55, '\n  '),
                T.Pb(),
                T.Fc(56, '\n'),
                T.Pb(),
                T.Fc(57, '\n')),
                2 & c &&
                  (T.xb(7),
                  T.Hc(
                    '\n        ',
                    T.hc(
                      8,
                      3,
                      'DEMOS.START_UP.WHY_DASHCORE.WHY_DASHCORE_TEMPLATE'
                    ),
                    '\n      '
                  ),
                  T.xb(4),
                  T.Hc(
                    '\n        ',
                    T.hc(12, 5, 'DEMOS.START_UP.WHY_DASHCORE.WHEN_LOOKING'),
                    '\n      '
                  ),
                  T.xb(6),
                  T.kc('destroyOnHide', !1));
            },
            directives: [E.r, E.o, E.q, E.p],
            pipes: [l.b],
            styles: ['']
          })),
          c
        );
      })();
      var N = t('u3Pa'),
        Q = t('AL06');
      function U(c, n) {
        if (
          (1 & c &&
            (T.Qb(0, 'div', 7),
            T.Fc(1, '\n        '),
            T.Qb(2, 'div', 8),
            T.Fc(3, '\n          '),
            T.Qb(4, 'dc-modal-video', 9),
            T.Fc(5, '\n            '),
            T.Qb(6, 'div', 10),
            T.Fc(7, '\n              '),
            T.Qb(8, 'div', 11),
            T.Fc(9, '\n                '),
            T.Mb(10, 'dc-feather', 12),
            T.Fc(11, '\n              '),
            T.Pb(),
            T.Fc(12, '\n            '),
            T.Pb(),
            T.Fc(13, '\n          '),
            T.Pb(),
            T.Fc(14, '\n\n          '),
            T.Qb(15, 'div', 13),
            T.Fc(16, '\n            '),
            T.Qb(17, 'h4', 14),
            T.Fc(18),
            T.gc(19, 'translate'),
            T.Pb(),
            T.Fc(20, '\n\n            '),
            T.Qb(21, 'p', 15),
            T.Fc(22),
            T.gc(23, 'translate'),
            T.Pb(),
            T.Fc(24, '\n          '),
            T.Pb(),
            T.Fc(25, '\n        '),
            T.Pb(),
            T.Fc(26, '\n      '),
            T.Pb()),
          2 & c)
        ) {
          const c = n.$implicit;
          T.xb(4),
            T.kc('identifier', 'myModal')('videoId', c.videoId),
            T.xb(2),
            T.Cc(
              'background-image',
              'url(assets/images/drone/' + c.gravity + ')'
            ),
            T.xb(4),
            T.kc('name', 'play')('iconClass', 'stroke-contrast'),
            T.xb(8),
            T.Gc(T.hc(19, 8, c.title)),
            T.xb(4),
            T.Hc(
              '\n              ',
              T.hc(23, 10, c.description),
              '.\n            '
            );
        }
      }
      let x = (() => {
        class c {
          constructor(c) {
            (this.translate = c),
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
          ngOnInit() {}
        }
        return (
          (c.ɵfac = function(n) {
            return new (n || c)(T.Lb(l.c));
          }),
          (c.ɵcmp = T.Fb({
            type: c,
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
            template: function(c, n) {
              1 & c &&
                (T.Fc(0, '\n'),
                T.Qb(1, 'section', 0),
                T.Fc(2, '\n  '),
                T.Qb(3, 'div', 1),
                T.Fc(4, '\n    '),
                T.Qb(5, 'div', 2),
                T.Fc(6, '\n      '),
                T.Qb(7, 'h2', 3),
                T.Fc(8),
                T.gc(9, 'translate'),
                T.Pb(),
                T.Fc(10, '\n      '),
                T.Qb(11, 'p', 4),
                T.Fc(12),
                T.gc(13, 'translate'),
                T.Pb(),
                T.Fc(14, '\n    '),
                T.Pb(),
                T.Fc(15, '\n\n    '),
                T.Qb(16, 'div', 5),
                T.Fc(17, '\n      '),
                T.Dc(18, U, 27, 12, 'div', 6),
                T.Fc(19, '\n    '),
                T.Pb(),
                T.Fc(20, '\n  '),
                T.Pb(),
                T.Fc(21, '\n'),
                T.Pb(),
                T.Fc(22, '\n')),
                2 & c &&
                  (T.xb(8),
                  T.Hc(
                    '\n        ',
                    T.hc(9, 3, 'DEMOS.START_UP.VIDEOs.HOW_TO_VIDEO'),
                    '\n      '
                  ),
                  T.xb(4),
                  T.Hc(
                    '\n        ',
                    T.hc(13, 5, 'DEMOS.START_UP.VIDEOs.TAKE_A_LOOKING_AT'),
                    '\n      '
                  ),
                  T.xb(6),
                  T.kc('ngForOf', n.posts));
            },
            directives: [A.j, N.a, Q.a],
            pipes: [l.b],
            styles: ['']
          })),
          c
        );
      })();
      var m = t('iLZQ');
      function v(c, n) {
        if (
          (1 & c &&
            (T.Qb(0, 'div', 7),
            T.Fc(1, '\n      '),
            T.Qb(2, 'p', 8),
            T.Fc(3),
            T.gc(4, 'translate'),
            T.Pb(),
            T.Fc(5, '\n      '),
            T.Qb(6, 'p'),
            T.Fc(7),
            T.gc(8, 'translate'),
            T.Pb(),
            T.Fc(9, '\n    '),
            T.Pb()),
          2 & c)
        ) {
          const c = n.$implicit;
          T.xb(3),
            T.Gc(T.hc(4, 2, c.title)),
            T.xb(4),
            T.Hc('\n        ', T.hc(8, 4, c.description), '\n      ');
        }
      }
      const C = function() {
          return {
            icon: 'briefcase',
            title: 'DEMOS.START_UP.WHAT_YOU_GET.BUSINESS_TITLE',
            description: 'DEMOS.START_UP.WHAT_YOU_GET.BUSINESS_DESC'
          };
        },
        Y = function() {
          return {
            icon: 'dollar-sign',
            title: 'DEMOS.START_UP.WHAT_YOU_GET.PAYMENTS_TITLE',
            description: 'DEMOS.START_UP.WHAT_YOU_GET.PAYMENTS_DESC'
          };
        },
        W = function() {
          return {
            icon: 'home',
            title: 'DEMOS.START_UP.WHAT_YOU_GET.SCHEDULES_TITLE',
            description: 'DEMOS.START_UP.WHAT_YOU_GET.SCHEDULES_DESC'
          };
        },
        y = function() {
          return {
            icon: 'clock',
            title: 'DEMOS.START_UP.WHAT_YOU_GET.SITE_TITLE',
            description: 'DEMOS.START_UP.WHAT_YOU_GET.SAVING_DESC'
          };
        },
        L = function(c, n, t, e) {
          return [c, n, t, e];
        },
        w = [
          {
            path: '',
            component: (() => {
              class c {
                constructor(c) {
                  (this.i18nService = c), this.updateSeoTags();
                }
                ngOnInit() {
                  this.updateSeoTags();
                }
                updateSeoTags() {
                  this.i18nService.updateSeoTags(
                    'DEMOS.START_UP.NETWORK_SEARCH_META.TITLE',
                    'DEMOS.START_UP.NETWORK_SEARCH_META.KEYWORDS'
                  );
                }
              }
              return (
                (c.ɵfac = function(n) {
                  return new (n || c)(T.Lb(S.a));
                }),
                (c.ɵcmp = T.Fb({
                  type: c,
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
                  template: function(c, n) {
                    1 & c &&
                      (T.Mb(0, 'dc-startup-heading'),
                      T.Fc(1, '\n\n'),
                      T.Qb(2, 'dc-big-screen', 0),
                      T.Fc(3, '\n  '),
                      T.Qb(4, 'div', 1),
                      T.Fc(5, '\n    '),
                      T.Qb(6, 'p', 2),
                      T.Fc(7),
                      T.gc(8, 'translate'),
                      T.Pb(),
                      T.Fc(9, '\n\n    '),
                      T.Qb(10, 'a', 3),
                      T.Fc(11),
                      T.gc(12, 'translate'),
                      T.Pb(),
                      T.Fc(13, '\n    '),
                      T.Mb(14, 'br'),
                      T.Fc(15, '\n    '),
                      T.Mb(16, 'br'),
                      T.Fc(17, '\n    '),
                      T.Mb(18, 'br'),
                      T.Fc(19, '\n    '),
                      T.Mb(20, 'br'),
                      T.Fc(21, '\n\n    '),
                      T.Qb(22, 'h2'),
                      T.Fc(23),
                      T.gc(24, 'translate'),
                      T.Pb(),
                      T.Fc(25, '\n    '),
                      T.Qb(26, 'p', 4),
                      T.Fc(27),
                      T.gc(28, 'translate'),
                      T.Pb(),
                      T.Fc(29, '\n  '),
                      T.Pb(),
                      T.Fc(30, '\n  '),
                      T.Qb(31, 'div', 5),
                      T.Fc(32, '\n    '),
                      T.Dc(33, v, 10, 6, 'div', 6),
                      T.Fc(34, '\n  '),
                      T.Pb(),
                      T.Fc(35, '\n'),
                      T.Pb(),
                      T.Fc(36, '\n'),
                      T.Mb(37, 'dc-startup-features'),
                      T.Fc(38, '\n\n'),
                      T.Mb(39, 'dc-startup-why-dashcore'),
                      T.Fc(40, '\n'),
                      T.Mb(41, 'dc-startup-videos'),
                      T.Fc(42, '\n'),
                      T.Fc(43, '\n'),
                      T.Mb(44, 'br'),
                      T.Fc(45, '\n'),
                      T.Mb(46, 'br'),
                      T.Fc(47, '\n'),
                      T.Mb(48, 'br'),
                      T.Fc(49, '\n'),
                      T.Mb(50, 'br'),
                      T.Fc(51, '\n'),
                      T.Mb(52, 'br'),
                      T.Fc(53, '\n'),
                      T.Mb(54, 'br'),
                      T.Fc(55, '\n'),
                      T.Mb(56, 'br'),
                      T.Fc(57, '\n'),
                      T.Mb(58, 'br'),
                      T.Fc(59, '\n'),
                      T.Fc(60, '\n'),
                      T.Mb(61, 'dc-footer2'),
                      T.Fc(62, '\n')),
                      2 & c &&
                        (T.xb(2),
                        T.kc('img', 'assets/images/drone/drone-1.png'),
                        T.xb(5),
                        T.Hc(
                          '\n      ',
                          T.hc(8, 6, 'USUAL.START_NOW_BOX.WHY_WAIT'),
                          '\n    '
                        ),
                        T.xb(4),
                        T.Hc(
                          '\n      ',
                          T.hc(12, 8, 'USUAL.START_NOW_BOX.START_NOW'),
                          '\n    '
                        ),
                        T.xb(12),
                        T.Hc(
                          '\n      ',
                          T.hc(
                            24,
                            10,
                            'DEMOS.START_UP.WHAT_YOU_GET.WHAT_YOU_WILL_GET_WITH_EVERTTHINK'
                          ),
                          '\n    '
                        ),
                        T.xb(4),
                        T.Hc(
                          '\n      ',
                          T.hc(
                            28,
                            12,
                            'DEMOS.START_UP.WHAT_YOU_GET.GEOLOCATED_INTELLIGENT_ASSISTANTS'
                          ),
                          '\n    '
                        ),
                        T.xb(6),
                        T.kc(
                          'ngForOf',
                          T.rc(
                            18,
                            L,
                            T.nc(14, C),
                            T.nc(15, Y),
                            T.nc(16, W),
                            T.nc(17, y)
                          )
                        ));
                  },
                  directives: [d, _.a, A.j, g, I, x, m.a],
                  pipes: [l.b],
                  styles: ['']
                })),
                c
              );
            })(),
            data: { title: Object(S.c)('EveryThink - Social Demo') }
          }
        ];
      let k = (() => {
        class c {}
        return (
          (c.ɵmod = T.Jb({ type: c })),
          (c.ɵinj = T.Ib({
            factory: function(n) {
              return new (n || c)();
            },
            imports: [[F.g.forChild(w)], F.g]
          })),
          c
        );
      })();
      var V = t('N7aX');
      let B = (() => {
        class c {}
        return (
          (c.ɵmod = T.Jb({ type: c })),
          (c.ɵinj = T.Ib({
            factory: function(n) {
              return new (n || c)();
            },
            providers: [V.a],
            imports: [
              [e.a, b.a, a.a, s.a, r.a, E.s, i.a, o.a, k, l.a.forChild()]
            ]
          })),
          c
        );
      })();
    }
  }
]);
