!(function() {
  function n(n, t) {
    if (!(n instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function t(n, t) {
    for (var e = 0; e < t.length; e++) {
      var c = t[e];
      (c.enumerable = c.enumerable || !1),
        (c.configurable = !0),
        'value' in c && (c.writable = !0),
        Object.defineProperty(n, c.key, c);
    }
  }
  function e(n, e, c) {
    return e && t(n.prototype, e), c && t(n, c), n;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    {
      '8tEE': function(n, t, e) {
        'use strict';
        e.d(t, 'a', function() {
          return c;
        }),
          e.d(t, 'b', function() {
            return r;
          }),
          e.d(t, 'c', function() {
            return o;
          }),
          e.d(t, 'd', function() {
            return i;
          }),
          e.d(t, 'e', function() {
            return s;
          });
        var c = {
            prefix: 'fab',
            iconName: 'facebook',
            icon: [
              512,
              512,
              [],
              'f09a',
              'M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z'
            ]
          },
          r = {
            prefix: 'fab',
            iconName: 'facebook-f',
            icon: [
              320,
              512,
              [],
              'f39e',
              'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
            ]
          },
          o = {
            prefix: 'fab',
            iconName: 'instagram',
            icon: [
              448,
              512,
              [],
              'f16d',
              'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
            ]
          },
          i = {
            prefix: 'fab',
            iconName: 'linkedin-in',
            icon: [
              448,
              512,
              [],
              'f0e1',
              'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
            ]
          },
          s = {
            prefix: 'fab',
            iconName: 'twitter',
            icon: [
              512,
              512,
              [],
              'f099',
              'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
            ]
          };
      },
      AL06: function(t, c, r) {
        'use strict';
        r.d(c, 'a', function() {
          return a;
        });
        var o = r('fXoL'),
          i = r('8mtn'),
          s = r('ofXK'),
          a = (function() {
            var t = (function() {
              function t() {
                n(this, t), (this.size = 36);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })();
            return (
              (t.ɵfac = function(n) {
                return new (n || t)();
              }),
              (t.ɵcmp = o.Fb({
                type: t,
                selectors: [['dc-feather']],
                inputs: { name: 'name', iconClass: 'iconClass', size: 'size' },
                decls: 2,
                vars: 4,
                consts: [[3, 'name', 'ngClass']],
                template: function(n, t) {
                  1 & n && (o.Mb(0, 'i-feather', 0), o.Fc(1, '\n')),
                    2 & n &&
                      (o.zb('wh' + t.size),
                      o.kc('name', t.name)('ngClass', t.iconClass));
                },
                directives: [i.a, s.i],
                styles: [
                  '.stroke-primary[_ngcontent-%COMP%]{stroke:#53f}.stroke-secondary[_ngcontent-%COMP%]{stroke:#506690}.stroke-success[_ngcontent-%COMP%]{stroke:#00c9b7}.stroke-info[_ngcontent-%COMP%]{stroke:#0083dd}.stroke-warning[_ngcontent-%COMP%]{stroke:#feb868}.stroke-danger[_ngcontent-%COMP%]{stroke:#c1002b}.stroke-light[_ngcontent-%COMP%]{stroke:#f9fbfd}.stroke-dark[_ngcontent-%COMP%]{stroke:#2b354f}.stroke-alternate[_ngcontent-%COMP%]{stroke:#fc9e21}.stroke-contrast[_ngcontent-%COMP%]{stroke:#fff}.stroke-darker[_ngcontent-%COMP%]{stroke:#001a3e}.stroke-black[_ngcontent-%COMP%]{stroke:#161c2d}.wh36[_ngcontent-%COMP%]{width:36px;height:36px}.wh24[_ngcontent-%COMP%]{width:24px;height:24px}'
                ]
              })),
              t
            );
          })();
      },
      M0Rk: function(t, e, c) {
        'use strict';
        c.d(e, 'a', function() {
          return a;
        });
        var r = c('tyNb'),
          o = c('M0ag'),
          i = c('sYmb'),
          s = c('fXoL'),
          a = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = s.Jb({ type: t })),
              (t.ɵinj = s.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[o.a, r.g, i.a.forChild()]]
              })),
              t
            );
          })();
      },
      iLZQ: function(t, c, r) {
        'use strict';
        r.d(c, 'a', function() {
          return b;
        });
        var o = r('8tEE'),
          i = r('wHSu'),
          s = r('fXoL'),
          a = r('tyNb'),
          f = function() {
            return ['/ai-agents'];
          },
          u = function() {
            return ['/terms'];
          },
          b = (function() {
            var t = (function() {
              function t() {
                n(this, t),
                  (this.fa = {
                    facebookF: o.b,
                    twitter: o.e,
                    instagram: o.c,
                    linkedinIn: o.d,
                    rss: i.r
                  });
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })();
            return (
              (t.ɵfac = function(n) {
                return new (n || t)();
              }),
              (t.ɵcmp = s.Fb({
                type: t,
                selectors: [['dc-footer2']],
                decls: 44,
                vars: 4,
                consts: [
                  [1, 'site-footer', 'section'],
                  [1, 'container', 'py-4'],
                  [1, 'mt-5'],
                  [1, 'text-center'],
                  [1, 'small', 'copyright', 'text-secondary'],
                  [1, 'brand', 'bold', 3, 'routerLink'],
                  [1, 'row', 'align-items-center'],
                  [1, 'col-md-5', 'text-center', 'text-md-left'],
                  [1, 'col-md-2', 'text-center'],
                  ['src', 'assets/img/logo.png', 'alt', '', 1, 'logo'],
                  [1, 'col-md-5', 'text-center', 'text-md-right'],
                  [
                    1,
                    'nav',
                    'justify-content-center',
                    'justify-content-md-start'
                  ],
                  [1, 'nav-item', 'nav-link', 3, 'routerLink']
                ],
                template: function(n, t) {
                  1 & n &&
                    (s.Qb(0, 'footer', 0),
                    s.Fc(1, '\n  '),
                    s.Qb(2, 'div', 1),
                    s.Fc(3, '\n    '),
                    s.Mb(4, 'hr', 2),
                    s.Fc(5, '\n\n    '),
                    s.Qb(6, 'div', 3),
                    s.Fc(7, '\n      '),
                    s.Fc(8, '\n      '),
                    s.Fc(9, '\n      '),
                    s.Fc(10, '\n\n      '),
                    s.Qb(11, 'p', 4),
                    s.Fc(
                      12,
                      '\n        Copyright \xa9 2024-2025. All Rights Reserved '
                    ),
                    s.Qb(13, 'em'),
                    s.Fc(14, 'by'),
                    s.Pb(),
                    s.Fc(15, '\n        '),
                    s.Qb(16, 'a', 5),
                    s.Fc(17, 'DefAgent llc.'),
                    s.Pb(),
                    s.Fc(18, '\n      '),
                    s.Pb(),
                    s.Fc(19, '\n    '),
                    s.Pb(),
                    s.Fc(20, '\n\n    '),
                    s.Qb(21, 'div', 6),
                    s.Fc(22, '\n      '),
                    s.Qb(23, 'div', 7),
                    s.Fc(24, '\n        '),
                    s.Fc(25, '\n      '),
                    s.Pb(),
                    s.Fc(26, '\n\n      '),
                    s.Qb(27, 'div', 8),
                    s.Fc(28, '\n        '),
                    s.Mb(29, 'img', 9),
                    s.Fc(30, '\n      '),
                    s.Pb(),
                    s.Fc(31, '\n\n      '),
                    s.Qb(32, 'div', 10),
                    s.Fc(33, '\n        '),
                    s.Qb(34, 'nav', 11),
                    s.Fc(35, '\n          '),
                    s.Qb(36, 'a', 12),
                    s.Fc(37, 'Privacy Policy'),
                    s.Pb(),
                    s.Fc(38, '\n        '),
                    s.Pb(),
                    s.Fc(39, '\n      '),
                    s.Pb(),
                    s.Fc(40, '\n    '),
                    s.Pb(),
                    s.Fc(41, '\n  '),
                    s.Pb(),
                    s.Fc(42, '\n'),
                    s.Pb(),
                    s.Fc(43, '\n')),
                    2 & n &&
                      (s.xb(16),
                      s.kc('routerLink', s.nc(2, f)),
                      s.xb(20),
                      s.kc('routerLink', s.nc(3, u)));
                },
                directives: [a.f],
                styles: ['']
              })),
              t
            );
          })();
      }
    }
  ]);
})();
