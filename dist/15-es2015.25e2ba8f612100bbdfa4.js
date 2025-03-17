(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    '+tcz': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      }),
        t.d(e, 'b', function() {
          return o;
        });
      var i = t('fXoL'),
        a = function() {
          return (a =
            Object.assign ||
            function(n) {
              for (var e, t = 1, i = arguments.length; t < i; t++)
                for (var a in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
              return n;
            }).apply(this, arguments);
        },
        s = (function() {
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
                    : i.startVal + (e / i.duration) * (i.endVal - i.startVal)),
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
                return (t * (1 - Math.pow(2, (-10 * n) / i)) * 1024) / 1023 + e;
              }),
              (this.options = a({}, this.defaults, t)),
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
                (this.complete = new i.n());
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
              return new (e || n)(i.Lb(i.l), i.Lb(i.z), i.Lb(i.B));
            }),
            (n.ɵdir = i.Gb({
              type: n,
              selectors: [['', 'countUp', '']],
              hostBindings: function(n, e) {
                1 & n &&
                  i.bc('click', function() {
                    return e.onClick();
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
            n
          );
        })(),
        r = (() => {
          let n = class {};
          return (
            (n.ɵmod = i.Jb({ type: n })),
            (n.ɵinj = i.Ib({
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
      var i = t('nhfI'),
        a = t('6NWb'),
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
            imports: [[i.c, a.b, s.a, c.a.forChild()]]
          })),
          n
        );
      })();
    },
    KNmM: function(n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, 'AppLandingModule', function() {
          return W;
        });
      var i = t('M0ag'),
        a = t('V6j0'),
        s = t('2d4A'),
        c = t('pu65'),
        o = t('nhfI'),
        r = t('sYmb'),
        l = t('fXoL');
      let d = (() => {
        class n {}
        return (
          (n.ɵmod = l.Jb({ type: n })),
          (n.ɵinj = l.Ib({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[o.c, r.a.forChild()]]
          })),
          n
        );
      })();
      var p = t('M0Rk'),
        b = t('tyNb'),
        u = t('ey9i');
      let m = (() => {
        class n {
          constructor(n) {
            this.translate = n;
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)(l.Lb(r.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
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
                (l.Fc(0, '\n'),
                l.Qb(1, 'header', 0),
                l.Fc(2, '\n  '),
                l.Qb(3, 'div', 1),
                l.Fc(4, '\n    '),
                l.Mb(5, 'div', 2),
                l.Fc(6, '\n    '),
                l.Mb(7, 'div', 3),
                l.Fc(8, '\n  '),
                l.Pb(),
                l.Fc(9, '\n\n  '),
                l.Qb(10, 'div', 4),
                l.Fc(11, '\n    '),
                l.Qb(12, 'div', 5),
                l.Fc(13, '\n      '),
                l.Qb(14, 'div', 6),
                l.Fc(15, '\n        '),
                l.Qb(16, 'h1', 7),
                l.Fc(17),
                l.gc(18, 'translate'),
                l.Qb(19, 'span', 8),
                l.Fc(20),
                l.gc(21, 'translate'),
                l.Pb(),
                l.Fc(22, '\n        '),
                l.Pb(),
                l.Fc(23, '\n        '),
                l.Qb(24, 'p', 9),
                l.Fc(25),
                l.gc(26, 'translate'),
                l.Pb(),
                l.Fc(27, '\n\n        '),
                l.Qb(28, 'div', 10),
                l.Fc(29, '\n          '),
                l.Qb(30, 'a', 11),
                l.Fc(31),
                l.gc(32, 'translate'),
                l.Pb(),
                l.Fc(33, '\n        '),
                l.Pb(),
                l.Fc(34, '\n      '),
                l.Pb(),
                l.Fc(35, '\n\n      '),
                l.Qb(36, 'div', 12),
                l.Fc(37, '\n        '),
                l.Qb(38, 'div', 13),
                l.Fc(39, '\n          '),
                l.Qb(40, 'div', 14),
                l.Fc(41, '\n            '),
                l.Qb(42, 'div', 15),
                l.Fc(43, '\n              '),
                l.Fc(44, '\n              '),
                l.Mb(45, 'img', 16),
                l.Fc(46, '\n            '),
                l.Pb(),
                l.Fc(47, '\n            '),
                l.Mb(48, 'div', 17),
                l.Fc(49, '\n          '),
                l.Pb(),
                l.Fc(50, '\n\n          '),
                l.Qb(51, 'div', 18),
                l.Fc(52, '\n            '),
                l.Fc(53, '\n          '),
                l.Pb(),
                l.Fc(54, '\n        '),
                l.Pb(),
                l.Fc(55, '\n      '),
                l.Pb(),
                l.Fc(56, '\n    '),
                l.Pb(),
                l.Fc(57, '\n  '),
                l.Pb(),
                l.Fc(58, '\n'),
                l.Pb(),
                l.Fc(59, '\n')),
                2 & n &&
                  (l.xb(17),
                  l.Hc(
                    '\n          ',
                    l.hc(
                      18,
                      4,
                      'HOME.APP_LANDING_HEADING.HEADING.HR_CONSULTIN'
                    ),
                    '\n          '
                  ),
                  l.xb(3),
                  l.Hc(
                    '\n            ',
                    l.hc(21, 6, 'HOME.APP_LANDING_HEADING.HEADING.CONSULTANT'),
                    '\n          '
                  ),
                  l.xb(5),
                  l.Hc(
                    '\n          ',
                    l.hc(26, 8, 'HOME.APP_LANDING_HEADING.HEADING.IAS'),
                    '\n        '
                  ),
                  l.xb(6),
                  l.Hc(
                    '\n            ',
                    l.hc(32, 10, 'HOME.APP_LANDING_HEADING.HEADING.GERSTARTED'),
                    '\n          '
                  ));
            },
            pipes: [r.b],
            styles: ['']
          })),
          n
        );
      })();
      var h = t('aaX3'),
        g = t('ofXK'),
        f = t('AL06');
      function F(n, e) {
        if ((1 & n && (l.Qb(0, 'h5', 3), l.Fc(1), l.Pb()), 2 & n)) {
          const n = l.fc().$implicit;
          l.xb(1), l.Hc('\n          ', n.title.es, '\n        ');
        }
      }
      function v(n, e) {
        if ((1 & n && (l.Qb(0, 'h5', 3), l.Fc(1), l.Pb()), 2 & n)) {
          const n = l.fc().$implicit;
          l.xb(1), l.Hc('\n          ', n.title.en, '\n        ');
        }
      }
      function P(n, e) {
        if ((1 & n && (l.Qb(0, 'p'), l.Fc(1), l.Pb()), 2 & n)) {
          const n = l.fc().$implicit;
          l.xb(1), l.Hc('\n          ', n.description.es, '\n        ');
        }
      }
      function A(n, e) {
        if ((1 & n && (l.Qb(0, 'p'), l.Fc(1), l.Pb()), 2 & n)) {
          const n = l.fc().$implicit;
          l.xb(1), l.Hc('\n          ', n.description.en, '\n        ');
        }
      }
      function y(n, e) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 7),
            l.Fc(1, '\n        '),
            l.Mb(2, 'dc-feather', 8),
            l.Fc(3, '\n        '),
            l.Dc(4, F, 2, 1, 'h5', 9),
            l.Fc(5, '\n        '),
            l.Dc(6, v, 2, 1, 'h5', 9),
            l.Fc(7, '\n        '),
            l.Dc(8, P, 2, 1, 'p', 10),
            l.Fc(9, '\n        '),
            l.Dc(10, A, 2, 1, 'p', 10),
            l.Fc(11, '\n      '),
            l.Pb()),
          2 & n)
        ) {
          const n = e.$implicit,
            t = l.fc();
          l.xb(2),
            l.kc('name', n.icon)('iconClass', 'stroke-primary mb-3'),
            l.xb(2),
            l.kc('ngIf', 'es' === t.translate.currentLang),
            l.xb(2),
            l.kc('ngIf', 'en-US' === t.translate.currentLang),
            l.xb(2),
            l.kc('ngIf', 'es' === t.translate.currentLang),
            l.xb(2),
            l.kc('ngIf', 'en-US' === t.translate.currentLang);
        }
      }
      let E = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
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
                  title: { en: 'Competitive edge', es: 'Ventaja competitiva' },
                  description: {
                    en:
                      'We can be quickly deployed to employees, customers, vendors, members and more to introduce value to your market.  It\u2019s the fastest way to leverage skills and knowledge across your entire enterprise to foster innovation and connection using ai agents. ',
                    es:
                      'Podemos implementar r\xe1pidamente con empleados, clientes, proveedores, miembros y m\xe1s para aportar valor a su mercado. Es la forma m\xe1s r\xe1pida de aprovechar las habilidades y el conocimiento de toda su empresa para fomentar la innovaci\xf3n y la conexi\xf3n usando agentes ai.'
                  }
                }
              ]);
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)(l.Lb(r.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
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
                (l.Qb(0, 'section', 0),
                l.Fc(1, '\n  '),
                l.Qb(2, 'div', 1),
                l.Fc(3, '\n    '),
                l.Qb(4, 'div', 2),
                l.Fc(5, '\n      '),
                l.Qb(6, 'h2', 3),
                l.Fc(7),
                l.gc(8, 'translate'),
                l.Pb(),
                l.Fc(9, '\n      '),
                l.Qb(10, 'p', 4),
                l.Fc(11),
                l.gc(12, 'translate'),
                l.Pb(),
                l.Fc(13, '\n    '),
                l.Pb(),
                l.Fc(14, '\n\n    '),
                l.Qb(15, 'div', 5),
                l.Fc(16, '\n      '),
                l.Dc(17, y, 12, 6, 'div', 6),
                l.Fc(18, '\n    '),
                l.Pb(),
                l.Fc(19, '\n  '),
                l.Pb(),
                l.Fc(20, '\n'),
                l.Pb(),
                l.Fc(21, '\n')),
                2 & n &&
                  (l.xb(7),
                  l.Hc(
                    '\n        ',
                    l.hc(
                      8,
                      3,
                      'HOME.APP_LANDING_HEADING.FEATURE_CARDS.WHAT_YOU_GET'
                    ),
                    '\n      '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n        ',
                    l.hc(
                      12,
                      5,
                      'HOME.APP_LANDING_HEADING.FEATURE_CARDS.WITH_A_SINGLE_TOOL'
                    ),
                    '\n      '
                  ),
                  l.xb(6),
                  l.kc('ngForOf', e.elements));
            },
            directives: [g.j, f.a, g.k],
            pipes: [r.b],
            styles: ['']
          })),
          n
        );
      })();
      function x(n, e) {
        if ((1 & n && (l.Qb(0, 'h5', 29), l.Fc(1), l.Pb()), 2 & n)) {
          const n = l.fc().$implicit;
          l.xb(1),
            l.Hc('\n                  ', n.title.es, '\n                ');
        }
      }
      function I(n, e) {
        if ((1 & n && (l.Qb(0, 'h5', 29), l.Fc(1), l.Pb()), 2 & n)) {
          const n = l.fc().$implicit;
          l.xb(1),
            l.Hc('\n                  ', n.title.en, '\n                ');
        }
      }
      function N(n, e) {
        if ((1 & n && (l.Qb(0, 'p', 30), l.Fc(1), l.Pb()), 2 & n)) {
          const n = l.fc().$implicit;
          l.xb(1),
            l.Hc(
              '\n                  ',
              n.description.es,
              '\n                '
            );
        }
      }
      function w(n, e) {
        if ((1 & n && (l.Qb(0, 'p', 30), l.Fc(1), l.Pb()), 2 & n)) {
          const n = l.fc().$implicit;
          l.xb(1),
            l.Hc(
              '\n                  ',
              n.description.en,
              '\n                '
            );
        }
      }
      function O(n, e) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 23),
            l.Fc(1, '\n            '),
            l.Qb(2, 'div', 24),
            l.Fc(3, '\n              '),
            l.Mb(4, 'dc-feather', 25),
            l.Fc(5, '\n              '),
            l.Qb(6, 'div', 26),
            l.Fc(7, '\n                '),
            l.Dc(8, x, 2, 1, 'h5', 27),
            l.Fc(9, '\n                '),
            l.Dc(10, I, 2, 1, 'h5', 27),
            l.Fc(11, '\n                '),
            l.Dc(12, N, 2, 1, 'p', 28),
            l.Fc(13, '\n                '),
            l.Dc(14, w, 2, 1, 'p', 28),
            l.Fc(15, '\n              '),
            l.Pb(),
            l.Fc(16, '\n            '),
            l.Pb(),
            l.Fc(17, '\n          '),
            l.Pb()),
          2 & n)
        ) {
          const n = e.$implicit,
            t = l.fc();
          l.xb(4),
            l.kc('name', n.icon)('iconClass', 'stroke-primary'),
            l.xb(4),
            l.kc('ngIf', 'es' === t.translate.currentLang),
            l.xb(2),
            l.kc('ngIf', 'en-US' === t.translate.currentLang),
            l.xb(2),
            l.kc('ngIf', 'es' === t.translate.currentLang),
            l.xb(2),
            l.kc('ngIf', 'en-US' === t.translate.currentLang);
        }
      }
      let D = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
              (this.boxes = [
                {
                  icon: 'activity',
                  title: { en: 'Sensor Interface', es: 'Interfaz del sensor' },
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
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)(l.Lb(r.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
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
                (l.Fc(0, '\n'),
                l.Qb(1, 'section', 0),
                l.Fc(2, '\n  '),
                l.Qb(3, 'div', 1),
                l.Fc(4, '\n    '),
                l.Qb(5, 'div', 2),
                l.Fc(6, '\n      '),
                l.Qb(7, 'div', 3),
                l.Fc(8, '\n        '),
                l.Qb(9, 'div', 4),
                l.Fc(10, '\n          '),
                l.Mb(11, 'div', 5),
                l.Fc(12, '\n        '),
                l.Pb(),
                l.Fc(13, '\n\n        '),
                l.Qb(14, 'div', 6),
                l.Fc(15, '\n          '),
                l.Qb(16, 'div', 7),
                l.Fc(17, '\n            '),
                l.Qb(18, 'div', 8),
                l.Fc(19, '\n              '),
                l.Qb(20, 'video', 9),
                l.Fc(21, '\n                '),
                l.Mb(22, 'source', 10),
                l.Fc(23, '\n              '),
                l.Pb(),
                l.Fc(24, '\n            '),
                l.Pb(),
                l.Fc(25, '\n            '),
                l.Mb(26, 'span', 11),
                l.Fc(27, '\n          '),
                l.Pb(),
                l.Fc(28, '\n\n          '),
                l.Qb(29, 'div', 12),
                l.Fc(30, '\n            '),
                l.Qb(31, 'div', 13),
                l.Fc(32, '\n              '),
                l.Qb(33, 'video', 14),
                l.Fc(34, '\n                '),
                l.Mb(35, 'source', 15),
                l.Fc(36, '\n              '),
                l.Pb(),
                l.Fc(37, '\n            '),
                l.Pb(),
                l.Fc(38, '\n            '),
                l.Mb(39, 'div', 16),
                l.Fc(40, '\n          '),
                l.Pb(),
                l.Fc(41, '\n        '),
                l.Pb(),
                l.Fc(42, '\n      '),
                l.Pb(),
                l.Fc(43, '\n\n      '),
                l.Qb(44, 'div', 17),
                l.Fc(45, '\n        '),
                l.Qb(46, 'div', 18),
                l.Fc(47, '\n          '),
                l.Mb(48, 'i', 19),
                l.Fc(49, '\n          '),
                l.Qb(50, 'h2', 20),
                l.Fc(51),
                l.gc(52, 'translate'),
                l.Pb(),
                l.Fc(53, '\n          '),
                l.Qb(54, 'p'),
                l.Fc(55),
                l.gc(56, 'translate'),
                l.Pb(),
                l.Fc(57, '\n        '),
                l.Pb(),
                l.Fc(58, '\n\n        '),
                l.Qb(59, 'div', 21),
                l.Fc(60, '\n          '),
                l.Dc(61, O, 18, 6, 'div', 22),
                l.Fc(62, '\n        '),
                l.Pb(),
                l.Fc(63, '\n      '),
                l.Pb(),
                l.Fc(64, '\n    '),
                l.Pb(),
                l.Fc(65, '\n  '),
                l.Pb(),
                l.Fc(66, '\n'),
                l.Pb(),
                l.Fc(67, '\n')),
                2 & n &&
                  (l.xb(51),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      52,
                      3,
                      'HOME.APP_LANDING_HEADING.TWIN_PHONE_LEFT_RIGHT.WE_HAVE_A_TON_OF_BENEFITSS'
                    ),
                    '\n          '
                  ),
                  l.xb(4),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      56,
                      5,
                      'HOME.APP_LANDING_HEADING.TWIN_PHONE_LEFT_RIGHT.EVERYTHINK_DOES_ALL_OF'
                    ),
                    '\n          '
                  ),
                  l.xb(6),
                  l.kc('ngForOf', e.boxes));
            },
            directives: [g.j, f.a, g.k],
            pipes: [r.b],
            styles: ['']
          })),
          n
        );
      })();
      function Q(n, e) {
        if ((1 & n && (l.Qb(0, 'h5', 28), l.Fc(1), l.Pb()), 2 & n)) {
          const n = l.fc().$implicit;
          l.xb(1), l.Hc('\n                ', n.title.es, '\n              ');
        }
      }
      function _(n, e) {
        if ((1 & n && (l.Qb(0, 'h5', 28), l.Fc(1), l.Pb()), 2 & n)) {
          const n = l.fc().$implicit;
          l.xb(1), l.Hc('\n                ', n.title.en, '\n              ');
        }
      }
      function V(n, e) {
        if ((1 & n && (l.Qb(0, 'p', 29), l.Fc(1), l.Pb()), 2 & n)) {
          const n = l.fc().$implicit;
          l.xb(1),
            l.Hc('\n                ', n.description.es, '\n              ');
        }
      }
      function H(n, e) {
        if ((1 & n && (l.Qb(0, 'p', 29), l.Fc(1), l.Pb()), 2 & n)) {
          const n = l.fc().$implicit;
          l.xb(1),
            l.Hc('\n                ', n.description.en, '\n              ');
        }
      }
      function M(n, e) {
        if (
          (1 & n &&
            (l.Qb(0, 'li', 23),
            l.Fc(1, '\n            '),
            l.Fc(2, '\n            '),
            l.Mb(3, 'dc-feather', 24),
            l.Fc(4, '\n            '),
            l.Qb(5, 'div', 25),
            l.Fc(6, '\n              '),
            l.Dc(7, Q, 2, 1, 'h5', 26),
            l.Fc(8, '\n              '),
            l.Dc(9, _, 2, 1, 'h5', 26),
            l.Fc(10, '\n              '),
            l.Dc(11, V, 2, 1, 'p', 27),
            l.Fc(12, '\n              '),
            l.Dc(13, H, 2, 1, 'p', 27),
            l.Fc(14, '\n            '),
            l.Pb(),
            l.Fc(15, '\n          '),
            l.Pb()),
          2 & n)
        ) {
          const n = e.$implicit,
            t = l.fc();
          l.xb(3),
            l.kc('name', n.icon)('iconClass', 'stroke-primary'),
            l.xb(4),
            l.kc('ngIf', 'es' === t.translate.currentLang),
            l.xb(2),
            l.kc('ngIf', 'en-US' === t.translate.currentLang),
            l.xb(2),
            l.kc('ngIf', 'es' === t.translate.currentLang),
            l.xb(2),
            l.kc('ngIf', 'en-US' === t.translate.currentLang);
        }
      }
      let k = (() => {
        class n {
          constructor(n) {
            (this.translate = n),
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
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)(l.Lb(r.c));
          }),
          (n.ɵcmp = l.Fb({
            type: n,
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
              ['class', 'media flex-column flex-md-row', 4, 'ngFor', 'ngForOf'],
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
                (l.Fc(0, '\n'),
                l.Qb(1, 'section', 0),
                l.Fc(2, '\n  '),
                l.Qb(3, 'div', 1),
                l.Fc(4, '\n    '),
                l.Mb(5, 'div', 2),
                l.Fc(6, '\n  '),
                l.Pb(),
                l.Fc(7, '\n\n  '),
                l.Qb(8, 'div', 3),
                l.Fc(9, '\n    '),
                l.Qb(10, 'div', 4),
                l.Fc(11, '\n      '),
                l.Qb(12, 'div', 5),
                l.Fc(13, '\n        '),
                l.Qb(14, 'div', 6),
                l.Fc(15, '\n          '),
                l.Qb(16, 'div', 7),
                l.Fc(17, '\n            '),
                l.Qb(18, 'div', 8),
                l.Fc(19, '\n              '),
                l.Qb(20, 'video', 9),
                l.Fc(21, '\n                '),
                l.Mb(22, 'source', 10),
                l.Fc(23, '\n              '),
                l.Pb(),
                l.Fc(24, '\n            '),
                l.Pb(),
                l.Fc(25, '\n            '),
                l.Mb(26, 'span', 11),
                l.Fc(27, '\n          '),
                l.Pb(),
                l.Fc(28, '\n\n          '),
                l.Qb(29, 'div', 12),
                l.Fc(30, '\n            '),
                l.Qb(31, 'div', 13),
                l.Fc(32, '\n              '),
                l.Qb(33, 'video', 14),
                l.Fc(34, '\n                '),
                l.Mb(35, 'source', 15),
                l.Fc(36, '\n              '),
                l.Pb(),
                l.Fc(37, '\n            '),
                l.Pb(),
                l.Fc(38, '\n            '),
                l.Mb(39, 'div', 16),
                l.Fc(40, '\n          '),
                l.Pb(),
                l.Fc(41, '\n        '),
                l.Pb(),
                l.Fc(42, '\n      '),
                l.Pb(),
                l.Fc(43, '\n\n      '),
                l.Qb(44, 'div', 17),
                l.Fc(45, '\n        '),
                l.Qb(46, 'div', 18),
                l.Fc(47, '\n          '),
                l.Mb(48, 'i', 19),
                l.Fc(49, '\n          '),
                l.Qb(50, 'h2', 20),
                l.Fc(51),
                l.gc(52, 'translate'),
                l.Pb(),
                l.Fc(53, '\n        '),
                l.Pb(),
                l.Fc(54, '\n\n        '),
                l.Qb(55, 'ul', 21),
                l.Fc(56, '\n          '),
                l.Dc(57, M, 16, 6, 'li', 22),
                l.Fc(58, '\n        '),
                l.Pb(),
                l.Fc(59, '\n      '),
                l.Pb(),
                l.Fc(60, '\n    '),
                l.Pb(),
                l.Fc(61, '\n  '),
                l.Pb(),
                l.Fc(62, '\n'),
                l.Pb(),
                l.Fc(63, '\n')),
                2 & n &&
                  (l.xb(51),
                  l.Hc(
                    '\n            ',
                    l.hc(
                      52,
                      2,
                      'HOME.APP_LANDING_HEADING.TWIN_PHONE_LEFT_LIST.WE_ARE_YOUR_PATH_TO_SUCCESS'
                    ),
                    '\n          '
                  ),
                  l.xb(6),
                  l.kc('ngForOf', e.elements));
            },
            directives: [g.j, f.a, g.k],
            pipes: [r.b],
            styles: ['']
          })),
          n
        );
      })();
      function L(n, e) {
        if (
          (1 & n &&
            (l.Qb(0, 'div', 7),
            l.Fc(1, '\n        '),
            l.Mb(2, 'img', 8),
            l.Fc(3, '\n      '),
            l.Pb()),
          2 & n)
        ) {
          const n = e.$implicit;
          l.xb(2),
            l.mc(
              'src',
              'assets/images/app-landing/screens/app/',
              n,
              '.png',
              l.yc
            );
        }
      }
      const T = function() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      };
      let S = (() => {
          class n {
            constructor(n) {
              (this.translate = n),
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
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(e) {
              return new (e || n)(l.Lb(r.c));
            }),
            (n.ɵcmp = l.Fb({
              type: n,
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
                  (l.Fc(0, '\n'),
                  l.Qb(1, 'section', 0),
                  l.Fc(2, '\n  '),
                  l.Qb(3, 'div', 1),
                  l.Fc(4, '\n    '),
                  l.Qb(5, 'div', 2),
                  l.Fc(6, '\n      '),
                  l.Qb(7, 'h2', 3),
                  l.Fc(8),
                  l.gc(9, 'translate'),
                  l.Pb(),
                  l.Fc(10, '\n      '),
                  l.Qb(11, 'p', 4),
                  l.Fc(12),
                  l.gc(13, 'translate'),
                  l.Pb(),
                  l.Fc(14, '\n    '),
                  l.Pb(),
                  l.Fc(15, '\n\n    '),
                  l.Qb(16, 'swiper', 5),
                  l.Fc(17, '\n      '),
                  l.Dc(18, L, 4, 1, 'div', 6),
                  l.Fc(19, '\n    '),
                  l.Pb(),
                  l.Fc(20, '\n  '),
                  l.Pb(),
                  l.Fc(21, '\n'),
                  l.Pb(),
                  l.Fc(22, '\n')),
                  2 & n &&
                    (l.xb(8),
                    l.Hc(
                      '\n        ',
                      l.hc(9, 4, 'SCREENSHOTS.APP.APP_SCREENSHOTS'),
                      '\n      '
                    ),
                    l.xb(4),
                    l.Hc(
                      '\n        ',
                      l.hc(
                        13,
                        6,
                        'SCREENSHOTS.APP.A_PICTURE_IS_WORTH_A_THOUSAND_WORDS'
                      ),
                      '\n      '
                    ),
                    l.xb(4),
                    l.kc('config', e.config),
                    l.xb(2),
                    l.kc('ngForOf', l.nc(8, T)));
              },
              directives: [o.a, g.j],
              pipes: [r.b],
              styles: ['']
            })),
            n
          );
        })(),
        G = (() => {
          class n {
            constructor(n) {
              this.translate = n;
            }
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(e) {
              return new (e || n)(l.Lb(r.c));
            }),
            (n.ɵcmp = l.Fb({
              type: n,
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
                  (l.Qb(0, 'section', 0),
                  l.Fc(1, '\n  '),
                  l.Qb(2, 'div', 1),
                  l.Fc(3, '\n    '),
                  l.Qb(4, 'div', 2),
                  l.Fc(5, '\n      '),
                  l.Qb(6, 'div', 3),
                  l.Fc(7, '\n        '),
                  l.Qb(8, 'p', 4),
                  l.Fc(9),
                  l.gc(10, 'translate'),
                  l.Pb(),
                  l.Fc(11, '\n        '),
                  l.Qb(12, 'h2'),
                  l.Fc(13),
                  l.gc(14, 'translate'),
                  l.Pb(),
                  l.Fc(15, '\n        '),
                  l.Qb(16, 'p', 5),
                  l.Fc(17),
                  l.gc(18, 'translate'),
                  l.Pb(),
                  l.Fc(19, '\n      '),
                  l.Pb(),
                  l.Fc(20, '\n\n      '),
                  l.Qb(21, 'nav', 6),
                  l.Fc(22, '\n        '),
                  l.Qb(23, 'a', 7),
                  l.Fc(24, '\n          '),
                  l.Mb(25, 'img', 8),
                  l.Fc(26, '\n          '),
                  l.Qb(27, 'p', 9),
                  l.Fc(28, '\n            '),
                  l.Qb(29, 'span', 10),
                  l.Fc(30),
                  l.gc(31, 'translate'),
                  l.Pb(),
                  l.Fc(32, '\n            '),
                  l.Qb(33, 'span', 11),
                  l.Fc(34),
                  l.gc(35, 'translate'),
                  l.Pb(),
                  l.Fc(36, '\n          '),
                  l.Pb(),
                  l.Fc(37, '\n        '),
                  l.Pb(),
                  l.Fc(38, '\n\n        '),
                  l.Qb(39, 'a', 12),
                  l.Fc(40, '\n          '),
                  l.Mb(41, 'img', 13),
                  l.Fc(42, '\n          '),
                  l.Qb(43, 'p', 9),
                  l.Fc(44, '\n            '),
                  l.Qb(45, 'span', 10),
                  l.Fc(46),
                  l.gc(47, 'translate'),
                  l.Pb(),
                  l.Fc(48, '\n            '),
                  l.Qb(49, 'span', 14),
                  l.Fc(50),
                  l.gc(51, 'translate'),
                  l.Pb(),
                  l.Fc(52, '\n          '),
                  l.Pb(),
                  l.Fc(53, '\n        '),
                  l.Pb(),
                  l.Fc(54, '\n      '),
                  l.Pb(),
                  l.Fc(55, '\n    '),
                  l.Pb(),
                  l.Fc(56, '\n  '),
                  l.Pb(),
                  l.Fc(57, '\n'),
                  l.Pb(),
                  l.Fc(58, '\n')),
                  2 & n &&
                    (l.xb(9),
                    l.Hc(
                      '\n          ',
                      l.hc(
                        10,
                        7,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.START_TODAY'
                      ),
                      '\n        '
                    ),
                    l.xb(4),
                    l.Hc(
                      '\n          ',
                      l.hc(
                        14,
                        9,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.DOWNLOAD_THE_APP'
                      ),
                      '\n        '
                    ),
                    l.xb(4),
                    l.Hc(
                      '\n          ',
                      l.hc(
                        18,
                        11,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.DOWNLOAD_EVERYTHING'
                      ),
                      '\n        '
                    ),
                    l.xb(13),
                    l.Gc(
                      l.hc(
                        31,
                        13,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.GET_IT_ON_THE'
                      )
                    ),
                    l.xb(4),
                    l.Gc(
                      l.hc(
                        35,
                        15,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.APP_STORE'
                      )
                    ),
                    l.xb(12),
                    l.Gc(
                      l.hc(
                        47,
                        17,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.DOWNLOAD_ON'
                      )
                    ),
                    l.xb(4),
                    l.Gc(
                      l.hc(
                        51,
                        19,
                        'HOME.APP_LANDING_HEADING.DOWNLOAD.GOOGLE_PLAY'
                      )
                    ));
              },
              pipes: [r.b],
              styles: ['']
            })),
            n
          );
        })();
      var C = t('iLZQ');
      const R = [
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
                  'HOME.NETWORK_SEARCH_META.TITLE',
                  'HOME.NETWORK_SEARCH_META.KEYWORDS'
                );
              }
            }
            return (
              (n.ɵfac = function(e) {
                return new (e || n)(l.Lb(u.a));
              }),
              (n.ɵcmp = l.Fb({
                type: n,
                selectors: [['dc-app-landing']],
                decls: 18,
                vars: 0,
                template: function(n, e) {
                  1 & n &&
                    (l.Mb(0, 'dc-app-landing-heading'),
                    l.Fc(1, '\n'),
                    l.Mb(2, 'dc-slider-icons'),
                    l.Fc(3, '\n'),
                    l.Mb(4, 'dc-app-landing-feature-cards'),
                    l.Fc(5, '\n\n'),
                    l.Mb(6, 'dc-app-landing-twin-phone-right-list'),
                    l.Fc(7, '\n'),
                    l.Mb(8, 'dc-app-landing-twin-phone-left-list'),
                    l.Fc(9, '\n'),
                    l.Fc(10, '\n'),
                    l.Mb(11, 'dc-screenshots-app'),
                    l.Fc(12, '\n'),
                    l.Fc(13, '\n'),
                    l.Mb(14, 'dc-app-landing-download'),
                    l.Fc(15, '\n\n'),
                    l.Mb(16, 'dc-footer2'),
                    l.Fc(17, '\n'));
                },
                directives: [m, h.a, E, D, k, S, G, C.a],
                styles: ['']
              })),
              n
            );
          })(),
          data: { title: Object(u.c)('DefAgent - Ai Agent Engine for defense') }
        }
      ];
      let j = (() => {
          class n {}
          return (
            (n.ɵmod = l.Jb({ type: n })),
            (n.ɵinj = l.Ib({
              factory: function(e) {
                return new (e || n)();
              },
              imports: [[b.g.forChild(R)]]
            })),
            n
          );
        })(),
        W = (() => {
          class n {}
          return (
            (n.ɵmod = l.Jb({ type: n })),
            (n.ɵinj = l.Ib({
              factory: function(e) {
                return new (e || n)();
              },
              imports: [[i.a, p.a, a.a, s.a, c.a, d, j, r.a.forChild()]]
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
      var i = t('M0ag'),
        a = t('+tcz'),
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
            imports: [[i.a, a.a, s.a.forChild()]]
          })),
          n
        );
      })();
    },
    pu65: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return o;
      });
      var i = t('nhfI'),
        a = t('M0ag'),
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
            imports: [[i.c, a.a, s.a.forChild()]]
          })),
          n
        );
      })();
    }
  }
]);
