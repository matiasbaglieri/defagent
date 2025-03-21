!(function() {
  function n(n, c) {
    if (!(n instanceof c))
      throw new TypeError('Cannot call a class as a function');
  }
  function c(n, c) {
    for (var e = 0; e < c.length; e++) {
      var t = c[e];
      (t.enumerable = t.enumerable || !1),
        (t.configurable = !0),
        'value' in t && (t.writable = !0),
        Object.defineProperty(n, t.key, t);
    }
  }
  function e(n, e, t) {
    return e && c(n.prototype, e), t && c(n, t), n;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [21],
    {
      '55KT': function(c, t, a) {
        'use strict';
        a.r(t),
          a.d(t, 'SaasModule', function() {
            return Z;
          });
        var i,
          s,
          r,
          b = a('M0ag'),
          o = a('2d4A'),
          d = a('pu65'),
          F = a('P6su'),
          l = a('8klf'),
          p = a('ORAR'),
          u = a('M0Rk'),
          g = a('tyNb'),
          E = a('ey9i'),
          S = a('fXoL'),
          m = a('wHSu'),
          h = a('sYmb'),
          v = a('ofXK'),
          f = a('6NWb'),
          I =
            (((s = (function() {
              function c(e) {
                n(this, c), (this.translate = e), (this.tag = m.t);
              }
              return e(c, [{ key: 'ngOnInit', value: function() {} }]), c;
            })()).ɵfac = function(n) {
              return new (n || s)(S.Lb(h.c));
            }),
            (s.ɵcmp = S.Fb({
              type: s,
              selectors: [['dc-saas-heading']],
              decls: 46,
              vars: 19,
              consts: [
                [
                  1,
                  'header',
                  'page',
                  'alter2-header',
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
                  3,
                  'ngClass'
                ],
                [1, 'container', 'overflow-hidden'],
                [1, 'row'],
                [1, 'col-md-7'],
                [1, 'text-contrast', 'bold'],
                [1, 'd-block', 'light'],
                [1, 'lead'],
                [1, 'nav', 'mt-5'],
                [
                  'href',
                  '#',
                  1,
                  'nav-link',
                  'mr-3',
                  'btn',
                  'btn',
                  'btn-rounded',
                  'btn-contrast'
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
                ]
              ],
              template: function(n, c) {
                1 & n &&
                  (S.Qb(0, 'header', 0),
                  S.Fc(1, '\n  '),
                  S.Qb(2, 'div', 1),
                  S.Fc(3, '\n    '),
                  S.Fc(4, '\n    '),
                  S.ec(),
                  S.Qb(5, 'svg', 2),
                  S.Fc(6, '\n      '),
                  S.Mb(7, 'path', 3),
                  S.Fc(8, '\n    '),
                  S.Pb(),
                  S.Fc(9, '\n  '),
                  S.Pb(),
                  S.Fc(10, '\n\n  '),
                  S.dc(),
                  S.Qb(11, 'div', 4),
                  S.Fc(12, '\n    '),
                  S.Qb(13, 'div', 5),
                  S.Fc(14, '\n      '),
                  S.Qb(15, 'div', 6),
                  S.Fc(16, '\n        '),
                  S.Qb(17, 'h1', 7),
                  S.Fc(18),
                  S.gc(19, 'translate'),
                  S.Qb(20, 'span', 8),
                  S.Fc(21),
                  S.gc(22, 'translate'),
                  S.Pb(),
                  S.Fc(23, '\n        '),
                  S.Pb(),
                  S.Fc(24, '\n        '),
                  S.Qb(25, 'p', 9),
                  S.Fc(26),
                  S.gc(27, 'translate'),
                  S.Pb(),
                  S.Fc(28, '\n\n        '),
                  S.Qb(29, 'nav', 10),
                  S.Fc(30, '\n          '),
                  S.Qb(31, 'a', 11),
                  S.Fc(32, '\n            '),
                  S.Mb(33, 'fa-icon', 12),
                  S.Fc(34),
                  S.gc(35, 'translate'),
                  S.Pb(),
                  S.Fc(36, '\n\n          '),
                  S.Qb(37, 'a', 13),
                  S.Fc(38),
                  S.gc(39, 'translate'),
                  S.Pb(),
                  S.Fc(40, '\n        '),
                  S.Pb(),
                  S.Fc(41, '\n      '),
                  S.Pb(),
                  S.Fc(42, '\n    '),
                  S.Pb(),
                  S.Fc(43, '\n  '),
                  S.Pb(),
                  S.Fc(44, '\n'),
                  S.Pb(),
                  S.Fc(45, '\n')),
                  2 & n &&
                    (S.Cc(
                      'background-image',
                      'url(assets/images/saas/bg/grid.jpg)'
                    ),
                    S.xb(7),
                    S.kc('ngClass', 'shape-fill-contrast'),
                    S.xb(11),
                    S.Hc(
                      '\n          ',
                      S.hc(
                        19,
                        9,
                        'DEMOS.SAAS.HEADING.EVERYTHINK_FOR_REAL_ESTATE'
                      ),
                      '\n          '
                    ),
                    S.xb(3),
                    S.Hc(
                      '\n            ',
                      S.hc(
                        22,
                        11,
                        'DEMOS.SAAS.HEADING.YOU_AGENT_IN_YOUR_HANDS_WITHGLOBAL_REACH'
                      ),
                      ''
                    ),
                    S.xb(5),
                    S.Hc(
                      '\n          ',
                      S.hc(27, 13, 'DEMOS.SAAS.HEADING.OUT_IAS_ARE_POISED'),
                      '.\n        '
                    ),
                    S.xb(7),
                    S.kc('icon', c.tag),
                    S.xb(1),
                    S.Hc(
                      '\n            ',
                      S.hc(35, 15, 'DEMOS.SAAS.HEADING.PLANS_AND_PRICING'),
                      '\n          '
                    ),
                    S.xb(4),
                    S.Hc(
                      '\n            ',
                      S.hc(39, 17, 'DEMOS.SAAS.HEADING.START_NOW'),
                      '\n          '
                    ));
              },
              directives: [v.i, f.a],
              pipes: [h.b],
              styles: ['']
            })),
            s),
          P =
            (((i = (function() {
              function c() {
                n(this, c);
              }
              return e(c, [{ key: 'ngOnInit', value: function() {} }]), c;
            })()).ɵfac = function(n) {
              return new (n || i)();
            }),
            (i.ɵcmp = S.Fb({
              type: i,
              selectors: [['dc-saas-perspective-mockups']],
              decls: 49,
              vars: 0,
              consts: [
                [1, 'perspective-mockups', 'hidden-preload'],
                [1, 'tablet', 'ipad', 'landscape'],
                [1, 'screen'],
                [
                  'src',
                  'assets/images/saas/screens/tablet/1.png',
                  'alt',
                  '...'
                ],
                [1, 'button'],
                [1, 'phone-big', 'iphone-x'],
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
                [
                  'src',
                  'assets/images/saas/screens/app/Story-Realstate-Carol-hill-Agent.mp4',
                  'type',
                  'video/mp4'
                ],
                [1, 'notch'],
                [1, 'phone-small', 'iphone-x'],
                [
                  'src',
                  'assets/images/saas/screens/app/Story-Realstate-Diana-Rent-Home.mp4',
                  'type',
                  'video/mp4'
                ],
                [1, 'tablet', 'ipad', 'portrait'],
                ['src', 'assets/images/saas/screens/tablet/2.png', 'alt', '...']
              ],
              template: function(n, c) {
                1 & n &&
                  (S.Qb(0, 'section', 0),
                  S.Fc(1, '\n  '),
                  S.Qb(2, 'div', 1),
                  S.Fc(3, '\n    '),
                  S.Qb(4, 'div', 2),
                  S.Fc(5, '\n      '),
                  S.Mb(6, 'img', 3),
                  S.Fc(7, '\n    '),
                  S.Pb(),
                  S.Fc(8, '\n    '),
                  S.Mb(9, 'div', 4),
                  S.Fc(10, '\n  '),
                  S.Pb(),
                  S.Fc(11, '\n\n  '),
                  S.Qb(12, 'div', 5),
                  S.Fc(13, '\n    '),
                  S.Qb(14, 'div', 2),
                  S.Fc(15, '\n      '),
                  S.Qb(16, 'video', 6),
                  S.Fc(17, '\n        '),
                  S.Mb(18, 'source', 7),
                  S.Fc(19, '\n      '),
                  S.Pb(),
                  S.Fc(20, '\n    '),
                  S.Pb(),
                  S.Fc(21, '\n    '),
                  S.Mb(22, 'div', 8),
                  S.Fc(23, '\n  '),
                  S.Pb(),
                  S.Fc(24, '\n\n  '),
                  S.Qb(25, 'div', 9),
                  S.Fc(26, '\n    '),
                  S.Qb(27, 'div', 2),
                  S.Fc(28, '\n      '),
                  S.Qb(29, 'video', 6),
                  S.Fc(30, '\n        '),
                  S.Mb(31, 'source', 10),
                  S.Fc(32, '\n      '),
                  S.Pb(),
                  S.Fc(33, '\n    '),
                  S.Pb(),
                  S.Fc(34, '\n    '),
                  S.Mb(35, 'div', 8),
                  S.Fc(36, '\n  '),
                  S.Pb(),
                  S.Fc(37, '\n\n  '),
                  S.Qb(38, 'div', 11),
                  S.Fc(39, '\n    '),
                  S.Qb(40, 'div', 2),
                  S.Fc(41, '\n      '),
                  S.Mb(42, 'img', 12),
                  S.Fc(43, '\n    '),
                  S.Pb(),
                  S.Fc(44, '\n    '),
                  S.Mb(45, 'div', 4),
                  S.Fc(46, '\n  '),
                  S.Pb(),
                  S.Fc(47, '\n'),
                  S.Pb(),
                  S.Fc(48, '\n'));
              },
              styles: ['']
            })),
            i),
          _ = function() {
            return ['/about'];
          },
          A =
            (((r = (function() {
              function c(e) {
                n(this, c), (this.translate = e);
              }
              return e(c, [{ key: 'ngOnInit', value: function() {} }]), c;
            })()).ɵfac = function(n) {
              return new (n || r)(S.Lb(h.c));
            }),
            (r.ɵcmp = S.Fb({
              type: r,
              selectors: [['dc-saas-lightweight-template']],
              decls: 28,
              vars: 14,
              consts: [
                [1, 'section', 'lightweight-template'],
                [1, 'container'],
                [1, 'row', 'align-items-center', 'text-center', 'text-lg-left'],
                [1, 'col-md-8', 'col-lg-6', 'mr-auto'],
                [1, 'lead', 'text-secondary'],
                [
                  1,
                  'btn',
                  'btn-info',
                  'btn-rounded',
                  'mt-4',
                  'learn-more',
                  3,
                  'routerLink'
                ]
              ],
              template: function(n, c) {
                1 & n &&
                  (S.Qb(0, 'section', 0),
                  S.Fc(1, '\n  '),
                  S.Qb(2, 'div', 1),
                  S.Fc(3, '\n    '),
                  S.Qb(4, 'div', 2),
                  S.Fc(5, '\n      '),
                  S.Qb(6, 'div', 3),
                  S.Fc(7, '\n        '),
                  S.Qb(8, 'h2'),
                  S.Fc(9),
                  S.gc(10, 'translate'),
                  S.Pb(),
                  S.Fc(11, '\n\n        '),
                  S.Qb(12, 'p', 4),
                  S.Fc(13),
                  S.gc(14, 'translate'),
                  S.Pb(),
                  S.Fc(15, '\n\n        '),
                  S.Qb(16, 'p'),
                  S.Fc(17),
                  S.gc(18, 'translate'),
                  S.Pb(),
                  S.Fc(19, '\n\n        '),
                  S.Qb(20, 'a', 5),
                  S.Fc(21),
                  S.gc(22, 'translate'),
                  S.Pb(),
                  S.Fc(23, '\n      '),
                  S.Pb(),
                  S.Fc(24, '\n    '),
                  S.Pb(),
                  S.Fc(25, '\n  '),
                  S.Pb(),
                  S.Fc(26, '\n'),
                  S.Pb(),
                  S.Fc(27, '\n')),
                  2 & n &&
                    (S.xb(9),
                    S.Hc(
                      '\n          ',
                      S.hc(
                        10,
                        5,
                        'DEMOS.SAAS.LIGHTWEIGHT_TEMPLATE.YOUR_SMART_PUPPETS'
                      ),
                      '\n        '
                    ),
                    S.xb(4),
                    S.Hc(
                      '\n          ',
                      S.hc(
                        14,
                        7,
                        'DEMOS.SAAS.LIGHTWEIGHT_TEMPLATE.WILL_PROVIDE_YOUR_PROSPECTS_AND_CLIENTS'
                      ),
                      '\n        '
                    ),
                    S.xb(4),
                    S.Hc(
                      '\n          ',
                      S.hc(
                        18,
                        9,
                        'DEMOS.SAAS.LIGHTWEIGHT_TEMPLATE.SIMLIFYING_THE_CURRENT'
                      ),
                      '\n        '
                    ),
                    S.xb(3),
                    S.kc('routerLink', S.nc(13, _)),
                    S.xb(1),
                    S.Hc(
                      '\n          ',
                      S.hc(
                        22,
                        11,
                        'DEMOS.SAAS.LIGHTWEIGHT_TEMPLATE.LEARN_MORE'
                      ),
                      '\n        '
                    ));
              },
              directives: [g.f],
              pipes: [h.b],
              styles: ['']
            })),
            r),
          L = a('nZwE'),
          Q = a('nhfI'),
          x = a('KO+a');
        function N(n, c) {
          if (1 & n) {
            var e = S.Rb();
            S.Qb(0, 'a', 26),
              S.bc('click', function() {
                S.vc(e);
                var n = c.index;
                return S.fc().updateSlider(n);
              }),
              S.Fc(1),
              S.Pb();
          }
          if (2 & n) {
            var t = c.$implicit,
              a = c.index,
              i = S.fc();
            S.Db('active', a === i.currentSlide),
              S.xb(1),
              S.Hc('\n        ', t, '\n      ');
          }
        }
        var O,
          T = function() {
            return ['Solution', 'Efficiency', 'Experience', 'Itearate'];
          },
          y =
            (((O = (function() {
              function c(e) {
                n(this, c), (this.translate = e), (this.currentSlide = 0);
              }
              return (
                e(c, [
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
                c
              );
            })()).ɵfac = function(n) {
              return new (n || O)(S.Lb(h.c));
            }),
            (O.ɵcmp = S.Fb({
              type: O,
              selectors: [['dc-slider-all-in-one']],
              decls: 158,
              vars: 53,
              consts: [
                [1, 'section'],
                [1, 'container'],
                [1, 'section-heading', 'text-center'],
                [1, 'bold'],
                [
                  1,
                  'slide',
                  'nav',
                  'nav-tabs',
                  'nav-outlined',
                  'nav-rounded',
                  'justify-content-around',
                  'justify-content-md-center',
                  'mb-5'
                ],
                [
                  'class',
                  'nav-item nav-link',
                  3,
                  'active',
                  'click',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [3, 'index', 'indexChange'],
                [1, 'swiper-slide'],
                [1, 'container-fluid', 'pt-0', 'pb-4'],
                [1, 'row', 'gap-y', 'align-items-center'],
                [1, 'col-md-6', 'mr-md-auto'],
                [1, 'browser', 'shadow'],
                [
                  'src',
                  'assets/img/screens/dash/Imagen_1.png',
                  'alt',
                  '',
                  1,
                  'img-responsive'
                ],
                [1, 'col-md-5'],
                [3, 'bg', 'text'],
                [1, 'display-4', 'light'],
                [1, 'col-md-6', 'order-md-2', 'ml-md-auto'],
                [1, ''],
                [
                  'src',
                  'assets/img/screens/dash/stockvault-trade-and-commerce-world-map-over-city-at-night240624.jpg',
                  'alt',
                  '',
                  1,
                  'img-responsive'
                ],
                [1, 'col-md-5', 'mr-md-auto'],
                [1, 'lead'],
                [1, 'mt-5'],
                [1, 'small', 'text-secondary'],
                [
                  'src',
                  'assets/img/screens/dash/prueba_01.png',
                  'alt',
                  '',
                  1,
                  'img-responsive',
                  2,
                  'right',
                  '0',
                  'top',
                  '0'
                ],
                [1, 'lead', 'text-secondary'],
                [
                  'src',
                  'assets/img/screens/dash/brain.png',
                  'alt',
                  '',
                  1,
                  'img-responsive',
                  2,
                  'right',
                  '0',
                  'top',
                  '0'
                ],
                [1, 'nav-item', 'nav-link', 3, 'click']
              ],
              template: function(n, c) {
                1 & n &&
                  (S.Qb(0, 'section', 0),
                  S.Fc(1, '\n  '),
                  S.Qb(2, 'div', 1),
                  S.Fc(3, '\n    '),
                  S.Qb(4, 'div', 2),
                  S.Fc(5, '\n      '),
                  S.Qb(6, 'h2', 3),
                  S.Fc(7),
                  S.gc(8, 'translate'),
                  S.Pb(),
                  S.Fc(9, '\n    '),
                  S.Pb(),
                  S.Fc(10, '\n\n    '),
                  S.Qb(11, 'nav', 4),
                  S.Fc(12, '\n      '),
                  S.Dc(13, N, 2, 3, 'a', 5),
                  S.Fc(14, '\n    '),
                  S.Pb(),
                  S.Fc(15, '\n\n    '),
                  S.Qb(16, 'swiper', 6),
                  S.bc('indexChange', function(n) {
                    return c.onIndexChange(n);
                  }),
                  S.Fc(17, '\n      '),
                  S.Qb(18, 'div', 7),
                  S.Fc(19, '\n        '),
                  S.Qb(20, 'div', 8),
                  S.Fc(21, '\n          '),
                  S.Qb(22, 'div', 9),
                  S.Fc(23, '\n            '),
                  S.Qb(24, 'div', 10),
                  S.Fc(25, '\n              '),
                  S.Qb(26, 'div', 11),
                  S.Fc(27, '\n                '),
                  S.Mb(28, 'img', 12),
                  S.Fc(29, '\n              '),
                  S.Pb(),
                  S.Fc(30, '\n            '),
                  S.Pb(),
                  S.Fc(31, '\n\n            '),
                  S.Qb(32, 'div', 13),
                  S.Fc(33, '\n              '),
                  S.Qb(34, 'dc-badge', 14),
                  S.Fc(35),
                  S.gc(36, 'translate'),
                  S.Pb(),
                  S.Fc(37, '\n              '),
                  S.Qb(38, 'h2', 15),
                  S.Fc(39),
                  S.gc(40, 'translate'),
                  S.Pb(),
                  S.Fc(41, '\n              '),
                  S.Qb(42, 'p'),
                  S.Fc(43),
                  S.gc(44, 'translate'),
                  S.Pb(),
                  S.Fc(45, '\n            '),
                  S.Pb(),
                  S.Fc(46, '\n          '),
                  S.Pb(),
                  S.Fc(47, '\n        '),
                  S.Pb(),
                  S.Fc(48, '\n      '),
                  S.Pb(),
                  S.Fc(49, '\n\n      '),
                  S.Qb(50, 'div', 7),
                  S.Fc(51, '\n        '),
                  S.Qb(52, 'div', 8),
                  S.Fc(53, '\n          '),
                  S.Qb(54, 'div', 9),
                  S.Fc(55, '\n            '),
                  S.Qb(56, 'div', 16),
                  S.Fc(57, '\n              '),
                  S.Qb(58, 'div', 17),
                  S.Fc(59, '\n                '),
                  S.Mb(60, 'img', 18),
                  S.Fc(61, '\n              '),
                  S.Pb(),
                  S.Fc(62, '\n            '),
                  S.Pb(),
                  S.Fc(63, '\n\n            '),
                  S.Qb(64, 'div', 19),
                  S.Fc(65, '\n              '),
                  S.Qb(66, 'dc-badge', 14),
                  S.Fc(67, 'Efficiency'),
                  S.Pb(),
                  S.Fc(68, '\n              '),
                  S.Qb(69, 'h2', 15),
                  S.Fc(70),
                  S.gc(71, 'translate'),
                  S.Pb(),
                  S.Fc(72, '\n              '),
                  S.Qb(73, 'p', 20),
                  S.Fc(74),
                  S.gc(75, 'translate'),
                  S.Pb(),
                  S.Fc(76, '\n\n              '),
                  S.Mb(77, 'hr', 21),
                  S.Fc(78, '\n              '),
                  S.Qb(79, 'p', 22),
                  S.Fc(80),
                  S.gc(81, 'translate'),
                  S.Pb(),
                  S.Fc(82, '\n            '),
                  S.Pb(),
                  S.Fc(83, '\n          '),
                  S.Pb(),
                  S.Fc(84, '\n        '),
                  S.Pb(),
                  S.Fc(85, '\n      '),
                  S.Pb(),
                  S.Fc(86, '\n\n      '),
                  S.Qb(87, 'div', 7),
                  S.Fc(88, '\n        '),
                  S.Qb(89, 'div', 8),
                  S.Fc(90, '\n          '),
                  S.Qb(91, 'div', 9),
                  S.Fc(92, '\n            '),
                  S.Qb(93, 'div', 16),
                  S.Fc(94, '\n              '),
                  S.Mb(95, 'img', 23),
                  S.Fc(96, '\n            '),
                  S.Pb(),
                  S.Fc(97, '\n\n            '),
                  S.Qb(98, 'div', 13),
                  S.Fc(99, '\n              '),
                  S.Qb(100, 'dc-badge', 14),
                  S.Fc(101),
                  S.gc(102, 'translate'),
                  S.Pb(),
                  S.Fc(103, '\n              '),
                  S.Qb(104, 'h2', 15),
                  S.Fc(105),
                  S.gc(106, 'translate'),
                  S.Pb(),
                  S.Fc(107, '\n              '),
                  S.Qb(108, 'p', 24),
                  S.Fc(109),
                  S.gc(110, 'translate'),
                  S.Pb(),
                  S.Fc(111, '\n              '),
                  S.Qb(112, 'p'),
                  S.Fc(113),
                  S.gc(114, 'translate'),
                  S.Pb(),
                  S.Fc(115, '\n            '),
                  S.Pb(),
                  S.Fc(116, '\n          '),
                  S.Pb(),
                  S.Fc(117, '\n        '),
                  S.Pb(),
                  S.Fc(118, '\n      '),
                  S.Pb(),
                  S.Fc(119, '\n\n      '),
                  S.Qb(120, 'div', 7),
                  S.Fc(121, '\n        '),
                  S.Qb(122, 'div', 8),
                  S.Fc(123, '\n          '),
                  S.Qb(124, 'div', 9),
                  S.Fc(125, '\n            '),
                  S.Qb(126, 'div', 16),
                  S.Fc(127, '\n              '),
                  S.Qb(128, 'div', 17),
                  S.Fc(129, '\n                '),
                  S.Mb(130, 'img', 25),
                  S.Fc(131, '\n              '),
                  S.Pb(),
                  S.Fc(132, '\n            '),
                  S.Pb(),
                  S.Fc(133, '\n\n            '),
                  S.Qb(134, 'div', 13),
                  S.Fc(135, '\n              '),
                  S.Qb(136, 'dc-badge', 14),
                  S.Fc(137, 'Iterate'),
                  S.Pb(),
                  S.Fc(138, '\n              '),
                  S.Qb(139, 'h2', 15),
                  S.Fc(140),
                  S.gc(141, 'translate'),
                  S.Pb(),
                  S.Fc(142, '\n              '),
                  S.Qb(143, 'p', 20),
                  S.Fc(144),
                  S.gc(145, 'translate'),
                  S.Pb(),
                  S.Fc(146, '\n              '),
                  S.Qb(147, 'p'),
                  S.Fc(148),
                  S.gc(149, 'translate'),
                  S.Pb(),
                  S.Fc(150, '\n            '),
                  S.Pb(),
                  S.Fc(151, '\n          '),
                  S.Pb(),
                  S.Fc(152, '\n        '),
                  S.Pb(),
                  S.Fc(153, '\n      '),
                  S.Pb(),
                  S.Fc(154, '\n    '),
                  S.Pb(),
                  S.Fc(155, '\n  '),
                  S.Pb(),
                  S.Fc(156, '\n'),
                  S.Pb(),
                  S.Fc(157, '\n')),
                  2 & n &&
                    (S.xb(7),
                    S.Hc(
                      '\n        ',
                      S.hc(
                        8,
                        24,
                        'SLIDERS.SLIDER_ALL_IN_ONE.EVERYTHINK_YOU_NEED'
                      ),
                      '\n      '
                    ),
                    S.xb(6),
                    S.kc('ngForOf', S.nc(52, T)),
                    S.xb(3),
                    S.kc('index', c.currentSlide),
                    S.xb(18),
                    S.kc('bg', 'contrast')('text', 'primary'),
                    S.xb(1),
                    S.Hc(
                      '\n                ',
                      S.hc(
                        36,
                        26,
                        'SLIDERS.SLIDER_ALL_IN_ONE.REAL_TIME_SOLUTION'
                      ),
                      ''
                    ),
                    S.xb(4),
                    S.Hc(
                      '\n                ',
                      S.hc(
                        40,
                        28,
                        'SLIDERS.SLIDER_ALL_IN_ONE.STREAMLINES_PROCESSES'
                      ),
                      '\n              '
                    ),
                    S.xb(4),
                    S.Hc(
                      '\n                ',
                      S.hc(44, 30, 'SLIDERS.SLIDER_ALL_IN_ONE.AFFORDABILLITY'),
                      '\n              '
                    ),
                    S.xb(23),
                    S.kc('bg', 'contrast')('text', 'primary'),
                    S.xb(4),
                    S.Hc(
                      '\n                ',
                      S.hc(
                        71,
                        32,
                        'SLIDERS.SLIDER_ALL_IN_ONE.SINCE_THE_NEED_FORHUMAN'
                      ),
                      '\n              '
                    ),
                    S.xb(4),
                    S.Hc(
                      '\n                ',
                      S.hc(
                        75,
                        34,
                        'SLIDERS.SLIDER_ALL_IN_ONE.EVERYTHINK_DOES_ALL'
                      ),
                      '\n              '
                    ),
                    S.xb(6),
                    S.Hc(
                      '\n                ',
                      S.hc(81, 36, 'SLIDERS.SLIDER_ALL_IN_ONE.ALWAYS_ON_TIME'),
                      '\n              '
                    ),
                    S.xb(20),
                    S.kc('bg', 'contrast')('text', 'primary'),
                    S.xb(1),
                    S.Hc(
                      '\n                ',
                      S.hc(
                        102,
                        38,
                        'SLIDERS.SLIDER_ALL_IN_ONE.UNIQUE_USER)EXPERIENCE'
                      ),
                      ''
                    ),
                    S.xb(4),
                    S.Hc(
                      '\n                ',
                      S.hc(
                        106,
                        40,
                        'SLIDERS.SLIDER_ALL_IN_ONE.A_NEW_AND_INTUITIVE_EXPERIENCE'
                      ),
                      '\n              '
                    ),
                    S.xb(4),
                    S.Hc(
                      '\n                ',
                      S.hc(
                        110,
                        42,
                        'SLIDERS.SLIDER_ALL_IN_ONE.ESPECIALLY_WHEN_YOUR_CLIENTS_NEEDS'
                      ),
                      '\n              '
                    ),
                    S.xb(4),
                    S.Hc(
                      '\n                ',
                      S.hc(114, 44, 'SLIDERS.SLIDER_ALL_IN_ONE.OUTSTANDING'),
                      '\n              '
                    ),
                    S.xb(23),
                    S.kc('bg', 'contrast')('text', 'primary'),
                    S.xb(4),
                    S.Hc(
                      '\n                ',
                      S.hc(141, 46, 'SLIDERS.SLIDER_ALL_IN_ONE.ANALYTICS'),
                      '\n              '
                    ),
                    S.xb(4),
                    S.Hc(
                      '\n                ',
                      S.hc(
                        145,
                        48,
                        'SLIDERS.SLIDER_ALL_IN_ONE.SIT_BACK_AS_YOUR'
                      ),
                      '\n              '
                    ),
                    S.xb(4),
                    S.Hc(
                      '\n                ',
                      S.hc(
                        149,
                        50,
                        'SLIDERS.SLIDER_ALL_IN_ONE.CONTINUOUSLY_CHECK_IN'
                      ),
                      '\n              '
                    ));
              },
              directives: [v.j, Q.a, x.a],
              pipes: [h.b],
              styles: ['']
            })),
            O),
          D = a('pETt'),
          R = a('akeW'),
          M = a('AL06'),
          H = a('YJ7q'),
          k = a('ZuuT'),
          w = a('q+Ce'),
          C = a('VKEt'),
          G = a('iLZQ');
        function U(n, c) {
          if (
            (1 & n &&
              (S.Qb(0, 'div', 24),
              S.Fc(1, '\n      '),
              S.Mb(2, 'dc-feather', 9),
              S.Fc(3, '\n      '),
              S.Qb(4, 'p', 25),
              S.Fc(5),
              S.Pb(),
              S.Fc(6, '\n      '),
              S.Qb(7, 'p'),
              S.Fc(8),
              S.Pb(),
              S.Fc(9, '\n    '),
              S.Pb()),
            2 & n)
          ) {
            var e = c.$implicit;
            S.xb(2),
              S.kc('name', e.icon)('iconClass', 'stroke-primary mb-3'),
              S.xb(3),
              S.Gc(e.title),
              S.xb(3),
              S.Hc('\n        ', e.description, '\n      ');
          }
        }
        var Y,
          W,
          K,
          j = function() {
            return {
              icon: 'pie-chart',
              title: 'Boost team productivity',
              description:
                'EveryThink automates repetitive processes so real estate teams can focus their time and resources on other processes that guarantee better returns.'
            };
          },
          B = function() {
            return {
              icon: 'dollar-sign',
              title: 'Tracking and management',
              description:
                'An intuitive user-friendly management dashboard makes it easy to track processes, analyze transactions within the EveryThink platform.'
            };
          },
          V = function() {
            return {
              icon: 'sliders',
              title: 'Better customer experience',
              description:
                'Deliver an extra service to your customers. By automating processes and providing accurate connections, your outcomes are more efficient and effective.'
            };
          },
          J = function() {
            return {
              icon: 'download',
              title: 'Save time',
              description:
                'Generate more leads, sell more homes faster, easier, and cheaper with EveryThink\u2019s powerful real estate AI tool that helps maximize your time and resources.'
            };
          },
          X = function(n, c, e, t) {
            return [n, c, e, t];
          },
          q = [
            {
              path: '',
              component:
                ((Y = (function() {
                  function c(e) {
                    n(this, c), (this.i18nService = e), this.updateSeoTags();
                  }
                  return (
                    e(c, [
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
                            'DEMOS.SAAS.NETWORK_SEARCH_META.TITLE',
                            'DEMOS.SAAS.NETWORK_SEARCH_META.KEYWORDS'
                          );
                        }
                      }
                    ]),
                    c
                  );
                })()),
                (Y.ɵfac = function(n) {
                  return new (n || Y)(S.Lb(E.a));
                }),
                (Y.ɵcmp = S.Fb({
                  type: Y,
                  selectors: [['dc-saas']],
                  decls: 97,
                  vars: 42,
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
                      'rounded-pill',
                      'py-2',
                      'px-4',
                      'bold',
                      'badge',
                      'badge-info'
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
                    [3, 'screenPos'],
                    [1, 'section-heading'],
                    [1, 'bold', 'py-2'],
                    [3, 'name', 'iconClass'],
                    [1, 'bold', 'text-info'],
                    [1, 'mt-3'],
                    [1, 'lead'],
                    [
                      'href',
                      '#',
                      1,
                      'btn',
                      'px-4',
                      'btn-rounded',
                      'btn-primary',
                      'mt-4'
                    ],
                    [
                      'images',
                      '',
                      1,
                      'device-twin',
                      'align-items-center',
                      'mt-4',
                      'mt-lg-0'
                    ],
                    ['data-aos', 'fade-right', 1, 'browser', 'shadow'],
                    [
                      'src',
                      'assets/images/saas/screens/dash/4.png',
                      'alt',
                      '...'
                    ],
                    [
                      'data-aos',
                      'fade-up',
                      'data-aos-delay',
                      '.5',
                      1,
                      'front',
                      'iphone-x',
                      'absolute',
                      'd-none',
                      'd-sm-block',
                      2,
                      'right',
                      '0',
                      'bottom',
                      '-1.5rem'
                    ],
                    [1, 'screen'],
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
                    [
                      'src',
                      'assets/images/saas/screens/app/Story-Realstate-storie 2-buyer.mp4',
                      'type',
                      'video/mp4'
                    ],
                    [1, 'notch'],
                    [3, 'title', 'containerClass'],
                    [3, 'edge', 'background'],
                    [1, 'col-md-6'],
                    [1, 'my-0', 'bold', 'lead', 'text-dark']
                  ],
                  template: function(n, c) {
                    1 & n &&
                      (S.Mb(0, 'dc-saas-heading'),
                      S.Fc(1, '\n\n'),
                      S.Mb(2, 'dc-saas-perspective-mockups'),
                      S.Fc(3, '\n'),
                      S.Mb(4, 'dc-saas-lightweight-template'),
                      S.Fc(5, '\n'),
                      S.Mb(6, 'dc-slider-start-right-way'),
                      S.Fc(7, '\n'),
                      S.Mb(8, 'dc-slider-all-in-one'),
                      S.Fc(9, '\n'),
                      S.Mb(10, 'dc-testimonial-simple-text-left'),
                      S.Fc(11, '\n'),
                      S.Qb(12, 'dc-big-screen', 0),
                      S.Fc(13, '\n  '),
                      S.Qb(14, 'div', 1),
                      S.Fc(15, '\n    '),
                      S.Qb(16, 'p', 2),
                      S.Fc(17),
                      S.gc(18, 'translate'),
                      S.Pb(),
                      S.Fc(19, '\n    '),
                      S.Qb(20, 'h2'),
                      S.Fc(21),
                      S.gc(22, 'translate'),
                      S.Pb(),
                      S.Fc(23, '\n    '),
                      S.Qb(24, 'p', 3),
                      S.Fc(25),
                      S.gc(26, 'translate'),
                      S.Pb(),
                      S.Fc(27, '\n  '),
                      S.Pb(),
                      S.Fc(28, '\n  '),
                      S.Qb(29, 'div', 4),
                      S.Fc(30, '\n    '),
                      S.Dc(31, U, 10, 4, 'div', 5),
                      S.Fc(32, '\n  '),
                      S.Pb(),
                      S.Fc(33, '\n'),
                      S.Pb(),
                      S.Fc(34, '\n\n'),
                      S.Qb(35, 'dc-big-screen', 6),
                      S.Fc(36, '\n  '),
                      S.Qb(37, 'div', 7),
                      S.Fc(38, '\n    '),
                      S.Qb(39, 'span', 8),
                      S.Fc(40, '\n      '),
                      S.Mb(41, 'dc-feather', 9),
                      S.Fc(42, '\n      '),
                      S.Qb(43, 'span', 10),
                      S.Fc(44),
                      S.gc(45, 'translate'),
                      S.Pb(),
                      S.Fc(46, '\n    '),
                      S.Pb(),
                      S.Fc(47, '\n\n    '),
                      S.Qb(48, 'h2', 11),
                      S.Fc(49),
                      S.gc(50, 'translate'),
                      S.Pb(),
                      S.Fc(51, '\n\n    '),
                      S.Qb(52, 'p', 12),
                      S.Fc(53),
                      S.gc(54, 'translate'),
                      S.Pb(),
                      S.Fc(55, '\n  '),
                      S.Pb(),
                      S.Fc(56, '\n\n  '),
                      S.Qb(57, 'p'),
                      S.Fc(58),
                      S.gc(59, 'translate'),
                      S.Pb(),
                      S.Fc(60, '\n\n  '),
                      S.Qb(61, 'a', 13),
                      S.Fc(62),
                      S.gc(63, 'translate'),
                      S.Pb(),
                      S.Fc(64, '\n\n  '),
                      S.Qb(65, 'div', 14),
                      S.Fc(66, '\n    '),
                      S.Qb(67, 'div', 15),
                      S.Fc(68, '\n      '),
                      S.Mb(69, 'img', 16),
                      S.Fc(70, '\n    '),
                      S.Pb(),
                      S.Fc(71, '\n\n    '),
                      S.Qb(72, 'div', 17),
                      S.Fc(73, '\n      '),
                      S.Qb(74, 'div', 18),
                      S.Fc(75, '\n        '),
                      S.Qb(76, 'video', 19),
                      S.Fc(77, '\n          '),
                      S.Mb(78, 'source', 20),
                      S.Fc(79, '\n        '),
                      S.Pb(),
                      S.Fc(80, '\n      '),
                      S.Pb(),
                      S.Fc(81, '\n\n      '),
                      S.Mb(82, 'div', 21),
                      S.Fc(83, '\n    '),
                      S.Pb(),
                      S.Fc(84, '\n  '),
                      S.Pb(),
                      S.Fc(85, '\n'),
                      S.Pb(),
                      S.Fc(86, '\n\n'),
                      S.Mb(87, 'dc-trust-us', 22),
                      S.Fc(88, '\n'),
                      S.Mb(89, 'dc-faqs1', 23),
                      S.Fc(90, '\n'),
                      S.Mb(91, 'dc-start-now-box'),
                      S.Fc(92, '\n'),
                      S.Mb(93, 'dc-cta1'),
                      S.Fc(94, '\n\n'),
                      S.Mb(95, 'dc-footer2'),
                      S.Fc(96, '\n')),
                      2 & n &&
                        (S.xb(12),
                        S.kc('img', 'assets/img/screens/dash/5.png'),
                        S.xb(5),
                        S.Hc(
                          '\n      ',
                          S.hc(18, 17, 'DEMOS.SAAS.BUILD_TO_LAST'),
                          '\n    '
                        ),
                        S.xb(4),
                        S.Gc(
                          S.hc(
                            22,
                            19,
                            'DEMOS.SAAS.WHAT_YOU_WILL_GET_WITH_EVERTTHINK'
                          )
                        ),
                        S.xb(4),
                        S.Hc(
                          '\n      ',
                          S.hc(
                            26,
                            21,
                            'DEMOS.SAAS.GEOLOCATED_INTELLIGENT_ASSISTANTS'
                          ),
                          '\n    '
                        ),
                        S.xb(6),
                        S.kc(
                          'ngForOf',
                          S.rc(
                            37,
                            X,
                            S.nc(33, j),
                            S.nc(34, B),
                            S.nc(35, V),
                            S.nc(36, J)
                          )
                        ),
                        S.xb(4),
                        S.kc('screenPos', 'left'),
                        S.xb(6),
                        S.kc('name', 'bar-chart')(
                          'iconClass',
                          'stroke-primary mr-2'
                        ),
                        S.xb(3),
                        S.Gc(S.hc(45, 23, 'DEMOS.SAAS.DASHBORD_INCLUDED')),
                        S.xb(5),
                        S.Hc(
                          '\n      ',
                          S.hc(50, 25, 'DEMOS.SAAS.SIMPLE_IMPLEMENTATION'),
                          '\n    '
                        ),
                        S.xb(4),
                        S.Hc(
                          '\n      ',
                          S.hc(54, 27, 'DEMOS.SAAS.SINCE_THE_NEED_FOR_HUMAN'),
                          '\n    '
                        ),
                        S.xb(5),
                        S.Hc(
                          '\n    ',
                          S.hc(59, 29, 'DEMOS.SAAS.THE_POSSIBILITIES'),
                          '\n  '
                        ),
                        S.xb(4),
                        S.Gc(S.hc(63, 31, 'DEMOS.SAAS.Learn_More')),
                        S.xb(25),
                        S.kc('title', 'They trust us')(
                          'containerClass',
                          'pb-0'
                        ),
                        S.xb(2),
                        S.kc('edge', 'bottom-right')('background', 'light'));
                  },
                  directives: [
                    I,
                    P,
                    A,
                    L.a,
                    y,
                    D.a,
                    R.a,
                    v.j,
                    M.a,
                    H.a,
                    k.a,
                    w.a,
                    C.a,
                    G.a
                  ],
                  pipes: [h.b],
                  styles: ['']
                })),
                Y),
              data: { title: Object(E.c)('SAAS') }
            }
          ],
          z =
            (((K = function c() {
              n(this, c);
            }).ɵmod = S.Jb({ type: K })),
            (K.ɵinj = S.Ib({
              factory: function(n) {
                return new (n || K)();
              },
              imports: [[g.g.forChild(q)], g.g]
            })),
            K),
          Z =
            (((W = function c() {
              n(this, c);
            }).ɵmod = S.Jb({ type: W })),
            (W.ɵinj = S.Ib({
              factory: function(n) {
                return new (n || W)();
              },
              imports: [[b.a, o.a, d.a, F.a, l.a, p.a, u.a, z, h.a.forChild()]]
            })),
            W);
      },
      ORAR: function(c, e, t) {
        'use strict';
        t.d(e, 'a', function() {
          return r;
        });
        var a = t('tyNb'),
          i = t('sYmb'),
          s = t('fXoL'),
          r = (function() {
            var c = function c() {
              n(this, c);
            };
            return (
              (c.ɵmod = s.Jb({ type: c })),
              (c.ɵinj = s.Ib({
                factory: function(n) {
                  return new (n || c)();
                },
                imports: [[a.g, i.a.forChild()]]
              })),
              c
            );
          })();
      }
    }
  ]);
})();
