!(function() {
  function n(n, t) {
    for (var c = 0; c < t.length; c++) {
      var e = t[c];
      (e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        'value' in e && (e.writable = !0),
        Object.defineProperty(n, e.key, e);
    }
  }
  function t(t, c, e) {
    return c && n(t.prototype, c), e && n(t, e), t;
  }
  function c(n, t) {
    if (!(n instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [20],
    {
      '8klf': function(n, t, e) {
        'use strict';
        e.d(t, 'a', function() {
          return s;
        });
        var i = e('M0ag'),
          a = e('tyNb'),
          r = e('sYmb'),
          o = e('fXoL'),
          s = (function() {
            var n = function n() {
              c(this, n);
            };
            return (
              (n.ɵmod = o.Jb({ type: n })),
              (n.ɵinj = o.Ib({
                factory: function(t) {
                  return new (t || n)();
                },
                imports: [[i.a, a.g, r.a.forChild()]]
              })),
              n
            );
          })();
      },
      ORAR: function(n, t, e) {
        'use strict';
        e.d(t, 'a', function() {
          return o;
        });
        var i = e('tyNb'),
          a = e('sYmb'),
          r = e('fXoL'),
          o = (function() {
            var n = function n() {
              c(this, n);
            };
            return (
              (n.ɵmod = r.Jb({ type: n })),
              (n.ɵinj = r.Ib({
                factory: function(t) {
                  return new (t || n)();
                },
                imports: [[i.g, a.a.forChild()]]
              })),
              n
            );
          })();
      },
      ZsP5: function(n, e, i) {
        'use strict';
        i.r(e),
          i.d(e, 'DevelopersModule', function() {
            return W;
          });
        var a,
          r = i('M0ag'),
          o = i('V6j0'),
          s = i('M0Rk'),
          b = i('2d4A'),
          l = i('8klf'),
          d = i('ORAR'),
          u = i('pRTP'),
          F = i('tyNb'),
          g = i('ey9i'),
          p = i('fXoL'),
          m = i('sYmb'),
          f = function() {
            return ['Invoicing', 'Subscriptions', 'Mailing', 'Reporting'];
          },
          E =
            (((a = (function() {
              function n(t) {
                c(this, n), (this.translate = t);
              }
              return t(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || a)(p.Lb(m.c));
            }),
            (a.ɵcmp = p.Fb({
              type: a,
              selectors: [['dc-developers-heading']],
              decls: 35,
              vars: 17,
              consts: [
                [
                  1,
                  'header',
                  'page',
                  'section',
                  'parallax',
                  'image-background',
                  'blanket',
                  'gradient',
                  'gradient-purple-navy',
                  'alpha-8',
                  'text-contrast'
                ],
                [1, 'container', 'overflow-hidden'],
                [1, 'row'],
                [1, 'col-md-8'],
                [1, 'lead', 'bold'],
                [1, 'display-4', 'text-contrast', 'light'],
                [1, 'text-contrast'],
                [3, 'strings', 'typeSpeed', 'backDelay', 'backSpeed', 'loop'],
                [1, 'typing', 'typed', 'bold', 'display-4', 'display-md-3'],
                [1, 'nav', 'mt-5'],
                [
                  'href',
                  '#',
                  1,
                  'nav-link',
                  'btn',
                  'btn',
                  'btn-rounded',
                  'btn-contrast',
                  'btn-lg',
                  'px-5',
                  'bold'
                ]
              ],
              template: function(n, t) {
                1 & n &&
                  (p.Qb(0, 'header', 0),
                  p.Fc(1, '\n  '),
                  p.Qb(2, 'div', 1),
                  p.Fc(3, '\n    '),
                  p.Qb(4, 'div', 2),
                  p.Fc(5, '\n      '),
                  p.Qb(6, 'div', 3),
                  p.Fc(7, '\n        '),
                  p.Qb(8, 'p', 4),
                  p.Fc(9),
                  p.gc(10, 'translate'),
                  p.Pb(),
                  p.Fc(11, '\n        '),
                  p.Qb(12, 'h1', 5),
                  p.Fc(13),
                  p.gc(14, 'translate'),
                  p.Pb(),
                  p.Fc(15, '\n        '),
                  p.Qb(16, 'h1', 6),
                  p.Fc(17, '\n          '),
                  p.Qb(18, 'ngx-typed-js', 7),
                  p.Fc(19, '\n            '),
                  p.Mb(20, 'span', 8),
                  p.Fc(21, '\n          '),
                  p.Pb(),
                  p.Fc(22, '\n        '),
                  p.Pb(),
                  p.Fc(23, '\n\n        '),
                  p.Qb(24, 'nav', 9),
                  p.Fc(25, '\n          '),
                  p.Qb(26, 'a', 10),
                  p.Fc(27),
                  p.gc(28, 'translate'),
                  p.Pb(),
                  p.Fc(29, '\n        '),
                  p.Pb(),
                  p.Fc(30, '\n      '),
                  p.Pb(),
                  p.Fc(31, '\n    '),
                  p.Pb(),
                  p.Fc(32, '\n  '),
                  p.Pb(),
                  p.Fc(33, '\n'),
                  p.Pb(),
                  p.Fc(34, '\n')),
                  2 & n &&
                    (p.Cc('background-image', 'url(assets/img/bg/grid.jpg)'),
                    p.xb(9),
                    p.Hc(
                      '\n          ',
                      p.hc(10, 10, 'DEMOS.DEVELOPERS.HEADING.WELCOME_DREAMERS'),
                      '\n        '
                    ),
                    p.xb(4),
                    p.Hc(
                      '\n          ',
                      p.hc(14, 12, 'DEMOS.DEVELOPERS.HEADING.CREATE_EMOTIONS'),
                      '\n        '
                    ),
                    p.xb(5),
                    p.kc('strings', p.nc(16, f))('typeSpeed', 150)(
                      'backDelay',
                      500
                    )('backSpeed', 50)('loop', !0),
                    p.xb(9),
                    p.Hc(
                      '\n            ',
                      p.hc(28, 14, 'DEMOS.DEVELOPERS.HEADING.SHOW_VIDEO'),
                      '\n          '
                    ));
              },
              directives: [u.b],
              pipes: [m.b],
              styles: ['']
            })),
            a),
          v = i('wHSu'),
          h = i('AL06'),
          x = i('ofXK'),
          P = i('6NWb'),
          O = function() {
            return ['/'];
          };
        function S(n, t) {
          if (
            (1 & n &&
              (p.Qb(0, 'div', 10),
              p.Fc(1, '\n          '),
              p.Qb(2, 'a', 11),
              p.Fc(3, '\n            '),
              p.Qb(4, 'h4', 12),
              p.Fc(5),
              p.Pb(),
              p.Fc(6, '\n          '),
              p.Pb(),
              p.Fc(7, '\n\n          '),
              p.Qb(8, 'p', 13),
              p.Fc(9),
              p.Pb(),
              p.Fc(10, '\n\n          '),
              p.Qb(11, 'a', 14),
              p.Fc(12, 'Learn more\n            '),
              p.Mb(13, 'fa-icon', 15),
              p.Pb(),
              p.Fc(14, '\n        '),
              p.Pb()),
            2 & n)
          ) {
            var c = t.$implicit,
              e = t.index,
              i = p.fc();
            p.Db('b-md-r', 2 != e),
              p.xb(2),
              p.kc('routerLink', p.nc(7, O)),
              p.xb(3),
              p.Gc(c.title),
              p.xb(4),
              p.Gc(c.description),
              p.xb(2),
              p.kc('routerLink', p.nc(8, O)),
              p.xb(2),
              p.kc('icon', i.longArrowAltRight);
          }
        }
        var y,
          I =
            (((y = (function() {
              function n(t) {
                c(this, n),
                  (this.translate = t),
                  (this.longArrowAltRight = v.l),
                  (this.blocks = [
                    {
                      title: 'Engagement API',
                      description:
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, consequuntur.'
                    },
                    {
                      title: 'Invoicing API',
                      description:
                        'Consequuntur fugit minima natus optio quisquam sint sunt? Earum harum in laudantium nobis obcaecati odio.'
                    },
                    {
                      title: 'Reporting API',
                      description:
                        'Earum harum in laudantium nobis obcaecati odio, praesentium, quis sequi soluta vel veniam.'
                    }
                  ]);
              }
              return t(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || y)(p.Lb(m.c));
            }),
            (y.ɵcmp = p.Fb({
              type: y,
              selectors: [['dc-developers-integration']],
              decls: 31,
              vars: 7,
              consts: [
                [1, 'section', 'bg-darker'],
                [1, 'container', 'text-center', 'pt-4', 'pb-7'],
                [1, 'text-contrast'],
                [
                  'href',
                  '#',
                  1,
                  'bold',
                  'd-inline-flex',
                  'align-items-center',
                  'text-contrast',
                  'ml-3'
                ],
                ['name', 'chevron-right'],
                [1, 'section', 'mt-6n'],
                [1, 'container', 'pt-0'],
                [1, 'shadow', 'bg-contrast', 'p-4', 'rounded'],
                [1, 'row', 'gap-y', 'text-center', 'text-md-left'],
                [
                  'class',
                  'col-md-4 py-4 px-5 d-flex flex-column',
                  3,
                  'b-md-r',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [1, 'col-md-4', 'py-4', 'px-5', 'd-flex', 'flex-column'],
                [1, 'text-darker', 3, 'routerLink'],
                [1, 'bold', 'mr-3'],
                [1, 'mt-4'],
                [
                  1,
                  'd-block',
                  'd-md-flex',
                  'align-items-center',
                  'mt-auto',
                  3,
                  'routerLink'
                ],
                [1, 'ml-3', 3, 'icon']
              ],
              template: function(n, t) {
                1 & n &&
                  (p.Qb(0, 'section', 0),
                  p.Fc(1, '\n  '),
                  p.Qb(2, 'div', 1),
                  p.Fc(3, '\n    '),
                  p.Qb(4, 'p', 2),
                  p.Fc(5),
                  p.gc(6, 'translate'),
                  p.Qb(7, 'a', 3),
                  p.Fc(8),
                  p.gc(9, 'translate'),
                  p.Mb(10, 'dc-feather', 4),
                  p.Fc(11, '\n      '),
                  p.Pb(),
                  p.Fc(12, '\n    '),
                  p.Pb(),
                  p.Fc(13, '\n  '),
                  p.Pb(),
                  p.Fc(14, '\n'),
                  p.Pb(),
                  p.Fc(15, '\n\n'),
                  p.Fc(16, '\n'),
                  p.Qb(17, 'section', 5),
                  p.Fc(18, '\n  '),
                  p.Qb(19, 'div', 6),
                  p.Fc(20, '\n    '),
                  p.Qb(21, 'div', 7),
                  p.Fc(22, '\n      '),
                  p.Qb(23, 'div', 8),
                  p.Fc(24, '\n        '),
                  p.Dc(25, S, 15, 9, 'div', 9),
                  p.Fc(26, '\n      '),
                  p.Pb(),
                  p.Fc(27, '\n    '),
                  p.Pb(),
                  p.Fc(28, '\n  '),
                  p.Pb(),
                  p.Fc(29, '\n'),
                  p.Pb(),
                  p.Fc(30, '\n')),
                  2 & n &&
                    (p.xb(5),
                    p.Hc(
                      '\n      ',
                      p.hc(
                        6,
                        3,
                        'DEMOS.DEVELOPERS.INTEGRATioNS.KNOW_WHAT_YOU_CAN_DO_WITH_US'
                      ),
                      '\n      '
                    ),
                    p.xb(3),
                    p.Hc(
                      '\n        ',
                      p.hc(9, 5, 'DEMOS.DEVELOPERS.INTEGRATioNS.LEARN_MORE'),
                      '\n        '
                    ),
                    p.xb(17),
                    p.kc('ngForOf', t.blocks));
              },
              directives: [h.a, x.j, F.f, P.a],
              pipes: [m.b],
              styles: ['']
            })),
            y),
          L = i('nhfI');
        function R(n, t) {
          if (1 & n) {
            var c = p.Rb();
            p.Qb(0, 'a', 22),
              p.bc('click', function() {
                p.vc(c);
                var n = t.index;
                return p.fc().updateSlider(n);
              }),
              p.Fc(1, '\n                  '),
              p.Mb(2, 'dc-feather', 23),
              p.Fc(3, '\n                '),
              p.Pb();
          }
          if (2 & n) {
            var e = t.$implicit,
              i = t.index,
              a = p.fc();
            p.Db('active', i === a.currentSlide)('pl-md-0', 0 === i),
              p.yb('data-step', i + 1),
              p.xb(2),
              p.kc('name', e.icon)('size', 24);
          }
        }
        function Q(n, t) {
          if (
            (1 & n &&
              (p.Qb(0, 'div', 24),
              p.Fc(1, '\n            '),
              p.Qb(2, 'figure', 25),
              p.Fc(3, '\n              '),
              p.Mb(4, 'img', 26),
              p.Fc(5, '\n            '),
              p.Pb(),
              p.Fc(6, '\n            '),
              p.Qb(7, 'p', 27),
              p.Fc(8),
              p.gc(9, 'translate'),
              p.Pb(),
              p.Fc(10, '\n          '),
              p.Pb()),
            2 & n)
          ) {
            var c = t.$implicit;
            p.xb(4),
              p.kc('src', 'assets/img/screens/dash/' + c.img + '.png', p.yc),
              p.xb(4),
              p.Hc(
                '\n              ',
                p.hc(9, 2, 'SLIDERS.SLIDER_BRING_TO_LIFE.CLEAN_INBOX_UI'),
                '\n            '
              );
          }
        }
        var k,
          D =
            (((k = (function() {
              function n(t) {
                c(this, n),
                  (this.translate = t),
                  (this.elements = [
                    {
                      label: 'Clean inbox UI design',
                      img: 'inbox',
                      icon: 'mail'
                    },
                    {
                      label: 'Outstanding calendar UI design',
                      img: 'calendar',
                      icon: 'calendar'
                    },
                    {
                      label: 'Draft purchases with the invoice feature',
                      img: 'invoice',
                      icon: 'file'
                    }
                  ]),
                  (this.currentSlide = 0);
              }
              return (
                t(n, [
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
            })()).ɵfac = function(n) {
              return new (n || k)(p.Lb(m.c));
            }),
            (k.ɵcmp = p.Fb({
              type: k,
              selectors: [['dc-slider-bring-to-life']],
              decls: 85,
              vars: 29,
              consts: [
                [1, 'section', 'bg-light'],
                [1, 'container', 'bring-to-front'],
                [1, 'row', 'gap-y', 'align-items-center'],
                [1, 'col-md-6'],
                [1, 'rounded', 'bg-primary-gradient', 'shadow'],
                [1, 'd-flex', 'flex-column', 'align-items-center', 'py-3'],
                [
                  'src',
                  'assets/img/bg/asset-1.svg',
                  'alt',
                  '',
                  1,
                  'img-responsive',
                  'w-50'
                ],
                [1, 'rounded', 'shadow-box', 'bg-contrast', 'mt-3'],
                [1, 'media', 'align-items-center', 'px-3'],
                [3, 'name', 'iconClass'],
                [1, 'media-body', 'my-3', 'pl-3', 'b-l'],
                [1, 'bold', 'text-primary', 'my-0'],
                [1, 'my-0', 'text-secondary'],
                [1, 'my-3'],
                [
                  'id',
                  'sw-nav-1',
                  1,
                  'nav',
                  'nav-tabs',
                  'tabs-clean',
                  'border-bottom-0'
                ],
                [
                  'class',
                  'nav-item nav-link py-0 d-flex flex-column align-items-center border-bottom-0',
                  'href',
                  'javascript:void(0)',
                  3,
                  'active',
                  'pl-md-0',
                  'click',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [1, 'col-md-6', 'ml-md-auto', 'text-center', 'text-md-left'],
                [
                  1,
                  'rounded-pill',
                  'shadow-box',
                  'badge',
                  'badge-info',
                  'bold',
                  'py-2',
                  'px-4'
                ],
                [1, 'mt-3'],
                [1, 'text-secondary'],
                [3, 'index', 'indexChange'],
                ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
                [
                  'href',
                  'javascript:void(0)',
                  1,
                  'nav-item',
                  'nav-link',
                  'py-0',
                  'd-flex',
                  'flex-column',
                  'align-items-center',
                  'border-bottom-0',
                  3,
                  'click'
                ],
                [1, 'mr-2', 3, 'name', 'size'],
                [1, 'swiper-slide'],
                [1, 'shadow-box'],
                ['alt', '', 1, 'img-responsive', 'rounded', 3, 'src'],
                [1, 'small', 'text-center', 'text-danger']
              ],
              template: function(n, t) {
                1 & n &&
                  (p.Qb(0, 'section', 0),
                  p.Fc(1, '\n  '),
                  p.Qb(2, 'div', 1),
                  p.Fc(3, '\n    '),
                  p.Qb(4, 'div', 2),
                  p.Fc(5, '\n      '),
                  p.Qb(6, 'div', 3),
                  p.Fc(7, '\n        '),
                  p.Qb(8, 'div', 4),
                  p.Fc(9, '\n          '),
                  p.Qb(10, 'div', 5),
                  p.Fc(11, '\n            '),
                  p.Mb(12, 'img', 6),
                  p.Fc(13, '\n          '),
                  p.Pb(),
                  p.Fc(14, '\n        '),
                  p.Pb(),
                  p.Fc(15, '\n\n        '),
                  p.Qb(16, 'div', 7),
                  p.Fc(17, '\n          '),
                  p.Qb(18, 'div', 8),
                  p.Fc(19, '\n            '),
                  p.Mb(20, 'dc-feather', 9),
                  p.Fc(21, '\n            '),
                  p.Qb(22, 'div', 10),
                  p.Fc(23, '\n              '),
                  p.Qb(24, 'p', 11),
                  p.Fc(25),
                  p.gc(26, 'translate'),
                  p.Pb(),
                  p.Fc(27, '\n              '),
                  p.Qb(28, 'p', 12),
                  p.Fc(29),
                  p.gc(30, 'translate'),
                  p.Pb(),
                  p.Fc(31, '\n            '),
                  p.Pb(),
                  p.Fc(32, '\n          '),
                  p.Pb(),
                  p.Fc(33, '\n        '),
                  p.Pb(),
                  p.Fc(34, '\n\n        '),
                  p.Qb(35, 'div', 7),
                  p.Fc(36, '\n          '),
                  p.Qb(37, 'div', 8),
                  p.Fc(38, '\n            '),
                  p.Mb(39, 'dc-feather', 9),
                  p.Fc(40, '\n            '),
                  p.Qb(41, 'div', 10),
                  p.Fc(42, '\n              '),
                  p.Mb(43, 'p', 11),
                  p.Fc(44, '\n              '),
                  p.Qb(45, 'p', 12),
                  p.Fc(46),
                  p.gc(47, 'translate'),
                  p.Pb(),
                  p.Fc(48, '\n\n              '),
                  p.Mb(49, 'hr', 13),
                  p.Fc(50, '\n              '),
                  p.Qb(51, 'nav', 14),
                  p.Fc(52, '\n                '),
                  p.Dc(53, R, 4, 7, 'a', 15),
                  p.Fc(54, '\n              '),
                  p.Pb(),
                  p.Fc(55, '\n            '),
                  p.Pb(),
                  p.Fc(56, '\n          '),
                  p.Pb(),
                  p.Fc(57, '\n        '),
                  p.Pb(),
                  p.Fc(58, '\n      '),
                  p.Pb(),
                  p.Fc(59, '\n\n      '),
                  p.Qb(60, 'div', 16),
                  p.Fc(61, '\n        '),
                  p.Qb(62, 'span', 17),
                  p.Fc(63),
                  p.gc(64, 'translate'),
                  p.Pb(),
                  p.Fc(65, '\n\n        '),
                  p.Qb(66, 'h2', 18),
                  p.Fc(67),
                  p.gc(68, 'translate'),
                  p.Pb(),
                  p.Fc(69, '\n        '),
                  p.Qb(70, 'p', 19),
                  p.Fc(71),
                  p.gc(72, 'translate'),
                  p.Pb(),
                  p.Fc(73, '\n\n        '),
                  p.Mb(74, 'hr'),
                  p.Fc(75, '\n        '),
                  p.Qb(76, 'swiper', 20),
                  p.bc('indexChange', function(n) {
                    return t.onIndexChange(n);
                  }),
                  p.Fc(77, '\n          '),
                  p.Dc(78, Q, 11, 4, 'div', 21),
                  p.Fc(79, '\n        '),
                  p.Pb(),
                  p.Fc(80, '\n      '),
                  p.Pb(),
                  p.Fc(81, '\n    '),
                  p.Pb(),
                  p.Fc(82, '\n  '),
                  p.Pb(),
                  p.Fc(83, '\n'),
                  p.Pb(),
                  p.Fc(84, '\n')),
                  2 & n &&
                    (p.xb(20),
                    p.zb('mr-3'),
                    p.kc('name', 'bar-chart')('iconClass', 'stroke-primary'),
                    p.xb(5),
                    p.Hc(
                      '\n                ',
                      p.hc(
                        26,
                        17,
                        'SLIDERS.SLIDER_BRING_TO_LIFE.ADMIN_TEMPLATE_INCLUDED'
                      ),
                      '\n              '
                    ),
                    p.xb(4),
                    p.Hc(
                      '\n                ',
                      p.hc(
                        30,
                        19,
                        'SLIDERS.SLIDER_BRING_TO_LIFE.WE_INCLUDED_A_FULLY_FUNcTIONAL'
                      ),
                      '\n              '
                    ),
                    p.xb(10),
                    p.zb('mr-3'),
                    p.kc('name', 'smartphone')('iconClass', 'stroke-primary'),
                    p.xb(7),
                    p.Hc(
                      '\n                ',
                      p.hc(
                        47,
                        21,
                        'SLIDERS.SLIDER_BRING_TO_LIFE.POWER_WITH_MULIPLE_STARTER_APPS'
                      ),
                      '\n              '
                    ),
                    p.xb(7),
                    p.kc('ngForOf', t.elements),
                    p.xb(10),
                    p.Hc(
                      '\n          ',
                      p.hc(
                        64,
                        23,
                        'SLIDERS.SLIDER_BRING_TO_LIFE.ITS_AWESOME_YOU_TO'
                      ),
                      ''
                    ),
                    p.xb(4),
                    p.Hc(
                      '\n          ',
                      p.hc(
                        68,
                        25,
                        'SLIDERS.SLIDER_BRING_TO_LIFE.SIMPLE_AND_TRANSPARENT'
                      ),
                      '\n        '
                    ),
                    p.xb(4),
                    p.Hc(
                      '\n          ',
                      p.hc(
                        72,
                        27,
                        'SLIDERS.SLIDER_BRING_TO_LIFE.BRING_YOU_APPLICAION_TO_LIFE'
                      ),
                      '\n        '
                    ),
                    p.xb(5),
                    p.kc('index', t.currentSlide),
                    p.xb(2),
                    p.kc('ngForOf', t.elements));
              },
              directives: [h.a, x.j, L.a],
              pipes: [m.b],
              styles: ['']
            })),
            k);
        function _(n, t) {
          if (
            (1 & n &&
              (p.Qb(0, 'div'),
              p.Fc(1, '\n            '),
              p.Qb(2, 'div'),
              p.Fc(3, '\n              '),
              p.Mb(4, 'img', 13),
              p.Fc(5, '\n\n              '),
              p.Qb(6, 'p', 14),
              p.Fc(7),
              p.Pb(),
              p.Fc(8, '\n\n              '),
              p.Qb(9, 'p', 15),
              p.Fc(10),
              p.gc(11, 'translate'),
              p.Pb(),
              p.Fc(12, '\n\n              '),
              p.Qb(13, 'a', 16),
              p.Fc(14, '\n                '),
              p.Mb(15, 'fa-icon', 17),
              p.Fc(16, '\n                '),
              p.Qb(17, 'span', 18),
              p.Fc(18),
              p.gc(19, 'translate'),
              p.Pb(),
              p.Fc(20, '\n              '),
              p.Pb(),
              p.Fc(21, '\n            '),
              p.Pb(),
              p.Fc(22, '\n          '),
              p.Pb()),
            2 & n)
          ) {
            var c = t.$implicit,
              e = p.fc();
            p.Ab('col-6 col-sm-5 col-md-6 col-lg-5 ', c.class, ''),
              p.xb(2),
              p.Ab(
                '',
                c.bg,
                ' rounded text-contrast p-2 p-sm-4 shadow text-center'
              ),
              p.yb('data-aos', c.animation),
              p.xb(2),
              p.kc('src', 'assets/img/logos/' + c.img + '.svg', p.yc),
              p.xb(3),
              p.Gc(c.title),
              p.xb(3),
              p.Hc(
                '\n                ',
                p.hc(11, 12, 'DEMOS.DEVELOPERS.TOOL.LOREM_IPSUM_DOLOR'),
                '.\n              '
              ),
              p.xb(5),
              p.kc('icon', e.longAarrowAltRight),
              p.xb(3),
              p.Hc('', p.hc(19, 14, 'DEMOS.DEVELOPERS.TOOL.INTEGRATE'), '.');
          }
        }
        var M,
          T,
          A,
          w,
          N =
            (((M = (function() {
              function n(t) {
                c(this, n),
                  (this.translate = t),
                  (this.cards = [
                    {
                      img: '2',
                      title: 'jQuery',
                      class: 'mt-6 ml-lg-auto',
                      bg: 'bg-primary-gradient',
                      animation: 'fade-up'
                    },
                    {
                      img: '1',
                      title: 'Codebase',
                      class: 'mr-lg-auto',
                      bg: 'bg-info-gradient',
                      animation: 'fade-up'
                    },
                    {
                      img: '3',
                      title: 'OpenCart',
                      class: 'ml-lg-auto',
                      bg: 'bg-danger-gradient',
                      animation: 'fade-up'
                    },
                    {
                      img: '4',
                      title: 'Morpheus',
                      class: 'mt-6n mr-lg-auto',
                      bg: 'bg-success-gradient',
                      animation: 'fade-up'
                    }
                  ]),
                  (this.longAarrowAltRight = v.l);
              }
              return t(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || M)(p.Lb(m.c));
            }),
            (M.ɵcmp = p.Fb({
              type: M,
              selectors: [['dc-developers-integration-tools']],
              decls: 39,
              vars: 12,
              consts: [
                [1, 'section'],
                [1, 'shape-wrapper'],
                [
                  'src',
                  'assets/img/shps/shape-2.svg',
                  'alt',
                  '...',
                  1,
                  'shape-right'
                ],
                [1, 'container', 'bring-to-front'],
                [1, 'row', 'gap-y', 'align-items-center'],
                [
                  1,
                  'col-12',
                  'col-md-5',
                  'col-lg-5',
                  'mr-md-auto',
                  'text-center',
                  'text-lg-left'
                ],
                [3, 'name', 'iconClass'],
                [1, 'small', 'text-primary', 'bold'],
                [1, 'bold'],
                [1, 'text-secondary'],
                [1, 'col-12', 'col-md-7', 'col-lg-6'],
                [1, 'row', 'gap-y'],
                [3, 'class', 4, 'ngFor', 'ngForOf'],
                [
                  'alt',
                  '...',
                  1,
                  'img-responsive',
                  'op-8',
                  'px-0',
                  'px-sm-4',
                  3,
                  'src'
                ],
                [1, 'bold', 'mt-5'],
                [1, 'op-5', 'small'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'btn',
                  'btn-rounded',
                  'btn-contrast',
                  'mt-4'
                ],
                [1, 'd-inline-block', 'd-sm-none', 3, 'icon'],
                [1, 'd-none', 'd-sm-inline-block']
              ],
              template: function(n, t) {
                1 & n &&
                  (p.Qb(0, 'section', 0),
                  p.Fc(1, '\n  '),
                  p.Qb(2, 'div', 1),
                  p.Fc(3, '\n    '),
                  p.Mb(4, 'img', 2),
                  p.Fc(5, '\n  '),
                  p.Pb(),
                  p.Fc(6, '\n\n  '),
                  p.Qb(7, 'div', 3),
                  p.Fc(8, '\n    '),
                  p.Qb(9, 'div', 4),
                  p.Fc(10, '\n      '),
                  p.Qb(11, 'div', 5),
                  p.Fc(12, '\n        '),
                  p.Mb(13, 'dc-feather', 6),
                  p.Fc(14, '\n        '),
                  p.Qb(15, 'p', 7),
                  p.Fc(16),
                  p.gc(17, 'translate'),
                  p.Pb(),
                  p.Fc(18, '\n        '),
                  p.Qb(19, 'h2', 8),
                  p.Fc(20),
                  p.gc(21, 'translate'),
                  p.Pb(),
                  p.Fc(22, '\n        '),
                  p.Qb(23, 'p', 9),
                  p.Fc(24),
                  p.gc(25, 'translate'),
                  p.Pb(),
                  p.Fc(26, '\n      '),
                  p.Pb(),
                  p.Fc(27, '\n\n      '),
                  p.Qb(28, 'div', 10),
                  p.Fc(29, '\n        '),
                  p.Qb(30, 'div', 11),
                  p.Fc(31, '\n          '),
                  p.Dc(32, _, 23, 16, 'div', 12),
                  p.Fc(33, '\n        '),
                  p.Pb(),
                  p.Fc(34, '\n      '),
                  p.Pb(),
                  p.Fc(35, '\n    '),
                  p.Pb(),
                  p.Fc(36, '\n  '),
                  p.Pb(),
                  p.Fc(37, '\n'),
                  p.Pb(),
                  p.Fc(38, '\n')),
                  2 & n &&
                    (p.xb(13),
                    p.kc('name', 'box')('iconClass', 'stroke-primary'),
                    p.xb(3),
                    p.Hc(
                      '\n          ',
                      p.hc(17, 6, 'DEMOS.DEVELOPERS.TOOL.INTEGRATION_TOOLS'),
                      '\n        '
                    ),
                    p.xb(4),
                    p.Hc(
                      '\n          ',
                      p.hc(21, 8, 'DEMOS.DEVELOPERS.TOOL.EASY_INTEGRATIONS'),
                      '\n        '
                    ),
                    p.xb(4),
                    p.Hc(
                      '\n          ',
                      p.hc(25, 10, 'DEMOS.DEVELOPERS.TOOL.LOREM_IPSUM'),
                      '\n        '
                    ),
                    p.xb(8),
                    p.kc('ngForOf', t.cards));
              },
              directives: [h.a, x.j, P.a],
              pipes: [m.b],
              styles: ['']
            })),
            M),
          C = i('YJ7q'),
          H = i('MTqK'),
          G = i('VKEt'),
          j = i('iLZQ'),
          V = [
            {
              path: '',
              component:
                ((T = (function() {
                  function n(t) {
                    c(this, n), (this.i18nService = t), this.updateSeoTags();
                  }
                  return (
                    t(n, [
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
                            'DEMOS.DEVELOPERS.NETWORK_SEARCH_META.TITLE',
                            'DEMOS.DEVELOPERS.NETWORK_SEARCH_META.KEYWORDS'
                          );
                        }
                      }
                    ]),
                    n
                  );
                })()),
                (T.ɵfac = function(n) {
                  return new (n || T)(p.Lb(g.a));
                }),
                (T.ɵcmp = p.Fb({
                  type: T,
                  selectors: [['dc-developers']],
                  decls: 19,
                  vars: 3,
                  consts: [[3, 'title'], [3, 'edge', 'background']],
                  template: function(n, t) {
                    1 & n &&
                      (p.Mb(0, 'dc-developers-heading'),
                      p.Fc(1, '\n'),
                      p.Mb(2, 'dc-developers-integration'),
                      p.Fc(3, '\n'),
                      p.Fc(4, '\n'),
                      p.Mb(5, 'dc-slider-bring-to-life'),
                      p.Fc(6, '\n\n'),
                      p.Fc(7, '\n'),
                      p.Fc(8, '\n\n'),
                      p.Mb(9, 'dc-developers-integration-tools'),
                      p.Fc(10, '\n\n'),
                      p.Mb(11, 'dc-trust-us', 0),
                      p.Fc(12, '\n'),
                      p.Mb(13, 'dc-developer-designer'),
                      p.Fc(14, '\n\n'),
                      p.Mb(15, 'dc-cta1', 1),
                      p.Fc(16, '\n\n'),
                      p.Mb(17, 'dc-footer2'),
                      p.Fc(18, '\n')),
                      2 & n &&
                        (p.xb(11),
                        p.kc('title', 'They trust us'),
                        p.xb(4),
                        p.kc('edge', 'top-left')('background', 'contrast'));
                  },
                  directives: [E, I, D, N, C.a, H.a, G.a, j.a],
                  styles: ['']
                })),
                T),
              data: { title: Object(g.c)('About') }
            }
          ],
          U =
            (((w = function n() {
              c(this, n);
            }).ɵmod = p.Jb({ type: w })),
            (w.ɵinj = p.Ib({
              factory: function(n) {
                return new (n || w)();
              },
              imports: [[F.g.forChild(V)], F.g]
            })),
            w),
          W =
            (((A = function n() {
              c(this, n);
            }).ɵmod = p.Jb({ type: A })),
            (A.ɵinj = p.Ib({
              factory: function(n) {
                return new (n || A)();
              },
              imports: [[r.a, o.a, s.a, b.a, l.a, d.a, u.a, U, m.a.forChild()]]
            })),
            A);
      }
    }
  ]);
})();
