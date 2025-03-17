(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    '+tcz': function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return r;
      }),
        e.d(n, 'b', function() {
          return o;
        });
      var i = e('fXoL'),
        a = function() {
          return (a =
            Object.assign ||
            function(t) {
              for (var n, e = 1, i = arguments.length; e < i; e++)
                for (var a in (n = arguments[e]))
                  Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
              return t;
            }).apply(this, arguments);
        },
        s = (function() {
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
                  a,
                  s,
                  c,
                  o = t < 0 ? '-' : '';
                if (
                  ((n = Math.abs(t).toFixed(i.options.decimalPlaces)),
                  (a = (e = (n += '').split('.'))[0]),
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
                    ((a = a.replace(/[0-9]/g, function(t) {
                      return i.options.numerals[+t];
                    })),
                    (s = s.replace(/[0-9]/g, function(t) {
                      return i.options.numerals[+t];
                    }))),
                  o + i.options.prefix + a + s + i.options.suffix
                );
              }),
              (this.easeOutExpo = function(t, n, e, i) {
                return (e * (1 - Math.pow(2, (-10 * t) / i)) * 1024) / 1023 + n;
              }),
              (this.options = a({}, this.defaults, e)),
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
      let o = (() => {
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
                (this.countUp = new s(
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
        r = (() => {
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
    S29G: function(t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, 'AutomateSocialModule', function() {
          return j;
        });
      var i = e('M0ag'),
        a = e('XMwz'),
        s = e('V6j0'),
        c = e('2d4A'),
        o = e('pu65'),
        r = e('ORAR'),
        l = e('8klf'),
        b = e('M0Rk'),
        d = e('T7/b'),
        u = e('tyNb'),
        p = e('ey9i'),
        h = e('fXoL'),
        m = e('sYmb'),
        F = e('cqDB'),
        g = e('ofXK');
      function f(t, n) {
        if (
          (1 & t &&
            (h.Qb(0, 'li'),
            h.Fc(1, '\n          '),
            h.Mb(2, 'img', 19),
            h.Fc(3, '\n        '),
            h.Pb()),
          2 & t)
        ) {
          const t = n.$implicit,
            e = n.index;
          h.Ab(
            'bubble icon icon-',
            e % 2 == 0 ? 'xl' : e % 3 == 0 ? 'lg' : 'xxl',
            ''
          ),
            h.xb(2),
            h.mc(
              'src',
              'assets/images/automate-social/v8/header/',
              t.icon,
              '.svg',
              h.yc
            );
        }
      }
      let E = (() => {
        class t {
          constructor(t) {
            (this.translate = t),
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
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)(h.Lb(m.c));
          }),
          (t.ɵcmp = h.Fb({
            type: t,
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
            template: function(t, n) {
              1 & t &&
                (h.Qb(0, 'header', 0),
                h.Fc(1, '\n  '),
                h.Qb(2, 'div', 1),
                h.Fc(3, '\n    '),
                h.Mb(4, 'div', 2),
                h.Fc(5, '\n    '),
                h.Mb(6, 'div', 3),
                h.Fc(7, '\n    '),
                h.Mb(8, 'div', 4),
                h.Fc(9, '\n    '),
                h.Mb(10, 'div', 5),
                h.Fc(11, '\n  '),
                h.Pb(),
                h.Fc(12, '\n\n  '),
                h.Qb(13, 'div', 6),
                h.Fc(14, '\n    '),
                h.Qb(15, 'div', 7),
                h.Fc(16, '\n      '),
                h.Qb(17, 'div', 8),
                h.Fc(18, '\n        '),
                h.Qb(19, 'h1', 9),
                h.Fc(20),
                h.gc(21, 'translate'),
                h.Qb(22, 'span', 10),
                h.Fc(23),
                h.gc(24, 'translate'),
                h.Pb(),
                h.Fc(25, '\n        '),
                h.Pb(),
                h.Fc(26, '\n        '),
                h.Qb(27, 'p', 11),
                h.Fc(28),
                h.gc(29, 'translate'),
                h.Pb(),
                h.Fc(30, '\n\n        '),
                h.Mb(31, 'dc-form-register-simple-inline', 12),
                h.Fc(32, '\n      '),
                h.Pb(),
                h.Fc(33, '\n    '),
                h.Pb(),
                h.Fc(34, '\n  '),
                h.Pb(),
                h.Fc(35, '\n\n  '),
                h.Qb(36, 'div', 13),
                h.Fc(37, '\n    '),
                h.Qb(38, 'div', 14),
                h.Fc(39, '\n      '),
                h.Qb(40, 'div', 15),
                h.Fc(41, '\n        '),
                h.Mb(42, 'img', 16),
                h.Fc(43, '\n      '),
                h.Pb(),
                h.Fc(44, '\n\n      '),
                h.Qb(45, 'ul', 17),
                h.Fc(46, '\n        '),
                h.Dc(47, f, 4, 4, 'li', 18),
                h.Fc(48, '\n      '),
                h.Pb(),
                h.Fc(49, '\n    '),
                h.Pb(),
                h.Fc(50, '\n  '),
                h.Pb(),
                h.Fc(51, '\n'),
                h.Pb(),
                h.Fc(52, '\n')),
                2 & t &&
                  (h.xb(20),
                  h.Hc(
                    '\n          ',
                    h.hc(
                      21,
                      6,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_HEADING.EVERYTHINK_FOR_CUSTOMER_SERVICE'
                    ),
                    '\n          '
                  ),
                  h.xb(3),
                  h.Hc(
                    '\n            ',
                    h.hc(
                      24,
                      8,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_HEADING.DONT_THINK_IT'
                    ),
                    '\n          '
                  ),
                  h.xb(5),
                  h.Hc(
                    '\n          ',
                    h.hc(
                      29,
                      10,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_HEADING.DRIVE_YOUR_BUSINESS_FORWARD'
                    ),
                    '\n        '
                  ),
                  h.xb(3),
                  h.kc('inputClass', 'py-4')('label', 'Subscribe now'),
                  h.xb(16),
                  h.kc('ngForOf', n.bubbles));
            },
            directives: [F.a, g.j],
            pipes: [m.b],
            styles: ['']
          })),
          t
        );
      })();
      var O = e('f+4U'),
        T = e('wHSu'),
        v = e('u3Pa'),
        S = e('6NWb');
      let A = (() => {
        class t {
          constructor(t) {
            (this.translate = t), (this.play = T.p);
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)(h.Lb(m.c));
          }),
          (t.ɵcmp = h.Fb({
            type: t,
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
            template: function(t, n) {
              1 & t &&
                (h.Qb(0, 'section', 0),
                h.Fc(1, '\n  '),
                h.Qb(2, 'div', 1),
                h.Fc(3, '\n    '),
                h.Qb(4, 'div', 2),
                h.Fc(5, '\n      '),
                h.Qb(6, 'h2', 3),
                h.Fc(7),
                h.gc(8, 'translate'),
                h.Pb(),
                h.Fc(9, '\n      '),
                h.Qb(10, 'p', 4),
                h.Fc(11, '\n        '),
                h.Qb(12, 'span', 5),
                h.Fc(13),
                h.gc(14, 'translate'),
                h.Pb(),
                h.Fc(15),
                h.gc(16, 'translate'),
                h.gc(17, 'translate'),
                h.Pb(),
                h.Fc(18, '\n    '),
                h.Pb(),
                h.Fc(19, '\n\n    '),
                h.Qb(20, 'div', 6),
                h.Fc(21, '\n      '),
                h.Qb(22, 'div', 7),
                h.Fc(23, '\n        '),
                h.Qb(24, 'div', 8),
                h.Fc(25, '\n          '),
                h.Mb(26, 'img', 9),
                h.Fc(27, '\n        '),
                h.Pb(),
                h.Fc(28, '\n      '),
                h.Pb(),
                h.Fc(29, '\n\n      '),
                h.Qb(30, 'div', 10),
                h.Fc(31, '\n        '),
                h.Fc(32, '\n        '),
                h.Qb(33, 'div', 11),
                h.Fc(34, '\n          '),
                h.Qb(35, 'p', 12),
                h.Fc(36),
                h.gc(37, 'translate'),
                h.Pb(),
                h.Fc(38, '\n\n          '),
                h.Qb(39, 'p', 13),
                h.Fc(40),
                h.gc(41, 'translate'),
                h.Pb(),
                h.Fc(42, '\n          '),
                h.Qb(43, 'a', 14),
                h.Fc(44),
                h.gc(45, 'translate'),
                h.Pb(),
                h.Fc(46, '\n\n          '),
                h.Mb(47, 'hr', 15),
                h.Fc(48, '\n          '),
                h.Qb(49, 'p', 16),
                h.Fc(50),
                h.gc(51, 'translate'),
                h.Pb(),
                h.Fc(52, '\n        '),
                h.Pb(),
                h.Fc(53, '\n      '),
                h.Pb(),
                h.Fc(54, '\n\n      '),
                h.Qb(55, 'dc-modal-video', 17),
                h.Fc(56, '\n        '),
                h.Qb(57, 'span', 18),
                h.Fc(58, '\n          '),
                h.Mb(59, 'fa-icon', 19),
                h.Fc(60, '\n        '),
                h.Pb(),
                h.Fc(61, '\n      '),
                h.Pb(),
                h.Fc(62, '\n    '),
                h.Pb(),
                h.Fc(63, '\n  '),
                h.Pb(),
                h.Fc(64, '\n'),
                h.Pb(),
                h.Fc(65, '\n')),
                2 & t &&
                  (h.xb(7),
                  h.Hc(
                    '\n        ',
                    h.hc(
                      8,
                      13,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.ALL_IN_ONE'
                    ),
                    '\n      '
                  ),
                  h.xb(6),
                  h.Gc(
                    h.hc(
                      14,
                      15,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.EVERTTHINK_YOU_NEED_IN_ONE_SOLUTION'
                    )
                  ),
                  h.xb(2),
                  h.Ic(
                    '\n        ',
                    h.hc(
                      16,
                      17,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.EVERTTHINK_YOU_NEED_IN_ONE_SOLUTION1'
                    ),
                    '\n        ',
                    h.hc(
                      17,
                      19,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.INTRODUCING'
                    ),
                    '\n      '
                  ),
                  h.xb(21),
                  h.Hc(
                    '\n            ',
                    h.hc(
                      37,
                      21,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.COMMUNICATE_BETTER'
                    ),
                    '\n          '
                  ),
                  h.xb(4),
                  h.Hc(
                    '\n            ',
                    h.hc(
                      41,
                      23,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.NO_CREDIT_CARD_NEEDED'
                    ),
                    '\n          '
                  ),
                  h.xb(4),
                  h.Hc(
                    '\n            ',
                    h.hc(
                      45,
                      25,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.START_NOW'
                    ),
                    '\n          '
                  ),
                  h.xb(6),
                  h.Hc(
                    '\n            ',
                    h.hc(
                      51,
                      27,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_GET_STARTED.BY_REGISTERING'
                    ),
                    '\n          '
                  ),
                  h.xb(5),
                  h.kc('identifier', 'myModal')('videoId', 'Hi4htnMAvCs'),
                  h.xb(4),
                  h.zb('font-lg'),
                  h.kc('icon', n.play));
            },
            directives: [v.a, S.a],
            pipes: [m.b],
            styles: ['']
          })),
          t
        );
      })();
      var M = e('AL06');
      function I(t, n) {
        if (
          (1 & t &&
            (h.Qb(0, 'li', 18),
            h.Fc(1, '\n            '),
            h.Qb(2, 'div', 19),
            h.Fc(3, '\n              '),
            h.Qb(4, 'div'),
            h.Fc(5, '\n                '),
            h.Mb(6, 'dc-feather', 20),
            h.Fc(7, '\n              '),
            h.Pb(),
            h.Fc(8, '\n\n              '),
            h.Qb(9, 'div', 21),
            h.Fc(10, '\n                '),
            h.Qb(11, 'h5', 5),
            h.Fc(12),
            h.Pb(),
            h.Fc(13, '\n                '),
            h.Qb(14, 'p', 22),
            h.Fc(15),
            h.Pb(),
            h.Fc(16, '\n              '),
            h.Pb(),
            h.Fc(17, '\n            '),
            h.Pb(),
            h.Fc(18, '\n          '),
            h.Pb()),
          2 & t)
        ) {
          const t = n.$implicit;
          h.xb(4),
            h.Bb(
              'rounded-circle bg-',
              t.color,
              ' shadow-',
              t.color,
              ' text-contrast p-3 icon-xl d-flex align-items-center justify-content-center mr-3'
            ),
            h.xb(2),
            h.kc('name', t.icon)('iconClass', t.icon),
            h.xb(6),
            h.Gc(t.name),
            h.xb(3),
            h.Gc(t.description);
        }
      }
      const y = function() {
        return ['/contact'];
      };
      let V = (() => {
        class t {
          constructor(t) {
            (this.translate = t),
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
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)(h.Lb(m.c));
          }),
          (t.ɵcmp = h.Fb({
            type: t,
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
            template: function(t, n) {
              1 & t &&
                (h.Qb(0, 'section', 0),
                h.Fc(1, '\n  '),
                h.Qb(2, 'div', 1),
                h.Fc(3, '\n    '),
                h.Mb(4, 'div', 2),
                h.Fc(5, '\n  '),
                h.Pb(),
                h.Fc(6, '\n\n  '),
                h.Qb(7, 'div', 3),
                h.Fc(8, '\n    '),
                h.Qb(9, 'div', 4),
                h.Fc(10, '\n      '),
                h.Qb(11, 'h2', 5),
                h.Fc(12),
                h.gc(13, 'translate'),
                h.Pb(),
                h.Fc(14, '\n      '),
                h.Qb(15, 'p', 6),
                h.Fc(16),
                h.gc(17, 'translate'),
                h.Pb(),
                h.Fc(18, '\n    '),
                h.Pb(),
                h.Fc(19, '\n\n    '),
                h.Qb(20, 'div', 7),
                h.Fc(21, '\n      '),
                h.Qb(22, 'div', 8),
                h.Fc(23, '\n        '),
                h.Qb(24, 'ul', 9),
                h.Fc(25, '\n          '),
                h.Dc(26, I, 19, 8, 'li', 10),
                h.Fc(27, '\n        '),
                h.Pb(),
                h.Fc(28, '\n      '),
                h.Pb(),
                h.Fc(29, '\n\n      '),
                h.Qb(30, 'div', 11),
                h.Fc(31, '\n        '),
                h.Qb(32, 'figure', 12),
                h.Fc(33, '\n          '),
                h.Mb(34, 'img', 13),
                h.Fc(35, '\n        '),
                h.Pb(),
                h.Fc(36, '\n      '),
                h.Pb(),
                h.Fc(37, '\n    '),
                h.Pb(),
                h.Fc(38, '\n\n    '),
                h.Qb(39, 'div', 14),
                h.Fc(40, '\n      '),
                h.Qb(41, 'a', 15),
                h.Fc(42, 'Get started!'),
                h.Pb(),
                h.Fc(43, '\n      '),
                h.Qb(44, 'p', 16),
                h.Fc(45, '- or -'),
                h.Pb(),
                h.Fc(46, '\n      '),
                h.Qb(47, 'a', 17),
                h.Fc(48, 'Contact us'),
                h.Pb(),
                h.Fc(49, '\n    '),
                h.Pb(),
                h.Fc(50, '\n  '),
                h.Pb(),
                h.Fc(51, '\n'),
                h.Pb(),
                h.Fc(52, '\n')),
                2 & t &&
                  (h.xb(12),
                  h.Hc(
                    '\n        ',
                    h.hc(
                      13,
                      4,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_WHY.WHY_EVERYTHINK'
                    ),
                    '\n      '
                  ),
                  h.xb(4),
                  h.Hc(
                    '\n        ',
                    h.hc(
                      17,
                      6,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_WHY.OUR_MISSION_IS_TO_PROVIDE_YOU'
                    ),
                    '\n      '
                  ),
                  h.xb(10),
                  h.kc('ngForOf', n.features),
                  h.xb(21),
                  h.kc('routerLink', h.nc(8, y)));
            },
            directives: [g.j, u.f, M.a],
            pipes: [m.b],
            styles: ['']
          })),
          t
        );
      })();
      const P = function(t, n) {
        return { 'top.%': t, 'left.%': n };
      };
      function _(t, n) {
        if ((1 & t && (h.Qb(0, 'span', 13), h.Fc(1), h.Pb()), 2 & t)) {
          const t = n.$implicit;
          h.kc('ngStyle', h.pc(2, P, t.position.top, t.position.left)),
            h.xb(1),
            h.Gc(t.text);
        }
      }
      let x = (() => {
        class t {
          constructor(t) {
            (this.translate = t),
              (this.bubbles = [
                { text: 'Accesible option', position: { top: 47, left: 1 } },
                { text: 'Geolocated metrics', position: { top: 69, left: 61 } },
                { text: 'Key metrics', position: { top: 15, left: 85 } },
                { text: 'Custom Dashboard', position: { top: 7, left: 30 } }
              ]);
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)(h.Lb(m.c));
          }),
          (t.ɵcmp = h.Fb({
            type: t,
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
              [1, 'shape', 'shape-background', 'mountain', 'top', 'shape-left'],
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
            template: function(t, n) {
              1 & t &&
                (h.Fc(0, '\n'),
                h.Qb(1, 'section', 0),
                h.Fc(2, '\n  '),
                h.Qb(3, 'div', 1),
                h.Fc(4, '\n    '),
                h.Mb(5, 'div', 2),
                h.Fc(6, '\n  '),
                h.Pb(),
                h.Fc(7, '\n\n  '),
                h.Qb(8, 'div', 3),
                h.Fc(9, '\n    '),
                h.Qb(10, 'div', 4),
                h.Fc(11, '\n      '),
                h.Qb(12, 'h2', 5),
                h.Fc(13),
                h.gc(14, 'translate'),
                h.Pb(),
                h.Fc(15, '\n      '),
                h.Qb(16, 'p', 6),
                h.Fc(17),
                h.gc(18, 'translate'),
                h.Pb(),
                h.Fc(19, '\n    '),
                h.Pb(),
                h.Fc(20, '\n\n    '),
                h.Qb(21, 'div', 7),
                h.Fc(22, '\n      '),
                h.Qb(23, 'div', 8),
                h.Fc(24, '\n        '),
                h.Qb(25, 'div', 9),
                h.Fc(26, '\n          '),
                h.Mb(27, 'img', 10),
                h.Fc(28, '\n        '),
                h.Pb(),
                h.Fc(29, '\n\n        '),
                h.Qb(30, 'div', 11),
                h.Fc(31, '\n          '),
                h.Dc(32, _, 2, 5, 'span', 12),
                h.Fc(33, '\n        '),
                h.Pb(),
                h.Fc(34, '\n      '),
                h.Pb(),
                h.Fc(35, '\n    '),
                h.Pb(),
                h.Fc(36, '\n  '),
                h.Pb(),
                h.Fc(37, '\n'),
                h.Pb(),
                h.Fc(38, '\n')),
                2 & t &&
                  (h.xb(13),
                  h.Hc(
                    '\n        ',
                    h.hc(
                      14,
                      3,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_AUTOMATION_SOLUTION.ADVANCED_CUSTOMER'
                    ),
                    '\n      '
                  ),
                  h.xb(4),
                  h.Hc(
                    '\n        ',
                    h.hc(
                      18,
                      5,
                      'DEMOS.CUSTOMER_SERVICE.AUTOMATE_SOCIAL_AUTOMATION_SOLUTION.DESCRIPTION'
                    ),
                    '\n      '
                  ),
                  h.xb(15),
                  h.kc('ngForOf', n.bubbles));
            },
            directives: [g.j, g.l],
            pipes: [m.b],
            styles: ['']
          })),
          t
        );
      })();
      var C = e('+tcz');
      let R = (() => {
        class t {
          constructor(t) {
            this.translate = t;
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)(h.Lb(m.c));
          }),
          (t.ɵcmp = h.Fb({
            type: t,
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
            template: function(t, n) {
              1 & t &&
                (h.Qb(0, 'section', 0),
                h.Fc(1, '\n  '),
                h.Qb(2, 'div', 1),
                h.Fc(3, '\n    '),
                h.Qb(4, 'div', 2),
                h.Fc(5, '\n      '),
                h.Qb(6, 'div', 3),
                h.Fc(7, '\n        '),
                h.Qb(8, 'span', 4),
                h.Fc(9),
                h.gc(10, 'translate'),
                h.Pb(),
                h.Fc(11, '\n\n        '),
                h.Qb(12, 'p', 5),
                h.Fc(13, '\n          '),
                h.Qb(14, 'span', 6),
                h.Fc(15, '1'),
                h.Pb(),
                h.Fc(16, '\n        '),
                h.Pb(),
                h.Fc(17, '\n\n        '),
                h.Qb(18, 'p', 7),
                h.Fc(19, '\n          '),
                h.Qb(20, 'span', 8),
                h.Fc(21),
                h.gc(22, 'translate'),
                h.Pb(),
                h.Fc(23),
                h.gc(24, 'translate'),
                h.Pb(),
                h.Fc(25, '\n\n        '),
                h.Mb(26, 'hr', 9),
                h.Fc(27, '\n        '),
                h.Qb(28, 'p', 10),
                h.Fc(29),
                h.gc(30, 'translate'),
                h.Pb(),
                h.Fc(31, '\n      '),
                h.Pb(),
                h.Fc(32, '\n\n      '),
                h.Qb(33, 'div', 11),
                h.Fc(34, '\n        '),
                h.Mb(35, 'dc-feather', 12),
                h.Fc(36, '\n\n        '),
                h.Qb(37, 'div', 13),
                h.Fc(38, '\n          '),
                h.Qb(39, 'h2', 14),
                h.Fc(40),
                h.gc(41, 'translate'),
                h.Pb(),
                h.Fc(42, '\n\n          '),
                h.Qb(43, 'p', 15),
                h.Fc(44),
                h.gc(45, 'translate'),
                h.Pb(),
                h.Fc(46, '\n        '),
                h.Pb(),
                h.Fc(47, '\n\n        '),
                h.Qb(48, 'p'),
                h.Fc(49),
                h.gc(50, 'translate'),
                h.Pb(),
                h.Fc(51, '\n\n        '),
                h.Qb(52, 'a', 16),
                h.Fc(53),
                h.gc(54, 'translate'),
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
                2 & t &&
                  (h.Cc(
                    'background-image',
                    'url(assets/img/shps/map-dots.svg)'
                  ),
                  h.xb(9),
                  h.Hc(
                    '\n          ',
                    h.hc(10, 11, 'COUNTER.COUNTER2.WHY_CUSTOMER_TRUST_US'),
                    '\n        '
                  ),
                  h.xb(5),
                  h.kc('countUp', 1),
                  h.xb(7),
                  h.Gc(h.hc(22, 13, 'COUNTER.COUNTER2.HAPPY')),
                  h.xb(2),
                  h.Hc(
                    '\n          ',
                    h.hc(24, 15, 'COUNTER.COUNTER2.CUSTOMER'),
                    '\n        '
                  ),
                  h.xb(6),
                  h.Hc(
                    '\n          ',
                    h.hc(30, 17, 'COUNTER.COUNTER2.THESE_AMAZING_STATS'),
                    '\n        '
                  ),
                  h.xb(11),
                  h.Hc(
                    '\n            ',
                    h.hc(
                      41,
                      19,
                      'COUNTER.COUNTER2.TONS_OF_SUCCESSFULL_IMPLEMENATION'
                    ),
                    '\n          '
                  ),
                  h.xb(4),
                  h.Hc(
                    '\n            ',
                    h.hc(
                      45,
                      21,
                      'COUNTER.COUNTER2.USERS_IMPROVE_THEIR_ABILITY'
                    ),
                    '\n          '
                  ),
                  h.xb(5),
                  h.Gc(h.hc(50, 23, 'COUNTER.COUNTER2.ALL_POWERED_BY')),
                  h.xb(4),
                  h.Gc(h.hc(54, 25, 'COUNTER.COUNTER2.LEARN_MORE')));
            },
            directives: [C.b, M.a],
            pipes: [m.b],
            styles: ['']
          })),
          t
        );
      })();
      var Q = e('YJ7q'),
        w = e('nhfI');
      function U(t, n) {
        if (
          (1 & t &&
            (h.Qb(0, 'div', 3),
            h.Fc(1, '\n      '),
            h.Qb(2, 'div', 4),
            h.Fc(3, '\n        '),
            h.Mb(4, 'img', 5),
            h.Fc(5, '\n\n        '),
            h.Qb(6, 'p', 6),
            h.Fc(7),
            h.gc(8, 'translate'),
            h.Pb(),
            h.Fc(9, '\n\n        '),
            h.Mb(10, 'hr', 7),
            h.Fc(11, '\n        '),
            h.Qb(12, 'footer'),
            h.Fc(13, '\n          '),
            h.Qb(14, 'cite', 8),
            h.Fc(15),
            h.gc(16, 'translate'),
            h.Pb(),
            h.Fc(17, '\n          '),
            h.Qb(18, 'span', 9),
            h.Fc(19),
            h.gc(20, 'translate'),
            h.Pb(),
            h.Fc(21, '\n        '),
            h.Pb(),
            h.Fc(22, '\n      '),
            h.Pb(),
            h.Fc(23, '\n    '),
            h.Pb()),
          2 & t)
        ) {
          const t = n.$implicit;
          h.xb(4),
            h.mc('src', 'assets/images/app-landing/avatar/', t, '.jpg', h.yc),
            h.xb(3),
            h.Hc(
              '\n          ',
              h.hc(8, 4, 'TESTIMONIALS.TESTIMONIAL_SLIDER.LOREM_IPS'),
              '\n        '
            ),
            h.xb(8),
            h.Hc(
              '\u2014\n            ',
              h.hc(16, 6, 'TESTIMONIALS.TESTIMONIAL_SLIDER.JANE_DOR'),
              ''
            ),
            h.xb(4),
            h.Gc(
              h.hc(20, 8, 'TESTIMONIALS.TESTIMONIAL_SLIDER.AWESOME_COMPANY')
            );
        }
      }
      const N = function() {
        return [1, 2, 3, 4];
      };
      let k = (() => {
          class t {
            constructor(t) {
              (this.translate = t),
                (this.config = {
                  slidesPerView: 1,
                  centeredSlides: !0,
                  autoplay: !1,
                  navigation: !0,
                  pagination: !1
                });
            }
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function(n) {
              return new (n || t)(h.Lb(m.c));
            }),
            (t.ɵcmp = h.Fb({
              type: t,
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
              template: function(t, n) {
                1 & t &&
                  (h.Qb(0, 'div', 0),
                  h.Fc(1, '\n  '),
                  h.Qb(2, 'swiper', 1),
                  h.Fc(3, '\n    '),
                  h.Dc(4, U, 24, 10, 'div', 2),
                  h.Fc(5, '\n  '),
                  h.Pb(),
                  h.Fc(6, '\n'),
                  h.Pb(),
                  h.Fc(7, '\n')),
                  2 & t &&
                    (h.xb(2),
                    h.kc('config', n.config),
                    h.xb(2),
                    h.kc('ngForOf', h.nc(2, N)));
              },
              directives: [w.a, g.j],
              pipes: [m.b],
              styles: ['']
            })),
            t
          );
        })(),
        D = (() => {
          class t {
            constructor(t) {
              this.translate = t;
            }
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function(n) {
              return new (n || t)(h.Lb(m.c));
            }),
            (t.ɵcmp = h.Fb({
              type: t,
              selectors: [['dc-testimonial-simple-slider-boxed']],
              decls: 11,
              vars: 0,
              consts: [
                [1, 'section', 'bg-light'],
                [1, 'container', 'bring-to-front', 'py-0'],
                [1, 'shadow', 'bg-contrast', 'p-5', 'rounded']
              ],
              template: function(t, n) {
                1 & t &&
                  (h.Qb(0, 'section', 0),
                  h.Fc(1, '\n  '),
                  h.Qb(2, 'div', 1),
                  h.Fc(3, '\n    '),
                  h.Qb(4, 'div', 2),
                  h.Fc(5, '\n      '),
                  h.Mb(6, 'dc-testimonials-slider'),
                  h.Fc(7, '\n    '),
                  h.Pb(),
                  h.Fc(8, '\n  '),
                  h.Pb(),
                  h.Fc(9, '\n'),
                  h.Pb(),
                  h.Fc(10, '\n'));
              },
              directives: [k],
              styles: ['']
            })),
            t
          );
        })();
      var L = e('VKEt'),
        H = e('iLZQ');
      const G = [
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
              (t.ɵcmp = h.Fb({
                type: t,
                selectors: [['dc-automate-social']],
                decls: 21,
                vars: 3,
                consts: [[3, 'title'], [3, 'background', 'edge']],
                template: function(t, n) {
                  1 & t &&
                    (h.Mb(0, 'dc-automate-social-heading'),
                    h.Fc(1, '\n\n'),
                    h.Mb(2, 'dc-slider-card-projects'),
                    h.Fc(3, '\n'),
                    h.Mb(4, 'dc-automate-social-get-started'),
                    h.Fc(5, '\n'),
                    h.Mb(6, 'dc-automate-social-why'),
                    h.Fc(7, '\n'),
                    h.Mb(8, 'dc-automate-social-automation-solution'),
                    h.Fc(9, '\n'),
                    h.Mb(10, 'dc-counter2'),
                    h.Fc(11, '\n'),
                    h.Fc(12, '\n'),
                    h.Mb(13, 'dc-trust-us', 0),
                    h.Fc(14, '\n'),
                    h.Mb(15, 'dc-testimonial-simple-slider-boxed'),
                    h.Fc(16, '\n'),
                    h.Mb(17, 'dc-cta1', 1),
                    h.Fc(18, '\n\n'),
                    h.Mb(19, 'dc-footer2'),
                    h.Fc(20, '\n')),
                    2 & t &&
                      (h.xb(13),
                      h.kc('title', 'Part of our happy customers'),
                      h.xb(4),
                      h.kc('background', 'contrast')('edge', 'top-left'));
                },
                directives: [E, O.a, A, V, x, R, Q.a, D, L.a, H.a],
                styles: ['']
              })),
              t
            );
          })(),
          data: { title: Object(p.c)('EveryThink Customer Service') }
        }
      ];
      let Y = (() => {
          class t {}
          return (
            (t.ɵmod = h.Jb({ type: t })),
            (t.ɵinj = h.Ib({
              factory: function(n) {
                return new (n || t)();
              },
              imports: [[u.g.forChild(G)], u.g]
            })),
            t
          );
        })(),
        j = (() => {
          class t {}
          return (
            (t.ɵmod = h.Jb({ type: t })),
            (t.ɵinj = h.Ib({
              factory: function(n) {
                return new (n || t)();
              },
              imports: [
                [i.a, a.a, s.a, c.a, o.a, r.a, l.a, b.a, d.a, m.a.forChild(), Y]
              ]
            })),
            t
          );
        })();
    },
    V6j0: function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return o;
      });
      var i = e('M0ag'),
        a = e('+tcz'),
        s = e('sYmb'),
        c = e('fXoL');
      let o = (() => {
        class t {}
        return (
          (t.ɵmod = c.Jb({ type: t })),
          (t.ɵinj = c.Ib({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[i.a, a.a, s.a.forChild()]]
          })),
          t
        );
      })();
    },
    pu65: function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return o;
      });
      var i = e('nhfI'),
        a = e('M0ag'),
        s = e('sYmb'),
        c = e('fXoL');
      let o = (() => {
        class t {}
        return (
          (t.ɵmod = c.Jb({ type: t })),
          (t.ɵinj = c.Ib({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[i.c, a.a, s.a.forChild()]]
          })),
          t
        );
      })();
    }
  }
]);
