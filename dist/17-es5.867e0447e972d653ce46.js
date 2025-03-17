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
    [17],
    {
      '+tcz': function(t, i, a) {
        'use strict';
        a.d(i, 'a', function() {
          return d;
        }),
          a.d(i, 'b', function() {
            return u;
          });
        var s,
          c,
          o = a('fXoL'),
          r = function() {
            return (r =
              Object.assign ||
              function(n) {
                for (var t, e = 1, i = arguments.length; e < i; e++)
                  for (var a in (t = arguments[e]))
                    Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
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
                    a,
                    s,
                    c,
                    o = n < 0 ? '-' : '';
                  if (
                    ((t = Math.abs(n).toFixed(i.options.decimalPlaces)),
                    (a = (e = (t += '').split('.'))[0]),
                    (s = e.length > 1 ? i.options.decimal + e[1] : ''),
                    i.options.useGrouping)
                  ) {
                    c = '';
                    for (var r = 0, l = a.length; r < l; ++r)
                      0 !== r && r % 3 == 0 && (c = i.options.separator + c),
                        (c = a[l - r - 1] + c);
                    a = c;
                  }
                  return (
                    i.options.numerals &&
                      i.options.numerals.length &&
                      ((a = a.replace(/[0-9]/g, function(n) {
                        return i.options.numerals[+n];
                      })),
                      (s = s.replace(/[0-9]/g, function(n) {
                        return i.options.numerals[+n];
                      }))),
                    o + i.options.prefix + a + s + i.options.suffix
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
          b = a('ofXK'),
          u =
            (((c = (function() {
              function t(e, i, a) {
                n(this, t),
                  (this.el = e),
                  (this.zone = i),
                  (this.platformId = a),
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
                      Object(b.v)(this.platformId) &&
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
          d =
            (((s = function t() {
              n(this, t);
            }).ɵmod = o.Jb({ type: s })),
            (s.ɵinj = o.Ib({
              factory: function(n) {
                return new (n || s)();
              },
              imports: [[]]
            })),
            s);
      },
      S29G: function(t, i, a) {
        'use strict';
        a.r(i),
          a.d(i, 'AutomateSocialModule', function() {
            return en;
          });
        var s = a('M0ag'),
          c = a('XMwz'),
          o = a('V6j0'),
          r = a('2d4A'),
          l = a('pu65'),
          b = a('ORAR'),
          u = a('8klf'),
          d = a('M0Rk'),
          p = a('T7/b'),
          h = a('tyNb'),
          m = a('ey9i'),
          F = a('fXoL'),
          f = a('sYmb'),
          g = a('cqDB'),
          E = a('ofXK');
        function v(n, t) {
          if (
            (1 & n &&
              (F.Qb(0, 'li'),
              F.Fc(1, '\n          '),
              F.Mb(2, 'img', 19),
              F.Fc(3, '\n        '),
              F.Pb()),
            2 & n)
          ) {
            var e = t.$implicit,
              i = t.index;
            F.Ab(
              'bubble icon icon-',
              i % 2 == 0 ? 'xl' : i % 3 == 0 ? 'lg' : 'xxl',
              ''
            ),
              F.xb(2),
              F.mc(
                'src',
                'assets/images/automate-social/v8/header/',
                e.icon,
                '.svg',
                F.yc
              );
          }
        }
        var O,
          T,
          S =
            (((O = (function() {
              function t(e) {
                n(this, t),
                  (this.translate = e),
                  (this.bubbles = [
                    { icon: 'like' },
                    { icon: 'smile' },
                    { icon: 'heart' },
                    { icon: 'heart' },
                    { icon: 'smile' },
                    { icon: 'like' },
                    { icon: 'smile' },
                    { icon: 'heart' },
                    { icon: 'smile' },
                    { icon: 'like' },
                    { icon: 'like' },
                    { icon: 'heart' },
                    { icon: 'like' },
                    { icon: 'heart' },
                    { icon: 'smile' },
                    { icon: 'like' }
                  ]);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || O)(F.Lb(f.c));
            }),
            (O.ɵcmp = F.Fb({
              type: O,
              selectors: [['dc-automate-social-heading']],
              decls: 53,
              vars: 12,
              consts: [
                [
                  1,
                  'section',
                  'header',
                  'text-contrast',
                  'automate-social-header'
                ],
                [1, 'shape-wrapper'],
                [
                  1,
                  'shape',
                  'shape-background',
                  'shape-main',
                  'gradient',
                  'gradient-blue-purple'
                ],
                [1, 'shape', 'shape-background', 'shape-main', 'shadow'],
                [1, 'shape', 'shape-background', 'shape-top'],
                [1, 'shape', 'shape-background', 'shape-right'],
                [1, 'container', 'overflow-hidden'],
                [1, 'row', 'gap-y'],
                [1, 'col-lg-6'],
                [
                  1,
                  'text-contrast',
                  'extra-bold',
                  'display-md-2',
                  'display-lg-4',
                  'font-lg',
                  'mb-4'
                ],
                [1, 'd-block', 'light', 'font-md'],
                [1, 'text-contrast', 'lead'],
                [3, 'inputClass', 'label'],
                [1, 'main-shape-wrapper'],
                [1, 'bubbles-wrapper'],
                ['data-aos', 'fade-up'],
                [
                  'src',
                  'assets/images/automate-social/v8/header/main-shape.svg',
                  'alt',
                  '',
                  1,
                  'img-responsive',
                  'main-shape',
                  'floating'
                ],
                [1, 'animations', 'm-0'],
                [3, 'class', 4, 'ngFor', 'ngForOf'],
                ['alt', '', 1, 'img-responsive', 3, 'src']
              ],
              template: function(n, t) {
                1 & n &&
                  (F.Qb(0, 'header', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'div', 1),
                  F.Fc(3, '\n    '),
                  F.Mb(4, 'div', 2),
                  F.Fc(5, '\n    '),
                  F.Mb(6, 'div', 3),
                  F.Fc(7, '\n    '),
                  F.Mb(8, 'div', 4),
                  F.Fc(9, '\n    '),
                  F.Mb(10, 'div', 5),
                  F.Fc(11, '\n  '),
                  F.Pb(),
                  F.Fc(12, '\n\n  '),
                  F.Qb(13, 'div', 6),
                  F.Fc(14, '\n    '),
                  F.Qb(15, 'div', 7),
                  F.Fc(16, '\n      '),
                  F.Qb(17, 'div', 8),
                  F.Fc(18, '\n        '),
                  F.Qb(19, 'h1', 9),
                  F.Fc(20),
                  F.gc(21, 'translate'),
                  F.Qb(22, 'span', 10),
                  F.Fc(23),
                  F.gc(24, 'translate'),
                  F.Pb(),
                  F.Fc(25, '\n        '),
                  F.Pb(),
                  F.Fc(26, '\n        '),
                  F.Qb(27, 'p', 11),
                  F.Fc(28),
                  F.gc(29, 'translate'),
                  F.Pb(),
                  F.Fc(30, '\n\n        '),
                  F.Mb(31, 'dc-form-register-simple-inline', 12),
                  F.Fc(32, '\n      '),
                  F.Pb(),
                  F.Fc(33, '\n    '),
                  F.Pb(),
                  F.Fc(34, '\n  '),
                  F.Pb(),
                  F.Fc(35, '\n\n  '),
                  F.Qb(36, 'div', 13),
                  F.Fc(37, '\n    '),
                  F.Qb(38, 'div', 14),
                  F.Fc(39, '\n      '),
                  F.Qb(40, 'div', 15),
                  F.Fc(41, '\n        '),
                  F.Mb(42, 'img', 16),
                  F.Fc(43, '\n      '),
                  F.Pb(),
                  F.Fc(44, '\n\n      '),
                  F.Qb(45, 'ul', 17),
                  F.Fc(46, '\n        '),
                  F.Dc(47, v, 4, 4, 'li', 18),
                  F.Fc(48, '\n      '),
                  F.Pb(),
                  F.Fc(49, '\n    '),
                  F.Pb(),
                  F.Fc(50, '\n  '),
                  F.Pb(),
                  F.Fc(51, '\n'),
                  F.Pb(),
                  F.Fc(52, '\n')),
                  2 & n &&
                    (F.xb(20),
                    F.Hc(
                      '\n          ',
                      F.hc(
                        21,
                        6,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_HEADING.EVERYTHINK_FOR_CUSTOMER_SERVICE'
                      ),
                      '\n          '
                    ),
                    F.xb(3),
                    F.Hc(
                      '\n            ',
                      F.hc(
                        24,
                        8,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_HEADING.DONT_THINK_IT'
                      ),
                      '\n          '
                    ),
                    F.xb(5),
                    F.Hc(
                      '\n          ',
                      F.hc(
                        29,
                        10,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_HEADING.DRIVE_YOUR_BUSINESS_FORWARD'
                      ),
                      '\n        '
                    ),
                    F.xb(3),
                    F.kc('inputClass', 'py-4')('label', 'Subscribe now'),
                    F.xb(16),
                    F.kc('ngForOf', t.bubbles));
              },
              directives: [g.a, E.j],
              pipes: [f.b],
              styles: ['']
            })),
            O),
          y = a('f+4U'),
          A = a('wHSu'),
          M = a('u3Pa'),
          I = a('6NWb'),
          V =
            (((T = (function() {
              function t(e) {
                n(this, t), (this.translate = e), (this.play = A.p);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || T)(F.Lb(f.c));
            }),
            (T.ɵcmp = F.Fb({
              type: T,
              selectors: [['dc-automate-social-get-started']],
              decls: 66,
              vars: 29,
              consts: [
                [1, 'section', 'get-started'],
                [1, 'container'],
                [1, 'section-heading', 'text-center'],
                [1, 'extra-bold'],
                [1, 'lead', 'color2'],
                [1, 'text-primary'],
                [1, 'pb-12', 'position-relative'],
                ['data-aos', 'fade-u', 1, ''],
                [1, 'screen'],
                [
                  'src',
                  'assets/images/automate-social/screens/dash/4.png',
                  'alt',
                  '',
                  1,
                  'img-responsive'
                ],
                [1, 'floating-box', 'bg-contrast'],
                [1, 'p-3', 'p-lg-3', 'shadow-lg', 'rounded', 'text-center'],
                [1, 'lead', 'regular'],
                [1, 'handwritten', 'highlight', 'font-md', 'mt-5'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'btn',
                  'btn-rounded',
                  'btn-lg',
                  'btn-primary'
                ],
                [1, 'w-50', 'mx-auto', 'my-4'],
                [1, 'small', 'text-secondary'],
                [3, 'identifier', 'videoId'],
                [
                  1,
                  'play-video',
                  'btn',
                  'btn-primary',
                  'btn-circle',
                  'text-contrast',
                  'shadow'
                ],
                [3, 'icon']
              ],
              template: function(n, t) {
                1 & n &&
                  (F.Qb(0, 'section', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'div', 1),
                  F.Fc(3, '\n    '),
                  F.Qb(4, 'div', 2),
                  F.Fc(5, '\n      '),
                  F.Qb(6, 'h2', 3),
                  F.Fc(7),
                  F.gc(8, 'translate'),
                  F.Pb(),
                  F.Fc(9, '\n      '),
                  F.Qb(10, 'p', 4),
                  F.Fc(11, '\n        '),
                  F.Qb(12, 'span', 5),
                  F.Fc(13),
                  F.gc(14, 'translate'),
                  F.Pb(),
                  F.Fc(15),
                  F.gc(16, 'translate'),
                  F.gc(17, 'translate'),
                  F.Pb(),
                  F.Fc(18, '\n    '),
                  F.Pb(),
                  F.Fc(19, '\n\n    '),
                  F.Qb(20, 'div', 6),
                  F.Fc(21, '\n      '),
                  F.Qb(22, 'div', 7),
                  F.Fc(23, '\n        '),
                  F.Qb(24, 'div', 8),
                  F.Fc(25, '\n          '),
                  F.Mb(26, 'img', 9),
                  F.Fc(27, '\n        '),
                  F.Pb(),
                  F.Fc(28, '\n      '),
                  F.Pb(),
                  F.Fc(29, '\n\n      '),
                  F.Qb(30, 'div', 10),
                  F.Fc(31, '\n        '),
                  F.Fc(32, '\n        '),
                  F.Qb(33, 'div', 11),
                  F.Fc(34, '\n          '),
                  F.Qb(35, 'p', 12),
                  F.Fc(36),
                  F.gc(37, 'translate'),
                  F.Pb(),
                  F.Fc(38, '\n\n          '),
                  F.Qb(39, 'p', 13),
                  F.Fc(40),
                  F.gc(41, 'translate'),
                  F.Pb(),
                  F.Fc(42, '\n          '),
                  F.Qb(43, 'a', 14),
                  F.Fc(44),
                  F.gc(45, 'translate'),
                  F.Pb(),
                  F.Fc(46, '\n\n          '),
                  F.Mb(47, 'hr', 15),
                  F.Fc(48, '\n          '),
                  F.Qb(49, 'p', 16),
                  F.Fc(50),
                  F.gc(51, 'translate'),
                  F.Pb(),
                  F.Fc(52, '\n        '),
                  F.Pb(),
                  F.Fc(53, '\n      '),
                  F.Pb(),
                  F.Fc(54, '\n\n      '),
                  F.Qb(55, 'dc-modal-video', 17),
                  F.Fc(56, '\n        '),
                  F.Qb(57, 'span', 18),
                  F.Fc(58, '\n          '),
                  F.Mb(59, 'fa-icon', 19),
                  F.Fc(60, '\n        '),
                  F.Pb(),
                  F.Fc(61, '\n      '),
                  F.Pb(),
                  F.Fc(62, '\n    '),
                  F.Pb(),
                  F.Fc(63, '\n  '),
                  F.Pb(),
                  F.Fc(64, '\n'),
                  F.Pb(),
                  F.Fc(65, '\n')),
                  2 & n &&
                    (F.xb(7),
                    F.Hc(
                      '\n        ',
                      F.hc(
                        8,
                        13,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.ALL_IN_ONE'
                      ),
                      '\n      '
                    ),
                    F.xb(6),
                    F.Gc(
                      F.hc(
                        14,
                        15,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.EVERTTHINK_YOU_NEED_IN_ONE_SOLUTION'
                      )
                    ),
                    F.xb(2),
                    F.Ic(
                      '\n        ',
                      F.hc(
                        16,
                        17,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.EVERTTHINK_YOU_NEED_IN_ONE_SOLUTION1'
                      ),
                      '\n        ',
                      F.hc(
                        17,
                        19,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.INTRODUCING'
                      ),
                      '\n      '
                    ),
                    F.xb(21),
                    F.Hc(
                      '\n            ',
                      F.hc(
                        37,
                        21,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.COMMUNICATE_BETTER'
                      ),
                      '\n          '
                    ),
                    F.xb(4),
                    F.Hc(
                      '\n            ',
                      F.hc(
                        41,
                        23,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.NO_CREDIT_CARD_NEEDED'
                      ),
                      '\n          '
                    ),
                    F.xb(4),
                    F.Hc(
                      '\n            ',
                      F.hc(
                        45,
                        25,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.START_NOW'
                      ),
                      '\n          '
                    ),
                    F.xb(6),
                    F.Hc(
                      '\n            ',
                      F.hc(
                        51,
                        27,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.BY_REGISTERING'
                      ),
                      '\n          '
                    ),
                    F.xb(5),
                    F.kc('identifier', 'myModal')('videoId', 'Hi4htnMAvCs'),
                    F.xb(4),
                    F.zb('font-lg'),
                    F.kc('icon', t.play));
              },
              directives: [M.a, I.a],
              pipes: [f.b],
              styles: ['']
            })),
            T),
          P = a('AL06');
        function _(n, t) {
          if (
            (1 & n &&
              (F.Qb(0, 'li', 18),
              F.Fc(1, '\n            '),
              F.Qb(2, 'div', 19),
              F.Fc(3, '\n              '),
              F.Qb(4, 'div'),
              F.Fc(5, '\n                '),
              F.Mb(6, 'dc-feather', 20),
              F.Fc(7, '\n              '),
              F.Pb(),
              F.Fc(8, '\n\n              '),
              F.Qb(9, 'div', 21),
              F.Fc(10, '\n                '),
              F.Qb(11, 'h5', 5),
              F.Fc(12),
              F.Pb(),
              F.Fc(13, '\n                '),
              F.Qb(14, 'p', 22),
              F.Fc(15),
              F.Pb(),
              F.Fc(16, '\n              '),
              F.Pb(),
              F.Fc(17, '\n            '),
              F.Pb(),
              F.Fc(18, '\n          '),
              F.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            F.xb(4),
              F.Bb(
                'rounded-circle bg-',
                e.color,
                ' shadow-',
                e.color,
                ' text-contrast p-3 icon-xl d-flex align-items-center justify-content-center mr-3'
              ),
              F.xb(2),
              F.kc('name', e.icon)('iconClass', e.icon),
              F.xb(6),
              F.Gc(e.name),
              F.xb(3),
              F.Gc(e.description);
          }
        }
        var x,
          C = function() {
            return ['/contact'];
          },
          R =
            (((x = (function() {
              function t(e) {
                n(this, t),
                  (this.translate = e),
                  (this.features = [
                    {
                      name: 'Real-time Solution',
                      icon: 'activity',
                      color: 'info',
                      description:
                        'Create your own white-label apps. Streamline processes. Discover deficiencies. Access valuable insights and information and iterate in real-time.'
                    },
                    {
                      name: 'Affordability',
                      icon: 'bar-chart',
                      color: 'success',
                      description:
                        'Reduced human intervention and improved workflow efficiency help you reduce costs. EveryThink does ALL OF THE HEAVY LIFTING so your employees can focus on more valuable and complex tasks all while being super affordable!'
                    },
                    {
                      name: 'Unique user experience',
                      icon: 'thumbs-up',
                      color: 'alternate',
                      description:
                        'A new and intuitive experience fosters seamless interaction among stakeholders at every stage and aspect of the business. Makes absolute sense when clients need quick and accurate solutions so employees don\u2019t have to go crazy looking for answers.'
                    },
                    {
                      name: 'Analytics',
                      icon: 'archive',
                      color: 'danger',
                      description:
                        'Your \u201cteachable\u201d IAs gather and thoroughly review all user interactions for analysis and iteration to improve communications and make relevant process suggestions. Continuously check in with your IAs for new suggestions on automating processes or ways to give better solutions to your clients and employees.'
                    }
                  ]);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || x)(F.Lb(f.c));
            }),
            (x.ɵcmp = F.Fb({
              type: x,
              selectors: [['dc-automate-social-why']],
              decls: 53,
              vars: 9,
              consts: [
                [1, 'section', 'why-us', 'overflow-hidden'],
                [1, 'shape-wrapper'],
                [1, 'absolute', 'shape-background', 'top', 'right'],
                [1, 'container'],
                [1, 'section-heading', 'text-center'],
                [1, 'bold'],
                [1, 'lead', 'text-secondary'],
                [1, 'row', 'gap-y'],
                [1, 'col-md-5'],
                [1, 'list-unstyled', 'why-icon-list'],
                ['class', 'list-item', 4, 'ngFor', 'ngForOf'],
                [1, 'col-md-7'],
                ['data-aos', 'fade-left'],
                [
                  'src',
                  'assets/images/automate-social/build.svg',
                  'alt',
                  '',
                  1,
                  'img-responsive'
                ],
                [1, 'mt-5', 'text-center'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'btn',
                  'btn-primary',
                  'btn-rounded'
                ],
                [1, 'small'],
                [1, 'btn', 'btn-link', 3, 'routerLink'],
                [1, 'list-item'],
                [1, 'media'],
                [3, 'name', 'iconClass'],
                [1, 'media-body'],
                [1, 'my-0']
              ],
              template: function(n, t) {
                1 & n &&
                  (F.Qb(0, 'section', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'div', 1),
                  F.Fc(3, '\n    '),
                  F.Mb(4, 'div', 2),
                  F.Fc(5, '\n  '),
                  F.Pb(),
                  F.Fc(6, '\n\n  '),
                  F.Qb(7, 'div', 3),
                  F.Fc(8, '\n    '),
                  F.Qb(9, 'div', 4),
                  F.Fc(10, '\n      '),
                  F.Qb(11, 'h2', 5),
                  F.Fc(12),
                  F.gc(13, 'translate'),
                  F.Pb(),
                  F.Fc(14, '\n      '),
                  F.Qb(15, 'p', 6),
                  F.Fc(16),
                  F.gc(17, 'translate'),
                  F.Pb(),
                  F.Fc(18, '\n    '),
                  F.Pb(),
                  F.Fc(19, '\n\n    '),
                  F.Qb(20, 'div', 7),
                  F.Fc(21, '\n      '),
                  F.Qb(22, 'div', 8),
                  F.Fc(23, '\n        '),
                  F.Qb(24, 'ul', 9),
                  F.Fc(25, '\n          '),
                  F.Dc(26, _, 19, 8, 'li', 10),
                  F.Fc(27, '\n        '),
                  F.Pb(),
                  F.Fc(28, '\n      '),
                  F.Pb(),
                  F.Fc(29, '\n\n      '),
                  F.Qb(30, 'div', 11),
                  F.Fc(31, '\n        '),
                  F.Qb(32, 'figure', 12),
                  F.Fc(33, '\n          '),
                  F.Mb(34, 'img', 13),
                  F.Fc(35, '\n        '),
                  F.Pb(),
                  F.Fc(36, '\n      '),
                  F.Pb(),
                  F.Fc(37, '\n    '),
                  F.Pb(),
                  F.Fc(38, '\n\n    '),
                  F.Qb(39, 'div', 14),
                  F.Fc(40, '\n      '),
                  F.Qb(41, 'a', 15),
                  F.Fc(42, 'Get started!'),
                  F.Pb(),
                  F.Fc(43, '\n      '),
                  F.Qb(44, 'p', 16),
                  F.Fc(45, '- or -'),
                  F.Pb(),
                  F.Fc(46, '\n      '),
                  F.Qb(47, 'a', 17),
                  F.Fc(48, 'Contact us'),
                  F.Pb(),
                  F.Fc(49, '\n    '),
                  F.Pb(),
                  F.Fc(50, '\n  '),
                  F.Pb(),
                  F.Fc(51, '\n'),
                  F.Pb(),
                  F.Fc(52, '\n')),
                  2 & n &&
                    (F.xb(12),
                    F.Hc(
                      '\n        ',
                      F.hc(
                        13,
                        4,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_WHY.WHY_EVERYTHINK'
                      ),
                      '\n      '
                    ),
                    F.xb(4),
                    F.Hc(
                      '\n        ',
                      F.hc(
                        17,
                        6,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_WHY.OUR_MISSION_IS_TO_PROVIDE_YOU'
                      ),
                      '\n      '
                    ),
                    F.xb(10),
                    F.kc('ngForOf', t.features),
                    F.xb(21),
                    F.kc('routerLink', F.nc(8, C)));
              },
              directives: [E.j, h.f, P.a],
              pipes: [f.b],
              styles: ['']
            })),
            x),
          Q = function(n, t) {
            return { 'top.%': n, 'left.%': t };
          };
        function w(n, t) {
          if ((1 & n && (F.Qb(0, 'span', 13), F.Fc(1), F.Pb()), 2 & n)) {
            var e = t.$implicit;
            F.kc('ngStyle', F.pc(2, Q, e.position.top, e.position.left)),
              F.xb(1),
              F.Gc(e.text);
          }
        }
        var U,
          k,
          N =
            (((U = (function() {
              function t(e) {
                n(this, t),
                  (this.translate = e),
                  (this.bubbles = [
                    {
                      text: 'Accesible option',
                      position: { top: 47, left: 1 }
                    },
                    {
                      text: 'Geolocated metrics',
                      position: { top: 69, left: 61 }
                    },
                    { text: 'Key metrics', position: { top: 15, left: 85 } },
                    { text: 'Custom Dashboard', position: { top: 7, left: 30 } }
                  ]);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || U)(F.Lb(f.c));
            }),
            (U.ɵcmp = F.Fb({
              type: U,
              selectors: [['dc-automate-social-automation-solution']],
              decls: 39,
              vars: 7,
              consts: [
                [
                  1,
                  'section',
                  'text-contrast',
                  'advanced-automation-solution',
                  'overflow-hidden'
                ],
                [1, 'shape-wrapper'],
                [
                  1,
                  'shape',
                  'shape-background',
                  'mountain',
                  'top',
                  'shape-left'
                ],
                [1, 'container'],
                [1, 'section-heading', 'text-center'],
                [1, 'bold', 'text-contrast'],
                [1, 'lead'],
                [1, 'bg-contrast', 'shadow-lg', 'rounded'],
                [1, 'browser'],
                [1, 'screen'],
                [
                  'src',
                  'assets/images/automate-social/screens/dash/1.png',
                  'alt',
                  '#{buble.text}',
                  1,
                  'img-responsive',
                  'rounded-bottom'
                ],
                [1, 'bubbles-speech', 'd-none', 'd-md-block'],
                [
                  'class',
                  'absolute small shadow speech-bubble',
                  'data-aos',
                  'slide-up',
                  3,
                  'ngStyle',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [
                  'data-aos',
                  'slide-up',
                  1,
                  'absolute',
                  'small',
                  'shadow',
                  'speech-bubble',
                  3,
                  'ngStyle'
                ]
              ],
              template: function(n, t) {
                1 & n &&
                  (F.Fc(0, '\n'),
                  F.Qb(1, 'section', 0),
                  F.Fc(2, '\n  '),
                  F.Qb(3, 'div', 1),
                  F.Fc(4, '\n    '),
                  F.Mb(5, 'div', 2),
                  F.Fc(6, '\n  '),
                  F.Pb(),
                  F.Fc(7, '\n\n  '),
                  F.Qb(8, 'div', 3),
                  F.Fc(9, '\n    '),
                  F.Qb(10, 'div', 4),
                  F.Fc(11, '\n      '),
                  F.Qb(12, 'h2', 5),
                  F.Fc(13),
                  F.gc(14, 'translate'),
                  F.Pb(),
                  F.Fc(15, '\n      '),
                  F.Qb(16, 'p', 6),
                  F.Fc(17),
                  F.gc(18, 'translate'),
                  F.Pb(),
                  F.Fc(19, '\n    '),
                  F.Pb(),
                  F.Fc(20, '\n\n    '),
                  F.Qb(21, 'div', 7),
                  F.Fc(22, '\n      '),
                  F.Qb(23, 'div', 8),
                  F.Fc(24, '\n        '),
                  F.Qb(25, 'div', 9),
                  F.Fc(26, '\n          '),
                  F.Mb(27, 'img', 10),
                  F.Fc(28, '\n        '),
                  F.Pb(),
                  F.Fc(29, '\n\n        '),
                  F.Qb(30, 'div', 11),
                  F.Fc(31, '\n          '),
                  F.Dc(32, w, 2, 5, 'span', 12),
                  F.Fc(33, '\n        '),
                  F.Pb(),
                  F.Fc(34, '\n      '),
                  F.Pb(),
                  F.Fc(35, '\n    '),
                  F.Pb(),
                  F.Fc(36, '\n  '),
                  F.Pb(),
                  F.Fc(37, '\n'),
                  F.Pb(),
                  F.Fc(38, '\n')),
                  2 & n &&
                    (F.xb(13),
                    F.Hc(
                      '\n        ',
                      F.hc(
                        14,
                        3,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_AUTOMATION_SOLUTION.ADVANCED_CUSTOMER'
                      ),
                      '\n      '
                    ),
                    F.xb(4),
                    F.Hc(
                      '\n        ',
                      F.hc(
                        18,
                        5,
                        'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_AUTOMATION_SOLUTION.DESCRIPTION'
                      ),
                      '\n      '
                    ),
                    F.xb(15),
                    F.kc('ngForOf', t.bubbles));
              },
              directives: [E.j, E.l],
              pipes: [f.b],
              styles: ['']
            })),
            U),
          D = a('+tcz'),
          L =
            (((k = (function() {
              function t(e) {
                n(this, t), (this.translate = e);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || k)(F.Lb(f.c));
            }),
            (k.ɵcmp = F.Fb({
              type: k,
              selectors: [['dc-counter2']],
              decls: 60,
              vars: 27,
              consts: [
                [
                  1,
                  'section',
                  'image-background',
                  'blanket',
                  'blanket-contrast',
                  'alpha-5',
                  'contain'
                ],
                [1, 'container'],
                [1, 'row', 'align-items-center'],
                [1, 'col-md-5', 'mr-md-auto'],
                [
                  1,
                  'rounded-pill',
                  'shadow-box',
                  'py-2',
                  'px-4',
                  'badge',
                  'badge-info'
                ],
                [1, 'font-md', 'display-md-1', 'light', 'm-0', 'text-darker'],
                [1, 'counter', 'extra-bold', 3, 'countUp'],
                [1, 'm-0', 'font-md', 'text-primary'],
                [1, 'bold'],
                [1, 'my-4', 'w-25'],
                [1, 'small', 'text-secondary'],
                [1, 'col-md-6'],
                [
                  'name',
                  'thumbs-up',
                  'width',
                  '48',
                  'height',
                  '48',
                  1,
                  'stroke-primary'
                ],
                [1, 'section-heading'],
                [1, 'bold', 'font-md', 'display-md-4'],
                [1, 'lead', 'text-secondary'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'btn',
                  'btn-rounded',
                  'btn-primary',
                  'mt-2'
                ]
              ],
              template: function(n, t) {
                1 & n &&
                  (F.Qb(0, 'section', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'div', 1),
                  F.Fc(3, '\n    '),
                  F.Qb(4, 'div', 2),
                  F.Fc(5, '\n      '),
                  F.Qb(6, 'div', 3),
                  F.Fc(7, '\n        '),
                  F.Qb(8, 'span', 4),
                  F.Fc(9),
                  F.gc(10, 'translate'),
                  F.Pb(),
                  F.Fc(11, '\n\n        '),
                  F.Qb(12, 'p', 5),
                  F.Fc(13, '\n          '),
                  F.Qb(14, 'span', 6),
                  F.Fc(15, '1'),
                  F.Pb(),
                  F.Fc(16, '\n        '),
                  F.Pb(),
                  F.Fc(17, '\n\n        '),
                  F.Qb(18, 'p', 7),
                  F.Fc(19, '\n          '),
                  F.Qb(20, 'span', 8),
                  F.Fc(21),
                  F.gc(22, 'translate'),
                  F.Pb(),
                  F.Fc(23),
                  F.gc(24, 'translate'),
                  F.Pb(),
                  F.Fc(25, '\n\n        '),
                  F.Mb(26, 'hr', 9),
                  F.Fc(27, '\n        '),
                  F.Qb(28, 'p', 10),
                  F.Fc(29),
                  F.gc(30, 'translate'),
                  F.Pb(),
                  F.Fc(31, '\n      '),
                  F.Pb(),
                  F.Fc(32, '\n\n      '),
                  F.Qb(33, 'div', 11),
                  F.Fc(34, '\n        '),
                  F.Mb(35, 'dc-feather', 12),
                  F.Fc(36, '\n\n        '),
                  F.Qb(37, 'div', 13),
                  F.Fc(38, '\n          '),
                  F.Qb(39, 'h2', 14),
                  F.Fc(40),
                  F.gc(41, 'translate'),
                  F.Pb(),
                  F.Fc(42, '\n\n          '),
                  F.Qb(43, 'p', 15),
                  F.Fc(44),
                  F.gc(45, 'translate'),
                  F.Pb(),
                  F.Fc(46, '\n        '),
                  F.Pb(),
                  F.Fc(47, '\n\n        '),
                  F.Qb(48, 'p'),
                  F.Fc(49),
                  F.gc(50, 'translate'),
                  F.Pb(),
                  F.Fc(51, '\n\n        '),
                  F.Qb(52, 'a', 16),
                  F.Fc(53),
                  F.gc(54, 'translate'),
                  F.Pb(),
                  F.Fc(55, '\n      '),
                  F.Pb(),
                  F.Fc(56, '\n    '),
                  F.Pb(),
                  F.Fc(57, '\n  '),
                  F.Pb(),
                  F.Fc(58, '\n'),
                  F.Pb(),
                  F.Fc(59, '\n')),
                  2 & n &&
                    (F.Cc(
                      'background-image',
                      'url(assets/img/shps/map-dots.svg)'
                    ),
                    F.xb(9),
                    F.Hc(
                      '\n          ',
                      F.hc(10, 11, 'COUNTER.COUNTER2.WHY_CUSTOMER_TRUST_US'),
                      '\n        '
                    ),
                    F.xb(5),
                    F.kc('countUp', 1),
                    F.xb(7),
                    F.Gc(F.hc(22, 13, 'COUNTER.COUNTER2.HAPPY')),
                    F.xb(2),
                    F.Hc(
                      '\n          ',
                      F.hc(24, 15, 'COUNTER.COUNTER2.CUSTOMER'),
                      '\n        '
                    ),
                    F.xb(6),
                    F.Hc(
                      '\n          ',
                      F.hc(30, 17, 'COUNTER.COUNTER2.THESE_AMAZING_STATS'),
                      '\n        '
                    ),
                    F.xb(11),
                    F.Hc(
                      '\n            ',
                      F.hc(
                        41,
                        19,
                        'COUNTER.COUNTER2.TONS_OF_SUCCESSFULL_IMPLEMENATION'
                      ),
                      '\n          '
                    ),
                    F.xb(4),
                    F.Hc(
                      '\n            ',
                      F.hc(
                        45,
                        21,
                        'COUNTER.COUNTER2.USERS_IMPROVE_THEIR_ABILITY'
                      ),
                      '\n          '
                    ),
                    F.xb(5),
                    F.Gc(F.hc(50, 23, 'COUNTER.COUNTER2.ALL_POWERED_BY')),
                    F.xb(4),
                    F.Gc(F.hc(54, 25, 'COUNTER.COUNTER2.LEARN_MORE')));
              },
              directives: [D.b, P.a],
              pipes: [f.b],
              styles: ['']
            })),
            k),
          H = a('YJ7q'),
          G = a('nhfI');
        function Y(n, t) {
          if (
            (1 & n &&
              (F.Qb(0, 'div', 3),
              F.Fc(1, '\n      '),
              F.Qb(2, 'div', 4),
              F.Fc(3, '\n        '),
              F.Mb(4, 'img', 5),
              F.Fc(5, '\n\n        '),
              F.Qb(6, 'p', 6),
              F.Fc(7),
              F.gc(8, 'translate'),
              F.Pb(),
              F.Fc(9, '\n\n        '),
              F.Mb(10, 'hr', 7),
              F.Fc(11, '\n        '),
              F.Qb(12, 'footer'),
              F.Fc(13, '\n          '),
              F.Qb(14, 'cite', 8),
              F.Fc(15),
              F.gc(16, 'translate'),
              F.Pb(),
              F.Fc(17, '\n          '),
              F.Qb(18, 'span', 9),
              F.Fc(19),
              F.gc(20, 'translate'),
              F.Pb(),
              F.Fc(21, '\n        '),
              F.Pb(),
              F.Fc(22, '\n      '),
              F.Pb(),
              F.Fc(23, '\n    '),
              F.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            F.xb(4),
              F.mc('src', 'assets/images/app-landing/avatar/', e, '.jpg', F.yc),
              F.xb(3),
              F.Hc(
                '\n          ',
                F.hc(8, 4, 'TESTIMONIALS.TESTIMONIAL_SLIDER.LOREM_IPS'),
                '\n        '
              ),
              F.xb(8),
              F.Hc(
                '\u2014\n            ',
                F.hc(16, 6, 'TESTIMONIALS.TESTIMONIAL_SLIDER.JANE_DOR'),
                ''
              ),
              F.xb(4),
              F.Gc(
                F.hc(20, 8, 'TESTIMONIALS.TESTIMONIAL_SLIDER.AWESOME_COMPANY')
              );
          }
        }
        var j,
          z,
          B,
          J,
          K,
          W = function() {
            return [1, 2, 3, 4];
          },
          q =
            (((z = (function() {
              function t(e) {
                n(this, t),
                  (this.translate = e),
                  (this.config = {
                    slidesPerView: 1,
                    centeredSlides: !0,
                    autoplay: !1,
                    navigation: !0,
                    pagination: !1
                  });
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || z)(F.Lb(f.c));
            }),
            (z.ɵcmp = F.Fb({
              type: z,
              selectors: [['dc-testimonials-slider']],
              decls: 8,
              vars: 3,
              consts: [
                [1, 'testimonials-slider'],
                [1, 'swiper-container', 'pb-5', 3, 'config'],
                ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
                [1, 'swiper-slide'],
                [1, 'd-flex', 'flex-column', 'align-items-center'],
                ['alt', '', 1, 'rounded-circle', 'shadow', 'mb-4', 3, 'src'],
                [1, 'w-75', 'lead', 'mt-3'],
                [1, 'w-50'],
                [1, 'bold', 'text-primary', 'text-capitalize'],
                [1, 'small', 'text-secondary', 'mt-0']
              ],
              template: function(n, t) {
                1 & n &&
                  (F.Qb(0, 'div', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'swiper', 1),
                  F.Fc(3, '\n    '),
                  F.Dc(4, Y, 24, 10, 'div', 2),
                  F.Fc(5, '\n  '),
                  F.Pb(),
                  F.Fc(6, '\n'),
                  F.Pb(),
                  F.Fc(7, '\n')),
                  2 & n &&
                    (F.xb(2),
                    F.kc('config', t.config),
                    F.xb(2),
                    F.kc('ngForOf', F.nc(2, W)));
              },
              directives: [G.a, E.j],
              pipes: [f.b],
              styles: ['']
            })),
            z),
          X =
            (((j = (function() {
              function t(e) {
                n(this, t), (this.translate = e);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || j)(F.Lb(f.c));
            }),
            (j.ɵcmp = F.Fb({
              type: j,
              selectors: [['dc-testimonial-simple-slider-boxed']],
              decls: 11,
              vars: 0,
              consts: [
                [1, 'section', 'bg-light'],
                [1, 'container', 'bring-to-front', 'py-0'],
                [1, 'shadow', 'bg-contrast', 'p-5', 'rounded']
              ],
              template: function(n, t) {
                1 & n &&
                  (F.Qb(0, 'section', 0),
                  F.Fc(1, '\n  '),
                  F.Qb(2, 'div', 1),
                  F.Fc(3, '\n    '),
                  F.Qb(4, 'div', 2),
                  F.Fc(5, '\n      '),
                  F.Mb(6, 'dc-testimonials-slider'),
                  F.Fc(7, '\n    '),
                  F.Pb(),
                  F.Fc(8, '\n  '),
                  F.Pb(),
                  F.Fc(9, '\n'),
                  F.Pb(),
                  F.Fc(10, '\n'));
              },
              directives: [q],
              styles: ['']
            })),
            j),
          $ = a('VKEt'),
          Z = a('iLZQ'),
          nn = [
            {
              path: '',
              component:
                ((B = (function() {
                  function t() {
                    n(this, t);
                  }
                  return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
                })()),
                (B.ɵfac = function(n) {
                  return new (n || B)();
                }),
                (B.ɵcmp = F.Fb({
                  type: B,
                  selectors: [['dc-automate-social']],
                  decls: 21,
                  vars: 3,
                  consts: [[3, 'title'], [3, 'background', 'edge']],
                  template: function(n, t) {
                    1 & n &&
                      (F.Mb(0, 'dc-automate-social-heading'),
                      F.Fc(1, '\n\n'),
                      F.Mb(2, 'dc-slider-card-projects'),
                      F.Fc(3, '\n'),
                      F.Mb(4, 'dc-automate-social-get-started'),
                      F.Fc(5, '\n'),
                      F.Mb(6, 'dc-automate-social-why'),
                      F.Fc(7, '\n'),
                      F.Mb(8, 'dc-automate-social-automation-solution'),
                      F.Fc(9, '\n'),
                      F.Mb(10, 'dc-counter2'),
                      F.Fc(11, '\n'),
                      F.Fc(12, '\n'),
                      F.Mb(13, 'dc-trust-us', 0),
                      F.Fc(14, '\n'),
                      F.Mb(15, 'dc-testimonial-simple-slider-boxed'),
                      F.Fc(16, '\n'),
                      F.Mb(17, 'dc-cta1', 1),
                      F.Fc(18, '\n\n'),
                      F.Mb(19, 'dc-footer2'),
                      F.Fc(20, '\n')),
                      2 & n &&
                        (F.xb(13),
                        F.kc('title', 'Part of our happy customers'),
                        F.xb(4),
                        F.kc('background', 'contrast')('edge', 'top-left'));
                  },
                  directives: [S, y.a, V, R, N, L, H.a, X, $.a, Z.a],
                  styles: ['']
                })),
                B),
              data: { title: Object(m.c)('EveryThink Customer Service') }
            }
          ],
          tn =
            (((K = function t() {
              n(this, t);
            }).ɵmod = F.Jb({ type: K })),
            (K.ɵinj = F.Ib({
              factory: function(n) {
                return new (n || K)();
              },
              imports: [[h.g.forChild(nn)], h.g]
            })),
            K),
          en =
            (((J = function t() {
              n(this, t);
            }).ɵmod = F.Jb({ type: J })),
            (J.ɵinj = F.Ib({
              factory: function(n) {
                return new (n || J)();
              },
              imports: [
                [
                  s.a,
                  c.a,
                  o.a,
                  r.a,
                  l.a,
                  b.a,
                  u.a,
                  d.a,
                  p.a,
                  f.a.forChild(),
                  tn
                ]
              ]
            })),
            J);
      },
      V6j0: function(t, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return r;
        });
        var a = i('M0ag'),
          s = i('+tcz'),
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
                imports: [[a.a, s.a, c.a.forChild()]]
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
        var a = i('nhfI'),
          s = i('M0ag'),
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
                imports: [[a.c, s.a, c.a.forChild()]]
              })),
              t
            );
          })();
      }
    }
  ]);
})();
