!(function() {
  function n(n, t) {
    for (var e = 0; e < t.length; e++) {
      var c = t[e];
      (c.enumerable = c.enumerable || !1),
        (c.configurable = !0),
        'value' in c && (c.writable = !0),
        Object.defineProperty(n, c.key, c);
    }
  }
  function t(t, e, c) {
    return e && n(t.prototype, e), c && n(t, c), t;
  }
  function e(n, t) {
    if (!(n instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [16],
    {
      '2d4A': function(n, t, c) {
        'use strict';
        c.d(t, 'a', function() {
          return b;
        });
        var i = c('nhfI'),
          a = c('6NWb'),
          s = c('M0ag'),
          o = c('sYmb'),
          r = c('fXoL'),
          b = (function() {
            var n = function n() {
              e(this, n);
            };
            return (
              (n.ɵmod = r.Jb({ type: n })),
              (n.ɵinj = r.Ib({
                factory: function(t) {
                  return new (t || n)();
                },
                imports: [[i.c, a.b, s.a, o.a.forChild()]]
              })),
              n
            );
          })();
      },
      '8klf': function(n, t, c) {
        'use strict';
        c.d(t, 'a', function() {
          return r;
        });
        var i = c('M0ag'),
          a = c('tyNb'),
          s = c('sYmb'),
          o = c('fXoL'),
          r = (function() {
            var n = function n() {
              e(this, n);
            };
            return (
              (n.ɵmod = o.Jb({ type: n })),
              (n.ɵinj = o.Ib({
                factory: function(t) {
                  return new (t || n)();
                },
                imports: [[i.a, a.g, s.a.forChild()]]
              })),
              n
            );
          })();
      },
      LcuH: function(n, c, i) {
        'use strict';
        i.r(c),
          i.d(c, 'IntegrationModule', function() {
            return dn;
          });
        var a,
          s = i('M0ag'),
          o = i('ORAR'),
          r = i('2d4A'),
          b = i('pu65'),
          d = i('M0Rk'),
          F = i('8klf'),
          l = i('XMwz'),
          p = i('tyNb'),
          u = i('ey9i'),
          f = i('fXoL'),
          m = i('8ynp'),
          g = i('sYmb'),
          h = i('ofXK'),
          O = i('N7aX'),
          v = i('jhN1'),
          T =
            (((a = (function() {
              function n(t, c) {
                e(this, n),
                  (this.sanitizer = t),
                  (this.bubblesService = c),
                  (this.onUpdate = new f.n()),
                  (this.noiseSeedX = Math.floor(64e3 * Math.random())),
                  (this.noiseSeedY = Math.floor(64e3 * Math.random())),
                  (this.noise = this.bubblesService.noise);
              }
              return (
                t(n, [
                  {
                    key: 'ngOnInit',
                    value: function() {
                      requestAnimationFrame(this.update.bind(this));
                    }
                  },
                  {
                    key: 'update',
                    value: function() {
                      this.animateBubble(),
                        requestAnimationFrame(this.update.bind(this));
                    }
                  },
                  {
                    key: 'animateBubble',
                    value: function() {
                      (this.noiseSeedX += 0.004), (this.noiseSeedY += 0.004);
                      var n = this.noise.simplex2(this.noiseSeedX, 0),
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
                ]),
                n
              );
            })()).ɵfac = function(n) {
              return new (n || a)(f.Lb(v.b), f.Lb(O.a));
            }),
            (a.ɵcmp = f.Fb({
              type: a,
              selectors: [['dc-bubble']],
              inputs: { index: 'index', spec: 'spec' },
              outputs: { onUpdate: 'onUpdate' },
              decls: 2,
              vars: 5,
              template: function(n, t) {
                1 & n && (f.Mb(0, 'div'), f.Fc(1, '\n')),
                  2 & n &&
                    (f.Ab('bubble bubble-', t.index, ''),
                    f.Cc('transform', t.transformStyle));
              },
              styles: ['']
            })),
            a);
        function E(n, t) {
          if ((1 & n && f.Mb(0, 'dc-bubble', 3), 2 & n)) {
            var e = t.$implicit;
            f.kc('index', t.index + 1)('spec', e);
          }
        }
        var y,
          S,
          A =
            (((S = (function() {
              function n() {
                e(this, n),
                  (this.bubbles = [
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
                  ]);
              }
              return t(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || S)();
            }),
            (S.ɵcmp = f.Fb({
              type: S,
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
                  (f.Qb(0, 'div', 0),
                  f.Fc(1, '\n  '),
                  f.Qb(2, 'div', 1),
                  f.Fc(3, '\n    '),
                  f.Dc(4, E, 1, 2, 'dc-bubble', 2),
                  f.Fc(5, '\n  '),
                  f.Pb(),
                  f.Fc(6, '\n'),
                  f.Pb(),
                  f.Fc(7, '\n')),
                  2 & n && (f.xb(4), f.kc('ngForOf', t.bubbles));
              },
              directives: [h.j, T],
              styles: ['']
            })),
            S),
          x =
            (((y = (function() {
              function n(t) {
                e(this, n), (this.translate = t);
              }
              return t(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || y)(f.Lb(g.c));
            }),
            (y.ɵcmp = f.Fb({
              type: y,
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
                  (f.Fc(0, '\n'),
                  f.Qb(1, 'header', 0),
                  f.Fc(2, '\n  '),
                  f.Qb(3, 'div', 1),
                  f.Fc(4, '\n    '),
                  f.Qb(5, 'div', 2),
                  f.Fc(6, '\n      '),
                  f.Mb(7, 'div'),
                  f.Fc(8, '\n    '),
                  f.Pb(),
                  f.Fc(9, '\n    '),
                  f.Qb(10, 'div', 3),
                  f.Fc(11, '\n      '),
                  f.Mb(12, 'div'),
                  f.Fc(13, '\n    '),
                  f.Pb(),
                  f.Fc(14, '\n\n    '),
                  f.Qb(15, 'div', 4),
                  f.Fc(16, '\n      '),
                  f.Mb(17, 'div'),
                  f.Fc(18, '\n    '),
                  f.Pb(),
                  f.Fc(19, '\n    '),
                  f.Qb(20, 'div', 5),
                  f.Fc(21, '\n      '),
                  f.Mb(22, 'div'),
                  f.Fc(23, '\n    '),
                  f.Pb(),
                  f.Fc(24, '\n    '),
                  f.Qb(25, 'div', 6),
                  f.Fc(26, '\n      '),
                  f.Mb(27, 'div'),
                  f.Fc(28, '\n    '),
                  f.Pb(),
                  f.Fc(29, '\n\n    '),
                  f.Qb(30, 'div', 7),
                  f.Fc(31, '\n      '),
                  f.Mb(32, 'div'),
                  f.Fc(33, '\n    '),
                  f.Pb(),
                  f.Fc(34, '\n    '),
                  f.Qb(35, 'div', 8),
                  f.Fc(36, '\n      '),
                  f.Mb(37, 'div'),
                  f.Fc(38, '\n    '),
                  f.Pb(),
                  f.Fc(39, '\n\n    '),
                  f.Qb(40, 'div', 9),
                  f.Fc(41, '\n      '),
                  f.Mb(42, 'div'),
                  f.Fc(43, '\n    '),
                  f.Pb(),
                  f.Fc(44, '\n\n    '),
                  f.Mb(45, 'div', 10),
                  f.Fc(46, '\n  '),
                  f.Pb(),
                  f.Fc(47, '\n\n  '),
                  f.Qb(48, 'div', 11),
                  f.Fc(49, '\n    '),
                  f.Qb(50, 'div', 12),
                  f.Fc(51, '\n      '),
                  f.Qb(52, 'div', 13),
                  f.Fc(53, '\n        '),
                  f.Qb(54, 'h1', 14),
                  f.Fc(55),
                  f.gc(56, 'translate'),
                  f.Pb(),
                  f.Fc(57, '\n        '),
                  f.Qb(58, 'p', 15),
                  f.Fc(59),
                  f.gc(60, 'translate'),
                  f.Pb(),
                  f.Fc(61, '\n\n        '),
                  f.Qb(62, 'a', 16),
                  f.Fc(63),
                  f.gc(64, 'translate'),
                  f.Pb(),
                  f.Fc(65, '\n      '),
                  f.Pb(),
                  f.Fc(66, '\n    '),
                  f.Pb(),
                  f.Fc(67, '\n  '),
                  f.Pb(),
                  f.Fc(68, '\n\n  '),
                  f.Mb(69, 'dc-integration-bubbles'),
                  f.Fc(70, '\n'),
                  f.Pb(),
                  f.Fc(71, '\n')),
                  2 & n &&
                    (f.xb(55),
                    f.Hc(
                      '\n          ',
                      f.hc(
                        56,
                        3,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.HEADING.CREATE_EMOTIONS_FOR_SMART_ASSISTANTS'
                      ),
                      '\n        '
                    ),
                    f.xb(4),
                    f.Hc(
                      '\n          ',
                      f.hc(
                        60,
                        5,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.HEADING.CREATE_BUY_AND_SELL'
                      ),
                      '\n        '
                    ),
                    f.xb(4),
                    f.Hc(
                      '\n          ',
                      f.hc(
                        64,
                        7,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.HEADING.JOIN_EVERY_TTHINK'
                      ),
                      ''
                    ));
              },
              directives: [A],
              pipes: [g.b],
              styles: [
                '.integrations-header[_ngcontent-%COMP%]{padding-top:90px}'
              ]
            })),
            y);
        function P(n, t) {
          if (
            (1 & n &&
              (f.Qb(0, 'div', 9),
              f.Fc(1, '\n        '),
              f.Qb(2, 'div', 10),
              f.Fc(3, '\n          '),
              f.Mb(4, 'div', 11),
              f.Fc(5, '\n        '),
              f.Pb(),
              f.Fc(6, '\n        '),
              f.Qb(7, 'figure', 12),
              f.Fc(8, '\n          '),
              f.Mb(9, 'img', 13),
              f.Fc(10, '\n        '),
              f.Pb(),
              f.Fc(11, '\n\n        '),
              f.Qb(12, 'h5', 5),
              f.Fc(13),
              f.Pb(),
              f.Fc(14, '\n        '),
              f.Qb(15, 'p', 14),
              f.Fc(16),
              f.Pb(),
              f.Fc(17, '\n      '),
              f.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            f.xb(9),
              f.kc(
                'src',
                'assets/images/integration/steps/' + e.icon + '.svg',
                f.yc
              ),
              f.xb(4),
              f.Gc(e.title),
              f.xb(3),
              f.Gc(e.description);
          }
        }
        var R,
          I =
            (((R = (function() {
              function n(t) {
                e(this, n),
                  (this.translate = t),
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
              return t(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || R)(f.Lb(g.c));
            }),
            (R.ɵcmp = f.Fb({
              type: R,
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
                  (f.Qb(0, 'section', 0),
                  f.Fc(1, '\n  '),
                  f.Qb(2, 'div', 1),
                  f.Fc(3, '\n    '),
                  f.Qb(4, 'div', 2),
                  f.Fc(5, '\n      '),
                  f.Mb(6, 'div'),
                  f.Fc(7, '\n    '),
                  f.Pb(),
                  f.Fc(8, '\n  '),
                  f.Pb(),
                  f.Fc(9, '\n\n  '),
                  f.Qb(10, 'div', 3),
                  f.Fc(11, '\n    '),
                  f.Qb(12, 'div', 4),
                  f.Fc(13, '\n      '),
                  f.Qb(14, 'h2', 5),
                  f.Fc(15),
                  f.gc(16, 'translate'),
                  f.Pb(),
                  f.Fc(17, '\n      '),
                  f.Qb(18, 'p', 6),
                  f.Fc(19),
                  f.gc(20, 'translate'),
                  f.Pb(),
                  f.Fc(21, '\n    '),
                  f.Pb(),
                  f.Fc(22, '\n\n    '),
                  f.Qb(23, 'div', 7),
                  f.Fc(24, '\n      '),
                  f.Dc(25, P, 18, 3, 'div', 8),
                  f.Fc(26, '\n    '),
                  f.Pb(),
                  f.Fc(27, '\n  '),
                  f.Pb(),
                  f.Fc(28, '\n'),
                  f.Pb(),
                  f.Fc(29, '\n')),
                  2 & n &&
                    (f.xb(15),
                    f.Hc(
                      '\n        ',
                      f.hc(
                        16,
                        3,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.HOW_IT_WORK.KNOW_WHAT_YOU_CAN_DO_WITH_US'
                      ),
                      '\n      '
                    ),
                    f.xb(4),
                    f.Hc(
                      '\n        ',
                      f.hc(
                        20,
                        5,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.HOW_IT_WORK.EVERYTHINK_DOES_ALL'
                      ),
                      '\n      '
                    ),
                    f.xb(6),
                    f.kc('ngForOf', t.elements));
              },
              directives: [h.j],
              pipes: [g.b],
              styles: ['']
            })),
            R),
          Q = i('AL06');
        function _(n, t) {
          if (
            (1 & n &&
              (f.Qb(0, 'div', 24),
              f.Fc(1, '\n                  '),
              f.Qb(2, 'figure', 25),
              f.Fc(3, '\n                    '),
              f.Mb(4, 'img', 26),
              f.Fc(5, '\n                  '),
              f.Pb(),
              f.Fc(6, '\n                '),
              f.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            f.xb(4),
              f.kc(
                'src',
                'assets/images/integration/logos/' + e.image + '.svg',
                f.yc
              );
          }
        }
        function M(n, t) {
          if (
            (1 & n &&
              (f.Qb(0, 'div', 27),
              f.Fc(1, '\n            '),
              f.Qb(2, 'div', 28),
              f.Fc(3, '\n              '),
              f.Qb(4, 'div', 29),
              f.Fc(5, '\n                '),
              f.Mb(6, 'dc-feather', 30),
              f.Fc(7, '\n              '),
              f.Pb(),
              f.Fc(8, '\n              '),
              f.Qb(9, 'div', 31),
              f.Fc(10, '\n                '),
              f.Qb(11, 'h5'),
              f.Fc(12),
              f.Pb(),
              f.Fc(13, '\n                '),
              f.Qb(14, 'p'),
              f.Fc(15),
              f.Pb(),
              f.Fc(16, '\n              '),
              f.Pb(),
              f.Fc(17, '\n            '),
              f.Pb(),
              f.Fc(18, '\n          '),
              f.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            f.xb(6),
              f.kc('name', e.icon)('iconClass', 'stroke-primary'),
              f.xb(6),
              f.Gc(e.title),
              f.xb(3),
              f.Gc(e.description);
          }
        }
        var N,
          D =
            (((N = (function() {
              function n(t) {
                e(this, n),
                  (this.translate = t),
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
              return t(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || N)(f.Lb(g.c));
            }),
            (N.ɵcmp = f.Fb({
              type: N,
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
                [
                  'data-aos',
                  'fade-up',
                  1,
                  'shape',
                  'shape-ring',
                  'shape-ring-1'
                ],
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
                  (f.Qb(0, 'section', 0),
                  f.Fc(1, '\n  '),
                  f.Qb(2, 'div', 1),
                  f.Fc(3, '\n    '),
                  f.Qb(4, 'div', 2),
                  f.Fc(5, '\n      '),
                  f.Qb(6, 'div', 3),
                  f.Fc(7, '\n        '),
                  f.Mb(8, 'div'),
                  f.Fc(9, '\n      '),
                  f.Pb(),
                  f.Fc(10, '\n    '),
                  f.Pb(),
                  f.Fc(11, '\n\n    '),
                  f.Qb(12, 'div', 4),
                  f.Fc(13, '\n      '),
                  f.Qb(14, 'div', 5),
                  f.Fc(15, '\n        '),
                  f.Qb(16, 'div', 6),
                  f.Fc(17, '\n          '),
                  f.Qb(18, 'div', 7),
                  f.Fc(19, '\n            '),
                  f.Qb(20, 'div', 4),
                  f.Fc(21, '\n              '),
                  f.Qb(22, 'div', 8),
                  f.Fc(23, '\n                '),
                  f.Qb(24, 'span', 9),
                  f.Fc(25, 'Better tech'),
                  f.Pb(),
                  f.Fc(26, '\n                '),
                  f.Qb(27, 'h2', 10),
                  f.Fc(28, '\n                  '),
                  f.Qb(29, 'span', 11),
                  f.Fc(30),
                  f.gc(31, 'translate'),
                  f.Pb(),
                  f.Fc(32),
                  f.gc(33, 'translate'),
                  f.Pb(),
                  f.Fc(34, '\n                '),
                  f.Qb(35, 'p', 12),
                  f.Fc(36),
                  f.gc(37, 'translate'),
                  f.Pb(),
                  f.Fc(38, '\n\n                '),
                  f.Qb(39, 'figure', 13),
                  f.Fc(40, '\n                  '),
                  f.Mb(41, 'img', 14),
                  f.Fc(42, '\n                '),
                  f.Pb(),
                  f.Fc(43, '\n              '),
                  f.Pb(),
                  f.Fc(44, '\n              '),
                  f.Qb(45, 'div', 15),
                  f.Fc(46, '\n                '),
                  f.Dc(47, _, 7, 1, 'div', 16),
                  f.Fc(48, '\n              '),
                  f.Pb(),
                  f.Fc(49, '\n            '),
                  f.Pb(),
                  f.Fc(50, '\n          '),
                  f.Pb(),
                  f.Fc(51, '\n        '),
                  f.Pb(),
                  f.Fc(52, '\n      '),
                  f.Pb(),
                  f.Fc(53, '\n\n      '),
                  f.Qb(54, 'div', 17),
                  f.Fc(55, '\n        '),
                  f.Qb(56, 'div', 2),
                  f.Fc(57, '\n          '),
                  f.Qb(58, 'div', 18),
                  f.Fc(59, '\n            '),
                  f.Mb(60, 'div'),
                  f.Fc(61, '\n          '),
                  f.Pb(),
                  f.Fc(62, '\n        '),
                  f.Pb(),
                  f.Fc(63, '\n\n        '),
                  f.Qb(64, 'div', 19),
                  f.Fc(65, '\n          '),
                  f.Qb(66, 'figure', 20),
                  f.Fc(67, '\n            '),
                  f.Mb(68, 'img', 21),
                  f.Fc(69, '\n          '),
                  f.Pb(),
                  f.Fc(70, '\n          '),
                  f.Qb(71, 'h2', 22),
                  f.Fc(72, '\n            '),
                  f.Qb(73, 'span', 11),
                  f.Fc(74),
                  f.gc(75, 'translate'),
                  f.Pb(),
                  f.Fc(76, '\n          '),
                  f.Pb(),
                  f.Fc(77, '\n\n          '),
                  f.Qb(78, 'p', 12),
                  f.Fc(79),
                  f.gc(80, 'translate'),
                  f.Pb(),
                  f.Fc(81, '\n        '),
                  f.Pb(),
                  f.Fc(82, '\n\n        '),
                  f.Qb(83, 'div', 4),
                  f.Fc(84, '\n          '),
                  f.Dc(85, M, 19, 4, 'div', 23),
                  f.Fc(86, '\n        '),
                  f.Pb(),
                  f.Fc(87, '\n      '),
                  f.Pb(),
                  f.Fc(88, '\n    '),
                  f.Pb(),
                  f.Fc(89, '\n  '),
                  f.Pb(),
                  f.Fc(90, '\n'),
                  f.Pb(),
                  f.Fc(91, '\n')),
                  2 & n &&
                    (f.xb(30),
                    f.Gc(
                      f.hc(
                        31,
                        7,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.BUILT_TECH.INDUSTRY_LEADING'
                      )
                    ),
                    f.xb(2),
                    f.Hc(
                      '\n                  ',
                      f.hc(
                        33,
                        9,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.BUILT_TECH.TECHNOLOGY'
                      ),
                      '\n                '
                    ),
                    f.xb(4),
                    f.Hc(
                      '\n                  ',
                      f.hc(
                        37,
                        11,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.BUILT_TECH.EVERYTHINK_STUDIO'
                      ),
                      '\n                '
                    ),
                    f.xb(11),
                    f.kc('ngForOf', t.stacks),
                    f.xb(27),
                    f.Hc(
                      '',
                      f.hc(
                        75,
                        13,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.BUILT_TECH.ONE_STEP_AHEAD_OF_AIS'
                      ),
                      '\n            '
                    ),
                    f.xb(5),
                    f.Hc(
                      '\n            ',
                      f.hc(
                        80,
                        15,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.BUILT_TECH.EMPOWER_THE_INTELLIGENT'
                      ),
                      '\n          '
                    ),
                    f.xb(6),
                    f.kc('ngForOf', t.items));
              },
              directives: [h.j, Q.a],
              pipes: [g.b],
              styles: ['']
            })),
            N),
          L = function(n, t) {
            return { 'left.%': n, 'top.%': t };
          };
        function C(n, t) {
          if (
            (1 & n &&
              (f.Qb(0, 'div', 12),
              f.Fc(1, '\n            '),
              f.Mb(2, 'img', 13),
              f.Fc(3, '\n          '),
              f.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            f.Ab(
              'floating icon ',
              e.size,
              ' bg-contrast rounded-circle p-3 shadow m-0 absolute d-flex justify-content-center align-items-center'
            ),
              f.kc('ngStyle', f.pc(5, L, e.position.left, e.position.top)),
              f.xb(2),
              f.kc('src', 'assets/images/integration/' + e.name + '.svg', f.yc);
          }
        }
        var k,
          w =
            (((k = (function() {
              function n(t) {
                e(this, n),
                  (this.translate = t),
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
              return t(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || k)(f.Lb(g.c));
            }),
            (k.ɵcmp = f.Fb({
              type: k,
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
                  (f.Qb(0, 'section', 0),
                  f.Fc(1, '\n  '),
                  f.Qb(2, 'div', 1),
                  f.Fc(3, '\n    '),
                  f.Qb(4, 'div', 2),
                  f.Fc(5, '\n      '),
                  f.Mb(6, 'div'),
                  f.Fc(7, '\n    '),
                  f.Pb(),
                  f.Fc(8, '\n  '),
                  f.Pb(),
                  f.Fc(9, '\n  '),
                  f.Qb(10, 'div', 3),
                  f.Fc(11, '\n    '),
                  f.Qb(12, 'div', 4),
                  f.Fc(13, '\n      '),
                  f.Qb(14, 'div', 5),
                  f.Fc(15, '\n        '),
                  f.Qb(16, 'div', 6),
                  f.Fc(17, '\n          '),
                  f.Qb(18, 'p', 7),
                  f.Fc(19),
                  f.gc(20, 'translate'),
                  f.Pb(),
                  f.Fc(21, '\n          '),
                  f.Qb(22, 'h2'),
                  f.Fc(23),
                  f.gc(24, 'translate'),
                  f.Pb(),
                  f.Fc(25, '\n          '),
                  f.Qb(26, 'p'),
                  f.Fc(27),
                  f.gc(28, 'translate'),
                  f.Pb(),
                  f.Fc(29, '\n        '),
                  f.Pb(),
                  f.Fc(30, '\n        '),
                  f.Qb(31, 'a', 8),
                  f.Fc(32),
                  f.gc(33, 'translate'),
                  f.Pb(),
                  f.Fc(34, '\n        '),
                  f.Qb(35, 'a', 9),
                  f.Fc(36),
                  f.gc(37, 'translate'),
                  f.Pb(),
                  f.Fc(38, '\n      '),
                  f.Pb(),
                  f.Fc(39, '\n\n      '),
                  f.Qb(40, 'div', 5),
                  f.Fc(41, '\n        '),
                  f.Qb(42, 'div', 10),
                  f.Fc(43, '\n          '),
                  f.Dc(44, C, 4, 8, 'div', 11),
                  f.Fc(45, '\n        '),
                  f.Pb(),
                  f.Fc(46, '\n      '),
                  f.Pb(),
                  f.Fc(47, '\n    '),
                  f.Pb(),
                  f.Fc(48, '\n  '),
                  f.Pb(),
                  f.Fc(49, '\n'),
                  f.Pb(),
                  f.Fc(50, '\n')),
                  2 & n &&
                    (f.xb(19),
                    f.Hc(
                      '\n            ',
                      f.hc(
                        20,
                        6,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.EXTEND_CORE.LIMITLESS_POSSIBILITIES'
                      ),
                      '\n          '
                    ),
                    f.xb(4),
                    f.Hc(
                      '\n            ',
                      f.hc(
                        24,
                        8,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.EXTEND_CORE.BUILD_FAST_BUILD_MORE'
                      ),
                      '\n          '
                    ),
                    f.xb(4),
                    f.Hc(
                      '\n            ',
                      f.hc(
                        28,
                        10,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.EXTEND_CORE.USING_EVERYTHINK'
                      ),
                      '\n          '
                    ),
                    f.xb(5),
                    f.Hc(
                      '\n          ',
                      f.hc(
                        33,
                        12,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.EXTEND_CORE.KNOW_MORE'
                      ),
                      ''
                    ),
                    f.xb(4),
                    f.Hc(
                      '\n          ',
                      f.hc(
                        37,
                        14,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.EXTEND_CORE.REGISTER_ACCOUNT'
                      ),
                      ''
                    ),
                    f.xb(8),
                    f.kc('ngForOf', t.icons));
              },
              directives: [h.j, h.l],
              pipes: [g.b],
              styles: ['']
            })),
            k);
        function H(n, t) {
          if (
            (1 & n &&
              (f.Qb(0, 'div', 8),
              f.Fc(1, '\n          '),
              f.Qb(2, 'div', 9),
              f.Fc(3, '\n            '),
              f.Qb(4, 'a', 10),
              f.Fc(5, '\n              '),
              f.Mb(6, 'img', 11),
              f.Fc(7, '\n              '),
              f.Qb(8, 'div', 12),
              f.Fc(9, '\n                '),
              f.Qb(10, 'p', 13),
              f.Fc(11),
              f.gc(12, 'translate'),
              f.Pb(),
              f.Fc(13, '\n                '),
              f.Qb(14, 'p', 14),
              f.Fc(15),
              f.gc(16, 'translate'),
              f.Pb(),
              f.Fc(17, '\n              '),
              f.Pb(),
              f.Fc(18, '\n            '),
              f.Pb(),
              f.Fc(19, '\n          '),
              f.Pb(),
              f.Fc(20, '\n        '),
              f.Pb()),
            2 & n)
          ) {
            var e = t.index;
            f.xb(6),
              f.kc(
                'src',
                'https://picsum.photos/500/300?random=' +
                  (e + 1) +
                  '&gravity=south',
                f.yc
              ),
              f.xb(5),
              f.Hc(
                '\n                  ',
                f.hc(
                  12,
                  3,
                  'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.LATEST_PROJECTS.SOMOS_PILEROS'
                ),
                '\n                '
              ),
              f.xb(4),
              f.Hc(
                '\n                  ',
                f.hc(
                  16,
                  5,
                  'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.LATEST_PROJECTS.WE_BUILT_DATA'
                ),
                '\n                '
              );
          }
        }
        var G,
          W,
          U =
            (((G = (function() {
              function n(t) {
                e(this, n),
                  (this.translate = t),
                  (this.images = [
                    { name: 'Image', class: ' rounded-top-left' },
                    { name: 'Image' },
                    { name: 'Image', class: ' rounded-top-right' },
                    { name: 'Image', class: ' rounded-bottom-left' },
                    { name: 'Image' },
                    { name: 'Image', class: ' rounded-bottom-right' }
                  ]);
              }
              return t(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || G)(f.Lb(g.c));
            }),
            (G.ɵcmp = f.Fb({
              type: G,
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
                  (f.Qb(0, 'section', 0),
                  f.Fc(1, '\n  '),
                  f.Qb(2, 'div', 1),
                  f.Fc(3, '\n    '),
                  f.Qb(4, 'div', 2),
                  f.Fc(5, '\n      '),
                  f.Qb(6, 'div', 3),
                  f.Fc(7, '\n        '),
                  f.Qb(8, 'p', 4),
                  f.Fc(9),
                  f.gc(10, 'translate'),
                  f.Pb(),
                  f.Fc(11, '\n        '),
                  f.Qb(12, 'p', 5),
                  f.Fc(13),
                  f.gc(14, 'translate'),
                  f.Pb(),
                  f.Fc(15, '\n      '),
                  f.Pb(),
                  f.Fc(16, '\n      '),
                  f.Qb(17, 'div', 6),
                  f.Fc(18, '\n        '),
                  f.Dc(19, H, 21, 7, 'div', 7),
                  f.Fc(20, '\n      '),
                  f.Pb(),
                  f.Fc(21, '\n    '),
                  f.Pb(),
                  f.Fc(22, '\n  '),
                  f.Pb(),
                  f.Fc(23, '\n'),
                  f.Pb(),
                  f.Fc(24, '\n')),
                  2 & n &&
                    (f.xb(9),
                    f.Hc(
                      '\n          ',
                      f.hc(
                        10,
                        3,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.LATEST_PROJECTS.EVERYTHINK_MARKETPLACE'
                      ),
                      '\n        '
                    ),
                    f.xb(4),
                    f.Hc(
                      '\n          ',
                      f.hc(
                        14,
                        5,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.LATEST_PROJECTS.TAKE_A_LOOK_AT_OUR_LATEST_PROJECTS'
                      ),
                      '\n        '
                    ),
                    f.xb(6),
                    f.kc('ngForOf', t.images));
              },
              directives: [h.j],
              pipes: [g.b],
              styles: ['']
            })),
            G),
          Y = i('wHSu'),
          j = i('3Pt+'),
          K =
            (((W = (function() {
              function n(t) {
                e(this, n), (this.translate = t);
              }
              return t(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || W)(f.Lb(g.c));
            }),
            (W.ɵcmp = f.Fb({
              type: W,
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
                  (f.Qb(0, 'form', 0),
                  f.Fc(1, '\n  '),
                  f.Qb(2, 'div', 1),
                  f.Fc(3, '\n    '),
                  f.Qb(4, 'label', 2),
                  f.Fc(5),
                  f.gc(6, 'translate'),
                  f.Pb(),
                  f.Fc(7, '\n    '),
                  f.Mb(8, 'input', 3),
                  f.Fc(9, '\n  '),
                  f.Pb(),
                  f.Fc(10, '\n  '),
                  f.Qb(11, 'div', 1),
                  f.Fc(12, '\n    '),
                  f.Qb(13, 'label', 4),
                  f.Fc(14),
                  f.gc(15, 'translate'),
                  f.Pb(),
                  f.Fc(16, '\n    '),
                  f.Mb(17, 'input', 5),
                  f.Fc(18, '\n  '),
                  f.Pb(),
                  f.Fc(19, '\n  '),
                  f.Qb(20, 'div', 1),
                  f.Fc(21, '\n    '),
                  f.Qb(22, 'label', 6),
                  f.Fc(23),
                  f.gc(24, 'translate'),
                  f.Pb(),
                  f.Fc(25, '\n    '),
                  f.Mb(26, 'input', 7),
                  f.Fc(27, '\n  '),
                  f.Pb(),
                  f.Fc(28, '\n\n  '),
                  f.Qb(29, 'div', 8),
                  f.Fc(30, '\n    '),
                  f.Qb(31, 'button', 9),
                  f.Fc(32),
                  f.gc(33, 'translate'),
                  f.Pb(),
                  f.Fc(34, '\n  '),
                  f.Pb(),
                  f.Fc(35, '\n'),
                  f.Pb(),
                  f.Fc(36, '\n')),
                  2 & n &&
                    (f.xb(5),
                    f.Hc(
                      '\n      ',
                      f.hc(6, 4, 'ACTIONS.FORM_REGISTER_COMPANY.NAME'),
                      ''
                    ),
                    f.xb(9),
                    f.Gc(f.hc(15, 6, 'ACTIONS.FORM_REGISTER_COMPANY.EMAIL')),
                    f.xb(9),
                    f.Gc(f.hc(24, 8, 'ACTIONS.FORM_REGISTER_COMPANY.COMPANY')),
                    f.xb(9),
                    f.Hc(
                      '\n      ',
                      f.hc(
                        33,
                        10,
                        'ACTIONS.FORM_REGISTER_COMPANY.SEND_MY_APPLICATION'
                      ),
                      'n\n    '
                    ));
              },
              directives: [j.h, j.d, j.e],
              pipes: [g.b],
              styles: ['']
            })),
            W),
          X = i('6NWb');
        function J(n, t) {
          if (
            (1 & n &&
              (f.Qb(0, 'div', 13),
              f.Fc(1, '\n            '),
              f.Qb(2, 'div', 14),
              f.Fc(3, '\n              '),
              f.Qb(4, 'div', 15),
              f.Fc(5, '\n                '),
              f.Mb(6, 'fa-icon', 16),
              f.Fc(7, '\n              '),
              f.Pb(),
              f.Fc(8, '\n\n              '),
              f.Qb(9, 'p', 17),
              f.Fc(10),
              f.Pb(),
              f.Fc(11, '\n            '),
              f.Pb(),
              f.Fc(12, '\n          '),
              f.Pb()),
            2 & n)
          ) {
            var e = t.$implicit,
              c = f.fc();
            f.xb(6), f.kc('icon', c.check), f.xb(4), f.Gc(e);
          }
        }
        var z,
          B =
            (((z = (function() {
              function n(t) {
                e(this, n),
                  (this.translate = t),
                  (this.check = Y.d),
                  (this.features = [
                    'Service integrations',
                    'Partners integration',
                    'No-coding',
                    'Get discovered'
                  ]);
              }
              return t(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || z)(f.Lb(g.c));
            }),
            (z.ɵcmp = f.Fb({
              type: z,
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
                  (f.Qb(0, 'section', 0),
                  f.Fc(1, '\n  '),
                  f.Qb(2, 'div', 1),
                  f.Fc(3, '\n    '),
                  f.Qb(4, 'div', 2),
                  f.Fc(5, '\n      '),
                  f.Qb(6, 'div', 3),
                  f.Fc(7, '\n        '),
                  f.Qb(8, 'div', 4),
                  f.Fc(9, '\n          '),
                  f.Qb(10, 'p', 5),
                  f.Fc(11),
                  f.gc(12, 'translate'),
                  f.Pb(),
                  f.Fc(13, '\n          '),
                  f.Qb(14, 'h2'),
                  f.Fc(15),
                  f.gc(16, 'translate'),
                  f.Pb(),
                  f.Fc(17, '\n\n          '),
                  f.Qb(18, 'p', 6),
                  f.Fc(19),
                  f.gc(20, 'translate'),
                  f.Pb(),
                  f.Fc(21, '\n        '),
                  f.Pb(),
                  f.Fc(22, '\n\n        '),
                  f.Qb(23, 'div', 7),
                  f.Fc(24, '\n          '),
                  f.Dc(25, J, 13, 2, 'div', 8),
                  f.Fc(26, '\n        '),
                  f.Pb(),
                  f.Fc(27, '\n      '),
                  f.Pb(),
                  f.Fc(28, '\n\n      '),
                  f.Qb(29, 'div', 9),
                  f.Fc(30, '\n        '),
                  f.Qb(31, 'div', 10),
                  f.Fc(32, '\n          '),
                  f.Mb(33, 'img', 11),
                  f.Fc(34, '\n\n          '),
                  f.Qb(35, 'div', 12),
                  f.Fc(36, '\n            '),
                  f.Mb(37, 'dc-form-register-company'),
                  f.Fc(38, '\n          '),
                  f.Pb(),
                  f.Fc(39, '\n        '),
                  f.Pb(),
                  f.Fc(40, '\n      '),
                  f.Pb(),
                  f.Fc(41, '\n    '),
                  f.Pb(),
                  f.Fc(42, '\n  '),
                  f.Pb(),
                  f.Fc(43, '\n'),
                  f.Pb(),
                  f.Fc(44, '\n')),
                  2 & n &&
                    (f.xb(11),
                    f.Hc(
                      '\n            ',
                      f.hc(
                        12,
                        4,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.REGISTER.FILL_IN_THE_FORM'
                      ),
                      '\n          '
                    ),
                    f.xb(4),
                    f.Hc(
                      '\n            ',
                      f.hc(
                        16,
                        6,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.REGISTER.YOUR_SUCCESS_IS_OUR_SUCCESS'
                      ),
                      '\n          '
                    ),
                    f.xb(4),
                    f.Hc(
                      '\n            ',
                      f.hc(
                        20,
                        8,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.REGISTER.IF_YOU_ARE_LOOKING'
                      ),
                      '\n          '
                    ),
                    f.xb(6),
                    f.kc('ngForOf', t.features));
              },
              directives: [h.j, K, X.a],
              pipes: [g.b],
              styles: ['']
            })),
            z);
        function q(n, t) {
          if (
            (1 & n &&
              (f.Qb(0, 'div', 20),
              f.Fc(1, '\n          '),
              f.Qb(2, 'div', 21),
              f.Fc(3, '\n            '),
              f.Mb(4, 'dc-feather', 22),
              f.Fc(5, '\n          '),
              f.Pb(),
              f.Fc(6, '\n          '),
              f.Qb(7, 'div', 23),
              f.Fc(8, '\n            '),
              f.Qb(9, 'h5'),
              f.Fc(10),
              f.Pb(),
              f.Fc(11, '\n            '),
              f.Qb(12, 'p'),
              f.Fc(13),
              f.Pb(),
              f.Fc(14, '\n          '),
              f.Pb(),
              f.Fc(15, '\n        '),
              f.Pb()),
            2 & n)
          ) {
            var e = t.$implicit,
              c = t.index,
              i = f.fc();
            f.Db('pb-3', c < i.features.length),
              f.xb(4),
              f.kc('name', e.icon)('iconClass', 'stroke-primary'),
              f.xb(6),
              f.Gc(e.name),
              f.xb(3),
              f.Gc(e.description);
          }
        }
        var $,
          V,
          Z,
          nn,
          tn =
            ((($ = (function() {
              function n(t) {
                e(this, n),
                  (this.translate = t),
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
              return t(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(n) {
              return new (n || $)(f.Lb(g.c));
            }),
            ($.ɵcmp = f.Fb({
              type: $,
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
                  (f.Qb(0, 'section', 0),
                  f.Fc(1, '\n  '),
                  f.Qb(2, 'div', 1),
                  f.Fc(3, '\n    '),
                  f.Mb(4, 'div', 2),
                  f.Fc(5, '\n  '),
                  f.Pb(),
                  f.Fc(6, '\n\n  '),
                  f.Qb(7, 'div', 3),
                  f.Fc(8, '\n    '),
                  f.Qb(9, 'div', 4),
                  f.Fc(10, '\n      '),
                  f.Qb(11, 'div', 5),
                  f.Fc(12, '\n        '),
                  f.Qb(13, 'div', 6),
                  f.Fc(14, '\n          '),
                  f.Qb(15, 'h2', 7),
                  f.Fc(16),
                  f.gc(17, 'translate'),
                  f.Pb(),
                  f.Fc(18, '\n          '),
                  f.Qb(19, 'p', 8),
                  f.Fc(20),
                  f.gc(21, 'translate'),
                  f.Pb(),
                  f.Fc(22, '\n        '),
                  f.Pb(),
                  f.Fc(23, '\n\n        '),
                  f.Dc(24, q, 16, 6, 'div', 9),
                  f.Fc(25, '\n\n        '),
                  f.Mb(26, 'hr', 10),
                  f.Fc(27, '\n        '),
                  f.Qb(28, 'div', 11),
                  f.Fc(29, '\n          '),
                  f.Qb(30, 'a', 12),
                  f.Fc(31),
                  f.gc(32, 'translate'),
                  f.Pb(),
                  f.Fc(33, '\n        '),
                  f.Pb(),
                  f.Fc(34, '\n      '),
                  f.Pb(),
                  f.Fc(35, '\n\n      '),
                  f.Qb(36, 'div', 5),
                  f.Fc(37, '\n        '),
                  f.Qb(38, 'div', 13),
                  f.Fc(39, '\n          '),
                  f.Qb(40, 'div', 14),
                  f.Fc(41, '\n            '),
                  f.Mb(42, 'img', 15),
                  f.Fc(43, '\n          '),
                  f.Pb(),
                  f.Fc(44, '\n\n          '),
                  f.Qb(45, 'div', 16),
                  f.Fc(46, '\n            '),
                  f.Qb(47, 'div', 17),
                  f.Fc(48, '\n              '),
                  f.Mb(49, 'img', 18),
                  f.Fc(50, '\n            '),
                  f.Pb(),
                  f.Fc(51, '\n\n            '),
                  f.Mb(52, 'div', 19),
                  f.Fc(53, '\n          '),
                  f.Pb(),
                  f.Fc(54, '\n        '),
                  f.Pb(),
                  f.Fc(55, '\n      '),
                  f.Pb(),
                  f.Fc(56, '\n    '),
                  f.Pb(),
                  f.Fc(57, '\n  '),
                  f.Pb(),
                  f.Fc(58, '\n'),
                  f.Pb(),
                  f.Fc(59, '\n')),
                  2 & n &&
                    (f.xb(16),
                    f.Hc(
                      '\n            ',
                      f.hc(
                        17,
                        4,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.WHY_CHOOSE_US.SIMPLE_IMPLEMENTATION_WITH'
                      ),
                      '\n          '
                    ),
                    f.xb(4),
                    f.Hc(
                      '\n            ',
                      f.hc(
                        21,
                        6,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.WHY_CHOOSE_US.SINCE_THE_NEED_FOR_HUMAN'
                      ),
                      '\n          '
                    ),
                    f.xb(4),
                    f.kc('ngForOf', t.features),
                    f.xb(7),
                    f.Hc(
                      '\n            ',
                      f.hc(
                        32,
                        8,
                        'DEMOS.DATAFLOWS_CREATOORS.INTEGRATION.WHY_CHOOSE_US.KNOW_MORE'
                      ),
                      '\n          '
                    ));
              },
              directives: [h.j, Q.a],
              pipes: [g.b],
              styles: ['']
            })),
            $),
          en = i('aaX3'),
          cn = i('nEva'),
          an = i('VKEt'),
          sn = i('iLZQ'),
          on = [
            {
              path: '',
              component:
                ((V = (function() {
                  function n(t) {
                    e(this, n), (this.i18nService = t), this.updateSeoTags();
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
                            'DEMOS.DATAFLOWS_CREATOORS.NETWORK_SEARCH_META.TITLE',
                            'DEMOS.DATAFLOWS_CREATOORS.NETWORK_SEARCH_META.KEYWORDS'
                          );
                        }
                      }
                    ]),
                    n
                  );
                })()),
                (V.ɵfac = function(n) {
                  return new (n || V)(f.Lb(u.a));
                }),
                (V.ɵcmp = f.Fb({
                  type: V,
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
                      (f.Mb(0, 'dc-navbar-default', 0),
                      f.Fc(1, '\n\n'),
                      f.Qb(2, 'main', 1),
                      f.Fc(3, '\n  '),
                      f.Mb(4, 'dc-integration-heading'),
                      f.Fc(5, '\n  '),
                      f.Mb(6, 'dc-integration-how-it-works'),
                      f.Fc(7, '\n  '),
                      f.Mb(8, 'dc-integration-built-tech'),
                      f.Fc(9, '\n  '),
                      f.Mb(10, 'dc-integration-extend-core'),
                      f.Fc(11, '\n  '),
                      f.Mb(12, 'dc-integration-latest-projects'),
                      f.Fc(13, '\n  '),
                      f.Mb(14, 'dc-integration-register'),
                      f.Fc(15, '\n  '),
                      f.Mb(16, 'dc-integration-why-choose-us'),
                      f.Fc(17, '\n  '),
                      f.Mb(18, 'dc-slider-icons', 2),
                      f.Fc(19, '\n  '),
                      f.Mb(20, 'dc-testimonial-skewed-slider'),
                      f.Fc(21, '\n  '),
                      f.Mb(22, 'dc-cta1', 2),
                      f.Fc(23, '\n  '),
                      f.Mb(24, 'dc-footer2'),
                      f.Fc(25, '\n'),
                      f.Pb(),
                      f.Fc(26, '\n')),
                      2 & n &&
                        (f.kc('useOnlyDarkLogo', !0)('darkLinks', !0),
                        f.xb(18),
                        f.kc('edge', 'top-left')('background', 'light'),
                        f.xb(4),
                        f.kc('edge', 'top-left')('background', 'contrast'));
                  },
                  directives: [
                    m.a,
                    x,
                    I,
                    D,
                    w,
                    U,
                    B,
                    tn,
                    en.a,
                    cn.a,
                    an.a,
                    sn.a
                  ],
                  styles: ['']
                })),
                V),
              data: { title: Object(u.c)('About') }
            }
          ],
          rn =
            (((Z = function n() {
              e(this, n);
            }).ɵmod = f.Jb({ type: Z })),
            (Z.ɵinj = f.Ib({
              factory: function(n) {
                return new (n || Z)();
              },
              imports: [[p.g.forChild(on)], p.g]
            })),
            Z),
          bn = i('ZpN7'),
          dn =
            (((nn = function n() {
              e(this, n);
            }).ɵmod = f.Jb({ type: nn })),
            (nn.ɵinj = f.Ib({
              factory: function(n) {
                return new (n || nn)();
              },
              imports: [
                [s.a, o.a, r.a, b.a, d.a, F.a, l.a, bn.a, rn, g.a.forChild()]
              ]
            })),
            nn);
      },
      ORAR: function(n, t, c) {
        'use strict';
        c.d(t, 'a', function() {
          return o;
        });
        var i = c('tyNb'),
          a = c('sYmb'),
          s = c('fXoL'),
          o = (function() {
            var n = function n() {
              e(this, n);
            };
            return (
              (n.ɵmod = s.Jb({ type: n })),
              (n.ɵinj = s.Ib({
                factory: function(t) {
                  return new (t || n)();
                },
                imports: [[i.g, a.a.forChild()]]
              })),
              n
            );
          })();
      },
      pu65: function(n, t, c) {
        'use strict';
        c.d(t, 'a', function() {
          return r;
        });
        var i = c('nhfI'),
          a = c('M0ag'),
          s = c('sYmb'),
          o = c('fXoL'),
          r = (function() {
            var n = function n() {
              e(this, n);
            };
            return (
              (n.ɵmod = o.Jb({ type: n })),
              (n.ɵinj = o.Ib({
                factory: function(t) {
                  return new (t || n)();
                },
                imports: [[i.c, a.a, s.a.forChild()]]
              })),
              n
            );
          })();
      }
    }
  ]);
})();
