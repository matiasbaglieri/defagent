!(function() {
  function e(t, i) {
    return (e =
      Object.setPrototypeOf ||
      function(e, t) {
        return (e.__proto__ = t), e;
      })(t, i);
  }
  function t(e) {
    var t = (function() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function() {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function() {
      var s,
        n = a(e);
      if (t) {
        var r = a(this).constructor;
        s = Reflect.construct(n, arguments, r);
      } else s = n.apply(this, arguments);
      return i(this, s);
    };
  }
  function i(e, t) {
    return !t || ('object' != typeof t && 'function' != typeof t) ? s(e) : t;
  }
  function s(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function a(e) {
    return (a = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function n(e, t, i) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[t] = i),
      e
    );
  }
  function r(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        'value' in s && (s.writable = !0),
        Object.defineProperty(e, s.key, s);
    }
  }
  function o(e, t, i) {
    return t && r(e.prototype, t), i && r(e, i), e;
  }
  function l(e, t) {
    return (
      (function(e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function(e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var i = [],
          s = !0,
          a = !1,
          n = void 0;
        try {
          for (
            var r, o = e[Symbol.iterator]();
            !(s = (r = o.next()).done) &&
            (i.push(r.value), !t || i.length !== t);
            s = !0
          );
        } catch (l) {
          (a = !0), (n = l);
        } finally {
          try {
            s || null == o.return || o.return();
          } finally {
            if (a) throw n;
          }
        }
        return i;
      })(e, t) ||
      (function(e, t) {
        if (!e) return;
        if ('string' == typeof e) return d(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === i && e.constructor && (i = e.constructor.name);
        if ('Map' === i || 'Set' === i) return Array.from(e);
        if (
          'Arguments' === i ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
        )
          return d(e, t);
      })(e, t) ||
      (function() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
    return s;
  }
  function h(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
      nhfI: function(a, r, d) {
        'use strict';
        d.d(r, 'a', function() {
          return Ve;
        }),
          d.d(r, 'b', function() {
            return Fe;
          }),
          d.d(r, 'c', function() {
            return Xe;
          });
        var p = d('fXoL'),
          c = d('ofXK');
        function u(e) {
          return (
            null !== e &&
            'object' == typeof e &&
            'constructor' in e &&
            e.constructor === Object
          );
        }
        function f(e, t) {
          void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            Object.keys(t).forEach(function(i) {
              void 0 === e[i]
                ? (e[i] = t[i])
                : u(t[i]) &&
                  u(e[i]) &&
                  Object.keys(t[i]).length > 0 &&
                  f(e[i], t[i]);
            });
        }
        var v = 'undefined' != typeof document ? document : {},
          g = {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: { blur: function() {}, nodeName: '' },
            querySelector: function() {
              return null;
            },
            querySelectorAll: function() {
              return [];
            },
            getElementById: function() {
              return null;
            },
            createEvent: function() {
              return { initEvent: function() {} };
            },
            createElement: function() {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                  return [];
                }
              };
            },
            createElementNS: function() {
              return {};
            },
            importNode: function() {
              return null;
            },
            location: {
              hash: '',
              host: '',
              hostname: '',
              href: '',
              origin: '',
              pathname: '',
              protocol: '',
              search: ''
            }
          };
        f(v, g);
        var m = 'undefined' != typeof window ? window : {};
        f(m, {
          document: g,
          navigator: { userAgent: '' },
          location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
          },
          history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
          },
          CustomEvent: function() {
            return this;
          },
          addEventListener: function() {},
          removeEventListener: function() {},
          getComputedStyle: function() {
            return {
              getPropertyValue: function() {
                return '';
              }
            };
          },
          Image: function() {},
          Date: function() {},
          screen: {},
          setTimeout: function() {},
          clearTimeout: function() {},
          matchMedia: function() {
            return {};
          }
        });
        var w = function e(t) {
          h(this, e);
          for (var i = 0; i < t.length; i += 1) this[i] = t[i];
          return (this.length = t.length), this;
        };
        function b(e, t) {
          var i = [],
            s = 0;
          if (e && !t && e instanceof w) return e;
          if (e)
            if ('string' == typeof e) {
              var a,
                n,
                r = e.trim();
              if (r.indexOf('<') >= 0 && r.indexOf('>') >= 0) {
                var o = 'div';
                for (
                  0 === r.indexOf('<li') && (o = 'ul'),
                    0 === r.indexOf('<tr') && (o = 'tbody'),
                    (0 !== r.indexOf('<td') && 0 !== r.indexOf('<th')) ||
                      (o = 'tr'),
                    0 === r.indexOf('<tbody') && (o = 'table'),
                    0 === r.indexOf('<option') && (o = 'select'),
                    (n = v.createElement(o)).innerHTML = r,
                    s = 0;
                  s < n.childNodes.length;
                  s += 1
                )
                  i.push(n.childNodes[s]);
              } else
                for (
                  a =
                    t || '#' !== e[0] || e.match(/[ .<>:~]/)
                      ? (t || v).querySelectorAll(e.trim())
                      : [v.getElementById(e.trim().split('#')[1])],
                    s = 0;
                  s < a.length;
                  s += 1
                )
                  a[s] && i.push(a[s]);
            } else if (e.nodeType || e === m || e === v) i.push(e);
            else if (e.length > 0 && e[0].nodeType)
              for (s = 0; s < e.length; s += 1) i.push(e[s]);
          return new w(i);
        }
        function S(e) {
          for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
          return t;
        }
        (b.fn = w.prototype),
          (b.Class = w),
          (b.Dom7 = w),
          'resize scroll'.split(' ');
        var E = {
          addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(' '), i = 0; i < t.length; i += 1)
              for (var s = 0; s < this.length; s += 1)
                void 0 !== this[s] &&
                  void 0 !== this[s].classList &&
                  this[s].classList.add(t[i]);
            return this;
          },
          removeClass: function(e) {
            for (var t = e.split(' '), i = 0; i < t.length; i += 1)
              for (var s = 0; s < this.length; s += 1)
                void 0 !== this[s] &&
                  void 0 !== this[s].classList &&
                  this[s].classList.remove(t[i]);
            return this;
          },
          hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e);
          },
          toggleClass: function(e) {
            for (var t = e.split(' '), i = 0; i < t.length; i += 1)
              for (var s = 0; s < this.length; s += 1)
                void 0 !== this[s] &&
                  void 0 !== this[s].classList &&
                  this[s].classList.toggle(t[i]);
            return this;
          },
          attr: function(e, t) {
            if (1 === arguments.length && 'string' == typeof e)
              return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
              if (2 === arguments.length) this[i].setAttribute(e, t);
              else
                for (var s in e)
                  (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
            return this;
          },
          removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
          },
          data: function(e, t) {
            var i;
            if (void 0 !== t) {
              for (var s = 0; s < this.length; s += 1)
                (i = this[s]).dom7ElementDataStorage ||
                  (i.dom7ElementDataStorage = {}),
                  (i.dom7ElementDataStorage[e] = t);
              return this;
            }
            if ((i = this[0]))
              return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage
                ? i.dom7ElementDataStorage[e]
                : i.getAttribute('data-' + e) || void 0;
          },
          transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
              var i = this[t].style;
              (i.webkitTransform = e), (i.transform = e);
            }
            return this;
          },
          transition: function(e) {
            'string' != typeof e && (e += 'ms');
            for (var t = 0; t < this.length; t += 1) {
              var i = this[t].style;
              (i.webkitTransitionDuration = e), (i.transitionDuration = e);
            }
            return this;
          },
          on: function() {
            for (
              var e, t = arguments.length, i = new Array(t), s = 0;
              s < t;
              s++
            )
              i[s] = arguments[s];
            var a = i[0],
              n = i[1],
              r = i[2],
              o = i[3];
            function d(e) {
              var t = e.target;
              if (t) {
                var i = e.target.dom7EventData || [];
                if ((i.indexOf(e) < 0 && i.unshift(e), b(t).is(n)))
                  r.apply(t, i);
                else
                  for (var s = b(t).parents(), a = 0; a < s.length; a += 1)
                    b(s[a]).is(n) && r.apply(s[a], i);
              }
            }
            function h(e) {
              var t = (e && e.target && e.target.dom7EventData) || [];
              t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
            }
            'function' == typeof i[1] &&
              ((a = (e = l(i, 3))[0]), (r = e[1]), (o = e[2]), (n = void 0)),
              o || (o = !1);
            for (var p, c = a.split(' '), u = 0; u < this.length; u += 1) {
              var f = this[u];
              if (n)
                for (p = 0; p < c.length; p += 1) {
                  var v = c[p];
                  f.dom7LiveListeners || (f.dom7LiveListeners = {}),
                    f.dom7LiveListeners[v] || (f.dom7LiveListeners[v] = []),
                    f.dom7LiveListeners[v].push({
                      listener: r,
                      proxyListener: d
                    }),
                    f.addEventListener(v, d, o);
                }
              else
                for (p = 0; p < c.length; p += 1) {
                  var g = c[p];
                  f.dom7Listeners || (f.dom7Listeners = {}),
                    f.dom7Listeners[g] || (f.dom7Listeners[g] = []),
                    f.dom7Listeners[g].push({ listener: r, proxyListener: h }),
                    f.addEventListener(g, h, o);
                }
            }
            return this;
          },
          off: function() {
            for (
              var e, t = arguments.length, i = new Array(t), s = 0;
              s < t;
              s++
            )
              i[s] = arguments[s];
            var a = i[0],
              n = i[1],
              r = i[2],
              o = i[3];
            'function' == typeof i[1] &&
              ((a = (e = l(i, 3))[0]), (r = e[1]), (o = e[2]), (n = void 0)),
              o || (o = !1);
            for (var d = a.split(' '), h = 0; h < d.length; h += 1)
              for (var p = d[h], c = 0; c < this.length; c += 1) {
                var u = this[c],
                  f = void 0;
                if (
                  (!n && u.dom7Listeners
                    ? (f = u.dom7Listeners[p])
                    : n && u.dom7LiveListeners && (f = u.dom7LiveListeners[p]),
                  f && f.length)
                )
                  for (var v = f.length - 1; v >= 0; v -= 1) {
                    var g = f[v];
                    (r && g.listener === r) ||
                    (r &&
                      g.listener &&
                      g.listener.dom7proxy &&
                      g.listener.dom7proxy === r)
                      ? (u.removeEventListener(p, g.proxyListener, o),
                        f.splice(v, 1))
                      : r ||
                        (u.removeEventListener(p, g.proxyListener, o),
                        f.splice(v, 1));
                  }
              }
            return this;
          },
          trigger: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            for (var s = t[0].split(' '), a = t[1], n = 0; n < s.length; n += 1)
              for (var r = s[n], o = 0; o < this.length; o += 1) {
                var l = this[o],
                  d = void 0;
                try {
                  d = new m.CustomEvent(r, {
                    detail: a,
                    bubbles: !0,
                    cancelable: !0
                  });
                } catch (h) {
                  (d = v.createEvent('Event')).initEvent(r, !0, !0),
                    (d.detail = a);
                }
                (l.dom7EventData = t.filter(function(e, t) {
                  return t > 0;
                })),
                  l.dispatchEvent(d),
                  (l.dom7EventData = []),
                  delete l.dom7EventData;
              }
            return this;
          },
          transitionEnd: function(e) {
            var t,
              i = ['webkitTransitionEnd', 'transitionend'],
              s = this;
            function a(n) {
              if (n.target === this)
                for (e.call(this, n), t = 0; t < i.length; t += 1)
                  s.off(i[t], a);
            }
            if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this;
          },
          outerWidth: function(e) {
            if (this.length > 0) {
              if (e) {
                var t = this.styles();
                return (
                  this[0].offsetWidth +
                  parseFloat(t.getPropertyValue('margin-right')) +
                  parseFloat(t.getPropertyValue('margin-left'))
                );
              }
              return this[0].offsetWidth;
            }
            return null;
          },
          outerHeight: function(e) {
            if (this.length > 0) {
              if (e) {
                var t = this.styles();
                return (
                  this[0].offsetHeight +
                  parseFloat(t.getPropertyValue('margin-top')) +
                  parseFloat(t.getPropertyValue('margin-bottom'))
                );
              }
              return this[0].offsetHeight;
            }
            return null;
          },
          offset: function() {
            if (this.length > 0) {
              var e = this[0],
                t = e.getBoundingClientRect(),
                i = v.body;
              return {
                top:
                  t.top +
                  (e === m ? m.scrollY : e.scrollTop) -
                  (e.clientTop || i.clientTop || 0),
                left:
                  t.left +
                  (e === m ? m.scrollX : e.scrollLeft) -
                  (e.clientLeft || i.clientLeft || 0)
              };
            }
            return null;
          },
          css: function(e, t) {
            var i;
            if (1 === arguments.length) {
              if ('string' != typeof e) {
                for (i = 0; i < this.length; i += 1)
                  for (var s in e) this[i].style[s] = e[s];
                return this;
              }
              if (this[0])
                return m.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && 'string' == typeof e) {
              for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
              return this;
            }
            return this;
          },
          each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
              if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
          },
          html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
          },
          text: function(e) {
            if (void 0 === e)
              return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
          },
          is: function(e) {
            var t,
              i,
              s = this[0];
            if (!s || void 0 === e) return !1;
            if ('string' == typeof e) {
              if (s.matches) return s.matches(e);
              if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
              if (s.msMatchesSelector) return s.msMatchesSelector(e);
              for (t = b(e), i = 0; i < t.length; i += 1)
                if (t[i] === s) return !0;
              return !1;
            }
            if (e === v) return s === v;
            if (e === m) return s === m;
            if (e.nodeType || e instanceof w) {
              for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
                if (t[i] === s) return !0;
              return !1;
            }
            return !1;
          },
          index: function() {
            var e,
              t = this[0];
            if (t) {
              for (e = 0; null !== (t = t.previousSibling); )
                1 === t.nodeType && (e += 1);
              return e;
            }
          },
          eq: function(e) {
            if (void 0 === e) return this;
            var t,
              i = this.length;
            return e > i - 1
              ? new w([])
              : e < 0
              ? new w((t = i + e) < 0 ? [] : [this[t]])
              : new w([this[e]]);
          },
          append: function() {
            for (var e, t = 0; t < arguments.length; t += 1) {
              e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
              for (var i = 0; i < this.length; i += 1)
                if ('string' == typeof e) {
                  var s = v.createElement('div');
                  for (s.innerHTML = e; s.firstChild; )
                    this[i].appendChild(s.firstChild);
                } else if (e instanceof w)
                  for (var a = 0; a < e.length; a += 1)
                    this[i].appendChild(e[a]);
                else this[i].appendChild(e);
            }
            return this;
          },
          prepend: function(e) {
            var t, i;
            for (t = 0; t < this.length; t += 1)
              if ('string' == typeof e) {
                var s = v.createElement('div');
                for (
                  s.innerHTML = e, i = s.childNodes.length - 1;
                  i >= 0;
                  i -= 1
                )
                  this[t].insertBefore(s.childNodes[i], this[t].childNodes[0]);
              } else if (e instanceof w)
                for (i = 0; i < e.length; i += 1)
                  this[t].insertBefore(e[i], this[t].childNodes[0]);
              else this[t].insertBefore(e, this[t].childNodes[0]);
            return this;
          },
          next: function(e) {
            return this.length > 0
              ? e
                ? this[0].nextElementSibling &&
                  b(this[0].nextElementSibling).is(e)
                  ? new w([this[0].nextElementSibling])
                  : new w([])
                : new w(
                    this[0].nextElementSibling
                      ? [this[0].nextElementSibling]
                      : []
                  )
              : new w([]);
          },
          nextAll: function(e) {
            var t = [],
              i = this[0];
            if (!i) return new w([]);
            for (; i.nextElementSibling; ) {
              var s = i.nextElementSibling;
              e ? b(s).is(e) && t.push(s) : t.push(s), (i = s);
            }
            return new w(t);
          },
          prev: function(e) {
            if (this.length > 0) {
              var t = this[0];
              return e
                ? t.previousElementSibling && b(t.previousElementSibling).is(e)
                  ? new w([t.previousElementSibling])
                  : new w([])
                : new w(
                    t.previousElementSibling ? [t.previousElementSibling] : []
                  );
            }
            return new w([]);
          },
          prevAll: function(e) {
            var t = [],
              i = this[0];
            if (!i) return new w([]);
            for (; i.previousElementSibling; ) {
              var s = i.previousElementSibling;
              e ? b(s).is(e) && t.push(s) : t.push(s), (i = s);
            }
            return new w(t);
          },
          parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
              null !== this[i].parentNode &&
                (e
                  ? b(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                  : t.push(this[i].parentNode));
            return b(S(t));
          },
          parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
              for (var s = this[i].parentNode; s; )
                e ? b(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
            return b(S(t));
          },
          closest: function(e) {
            var t = this;
            return void 0 === e
              ? new w([])
              : (t.is(e) || (t = t.parents(e).eq(0)), t);
          },
          find: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
              for (
                var s = this[i].querySelectorAll(e), a = 0;
                a < s.length;
                a += 1
              )
                t.push(s[a]);
            return new w(t);
          },
          children: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
              for (var s = this[i].childNodes, a = 0; a < s.length; a += 1)
                e
                  ? 1 === s[a].nodeType && b(s[a]).is(e) && t.push(s[a])
                  : 1 === s[a].nodeType && t.push(s[a]);
            return new w(S(t));
          },
          filter: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
              e.call(this[i], i, this[i]) && t.push(this[i]);
            return new w(t);
          },
          remove: function() {
            for (var e = 0; e < this.length; e += 1)
              this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
          },
          add: function() {
            for (
              var e, t, i = this, s = arguments.length, a = new Array(s), n = 0;
              n < s;
              n++
            )
              a[n] = arguments[n];
            for (e = 0; e < a.length; e += 1) {
              var r = b(a[e]);
              for (t = 0; t < r.length; t += 1)
                (i[i.length] = r[t]), (i.length += 1);
            }
            return i;
          },
          styles: function() {
            return this[0] ? m.getComputedStyle(this[0], null) : {};
          }
        };
        Object.keys(E).forEach(function(e) {
          b.fn[e] = b.fn[e] || E[e];
        });
        var y,
          T,
          x,
          A,
          C,
          I,
          M,
          k,
          O,
          P,
          z,
          L,
          N,
          D,
          R,
          G = {
            deleteProps: function(e) {
              var t = e;
              Object.keys(t).forEach(function(e) {
                try {
                  t[e] = null;
                } catch (i) {}
                try {
                  delete t[e];
                } catch (i) {}
              });
            },
            nextTick: function(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              return setTimeout(e, t);
            },
            now: function() {
              return Date.now();
            },
            getTranslate: function(e) {
              var t,
                i,
                s,
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 'x',
                n = m.getComputedStyle(e, null);
              return (
                m.WebKitCSSMatrix
                  ? ((i = n.transform || n.webkitTransform).split(',').length >
                      6 &&
                      (i = i
                        .split(', ')
                        .map(function(e) {
                          return e.replace(',', '.');
                        })
                        .join(', ')),
                    (s = new m.WebKitCSSMatrix('none' === i ? '' : i)))
                  : (t = (s =
                      n.MozTransform ||
                      n.OTransform ||
                      n.MsTransform ||
                      n.msTransform ||
                      n.transform ||
                      n
                        .getPropertyValue('transform')
                        .replace('translate(', 'matrix(1, 0, 0, 1,'))
                      .toString()
                      .split(',')),
                'x' === a &&
                  (i = m.WebKitCSSMatrix
                    ? s.m41
                    : 16 === t.length
                    ? parseFloat(t[12])
                    : parseFloat(t[4])),
                'y' === a &&
                  (i = m.WebKitCSSMatrix
                    ? s.m42
                    : 16 === t.length
                    ? parseFloat(t[13])
                    : parseFloat(t[5])),
                i || 0
              );
            },
            parseUrlQuery: function(e) {
              var t,
                i,
                s,
                a,
                n = {},
                r = e || m.location.href;
              if ('string' == typeof r && r.length)
                for (
                  a = (i = (r =
                    r.indexOf('?') > -1 ? r.replace(/\S*\?/, '') : '')
                    .split('&')
                    .filter(function(e) {
                      return '' !== e;
                    })).length,
                    t = 0;
                  t < a;
                  t += 1
                )
                  (s = i[t].replace(/#\S+/g, '').split('=')),
                    (n[decodeURIComponent(s[0])] =
                      void 0 === s[1]
                        ? void 0
                        : decodeURIComponent(s[1]) || '');
              return n;
            },
            isObject: function(e) {
              return (
                'object' == typeof e &&
                null !== e &&
                e.constructor &&
                e.constructor === Object
              );
            },
            extend: function() {
              for (
                var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                  t = 1;
                t < arguments.length;
                t += 1
              ) {
                var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                if (null != i)
                  for (
                    var s = Object.keys(Object(i)), a = 0, n = s.length;
                    a < n;
                    a += 1
                  ) {
                    var r = s[a],
                      o = Object.getOwnPropertyDescriptor(i, r);
                    void 0 !== o &&
                      o.enumerable &&
                      (G.isObject(e[r]) && G.isObject(i[r])
                        ? G.extend(e[r], i[r])
                        : !G.isObject(e[r]) && G.isObject(i[r])
                        ? ((e[r] = {}), G.extend(e[r], i[r]))
                        : (e[r] = i[r]));
                  }
              }
              return e;
            }
          },
          $ = {
            touch: !!(
              'ontouchstart' in m ||
              (m.DocumentTouch && v instanceof m.DocumentTouch)
            ),
            pointerEvents:
              !!m.PointerEvent &&
              'maxTouchPoints' in m.navigator &&
              m.navigator.maxTouchPoints >= 0,
            observer: 'MutationObserver' in m || 'WebkitMutationObserver' in m,
            passiveListener: (function() {
              var e = !1;
              try {
                var t = Object.defineProperty({}, 'passive', {
                  get: function() {
                    e = !0;
                  }
                });
                m.addEventListener('testPassiveListener', null, t);
              } catch (i) {}
              return e;
            })(),
            gestures: 'ongesturestart' in m
          },
          B = (function() {
            function e() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              h(this, e);
              var i = this;
              (i.params = t),
                (i.eventsListeners = {}),
                i.params &&
                  i.params.on &&
                  Object.keys(i.params.on).forEach(function(e) {
                    i.on(e, i.params.on[e]);
                  });
            }
            return (
              o(
                e,
                [
                  {
                    key: 'on',
                    value: function(e, t, i) {
                      var s = this;
                      if ('function' != typeof t) return s;
                      var a = i ? 'unshift' : 'push';
                      return (
                        e.split(' ').forEach(function(e) {
                          s.eventsListeners[e] || (s.eventsListeners[e] = []),
                            s.eventsListeners[e][a](t);
                        }),
                        s
                      );
                    }
                  },
                  {
                    key: 'once',
                    value: function(e, t, i) {
                      var s = this;
                      if ('function' != typeof t) return s;
                      function a() {
                        for (
                          var i = arguments.length, n = new Array(i), r = 0;
                          r < i;
                          r++
                        )
                          n[r] = arguments[r];
                        s.off(e, a),
                          a.f7proxy && delete a.f7proxy,
                          t.apply(s, n);
                      }
                      return (a.f7proxy = t), s.on(e, a, i);
                    }
                  },
                  {
                    key: 'off',
                    value: function(e, t) {
                      var i = this;
                      return i.eventsListeners
                        ? (e.split(' ').forEach(function(e) {
                            void 0 === t
                              ? (i.eventsListeners[e] = [])
                              : i.eventsListeners[e] &&
                                i.eventsListeners[e].length &&
                                i.eventsListeners[e].forEach(function(s, a) {
                                  (s === t || (s.f7proxy && s.f7proxy === t)) &&
                                    i.eventsListeners[e].splice(a, 1);
                                });
                          }),
                          i)
                        : i;
                    }
                  },
                  {
                    key: 'emit',
                    value: function() {
                      var e,
                        t,
                        i,
                        s = this;
                      if (!s.eventsListeners) return s;
                      for (
                        var a = arguments.length, n = new Array(a), r = 0;
                        r < a;
                        r++
                      )
                        n[r] = arguments[r];
                      return (
                        'string' == typeof n[0] || Array.isArray(n[0])
                          ? ((e = n[0]), (t = n.slice(1, n.length)), (i = s))
                          : ((e = n[0].events),
                            (t = n[0].data),
                            (i = n[0].context || s)),
                        (Array.isArray(e) ? e : e.split(' ')).forEach(function(
                          e
                        ) {
                          if (s.eventsListeners && s.eventsListeners[e]) {
                            var a = [];
                            s.eventsListeners[e].forEach(function(e) {
                              a.push(e);
                            }),
                              a.forEach(function(e) {
                                e.apply(i, t);
                              });
                          }
                        }),
                        s
                      );
                    }
                  },
                  {
                    key: 'useModulesParams',
                    value: function(e) {
                      var t = this;
                      t.modules &&
                        Object.keys(t.modules).forEach(function(i) {
                          var s = t.modules[i];
                          s.params && G.extend(e, s.params);
                        });
                    }
                  },
                  {
                    key: 'useModules',
                    value: function() {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        t = this;
                      t.modules &&
                        Object.keys(t.modules).forEach(function(i) {
                          var s = t.modules[i],
                            a = e[i] || {};
                          s.instance &&
                            Object.keys(s.instance).forEach(function(e) {
                              var i = s.instance[e];
                              t[e] = 'function' == typeof i ? i.bind(t) : i;
                            }),
                            s.on &&
                              t.on &&
                              Object.keys(s.on).forEach(function(e) {
                                t.on(e, s.on[e]);
                              }),
                            s.create && s.create.bind(t)(a);
                        });
                    }
                  }
                ],
                [
                  {
                    key: 'installModule',
                    value: function(e) {
                      var t = this;
                      t.prototype.modules || (t.prototype.modules = {});
                      for (
                        var i =
                            e.name ||
                            ''
                              .concat(
                                Object.keys(t.prototype.modules).length,
                                '_'
                              )
                              .concat(G.now()),
                          s = arguments.length,
                          a = new Array(s > 1 ? s - 1 : 0),
                          n = 1;
                        n < s;
                        n++
                      )
                        a[n - 1] = arguments[n];
                      return (
                        (t.prototype.modules[i] = e),
                        e.proto &&
                          Object.keys(e.proto).forEach(function(i) {
                            t.prototype[i] = e.proto[i];
                          }),
                        e.static &&
                          Object.keys(e.static).forEach(function(i) {
                            t[i] = e.static[i];
                          }),
                        e.install && e.install.apply(t, a),
                        t
                      );
                    }
                  },
                  {
                    key: 'use',
                    value: function(e) {
                      for (
                        var t = this,
                          i = arguments.length,
                          s = new Array(i > 1 ? i - 1 : 0),
                          a = 1;
                        a < i;
                        a++
                      )
                        s[a - 1] = arguments[a];
                      return Array.isArray(e)
                        ? (e.forEach(function(e) {
                            return t.installModule(e);
                          }),
                          t)
                        : t.installModule.apply(t, [e].concat(s));
                    }
                  },
                  {
                    key: 'components',
                    set: function(e) {
                      this.use && this.use(e);
                    }
                  }
                ]
              ),
              e
            );
          })(),
          _ = {
            updateSize: function() {
              var e,
                t,
                i = this.$el;
              (e =
                void 0 !== this.params.width
                  ? this.params.width
                  : i[0].clientWidth),
                (t =
                  void 0 !== this.params.height
                    ? this.params.height
                    : i[0].clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt(i.css('padding-left'), 10) -
                    parseInt(i.css('padding-right'), 10)),
                  (t =
                    t -
                    parseInt(i.css('padding-top'), 10) -
                    parseInt(i.css('padding-bottom'), 10)),
                  G.extend(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t
                  }));
            },
            updateSlides: function() {
              var e = this.params,
                t = this.$wrapperEl,
                i = this.size,
                s = this.rtlTranslate,
                a = this.wrongRTL,
                n = this.virtual && e.virtual.enabled,
                r = n ? this.virtual.slides.length : this.slides.length,
                o = t.children('.' + this.params.slideClass),
                l = n ? this.virtual.slides.length : o.length,
                d = [],
                h = [],
                p = [];
              function c(t) {
                return !e.cssMode || t !== o.length - 1;
              }
              var u = e.slidesOffsetBefore;
              'function' == typeof u && (u = e.slidesOffsetBefore.call(this));
              var f = e.slidesOffsetAfter;
              'function' == typeof f && (f = e.slidesOffsetAfter.call(this));
              var v,
                g,
                w = this.snapGrid.length,
                b = this.snapGrid.length,
                S = e.spaceBetween,
                E = -u,
                y = 0,
                T = 0;
              if (void 0 !== i) {
                'string' == typeof S &&
                  S.indexOf('%') >= 0 &&
                  (S = (parseFloat(S.replace('%', '')) / 100) * i),
                  (this.virtualSize = -S),
                  o.css(
                    s
                      ? { marginLeft: '', marginTop: '' }
                      : { marginRight: '', marginBottom: '' }
                  ),
                  e.slidesPerColumn > 1 &&
                    ((v =
                      Math.floor(l / e.slidesPerColumn) ===
                      l / this.params.slidesPerColumn
                        ? l
                        : Math.ceil(l / e.slidesPerColumn) * e.slidesPerColumn),
                    'auto' !== e.slidesPerView &&
                      'row' === e.slidesPerColumnFill &&
                      (v = Math.max(v, e.slidesPerView * e.slidesPerColumn)));
                for (
                  var x,
                    A = e.slidesPerColumn,
                    C = v / A,
                    I = Math.floor(l / e.slidesPerColumn),
                    M = 0;
                  M < l;
                  M += 1
                ) {
                  g = 0;
                  var k = o.eq(M);
                  if (e.slidesPerColumn > 1) {
                    var O = void 0,
                      P = void 0,
                      z = void 0;
                    if (
                      'row' === e.slidesPerColumnFill &&
                      e.slidesPerGroup > 1
                    ) {
                      var L = Math.floor(
                          M / (e.slidesPerGroup * e.slidesPerColumn)
                        ),
                        N = M - e.slidesPerColumn * e.slidesPerGroup * L,
                        D =
                          0 === L
                            ? e.slidesPerGroup
                            : Math.min(
                                Math.ceil((l - L * A * e.slidesPerGroup) / A),
                                e.slidesPerGroup
                              );
                      (O =
                        (P =
                          N -
                          (z = Math.floor(N / D)) * D +
                          L * e.slidesPerGroup) +
                        (z * v) / A),
                        k.css({
                          '-webkit-box-ordinal-group': O,
                          '-moz-box-ordinal-group': O,
                          '-ms-flex-order': O,
                          '-webkit-order': O,
                          order: O
                        });
                    } else
                      'column' === e.slidesPerColumnFill
                        ? ((z = M - (P = Math.floor(M / A)) * A),
                          (P > I || (P === I && z === A - 1)) &&
                            ((z += 1) >= A && ((z = 0), (P += 1))))
                        : (P = M - (z = Math.floor(M / C)) * C);
                    k.css(
                      'margin-' + (this.isHorizontal() ? 'top' : 'left'),
                      0 !== z && e.spaceBetween && e.spaceBetween + 'px'
                    );
                  }
                  if ('none' !== k.css('display')) {
                    if ('auto' === e.slidesPerView) {
                      var R = m.getComputedStyle(k[0], null),
                        $ = k[0].style.transform,
                        B = k[0].style.webkitTransform;
                      if (
                        ($ && (k[0].style.transform = 'none'),
                        B && (k[0].style.webkitTransform = 'none'),
                        e.roundLengths)
                      )
                        g = this.isHorizontal()
                          ? k.outerWidth(!0)
                          : k.outerHeight(!0);
                      else if (this.isHorizontal()) {
                        var _ = parseFloat(R.getPropertyValue('width')),
                          H = parseFloat(R.getPropertyValue('padding-left')),
                          Y = parseFloat(R.getPropertyValue('padding-right')),
                          F = parseFloat(R.getPropertyValue('margin-left')),
                          V = parseFloat(R.getPropertyValue('margin-right')),
                          X = R.getPropertyValue('box-sizing');
                        g =
                          X && 'border-box' === X
                            ? _ + F + V
                            : _ + H + Y + F + V;
                      } else {
                        var W = parseFloat(R.getPropertyValue('height')),
                          j = parseFloat(R.getPropertyValue('padding-top')),
                          U = parseFloat(R.getPropertyValue('padding-bottom')),
                          q = parseFloat(R.getPropertyValue('margin-top')),
                          Z = parseFloat(R.getPropertyValue('margin-bottom')),
                          K = R.getPropertyValue('box-sizing');
                        g =
                          K && 'border-box' === K
                            ? W + q + Z
                            : W + j + U + q + Z;
                      }
                      $ && (k[0].style.transform = $),
                        B && (k[0].style.webkitTransform = B),
                        e.roundLengths && (g = Math.floor(g));
                    } else
                      (g = (i - (e.slidesPerView - 1) * S) / e.slidesPerView),
                        e.roundLengths && (g = Math.floor(g)),
                        o[M] &&
                          (this.isHorizontal()
                            ? (o[M].style.width = g + 'px')
                            : (o[M].style.height = g + 'px'));
                    o[M] && (o[M].swiperSlideSize = g),
                      p.push(g),
                      e.centeredSlides
                        ? ((E = E + g / 2 + y / 2 + S),
                          0 === y && 0 !== M && (E = E - i / 2 - S),
                          0 === M && (E = E - i / 2 - S),
                          Math.abs(E) < 0.001 && (E = 0),
                          e.roundLengths && (E = Math.floor(E)),
                          T % e.slidesPerGroup == 0 && d.push(E),
                          h.push(E))
                        : (e.roundLengths && (E = Math.floor(E)),
                          (T - Math.min(this.params.slidesPerGroupSkip, T)) %
                            this.params.slidesPerGroup ==
                            0 && d.push(E),
                          h.push(E),
                          (E = E + g + S)),
                      (this.virtualSize += g + S),
                      (y = g),
                      (T += 1);
                  }
                }
                if (
                  ((this.virtualSize = Math.max(this.virtualSize, i) + f),
                  s &&
                    a &&
                    ('slide' === e.effect || 'coverflow' === e.effect) &&
                    t.css({ width: this.virtualSize + e.spaceBetween + 'px' }),
                  e.setWrapperSize &&
                    (this.isHorizontal()
                      ? t.css({
                          width: this.virtualSize + e.spaceBetween + 'px'
                        })
                      : t.css({
                          height: this.virtualSize + e.spaceBetween + 'px'
                        })),
                  e.slidesPerColumn > 1 &&
                    ((this.virtualSize = (g + e.spaceBetween) * v),
                    (this.virtualSize =
                      Math.ceil(this.virtualSize / e.slidesPerColumn) -
                      e.spaceBetween),
                    this.isHorizontal()
                      ? t.css({
                          width: this.virtualSize + e.spaceBetween + 'px'
                        })
                      : t.css({
                          height: this.virtualSize + e.spaceBetween + 'px'
                        }),
                    e.centeredSlides))
                ) {
                  x = [];
                  for (var Q = 0; Q < d.length; Q += 1) {
                    var J = d[Q];
                    e.roundLengths && (J = Math.floor(J)),
                      d[Q] < this.virtualSize + d[0] && x.push(J);
                  }
                  d = x;
                }
                if (!e.centeredSlides) {
                  x = [];
                  for (var ee = 0; ee < d.length; ee += 1) {
                    var te = d[ee];
                    e.roundLengths && (te = Math.floor(te)),
                      d[ee] <= this.virtualSize - i && x.push(te);
                  }
                  (d = x),
                    Math.floor(this.virtualSize - i) -
                      Math.floor(d[d.length - 1]) >
                      1 && d.push(this.virtualSize - i);
                }
                if (
                  (0 === d.length && (d = [0]),
                  0 !== e.spaceBetween &&
                    (this.isHorizontal()
                      ? s
                        ? o.filter(c).css({ marginLeft: S + 'px' })
                        : o.filter(c).css({ marginRight: S + 'px' })
                      : o.filter(c).css({ marginBottom: S + 'px' })),
                  e.centeredSlides && e.centeredSlidesBounds)
                ) {
                  var ie = 0;
                  p.forEach(function(t) {
                    ie += t + (e.spaceBetween ? e.spaceBetween : 0);
                  });
                  var se = (ie -= e.spaceBetween) - i;
                  d = d.map(function(e) {
                    return e < 0 ? -u : e > se ? se + f : e;
                  });
                }
                if (e.centerInsufficientSlides) {
                  var ae = 0;
                  if (
                    (p.forEach(function(t) {
                      ae += t + (e.spaceBetween ? e.spaceBetween : 0);
                    }),
                    (ae -= e.spaceBetween) < i)
                  ) {
                    var ne = (i - ae) / 2;
                    d.forEach(function(e, t) {
                      d[t] = e - ne;
                    }),
                      h.forEach(function(e, t) {
                        h[t] = e + ne;
                      });
                  }
                }
                G.extend(this, {
                  slides: o,
                  snapGrid: d,
                  slidesGrid: h,
                  slidesSizesGrid: p
                }),
                  l !== r && this.emit('slidesLengthChange'),
                  d.length !== w &&
                    (this.params.watchOverflow && this.checkOverflow(),
                    this.emit('snapGridLengthChange')),
                  h.length !== b && this.emit('slidesGridLengthChange'),
                  (e.watchSlidesProgress || e.watchSlidesVisibility) &&
                    this.updateSlidesOffset();
              }
            },
            updateAutoHeight: function(e) {
              var t,
                i = [],
                s = 0;
              if (
                ('number' == typeof e
                  ? this.setTransition(e)
                  : !0 === e && this.setTransition(this.params.speed),
                'auto' !== this.params.slidesPerView &&
                  this.params.slidesPerView > 1)
              )
                if (this.params.centeredSlides)
                  this.visibleSlides.each(function(e, t) {
                    i.push(t);
                  });
                else
                  for (
                    t = 0;
                    t < Math.ceil(this.params.slidesPerView);
                    t += 1
                  ) {
                    var a = this.activeIndex + t;
                    if (a > this.slides.length) break;
                    i.push(this.slides.eq(a)[0]);
                  }
              else i.push(this.slides.eq(this.activeIndex)[0]);
              for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                  var n = i[t].offsetHeight;
                  s = n > s ? n : s;
                }
              s && this.$wrapperEl.css('height', s + 'px');
            },
            updateSlidesOffset: function() {
              for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal()
                  ? e[t].offsetLeft
                  : e[t].offsetTop;
            },
            updateSlidesProgress: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : (this && this.translate) || 0,
                t = this,
                i = t.params,
                s = t.slides,
                a = t.rtlTranslate;
              if (0 !== s.length) {
                void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                var n = -e;
                a && (n = e),
                  s.removeClass(i.slideVisibleClass),
                  (t.visibleSlidesIndexes = []),
                  (t.visibleSlides = []);
                for (var r = 0; r < s.length; r += 1) {
                  var o = s[r],
                    l =
                      (n +
                        (i.centeredSlides ? t.minTranslate() : 0) -
                        o.swiperSlideOffset) /
                      (o.swiperSlideSize + i.spaceBetween);
                  if (
                    i.watchSlidesVisibility ||
                    (i.centeredSlides && i.autoHeight)
                  ) {
                    var d = -(n - o.swiperSlideOffset),
                      h = d + t.slidesSizesGrid[r];
                    ((d >= 0 && d < t.size - 1) ||
                      (h > 1 && h <= t.size) ||
                      (d <= 0 && h >= t.size)) &&
                      (t.visibleSlides.push(o),
                      t.visibleSlidesIndexes.push(r),
                      s.eq(r).addClass(i.slideVisibleClass));
                  }
                  o.progress = a ? -l : l;
                }
                t.visibleSlides = b(t.visibleSlides);
              }
            },
            updateProgress: function(e) {
              if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              var i = this.params,
                s = this.maxTranslate() - this.minTranslate(),
                a = this.progress,
                n = this.isBeginning,
                r = this.isEnd,
                o = n,
                l = r;
              0 === s
                ? ((a = 0), (n = !0), (r = !0))
                : ((n = (a = (e - this.minTranslate()) / s) <= 0),
                  (r = a >= 1)),
                G.extend(this, { progress: a, isBeginning: n, isEnd: r }),
                (i.watchSlidesProgress ||
                  i.watchSlidesVisibility ||
                  (i.centeredSlides && i.autoHeight)) &&
                  this.updateSlidesProgress(e),
                n && !o && this.emit('reachBeginning toEdge'),
                r && !l && this.emit('reachEnd toEdge'),
                ((o && !n) || (l && !r)) && this.emit('fromEdge'),
                this.emit('progress', a);
            },
            updateSlidesClasses: function() {
              var e,
                t = this.slides,
                i = this.params,
                s = this.$wrapperEl,
                a = this.activeIndex,
                n = this.realIndex,
                r = this.virtual && i.virtual.enabled;
              t.removeClass(
                ''
                  .concat(i.slideActiveClass, ' ')
                  .concat(i.slideNextClass, ' ')
                  .concat(i.slidePrevClass, ' ')
                  .concat(i.slideDuplicateActiveClass, ' ')
                  .concat(i.slideDuplicateNextClass, ' ')
                  .concat(i.slideDuplicatePrevClass)
              ),
                (e = r
                  ? this.$wrapperEl.find(
                      '.'
                        .concat(i.slideClass, '[data-swiper-slide-index="')
                        .concat(a, '"]')
                    )
                  : t.eq(a)).addClass(i.slideActiveClass),
                i.loop &&
                  (e.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                          '.'
                            .concat(i.slideClass, ':not(.')
                            .concat(
                              i.slideDuplicateClass,
                              ')[data-swiper-slide-index="'
                            )
                            .concat(n, '"]')
                        )
                        .addClass(i.slideDuplicateActiveClass)
                    : s
                        .children(
                          '.'
                            .concat(i.slideClass, '.')
                            .concat(
                              i.slideDuplicateClass,
                              '[data-swiper-slide-index="'
                            )
                            .concat(n, '"]')
                        )
                        .addClass(i.slideDuplicateActiveClass));
              var o = e
                .nextAll('.' + i.slideClass)
                .eq(0)
                .addClass(i.slideNextClass);
              i.loop &&
                0 === o.length &&
                (o = t.eq(0)).addClass(i.slideNextClass);
              var l = e
                .prevAll('.' + i.slideClass)
                .eq(0)
                .addClass(i.slidePrevClass);
              i.loop &&
                0 === l.length &&
                (l = t.eq(-1)).addClass(i.slidePrevClass),
                i.loop &&
                  (o.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                          '.'
                            .concat(i.slideClass, ':not(.')
                            .concat(
                              i.slideDuplicateClass,
                              ')[data-swiper-slide-index="'
                            )
                            .concat(o.attr('data-swiper-slide-index'), '"]')
                        )
                        .addClass(i.slideDuplicateNextClass)
                    : s
                        .children(
                          '.'
                            .concat(i.slideClass, '.')
                            .concat(
                              i.slideDuplicateClass,
                              '[data-swiper-slide-index="'
                            )
                            .concat(o.attr('data-swiper-slide-index'), '"]')
                        )
                        .addClass(i.slideDuplicateNextClass),
                  l.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                          '.'
                            .concat(i.slideClass, ':not(.')
                            .concat(
                              i.slideDuplicateClass,
                              ')[data-swiper-slide-index="'
                            )
                            .concat(l.attr('data-swiper-slide-index'), '"]')
                        )
                        .addClass(i.slideDuplicatePrevClass)
                    : s
                        .children(
                          '.'
                            .concat(i.slideClass, '.')
                            .concat(
                              i.slideDuplicateClass,
                              '[data-swiper-slide-index="'
                            )
                            .concat(l.attr('data-swiper-slide-index'), '"]')
                        )
                        .addClass(i.slideDuplicatePrevClass));
            },
            updateActiveIndex: function(e) {
              var t,
                i = this.rtlTranslate ? this.translate : -this.translate,
                s = this.slidesGrid,
                a = this.snapGrid,
                n = this.params,
                r = this.activeIndex,
                o = this.realIndex,
                l = this.snapIndex,
                d = e;
              if (void 0 === d) {
                for (var h = 0; h < s.length; h += 1)
                  void 0 !== s[h + 1]
                    ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2
                      ? (d = h)
                      : i >= s[h] && i < s[h + 1] && (d = h + 1)
                    : i >= s[h] && (d = h);
                n.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
              }
              if (a.indexOf(i) >= 0) t = a.indexOf(i);
              else {
                var p = Math.min(n.slidesPerGroupSkip, d);
                t = p + Math.floor((d - p) / n.slidesPerGroup);
              }
              if ((t >= a.length && (t = a.length - 1), d !== r)) {
                var c = parseInt(
                  this.slides.eq(d).attr('data-swiper-slide-index') || d,
                  10
                );
                G.extend(this, {
                  snapIndex: t,
                  realIndex: c,
                  previousIndex: r,
                  activeIndex: d
                }),
                  this.emit('activeIndexChange'),
                  this.emit('snapIndexChange'),
                  o !== c && this.emit('realIndexChange'),
                  (this.initialized || this.params.runCallbacksOnInit) &&
                    this.emit('slideChange');
              } else
                t !== l && ((this.snapIndex = t), this.emit('snapIndexChange'));
            },
            updateClickedSlide: function(e) {
              var t = this.params,
                i = b(e.target).closest('.' + t.slideClass)[0],
                s = !1;
              if (i)
                for (var a = 0; a < this.slides.length; a += 1)
                  this.slides[a] === i && (s = !0);
              if (!i || !s)
                return (
                  (this.clickedSlide = void 0),
                  void (this.clickedIndex = void 0)
                );
              (this.clickedSlide = i),
                (this.clickedIndex =
                  this.virtual && this.params.virtual.enabled
                    ? parseInt(b(i).attr('data-swiper-slide-index'), 10)
                    : b(i).index()),
                t.slideToClickedSlide &&
                  void 0 !== this.clickedIndex &&
                  this.clickedIndex !== this.activeIndex &&
                  this.slideToClickedSlide();
            }
          },
          H = {
            getTranslate: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.isHorizontal()
                    ? 'x'
                    : 'y',
                t = this.params,
                i = this.rtlTranslate,
                s = this.translate,
                a = this.$wrapperEl;
              if (t.virtualTranslate) return i ? -s : s;
              if (t.cssMode) return s;
              var n = G.getTranslate(a[0], e);
              return i && (n = -n), n || 0;
            },
            setTranslate: function(e, t) {
              var i = this.rtlTranslate,
                s = this.params,
                a = this.$wrapperEl,
                n = this.wrapperEl,
                r = this.progress,
                o = 0,
                l = 0;
              this.isHorizontal() ? (o = i ? -e : e) : (l = e),
                s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                s.cssMode
                  ? (n[
                      this.isHorizontal() ? 'scrollLeft' : 'scrollTop'
                    ] = this.isHorizontal() ? -o : -l)
                  : s.virtualTranslate ||
                    a.transform(
                      'translate3d('.concat(o, 'px, ').concat(l, 'px, 0px)')
                    ),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? o : l);
              var d = this.maxTranslate() - this.minTranslate();
              (0 === d ? 0 : (e - this.minTranslate()) / d) !== r &&
                this.updateProgress(e),
                this.emit('setTranslate', this.translate, t);
            },
            minTranslate: function() {
              return -this.snapGrid[0];
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.params.speed,
                i =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2],
                s =
                  !(arguments.length > 3 && void 0 !== arguments[3]) ||
                  arguments[3],
                a = arguments.length > 4 ? arguments[4] : void 0,
                r = this,
                o = r.params,
                l = r.wrapperEl;
              if (r.animating && o.preventInteractionOnTransition) return !1;
              var d,
                h = r.minTranslate(),
                p = r.maxTranslate();
              if (
                ((d = s && e > h ? h : s && e < p ? p : e),
                r.updateProgress(d),
                o.cssMode)
              ) {
                var c,
                  u = r.isHorizontal();
                return (
                  0 === t
                    ? (l[u ? 'scrollLeft' : 'scrollTop'] = -d)
                    : l.scrollTo
                    ? l.scrollTo(
                        (n((c = {}), u ? 'left' : 'top', -d),
                        n(c, 'behavior', 'smooth'),
                        c)
                      )
                    : (l[u ? 'scrollLeft' : 'scrollTop'] = -d),
                  !0
                );
              }
              return (
                0 === t
                  ? (r.setTransition(0),
                    r.setTranslate(d),
                    i &&
                      (r.emit('beforeTransitionStart', t, a),
                      r.emit('transitionEnd')))
                  : (r.setTransition(t),
                    r.setTranslate(d),
                    i &&
                      (r.emit('beforeTransitionStart', t, a),
                      r.emit('transitionStart')),
                    r.animating ||
                      ((r.animating = !0),
                      r.onTranslateToWrapperTransitionEnd ||
                        (r.onTranslateToWrapperTransitionEnd = function(e) {
                          r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.$wrapperEl[0].removeEventListener(
                              'transitionend',
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            r.$wrapperEl[0].removeEventListener(
                              'webkitTransitionEnd',
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            (r.onTranslateToWrapperTransitionEnd = null),
                            delete r.onTranslateToWrapperTransitionEnd,
                            i && r.emit('transitionEnd'));
                        }),
                      r.$wrapperEl[0].addEventListener(
                        'transitionend',
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].addEventListener(
                        'webkitTransitionEnd',
                        r.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            }
          },
          Y = {
            slideTo: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.params.speed,
                i =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2],
                s = arguments.length > 3 ? arguments[3] : void 0,
                a = this,
                r = e;
              r < 0 && (r = 0);
              var o = a.params,
                l = a.snapGrid,
                d = a.slidesGrid,
                h = a.previousIndex,
                p = a.activeIndex,
                c = a.rtlTranslate,
                u = a.wrapperEl;
              if (a.animating && o.preventInteractionOnTransition) return !1;
              var f = Math.min(a.params.slidesPerGroupSkip, r),
                v = f + Math.floor((r - f) / a.params.slidesPerGroup);
              v >= l.length && (v = l.length - 1),
                (p || o.initialSlide || 0) === (h || 0) &&
                  i &&
                  a.emit('beforeSlideChangeStart');
              var g,
                m = -l[v];
              if ((a.updateProgress(m), o.normalizeSlideIndex))
                for (var w = 0; w < d.length; w += 1)
                  -Math.floor(100 * m) >= Math.floor(100 * d[w]) && (r = w);
              if (a.initialized && r !== p) {
                if (
                  !a.allowSlideNext &&
                  m < a.translate &&
                  m < a.minTranslate()
                )
                  return !1;
                if (
                  !a.allowSlidePrev &&
                  m > a.translate &&
                  m > a.maxTranslate() &&
                  (p || 0) !== r
                )
                  return !1;
              }
              if (
                ((g = r > p ? 'next' : r < p ? 'prev' : 'reset'),
                (c && -m === a.translate) || (!c && m === a.translate))
              )
                return (
                  a.updateActiveIndex(r),
                  o.autoHeight && a.updateAutoHeight(),
                  a.updateSlidesClasses(),
                  'slide' !== o.effect && a.setTranslate(m),
                  'reset' !== g &&
                    (a.transitionStart(i, g), a.transitionEnd(i, g)),
                  !1
                );
              if (o.cssMode) {
                var b,
                  S = a.isHorizontal(),
                  E = -m;
                return (
                  c && (E = u.scrollWidth - u.offsetWidth - E),
                  0 === t
                    ? (u[S ? 'scrollLeft' : 'scrollTop'] = E)
                    : u.scrollTo
                    ? u.scrollTo(
                        (n((b = {}), S ? 'left' : 'top', E),
                        n(b, 'behavior', 'smooth'),
                        b)
                      )
                    : (u[S ? 'scrollLeft' : 'scrollTop'] = E),
                  !0
                );
              }
              return (
                0 === t
                  ? (a.setTransition(0),
                    a.setTranslate(m),
                    a.updateActiveIndex(r),
                    a.updateSlidesClasses(),
                    a.emit('beforeTransitionStart', t, s),
                    a.transitionStart(i, g),
                    a.transitionEnd(i, g))
                  : (a.setTransition(t),
                    a.setTranslate(m),
                    a.updateActiveIndex(r),
                    a.updateSlidesClasses(),
                    a.emit('beforeTransitionStart', t, s),
                    a.transitionStart(i, g),
                    a.animating ||
                      ((a.animating = !0),
                      a.onSlideToWrapperTransitionEnd ||
                        (a.onSlideToWrapperTransitionEnd = function(e) {
                          a &&
                            !a.destroyed &&
                            e.target === this &&
                            (a.$wrapperEl[0].removeEventListener(
                              'transitionend',
                              a.onSlideToWrapperTransitionEnd
                            ),
                            a.$wrapperEl[0].removeEventListener(
                              'webkitTransitionEnd',
                              a.onSlideToWrapperTransitionEnd
                            ),
                            (a.onSlideToWrapperTransitionEnd = null),
                            delete a.onSlideToWrapperTransitionEnd,
                            a.transitionEnd(i, g));
                        }),
                      a.$wrapperEl[0].addEventListener(
                        'transitionend',
                        a.onSlideToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].addEventListener(
                        'webkitTransitionEnd',
                        a.onSlideToWrapperTransitionEnd
                      ))),
                !0
              );
            },
            slideToLoop: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.params.speed,
                i =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2],
                s = arguments.length > 3 ? arguments[3] : void 0,
                a = e;
              return (
                this.params.loop && (a += this.loopedSlides),
                this.slideTo(a, t, i, s)
              );
            },
            slideNext: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.params.speed,
                t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                i = arguments.length > 2 ? arguments[2] : void 0,
                s = this,
                a = s.params,
                n = s.animating,
                r = s.activeIndex < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup;
              if (a.loop) {
                if (n) return !1;
                s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
              }
              return s.slideTo(s.activeIndex + r, e, t, i);
            },
            slidePrev: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.params.speed,
                t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                i = arguments.length > 2 ? arguments[2] : void 0,
                s = this,
                a = s.params,
                n = s.animating,
                r = s.snapGrid,
                o = s.slidesGrid,
                l = s.rtlTranslate;
              if (a.loop) {
                if (n) return !1;
                s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
              }
              function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              var h = d(l ? s.translate : -s.translate),
                p = r.map(function(e) {
                  return d(e);
                });
              o.map(function(e) {
                return d(e);
              }),
                p.indexOf(h);
              var c,
                u = r[p.indexOf(h) - 1];
              return (
                void 0 === u &&
                  a.cssMode &&
                  r.forEach(function(e) {
                    !u && h >= e && (u = e);
                  }),
                void 0 !== u &&
                  ((c = o.indexOf(u)) < 0 && (c = s.activeIndex - 1)),
                s.slideTo(c, e, t, i)
              );
            },
            slideReset: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.params.speed,
                t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                i = arguments.length > 2 ? arguments[2] : void 0;
              return this.slideTo(this.activeIndex, e, t, i);
            },
            slideToClosest: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.params.speed,
                t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                i = arguments.length > 2 ? arguments[2] : void 0,
                s =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0.5,
                a = this,
                n = a.activeIndex,
                r = Math.min(a.params.slidesPerGroupSkip, n),
                o = r + Math.floor((n - r) / a.params.slidesPerGroup),
                l = a.rtlTranslate ? a.translate : -a.translate;
              if (l >= a.snapGrid[o]) {
                var d = a.snapGrid[o];
                l - d > (a.snapGrid[o + 1] - d) * s &&
                  (n += a.params.slidesPerGroup);
              } else {
                var h = a.snapGrid[o - 1];
                l - h <= (a.snapGrid[o] - h) * s &&
                  (n -= a.params.slidesPerGroup);
              }
              return (
                (n = Math.max(n, 0)),
                (n = Math.min(n, a.slidesGrid.length - 1)),
                a.slideTo(n, e, t, i)
              );
            },
            slideToClickedSlide: function() {
              var e,
                t = this,
                i = t.params,
                s = t.$wrapperEl,
                a =
                  'auto' === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                n = t.clickedIndex;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                  b(t.clickedSlide).attr('data-swiper-slide-index'),
                  10
                )),
                  i.centeredSlides
                    ? n < t.loopedSlides - a / 2 ||
                      n > t.slides.length - t.loopedSlides + a / 2
                      ? (t.loopFix(),
                        (n = s
                          .children(
                            '.'
                              .concat(
                                i.slideClass,
                                '[data-swiper-slide-index="'
                              )
                              .concat(e, '"]:not(.')
                              .concat(i.slideDuplicateClass, ')')
                          )
                          .eq(0)
                          .index()),
                        G.nextTick(function() {
                          t.slideTo(n);
                        }))
                      : t.slideTo(n)
                    : n > t.slides.length - a
                    ? (t.loopFix(),
                      (n = s
                        .children(
                          '.'
                            .concat(i.slideClass, '[data-swiper-slide-index="')
                            .concat(e, '"]:not(.')
                            .concat(i.slideDuplicateClass, ')')
                        )
                        .eq(0)
                        .index()),
                      G.nextTick(function() {
                        t.slideTo(n);
                      }))
                    : t.slideTo(n);
              } else t.slideTo(n);
            }
          },
          F = {
            loopCreate: function() {
              var e = this,
                t = e.params,
                i = e.$wrapperEl;
              i.children(
                '.'.concat(t.slideClass, '.').concat(t.slideDuplicateClass)
              ).remove();
              var s = i.children('.' + t.slideClass);
              if (t.loopFillGroupWithBlank) {
                var a = t.slidesPerGroup - (s.length % t.slidesPerGroup);
                if (a !== t.slidesPerGroup) {
                  for (var n = 0; n < a; n += 1) {
                    var r = b(v.createElement('div')).addClass(
                      ''.concat(t.slideClass, ' ').concat(t.slideBlankClass)
                    );
                    i.append(r);
                  }
                  s = i.children('.' + t.slideClass);
                }
              }
              'auto' !== t.slidesPerView ||
                t.loopedSlides ||
                (t.loopedSlides = s.length),
                (e.loopedSlides = Math.ceil(
                  parseFloat(t.loopedSlides || t.slidesPerView, 10)
                )),
                (e.loopedSlides += t.loopAdditionalSlides),
                e.loopedSlides > s.length && (e.loopedSlides = s.length);
              var o = [],
                l = [];
              s.each(function(t, i) {
                var a = b(i);
                t < e.loopedSlides && l.push(i),
                  t < s.length && t >= s.length - e.loopedSlides && o.push(i),
                  a.attr('data-swiper-slide-index', t);
              });
              for (var d = 0; d < l.length; d += 1)
                i.append(b(l[d].cloneNode(!0)).addClass(t.slideDuplicateClass));
              for (var h = o.length - 1; h >= 0; h -= 1)
                i.prepend(
                  b(o[h].cloneNode(!0)).addClass(t.slideDuplicateClass)
                );
            },
            loopFix: function() {
              this.emit('beforeLoopFix');
              var e,
                t = this.activeIndex,
                i = this.slides,
                s = this.loopedSlides,
                a = this.allowSlidePrev,
                n = this.allowSlideNext,
                r = this.snapGrid,
                o = this.rtlTranslate;
              (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
              var l = -r[t] - this.getTranslate();
              t < s
                ? ((e = i.length - 3 * s + t),
                  (e += s),
                  this.slideTo(e, 0, !1, !0) &&
                    0 !== l &&
                    this.setTranslate(
                      (o ? -this.translate : this.translate) - l
                    ))
                : t >= i.length - s &&
                  ((e = -i.length + t + s),
                  (e += s),
                  this.slideTo(e, 0, !1, !0) &&
                    0 !== l &&
                    this.setTranslate(
                      (o ? -this.translate : this.translate) - l
                    )),
                (this.allowSlidePrev = a),
                (this.allowSlideNext = n),
                this.emit('loopFix');
            },
            loopDestroy: function() {
              var e = this.$wrapperEl,
                t = this.params,
                i = this.slides;
              e
                .children(
                  '.'
                    .concat(t.slideClass, '.')
                    .concat(t.slideDuplicateClass, ',.')
                    .concat(t.slideClass, '.')
                    .concat(t.slideBlankClass)
                )
                .remove(),
                i.removeAttr('data-swiper-slide-index');
            }
          },
          V = {
            setGrabCursor: function(e) {
              if (
                !(
                  $.touch ||
                  !this.params.simulateTouch ||
                  (this.params.watchOverflow && this.isLocked) ||
                  this.params.cssMode
                )
              ) {
                var t = this.el;
                (t.style.cursor = 'move'),
                  (t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
                  (t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
                  (t.style.cursor = e ? 'grabbing' : 'grab');
              }
            },
            unsetGrabCursor: function() {
              $.touch ||
                (this.params.watchOverflow && this.isLocked) ||
                this.params.cssMode ||
                (this.el.style.cursor = '');
            }
          },
          X = {
            appendSlide: function(e) {
              var t = this.$wrapperEl,
                i = this.params;
              if (
                (i.loop && this.loopDestroy(),
                'object' == typeof e && 'length' in e)
              )
                for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
              else t.append(e);
              i.loop && this.loopCreate(),
                (i.observer && $.observer) || this.update();
            },
            prependSlide: function(e) {
              var t = this.params,
                i = this.$wrapperEl,
                s = this.activeIndex;
              t.loop && this.loopDestroy();
              var a = s + 1;
              if ('object' == typeof e && 'length' in e) {
                for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                a = s + e.length;
              } else i.prepend(e);
              t.loop && this.loopCreate(),
                (t.observer && $.observer) || this.update(),
                this.slideTo(a, 0, !1);
            },
            addSlide: function(e, t) {
              var i = this.$wrapperEl,
                s = this.params,
                a = this.activeIndex;
              s.loop &&
                ((a -= this.loopedSlides),
                this.loopDestroy(),
                (this.slides = i.children('.' + s.slideClass)));
              var n = this.slides.length;
              if (e <= 0) this.prependSlide(t);
              else if (e >= n) this.appendSlide(t);
              else {
                for (
                  var r = a > e ? a + 1 : a, o = [], l = n - 1;
                  l >= e;
                  l -= 1
                ) {
                  var d = this.slides.eq(l);
                  d.remove(), o.unshift(d);
                }
                if ('object' == typeof t && 'length' in t) {
                  for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
                  r = a > e ? a + t.length : a;
                } else i.append(t);
                for (var p = 0; p < o.length; p += 1) i.append(o[p]);
                s.loop && this.loopCreate(),
                  (s.observer && $.observer) || this.update(),
                  this.slideTo(s.loop ? r + this.loopedSlides : r, 0, !1);
              }
            },
            removeSlide: function(e) {
              var t = this.params,
                i = this.$wrapperEl,
                s = this.activeIndex;
              t.loop &&
                ((s -= this.loopedSlides),
                this.loopDestroy(),
                (this.slides = i.children('.' + t.slideClass)));
              var a,
                n = s;
              if ('object' == typeof e && 'length' in e) {
                for (var r = 0; r < e.length; r += 1)
                  (a = e[r]),
                    this.slides[a] && this.slides.eq(a).remove(),
                    a < n && (n -= 1);
                n = Math.max(n, 0);
              } else
                (a = e),
                  this.slides[a] && this.slides.eq(a).remove(),
                  a < n && (n -= 1),
                  (n = Math.max(n, 0));
              t.loop && this.loopCreate(),
                (t.observer && $.observer) || this.update(),
                this.slideTo(t.loop ? n + this.loopedSlides : n, 0, !1);
            },
            removeAllSlides: function() {
              for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
              this.removeSlide(e);
            }
          },
          W =
            ((y = m.navigator.platform),
            (T = m.navigator.userAgent),
            (x = {
              ios: !1,
              android: !1,
              androidChrome: !1,
              desktop: !1,
              iphone: !1,
              ipod: !1,
              ipad: !1,
              edge: !1,
              ie: !1,
              firefox: !1,
              macos: !1,
              windows: !1,
              cordova: !(!m.cordova && !m.phonegap),
              phonegap: !(!m.cordova && !m.phonegap),
              electron: !1
            }),
            (A = m.screen.width),
            (C = m.screen.height),
            (I = T.match(/(Android);?[\s\/]+([\d.]+)?/)),
            (M = T.match(/(iPad).*OS\s([\d_]+)/)),
            (k = T.match(/(iPod)(.*OS\s([\d_]+))?/)),
            (O = !M && T.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
            (P = T.indexOf('MSIE ') >= 0 || T.indexOf('Trident/') >= 0),
            (z = T.indexOf('Edge/') >= 0),
            (L = T.indexOf('Gecko/') >= 0 && T.indexOf('Firefox/') >= 0),
            (N = 'Win32' === y),
            (D = T.toLowerCase().indexOf('electron') >= 0),
            (R = 'MacIntel' === y),
            !M &&
              R &&
              $.touch &&
              ((1024 === A && 1366 === C) ||
                (834 === A && 1194 === C) ||
                (834 === A && 1112 === C) ||
                (768 === A && 1024 === C)) &&
              ((M = T.match(/(Version)\/([\d.]+)/)), (R = !1)),
            (x.ie = P),
            (x.edge = z),
            (x.firefox = L),
            I &&
              !N &&
              ((x.os = 'android'),
              (x.osVersion = I[2]),
              (x.android = !0),
              (x.androidChrome = T.toLowerCase().indexOf('chrome') >= 0)),
            (M || O || k) && ((x.os = 'ios'), (x.ios = !0)),
            O &&
              !k &&
              ((x.osVersion = O[2].replace(/_/g, '.')), (x.iphone = !0)),
            M && ((x.osVersion = M[2].replace(/_/g, '.')), (x.ipad = !0)),
            k &&
              ((x.osVersion = k[3] ? k[3].replace(/_/g, '.') : null),
              (x.ipod = !0)),
            x.ios &&
              x.osVersion &&
              T.indexOf('Version/') >= 0 &&
              '10' === x.osVersion.split('.')[0] &&
              (x.osVersion = T.toLowerCase()
                .split('version/')[1]
                .split(' ')[0]),
            (x.webView =
              !(
                !(O || M || k) ||
                (!T.match(/.*AppleWebKit(?!.*Safari)/i) &&
                  !m.navigator.standalone)
              ) ||
              (m.matchMedia &&
                m.matchMedia('(display-mode: standalone)').matches)),
            (x.webview = x.webView),
            (x.standalone = x.webView),
            (x.desktop = !(x.ios || x.android) || D),
            x.desktop &&
              ((x.electron = D),
              (x.macos = R),
              (x.windows = N),
              x.macos && (x.os = 'macos'),
              x.windows && (x.os = 'windows')),
            (x.pixelRatio = m.devicePixelRatio || 1),
            x);
        function j(e) {
          var t = this.touchEventsData,
            i = this.params,
            s = this.touches;
          if (!this.animating || !i.preventInteractionOnTransition) {
            var a = e;
            a.originalEvent && (a = a.originalEvent);
            var n = b(a.target);
            if (
              ('wrapper' !== i.touchEventsTarget ||
                n.closest(this.wrapperEl).length) &&
              ((t.isTouchEvent = 'touchstart' === a.type),
              (t.isTouchEvent || !('which' in a) || 3 !== a.which) &&
                !(
                  (!t.isTouchEvent && 'button' in a && a.button > 0) ||
                  (t.isTouched && t.isMoved)
                ))
            )
              if (
                i.noSwiping &&
                n.closest(
                  i.noSwipingSelector
                    ? i.noSwipingSelector
                    : '.' + i.noSwipingClass
                )[0]
              )
                this.allowClick = !0;
              else if (!i.swipeHandler || n.closest(i.swipeHandler)[0]) {
                (s.currentX =
                  'touchstart' === a.type ? a.targetTouches[0].pageX : a.pageX),
                  (s.currentY =
                    'touchstart' === a.type
                      ? a.targetTouches[0].pageY
                      : a.pageY);
                var r = s.currentX,
                  o = s.currentY,
                  l = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                if (
                  (!i.edgeSwipeDetection && !i.iOSEdgeSwipeDetection) ||
                  !(r <= l || r >= m.screen.width - l)
                ) {
                  if (
                    (G.extend(t, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0
                    }),
                    (s.startX = r),
                    (s.startY = o),
                    (t.touchStartTime = G.now()),
                    (this.allowClick = !0),
                    this.updateSize(),
                    (this.swipeDirection = void 0),
                    i.threshold > 0 && (t.allowThresholdMove = !1),
                    'touchstart' !== a.type)
                  ) {
                    var d = !0;
                    n.is(t.formElements) && (d = !1),
                      v.activeElement &&
                        b(v.activeElement).is(t.formElements) &&
                        v.activeElement !== n[0] &&
                        v.activeElement.blur();
                    var h =
                      d && this.allowTouchMove && i.touchStartPreventDefault;
                    (i.touchStartForcePreventDefault || h) &&
                      a.preventDefault();
                  }
                  this.emit('touchStart', a);
                }
              }
          }
        }
        function U(e) {
          var t = this.touchEventsData,
            i = this.params,
            s = this.touches,
            a = this.rtlTranslate,
            n = e;
          if ((n.originalEvent && (n = n.originalEvent), t.isTouched)) {
            if (!t.isTouchEvent || 'touchmove' === n.type) {
              var r =
                  'touchmove' === n.type &&
                  n.targetTouches &&
                  (n.targetTouches[0] || n.changedTouches[0]),
                o = 'touchmove' === n.type ? r.pageX : n.pageX,
                l = 'touchmove' === n.type ? r.pageY : n.pageY;
              if (n.preventedByNestedSwiper)
                return (s.startX = o), void (s.startY = l);
              if (!this.allowTouchMove)
                return (
                  (this.allowClick = !1),
                  void (
                    t.isTouched &&
                    (G.extend(s, {
                      startX: o,
                      startY: l,
                      currentX: o,
                      currentY: l
                    }),
                    (t.touchStartTime = G.now()))
                  )
                );
              if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                if (this.isVertical()) {
                  if (
                    (l < s.startY && this.translate <= this.maxTranslate()) ||
                    (l > s.startY && this.translate >= this.minTranslate())
                  )
                    return (t.isTouched = !1), void (t.isMoved = !1);
                } else if (
                  (o < s.startX && this.translate <= this.maxTranslate()) ||
                  (o > s.startX && this.translate >= this.minTranslate())
                )
                  return;
              if (
                t.isTouchEvent &&
                v.activeElement &&
                n.target === v.activeElement &&
                b(n.target).is(t.formElements)
              )
                return (t.isMoved = !0), void (this.allowClick = !1);
              if (
                (t.allowTouchCallbacks && this.emit('touchMove', n),
                !(n.targetTouches && n.targetTouches.length > 1))
              ) {
                (s.currentX = o), (s.currentY = l);
                var d = s.currentX - s.startX,
                  h = s.currentY - s.startY;
                if (
                  !(
                    this.params.threshold &&
                    Math.sqrt(Math.pow(d, 2) + Math.pow(h, 2)) <
                      this.params.threshold
                  )
                ) {
                  var p;
                  if (void 0 === t.isScrolling)
                    (this.isHorizontal() && s.currentY === s.startY) ||
                    (this.isVertical() && s.currentX === s.startX)
                      ? (t.isScrolling = !1)
                      : d * d + h * h >= 25 &&
                        ((p =
                          (180 * Math.atan2(Math.abs(h), Math.abs(d))) /
                          Math.PI),
                        (t.isScrolling = this.isHorizontal()
                          ? p > i.touchAngle
                          : 90 - p > i.touchAngle));
                  if (
                    (t.isScrolling && this.emit('touchMoveOpposite', n),
                    void 0 === t.startMoving &&
                      ((s.currentX === s.startX && s.currentY === s.startY) ||
                        (t.startMoving = !0)),
                    t.isScrolling)
                  )
                    t.isTouched = !1;
                  else if (t.startMoving) {
                    (this.allowClick = !1),
                      !i.cssMode && n.cancelable && n.preventDefault(),
                      i.touchMoveStopPropagation &&
                        !i.nested &&
                        n.stopPropagation(),
                      t.isMoved ||
                        (i.loop && this.loopFix(),
                        (t.startTranslate = this.getTranslate()),
                        this.setTransition(0),
                        this.animating &&
                          this.$wrapperEl.trigger(
                            'webkitTransitionEnd transitionend'
                          ),
                        (t.allowMomentumBounce = !1),
                        !i.grabCursor ||
                          (!0 !== this.allowSlideNext &&
                            !0 !== this.allowSlidePrev) ||
                          this.setGrabCursor(!0),
                        this.emit('sliderFirstMove', n)),
                      this.emit('sliderMove', n),
                      (t.isMoved = !0);
                    var c = this.isHorizontal() ? d : h;
                    (s.diff = c),
                      (c *= i.touchRatio),
                      a && (c = -c),
                      (this.swipeDirection = c > 0 ? 'prev' : 'next'),
                      (t.currentTranslate = c + t.startTranslate);
                    var u = !0,
                      f = i.resistanceRatio;
                    if (
                      (i.touchReleaseOnEdges && (f = 0),
                      c > 0 && t.currentTranslate > this.minTranslate()
                        ? ((u = !1),
                          i.resistance &&
                            (t.currentTranslate =
                              this.minTranslate() -
                              1 +
                              Math.pow(
                                -this.minTranslate() + t.startTranslate + c,
                                f
                              )))
                        : c < 0 &&
                          t.currentTranslate < this.maxTranslate() &&
                          ((u = !1),
                          i.resistance &&
                            (t.currentTranslate =
                              this.maxTranslate() +
                              1 -
                              Math.pow(
                                this.maxTranslate() - t.startTranslate - c,
                                f
                              ))),
                      u && (n.preventedByNestedSwiper = !0),
                      !this.allowSlideNext &&
                        'next' === this.swipeDirection &&
                        t.currentTranslate < t.startTranslate &&
                        (t.currentTranslate = t.startTranslate),
                      !this.allowSlidePrev &&
                        'prev' === this.swipeDirection &&
                        t.currentTranslate > t.startTranslate &&
                        (t.currentTranslate = t.startTranslate),
                      i.threshold > 0)
                    ) {
                      if (!(Math.abs(c) > i.threshold || t.allowThresholdMove))
                        return void (t.currentTranslate = t.startTranslate);
                      if (!t.allowThresholdMove)
                        return (
                          (t.allowThresholdMove = !0),
                          (s.startX = s.currentX),
                          (s.startY = s.currentY),
                          (t.currentTranslate = t.startTranslate),
                          void (s.diff = this.isHorizontal()
                            ? s.currentX - s.startX
                            : s.currentY - s.startY)
                        );
                    }
                    i.followFinger &&
                      !i.cssMode &&
                      ((i.freeMode ||
                        i.watchSlidesProgress ||
                        i.watchSlidesVisibility) &&
                        (this.updateActiveIndex(), this.updateSlidesClasses()),
                      i.freeMode &&
                        (0 === t.velocities.length &&
                          t.velocities.push({
                            position:
                              s[this.isHorizontal() ? 'startX' : 'startY'],
                            time: t.touchStartTime
                          }),
                        t.velocities.push({
                          position:
                            s[this.isHorizontal() ? 'currentX' : 'currentY'],
                          time: G.now()
                        })),
                      this.updateProgress(t.currentTranslate),
                      this.setTranslate(t.currentTranslate));
                  }
                }
              }
            }
          } else
            t.startMoving && t.isScrolling && this.emit('touchMoveOpposite', n);
        }
        function q(e) {
          var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            n = t.rtlTranslate,
            r = t.$wrapperEl,
            o = t.slidesGrid,
            l = t.snapGrid,
            d = e;
          if (
            (d.originalEvent && (d = d.originalEvent),
            i.allowTouchCallbacks && t.emit('touchEnd', d),
            (i.allowTouchCallbacks = !1),
            !i.isTouched)
          )
            return (
              i.isMoved && s.grabCursor && t.setGrabCursor(!1),
              (i.isMoved = !1),
              void (i.startMoving = !1)
            );
          s.grabCursor &&
            i.isMoved &&
            i.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          var h,
            p = G.now(),
            c = p - i.touchStartTime;
          if (
            (t.allowClick &&
              (t.updateClickedSlide(d),
              t.emit('tap click', d),
              c < 300 &&
                p - i.lastClickTime < 300 &&
                t.emit('doubleTap doubleClick', d)),
            (i.lastClickTime = G.now()),
            G.nextTick(function() {
              t.destroyed || (t.allowClick = !0);
            }),
            !i.isTouched ||
              !i.isMoved ||
              !t.swipeDirection ||
              0 === a.diff ||
              i.currentTranslate === i.startTranslate)
          )
            return (
              (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
            );
          if (
            ((i.isTouched = !1),
            (i.isMoved = !1),
            (i.startMoving = !1),
            (h = s.followFinger
              ? n
                ? t.translate
                : -t.translate
              : -i.currentTranslate),
            !s.cssMode)
          )
            if (s.freeMode) {
              if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
              if (h > -t.maxTranslate())
                return void t.slideTo(
                  t.slides.length < l.length
                    ? l.length - 1
                    : t.slides.length - 1
                );
              if (s.freeModeMomentum) {
                if (i.velocities.length > 1) {
                  var u = i.velocities.pop(),
                    f = i.velocities.pop(),
                    v = u.time - f.time;
                  (t.velocity = (u.position - f.position) / v),
                    (t.velocity /= 2),
                    Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                      (t.velocity = 0),
                    (v > 150 || G.now() - u.time > 300) && (t.velocity = 0);
                } else t.velocity = 0;
                (t.velocity *= s.freeModeMomentumVelocityRatio),
                  (i.velocities.length = 0);
                var g = 1e3 * s.freeModeMomentumRatio,
                  m = t.translate + t.velocity * g;
                n && (m = -m);
                var w,
                  b,
                  S = !1,
                  E = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                if (m < t.maxTranslate())
                  s.freeModeMomentumBounce
                    ? (m + t.maxTranslate() < -E && (m = t.maxTranslate() - E),
                      (w = t.maxTranslate()),
                      (S = !0),
                      (i.allowMomentumBounce = !0))
                    : (m = t.maxTranslate()),
                    s.loop && s.centeredSlides && (b = !0);
                else if (m > t.minTranslate())
                  s.freeModeMomentumBounce
                    ? (m - t.minTranslate() > E && (m = t.minTranslate() + E),
                      (w = t.minTranslate()),
                      (S = !0),
                      (i.allowMomentumBounce = !0))
                    : (m = t.minTranslate()),
                    s.loop && s.centeredSlides && (b = !0);
                else if (s.freeModeSticky) {
                  for (var y, T = 0; T < l.length; T += 1)
                    if (l[T] > -m) {
                      y = T;
                      break;
                    }
                  m = -(m =
                    Math.abs(l[y] - m) < Math.abs(l[y - 1] - m) ||
                    'next' === t.swipeDirection
                      ? l[y]
                      : l[y - 1]);
                }
                if (
                  (b &&
                    t.once('transitionEnd', function() {
                      t.loopFix();
                    }),
                  0 !== t.velocity)
                ) {
                  if (
                    ((g = n
                      ? Math.abs((-m - t.translate) / t.velocity)
                      : Math.abs((m - t.translate) / t.velocity)),
                    s.freeModeSticky)
                  ) {
                    var x = Math.abs((n ? -m : m) - t.translate),
                      A = t.slidesSizesGrid[t.activeIndex];
                    g =
                      x < A
                        ? s.speed
                        : x < 2 * A
                        ? 1.5 * s.speed
                        : 2.5 * s.speed;
                  }
                } else if (s.freeModeSticky) return void t.slideToClosest();
                s.freeModeMomentumBounce && S
                  ? (t.updateProgress(w),
                    t.setTransition(g),
                    t.setTranslate(m),
                    t.transitionStart(!0, t.swipeDirection),
                    (t.animating = !0),
                    r.transitionEnd(function() {
                      t &&
                        !t.destroyed &&
                        i.allowMomentumBounce &&
                        (t.emit('momentumBounce'),
                        t.setTransition(s.speed),
                        setTimeout(function() {
                          t.setTranslate(w),
                            r.transitionEnd(function() {
                              t && !t.destroyed && t.transitionEnd();
                            });
                        }, 0));
                    }))
                  : t.velocity
                  ? (t.updateProgress(m),
                    t.setTransition(g),
                    t.setTranslate(m),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating ||
                      ((t.animating = !0),
                      r.transitionEnd(function() {
                        t && !t.destroyed && t.transitionEnd();
                      })))
                  : t.updateProgress(m),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses();
              } else if (s.freeModeSticky) return void t.slideToClosest();
              (!s.freeModeMomentum || c >= s.longSwipesMs) &&
                (t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses());
            } else {
              for (
                var C = 0, I = t.slidesSizesGrid[0], M = 0;
                M < o.length;
                M += M < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
              ) {
                var k = M < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                void 0 !== o[M + k]
                  ? h >= o[M] &&
                    h < o[M + k] &&
                    ((C = M), (I = o[M + k] - o[M]))
                  : h >= o[M] &&
                    ((C = M), (I = o[o.length - 1] - o[o.length - 2]));
              }
              var O = (h - o[C]) / I,
                P = C < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
              if (c > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                'next' === t.swipeDirection &&
                  t.slideTo(O >= s.longSwipesRatio ? C + P : C),
                  'prev' === t.swipeDirection &&
                    t.slideTo(O > 1 - s.longSwipesRatio ? C + P : C);
              } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation ||
                (d.target !== t.navigation.nextEl &&
                  d.target !== t.navigation.prevEl)
                  ? ('next' === t.swipeDirection && t.slideTo(C + P),
                    'prev' === t.swipeDirection && t.slideTo(C))
                  : t.slideTo(d.target === t.navigation.nextEl ? C + P : C);
              }
            }
        }
        function Z() {
          var e = this.params,
            t = this.el;
          if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
              s = this.allowSlidePrev,
              a = this.snapGrid;
            (this.allowSlideNext = !0),
              (this.allowSlidePrev = !0),
              this.updateSize(),
              this.updateSlides(),
              this.updateSlidesClasses(),
              this.slideTo(
                ('auto' === e.slidesPerView || e.slidesPerView > 1) &&
                  this.isEnd &&
                  !this.isBeginning &&
                  !this.params.centeredSlides
                  ? this.slides.length - 1
                  : this.activeIndex,
                0,
                !1,
                !0
              ),
              this.autoplay &&
                this.autoplay.running &&
                this.autoplay.paused &&
                this.autoplay.run(),
              (this.allowSlidePrev = s),
              (this.allowSlideNext = i),
              this.params.watchOverflow &&
                a !== this.snapGrid &&
                this.checkOverflow();
          }
        }
        function K(e) {
          this.allowClick ||
            (this.params.preventClicks && e.preventDefault(),
            this.params.preventClicksPropagation &&
              this.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation()));
        }
        function Q() {
          var e = this.wrapperEl,
            t = this.rtlTranslate;
          (this.previousTranslate = this.translate),
            (this.translate = this.isHorizontal()
              ? t
                ? e.scrollWidth - e.offsetWidth - e.scrollLeft
                : -e.scrollLeft
              : -e.scrollTop),
            -0 === this.translate && (this.translate = 0),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
          var i = this.maxTranslate() - this.minTranslate();
          (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !==
            this.progress &&
            this.updateProgress(t ? -this.translate : this.translate),
            this.emit('setTranslate', this.translate, !1);
        }
        var J = !1;
        function ee() {}
        var te = {
            init: !0,
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: 'slide',
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: 'swiper-no-swiping',
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: 'swiper-container-',
            slideClass: 'swiper-slide',
            slideBlankClass: 'swiper-slide-invisible-blank',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            runCallbacksOnInit: !0
          },
          ie = {
            update: _,
            translate: H,
            transition: {
              setTransition: function(e, t) {
                this.params.cssMode || this.$wrapperEl.transition(e),
                  this.emit('setTransition', e, t);
              },
              transitionStart: function() {
                var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  t = arguments.length > 1 ? arguments[1] : void 0,
                  i = this,
                  s = i.activeIndex,
                  a = i.params,
                  n = i.previousIndex;
                if (!a.cssMode) {
                  a.autoHeight && i.updateAutoHeight();
                  var r = t;
                  if (
                    (r || (r = s > n ? 'next' : s < n ? 'prev' : 'reset'),
                    i.emit('transitionStart'),
                    e && s !== n)
                  ) {
                    if ('reset' === r)
                      return void i.emit('slideResetTransitionStart');
                    i.emit('slideChangeTransitionStart'),
                      i.emit(
                        'next' === r
                          ? 'slideNextTransitionStart'
                          : 'slidePrevTransitionStart'
                      );
                  }
                }
              },
              transitionEnd: function() {
                var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  t = arguments.length > 1 ? arguments[1] : void 0,
                  i = this,
                  s = i.activeIndex,
                  a = i.previousIndex,
                  n = i.params;
                if (((i.animating = !1), !n.cssMode)) {
                  i.setTransition(0);
                  var r = t;
                  if (
                    (r || (r = s > a ? 'next' : s < a ? 'prev' : 'reset'),
                    i.emit('transitionEnd'),
                    e && s !== a)
                  ) {
                    if ('reset' === r)
                      return void i.emit('slideResetTransitionEnd');
                    i.emit('slideChangeTransitionEnd'),
                      i.emit(
                        'next' === r
                          ? 'slideNextTransitionEnd'
                          : 'slidePrevTransitionEnd'
                      );
                  }
                }
              }
            },
            slide: Y,
            loop: F,
            grabCursor: V,
            manipulation: X,
            events: {
              attachEvents: function() {
                var e = this.params,
                  t = this.touchEvents,
                  i = this.el,
                  s = this.wrapperEl;
                (this.onTouchStart = j.bind(this)),
                  (this.onTouchMove = U.bind(this)),
                  (this.onTouchEnd = q.bind(this)),
                  e.cssMode && (this.onScroll = Q.bind(this)),
                  (this.onClick = K.bind(this));
                var a = !!e.nested;
                if (!$.touch && $.pointerEvents)
                  i.addEventListener(t.start, this.onTouchStart, !1),
                    v.addEventListener(t.move, this.onTouchMove, a),
                    v.addEventListener(t.end, this.onTouchEnd, !1);
                else {
                  if ($.touch) {
                    var n = !(
                      'touchstart' !== t.start ||
                      !$.passiveListener ||
                      !e.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    i.addEventListener(t.start, this.onTouchStart, n),
                      i.addEventListener(
                        t.move,
                        this.onTouchMove,
                        $.passiveListener ? { passive: !1, capture: a } : a
                      ),
                      i.addEventListener(t.end, this.onTouchEnd, n),
                      t.cancel &&
                        i.addEventListener(t.cancel, this.onTouchEnd, n),
                      J || (v.addEventListener('touchstart', ee), (J = !0));
                  }
                  ((e.simulateTouch && !W.ios && !W.android) ||
                    (e.simulateTouch && !$.touch && W.ios)) &&
                    (i.addEventListener('mousedown', this.onTouchStart, !1),
                    v.addEventListener('mousemove', this.onTouchMove, a),
                    v.addEventListener('mouseup', this.onTouchEnd, !1));
                }
                (e.preventClicks || e.preventClicksPropagation) &&
                  i.addEventListener('click', this.onClick, !0),
                  e.cssMode && s.addEventListener('scroll', this.onScroll),
                  this.on(
                    e.updateOnWindowResize
                      ? W.ios || W.android
                        ? 'resize orientationchange observerUpdate'
                        : 'resize observerUpdate'
                      : 'observerUpdate',
                    Z,
                    !0
                  );
              },
              detachEvents: function() {
                var e = this.params,
                  t = this.touchEvents,
                  i = this.el,
                  s = this.wrapperEl,
                  a = !!e.nested;
                if (!$.touch && $.pointerEvents)
                  i.removeEventListener(t.start, this.onTouchStart, !1),
                    v.removeEventListener(t.move, this.onTouchMove, a),
                    v.removeEventListener(t.end, this.onTouchEnd, !1);
                else {
                  if ($.touch) {
                    var n = !(
                      'onTouchStart' !== t.start ||
                      !$.passiveListener ||
                      !e.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    i.removeEventListener(t.start, this.onTouchStart, n),
                      i.removeEventListener(t.move, this.onTouchMove, a),
                      i.removeEventListener(t.end, this.onTouchEnd, n),
                      t.cancel &&
                        i.removeEventListener(t.cancel, this.onTouchEnd, n);
                  }
                  ((e.simulateTouch && !W.ios && !W.android) ||
                    (e.simulateTouch && !$.touch && W.ios)) &&
                    (i.removeEventListener('mousedown', this.onTouchStart, !1),
                    v.removeEventListener('mousemove', this.onTouchMove, a),
                    v.removeEventListener('mouseup', this.onTouchEnd, !1));
                }
                (e.preventClicks || e.preventClicksPropagation) &&
                  i.removeEventListener('click', this.onClick, !0),
                  e.cssMode && s.removeEventListener('scroll', this.onScroll),
                  this.off(
                    W.ios || W.android
                      ? 'resize orientationchange observerUpdate'
                      : 'resize observerUpdate',
                    Z
                  );
              }
            },
            breakpoints: {
              setBreakpoint: function() {
                var e = this.activeIndex,
                  t = this.initialized,
                  i = this.loopedSlides,
                  s = void 0 === i ? 0 : i,
                  a = this.params,
                  n = this.$el,
                  r = a.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                  var o = this.getBreakpoint(r);
                  if (o && this.currentBreakpoint !== o) {
                    var l = o in r ? r[o] : void 0;
                    l &&
                      [
                        'slidesPerView',
                        'spaceBetween',
                        'slidesPerGroup',
                        'slidesPerGroupSkip',
                        'slidesPerColumn'
                      ].forEach(function(e) {
                        var t = l[e];
                        void 0 !== t &&
                          (l[e] =
                            'slidesPerView' !== e ||
                            ('AUTO' !== t && 'auto' !== t)
                              ? 'slidesPerView' === e
                                ? parseFloat(t)
                                : parseInt(t, 10)
                              : 'auto');
                      });
                    var d = l || this.originalParams,
                      h = a.slidesPerColumn > 1,
                      p = d.slidesPerColumn > 1;
                    h && !p
                      ? n.removeClass(
                          ''
                            .concat(a.containerModifierClass, 'multirow ')
                            .concat(a.containerModifierClass, 'multirow-column')
                        )
                      : !h &&
                        p &&
                        (n.addClass(a.containerModifierClass + 'multirow'),
                        'column' === d.slidesPerColumnFill &&
                          n.addClass(
                            a.containerModifierClass + 'multirow-column'
                          ));
                    var c = d.direction && d.direction !== a.direction,
                      u = a.loop && (d.slidesPerView !== a.slidesPerView || c);
                    c && t && this.changeDirection(),
                      G.extend(this.params, d),
                      G.extend(this, {
                        allowTouchMove: this.params.allowTouchMove,
                        allowSlideNext: this.params.allowSlideNext,
                        allowSlidePrev: this.params.allowSlidePrev
                      }),
                      (this.currentBreakpoint = o),
                      u &&
                        t &&
                        (this.loopDestroy(),
                        this.loopCreate(),
                        this.updateSlides(),
                        this.slideTo(e - s + this.loopedSlides, 0, !1)),
                      this.emit('breakpoint', d);
                  }
                }
              },
              getBreakpoint: function(e) {
                if (e) {
                  var t = !1,
                    i = Object.keys(e).map(function(e) {
                      if ('string' == typeof e && 0 === e.indexOf('@')) {
                        var t = parseFloat(e.substr(1));
                        return { value: m.innerHeight * t, point: e };
                      }
                      return { value: e, point: e };
                    });
                  i.sort(function(e, t) {
                    return parseInt(e.value, 10) - parseInt(t.value, 10);
                  });
                  for (var s = 0; s < i.length; s += 1) {
                    var a = i[s],
                      n = a.point;
                    a.value <= m.innerWidth && (t = n);
                  }
                  return t || 'max';
                }
              }
            },
            checkOverflow: {
              checkOverflow: function() {
                var e = this.params,
                  t = this.isLocked,
                  i =
                    this.slides.length > 0 &&
                    e.slidesOffsetBefore +
                      e.spaceBetween * (this.slides.length - 1) +
                      this.slides[0].offsetWidth * this.slides.length;
                (this.isLocked =
                  e.slidesOffsetBefore && e.slidesOffsetAfter && i
                    ? i <= this.size
                    : 1 === this.snapGrid.length),
                  (this.allowSlideNext = !this.isLocked),
                  (this.allowSlidePrev = !this.isLocked),
                  t !== this.isLocked &&
                    this.emit(this.isLocked ? 'lock' : 'unlock'),
                  t &&
                    t !== this.isLocked &&
                    ((this.isEnd = !1),
                    this.navigation && this.navigation.update());
              }
            },
            classes: {
              addClasses: function() {
                var e = this.classNames,
                  t = this.params,
                  i = this.rtl,
                  s = this.$el,
                  a = [];
                a.push('initialized'),
                  a.push(t.direction),
                  t.freeMode && a.push('free-mode'),
                  t.autoHeight && a.push('autoheight'),
                  i && a.push('rtl'),
                  t.slidesPerColumn > 1 &&
                    (a.push('multirow'),
                    'column' === t.slidesPerColumnFill &&
                      a.push('multirow-column')),
                  W.android && a.push('android'),
                  W.ios && a.push('ios'),
                  t.cssMode && a.push('css-mode'),
                  a.forEach(function(i) {
                    e.push(t.containerModifierClass + i);
                  }),
                  s.addClass(e.join(' '));
              },
              removeClasses: function() {
                var e = this.$el,
                  t = this.classNames;
                e.removeClass(t.join(' '));
              }
            },
            images: {
              loadImage: function(e, t, i, s, a, n) {
                var r;
                function o() {
                  n && n();
                }
                b(e).parent('picture')[0] || (e.complete && a)
                  ? o()
                  : t
                  ? (((r = new m.Image()).onload = o),
                    (r.onerror = o),
                    s && (r.sizes = s),
                    i && (r.srcset = i),
                    t && (r.src = t))
                  : o();
              },
              preloadImages: function() {
                var e = this;
                function t() {
                  null != e &&
                    e &&
                    !e.destroyed &&
                    (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length &&
                      (e.params.updateOnImagesReady && e.update(),
                      e.emit('imagesReady')));
                }
                e.imagesToLoad = e.$el.find('img');
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                  var s = e.imagesToLoad[i];
                  e.loadImage(
                    s,
                    s.currentSrc || s.getAttribute('src'),
                    s.srcset || s.getAttribute('srcset'),
                    s.sizes || s.getAttribute('sizes'),
                    !0,
                    t
                  );
                }
              }
            }
          },
          se = {},
          ae = (function(a) {
            !(function(t, i) {
              if ('function' != typeof i && null !== i)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (t.prototype = Object.create(i && i.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                i && e(t, i);
            })(r, a);
            var n = t(r);
            function r() {
              var e, t, a, o;
              h(this, r);
              for (
                var d = arguments.length, p = new Array(d), c = 0;
                c < d;
                c++
              )
                p[c] = arguments[c];
              1 === p.length && p[0].constructor && p[0].constructor === Object
                ? (o = p[0])
                : ((a = (e = l(p, 2))[0]), (o = e[1])),
                o || (o = {}),
                (o = G.extend({}, o)),
                a && !o.el && (o.el = a),
                (t = n.call(this, o)),
                Object.keys(ie).forEach(function(e) {
                  Object.keys(ie[e]).forEach(function(t) {
                    r.prototype[t] || (r.prototype[t] = ie[e][t]);
                  });
                });
              var u = s(t);
              void 0 === u.modules && (u.modules = {}),
                Object.keys(u.modules).forEach(function(e) {
                  var t = u.modules[e];
                  if (t.params) {
                    var i = Object.keys(t.params)[0],
                      s = t.params[i];
                    if ('object' != typeof s || null === s) return;
                    if (!(i in o) || !('enabled' in s)) return;
                    !0 === o[i] && (o[i] = { enabled: !0 }),
                      'object' != typeof o[i] ||
                        'enabled' in o[i] ||
                        (o[i].enabled = !0),
                      o[i] || (o[i] = { enabled: !1 });
                  }
                });
              var f = G.extend({}, te);
              u.useModulesParams(f),
                (u.params = G.extend({}, f, se, o)),
                (u.originalParams = G.extend({}, u.params)),
                (u.passedParams = G.extend({}, o)),
                (u.$ = b);
              var v,
                g,
                m,
                w = b(u.params.el);
              if (!(a = w[0])) return i(t);
              if (w.length > 1) {
                var S = [];
                return i(
                  t,
                  (w.each(function(e, t) {
                    var i = G.extend({}, o, { el: t });
                    S.push(new r(i));
                  }),
                  S)
                );
              }
              return i(
                t,
                ((a.swiper = u),
                w.data('swiper', u),
                a && a.shadowRoot && a.shadowRoot.querySelector
                  ? ((v = b(
                      a.shadowRoot.querySelector('.' + u.params.wrapperClass)
                    )).children = function(e) {
                      return w.children(e);
                    })
                  : (v = w.children('.' + u.params.wrapperClass)),
                G.extend(u, {
                  $el: w,
                  el: a,
                  $wrapperEl: v,
                  wrapperEl: v[0],
                  classNames: [],
                  slides: b(),
                  slidesGrid: [],
                  snapGrid: [],
                  slidesSizesGrid: [],
                  isHorizontal: function() {
                    return 'horizontal' === u.params.direction;
                  },
                  isVertical: function() {
                    return 'vertical' === u.params.direction;
                  },
                  rtl:
                    'rtl' === a.dir.toLowerCase() ||
                    'rtl' === w.css('direction'),
                  rtlTranslate:
                    'horizontal' === u.params.direction &&
                    ('rtl' === a.dir.toLowerCase() ||
                      'rtl' === w.css('direction')),
                  wrongRTL: '-webkit-box' === v.css('display'),
                  activeIndex: 0,
                  realIndex: 0,
                  isBeginning: !0,
                  isEnd: !1,
                  translate: 0,
                  previousTranslate: 0,
                  progress: 0,
                  velocity: 0,
                  animating: !1,
                  allowSlideNext: u.params.allowSlideNext,
                  allowSlidePrev: u.params.allowSlidePrev,
                  touchEvents:
                    ((g = [
                      'touchstart',
                      'touchmove',
                      'touchend',
                      'touchcancel'
                    ]),
                    (m = ['mousedown', 'mousemove', 'mouseup']),
                    $.pointerEvents &&
                      (m = ['pointerdown', 'pointermove', 'pointerup']),
                    (u.touchEventsTouch = {
                      start: g[0],
                      move: g[1],
                      end: g[2],
                      cancel: g[3]
                    }),
                    (u.touchEventsDesktop = {
                      start: m[0],
                      move: m[1],
                      end: m[2]
                    }),
                    $.touch || !u.params.simulateTouch
                      ? u.touchEventsTouch
                      : u.touchEventsDesktop),
                  touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements:
                      'input, select, option, textarea, button, video, label',
                    lastClickTime: G.now(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                  },
                  allowClick: !0,
                  allowTouchMove: u.params.allowTouchMove,
                  touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                  },
                  imagesToLoad: [],
                  imagesLoaded: 0
                }),
                u.useModules(),
                u.params.init && u.init(),
                u)
              );
            }
            return (
              o(
                r,
                [
                  {
                    key: 'slidesPerViewDynamic',
                    value: function() {
                      var e = this.params,
                        t = this.slides,
                        i = this.slidesGrid,
                        s = this.size,
                        a = this.activeIndex,
                        n = 1;
                      if (e.centeredSlides) {
                        for (
                          var r, o = t[a].swiperSlideSize, l = a + 1;
                          l < t.length;
                          l += 1
                        )
                          t[l] &&
                            !r &&
                            ((n += 1),
                            (o += t[l].swiperSlideSize) > s && (r = !0));
                        for (var d = a - 1; d >= 0; d -= 1)
                          t[d] &&
                            !r &&
                            ((n += 1),
                            (o += t[d].swiperSlideSize) > s && (r = !0));
                      } else
                        for (var h = a + 1; h < t.length; h += 1)
                          i[h] - i[a] < s && (n += 1);
                      return n;
                    }
                  },
                  {
                    key: 'update',
                    value: function() {
                      var e = this;
                      if (e && !e.destroyed) {
                        var t = e.snapGrid,
                          i = e.params;
                        i.breakpoints && e.setBreakpoint(),
                          e.updateSize(),
                          e.updateSlides(),
                          e.updateProgress(),
                          e.updateSlidesClasses(),
                          e.params.freeMode
                            ? (s(), e.params.autoHeight && e.updateAutoHeight())
                            : e.slideTo(
                                ('auto' === e.params.slidesPerView ||
                                  e.params.slidesPerView > 1) &&
                                  e.isEnd &&
                                  !e.params.centeredSlides
                                  ? e.slides.length - 1
                                  : e.activeIndex,
                                0,
                                !1,
                                !0
                              ) || s(),
                          i.watchOverflow &&
                            t !== e.snapGrid &&
                            e.checkOverflow(),
                          e.emit('update');
                      }
                      function s() {
                        var t = Math.min(
                          Math.max(
                            e.rtlTranslate ? -1 * e.translate : e.translate,
                            e.maxTranslate()
                          ),
                          e.minTranslate()
                        );
                        e.setTranslate(t),
                          e.updateActiveIndex(),
                          e.updateSlidesClasses();
                      }
                    }
                  },
                  {
                    key: 'changeDirection',
                    value: function(e) {
                      var t =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        i = this.params.direction;
                      return (
                        e ||
                          (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
                        e === i ||
                          ('horizontal' !== e && 'vertical' !== e) ||
                          (this.$el
                            .removeClass(
                              ''
                                .concat(this.params.containerModifierClass)
                                .concat(i)
                            )
                            .addClass(
                              ''
                                .concat(this.params.containerModifierClass)
                                .concat(e)
                            ),
                          (this.params.direction = e),
                          this.slides.each(function(t, i) {
                            'vertical' === e
                              ? (i.style.width = '')
                              : (i.style.height = '');
                          }),
                          this.emit('changeDirection'),
                          t && this.update()),
                        this
                      );
                    }
                  },
                  {
                    key: 'init',
                    value: function() {
                      this.initialized ||
                        (this.emit('beforeInit'),
                        this.params.breakpoints && this.setBreakpoint(),
                        this.addClasses(),
                        this.params.loop && this.loopCreate(),
                        this.updateSize(),
                        this.updateSlides(),
                        this.params.watchOverflow && this.checkOverflow(),
                        this.params.grabCursor && this.setGrabCursor(),
                        this.params.preloadImages && this.preloadImages(),
                        this.slideTo(
                          this.params.loop
                            ? this.params.initialSlide + this.loopedSlides
                            : this.params.initialSlide,
                          0,
                          this.params.runCallbacksOnInit
                        ),
                        this.attachEvents(),
                        (this.initialized = !0),
                        this.emit('init'));
                    }
                  },
                  {
                    key: 'destroy',
                    value: function() {
                      var e =
                          !(arguments.length > 0 && void 0 !== arguments[0]) ||
                          arguments[0],
                        t =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        i = this,
                        s = i.params,
                        a = i.$el,
                        n = i.$wrapperEl,
                        r = i.slides;
                      return (
                        void 0 === i.params ||
                          i.destroyed ||
                          (i.emit('beforeDestroy'),
                          (i.initialized = !1),
                          i.detachEvents(),
                          s.loop && i.loopDestroy(),
                          t &&
                            (i.removeClasses(),
                            a.removeAttr('style'),
                            n.removeAttr('style'),
                            r &&
                              r.length &&
                              r
                                .removeClass(
                                  [
                                    s.slideVisibleClass,
                                    s.slideActiveClass,
                                    s.slideNextClass,
                                    s.slidePrevClass
                                  ].join(' ')
                                )
                                .removeAttr('style')
                                .removeAttr('data-swiper-slide-index')),
                          i.emit('destroy'),
                          Object.keys(i.eventsListeners).forEach(function(e) {
                            i.off(e);
                          }),
                          !1 !== e &&
                            ((i.$el[0].swiper = null),
                            i.$el.data('swiper', null),
                            G.deleteProps(i)),
                          (i.destroyed = !0)),
                        null
                      );
                    }
                  }
                ],
                [
                  {
                    key: 'extendDefaults',
                    value: function(e) {
                      G.extend(se, e);
                    }
                  },
                  {
                    key: 'extendedDefaults',
                    get: function() {
                      return se;
                    }
                  },
                  {
                    key: 'defaults',
                    get: function() {
                      return te;
                    }
                  },
                  {
                    key: 'Class',
                    get: function() {
                      return B;
                    }
                  },
                  {
                    key: '$',
                    get: function() {
                      return b;
                    }
                  }
                ]
              ),
              r
            );
          })(B),
          ne = { name: 'device', proto: { device: W }, static: { device: W } },
          re = {
            name: 'support',
            proto: { support: $ },
            static: { support: $ }
          },
          oe = {
            isEdge: !!m.navigator.userAgent.match(/Edge/g),
            isSafari: (function() {
              var e = m.navigator.userAgent.toLowerCase();
              return (
                e.indexOf('safari') >= 0 &&
                e.indexOf('chrome') < 0 &&
                e.indexOf('android') < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              m.navigator.userAgent
            )
          },
          le = {
            name: 'browser',
            proto: { browser: oe },
            static: { browser: oe }
          },
          de = {
            name: 'resize',
            create: function() {
              var e = this;
              G.extend(e, {
                resize: {
                  resizeHandler: function() {
                    e &&
                      !e.destroyed &&
                      e.initialized &&
                      (e.emit('beforeResize'), e.emit('resize'));
                  },
                  orientationChangeHandler: function() {
                    e &&
                      !e.destroyed &&
                      e.initialized &&
                      e.emit('orientationchange');
                  }
                }
              });
            },
            on: {
              init: function() {
                m.addEventListener('resize', this.resize.resizeHandler),
                  m.addEventListener(
                    'orientationchange',
                    this.resize.orientationChangeHandler
                  );
              },
              destroy: function() {
                m.removeEventListener('resize', this.resize.resizeHandler),
                  m.removeEventListener(
                    'orientationchange',
                    this.resize.orientationChangeHandler
                  );
              }
            }
          },
          he = {
            func: m.MutationObserver || m.WebkitMutationObserver,
            attach: function(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = this,
                s = new (0, he.func)(function(e) {
                  if (1 !== e.length) {
                    var t = function() {
                      i.emit('observerUpdate', e[0]);
                    };
                    m.requestAnimationFrame
                      ? m.requestAnimationFrame(t)
                      : m.setTimeout(t, 0);
                  } else i.emit('observerUpdate', e[0]);
                });
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
              }),
                i.observer.observers.push(s);
            },
            init: function() {
              if ($.observer && this.params.observer) {
                if (this.params.observeParents)
                  for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                    this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                  childList: this.params.observeSlideChildren
                }),
                  this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
              }
            },
            destroy: function() {
              this.observer.observers.forEach(function(e) {
                e.disconnect();
              }),
                (this.observer.observers = []);
            }
          },
          pe = {
            name: 'observer',
            params: {
              observer: !1,
              observeParents: !1,
              observeSlideChildren: !1
            },
            create: function() {
              G.extend(this, {
                observer: {
                  init: he.init.bind(this),
                  attach: he.attach.bind(this),
                  destroy: he.destroy.bind(this),
                  observers: []
                }
              });
            },
            on: {
              init: function() {
                this.observer.init();
              },
              destroy: function() {
                this.observer.destroy();
              }
            }
          },
          ce = {
            update: function(e) {
              var t = this,
                i = t.params,
                s = i.slidesPerView,
                a = i.slidesPerGroup,
                n = i.centeredSlides,
                r = t.params.virtual,
                o = r.addSlidesBefore,
                l = r.addSlidesAfter,
                d = t.virtual,
                h = d.from,
                p = d.to,
                c = d.slides,
                u = d.slidesGrid,
                f = d.renderSlide,
                v = d.offset;
              t.updateActiveIndex();
              var g,
                m,
                w,
                b = t.activeIndex || 0;
              (g = t.rtlTranslate
                ? 'right'
                : t.isHorizontal()
                ? 'left'
                : 'top'),
                n
                  ? ((m = Math.floor(s / 2) + a + o),
                    (w = Math.floor(s / 2) + a + l))
                  : ((m = s + (a - 1) + o), (w = a + l));
              var S = Math.max((b || 0) - w, 0),
                E = Math.min((b || 0) + m, c.length - 1),
                y = (t.slidesGrid[S] || 0) - (t.slidesGrid[0] || 0);
              function T() {
                t.updateSlides(),
                  t.updateProgress(),
                  t.updateSlidesClasses(),
                  t.lazy && t.params.lazy.enabled && t.lazy.load();
              }
              if (
                (G.extend(t.virtual, {
                  from: S,
                  to: E,
                  offset: y,
                  slidesGrid: t.slidesGrid
                }),
                h === S && p === E && !e)
              )
                return (
                  t.slidesGrid !== u && y !== v && t.slides.css(g, y + 'px'),
                  void t.updateProgress()
                );
              if (t.params.virtual.renderExternal)
                return (
                  t.params.virtual.renderExternal.call(t, {
                    offset: y,
                    from: S,
                    to: E,
                    slides: (function() {
                      for (var e = [], t = S; t <= E; t += 1) e.push(c[t]);
                      return e;
                    })()
                  }),
                  void T()
                );
              var x = [],
                A = [];
              if (e) t.$wrapperEl.find('.' + t.params.slideClass).remove();
              else
                for (var C = h; C <= p; C += 1)
                  (C < S || C > E) &&
                    t.$wrapperEl
                      .find(
                        '.'
                          .concat(
                            t.params.slideClass,
                            '[data-swiper-slide-index="'
                          )
                          .concat(C, '"]')
                      )
                      .remove();
              for (var I = 0; I < c.length; I += 1)
                I >= S &&
                  I <= E &&
                  (void 0 === p || e
                    ? A.push(I)
                    : (I > p && A.push(I), I < h && x.push(I)));
              A.forEach(function(e) {
                t.$wrapperEl.append(f(c[e], e));
              }),
                x
                  .sort(function(e, t) {
                    return t - e;
                  })
                  .forEach(function(e) {
                    t.$wrapperEl.prepend(f(c[e], e));
                  }),
                t.$wrapperEl.children('.swiper-slide').css(g, y + 'px'),
                T();
            },
            renderSlide: function(e, t) {
              var i = this.params.virtual;
              if (i.cache && this.virtual.cache[t])
                return this.virtual.cache[t];
              var s = b(
                i.renderSlide
                  ? i.renderSlide.call(this, e, t)
                  : '<div class="'
                      .concat(
                        this.params.slideClass,
                        '" data-swiper-slide-index="'
                      )
                      .concat(t, '">')
                      .concat(e, '</div>')
              );
              return (
                s.attr('data-swiper-slide-index') ||
                  s.attr('data-swiper-slide-index', t),
                i.cache && (this.virtual.cache[t] = s),
                s
              );
            },
            appendSlide: function(e) {
              if ('object' == typeof e && 'length' in e)
                for (var t = 0; t < e.length; t += 1)
                  e[t] && this.virtual.slides.push(e[t]);
              else this.virtual.slides.push(e);
              this.virtual.update(!0);
            },
            prependSlide: function(e) {
              var t = this.activeIndex,
                i = t + 1,
                s = 1;
              if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1)
                  e[a] && this.virtual.slides.unshift(e[a]);
                (i = t + e.length), (s = e.length);
              } else this.virtual.slides.unshift(e);
              if (this.params.virtual.cache) {
                var n = this.virtual.cache,
                  r = {};
                Object.keys(n).forEach(function(e) {
                  var t = n[e],
                    i = t.attr('data-swiper-slide-index');
                  i && t.attr('data-swiper-slide-index', parseInt(i, 10) + 1),
                    (r[parseInt(e, 10) + s] = t);
                }),
                  (this.virtual.cache = r);
              }
              this.virtual.update(!0), this.slideTo(i, 0);
            },
            removeSlide: function(e) {
              if (null != e) {
                var t = this.activeIndex;
                if (Array.isArray(e))
                  for (var i = e.length - 1; i >= 0; i -= 1)
                    this.virtual.slides.splice(e[i], 1),
                      this.params.virtual.cache &&
                        delete this.virtual.cache[e[i]],
                      e[i] < t && (t -= 1),
                      (t = Math.max(t, 0));
                else
                  this.virtual.slides.splice(e, 1),
                    this.params.virtual.cache && delete this.virtual.cache[e],
                    e < t && (t -= 1),
                    (t = Math.max(t, 0));
                this.virtual.update(!0), this.slideTo(t, 0);
              }
            },
            removeAllSlides: function() {
              (this.virtual.slides = []),
                this.params.virtual.cache && (this.virtual.cache = {}),
                this.virtual.update(!0),
                this.slideTo(0, 0);
            }
          },
          ue = {
            name: 'virtual',
            params: {
              virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
              }
            },
            create: function() {
              G.extend(this, {
                virtual: {
                  update: ce.update.bind(this),
                  appendSlide: ce.appendSlide.bind(this),
                  prependSlide: ce.prependSlide.bind(this),
                  removeSlide: ce.removeSlide.bind(this),
                  removeAllSlides: ce.removeAllSlides.bind(this),
                  renderSlide: ce.renderSlide.bind(this),
                  slides: this.params.virtual.slides,
                  cache: {}
                }
              });
            },
            on: {
              beforeInit: function() {
                if (this.params.virtual.enabled) {
                  this.classNames.push(
                    this.params.containerModifierClass + 'virtual'
                  );
                  var e = { watchSlidesProgress: !0 };
                  G.extend(this.params, e),
                    G.extend(this.originalParams, e),
                    this.params.initialSlide || this.virtual.update();
                }
              },
              setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update();
              }
            }
          },
          fe = {
            handle: function(e) {
              var t = this.rtlTranslate,
                i = e;
              i.originalEvent && (i = i.originalEvent);
              var s = i.keyCode || i.charCode,
                a = this.params.keyboard.pageUpDown,
                n = a && 33 === s,
                r = a && 34 === s,
                o = 37 === s,
                l = 39 === s,
                d = 38 === s,
                h = 40 === s;
              if (
                !this.allowSlideNext &&
                ((this.isHorizontal() && l) || (this.isVertical() && h) || r)
              )
                return !1;
              if (
                !this.allowSlidePrev &&
                ((this.isHorizontal() && o) || (this.isVertical() && d) || n)
              )
                return !1;
              if (
                !(
                  i.shiftKey ||
                  i.altKey ||
                  i.ctrlKey ||
                  i.metaKey ||
                  (v.activeElement &&
                    v.activeElement.nodeName &&
                    ('input' === v.activeElement.nodeName.toLowerCase() ||
                      'textarea' === v.activeElement.nodeName.toLowerCase()))
                )
              ) {
                if (
                  this.params.keyboard.onlyInViewport &&
                  (n || r || o || l || d || h)
                ) {
                  var p = !1;
                  if (
                    this.$el.parents('.' + this.params.slideClass).length > 0 &&
                    0 ===
                      this.$el.parents('.' + this.params.slideActiveClass)
                        .length
                  )
                    return;
                  var c = m.innerWidth,
                    u = m.innerHeight,
                    f = this.$el.offset();
                  t && (f.left -= this.$el[0].scrollLeft);
                  for (
                    var g = [
                        [f.left, f.top],
                        [f.left + this.width, f.top],
                        [f.left, f.top + this.height],
                        [f.left + this.width, f.top + this.height]
                      ],
                      w = 0;
                    w < g.length;
                    w += 1
                  ) {
                    var b = g[w];
                    b[0] >= 0 &&
                      b[0] <= c &&
                      b[1] >= 0 &&
                      b[1] <= u &&
                      (p = !0);
                  }
                  if (!p) return;
                }
                this.isHorizontal()
                  ? ((n || r || o || l) &&
                      (i.preventDefault
                        ? i.preventDefault()
                        : (i.returnValue = !1)),
                    (((r || l) && !t) || ((n || o) && t)) && this.slideNext(),
                    (((n || o) && !t) || ((r || l) && t)) && this.slidePrev())
                  : ((n || r || d || h) &&
                      (i.preventDefault
                        ? i.preventDefault()
                        : (i.returnValue = !1)),
                    (r || h) && this.slideNext(),
                    (n || d) && this.slidePrev()),
                  this.emit('keyPress', s);
              }
            },
            enable: function() {
              this.keyboard.enabled ||
                (b(v).on('keydown', this.keyboard.handle),
                (this.keyboard.enabled = !0));
            },
            disable: function() {
              this.keyboard.enabled &&
                (b(v).off('keydown', this.keyboard.handle),
                (this.keyboard.enabled = !1));
            }
          },
          ve = {
            name: 'keyboard',
            params: {
              keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 }
            },
            create: function() {
              G.extend(this, {
                keyboard: {
                  enabled: !1,
                  enable: fe.enable.bind(this),
                  disable: fe.disable.bind(this),
                  handle: fe.handle.bind(this)
                }
              });
            },
            on: {
              init: function() {
                this.params.keyboard.enabled && this.keyboard.enable();
              },
              destroy: function() {
                this.keyboard.enabled && this.keyboard.disable();
              }
            }
          },
          ge = {
            lastScrollTime: G.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function() {
              return m.navigator.userAgent.indexOf('firefox') > -1
                ? 'DOMMouseScroll'
                : (function() {
                    var e = 'onwheel' in v;
                    if (!e) {
                      var t = v.createElement('div');
                      t.setAttribute('onwheel', 'return;'),
                        (e = 'function' == typeof t.onwheel);
                    }
                    return (
                      !e &&
                        v.implementation &&
                        v.implementation.hasFeature &&
                        !0 !== v.implementation.hasFeature('', '') &&
                        (e = v.implementation.hasFeature(
                          'Events.wheel',
                          '3.0'
                        )),
                      e
                    );
                  })()
                ? 'wheel'
                : 'mousewheel';
            },
            normalize: function(e) {
              var t = 0,
                i = 0,
                s = 0,
                a = 0;
              return (
                'detail' in e && (i = e.detail),
                'wheelDelta' in e && (i = -e.wheelDelta / 120),
                'wheelDeltaY' in e && (i = -e.wheelDeltaY / 120),
                'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
                'axis' in e &&
                  e.axis === e.HORIZONTAL_AXIS &&
                  ((t = i), (i = 0)),
                (s = 10 * t),
                (a = 10 * i),
                'deltaY' in e && (a = e.deltaY),
                'deltaX' in e && (s = e.deltaX),
                e.shiftKey && !s && ((s = a), (a = 0)),
                (s || a) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((s *= 40), (a *= 40))
                    : ((s *= 800), (a *= 800))),
                s && !t && (t = s < 1 ? -1 : 1),
                a && !i && (i = a < 1 ? -1 : 1),
                { spinX: t, spinY: i, pixelX: s, pixelY: a }
              );
            },
            handleMouseEnter: function() {
              this.mouseEntered = !0;
            },
            handleMouseLeave: function() {
              this.mouseEntered = !1;
            },
            handle: function(e) {
              var t = e,
                i = this,
                s = i.params.mousewheel;
              i.params.cssMode && t.preventDefault();
              var a = i.$el;
              if (
                ('container' !== i.params.mousewheel.eventsTarged &&
                  (a = b(i.params.mousewheel.eventsTarged)),
                !i.mouseEntered &&
                  !a[0].contains(t.target) &&
                  !s.releaseOnEdges)
              )
                return !0;
              t.originalEvent && (t = t.originalEvent);
              var n = 0,
                r = i.rtlTranslate ? -1 : 1,
                o = ge.normalize(t);
              if (s.forceToAxis)
                if (i.isHorizontal()) {
                  if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                  n = -o.pixelX * r;
                } else {
                  if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                  n = -o.pixelY;
                }
              else
                n =
                  Math.abs(o.pixelX) > Math.abs(o.pixelY)
                    ? -o.pixelX * r
                    : -o.pixelY;
              if (0 === n) return !0;
              if ((s.invert && (n = -n), i.params.freeMode)) {
                var l = {
                    time: G.now(),
                    delta: Math.abs(n),
                    direction: Math.sign(n)
                  },
                  d = i.mousewheel.lastEventBeforeSnap,
                  h =
                    d &&
                    l.time < d.time + 500 &&
                    l.delta <= d.delta &&
                    l.direction === d.direction;
                if (!h) {
                  (i.mousewheel.lastEventBeforeSnap = void 0),
                    i.params.loop && i.loopFix();
                  var p = i.getTranslate() + n * s.sensitivity,
                    c = i.isBeginning,
                    u = i.isEnd;
                  if (
                    (p >= i.minTranslate() && (p = i.minTranslate()),
                    p <= i.maxTranslate() && (p = i.maxTranslate()),
                    i.setTransition(0),
                    i.setTranslate(p),
                    i.updateProgress(),
                    i.updateActiveIndex(),
                    i.updateSlidesClasses(),
                    ((!c && i.isBeginning) || (!u && i.isEnd)) &&
                      i.updateSlidesClasses(),
                    i.params.freeModeSticky)
                  ) {
                    clearTimeout(i.mousewheel.timeout),
                      (i.mousewheel.timeout = void 0);
                    var f = i.mousewheel.recentWheelEvents;
                    f.length >= 15 && f.shift();
                    var v = f.length ? f[f.length - 1] : void 0,
                      g = f[0];
                    if (
                      (f.push(l),
                      v && (l.delta > v.delta || l.direction !== v.direction))
                    )
                      f.splice(0);
                    else if (
                      f.length >= 15 &&
                      l.time - g.time < 500 &&
                      g.delta - l.delta >= 1 &&
                      l.delta <= 6
                    ) {
                      var m = n > 0 ? 0.8 : 0.2;
                      (i.mousewheel.lastEventBeforeSnap = l),
                        f.splice(0),
                        (i.mousewheel.timeout = G.nextTick(function() {
                          i.slideToClosest(i.params.speed, !0, void 0, m);
                        }, 0));
                    }
                    i.mousewheel.timeout ||
                      (i.mousewheel.timeout = G.nextTick(function() {
                        (i.mousewheel.lastEventBeforeSnap = l),
                          f.splice(0),
                          i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                      }, 500));
                  }
                  if (
                    (h || i.emit('scroll', t),
                    i.params.autoplay &&
                      i.params.autoplayDisableOnInteraction &&
                      i.autoplay.stop(),
                    p === i.minTranslate() || p === i.maxTranslate())
                  )
                    return !0;
                }
              } else {
                var w = {
                    time: G.now(),
                    delta: Math.abs(n),
                    direction: Math.sign(n),
                    raw: e
                  },
                  S = i.mousewheel.recentWheelEvents;
                S.length >= 2 && S.shift();
                var E = S.length ? S[S.length - 1] : void 0;
                if (
                  (S.push(w),
                  E
                    ? (w.direction !== E.direction ||
                        w.delta > E.delta ||
                        w.time > E.time + 150) &&
                      i.mousewheel.animateSlider(w)
                    : i.mousewheel.animateSlider(w),
                  i.mousewheel.releaseScroll(w))
                )
                  return !0;
              }
              return (
                t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
              );
            },
            animateSlider: function(e) {
              return (
                (e.delta >= 6 &&
                  G.now() - this.mousewheel.lastScrollTime < 60) ||
                (e.direction < 0
                  ? (this.isEnd && !this.params.loop) ||
                    this.animating ||
                    (this.slideNext(), this.emit('scroll', e.raw))
                  : (this.isBeginning && !this.params.loop) ||
                    this.animating ||
                    (this.slidePrev(), this.emit('scroll', e.raw)),
                (this.mousewheel.lastScrollTime = new m.Date().getTime()),
                !1)
              );
            },
            releaseScroll: function(e) {
              var t = this.params.mousewheel;
              if (e.direction < 0) {
                if (this.isEnd && !this.params.loop && t.releaseOnEdges)
                  return !0;
              } else if (
                this.isBeginning &&
                !this.params.loop &&
                t.releaseOnEdges
              )
                return !0;
              return !1;
            },
            enable: function() {
              var e = ge.event();
              if (this.params.cssMode)
                return (
                  this.wrapperEl.removeEventListener(e, this.mousewheel.handle),
                  !0
                );
              if (!e) return !1;
              if (this.mousewheel.enabled) return !1;
              var t = this.$el;
              return (
                'container' !== this.params.mousewheel.eventsTarged &&
                  (t = b(this.params.mousewheel.eventsTarged)),
                t.on('mouseenter', this.mousewheel.handleMouseEnter),
                t.on('mouseleave', this.mousewheel.handleMouseLeave),
                t.on(e, this.mousewheel.handle),
                (this.mousewheel.enabled = !0),
                !0
              );
            },
            disable: function() {
              var e = ge.event();
              if (this.params.cssMode)
                return (
                  this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0
                );
              if (!e) return !1;
              if (!this.mousewheel.enabled) return !1;
              var t = this.$el;
              return (
                'container' !== this.params.mousewheel.eventsTarged &&
                  (t = b(this.params.mousewheel.eventsTarged)),
                t.off(e, this.mousewheel.handle),
                (this.mousewheel.enabled = !1),
                !0
              );
            }
          },
          me = {
            update: function() {
              var e = this.params.navigation;
              if (!this.params.loop) {
                var t = this.navigation,
                  i = t.$nextEl,
                  s = t.$prevEl;
                s &&
                  s.length > 0 &&
                  (this.isBeginning
                    ? s.addClass(e.disabledClass)
                    : s.removeClass(e.disabledClass),
                  s[
                    this.params.watchOverflow && this.isLocked
                      ? 'addClass'
                      : 'removeClass'
                  ](e.lockClass)),
                  i &&
                    i.length > 0 &&
                    (this.isEnd
                      ? i.addClass(e.disabledClass)
                      : i.removeClass(e.disabledClass),
                    i[
                      this.params.watchOverflow && this.isLocked
                        ? 'addClass'
                        : 'removeClass'
                    ](e.lockClass));
              }
            },
            onPrevClick: function(e) {
              e.preventDefault(),
                (this.isBeginning && !this.params.loop) || this.slidePrev();
            },
            onNextClick: function(e) {
              e.preventDefault(),
                (this.isEnd && !this.params.loop) || this.slideNext();
            },
            init: function() {
              var e,
                t,
                i = this.params.navigation;
              (i.nextEl || i.prevEl) &&
                (i.nextEl &&
                  ((e = b(i.nextEl)),
                  this.params.uniqueNavElements &&
                    'string' == typeof i.nextEl &&
                    e.length > 1 &&
                    1 === this.$el.find(i.nextEl).length &&
                    (e = this.$el.find(i.nextEl))),
                i.prevEl &&
                  ((t = b(i.prevEl)),
                  this.params.uniqueNavElements &&
                    'string' == typeof i.prevEl &&
                    t.length > 1 &&
                    1 === this.$el.find(i.prevEl).length &&
                    (t = this.$el.find(i.prevEl))),
                e && e.length > 0 && e.on('click', this.navigation.onNextClick),
                t && t.length > 0 && t.on('click', this.navigation.onPrevClick),
                G.extend(this.navigation, {
                  $nextEl: e,
                  nextEl: e && e[0],
                  $prevEl: t,
                  prevEl: t && t[0]
                }));
            },
            destroy: function() {
              var e = this.navigation,
                t = e.$nextEl,
                i = e.$prevEl;
              t &&
                t.length &&
                (t.off('click', this.navigation.onNextClick),
                t.removeClass(this.params.navigation.disabledClass)),
                i &&
                  i.length &&
                  (i.off('click', this.navigation.onPrevClick),
                  i.removeClass(this.params.navigation.disabledClass));
            }
          },
          we = {
            update: function() {
              var e = this.rtl,
                t = this.params.pagination;
              if (
                t.el &&
                this.pagination.el &&
                this.pagination.$el &&
                0 !== this.pagination.$el.length
              ) {
                var i,
                  s =
                    this.virtual && this.params.virtual.enabled
                      ? this.virtual.slides.length
                      : this.slides.length,
                  a = this.pagination.$el,
                  n = this.params.loop
                    ? Math.ceil(
                        (s - 2 * this.loopedSlides) / this.params.slidesPerGroup
                      )
                    : this.snapGrid.length;
                if (
                  (this.params.loop
                    ? ((i = Math.ceil(
                        (this.activeIndex - this.loopedSlides) /
                          this.params.slidesPerGroup
                      )) >
                        s - 1 - 2 * this.loopedSlides &&
                        (i -= s - 2 * this.loopedSlides),
                      i > n - 1 && (i -= n),
                      i < 0 &&
                        'bullets' !== this.params.paginationType &&
                        (i = n + i))
                    : (i =
                        void 0 !== this.snapIndex
                          ? this.snapIndex
                          : this.activeIndex || 0),
                  'bullets' === t.type &&
                    this.pagination.bullets &&
                    this.pagination.bullets.length > 0)
                ) {
                  var r,
                    o,
                    l,
                    d = this.pagination.bullets;
                  if (
                    (t.dynamicBullets &&
                      ((this.pagination.bulletSize = d
                        .eq(0)
                        [this.isHorizontal() ? 'outerWidth' : 'outerHeight'](
                          !0
                        )),
                      a.css(
                        this.isHorizontal() ? 'width' : 'height',
                        this.pagination.bulletSize *
                          (t.dynamicMainBullets + 4) +
                          'px'
                      ),
                      t.dynamicMainBullets > 1 &&
                        void 0 !== this.previousIndex &&
                        ((this.pagination.dynamicBulletIndex +=
                          i - this.previousIndex),
                        this.pagination.dynamicBulletIndex >
                        t.dynamicMainBullets - 1
                          ? (this.pagination.dynamicBulletIndex =
                              t.dynamicMainBullets - 1)
                          : this.pagination.dynamicBulletIndex < 0 &&
                            (this.pagination.dynamicBulletIndex = 0)),
                      (r = i - this.pagination.dynamicBulletIndex),
                      (l =
                        ((o =
                          r + (Math.min(d.length, t.dynamicMainBullets) - 1)) +
                          r) /
                        2)),
                    d.removeClass(
                      ''
                        .concat(t.bulletActiveClass, ' ')
                        .concat(t.bulletActiveClass, '-next ')
                        .concat(t.bulletActiveClass, '-next-next ')
                        .concat(t.bulletActiveClass, '-prev ')
                        .concat(t.bulletActiveClass, '-prev-prev ')
                        .concat(t.bulletActiveClass, '-main')
                    ),
                    a.length > 1)
                  )
                    d.each(function(e, s) {
                      var a = b(s),
                        n = a.index();
                      n === i && a.addClass(t.bulletActiveClass),
                        t.dynamicBullets &&
                          (n >= r &&
                            n <= o &&
                            a.addClass(t.bulletActiveClass + '-main'),
                          n === r &&
                            a
                              .prev()
                              .addClass(t.bulletActiveClass + '-prev')
                              .prev()
                              .addClass(t.bulletActiveClass + '-prev-prev'),
                          n === o &&
                            a
                              .next()
                              .addClass(t.bulletActiveClass + '-next')
                              .next()
                              .addClass(t.bulletActiveClass + '-next-next'));
                    });
                  else {
                    var h = d.eq(i),
                      p = h.index();
                    if ((h.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                      for (var c = d.eq(r), u = d.eq(o), f = r; f <= o; f += 1)
                        d.eq(f).addClass(t.bulletActiveClass + '-main');
                      if (this.params.loop)
                        if (p >= d.length - t.dynamicMainBullets) {
                          for (var v = t.dynamicMainBullets; v >= 0; v -= 1)
                            d.eq(d.length - v).addClass(
                              t.bulletActiveClass + '-main'
                            );
                          d.eq(d.length - t.dynamicMainBullets - 1).addClass(
                            t.bulletActiveClass + '-prev'
                          );
                        } else
                          c
                            .prev()
                            .addClass(t.bulletActiveClass + '-prev')
                            .prev()
                            .addClass(t.bulletActiveClass + '-prev-prev'),
                            u
                              .next()
                              .addClass(t.bulletActiveClass + '-next')
                              .next()
                              .addClass(t.bulletActiveClass + '-next-next');
                      else
                        c
                          .prev()
                          .addClass(t.bulletActiveClass + '-prev')
                          .prev()
                          .addClass(t.bulletActiveClass + '-prev-prev'),
                          u
                            .next()
                            .addClass(t.bulletActiveClass + '-next')
                            .next()
                            .addClass(t.bulletActiveClass + '-next-next');
                    }
                  }
                  if (t.dynamicBullets) {
                    var g = Math.min(d.length, t.dynamicMainBullets + 4),
                      m =
                        (this.pagination.bulletSize * g -
                          this.pagination.bulletSize) /
                          2 -
                        l * this.pagination.bulletSize,
                      w = e ? 'right' : 'left';
                    d.css(this.isHorizontal() ? w : 'top', m + 'px');
                  }
                }
                if (
                  ('fraction' === t.type &&
                    (a
                      .find('.' + t.currentClass)
                      .text(t.formatFractionCurrent(i + 1)),
                    a.find('.' + t.totalClass).text(t.formatFractionTotal(n))),
                  'progressbar' === t.type)
                ) {
                  var S;
                  S = t.progressbarOpposite
                    ? this.isHorizontal()
                      ? 'vertical'
                      : 'horizontal'
                    : this.isHorizontal()
                    ? 'horizontal'
                    : 'vertical';
                  var E = (i + 1) / n,
                    y = 1,
                    T = 1;
                  'horizontal' === S ? (y = E) : (T = E),
                    a
                      .find('.' + t.progressbarFillClass)
                      .transform(
                        'translate3d(0,0,0) scaleX('
                          .concat(y, ') scaleY(')
                          .concat(T, ')')
                      )
                      .transition(this.params.speed);
                }
                'custom' === t.type && t.renderCustom
                  ? (a.html(t.renderCustom(this, i + 1, n)),
                    this.emit('paginationRender', this, a[0]))
                  : this.emit('paginationUpdate', this, a[0]),
                  a[
                    this.params.watchOverflow && this.isLocked
                      ? 'addClass'
                      : 'removeClass'
                  ](t.lockClass);
              }
            },
            render: function() {
              var e = this.params.pagination;
              if (
                e.el &&
                this.pagination.el &&
                this.pagination.$el &&
                0 !== this.pagination.$el.length
              ) {
                var t = this.pagination.$el,
                  i = '';
                if ('bullets' === e.type) {
                  for (
                    var s = this.params.loop
                        ? Math.ceil(
                            ((this.virtual && this.params.virtual.enabled
                              ? this.virtual.slides.length
                              : this.slides.length) -
                              2 * this.loopedSlides) /
                              this.params.slidesPerGroup
                          )
                        : this.snapGrid.length,
                      a = 0;
                    a < s;
                    a += 1
                  )
                    i += e.renderBullet
                      ? e.renderBullet.call(this, a, e.bulletClass)
                      : '<'
                          .concat(e.bulletElement, ' class="')
                          .concat(e.bulletClass, '"></')
                          .concat(e.bulletElement, '>');
                  t.html(i),
                    (this.pagination.bullets = t.find('.' + e.bulletClass));
                }
                'fraction' === e.type &&
                  ((i = e.renderFraction
                    ? e.renderFraction.call(this, e.currentClass, e.totalClass)
                    : '<span class="'
                        .concat(e.currentClass, '"></span> / <span class="')
                        .concat(e.totalClass, '"></span>')),
                  t.html(i)),
                  'progressbar' === e.type &&
                    ((i = e.renderProgressbar
                      ? e.renderProgressbar.call(this, e.progressbarFillClass)
                      : '<span class="'.concat(
                          e.progressbarFillClass,
                          '"></span>'
                        )),
                    t.html(i)),
                  'custom' !== e.type &&
                    this.emit('paginationRender', this.pagination.$el[0]);
              }
            },
            init: function() {
              var e = this,
                t = e.params.pagination;
              if (t.el) {
                var i = b(t.el);
                0 !== i.length &&
                  (e.params.uniqueNavElements &&
                    'string' == typeof t.el &&
                    i.length > 1 &&
                    (i = e.$el.find(t.el)),
                  'bullets' === t.type &&
                    t.clickable &&
                    i.addClass(t.clickableClass),
                  i.addClass(t.modifierClass + t.type),
                  'bullets' === t.type &&
                    t.dynamicBullets &&
                    (i.addClass(
                      ''.concat(t.modifierClass).concat(t.type, '-dynamic')
                    ),
                    (e.pagination.dynamicBulletIndex = 0),
                    t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                  'progressbar' === t.type &&
                    t.progressbarOpposite &&
                    i.addClass(t.progressbarOppositeClass),
                  t.clickable &&
                    i.on('click', '.' + t.bulletClass, function(t) {
                      t.preventDefault();
                      var i = b(this).index() * e.params.slidesPerGroup;
                      e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                    }),
                  G.extend(e.pagination, { $el: i, el: i[0] }));
              }
            },
            destroy: function() {
              var e = this.params.pagination;
              if (
                e.el &&
                this.pagination.el &&
                this.pagination.$el &&
                0 !== this.pagination.$el.length
              ) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass),
                  t.removeClass(e.modifierClass + e.type),
                  this.pagination.bullets &&
                    this.pagination.bullets.removeClass(e.bulletActiveClass),
                  e.clickable && t.off('click', '.' + e.bulletClass);
              }
            }
          },
          be = {
            setTranslate: function() {
              if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar,
                  t = this.rtlTranslate,
                  i = this.progress,
                  s = e.dragSize,
                  a = e.trackSize,
                  n = e.$dragEl,
                  r = e.$el,
                  o = this.params.scrollbar,
                  l = s,
                  d = (a - s) * i;
                t
                  ? (d = -d) > 0
                    ? ((l = s - d), (d = 0))
                    : -d + s > a && (l = a + d)
                  : d < 0
                  ? ((l = s + d), (d = 0))
                  : d + s > a && (l = a - d),
                  this.isHorizontal()
                    ? (n.transform('translate3d('.concat(d, 'px, 0, 0)')),
                      (n[0].style.width = l + 'px'))
                    : (n.transform('translate3d(0px, '.concat(d, 'px, 0)')),
                      (n[0].style.height = l + 'px')),
                  o.hide &&
                    (clearTimeout(this.scrollbar.timeout),
                    (r[0].style.opacity = 1),
                    (this.scrollbar.timeout = setTimeout(function() {
                      (r[0].style.opacity = 0), r.transition(400);
                    }, 1e3)));
              }
            },
            setTransition: function(e) {
              this.params.scrollbar.el &&
                this.scrollbar.el &&
                this.scrollbar.$dragEl.transition(e);
            },
            updateSize: function() {
              if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar,
                  t = e.$dragEl,
                  i = e.$el;
                (t[0].style.width = ''), (t[0].style.height = '');
                var s,
                  a = this.isHorizontal()
                    ? i[0].offsetWidth
                    : i[0].offsetHeight,
                  n = this.size / this.virtualSize,
                  r = n * (a / this.size);
                (s =
                  'auto' === this.params.scrollbar.dragSize
                    ? a * n
                    : parseInt(this.params.scrollbar.dragSize, 10)),
                  this.isHorizontal()
                    ? (t[0].style.width = s + 'px')
                    : (t[0].style.height = s + 'px'),
                  (i[0].style.display = n >= 1 ? 'none' : ''),
                  this.params.scrollbar.hide && (i[0].style.opacity = 0),
                  G.extend(e, {
                    trackSize: a,
                    divider: n,
                    moveDivider: r,
                    dragSize: s
                  }),
                  e.$el[
                    this.params.watchOverflow && this.isLocked
                      ? 'addClass'
                      : 'removeClass'
                  ](this.params.scrollbar.lockClass);
              }
            },
            getPointerPosition: function(e) {
              return this.isHorizontal()
                ? 'touchstart' === e.type || 'touchmove' === e.type
                  ? e.targetTouches[0].clientX
                  : e.clientX
                : 'touchstart' === e.type || 'touchmove' === e.type
                ? e.targetTouches[0].clientY
                : e.clientY;
            },
            setDragPosition: function(e) {
              var t,
                i = this.scrollbar,
                s = this.rtlTranslate,
                a = i.$el,
                n = i.dragSize,
                r = i.trackSize,
                o = i.dragStartPos;
              (t =
                (i.getPointerPosition(e) -
                  a.offset()[this.isHorizontal() ? 'left' : 'top'] -
                  (null !== o ? o : n / 2)) /
                (r - n)),
                (t = Math.max(Math.min(t, 1), 0)),
                s && (t = 1 - t);
              var l =
                this.minTranslate() +
                (this.maxTranslate() - this.minTranslate()) * t;
              this.updateProgress(l),
                this.setTranslate(l),
                this.updateActiveIndex(),
                this.updateSlidesClasses();
            },
            onDragStart: function(e) {
              var t = this.params.scrollbar,
                i = this.scrollbar,
                s = this.$wrapperEl,
                a = i.$el,
                n = i.$dragEl;
              (this.scrollbar.isTouched = !0),
                (this.scrollbar.dragStartPos =
                  e.target === n[0] || e.target === n
                    ? i.getPointerPosition(e) -
                      e.target.getBoundingClientRect()[
                        this.isHorizontal() ? 'left' : 'top'
                      ]
                    : null),
                e.preventDefault(),
                e.stopPropagation(),
                s.transition(100),
                n.transition(100),
                i.setDragPosition(e),
                clearTimeout(this.scrollbar.dragTimeout),
                a.transition(0),
                t.hide && a.css('opacity', 1),
                this.params.cssMode &&
                  this.$wrapperEl.css('scroll-snap-type', 'none'),
                this.emit('scrollbarDragStart', e);
            },
            onDragMove: function(e) {
              var t = this.scrollbar,
                i = this.$wrapperEl,
                s = t.$el,
                a = t.$dragEl;
              this.scrollbar.isTouched &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                t.setDragPosition(e),
                i.transition(0),
                s.transition(0),
                a.transition(0),
                this.emit('scrollbarDragMove', e));
            },
            onDragEnd: function(e) {
              var t = this.params.scrollbar,
                i = this.scrollbar,
                s = this.$wrapperEl,
                a = i.$el;
              this.scrollbar.isTouched &&
                ((this.scrollbar.isTouched = !1),
                this.params.cssMode &&
                  (this.$wrapperEl.css('scroll-snap-type', ''),
                  s.transition('')),
                t.hide &&
                  (clearTimeout(this.scrollbar.dragTimeout),
                  (this.scrollbar.dragTimeout = G.nextTick(function() {
                    a.css('opacity', 0), a.transition(400);
                  }, 1e3))),
                this.emit('scrollbarDragEnd', e),
                t.snapOnRelease && this.slideToClosest());
            },
            enableDraggable: function() {
              if (this.params.scrollbar.el) {
                var e = this.scrollbar,
                  t = this.touchEventsTouch,
                  i = this.touchEventsDesktop,
                  s = this.params,
                  a = e.$el[0],
                  n = !(!$.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                  },
                  r = !(!$.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                  };
                $.touch
                  ? (a.addEventListener(t.start, this.scrollbar.onDragStart, n),
                    a.addEventListener(t.move, this.scrollbar.onDragMove, n),
                    a.addEventListener(t.end, this.scrollbar.onDragEnd, r))
                  : (a.addEventListener(i.start, this.scrollbar.onDragStart, n),
                    v.addEventListener(i.move, this.scrollbar.onDragMove, n),
                    v.addEventListener(i.end, this.scrollbar.onDragEnd, r));
              }
            },
            disableDraggable: function() {
              if (this.params.scrollbar.el) {
                var e = this.scrollbar,
                  t = this.touchEventsTouch,
                  i = this.touchEventsDesktop,
                  s = this.params,
                  a = e.$el[0],
                  n = !(!$.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                  },
                  r = !(!$.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                  };
                $.touch
                  ? (a.removeEventListener(
                      t.start,
                      this.scrollbar.onDragStart,
                      n
                    ),
                    a.removeEventListener(t.move, this.scrollbar.onDragMove, n),
                    a.removeEventListener(t.end, this.scrollbar.onDragEnd, r))
                  : (a.removeEventListener(
                      i.start,
                      this.scrollbar.onDragStart,
                      n
                    ),
                    v.removeEventListener(i.move, this.scrollbar.onDragMove, n),
                    v.removeEventListener(i.end, this.scrollbar.onDragEnd, r));
              }
            },
            init: function() {
              if (this.params.scrollbar.el) {
                var e = this.scrollbar,
                  t = this.$el,
                  i = this.params.scrollbar,
                  s = b(i.el);
                this.params.uniqueNavElements &&
                  'string' == typeof i.el &&
                  s.length > 1 &&
                  1 === t.find(i.el).length &&
                  (s = t.find(i.el));
                var a = s.find('.' + this.params.scrollbar.dragClass);
                0 === a.length &&
                  ((a = b(
                    '<div class="'.concat(
                      this.params.scrollbar.dragClass,
                      '"></div>'
                    )
                  )),
                  s.append(a)),
                  G.extend(e, { $el: s, el: s[0], $dragEl: a, dragEl: a[0] }),
                  i.draggable && e.enableDraggable();
              }
            },
            destroy: function() {
              this.scrollbar.disableDraggable();
            }
          },
          Se = {
            setTransform: function(e, t) {
              var i = this.rtl,
                s = b(e),
                a = i ? -1 : 1,
                n = s.attr('data-swiper-parallax') || '0',
                r = s.attr('data-swiper-parallax-x'),
                o = s.attr('data-swiper-parallax-y'),
                l = s.attr('data-swiper-parallax-scale'),
                d = s.attr('data-swiper-parallax-opacity');
              if (
                (r || o
                  ? ((r = r || '0'), (o = o || '0'))
                  : this.isHorizontal()
                  ? ((r = n), (o = '0'))
                  : ((o = n), (r = '0')),
                (r =
                  r.indexOf('%') >= 0
                    ? parseInt(r, 10) * t * a + '%'
                    : r * t * a + 'px'),
                (o =
                  o.indexOf('%') >= 0
                    ? parseInt(o, 10) * t + '%'
                    : o * t + 'px'),
                null != d)
              ) {
                var h = d - (d - 1) * (1 - Math.abs(t));
                s[0].style.opacity = h;
              }
              if (null == l)
                s.transform('translate3d('.concat(r, ', ').concat(o, ', 0px)'));
              else {
                var p = l - (l - 1) * (1 - Math.abs(t));
                s.transform(
                  'translate3d('
                    .concat(r, ', ')
                    .concat(o, ', 0px) scale(')
                    .concat(p, ')')
                );
              }
            },
            setTranslate: function() {
              var e = this,
                t = e.$el,
                i = e.slides,
                s = e.progress,
                a = e.snapGrid;
              t
                .children(
                  '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                )
                .each(function(t, i) {
                  e.parallax.setTransform(i, s);
                }),
                i.each(function(t, i) {
                  var n = i.progress;
                  e.params.slidesPerGroup > 1 &&
                    'auto' !== e.params.slidesPerView &&
                    (n += Math.ceil(t / 2) - s * (a.length - 1)),
                    (n = Math.min(Math.max(n, -1), 1)),
                    b(i)
                      .find(
                        '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                      )
                      .each(function(t, i) {
                        e.parallax.setTransform(i, n);
                      });
                });
            },
            setTransition: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.params.speed,
                t = this.$el;
              t.find(
                '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
              ).each(function(t, i) {
                var s = b(i),
                  a =
                    parseInt(s.attr('data-swiper-parallax-duration'), 10) || e;
                0 === e && (a = 0), s.transition(a);
              });
            }
          },
          Ee = {
            getDistanceBetweenTouches: function(e) {
              return e.targetTouches.length < 2
                ? 1
                : Math.sqrt(
                    Math.pow(
                      e.targetTouches[1].pageX - e.targetTouches[0].pageX,
                      2
                    ) +
                      Math.pow(
                        e.targetTouches[1].pageY - e.targetTouches[0].pageY,
                        2
                      )
                  );
            },
            onGestureStart: function(e) {
              var t = this.params.zoom,
                i = this.zoom,
                s = i.gesture;
              if (
                ((i.fakeGestureTouched = !1),
                (i.fakeGestureMoved = !1),
                !$.gestures)
              ) {
                if (
                  'touchstart' !== e.type ||
                  ('touchstart' === e.type && e.targetTouches.length < 2)
                )
                  return;
                (i.fakeGestureTouched = !0),
                  (s.scaleStart = Ee.getDistanceBetweenTouches(e));
              }
              (s.$slideEl && s.$slideEl.length) ||
              ((s.$slideEl = b(e.target).closest('.' + this.params.slideClass)),
              0 === s.$slideEl.length &&
                (s.$slideEl = this.slides.eq(this.activeIndex)),
              (s.$imageEl = s.$slideEl.find(
                'img, svg, canvas, picture, .swiper-zoom-target'
              )),
              (s.$imageWrapEl = s.$imageEl.parent('.' + t.containerClass)),
              (s.maxRatio =
                s.$imageWrapEl.attr('data-swiper-zoom') || t.maxRatio),
              0 !== s.$imageWrapEl.length)
                ? (s.$imageEl && s.$imageEl.transition(0),
                  (this.zoom.isScaling = !0))
                : (s.$imageEl = void 0);
            },
            onGestureChange: function(e) {
              var t = this.params.zoom,
                i = this.zoom,
                s = i.gesture;
              if (!$.gestures) {
                if (
                  'touchmove' !== e.type ||
                  ('touchmove' === e.type && e.targetTouches.length < 2)
                )
                  return;
                (i.fakeGestureMoved = !0),
                  (s.scaleMove = Ee.getDistanceBetweenTouches(e));
              }
              s.$imageEl &&
                0 !== s.$imageEl.length &&
                ((i.scale = $.gestures
                  ? e.scale * i.currentScale
                  : (s.scaleMove / s.scaleStart) * i.currentScale),
                i.scale > s.maxRatio &&
                  (i.scale =
                    s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
                i.scale < t.minRatio &&
                  (i.scale =
                    t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
                s.$imageEl.transform(
                  'translate3d(0,0,0) scale('.concat(i.scale, ')')
                ));
            },
            onGestureEnd: function(e) {
              var t = this.params.zoom,
                i = this.zoom,
                s = i.gesture;
              if (!$.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if (
                  'touchend' !== e.type ||
                  ('touchend' === e.type &&
                    e.changedTouches.length < 2 &&
                    !W.android)
                )
                  return;
                (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
              }
              s.$imageEl &&
                0 !== s.$imageEl.length &&
                ((i.scale = Math.max(
                  Math.min(i.scale, s.maxRatio),
                  t.minRatio
                )),
                s.$imageEl
                  .transition(this.params.speed)
                  .transform('translate3d(0,0,0) scale('.concat(i.scale, ')')),
                (i.currentScale = i.scale),
                (i.isScaling = !1),
                1 === i.scale && (s.$slideEl = void 0));
            },
            onTouchStart: function(e) {
              var t = this.zoom,
                i = t.gesture,
                s = t.image;
              i.$imageEl &&
                0 !== i.$imageEl.length &&
                (s.isTouched ||
                  (W.android && e.cancelable && e.preventDefault(),
                  (s.isTouched = !0),
                  (s.touchesStart.x =
                    'touchstart' === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (s.touchesStart.y =
                    'touchstart' === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY)));
            },
            onTouchMove: function(e) {
              var t = this.zoom,
                i = t.gesture,
                s = t.image,
                a = t.velocity;
              if (
                i.$imageEl &&
                0 !== i.$imageEl.length &&
                ((this.allowClick = !1), s.isTouched && i.$slideEl)
              ) {
                s.isMoved ||
                  ((s.width = i.$imageEl[0].offsetWidth),
                  (s.height = i.$imageEl[0].offsetHeight),
                  (s.startX = G.getTranslate(i.$imageWrapEl[0], 'x') || 0),
                  (s.startY = G.getTranslate(i.$imageWrapEl[0], 'y') || 0),
                  (i.slideWidth = i.$slideEl[0].offsetWidth),
                  (i.slideHeight = i.$slideEl[0].offsetHeight),
                  i.$imageWrapEl.transition(0),
                  this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
                var n = s.width * t.scale,
                  r = s.height * t.scale;
                if (!(n < i.slideWidth && r < i.slideHeight)) {
                  if (
                    ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                    (s.maxX = -s.minX),
                    (s.minY = Math.min(i.slideHeight / 2 - r / 2, 0)),
                    (s.maxY = -s.minY),
                    (s.touchesCurrent.x =
                      'touchmove' === e.type
                        ? e.targetTouches[0].pageX
                        : e.pageX),
                    (s.touchesCurrent.y =
                      'touchmove' === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY),
                    !s.isMoved && !t.isScaling)
                  ) {
                    if (
                      this.isHorizontal() &&
                      ((Math.floor(s.minX) === Math.floor(s.startX) &&
                        s.touchesCurrent.x < s.touchesStart.x) ||
                        (Math.floor(s.maxX) === Math.floor(s.startX) &&
                          s.touchesCurrent.x > s.touchesStart.x))
                    )
                      return void (s.isTouched = !1);
                    if (
                      !this.isHorizontal() &&
                      ((Math.floor(s.minY) === Math.floor(s.startY) &&
                        s.touchesCurrent.y < s.touchesStart.y) ||
                        (Math.floor(s.maxY) === Math.floor(s.startY) &&
                          s.touchesCurrent.y > s.touchesStart.y))
                    )
                      return void (s.isTouched = !1);
                  }
                  e.cancelable && e.preventDefault(),
                    e.stopPropagation(),
                    (s.isMoved = !0),
                    (s.currentX =
                      s.touchesCurrent.x - s.touchesStart.x + s.startX),
                    (s.currentY =
                      s.touchesCurrent.y - s.touchesStart.y + s.startY),
                    s.currentX < s.minX &&
                      (s.currentX =
                        s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                    s.currentX > s.maxX &&
                      (s.currentX =
                        s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                    s.currentY < s.minY &&
                      (s.currentY =
                        s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                    s.currentY > s.maxY &&
                      (s.currentY =
                        s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                    a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                    a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                    a.prevTime || (a.prevTime = Date.now()),
                    (a.x =
                      (s.touchesCurrent.x - a.prevPositionX) /
                      (Date.now() - a.prevTime) /
                      2),
                    (a.y =
                      (s.touchesCurrent.y - a.prevPositionY) /
                      (Date.now() - a.prevTime) /
                      2),
                    Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 &&
                      (a.x = 0),
                    Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 &&
                      (a.y = 0),
                    (a.prevPositionX = s.touchesCurrent.x),
                    (a.prevPositionY = s.touchesCurrent.y),
                    (a.prevTime = Date.now()),
                    i.$imageWrapEl.transform(
                      'translate3d('
                        .concat(s.currentX, 'px, ')
                        .concat(s.currentY, 'px,0)')
                    );
                }
              }
            },
            onTouchEnd: function() {
              var e = this.zoom,
                t = e.gesture,
                i = e.image,
                s = e.velocity;
              if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved)
                  return (i.isTouched = !1), void (i.isMoved = !1);
                (i.isTouched = !1), (i.isMoved = !1);
                var a = 300,
                  n = 300,
                  r = i.currentX + s.x * a,
                  o = i.currentY + s.y * n;
                0 !== s.x && (a = Math.abs((r - i.currentX) / s.x)),
                  0 !== s.y && (n = Math.abs((o - i.currentY) / s.y));
                var l = Math.max(a, n);
                (i.currentX = r), (i.currentY = o);
                var d = i.height * e.scale;
                (i.minX = Math.min(
                  t.slideWidth / 2 - (i.width * e.scale) / 2,
                  0
                )),
                  (i.maxX = -i.minX),
                  (i.minY = Math.min(t.slideHeight / 2 - d / 2, 0)),
                  (i.maxY = -i.minY),
                  (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                  (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                  t.$imageWrapEl
                    .transition(l)
                    .transform(
                      'translate3d('
                        .concat(i.currentX, 'px, ')
                        .concat(i.currentY, 'px,0)')
                    );
              }
            },
            onTransitionEnd: function() {
              var e = this.zoom,
                t = e.gesture;
              t.$slideEl &&
                this.previousIndex !== this.activeIndex &&
                (t.$imageEl &&
                  t.$imageEl.transform('translate3d(0,0,0) scale(1)'),
                t.$imageWrapEl &&
                  t.$imageWrapEl.transform('translate3d(0,0,0)'),
                (e.scale = 1),
                (e.currentScale = 1),
                (t.$slideEl = void 0),
                (t.$imageEl = void 0),
                (t.$imageWrapEl = void 0));
            },
            toggle: function(e) {
              var t = this.zoom;
              t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in: function(e) {
              var t,
                i,
                s,
                a,
                n,
                r,
                o,
                l,
                d,
                h,
                p,
                c,
                u,
                f,
                v,
                g,
                m = this.zoom,
                w = this.params.zoom,
                b = m.gesture,
                S = m.image;
              (b.$slideEl ||
                ((b.$slideEl =
                  this.params.virtual &&
                  this.params.virtual.enabled &&
                  this.virtual
                    ? this.$wrapperEl.children(
                        '.' + this.params.slideActiveClass
                      )
                    : this.slides.eq(this.activeIndex)),
                (b.$imageEl = b.$slideEl.find(
                  'img, svg, canvas, picture, .swiper-zoom-target'
                )),
                (b.$imageWrapEl = b.$imageEl.parent('.' + w.containerClass))),
              b.$imageEl && 0 !== b.$imageEl.length) &&
                (b.$slideEl.addClass('' + w.zoomedSlideClass),
                void 0 === S.touchesStart.x && e
                  ? ((t =
                      'touchend' === e.type
                        ? e.changedTouches[0].pageX
                        : e.pageX),
                    (i =
                      'touchend' === e.type
                        ? e.changedTouches[0].pageY
                        : e.pageY))
                  : ((t = S.touchesStart.x), (i = S.touchesStart.y)),
                (m.scale =
                  b.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio),
                (m.currentScale =
                  b.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio),
                e
                  ? ((v = b.$slideEl[0].offsetWidth),
                    (g = b.$slideEl[0].offsetHeight),
                    (s = b.$slideEl.offset().left + v / 2 - t),
                    (a = b.$slideEl.offset().top + g / 2 - i),
                    (o = b.$imageEl[0].offsetWidth),
                    (l = b.$imageEl[0].offsetHeight),
                    (d = o * m.scale),
                    (h = l * m.scale),
                    (u = -(p = Math.min(v / 2 - d / 2, 0))),
                    (f = -(c = Math.min(g / 2 - h / 2, 0))),
                    (n = s * m.scale) < p && (n = p),
                    n > u && (n = u),
                    (r = a * m.scale) < c && (r = c),
                    r > f && (r = f))
                  : ((n = 0), (r = 0)),
                b.$imageWrapEl
                  .transition(300)
                  .transform(
                    'translate3d('.concat(n, 'px, ').concat(r, 'px,0)')
                  ),
                b.$imageEl
                  .transition(300)
                  .transform('translate3d(0,0,0) scale('.concat(m.scale, ')')));
            },
            out: function() {
              var e = this.zoom,
                t = this.params.zoom,
                i = e.gesture;
              i.$slideEl ||
                ((i.$slideEl =
                  this.params.virtual &&
                  this.params.virtual.enabled &&
                  this.virtual
                    ? this.$wrapperEl.children(
                        '.' + this.params.slideActiveClass
                      )
                    : this.slides.eq(this.activeIndex)),
                (i.$imageEl = i.$slideEl.find(
                  'img, svg, canvas, picture, .swiper-zoom-target'
                )),
                (i.$imageWrapEl = i.$imageEl.parent('.' + t.containerClass))),
                i.$imageEl &&
                  0 !== i.$imageEl.length &&
                  ((e.scale = 1),
                  (e.currentScale = 1),
                  i.$imageWrapEl
                    .transition(300)
                    .transform('translate3d(0,0,0)'),
                  i.$imageEl
                    .transition(300)
                    .transform('translate3d(0,0,0) scale(1)'),
                  i.$slideEl.removeClass('' + t.zoomedSlideClass),
                  (i.$slideEl = void 0));
            },
            enable: function() {
              var e = this.zoom;
              if (!e.enabled) {
                e.enabled = !0;
                var t = !(
                    'touchstart' !== this.touchEvents.start ||
                    !$.passiveListener ||
                    !this.params.passiveListeners
                  ) && { passive: !0, capture: !1 },
                  i = !$.passiveListener || { passive: !1, capture: !0 },
                  s = '.' + this.params.slideClass;
                $.gestures
                  ? (this.$wrapperEl.on('gesturestart', s, e.onGestureStart, t),
                    this.$wrapperEl.on(
                      'gesturechange',
                      s,
                      e.onGestureChange,
                      t
                    ),
                    this.$wrapperEl.on('gestureend', s, e.onGestureEnd, t))
                  : 'touchstart' === this.touchEvents.start &&
                    (this.$wrapperEl.on(
                      this.touchEvents.start,
                      s,
                      e.onGestureStart,
                      t
                    ),
                    this.$wrapperEl.on(
                      this.touchEvents.move,
                      s,
                      e.onGestureChange,
                      i
                    ),
                    this.$wrapperEl.on(
                      this.touchEvents.end,
                      s,
                      e.onGestureEnd,
                      t
                    ),
                    this.touchEvents.cancel &&
                      this.$wrapperEl.on(
                        this.touchEvents.cancel,
                        s,
                        e.onGestureEnd,
                        t
                      )),
                  this.$wrapperEl.on(
                    this.touchEvents.move,
                    '.' + this.params.zoom.containerClass,
                    e.onTouchMove,
                    i
                  );
              }
            },
            disable: function() {
              var e = this.zoom;
              if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !(
                    'touchstart' !== this.touchEvents.start ||
                    !$.passiveListener ||
                    !this.params.passiveListeners
                  ) && { passive: !0, capture: !1 },
                  i = !$.passiveListener || { passive: !1, capture: !0 },
                  s = '.' + this.params.slideClass;
                $.gestures
                  ? (this.$wrapperEl.off(
                      'gesturestart',
                      s,
                      e.onGestureStart,
                      t
                    ),
                    this.$wrapperEl.off(
                      'gesturechange',
                      s,
                      e.onGestureChange,
                      t
                    ),
                    this.$wrapperEl.off('gestureend', s, e.onGestureEnd, t))
                  : 'touchstart' === this.touchEvents.start &&
                    (this.$wrapperEl.off(
                      this.touchEvents.start,
                      s,
                      e.onGestureStart,
                      t
                    ),
                    this.$wrapperEl.off(
                      this.touchEvents.move,
                      s,
                      e.onGestureChange,
                      i
                    ),
                    this.$wrapperEl.off(
                      this.touchEvents.end,
                      s,
                      e.onGestureEnd,
                      t
                    ),
                    this.touchEvents.cancel &&
                      this.$wrapperEl.off(
                        this.touchEvents.cancel,
                        s,
                        e.onGestureEnd,
                        t
                      )),
                  this.$wrapperEl.off(
                    this.touchEvents.move,
                    '.' + this.params.zoom.containerClass,
                    e.onTouchMove,
                    i
                  );
              }
            }
          },
          ye = {
            loadInSlide: function(e) {
              var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                i = this,
                s = i.params.lazy;
              if (void 0 !== e && 0 !== i.slides.length) {
                var a =
                    i.virtual && i.params.virtual.enabled
                      ? i.$wrapperEl.children(
                          '.'
                            .concat(
                              i.params.slideClass,
                              '[data-swiper-slide-index="'
                            )
                            .concat(e, '"]')
                        )
                      : i.slides.eq(e),
                  n = a.find(
                    '.'
                      .concat(s.elementClass, ':not(.')
                      .concat(s.loadedClass, '):not(.')
                      .concat(s.loadingClass, ')')
                  );
                !a.hasClass(s.elementClass) ||
                  a.hasClass(s.loadedClass) ||
                  a.hasClass(s.loadingClass) ||
                  (n = n.add(a[0])),
                  0 !== n.length &&
                    n.each(function(e, n) {
                      var r = b(n);
                      r.addClass(s.loadingClass);
                      var o = r.attr('data-background'),
                        l = r.attr('data-src'),
                        d = r.attr('data-srcset'),
                        h = r.attr('data-sizes'),
                        p = r.parent('picture');
                      i.loadImage(r[0], l || o, d, h, !1, function() {
                        if (
                          null != i &&
                          i &&
                          (!i || i.params) &&
                          !i.destroyed
                        ) {
                          if (
                            (o
                              ? (r.css(
                                  'background-image',
                                  'url("'.concat(o, '")')
                                ),
                                r.removeAttr('data-background'))
                              : (d &&
                                  (r.attr('srcset', d),
                                  r.removeAttr('data-srcset')),
                                h &&
                                  (r.attr('sizes', h),
                                  r.removeAttr('data-sizes')),
                                p.length &&
                                  p.children('source').each(function(e, t) {
                                    var i = b(t);
                                    i.attr('data-srcset') &&
                                      (i.attr('srcset', i.attr('data-srcset')),
                                      i.removeAttr('data-srcset'));
                                  }),
                                l &&
                                  (r.attr('src', l), r.removeAttr('data-src'))),
                            r
                              .addClass(s.loadedClass)
                              .removeClass(s.loadingClass),
                            a.find('.' + s.preloaderClass).remove(),
                            i.params.loop && t)
                          ) {
                            var e = a.attr('data-swiper-slide-index');
                            if (a.hasClass(i.params.slideDuplicateClass)) {
                              var n = i.$wrapperEl.children(
                                '[data-swiper-slide-index="'
                                  .concat(e, '"]:not(.')
                                  .concat(i.params.slideDuplicateClass, ')')
                              );
                              i.lazy.loadInSlide(n.index(), !1);
                            } else {
                              var c = i.$wrapperEl.children(
                                '.'
                                  .concat(
                                    i.params.slideDuplicateClass,
                                    '[data-swiper-slide-index="'
                                  )
                                  .concat(e, '"]')
                              );
                              i.lazy.loadInSlide(c.index(), !1);
                            }
                          }
                          i.emit('lazyImageReady', a[0], r[0]),
                            i.params.autoHeight && i.updateAutoHeight();
                        }
                      }),
                        i.emit('lazyImageLoad', a[0], r[0]);
                    });
              }
            },
            load: function() {
              var e = this,
                t = e.$wrapperEl,
                i = e.params,
                s = e.slides,
                a = e.activeIndex,
                n = e.virtual && i.virtual.enabled,
                r = i.lazy,
                o = i.slidesPerView;
              function l(e) {
                if (n) {
                  if (
                    t.children(
                      '.'
                        .concat(i.slideClass, '[data-swiper-slide-index="')
                        .concat(e, '"]')
                    ).length
                  )
                    return !0;
                } else if (s[e]) return !0;
                return !1;
              }
              function d(e) {
                return n ? b(e).attr('data-swiper-slide-index') : b(e).index();
              }
              if (
                ('auto' === o && (o = 0),
                e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
                e.params.watchSlidesVisibility)
              )
                t.children('.' + i.slideVisibleClass).each(function(t, i) {
                  var s = n
                    ? b(i).attr('data-swiper-slide-index')
                    : b(i).index();
                  e.lazy.loadInSlide(s);
                });
              else if (o > 1)
                for (var h = a; h < a + o; h += 1)
                  l(h) && e.lazy.loadInSlide(h);
              else e.lazy.loadInSlide(a);
              if (r.loadPrevNext)
                if (
                  o > 1 ||
                  (r.loadPrevNextAmount && r.loadPrevNextAmount > 1)
                ) {
                  for (
                    var p = r.loadPrevNextAmount,
                      c = o,
                      u = Math.min(a + c + Math.max(p, c), s.length),
                      f = Math.max(a - Math.max(c, p), 0),
                      v = a + o;
                    v < u;
                    v += 1
                  )
                    l(v) && e.lazy.loadInSlide(v);
                  for (var g = f; g < a; g += 1) l(g) && e.lazy.loadInSlide(g);
                } else {
                  var m = t.children('.' + i.slideNextClass);
                  m.length > 0 && e.lazy.loadInSlide(d(m));
                  var w = t.children('.' + i.slidePrevClass);
                  w.length > 0 && e.lazy.loadInSlide(d(w));
                }
            }
          },
          Te = {
            LinearSpline: function(e, t) {
              var i,
                s,
                a,
                n,
                r,
                o = function(e, t) {
                  for (s = -1, i = e.length; i - s > 1; )
                    e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
                  return i;
                };
              return (
                (this.x = e),
                (this.y = t),
                (this.lastIndex = e.length - 1),
                (this.interpolate = function(e) {
                  return e
                    ? ((r = o(this.x, e)),
                      (n = r - 1),
                      ((e - this.x[n]) * (this.y[r] - this.y[n])) /
                        (this.x[r] - this.x[n]) +
                        this.y[n])
                    : 0;
                }),
                this
              );
            },
            getInterpolateFunction: function(e) {
              this.controller.spline ||
                (this.controller.spline = this.params.loop
                  ? new Te.LinearSpline(this.slidesGrid, e.slidesGrid)
                  : new Te.LinearSpline(this.snapGrid, e.snapGrid));
            },
            setTranslate: function(e, t) {
              var i,
                s,
                a = this,
                n = a.controller.control;
              function r(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                'slide' === a.params.controller.by &&
                  (a.controller.getInterpolateFunction(e),
                  (s = -a.controller.spline.interpolate(-t))),
                  (s && 'container' !== a.params.controller.by) ||
                    ((i =
                      (e.maxTranslate() - e.minTranslate()) /
                      (a.maxTranslate() - a.minTranslate())),
                    (s = (t - a.minTranslate()) * i + e.minTranslate())),
                  a.params.controller.inverse && (s = e.maxTranslate() - s),
                  e.updateProgress(s),
                  e.setTranslate(s, a),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
              if (Array.isArray(n))
                for (var o = 0; o < n.length; o += 1)
                  n[o] !== t && n[o] instanceof ae && r(n[o]);
              else n instanceof ae && t !== n && r(n);
            },
            setTransition: function(e, t) {
              var i,
                s = this,
                a = s.controller.control;
              function n(t) {
                t.setTransition(e, s),
                  0 !== e &&
                    (t.transitionStart(),
                    t.params.autoHeight &&
                      G.nextTick(function() {
                        t.updateAutoHeight();
                      }),
                    t.$wrapperEl.transitionEnd(function() {
                      a &&
                        (t.params.loop &&
                          'slide' === s.params.controller.by &&
                          t.loopFix(),
                        t.transitionEnd());
                    }));
              }
              if (Array.isArray(a))
                for (i = 0; i < a.length; i += 1)
                  a[i] !== t && a[i] instanceof ae && n(a[i]);
              else a instanceof ae && t !== a && n(a);
            }
          },
          xe = {
            makeElFocusable: function(e) {
              return e.attr('tabIndex', '0'), e;
            },
            makeElNotFocusable: function(e) {
              return e.attr('tabIndex', '-1'), e;
            },
            addElRole: function(e, t) {
              return e.attr('role', t), e;
            },
            addElLabel: function(e, t) {
              return e.attr('aria-label', t), e;
            },
            disableEl: function(e) {
              return e.attr('aria-disabled', !0), e;
            },
            enableEl: function(e) {
              return e.attr('aria-disabled', !1), e;
            },
            onEnterKey: function(e) {
              var t = this.params.a11y;
              if (13 === e.keyCode) {
                var i = b(e.target);
                this.navigation &&
                  this.navigation.$nextEl &&
                  i.is(this.navigation.$nextEl) &&
                  ((this.isEnd && !this.params.loop) || this.slideNext(),
                  this.a11y.notify(
                    this.isEnd ? t.lastSlideMessage : t.nextSlideMessage
                  )),
                  this.navigation &&
                    this.navigation.$prevEl &&
                    i.is(this.navigation.$prevEl) &&
                    ((this.isBeginning && !this.params.loop) ||
                      this.slidePrev(),
                    this.a11y.notify(
                      this.isBeginning
                        ? t.firstSlideMessage
                        : t.prevSlideMessage
                    )),
                  this.pagination &&
                    i.is('.' + this.params.pagination.bulletClass) &&
                    i[0].click();
              }
            },
            notify: function(e) {
              var t = this.a11y.liveRegion;
              0 !== t.length && (t.html(''), t.html(e));
            },
            updateNavigation: function() {
              if (!this.params.loop && this.navigation) {
                var e = this.navigation,
                  t = e.$nextEl,
                  i = e.$prevEl;
                i &&
                  i.length > 0 &&
                  (this.isBeginning
                    ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i))
                    : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))),
                  t &&
                    t.length > 0 &&
                    (this.isEnd
                      ? (this.a11y.disableEl(t),
                        this.a11y.makeElNotFocusable(t))
                      : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
              }
            },
            updatePagination: function() {
              var e = this,
                t = e.params.a11y;
              e.pagination &&
                e.params.pagination.clickable &&
                e.pagination.bullets &&
                e.pagination.bullets.length &&
                e.pagination.bullets.each(function(i, s) {
                  var a = b(s);
                  e.a11y.makeElFocusable(a),
                    e.a11y.addElRole(a, 'button'),
                    e.a11y.addElLabel(
                      a,
                      t.paginationBulletMessage.replace(
                        /\{\{index\}\}/,
                        a.index() + 1
                      )
                    );
                });
            },
            init: function() {
              this.$el.append(this.a11y.liveRegion);
              var e,
                t,
                i = this.params.a11y;
              this.navigation &&
                this.navigation.$nextEl &&
                (e = this.navigation.$nextEl),
                this.navigation &&
                  this.navigation.$prevEl &&
                  (t = this.navigation.$prevEl),
                e &&
                  (this.a11y.makeElFocusable(e),
                  this.a11y.addElRole(e, 'button'),
                  this.a11y.addElLabel(e, i.nextSlideMessage),
                  e.on('keydown', this.a11y.onEnterKey)),
                t &&
                  (this.a11y.makeElFocusable(t),
                  this.a11y.addElRole(t, 'button'),
                  this.a11y.addElLabel(t, i.prevSlideMessage),
                  t.on('keydown', this.a11y.onEnterKey)),
                this.pagination &&
                  this.params.pagination.clickable &&
                  this.pagination.bullets &&
                  this.pagination.bullets.length &&
                  this.pagination.$el.on(
                    'keydown',
                    '.' + this.params.pagination.bulletClass,
                    this.a11y.onEnterKey
                  );
            },
            destroy: function() {
              var e, t;
              this.a11y.liveRegion &&
                this.a11y.liveRegion.length > 0 &&
                this.a11y.liveRegion.remove(),
                this.navigation &&
                  this.navigation.$nextEl &&
                  (e = this.navigation.$nextEl),
                this.navigation &&
                  this.navigation.$prevEl &&
                  (t = this.navigation.$prevEl),
                e && e.off('keydown', this.a11y.onEnterKey),
                t && t.off('keydown', this.a11y.onEnterKey),
                this.pagination &&
                  this.params.pagination.clickable &&
                  this.pagination.bullets &&
                  this.pagination.bullets.length &&
                  this.pagination.$el.off(
                    'keydown',
                    '.' + this.params.pagination.bulletClass,
                    this.a11y.onEnterKey
                  );
            }
          },
          Ae = {
            init: function() {
              if (this.params.history) {
                if (!m.history || !m.history.pushState)
                  return (
                    (this.params.history.enabled = !1),
                    void (this.params.hashNavigation.enabled = !0)
                  );
                var e = this.history;
                (e.initialized = !0),
                  (e.paths = Ae.getPathValues()),
                  (e.paths.key || e.paths.value) &&
                    (e.scrollToSlide(
                      0,
                      e.paths.value,
                      this.params.runCallbacksOnInit
                    ),
                    this.params.history.replaceState ||
                      m.addEventListener(
                        'popstate',
                        this.history.setHistoryPopState
                      ));
              }
            },
            destroy: function() {
              this.params.history.replaceState ||
                m.removeEventListener(
                  'popstate',
                  this.history.setHistoryPopState
                );
            },
            setHistoryPopState: function() {
              (this.history.paths = Ae.getPathValues()),
                this.history.scrollToSlide(
                  this.params.speed,
                  this.history.paths.value,
                  !1
                );
            },
            getPathValues: function() {
              var e = m.location.pathname
                  .slice(1)
                  .split('/')
                  .filter(function(e) {
                    return '' !== e;
                  }),
                t = e.length;
              return { key: e[t - 2], value: e[t - 1] };
            },
            setHistory: function(e, t) {
              if (this.history.initialized && this.params.history.enabled) {
                var i = this.slides.eq(t),
                  s = Ae.slugify(i.attr('data-history'));
                m.location.pathname.includes(e) ||
                  (s = ''.concat(e, '/').concat(s));
                var a = m.history.state;
                (a && a.value === s) ||
                  (this.params.history.replaceState
                    ? m.history.replaceState({ value: s }, null, s)
                    : m.history.pushState({ value: s }, null, s));
              }
            },
            slugify: function(e) {
              return e
                .toString()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '')
                .replace(/--+/g, '-')
                .replace(/^-+/, '')
                .replace(/-+$/, '');
            },
            scrollToSlide: function(e, t, i) {
              if (t)
                for (var s = 0, a = this.slides.length; s < a; s += 1) {
                  var n = this.slides.eq(s);
                  if (
                    Ae.slugify(n.attr('data-history')) === t &&
                    !n.hasClass(this.params.slideDuplicateClass)
                  ) {
                    var r = n.index();
                    this.slideTo(r, e, i);
                  }
                }
              else this.slideTo(0, e, i);
            }
          },
          Ce = {
            onHashCange: function() {
              this.emit('hashChange');
              var e = v.location.hash.replace('#', '');
              if (e !== this.slides.eq(this.activeIndex).attr('data-hash')) {
                var t = this.$wrapperEl
                  .children(
                    '.'
                      .concat(this.params.slideClass, '[data-hash="')
                      .concat(e, '"]')
                  )
                  .index();
                if (void 0 === t) return;
                this.slideTo(t);
              }
            },
            setHash: function() {
              if (
                this.hashNavigation.initialized &&
                this.params.hashNavigation.enabled
              )
                if (
                  this.params.hashNavigation.replaceState &&
                  m.history &&
                  m.history.replaceState
                )
                  m.history.replaceState(
                    null,
                    null,
                    '#' + this.slides.eq(this.activeIndex).attr('data-hash') ||
                      ''
                  ),
                    this.emit('hashSet');
                else {
                  var e = this.slides.eq(this.activeIndex),
                    t = e.attr('data-hash') || e.attr('data-history');
                  (v.location.hash = t || ''), this.emit('hashSet');
                }
            },
            init: function() {
              if (
                !(
                  !this.params.hashNavigation.enabled ||
                  (this.params.history && this.params.history.enabled)
                )
              ) {
                this.hashNavigation.initialized = !0;
                var e = v.location.hash.replace('#', '');
                if (e)
                  for (var t = 0, i = this.slides.length; t < i; t += 1) {
                    var s = this.slides.eq(t);
                    if (
                      (s.attr('data-hash') || s.attr('data-history')) === e &&
                      !s.hasClass(this.params.slideDuplicateClass)
                    ) {
                      var a = s.index();
                      this.slideTo(a, 0, this.params.runCallbacksOnInit, !0);
                    }
                  }
                this.params.hashNavigation.watchState &&
                  b(m).on('hashchange', this.hashNavigation.onHashCange);
              }
            },
            destroy: function() {
              this.params.hashNavigation.watchState &&
                b(m).off('hashchange', this.hashNavigation.onHashCange);
            }
          },
          Ie = {
            run: function() {
              var e = this,
                t = e.slides.eq(e.activeIndex),
                i = e.params.autoplay.delay;
              t.attr('data-swiper-autoplay') &&
                (i = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
                clearTimeout(e.autoplay.timeout),
                (e.autoplay.timeout = G.nextTick(function() {
                  e.params.autoplay.reverseDirection
                    ? e.params.loop
                      ? (e.loopFix(),
                        e.slidePrev(e.params.speed, !0, !0),
                        e.emit('autoplay'))
                      : e.isBeginning
                      ? e.params.autoplay.stopOnLastSlide
                        ? e.autoplay.stop()
                        : (e.slideTo(
                            e.slides.length - 1,
                            e.params.speed,
                            !0,
                            !0
                          ),
                          e.emit('autoplay'))
                      : (e.slidePrev(e.params.speed, !0, !0),
                        e.emit('autoplay'))
                    : e.params.loop
                    ? (e.loopFix(),
                      e.slideNext(e.params.speed, !0, !0),
                      e.emit('autoplay'))
                    : e.isEnd
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(0, e.params.speed, !0, !0),
                        e.emit('autoplay'))
                    : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay')),
                    e.params.cssMode && e.autoplay.running && e.autoplay.run();
                }, i));
            },
            start: function() {
              return (
                void 0 === this.autoplay.timeout &&
                !this.autoplay.running &&
                ((this.autoplay.running = !0),
                this.emit('autoplayStart'),
                this.autoplay.run(),
                !0)
              );
            },
            stop: function() {
              return (
                !!this.autoplay.running &&
                void 0 !== this.autoplay.timeout &&
                (this.autoplay.timeout &&
                  (clearTimeout(this.autoplay.timeout),
                  (this.autoplay.timeout = void 0)),
                (this.autoplay.running = !1),
                this.emit('autoplayStop'),
                !0)
              );
            },
            pause: function(e) {
              this.autoplay.running &&
                (this.autoplay.paused ||
                  (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
                  (this.autoplay.paused = !0),
                  0 !== e && this.params.autoplay.waitForTransition
                    ? (this.$wrapperEl[0].addEventListener(
                        'transitionend',
                        this.autoplay.onTransitionEnd
                      ),
                      this.$wrapperEl[0].addEventListener(
                        'webkitTransitionEnd',
                        this.autoplay.onTransitionEnd
                      ))
                    : ((this.autoplay.paused = !1), this.autoplay.run())));
            }
          },
          Me = {
            setTranslate: function() {
              for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t),
                  s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || ((a = s), (s = 0));
                var n = this.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(i[0].progress), 0)
                  : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({ opacity: n }).transform(
                  'translate3d('.concat(s, 'px, ').concat(a, 'px, 0px)')
                );
              }
            },
            setTransition: function(e) {
              var t = this,
                i = t.slides,
                s = t.$wrapperEl;
              if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
                var a = !1;
                i.transitionEnd(function() {
                  if (!a && t && !t.destroyed) {
                    (a = !0), (t.animating = !1);
                    for (
                      var e = ['webkitTransitionEnd', 'transitionend'], i = 0;
                      i < e.length;
                      i += 1
                    )
                      s.trigger(e[i]);
                  }
                });
              }
            }
          },
          ke = {
            setTranslate: function() {
              var e,
                t = this.$el,
                i = this.$wrapperEl,
                s = this.slides,
                a = this.width,
                n = this.height,
                r = this.rtlTranslate,
                o = this.size,
                l = this.params.cubeEffect,
                d = this.isHorizontal(),
                h = this.virtual && this.params.virtual.enabled,
                p = 0;
              l.shadow &&
                (d
                  ? (0 === (e = i.find('.swiper-cube-shadow')).length &&
                      ((e = b('<div class="swiper-cube-shadow"></div>')),
                      i.append(e)),
                    e.css({ height: a + 'px' }))
                  : 0 === (e = t.find('.swiper-cube-shadow')).length &&
                    ((e = b('<div class="swiper-cube-shadow"></div>')),
                    t.append(e)));
              for (var c = 0; c < s.length; c += 1) {
                var u = s.eq(c),
                  f = c;
                h && (f = parseInt(u.attr('data-swiper-slide-index'), 10));
                var v = 90 * f,
                  g = Math.floor(v / 360);
                r && ((v = -v), (g = Math.floor(-v / 360)));
                var m = Math.max(Math.min(u[0].progress, 1), -1),
                  w = 0,
                  S = 0,
                  E = 0;
                f % 4 == 0
                  ? ((w = 4 * -g * o), (E = 0))
                  : (f - 1) % 4 == 0
                  ? ((w = 0), (E = 4 * -g * o))
                  : (f - 2) % 4 == 0
                  ? ((w = o + 4 * g * o), (E = o))
                  : (f - 3) % 4 == 0 && ((w = -o), (E = 3 * o + 4 * o * g)),
                  r && (w = -w),
                  d || ((S = w), (w = 0));
                var y = 'rotateX('
                  .concat(d ? 0 : -v, 'deg) rotateY(')
                  .concat(d ? v : 0, 'deg) translate3d(')
                  .concat(w, 'px, ')
                  .concat(S, 'px, ')
                  .concat(E, 'px)');
                if (
                  (m <= 1 &&
                    m > -1 &&
                    ((p = 90 * f + 90 * m), r && (p = 90 * -f - 90 * m)),
                  u.transform(y),
                  l.slideShadows)
                ) {
                  var T = u.find(
                      d
                        ? '.swiper-slide-shadow-left'
                        : '.swiper-slide-shadow-top'
                    ),
                    x = u.find(
                      d
                        ? '.swiper-slide-shadow-right'
                        : '.swiper-slide-shadow-bottom'
                    );
                  0 === T.length &&
                    ((T = b(
                      '<div class="swiper-slide-shadow-'.concat(
                        d ? 'left' : 'top',
                        '"></div>'
                      )
                    )),
                    u.append(T)),
                    0 === x.length &&
                      ((x = b(
                        '<div class="swiper-slide-shadow-'.concat(
                          d ? 'right' : 'bottom',
                          '"></div>'
                        )
                      )),
                      u.append(x)),
                    T.length && (T[0].style.opacity = Math.max(-m, 0)),
                    x.length && (x[0].style.opacity = Math.max(m, 0));
                }
              }
              if (
                (i.css({
                  '-webkit-transform-origin': '50% 50% -'.concat(o / 2, 'px'),
                  '-moz-transform-origin': '50% 50% -'.concat(o / 2, 'px'),
                  '-ms-transform-origin': '50% 50% -'.concat(o / 2, 'px'),
                  'transform-origin': '50% 50% -'.concat(o / 2, 'px')
                }),
                l.shadow)
              )
                if (d)
                  e.transform(
                    'translate3d(0px, '
                      .concat(a / 2 + l.shadowOffset, 'px, ')
                      .concat(-a / 2, 'px) rotateX(90deg) rotateZ(0deg) scale(')
                      .concat(l.shadowScale, ')')
                  );
                else {
                  var A = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                    C =
                      1.5 -
                      (Math.sin((2 * A * Math.PI) / 360) / 2 +
                        Math.cos((2 * A * Math.PI) / 360) / 2),
                    I = l.shadowScale / C;
                  e.transform(
                    'scale3d('
                      .concat(l.shadowScale, ', 1, ')
                      .concat(I, ') translate3d(0px, ')
                      .concat(n / 2 + l.shadowOffset, 'px, ')
                      .concat(-n / 2 / I, 'px) rotateX(-90deg)')
                  );
                }
              i.transform(
                'translate3d(0px,0,'
                  .concat(
                    oe.isSafari || oe.isWebView ? -o / 2 : 0,
                    'px) rotateX('
                  )
                  .concat(this.isHorizontal() ? 0 : p, 'deg) rotateY(')
                  .concat(this.isHorizontal() ? -p : 0, 'deg)')
              );
            },
            setTransition: function(e) {
              var t = this.$el;
              this.slides
                .transition(e)
                .find(
                  '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                )
                .transition(e),
                this.params.cubeEffect.shadow &&
                  !this.isHorizontal() &&
                  t.find('.swiper-cube-shadow').transition(e);
            }
          },
          Oe = {
            setTranslate: function() {
              for (
                var e = this.slides, t = this.rtlTranslate, i = 0;
                i < e.length;
                i += 1
              ) {
                var s = e.eq(i),
                  a = s[0].progress;
                this.params.flipEffect.limitRotation &&
                  (a = Math.max(Math.min(s[0].progress, 1), -1));
                var n = -180 * a,
                  r = 0,
                  o = -s[0].swiperSlideOffset,
                  l = 0;
                if (
                  (this.isHorizontal()
                    ? t && (n = -n)
                    : ((l = o), (o = 0), (r = -n), (n = 0)),
                  (s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length),
                  this.params.flipEffect.slideShadows)
                ) {
                  var d = this.isHorizontal()
                      ? s.find('.swiper-slide-shadow-left')
                      : s.find('.swiper-slide-shadow-top'),
                    h = this.isHorizontal()
                      ? s.find('.swiper-slide-shadow-right')
                      : s.find('.swiper-slide-shadow-bottom');
                  0 === d.length &&
                    ((d = b(
                      '<div class="swiper-slide-shadow-'.concat(
                        this.isHorizontal() ? 'left' : 'top',
                        '"></div>'
                      )
                    )),
                    s.append(d)),
                    0 === h.length &&
                      ((h = b(
                        '<div class="swiper-slide-shadow-'.concat(
                          this.isHorizontal() ? 'right' : 'bottom',
                          '"></div>'
                        )
                      )),
                      s.append(h)),
                    d.length && (d[0].style.opacity = Math.max(-a, 0)),
                    h.length && (h[0].style.opacity = Math.max(a, 0));
                }
                s.transform(
                  'translate3d('
                    .concat(o, 'px, ')
                    .concat(l, 'px, 0px) rotateX(')
                    .concat(r, 'deg) rotateY(')
                    .concat(n, 'deg)')
                );
              }
            },
            setTransition: function(e) {
              var t = this,
                i = t.slides,
                s = t.activeIndex,
                a = t.$wrapperEl;
              if (
                (i
                  .transition(e)
                  .find(
                    '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                  )
                  .transition(e),
                t.params.virtualTranslate && 0 !== e)
              ) {
                var n = !1;
                i.eq(s).transitionEnd(function() {
                  if (!n && t && !t.destroyed) {
                    (n = !0), (t.animating = !1);
                    for (
                      var e = ['webkitTransitionEnd', 'transitionend'], i = 0;
                      i < e.length;
                      i += 1
                    )
                      a.trigger(e[i]);
                  }
                });
              }
            }
          },
          Pe = {
            setTranslate: function() {
              for (
                var e = this.width,
                  t = this.height,
                  i = this.slides,
                  s = this.$wrapperEl,
                  a = this.slidesSizesGrid,
                  n = this.params.coverflowEffect,
                  r = this.isHorizontal(),
                  o = this.translate,
                  l = r ? e / 2 - o : t / 2 - o,
                  d = r ? n.rotate : -n.rotate,
                  h = n.depth,
                  p = 0,
                  c = i.length;
                p < c;
                p += 1
              ) {
                var u = i.eq(p),
                  f = a[p],
                  v = ((l - u[0].swiperSlideOffset - f / 2) / f) * n.modifier,
                  g = r ? d * v : 0,
                  m = r ? 0 : d * v,
                  w = -h * Math.abs(v),
                  S = n.stretch;
                'string' == typeof S &&
                  -1 !== S.indexOf('%') &&
                  (S = (parseFloat(n.stretch) / 100) * f);
                var E = r ? 0 : S * v,
                  y = r ? S * v : 0,
                  T = 1 - (1 - n.scale) * Math.abs(v);
                if (
                  (Math.abs(y) < 0.001 && (y = 0),
                  Math.abs(E) < 0.001 && (E = 0),
                  Math.abs(w) < 0.001 && (w = 0),
                  Math.abs(g) < 0.001 && (g = 0),
                  Math.abs(m) < 0.001 && (m = 0),
                  Math.abs(T) < 0.001 && (T = 0),
                  u.transform(
                    'translate3d('
                      .concat(y, 'px,')
                      .concat(E, 'px,')
                      .concat(w, 'px)  rotateX(')
                      .concat(m, 'deg) rotateY(')
                      .concat(g, 'deg) scale(')
                      .concat(T, ')')
                  ),
                  (u[0].style.zIndex = 1 - Math.abs(Math.round(v))),
                  n.slideShadows)
                ) {
                  var x = u.find(
                      r
                        ? '.swiper-slide-shadow-left'
                        : '.swiper-slide-shadow-top'
                    ),
                    A = u.find(
                      r
                        ? '.swiper-slide-shadow-right'
                        : '.swiper-slide-shadow-bottom'
                    );
                  0 === x.length &&
                    ((x = b(
                      '<div class="swiper-slide-shadow-'.concat(
                        r ? 'left' : 'top',
                        '"></div>'
                      )
                    )),
                    u.append(x)),
                    0 === A.length &&
                      ((A = b(
                        '<div class="swiper-slide-shadow-'.concat(
                          r ? 'right' : 'bottom',
                          '"></div>'
                        )
                      )),
                      u.append(A)),
                    x.length && (x[0].style.opacity = v > 0 ? v : 0),
                    A.length && (A[0].style.opacity = -v > 0 ? -v : 0);
                }
              }
              ($.pointerEvents || $.prefixedPointerEvents) &&
                (s[0].style.perspectiveOrigin = l + 'px 50%');
            },
            setTransition: function(e) {
              this.slides
                .transition(e)
                .find(
                  '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                )
                .transition(e);
            }
          },
          ze = {
            init: function() {
              var e = this.params.thumbs,
                t = this.constructor;
              e.swiper instanceof t
                ? ((this.thumbs.swiper = e.swiper),
                  G.extend(this.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                  }),
                  G.extend(this.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                  }))
                : G.isObject(e.swiper) &&
                  ((this.thumbs.swiper = new t(
                    G.extend({}, e.swiper, {
                      watchSlidesVisibility: !0,
                      watchSlidesProgress: !0,
                      slideToClickedSlide: !1
                    })
                  )),
                  (this.thumbs.swiperCreated = !0)),
                this.thumbs.swiper.$el.addClass(
                  this.params.thumbs.thumbsContainerClass
                ),
                this.thumbs.swiper.on('tap', this.thumbs.onThumbClick);
            },
            onThumbClick: function() {
              var e = this.thumbs.swiper;
              if (e) {
                var t = e.clickedIndex,
                  i = e.clickedSlide;
                if (
                  !(
                    (i &&
                      b(i).hasClass(
                        this.params.thumbs.slideThumbActiveClass
                      )) ||
                    null == t
                  )
                ) {
                  var s;
                  if (
                    ((s = e.params.loop
                      ? parseInt(
                          b(e.clickedSlide).attr('data-swiper-slide-index'),
                          10
                        )
                      : t),
                    this.params.loop)
                  ) {
                    var a = this.activeIndex;
                    this.slides
                      .eq(a)
                      .hasClass(this.params.slideDuplicateClass) &&
                      (this.loopFix(),
                      (this._clientLeft = this.$wrapperEl[0].clientLeft),
                      (a = this.activeIndex));
                    var n = this.slides
                        .eq(a)
                        .prevAll('[data-swiper-slide-index="'.concat(s, '"]'))
                        .eq(0)
                        .index(),
                      r = this.slides
                        .eq(a)
                        .nextAll('[data-swiper-slide-index="'.concat(s, '"]'))
                        .eq(0)
                        .index();
                    s =
                      void 0 === n
                        ? r
                        : void 0 === r
                        ? n
                        : r - a < a - n
                        ? r
                        : n;
                  }
                  this.slideTo(s);
                }
              }
            },
            update: function(e) {
              var t = this.thumbs.swiper;
              if (t) {
                var i =
                    'auto' === t.params.slidesPerView
                      ? t.slidesPerViewDynamic()
                      : t.params.slidesPerView,
                  s = this.params.thumbs.autoScrollOffset,
                  a = s && !t.params.loop;
                if (this.realIndex !== t.realIndex || a) {
                  var n,
                    r,
                    o = t.activeIndex;
                  if (t.params.loop) {
                    t.slides.eq(o).hasClass(t.params.slideDuplicateClass) &&
                      (t.loopFix(),
                      (t._clientLeft = t.$wrapperEl[0].clientLeft),
                      (o = t.activeIndex));
                    var l = t.slides
                        .eq(o)
                        .prevAll(
                          '[data-swiper-slide-index="'.concat(
                            this.realIndex,
                            '"]'
                          )
                        )
                        .eq(0)
                        .index(),
                      d = t.slides
                        .eq(o)
                        .nextAll(
                          '[data-swiper-slide-index="'.concat(
                            this.realIndex,
                            '"]'
                          )
                        )
                        .eq(0)
                        .index();
                    (n =
                      void 0 === l
                        ? d
                        : void 0 === d
                        ? l
                        : d - o == o - l
                        ? o
                        : d - o < o - l
                        ? d
                        : l),
                      (r =
                        this.activeIndex > this.previousIndex
                          ? 'next'
                          : 'prev');
                  } else
                    r =
                      (n = this.realIndex) > this.previousIndex
                        ? 'next'
                        : 'prev';
                  a && (n += 'next' === r ? s : -1 * s),
                    t.visibleSlidesIndexes &&
                      t.visibleSlidesIndexes.indexOf(n) < 0 &&
                      (t.params.centeredSlides
                        ? (n =
                            n > o
                              ? n - Math.floor(i / 2) + 1
                              : n + Math.floor(i / 2) - 1)
                        : n > o && (n = n - i + 1),
                      t.slideTo(n, e ? 0 : void 0));
                }
                var h = 1,
                  p = this.params.thumbs.slideThumbActiveClass;
                if (
                  (this.params.slidesPerView > 1 &&
                    !this.params.centeredSlides &&
                    (h = this.params.slidesPerView),
                  this.params.thumbs.multipleActiveThumbs || (h = 1),
                  (h = Math.floor(h)),
                  t.slides.removeClass(p),
                  t.params.loop ||
                    (t.params.virtual && t.params.virtual.enabled))
                )
                  for (var c = 0; c < h; c += 1)
                    t.$wrapperEl
                      .children(
                        '[data-swiper-slide-index="'.concat(
                          this.realIndex + c,
                          '"]'
                        )
                      )
                      .addClass(p);
                else
                  for (var u = 0; u < h; u += 1)
                    t.slides.eq(this.realIndex + u).addClass(p);
              }
            }
          },
          Le = [
            ne,
            re,
            le,
            de,
            pe,
            ue,
            ve,
            {
              name: 'mousewheel',
              params: {
                mousewheel: {
                  enabled: !1,
                  releaseOnEdges: !1,
                  invert: !1,
                  forceToAxis: !1,
                  sensitivity: 1,
                  eventsTarged: 'container'
                }
              },
              create: function() {
                G.extend(this, {
                  mousewheel: {
                    enabled: !1,
                    enable: ge.enable.bind(this),
                    disable: ge.disable.bind(this),
                    handle: ge.handle.bind(this),
                    handleMouseEnter: ge.handleMouseEnter.bind(this),
                    handleMouseLeave: ge.handleMouseLeave.bind(this),
                    animateSlider: ge.animateSlider.bind(this),
                    releaseScroll: ge.releaseScroll.bind(this),
                    lastScrollTime: G.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: []
                  }
                });
              },
              on: {
                init: function() {
                  !this.params.mousewheel.enabled &&
                    this.params.cssMode &&
                    this.mousewheel.disable(),
                    this.params.mousewheel.enabled && this.mousewheel.enable();
                },
                destroy: function() {
                  this.params.cssMode && this.mousewheel.enable(),
                    this.mousewheel.enabled && this.mousewheel.disable();
                }
              }
            },
            {
              name: 'navigation',
              params: {
                navigation: {
                  nextEl: null,
                  prevEl: null,
                  hideOnClick: !1,
                  disabledClass: 'swiper-button-disabled',
                  hiddenClass: 'swiper-button-hidden',
                  lockClass: 'swiper-button-lock'
                }
              },
              create: function() {
                G.extend(this, {
                  navigation: {
                    init: me.init.bind(this),
                    update: me.update.bind(this),
                    destroy: me.destroy.bind(this),
                    onNextClick: me.onNextClick.bind(this),
                    onPrevClick: me.onPrevClick.bind(this)
                  }
                });
              },
              on: {
                init: function() {
                  this.navigation.init(), this.navigation.update();
                },
                toEdge: function() {
                  this.navigation.update();
                },
                fromEdge: function() {
                  this.navigation.update();
                },
                destroy: function() {
                  this.navigation.destroy();
                },
                click: function(e) {
                  var t,
                    i = this.navigation,
                    s = i.$nextEl,
                    a = i.$prevEl;
                  !this.params.navigation.hideOnClick ||
                    b(e.target).is(a) ||
                    b(e.target).is(s) ||
                    (s
                      ? (t = s.hasClass(this.params.navigation.hiddenClass))
                      : a &&
                        (t = a.hasClass(this.params.navigation.hiddenClass)),
                    this.emit(
                      !0 === t ? 'navigationShow' : 'navigationHide',
                      this
                    ),
                    s && s.toggleClass(this.params.navigation.hiddenClass),
                    a && a.toggleClass(this.params.navigation.hiddenClass));
                }
              }
            },
            {
              name: 'pagination',
              params: {
                pagination: {
                  el: null,
                  bulletElement: 'span',
                  clickable: !1,
                  hideOnClick: !1,
                  renderBullet: null,
                  renderProgressbar: null,
                  renderFraction: null,
                  renderCustom: null,
                  progressbarOpposite: !1,
                  type: 'bullets',
                  dynamicBullets: !1,
                  dynamicMainBullets: 1,
                  formatFractionCurrent: function(e) {
                    return e;
                  },
                  formatFractionTotal: function(e) {
                    return e;
                  },
                  bulletClass: 'swiper-pagination-bullet',
                  bulletActiveClass: 'swiper-pagination-bullet-active',
                  modifierClass: 'swiper-pagination-',
                  currentClass: 'swiper-pagination-current',
                  totalClass: 'swiper-pagination-total',
                  hiddenClass: 'swiper-pagination-hidden',
                  progressbarFillClass: 'swiper-pagination-progressbar-fill',
                  progressbarOppositeClass:
                    'swiper-pagination-progressbar-opposite',
                  clickableClass: 'swiper-pagination-clickable',
                  lockClass: 'swiper-pagination-lock'
                }
              },
              create: function() {
                G.extend(this, {
                  pagination: {
                    init: we.init.bind(this),
                    render: we.render.bind(this),
                    update: we.update.bind(this),
                    destroy: we.destroy.bind(this),
                    dynamicBulletIndex: 0
                  }
                });
              },
              on: {
                init: function() {
                  this.pagination.init(),
                    this.pagination.render(),
                    this.pagination.update();
                },
                activeIndexChange: function() {
                  (this.params.loop || void 0 === this.snapIndex) &&
                    this.pagination.update();
                },
                snapIndexChange: function() {
                  this.params.loop || this.pagination.update();
                },
                slidesLengthChange: function() {
                  this.params.loop &&
                    (this.pagination.render(), this.pagination.update());
                },
                snapGridLengthChange: function() {
                  this.params.loop ||
                    (this.pagination.render(), this.pagination.update());
                },
                destroy: function() {
                  this.pagination.destroy();
                },
                click: function(e) {
                  if (
                    this.params.pagination.el &&
                    this.params.pagination.hideOnClick &&
                    this.pagination.$el.length > 0 &&
                    !b(e.target).hasClass(this.params.pagination.bulletClass)
                  ) {
                    var t = this.pagination.$el.hasClass(
                      this.params.pagination.hiddenClass
                    );
                    this.emit(
                      !0 === t ? 'paginationShow' : 'paginationHide',
                      this
                    ),
                      this.pagination.$el.toggleClass(
                        this.params.pagination.hiddenClass
                      );
                  }
                }
              }
            },
            {
              name: 'scrollbar',
              params: {
                scrollbar: {
                  el: null,
                  dragSize: 'auto',
                  hide: !1,
                  draggable: !1,
                  snapOnRelease: !0,
                  lockClass: 'swiper-scrollbar-lock',
                  dragClass: 'swiper-scrollbar-drag'
                }
              },
              create: function() {
                G.extend(this, {
                  scrollbar: {
                    init: be.init.bind(this),
                    destroy: be.destroy.bind(this),
                    updateSize: be.updateSize.bind(this),
                    setTranslate: be.setTranslate.bind(this),
                    setTransition: be.setTransition.bind(this),
                    enableDraggable: be.enableDraggable.bind(this),
                    disableDraggable: be.disableDraggable.bind(this),
                    setDragPosition: be.setDragPosition.bind(this),
                    getPointerPosition: be.getPointerPosition.bind(this),
                    onDragStart: be.onDragStart.bind(this),
                    onDragMove: be.onDragMove.bind(this),
                    onDragEnd: be.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                  }
                });
              },
              on: {
                init: function() {
                  this.scrollbar.init(),
                    this.scrollbar.updateSize(),
                    this.scrollbar.setTranslate();
                },
                update: function() {
                  this.scrollbar.updateSize();
                },
                resize: function() {
                  this.scrollbar.updateSize();
                },
                observerUpdate: function() {
                  this.scrollbar.updateSize();
                },
                setTranslate: function() {
                  this.scrollbar.setTranslate();
                },
                setTransition: function(e) {
                  this.scrollbar.setTransition(e);
                },
                destroy: function() {
                  this.scrollbar.destroy();
                }
              }
            },
            {
              name: 'parallax',
              params: { parallax: { enabled: !1 } },
              create: function() {
                G.extend(this, {
                  parallax: {
                    setTransform: Se.setTransform.bind(this),
                    setTranslate: Se.setTranslate.bind(this),
                    setTransition: Se.setTransition.bind(this)
                  }
                });
              },
              on: {
                beforeInit: function() {
                  this.params.parallax.enabled &&
                    ((this.params.watchSlidesProgress = !0),
                    (this.originalParams.watchSlidesProgress = !0));
                },
                init: function() {
                  this.params.parallax.enabled && this.parallax.setTranslate();
                },
                setTranslate: function() {
                  this.params.parallax.enabled && this.parallax.setTranslate();
                },
                setTransition: function(e) {
                  this.params.parallax.enabled &&
                    this.parallax.setTransition(e);
                }
              }
            },
            {
              name: 'zoom',
              params: {
                zoom: {
                  enabled: !1,
                  maxRatio: 3,
                  minRatio: 1,
                  toggle: !0,
                  containerClass: 'swiper-zoom-container',
                  zoomedSlideClass: 'swiper-slide-zoomed'
                }
              },
              create: function() {
                var e = this,
                  t = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                      $slideEl: void 0,
                      slideWidth: void 0,
                      slideHeight: void 0,
                      $imageEl: void 0,
                      $imageWrapEl: void 0,
                      maxRatio: 3
                    },
                    image: {
                      isTouched: void 0,
                      isMoved: void 0,
                      currentX: void 0,
                      currentY: void 0,
                      minX: void 0,
                      minY: void 0,
                      maxX: void 0,
                      maxY: void 0,
                      width: void 0,
                      height: void 0,
                      startX: void 0,
                      startY: void 0,
                      touchesStart: {},
                      touchesCurrent: {}
                    },
                    velocity: {
                      x: void 0,
                      y: void 0,
                      prevPositionX: void 0,
                      prevPositionY: void 0,
                      prevTime: void 0
                    }
                  };
                'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'
                  .split(' ')
                  .forEach(function(i) {
                    t[i] = Ee[i].bind(e);
                  }),
                  G.extend(e, { zoom: t });
                var i = 1;
                Object.defineProperty(e.zoom, 'scale', {
                  get: function() {
                    return i;
                  },
                  set: function(t) {
                    i !== t &&
                      e.emit(
                        'zoomChange',
                        t,
                        e.zoom.gesture.$imageEl
                          ? e.zoom.gesture.$imageEl[0]
                          : void 0,
                        e.zoom.gesture.$slideEl
                          ? e.zoom.gesture.$slideEl[0]
                          : void 0
                      ),
                      (i = t);
                  }
                });
              },
              on: {
                init: function() {
                  this.params.zoom.enabled && this.zoom.enable();
                },
                destroy: function() {
                  this.zoom.disable();
                },
                touchStart: function(e) {
                  this.zoom.enabled && this.zoom.onTouchStart(e);
                },
                touchEnd: function(e) {
                  this.zoom.enabled && this.zoom.onTouchEnd(e);
                },
                doubleTap: function(e) {
                  this.params.zoom.enabled &&
                    this.zoom.enabled &&
                    this.params.zoom.toggle &&
                    this.zoom.toggle(e);
                },
                transitionEnd: function() {
                  this.zoom.enabled &&
                    this.params.zoom.enabled &&
                    this.zoom.onTransitionEnd();
                },
                slideChange: function() {
                  this.zoom.enabled &&
                    this.params.zoom.enabled &&
                    this.params.cssMode &&
                    this.zoom.onTransitionEnd();
                }
              }
            },
            {
              name: 'lazy',
              params: {
                lazy: {
                  enabled: !1,
                  loadPrevNext: !1,
                  loadPrevNextAmount: 1,
                  loadOnTransitionStart: !1,
                  elementClass: 'swiper-lazy',
                  loadingClass: 'swiper-lazy-loading',
                  loadedClass: 'swiper-lazy-loaded',
                  preloaderClass: 'swiper-lazy-preloader'
                }
              },
              create: function() {
                G.extend(this, {
                  lazy: {
                    initialImageLoaded: !1,
                    load: ye.load.bind(this),
                    loadInSlide: ye.loadInSlide.bind(this)
                  }
                });
              },
              on: {
                beforeInit: function() {
                  this.params.lazy.enabled &&
                    this.params.preloadImages &&
                    (this.params.preloadImages = !1);
                },
                init: function() {
                  this.params.lazy.enabled &&
                    !this.params.loop &&
                    0 === this.params.initialSlide &&
                    this.lazy.load();
                },
                scroll: function() {
                  this.params.freeMode &&
                    !this.params.freeModeSticky &&
                    this.lazy.load();
                },
                resize: function() {
                  this.params.lazy.enabled && this.lazy.load();
                },
                scrollbarDragMove: function() {
                  this.params.lazy.enabled && this.lazy.load();
                },
                transitionStart: function() {
                  this.params.lazy.enabled &&
                    (this.params.lazy.loadOnTransitionStart ||
                      (!this.params.lazy.loadOnTransitionStart &&
                        !this.lazy.initialImageLoaded)) &&
                    this.lazy.load();
                },
                transitionEnd: function() {
                  this.params.lazy.enabled &&
                    !this.params.lazy.loadOnTransitionStart &&
                    this.lazy.load();
                },
                slideChange: function() {
                  this.params.lazy.enabled &&
                    this.params.cssMode &&
                    this.lazy.load();
                }
              }
            },
            {
              name: 'controller',
              params: {
                controller: { control: void 0, inverse: !1, by: 'slide' }
              },
              create: function() {
                G.extend(this, {
                  controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: Te.getInterpolateFunction.bind(
                      this
                    ),
                    setTranslate: Te.setTranslate.bind(this),
                    setTransition: Te.setTransition.bind(this)
                  }
                });
              },
              on: {
                update: function() {
                  this.controller.control &&
                    this.controller.spline &&
                    ((this.controller.spline = void 0),
                    delete this.controller.spline);
                },
                resize: function() {
                  this.controller.control &&
                    this.controller.spline &&
                    ((this.controller.spline = void 0),
                    delete this.controller.spline);
                },
                observerUpdate: function() {
                  this.controller.control &&
                    this.controller.spline &&
                    ((this.controller.spline = void 0),
                    delete this.controller.spline);
                },
                setTranslate: function(e, t) {
                  this.controller.control && this.controller.setTranslate(e, t);
                },
                setTransition: function(e, t) {
                  this.controller.control &&
                    this.controller.setTransition(e, t);
                }
              }
            },
            {
              name: 'a11y',
              params: {
                a11y: {
                  enabled: !0,
                  notificationClass: 'swiper-notification',
                  prevSlideMessage: 'Previous slide',
                  nextSlideMessage: 'Next slide',
                  firstSlideMessage: 'This is the first slide',
                  lastSlideMessage: 'This is the last slide',
                  paginationBulletMessage: 'Go to slide {{index}}'
                }
              },
              create: function() {
                var e = this;
                G.extend(e, {
                  a11y: {
                    liveRegion: b(
                      '<span class="'.concat(
                        e.params.a11y.notificationClass,
                        '" aria-live="assertive" aria-atomic="true"></span>'
                      )
                    )
                  }
                }),
                  Object.keys(xe).forEach(function(t) {
                    e.a11y[t] = xe[t].bind(e);
                  });
              },
              on: {
                init: function() {
                  this.params.a11y.enabled &&
                    (this.a11y.init(), this.a11y.updateNavigation());
                },
                toEdge: function() {
                  this.params.a11y.enabled && this.a11y.updateNavigation();
                },
                fromEdge: function() {
                  this.params.a11y.enabled && this.a11y.updateNavigation();
                },
                paginationUpdate: function() {
                  this.params.a11y.enabled && this.a11y.updatePagination();
                },
                destroy: function() {
                  this.params.a11y.enabled && this.a11y.destroy();
                }
              }
            },
            {
              name: 'history',
              params: {
                history: { enabled: !1, replaceState: !1, key: 'slides' }
              },
              create: function() {
                G.extend(this, {
                  history: {
                    init: Ae.init.bind(this),
                    setHistory: Ae.setHistory.bind(this),
                    setHistoryPopState: Ae.setHistoryPopState.bind(this),
                    scrollToSlide: Ae.scrollToSlide.bind(this),
                    destroy: Ae.destroy.bind(this)
                  }
                });
              },
              on: {
                init: function() {
                  this.params.history.enabled && this.history.init();
                },
                destroy: function() {
                  this.params.history.enabled && this.history.destroy();
                },
                transitionEnd: function() {
                  this.history.initialized &&
                    this.history.setHistory(
                      this.params.history.key,
                      this.activeIndex
                    );
                },
                slideChange: function() {
                  this.history.initialized &&
                    this.params.cssMode &&
                    this.history.setHistory(
                      this.params.history.key,
                      this.activeIndex
                    );
                }
              }
            },
            {
              name: 'hash-navigation',
              params: {
                hashNavigation: {
                  enabled: !1,
                  replaceState: !1,
                  watchState: !1
                }
              },
              create: function() {
                G.extend(this, {
                  hashNavigation: {
                    initialized: !1,
                    init: Ce.init.bind(this),
                    destroy: Ce.destroy.bind(this),
                    setHash: Ce.setHash.bind(this),
                    onHashCange: Ce.onHashCange.bind(this)
                  }
                });
              },
              on: {
                init: function() {
                  this.params.hashNavigation.enabled &&
                    this.hashNavigation.init();
                },
                destroy: function() {
                  this.params.hashNavigation.enabled &&
                    this.hashNavigation.destroy();
                },
                transitionEnd: function() {
                  this.hashNavigation.initialized &&
                    this.hashNavigation.setHash();
                },
                slideChange: function() {
                  this.hashNavigation.initialized &&
                    this.params.cssMode &&
                    this.hashNavigation.setHash();
                }
              }
            },
            {
              name: 'autoplay',
              params: {
                autoplay: {
                  enabled: !1,
                  delay: 3e3,
                  waitForTransition: !0,
                  disableOnInteraction: !0,
                  stopOnLastSlide: !1,
                  reverseDirection: !1
                }
              },
              create: function() {
                var e = this;
                G.extend(e, {
                  autoplay: {
                    running: !1,
                    paused: !1,
                    run: Ie.run.bind(e),
                    start: Ie.start.bind(e),
                    stop: Ie.stop.bind(e),
                    pause: Ie.pause.bind(e),
                    onVisibilityChange: function() {
                      'hidden' === document.visibilityState &&
                        e.autoplay.running &&
                        e.autoplay.pause(),
                        'visible' === document.visibilityState &&
                          e.autoplay.paused &&
                          (e.autoplay.run(), (e.autoplay.paused = !1));
                    },
                    onTransitionEnd: function(t) {
                      e &&
                        !e.destroyed &&
                        e.$wrapperEl &&
                        t.target === this &&
                        (e.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          e.autoplay.onTransitionEnd
                        ),
                        e.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          e.autoplay.onTransitionEnd
                        ),
                        (e.autoplay.paused = !1),
                        e.autoplay.running
                          ? e.autoplay.run()
                          : e.autoplay.stop());
                    }
                  }
                });
              },
              on: {
                init: function() {
                  this.params.autoplay.enabled &&
                    (this.autoplay.start(),
                    document.addEventListener(
                      'visibilitychange',
                      this.autoplay.onVisibilityChange
                    ));
                },
                beforeTransitionStart: function(e, t) {
                  this.autoplay.running &&
                    (t || !this.params.autoplay.disableOnInteraction
                      ? this.autoplay.pause(e)
                      : this.autoplay.stop());
                },
                sliderFirstMove: function() {
                  this.autoplay.running &&
                    (this.params.autoplay.disableOnInteraction
                      ? this.autoplay.stop()
                      : this.autoplay.pause());
                },
                touchEnd: function() {
                  this.params.cssMode &&
                    this.autoplay.paused &&
                    !this.params.autoplay.disableOnInteraction &&
                    this.autoplay.run();
                },
                destroy: function() {
                  this.autoplay.running && this.autoplay.stop(),
                    document.removeEventListener(
                      'visibilitychange',
                      this.autoplay.onVisibilityChange
                    );
                }
              }
            },
            {
              name: 'effect-fade',
              params: { fadeEffect: { crossFade: !1 } },
              create: function() {
                G.extend(this, {
                  fadeEffect: {
                    setTranslate: Me.setTranslate.bind(this),
                    setTransition: Me.setTransition.bind(this)
                  }
                });
              },
              on: {
                beforeInit: function() {
                  if ('fade' === this.params.effect) {
                    this.classNames.push(
                      this.params.containerModifierClass + 'fade'
                    );
                    var e = {
                      slidesPerView: 1,
                      slidesPerColumn: 1,
                      slidesPerGroup: 1,
                      watchSlidesProgress: !0,
                      spaceBetween: 0,
                      virtualTranslate: !0
                    };
                    G.extend(this.params, e), G.extend(this.originalParams, e);
                  }
                },
                setTranslate: function() {
                  'fade' === this.params.effect &&
                    this.fadeEffect.setTranslate();
                },
                setTransition: function(e) {
                  'fade' === this.params.effect &&
                    this.fadeEffect.setTransition(e);
                }
              }
            },
            {
              name: 'effect-cube',
              params: {
                cubeEffect: {
                  slideShadows: !0,
                  shadow: !0,
                  shadowOffset: 20,
                  shadowScale: 0.94
                }
              },
              create: function() {
                G.extend(this, {
                  cubeEffect: {
                    setTranslate: ke.setTranslate.bind(this),
                    setTransition: ke.setTransition.bind(this)
                  }
                });
              },
              on: {
                beforeInit: function() {
                  if ('cube' === this.params.effect) {
                    this.classNames.push(
                      this.params.containerModifierClass + 'cube'
                    ),
                      this.classNames.push(
                        this.params.containerModifierClass + '3d'
                      );
                    var e = {
                      slidesPerView: 1,
                      slidesPerColumn: 1,
                      slidesPerGroup: 1,
                      watchSlidesProgress: !0,
                      resistanceRatio: 0,
                      spaceBetween: 0,
                      centeredSlides: !1,
                      virtualTranslate: !0
                    };
                    G.extend(this.params, e), G.extend(this.originalParams, e);
                  }
                },
                setTranslate: function() {
                  'cube' === this.params.effect &&
                    this.cubeEffect.setTranslate();
                },
                setTransition: function(e) {
                  'cube' === this.params.effect &&
                    this.cubeEffect.setTransition(e);
                }
              }
            },
            {
              name: 'effect-flip',
              params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
              create: function() {
                G.extend(this, {
                  flipEffect: {
                    setTranslate: Oe.setTranslate.bind(this),
                    setTransition: Oe.setTransition.bind(this)
                  }
                });
              },
              on: {
                beforeInit: function() {
                  if ('flip' === this.params.effect) {
                    this.classNames.push(
                      this.params.containerModifierClass + 'flip'
                    ),
                      this.classNames.push(
                        this.params.containerModifierClass + '3d'
                      );
                    var e = {
                      slidesPerView: 1,
                      slidesPerColumn: 1,
                      slidesPerGroup: 1,
                      watchSlidesProgress: !0,
                      spaceBetween: 0,
                      virtualTranslate: !0
                    };
                    G.extend(this.params, e), G.extend(this.originalParams, e);
                  }
                },
                setTranslate: function() {
                  'flip' === this.params.effect &&
                    this.flipEffect.setTranslate();
                },
                setTransition: function(e) {
                  'flip' === this.params.effect &&
                    this.flipEffect.setTransition(e);
                }
              }
            },
            {
              name: 'effect-coverflow',
              params: {
                coverflowEffect: {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  scale: 1,
                  modifier: 1,
                  slideShadows: !0
                }
              },
              create: function() {
                G.extend(this, {
                  coverflowEffect: {
                    setTranslate: Pe.setTranslate.bind(this),
                    setTransition: Pe.setTransition.bind(this)
                  }
                });
              },
              on: {
                beforeInit: function() {
                  'coverflow' === this.params.effect &&
                    (this.classNames.push(
                      this.params.containerModifierClass + 'coverflow'
                    ),
                    this.classNames.push(
                      this.params.containerModifierClass + '3d'
                    ),
                    (this.params.watchSlidesProgress = !0),
                    (this.originalParams.watchSlidesProgress = !0));
                },
                setTranslate: function() {
                  'coverflow' === this.params.effect &&
                    this.coverflowEffect.setTranslate();
                },
                setTransition: function(e) {
                  'coverflow' === this.params.effect &&
                    this.coverflowEffect.setTransition(e);
                }
              }
            },
            {
              name: 'thumbs',
              params: {
                thumbs: {
                  swiper: null,
                  multipleActiveThumbs: !0,
                  autoScrollOffset: 0,
                  slideThumbActiveClass: 'swiper-slide-thumb-active',
                  thumbsContainerClass: 'swiper-container-thumbs'
                }
              },
              create: function() {
                G.extend(this, {
                  thumbs: {
                    swiper: null,
                    init: ze.init.bind(this),
                    update: ze.update.bind(this),
                    onThumbClick: ze.onThumbClick.bind(this)
                  }
                });
              },
              on: {
                beforeInit: function() {
                  var e = this.params.thumbs;
                  e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
                },
                slideChange: function() {
                  this.thumbs.swiper && this.thumbs.update();
                },
                update: function() {
                  this.thumbs.swiper && this.thumbs.update();
                },
                resize: function() {
                  this.thumbs.swiper && this.thumbs.update();
                },
                observerUpdate: function() {
                  this.thumbs.swiper && this.thumbs.update();
                },
                setTransition: function(e) {
                  var t = this.thumbs.swiper;
                  t && t.setTransition(e);
                },
                beforeDestroy: function() {
                  var e = this.thumbs.swiper;
                  e && this.thumbs.swiperCreated && e && e.destroy();
                }
              }
            }
          ];
        void 0 === ae.use &&
          ((ae.use = ae.Class.use),
          (ae.installModule = ae.Class.installModule)),
          ae.use(Le);
        var Ne,
          De,
          Re,
          Ge = ae,
          $e = ['swiperSlides'],
          Be = ['*'],
          _e = new p.q('SWIPER_CONFIG'),
          He = [
            'init',
            'beforeDestroy',
            'scroll',
            'progress',
            'keyPress',
            'resize',
            'loopFix',
            'breakpoint',
            'zoomChange',
            'beforeResize',
            'beforeLoopFix',
            'sliderMove',
            'slideChange',
            'setTranslate',
            'setTransition',
            'fromEdge',
            'reachEnd',
            'reachBeginning',
            'autoplay',
            'autoplayStop',
            'autoplayStart',
            'imagesReady',
            'lazyImageLoad',
            'lazyImageReady',
            'scrollbarDragEnd',
            'scrollbarDragMove',
            'scrollbarDragStart',
            'navigationHide',
            'navigationShow',
            'paginationRender',
            'paginationUpdate',
            'paginationHide',
            'paginationShow',
            'swiperTap',
            'swiperClick',
            'swiperDoubleTap',
            'swiperTouchEnd',
            'swiperTouchMove',
            'swiperTouchStart',
            'swiperTouchMoveOpposite',
            'swiperTransitionEnd',
            'swiperTransitionStart',
            'slideNextTransitionEnd',
            'slideNextTransitionStart',
            'slidePrevTransitionEnd',
            'slidePrevTransitionStart',
            'slideChangeTransitionEnd',
            'slideChangeTransitionStart'
          ],
          Ye = (function() {
            function e() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              h(this, e), this.assign(t);
            }
            return (
              o(e, [
                {
                  key: 'assign',
                  value: function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = arguments.length > 1 ? arguments[1] : void 0;
                    for (var i in ((t = t || this), e))
                      null == e[i] ||
                      Array.isArray(e[i]) ||
                      'object' != typeof e[i] ||
                      ('undefined' != typeof HTMLElement &&
                        e[i] instanceof HTMLElement)
                        ? (t[i] = e[i])
                        : ((t[i] = {}), this.assign(e[i], t[i]));
                  }
                }
              ]),
              e
            );
          })(),
          Fe =
            (((Re = (function() {
              function e(t, i, s, a, n) {
                h(this, e),
                  (this.platformId = t),
                  (this.zone = i),
                  (this.elementRef = s),
                  (this.differs = a),
                  (this.defaults = n),
                  (this.initialIndex = null),
                  (this.configDiff = null),
                  (this.disabled = !1),
                  (this.performance = !1),
                  (this.indexChange = new p.n()),
                  (this.S_INIT = new p.n()),
                  (this.S_BEFOREDESTROY = new p.n()),
                  (this.S_SCROLL = new p.n()),
                  (this.S_PROGRESS = new p.n()),
                  (this.S_KEYPRESS = new p.n()),
                  (this.S_RESIZE = new p.n()),
                  (this.S_BREAKPOINT = new p.n()),
                  (this.S_ZOOMCHANGE = new p.n()),
                  (this.S_AFTERRESIZE = new p.n()),
                  (this.S_BEFORERESIZE = new p.n()),
                  (this.S_LOOPFIX = new p.n()),
                  (this.S_BEFORELOOPFIX = new p.n()),
                  (this.S_SLIDERMOVE = new p.n()),
                  (this.S_SLIDECHANGE = new p.n()),
                  (this.S_SETTRANSLATE = new p.n()),
                  (this.S_SETTRANSITION = new p.n()),
                  (this.S_FROMEDGE = new p.n()),
                  (this.S_REACHEND = new p.n()),
                  (this.S_REACHBEGINNING = new p.n()),
                  (this.S_AUTOPLAY = new p.n()),
                  (this.S_AUTOPLAYSTART = new p.n()),
                  (this.S_AUTOPLAYSTOP = new p.n()),
                  (this.S_IMAGESREADY = new p.n()),
                  (this.S_LAZYIMAGELOAD = new p.n()),
                  (this.S_LAZYIMAGEREADY = new p.n()),
                  (this.S_SCROLLDRAGEND = new p.n()),
                  (this.S_SCROLLDRAGMOVE = new p.n()),
                  (this.S_SCROLLDRAGSTART = new p.n()),
                  (this.S_NAVIGATIONHIDE = new p.n()),
                  (this.S_NAVIGATIONSHOW = new p.n()),
                  (this.S_PAGINATIONRENDER = new p.n()),
                  (this.S_PAGINATIONUPDATE = new p.n()),
                  (this.S_PAGINATIONHIDE = new p.n()),
                  (this.S_PAGINATIONSHOW = new p.n()),
                  (this.S_TAP = new p.n()),
                  (this.S_CLICK = new p.n()),
                  (this.S_DOUBLETAP = new p.n()),
                  (this.S_TOUCHEND = new p.n()),
                  (this.S_TOUCHMOVE = new p.n()),
                  (this.S_TOUCHSTART = new p.n()),
                  (this.S_TOUCHMOVEOPPOSITE = new p.n()),
                  (this.S_TRANSITIONEND = new p.n()),
                  (this.S_TRANSITIONSTART = new p.n()),
                  (this.S_SLIDEPREVTRANSITIONEND = new p.n()),
                  (this.S_SLIDEPREVTRANSITIONSTART = new p.n()),
                  (this.S_SLIDENEXTTRANSITIONEND = new p.n()),
                  (this.S_SLIDENEXTTRANSITIONSTART = new p.n()),
                  (this.S_SLIDECHANGETRANSITIONEND = new p.n()),
                  (this.S_SLIDECHANGETRANSITIONSTART = new p.n());
              }
              return (
                o(e, [
                  {
                    key: 'ngAfterViewInit',
                    value: function() {
                      var e = this;
                      if (Object(c.v)(this.platformId)) {
                        var t = new Ye(this.defaults);
                        t.assign(this.config),
                          !0 === t.scrollbar &&
                            (t.scrollbar = { el: '.swiper-scrollbar' }),
                          !0 === t.pagination &&
                            (t.pagination = { el: '.swiper-pagination' }),
                          !0 === t.navigation &&
                            (t.navigation = {
                              prevEl: '.swiper-button-prev',
                              nextEl: '.swiper-button-next'
                            }),
                          this.disabled &&
                            ((t.allowSlidePrev = !1), (t.allowSlideNext = !1)),
                          null != this.initialIndex &&
                            ((t.initialSlide = this.initialIndex),
                            (this.initialIndex = null)),
                          (t.on = {
                            slideChange: function() {
                              e.instance &&
                                e.indexChange.observers.length &&
                                e.emit(e.indexChange, e.instance.realIndex);
                            }
                          }),
                          this.zone.runOutsideAngular(function() {
                            e.instance = new Ge(e.elementRef.nativeElement, t);
                          }),
                          !1 !== t.init &&
                            this.S_INIT.observers.length &&
                            this.emit(this.S_INIT, this.instance),
                          He.forEach(function(t) {
                            var i = t.replace('swiper', '');
                            (i = i.charAt(0).toLowerCase() + i.slice(1)),
                              e.instance.on(i, function() {
                                for (
                                  var t = arguments.length,
                                    s = new Array(t),
                                    a = 0;
                                  a < t;
                                  a++
                                )
                                  s[a] = arguments[a];
                                1 === s.length && (s = s[0]);
                                var n = e['S_' + i.toUpperCase()];
                                n.observers.length && e.emit(n, s);
                              });
                          }),
                          this.configDiff ||
                            ((this.configDiff = this.differs
                              .find(this.config || {})
                              .create()),
                            this.configDiff.diff(this.config || {}));
                      }
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function() {
                      var e = this;
                      this.instance &&
                        (this.zone.runOutsideAngular(function() {
                          e.instance.destroy(!0, e.instance.initialized || !1);
                        }),
                        (this.instance = null));
                    }
                  },
                  {
                    key: 'ngDoCheck',
                    value: function() {
                      this.configDiff &&
                        this.configDiff.diff(this.config || {}) &&
                        ((this.initialIndex = this.getIndex(!0)),
                        this.ngOnDestroy(),
                        this.ngAfterViewInit(),
                        this.update());
                    }
                  },
                  {
                    key: 'ngOnChanges',
                    value: function(e) {
                      var t = this;
                      this.instance &&
                        e.disabled &&
                        e.disabled.currentValue !== e.disabled.previousValue &&
                        (!0 === e.disabled.currentValue ||
                          !1 === e.disabled.currentValue) &&
                        this.zone.runOutsideAngular(function() {
                          t.ngOnDestroy(), t.ngAfterViewInit();
                        });
                    }
                  },
                  {
                    key: 'emit',
                    value: function(e, t) {
                      this.performance
                        ? e.emit(t)
                        : this.zone.run(function() {
                            return e.emit(t);
                          });
                    }
                  },
                  {
                    key: 'swiper',
                    value: function() {
                      return this.instance;
                    }
                  },
                  {
                    key: 'init',
                    value: function() {
                      var e = this;
                      this.instance &&
                        this.zone.runOutsideAngular(function() {
                          e.instance.init();
                        });
                    }
                  },
                  {
                    key: 'update',
                    value: function() {
                      var e = this;
                      setTimeout(function() {
                        e.instance &&
                          e.zone.runOutsideAngular(function() {
                            e.instance.update();
                          });
                      }, 0);
                    }
                  },
                  {
                    key: 'getIndex',
                    value: function(e) {
                      return this.instance
                        ? e
                          ? this.instance.realIndex
                          : this.instance.activeIndex
                        : this.initialIndex || 0;
                    }
                  },
                  {
                    key: 'setIndex',
                    value: function(e, t, i) {
                      var s = this;
                      if (this.instance) {
                        var a = e * this.instance.params.slidesPerGroup;
                        this.instance.params.loop &&
                          (a += this.instance.loopedSlides),
                          this.zone.runOutsideAngular(function() {
                            s.instance.slideTo(a, t, !i);
                          });
                      } else this.initialIndex = e;
                    }
                  },
                  {
                    key: 'prevSlide',
                    value: function(e, t) {
                      var i = this;
                      this.instance &&
                        this.zone.runOutsideAngular(function() {
                          i.instance.slidePrev(e, !t);
                        });
                    }
                  },
                  {
                    key: 'nextSlide',
                    value: function(e, t) {
                      var i = this;
                      this.instance &&
                        this.zone.runOutsideAngular(function() {
                          i.instance.slideNext(e, !t);
                        });
                    }
                  },
                  {
                    key: 'stopAutoplay',
                    value: function(e) {
                      var t = this;
                      e && this.setIndex(0),
                        this.instance &&
                          this.instance.autoplay &&
                          this.zone.runOutsideAngular(function() {
                            t.instance.autoplay.stop();
                          });
                    }
                  },
                  {
                    key: 'startAutoplay',
                    value: function(e) {
                      var t = this;
                      e && this.setIndex(0),
                        this.instance &&
                          this.instance.autoplay &&
                          this.zone.runOutsideAngular(function() {
                            t.instance.autoplay.start();
                          });
                    }
                  },
                  {
                    key: 'index',
                    set: function(e) {
                      null != e && this.setIndex(e);
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function(e) {
              return new (e || Re)(
                p.Lb(p.B),
                p.Lb(p.z),
                p.Lb(p.l),
                p.Lb(p.t),
                p.Lb(_e, 8)
              );
            }),
            (Re.ɵdir = p.Gb({
              type: Re,
              selectors: [['', 'swiper', '']],
              inputs: {
                disabled: 'disabled',
                performance: 'performance',
                index: 'index',
                config: ['swiper', 'config']
              },
              outputs: {
                indexChange: 'indexChange',
                S_INIT: 'init',
                S_BEFOREDESTROY: 'beforeDestroy',
                S_SCROLL: 'scroll',
                S_PROGRESS: 'progress',
                S_KEYPRESS: 'keyPress',
                S_RESIZE: 'resize',
                S_BREAKPOINT: 'breakpoint',
                S_ZOOMCHANGE: 'zoomChange',
                S_AFTERRESIZE: 'afterResize',
                S_BEFORERESIZE: 'beforeResize',
                S_LOOPFIX: 'loopFix',
                S_BEFORELOOPFIX: 'beforeLoopFix',
                S_SLIDERMOVE: 'sliderMove',
                S_SLIDECHANGE: 'slideChange',
                S_SETTRANSLATE: 'setTranslate',
                S_SETTRANSITION: 'setTransition',
                S_FROMEDGE: 'fromEdge',
                S_REACHEND: 'reachEnd',
                S_REACHBEGINNING: 'reachBeginning',
                S_AUTOPLAY: 'autoplay',
                S_AUTOPLAYSTART: 'autoplayStart',
                S_AUTOPLAYSTOP: 'autoplayStop',
                S_IMAGESREADY: 'imagesReady',
                S_LAZYIMAGELOAD: 'lazyImageLoad',
                S_LAZYIMAGEREADY: 'lazyImageReady',
                S_SCROLLDRAGEND: 'scrollDragEnd',
                S_SCROLLDRAGMOVE: 'scrollDragMove',
                S_SCROLLDRAGSTART: 'scrollDragStart',
                S_NAVIGATIONHIDE: 'navigationHide',
                S_NAVIGATIONSHOW: 'navigationShow',
                S_PAGINATIONRENDER: 'paginationRender',
                S_PAGINATIONUPDATE: 'paginationUpdate',
                S_PAGINATIONHIDE: 'paginationHide',
                S_PAGINATIONSHOW: 'paginationShow',
                S_TAP: 'swiperTap',
                S_CLICK: 'swiperClick',
                S_DOUBLETAP: 'swiperDoubleTap',
                S_TOUCHEND: 'swiperTouchEnd',
                S_TOUCHMOVE: 'swiperTouchMove',
                S_TOUCHSTART: 'swiperTouchStart',
                S_TOUCHMOVEOPPOSITE: 'swiperTouchMoveOpposite',
                S_TRANSITIONEND: 'swiperTransitionEnd',
                S_TRANSITIONSTART: 'swiperTransitionStart',
                S_SLIDEPREVTRANSITIONEND: 'slidePrevTransitionEnd',
                S_SLIDEPREVTRANSITIONSTART: 'slidePrevTransitionStart',
                S_SLIDENEXTTRANSITIONEND: 'slideNextTransitionEnd',
                S_SLIDENEXTTRANSITIONSTART: 'slideNextTransitionStart',
                S_SLIDECHANGETRANSITIONEND: 'slideChangeTransitionEnd',
                S_SLIDECHANGETRANSITIONSTART: 'slideChangeTransitionStart'
              },
              exportAs: ['ngxSwiper'],
              features: [p.vb]
            })),
            Re),
          Ve =
            (((De = (function() {
              function e(t, i, s, a) {
                h(this, e),
                  (this.zone = t),
                  (this.cdRef = i),
                  (this.platformId = s),
                  (this.defaults = a),
                  (this.mo = null),
                  (this.swiperConfig = null),
                  (this.paginationBackup = null),
                  (this.paginationConfig = null),
                  (this.index = null),
                  (this.disabled = !1),
                  (this.performance = !1),
                  (this.useSwiperClass = !0),
                  (this.indexChange = new p.n()),
                  (this.S_INIT = new p.n()),
                  (this.S_BEFOREDESTROY = new p.n()),
                  (this.S_SCROLL = new p.n()),
                  (this.S_PROGRESS = new p.n()),
                  (this.S_KEYPRESS = new p.n()),
                  (this.S_RESIZE = new p.n()),
                  (this.S_BREAKPOINT = new p.n()),
                  (this.S_ZOOMCHANGE = new p.n()),
                  (this.S_AFTERRESIZE = new p.n()),
                  (this.S_BEFORERESIZE = new p.n()),
                  (this.S_BEFORELOOPFIX = new p.n()),
                  (this.S_LOOPFIX = new p.n()),
                  (this.S_SLIDERMOVE = new p.n()),
                  (this.S_SLIDECHANGE = new p.n()),
                  (this.S_SETTRANSLATE = new p.n()),
                  (this.S_SETTRANSITION = new p.n()),
                  (this.S_FROMEDGE = new p.n()),
                  (this.S_REACHEND = new p.n()),
                  (this.S_REACHBEGINNING = new p.n()),
                  (this.S_AUTOPLAY = new p.n()),
                  (this.S_AUTOPLAYSTART = new p.n()),
                  (this.S_AUTOPLAYSTOP = new p.n()),
                  (this.S_IMAGESREADY = new p.n()),
                  (this.S_LAZYIMAGELOAD = new p.n()),
                  (this.S_LAZYIMAGEREADY = new p.n()),
                  (this.S_SCROLLDRAGEND = new p.n()),
                  (this.S_SCROLLDRAGMOVE = new p.n()),
                  (this.S_SCROLLDRAGSTART = new p.n()),
                  (this.S_NAVIGATIONHIDE = new p.n()),
                  (this.S_NAVIGATIONSHOW = new p.n()),
                  (this.S_PAGINATIONRENDER = new p.n()),
                  (this.S_PAGINATIONUPDATE = new p.n()),
                  (this.S_PAGINATIONHIDE = new p.n()),
                  (this.S_PAGINATIONSHOW = new p.n()),
                  (this.S_TAP = new p.n()),
                  (this.S_CLICK = new p.n()),
                  (this.S_DOUBLETAP = new p.n()),
                  (this.S_TOUCHEND = new p.n()),
                  (this.S_TOUCHMOVE = new p.n()),
                  (this.S_TOUCHSTART = new p.n()),
                  (this.S_TOUCHMOVEOPPOSITE = new p.n()),
                  (this.S_TRANSITIONEND = new p.n()),
                  (this.S_TRANSITIONSTART = new p.n()),
                  (this.S_SLIDEPREVTRANSITIONEND = new p.n()),
                  (this.S_SLIDEPREVTRANSITIONSTART = new p.n()),
                  (this.S_SLIDENEXTTRANSITIONEND = new p.n()),
                  (this.S_SLIDENEXTTRANSITIONSTART = new p.n()),
                  (this.S_SLIDECHANGETRANSITIONEND = new p.n()),
                  (this.S_SLIDECHANGETRANSITIONSTART = new p.n());
              }
              return (
                o(e, [
                  {
                    key: 'ngAfterViewInit',
                    value: function() {
                      var e = this;
                      Object(c.v)(this.platformId) &&
                        (this.zone.runOutsideAngular(function() {
                          e.updateClasses(),
                            e.swiperSlides &&
                              'undefined' != typeof MutationObserver &&
                              ((e.mo = new MutationObserver(function() {
                                e.updateClasses();
                              })),
                              e.mo.observe(e.swiperSlides.nativeElement, {
                                childList: !0
                              }));
                        }),
                        window.setTimeout(function() {
                          e.directiveRef &&
                            (e.S_INIT.emit(),
                            (e.directiveRef.indexChange = e.indexChange),
                            He.forEach(function(t) {
                              if (e.directiveRef) {
                                var i =
                                  'S_' + t.replace('swiper', '').toUpperCase();
                                e.directiveRef[i] = e[i];
                              }
                            }));
                        }, 0));
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function() {
                      this.mo && this.mo.disconnect(),
                        this.config &&
                          this.paginationBackup &&
                          (this.config.pagination = this.paginationBackup);
                    }
                  },
                  {
                    key: 'getConfig',
                    value: function() {
                      var e = this;
                      return (
                        (this.swiperConfig = new Ye(this.defaults)),
                        this.swiperConfig.assign(this.config),
                        !this.swiperSlides ||
                          (!0 !== this.swiperConfig.pagination &&
                            (!this.swiperConfig.pagination ||
                              'object' != typeof this.swiperConfig.pagination ||
                              (this.swiperConfig.pagination.type &&
                                'bullets' !==
                                  this.swiperConfig.pagination.type) ||
                              this.swiperConfig.pagination.renderBullet ||
                              '.swiper-pagination' !==
                                this.swiperConfig.pagination.el)) ||
                          ((this.config = this.config || {}),
                          this.paginationConfig ||
                            ((this.paginationBackup = this.config.pagination),
                            (this.paginationConfig = {
                              el: '.swiper-pagination',
                              renderBullet: function(t, i) {
                                var s = e.swiperSlides
                                  ? Array.from(
                                      e.swiperSlides.nativeElement.children
                                    )
                                  : [];
                                s = s.filter(function(e) {
                                  return e.classList.contains('swiper-slide');
                                });
                                var a = '<span class="'
                                  .concat(i, ' ')
                                  .concat(i, '-middle" index="')
                                  .concat(t, '"></span>');
                                return (
                                  0 === t
                                    ? (a = '<span class="'
                                        .concat(i, ' ')
                                        .concat(i, '-first" index="')
                                        .concat(t, '"></span>'))
                                    : t === s.length - 1 &&
                                      (a = '<span class="'
                                        .concat(i, ' ')
                                        .concat(i, '-last" index="')
                                        .concat(t, '"></span>')),
                                  '<span class="swiper-pagination-handle" index="'
                                    .concat(t, '">')
                                    .concat(a, '</span>')
                                );
                              }
                            })),
                          (this.config.pagination =
                            !0 === this.swiperConfig.pagination
                              ? this.paginationConfig
                              : Object.assign(
                                  {},
                                  this.config.pagination,
                                  this.paginationConfig
                                ))),
                        this.config
                      );
                    }
                  },
                  {
                    key: 'updateClasses',
                    value: function() {
                      if (this.swiperSlides) {
                        for (
                          var e = !1,
                            t = this.swiperSlides.nativeElement.children,
                            i = 0;
                          i < t.length;
                          i++
                        )
                          !1 === /swiper-.*/.test(t[i].className) &&
                            ((e = !0), t[i].classList.add('swiper-slide'));
                        e && this.directiveRef && this.directiveRef.update();
                      }
                      this.cdRef.detectChanges();
                    }
                  },
                  {
                    key: 'onPaginationClick',
                    value: function(e) {
                      this.config &&
                        this.directiveRef &&
                        (!0 === this.config.pagination ||
                          (this.config.pagination &&
                            'object' == typeof this.config.pagination &&
                            (!this.config.pagination.type ||
                              'bullets' === this.config.pagination.type) &&
                            this.config.pagination.clickable &&
                            '.swiper-pagination' ===
                              this.config.pagination.el)) &&
                        this.directiveRef.setIndex(e);
                    }
                  },
                  {
                    key: 'isAtLast',
                    get: function() {
                      return (
                        !(!this.directiveRef || !this.directiveRef.swiper()) &&
                        this.directiveRef.swiper().isEnd
                      );
                    }
                  },
                  {
                    key: 'isAtFirst',
                    get: function() {
                      return (
                        !(!this.directiveRef || !this.directiveRef.swiper()) &&
                        this.directiveRef.swiper().isBeginning
                      );
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function(e) {
              return new (e || De)(
                p.Lb(p.z),
                p.Lb(p.h),
                p.Lb(p.B),
                p.Lb(_e, 8)
              );
            }),
            (De.ɵcmp = p.Fb({
              type: De,
              selectors: [['swiper']],
              viewQuery: function(e, t) {
                var i;
                1 & e && (p.Jc($e, !0), p.Jc(Fe, !0)),
                  2 & e &&
                    (p.sc((i = p.cc())) && (t.swiperSlides = i.first),
                    p.sc((i = p.cc())) && (t.directiveRef = i.first));
              },
              inputs: {
                index: 'index',
                disabled: 'disabled',
                performance: 'performance',
                useSwiperClass: 'useSwiperClass',
                config: 'config'
              },
              outputs: {
                indexChange: 'indexChange',
                S_INIT: 'init',
                S_BEFOREDESTROY: 'beforeDestroy',
                S_SCROLL: 'scroll',
                S_PROGRESS: 'progress',
                S_KEYPRESS: 'keyPress',
                S_RESIZE: 'resize',
                S_BREAKPOINT: 'breakpoint',
                S_ZOOMCHANGE: 'zoomChange',
                S_AFTERRESIZE: 'afterResize',
                S_BEFORERESIZE: 'beforeResize',
                S_BEFORELOOPFIX: 'beforeLoopFix',
                S_LOOPFIX: 'loopFix',
                S_SLIDERMOVE: 'sliderMove',
                S_SLIDECHANGE: 'slideChange',
                S_SETTRANSLATE: 'setTranslate',
                S_SETTRANSITION: 'setTransition',
                S_FROMEDGE: 'fromEdge',
                S_REACHEND: 'reachEnd',
                S_REACHBEGINNING: 'reachBeginning',
                S_AUTOPLAY: 'autoplay',
                S_AUTOPLAYSTART: 'autoplayStart',
                S_AUTOPLAYSTOP: 'autoplayStop',
                S_IMAGESREADY: 'imagesReady',
                S_LAZYIMAGELOAD: 'lazyImageLoad',
                S_LAZYIMAGEREADY: 'lazyImageReady',
                S_SCROLLDRAGEND: 'scrollDragEnd',
                S_SCROLLDRAGMOVE: 'scrollDragMove',
                S_SCROLLDRAGSTART: 'scrollDragStart',
                S_NAVIGATIONHIDE: 'navigationHide',
                S_NAVIGATIONSHOW: 'navigationShow',
                S_PAGINATIONRENDER: 'paginationRender',
                S_PAGINATIONUPDATE: 'paginationUpdate',
                S_PAGINATIONHIDE: 'paginationHide',
                S_PAGINATIONSHOW: 'paginationShow',
                S_TAP: 'swiperTap',
                S_CLICK: 'swiperClick',
                S_DOUBLETAP: 'swiperDoubleTap',
                S_TOUCHEND: 'swiperTouchEnd',
                S_TOUCHMOVE: 'swiperTouchMove',
                S_TOUCHSTART: 'swiperTouchStart',
                S_TOUCHMOVEOPPOSITE: 'swiperTouchMoveOpposite',
                S_TRANSITIONEND: 'swiperTransitionEnd',
                S_TRANSITIONSTART: 'swiperTransitionStart',
                S_SLIDEPREVTRANSITIONEND: 'slidePrevTransitionEnd',
                S_SLIDEPREVTRANSITIONSTART: 'slidePrevTransitionStart',
                S_SLIDENEXTTRANSITIONEND: 'slideNextTransitionEnd',
                S_SLIDENEXTTRANSITIONSTART: 'slideNextTransitionStart',
                S_SLIDECHANGETRANSITIONEND: 'slideChangeTransitionEnd',
                S_SLIDECHANGETRANSITIONSTART: 'slideChangeTransitionStart'
              },
              exportAs: ['ngxSwiper'],
              ngContentSelectors: Be,
              decls: 18,
              vars: 14,
              consts: [
                [
                  1,
                  's-wrapper',
                  3,
                  'swiper',
                  'index',
                  'disabled',
                  'performance'
                ],
                ['swiper', ''],
                [1, 'swiper-wrapper'],
                ['swiperSlides', ''],
                [1, 'swiper-scrollbar', 3, 'hidden'],
                [1, 'swiper-button-prev', 3, 'hidden'],
                [1, 'swiper-button-next', 3, 'hidden'],
                [1, 'swiper-pagination', 3, 'hidden', 'click', 'keyup.enter']
              ],
              template: function(e, t) {
                1 & e &&
                  (p.jc(),
                  p.Qb(0, 'div', 0, 1),
                  p.Fc(2, '\n  '),
                  p.Qb(3, 'div', 2, 3),
                  p.Fc(5, '\n    '),
                  p.ic(6),
                  p.Fc(7, '\n  '),
                  p.Pb(),
                  p.Fc(8, '\n\n  '),
                  p.Mb(9, 'div', 4),
                  p.Fc(10, '\n\n  '),
                  p.Mb(11, 'div', 5),
                  p.Fc(12, '\n  '),
                  p.Mb(13, 'div', 6),
                  p.Fc(14, '\n\n  '),
                  p.Qb(15, 'div', 7),
                  p.bc('click', function(e) {
                    return t.onPaginationClick(e.target.getAttribute('index'));
                  })('keyup.enter', function(e) {
                    return t.onPaginationClick(e.target.getAttribute('index'));
                  }),
                  p.Pb(),
                  p.Fc(16, '\n'),
                  p.Pb(),
                  p.Fc(17, '\n')),
                  2 & e &&
                    (p.Db('swiper', t.useSwiperClass)(
                      'swiper-container',
                      t.useSwiperClass
                    ),
                    p.kc('swiper', t.getConfig())('index', t.index)(
                      'disabled',
                      t.disabled
                    )('performance', t.performance),
                    p.xb(9),
                    p.kc(
                      'hidden',
                      !(null != t.swiperConfig && t.swiperConfig.scrollbar) ||
                        (!0 !==
                          (null == t.swiperConfig
                            ? null
                            : t.swiperConfig.scrollbar) &&
                          !(
                            null == t.swiperConfig ||
                            null == t.swiperConfig.scrollbar ||
                            !t.swiperConfig.scrollbar.el
                          ) &&
                          '.swiper-scrollbar' !==
                            (null == t.swiperConfig ||
                            null == t.swiperConfig.scrollbar
                              ? null
                              : t.swiperConfig.scrollbar.el))
                    ),
                    p.xb(2),
                    p.kc(
                      'hidden',
                      !(null != t.swiperConfig && t.swiperConfig.navigation) ||
                        (!0 !==
                          (null == t.swiperConfig
                            ? null
                            : t.swiperConfig.navigation) &&
                          !(
                            null == t.swiperConfig ||
                            null == t.swiperConfig.navigation ||
                            !t.swiperConfig.navigation.prevEl
                          ) &&
                          '.swiper-button-prev' !==
                            (null == t.swiperConfig ||
                            null == t.swiperConfig.navigation
                              ? null
                              : t.swiperConfig.navigation.prevEl))
                    ),
                    p.yb('disabled', t.isAtFirst || null),
                    p.xb(2),
                    p.kc(
                      'hidden',
                      !(null != t.swiperConfig && t.swiperConfig.navigation) ||
                        (!0 !==
                          (null == t.swiperConfig
                            ? null
                            : t.swiperConfig.navigation) &&
                          !(
                            null == t.swiperConfig ||
                            null == t.swiperConfig.navigation ||
                            !t.swiperConfig.navigation.nextEl
                          ) &&
                          '.swiper-button-next' !==
                            (null == t.swiperConfig ||
                            null == t.swiperConfig.navigation
                              ? null
                              : t.swiperConfig.navigation.nextEl))
                    ),
                    p.yb('disabled', t.isAtLast || null),
                    p.xb(2),
                    p.kc(
                      'hidden',
                      !(null != t.swiperConfig && t.swiperConfig.pagination) ||
                        (!0 !==
                          (null == t.swiperConfig
                            ? null
                            : t.swiperConfig.pagination) &&
                          !(
                            null == t.swiperConfig ||
                            null == t.swiperConfig.pagination ||
                            !t.swiperConfig.pagination.el
                          ) &&
                          '.swiper-pagination' !==
                            (null == t.swiperConfig ||
                            null == t.swiperConfig.pagination
                              ? null
                              : t.swiperConfig.pagination.el))
                    ));
              },
              directives: [Fe],
              styles: [
                'swiper[fxflex]{display:-webkit-box;display:flex;flex-direction:inherit;min-width:0;min-height:0;-webkit-box-direction:inherit;-webkit-box-orient:inherit}swiper[fxflex]>.swiper.s-wrapper{flex:1 1 auto;min-width:0;min-height:0;-webkit-box-flex:1}swiper>.swiper.s-wrapper{width:100%;height:100%}swiper>.swiper.s-wrapper .swiper-wrapper .swiper-slide{will-change:transform;overflow:auto;width:100%;height:100%;max-width:100%;max-height:100%}swiper>.swiper.s-wrapper .swiper-pagination{pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle{position:relative;display:inline-block;padding:4px;margin:2px;cursor:pointer;pointer-events:all}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block;margin:0;pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{border:1px solid rgba(0,0,0,.5)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-prev{top:10px;left:50%;margin-top:0;margin-left:-13px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-next{top:auto;bottom:10px;left:50%;margin-top:0;margin-left:-13px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar{width:8px;-webkit-transition:width 250ms ease-in-out;transition:width 250ms ease-in-out}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar:hover{width:16px}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle{display:block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:0 -1px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar{height:8px;-webkit-transition:height 250ms ease-in-out;transition:height 250ms ease-in-out}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar:hover{height:16px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:-1px 0}',
                '@font-face{font-family:swiper-icons;src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff;--swiper-navigation-size:44px}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:flex;-webkit-transition-property:-webkit-transform;transition-property:transform,-webkit-transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:transform,-webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(-1 * var(--swiper-navigation-size)/ 2);z-index:10;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\'prev\'}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\'next\'}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:opacity .3s;transition:opacity .3s;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:transform .2s,top .2s;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:transform .2s,left .2s;transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:transform .2s,right .2s;transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:1s linear infinite swiper-preloader-spin;animation:1s linear infinite swiper-preloader-spin;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}'
              ],
              encapsulation: 2
            })),
            De),
          Xe =
            (((Ne = function e() {
              h(this, e);
            }).ɵmod = p.Jb({ type: Ne })),
            (Ne.ɵinj = p.Ib({
              factory: function(e) {
                return new (e || Ne)();
              },
              imports: [[c.b], c.b]
            })),
            Ne);
      }
    }
  ]);
})();
