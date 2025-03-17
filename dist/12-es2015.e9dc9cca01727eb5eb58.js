(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    '+tcz': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      }),
        t.d(e, 'b', function() {
          return o;
        });
      var a = t('fXoL'),
        i = function() {
          return (i =
            Object.assign ||
            function(n) {
              for (var e, t = 1, a = arguments.length; t < a; t++)
                for (var i in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
              return n;
            }).apply(this, arguments);
        },
        s = (function() {
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
                    : a.startVal + (e / a.duration) * (a.endVal - a.startVal)),
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
                return (t * (1 - Math.pow(2, (-10 * n) / a)) * 1024) / 1023 + e;
              }),
              (this.options = i({}, this.defaults, t)),
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
              '' === this.options.separator && (this.options.useGrouping = !1),
              (this.el = 'string' == typeof n ? document.getElementById(n) : n),
              this.el
                ? this.printValue(this.startVal)
                : (this.error = '[CountUp] target is null or undefined');
          }
          return (
            (n.prototype.determineDirectionAndSmartEasing = function() {
              var n = this.finalEndVal ? this.finalEndVal : this.endVal;
              (this.countDown = this.startVal > n),
                Math.abs(n - this.startVal) > this.options.smartEasingThreshold
                  ? ((this.finalEndVal = n),
                    (this.endVal =
                      n +
                      (this.countDown ? 1 : -1) *
                        this.options.smartEasingAmount),
                    (this.duration = this.duration / 2))
                  : ((this.endVal = n), (this.finalEndVal = null)),
                (this.useEasing = !this.finalEndVal && this.options.useEasing);
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
                : ((this.error = '[CountUp] invalid start or end value: ' + n),
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
        c = t('ofXK');
      let o = (() => {
          let n = class {
            constructor(n, e, t) {
              (this.el = n),
                (this.zone = e),
                (this.platformId = t),
                (this.options = {}),
                (this.reanimateOnClick = !0),
                (this.complete = new a.n());
            }
            onClick() {
              this.reanimateOnClick && this.animate();
            }
            ngOnChanges(n) {
              Object(c.v)(this.platformId) &&
                n.endVal &&
                void 0 !== n.endVal.currentValue &&
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
            (n.ɵfac = function(e) {
              return new (e || n)(a.Lb(a.l), a.Lb(a.z), a.Lb(a.B));
            }),
            (n.ɵdir = a.Gb({
              type: n,
              selectors: [['', 'countUp', '']],
              hostBindings: function(n, e) {
                1 & n &&
                  a.bc('click', function() {
                    return e.onClick();
                  });
              },
              inputs: {
                options: 'options',
                reanimateOnClick: 'reanimateOnClick',
                endVal: ['countUp', 'endVal']
              },
              outputs: { complete: 'complete' },
              features: [a.vb]
            })),
            n
          );
        })(),
        r = (() => {
          let n = class {};
          return (
            (n.ɵmod = a.Jb({ type: n })),
            (n.ɵinj = a.Ib({
              factory: function(e) {
                return new (e || n)();
              },
              imports: [[]]
            })),
            n
          );
        })();
    },
    '2d4A': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      });
      var a = t('nhfI'),
        i = t('6NWb'),
        s = t('M0ag'),
        c = t('sYmb'),
        o = t('fXoL');
      let r = (() => {
        class n {}
        return (
          (n.ɵmod = o.Jb({ type: n })),
          (n.ɵinj = o.Ib({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[a.c, i.b, s.a, c.a.forChild()]]
          })),
          n
        );
      })();
    },
    K3F6: function(n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, 'AppLanding2Module', function() {
          return X;
        });
      var a = t('M0ag'),
        i = t('V6j0'),
        s = t('2d4A'),
        c = t('M0Rk'),
        o = t('P6su'),
        r = t('ORAR'),
        l = t('ZpN7'),
        d = t('tyNb'),
        p = t('ey9i'),
        b = t('4WJ2'),
        u = t('fXoL'),
        m = t('8ynp'),
        h = t('wHSu'),
        F = t('sYmb'),
        f = t('ofXK'),
        g = t('6NWb');
      function v(n, e) {
        if ((1 & n && u.Mb(0, 'div', 30), 2 & n)) {
          const n = e.$implicit;
          u.yb('data-aos', n.aos)('data-aos-duration', n.duration)(
            'data-aos-delay',
            n.delay
          );
        }
      }
      let P = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
              (this.lightbulb = h.j),
              (this.shapes = [
                { aos: 'fade-down-right', duration: '1500', delay: '100' },
                { aos: 'fade-down', duration: '1000', delay: '100' },
                { aos: 'fade-up-left', duration: '500', delay: '200' },
                { aos: 'fade-up', duration: '500', delay: '200' }
              ]);
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)(u.Lb(F.c));
          }),
          (n.ɵcmp = u.Fb({
            type: n,
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
                (u.Qb(0, 'header', 0),
                u.Fc(1, '\n  '),
                u.Qb(2, 'div', 1),
                u.Fc(3, '\n    '),
                u.Fc(4, '\n    '),
                u.Dc(5, v, 1, 3, 'div', 2),
                u.Fc(6, '\n\n    '),
                u.Fc(7, '\n    '),
                u.Qb(8, 'div', 3),
                u.Fc(9, '\n      '),
                u.Mb(10, 'div', 4),
                u.Fc(11, '\n    '),
                u.Pb(),
                u.Fc(12, '\n    '),
                u.Qb(13, 'div', 5),
                u.Fc(14, '\n      '),
                u.Mb(15, 'div', 4),
                u.Fc(16, '\n    '),
                u.Pb(),
                u.Fc(17, '\n\n    '),
                u.Fc(18, '\n    '),
                u.Qb(19, 'div', 6),
                u.Fc(20, '\n      '),
                u.Mb(21, 'div', 7),
                u.Fc(22, '\n    '),
                u.Pb(),
                u.Fc(23, '\n    '),
                u.Qb(24, 'div', 8),
                u.Fc(25, '\n      '),
                u.Mb(26, 'div', 9),
                u.Fc(27, '\n    '),
                u.Pb(),
                u.Fc(28, '\n\n    '),
                u.Mb(29, 'div', 10),
                u.Fc(30, '\n    '),
                u.Mb(31, 'div', 11),
                u.Fc(32, '\n\n    '),
                u.Fc(33, '\n    '),
                u.Mb(34, 'div', 12),
                u.Fc(35, '\n  '),
                u.Pb(),
                u.Fc(36, '\n\n  '),
                u.Qb(37, 'div', 13),
                u.Fc(38, '\n    '),
                u.Qb(39, 'div', 14),
                u.Fc(40, '\n      '),
                u.Qb(41, 'div', 15),
                u.Fc(42, '\n        '),
                u.Qb(43, 'span', 16),
                u.Fc(44, '\n          '),
                u.Mb(45, 'fa-icon', 17),
                u.Fc(46, '\n          '),
                u.Qb(47, 'span', 18),
                u.Fc(48),
                u.gc(49, 'translate'),
                u.Pb(),
                u.Fc(50),
                u.gc(51, 'translate'),
                u.Pb(),
                u.Fc(52, '\n\n        '),
                u.Qb(53, 'h1', 19),
                u.Fc(54, '\n          '),
                u.Qb(55, 'span', 20),
                u.Fc(56),
                u.gc(57, 'translate'),
                u.Pb(),
                u.Fc(58, '\n        '),
                u.Pb(),
                u.Fc(59, '\n        '),
                u.Qb(60, 'p', 21),
                u.Fc(61),
                u.gc(62, 'translate'),
                u.Qb(63, 'span', 22),
                u.Fc(64),
                u.gc(65, 'translate'),
                u.Pb(),
                u.Fc(66, '\n        '),
                u.Pb(),
                u.Fc(67, '\n\n        '),
                u.Qb(68, 'p', 23),
                u.Fc(69),
                u.gc(70, 'translate'),
                u.Pb(),
                u.Fc(71, '\n\n        '),
                u.Fc(72, '\n      '),
                u.Pb(),
                u.Fc(73, '\n\n      '),
                u.Qb(74, 'div', 24),
                u.Fc(75, '\n        '),
                u.Qb(76, 'div', 25),
                u.Fc(77, '\n          '),
                u.Qb(78, 'div', 26),
                u.Fc(79, '\n            '),
                u.Qb(80, 'div', 27),
                u.Fc(81, '\n              '),
                u.Fc(82, '\n              '),
                u.Mb(83, 'img', 28),
                u.Fc(84, '\n            '),
                u.Pb(),
                u.Fc(85, '\n            '),
                u.Mb(86, 'div', 29),
                u.Fc(87, '\n          '),
                u.Pb(),
                u.Fc(88, '\n\n          '),
                u.Mb(89, 'div', 29),
                u.Fc(90, '\n        '),
                u.Pb(),
                u.Fc(91, '\n      '),
                u.Pb(),
                u.Fc(92, '\n    '),
                u.Pb(),
                u.Fc(93, '\n  '),
                u.Pb(),
                u.Fc(94, '\n'),
                u.Pb(),
                u.Fc(95, '\n')),
                2 & n &&
                  (u.xb(5),
                  u.kc('ngForOf', e.shapes),
                  u.xb(40),
                  u.kc('icon', e.lightbulb),
                  u.xb(3),
                  u.Hc(
                    '\n            ',
                    u.hc(49, 8, 'DEMOS.SALES.APP_LANDING_HEADING2.ALLISONE'),
                    ''
                  ),
                  u.xb(2),
                  u.Hc(
                    '\n          ',
                    u.hc(51, 10, 'DEMOS.SALES.APP_LANDING_HEADING2.INFINTY'),
                    '\n        '
                  ),
                  u.xb(6),
                  u.Gc(
                    u.hc(
                      57,
                      12,
                      'DEMOS.SALES.APP_LANDING_HEADING2.EVERYTHINKFORSALES'
                    )
                  ),
                  u.xb(5),
                  u.Hc(
                    '\n          ',
                    u.hc(
                      62,
                      14,
                      'DEMOS.SALES.APP_LANDING_HEADING2.BETTERMARKETING'
                    ),
                    ',\n          '
                  ),
                  u.xb(3),
                  u.Gc(
                    u.hc(
                      65,
                      16,
                      'DEMOS.SALES.APP_LANDING_HEADING2.BETTERRESULT'
                    )
                  ),
                  u.xb(5),
                  u.Hc(
                    '\n          ',
                    u.hc(70, 18, 'DEMOS.SALES.APP_LANDING_HEADING2.OURIAS'),
                    '\n        '
                  ));
            },
            directives: [f.j, g.a],
            pipes: [F.b],
            styles: ['']
          })),
          n
        );
      })();
      var y = t('aaX3');
      let A = (() => {
          class n {
            constructor(n) {
              this.translate = n;
            }
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(e) {
              return new (e || n)(u.Lb(F.c));
            }),
            (n.ɵcmp = u.Fb({
              type: n,
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
                  (u.Qb(0, 'section', 0),
                  u.Fc(1, '\n  '),
                  u.Qb(2, 'div', 1),
                  u.Fc(3, '\n    '),
                  u.Mb(4, 'div', 2),
                  u.Fc(5, '\n    '),
                  u.Mb(6, 'div', 3),
                  u.Fc(7, '\n  '),
                  u.Pb(),
                  u.Fc(8, '\n\n  '),
                  u.Qb(9, 'div', 4),
                  u.Fc(10, '\n    '),
                  u.Qb(11, 'div', 5),
                  u.Fc(12, '\n      '),
                  u.Qb(13, 'div', 6),
                  u.Fc(14, '\n        '),
                  u.Qb(15, 'div', 7),
                  u.Fc(16, '\n          '),
                  u.Qb(17, 'div', 8),
                  u.Fc(18, '\n            '),
                  u.Qb(19, 'video', 9),
                  u.Fc(20, '\n              '),
                  u.Mb(21, 'source', 10),
                  u.Fc(22, '\n            '),
                  u.Pb(),
                  u.Fc(23, '\n          '),
                  u.Pb(),
                  u.Fc(24, '\n          '),
                  u.Mb(25, 'div', 11),
                  u.Fc(26, '\n        '),
                  u.Pb(),
                  u.Fc(27, '\n      '),
                  u.Pb(),
                  u.Fc(28, '\n\n      '),
                  u.Qb(29, 'div', 12),
                  u.Fc(30, '\n        '),
                  u.Qb(31, 'div', 13),
                  u.Fc(32, '\n          '),
                  u.Qb(33, 'h2', 14),
                  u.Fc(34),
                  u.gc(35, 'translate'),
                  u.Pb(),
                  u.Fc(36, '\n          '),
                  u.Qb(37, 'p', 15),
                  u.Fc(38),
                  u.gc(39, 'translate'),
                  u.Pb(),
                  u.Fc(40, '\n        '),
                  u.Pb(),
                  u.Fc(41, '\n\n        '),
                  u.Qb(42, 'p'),
                  u.Fc(43),
                  u.gc(44, 'translate'),
                  u.Pb(),
                  u.Fc(45, '\n      '),
                  u.Pb(),
                  u.Fc(46, '\n    '),
                  u.Pb(),
                  u.Fc(47, '\n  '),
                  u.Pb(),
                  u.Fc(48, '\n'),
                  u.Pb(),
                  u.Fc(49, '\n')),
                  2 & n &&
                    (u.xb(34),
                    u.Hc(
                      '\n            ',
                      u.hc(
                        35,
                        3,
                        'DEMOS.SALES.APP_LANDING2_TRENDING_DESIGN.SIMPLE_IMPLEMENTATION'
                      ),
                      '\n          '
                    ),
                    u.xb(4),
                    u.Hc(
                      '\n            ',
                      u.hc(
                        39,
                        5,
                        'DEMOS.SALES.APP_LANDING2_TRENDING_DESIGN.SINCE_THE_NEED'
                      ),
                      '\n          '
                    ),
                    u.xb(5),
                    u.Hc(
                      '\n          ',
                      u.hc(
                        44,
                        7,
                        'DEMOS.SALES.APP_LANDING2_TRENDING_DESIGN.THE_POSSIBILITIES'
                      ),
                      '\n        '
                    ));
              },
              pipes: [F.b],
              styles: ['']
            })),
            n
          );
        })(),
        S = (() => {
          class n {
            constructor(n) {
              this.translate = n;
            }
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(e) {
              return new (e || n)(u.Lb(F.c));
            }),
            (n.ɵcmp = u.Fb({
              type: n,
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
                  (u.Qb(0, 'section', 0),
                  u.Fc(1, '\n  '),
                  u.Qb(2, 'div', 1),
                  u.Fc(3, '\n    '),
                  u.Qb(4, 'div', 2),
                  u.Fc(5, '\n      '),
                  u.Mb(6, 'div'),
                  u.Fc(7, '\n    '),
                  u.Pb(),
                  u.Fc(8, '\n    '),
                  u.Mb(9, 'div', 3),
                  u.Fc(10, '\n  '),
                  u.Pb(),
                  u.Fc(11, '\n\n  '),
                  u.Qb(12, 'div', 4),
                  u.Fc(13, '\n    '),
                  u.Qb(14, 'div', 5),
                  u.Fc(15, '\n      '),
                  u.Qb(16, 'div', 6),
                  u.Fc(17, '\n        '),
                  u.Qb(18, 'div', 7),
                  u.Fc(19, '\n          '),
                  u.Qb(20, 'div', 8),
                  u.Fc(21, '\n            '),
                  u.Qb(22, 'video', 9),
                  u.Fc(23, '\n              '),
                  u.Mb(24, 'source', 10),
                  u.Fc(25, '\n            '),
                  u.Pb(),
                  u.Fc(26, '\n          '),
                  u.Pb(),
                  u.Fc(27, '\n          '),
                  u.Mb(28, 'div', 11),
                  u.Fc(29, '\n        '),
                  u.Pb(),
                  u.Fc(30, '\n      '),
                  u.Pb(),
                  u.Fc(31, '\n\n      '),
                  u.Qb(32, 'div', 12),
                  u.Fc(33, '\n        '),
                  u.Qb(34, 'div', 13),
                  u.Fc(35, '\n          '),
                  u.Qb(36, 'h2', 14),
                  u.Fc(37),
                  u.gc(38, 'translate'),
                  u.Pb(),
                  u.Fc(39, '\n          '),
                  u.Qb(40, 'p', 15),
                  u.Fc(41),
                  u.gc(42, 'translate'),
                  u.Pb(),
                  u.Fc(43, '\n        '),
                  u.Pb(),
                  u.Fc(44, '\n\n        '),
                  u.Qb(45, 'p'),
                  u.Fc(46),
                  u.gc(47, 'translate'),
                  u.Pb(),
                  u.Fc(48, '\n      '),
                  u.Pb(),
                  u.Fc(49, '\n    '),
                  u.Pb(),
                  u.Fc(50, '\n  '),
                  u.Pb(),
                  u.Fc(51, '\n'),
                  u.Pb(),
                  u.Fc(52, '\n')),
                  2 & n &&
                    (u.xb(37),
                    u.Hc(
                      '\n            ',
                      u.hc(
                        38,
                        3,
                        'DEMOS.SALES.APP_LANDING2_FOCUS_ON_SUCCESS.FORGET_OBSOLETE'
                      ),
                      '\n          '
                    ),
                    u.xb(4),
                    u.Hc(
                      '\n            ',
                      u.hc(
                        42,
                        5,
                        'DEMOS.SALES.APP_LANDING2_FOCUS_ON_SUCCESS.EVERYTHINK_DELIVERS'
                      ),
                      '\n          '
                    ),
                    u.xb(5),
                    u.Hc(
                      '\n          ',
                      u.hc(
                        47,
                        7,
                        'DEMOS.SALES.APP_LANDING2_FOCUS_ON_SUCCESS.DOT_NOT_WASTE_TIME'
                      ),
                      '\n        '
                    ));
              },
              pipes: [F.b],
              styles: ['']
            })),
            n
          );
        })();
      var E = t('AL06');
      function Q(n, e) {
        if ((1 & n && (u.Qb(0, 'h5'), u.Fc(1), u.Pb()), 2 & n)) {
          const n = u.fc().$implicit;
          u.xb(1), u.Hc('\n              ', n.title.es, '\n            ');
        }
      }
      function D(n, e) {
        if ((1 & n && (u.Qb(0, 'h5'), u.Fc(1), u.Pb()), 2 & n)) {
          const n = u.fc().$implicit;
          u.xb(1), u.Hc('\n              ', n.title.en, '\n            ');
        }
      }
      function I(n, e) {
        if ((1 & n && (u.Qb(0, 'p'), u.Fc(1), u.Pb()), 2 & n)) {
          const n = u.fc().$implicit;
          u.xb(1), u.Hc('\n              ', n.description.es, '\n            ');
        }
      }
      function x(n, e) {
        if ((1 & n && (u.Qb(0, 'p'), u.Fc(1), u.Pb()), 2 & n)) {
          const n = u.fc().$implicit;
          u.xb(1), u.Hc('\n              ', n.description.en, '\n            ');
        }
      }
      function O(n, e) {
        if (
          (1 & n &&
            (u.Qb(0, 'div', 17),
            u.Fc(1, '\n          '),
            u.Qb(2, 'div', 18),
            u.Fc(3, '\n            '),
            u.Mb(4, 'dc-feather', 19),
            u.Fc(5, '\n          '),
            u.Pb(),
            u.Fc(6, '\n          '),
            u.Qb(7, 'div', 20),
            u.Fc(8, '\n            '),
            u.Dc(9, Q, 2, 1, 'h5', 21),
            u.Fc(10, '\n            '),
            u.Dc(11, D, 2, 1, 'h5', 21),
            u.Fc(12, '\n            '),
            u.Dc(13, I, 2, 1, 'p', 21),
            u.Fc(14, '\n            '),
            u.Dc(15, x, 2, 1, 'p', 21),
            u.Fc(16, '\n          '),
            u.Pb(),
            u.Fc(17, '\n        '),
            u.Pb()),
          2 & n)
        ) {
          const n = e.$implicit,
            t = u.fc();
          u.xb(4),
            u.kc('name', n.icon)('iconClass', 'stroke-primary'),
            u.xb(5),
            u.kc('ngIf', 'es' === t.translate.currentLang),
            u.xb(2),
            u.kc('ngIf', 'en-US' === t.translate.currentLang),
            u.xb(2),
            u.kc('ngIf', 'es' === t.translate.currentLang),
            u.xb(2),
            u.kc('ngIf', 'en-US' === t.translate.currentLang);
        }
      }
      function w(n, e) {
        if (
          (1 & n &&
            (u.Qb(0, 'div'),
            u.Fc(1, '\n            '),
            u.Qb(2, 'div', 22),
            u.Fc(3, '\n              '),
            u.Mb(4, 'img', 23),
            u.Fc(5, '\n            '),
            u.Pb(),
            u.Fc(6, '\n          '),
            u.Pb()),
          2 & n)
        ) {
          const n = e.$implicit;
          u.Ab('col-md-4 ', n.class, ''), u.xb(4), u.lc('src', n.uri, u.yc);
        }
      }
      let L = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
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
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)(u.Lb(F.c));
          }),
          (n.ɵcmp = u.Fb({
            type: n,
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
                (u.Qb(0, 'section', 0),
                u.Fc(1, '\n  '),
                u.Qb(2, 'div', 1),
                u.Fc(3, '\n    '),
                u.Qb(4, 'div', 2),
                u.Fc(5, '\n      '),
                u.Mb(6, 'div', 3),
                u.Fc(7, '\n    '),
                u.Pb(),
                u.Fc(8, '\n    '),
                u.Qb(9, 'div', 4),
                u.Fc(10, '\n      '),
                u.Mb(11, 'div', 5),
                u.Fc(12, '\n    '),
                u.Pb(),
                u.Fc(13, '\n    '),
                u.Mb(14, 'div', 6),
                u.Fc(15, '\n  '),
                u.Pb(),
                u.Fc(16, '\n\n  '),
                u.Qb(17, 'div', 7),
                u.Fc(18, '\n    '),
                u.Qb(19, 'div', 8),
                u.Fc(20, '\n      '),
                u.Qb(21, 'div', 9),
                u.Fc(22, '\n        '),
                u.Qb(23, 'div', 10),
                u.Fc(24, '\n          '),
                u.Qb(25, 'p', 11),
                u.Fc(26),
                u.gc(27, 'translate'),
                u.Pb(),
                u.Fc(28, '\n          '),
                u.Qb(29, 'h2'),
                u.Fc(30),
                u.gc(31, 'translate'),
                u.Pb(),
                u.Fc(32, '\n          '),
                u.Qb(33, 'p', 12),
                u.Fc(34),
                u.gc(35, 'translate'),
                u.Pb(),
                u.Fc(36, '\n        '),
                u.Pb(),
                u.Fc(37, '\n\n        '),
                u.Dc(38, O, 18, 6, 'div', 13),
                u.Fc(39, '\n      '),
                u.Pb(),
                u.Fc(40, '\n\n      '),
                u.Qb(41, 'div', 14),
                u.Fc(42, '\n        '),
                u.Qb(43, 'div', 15),
                u.Fc(44, '\n          '),
                u.Dc(45, w, 7, 4, 'div', 16),
                u.Fc(46, '\n        '),
                u.Pb(),
                u.Fc(47, '\n      '),
                u.Pb(),
                u.Fc(48, '\n    '),
                u.Pb(),
                u.Fc(49, '\n  '),
                u.Pb(),
                u.Fc(50, '\n'),
                u.Pb(),
                u.Fc(51, '\n')),
                2 & n &&
                  (u.xb(26),
                  u.Hc(
                    '\n            ',
                    u.hc(27, 5, 'DEMOS.SALES.APP_LANDING2_SAFETY.SAFETY_FIRST'),
                    '\n          '
                  ),
                  u.xb(4),
                  u.Hc(
                    '\n            ',
                    u.hc(
                      31,
                      7,
                      'DEMOS.SALES.APP_LANDING2_SAFETY.YOUR_SUCCESS_IS_OUR_SUCCESS'
                    ),
                    '\n          '
                  ),
                  u.xb(4),
                  u.Hc(
                    '\n            ',
                    u.hc(
                      35,
                      9,
                      'DEMOS.SALES.APP_LANDING2_SAFETY.EVERYTHINK_DOESALL'
                    ),
                    '\n          '
                  ),
                  u.xb(4),
                  u.kc('ngForOf', e.items),
                  u.xb(7),
                  u.kc('ngForOf', e.cards));
            },
            directives: [f.j, E.a, f.k],
            pipes: [F.b],
            styles: ['']
          })),
          n
        );
      })();
      function N(n, e) {
        if ((1 & n && (u.Qb(0, 'h4', 11), u.Fc(1), u.Pb()), 2 & n)) {
          const n = u.fc().$implicit;
          u.xb(1), u.Hc('\n            ', n.title.es, '\n          ');
        }
      }
      function M(n, e) {
        if ((1 & n && (u.Qb(0, 'h4', 11), u.Fc(1), u.Pb()), 2 & n)) {
          const n = u.fc().$implicit;
          u.xb(1), u.Hc('\n            ', n.title.en, '\n          ');
        }
      }
      function _(n, e) {
        if ((1 & n && (u.Qb(0, 'p', 12), u.Fc(1), u.Pb()), 2 & n)) {
          const n = u.fc().$implicit;
          u.xb(1), u.Hc('\n            ', n.description.es, '\n          ');
        }
      }
      function V(n, e) {
        if ((1 & n && (u.Qb(0, 'p', 12), u.Fc(1), u.Pb()), 2 & n)) {
          const n = u.fc().$implicit;
          u.xb(1), u.Hc('\n            ', n.description.en, '\n          ');
        }
      }
      function k(n, e) {
        if (
          (1 & n &&
            (u.Qb(0, 'div', 5),
            u.Fc(1, '\n          '),
            u.Qb(2, 'div', 6),
            u.Fc(3, '\n            '),
            u.Mb(4, 'dc-feather', 7),
            u.Fc(5, '\n          '),
            u.Pb(),
            u.Fc(6, '\n          '),
            u.Dc(7, N, 2, 1, 'h4', 8),
            u.Fc(8, '\n          '),
            u.Dc(9, M, 2, 1, 'h4', 8),
            u.Fc(10, '\n\n          '),
            u.Mb(11, 'hr', 9),
            u.Fc(12, '\n          '),
            u.Dc(13, _, 2, 1, 'p', 10),
            u.Fc(14, '\n\n          '),
            u.Dc(15, V, 2, 1, 'p', 10),
            u.Fc(16, '\n        '),
            u.Pb()),
          2 & n)
        ) {
          const n = e.$implicit,
            t = u.fc();
          u.xb(4),
            u.kc('name', n.icon)('iconClass', 'stroke-contrast'),
            u.xb(3),
            u.kc('ngIf', 'es' === t.translate.currentLang),
            u.xb(2),
            u.kc('ngIf', 'en-US' === t.translate.currentLang),
            u.xb(4),
            u.kc('ngIf', 'es' === t.translate.currentLang),
            u.xb(2),
            u.kc('ngIf', 'en-US' === t.translate.currentLang);
        }
      }
      let T = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
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
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)(u.Lb(F.c));
          }),
          (n.ɵcmp = u.Fb({
            type: n,
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
                (u.Fc(0, '\n'),
                u.Qb(1, 'section', 0),
                u.Fc(2, '\n  '),
                u.Qb(3, 'div', 1),
                u.Fc(4, '\n    '),
                u.Qb(5, 'div', 2),
                u.Fc(6, '\n      '),
                u.Qb(7, 'div', 3),
                u.Fc(8, '\n        '),
                u.Dc(9, k, 17, 6, 'div', 4),
                u.Fc(10, '\n      '),
                u.Pb(),
                u.Fc(11, '\n    '),
                u.Pb(),
                u.Fc(12, '\n  '),
                u.Pb(),
                u.Fc(13, '\n'),
                u.Pb(),
                u.Fc(14, '\n')),
                2 & n && (u.xb(9), u.kc('ngForOf', e.features));
            },
            directives: [f.j, E.a, f.k],
            styles: ['']
          })),
          n
        );
      })();
      function H(n, e) {
        if ((1 & n && (u.Qb(0, 'h5'), u.Fc(1), u.Pb()), 2 & n)) {
          const n = u.fc().$implicit;
          u.xb(1),
            u.Hc('\n                  ', n.title.es, '\n                ');
        }
      }
      function G(n, e) {
        if ((1 & n && (u.Qb(0, 'h5'), u.Fc(1), u.Pb()), 2 & n)) {
          const n = u.fc().$implicit;
          u.xb(1),
            u.Hc('\n                  ', n.title.en, '\n                ');
        }
      }
      function C(n, e) {
        if ((1 & n && (u.Qb(0, 'p'), u.Fc(1), u.Pb()), 2 & n)) {
          const n = u.fc().$implicit;
          u.xb(1),
            u.Hc(
              '\n                  ',
              n.description.es,
              '\n                '
            );
        }
      }
      function R(n, e) {
        if ((1 & n && (u.Qb(0, 'p'), u.Fc(1), u.Pb()), 2 & n)) {
          const n = u.fc().$implicit;
          u.xb(1),
            u.Hc(
              '\n                  ',
              n.description.en,
              '\n                '
            );
        }
      }
      function j(n, e) {
        if (
          (1 & n &&
            (u.Qb(0, 'li'),
            u.Fc(1, '\n            '),
            u.Qb(2, 'div', 27),
            u.Fc(3, '\n              '),
            u.Qb(4, 'div', 28),
            u.Fc(5, '\n                '),
            u.Mb(6, 'dc-feather', 29),
            u.Fc(7, '\n              '),
            u.Pb(),
            u.Fc(8, '\n              '),
            u.Qb(9, 'div', 30),
            u.Fc(10, '\n                '),
            u.Dc(11, H, 2, 1, 'h5', 31),
            u.Fc(12, '\n                '),
            u.Dc(13, G, 2, 1, 'h5', 31),
            u.Fc(14, '\n                '),
            u.Dc(15, C, 2, 1, 'p', 31),
            u.Fc(16, '\n                '),
            u.Dc(17, R, 2, 1, 'p', 31),
            u.Fc(18, '\n              '),
            u.Pb(),
            u.Fc(19, '\n            '),
            u.Pb(),
            u.Fc(20, '\n          '),
            u.Pb()),
          2 & n)
        ) {
          const n = e.$implicit,
            t = u.fc();
          u.xb(6),
            u.kc('name', n.icon)('iconClass', 'stroke-primary'),
            u.xb(5),
            u.kc('ngIf', 'es' === t.translate.currentLang),
            u.xb(2),
            u.kc('ngIf', 'en-US' === t.translate.currentLang),
            u.xb(2),
            u.kc('ngIf', 'es' === t.translate.currentLang),
            u.xb(2),
            u.kc('ngIf', 'en-US' === t.translate.currentLang);
        }
      }
      let q = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
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
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)(u.Lb(F.c));
          }),
          (n.ɵcmp = u.Fb({
            type: n,
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
                (u.Fc(0, '\n'),
                u.Qb(1, 'section', 0),
                u.Fc(2, '\n  '),
                u.Qb(3, 'div', 1),
                u.Fc(4, '\n    '),
                u.Qb(5, 'div', 2),
                u.Fc(6, '\n      '),
                u.Mb(7, 'div', 3),
                u.Fc(8, '\n    '),
                u.Pb(),
                u.Fc(9, '\n    '),
                u.Qb(10, 'div', 4),
                u.Fc(11, '\n      '),
                u.Mb(12, 'div', 5),
                u.Fc(13, '\n    '),
                u.Pb(),
                u.Fc(14, '\n\n    '),
                u.Mb(15, 'div', 6),
                u.Fc(16, '\n\n    '),
                u.Qb(17, 'div', 7),
                u.Fc(18, '\n      '),
                u.Mb(19, 'div', 8),
                u.Fc(20, '\n    '),
                u.Pb(),
                u.Fc(21, '\n  '),
                u.Pb(),
                u.Fc(22, '\n\n  '),
                u.Qb(23, 'div', 9),
                u.Fc(24, '\n    '),
                u.Qb(25, 'div', 10),
                u.Fc(26, '\n      '),
                u.Qb(27, 'div', 11),
                u.Fc(28, '\n        '),
                u.Qb(29, 'div', 12),
                u.Fc(30, '\n          '),
                u.Qb(31, 'p', 13),
                u.Fc(32),
                u.gc(33, 'translate'),
                u.Pb(),
                u.Fc(34, '\n          '),
                u.Qb(35, 'h2', 14),
                u.Fc(36),
                u.gc(37, 'translate'),
                u.Pb(),
                u.Fc(38, '\n        '),
                u.Pb(),
                u.Fc(39, '\n\n        '),
                u.Qb(40, 'ul', 15),
                u.Fc(41, '\n          '),
                u.Dc(42, j, 21, 6, 'li', 16),
                u.Fc(43, '\n        '),
                u.Pb(),
                u.Fc(44, '\n      '),
                u.Pb(),
                u.Fc(45, '\n\n      '),
                u.Qb(46, 'div', 17),
                u.Fc(47, '\n        '),
                u.Qb(48, 'div', 18),
                u.Fc(49, '\n          '),
                u.Qb(50, 'figure', 19),
                u.Fc(51, '\n            '),
                u.Mb(52, 'img', 20),
                u.Fc(53, '\n          '),
                u.Pb(),
                u.Fc(54, '\n        '),
                u.Pb(),
                u.Fc(55, '\n\n        '),
                u.Qb(56, 'figure', 21),
                u.Fc(57, '\n          '),
                u.Mb(58, 'img', 22),
                u.Fc(59, '\n        '),
                u.Pb(),
                u.Fc(60, '\n\n        '),
                u.Qb(61, 'div', 23),
                u.Fc(62, '\n          '),
                u.Qb(63, 'div', 24),
                u.Fc(64, '\n            '),
                u.Mb(65, 'img', 25),
                u.Fc(66, '\n          '),
                u.Pb(),
                u.Fc(67, '\n          '),
                u.Mb(68, 'div', 26),
                u.Fc(69, '\n        '),
                u.Pb(),
                u.Fc(70, '\n      '),
                u.Pb(),
                u.Fc(71, '\n    '),
                u.Pb(),
                u.Fc(72, '\n  '),
                u.Pb(),
                u.Fc(73, '\n'),
                u.Pb(),
                u.Fc(74, '\n')),
                2 & n &&
                  (u.xb(32),
                  u.Hc(
                    '\n            ',
                    u.hc(
                      33,
                      3,
                      'DEMOS.SALES.APP_LANDING2_POPPING_HIGHLIGHT.DISCOVER_CREATE_LOVE'
                    ),
                    '\n          '
                  ),
                  u.xb(4),
                  u.Hc(
                    '\n            ',
                    u.hc(
                      37,
                      5,
                      'DEMOS.SALES.APP_LANDING2_POPPING_HIGHLIGHT.SEE_WHY_PEOPLE_LOVE_EVERTTHINK'
                    ),
                    '\n          '
                  ),
                  u.xb(6),
                  u.kc('ngForOf', e.items));
            },
            directives: [f.j, E.a, f.k],
            pipes: [F.b],
            styles: ['']
          })),
          n
        );
      })();
      var z = t('ZuuT');
      let U = (() => {
        class n {
          constructor(n) {
            this.translate = n;
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)(u.Lb(F.c));
          }),
          (n.ɵcmp = u.Fb({
            type: n,
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
                (u.Fc(0, '\n'),
                u.Qb(1, 'section', 0),
                u.Fc(2, '\n  '),
                u.Qb(3, 'div', 1),
                u.Fc(4, '\n    '),
                u.Qb(5, 'div', 2),
                u.Fc(6, '\n      '),
                u.Qb(7, 'div', 3),
                u.Fc(8, '\n        '),
                u.Qb(9, 'p', 4),
                u.Fc(10),
                u.gc(11, 'translate'),
                u.Pb(),
                u.Fc(12, '\n        '),
                u.Qb(13, 'h2', 5),
                u.Fc(14),
                u.gc(15, 'translate'),
                u.Pb(),
                u.Fc(16, '\n        '),
                u.Qb(17, 'p', 5),
                u.Fc(18),
                u.gc(19, 'translate'),
                u.Pb(),
                u.Fc(20, '\n      '),
                u.Pb(),
                u.Fc(21, '\n\n      '),
                u.Qb(22, 'nav', 6),
                u.Fc(23, '\n        '),
                u.Qb(24, 'a', 7),
                u.Fc(25, '\n          '),
                u.Mb(26, 'img', 8),
                u.Fc(27, '\n          '),
                u.Qb(28, 'p', 9),
                u.Fc(29, '\n            '),
                u.Qb(30, 'span', 10),
                u.Fc(31),
                u.gc(32, 'translate'),
                u.Pb(),
                u.Fc(33, '\n            '),
                u.Qb(34, 'span', 11),
                u.Fc(35),
                u.gc(36, 'translate'),
                u.Pb(),
                u.Fc(37, '\n          '),
                u.Pb(),
                u.Fc(38, '\n        '),
                u.Pb(),
                u.Fc(39, '\n\n        '),
                u.Qb(40, 'a', 12),
                u.Fc(41, '\n          '),
                u.Mb(42, 'img', 13),
                u.Fc(43, '\n          '),
                u.Qb(44, 'p', 9),
                u.Fc(45, '\n            '),
                u.Qb(46, 'span', 10),
                u.Fc(47),
                u.gc(48, 'translate'),
                u.Pb(),
                u.Fc(49, '\n            '),
                u.Qb(50, 'span', 14),
                u.Fc(51),
                u.gc(52, 'translate'),
                u.Pb(),
                u.Fc(53, '\n          '),
                u.Pb(),
                u.Fc(54, '\n        '),
                u.Pb(),
                u.Fc(55, '\n      '),
                u.Pb(),
                u.Fc(56, '\n    '),
                u.Pb(),
                u.Fc(57, '\n  '),
                u.Pb(),
                u.Fc(58, '\n'),
                u.Pb(),
                u.Fc(59, '\n')),
                2 & n &&
                  (u.xb(10),
                  u.Hc(
                    '\n          ',
                    u.hc(
                      11,
                      7,
                      'DEMOS.SALES.APP_LANDING2_DOWNLOAD.START_TODAY'
                    ),
                    '\n        '
                  ),
                  u.xb(4),
                  u.Hc(
                    '\n          ',
                    u.hc(
                      15,
                      9,
                      'DEMOS.SALES.APP_LANDING2_DOWNLOAD.DOWNLOAD_THE_APP'
                    ),
                    '\n        '
                  ),
                  u.xb(4),
                  u.Hc(
                    '\n          ',
                    u.hc(
                      19,
                      11,
                      'DEMOS.SALES.APP_LANDING2_DOWNLOAD.DOWNLOAD_EVERTTHINK'
                    ),
                    '\n        '
                  ),
                  u.xb(13),
                  u.Hc(
                    '\n              ',
                    u.hc(
                      32,
                      13,
                      'DEMOS.SALES.APP_LANDING2_DOWNLOAD.GET_IT_ON_THE'
                    ),
                    ''
                  ),
                  u.xb(4),
                  u.Hc(
                    '\n              ',
                    u.hc(36, 15, 'DEMOS.SALES.APP_LANDING2_DOWNLOAD.APP_STORE'),
                    ''
                  ),
                  u.xb(12),
                  u.Hc(
                    '\n              ',
                    u.hc(
                      48,
                      17,
                      'DEMOS.SALES.APP_LANDING2_DOWNLOAD.DOWNLOAD_ON'
                    ),
                    ''
                  ),
                  u.xb(4),
                  u.Hc(
                    '\n              ',
                    u.hc(
                      52,
                      19,
                      'DEMOS.SALES.APP_LANDING2_DOWNLOAD.GOOGLE_PLAY'
                    ),
                    ''
                  ));
            },
            pipes: [F.b],
            styles: ['']
          })),
          n
        );
      })();
      var W = t('VKEt'),
        Y = t('iLZQ');
      const $ = [
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
                  'DEMOS.SALES.NETWORK_SEARCH_META.TITLE',
                  'DEMOS.SALES.NETWORK_SEARCH_META.KEYWORDS'
                );
              }
            }
            return (
              (n.ɵfac = function(e) {
                return new (e || n)(u.Lb(b.a));
              }),
              (n.ɵcmp = u.Fb({
                type: n,
                selectors: [['dc-app-landing2']],
                decls: 28,
                vars: 2,
                consts: [
                  [3, 'useOnlyDarkLogo', 'position'],
                  [1, 'position-relative', 'overflow-hidden']
                ],
                template: function(n, e) {
                  1 & n &&
                    (u.Mb(0, 'dc-navbar-default', 0),
                    u.Fc(1, '\n'),
                    u.Qb(2, 'main', 1),
                    u.Fc(3, '\n  '),
                    u.Mb(4, 'dc-app-landing2-heading'),
                    u.Fc(5, '\n\n  '),
                    u.Mb(6, 'dc-slider-icons'),
                    u.Fc(7, '\n  '),
                    u.Mb(8, 'dc-app-landing2-trending-design'),
                    u.Fc(9, '\n  '),
                    u.Mb(10, 'dc-app-landing2-focus-on-success'),
                    u.Fc(11, '\n  '),
                    u.Mb(12, 'dc-app-landing2-safety'),
                    u.Fc(13, '\n  '),
                    u.Fc(14, '\n  '),
                    u.Mb(15, 'dc-app-landing2-features'),
                    u.Fc(16, '\n  '),
                    u.Mb(17, 'dc-app-landing2-popping-highlight'),
                    u.Fc(18, '\n  '),
                    u.Mb(19, 'dc-faqs1'),
                    u.Fc(20, '\n  '),
                    u.Mb(21, 'dc-app-landing2-download'),
                    u.Fc(22, '\n  '),
                    u.Mb(23, 'dc-cta1'),
                    u.Fc(24, '\n\n  '),
                    u.Mb(25, 'dc-footer2'),
                    u.Fc(26, '\n'),
                    u.Pb(),
                    u.Fc(27, '\n')),
                    2 & n && u.kc('useOnlyDarkLogo', !0)('position', 'right');
                },
                directives: [m.a, P, y.a, A, S, L, T, q, z.a, U, W.a, Y.a],
                styles: ['']
              })),
              n
            );
          })(),
          data: { title: Object(p.c)('EveryThink Sales') }
        }
      ];
      let K = (() => {
          class n {}
          return (
            (n.ɵmod = u.Jb({ type: n })),
            (n.ɵinj = u.Ib({
              factory: function(e) {
                return new (e || n)();
              },
              imports: [[d.g.forChild($)]]
            })),
            n
          );
        })(),
        X = (() => {
          class n {}
          return (
            (n.ɵmod = u.Jb({ type: n })),
            (n.ɵinj = u.Ib({
              factory: function(e) {
                return new (e || n)();
              },
              imports: [[a.a, i.a, c.a, s.a, o.a, r.a, l.a, K, F.a.forChild()]]
            })),
            n
          );
        })();
    },
    ORAR: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return c;
      });
      var a = t('tyNb'),
        i = t('sYmb'),
        s = t('fXoL');
      let c = (() => {
        class n {}
        return (
          (n.ɵmod = s.Jb({ type: n })),
          (n.ɵinj = s.Ib({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[a.g, i.a.forChild()]]
          })),
          n
        );
      })();
    },
    P6su: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      });
      var a = t('1kSV'),
        i = t('M0ag'),
        s = t('hKFN'),
        c = t('sYmb'),
        o = t('fXoL');
      let r = (() => {
        class n {}
        return (
          (n.ɵmod = o.Jb({ type: n })),
          (n.ɵinj = o.Ib({
            factory: function(e) {
              return new (e || n)();
            },
            providers: [s.a],
            imports: [[i.a, a.c, c.a.forChild()]]
          })),
          n
        );
      })();
    },
    V6j0: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return o;
      });
      var a = t('M0ag'),
        i = t('+tcz'),
        s = t('sYmb'),
        c = t('fXoL');
      let o = (() => {
        class n {}
        return (
          (n.ɵmod = c.Jb({ type: n })),
          (n.ɵinj = c.Ib({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[a.a, i.a, s.a.forChild()]]
          })),
          n
        );
      })();
    },
    ZuuT: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return g;
      });
      var a = t('fXoL'),
        i = t('sYmb'),
        s = t('ofXK'),
        c = t('wHSu'),
        o = t('hKFN'),
        r = t('1kSV'),
        l = t('6NWb');
      function d(n, e) {
        if (
          (1 & n &&
            (a.Qb(0, 'button', 6),
            a.Fc(1, '\n        '),
            a.Mb(2, 'fa-icon', 7),
            a.Fc(3),
            a.Pb()),
          2 & n)
        ) {
          const n = a.fc(2).$implicit,
            e = a.fc();
          a.xb(2),
            a.kc('icon', e.chevronDown),
            a.xb(1),
            a.Hc('\n        ', n.question.es, '\n      ');
        }
      }
      function p(n, e) {
        if (
          (1 & n &&
            (a.Qb(0, 'button', 6),
            a.Fc(1, '\n        '),
            a.Mb(2, 'fa-icon', 7),
            a.Fc(3),
            a.Pb()),
          2 & n)
        ) {
          const n = a.fc(2).$implicit,
            e = a.fc();
          a.xb(2),
            a.kc('icon', e.chevronDown),
            a.xb(1),
            a.Hc('\n        ', n.question.en, '\n      ');
        }
      }
      function b(n, e) {
        if (
          (1 & n &&
            (a.Fc(0, '\n      '),
            a.Dc(1, d, 4, 2, 'button', 5),
            a.Fc(2, '\n      '),
            a.Dc(3, p, 4, 2, 'button', 5),
            a.Fc(4, '\n    ')),
          2 & n)
        ) {
          const n = a.fc(2);
          a.xb(1),
            a.kc('ngIf', 'es' === n.translate.currentLang),
            a.xb(2),
            a.kc('ngIf', 'en-US' === n.translate.currentLang);
        }
      }
      function u(n, e) {
        if ((1 & n && a.Mb(0, 'div', 9), 2 & n)) {
          const n = a.fc(2).$implicit;
          a.kc('innerHTML', n.answer.es, a.wc);
        }
      }
      function m(n, e) {
        if ((1 & n && a.Mb(0, 'div', 9), 2 & n)) {
          const n = a.fc(2).$implicit;
          a.kc('innerHTML', n.answer.en, a.wc);
        }
      }
      function h(n, e) {
        if (
          (1 & n &&
            (a.Fc(0, '\n      '),
            a.Dc(1, u, 1, 1, 'div', 8),
            a.Fc(2, '\n      '),
            a.Dc(3, m, 1, 1, 'div', 8),
            a.Fc(4, '\n    ')),
          2 & n)
        ) {
          const n = a.fc(2);
          a.xb(1),
            a.kc('ngIf', 'es' === n.translate.currentLang),
            a.xb(2),
            a.kc('ngIf', 'en-US' === n.translate.currentLang);
        }
      }
      function F(n, e) {
        1 & n &&
          (a.Qb(0, 'ngb-panel'),
          a.Fc(1, '\n    '),
          a.Dc(2, b, 5, 2, 'ng-template', 3),
          a.Fc(3, '\n\n    '),
          a.Dc(4, h, 5, 2, 'ng-template', 4),
          a.Fc(5, '\n  '),
          a.Pb());
      }
      let f = (() => {
          class n {
            constructor(n, e, t) {
              (this.faqService = e),
                (this.translate = t),
                (this.chevronDown = c.e),
                (this.faqs = []),
                (n.closeOthers = !0);
            }
            ngOnInit() {
              this.faqService.getFaqs().subscribe(n => (this.faqs = n));
            }
          }
          return (
            (n.ɵfac = function(e) {
              return new (e || n)(a.Lb(r.b), a.Lb(o.a), a.Lb(i.c));
            }),
            (n.ɵcmp = a.Fb({
              type: n,
              selectors: [['dc-faqs-accordion']],
              features: [a.wb([r.b])],
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
                  (a.Qb(0, 'ngb-accordion', 0, 1),
                  a.Fc(2, '\n  '),
                  a.Dc(3, F, 6, 0, 'ngb-panel', 2),
                  a.Fc(4, '\n'),
                  a.Pb(),
                  a.Fc(5, '\n')),
                  2 & n && (a.xb(3), a.kc('ngForOf', e.faqs));
              },
              directives: [r.a, s.j, r.i, r.k, r.j, s.k, r.l, l.a],
              styles: ['']
            })),
            n
          );
        })(),
        g = (() => {
          class n {
            constructor(n) {
              this.translate = n;
            }
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(e) {
              return new (e || n)(a.Lb(i.c));
            }),
            (n.ɵcmp = a.Fb({
              type: n,
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
                  (a.Qb(0, 'section', 0),
                  a.Fc(1, '\n  '),
                  a.Qb(2, 'div', 1),
                  a.Fc(3, '\n    '),
                  a.Qb(4, 'div', 2),
                  a.Fc(5, '\n      '),
                  a.Qb(6, 'div', 3),
                  a.Fc(7, '\n        '),
                  a.Qb(8, 'h2'),
                  a.Fc(9),
                  a.gc(10, 'translate'),
                  a.Qb(11, 'span', 4),
                  a.Fc(12),
                  a.gc(13, 'translate'),
                  a.Pb(),
                  a.Fc(14, '\n        '),
                  a.Pb(),
                  a.Fc(15, '\n\n        '),
                  a.Qb(16, 'p', 5),
                  a.Fc(17),
                  a.gc(18, 'translate'),
                  a.Pb(),
                  a.Fc(19, '\n\n        '),
                  a.Qb(20, 'p', 6),
                  a.Fc(21),
                  a.gc(22, 'translate'),
                  a.Pb(),
                  a.Fc(23, '\n      '),
                  a.Pb(),
                  a.Fc(24, '\n\n      '),
                  a.Qb(25, 'div', 7),
                  a.Fc(26, '\n        '),
                  a.Qb(27, 'div', 8),
                  a.Fc(28, '\n          '),
                  a.Mb(29, 'dc-faqs-accordion'),
                  a.Fc(30, '\n        '),
                  a.Pb(),
                  a.Fc(31, '\n      '),
                  a.Pb(),
                  a.Fc(32, '\n    '),
                  a.Pb(),
                  a.Fc(33, '\n  '),
                  a.Pb(),
                  a.Fc(34, '\n'),
                  a.Pb(),
                  a.Fc(35, '\n')),
                  2 & n &&
                    (a.Bb(
                      'section ',
                      e.background ? 'bg-' + e.background : '',
                      ' ',
                      e.edge ? 'edge ' + e.edge : '',
                      ''
                    ),
                    a.kc('ngClass', e.classes),
                    a.xb(9),
                    a.Hc(
                      '\n          ',
                      a.hc(10, 9, 'FAQS.FAQS1.DO_YOU_HAVE'),
                      '\n          '
                    ),
                    a.xb(3),
                    a.Gc(a.hc(13, 11, 'FAQS.FAQS1.QUESTIONS')),
                    a.xb(5),
                    a.Hc(
                      '\n          ',
                      a.hc(18, 13, 'FAQS.FAQS1.NOT_SURE_HOW'),
                      '\n        '
                    ),
                    a.xb(4),
                    a.Hc(
                      '\n          ',
                      a.hc(22, 15, 'FAQS.FAQS1.HERE_ARE_THE_ANSWERS'),
                      '\n        '
                    ));
              },
              directives: [s.i, f],
              pipes: [i.b],
              styles: ['']
            })),
            n
          );
        })();
    },
    hKFN: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return s;
      });
      var a = t('LRne'),
        i = t('fXoL');
      let s = (() => {
        class n {
          constructor() {}
          getFaqs() {
            return Object(a.a)([
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
                  en: 'What\u2019s your typical support response time?',
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
                  en: 'What do I need to know to customize my network?',
                  es: '\xbfQu\xe9 necesito saber para personalizar mi red?'
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
        return (
          (n.ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵprov = i.Hb({ token: n, factory: n.ɵfac, providedIn: 'root' })),
          n
        );
      })();
    }
  }
]);
