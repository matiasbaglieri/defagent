!(function() {
  function t(t, n) {
    if (!(t instanceof n))
      throw new TypeError('Cannot call a class as a function');
  }
  function n(t, n) {
    for (var e = 0; e < n.length; e++) {
      var i = n[e];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function e(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [18],
    {
      '+tcz': function(n, i, a) {
        'use strict';
        a.d(i, 'a', function() {
          return d;
        }),
          a.d(i, 'b', function() {
            return b;
          });
        var c,
          s,
          o = a('fXoL'),
          r = function() {
            return (r =
              Object.assign ||
              function(t) {
                for (var n, e = 1, i = arguments.length; e < i; e++)
                  for (var a in (n = arguments[e]))
                    Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
                return t;
              }).apply(this, arguments);
          },
          l = (function() {
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
                      : i.startVal +
                        (n / i.duration) * (i.endVal - i.startVal)),
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
                  return (
                    (e * (1 - Math.pow(2, (-10 * t) / i)) * 1024) / 1023 + n
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
                (this.endVal = this.validateValue(n)),
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
                  'string' == typeof t ? document.getElementById(t) : t),
                this.el
                  ? this.printValue(this.startVal)
                  : (this.error = '[CountUp] target is null or undefined');
            }
            return (
              (t.prototype.determineDirectionAndSmartEasing = function() {
                var t = this.finalEndVal ? this.finalEndVal : this.endVal;
                (this.countDown = this.startVal > t),
                  Math.abs(t - this.startVal) >
                  this.options.smartEasingThreshold
                    ? ((this.finalEndVal = t),
                      (this.endVal =
                        t +
                        (this.countDown ? 1 : -1) *
                          this.options.smartEasingAmount),
                      (this.duration = this.duration / 2))
                    : ((this.endVal = t), (this.finalEndVal = null)),
                  (this.useEasing =
                    !this.finalEndVal && this.options.useEasing);
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
                  : ((this.error =
                      '[CountUp] invalid start or end value: ' + t),
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
          u = a('ofXK'),
          b =
            (((s = (function() {
              function n(e, i, a) {
                t(this, n),
                  (this.el = e),
                  (this.zone = i),
                  (this.platformId = a),
                  (this.options = {}),
                  (this.reanimateOnClick = !0),
                  (this.complete = new o.n());
              }
              return (
                e(n, [
                  {
                    key: 'onClick',
                    value: function() {
                      this.reanimateOnClick && this.animate();
                    }
                  },
                  {
                    key: 'ngOnChanges',
                    value: function(t) {
                      Object(u.v)(this.platformId) &&
                        t.endVal &&
                        void 0 !== t.endVal.currentValue &&
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
                      var t = this;
                      this.zone.runOutsideAngular(function() {
                        t.countUp.reset(),
                          t.countUp.start(function() {
                            t.zone.run(function() {
                              t.complete.emit();
                            });
                          });
                      });
                    }
                  }
                ]),
                n
              );
            })()).ɵfac = function(t) {
              return new (t || s)(o.Lb(o.l), o.Lb(o.z), o.Lb(o.B));
            }),
            (s.ɵdir = o.Gb({
              type: s,
              selectors: [['', 'countUp', '']],
              hostBindings: function(t, n) {
                1 & t &&
                  o.bc('click', function() {
                    return n.onClick();
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
            s),
          d =
            (((c = function n() {
              t(this, n);
            }).ɵmod = o.Jb({ type: c })),
            (c.ɵinj = o.Ib({
              factory: function(t) {
                return new (t || c)();
              },
              imports: [[]]
            })),
            c);
      },
      '8klf': function(n, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return r;
        });
        var a = i('M0ag'),
          c = i('tyNb'),
          s = i('sYmb'),
          o = i('fXoL'),
          r = (function() {
            var n = function n() {
              t(this, n);
            };
            return (
              (n.ɵmod = o.Jb({ type: n })),
              (n.ɵinj = o.Ib({
                factory: function(t) {
                  return new (t || n)();
                },
                imports: [[a.a, c.g, s.a.forChild()]]
              })),
              n
            );
          })();
      },
      UoYK: function(n, i, a) {
        'use strict';
        a.r(i),
          a.d(i, 'AboutModule', function() {
            return Z;
          });
        var c = a('M0ag'),
          s = a('V6j0'),
          o = a('M0Rk'),
          r = a('8klf'),
          l = a('nhfI'),
          u = a('XMwz'),
          b = a('tyNb'),
          d = a('ey9i'),
          p = a('AytR'),
          m = a('fXoL'),
          h = a('WGuQ'),
          f = a('sYmb'),
          F = a('KO+a'),
          g = a('ofXK'),
          v = a('AL06');
        function y(t, n) {
          if (
            (1 & t &&
              (m.Qb(0, 'div', 10),
              m.Fc(1, '\n            '),
              m.Qb(2, 'div', 11),
              m.Fc(3, '\n              '),
              m.Mb(4, 'dc-feather', 12),
              m.Fc(5, '\n              '),
              m.Qb(6, 'p', 13),
              m.Fc(7),
              m.Pb(),
              m.Fc(8, '\n              '),
              m.Qb(9, 'p', 14),
              m.Fc(10),
              m.Pb(),
              m.Fc(11, '\n            '),
              m.Pb(),
              m.Fc(12, '\n          '),
              m.Pb()),
            2 & t)
          ) {
            var e = n.$implicit;
            m.kc('ngClass', e.class),
              m.xb(2),
              m.kc('ngClass', e.bg),
              m.yb('data-aos', e.animation),
              m.xb(2),
              m.kc('name', e.icon)('iconClass', e.iconClass),
              m.xb(3),
              m.Gc(e.title),
              m.xb(3),
              m.Gc(e.description);
          }
        }
        var P,
          E,
          O =
            (((E = (function() {
              function n(e) {
                t(this, n),
                  (this.translate = e),
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
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(t) {
              return new (t || E)(m.Lb(f.c));
            }),
            (E.ɵcmp = m.Fb({
              type: E,
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
                  (m.Qb(0, 'section', 0),
                  m.Fc(1, '\n  '),
                  m.Qb(2, 'div', 1),
                  m.Fc(3, '\n    '),
                  m.Qb(4, 'div', 2),
                  m.Fc(5, '\n      '),
                  m.Qb(6, 'div', 3),
                  m.Fc(7, '\n        '),
                  m.Qb(8, 'div', 4),
                  m.Fc(9, '\n          '),
                  m.Qb(10, 'dc-badge', 5),
                  m.Fc(11),
                  m.gc(12, 'translate'),
                  m.Pb(),
                  m.Fc(13, '\n          '),
                  m.Qb(14, 'h2'),
                  m.Fc(15),
                  m.gc(16, 'translate'),
                  m.Pb(),
                  m.Fc(17, '\n\n          '),
                  m.Qb(18, 'p', 6),
                  m.Fc(19),
                  m.gc(20, 'translate'),
                  m.Pb(),
                  m.Fc(21, '\n        '),
                  m.Pb(),
                  m.Fc(22, '\n        '),
                  m.Qb(23, 'p'),
                  m.Fc(24),
                  m.gc(25, 'translate'),
                  m.Pb(),
                  m.Fc(26, '\n      '),
                  m.Pb(),
                  m.Fc(27, '\n      '),
                  m.Qb(28, 'div', 7),
                  m.Fc(29, '\n        '),
                  m.Qb(30, 'div', 8),
                  m.Fc(31, '\n          '),
                  m.Dc(32, y, 13, 7, 'div', 9),
                  m.Fc(33, '\n        '),
                  m.Pb(),
                  m.Fc(34, '\n      '),
                  m.Pb(),
                  m.Fc(35, '\n    '),
                  m.Pb(),
                  m.Fc(36, '\n  '),
                  m.Pb(),
                  m.Fc(37, '\n'),
                  m.Pb(),
                  m.Fc(38, '\n')),
                  2 & t &&
                    (m.xb(10),
                    m.kc('bg', 'success')('text', 'contrast'),
                    m.xb(1),
                    m.Hc(
                      '\n            ',
                      m.hc(12, 7, 'ABOUT.OVERVIEW.SUCCEED_WITH_DASHCORE'),
                      '\n          '
                    ),
                    m.xb(4),
                    m.Gc(m.hc(16, 9, 'ABOUT.OVERVIEW.THE_NEW_WAY_TO_SHOWCASE')),
                    m.xb(4),
                    m.Hc(
                      '\n            ',
                      m.hc(20, 11, 'ABOUT.OVERVIEW.DASHCORE_IS_A_BOOTSTRAP'),
                      '\n          '
                    ),
                    m.xb(5),
                    m.Hc(
                      '\n          ',
                      m.hc(25, 13, 'ABOUT.OVERVIEW.IT_INCLUDES_MULTIPLE'),
                      '\n        '
                    ),
                    m.xb(8),
                    m.kc('ngForOf', n.cards));
              },
              directives: [F.a, g.j, g.i, v.a],
              pipes: [f.b],
              styles: ['']
            })),
            E),
          x =
            (((P = (function() {
              function n(e) {
                t(this, n), (this.translate = e);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(t) {
              return new (t || P)(m.Lb(f.c));
            }),
            (P.ɵcmp = m.Fb({
              type: P,
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
                  (m.Qb(0, 'section', 0),
                  m.Fc(1, '\n  '),
                  m.Qb(2, 'div', 1),
                  m.Fc(3, '\n    '),
                  m.Qb(4, 'div', 2),
                  m.Fc(5, '\n      '),
                  m.Qb(6, 'div', 3),
                  m.Fc(7, '\n        '),
                  m.Qb(8, 'div', 4),
                  m.Fc(9, '\n          '),
                  m.Qb(10, 'h2', 5),
                  m.Fc(11),
                  m.gc(12, 'translate'),
                  m.Pb(),
                  m.Fc(13, '\n        '),
                  m.Pb(),
                  m.Fc(14, '\n\n        '),
                  m.Qb(15, 'p', 6),
                  m.Fc(16),
                  m.gc(17, 'translate'),
                  m.Pb(),
                  m.Fc(18, '\n\n        '),
                  m.Qb(19, 'a', 7),
                  m.Fc(20, '\n          '),
                  m.Mb(21, 'dc-feather', 8),
                  m.Fc(22, '\n        '),
                  m.Pb(),
                  m.Fc(23, '\n      '),
                  m.Pb(),
                  m.Fc(24, '\n    '),
                  m.Pb(),
                  m.Fc(25, '\n  '),
                  m.Pb(),
                  m.Fc(26, '\n'),
                  m.Pb(),
                  m.Fc(27, '\n')),
                  2 & t &&
                    (m.xb(11),
                    m.Hc(
                      '\n            ',
                      m.hc(12, 3, 'ABOUT.VIDEO.DISCOVER_HOW_DASHCORE_WORKS'),
                      '\n          '
                    ),
                    m.xb(5),
                    m.Hc(
                      '\n          ',
                      m.hc(17, 5, 'ABOUT.VIDEO.PLAY_THE_VIDEO'),
                      '\n        '
                    ),
                    m.xb(5),
                    m.kc('name', 'play'));
              },
              directives: [v.a],
              pipes: [f.b],
              styles: ['']
            })),
            P),
          T = function(t) {
            return { 'mb-5': t };
          };
        function A(t, n) {
          if (
            (1 & t &&
              (m.Qb(0, 'li', 16),
              m.Fc(1, '\n            '),
              m.Mb(2, 'dc-feather', 17),
              m.Fc(3, '\n            '),
              m.Qb(4, 'div', 18),
              m.Fc(5, '\n              '),
              m.Qb(6, 'h5', 19),
              m.Fc(7),
              m.Pb(),
              m.Fc(8, '\n              '),
              m.Qb(9, 'p', 20),
              m.Fc(10),
              m.Pb(),
              m.Fc(11, '\n            '),
              m.Pb(),
              m.Fc(12, '\n          '),
              m.Pb()),
            2 & t)
          ) {
            var e = n.$implicit,
              i = n.index,
              a = n.count;
            m.xb(2),
              m.kc('name', e.icon)('iconClass', 'stroke-primary'),
              m.xb(5),
              m.Gc(e.title),
              m.xb(2),
              m.kc('ngClass', m.oc(5, T, i < a)),
              m.xb(1),
              m.Hc('\n                ', e.description, '\n              ');
          }
        }
        var V,
          Q =
            (((V = (function() {
              function n(e) {
                t(this, n),
                  (this.translate = e),
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
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(t) {
              return new (t || V)(m.Lb(f.c));
            }),
            (V.ɵcmp = m.Fb({
              type: V,
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
                  (m.Fc(0, '\n'),
                  m.Qb(1, 'section', 0),
                  m.Fc(2, '\n  '),
                  m.Qb(3, 'div', 1),
                  m.Fc(4, '\n    '),
                  m.Qb(5, 'div', 2),
                  m.Fc(6, '\n      '),
                  m.Qb(7, 'h2'),
                  m.Fc(8),
                  m.gc(9, 'translate'),
                  m.Pb(),
                  m.Fc(10, '\n      '),
                  m.Qb(11, 'p', 3),
                  m.Fc(12),
                  m.gc(13, 'translate'),
                  m.Pb(),
                  m.Fc(14, '\n    '),
                  m.Pb(),
                  m.Fc(15, '\n    '),
                  m.Qb(16, 'div', 4),
                  m.Fc(17, '\n      '),
                  m.Qb(18, 'div', 5),
                  m.Fc(19, '\n        '),
                  m.Qb(20, 'ul', 6),
                  m.Fc(21, '\n          '),
                  m.Dc(22, A, 13, 7, 'li', 7),
                  m.Fc(23, '\n        '),
                  m.Pb(),
                  m.Fc(24, '\n      '),
                  m.Pb(),
                  m.Fc(25, '\n      '),
                  m.Qb(26, 'div', 8),
                  m.Fc(27, '\n        '),
                  m.Qb(28, 'div', 9),
                  m.Fc(29, '\n          '),
                  m.Qb(30, 'div', 10),
                  m.Fc(31, '\n            '),
                  m.Qb(32, 'div', 11),
                  m.Fc(33, '\n              '),
                  m.Qb(34, 'h2', 12),
                  m.Fc(35),
                  m.gc(36, 'translate'),
                  m.Pb(),
                  m.Fc(37, '\n            '),
                  m.Pb(),
                  m.Fc(38, '\n          '),
                  m.Pb(),
                  m.Fc(39, '\n          '),
                  m.Qb(40, 'div', 13),
                  m.Fc(41, '\n            '),
                  m.Qb(42, 'p'),
                  m.Fc(43),
                  m.gc(44, 'translate'),
                  m.Qb(45, 'span', 14),
                  m.Fc(46),
                  m.gc(47, 'translate'),
                  m.Pb(),
                  m.Fc(48),
                  m.gc(49, 'translate'),
                  m.Pb(),
                  m.Fc(50, '\n            '),
                  m.Qb(51, 'a', 15),
                  m.Fc(52),
                  m.gc(53, 'translate'),
                  m.Pb(),
                  m.Fc(54, '\n          '),
                  m.Pb(),
                  m.Fc(55, '\n        '),
                  m.Pb(),
                  m.Fc(56, '\n      '),
                  m.Pb(),
                  m.Fc(57, '\n    '),
                  m.Pb(),
                  m.Fc(58, '\n  '),
                  m.Pb(),
                  m.Fc(59, '\n'),
                  m.Pb(),
                  m.Fc(60, '\n')),
                  2 & t &&
                    (m.xb(8),
                    m.Gc(
                      m.hc(9, 8, 'ABOUT.SOLUTIONS.A_SOLUTION_FOR_EVERY_NEED')
                    ),
                    m.xb(4),
                    m.Hc(
                      '\n        ',
                      m.hc(13, 10, 'ABOUT.SOLUTIONS.LOREM_IPSUM'),
                      '\n      '
                    ),
                    m.xb(10),
                    m.kc('ngForOf', n.features),
                    m.xb(13),
                    m.Hc(
                      '\n                ',
                      m.hc(36, 12, 'ABOUT.SOLUTIONS.DASHCORE_INCLUDED'),
                      '\n              '
                    ),
                    m.xb(8),
                    m.Hc(
                      '\n              ',
                      m.hc(
                        44,
                        14,
                        'ABOUT.SOLUTIONS.OUR_TEMPLATE_IS_PACKED_WITH_A'
                      ),
                      '\n              '
                    ),
                    m.xb(3),
                    m.Gc(m.hc(47, 16, 'ABOUT.SOLUTIONS.START_ADMIN_DASHBOARD')),
                    m.xb(2),
                    m.Hc(
                      '\n              ',
                      m.hc(49, 18, 'ABOUT.SOLUTIONS.START_RIGHT_AWAY'),
                      '\n            '
                    ),
                    m.xb(4),
                    m.Gc(m.hc(53, 20, 'ABOUT.SOLUTIONS.TRY_THE_DASHBOARD')));
              },
              directives: [g.j, v.a, g.i],
              pipes: [f.b],
              styles: ['']
            })),
            V),
          k = a('+tcz');
        function w(t, n) {
          if (
            (1 & t &&
              (m.Qb(0, 'div', 4),
              m.Fc(1, '\n        '),
              m.Mb(2, 'dc-feather', 5),
              m.Fc(3, '\n        '),
              m.Qb(4, 'p', 6),
              m.Fc(5),
              m.Pb(),
              m.Fc(6, '\n        '),
              m.Qb(7, 'p', 7),
              m.Fc(8),
              m.Pb(),
              m.Fc(9, '\n      '),
              m.Pb()),
            2 & t)
          ) {
            var e = n.$implicit;
            m.xb(2),
              m.kc('name', e.icon)('iconClass', 'stroke-primary'),
              m.xb(2),
              m.kc('countUp', e.value),
              m.xb(1),
              m.Hc('\n          ', e.value, '\n        '),
              m.xb(3),
              m.Gc(e.title);
          }
        }
        var S,
          C =
            (((S = (function() {
              function n() {
                t(this, n),
                  (this.counters = [
                    { icon: 'box', value: 273, title: 'Components' },
                    { icon: 'download-cloud', value: 654, title: 'Downloads' },
                    { icon: 'settings', value: 7941, title: 'Followers' },
                    { icon: 'award', value: 654, title: 'New users' }
                  ]);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(t) {
              return new (t || S)();
            }),
            (S.ɵcmp = m.Fb({
              type: S,
              selectors: [['dc-counter4']],
              decls: 11,
              vars: 1,
              consts: [
                [1, 'bg-contrast', 'edge', 'top-left'],
                [1, 'container'],
                [1, 'row'],
                [
                  'class',
                  'col-xs-4 col-md-3 text-center',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
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
                  (m.Qb(0, 'section', 0),
                  m.Fc(1, '\n  '),
                  m.Qb(2, 'div', 1),
                  m.Fc(3, '\n    '),
                  m.Qb(4, 'div', 2),
                  m.Fc(5, '\n      '),
                  m.Dc(6, w, 10, 5, 'div', 3),
                  m.Fc(7, '\n    '),
                  m.Pb(),
                  m.Fc(8, '\n  '),
                  m.Pb(),
                  m.Fc(9, '\n'),
                  m.Pb(),
                  m.Fc(10, '\n')),
                  2 & t && (m.xb(6), m.kc('ngForOf', n.counters));
              },
              directives: [g.j, v.a, k.b],
              styles: ['']
            })),
            S);
        function U(t, n) {
          if (
            (1 & t &&
              (m.Qb(0, 'div', 6),
              m.Fc(1, '\n        '),
              m.Qb(2, 'div', 7),
              m.Fc(3, '\n          '),
              m.Qb(4, 'div', 8),
              m.Fc(5, '\n            '),
              m.Mb(6, 'dc-feather', 9),
              m.Fc(7, '\n            '),
              m.Qb(8, 'p', 10),
              m.Fc(9),
              m.Pb(),
              m.Fc(10, '\n          '),
              m.Pb(),
              m.Fc(11, '\n        '),
              m.Pb(),
              m.Fc(12, '\n      '),
              m.Pb()),
            2 & t)
          ) {
            var e = n.$implicit;
            m.xb(6),
              m.kc('name', e.icon)('iconClass', 'stroke-primary'),
              m.xb(3),
              m.Gc(e.title);
          }
        }
        var M,
          _ =
            (((M = (function() {
              function n(e) {
                t(this, n),
                  (this.translate = e),
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
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(t) {
              return new (t || M)(m.Lb(f.c));
            }),
            (M.ɵcmp = m.Fb({
              type: M,
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
                  (m.Qb(0, 'section', 0),
                  m.Fc(1, '\n  '),
                  m.Qb(2, 'div', 1),
                  m.Fc(3, '\n    '),
                  m.Qb(4, 'div', 2),
                  m.Fc(5, '\n      '),
                  m.Qb(6, 'h2'),
                  m.Fc(7),
                  m.gc(8, 'translate'),
                  m.Pb(),
                  m.Fc(9, '\n      '),
                  m.Qb(10, 'p', 3),
                  m.Fc(11),
                  m.gc(12, 'translate'),
                  m.Pb(),
                  m.Fc(13, '\n    '),
                  m.Pb(),
                  m.Fc(14, '\n\n    '),
                  m.Qb(15, 'div', 4),
                  m.Fc(16, '\n      '),
                  m.Dc(17, U, 13, 3, 'div', 5),
                  m.Fc(18, '\n    '),
                  m.Pb(),
                  m.Fc(19, '\n  '),
                  m.Pb(),
                  m.Fc(20, '\n'),
                  m.Pb(),
                  m.Fc(21, '\n')),
                  2 & t &&
                    (m.xb(7),
                    m.Gc(m.hc(8, 3, 'ABOUT.FEATURES.OUR_FEATURES_STACK')),
                    m.xb(4),
                    m.Hc(
                      '\n        ',
                      m.hc(12, 5, 'ABOUT.FEATURES.TAKE_THE_CONTROL'),
                      '\n      '
                    ),
                    m.xb(6),
                    m.kc('ngForOf', n.features));
              },
              directives: [g.j, v.a],
              pipes: [f.b],
              styles: ['']
            })),
            M);
        function I(t, n) {
          if ((1 & t && m.Mb(0, 'li'), 2 & t)) {
            var e = n.$implicit;
            m.Ab(
              'shadow-box bg-light rounded-circle icon-xxl image-background contain mt-',
              e.margin,
              ''
            ),
              m.Cc(
                'background-image',
                'url(assets/images/about/' + e.image + '.png)'
              ),
              m.yb('data-aos-easing', 'ease-in-out-cubic')('data-aos', e.aos)(
                'data-aos-delay',
                100 * (e.image - 1)
              );
          }
        }
        var R,
          D =
            (((R = (function() {
              function n() {
                t(this, n),
                  (this.images = [
                    { image: 1, margin: 6, aos: 'fade-right' },
                    { image: 2, margin: 4, aos: 'fade-down-right' },
                    { image: 3, margin: 5, aos: 'fade-up-right' },
                    { image: 4, margin: 6, aos: 'fade-up' },
                    { image: 5, margin: 4, aos: 'fade-down-left' },
                    { image: 1, margin: 5, aos: 'fade-up-left' },
                    { image: 2, margin: 6, aos: 'fade-left' }
                  ]);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(t) {
              return new (t || R)();
            }),
            (R.ɵcmp = m.Fb({
              type: R,
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
                  (m.Fc(0, '\n'),
                  m.Qb(1, 'section', 0),
                  m.Fc(2, '\n  '),
                  m.Qb(3, 'div', 1),
                  m.Fc(4, '\n    '),
                  m.Qb(5, 'div', 2),
                  m.Fc(6, '\n      '),
                  m.Qb(7, 'h2'),
                  m.Fc(8),
                  m.gc(9, 'translate'),
                  m.Pb(),
                  m.Fc(10, '\n      '),
                  m.Qb(11, 'p', 3),
                  m.Fc(12),
                  m.gc(13, 'translate'),
                  m.Pb(),
                  m.Fc(14, '\n    '),
                  m.Pb(),
                  m.Fc(15, '\n\n    '),
                  m.Qb(16, 'ul', 4),
                  m.Fc(17, '\n      '),
                  m.Dc(18, I, 1, 8, 'li', 5),
                  m.Fc(19, '\n    '),
                  m.Pb(),
                  m.Fc(20, '\n\n    '),
                  m.Qb(21, 'div', 6),
                  m.Fc(22, '\n      '),
                  m.Mb(23, 'dc-feather', 7),
                  m.Fc(24, '\n      '),
                  m.Qb(25, 'p', 8),
                  m.Fc(26),
                  m.gc(27, 'translate'),
                  m.Pb(),
                  m.Fc(28, '\n      '),
                  m.Qb(29, 'a', 9),
                  m.Fc(30),
                  m.gc(31, 'translate'),
                  m.Pb(),
                  m.Fc(32, '\n    '),
                  m.Pb(),
                  m.Fc(33, '\n  '),
                  m.Pb(),
                  m.Fc(34, '\n'),
                  m.Pb(),
                  m.Fc(35, '\n')),
                  2 & t &&
                    (m.xb(8),
                    m.Gc(m.hc(9, 7, 'ABOUT.CUSTOMERS.THIRD_PARTY')),
                    m.xb(4),
                    m.Hc(
                      '\n        ',
                      m.hc(13, 9, 'ABOUT.CUSTOMERS.WE_USE_THE_LATEST_TRENDS'),
                      '\n      '
                    ),
                    m.xb(6),
                    m.kc('ngForOf', n.images),
                    m.xb(5),
                    m.kc('name', 'code')('iconClass', 'stroke-primary'),
                    m.xb(3),
                    m.Hc(
                      '\n        ',
                      m.hc(27, 11, 'ABOUT.CUSTOMERS.ARE_YOU_A_DEVELOPER'),
                      '\n      '
                    ),
                    m.xb(4),
                    m.Hc(
                      '\n        ',
                      m.hc(31, 13, 'ABOUT.CUSTOMERS.REVIEW_THE_SPECS'),
                      ''
                    ));
              },
              directives: [g.j, v.a],
              pipes: [f.b],
              styles: ['']
            })),
            R);
        function H(t, n) {
          if (
            (1 & t &&
              (m.Qb(0, 'div', 6),
              m.Fc(1, '\n        '),
              m.Qb(2, 'div', 7),
              m.Fc(3, '\n          '),
              m.Qb(4, 'div', 8),
              m.Fc(5, '\n            '),
              m.Qb(6, 'div', 9),
              m.Fc(7, '\n              '),
              m.Mb(8, 'div', 10),
              m.Fc(9, '\n              '),
              m.Qb(10, 'div', 11),
              m.Fc(11, '\n                '),
              m.Qb(12, 'div', 12),
              m.Fc(13, '\n                  '),
              m.Qb(14, 'h6', 13),
              m.Fc(15),
              m.Pb(),
              m.Fc(16, '\n                  '),
              m.Qb(17, 'p', 14),
              m.Fc(18),
              m.Pb(),
              m.Fc(19, '\n\n                  '),
              m.Qb(20, 'blockquote', 15),
              m.Fc(21, '\n                    '),
              m.Mb(22, 'i', 16),
              m.Fc(23, '\n                    '),
              m.Qb(24, 'p', 17),
              m.Fc(25),
              m.Pb(),
              m.Fc(26, '\n                  '),
              m.Pb(),
              m.Fc(27, '\n\n                  '),
              m.Mb(28, 'hr', 18),
              m.Fc(29, '\n                  '),
              m.Qb(30, 'nav', 19),
              m.Fc(31, '\n                    '),
              m.Qb(32, 'a', 20),
              m.Fc(33, '\n                      '),
              m.Mb(34, 'i', 21),
              m.Fc(35, '\n                    '),
              m.Pb(),
              m.Fc(36, '\n                    '),
              m.Qb(37, 'a', 20),
              m.Fc(38, '\n                      '),
              m.Mb(39, 'i', 22),
              m.Fc(40, '\n                    '),
              m.Pb(),
              m.Fc(41, '\n                    '),
              m.Qb(42, 'a', 20),
              m.Fc(43, '\n                      '),
              m.Mb(44, 'i', 23),
              m.Fc(45, '\n                    '),
              m.Pb(),
              m.Fc(46, '\n                  '),
              m.Pb(),
              m.Fc(47, '\n                '),
              m.Pb(),
              m.Fc(48, '\n              '),
              m.Pb(),
              m.Fc(49, '\n            '),
              m.Pb(),
              m.Fc(50, '\n          '),
              m.Pb(),
              m.Fc(51, '\n        '),
              m.Pb(),
              m.Fc(52, '\n      '),
              m.Pb()),
            2 & t)
          ) {
            var e = n.$implicit,
              i = n.index;
            m.xb(8),
              m.Cc(
                'background-image',
                'url(assets/images/about/team/' + (i + 1) + '.jpg)'
              ),
              m.xb(7),
              m.Gc(e.name),
              m.xb(3),
              m.Hc(
                '\n                    ',
                e.position,
                '\n                  '
              ),
              m.xb(7),
              m.Gc(e.quote);
          }
        }
        var L,
          N,
          B,
          q,
          G,
          j =
            (((L = (function() {
              function n(e) {
                t(this, n),
                  (this.translate = e),
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
                      576: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        slidesPerGroup: 1
                      }
                    },
                    navigation: !0,
                    pagination: !1
                  });
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(t) {
              return new (t || L)(m.Lb(f.c));
            }),
            (L.ɵcmp = m.Fb({
              type: L,
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
                  (m.Fc(0, '\n'),
                  m.Qb(1, 'section', 0),
                  m.Fc(2, '\n  '),
                  m.Qb(3, 'div', 1),
                  m.Fc(4, '\n    '),
                  m.Qb(5, 'div', 2),
                  m.Fc(6, '\n      '),
                  m.Qb(7, 'h2'),
                  m.Fc(8),
                  m.gc(9, 'translate'),
                  m.Pb(),
                  m.Fc(10, '\n      '),
                  m.Qb(11, 'p', 3),
                  m.Fc(12),
                  m.gc(13, 'translate'),
                  m.Pb(),
                  m.Fc(14, '\n    '),
                  m.Pb(),
                  m.Fc(15, '\n\n    '),
                  m.Qb(16, 'swiper', 4),
                  m.Fc(17, '\n      '),
                  m.Dc(18, H, 53, 5, 'div', 5),
                  m.Fc(19, '\n    '),
                  m.Pb(),
                  m.Fc(20, '\n  '),
                  m.Pb(),
                  m.Fc(21, '\n'),
                  m.Pb(),
                  m.Fc(22, '\n')),
                  2 & t &&
                    (m.xb(8),
                    m.Gc(m.hc(9, 4, 'ABOUT.TEAM.GET_TO_KNOW_OUR_TEAM')),
                    m.xb(4),
                    m.Hc(
                      '\n        ',
                      m.hc(13, 6, 'ABOUT.TEAM.THESE_AMAZING_PEOPLE'),
                      '\n      '
                    ),
                    m.xb(4),
                    m.kc('config', n.config),
                    m.xb(2),
                    m.kc('ngForOf', n.team));
              },
              directives: [l.a, g.j],
              pipes: [f.b],
              styles: ['']
            })),
            L),
          W = a('YJ7q'),
          K = a('MTqK'),
          Y = a('cqDB'),
          z =
            (((N = (function() {
              function n(e) {
                t(this, n), (this.translate = e);
              }
              return e(n, [{ key: 'ngOnInit', value: function() {} }]), n;
            })()).ɵfac = function(t) {
              return new (t || N)(m.Lb(f.c));
            }),
            (N.ɵcmp = m.Fb({
              type: N,
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
                  (m.Qb(0, 'section', 0),
                  m.Fc(1, '\n  '),
                  m.Qb(2, 'div', 1),
                  m.Fc(3, '\n    '),
                  m.Qb(4, 'div', 2),
                  m.Fc(5, '\n      '),
                  m.Qb(6, 'div', 3),
                  m.Fc(7, '\n        '),
                  m.Qb(8, 'h2'),
                  m.Fc(9),
                  m.gc(10, 'translate'),
                  m.Qb(11, 'span', 4),
                  m.Fc(12),
                  m.gc(13, 'translate'),
                  m.Pb(),
                  m.Fc(14, '\n        '),
                  m.Pb(),
                  m.Fc(15, '\n      '),
                  m.Pb(),
                  m.Fc(16, '\n\n      '),
                  m.Qb(17, 'div', 5),
                  m.Fc(18, '\n        '),
                  m.Mb(19, 'dc-form-register-simple-inline'),
                  m.Fc(20, '\n      '),
                  m.Pb(),
                  m.Fc(21, '\n    '),
                  m.Pb(),
                  m.Fc(22, '\n  '),
                  m.Pb(),
                  m.Fc(23, '\n'),
                  m.Pb(),
                  m.Fc(24, '\n')),
                  2 & t &&
                    (m.xb(9),
                    m.Hc(
                      '\n          ',
                      m.hc(10, 2, 'ABOUT.REGISTER.DASHCORE_OFFICIAL'),
                      '\n          '
                    ),
                    m.xb(3),
                    m.Hc(
                      '\n            ',
                      m.hc(13, 4, 'ABOUT.REGISTER.NEWSLETTER'),
                      '\n          '
                    ));
              },
              directives: [Y.a],
              pipes: [f.b],
              styles: ['']
            })),
            N),
          J = a('iLZQ'),
          X = [
            {
              path: '',
              component:
                ((B = (function() {
                  function n(e) {
                    t(this, n),
                      (this.i18nService = e),
                      (this.version = p.a.version),
                      this.updateSeoTags();
                  }
                  return (
                    e(n, [
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
                            'ABOUT.NETWORK_SEARCH_META.TITLE',
                            'ABOUT.NETWORK_SEARCH_META.KEYWORDS'
                          );
                        }
                      }
                    ]),
                    n
                  );
                })()),
                (B.ɵfac = function(t) {
                  return new (t || B)(m.Lb(d.a));
                }),
                (B.ɵcmp = m.Fb({
                  type: B,
                  selectors: [['app-about']],
                  decls: 25,
                  vars: 3,
                  consts: [[3, 'title', 'subtitle'], [3, 'title']],
                  template: function(t, n) {
                    1 & t &&
                      (m.Qb(0, 'dc-page-header-wave', 0),
                      m.Fc(1, '\n'),
                      m.Pb(),
                      m.Fc(2, '\n'),
                      m.Mb(3, 'dc-about-overview'),
                      m.Fc(4, '\n'),
                      m.Mb(5, 'dc-about-video'),
                      m.Fc(6, '\n'),
                      m.Mb(7, 'dc-about-solutions'),
                      m.Fc(8, '\n'),
                      m.Mb(9, 'dc-counter4'),
                      m.Fc(10, '\n'),
                      m.Mb(11, 'dc-about-features'),
                      m.Fc(12, '\n'),
                      m.Mb(13, 'dc-about-customers'),
                      m.Fc(14, '\n'),
                      m.Mb(15, 'dc-about-team'),
                      m.Fc(16, '\n'),
                      m.Mb(17, 'dc-trust-us', 1),
                      m.Fc(18, '\n'),
                      m.Mb(19, 'dc-developer-designer'),
                      m.Fc(20, '\n'),
                      m.Mb(21, 'dc-about-register'),
                      m.Fc(22, '\n'),
                      m.Mb(23, 'dc-footer2'),
                      m.Fc(24, '\n')),
                      2 & t &&
                        (m.kc('title', 'About Everythink')(
                          'subtitle',
                          'Everythink is an all included Community, with smart assistants you could connect in realtime all your members. what are you waiting for?'
                        ),
                        m.xb(17),
                        m.kc('title', 'They trust us'));
                  },
                  directives: [h.a, O, x, Q, C, _, D, j, W.a, K.a, z, J.a],
                  styles: ['']
                })),
                B),
              data: { title: Object(d.c)('About') }
            }
          ],
          $ =
            (((G = function n() {
              t(this, n);
            }).ɵmod = m.Jb({ type: G })),
            (G.ɵinj = m.Ib({
              factory: function(t) {
                return new (t || G)();
              },
              imports: [[b.g.forChild(X)], b.g]
            })),
            G),
          Z =
            (((q = function n() {
              t(this, n);
            }).ɵmod = m.Jb({ type: q })),
            (q.ɵinj = m.Ib({
              factory: function(t) {
                return new (t || q)();
              },
              imports: [[c.a, s.a, o.a, r.a, u.a, l.c, $, f.a.forChild()]]
            })),
            q);
      },
      V6j0: function(n, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return r;
        });
        var a = i('M0ag'),
          c = i('+tcz'),
          s = i('sYmb'),
          o = i('fXoL'),
          r = (function() {
            var n = function n() {
              t(this, n);
            };
            return (
              (n.ɵmod = o.Jb({ type: n })),
              (n.ɵinj = o.Ib({
                factory: function(t) {
                  return new (t || n)();
                },
                imports: [[a.a, c.a, s.a.forChild()]]
              })),
              n
            );
          })();
      }
    }
  ]);
})();
