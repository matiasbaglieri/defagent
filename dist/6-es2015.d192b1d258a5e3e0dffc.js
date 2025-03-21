(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '+tcz': function(t, e, s) {
      'use strict';
      s.d(e, 'a', function() {
        return u;
      }),
        s.d(e, 'b', function() {
          return o;
        });
      var n = s('fXoL'),
        i = function() {
          return (i =
            Object.assign ||
            function(t) {
              for (var e, s = 1, n = arguments.length; s < n; s++)
                for (var i in (e = arguments[s]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        r = (function() {
          function t(t, e, s) {
            var n = this;
            (this.target = t),
              (this.endVal = e),
              (this.options = s),
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
                n.startTime || (n.startTime = t);
                var e = t - n.startTime;
                (n.remaining = n.duration - e),
                  (n.frameVal = n.useEasing
                    ? n.countDown
                      ? n.startVal -
                        n.easingFn(e, 0, n.startVal - n.endVal, n.duration)
                      : n.easingFn(
                          e,
                          n.startVal,
                          n.endVal - n.startVal,
                          n.duration
                        )
                    : n.countDown
                    ? n.startVal - (e / n.duration) * (n.startVal - n.endVal)
                    : n.startVal + (e / n.duration) * (n.endVal - n.startVal)),
                  (n.frameVal = n.countDown
                    ? n.frameVal < n.endVal
                      ? n.endVal
                      : n.frameVal
                    : n.frameVal > n.endVal
                    ? n.endVal
                    : n.frameVal),
                  (n.frameVal =
                    Math.round(n.frameVal * n.decimalMult) / n.decimalMult),
                  n.printValue(n.frameVal),
                  e < n.duration
                    ? (n.rAF = requestAnimationFrame(n.count))
                    : null !== n.finalEndVal
                    ? n.update(n.finalEndVal)
                    : n.callback && n.callback();
              }),
              (this.formatNumber = function(t) {
                var e,
                  s,
                  i,
                  r,
                  a,
                  o = t < 0 ? '-' : '';
                if (
                  ((e = Math.abs(t).toFixed(n.options.decimalPlaces)),
                  (i = (s = (e += '').split('.'))[0]),
                  (r = s.length > 1 ? n.options.decimal + s[1] : ''),
                  n.options.useGrouping)
                ) {
                  a = '';
                  for (var u = 0, l = i.length; u < l; ++u)
                    0 !== u && u % 3 == 0 && (a = n.options.separator + a),
                      (a = i[l - u - 1] + a);
                  i = a;
                }
                return (
                  n.options.numerals &&
                    n.options.numerals.length &&
                    ((i = i.replace(/[0-9]/g, function(t) {
                      return n.options.numerals[+t];
                    })),
                    (r = r.replace(/[0-9]/g, function(t) {
                      return n.options.numerals[+t];
                    }))),
                  o + n.options.prefix + i + r + n.options.suffix
                );
              }),
              (this.easeOutExpo = function(t, e, s, n) {
                return (s * (1 - Math.pow(2, (-10 * t) / n)) * 1024) / 1023 + e;
              }),
              (this.options = i({}, this.defaults, s)),
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
        a = s('ofXK');
      let o = (() => {
          let t = class {
            constructor(t, e, s) {
              (this.el = t),
                (this.zone = e),
                (this.platformId = s),
                (this.options = {}),
                (this.reanimateOnClick = !0),
                (this.complete = new n.n());
            }
            onClick() {
              this.reanimateOnClick && this.animate();
            }
            ngOnChanges(t) {
              Object(a.v)(this.platformId) &&
                t.endVal &&
                void 0 !== t.endVal.currentValue &&
                (void 0 !== this.previousEndVal &&
                  (this.options = Object.assign({}, this.options, {
                    startVal: this.previousEndVal
                  })),
                (this.countUp = new r(
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
            (t.ɵfac = function(e) {
              return new (e || t)(n.Lb(n.l), n.Lb(n.z), n.Lb(n.B));
            }),
            (t.ɵdir = n.Gb({
              type: t,
              selectors: [['', 'countUp', '']],
              hostBindings: function(t, e) {
                1 & t &&
                  n.bc('click', function() {
                    return e.onClick();
                  });
              },
              inputs: {
                options: 'options',
                reanimateOnClick: 'reanimateOnClick',
                endVal: ['countUp', 'endVal']
              },
              outputs: { complete: 'complete' },
              features: [n.vb]
            })),
            t
          );
        })(),
        u = (() => {
          let t = class {};
          return (
            (t.ɵmod = n.Jb({ type: t })),
            (t.ɵinj = n.Ib({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[]]
            })),
            t
          );
        })();
    },
    '2d4A': function(t, e, s) {
      'use strict';
      s.d(e, 'a', function() {
        return u;
      });
      var n = s('nhfI'),
        i = s('6NWb'),
        r = s('M0ag'),
        a = s('sYmb'),
        o = s('fXoL');
      let u = (() => {
        class t {}
        return (
          (t.ɵmod = o.Jb({ type: t })),
          (t.ɵinj = o.Ib({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[n.c, i.b, r.a, a.a.forChild()]]
          })),
          t
        );
      })();
    },
    ELNm: function(t, e, s) {
      var n;
      (n = function() {
        return (function(t) {
          var e = {};
          function s(n) {
            if (e[n]) return e[n].exports;
            var i = (e[n] = { exports: {}, id: n, loaded: !1 });
            return (
              t[n].call(i.exports, i, i.exports, s), (i.loaded = !0), i.exports
            );
          }
          return (s.m = t), (s.c = e), (s.p = ''), s(0);
        })([
          function(t, e, s) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var n = (function() {
                function t(t, e) {
                  for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(t, n.key, n);
                  }
                }
                return function(e, s, n) {
                  return s && t(e.prototype, s), n && t(e, n), e;
                };
              })(),
              i = s(1),
              r = s(3),
              a = (function() {
                function t(e, s) {
                  !(function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, t),
                    i.initializer.load(this, s, e),
                    this.begin();
                }
                return (
                  n(t, [
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
                        var s = this;
                        this.fadeOut &&
                          this.el.classList.contains(this.fadeOutClass) &&
                          (this.el.classList.remove(this.fadeOutClass),
                          this.cursor &&
                            this.cursor.classList.remove(this.fadeOutClass));
                        var n = this.humanizer(this.typeSpeed),
                          i = 1;
                        !0 !== this.pause.status
                          ? (this.timeout = setTimeout(function() {
                              e = r.htmlParser.typeHtmlChars(t, e, s);
                              var n = 0,
                                a = t.substr(e);
                              if ('^' === a.charAt(0) && /^\^\d+/.test(a)) {
                                var o = 1;
                                (o += (a = /\d+/.exec(a)[0]).length),
                                  (n = parseInt(a)),
                                  (s.temporaryPause = !0),
                                  s.options.onTypingPaused(s.arrayPos, s),
                                  (t = t.substring(0, e) + t.substring(e + o)),
                                  s.toggleBlinking(!0);
                              }
                              if ('`' === a.charAt(0)) {
                                for (
                                  ;
                                  '`' !== t.substr(e + i).charAt(0) &&
                                  (i++, !(e + i > t.length));

                                );
                                var u = t.substring(0, e),
                                  l = t.substring(u.length + 1, e + i),
                                  p = t.substring(e + i + 1);
                                (t = u + l + p), i--;
                              }
                              s.timeout = setTimeout(function() {
                                s.toggleBlinking(!1),
                                  e >= t.length
                                    ? s.doneTyping(t, e)
                                    : s.keepTyping(t, e, i),
                                  s.temporaryPause &&
                                    ((s.temporaryPause = !1),
                                    s.options.onTypingResumed(s.arrayPos, s));
                              }, n);
                            }, n))
                          : this.setPauseStatus(t, e, !0);
                      }
                    },
                    {
                      key: 'keepTyping',
                      value: function(t, e, s) {
                        0 === e &&
                          (this.toggleBlinking(!1),
                          this.options.preStringTyped(this.arrayPos, this));
                        var n = t.substr(0, (e += s));
                        this.replaceText(n), this.typewrite(t, e);
                      }
                    },
                    {
                      key: 'doneTyping',
                      value: function(t, e) {
                        var s = this;
                        this.options.onStringTyped(this.arrayPos, this),
                          this.toggleBlinking(!0),
                          (this.arrayPos === this.strings.length - 1 &&
                            (this.complete(),
                            !1 === this.loop ||
                              this.curLoop === this.loopCount)) ||
                            (this.timeout = setTimeout(function() {
                              s.backspace(t, e);
                            }, this.backDelay));
                      }
                    },
                    {
                      key: 'backspace',
                      value: function(t, e) {
                        var s = this;
                        if (!0 !== this.pause.status) {
                          if (this.fadeOut) return this.initFadeOut();
                          this.toggleBlinking(!1);
                          var n = this.humanizer(this.backSpeed);
                          this.timeout = setTimeout(function() {
                            e = r.htmlParser.backSpaceHtmlChars(t, e, s);
                            var n = t.substr(0, e);
                            if ((s.replaceText(n), s.smartBackspace)) {
                              var i = s.strings[s.arrayPos + 1];
                              s.stopNum = i && n === i.substr(0, e) ? e : 0;
                            }
                            e > s.stopNum
                              ? (e--, s.backspace(t, e))
                              : e <= s.stopNum &&
                                (s.arrayPos++,
                                s.arrayPos === s.strings.length
                                  ? ((s.arrayPos = 0),
                                    s.options.onLastStringBackspaced(),
                                    s.shuffleStringsIfNeeded(),
                                    s.begin())
                                  : s.typewrite(
                                      s.strings[s.sequence[s.arrayPos]],
                                      e
                                    ));
                          }, n);
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
                      value: function(t, e, s) {
                        (this.pause.typewrite = s),
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
                            (this.cursor.className += ' ' + this.fadeOutClass),
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
          function(t, e, s) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var n,
              i =
                Object.assign ||
                function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var s = arguments[e];
                    for (var n in s)
                      Object.prototype.hasOwnProperty.call(s, n) &&
                        (t[n] = s[n]);
                  }
                  return t;
                },
              r = (function() {
                function t(t, e) {
                  for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(t, n.key, n);
                  }
                }
                return function(e, s, n) {
                  return s && t(e.prototype, s), n && t(e, n), e;
                };
              })(),
              a = (n = s(2)) && n.__esModule ? n : { default: n },
              o = (function() {
                function t() {
                  !(function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, t);
                }
                return (
                  r(t, [
                    {
                      key: 'load',
                      value: function(t, e, s) {
                        if (
                          ((t.el =
                            'string' == typeof s
                              ? document.querySelector(s)
                              : s),
                          (t.options = i({}, a.default, e)),
                          (t.isInput = 'input' === t.el.tagName.toLowerCase()),
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
                              ? document.querySelector(t.options.stringsElement)
                              : t.options.stringsElement),
                          t.stringsElement)
                        ) {
                          (t.strings = []),
                            (t.stringsElement.style.display = 'none');
                          var n = Array.prototype.slice.apply(
                              t.stringsElement.children
                            ),
                            r = n.length;
                          if (r)
                            for (var o = 0; o < r; o += 1)
                              t.strings.push(n[o].innerHTML.trim());
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
                          var s = '';
                          t.showCursor &&
                            (s +=
                              '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      '),
                            t.fadeOut &&
                              (s +=
                                '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      '),
                            0 !== e.length &&
                              ((e.innerHTML = s), document.body.appendChild(e));
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
            var s = (function() {
                function t(t, e) {
                  for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(t, n.key, n);
                  }
                }
                return function(e, s, n) {
                  return s && t(e.prototype, s), n && t(e, n), e;
                };
              })(),
              n = (function() {
                function t() {
                  !(function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, t);
                }
                return (
                  s(t, [
                    {
                      key: 'typeHtmlChars',
                      value: function(t, e, s) {
                        if ('html' !== s.contentType) return e;
                        var n = t.substr(e).charAt(0);
                        if ('<' === n || '&' === n) {
                          var i;
                          for (
                            i = '<' === n ? '>' : ';';
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
                      value: function(t, e, s) {
                        if ('html' !== s.contentType) return e;
                        var n = t.substr(e).charAt(0);
                        if ('>' === n || ';' === n) {
                          var i;
                          for (
                            i = '>' === n ? '<' : '&';
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
            e.default = n;
            var i = new n();
            e.htmlParser = i;
          }
        ]);
      }),
        (t.exports = n());
    },
    V6j0: function(t, e, s) {
      'use strict';
      s.d(e, 'a', function() {
        return o;
      });
      var n = s('M0ag'),
        i = s('+tcz'),
        r = s('sYmb'),
        a = s('fXoL');
      let o = (() => {
        class t {}
        return (
          (t.ɵmod = a.Jb({ type: t })),
          (t.ɵinj = a.Ib({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[n.a, i.a, r.a.forChild()]]
          })),
          t
        );
      })();
    },
    pRTP: function(t, e, s) {
      'use strict';
      s.d(e, 'a', function() {
        return l;
      }),
        s.d(e, 'b', function() {
          return u;
        });
      var n = s('fXoL'),
        i = s('ELNm'),
        r = s.n(i);
      const a = ['wrapper'],
        o = ['*'];
      let u = (() => {
          class t {
            constructor() {
              (this.completed = new n.n()),
                (this.preStringTyped = new n.n()),
                (this.stringTyped = new n.n()),
                (this.lastStringBackspaced = new n.n()),
                (this.typingPaused = new n.n()),
                (this.typingResumed = new n.n()),
                (this.reset = new n.n()),
                (this.stopped = new n.n()),
                (this.started = new n.n()),
                (this.destroyed = new n.n());
            }
            ngOnInit() {
              this.typed = new r.a(
                this.content.nativeElement.querySelector('.typing'),
                this.options
              );
            }
            ngAfterViewInit() {
              !1 !== this.showCursor && this.updateCursorStyle();
            }
            toggle() {
              this.typed.toggle();
            }
            stop() {
              this.typed.stop();
            }
            start() {
              this.typed.start();
            }
            destroy() {
              this.typed.destroy();
            }
            doReset(t) {
              this.typed.reset(t);
            }
            get options() {
              const t = t => () => t.emit(),
                e = t => e => t.emit(e),
                s = {
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
                Object.keys(s).forEach(t => {
                  void 0 === s[t] && delete s[t];
                }),
                s
              );
            }
            updateCursorStyle() {
              const t = getComputedStyle(
                  this.content.nativeElement.querySelector('.typing')
                ),
                e = this.content.nativeElement.querySelector('.typed-cursor')
                  .style;
              (e.fontSize = t.fontSize),
                (e.color = this.cursorColor || t.color);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = n.Fb({
              type: t,
              selectors: [['ngx-typed-js']],
              viewQuery: function(t, e) {
                var s;
                1 & t && n.Jc(a, !0),
                  2 & t && n.sc((s = n.cc())) && (e.content = s.first);
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
              ngContentSelectors: o,
              decls: 6,
              vars: 0,
              consts: [['wrapper', '']],
              template: function(t, e) {
                1 & t &&
                  (n.jc(),
                  n.Qb(0, 'div', null, 0),
                  n.Fc(2, '\n  '),
                  n.ic(3),
                  n.Fc(4, '\n'),
                  n.Pb(),
                  n.Fc(5, '\n'));
              },
              styles: ['[_nghost-%COMP%] .typing{display:inline}']
            })),
            t
          );
        })(),
        l = (() => {
          class t {}
          return (
            (t.ɵmod = n.Jb({ type: t })),
            (t.ɵinj = n.Ib({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[]]
            })),
            t
          );
        })();
    }
  }
]);
