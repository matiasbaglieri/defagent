(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    '2d4A': function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return r;
      });
      var c = e('nhfI'),
        i = e('6NWb'),
        s = e('M0ag'),
        a = e('sYmb'),
        o = e('fXoL');
      let r = (() => {
        class n {}
        return (
          (n.ɵmod = o.Jb({ type: n })),
          (n.ɵinj = o.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[c.c, i.b, s.a, a.a.forChild()]]
          })),
          n
        );
      })();
    },
    '8klf': function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return o;
      });
      var c = e('M0ag'),
        i = e('tyNb'),
        s = e('sYmb'),
        a = e('fXoL');
      let o = (() => {
        class n {}
        return (
          (n.ɵmod = a.Jb({ type: n })),
          (n.ɵinj = a.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[c.a, i.g, s.a.forChild()]]
          })),
          n
        );
      })();
    },
    LcuH: function(n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, 'IntegrationModule', function() {
          return z;
        });
      var c = e('M0ag'),
        i = e('ORAR'),
        s = e('2d4A'),
        a = e('pu65'),
        o = e('M0Rk'),
        r = e('8klf'),
        b = e('XMwz'),
        d = e('tyNb'),
        F = e('ey9i'),
        l = e('fXoL'),
        p = e('8ynp'),
        m = e('sYmb'),
        g = e('ofXK'),
        u = e('N7aX'),
        O = e('jhN1');
      let h = (() => {
        class n {
          constructor(n, t) {
            (this.sanitizer = n),
              (this.bubblesService = t),
              (this.onUpdate = new l.n()),
              (this.noiseSeedX = Math.floor(64e3 * Math.random())),
              (this.noiseSeedY = Math.floor(64e3 * Math.random())),
              (this.noise = this.bubblesService.noise);
          }
          ngOnInit() {
            requestAnimationFrame(this.update.bind(this));
          }
          update() {
            this.animateBubble(), requestAnimationFrame(this.update.bind(this));
          }
          animateBubble() {
            (this.noiseSeedX += 0.004), (this.noiseSeedY += 0.004);
            let n = this.noise.simplex2(this.noiseSeedX, 0),
              t = this.noise.simplex2(this.noiseSeedY, 0);
            (this.spec.x -= 0.3),
              (this.transformStyle = this.sanitizer.bypassSecurityTrustStyle(
                'translate(' +
                  (this.spec.x + 5 * n) +
                  'px, ' +
                  (this.spec.y + 5 * t) +
                  'px) scale(' +
                  (this.spec.s || 1) +
                  ')'
              )),
              this.spec.x < -200 && (this.spec.x = 2800),
              this.onUpdate.emit(this.spec);
          }
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(l.Lb(O.b), l.Lb(u.a));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
            selectors: [['dc-bubble']],
            inputs: { index: 'index', spec: 'spec' },
            outputs: { onUpdate: 'onUpdate' },
            decls: 2,
            vars: 5,
            template: function(n, t) {
              1 & n && (l.Mb(0, 'div'), l.Fc(1, '\n')),
                2 & n &&
                  (l.Ab('bubble bubble-', t.index, ''),
                  l.Cc('transform', t.transformStyle));
            },
            styles: ['']
          })),
          n
        );
      })();
      function f(n, t) {
        if ((1 & n && l.Mb(0, 'dc-bubble', 3), 2 & n)) {
          const n = t.$implicit;
          l.kc('index', t.index + 1)('spec', n);
        }
      }
      let T = (() => {
          class n {
            constructor() {
              this.bubbles = [
                { s: 0.6, x: 1134, y: 45 },
                { s: 0.6, x: 1620, y: 271 },
                { s: 0.6, x: 1761, y: 372 },
                { s: 0.6, x: 2499, y: 79 },
                { s: 0.6, x: 2704, y: 334 },
                { s: 0.6, x: 2271, y: 356 },
                { s: 0.6, x: 795, y: 226 },
                { s: 0.6, x: 276, y: 256 },
                { s: 0.6, x: 1210, y: 365 },
                { s: 0.6, x: 444, y: 193 },
                { s: 0.6, x: 2545, y: 387 },
                { s: 0.8, x: 1303, y: 193 },
                { s: 0.8, x: 907, y: 88 },
                { s: 0.8, x: 633, y: 320 },
                { s: 0.8, x: 323, y: 60 },
                { s: 0.8, x: 129, y: 357 },
                { s: 0.8, x: 1440, y: 342 },
                { s: 0.8, x: 1929, y: 293 },
                { s: 0.8, x: 2135, y: 198 },
                { s: 0.8, x: 2276, y: 82 },
                { s: 0.8, x: 2654, y: 182 },
                { s: 0.8, x: 2783, y: 60 },
                { x: 1519, y: 118 },
                { x: 1071, y: 233 },
                { x: 1773, y: 148 },
                { x: 2098, y: 385 },
                { x: 2423, y: 244 },
                { x: 901, y: 385 },
                { x: 624, y: 111 },
                { x: 75, y: 103 },
                { x: 413, y: 367 },
                { x: 2895, y: 271 },
                { x: 1990, y: 75 }
              ];
            }
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(t) {
              return new (t || n)();
            }),
            (n.ɵcmp = l.Fb({
              type: n,
              selectors: [['dc-integration-bubbles']],
              decls: 8,
              vars: 1,
              consts: [
                [1, 'bubbles-wrap'],
                [1, 'bubbles-container'],
                [3, 'index', 'spec', 4, 'ngFor', 'ngForOf'],
                [3, 'index', 'spec']
              ],
              template: function(n, t) {
                1 & n &&
                  (l.Qb(0, 'div', 0),
                  l.Fc(1, '\n  '),
                  l.Qb(2, 'div', 1),
                  l.Fc(3, '\n    '),
                  l.Dc(4, f, 1, 2, 'dc-bubble', 2),
                  l.Fc(5, '\n  '),
                  l.Pb(),
                  l.Fc(6, '\n'),
                  l.Pb(),
                  l.Fc(7, '\n')),
                  2 & n && (l.xb(4), l.kc('ngForOf', t.bubbles));
              },
              directives: [g.j, h],
              styles: ['']
            })),
            n
          );
        })(),
        E = (() => {
          class n {
            constructor(n) {
              this.translate = n;
            }
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(t) {
              return new (t || n)(l.Lb(m.c));
            }),
            (n.ɵcmp = l.Fb({
              type: n,
              selectors: [['dc-integration-heading']],
              decls: 72,
              vars: 9,
              consts: [
                [1, 'header', 'integrations-header', 'section'],
                [1, 'shapes-container'],
                [
                  'data-aos',
                  'fade-down',
                  'data-aos-delay',
                  '200',
                  1,
                  'shape',
                  'shape-circle',
                  'shape-circle-1'
                ],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '300',
                  1,
                  'shape',
                  'shape-circle',
                  'shape-circle-2'
                ],
                [
                  'data-aos',
                  'flip-right',
                  'data-aos-delay',
                  '400',
                  1,
                  'shape',
                  'shape-square',
                  'shape-square-1'
                ],
                [
                  'data-aos',
                  'flip-left',
                  'data-aos-delay',
                  '400',
                  1,
                  'shape',
                  'shape-square',
                  'shape-square-2'
                ],
                [
                  'data-aos',
                  'flip-left',
                  'data-aos-delay',
                  '200',
                  1,
                  'shape',
                  'shape-square',
                  'shape-square-3'
                ],
                [1, 'shape', 'shape-ring', 'shape-ring-1'],
                [1, 'shape', 'shape-ring', 'shape-ring-2'],
                [1, 'shape', 'pattern', 'pattern-dots'],
                [1, 'static-shape', 'background-shape-main'],
                [1, 'container'],
                [1, 'row'],
                [1, 'col-md-10', 'mx-auto', 'text-center'],
                [1, 'bold', 'font-md', 'font-md-lg'],
                [1, 'lead', 'text-muted'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'btn',
                  'btn-primary',
                  'btn-lg',
                  'btn-rounded',
                  'bold',
                  'px-4',
                  'mt-4'
                ]
              ],
              template: function(n, t) {
                1 & n &&
                  (l.Fc(0, '\n'),
                  l.Qb(1, 'header', 0),
                  l.Fc(2, '\n  '),
                  l.Qb(3, 'div', 1),
                  l.Fc(4, '\n    '),
                  l.Qb(5, 'div', 2),
                  l.Fc(6, '\n      '),
                  l.Mb(7, 'div'),
                  l.Fc(8, '\n    '),
                  l.Pb(),
                  l.Fc(9, '\n    '),
                  l.Qb(10, 'div', 3),
                  l.Fc(11, '\n      '),
                  l.Mb(12, 'div'),
                  l.Fc(13, '\n    '),
                  l.Pb(),
                  l.Fc(14, '\n\n    '),
                  l.Qb(15, 'div', 4),
                  l.Fc(16, '\n      '),
                  l.Mb(17, 'div'),
                  l.Fc(18, '\n    '),
                  l.Pb(),
                  l.Fc(19, '\n    '),
                  l.Qb(20, 'div', 5),
                  l.Fc(21, '\n      '),
                  l.Mb(22, 'div'),
                  l.Fc(23, '\n    '),
                  l.Pb(),
                  l.Fc(24, '\n    '),
                  l.Qb(25, 'div', 6),
                  l.Fc(26, '\n      '),
                  l.Mb(27, 'div'),
                  l.Fc(28, '\n    '),
                  l.Pb(),
                  l.Fc(29, '\n\n    '),
                  l.Qb(30, 'div', 7),
                  l.Fc(31, '\n      '),
                  l.Mb(32, 'div'),
                  l.Fc(33, '\n    '),
                  l.Pb(),
                  l.Fc(34, '\n    '),
                  l.Qb(35, 'div', 8),
                  l.Fc(36, '\n      '),
                  l.Mb(37, 'div'),
                  l.Fc(38, '\n    '),
                  l.Pb(),
                  l.Fc(39, '\n\n    '),
                  l.Qb(40, 'div', 9),
                  l.Fc(41, '\n      '),
                  l.Mb(42, 'div'),
                  l.Fc(43, '\n    '),
                  l.Pb(),
                  l.Fc(44, '\n\n    '),
                  l.Mb(45, 'div', 10),
                  l.Fc(46, '\n  '),
                  l.Pb(),
                  l.Fc(47, '\n\n  '),
                  l.Qb(48, 'div', 11),
                  l.Fc(49, '\n    '),
                  l.Qb(50, 'div', 12),
                  l.Fc(51, '\n      '),
                  l.Qb(52, 'div', 13),
                  l.Fc(53, '\n        '),
                  l.Qb(54, 'h1', 14),
                  l.Fc(55),
                  l.gc(56, 'translate'),
                  l.Pb(),
                  l.Fc(57, '\n        '),
                  l.Qb(58, 'p', 15),
                  l.Fc(59),
                  l.gc(60, 'translate'),
                  l.Pb(),
                  l.Fc(61, '\n\n        '),
                  l.Qb(62, 'a', 16),
                  l.Fc(63),
                  l.gc(64, 'translate'),
                  l.Pb(),
                  l.Fc(65, '\n      '),
                  l.Pb(),
                  l.Fc(66, '\n    '),
                  l.Pb(),
                  l.Fc(67, '\n  '),
                  l.Pb(),
                  l.Fc(68, '\n\n  '),
                  l.Mb(69, 'dc-integration-bubbles'),
                  l.Fc(70, '\n'),
                  l.Pb(),
                  l.Fc(71, '\n')),
                  2 & n &&
                    (l.xb(55),
                    l.Hc(
                      '\n          ',
                      l.hc(
                        56,
                        3,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.HEADING.CREATE_EMOTIONS_FOR_SMART_ASSISTANTS'
                      ),
                      '\n        '
                    ),
                    l.xb(4),
                    l.Hc(
                      '\n          ',
                      l.hc(
                        60,
                        5,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.HEADING.CREATE_BUY_AND_SELL'
                      ),
                      '\n        '
                    ),
                    l.xb(4),
                    l.Hc(
                      '\n          ',
                      l.hc(
                        64,
                        7,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.HEADING.JOIN_EVERY_TTHINK'
                      ),
                      ''
                    ));
              },
              directives: [T],
              pipes: [m.b],
              styles: [
                '.integrations-header[_ngcontent-%COMP%]{padding-top:90px}'
              ]
            })),
            n
          );
        })();
      function v(n, t) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 9),
            l.Fc(1, '\n        '),
            l.Qb(2, 'div', 10),
            l.Fc(3, '\n          '),
            l.Mb(4, 'div', 11),
            l.Fc(5, '\n        '),
            l.Pb(),
            l.Fc(6, '\n        '),
            l.Qb(7, 'figure', 12),
            l.Fc(8, '\n          '),
            l.Mb(9, 'img', 13),
            l.Fc(10, '\n        '),
            l.Pb(),
            l.Fc(11, '\n\n        '),
            l.Qb(12, 'h5', 5),
            l.Fc(13),
            l.Pb(),
            l.Fc(14, '\n        '),
            l.Qb(15, 'p', 14),
            l.Fc(16),
            l.Pb(),
            l.Fc(17, '\n      '),
            l.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          l.xb(9),
            l.kc(
              'src',
              'assets/images/integration/steps/' + n.icon + '.svg',
              l.yc
            ),
            l.xb(4),
            l.Gc(n.title),
            l.xb(3),
            l.Gc(n.description);
        }
      }
      let S = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
              (this.elements = [
                {
                  icon: 'plan',
                  title: 'Create',
                  description:
                    'EveryThink Studio allows you to develop data flows quickly and smoothly, in a spreadsheet. No technical, programming or scripting skills required.'
                },
                {
                  icon: 'payment',
                  title: 'Buy',
                  description:
                    'Find a wide variety of data flows created by 3rd party developers and certified by EveryThink. Find the interactions you need, see how it works, purchase it and implement it in your business in real-time.'
                },
                {
                  icon: 'work',
                  title: 'Sell',
                  description:
                    'Market the data flows created by you! Helps automate more and more interactions; and also get your reward!'
                }
              ]);
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(l.Lb(m.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
            selectors: [['dc-integration-how-it-works']],
            decls: 30,
            vars: 7,
            consts: [
              ['id', 'features', 1, 'section', 'how-it-works'],
              [1, 'shapes-container'],
              ['data-aos', 'fade-right', 1, 'shape', 'shape-ring'],
              [1, 'container'],
              [1, 'section-heading', 'text-center'],
              [1, 'bold'],
              [1, 'lead', 'text-secondary'],
              [1, 'row', 'gap-y', 'text-center', 'text-md-left'],
              ['class', 'col-md-4 py-4 text-center', 4, 'ngFor', 'ngForOf'],
              [1, 'col-md-4', 'py-4', 'text-center'],
              [1, 'shapes-figure', 'shapes-container'],
              [1, 'shape', 'shape-circle', 'center-x'],
              [1, 'mockup', 'mb-4'],
              [1, 'mb-3', 'image-responsive', 3, 'src'],
              [1, 'text-muted']
            ],
            template: function(n, t) {
              1 & n &&
                (l.Qb(0, 'section', 0),
                l.Fc(1, '\n  '),
                l.Qb(2, 'div', 1),
                l.Fc(3, '\n    '),
                l.Qb(4, 'div', 2),
                l.Fc(5, '\n      '),
                l.Mb(6, 'div'),
                l.Fc(7, '\n    '),
                l.Pb(),
                l.Fc(8, '\n  '),
                l.Pb(),
                l.Fc(9, '\n\n  '),
                l.Qb(10, 'div', 3),
                l.Fc(11, '\n    '),
                l.Qb(12, 'div', 4),
                l.Fc(13, '\n      '),
                l.Qb(14, 'h2', 5),
                l.Fc(15),
                l.gc(16, 'translate'),
                l.Pb(),
                l.Fc(17, '\n      '),
                l.Qb(18, 'p', 6),
                l.Fc(19),
                l.gc(20, 'translate'),
                l.Pb(),
                l.Fc(21, '\n    '),
                l.Pb(),
                l.Fc(22, '\n\n    '),
                l.Qb(23, 'div', 7),
                l.Fc(24, '\n      '),
                l.Dc(25, v, 18, 3, 'div', 8),
                l.Fc(26, '\n    '),
                l.Pb(),
                l.Fc(27, '\n  '),
                l.Pb(),
                l.Fc(28, '\n'),
                l.Pb(),
                l.Fc(29, '\n')),
                2 & n &&
                  (l.xb(15),
                  l.Hc(
                    '\n        ',
                    l.hc(
                      16,
                      3,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.HOW_IT_WORK.KNOW_WHAT_YOU_CAN_DO_WITH_US'
                    ),
                    '\n      '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n        ',
                    l.hc(
                      20,
                      5,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.HOW_IT_WORK.EVERYTHINK_DOES_ALL'
                    ),
                    '\n      '
                  ),
                  l.xb(6),
                  l.kc('ngForOf', t.elements));
            },
            directives: [g.j],
            pipes: [m.b],
            styles: ['']
          })),
          n
        );
      })();
      var y = e('AL06');
      function A(n, t) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 24),
            l.Fc(1, '\n                  '),
            l.Qb(2, 'figure', 25),
            l.Fc(3, '\n                    '),
            l.Mb(4, 'img', 26),
            l.Fc(5, '\n                  '),
            l.Pb(),
            l.Fc(6, '\n                '),
            l.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          l.xb(4),
            l.kc(
              'src',
              'assets/images/integration/logos/' + n.image + '.svg',
              l.yc
            );
        }
      }
      function x(n, t) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 27),
            l.Fc(1, '\n            '),
            l.Qb(2, 'div', 28),
            l.Fc(3, '\n              '),
            l.Qb(4, 'div', 29),
            l.Fc(5, '\n                '),
            l.Mb(6, 'dc-feather', 30),
            l.Fc(7, '\n              '),
            l.Pb(),
            l.Fc(8, '\n              '),
            l.Qb(9, 'div', 31),
            l.Fc(10, '\n                '),
            l.Qb(11, 'h5'),
            l.Fc(12),
            l.Pb(),
            l.Fc(13, '\n                '),
            l.Qb(14, 'p'),
            l.Fc(15),
            l.Pb(),
            l.Fc(16, '\n              '),
            l.Pb(),
            l.Fc(17, '\n            '),
            l.Pb(),
            l.Fc(18, '\n          '),
            l.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          l.xb(6),
            l.kc('name', n.icon)('iconClass', 'stroke-primary'),
            l.xb(6),
            l.Gc(n.title),
            l.xb(3),
            l.Gc(n.description);
        }
      }
      let P = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
              (this.stacks = [
                { name: 'Javascript', image: 'javascript' },
                { name: 'Javascript', image: 'es6' },
                { name: 'Styles', image: 'node-sass' }
              ]),
              (this.items = [
                {
                  icon: 'activity',
                  title: 'Activity',
                  description: 'Get instant insight'
                },
                {
                  icon: 'upload-cloud',
                  title: 'Deploy',
                  description: 'Deploy your data flows'
                },
                {
                  icon: 'zap',
                  title: 'Fast',
                  description: 'Development lighting fast'
                },
                {
                  icon: 'hexagon',
                  title: 'Technology',
                  description: 'Ultimate technology'
                }
              ]);
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(l.Lb(m.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
            selectors: [['dc-integration-built-tech']],
            decls: 92,
            vars: 17,
            consts: [
              [1, 'section', 'built-tech'],
              [1, 'container'],
              [1, 'shapes-container'],
              ['data-aos', 'fade-up', 1, 'shape', 'shape-circle'],
              [1, 'row'],
              [1, 'col-md-6', 'col-lg-7'],
              [1, 'card', 'shadow', 'border-0'],
              [1, 'card-body'],
              [1, 'col-md-8', 'b-md-r'],
              [
                1,
                'badge',
                'badge-primary',
                'badge-pill',
                'bold',
                'px-4',
                'py-2'
              ],
              [1, 'mt-3'],
              [1, 'bold'],
              [1, 'text-muted'],
              [1, ''],
              [
                'src',
                'assets/images/integration/logos/webpack.svg',
                'alt',
                '',
                1,
                'img-responsive',
                'mx-auto'
              ],
              [
                1,
                'col-md-4',
                'd-flex',
                'flex-column',
                'justify-content-around'
              ],
              ['class', 'text-center', 4, 'ngFor', 'ngForOf'],
              [1, 'col-md-6', 'col-lg-5'],
              ['data-aos', 'fade-up', 1, 'shape', 'shape-ring', 'shape-ring-1'],
              [1, 'section-heading'],
              [1, 'mockup', 'ml-0'],
              ['src', 'assets/images/integration/tech-globe.svg', 'alt', ''],
              [1, 'my-3', 'font-md'],
              ['class', 'col-md-6', 4, 'ngFor', 'ngForOf'],
              [1, 'text-center'],
              [1, 'mockup'],
              ['alt', '', 3, 'src'],
              [1, 'col-md-6'],
              [1, 'media', 'pb-3'],
              [
                1,
                'bg-light',
                'p-3',
                'rounded',
                'd-flex',
                'align-items-center',
                'justify-content-center',
                'mr-3'
              ],
              [3, 'name', 'iconClass'],
              [1, 'media-body']
            ],
            template: function(n, t) {
              1 & n &&
                (l.Qb(0, 'section', 0),
                l.Fc(1, '\n  '),
                l.Qb(2, 'div', 1),
                l.Fc(3, '\n    '),
                l.Qb(4, 'div', 2),
                l.Fc(5, '\n      '),
                l.Qb(6, 'div', 3),
                l.Fc(7, '\n        '),
                l.Mb(8, 'div'),
                l.Fc(9, '\n      '),
                l.Pb(),
                l.Fc(10, '\n    '),
                l.Pb(),
                l.Fc(11, '\n\n    '),
                l.Qb(12, 'div', 4),
                l.Fc(13, '\n      '),
                l.Qb(14, 'div', 5),
                l.Fc(15, '\n        '),
                l.Qb(16, 'div', 6),
                l.Fc(17, '\n          '),
                l.Qb(18, 'div', 7),
                l.Fc(19, '\n            '),
                l.Qb(20, 'div', 4),
                l.Fc(21, '\n              '),
                l.Qb(22, 'div', 8),
                l.Fc(23, '\n                '),
                l.Qb(24, 'span', 9),
                l.Fc(25, 'Better tech'),
                l.Pb(),
                l.Fc(26, '\n                '),
                l.Qb(27, 'h2', 10),
                l.Fc(28, '\n                  '),
                l.Qb(29, 'span', 11),
                l.Fc(30),
                l.gc(31, 'translate'),
                l.Pb(),
                l.Fc(32),
                l.gc(33, 'translate'),
                l.Pb(),
                l.Fc(34, '\n                '),
                l.Qb(35, 'p', 12),
                l.Fc(36),
                l.gc(37, 'translate'),
                l.Pb(),
                l.Fc(38, '\n\n                '),
                l.Qb(39, 'figure', 13),
                l.Fc(40, '\n                  '),
                l.Mb(41, 'img', 14),
                l.Fc(42, '\n                '),
                l.Pb(),
                l.Fc(43, '\n              '),
                l.Pb(),
                l.Fc(44, '\n              '),
                l.Qb(45, 'div', 15),
                l.Fc(46, '\n                '),
                l.Dc(47, A, 7, 1, 'div', 16),
                l.Fc(48, '\n              '),
                l.Pb(),
                l.Fc(49, '\n            '),
                l.Pb(),
                l.Fc(50, '\n          '),
                l.Pb(),
                l.Fc(51, '\n        '),
                l.Pb(),
                l.Fc(52, '\n      '),
                l.Pb(),
                l.Fc(53, '\n\n      '),
                l.Qb(54, 'div', 17),
                l.Fc(55, '\n        '),
                l.Qb(56, 'div', 2),
                l.Fc(57, '\n          '),
                l.Qb(58, 'div', 18),
                l.Fc(59, '\n            '),
                l.Mb(60, 'div'),
                l.Fc(61, '\n          '),
                l.Pb(),
                l.Fc(62, '\n        '),
                l.Pb(),
                l.Fc(63, '\n\n        '),
                l.Qb(64, 'div', 19),
                l.Fc(65, '\n          '),
                l.Qb(66, 'figure', 20),
                l.Fc(67, '\n            '),
                l.Mb(68, 'img', 21),
                l.Fc(69, '\n          '),
                l.Pb(),
                l.Fc(70, '\n          '),
                l.Qb(71, 'h2', 22),
                l.Fc(72, '\n            '),
                l.Qb(73, 'span', 11),
                l.Fc(74),
                l.gc(75, 'translate'),
                l.Pb(),
                l.Fc(76, '\n          '),
                l.Pb(),
                l.Fc(77, '\n\n          '),
                l.Qb(78, 'p', 12),
                l.Fc(79),
                l.gc(80, 'translate'),
                l.Pb(),
                l.Fc(81, '\n        '),
                l.Pb(),
                l.Fc(82, '\n\n        '),
                l.Qb(83, 'div', 4),
                l.Fc(84, '\n          '),
                l.Dc(85, x, 19, 4, 'div', 23),
                l.Fc(86, '\n        '),
                l.Pb(),
                l.Fc(87, '\n      '),
                l.Pb(),
                l.Fc(88, '\n    '),
                l.Pb(),
                l.Fc(89, '\n  '),
                l.Pb(),
                l.Fc(90, '\n'),
                l.Pb(),
                l.Fc(91, '\n')),
                2 & n &&
                  (l.xb(30),
                  l.Gc(
                    l.hc(
                      31,
                      7,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.BUILT_TECH.INDUSTRY_LEADING'
                    )
                  ),
                  l.xb(2),
                  l.Hc(
                    '\n                  ',
                    l.hc(
                      33,
                      9,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.BUILT_TECH.TECHNOLOGY'
                    ),
                    '\n                '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n                  ',
                    l.hc(
                      37,
                      11,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.BUILT_TECH.EVERYTHINK_STUDIO'
                    ),
                    '\n                '
                  ),
                  l.xb(11),
                  l.kc('ngForOf', t.stacks),
                  l.xb(27),
                  l.Hc(
                    '',
                    l.hc(
                      75,
                      13,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.BUILT_TECH.ONE_STEP_AHEAD_OF_AIS'
                    ),
                    '\n            '
                  ),
                  l.xb(5),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      80,
                      15,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.BUILT_TECH.EMPOWER_THE_INTELLIGENT'
                    ),
                    '\n          '
                  ),
                  l.xb(6),
                  l.kc('ngForOf', t.items));
            },
            directives: [g.j, y.a],
            pipes: [m.b],
            styles: ['']
          })),
          n
        );
      })();
      const R = function(n, t) {
        return { 'left.%': n, 'top.%': t };
      };
      function I(n, t) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 12),
            l.Fc(1, '\n            '),
            l.Mb(2, 'img', 13),
            l.Fc(3, '\n          '),
            l.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          l.Ab(
            'floating icon ',
            n.size,
            ' bg-contrast rounded-circle p-3 shadow m-0 absolute d-flex justify-content-center align-items-center'
          ),
            l.kc('ngStyle', l.pc(5, R, n.position.left, n.position.top)),
            l.xb(2),
            l.kc('src', 'assets/images/integration/' + n.name + '.svg', l.yc);
        }
      }
      let Q = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
              (this.icons = [
                {
                  name: 'blossom',
                  size: 'icon-xl',
                  position: { left: 100, top: 30 }
                },
                {
                  name: 'dockbit',
                  size: 'icon-xxl',
                  position: { left: 60, top: -10 }
                },
                {
                  name: 'zapier',
                  size: 'icon-xxl',
                  position: { left: 25, top: 0 }
                },
                {
                  name: 'bitnami',
                  size: 'icon-2xl',
                  position: { left: 0, top: 50 }
                },
                {
                  name: 'slack',
                  size: 'icon-2xxl',
                  position: { left: 23, top: 70 }
                },
                {
                  name: 'monero',
                  size: 'icon-xxl',
                  position: { left: 65, top: 44 }
                },
                {
                  name: 'dropbox',
                  size: 'icon-xl',
                  position: { left: 95, top: 83 }
                }
              ]);
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(l.Lb(m.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
            selectors: [['dc-integration-extend-core']],
            decls: 51,
            vars: 16,
            consts: [
              [
                1,
                'section',
                'extending-core',
                'border-top',
                'bg-light',
                'edge',
                'bottom-right'
              ],
              [1, 'shapes-container'],
              [1, 'shape', 'shape-circle'],
              [1, 'container', 'pb-9'],
              [1, 'row', 'gap-y', 'align-items-center'],
              [1, 'col-lg-6'],
              [1, 'section-heading'],
              [1, 'text-primary', 'bold', 'small', 'text-uppercase'],
              [
                'href',
                '#',
                1,
                'btn',
                'btn-rounded',
                'btn-outline-primary',
                'bw-2',
                'mr-3'
              ],
              [
                'href',
                '#',
                1,
                'btn',
                'btn-rounded',
                'btn-primary',
                'bw-2',
                'bold',
                'text-contrast'
              ],
              [1, 'icons-wrapper', 'position-relative'],
              [
                'data-aos',
                'fade-left',
                3,
                'class',
                'ngStyle',
                4,
                'ngFor',
                'ngForOf'
              ],
              ['data-aos', 'fade-left', 3, 'ngStyle'],
              ['alt', '', 1, 'img-responsive', 3, 'src']
            ],
            template: function(n, t) {
              1 & n &&
                (l.Qb(0, 'section', 0),
                l.Fc(1, '\n  '),
                l.Qb(2, 'div', 1),
                l.Fc(3, '\n    '),
                l.Qb(4, 'div', 2),
                l.Fc(5, '\n      '),
                l.Mb(6, 'div'),
                l.Fc(7, '\n    '),
                l.Pb(),
                l.Fc(8, '\n  '),
                l.Pb(),
                l.Fc(9, '\n  '),
                l.Qb(10, 'div', 3),
                l.Fc(11, '\n    '),
                l.Qb(12, 'div', 4),
                l.Fc(13, '\n      '),
                l.Qb(14, 'div', 5),
                l.Fc(15, '\n        '),
                l.Qb(16, 'div', 6),
                l.Fc(17, '\n          '),
                l.Qb(18, 'p', 7),
                l.Fc(19),
                l.gc(20, 'translate'),
                l.Pb(),
                l.Fc(21, '\n          '),
                l.Qb(22, 'h2'),
                l.Fc(23),
                l.gc(24, 'translate'),
                l.Pb(),
                l.Fc(25, '\n          '),
                l.Qb(26, 'p'),
                l.Fc(27),
                l.gc(28, 'translate'),
                l.Pb(),
                l.Fc(29, '\n        '),
                l.Pb(),
                l.Fc(30, '\n        '),
                l.Qb(31, 'a', 8),
                l.Fc(32),
                l.gc(33, 'translate'),
                l.Pb(),
                l.Fc(34, '\n        '),
                l.Qb(35, 'a', 9),
                l.Fc(36),
                l.gc(37, 'translate'),
                l.Pb(),
                l.Fc(38, '\n      '),
                l.Pb(),
                l.Fc(39, '\n\n      '),
                l.Qb(40, 'div', 5),
                l.Fc(41, '\n        '),
                l.Qb(42, 'div', 10),
                l.Fc(43, '\n          '),
                l.Dc(44, I, 4, 8, 'div', 11),
                l.Fc(45, '\n        '),
                l.Pb(),
                l.Fc(46, '\n      '),
                l.Pb(),
                l.Fc(47, '\n    '),
                l.Pb(),
                l.Fc(48, '\n  '),
                l.Pb(),
                l.Fc(49, '\n'),
                l.Pb(),
                l.Fc(50, '\n')),
                2 & n &&
                  (l.xb(19),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      20,
                      6,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.EXTEND_CORE.LIMITLESS_POSSIBILITIES'
                    ),
                    '\n          '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      24,
                      8,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.EXTEND_CORE.BUILD_FAST_BUILD_MORE'
                    ),
                    '\n          '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      28,
                      10,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.EXTEND_CORE.USING_EVERYTHINK'
                    ),
                    '\n          '
                  ),
                  l.xb(5),
                  l.Hc(
                    '\n          ',
                    l.hc(
                      33,
                      12,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.EXTEND_CORE.KNOW_MORE'
                    ),
                    ''
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n          ',
                    l.hc(
                      37,
                      14,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.EXTEND_CORE.REGISTER_ACCOUNT'
                    ),
                    ''
                  ),
                  l.xb(8),
                  l.kc('ngForOf', t.icons));
            },
            directives: [g.j, g.l],
            pipes: [m.b],
            styles: ['']
          })),
          n
        );
      })();
      function _(n, t) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 8),
            l.Fc(1, '\n          '),
            l.Qb(2, 'div', 9),
            l.Fc(3, '\n            '),
            l.Qb(4, 'a', 10),
            l.Fc(5, '\n              '),
            l.Mb(6, 'img', 11),
            l.Fc(7, '\n              '),
            l.Qb(8, 'div', 12),
            l.Fc(9, '\n                '),
            l.Qb(10, 'p', 13),
            l.Fc(11),
            l.gc(12, 'translate'),
            l.Pb(),
            l.Fc(13, '\n                '),
            l.Qb(14, 'p', 14),
            l.Fc(15),
            l.gc(16, 'translate'),
            l.Pb(),
            l.Fc(17, '\n              '),
            l.Pb(),
            l.Fc(18, '\n            '),
            l.Pb(),
            l.Fc(19, '\n          '),
            l.Pb(),
            l.Fc(20, '\n        '),
            l.Pb()),
          2 & n)
        ) {
          const n = t.index;
          l.xb(6),
            l.kc(
              'src',
              'https://picsum.photos/500/300?random=' +
                (n + 1) +
                '&gravity=south',
              l.yc
            ),
            l.xb(5),
            l.Hc(
              '\n                  ',
              l.hc(
                12,
                3,
                'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.LATEST_PROJECTS.SOMOS_PILEROS'
              ),
              '\n                '
            ),
            l.xb(4),
            l.Hc(
              '\n                  ',
              l.hc(
                16,
                5,
                'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.LATEST_PROJECTS.WE_BUILT_DATA'
              ),
              '\n                '
            );
        }
      }
      let M = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
              (this.images = [
                { name: 'Image', class: ' rounded-top-left' },
                { name: 'Image' },
                { name: 'Image', class: ' rounded-top-right' },
                { name: 'Image', class: ' rounded-bottom-left' },
                { name: 'Image' },
                { name: 'Image', class: ' rounded-bottom-right' }
              ]);
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(l.Lb(m.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
            selectors: [['dc-integration-latest-projects']],
            decls: 25,
            vars: 7,
            consts: [
              [
                1,
                'section',
                'bg-contrast',
                'edge',
                'bottom-right',
                'latest-projects'
              ],
              [1, 'container', 'bring-to-front', 'pt-0'],
              [1, 'shadow-lg', 'bg-contrast', 'rounded'],
              [1, 'bg-contrast', 'rounded-bottom', 'p-4'],
              [1, 'bold', 'lead', 'my-0'],
              [1, 'text-muted', 'my-0'],
              [1, 'row', 'no-gutters'],
              ['class', 'col-6 col-md-4', 4, 'ngFor', 'ngForOf'],
              [1, 'col-6', 'col-md-4'],
              [1, 'project-detail', 'blanket', 'blanket-secondary'],
              ['href', 'https://everythink.ai/app/#/sessions/signup'],
              ['alt', '', 3, 'src'],
              [1, 'description', 'bg-dark', 'text-contrast', 'p-1', 'p-md-2'],
              [1, 'bold'],
              [1, 'text-muted']
            ],
            template: function(n, t) {
              1 & n &&
                (l.Qb(0, 'section', 0),
                l.Fc(1, '\n  '),
                l.Qb(2, 'div', 1),
                l.Fc(3, '\n    '),
                l.Qb(4, 'div', 2),
                l.Fc(5, '\n      '),
                l.Qb(6, 'div', 3),
                l.Fc(7, '\n        '),
                l.Qb(8, 'p', 4),
                l.Fc(9),
                l.gc(10, 'translate'),
                l.Pb(),
                l.Fc(11, '\n        '),
                l.Qb(12, 'p', 5),
                l.Fc(13),
                l.gc(14, 'translate'),
                l.Pb(),
                l.Fc(15, '\n      '),
                l.Pb(),
                l.Fc(16, '\n      '),
                l.Qb(17, 'div', 6),
                l.Fc(18, '\n        '),
                l.Dc(19, _, 21, 7, 'div', 7),
                l.Fc(20, '\n      '),
                l.Pb(),
                l.Fc(21, '\n    '),
                l.Pb(),
                l.Fc(22, '\n  '),
                l.Pb(),
                l.Fc(23, '\n'),
                l.Pb(),
                l.Fc(24, '\n')),
                2 & n &&
                  (l.xb(9),
                  l.Hc(
                    '\n          ',
                    l.hc(
                      10,
                      3,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.LATEST_PROJECTS.EVERYTHINK_MARKETPLACE'
                    ),
                    '\n        '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n          ',
                    l.hc(
                      14,
                      5,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.LATEST_PROJECTS.TAKE_A_LOOK_AT_OUR_LATEST_PROJECTS'
                    ),
                    '\n        '
                  ),
                  l.xb(6),
                  l.kc('ngForOf', t.images));
            },
            directives: [g.j],
            pipes: [m.b],
            styles: ['']
          })),
          n
        );
      })();
      var N = e('wHSu'),
        D = e('3Pt+');
      let L = (() => {
        class n {
          constructor(n) {
            this.translate = n;
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(l.Lb(m.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
            selectors: [['dc-form-register-company']],
            decls: 37,
            vars: 12,
            consts: [
              [1, 'form'],
              [1, 'form-group'],
              ['for', 'name'],
              [
                'type',
                'text',
                'id',
                'name',
                'placeholder',
                'Name',
                1,
                'form-control'
              ],
              ['for', 'email'],
              [
                'type',
                'email',
                'id',
                'email',
                'placeholder',
                'Email',
                1,
                'form-control'
              ],
              ['for', 'company'],
              [
                'type',
                'text',
                'id',
                'company',
                'placeholder',
                'Company',
                1,
                'form-control'
              ],
              [1, 'form-group', 'mt-5'],
              [
                'type',
                'submit',
                1,
                'btn',
                'btn-rounded',
                'btn-primary',
                'btn-block',
                'btn-lg',
                'text-center'
              ]
            ],
            template: function(n, t) {
              1 & n &&
                (l.Qb(0, 'form', 0),
                l.Fc(1, '\n  '),
                l.Qb(2, 'div', 1),
                l.Fc(3, '\n    '),
                l.Qb(4, 'label', 2),
                l.Fc(5),
                l.gc(6, 'translate'),
                l.Pb(),
                l.Fc(7, '\n    '),
                l.Mb(8, 'input', 3),
                l.Fc(9, '\n  '),
                l.Pb(),
                l.Fc(10, '\n  '),
                l.Qb(11, 'div', 1),
                l.Fc(12, '\n    '),
                l.Qb(13, 'label', 4),
                l.Fc(14),
                l.gc(15, 'translate'),
                l.Pb(),
                l.Fc(16, '\n    '),
                l.Mb(17, 'input', 5),
                l.Fc(18, '\n  '),
                l.Pb(),
                l.Fc(19, '\n  '),
                l.Qb(20, 'div', 1),
                l.Fc(21, '\n    '),
                l.Qb(22, 'label', 6),
                l.Fc(23),
                l.gc(24, 'translate'),
                l.Pb(),
                l.Fc(25, '\n    '),
                l.Mb(26, 'input', 7),
                l.Fc(27, '\n  '),
                l.Pb(),
                l.Fc(28, '\n\n  '),
                l.Qb(29, 'div', 8),
                l.Fc(30, '\n    '),
                l.Qb(31, 'button', 9),
                l.Fc(32),
                l.gc(33, 'translate'),
                l.Pb(),
                l.Fc(34, '\n  '),
                l.Pb(),
                l.Fc(35, '\n'),
                l.Pb(),
                l.Fc(36, '\n')),
                2 & n &&
                  (l.xb(5),
                  l.Hc(
                    '\n      ',
                    l.hc(6, 4, 'ACTIONS.FORM_REGISTER_COMPANY.NAME'),
                    ''
                  ),
                  l.xb(9),
                  l.Gc(l.hc(15, 6, 'ACTIONS.FORM_REGISTER_COMPANY.EMAIL')),
                  l.xb(9),
                  l.Gc(l.hc(24, 8, 'ACTIONS.FORM_REGISTER_COMPANY.COMPANY')),
                  l.xb(9),
                  l.Hc(
                    '\n      ',
                    l.hc(
                      33,
                      10,
                      'ACTIONS.FORM_REGISTER_COMPANY.SEND_MY_APPLICATION'
                    ),
                    'n\n    '
                  ));
            },
            directives: [D.h, D.d, D.e],
            pipes: [m.b],
            styles: ['']
          })),
          n
        );
      })();
      var C = e('6NWb');
      function w(n, t) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 13),
            l.Fc(1, '\n            '),
            l.Qb(2, 'div', 14),
            l.Fc(3, '\n              '),
            l.Qb(4, 'div', 15),
            l.Fc(5, '\n                '),
            l.Mb(6, 'fa-icon', 16),
            l.Fc(7, '\n              '),
            l.Pb(),
            l.Fc(8, '\n\n              '),
            l.Qb(9, 'p', 17),
            l.Fc(10),
            l.Pb(),
            l.Fc(11, '\n            '),
            l.Pb(),
            l.Fc(12, '\n          '),
            l.Pb()),
          2 & n)
        ) {
          const n = t.$implicit,
            e = l.fc();
          l.xb(6), l.kc('icon', e.check), l.xb(4), l.Gc(n);
        }
      }
      let k = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
              (this.check = N.d),
              (this.features = [
                'Service integrations',
                'Partners integration',
                'No-coding',
                'Get discovered'
              ]);
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(l.Lb(m.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
            selectors: [['dc-integration-register']],
            decls: 45,
            vars: 10,
            consts: [
              [1, 'section'],
              [1, 'container', 'bring-to-front'],
              [1, 'row', 'align-items-center', 'justify-content-between'],
              [1, 'col-md-6', 'order-md-last'],
              [1, 'mb-5'],
              [1, 'text-primary', 'bold'],
              [1, 'lead', 'text-muted'],
              [1, 'row'],
              ['class', 'col-md-6', 4, 'ngFor', 'ngForOf'],
              ['data-aos', 'fade-right', 1, 'col-md-6', 'col-lg-5'],
              [1, 'card', 'shadow-lg'],
              [
                'src',
                'https://picsum.photos/500/300?random=1&gravity=south',
                'alt',
                '...',
                1,
                'card-img-top'
              ],
              [1, 'card-body'],
              [1, 'col-md-6'],
              [1, 'd-flex', 'align-items-center'],
              [
                1,
                'icon-md',
                'center-flex',
                'rounded-circle',
                'bg-primary',
                'mt-1',
                'mr-4'
              ],
              [1, 'text-contrast', 3, 'icon'],
              [1, 'text-primary']
            ],
            template: function(n, t) {
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
                l.Qb(10, 'p', 5),
                l.Fc(11),
                l.gc(12, 'translate'),
                l.Pb(),
                l.Fc(13, '\n          '),
                l.Qb(14, 'h2'),
                l.Fc(15),
                l.gc(16, 'translate'),
                l.Pb(),
                l.Fc(17, '\n\n          '),
                l.Qb(18, 'p', 6),
                l.Fc(19),
                l.gc(20, 'translate'),
                l.Pb(),
                l.Fc(21, '\n        '),
                l.Pb(),
                l.Fc(22, '\n\n        '),
                l.Qb(23, 'div', 7),
                l.Fc(24, '\n          '),
                l.Dc(25, w, 13, 2, 'div', 8),
                l.Fc(26, '\n        '),
                l.Pb(),
                l.Fc(27, '\n      '),
                l.Pb(),
                l.Fc(28, '\n\n      '),
                l.Qb(29, 'div', 9),
                l.Fc(30, '\n        '),
                l.Qb(31, 'div', 10),
                l.Fc(32, '\n          '),
                l.Mb(33, 'img', 11),
                l.Fc(34, '\n\n          '),
                l.Qb(35, 'div', 12),
                l.Fc(36, '\n            '),
                l.Mb(37, 'dc-form-register-company'),
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
                2 & n &&
                  (l.xb(11),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      12,
                      4,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.REGISTER.FILL_IN_THE_FORM'
                    ),
                    '\n          '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      16,
                      6,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.REGISTER.YOUR_SUCCESS_IS_OUR_SUCCESS'
                    ),
                    '\n          '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      20,
                      8,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.REGISTER.IF_YOU_ARE_LOOKING'
                    ),
                    '\n          '
                  ),
                  l.xb(6),
                  l.kc('ngForOf', t.features));
            },
            directives: [g.j, L, C.a],
            pipes: [m.b],
            styles: ['']
          })),
          n
        );
      })();
      function H(n, t) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 20),
            l.Fc(1, '\n          '),
            l.Qb(2, 'div', 21),
            l.Fc(3, '\n            '),
            l.Mb(4, 'dc-feather', 22),
            l.Fc(5, '\n          '),
            l.Pb(),
            l.Fc(6, '\n          '),
            l.Qb(7, 'div', 23),
            l.Fc(8, '\n            '),
            l.Qb(9, 'h5'),
            l.Fc(10),
            l.Pb(),
            l.Fc(11, '\n            '),
            l.Qb(12, 'p'),
            l.Fc(13),
            l.Pb(),
            l.Fc(14, '\n          '),
            l.Pb(),
            l.Fc(15, '\n        '),
            l.Pb()),
          2 & n)
        ) {
          const n = t.$implicit,
            e = t.index,
            c = l.fc();
          l.Db('pb-3', e < c.features.length),
            l.xb(4),
            l.kc('name', n.icon)('iconClass', 'stroke-primary'),
            l.xb(6),
            l.Gc(n.name),
            l.xb(3),
            l.Gc(n.description);
        }
      }
      let G = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
              (this.features = [
                {
                  name: 'In spreadsheet',
                  icon: 'box',
                  description:
                    'The process is very simple and user friendly. Only limited to the ingenuity of people who want to utilize AI to improve their quality of life.'
                },
                {
                  name: 'Real-time results',
                  icon: 'layers',
                  description:
                    'Streamlines processes, discovers deficiencies, provides information and iterates in real-time.'
                }
              ]);
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)(l.Lb(m.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
            selectors: [['dc-integration-why-choose-us']],
            decls: 60,
            vars: 10,
            consts: [
              [1, 'section', 'why-choose-us'],
              [1, 'shapes-container'],
              [1, 'pattern', 'pattern-dots'],
              [1, 'container', 'pb-8', 'bring-to-front'],
              [1, 'row', 'gap-y'],
              [1, 'col-md-6'],
              [1, 'mb-5'],
              [1, 'heading-line'],
              [1, 'text-muted', 'lead'],
              ['class', 'media', 3, 'pb-3', 4, 'ngFor', 'ngForOf'],
              [1, 'my-5'],
              [1, 'text-center', 'text-md-left'],
              ['href', '#!', 1, 'btn', 'btn-primary', 'btn-rounded'],
              [1, 'rotated-mockups', 'device-twin'],
              [1, 'browser', 'absolute', 'shadow-lg'],
              [
                'src',
                'assets/images/integration/screens/tablet/1.png',
                'alt',
                '...'
              ],
              [1, 'front', 'iphone-x'],
              [1, 'screen'],
              [
                'src',
                'assets/images/integration/screens/app/1.png',
                'alt',
                '...'
              ],
              [1, 'notch'],
              [1, 'media'],
              [
                1,
                'bg-light',
                'p-3',
                'rounded',
                'd-flex',
                'align-items-center',
                'justify-content-center',
                'mr-3'
              ],
              [3, 'name', 'iconClass'],
              [1, 'media-body']
            ],
            template: function(n, t) {
              1 & n &&
                (l.Qb(0, 'section', 0),
                l.Fc(1, '\n  '),
                l.Qb(2, 'div', 1),
                l.Fc(3, '\n    '),
                l.Mb(4, 'div', 2),
                l.Fc(5, '\n  '),
                l.Pb(),
                l.Fc(6, '\n\n  '),
                l.Qb(7, 'div', 3),
                l.Fc(8, '\n    '),
                l.Qb(9, 'div', 4),
                l.Fc(10, '\n      '),
                l.Qb(11, 'div', 5),
                l.Fc(12, '\n        '),
                l.Qb(13, 'div', 6),
                l.Fc(14, '\n          '),
                l.Qb(15, 'h2', 7),
                l.Fc(16),
                l.gc(17, 'translate'),
                l.Pb(),
                l.Fc(18, '\n          '),
                l.Qb(19, 'p', 8),
                l.Fc(20),
                l.gc(21, 'translate'),
                l.Pb(),
                l.Fc(22, '\n        '),
                l.Pb(),
                l.Fc(23, '\n\n        '),
                l.Dc(24, H, 16, 6, 'div', 9),
                l.Fc(25, '\n\n        '),
                l.Mb(26, 'hr', 10),
                l.Fc(27, '\n        '),
                l.Qb(28, 'div', 11),
                l.Fc(29, '\n          '),
                l.Qb(30, 'a', 12),
                l.Fc(31),
                l.gc(32, 'translate'),
                l.Pb(),
                l.Fc(33, '\n        '),
                l.Pb(),
                l.Fc(34, '\n      '),
                l.Pb(),
                l.Fc(35, '\n\n      '),
                l.Qb(36, 'div', 5),
                l.Fc(37, '\n        '),
                l.Qb(38, 'div', 13),
                l.Fc(39, '\n          '),
                l.Qb(40, 'div', 14),
                l.Fc(41, '\n            '),
                l.Mb(42, 'img', 15),
                l.Fc(43, '\n          '),
                l.Pb(),
                l.Fc(44, '\n\n          '),
                l.Qb(45, 'div', 16),
                l.Fc(46, '\n            '),
                l.Qb(47, 'div', 17),
                l.Fc(48, '\n              '),
                l.Mb(49, 'img', 18),
                l.Fc(50, '\n            '),
                l.Pb(),
                l.Fc(51, '\n\n            '),
                l.Mb(52, 'div', 19),
                l.Fc(53, '\n          '),
                l.Pb(),
                l.Fc(54, '\n        '),
                l.Pb(),
                l.Fc(55, '\n      '),
                l.Pb(),
                l.Fc(56, '\n    '),
                l.Pb(),
                l.Fc(57, '\n  '),
                l.Pb(),
                l.Fc(58, '\n'),
                l.Pb(),
                l.Fc(59, '\n')),
                2 & n &&
                  (l.xb(16),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      17,
                      4,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.WHY_CHOOSE_US.SIMPLE_IMPLEMENTATION_WITH'
                    ),
                    '\n          '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      21,
                      6,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.WHY_CHOOSE_US.SINCE_THE_NEED_FOR_HUMAN'
                    ),
                    '\n          '
                  ),
                  l.xb(4),
                  l.kc('ngForOf', t.features),
                  l.xb(7),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      32,
                      8,
                      'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.WHY_CHOOSE_US.KNOW_MORE'
                    ),
                    '\n          '
                  ));
            },
            directives: [g.j, y.a],
            pipes: [m.b],
            styles: ['']
          })),
          n
        );
      })();
      var W = e('aaX3'),
        U = e('nEva'),
        Y = e('VKEt'),
        j = e('iLZQ');
      const K = [
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
                  'DEMOS.DATAFLOWS_CREATOORS.NETWORK_SEARCH_META.TITLE',
                  'DEMOS.DATAFLOWS_CREATOORS.NETWORK_SEARCH_META.KEYWORDS'
                );
              }
            }
            return (
              (n.ɵfac = function(t) {
                return new (t || n)(l.Lb(F.a));
              }),
              (n.ɵcmp = l.Fb({
                type: n,
                selectors: [['dc-integration']],
                decls: 27,
                vars: 6,
                consts: [
                  [3, 'useOnlyDarkLogo', 'darkLinks'],
                  [1, 'position-relative', 'overflow-hidden'],
                  [3, 'edge', 'background']
                ],
                template: function(n, t) {
                  1 & n &&
                    (l.Mb(0, 'dc-navbar-default', 0),
                    l.Fc(1, '\n\n'),
                    l.Qb(2, 'main', 1),
                    l.Fc(3, '\n  '),
                    l.Mb(4, 'dc-integration-heading'),
                    l.Fc(5, '\n  '),
                    l.Mb(6, 'dc-integration-how-it-works'),
                    l.Fc(7, '\n  '),
                    l.Mb(8, 'dc-integration-built-tech'),
                    l.Fc(9, '\n  '),
                    l.Mb(10, 'dc-integration-extend-core'),
                    l.Fc(11, '\n  '),
                    l.Mb(12, 'dc-integration-latest-projects'),
                    l.Fc(13, '\n  '),
                    l.Mb(14, 'dc-integration-register'),
                    l.Fc(15, '\n  '),
                    l.Mb(16, 'dc-integration-why-choose-us'),
                    l.Fc(17, '\n  '),
                    l.Mb(18, 'dc-slider-icons', 2),
                    l.Fc(19, '\n  '),
                    l.Mb(20, 'dc-testimonial-skewed-slider'),
                    l.Fc(21, '\n  '),
                    l.Mb(22, 'dc-cta1', 2),
                    l.Fc(23, '\n  '),
                    l.Mb(24, 'dc-footer2'),
                    l.Fc(25, '\n'),
                    l.Pb(),
                    l.Fc(26, '\n')),
                    2 & n &&
                      (l.kc('useOnlyDarkLogo', !0)('darkLinks', !0),
                      l.xb(18),
                      l.kc('edge', 'top-left')('background', 'light'),
                      l.xb(4),
                      l.kc('edge', 'top-left')('background', 'contrast'));
                },
                directives: [p.a, E, S, P, Q, M, k, G, W.a, U.a, Y.a, j.a],
                styles: ['']
              })),
              n
            );
          })(),
          data: { title: Object(F.c)('About') }
        }
      ];
      let X = (() => {
        class n {}
        return (
          (n.ɵmod = l.Jb({ type: n })),
          (n.ɵinj = l.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[d.g.forChild(K)], d.g]
          })),
          n
        );
      })();
      var J = e('ZpN7');
      let z = (() => {
        class n {}
        return (
          (n.ɵmod = l.Jb({ type: n })),
          (n.ɵinj = l.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [
              [c.a, i.a, s.a, a.a, o.a, r.a, b.a, J.a, X, m.a.forChild()]
            ]
          })),
          n
        );
      })();
    },
    ORAR: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return a;
      });
      var c = e('tyNb'),
        i = e('sYmb'),
        s = e('fXoL');
      let a = (() => {
        class n {}
        return (
          (n.ɵmod = s.Jb({ type: n })),
          (n.ɵinj = s.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[c.g, i.a.forChild()]]
          })),
          n
        );
      })();
    },
    pu65: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return o;
      });
      var c = e('nhfI'),
        i = e('M0ag'),
        s = e('sYmb'),
        a = e('fXoL');
      let o = (() => {
        class n {}
        return (
          (n.ɵmod = a.Jb({ type: n })),
          (n.ɵinj = a.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[c.c, i.a, s.a.forChild()]]
          })),
          n
        );
      })();
    }
  }
]);
