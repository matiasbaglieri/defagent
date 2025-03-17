!(function() {
  function n(n, e) {
    if (!(n instanceof e))
      throw new TypeError('Cannot call a class as a function');
  }
  function e(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function t(n, t, i) {
    return t && e(n.prototype, t), i && e(n, i), n;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [15],
    {
      '+tcz': function(e, i, a) {
        'use strict';
        a.d(i, 'a', function() {
          return b;
        }),
          a.d(i, 'b', function() {
            return p;
          });
        var s,
          c,
          o = a('fXoL'),
          r = function() {
            return (r =
              Object.assign ||
              function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                  for (var a in (e = arguments[t]))
                    Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
                return n;
              }).apply(this, arguments);
          },
          l = (function() {
            function n(n, e, t) {
              var i = this;
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
                  i.startTime || (i.startTime = n);
                  var e = n - i.startTime;
                  (i.remaining = i.duration - e),
                    (i.frameVal = i.useEasing
                      ? i.countDown
                        ? i.startVal -
                          i.easingFn(e, 0, i.startVal - i.endVal, i.duration)
                        : i.easingFn(
                            e,
                            i.startVal,
                            i.endVal - i.startVal,
                            i.duration
                          )
                      : i.countDown
                      ? i.startVal - (e / i.duration) * (i.startVal - i.endVal)
                      : i.startVal +
                        (e / i.duration) * (i.endVal - i.startVal)),
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
                    e < i.duration
                      ? (i.rAF = requestAnimationFrame(i.count))
                      : null !== i.finalEndVal
                      ? i.update(i.finalEndVal)
                      : i.callback && i.callback();
                }),
                (this.formatNumber = function(n) {
                  var e,
                    t,
                    a,
                    s,
                    c,
                    o = n < 0 ? '-' : '';
                  if (
                    ((e = Math.abs(n).toFixed(i.options.decimalPlaces)),
                    (a = (t = (e += '').split('.'))[0]),
                    (s = t.length > 1 ? i.options.decimal + t[1] : ''),
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
                (this.easeOutExpo = function(n, e, t, i) {
                  return (
                    (t * (1 - Math.pow(2, (-10 * n) / i)) * 1024) / 1023 + e
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
          d = a('ofXK'),
          p =
            (((c = (function() {
              function e(t, i, a) {
                n(this, e),
                  (this.el = t),
                  (this.zone = i),
                  (this.platformId = a),
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
          b =
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
      '2d4A': function(e, t, i) {
        'use strict';
        i.d(t, 'a', function() {
          return l;
        });
        var a = i('nhfI'),
          s = i('6NWb'),
          c = i('M0ag'),
          o = i('sYmb'),
          r = i('fXoL'),
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
                imports: [[a.c, s.b, c.a, o.a.forChild()]]
              })),
              e
            );
          })();
      },
      KNmM: function(e, i, a) {
        'use strict';
        a.r(i),
          a.d(i, 'AppLandingModule', function() {
            return en;
          });
        var s,
          c,
          o = a('M0ag'),
          r = a('V6j0'),
          l = a('2d4A'),
          d = a('pu65'),
          p = a('nhfI'),
          b = a('sYmb'),
          u = a('fXoL'),
          m =
            (((s = function e() {
              n(this, e);
            }).ɵmod = u.Jb({ type: s })),
            (s.ɵinj = u.Ib({
              factory: function(n) {
                return new (n || s)();
              },
              imports: [[p.c, b.a.forChild()]]
            })),
            s),
          h = a('M0Rk'),
          f = a('tyNb'),
          g = a('ey9i'),
          F =
            (((c = (function() {
              function e(t) {
                n(this, e), (this.translate = t);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || c)(u.Lb(b.c));
            }),
            (c.ɵcmp = u.Fb({
              type: c,
              selectors: [['dc-app-landing-heading']],
              decls: 60,
              vars: 12,
              consts: [
                [1, 'section', 'header', 'text-contrast', 'app-landing-header'],
                [1, 'shape-wrapper'],
                [
                  1,
                  'shape',
                  'shape-background',
                  'shape-main',
                  'gradient',
                  'gradient-purple-navy'
                ],
                [
                  1,
                  'shape',
                  'shape-background',
                  'shape-top',
                  'gradient',
                  'gradient-navy-purple'
                ],
                [1, 'container', 'overflow-hidden'],
                [1, 'row', 'gap-y', 'align-items-center'],
                [1, 'col-md-6', 'col-lg-6'],
                [1, 'bold', 'text-contrast', 'display-lg-5', 'font-lg', 'mb-5'],
                [1, 'd-block', 'light', 'font-md'],
                [1, 'lead'],
                [1, 'nav', 'mt-5', 'align-items-center'],
                [
                  'href',
                  'https://everythink.ai/app/#/sessions/signup',
                  1,
                  'btn',
                  'btn-rounded',
                  'btn-lg',
                  'btn-info',
                  'shadow',
                  'mr-3',
                  'px-4',
                  'text-capitalize'
                ],
                [1, 'col-md-6', 'col-lg-4', 'ml-lg-auto'],
                ['data-aos', 'fade-le2ft'],
                [1, 'mobile-dev2ice', 'ipho1ne-x'],
                [1, 'scre2en'],
                [
                  'src',
                  'https://everythink.sfo2.digitaloceanspaces.com/avatars/amy/00.gif',
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
                [1, 'absolute', 'screen-highlight', 'center-x', 'w-100']
              ],
              template: function(n, e) {
                1 & n &&
                  (u.Fc(0, '\n'),
                  u.Qb(1, 'header', 0),
                  u.Fc(2, '\n  '),
                  u.Qb(3, 'div', 1),
                  u.Fc(4, '\n    '),
                  u.Mb(5, 'div', 2),
                  u.Fc(6, '\n    '),
                  u.Mb(7, 'div', 3),
                  u.Fc(8, '\n  '),
                  u.Pb(),
                  u.Fc(9, '\n\n  '),
                  u.Qb(10, 'div', 4),
                  u.Fc(11, '\n    '),
                  u.Qb(12, 'div', 5),
                  u.Fc(13, '\n      '),
                  u.Qb(14, 'div', 6),
                  u.Fc(15, '\n        '),
                  u.Qb(16, 'h1', 7),
                  u.Fc(17),
                  u.gc(18, 'translate'),
                  u.Qb(19, 'span', 8),
                  u.Fc(20),
                  u.gc(21, 'translate'),
                  u.Pb(),
                  u.Fc(22, '\n        '),
                  u.Pb(),
                  u.Fc(23, '\n        '),
                  u.Qb(24, 'p', 9),
                  u.Fc(25),
                  u.gc(26, 'translate'),
                  u.Pb(),
                  u.Fc(27, '\n\n        '),
                  u.Qb(28, 'div', 10),
                  u.Fc(29, '\n          '),
                  u.Qb(30, 'a', 11),
                  u.Fc(31),
                  u.gc(32, 'translate'),
                  u.Pb(),
                  u.Fc(33, '\n        '),
                  u.Pb(),
                  u.Fc(34, '\n      '),
                  u.Pb(),
                  u.Fc(35, '\n\n      '),
                  u.Qb(36, 'div', 12),
                  u.Fc(37, '\n        '),
                  u.Qb(38, 'div', 13),
                  u.Fc(39, '\n          '),
                  u.Qb(40, 'div', 14),
                  u.Fc(41, '\n            '),
                  u.Qb(42, 'div', 15),
                  u.Fc(43, '\n              '),
                  u.Fc(44, '\n              '),
                  u.Mb(45, 'img', 16),
                  u.Fc(46, '\n            '),
                  u.Pb(),
                  u.Fc(47, '\n            '),
                  u.Mb(48, 'div', 17),
                  u.Fc(49, '\n          '),
                  u.Pb(),
                  u.Fc(50, '\n\n          '),
                  u.Qb(51, 'div', 18),
                  u.Fc(52, '\n            '),
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
                    (u.xb(17),
                    u.Hc(
                      '\n          ',
                      u.hc(
                        18,
                        4,
                        'HOME.APP_LANDING_HEADING.HEADING.HR_CONSULTIN'
                      ),
                      '\n          '
                    ),
                    u.xb(3),
                    u.Hc(
                      '\n            ',
                      u.hc(
                        21,
                        6,
                        'HOME.APP_LANDING_HEADING.HEADING.CONSULTANT'
                      ),
                      '\n          '
                    ),
                    u.xb(5),
                    u.Hc(
                      '\n          ',
                      u.hc(26, 8, 'HOME.APP_LANDING_HEADING.HEADING.IAS'),
                      '\n        '
                    ),
                    u.xb(6),
                    u.Hc(
                      '\n            ',
                      u.hc(
                        32,
                        10,
                        'HOME.APP_LANDING_HEADING.HEADING.GERSTARTED'
                      ),
                      '\n          '
                    ));
              },
              pipes: [b.b],
              styles: ['']
            })),
            c),
          v = a('aaX3'),
          P = a('ofXK'),
          y = a('AL06');
        function A(n, e) {
          if ((1 & n && (u.Qb(0, 'h5', 3), u.Fc(1), u.Pb()), 2 & n)) {
            var t = u.fc().$implicit;
            u.xb(1), u.Hc('\n          ', t.title.es, '\n        ');
          }
        }
        function E(n, e) {
          if ((1 & n && (u.Qb(0, 'h5', 3), u.Fc(1), u.Pb()), 2 & n)) {
            var t = u.fc().$implicit;
            u.xb(1), u.Hc('\n          ', t.title.en, '\n        ');
          }
        }
        function x(n, e) {
          if ((1 & n && (u.Qb(0, 'p'), u.Fc(1), u.Pb()), 2 & n)) {
            var t = u.fc().$implicit;
            u.xb(1), u.Hc('\n          ', t.description.es, '\n        ');
          }
        }
        function I(n, e) {
          if ((1 & n && (u.Qb(0, 'p'), u.Fc(1), u.Pb()), 2 & n)) {
            var t = u.fc().$implicit;
            u.xb(1), u.Hc('\n          ', t.description.en, '\n        ');
          }
        }
        function w(n, e) {
          if (
            (1 & n &&
              (u.Qb(0, 'div', 7),
              u.Fc(1, '\n        '),
              u.Mb(2, 'dc-feather', 8),
              u.Fc(3, '\n        '),
              u.Dc(4, A, 2, 1, 'h5', 9),
              u.Fc(5, '\n        '),
              u.Dc(6, E, 2, 1, 'h5', 9),
              u.Fc(7, '\n        '),
              u.Dc(8, x, 2, 1, 'p', 10),
              u.Fc(9, '\n        '),
              u.Dc(10, I, 2, 1, 'p', 10),
              u.Fc(11, '\n      '),
              u.Pb()),
            2 & n)
          ) {
            var t = e.$implicit,
              i = u.fc();
            u.xb(2),
              u.kc('name', t.icon)('iconClass', 'stroke-primary mb-3'),
              u.xb(2),
              u.kc('ngIf', 'es' === i.translate.currentLang),
              u.xb(2),
              u.kc('ngIf', 'en-US' === i.translate.currentLang),
              u.xb(2),
              u.kc('ngIf', 'es' === i.translate.currentLang),
              u.xb(2),
              u.kc('ngIf', 'en-US' === i.translate.currentLang);
          }
        }
        var N,
          O =
            (((N = (function() {
              function e(t) {
                n(this, e),
                  (this.translate = t),
                  (this.elements = [
                    {
                      icon: 'target',
                      title: { en: 'Affordability', es: 'Asequibilidad' },
                      description: {
                        en:
                          'We reduces the need for human intervention while still increasing work-flow efficiency ',
                        es:
                          'Reducimos la necesidad de intervenci\xf3n humana al tiempo que aumentamos la eficiencia del flujo de trabajo.'
                      }
                    },
                    {
                      icon: 'database',
                      title: { en: 'Technology', es: 'Tecnolog\xeda' },
                      description: {
                        en:
                          'Our Cognitive engine knows no limits. It continues to learn and suggest new and better ways of solving problems based on who it\u2019s interacting with\u2014without coding! ',
                        es:
                          'Nuestro motor cognitivo no tiene l\xedmites. Sigue aprendiendo y sugiriendo nuevas y mejores maneras de resolver problemas seg\xfan con qui\xe9n interact\xfaa, \xa1sin necesidad de programar!'
                      }
                    },
                    {
                      icon: 'eye',
                      title: {
                        en: 'Competitive edge',
                        es: 'Ventaja competitiva'
                      },
                      description: {
                        en:
                          'We can be quickly deployed to employees, customers, vendors, members and more to introduce value to your market.  It\u2019s the fastest way to leverage skills and knowledge across your entire enterprise to foster innovation and connection using ai agents. ',
                        es:
                          'Podemos implementar r\xe1pidamente con empleados, clientes, proveedores, miembros y m\xe1s para aportar valor a su mercado. Es la forma m\xe1s r\xe1pida de aprovechar las habilidades y el conocimiento de toda su empresa para fomentar la innovaci\xf3n y la conexi\xf3n usando agentes ai.'
                      }
                    }
                  ]);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || N)(u.Lb(b.c));
            }),
            (N.ɵcmp = u.Fb({
              type: N,
              selectors: [['dc-app-landing-feature-cards']],
              decls: 22,
              vars: 7,
              consts: [
                ['id', 'features', 1, 'section', 'features'],
                [1, 'container'],
                [1, 'section-heading', 'text-center'],
                [1, 'bold'],
                [1, 'lead', 'text-secondary'],
                [1, 'row', 'gap-y', 'text-center', 'text-md-left'],
                [
                  'class',
                  'col-md-4 py-4 rounded shadow-hover',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [1, 'col-md-4', 'py-4', 'rounded', 'shadow-hover'],
                [1, '', 3, 'name', 'iconClass'],
                ['class', 'bold', 4, 'ngIf'],
                [4, 'ngIf']
              ],
              template: function(n, e) {
                1 & n &&
                  (u.Qb(0, 'section', 0),
                  u.Fc(1, '\n  '),
                  u.Qb(2, 'div', 1),
                  u.Fc(3, '\n    '),
                  u.Qb(4, 'div', 2),
                  u.Fc(5, '\n      '),
                  u.Qb(6, 'h2', 3),
                  u.Fc(7),
                  u.gc(8, 'translate'),
                  u.Pb(),
                  u.Fc(9, '\n      '),
                  u.Qb(10, 'p', 4),
                  u.Fc(11),
                  u.gc(12, 'translate'),
                  u.Pb(),
                  u.Fc(13, '\n    '),
                  u.Pb(),
                  u.Fc(14, '\n\n    '),
                  u.Qb(15, 'div', 5),
                  u.Fc(16, '\n      '),
                  u.Dc(17, w, 12, 6, 'div', 6),
                  u.Fc(18, '\n    '),
                  u.Pb(),
                  u.Fc(19, '\n  '),
                  u.Pb(),
                  u.Fc(20, '\n'),
                  u.Pb(),
                  u.Fc(21, '\n')),
                  2 & n &&
                    (u.xb(7),
                    u.Hc(
                      '\n        ',
                      u.hc(
                        8,
                        3,
                        'HOME.APP_LANDING_HEADING.FEATURE_CARDS.WHAT_YOU_GET'
                      ),
                      '\n      '
                    ),
                    u.xb(4),
                    u.Hc(
                      '\n        ',
                      u.hc(
                        12,
                        5,
                        'HOME.APP_LANDING_HEADING.FEATURE_CARDS.WITH_A_SINGLE_TOOL'
                      ),
                      '\n      '
                    ),
                    u.xb(6),
                    u.kc('ngForOf', e.elements));
              },
              directives: [P.j, y.a, P.k],
              pipes: [b.b],
              styles: ['']
            })),
            N);
        function D(n, e) {
          if ((1 & n && (u.Qb(0, 'h5', 29), u.Fc(1), u.Pb()), 2 & n)) {
            var t = u.fc().$implicit;
            u.xb(1),
              u.Hc('\n                  ', t.title.es, '\n                ');
          }
        }
        function Q(n, e) {
          if ((1 & n && (u.Qb(0, 'h5', 29), u.Fc(1), u.Pb()), 2 & n)) {
            var t = u.fc().$implicit;
            u.xb(1),
              u.Hc('\n                  ', t.title.en, '\n                ');
          }
        }
        function _(n, e) {
          if ((1 & n && (u.Qb(0, 'p', 30), u.Fc(1), u.Pb()), 2 & n)) {
            var t = u.fc().$implicit;
            u.xb(1),
              u.Hc(
                '\n                  ',
                t.description.es,
                '\n                '
              );
          }
        }
        function V(n, e) {
          if ((1 & n && (u.Qb(0, 'p', 30), u.Fc(1), u.Pb()), 2 & n)) {
            var t = u.fc().$implicit;
            u.xb(1),
              u.Hc(
                '\n                  ',
                t.description.en,
                '\n                '
              );
          }
        }
        function H(n, e) {
          if (
            (1 & n &&
              (u.Qb(0, 'div', 23),
              u.Fc(1, '\n            '),
              u.Qb(2, 'div', 24),
              u.Fc(3, '\n              '),
              u.Mb(4, 'dc-feather', 25),
              u.Fc(5, '\n              '),
              u.Qb(6, 'div', 26),
              u.Fc(7, '\n                '),
              u.Dc(8, D, 2, 1, 'h5', 27),
              u.Fc(9, '\n                '),
              u.Dc(10, Q, 2, 1, 'h5', 27),
              u.Fc(11, '\n                '),
              u.Dc(12, _, 2, 1, 'p', 28),
              u.Fc(13, '\n                '),
              u.Dc(14, V, 2, 1, 'p', 28),
              u.Fc(15, '\n              '),
              u.Pb(),
              u.Fc(16, '\n            '),
              u.Pb(),
              u.Fc(17, '\n          '),
              u.Pb()),
            2 & n)
          ) {
            var t = e.$implicit,
              i = u.fc();
            u.xb(4),
              u.kc('name', t.icon)('iconClass', 'stroke-primary'),
              u.xb(4),
              u.kc('ngIf', 'es' === i.translate.currentLang),
              u.xb(2),
              u.kc('ngIf', 'en-US' === i.translate.currentLang),
              u.xb(2),
              u.kc('ngIf', 'es' === i.translate.currentLang),
              u.xb(2),
              u.kc('ngIf', 'en-US' === i.translate.currentLang);
          }
        }
        var k,
          M =
            (((k = (function() {
              function e(t) {
                n(this, e),
                  (this.translate = t),
                  (this.boxes = [
                    {
                      icon: 'activity',
                      title: {
                        en: 'Sensor Interface',
                        es: 'Interfaz del sensor'
                      },
                      description: {
                        en:
                          'AI agents gather intelligence from radar, cameras, and cyber monitoring systems. ',
                        es:
                          'Los agentes de IA recopilan informaci\xf3n de radares, c\xe1maras y sistemas de monitoreo cibern\xe9tico.'
                      }
                    },
                    {
                      icon: 'eye',
                      title: {
                        en: 'Processing Module',
                        es: 'M\xf3dulo de procesamiento'
                      },
                      description: {
                        en:
                          'They interpret data and execute decisions using high-performance computing. ',
                        es:
                          'Interpretan datos y ejecutan decisiones utilizando computaci\xf3n de alto rendimiento.'
                      }
                    },
                    {
                      icon: 'bar-chart',
                      title: {
                        en: 'Decision-Making Engine',
                        es: 'Motor de toma de decisiones'
                      },
                      description: {
                        en:
                          'Whether reactive (rule-based) or deliberative (learning-based), these agents optimize strategic choices. ',
                        es:
                          'Ya sean reactivos (basados \u200b\u200ben reglas) o deliberativos (basados \u200b\u200ben aprendizaje), estos agentes optimizan las opciones estrat\xe9gicas.'
                      }
                    },
                    {
                      icon: 'life-buoy',
                      title: {
                        en: 'Feedback and Learning Module',
                        es: 'M\xf3dulo de retroalimentaci\xf3n y aprendizaje'
                      },
                      description: {
                        en:
                          'Many AI systems continuously refine their performance through feedback loops.',
                        es:
                          'Muchos sistemas de IA perfeccionan continuamente su rendimiento a trav\xe9s de ciclos de retroalimentaci\xf3n.'
                      }
                    }
                  ]);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || k)(u.Lb(b.c));
            }),
            (k.ɵcmp = u.Fb({
              type: k,
              selectors: [['dc-app-landing-twin-phone-right-list']],
              decls: 68,
              vars: 7,
              consts: [
                [1, 'section', 'overflow-hidden'],
                [1, 'container', 'bring-to-front'],
                [1, 'row', 'gap-y', 'align-items-center'],
                [1, 'col-md-6', 'col-lg-5', 'mr-lg-auto'],
                [1, 'center-xy', 'op-1'],
                [
                  'data-aos',
                  'zoom-in',
                  1,
                  'shape',
                  'shape-background',
                  'rounded-circle',
                  'shadow-lg',
                  'bg-info',
                  2,
                  'width',
                  '600px',
                  'height',
                  '600px'
                ],
                [1, 'device-twin', 'align-items-center'],
                ['data-aos', 'fade-left', 1, 'mockup', 'absolute'],
                [1, 'screen'],
                ['width', '100%', 'autoplay', 'autoplay', 'controls', ''],
                [
                  'src',
                  'assets/images/app-landing/screens/app/hr_manager_phone_01.mp4',
                  'type',
                  'video/mp4'
                ],
                [1, 'button'],
                [1, 'iphone-x', 'front', 'mr-0'],
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
                  'assets/images/app-landing/screens/app/hr_manager_phone_02.mp4',
                  'type',
                  'video/mp4'
                ],
                [1, 'notch'],
                [1, 'col-md-6', 'text-center', 'text-md-left'],
                [1, 'section-heading'],
                [1, 'far', 'fa-check-circle', 'fa-2x', 'text-danger', 'mb-3'],
                [1, 'bold', 'font-md'],
                [1, 'row', 'gap-y'],
                ['class', 'col-md-6', 4, 'ngFor', 'ngForOf'],
                [1, 'col-md-6'],
                [
                  1,
                  'media',
                  'flex-column',
                  'flex-lg-row',
                  'align-items-center',
                  'align-items-md-start'
                ],
                [1, 'mx-auto', 'ml-md-0', 'mr-md-3', 3, 'name', 'iconClass'],
                [1, 'media-body', 'mt-3', 'mt-md-0'],
                ['class', 'bold mt-0 mb-1', 4, 'ngIf'],
                ['class', 'm-0 d-md-none d-lg-block', 4, 'ngIf'],
                [1, 'bold', 'mt-0', 'mb-1'],
                [1, 'm-0', 'd-md-none', 'd-lg-block']
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
                  u.Qb(9, 'div', 4),
                  u.Fc(10, '\n          '),
                  u.Mb(11, 'div', 5),
                  u.Fc(12, '\n        '),
                  u.Pb(),
                  u.Fc(13, '\n\n        '),
                  u.Qb(14, 'div', 6),
                  u.Fc(15, '\n          '),
                  u.Qb(16, 'div', 7),
                  u.Fc(17, '\n            '),
                  u.Qb(18, 'div', 8),
                  u.Fc(19, '\n              '),
                  u.Qb(20, 'video', 9),
                  u.Fc(21, '\n                '),
                  u.Mb(22, 'source', 10),
                  u.Fc(23, '\n              '),
                  u.Pb(),
                  u.Fc(24, '\n            '),
                  u.Pb(),
                  u.Fc(25, '\n            '),
                  u.Mb(26, 'span', 11),
                  u.Fc(27, '\n          '),
                  u.Pb(),
                  u.Fc(28, '\n\n          '),
                  u.Qb(29, 'div', 12),
                  u.Fc(30, '\n            '),
                  u.Qb(31, 'div', 13),
                  u.Fc(32, '\n              '),
                  u.Qb(33, 'video', 14),
                  u.Fc(34, '\n                '),
                  u.Mb(35, 'source', 15),
                  u.Fc(36, '\n              '),
                  u.Pb(),
                  u.Fc(37, '\n            '),
                  u.Pb(),
                  u.Fc(38, '\n            '),
                  u.Mb(39, 'div', 16),
                  u.Fc(40, '\n          '),
                  u.Pb(),
                  u.Fc(41, '\n        '),
                  u.Pb(),
                  u.Fc(42, '\n      '),
                  u.Pb(),
                  u.Fc(43, '\n\n      '),
                  u.Qb(44, 'div', 17),
                  u.Fc(45, '\n        '),
                  u.Qb(46, 'div', 18),
                  u.Fc(47, '\n          '),
                  u.Mb(48, 'i', 19),
                  u.Fc(49, '\n          '),
                  u.Qb(50, 'h2', 20),
                  u.Fc(51),
                  u.gc(52, 'translate'),
                  u.Pb(),
                  u.Fc(53, '\n          '),
                  u.Qb(54, 'p'),
                  u.Fc(55),
                  u.gc(56, 'translate'),
                  u.Pb(),
                  u.Fc(57, '\n        '),
                  u.Pb(),
                  u.Fc(58, '\n\n        '),
                  u.Qb(59, 'div', 21),
                  u.Fc(60, '\n          '),
                  u.Dc(61, H, 18, 6, 'div', 22),
                  u.Fc(62, '\n        '),
                  u.Pb(),
                  u.Fc(63, '\n      '),
                  u.Pb(),
                  u.Fc(64, '\n    '),
                  u.Pb(),
                  u.Fc(65, '\n  '),
                  u.Pb(),
                  u.Fc(66, '\n'),
                  u.Pb(),
                  u.Fc(67, '\n')),
                  2 & n &&
                    (u.xb(51),
                    u.Hc(
                      '\n            ',
                      u.hc(
                        52,
                        3,
                        'HOME.APP_LANDING_HEADING.TWIN_PHONE_LEFT_RIGHT.WE_HAVE_A_TON_OF_BENEFITSS'
                      ),
                      '\n          '
                    ),
                    u.xb(4),
                    u.Hc(
                      '\n            ',
                      u.hc(
                        56,
                        5,
                        'HOME.APP_LANDING_HEADING.TWIN_PHONE_LEFT_RIGHT.EVERYTHINK_DOES_ALL_OF'
                      ),
                      '\n          '
                    ),
                    u.xb(6),
                    u.kc('ngForOf', e.boxes));
              },
              directives: [P.j, y.a, P.k],
              pipes: [b.b],
              styles: ['']
            })),
            k);
        function T(n, e) {
          if ((1 & n && (u.Qb(0, 'h5', 28), u.Fc(1), u.Pb()), 2 & n)) {
            var t = u.fc().$implicit;
            u.xb(1), u.Hc('\n                ', t.title.es, '\n              ');
          }
        }
        function L(n, e) {
          if ((1 & n && (u.Qb(0, 'h5', 28), u.Fc(1), u.Pb()), 2 & n)) {
            var t = u.fc().$implicit;
            u.xb(1), u.Hc('\n                ', t.title.en, '\n              ');
          }
        }
        function S(n, e) {
          if ((1 & n && (u.Qb(0, 'p', 29), u.Fc(1), u.Pb()), 2 & n)) {
            var t = u.fc().$implicit;
            u.xb(1),
              u.Hc('\n                ', t.description.es, '\n              ');
          }
        }
        function G(n, e) {
          if ((1 & n && (u.Qb(0, 'p', 29), u.Fc(1), u.Pb()), 2 & n)) {
            var t = u.fc().$implicit;
            u.xb(1),
              u.Hc('\n                ', t.description.en, '\n              ');
          }
        }
        function C(n, e) {
          if (
            (1 & n &&
              (u.Qb(0, 'li', 23),
              u.Fc(1, '\n            '),
              u.Fc(2, '\n            '),
              u.Mb(3, 'dc-feather', 24),
              u.Fc(4, '\n            '),
              u.Qb(5, 'div', 25),
              u.Fc(6, '\n              '),
              u.Dc(7, T, 2, 1, 'h5', 26),
              u.Fc(8, '\n              '),
              u.Dc(9, L, 2, 1, 'h5', 26),
              u.Fc(10, '\n              '),
              u.Dc(11, S, 2, 1, 'p', 27),
              u.Fc(12, '\n              '),
              u.Dc(13, G, 2, 1, 'p', 27),
              u.Fc(14, '\n            '),
              u.Pb(),
              u.Fc(15, '\n          '),
              u.Pb()),
            2 & n)
          ) {
            var t = e.$implicit,
              i = u.fc();
            u.xb(3),
              u.kc('name', t.icon)('iconClass', 'stroke-primary'),
              u.xb(4),
              u.kc('ngIf', 'es' === i.translate.currentLang),
              u.xb(2),
              u.kc('ngIf', 'en-US' === i.translate.currentLang),
              u.xb(2),
              u.kc('ngIf', 'es' === i.translate.currentLang),
              u.xb(2),
              u.kc('ngIf', 'en-US' === i.translate.currentLang);
          }
        }
        var R,
          j =
            (((R = (function() {
              function e(t) {
                n(this, e),
                  (this.translate = t),
                  (this.elements = [
                    {
                      icon: 'database',
                      title: {
                        en: 'Reactive AI Agents ',
                        es: 'Agentes de IA reactivos'
                      },
                      description: {
                        en:
                          'These agents follow predefined rules and respond to real-time inputs without learning from past experiences. They are highly reliable for rapid-response scenarios like missile defence systems.',
                        es:
                          'Estos agentes siguen reglas predefinidas y responden a informaci\xf3n en tiempo real sin aprender de experiencias previas. Son altamente confiables para escenarios de respuesta r\xe1pida, como los sistemas de defensa antimisiles.'
                      }
                    },
                    {
                      icon: 'codesandbox',
                      title: {
                        en: 'Deliberative AI Agents',
                        es: 'Agentes deliberadas de inteligencia artificial'
                      },
                      description: {
                        en:
                          'More advanced than reactive systems, these agents analyze situations, assess multiple strategies, and make optimal decisions. They are used in mission planning and threat assessment.',
                        es:
                          'M\xe1s avanzados que los sistemas reactivos, estos agentes analizan situaciones, eval\xfaan m\xfaltiples estrategias y toman decisiones \xf3ptimas. Se utilizan en la planificaci\xf3n de misiones y la evaluaci\xf3n de amenazas.'
                      }
                    },
                    {
                      icon: 'shopping-bag',
                      title: {
                        en: 'Multi-Agent Systems (MAS)',
                        es: 'Sistemas multiagente (MAS)'
                      },
                      description: {
                        en:
                          'These involve AI agents working in coordinated networks to achieve complex defence objectives. MAS enhances distributed intelligence and collaboration in military operations, such as drone swarms and autonomous naval fleets.',
                        es:
                          'Estos implican que agentes de IA trabajen en redes coordinadas para lograr objetivos de defensa complejos. El MAS mejora la inteligencia distribuida y la colaboraci\xf3n en operaciones militares, como enjambres de drones y flotas navales aut\xf3nomas.'
                      }
                    }
                  ]);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || R)(u.Lb(b.c));
            }),
            (R.ɵcmp = u.Fb({
              type: R,
              selectors: [['dc-app-landing-twin-phone-left-list']],
              decls: 64,
              vars: 4,
              consts: [
                [1, 'section', 'path-success'],
                [1, 'shape-wrapper'],
                [
                  'data-aos',
                  'fade-up',
                  1,
                  'shape-ring',
                  'absolute',
                  'right',
                  'top'
                ],
                [1, 'container', 'bring-to-front'],
                [
                  1,
                  'row',
                  'gap-y',
                  'align-items-center',
                  'text-center',
                  'text-lg-left'
                ],
                [1, 'col-md-6', 'col-lg-5', 'ml-lg-auto', 'order-md-2'],
                [1, 'device-twin', 'align-items-center'],
                ['data-aos', 'fade-right', 1, 'mockup', 'absolute', 'right'],
                [1, 'screen'],
                ['width', '100%', 'autoplay', 'autoplay', 'controls', ''],
                [
                  'src',
                  'assets/images/app-landing/screens/app/hr_web_phone_03.mp4',
                  'type',
                  'video/mp4'
                ],
                [1, 'button'],
                [1, 'iphone-x', 'front', 'ml-0'],
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
                  'assets/images/app-landing/screens/app/hr-web_phone_01.mp4',
                  'type',
                  'video/mp4'
                ],
                [1, 'notch'],
                [1, 'col-md-6', 'text-center', 'text-md-left'],
                [1, 'section-heading'],
                [1, 'fas', 'fa-trophy', 'fa-2x', 'text-danger', 'mb-3'],
                [1, 'bold', 'font-md'],
                [1, 'list-unstyled'],
                [
                  'class',
                  'media flex-column flex-md-row',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [1, 'media', 'flex-column', 'flex-md-row'],
                [1, 'mx-auto', 'mr-md-3', 3, 'name', 'iconClass'],
                [1, 'media-body', 'mt-3', 'mt-md-0'],
                ['class', 'bold mt-0 mb-1', 4, 'ngIf'],
                ['class', 'm-0 d-md-none d-lg-block', 4, 'ngIf'],
                [1, 'bold', 'mt-0', 'mb-1'],
                [1, 'm-0', 'd-md-none', 'd-lg-block']
              ],
              template: function(n, e) {
                1 & n &&
                  (u.Fc(0, '\n'),
                  u.Qb(1, 'section', 0),
                  u.Fc(2, '\n  '),
                  u.Qb(3, 'div', 1),
                  u.Fc(4, '\n    '),
                  u.Mb(5, 'div', 2),
                  u.Fc(6, '\n  '),
                  u.Pb(),
                  u.Fc(7, '\n\n  '),
                  u.Qb(8, 'div', 3),
                  u.Fc(9, '\n    '),
                  u.Qb(10, 'div', 4),
                  u.Fc(11, '\n      '),
                  u.Qb(12, 'div', 5),
                  u.Fc(13, '\n        '),
                  u.Qb(14, 'div', 6),
                  u.Fc(15, '\n          '),
                  u.Qb(16, 'div', 7),
                  u.Fc(17, '\n            '),
                  u.Qb(18, 'div', 8),
                  u.Fc(19, '\n              '),
                  u.Qb(20, 'video', 9),
                  u.Fc(21, '\n                '),
                  u.Mb(22, 'source', 10),
                  u.Fc(23, '\n              '),
                  u.Pb(),
                  u.Fc(24, '\n            '),
                  u.Pb(),
                  u.Fc(25, '\n            '),
                  u.Mb(26, 'span', 11),
                  u.Fc(27, '\n          '),
                  u.Pb(),
                  u.Fc(28, '\n\n          '),
                  u.Qb(29, 'div', 12),
                  u.Fc(30, '\n            '),
                  u.Qb(31, 'div', 13),
                  u.Fc(32, '\n              '),
                  u.Qb(33, 'video', 14),
                  u.Fc(34, '\n                '),
                  u.Mb(35, 'source', 15),
                  u.Fc(36, '\n              '),
                  u.Pb(),
                  u.Fc(37, '\n            '),
                  u.Pb(),
                  u.Fc(38, '\n            '),
                  u.Mb(39, 'div', 16),
                  u.Fc(40, '\n          '),
                  u.Pb(),
                  u.Fc(41, '\n        '),
                  u.Pb(),
                  u.Fc(42, '\n      '),
                  u.Pb(),
                  u.Fc(43, '\n\n      '),
                  u.Qb(44, 'div', 17),
                  u.Fc(45, '\n        '),
                  u.Qb(46, 'div', 18),
                  u.Fc(47, '\n          '),
                  u.Mb(48, 'i', 19),
                  u.Fc(49, '\n          '),
                  u.Qb(50, 'h2', 20),
                  u.Fc(51),
                  u.gc(52, 'translate'),
                  u.Pb(),
                  u.Fc(53, '\n        '),
                  u.Pb(),
                  u.Fc(54, '\n\n        '),
                  u.Qb(55, 'ul', 21),
                  u.Fc(56, '\n          '),
                  u.Dc(57, C, 16, 6, 'li', 22),
                  u.Fc(58, '\n        '),
                  u.Pb(),
                  u.Fc(59, '\n      '),
                  u.Pb(),
                  u.Fc(60, '\n    '),
                  u.Pb(),
                  u.Fc(61, '\n  '),
                  u.Pb(),
                  u.Fc(62, '\n'),
                  u.Pb(),
                  u.Fc(63, '\n')),
                  2 & n &&
                    (u.xb(51),
                    u.Hc(
                      '\n            ',
                      u.hc(
                        52,
                        2,
                        'HOME.APP_LANDING_HEADING.TWIN_PHONE_LEFT_LIST.WE_ARE_YOUR_PATH_TO_SUCCESS'
                      ),
                      '\n          '
                    ),
                    u.xb(6),
                    u.kc('ngForOf', e.elements));
              },
              directives: [P.j, y.a, P.k],
              pipes: [b.b],
              styles: ['']
            })),
            R);
        function W(n, e) {
          if (
            (1 & n &&
              (u.Qb(0, 'div', 7),
              u.Fc(1, '\n        '),
              u.Mb(2, 'img', 8),
              u.Fc(3, '\n      '),
              u.Pb()),
            2 & n)
          ) {
            var t = e.$implicit;
            u.xb(2),
              u.mc(
                'src',
                'assets/images/app-landing/screens/app/',
                t,
                '.png',
                u.yc
              );
          }
        }
        var U,
          z,
          $,
          Y,
          q,
          J = function() {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          },
          B =
            (((z = (function() {
              function e(t) {
                n(this, e),
                  (this.translate = t),
                  (this.config = {
                    slidesPerView: 5,
                    spaceBetween: 20,
                    autoplay: { delay: 2500, disableOnInteraction: !1 },
                    centeredSlides: !0,
                    navigation: !1,
                    pagination: !0,
                    breakpoints: {
                      1200: { slidesPerView: 5, spaceBetween: 0 },
                      992: { slidesPerView: 3, spaceBetween: 0 },
                      576: { slidesPerView: 2, spaceBetween: 0 }
                    }
                  });
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || z)(u.Lb(b.c));
            }),
            (z.ɵcmp = u.Fb({
              type: z,
              selectors: [['dc-screenshots-app']],
              decls: 23,
              vars: 9,
              consts: [
                [1, 'screenshots', 'coverflow'],
                [1, 'container'],
                [1, 'section-heading', 'text-center'],
                [1, 'bold', 'display-4'],
                [1, 'text-secondary'],
                [1, 'swiper-container', 3, 'config'],
                ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
                [1, 'swiper-slide'],
                ['alt', '...', 1, 'img-responsive', 3, 'src']
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
                  u.Qb(7, 'h2', 3),
                  u.Fc(8),
                  u.gc(9, 'translate'),
                  u.Pb(),
                  u.Fc(10, '\n      '),
                  u.Qb(11, 'p', 4),
                  u.Fc(12),
                  u.gc(13, 'translate'),
                  u.Pb(),
                  u.Fc(14, '\n    '),
                  u.Pb(),
                  u.Fc(15, '\n\n    '),
                  u.Qb(16, 'swiper', 5),
                  u.Fc(17, '\n      '),
                  u.Dc(18, W, 4, 1, 'div', 6),
                  u.Fc(19, '\n    '),
                  u.Pb(),
                  u.Fc(20, '\n  '),
                  u.Pb(),
                  u.Fc(21, '\n'),
                  u.Pb(),
                  u.Fc(22, '\n')),
                  2 & n &&
                    (u.xb(8),
                    u.Hc(
                      '\n        ',
                      u.hc(9, 4, 'SCREENSHOTS.APP.APP_SCREENSHOTS'),
                      '\n      '
                    ),
                    u.xb(4),
                    u.Hc(
                      '\n        ',
                      u.hc(
                        13,
                        6,
                        'SCREENSHOTS.APP.A_PICTURE_IS_WORTH_A_THOUSAND_WORDS'
                      ),
                      '\n      '
                    ),
                    u.xb(4),
                    u.kc('config', e.config),
                    u.xb(2),
                    u.kc('ngForOf', u.nc(8, J)));
              },
              directives: [p.a, P.j],
              pipes: [b.b],
              styles: ['']
            })),
            z),
          K =
            (((U = (function() {
              function e(t) {
                n(this, e), (this.translate = t);
              }
              return t(e, [{ key: 'ngOnInit', value: function() {} }]), e;
            })()).ɵfac = function(n) {
              return new (n || U)(u.Lb(b.c));
            }),
            (U.ɵcmp = u.Fb({
              type: U,
              selectors: [['dc-app-landing-download']],
              decls: 59,
              vars: 21,
              consts: [
                [1, 'section', 'app-download'],
                [1, 'container', 'bring-to-front'],
                [1, 'shadow-lg', 'bg-contrast', 'p-5', 'rounded'],
                [1, 'section-heading', 'text-center'],
                [1, 'text-primary', 'regular'],
                [1, 'text-secondary'],
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
                  'assets/images/app-landing/svg/apple.svg',
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
                  'assets/images/app-landing/svg/google-play.svg',
                  'alt',
                  'EVERYTHINK DIRECTORY SMART ASSISTANTS',
                  1,
                  'icon',
                  'icon-md'
                ],
                [1, 'd-block', 'bold', 'text-darker']
              ],
              template: function(n, e) {
                1 & n &&
                  (u.Qb(0, 'section', 0),
                  u.Fc(1, '\n  '),
                  u.Qb(2, 'div', 1),
                  u.Fc(3, '\n    '),
                  u.Qb(4, 'div', 2),
                  u.Fc(5, '\n      '),
                  u.Qb(6, 'div', 3),
                  u.Fc(7, '\n        '),
                  u.Qb(8, 'p', 4),
                  u.Fc(9),
                  u.gc(10, 'translate'),
                  u.Pb(),
                  u.Fc(11, '\n        '),
                  u.Qb(12, 'h2'),
                  u.Fc(13),
                  u.gc(14, 'translate'),
                  u.Pb(),
                  u.Fc(15, '\n        '),
                  u.Qb(16, 'p', 5),
                  u.Fc(17),
                  u.gc(18, 'translate'),
                  u.Pb(),
                  u.Fc(19, '\n      '),
                  u.Pb(),
                  u.Fc(20, '\n\n      '),
                  u.Qb(21, 'nav', 6),
                  u.Fc(22, '\n        '),
                  u.Qb(23, 'a', 7),
                  u.Fc(24, '\n          '),
                  u.Mb(25, 'img', 8),
                  u.Fc(26, '\n          '),
                  u.Qb(27, 'p', 9),
                  u.Fc(28, '\n            '),
                  u.Qb(29, 'span', 10),
                  u.Fc(30),
                  u.gc(31, 'translate'),
                  u.Pb(),
                  u.Fc(32, '\n            '),
                  u.Qb(33, 'span', 11),
                  u.Fc(34),
                  u.gc(35, 'translate'),
                  u.Pb(),
                  u.Fc(36, '\n          '),
                  u.Pb(),
                  u.Fc(37, '\n        '),
                  u.Pb(),
                  u.Fc(38, '\n\n        '),
                  u.Qb(39, 'a', 12),
                  u.Fc(40, '\n          '),
                  u.Mb(41, 'img', 13),
                  u.Fc(42, '\n          '),
                  u.Qb(43, 'p', 9),
                  u.Fc(44, '\n            '),
                  u.Qb(45, 'span', 10),
                  u.Fc(46),
                  u.gc(47, 'translate'),
                  u.Pb(),
                  u.Fc(48, '\n            '),
                  u.Qb(49, 'span', 14),
                  u.Fc(50),
                  u.gc(51, 'translate'),
                  u.Pb(),
                  u.Fc(52, '\n          '),
                  u.Pb(),
                  u.Fc(53, '\n        '),
                  u.Pb(),
                  u.Fc(54, '\n      '),
                  u.Pb(),
                  u.Fc(55, '\n    '),
                  u.Pb(),
                  u.Fc(56, '\n  '),
                  u.Pb(),
                  u.Fc(57, '\n'),
                  u.Pb(),
                  u.Fc(58, '\n')),
                  2 & n &&
                    (u.xb(9),
                    u.Hc(
                      '\n          ',
                      u.hc(
                        10,
                        7,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.START_TODAY'
                      ),
                      '\n        '
                    ),
                    u.xb(4),
                    u.Hc(
                      '\n          ',
                      u.hc(
                        14,
                        9,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.DOWNLOAD_THE_APP'
                      ),
                      '\n        '
                    ),
                    u.xb(4),
                    u.Hc(
                      '\n          ',
                      u.hc(
                        18,
                        11,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.DOWNLOAD_EVERYTHING'
                      ),
                      '\n        '
                    ),
                    u.xb(13),
                    u.Gc(
                      u.hc(
                        31,
                        13,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.GET_IT_ON_THE'
                      )
                    ),
                    u.xb(4),
                    u.Gc(
                      u.hc(
                        35,
                        15,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.APP_STORE'
                      )
                    ),
                    u.xb(12),
                    u.Gc(
                      u.hc(
                        47,
                        17,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.DOWNLOAD_ON'
                      )
                    ),
                    u.xb(4),
                    u.Gc(
                      u.hc(
                        51,
                        19,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.GOOGLE_PLAY'
                      )
                    ));
              },
              pipes: [b.b],
              styles: ['']
            })),
            U),
          X = a('iLZQ'),
          Z = [
            {
              path: '',
              component:
                (($ = (function() {
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
                            'HOME.NETWORK_SEARCH_META.TITLE',
                            'HOME.NETWORK_SEARCH_META.KEYWORDS'
                          );
                        }
                      }
                    ]),
                    e
                  );
                })()),
                ($.ɵfac = function(n) {
                  return new (n || $)(u.Lb(g.a));
                }),
                ($.ɵcmp = u.Fb({
                  type: $,
                  selectors: [['dc-app-landing']],
                  decls: 18,
                  vars: 0,
                  template: function(n, e) {
                    1 & n &&
                      (u.Mb(0, 'dc-app-landing-heading'),
                      u.Fc(1, '\n'),
                      u.Mb(2, 'dc-slider-icons'),
                      u.Fc(3, '\n'),
                      u.Mb(4, 'dc-app-landing-feature-cards'),
                      u.Fc(5, '\n\n'),
                      u.Mb(6, 'dc-app-landing-twin-phone-right-list'),
                      u.Fc(7, '\n'),
                      u.Mb(8, 'dc-app-landing-twin-phone-left-list'),
                      u.Fc(9, '\n'),
                      u.Fc(10, '\n'),
                      u.Mb(11, 'dc-screenshots-app'),
                      u.Fc(12, '\n'),
                      u.Fc(13, '\n'),
                      u.Mb(14, 'dc-app-landing-download'),
                      u.Fc(15, '\n\n'),
                      u.Mb(16, 'dc-footer2'),
                      u.Fc(17, '\n'));
                  },
                  directives: [F, v.a, O, M, j, B, K, X.a],
                  styles: ['']
                })),
                $),
              data: {
                title: Object(g.c)('DefAgent - Ai Agent Engine for defense')
              }
            }
          ],
          nn =
            (((q = function e() {
              n(this, e);
            }).ɵmod = u.Jb({ type: q })),
            (q.ɵinj = u.Ib({
              factory: function(n) {
                return new (n || q)();
              },
              imports: [[f.g.forChild(Z)]]
            })),
            q),
          en =
            (((Y = function e() {
              n(this, e);
            }).ɵmod = u.Jb({ type: Y })),
            (Y.ɵinj = u.Ib({
              factory: function(n) {
                return new (n || Y)();
              },
              imports: [[o.a, h.a, r.a, l.a, d.a, m, nn, b.a.forChild()]]
            })),
            Y);
      },
      V6j0: function(e, t, i) {
        'use strict';
        i.d(t, 'a', function() {
          return r;
        });
        var a = i('M0ag'),
          s = i('+tcz'),
          c = i('sYmb'),
          o = i('fXoL'),
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
                imports: [[a.a, s.a, c.a.forChild()]]
              })),
              e
            );
          })();
      },
      pu65: function(e, t, i) {
        'use strict';
        i.d(t, 'a', function() {
          return r;
        });
        var a = i('nhfI'),
          s = i('M0ag'),
          c = i('sYmb'),
          o = i('fXoL'),
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
                imports: [[a.c, s.a, c.a.forChild()]]
              })),
              e
            );
          })();
      }
    }
  ]);
})();
