!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function() {
  return (function(e) {
    function t(n) {
      if (o[n]) return o[n].exports;
      var i = (o[n] = { exports: {}, id: n, loaded: !1 });
      return e[n].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var o = {};
    return (t.m = e), (t.c = o), (t.p = 'dist/'), t(0);
  })([
    function(e, t, o) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
            }
            return e;
          },
        r = (n(o(1)), o(6)),
        a = n(r),
        u = n(o(7)),
        c = n(o(8)),
        s = n(o(9)),
        d = n(o(10)),
        f = n(o(11)),
        l = n(o(14)),
        p = [],
        m = !1,
        b = {
          offset: 120,
          delay: 0,
          easing: 'ease',
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: 'DOMContentLoaded',
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1
        },
        v = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if ((e && (m = !0), m))
            return (p = (0, f.default)(p, b)), (0, d.default)(p, b.once), p;
        },
        y = function() {
          (p = (0, l.default)()), v();
        };
      e.exports = {
        init: function(e) {
          (b = i(b, e)), (p = (0, l.default)());
          var t = document.all && !window.atob;
          return (function(e) {
            return (
              !0 === e ||
              ('mobile' === e && s.default.mobile()) ||
              ('phone' === e && s.default.phone()) ||
              ('tablet' === e && s.default.tablet()) ||
              ('function' == typeof e && !0 === e())
            );
          })(b.disable) || t
            ? void p.forEach(function(e, t) {
                e.node.removeAttribute('data-aos'),
                  e.node.removeAttribute('data-aos-easing'),
                  e.node.removeAttribute('data-aos-duration'),
                  e.node.removeAttribute('data-aos-delay');
              })
            : (b.disableMutationObserver ||
                c.default.isSupported() ||
                (console.info(
                  '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                ),
                (b.disableMutationObserver = !0)),
              document
                .querySelector('body')
                .setAttribute('data-aos-easing', b.easing),
              document
                .querySelector('body')
                .setAttribute('data-aos-duration', b.duration),
              document
                .querySelector('body')
                .setAttribute('data-aos-delay', b.delay),
              'DOMContentLoaded' === b.startEvent &&
              ['complete', 'interactive'].indexOf(document.readyState) > -1
                ? v(!0)
                : 'load' === b.startEvent
                ? window.addEventListener(b.startEvent, function() {
                    v(!0);
                  })
                : document.addEventListener(b.startEvent, function() {
                    v(!0);
                  }),
              window.addEventListener(
                'resize',
                (0, u.default)(v, b.debounceDelay, !0)
              ),
              window.addEventListener(
                'orientationchange',
                (0, u.default)(v, b.debounceDelay, !0)
              ),
              window.addEventListener(
                'scroll',
                (0, a.default)(function() {
                  (0, d.default)(p, b.once);
                }, b.throttleDelay)
              ),
              b.disableMutationObserver || c.default.ready('[data-aos]', y),
              p);
        },
        refresh: v,
        refreshHard: y
      };
    },
    function(e, t) {},
    ,
    ,
    ,
    ,
    function(e, t) {
      (function(t) {
        'use strict';
        function o(e) {
          var t = void 0 === e ? 'undefined' : i(e);
          return !!e && ('object' == t || 'function' == t);
        }
        function n(e) {
          if ('number' == typeof e) return e;
          if (
            (function(e) {
              return (
                'symbol' == (void 0 === e ? 'undefined' : i(e)) ||
                ((function(e) {
                  return !!e && 'object' == (void 0 === e ? 'undefined' : i(e));
                })(e) &&
                  v.call(e) == u)
              );
            })(e)
          )
            return a;
          if (o(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(c, '');
          var n = d.test(e);
          return n || f.test(e) ? l(e.slice(2), n ? 2 : 8) : s.test(e) ? a : +e;
        }
        var i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          r = 'Expected a function',
          a = NaN,
          u = '[object Symbol]',
          c = /^\s+|\s+$/g,
          s = /^[-+]0x[0-9a-f]+$/i,
          d = /^0b[01]+$/i,
          f = /^0o[0-7]+$/i,
          l = parseInt,
          p =
            'object' == (void 0 === t ? 'undefined' : i(t)) &&
            t &&
            t.Object === Object &&
            t,
          m =
            'object' == ('undefined' == typeof self ? 'undefined' : i(self)) &&
            self &&
            self.Object === Object &&
            self,
          b = p || m || Function('return this')(),
          v = Object.prototype.toString,
          y = Math.max,
          g = Math.min,
          h = function() {
            return b.Date.now();
          };
        e.exports = function(e, t, i) {
          var a = !0,
            u = !0;
          if ('function' != typeof e) throw new TypeError(r);
          return (
            o(i) &&
              ((a = 'leading' in i ? !!i.leading : a),
              (u = 'trailing' in i ? !!i.trailing : u)),
            (function(e, t, i) {
              function a(t) {
                var o = l,
                  n = p;
                return (l = p = void 0), (k = t), (b = e.apply(n, o));
              }
              function u(e) {
                return (k = e), (v = setTimeout(s, t)), x ? a(e) : b;
              }
              function c(e) {
                var o = e - w;
                return void 0 === w || o >= t || o < 0 || (j && e - k >= m);
              }
              function s() {
                var e = h();
                return c(e)
                  ? d(e)
                  : void (v = setTimeout(
                      s,
                      (function(e) {
                        var o = t - (e - w);
                        return j ? g(o, m - (e - k)) : o;
                      })(e)
                    ));
              }
              function d(e) {
                return (v = void 0), O && l ? a(e) : ((l = p = void 0), b);
              }
              function f() {
                var e = h(),
                  o = c(e);
                if (((l = arguments), (p = this), (w = e), o)) {
                  if (void 0 === v) return u(w);
                  if (j) return (v = setTimeout(s, t)), a(w);
                }
                return void 0 === v && (v = setTimeout(s, t)), b;
              }
              var l,
                p,
                m,
                b,
                v,
                w,
                k = 0,
                x = !1,
                j = !1,
                O = !0;
              if ('function' != typeof e) throw new TypeError(r);
              return (
                (t = n(t) || 0),
                o(i) &&
                  ((x = !!i.leading),
                  (m = (j = 'maxWait' in i) ? y(n(i.maxWait) || 0, t) : m),
                  (O = 'trailing' in i ? !!i.trailing : O)),
                (f.cancel = function() {
                  void 0 !== v && clearTimeout(v),
                    (k = 0),
                    (l = w = p = v = void 0);
                }),
                (f.flush = function() {
                  return void 0 === v ? b : d(h());
                }),
                f
              );
            })(e, t, { leading: a, maxWait: t, trailing: u })
          );
        };
      }.call(
        t,
        (function() {
          return this;
        })()
      ));
    },
    function(e, t) {
      (function(t) {
        'use strict';
        function o(e) {
          var t = void 0 === e ? 'undefined' : i(e);
          return !!e && ('object' == t || 'function' == t);
        }
        function n(e) {
          if ('number' == typeof e) return e;
          if (
            (function(e) {
              return (
                'symbol' == (void 0 === e ? 'undefined' : i(e)) ||
                ((function(e) {
                  return !!e && 'object' == (void 0 === e ? 'undefined' : i(e));
                })(e) &&
                  b.call(e) == a)
              );
            })(e)
          )
            return r;
          if (o(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(u, '');
          var n = s.test(e);
          return n || d.test(e) ? f(e.slice(2), n ? 2 : 8) : c.test(e) ? r : +e;
        }
        var i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          r = NaN,
          a = '[object Symbol]',
          u = /^\s+|\s+$/g,
          c = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          d = /^0o[0-7]+$/i,
          f = parseInt,
          l =
            'object' == (void 0 === t ? 'undefined' : i(t)) &&
            t &&
            t.Object === Object &&
            t,
          p =
            'object' == ('undefined' == typeof self ? 'undefined' : i(self)) &&
            self &&
            self.Object === Object &&
            self,
          m = l || p || Function('return this')(),
          b = Object.prototype.toString,
          v = Math.max,
          y = Math.min,
          g = function() {
            return m.Date.now();
          };
        e.exports = function(e, t, i) {
          function r(t) {
            var o = f,
              n = l;
            return (f = l = void 0), (w = t), (m = e.apply(n, o));
          }
          function a(e) {
            return (w = e), (b = setTimeout(c, t)), k ? r(e) : m;
          }
          function u(e) {
            var o = e - h;
            return void 0 === h || o >= t || o < 0 || (x && e - w >= p);
          }
          function c() {
            var e = g();
            return u(e)
              ? s(e)
              : void (b = setTimeout(
                  c,
                  (function(e) {
                    var o = t - (e - h);
                    return x ? y(o, p - (e - w)) : o;
                  })(e)
                ));
          }
          function s(e) {
            return (b = void 0), j && f ? r(e) : ((f = l = void 0), m);
          }
          function d() {
            var e = g(),
              o = u(e);
            if (((f = arguments), (l = this), (h = e), o)) {
              if (void 0 === b) return a(h);
              if (x) return (b = setTimeout(c, t)), r(h);
            }
            return void 0 === b && (b = setTimeout(c, t)), m;
          }
          var f,
            l,
            p,
            m,
            b,
            h,
            w = 0,
            k = !1,
            x = !1,
            j = !0;
          if ('function' != typeof e)
            throw new TypeError('Expected a function');
          return (
            (t = n(t) || 0),
            o(i) &&
              ((k = !!i.leading),
              (p = (x = 'maxWait' in i) ? v(n(i.maxWait) || 0, t) : p),
              (j = 'trailing' in i ? !!i.trailing : j)),
            (d.cancel = function() {
              void 0 !== b && clearTimeout(b),
                (w = 0),
                (f = h = l = b = void 0);
            }),
            (d.flush = function() {
              return void 0 === b ? m : s(g());
            }),
            d
          );
        };
      }.call(
        t,
        (function() {
          return this;
        })()
      ));
    },
    function(e, t) {
      'use strict';
      function o() {
        return (
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver
        );
      }
      function n(e) {
        e &&
          e.forEach(function(e) {
            var t = Array.prototype.slice.call(e.addedNodes),
              o = Array.prototype.slice.call(e.removedNodes);
            if (
              (function e(t) {
                var o = void 0,
                  n = void 0;
                for (o = 0; o < t.length; o += 1) {
                  if ((n = t[o]).dataset && n.dataset.aos) return !0;
                  if (n.children && e(n.children)) return !0;
                }
                return !1;
              })(t.concat(o))
            )
              return i();
          });
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = function() {};
      t.default = {
        isSupported: function() {
          return !!o();
        },
        ready: function(e, t) {
          var r = window.document,
            a = new (o())(n);
          (i = t),
            a.observe(r.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0
            });
        }
      };
    },
    function(e, t) {
      'use strict';
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || '';
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = (function() {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        u = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        c = (function() {
          function e() {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e);
          }
          return (
            n(e, [
              {
                key: 'phone',
                value: function() {
                  var e = o();
                  return !(!i.test(e) && !r.test(e.substr(0, 4)));
                }
              },
              {
                key: 'mobile',
                value: function() {
                  var e = o();
                  return !(!a.test(e) && !u.test(e.substr(0, 4)));
                }
              },
              {
                key: 'tablet',
                value: function() {
                  return this.mobile() && !this.phone();
                }
              }
            ]),
            e
          );
        })();
      t.default = new c();
    },
    function(e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var o = window.pageYOffset,
            n = window.innerHeight;
          e.forEach(function(e, i) {
            !(function(e, t, o) {
              var n = e.node.getAttribute('data-aos-once');
              t > e.position
                ? e.node.classList.add('aos-animate')
                : void 0 !== n &&
                  ('false' === n || (!o && 'true' !== n)) &&
                  e.node.classList.remove('aos-animate');
            })(e, n + o, t);
          });
        });
    },
    function(e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(o(12));
      t.default = function(e, t) {
        return (
          e.forEach(function(e, o) {
            e.node.classList.add('aos-init'),
              (e.position = (0, n.default)(e.node, t.offset));
          }),
          e
        );
      };
    },
    function(e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(o(13));
      t.default = function(e, t) {
        var o = 0,
          i = 0,
          r = window.innerHeight,
          a = {
            offset: e.getAttribute('data-aos-offset'),
            anchor: e.getAttribute('data-aos-anchor'),
            anchorPlacement: e.getAttribute('data-aos-anchor-placement')
          };
        switch (
          (a.offset && !isNaN(a.offset) && (i = parseInt(a.offset)),
          a.anchor &&
            document.querySelectorAll(a.anchor) &&
            (e = document.querySelectorAll(a.anchor)[0]),
          (o = (0, n.default)(e).top),
          a.anchorPlacement)
        ) {
          case 'top-bottom':
            break;
          case 'center-bottom':
            o += e.offsetHeight / 2;
            break;
          case 'bottom-bottom':
            o += e.offsetHeight;
            break;
          case 'top-center':
            o += r / 2;
            break;
          case 'bottom-center':
            o += r / 2 + e.offsetHeight;
            break;
          case 'center-center':
            o += r / 2 + e.offsetHeight / 2;
            break;
          case 'top-top':
            o += r;
            break;
          case 'bottom-top':
            o += e.offsetHeight + r;
            break;
          case 'center-top':
            o += e.offsetHeight / 2 + r;
        }
        return a.anchorPlacement || a.offset || isNaN(t) || (i = t), o + i;
      };
    },
    function(e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          for (
            var t = 0, o = 0;
            e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

          )
            (t += e.offsetLeft - ('BODY' != e.tagName ? e.scrollLeft : 0)),
              (o += e.offsetTop - ('BODY' != e.tagName ? e.scrollTop : 0)),
              (e = e.offsetParent);
          return { top: o, left: t };
        });
    },
    function(e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          return (
            (e = e || document.querySelectorAll('[data-aos]')),
            Array.prototype.map.call(e, function(e) {
              return { node: e };
            })
          );
        });
    }
  ]);
});
