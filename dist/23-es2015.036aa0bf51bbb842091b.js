(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    pu65: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      });
      var c = t('nhfI'),
        i = t('M0ag'),
        s = t('sYmb'),
        o = t('fXoL');
      let r = (() => {
        class n {}
        return (
          (n.ɵmod = o.Jb({ type: n })),
          (n.ɵinj = o.Ib({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[c.c, i.a, s.a.forChild()]]
          })),
          n
        );
      })();
    },
    rOCi: function(n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, 'BusinessSolutionsModule', function() {
          return R;
        });
      var c = t('M0ag'),
        i = t('V6j0'),
        s = t('fXoL');
      let o = (() => {
        class n {}
        return (
          (n.ɵmod = s.Jb({ type: n })),
          (n.ɵinj = s.Ib({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[i.a]]
          })),
          n
        );
      })();
      var r = t('M0Rk'),
        a = t('pu65'),
        b = t('2d4A'),
        d = t('kpBo'),
        l = t('ofXK');
      let u = (() => {
        class n {}
        return (
          (n.ɵmod = s.Jb({ type: n })),
          (n.ɵinj = s.Ib({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[l.b]]
          })),
          n
        );
      })();
      var p = t('pRTP'),
        F = t('tyNb'),
        m = t('ey9i');
      let g = (() => {
          class n {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(e) {
              return new (e || n)();
            }),
            (n.ɵcmp = s.Fb({
              type: n,
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
                  (s.Fc(0, '\n'),
                  s.Qb(1, 'header', 0),
                  s.Fc(2, '\n  '),
                  s.Qb(3, 'div', 1),
                  s.Fc(4, '\n    '),
                  s.Qb(5, 'div', 2),
                  s.Fc(6, '\n      '),
                  s.Qb(7, 'div', 3),
                  s.Fc(8, '\n        '),
                  s.Qb(9, 'span', 4),
                  s.Fc(10, 'Introducing Everythink'),
                  s.Pb(),
                  s.Fc(11, '\n        '),
                  s.Qb(12, 'h1', 5),
                  s.Fc(13, '\n          '),
                  s.Qb(14, 'span', 6),
                  s.Fc(15, 'Modern & Elegant '),
                  s.Pb(),
                  s.Fc(16, '\n          '),
                  s.Mb(17, 'br'),
                  s.Fc(
                    18,
                    '\n          Premium community builder all the tools in the palm of your hand\n        '
                  ),
                  s.Pb(),
                  s.Fc(19, '\n\n        '),
                  s.Qb(20, 'p', 7),
                  s.Fc(
                    21,
                    '\n          From a simple page to a complete module bundler, even a task runner,\n          Everythink comes with ease integration for every need\n        '
                  ),
                  s.Pb(),
                  s.Fc(22, '\n\n        '),
                  s.Qb(23, 'nav', 8),
                  s.Fc(24, '\n          '),
                  s.Qb(25, 'a', 9),
                  s.Fc(26, 'Get Started'),
                  s.Pb(),
                  s.Fc(27, '\n          '),
                  s.Qb(28, 'a', 10),
                  s.Fc(29, 'Sign up for Free'),
                  s.Pb(),
                  s.Fc(30, '\n        '),
                  s.Pb(),
                  s.Fc(31, '\n      '),
                  s.Pb(),
                  s.Fc(32, '\n    '),
                  s.Pb(),
                  s.Fc(33, '\n  '),
                  s.Pb(),
                  s.Fc(34, '\n'),
                  s.Pb(),
                  s.Fc(35, '\n'));
              },
              styles: ['']
            })),
            n
          );
        })(),
        f = (() => {
          class n {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(e) {
              return new (e || n)();
            }),
            (n.ɵcmp = s.Fb({
              type: n,
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
                  (s.Qb(0, 'div', 0),
                  s.Fc(1, '\n  '),
                  s.Qb(2, 'div'),
                  s.Fc(3, '\n    '),
                  s.ec(),
                  s.Qb(4, 'svg', 1),
                  s.Fc(5, '\n      '),
                  s.Mb(6, 'path', 2),
                  s.Fc(7, '\n    '),
                  s.Pb(),
                  s.Fc(8, '\n  '),
                  s.Pb(),
                  s.Fc(9, '\n'),
                  s.Pb(),
                  s.Fc(10, '\n')),
                  2 & n &&
                    (s.kc('ngClass', e.cssClass),
                    s.xb(2),
                    s.Ab(
                      'shape-divider shape-divider-bottom shape-divider-fluid-x text-',
                      e.shapeCssText,
                      ''
                    ));
              },
              directives: [l.i],
              styles: ['']
            })),
            n
          );
        })();
      var v = t('nhfI');
      function h(n, e) {
        if (
          (1 & n &&
            (s.Qb(0, 'div', 2),
            s.Fc(1, '\n    '),
            s.Mb(2, 'img', 3),
            s.Fc(3, '\n  '),
            s.Pb()),
          2 & n)
        ) {
          const n = e.$implicit;
          s.xb(2), s.mc('src', 'assets/img/logos/', n, '.png', s.yc);
        }
      }
      const y = function() {
        return [1, 2, 3, 4, 5, 6];
      };
      let P = (() => {
          class n {
            constructor() {
              this.config = {
                slidesPerView: 5,
                spaceBetween: 30,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                loop: !0,
                navigation: !1,
                pagination: !1
              };
            }
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(e) {
              return new (e || n)();
            }),
            (n.ɵcmp = s.Fb({
              type: n,
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
                  (s.Qb(0, 'swiper', 0),
                  s.Fc(1, '\n  '),
                  s.Dc(2, h, 4, 1, 'div', 1),
                  s.Fc(3, '\n'),
                  s.Pb(),
                  s.Fc(4, '\n')),
                  2 & n &&
                    (s.kc('config', e.config),
                    s.xb(2),
                    s.kc('ngForOf', s.nc(2, y)));
              },
              directives: [v.a, l.j],
              styles: ['']
            })),
            n
          );
        })(),
        x = (() => {
          class n {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(e) {
              return new (e || n)();
            }),
            (n.ɵcmp = s.Fb({
              type: n,
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
                  (s.Fc(0, '\n'),
                  s.Qb(1, 'section', 0),
                  s.Fc(2, '\n  '),
                  s.Qb(3, 'div', 1),
                  s.Fc(4, '\n    '),
                  s.Qb(5, 'div', 2),
                  s.Fc(6, '\n      '),
                  s.Qb(7, 'div', 3),
                  s.Fc(8, '\n        '),
                  s.Mb(9, 'dc-slider-logos'),
                  s.Fc(10, '\n      '),
                  s.Pb(),
                  s.Fc(11, '\n    '),
                  s.Pb(),
                  s.Fc(12, '\n  '),
                  s.Pb(),
                  s.Fc(13, '\n'),
                  s.Pb(),
                  s.Fc(14, '\n'));
              },
              directives: [P],
              styles: ['']
            })),
            n
          );
        })();
      var w = t('AL06');
      function Q(n, e) {
        if (
          (1 & n &&
            (s.Qb(0, 'li', 14),
            s.Fc(1, '\n            '),
            s.Qb(2, 'div', 15),
            s.Fc(3, '\n              '),
            s.Qb(4, 'div', 16),
            s.Fc(5, '\n                '),
            s.Mb(6, 'dc-feather', 17),
            s.Fc(7, '\n              '),
            s.Pb(),
            s.Fc(8, '\n\n              '),
            s.Qb(9, 'p', 18),
            s.Fc(10),
            s.Pb(),
            s.Fc(11, '\n            '),
            s.Pb(),
            s.Fc(12, '\n          '),
            s.Pb()),
          2 & n)
        ) {
          const n = e.$implicit;
          s.xb(6),
            s.kc('name', n.icon)('size', 16)('iconClass', 'stroke-contrast'),
            s.xb(4),
            s.Gc(n.title);
        }
      }
      let k = (() => {
        class n {
          constructor() {
            this.features = [
              {
                title: 'Perfect for modern and growing Apps & Startups',
                icon: 'arrow-right'
              },
              {
                title: 'Predesigned growing set of modern web components',
                icon: 'arrow-right'
              },
              {
                title: 'Modern & eye-catching design to enchant your visitors',
                icon: 'arrow-right'
              },
              {
                title: "Focus on your business, don't worry about your website",
                icon: 'arrow-right'
              }
            ];
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵcmp = s.Fb({
            type: n,
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
                (s.Qb(0, 'section', 0),
                s.Fc(1, '\n  '),
                s.Qb(2, 'div', 1),
                s.Fc(3, '\n    '),
                s.Qb(4, 'div', 2),
                s.Fc(5, '\n      '),
                s.Qb(6, 'div', 3),
                s.Fc(7, '\n        '),
                s.Qb(8, 'div', 4),
                s.Fc(9, '\n          '),
                s.Qb(10, 'h2'),
                s.Fc(11, '\n            Quick start your business '),
                s.Mb(12, 'br'),
                s.Fc(13, '\n            '),
                s.Qb(14, 'span', 5),
                s.Fc(15, 'with the right tools'),
                s.Pb(),
                s.Fc(16, '\n          '),
                s.Pb(),
                s.Fc(17, '\n\n          '),
                s.Qb(18, 'p', 6),
                s.Fc(
                  19,
                  '\n            EveryThink helps you Build a modern & beautiful web presence. Our\n            growing set of components will make your life waaaay easier.\n          '
                ),
                s.Pb(),
                s.Fc(20, '\n        '),
                s.Pb(),
                s.Fc(21, '\n\n        '),
                s.Qb(22, 'ul', 7),
                s.Fc(23, '\n          '),
                s.Dc(24, Q, 13, 4, 'li', 8),
                s.Fc(25, '\n        '),
                s.Pb(),
                s.Fc(26, '\n\n        '),
                s.Qb(27, 'a', 9),
                s.Fc(28, 'Know More'),
                s.Pb(),
                s.Fc(29, '\n      '),
                s.Pb(),
                s.Fc(30, '\n\n      '),
                s.Qb(31, 'div', 10),
                s.Fc(32, '\n        '),
                s.Qb(33, 'div', 11),
                s.Fc(34, '\n          '),
                s.Qb(35, 'div', 12),
                s.Fc(36, '\n            '),
                s.Mb(37, 'img', 13),
                s.Fc(38, '\n          '),
                s.Pb(),
                s.Fc(39, '\n        '),
                s.Pb(),
                s.Fc(40, '\n      '),
                s.Pb(),
                s.Fc(41, '\n    '),
                s.Pb(),
                s.Fc(42, '\n  '),
                s.Pb(),
                s.Fc(43, '\n'),
                s.Pb(),
                s.Fc(44, '\n')),
                2 & n && (s.xb(24), s.kc('ngForOf', e.features));
            },
            directives: [l.j, w.a],
            styles: ['']
          })),
          n
        );
      })();
      var C = t('wHSu'),
        M = t('6NWb');
      function O(n, e) {
        if (
          (1 & n &&
            (s.Qb(0, 'div', 13),
            s.Fc(1, '\n          '),
            s.Mb(2, 'dc-feather', 14),
            s.Fc(3, '\n\n          '),
            s.Qb(4, 'div', 15),
            s.Fc(5, '\n            '),
            s.Qb(6, 'h4'),
            s.Fc(7),
            s.Pb(),
            s.Fc(8, '\n            '),
            s.Qb(9, 'p'),
            s.Fc(10),
            s.Pb(),
            s.Fc(11, '\n\n            '),
            s.Qb(12, 'a', 16),
            s.Fc(13, 'Learn more\n              '),
            s.Mb(14, 'fa-icon', 17),
            s.Fc(15, '\n            '),
            s.Pb(),
            s.Fc(16, '\n          '),
            s.Pb(),
            s.Fc(17, '\n        '),
            s.Pb()),
          2 & n)
        ) {
          const n = e.$implicit,
            t = e.index,
            c = s.fc();
          s.Db('mb-5', 0 == t),
            s.xb(2),
            s.kc('name', n.icon)('size', 36)(
              'iconClass',
              'stroke-primary mr-3'
            ),
            s.xb(5),
            s.Gc(n.title),
            s.xb(3),
            s.Gc(n.description),
            s.xb(4),
            s.kc('icon', c.longArrowAltRight);
        }
      }
      function I(n, e) {
        if (
          (1 & n &&
            (s.Qb(0, 'div', 18),
            s.Fc(1, '\n              '),
            s.Qb(2, 'figure', 19),
            s.Fc(3, '\n                '),
            s.Mb(4, 'img', 20),
            s.Fc(5, '\n              '),
            s.Pb(),
            s.Fc(6, '\n            '),
            s.Pb()),
          2 & n)
        ) {
          const n = e.$implicit;
          s.xb(4),
            s.kc('src', 'assets/img/screens/dash/dash/' + n.img + '.png', s.yc);
        }
      }
      function A(n, e) {
        if (
          (1 & n &&
            (s.Qb(0, 'div', 18),
            s.Fc(1, '\n                  '),
            s.Qb(2, 'h4', 21),
            s.Fc(3),
            s.Pb(),
            s.Fc(4, '\n                  '),
            s.Qb(5, 'p', 22),
            s.Fc(
              6,
              '\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab\n                    consequuntur facere hic, ipsa ipsum obcaecati odio optio\n                    quidem quod totam!\n                  '
            ),
            s.Pb(),
            s.Fc(7, '\n\n                  '),
            s.Qb(8, 'a', 23),
            s.Fc(9, 'Learn more\n                    '),
            s.Mb(10, 'fa-icon', 17),
            s.Fc(11, '\n                  '),
            s.Pb(),
            s.Fc(12, '\n                '),
            s.Pb()),
          2 & n)
        ) {
          const n = e.$implicit,
            t = s.fc();
          s.xb(3), s.Gc(n.title), s.xb(7), s.kc('icon', t.longArrowAltRight);
        }
      }
      let S = (() => {
        class n {
          constructor() {
            (this.longArrowAltRight = C.l),
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
          ngOnInit() {}
          updateSlider(n) {
            this.currentSlide = n;
          }
          onIndexChange(n) {
            this.currentSlide = n;
          }
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵcmp = s.Fb({
            type: n,
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
                (s.Qb(0, 'section', 0),
                s.Fc(1, '\n  '),
                s.Qb(2, 'div', 1),
                s.Fc(3, '\n    '),
                s.Qb(4, 'div', 2),
                s.Fc(5, '\n      '),
                s.Qb(6, 'div', 3),
                s.Fc(7, '\n        '),
                s.Dc(8, O, 18, 8, 'div', 4),
                s.Fc(9, '\n      '),
                s.Pb(),
                s.Fc(10, '\n\n      '),
                s.Qb(11, 'div', 5),
                s.Fc(12, '\n        '),
                s.Qb(13, 'div', 6),
                s.Fc(14, '\n          '),
                s.Qb(15, 'div', 7),
                s.Fc(16, '\n            '),
                s.Dc(17, I, 7, 1, 'div', 8),
                s.Fc(18, '\n          '),
                s.Pb(),
                s.Fc(19, '\n        '),
                s.Pb(),
                s.Fc(20, '\n\n        '),
                s.Qb(21, 'div', 9),
                s.Fc(22, '\n          '),
                s.Qb(23, 'div', 10),
                s.Fc(24, '\n            '),
                s.Qb(25, 'div', 11),
                s.bc('indexChange', function(n) {
                  return e.onIndexChange(n);
                }),
                s.Fc(26, '\n              '),
                s.Qb(27, 'div', 7),
                s.Fc(28, '\n                '),
                s.Dc(29, A, 13, 2, 'div', 8),
                s.Fc(30, '\n              '),
                s.Pb(),
                s.Fc(31, '\n\n              '),
                s.Mb(32, 'div', 12),
                s.Fc(33, '\n            '),
                s.Pb(),
                s.Fc(34, '\n          '),
                s.Pb(),
                s.Fc(35, '\n        '),
                s.Pb(),
                s.Fc(36, '\n      '),
                s.Pb(),
                s.Fc(37, '\n    '),
                s.Pb(),
                s.Fc(38, '\n  '),
                s.Pb(),
                s.Fc(39, '\n'),
                s.Pb(),
                s.Fc(40, '\n')),
                2 & n &&
                  (s.xb(8),
                  s.kc('ngForOf', e.items),
                  s.xb(5),
                  s.kc('swiper', e.fadingConfig)('index', e.currentSlide),
                  s.xb(4),
                  s.kc('ngForOf', e.features),
                  s.xb(8),
                  s.kc('swiper', e.slidingConfig),
                  s.xb(4),
                  s.kc('ngForOf', e.features));
            },
            directives: [l.j, v.b, w.a, M.a],
            styles: ['']
          })),
          n
        );
      })();
      var j = t('nEva'),
        T = t('mrcQ');
      function D(n, e) {
        if (
          (1 & n &&
            (s.Qb(0, 'div', 4),
            s.Fc(1, '\n        '),
            s.Qb(2, 'div', 5),
            s.Fc(3, '\n          '),
            s.Qb(4, 'div', 6),
            s.Fc(5, '\n            '),
            s.Mb(6, 'dc-feather', 7),
            s.Fc(7, '\n          '),
            s.Pb(),
            s.Fc(8, '\n          '),
            s.Qb(9, 'div', 8),
            s.Fc(10, '\n            '),
            s.Qb(11, 'h6', 9),
            s.Fc(12),
            s.Pb(),
            s.Fc(13, '\n            '),
            s.Qb(14, 'p', 10),
            s.Fc(
              15,
              '\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci\n              atque beatae dicta dolores hic porro quam voluptatibus.\n            '
            ),
            s.Pb(),
            s.Fc(16, '\n          '),
            s.Pb(),
            s.Fc(17, '\n        '),
            s.Pb(),
            s.Fc(18, '\n      '),
            s.Pb()),
          2 & n)
        ) {
          const n = e.$implicit;
          s.xb(6),
            s.kc('name', n.icon)('iconClass', 'stroke-contrast'),
            s.xb(6),
            s.Gc(n.title);
        }
      }
      let B = (() => {
        class n {
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
          (n.ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵcmp = s.Fb({
            type: n,
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
              [1, 'bg-success', 'p-3', 'rounded-circle', 'center-flex', 'mr-3'],
              [3, 'name', 'iconClass'],
              [1, 'media-body'],
              [1, 'text-contrast'],
              [1, 'text-muted']
            ],
            template: function(n, e) {
              1 & n &&
                (s.Qb(0, 'section', 0),
                s.Fc(1, '\n  '),
                s.Qb(2, 'div', 1),
                s.Fc(3, '\n    '),
                s.Qb(4, 'div', 2),
                s.Fc(5, '\n      '),
                s.Dc(6, D, 19, 3, 'div', 3),
                s.Fc(7, '\n    '),
                s.Pb(),
                s.Fc(8, '\n  '),
                s.Pb(),
                s.Fc(9, '\n'),
                s.Pb(),
                s.Fc(10, '\n')),
                2 & n && (s.xb(6), s.kc('ngForOf', e.features));
            },
            directives: [l.j, w.a],
            styles: ['']
          })),
          n
        );
      })();
      const L = function() {
        return ['Money', 'Time', 'Costs'];
      };
      let E = (() => {
        class n {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵcmp = s.Fb({
            type: n,
            selectors: [['dc-business-solutions-get-theme']],
            decls: 39,
            vars: 6,
            consts: [
              [1, 'bg-dark'],
              [1, 'container'],
              [1, 'section-heading'],
              [1, 'row'],
              [1, 'col-12', 'col-md-10', 'col-lg-8', 'mx-auto', 'text-center'],
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
                (s.Fc(0, '\n'),
                s.Qb(1, 'section', 0),
                s.Fc(2, '\n  '),
                s.Qb(3, 'div', 1),
                s.Fc(4, '\n    '),
                s.Qb(5, 'div', 2),
                s.Fc(6, '\n      '),
                s.Qb(7, 'div', 3),
                s.Fc(8, '\n        '),
                s.Qb(9, 'div', 4),
                s.Fc(10, '\n          '),
                s.Qb(11, 'span', 5),
                s.Fc(12, 'Get started'),
                s.Pb(),
                s.Fc(13, '\n\n          '),
                s.Qb(14, 'h2', 6),
                s.Fc(15, '\n            Everythink saves\n            '),
                s.Qb(16, 'ngx-typed-js', 7),
                s.Fc(17, '\n              '),
                s.Mb(18, 'span', 8),
                s.Fc(19, '\n            '),
                s.Pb(),
                s.Fc(20, '\n          '),
                s.Pb(),
                s.Fc(21, '\n\n          '),
                s.Qb(22, 'p', 9),
                s.Fc(
                  23,
                  '\n            Everythink will saves you tons of hard work, it is easy to customize\n            and it comes with hundreds of features.\n          '
                ),
                s.Pb(),
                s.Fc(24, '\n        '),
                s.Pb(),
                s.Fc(25, '\n      '),
                s.Pb(),
                s.Fc(26, '\n    '),
                s.Pb(),
                s.Fc(27, '\n\n    '),
                s.Qb(28, 'div', 10),
                s.Fc(29, '\n      '),
                s.Qb(30, 'p', 11),
                s.Fc(31, 'Available on Themeforest!!!'),
                s.Pb(),
                s.Fc(32, '\n\n      '),
                s.Qb(33, 'a', 12),
                s.Fc(34, 'Buy Dashcore Now'),
                s.Pb(),
                s.Fc(35, '\n    '),
                s.Pb(),
                s.Fc(36, '\n  '),
                s.Pb(),
                s.Fc(37, '\n'),
                s.Pb(),
                s.Fc(38, '\n')),
                2 & n &&
                  (s.xb(16),
                  s.kc('strings', s.nc(5, L))('typeSpeed', 150)(
                    'backDelay',
                    500
                  )('backSpeed', 50)('loop', !0));
            },
            directives: [p.b],
            styles: ['']
          })),
          n
        );
      })();
      var q = t('iLZQ');
      const G = [
        {
          path: '',
          component: (() => {
            class n {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function(e) {
                return new (e || n)();
              }),
              (n.ɵcmp = s.Fb({
                type: n,
                selectors: [['dc-business-solutions']],
                decls: 24,
                vars: 4,
                consts: [[3, 'shapeCssText'], [3, 'cssClass', 'shapeCssText']],
                template: function(n, e) {
                  1 & n &&
                    (s.Mb(0, 'dc-business-solutions-heading'),
                    s.Fc(1, '\n'),
                    s.Mb(2, 'dc-divider-curve', 0),
                    s.Fc(3, '\n\n'),
                    s.Mb(4, 'dc-business-solutions-integration-icons'),
                    s.Fc(5, '\n'),
                    s.Mb(6, 'dc-business-solutions-start-business'),
                    s.Fc(7, '\n'),
                    s.Mb(8, 'dc-slider-features-fluid-cols'),
                    s.Fc(9, '\n\n'),
                    s.Mb(10, 'dc-testimonial-skewed-slider'),
                    s.Fc(11, '\n'),
                    s.Mb(12, 'dc-pricing-two-cards'),
                    s.Fc(13, '\n'),
                    s.Mb(14, 'dc-divider-curve', 1),
                    s.Fc(15, '\n\n'),
                    s.Mb(16, 'dc-business-solutions-pricing-includes'),
                    s.Fc(17, '\n'),
                    s.Mb(18, 'dc-business-solutions-get-theme'),
                    s.Fc(19, '\n'),
                    s.Mb(20, 'dc-divider-curve', 0),
                    s.Fc(21, '\n\n'),
                    s.Mb(22, 'dc-footer2'),
                    s.Fc(23, '\n')),
                    2 & n &&
                      (s.xb(2),
                      s.kc('shapeCssText', 'contrast'),
                      s.xb(12),
                      s.kc('cssClass', 'mt-12n')('shapeCssText', 'dark'),
                      s.xb(6),
                      s.kc('shapeCssText', 'contrast'));
                },
                directives: [g, f, x, k, S, j.a, T.a, B, E, q.a],
                styles: ['']
              })),
              n
            );
          })(),
          data: { title: Object(m.c)('About') }
        }
      ];
      let J = (() => {
          class n {}
          return (
            (n.ɵmod = s.Jb({ type: n })),
            (n.ɵinj = s.Ib({
              factory: function(e) {
                return new (e || n)();
              },
              imports: [[F.g.forChild(G)], F.g]
            })),
            n
          );
        })(),
        R = (() => {
          class n {}
          return (
            (n.ɵmod = s.Jb({ type: n })),
            (n.ɵinj = s.Ib({
              factory: function(e) {
                return new (e || n)();
              },
              imports: [[c.a, o, r.a, d.a, a.a, b.a, u, p.a, J]]
            })),
            n
          );
        })();
    }
  }
]);
