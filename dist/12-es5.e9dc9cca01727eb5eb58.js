!(function() {
  function n(n, e) {
    if (!(n instanceof e))
      throw new TypeError('Cannot call a class as a function');
  }
  function e(n, e) {
    for (var t = 0; t < e.length; t++) {
      var a = e[t];
      (a.enumerable = a.enumerable || !1),
        (a.configurable = !0),
        'value' in a && (a.writable = !0),
        Object.defineProperty(n, a.key, a);
    }
  }
  function t(n, t, a) {
    return t && e(n.prototype, t), a && e(n, a), n;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [12],
    {
      '+tcz': function(e, a, i) {
        'use strict';
        i.d(a, 'a', function() {
          return p;
        }),
          i.d(a, 'b', function() {
            return u;
          });
        var s,
          c,
          o = i('fXoL'),
          r = function() {
            return (r =
              Object.assign ||
              function(n) {
                for (var e, t = 1, a = arguments.length; t < a; t++)
                  for (var i in (e = arguments[t]))
                    Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                return n;
              }).apply(this, arguments);
          },
          l = (function() {
            function n(n, e, t) {
              var a = this;
              (this.target = n),
                (this.endVal = e),
                (this.options = t),
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
                  a.startTime || (a.startTime = n);
                  var e = n - a.startTime;
                  (a.remaining = a.duration - e),
                    (a.frameVal = a.useEasing
                      ? a.countDown
                        ? a.startVal -
                          a.easingFn(e, 0, a.startVal - a.endVal, a.duration)
                        : a.easingFn(
                            e,
                            a.startVal,
                            a.endVal - a.startVal,
                            a.duration
                          )
                      : a.countDown
                      ? a.startVal - (e / a.duration) * (a.startVal - a.endVal)
                      : a.startVal +
                        (e / a.duration) * (a.endVal - a.startVal)),
                    (a.frameVal = a.countDown
                      ? a.frameVal < a.endVal
                        ? a.endVal
                        : a.frameVal
                      : a.frameVal > a.endVal
                      ? a.endVal
                      : a.frameVal),
                    (a.frameVal =
                      Math.round(a.frameVal * a.decimalMult) / a.decimalMult),
                    a.printValue(a.frameVal),
                    e < a.duration
                      ? (a.rAF = requestAnimationFrame(a.count))
                      : null !== a.finalEndVal
                      ? a.update(a.finalEndVal)
                      : a.callback && a.callback();
                }),
                (this.formatNumber = function(n) {
                  var e,
                    t,
                    i,
                    s,
                    c,
                    o = n < 0 ? '-' : '';
                  if (
                    ((e = Math.abs(n).toFixed(a.options.decimalPlaces)),
                    (i = (t = (e += '').split('.'))[0]),
                    (s = t.length > 1 ? a.options.decimal + t[1] : ''),
                    a.options.useGrouping)
                  ) {
                    c = '';
                    for (var r = 0, l = i.length; r < l; ++r)
                      0 !== r && r % 3 == 0 && (c = a.options.separator + c),
                        (c = i[l - r - 1] + c);
                    i = c;
                  }
                  return (
                    a.options.numerals &&
                      a.options.numerals.length &&
                      ((i = i.replace(/[0-9]/g, function(n) {
                        return a.options.numerals[+n];
                      })),
                      (s = s.replace(/[0-9]/g, function(n) {
                        return a.options.numerals[+n];
                      }))),
                    o + a.options.prefix + i + s + a.options.suffix
                  );
                }),
                (this.easeOutExpo = function(n, e, t, a) {
                  return (
                    (t * (1 - Math.pow(2, (-10 * n) / a)) * 1024) / 1023 + e
                  );
                }),
                (this.options = r({}, this.defaults, t)),
                (this.formattingFn = this.options.formattingFn
                  ? this.options.formattingFn
                  : this.formatNumber),
                (this.easingFn = this.options.easingFn
                  ? this.options.easingFn
                  : this.easeOutExpo),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                (this.endVal = this.validateValue(e)),
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
                var e = this.formattingFn(n);
                'INPUT' === this.el.tagName
                  ? (this.el.value = e)
                  : 'text' === this.el.tagName || 'tspan' === this.el.tagName
                  ? (this.el.textContent = e)
                  : (this.el.innerHTML = e);
              }),
              (n.prototype.ensureNumber = function(n) {
                return 'number' == typeof n && !isNaN(n);
              }),
              (n.prototype.validateValue = function(n) {
                var e = Number(n);
                return this.ensureNumber(e)
                  ? e
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
          d = i('ofXK'),
          u =
            (((c = (function() {
              function e(t, a, i) {
                n(this, e),
                  (this.el = t),
                  (this.zone = a),
                  (this.platformId = i),
                  (this.options = {}),
                  (this.reanimateOnClick = !0),
                  (this.complete = new o.n());
              }
              return (
                t(e, [
                  {
                    key: 'onClick',
                    value: function() {
                      this.reanimateOnClick && this.animate();
                    }
                  },
                  {
                    key: 'ngOnChanges',
                    value: function(n) {
                      Object(d.v)(this.platformId) &&
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
                e
              );
            })()).ɵfac = function(n) {
              return new (n || c)(o.Lb(o.l), o.Lb(o.z), o.Lb(o.B));
            }),
            (c.ɵdir = o.Gb({
              type: c,
              selectors: [['', 'countUp', '']],
              hostBindings: function(n, e) {
                1 & n &&
                  o.bc('click', function() {
                    return e.onClick();
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
          p =
            (((s = function e() {
              n(this, e);
            }).ɵmod = o.Jb({ type: s })),
            (s.ɵinj = o.Ib({
              factory: function(n) {
                return new (n || s)();
              },
              imports: [[]]
            })),
            s);
      },
      '2d4A': function(e, t, a) {
        'use strict';
        a.d(t, 'a', function() {
          return l;
        });
        var i = a('nhfI'),
          s = a('6NWb'),
          c = a('M0ag'),
          o = a('sYmb'),
          r = a('fXoL'),
          l = (function() {
            var e = function e() {
              n(this, e);
            };
            return (
              (e.ɵmod = r.Jb({ type: e })),
              (e.ɵinj = r.Ib({
                factory: function(n) {
                  return new (n || e)();
                },
                imports: [[i.c, s.b, c.a, o.a.forChild()]]
              })),
              e
            );
          })();
      },
      K3F6: function(e, a, i) {
        'use strict';
        i.r(a),
          i.d(a, 'AppLanding2Module', function() {
            return ln;
          });
        var s = i('M0ag'),
          c = i('V6j0'),
          o = i('2d4A'),
          r = i('M0Rk'),
          l = i('P6su'),
          d = i('ORAR'),
          u = i('ZpN7'),
          p = i('tyNb'),
          b = i('ey9i'),
          f = i('4WJ2'),
          h = i('fXoL'),
          m = i('8ynp'),
          F = i('wHSu'),
          g = i('sYmb'),
          v = i('ofXK'),
          y = i('6NWb');
        function P(n, e) {
          if ((1 & n && h.Mb(0, 'div', 30), 2 & n)) {
            var t = e.$implicit;
            h.yb('data-aos', t.aos)('data-aos-duration', t.duration)(
              'data-aos-delay',
              t.delay
            );
          }
        }
        var A,
          E,
          S,
          Q =
            (((A = (function() {
              function e(t) {
                n(this, e),
                  (this.translate = t),
                  (this.lightbulb = F.j),
                  (this.shapes = [
                    { aos: 'fade-down-right', duration: '1500', delay: '100' },
                    { aos: 'fade-down', duration: '1000', delay: '100' },
                    { aos: 'fade-up-left', duration: '500', delay: '200' },
                    { aos: 'fade-up', duration: '500', delay: '200' }
                  ]);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || A)(h.Lb(g.c));
            }),
            (A.ɵcmp = h.Fb({
              type: A,
              selectors: [['dc-app-landing2-heading']],
              decls: 96,
              vars: 20,
              consts: [
                [1, 'header', 'app-landing-2-header', 'section'],
                [1, 'shapes-container'],
                ['class', 'shape shape-animated', 4, 'ngFor', 'ngForOf'],
                [1, 'animation-shape', 'shape-triangle'],
                [1, 'animation--rotating'],
                [1, 'animation-shape', 'shape-cross'],
                [1, 'static-shape', 'shape-ring', 'shape-ring-1'],
                [1, 'animation', 'animation--rotating'],
                [1, 'static-shape', 'shape-ring', 'shape-ring-2'],
                [1, 'animation', 'animation--rotating-clockwise'],
                [1, 'static-shape', 'pattern-dots-1'],
                [1, 'static-shape', 'pattern-dots-2'],
                [1, 'static-shape', 'background-shape-main'],
                [1, 'container'],
                [1, 'row', 'align-items-center', 'gap-y'],
                [1, 'col-md-6'],
                [
                  1,
                  'rounded-pill',
                  'shadow-box',
                  'bg-contrast',
                  'text-dark',
                  'bold',
                  'py-2',
                  'px-4'
                ],
                [1, 'text-primary', 'mr-2', 3, 'icon'],
                [1, 'text-primary'],
                [1, 'display-4', 'display-md-2', 'mt-3'],
                [1, 'bold'],
                [1, 'lead', 'bold'],
                [1, 'head-line-2'],
                [1, 'lead'],
                [1, 'col-md-6', 'col-lg-4', 'ml-lg-auto'],
                ['data-aos', 'fade-le2ft'],
                [1, 'mobile-dev2ice', 'ipho1ne-x'],
                [1, 'scre2en'],
                [
                  'src',
                  'https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle/01.gif',
                  'alt',
                  '',
                  'width',
                  '90%',
                  'data-aos-delay',
                  '1000',
                  'data-aos',
                  'zoom-in'
                ],
                [1, 'notch'],
                [1, 'shape', 'shape-animated']
              ],
              template: function(n, e) {
                1 & n &&
                  (h.Qb(0, 'header', 0),
                  h.Fc(1, '\n  '),
                  h.Qb(2, 'div', 1),
                  h.Fc(3, '\n    '),
                  h.Fc(4, '\n    '),
                  h.Dc(5, P, 1, 3, 'div', 2),
                  h.Fc(6, '\n\n    '),
                  h.Fc(7, '\n    '),
                  h.Qb(8, 'div', 3),
                  h.Fc(9, '\n      '),
                  h.Mb(10, 'div', 4),
                  h.Fc(11, '\n    '),
                  h.Pb(),
                  h.Fc(12, '\n    '),
                  h.Qb(13, 'div', 5),
                  h.Fc(14, '\n      '),
                  h.Mb(15, 'div', 4),
                  h.Fc(16, '\n    '),
                  h.Pb(),
                  h.Fc(17, '\n\n    '),
                  h.Fc(18, '\n    '),
                  h.Qb(19, 'div', 6),
                  h.Fc(20, '\n      '),
                  h.Mb(21, 'div', 7),
                  h.Fc(22, '\n    '),
                  h.Pb(),
                  h.Fc(23, '\n    '),
                  h.Qb(24, 'div', 8),
                  h.Fc(25, '\n      '),
                  h.Mb(26, 'div', 9),
                  h.Fc(27, '\n    '),
                  h.Pb(),
                  h.Fc(28, '\n\n    '),
                  h.Mb(29, 'div', 10),
                  h.Fc(30, '\n    '),
                  h.Mb(31, 'div', 11),
                  h.Fc(32, '\n\n    '),
                  h.Fc(33, '\n    '),
                  h.Mb(34, 'div', 12),
                  h.Fc(35, '\n  '),
                  h.Pb(),
                  h.Fc(36, '\n\n  '),
                  h.Qb(37, 'div', 13),
                  h.Fc(38, '\n    '),
                  h.Qb(39, 'div', 14),
                  h.Fc(40, '\n      '),
                  h.Qb(41, 'div', 15),
                  h.Fc(42, '\n        '),
                  h.Qb(43, 'span', 16),
                  h.Fc(44, '\n          '),
                  h.Mb(45, 'fa-icon', 17),
                  h.Fc(46, '\n          '),
                  h.Qb(47, 'span', 18),
                  h.Fc(48),
                  h.gc(49, 'translate'),
                  h.Pb(),
                  h.Fc(50),
                  h.gc(51, 'translate'),
                  h.Pb(),
                  h.Fc(52, '\n\n        '),
                  h.Qb(53, 'h1', 19),
                  h.Fc(54, '\n          '),
                  h.Qb(55, 'span', 20),
                  h.Fc(56),
                  h.gc(57, 'translate'),
                  h.Pb(),
                  h.Fc(58, '\n        '),
                  h.Pb(),
                  h.Fc(59, '\n        '),
                  h.Qb(60, 'p', 21),
                  h.Fc(61),
                  h.gc(62, 'translate'),
                  h.Qb(63, 'span', 22),
                  h.Fc(64),
                  h.gc(65, 'translate'),
                  h.Pb(),
                  h.Fc(66, '\n        '),
                  h.Pb(),
                  h.Fc(67, '\n\n        '),
                  h.Qb(68, 'p', 23),
                  h.Fc(69),
                  h.gc(70, 'translate'),
                  h.Pb(),
                  h.Fc(71, '\n\n        '),
                  h.Fc(72, '\n      '),
                  h.Pb(),
                  h.Fc(73, '\n\n      '),
                  h.Qb(74, 'div', 24),
                  h.Fc(75, '\n        '),
                  h.Qb(76, 'div', 25),
                  h.Fc(77, '\n          '),
                  h.Qb(78, 'div', 26),
                  h.Fc(79, '\n            '),
                  h.Qb(80, 'div', 27),
                  h.Fc(81, '\n              '),
                  h.Fc(82, '\n              '),
                  h.Mb(83, 'img', 28),
                  h.Fc(84, '\n            '),
                  h.Pb(),
                  h.Fc(85, '\n            '),
                  h.Mb(86, 'div', 29),
                  h.Fc(87, '\n          '),
                  h.Pb(),
                  h.Fc(88, '\n\n          '),
                  h.Mb(89, 'div', 29),
                  h.Fc(90, '\n        '),
                  h.Pb(),
                  h.Fc(91, '\n      '),
                  h.Pb(),
                  h.Fc(92, '\n    '),
                  h.Pb(),
                  h.Fc(93, '\n  '),
                  h.Pb(),
                  h.Fc(94, '\n'),
                  h.Pb(),
                  h.Fc(95, '\n')),
                  2 & n &&
                    (h.xb(5),
                    h.kc('ngForOf', e.shapes),
                    h.xb(40),
                    h.kc('icon', e.lightbulb),
                    h.xb(3),
                    h.Hc(
                      '\n            ',
                      h.hc(49, 8, 'DEMOS.SALES.APP_LANDING_HEADING2.ALLISONE'),
                      ''
                    ),
                    h.xb(2),
                    h.Hc(
                      '\n          ',
                      h.hc(51, 10, 'DEMOS.SALES.APP_LANDING_HEADING2.INFINTY'),
                      '\n        '
                    ),
                    h.xb(6),
                    h.Gc(
                      h.hc(
                        57,
                        12,
                        'DEMOS.SALES.APP_LANDING_HEADING2.EVERYTHINKFORSALES'
                      )
                    ),
                    h.xb(5),
                    h.Hc(
                      '\n          ',
                      h.hc(
                        62,
                        14,
                        'DEMOS.SALES.APP_LANDING_HEADING2.BETTERMARKETING'
                      ),
                      ',\n          '
                    ),
                    h.xb(3),
                    h.Gc(
                      h.hc(
                        65,
                        16,
                        'DEMOS.SALES.APP_LANDING_HEADING2.BETTERRESULT'
                      )
                    ),
                    h.xb(5),
                    h.Hc(
                      '\n          ',
                      h.hc(70, 18, 'DEMOS.SALES.APP_LANDING_HEADING2.OURIAS'),
                      '\n        '
                    ));
              },
              directives: [v.j, y.a],
              pipes: [g.b],
              styles: ['']
            })),
            A),
          D = i('aaX3'),
          I =
            (((S = (function() {
              function e(t) {
                n(this, e), (this.translate = t);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || S)(h.Lb(g.c));
            }),
            (S.ɵcmp = h.Fb({
              type: S,
              selectors: [['dc-app-landing2-trending-design']],
              decls: 50,
              vars: 9,
              consts: [
                [1, 'section', 'trending-design'],
                [1, 'shapes-container'],
                ['data-aos', 'flip-right', 1, 'shape', 'shape-square'],
                [1, 'shape', 'shape-ring', 'shape-ring-2'],
                [1, 'container', 'bring-to-front'],
                [1, 'row', 'gap-y', 'align-items-center'],
                [1, 'col-md-6', 'order-md-2'],
                [1, 'iphone-x', 'shadow-lg', 'mr-md-0'],
                [1, 'screen', 'shadow-box'],
                ['width', '100%', 'autoplay', 'autoplay', 'controls', ''],
                [
                  'src',
                  'assets/images/app-landing-2/screens/app/sm_consensus.mp4',
                  'type',
                  'video/mp4'
                ],
                [1, 'notch'],
                [1, 'col-md-6', 'text-center', 'text-md-left'],
                [1, 'section-heading'],
                [1, 'light', 'font-md', 'display-md-4', 'heading-line'],
                [1, 'lead', 'text-muted']
              ],
              template: function(n, e) {
                1 & n &&
                  (h.Qb(0, 'section', 0),
                  h.Fc(1, '\n  '),
                  h.Qb(2, 'div', 1),
                  h.Fc(3, '\n    '),
                  h.Mb(4, 'div', 2),
                  h.Fc(5, '\n    '),
                  h.Mb(6, 'div', 3),
                  h.Fc(7, '\n  '),
                  h.Pb(),
                  h.Fc(8, '\n\n  '),
                  h.Qb(9, 'div', 4),
                  h.Fc(10, '\n    '),
                  h.Qb(11, 'div', 5),
                  h.Fc(12, '\n      '),
                  h.Qb(13, 'div', 6),
                  h.Fc(14, '\n        '),
                  h.Qb(15, 'div', 7),
                  h.Fc(16, '\n          '),
                  h.Qb(17, 'div', 8),
                  h.Fc(18, '\n            '),
                  h.Qb(19, 'video', 9),
                  h.Fc(20, '\n              '),
                  h.Mb(21, 'source', 10),
                  h.Fc(22, '\n            '),
                  h.Pb(),
                  h.Fc(23, '\n          '),
                  h.Pb(),
                  h.Fc(24, '\n          '),
                  h.Mb(25, 'div', 11),
                  h.Fc(26, '\n        '),
                  h.Pb(),
                  h.Fc(27, '\n      '),
                  h.Pb(),
                  h.Fc(28, '\n\n      '),
                  h.Qb(29, 'div', 12),
                  h.Fc(30, '\n        '),
                  h.Qb(31, 'div', 13),
                  h.Fc(32, '\n          '),
                  h.Qb(33, 'h2', 14),
                  h.Fc(34),
                  h.gc(35, 'translate'),
                  h.Pb(),
                  h.Fc(36, '\n          '),
                  h.Qb(37, 'p', 15),
                  h.Fc(38),
                  h.gc(39, 'translate'),
                  h.Pb(),
                  h.Fc(40, '\n        '),
                  h.Pb(),
                  h.Fc(41, '\n\n        '),
                  h.Qb(42, 'p'),
                  h.Fc(43),
                  h.gc(44, 'translate'),
                  h.Pb(),
                  h.Fc(45, '\n      '),
                  h.Pb(),
                  h.Fc(46, '\n    '),
                  h.Pb(),
                  h.Fc(47, '\n  '),
                  h.Pb(),
                  h.Fc(48, '\n'),
                  h.Pb(),
                  h.Fc(49, '\n')),
                  2 & n &&
                    (h.xb(34),
                    h.Hc(
                      '\n            ',
                      h.hc(
                        35,
                        3,
                        'DEMOS.SALES.APP_LANDING2_TRENDING_DESIGN.SIMPLE_IMPLEMENTATION'
                      ),
                      '\n          '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n            ',
                      h.hc(
                        39,
                        5,
                        'DEMOS.SALES.APP_LANDING2_TRENDING_DESIGN.SINCE_THE_NEED'
                      ),
                      '\n          '
                    ),
                    h.xb(5),
                    h.Hc(
                      '\n          ',
                      h.hc(
                        44,
                        7,
                        'DEMOS.SALES.APP_LANDING2_TRENDING_DESIGN.THE_POSSIBILITIES'
                      ),
                      '\n        '
                    ));
              },
              pipes: [g.b],
              styles: ['']
            })),
            S),
          x =
            (((E = (function() {
              function e(t) {
                n(this, e), (this.translate = t);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || E)(h.Lb(g.c));
            }),
            (E.ɵcmp = h.Fb({
              type: E,
              selectors: [['dc-app-landing2-focus-on-success']],
              decls: 53,
              vars: 9,
              consts: [
                [1, 'section', 'focus-on-success'],
                [1, 'shapes-container'],
                ['data-aos', 'flip-left', 1, 'shape', 'shape-triangle'],
                [1, 'shape', 'shape-ring', 'shape-ring-2'],
                [1, 'container', 'bring-to-front'],
                [1, 'row', 'gap-y', 'align-items-center'],
                [1, 'col-md-6'],
                [1, 'iphone-x', 'shadow-lg', 'ml-md-0'],
                [1, 'screen', 'shadow-box'],
                [
                  'width',
                  '100%',
                  'autoplay',
                  'autoplay',
                  'controls',
                  '',
                  2,
                  'margin-top',
                  '50px',
                  'margin-bottom',
                  '20px'
                ],
                [
                  'src',
                  'assets/images/app-landing-2/screens/app/sm_buy_product.mp4',
                  'type',
                  'video/mp4'
                ],
                [1, 'notch'],
                [1, 'col-md-6', 'text-center', 'text-md-left'],
                [1, 'section-heading'],
                [1, 'light', 'font-md', 'display-md-4', 'heading-line'],
                [1, 'lead', 'text-muted']
              ],
              template: function(n, e) {
                1 & n &&
                  (h.Qb(0, 'section', 0),
                  h.Fc(1, '\n  '),
                  h.Qb(2, 'div', 1),
                  h.Fc(3, '\n    '),
                  h.Qb(4, 'div', 2),
                  h.Fc(5, '\n      '),
                  h.Mb(6, 'div'),
                  h.Fc(7, '\n    '),
                  h.Pb(),
                  h.Fc(8, '\n    '),
                  h.Mb(9, 'div', 3),
                  h.Fc(10, '\n  '),
                  h.Pb(),
                  h.Fc(11, '\n\n  '),
                  h.Qb(12, 'div', 4),
                  h.Fc(13, '\n    '),
                  h.Qb(14, 'div', 5),
                  h.Fc(15, '\n      '),
                  h.Qb(16, 'div', 6),
                  h.Fc(17, '\n        '),
                  h.Qb(18, 'div', 7),
                  h.Fc(19, '\n          '),
                  h.Qb(20, 'div', 8),
                  h.Fc(21, '\n            '),
                  h.Qb(22, 'video', 9),
                  h.Fc(23, '\n              '),
                  h.Mb(24, 'source', 10),
                  h.Fc(25, '\n            '),
                  h.Pb(),
                  h.Fc(26, '\n          '),
                  h.Pb(),
                  h.Fc(27, '\n          '),
                  h.Mb(28, 'div', 11),
                  h.Fc(29, '\n        '),
                  h.Pb(),
                  h.Fc(30, '\n      '),
                  h.Pb(),
                  h.Fc(31, '\n\n      '),
                  h.Qb(32, 'div', 12),
                  h.Fc(33, '\n        '),
                  h.Qb(34, 'div', 13),
                  h.Fc(35, '\n          '),
                  h.Qb(36, 'h2', 14),
                  h.Fc(37),
                  h.gc(38, 'translate'),
                  h.Pb(),
                  h.Fc(39, '\n          '),
                  h.Qb(40, 'p', 15),
                  h.Fc(41),
                  h.gc(42, 'translate'),
                  h.Pb(),
                  h.Fc(43, '\n        '),
                  h.Pb(),
                  h.Fc(44, '\n\n        '),
                  h.Qb(45, 'p'),
                  h.Fc(46),
                  h.gc(47, 'translate'),
                  h.Pb(),
                  h.Fc(48, '\n      '),
                  h.Pb(),
                  h.Fc(49, '\n    '),
                  h.Pb(),
                  h.Fc(50, '\n  '),
                  h.Pb(),
                  h.Fc(51, '\n'),
                  h.Pb(),
                  h.Fc(52, '\n')),
                  2 & n &&
                    (h.xb(37),
                    h.Hc(
                      '\n            ',
                      h.hc(
                        38,
                        3,
                        'DEMOS.SALES.APP_LANDING2_FOCUS_ON_SUCCESS.FORGET_OBSOLETE'
                      ),
                      '\n          '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n            ',
                      h.hc(
                        42,
                        5,
                        'DEMOS.SALES.APP_LANDING2_FOCUS_ON_SUCCESS.EVERYTHINK_DELIVERS'
                      ),
                      '\n          '
                    ),
                    h.xb(5),
                    h.Hc(
                      '\n          ',
                      h.hc(
                        47,
                        7,
                        'DEMOS.SALES.APP_LANDING2_FOCUS_ON_SUCCESS.DOT_NOT_WASTE_TIME'
                      ),
                      '\n        '
                    ));
              },
              pipes: [g.b],
              styles: ['']
            })),
            E),
          O = i('AL06');
        function w(n, e) {
          if ((1 & n && (h.Qb(0, 'h5'), h.Fc(1), h.Pb()), 2 & n)) {
            var t = h.fc().$implicit;
            h.xb(1), h.Hc('\n              ', t.title.es, '\n            ');
          }
        }
        function L(n, e) {
          if ((1 & n && (h.Qb(0, 'h5'), h.Fc(1), h.Pb()), 2 & n)) {
            var t = h.fc().$implicit;
            h.xb(1), h.Hc('\n              ', t.title.en, '\n            ');
          }
        }
        function N(n, e) {
          if ((1 & n && (h.Qb(0, 'p'), h.Fc(1), h.Pb()), 2 & n)) {
            var t = h.fc().$implicit;
            h.xb(1),
              h.Hc('\n              ', t.description.es, '\n            ');
          }
        }
        function k(n, e) {
          if ((1 & n && (h.Qb(0, 'p'), h.Fc(1), h.Pb()), 2 & n)) {
            var t = h.fc().$implicit;
            h.xb(1),
              h.Hc('\n              ', t.description.en, '\n            ');
          }
        }
        function M(n, e) {
          if (
            (1 & n &&
              (h.Qb(0, 'div', 17),
              h.Fc(1, '\n          '),
              h.Qb(2, 'div', 18),
              h.Fc(3, '\n            '),
              h.Mb(4, 'dc-feather', 19),
              h.Fc(5, '\n          '),
              h.Pb(),
              h.Fc(6, '\n          '),
              h.Qb(7, 'div', 20),
              h.Fc(8, '\n            '),
              h.Dc(9, w, 2, 1, 'h5', 21),
              h.Fc(10, '\n            '),
              h.Dc(11, L, 2, 1, 'h5', 21),
              h.Fc(12, '\n            '),
              h.Dc(13, N, 2, 1, 'p', 21),
              h.Fc(14, '\n            '),
              h.Dc(15, k, 2, 1, 'p', 21),
              h.Fc(16, '\n          '),
              h.Pb(),
              h.Fc(17, '\n        '),
              h.Pb()),
            2 & n)
          ) {
            var t = e.$implicit,
              a = h.fc();
            h.xb(4),
              h.kc('name', t.icon)('iconClass', 'stroke-primary'),
              h.xb(5),
              h.kc('ngIf', 'es' === a.translate.currentLang),
              h.xb(2),
              h.kc('ngIf', 'en-US' === a.translate.currentLang),
              h.xb(2),
              h.kc('ngIf', 'es' === a.translate.currentLang),
              h.xb(2),
              h.kc('ngIf', 'en-US' === a.translate.currentLang);
          }
        }
        function _(n, e) {
          if (
            (1 & n &&
              (h.Qb(0, 'div'),
              h.Fc(1, '\n            '),
              h.Qb(2, 'div', 22),
              h.Fc(3, '\n              '),
              h.Mb(4, 'img', 23),
              h.Fc(5, '\n            '),
              h.Pb(),
              h.Fc(6, '\n          '),
              h.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            h.Ab('col-md-4 ', t.class, ''), h.xb(4), h.lc('src', t.uri, h.yc);
          }
        }
        var V,
          T =
            (((V = (function() {
              function e(t) {
                n(this, e),
                  (this.translate = t),
                  (this.items = [
                    {
                      icon: 'activity',
                      title: {
                        en: 'Real-time results',
                        es: 'Resultados en tiempo real'
                      },
                      description: {
                        en:
                          'Gain instant insights on happenings and make real-time analytics more accurate and real.',
                        es:
                          'Obtenga informaci\xf3n instant\xe1nea sobre los acontecimientos y haga que los an\xe1lisis en tiempo real sean m\xe1s precisos y reales.'
                      }
                    },
                    {
                      icon: 'upload-cloud',
                      title: {
                        en: 'Instant deployment',
                        es: 'Implementaci\xf3n instant\xe1nea'
                      },
                      description: {
                        en:
                          'Accelerate and simplify your business\u2019s deployment of machine learning and data analytics.',
                        es:
                          'Acelere y simplifique la implementaci\xf3n de aprendizaje autom\xe1tico y an\xe1lisis de datos de su empresa.'
                      }
                    }
                  ]),
                  (this.cards = [
                    {
                      class: 'mt-md-6',
                      uri: 'assets/images/app-landing-2/screens/app/9.jpg'
                    },
                    {
                      class: '',
                      uri: 'assets/images/app-landing-2/screens/app/8.jpg'
                    },
                    {
                      class: 'mt-md-6',
                      uri: 'assets/images/app-landing-2/screens/app/10.jpg'
                    },
                    {
                      class: 'mx-auto mt-md-4n',
                      uri: 'assets/images/app-landing-2/screens/app/11.png'
                    }
                  ]);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || V)(h.Lb(g.c));
            }),
            (V.ɵcmp = h.Fb({
              type: V,
              selectors: [['dc-app-landing2-safety']],
              decls: 52,
              vars: 11,
              consts: [
                [1, 'section', 'app-safety'],
                [1, 'shapes-container'],
                [1, 'shape', 'shape-circle'],
                ['data-aos', 'fade-up-left'],
                [1, 'shape', 'shape-ring', 'shape-ring-2'],
                ['data-aos', 'fade-up-right', 'data-aos-delay', '200'],
                [1, 'shape', 'pattern', 'pattern-dots'],
                [1, 'container'],
                [1, 'row', 'gap-y', 'align-items-center'],
                [1, 'col-md-5'],
                [1, 'section-heading'],
                [1, 'text-primary', 'bold'],
                [1, 'lead', 'text-muted'],
                ['class', 'media pb-3', 4, 'ngFor', 'ngForOf'],
                [1, 'col-md-7'],
                [1, 'row', 'gap-y', 'align-items-center', 'text-center'],
                [3, 'class', 4, 'ngFor', 'ngForOf'],
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
                [1, 'media-body'],
                [4, 'ngIf'],
                [1, 'figure', 'shadow', 'rounded', 'overflow-hidden', 'border'],
                ['alt', '', 1, 'img-responsive', 3, 'src']
              ],
              template: function(n, e) {
                1 & n &&
                  (h.Qb(0, 'section', 0),
                  h.Fc(1, '\n  '),
                  h.Qb(2, 'div', 1),
                  h.Fc(3, '\n    '),
                  h.Qb(4, 'div', 2),
                  h.Fc(5, '\n      '),
                  h.Mb(6, 'div', 3),
                  h.Fc(7, '\n    '),
                  h.Pb(),
                  h.Fc(8, '\n    '),
                  h.Qb(9, 'div', 4),
                  h.Fc(10, '\n      '),
                  h.Mb(11, 'div', 5),
                  h.Fc(12, '\n    '),
                  h.Pb(),
                  h.Fc(13, '\n    '),
                  h.Mb(14, 'div', 6),
                  h.Fc(15, '\n  '),
                  h.Pb(),
                  h.Fc(16, '\n\n  '),
                  h.Qb(17, 'div', 7),
                  h.Fc(18, '\n    '),
                  h.Qb(19, 'div', 8),
                  h.Fc(20, '\n      '),
                  h.Qb(21, 'div', 9),
                  h.Fc(22, '\n        '),
                  h.Qb(23, 'div', 10),
                  h.Fc(24, '\n          '),
                  h.Qb(25, 'p', 11),
                  h.Fc(26),
                  h.gc(27, 'translate'),
                  h.Pb(),
                  h.Fc(28, '\n          '),
                  h.Qb(29, 'h2'),
                  h.Fc(30),
                  h.gc(31, 'translate'),
                  h.Pb(),
                  h.Fc(32, '\n          '),
                  h.Qb(33, 'p', 12),
                  h.Fc(34),
                  h.gc(35, 'translate'),
                  h.Pb(),
                  h.Fc(36, '\n        '),
                  h.Pb(),
                  h.Fc(37, '\n\n        '),
                  h.Dc(38, M, 18, 6, 'div', 13),
                  h.Fc(39, '\n      '),
                  h.Pb(),
                  h.Fc(40, '\n\n      '),
                  h.Qb(41, 'div', 14),
                  h.Fc(42, '\n        '),
                  h.Qb(43, 'div', 15),
                  h.Fc(44, '\n          '),
                  h.Dc(45, _, 7, 4, 'div', 16),
                  h.Fc(46, '\n        '),
                  h.Pb(),
                  h.Fc(47, '\n      '),
                  h.Pb(),
                  h.Fc(48, '\n    '),
                  h.Pb(),
                  h.Fc(49, '\n  '),
                  h.Pb(),
                  h.Fc(50, '\n'),
                  h.Pb(),
                  h.Fc(51, '\n')),
                  2 & n &&
                    (h.xb(26),
                    h.Hc(
                      '\n            ',
                      h.hc(
                        27,
                        5,
                        'DEMOS.SALES.APP_LANDING2_SAFETY.SAFETY_FIRST'
                      ),
                      '\n          '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n            ',
                      h.hc(
                        31,
                        7,
                        'DEMOS.SALES.APP_LANDING2_SAFETY.YOUR_SUCCESS_IS_OUR_SUCCESS'
                      ),
                      '\n          '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n            ',
                      h.hc(
                        35,
                        9,
                        'DEMOS.SALES.APP_LANDING2_SAFETY.EVERYTHINK_DOESALL'
                      ),
                      '\n          '
                    ),
                    h.xb(4),
                    h.kc('ngForOf', e.items),
                    h.xb(7),
                    h.kc('ngForOf', e.cards));
              },
              directives: [v.j, O.a, v.k],
              pipes: [g.b],
              styles: ['']
            })),
            V);
        function H(n, e) {
          if ((1 & n && (h.Qb(0, 'h4', 11), h.Fc(1), h.Pb()), 2 & n)) {
            var t = h.fc().$implicit;
            h.xb(1), h.Hc('\n            ', t.title.es, '\n          ');
          }
        }
        function G(n, e) {
          if ((1 & n && (h.Qb(0, 'h4', 11), h.Fc(1), h.Pb()), 2 & n)) {
            var t = h.fc().$implicit;
            h.xb(1), h.Hc('\n            ', t.title.en, '\n          ');
          }
        }
        function C(n, e) {
          if ((1 & n && (h.Qb(0, 'p', 12), h.Fc(1), h.Pb()), 2 & n)) {
            var t = h.fc().$implicit;
            h.xb(1), h.Hc('\n            ', t.description.es, '\n          ');
          }
        }
        function R(n, e) {
          if ((1 & n && (h.Qb(0, 'p', 12), h.Fc(1), h.Pb()), 2 & n)) {
            var t = h.fc().$implicit;
            h.xb(1), h.Hc('\n            ', t.description.en, '\n          ');
          }
        }
        function j(n, e) {
          if (
            (1 & n &&
              (h.Qb(0, 'div', 5),
              h.Fc(1, '\n          '),
              h.Qb(2, 'div', 6),
              h.Fc(3, '\n            '),
              h.Mb(4, 'dc-feather', 7),
              h.Fc(5, '\n          '),
              h.Pb(),
              h.Fc(6, '\n          '),
              h.Dc(7, H, 2, 1, 'h4', 8),
              h.Fc(8, '\n          '),
              h.Dc(9, G, 2, 1, 'h4', 8),
              h.Fc(10, '\n\n          '),
              h.Mb(11, 'hr', 9),
              h.Fc(12, '\n          '),
              h.Dc(13, C, 2, 1, 'p', 10),
              h.Fc(14, '\n\n          '),
              h.Dc(15, R, 2, 1, 'p', 10),
              h.Fc(16, '\n        '),
              h.Pb()),
            2 & n)
          ) {
            var t = e.$implicit,
              a = h.fc();
            h.xb(4),
              h.kc('name', t.icon)('iconClass', 'stroke-contrast'),
              h.xb(3),
              h.kc('ngIf', 'es' === a.translate.currentLang),
              h.xb(2),
              h.kc('ngIf', 'en-US' === a.translate.currentLang),
              h.xb(4),
              h.kc('ngIf', 'es' === a.translate.currentLang),
              h.xb(2),
              h.kc('ngIf', 'en-US' === a.translate.currentLang);
          }
        }
        var q,
          z =
            (((q = (function() {
              function e(t) {
                n(this, e),
                  (this.translate = t),
                  (this.features = [
                    {
                      icon: 'bar-chart',
                      title: { en: 'Growth', es: 'Crecimiento' },
                      description: {
                        en:
                          'This powerful AIaaS platform leverages AI and machine learning to help your team drive high performance and enable scalable growth.',
                        es:
                          'Esta poderosa plataforma AIaaS aprovecha la IA y el aprendizaje autom\xe1tico para ayudar a su equipo a impulsar un alto rendimiento y permitir un crecimiento escalable.'
                      }
                    },
                    {
                      icon: 'activity',
                      title: { en: 'Affordability', es: 'Asequibilidad' },
                      description: {
                        en:
                          'Maximize ROI for your business with the affordable DefAgent AI solution that helps your team achieve more for less.',
                        es:
                          'Maximice el ROI de su negocio con la asequible soluci\xf3n DefAgent AI que ayuda a su equipo a lograr m\xe1s por menos.'
                      }
                    },
                    {
                      icon: 'codesandbox',
                      title: { en: 'No-coding', es: 'Sin codificaci\xf3n' },
                      description: {
                        en:
                          'Our low-code development platform helps businesses democratize data science, obtain your own brand products in less than 24 hours, and create intelligent white-label apps.',
                        es:
                          'Nuestra plataforma de desarrollo de c\xf3digo bajo ayuda a las empresas a democratizar la ciencia de datos, obtener sus propios productos de marca en menos de 24 horas y crear aplicaciones inteligentes de marca blanca.'
                      }
                    }
                  ]);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || q)(h.Lb(g.c));
            }),
            (q.ɵcmp = h.Fb({
              type: q,
              selectors: [['dc-app-landing2-features']],
              decls: 15,
              vars: 1,
              consts: [
                ['id', 'features', 1, 'section', 'mt-6n'],
                [1, 'container', 'pt-0'],
                [1, 'bg-contrast', 'shadow', 'rounded', 'p-5'],
                [1, 'row', 'gap-y'],
                ['class', 'col-md-4', 4, 'ngFor', 'ngForOf'],
                [1, 'col-md-4'],
                [
                  1,
                  'rounded',
                  'gradient',
                  'gradient-primary-light',
                  'icon-xl',
                  'shadow',
                  'd-flex',
                  'align-items-center',
                  'justify-content-center',
                  'mr-3'
                ],
                [3, 'name', 'iconClass'],
                ['class', 'semi-bold mt-4 text-capitalize', 4, 'ngIf'],
                [1, 'w-25', 'bw-2', 'border-alternate', 'mt-3', 'mb-4'],
                ['class', 'regular text-muted', 4, 'ngIf'],
                [1, 'semi-bold', 'mt-4', 'text-capitalize'],
                [1, 'regular', 'text-muted']
              ],
              template: function(n, e) {
                1 & n &&
                  (h.Fc(0, '\n'),
                  h.Qb(1, 'section', 0),
                  h.Fc(2, '\n  '),
                  h.Qb(3, 'div', 1),
                  h.Fc(4, '\n    '),
                  h.Qb(5, 'div', 2),
                  h.Fc(6, '\n      '),
                  h.Qb(7, 'div', 3),
                  h.Fc(8, '\n        '),
                  h.Dc(9, j, 17, 6, 'div', 4),
                  h.Fc(10, '\n      '),
                  h.Pb(),
                  h.Fc(11, '\n    '),
                  h.Pb(),
                  h.Fc(12, '\n  '),
                  h.Pb(),
                  h.Fc(13, '\n'),
                  h.Pb(),
                  h.Fc(14, '\n')),
                  2 & n && (h.xb(9), h.kc('ngForOf', e.features));
              },
              directives: [v.j, O.a, v.k],
              styles: ['']
            })),
            q);
        function U(n, e) {
          if ((1 & n && (h.Qb(0, 'h5'), h.Fc(1), h.Pb()), 2 & n)) {
            var t = h.fc().$implicit;
            h.xb(1),
              h.Hc('\n                  ', t.title.es, '\n                ');
          }
        }
        function W(n, e) {
          if ((1 & n && (h.Qb(0, 'h5'), h.Fc(1), h.Pb()), 2 & n)) {
            var t = h.fc().$implicit;
            h.xb(1),
              h.Hc('\n                  ', t.title.en, '\n                ');
          }
        }
        function Y(n, e) {
          if ((1 & n && (h.Qb(0, 'p'), h.Fc(1), h.Pb()), 2 & n)) {
            var t = h.fc().$implicit;
            h.xb(1),
              h.Hc(
                '\n                  ',
                t.description.es,
                '\n                '
              );
          }
        }
        function $(n, e) {
          if ((1 & n && (h.Qb(0, 'p'), h.Fc(1), h.Pb()), 2 & n)) {
            var t = h.fc().$implicit;
            h.xb(1),
              h.Hc(
                '\n                  ',
                t.description.en,
                '\n                '
              );
          }
        }
        function K(n, e) {
          if (
            (1 & n &&
              (h.Qb(0, 'li'),
              h.Fc(1, '\n            '),
              h.Qb(2, 'div', 27),
              h.Fc(3, '\n              '),
              h.Qb(4, 'div', 28),
              h.Fc(5, '\n                '),
              h.Mb(6, 'dc-feather', 29),
              h.Fc(7, '\n              '),
              h.Pb(),
              h.Fc(8, '\n              '),
              h.Qb(9, 'div', 30),
              h.Fc(10, '\n                '),
              h.Dc(11, U, 2, 1, 'h5', 31),
              h.Fc(12, '\n                '),
              h.Dc(13, W, 2, 1, 'h5', 31),
              h.Fc(14, '\n                '),
              h.Dc(15, Y, 2, 1, 'p', 31),
              h.Fc(16, '\n                '),
              h.Dc(17, $, 2, 1, 'p', 31),
              h.Fc(18, '\n              '),
              h.Pb(),
              h.Fc(19, '\n            '),
              h.Pb(),
              h.Fc(20, '\n          '),
              h.Pb()),
            2 & n)
          ) {
            var t = e.$implicit,
              a = h.fc();
            h.xb(6),
              h.kc('name', t.icon)('iconClass', 'stroke-primary'),
              h.xb(5),
              h.kc('ngIf', 'es' === a.translate.currentLang),
              h.xb(2),
              h.kc('ngIf', 'en-US' === a.translate.currentLang),
              h.xb(2),
              h.kc('ngIf', 'es' === a.translate.currentLang),
              h.xb(2),
              h.kc('ngIf', 'en-US' === a.translate.currentLang);
          }
        }
        var X,
          J,
          B,
          Z,
          nn,
          en =
            (((X = (function() {
              function e(t) {
                n(this, e),
                  (this.translate = t),
                  (this.items = [
                    {
                      icon: 'check-circle',
                      title: {
                        en: 'Real-time Solution',
                        es: 'Soluci\xf3n en tiempo real'
                      },
                      description: {
                        en:
                          'Leverage our high-throughput, real-time AI engine to streamline processes, uncover rich insights, and transform your business\u2019s decision making, real-time.',
                        es:
                          'Aproveche nuestro motor de inteligencia artificial en tiempo real y de alto rendimiento para optimizar los procesos, descubrir informaci\xf3n valiosa y transformar la toma de decisiones de su empresa en tiempo real.'
                      }
                    },
                    {
                      icon: 'command',
                      title: {
                        en: 'Customer & Employees Tracking',
                        es: 'Seguimiento de clientes y empleados'
                      },
                      description: {
                        en:
                          'Our AI-powered platform keeps track of operations and transactions immutably to help you enhance employee productivity and efficiency, customer centricity, and deliver KPIs.',
                        es:
                          'Nuestra plataforma impulsada por inteligencia artificial realiza un seguimiento de las operaciones y transacciones de manera inmutable para ayudarlo a mejorar la productividad y la eficiencia de los empleados, la atenci\xf3n al cliente y entregar KPIs.'
                      }
                    },
                    {
                      icon: 'archive',
                      title: {
                        en: 'Advanced Reporting & Analytics',
                        es: 'Informes y an\xe1lisis avanzados'
                      },
                      description: {
                        en:
                          'DefAgent IAs gathers and reviews all user interactions for analysis to help with faster, smarter, and better decision-making. You can always check with your IAs for new insights and suggestions on process automation for effective sales and marketing solutions to fascinate customers and employees.',
                        es:
                          'DefAgent IAs recopila y revisa todas las interacciones de los usuarios para analizarlas y ayudar con una toma de decisiones m\xe1s r\xe1pida, inteligente y mejor. Siempre puede consultar con sus AI para obtener nuevos conocimientos y sugerencias sobre la automatizaci\xf3n de procesos para soluciones de marketing y ventas efectivas para fascinar a los clientes y empleados.'
                      }
                    }
                  ]);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || X)(h.Lb(g.c));
            }),
            (X.ɵcmp = h.Fb({
              type: X,
              selectors: [['dc-app-landing2-popping-highlight']],
              decls: 75,
              vars: 7,
              consts: [
                [1, 'section', 'why-people-love-us'],
                [1, 'shapes-container', 'overflow-clear'],
                [1, 'shape', 'shape-circle', 'shape-circle-1'],
                ['data-aos', 'fade-up-left'],
                [1, 'shape', 'shape-circle', 'shape-circle-2'],
                ['data-aos', 'fade-up-right', 'data-aos-delay', '200'],
                [1, 'shape', 'pattern', 'pattern-dots', 'pattern-dots-1'],
                [1, 'shape', 'shape-triangle', 'shape-animated'],
                [1, 'animation--rotating'],
                [1, 'container'],
                [1, 'row', 'gap-y'],
                [1, 'col-md-6', 'order-md-last'],
                [1, 'section-heading'],
                [1, 'text-primary', 'bold'],
                [1, 'heading-line'],
                [1, 'list-unstyled'],
                [4, 'ngFor', 'ngForOf'],
                [1, 'col-md-6'],
                [1, 'bubble', 'bubble-left', 'center-x-md'],
                [
                  'data-aos',
                  'zoom-in',
                  1,
                  'rounded',
                  'overflow-hidden',
                  'shadow'
                ],
                [
                  'src',
                  'assets/images/app-landing-2/screens/app/pieces/4.png',
                  'alt',
                  '',
                  1,
                  'img-responsive'
                ],
                [
                  1,
                  'bubble',
                  'bubble-right',
                  'rounded',
                  'overflow-hidden',
                  'shadow'
                ],
                [
                  'src',
                  'assets/images/app-landing-2/screens/app/pieces/5.png',
                  'alt',
                  '',
                  'data-aos',
                  'fade-left',
                  1,
                  'img-responsive'
                ],
                [1, 'iphone-x'],
                [1, 'screen', 'shadow-box'],
                [
                  'src',
                  'assets/images/app-landing-2/screens/app/6.png',
                  'alt',
                  '...'
                ],
                [1, 'notch'],
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
                [1, 'media-body'],
                [4, 'ngIf']
              ],
              template: function(n, e) {
                1 & n &&
                  (h.Fc(0, '\n'),
                  h.Qb(1, 'section', 0),
                  h.Fc(2, '\n  '),
                  h.Qb(3, 'div', 1),
                  h.Fc(4, '\n    '),
                  h.Qb(5, 'div', 2),
                  h.Fc(6, '\n      '),
                  h.Mb(7, 'div', 3),
                  h.Fc(8, '\n    '),
                  h.Pb(),
                  h.Fc(9, '\n    '),
                  h.Qb(10, 'div', 4),
                  h.Fc(11, '\n      '),
                  h.Mb(12, 'div', 5),
                  h.Fc(13, '\n    '),
                  h.Pb(),
                  h.Fc(14, '\n\n    '),
                  h.Mb(15, 'div', 6),
                  h.Fc(16, '\n\n    '),
                  h.Qb(17, 'div', 7),
                  h.Fc(18, '\n      '),
                  h.Mb(19, 'div', 8),
                  h.Fc(20, '\n    '),
                  h.Pb(),
                  h.Fc(21, '\n  '),
                  h.Pb(),
                  h.Fc(22, '\n\n  '),
                  h.Qb(23, 'div', 9),
                  h.Fc(24, '\n    '),
                  h.Qb(25, 'div', 10),
                  h.Fc(26, '\n      '),
                  h.Qb(27, 'div', 11),
                  h.Fc(28, '\n        '),
                  h.Qb(29, 'div', 12),
                  h.Fc(30, '\n          '),
                  h.Qb(31, 'p', 13),
                  h.Fc(32),
                  h.gc(33, 'translate'),
                  h.Pb(),
                  h.Fc(34, '\n          '),
                  h.Qb(35, 'h2', 14),
                  h.Fc(36),
                  h.gc(37, 'translate'),
                  h.Pb(),
                  h.Fc(38, '\n        '),
                  h.Pb(),
                  h.Fc(39, '\n\n        '),
                  h.Qb(40, 'ul', 15),
                  h.Fc(41, '\n          '),
                  h.Dc(42, K, 21, 6, 'li', 16),
                  h.Fc(43, '\n        '),
                  h.Pb(),
                  h.Fc(44, '\n      '),
                  h.Pb(),
                  h.Fc(45, '\n\n      '),
                  h.Qb(46, 'div', 17),
                  h.Fc(47, '\n        '),
                  h.Qb(48, 'div', 18),
                  h.Fc(49, '\n          '),
                  h.Qb(50, 'figure', 19),
                  h.Fc(51, '\n            '),
                  h.Mb(52, 'img', 20),
                  h.Fc(53, '\n          '),
                  h.Pb(),
                  h.Fc(54, '\n        '),
                  h.Pb(),
                  h.Fc(55, '\n\n        '),
                  h.Qb(56, 'figure', 21),
                  h.Fc(57, '\n          '),
                  h.Mb(58, 'img', 22),
                  h.Fc(59, '\n        '),
                  h.Pb(),
                  h.Fc(60, '\n\n        '),
                  h.Qb(61, 'div', 23),
                  h.Fc(62, '\n          '),
                  h.Qb(63, 'div', 24),
                  h.Fc(64, '\n            '),
                  h.Mb(65, 'img', 25),
                  h.Fc(66, '\n          '),
                  h.Pb(),
                  h.Fc(67, '\n          '),
                  h.Mb(68, 'div', 26),
                  h.Fc(69, '\n        '),
                  h.Pb(),
                  h.Fc(70, '\n      '),
                  h.Pb(),
                  h.Fc(71, '\n    '),
                  h.Pb(),
                  h.Fc(72, '\n  '),
                  h.Pb(),
                  h.Fc(73, '\n'),
                  h.Pb(),
                  h.Fc(74, '\n')),
                  2 & n &&
                    (h.xb(32),
                    h.Hc(
                      '\n            ',
                      h.hc(
                        33,
                        3,
                        'DEMOS.SALES.APP_LANDING2_POPPING_HIGHLIGHT.DISCOVER_CREATE_LOVE'
                      ),
                      '\n          '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n            ',
                      h.hc(
                        37,
                        5,
                        'DEMOS.SALES.APP_LANDING2_POPPING_HIGHLIGHT.SEE_WHY_PEOPLE_LOVE_EVERTTHINK'
                      ),
                      '\n          '
                    ),
                    h.xb(6),
                    h.kc('ngForOf', e.items));
              },
              directives: [v.j, O.a, v.k],
              pipes: [g.b],
              styles: ['']
            })),
            X),
          tn = i('ZuuT'),
          an =
            (((J = (function() {
              function e(t) {
                n(this, e), (this.translate = t);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || J)(h.Lb(g.c));
            }),
            (J.ɵcmp = h.Fb({
              type: J,
              selectors: [['dc-app-landing2-download']],
              decls: 60,
              vars: 21,
              consts: [
                [1, 'section', 'app-download'],
                [1, 'container', 'bring-to-front'],
                [1, 'shadow-lg', 'bg-primary', 'p-5', 'rounded'],
                [1, 'section-heading', 'text-center'],
                [
                  1,
                  'badge',
                  'badge-contrast',
                  'badge-pill',
                  'bold',
                  'py-2',
                  'px-4'
                ],
                [1, 'text-contrast'],
                [
                  1,
                  'nav',
                  'flex-column',
                  'flex-md-row',
                  'justify-content-center',
                  'align-items-center',
                  'mt-5'
                ],
                [
                  'href',
                  'https://apps.apple.com/us/app/id1513474218',
                  1,
                  'nav-link',
                  'py-3',
                  'px-4',
                  'btn',
                  'btn-rounded',
                  'btn-download',
                  'btn-dark',
                  'text-contrast',
                  'mr-0',
                  'mr-md-4',
                  'mb-4',
                  'mb-md-0'
                ],
                [
                  'src',
                  'assets/images/app-landing-2/svg/apple.svg',
                  'alt',
                  '...',
                  1,
                  'icon',
                  'icon-md'
                ],
                [1, 'ml-2'],
                [1, 'small', 'bold'],
                [1, 'd-block', 'bold', 'text-contrast'],
                [
                  'href',
                  'https://play.google.com/store/apps/details?id=ai.everythink.community',
                  1,
                  'nav-link',
                  'py-3',
                  'px-4',
                  'btn',
                  'btn-rounded',
                  'btn-download',
                  'btn-light',
                  'text-darker'
                ],
                [
                  'src',
                  'assets/images/app-landing-2/svg/google-play.svg',
                  'alt',
                  '...',
                  1,
                  'icon',
                  'icon-md'
                ],
                [1, 'd-block', 'bold', 'text-darker']
              ],
              template: function(n, e) {
                1 & n &&
                  (h.Fc(0, '\n'),
                  h.Qb(1, 'section', 0),
                  h.Fc(2, '\n  '),
                  h.Qb(3, 'div', 1),
                  h.Fc(4, '\n    '),
                  h.Qb(5, 'div', 2),
                  h.Fc(6, '\n      '),
                  h.Qb(7, 'div', 3),
                  h.Fc(8, '\n        '),
                  h.Qb(9, 'p', 4),
                  h.Fc(10),
                  h.gc(11, 'translate'),
                  h.Pb(),
                  h.Fc(12, '\n        '),
                  h.Qb(13, 'h2', 5),
                  h.Fc(14),
                  h.gc(15, 'translate'),
                  h.Pb(),
                  h.Fc(16, '\n        '),
                  h.Qb(17, 'p', 5),
                  h.Fc(18),
                  h.gc(19, 'translate'),
                  h.Pb(),
                  h.Fc(20, '\n      '),
                  h.Pb(),
                  h.Fc(21, '\n\n      '),
                  h.Qb(22, 'nav', 6),
                  h.Fc(23, '\n        '),
                  h.Qb(24, 'a', 7),
                  h.Fc(25, '\n          '),
                  h.Mb(26, 'img', 8),
                  h.Fc(27, '\n          '),
                  h.Qb(28, 'p', 9),
                  h.Fc(29, '\n            '),
                  h.Qb(30, 'span', 10),
                  h.Fc(31),
                  h.gc(32, 'translate'),
                  h.Pb(),
                  h.Fc(33, '\n            '),
                  h.Qb(34, 'span', 11),
                  h.Fc(35),
                  h.gc(36, 'translate'),
                  h.Pb(),
                  h.Fc(37, '\n          '),
                  h.Pb(),
                  h.Fc(38, '\n        '),
                  h.Pb(),
                  h.Fc(39, '\n\n        '),
                  h.Qb(40, 'a', 12),
                  h.Fc(41, '\n          '),
                  h.Mb(42, 'img', 13),
                  h.Fc(43, '\n          '),
                  h.Qb(44, 'p', 9),
                  h.Fc(45, '\n            '),
                  h.Qb(46, 'span', 10),
                  h.Fc(47),
                  h.gc(48, 'translate'),
                  h.Pb(),
                  h.Fc(49, '\n            '),
                  h.Qb(50, 'span', 14),
                  h.Fc(51),
                  h.gc(52, 'translate'),
                  h.Pb(),
                  h.Fc(53, '\n          '),
                  h.Pb(),
                  h.Fc(54, '\n        '),
                  h.Pb(),
                  h.Fc(55, '\n      '),
                  h.Pb(),
                  h.Fc(56, '\n    '),
                  h.Pb(),
                  h.Fc(57, '\n  '),
                  h.Pb(),
                  h.Fc(58, '\n'),
                  h.Pb(),
                  h.Fc(59, '\n')),
                  2 & n &&
                    (h.xb(10),
                    h.Hc(
                      '\n          ',
                      h.hc(
                        11,
                        7,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.START_TODAY'
                      ),
                      '\n        '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n          ',
                      h.hc(
                        15,
                        9,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.DOWNLOAD_THE_APP'
                      ),
                      '\n        '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n          ',
                      h.hc(
                        19,
                        11,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.DOWNLOAD_EVERTTHINK'
                      ),
                      '\n        '
                    ),
                    h.xb(13),
                    h.Hc(
                      '\n              ',
                      h.hc(
                        32,
                        13,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.GET_IT_ON_THE'
                      ),
                      ''
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n              ',
                      h.hc(
                        36,
                        15,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.APP_STORE'
                      ),
                      ''
                    ),
                    h.xb(12),
                    h.Hc(
                      '\n              ',
                      h.hc(
                        48,
                        17,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.DOWNLOAD_ON'
                      ),
                      ''
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n              ',
                      h.hc(
                        52,
                        19,
                        'DEMOS.SALES.APP_LANDING2_DOWNLOAD.GOOGLE_PLAY'
                      ),
                      ''
                    ));
              },
              pipes: [g.b],
              styles: ['']
            })),
            J),
          sn = i('VKEt'),
          cn = i('iLZQ'),
          on = [
            {
              path: '',
              component:
                ((B = (function() {
                  function e(t) {
                    n(this, e), (this.i18nService = t), this.updateSeoTags();
                  }
                  return (
                    t(e, [
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
                            'DEMOS.SALES.NETWORK_SEARCH_META.TITLE',
                            'DEMOS.SALES.NETWORK_SEARCH_META.KEYWORDS'
                          );
                        }
                      }
                    ]),
                    e
                  );
                })()),
                (B.ɵfac = function(n) {
                  return new (n || B)(h.Lb(f.a));
                }),
                (B.ɵcmp = h.Fb({
                  type: B,
                  selectors: [['dc-app-landing2']],
                  decls: 28,
                  vars: 2,
                  consts: [
                    [3, 'useOnlyDarkLogo', 'position'],
                    [1, 'position-relative', 'overflow-hidden']
                  ],
                  template: function(n, e) {
                    1 & n &&
                      (h.Mb(0, 'dc-navbar-default', 0),
                      h.Fc(1, '\n'),
                      h.Qb(2, 'main', 1),
                      h.Fc(3, '\n  '),
                      h.Mb(4, 'dc-app-landing2-heading'),
                      h.Fc(5, '\n\n  '),
                      h.Mb(6, 'dc-slider-icons'),
                      h.Fc(7, '\n  '),
                      h.Mb(8, 'dc-app-landing2-trending-design'),
                      h.Fc(9, '\n  '),
                      h.Mb(10, 'dc-app-landing2-focus-on-success'),
                      h.Fc(11, '\n  '),
                      h.Mb(12, 'dc-app-landing2-safety'),
                      h.Fc(13, '\n  '),
                      h.Fc(14, '\n  '),
                      h.Mb(15, 'dc-app-landing2-features'),
                      h.Fc(16, '\n  '),
                      h.Mb(17, 'dc-app-landing2-popping-highlight'),
                      h.Fc(18, '\n  '),
                      h.Mb(19, 'dc-faqs1'),
                      h.Fc(20, '\n  '),
                      h.Mb(21, 'dc-app-landing2-download'),
                      h.Fc(22, '\n  '),
                      h.Mb(23, 'dc-cta1'),
                      h.Fc(24, '\n\n  '),
                      h.Mb(25, 'dc-footer2'),
                      h.Fc(26, '\n'),
                      h.Pb(),
                      h.Fc(27, '\n')),
                      2 & n && h.kc('useOnlyDarkLogo', !0)('position', 'right');
                  },
                  directives: [
                    m.a,
                    Q,
                    D.a,
                    I,
                    x,
                    T,
                    z,
                    en,
                    tn.a,
                    an,
                    sn.a,
                    cn.a
                  ],
                  styles: ['']
                })),
                B),
              data: { title: Object(b.c)('EveryThink Sales') }
            }
          ],
          rn =
            (((nn = function e() {
              n(this, e);
            }).ɵmod = h.Jb({ type: nn })),
            (nn.ɵinj = h.Ib({
              factory: function(n) {
                return new (n || nn)();
              },
              imports: [[p.g.forChild(on)]]
            })),
            nn),
          ln =
            (((Z = function e() {
              n(this, e);
            }).ɵmod = h.Jb({ type: Z })),
            (Z.ɵinj = h.Ib({
              factory: function(n) {
                return new (n || Z)();
              },
              imports: [[s.a, c.a, r.a, o.a, l.a, d.a, u.a, rn, g.a.forChild()]]
            })),
            Z);
      },
      ORAR: function(e, t, a) {
        'use strict';
        a.d(t, 'a', function() {
          return o;
        });
        var i = a('tyNb'),
          s = a('sYmb'),
          c = a('fXoL'),
          o = (function() {
            var e = function e() {
              n(this, e);
            };
            return (
              (e.ɵmod = c.Jb({ type: e })),
              (e.ɵinj = c.Ib({
                factory: function(n) {
                  return new (n || e)();
                },
                imports: [[i.g, s.a.forChild()]]
              })),
              e
            );
          })();
      },
      P6su: function(e, t, a) {
        'use strict';
        a.d(t, 'a', function() {
          return l;
        });
        var i = a('1kSV'),
          s = a('M0ag'),
          c = a('hKFN'),
          o = a('sYmb'),
          r = a('fXoL'),
          l = (function() {
            var e = function e() {
              n(this, e);
            };
            return (
              (e.ɵmod = r.Jb({ type: e })),
              (e.ɵinj = r.Ib({
                factory: function(n) {
                  return new (n || e)();
                },
                providers: [c.a],
                imports: [[s.a, i.c, o.a.forChild()]]
              })),
              e
            );
          })();
      },
      V6j0: function(e, t, a) {
        'use strict';
        a.d(t, 'a', function() {
          return r;
        });
        var i = a('M0ag'),
          s = a('+tcz'),
          c = a('sYmb'),
          o = a('fXoL'),
          r = (function() {
            var e = function e() {
              n(this, e);
            };
            return (
              (e.ɵmod = o.Jb({ type: e })),
              (e.ɵinj = o.Ib({
                factory: function(n) {
                  return new (n || e)();
                },
                imports: [[i.a, s.a, c.a.forChild()]]
              })),
              e
            );
          })();
      },
      ZuuT: function(e, a, i) {
        'use strict';
        i.d(a, 'a', function() {
          return A;
        });
        var s = i('fXoL'),
          c = i('sYmb'),
          o = i('ofXK'),
          r = i('wHSu'),
          l = i('hKFN'),
          d = i('1kSV'),
          u = i('6NWb');
        function p(n, e) {
          if (
            (1 & n &&
              (s.Qb(0, 'button', 6),
              s.Fc(1, '\n        '),
              s.Mb(2, 'fa-icon', 7),
              s.Fc(3),
              s.Pb()),
            2 & n)
          ) {
            var t = s.fc(2).$implicit,
              a = s.fc();
            s.xb(2),
              s.kc('icon', a.chevronDown),
              s.xb(1),
              s.Hc('\n        ', t.question.es, '\n      ');
          }
        }
        function b(n, e) {
          if (
            (1 & n &&
              (s.Qb(0, 'button', 6),
              s.Fc(1, '\n        '),
              s.Mb(2, 'fa-icon', 7),
              s.Fc(3),
              s.Pb()),
            2 & n)
          ) {
            var t = s.fc(2).$implicit,
              a = s.fc();
            s.xb(2),
              s.kc('icon', a.chevronDown),
              s.xb(1),
              s.Hc('\n        ', t.question.en, '\n      ');
          }
        }
        function f(n, e) {
          if (
            (1 & n &&
              (s.Fc(0, '\n      '),
              s.Dc(1, p, 4, 2, 'button', 5),
              s.Fc(2, '\n      '),
              s.Dc(3, b, 4, 2, 'button', 5),
              s.Fc(4, '\n    ')),
            2 & n)
          ) {
            var t = s.fc(2);
            s.xb(1),
              s.kc('ngIf', 'es' === t.translate.currentLang),
              s.xb(2),
              s.kc('ngIf', 'en-US' === t.translate.currentLang);
          }
        }
        function h(n, e) {
          if ((1 & n && s.Mb(0, 'div', 9), 2 & n)) {
            var t = s.fc(2).$implicit;
            s.kc('innerHTML', t.answer.es, s.wc);
          }
        }
        function m(n, e) {
          if ((1 & n && s.Mb(0, 'div', 9), 2 & n)) {
            var t = s.fc(2).$implicit;
            s.kc('innerHTML', t.answer.en, s.wc);
          }
        }
        function F(n, e) {
          if (
            (1 & n &&
              (s.Fc(0, '\n      '),
              s.Dc(1, h, 1, 1, 'div', 8),
              s.Fc(2, '\n      '),
              s.Dc(3, m, 1, 1, 'div', 8),
              s.Fc(4, '\n    ')),
            2 & n)
          ) {
            var t = s.fc(2);
            s.xb(1),
              s.kc('ngIf', 'es' === t.translate.currentLang),
              s.xb(2),
              s.kc('ngIf', 'en-US' === t.translate.currentLang);
          }
        }
        function g(n, e) {
          1 & n &&
            (s.Qb(0, 'ngb-panel'),
            s.Fc(1, '\n    '),
            s.Dc(2, f, 5, 2, 'ng-template', 3),
            s.Fc(3, '\n\n    '),
            s.Dc(4, F, 5, 2, 'ng-template', 4),
            s.Fc(5, '\n  '),
            s.Pb());
        }
        var v,
          y,
          P =
            (((y = (function() {
              function e(t, a, i) {
                n(this, e),
                  (this.faqService = a),
                  (this.translate = i),
                  (this.chevronDown = r.e),
                  (this.faqs = []),
                  (t.closeOthers = !0);
              }
              return (
                t(e, [
                  {
                    key: 'ngOnInit',
                    value: function() {
                      var n = this;
                      this.faqService.getFaqs().subscribe(function(e) {
                        return (n.faqs = e);
                      });
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function(n) {
              return new (n || y)(s.Lb(d.b), s.Lb(l.a), s.Lb(c.c));
            }),
            (y.ɵcmp = s.Fb({
              type: y,
              selectors: [['dc-faqs-accordion']],
              features: [s.wb([d.b])],
              decls: 6,
              vars: 1,
              consts: [
                ['activeIds', 'ngb-panel-0'],
                ['acc', 'ngbAccordion'],
                [4, 'ngFor', 'ngForOf'],
                ['ngbPanelHeader', '', 'class', 'mb-3'],
                ['ngbPanelContent', ''],
                ['class', 'card-title btn', 'ngbPanelToggle', '', 4, 'ngIf'],
                ['ngbPanelToggle', '', 1, 'card-title', 'btn'],
                [1, 'angle', 3, 'icon'],
                [3, 'innerHTML', 4, 'ngIf'],
                [3, 'innerHTML']
              ],
              template: function(n, e) {
                1 & n &&
                  (s.Qb(0, 'ngb-accordion', 0, 1),
                  s.Fc(2, '\n  '),
                  s.Dc(3, g, 6, 0, 'ngb-panel', 2),
                  s.Fc(4, '\n'),
                  s.Pb(),
                  s.Fc(5, '\n')),
                  2 & n && (s.xb(3), s.kc('ngForOf', e.faqs));
              },
              directives: [d.a, o.j, d.i, d.k, d.j, o.k, d.l, u.a],
              styles: ['']
            })),
            y),
          A =
            (((v = (function() {
              function e(t) {
                n(this, e), (this.translate = t);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || v)(s.Lb(c.c));
            }),
            (v.ɵcmp = s.Fb({
              type: v,
              selectors: [['dc-faqs1']],
              inputs: {
                edge: 'edge',
                background: 'background',
                classes: 'classes'
              },
              decls: 36,
              vars: 17,
              consts: [
                [3, 'ngClass'],
                [1, 'container', 'bring-to-front'],
                [1, 'row'],
                [1, 'col-md-4'],
                [1, 'bold'],
                [1, 'lead'],
                [1, 'text-muted'],
                [1, 'col-md-8'],
                [1, 'accordion', 'accordion-clean']
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
                  s.Qb(8, 'h2'),
                  s.Fc(9),
                  s.gc(10, 'translate'),
                  s.Qb(11, 'span', 4),
                  s.Fc(12),
                  s.gc(13, 'translate'),
                  s.Pb(),
                  s.Fc(14, '\n        '),
                  s.Pb(),
                  s.Fc(15, '\n\n        '),
                  s.Qb(16, 'p', 5),
                  s.Fc(17),
                  s.gc(18, 'translate'),
                  s.Pb(),
                  s.Fc(19, '\n\n        '),
                  s.Qb(20, 'p', 6),
                  s.Fc(21),
                  s.gc(22, 'translate'),
                  s.Pb(),
                  s.Fc(23, '\n      '),
                  s.Pb(),
                  s.Fc(24, '\n\n      '),
                  s.Qb(25, 'div', 7),
                  s.Fc(26, '\n        '),
                  s.Qb(27, 'div', 8),
                  s.Fc(28, '\n          '),
                  s.Mb(29, 'dc-faqs-accordion'),
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
                  s.Fc(35, '\n')),
                  2 & n &&
                    (s.Bb(
                      'section ',
                      e.background ? 'bg-' + e.background : '',
                      ' ',
                      e.edge ? 'edge ' + e.edge : '',
                      ''
                    ),
                    s.kc('ngClass', e.classes),
                    s.xb(9),
                    s.Hc(
                      '\n          ',
                      s.hc(10, 9, 'FAQS.FAQS1.DO_YOU_HAVE'),
                      '\n          '
                    ),
                    s.xb(3),
                    s.Gc(s.hc(13, 11, 'FAQS.FAQS1.QUESTIONS')),
                    s.xb(5),
                    s.Hc(
                      '\n          ',
                      s.hc(18, 13, 'FAQS.FAQS1.NOT_SURE_HOW'),
                      '\n        '
                    ),
                    s.xb(4),
                    s.Hc(
                      '\n          ',
                      s.hc(22, 15, 'FAQS.FAQS1.HERE_ARE_THE_ANSWERS'),
                      '\n        '
                    ));
              },
              directives: [o.i, P],
              pipes: [c.b],
              styles: ['']
            })),
            v);
      },
      hKFN: function(e, a, i) {
        'use strict';
        i.d(a, 'a', function() {
          return o;
        });
        var s = i('LRne'),
          c = i('fXoL'),
          o = (function() {
            var e = (function() {
              function e() {
                n(this, e);
              }
              return (
                t(e, [
                  {
                    key: 'getFaqs',
                    value: function() {
                      return Object(s.a)([
                        {
                          question: {
                            en:
                              'Can I commercialize the data flows and automated processes I made?',
                            es:
                              '\xbfPuedo comercializar los flujos de datos y los procesos automatizados que realic\xe9?'
                          },
                          answer: {
                            en:
                              'Sure! You\u2019ll need to incorporate as a third-party developer within the DefAgent studio. This way, you can create and sell a wider variety of data flows and automated processes that the IAs can carry out in different networks, automate more processes to improve all interactions as well as a chance to earn returns.',
                            es:
                              '\xa1Por supuesto! Deber\xe1 incorporarse como desarrollador externo dentro del estudio DefAgent. De esta manera, puede crear y vender una variedad m\xe1s amplia de flujos de datos y procesos automatizados que los AI pueden llevar a cabo en diferentes redes, automatizar m\xe1s procesos para mejorar todas las interacciones y tener la oportunidad de obtener ganancias.'
                          }
                        },
                        {
                          question: {
                            en:
                              'What\u2019s your typical support response time?',
                            es:
                              '\xbfCu\xe1l es su tiempo de respuesta de soporte t\xedpico?'
                          },
                          answer: {
                            en:
                              'We care about our people and strive to respond as soon as we can. Usually, this can be in minutes or hours. But then, how fast we reply may depend on how long it takes for us to find out what exactly the problem is. This differs on a case-by-case basis but you can trust that we\u2019ll respond as fast as we possibly can.',
                            es:
                              'Nos preocupamos por nuestra gente y nos esforzamos por responder lo antes posible. Por lo general, esto puede ser en minutos u horas. Pero entonces, la rapidez con la que respondamos puede depender de cu\xe1nto tiempo nos lleve averiguar cu\xe1l es exactamente el problema. Esto difiere seg\xfan el caso, pero puede confiar en que responderemos lo m\xe1s r\xe1pido posible.'
                          }
                        },
                        {
                          question: {
                            en:
                              'What do I need to know to customize my network?',
                            es:
                              '\xbfQu\xe9 necesito saber para personalizar mi red?'
                          },
                          answer: {
                            en:
                              'Our documentation contains everything you need to know to customize your spreadsheet. From here, you can also learn how to create IAs interactions and deliver a perfect experience for end-users. That said, you can also connect with us to help you achieve your goals if need be.',
                            es:
                              'Nuestra documentaci\xf3n contiene todo lo que necesita saber para personalizar su hoja de c\xe1lculo. Desde aqu\xed, tambi\xe9n puede aprender a crear interacciones de AI y ofrecer una experiencia perfecta para los usuarios finales. Dicho esto, tambi\xe9n puede conectarse con nosotros para ayudarlo a lograr sus objetivos si es necesario.'
                          }
                        },
                        {
                          question: {
                            en: 'Can I suggest new features?',
                            es: '\xbfPuedo sugerir nuevas funciones?'
                          },
                          answer: {
                            en:
                              "Definitely<span class='bold'> yes!</span> You can always contact us to let us know your needs. You can trust that we\u2019ll include it in the network if we find your suggestion to hold value for both of us. If not, you can simply request a custom build, at an extra cost. However, it may take a while before the feature gets implemented.",
                            es:
                              "\xa1Definitivamente<span class='bold'> s\xed!</span> Siempre puede contactarnos para informarnos sus necesidades. Puede confiar en que lo incluiremos en la red si consideramos que su sugerencia tiene valor para ambos. De lo contrario, simplemente puede solicitar una construcci\xf3n personalizada, a un costo adicional. Sin embargo, puede pasar un tiempo antes de que se implemente la funci\xf3n."
                          }
                        }
                      ]);
                    }
                  }
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function(n) {
                return new (n || e)();
              }),
              (e.ɵprov = c.Hb({
                token: e,
                factory: e.ɵfac,
                providedIn: 'root'
              })),
              e
            );
          })();
      }
    }
  ]);
})();
