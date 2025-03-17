(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
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
        c = (function() {
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
                  c,
                  s,
                  o = t < 0 ? '-' : '';
                if (
                  ((n = Math.abs(t).toFixed(i.options.decimalPlaces)),
                  (a = (e = (n += '').split('.'))[0]),
                  (c = e.length > 1 ? i.options.decimal + e[1] : ''),
                  i.options.useGrouping)
                ) {
                  s = '';
                  for (var r = 0, l = a.length; r < l; ++r)
                    0 !== r && r % 3 == 0 && (s = i.options.separator + s),
                      (s = a[l - r - 1] + s);
                  a = s;
                }
                return (
                  i.options.numerals &&
                    i.options.numerals.length &&
                    ((a = a.replace(/[0-9]/g, function(t) {
                      return i.options.numerals[+t];
                    })),
                    (c = c.replace(/[0-9]/g, function(t) {
                      return i.options.numerals[+t];
                    }))),
                  o + i.options.prefix + a + c + i.options.suffix
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
        s = e('ofXK');
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
              Object(s.v)(this.platformId) &&
                t.endVal &&
                void 0 !== t.endVal.currentValue &&
                (void 0 !== this.previousEndVal &&
                  (this.options = Object.assign({}, this.options, {
                    startVal: this.previousEndVal
                  })),
                (this.countUp = new c(
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
    '8klf': function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return o;
      });
      var i = e('M0ag'),
        a = e('tyNb'),
        c = e('sYmb'),
        s = e('fXoL');
      let o = (() => {
        class t {}
        return (
          (t.ɵmod = s.Jb({ type: t })),
          (t.ɵinj = s.Ib({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[i.a, a.g, c.a.forChild()]]
          })),
          t
        );
      })();
    },
    UoYK: function(t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, 'AboutModule', function() {
          return L;
        });
      var i = e('M0ag'),
        a = e('V6j0'),
        c = e('M0Rk'),
        s = e('8klf'),
        o = e('nhfI'),
        r = e('XMwz'),
        l = e('tyNb'),
        b = e('ey9i'),
        d = e('AytR'),
        u = e('fXoL'),
        p = e('WGuQ'),
        m = e('sYmb'),
        h = e('KO+a'),
        F = e('ofXK'),
        g = e('AL06');
      function f(t, n) {
        if (
          (1 & t &&
            (u.Qb(0, 'div', 10),
            u.Fc(1, '\n            '),
            u.Qb(2, 'div', 11),
            u.Fc(3, '\n              '),
            u.Mb(4, 'dc-feather', 12),
            u.Fc(5, '\n              '),
            u.Qb(6, 'p', 13),
            u.Fc(7),
            u.Pb(),
            u.Fc(8, '\n              '),
            u.Qb(9, 'p', 14),
            u.Fc(10),
            u.Pb(),
            u.Fc(11, '\n            '),
            u.Pb(),
            u.Fc(12, '\n          '),
            u.Pb()),
          2 & t)
        ) {
          const t = n.$implicit;
          u.kc('ngClass', t.class),
            u.xb(2),
            u.kc('ngClass', t.bg),
            u.yb('data-aos', t.animation),
            u.xb(2),
            u.kc('name', t.icon)('iconClass', t.iconClass),
            u.xb(3),
            u.Gc(t.title),
            u.xb(3),
            u.Gc(t.description);
        }
      }
      let v = (() => {
          class t {
            constructor(t) {
              (this.translate = t),
                (this.cards = [
                  {
                    icon: 'calendar',
                    iconClass: 'stroke-primary',
                    title: 'Calendar',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at, cumque dolores dolorum est.',
                    class: 'mt-6 ml-lg-auto',
                    bg: '',
                    animation: 'fade-up'
                  },
                  {
                    icon: 'bar-chart',
                    iconClass: 'wh36',
                    title: 'Dashboard',
                    description:
                      'Cupiditate debitis delectus dolor dolore doloremque, doloribus eveniet illo in labore neque.',
                    class: 'mr-lg-auto',
                    bg: 'text-contrast bg-info-gradient',
                    animation: 'fade-up'
                  },
                  {
                    icon: 'mail',
                    iconClass: 'stroke-primary',
                    title: 'Inbox',
                    description:
                      'Amet aperiam cumque delectus eligendi, esse, modi nemo nisi officiis rem repellat sed ulla.',
                    class: 'ml-lg-auto',
                    bg: '',
                    animation: 'fade-up'
                  },
                  {
                    icon: 'clipboard',
                    iconClass: 'stroke-primary',
                    title: 'Invoicing',
                    description:
                      'Ad aliquam dicta, eaque eos iusto totam velit. Amet atque dolorum eaque ipsa sed. Aliquid cupiditate.',
                    class: 'mt-6n mr-lg-auto',
                    bg: '',
                    animation: 'fade-up'
                  }
                ]);
            }
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function(n) {
              return new (n || t)(u.Lb(m.c));
            }),
            (t.ɵcmp = u.Fb({
              type: t,
              selectors: [['dc-about-overview']],
              decls: 39,
              vars: 15,
              consts: [
                [1, 'section', 'overview'],
                [1, 'container'],
                [1, 'row', 'align-items-center', 'gap-y'],
                [1, 'col-lg-5', 'mr-auto', 'text-center', 'text-md-left'],
                [1, 'section-heading'],
                [3, 'bg', 'text'],
                [1, 'lead', 'text-secondary'],
                [1, 'col-lg-6'],
                [1, 'row', 'gap-y'],
                [
                  'class',
                  'col-6 col-sm-5 col-md-6',
                  3,
                  'ngClass',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [1, 'col-6', 'col-sm-5', 'col-md-6', 3, 'ngClass'],
                [
                  1,
                  'card',
                  'rounded',
                  'p-2',
                  'p-sm-4',
                  'shadow',
                  'text-center',
                  'text-md-left',
                  3,
                  'ngClass'
                ],
                [3, 'name', 'iconClass'],
                [1, 'bold', 'mb-0'],
                [1, 'text-muted', 'small']
              ],
              template: function(t, n) {
                1 & t &&
                  (u.Qb(0, 'section', 0),
                  u.Fc(1, '\n  '),
                  u.Qb(2, 'div', 1),
                  u.Fc(3, '\n    '),
                  u.Qb(4, 'div', 2),
                  u.Fc(5, '\n      '),
                  u.Qb(6, 'div', 3),
                  u.Fc(7, '\n        '),
                  u.Qb(8, 'div', 4),
                  u.Fc(9, '\n          '),
                  u.Qb(10, 'dc-badge', 5),
                  u.Fc(11),
                  u.gc(12, 'translate'),
                  u.Pb(),
                  u.Fc(13, '\n          '),
                  u.Qb(14, 'h2'),
                  u.Fc(15),
                  u.gc(16, 'translate'),
                  u.Pb(),
                  u.Fc(17, '\n\n          '),
                  u.Qb(18, 'p', 6),
                  u.Fc(19),
                  u.gc(20, 'translate'),
                  u.Pb(),
                  u.Fc(21, '\n        '),
                  u.Pb(),
                  u.Fc(22, '\n        '),
                  u.Qb(23, 'p'),
                  u.Fc(24),
                  u.gc(25, 'translate'),
                  u.Pb(),
                  u.Fc(26, '\n      '),
                  u.Pb(),
                  u.Fc(27, '\n      '),
                  u.Qb(28, 'div', 7),
                  u.Fc(29, '\n        '),
                  u.Qb(30, 'div', 8),
                  u.Fc(31, '\n          '),
                  u.Dc(32, f, 13, 7, 'div', 9),
                  u.Fc(33, '\n        '),
                  u.Pb(),
                  u.Fc(34, '\n      '),
                  u.Pb(),
                  u.Fc(35, '\n    '),
                  u.Pb(),
                  u.Fc(36, '\n  '),
                  u.Pb(),
                  u.Fc(37, '\n'),
                  u.Pb(),
                  u.Fc(38, '\n')),
                  2 & t &&
                    (u.xb(10),
                    u.kc('bg', 'success')('text', 'contrast'),
                    u.xb(1),
                    u.Hc(
                      '\n            ',
                      u.hc(12, 7, 'ABOUT.OVERVIEW.SUCCEED_WITH_DASHCORE'),
                      '\n          '
                    ),
                    u.xb(4),
                    u.Gc(u.hc(16, 9, 'ABOUT.OVERVIEW.THE_NEW_WAY_TO_SHOWCASE')),
                    u.xb(4),
                    u.Hc(
                      '\n            ',
                      u.hc(20, 11, 'ABOUT.OVERVIEW.DASHCORE_IS_A_BOOTSTRAP'),
                      '\n          '
                    ),
                    u.xb(5),
                    u.Hc(
                      '\n          ',
                      u.hc(25, 13, 'ABOUT.OVERVIEW.IT_INCLUDES_MULTIPLE'),
                      '\n        '
                    ),
                    u.xb(8),
                    u.kc('ngForOf', n.cards));
              },
              directives: [h.a, F.j, F.i, g.a],
              pipes: [m.b],
              styles: ['']
            })),
            t
          );
        })(),
        P = (() => {
          class t {
            constructor(t) {
              this.translate = t;
            }
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function(n) {
              return new (n || t)(u.Lb(m.c));
            }),
            (t.ɵcmp = u.Fb({
              type: t,
              selectors: [['dc-about-video']],
              decls: 28,
              vars: 7,
              consts: [
                [1, 'section'],
                [1, 'container', 'bring-to-front'],
                [
                  1,
                  'shadow',
                  'rounded',
                  'text-center',
                  'blanket',
                  'blanket-dark',
                  'alpha-8',
                  'text-contrast',
                  'p-5',
                  'image-background',
                  'cover',
                  2,
                  'background-image',
                  'url(https://picsum.photos/350/200/?random&gravity=south)'
                ],
                [1, 'content'],
                [1, 'section-heading'],
                [1, 'text-contrast'],
                [1, 'handwritten', 'highlight', 'font-md'],
                [
                  'href',
                  'https://vimeo.com/457483038/9bd8bc4160',
                  1,
                  'btn',
                  'btn-circle',
                  'btn-lg',
                  'btn-primary'
                ],
                ['stroke-width', '1', 1, 'ml-2', 3, 'name']
              ],
              template: function(t, n) {
                1 & t &&
                  (u.Qb(0, 'section', 0),
                  u.Fc(1, '\n  '),
                  u.Qb(2, 'div', 1),
                  u.Fc(3, '\n    '),
                  u.Qb(4, 'div', 2),
                  u.Fc(5, '\n      '),
                  u.Qb(6, 'div', 3),
                  u.Fc(7, '\n        '),
                  u.Qb(8, 'div', 4),
                  u.Fc(9, '\n          '),
                  u.Qb(10, 'h2', 5),
                  u.Fc(11),
                  u.gc(12, 'translate'),
                  u.Pb(),
                  u.Fc(13, '\n        '),
                  u.Pb(),
                  u.Fc(14, '\n\n        '),
                  u.Qb(15, 'p', 6),
                  u.Fc(16),
                  u.gc(17, 'translate'),
                  u.Pb(),
                  u.Fc(18, '\n\n        '),
                  u.Qb(19, 'a', 7),
                  u.Fc(20, '\n          '),
                  u.Mb(21, 'dc-feather', 8),
                  u.Fc(22, '\n        '),
                  u.Pb(),
                  u.Fc(23, '\n      '),
                  u.Pb(),
                  u.Fc(24, '\n    '),
                  u.Pb(),
                  u.Fc(25, '\n  '),
                  u.Pb(),
                  u.Fc(26, '\n'),
                  u.Pb(),
                  u.Fc(27, '\n')),
                  2 & t &&
                    (u.xb(11),
                    u.Hc(
                      '\n            ',
                      u.hc(12, 3, 'ABOUT.VIDEO.DISCOVER_HOW_DASHCORE_WORKS'),
                      '\n          '
                    ),
                    u.xb(5),
                    u.Hc(
                      '\n          ',
                      u.hc(17, 5, 'ABOUT.VIDEO.PLAY_THE_VIDEO'),
                      '\n        '
                    ),
                    u.xb(5),
                    u.kc('name', 'play'));
              },
              directives: [g.a],
              pipes: [m.b],
              styles: ['']
            })),
            t
          );
        })();
      const E = function(t) {
        return { 'mb-5': t };
      };
      function O(t, n) {
        if (
          (1 & t &&
            (u.Qb(0, 'li', 16),
            u.Fc(1, '\n            '),
            u.Mb(2, 'dc-feather', 17),
            u.Fc(3, '\n            '),
            u.Qb(4, 'div', 18),
            u.Fc(5, '\n              '),
            u.Qb(6, 'h5', 19),
            u.Fc(7),
            u.Pb(),
            u.Fc(8, '\n              '),
            u.Qb(9, 'p', 20),
            u.Fc(10),
            u.Pb(),
            u.Fc(11, '\n            '),
            u.Pb(),
            u.Fc(12, '\n          '),
            u.Pb()),
          2 & t)
        ) {
          const t = n.$implicit,
            e = n.index,
            i = n.count;
          u.xb(2),
            u.kc('name', t.icon)('iconClass', 'stroke-primary'),
            u.xb(5),
            u.Gc(t.title),
            u.xb(2),
            u.kc('ngClass', u.oc(5, E, e < i)),
            u.xb(1),
            u.Hc('\n                ', t.description, '\n              ');
        }
      }
      let x = (() => {
        class t {
          constructor(t) {
            (this.translate = t),
              (this.features = [
                {
                  icon: 'box',
                  title: 'Full Code',
                  description:
                    'Everythink comes with fully documented  all in a well organized and structured way.'
                },
                {
                  icon: 'settings',
                  title: 'Free Updates',
                  description:
                    "You'll get lifetime free updates as we improve or add new features."
                },
                {
                  icon: 'award',
                  title: 'Premium Support',
                  description:
                    'In case you need it, We got you covered, with our premium quality fast support service.'
                }
              ]);
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)(u.Lb(m.c));
          }),
          (t.ɵcmp = u.Fb({
            type: t,
            selectors: [['dc-about-solutions']],
            decls: 61,
            vars: 22,
            consts: [
              [1, 'section', 'bg-light', 'edge', 'top-left'],
              [1, 'container', 'bring-to-front'],
              [1, 'section-heading', 'text-center'],
              [1, 'lead'],
              [1, 'row', 'align-items-center', 'gap-y'],
              [1, 'col-md-6', 'col-lg-5', 'text-center', 'text-md-left'],
              [1, 'list-unstyled'],
              ['class', 'media d-block d-lg-flex', 4, 'ngFor', 'ngForOf'],
              [1, 'col-md-6', 'col-lg-5', 'ml-md-auto'],
              [1, 'shadow', 'card'],
              [
                1,
                'card-header',
                'blanket',
                'gradient',
                'gradient-blue-purple',
                'alpha-5',
                'image-background',
                'cover',
                2,
                'background-image',
                'url(assets/images/about/dashboard.png)'
              ],
              [1, 'content'],
              [1, 'mt-9', 'text-contrast', 'light'],
              [1, 'card-body'],
              [1, 'bold'],
              [
                'href',
                'https://everythink.ai/app/#/sessions/signup',
                1,
                'btn',
                'btn-primary',
                'btn-rounded',
                'mt-4'
              ],
              [1, 'media', 'd-block', 'd-lg-flex'],
              [1, 'mr-3', 'text-lg-right', 3, 'name', 'iconClass'],
              [
                1,
                'media-body',
                'mt-3',
                'mt-lg-0',
                'text-center',
                'text-md-left'
              ],
              [1, 'bold', 'text-darker'],
              [1, 'mt-0', 3, 'ngClass']
            ],
            template: function(t, n) {
              1 & t &&
                (u.Fc(0, '\n'),
                u.Qb(1, 'section', 0),
                u.Fc(2, '\n  '),
                u.Qb(3, 'div', 1),
                u.Fc(4, '\n    '),
                u.Qb(5, 'div', 2),
                u.Fc(6, '\n      '),
                u.Qb(7, 'h2'),
                u.Fc(8),
                u.gc(9, 'translate'),
                u.Pb(),
                u.Fc(10, '\n      '),
                u.Qb(11, 'p', 3),
                u.Fc(12),
                u.gc(13, 'translate'),
                u.Pb(),
                u.Fc(14, '\n    '),
                u.Pb(),
                u.Fc(15, '\n    '),
                u.Qb(16, 'div', 4),
                u.Fc(17, '\n      '),
                u.Qb(18, 'div', 5),
                u.Fc(19, '\n        '),
                u.Qb(20, 'ul', 6),
                u.Fc(21, '\n          '),
                u.Dc(22, O, 13, 7, 'li', 7),
                u.Fc(23, '\n        '),
                u.Pb(),
                u.Fc(24, '\n      '),
                u.Pb(),
                u.Fc(25, '\n      '),
                u.Qb(26, 'div', 8),
                u.Fc(27, '\n        '),
                u.Qb(28, 'div', 9),
                u.Fc(29, '\n          '),
                u.Qb(30, 'div', 10),
                u.Fc(31, '\n            '),
                u.Qb(32, 'div', 11),
                u.Fc(33, '\n              '),
                u.Qb(34, 'h2', 12),
                u.Fc(35),
                u.gc(36, 'translate'),
                u.Pb(),
                u.Fc(37, '\n            '),
                u.Pb(),
                u.Fc(38, '\n          '),
                u.Pb(),
                u.Fc(39, '\n          '),
                u.Qb(40, 'div', 13),
                u.Fc(41, '\n            '),
                u.Qb(42, 'p'),
                u.Fc(43),
                u.gc(44, 'translate'),
                u.Qb(45, 'span', 14),
                u.Fc(46),
                u.gc(47, 'translate'),
                u.Pb(),
                u.Fc(48),
                u.gc(49, 'translate'),
                u.Pb(),
                u.Fc(50, '\n            '),
                u.Qb(51, 'a', 15),
                u.Fc(52),
                u.gc(53, 'translate'),
                u.Pb(),
                u.Fc(54, '\n          '),
                u.Pb(),
                u.Fc(55, '\n        '),
                u.Pb(),
                u.Fc(56, '\n      '),
                u.Pb(),
                u.Fc(57, '\n    '),
                u.Pb(),
                u.Fc(58, '\n  '),
                u.Pb(),
                u.Fc(59, '\n'),
                u.Pb(),
                u.Fc(60, '\n')),
                2 & t &&
                  (u.xb(8),
                  u.Gc(u.hc(9, 8, 'ABOUT.SOLUTIONS.A_SOLUTION_FOR_EVERY_NEED')),
                  u.xb(4),
                  u.Hc(
                    '\n        ',
                    u.hc(13, 10, 'ABOUT.SOLUTIONS.LOREM_IPSUM'),
                    '\n      '
                  ),
                  u.xb(10),
                  u.kc('ngForOf', n.features),
                  u.xb(13),
                  u.Hc(
                    '\n                ',
                    u.hc(36, 12, 'ABOUT.SOLUTIONS.DASHCORE_INCLUDED'),
                    '\n              '
                  ),
                  u.xb(8),
                  u.Hc(
                    '\n              ',
                    u.hc(
                      44,
                      14,
                      'ABOUT.SOLUTIONS.OUR_TEMPLATE_IS_PACKED_WITH_A'
                    ),
                    '\n              '
                  ),
                  u.xb(3),
                  u.Gc(u.hc(47, 16, 'ABOUT.SOLUTIONS.START_ADMIN_DASHBOARD')),
                  u.xb(2),
                  u.Hc(
                    '\n              ',
                    u.hc(49, 18, 'ABOUT.SOLUTIONS.START_RIGHT_AWAY'),
                    '\n            '
                  ),
                  u.xb(4),
                  u.Gc(u.hc(53, 20, 'ABOUT.SOLUTIONS.TRY_THE_DASHBOARD')));
            },
            directives: [F.j, g.a, F.i],
            pipes: [m.b],
            styles: ['']
          })),
          t
        );
      })();
      var y = e('+tcz');
      function T(t, n) {
        if (
          (1 & t &&
            (u.Qb(0, 'div', 4),
            u.Fc(1, '\n        '),
            u.Mb(2, 'dc-feather', 5),
            u.Fc(3, '\n        '),
            u.Qb(4, 'p', 6),
            u.Fc(5),
            u.Pb(),
            u.Fc(6, '\n        '),
            u.Qb(7, 'p', 7),
            u.Fc(8),
            u.Pb(),
            u.Fc(9, '\n      '),
            u.Pb()),
          2 & t)
        ) {
          const t = n.$implicit;
          u.xb(2),
            u.kc('name', t.icon)('iconClass', 'stroke-primary'),
            u.xb(2),
            u.kc('countUp', t.value),
            u.xb(1),
            u.Hc('\n          ', t.value, '\n        '),
            u.xb(3),
            u.Gc(t.title);
        }
      }
      let A = (() => {
        class t {
          constructor() {
            this.counters = [
              { icon: 'box', value: 273, title: 'Components' },
              { icon: 'download-cloud', value: 654, title: 'Downloads' },
              { icon: 'settings', value: 7941, title: 'Followers' },
              { icon: 'award', value: 654, title: 'New users' }
            ];
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = u.Fb({
            type: t,
            selectors: [['dc-counter4']],
            decls: 11,
            vars: 1,
            consts: [
              [1, 'bg-contrast', 'edge', 'top-left'],
              [1, 'container'],
              [1, 'row'],
              ['class', 'col-xs-4 col-md-3 text-center', 4, 'ngFor', 'ngForOf'],
              [1, 'col-xs-4', 'col-md-3', 'text-center'],
              [3, 'name', 'iconClass'],
              [
                1,
                'counter',
                'bold',
                'text-darker',
                'font-md',
                'mt-0',
                3,
                'countUp'
              ],
              [1, 'text-secondary', 'm-0']
            ],
            template: function(t, n) {
              1 & t &&
                (u.Qb(0, 'section', 0),
                u.Fc(1, '\n  '),
                u.Qb(2, 'div', 1),
                u.Fc(3, '\n    '),
                u.Qb(4, 'div', 2),
                u.Fc(5, '\n      '),
                u.Dc(6, T, 10, 5, 'div', 3),
                u.Fc(7, '\n    '),
                u.Pb(),
                u.Fc(8, '\n  '),
                u.Pb(),
                u.Fc(9, '\n'),
                u.Pb(),
                u.Fc(10, '\n')),
                2 & t && (u.xb(6), u.kc('ngForOf', n.counters));
            },
            directives: [F.j, g.a, y.b],
            styles: ['']
          })),
          t
        );
      })();
      function V(t, n) {
        if (
          (1 & t &&
            (u.Qb(0, 'div', 6),
            u.Fc(1, '\n        '),
            u.Qb(2, 'div', 7),
            u.Fc(3, '\n          '),
            u.Qb(4, 'div', 8),
            u.Fc(5, '\n            '),
            u.Mb(6, 'dc-feather', 9),
            u.Fc(7, '\n            '),
            u.Qb(8, 'p', 10),
            u.Fc(9),
            u.Pb(),
            u.Fc(10, '\n          '),
            u.Pb(),
            u.Fc(11, '\n        '),
            u.Pb(),
            u.Fc(12, '\n      '),
            u.Pb()),
          2 & t)
        ) {
          const t = n.$implicit;
          u.xb(6),
            u.kc('name', t.icon)('iconClass', 'stroke-primary'),
            u.xb(3),
            u.Gc(t.title);
        }
      }
      let Q = (() => {
        class t {
          constructor(t) {
            (this.translate = t),
              (this.features = [
                { icon: 'phone', title: 'Responsive' },
                { icon: 'settings', title: 'Customizable' },
                { icon: 'award', title: 'Clean Code' },
                { icon: 'star', title: 'Creative' },
                { icon: 'send', title: 'Ready-Content' },
                { icon: 'headphones', title: 'Supported' },
                { icon: 'hard-drive', title: 'Documented' },
                { icon: 'box', title: 'Components' }
              ]);
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)(u.Lb(m.c));
          }),
          (t.ɵcmp = u.Fb({
            type: t,
            selectors: [['dc-about-features']],
            decls: 22,
            vars: 7,
            consts: [
              [1, 'section', 'features', 'bg-light-gradient'],
              [1, 'container'],
              [1, 'section-heading', 'text-center'],
              [1, 'lead', 'text-secondary'],
              [1, 'row', 'gap-y'],
              ['class', 'col-md-3', 4, 'ngFor', 'ngForOf'],
              [1, 'col-md-3'],
              [1, 'shadow-box', 'shadow-hover', 'border-0', 'card'],
              [1, 'card-body', 'text-center'],
              [3, 'name', 'iconClass'],
              [1, 'mb-0']
            ],
            template: function(t, n) {
              1 & t &&
                (u.Qb(0, 'section', 0),
                u.Fc(1, '\n  '),
                u.Qb(2, 'div', 1),
                u.Fc(3, '\n    '),
                u.Qb(4, 'div', 2),
                u.Fc(5, '\n      '),
                u.Qb(6, 'h2'),
                u.Fc(7),
                u.gc(8, 'translate'),
                u.Pb(),
                u.Fc(9, '\n      '),
                u.Qb(10, 'p', 3),
                u.Fc(11),
                u.gc(12, 'translate'),
                u.Pb(),
                u.Fc(13, '\n    '),
                u.Pb(),
                u.Fc(14, '\n\n    '),
                u.Qb(15, 'div', 4),
                u.Fc(16, '\n      '),
                u.Dc(17, V, 13, 3, 'div', 5),
                u.Fc(18, '\n    '),
                u.Pb(),
                u.Fc(19, '\n  '),
                u.Pb(),
                u.Fc(20, '\n'),
                u.Pb(),
                u.Fc(21, '\n')),
                2 & t &&
                  (u.xb(7),
                  u.Gc(u.hc(8, 3, 'ABOUT.FEATURES.OUR_FEATURES_STACK')),
                  u.xb(4),
                  u.Hc(
                    '\n        ',
                    u.hc(12, 5, 'ABOUT.FEATURES.TAKE_THE_CONTROL'),
                    '\n      '
                  ),
                  u.xb(6),
                  u.kc('ngForOf', n.features));
            },
            directives: [F.j, g.a],
            pipes: [m.b],
            styles: ['']
          })),
          t
        );
      })();
      function w(t, n) {
        if ((1 & t && u.Mb(0, 'li'), 2 & t)) {
          const t = n.$implicit;
          u.Ab(
            'shadow-box bg-light rounded-circle icon-xxl image-background contain mt-',
            t.margin,
            ''
          ),
            u.Cc(
              'background-image',
              'url(assets/images/about/' + t.image + '.png)'
            ),
            u.yb('data-aos-easing', 'ease-in-out-cubic')('data-aos', t.aos)(
              'data-aos-delay',
              100 * (t.image - 1)
            );
        }
      }
      let k = (() => {
        class t {
          constructor() {
            this.images = [
              { image: 1, margin: 6, aos: 'fade-right' },
              { image: 2, margin: 4, aos: 'fade-down-right' },
              { image: 3, margin: 5, aos: 'fade-up-right' },
              { image: 4, margin: 6, aos: 'fade-up' },
              { image: 5, margin: 4, aos: 'fade-down-left' },
              { image: 1, margin: 5, aos: 'fade-up-left' },
              { image: 2, margin: 6, aos: 'fade-left' }
            ];
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = u.Fb({
            type: t,
            selectors: [['dc-about-customers']],
            decls: 36,
            vars: 15,
            consts: [
              [1, 'section', 'bg-contrast', 'edge', 'bottom-right'],
              [1, 'container'],
              [1, 'section-heading', 'text-center'],
              [1, 'text-secondary', 'lead'],
              [
                1,
                'list-unstyled',
                'd-flex',
                'flex-wrap',
                'justify-content-around'
              ],
              [3, 'class', 'background-image', 4, 'ngFor', 'ngForOf'],
              [1, 'text-center', 'mt-6'],
              [3, 'name', 'iconClass'],
              [1, 'text-primary'],
              [
                'href',
                'https://everythink.ai/app/#/sessions/signup',
                1,
                'btn',
                'btn-rounded',
                'btn-primary'
              ]
            ],
            template: function(t, n) {
              1 & t &&
                (u.Fc(0, '\n'),
                u.Qb(1, 'section', 0),
                u.Fc(2, '\n  '),
                u.Qb(3, 'div', 1),
                u.Fc(4, '\n    '),
                u.Qb(5, 'div', 2),
                u.Fc(6, '\n      '),
                u.Qb(7, 'h2'),
                u.Fc(8),
                u.gc(9, 'translate'),
                u.Pb(),
                u.Fc(10, '\n      '),
                u.Qb(11, 'p', 3),
                u.Fc(12),
                u.gc(13, 'translate'),
                u.Pb(),
                u.Fc(14, '\n    '),
                u.Pb(),
                u.Fc(15, '\n\n    '),
                u.Qb(16, 'ul', 4),
                u.Fc(17, '\n      '),
                u.Dc(18, w, 1, 8, 'li', 5),
                u.Fc(19, '\n    '),
                u.Pb(),
                u.Fc(20, '\n\n    '),
                u.Qb(21, 'div', 6),
                u.Fc(22, '\n      '),
                u.Mb(23, 'dc-feather', 7),
                u.Fc(24, '\n      '),
                u.Qb(25, 'p', 8),
                u.Fc(26),
                u.gc(27, 'translate'),
                u.Pb(),
                u.Fc(28, '\n      '),
                u.Qb(29, 'a', 9),
                u.Fc(30),
                u.gc(31, 'translate'),
                u.Pb(),
                u.Fc(32, '\n    '),
                u.Pb(),
                u.Fc(33, '\n  '),
                u.Pb(),
                u.Fc(34, '\n'),
                u.Pb(),
                u.Fc(35, '\n')),
                2 & t &&
                  (u.xb(8),
                  u.Gc(u.hc(9, 7, 'ABOUT.CUSTOMERS.THIRD_PARTY')),
                  u.xb(4),
                  u.Hc(
                    '\n        ',
                    u.hc(13, 9, 'ABOUT.CUSTOMERS.WE_USE_THE_LATEST_TRENDS'),
                    '\n      '
                  ),
                  u.xb(6),
                  u.kc('ngForOf', n.images),
                  u.xb(5),
                  u.kc('name', 'code')('iconClass', 'stroke-primary'),
                  u.xb(3),
                  u.Hc(
                    '\n        ',
                    u.hc(27, 11, 'ABOUT.CUSTOMERS.ARE_YOU_A_DEVELOPER'),
                    '\n      '
                  ),
                  u.xb(4),
                  u.Hc(
                    '\n        ',
                    u.hc(31, 13, 'ABOUT.CUSTOMERS.REVIEW_THE_SPECS'),
                    ''
                  ));
            },
            directives: [F.j, g.a],
            pipes: [m.b],
            styles: ['']
          })),
          t
        );
      })();
      function S(t, n) {
        if (
          (1 & t &&
            (u.Qb(0, 'div', 6),
            u.Fc(1, '\n        '),
            u.Qb(2, 'div', 7),
            u.Fc(3, '\n          '),
            u.Qb(4, 'div', 8),
            u.Fc(5, '\n            '),
            u.Qb(6, 'div', 9),
            u.Fc(7, '\n              '),
            u.Mb(8, 'div', 10),
            u.Fc(9, '\n              '),
            u.Qb(10, 'div', 11),
            u.Fc(11, '\n                '),
            u.Qb(12, 'div', 12),
            u.Fc(13, '\n                  '),
            u.Qb(14, 'h6', 13),
            u.Fc(15),
            u.Pb(),
            u.Fc(16, '\n                  '),
            u.Qb(17, 'p', 14),
            u.Fc(18),
            u.Pb(),
            u.Fc(19, '\n\n                  '),
            u.Qb(20, 'blockquote', 15),
            u.Fc(21, '\n                    '),
            u.Mb(22, 'i', 16),
            u.Fc(23, '\n                    '),
            u.Qb(24, 'p', 17),
            u.Fc(25),
            u.Pb(),
            u.Fc(26, '\n                  '),
            u.Pb(),
            u.Fc(27, '\n\n                  '),
            u.Mb(28, 'hr', 18),
            u.Fc(29, '\n                  '),
            u.Qb(30, 'nav', 19),
            u.Fc(31, '\n                    '),
            u.Qb(32, 'a', 20),
            u.Fc(33, '\n                      '),
            u.Mb(34, 'i', 21),
            u.Fc(35, '\n                    '),
            u.Pb(),
            u.Fc(36, '\n                    '),
            u.Qb(37, 'a', 20),
            u.Fc(38, '\n                      '),
            u.Mb(39, 'i', 22),
            u.Fc(40, '\n                    '),
            u.Pb(),
            u.Fc(41, '\n                    '),
            u.Qb(42, 'a', 20),
            u.Fc(43, '\n                      '),
            u.Mb(44, 'i', 23),
            u.Fc(45, '\n                    '),
            u.Pb(),
            u.Fc(46, '\n                  '),
            u.Pb(),
            u.Fc(47, '\n                '),
            u.Pb(),
            u.Fc(48, '\n              '),
            u.Pb(),
            u.Fc(49, '\n            '),
            u.Pb(),
            u.Fc(50, '\n          '),
            u.Pb(),
            u.Fc(51, '\n        '),
            u.Pb(),
            u.Fc(52, '\n      '),
            u.Pb()),
          2 & t)
        ) {
          const t = n.$implicit,
            e = n.index;
          u.xb(8),
            u.Cc(
              'background-image',
              'url(assets/images/about/team/' + (e + 1) + '.jpg)'
            ),
            u.xb(7),
            u.Gc(t.name),
            u.xb(3),
            u.Hc('\n                    ', t.position, '\n                  '),
            u.xb(7),
            u.Gc(t.quote);
        }
      }
      let C = (() => {
        class t {
          constructor(t) {
            (this.translate = t),
              (this.team = [
                {
                  name: 'Rafael Freeman',
                  position: 'Founder & CEO',
                  quote: 'Long time ago, this guy started it all.'
                },
                {
                  name: 'Aline De Souza',
                  position: 'Marketing Director',
                  quote: 'The girl that influences our products.'
                },
                {
                  name: 'Jayden Gardner',
                  position: 'Account Manager',
                  quote: 'Keeps all the numbers in place.'
                },
                {
                  name: 'Jacobi Edwards',
                  position: 'VP of Sales',
                  quote: 'The man that leads the Global Sales team.'
                },
                {
                  name: 'Allison Fernandez',
                  position: 'Client Support',
                  quote: 'Need any assistance with the product?'
                },
                {
                  name: 'Richard Smith',
                  position: 'Lead Developer',
                  quote: 'Geek, manager, and manager of geeks.'
                }
              ]),
              (this.config = {
                slidesPerView: 2,
                spaceBetween: 30,
                breakpoints: {
                  576: { slidesPerView: 1, spaceBetween: 10, slidesPerGroup: 1 }
                },
                navigation: !0,
                pagination: !1
              });
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)(u.Lb(m.c));
          }),
          (t.ɵcmp = u.Fb({
            type: t,
            selectors: [['dc-about-team']],
            decls: 23,
            vars: 8,
            consts: [
              [1, 'section', 'bg-light'],
              [1, 'container', 'bring-to-front', 'pt-0', 'pb-5'],
              [1, 'section-heading', 'text-center'],
              [1, 'lead', 'text-secondary'],
              [1, 'swiper-container', 'pb-5', 3, 'config'],
              ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
              [1, 'swiper-slide'],
              [1, 'card', 'shadow'],
              [1, 'container-fluid', 'py-0'],
              [1, 'row'],
              [
                1,
                'col-md-5',
                'py-9',
                'py-sm-7',
                'blanket',
                'blanket-dark',
                'alpha-2',
                'image-background',
                'cover',
                'center-top'
              ],
              [1, 'col-md-7'],
              [1, 'p-4'],
              [1, 'bold', 'font-l'],
              [1, 'small', 'mt-0', 'text-primary', 'text-uppercase', 'mb-5'],
              [1, 'team-quote', 'pt-1'],
              [1, 'quote', 'fas', 'fa-quote-left'],
              [1, 'italic', 'pl-4'],
              [1, 'w-25', 'mt-5'],
              [1, 'nav'],
              [
                'href',
                'https://everythink.ai/app/#/sessions/signup',
                1,
                'nav-item',
                'nav-link',
                'pb-0'
              ],
              [1, 'fab', 'fa-facebook', 'text-secondary'],
              [1, 'fab', 'fa-twitter', 'text-secondary'],
              [1, 'fab', 'fa-dribbble', 'text-secondary']
            ],
            template: function(t, n) {
              1 & t &&
                (u.Fc(0, '\n'),
                u.Qb(1, 'section', 0),
                u.Fc(2, '\n  '),
                u.Qb(3, 'div', 1),
                u.Fc(4, '\n    '),
                u.Qb(5, 'div', 2),
                u.Fc(6, '\n      '),
                u.Qb(7, 'h2'),
                u.Fc(8),
                u.gc(9, 'translate'),
                u.Pb(),
                u.Fc(10, '\n      '),
                u.Qb(11, 'p', 3),
                u.Fc(12),
                u.gc(13, 'translate'),
                u.Pb(),
                u.Fc(14, '\n    '),
                u.Pb(),
                u.Fc(15, '\n\n    '),
                u.Qb(16, 'swiper', 4),
                u.Fc(17, '\n      '),
                u.Dc(18, S, 53, 5, 'div', 5),
                u.Fc(19, '\n    '),
                u.Pb(),
                u.Fc(20, '\n  '),
                u.Pb(),
                u.Fc(21, '\n'),
                u.Pb(),
                u.Fc(22, '\n')),
                2 & t &&
                  (u.xb(8),
                  u.Gc(u.hc(9, 4, 'ABOUT.TEAM.GET_TO_KNOW_OUR_TEAM')),
                  u.xb(4),
                  u.Hc(
                    '\n        ',
                    u.hc(13, 6, 'ABOUT.TEAM.THESE_AMAZING_PEOPLE'),
                    '\n      '
                  ),
                  u.xb(4),
                  u.kc('config', n.config),
                  u.xb(2),
                  u.kc('ngForOf', n.team));
            },
            directives: [o.a, F.j],
            pipes: [m.b],
            styles: ['']
          })),
          t
        );
      })();
      var U = e('YJ7q'),
        M = e('MTqK'),
        _ = e('cqDB');
      let I = (() => {
        class t {
          constructor(t) {
            this.translate = t;
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)(u.Lb(m.c));
          }),
          (t.ɵcmp = u.Fb({
            type: t,
            selectors: [['dc-about-register']],
            decls: 25,
            vars: 6,
            consts: [
              [1, 'section', 'bg-contrast', 'edge', 'top-left', 'b-b'],
              [1, 'container'],
              [1, 'row'],
              [1, 'col-md-6', 'b-md-r'],
              [1, 'bold'],
              [1, 'col-md-5', 'ml-md-auto']
            ],
            template: function(t, n) {
              1 & t &&
                (u.Qb(0, 'section', 0),
                u.Fc(1, '\n  '),
                u.Qb(2, 'div', 1),
                u.Fc(3, '\n    '),
                u.Qb(4, 'div', 2),
                u.Fc(5, '\n      '),
                u.Qb(6, 'div', 3),
                u.Fc(7, '\n        '),
                u.Qb(8, 'h2'),
                u.Fc(9),
                u.gc(10, 'translate'),
                u.Qb(11, 'span', 4),
                u.Fc(12),
                u.gc(13, 'translate'),
                u.Pb(),
                u.Fc(14, '\n        '),
                u.Pb(),
                u.Fc(15, '\n      '),
                u.Pb(),
                u.Fc(16, '\n\n      '),
                u.Qb(17, 'div', 5),
                u.Fc(18, '\n        '),
                u.Mb(19, 'dc-form-register-simple-inline'),
                u.Fc(20, '\n      '),
                u.Pb(),
                u.Fc(21, '\n    '),
                u.Pb(),
                u.Fc(22, '\n  '),
                u.Pb(),
                u.Fc(23, '\n'),
                u.Pb(),
                u.Fc(24, '\n')),
                2 & t &&
                  (u.xb(9),
                  u.Hc(
                    '\n          ',
                    u.hc(10, 2, 'ABOUT.REGISTER.DASHCORE_OFFICIAL'),
                    '\n          '
                  ),
                  u.xb(3),
                  u.Hc(
                    '\n            ',
                    u.hc(13, 4, 'ABOUT.REGISTER.NEWSLETTER'),
                    '\n          '
                  ));
            },
            directives: [_.a],
            pipes: [m.b],
            styles: ['']
          })),
          t
        );
      })();
      var R = e('iLZQ');
      const D = [
        {
          path: '',
          component: (() => {
            class t {
              constructor(t) {
                (this.i18nService = t),
                  (this.version = d.a.version),
                  this.updateSeoTags();
              }
              ngOnInit() {
                this.updateSeoTags();
              }
              updateSeoTags() {
                this.i18nService.updateSeoTags(
                  'ABOUT.NETWORK_SEARCH_META.TITLE',
                  'ABOUT.NETWORK_SEARCH_META.KEYWORDS'
                );
              }
            }
            return (
              (t.ɵfac = function(n) {
                return new (n || t)(u.Lb(b.a));
              }),
              (t.ɵcmp = u.Fb({
                type: t,
                selectors: [['app-about']],
                decls: 25,
                vars: 3,
                consts: [[3, 'title', 'subtitle'], [3, 'title']],
                template: function(t, n) {
                  1 & t &&
                    (u.Qb(0, 'dc-page-header-wave', 0),
                    u.Fc(1, '\n'),
                    u.Pb(),
                    u.Fc(2, '\n'),
                    u.Mb(3, 'dc-about-overview'),
                    u.Fc(4, '\n'),
                    u.Mb(5, 'dc-about-video'),
                    u.Fc(6, '\n'),
                    u.Mb(7, 'dc-about-solutions'),
                    u.Fc(8, '\n'),
                    u.Mb(9, 'dc-counter4'),
                    u.Fc(10, '\n'),
                    u.Mb(11, 'dc-about-features'),
                    u.Fc(12, '\n'),
                    u.Mb(13, 'dc-about-customers'),
                    u.Fc(14, '\n'),
                    u.Mb(15, 'dc-about-team'),
                    u.Fc(16, '\n'),
                    u.Mb(17, 'dc-trust-us', 1),
                    u.Fc(18, '\n'),
                    u.Mb(19, 'dc-developer-designer'),
                    u.Fc(20, '\n'),
                    u.Mb(21, 'dc-about-register'),
                    u.Fc(22, '\n'),
                    u.Mb(23, 'dc-footer2'),
                    u.Fc(24, '\n')),
                    2 & t &&
                      (u.kc('title', 'About Everythink')(
                        'subtitle',
                        'Everythink is an all included Community, with smart assistants you could connect in realtime all your members. what are you waiting for?'
                      ),
                      u.xb(17),
                      u.kc('title', 'They trust us'));
                },
                directives: [p.a, v, P, x, A, Q, k, C, U.a, M.a, I, R.a],
                styles: ['']
              })),
              t
            );
          })(),
          data: { title: Object(b.c)('About') }
        }
      ];
      let H = (() => {
          class t {}
          return (
            (t.ɵmod = u.Jb({ type: t })),
            (t.ɵinj = u.Ib({
              factory: function(n) {
                return new (n || t)();
              },
              imports: [[l.g.forChild(D)], l.g]
            })),
            t
          );
        })(),
        L = (() => {
          class t {}
          return (
            (t.ɵmod = u.Jb({ type: t })),
            (t.ɵinj = u.Ib({
              factory: function(n) {
                return new (n || t)();
              },
              imports: [[i.a, a.a, c.a, s.a, r.a, o.c, H, m.a.forChild()]]
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
        c = e('sYmb'),
        s = e('fXoL');
      let o = (() => {
        class t {}
        return (
          (t.ɵmod = s.Jb({ type: t })),
          (t.ɵinj = s.Ib({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[i.a, a.a, c.a.forChild()]]
          })),
          t
        );
      })();
    }
  }
]);
