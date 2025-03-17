(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    '7cks': function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return o;
      });
      var c = e('fXoL'),
        i = e('sYmb'),
        s = e('ofXK'),
        r = e('AL06');
      function a(n, t) {
        if (
          (1 & n &&
            (c.Qb(0, 'div', 7),
            c.Fc(1, '\n        '),
            c.Mb(2, 'dc-feather', 8),
            c.Fc(3, '\n        '),
            c.Qb(4, 'h5', 9),
            c.Fc(5),
            c.Pb(),
            c.Fc(6, '\n        '),
            c.Qb(7, 'p'),
            c.Fc(8),
            c.Pb(),
            c.Fc(9, '\n      '),
            c.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          c.xb(2),
            c.kc('name', n.icon)('iconClass', 'stroke-primary'),
            c.xb(3),
            c.Gc(n.title),
            c.xb(3),
            c.Gc(n.description);
        }
      }
      let o = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
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
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(c.Lb(i.c));
          }),
          (n.ɵcmp = c.Fb({
            type: n,
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
                (c.Qb(0, 'section', 0),
                c.Fc(1, '\n  '),
                c.Qb(2, 'div', 1),
                c.Fc(3, '\n    '),
                c.Qb(4, 'div', 2),
                c.Fc(5, '\n      '),
                c.Qb(6, 'h5', 3),
                c.Fc(7),
                c.gc(8, 'translate'),
                c.Pb(),
                c.Fc(9, '\n      '),
                c.Qb(10, 'h2'),
                c.Fc(11),
                c.gc(12, 'translate'),
                c.Pb(),
                c.Fc(13, '\n      '),
                c.Qb(14, 'p', 4),
                c.Fc(15),
                c.gc(16, 'translate'),
                c.Pb(),
                c.Fc(17, '\n    '),
                c.Pb(),
                c.Fc(18, '\n\n    '),
                c.Qb(19, 'div', 5),
                c.Fc(20, '\n      '),
                c.Dc(21, a, 10, 4, 'div', 6),
                c.Fc(22, '\n    '),
                c.Pb(),
                c.Fc(23, '\n  '),
                c.Pb(),
                c.Fc(24, '\n'),
                c.Pb(),
                c.Fc(25, '\n')),
                2 & n &&
                  (c.xb(7),
                  c.Hc(
                    '\n        ',
                    c.hc(8, 4, 'USUAL.FEATURES_ICONS_COL.UP_TO_THE_TASK'),
                    '\n      '
                  ),
                  c.xb(4),
                  c.Gc(c.hc(12, 6, 'USUAL.FEATURES_ICONS_COL.WHAT_YOU_GET')),
                  c.xb(4),
                  c.Hc(
                    '\n        ',
                    c.hc(
                      16,
                      8,
                      'USUAL.FEATURES_ICONS_COL.GEOLOCATED_INTELLIGENT_ASSISTANTS'
                    ),
                    '\n      '
                  ),
                  c.xb(6),
                  c.kc('ngForOf', t.elements));
            },
            directives: [s.j, r.a],
            pipes: [i.b],
            styles: ['']
          })),
          n
        );
      })();
    },
    'KO+a': function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return a;
      });
      var c = e('fXoL'),
        i = e('ofXK');
      const s = function(n) {
          return { small: n };
        },
        r = ['*'];
      let a = (() => {
        class n {
          constructor() {
            (this.text = 'contrast'), (this.small = !0);
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)();
          }),
          (n.ɵcmp = c.Fb({
            type: n,
            selectors: [['dc-badge']],
            inputs: { bg: 'bg', text: 'text', small: 'small' },
            ngContentSelectors: r,
            decls: 5,
            vars: 7,
            consts: [[3, 'ngClass']],
            template: function(n, t) {
              1 & n &&
                (c.jc(),
                c.Qb(0, 'span', 0),
                c.Fc(1, '\n  '),
                c.ic(2),
                c.Fc(3, '\n'),
                c.Pb(),
                c.Fc(4, '\n')),
                2 & n &&
                  (c.Bb(
                    'd-inline-block rounded-pill shadow-box bg-',
                    t.bg,
                    ' text-',
                    t.text,
                    ' bold py-2 px-4 mb-3'
                  ),
                  c.kc('ngClass', c.oc(5, s, t.small)));
            },
            directives: [i.i],
            styles: ['']
          })),
          n
        );
      })();
    },
    MTqK: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return r;
      });
      var c = e('fXoL'),
        i = e('sYmb'),
        s = e('AL06');
      let r = (() => {
        class n {
          constructor(n) {
            this.translate = n;
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(c.Lb(i.c));
          }),
          (n.ɵcmp = c.Fb({
            type: n,
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
                (c.Fc(0, '\n'),
                c.Qb(1, 'section', 0),
                c.Fc(2, '\n  '),
                c.Qb(3, 'div', 1),
                c.Fc(4, '\n    '),
                c.Qb(5, 'div', 2),
                c.Fc(6, '\n      '),
                c.Qb(7, 'div', 3),
                c.Fc(8, '\n        '),
                c.Qb(9, 'div', 4),
                c.Fc(10, '\n          '),
                c.Mb(11, 'dc-feather', 5),
                c.Fc(12, '\n          '),
                c.Qb(13, 'a', 6),
                c.Fc(14, '\n            '),
                c.Qb(15, 'h4', 7),
                c.Fc(16),
                c.gc(17, 'translate'),
                c.Pb(),
                c.Fc(18, '\n          '),
                c.Pb(),
                c.Fc(19, '\n          '),
                c.Qb(20, 'p', 8),
                c.Fc(21),
                c.gc(22, 'translate'),
                c.Pb(),
                c.Fc(23, '\n        '),
                c.Pb(),
                c.Fc(24, '\n\n        '),
                c.Qb(25, 'div', 9),
                c.Fc(26, '\n          '),
                c.Mb(27, 'dc-feather', 5),
                c.Fc(28, '\n          '),
                c.Qb(29, 'a', 10),
                c.Fc(30, '\n            '),
                c.Qb(31, 'h4', 7),
                c.Fc(32),
                c.gc(33, 'translate'),
                c.Pb(),
                c.Fc(34, '\n          '),
                c.Pb(),
                c.Fc(35, '\n          '),
                c.Qb(36, 'p', 8),
                c.Fc(37),
                c.gc(38, 'translate'),
                c.Pb(),
                c.Fc(39, '\n        '),
                c.Pb(),
                c.Fc(40, '\n      '),
                c.Pb(),
                c.Fc(41, '\n    '),
                c.Pb(),
                c.Fc(42, '\n  '),
                c.Pb(),
                c.Fc(43, '\n'),
                c.Pb(),
                c.Fc(44, '\n')),
                2 & n &&
                  (c.xb(11),
                  c.kc('name', 'star')('iconClass', 'stroke-primary'),
                  c.xb(5),
                  c.Hc(
                    '\n              ',
                    c.hc(17, 8, 'USUAL.DEVELOPER_DESIGNER.JOIN_AS_DESIGNER'),
                    '\n            '
                  ),
                  c.xb(5),
                  c.Hc(
                    '\n            ',
                    c.hc(22, 10, 'USUAL.DEVELOPER_DESIGNER.LOREM_IPSUM'),
                    '\n          '
                  ),
                  c.xb(6),
                  c.kc('name', 'code')('iconClass', 'stroke-info'),
                  c.xb(5),
                  c.Hc(
                    '\n              ',
                    c.hc(33, 12, 'USUAL.DEVELOPER_DESIGNER.JOIN_AS_DEVELOPER'),
                    '\n            '
                  ),
                  c.xb(5),
                  c.Hc(
                    '\n            ',
                    c.hc(38, 14, 'USUAL.DEVELOPER_DESIGNER.LOREM_IPSUM'),
                    '\n          '
                  ));
            },
            directives: [s.a],
            pipes: [i.b],
            styles: ['']
          })),
          n
        );
      })();
    },
    N7aX: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return s;
      });
      var c = e('fLW6'),
        i = e('fXoL');
      let s = (() => {
        class n {
          constructor() {
            this._noise = new c.Noise(Math.floor(64e3 * Math.random()));
          }
          get noise() {
            return this._noise;
          }
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)();
          }),
          (n.ɵprov = i.Hb({ token: n, factory: n.ɵfac, providedIn: 'root' })),
          n
        );
      })();
    },
    VKEt: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return s;
      });
      var c = e('fXoL'),
        i = e('sYmb');
      let s = (() => {
        class n {
          constructor(n) {
            this.translate = n;
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(c.Lb(i.c));
          }),
          (n.ɵcmp = c.Fb({
            type: n,
            selectors: [['dc-cta1']],
            inputs: { edge: 'edge', background: 'background' },
            decls: 24,
            vars: 13,
            consts: [
              [1, 'container', 'pt-5'],
              [1, 'd-flex', 'align-items-center', 'flex-column', 'flex-md-row'],
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
                (c.Qb(0, 'section'),
                c.Fc(1, '\n  '),
                c.Qb(2, 'div', 0),
                c.Fc(3, '\n    '),
                c.Qb(4, 'div', 1),
                c.Fc(5, '\n      '),
                c.Qb(6, 'div', 2),
                c.Fc(7, '\n        '),
                c.Qb(8, 'p', 3),
                c.Fc(9),
                c.gc(10, 'translate'),
                c.Pb(),
                c.Fc(11, '\n        '),
                c.Qb(12, 'h6', 4),
                c.Fc(13),
                c.gc(14, 'translate'),
                c.Pb(),
                c.Fc(15, '\n      '),
                c.Pb(),
                c.Fc(16, '\n      '),
                c.Qb(17, 'a', 5),
                c.Fc(18),
                c.gc(19, 'translate'),
                c.Pb(),
                c.Fc(20, '\n    '),
                c.Pb(),
                c.Fc(21, '\n  '),
                c.Pb(),
                c.Fc(22, '\n'),
                c.Pb(),
                c.Fc(23, '\n')),
                2 & n &&
                  (c.Bb(
                    'section ',
                    t.background ? 'bg-' + t.background : '',
                    ' ',
                    t.edge ? 'edge ' + t.edge : '',
                    ''
                  ),
                  c.xb(9),
                  c.Hc(
                    '\n          ',
                    c.hc(10, 7, 'CATE.CATE1.READY_TO_GET_STARTED'),
                    '\n        '
                  ),
                  c.xb(4),
                  c.Hc(
                    '\n          ',
                    c.hc(14, 9, 'CATE.CATE1.BECOME_ONE_OF_THE_MILLIONS'),
                    '\n        '
                  ),
                  c.xb(5),
                  c.Hc(
                    '\n        ',
                    c.hc(19, 11, 'CATE.CATE1.CREATE_EVERTTHINKACCOUNT'),
                    ''
                  ));
            },
            pipes: [i.b],
            styles: ['']
          })),
          n
        );
      })();
    },
    WGuQ: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return a;
      });
      var c = e('fXoL'),
        i = e('ofXK');
      function s(n, t) {
        if ((1 & n && (c.Qb(0, 'p', 8), c.Fc(1), c.Pb()), 2 & n)) {
          const n = c.fc();
          c.xb(1), c.Gc(n.subtitle);
        }
      }
      const r = function(n) {
        return { 'mb-4': n };
      };
      let a = (() => {
        class n {
          constructor() {}
          ngOnInit() {}
          getShapeFill() {
            return this.fill || 'shape-fill-contrast';
          }
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)();
          }),
          (n.ɵcmp = c.Fb({
            type: n,
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
                (c.Qb(0, 'header', 0),
                c.Fc(1, '\n  '),
                c.Qb(2, 'div', 1),
                c.Fc(3, '\n    '),
                c.Fc(4, '\n    '),
                c.ec(),
                c.Qb(5, 'svg', 2),
                c.Fc(6, '\n      '),
                c.Mb(7, 'path', 3),
                c.Fc(8, '\n    '),
                c.Pb(),
                c.Fc(9, '\n  '),
                c.Pb(),
                c.Fc(10, '\n\n  '),
                c.dc(),
                c.Qb(11, 'div', 4),
                c.Fc(12, '\n    '),
                c.Qb(13, 'div', 5),
                c.Fc(14, '\n      '),
                c.Qb(15, 'div'),
                c.Fc(16, '\n        '),
                c.Qb(17, 'h1', 6),
                c.Fc(18),
                c.Pb(),
                c.Fc(19, '\n        '),
                c.Dc(20, s, 2, 1, 'p', 7),
                c.Fc(21, '\n      '),
                c.Pb(),
                c.Fc(22, '\n    '),
                c.Pb(),
                c.Fc(23, '\n  '),
                c.Pb(),
                c.Fc(24, '\n'),
                c.Pb(),
                c.Fc(25, '\n')),
                2 & n &&
                  (c.xb(7),
                  c.kc('ngClass', t.getShapeFill()),
                  c.xb(4),
                  c.kc('ngClass', t.containerClass),
                  c.xb(4),
                  c.Ab('col-md-', t.rows || 6, ''),
                  c.xb(2),
                  c.kc('ngClass', c.oc(8, r, t.subtitle)),
                  c.xb(1),
                  c.Hc('\n          ', t.title, '\n        '),
                  c.xb(2),
                  c.kc('ngIf', t.subtitle));
            },
            directives: [i.i, i.k],
            styles: ['']
          })),
          n
        );
      })();
    },
    XMwz: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return a;
      });
      var c = e('3Pt+'),
        i = e('ofXK'),
        s = e('sYmb'),
        r = e('fXoL');
      let a = (() => {
        class n {}
        return (
          (n.ɵmod = r.Jb({ type: n })),
          (n.ɵinj = r.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[i.b, c.a, s.a.forChild()]]
          })),
          n
        );
      })();
    },
    YJ7q: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return o;
      });
      var c = e('fXoL'),
        i = e('ofXK');
      function s(n, t) {
        if ((1 & n && (c.Qb(0, 'h4', 4), c.Fc(1), c.Pb()), 2 & n)) {
          const n = c.fc();
          c.xb(1), c.Hc('\n      ', n.title, '\n    ');
        }
      }
      function r(n, t) {
        if (
          (1 & n &&
            (c.Qb(0, 'div', 5),
            c.Fc(1, '\n        '),
            c.Mb(2, 'img', 6),
            c.Fc(3, '\n      '),
            c.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          c.xb(2), c.kc('src', 'assets/img/logos/' + n + '.png', c.yc);
        }
      }
      const a = function() {
        return [1, 2, 3, 4];
      };
      let o = (() => {
        class n {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)();
          }),
          (n.ɵcmp = c.Fb({
            type: n,
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
                (c.Qb(0, 'section'),
                c.Fc(1, '\n  '),
                c.Qb(2, 'div', 0),
                c.Fc(3, '\n    '),
                c.Dc(4, s, 2, 1, 'h4', 1),
                c.Fc(5, '\n\n    '),
                c.Qb(6, 'div', 2),
                c.Fc(7, '\n      '),
                c.Dc(8, r, 4, 1, 'div', 3),
                c.Fc(9, '\n    '),
                c.Pb(),
                c.Fc(10, '\n  '),
                c.Pb(),
                c.Fc(11, '\n'),
                c.Pb(),
                c.Fc(12, '\n')),
                2 & n &&
                  (c.Bb(
                    'section bg-',
                    t.background || 'light',
                    ' ',
                    t.edge ? 'edge ' + t.edge : '',
                    ''
                  ),
                  c.xb(2),
                  c.kc('ngClass', t.containerClass),
                  c.xb(2),
                  c.kc('ngIf', t.title),
                  c.xb(4),
                  c.kc('ngForOf', c.nc(7, a)));
            },
            directives: [i.i, i.k, i.j],
            styles: ['']
          })),
          n
        );
      })();
    },
    aaX3: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return b;
      });
      var c = e('fXoL'),
        i = e('ofXK'),
        s = e('nhfI');
      function r(n, t) {
        if ((1 & n && (c.Qb(0, 'h4', 4), c.Fc(1), c.Pb()), 2 & n)) {
          const n = c.fc();
          c.xb(1), c.Hc('\n      ', n.title, '\n    ');
        }
      }
      function a(n, t) {
        if (
          (1 & n &&
            (c.Qb(0, 'div', 5),
            c.Fc(1, '\n        '),
            c.Mb(2, 'img', 6),
            c.Fc(3, '\n      '),
            c.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          c.xb(2), c.mc('src', 'assets/img/logos/', n, '.png', c.yc);
        }
      }
      const o = function() {
        return [1, 2, 3, 4, 5, 6];
      };
      let b = (() => {
        class n {
          constructor() {
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
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)();
          }),
          (n.ɵcmp = c.Fb({
            type: n,
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
                (c.Qb(0, 'section'),
                c.Fc(1, '\n  '),
                c.Qb(2, 'div', 0),
                c.Fc(3, '\n    '),
                c.Dc(4, r, 2, 1, 'h4', 1),
                c.Fc(5, '\n\n    '),
                c.Qb(6, 'swiper', 2),
                c.Fc(7, '\n      '),
                c.Dc(8, a, 4, 1, 'div', 3),
                c.Fc(9, '\n    '),
                c.Pb(),
                c.Fc(10, '\n  '),
                c.Pb(),
                c.Fc(11, '\n'),
                c.Pb(),
                c.Fc(12, '\n')),
                2 & n &&
                  (c.Bb(
                    'section partners ',
                    t.background ? 'bg-' + t.background : '',
                    ' ',
                    t.edge ? 'edge ' + t.edge : '',
                    ''
                  ),
                  c.xb(2),
                  c.Db('border-bottom', t.bordered),
                  c.xb(2),
                  c.kc('ngIf', t.title),
                  c.xb(2),
                  c.kc('config', t.config),
                  c.xb(2),
                  c.kc('ngForOf', c.nc(9, o)));
            },
            directives: [i.k, s.a, i.j],
            styles: ['']
          })),
          n
        );
      })();
    },
    cqDB: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return a;
      });
      var c = e('fXoL'),
        i = e('sYmb'),
        s = e('3Pt+'),
        r = e('ofXK');
      let a = (() => {
        class n {
          constructor(n) {
            (this.translate = n), (this.label = 'Register');
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(c.Lb(i.c));
          }),
          (n.ɵcmp = c.Fb({
            type: n,
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
                (c.Qb(0, 'form', 0),
                c.Fc(1, '\n  '),
                c.Qb(2, 'div', 1),
                c.Fc(3, '\n    '),
                c.Mb(4, 'input', 2),
                c.Fc(5, '\n    '),
                c.Qb(6, 'button', 3),
                c.Fc(7),
                c.Pb(),
                c.Fc(8, '\n  '),
                c.Pb(),
                c.Fc(9, '\n'),
                c.Pb(),
                c.Fc(10, '\n\n'),
                c.Qb(11, 'div', 4),
                c.Fc(12, '\n  '),
                c.Mb(13, 'i', 5),
                c.Fc(14, '\n  '),
                c.Qb(15, 'p', 6),
                c.Fc(16),
                c.gc(17, 'translate'),
                c.Pb(),
                c.Fc(18, '\n  '),
                c.Qb(19, 'p', 7),
                c.Fc(20),
                c.gc(21, 'translate'),
                c.Pb(),
                c.Fc(22, '\n'),
                c.Pb(),
                c.Fc(23, '\n')),
                2 & n &&
                  (c.xb(2),
                  c.kc('ngClass', t.inputClass),
                  c.xb(5),
                  c.Hc('\n      ', t.label, '\n    '),
                  c.xb(9),
                  c.Hc(
                    '\n    ',
                    c.hc(
                      17,
                      4,
                      'ACTIONS.FORM_REGISTER_SIMPLE_INLINE.CHECK_YOUR_EMAIL'
                    ),
                    '\n  '
                  ),
                  c.xb(4),
                  c.Hc(
                    '\n    ',
                    c.hc(
                      21,
                      6,
                      'ACTIONS.FORM_REGISTER_SIMPLE_INLINE.WE_SENT_YOU_AN_EMAIL'
                    ),
                    '\n  '
                  ));
            },
            directives: [s.h, s.d, s.e, r.i],
            pipes: [i.b],
            styles: ['']
          })),
          n
        );
      })();
    },
    'f+4U': function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return l;
      });
      var c = e('wHSu'),
        i = e('fXoL'),
        s = e('sYmb'),
        r = e('nhfI'),
        a = e('ofXK'),
        o = e('6NWb');
      function b(n, t) {
        if (
          (1 & n &&
            (i.Qb(0, 'div', 9),
            i.Fc(1, '\n            '),
            i.Qb(2, 'div', 10),
            i.Fc(3, '\n              '),
            i.Qb(4, 'div', 11),
            i.Fc(5, '\n                '),
            i.Qb(6, 'div', 12),
            i.Fc(7, '\n                  '),
            i.Mb(8, 'img', 13),
            i.Fc(9, '\n                '),
            i.Pb(),
            i.Fc(10, '\n\n                '),
            i.Mb(11, 'hr', 14),
            i.Fc(12, '\n\n                '),
            i.Qb(13, 'p', 15),
            i.Fc(14),
            i.Pb(),
            i.Fc(15, '\n                '),
            i.Qb(16, 'p', 16),
            i.Fc(17),
            i.Pb(),
            i.Fc(18, '\n              '),
            i.Pb(),
            i.Fc(19, '\n\n              '),
            i.Qb(20, 'div', 17),
            i.Fc(21, '\n                '),
            i.Qb(22, 'div', 18),
            i.Fc(23, '\n                  '),
            i.Qb(24, 'p', 19),
            i.Fc(25, '1.5k'),
            i.Pb(),
            i.Fc(26, '\n                  '),
            i.Qb(27, 'p', 20),
            i.Fc(28),
            i.gc(29, 'translate'),
            i.Pb(),
            i.Fc(30, '\n                '),
            i.Pb(),
            i.Fc(31, '\n                '),
            i.Qb(32, 'a', 21),
            i.Fc(33, '\n                  '),
            i.Mb(34, 'fa-icon', 22),
            i.Fc(35, '\n                '),
            i.Pb(),
            i.Fc(36, '\n              '),
            i.Pb(),
            i.Fc(37, '\n            '),
            i.Pb(),
            i.Fc(38, '\n          '),
            i.Pb()),
          2 & n)
        ) {
          const n = t.$implicit,
            e = t.index,
            c = i.fc();
          i.xb(8),
            i.kc('src', 'assets/img/v8/icons/' + (e + 1) + '.svg', i.yc),
            i.xb(6),
            i.Ic(
              '\n                  ',
              n.title[0],
              ' ',
              n.title[1],
              '\n                '
            ),
            i.xb(3),
            i.Hc('\n                  ', n.description, '\n                '),
            i.xb(11),
            i.Hc(
              '\n                    ',
              i.hc(29, 6, 'SLIDERS.SLIDER_CARD_PROJECTS.NEW_SUBSCRIBERS'),
              '\n                  '
            ),
            i.xb(6),
            i.kc('icon', c.infoCircle);
        }
      }
      let l = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
              (this.infoCircle = c.i),
              (this.longArrowAltRight = c.l),
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
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(i.Lb(s.c));
          }),
          (n.ɵcmp = i.Fb({
            type: n,
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
                (i.Qb(0, 'section', 0),
                i.Fc(1, '\n  '),
                i.Qb(2, 'div', 1),
                i.Fc(3, '\n    '),
                i.Qb(4, 'div', 2),
                i.Fc(5, '\n      '),
                i.Qb(6, 'div', 3),
                i.Fc(7, '\n        '),
                i.Qb(8, 'div', 4),
                i.Fc(9, '\n          '),
                i.Dc(10, b, 39, 8, 'div', 5),
                i.Fc(11, '\n        '),
                i.Pb(),
                i.Fc(12, '\n\n        '),
                i.Fc(13, '\n        '),
                i.Qb(14, 'div', 6),
                i.Fc(15, '\n          '),
                i.Qb(16, 'span', 7),
                i.Fc(17),
                i.gc(18, 'translate'),
                i.Pb(),
                i.Fc(19, '\n          '),
                i.Mb(20, 'fa-icon', 8),
                i.Fc(21, '\n        '),
                i.Pb(),
                i.Fc(22, '\n      '),
                i.Pb(),
                i.Fc(23, '\n    '),
                i.Pb(),
                i.Fc(24, '\n  '),
                i.Pb(),
                i.Fc(25, '\n'),
                i.Pb(),
                i.Fc(26, '\n')),
                2 & n &&
                  (i.xb(2),
                  i.Db('lift-up', t.liftUp),
                  i.xb(4),
                  i.kc('swiper', t.config),
                  i.xb(4),
                  i.kc('ngForOf', t.features),
                  i.xb(7),
                  i.Gc(i.hc(18, 8, 'SLIDERS.SLIDER_CARD_PROJECTS.NEXT')),
                  i.xb(3),
                  i.zb('features-nav-icon'),
                  i.kc('icon', t.longArrowAltRight));
            },
            directives: [r.b, a.j, o.a],
            pipes: [s.b],
            styles: [
              '@media (min-width:576px){.container[_ngcontent-%COMP%] > .cards-wrapper[_ngcontent-%COMP%]{width:510px}}@media (min-width:768px){.container[_ngcontent-%COMP%] > .cards-wrapper[_ngcontent-%COMP%]{width:690px}}@media (min-width:992px){.container[_ngcontent-%COMP%] > .cards-wrapper[_ngcontent-%COMP%]{width:930px}}@media (min-width:1200px){.container[_ngcontent-%COMP%] > .cards-wrapper[_ngcontent-%COMP%]{width:1110px}}@media (min-width:992px){.container.lift-up[_ngcontent-%COMP%]{padding-bottom:16rem}.container.lift-up[_ngcontent-%COMP%] > .cards-wrapper[_ngcontent-%COMP%]{position:absolute;transform:translateY(-50%)}}.logo[_ngcontent-%COMP%]{min-height:48px}'
            ]
          })),
          n
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
              s = this.gradP;
            (i[e] = i[e + 256] = c =
              1 & e ? t[e] ^ (255 & n) : t[e] ^ ((n >> 8) & 255)),
              (s[e] = s[e + 256] = this.grad3[c % 12]);
          }
        };
        var e = 0.5 * (Math.sqrt(3) - 1),
          c = (3 - Math.sqrt(3)) / 6;
        function i(n) {
          return n * n * n * (n * (6 * n - 15) + 10);
        }
        function s(n, t, e) {
          return (1 - e) * n + e * t;
        }
        (t.prototype.simplex2 = function(n, t) {
          var i,
            s,
            r = (n + t) * e,
            a = Math.floor(n + r),
            o = Math.floor(t + r),
            b = (a + o) * c,
            l = n - a + b,
            d = t - o + b;
          l > d ? ((i = 1), (s = 0)) : ((i = 0), (s = 1));
          var p = l - i + c,
            F = d - s + c,
            u = l - 1 + 2 * c,
            g = d - 1 + 2 * c,
            m = this.perm,
            P = this.gradP,
            h = P[(a &= 255) + i + m[(o &= 255) + s]],
            f = P[a + 1 + m[o + 1]],
            S = 0.5 - l * l - d * d,
            T = 0.5 - p * p - F * F,
            E = 0.5 - u * u - g * g;
          return (
            70 *
            ((S < 0 ? 0 : (S *= S) * S * P[a + m[o]].dot2(l, d)) +
              (T < 0 ? 0 : (T *= T) * T * h.dot2(p, F)) +
              (E < 0 ? 0 : (E *= E) * E * f.dot2(u, g)))
          );
        }),
          (t.prototype.simplex3 = function(n, t, e) {
            var c,
              i,
              s,
              r,
              a,
              o,
              b = (n + t + e) * (1 / 3),
              l = Math.floor(n + b),
              d = Math.floor(t + b),
              p = Math.floor(e + b),
              F = (l + d + p) * (1 / 6),
              u = n - l + F,
              g = t - d + F,
              m = e - p + F;
            u >= g
              ? g >= m
                ? ((c = 1), (i = 0), (s = 0), (r = 1), (a = 1), (o = 0))
                : u >= m
                ? ((c = 1), (i = 0), (s = 0), (r = 1), (a = 0), (o = 1))
                : ((c = 0), (i = 0), (s = 1), (r = 1), (a = 0), (o = 1))
              : g < m
              ? ((c = 0), (i = 0), (s = 1), (r = 0), (a = 1), (o = 1))
              : u < m
              ? ((c = 0), (i = 1), (s = 0), (r = 0), (a = 1), (o = 1))
              : ((c = 0), (i = 1), (s = 0), (r = 1), (a = 1), (o = 0));
            var P = u - c + 1 / 6,
              h = g - i + 1 / 6,
              f = m - s + 1 / 6,
              S = u - r + (1 / 6) * 2,
              T = g - a + (1 / 6) * 2,
              E = m - o + (1 / 6) * 2,
              x = u - 1 + 0.5,
              I = g - 1 + 0.5,
              v = m - 1 + 0.5,
              _ = this.perm,
              R = this.gradP,
              O = R[(l &= 255) + c + _[(d &= 255) + i + _[(p &= 255) + s]]],
              A = R[l + r + _[d + a + _[p + o]]],
              w = R[l + 1 + _[d + 1 + _[p + 1]]],
              Q = 0.5 - u * u - g * g - m * m,
              y = 0.5 - P * P - h * h - f * f,
              N = 0.5 - S * S - T * T - E * E,
              C = 0.5 - x * x - I * I - v * v;
            return (
              32 *
              ((Q < 0 ? 0 : (Q *= Q) * Q * R[l + _[d + _[p]]].dot3(u, g, m)) +
                (y < 0 ? 0 : (y *= y) * y * O.dot3(P, h, f)) +
                (N < 0 ? 0 : (N *= N) * N * A.dot3(S, T, E)) +
                (C < 0 ? 0 : (C *= C) * C * w.dot3(x, I, v)))
            );
          }),
          (t.prototype.perlin2 = function(n, t) {
            var e = Math.floor(n),
              c = Math.floor(t);
            (n -= e), (t -= c);
            var r = this.perm,
              a = this.gradP,
              o = a[(e &= 255) + r[(c &= 255)]].dot2(n, t),
              b = a[e + r[c + 1]].dot2(n, t - 1),
              l = a[e + 1 + r[c]].dot2(n - 1, t),
              d = a[e + 1 + r[c + 1]].dot2(n - 1, t - 1),
              p = i(n);
            return s(s(o, l, p), s(b, d, p), i(t));
          }),
          (t.prototype.perlin3 = function(n, t, e) {
            var c = Math.floor(n),
              r = Math.floor(t),
              a = Math.floor(e);
            (n -= c), (t -= r), (e -= a);
            var o = this.perm,
              b = this.gradP,
              l = b[(c &= 255) + o[(r &= 255) + o[(a &= 255)]]].dot3(n, t, e),
              d = b[c + o[r + o[a + 1]]].dot3(n, t, e - 1),
              p = b[c + o[r + 1 + o[a]]].dot3(n, t - 1, e),
              F = b[c + o[r + 1 + o[a + 1]]].dot3(n, t - 1, e - 1),
              u = b[c + 1 + o[r + o[a]]].dot3(n - 1, t, e),
              g = b[c + 1 + o[r + o[a + 1]]].dot3(n - 1, t, e - 1),
              m = b[c + 1 + o[r + 1 + o[a]]].dot3(n - 1, t - 1, e),
              P = b[c + 1 + o[r + 1 + o[a + 1]]].dot3(n - 1, t - 1, e - 1),
              h = i(n),
              f = i(t),
              S = i(e);
            return s(
              s(s(l, u, h), s(d, g, h), S),
              s(s(p, m, h), s(F, P, h), S),
              f
            );
          }),
          (n.Noise = t);
      })(n.exports);
    },
    kpBo: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return r;
      });
      var c = e('M0ag'),
        i = e('sYmb'),
        s = e('fXoL');
      let r = (() => {
        class n {}
        return (
          (n.ɵmod = s.Jb({ type: n })),
          (n.ɵinj = s.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[c.a, i.a.forChild()]]
          })),
          n
        );
      })();
    },
    mrcQ: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return l;
      });
      var c = e('fXoL'),
        i = e('sYmb'),
        s = e('ofXK'),
        r = e('AL06');
      function a(n, t) {
        if (
          (1 & n &&
            (c.Qb(0, 'li'),
            c.Fc(1, '\n                    '),
            c.Qb(2, 'div', 34),
            c.Fc(3, '\n                      '),
            c.Qb(4, 'div', 35),
            c.Fc(5, '\n                        '),
            c.Mb(6, 'dc-feather', 33),
            c.Fc(7, '\n                      '),
            c.Pb(),
            c.Fc(8, '\n\n                      '),
            c.Qb(9, 'div', 36),
            c.Fc(10),
            c.gc(11, 'translate'),
            c.Pb(),
            c.Fc(12, '\n                    '),
            c.Pb(),
            c.Fc(13, '\n                  '),
            c.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          c.xb(6),
            c.kc('name', n.icon)('size', 16)('iconClass', 'stroke-contrast'),
            c.xb(4),
            c.Hc(
              '\n                        ',
              c.hc(11, 4, n.name),
              '\n                      '
            );
        }
      }
      function o(n, t) {
        if (
          (1 & n &&
            (c.Qb(0, 'div', 23),
            c.Fc(1, '\n        '),
            c.Qb(2, 'div', 24),
            c.Fc(3, '\n          '),
            c.Qb(4, 'div', 11),
            c.Fc(5, '\n            '),
            c.Qb(6, 'div', 12),
            c.Fc(7, '\n              '),
            c.Qb(8, 'div', 25),
            c.Fc(9, '\n                '),
            c.Qb(10, 'div', 26),
            c.Fc(11, '\n                  '),
            c.Qb(12, 'h5', 27),
            c.Fc(13),
            c.gc(14, 'translate'),
            c.Pb(),
            c.Fc(15, '\n                  '),
            c.Mb(16, 'hr', 16),
            c.Fc(17, '\n\n                  '),
            c.Qb(18, 'p'),
            c.Fc(19),
            c.gc(20, 'translate'),
            c.Pb(),
            c.Fc(21, '\n\n                  '),
            c.Qb(22, 'div', 28),
            c.Fc(23, '\n                    '),
            c.Qb(24, 'span', 29),
            c.Fc(25),
            c.Pb(),
            c.Fc(26, '\n                  '),
            c.Pb(),
            c.Fc(27, '\n                '),
            c.Pb(),
            c.Fc(28, '\n\n                '),
            c.Qb(29, 'ul', 30),
            c.Fc(30, '\n                  '),
            c.Dc(31, a, 14, 6, 'li', 31),
            c.Fc(32, '\n                '),
            c.Pb(),
            c.Fc(33, '\n              '),
            c.Pb(),
            c.Fc(34, '\n            '),
            c.Pb(),
            c.Fc(35, '\n          '),
            c.Pb(),
            c.Fc(36, '\n\n          '),
            c.Qb(37, 'a', 32),
            c.Fc(38),
            c.gc(39, 'translate'),
            c.Mb(40, 'dc-feather', 33),
            c.Fc(41, '\n          '),
            c.Pb(),
            c.Fc(42, '\n        '),
            c.Pb(),
            c.Fc(43, '\n      '),
            c.Pb()),
          2 & n)
        ) {
          const n = t.$implicit,
            e = c.fc();
          c.Ab('col-md-', 12 / (e.plans.length + 1), ''),
            c.xb(13),
            c.Hc(
              '\n                    ',
              c.hc(14, 13, n.plan.name),
              '\n                  '
            ),
            c.xb(6),
            c.Gc(c.hc(20, 15, n.plan.description)),
            c.xb(5),
            c.yb('data-monthly-price', n.plan.price.monthly)(
              'data-yearly-price',
              n.plan.price.yearly
            ),
            c.xb(1),
            c.Hc(
              '\n                      ',
              n.plan.price.monthly,
              '\n                    '
            ),
            c.xb(6),
            c.kc('ngForOf', n.features),
            c.xb(7),
            c.Hc(
              '\n            ',
              c.hc(39, 17, 'DEMOS.START_UP.PRICING_TWO.GETNOW'),
              '\n\n            '
            ),
            c.xb(2),
            c.kc('name', 'arrow-right')('size', 16)('iconClass', 'ml-3');
        }
      }
      function b(n, t) {
        if (
          (1 & n &&
            (c.Qb(0, 'div'),
            c.Fc(1, '\n                      '),
            c.Qb(2, 'div', 37),
            c.Fc(3, '\n                        '),
            c.Mb(4, 'dc-feather', 33),
            c.Fc(5, '\n                        '),
            c.Qb(6, 'p', 38),
            c.Fc(7),
            c.gc(8, 'translate'),
            c.Pb(),
            c.Fc(9, '\n                      '),
            c.Pb(),
            c.Fc(10, '\n                    '),
            c.Pb()),
          2 & n)
        ) {
          const n = t.$implicit,
            e = t.index;
          c.Ab('col-6 border-', n.border, ''),
            c.Db('border-top', e > 1),
            c.xb(4),
            c.kc('name', n.icon)('size', 32)('iconClass', 'stroke-primary'),
            c.xb(3),
            c.Gc(c.hc(8, 9, n.title));
        }
      }
      let l = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
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
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(c.Lb(i.c));
          }),
          (n.ɵcmp = c.Fb({
            type: n,
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
              [1, 'price', 'display-lg-4', 'semibold', 'odometer', 'text-dark'],
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
                (c.Qb(0, 'section', 0),
                c.Fc(1, '\n  '),
                c.Qb(2, 'div', 1),
                c.Fc(3, '\n    '),
                c.Qb(4, 'div', 2),
                c.Fc(5, '\n      '),
                c.Qb(6, 'div', 3),
                c.Fc(7, '\n        '),
                c.Qb(8, 'div', 4),
                c.Fc(9, '\n          '),
                c.Qb(10, 'h2'),
                c.Fc(11, '\n            '),
                c.Qb(12, 'p', 5),
                c.Fc(13),
                c.gc(14, 'translate'),
                c.Qb(15, 'span', 6),
                c.Fc(16),
                c.gc(17, 'translate'),
                c.Pb(),
                c.Fc(18, '\n            '),
                c.Pb(),
                c.Fc(19, '\n            '),
                c.Qb(20, 'p', 6),
                c.Fc(21),
                c.gc(22, 'translate'),
                c.Qb(23, 'span', 5),
                c.Fc(24),
                c.gc(25, 'translate'),
                c.Pb(),
                c.Fc(26, '\n            '),
                c.Pb(),
                c.Fc(27, '\n            '),
                c.Qb(28, 'p', 6),
                c.Fc(29),
                c.gc(30, 'translate'),
                c.Qb(31, 'span', 5),
                c.Fc(32),
                c.gc(33, 'translate'),
                c.Pb(),
                c.Fc(34, '\n            '),
                c.Pb(),
                c.Fc(35, '\n          '),
                c.Pb(),
                c.Fc(36, '\n\n          '),
                c.Qb(37, 'p', 7),
                c.Fc(38),
                c.gc(39, 'translate'),
                c.Pb(),
                c.Fc(40, '\n        '),
                c.Pb(),
                c.Fc(41, '\n      '),
                c.Pb(),
                c.Fc(42, '\n\n      '),
                c.Fc(43, '\n    '),
                c.Pb(),
                c.Fc(44, '\n\n    '),
                c.Qb(45, 'div', 8),
                c.Fc(46, '\n      '),
                c.Dc(47, o, 44, 19, 'div', 9),
                c.Fc(48, '\n\n      '),
                c.Qb(49, 'div'),
                c.Fc(50, '\n        '),
                c.Qb(51, 'div', 10),
                c.Fc(52, '\n          '),
                c.Qb(53, 'div', 11),
                c.Fc(54, '\n            '),
                c.Qb(55, 'div', 12),
                c.Fc(56, '\n              '),
                c.Qb(57, 'div', 13),
                c.Fc(58, '\n                '),
                c.Qb(59, 'div', 14),
                c.Fc(60, '\n                  '),
                c.Qb(61, 'h5', 15),
                c.Fc(62),
                c.gc(63, 'translate'),
                c.Pb(),
                c.Fc(64, '\n                  '),
                c.Mb(65, 'hr', 16),
                c.Fc(66, '\n\n                  '),
                c.Qb(67, 'p', 17),
                c.Fc(68),
                c.gc(69, 'translate'),
                c.Pb(),
                c.Fc(70, '\n\n                  '),
                c.Qb(71, 'p', 18),
                c.Fc(72),
                c.gc(73, 'translate'),
                c.Pb(),
                c.Fc(74, '\n\n                  '),
                c.Qb(75, 'div', 19),
                c.Fc(76, '\n                    '),
                c.Dc(77, b, 11, 11, 'div', 20),
                c.Fc(78, '\n                  '),
                c.Pb(),
                c.Fc(79, '\n                '),
                c.Pb(),
                c.Fc(80, '\n              '),
                c.Pb(),
                c.Fc(81, '\n            '),
                c.Pb(),
                c.Fc(82, '\n          '),
                c.Pb(),
                c.Fc(83, '\n\n          '),
                c.Qb(84, 'a', 21),
                c.Fc(85),
                c.gc(86, 'translate'),
                c.Mb(87, 'dc-feather', 22),
                c.Fc(88, '\n          '),
                c.Pb(),
                c.Fc(89, '\n        '),
                c.Pb(),
                c.Fc(90, '\n      '),
                c.Pb(),
                c.Fc(91, '\n    '),
                c.Pb(),
                c.Fc(92, '\n  '),
                c.Pb(),
                c.Fc(93, '\n'),
                c.Pb(),
                c.Fc(94, '\n')),
                2 & n &&
                  (c.xb(13),
                  c.Hc(
                    '\n              ',
                    c.hc(14, 16, 'DEMOS.START_UP.PRICING_TWO.TITLE0'),
                    '\n              '
                  ),
                  c.xb(3),
                  c.Gc(c.hc(17, 18, 'DEMOS.START_UP.PRICING_TWO.TITLE01')),
                  c.xb(5),
                  c.Hc(
                    '\n              ',
                    c.hc(22, 20, 'DEMOS.START_UP.PRICING_TWO.TITLE1'),
                    '\n              '
                  ),
                  c.xb(3),
                  c.Gc(c.hc(25, 22, 'DEMOS.START_UP.PRICING_TWO.TITLE11')),
                  c.xb(5),
                  c.Hc(
                    '\n              ',
                    c.hc(30, 24, 'DEMOS.START_UP.PRICING_TWO.TITLE2'),
                    '\n              '
                  ),
                  c.xb(3),
                  c.Gc(c.hc(33, 26, 'DEMOS.START_UP.PRICING_TWO.TITLE22')),
                  c.xb(6),
                  c.Hc(
                    '\n            ',
                    c.hc(39, 28, 'DEMOS.START_UP.PRICING_TWO.SUBTITLE'),
                    '\n          '
                  ),
                  c.xb(9),
                  c.kc('ngForOf', t.plans),
                  c.xb(2),
                  c.Ab('col-md-', 12 / (t.plans.length + 1), ' ml-md-n3'),
                  c.xb(13),
                  c.Hc(
                    '\n                    ',
                    c.hc(63, 30, 'DEMOS.START_UP.PRICING_TWO.CUSTOM'),
                    '\n                  '
                  ),
                  c.xb(6),
                  c.Hc(
                    '\n                    ',
                    c.hc(69, 32, 'DEMOS.START_UP.PRICING_TWO.CUSTOM1'),
                    '\n                  '
                  ),
                  c.xb(4),
                  c.Hc(
                    '\n                    ',
                    c.hc(73, 34, 'DEMOS.START_UP.PRICING_TWO.CUSTOM2'),
                    '\n                  '
                  ),
                  c.xb(5),
                  c.kc('ngForOf', t.xtras),
                  c.xb(8),
                  c.Hc(
                    '',
                    c.hc(86, 36, 'DEMOS.START_UP.PRICING_TWO.CUSTOM3'),
                    '\n\n            '
                  ));
            },
            directives: [s.j, r.a],
            pipes: [i.b],
            styles: ['']
          })),
          n
        );
      })();
    },
    nEva: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return l;
      });
      var c = e('fXoL'),
        i = e('sYmb'),
        s = e('nhfI'),
        r = e('ofXK'),
        a = e('AL06');
      function o(n, t) {
        if (
          (1 & n &&
            (c.Qb(0, 'div', 15),
            c.Fc(1, '\n                '),
            c.Qb(2, 'figure', 16),
            c.Fc(3, '\n                  '),
            c.Mb(4, 'img', 17),
            c.Fc(5, '\n                '),
            c.Pb(),
            c.Fc(6, '\n              '),
            c.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          c.xb(2),
            c.Cc(
              'background-image',
              'url(assets/img/testimonials/' + n.customer.picture + '.jpg)'
            ),
            c.xb(2),
            c.kc(
              'src',
              'assets/img/testimonials/' + n.customer.picture + '.jpg',
              c.yc
            );
        }
      }
      function b(n, t) {
        if (
          (1 & n &&
            (c.Qb(0, 'div', 15),
            c.Fc(1, '\n                '),
            c.Qb(2, 'div', 18),
            c.Fc(3, '\n                  '),
            c.Qb(4, 'blockquote', 19),
            c.Fc(5, '\n                    '),
            c.Qb(6, 'figure', 20),
            c.Fc(7, '\n                      '),
            c.Mb(8, 'img', 21),
            c.Fc(9, '\n                    '),
            c.Pb(),
            c.Fc(10, '\n\n                    '),
            c.Qb(11, 'p', 22),
            c.Fc(12),
            c.Pb(),
            c.Fc(13, '\n                    '),
            c.Qb(14, 'footer', 23),
            c.Fc(15, '\n                      '),
            c.Qb(16, 'span', 24),
            c.Fc(17),
            c.Pb(),
            c.Fc(18, '\n                    '),
            c.Pb(),
            c.Fc(19, '\n                  '),
            c.Pb(),
            c.Fc(20, '\n                '),
            c.Pb(),
            c.Fc(21, '\n              '),
            c.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          c.xb(8),
            c.kc('src', 'assets/img/logos/companies/' + n.logo + '.svg', c.yc),
            c.xb(4),
            c.Hc(
              '\n                      ',
              n.testimonial,
              '\n                    '
            ),
            c.xb(5),
            c.Gc(n.customer.name);
        }
      }
      let l = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
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
          ngOnInit() {}
          updateSlider(n) {
            this.currentSlide = n;
          }
          onIndexChange(n) {
            this.currentSlide = n;
          }
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(c.Lb(i.c));
          }),
          (n.ɵcmp = c.Fb({
            type: n,
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
                (c.Qb(0, 'section', 0),
                c.Fc(1, '\n  '),
                c.Qb(2, 'div', 1),
                c.Fc(3, '\n    '),
                c.Qb(4, 'div', 2),
                c.Fc(5, '\n      '),
                c.Qb(6, 'h2'),
                c.Fc(7),
                c.gc(8, 'translate'),
                c.Pb(),
                c.Fc(9, '\n\n      '),
                c.Qb(10, 'p', 3),
                c.Fc(11),
                c.gc(12, 'translate'),
                c.Pb(),
                c.Fc(13, '\n    '),
                c.Pb(),
                c.Fc(14, '\n\n    '),
                c.Qb(15, 'div', 4),
                c.Fc(16, '\n      '),
                c.Qb(17, 'div', 5),
                c.Fc(18, '\n        '),
                c.Qb(19, 'div', 6),
                c.Fc(20, '\n          '),
                c.Fc(21, '\n          '),
                c.Qb(22, 'div', 7),
                c.Fc(23, '\n            '),
                c.Qb(24, 'div', 8),
                c.Fc(25, '\n              '),
                c.Dc(26, o, 7, 3, 'div', 9),
                c.Fc(27, '\n            '),
                c.Pb(),
                c.Fc(28, '\n\n            '),
                c.Qb(29, 'div', 10),
                c.Fc(30, '\n              '),
                c.Mb(31, 'div'),
                c.Fc(32, '\n            '),
                c.Pb(),
                c.Fc(33, '\n          '),
                c.Pb(),
                c.Fc(34, '\n\n          '),
                c.Fc(35, '\n          '),
                c.Qb(36, 'div', 11),
                c.Fc(37, '\n            '),
                c.Mb(38, 'dc-feather', 12),
                c.Fc(39, '\n          '),
                c.Pb(),
                c.Fc(40, '\n        '),
                c.Pb(),
                c.Fc(41, '\n\n        '),
                c.Qb(42, 'div', 6),
                c.Fc(43, '\n          '),
                c.Fc(44, '\n          '),
                c.Qb(45, 'div', 13),
                c.bc('indexChange', function(n) {
                  return t.onIndexChange(n);
                }),
                c.Fc(46, '\n            '),
                c.Qb(47, 'div', 8),
                c.Fc(48, '\n              '),
                c.Dc(49, b, 22, 3, 'div', 9),
                c.Fc(50, '\n            '),
                c.Pb(),
                c.Fc(51, '\n          '),
                c.Pb(),
                c.Fc(52, '\n\n          '),
                c.Fc(53, '\n          '),
                c.Qb(54, 'div', 14),
                c.Fc(55, '\n            '),
                c.Mb(56, 'dc-feather', 12),
                c.Fc(57, '\n          '),
                c.Pb(),
                c.Fc(58, '\n        '),
                c.Pb(),
                c.Fc(59, '\n      '),
                c.Pb(),
                c.Fc(60, '\n    '),
                c.Pb(),
                c.Fc(61, '\n  '),
                c.Pb(),
                c.Fc(62, '\n'),
                c.Pb(),
                c.Fc(63, '\n')),
                2 & n &&
                  (c.xb(7),
                  c.Hc(
                    '\n        ',
                    c.hc(
                      8,
                      11,
                      'TESTIMONIALS.TESTIMONIAL_SKEWED_SLIDER.OUR_CUSTOMERS_HAVE_SOMETHING_TO_SAY'
                    ),
                    '\n      '
                  ),
                  c.xb(4),
                  c.Hc(
                    '\n        ',
                    c.hc(
                      12,
                      13,
                      'TESTIMONIALS.TESTIMONIAL_SKEWED_SLIDER.THEY_ARE_THE_BEST'
                    ),
                    '\n      '
                  ),
                  c.xb(11),
                  c.kc('swiper', t.fadingConfig)('index', t.currentSlide),
                  c.xb(4),
                  c.kc('ngForOf', t.testimonials),
                  c.xb(12),
                  c.kc('name', 'arrow-left')('size', 24),
                  c.xb(7),
                  c.kc('swiper', t.slidingConfig),
                  c.xb(4),
                  c.kc('ngForOf', t.testimonials),
                  c.xb(7),
                  c.kc('name', 'arrow-right')('size', 24));
            },
            directives: [s.b, r.j, a.a],
            pipes: [i.b],
            styles: ['']
          })),
          n
        );
      })();
    },
    'q+Ce': function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return s;
      });
      var c = e('fXoL'),
        i = e('sYmb');
      let s = (() => {
        class n {
          constructor(n) {
            this.translate = n;
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(c.Lb(i.c));
          }),
          (n.ɵcmp = c.Fb({
            type: n,
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
                (c.Qb(0, 'section', 0),
                c.Fc(1, '\n  '),
                c.Qb(2, 'div', 1),
                c.Fc(3, '\n    '),
                c.Qb(4, 'div', 2),
                c.Fc(5, '\n      '),
                c.Qb(6, 'h2', 3),
                c.Fc(7),
                c.gc(8, 'translate'),
                c.Pb(),
                c.Fc(9, '\n      '),
                c.Qb(10, 'p', 4),
                c.Fc(11),
                c.gc(12, 'translate'),
                c.Pb(),
                c.Fc(13, '\n\n      '),
                c.Qb(14, 'a', 5),
                c.Fc(15),
                c.gc(16, 'translate'),
                c.Pb(),
                c.Fc(17, '\n    '),
                c.Pb(),
                c.Fc(18, '\n  '),
                c.Pb(),
                c.Fc(19, '\n'),
                c.Pb(),
                c.Fc(20, '\n')),
                2 & n &&
                  (c.xb(7),
                  c.Hc(
                    '\n        ',
                    c.hc(8, 3, 'USUAL.START_NOW_BOX.TRY_EVERYTHINK_NOW'),
                    '\n      '
                  ),
                  c.xb(4),
                  c.Hc(
                    '\n        ',
                    c.hc(12, 5, 'USUAL.START_NOW_BOX.WHY_WAIT'),
                    '\n      '
                  ),
                  c.xb(4),
                  c.Hc(
                    '\n        ',
                    c.hc(16, 7, 'USUAL.START_NOW_BOX.START_NOW'),
                    '\n      '
                  ));
            },
            pipes: [i.b],
            styles: ['']
          })),
          n
        );
      })();
    },
    u8tZ: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return o;
      });
      var c = e('fXoL'),
        i = e('sYmb'),
        s = e('ofXK');
      function r(n, t) {
        if (
          (1 & n && (c.Qb(0, 'li'), c.Fc(1), c.gc(2, 'translate'), c.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          c.Ab('list-group-item ', n.class, ''),
            c.xb(1),
            c.Hc('\n              ', c.hc(2, 4, n.name), '\n            ');
        }
      }
      function a(n, t) {
        if (
          (1 & n &&
            (c.Qb(0, 'div', 6),
            c.Fc(1, '\n        '),
            c.Qb(2, 'div', 7),
            c.Fc(3, '\n          '),
            c.Qb(4, 'div'),
            c.Fc(5, '\n            '),
            c.Qb(6, 'h4'),
            c.Fc(7),
            c.gc(8, 'translate'),
            c.Pb(),
            c.Fc(9, '\n\n            '),
            c.Fc(10, '\n\n            '),
            c.Qb(11, 'p'),
            c.Fc(12),
            c.gc(13, 'translate'),
            c.Pb(),
            c.Fc(14, '\n          '),
            c.Pb(),
            c.Fc(15, '\n\n          '),
            c.Qb(16, 'ul', 8),
            c.Fc(17, '\n            '),
            c.Dc(18, r, 3, 6, 'li', 9),
            c.Fc(19, '\n          '),
            c.Pb(),
            c.Fc(20, '\n\n          '),
            c.Qb(21, 'div', 10),
            c.Fc(22, '\n            '),
            c.Qb(23, 'a', 11),
            c.Fc(24),
            c.gc(25, 'translate'),
            c.Pb(),
            c.Fc(26, '\n          '),
            c.Pb(),
            c.Fc(27, '\n        '),
            c.Pb(),
            c.Fc(28, '\n      '),
            c.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          c.xb(4),
            c.zb(
              'pricing card-header d-flex align-items-center flex-column ' +
                (n.best
                  ? 'bg-primary-gradient text-contrast'
                  : 'bg-light-gradient')
            ),
            c.xb(2),
            c.Db('text-contrast', n.best),
            c.xb(1),
            c.Hc(
              '\n              ',
              c.hc(8, 11, n.plan.name),
              '\n            '
            ),
            c.xb(5),
            c.Gc(c.hc(13, 13, n.plan.description)),
            c.xb(6),
            c.kc('ngForOf', n.features),
            c.xb(5),
            c.Ab('btn ', n.best ? 'btn-primary' : 'btn-outline-secondary', ''),
            c.xb(1),
            c.Hc(
              '\n              ',
              c.hc(25, 15, 'DEMOS.START_UP.PRICING.BUY'),
              '\n            '
            );
        }
      }
      let o = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
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
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(c.Lb(i.c));
          }),
          (n.ɵcmp = c.Fb({
            type: n,
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
                (c.Qb(0, 'section'),
                c.Fc(1, '\n  '),
                c.Qb(2, 'div', 0),
                c.Fc(3, '\n    '),
                c.Qb(4, 'div', 1),
                c.Fc(5, '\n      '),
                c.Qb(6, 'h2', 2),
                c.Fc(7),
                c.gc(8, 'translate'),
                c.Pb(),
                c.Fc(9, '\n      '),
                c.Qb(10, 'p', 3),
                c.Fc(11),
                c.gc(12, 'translate'),
                c.Pb(),
                c.Fc(13, '\n    '),
                c.Pb(),
                c.Fc(14, '\n\n    '),
                c.Qb(15, 'div', 4),
                c.Fc(16, '\n      '),
                c.Dc(17, a, 29, 17, 'div', 5),
                c.Fc(18, '\n    '),
                c.Pb(),
                c.Fc(19, '\n  '),
                c.Pb(),
                c.Fc(20, '\n'),
                c.Pb(),
                c.Fc(21, '\n')),
                2 & n &&
                  (c.xb(7),
                  c.Gc(c.hc(8, 3, 'DEMOS.START_UP.PRICING.TITLE')),
                  c.xb(4),
                  c.Hc(
                    '\n        ',
                    c.hc(12, 5, 'DEMOS.START_UP.PRICING.SUBTITLE'),
                    '\n      '
                  ),
                  c.xb(6),
                  c.kc('ngForOf', t.plans));
            },
            directives: [s.j],
            pipes: [i.b],
            styles: ['']
          })),
          n
        );
      })();
    }
  }
]);
