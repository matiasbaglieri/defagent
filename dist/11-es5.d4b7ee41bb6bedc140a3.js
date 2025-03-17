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
    [11],
    {
      '+tcz': function(t, i, a) {
        'use strict';
        a.d(i, 'a', function() {
          return b;
        }),
          a.d(i, 'b', function() {
            return d;
          });
        var o,
          s,
          r = a('fXoL'),
          c = function() {
            return (c =
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
                    o,
                    s,
                    r = n < 0 ? '-' : '';
                  if (
                    ((t = Math.abs(n).toFixed(i.options.decimalPlaces)),
                    (a = (e = (t += '').split('.'))[0]),
                    (o = e.length > 1 ? i.options.decimal + e[1] : ''),
                    i.options.useGrouping)
                  ) {
                    s = '';
                    for (var c = 0, l = a.length; c < l; ++c)
                      0 !== c && c % 3 == 0 && (s = i.options.separator + s),
                        (s = a[l - c - 1] + s);
                    a = s;
                  }
                  return (
                    i.options.numerals &&
                      i.options.numerals.length &&
                      ((a = a.replace(/[0-9]/g, function(n) {
                        return i.options.numerals[+n];
                      })),
                      (o = o.replace(/[0-9]/g, function(n) {
                        return i.options.numerals[+n];
                      }))),
                    r + i.options.prefix + a + o + i.options.suffix
                  );
                }),
                (this.easeOutExpo = function(n, t, e, i) {
                  return (
                    (e * (1 - Math.pow(2, (-10 * n) / i)) * 1024) / 1023 + t
                  );
                }),
                (this.options = c({}, this.defaults, e)),
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
          u = a('ofXK'),
          d =
            (((s = (function() {
              function t(e, i, a) {
                n(this, t),
                  (this.el = e),
                  (this.zone = i),
                  (this.platformId = a),
                  (this.options = {}),
                  (this.reanimateOnClick = !0),
                  (this.complete = new r.n());
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
              return new (n || s)(r.Lb(r.l), r.Lb(r.z), r.Lb(r.B));
            }),
            (s.ɵdir = r.Gb({
              type: s,
              selectors: [['', 'countUp', '']],
              hostBindings: function(n, t) {
                1 & n &&
                  r.bc('click', function() {
                    return t.onClick();
                  });
              },
              inputs: {
                options: 'options',
                reanimateOnClick: 'reanimateOnClick',
                endVal: ['countUp', 'endVal']
              },
              outputs: { complete: 'complete' },
              features: [r.vb]
            })),
            s),
          b =
            (((o = function t() {
              n(this, t);
            }).ɵmod = r.Jb({ type: o })),
            (o.ɵinj = r.Ib({
              factory: function(n) {
                return new (n || o)();
              },
              imports: [[]]
            })),
            o);
      },
      '2d4A': function(t, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return l;
        });
        var a = i('nhfI'),
          o = i('6NWb'),
          s = i('M0ag'),
          r = i('sYmb'),
          c = i('fXoL'),
          l = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = c.Jb({ type: t })),
              (t.ɵinj = c.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[a.c, o.b, s.a, r.a.forChild()]]
              })),
              t
            );
          })();
      },
      '8klf': function(t, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return c;
        });
        var a = i('M0ag'),
          o = i('tyNb'),
          s = i('sYmb'),
          r = i('fXoL'),
          c = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = r.Jb({ type: t })),
              (t.ɵinj = r.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[a.a, o.g, s.a.forChild()]]
              })),
              t
            );
          })();
      },
      ORAR: function(t, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return r;
        });
        var a = i('tyNb'),
          o = i('sYmb'),
          s = i('fXoL'),
          r = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = s.Jb({ type: t })),
              (t.ɵinj = s.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[a.g, o.a.forChild()]]
              })),
              t
            );
          })();
      },
      P6su: function(t, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return l;
        });
        var a = i('1kSV'),
          o = i('M0ag'),
          s = i('hKFN'),
          r = i('sYmb'),
          c = i('fXoL'),
          l = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = c.Jb({ type: t })),
              (t.ɵinj = c.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                providers: [s.a],
                imports: [[o.a, a.c, r.a.forChild()]]
              })),
              t
            );
          })();
      },
      V6j0: function(t, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return c;
        });
        var a = i('M0ag'),
          o = i('+tcz'),
          s = i('sYmb'),
          r = i('fXoL'),
          c = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = r.Jb({ type: t })),
              (t.ɵinj = r.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[a.a, o.a, s.a.forChild()]]
              })),
              t
            );
          })();
      },
      ZuuT: function(t, i, a) {
        'use strict';
        a.d(i, 'a', function() {
          return P;
        });
        var o = a('fXoL'),
          s = a('sYmb'),
          r = a('ofXK'),
          c = a('wHSu'),
          l = a('hKFN'),
          u = a('1kSV'),
          d = a('6NWb');
        function b(n, t) {
          if (
            (1 & n &&
              (o.Qb(0, 'button', 6),
              o.Fc(1, '\n        '),
              o.Mb(2, 'fa-icon', 7),
              o.Fc(3),
              o.Pb()),
            2 & n)
          ) {
            var e = o.fc(2).$implicit,
              i = o.fc();
            o.xb(2),
              o.kc('icon', i.chevronDown),
              o.xb(1),
              o.Hc('\n        ', e.question.es, '\n      ');
          }
        }
        function p(n, t) {
          if (
            (1 & n &&
              (o.Qb(0, 'button', 6),
              o.Fc(1, '\n        '),
              o.Mb(2, 'fa-icon', 7),
              o.Fc(3),
              o.Pb()),
            2 & n)
          ) {
            var e = o.fc(2).$implicit,
              i = o.fc();
            o.xb(2),
              o.kc('icon', i.chevronDown),
              o.xb(1),
              o.Hc('\n        ', e.question.en, '\n      ');
          }
        }
        function m(n, t) {
          if (
            (1 & n &&
              (o.Fc(0, '\n      '),
              o.Dc(1, b, 4, 2, 'button', 5),
              o.Fc(2, '\n      '),
              o.Dc(3, p, 4, 2, 'button', 5),
              o.Fc(4, '\n    ')),
            2 & n)
          ) {
            var e = o.fc(2);
            o.xb(1),
              o.kc('ngIf', 'es' === e.translate.currentLang),
              o.xb(2),
              o.kc('ngIf', 'en-US' === e.translate.currentLang);
          }
        }
        function f(n, t) {
          if ((1 & n && o.Mb(0, 'div', 9), 2 & n)) {
            var e = o.fc(2).$implicit;
            o.kc('innerHTML', e.answer.es, o.wc);
          }
        }
        function h(n, t) {
          if ((1 & n && o.Mb(0, 'div', 9), 2 & n)) {
            var e = o.fc(2).$implicit;
            o.kc('innerHTML', e.answer.en, o.wc);
          }
        }
        function g(n, t) {
          if (
            (1 & n &&
              (o.Fc(0, '\n      '),
              o.Dc(1, f, 1, 1, 'div', 8),
              o.Fc(2, '\n      '),
              o.Dc(3, h, 1, 1, 'div', 8),
              o.Fc(4, '\n    ')),
            2 & n)
          ) {
            var e = o.fc(2);
            o.xb(1),
              o.kc('ngIf', 'es' === e.translate.currentLang),
              o.xb(2),
              o.kc('ngIf', 'en-US' === e.translate.currentLang);
          }
        }
        function F(n, t) {
          1 & n &&
            (o.Qb(0, 'ngb-panel'),
            o.Fc(1, '\n    '),
            o.Dc(2, m, 5, 2, 'ng-template', 3),
            o.Fc(3, '\n\n    '),
            o.Dc(4, g, 5, 2, 'ng-template', 4),
            o.Fc(5, '\n  '),
            o.Pb());
        }
        var v,
          w,
          y =
            (((w = (function() {
              function t(e, i, a) {
                n(this, t),
                  (this.faqService = i),
                  (this.translate = a),
                  (this.chevronDown = c.e),
                  (this.faqs = []),
                  (e.closeOthers = !0);
              }
              return (
                e(t, [
                  {
                    key: 'ngOnInit',
                    value: function() {
                      var n = this;
                      this.faqService.getFaqs().subscribe(function(t) {
                        return (n.faqs = t);
                      });
                    }
                  }
                ]),
                t
              );
            })()).ɵfac = function(n) {
              return new (n || w)(o.Lb(u.b), o.Lb(l.a), o.Lb(s.c));
            }),
            (w.ɵcmp = o.Fb({
              type: w,
              selectors: [['dc-faqs-accordion']],
              features: [o.wb([u.b])],
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
                  (o.Qb(0, 'ngb-accordion', 0, 1),
                  o.Fc(2, '\n  '),
                  o.Dc(3, F, 6, 0, 'ngb-panel', 2),
                  o.Fc(4, '\n'),
                  o.Pb(),
                  o.Fc(5, '\n')),
                  2 & n && (o.xb(3), o.kc('ngForOf', t.faqs));
              },
              directives: [u.a, r.j, u.i, u.k, u.j, r.k, u.l, d.a],
              styles: ['']
            })),
            w),
          P =
            (((v = (function() {
              function t(e) {
                n(this, t), (this.translate = e);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || v)(o.Lb(s.c));
            }),
            (v.ɵcmp = o.Fb({
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
              template: function(n, t) {
                1 & n &&
                  (o.Qb(0, 'section', 0),
                  o.Fc(1, '\n  '),
                  o.Qb(2, 'div', 1),
                  o.Fc(3, '\n    '),
                  o.Qb(4, 'div', 2),
                  o.Fc(5, '\n      '),
                  o.Qb(6, 'div', 3),
                  o.Fc(7, '\n        '),
                  o.Qb(8, 'h2'),
                  o.Fc(9),
                  o.gc(10, 'translate'),
                  o.Qb(11, 'span', 4),
                  o.Fc(12),
                  o.gc(13, 'translate'),
                  o.Pb(),
                  o.Fc(14, '\n        '),
                  o.Pb(),
                  o.Fc(15, '\n\n        '),
                  o.Qb(16, 'p', 5),
                  o.Fc(17),
                  o.gc(18, 'translate'),
                  o.Pb(),
                  o.Fc(19, '\n\n        '),
                  o.Qb(20, 'p', 6),
                  o.Fc(21),
                  o.gc(22, 'translate'),
                  o.Pb(),
                  o.Fc(23, '\n      '),
                  o.Pb(),
                  o.Fc(24, '\n\n      '),
                  o.Qb(25, 'div', 7),
                  o.Fc(26, '\n        '),
                  o.Qb(27, 'div', 8),
                  o.Fc(28, '\n          '),
                  o.Mb(29, 'dc-faqs-accordion'),
                  o.Fc(30, '\n        '),
                  o.Pb(),
                  o.Fc(31, '\n      '),
                  o.Pb(),
                  o.Fc(32, '\n    '),
                  o.Pb(),
                  o.Fc(33, '\n  '),
                  o.Pb(),
                  o.Fc(34, '\n'),
                  o.Pb(),
                  o.Fc(35, '\n')),
                  2 & n &&
                    (o.Bb(
                      'section ',
                      t.background ? 'bg-' + t.background : '',
                      ' ',
                      t.edge ? 'edge ' + t.edge : '',
                      ''
                    ),
                    o.kc('ngClass', t.classes),
                    o.xb(9),
                    o.Hc(
                      '\n          ',
                      o.hc(10, 9, 'FAQS.FAQS1.DO_YOU_HAVE'),
                      '\n          '
                    ),
                    o.xb(3),
                    o.Gc(o.hc(13, 11, 'FAQS.FAQS1.QUESTIONS')),
                    o.xb(5),
                    o.Hc(
                      '\n          ',
                      o.hc(18, 13, 'FAQS.FAQS1.NOT_SURE_HOW'),
                      '\n        '
                    ),
                    o.xb(4),
                    o.Hc(
                      '\n          ',
                      o.hc(22, 15, 'FAQS.FAQS1.HERE_ARE_THE_ANSWERS'),
                      '\n        '
                    ));
              },
              directives: [r.i, y],
              pipes: [s.b],
              styles: ['']
            })),
            v);
      },
      dYDE: function(t, i, a) {
        'use strict';
        a.r(i),
          a.d(i, 'SmartBusinessModule', function() {
            return nn;
          });
        var o,
          s = a('M0ag'),
          r = a('XMwz'),
          c = a('V6j0'),
          l = a('2d4A'),
          u = a('pu65'),
          d = a('ORAR'),
          b = a('8klf'),
          p = a('P6su'),
          m = a('M0Rk'),
          f = a('tyNb'),
          h = a('ey9i'),
          g = a('fXoL'),
          F = a('8ynp'),
          v = a('wHSu'),
          w = a('6NWb'),
          y =
            (((o = (function() {
              function t() {
                n(this, t), (this.tag = v.t);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || o)();
            }),
            (o.ɵcmp = g.Fb({
              type: o,
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
                  (g.Qb(0, 'header', 0),
                  g.Fc(1, '\n  '),
                  g.Qb(2, 'div', 1),
                  g.Fc(3, '\n    '),
                  g.Mb(4, 'img', 2),
                  g.Fc(5, '\n    '),
                  g.Mb(6, 'div', 3),
                  g.Fc(7, '\n    '),
                  g.Mb(8, 'div', 4),
                  g.Fc(9, '\n  '),
                  g.Pb(),
                  g.Fc(10, '\n\n  '),
                  g.Qb(11, 'div', 5),
                  g.Fc(12, '\n    '),
                  g.Qb(13, 'div', 6),
                  g.Fc(14, '\n      '),
                  g.Qb(15, 'div', 7),
                  g.Fc(16, '\n        '),
                  g.Qb(17, 'p', 8),
                  g.Fc(
                    18,
                    '\n          innovative solutions for the demanding customer\n        '
                  ),
                  g.Pb(),
                  g.Fc(19, '\n        '),
                  g.Qb(20, 'h1', 9),
                  g.Fc(21, '\n          Everythink '),
                  g.Qb(22, 'span', 10),
                  g.Fc(23, 'Smart business'),
                  g.Pb(),
                  g.Fc(24, '\n        '),
                  g.Pb(),
                  g.Fc(25, '\n        '),
                  g.Qb(26, 'p', 11),
                  g.Fc(
                    27,
                    '\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolore\n          excepturi explicabo, harum in laudantium nulla officiis reprehenderit!\n        '
                  ),
                  g.Pb(),
                  g.Fc(28, '\n\n        '),
                  g.Qb(29, 'nav', 12),
                  g.Fc(30, '\n          '),
                  g.Qb(31, 'a', 13),
                  g.Fc(32, '\n            '),
                  g.Mb(33, 'fa-icon', 14),
                  g.Fc(34, ' Plans & pricing\n          '),
                  g.Pb(),
                  g.Fc(35, '\n\n          '),
                  g.Qb(36, 'a', 15),
                  g.Fc(37, '\n            Start now\n          '),
                  g.Pb(),
                  g.Fc(38, '\n        '),
                  g.Pb(),
                  g.Fc(39, '\n      '),
                  g.Pb(),
                  g.Fc(40, '\n    '),
                  g.Pb(),
                  g.Fc(41, '\n  '),
                  g.Pb(),
                  g.Fc(42, '\n\n  '),
                  g.Qb(43, 'div', 16),
                  g.Fc(44, '\n    '),
                  g.Qb(45, 'div', 17),
                  g.Fc(46, '\n      '),
                  g.Mb(47, 'img', 18),
                  g.Fc(48, '\n      '),
                  g.Mb(49, 'img', 19),
                  g.Fc(50, '\n      '),
                  g.Mb(51, 'img', 20),
                  g.Fc(52, '\n      '),
                  g.Mb(53, 'img', 21),
                  g.Fc(54, '\n    '),
                  g.Pb(),
                  g.Fc(55, '\n  '),
                  g.Pb(),
                  g.Fc(56, '\n'),
                  g.Pb(),
                  g.Fc(57, '\n')),
                  2 & n && (g.xb(33), g.zb('mr-3'), g.kc('icon', t.tag));
              },
              directives: [w.a],
              styles: [
                '.header[_ngcontent-%COMP%]{background-color:#edf4f8}.container[_ngcontent-%COMP%]{padding-top:12rem!important;padding-bottom:6rem!important}@media (min-width:992px){.container[_ngcontent-%COMP%]{padding-bottom:12rem!important}}.shape-background[_ngcontent-%COMP%]{z-index:0;opacity:.2}.shape-top[_ngcontent-%COMP%]{top:0;background-image:linear-gradient(-57deg,#4a61d1,#5c52d5);transform:rotate(30deg) translate3D(-45%,-45%,0);max-height:560px}.shape-right[_ngcontent-%COMP%]{background-image:linear-gradient(-57deg,#5634d0,#4a61d1);left:93%}.main-shape-wrapper[_ngcontent-%COMP%]{width:60%}@media (max-width:991.98px){.main-shape-wrapper[_ngcontent-%COMP%]{position:relative;left:50%;transform:translateX(-50%)}}@media (min-width:992px){.main-shape-wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);right:0;width:40%}}@media (min-width:1200px){.main-shape-wrapper[_ngcontent-%COMP%]{transform:translateY(-50%) scale(.75)}}@media (min-width:1601px){.main-background[_ngcontent-%COMP%]{transform:translate3d(0,-3%,0)}}.anim[_ngcontent-%COMP%]{position:absolute;width:15%;max-width:80px}.anim.anim-1[_ngcontent-%COMP%]{top:56%;right:5%;-webkit-animation-duration:3.4s;animation-duration:3.4s}.anim.anim-2[_ngcontent-%COMP%]{top:10%;right:58%}.anim.anim-3[_ngcontent-%COMP%]{top:33%;right:22%;-webkit-animation-duration:3.8s;animation-duration:3.8s}'
              ]
            })),
            o),
          P = a('f+4U'),
          x = a('ofXK'),
          k = a('1kSV');
        function Q(n, t) {
          if (
            (1 & n &&
              (g.Qb(0, 'li'),
              g.Fc(1, '\n              '),
              g.Qb(2, 'p'),
              g.Fc(3),
              g.Qb(4, 'span'),
              g.Fc(5),
              g.Pb(),
              g.Fc(6, '\n              '),
              g.Pb(),
              g.Fc(7, '\n              '),
              g.Mb(8, 'ngb-progressbar', 12),
              g.Fc(9, '\n            '),
              g.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            g.xb(3),
              g.Hc('\n                ', e.label, ''),
              g.xb(2),
              g.Hc('', e.value, '%'),
              g.xb(3),
              g.kc('value', e.value);
          }
        }
        var V,
          M =
            (((V = (function() {
              function t() {
                n(this, t),
                  (this.bars = [
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
                  ]);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || V)();
            }),
            (V.ɵcmp = g.Fb({
              type: V,
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
                  (g.Qb(0, 'section', 0),
                  g.Fc(1, '\n  '),
                  g.Qb(2, 'div', 1),
                  g.Fc(3, '\n    '),
                  g.Qb(4, 'div', 2),
                  g.Fc(5, '\n      '),
                  g.Qb(6, 'div', 3),
                  g.Fc(7, '\n        '),
                  g.Qb(8, 'div', 4),
                  g.Fc(9, '\n          '),
                  g.Qb(10, 'p', 5),
                  g.Fc(11, 'some reasons'),
                  g.Pb(),
                  g.Fc(12, '\n          '),
                  g.Qb(13, 'h2', 6),
                  g.Fc(14, 'Why Choose EveryThink?'),
                  g.Pb(),
                  g.Fc(15, '\n        '),
                  g.Pb(),
                  g.Fc(16, '\n\n        '),
                  g.Qb(17, 'p', 7),
                  g.Fc(
                    18,
                    '\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci,\n          architecto asperiores dignissimos doloribus dolorum eos esse eum\n          laborum minima molestias, natus nostrum odio quia recusandae rem sequi\n          similique velit.\n        '
                  ),
                  g.Pb(),
                  g.Fc(19, '\n\n        '),
                  g.Qb(20, 'a', 8),
                  g.Fc(21, 'Read More'),
                  g.Pb(),
                  g.Fc(22, '\n      '),
                  g.Pb(),
                  g.Fc(23, '\n\n      '),
                  g.Qb(24, 'div', 3),
                  g.Fc(25, '\n        '),
                  g.Qb(26, 'div', 9),
                  g.Fc(27, '\n          '),
                  g.Qb(28, 'ul', 10),
                  g.Fc(29, '\n            '),
                  g.Dc(30, Q, 10, 3, 'li', 11),
                  g.Fc(31, '\n          '),
                  g.Pb(),
                  g.Fc(32, '\n        '),
                  g.Pb(),
                  g.Fc(33, '\n      '),
                  g.Pb(),
                  g.Fc(34, '\n    '),
                  g.Pb(),
                  g.Fc(35, '\n  '),
                  g.Pb(),
                  g.Fc(36, '\n'),
                  g.Pb(),
                  g.Fc(37, '\n')),
                  2 & n && (g.xb(30), g.kc('ngForOf', t.bars));
              },
              directives: [x.j, k.m],
              styles: ['']
            })),
            V),
          A = a('AL06'),
          O = a('+tcz');
        function E(n, t) {
          if (
            (1 & n &&
              (g.Qb(0, 'div', 4),
              g.Fc(1, '\n        '),
              g.Qb(2, 'div', 5),
              g.Fc(3, '\n          '),
              g.Mb(4, 'dc-feather', 6),
              g.Fc(5, '\n          '),
              g.Qb(6, 'span', 7),
              g.Fc(7),
              g.Pb(),
              g.Fc(8, '\n        '),
              g.Pb(),
              g.Fc(9, '\n\n        '),
              g.Qb(10, 'p', 8),
              g.Fc(11),
              g.Pb(),
              g.Fc(12, '\n      '),
              g.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            g.xb(4),
              g.kc('name', e.icon)('iconClass', 'stroke-primary mr-2'),
              g.xb(2),
              g.kc('countUp', e.value),
              g.xb(1),
              g.Gc(e.value),
              g.xb(4),
              g.Gc(e.title);
          }
        }
        var D,
          I =
            (((D = (function() {
              function t() {
                n(this, t),
                  (this.counters = [
                    { icon: 'box', value: 273, title: 'Components' },
                    { icon: 'download-cloud', value: 654, title: 'Downloads' },
                    { icon: 'sliders', value: 7941, title: 'Followers' },
                    { icon: 'award', value: 654, title: 'New users' }
                  ]);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || D)();
            }),
            (D.ɵcmp = g.Fb({
              type: D,
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
                  (g.Qb(0, 'section', 0),
                  g.Fc(1, '\n  '),
                  g.Qb(2, 'div', 1),
                  g.Fc(3, '\n    '),
                  g.Qb(4, 'div', 2),
                  g.Fc(5, '\n      '),
                  g.Dc(6, E, 13, 5, 'div', 3),
                  g.Fc(7, '\n    '),
                  g.Pb(),
                  g.Fc(8, '\n  '),
                  g.Pb(),
                  g.Fc(9, '\n'),
                  g.Pb(),
                  g.Fc(10, '\n')),
                  2 & n && (g.xb(6), g.kc('ngForOf', t.counters));
              },
              directives: [x.j, A.a, O.b],
              styles: ['']
            })),
            D);
        function C(n, t) {
          if (
            (1 & n &&
              (g.Qb(0, 'div', 9),
              g.Fc(1, '\n        '),
              g.Qb(2, 'div', 10),
              g.Fc(3, '\n          '),
              g.Qb(4, 'div', 11),
              g.Fc(5, '\n            '),
              g.Mb(6, 'fa-icon', 12),
              g.Fc(7, '\n          '),
              g.Pb(),
              g.Fc(8, '\n\n          '),
              g.Qb(9, 'div', 13),
              g.Fc(10, '\n            '),
              g.Qb(11, 'h5', 14),
              g.Fc(12),
              g.Pb(),
              g.Fc(13, '\n            '),
              g.Qb(14, 'p', 15),
              g.Fc(15),
              g.Pb(),
              g.Fc(16, '\n          '),
              g.Pb(),
              g.Fc(17, '\n        '),
              g.Pb(),
              g.Fc(18, '\n      '),
              g.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            g.xb(6),
              g.kc('icon', e.icon),
              g.xb(6),
              g.Gc(e.title),
              g.xb(3),
              g.Gc(e.description);
          }
        }
        var S,
          q =
            (((S = (function() {
              function t() {
                n(this, t),
                  (this.cards = [
                    {
                      icon: v.n,
                      title: 'easy to integrate',
                      description:
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
                    },
                    {
                      icon: v.h,
                      title: 'seamlessly solution',
                      description:
                        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
                    }
                  ]);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || S)();
            }),
            (S.ɵcmp = g.Fb({
              type: S,
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
                  (g.Qb(0, 'section', 0),
                  g.Fc(1, '\n  '),
                  g.Qb(2, 'div', 1),
                  g.Fc(3, '\n    '),
                  g.Qb(4, 'div', 2),
                  g.Fc(5, '\n      '),
                  g.Qb(6, 'h2', 3),
                  g.Fc(7, 'You deserve better'),
                  g.Pb(),
                  g.Fc(8, '\n      '),
                  g.Qb(9, 'p', 4),
                  g.Fc(
                    10,
                    '\n        With Everythink you will not only get a beautiful Assistant to show off\n        your web, but a complete starter kit to bring your application to life\n        right away\n      '
                  ),
                  g.Pb(),
                  g.Fc(11, '\n    '),
                  g.Pb(),
                  g.Fc(12, '\n  '),
                  g.Pb(),
                  g.Fc(13, '\n'),
                  g.Pb(),
                  g.Fc(14, '\n\n'),
                  g.Fc(15, '\n'),
                  g.Qb(16, 'section', 5),
                  g.Fc(17, '\n  '),
                  g.Qb(18, 'div', 6),
                  g.Fc(19, '\n    '),
                  g.Qb(20, 'div', 7),
                  g.Fc(21, '\n      '),
                  g.Dc(22, C, 19, 3, 'div', 8),
                  g.Fc(23, '\n    '),
                  g.Pb(),
                  g.Fc(24, '\n  '),
                  g.Pb(),
                  g.Fc(25, '\n'),
                  g.Pb(),
                  g.Fc(26, '\n')),
                  2 & n && (g.xb(22), g.kc('ngForOf', t.cards));
              },
              directives: [x.j, w.a],
              styles: ['']
            })),
            S),
          L = function(n, t) {
            return { 'left.%': n, 'top.%': t };
          };
        function z(n, t) {
          if (
            (1 & n &&
              (g.Qb(0, 'div', 11),
              g.Fc(1, '\n            '),
              g.Mb(2, 'img', 12),
              g.Fc(3, '\n          '),
              g.Pb()),
            2 & n)
          ) {
            var e = t.$implicit;
            g.Ab(
              'floating icon ',
              e.size,
              ' bg-contrast rounded-circle p-3 shadow m-0 absolute d-flex justify-content-center align-items-center'
            ),
              g.kc('ngStyle', g.pc(5, L, e.position.left, e.position.top)),
              g.xb(2),
              g.kc('src', 'assets/img/integration/' + e.name + '.svg', g.yc);
          }
        }
        var j,
          T =
            (((j = (function() {
              function t() {
                n(this, t),
                  (this.icons = [
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
                  ]);
              }
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || j)();
            }),
            (j.ɵcmp = g.Fb({
              type: j,
              selectors: [['dc-integration-floating-icons']],
              decls: 40,
              vars: 1,
              consts: [
                [1, 'section', 'extending-core'],
                [
                  1,
                  'shape',
                  'shape-background',
                  'top',
                  'shape-left',
                  'bg-light'
                ],
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
                  (g.Qb(0, 'section', 0),
                  g.Fc(1, '\n  '),
                  g.Mb(2, 'div', 1),
                  g.Fc(3, '\n\n  '),
                  g.Qb(4, 'div', 2),
                  g.Fc(5, '\n    '),
                  g.Qb(6, 'div', 3),
                  g.Fc(7, '\n      '),
                  g.Qb(8, 'div', 4),
                  g.Fc(9, '\n        '),
                  g.Qb(10, 'div', 5),
                  g.Fc(11, '\n          '),
                  g.Qb(12, 'p', 6),
                  g.Fc(13, '\n            enterprise integration\n          '),
                  g.Pb(),
                  g.Fc(14, '\n          '),
                  g.Qb(15, 'h2'),
                  g.Fc(16, 'Extend Everythink'),
                  g.Pb(),
                  g.Fc(17, '\n          '),
                  g.Qb(18, 'p'),
                  g.Fc(
                    19,
                    '\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi\n            ipsum iste iure nihil non obcaecati quasi, sit? Aperiam asperiores\n            atque, commodi debitis fugiat in nemo optio sint velit. Pariatur,\n            sint!\n          '
                  ),
                  g.Pb(),
                  g.Fc(20, '\n        '),
                  g.Pb(),
                  g.Fc(21, '\n        '),
                  g.Qb(22, 'a', 7),
                  g.Fc(23, 'Know More'),
                  g.Pb(),
                  g.Fc(24, '\n        '),
                  g.Qb(25, 'a', 8),
                  g.Fc(26, 'Register Account'),
                  g.Pb(),
                  g.Fc(27, '\n      '),
                  g.Pb(),
                  g.Fc(28, '\n\n      '),
                  g.Qb(29, 'div', 4),
                  g.Fc(30, '\n        '),
                  g.Qb(31, 'div', 9),
                  g.Fc(32, '\n          '),
                  g.Dc(33, z, 4, 8, 'div', 10),
                  g.Fc(34, '\n        '),
                  g.Pb(),
                  g.Fc(35, '\n      '),
                  g.Pb(),
                  g.Fc(36, '\n    '),
                  g.Pb(),
                  g.Fc(37, '\n  '),
                  g.Pb(),
                  g.Fc(38, '\n'),
                  g.Pb(),
                  g.Fc(39, '\n')),
                  2 & n && (g.xb(33), g.kc('ngForOf', t.icons));
              },
              directives: [x.j, x.l],
              styles: ['']
            })),
            j),
          N = a('nhfI');
        function H(n, t) {
          if (
            (1 & n &&
              (g.Qb(0, 'div', 9),
              g.Fc(1, '\n          '),
              g.Qb(2, 'div', 10),
              g.Fc(3, '\n            '),
              g.Qb(4, 'div', 11),
              g.Fc(5, '\n              '),
              g.Qb(6, 'figure', 12),
              g.Fc(7, '\n                '),
              g.Mb(8, 'img', 13),
              g.Fc(9, '\n              '),
              g.Pb(),
              g.Fc(10, '\n            '),
              g.Pb(),
              g.Fc(11, '\n\n            '),
              g.Qb(12, 'div', 14),
              g.Fc(13, '\n              '),
              g.Qb(14, 'div', 15),
              g.Fc(15, '\n                '),
              g.Qb(16, 'blockquote', 16),
              g.Fc(17, '\n                  '),
              g.Mb(18, 'fa-icon', 17),
              g.Fc(
                19,
                '\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                  Aliquid amet aspernatur, autem deserunt distinctio dolores\n                  eius, exercitationem facilis inventore.\n                '
              ),
              g.Pb(),
              g.Fc(20, '\n\n                '),
              g.Qb(21, 'div', 18),
              g.Fc(22, '\n                  '),
              g.Qb(23, 'p', 19),
              g.Fc(24, '\n                    '),
              g.Qb(25, 'span', 20),
              g.Fc(26),
              g.Pb(),
              g.Fc(
                27,
                '\n                    Web Developer\n                  '
              ),
              g.Pb(),
              g.Fc(28, '\n\n                  '),
              g.Mb(29, 'img', 21),
              g.Fc(30, '\n                '),
              g.Pb(),
              g.Fc(31, '\n\n                '),
              g.Qb(32, 'div', 22),
              g.Fc(33, '\n                  '),
              g.ec(),
              g.Qb(34, 'svg', 23),
              g.Fc(35, '\n                    '),
              g.Mb(36, 'path', 24),
              g.Fc(37, '\n                  '),
              g.Pb(),
              g.Fc(38, '\n\n                  '),
              g.Qb(39, 'svg', 25),
              g.Fc(40, '\n                    '),
              g.Mb(41, 'path', 26),
              g.Fc(42, '\n                  '),
              g.Pb(),
              g.Fc(43, '\n\n                  '),
              g.Qb(44, 'svg', 27),
              g.Fc(45, '\n                    '),
              g.Mb(46, 'path', 28),
              g.Fc(47, '\n                  '),
              g.Pb(),
              g.Fc(48, '\n                '),
              g.Pb(),
              g.Fc(49, '\n              '),
              g.Pb(),
              g.Fc(50, '\n            '),
              g.Pb(),
              g.Fc(51, '\n          '),
              g.Pb(),
              g.Fc(52, '\n        '),
              g.Pb()),
            2 & n)
          ) {
            var e = t.$implicit,
              i = t.index,
              a = g.fc();
            g.xb(8),
              g.kc('src', 'assets/img/v6/reviews/' + (i + 1) + '.jpg', g.yc),
              g.xb(10),
              g.kc('icon', a.fa.quoteLeft),
              g.xb(8),
              g.Hc('', e.author, ',');
          }
        }
        var _,
          R,
          U,
          X,
          B =
            (((_ = (function() {
              function t() {
                n(this, t),
                  (this.fa = {
                    longArrowAltRight: v.l,
                    longArrowAltLeft: v.k,
                    quoteLeft: v.q
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
              return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(n) {
              return new (n || _)();
            }),
            (_.ɵcmp = g.Fb({
              type: _,
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
                  (g.Qb(0, 'section', 0),
                  g.Fc(1, '\n  '),
                  g.Qb(2, 'div', 1),
                  g.Fc(3, '\n    '),
                  g.Qb(4, 'div', 2),
                  g.Fc(5, '\n      '),
                  g.Qb(6, 'div', 3),
                  g.Fc(7, '\n        '),
                  g.Dc(8, H, 53, 3, 'div', 4),
                  g.Fc(9, '\n      '),
                  g.Pb(),
                  g.Fc(10, '\n\n      '),
                  g.Fc(11, '\n      '),
                  g.Qb(12, 'div', 5),
                  g.Fc(13, '\n        '),
                  g.Qb(14, 'div', 6),
                  g.Fc(15, '\n          '),
                  g.Mb(16, 'fa-icon', 7),
                  g.Fc(17, '\n        '),
                  g.Pb(),
                  g.Fc(18, '\n\n        '),
                  g.Qb(19, 'div', 8),
                  g.Fc(20, '\n          '),
                  g.Mb(21, 'fa-icon', 7),
                  g.Fc(22, '\n        '),
                  g.Pb(),
                  g.Fc(23, '\n      '),
                  g.Pb(),
                  g.Fc(24, '\n    '),
                  g.Pb(),
                  g.Fc(25, '\n  '),
                  g.Pb(),
                  g.Fc(26, '\n'),
                  g.Pb(),
                  g.Fc(27, '\n')),
                  2 & n &&
                    (g.xb(4),
                    g.kc('swiper', t.config),
                    g.xb(4),
                    g.kc('ngForOf', t.reviews),
                    g.xb(8),
                    g.kc('icon', t.fa.longArrowAltLeft),
                    g.xb(5),
                    g.kc('icon', t.fa.longArrowAltRight));
              },
              directives: [N.b, x.j, w.a],
              styles: ['']
            })),
            _),
          Y = a('aaX3'),
          J = a('ZuuT'),
          W = a('VKEt'),
          G = a('iLZQ'),
          K = [
            {
              path: '',
              component:
                ((R = (function() {
                  function t() {
                    n(this, t);
                  }
                  return e(t, [{ key: 'ngOnInit', value: function() {} }]), t;
                })()),
                (R.ɵfac = function(n) {
                  return new (n || R)();
                }),
                (R.ɵcmp = g.Fb({
                  type: R,
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
                      (g.Mb(0, 'dc-navbar-default', 0),
                      g.Fc(1, '\n\n'),
                      g.Qb(2, 'main', 1),
                      g.Fc(3, '\n  '),
                      g.Mb(4, 'dc-smart-business-heading'),
                      g.Fc(5, '\n  '),
                      g.Mb(6, 'dc-slider-card-projects', 2),
                      g.Fc(7, '\n\n  '),
                      g.Mb(8, 'dc-smart-business-why-dashcore'),
                      g.Fc(9, '\n  '),
                      g.Mb(10, 'dc-counter5'),
                      g.Fc(11, '\n  '),
                      g.Mb(12, 'dc-smart-business-deserve-better'),
                      g.Fc(13, '\n  '),
                      g.Mb(14, 'dc-integration-floating-icons'),
                      g.Fc(15, '\n  '),
                      g.Mb(16, 'dc-testimonial-single-boxed'),
                      g.Fc(17, '\n\n  '),
                      g.Mb(18, 'dc-slider-icons', 3),
                      g.Fc(19, '\n\n  '),
                      g.Mb(20, 'dc-faqs1', 4),
                      g.Fc(21, '\n\n  '),
                      g.Mb(22, 'dc-cta1', 5),
                      g.Fc(23, '\n\n  '),
                      g.Mb(24, 'dc-footer2'),
                      g.Fc(25, '\n'),
                      g.Pb(),
                      g.Fc(26, '\n')),
                      2 & n &&
                        (g.kc('useOnlyDarkLogo', !0)('position', 'right'),
                        g.xb(6),
                        g.kc('liftUp', !1),
                        g.xb(12),
                        g.kc('background', 'light')('edge', 'top-left')(
                          'bordered',
                          !1
                        )('title', 'Featured in'),
                        g.xb(2),
                        g.kc('background', 'light'),
                        g.xb(2),
                        g.kc('background', 'contrast')('edge', 'top-left'));
                  },
                  directives: [F.a, y, P.a, M, I, q, T, B, Y.a, J.a, W.a, G.a],
                  styles: ['']
                })),
                R),
              data: {
                title: Object(h.c)(
                  'EveryThink - Perfect toolbox for your bussines'
                )
              }
            }
          ],
          $ =
            (((U = function t() {
              n(this, t);
            }).ɵmod = g.Jb({ type: U })),
            (U.ɵinj = g.Ib({
              factory: function(n) {
                return new (n || U)();
              },
              imports: [[f.g.forChild(K)], f.g]
            })),
            U),
          Z = a('ZpN7'),
          nn =
            (((X = function t() {
              n(this, t);
            }).ɵmod = g.Jb({ type: X })),
            (X.ɵinj = g.Ib({
              factory: function(n) {
                return new (n || X)();
              },
              imports: [
                [s.a, r.a, c.a, l.a, u.a, d.a, p.a, b.a, m.a, Z.a, k.n, $]
              ]
            })),
            X);
      },
      hKFN: function(t, i, a) {
        'use strict';
        a.d(i, 'a', function() {
          return r;
        });
        var o = a('LRne'),
          s = a('fXoL'),
          r = (function() {
            var t = (function() {
              function t() {
                n(this, t);
              }
              return (
                e(t, [
                  {
                    key: 'getFaqs',
                    value: function() {
                      return Object(o.a)([
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
                t
              );
            })();
            return (
              (t.ɵfac = function(n) {
                return new (n || t)();
              }),
              (t.ɵprov = s.Hb({
                token: t,
                factory: t.ɵfac,
                providedIn: 'root'
              })),
              t
            );
          })();
      },
      pu65: function(t, e, i) {
        'use strict';
        i.d(e, 'a', function() {
          return c;
        });
        var a = i('nhfI'),
          o = i('M0ag'),
          s = i('sYmb'),
          r = i('fXoL'),
          c = (function() {
            var t = function t() {
              n(this, t);
            };
            return (
              (t.ɵmod = r.Jb({ type: t })),
              (t.ɵinj = r.Ib({
                factory: function(n) {
                  return new (n || t)();
                },
                imports: [[a.c, o.a, s.a.forChild()]]
              })),
              t
            );
          })();
      }
    }
  ]);
})();
