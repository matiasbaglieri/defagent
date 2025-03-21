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
    [23],
    {
      pu65: function(n, e, c) {
        'use strict';
        c.d(e, 'a', function() {
          return a;
        });
        var i = c('nhfI'),
          s = c('M0ag'),
          o = c('sYmb'),
          r = c('fXoL'),
          a = (function() {
            var n = function n() {
              t(this, n);
            };
            return (
              (n.ɵmod = r.Jb({ type: n })),
              (n.ɵinj = r.Ib({
                factory: function(e) {
                  return new (e || n)();
                },
                imports: [[i.c, s.a, o.a.forChild()]]
              })),
              n
            );
          })();
      },
      rOCi: function(n, c, i) {
        'use strict';
        i.r(c),
          i.d(c, 'BusinessSolutionsModule', function() {
            return an;
          });
        var s,
          o,
          r,
          a,
          b = i('M0ag'),
          d = i('V6j0'),
          l = i('fXoL'),
          F =
            (((s = function n() {
              t(this, n);
            }).ɵmod = l.Jb({ type: s })),
            (s.ɵinj = l.Ib({
              factory: function(n) {
                return new (n || s)();
              },
              imports: [[d.a]]
            })),
            s),
          u = i('M0Rk'),
          p = i('pu65'),
          m = i('2d4A'),
          f = i('kpBo'),
          g = i('ofXK'),
          h =
            (((o = function n() {
              t(this, n);
            }).ɵmod = l.Jb({ type: o })),
            (o.ɵinj = l.Ib({
              factory: function(n) {
                return new (n || o)();
              },
              imports: [[g.b]]
            })),
            o),
          P = i('pRTP'),
          v = i('tyNb'),
          y = i('ey9i'),
          x =
            (((a = (function() {
              function n() {
                t(this, n);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || a)();
            }),
            (a.ɵcmp = l.Fb({
              type: a,
              selectors: [['dc-business-solutions-heading']],
              decls: 36,
              vars: 0,
              consts: [
                [
                  1,
                  'header',
                  'page',
                  'business-header',
                  'section',
                  'gradient',
                  'gradient-primary-light'
                ],
                [1, 'container', 'pb-8'],
                [1, 'row'],
                [1, 'col-md-10', 'mx-auto', 'text-center'],
                [
                  1,
                  'rounded-pill',
                  'shadow-box',
                  'bg-contrast',
                  'text-primary',
                  'bold',
                  'py-2',
                  'px-4'
                ],
                [1, 'mt-3', 'text-contrast'],
                [1, 'display-4', 'display-md-2', 'bold'],
                [1, 'lead', 'text-contrast', 'my-5', 'op-8'],
                [1, 'nav', 'justify-content-center'],
                [
                  'href',
                  '#!',
                  1,
                  'btn',
                  'btn-success',
                  'btn-rounded',
                  'px-4',
                  'mr-3'
                ],
                ['href', '#!', 1, 'btn', 'btn-success', 'btn-rounded', 'px-4']
              ],
              template: function(n, e) {
                1 & n &&
                  (l.Fc(0, '\n'),
                  l.Qb(1, 'header', 0),
                  l.Fc(2, '\n  '),
                  l.Qb(3, 'div', 1),
                  l.Fc(4, '\n    '),
                  l.Qb(5, 'div', 2),
                  l.Fc(6, '\n      '),
                  l.Qb(7, 'div', 3),
                  l.Fc(8, '\n        '),
                  l.Qb(9, 'span', 4),
                  l.Fc(10, 'Introducing Everythink'),
                  l.Pb(),
                  l.Fc(11, '\n        '),
                  l.Qb(12, 'h1', 5),
                  l.Fc(13, '\n          '),
                  l.Qb(14, 'span', 6),
                  l.Fc(15, 'Modern & Elegant '),
                  l.Pb(),
                  l.Fc(16, '\n          '),
                  l.Mb(17, 'br'),
                  l.Fc(
                    18,
                    '\n          Premium community builder all the tools in the palm of your hand\n        '
                  ),
                  l.Pb(),
                  l.Fc(19, '\n\n        '),
                  l.Qb(20, 'p', 7),
                  l.Fc(
                    21,
                    '\n          From a simple page to a complete module bundler, even a task runner,\n          Everythink comes with ease integration for every need\n        '
                  ),
                  l.Pb(),
                  l.Fc(22, '\n\n        '),
                  l.Qb(23, 'nav', 8),
                  l.Fc(24, '\n          '),
                  l.Qb(25, 'a', 9),
                  l.Fc(26, 'Get Started'),
                  l.Pb(),
                  l.Fc(27, '\n          '),
                  l.Qb(28, 'a', 10),
                  l.Fc(29, 'Sign up for Free'),
                  l.Pb(),
                  l.Fc(30, '\n        '),
                  l.Pb(),
                  l.Fc(31, '\n      '),
                  l.Pb(),
                  l.Fc(32, '\n    '),
                  l.Pb(),
                  l.Fc(33, '\n  '),
                  l.Pb(),
                  l.Fc(34, '\n'),
                  l.Pb(),
                  l.Fc(35, '\n'));
              },
              styles: ['']
            })),
            a),
          Q =
            (((r = (function() {
              function n() {
                t(this, n);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || r)();
            }),
            (r.ɵcmp = l.Fb({
              type: r,
              selectors: [['dc-divider-curve']],
              inputs: { cssClass: 'cssClass', shapeCssText: 'shapeCssText' },
              decls: 11,
              vars: 4,
              consts: [
                [1, 'position-relative', 3, 'ngClass'],
                [
                  'viewBox',
                  '0 0 2880 48',
                  'xmlns',
                  'http://www.w3.org/2000/svg'
                ],
                ['d', 'M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z']
              ],
              template: function(n, e) {
                1 & n &&
                  (l.Qb(0, 'div', 0),
                  l.Fc(1, '\n  '),
                  l.Qb(2, 'div'),
                  l.Fc(3, '\n    '),
                  l.ec(),
                  l.Qb(4, 'svg', 1),
                  l.Fc(5, '\n      '),
                  l.Mb(6, 'path', 2),
                  l.Fc(7, '\n    '),
                  l.Pb(),
                  l.Fc(8, '\n  '),
                  l.Pb(),
                  l.Fc(9, '\n'),
                  l.Pb(),
                  l.Fc(10, '\n')),
                  2 & n &&
                    (l.kc('ngClass', e.cssClass),
                    l.xb(2),
                    l.Ab(
                      'shape-divider shape-divider-bottom shape-divider-fluid-x text-',
                      e.shapeCssText,
                      ''
                    ));
              },
              directives: [g.i],
              styles: ['']
            })),
            r),
          T = i('nhfI');
        function w(n, e) {
          if (
            (1 & n &&
              (l.Qb(0, 'div', 2),
              l.Fc(1, '\n    '),
              l.Mb(2, 'img', 3),
              l.Fc(3, '\n  '),
              l.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            l.xb(2), l.mc('src', 'assets/img/logos/', t, '.png', l.yc);
          }
        }
        var O,
          S,
          I = function() {
            return [1, 2, 3, 4, 5, 6];
          },
          k =
            (((S = (function() {
              function n() {
                t(this, n),
                  (this.config = {
                    slidesPerView: 5,
                    spaceBetween: 30,
                    autoplay: { delay: 2500, disableOnInteraction: !1 },
                    loop: !0,
                    navigation: !1,
                    pagination: !1
                  });
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || S)();
            }),
            (S.ɵcmp = l.Fb({
              type: S,
              selectors: [['dc-slider-logos']],
              decls: 5,
              vars: 3,
              consts: [
                [1, 'swiper-container', 'pb-5', 3, 'config'],
                ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
                [1, 'swiper-slide'],
                [
                  'alt',
                  '',
                  1,
                  'img-responsive',
                  2,
                  'max-height',
                  '60px',
                  3,
                  'src'
                ]
              ],
              template: function(n, e) {
                1 & n &&
                  (l.Qb(0, 'swiper', 0),
                  l.Fc(1, '\n  '),
                  l.Dc(2, w, 4, 1, 'div', 1),
                  l.Fc(3, '\n'),
                  l.Pb(),
                  l.Fc(4, '\n')),
                  2 & n &&
                    (l.kc('config', e.config),
                    l.xb(2),
                    l.kc('ngForOf', l.nc(2, I)));
              },
              directives: [T.a, g.j],
              styles: ['']
            })),
            S),
          C =
            (((O = (function() {
              function n() {
                t(this, n);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || O)();
            }),
            (O.ɵcmp = l.Fb({
              type: O,
              selectors: [['dc-business-solutions-integration-icons']],
              decls: 15,
              vars: 0,
              consts: [
                [1, 'partners', 'mt-5n'],
                [1, 'container', 'py-0'],
                [1, 'card', 'shadow-lg'],
                [1, 'card-body', 'p-4']
              ],
              template: function(n, e) {
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
                  l.Mb(9, 'dc-slider-logos'),
                  l.Fc(10, '\n      '),
                  l.Pb(),
                  l.Fc(11, '\n    '),
                  l.Pb(),
                  l.Fc(12, '\n  '),
                  l.Pb(),
                  l.Fc(13, '\n'),
                  l.Pb(),
                  l.Fc(14, '\n'));
              },
              directives: [k],
              styles: ['']
            })),
            O),
          M = i('AL06');
        function R(n, e) {
          if (
            (1 & n &&
              (l.Qb(0, 'li', 14),
              l.Fc(1, '\n            '),
              l.Qb(2, 'div', 15),
              l.Fc(3, '\n              '),
              l.Qb(4, 'div', 16),
              l.Fc(5, '\n                '),
              l.Mb(6, 'dc-feather', 17),
              l.Fc(7, '\n              '),
              l.Pb(),
              l.Fc(8, '\n\n              '),
              l.Qb(9, 'p', 18),
              l.Fc(10),
              l.Pb(),
              l.Fc(11, '\n            '),
              l.Pb(),
              l.Fc(12, '\n          '),
              l.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            l.xb(6),
              l.kc('name', t.icon)('size', 16)('iconClass', 'stroke-contrast'),
              l.xb(4),
              l.Gc(t.title);
          }
        }
        var E,
          A =
            (((E = (function() {
              function n() {
                t(this, n),
                  (this.features = [
                    {
                      title: 'Perfect for modern and growing Apps & Startups',
                      icon: 'arrow-right'
                    },
                    {
                      title: 'Predesigned growing set of modern web components',
                      icon: 'arrow-right'
                    },
                    {
                      title:
                        'Modern & eye-catching design to enchant your visitors',
                      icon: 'arrow-right'
                    },
                    {
                      title:
                        "Focus on your business, don't worry about your website",
                      icon: 'arrow-right'
                    }
                  ]);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || E)();
            }),
            (E.ɵcmp = l.Fb({
              type: E,
              selectors: [['dc-business-solutions-start-business']],
              decls: 45,
              vars: 1,
              consts: [
                [1, 'section', 'quick-start-your-business'],
                [1, 'container-fluid', 'bring-to-front', 'pb-md-10'],
                [1, 'row', 'gap-y', 'align-items-center'],
                [1, 'col-10', 'col-lg-4', 'mx-auto', 'order-md-2'],
                [1, 'mb-5', 'text-center', 'text-lg-left'],
                [1, 'text-primary'],
                [1, 'lead', 'text-muted'],
                [1, 'list-unstyled'],
                ['class', 'py-2', 4, 'ngFor', 'ngForOf'],
                ['href', '#!', 1, 'btn', 'btn-primary', 'btn-rounded', 'mt-4'],
                [1, 'col-12', 'col-lg-6', 'pl-0', 'order-md-1'],
                ['data-aos', 'fade-right', 1, 'browser', 'shadow'],
                [1, 'screen'],
                [
                  'src',
                  'assets/img/screens/dash/1.png',
                  'alt',
                  '',
                  1,
                  'img-responsive'
                ],
                [1, 'py-2'],
                [1, 'd-flex', 'align-items-center'],
                [
                  1,
                  'icon-md',
                  'bg-primary',
                  'p-2',
                  'rounded-circle',
                  'center-flex',
                  'mr-3'
                ],
                [3, 'name', 'size', 'iconClass'],
                [1, 'my-0']
              ],
              template: function(n, e) {
                1 & n &&
                  (l.Qb(0, 'section', 0),
                  l.Fc(1, '\n  '),
                  l.Qb(2, 'div', 1),
                  l.Fc(3, '\n    '),
                  l.Qb(4, 'div', 2),
                  l.Fc(5, '\n      '),
                  l.Qb(6, 'div', 3),
                  l.Fc(7, '\n        '),
                  l.Qb(8, 'div', 4),
                  l.Fc(9, '\n          '),
                  l.Qb(10, 'h2'),
                  l.Fc(11, '\n            Quick start your business '),
                  l.Mb(12, 'br'),
                  l.Fc(13, '\n            '),
                  l.Qb(14, 'span', 5),
                  l.Fc(15, 'with the right tools'),
                  l.Pb(),
                  l.Fc(16, '\n          '),
                  l.Pb(),
                  l.Fc(17, '\n\n          '),
                  l.Qb(18, 'p', 6),
                  l.Fc(
                    19,
                    '\n            EveryThink helps you Build a modern & beautiful web presence. Our\n            growing set of components will make your life waaaay easier.\n          '
                  ),
                  l.Pb(),
                  l.Fc(20, '\n        '),
                  l.Pb(),
                  l.Fc(21, '\n\n        '),
                  l.Qb(22, 'ul', 7),
                  l.Fc(23, '\n          '),
                  l.Dc(24, R, 13, 4, 'li', 8),
                  l.Fc(25, '\n        '),
                  l.Pb(),
                  l.Fc(26, '\n\n        '),
                  l.Qb(27, 'a', 9),
                  l.Fc(28, 'Know More'),
                  l.Pb(),
                  l.Fc(29, '\n      '),
                  l.Pb(),
                  l.Fc(30, '\n\n      '),
                  l.Qb(31, 'div', 10),
                  l.Fc(32, '\n        '),
                  l.Qb(33, 'div', 11),
                  l.Fc(34, '\n          '),
                  l.Qb(35, 'div', 12),
                  l.Fc(36, '\n            '),
                  l.Mb(37, 'img', 13),
                  l.Fc(38, '\n          '),
                  l.Pb(),
                  l.Fc(39, '\n        '),
                  l.Pb(),
                  l.Fc(40, '\n      '),
                  l.Pb(),
                  l.Fc(41, '\n    '),
                  l.Pb(),
                  l.Fc(42, '\n  '),
                  l.Pb(),
                  l.Fc(43, '\n'),
                  l.Pb(),
                  l.Fc(44, '\n')),
                  2 & n && (l.xb(24), l.kc('ngForOf', e.features));
              },
              directives: [g.j, M.a],
              styles: ['']
            })),
            E),
          _ = i('wHSu'),
          U = i('6NWb');
        function D(n, e) {
          if (
            (1 & n &&
              (l.Qb(0, 'div', 13),
              l.Fc(1, '\n          '),
              l.Mb(2, 'dc-feather', 14),
              l.Fc(3, '\n\n          '),
              l.Qb(4, 'div', 15),
              l.Fc(5, '\n            '),
              l.Qb(6, 'h4'),
              l.Fc(7),
              l.Pb(),
              l.Fc(8, '\n            '),
              l.Qb(9, 'p'),
              l.Fc(10),
              l.Pb(),
              l.Fc(11, '\n\n            '),
              l.Qb(12, 'a', 16),
              l.Fc(13, 'Learn more\n              '),
              l.Mb(14, 'fa-icon', 17),
              l.Fc(15, '\n            '),
              l.Pb(),
              l.Fc(16, '\n          '),
              l.Pb(),
              l.Fc(17, '\n        '),
              l.Pb()),
            2 & n)
          ) {
            var t = e.$implicit,
              c = e.index,
              i = l.fc();
            l.Db('mb-5', 0 == c),
              l.xb(2),
              l.kc('name', t.icon)('size', 36)(
                'iconClass',
                'stroke-primary mr-3'
              ),
              l.xb(5),
              l.Gc(t.title),
              l.xb(3),
              l.Gc(t.description),
              l.xb(4),
              l.kc('icon', i.longArrowAltRight);
          }
        }
        function G(n, e) {
          if (
            (1 & n &&
              (l.Qb(0, 'div', 18),
              l.Fc(1, '\n              '),
              l.Qb(2, 'figure', 19),
              l.Fc(3, '\n                '),
              l.Mb(4, 'img', 20),
              l.Fc(5, '\n              '),
              l.Pb(),
              l.Fc(6, '\n            '),
              l.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            l.xb(4),
              l.kc(
                'src',
                'assets/img/screens/dash/dash/' + t.img + '.png',
                l.yc
              );
          }
        }
        function N(n, e) {
          if (
            (1 & n &&
              (l.Qb(0, 'div', 18),
              l.Fc(1, '\n                  '),
              l.Qb(2, 'h4', 21),
              l.Fc(3),
              l.Pb(),
              l.Fc(4, '\n                  '),
              l.Qb(5, 'p', 22),
              l.Fc(
                6,
                '\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab\n                    consequuntur facere hic, ipsa ipsum obcaecati odio optio\n                    quidem quod totam!\n                  '
              ),
              l.Pb(),
              l.Fc(7, '\n\n                  '),
              l.Qb(8, 'a', 23),
              l.Fc(9, 'Learn more\n                    '),
              l.Mb(10, 'fa-icon', 17),
              l.Fc(11, '\n                  '),
              l.Pb(),
              l.Fc(12, '\n                '),
              l.Pb()),
            2 & n)
          ) {
            var t = e.$implicit,
              c = l.fc();
            l.xb(3), l.Gc(t.title), l.xb(7), l.kc('icon', c.longArrowAltRight);
          }
        }
        var W,
          L =
            (((W = (function() {
              function n() {
                t(this, n),
                  (this.longArrowAltRight = _.l),
                  (this.features = [
                    { title: 'Dashboard', img: '4' },
                    { title: 'Invoicing', img: 'invoice' },
                    { title: 'Calendar', img: 'calendar' },
                    { title: 'Inbox', img: 'inbox' }
                  ]),
                  (this.items = [
                    {
                      icon: 'activity',
                      title: 'Real time activity',
                      description:
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea expedita illo ipsum labore maxime molestias mollitia'
                    },
                    {
                      icon: 'upload-cloud',
                      title: 'Instant deploy',
                      description:
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, cupiditate debitis dolorem error expedita'
                    }
                  ]),
                  (this.slidingConfig = {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoplay: !1,
                    navigation: !1,
                    pagination: {
                      el: '.tools-pagination',
                      clickable: !0,
                      dynamicBullets: !1
                    }
                  }),
                  (this.fadingConfig = {
                    effect: 'fade',
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoplay: !1,
                    navigation: !1
                  }),
                  (this.currentSlide = 0);
              }
              return (
                e(n, [
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
              return new (n || W)();
            }),
            (W.ɵcmp = l.Fb({
              type: W,
              selectors: [['dc-slider-features-fluid-cols']],
              decls: 41,
              vars: 6,
              consts: [
                [1, 'section', 'bg-light'],
                [1, 'container-fluid', 'bring-to-front'],
                [1, 'row'],
                [1, 'col-md-3', 'mx-auto', 'py-4', 'py-md-0'],
                ['class', 'media', 3, 'mb-5', 4, 'ngFor', 'ngForOf'],
                [1, 'col-md-7', 'mt-md-8n', 'd-flex', 'align-items-end'],
                [1, 'swiper-container', 3, 'swiper', 'index'],
                [1, 'swiper-wrapper'],
                ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
                [
                  1,
                  'card',
                  'bg-success',
                  'border-0',
                  'shadow',
                  'tool-description-card'
                ],
                [1, 'card-body', 'p-md-5'],
                [1, 'swiper-container', 'pb-5', 3, 'swiper', 'indexChange'],
                [
                  1,
                  'swiper-pagination',
                  'tools-pagination',
                  'text-left',
                  'highlight-active'
                ],
                [1, 'media'],
                [3, 'name', 'size', 'iconClass'],
                [1, 'media-body'],
                ['href', '#!', 1, 'more-link', 'dotted'],
                [1, 'ml-2', 3, 'icon'],
                [1, 'swiper-slide'],
                [1, 'mb-0'],
                ['alt', '', 1, 'img-responsive', 3, 'src'],
                [1, 'bold', 'heading-line'],
                [1, 'text-contrast', 'py-4', 'd-none', 'd-md-block'],
                ['href', '#!', 1, 'more-link', 'text-contrast', 'dotted']
              ],
              template: function(n, e) {
                1 & n &&
                  (l.Qb(0, 'section', 0),
                  l.Fc(1, '\n  '),
                  l.Qb(2, 'div', 1),
                  l.Fc(3, '\n    '),
                  l.Qb(4, 'div', 2),
                  l.Fc(5, '\n      '),
                  l.Qb(6, 'div', 3),
                  l.Fc(7, '\n        '),
                  l.Dc(8, D, 18, 8, 'div', 4),
                  l.Fc(9, '\n      '),
                  l.Pb(),
                  l.Fc(10, '\n\n      '),
                  l.Qb(11, 'div', 5),
                  l.Fc(12, '\n        '),
                  l.Qb(13, 'div', 6),
                  l.Fc(14, '\n          '),
                  l.Qb(15, 'div', 7),
                  l.Fc(16, '\n            '),
                  l.Dc(17, G, 7, 1, 'div', 8),
                  l.Fc(18, '\n          '),
                  l.Pb(),
                  l.Fc(19, '\n        '),
                  l.Pb(),
                  l.Fc(20, '\n\n        '),
                  l.Qb(21, 'div', 9),
                  l.Fc(22, '\n          '),
                  l.Qb(23, 'div', 10),
                  l.Fc(24, '\n            '),
                  l.Qb(25, 'div', 11),
                  l.bc('indexChange', function(n) {
                    return e.onIndexChange(n);
                  }),
                  l.Fc(26, '\n              '),
                  l.Qb(27, 'div', 7),
                  l.Fc(28, '\n                '),
                  l.Dc(29, N, 13, 2, 'div', 8),
                  l.Fc(30, '\n              '),
                  l.Pb(),
                  l.Fc(31, '\n\n              '),
                  l.Mb(32, 'div', 12),
                  l.Fc(33, '\n            '),
                  l.Pb(),
                  l.Fc(34, '\n          '),
                  l.Pb(),
                  l.Fc(35, '\n        '),
                  l.Pb(),
                  l.Fc(36, '\n      '),
                  l.Pb(),
                  l.Fc(37, '\n    '),
                  l.Pb(),
                  l.Fc(38, '\n  '),
                  l.Pb(),
                  l.Fc(39, '\n'),
                  l.Pb(),
                  l.Fc(40, '\n')),
                  2 & n &&
                    (l.xb(8),
                    l.kc('ngForOf', e.items),
                    l.xb(5),
                    l.kc('swiper', e.fadingConfig)('index', e.currentSlide),
                    l.xb(4),
                    l.kc('ngForOf', e.features),
                    l.xb(8),
                    l.kc('swiper', e.slidingConfig),
                    l.xb(4),
                    l.kc('ngForOf', e.features));
              },
              directives: [g.j, T.b, M.a, U.a],
              styles: ['']
            })),
            W),
          H = i('nEva'),
          j = i('sYmb');
        function z(n, e) {
          if (
            (1 & n &&
              (l.Qb(0, 'li'),
              l.Fc(1, '\n                    '),
              l.Qb(2, 'div', 34),
              l.Fc(3, '\n                      '),
              l.Qb(4, 'div', 35),
              l.Fc(5, '\n                        '),
              l.Mb(6, 'dc-feather', 33),
              l.Fc(7, '\n                      '),
              l.Pb(),
              l.Fc(8, '\n\n                      '),
              l.Qb(9, 'div', 36),
              l.Fc(10),
              l.gc(11, 'translate'),
              l.Pb(),
              l.Fc(12, '\n                    '),
              l.Pb(),
              l.Fc(13, '\n                  '),
              l.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            l.xb(6),
              l.kc('name', t.icon)('size', 16)('iconClass', 'stroke-contrast'),
              l.xb(4),
              l.Hc(
                '\n                        ',
                l.hc(11, 4, t.name),
                '\n                      '
              );
          }
        }
        function B(n, e) {
          if (
            (1 & n &&
              (l.Qb(0, 'div', 23),
              l.Fc(1, '\n        '),
              l.Qb(2, 'div', 24),
              l.Fc(3, '\n          '),
              l.Qb(4, 'div', 11),
              l.Fc(5, '\n            '),
              l.Qb(6, 'div', 12),
              l.Fc(7, '\n              '),
              l.Qb(8, 'div', 25),
              l.Fc(9, '\n                '),
              l.Qb(10, 'div', 26),
              l.Fc(11, '\n                  '),
              l.Qb(12, 'h5', 27),
              l.Fc(13),
              l.gc(14, 'translate'),
              l.Pb(),
              l.Fc(15, '\n                  '),
              l.Mb(16, 'hr', 16),
              l.Fc(17, '\n\n                  '),
              l.Qb(18, 'p'),
              l.Fc(19),
              l.gc(20, 'translate'),
              l.Pb(),
              l.Fc(21, '\n\n                  '),
              l.Qb(22, 'div', 28),
              l.Fc(23, '\n                    '),
              l.Qb(24, 'span', 29),
              l.Fc(25),
              l.Pb(),
              l.Fc(26, '\n                  '),
              l.Pb(),
              l.Fc(27, '\n                '),
              l.Pb(),
              l.Fc(28, '\n\n                '),
              l.Qb(29, 'ul', 30),
              l.Fc(30, '\n                  '),
              l.Dc(31, z, 14, 6, 'li', 31),
              l.Fc(32, '\n                '),
              l.Pb(),
              l.Fc(33, '\n              '),
              l.Pb(),
              l.Fc(34, '\n            '),
              l.Pb(),
              l.Fc(35, '\n          '),
              l.Pb(),
              l.Fc(36, '\n\n          '),
              l.Qb(37, 'a', 32),
              l.Fc(38),
              l.gc(39, 'translate'),
              l.Mb(40, 'dc-feather', 33),
              l.Fc(41, '\n          '),
              l.Pb(),
              l.Fc(42, '\n        '),
              l.Pb(),
              l.Fc(43, '\n      '),
              l.Pb()),
            2 & n)
          ) {
            var t = e.$implicit,
              c = l.fc();
            l.Ab('col-md-', 12 / (c.plans.length + 1), ''),
              l.xb(13),
              l.Hc(
                '\n                    ',
                l.hc(14, 13, t.plan.name),
                '\n                  '
              ),
              l.xb(6),
              l.Gc(l.hc(20, 15, t.plan.description)),
              l.xb(5),
              l.yb('data-monthly-price', t.plan.price.monthly)(
                'data-yearly-price',
                t.plan.price.yearly
              ),
              l.xb(1),
              l.Hc(
                '\n                      ',
                t.plan.price.monthly,
                '\n                    '
              ),
              l.xb(6),
              l.kc('ngForOf', t.features),
              l.xb(7),
              l.Hc(
                '\n            ',
                l.hc(39, 17, 'DEMOS.START_UP.PRICING_TWO.GETNOW'),
                '\n\n            '
              ),
              l.xb(2),
              l.kc('name', 'arrow-right')('size', 16)('iconClass', 'ml-3');
          }
        }
        function $(n, e) {
          if (
            (1 & n &&
              (l.Qb(0, 'div'),
              l.Fc(1, '\n                      '),
              l.Qb(2, 'div', 37),
              l.Fc(3, '\n                        '),
              l.Mb(4, 'dc-feather', 33),
              l.Fc(5, '\n                        '),
              l.Qb(6, 'p', 38),
              l.Fc(7),
              l.gc(8, 'translate'),
              l.Pb(),
              l.Fc(9, '\n                      '),
              l.Pb(),
              l.Fc(10, '\n                    '),
              l.Pb()),
            2 & n)
          ) {
            var t = e.$implicit,
              c = e.index;
            l.Ab('col-6 border-', t.border, ''),
              l.Db('border-top', c > 1),
              l.xb(4),
              l.kc('name', t.icon)('size', 32)('iconClass', 'stroke-primary'),
              l.xb(3),
              l.Gc(l.hc(8, 9, t.title));
          }
        }
        var q,
          J =
            (((q = (function() {
              function n(e) {
                t(this, n),
                  (this.translate = e),
                  (this.plans = [
                    {
                      icon: 'box',
                      plan: {
                        name: 'DEMOS.START_UP.PRICING_TWO.PLAN_BASIC',
                        price: { monthly: 9.99, yearly: 99.78 },
                        description:
                          'DEMOS.START_UP.PRICING_TWO.PLAN_BASIC_DESC'
                      },
                      features: [
                        {
                          name: 'DEMOS.START_UP.PRICING_TWO.FEATURES1',
                          icon: 'calendar'
                        },
                        {
                          name: 'DEMOS.START_UP.PRICING_TWO.FEATURES2',
                          icon: 'dollar-sign'
                        },
                        {
                          name: 'DEMOS.START_UP.PRICING_TWO.FEATURES3',
                          icon: 'smartphone'
                        },
                        {
                          name: 'DEMOS.START_UP.PRICING_TWO.FEATURES4',
                          icon: 'layout'
                        }
                      ]
                    }
                  ]),
                  (this.xtras = [
                    {
                      icon: 'home',
                      title: 'DEMOS.START_UP.PRICING_TWO.FEATURES5',
                      border: 'right'
                    },
                    {
                      icon: 'git-branch',
                      title: 'DEMOS.START_UP.PRICING_TWO.FEATURES6'
                    },
                    {
                      icon: 'headphones',
                      title: 'DEMOS.START_UP.PRICING_TWO.FEATURES7',
                      border: 'right'
                    },
                    {
                      icon: 'activity',
                      title: 'DEMOS.START_UP.PRICING_TWO.FEATURES8'
                    },
                    {
                      icon: 'trello',
                      title: 'DEMOS.START_UP.PRICING_TWO.FEATURES9',
                      border: 'right'
                    },
                    {
                      icon: 'volume-2',
                      title: 'DEMOS.START_UP.PRICING_TWO.FEATURES10'
                    },
                    {
                      icon: 'box',
                      title: 'DEMOS.START_UP.PRICING_TWO.FEATURES11',
                      border: 'right'
                    },
                    {
                      icon: 'share-2',
                      title: 'DEMOS.START_UP.PRICING_TWO.FEATURES12'
                    }
                  ]);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || q)(l.Lb(j.c));
            }),
            (q.ɵcmp = l.Fb({
              type: q,
              selectors: [['dc-pricing-two-cards']],
              decls: 95,
              vars: 38,
              consts: [
                [1, 'bg-light', 'edge', 'top-left'],
                [1, 'container', 'bring-to-front', 'pb-0', 'pt-3'],
                [1, 'section-heading'],
                [1, 'row', 'justify-content-center'],
                [1, 'col-md-10', 'col-lg-8', 'text-center'],
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
                [1, 'lead', 'text-muted'],
                [1, 'row', 'align-items-center', 'no-gutters'],
                ['style', 'z-index: 1', 3, 'class', 4, 'ngFor', 'ngForOf'],
                [
                  'data-aos',
                  'fade-up',
                  'data-aos-delay',
                  '200',
                  1,
                  'card',
                  'border-0',
                  'rounded-lg',
                  'shadow-lg'
                ],
                [1, 'card-body', 'py-4'],
                [1, 'row'],
                [1, 'col-xl-10', 'mx-auto'],
                [1, 'text-center'],
                [1, 'bold', 'text-uppercase'],
                [1, 'my-4'],
                [1, 'lead', 'bold'],
                [1, 'text-muted'],
                [1, 'row', 'no-gutters'],
                [3, 'class', 'border-top', 4, 'ngFor', 'ngForOf'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'btn',
                  'btn-light',
                  'btn-lg',
                  'btn-block',
                  'rounded-top-0',
                  'rounded-bottom',
                  'py-4'
                ],
                ['name', 'arrow-right', 1, 'ml-3'],
                [2, 'z-index', '1'],
                [
                  'data-aos',
                  'fade-up',
                  1,
                  'card',
                  'border-0',
                  'rounded-lg',
                  'shadow-lg',
                  'mb-4',
                  'mb-md-0'
                ],
                [1, 'col-xl-9', 'mx-auto'],
                [1, 'pricing', 'text-center', 'mb-5'],
                [1, 'bold', 'text-uppercase', 'text-primary'],
                [1, 'pricing-value'],
                [
                  1,
                  'price',
                  'display-lg-4',
                  'semibold',
                  'odometer',
                  'text-dark'
                ],
                [1, 'list-unstyled'],
                [4, 'ngFor', 'ngForOf'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'btn',
                  'btn-primary',
                  'btn-lg',
                  'btn-block',
                  'rounded-top-0',
                  'rounded-bottom',
                  'py-4'
                ],
                [3, 'name', 'size', 'iconClass'],
                [1, 'media', 'align-items-center', 'mb-3'],
                [
                  1,
                  'icon-md',
                  'bg-success',
                  'p-2',
                  'rounded-circle',
                  'center-flex',
                  'mr-3'
                ],
                [1, 'media-body'],
                [1, 'text-center', 'p-3'],
                [1, 'mb-0']
              ],
              template: function(n, e) {
                1 & n &&
                  (l.Qb(0, 'section', 0),
                  l.Fc(1, '\n  '),
                  l.Qb(2, 'div', 1),
                  l.Fc(3, '\n    '),
                  l.Qb(4, 'div', 2),
                  l.Fc(5, '\n      '),
                  l.Qb(6, 'div', 3),
                  l.Fc(7, '\n        '),
                  l.Qb(8, 'div', 4),
                  l.Fc(9, '\n          '),
                  l.Qb(10, 'h2'),
                  l.Fc(11, '\n            '),
                  l.Qb(12, 'p', 5),
                  l.Fc(13),
                  l.gc(14, 'translate'),
                  l.Qb(15, 'span', 6),
                  l.Fc(16),
                  l.gc(17, 'translate'),
                  l.Pb(),
                  l.Fc(18, '\n            '),
                  l.Pb(),
                  l.Fc(19, '\n            '),
                  l.Qb(20, 'p', 6),
                  l.Fc(21),
                  l.gc(22, 'translate'),
                  l.Qb(23, 'span', 5),
                  l.Fc(24),
                  l.gc(25, 'translate'),
                  l.Pb(),
                  l.Fc(26, '\n            '),
                  l.Pb(),
                  l.Fc(27, '\n            '),
                  l.Qb(28, 'p', 6),
                  l.Fc(29),
                  l.gc(30, 'translate'),
                  l.Qb(31, 'span', 5),
                  l.Fc(32),
                  l.gc(33, 'translate'),
                  l.Pb(),
                  l.Fc(34, '\n            '),
                  l.Pb(),
                  l.Fc(35, '\n          '),
                  l.Pb(),
                  l.Fc(36, '\n\n          '),
                  l.Qb(37, 'p', 7),
                  l.Fc(38),
                  l.gc(39, 'translate'),
                  l.Pb(),
                  l.Fc(40, '\n        '),
                  l.Pb(),
                  l.Fc(41, '\n      '),
                  l.Pb(),
                  l.Fc(42, '\n\n      '),
                  l.Fc(43, '\n    '),
                  l.Pb(),
                  l.Fc(44, '\n\n    '),
                  l.Qb(45, 'div', 8),
                  l.Fc(46, '\n      '),
                  l.Dc(47, B, 44, 19, 'div', 9),
                  l.Fc(48, '\n\n      '),
                  l.Qb(49, 'div'),
                  l.Fc(50, '\n        '),
                  l.Qb(51, 'div', 10),
                  l.Fc(52, '\n          '),
                  l.Qb(53, 'div', 11),
                  l.Fc(54, '\n            '),
                  l.Qb(55, 'div', 12),
                  l.Fc(56, '\n              '),
                  l.Qb(57, 'div', 13),
                  l.Fc(58, '\n                '),
                  l.Qb(59, 'div', 14),
                  l.Fc(60, '\n                  '),
                  l.Qb(61, 'h5', 15),
                  l.Fc(62),
                  l.gc(63, 'translate'),
                  l.Pb(),
                  l.Fc(64, '\n                  '),
                  l.Mb(65, 'hr', 16),
                  l.Fc(66, '\n\n                  '),
                  l.Qb(67, 'p', 17),
                  l.Fc(68),
                  l.gc(69, 'translate'),
                  l.Pb(),
                  l.Fc(70, '\n\n                  '),
                  l.Qb(71, 'p', 18),
                  l.Fc(72),
                  l.gc(73, 'translate'),
                  l.Pb(),
                  l.Fc(74, '\n\n                  '),
                  l.Qb(75, 'div', 19),
                  l.Fc(76, '\n                    '),
                  l.Dc(77, $, 11, 11, 'div', 20),
                  l.Fc(78, '\n                  '),
                  l.Pb(),
                  l.Fc(79, '\n                '),
                  l.Pb(),
                  l.Fc(80, '\n              '),
                  l.Pb(),
                  l.Fc(81, '\n            '),
                  l.Pb(),
                  l.Fc(82, '\n          '),
                  l.Pb(),
                  l.Fc(83, '\n\n          '),
                  l.Qb(84, 'a', 21),
                  l.Fc(85),
                  l.gc(86, 'translate'),
                  l.Mb(87, 'dc-feather', 22),
                  l.Fc(88, '\n          '),
                  l.Pb(),
                  l.Fc(89, '\n        '),
                  l.Pb(),
                  l.Fc(90, '\n      '),
                  l.Pb(),
                  l.Fc(91, '\n    '),
                  l.Pb(),
                  l.Fc(92, '\n  '),
                  l.Pb(),
                  l.Fc(93, '\n'),
                  l.Pb(),
                  l.Fc(94, '\n')),
                  2 & n &&
                    (l.xb(13),
                    l.Hc(
                      '\n              ',
                      l.hc(14, 16, 'DEMOS.START_UP.PRICING_TWO.TITLE0'),
                      '\n              '
                    ),
                    l.xb(3),
                    l.Gc(l.hc(17, 18, 'DEMOS.START_UP.PRICING_TWO.TITLE01')),
                    l.xb(5),
                    l.Hc(
                      '\n              ',
                      l.hc(22, 20, 'DEMOS.START_UP.PRICING_TWO.TITLE1'),
                      '\n              '
                    ),
                    l.xb(3),
                    l.Gc(l.hc(25, 22, 'DEMOS.START_UP.PRICING_TWO.TITLE11')),
                    l.xb(5),
                    l.Hc(
                      '\n              ',
                      l.hc(30, 24, 'DEMOS.START_UP.PRICING_TWO.TITLE2'),
                      '\n              '
                    ),
                    l.xb(3),
                    l.Gc(l.hc(33, 26, 'DEMOS.START_UP.PRICING_TWO.TITLE22')),
                    l.xb(6),
                    l.Hc(
                      '\n            ',
                      l.hc(39, 28, 'DEMOS.START_UP.PRICING_TWO.SUBTITLE'),
                      '\n          '
                    ),
                    l.xb(9),
                    l.kc('ngForOf', e.plans),
                    l.xb(2),
                    l.Ab('col-md-', 12 / (e.plans.length + 1), ' ml-md-n3'),
                    l.xb(13),
                    l.Hc(
                      '\n                    ',
                      l.hc(63, 30, 'DEMOS.START_UP.PRICING_TWO.CUSTOM'),
                      '\n                  '
                    ),
                    l.xb(6),
                    l.Hc(
                      '\n                    ',
                      l.hc(69, 32, 'DEMOS.START_UP.PRICING_TWO.CUSTOM1'),
                      '\n                  '
                    ),
                    l.xb(4),
                    l.Hc(
                      '\n                    ',
                      l.hc(73, 34, 'DEMOS.START_UP.PRICING_TWO.CUSTOM2'),
                      '\n                  '
                    ),
                    l.xb(5),
                    l.kc('ngForOf', e.xtras),
                    l.xb(8),
                    l.Hc(
                      '',
                      l.hc(86, 36, 'DEMOS.START_UP.PRICING_TWO.CUSTOM3'),
                      '\n\n            '
                    ));
              },
              directives: [g.j, M.a],
              pipes: [j.b],
              styles: ['']
            })),
            q);
        function V(n, e) {
          if (
            (1 & n &&
              (l.Qb(0, 'div', 4),
              l.Fc(1, '\n        '),
              l.Qb(2, 'div', 5),
              l.Fc(3, '\n          '),
              l.Qb(4, 'div', 6),
              l.Fc(5, '\n            '),
              l.Mb(6, 'dc-feather', 7),
              l.Fc(7, '\n          '),
              l.Pb(),
              l.Fc(8, '\n          '),
              l.Qb(9, 'div', 8),
              l.Fc(10, '\n            '),
              l.Qb(11, 'h6', 9),
              l.Fc(12),
              l.Pb(),
              l.Fc(13, '\n            '),
              l.Qb(14, 'p', 10),
              l.Fc(
                15,
                '\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci\n              atque beatae dicta dolores hic porro quam voluptatibus.\n            '
              ),
              l.Pb(),
              l.Fc(16, '\n          '),
              l.Pb(),
              l.Fc(17, '\n        '),
              l.Pb(),
              l.Fc(18, '\n      '),
              l.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            l.xb(6),
              l.kc('name', t.icon)('iconClass', 'stroke-contrast'),
              l.xb(6),
              l.Gc(t.title);
          }
        }
        var X,
          K,
          Y,
          Z,
          nn,
          en =
            (((X = (function() {
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
              return new (n || X)();
            }),
            (X.ɵcmp = l.Fb({
              type: X,
              selectors: [['dc-business-solutions-pricing-includes']],
              decls: 11,
              vars: 1,
              consts: [
                [1, 'bg-dark'],
                [1, 'container', 'pt-15', 'pb-5'],
                [1, 'row'],
                ['class', 'col-md-6', 4, 'ngFor', 'ngForOf'],
                [1, 'col-md-6'],
                [1, 'media', 'pb-3'],
                [
                  1,
                  'bg-success',
                  'p-3',
                  'rounded-circle',
                  'center-flex',
                  'mr-3'
                ],
                [3, 'name', 'iconClass'],
                [1, 'media-body'],
                [1, 'text-contrast'],
                [1, 'text-muted']
              ],
              template: function(n, e) {
                1 & n &&
                  (l.Qb(0, 'section', 0),
                  l.Fc(1, '\n  '),
                  l.Qb(2, 'div', 1),
                  l.Fc(3, '\n    '),
                  l.Qb(4, 'div', 2),
                  l.Fc(5, '\n      '),
                  l.Dc(6, V, 19, 3, 'div', 3),
                  l.Fc(7, '\n    '),
                  l.Pb(),
                  l.Fc(8, '\n  '),
                  l.Pb(),
                  l.Fc(9, '\n'),
                  l.Pb(),
                  l.Fc(10, '\n')),
                  2 & n && (l.xb(6), l.kc('ngForOf', e.features));
              },
              directives: [g.j, M.a],
              styles: ['']
            })),
            X),
          tn = function() {
            return ['Money', 'Time', 'Costs'];
          },
          cn =
            (((K = (function() {
              function n() {
                t(this, n);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || K)();
            }),
            (K.ɵcmp = l.Fb({
              type: K,
              selectors: [['dc-business-solutions-get-theme']],
              decls: 39,
              vars: 6,
              consts: [
                [1, 'bg-dark'],
                [1, 'container'],
                [1, 'section-heading'],
                [1, 'row'],
                [
                  1,
                  'col-12',
                  'col-md-10',
                  'col-lg-8',
                  'mx-auto',
                  'text-center'
                ],
                [
                  1,
                  'badge',
                  'badge-light',
                  'badge-pill',
                  'text-uppercase',
                  'bold',
                  'px-4',
                  'py-2',
                  'mb-4'
                ],
                [1, 'text-contrast'],
                [3, 'strings', 'typeSpeed', 'backDelay', 'backSpeed', 'loop'],
                [1, 'typing', 'typed', 'bold'],
                [1, 'lead', 'text-muted'],
                [1, 'text-center'],
                [1, 'handwritten', 'highlight', 'font-md'],
                [
                  'href',
                  'https://themeforest.net/item/dashcore-saas-startup-software-template/22397137',
                  'target',
                  '_blank',
                  1,
                  'btn',
                  'btn-lg',
                  'btn-alternate',
                  'text-contrast',
                  'px-4'
                ]
              ],
              template: function(n, e) {
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
                  l.Qb(9, 'div', 4),
                  l.Fc(10, '\n          '),
                  l.Qb(11, 'span', 5),
                  l.Fc(12, 'Get started'),
                  l.Pb(),
                  l.Fc(13, '\n\n          '),
                  l.Qb(14, 'h2', 6),
                  l.Fc(15, '\n            Everythink saves\n            '),
                  l.Qb(16, 'ngx-typed-js', 7),
                  l.Fc(17, '\n              '),
                  l.Mb(18, 'span', 8),
                  l.Fc(19, '\n            '),
                  l.Pb(),
                  l.Fc(20, '\n          '),
                  l.Pb(),
                  l.Fc(21, '\n\n          '),
                  l.Qb(22, 'p', 9),
                  l.Fc(
                    23,
                    '\n            Everythink will saves you tons of hard work, it is easy to customize\n            and it comes with hundreds of features.\n          '
                  ),
                  l.Pb(),
                  l.Fc(24, '\n        '),
                  l.Pb(),
                  l.Fc(25, '\n      '),
                  l.Pb(),
                  l.Fc(26, '\n    '),
                  l.Pb(),
                  l.Fc(27, '\n\n    '),
                  l.Qb(28, 'div', 10),
                  l.Fc(29, '\n      '),
                  l.Qb(30, 'p', 11),
                  l.Fc(31, 'Available on Themeforest!!!'),
                  l.Pb(),
                  l.Fc(32, '\n\n      '),
                  l.Qb(33, 'a', 12),
                  l.Fc(34, 'Buy Dashcore Now'),
                  l.Pb(),
                  l.Fc(35, '\n    '),
                  l.Pb(),
                  l.Fc(36, '\n  '),
                  l.Pb(),
                  l.Fc(37, '\n'),
                  l.Pb(),
                  l.Fc(38, '\n')),
                  2 & n &&
                    (l.xb(16),
                    l.kc('strings', l.nc(5, tn))('typeSpeed', 150)(
                      'backDelay',
                      500
                    )('backSpeed', 50)('loop', !0));
              },
              directives: [P.b],
              styles: ['']
            })),
            K),
          sn = i('iLZQ'),
          on = [
            {
              path: '',
              component:
                ((Y = (function() {
                  function n() {
                    t(this, n);
                  }
                  return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
                })()),
                (Y.ɵfac = function(n) {
                  return new (n || Y)();
                }),
                (Y.ɵcmp = l.Fb({
                  type: Y,
                  selectors: [['dc-business-solutions']],
                  decls: 24,
                  vars: 4,
                  consts: [
                    [3, 'shapeCssText'],
                    [3, 'cssClass', 'shapeCssText']
                  ],
                  template: function(n, e) {
                    1 & n &&
                      (l.Mb(0, 'dc-business-solutions-heading'),
                      l.Fc(1, '\n'),
                      l.Mb(2, 'dc-divider-curve', 0),
                      l.Fc(3, '\n\n'),
                      l.Mb(4, 'dc-business-solutions-integration-icons'),
                      l.Fc(5, '\n'),
                      l.Mb(6, 'dc-business-solutions-start-business'),
                      l.Fc(7, '\n'),
                      l.Mb(8, 'dc-slider-features-fluid-cols'),
                      l.Fc(9, '\n\n'),
                      l.Mb(10, 'dc-testimonial-skewed-slider'),
                      l.Fc(11, '\n'),
                      l.Mb(12, 'dc-pricing-two-cards'),
                      l.Fc(13, '\n'),
                      l.Mb(14, 'dc-divider-curve', 1),
                      l.Fc(15, '\n\n'),
                      l.Mb(16, 'dc-business-solutions-pricing-includes'),
                      l.Fc(17, '\n'),
                      l.Mb(18, 'dc-business-solutions-get-theme'),
                      l.Fc(19, '\n'),
                      l.Mb(20, 'dc-divider-curve', 0),
                      l.Fc(21, '\n\n'),
                      l.Mb(22, 'dc-footer2'),
                      l.Fc(23, '\n')),
                      2 & n &&
                        (l.xb(2),
                        l.kc('shapeCssText', 'contrast'),
                        l.xb(12),
                        l.kc('cssClass', 'mt-12n')('shapeCssText', 'dark'),
                        l.xb(6),
                        l.kc('shapeCssText', 'contrast'));
                  },
                  directives: [x, Q, C, A, L, H.a, J, en, cn, sn.a],
                  styles: ['']
                })),
                Y),
              data: { title: Object(y.c)('About') }
            }
          ],
          rn =
            (((nn = function n() {
              t(this, n);
            }).ɵmod = l.Jb({ type: nn })),
            (nn.ɵinj = l.Ib({
              factory: function(n) {
                return new (n || nn)();
              },
              imports: [[v.g.forChild(on)], v.g]
            })),
            nn),
          an =
            (((Z = function n() {
              t(this, n);
            }).ɵmod = l.Jb({ type: Z })),
            (Z.ɵinj = l.Ib({
              factory: function(n) {
                return new (n || Z)();
              },
              imports: [[b.a, F, u.a, f.a, p.a, m.a, h, P.a, rn]]
            })),
            Z);
      }
    }
  ]);
})();
