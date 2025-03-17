(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '+tcz': function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return c;
      }),
        e.d(t, 'b', function() {
          return r;
        });
      var i = e('fXoL'),
        a = function() {
          return (a =
            Object.assign ||
            function(n) {
              for (var t, e = 1, i = arguments.length; e < i; e++)
                for (var a in (t = arguments[e]))
                  Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
              return n;
            }).apply(this, arguments);
        },
        s = (function() {
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
                    : i.startVal + (t / i.duration) * (i.endVal - i.startVal)),
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
                  o,
                  r = n < 0 ? '-' : '';
                if (
                  ((t = Math.abs(n).toFixed(i.options.decimalPlaces)),
                  (a = (e = (t += '').split('.'))[0]),
                  (s = e.length > 1 ? i.options.decimal + e[1] : ''),
                  i.options.useGrouping)
                ) {
                  o = '';
                  for (var c = 0, l = a.length; c < l; ++c)
                    0 !== c && c % 3 == 0 && (o = i.options.separator + o),
                      (o = a[l - c - 1] + o);
                  a = o;
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
                  r + i.options.prefix + a + s + i.options.suffix
                );
              }),
              (this.easeOutExpo = function(n, t, e, i) {
                return (e * (1 - Math.pow(2, (-10 * n) / i)) * 1024) / 1023 + t;
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
              (this.endVal = this.validateValue(t)),
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
        o = e('ofXK');
      let r = (() => {
          let n = class {
            constructor(n, t, e) {
              (this.el = n),
                (this.zone = t),
                (this.platformId = e),
                (this.options = {}),
                (this.reanimateOnClick = !0),
                (this.complete = new i.n());
            }
            onClick() {
              this.reanimateOnClick && this.animate();
            }
            ngOnChanges(n) {
              Object(o.v)(this.platformId) &&
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
            (n.ɵfac = function(t) {
              return new (t || n)(i.Lb(i.l), i.Lb(i.z), i.Lb(i.B));
            }),
            (n.ɵdir = i.Gb({
              type: n,
              selectors: [['', 'countUp', '']],
              hostBindings: function(n, t) {
                1 & n &&
                  i.bc('click', function() {
                    return t.onClick();
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
        c = (() => {
          let n = class {};
          return (
            (n.ɵmod = i.Jb({ type: n })),
            (n.ɵinj = i.Ib({
              factory: function(t) {
                return new (t || n)();
              },
              imports: [[]]
            })),
            n
          );
        })();
    },
    '2d4A': function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return c;
      });
      var i = e('nhfI'),
        a = e('6NWb'),
        s = e('M0ag'),
        o = e('sYmb'),
        r = e('fXoL');
      let c = (() => {
        class n {}
        return (
          (n.ɵmod = r.Jb({ type: n })),
          (n.ɵinj = r.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[i.c, a.b, s.a, o.a.forChild()]]
          })),
          n
        );
      })();
    },
    '8klf': function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return r;
      });
      var i = e('M0ag'),
        a = e('tyNb'),
        s = e('sYmb'),
        o = e('fXoL');
      let r = (() => {
        class n {}
        return (
          (n.ɵmod = o.Jb({ type: n })),
          (n.ɵinj = o.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[i.a, a.g, s.a.forChild()]]
          })),
          n
        );
      })();
    },
    ORAR: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return o;
      });
      var i = e('tyNb'),
        a = e('sYmb'),
        s = e('fXoL');
      let o = (() => {
        class n {}
        return (
          (n.ɵmod = s.Jb({ type: n })),
          (n.ɵinj = s.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[i.g, a.a.forChild()]]
          })),
          n
        );
      })();
    },
    P6su: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return c;
      });
      var i = e('1kSV'),
        a = e('M0ag'),
        s = e('hKFN'),
        o = e('sYmb'),
        r = e('fXoL');
      let c = (() => {
        class n {}
        return (
          (n.ɵmod = r.Jb({ type: n })),
          (n.ɵinj = r.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            providers: [s.a],
            imports: [[a.a, i.c, o.a.forChild()]]
          })),
          n
        );
      })();
    },
    V6j0: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return r;
      });
      var i = e('M0ag'),
        a = e('+tcz'),
        s = e('sYmb'),
        o = e('fXoL');
      let r = (() => {
        class n {}
        return (
          (n.ɵmod = o.Jb({ type: n })),
          (n.ɵinj = o.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[i.a, a.a, s.a.forChild()]]
          })),
          n
        );
      })();
    },
    ZuuT: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return F;
      });
      var i = e('fXoL'),
        a = e('sYmb'),
        s = e('ofXK'),
        o = e('wHSu'),
        r = e('hKFN'),
        c = e('1kSV'),
        l = e('6NWb');
      function u(n, t) {
        if (
          (1 & n &&
            (i.Qb(0, 'button', 6),
            i.Fc(1, '\n        '),
            i.Mb(2, 'fa-icon', 7),
            i.Fc(3),
            i.Pb()),
          2 & n)
        ) {
          const n = i.fc(2).$implicit,
            t = i.fc();
          i.xb(2),
            i.kc('icon', t.chevronDown),
            i.xb(1),
            i.Hc('\n        ', n.question.es, '\n      ');
        }
      }
      function d(n, t) {
        if (
          (1 & n &&
            (i.Qb(0, 'button', 6),
            i.Fc(1, '\n        '),
            i.Mb(2, 'fa-icon', 7),
            i.Fc(3),
            i.Pb()),
          2 & n)
        ) {
          const n = i.fc(2).$implicit,
            t = i.fc();
          i.xb(2),
            i.kc('icon', t.chevronDown),
            i.xb(1),
            i.Hc('\n        ', n.question.en, '\n      ');
        }
      }
      function b(n, t) {
        if (
          (1 & n &&
            (i.Fc(0, '\n      '),
            i.Dc(1, u, 4, 2, 'button', 5),
            i.Fc(2, '\n      '),
            i.Dc(3, d, 4, 2, 'button', 5),
            i.Fc(4, '\n    ')),
          2 & n)
        ) {
          const n = i.fc(2);
          i.xb(1),
            i.kc('ngIf', 'es' === n.translate.currentLang),
            i.xb(2),
            i.kc('ngIf', 'en-US' === n.translate.currentLang);
        }
      }
      function p(n, t) {
        if ((1 & n && i.Mb(0, 'div', 9), 2 & n)) {
          const n = i.fc(2).$implicit;
          i.kc('innerHTML', n.answer.es, i.wc);
        }
      }
      function m(n, t) {
        if ((1 & n && i.Mb(0, 'div', 9), 2 & n)) {
          const n = i.fc(2).$implicit;
          i.kc('innerHTML', n.answer.en, i.wc);
        }
      }
      function h(n, t) {
        if (
          (1 & n &&
            (i.Fc(0, '\n      '),
            i.Dc(1, p, 1, 1, 'div', 8),
            i.Fc(2, '\n      '),
            i.Dc(3, m, 1, 1, 'div', 8),
            i.Fc(4, '\n    ')),
          2 & n)
        ) {
          const n = i.fc(2);
          i.xb(1),
            i.kc('ngIf', 'es' === n.translate.currentLang),
            i.xb(2),
            i.kc('ngIf', 'en-US' === n.translate.currentLang);
        }
      }
      function g(n, t) {
        1 & n &&
          (i.Qb(0, 'ngb-panel'),
          i.Fc(1, '\n    '),
          i.Dc(2, b, 5, 2, 'ng-template', 3),
          i.Fc(3, '\n\n    '),
          i.Dc(4, h, 5, 2, 'ng-template', 4),
          i.Fc(5, '\n  '),
          i.Pb());
      }
      let f = (() => {
          class n {
            constructor(n, t, e) {
              (this.faqService = t),
                (this.translate = e),
                (this.chevronDown = o.e),
                (this.faqs = []),
                (n.closeOthers = !0);
            }
            ngOnInit() {
              this.faqService.getFaqs().subscribe(n => (this.faqs = n));
            }
          }
          return (
            (n.ɵfac = function(t) {
              return new (t || n)(i.Lb(c.b), i.Lb(r.a), i.Lb(a.c));
            }),
            (n.ɵcmp = i.Fb({
              type: n,
              selectors: [['dc-faqs-accordion']],
              features: [i.wb([c.b])],
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
              template: function(n, t) {
                1 & n &&
                  (i.Qb(0, 'ngb-accordion', 0, 1),
                  i.Fc(2, '\n  '),
                  i.Dc(3, g, 6, 0, 'ngb-panel', 2),
                  i.Fc(4, '\n'),
                  i.Pb(),
                  i.Fc(5, '\n')),
                  2 & n && (i.xb(3), i.kc('ngForOf', t.faqs));
              },
              directives: [c.a, s.j, c.i, c.k, c.j, s.k, c.l, l.a],
              styles: ['']
            })),
            n
          );
        })(),
        F = (() => {
          class n {
            constructor(n) {
              this.translate = n;
            }
            ngOnInit() {}
          }
          return (
            (n.ɵfac = function(t) {
              return new (t || n)(i.Lb(a.c));
            }),
            (n.ɵcmp = i.Fb({
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
              template: function(n, t) {
                1 & n &&
                  (i.Qb(0, 'section', 0),
                  i.Fc(1, '\n  '),
                  i.Qb(2, 'div', 1),
                  i.Fc(3, '\n    '),
                  i.Qb(4, 'div', 2),
                  i.Fc(5, '\n      '),
                  i.Qb(6, 'div', 3),
                  i.Fc(7, '\n        '),
                  i.Qb(8, 'h2'),
                  i.Fc(9),
                  i.gc(10, 'translate'),
                  i.Qb(11, 'span', 4),
                  i.Fc(12),
                  i.gc(13, 'translate'),
                  i.Pb(),
                  i.Fc(14, '\n        '),
                  i.Pb(),
                  i.Fc(15, '\n\n        '),
                  i.Qb(16, 'p', 5),
                  i.Fc(17),
                  i.gc(18, 'translate'),
                  i.Pb(),
                  i.Fc(19, '\n\n        '),
                  i.Qb(20, 'p', 6),
                  i.Fc(21),
                  i.gc(22, 'translate'),
                  i.Pb(),
                  i.Fc(23, '\n      '),
                  i.Pb(),
                  i.Fc(24, '\n\n      '),
                  i.Qb(25, 'div', 7),
                  i.Fc(26, '\n        '),
                  i.Qb(27, 'div', 8),
                  i.Fc(28, '\n          '),
                  i.Mb(29, 'dc-faqs-accordion'),
                  i.Fc(30, '\n        '),
                  i.Pb(),
                  i.Fc(31, '\n      '),
                  i.Pb(),
                  i.Fc(32, '\n    '),
                  i.Pb(),
                  i.Fc(33, '\n  '),
                  i.Pb(),
                  i.Fc(34, '\n'),
                  i.Pb(),
                  i.Fc(35, '\n')),
                  2 & n &&
                    (i.Bb(
                      'section ',
                      t.background ? 'bg-' + t.background : '',
                      ' ',
                      t.edge ? 'edge ' + t.edge : '',
                      ''
                    ),
                    i.kc('ngClass', t.classes),
                    i.xb(9),
                    i.Hc(
                      '\n          ',
                      i.hc(10, 9, 'FAQS.FAQS1.DO_YOU_HAVE'),
                      '\n          '
                    ),
                    i.xb(3),
                    i.Gc(i.hc(13, 11, 'FAQS.FAQS1.QUESTIONS')),
                    i.xb(5),
                    i.Hc(
                      '\n          ',
                      i.hc(18, 13, 'FAQS.FAQS1.NOT_SURE_HOW'),
                      '\n        '
                    ),
                    i.xb(4),
                    i.Hc(
                      '\n          ',
                      i.hc(22, 15, 'FAQS.FAQS1.HERE_ARE_THE_ANSWERS'),
                      '\n        '
                    ));
              },
              directives: [s.i, f],
              pipes: [a.b],
              styles: ['']
            })),
            n
          );
        })();
    },
    dYDE: function(n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, 'SmartBusinessModule', function() {
          return R;
        });
      var i = e('M0ag'),
        a = e('XMwz'),
        s = e('V6j0'),
        o = e('2d4A'),
        r = e('pu65'),
        c = e('ORAR'),
        l = e('8klf'),
        u = e('P6su'),
        d = e('M0Rk'),
        b = e('tyNb'),
        p = e('ey9i'),
        m = e('fXoL'),
        h = e('8ynp'),
        g = e('wHSu'),
        f = e('6NWb');
      let F = (() => {
        class n {
          constructor() {
            this.tag = g.t;
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)();
          }),
          (n.ɵcmp = m.Fb({
            type: n,
            selectors: [['dc-smart-business-heading']],
            decls: 58,
            vars: 3,
            consts: [
              [1, 'section', 'page', 'header', 'smart-business-header'],
              [1, 'shape-wrapper'],
              [
                'src',
                'assets/img/v6/header/bg-shape.svg',
                'alt',
                '',
                1,
                'main-background',
                'img-responsive'
              ],
              [1, 'shape', 'shape-background', 'shape-top', 'center-xy'],
              [1, 'shape', 'shape-background', 'shape-right'],
              [1, 'container', 'overflow-hidden'],
              [1, 'row', 'gap-y'],
              [1, 'col-md-7'],
              [1, 'regular', 'small', 'text-uppercase', 'text-secondary'],
              [1, 'extra-bold', 'display-md-3', 'font-md'],
              [1, 'd-block', 'light'],
              [1, 'lead'],
              [1, 'nav', 'mt-5'],
              [
                'href',
                'https://everythink.ai/pages/pricing',
                1,
                'nav-link',
                'mr-3',
                'btn',
                'btn',
                'btn-rounded',
                'btn-outline-info',
                'bw-2'
              ],
              [3, 'icon'],
              [
                'href',
                'https://everythink.ai/app/#/sessions/signup',
                1,
                'nav-link',
                'btn',
                'btn-rounded',
                'btn-primary',
                'bw-2'
              ],
              [1, 'main-shape-wrapper'],
              ['data-aos', 'fade-left', 'data-aos-delay', '300'],
              [
                'src',
                'assets/img/v6/header/main-shape.svg',
                'alt',
                '',
                1,
                'img-responsive',
                'main-shape'
              ],
              [
                'src',
                'assets/img/v6/header/anim-1.svg',
                'alt',
                '',
                1,
                'anim',
                'anim-1',
                'floating'
              ],
              [
                'src',
                'assets/img/v6/header/anim-1.svg',
                'alt',
                '',
                1,
                'anim',
                'anim-2',
                'floating'
              ],
              [
                'src',
                'assets/img/v6/header/anim-1.svg',
                'alt',
                '',
                1,
                'anim',
                'anim-3',
                'floating'
              ]
            ],
            template: function(n, t) {
              1 & n &&
                (m.Qb(0, 'header', 0),
                m.Fc(1, '\n  '),
                m.Qb(2, 'div', 1),
                m.Fc(3, '\n    '),
                m.Mb(4, 'img', 2),
                m.Fc(5, '\n    '),
                m.Mb(6, 'div', 3),
                m.Fc(7, '\n    '),
                m.Mb(8, 'div', 4),
                m.Fc(9, '\n  '),
                m.Pb(),
                m.Fc(10, '\n\n  '),
                m.Qb(11, 'div', 5),
                m.Fc(12, '\n    '),
                m.Qb(13, 'div', 6),
                m.Fc(14, '\n      '),
                m.Qb(15, 'div', 7),
                m.Fc(16, '\n        '),
                m.Qb(17, 'p', 8),
                m.Fc(
                  18,
                  '\n          innovative solutions for the demanding customer\n        '
                ),
                m.Pb(),
                m.Fc(19, '\n        '),
                m.Qb(20, 'h1', 9),
                m.Fc(21, '\n          Everythink '),
                m.Qb(22, 'span', 10),
                m.Fc(23, 'Smart business'),
                m.Pb(),
                m.Fc(24, '\n        '),
                m.Pb(),
                m.Fc(25, '\n        '),
                m.Qb(26, 'p', 11),
                m.Fc(
                  27,
                  '\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolore\n          excepturi explicabo, harum in laudantium nulla officiis reprehenderit!\n        '
                ),
                m.Pb(),
                m.Fc(28, '\n\n        '),
                m.Qb(29, 'nav', 12),
                m.Fc(30, '\n          '),
                m.Qb(31, 'a', 13),
                m.Fc(32, '\n            '),
                m.Mb(33, 'fa-icon', 14),
                m.Fc(34, ' Plans & pricing\n          '),
                m.Pb(),
                m.Fc(35, '\n\n          '),
                m.Qb(36, 'a', 15),
                m.Fc(37, '\n            Start now\n          '),
                m.Pb(),
                m.Fc(38, '\n        '),
                m.Pb(),
                m.Fc(39, '\n      '),
                m.Pb(),
                m.Fc(40, '\n    '),
                m.Pb(),
                m.Fc(41, '\n  '),
                m.Pb(),
                m.Fc(42, '\n\n  '),
                m.Qb(43, 'div', 16),
                m.Fc(44, '\n    '),
                m.Qb(45, 'div', 17),
                m.Fc(46, '\n      '),
                m.Mb(47, 'img', 18),
                m.Fc(48, '\n      '),
                m.Mb(49, 'img', 19),
                m.Fc(50, '\n      '),
                m.Mb(51, 'img', 20),
                m.Fc(52, '\n      '),
                m.Mb(53, 'img', 21),
                m.Fc(54, '\n    '),
                m.Pb(),
                m.Fc(55, '\n  '),
                m.Pb(),
                m.Fc(56, '\n'),
                m.Pb(),
                m.Fc(57, '\n')),
                2 & n && (m.xb(33), m.zb('mr-3'), m.kc('icon', t.tag));
            },
            directives: [f.a],
            styles: [
              '.header[_ngcontent-%COMP%]{background-color:#edf4f8}.container[_ngcontent-%COMP%]{padding-top:12rem!important;padding-bottom:6rem!important}@media (min-width:992px){.container[_ngcontent-%COMP%]{padding-bottom:12rem!important}}.shape-background[_ngcontent-%COMP%]{z-index:0;opacity:.2}.shape-top[_ngcontent-%COMP%]{top:0;background-image:linear-gradient(-57deg,#4a61d1,#5c52d5);transform:rotate(30deg) translate3D(-45%,-45%,0);max-height:560px}.shape-right[_ngcontent-%COMP%]{background-image:linear-gradient(-57deg,#5634d0,#4a61d1);left:93%}.main-shape-wrapper[_ngcontent-%COMP%]{width:60%}@media (max-width:991.98px){.main-shape-wrapper[_ngcontent-%COMP%]{position:relative;left:50%;transform:translateX(-50%)}}@media (min-width:992px){.main-shape-wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);right:0;width:40%}}@media (min-width:1200px){.main-shape-wrapper[_ngcontent-%COMP%]{transform:translateY(-50%) scale(.75)}}@media (min-width:1601px){.main-background[_ngcontent-%COMP%]{transform:translate3d(0,-3%,0)}}.anim[_ngcontent-%COMP%]{position:absolute;width:15%;max-width:80px}.anim.anim-1[_ngcontent-%COMP%]{top:56%;right:5%;-webkit-animation-duration:3.4s;animation-duration:3.4s}.anim.anim-2[_ngcontent-%COMP%]{top:10%;right:58%}.anim.anim-3[_ngcontent-%COMP%]{top:33%;right:22%;-webkit-animation-duration:3.8s;animation-duration:3.8s}'
            ]
          })),
          n
        );
      })();
      var v = e('f+4U'),
        w = e('ofXK'),
        y = e('1kSV');
      function P(n, t) {
        if (
          (1 & n &&
            (m.Qb(0, 'li'),
            m.Fc(1, '\n              '),
            m.Qb(2, 'p'),
            m.Fc(3),
            m.Qb(4, 'span'),
            m.Fc(5),
            m.Pb(),
            m.Fc(6, '\n              '),
            m.Pb(),
            m.Fc(7, '\n              '),
            m.Mb(8, 'ngb-progressbar', 12),
            m.Fc(9, '\n            '),
            m.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          m.xb(3),
            m.Hc('\n                ', n.label, ''),
            m.xb(2),
            m.Hc('', n.value, '%'),
            m.xb(3),
            m.kc('value', n.value);
        }
      }
      let x = (() => {
        class n {
          constructor() {
            this.bars = [
              {
                label: 'Implementation',
                value: 73,
                style: { progress: 'progress-xs' }
              },
              {
                label: 'Design',
                value: 91,
                style: { progress: 'progress-xs' }
              },
              {
                label: 'Beauty',
                value: 97,
                style: { progress: 'progress-xs' }
              },
              {
                label: 'Branding',
                value: 61,
                style: { progress: 'progress-xs' }
              },
              {
                label: 'Responsiveness',
                value: 100,
                style: { progress: 'progress-xs' }
              }
            ];
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)();
          }),
          (n.ɵcmp = m.Fb({
            type: n,
            selectors: [['dc-smart-business-why-dashcore']],
            decls: 38,
            vars: 1,
            consts: [
              [1, 'section'],
              [1, 'container'],
              [1, 'row', 'gap-y', 'align-items-center'],
              [1, 'col-md-6'],
              [1, 'section-heading'],
              [1, 'text-primary', 'bold', 'small', 'text-uppercase'],
              [1, 'bold'],
              [1, 'regular'],
              [
                'href',
                'javascript:;',
                1,
                'btn',
                'btn-outline-primary',
                'btn-rounded',
                'bw-2',
                'mt-4'
              ],
              [1, 'animate-bars'],
              [
                1,
                'progress-bars',
                'whyus-progress-bars',
                'progress-horizontal'
              ],
              [4, 'ngFor', 'ngForOf'],
              ['type', 'primary', 'height', '4px', 3, 'value']
            ],
            template: function(n, t) {
              1 & n &&
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
                m.Qb(10, 'p', 5),
                m.Fc(11, 'some reasons'),
                m.Pb(),
                m.Fc(12, '\n          '),
                m.Qb(13, 'h2', 6),
                m.Fc(14, 'Why Choose EveryThink?'),
                m.Pb(),
                m.Fc(15, '\n        '),
                m.Pb(),
                m.Fc(16, '\n\n        '),
                m.Qb(17, 'p', 7),
                m.Fc(
                  18,
                  '\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci,\n          architecto asperiores dignissimos doloribus dolorum eos esse eum\n          laborum minima molestias, natus nostrum odio quia recusandae rem sequi\n          similique velit.\n        '
                ),
                m.Pb(),
                m.Fc(19, '\n\n        '),
                m.Qb(20, 'a', 8),
                m.Fc(21, 'Read More'),
                m.Pb(),
                m.Fc(22, '\n      '),
                m.Pb(),
                m.Fc(23, '\n\n      '),
                m.Qb(24, 'div', 3),
                m.Fc(25, '\n        '),
                m.Qb(26, 'div', 9),
                m.Fc(27, '\n          '),
                m.Qb(28, 'ul', 10),
                m.Fc(29, '\n            '),
                m.Dc(30, P, 10, 3, 'li', 11),
                m.Fc(31, '\n          '),
                m.Pb(),
                m.Fc(32, '\n        '),
                m.Pb(),
                m.Fc(33, '\n      '),
                m.Pb(),
                m.Fc(34, '\n    '),
                m.Pb(),
                m.Fc(35, '\n  '),
                m.Pb(),
                m.Fc(36, '\n'),
                m.Pb(),
                m.Fc(37, '\n')),
                2 & n && (m.xb(30), m.kc('ngForOf', t.bars));
            },
            directives: [w.j, y.m],
            styles: ['']
          })),
          n
        );
      })();
      var Q = e('AL06'),
        k = e('+tcz');
      function V(n, t) {
        if (
          (1 & n &&
            (m.Qb(0, 'div', 4),
            m.Fc(1, '\n        '),
            m.Qb(2, 'div', 5),
            m.Fc(3, '\n          '),
            m.Mb(4, 'dc-feather', 6),
            m.Fc(5, '\n          '),
            m.Qb(6, 'span', 7),
            m.Fc(7),
            m.Pb(),
            m.Fc(8, '\n        '),
            m.Pb(),
            m.Fc(9, '\n\n        '),
            m.Qb(10, 'p', 8),
            m.Fc(11),
            m.Pb(),
            m.Fc(12, '\n      '),
            m.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          m.xb(4),
            m.kc('name', n.icon)('iconClass', 'stroke-primary mr-2'),
            m.xb(2),
            m.kc('countUp', n.value),
            m.xb(1),
            m.Gc(n.value),
            m.xb(4),
            m.Gc(n.title);
        }
      }
      let M = (() => {
        class n {
          constructor() {
            this.counters = [
              { icon: 'box', value: 273, title: 'Components' },
              { icon: 'download-cloud', value: 654, title: 'Downloads' },
              { icon: 'sliders', value: 7941, title: 'Followers' },
              { icon: 'award', value: 654, title: 'New users' }
            ];
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)();
          }),
          (n.ɵcmp = m.Fb({
            type: n,
            selectors: [['dc-counter5']],
            decls: 11,
            vars: 1,
            consts: [
              [1, 'section'],
              [1, 'container', 'pt-0'],
              [1, 'row', 'gap-y', 'pt-5'],
              ['class', 'col-6 col-md-3', 4, 'ngFor', 'ngForOf'],
              [1, 'col-6', 'col-md-3'],
              [1, 'd-flex', 'align-items-center'],
              [3, 'name', 'iconClass'],
              [1, 'counter', 'bold', 'text-darker', 'font-md', 3, 'countUp'],
              [1, 'text-secondary', 'm-0']
            ],
            template: function(n, t) {
              1 & n &&
                (m.Qb(0, 'section', 0),
                m.Fc(1, '\n  '),
                m.Qb(2, 'div', 1),
                m.Fc(3, '\n    '),
                m.Qb(4, 'div', 2),
                m.Fc(5, '\n      '),
                m.Dc(6, V, 13, 5, 'div', 3),
                m.Fc(7, '\n    '),
                m.Pb(),
                m.Fc(8, '\n  '),
                m.Pb(),
                m.Fc(9, '\n'),
                m.Pb(),
                m.Fc(10, '\n')),
                2 & n && (m.xb(6), m.kc('ngForOf', t.counters));
            },
            directives: [w.j, Q.a, k.b],
            styles: ['']
          })),
          n
        );
      })();
      function A(n, t) {
        if (
          (1 & n &&
            (m.Qb(0, 'div', 9),
            m.Fc(1, '\n        '),
            m.Qb(2, 'div', 10),
            m.Fc(3, '\n          '),
            m.Qb(4, 'div', 11),
            m.Fc(5, '\n            '),
            m.Mb(6, 'fa-icon', 12),
            m.Fc(7, '\n          '),
            m.Pb(),
            m.Fc(8, '\n\n          '),
            m.Qb(9, 'div', 13),
            m.Fc(10, '\n            '),
            m.Qb(11, 'h5', 14),
            m.Fc(12),
            m.Pb(),
            m.Fc(13, '\n            '),
            m.Qb(14, 'p', 15),
            m.Fc(15),
            m.Pb(),
            m.Fc(16, '\n          '),
            m.Pb(),
            m.Fc(17, '\n        '),
            m.Pb(),
            m.Fc(18, '\n      '),
            m.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          m.xb(6),
            m.kc('icon', n.icon),
            m.xb(6),
            m.Gc(n.title),
            m.xb(3),
            m.Gc(n.description);
        }
      }
      let O = (() => {
        class n {
          constructor() {
            this.cards = [
              {
                icon: g.n,
                title: 'easy to integrate',
                description:
                  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
              },
              {
                icon: g.h,
                title: 'seamlessly solution',
                description:
                  'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
              }
            ];
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)();
          }),
          (n.ɵcmp = m.Fb({
            type: n,
            selectors: [['dc-smart-business-deserve-better']],
            decls: 27,
            vars: 1,
            consts: [
              [1, 'section', 'gradient', 'gradient-blue-purple'],
              [1, 'container', 'text-center', 'pb-7', 'pb-md-0'],
              [1, 'section-heading'],
              [1, 'bold', 'text-contrast'],
              [1, 'lead', 'text-light'],
              [1, 'section', 'mt-9n'],
              [1, 'container'],
              [1, 'row', 'gap-y'],
              ['class', 'col-md-6', 4, 'ngFor', 'ngForOf'],
              [1, 'col-md-6'],
              [1, 'rounded', 'media', 'bg-contrast', 'shadow-lg', 'p-4'],
              [
                'data-aos',
                'zoom-in',
                1,
                'shadow',
                'gradient',
                'gradient-purple-blue',
                'text-contrast',
                'rounded-circle',
                'mr-3',
                'icon-xl',
                'center-flex'
              ],
              ['size', '2x', 3, 'icon'],
              [1, 'media-body'],
              [1, 'bold', 'text-capitalize'],
              [1, 'text-secondary', 'mb-0']
            ],
            template: function(n, t) {
              1 & n &&
                (m.Qb(0, 'section', 0),
                m.Fc(1, '\n  '),
                m.Qb(2, 'div', 1),
                m.Fc(3, '\n    '),
                m.Qb(4, 'div', 2),
                m.Fc(5, '\n      '),
                m.Qb(6, 'h2', 3),
                m.Fc(7, 'You deserve better'),
                m.Pb(),
                m.Fc(8, '\n      '),
                m.Qb(9, 'p', 4),
                m.Fc(
                  10,
                  '\n        With Everythink you will not only get a beautiful Assistant to show off\n        your web, but a complete starter kit to bring your application to life\n        right away\n      '
                ),
                m.Pb(),
                m.Fc(11, '\n    '),
                m.Pb(),
                m.Fc(12, '\n  '),
                m.Pb(),
                m.Fc(13, '\n'),
                m.Pb(),
                m.Fc(14, '\n\n'),
                m.Fc(15, '\n'),
                m.Qb(16, 'section', 5),
                m.Fc(17, '\n  '),
                m.Qb(18, 'div', 6),
                m.Fc(19, '\n    '),
                m.Qb(20, 'div', 7),
                m.Fc(21, '\n      '),
                m.Dc(22, A, 19, 3, 'div', 8),
                m.Fc(23, '\n    '),
                m.Pb(),
                m.Fc(24, '\n  '),
                m.Pb(),
                m.Fc(25, '\n'),
                m.Pb(),
                m.Fc(26, '\n')),
                2 & n && (m.xb(22), m.kc('ngForOf', t.cards));
            },
            directives: [w.j, f.a],
            styles: ['']
          })),
          n
        );
      })();
      const E = function(n, t) {
        return { 'left.%': n, 'top.%': t };
      };
      function D(n, t) {
        if (
          (1 & n &&
            (m.Qb(0, 'div', 11),
            m.Fc(1, '\n            '),
            m.Mb(2, 'img', 12),
            m.Fc(3, '\n          '),
            m.Pb()),
          2 & n)
        ) {
          const n = t.$implicit;
          m.Ab(
            'floating icon ',
            n.size,
            ' bg-contrast rounded-circle p-3 shadow m-0 absolute d-flex justify-content-center align-items-center'
          ),
            m.kc('ngStyle', m.pc(5, E, n.position.left, n.position.top)),
            m.xb(2),
            m.kc('src', 'assets/img/integration/' + n.name + '.svg', m.yc);
        }
      }
      let I = (() => {
        class n {
          constructor() {
            this.icons = [
              {
                name: 'blossom',
                size: 'icon-xl',
                position: { left: 100, top: 30 }
              },
              {
                name: 'dockbit',
                size: 'icon-xxl',
                position: { left: 60, top: -10 }
              },
              {
                name: 'zapier',
                size: 'icon-xxl',
                position: { left: 25, top: 0 }
              },
              {
                name: 'bitnami',
                size: 'icon-2xl',
                position: { left: 0, top: 50 }
              },
              {
                name: 'slack',
                size: 'icon-2xxl',
                position: { left: 23, top: 70 }
              },
              {
                name: 'monero',
                size: 'icon-xxl',
                position: { left: 65, top: 44 }
              },
              {
                name: 'dropbox',
                size: 'icon-xl',
                position: { left: 95, top: 83 }
              }
            ];
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)();
          }),
          (n.ɵcmp = m.Fb({
            type: n,
            selectors: [['dc-integration-floating-icons']],
            decls: 40,
            vars: 1,
            consts: [
              [1, 'section', 'extending-core'],
              [1, 'shape', 'shape-background', 'top', 'shape-left', 'bg-light'],
              [1, 'container'],
              [1, 'row', 'gap-y', 'align-items-center'],
              [1, 'col-lg-6'],
              [1, 'section-heading'],
              [1, 'text-primary', 'bold', 'small', 'text-uppercase'],
              [
                'href',
                '#',
                1,
                'btn',
                'btn-rounded',
                'btn-outline-primary',
                'bw-2',
                'mr-3'
              ],
              [
                'href',
                '#',
                1,
                'btn',
                'btn-rounded',
                'btn-outline-contrast',
                'bw-2',
                'bold',
                'gradient',
                'gradient-purple-blue',
                'text-contrast'
              ],
              [1, 'icons-wrapper', 'position-relative'],
              [
                'data-aos',
                'fade-left',
                3,
                'class',
                'ngStyle',
                4,
                'ngFor',
                'ngForOf'
              ],
              ['data-aos', 'fade-left', 3, 'ngStyle'],
              ['alt', '', 1, 'img-responsive', 3, 'src']
            ],
            template: function(n, t) {
              1 & n &&
                (m.Qb(0, 'section', 0),
                m.Fc(1, '\n  '),
                m.Mb(2, 'div', 1),
                m.Fc(3, '\n\n  '),
                m.Qb(4, 'div', 2),
                m.Fc(5, '\n    '),
                m.Qb(6, 'div', 3),
                m.Fc(7, '\n      '),
                m.Qb(8, 'div', 4),
                m.Fc(9, '\n        '),
                m.Qb(10, 'div', 5),
                m.Fc(11, '\n          '),
                m.Qb(12, 'p', 6),
                m.Fc(13, '\n            enterprise integration\n          '),
                m.Pb(),
                m.Fc(14, '\n          '),
                m.Qb(15, 'h2'),
                m.Fc(16, 'Extend Everythink'),
                m.Pb(),
                m.Fc(17, '\n          '),
                m.Qb(18, 'p'),
                m.Fc(
                  19,
                  '\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi\n            ipsum iste iure nihil non obcaecati quasi, sit? Aperiam asperiores\n            atque, commodi debitis fugiat in nemo optio sint velit. Pariatur,\n            sint!\n          '
                ),
                m.Pb(),
                m.Fc(20, '\n        '),
                m.Pb(),
                m.Fc(21, '\n        '),
                m.Qb(22, 'a', 7),
                m.Fc(23, 'Know More'),
                m.Pb(),
                m.Fc(24, '\n        '),
                m.Qb(25, 'a', 8),
                m.Fc(26, 'Register Account'),
                m.Pb(),
                m.Fc(27, '\n      '),
                m.Pb(),
                m.Fc(28, '\n\n      '),
                m.Qb(29, 'div', 4),
                m.Fc(30, '\n        '),
                m.Qb(31, 'div', 9),
                m.Fc(32, '\n          '),
                m.Dc(33, D, 4, 8, 'div', 10),
                m.Fc(34, '\n        '),
                m.Pb(),
                m.Fc(35, '\n      '),
                m.Pb(),
                m.Fc(36, '\n    '),
                m.Pb(),
                m.Fc(37, '\n  '),
                m.Pb(),
                m.Fc(38, '\n'),
                m.Pb(),
                m.Fc(39, '\n')),
                2 & n && (m.xb(33), m.kc('ngForOf', t.icons));
            },
            directives: [w.j, w.l],
            styles: ['']
          })),
          n
        );
      })();
      var C = e('nhfI');
      function S(n, t) {
        if (
          (1 & n &&
            (m.Qb(0, 'div', 9),
            m.Fc(1, '\n          '),
            m.Qb(2, 'div', 10),
            m.Fc(3, '\n            '),
            m.Qb(4, 'div', 11),
            m.Fc(5, '\n              '),
            m.Qb(6, 'figure', 12),
            m.Fc(7, '\n                '),
            m.Mb(8, 'img', 13),
            m.Fc(9, '\n              '),
            m.Pb(),
            m.Fc(10, '\n            '),
            m.Pb(),
            m.Fc(11, '\n\n            '),
            m.Qb(12, 'div', 14),
            m.Fc(13, '\n              '),
            m.Qb(14, 'div', 15),
            m.Fc(15, '\n                '),
            m.Qb(16, 'blockquote', 16),
            m.Fc(17, '\n                  '),
            m.Mb(18, 'fa-icon', 17),
            m.Fc(
              19,
              '\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                  Aliquid amet aspernatur, autem deserunt distinctio dolores\n                  eius, exercitationem facilis inventore.\n                '
            ),
            m.Pb(),
            m.Fc(20, '\n\n                '),
            m.Qb(21, 'div', 18),
            m.Fc(22, '\n                  '),
            m.Qb(23, 'p', 19),
            m.Fc(24, '\n                    '),
            m.Qb(25, 'span', 20),
            m.Fc(26),
            m.Pb(),
            m.Fc(27, '\n                    Web Developer\n                  '),
            m.Pb(),
            m.Fc(28, '\n\n                  '),
            m.Mb(29, 'img', 21),
            m.Fc(30, '\n                '),
            m.Pb(),
            m.Fc(31, '\n\n                '),
            m.Qb(32, 'div', 22),
            m.Fc(33, '\n                  '),
            m.ec(),
            m.Qb(34, 'svg', 23),
            m.Fc(35, '\n                    '),
            m.Mb(36, 'path', 24),
            m.Fc(37, '\n                  '),
            m.Pb(),
            m.Fc(38, '\n\n                  '),
            m.Qb(39, 'svg', 25),
            m.Fc(40, '\n                    '),
            m.Mb(41, 'path', 26),
            m.Fc(42, '\n                  '),
            m.Pb(),
            m.Fc(43, '\n\n                  '),
            m.Qb(44, 'svg', 27),
            m.Fc(45, '\n                    '),
            m.Mb(46, 'path', 28),
            m.Fc(47, '\n                  '),
            m.Pb(),
            m.Fc(48, '\n                '),
            m.Pb(),
            m.Fc(49, '\n              '),
            m.Pb(),
            m.Fc(50, '\n            '),
            m.Pb(),
            m.Fc(51, '\n          '),
            m.Pb(),
            m.Fc(52, '\n        '),
            m.Pb()),
          2 & n)
        ) {
          const n = t.$implicit,
            e = t.index,
            i = m.fc();
          m.xb(8),
            m.kc('src', 'assets/img/v6/reviews/' + (e + 1) + '.jpg', m.yc),
            m.xb(10),
            m.kc('icon', i.fa.quoteLeft),
            m.xb(8),
            m.Hc('', n.author, ',');
        }
      }
      let q = (() => {
        class n {
          constructor() {
            (this.fa = {
              longArrowAltRight: g.l,
              longArrowAltLeft: g.k,
              quoteLeft: g.q
            }),
              (this.reviews = [
                {
                  author: 'Jane Doe',
                  title: ['Social ', 'Integration'],
                  description: '',
                  image: ''
                },
                {
                  author: 'Lorem Team',
                  title: ['Design ', 'Strategy'],
                  description: '',
                  image: ''
                },
                {
                  author: 'Ipsum Team',
                  title: ['Save ', 'Money'],
                  description: '',
                  image: ''
                },
                {
                  author: 'Priscilla Campbell',
                  title: ['Business ', 'Brain'],
                  description: '',
                  image: ''
                },
                {
                  author: 'Edith Fisher',
                  title: ['Worldwide ', 'Support'],
                  description: '',
                  image: ''
                },
                {
                  author: 'Kenneth Reyes',
                  title: ['Social ', 'Settings'],
                  description: '',
                  image: ''
                },
                {
                  author: 'Daniel Hamilton',
                  title: ['Insightful', 'Statistics'],
                  description: '',
                  image: ''
                }
              ]),
              (this.config = {
                slidesPerView: 1,
                autoplay: !1,
                navigation: {
                  nextEl: '.reviews-nav-next',
                  prevEl: '.reviews-nav-prev'
                },
                pagination: !1
              });
          }
          ngOnInit() {}
        }
        return (
          (n.ɵfac = function(t) {
            return new (t || n)();
          }),
          (n.ɵcmp = m.Fb({
            type: n,
            selectors: [['dc-testimonial-single-boxed']],
            decls: 28,
            vars: 4,
            consts: [
              [1, 'section', 'singl-testimonial'],
              [1, 'container', 'pt-8', 'bring-to-front'],
              [1, 'swiper-container', 'pb-0', 'pb-lg-8', 3, 'swiper'],
              [1, 'swiper-wrapper'],
              ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
              [1, 'reviews-navigation'],
              [
                1,
                'reviews-nav',
                'reviews-nav-prev',
                'btn',
                'btn-light',
                'btn-rounded',
                'shadow-box',
                'shadow-hover'
              ],
              [1, 'reviews-nav-icon', 3, 'icon'],
              [
                1,
                'reviews-nav',
                'reviews-nav-next',
                'btn',
                'btn-light',
                'btn-rounded',
                'shadow-box',
                'shadow-hover'
              ],
              [1, 'swiper-slide'],
              [1, 'row', 'gap-y', 'align-items-center'],
              [1, 'col-lg-6'],
              [1, 'testimonial-img', 'ml-md-auto'],
              [
                'alt',
                '...',
                1,
                'img-responsive',
                'rounded',
                'shadow-lg',
                3,
                'src'
              ],
              [1, 'col-lg-6', 'ml-md-auto'],
              [
                1,
                'user-review',
                'text-center',
                'italic',
                'bg-primary',
                'text-contrast',
                'rounded',
                'shadow-lg',
                'py-5',
                'px-4',
                'px-lg-6'
              ],
              [1, 'regular', 'py-4'],
              [1, 'quote', 3, 'icon'],
              [1, 'author', 'mt-4'],
              [1, 'small'],
              [1, 'bold', 'text-contrast'],
              [
                'src',
                'assets/img/v6/reviews/signature.svg',
                'alt',
                '...',
                1,
                'img-responsive',
                'signature',
                'mx-auto'
              ],
              ['data-aos', 'fade-up', 1, 'shape-wrapper'],
              [
                'xmlns',
                'http://www.w3.org/2000/svg',
                'viewBox',
                '0 0 100 100',
                'preserveAspectRatio',
                'none',
                1,
                'svg-review-bottom'
              ],
              ['d', 'M95,0 Q90,90 0,100 L100,100 100,0 Z', 'fill', '#8B41EB'],
              [
                'xmlns',
                'http://www.w3.org/2000/svg',
                'viewBox',
                '0 0 100 100',
                'preserveAspectRatio',
                'none',
                1,
                'svg-review-bottom',
                'back'
              ],
              ['d', 'M95,0 Q90,90 0,100 L100,100 100,0 Z', 'fill', '#DC92FF'],
              [
                'xmlns',
                'http://www.w3.org/2000/svg',
                'viewBox',
                '0 0 100 100',
                'preserveAspectRatio',
                'none',
                1,
                'svg-review-bottom',
                'back',
                'left'
              ],
              ['d', 'M95,0 Q90,90 0,100 L100,100 100,0 Z', 'fill', '#A45AFF']
            ],
            template: function(n, t) {
              1 & n &&
                (m.Qb(0, 'section', 0),
                m.Fc(1, '\n  '),
                m.Qb(2, 'div', 1),
                m.Fc(3, '\n    '),
                m.Qb(4, 'div', 2),
                m.Fc(5, '\n      '),
                m.Qb(6, 'div', 3),
                m.Fc(7, '\n        '),
                m.Dc(8, S, 53, 3, 'div', 4),
                m.Fc(9, '\n      '),
                m.Pb(),
                m.Fc(10, '\n\n      '),
                m.Fc(11, '\n      '),
                m.Qb(12, 'div', 5),
                m.Fc(13, '\n        '),
                m.Qb(14, 'div', 6),
                m.Fc(15, '\n          '),
                m.Mb(16, 'fa-icon', 7),
                m.Fc(17, '\n        '),
                m.Pb(),
                m.Fc(18, '\n\n        '),
                m.Qb(19, 'div', 8),
                m.Fc(20, '\n          '),
                m.Mb(21, 'fa-icon', 7),
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
                2 & n &&
                  (m.xb(4),
                  m.kc('swiper', t.config),
                  m.xb(4),
                  m.kc('ngForOf', t.reviews),
                  m.xb(8),
                  m.kc('icon', t.fa.longArrowAltLeft),
                  m.xb(5),
                  m.kc('icon', t.fa.longArrowAltRight));
            },
            directives: [C.b, w.j, f.a],
            styles: ['']
          })),
          n
        );
      })();
      var L = e('aaX3'),
        z = e('ZuuT'),
        j = e('VKEt'),
        N = e('iLZQ');
      const T = [
        {
          path: '',
          component: (() => {
            class n {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function(t) {
                return new (t || n)();
              }),
              (n.ɵcmp = m.Fb({
                type: n,
                selectors: [['dc-smart-business']],
                decls: 27,
                vars: 10,
                consts: [
                  [3, 'useOnlyDarkLogo', 'position'],
                  [1, 'position-relative', 'overflow-hidden'],
                  [3, 'liftUp'],
                  [3, 'background', 'edge', 'bordered', 'title'],
                  [3, 'background'],
                  [3, 'background', 'edge']
                ],
                template: function(n, t) {
                  1 & n &&
                    (m.Mb(0, 'dc-navbar-default', 0),
                    m.Fc(1, '\n\n'),
                    m.Qb(2, 'main', 1),
                    m.Fc(3, '\n  '),
                    m.Mb(4, 'dc-smart-business-heading'),
                    m.Fc(5, '\n  '),
                    m.Mb(6, 'dc-slider-card-projects', 2),
                    m.Fc(7, '\n\n  '),
                    m.Mb(8, 'dc-smart-business-why-dashcore'),
                    m.Fc(9, '\n  '),
                    m.Mb(10, 'dc-counter5'),
                    m.Fc(11, '\n  '),
                    m.Mb(12, 'dc-smart-business-deserve-better'),
                    m.Fc(13, '\n  '),
                    m.Mb(14, 'dc-integration-floating-icons'),
                    m.Fc(15, '\n  '),
                    m.Mb(16, 'dc-testimonial-single-boxed'),
                    m.Fc(17, '\n\n  '),
                    m.Mb(18, 'dc-slider-icons', 3),
                    m.Fc(19, '\n\n  '),
                    m.Mb(20, 'dc-faqs1', 4),
                    m.Fc(21, '\n\n  '),
                    m.Mb(22, 'dc-cta1', 5),
                    m.Fc(23, '\n\n  '),
                    m.Mb(24, 'dc-footer2'),
                    m.Fc(25, '\n'),
                    m.Pb(),
                    m.Fc(26, '\n')),
                    2 & n &&
                      (m.kc('useOnlyDarkLogo', !0)('position', 'right'),
                      m.xb(6),
                      m.kc('liftUp', !1),
                      m.xb(12),
                      m.kc('background', 'light')('edge', 'top-left')(
                        'bordered',
                        !1
                      )('title', 'Featured in'),
                      m.xb(2),
                      m.kc('background', 'light'),
                      m.xb(2),
                      m.kc('background', 'contrast')('edge', 'top-left'));
                },
                directives: [h.a, F, v.a, x, M, O, I, q, L.a, z.a, j.a, N.a],
                styles: ['']
              })),
              n
            );
          })(),
          data: {
            title: Object(p.c)('EveryThink - Perfect toolbox for your bussines')
          }
        }
      ];
      let H = (() => {
        class n {}
        return (
          (n.ɵmod = m.Jb({ type: n })),
          (n.ɵinj = m.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[b.g.forChild(T)], b.g]
          })),
          n
        );
      })();
      var _ = e('ZpN7');
      let R = (() => {
        class n {}
        return (
          (n.ɵmod = m.Jb({ type: n })),
          (n.ɵinj = m.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [
              [i.a, a.a, s.a, o.a, r.a, c.a, u.a, l.a, d.a, _.a, y.n, H]
            ]
          })),
          n
        );
      })();
    },
    hKFN: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return s;
      });
      var i = e('LRne'),
        a = e('fXoL');
      let s = (() => {
        class n {
          constructor() {}
          getFaqs() {
            return Object(i.a)([
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
          (n.ɵfac = function(t) {
            return new (t || n)();
          }),
          (n.ɵprov = a.Hb({ token: n, factory: n.ɵfac, providedIn: 'root' })),
          n
        );
      })();
    },
    pu65: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return r;
      });
      var i = e('nhfI'),
        a = e('M0ag'),
        s = e('sYmb'),
        o = e('fXoL');
      let r = (() => {
        class n {}
        return (
          (n.ɵmod = o.Jb({ type: n })),
          (n.ɵinj = o.Ib({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[i.c, a.a, s.a.forChild()]]
          })),
          n
        );
      })();
    }
  }
]);
