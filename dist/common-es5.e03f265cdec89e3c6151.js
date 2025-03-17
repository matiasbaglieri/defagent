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
    [0],
    {
      '7cks': function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return l;
        });
        var r = i('fXoL'),
          a = i('sYmb'),
          s = i('ofXK'),
          o = i('AL06');
        function b(n, t) {
          if (
            (1 & n &&
              (r.Qb(0, 'div', 7),
              r.Fc(1, '\n        '),
              r.Mb(2, 'dc-feather', 8),
              r.Fc(3, '\n        '),
              r.Qb(4, 'h5', 9),
              r.Fc(5),
              r.Pb(),
              r.Fc(6, '\n        '),
              r.Qb(7, 'p'),
              r.Fc(8),
              r.Pb(),
              r.Fc(9, '\n      '),
              r.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            r.xb(2),
              r.kc('name', e.icon)('iconClass', 'stroke-primary'),
              r.xb(3),
              r.Gc(e.title),
              r.xb(3),
              r.Gc(e.description);
          }
        }
        var l = (function() {
          var t = (function() {
            function t(e) {
              n(this, t),
                (this.translate = e),
                (this.elements = [
                  {
                    icon: 'activity',
                    title: 'Deliver Actionable Insights',
                    description:
                      'EveryThink AIaaS synthesizes data from diverse clinical data points into tangible and actionable insights. The advanced analytics and machine learning algorithms also make it easier to connect physicians with up-to-date treatment options and relevant insights for patients on a case-by-case basis.'
                  },
                  {
                    icon: 'sliders',
                    title: 'Find and compare similar patients',
                    description:
                      'EveryThink\u2019s software as a service AI solution empowers clinicians to make better and more efficient data-driven treatment decisions thanks to the ability to cross-reference similar patients within clinical, treatment, and outcome datasets.'
                  },
                  {
                    icon: 'database',
                    title: 'Access rich clinical data with a single click',
                    description:
                      'EveryThink\u2019s low-code platform synthesizes and analyzes data from multiple electronic medical records, including progress notes, path reports, and radiology scans/reports, among other enormous and disparate sources. This allows for easy access at any point.'
                  }
                ]);
            }
            return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
          })();
          return (
            (t.ɵfac = function(n) {
              return new (n || t)(r.Lb(a.c));
            }),
            (t.ɵcmp = r.Fb({
              type: t,
              selectors: [['dc-features-icons-col']],
              decls: 26,
              vars: 10,
              consts: [
                ['id', 'features', 1, 'section'],
                [1, 'container'],
                [1, 'section-heading', 'mb-5', 'text-center'],
                [1, 'text-primary', 'bold', 'small', 'text-uppercase'],
                [1, 'lead', 'text-secondary'],
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
                [1, 'bold', 'mt-3']
              ],
              template: function(n, t) {
                1 & n &&
                  (r.Qb(0, 'section', 0),
                  r.Fc(1, '\n  '),
                  r.Qb(2, 'div', 1),
                  r.Fc(3, '\n    '),
                  r.Qb(4, 'div', 2),
                  r.Fc(5, '\n      '),
                  r.Qb(6, 'h5', 3),
                  r.Fc(7),
                  r.gc(8, 'translate'),
                  r.Pb(),
                  r.Fc(9, '\n      '),
                  r.Qb(10, 'h2'),
                  r.Fc(11),
                  r.gc(12, 'translate'),
                  r.Pb(),
                  r.Fc(13, '\n      '),
                  r.Qb(14, 'p', 4),
                  r.Fc(15),
                  r.gc(16, 'translate'),
                  r.Pb(),
                  r.Fc(17, '\n    '),
                  r.Pb(),
                  r.Fc(18, '\n\n    '),
                  r.Qb(19, 'div', 5),
                  r.Fc(20, '\n      '),
                  r.Dc(21, b, 10, 4, 'div', 6),
                  r.Fc(22, '\n    '),
                  r.Pb(),
                  r.Fc(23, '\n  '),
                  r.Pb(),
                  r.Fc(24, '\n'),
                  r.Pb(),
                  r.Fc(25, '\n')),
                  2 & n &&
                    (r.xb(7),
                    r.Hc(
                      '\n        ',
                      r.hc(8, 4, 'USUAL.FEATURES_ICONS_COL.UP_TO_THE_TASK'),
                      '\n      '
                    ),
                    r.xb(4),
                    r.Gc(r.hc(12, 6, 'USUAL.FEATURES_ICONS_COL.WHAT_YOU_GET')),
                    r.xb(4),
                    r.Hc(
                      '\n        ',
                      r.hc(
                        16,
                        8,
                        'USUAL.FEATURES_ICONS_COL.GEOLOCATED_INTELLIGENT_ASSISTANTS'
                      ),
                      '\n      '
                    ),
                    r.xb(6),
                    r.kc('ngForOf', t.elements));
              },
              directives: [s.j, o.a],
              pipes: [a.b],
              styles: ['']
            })),
            t
          );
        })();
      },
      'KO+a': function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return b;
        });
        var r = i('fXoL'),
          a = i('ofXK'),
          s = function(n) {
            return { small: n };
          },
          o = ['*'],
          b = (function() {
            var t = (function() {
              function t() {
                n(this, t), (this.text = 'contrast'), (this.small = !0);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })();
            return (
              (t.ɵfac = function(n) {
                return new (n || t)();
              }),
              (t.ɵcmp = r.Fb({
                type: t,
                selectors: [['dc-badge']],
                inputs: { bg: 'bg', text: 'text', small: 'small' },
                ngContentSelectors: o,
                decls: 5,
                vars: 7,
                consts: [[3, 'ngClass']],
                template: function(n, t) {
                  1 & n &&
                    (r.jc(),
                    r.Qb(0, 'span', 0),
                    r.Fc(1, '\n  '),
                    r.ic(2),
                    r.Fc(3, '\n'),
                    r.Pb(),
                    r.Fc(4, '\n')),
                    2 & n &&
                      (r.Bb(
                        'd-inline-block rounded-pill shadow-box bg-',
                        t.bg,
                        ' text-',
                        t.text,
                        ' bold py-2 px-4 mb-3'
                      ),
                      r.kc('ngClass', r.oc(5, s, t.small)));
                },
                directives: [a.i],
                styles: ['']
              })),
              t
            );
          })();
      },
      MTqK: function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return o;
        });
        var r = i('fXoL'),
          a = i('sYmb'),
          s = i('AL06'),
          o = (function() {
            var t = (function() {
              function t(e) {
                n(this, t), (this.translate = e);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })();
            return (
              (t.ɵfac = function(n) {
                return new (n || t)(r.Lb(a.c));
              }),
              (t.ɵcmp = r.Fb({
                type: t,
                selectors: [['dc-developer-designer']],
                decls: 45,
                vars: 16,
                consts: [
                  [1, 'section', 'bg-light'],
                  [1, 'container', 'bring-to-front', 'py-0'],
                  [1, 'shadow', 'bg-contrast', 'p-5', 'rounded'],
                  [
                    1,
                    'row',
                    'gap-y',
                    'align-items-center',
                    'text-center',
                    'text-lg-left'
                  ],
                  [1, 'col-12', 'col-md-6', 'py-4', 'px-5', 'b-md-r'],
                  [3, 'name', 'iconClass'],
                  [
                    'href',
                    'https://everythink.ai/app/#/sessions/signup',
                    1,
                    'mt-4',
                    'text-primary',
                    'd-flex',
                    'align-items-center'
                  ],
                  [1, 'mr-3'],
                  [1, 'mt-4'],
                  [1, 'col-12', 'col-md-6', 'py-4', 'px-5'],
                  [
                    'href',
                    'https://everythink.ai/app/#/sessions/signup',
                    1,
                    'mt-4',
                    'text-info',
                    'd-flex',
                    'align-items-center'
                  ]
                ],
                template: function(n, t) {
                  1 & n &&
                    (r.Fc(0, '\n'),
                    r.Qb(1, 'section', 0),
                    r.Fc(2, '\n  '),
                    r.Qb(3, 'div', 1),
                    r.Fc(4, '\n    '),
                    r.Qb(5, 'div', 2),
                    r.Fc(6, '\n      '),
                    r.Qb(7, 'div', 3),
                    r.Fc(8, '\n        '),
                    r.Qb(9, 'div', 4),
                    r.Fc(10, '\n          '),
                    r.Mb(11, 'dc-feather', 5),
                    r.Fc(12, '\n          '),
                    r.Qb(13, 'a', 6),
                    r.Fc(14, '\n            '),
                    r.Qb(15, 'h4', 7),
                    r.Fc(16),
                    r.gc(17, 'translate'),
                    r.Pb(),
                    r.Fc(18, '\n          '),
                    r.Pb(),
                    r.Fc(19, '\n          '),
                    r.Qb(20, 'p', 8),
                    r.Fc(21),
                    r.gc(22, 'translate'),
                    r.Pb(),
                    r.Fc(23, '\n        '),
                    r.Pb(),
                    r.Fc(24, '\n\n        '),
                    r.Qb(25, 'div', 9),
                    r.Fc(26, '\n          '),
                    r.Mb(27, 'dc-feather', 5),
                    r.Fc(28, '\n          '),
                    r.Qb(29, 'a', 10),
                    r.Fc(30, '\n            '),
                    r.Qb(31, 'h4', 7),
                    r.Fc(32),
                    r.gc(33, 'translate'),
                    r.Pb(),
                    r.Fc(34, '\n          '),
                    r.Pb(),
                    r.Fc(35, '\n          '),
                    r.Qb(36, 'p', 8),
                    r.Fc(37),
                    r.gc(38, 'translate'),
                    r.Pb(),
                    r.Fc(39, '\n        '),
                    r.Pb(),
                    r.Fc(40, '\n      '),
                    r.Pb(),
                    r.Fc(41, '\n    '),
                    r.Pb(),
                    r.Fc(42, '\n  '),
                    r.Pb(),
                    r.Fc(43, '\n'),
                    r.Pb(),
                    r.Fc(44, '\n')),
                    2 & n &&
                      (r.xb(11),
                      r.kc('name', 'star')('iconClass', 'stroke-primary'),
                      r.xb(5),
                      r.Hc(
                        '\n              ',
                        r.hc(
                          17,
                          8,
                          'USUAL.DEVELOPER_DESIGNER.JOIN_AS_DESIGNER'
                        ),
                        '\n            '
                      ),
                      r.xb(5),
                      r.Hc(
                        '\n            ',
                        r.hc(22, 10, 'USUAL.DEVELOPER_DESIGNER.LOREM_IPSUM'),
                        '\n          '
                      ),
                      r.xb(6),
                      r.kc('name', 'code')('iconClass', 'stroke-info'),
                      r.xb(5),
                      r.Hc(
                        '\n              ',
                        r.hc(
                          33,
                          12,
                          'USUAL.DEVELOPER_DESIGNER.JOIN_AS_DEVELOPER'
                        ),
                        '\n            '
                      ),
                      r.xb(5),
                      r.Hc(
                        '\n            ',
                        r.hc(38, 14, 'USUAL.DEVELOPER_DESIGNER.LOREM_IPSUM'),
                        '\n          '
                      ));
                },
                directives: [s.a],
                pipes: [a.b],
                styles: ['']
              })),
              t
            );
          })();
      },
      N7aX: function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return s;
        });
        var r = i('fLW6'),
          a = i('fXoL'),
          s = (function() {
            var t = (function() {
              function t() {
                n(this, t),
                  (this._noise = new r.Noise(Math.floor(64e3 * Math.random())));
              }
              return (
                e(t, [
                  {
                    key: 'noise',
                    get: function() {
                      return this._noise;
                    }
                  }
                ]),
                t
              );
            })();
            return (
              (t.ɵfac = function(n) {
                return new (n || t)();
              }),
              (t.ɵprov = a.Hb({
                token: t,
                factory: t.ɵfac,
                providedIn: 'root'
              })),
              t
            );
          })();
      },
      VKEt: function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return s;
        });
        var r = i('fXoL'),
          a = i('sYmb'),
          s = (function() {
            var t = (function() {
              function t(e) {
                n(this, t), (this.translate = e);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })();
            return (
              (t.ɵfac = function(n) {
                return new (n || t)(r.Lb(a.c));
              }),
              (t.ɵcmp = r.Fb({
                type: t,
                selectors: [['dc-cta1']],
                inputs: { edge: 'edge', background: 'background' },
                decls: 24,
                vars: 13,
                consts: [
                  [1, 'container', 'pt-5'],
                  [
                    1,
                    'd-flex',
                    'align-items-center',
                    'flex-column',
                    'flex-md-row'
                  ],
                  [1, 'text-center', 'text-md-left'],
                  [1, 'light', 'mb-0', 'text-primary', 'lead'],
                  [1, 'mt-1'],
                  [
                    'href',
                    'https://everythink.ai/app/#/sessions/signup',
                    1,
                    'btn',
                    'btn-primary',
                    'btn-rounded',
                    'mt-3',
                    'mt-md-0',
                    'ml-md-auto'
                  ]
                ],
                template: function(n, t) {
                  1 & n &&
                    (r.Qb(0, 'section'),
                    r.Fc(1, '\n  '),
                    r.Qb(2, 'div', 0),
                    r.Fc(3, '\n    '),
                    r.Qb(4, 'div', 1),
                    r.Fc(5, '\n      '),
                    r.Qb(6, 'div', 2),
                    r.Fc(7, '\n        '),
                    r.Qb(8, 'p', 3),
                    r.Fc(9),
                    r.gc(10, 'translate'),
                    r.Pb(),
                    r.Fc(11, '\n        '),
                    r.Qb(12, 'h6', 4),
                    r.Fc(13),
                    r.gc(14, 'translate'),
                    r.Pb(),
                    r.Fc(15, '\n      '),
                    r.Pb(),
                    r.Fc(16, '\n      '),
                    r.Qb(17, 'a', 5),
                    r.Fc(18),
                    r.gc(19, 'translate'),
                    r.Pb(),
                    r.Fc(20, '\n    '),
                    r.Pb(),
                    r.Fc(21, '\n  '),
                    r.Pb(),
                    r.Fc(22, '\n'),
                    r.Pb(),
                    r.Fc(23, '\n')),
                    2 & n &&
                      (r.Bb(
                        'section ',
                        t.background ? 'bg-' + t.background : '',
                        ' ',
                        t.edge ? 'edge ' + t.edge : '',
                        ''
                      ),
                      r.xb(9),
                      r.Hc(
                        '\n          ',
                        r.hc(10, 7, 'CATE.CATE1.READY_TO_GET_STARTED'),
                        '\n        '
                      ),
                      r.xb(4),
                      r.Hc(
                        '\n          ',
                        r.hc(14, 9, 'CATE.CATE1.BECOME_ONE_OF_THE_MILLIONS'),
                        '\n        '
                      ),
                      r.xb(5),
                      r.Hc(
                        '\n        ',
                        r.hc(19, 11, 'CATE.CATE1.CREATE_EVERTTHINKACCOUNT'),
                        ''
                      ));
                },
                pipes: [a.b],
                styles: ['']
              })),
              t
            );
          })();
      },
      WGuQ: function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return b;
        });
        var r = i('fXoL'),
          a = i('ofXK');
        function s(n, t) {
          if ((1 & n && (r.Qb(0, 'p', 8), r.Fc(1), r.Pb()), 2 & n)) {
            var e = r.fc();
            r.xb(1), r.Gc(e.subtitle);
          }
        }
        var o = function(n) {
            return { 'mb-4': n };
          },
          b = (function() {
            var t = (function() {
              function t() {
                n(this, t);
              }
              return (
                e(t, [
                  { key: 'ngOnInit', value: function() {} },
                  {
                    key: 'getShapeFill',
                    value: function() {
                      return this.fill || 'shape-fill-contrast';
                    }
                  }
                ]),
                t
              );
            })();
            return (
              (t.ɵfac = function(n) {
                return new (n || t)();
              }),
              (t.ɵcmp = r.Fb({
                type: t,
                selectors: [['dc-page-header-wave']],
                inputs: {
                  rows: 'rows',
                  title: 'title',
                  subtitle: 'subtitle',
                  fill: 'fill',
                  containerClass: 'containerClass'
                },
                decls: 26,
                vars: 10,
                consts: [
                  [
                    1,
                    'page',
                    'header',
                    'text-contrast',
                    'blanket',
                    'alpha-8',
                    'image-background',
                    'cover',
                    'gradient',
                    'gradient-purple-blue',
                    2,
                    'background-image',
                    "url('assets/img/bg/waves.jpg')"
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
                  [1, 'container', 3, 'ngClass'],
                  [1, 'row'],
                  [1, 'regular', 'display-4', 'text-contrast', 3, 'ngClass'],
                  ['class', 'lead text-contrast', 4, 'ngIf'],
                  [1, 'lead', 'text-contrast']
                ],
                template: function(n, t) {
                  1 & n &&
                    (r.Qb(0, 'header', 0),
                    r.Fc(1, '\n  '),
                    r.Qb(2, 'div', 1),
                    r.Fc(3, '\n    '),
                    r.Fc(4, '\n    '),
                    r.ec(),
                    r.Qb(5, 'svg', 2),
                    r.Fc(6, '\n      '),
                    r.Mb(7, 'path', 3),
                    r.Fc(8, '\n    '),
                    r.Pb(),
                    r.Fc(9, '\n  '),
                    r.Pb(),
                    r.Fc(10, '\n\n  '),
                    r.dc(),
                    r.Qb(11, 'div', 4),
                    r.Fc(12, '\n    '),
                    r.Qb(13, 'div', 5),
                    r.Fc(14, '\n      '),
                    r.Qb(15, 'div'),
                    r.Fc(16, '\n        '),
                    r.Qb(17, 'h1', 6),
                    r.Fc(18),
                    r.Pb(),
                    r.Fc(19, '\n        '),
                    r.Dc(20, s, 2, 1, 'p', 7),
                    r.Fc(21, '\n      '),
                    r.Pb(),
                    r.Fc(22, '\n    '),
                    r.Pb(),
                    r.Fc(23, '\n  '),
                    r.Pb(),
                    r.Fc(24, '\n'),
                    r.Pb(),
                    r.Fc(25, '\n')),
                    2 & n &&
                      (r.xb(7),
                      r.kc('ngClass', t.getShapeFill()),
                      r.xb(4),
                      r.kc('ngClass', t.containerClass),
                      r.xb(4),
                      r.Ab('col-md-', t.rows || 6, ''),
                      r.xb(2),
                      r.kc('ngClass', r.oc(8, o, t.subtitle)),
                      r.xb(1),
                      r.Hc('\n          ', t.title, '\n        '),
                      r.xb(2),
                      r.kc('ngIf', t.subtitle));
                },
                directives: [a.i, a.k],
                styles: ['']
              })),
              t
            );
          })();
      },
      XMwz: function(t, e, c) {
        'use strict';
        c.d(e, 'a', function() {
          return o;
        });
        var i = c('3Pt+'),
          r = c('ofXK'),
          a = c('sYmb'),
          s = c('fXoL'),
          o = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = s.Jb({ type: t })),
              (t.ɵinj = s.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[r.b, i.a, a.a.forChild()]]
              })),
              t
            );
          })();
      },
      YJ7q: function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return l;
        });
        var r = i('fXoL'),
          a = i('ofXK');
        function s(n, t) {
          if ((1 & n && (r.Qb(0, 'h4', 4), r.Fc(1), r.Pb()), 2 & n)) {
            var e = r.fc();
            r.xb(1), r.Hc('\n      ', e.title, '\n    ');
          }
        }
        function o(n, t) {
          if (
            (1 & n &&
              (r.Qb(0, 'div', 5),
              r.Fc(1, '\n        '),
              r.Mb(2, 'img', 6),
              r.Fc(3, '\n      '),
              r.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            r.xb(2), r.kc('src', 'assets/img/logos/' + e + '.png', r.yc);
          }
        }
        var b = function() {
            return [1, 2, 3, 4];
          },
          l = (function() {
            var t = (function() {
              function t() {
                n(this, t);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })();
            return (
              (t.ɵfac = function(n) {
                return new (n || t)();
              }),
              (t.ɵcmp = r.Fb({
                type: t,
                selectors: [['dc-trust-us']],
                inputs: {
                  title: 'title',
                  containerClass: 'containerClass',
                  edge: 'edge',
                  background: 'background'
                },
                decls: 13,
                vars: 8,
                consts: [
                  [1, 'container', 3, 'ngClass'],
                  ['class', 'bold text-center mb-5 text-secondary', 4, 'ngIf'],
                  [1, 'row', 'gap-y'],
                  [
                    'class',
                    'col-md-3 col-xs-4 col-6 px-md-5',
                    4,
                    'ngFor',
                    'ngForOf'
                  ],
                  [1, 'bold', 'text-center', 'mb-5', 'text-secondary'],
                  [1, 'col-md-3', 'col-xs-4', 'col-6', 'px-md-5'],
                  [
                    'alt',
                    '',
                    1,
                    'img-responsive',
                    'mx-auto',
                    'op-7',
                    2,
                    'max-height',
                    '60px',
                    3,
                    'src'
                  ]
                ],
                template: function(n, t) {
                  1 & n &&
                    (r.Qb(0, 'section'),
                    r.Fc(1, '\n  '),
                    r.Qb(2, 'div', 0),
                    r.Fc(3, '\n    '),
                    r.Dc(4, s, 2, 1, 'h4', 1),
                    r.Fc(5, '\n\n    '),
                    r.Qb(6, 'div', 2),
                    r.Fc(7, '\n      '),
                    r.Dc(8, o, 4, 1, 'div', 3),
                    r.Fc(9, '\n    '),
                    r.Pb(),
                    r.Fc(10, '\n  '),
                    r.Pb(),
                    r.Fc(11, '\n'),
                    r.Pb(),
                    r.Fc(12, '\n')),
                    2 & n &&
                      (r.Bb(
                        'section bg-',
                        t.background || 'light',
                        ' ',
                        t.edge ? 'edge ' + t.edge : '',
                        ''
                      ),
                      r.xb(2),
                      r.kc('ngClass', t.containerClass),
                      r.xb(2),
                      r.kc('ngIf', t.title),
                      r.xb(4),
                      r.kc('ngForOf', r.nc(7, b)));
                },
                directives: [a.i, a.k, a.j],
                styles: ['']
              })),
              t
            );
          })();
      },
      aaX3: function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return d;
        });
        var r = i('fXoL'),
          a = i('ofXK'),
          s = i('nhfI');
        function o(n, t) {
          if ((1 & n && (r.Qb(0, 'h4', 4), r.Fc(1), r.Pb()), 2 & n)) {
            var e = r.fc();
            r.xb(1), r.Hc('\n      ', e.title, '\n    ');
          }
        }
        function b(n, t) {
          if (
            (1 & n &&
              (r.Qb(0, 'div', 5),
              r.Fc(1, '\n        '),
              r.Mb(2, 'img', 6),
              r.Fc(3, '\n      '),
              r.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            r.xb(2), r.mc('src', 'assets/img/logos/', e, '.png', r.yc);
          }
        }
        var l = function() {
            return [1, 2, 3, 4, 5, 6];
          },
          d = (function() {
            var t = (function() {
              function t() {
                n(this, t),
                  (this.bordered = !0),
                  (this.config = {
                    slidesPerView: 5,
                    spaceBetween: 30,
                    autoplay: { delay: 2500, disableOnInteraction: !1 },
                    loop: !0,
                    navigation: !1,
                    pagination: !1
                  });
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })();
            return (
              (t.ɵfac = function(n) {
                return new (n || t)();
              }),
              (t.ɵcmp = r.Fb({
                type: t,
                selectors: [['dc-slider-icons']],
                inputs: {
                  title: 'title',
                  bordered: 'bordered',
                  edge: 'edge',
                  background: 'background'
                },
                decls: 13,
                vars: 10,
                consts: [
                  [1, 'container', 'py-5'],
                  ['class', 'bold text-center mb-5 text-secondary', 4, 'ngIf'],
                  [1, 'swiper-container', 'pb-5', 3, 'config'],
                  ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
                  [1, 'bold', 'text-center', 'mb-5', 'text-secondary'],
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
                template: function(n, t) {
                  1 & n &&
                    (r.Qb(0, 'section'),
                    r.Fc(1, '\n  '),
                    r.Qb(2, 'div', 0),
                    r.Fc(3, '\n    '),
                    r.Dc(4, o, 2, 1, 'h4', 1),
                    r.Fc(5, '\n\n    '),
                    r.Qb(6, 'swiper', 2),
                    r.Fc(7, '\n      '),
                    r.Dc(8, b, 4, 1, 'div', 3),
                    r.Fc(9, '\n    '),
                    r.Pb(),
                    r.Fc(10, '\n  '),
                    r.Pb(),
                    r.Fc(11, '\n'),
                    r.Pb(),
                    r.Fc(12, '\n')),
                    2 & n &&
                      (r.Bb(
                        'section partners ',
                        t.background ? 'bg-' + t.background : '',
                        ' ',
                        t.edge ? 'edge ' + t.edge : '',
                        ''
                      ),
                      r.xb(2),
                      r.Db('border-bottom', t.bordered),
                      r.xb(2),
                      r.kc('ngIf', t.title),
                      r.xb(2),
                      r.kc('config', t.config),
                      r.xb(2),
                      r.kc('ngForOf', r.nc(9, l)));
                },
                directives: [a.k, s.a, a.j],
                styles: ['']
              })),
              t
            );
          })();
      },
      cqDB: function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return b;
        });
        var r = i('fXoL'),
          a = i('sYmb'),
          s = i('3Pt+'),
          o = i('ofXK'),
          b = (function() {
            var t = (function() {
              function t(e) {
                n(this, t), (this.translate = e), (this.label = 'Register');
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })();
            return (
              (t.ɵfac = function(n) {
                return new (n || t)(r.Lb(a.c));
              }),
              (t.ɵcmp = r.Fb({
                type: t,
                selectors: [['dc-form-register-simple-inline']],
                inputs: { label: 'label', inputClass: 'inputClass' },
                decls: 24,
                vars: 8,
                consts: [
                  [
                    'data-response-message-animation',
                    'slide-in-left',
                    'novalidate',
                    '',
                    1,
                    'form'
                  ],
                  [1, 'input-group-register', 3, 'ngClass'],
                  [
                    'type',
                    'email',
                    'name',
                    'Subscribe[email]',
                    'placeholder',
                    'Enter your email',
                    'required',
                    '',
                    1,
                    'form-control',
                    'shadow-lg',
                    'bg-contrast',
                    'form-control-rounded'
                  ],
                  [
                    'onclick',
                    "location.href = 'https://everythink.ai/app/#/sessions/signup';",
                    1,
                    'btn',
                    'btn-rounded',
                    'btn-primary',
                    'btn-lg',
                    'text-capitalize'
                  ],
                  [1, 'response-message'],
                  [1, 'fas', 'fa-envelope', 'font-lg'],
                  [1, 'font-md', 'm-0'],
                  [1, 'response']
                ],
                template: function(n, t) {
                  1 & n &&
                    (r.Qb(0, 'form', 0),
                    r.Fc(1, '\n  '),
                    r.Qb(2, 'div', 1),
                    r.Fc(3, '\n    '),
                    r.Mb(4, 'input', 2),
                    r.Fc(5, '\n    '),
                    r.Qb(6, 'button', 3),
                    r.Fc(7),
                    r.Pb(),
                    r.Fc(8, '\n  '),
                    r.Pb(),
                    r.Fc(9, '\n'),
                    r.Pb(),
                    r.Fc(10, '\n\n'),
                    r.Qb(11, 'div', 4),
                    r.Fc(12, '\n  '),
                    r.Mb(13, 'i', 5),
                    r.Fc(14, '\n  '),
                    r.Qb(15, 'p', 6),
                    r.Fc(16),
                    r.gc(17, 'translate'),
                    r.Pb(),
                    r.Fc(18, '\n  '),
                    r.Qb(19, 'p', 7),
                    r.Fc(20),
                    r.gc(21, 'translate'),
                    r.Pb(),
                    r.Fc(22, '\n'),
                    r.Pb(),
                    r.Fc(23, '\n')),
                    2 & n &&
                      (r.xb(2),
                      r.kc('ngClass', t.inputClass),
                      r.xb(5),
                      r.Hc('\n      ', t.label, '\n    '),
                      r.xb(9),
                      r.Hc(
                        '\n    ',
                        r.hc(
                          17,
                          4,
                          'ACTIONS.FORM_REGISTER_SIMPLE_INLINE.CHECK_YOUR_EMAIL'
                        ),
                        '\n  '
                      ),
                      r.xb(4),
                      r.Hc(
                        '\n    ',
                        r.hc(
                          21,
                          6,
                          'ACTIONS.FORM_REGISTER_SIMPLE_INLINE.WE_SENT_YOU_AN_EMAIL'
                        ),
                        '\n  '
                      ));
                },
                directives: [s.h, s.d, s.e, o.i],
                pipes: [a.b],
                styles: ['']
              })),
              t
            );
          })();
      },
      'f+4U': function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return p;
        });
        var r = i('wHSu'),
          a = i('fXoL'),
          s = i('sYmb'),
          o = i('nhfI'),
          b = i('ofXK'),
          l = i('6NWb');
        function d(n, t) {
          if (
            (1 & n &&
              (a.Qb(0, 'div', 9),
              a.Fc(1, '\n            '),
              a.Qb(2, 'div', 10),
              a.Fc(3, '\n              '),
              a.Qb(4, 'div', 11),
              a.Fc(5, '\n                '),
              a.Qb(6, 'div', 12),
              a.Fc(7, '\n                  '),
              a.Mb(8, 'img', 13),
              a.Fc(9, '\n                '),
              a.Pb(),
              a.Fc(10, '\n\n                '),
              a.Mb(11, 'hr', 14),
              a.Fc(12, '\n\n                '),
              a.Qb(13, 'p', 15),
              a.Fc(14),
              a.Pb(),
              a.Fc(15, '\n                '),
              a.Qb(16, 'p', 16),
              a.Fc(17),
              a.Pb(),
              a.Fc(18, '\n              '),
              a.Pb(),
              a.Fc(19, '\n\n              '),
              a.Qb(20, 'div', 17),
              a.Fc(21, '\n                '),
              a.Qb(22, 'div', 18),
              a.Fc(23, '\n                  '),
              a.Qb(24, 'p', 19),
              a.Fc(25, '1.5k'),
              a.Pb(),
              a.Fc(26, '\n                  '),
              a.Qb(27, 'p', 20),
              a.Fc(28),
              a.gc(29, 'translate'),
              a.Pb(),
              a.Fc(30, '\n                '),
              a.Pb(),
              a.Fc(31, '\n                '),
              a.Qb(32, 'a', 21),
              a.Fc(33, '\n                  '),
              a.Mb(34, 'fa-icon', 22),
              a.Fc(35, '\n                '),
              a.Pb(),
              a.Fc(36, '\n              '),
              a.Pb(),
              a.Fc(37, '\n            '),
              a.Pb(),
              a.Fc(38, '\n          '),
              a.Pb()),
            2 & n)
          ) {
            var e = t.$implicit,
              c = t.index,
              i = a.fc();
            a.xb(8),
              a.kc('src', 'assets/img/v8/icons/' + (c + 1) + '.svg', a.yc),
              a.xb(6),
              a.Ic(
                '\n                  ',
                e.title[0],
                ' ',
                e.title[1],
                '\n                '
              ),
              a.xb(3),
              a.Hc('\n                  ', e.description, '\n                '),
              a.xb(11),
              a.Hc(
                '\n                    ',
                a.hc(29, 6, 'SLIDERS.SLIDER_CARD_PROJECTS.NEW_SUBSCRIBERS'),
                '\n                  '
              ),
              a.xb(6),
              a.kc('icon', i.infoCircle);
          }
        }
        var p = (function() {
          var t = (function() {
            function t(e) {
              n(this, t),
                (this.translate = e),
                (this.infoCircle = r.i),
                (this.longArrowAltRight = r.l),
                (this.liftUp = !0),
                (this.features = [
                  {
                    title: ['NGO', ''],
                    description:
                      'Together we transform and build the reality we dream of!',
                    image: ''
                  },
                  {
                    title: ['Human', 'Resources'],
                    description:
                      'Your HR consultant in your hands with global reach!',
                    image: ''
                  },
                  {
                    title: ['Sales', ''],
                    description:
                      'Better marketing, better sales, better results!',
                    image: ''
                  },
                  {
                    title: ['Customer', 'Service'],
                    description:
                      'Don\u2019t think it; don\u2019t even answer, because we have it!',
                    image: ''
                  },
                  {
                    title: ['Real', 'Estate'],
                    description: 'Your agent in your hands with global reach!',
                    image: ''
                  },
                  {
                    title: ['Healthcare', ''],
                    description:
                      'Driving the wave of innovation, don\u2019t be left behind!',
                    image: ''
                  }
                ]),
                (this.config = {
                  slidesPerView: 4,
                  autoplay: { delay: 3500, disableOnInteraction: !1 },
                  loop: !0,
                  breakpoints: {
                    1024: { slidesPerView: 4, spaceBetween: 40 },
                    992: { slidesPerView: 4, spaceBetween: 15 },
                    768: { slidesPerView: 4.5, spaceBetween: 15 },
                    576: { slidesPerView: 1.5, spaceBetween: 10 }
                  },
                  navigation: {
                    nextEl: '.features-nav-next',
                    prevEl: '.features-nav-prev'
                  },
                  pagination: !1
                });
            }
            return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
          })();
          return (
            (t.ɵfac = function(n) {
              return new (n || t)(a.Lb(s.c));
            }),
            (t.ɵcmp = a.Fb({
              type: t,
              selectors: [['dc-slider-card-projects']],
              inputs: { liftUp: 'liftUp' },
              decls: 27,
              vars: 10,
              consts: [
                [1, 'section', 'features-carousel', 'b-b'],
                [1, 'container', 'pt-0'],
                [1, 'cards-wrapper'],
                [1, 'swiper-container', 3, 'swiper'],
                [1, 'swiper-wrapper', 'px-1'],
                ['class', 'swiper-slide px-2 px-sm-1', 4, 'ngFor', 'ngForOf'],
                [1, 'text-primary', 'features-nav', 'features-nav-next'],
                [1, 'text-uppercase', 'small'],
                [3, 'icon'],
                [1, 'swiper-slide', 'px-2', 'px-sm-1'],
                [1, 'card', 'border-0', 'shadow', 'h-100'],
                [1, 'card-body'],
                [1, 'logo', 'mx-auto', 'my-3'],
                ['alt', '', 1, 'img-responsive', 3, 'src'],
                [1, 'w-50', 'mx-auto', 'my-3'],
                [1, 'bold', 'mt-4'],
                [1, 'regular', 'small', 'text-secondary'],
                [
                  1,
                  'card-footer',
                  'd-flex',
                  'align-items-center',
                  'justify-content-around'
                ],
                [1, 'roi'],
                [1, 'text-darker', 'lead', 'bold', 'mb-0'],
                [1, 'text-secondary', 'small', 'mt-0'],
                ['href', 'https://everythink.ai/app/#/sessions/signup'],
                ['size', '2x', 3, 'icon']
              ],
              template: function(n, t) {
                1 & n &&
                  (a.Qb(0, 'section', 0),
                  a.Fc(1, '\n  '),
                  a.Qb(2, 'div', 1),
                  a.Fc(3, '\n    '),
                  a.Qb(4, 'div', 2),
                  a.Fc(5, '\n      '),
                  a.Qb(6, 'div', 3),
                  a.Fc(7, '\n        '),
                  a.Qb(8, 'div', 4),
                  a.Fc(9, '\n          '),
                  a.Dc(10, d, 39, 8, 'div', 5),
                  a.Fc(11, '\n        '),
                  a.Pb(),
                  a.Fc(12, '\n\n        '),
                  a.Fc(13, '\n        '),
                  a.Qb(14, 'div', 6),
                  a.Fc(15, '\n          '),
                  a.Qb(16, 'span', 7),
                  a.Fc(17),
                  a.gc(18, 'translate'),
                  a.Pb(),
                  a.Fc(19, '\n          '),
                  a.Mb(20, 'fa-icon', 8),
                  a.Fc(21, '\n        '),
                  a.Pb(),
                  a.Fc(22, '\n      '),
                  a.Pb(),
                  a.Fc(23, '\n    '),
                  a.Pb(),
                  a.Fc(24, '\n  '),
                  a.Pb(),
                  a.Fc(25, '\n'),
                  a.Pb(),
                  a.Fc(26, '\n')),
                  2 & n &&
                    (a.xb(2),
                    a.Db('lift-up', t.liftUp),
                    a.xb(4),
                    a.kc('swiper', t.config),
                    a.xb(4),
                    a.kc('ngForOf', t.features),
                    a.xb(7),
                    a.Gc(a.hc(18, 8, 'SLIDERS.SLIDER_CARD_PROJECTS.NEXT')),
                    a.xb(3),
                    a.zb('features-nav-icon'),
                    a.kc('icon', t.longArrowAltRight));
              },
              directives: [o.b, b.j, l.a],
              pipes: [s.b],
              styles: [
                '@media (min-width:576px){.container[_ngcontent-%COMP%] > .cards-wrapper[_ngcontent-%COMP%]{width:510px}}@media (min-width:768px){.container[_ngcontent-%COMP%] > .cards-wrapper[_ngcontent-%COMP%]{width:690px}}@media (min-width:992px){.container[_ngcontent-%COMP%] > .cards-wrapper[_ngcontent-%COMP%]{width:930px}}@media (min-width:1200px){.container[_ngcontent-%COMP%] > .cards-wrapper[_ngcontent-%COMP%]{width:1110px}}@media (min-width:992px){.container.lift-up[_ngcontent-%COMP%]{padding-bottom:16rem}.container.lift-up[_ngcontent-%COMP%] > .cards-wrapper[_ngcontent-%COMP%]{position:absolute;transform:translateY(-50%)}}.logo[_ngcontent-%COMP%]{min-height:48px}'
              ]
            })),
            t
          );
        })();
      },
      fLW6: function(n, t, e) {
        !(function(n) {
          function t(n) {
            function t(n, t, e) {
              (this.x = n), (this.y = t), (this.z = e);
            }
            (t.prototype.dot2 = function(n, t) {
              return this.x * n + this.y * t;
            }),
              (t.prototype.dot3 = function(n, t, e) {
                return this.x * n + this.y * t + this.z * e;
              }),
              (this.grad3 = [
                new t(1, 1, 0),
                new t(-1, 1, 0),
                new t(1, -1, 0),
                new t(-1, -1, 0),
                new t(1, 0, 1),
                new t(-1, 0, 1),
                new t(1, 0, -1),
                new t(-1, 0, -1),
                new t(0, 1, 1),
                new t(0, -1, 1),
                new t(0, 1, -1),
                new t(0, -1, -1)
              ]),
              (this.p = [
                151,
                160,
                137,
                91,
                90,
                15,
                131,
                13,
                201,
                95,
                96,
                53,
                194,
                233,
                7,
                225,
                140,
                36,
                103,
                30,
                69,
                142,
                8,
                99,
                37,
                240,
                21,
                10,
                23,
                190,
                6,
                148,
                247,
                120,
                234,
                75,
                0,
                26,
                197,
                62,
                94,
                252,
                219,
                203,
                117,
                35,
                11,
                32,
                57,
                177,
                33,
                88,
                237,
                149,
                56,
                87,
                174,
                20,
                125,
                136,
                171,
                168,
                68,
                175,
                74,
                165,
                71,
                134,
                139,
                48,
                27,
                166,
                77,
                146,
                158,
                231,
                83,
                111,
                229,
                122,
                60,
                211,
                133,
                230,
                220,
                105,
                92,
                41,
                55,
                46,
                245,
                40,
                244,
                102,
                143,
                54,
                65,
                25,
                63,
                161,
                1,
                216,
                80,
                73,
                209,
                76,
                132,
                187,
                208,
                89,
                18,
                169,
                200,
                196,
                135,
                130,
                116,
                188,
                159,
                86,
                164,
                100,
                109,
                198,
                173,
                186,
                3,
                64,
                52,
                217,
                226,
                250,
                124,
                123,
                5,
                202,
                38,
                147,
                118,
                126,
                255,
                82,
                85,
                212,
                207,
                206,
                59,
                227,
                47,
                16,
                58,
                17,
                182,
                189,
                28,
                42,
                223,
                183,
                170,
                213,
                119,
                248,
                152,
                2,
                44,
                154,
                163,
                70,
                221,
                153,
                101,
                155,
                167,
                43,
                172,
                9,
                129,
                22,
                39,
                253,
                19,
                98,
                108,
                110,
                79,
                113,
                224,
                232,
                178,
                185,
                112,
                104,
                218,
                246,
                97,
                228,
                251,
                34,
                242,
                193,
                238,
                210,
                144,
                12,
                191,
                179,
                162,
                241,
                81,
                51,
                145,
                235,
                249,
                14,
                239,
                107,
                49,
                192,
                214,
                31,
                181,
                199,
                106,
                157,
                184,
                84,
                204,
                176,
                115,
                121,
                50,
                45,
                127,
                4,
                150,
                254,
                138,
                236,
                205,
                93,
                222,
                114,
                67,
                29,
                24,
                72,
                243,
                141,
                128,
                195,
                78,
                66,
                215,
                61,
                156,
                180
              ]),
              (this.perm = new Array(512)),
              (this.gradP = new Array(512)),
              this.seed(n || 0);
          }
          t.prototype.seed = function(n) {
            n > 0 && n < 1 && (n *= 65536),
              (n = Math.floor(n)) < 256 && (n |= n << 8);
            for (var t = this.p, e = 0; e < 256; e++) {
              var c,
                i = this.perm,
                r = this.gradP;
              (i[e] = i[e + 256] = c =
                1 & e ? t[e] ^ (255 & n) : t[e] ^ ((n >> 8) & 255)),
                (r[e] = r[e + 256] = this.grad3[c % 12]);
            }
          };
          var e = 0.5 * (Math.sqrt(3) - 1),
            c = (3 - Math.sqrt(3)) / 6;
          function i(n) {
            return n * n * n * (n * (6 * n - 15) + 10);
          }
          function r(n, t, e) {
            return (1 - e) * n + e * t;
          }
          (t.prototype.simplex2 = function(n, t) {
            var i,
              r,
              a = (n + t) * e,
              s = Math.floor(n + a),
              o = Math.floor(t + a),
              b = (s + o) * c,
              l = n - s + b,
              d = t - o + b;
            l > d ? ((i = 1), (r = 0)) : ((i = 0), (r = 1));
            var p = l - i + c,
              u = d - r + c,
              F = l - 1 + 2 * c,
              f = d - 1 + 2 * c,
              g = this.perm,
              h = this.gradP,
              m = h[(s &= 255) + i + g[(o &= 255) + r]],
              P = h[s + 1 + g[o + 1]],
              v = 0.5 - l * l - d * d,
              S = 0.5 - p * p - u * u,
              T = 0.5 - F * F - f * f;
            return (
              70 *
              ((v < 0 ? 0 : (v *= v) * v * h[s + g[o]].dot2(l, d)) +
                (S < 0 ? 0 : (S *= S) * S * m.dot2(p, u)) +
                (T < 0 ? 0 : (T *= T) * T * P.dot2(F, f)))
            );
          }),
            (t.prototype.simplex3 = function(n, t, e) {
              var c,
                i,
                r,
                a,
                s,
                o,
                b = (n + t + e) * (1 / 3),
                l = Math.floor(n + b),
                d = Math.floor(t + b),
                p = Math.floor(e + b),
                u = (l + d + p) * (1 / 6),
                F = n - l + u,
                f = t - d + u,
                g = e - p + u;
              F >= f
                ? f >= g
                  ? ((c = 1), (i = 0), (r = 0), (a = 1), (s = 1), (o = 0))
                  : F >= g
                  ? ((c = 1), (i = 0), (r = 0), (a = 1), (s = 0), (o = 1))
                  : ((c = 0), (i = 0), (r = 1), (a = 1), (s = 0), (o = 1))
                : f < g
                ? ((c = 0), (i = 0), (r = 1), (a = 0), (s = 1), (o = 1))
                : F < g
                ? ((c = 0), (i = 1), (r = 0), (a = 0), (s = 1), (o = 1))
                : ((c = 0), (i = 1), (r = 0), (a = 1), (s = 1), (o = 0));
              var h = F - c + 1 / 6,
                m = f - i + 1 / 6,
                P = g - r + 1 / 6,
                v = F - a + (1 / 6) * 2,
                S = f - s + (1 / 6) * 2,
                T = g - o + (1 / 6) * 2,
                E = F - 1 + 0.5,
                x = f - 1 + 0.5,
                I = g - 1 + 0.5,
                _ = this.perm,
                R = this.gradP,
                O = R[(l &= 255) + c + _[(d &= 255) + i + _[(p &= 255) + r]]],
                y = R[l + a + _[d + s + _[p + o]]],
                A = R[l + 1 + _[d + 1 + _[p + 1]]],
                w = 0.5 - F * F - f * f - g * g,
                Q = 0.5 - h * h - m * m - P * P,
                N = 0.5 - v * v - S * S - T * T,
                C = 0.5 - E * E - x * x - I * I;
              return (
                32 *
                ((w < 0 ? 0 : (w *= w) * w * R[l + _[d + _[p]]].dot3(F, f, g)) +
                  (Q < 0 ? 0 : (Q *= Q) * Q * O.dot3(h, m, P)) +
                  (N < 0 ? 0 : (N *= N) * N * y.dot3(v, S, T)) +
                  (C < 0 ? 0 : (C *= C) * C * A.dot3(E, x, I)))
              );
            }),
            (t.prototype.perlin2 = function(n, t) {
              var e = Math.floor(n),
                c = Math.floor(t);
              (n -= e), (t -= c);
              var a = this.perm,
                s = this.gradP,
                o = s[(e &= 255) + a[(c &= 255)]].dot2(n, t),
                b = s[e + a[c + 1]].dot2(n, t - 1),
                l = s[e + 1 + a[c]].dot2(n - 1, t),
                d = s[e + 1 + a[c + 1]].dot2(n - 1, t - 1),
                p = i(n);
              return r(r(o, l, p), r(b, d, p), i(t));
            }),
            (t.prototype.perlin3 = function(n, t, e) {
              var c = Math.floor(n),
                a = Math.floor(t),
                s = Math.floor(e);
              (n -= c), (t -= a), (e -= s);
              var o = this.perm,
                b = this.gradP,
                l = b[(c &= 255) + o[(a &= 255) + o[(s &= 255)]]].dot3(n, t, e),
                d = b[c + o[a + o[s + 1]]].dot3(n, t, e - 1),
                p = b[c + o[a + 1 + o[s]]].dot3(n, t - 1, e),
                u = b[c + o[a + 1 + o[s + 1]]].dot3(n, t - 1, e - 1),
                F = b[c + 1 + o[a + o[s]]].dot3(n - 1, t, e),
                f = b[c + 1 + o[a + o[s + 1]]].dot3(n - 1, t, e - 1),
                g = b[c + 1 + o[a + 1 + o[s]]].dot3(n - 1, t - 1, e),
                h = b[c + 1 + o[a + 1 + o[s + 1]]].dot3(n - 1, t - 1, e - 1),
                m = i(n),
                P = i(t),
                v = i(e);
              return r(
                r(r(l, F, m), r(d, f, m), v),
                r(r(p, g, m), r(u, h, m), v),
                P
              );
            }),
            (n.Noise = t);
        })(n.exports);
      },
      kpBo: function(t, e, c) {
        'use strict';
        c.d(e, 'a', function() {
          return s;
        });
        var i = c('M0ag'),
          r = c('sYmb'),
          a = c('fXoL'),
          s = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = a.Jb({ type: t })),
              (t.ɵinj = a.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[i.a, r.a.forChild()]]
              })),
              t
            );
          })();
      },
      mrcQ: function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return p;
        });
        var r = i('fXoL'),
          a = i('sYmb'),
          s = i('ofXK'),
          o = i('AL06');
        function b(n, t) {
          if (
            (1 & n &&
              (r.Qb(0, 'li'),
              r.Fc(1, '\n                    '),
              r.Qb(2, 'div', 34),
              r.Fc(3, '\n                      '),
              r.Qb(4, 'div', 35),
              r.Fc(5, '\n                        '),
              r.Mb(6, 'dc-feather', 33),
              r.Fc(7, '\n                      '),
              r.Pb(),
              r.Fc(8, '\n\n                      '),
              r.Qb(9, 'div', 36),
              r.Fc(10),
              r.gc(11, 'translate'),
              r.Pb(),
              r.Fc(12, '\n                    '),
              r.Pb(),
              r.Fc(13, '\n                  '),
              r.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            r.xb(6),
              r.kc('name', e.icon)('size', 16)('iconClass', 'stroke-contrast'),
              r.xb(4),
              r.Hc(
                '\n                        ',
                r.hc(11, 4, e.name),
                '\n                      '
              );
          }
        }
        function l(n, t) {
          if (
            (1 & n &&
              (r.Qb(0, 'div', 23),
              r.Fc(1, '\n        '),
              r.Qb(2, 'div', 24),
              r.Fc(3, '\n          '),
              r.Qb(4, 'div', 11),
              r.Fc(5, '\n            '),
              r.Qb(6, 'div', 12),
              r.Fc(7, '\n              '),
              r.Qb(8, 'div', 25),
              r.Fc(9, '\n                '),
              r.Qb(10, 'div', 26),
              r.Fc(11, '\n                  '),
              r.Qb(12, 'h5', 27),
              r.Fc(13),
              r.gc(14, 'translate'),
              r.Pb(),
              r.Fc(15, '\n                  '),
              r.Mb(16, 'hr', 16),
              r.Fc(17, '\n\n                  '),
              r.Qb(18, 'p'),
              r.Fc(19),
              r.gc(20, 'translate'),
              r.Pb(),
              r.Fc(21, '\n\n                  '),
              r.Qb(22, 'div', 28),
              r.Fc(23, '\n                    '),
              r.Qb(24, 'span', 29),
              r.Fc(25),
              r.Pb(),
              r.Fc(26, '\n                  '),
              r.Pb(),
              r.Fc(27, '\n                '),
              r.Pb(),
              r.Fc(28, '\n\n                '),
              r.Qb(29, 'ul', 30),
              r.Fc(30, '\n                  '),
              r.Dc(31, b, 14, 6, 'li', 31),
              r.Fc(32, '\n                '),
              r.Pb(),
              r.Fc(33, '\n              '),
              r.Pb(),
              r.Fc(34, '\n            '),
              r.Pb(),
              r.Fc(35, '\n          '),
              r.Pb(),
              r.Fc(36, '\n\n          '),
              r.Qb(37, 'a', 32),
              r.Fc(38),
              r.gc(39, 'translate'),
              r.Mb(40, 'dc-feather', 33),
              r.Fc(41, '\n          '),
              r.Pb(),
              r.Fc(42, '\n        '),
              r.Pb(),
              r.Fc(43, '\n      '),
              r.Pb()),
            2 & n)
          ) {
            var e = t.$implicit,
              c = r.fc();
            r.Ab('col-md-', 12 / (c.plans.length + 1), ''),
              r.xb(13),
              r.Hc(
                '\n                    ',
                r.hc(14, 13, e.plan.name),
                '\n                  '
              ),
              r.xb(6),
              r.Gc(r.hc(20, 15, e.plan.description)),
              r.xb(5),
              r.yb('data-monthly-price', e.plan.price.monthly)(
                'data-yearly-price',
                e.plan.price.yearly
              ),
              r.xb(1),
              r.Hc(
                '\n                      ',
                e.plan.price.monthly,
                '\n                    '
              ),
              r.xb(6),
              r.kc('ngForOf', e.features),
              r.xb(7),
              r.Hc(
                '\n            ',
                r.hc(39, 17, 'DEMOS.START_UP.PRICING_TWO.GETNOW'),
                '\n\n            '
              ),
              r.xb(2),
              r.kc('name', 'arrow-right')('size', 16)('iconClass', 'ml-3');
          }
        }
        function d(n, t) {
          if (
            (1 & n &&
              (r.Qb(0, 'div'),
              r.Fc(1, '\n                      '),
              r.Qb(2, 'div', 37),
              r.Fc(3, '\n                        '),
              r.Mb(4, 'dc-feather', 33),
              r.Fc(5, '\n                        '),
              r.Qb(6, 'p', 38),
              r.Fc(7),
              r.gc(8, 'translate'),
              r.Pb(),
              r.Fc(9, '\n                      '),
              r.Pb(),
              r.Fc(10, '\n                    '),
              r.Pb()),
            2 & n)
          ) {
            var e = t.$implicit,
              c = t.index;
            r.Ab('col-6 border-', e.border, ''),
              r.Db('border-top', c > 1),
              r.xb(4),
              r.kc('name', e.icon)('size', 32)('iconClass', 'stroke-primary'),
              r.xb(3),
              r.Gc(r.hc(8, 9, e.title));
          }
        }
        var p = (function() {
          var t = (function() {
            function t(e) {
              n(this, t),
                (this.translate = e),
                (this.plans = [
                  {
                    icon: 'box',
                    plan: {
                      name: 'DEMOS.START_UP.PRICING_TWO.PLAN_BASIC',
                      price: { monthly: 9.99, yearly: 99.78 },
                      description: 'DEMOS.START_UP.PRICING_TWO.PLAN_BASIC_DESC'
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
            return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
          })();
          return (
            (t.ɵfac = function(n) {
              return new (n || t)(r.Lb(a.c));
            }),
            (t.ɵcmp = r.Fb({
              type: t,
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
              template: function(n, t) {
                1 & n &&
                  (r.Qb(0, 'section', 0),
                  r.Fc(1, '\n  '),
                  r.Qb(2, 'div', 1),
                  r.Fc(3, '\n    '),
                  r.Qb(4, 'div', 2),
                  r.Fc(5, '\n      '),
                  r.Qb(6, 'div', 3),
                  r.Fc(7, '\n        '),
                  r.Qb(8, 'div', 4),
                  r.Fc(9, '\n          '),
                  r.Qb(10, 'h2'),
                  r.Fc(11, '\n            '),
                  r.Qb(12, 'p', 5),
                  r.Fc(13),
                  r.gc(14, 'translate'),
                  r.Qb(15, 'span', 6),
                  r.Fc(16),
                  r.gc(17, 'translate'),
                  r.Pb(),
                  r.Fc(18, '\n            '),
                  r.Pb(),
                  r.Fc(19, '\n            '),
                  r.Qb(20, 'p', 6),
                  r.Fc(21),
                  r.gc(22, 'translate'),
                  r.Qb(23, 'span', 5),
                  r.Fc(24),
                  r.gc(25, 'translate'),
                  r.Pb(),
                  r.Fc(26, '\n            '),
                  r.Pb(),
                  r.Fc(27, '\n            '),
                  r.Qb(28, 'p', 6),
                  r.Fc(29),
                  r.gc(30, 'translate'),
                  r.Qb(31, 'span', 5),
                  r.Fc(32),
                  r.gc(33, 'translate'),
                  r.Pb(),
                  r.Fc(34, '\n            '),
                  r.Pb(),
                  r.Fc(35, '\n          '),
                  r.Pb(),
                  r.Fc(36, '\n\n          '),
                  r.Qb(37, 'p', 7),
                  r.Fc(38),
                  r.gc(39, 'translate'),
                  r.Pb(),
                  r.Fc(40, '\n        '),
                  r.Pb(),
                  r.Fc(41, '\n      '),
                  r.Pb(),
                  r.Fc(42, '\n\n      '),
                  r.Fc(43, '\n    '),
                  r.Pb(),
                  r.Fc(44, '\n\n    '),
                  r.Qb(45, 'div', 8),
                  r.Fc(46, '\n      '),
                  r.Dc(47, l, 44, 19, 'div', 9),
                  r.Fc(48, '\n\n      '),
                  r.Qb(49, 'div'),
                  r.Fc(50, '\n        '),
                  r.Qb(51, 'div', 10),
                  r.Fc(52, '\n          '),
                  r.Qb(53, 'div', 11),
                  r.Fc(54, '\n            '),
                  r.Qb(55, 'div', 12),
                  r.Fc(56, '\n              '),
                  r.Qb(57, 'div', 13),
                  r.Fc(58, '\n                '),
                  r.Qb(59, 'div', 14),
                  r.Fc(60, '\n                  '),
                  r.Qb(61, 'h5', 15),
                  r.Fc(62),
                  r.gc(63, 'translate'),
                  r.Pb(),
                  r.Fc(64, '\n                  '),
                  r.Mb(65, 'hr', 16),
                  r.Fc(66, '\n\n                  '),
                  r.Qb(67, 'p', 17),
                  r.Fc(68),
                  r.gc(69, 'translate'),
                  r.Pb(),
                  r.Fc(70, '\n\n                  '),
                  r.Qb(71, 'p', 18),
                  r.Fc(72),
                  r.gc(73, 'translate'),
                  r.Pb(),
                  r.Fc(74, '\n\n                  '),
                  r.Qb(75, 'div', 19),
                  r.Fc(76, '\n                    '),
                  r.Dc(77, d, 11, 11, 'div', 20),
                  r.Fc(78, '\n                  '),
                  r.Pb(),
                  r.Fc(79, '\n                '),
                  r.Pb(),
                  r.Fc(80, '\n              '),
                  r.Pb(),
                  r.Fc(81, '\n            '),
                  r.Pb(),
                  r.Fc(82, '\n          '),
                  r.Pb(),
                  r.Fc(83, '\n\n          '),
                  r.Qb(84, 'a', 21),
                  r.Fc(85),
                  r.gc(86, 'translate'),
                  r.Mb(87, 'dc-feather', 22),
                  r.Fc(88, '\n          '),
                  r.Pb(),
                  r.Fc(89, '\n        '),
                  r.Pb(),
                  r.Fc(90, '\n      '),
                  r.Pb(),
                  r.Fc(91, '\n    '),
                  r.Pb(),
                  r.Fc(92, '\n  '),
                  r.Pb(),
                  r.Fc(93, '\n'),
                  r.Pb(),
                  r.Fc(94, '\n')),
                  2 & n &&
                    (r.xb(13),
                    r.Hc(
                      '\n              ',
                      r.hc(14, 16, 'DEMOS.START_UP.PRICING_TWO.TITLE0'),
                      '\n              '
                    ),
                    r.xb(3),
                    r.Gc(r.hc(17, 18, 'DEMOS.START_UP.PRICING_TWO.TITLE01')),
                    r.xb(5),
                    r.Hc(
                      '\n              ',
                      r.hc(22, 20, 'DEMOS.START_UP.PRICING_TWO.TITLE1'),
                      '\n              '
                    ),
                    r.xb(3),
                    r.Gc(r.hc(25, 22, 'DEMOS.START_UP.PRICING_TWO.TITLE11')),
                    r.xb(5),
                    r.Hc(
                      '\n              ',
                      r.hc(30, 24, 'DEMOS.START_UP.PRICING_TWO.TITLE2'),
                      '\n              '
                    ),
                    r.xb(3),
                    r.Gc(r.hc(33, 26, 'DEMOS.START_UP.PRICING_TWO.TITLE22')),
                    r.xb(6),
                    r.Hc(
                      '\n            ',
                      r.hc(39, 28, 'DEMOS.START_UP.PRICING_TWO.SUBTITLE'),
                      '\n          '
                    ),
                    r.xb(9),
                    r.kc('ngForOf', t.plans),
                    r.xb(2),
                    r.Ab('col-md-', 12 / (t.plans.length + 1), ' ml-md-n3'),
                    r.xb(13),
                    r.Hc(
                      '\n                    ',
                      r.hc(63, 30, 'DEMOS.START_UP.PRICING_TWO.CUSTOM'),
                      '\n                  '
                    ),
                    r.xb(6),
                    r.Hc(
                      '\n                    ',
                      r.hc(69, 32, 'DEMOS.START_UP.PRICING_TWO.CUSTOM1'),
                      '\n                  '
                    ),
                    r.xb(4),
                    r.Hc(
                      '\n                    ',
                      r.hc(73, 34, 'DEMOS.START_UP.PRICING_TWO.CUSTOM2'),
                      '\n                  '
                    ),
                    r.xb(5),
                    r.kc('ngForOf', t.xtras),
                    r.xb(8),
                    r.Hc(
                      '',
                      r.hc(86, 36, 'DEMOS.START_UP.PRICING_TWO.CUSTOM3'),
                      '\n\n            '
                    ));
              },
              directives: [s.j, o.a],
              pipes: [a.b],
              styles: ['']
            })),
            t
          );
        })();
      },
      nEva: function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return p;
        });
        var r = i('fXoL'),
          a = i('sYmb'),
          s = i('nhfI'),
          o = i('ofXK'),
          b = i('AL06');
        function l(n, t) {
          if (
            (1 & n &&
              (r.Qb(0, 'div', 15),
              r.Fc(1, '\n                '),
              r.Qb(2, 'figure', 16),
              r.Fc(3, '\n                  '),
              r.Mb(4, 'img', 17),
              r.Fc(5, '\n                '),
              r.Pb(),
              r.Fc(6, '\n              '),
              r.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            r.xb(2),
              r.Cc(
                'background-image',
                'url(assets/img/testimonials/' + e.customer.picture + '.jpg)'
              ),
              r.xb(2),
              r.kc(
                'src',
                'assets/img/testimonials/' + e.customer.picture + '.jpg',
                r.yc
              );
          }
        }
        function d(n, t) {
          if (
            (1 & n &&
              (r.Qb(0, 'div', 15),
              r.Fc(1, '\n                '),
              r.Qb(2, 'div', 18),
              r.Fc(3, '\n                  '),
              r.Qb(4, 'blockquote', 19),
              r.Fc(5, '\n                    '),
              r.Qb(6, 'figure', 20),
              r.Fc(7, '\n                      '),
              r.Mb(8, 'img', 21),
              r.Fc(9, '\n                    '),
              r.Pb(),
              r.Fc(10, '\n\n                    '),
              r.Qb(11, 'p', 22),
              r.Fc(12),
              r.Pb(),
              r.Fc(13, '\n                    '),
              r.Qb(14, 'footer', 23),
              r.Fc(15, '\n                      '),
              r.Qb(16, 'span', 24),
              r.Fc(17),
              r.Pb(),
              r.Fc(18, '\n                    '),
              r.Pb(),
              r.Fc(19, '\n                  '),
              r.Pb(),
              r.Fc(20, '\n                '),
              r.Pb(),
              r.Fc(21, '\n              '),
              r.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            r.xb(8),
              r.kc(
                'src',
                'assets/img/logos/companies/' + e.logo + '.svg',
                r.yc
              ),
              r.xb(4),
              r.Hc(
                '\n                      ',
                e.testimonial,
                '\n                    '
              ),
              r.xb(5),
              r.Gc(e.customer.name);
          }
        }
        var p = (function() {
          var t = (function() {
            function t(e) {
              n(this, t),
                (this.translate = e),
                (this.testimonials = [
                  {
                    logo: 1,
                    customer: { name: 'Estefany G\xfcech\xe1', picture: 3 },
                    testimonial:
                      'This is an incredible tool that can help anyone to create their own algorithms and generate a more sustainable business. Thank you very much for helping us help other people!'
                  },
                  {
                    logo: 2,
                    customer: { name: 'Estefany G\xfcech\xe1', picture: 2 },
                    testimonial:
                      'This is an incredible tool that can help anyone to create their own algorithms and generate a more sustainable business. Thank you very much for helping us help other people!'
                  },
                  {
                    logo: 1,
                    customer: { name: 'Estefany G\xfcech\xe1', picture: 5 },
                    testimonial:
                      'This is an incredible tool that can help anyone to create their own algorithms and generate a more sustainable business. Thank you very much for helping us help other people!'
                  },
                  {
                    logo: 2,
                    customer: { name: 'Estefany G\xfcech\xe1', picture: 6 },
                    testimonial:
                      'This is an incredible tool that can help anyone to create their own algorithms and generate a more sustainable business. Thank you very much for helping us help other people!'
                  }
                ]),
                (this.fadingConfig = {
                  effect: 'fade',
                  slidesPerView: 1,
                  spaceBetween: 0,
                  autoplay: !1,
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                  },
                  pagination: !1
                }),
                (this.slidingConfig = {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  autoplay: !1,
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                  },
                  pagination: !1
                }),
                (this.currentSlide = 0);
            }
            return (
              e(t, [
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
              t
            );
          })();
          return (
            (t.ɵfac = function(n) {
              return new (n || t)(r.Lb(a.c));
            }),
            (t.ɵcmp = r.Fb({
              type: t,
              selectors: [['dc-testimonial-skewed-slider']],
              decls: 64,
              vars: 15,
              consts: [
                [1, 'seection', 'bg-light', 'slider-testimonials'],
                [1, 'container', 'bring-to-front'],
                [1, 'section-heading', 'text-center'],
                [1, 'lead', 'text-muted'],
                [1, 'card', 'shadow-lg'],
                [1, 'row', 'no-gutters'],
                [1, 'col-md-6'],
                [1, 'swiper-container', 'h-100', 3, 'swiper', 'index'],
                [1, 'swiper-wrapper'],
                ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
                [1, 'divider'],
                [1, 'swiper-button', 'swiper-button-prev', 'shadow'],
                [3, 'name', 'size'],
                [1, 'swiper-container', 'h-100', 3, 'swiper', 'indexChange'],
                [1, 'swiper-button', 'swiper-button-next', 'shadow'],
                [1, 'swiper-slide'],
                [1, 'm-0', 'image-background', 'cover'],
                ['alt', '...', 1, 'img--responsive', 'invisible', 3, 'src'],
                [
                  1,
                  'card-body',
                  'h-100',
                  'd-flex',
                  'flex-column',
                  'justify-content-center'
                ],
                [1, 'blockquote', 'text-center', 'mb-0'],
                [1, 'mockup', 'mb-5'],
                ['alt', '...', 1, 'img-responsive', 3, 'src'],
                [1, 'mb-5', 'mb-md-6'],
                [1, 'blockquote-footer'],
                [1, 'h6', 'text-uppercase']
              ],
              template: function(n, t) {
                1 & n &&
                  (r.Qb(0, 'section', 0),
                  r.Fc(1, '\n  '),
                  r.Qb(2, 'div', 1),
                  r.Fc(3, '\n    '),
                  r.Qb(4, 'div', 2),
                  r.Fc(5, '\n      '),
                  r.Qb(6, 'h2'),
                  r.Fc(7),
                  r.gc(8, 'translate'),
                  r.Pb(),
                  r.Fc(9, '\n\n      '),
                  r.Qb(10, 'p', 3),
                  r.Fc(11),
                  r.gc(12, 'translate'),
                  r.Pb(),
                  r.Fc(13, '\n    '),
                  r.Pb(),
                  r.Fc(14, '\n\n    '),
                  r.Qb(15, 'div', 4),
                  r.Fc(16, '\n      '),
                  r.Qb(17, 'div', 5),
                  r.Fc(18, '\n        '),
                  r.Qb(19, 'div', 6),
                  r.Fc(20, '\n          '),
                  r.Fc(21, '\n          '),
                  r.Qb(22, 'div', 7),
                  r.Fc(23, '\n            '),
                  r.Qb(24, 'div', 8),
                  r.Fc(25, '\n              '),
                  r.Dc(26, l, 7, 3, 'div', 9),
                  r.Fc(27, '\n            '),
                  r.Pb(),
                  r.Fc(28, '\n\n            '),
                  r.Qb(29, 'div', 10),
                  r.Fc(30, '\n              '),
                  r.Mb(31, 'div'),
                  r.Fc(32, '\n            '),
                  r.Pb(),
                  r.Fc(33, '\n          '),
                  r.Pb(),
                  r.Fc(34, '\n\n          '),
                  r.Fc(35, '\n          '),
                  r.Qb(36, 'div', 11),
                  r.Fc(37, '\n            '),
                  r.Mb(38, 'dc-feather', 12),
                  r.Fc(39, '\n          '),
                  r.Pb(),
                  r.Fc(40, '\n        '),
                  r.Pb(),
                  r.Fc(41, '\n\n        '),
                  r.Qb(42, 'div', 6),
                  r.Fc(43, '\n          '),
                  r.Fc(44, '\n          '),
                  r.Qb(45, 'div', 13),
                  r.bc('indexChange', function(n) {
                    return t.onIndexChange(n);
                  }),
                  r.Fc(46, '\n            '),
                  r.Qb(47, 'div', 8),
                  r.Fc(48, '\n              '),
                  r.Dc(49, d, 22, 3, 'div', 9),
                  r.Fc(50, '\n            '),
                  r.Pb(),
                  r.Fc(51, '\n          '),
                  r.Pb(),
                  r.Fc(52, '\n\n          '),
                  r.Fc(53, '\n          '),
                  r.Qb(54, 'div', 14),
                  r.Fc(55, '\n            '),
                  r.Mb(56, 'dc-feather', 12),
                  r.Fc(57, '\n          '),
                  r.Pb(),
                  r.Fc(58, '\n        '),
                  r.Pb(),
                  r.Fc(59, '\n      '),
                  r.Pb(),
                  r.Fc(60, '\n    '),
                  r.Pb(),
                  r.Fc(61, '\n  '),
                  r.Pb(),
                  r.Fc(62, '\n'),
                  r.Pb(),
                  r.Fc(63, '\n')),
                  2 & n &&
                    (r.xb(7),
                    r.Hc(
                      '\n        ',
                      r.hc(
                        8,
                        11,
                        'TESTIMONIALS.TESTIMONIAL_SKEWED_SLIDER.OUR_CUSTOMERS_HAVE_SOMETHING_TO_SAY'
                      ),
                      '\n      '
                    ),
                    r.xb(4),
                    r.Hc(
                      '\n        ',
                      r.hc(
                        12,
                        13,
                        'TESTIMONIALS.TESTIMONIAL_SKEWED_SLIDER.THEY_ARE_THE_BEST'
                      ),
                      '\n      '
                    ),
                    r.xb(11),
                    r.kc('swiper', t.fadingConfig)('index', t.currentSlide),
                    r.xb(4),
                    r.kc('ngForOf', t.testimonials),
                    r.xb(12),
                    r.kc('name', 'arrow-left')('size', 24),
                    r.xb(7),
                    r.kc('swiper', t.slidingConfig),
                    r.xb(4),
                    r.kc('ngForOf', t.testimonials),
                    r.xb(7),
                    r.kc('name', 'arrow-right')('size', 24));
              },
              directives: [s.b, o.j, b.a],
              pipes: [a.b],
              styles: ['']
            })),
            t
          );
        })();
      },
      'q+Ce': function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return s;
        });
        var r = i('fXoL'),
          a = i('sYmb'),
          s = (function() {
            var t = (function() {
              function t(e) {
                n(this, t), (this.translate = e);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })();
            return (
              (t.ɵfac = function(n) {
                return new (n || t)(r.Lb(a.c));
              }),
              (t.ɵcmp = r.Fb({
                type: t,
                selectors: [['dc-start-now-box']],
                decls: 21,
                vars: 9,
                consts: [
                  [1, 'section'],
                  [1, 'container', 'bring-to-front'],
                  [
                    1,
                    'shadow',
                    'rounded',
                    'text-center',
                    'bg-info-gradient',
                    'p-5'
                  ],
                  [1, 'mb-5', 'text-contrast'],
                  [1, 'handwritten', 'highlight', 'font-md', 'text-alternate'],
                  [
                    'href',
                    'https://everythink.ai/app/#/sessions/signup',
                    1,
                    'btn',
                    'btn-darker',
                    'btn-rounded',
                    'mt-4'
                  ]
                ],
                template: function(n, t) {
                  1 & n &&
                    (r.Qb(0, 'section', 0),
                    r.Fc(1, '\n  '),
                    r.Qb(2, 'div', 1),
                    r.Fc(3, '\n    '),
                    r.Qb(4, 'div', 2),
                    r.Fc(5, '\n      '),
                    r.Qb(6, 'h2', 3),
                    r.Fc(7),
                    r.gc(8, 'translate'),
                    r.Pb(),
                    r.Fc(9, '\n      '),
                    r.Qb(10, 'p', 4),
                    r.Fc(11),
                    r.gc(12, 'translate'),
                    r.Pb(),
                    r.Fc(13, '\n\n      '),
                    r.Qb(14, 'a', 5),
                    r.Fc(15),
                    r.gc(16, 'translate'),
                    r.Pb(),
                    r.Fc(17, '\n    '),
                    r.Pb(),
                    r.Fc(18, '\n  '),
                    r.Pb(),
                    r.Fc(19, '\n'),
                    r.Pb(),
                    r.Fc(20, '\n')),
                    2 & n &&
                      (r.xb(7),
                      r.Hc(
                        '\n        ',
                        r.hc(8, 3, 'USUAL.START_NOW_BOX.TRY_EVERYTHINK_NOW'),
                        '\n      '
                      ),
                      r.xb(4),
                      r.Hc(
                        '\n        ',
                        r.hc(12, 5, 'USUAL.START_NOW_BOX.WHY_WAIT'),
                        '\n      '
                      ),
                      r.xb(4),
                      r.Hc(
                        '\n        ',
                        r.hc(16, 7, 'USUAL.START_NOW_BOX.START_NOW'),
                        '\n      '
                      ));
                },
                pipes: [a.b],
                styles: ['']
              })),
              t
            );
          })();
      },
      u8tZ: function(t, c, i) {
        'use strict';
        i.d(c, 'a', function() {
          return l;
        });
        var r = i('fXoL'),
          a = i('sYmb'),
          s = i('ofXK');
        function o(n, t) {
          if (
            (1 & n && (r.Qb(0, 'li'), r.Fc(1), r.gc(2, 'translate'), r.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            r.Ab('list-group-item ', e.class, ''),
              r.xb(1),
              r.Hc('\n              ', r.hc(2, 4, e.name), '\n            ');
          }
        }
        function b(n, t) {
          if (
            (1 & n &&
              (r.Qb(0, 'div', 6),
              r.Fc(1, '\n        '),
              r.Qb(2, 'div', 7),
              r.Fc(3, '\n          '),
              r.Qb(4, 'div'),
              r.Fc(5, '\n            '),
              r.Qb(6, 'h4'),
              r.Fc(7),
              r.gc(8, 'translate'),
              r.Pb(),
              r.Fc(9, '\n\n            '),
              r.Fc(10, '\n\n            '),
              r.Qb(11, 'p'),
              r.Fc(12),
              r.gc(13, 'translate'),
              r.Pb(),
              r.Fc(14, '\n          '),
              r.Pb(),
              r.Fc(15, '\n\n          '),
              r.Qb(16, 'ul', 8),
              r.Fc(17, '\n            '),
              r.Dc(18, o, 3, 6, 'li', 9),
              r.Fc(19, '\n          '),
              r.Pb(),
              r.Fc(20, '\n\n          '),
              r.Qb(21, 'div', 10),
              r.Fc(22, '\n            '),
              r.Qb(23, 'a', 11),
              r.Fc(24),
              r.gc(25, 'translate'),
              r.Pb(),
              r.Fc(26, '\n          '),
              r.Pb(),
              r.Fc(27, '\n        '),
              r.Pb(),
              r.Fc(28, '\n      '),
              r.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            r.xb(4),
              r.zb(
                'pricing card-header d-flex align-items-center flex-column ' +
                  (e.best
                    ? 'bg-primary-gradient text-contrast'
                    : 'bg-light-gradient')
              ),
              r.xb(2),
              r.Db('text-contrast', e.best),
              r.xb(1),
              r.Hc(
                '\n              ',
                r.hc(8, 11, e.plan.name),
                '\n            '
              ),
              r.xb(5),
              r.Gc(r.hc(13, 13, e.plan.description)),
              r.xb(6),
              r.kc('ngForOf', e.features),
              r.xb(5),
              r.Ab(
                'btn ',
                e.best ? 'btn-primary' : 'btn-outline-secondary',
                ''
              ),
              r.xb(1),
              r.Hc(
                '\n              ',
                r.hc(25, 15, 'DEMOS.START_UP.PRICING.BUY'),
                '\n            '
              );
          }
        }
        var l = (function() {
          var t = (function() {
            function t(e) {
              n(this, t),
                (this.translate = e),
                (this.plans = [
                  {
                    icon: 'box',
                    plan: {
                      name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL',
                      price: 0.99,
                      description: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL_DESC'
                    },
                    features: [
                      { name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL1' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL2' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL3' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL4' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_PERSONAL5' }
                    ]
                  },
                  {
                    icon: 'download-cloud',
                    best: !0,
                    plan: {
                      name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS',
                      price: 29.99,
                      description: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS_DESC'
                    },
                    features: [
                      { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS1' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS2' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS3' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS4' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESS5' }
                    ]
                  },
                  {
                    icon: 'settings',
                    plan: {
                      name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE',
                      price: 99.99,
                      description: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE_DESC'
                    },
                    features: [
                      { name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE1' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE2' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE3' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE4' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_ENTERPRISE5' }
                    ]
                  },
                  {
                    icon: 'download-cloud',
                    best: !0,
                    plan: {
                      name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD',
                      price: 29.99,
                      description: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD_DESC'
                    },
                    features: [
                      { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD1' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD2' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD3' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD4' },
                      { name: 'DEMOS.START_UP.PRICING.PLAN_BUSINESSD5' }
                    ]
                  }
                ]);
            }
            return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
          })();
          return (
            (t.ɵfac = function(n) {
              return new (n || t)(r.Lb(a.c));
            }),
            (t.ɵcmp = r.Fb({
              type: t,
              selectors: [['dc-pricing-cards']],
              decls: 22,
              vars: 7,
              consts: [
                [1, 'container'],
                [1, 'section-heading', 'text-center'],
                [1, 'mb-2'],
                [1, 'lead', 'text-secondary'],
                [1, 'row'],
                ['class', 'col-md-3 mt-4', 4, 'ngFor', 'ngForOf'],
                [1, 'col-md-3', 'mt-4'],
                [1, 'card', 'text-center'],
                [1, 'list-group', 'list-group-flush'],
                [3, 'class', 4, 'ngFor', 'ngForOf'],
                [1, 'card-body'],
                ['href', 'https://everythink.ai/app/#/sessions/signup']
              ],
              template: function(n, t) {
                1 & n &&
                  (r.Qb(0, 'section'),
                  r.Fc(1, '\n  '),
                  r.Qb(2, 'div', 0),
                  r.Fc(3, '\n    '),
                  r.Qb(4, 'div', 1),
                  r.Fc(5, '\n      '),
                  r.Qb(6, 'h2', 2),
                  r.Fc(7),
                  r.gc(8, 'translate'),
                  r.Pb(),
                  r.Fc(9, '\n      '),
                  r.Qb(10, 'p', 3),
                  r.Fc(11),
                  r.gc(12, 'translate'),
                  r.Pb(),
                  r.Fc(13, '\n    '),
                  r.Pb(),
                  r.Fc(14, '\n\n    '),
                  r.Qb(15, 'div', 4),
                  r.Fc(16, '\n      '),
                  r.Dc(17, b, 29, 17, 'div', 5),
                  r.Fc(18, '\n    '),
                  r.Pb(),
                  r.Fc(19, '\n  '),
                  r.Pb(),
                  r.Fc(20, '\n'),
                  r.Pb(),
                  r.Fc(21, '\n')),
                  2 & n &&
                    (r.xb(7),
                    r.Gc(r.hc(8, 3, 'DEMOS.START_UP.PRICING.TITLE')),
                    r.xb(4),
                    r.Hc(
                      '\n        ',
                      r.hc(12, 5, 'DEMOS.START_UP.PRICING.SUBTITLE'),
                      '\n      '
                    ),
                    r.xb(6),
                    r.kc('ngForOf', t.plans));
              },
              directives: [s.j],
              pipes: [a.b],
              styles: ['']
            })),
            t
          );
        })();
      }
    }
  ]);
})();
