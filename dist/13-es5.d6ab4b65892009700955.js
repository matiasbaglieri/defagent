!(function() {
  function n(n, t) {
    if (!(n instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function t(n, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function e(n, e, i) {
    return e && t(n.prototype, e), i && t(n, i), n;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [13],
    {
      '+tcz': function(t, i, s) {
        'use strict';
        s.d(i, 'a', function() {
          return b;
        }),
          s.d(i, 'b', function() {
            return d;
          });
        var a,
          c,
          o = s('fXoL'),
          r = function() {
            return (r =
              Object.assign ||
              function(n) {
                for (var t, e = 1, i = arguments.length; e < i; e++)
                  for (var s in (t = arguments[e]))
                    Object.prototype.hasOwnProperty.call(t, s) && (n[s] = t[s]);
                return n;
              }).apply(this, arguments);
          },
          l = (function() {
            function n(n, t, e) {
              var i = this;
              (this.target = n),
                (this.endVal = t),
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
                (this.count = function(n) {
                  i.startTime || (i.startTime = n);
                  var t = n - i.startTime;
                  (i.remaining = i.duration - t),
                    (i.frameVal = i.useEasing
                      ? i.countDown
                        ? i.startVal -
                          i.easingFn(t, 0, i.startVal - i.endVal, i.duration)
                        : i.easingFn(
                            t,
                            i.startVal,
                            i.endVal - i.startVal,
                            i.duration
                          )
                      : i.countDown
                      ? i.startVal - (t / i.duration) * (i.startVal - i.endVal)
                      : i.startVal +
                        (t / i.duration) * (i.endVal - i.startVal)),
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
                    t < i.duration
                      ? (i.rAF = requestAnimationFrame(i.count))
                      : null !== i.finalEndVal
                      ? i.update(i.finalEndVal)
                      : i.callback && i.callback();
                }),
                (this.formatNumber = function(n) {
                  var t,
                    e,
                    s,
                    a,
                    c,
                    o = n < 0 ? '-' : '';
                  if (
                    ((t = Math.abs(n).toFixed(i.options.decimalPlaces)),
                    (s = (e = (t += '').split('.'))[0]),
                    (a = e.length > 1 ? i.options.decimal + e[1] : ''),
                    i.options.useGrouping)
                  ) {
                    c = '';
                    for (var r = 0, l = s.length; r < l; ++r)
                      0 !== r && r % 3 == 0 && (c = i.options.separator + c),
                        (c = s[l - r - 1] + c);
                    s = c;
                  }
                  return (
                    i.options.numerals &&
                      i.options.numerals.length &&
                      ((s = s.replace(/[0-9]/g, function(n) {
                        return i.options.numerals[+n];
                      })),
                      (a = a.replace(/[0-9]/g, function(n) {
                        return i.options.numerals[+n];
                      }))),
                    o + i.options.prefix + s + a + i.options.suffix
                  );
                }),
                (this.easeOutExpo = function(n, t, e, i) {
                  return (
                    (e * (1 - Math.pow(2, (-10 * n) / i)) * 1024) / 1023 + t
                  );
                }),
                (this.options = r({}, this.defaults, e)),
                (this.formattingFn = this.options.formattingFn
                  ? this.options.formattingFn
                  : this.formatNumber),
                (this.easingFn = this.options.easingFn
                  ? this.options.easingFn
                  : this.easeOutExpo),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                (this.endVal = this.validateValue(t)),
                (this.options.decimalPlaces = Math.max(
                  this.options.decimalPlaces
                )),
                (this.decimalMult = Math.pow(10, this.options.decimalPlaces)),
                this.resetDuration(),
                (this.options.separator = String(this.options.separator)),
                (this.useEasing = this.options.useEasing),
                '' === this.options.separator &&
                  (this.options.useGrouping = !1),
                (this.el =
                  'string' == typeof n ? document.getElementById(n) : n),
                this.el
                  ? this.printValue(this.startVal)
                  : (this.error = '[CountUp] target is null or undefined');
            }
            return (
              (n.prototype.determineDirectionAndSmartEasing = function() {
                var n = this.finalEndVal ? this.finalEndVal : this.endVal;
                (this.countDown = this.startVal > n),
                  Math.abs(n - this.startVal) >
                  this.options.smartEasingThreshold
                    ? ((this.finalEndVal = n),
                      (this.endVal =
                        n +
                        (this.countDown ? 1 : -1) *
                          this.options.smartEasingAmount),
                      (this.duration = this.duration / 2))
                    : ((this.endVal = n), (this.finalEndVal = null)),
                  (this.useEasing =
                    !this.finalEndVal && this.options.useEasing);
              }),
              (n.prototype.start = function(n) {
                this.error ||
                  ((this.callback = n),
                  this.duration > 0
                    ? (this.determineDirectionAndSmartEasing(),
                      (this.paused = !1),
                      (this.rAF = requestAnimationFrame(this.count)))
                    : this.printValue(this.endVal));
              }),
              (n.prototype.pauseResume = function() {
                this.paused
                  ? ((this.startTime = null),
                    (this.duration = this.remaining),
                    (this.startVal = this.frameVal),
                    this.determineDirectionAndSmartEasing(),
                    (this.rAF = requestAnimationFrame(this.count)))
                  : cancelAnimationFrame(this.rAF),
                  (this.paused = !this.paused);
              }),
              (n.prototype.reset = function() {
                cancelAnimationFrame(this.rAF),
                  (this.paused = !0),
                  this.resetDuration(),
                  (this.startVal = this.validateValue(this.options.startVal)),
                  (this.frameVal = this.startVal),
                  this.printValue(this.startVal);
              }),
              (n.prototype.update = function(n) {
                cancelAnimationFrame(this.rAF),
                  (this.startTime = null),
                  (this.endVal = this.validateValue(n)),
                  this.endVal !== this.frameVal &&
                    ((this.startVal = this.frameVal),
                    this.finalEndVal || this.resetDuration(),
                    this.determineDirectionAndSmartEasing(),
                    (this.rAF = requestAnimationFrame(this.count)));
              }),
              (n.prototype.printValue = function(n) {
                var t = this.formattingFn(n);
                'INPUT' === this.el.tagName
                  ? (this.el.value = t)
                  : 'text' === this.el.tagName || 'tspan' === this.el.tagName
                  ? (this.el.textContent = t)
                  : (this.el.innerHTML = t);
              }),
              (n.prototype.ensureNumber = function(n) {
                return 'number' == typeof n && !isNaN(n);
              }),
              (n.prototype.validateValue = function(n) {
                var t = Number(n);
                return this.ensureNumber(t)
                  ? t
                  : ((this.error =
                      '[CountUp] invalid start or end value: ' + n),
                    null);
              }),
              (n.prototype.resetDuration = function() {
                (this.startTime = null),
                  (this.duration = 1e3 * Number(this.options.duration)),
                  (this.remaining = this.duration);
              }),
              n
            );
          })(),
          u = s('ofXK'),
          d =
            (((c = (function() {
              function t(e, i, s) {
                n(this, t),
                  (this.el = e),
                  (this.zone = i),
                  (this.platformId = s),
                  (this.options = {}),
                  (this.reanimateOnClick = !0),
                  (this.complete = new o.n());
              }
              return (
                e(t, [
                  {
                    key: 'onClick',
                    value: function() {
                      this.reanimateOnClick && this.animate();
                    }
                  },
                  {
                    key: 'ngOnChanges',
                    value: function(n) {
                      Object(u.v)(this.platformId) &&
                        n.endVal &&
                        void 0 !== n.endVal.currentValue &&
                        (void 0 !== this.previousEndVal &&
                          (this.options = Object.assign({}, this.options, {
                            startVal: this.previousEndVal
                          })),
                        (this.countUp = new l(
                          this.el.nativeElement,
                          this.endVal,
                          this.options
                        )),
                        this.animate(),
                        (this.previousEndVal = this.endVal));
                    }
                  },
                  {
                    key: 'animate',
                    value: function() {
                      var n = this;
                      this.zone.runOutsideAngular(function() {
                        n.countUp.reset(),
                          n.countUp.start(function() {
                            n.zone.run(function() {
                              n.complete.emit();
                            });
                          });
                      });
                    }
                  }
                ]),
                t
              );
            })()).ɵfac = function(n) {
              return new (n || c)(o.Lb(o.l), o.Lb(o.z), o.Lb(o.B));
            }),
            (c.ɵdir = o.Gb({
              type: c,
              selectors: [['', 'countUp', '']],
              hostBindings: function(n, t) {
                1 & n &&
                  o.bc('click', function() {
                    return t.onClick();
                  });
              },
              inputs: {
                options: 'options',
                reanimateOnClick: 'reanimateOnClick',
                endVal: ['countUp', 'endVal']
              },
              outputs: { complete: 'complete' },
              features: [o.vb]
            })),
            c),
          b =
            (((a = function t() {
              n(this, t);
            }).ɵmod = o.Jb({ type: a })),
            (a.ɵinj = o.Ib({
              factory: function(n) {
                return new (n || a)();
              },
              imports: [[]]
            })),
            a);
      },
      '2d4A': function(t, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return l;
        });
        var s = i('nhfI'),
          a = i('6NWb'),
          c = i('M0ag'),
          o = i('sYmb'),
          r = i('fXoL'),
          l = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = r.Jb({ type: t })),
              (t.ɵinj = r.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[s.c, a.b, c.a, o.a.forChild()]]
              })),
              t
            );
          })();
      },
      '8klf': function(t, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return r;
        });
        var s = i('M0ag'),
          a = i('tyNb'),
          c = i('sYmb'),
          o = i('fXoL'),
          r = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = o.Jb({ type: t })),
              (t.ɵinj = o.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[s.a, a.g, c.a.forChild()]]
              })),
              t
            );
          })();
      },
      ORAR: function(t, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return o;
        });
        var s = i('tyNb'),
          a = i('sYmb'),
          c = i('fXoL'),
          o = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = c.Jb({ type: t })),
              (t.ɵinj = c.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[s.g, a.a.forChild()]]
              })),
              t
            );
          })();
      },
      V6j0: function(t, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return r;
        });
        var s = i('M0ag'),
          a = i('+tcz'),
          c = i('sYmb'),
          o = i('fXoL'),
          r = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = o.Jb({ type: t })),
              (t.ɵinj = o.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[s.a, a.a, c.a.forChild()]]
              })),
              t
            );
          })();
      },
      X5hu: function(t, i, s) {
        'use strict';
        s.r(i),
          s.d(i, 'SocialModule', function() {
            return K;
          });
        var a = s('M0ag'),
          c = s('XMwz'),
          o = s('V6j0'),
          r = s('2d4A'),
          l = s('pu65'),
          u = s('ORAR'),
          d = s('8klf'),
          b = s('M0Rk'),
          m = s('ZpN7'),
          p = s('tyNb'),
          f = s('ey9i'),
          h = s('fXoL'),
          g = s('8ynp'),
          F = s('ofXK');
        function v(n, t) {
          if (
            (1 & n &&
              (h.Qb(0, 'div', 15),
              h.Fc(1, '\n          '),
              h.Mb(2, 'img', 16),
              h.Fc(3, '\n        '),
              h.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            h.xb(2), h.kc('src', 'assets/img/logos/' + e + '.svg', h.yc);
          }
        }
        var y,
          x = function() {
            return ['/auth/subscribe'];
          },
          V = function() {
            return [1, 2, 3, 4];
          },
          P =
            (((y = (function() {
              function t() {
                n(this, t);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || y)();
            }),
            (y.ɵcmp = h.Fb({
              type: y,
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
              template: function(n, t) {
                1 & n &&
                  (h.Qb(0, 'header', 0),
                  h.Fc(1, '\n  '),
                  h.Mb(2, 'img', 1),
                  h.Fc(3, '\n\n  '),
                  h.Qb(4, 'div', 2),
                  h.Fc(5, '\n    '),
                  h.Qb(6, 'div', 3),
                  h.Fc(7, '\n      '),
                  h.Qb(8, 'div', 4),
                  h.Fc(9, '\n        '),
                  h.Qb(10, 'p', 5),
                  h.Fc(11, '\n          '),
                  h.Qb(12, 'span', 6),
                  h.Fc(13, '80% Off'),
                  h.Pb(),
                  h.Fc(14, ' when registering\n        '),
                  h.Pb(),
                  h.Fc(15, '\n        '),
                  h.Qb(16, 'h1', 7),
                  h.Fc(17, 'Social Media Services'),
                  h.Pb(),
                  h.Fc(18, '\n        '),
                  h.Qb(19, 'p', 8),
                  h.Fc(
                    20,
                    '\n          It all begins by choosing the right tools, start with a complete set\n          of design blocks to achieve your next success.\n        '
                  ),
                  h.Pb(),
                  h.Fc(21, '\n\n        '),
                  h.Qb(22, 'a', 9),
                  h.Fc(23, 'Try it free'),
                  h.Pb(),
                  h.Fc(24, '\n      '),
                  h.Pb(),
                  h.Fc(25, '\n\n      '),
                  h.Qb(26, 'div', 10),
                  h.Fc(27, '\n        '),
                  h.Mb(28, 'img', 11),
                  h.Fc(29, '\n      '),
                  h.Pb(),
                  h.Fc(30, '\n    '),
                  h.Pb(),
                  h.Fc(31, '\n\n    '),
                  h.Qb(32, 'div', 12),
                  h.Fc(33, '\n      '),
                  h.Qb(34, 'div', 13),
                  h.Fc(35, '\n        '),
                  h.Dc(36, v, 4, 1, 'div', 14),
                  h.Fc(37, '\n      '),
                  h.Pb(),
                  h.Fc(38, '\n    '),
                  h.Pb(),
                  h.Fc(39, '\n  '),
                  h.Pb(),
                  h.Fc(40, '\n'),
                  h.Pb(),
                  h.Fc(41, '\n')),
                  2 & n &&
                    (h.xb(22),
                    h.kc('routerLink', h.nc(2, x)),
                    h.xb(14),
                    h.kc('ngForOf', h.nc(3, V)));
              },
              directives: [p.f, F.j],
              styles: ['']
            })),
            y),
          k = s('7cks'),
          Q = s('akeW'),
          w = s('sYmb'),
          E = s('+tcz');
        function O(n, t) {
          if (
            (1 & n &&
              (h.Qb(0, 'div', 7),
              h.Fc(1, '\n        '),
              h.Qb(2, 'p', 8),
              h.Fc(3),
              h.Pb(),
              h.Fc(4, '\n        '),
              h.Qb(5, 'p', 9),
              h.Fc(6),
              h.Pb(),
              h.Fc(7, '\n      '),
              h.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            h.xb(2),
              h.kc('countUp', e.value),
              h.xb(1),
              h.Hc('\n          ', e.value, '\n        '),
              h.xb(3),
              h.Gc(e.title);
          }
        }
        var M,
          D,
          A =
            (((M = (function() {
              function t(e) {
                n(this, t),
                  (this.translate = e),
                  (this.counters = [
                    { value: 273, title: 'Components' },
                    { value: 654, title: 'Downloads' },
                    { value: 7941, title: 'Followers' },
                    { value: 654, title: 'New users' }
                  ]);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || M)(h.Lb(w.c));
            }),
            (M.ɵcmp = h.Fb({
              type: M,
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
              template: function(n, t) {
                1 & n &&
                  (h.Fc(0, '\n'),
                  h.Qb(1, 'section', 0),
                  h.Fc(2, '\n  '),
                  h.Qb(3, 'div', 1),
                  h.Fc(4, '\n    '),
                  h.Qb(5, 'div', 2),
                  h.Fc(6, '\n      '),
                  h.Qb(7, 'span', 3),
                  h.Fc(8),
                  h.gc(9, 'translate'),
                  h.Pb(),
                  h.Fc(10, '\n      '),
                  h.Mb(11, 'h2', 4),
                  h.Fc(12, '\n    '),
                  h.Pb(),
                  h.Fc(13, '\n\n    '),
                  h.Qb(14, 'div', 5),
                  h.Fc(15, '\n      '),
                  h.Dc(16, O, 8, 3, 'div', 6),
                  h.Fc(17, '\n    '),
                  h.Pb(),
                  h.Fc(18, '\n  '),
                  h.Pb(),
                  h.Fc(19, '\n'),
                  h.Pb(),
                  h.Fc(20, '\n')),
                  2 & n &&
                    (h.xb(8),
                    h.Gc(h.hc(9, 2, 'COUNTER.COUNTER6.GET_THEVERY_BEST')),
                    h.xb(8),
                    h.kc('ngForOf', t.counters));
              },
              directives: [F.j, E.b],
              pipes: [w.b],
              styles: ['']
            })),
            M),
          I = s('cqDB'),
          S =
            (((D = (function() {
              function t() {
                n(this, t);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || D)();
            }),
            (D.ɵcmp = h.Fb({
              type: D,
              selectors: [['dc-social-register']],
              decls: 14,
              vars: 0,
              consts: [
                [1, 'section', 'overflow-hidden'],
                [1, 'container', 'pt-4', 'bring-to-front'],
                [1, 'row'],
                [1, 'col-md-10', 'mx-md-auto']
              ],
              template: function(n, t) {
                1 & n &&
                  (h.Qb(0, 'section', 0),
                  h.Fc(1, '\n  '),
                  h.Qb(2, 'div', 1),
                  h.Fc(3, '\n    '),
                  h.Qb(4, 'div', 2),
                  h.Fc(5, '\n      '),
                  h.Qb(6, 'div', 3),
                  h.Fc(7, '\n        '),
                  h.Mb(8, 'dc-form-register-simple-inline'),
                  h.Fc(9, '\n      '),
                  h.Pb(),
                  h.Fc(10, '\n    '),
                  h.Pb(),
                  h.Fc(11, '\n  '),
                  h.Pb(),
                  h.Fc(12, '\n'),
                  h.Pb(),
                  h.Fc(13, '\n'));
              },
              directives: [I.a],
              styles: ['']
            })),
            D),
          L = s('nhfI');
        function C(n, t) {
          if (1 & n) {
            var e = h.Rb();
            h.Qb(0, 'a', 14),
              h.bc('click', function() {
                h.vc(e);
                var n = t.index;
                return h.fc().updateSlider(n);
              }),
              h.Fc(1, '\n              '),
              h.Qb(2, 'h6', 15),
              h.Fc(3),
              h.Pb(),
              h.Fc(4, '\n              '),
              h.Qb(5, 'p', 16),
              h.Fc(6),
              h.Pb(),
              h.Fc(7, '\n            '),
              h.Pb();
          }
          if (2 & n) {
            var i = t.$implicit,
              s = t.index,
              a = h.fc();
            h.Db('active', s === a.currentSlide),
              h.yb('data-step', s + 1),
              h.xb(3),
              h.Gc(i.title),
              h.xb(3),
              h.Gc(i.description);
          }
        }
        function N(n, t) {
          if (
            (1 & n &&
              (h.Qb(0, 'div', 17),
              h.Fc(1, '\n                  '),
              h.Mb(2, 'img', 18),
              h.Fc(3, '\n                '),
              h.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            h.xb(2),
              h.kc('src', 'assets/img/screens/dash/' + e.img + '.png', h.yc);
          }
        }
        var q,
          j =
            (((q = (function() {
              function t() {
                n(this, t),
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
            })()).ɵfac = function(n) {
              return new (n || q)();
            }),
            (q.ɵcmp = h.Fb({
              type: q,
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
              template: function(n, t) {
                1 & n &&
                  (h.Qb(0, 'section', 0),
                  h.Fc(1, '\n  '),
                  h.Qb(2, 'div', 1),
                  h.Fc(3, '\n    '),
                  h.Qb(4, 'div', 2),
                  h.Fc(5, '\n      '),
                  h.Qb(6, 'h2', 3),
                  h.Fc(7, 'Delivering tools for success'),
                  h.Pb(),
                  h.Fc(8, '\n      '),
                  h.Qb(9, 'p', 3),
                  h.Fc(
                    10,
                    '\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur\n        dicta nulla officia quaerat ratione reiciendis soluta. Accusamus\n        delectus dolore doloribus ducimus eveniet magnam, molestias nostrum\n        quas, quos, reiciendis ut!\n      '
                  ),
                  h.Pb(),
                  h.Fc(11, '\n    '),
                  h.Pb(),
                  h.Fc(12, '\n\n    '),
                  h.Qb(13, 'div', 4),
                  h.Fc(14, '\n      '),
                  h.Qb(15, 'div', 5),
                  h.Fc(16, '\n        '),
                  h.Qb(17, 'div', 6),
                  h.Fc(18, '\n          '),
                  h.Qb(19, 'nav', 7),
                  h.Fc(20, '\n            '),
                  h.Dc(21, C, 8, 5, 'a', 8),
                  h.Fc(22, '\n          '),
                  h.Pb(),
                  h.Fc(23, '\n        '),
                  h.Pb(),
                  h.Fc(24, '\n\n        '),
                  h.Qb(25, 'div', 9),
                  h.Fc(26, '\n          '),
                  h.Qb(27, 'div', 10),
                  h.Fc(28, '\n            '),
                  h.Qb(29, 'div', 11),
                  h.Fc(30, '\n              '),
                  h.Qb(31, 'swiper', 12),
                  h.bc('indexChange', function(n) {
                    return t.onIndexChange(n);
                  }),
                  h.Fc(32, '\n                '),
                  h.Dc(33, N, 4, 1, 'div', 13),
                  h.Fc(34, '\n              '),
                  h.Pb(),
                  h.Fc(35, '\n            '),
                  h.Pb(),
                  h.Fc(36, '\n          '),
                  h.Pb(),
                  h.Fc(37, '\n        '),
                  h.Pb(),
                  h.Fc(38, '\n      '),
                  h.Pb(),
                  h.Fc(39, '\n    '),
                  h.Pb(),
                  h.Fc(40, '\n  '),
                  h.Pb(),
                  h.Fc(41, '\n'),
                  h.Pb(),
                  h.Fc(42, '\n')),
                  2 & n &&
                    (h.xb(21),
                    h.kc('ngForOf', t.elements),
                    h.xb(10),
                    h.kc('index', t.currentSlide),
                    h.xb(2),
                    h.kc('ngForOf', t.elements));
              },
              directives: [F.j, L.a],
              styles: ['']
            })),
            q),
          T = s('wHSu'),
          X = s('6NWb');
        function U(n, t) {
          if (
            (1 & n &&
              (h.Qb(0, 'div'),
              h.Fc(1, '\n        '),
              h.Qb(2, 'div', 7),
              h.Fc(3, '\n          '),
              h.Mb(4, 'fa-icon', 8),
              h.Fc(5, '\n          '),
              h.Qb(6, 'p'),
              h.Fc(7),
              h.Pb(),
              h.Fc(8, '\n        '),
              h.Pb(),
              h.Fc(9, '\n      '),
              h.Pb()),
            2 & n)
          ) {
            var e = t.$implicit,
              i = t.index,
              s = h.fc();
            h.Ab('card shadow-lg off-left-background border-0 ', e.class, ''),
              h.Db('mr-3', i < s.cards.length),
              h.xb(4),
              h.zb(e.icon.class),
              h.kc('icon', e.icon.name),
              h.xb(2),
              h.Ab('bold ', e.title.class, ''),
              h.xb(1),
              h.Gc(e.title.text);
          }
        }
        var R,
          z,
          G,
          J,
          Y =
            (((R = (function() {
              function t() {
                n(this, t),
                  (this.cards = [
                    {
                      icon: { name: T.f, class: 'text-info' },
                      title: { text: 'Inbox', class: '' }
                    },
                    {
                      icon: { name: T.c, class: '' },
                      title: { text: 'Reports', class: '' },
                      class: ' text-contrast shadow-lg bg-info'
                    },
                    {
                      icon: { name: T.b, class: 'text-danger' },
                      title: { text: 'Calendar', class: '' }
                    },
                    {
                      icon: { name: T.g, class: 'text-success' },
                      title: { text: 'Invoices' }
                    },
                    {
                      icon: { name: T.a, class: 'text-primary' },
                      title: { text: 'Content' }
                    }
                  ]);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || R)();
            }),
            (R.ɵcmp = h.Fb({
              type: R,
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
              template: function(n, t) {
                1 & n &&
                  (h.Fc(0, '\n'),
                  h.Qb(1, 'section', 0),
                  h.Fc(2, '\n  '),
                  h.Qb(3, 'div', 1),
                  h.Fc(4, '\n    '),
                  h.Qb(5, 'div', 2),
                  h.Fc(6, '\n      '),
                  h.Qb(7, 'h2'),
                  h.Fc(8, 'What '),
                  h.Qb(9, 'span', 3),
                  h.Fc(10, 'We Offer'),
                  h.Pb(),
                  h.Pb(),
                  h.Fc(11, '\n      '),
                  h.Qb(12, 'p', 4),
                  h.Fc(
                    13,
                    '\n        EveryThink is a complete set of design and developing tools. Either your\n        business is just starting or have years on the market, you can take\n        advantage of it.\n      '
                  ),
                  h.Pb(),
                  h.Fc(14, '\n    '),
                  h.Pb(),
                  h.Fc(15, '\n\n    '),
                  h.Qb(16, 'div', 5),
                  h.Fc(17, '\n      '),
                  h.Dc(18, U, 10, 12, 'div', 6),
                  h.Fc(19, '\n    '),
                  h.Pb(),
                  h.Fc(20, '\n  '),
                  h.Pb(),
                  h.Fc(21, '\n'),
                  h.Pb(),
                  h.Fc(22, '\n')),
                  2 & n && (h.xb(18), h.kc('ngForOf', t.cards));
              },
              directives: [F.j, X.a],
              styles: ['']
            })),
            R),
          W = s('VKEt'),
          B = s('iLZQ'),
          $ = [
            {
              path: '',
              component:
                ((z = (function() {
                  function t() {
                    n(this, t);
                  }
                  return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
                })()),
                (z.ɵfac = function(n) {
                  return new (n || z)();
                }),
                (z.ɵcmp = h.Fb({
                  type: z,
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
                  template: function(n, t) {
                    1 & n &&
                      (h.Mb(0, 'dc-navbar-default', 0),
                      h.Fc(1, '\n\n'),
                      h.Qb(2, 'main', 1),
                      h.Fc(3, '\n  '),
                      h.Mb(4, 'dc-social-heading'),
                      h.Fc(5, '\n\n  '),
                      h.Mb(6, 'dc-features-icons-col'),
                      h.Fc(7, '\n  '),
                      h.Qb(8, 'dc-big-screen', 2),
                      h.Fc(9, '\n    '),
                      h.Qb(10, 'h2'),
                      h.Fc(11, 'Designed to provide top-notch appearance'),
                      h.Pb(),
                      h.Fc(12, '\n\n    '),
                      h.Qb(13, 'p', 3),
                      h.Fc(
                        14,
                        '\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua.\n    '
                      ),
                      h.Pb(),
                      h.Fc(15, '\n\n    '),
                      h.Qb(16, 'p'),
                      h.Fc(
                        17,
                        '\n      Nullam vitae scelerisque est, sed tempus metus. Donec convallis volutpat\n      enim consequat viverra. Nam blandit est eu ipsum elementum, ac\n      pellentesque nibh placerat. Quisque venenatis pulvinar nulla, non\n      vestibulum urna ultrices accumsan.\n    '
                      ),
                      h.Pb(),
                      h.Fc(18, '\n\n    '),
                      h.Qb(19, 'a', 4),
                      h.Fc(20, 'Learn More'),
                      h.Pb(),
                      h.Fc(21, '\n  '),
                      h.Pb(),
                      h.Fc(22, '\n\n  '),
                      h.Qb(23, 'dc-big-screen', 5),
                      h.Fc(24, '\n    '),
                      h.Qb(25, 'h2'),
                      h.Fc(26, 'Analytics'),
                      h.Pb(),
                      h.Fc(27, '\n\n    '),
                      h.Qb(28, 'p', 3),
                      h.Fc(
                        29,
                        '\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua.\n    '
                      ),
                      h.Pb(),
                      h.Fc(30, '\n\n    '),
                      h.Qb(31, 'p'),
                      h.Fc(
                        32,
                        '\n      Nullam vitae scelerisque est, sed tempus metus. Donec convallis volutpat\n      enim consequat viverra. Nam blandit est eu ipsum elementum, ac\n      pellentesque nibh placerat. Quisque venenatis pulvinar nulla, non\n      vestibulum urna ultrices accumsan.\n    '
                      ),
                      h.Pb(),
                      h.Fc(33, '\n  '),
                      h.Pb(),
                      h.Fc(34, '\n\n  '),
                      h.Mb(35, 'dc-counter6'),
                      h.Fc(36, '\n  '),
                      h.Mb(37, 'dc-social-register'),
                      h.Fc(38, '\n  '),
                      h.Mb(39, 'dc-slider-tools4-success'),
                      h.Fc(40, '\n  '),
                      h.Mb(41, 'dc-social-services'),
                      h.Fc(42, '\n\n  '),
                      h.Mb(43, 'dc-cta1', 6),
                      h.Fc(44, '\n\n  '),
                      h.Mb(45, 'dc-footer2'),
                      h.Fc(46, '\n'),
                      h.Pb(),
                      h.Fc(47, '\n')),
                      2 & n &&
                        (h.kc('useOnlyDarkLogo', !0)('darkLinks', !0),
                        h.xb(8),
                        h.kc('img', 'assets/img/screens/dash/1.png')(
                          'screenPos',
                          'left'
                        )('imgShape', 'assets/img/shps/abs-shp-3.svg'),
                        h.xb(15),
                        h.kc('img', 'assets/img/screens/dash/4.png')(
                          'imgShape',
                          'assets/img/shps/abs-shp-1.svg'
                        ),
                        h.xb(20),
                        h.kc('background', 'contrast')('edge', 'top-left'));
                  },
                  directives: [g.a, P, k.a, Q.a, A, S, j, Y, W.a, B.a],
                  styles: ['']
                })),
                z),
              data: { title: Object(f.c)('EveryThink - Social Demo') }
            }
          ],
          H =
            (((J = function t() {
              n(this, t);
            }).ɵmod = h.Jb({ type: J })),
            (J.ɵinj = h.Ib({
              factory: function(n) {
                return new (n || J)();
              },
              imports: [[p.g.forChild($)], p.g]
            })),
            J),
          K =
            (((G = function t() {
              n(this, t);
            }).ɵmod = h.Jb({ type: G })),
            (G.ɵinj = h.Ib({
              factory: function(n) {
                return new (n || G)();
              },
              imports: [[a.a, c.a, o.a, r.a, l.a, u.a, d.a, b.a, m.a, H]]
            })),
            G);
      },
      akeW: function(t, i, s) {
        'use strict';
        s.d(i, 'a', function() {
          return b;
        });
        var a = s('fXoL'),
          c = s('ofXK');
        function o(n, t) {
          if (
            (1 & n &&
              (a.Qb(0, 'div', 7),
              a.Fc(1, '\n    '),
              a.Mb(2, 'img', 8),
              a.Fc(3, '\n  '),
              a.Pb()),
            2 & n)
          ) {
            var e = a.fc();
            a.xb(2),
              a.Ab(
                'absolute top h-100 ',
                e.isScreenLeft() ? 'left' : 'right',
                ''
              ),
              a.kc('src', e.imgShape, a.yc);
          }
        }
        function r(n, t) {
          if ((1 & n && a.Mb(0, 'img', 9), 2 & n)) {
            var e = a.fc();
            a.kc('src', e.img, a.yc),
              a.yb('data-aos', 'fade-' + (e.isScreenLeft() ? 'right' : 'left'));
          }
        }
        function l(n, t) {
          1 & n && (a.Fc(0, '\n          '), a.ic(1, 2), a.Fc(2, '\n        '));
        }
        var u = [[['', 'section-heading', '']], '*', [['', 'images', '']]],
          d = ['[section-heading]', '*', '[images]'],
          b = (function() {
            var t = (function() {
              function t() {
                n(this, t);
              }
              return (
                e(t, [
                  { key: 'ngOnInit', value: function() {} },
                  {
                    key: 'isScreenLeft',
                    value: function() {
                      return 'left' === this.screenPos;
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
              (t.ɵcmp = a.Fb({
                type: t,
                selectors: [['dc-big-screen']],
                inputs: {
                  img: 'img',
                  screenPos: 'screenPos',
                  imgShape: 'imgShape'
                },
                ngContentSelectors: d,
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
                template: function(n, t) {
                  if (
                    (1 & n &&
                      (a.jc(u),
                      a.Qb(0, 'section', 0),
                      a.Fc(1, '\n  '),
                      a.Dc(2, o, 4, 4, 'div', 1),
                      a.Fc(3, '\n\n  '),
                      a.Qb(4, 'div', 2),
                      a.Fc(5, '\n    '),
                      a.ic(6),
                      a.Fc(7, '\n\n    '),
                      a.Qb(8, 'div', 3),
                      a.Fc(9, '\n      '),
                      a.Qb(10, 'div', 4),
                      a.Fc(11, '\n        '),
                      a.ic(12, 1),
                      a.Fc(13, '\n      '),
                      a.Pb(),
                      a.Fc(14, '\n\n      '),
                      a.Qb(15, 'div'),
                      a.Fc(16, '\n        '),
                      a.Dc(17, r, 1, 2, 'img', 5),
                      a.Fc(18, '\n\n        '),
                      a.Dc(19, l, 3, 0, 'ng-template', null, 6, a.Ec),
                      a.Fc(21, '\n      '),
                      a.Pb(),
                      a.Fc(22, '\n    '),
                      a.Pb(),
                      a.Fc(23, '\n  '),
                      a.Pb(),
                      a.Fc(24, '\n'),
                      a.Pb(),
                      a.Fc(25, '\n')),
                    2 & n)
                  ) {
                    var e = a.tc(20);
                    a.xb(2),
                      a.kc('ngIf', t.imgShape),
                      a.xb(8),
                      a.Db('order-md-last', t.isScreenLeft()),
                      a.xb(5),
                      a.Ab(
                        'col-12 col-lg-6 p',
                        t.isScreenLeft() ? 'l' : 'r',
                        '-0'
                      ),
                      a.xb(2),
                      a.kc('ngIf', t.img)('ngIfElse', e);
                  }
                },
                directives: [c.k],
                styles: ['']
              })),
              t
            );
          })();
      },
      pu65: function(t, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return r;
        });
        var s = i('nhfI'),
          a = i('M0ag'),
          c = i('sYmb'),
          o = i('fXoL'),
          r = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = o.Jb({ type: t })),
              (t.ɵinj = o.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[s.c, a.a, c.a.forChild()]]
              })),
              t
            );
          })();
      }
    }
  ]);
})();
