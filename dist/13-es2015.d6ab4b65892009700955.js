(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    '+tcz': function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return o;
      }),
        e.d(n, 'b', function() {
          return r;
        });
      var i = e('fXoL'),
        s = function() {
          return (s =
            Object.assign ||
            function(t) {
              for (var n, e = 1, i = arguments.length; e < i; e++)
                for (var s in (n = arguments[e]))
                  Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
              return t;
            }).apply(this, arguments);
        },
        a = (function() {
          function t(t, n, e) {
            var i = this;
            (this.target = t),
              (this.endVal = n),
              (this.options = e),
              (this.version = '2.0.4'),
              (this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
              }),
              (this.finalEndVal = null),
              (this.useEasing = !0),
              (this.countDown = !1),
              (this.error = ''),
              (this.startVal = 0),
              (this.paused = !0),
              (this.count = function(t) {
                i.startTime || (i.startTime = t);
                var n = t - i.startTime;
                (i.remaining = i.duration - n),
                  (i.frameVal = i.useEasing
                    ? i.countDown
                      ? i.startVal -
                        i.easingFn(n, 0, i.startVal - i.endVal, i.duration)
                      : i.easingFn(
                          n,
                          i.startVal,
                          i.endVal - i.startVal,
                          i.duration
                        )
                    : i.countDown
                    ? i.startVal - (n / i.duration) * (i.startVal - i.endVal)
                    : i.startVal + (n / i.duration) * (i.endVal - i.startVal)),
                  (i.frameVal = i.countDown
                    ? i.frameVal < i.endVal
                      ? i.endVal
                      : i.frameVal
                    : i.frameVal > i.endVal
                    ? i.endVal
                    : i.frameVal),
                  (i.frameVal =
                    Math.round(i.frameVal * i.decimalMult) / i.decimalMult),
                  i.printValue(i.frameVal),
                  n < i.duration
                    ? (i.rAF = requestAnimationFrame(i.count))
                    : null !== i.finalEndVal
                    ? i.update(i.finalEndVal)
                    : i.callback && i.callback();
              }),
              (this.formatNumber = function(t) {
                var n,
                  e,
                  s,
                  a,
                  c,
                  r = t < 0 ? '-' : '';
                if (
                  ((n = Math.abs(t).toFixed(i.options.decimalPlaces)),
                  (s = (e = (n += '').split('.'))[0]),
                  (a = e.length > 1 ? i.options.decimal + e[1] : ''),
                  i.options.useGrouping)
                ) {
                  c = '';
                  for (var o = 0, l = s.length; o < l; ++o)
                    0 !== o && o % 3 == 0 && (c = i.options.separator + c),
                      (c = s[l - o - 1] + c);
                  s = c;
                }
                return (
                  i.options.numerals &&
                    i.options.numerals.length &&
                    ((s = s.replace(/[0-9]/g, function(t) {
                      return i.options.numerals[+t];
                    })),
                    (a = a.replace(/[0-9]/g, function(t) {
                      return i.options.numerals[+t];
                    }))),
                  r + i.options.prefix + s + a + i.options.suffix
                );
              }),
              (this.easeOutExpo = function(t, n, e, i) {
                return (e * (1 - Math.pow(2, (-10 * t) / i)) * 1024) / 1023 + n;
              }),
              (this.options = s({}, this.defaults, e)),
              (this.formattingFn = this.options.formattingFn
                ? this.options.formattingFn
                : this.formatNumber),
              (this.easingFn = this.options.easingFn
                ? this.options.easingFn
                : this.easeOutExpo),
              (this.startVal = this.validateValue(this.options.startVal)),
              (this.frameVal = this.startVal),
              (this.endVal = this.validateValue(n)),
              (this.options.decimalPlaces = Math.max(
                this.options.decimalPlaces
              )),
              (this.decimalMult = Math.pow(10, this.options.decimalPlaces)),
              this.resetDuration(),
              (this.options.separator = String(this.options.separator)),
              (this.useEasing = this.options.useEasing),
              '' === this.options.separator && (this.options.useGrouping = !1),
              (this.el = 'string' == typeof t ? document.getElementById(t) : t),
              this.el
                ? this.printValue(this.startVal)
                : (this.error = '[CountUp] target is null or undefined');
          }
          return (
            (t.prototype.determineDirectionAndSmartEasing = function() {
              var t = this.finalEndVal ? this.finalEndVal : this.endVal;
              (this.countDown = this.startVal > t),
                Math.abs(t - this.startVal) > this.options.smartEasingThreshold
                  ? ((this.finalEndVal = t),
                    (this.endVal =
                      t +
                      (this.countDown ? 1 : -1) *
                        this.options.smartEasingAmount),
                    (this.duration = this.duration / 2))
                  : ((this.endVal = t), (this.finalEndVal = null)),
                (this.useEasing = !this.finalEndVal && this.options.useEasing);
            }),
            (t.prototype.start = function(t) {
              this.error ||
                ((this.callback = t),
                this.duration > 0
                  ? (this.determineDirectionAndSmartEasing(),
                    (this.paused = !1),
                    (this.rAF = requestAnimationFrame(this.count)))
                  : this.printValue(this.endVal));
            }),
            (t.prototype.pauseResume = function() {
              this.paused
                ? ((this.startTime = null),
                  (this.duration = this.remaining),
                  (this.startVal = this.frameVal),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)))
                : cancelAnimationFrame(this.rAF),
                (this.paused = !this.paused);
            }),
            (t.prototype.reset = function() {
              cancelAnimationFrame(this.rAF),
                (this.paused = !0),
                this.resetDuration(),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                this.printValue(this.startVal);
            }),
            (t.prototype.update = function(t) {
              cancelAnimationFrame(this.rAF),
                (this.startTime = null),
                (this.endVal = this.validateValue(t)),
                this.endVal !== this.frameVal &&
                  ((this.startVal = this.frameVal),
                  this.finalEndVal || this.resetDuration(),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)));
            }),
            (t.prototype.printValue = function(t) {
              var n = this.formattingFn(t);
              'INPUT' === this.el.tagName
                ? (this.el.value = n)
                : 'text' === this.el.tagName || 'tspan' === this.el.tagName
                ? (this.el.textContent = n)
                : (this.el.innerHTML = n);
            }),
            (t.prototype.ensureNumber = function(t) {
              return 'number' == typeof t && !isNaN(t);
            }),
            (t.prototype.validateValue = function(t) {
              var n = Number(t);
              return this.ensureNumber(n)
                ? n
                : ((this.error = '[CountUp] invalid start or end value: ' + t),
                  null);
            }),
            (t.prototype.resetDuration = function() {
              (this.startTime = null),
                (this.duration = 1e3 * Number(this.options.duration)),
                (this.remaining = this.duration);
            }),
            t
          );
        })(),
        c = e('ofXK');
      let r = (() => {
          let t = class {
            constructor(t, n, e) {
              (this.el = t),
                (this.zone = n),
                (this.platformId = e),
                (this.options = {}),
                (this.reanimateOnClick = !0),
                (this.complete = new i.n());
            }
            onClick() {
              this.reanimateOnClick && this.animate();
            }
            ngOnChanges(t) {
              Object(c.v)(this.platformId) &&
                t.endVal &&
                void 0 !== t.endVal.currentValue &&
                (void 0 !== this.previousEndVal &&
                  (this.options = Object.assign({}, this.options, {
                    startVal: this.previousEndVal
                  })),
                (this.countUp = new a(
                  this.el.nativeElement,
                  this.endVal,
                  this.options
                )),
                this.animate(),
                (this.previousEndVal = this.endVal));
            }
            animate() {
              this.zone.runOutsideAngular(() => {
                this.countUp.reset(),
                  this.countUp.start(() => {
                    this.zone.run(() => {
                      this.complete.emit();
                    });
                  });
              });
            }
          };
          return (
            (t.ɵfac = function(n) {
              return new (n || t)(i.Lb(i.l), i.Lb(i.z), i.Lb(i.B));
            }),
            (t.ɵdir = i.Gb({
              type: t,
              selectors: [['', 'countUp', '']],
              hostBindings: function(t, n) {
                1 & t &&
                  i.bc('click', function() {
                    return n.onClick();
                  });
              },
              inputs: {
                options: 'options',
                reanimateOnClick: 'reanimateOnClick',
                endVal: ['countUp', 'endVal']
              },
              outputs: { complete: 'complete' },
              features: [i.vb]
            })),
            t
          );
        })(),
        o = (() => {
          let t = class {};
          return (
            (t.ɵmod = i.Jb({ type: t })),
            (t.ɵinj = i.Ib({
              factory: function(n) {
                return new (n || t)();
              },
              imports: [[]]
            })),
            t
          );
        })();
    },
    '2d4A': function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return o;
      });
      var i = e('nhfI'),
        s = e('6NWb'),
        a = e('M0ag'),
        c = e('sYmb'),
        r = e('fXoL');
      let o = (() => {
        class t {}
        return (
          (t.ɵmod = r.Jb({ type: t })),
          (t.ɵinj = r.Ib({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[i.c, s.b, a.a, c.a.forChild()]]
          })),
          t
        );
      })();
    },
    '8klf': function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return r;
      });
      var i = e('M0ag'),
        s = e('tyNb'),
        a = e('sYmb'),
        c = e('fXoL');
      let r = (() => {
        class t {}
        return (
          (t.ɵmod = c.Jb({ type: t })),
          (t.ɵinj = c.Ib({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[i.a, s.g, a.a.forChild()]]
          })),
          t
        );
      })();
    },
    ORAR: function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return c;
      });
      var i = e('tyNb'),
        s = e('sYmb'),
        a = e('fXoL');
      let c = (() => {
        class t {}
        return (
          (t.ɵmod = a.Jb({ type: t })),
          (t.ɵinj = a.Ib({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[i.g, s.a.forChild()]]
          })),
          t
        );
      })();
    },
    V6j0: function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return r;
      });
      var i = e('M0ag'),
        s = e('+tcz'),
        a = e('sYmb'),
        c = e('fXoL');
      let r = (() => {
        class t {}
        return (
          (t.ɵmod = c.Jb({ type: t })),
          (t.ɵinj = c.Ib({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[i.a, s.a, a.a.forChild()]]
          })),
          t
        );
      })();
    },
    X5hu: function(t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, 'SocialModule', function() {
          return U;
        });
      var i = e('M0ag'),
        s = e('XMwz'),
        a = e('V6j0'),
        c = e('2d4A'),
        r = e('pu65'),
        o = e('ORAR'),
        l = e('8klf'),
        u = e('M0Rk'),
        d = e('ZpN7'),
        b = e('tyNb'),
        m = e('ey9i'),
        p = e('fXoL'),
        h = e('8ynp'),
        g = e('ofXK');
      function f(t, n) {
        if (
          (1 & t &&
            (p.Qb(0, 'div', 15),
            p.Fc(1, '\n          '),
            p.Mb(2, 'img', 16),
            p.Fc(3, '\n        '),
            p.Pb()),
          2 & t)
        ) {
          const t = n.$implicit;
          p.xb(2), p.kc('src', 'assets/img/logos/' + t + '.svg', p.yc);
        }
      }
      const F = function() {
          return ['/auth/subscribe'];
        },
        v = function() {
          return [1, 2, 3, 4];
        };
      let y = (() => {
        class t {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = p.Fb({
            type: t,
            selectors: [['dc-social-heading']],
            decls: 42,
            vars: 4,
            consts: [
              [1, 'header', 'section', 'social-media-heading'],
              [
                'src',
                'assets/img/bg/social/bg-shape.svg',
                'alt',
                '...',
                1,
                'social-bg-shape',
                'absolute'
              ],
              [1, 'container', 'py-md-8'],
              [1, 'row', 'gap-y', 'align-items-center'],
              [1, 'col-lg-6', 'col-xl-5', 'text-center', 'text-lg-left'],
              [
                1,
                'badge-pill',
                'badge',
                'badge-light',
                'border',
                'bold',
                'px-4',
                'py-2'
              ],
              [1, 'text-primary'],
              [1, 'font-md', 'extra-bold', 'display-md-4'],
              [1, 'lead', 'my-5'],
              [1, 'btn', 'btn-info', 'btn-rounded', 'px-3', 3, 'routerLink'],
              [1, 'col-lg-6', 'ml-lg-auto', 'text-center', 'text-lg-right'],
              [
                'src',
                'assets/img/bg/social/social.svg',
                'alt',
                '',
                1,
                'social-image'
              ],
              [
                1,
                'container-fluid',
                'shadow',
                'bg-primary',
                'py-4',
                'rounded',
                'mt-7'
              ],
              [1, 'row', 'gap-y'],
              [
                'class',
                'col-xs-4 col-md-3 col-6 px-lg-5 py-lg-4',
                4,
                'ngFor',
                'ngForOf'
              ],
              [1, 'col-xs-4', 'col-md-3', 'col-6', 'px-lg-5', 'py-lg-4'],
              [
                'alt',
                '...',
                1,
                'img-responsive',
                'px-2',
                'px-sm-4',
                'px-md-2',
                'px-lg-1',
                3,
                'src'
              ]
            ],
            template: function(t, n) {
              1 & t &&
                (p.Qb(0, 'header', 0),
                p.Fc(1, '\n  '),
                p.Mb(2, 'img', 1),
                p.Fc(3, '\n\n  '),
                p.Qb(4, 'div', 2),
                p.Fc(5, '\n    '),
                p.Qb(6, 'div', 3),
                p.Fc(7, '\n      '),
                p.Qb(8, 'div', 4),
                p.Fc(9, '\n        '),
                p.Qb(10, 'p', 5),
                p.Fc(11, '\n          '),
                p.Qb(12, 'span', 6),
                p.Fc(13, '80% Off'),
                p.Pb(),
                p.Fc(14, ' when registering\n        '),
                p.Pb(),
                p.Fc(15, '\n        '),
                p.Qb(16, 'h1', 7),
                p.Fc(17, 'Social Media Services'),
                p.Pb(),
                p.Fc(18, '\n        '),
                p.Qb(19, 'p', 8),
                p.Fc(
                  20,
                  '\n          It all begins by choosing the right tools, start with a complete set\n          of design blocks to achieve your next success.\n        '
                ),
                p.Pb(),
                p.Fc(21, '\n\n        '),
                p.Qb(22, 'a', 9),
                p.Fc(23, 'Try it free'),
                p.Pb(),
                p.Fc(24, '\n      '),
                p.Pb(),
                p.Fc(25, '\n\n      '),
                p.Qb(26, 'div', 10),
                p.Fc(27, '\n        '),
                p.Mb(28, 'img', 11),
                p.Fc(29, '\n      '),
                p.Pb(),
                p.Fc(30, '\n    '),
                p.Pb(),
                p.Fc(31, '\n\n    '),
                p.Qb(32, 'div', 12),
                p.Fc(33, '\n      '),
                p.Qb(34, 'div', 13),
                p.Fc(35, '\n        '),
                p.Dc(36, f, 4, 1, 'div', 14),
                p.Fc(37, '\n      '),
                p.Pb(),
                p.Fc(38, '\n    '),
                p.Pb(),
                p.Fc(39, '\n  '),
                p.Pb(),
                p.Fc(40, '\n'),
                p.Pb(),
                p.Fc(41, '\n')),
                2 & t &&
                  (p.xb(22),
                  p.kc('routerLink', p.nc(2, F)),
                  p.xb(14),
                  p.kc('ngForOf', p.nc(3, v)));
            },
            directives: [b.f, g.j],
            styles: ['']
          })),
          t
        );
      })();
      var x = e('7cks'),
        V = e('akeW'),
        P = e('sYmb'),
        Q = e('+tcz');
      function k(t, n) {
        if (
          (1 & t &&
            (p.Qb(0, 'div', 7),
            p.Fc(1, '\n        '),
            p.Qb(2, 'p', 8),
            p.Fc(3),
            p.Pb(),
            p.Fc(4, '\n        '),
            p.Qb(5, 'p', 9),
            p.Fc(6),
            p.Pb(),
            p.Fc(7, '\n      '),
            p.Pb()),
          2 & t)
        ) {
          const t = n.$implicit;
          p.xb(2),
            p.kc('countUp', t.value),
            p.xb(1),
            p.Hc('\n          ', t.value, '\n        '),
            p.xb(3),
            p.Gc(t.title);
        }
      }
      let w = (() => {
        class t {
          constructor(t) {
            (this.translate = t),
              (this.counters = [
                { value: 273, title: 'Components' },
                { value: 654, title: 'Downloads' },
                { value: 7941, title: 'Followers' },
                { value: 654, title: 'New users' }
              ]);
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)(p.Lb(P.c));
          }),
          (t.ɵcmp = p.Fb({
            type: t,
            selectors: [['dc-counter6']],
            decls: 21,
            vars: 4,
            consts: [
              [
                1,
                'section',
                'image-background',
                'contain',
                'center-bottom',
                2,
                'background-image',
                'url(assets/img/shps/map-dots.svg)'
              ],
              [1, 'container'],
              [1, 'text-center', 'mb-6'],
              [
                1,
                'rounded-pill',
                'badge',
                'badge-info',
                'bold',
                'px-4',
                'py-2',
                'mb-4'
              ],
              [1, 'bold'],
              [1, 'row', 'gap-y'],
              ['class', 'col-6 col-md-3', 4, 'ngFor', 'ngForOf'],
              [1, 'col-6', 'col-md-3'],
              [
                1,
                'counter',
                'regular',
                'text-primary',
                'font-md',
                'display-md-4',
                'my-0',
                3,
                'countUp'
              ],
              [1, 'text-secondary', 'regular', 'm-0']
            ],
            template: function(t, n) {
              1 & t &&
                (p.Fc(0, '\n'),
                p.Qb(1, 'section', 0),
                p.Fc(2, '\n  '),
                p.Qb(3, 'div', 1),
                p.Fc(4, '\n    '),
                p.Qb(5, 'div', 2),
                p.Fc(6, '\n      '),
                p.Qb(7, 'span', 3),
                p.Fc(8),
                p.gc(9, 'translate'),
                p.Pb(),
                p.Fc(10, '\n      '),
                p.Mb(11, 'h2', 4),
                p.Fc(12, '\n    '),
                p.Pb(),
                p.Fc(13, '\n\n    '),
                p.Qb(14, 'div', 5),
                p.Fc(15, '\n      '),
                p.Dc(16, k, 8, 3, 'div', 6),
                p.Fc(17, '\n    '),
                p.Pb(),
                p.Fc(18, '\n  '),
                p.Pb(),
                p.Fc(19, '\n'),
                p.Pb(),
                p.Fc(20, '\n')),
                2 & t &&
                  (p.xb(8),
                  p.Gc(p.hc(9, 2, 'COUNTER.COUNTER6.GET_THEVERY_BEST')),
                  p.xb(8),
                  p.kc('ngForOf', n.counters));
            },
            directives: [g.j, Q.b],
            pipes: [P.b],
            styles: ['']
          })),
          t
        );
      })();
      var E = e('cqDB');
      let O = (() => {
        class t {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = p.Fb({
            type: t,
            selectors: [['dc-social-register']],
            decls: 14,
            vars: 0,
            consts: [
              [1, 'section', 'overflow-hidden'],
              [1, 'container', 'pt-4', 'bring-to-front'],
              [1, 'row'],
              [1, 'col-md-10', 'mx-md-auto']
            ],
            template: function(t, n) {
              1 & t &&
                (p.Qb(0, 'section', 0),
                p.Fc(1, '\n  '),
                p.Qb(2, 'div', 1),
                p.Fc(3, '\n    '),
                p.Qb(4, 'div', 2),
                p.Fc(5, '\n      '),
                p.Qb(6, 'div', 3),
                p.Fc(7, '\n        '),
                p.Mb(8, 'dc-form-register-simple-inline'),
                p.Fc(9, '\n      '),
                p.Pb(),
                p.Fc(10, '\n    '),
                p.Pb(),
                p.Fc(11, '\n  '),
                p.Pb(),
                p.Fc(12, '\n'),
                p.Pb(),
                p.Fc(13, '\n'));
            },
            directives: [E.a],
            styles: ['']
          })),
          t
        );
      })();
      var M = e('nhfI');
      function D(t, n) {
        if (1 & t) {
          const t = p.Rb();
          p.Qb(0, 'a', 14),
            p.bc('click', function() {
              p.vc(t);
              const e = n.index;
              return p.fc().updateSlider(e);
            }),
            p.Fc(1, '\n              '),
            p.Qb(2, 'h6', 15),
            p.Fc(3),
            p.Pb(),
            p.Fc(4, '\n              '),
            p.Qb(5, 'p', 16),
            p.Fc(6),
            p.Pb(),
            p.Fc(7, '\n            '),
            p.Pb();
        }
        if (2 & t) {
          const t = n.$implicit,
            e = n.index,
            i = p.fc();
          p.Db('active', e === i.currentSlide),
            p.yb('data-step', e + 1),
            p.xb(3),
            p.Gc(t.title),
            p.xb(3),
            p.Gc(t.description);
        }
      }
      function A(t, n) {
        if (
          (1 & t &&
            (p.Qb(0, 'div', 17),
            p.Fc(1, '\n                  '),
            p.Mb(2, 'img', 18),
            p.Fc(3, '\n                '),
            p.Pb()),
          2 & t)
        ) {
          const t = n.$implicit;
          p.xb(2),
            p.kc('src', 'assets/img/screens/dash/' + t.img + '.png', p.yc);
        }
      }
      let I = (() => {
        class t {
          constructor() {
            (this.currentSlide = 0),
              (this.elements = [
                {
                  title: 'Dashboard',
                  description:
                    'Adipisci atque, corporis dicta doloribus eius enim esse fugit iure non quaerat, quod.',
                  img: '4'
                },
                {
                  title: 'Inbox',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  img: '1'
                },
                {
                  title: 'Calendar',
                  description:
                    'Aliquid aspernatur, assumenda cumque esse, excepturi magni mollitia.',
                  img: '2'
                },
                {
                  title: 'DataTables',
                  description:
                    'Accusamus cum debitis earum, ex illum impedit in incidunt ipsa.',
                  img: 'datatables'
                }
              ]);
          }
          ngOnInit() {}
          updateSlider(t) {
            this.currentSlide = t;
          }
          onIndexChange(t) {
            this.currentSlide = t;
          }
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = p.Fb({
            type: t,
            selectors: [['dc-slider-tools4-success']],
            decls: 43,
            vars: 3,
            consts: [
              [1, 'section', 'bg-primary'],
              [1, 'container', 'bring-to-front'],
              [1, 'section-heading', 'text-center', 'text-contrast'],
              [1, 'text-contrast'],
              [1, 'p-4', 'bg-contrast', 'shadow-lg', 'rounded'],
              [1, 'row', 'align-items-center'],
              [1, 'col-md-5', 'mr-md-auto'],
              [
                'id',
                'sw-nav-shadow',
                1,
                'nav',
                'flex-md-column',
                'nav-pills',
                'nav-fill',
                'nav-pills-light'
              ],
              [
                'href',
                'https://everythink.ai/app/#/sessions/signup',
                'class',
                'nav-item text-left nav-link py-3 my-2',
                3,
                'active',
                'click',
                4,
                'ngFor',
                'ngForOf'
              ],
              [1, 'col-md-6'],
              [1, 'device', 'browser', 'shadow-sm'],
              [1, 'screen'],
              [1, 'mt-4', 'mt-md-0', 3, 'index', 'indexChange'],
              ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
              [
                'href',
                'https://everythink.ai/app/#/sessions/signup',
                1,
                'nav-item',
                'text-left',
                'nav-link',
                'py-3',
                'my-2',
                3,
                'click'
              ],
              [1, 'bold'],
              [1, 'my-0', 'd-none', 'd-md-block'],
              [1, 'swiper-slide'],
              ['alt', '', 1, 'img-responsive', 'rounded-bottom', 3, 'src']
            ],
            template: function(t, n) {
              1 & t &&
                (p.Qb(0, 'section', 0),
                p.Fc(1, '\n  '),
                p.Qb(2, 'div', 1),
                p.Fc(3, '\n    '),
                p.Qb(4, 'div', 2),
                p.Fc(5, '\n      '),
                p.Qb(6, 'h2', 3),
                p.Fc(7, 'Delivering tools for success'),
                p.Pb(),
                p.Fc(8, '\n      '),
                p.Qb(9, 'p', 3),
                p.Fc(
                  10,
                  '\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur\n        dicta nulla officia quaerat ratione reiciendis soluta. Accusamus\n        delectus dolore doloribus ducimus eveniet magnam, molestias nostrum\n        quas, quos, reiciendis ut!\n      '
                ),
                p.Pb(),
                p.Fc(11, '\n    '),
                p.Pb(),
                p.Fc(12, '\n\n    '),
                p.Qb(13, 'div', 4),
                p.Fc(14, '\n      '),
                p.Qb(15, 'div', 5),
                p.Fc(16, '\n        '),
                p.Qb(17, 'div', 6),
                p.Fc(18, '\n          '),
                p.Qb(19, 'nav', 7),
                p.Fc(20, '\n            '),
                p.Dc(21, D, 8, 5, 'a', 8),
                p.Fc(22, '\n          '),
                p.Pb(),
                p.Fc(23, '\n        '),
                p.Pb(),
                p.Fc(24, '\n\n        '),
                p.Qb(25, 'div', 9),
                p.Fc(26, '\n          '),
                p.Qb(27, 'div', 10),
                p.Fc(28, '\n            '),
                p.Qb(29, 'div', 11),
                p.Fc(30, '\n              '),
                p.Qb(31, 'swiper', 12),
                p.bc('indexChange', function(t) {
                  return n.onIndexChange(t);
                }),
                p.Fc(32, '\n                '),
                p.Dc(33, A, 4, 1, 'div', 13),
                p.Fc(34, '\n              '),
                p.Pb(),
                p.Fc(35, '\n            '),
                p.Pb(),
                p.Fc(36, '\n          '),
                p.Pb(),
                p.Fc(37, '\n        '),
                p.Pb(),
                p.Fc(38, '\n      '),
                p.Pb(),
                p.Fc(39, '\n    '),
                p.Pb(),
                p.Fc(40, '\n  '),
                p.Pb(),
                p.Fc(41, '\n'),
                p.Pb(),
                p.Fc(42, '\n')),
                2 & t &&
                  (p.xb(21),
                  p.kc('ngForOf', n.elements),
                  p.xb(10),
                  p.kc('index', n.currentSlide),
                  p.xb(2),
                  p.kc('ngForOf', n.elements));
            },
            directives: [g.j, M.a],
            styles: ['']
          })),
          t
        );
      })();
      var S = e('wHSu'),
        L = e('6NWb');
      function C(t, n) {
        if (
          (1 & t &&
            (p.Qb(0, 'div'),
            p.Fc(1, '\n        '),
            p.Qb(2, 'div', 7),
            p.Fc(3, '\n          '),
            p.Mb(4, 'fa-icon', 8),
            p.Fc(5, '\n          '),
            p.Qb(6, 'p'),
            p.Fc(7),
            p.Pb(),
            p.Fc(8, '\n        '),
            p.Pb(),
            p.Fc(9, '\n      '),
            p.Pb()),
          2 & t)
        ) {
          const t = n.$implicit,
            e = n.index,
            i = p.fc();
          p.Ab('card shadow-lg off-left-background border-0 ', t.class, ''),
            p.Db('mr-3', e < i.cards.length),
            p.xb(4),
            p.zb(t.icon.class),
            p.kc('icon', t.icon.name),
            p.xb(2),
            p.Ab('bold ', t.title.class, ''),
            p.xb(1),
            p.Gc(t.title.text);
        }
      }
      let N = (() => {
        class t {
          constructor() {
            this.cards = [
              {
                icon: { name: S.f, class: 'text-info' },
                title: { text: 'Inbox', class: '' }
              },
              {
                icon: { name: S.c, class: '' },
                title: { text: 'Reports', class: '' },
                class: ' text-contrast shadow-lg bg-info'
              },
              {
                icon: { name: S.b, class: 'text-danger' },
                title: { text: 'Calendar', class: '' }
              },
              {
                icon: { name: S.g, class: 'text-success' },
                title: { text: 'Invoices' }
              },
              {
                icon: { name: S.a, class: 'text-primary' },
                title: { text: 'Content' }
              }
            ];
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = p.Fb({
            type: t,
            selectors: [['dc-social-services']],
            decls: 23,
            vars: 1,
            consts: [
              [1, 'section', 'bg-light', 'edge', 'top-left'],
              [1, 'container', 'bring-to-front'],
              [1, 'section-heading', 'text-center'],
              [1, 'bold'],
              [1, 'text-secondary', 'lead'],
              [1, 'd-flex', 'justify-content-center', 'align-items-center'],
              [3, 'class', 'mr-3', 4, 'ngFor', 'ngForOf'],
              [1, 'card-body', 'p-md-5', 'text-center'],
              ['size', '2x', 3, 'icon']
            ],
            template: function(t, n) {
              1 & t &&
                (p.Fc(0, '\n'),
                p.Qb(1, 'section', 0),
                p.Fc(2, '\n  '),
                p.Qb(3, 'div', 1),
                p.Fc(4, '\n    '),
                p.Qb(5, 'div', 2),
                p.Fc(6, '\n      '),
                p.Qb(7, 'h2'),
                p.Fc(8, 'What '),
                p.Qb(9, 'span', 3),
                p.Fc(10, 'We Offer'),
                p.Pb(),
                p.Pb(),
                p.Fc(11, '\n      '),
                p.Qb(12, 'p', 4),
                p.Fc(
                  13,
                  '\n        EveryThink is a complete set of design and developing tools. Either your\n        business is just starting or have years on the market, you can take\n        advantage of it.\n      '
                ),
                p.Pb(),
                p.Fc(14, '\n    '),
                p.Pb(),
                p.Fc(15, '\n\n    '),
                p.Qb(16, 'div', 5),
                p.Fc(17, '\n      '),
                p.Dc(18, C, 10, 12, 'div', 6),
                p.Fc(19, '\n    '),
                p.Pb(),
                p.Fc(20, '\n  '),
                p.Pb(),
                p.Fc(21, '\n'),
                p.Pb(),
                p.Fc(22, '\n')),
                2 & t && (p.xb(18), p.kc('ngForOf', n.cards));
            },
            directives: [g.j, L.a],
            styles: ['']
          })),
          t
        );
      })();
      var q = e('VKEt'),
        j = e('iLZQ');
      const T = [
        {
          path: '',
          component: (() => {
            class t {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (t.ɵfac = function(n) {
                return new (n || t)();
              }),
              (t.ɵcmp = p.Fb({
                type: t,
                selectors: [['dc-social']],
                decls: 48,
                vars: 9,
                consts: [
                  [3, 'useOnlyDarkLogo', 'darkLinks'],
                  [1, 'position-relative', 'overflow-hidden'],
                  [3, 'img', 'screenPos', 'imgShape'],
                  [1, 'lead', 'text-secondary'],
                  ['href', '#', 1, 'btn', 'btn-info', 'btn-rounded', 'mt-4'],
                  [3, 'img', 'imgShape'],
                  [3, 'background', 'edge']
                ],
                template: function(t, n) {
                  1 & t &&
                    (p.Mb(0, 'dc-navbar-default', 0),
                    p.Fc(1, '\n\n'),
                    p.Qb(2, 'main', 1),
                    p.Fc(3, '\n  '),
                    p.Mb(4, 'dc-social-heading'),
                    p.Fc(5, '\n\n  '),
                    p.Mb(6, 'dc-features-icons-col'),
                    p.Fc(7, '\n  '),
                    p.Qb(8, 'dc-big-screen', 2),
                    p.Fc(9, '\n    '),
                    p.Qb(10, 'h2'),
                    p.Fc(11, 'Designed to provide top-notch appearance'),
                    p.Pb(),
                    p.Fc(12, '\n\n    '),
                    p.Qb(13, 'p', 3),
                    p.Fc(
                      14,
                      '\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua.\n    '
                    ),
                    p.Pb(),
                    p.Fc(15, '\n\n    '),
                    p.Qb(16, 'p'),
                    p.Fc(
                      17,
                      '\n      Nullam vitae scelerisque est, sed tempus metus. Donec convallis volutpat\n      enim consequat viverra. Nam blandit est eu ipsum elementum, ac\n      pellentesque nibh placerat. Quisque venenatis pulvinar nulla, non\n      vestibulum urna ultrices accumsan.\n    '
                    ),
                    p.Pb(),
                    p.Fc(18, '\n\n    '),
                    p.Qb(19, 'a', 4),
                    p.Fc(20, 'Learn More'),
                    p.Pb(),
                    p.Fc(21, '\n  '),
                    p.Pb(),
                    p.Fc(22, '\n\n  '),
                    p.Qb(23, 'dc-big-screen', 5),
                    p.Fc(24, '\n    '),
                    p.Qb(25, 'h2'),
                    p.Fc(26, 'Analytics'),
                    p.Pb(),
                    p.Fc(27, '\n\n    '),
                    p.Qb(28, 'p', 3),
                    p.Fc(
                      29,
                      '\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua.\n    '
                    ),
                    p.Pb(),
                    p.Fc(30, '\n\n    '),
                    p.Qb(31, 'p'),
                    p.Fc(
                      32,
                      '\n      Nullam vitae scelerisque est, sed tempus metus. Donec convallis volutpat\n      enim consequat viverra. Nam blandit est eu ipsum elementum, ac\n      pellentesque nibh placerat. Quisque venenatis pulvinar nulla, non\n      vestibulum urna ultrices accumsan.\n    '
                    ),
                    p.Pb(),
                    p.Fc(33, '\n  '),
                    p.Pb(),
                    p.Fc(34, '\n\n  '),
                    p.Mb(35, 'dc-counter6'),
                    p.Fc(36, '\n  '),
                    p.Mb(37, 'dc-social-register'),
                    p.Fc(38, '\n  '),
                    p.Mb(39, 'dc-slider-tools4-success'),
                    p.Fc(40, '\n  '),
                    p.Mb(41, 'dc-social-services'),
                    p.Fc(42, '\n\n  '),
                    p.Mb(43, 'dc-cta1', 6),
                    p.Fc(44, '\n\n  '),
                    p.Mb(45, 'dc-footer2'),
                    p.Fc(46, '\n'),
                    p.Pb(),
                    p.Fc(47, '\n')),
                    2 & t &&
                      (p.kc('useOnlyDarkLogo', !0)('darkLinks', !0),
                      p.xb(8),
                      p.kc('img', 'assets/img/screens/dash/1.png')(
                        'screenPos',
                        'left'
                      )('imgShape', 'assets/img/shps/abs-shp-3.svg'),
                      p.xb(15),
                      p.kc('img', 'assets/img/screens/dash/4.png')(
                        'imgShape',
                        'assets/img/shps/abs-shp-1.svg'
                      ),
                      p.xb(20),
                      p.kc('background', 'contrast')('edge', 'top-left'));
                },
                directives: [h.a, y, x.a, V.a, w, O, I, N, q.a, j.a],
                styles: ['']
              })),
              t
            );
          })(),
          data: { title: Object(m.c)('EveryThink - Social Demo') }
        }
      ];
      let X = (() => {
          class t {}
          return (
            (t.ɵmod = p.Jb({ type: t })),
            (t.ɵinj = p.Ib({
              factory: function(n) {
                return new (n || t)();
              },
              imports: [[b.g.forChild(T)], b.g]
            })),
            t
          );
        })(),
        U = (() => {
          class t {}
          return (
            (t.ɵmod = p.Jb({ type: t })),
            (t.ɵinj = p.Ib({
              factory: function(n) {
                return new (n || t)();
              },
              imports: [[i.a, s.a, a.a, c.a, r.a, o.a, l.a, u.a, d.a, X]]
            })),
            t
          );
        })();
    },
    akeW: function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return u;
      });
      var i = e('fXoL'),
        s = e('ofXK');
      function a(t, n) {
        if (
          (1 & t &&
            (i.Qb(0, 'div', 7),
            i.Fc(1, '\n    '),
            i.Mb(2, 'img', 8),
            i.Fc(3, '\n  '),
            i.Pb()),
          2 & t)
        ) {
          const t = i.fc();
          i.xb(2),
            i.Ab(
              'absolute top h-100 ',
              t.isScreenLeft() ? 'left' : 'right',
              ''
            ),
            i.kc('src', t.imgShape, i.yc);
        }
      }
      function c(t, n) {
        if ((1 & t && i.Mb(0, 'img', 9), 2 & t)) {
          const t = i.fc();
          i.kc('src', t.img, i.yc),
            i.yb('data-aos', 'fade-' + (t.isScreenLeft() ? 'right' : 'left'));
        }
      }
      function r(t, n) {
        1 & t && (i.Fc(0, '\n          '), i.ic(1, 2), i.Fc(2, '\n        '));
      }
      const o = [[['', 'section-heading', '']], '*', [['', 'images', '']]],
        l = ['[section-heading]', '*', '[images]'];
      let u = (() => {
        class t {
          constructor() {}
          ngOnInit() {}
          isScreenLeft() {
            return 'left' === this.screenPos;
          }
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = i.Fb({
            type: t,
            selectors: [['dc-big-screen']],
            inputs: {
              img: 'img',
              screenPos: 'screenPos',
              imgShape: 'imgShape'
            },
            ngContentSelectors: l,
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
            template: function(t, n) {
              if (
                (1 & t &&
                  (i.jc(o),
                  i.Qb(0, 'section', 0),
                  i.Fc(1, '\n  '),
                  i.Dc(2, a, 4, 4, 'div', 1),
                  i.Fc(3, '\n\n  '),
                  i.Qb(4, 'div', 2),
                  i.Fc(5, '\n    '),
                  i.ic(6),
                  i.Fc(7, '\n\n    '),
                  i.Qb(8, 'div', 3),
                  i.Fc(9, '\n      '),
                  i.Qb(10, 'div', 4),
                  i.Fc(11, '\n        '),
                  i.ic(12, 1),
                  i.Fc(13, '\n      '),
                  i.Pb(),
                  i.Fc(14, '\n\n      '),
                  i.Qb(15, 'div'),
                  i.Fc(16, '\n        '),
                  i.Dc(17, c, 1, 2, 'img', 5),
                  i.Fc(18, '\n\n        '),
                  i.Dc(19, r, 3, 0, 'ng-template', null, 6, i.Ec),
                  i.Fc(21, '\n      '),
                  i.Pb(),
                  i.Fc(22, '\n    '),
                  i.Pb(),
                  i.Fc(23, '\n  '),
                  i.Pb(),
                  i.Fc(24, '\n'),
                  i.Pb(),
                  i.Fc(25, '\n')),
                2 & t)
              ) {
                const t = i.tc(20);
                i.xb(2),
                  i.kc('ngIf', n.imgShape),
                  i.xb(8),
                  i.Db('order-md-last', n.isScreenLeft()),
                  i.xb(5),
                  i.Ab('col-12 col-lg-6 p', n.isScreenLeft() ? 'l' : 'r', '-0'),
                  i.xb(2),
                  i.kc('ngIf', n.img)('ngIfElse', t);
              }
            },
            directives: [s.k],
            styles: ['']
          })),
          t
        );
      })();
    },
    pu65: function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return r;
      });
      var i = e('nhfI'),
        s = e('M0ag'),
        a = e('sYmb'),
        c = e('fXoL');
      let r = (() => {
        class t {}
        return (
          (t.ɵmod = c.Jb({ type: t })),
          (t.ɵinj = c.Ib({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[i.c, s.a, a.a.forChild()]]
          })),
          t
        );
      })();
    }
  }
]);
