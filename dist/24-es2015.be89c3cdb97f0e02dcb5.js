(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    akeW: function(n, c, t) {
      'use strict';
      t.d(c, 'a', function() {
        return E;
      });
      var e = t('fXoL'),
        b = t('ofXK');
      function a(n, c) {
        if (
          (1 & n &&
            (e.Qb(0, 'div', 7),
            e.Fc(1, '\n    '),
            e.Mb(2, 'img', 8),
            e.Fc(3, '\n  '),
            e.Pb()),
          2 & n)
        ) {
          const n = e.fc();
          e.xb(2),
            e.Ab(
              'absolute top h-100 ',
              n.isScreenLeft() ? 'left' : 'right',
              ''
            ),
            e.kc('src', n.imgShape, e.yc);
        }
      }
      function s(n, c) {
        if ((1 & n && e.Mb(0, 'img', 9), 2 & n)) {
          const n = e.fc();
          e.kc('src', n.img, e.yc),
            e.yb('data-aos', 'fade-' + (n.isScreenLeft() ? 'right' : 'left'));
        }
      }
      function r(n, c) {
        1 & n && (e.Fc(0, '\n          '), e.ic(1, 2), e.Fc(2, '\n        '));
      }
      const i = [[['', 'section-heading', '']], '*', [['', 'images', '']]],
        F = ['[section-heading]', '*', '[images]'];
      let E = (() => {
        class n {
          constructor() {}
          ngOnInit() {}
          isScreenLeft() {
            return 'left' === this.screenPos;
          }
        }
        return (
          (n.ɵfac = function(c) {
            return new (c || n)();
          }),
          (n.ɵcmp = e.Fb({
            type: n,
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
                2 & n)
              ) {
                const n = e.tc(20);
                e.xb(2),
                  e.kc('ngIf', c.imgShape),
                  e.xb(8),
                  e.Db('order-md-last', c.isScreenLeft()),
                  e.xb(5),
                  e.Ab('col-12 col-lg-6 p', c.isScreenLeft() ? 'l' : 'r', '-0'),
                  e.xb(2),
                  e.kc('ngIf', c.img)('ngIfElse', n);
              }
            },
            directives: [b.k],
            styles: ['']
          })),
          n
        );
      })();
    },
    koon: function(n, c, t) {
      'use strict';
      t.r(c),
        t.d(c, 'StartupModule', function() {
          return cn;
        });
      var e = t('M0ag'),
        b = t('2d4A'),
        a = t('ORAR'),
        s = t('8klf'),
        r = t('M0Rk'),
        i = t('T7/b'),
        F = t('1kSV'),
        E = t('kpBo'),
        S = t('tyNb'),
        o = t('ey9i'),
        l = t('fXoL'),
        d = t('sYmb');
      let A = (() => {
        class n {
          constructor(n) {
            this.translate = n;
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(c) {
            return new (c || n)(l.Lb(d.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
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
                (l.Qb(0, 'header', 0),
                l.Fc(1, '\n  '),
                l.Qb(2, 'div', 1),
                l.Fc(3, '\n    '),
                l.Fc(4, '\n    '),
                l.ec(),
                l.Qb(5, 'svg', 2),
                l.Fc(6, '\n      '),
                l.Mb(7, 'path', 3),
                l.Fc(8, '\n    '),
                l.Pb(),
                l.Fc(9, '\n  '),
                l.Pb(),
                l.Fc(10, '\n\n  '),
                l.dc(),
                l.Qb(11, 'div', 4),
                l.Fc(12, '\n    '),
                l.Qb(13, 'div', 5),
                l.Fc(14, '\n      '),
                l.Qb(15, 'div', 6),
                l.Fc(16, '\n        '),
                l.Qb(17, 'h1', 7),
                l.Fc(18),
                l.gc(19, 'translate'),
                l.Qb(20, 'span', 8),
                l.Fc(21),
                l.gc(22, 'translate'),
                l.Pb(),
                l.Fc(23, '\n        '),
                l.Pb(),
                l.Fc(24, '\n        '),
                l.Qb(25, 'p', 9),
                l.Fc(26),
                l.gc(27, 'translate'),
                l.Pb(),
                l.Fc(28, '\n\n        '),
                l.Qb(29, 'a', 10),
                l.Fc(30),
                l.gc(31, 'translate'),
                l.Pb(),
                l.Fc(32, '\n      '),
                l.Pb(),
                l.Fc(33, '\n\n      '),
                l.Qb(34, 'div', 11),
                l.Fc(35, '\n        '),
                l.Qb(36, 'div', 12),
                l.Fc(37, '\n          '),
                l.Qb(38, 'div', 13),
                l.Fc(39, '\n            '),
                l.Mb(40, 'img', 14),
                l.Fc(41, '\n          '),
                l.Pb(),
                l.Fc(42, '\n\n          '),
                l.Qb(43, 'div', 15),
                l.Fc(44, '\n            '),
                l.Qb(45, 'div', 16),
                l.Fc(46, '\n              '),
                l.Mb(47, 'img', 17),
                l.Fc(48, '\n            '),
                l.Pb(),
                l.Fc(49, '\n\n            '),
                l.Mb(50, 'div', 18),
                l.Fc(51, '\n          '),
                l.Pb(),
                l.Fc(52, '\n        '),
                l.Pb(),
                l.Fc(53, '\n      '),
                l.Pb(),
                l.Fc(54, '\n    '),
                l.Pb(),
                l.Fc(55, '\n  '),
                l.Pb(),
                l.Fc(56, '\n'),
                l.Pb(),
                l.Fc(57, '\n')),
                2 & n &&
                  (l.xb(18),
                  l.Hc(
                    '\n          ',
                    l.hc(19, 4, 'DEMOS.START_UP.HEADING.DELIVERING_THE_TOOLS'),
                    '\n          '
                  ),
                  l.xb(3),
                  l.Hc(
                    '\n            ',
                    l.hc(22, 6, 'DEMOS.START_UP.HEADING.YOU_NEED_TO_SUCCEED'),
                    ''
                  ),
                  l.xb(5),
                  l.Hc(
                    '\n          ',
                    l.hc(
                      27,
                      8,
                      'DEMOS.START_UP.HEADING.IT_ALL_BEGINS_BY_CHOSSING'
                    ),
                    '\n        '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n          ',
                    l.hc(31, 10, 'DEMOS.START_UP.HEADING.TRY_IT_FREE'),
                    ''
                  ));
            },
            pipes: [d.b],
            styles: ['']
          })),
          n
        );
      })();
      var P = t('akeW'),
        T = t('ofXK'),
        g = t('AL06');
      function _(n, c) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 6),
            l.Fc(1, '\n        '),
            l.Mb(2, 'dc-feather', 7),
            l.Fc(3, '\n        '),
            l.Qb(4, 'h5', 8),
            l.Fc(5),
            l.gc(6, 'translate'),
            l.Pb(),
            l.Fc(7, '\n        '),
            l.Qb(8, 'p'),
            l.Fc(9),
            l.gc(10, 'translate'),
            l.Pb(),
            l.Fc(11, '\n      '),
            l.Pb()),
          2 & n)
        ) {
          const n = c.$implicit;
          l.xb(2),
            l.kc('name', n.icon)('iconClass', 'stroke-primary mb-3'),
            l.xb(3),
            l.Gc(l.hc(6, 4, n.title)),
            l.xb(4),
            l.Hc('\n          ', l.hc(10, 6, n.desc), '\n        ');
        }
      }
      let p = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
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
          (n.ɵfac = function(c) {
            return new (c || n)(l.Lb(d.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
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
                (l.Qb(0, 'section', 0),
                l.Fc(1, '\n  '),
                l.Qb(2, 'div', 1),
                l.Fc(3, '\n    '),
                l.Qb(4, 'div', 2),
                l.Fc(5, '\n      '),
                l.Qb(6, 'h2', 3),
                l.Fc(7),
                l.gc(8, 'translate'),
                l.Pb(),
                l.Fc(9, '\n    '),
                l.Pb(),
                l.Fc(10, '\n\n    '),
                l.Qb(11, 'div', 4),
                l.Fc(12, '\n      '),
                l.Dc(13, _, 12, 8, 'div', 5),
                l.Fc(14, '\n    '),
                l.Pb(),
                l.Fc(15, '\n  '),
                l.Pb(),
                l.Fc(16, '\n'),
                l.Pb(),
                l.Fc(17, '\n')),
                2 & n &&
                  (l.xb(7),
                  l.Hc(
                    '\n        ',
                    l.hc(8, 2, 'DEMOS.START_UP.FEATURES.WHAT_DASHCORE_CAN_DO'),
                    '\n      '
                  ),
                  l.xb(6),
                  l.kc('ngForOf', c.elements));
            },
            directives: [T.j, g.a],
            pipes: [d.b],
            styles: ['']
          })),
          n
        );
      })();
      function D(n, c) {
        1 & n &&
          (l.Fc(0, '\n            '),
          l.Qb(1, 'span', 8),
          l.Fc(2),
          l.gc(3, 'translate'),
          l.Pb(),
          l.Fc(4, '\n          ')),
          2 & n &&
            (l.xb(2),
            l.Hc(
              '\n              ',
              l.hc(3, 1, 'DEMOS.START_UP.WHY_DASHCORE.DEVELOPERS'),
              '\n            '
            ));
      }
      function O(n, c) {
        1 & n &&
          (l.Fc(0, '\n            '),
          l.Qb(1, 'div', 9),
          l.Fc(2, '\n              '),
          l.Qb(3, 'div', 10),
          l.Fc(4, '\n                '),
          l.Qb(5, 'h2', 11),
          l.Fc(6, '\n                  '),
          l.Qb(7, 'p', 12),
          l.Fc(8),
          l.gc(9, 'translate'),
          l.Qb(10, 'span', 13),
          l.Fc(11),
          l.gc(12, 'translate'),
          l.Pb(),
          l.Fc(13, '\n                  '),
          l.Pb(),
          l.Fc(14, '\n                  '),
          l.Qb(15, 'p', 13),
          l.Fc(16),
          l.gc(17, 'translate'),
          l.Qb(18, 'span', 12),
          l.Fc(19),
          l.gc(20, 'translate'),
          l.Pb(),
          l.Fc(21, '\n                  '),
          l.Pb(),
          l.Fc(22, '\n                  '),
          l.Qb(23, 'p', 13),
          l.Fc(24),
          l.gc(25, 'translate'),
          l.Qb(26, 'span', 12),
          l.Fc(27),
          l.gc(28, 'translate'),
          l.Pb(),
          l.Fc(29, '\n                  '),
          l.Pb(),
          l.Fc(30, '\n                '),
          l.Pb(),
          l.Fc(31, '\n              '),
          l.Pb(),
          l.Fc(32, '\n              '),
          l.Qb(33, 'div', 10),
          l.Fc(34, '\n                '),
          l.Qb(35, 'figure', 14),
          l.Fc(36, '\n                  '),
          l.Mb(37, 'img', 15),
          l.Fc(38, '\n                '),
          l.Pb(),
          l.Fc(39, '\n              '),
          l.Pb(),
          l.Fc(40, '\n            '),
          l.Pb(),
          l.Fc(41, '\n          ')),
          2 & n &&
            (l.xb(8),
            l.Hc(
              '\n                    ',
              l.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS0'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS01')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS1'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS11')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS2'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DEVELOPERS22')
            ));
      }
      function R(n, c) {
        1 & n && (l.Qb(0, 'span', 8), l.Fc(1), l.gc(2, 'translate'), l.Pb()),
          2 & n &&
            (l.xb(1), l.Gc(l.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.DESIGNER')));
      }
      function G(n, c) {
        1 & n &&
          (l.Fc(0, '\n            '),
          l.Qb(1, 'div', 9),
          l.Fc(2, '\n              '),
          l.Qb(3, 'div', 10),
          l.Fc(4, '\n                '),
          l.Qb(5, 'h2', 11),
          l.Fc(6, '\n                  '),
          l.Qb(7, 'p', 12),
          l.Fc(8),
          l.gc(9, 'translate'),
          l.Qb(10, 'span', 13),
          l.Fc(11),
          l.gc(12, 'translate'),
          l.Pb(),
          l.Fc(13, '\n                  '),
          l.Pb(),
          l.Fc(14, '\n                  '),
          l.Qb(15, 'p', 13),
          l.Fc(16),
          l.gc(17, 'translate'),
          l.Qb(18, 'span', 12),
          l.Fc(19),
          l.gc(20, 'translate'),
          l.Pb(),
          l.Fc(21, '\n                  '),
          l.Pb(),
          l.Fc(22, '\n                  '),
          l.Qb(23, 'p', 13),
          l.Fc(24),
          l.gc(25, 'translate'),
          l.Qb(26, 'span', 12),
          l.Fc(27),
          l.gc(28, 'translate'),
          l.Pb(),
          l.Fc(29, '\n                  '),
          l.Pb(),
          l.Fc(30, '\n                '),
          l.Pb(),
          l.Fc(31, '\n              '),
          l.Pb(),
          l.Fc(32, '\n              '),
          l.Qb(33, 'div', 10),
          l.Fc(34, '\n                '),
          l.Qb(35, 'figure', 14),
          l.Fc(36, '\n                  '),
          l.Mb(37, 'img', 16),
          l.Fc(38, '\n                '),
          l.Pb(),
          l.Fc(39, '\n              '),
          l.Pb(),
          l.Fc(40, '\n            '),
          l.Pb(),
          l.Fc(41, '\n          ')),
          2 & n &&
            (l.xb(8),
            l.Hc(
              '\n                    ',
              l.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER0'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER01')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER1'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER11')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER2'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_DESIGNER22')
            ));
      }
      function h(n, c) {
        1 & n && (l.Qb(0, 'span', 8), l.Fc(1), l.gc(2, 'translate'), l.Pb()),
          2 & n &&
            (l.xb(1),
            l.Gc(l.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.REMINDERS')));
      }
      function H(n, c) {
        1 & n &&
          (l.Fc(0, '\n            '),
          l.Qb(1, 'div', 9),
          l.Fc(2, '\n              '),
          l.Qb(3, 'div', 10),
          l.Fc(4, '\n                '),
          l.Qb(5, 'h2', 11),
          l.Fc(6, '\n                  '),
          l.Qb(7, 'p', 12),
          l.Fc(8),
          l.gc(9, 'translate'),
          l.Qb(10, 'span', 13),
          l.Fc(11),
          l.gc(12, 'translate'),
          l.Pb(),
          l.Fc(13, '\n                  '),
          l.Pb(),
          l.Fc(14, '\n                  '),
          l.Qb(15, 'p', 13),
          l.Fc(16),
          l.gc(17, 'translate'),
          l.Qb(18, 'span', 12),
          l.Fc(19),
          l.gc(20, 'translate'),
          l.Pb(),
          l.Fc(21, '\n                  '),
          l.Pb(),
          l.Fc(22, '\n                  '),
          l.Qb(23, 'p', 13),
          l.Fc(24),
          l.gc(25, 'translate'),
          l.Qb(26, 'span', 12),
          l.Fc(27),
          l.gc(28, 'translate'),
          l.Pb(),
          l.Fc(29, '\n                  '),
          l.Pb(),
          l.Fc(30, '\n                '),
          l.Pb(),
          l.Fc(31, '\n              '),
          l.Pb(),
          l.Fc(32, '\n              '),
          l.Qb(33, 'div', 10),
          l.Fc(34, '\n                '),
          l.Qb(35, 'figure', 14),
          l.Fc(36, '\n                  '),
          l.Mb(37, 'img', 17),
          l.Fc(38, '\n                '),
          l.Pb(),
          l.Fc(39, '\n              '),
          l.Pb(),
          l.Fc(40, '\n            '),
          l.Pb(),
          l.Fc(41, '\n          ')),
          2 & n &&
            (l.xb(8),
            l.Hc(
              '\n                    ',
              l.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS0'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS01')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS1'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS11')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS2'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REMINDERS22')
            ));
      }
      function N(n, c) {
        1 & n && (l.Qb(0, 'span', 8), l.Fc(1), l.gc(2, 'translate'), l.Pb()),
          2 & n &&
            (l.xb(1), l.Gc(l.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.PAYMENTS')));
      }
      function Q(n, c) {
        1 & n &&
          (l.Fc(0, '\n            '),
          l.Qb(1, 'div', 9),
          l.Fc(2, '\n              '),
          l.Qb(3, 'div', 10),
          l.Fc(4, '\n                '),
          l.Qb(5, 'h2', 11),
          l.Fc(6, '\n                  '),
          l.Qb(7, 'p', 12),
          l.Fc(8),
          l.gc(9, 'translate'),
          l.Qb(10, 'span', 13),
          l.Fc(11),
          l.gc(12, 'translate'),
          l.Pb(),
          l.Fc(13, '\n                  '),
          l.Pb(),
          l.Fc(14, '\n                  '),
          l.Qb(15, 'p', 13),
          l.Fc(16),
          l.gc(17, 'translate'),
          l.Qb(18, 'span', 12),
          l.Fc(19),
          l.gc(20, 'translate'),
          l.Pb(),
          l.Fc(21, '\n                  '),
          l.Pb(),
          l.Fc(22, '\n                  '),
          l.Qb(23, 'p', 13),
          l.Fc(24),
          l.gc(25, 'translate'),
          l.Qb(26, 'span', 12),
          l.Fc(27),
          l.gc(28, 'translate'),
          l.Pb(),
          l.Fc(29, '\n                  '),
          l.Pb(),
          l.Fc(30, '\n                '),
          l.Pb(),
          l.Fc(31, '\n              '),
          l.Pb(),
          l.Fc(32, '\n              '),
          l.Qb(33, 'div', 10),
          l.Fc(34, '\n                '),
          l.Qb(35, 'figure', 14),
          l.Fc(36, '\n                  '),
          l.Mb(37, 'img', 18),
          l.Fc(38, '\n                '),
          l.Pb(),
          l.Fc(39, '\n              '),
          l.Pb(),
          l.Fc(40, '\n            '),
          l.Pb(),
          l.Fc(41, '\n          ')),
          2 & n &&
            (l.xb(8),
            l.Hc(
              '\n                    ',
              l.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS0'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS01')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS1'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS11')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS2'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAYMENTS22')
            ));
      }
      function m(n, c) {
        1 & n && (l.Qb(0, 'span', 8), l.Fc(1), l.gc(2, 'translate'), l.Pb()),
          2 & n &&
            (l.xb(1), l.Gc(l.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.PAGE')));
      }
      function M(n, c) {
        1 & n &&
          (l.Fc(0, '\n            '),
          l.Qb(1, 'div', 9),
          l.Fc(2, '\n              '),
          l.Qb(3, 'div', 10),
          l.Fc(4, '\n                '),
          l.Qb(5, 'h2', 11),
          l.Fc(6, '\n                  '),
          l.Qb(7, 'p', 12),
          l.Fc(8),
          l.gc(9, 'translate'),
          l.Qb(10, 'span', 13),
          l.Fc(11),
          l.gc(12, 'translate'),
          l.Pb(),
          l.Fc(13, '\n                  '),
          l.Pb(),
          l.Fc(14, '\n                  '),
          l.Qb(15, 'p', 13),
          l.Fc(16),
          l.gc(17, 'translate'),
          l.Qb(18, 'span', 12),
          l.Fc(19),
          l.gc(20, 'translate'),
          l.Pb(),
          l.Fc(21, '\n                  '),
          l.Pb(),
          l.Fc(22, '\n                  '),
          l.Qb(23, 'p', 13),
          l.Fc(24),
          l.gc(25, 'translate'),
          l.Qb(26, 'span', 12),
          l.Fc(27),
          l.gc(28, 'translate'),
          l.Pb(),
          l.Fc(29, '\n                  '),
          l.Pb(),
          l.Fc(30, '\n                '),
          l.Pb(),
          l.Fc(31, '\n              '),
          l.Pb(),
          l.Fc(32, '\n              '),
          l.Qb(33, 'div', 10),
          l.Fc(34, '\n                '),
          l.Qb(35, 'figure', 14),
          l.Fc(36, '\n                  '),
          l.Mb(37, 'img', 19),
          l.Fc(38, '\n                '),
          l.Pb(),
          l.Fc(39, '\n              '),
          l.Pb(),
          l.Fc(40, '\n            '),
          l.Pb(),
          l.Fc(41, '\n          ')),
          2 & n &&
            (l.xb(8),
            l.Hc(
              '\n                    ',
              l.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE0'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(l.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE01')),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE1'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(l.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE11')),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE2'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(l.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_PAGE22')));
      }
      function I(n, c) {
        1 & n && (l.Qb(0, 'span', 8), l.Fc(1), l.gc(2, 'translate'), l.Pb()),
          2 & n &&
            (l.xb(1),
            l.Gc(l.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.CALENDARS')));
      }
      function u(n, c) {
        1 & n &&
          (l.Fc(0, '\n            '),
          l.Qb(1, 'div', 9),
          l.Fc(2, '\n              '),
          l.Qb(3, 'div', 10),
          l.Fc(4, '\n                '),
          l.Qb(5, 'h2', 11),
          l.Fc(6, '\n                  '),
          l.Qb(7, 'p', 12),
          l.Fc(8),
          l.gc(9, 'translate'),
          l.Qb(10, 'span', 13),
          l.Fc(11),
          l.gc(12, 'translate'),
          l.Pb(),
          l.Fc(13, '\n                  '),
          l.Pb(),
          l.Fc(14, '\n                  '),
          l.Qb(15, 'p', 13),
          l.Fc(16),
          l.gc(17, 'translate'),
          l.Qb(18, 'span', 12),
          l.Fc(19),
          l.gc(20, 'translate'),
          l.Pb(),
          l.Fc(21, '\n                  '),
          l.Pb(),
          l.Fc(22, '\n                  '),
          l.Qb(23, 'p', 13),
          l.Fc(24),
          l.gc(25, 'translate'),
          l.Qb(26, 'span', 12),
          l.Fc(27),
          l.gc(28, 'translate'),
          l.Pb(),
          l.Fc(29, '\n                  '),
          l.Pb(),
          l.Fc(30, '\n                '),
          l.Pb(),
          l.Fc(31, '\n              '),
          l.Pb(),
          l.Fc(32, '\n              '),
          l.Qb(33, 'div', 10),
          l.Fc(34, '\n                '),
          l.Qb(35, 'figure', 14),
          l.Fc(36, '\n                  '),
          l.Mb(37, 'img', 20),
          l.Fc(38, '\n                '),
          l.Pb(),
          l.Fc(39, '\n              '),
          l.Pb(),
          l.Fc(40, '\n            '),
          l.Pb(),
          l.Fc(41, '\n          ')),
          2 & n &&
            (l.xb(8),
            l.Hc(
              '\n                    ',
              l.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_CALENDARS0'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_CALENDARS01')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_CALENDARS1'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_CALENDARS11')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_CALENDARS2'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_CALENDARS22')
            ));
      }
      function x(n, c) {
        1 & n && (l.Qb(0, 'span', 8), l.Fc(1), l.gc(2, 'translate'), l.Pb()),
          2 & n &&
            (l.xb(1),
            l.Gc(l.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.REPORTING')));
      }
      function f(n, c) {
        1 & n &&
          (l.Fc(0, '\n            '),
          l.Qb(1, 'div', 9),
          l.Fc(2, '\n              '),
          l.Qb(3, 'div', 10),
          l.Fc(4, '\n                '),
          l.Qb(5, 'h2', 11),
          l.Fc(6, '\n                  '),
          l.Qb(7, 'p', 12),
          l.Fc(8),
          l.gc(9, 'translate'),
          l.Qb(10, 'span', 13),
          l.Fc(11),
          l.gc(12, 'translate'),
          l.Pb(),
          l.Fc(13, '\n                  '),
          l.Pb(),
          l.Fc(14, '\n                  '),
          l.Qb(15, 'p', 13),
          l.Fc(16),
          l.gc(17, 'translate'),
          l.Qb(18, 'span', 12),
          l.Fc(19),
          l.gc(20, 'translate'),
          l.Pb(),
          l.Fc(21, '\n                  '),
          l.Pb(),
          l.Fc(22, '\n                  '),
          l.Qb(23, 'p', 13),
          l.Fc(24),
          l.gc(25, 'translate'),
          l.Qb(26, 'span', 12),
          l.Fc(27),
          l.gc(28, 'translate'),
          l.Pb(),
          l.Fc(29, '\n                  '),
          l.Pb(),
          l.Fc(30, '\n                '),
          l.Pb(),
          l.Fc(31, '\n              '),
          l.Pb(),
          l.Fc(32, '\n              '),
          l.Qb(33, 'div', 10),
          l.Fc(34, '\n                '),
          l.Qb(35, 'figure', 14),
          l.Fc(36, '\n                  '),
          l.Mb(37, 'img', 21),
          l.Fc(38, '\n                '),
          l.Pb(),
          l.Fc(39, '\n              '),
          l.Pb(),
          l.Fc(40, '\n            '),
          l.Pb(),
          l.Fc(41, '\n          ')),
          2 & n &&
            (l.xb(8),
            l.Hc(
              '\n                    ',
              l.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REPORTING0'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REPORTING01')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REPORTING1'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REPORTING11')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REPORTING2'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_REPORTING22')
            ));
      }
      function U(n, c) {
        1 & n && (l.Qb(0, 'span', 8), l.Fc(1), l.gc(2, 'translate'), l.Pb()),
          2 & n &&
            (l.xb(1), l.Gc(l.hc(2, 1, 'DEMOS.START_UP.WHY_DASHCORE.SECURITY')));
      }
      function v(n, c) {
        1 & n &&
          (l.Fc(0, '\n            '),
          l.Qb(1, 'div', 9),
          l.Fc(2, '\n              '),
          l.Qb(3, 'div', 10),
          l.Fc(4, '\n                '),
          l.Qb(5, 'h2', 11),
          l.Fc(6, '\n                  '),
          l.Qb(7, 'p', 12),
          l.Fc(8),
          l.gc(9, 'translate'),
          l.Qb(10, 'span', 13),
          l.Fc(11),
          l.gc(12, 'translate'),
          l.Pb(),
          l.Fc(13, '\n                  '),
          l.Pb(),
          l.Fc(14, '\n                  '),
          l.Qb(15, 'p', 13),
          l.Fc(16),
          l.gc(17, 'translate'),
          l.Qb(18, 'span', 12),
          l.Fc(19),
          l.gc(20, 'translate'),
          l.Pb(),
          l.Fc(21, '\n                  '),
          l.Pb(),
          l.Fc(22, '\n                  '),
          l.Qb(23, 'p', 13),
          l.Fc(24),
          l.gc(25, 'translate'),
          l.Qb(26, 'span', 12),
          l.Fc(27),
          l.gc(28, 'translate'),
          l.Pb(),
          l.Fc(29, '\n                  '),
          l.Pb(),
          l.Fc(30, '\n                '),
          l.Pb(),
          l.Fc(31, '\n              '),
          l.Pb(),
          l.Fc(32, '\n              '),
          l.Qb(33, 'div', 10),
          l.Fc(34, '\n                '),
          l.Qb(35, 'figure', 14),
          l.Fc(36, '\n                  '),
          l.Mb(37, 'img', 22),
          l.Fc(38, '\n                '),
          l.Pb(),
          l.Fc(39, '\n              '),
          l.Pb(),
          l.Fc(40, '\n            '),
          l.Pb(),
          l.Fc(41, '\n          ')),
          2 & n &&
            (l.xb(8),
            l.Hc(
              '\n                    ',
              l.hc(9, 6, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_SECURITY0'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(12, 8, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_SECURITY01')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(17, 10, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_SECURITY1'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(20, 12, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_SECURITY11')
            ),
            l.xb(5),
            l.Hc(
              '\n                    ',
              l.hc(25, 14, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_SECURITY2'),
              '\n                    '
            ),
            l.xb(3),
            l.Gc(
              l.hc(28, 16, 'DEMOS.START_UP.WHY_DASHCORE.ENGAGING_SECURITY22')
            ));
      }
      let C = (() => {
        class n {
          constructor(n) {
            this.translate = n;
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(c) {
            return new (c || n)(l.Lb(d.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
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
                (l.Qb(0, 'section', 0),
                l.Fc(1, '\n  '),
                l.Qb(2, 'div', 1),
                l.Fc(3, '\n    '),
                l.Qb(4, 'div', 2),
                l.Fc(5, '\n      '),
                l.Qb(6, 'h2'),
                l.Fc(7),
                l.gc(8, 'translate'),
                l.Pb(),
                l.Fc(9, '\n      '),
                l.Qb(10, 'p', 3),
                l.Fc(11),
                l.gc(12, 'translate'),
                l.Pb(),
                l.Fc(13, '\n    '),
                l.Pb(),
                l.Fc(14, '\n\n    '),
                l.Qb(15, 'div', 4),
                l.Fc(16, '\n      '),
                l.Qb(17, 'ngb-tabset', 5),
                l.Fc(18, '\n        '),
                l.Qb(19, 'ngb-tab'),
                l.Fc(20, '\n          '),
                l.Dc(21, D, 5, 3, 'ng-template', 6),
                l.Fc(22, '\n          '),
                l.Dc(23, O, 42, 18, 'ng-template', 7),
                l.Fc(24, '\n        '),
                l.Pb(),
                l.Fc(25, '\n\n        '),
                l.Qb(26, 'ngb-tab'),
                l.Fc(27, '\n          '),
                l.Dc(28, R, 3, 3, 'ng-template', 6),
                l.Fc(29, '\n          '),
                l.Dc(30, G, 42, 18, 'ng-template', 7),
                l.Fc(31, '\n        '),
                l.Pb(),
                l.Fc(32, '\n\n        '),
                l.Qb(33, 'ngb-tab'),
                l.Fc(34, '\n          '),
                l.Dc(35, h, 3, 3, 'ng-template', 6),
                l.Fc(36, '\n          '),
                l.Dc(37, H, 42, 18, 'ng-template', 7),
                l.Fc(38, '\n        '),
                l.Pb(),
                l.Fc(39, '\n        '),
                l.Qb(40, 'ngb-tab'),
                l.Fc(41, '\n          '),
                l.Dc(42, N, 3, 3, 'ng-template', 6),
                l.Fc(43, '\n          '),
                l.Dc(44, Q, 42, 18, 'ng-template', 7),
                l.Fc(45, '\n        '),
                l.Pb(),
                l.Fc(46, '\n\n        '),
                l.Qb(47, 'ngb-tab'),
                l.Fc(48, '\n          '),
                l.Dc(49, m, 3, 3, 'ng-template', 6),
                l.Fc(50, '\n          '),
                l.Dc(51, M, 42, 18, 'ng-template', 7),
                l.Fc(52, '\n        '),
                l.Pb(),
                l.Fc(53, '\n\n        '),
                l.Qb(54, 'ngb-tab'),
                l.Fc(55, '\n          '),
                l.Dc(56, I, 3, 3, 'ng-template', 6),
                l.Fc(57, '\n          '),
                l.Dc(58, u, 42, 18, 'ng-template', 7),
                l.Fc(59, '\n        '),
                l.Pb(),
                l.Fc(60, '\n        '),
                l.Qb(61, 'ngb-tab'),
                l.Fc(62, '\n          '),
                l.Dc(63, x, 3, 3, 'ng-template', 6),
                l.Fc(64, '\n          '),
                l.Dc(65, f, 42, 18, 'ng-template', 7),
                l.Fc(66, '\n        '),
                l.Pb(),
                l.Fc(67, '\n        '),
                l.Qb(68, 'ngb-tab'),
                l.Fc(69, '\n          '),
                l.Dc(70, U, 3, 3, 'ng-template', 6),
                l.Fc(71, '\n          '),
                l.Dc(72, v, 42, 18, 'ng-template', 7),
                l.Fc(73, '\n        '),
                l.Pb(),
                l.Fc(74, '\n      '),
                l.Pb(),
                l.Fc(75, '\n    '),
                l.Pb(),
                l.Fc(76, '\n  '),
                l.Pb(),
                l.Fc(77, '\n'),
                l.Pb(),
                l.Fc(78, '\n')),
                2 & n &&
                  (l.xb(7),
                  l.Hc(
                    '\n        ',
                    l.hc(
                      8,
                      3,
                      'DEMOS.START_UP.WHY_DASHCORE.WHY_DASHCORE_TEMPLATE'
                    ),
                    '\n      '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n        ',
                    l.hc(12, 5, 'DEMOS.START_UP.WHY_DASHCORE.WHEN_LOOKING'),
                    '\n      '
                  ),
                  l.xb(6),
                  l.kc('destroyOnHide', !1));
            },
            directives: [F.r, F.o, F.q, F.p],
            pipes: [d.b],
            styles: ['']
          })),
          n
        );
      })();
      var Y = t('u3Pa');
      function W(n, c) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 7),
            l.Fc(1, '\n        '),
            l.Qb(2, 'div', 8),
            l.Fc(3, '\n          '),
            l.Qb(4, 'dc-modal-video', 9),
            l.Fc(5, '\n            '),
            l.Qb(6, 'div', 10),
            l.Fc(7, '\n              '),
            l.Qb(8, 'div', 11),
            l.Fc(9, '\n                '),
            l.Mb(10, 'dc-feather', 12),
            l.Fc(11, '\n              '),
            l.Pb(),
            l.Fc(12, '\n            '),
            l.Pb(),
            l.Fc(13, '\n          '),
            l.Pb(),
            l.Fc(14, '\n\n          '),
            l.Qb(15, 'div', 13),
            l.Fc(16, '\n            '),
            l.Qb(17, 'h4', 14),
            l.Fc(18),
            l.gc(19, 'translate'),
            l.Pb(),
            l.Fc(20, '\n\n            '),
            l.Qb(21, 'p', 15),
            l.Fc(22),
            l.gc(23, 'translate'),
            l.Pb(),
            l.Fc(24, '\n          '),
            l.Pb(),
            l.Fc(25, '\n        '),
            l.Pb(),
            l.Fc(26, '\n      '),
            l.Pb()),
          2 & n)
        ) {
          const n = c.$implicit;
          l.xb(4),
            l.kc('identifier', 'myModal')('videoId', n.videoId),
            l.xb(2),
            l.Cc(
              'background-image',
              'url(assets/images/calendar/' + n.gravity + ')'
            ),
            l.xb(4),
            l.kc('name', 'play')('iconClass', 'stroke-contrast'),
            l.xb(8),
            l.Gc(l.hc(19, 8, n.title)),
            l.xb(4),
            l.Hc(
              '\n              ',
              l.hc(23, 10, n.description),
              '.\n            '
            );
        }
      }
      let L = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
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
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(c) {
            return new (c || n)(l.Lb(d.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
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
                (l.Fc(0, '\n'),
                l.Qb(1, 'section', 0),
                l.Fc(2, '\n  '),
                l.Qb(3, 'div', 1),
                l.Fc(4, '\n    '),
                l.Qb(5, 'div', 2),
                l.Fc(6, '\n      '),
                l.Qb(7, 'h2', 3),
                l.Fc(8),
                l.gc(9, 'translate'),
                l.Pb(),
                l.Fc(10, '\n      '),
                l.Qb(11, 'p', 4),
                l.Fc(12),
                l.gc(13, 'translate'),
                l.Pb(),
                l.Fc(14, '\n    '),
                l.Pb(),
                l.Fc(15, '\n\n    '),
                l.Qb(16, 'div', 5),
                l.Fc(17, '\n      '),
                l.Dc(18, W, 27, 12, 'div', 6),
                l.Fc(19, '\n    '),
                l.Pb(),
                l.Fc(20, '\n  '),
                l.Pb(),
                l.Fc(21, '\n'),
                l.Pb(),
                l.Fc(22, '\n')),
                2 & n &&
                  (l.xb(8),
                  l.Hc(
                    '\n        ',
                    l.hc(9, 3, 'DEMOS.START_UP.VIDEOs.HOW_TO_VIDEO'),
                    '\n      '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n        ',
                    l.hc(13, 5, 'DEMOS.START_UP.VIDEOs.TAKE_A_LOOKING_AT'),
                    '\n      '
                  ),
                  l.xb(6),
                  l.kc('ngForOf', c.posts));
            },
            directives: [T.j, Y.a, g.a],
            pipes: [d.b],
            styles: ['']
          })),
          n
        );
      })();
      var y = t('u8tZ'),
        w = t('aaX3'),
        k = t('mrcQ');
      let V = (() => {
        class n {
          constructor(n) {
            this.translate = n;
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(c) {
            return new (c || n)(l.Lb(d.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
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
                (l.Fc(0, '\n'),
                l.Qb(1, 'section', 0),
                l.Fc(2, '\n  '),
                l.Qb(3, 'div', 1),
                l.Fc(4, '\n    '),
                l.Qb(5, 'div', 2),
                l.Fc(6, '\n      '),
                l.Qb(7, 'div', 3),
                l.Fc(8, '\n        '),
                l.Qb(9, 'p', 4),
                l.Fc(10, '\n          '),
                l.Qb(11, 'a', 5),
                l.Fc(12),
                l.gc(13, 'translate'),
                l.Pb(),
                l.Fc(14, '\n        '),
                l.Pb(),
                l.Fc(15, '\n        '),
                l.Qb(16, 'h2', 6),
                l.Fc(17),
                l.gc(18, 'translate'),
                l.Pb(),
                l.Fc(19, '\n        '),
                l.Qb(20, 'p', 6),
                l.Fc(21),
                l.gc(22, 'translate'),
                l.Pb(),
                l.Fc(23, '\n      '),
                l.Pb(),
                l.Fc(24, '\n\n      '),
                l.Qb(25, 'nav', 7),
                l.Fc(26, '\n        '),
                l.Qb(27, 'a', 8),
                l.Fc(28, '\n          '),
                l.Mb(29, 'img', 9),
                l.Fc(30, '\n          '),
                l.Qb(31, 'p', 10),
                l.Fc(32, '\n            '),
                l.Qb(33, 'span', 11),
                l.Fc(34),
                l.gc(35, 'translate'),
                l.Pb(),
                l.Fc(36, '\n            '),
                l.Qb(37, 'span', 12),
                l.Fc(38),
                l.gc(39, 'translate'),
                l.Pb(),
                l.Fc(40, '\n          '),
                l.Pb(),
                l.Fc(41, '\n        '),
                l.Pb(),
                l.Fc(42, '\n\n        '),
                l.Qb(43, 'a', 13),
                l.Fc(44, '\n          '),
                l.Mb(45, 'img', 14),
                l.Fc(46, '\n          '),
                l.Qb(47, 'p', 10),
                l.Fc(48, '\n            '),
                l.Qb(49, 'span', 11),
                l.Fc(50),
                l.gc(51, 'translate'),
                l.Pb(),
                l.Fc(52, '\n            '),
                l.Qb(53, 'span', 15),
                l.Fc(54),
                l.gc(55, 'translate'),
                l.Pb(),
                l.Fc(56, '\n          '),
                l.Pb(),
                l.Fc(57, '\n        '),
                l.Pb(),
                l.Fc(58, '\n      '),
                l.Pb(),
                l.Fc(59, '\n    '),
                l.Pb(),
                l.Fc(60, '\n  '),
                l.Pb(),
                l.Fc(61, '\n'),
                l.Pb(),
                l.Fc(62, '\n')),
                2 & n &&
                  (l.xb(12),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      13,
                      7,
                      'DEMOS.SALES.APP_LANDING2_DOWNLOAD.START_TODAY'
                    ),
                    '\n          '
                  ),
                  l.xb(5),
                  l.Hc(
                    '\n          ',
                    l.hc(
                      18,
                      9,
                      'DEMOS.SALES.APP_LANDING2_DOWNLOAD.DOWNLOAD_THE_APP'
                    ),
                    '\n        '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n          ',
                    l.hc(
                      22,
                      11,
                      'DEMOS.SALES.APP_LANDING2_DOWNLOAD.DOWNLOAD_EVERTTHINK'
                    ),
                    '\n        '
                  ),
                  l.xb(13),
                  l.Hc(
                    '\n              ',
                    l.hc(
                      35,
                      13,
                      'DEMOS.SALES.APP_LANDING2_DOWNLOAD.GET_IT_ON_THE'
                    ),
                    ''
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n              ',
                    l.hc(39, 15, 'DEMOS.SALES.APP_LANDING2_DOWNLOAD.APP_STORE'),
                    ''
                  ),
                  l.xb(12),
                  l.Hc(
                    '\n              ',
                    l.hc(
                      51,
                      17,
                      'DEMOS.SALES.APP_LANDING2_DOWNLOAD.DOWNLOAD_ON'
                    ),
                    ''
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n              ',
                    l.hc(
                      55,
                      19,
                      'DEMOS.SALES.APP_LANDING2_DOWNLOAD.GOOGLE_PLAY'
                    ),
                    ''
                  ));
            },
            pipes: [d.b],
            styles: ['']
          })),
          n
        );
      })();
      var j = t('iLZQ');
      function B(n, c) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 7),
            l.Fc(1, '\n      '),
            l.Mb(2, 'dc-feather', 8),
            l.Fc(3, '\n      '),
            l.Qb(4, 'p', 9),
            l.Fc(5),
            l.gc(6, 'translate'),
            l.Pb(),
            l.Fc(7, '\n      '),
            l.Qb(8, 'p'),
            l.Fc(9),
            l.gc(10, 'translate'),
            l.Pb(),
            l.Fc(11, '\n    '),
            l.Pb()),
          2 & n)
        ) {
          const n = c.$implicit;
          l.xb(2),
            l.kc('name', n.icon)('iconClass', 'stroke-primary mb-3'),
            l.xb(3),
            l.Gc(l.hc(6, 4, n.title)),
            l.xb(4),
            l.Hc('\n        ', l.hc(10, 6, n.description), '\n      ');
        }
      }
      const K = function() {
          return {
            icon: 'briefcase',
            title: 'DEMOS.START_UP.WHAT_YOU_GET.BUSINESS_TITLE',
            description: 'DEMOS.START_UP.WHAT_YOU_GET.BUSINESS_DESC'
          };
        },
        X = function() {
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
        J = function() {
          return {
            icon: 'clock',
            title: 'DEMOS.START_UP.WHAT_YOU_GET.SITE_TITLE',
            description: 'DEMOS.START_UP.WHAT_YOU_GET.SAVING_DESC'
          };
        },
        Z = function(n, c, t, e) {
          return [n, c, t, e];
        },
        $ = [
          {
            path: '',
            component: (() => {
              class n {
                constructor(n) {
                  (this.i18nService = n), this.updateSeoTags();
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
                (n.ɵfac = function(c) {
                  return new (c || n)(l.Lb(o.a));
                }),
                (n.ɵcmp = l.Fb({
                  type: n,
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
                      (l.Mb(0, 'dc-startup-heading'),
                      l.Fc(1, '\n\n'),
                      l.Qb(2, 'dc-big-screen', 0),
                      l.Fc(3, '\n  '),
                      l.Qb(4, 'div', 1),
                      l.Fc(5, '\n    '),
                      l.Qb(6, 'p', 2),
                      l.Fc(7),
                      l.gc(8, 'translate'),
                      l.Pb(),
                      l.Fc(9, '\n\n    '),
                      l.Qb(10, 'a', 3),
                      l.Fc(11),
                      l.gc(12, 'translate'),
                      l.Pb(),
                      l.Fc(13, '\n    '),
                      l.Mb(14, 'br'),
                      l.Fc(15, '\n    '),
                      l.Mb(16, 'br'),
                      l.Fc(17, '\n    '),
                      l.Mb(18, 'br'),
                      l.Fc(19, '\n    '),
                      l.Mb(20, 'br'),
                      l.Fc(21, '\n\n    '),
                      l.Qb(22, 'h2'),
                      l.Fc(23),
                      l.gc(24, 'translate'),
                      l.Pb(),
                      l.Fc(25, '\n    '),
                      l.Qb(26, 'p', 4),
                      l.Fc(27),
                      l.gc(28, 'translate'),
                      l.Pb(),
                      l.Fc(29, '\n  '),
                      l.Pb(),
                      l.Fc(30, '\n  '),
                      l.Qb(31, 'div', 5),
                      l.Fc(32, '\n    '),
                      l.Dc(33, B, 12, 8, 'div', 6),
                      l.Fc(34, '\n  '),
                      l.Pb(),
                      l.Fc(35, '\n'),
                      l.Pb(),
                      l.Fc(36, '\n'),
                      l.Mb(37, 'dc-startup-features'),
                      l.Fc(38, '\n\n'),
                      l.Mb(39, 'dc-startup-why-dashcore'),
                      l.Fc(40, '\n'),
                      l.Mb(41, 'dc-startup-videos'),
                      l.Fc(42, '\n'),
                      l.Mb(43, 'dc-pricing-cards'),
                      l.Fc(44, '\n'),
                      l.Mb(45, 'dc-slider-icons'),
                      l.Fc(46, '\n'),
                      l.Mb(47, 'br'),
                      l.Fc(48, '\n'),
                      l.Mb(49, 'br'),
                      l.Fc(50, '\n'),
                      l.Mb(51, 'br'),
                      l.Fc(52, '\n'),
                      l.Mb(53, 'br'),
                      l.Fc(54, '\n'),
                      l.Mb(55, 'br'),
                      l.Fc(56, '\n'),
                      l.Mb(57, 'br'),
                      l.Fc(58, '\n'),
                      l.Mb(59, 'br'),
                      l.Fc(60, '\n'),
                      l.Mb(61, 'br'),
                      l.Fc(62, '\n'),
                      l.Mb(63, 'br'),
                      l.Fc(64, '\n'),
                      l.Mb(65, 'br'),
                      l.Fc(66, '\n'),
                      l.Mb(67, 'dc-pricing-two-cards'),
                      l.Fc(68, '\n'),
                      l.Mb(69, 'dc-startup-download'),
                      l.Fc(70, '\n'),
                      l.Mb(71, 'dc-footer2'),
                      l.Fc(72, '\n')),
                      2 & n &&
                        (l.xb(2),
                        l.kc('img', 'assets/images/calendar/calendar.png'),
                        l.xb(5),
                        l.Hc(
                          '\n      ',
                          l.hc(8, 6, 'USUAL.START_NOW_BOX.WHY_WAIT'),
                          '\n    '
                        ),
                        l.xb(4),
                        l.Hc(
                          '\n      ',
                          l.hc(12, 8, 'USUAL.START_NOW_BOX.START_NOW'),
                          '\n    '
                        ),
                        l.xb(12),
                        l.Gc(
                          l.hc(
                            24,
                            10,
                            'DEMOS.SAAS.WHAT_YOU_WILL_GET_WITH_EVERTTHINK'
                          )
                        ),
                        l.xb(4),
                        l.Hc(
                          '\n      ',
                          l.hc(
                            28,
                            12,
                            'DEMOS.SAAS.GEOLOCATED_INTELLIGENT_ASSISTANTS'
                          ),
                          '\n    '
                        ),
                        l.xb(6),
                        l.kc(
                          'ngForOf',
                          l.rc(
                            18,
                            Z,
                            l.nc(14, K),
                            l.nc(15, X),
                            l.nc(16, z),
                            l.nc(17, J)
                          )
                        ));
                  },
                  directives: [
                    A,
                    P.a,
                    T.j,
                    p,
                    C,
                    L,
                    y.a,
                    w.a,
                    k.a,
                    V,
                    j.a,
                    g.a
                  ],
                  pipes: [d.b],
                  styles: ['']
                })),
                n
              );
            })(),
            data: { title: Object(o.c)('EveryThink - Social Demo') }
          }
        ];
      let q = (() => {
        class n {}
        return (
          (n.ɵmod = l.Jb({ type: n })),
          (n.ɵinj = l.Ib({
            factory: function(c) {
              return new (c || n)();
            },
            imports: [[S.g.forChild($)], S.g]
          })),
          n
        );
      })();
      var nn = t('N7aX');
      let cn = (() => {
        class n {}
        return (
          (n.ɵmod = l.Jb({ type: n })),
          (n.ɵinj = l.Ib({
            factory: function(c) {
              return new (c || n)();
            },
            providers: [nn.a],
            imports: [
              [e.a, b.a, a.a, s.a, r.a, F.s, i.a, E.a, q, d.a.forChild()]
            ]
          })),
          n
        );
      })();
    }
  }
]);
