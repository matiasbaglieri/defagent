!(function() {
  function t(t, e) {
    if (!(t instanceof e))
      throw new TypeError('Cannot call a class as a function');
  }
  function e(t, e) {
    for (var n = 0; n < e.length; n++) {
      var s = e[n];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        'value' in s && (s.writable = !0),
        Object.defineProperty(t, s.key, s);
    }
  }
  function n(t, n, s) {
    return n && e(t.prototype, n), s && e(t, s), t;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
    {
      '+tcz': function(e, s, i) {
        'use strict';
        i.d(s, 'a', function() {
          return h;
        }),
          i.d(s, 'b', function() {
            return p;
          });
        var r,
          a,
          o = i('fXoL'),
          u = function() {
            return (u =
              Object.assign ||
              function(t) {
                for (var e, n = 1, s = arguments.length; n < s; n++)
                  for (var i in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }).apply(this, arguments);
          },
          l = (function() {
            function t(t, e, n) {
              var s = this;
              (this.target = t),
                (this.endVal = e),
                (this.options = n),
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
                  s.startTime || (s.startTime = t);
                  var e = t - s.startTime;
                  (s.remaining = s.duration - e),
                    (s.frameVal = s.useEasing
                      ? s.countDown
                        ? s.startVal -
                          s.easingFn(e, 0, s.startVal - s.endVal, s.duration)
                        : s.easingFn(
                            e,
                            s.startVal,
                            s.endVal - s.startVal,
                            s.duration
                          )
                      : s.countDown
                      ? s.startVal - (e / s.duration) * (s.startVal - s.endVal)
                      : s.startVal +
                        (e / s.duration) * (s.endVal - s.startVal)),
                    (s.frameVal = s.countDown
                      ? s.frameVal < s.endVal
                        ? s.endVal
                        : s.frameVal
                      : s.frameVal > s.endVal
                      ? s.endVal
                      : s.frameVal),
                    (s.frameVal =
                      Math.round(s.frameVal * s.decimalMult) / s.decimalMult),
                    s.printValue(s.frameVal),
                    e < s.duration
                      ? (s.rAF = requestAnimationFrame(s.count))
                      : null !== s.finalEndVal
                      ? s.update(s.finalEndVal)
                      : s.callback && s.callback();
                }),
                (this.formatNumber = function(t) {
                  var e,
                    n,
                    i,
                    r,
                    a,
                    o = t < 0 ? '-' : '';
                  if (
                    ((e = Math.abs(t).toFixed(s.options.decimalPlaces)),
                    (i = (n = (e += '').split('.'))[0]),
                    (r = n.length > 1 ? s.options.decimal + n[1] : ''),
                    s.options.useGrouping)
                  ) {
                    a = '';
                    for (var u = 0, l = i.length; u < l; ++u)
                      0 !== u && u % 3 == 0 && (a = s.options.separator + a),
                        (a = i[l - u - 1] + a);
                    i = a;
                  }
                  return (
                    s.options.numerals &&
                      s.options.numerals.length &&
                      ((i = i.replace(/[0-9]/g, function(t) {
                        return s.options.numerals[+t];
                      })),
                      (r = r.replace(/[0-9]/g, function(t) {
                        return s.options.numerals[+t];
                      }))),
                    o + s.options.prefix + i + r + s.options.suffix
                  );
                }),
                (this.easeOutExpo = function(t, e, n, s) {
                  return (
                    (n * (1 - Math.pow(2, (-10 * t) / s)) * 1024) / 1023 + e
                  );
                }),
                (this.options = u({}, this.defaults, n)),
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
                var e = this.formattingFn(t);
                'INPUT' === this.el.tagName
                  ? (this.el.value = e)
                  : 'text' === this.el.tagName || 'tspan' === this.el.tagName
                  ? (this.el.textContent = e)
                  : (this.el.innerHTML = e);
              }),
              (t.prototype.ensureNumber = function(t) {
                return 'number' == typeof t && !isNaN(t);
              }),
              (t.prototype.validateValue = function(t) {
                var e = Number(t);
                return this.ensureNumber(e)
                  ? e
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
          c = i('ofXK'),
          p =
            (((a = (function() {
              function e(n, s, i) {
                t(this, e),
                  (this.el = n),
                  (this.zone = s),
                  (this.platformId = i),
                  (this.options = {}),
                  (this.reanimateOnClick = !0),
                  (this.complete = new o.n());
              }
              return (
                n(e, [
                  {
                    key: 'onClick',
                    value: function() {
                      this.reanimateOnClick && this.animate();
                    }
                  },
                  {
                    key: 'ngOnChanges',
                    value: function(t) {
                      Object(c.v)(this.platformId) &&
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
                e
              );
            })()).ɵfac = function(t) {
              return new (t || a)(o.Lb(o.l), o.Lb(o.z), o.Lb(o.B));
            }),
            (a.ɵdir = o.Gb({
              type: a,
              selectors: [['', 'countUp', '']],
              hostBindings: function(t, e) {
                1 & t &&
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
            a),
          h =
            (((r = function e() {
              t(this, e);
            }).ɵmod = o.Jb({ type: r })),
            (r.ɵinj = o.Ib({
              factory: function(t) {
                return new (t || r)();
              },
              imports: [[]]
            })),
            r);
      },
      '2d4A': function(e, n, s) {
        'use strict';
        s.d(n, 'a', function() {
          return l;
        });
        var i = s('nhfI'),
          r = s('6NWb'),
          a = s('M0ag'),
          o = s('sYmb'),
          u = s('fXoL'),
          l = (function() {
            var e = function e() {
              t(this, e);
            };
            return (
              (e.ɵmod = u.Jb({ type: e })),
              (e.ɵinj = u.Ib({
                factory: function(t) {
                  return new (t || e)();
                },
                imports: [[i.c, r.b, a.a, o.a.forChild()]]
              })),
              e
            );
          })();
      },
      ELNm: function(t, e, n) {
        var s;
        (s = function() {
          return (function(t) {
            var e = {};
            function n(s) {
              if (e[s]) return e[s].exports;
              var i = (e[s] = { exports: {}, id: s, loaded: !1 });
              return (
                t[s].call(i.exports, i, i.exports, n),
                (i.loaded = !0),
                i.exports
              );
            }
            return (n.m = t), (n.c = e), (n.p = ''), n(0);
          })([
            function(t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', { value: !0 });
              var s = (function() {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var s = e[n];
                      (s.enumerable = s.enumerable || !1),
                        (s.configurable = !0),
                        'value' in s && (s.writable = !0),
                        Object.defineProperty(t, s.key, s);
                    }
                  }
                  return function(e, n, s) {
                    return n && t(e.prototype, n), s && t(e, s), e;
                  };
                })(),
                i = n(1),
                r = n(3),
                a = (function() {
                  function t(e, n) {
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, t),
                      i.initializer.load(this, n, e),
                      this.begin();
                  }
                  return (
                    s(t, [
                      {
                        key: 'toggle',
                        value: function() {
                          this.pause.status ? this.start() : this.stop();
                        }
                      },
                      {
                        key: 'stop',
                        value: function() {
                          this.typingComplete ||
                            this.pause.status ||
                            (this.toggleBlinking(!0),
                            (this.pause.status = !0),
                            this.options.onStop(this.arrayPos, this));
                        }
                      },
                      {
                        key: 'start',
                        value: function() {
                          this.typingComplete ||
                            (this.pause.status &&
                              ((this.pause.status = !1),
                              this.pause.typewrite
                                ? this.typewrite(
                                    this.pause.curString,
                                    this.pause.curStrPos
                                  )
                                : this.backspace(
                                    this.pause.curString,
                                    this.pause.curStrPos
                                  ),
                              this.options.onStart(this.arrayPos, this)));
                        }
                      },
                      {
                        key: 'destroy',
                        value: function() {
                          this.reset(!1), this.options.onDestroy(this);
                        }
                      },
                      {
                        key: 'reset',
                        value: function() {
                          var t =
                            arguments.length <= 0 ||
                            void 0 === arguments[0] ||
                            arguments[0];
                          clearInterval(this.timeout),
                            this.replaceText(''),
                            this.cursor &&
                              this.cursor.parentNode &&
                              (this.cursor.parentNode.removeChild(this.cursor),
                              (this.cursor = null)),
                            (this.strPos = 0),
                            (this.arrayPos = 0),
                            (this.curLoop = 0),
                            t &&
                              (this.insertCursor(),
                              this.options.onReset(this),
                              this.begin());
                        }
                      },
                      {
                        key: 'begin',
                        value: function() {
                          var t = this;
                          this.options.onBegin(this),
                            (this.typingComplete = !1),
                            this.shuffleStringsIfNeeded(this),
                            this.insertCursor(),
                            this.bindInputFocusEvents && this.bindFocusEvents(),
                            (this.timeout = setTimeout(function() {
                              t.currentElContent &&
                              0 !== t.currentElContent.length
                                ? t.backspace(
                                    t.currentElContent,
                                    t.currentElContent.length
                                  )
                                : t.typewrite(
                                    t.strings[t.sequence[t.arrayPos]],
                                    t.strPos
                                  );
                            }, this.startDelay));
                        }
                      },
                      {
                        key: 'typewrite',
                        value: function(t, e) {
                          var n = this;
                          this.fadeOut &&
                            this.el.classList.contains(this.fadeOutClass) &&
                            (this.el.classList.remove(this.fadeOutClass),
                            this.cursor &&
                              this.cursor.classList.remove(this.fadeOutClass));
                          var s = this.humanizer(this.typeSpeed),
                            i = 1;
                          !0 !== this.pause.status
                            ? (this.timeout = setTimeout(function() {
                                e = r.htmlParser.typeHtmlChars(t, e, n);
                                var s = 0,
                                  a = t.substr(e);
                                if ('^' === a.charAt(0) && /^\^\d+/.test(a)) {
                                  var o = 1;
                                  (o += (a = /\d+/.exec(a)[0]).length),
                                    (s = parseInt(a)),
                                    (n.temporaryPause = !0),
                                    n.options.onTypingPaused(n.arrayPos, n),
                                    (t =
                                      t.substring(0, e) + t.substring(e + o)),
                                    n.toggleBlinking(!0);
                                }
                                if ('`' === a.charAt(0)) {
                                  for (
                                    ;
                                    '`' !== t.substr(e + i).charAt(0) &&
                                    (i++, !(e + i > t.length));

                                  );
                                  var u = t.substring(0, e),
                                    l = t.substring(u.length + 1, e + i),
                                    c = t.substring(e + i + 1);
                                  (t = u + l + c), i--;
                                }
                                n.timeout = setTimeout(function() {
                                  n.toggleBlinking(!1),
                                    e >= t.length
                                      ? n.doneTyping(t, e)
                                      : n.keepTyping(t, e, i),
                                    n.temporaryPause &&
                                      ((n.temporaryPause = !1),
                                      n.options.onTypingResumed(n.arrayPos, n));
                                }, s);
                              }, s))
                            : this.setPauseStatus(t, e, !0);
                        }
                      },
                      {
                        key: 'keepTyping',
                        value: function(t, e, n) {
                          0 === e &&
                            (this.toggleBlinking(!1),
                            this.options.preStringTyped(this.arrayPos, this));
                          var s = t.substr(0, (e += n));
                          this.replaceText(s), this.typewrite(t, e);
                        }
                      },
                      {
                        key: 'doneTyping',
                        value: function(t, e) {
                          var n = this;
                          this.options.onStringTyped(this.arrayPos, this),
                            this.toggleBlinking(!0),
                            (this.arrayPos === this.strings.length - 1 &&
                              (this.complete(),
                              !1 === this.loop ||
                                this.curLoop === this.loopCount)) ||
                              (this.timeout = setTimeout(function() {
                                n.backspace(t, e);
                              }, this.backDelay));
                        }
                      },
                      {
                        key: 'backspace',
                        value: function(t, e) {
                          var n = this;
                          if (!0 !== this.pause.status) {
                            if (this.fadeOut) return this.initFadeOut();
                            this.toggleBlinking(!1);
                            var s = this.humanizer(this.backSpeed);
                            this.timeout = setTimeout(function() {
                              e = r.htmlParser.backSpaceHtmlChars(t, e, n);
                              var s = t.substr(0, e);
                              if ((n.replaceText(s), n.smartBackspace)) {
                                var i = n.strings[n.arrayPos + 1];
                                n.stopNum = i && s === i.substr(0, e) ? e : 0;
                              }
                              e > n.stopNum
                                ? (e--, n.backspace(t, e))
                                : e <= n.stopNum &&
                                  (n.arrayPos++,
                                  n.arrayPos === n.strings.length
                                    ? ((n.arrayPos = 0),
                                      n.options.onLastStringBackspaced(),
                                      n.shuffleStringsIfNeeded(),
                                      n.begin())
                                    : n.typewrite(
                                        n.strings[n.sequence[n.arrayPos]],
                                        e
                                      ));
                            }, s);
                          } else this.setPauseStatus(t, e, !0);
                        }
                      },
                      {
                        key: 'complete',
                        value: function() {
                          this.options.onComplete(this),
                            this.loop
                              ? this.curLoop++
                              : (this.typingComplete = !0);
                        }
                      },
                      {
                        key: 'setPauseStatus',
                        value: function(t, e, n) {
                          (this.pause.typewrite = n),
                            (this.pause.curString = t),
                            (this.pause.curStrPos = e);
                        }
                      },
                      {
                        key: 'toggleBlinking',
                        value: function(t) {
                          this.cursor &&
                            (this.pause.status ||
                              (this.cursorBlinking !== t &&
                                ((this.cursorBlinking = t),
                                t
                                  ? this.cursor.classList.add(
                                      'typed-cursor--blink'
                                    )
                                  : this.cursor.classList.remove(
                                      'typed-cursor--blink'
                                    ))));
                        }
                      },
                      {
                        key: 'humanizer',
                        value: function(t) {
                          return Math.round((Math.random() * t) / 2) + t;
                        }
                      },
                      {
                        key: 'shuffleStringsIfNeeded',
                        value: function() {
                          this.shuffle &&
                            (this.sequence = this.sequence.sort(function() {
                              return Math.random() - 0.5;
                            }));
                        }
                      },
                      {
                        key: 'initFadeOut',
                        value: function() {
                          var t = this;
                          return (
                            (this.el.className += ' ' + this.fadeOutClass),
                            this.cursor &&
                              (this.cursor.className +=
                                ' ' + this.fadeOutClass),
                            setTimeout(function() {
                              t.arrayPos++,
                                t.replaceText(''),
                                t.strings.length > t.arrayPos
                                  ? t.typewrite(
                                      t.strings[t.sequence[t.arrayPos]],
                                      0
                                    )
                                  : (t.typewrite(t.strings[0], 0),
                                    (t.arrayPos = 0));
                            }, this.fadeOutDelay)
                          );
                        }
                      },
                      {
                        key: 'replaceText',
                        value: function(t) {
                          this.attr
                            ? this.el.setAttribute(this.attr, t)
                            : this.isInput
                            ? (this.el.value = t)
                            : 'html' === this.contentType
                            ? (this.el.innerHTML = t)
                            : (this.el.textContent = t);
                        }
                      },
                      {
                        key: 'bindFocusEvents',
                        value: function() {
                          var t = this;
                          this.isInput &&
                            (this.el.addEventListener('focus', function(e) {
                              t.stop();
                            }),
                            this.el.addEventListener('blur', function(e) {
                              (t.el.value && 0 !== t.el.value.length) ||
                                t.start();
                            }));
                        }
                      },
                      {
                        key: 'insertCursor',
                        value: function() {
                          this.showCursor &&
                            (this.cursor ||
                              ((this.cursor = document.createElement('span')),
                              (this.cursor.className = 'typed-cursor'),
                              (this.cursor.innerHTML = this.cursorChar),
                              this.el.parentNode &&
                                this.el.parentNode.insertBefore(
                                  this.cursor,
                                  this.el.nextSibling
                                )));
                        }
                      }
                    ]),
                    t
                  );
                })();
              (e.default = a), (t.exports = e.default);
            },
            function(t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', { value: !0 });
              var s,
                i =
                  Object.assign ||
                  function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var s in n)
                        Object.prototype.hasOwnProperty.call(n, s) &&
                          (t[s] = n[s]);
                    }
                    return t;
                  },
                r = (function() {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var s = e[n];
                      (s.enumerable = s.enumerable || !1),
                        (s.configurable = !0),
                        'value' in s && (s.writable = !0),
                        Object.defineProperty(t, s.key, s);
                    }
                  }
                  return function(e, n, s) {
                    return n && t(e.prototype, n), s && t(e, s), e;
                  };
                })(),
                a = (s = n(2)) && s.__esModule ? s : { default: s },
                o = (function() {
                  function t() {
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, t);
                  }
                  return (
                    r(t, [
                      {
                        key: 'load',
                        value: function(t, e, n) {
                          if (
                            ((t.el =
                              'string' == typeof n
                                ? document.querySelector(n)
                                : n),
                            (t.options = i({}, a.default, e)),
                            (t.isInput =
                              'input' === t.el.tagName.toLowerCase()),
                            (t.attr = t.options.attr),
                            (t.bindInputFocusEvents =
                              t.options.bindInputFocusEvents),
                            (t.showCursor = !t.isInput && t.options.showCursor),
                            (t.cursorChar = t.options.cursorChar),
                            (t.cursorBlinking = !0),
                            (t.elContent = t.attr
                              ? t.el.getAttribute(t.attr)
                              : t.el.textContent),
                            (t.contentType = t.options.contentType),
                            (t.typeSpeed = t.options.typeSpeed),
                            (t.startDelay = t.options.startDelay),
                            (t.backSpeed = t.options.backSpeed),
                            (t.smartBackspace = t.options.smartBackspace),
                            (t.backDelay = t.options.backDelay),
                            (t.fadeOut = t.options.fadeOut),
                            (t.fadeOutClass = t.options.fadeOutClass),
                            (t.fadeOutDelay = t.options.fadeOutDelay),
                            (t.isPaused = !1),
                            (t.strings = t.options.strings.map(function(t) {
                              return t.trim();
                            })),
                            (t.stringsElement =
                              'string' == typeof t.options.stringsElement
                                ? document.querySelector(
                                    t.options.stringsElement
                                  )
                                : t.options.stringsElement),
                            t.stringsElement)
                          ) {
                            (t.strings = []),
                              (t.stringsElement.style.display = 'none');
                            var s = Array.prototype.slice.apply(
                                t.stringsElement.children
                              ),
                              r = s.length;
                            if (r)
                              for (var o = 0; o < r; o += 1)
                                t.strings.push(s[o].innerHTML.trim());
                          }
                          for (var o in ((t.strPos = 0),
                          (t.arrayPos = 0),
                          (t.stopNum = 0),
                          (t.loop = t.options.loop),
                          (t.loopCount = t.options.loopCount),
                          (t.curLoop = 0),
                          (t.shuffle = t.options.shuffle),
                          (t.sequence = []),
                          (t.pause = {
                            status: !1,
                            typewrite: !0,
                            curString: '',
                            curStrPos: 0
                          }),
                          (t.typingComplete = !1),
                          t.strings))
                            t.sequence[o] = o;
                          (t.currentElContent = this.getCurrentElContent(t)),
                            (t.autoInsertCss = t.options.autoInsertCss),
                            this.appendAnimationCss(t);
                        }
                      },
                      {
                        key: 'getCurrentElContent',
                        value: function(t) {
                          return t.attr
                            ? t.el.getAttribute(t.attr)
                            : t.isInput
                            ? t.el.value
                            : 'html' === t.contentType
                            ? t.el.innerHTML
                            : t.el.textContent;
                        }
                      },
                      {
                        key: 'appendAnimationCss',
                        value: function(t) {
                          if (
                            t.autoInsertCss &&
                            (t.showCursor || t.fadeOut) &&
                            !document.querySelector('[data-typed-js-css]')
                          ) {
                            var e = document.createElement('style');
                            (e.type = 'text/css'),
                              e.setAttribute('data-typed-js-css', !0);
                            var n = '';
                            t.showCursor &&
                              (n +=
                                '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      '),
                              t.fadeOut &&
                                (n +=
                                  '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      '),
                              0 !== e.length &&
                                ((e.innerHTML = n),
                                document.body.appendChild(e));
                          }
                        }
                      }
                    ]),
                    t
                  );
                })();
              e.default = o;
              var u = new o();
              e.initializer = u;
            },
            function(t, e) {
              'use strict';
              Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.default = {
                  strings: [
                    'These are the default values...',
                    'You know what you should do?',
                    'Use your own!',
                    'Have a great day!'
                  ],
                  stringsElement: null,
                  typeSpeed: 0,
                  startDelay: 0,
                  backSpeed: 0,
                  smartBackspace: !0,
                  shuffle: !1,
                  backDelay: 700,
                  fadeOut: !1,
                  fadeOutClass: 'typed-fade-out',
                  fadeOutDelay: 500,
                  loop: !1,
                  loopCount: 1 / 0,
                  showCursor: !0,
                  cursorChar: '|',
                  autoInsertCss: !0,
                  attr: null,
                  bindInputFocusEvents: !1,
                  contentType: 'html',
                  onBegin: function(t) {},
                  onComplete: function(t) {},
                  preStringTyped: function(t, e) {},
                  onStringTyped: function(t, e) {},
                  onLastStringBackspaced: function(t) {},
                  onTypingPaused: function(t, e) {},
                  onTypingResumed: function(t, e) {},
                  onReset: function(t) {},
                  onStop: function(t, e) {},
                  onStart: function(t, e) {},
                  onDestroy: function(t) {}
                }),
                (t.exports = e.default);
            },
            function(t, e) {
              'use strict';
              Object.defineProperty(e, '__esModule', { value: !0 });
              var n = (function() {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var s = e[n];
                      (s.enumerable = s.enumerable || !1),
                        (s.configurable = !0),
                        'value' in s && (s.writable = !0),
                        Object.defineProperty(t, s.key, s);
                    }
                  }
                  return function(e, n, s) {
                    return n && t(e.prototype, n), s && t(e, s), e;
                  };
                })(),
                s = (function() {
                  function t() {
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, t);
                  }
                  return (
                    n(t, [
                      {
                        key: 'typeHtmlChars',
                        value: function(t, e, n) {
                          if ('html' !== n.contentType) return e;
                          var s = t.substr(e).charAt(0);
                          if ('<' === s || '&' === s) {
                            var i;
                            for (
                              i = '<' === s ? '>' : ';';
                              t.substr(e + 1).charAt(0) !== i &&
                              !(1 + ++e > t.length);

                            );
                            e++;
                          }
                          return e;
                        }
                      },
                      {
                        key: 'backSpaceHtmlChars',
                        value: function(t, e, n) {
                          if ('html' !== n.contentType) return e;
                          var s = t.substr(e).charAt(0);
                          if ('>' === s || ';' === s) {
                            var i;
                            for (
                              i = '>' === s ? '<' : '&';
                              t.substr(e - 1).charAt(0) !== i && !(--e < 0);

                            );
                            e--;
                          }
                          return e;
                        }
                      }
                    ]),
                    t
                  );
                })();
              e.default = s;
              var i = new s();
              e.htmlParser = i;
            }
          ]);
        }),
          (t.exports = s());
      },
      V6j0: function(e, n, s) {
        'use strict';
        s.d(n, 'a', function() {
          return u;
        });
        var i = s('M0ag'),
          r = s('+tcz'),
          a = s('sYmb'),
          o = s('fXoL'),
          u = (function() {
            var e = function e() {
              t(this, e);
            };
            return (
              (e.ɵmod = o.Jb({ type: e })),
              (e.ɵinj = o.Ib({
                factory: function(t) {
                  return new (t || e)();
                },
                imports: [[i.a, r.a, a.a.forChild()]]
              })),
              e
            );
          })();
      },
      pRTP: function(e, s, i) {
        'use strict';
        i.d(s, 'a', function() {
          return p;
        }),
          i.d(s, 'b', function() {
            return c;
          });
        var r = i('fXoL'),
          a = i('ELNm'),
          o = i.n(a),
          u = ['wrapper'],
          l = ['*'],
          c = (function() {
            var e = (function() {
              function e() {
                t(this, e),
                  (this.completed = new r.n()),
                  (this.preStringTyped = new r.n()),
                  (this.stringTyped = new r.n()),
                  (this.lastStringBackspaced = new r.n()),
                  (this.typingPaused = new r.n()),
                  (this.typingResumed = new r.n()),
                  (this.reset = new r.n()),
                  (this.stopped = new r.n()),
                  (this.started = new r.n()),
                  (this.destroyed = new r.n());
              }
              return (
                n(e, [
                  {
                    key: 'ngOnInit',
                    value: function() {
                      this.typed = new o.a(
                        this.content.nativeElement.querySelector('.typing'),
                        this.options
                      );
                    }
                  },
                  {
                    key: 'ngAfterViewInit',
                    value: function() {
                      !1 !== this.showCursor && this.updateCursorStyle();
                    }
                  },
                  {
                    key: 'toggle',
                    value: function() {
                      this.typed.toggle();
                    }
                  },
                  {
                    key: 'stop',
                    value: function() {
                      this.typed.stop();
                    }
                  },
                  {
                    key: 'start',
                    value: function() {
                      this.typed.start();
                    }
                  },
                  {
                    key: 'destroy',
                    value: function() {
                      this.typed.destroy();
                    }
                  },
                  {
                    key: 'doReset',
                    value: function(t) {
                      this.typed.reset(t);
                    }
                  },
                  {
                    key: 'updateCursorStyle',
                    value: function() {
                      var t = getComputedStyle(
                          this.content.nativeElement.querySelector('.typing')
                        ),
                        e = this.content.nativeElement.querySelector(
                          '.typed-cursor'
                        ).style;
                      (e.fontSize = t.fontSize),
                        (e.color = this.cursorColor || t.color);
                    }
                  },
                  {
                    key: 'options',
                    get: function() {
                      var t = function(t) {
                          return function() {
                            return t.emit();
                          };
                        },
                        e = function(t) {
                          return function(e) {
                            return t.emit(e);
                          };
                        },
                        n = {
                          strings: this.strings,
                          stringsElement: this.stringsElement,
                          typeSpeed: this.typeSpeed,
                          startDelay: this.startDelay,
                          backSpeed: this.backSpeed,
                          smartBackspace: this.smartBackspace,
                          shuffle: this.shuffle,
                          backDelay: this.backDelay,
                          fadeOut: this.fadeOut,
                          fadeOutClass: this.fadeOutClass,
                          fadeOutDelay: this.fadeOutDelay,
                          loop: this.loop,
                          loopCount: this.loopCount,
                          showCursor: this.showCursor,
                          autoInsertCss: this.autoInsertCss,
                          attr: this.attr,
                          bindInputFocusEvents: this.bindInputFocusEvents,
                          contentType: this.contentType,
                          onComplete: t(this.completed),
                          preStringTyped: e(this.preStringTyped),
                          onStringTyped: e(this.stringTyped),
                          onLastStringBackspaced: t(this.lastStringBackspaced),
                          onTypingPaused: e(this.typingPaused),
                          onTypingResumed: e(this.typingResumed),
                          onReset: t(this.reset),
                          onStop: e(this.stopped),
                          onStart: e(this.started),
                          onDestroy: t(this.destroyed)
                        };
                      return (
                        Object.keys(n).forEach(function(t) {
                          void 0 === n[t] && delete n[t];
                        }),
                        n
                      );
                    }
                  }
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function(t) {
                return new (t || e)();
              }),
              (e.ɵcmp = r.Fb({
                type: e,
                selectors: [['ngx-typed-js']],
                viewQuery: function(t, e) {
                  var n;
                  1 & t && r.Jc(u, !0),
                    2 & t && r.sc((n = r.cc())) && (e.content = n.first);
                },
                inputs: {
                  cursorColor: 'cursorColor',
                  strings: 'strings',
                  stringsElement: 'stringsElement',
                  typeSpeed: 'typeSpeed',
                  startDelay: 'startDelay',
                  backSpeed: 'backSpeed',
                  smartBackspace: 'smartBackspace',
                  shuffle: 'shuffle',
                  backDelay: 'backDelay',
                  fadeOut: 'fadeOut',
                  fadeOutClass: 'fadeOutClass',
                  fadeOutDelay: 'fadeOutDelay',
                  loop: 'loop',
                  loopCount: 'loopCount',
                  showCursor: 'showCursor',
                  cursorChar: 'cursorChar',
                  autoInsertCss: 'autoInsertCss',
                  attr: 'attr',
                  bindInputFocusEvents: 'bindInputFocusEvents',
                  contentType: 'contentType'
                },
                outputs: {
                  completed: 'completed',
                  preStringTyped: 'preStringTyped',
                  stringTyped: 'stringTyped',
                  lastStringBackspaced: 'lastStringBackspaced',
                  typingPaused: 'typingPaused',
                  typingResumed: 'typingResumed',
                  reset: 'reset',
                  stopped: 'stopped',
                  started: 'started',
                  destroyed: 'destroyed'
                },
                ngContentSelectors: l,
                decls: 6,
                vars: 0,
                consts: [['wrapper', '']],
                template: function(t, e) {
                  1 & t &&
                    (r.jc(),
                    r.Qb(0, 'div', null, 0),
                    r.Fc(2, '\n  '),
                    r.ic(3),
                    r.Fc(4, '\n'),
                    r.Pb(),
                    r.Fc(5, '\n'));
                },
                styles: ['[_nghost-%COMP%] .typing{display:inline}']
              })),
              e
            );
          })(),
          p = (function() {
            var e = function e() {
              t(this, e);
            };
            return (
              (e.ɵmod = r.Jb({ type: e })),
              (e.ɵinj = r.Ib({
                factory: function(t) {
                  return new (t || e)();
                },
                imports: [[]]
              })),
              e
            );
          })();
      }
    }
  ]);
})();
