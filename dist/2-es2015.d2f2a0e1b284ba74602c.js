(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    nhfI: function(e, t, i) {
      'use strict';
      i.d(t, 'a', function() {
        return ve;
      }),
        i.d(t, 'b', function() {
          return we;
        }),
        i.d(t, 'c', function() {
          return be;
        });
      var s = i('fXoL'),
        a = i('ofXK');
      function n(e) {
        return (
          null !== e &&
          'object' == typeof e &&
          'constructor' in e &&
          e.constructor === Object
        );
      }
      function r(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach(function(i) {
            void 0 === e[i]
              ? (e[i] = t[i])
              : n(t[i]) &&
                n(e[i]) &&
                Object.keys(t[i]).length > 0 &&
                r(e[i], t[i]);
          });
      }
      var o = 'undefined' != typeof document ? document : {},
        l = {
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
      r(o, l);
      var d = 'undefined' != typeof window ? window : {};
      r(d, {
        document: l,
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
      class p {
        constructor(e) {
          const t = this;
          for (let i = 0; i < e.length; i += 1) t[i] = e[i];
          return (t.length = e.length), this;
        }
      }
      function h(e, t) {
        const i = [];
        let s = 0;
        if (e && !t && e instanceof p) return e;
        if (e)
          if ('string' == typeof e) {
            let a, n;
            const r = e.trim();
            if (r.indexOf('<') >= 0 && r.indexOf('>') >= 0) {
              let e = 'div';
              for (
                0 === r.indexOf('<li') && (e = 'ul'),
                  0 === r.indexOf('<tr') && (e = 'tbody'),
                  (0 !== r.indexOf('<td') && 0 !== r.indexOf('<th')) ||
                    (e = 'tr'),
                  0 === r.indexOf('<tbody') && (e = 'table'),
                  0 === r.indexOf('<option') && (e = 'select'),
                  n = o.createElement(e),
                  n.innerHTML = r,
                  s = 0;
                s < n.childNodes.length;
                s += 1
              )
                i.push(n.childNodes[s]);
            } else
              for (
                a =
                  t || '#' !== e[0] || e.match(/[ .<>:~]/)
                    ? (t || o).querySelectorAll(e.trim())
                    : [o.getElementById(e.trim().split('#')[1])],
                  s = 0;
                s < a.length;
                s += 1
              )
                a[s] && i.push(a[s]);
          } else if (e.nodeType || e === d || e === o) i.push(e);
          else if (e.length > 0 && e[0].nodeType)
            for (s = 0; s < e.length; s += 1) i.push(e[s]);
        return new p(i);
      }
      function c(e) {
        const t = [];
        for (let i = 0; i < e.length; i += 1)
          -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
      }
      (h.fn = p.prototype),
        (h.Class = p),
        (h.Dom7 = p),
        'resize scroll'.split(' ');
      const u = {
        addClass: function(e) {
          if (void 0 === e) return this;
          const t = e.split(' ');
          for (let i = 0; i < t.length; i += 1)
            for (let e = 0; e < this.length; e += 1)
              void 0 !== this[e] &&
                void 0 !== this[e].classList &&
                this[e].classList.add(t[i]);
          return this;
        },
        removeClass: function(e) {
          const t = e.split(' ');
          for (let i = 0; i < t.length; i += 1)
            for (let e = 0; e < this.length; e += 1)
              void 0 !== this[e] &&
                void 0 !== this[e].classList &&
                this[e].classList.remove(t[i]);
          return this;
        },
        hasClass: function(e) {
          return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function(e) {
          const t = e.split(' ');
          for (let i = 0; i < t.length; i += 1)
            for (let e = 0; e < this.length; e += 1)
              void 0 !== this[e] &&
                void 0 !== this[e].classList &&
                this[e].classList.toggle(t[i]);
          return this;
        },
        attr: function(e, t) {
          if (1 === arguments.length && 'string' == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let i = 0; i < this.length; i += 1)
            if (2 === arguments.length) this[i].setAttribute(e, t);
            else
              for (const t in e)
                (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function(e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        data: function(e, t) {
          let i;
          if (void 0 !== t) {
            for (let s = 0; s < this.length; s += 1)
              (i = this[s]),
                i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                (i.dom7ElementDataStorage[e] = t);
            return this;
          }
          if (((i = this[0]), i))
            return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage
              ? i.dom7ElementDataStorage[e]
              : i.getAttribute('data-' + e) || void 0;
        },
        transform: function(e) {
          for (let t = 0; t < this.length; t += 1) {
            const i = this[t].style;
            (i.webkitTransform = e), (i.transform = e);
          }
          return this;
        },
        transition: function(e) {
          'string' != typeof e && (e += 'ms');
          for (let t = 0; t < this.length; t += 1) {
            const i = this[t].style;
            (i.webkitTransitionDuration = e), (i.transitionDuration = e);
          }
          return this;
        },
        on: function(...e) {
          let [t, i, s, a] = e;
          function n(e) {
            const t = e.target;
            if (!t) return;
            const a = e.target.dom7EventData || [];
            if ((a.indexOf(e) < 0 && a.unshift(e), h(t).is(i))) s.apply(t, a);
            else {
              const e = h(t).parents();
              for (let t = 0; t < e.length; t += 1)
                h(e[t]).is(i) && s.apply(e[t], a);
            }
          }
          function r(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
          }
          'function' == typeof e[1] && (([t, s, a] = e), (i = void 0)),
            a || (a = !1);
          const o = t.split(' ');
          let l;
          for (let d = 0; d < this.length; d += 1) {
            const e = this[d];
            if (i)
              for (l = 0; l < o.length; l += 1) {
                const t = o[l];
                e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                  e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                  e.dom7LiveListeners[t].push({
                    listener: s,
                    proxyListener: n
                  }),
                  e.addEventListener(t, n, a);
              }
            else
              for (l = 0; l < o.length; l += 1) {
                const t = o[l];
                e.dom7Listeners || (e.dom7Listeners = {}),
                  e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                  e.dom7Listeners[t].push({ listener: s, proxyListener: r }),
                  e.addEventListener(t, r, a);
              }
          }
          return this;
        },
        off: function(...e) {
          let [t, i, s, a] = e;
          'function' == typeof e[1] && (([t, s, a] = e), (i = void 0)),
            a || (a = !1);
          const n = t.split(' ');
          for (let r = 0; r < n.length; r += 1) {
            const e = n[r];
            for (let t = 0; t < this.length; t += 1) {
              const n = this[t];
              let r;
              if (
                (!i && n.dom7Listeners
                  ? (r = n.dom7Listeners[e])
                  : i && n.dom7LiveListeners && (r = n.dom7LiveListeners[e]),
                r && r.length)
              )
                for (let t = r.length - 1; t >= 0; t -= 1) {
                  const i = r[t];
                  (s && i.listener === s) ||
                  (s &&
                    i.listener &&
                    i.listener.dom7proxy &&
                    i.listener.dom7proxy === s)
                    ? (n.removeEventListener(e, i.proxyListener, a),
                      r.splice(t, 1))
                    : s ||
                      (n.removeEventListener(e, i.proxyListener, a),
                      r.splice(t, 1));
                }
            }
          }
          return this;
        },
        trigger: function(...e) {
          const t = e[0].split(' '),
            i = e[1];
          for (let a = 0; a < t.length; a += 1) {
            const n = t[a];
            for (let t = 0; t < this.length; t += 1) {
              const a = this[t];
              let r;
              try {
                r = new d.CustomEvent(n, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0
                });
              } catch (s) {
                (r = o.createEvent('Event')),
                  r.initEvent(n, !0, !0),
                  (r.detail = i);
              }
              (a.dom7EventData = e.filter((e, t) => t > 0)),
                a.dispatchEvent(r),
                (a.dom7EventData = []),
                delete a.dom7EventData;
            }
          }
          return this;
        },
        transitionEnd: function(e) {
          const t = ['webkitTransitionEnd', 'transitionend'],
            i = this;
          let s;
          function a(n) {
            if (n.target === this)
              for (e.call(this, n), s = 0; s < t.length; s += 1) i.off(t[s], a);
          }
          if (e) for (s = 0; s < t.length; s += 1) i.on(t[s], a);
          return this;
        },
        outerWidth: function(e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue('margin-right')) +
                parseFloat(e.getPropertyValue('margin-left'))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function(e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue('margin-top')) +
                parseFloat(e.getPropertyValue('margin-bottom'))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        offset: function() {
          if (this.length > 0) {
            const e = this[0],
              t = e.getBoundingClientRect(),
              i = o.body;
            return {
              top:
                t.top +
                (e === d ? d.scrollY : e.scrollTop) -
                (e.clientTop || i.clientTop || 0),
              left:
                t.left +
                (e === d ? d.scrollX : e.scrollLeft) -
                (e.clientLeft || i.clientLeft || 0)
            };
          }
          return null;
        },
        css: function(e, t) {
          let i;
          if (1 === arguments.length) {
            if ('string' != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (let t in e) this[i].style[t] = e[t];
              return this;
            }
            if (this[0])
              return d.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && 'string' == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function(e) {
          if (!e) return this;
          for (let t = 0; t < this.length; t += 1)
            if (!1 === e.call(this[t], t, this[t])) return this;
          return this;
        },
        html: function(e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function(e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function(e) {
          const t = this[0];
          let i, s;
          if (!t || void 0 === e) return !1;
          if ('string' == typeof e) {
            if (t.matches) return t.matches(e);
            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
            if (t.msMatchesSelector) return t.msMatchesSelector(e);
            for (i = h(e), s = 0; s < i.length; s += 1)
              if (i[s] === t) return !0;
            return !1;
          }
          if (e === o) return t === o;
          if (e === d) return t === d;
          if (e.nodeType || e instanceof p) {
            for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
              if (i[s] === t) return !0;
            return !1;
          }
          return !1;
        },
        index: function() {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function(e) {
          if (void 0 === e) return this;
          const t = this.length;
          let i;
          return e > t - 1
            ? new p([])
            : e < 0
            ? ((i = t + e), new p(i < 0 ? [] : [this[i]]))
            : new p([this[e]]);
        },
        append: function(...e) {
          let t;
          for (let i = 0; i < e.length; i += 1) {
            t = e[i];
            for (let e = 0; e < this.length; e += 1)
              if ('string' == typeof t) {
                const i = o.createElement('div');
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild);
              } else if (t instanceof p)
                for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function(e) {
          let t, i;
          for (t = 0; t < this.length; t += 1)
            if ('string' == typeof e) {
              const s = o.createElement('div');
              for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
                this[t].insertBefore(s.childNodes[i], this[t].childNodes[0]);
            } else if (e instanceof p)
              for (i = 0; i < e.length; i += 1)
                this[t].insertBefore(e[i], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function(e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                h(this[0].nextElementSibling).is(e)
                ? new p([this[0].nextElementSibling])
                : new p([])
              : new p(
                  this[0].nextElementSibling ? [this[0].nextElementSibling] : []
                )
            : new p([]);
        },
        nextAll: function(e) {
          const t = [];
          let i = this[0];
          if (!i) return new p([]);
          for (; i.nextElementSibling; ) {
            const s = i.nextElementSibling;
            e ? h(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return new p(t);
        },
        prev: function(e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && h(t.previousElementSibling).is(e)
                ? new p([t.previousElementSibling])
                : new p([])
              : new p(
                  t.previousElementSibling ? [t.previousElementSibling] : []
                );
          }
          return new p([]);
        },
        prevAll: function(e) {
          const t = [];
          let i = this[0];
          if (!i) return new p([]);
          for (; i.previousElementSibling; ) {
            const s = i.previousElementSibling;
            e ? h(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return new p(t);
        },
        parent: function(e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1)
            null !== this[i].parentNode &&
              (e
                ? h(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                : t.push(this[i].parentNode));
          return h(c(t));
        },
        parents: function(e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            let s = this[i].parentNode;
            for (; s; )
              e ? h(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
          }
          return h(c(t));
        },
        closest: function(e) {
          let t = this;
          return void 0 === e
            ? new p([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function(e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) t.push(s[e]);
          }
          return new p(t);
        },
        children: function(e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].childNodes;
            for (let i = 0; i < s.length; i += 1)
              e
                ? 1 === s[i].nodeType && h(s[i]).is(e) && t.push(s[i])
                : 1 === s[i].nodeType && t.push(s[i]);
          }
          return new p(c(t));
        },
        filter: function(e) {
          const t = [],
            i = this;
          for (let s = 0; s < i.length; s += 1)
            e.call(i[s], s, i[s]) && t.push(i[s]);
          return new p(t);
        },
        remove: function() {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
        add: function(...e) {
          const t = this;
          let i, s;
          for (i = 0; i < e.length; i += 1) {
            const a = h(e[i]);
            for (s = 0; s < a.length; s += 1)
              (t[t.length] = a[s]), (t.length += 1);
          }
          return t;
        },
        styles: function() {
          return this[0] ? d.getComputedStyle(this[0], null) : {};
        }
      };
      Object.keys(u).forEach(e => {
        h.fn[e] = h.fn[e] || u[e];
      });
      const g = {
          deleteProps(e) {
            const t = e;
            Object.keys(t).forEach(e => {
              try {
                t[e] = null;
              } catch (i) {}
              try {
                delete t[e];
              } catch (i) {}
            });
          },
          nextTick: (e, t = 0) => setTimeout(e, t),
          now: () => Date.now(),
          getTranslate(e, t = 'x') {
            let i, s, a;
            const n = d.getComputedStyle(e, null);
            return (
              d.WebKitCSSMatrix
                ? ((s = n.transform || n.webkitTransform),
                  s.split(',').length > 6 &&
                    (s = s
                      .split(', ')
                      .map(e => e.replace(',', '.'))
                      .join(', ')),
                  (a = new d.WebKitCSSMatrix('none' === s ? '' : s)))
                : ((a =
                    n.MozTransform ||
                    n.OTransform ||
                    n.MsTransform ||
                    n.msTransform ||
                    n.transform ||
                    n
                      .getPropertyValue('transform')
                      .replace('translate(', 'matrix(1, 0, 0, 1,')),
                  (i = a.toString().split(','))),
              'x' === t &&
                (s = d.WebKitCSSMatrix
                  ? a.m41
                  : 16 === i.length
                  ? parseFloat(i[12])
                  : parseFloat(i[4])),
              'y' === t &&
                (s = d.WebKitCSSMatrix
                  ? a.m42
                  : 16 === i.length
                  ? parseFloat(i[13])
                  : parseFloat(i[5])),
              s || 0
            );
          },
          parseUrlQuery(e) {
            const t = {};
            let i,
              s,
              a,
              n,
              r = e || d.location.href;
            if ('string' == typeof r && r.length)
              for (
                r = r.indexOf('?') > -1 ? r.replace(/\S*\?/, '') : '',
                  s = r.split('&').filter(e => '' !== e),
                  n = s.length,
                  i = 0;
                i < n;
                i += 1
              )
                (a = s[i].replace(/#\S+/g, '').split('=')),
                  (t[decodeURIComponent(a[0])] =
                    void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || '');
            return t;
          },
          isObject: e =>
            'object' == typeof e &&
            null !== e &&
            e.constructor &&
            e.constructor === Object,
          extend(...e) {
            const t = Object(e[0]);
            for (let i = 1; i < e.length; i += 1) {
              const s = e[i];
              if (null != s) {
                const e = Object.keys(Object(s));
                for (let i = 0, a = e.length; i < a; i += 1) {
                  const a = e[i],
                    n = Object.getOwnPropertyDescriptor(s, a);
                  void 0 !== n &&
                    n.enumerable &&
                    (g.isObject(t[a]) && g.isObject(s[a])
                      ? g.extend(t[a], s[a])
                      : !g.isObject(t[a]) && g.isObject(s[a])
                      ? ((t[a] = {}), g.extend(t[a], s[a]))
                      : (t[a] = s[a]));
                }
              }
            }
            return t;
          }
        },
        m = {
          touch: !!(
            'ontouchstart' in d ||
            (d.DocumentTouch && o instanceof d.DocumentTouch)
          ),
          pointerEvents:
            !!d.PointerEvent &&
            'maxTouchPoints' in d.navigator &&
            d.navigator.maxTouchPoints >= 0,
          observer: 'MutationObserver' in d || 'WebkitMutationObserver' in d,
          passiveListener: (function() {
            let e = !1;
            try {
              const t = Object.defineProperty({}, 'passive', {
                get() {
                  e = !0;
                }
              });
              d.addEventListener('testPassiveListener', null, t);
            } catch (t) {}
            return e;
          })(),
          gestures: 'ongesturestart' in d
        };
      class f {
        constructor(e = {}) {
          const t = this;
          (t.params = e),
            (t.eventsListeners = {}),
            t.params &&
              t.params.on &&
              Object.keys(t.params.on).forEach(e => {
                t.on(e, t.params.on[e]);
              });
        }
        on(e, t, i) {
          const s = this;
          if ('function' != typeof t) return s;
          const a = i ? 'unshift' : 'push';
          return (
            e.split(' ').forEach(e => {
              s.eventsListeners[e] || (s.eventsListeners[e] = []),
                s.eventsListeners[e][a](t);
            }),
            s
          );
        }
        once(e, t, i) {
          const s = this;
          if ('function' != typeof t) return s;
          function a(...i) {
            s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i);
          }
          return (a.f7proxy = t), s.on(e, a, i);
        }
        off(e, t) {
          const i = this;
          return i.eventsListeners
            ? (e.split(' ').forEach(e => {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].length &&
                    i.eventsListeners[e].forEach((s, a) => {
                      (s === t || (s.f7proxy && s.f7proxy === t)) &&
                        i.eventsListeners[e].splice(a, 1);
                    });
              }),
              i)
            : i;
        }
        emit(...e) {
          const t = this;
          if (!t.eventsListeners) return t;
          let i, s, a;
          return (
            'string' == typeof e[0] || Array.isArray(e[0])
              ? ((i = e[0]), (s = e.slice(1, e.length)), (a = t))
              : ((i = e[0].events), (s = e[0].data), (a = e[0].context || t)),
            (Array.isArray(i) ? i : i.split(' ')).forEach(e => {
              if (t.eventsListeners && t.eventsListeners[e]) {
                const i = [];
                t.eventsListeners[e].forEach(e => {
                  i.push(e);
                }),
                  i.forEach(e => {
                    e.apply(a, s);
                  });
              }
            }),
            t
          );
        }
        useModulesParams(e) {
          const t = this;
          t.modules &&
            Object.keys(t.modules).forEach(i => {
              const s = t.modules[i];
              s.params && g.extend(e, s.params);
            });
        }
        useModules(e = {}) {
          const t = this;
          t.modules &&
            Object.keys(t.modules).forEach(i => {
              const s = t.modules[i],
                a = e[i] || {};
              s.instance &&
                Object.keys(s.instance).forEach(e => {
                  const i = s.instance[e];
                  t[e] = 'function' == typeof i ? i.bind(t) : i;
                }),
                s.on &&
                  t.on &&
                  Object.keys(s.on).forEach(e => {
                    t.on(e, s.on[e]);
                  }),
                s.create && s.create.bind(t)(a);
            });
        }
        static set components(e) {
          this.use && this.use(e);
        }
        static installModule(e, ...t) {
          const i = this;
          i.prototype.modules || (i.prototype.modules = {});
          const s =
            e.name || `${Object.keys(i.prototype.modules).length}_${g.now()}`;
          return (
            (i.prototype.modules[s] = e),
            e.proto &&
              Object.keys(e.proto).forEach(t => {
                i.prototype[t] = e.proto[t];
              }),
            e.static &&
              Object.keys(e.static).forEach(t => {
                i[t] = e.static[t];
              }),
            e.install && e.install.apply(i, t),
            i
          );
        }
        static use(e, ...t) {
          const i = this;
          return Array.isArray(e)
            ? (e.forEach(e => i.installModule(e)), i)
            : i.installModule(e, ...t);
        }
      }
      var w = {
          updateSize: function() {
            let e, t;
            const i = this.$el;
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
                g.extend(this, {
                  width: e,
                  height: t,
                  size: this.isHorizontal() ? e : t
                }));
          },
          updateSlides: function() {
            const e = this,
              t = e.params,
              { $wrapperEl: i, size: s, rtlTranslate: a, wrongRTL: n } = e,
              r = e.virtual && t.virtual.enabled,
              o = r ? e.virtual.slides.length : e.slides.length,
              l = i.children('.' + e.params.slideClass),
              p = r ? e.virtual.slides.length : l.length;
            let h = [];
            const c = [],
              u = [];
            function m(e) {
              return !t.cssMode || e !== l.length - 1;
            }
            let f = t.slidesOffsetBefore;
            'function' == typeof f && (f = t.slidesOffsetBefore.call(e));
            let w = t.slidesOffsetAfter;
            'function' == typeof w && (w = t.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
              b = e.snapGrid.length;
            let S,
              E,
              T = t.spaceBetween,
              x = -f,
              y = 0,
              C = 0;
            if (void 0 === s) return;
            'string' == typeof T &&
              T.indexOf('%') >= 0 &&
              (T = (parseFloat(T.replace('%', '')) / 100) * s),
              (e.virtualSize = -T),
              l.css(
                a
                  ? { marginLeft: '', marginTop: '' }
                  : { marginRight: '', marginBottom: '' }
              ),
              t.slidesPerColumn > 1 &&
                ((S =
                  Math.floor(p / t.slidesPerColumn) ===
                  p / e.params.slidesPerColumn
                    ? p
                    : Math.ceil(p / t.slidesPerColumn) * t.slidesPerColumn),
                'auto' !== t.slidesPerView &&
                  'row' === t.slidesPerColumnFill &&
                  (S = Math.max(S, t.slidesPerView * t.slidesPerColumn)));
            const A = t.slidesPerColumn,
              I = S / A,
              M = Math.floor(p / t.slidesPerColumn);
            for (let g = 0; g < p; g += 1) {
              E = 0;
              const i = l.eq(g);
              if (t.slidesPerColumn > 1) {
                let s, a, n;
                if ('row' === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                  const e = Math.floor(
                      g / (t.slidesPerGroup * t.slidesPerColumn)
                    ),
                    r = g - t.slidesPerColumn * t.slidesPerGroup * e,
                    o =
                      0 === e
                        ? t.slidesPerGroup
                        : Math.min(
                            Math.ceil((p - e * A * t.slidesPerGroup) / A),
                            t.slidesPerGroup
                          );
                  (n = Math.floor(r / o)),
                    (a = r - n * o + e * t.slidesPerGroup),
                    (s = a + (n * S) / A),
                    i.css({
                      '-webkit-box-ordinal-group': s,
                      '-moz-box-ordinal-group': s,
                      '-ms-flex-order': s,
                      '-webkit-order': s,
                      order: s
                    });
                } else
                  'column' === t.slidesPerColumnFill
                    ? ((a = Math.floor(g / A)),
                      (n = g - a * A),
                      (a > M || (a === M && n === A - 1)) &&
                        ((n += 1), n >= A && ((n = 0), (a += 1))))
                    : ((n = Math.floor(g / I)), (a = g - n * I));
                i.css(
                  'margin-' + (e.isHorizontal() ? 'top' : 'left'),
                  0 !== n && t.spaceBetween && t.spaceBetween + 'px'
                );
              }
              if ('none' !== i.css('display')) {
                if ('auto' === t.slidesPerView) {
                  const s = d.getComputedStyle(i[0], null),
                    a = i[0].style.transform,
                    n = i[0].style.webkitTransform;
                  if (
                    (a && (i[0].style.transform = 'none'),
                    n && (i[0].style.webkitTransform = 'none'),
                    t.roundLengths)
                  )
                    E = e.isHorizontal() ? i.outerWidth(!0) : i.outerHeight(!0);
                  else if (e.isHorizontal()) {
                    const e = parseFloat(s.getPropertyValue('width')),
                      t = parseFloat(s.getPropertyValue('padding-left')),
                      i = parseFloat(s.getPropertyValue('padding-right')),
                      a = parseFloat(s.getPropertyValue('margin-left')),
                      n = parseFloat(s.getPropertyValue('margin-right')),
                      r = s.getPropertyValue('box-sizing');
                    E = r && 'border-box' === r ? e + a + n : e + t + i + a + n;
                  } else {
                    const e = parseFloat(s.getPropertyValue('height')),
                      t = parseFloat(s.getPropertyValue('padding-top')),
                      i = parseFloat(s.getPropertyValue('padding-bottom')),
                      a = parseFloat(s.getPropertyValue('margin-top')),
                      n = parseFloat(s.getPropertyValue('margin-bottom')),
                      r = s.getPropertyValue('box-sizing');
                    E = r && 'border-box' === r ? e + a + n : e + t + i + a + n;
                  }
                  a && (i[0].style.transform = a),
                    n && (i[0].style.webkitTransform = n),
                    t.roundLengths && (E = Math.floor(E));
                } else
                  (E = (s - (t.slidesPerView - 1) * T) / t.slidesPerView),
                    t.roundLengths && (E = Math.floor(E)),
                    l[g] &&
                      (e.isHorizontal()
                        ? (l[g].style.width = E + 'px')
                        : (l[g].style.height = E + 'px'));
                l[g] && (l[g].swiperSlideSize = E),
                  u.push(E),
                  t.centeredSlides
                    ? ((x = x + E / 2 + y / 2 + T),
                      0 === y && 0 !== g && (x = x - s / 2 - T),
                      0 === g && (x = x - s / 2 - T),
                      Math.abs(x) < 0.001 && (x = 0),
                      t.roundLengths && (x = Math.floor(x)),
                      C % t.slidesPerGroup == 0 && h.push(x),
                      c.push(x))
                    : (t.roundLengths && (x = Math.floor(x)),
                      (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                        e.params.slidesPerGroup ==
                        0 && h.push(x),
                      c.push(x),
                      (x = x + E + T)),
                  (e.virtualSize += E + T),
                  (y = E),
                  (C += 1);
              }
            }
            let k;
            if (
              ((e.virtualSize = Math.max(e.virtualSize, s) + w),
              a &&
                n &&
                ('slide' === t.effect || 'coverflow' === t.effect) &&
                i.css({ width: e.virtualSize + t.spaceBetween + 'px' }),
              t.setWrapperSize &&
                (e.isHorizontal()
                  ? i.css({ width: e.virtualSize + t.spaceBetween + 'px' })
                  : i.css({ height: e.virtualSize + t.spaceBetween + 'px' })),
              t.slidesPerColumn > 1 &&
                ((e.virtualSize = (E + t.spaceBetween) * S),
                (e.virtualSize =
                  Math.ceil(e.virtualSize / t.slidesPerColumn) -
                  t.spaceBetween),
                e.isHorizontal()
                  ? i.css({ width: e.virtualSize + t.spaceBetween + 'px' })
                  : i.css({ height: e.virtualSize + t.spaceBetween + 'px' }),
                t.centeredSlides))
            ) {
              k = [];
              for (let i = 0; i < h.length; i += 1) {
                let s = h[i];
                t.roundLengths && (s = Math.floor(s)),
                  h[i] < e.virtualSize + h[0] && k.push(s);
              }
              h = k;
            }
            if (!t.centeredSlides) {
              k = [];
              for (let i = 0; i < h.length; i += 1) {
                let a = h[i];
                t.roundLengths && (a = Math.floor(a)),
                  h[i] <= e.virtualSize - s && k.push(a);
              }
              (h = k),
                Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) >
                  1 && h.push(e.virtualSize - s);
            }
            if (
              (0 === h.length && (h = [0]),
              0 !== t.spaceBetween &&
                (e.isHorizontal()
                  ? a
                    ? l.filter(m).css({ marginLeft: T + 'px' })
                    : l.filter(m).css({ marginRight: T + 'px' })
                  : l.filter(m).css({ marginBottom: T + 'px' })),
              t.centeredSlides && t.centeredSlidesBounds)
            ) {
              let e = 0;
              u.forEach(i => {
                e += i + (t.spaceBetween ? t.spaceBetween : 0);
              }),
                (e -= t.spaceBetween);
              const i = e - s;
              h = h.map(e => (e < 0 ? -f : e > i ? i + w : e));
            }
            if (t.centerInsufficientSlides) {
              let e = 0;
              if (
                (u.forEach(i => {
                  e += i + (t.spaceBetween ? t.spaceBetween : 0);
                }),
                (e -= t.spaceBetween),
                e < s)
              ) {
                const t = (s - e) / 2;
                h.forEach((e, i) => {
                  h[i] = e - t;
                }),
                  c.forEach((e, i) => {
                    c[i] = e + t;
                  });
              }
            }
            g.extend(e, {
              slides: l,
              snapGrid: h,
              slidesGrid: c,
              slidesSizesGrid: u
            }),
              p !== o && e.emit('slidesLengthChange'),
              h.length !== v &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit('snapGridLengthChange')),
              c.length !== b && e.emit('slidesGridLengthChange'),
              (t.watchSlidesProgress || t.watchSlidesVisibility) &&
                e.updateSlidesOffset();
          },
          updateAutoHeight: function(e) {
            const t = this,
              i = [];
            let s,
              a = 0;
            if (
              ('number' == typeof e
                ? t.setTransition(e)
                : !0 === e && t.setTransition(t.params.speed),
              'auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
            )
              if (t.params.centeredSlides)
                t.visibleSlides.each((e, t) => {
                  i.push(t);
                });
              else
                for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                  const e = t.activeIndex + s;
                  if (e > t.slides.length) break;
                  i.push(t.slides.eq(e)[0]);
                }
            else i.push(t.slides.eq(t.activeIndex)[0]);
            for (s = 0; s < i.length; s += 1)
              if (void 0 !== i[s]) {
                const e = i[s].offsetHeight;
                a = e > a ? e : a;
              }
            a && t.$wrapperEl.css('height', a + 'px');
          },
          updateSlidesOffset: function() {
            const e = this,
              t = e.slides;
            for (let i = 0; i < t.length; i += 1)
              t[i].swiperSlideOffset = e.isHorizontal()
                ? t[i].offsetLeft
                : t[i].offsetTop;
          },
          updateSlidesProgress: function(e = (this && this.translate) || 0) {
            const t = this,
              i = t.params,
              { slides: s, rtlTranslate: a } = t;
            if (0 === s.length) return;
            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            a && (n = e),
              s.removeClass(i.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (let r = 0; r < s.length; r += 1) {
              const e = s[r],
                o =
                  (n +
                    (i.centeredSlides ? t.minTranslate() : 0) -
                    e.swiperSlideOffset) /
                  (e.swiperSlideSize + i.spaceBetween);
              if (
                i.watchSlidesVisibility ||
                (i.centeredSlides && i.autoHeight)
              ) {
                const a = -(n - e.swiperSlideOffset),
                  o = a + t.slidesSizesGrid[r];
                ((a >= 0 && a < t.size - 1) ||
                  (o > 1 && o <= t.size) ||
                  (a <= 0 && o >= t.size)) &&
                  (t.visibleSlides.push(e),
                  t.visibleSlidesIndexes.push(r),
                  s.eq(r).addClass(i.slideVisibleClass));
              }
              e.progress = a ? -o : o;
            }
            t.visibleSlides = h(t.visibleSlides);
          },
          updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
              const i = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * i) || 0;
            }
            const i = t.params,
              s = t.maxTranslate() - t.minTranslate();
            let { progress: a, isBeginning: n, isEnd: r } = t;
            const o = n,
              l = r;
            0 === s
              ? ((a = 0), (n = !0), (r = !0))
              : ((a = (e - t.minTranslate()) / s), (n = a <= 0), (r = a >= 1)),
              g.extend(t, { progress: a, isBeginning: n, isEnd: r }),
              (i.watchSlidesProgress ||
                i.watchSlidesVisibility ||
                (i.centeredSlides && i.autoHeight)) &&
                t.updateSlidesProgress(e),
              n && !o && t.emit('reachBeginning toEdge'),
              r && !l && t.emit('reachEnd toEdge'),
              ((o && !n) || (l && !r)) && t.emit('fromEdge'),
              t.emit('progress', a);
          },
          updateSlidesClasses: function() {
            const {
                slides: e,
                params: t,
                $wrapperEl: i,
                activeIndex: s,
                realIndex: a
              } = this,
              n = this.virtual && t.virtual.enabled;
            let r;
            e.removeClass(
              `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`
            ),
              (r = n
                ? this.$wrapperEl.find(
                    `.${t.slideClass}[data-swiper-slide-index="${s}"]`
                  )
                : e.eq(s)),
              r.addClass(t.slideActiveClass),
              t.loop &&
                (r.hasClass(t.slideDuplicateClass)
                  ? i
                      .children(
                        `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                      )
                      .addClass(t.slideDuplicateActiveClass)
                  : i
                      .children(
                        `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                      )
                      .addClass(t.slideDuplicateActiveClass));
            let o = r
              .nextAll('.' + t.slideClass)
              .eq(0)
              .addClass(t.slideNextClass);
            t.loop &&
              0 === o.length &&
              ((o = e.eq(0)), o.addClass(t.slideNextClass));
            let l = r
              .prevAll('.' + t.slideClass)
              .eq(0)
              .addClass(t.slidePrevClass);
            t.loop &&
              0 === l.length &&
              ((l = e.eq(-1)), l.addClass(t.slidePrevClass)),
              t.loop &&
                (o.hasClass(t.slideDuplicateClass)
                  ? i
                      .children(
                        `.${t.slideClass}:not(.${
                          t.slideDuplicateClass
                        })[data-swiper-slide-index="${o.attr(
                          'data-swiper-slide-index'
                        )}"]`
                      )
                      .addClass(t.slideDuplicateNextClass)
                  : i
                      .children(
                        `.${t.slideClass}.${
                          t.slideDuplicateClass
                        }[data-swiper-slide-index="${o.attr(
                          'data-swiper-slide-index'
                        )}"]`
                      )
                      .addClass(t.slideDuplicateNextClass),
                l.hasClass(t.slideDuplicateClass)
                  ? i
                      .children(
                        `.${t.slideClass}:not(.${
                          t.slideDuplicateClass
                        })[data-swiper-slide-index="${l.attr(
                          'data-swiper-slide-index'
                        )}"]`
                      )
                      .addClass(t.slideDuplicatePrevClass)
                  : i
                      .children(
                        `.${t.slideClass}.${
                          t.slideDuplicateClass
                        }[data-swiper-slide-index="${l.attr(
                          'data-swiper-slide-index'
                        )}"]`
                      )
                      .addClass(t.slideDuplicatePrevClass));
          },
          updateActiveIndex: function(e) {
            const t = this.rtlTranslate ? this.translate : -this.translate,
              {
                slidesGrid: i,
                snapGrid: s,
                params: a,
                activeIndex: n,
                realIndex: r,
                snapIndex: o
              } = this;
            let l,
              d = e;
            if (void 0 === d) {
              for (let e = 0; e < i.length; e += 1)
                void 0 !== i[e + 1]
                  ? t >= i[e] && t < i[e + 1] - (i[e + 1] - i[e]) / 2
                    ? (d = e)
                    : t >= i[e] && t < i[e + 1] && (d = e + 1)
                  : t >= i[e] && (d = e);
              a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
            }
            if (s.indexOf(t) >= 0) l = s.indexOf(t);
            else {
              const e = Math.min(a.slidesPerGroupSkip, d);
              l = e + Math.floor((d - e) / a.slidesPerGroup);
            }
            if ((l >= s.length && (l = s.length - 1), d === n))
              return void (
                l !== o && ((this.snapIndex = l), this.emit('snapIndexChange'))
              );
            const p = parseInt(
              this.slides.eq(d).attr('data-swiper-slide-index') || d,
              10
            );
            g.extend(this, {
              snapIndex: l,
              realIndex: p,
              previousIndex: n,
              activeIndex: d
            }),
              this.emit('activeIndexChange'),
              this.emit('snapIndexChange'),
              r !== p && this.emit('realIndexChange'),
              (this.initialized || this.params.runCallbacksOnInit) &&
                this.emit('slideChange');
          },
          updateClickedSlide: function(e) {
            const t = this,
              i = t.params,
              s = h(e.target).closest('.' + i.slideClass)[0];
            let a = !1;
            if (s)
              for (let n = 0; n < t.slides.length; n += 1)
                t.slides[n] === s && (a = !0);
            if (!s || !a)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = s),
              (t.clickedIndex =
                t.virtual && t.params.virtual.enabled
                  ? parseInt(h(s).attr('data-swiper-slide-index'), 10)
                  : h(s).index()),
              i.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          }
        },
        v = {
          getTranslate: function(e = this.isHorizontal() ? 'x' : 'y') {
            const {
              params: t,
              rtlTranslate: i,
              translate: s,
              $wrapperEl: a
            } = this;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            let n = g.getTranslate(a[0], e);
            return i && (n = -n), n || 0;
          },
          setTranslate: function(e, t) {
            const {
              rtlTranslate: i,
              params: s,
              $wrapperEl: a,
              wrapperEl: n,
              progress: r
            } = this;
            let o,
              l = 0,
              d = 0;
            this.isHorizontal() ? (l = i ? -e : e) : (d = e),
              s.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
              s.cssMode
                ? (n[
                    this.isHorizontal() ? 'scrollLeft' : 'scrollTop'
                  ] = this.isHorizontal() ? -l : -d)
                : s.virtualTranslate ||
                  a.transform(`translate3d(${l}px, ${d}px, 0px)`),
              (this.previousTranslate = this.translate),
              (this.translate = this.isHorizontal() ? l : d);
            const p = this.maxTranslate() - this.minTranslate();
            (o = 0 === p ? 0 : (e - this.minTranslate()) / p),
              o !== r && this.updateProgress(e),
              this.emit('setTranslate', this.translate, t);
          },
          minTranslate: function() {
            return -this.snapGrid[0];
          },
          maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function(
            e = 0,
            t = this.params.speed,
            i = !0,
            s = !0,
            a
          ) {
            const n = this,
              { params: r, wrapperEl: o } = n;
            if (n.animating && r.preventInteractionOnTransition) return !1;
            const l = n.minTranslate(),
              d = n.maxTranslate();
            let p;
            if (
              ((p = s && e > l ? l : s && e < d ? d : e),
              n.updateProgress(p),
              r.cssMode)
            ) {
              const e = n.isHorizontal();
              return (
                0 === t
                  ? (o[e ? 'scrollLeft' : 'scrollTop'] = -p)
                  : o.scrollTo
                  ? o.scrollTo({ [e ? 'left' : 'top']: -p, behavior: 'smooth' })
                  : (o[e ? 'scrollLeft' : 'scrollTop'] = -p),
                !0
              );
            }
            return (
              0 === t
                ? (n.setTransition(0),
                  n.setTranslate(p),
                  i &&
                    (n.emit('beforeTransitionStart', t, a),
                    n.emit('transitionEnd')))
                : (n.setTransition(t),
                  n.setTranslate(p),
                  i &&
                    (n.emit('beforeTransitionStart', t, a),
                    n.emit('transitionStart')),
                  n.animating ||
                    ((n.animating = !0),
                    n.onTranslateToWrapperTransitionEnd ||
                      (n.onTranslateToWrapperTransitionEnd = function(e) {
                        n &&
                          !n.destroyed &&
                          e.target === this &&
                          (n.$wrapperEl[0].removeEventListener(
                            'transitionend',
                            n.onTranslateToWrapperTransitionEnd
                          ),
                          n.$wrapperEl[0].removeEventListener(
                            'webkitTransitionEnd',
                            n.onTranslateToWrapperTransitionEnd
                          ),
                          (n.onTranslateToWrapperTransitionEnd = null),
                          delete n.onTranslateToWrapperTransitionEnd,
                          i && n.emit('transitionEnd'));
                      }),
                    n.$wrapperEl[0].addEventListener(
                      'transitionend',
                      n.onTranslateToWrapperTransitionEnd
                    ),
                    n.$wrapperEl[0].addEventListener(
                      'webkitTransitionEnd',
                      n.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          }
        },
        b = {
          slideTo: function(e = 0, t = this.params.speed, i = !0, s) {
            const a = this;
            let n = e;
            n < 0 && (n = 0);
            const {
              params: r,
              snapGrid: o,
              slidesGrid: l,
              previousIndex: d,
              activeIndex: p,
              rtlTranslate: h,
              wrapperEl: c
            } = a;
            if (a.animating && r.preventInteractionOnTransition) return !1;
            const u = Math.min(a.params.slidesPerGroupSkip, n);
            let g = u + Math.floor((n - u) / a.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1),
              (p || r.initialSlide || 0) === (d || 0) &&
                i &&
                a.emit('beforeSlideChangeStart');
            const m = -o[g];
            if ((a.updateProgress(m), r.normalizeSlideIndex))
              for (let w = 0; w < l.length; w += 1)
                -Math.floor(100 * m) >= Math.floor(100 * l[w]) && (n = w);
            if (a.initialized && n !== p) {
              if (!a.allowSlideNext && m < a.translate && m < a.minTranslate())
                return !1;
              if (
                !a.allowSlidePrev &&
                m > a.translate &&
                m > a.maxTranslate() &&
                (p || 0) !== n
              )
                return !1;
            }
            let f;
            if (
              ((f = n > p ? 'next' : n < p ? 'prev' : 'reset'),
              (h && -m === a.translate) || (!h && m === a.translate))
            )
              return (
                a.updateActiveIndex(n),
                r.autoHeight && a.updateAutoHeight(),
                a.updateSlidesClasses(),
                'slide' !== r.effect && a.setTranslate(m),
                'reset' !== f &&
                  (a.transitionStart(i, f), a.transitionEnd(i, f)),
                !1
              );
            if (r.cssMode) {
              const e = a.isHorizontal();
              let i = -m;
              return (
                h && (i = c.scrollWidth - c.offsetWidth - i),
                0 === t
                  ? (c[e ? 'scrollLeft' : 'scrollTop'] = i)
                  : c.scrollTo
                  ? c.scrollTo({ [e ? 'left' : 'top']: i, behavior: 'smooth' })
                  : (c[e ? 'scrollLeft' : 'scrollTop'] = i),
                !0
              );
            }
            return (
              0 === t
                ? (a.setTransition(0),
                  a.setTranslate(m),
                  a.updateActiveIndex(n),
                  a.updateSlidesClasses(),
                  a.emit('beforeTransitionStart', t, s),
                  a.transitionStart(i, f),
                  a.transitionEnd(i, f))
                : (a.setTransition(t),
                  a.setTranslate(m),
                  a.updateActiveIndex(n),
                  a.updateSlidesClasses(),
                  a.emit('beforeTransitionStart', t, s),
                  a.transitionStart(i, f),
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
                          a.transitionEnd(i, f));
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
          slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
            let a = e;
            return (
              this.params.loop && (a += this.loopedSlides),
              this.slideTo(a, t, i, s)
            );
          },
          slideNext: function(e = this.params.speed, t = !0, i) {
            const s = this,
              { params: a, animating: n } = s,
              r = s.activeIndex < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup;
            if (a.loop) {
              if (n) return !1;
              s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
            }
            return s.slideTo(s.activeIndex + r, e, t, i);
          },
          slidePrev: function(e = this.params.speed, t = !0, i) {
            const s = this,
              {
                params: a,
                animating: n,
                snapGrid: r,
                slidesGrid: o,
                rtlTranslate: l
              } = s;
            if (a.loop) {
              if (n) return !1;
              s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
            }
            function d(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const p = d(l ? s.translate : -s.translate),
              h = r.map(e => d(e));
            o.map(e => d(e)), h.indexOf(p);
            let c,
              u = r[h.indexOf(p) - 1];
            return (
              void 0 === u &&
                a.cssMode &&
                r.forEach(e => {
                  !u && p >= e && (u = e);
                }),
              void 0 !== u &&
                ((c = o.indexOf(u)), c < 0 && (c = s.activeIndex - 1)),
              s.slideTo(c, e, t, i)
            );
          },
          slideReset: function(e = this.params.speed, t = !0, i) {
            return this.slideTo(this.activeIndex, e, t, i);
          },
          slideToClosest: function(e = this.params.speed, t = !0, i, s = 0.5) {
            const a = this;
            let n = a.activeIndex;
            const r = Math.min(a.params.slidesPerGroupSkip, n),
              o = r + Math.floor((n - r) / a.params.slidesPerGroup),
              l = a.rtlTranslate ? a.translate : -a.translate;
            if (l >= a.snapGrid[o]) {
              const e = a.snapGrid[o];
              l - e > (a.snapGrid[o + 1] - e) * s &&
                (n += a.params.slidesPerGroup);
            } else {
              const e = a.snapGrid[o - 1];
              l - e <= (a.snapGrid[o] - e) * s &&
                (n -= a.params.slidesPerGroup);
            }
            return (
              (n = Math.max(n, 0)),
              (n = Math.min(n, a.slidesGrid.length - 1)),
              a.slideTo(n, e, t, i)
            );
          },
          slideToClickedSlide: function() {
            const e = this,
              { params: t, $wrapperEl: i } = e,
              s =
                'auto' === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let a,
              n = e.clickedIndex;
            if (t.loop) {
              if (e.animating) return;
              (a = parseInt(
                h(e.clickedSlide).attr('data-swiper-slide-index'),
                10
              )),
                t.centeredSlides
                  ? n < e.loopedSlides - s / 2 ||
                    n > e.slides.length - e.loopedSlides + s / 2
                    ? (e.loopFix(),
                      (n = i
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      g.nextTick(() => {
                        e.slideTo(n);
                      }))
                    : e.slideTo(n)
                  : n > e.slides.length - s
                  ? (e.loopFix(),
                    (n = i
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    g.nextTick(() => {
                      e.slideTo(n);
                    }))
                  : e.slideTo(n);
            } else e.slideTo(n);
          }
        },
        S = {
          loopCreate: function() {
            const e = this,
              { params: t, $wrapperEl: i } = e;
            i.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
            let s = i.children('.' + t.slideClass);
            if (t.loopFillGroupWithBlank) {
              const e = t.slidesPerGroup - (s.length % t.slidesPerGroup);
              if (e !== t.slidesPerGroup) {
                for (let s = 0; s < e; s += 1) {
                  const e = h(o.createElement('div')).addClass(
                    `${t.slideClass} ${t.slideBlankClass}`
                  );
                  i.append(e);
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
            const a = [],
              n = [];
            s.each((t, i) => {
              const r = h(i);
              t < e.loopedSlides && n.push(i),
                t < s.length && t >= s.length - e.loopedSlides && a.push(i),
                r.attr('data-swiper-slide-index', t);
            });
            for (let r = 0; r < n.length; r += 1)
              i.append(h(n[r].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (let r = a.length - 1; r >= 0; r -= 1)
              i.prepend(h(a[r].cloneNode(!0)).addClass(t.slideDuplicateClass));
          },
          loopFix: function() {
            this.emit('beforeLoopFix');
            const {
              activeIndex: e,
              slides: t,
              loopedSlides: i,
              allowSlidePrev: s,
              allowSlideNext: a,
              snapGrid: n,
              rtlTranslate: r
            } = this;
            let o;
            (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
            const l = -n[e] - this.getTranslate();
            e < i
              ? ((o = t.length - 3 * i + e),
                (o += i),
                this.slideTo(o, 0, !1, !0) &&
                  0 !== l &&
                  this.setTranslate((r ? -this.translate : this.translate) - l))
              : e >= t.length - i &&
                ((o = -t.length + e + i),
                (o += i),
                this.slideTo(o, 0, !1, !0) &&
                  0 !== l &&
                  this.setTranslate(
                    (r ? -this.translate : this.translate) - l
                  )),
              (this.allowSlidePrev = s),
              (this.allowSlideNext = a),
              this.emit('loopFix');
          },
          loopDestroy: function() {
            const { $wrapperEl: e, params: t, slides: i } = this;
            e
              .children(
                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
              )
              .remove(),
              i.removeAttr('data-swiper-slide-index');
          }
        },
        E = {
          setGrabCursor: function(e) {
            if (
              m.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode
            )
              return;
            const t = this.el;
            (t.style.cursor = 'move'),
              (t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
              (t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
              (t.style.cursor = e ? 'grabbing' : 'grab');
          },
          unsetGrabCursor: function() {
            m.touch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode ||
              (this.el.style.cursor = '');
          }
        },
        T = {
          appendSlide: function(e) {
            const { $wrapperEl: t, params: i } = this;
            if (
              (i.loop && this.loopDestroy(),
              'object' == typeof e && 'length' in e)
            )
              for (let s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
            else t.append(e);
            i.loop && this.loopCreate(),
              (i.observer && m.observer) || this.update();
          },
          prependSlide: function(e) {
            const { params: t, $wrapperEl: i, activeIndex: s } = this;
            t.loop && this.loopDestroy();
            let a = s + 1;
            if ('object' == typeof e && 'length' in e) {
              for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
              a = s + e.length;
            } else i.prepend(e);
            t.loop && this.loopCreate(),
              (t.observer && m.observer) || this.update(),
              this.slideTo(a, 0, !1);
          },
          addSlide: function(e, t) {
            const i = this,
              { $wrapperEl: s, params: a, activeIndex: n } = i;
            let r = n;
            a.loop &&
              ((r -= i.loopedSlides),
              i.loopDestroy(),
              (i.slides = s.children('.' + a.slideClass)));
            const o = i.slides.length;
            if (e <= 0) return void i.prependSlide(t);
            if (e >= o) return void i.appendSlide(t);
            let l = r > e ? r + 1 : r;
            const d = [];
            for (let p = o - 1; p >= e; p -= 1) {
              const e = i.slides.eq(p);
              e.remove(), d.unshift(e);
            }
            if ('object' == typeof t && 'length' in t) {
              for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
              l = r > e ? r + t.length : r;
            } else s.append(t);
            for (let p = 0; p < d.length; p += 1) s.append(d[p]);
            a.loop && i.loopCreate(),
              (a.observer && m.observer) || i.update(),
              i.slideTo(a.loop ? l + i.loopedSlides : l, 0, !1);
          },
          removeSlide: function(e) {
            const t = this,
              { params: i, $wrapperEl: s, activeIndex: a } = t;
            let n = a;
            i.loop &&
              ((n -= t.loopedSlides),
              t.loopDestroy(),
              (t.slides = s.children('.' + i.slideClass)));
            let r,
              o = n;
            if ('object' == typeof e && 'length' in e) {
              for (let i = 0; i < e.length; i += 1)
                (r = e[i]),
                  t.slides[r] && t.slides.eq(r).remove(),
                  r < o && (o -= 1);
              o = Math.max(o, 0);
            } else
              (r = e),
                t.slides[r] && t.slides.eq(r).remove(),
                r < o && (o -= 1),
                (o = Math.max(o, 0));
            i.loop && t.loopCreate(),
              (i.observer && m.observer) || t.update(),
              t.slideTo(i.loop ? o + t.loopedSlides : o, 0, !1);
          },
          removeAllSlides: function() {
            const e = this,
              t = [];
            for (let i = 0; i < e.slides.length; i += 1) t.push(i);
            e.removeSlide(t);
          }
        };
      const x = (function() {
        const e = d.navigator.platform,
          t = d.navigator.userAgent,
          i = {
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
            cordova: !(!d.cordova && !d.phonegap),
            phonegap: !(!d.cordova && !d.phonegap),
            electron: !1
          },
          s = d.screen.width,
          a = d.screen.height,
          n = t.match(/(Android);?[\s\/]+([\d.]+)?/);
        let r = t.match(/(iPad).*OS\s([\d_]+)/);
        const o = t.match(/(iPod)(.*OS\s([\d_]+))?/),
          l = !r && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          p = t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0,
          h = t.indexOf('Edge/') >= 0,
          c = t.indexOf('Gecko/') >= 0 && t.indexOf('Firefox/') >= 0,
          u = 'Win32' === e,
          g = t.toLowerCase().indexOf('electron') >= 0;
        let f = 'MacIntel' === e;
        return (
          !r &&
            f &&
            m.touch &&
            ((1024 === s && 1366 === a) ||
              (834 === s && 1194 === a) ||
              (834 === s && 1112 === a) ||
              (768 === s && 1024 === a)) &&
            ((r = t.match(/(Version)\/([\d.]+)/)), (f = !1)),
          (i.ie = p),
          (i.edge = h),
          (i.firefox = c),
          n &&
            !u &&
            ((i.os = 'android'),
            (i.osVersion = n[2]),
            (i.android = !0),
            (i.androidChrome = t.toLowerCase().indexOf('chrome') >= 0)),
          (r || l || o) && ((i.os = 'ios'), (i.ios = !0)),
          l && !o && ((i.osVersion = l[2].replace(/_/g, '.')), (i.iphone = !0)),
          r && ((i.osVersion = r[2].replace(/_/g, '.')), (i.ipad = !0)),
          o &&
            ((i.osVersion = o[3] ? o[3].replace(/_/g, '.') : null),
            (i.ipod = !0)),
          i.ios &&
            i.osVersion &&
            t.indexOf('Version/') >= 0 &&
            '10' === i.osVersion.split('.')[0] &&
            (i.osVersion = t
              .toLowerCase()
              .split('version/')[1]
              .split(' ')[0]),
          (i.webView =
            !(
              !(l || r || o) ||
              (!t.match(/.*AppleWebKit(?!.*Safari)/i) &&
                !d.navigator.standalone)
            ) ||
            (d.matchMedia &&
              d.matchMedia('(display-mode: standalone)').matches)),
          (i.webview = i.webView),
          (i.standalone = i.webView),
          (i.desktop = !(i.ios || i.android) || g),
          i.desktop &&
            ((i.electron = g),
            (i.macos = f),
            (i.windows = u),
            i.macos && (i.os = 'macos'),
            i.windows && (i.os = 'windows')),
          (i.pixelRatio = d.devicePixelRatio || 1),
          i
        );
      })();
      function y(e) {
        const t = this,
          i = t.touchEventsData,
          { params: s, touches: a } = t;
        if (t.animating && s.preventInteractionOnTransition) return;
        let n = e;
        n.originalEvent && (n = n.originalEvent);
        const r = h(n.target);
        if ('wrapper' === s.touchEventsTarget && !r.closest(t.wrapperEl).length)
          return;
        if (
          ((i.isTouchEvent = 'touchstart' === n.type),
          !i.isTouchEvent && 'which' in n && 3 === n.which)
        )
          return;
        if (!i.isTouchEvent && 'button' in n && n.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        if (
          s.noSwiping &&
          r.closest(
            s.noSwipingSelector ? s.noSwipingSelector : '.' + s.noSwipingClass
          )[0]
        )
          return void (t.allowClick = !0);
        if (s.swipeHandler && !r.closest(s.swipeHandler)[0]) return;
        (a.currentX =
          'touchstart' === n.type ? n.targetTouches[0].pageX : n.pageX),
          (a.currentY =
            'touchstart' === n.type ? n.targetTouches[0].pageY : n.pageY);
        const l = a.currentX,
          p = a.currentY,
          c = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (
          (!s.edgeSwipeDetection && !s.iOSEdgeSwipeDetection) ||
          !(l <= c || l >= d.screen.width - c)
        ) {
          if (
            (g.extend(i, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0
            }),
            (a.startX = l),
            (a.startY = p),
            (i.touchStartTime = g.now()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            s.threshold > 0 && (i.allowThresholdMove = !1),
            'touchstart' !== n.type)
          ) {
            let e = !0;
            r.is(i.formElements) && (e = !1),
              o.activeElement &&
                h(o.activeElement).is(i.formElements) &&
                o.activeElement !== r[0] &&
                o.activeElement.blur();
            const a = e && t.allowTouchMove && s.touchStartPreventDefault;
            (s.touchStartForcePreventDefault || a) && n.preventDefault();
          }
          t.emit('touchStart', n);
        }
      }
      function C(e) {
        const t = this,
          i = t.touchEventsData,
          { params: s, touches: a, rtlTranslate: n } = t;
        let r = e;
        if ((r.originalEvent && (r = r.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            t.emit('touchMoveOpposite', r)
          );
        if (i.isTouchEvent && 'touchmove' !== r.type) return;
        const l =
            'touchmove' === r.type &&
            r.targetTouches &&
            (r.targetTouches[0] || r.changedTouches[0]),
          d = 'touchmove' === r.type ? l.pageX : r.pageX,
          p = 'touchmove' === r.type ? l.pageY : r.pageY;
        if (r.preventedByNestedSwiper)
          return (a.startX = d), void (a.startY = p);
        if (!t.allowTouchMove)
          return (
            (t.allowClick = !1),
            void (
              i.isTouched &&
              (g.extend(a, { startX: d, startY: p, currentX: d, currentY: p }),
              (i.touchStartTime = g.now()))
            )
          );
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (t.isVertical()) {
            if (
              (p < a.startY && t.translate <= t.maxTranslate()) ||
              (p > a.startY && t.translate >= t.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (d < a.startX && t.translate <= t.maxTranslate()) ||
            (d > a.startX && t.translate >= t.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          o.activeElement &&
          r.target === o.activeElement &&
          h(r.target).is(i.formElements)
        )
          return (i.isMoved = !0), void (t.allowClick = !1);
        if (
          (i.allowTouchCallbacks && t.emit('touchMove', r),
          r.targetTouches && r.targetTouches.length > 1)
        )
          return;
        (a.currentX = d), (a.currentY = p);
        const c = a.currentX - a.startX,
          u = a.currentY - a.startY;
        if (
          t.params.threshold &&
          Math.sqrt(c ** 2 + u ** 2) < t.params.threshold
        )
          return;
        if (void 0 === i.isScrolling) {
          let e;
          (t.isHorizontal() && a.currentY === a.startY) ||
          (t.isVertical() && a.currentX === a.startX)
            ? (i.isScrolling = !1)
            : c * c + u * u >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(u), Math.abs(c))) / Math.PI),
              (i.isScrolling = t.isHorizontal()
                ? e > s.touchAngle
                : 90 - e > s.touchAngle));
        }
        if (
          (i.isScrolling && t.emit('touchMoveOpposite', r),
          void 0 === i.startMoving &&
            ((a.currentX === a.startX && a.currentY === a.startY) ||
              (i.startMoving = !0)),
          i.isScrolling)
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (t.allowClick = !1),
          !s.cssMode && r.cancelable && r.preventDefault(),
          s.touchMoveStopPropagation && !s.nested && r.stopPropagation(),
          i.isMoved ||
            (s.loop && t.loopFix(),
            (i.startTranslate = t.getTranslate()),
            t.setTransition(0),
            t.animating &&
              t.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
            (i.allowMomentumBounce = !1),
            !s.grabCursor ||
              (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
              t.setGrabCursor(!0),
            t.emit('sliderFirstMove', r)),
          t.emit('sliderMove', r),
          (i.isMoved = !0);
        let m = t.isHorizontal() ? c : u;
        (a.diff = m),
          (m *= s.touchRatio),
          n && (m = -m),
          (t.swipeDirection = m > 0 ? 'prev' : 'next'),
          (i.currentTranslate = m + i.startTranslate);
        let f = !0,
          w = s.resistanceRatio;
        if (
          (s.touchReleaseOnEdges && (w = 0),
          m > 0 && i.currentTranslate > t.minTranslate()
            ? ((f = !1),
              s.resistance &&
                (i.currentTranslate =
                  t.minTranslate() -
                  1 +
                  (-t.minTranslate() + i.startTranslate + m) ** w))
            : m < 0 &&
              i.currentTranslate < t.maxTranslate() &&
              ((f = !1),
              s.resistance &&
                (i.currentTranslate =
                  t.maxTranslate() +
                  1 -
                  (t.maxTranslate() - i.startTranslate - m) ** w)),
          f && (r.preventedByNestedSwiper = !0),
          !t.allowSlideNext &&
            'next' === t.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !t.allowSlidePrev &&
            'prev' === t.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          s.threshold > 0)
        ) {
          if (!(Math.abs(m) > s.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (a.startX = a.currentX),
              (a.startY = a.currentY),
              (i.currentTranslate = i.startTranslate),
              void (a.diff = t.isHorizontal()
                ? a.currentX - a.startX
                : a.currentY - a.startY)
            );
        }
        s.followFinger &&
          !s.cssMode &&
          ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) &&
            (t.updateActiveIndex(), t.updateSlidesClasses()),
          s.freeMode &&
            (0 === i.velocities.length &&
              i.velocities.push({
                position: a[t.isHorizontal() ? 'startX' : 'startY'],
                time: i.touchStartTime
              }),
            i.velocities.push({
              position: a[t.isHorizontal() ? 'currentX' : 'currentY'],
              time: g.now()
            })),
          t.updateProgress(i.currentTranslate),
          t.setTranslate(i.currentTranslate));
      }
      function A(e) {
        const t = this,
          i = t.touchEventsData,
          {
            params: s,
            touches: a,
            rtlTranslate: n,
            $wrapperEl: r,
            slidesGrid: o,
            snapGrid: l
          } = t;
        let d = e;
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
        const p = g.now(),
          h = p - i.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(d),
            t.emit('tap click', d),
            h < 300 &&
              p - i.lastClickTime < 300 &&
              t.emit('doubleTap doubleClick', d)),
          (i.lastClickTime = g.now()),
          g.nextTick(() => {
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
        let c;
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (c = s.followFinger
            ? n
              ? t.translate
              : -t.translate
            : -i.currentTranslate),
          s.cssMode)
        )
          return;
        if (s.freeMode) {
          if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (c > -t.maxTranslate())
            return void t.slideTo(
              t.slides.length < l.length ? l.length - 1 : t.slides.length - 1
            );
          if (s.freeModeMomentum) {
            if (i.velocities.length > 1) {
              const e = i.velocities.pop(),
                a = i.velocities.pop(),
                n = e.time - a.time;
              (t.velocity = (e.position - a.position) / n),
                (t.velocity /= 2),
                Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                  (t.velocity = 0),
                (n > 150 || g.now() - e.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;
            (t.velocity *= s.freeModeMomentumVelocityRatio),
              (i.velocities.length = 0);
            let e = 1e3 * s.freeModeMomentumRatio,
              a = t.translate + t.velocity * e;
            n && (a = -a);
            let o,
              d = !1;
            const p = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
            let h;
            if (a < t.maxTranslate())
              s.freeModeMomentumBounce
                ? (a + t.maxTranslate() < -p && (a = t.maxTranslate() - p),
                  (o = t.maxTranslate()),
                  (d = !0),
                  (i.allowMomentumBounce = !0))
                : (a = t.maxTranslate()),
                s.loop && s.centeredSlides && (h = !0);
            else if (a > t.minTranslate())
              s.freeModeMomentumBounce
                ? (a - t.minTranslate() > p && (a = t.minTranslate() + p),
                  (o = t.minTranslate()),
                  (d = !0),
                  (i.allowMomentumBounce = !0))
                : (a = t.minTranslate()),
                s.loop && s.centeredSlides && (h = !0);
            else if (s.freeModeSticky) {
              let e;
              for (let t = 0; t < l.length; t += 1)
                if (l[t] > -a) {
                  e = t;
                  break;
                }
              (a =
                Math.abs(l[e] - a) < Math.abs(l[e - 1] - a) ||
                'next' === t.swipeDirection
                  ? l[e]
                  : l[e - 1]),
                (a = -a);
            }
            if (
              (h &&
                t.once('transitionEnd', () => {
                  t.loopFix();
                }),
              0 !== t.velocity)
            ) {
              if (
                ((e = n
                  ? Math.abs((-a - t.translate) / t.velocity)
                  : Math.abs((a - t.translate) / t.velocity)),
                s.freeModeSticky)
              ) {
                const i = Math.abs((n ? -a : a) - t.translate),
                  r = t.slidesSizesGrid[t.activeIndex];
                e = i < r ? s.speed : i < 2 * r ? 1.5 * s.speed : 2.5 * s.speed;
              }
            } else if (s.freeModeSticky) return void t.slideToClosest();
            s.freeModeMomentumBounce && d
              ? (t.updateProgress(o),
                t.setTransition(e),
                t.setTranslate(a),
                t.transitionStart(!0, t.swipeDirection),
                (t.animating = !0),
                r.transitionEnd(() => {
                  t &&
                    !t.destroyed &&
                    i.allowMomentumBounce &&
                    (t.emit('momentumBounce'),
                    t.setTransition(s.speed),
                    setTimeout(() => {
                      t.setTranslate(o),
                        r.transitionEnd(() => {
                          t && !t.destroyed && t.transitionEnd();
                        });
                    }, 0));
                }))
              : t.velocity
              ? (t.updateProgress(a),
                t.setTransition(e),
                t.setTranslate(a),
                t.transitionStart(!0, t.swipeDirection),
                t.animating ||
                  ((t.animating = !0),
                  r.transitionEnd(() => {
                    t && !t.destroyed && t.transitionEnd();
                  })))
              : t.updateProgress(a),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          } else if (s.freeModeSticky) return void t.slideToClosest();
          return void (
            (!s.freeModeMomentum || h >= s.longSwipesMs) &&
            (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
          );
        }
        let u = 0,
          m = t.slidesSizesGrid[0];
        for (
          let g = 0;
          g < o.length;
          g += g < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          const e = g < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== o[g + e]
            ? c >= o[g] && c < o[g + e] && ((u = g), (m = o[g + e] - o[g]))
            : c >= o[g] && ((u = g), (m = o[o.length - 1] - o[o.length - 2]));
        }
        const f = (c - o[u]) / m,
          w = u < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (h > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          'next' === t.swipeDirection &&
            t.slideTo(f >= s.longSwipesRatio ? u + w : u),
            'prev' === t.swipeDirection &&
              t.slideTo(f > 1 - s.longSwipesRatio ? u + w : u);
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation ||
          (d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl)
            ? ('next' === t.swipeDirection && t.slideTo(u + w),
              'prev' === t.swipeDirection && t.slideTo(u))
            : t.slideTo(d.target === t.navigation.nextEl ? u + w : u);
        }
      }
      function I() {
        const { params: e, el: t } = this;
        if (t && 0 === t.offsetWidth) return;
        e.breakpoints && this.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: s, snapGrid: a } = this;
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
      function M(e) {
        this.allowClick ||
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function k() {
        const { wrapperEl: e, rtlTranslate: t } = this;
        let i;
        (this.previousTranslate = this.translate),
          (this.translate = this.isHorizontal()
            ? t
              ? e.scrollWidth - e.offsetWidth - e.scrollLeft
              : -e.scrollLeft
            : -e.scrollTop),
          -0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        const s = this.maxTranslate() - this.minTranslate();
        (i = 0 === s ? 0 : (this.translate - this.minTranslate()) / s),
          i !== this.progress &&
            this.updateProgress(t ? -this.translate : this.translate),
          this.emit('setTranslate', this.translate, !1);
      }
      let P = !1;
      function O() {}
      var $ = {
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
      };
      const z = {
          update: w,
          translate: v,
          transition: {
            setTransition: function(e, t) {
              this.params.cssMode || this.$wrapperEl.transition(e),
                this.emit('setTransition', e, t);
            },
            transitionStart: function(e = !0, t) {
              const i = this,
                { activeIndex: s, params: a, previousIndex: n } = i;
              if (a.cssMode) return;
              a.autoHeight && i.updateAutoHeight();
              let r = t;
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
            },
            transitionEnd: function(e = !0, t) {
              const i = this,
                { activeIndex: s, previousIndex: a, params: n } = i;
              if (((i.animating = !1), n.cssMode)) return;
              i.setTransition(0);
              let r = t;
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
          },
          slide: b,
          loop: S,
          grabCursor: E,
          manipulation: T,
          events: {
            attachEvents: function() {
              const e = this,
                { params: t, touchEvents: i, el: s, wrapperEl: a } = e;
              (e.onTouchStart = y.bind(e)),
                (e.onTouchMove = C.bind(e)),
                (e.onTouchEnd = A.bind(e)),
                t.cssMode && (e.onScroll = k.bind(e)),
                (e.onClick = M.bind(e));
              const n = !!t.nested;
              if (!m.touch && m.pointerEvents)
                s.addEventListener(i.start, e.onTouchStart, !1),
                  o.addEventListener(i.move, e.onTouchMove, n),
                  o.addEventListener(i.end, e.onTouchEnd, !1);
              else {
                if (m.touch) {
                  const a = !(
                    'touchstart' !== i.start ||
                    !m.passiveListener ||
                    !t.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  s.addEventListener(i.start, e.onTouchStart, a),
                    s.addEventListener(
                      i.move,
                      e.onTouchMove,
                      m.passiveListener ? { passive: !1, capture: n } : n
                    ),
                    s.addEventListener(i.end, e.onTouchEnd, a),
                    i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, a),
                    P || (o.addEventListener('touchstart', O), (P = !0));
                }
                ((t.simulateTouch && !x.ios && !x.android) ||
                  (t.simulateTouch && !m.touch && x.ios)) &&
                  (s.addEventListener('mousedown', e.onTouchStart, !1),
                  o.addEventListener('mousemove', e.onTouchMove, n),
                  o.addEventListener('mouseup', e.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) &&
                s.addEventListener('click', e.onClick, !0),
                t.cssMode && a.addEventListener('scroll', e.onScroll),
                e.on(
                  t.updateOnWindowResize
                    ? x.ios || x.android
                      ? 'resize orientationchange observerUpdate'
                      : 'resize observerUpdate'
                    : 'observerUpdate',
                  I,
                  !0
                );
            },
            detachEvents: function() {
              const e = this,
                { params: t, touchEvents: i, el: s, wrapperEl: a } = e,
                n = !!t.nested;
              if (!m.touch && m.pointerEvents)
                s.removeEventListener(i.start, e.onTouchStart, !1),
                  o.removeEventListener(i.move, e.onTouchMove, n),
                  o.removeEventListener(i.end, e.onTouchEnd, !1);
              else {
                if (m.touch) {
                  const a = !(
                    'onTouchStart' !== i.start ||
                    !m.passiveListener ||
                    !t.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  s.removeEventListener(i.start, e.onTouchStart, a),
                    s.removeEventListener(i.move, e.onTouchMove, n),
                    s.removeEventListener(i.end, e.onTouchEnd, a),
                    i.cancel &&
                      s.removeEventListener(i.cancel, e.onTouchEnd, a);
                }
                ((t.simulateTouch && !x.ios && !x.android) ||
                  (t.simulateTouch && !m.touch && x.ios)) &&
                  (s.removeEventListener('mousedown', e.onTouchStart, !1),
                  o.removeEventListener('mousemove', e.onTouchMove, n),
                  o.removeEventListener('mouseup', e.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) &&
                s.removeEventListener('click', e.onClick, !0),
                t.cssMode && a.removeEventListener('scroll', e.onScroll),
                e.off(
                  x.ios || x.android
                    ? 'resize orientationchange observerUpdate'
                    : 'resize observerUpdate',
                  I
                );
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  activeIndex: t,
                  initialized: i,
                  loopedSlides: s = 0,
                  params: a,
                  $el: n
                } = e,
                r = a.breakpoints;
              if (!r || (r && 0 === Object.keys(r).length)) return;
              const o = e.getBreakpoint(r);
              if (o && e.currentBreakpoint !== o) {
                const l = o in r ? r[o] : void 0;
                l &&
                  [
                    'slidesPerView',
                    'spaceBetween',
                    'slidesPerGroup',
                    'slidesPerGroupSkip',
                    'slidesPerColumn'
                  ].forEach(e => {
                    const t = l[e];
                    void 0 !== t &&
                      (l[e] =
                        'slidesPerView' !== e || ('AUTO' !== t && 'auto' !== t)
                          ? 'slidesPerView' === e
                            ? parseFloat(t)
                            : parseInt(t, 10)
                          : 'auto');
                  });
                const d = l || e.originalParams,
                  p = a.slidesPerColumn > 1,
                  h = d.slidesPerColumn > 1;
                p && !h
                  ? n.removeClass(
                      `${a.containerModifierClass}multirow ${a.containerModifierClass}multirow-column`
                    )
                  : !p &&
                    h &&
                    (n.addClass(a.containerModifierClass + 'multirow'),
                    'column' === d.slidesPerColumnFill &&
                      n.addClass(a.containerModifierClass + 'multirow-column'));
                const c = d.direction && d.direction !== a.direction,
                  u = a.loop && (d.slidesPerView !== a.slidesPerView || c);
                c && i && e.changeDirection(),
                  g.extend(e.params, d),
                  g.extend(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                  }),
                  (e.currentBreakpoint = o),
                  u &&
                    i &&
                    (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - s + e.loopedSlides, 0, !1)),
                  e.emit('breakpoint', d);
              }
            },
            getBreakpoint: function(e) {
              if (!e) return;
              let t = !1;
              const i = Object.keys(e).map(e => {
                if ('string' == typeof e && 0 === e.indexOf('@')) {
                  const t = parseFloat(e.substr(1));
                  return { value: d.innerHeight * t, point: e };
                }
                return { value: e, point: e };
              });
              i.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let s = 0; s < i.length; s += 1) {
                const { point: e, value: a } = i[s];
                a <= d.innerWidth && (t = e);
              }
              return t || 'max';
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this.params,
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
              const { classNames: e, params: t, rtl: i, $el: s } = this,
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
                x.android && a.push('android'),
                x.ios && a.push('ios'),
                t.cssMode && a.push('css-mode'),
                a.forEach(i => {
                  e.push(t.containerModifierClass + i);
                }),
                s.addClass(e.join(' '));
            },
            removeClasses: function() {
              const { $el: e, classNames: t } = this;
              e.removeClass(t.join(' '));
            }
          },
          images: {
            loadImage: function(e, t, i, s, a, n) {
              let r;
              function o() {
                n && n();
              }
              h(e).parent('picture')[0] || (e.complete && a)
                ? o()
                : t
                ? ((r = new d.Image()),
                  (r.onload = o),
                  (r.onerror = o),
                  s && (r.sizes = s),
                  i && (r.srcset = i),
                  t && (r.src = t))
                : o();
            },
            preloadImages: function() {
              const e = this;
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
              for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                const s = e.imagesToLoad[i];
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
        L = {};
      class N extends f {
        constructor(...e) {
          let t, i;
          1 === e.length && e[0].constructor && e[0].constructor === Object
            ? (i = e[0])
            : ([t, i] = e),
            i || (i = {}),
            (i = g.extend({}, i)),
            t && !i.el && (i.el = t),
            super(i),
            Object.keys(z).forEach(e => {
              Object.keys(z[e]).forEach(t => {
                N.prototype[t] || (N.prototype[t] = z[e][t]);
              });
            });
          const s = this;
          void 0 === s.modules && (s.modules = {}),
            Object.keys(s.modules).forEach(e => {
              const t = s.modules[e];
              if (t.params) {
                const e = Object.keys(t.params)[0],
                  s = t.params[e];
                if ('object' != typeof s || null === s) return;
                if (!(e in i) || !('enabled' in s)) return;
                !0 === i[e] && (i[e] = { enabled: !0 }),
                  'object' != typeof i[e] ||
                    'enabled' in i[e] ||
                    (i[e].enabled = !0),
                  i[e] || (i[e] = { enabled: !1 });
              }
            });
          const a = g.extend({}, $);
          s.useModulesParams(a),
            (s.params = g.extend({}, a, L, i)),
            (s.originalParams = g.extend({}, s.params)),
            (s.passedParams = g.extend({}, i)),
            (s.$ = h);
          const n = h(s.params.el);
          if (((t = n[0]), !t)) return;
          if (n.length > 1) {
            const e = [];
            return (
              n.each((t, s) => {
                const a = g.extend({}, i, { el: s });
                e.push(new N(a));
              }),
              e
            );
          }
          let r;
          return (
            (t.swiper = s),
            n.data('swiper', s),
            t && t.shadowRoot && t.shadowRoot.querySelector
              ? ((r = h(
                  t.shadowRoot.querySelector('.' + s.params.wrapperClass)
                )),
                (r.children = e => n.children(e)))
              : (r = n.children('.' + s.params.wrapperClass)),
            g.extend(s, {
              $el: n,
              el: t,
              $wrapperEl: r,
              wrapperEl: r[0],
              classNames: [],
              slides: h(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => 'horizontal' === s.params.direction,
              isVertical: () => 'vertical' === s.params.direction,
              rtl:
                'rtl' === t.dir.toLowerCase() || 'rtl' === n.css('direction'),
              rtlTranslate:
                'horizontal' === s.params.direction &&
                ('rtl' === t.dir.toLowerCase() || 'rtl' === n.css('direction')),
              wrongRTL: '-webkit-box' === r.css('display'),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev,
              touchEvents: (function() {
                const e = [
                  'touchstart',
                  'touchmove',
                  'touchend',
                  'touchcancel'
                ];
                let t = ['mousedown', 'mousemove', 'mouseup'];
                return (
                  m.pointerEvents &&
                    (t = ['pointerdown', 'pointermove', 'pointerup']),
                  (s.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3]
                  }),
                  (s.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2]
                  }),
                  m.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop
                );
              })(),
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
                lastClickTime: g.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
              },
              allowClick: !0,
              allowTouchMove: s.params.allowTouchMove,
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
            s.useModules(),
            s.params.init && s.init(),
            s
          );
        }
        slidesPerViewDynamic() {
          const {
            params: e,
            slides: t,
            slidesGrid: i,
            size: s,
            activeIndex: a
          } = this;
          let n = 1;
          if (e.centeredSlides) {
            let e,
              i = t[a].swiperSlideSize;
            for (let r = a + 1; r < t.length; r += 1)
              t[r] &&
                !e &&
                ((i += t[r].swiperSlideSize), (n += 1), i > s && (e = !0));
            for (let r = a - 1; r >= 0; r -= 1)
              t[r] &&
                !e &&
                ((i += t[r].swiperSlideSize), (n += 1), i > s && (e = !0));
          } else
            for (let r = a + 1; r < t.length; r += 1)
              i[r] - i[a] < s && (n += 1);
          return n;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: i } = e;
          function s() {
            const t = Math.min(
              Math.max(
                e.rtlTranslate ? -1 * e.translate : e.translate,
                e.maxTranslate()
              ),
              e.minTranslate()
            );
            e.setTranslate(t), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let a;
          i.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode
              ? (s(), e.params.autoHeight && e.updateAutoHeight())
              : ((a = e.slideTo(
                  ('auto' === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.params.centeredSlides
                    ? e.slides.length - 1
                    : e.activeIndex,
                  0,
                  !1,
                  !0
                )),
                a || s()),
            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit('update');
        }
        changeDirection(e, t = !0) {
          const i = this.params.direction;
          return (
            e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
            e === i ||
              ('horizontal' !== e && 'vertical' !== e) ||
              (this.$el
                .removeClass(`${this.params.containerModifierClass}${i}`)
                .addClass(`${this.params.containerModifierClass}${e}`),
              (this.params.direction = e),
              this.slides.each((t, i) => {
                'vertical' === e ? (i.style.width = '') : (i.style.height = '');
              }),
              this.emit('changeDirection'),
              t && this.update()),
            this
          );
        }
        init() {
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
        destroy(e = !0, t = !0) {
          const i = this,
            { params: s, $el: a, $wrapperEl: n, slides: r } = i;
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
              Object.keys(i.eventsListeners).forEach(e => {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                i.$el.data('swiper', null),
                g.deleteProps(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          g.extend(L, e);
        }
        static get extendedDefaults() {
          return L;
        }
        static get defaults() {
          return $;
        }
        static get Class() {
          return f;
        }
        static get $() {
          return h;
        }
      }
      var D = { name: 'device', proto: { device: x }, static: { device: x } },
        R = { name: 'support', proto: { support: m }, static: { support: m } };
      const G = {
        isEdge: !!d.navigator.userAgent.match(/Edge/g),
        isSafari: (function() {
          const e = d.navigator.userAgent.toLowerCase();
          return (
            e.indexOf('safari') >= 0 &&
            e.indexOf('chrome') < 0 &&
            e.indexOf('android') < 0
          );
        })(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          d.navigator.userAgent
        )
      };
      var B = {
          name: 'browser',
          proto: { browser: G },
          static: { browser: G }
        },
        H = {
          name: 'resize',
          create() {
            const e = this;
            g.extend(e, {
              resize: {
                resizeHandler() {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    (e.emit('beforeResize'), e.emit('resize'));
                },
                orientationChangeHandler() {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    e.emit('orientationchange');
                }
              }
            });
          },
          on: {
            init() {
              d.addEventListener('resize', this.resize.resizeHandler),
                d.addEventListener(
                  'orientationchange',
                  this.resize.orientationChangeHandler
                );
            },
            destroy() {
              d.removeEventListener('resize', this.resize.resizeHandler),
                d.removeEventListener(
                  'orientationchange',
                  this.resize.orientationChangeHandler
                );
            }
          }
        };
      const _ = {
        func: d.MutationObserver || d.WebkitMutationObserver,
        attach(e, t = {}) {
          const i = this,
            s = new (0, _.func)(e => {
              if (1 === e.length) return void i.emit('observerUpdate', e[0]);
              const t = function() {
                i.emit('observerUpdate', e[0]);
              };
              d.requestAnimationFrame
                ? d.requestAnimationFrame(t)
                : d.setTimeout(t, 0);
            });
          s.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData
          }),
            i.observer.observers.push(s);
        },
        init() {
          const e = this;
          if (m.observer && e.params.observer) {
            if (e.params.observeParents) {
              const t = e.$el.parents();
              for (let i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
            }
            e.observer.attach(e.$el[0], {
              childList: e.params.observeSlideChildren
            }),
              e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy() {
          this.observer.observers.forEach(e => {
            e.disconnect();
          }),
            (this.observer.observers = []);
        }
      };
      var Y = {
        name: 'observer',
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create() {
          g.extend(this, {
            observer: {
              init: _.init.bind(this),
              attach: _.attach.bind(this),
              destroy: _.destroy.bind(this),
              observers: []
            }
          });
        },
        on: {
          init() {
            this.observer.init();
          },
          destroy() {
            this.observer.destroy();
          }
        }
      };
      const F = {
        update(e) {
          const t = this,
            {
              slidesPerView: i,
              slidesPerGroup: s,
              centeredSlides: a
            } = t.params,
            { addSlidesBefore: n, addSlidesAfter: r } = t.params.virtual,
            {
              from: o,
              to: l,
              slides: d,
              slidesGrid: p,
              renderSlide: h,
              offset: c
            } = t.virtual;
          t.updateActiveIndex();
          const u = t.activeIndex || 0;
          let m, f, w;
          (m = t.rtlTranslate ? 'right' : t.isHorizontal() ? 'left' : 'top'),
            a
              ? ((f = Math.floor(i / 2) + s + n),
                (w = Math.floor(i / 2) + s + r))
              : ((f = i + (s - 1) + n), (w = s + r));
          const v = Math.max((u || 0) - w, 0),
            b = Math.min((u || 0) + f, d.length - 1),
            S = (t.slidesGrid[v] || 0) - (t.slidesGrid[0] || 0);
          function E() {
            t.updateSlides(),
              t.updateProgress(),
              t.updateSlidesClasses(),
              t.lazy && t.params.lazy.enabled && t.lazy.load();
          }
          if (
            (g.extend(t.virtual, {
              from: v,
              to: b,
              offset: S,
              slidesGrid: t.slidesGrid
            }),
            o === v && l === b && !e)
          )
            return (
              t.slidesGrid !== p && S !== c && t.slides.css(m, S + 'px'),
              void t.updateProgress()
            );
          if (t.params.virtual.renderExternal)
            return (
              t.params.virtual.renderExternal.call(t, {
                offset: S,
                from: v,
                to: b,
                slides: (function() {
                  const e = [];
                  for (let t = v; t <= b; t += 1) e.push(d[t]);
                  return e;
                })()
              }),
              void E()
            );
          const T = [],
            x = [];
          if (e) t.$wrapperEl.find('.' + t.params.slideClass).remove();
          else
            for (let g = o; g <= l; g += 1)
              (g < v || g > b) &&
                t.$wrapperEl
                  .find(
                    `.${t.params.slideClass}[data-swiper-slide-index="${g}"]`
                  )
                  .remove();
          for (let g = 0; g < d.length; g += 1)
            g >= v &&
              g <= b &&
              (void 0 === l || e
                ? x.push(g)
                : (g > l && x.push(g), g < o && T.push(g)));
          x.forEach(e => {
            t.$wrapperEl.append(h(d[e], e));
          }),
            T.sort((e, t) => t - e).forEach(e => {
              t.$wrapperEl.prepend(h(d[e], e));
            }),
            t.$wrapperEl.children('.swiper-slide').css(m, S + 'px'),
            E();
        },
        renderSlide(e, t) {
          const i = this.params.virtual;
          if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
          const s = h(
            i.renderSlide
              ? i.renderSlide.call(this, e, t)
              : `<div class="${this.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
          );
          return (
            s.attr('data-swiper-slide-index') ||
              s.attr('data-swiper-slide-index', t),
            i.cache && (this.virtual.cache[t] = s),
            s
          );
        },
        appendSlide(e) {
          const t = this;
          if ('object' == typeof e && 'length' in e)
            for (let i = 0; i < e.length; i += 1)
              e[i] && t.virtual.slides.push(e[i]);
          else t.virtual.slides.push(e);
          t.virtual.update(!0);
        },
        prependSlide(e) {
          const t = this,
            i = t.activeIndex;
          let s = i + 1,
            a = 1;
          if (Array.isArray(e)) {
            for (let i = 0; i < e.length; i += 1)
              e[i] && t.virtual.slides.unshift(e[i]);
            (s = i + e.length), (a = e.length);
          } else t.virtual.slides.unshift(e);
          if (t.params.virtual.cache) {
            const e = t.virtual.cache,
              i = {};
            Object.keys(e).forEach(t => {
              const s = e[t],
                n = s.attr('data-swiper-slide-index');
              n && s.attr('data-swiper-slide-index', parseInt(n, 10) + 1),
                (i[parseInt(t, 10) + a] = s);
            }),
              (t.virtual.cache = i);
          }
          t.virtual.update(!0), t.slideTo(s, 0);
        },
        removeSlide(e) {
          const t = this;
          if (null == e) return;
          let i = t.activeIndex;
          if (Array.isArray(e))
            for (let s = e.length - 1; s >= 0; s -= 1)
              t.virtual.slides.splice(e[s], 1),
                t.params.virtual.cache && delete t.virtual.cache[e[s]],
                e[s] < i && (i -= 1),
                (i = Math.max(i, 0));
          else
            t.virtual.slides.splice(e, 1),
              t.params.virtual.cache && delete t.virtual.cache[e],
              e < i && (i -= 1),
              (i = Math.max(i, 0));
          t.virtual.update(!0), t.slideTo(i, 0);
        },
        removeAllSlides() {
          (this.virtual.slides = []),
            this.params.virtual.cache && (this.virtual.cache = {}),
            this.virtual.update(!0),
            this.slideTo(0, 0);
        }
      };
      var V = {
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
        create() {
          g.extend(this, {
            virtual: {
              update: F.update.bind(this),
              appendSlide: F.appendSlide.bind(this),
              prependSlide: F.prependSlide.bind(this),
              removeSlide: F.removeSlide.bind(this),
              removeAllSlides: F.removeAllSlides.bind(this),
              renderSlide: F.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {}
            }
          });
        },
        on: {
          beforeInit() {
            if (!this.params.virtual.enabled) return;
            this.classNames.push(
              this.params.containerModifierClass + 'virtual'
            );
            const e = { watchSlidesProgress: !0 };
            g.extend(this.params, e),
              g.extend(this.originalParams, e),
              this.params.initialSlide || this.virtual.update();
          },
          setTranslate() {
            this.params.virtual.enabled && this.virtual.update();
          }
        }
      };
      const X = {
        handle(e) {
          const t = this,
            { rtlTranslate: i } = t;
          let s = e;
          s.originalEvent && (s = s.originalEvent);
          const a = s.keyCode || s.charCode,
            n = t.params.keyboard.pageUpDown,
            r = n && 33 === a,
            l = n && 34 === a,
            p = 37 === a,
            h = 39 === a,
            c = 38 === a,
            u = 40 === a;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && h) || (t.isVertical() && u) || l)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && p) || (t.isVertical() && c) || r)
          )
            return !1;
          if (
            !(
              s.shiftKey ||
              s.altKey ||
              s.ctrlKey ||
              s.metaKey ||
              (o.activeElement &&
                o.activeElement.nodeName &&
                ('input' === o.activeElement.nodeName.toLowerCase() ||
                  'textarea' === o.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (r || l || p || h || c || u)
            ) {
              let e = !1;
              if (
                t.$el.parents('.' + t.params.slideClass).length > 0 &&
                0 === t.$el.parents('.' + t.params.slideActiveClass).length
              )
                return;
              const s = d.innerWidth,
                a = d.innerHeight,
                n = t.$el.offset();
              i && (n.left -= t.$el[0].scrollLeft);
              const r = [
                [n.left, n.top],
                [n.left + t.width, n.top],
                [n.left, n.top + t.height],
                [n.left + t.width, n.top + t.height]
              ];
              for (let t = 0; t < r.length; t += 1) {
                const i = r[t];
                i[0] >= 0 && i[0] <= s && i[1] >= 0 && i[1] <= a && (e = !0);
              }
              if (!e) return;
            }
            t.isHorizontal()
              ? ((r || l || p || h) &&
                  (s.preventDefault
                    ? s.preventDefault()
                    : (s.returnValue = !1)),
                (((l || h) && !i) || ((r || p) && i)) && t.slideNext(),
                (((r || p) && !i) || ((l || h) && i)) && t.slidePrev())
              : ((r || l || c || u) &&
                  (s.preventDefault
                    ? s.preventDefault()
                    : (s.returnValue = !1)),
                (l || u) && t.slideNext(),
                (r || c) && t.slidePrev()),
              t.emit('keyPress', a);
          }
        },
        enable() {
          this.keyboard.enabled ||
            (h(o).on('keydown', this.keyboard.handle),
            (this.keyboard.enabled = !0));
        },
        disable() {
          this.keyboard.enabled &&
            (h(o).off('keydown', this.keyboard.handle),
            (this.keyboard.enabled = !1));
        }
      };
      var W = {
        name: 'keyboard',
        params: {
          keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 }
        },
        create() {
          g.extend(this, {
            keyboard: {
              enabled: !1,
              enable: X.enable.bind(this),
              disable: X.disable.bind(this),
              handle: X.handle.bind(this)
            }
          });
        },
        on: {
          init() {
            this.params.keyboard.enabled && this.keyboard.enable();
          },
          destroy() {
            this.keyboard.enabled && this.keyboard.disable();
          }
        }
      };
      const j = {
          lastScrollTime: g.now(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          event: () =>
            d.navigator.userAgent.indexOf('firefox') > -1
              ? 'DOMMouseScroll'
              : (function() {
                  let e = 'onwheel' in o;
                  if (!e) {
                    const t = o.createElement('div');
                    t.setAttribute('onwheel', 'return;'),
                      (e = 'function' == typeof t.onwheel);
                  }
                  return (
                    !e &&
                      o.implementation &&
                      o.implementation.hasFeature &&
                      !0 !== o.implementation.hasFeature('', '') &&
                      (e = o.implementation.hasFeature('Events.wheel', '3.0')),
                    e
                  );
                })()
              ? 'wheel'
              : 'mousewheel',
          normalize(e) {
            let t = 0,
              i = 0,
              s = 0,
              a = 0;
            return (
              'detail' in e && (i = e.detail),
              'wheelDelta' in e && (i = -e.wheelDelta / 120),
              'wheelDeltaY' in e && (i = -e.wheelDeltaY / 120),
              'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
              'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
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
          handleMouseEnter() {
            this.mouseEntered = !0;
          },
          handleMouseLeave() {
            this.mouseEntered = !1;
          },
          handle(e) {
            let t = e;
            const i = this,
              s = i.params.mousewheel;
            i.params.cssMode && t.preventDefault();
            let a = i.$el;
            if (
              ('container' !== i.params.mousewheel.eventsTarged &&
                (a = h(i.params.mousewheel.eventsTarged)),
              !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges)
            )
              return !0;
            t.originalEvent && (t = t.originalEvent);
            let n = 0;
            const r = i.rtlTranslate ? -1 : 1,
              o = j.normalize(t);
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
              const e = {
                  time: g.now(),
                  delta: Math.abs(n),
                  direction: Math.sign(n)
                },
                { lastEventBeforeSnap: a } = i.mousewheel,
                r =
                  a &&
                  e.time < a.time + 500 &&
                  e.delta <= a.delta &&
                  e.direction === a.direction;
              if (!r) {
                (i.mousewheel.lastEventBeforeSnap = void 0),
                  i.params.loop && i.loopFix();
                let a = i.getTranslate() + n * s.sensitivity;
                const o = i.isBeginning,
                  l = i.isEnd;
                if (
                  (a >= i.minTranslate() && (a = i.minTranslate()),
                  a <= i.maxTranslate() && (a = i.maxTranslate()),
                  i.setTransition(0),
                  i.setTranslate(a),
                  i.updateProgress(),
                  i.updateActiveIndex(),
                  i.updateSlidesClasses(),
                  ((!o && i.isBeginning) || (!l && i.isEnd)) &&
                    i.updateSlidesClasses(),
                  i.params.freeModeSticky)
                ) {
                  clearTimeout(i.mousewheel.timeout),
                    (i.mousewheel.timeout = void 0);
                  const t = i.mousewheel.recentWheelEvents;
                  t.length >= 15 && t.shift();
                  const s = t.length ? t[t.length - 1] : void 0,
                    a = t[0];
                  if (
                    (t.push(e),
                    s && (e.delta > s.delta || e.direction !== s.direction))
                  )
                    t.splice(0);
                  else if (
                    t.length >= 15 &&
                    e.time - a.time < 500 &&
                    a.delta - e.delta >= 1 &&
                    e.delta <= 6
                  ) {
                    const s = n > 0 ? 0.8 : 0.2;
                    (i.mousewheel.lastEventBeforeSnap = e),
                      t.splice(0),
                      (i.mousewheel.timeout = g.nextTick(() => {
                        i.slideToClosest(i.params.speed, !0, void 0, s);
                      }, 0));
                  }
                  i.mousewheel.timeout ||
                    (i.mousewheel.timeout = g.nextTick(() => {
                      (i.mousewheel.lastEventBeforeSnap = e),
                        t.splice(0),
                        i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                    }, 500));
                }
                if (
                  (r || i.emit('scroll', t),
                  i.params.autoplay &&
                    i.params.autoplayDisableOnInteraction &&
                    i.autoplay.stop(),
                  a === i.minTranslate() || a === i.maxTranslate())
                )
                  return !0;
              }
            } else {
              const t = {
                  time: g.now(),
                  delta: Math.abs(n),
                  direction: Math.sign(n),
                  raw: e
                },
                s = i.mousewheel.recentWheelEvents;
              s.length >= 2 && s.shift();
              const a = s.length ? s[s.length - 1] : void 0;
              if (
                (s.push(t),
                a
                  ? (t.direction !== a.direction ||
                      t.delta > a.delta ||
                      t.time > a.time + 150) &&
                    i.mousewheel.animateSlider(t)
                  : i.mousewheel.animateSlider(t),
                i.mousewheel.releaseScroll(t))
              )
                return !0;
            }
            return (
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
            );
          },
          animateSlider(e) {
            return (
              (e.delta >= 6 && g.now() - this.mousewheel.lastScrollTime < 60) ||
              (e.direction < 0
                ? (this.isEnd && !this.params.loop) ||
                  this.animating ||
                  (this.slideNext(), this.emit('scroll', e.raw))
                : (this.isBeginning && !this.params.loop) ||
                  this.animating ||
                  (this.slidePrev(), this.emit('scroll', e.raw)),
              (this.mousewheel.lastScrollTime = new d.Date().getTime()),
              !1)
            );
          },
          releaseScroll(e) {
            const t = this.params.mousewheel;
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
          enable() {
            const e = j.event();
            if (this.params.cssMode)
              return (
                this.wrapperEl.removeEventListener(e, this.mousewheel.handle),
                !0
              );
            if (!e) return !1;
            if (this.mousewheel.enabled) return !1;
            let t = this.$el;
            return (
              'container' !== this.params.mousewheel.eventsTarged &&
                (t = h(this.params.mousewheel.eventsTarged)),
              t.on('mouseenter', this.mousewheel.handleMouseEnter),
              t.on('mouseleave', this.mousewheel.handleMouseLeave),
              t.on(e, this.mousewheel.handle),
              (this.mousewheel.enabled = !0),
              !0
            );
          },
          disable() {
            const e = j.event();
            if (this.params.cssMode)
              return (
                this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0
              );
            if (!e) return !1;
            if (!this.mousewheel.enabled) return !1;
            let t = this.$el;
            return (
              'container' !== this.params.mousewheel.eventsTarged &&
                (t = h(this.params.mousewheel.eventsTarged)),
              t.off(e, this.mousewheel.handle),
              (this.mousewheel.enabled = !1),
              !0
            );
          }
        },
        U = {
          update() {
            const e = this.params.navigation;
            if (this.params.loop) return;
            const { $nextEl: t, $prevEl: i } = this.navigation;
            i &&
              i.length > 0 &&
              (this.isBeginning
                ? i.addClass(e.disabledClass)
                : i.removeClass(e.disabledClass),
              i[
                this.params.watchOverflow && this.isLocked
                  ? 'addClass'
                  : 'removeClass'
              ](e.lockClass)),
              t &&
                t.length > 0 &&
                (this.isEnd
                  ? t.addClass(e.disabledClass)
                  : t.removeClass(e.disabledClass),
                t[
                  this.params.watchOverflow && this.isLocked
                    ? 'addClass'
                    : 'removeClass'
                ](e.lockClass));
          },
          onPrevClick(e) {
            e.preventDefault(),
              (this.isBeginning && !this.params.loop) || this.slidePrev();
          },
          onNextClick(e) {
            e.preventDefault(),
              (this.isEnd && !this.params.loop) || this.slideNext();
          },
          init() {
            const e = this.params.navigation;
            if (!e.nextEl && !e.prevEl) return;
            let t, i;
            e.nextEl &&
              ((t = h(e.nextEl)),
              this.params.uniqueNavElements &&
                'string' == typeof e.nextEl &&
                t.length > 1 &&
                1 === this.$el.find(e.nextEl).length &&
                (t = this.$el.find(e.nextEl))),
              e.prevEl &&
                ((i = h(e.prevEl)),
                this.params.uniqueNavElements &&
                  'string' == typeof e.prevEl &&
                  i.length > 1 &&
                  1 === this.$el.find(e.prevEl).length &&
                  (i = this.$el.find(e.prevEl))),
              t && t.length > 0 && t.on('click', this.navigation.onNextClick),
              i && i.length > 0 && i.on('click', this.navigation.onPrevClick),
              g.extend(this.navigation, {
                $nextEl: t,
                nextEl: t && t[0],
                $prevEl: i,
                prevEl: i && i[0]
              });
          },
          destroy() {
            const { $nextEl: e, $prevEl: t } = this.navigation;
            e &&
              e.length &&
              (e.off('click', this.navigation.onNextClick),
              e.removeClass(this.params.navigation.disabledClass)),
              t &&
                t.length &&
                (t.off('click', this.navigation.onPrevClick),
                t.removeClass(this.params.navigation.disabledClass));
          }
        },
        q = {
          update() {
            const e = this,
              t = e.rtl,
              i = e.params.pagination;
            if (
              !i.el ||
              !e.pagination.el ||
              !e.pagination.$el ||
              0 === e.pagination.$el.length
            )
              return;
            const s =
                e.virtual && e.params.virtual.enabled
                  ? e.virtual.slides.length
                  : e.slides.length,
              a = e.pagination.$el;
            let n;
            const r = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            if (
              (e.params.loop
                ? ((n = Math.ceil(
                    (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                  )),
                  n > s - 1 - 2 * e.loopedSlides &&
                    (n -= s - 2 * e.loopedSlides),
                  n > r - 1 && (n -= r),
                  n < 0 && 'bullets' !== e.params.paginationType && (n = r + n))
                : (n =
                    void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              'bullets' === i.type &&
                e.pagination.bullets &&
                e.pagination.bullets.length > 0)
            ) {
              const s = e.pagination.bullets;
              let r, o, l;
              if (
                (i.dynamicBullets &&
                  ((e.pagination.bulletSize = s
                    .eq(0)
                    [e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                  a.css(
                    e.isHorizontal() ? 'width' : 'height',
                    e.pagination.bulletSize * (i.dynamicMainBullets + 4) + 'px'
                  ),
                  i.dynamicMainBullets > 1 &&
                    void 0 !== e.previousIndex &&
                    ((e.pagination.dynamicBulletIndex += n - e.previousIndex),
                    e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1
                      ? (e.pagination.dynamicBulletIndex =
                          i.dynamicMainBullets - 1)
                      : e.pagination.dynamicBulletIndex < 0 &&
                        (e.pagination.dynamicBulletIndex = 0)),
                  (r = n - e.pagination.dynamicBulletIndex),
                  (o = r + (Math.min(s.length, i.dynamicMainBullets) - 1)),
                  (l = (o + r) / 2)),
                s.removeClass(
                  `${i.bulletActiveClass} ${i.bulletActiveClass}-next ${i.bulletActiveClass}-next-next ${i.bulletActiveClass}-prev ${i.bulletActiveClass}-prev-prev ${i.bulletActiveClass}-main`
                ),
                a.length > 1)
              )
                s.each((e, t) => {
                  const s = h(t),
                    a = s.index();
                  a === n && s.addClass(i.bulletActiveClass),
                    i.dynamicBullets &&
                      (a >= r &&
                        a <= o &&
                        s.addClass(i.bulletActiveClass + '-main'),
                      a === r &&
                        s
                          .prev()
                          .addClass(i.bulletActiveClass + '-prev')
                          .prev()
                          .addClass(i.bulletActiveClass + '-prev-prev'),
                      a === o &&
                        s
                          .next()
                          .addClass(i.bulletActiveClass + '-next')
                          .next()
                          .addClass(i.bulletActiveClass + '-next-next'));
                });
              else {
                const t = s.eq(n),
                  a = t.index();
                if ((t.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                  const t = s.eq(r),
                    n = s.eq(o);
                  for (let e = r; e <= o; e += 1)
                    s.eq(e).addClass(i.bulletActiveClass + '-main');
                  if (e.params.loop)
                    if (a >= s.length - i.dynamicMainBullets) {
                      for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                        s.eq(s.length - e).addClass(
                          i.bulletActiveClass + '-main'
                        );
                      s.eq(s.length - i.dynamicMainBullets - 1).addClass(
                        i.bulletActiveClass + '-prev'
                      );
                    } else
                      t
                        .prev()
                        .addClass(i.bulletActiveClass + '-prev')
                        .prev()
                        .addClass(i.bulletActiveClass + '-prev-prev'),
                        n
                          .next()
                          .addClass(i.bulletActiveClass + '-next')
                          .next()
                          .addClass(i.bulletActiveClass + '-next-next');
                  else
                    t
                      .prev()
                      .addClass(i.bulletActiveClass + '-prev')
                      .prev()
                      .addClass(i.bulletActiveClass + '-prev-prev'),
                      n
                        .next()
                        .addClass(i.bulletActiveClass + '-next')
                        .next()
                        .addClass(i.bulletActiveClass + '-next-next');
                }
              }
              if (i.dynamicBullets) {
                const a = Math.min(s.length, i.dynamicMainBullets + 4),
                  n =
                    (e.pagination.bulletSize * a - e.pagination.bulletSize) /
                      2 -
                    l * e.pagination.bulletSize,
                  r = t ? 'right' : 'left';
                s.css(e.isHorizontal() ? r : 'top', n + 'px');
              }
            }
            if (
              ('fraction' === i.type &&
                (a
                  .find('.' + i.currentClass)
                  .text(i.formatFractionCurrent(n + 1)),
                a.find('.' + i.totalClass).text(i.formatFractionTotal(r))),
              'progressbar' === i.type)
            ) {
              let t;
              t = i.progressbarOpposite
                ? e.isHorizontal()
                  ? 'vertical'
                  : 'horizontal'
                : e.isHorizontal()
                ? 'horizontal'
                : 'vertical';
              const s = (n + 1) / r;
              let o = 1,
                l = 1;
              'horizontal' === t ? (o = s) : (l = s),
                a
                  .find('.' + i.progressbarFillClass)
                  .transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`)
                  .transition(e.params.speed);
            }
            'custom' === i.type && i.renderCustom
              ? (a.html(i.renderCustom(e, n + 1, r)),
                e.emit('paginationRender', e, a[0]))
              : e.emit('paginationUpdate', e, a[0]),
              a[
                e.params.watchOverflow && e.isLocked
                  ? 'addClass'
                  : 'removeClass'
              ](i.lockClass);
          },
          render() {
            const e = this,
              t = e.params.pagination;
            if (
              !t.el ||
              !e.pagination.el ||
              !e.pagination.$el ||
              0 === e.pagination.$el.length
            )
              return;
            const i = e.pagination.$el;
            let s = '';
            if ('bullets' === t.type) {
              const a = e.params.loop
                ? Math.ceil(
                    ((e.virtual && e.params.virtual.enabled
                      ? e.virtual.slides.length
                      : e.slides.length) -
                      2 * e.loopedSlides) /
                      e.params.slidesPerGroup
                  )
                : e.snapGrid.length;
              for (let i = 0; i < a; i += 1)
                s += t.renderBullet
                  ? t.renderBullet.call(e, i, t.bulletClass)
                  : `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
              i.html(s), (e.pagination.bullets = i.find('.' + t.bulletClass));
            }
            'fraction' === t.type &&
              ((s = t.renderFraction
                ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
              i.html(s)),
              'progressbar' === t.type &&
                ((s = t.renderProgressbar
                  ? t.renderProgressbar.call(e, t.progressbarFillClass)
                  : `<span class="${t.progressbarFillClass}"></span>`),
                i.html(s)),
              'custom' !== t.type &&
                e.emit('paginationRender', e.pagination.$el[0]);
          },
          init() {
            const e = this,
              t = e.params.pagination;
            if (!t.el) return;
            let i = h(t.el);
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
                (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
                (e.pagination.dynamicBulletIndex = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              'progressbar' === t.type &&
                t.progressbarOpposite &&
                i.addClass(t.progressbarOppositeClass),
              t.clickable &&
                i.on('click', '.' + t.bulletClass, function(t) {
                  t.preventDefault();
                  let i = h(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                }),
              g.extend(e.pagination, { $el: i, el: i[0] }));
          },
          destroy() {
            const e = this.params.pagination;
            if (
              !e.el ||
              !this.pagination.el ||
              !this.pagination.$el ||
              0 === this.pagination.$el.length
            )
              return;
            const t = this.pagination.$el;
            t.removeClass(e.hiddenClass),
              t.removeClass(e.modifierClass + e.type),
              this.pagination.bullets &&
                this.pagination.bullets.removeClass(e.bulletActiveClass),
              e.clickable && t.off('click', '.' + e.bulletClass);
          }
        },
        Z = {
          setTranslate() {
            if (!this.params.scrollbar.el || !this.scrollbar.el) return;
            const { scrollbar: e, rtlTranslate: t, progress: i } = this,
              { dragSize: s, trackSize: a, $dragEl: n, $el: r } = e,
              o = this.params.scrollbar;
            let l = s,
              d = (a - s) * i;
            t
              ? ((d = -d),
                d > 0 ? ((l = s - d), (d = 0)) : -d + s > a && (l = a + d))
              : d < 0
              ? ((l = s + d), (d = 0))
              : d + s > a && (l = a - d),
              this.isHorizontal()
                ? (n.transform(`translate3d(${d}px, 0, 0)`),
                  (n[0].style.width = l + 'px'))
                : (n.transform(`translate3d(0px, ${d}px, 0)`),
                  (n[0].style.height = l + 'px')),
              o.hide &&
                (clearTimeout(this.scrollbar.timeout),
                (r[0].style.opacity = 1),
                (this.scrollbar.timeout = setTimeout(() => {
                  (r[0].style.opacity = 0), r.transition(400);
                }, 1e3)));
          },
          setTransition(e) {
            this.params.scrollbar.el &&
              this.scrollbar.el &&
              this.scrollbar.$dragEl.transition(e);
          },
          updateSize() {
            if (!this.params.scrollbar.el || !this.scrollbar.el) return;
            const { scrollbar: e } = this,
              { $dragEl: t, $el: i } = e;
            (t[0].style.width = ''), (t[0].style.height = '');
            const s = this.isHorizontal()
                ? i[0].offsetWidth
                : i[0].offsetHeight,
              a = this.size / this.virtualSize,
              n = a * (s / this.size);
            let r;
            (r =
              'auto' === this.params.scrollbar.dragSize
                ? s * a
                : parseInt(this.params.scrollbar.dragSize, 10)),
              this.isHorizontal()
                ? (t[0].style.width = r + 'px')
                : (t[0].style.height = r + 'px'),
              (i[0].style.display = a >= 1 ? 'none' : ''),
              this.params.scrollbar.hide && (i[0].style.opacity = 0),
              g.extend(e, {
                trackSize: s,
                divider: a,
                moveDivider: n,
                dragSize: r
              }),
              e.$el[
                this.params.watchOverflow && this.isLocked
                  ? 'addClass'
                  : 'removeClass'
              ](this.params.scrollbar.lockClass);
          },
          getPointerPosition(e) {
            return this.isHorizontal()
              ? 'touchstart' === e.type || 'touchmove' === e.type
                ? e.targetTouches[0].clientX
                : e.clientX
              : 'touchstart' === e.type || 'touchmove' === e.type
              ? e.targetTouches[0].clientY
              : e.clientY;
          },
          setDragPosition(e) {
            const { scrollbar: t, rtlTranslate: i } = this,
              { $el: s, dragSize: a, trackSize: n, dragStartPos: r } = t;
            let o;
            (o =
              (t.getPointerPosition(e) -
                s.offset()[this.isHorizontal() ? 'left' : 'top'] -
                (null !== r ? r : a / 2)) /
              (n - a)),
              (o = Math.max(Math.min(o, 1), 0)),
              i && (o = 1 - o);
            const l =
              this.minTranslate() +
              (this.maxTranslate() - this.minTranslate()) * o;
            this.updateProgress(l),
              this.setTranslate(l),
              this.updateActiveIndex(),
              this.updateSlidesClasses();
          },
          onDragStart(e) {
            const t = this.params.scrollbar,
              { scrollbar: i, $wrapperEl: s } = this,
              { $el: a, $dragEl: n } = i;
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
          onDragMove(e) {
            const { scrollbar: t, $wrapperEl: i } = this,
              { $el: s, $dragEl: a } = t;
            this.scrollbar.isTouched &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              t.setDragPosition(e),
              i.transition(0),
              s.transition(0),
              a.transition(0),
              this.emit('scrollbarDragMove', e));
          },
          onDragEnd(e) {
            const t = this.params.scrollbar,
              { scrollbar: i, $wrapperEl: s } = this,
              { $el: a } = i;
            this.scrollbar.isTouched &&
              ((this.scrollbar.isTouched = !1),
              this.params.cssMode &&
                (this.$wrapperEl.css('scroll-snap-type', ''), s.transition('')),
              t.hide &&
                (clearTimeout(this.scrollbar.dragTimeout),
                (this.scrollbar.dragTimeout = g.nextTick(() => {
                  a.css('opacity', 0), a.transition(400);
                }, 1e3))),
              this.emit('scrollbarDragEnd', e),
              t.snapOnRelease && this.slideToClosest());
          },
          enableDraggable() {
            if (!this.params.scrollbar.el) return;
            const {
                scrollbar: e,
                touchEventsTouch: t,
                touchEventsDesktop: i,
                params: s
              } = this,
              a = e.$el[0],
              n = !(!m.passiveListener || !s.passiveListeners) && {
                passive: !1,
                capture: !1
              },
              r = !(!m.passiveListener || !s.passiveListeners) && {
                passive: !0,
                capture: !1
              };
            m.touch
              ? (a.addEventListener(t.start, this.scrollbar.onDragStart, n),
                a.addEventListener(t.move, this.scrollbar.onDragMove, n),
                a.addEventListener(t.end, this.scrollbar.onDragEnd, r))
              : (a.addEventListener(i.start, this.scrollbar.onDragStart, n),
                o.addEventListener(i.move, this.scrollbar.onDragMove, n),
                o.addEventListener(i.end, this.scrollbar.onDragEnd, r));
          },
          disableDraggable() {
            if (!this.params.scrollbar.el) return;
            const {
                scrollbar: e,
                touchEventsTouch: t,
                touchEventsDesktop: i,
                params: s
              } = this,
              a = e.$el[0],
              n = !(!m.passiveListener || !s.passiveListeners) && {
                passive: !1,
                capture: !1
              },
              r = !(!m.passiveListener || !s.passiveListeners) && {
                passive: !0,
                capture: !1
              };
            m.touch
              ? (a.removeEventListener(t.start, this.scrollbar.onDragStart, n),
                a.removeEventListener(t.move, this.scrollbar.onDragMove, n),
                a.removeEventListener(t.end, this.scrollbar.onDragEnd, r))
              : (a.removeEventListener(i.start, this.scrollbar.onDragStart, n),
                o.removeEventListener(i.move, this.scrollbar.onDragMove, n),
                o.removeEventListener(i.end, this.scrollbar.onDragEnd, r));
          },
          init() {
            if (!this.params.scrollbar.el) return;
            const { scrollbar: e, $el: t } = this,
              i = this.params.scrollbar;
            let s = h(i.el);
            this.params.uniqueNavElements &&
              'string' == typeof i.el &&
              s.length > 1 &&
              1 === t.find(i.el).length &&
              (s = t.find(i.el));
            let a = s.find('.' + this.params.scrollbar.dragClass);
            0 === a.length &&
              ((a = h(
                `<div class="${this.params.scrollbar.dragClass}"></div>`
              )),
              s.append(a)),
              g.extend(e, { $el: s, el: s[0], $dragEl: a, dragEl: a[0] }),
              i.draggable && e.enableDraggable();
          },
          destroy() {
            this.scrollbar.disableDraggable();
          }
        },
        K = {
          setTransform(e, t) {
            const { rtl: i } = this,
              s = h(e),
              a = i ? -1 : 1,
              n = s.attr('data-swiper-parallax') || '0';
            let r = s.attr('data-swiper-parallax-x'),
              o = s.attr('data-swiper-parallax-y');
            const l = s.attr('data-swiper-parallax-scale'),
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
                o.indexOf('%') >= 0 ? parseInt(o, 10) * t + '%' : o * t + 'px'),
              null != d)
            ) {
              const e = d - (d - 1) * (1 - Math.abs(t));
              s[0].style.opacity = e;
            }
            if (null == l) s.transform(`translate3d(${r}, ${o}, 0px)`);
            else {
              const e = l - (l - 1) * (1 - Math.abs(t));
              s.transform(`translate3d(${r}, ${o}, 0px) scale(${e})`);
            }
          },
          setTranslate() {
            const e = this,
              { $el: t, slides: i, progress: s, snapGrid: a } = e;
            t
              .children(
                '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
              )
              .each((t, i) => {
                e.parallax.setTransform(i, s);
              }),
              i.each((t, i) => {
                let n = i.progress;
                e.params.slidesPerGroup > 1 &&
                  'auto' !== e.params.slidesPerView &&
                  (n += Math.ceil(t / 2) - s * (a.length - 1)),
                  (n = Math.min(Math.max(n, -1), 1)),
                  h(i)
                    .find(
                      '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                    )
                    .each((t, i) => {
                      e.parallax.setTransform(i, n);
                    });
              });
          },
          setTransition(e = this.params.speed) {
            const { $el: t } = this;
            t.find(
              '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
            ).each((t, i) => {
              const s = h(i);
              let a =
                parseInt(s.attr('data-swiper-parallax-duration'), 10) || e;
              0 === e && (a = 0), s.transition(a);
            });
          }
        },
        Q = {
          getDistanceBetweenTouches: e =>
            e.targetTouches.length < 2
              ? 1
              : Math.sqrt(
                  (e.targetTouches[1].pageX - e.targetTouches[0].pageX) ** 2 +
                    (e.targetTouches[1].pageY - e.targetTouches[0].pageY) ** 2
                ),
          onGestureStart(e) {
            const t = this.params.zoom,
              i = this.zoom,
              { gesture: s } = i;
            if (
              ((i.fakeGestureTouched = !1),
              (i.fakeGestureMoved = !1),
              !m.gestures)
            ) {
              if (
                'touchstart' !== e.type ||
                ('touchstart' === e.type && e.targetTouches.length < 2)
              )
                return;
              (i.fakeGestureTouched = !0),
                (s.scaleStart = Q.getDistanceBetweenTouches(e));
            }
            (s.$slideEl && s.$slideEl.length) ||
            ((s.$slideEl = h(e.target).closest('.' + this.params.slideClass)),
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
          onGestureChange(e) {
            const t = this.params.zoom,
              i = this.zoom,
              { gesture: s } = i;
            if (!m.gestures) {
              if (
                'touchmove' !== e.type ||
                ('touchmove' === e.type && e.targetTouches.length < 2)
              )
                return;
              (i.fakeGestureMoved = !0),
                (s.scaleMove = Q.getDistanceBetweenTouches(e));
            }
            s.$imageEl &&
              0 !== s.$imageEl.length &&
              ((i.scale = m.gestures
                ? e.scale * i.currentScale
                : (s.scaleMove / s.scaleStart) * i.currentScale),
              i.scale > s.maxRatio &&
                (i.scale = s.maxRatio - 1 + (i.scale - s.maxRatio + 1) ** 0.5),
              i.scale < t.minRatio &&
                (i.scale = t.minRatio + 1 - (t.minRatio - i.scale + 1) ** 0.5),
              s.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`));
          },
          onGestureEnd(e) {
            const t = this.params.zoom,
              i = this.zoom,
              { gesture: s } = i;
            if (!m.gestures) {
              if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
              if (
                'touchend' !== e.type ||
                ('touchend' === e.type &&
                  e.changedTouches.length < 2 &&
                  !x.android)
              )
                return;
              (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
            }
            s.$imageEl &&
              0 !== s.$imageEl.length &&
              ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
              s.$imageEl
                .transition(this.params.speed)
                .transform(`translate3d(0,0,0) scale(${i.scale})`),
              (i.currentScale = i.scale),
              (i.isScaling = !1),
              1 === i.scale && (s.$slideEl = void 0));
          },
          onTouchStart(e) {
            const t = this.zoom,
              { gesture: i, image: s } = t;
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              (s.isTouched ||
                (x.android && e.cancelable && e.preventDefault(),
                (s.isTouched = !0),
                (s.touchesStart.x =
                  'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX),
                (s.touchesStart.y =
                  'touchstart' === e.type
                    ? e.targetTouches[0].pageY
                    : e.pageY)));
          },
          onTouchMove(e) {
            const t = this,
              i = t.zoom,
              { gesture: s, image: a, velocity: n } = i;
            if (!s.$imageEl || 0 === s.$imageEl.length) return;
            if (((t.allowClick = !1), !a.isTouched || !s.$slideEl)) return;
            a.isMoved ||
              ((a.width = s.$imageEl[0].offsetWidth),
              (a.height = s.$imageEl[0].offsetHeight),
              (a.startX = g.getTranslate(s.$imageWrapEl[0], 'x') || 0),
              (a.startY = g.getTranslate(s.$imageWrapEl[0], 'y') || 0),
              (s.slideWidth = s.$slideEl[0].offsetWidth),
              (s.slideHeight = s.$slideEl[0].offsetHeight),
              s.$imageWrapEl.transition(0),
              t.rtl && ((a.startX = -a.startX), (a.startY = -a.startY)));
            const r = a.width * i.scale,
              o = a.height * i.scale;
            if (!(r < s.slideWidth && o < s.slideHeight)) {
              if (
                ((a.minX = Math.min(s.slideWidth / 2 - r / 2, 0)),
                (a.maxX = -a.minX),
                (a.minY = Math.min(s.slideHeight / 2 - o / 2, 0)),
                (a.maxY = -a.minY),
                (a.touchesCurrent.x =
                  'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX),
                (a.touchesCurrent.y =
                  'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY),
                !a.isMoved && !i.isScaling)
              ) {
                if (
                  t.isHorizontal() &&
                  ((Math.floor(a.minX) === Math.floor(a.startX) &&
                    a.touchesCurrent.x < a.touchesStart.x) ||
                    (Math.floor(a.maxX) === Math.floor(a.startX) &&
                      a.touchesCurrent.x > a.touchesStart.x))
                )
                  return void (a.isTouched = !1);
                if (
                  !t.isHorizontal() &&
                  ((Math.floor(a.minY) === Math.floor(a.startY) &&
                    a.touchesCurrent.y < a.touchesStart.y) ||
                    (Math.floor(a.maxY) === Math.floor(a.startY) &&
                      a.touchesCurrent.y > a.touchesStart.y))
                )
                  return void (a.isTouched = !1);
              }
              e.cancelable && e.preventDefault(),
                e.stopPropagation(),
                (a.isMoved = !0),
                (a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX),
                (a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY),
                a.currentX < a.minX &&
                  (a.currentX = a.minX + 1 - (a.minX - a.currentX + 1) ** 0.8),
                a.currentX > a.maxX &&
                  (a.currentX = a.maxX - 1 + (a.currentX - a.maxX + 1) ** 0.8),
                a.currentY < a.minY &&
                  (a.currentY = a.minY + 1 - (a.minY - a.currentY + 1) ** 0.8),
                a.currentY > a.maxY &&
                  (a.currentY = a.maxY - 1 + (a.currentY - a.maxY + 1) ** 0.8),
                n.prevPositionX || (n.prevPositionX = a.touchesCurrent.x),
                n.prevPositionY || (n.prevPositionY = a.touchesCurrent.y),
                n.prevTime || (n.prevTime = Date.now()),
                (n.x =
                  (a.touchesCurrent.x - n.prevPositionX) /
                  (Date.now() - n.prevTime) /
                  2),
                (n.y =
                  (a.touchesCurrent.y - n.prevPositionY) /
                  (Date.now() - n.prevTime) /
                  2),
                Math.abs(a.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
                Math.abs(a.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
                (n.prevPositionX = a.touchesCurrent.x),
                (n.prevPositionY = a.touchesCurrent.y),
                (n.prevTime = Date.now()),
                s.$imageWrapEl.transform(
                  `translate3d(${a.currentX}px, ${a.currentY}px,0)`
                );
            }
          },
          onTouchEnd() {
            const e = this.zoom,
              { gesture: t, image: i, velocity: s } = e;
            if (!t.$imageEl || 0 === t.$imageEl.length) return;
            if (!i.isTouched || !i.isMoved)
              return (i.isTouched = !1), void (i.isMoved = !1);
            (i.isTouched = !1), (i.isMoved = !1);
            let a = 300,
              n = 300;
            const r = i.currentX + s.x * a,
              o = i.currentY + s.y * n;
            0 !== s.x && (a = Math.abs((r - i.currentX) / s.x)),
              0 !== s.y && (n = Math.abs((o - i.currentY) / s.y));
            const l = Math.max(a, n);
            (i.currentX = r), (i.currentY = o);
            const d = i.height * e.scale;
            (i.minX = Math.min(t.slideWidth / 2 - (i.width * e.scale) / 2, 0)),
              (i.maxX = -i.minX),
              (i.minY = Math.min(t.slideHeight / 2 - d / 2, 0)),
              (i.maxY = -i.minY),
              (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
              (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
              t.$imageWrapEl
                .transition(l)
                .transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`);
          },
          onTransitionEnd() {
            const e = this.zoom,
              { gesture: t } = e;
            t.$slideEl &&
              this.previousIndex !== this.activeIndex &&
              (t.$imageEl &&
                t.$imageEl.transform('translate3d(0,0,0) scale(1)'),
              t.$imageWrapEl && t.$imageWrapEl.transform('translate3d(0,0,0)'),
              (e.scale = 1),
              (e.currentScale = 1),
              (t.$slideEl = void 0),
              (t.$imageEl = void 0),
              (t.$imageWrapEl = void 0));
          },
          toggle(e) {
            const t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e);
          },
          in(e) {
            const t = this.zoom,
              i = this.params.zoom,
              { gesture: s, image: a } = t;
            if (
              (s.$slideEl ||
                ((s.$slideEl =
                  this.params.virtual &&
                  this.params.virtual.enabled &&
                  this.virtual
                    ? this.$wrapperEl.children(
                        '.' + this.params.slideActiveClass
                      )
                    : this.slides.eq(this.activeIndex)),
                (s.$imageEl = s.$slideEl.find(
                  'img, svg, canvas, picture, .swiper-zoom-target'
                )),
                (s.$imageWrapEl = s.$imageEl.parent('.' + i.containerClass))),
              !s.$imageEl || 0 === s.$imageEl.length)
            )
              return;
            let n, r, o, l, d, p, h, c, u, g, m, f, w, v, b, S, E, T;
            s.$slideEl.addClass('' + i.zoomedSlideClass),
              void 0 === a.touchesStart.x && e
                ? ((n =
                    'touchend' === e.type
                      ? e.changedTouches[0].pageX
                      : e.pageX),
                  (r =
                    'touchend' === e.type
                      ? e.changedTouches[0].pageY
                      : e.pageY))
                : ((n = a.touchesStart.x), (r = a.touchesStart.y)),
              (t.scale = s.$imageWrapEl.attr('data-swiper-zoom') || i.maxRatio),
              (t.currentScale =
                s.$imageWrapEl.attr('data-swiper-zoom') || i.maxRatio),
              e
                ? ((E = s.$slideEl[0].offsetWidth),
                  (T = s.$slideEl[0].offsetHeight),
                  (o = s.$slideEl.offset().left),
                  (l = s.$slideEl.offset().top),
                  (d = o + E / 2 - n),
                  (p = l + T / 2 - r),
                  (u = s.$imageEl[0].offsetWidth),
                  (g = s.$imageEl[0].offsetHeight),
                  (m = u * t.scale),
                  (f = g * t.scale),
                  (w = Math.min(E / 2 - m / 2, 0)),
                  (v = Math.min(T / 2 - f / 2, 0)),
                  (b = -w),
                  (S = -v),
                  (h = d * t.scale),
                  (c = p * t.scale),
                  h < w && (h = w),
                  h > b && (h = b),
                  c < v && (c = v),
                  c > S && (c = S))
                : ((h = 0), (c = 0)),
              s.$imageWrapEl
                .transition(300)
                .transform(`translate3d(${h}px, ${c}px,0)`),
              s.$imageEl
                .transition(300)
                .transform(`translate3d(0,0,0) scale(${t.scale})`);
          },
          out() {
            const e = this.zoom,
              t = this.params.zoom,
              { gesture: i } = e;
            i.$slideEl ||
              ((i.$slideEl =
                this.params.virtual &&
                this.params.virtual.enabled &&
                this.virtual
                  ? this.$wrapperEl.children('.' + this.params.slideActiveClass)
                  : this.slides.eq(this.activeIndex)),
              (i.$imageEl = i.$slideEl.find(
                'img, svg, canvas, picture, .swiper-zoom-target'
              )),
              (i.$imageWrapEl = i.$imageEl.parent('.' + t.containerClass))),
              i.$imageEl &&
                0 !== i.$imageEl.length &&
                ((e.scale = 1),
                (e.currentScale = 1),
                i.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
                i.$imageEl
                  .transition(300)
                  .transform('translate3d(0,0,0) scale(1)'),
                i.$slideEl.removeClass('' + t.zoomedSlideClass),
                (i.$slideEl = void 0));
          },
          enable() {
            const e = this.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const t = !(
                'touchstart' !== this.touchEvents.start ||
                !m.passiveListener ||
                !this.params.passiveListeners
              ) && { passive: !0, capture: !1 },
              i = !m.passiveListener || { passive: !1, capture: !0 },
              s = '.' + this.params.slideClass;
            m.gestures
              ? (this.$wrapperEl.on('gesturestart', s, e.onGestureStart, t),
                this.$wrapperEl.on('gesturechange', s, e.onGestureChange, t),
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
                this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t),
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
          },
          disable() {
            const e = this.zoom;
            if (!e.enabled) return;
            this.zoom.enabled = !1;
            const t = !(
                'touchstart' !== this.touchEvents.start ||
                !m.passiveListener ||
                !this.params.passiveListeners
              ) && { passive: !0, capture: !1 },
              i = !m.passiveListener || { passive: !1, capture: !0 },
              s = '.' + this.params.slideClass;
            m.gestures
              ? (this.$wrapperEl.off('gesturestart', s, e.onGestureStart, t),
                this.$wrapperEl.off('gesturechange', s, e.onGestureChange, t),
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
                this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t),
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
        },
        J = {
          loadInSlide(e, t = !0) {
            const i = this,
              s = i.params.lazy;
            if (void 0 === e) return;
            if (0 === i.slides.length) return;
            const a =
              i.virtual && i.params.virtual.enabled
                ? i.$wrapperEl.children(
                    `.${i.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : i.slides.eq(e);
            let n = a.find(
              `.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`
            );
            !a.hasClass(s.elementClass) ||
              a.hasClass(s.loadedClass) ||
              a.hasClass(s.loadingClass) ||
              (n = n.add(a[0])),
              0 !== n.length &&
                n.each((e, n) => {
                  const r = h(n);
                  r.addClass(s.loadingClass);
                  const o = r.attr('data-background'),
                    l = r.attr('data-src'),
                    d = r.attr('data-srcset'),
                    p = r.attr('data-sizes'),
                    c = r.parent('picture');
                  i.loadImage(r[0], l || o, d, p, !1, () => {
                    if (null != i && i && (!i || i.params) && !i.destroyed) {
                      if (
                        (o
                          ? (r.css('background-image', `url("${o}")`),
                            r.removeAttr('data-background'))
                          : (d &&
                              (r.attr('srcset', d),
                              r.removeAttr('data-srcset')),
                            p &&
                              (r.attr('sizes', p), r.removeAttr('data-sizes')),
                            c.length &&
                              c.children('source').each((e, t) => {
                                const i = h(t);
                                i.attr('data-srcset') &&
                                  (i.attr('srcset', i.attr('data-srcset')),
                                  i.removeAttr('data-srcset'));
                              }),
                            l && (r.attr('src', l), r.removeAttr('data-src'))),
                        r.addClass(s.loadedClass).removeClass(s.loadingClass),
                        a.find('.' + s.preloaderClass).remove(),
                        i.params.loop && t)
                      ) {
                        const e = a.attr('data-swiper-slide-index');
                        if (a.hasClass(i.params.slideDuplicateClass)) {
                          const t = i.$wrapperEl.children(
                            `[data-swiper-slide-index="${e}"]:not(.${i.params.slideDuplicateClass})`
                          );
                          i.lazy.loadInSlide(t.index(), !1);
                        } else {
                          const t = i.$wrapperEl.children(
                            `.${i.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                          );
                          i.lazy.loadInSlide(t.index(), !1);
                        }
                      }
                      i.emit('lazyImageReady', a[0], r[0]),
                        i.params.autoHeight && i.updateAutoHeight();
                    }
                  }),
                    i.emit('lazyImageLoad', a[0], r[0]);
                });
          },
          load() {
            const e = this,
              { $wrapperEl: t, params: i, slides: s, activeIndex: a } = e,
              n = e.virtual && i.virtual.enabled,
              r = i.lazy;
            let o = i.slidesPerView;
            function l(e) {
              if (n) {
                if (
                  t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`)
                    .length
                )
                  return !0;
              } else if (s[e]) return !0;
              return !1;
            }
            function d(e) {
              return n ? h(e).attr('data-swiper-slide-index') : h(e).index();
            }
            if (
              ('auto' === o && (o = 0),
              e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
              e.params.watchSlidesVisibility)
            )
              t.children('.' + i.slideVisibleClass).each((t, i) => {
                const s = n
                  ? h(i).attr('data-swiper-slide-index')
                  : h(i).index();
                e.lazy.loadInSlide(s);
              });
            else if (o > 1)
              for (let p = a; p < a + o; p += 1) l(p) && e.lazy.loadInSlide(p);
            else e.lazy.loadInSlide(a);
            if (r.loadPrevNext)
              if (o > 1 || (r.loadPrevNextAmount && r.loadPrevNextAmount > 1)) {
                const t = r.loadPrevNextAmount,
                  i = o,
                  n = Math.min(a + i + Math.max(t, i), s.length),
                  d = Math.max(a - Math.max(i, t), 0);
                for (let s = a + o; s < n; s += 1)
                  l(s) && e.lazy.loadInSlide(s);
                for (let s = d; s < a; s += 1) l(s) && e.lazy.loadInSlide(s);
              } else {
                const s = t.children('.' + i.slideNextClass);
                s.length > 0 && e.lazy.loadInSlide(d(s));
                const a = t.children('.' + i.slidePrevClass);
                a.length > 0 && e.lazy.loadInSlide(d(a));
              }
          }
        },
        ee = {
          LinearSpline: function(e, t) {
            const i = (function() {
              let e, t, i;
              return (s, a) => {
                for (t = -1, e = s.length; e - t > 1; )
                  (i = (e + t) >> 1), s[i] <= a ? (t = i) : (e = i);
                return e;
              };
            })();
            let s, a;
            return (
              (this.x = e),
              (this.y = t),
              (this.lastIndex = e.length - 1),
              (this.interpolate = function(e) {
                return e
                  ? ((a = i(this.x, e)),
                    (s = a - 1),
                    ((e - this.x[s]) * (this.y[a] - this.y[s])) /
                      (this.x[a] - this.x[s]) +
                      this.y[s])
                  : 0;
              }),
              this
            );
          },
          getInterpolateFunction(e) {
            this.controller.spline ||
              (this.controller.spline = this.params.loop
                ? new ee.LinearSpline(this.slidesGrid, e.slidesGrid)
                : new ee.LinearSpline(this.snapGrid, e.snapGrid));
          },
          setTranslate(e, t) {
            const i = this,
              s = i.controller.control;
            let a, n;
            function r(e) {
              const t = i.rtlTranslate ? -i.translate : i.translate;
              'slide' === i.params.controller.by &&
                (i.controller.getInterpolateFunction(e),
                (n = -i.controller.spline.interpolate(-t))),
                (n && 'container' !== i.params.controller.by) ||
                  ((a =
                    (e.maxTranslate() - e.minTranslate()) /
                    (i.maxTranslate() - i.minTranslate())),
                  (n = (t - i.minTranslate()) * a + e.minTranslate())),
                i.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, i),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(s))
              for (let o = 0; o < s.length; o += 1)
                s[o] !== t && s[o] instanceof N && r(s[o]);
            else s instanceof N && t !== s && r(s);
          },
          setTransition(e, t) {
            const i = this,
              s = i.controller.control;
            let a;
            function n(t) {
              t.setTransition(e, i),
                0 !== e &&
                  (t.transitionStart(),
                  t.params.autoHeight &&
                    g.nextTick(() => {
                      t.updateAutoHeight();
                    }),
                  t.$wrapperEl.transitionEnd(() => {
                    s &&
                      (t.params.loop &&
                        'slide' === i.params.controller.by &&
                        t.loopFix(),
                      t.transitionEnd());
                  }));
            }
            if (Array.isArray(s))
              for (a = 0; a < s.length; a += 1)
                s[a] !== t && s[a] instanceof N && n(s[a]);
            else s instanceof N && t !== s && n(s);
          }
        },
        te = {
          makeElFocusable: e => (e.attr('tabIndex', '0'), e),
          makeElNotFocusable: e => (e.attr('tabIndex', '-1'), e),
          addElRole: (e, t) => (e.attr('role', t), e),
          addElLabel: (e, t) => (e.attr('aria-label', t), e),
          disableEl: e => (e.attr('aria-disabled', !0), e),
          enableEl: e => (e.attr('aria-disabled', !1), e),
          onEnterKey(e) {
            const t = this.params.a11y;
            if (13 !== e.keyCode) return;
            const i = h(e.target);
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
                ((this.isBeginning && !this.params.loop) || this.slidePrev(),
                this.a11y.notify(
                  this.isBeginning ? t.firstSlideMessage : t.prevSlideMessage
                )),
              this.pagination &&
                i.is('.' + this.params.pagination.bulletClass) &&
                i[0].click();
          },
          notify(e) {
            const t = this.a11y.liveRegion;
            0 !== t.length && (t.html(''), t.html(e));
          },
          updateNavigation() {
            if (this.params.loop || !this.navigation) return;
            const { $nextEl: e, $prevEl: t } = this.navigation;
            t &&
              t.length > 0 &&
              (this.isBeginning
                ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t))
                : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t))),
              e &&
                e.length > 0 &&
                (this.isEnd
                  ? (this.a11y.disableEl(e), this.a11y.makeElNotFocusable(e))
                  : (this.a11y.enableEl(e), this.a11y.makeElFocusable(e)));
          },
          updatePagination() {
            const e = this,
              t = e.params.a11y;
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.bullets.each((i, s) => {
                const a = h(s);
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
          init() {
            this.$el.append(this.a11y.liveRegion);
            const e = this.params.a11y;
            let t, i;
            this.navigation &&
              this.navigation.$nextEl &&
              (t = this.navigation.$nextEl),
              this.navigation &&
                this.navigation.$prevEl &&
                (i = this.navigation.$prevEl),
              t &&
                (this.a11y.makeElFocusable(t),
                this.a11y.addElRole(t, 'button'),
                this.a11y.addElLabel(t, e.nextSlideMessage),
                t.on('keydown', this.a11y.onEnterKey)),
              i &&
                (this.a11y.makeElFocusable(i),
                this.a11y.addElRole(i, 'button'),
                this.a11y.addElLabel(i, e.prevSlideMessage),
                i.on('keydown', this.a11y.onEnterKey)),
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
          destroy() {
            let e, t;
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
        ie = {
          init() {
            if (!this.params.history) return;
            if (!d.history || !d.history.pushState)
              return (
                (this.params.history.enabled = !1),
                void (this.params.hashNavigation.enabled = !0)
              );
            const e = this.history;
            (e.initialized = !0),
              (e.paths = ie.getPathValues()),
              (e.paths.key || e.paths.value) &&
                (e.scrollToSlide(
                  0,
                  e.paths.value,
                  this.params.runCallbacksOnInit
                ),
                this.params.history.replaceState ||
                  d.addEventListener(
                    'popstate',
                    this.history.setHistoryPopState
                  ));
          },
          destroy() {
            this.params.history.replaceState ||
              d.removeEventListener(
                'popstate',
                this.history.setHistoryPopState
              );
          },
          setHistoryPopState() {
            (this.history.paths = ie.getPathValues()),
              this.history.scrollToSlide(
                this.params.speed,
                this.history.paths.value,
                !1
              );
          },
          getPathValues() {
            const e = d.location.pathname
                .slice(1)
                .split('/')
                .filter(e => '' !== e),
              t = e.length;
            return { key: e[t - 2], value: e[t - 1] };
          },
          setHistory(e, t) {
            if (!this.history.initialized || !this.params.history.enabled)
              return;
            const i = this.slides.eq(t);
            let s = ie.slugify(i.attr('data-history'));
            d.location.pathname.includes(e) || (s = `${e}/${s}`);
            const a = d.history.state;
            (a && a.value === s) ||
              (this.params.history.replaceState
                ? d.history.replaceState({ value: s }, null, s)
                : d.history.pushState({ value: s }, null, s));
          },
          slugify: e =>
            e
              .toString()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]+/g, '')
              .replace(/--+/g, '-')
              .replace(/^-+/, '')
              .replace(/-+$/, ''),
          scrollToSlide(e, t, i) {
            const s = this;
            if (t)
              for (let a = 0, n = s.slides.length; a < n; a += 1) {
                const n = s.slides.eq(a);
                if (
                  ie.slugify(n.attr('data-history')) === t &&
                  !n.hasClass(s.params.slideDuplicateClass)
                ) {
                  const t = n.index();
                  s.slideTo(t, e, i);
                }
              }
            else s.slideTo(0, e, i);
          }
        },
        se = {
          onHashCange() {
            const e = this;
            e.emit('hashChange');
            const t = o.location.hash.replace('#', '');
            if (t !== e.slides.eq(e.activeIndex).attr('data-hash')) {
              const i = e.$wrapperEl
                .children(`.${e.params.slideClass}[data-hash="${t}"]`)
                .index();
              if (void 0 === i) return;
              e.slideTo(i);
            }
          },
          setHash() {
            const e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
              if (
                e.params.hashNavigation.replaceState &&
                d.history &&
                d.history.replaceState
              )
                d.history.replaceState(
                  null,
                  null,
                  '#' + e.slides.eq(e.activeIndex).attr('data-hash') || ''
                ),
                  e.emit('hashSet');
              else {
                const t = e.slides.eq(e.activeIndex),
                  i = t.attr('data-hash') || t.attr('data-history');
                (o.location.hash = i || ''), e.emit('hashSet');
              }
          },
          init() {
            const e = this;
            if (
              !e.params.hashNavigation.enabled ||
              (e.params.history && e.params.history.enabled)
            )
              return;
            e.hashNavigation.initialized = !0;
            const t = o.location.hash.replace('#', '');
            if (t) {
              const i = 0;
              for (let s = 0, a = e.slides.length; s < a; s += 1) {
                const a = e.slides.eq(s);
                if (
                  (a.attr('data-hash') || a.attr('data-history')) === t &&
                  !a.hasClass(e.params.slideDuplicateClass)
                ) {
                  const t = a.index();
                  e.slideTo(t, i, e.params.runCallbacksOnInit, !0);
                }
              }
            }
            e.params.hashNavigation.watchState &&
              h(d).on('hashchange', e.hashNavigation.onHashCange);
          },
          destroy() {
            this.params.hashNavigation.watchState &&
              h(d).off('hashchange', this.hashNavigation.onHashCange);
          }
        },
        ae = {
          run() {
            const e = this,
              t = e.slides.eq(e.activeIndex);
            let i = e.params.autoplay.delay;
            t.attr('data-swiper-autoplay') &&
              (i = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
              clearTimeout(e.autoplay.timeout),
              (e.autoplay.timeout = g.nextTick(() => {
                e.params.autoplay.reverseDirection
                  ? e.params.loop
                    ? (e.loopFix(),
                      e.slidePrev(e.params.speed, !0, !0),
                      e.emit('autoplay'))
                    : e.isBeginning
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                        e.emit('autoplay'))
                    : (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
                  : e.params.loop
                  ? (e.loopFix(),
                    e.slideNext(e.params.speed, !0, !0),
                    e.emit('autoplay'))
                  : e.isEnd
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay'))
                  : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay')),
                  e.params.cssMode && e.autoplay.running && e.autoplay.run();
              }, i));
          },
          start() {
            return (
              void 0 === this.autoplay.timeout &&
              !this.autoplay.running &&
              ((this.autoplay.running = !0),
              this.emit('autoplayStart'),
              this.autoplay.run(),
              !0)
            );
          },
          stop() {
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
          pause(e) {
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
        ne = {
          setTranslate() {
            const e = this,
              { slides: t } = e;
            for (let i = 0; i < t.length; i += 1) {
              const t = e.slides.eq(i);
              let s = -t[0].swiperSlideOffset;
              e.params.virtualTranslate || (s -= e.translate);
              let a = 0;
              e.isHorizontal() || ((a = s), (s = 0));
              const n = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(t[0].progress), 0)
                : 1 + Math.min(Math.max(t[0].progress, -1), 0);
              t.css({ opacity: n }).transform(
                `translate3d(${s}px, ${a}px, 0px)`
              );
            }
          },
          setTransition(e) {
            const t = this,
              { slides: i, $wrapperEl: s } = t;
            if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
              let e = !1;
              i.transitionEnd(() => {
                if (e) return;
                if (!t || t.destroyed) return;
                (e = !0), (t.animating = !1);
                const i = ['webkitTransitionEnd', 'transitionend'];
                for (let e = 0; e < i.length; e += 1) s.trigger(i[e]);
              });
            }
          }
        },
        re = {
          setTranslate() {
            const {
                $el: e,
                $wrapperEl: t,
                slides: i,
                width: s,
                height: a,
                rtlTranslate: n,
                size: r
              } = this,
              o = this.params.cubeEffect,
              l = this.isHorizontal(),
              d = this.virtual && this.params.virtual.enabled;
            let p,
              c = 0;
            o.shadow &&
              (l
                ? ((p = t.find('.swiper-cube-shadow')),
                  0 === p.length &&
                    ((p = h('<div class="swiper-cube-shadow"></div>')),
                    t.append(p)),
                  p.css({ height: s + 'px' }))
                : ((p = e.find('.swiper-cube-shadow')),
                  0 === p.length &&
                    ((p = h('<div class="swiper-cube-shadow"></div>')),
                    e.append(p))));
            for (let u = 0; u < i.length; u += 1) {
              const e = i.eq(u);
              let t = u;
              d && (t = parseInt(e.attr('data-swiper-slide-index'), 10));
              let s = 90 * t,
                a = Math.floor(s / 360);
              n && ((s = -s), (a = Math.floor(-s / 360)));
              const p = Math.max(Math.min(e[0].progress, 1), -1);
              let g = 0,
                m = 0,
                f = 0;
              t % 4 == 0
                ? ((g = 4 * -a * r), (f = 0))
                : (t - 1) % 4 == 0
                ? ((g = 0), (f = 4 * -a * r))
                : (t - 2) % 4 == 0
                ? ((g = r + 4 * a * r), (f = r))
                : (t - 3) % 4 == 0 && ((g = -r), (f = 3 * r + 4 * r * a)),
                n && (g = -g),
                l || ((m = g), (g = 0));
              const w = `rotateX(${l ? 0 : -s}deg) rotateY(${
                l ? s : 0
              }deg) translate3d(${g}px, ${m}px, ${f}px)`;
              if (
                (p <= 1 &&
                  p > -1 &&
                  ((c = 90 * t + 90 * p), n && (c = 90 * -t - 90 * p)),
                e.transform(w),
                o.slideShadows)
              ) {
                let t = e.find(
                    l ? '.swiper-slide-shadow-left' : '.swiper-slide-shadow-top'
                  ),
                  i = e.find(
                    l
                      ? '.swiper-slide-shadow-right'
                      : '.swiper-slide-shadow-bottom'
                  );
                0 === t.length &&
                  ((t = h(
                    `<div class="swiper-slide-shadow-${
                      l ? 'left' : 'top'
                    }"></div>`
                  )),
                  e.append(t)),
                  0 === i.length &&
                    ((i = h(
                      `<div class="swiper-slide-shadow-${
                        l ? 'right' : 'bottom'
                      }"></div>`
                    )),
                    e.append(i)),
                  t.length && (t[0].style.opacity = Math.max(-p, 0)),
                  i.length && (i[0].style.opacity = Math.max(p, 0));
              }
            }
            if (
              (t.css({
                '-webkit-transform-origin': `50% 50% -${r / 2}px`,
                '-moz-transform-origin': `50% 50% -${r / 2}px`,
                '-ms-transform-origin': `50% 50% -${r / 2}px`,
                'transform-origin': `50% 50% -${r / 2}px`
              }),
              o.shadow)
            )
              if (l)
                p.transform(
                  `translate3d(0px, ${s / 2 + o.shadowOffset}px, ${-s /
                    2}px) rotateX(90deg) rotateZ(0deg) scale(${o.shadowScale})`
                );
              else {
                const e = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                  t =
                    1.5 -
                    (Math.sin((2 * e * Math.PI) / 360) / 2 +
                      Math.cos((2 * e * Math.PI) / 360) / 2),
                  i = o.shadowScale / t;
                p.transform(
                  `scale3d(${o.shadowScale}, 1, ${i}) translate3d(0px, ${a / 2 +
                    o.shadowOffset}px, ${-a / 2 / i}px) rotateX(-90deg)`
                );
              }
            t.transform(
              `translate3d(0px,0,${
                G.isSafari || G.isWebView ? -r / 2 : 0
              }px) rotateX(${this.isHorizontal() ? 0 : c}deg) rotateY(${
                this.isHorizontal() ? -c : 0
              }deg)`
            );
          },
          setTransition(e) {
            const { $el: t, slides: i } = this;
            i
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
        oe = {
          setTranslate() {
            const e = this,
              { slides: t, rtlTranslate: i } = e;
            for (let s = 0; s < t.length; s += 1) {
              const a = t.eq(s);
              let n = a[0].progress;
              e.params.flipEffect.limitRotation &&
                (n = Math.max(Math.min(a[0].progress, 1), -1));
              let r = -180 * n,
                o = 0,
                l = -a[0].swiperSlideOffset,
                d = 0;
              if (
                (e.isHorizontal()
                  ? i && (r = -r)
                  : ((d = l), (l = 0), (o = -r), (r = 0)),
                (a[0].style.zIndex = -Math.abs(Math.round(n)) + t.length),
                e.params.flipEffect.slideShadows)
              ) {
                let t = e.isHorizontal()
                    ? a.find('.swiper-slide-shadow-left')
                    : a.find('.swiper-slide-shadow-top'),
                  i = e.isHorizontal()
                    ? a.find('.swiper-slide-shadow-right')
                    : a.find('.swiper-slide-shadow-bottom');
                0 === t.length &&
                  ((t = h(
                    `<div class="swiper-slide-shadow-${
                      e.isHorizontal() ? 'left' : 'top'
                    }"></div>`
                  )),
                  a.append(t)),
                  0 === i.length &&
                    ((i = h(
                      `<div class="swiper-slide-shadow-${
                        e.isHorizontal() ? 'right' : 'bottom'
                      }"></div>`
                    )),
                    a.append(i)),
                  t.length && (t[0].style.opacity = Math.max(-n, 0)),
                  i.length && (i[0].style.opacity = Math.max(n, 0));
              }
              a.transform(
                `translate3d(${l}px, ${d}px, 0px) rotateX(${o}deg) rotateY(${r}deg)`
              );
            }
          },
          setTransition(e) {
            const t = this,
              { slides: i, activeIndex: s, $wrapperEl: a } = t;
            if (
              (i
                .transition(e)
                .find(
                  '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                )
                .transition(e),
              t.params.virtualTranslate && 0 !== e)
            ) {
              let e = !1;
              i.eq(s).transitionEnd(function() {
                if (e) return;
                if (!t || t.destroyed) return;
                (e = !0), (t.animating = !1);
                const i = ['webkitTransitionEnd', 'transitionend'];
                for (let e = 0; e < i.length; e += 1) a.trigger(i[e]);
              });
            }
          }
        },
        le = {
          setTranslate() {
            const {
                width: e,
                height: t,
                slides: i,
                $wrapperEl: s,
                slidesSizesGrid: a
              } = this,
              n = this.params.coverflowEffect,
              r = this.isHorizontal(),
              o = this.translate,
              l = r ? e / 2 - o : t / 2 - o,
              d = r ? n.rotate : -n.rotate,
              p = n.depth;
            for (let c = 0, u = i.length; c < u; c += 1) {
              const e = i.eq(c),
                t = a[c],
                s = ((l - e[0].swiperSlideOffset - t / 2) / t) * n.modifier;
              let o = r ? d * s : 0,
                u = r ? 0 : d * s,
                g = -p * Math.abs(s),
                m = n.stretch;
              'string' == typeof m &&
                -1 !== m.indexOf('%') &&
                (m = (parseFloat(n.stretch) / 100) * t);
              let f = r ? 0 : m * s,
                w = r ? m * s : 0,
                v = 1 - (1 - n.scale) * Math.abs(s);
              if (
                (Math.abs(w) < 0.001 && (w = 0),
                Math.abs(f) < 0.001 && (f = 0),
                Math.abs(g) < 0.001 && (g = 0),
                Math.abs(o) < 0.001 && (o = 0),
                Math.abs(u) < 0.001 && (u = 0),
                Math.abs(v) < 0.001 && (v = 0),
                e.transform(
                  `translate3d(${w}px,${f}px,${g}px)  rotateX(${u}deg) rotateY(${o}deg) scale(${v})`
                ),
                (e[0].style.zIndex = 1 - Math.abs(Math.round(s))),
                n.slideShadows)
              ) {
                let t = e.find(
                    r ? '.swiper-slide-shadow-left' : '.swiper-slide-shadow-top'
                  ),
                  i = e.find(
                    r
                      ? '.swiper-slide-shadow-right'
                      : '.swiper-slide-shadow-bottom'
                  );
                0 === t.length &&
                  ((t = h(
                    `<div class="swiper-slide-shadow-${
                      r ? 'left' : 'top'
                    }"></div>`
                  )),
                  e.append(t)),
                  0 === i.length &&
                    ((i = h(
                      `<div class="swiper-slide-shadow-${
                        r ? 'right' : 'bottom'
                      }"></div>`
                    )),
                    e.append(i)),
                  t.length && (t[0].style.opacity = s > 0 ? s : 0),
                  i.length && (i[0].style.opacity = -s > 0 ? -s : 0);
              }
            }
            (m.pointerEvents || m.prefixedPointerEvents) &&
              (s[0].style.perspectiveOrigin = l + 'px 50%');
          },
          setTransition(e) {
            this.slides
              .transition(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
              )
              .transition(e);
          }
        },
        de = {
          init() {
            const { thumbs: e } = this.params,
              t = this.constructor;
            e.swiper instanceof t
              ? ((this.thumbs.swiper = e.swiper),
                g.extend(this.thumbs.swiper.originalParams, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1
                }),
                g.extend(this.thumbs.swiper.params, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1
                }))
              : g.isObject(e.swiper) &&
                ((this.thumbs.swiper = new t(
                  g.extend({}, e.swiper, {
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
          onThumbClick() {
            const e = this,
              t = e.thumbs.swiper;
            if (!t) return;
            const i = t.clickedIndex,
              s = t.clickedSlide;
            if (s && h(s).hasClass(e.params.thumbs.slideThumbActiveClass))
              return;
            if (null == i) return;
            let a;
            if (
              ((a = t.params.loop
                ? parseInt(
                    h(t.clickedSlide).attr('data-swiper-slide-index'),
                    10
                  )
                : i),
              e.params.loop)
            ) {
              let t = e.activeIndex;
              e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (t = e.activeIndex));
              const i = e.slides
                  .eq(t)
                  .prevAll(`[data-swiper-slide-index="${a}"]`)
                  .eq(0)
                  .index(),
                s = e.slides
                  .eq(t)
                  .nextAll(`[data-swiper-slide-index="${a}"]`)
                  .eq(0)
                  .index();
              a = void 0 === i ? s : void 0 === s ? i : s - t < t - i ? s : i;
            }
            e.slideTo(a);
          },
          update(e) {
            const t = this,
              i = t.thumbs.swiper;
            if (!i) return;
            const s =
                'auto' === i.params.slidesPerView
                  ? i.slidesPerViewDynamic()
                  : i.params.slidesPerView,
              a = t.params.thumbs.autoScrollOffset,
              n = a && !i.params.loop;
            if (t.realIndex !== i.realIndex || n) {
              let r,
                o,
                l = i.activeIndex;
              if (i.params.loop) {
                i.slides.eq(l).hasClass(i.params.slideDuplicateClass) &&
                  (i.loopFix(),
                  (i._clientLeft = i.$wrapperEl[0].clientLeft),
                  (l = i.activeIndex));
                const e = i.slides
                    .eq(l)
                    .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                    .eq(0)
                    .index(),
                  s = i.slides
                    .eq(l)
                    .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                    .eq(0)
                    .index();
                (r =
                  void 0 === e
                    ? s
                    : void 0 === s
                    ? e
                    : s - l == l - e
                    ? l
                    : s - l < l - e
                    ? s
                    : e),
                  (o = t.activeIndex > t.previousIndex ? 'next' : 'prev');
              } else
                (r = t.realIndex), (o = r > t.previousIndex ? 'next' : 'prev');
              n && (r += 'next' === o ? a : -1 * a),
                i.visibleSlidesIndexes &&
                  i.visibleSlidesIndexes.indexOf(r) < 0 &&
                  (i.params.centeredSlides
                    ? (r =
                        r > l
                          ? r - Math.floor(s / 2) + 1
                          : r + Math.floor(s / 2) - 1)
                    : r > l && (r = r - s + 1),
                  i.slideTo(r, e ? 0 : void 0));
            }
            let r = 1;
            const o = t.params.thumbs.slideThumbActiveClass;
            if (
              (t.params.slidesPerView > 1 &&
                !t.params.centeredSlides &&
                (r = t.params.slidesPerView),
              t.params.thumbs.multipleActiveThumbs || (r = 1),
              (r = Math.floor(r)),
              i.slides.removeClass(o),
              i.params.loop || (i.params.virtual && i.params.virtual.enabled))
            )
              for (let l = 0; l < r; l += 1)
                i.$wrapperEl
                  .children(`[data-swiper-slide-index="${t.realIndex + l}"]`)
                  .addClass(o);
            else
              for (let l = 0; l < r; l += 1)
                i.slides.eq(t.realIndex + l).addClass(o);
          }
        },
        pe = [
          D,
          R,
          B,
          H,
          Y,
          V,
          W,
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
            create() {
              g.extend(this, {
                mousewheel: {
                  enabled: !1,
                  enable: j.enable.bind(this),
                  disable: j.disable.bind(this),
                  handle: j.handle.bind(this),
                  handleMouseEnter: j.handleMouseEnter.bind(this),
                  handleMouseLeave: j.handleMouseLeave.bind(this),
                  animateSlider: j.animateSlider.bind(this),
                  releaseScroll: j.releaseScroll.bind(this),
                  lastScrollTime: g.now(),
                  lastEventBeforeSnap: void 0,
                  recentWheelEvents: []
                }
              });
            },
            on: {
              init() {
                !this.params.mousewheel.enabled &&
                  this.params.cssMode &&
                  this.mousewheel.disable(),
                  this.params.mousewheel.enabled && this.mousewheel.enable();
              },
              destroy() {
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
            create() {
              g.extend(this, {
                navigation: {
                  init: U.init.bind(this),
                  update: U.update.bind(this),
                  destroy: U.destroy.bind(this),
                  onNextClick: U.onNextClick.bind(this),
                  onPrevClick: U.onPrevClick.bind(this)
                }
              });
            },
            on: {
              init() {
                this.navigation.init(), this.navigation.update();
              },
              toEdge() {
                this.navigation.update();
              },
              fromEdge() {
                this.navigation.update();
              },
              destroy() {
                this.navigation.destroy();
              },
              click(e) {
                const t = this,
                  { $nextEl: i, $prevEl: s } = t.navigation;
                if (
                  t.params.navigation.hideOnClick &&
                  !h(e.target).is(s) &&
                  !h(e.target).is(i)
                ) {
                  let e;
                  i
                    ? (e = i.hasClass(t.params.navigation.hiddenClass))
                    : s && (e = s.hasClass(t.params.navigation.hiddenClass)),
                    t.emit(!0 === e ? 'navigationShow' : 'navigationHide', t),
                    i && i.toggleClass(t.params.navigation.hiddenClass),
                    s && s.toggleClass(t.params.navigation.hiddenClass);
                }
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
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
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
            create() {
              g.extend(this, {
                pagination: {
                  init: q.init.bind(this),
                  render: q.render.bind(this),
                  update: q.update.bind(this),
                  destroy: q.destroy.bind(this),
                  dynamicBulletIndex: 0
                }
              });
            },
            on: {
              init() {
                this.pagination.init(),
                  this.pagination.render(),
                  this.pagination.update();
              },
              activeIndexChange() {
                (this.params.loop || void 0 === this.snapIndex) &&
                  this.pagination.update();
              },
              snapIndexChange() {
                this.params.loop || this.pagination.update();
              },
              slidesLengthChange() {
                this.params.loop &&
                  (this.pagination.render(), this.pagination.update());
              },
              snapGridLengthChange() {
                this.params.loop ||
                  (this.pagination.render(), this.pagination.update());
              },
              destroy() {
                this.pagination.destroy();
              },
              click(e) {
                const t = this;
                if (
                  t.params.pagination.el &&
                  t.params.pagination.hideOnClick &&
                  t.pagination.$el.length > 0 &&
                  !h(e.target).hasClass(t.params.pagination.bulletClass)
                ) {
                  const e = t.pagination.$el.hasClass(
                    t.params.pagination.hiddenClass
                  );
                  t.emit(!0 === e ? 'paginationShow' : 'paginationHide', t),
                    t.pagination.$el.toggleClass(
                      t.params.pagination.hiddenClass
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
            create() {
              g.extend(this, {
                scrollbar: {
                  init: Z.init.bind(this),
                  destroy: Z.destroy.bind(this),
                  updateSize: Z.updateSize.bind(this),
                  setTranslate: Z.setTranslate.bind(this),
                  setTransition: Z.setTransition.bind(this),
                  enableDraggable: Z.enableDraggable.bind(this),
                  disableDraggable: Z.disableDraggable.bind(this),
                  setDragPosition: Z.setDragPosition.bind(this),
                  getPointerPosition: Z.getPointerPosition.bind(this),
                  onDragStart: Z.onDragStart.bind(this),
                  onDragMove: Z.onDragMove.bind(this),
                  onDragEnd: Z.onDragEnd.bind(this),
                  isTouched: !1,
                  timeout: null,
                  dragTimeout: null
                }
              });
            },
            on: {
              init() {
                this.scrollbar.init(),
                  this.scrollbar.updateSize(),
                  this.scrollbar.setTranslate();
              },
              update() {
                this.scrollbar.updateSize();
              },
              resize() {
                this.scrollbar.updateSize();
              },
              observerUpdate() {
                this.scrollbar.updateSize();
              },
              setTranslate() {
                this.scrollbar.setTranslate();
              },
              setTransition(e) {
                this.scrollbar.setTransition(e);
              },
              destroy() {
                this.scrollbar.destroy();
              }
            }
          },
          {
            name: 'parallax',
            params: { parallax: { enabled: !1 } },
            create() {
              g.extend(this, {
                parallax: {
                  setTransform: K.setTransform.bind(this),
                  setTranslate: K.setTranslate.bind(this),
                  setTransition: K.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit() {
                this.params.parallax.enabled &&
                  ((this.params.watchSlidesProgress = !0),
                  (this.originalParams.watchSlidesProgress = !0));
              },
              init() {
                this.params.parallax.enabled && this.parallax.setTranslate();
              },
              setTranslate() {
                this.params.parallax.enabled && this.parallax.setTranslate();
              },
              setTransition(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e);
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
            create() {
              const e = this,
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
                .forEach(i => {
                  t[i] = Q[i].bind(e);
                }),
                g.extend(e, { zoom: t });
              let i = 1;
              Object.defineProperty(e.zoom, 'scale', {
                get: () => i,
                set(t) {
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
              init() {
                this.params.zoom.enabled && this.zoom.enable();
              },
              destroy() {
                this.zoom.disable();
              },
              touchStart(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e);
              },
              touchEnd(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e);
              },
              doubleTap(e) {
                this.params.zoom.enabled &&
                  this.zoom.enabled &&
                  this.params.zoom.toggle &&
                  this.zoom.toggle(e);
              },
              transitionEnd() {
                this.zoom.enabled &&
                  this.params.zoom.enabled &&
                  this.zoom.onTransitionEnd();
              },
              slideChange() {
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
            create() {
              g.extend(this, {
                lazy: {
                  initialImageLoaded: !1,
                  load: J.load.bind(this),
                  loadInSlide: J.loadInSlide.bind(this)
                }
              });
            },
            on: {
              beforeInit() {
                this.params.lazy.enabled &&
                  this.params.preloadImages &&
                  (this.params.preloadImages = !1);
              },
              init() {
                this.params.lazy.enabled &&
                  !this.params.loop &&
                  0 === this.params.initialSlide &&
                  this.lazy.load();
              },
              scroll() {
                this.params.freeMode &&
                  !this.params.freeModeSticky &&
                  this.lazy.load();
              },
              resize() {
                this.params.lazy.enabled && this.lazy.load();
              },
              scrollbarDragMove() {
                this.params.lazy.enabled && this.lazy.load();
              },
              transitionStart() {
                this.params.lazy.enabled &&
                  (this.params.lazy.loadOnTransitionStart ||
                    (!this.params.lazy.loadOnTransitionStart &&
                      !this.lazy.initialImageLoaded)) &&
                  this.lazy.load();
              },
              transitionEnd() {
                this.params.lazy.enabled &&
                  !this.params.lazy.loadOnTransitionStart &&
                  this.lazy.load();
              },
              slideChange() {
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
            create() {
              g.extend(this, {
                controller: {
                  control: this.params.controller.control,
                  getInterpolateFunction: ee.getInterpolateFunction.bind(this),
                  setTranslate: ee.setTranslate.bind(this),
                  setTransition: ee.setTransition.bind(this)
                }
              });
            },
            on: {
              update() {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0),
                  delete this.controller.spline);
              },
              resize() {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0),
                  delete this.controller.spline);
              },
              observerUpdate() {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0),
                  delete this.controller.spline);
              },
              setTranslate(e, t) {
                this.controller.control && this.controller.setTranslate(e, t);
              },
              setTransition(e, t) {
                this.controller.control && this.controller.setTransition(e, t);
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
            create() {
              const e = this;
              g.extend(e, {
                a11y: {
                  liveRegion: h(
                    `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
                  )
                }
              }),
                Object.keys(te).forEach(t => {
                  e.a11y[t] = te[t].bind(e);
                });
            },
            on: {
              init() {
                this.params.a11y.enabled &&
                  (this.a11y.init(), this.a11y.updateNavigation());
              },
              toEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation();
              },
              fromEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation();
              },
              paginationUpdate() {
                this.params.a11y.enabled && this.a11y.updatePagination();
              },
              destroy() {
                this.params.a11y.enabled && this.a11y.destroy();
              }
            }
          },
          {
            name: 'history',
            params: {
              history: { enabled: !1, replaceState: !1, key: 'slides' }
            },
            create() {
              g.extend(this, {
                history: {
                  init: ie.init.bind(this),
                  setHistory: ie.setHistory.bind(this),
                  setHistoryPopState: ie.setHistoryPopState.bind(this),
                  scrollToSlide: ie.scrollToSlide.bind(this),
                  destroy: ie.destroy.bind(this)
                }
              });
            },
            on: {
              init() {
                this.params.history.enabled && this.history.init();
              },
              destroy() {
                this.params.history.enabled && this.history.destroy();
              },
              transitionEnd() {
                this.history.initialized &&
                  this.history.setHistory(
                    this.params.history.key,
                    this.activeIndex
                  );
              },
              slideChange() {
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
              hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 }
            },
            create() {
              g.extend(this, {
                hashNavigation: {
                  initialized: !1,
                  init: se.init.bind(this),
                  destroy: se.destroy.bind(this),
                  setHash: se.setHash.bind(this),
                  onHashCange: se.onHashCange.bind(this)
                }
              });
            },
            on: {
              init() {
                this.params.hashNavigation.enabled &&
                  this.hashNavigation.init();
              },
              destroy() {
                this.params.hashNavigation.enabled &&
                  this.hashNavigation.destroy();
              },
              transitionEnd() {
                this.hashNavigation.initialized &&
                  this.hashNavigation.setHash();
              },
              slideChange() {
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
            create() {
              const e = this;
              g.extend(e, {
                autoplay: {
                  running: !1,
                  paused: !1,
                  run: ae.run.bind(e),
                  start: ae.start.bind(e),
                  stop: ae.stop.bind(e),
                  pause: ae.pause.bind(e),
                  onVisibilityChange() {
                    'hidden' === document.visibilityState &&
                      e.autoplay.running &&
                      e.autoplay.pause(),
                      'visible' === document.visibilityState &&
                        e.autoplay.paused &&
                        (e.autoplay.run(), (e.autoplay.paused = !1));
                  },
                  onTransitionEnd(t) {
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
              init() {
                this.params.autoplay.enabled &&
                  (this.autoplay.start(),
                  document.addEventListener(
                    'visibilitychange',
                    this.autoplay.onVisibilityChange
                  ));
              },
              beforeTransitionStart(e, t) {
                this.autoplay.running &&
                  (t || !this.params.autoplay.disableOnInteraction
                    ? this.autoplay.pause(e)
                    : this.autoplay.stop());
              },
              sliderFirstMove() {
                this.autoplay.running &&
                  (this.params.autoplay.disableOnInteraction
                    ? this.autoplay.stop()
                    : this.autoplay.pause());
              },
              touchEnd() {
                this.params.cssMode &&
                  this.autoplay.paused &&
                  !this.params.autoplay.disableOnInteraction &&
                  this.autoplay.run();
              },
              destroy() {
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
            create() {
              g.extend(this, {
                fadeEffect: {
                  setTranslate: ne.setTranslate.bind(this),
                  setTransition: ne.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit() {
                if ('fade' !== this.params.effect) return;
                this.classNames.push(
                  this.params.containerModifierClass + 'fade'
                );
                const e = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0
                };
                g.extend(this.params, e), g.extend(this.originalParams, e);
              },
              setTranslate() {
                'fade' === this.params.effect && this.fadeEffect.setTranslate();
              },
              setTransition(e) {
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
            create() {
              g.extend(this, {
                cubeEffect: {
                  setTranslate: re.setTranslate.bind(this),
                  setTransition: re.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit() {
                if ('cube' !== this.params.effect) return;
                this.classNames.push(
                  this.params.containerModifierClass + 'cube'
                ),
                  this.classNames.push(
                    this.params.containerModifierClass + '3d'
                  );
                const e = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0
                };
                g.extend(this.params, e), g.extend(this.originalParams, e);
              },
              setTranslate() {
                'cube' === this.params.effect && this.cubeEffect.setTranslate();
              },
              setTransition(e) {
                'cube' === this.params.effect &&
                  this.cubeEffect.setTransition(e);
              }
            }
          },
          {
            name: 'effect-flip',
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create() {
              g.extend(this, {
                flipEffect: {
                  setTranslate: oe.setTranslate.bind(this),
                  setTransition: oe.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit() {
                if ('flip' !== this.params.effect) return;
                this.classNames.push(
                  this.params.containerModifierClass + 'flip'
                ),
                  this.classNames.push(
                    this.params.containerModifierClass + '3d'
                  );
                const e = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0
                };
                g.extend(this.params, e), g.extend(this.originalParams, e);
              },
              setTranslate() {
                'flip' === this.params.effect && this.flipEffect.setTranslate();
              },
              setTransition(e) {
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
            create() {
              g.extend(this, {
                coverflowEffect: {
                  setTranslate: le.setTranslate.bind(this),
                  setTransition: le.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit() {
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
              setTranslate() {
                'coverflow' === this.params.effect &&
                  this.coverflowEffect.setTranslate();
              },
              setTransition(e) {
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
            create() {
              g.extend(this, {
                thumbs: {
                  swiper: null,
                  init: de.init.bind(this),
                  update: de.update.bind(this),
                  onThumbClick: de.onThumbClick.bind(this)
                }
              });
            },
            on: {
              beforeInit() {
                const { thumbs: e } = this.params;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
              },
              slideChange() {
                this.thumbs.swiper && this.thumbs.update();
              },
              update() {
                this.thumbs.swiper && this.thumbs.update();
              },
              resize() {
                this.thumbs.swiper && this.thumbs.update();
              },
              observerUpdate() {
                this.thumbs.swiper && this.thumbs.update();
              },
              setTransition(e) {
                const t = this.thumbs.swiper;
                t && t.setTransition(e);
              },
              beforeDestroy() {
                const e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy();
              }
            }
          }
        ];
      void 0 === N.use &&
        ((N.use = N.Class.use), (N.installModule = N.Class.installModule)),
        N.use(pe);
      var he = N;
      const ce = ['swiperSlides'],
        ue = ['*'],
        ge = new s.q('SWIPER_CONFIG'),
        me = [
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
        ];
      class fe {
        constructor(e = {}) {
          this.assign(e);
        }
        assign(e = {}, t) {
          t = t || this;
          for (const i in e)
            null == e[i] ||
            Array.isArray(e[i]) ||
            'object' != typeof e[i] ||
            ('undefined' != typeof HTMLElement && e[i] instanceof HTMLElement)
              ? (t[i] = e[i])
              : ((t[i] = {}), this.assign(e[i], t[i]));
        }
      }
      let we = (() => {
          let e = class {
            constructor(e, t, i, a, n) {
              (this.platformId = e),
                (this.zone = t),
                (this.elementRef = i),
                (this.differs = a),
                (this.defaults = n),
                (this.initialIndex = null),
                (this.configDiff = null),
                (this.disabled = !1),
                (this.performance = !1),
                (this.indexChange = new s.n()),
                (this.S_INIT = new s.n()),
                (this.S_BEFOREDESTROY = new s.n()),
                (this.S_SCROLL = new s.n()),
                (this.S_PROGRESS = new s.n()),
                (this.S_KEYPRESS = new s.n()),
                (this.S_RESIZE = new s.n()),
                (this.S_BREAKPOINT = new s.n()),
                (this.S_ZOOMCHANGE = new s.n()),
                (this.S_AFTERRESIZE = new s.n()),
                (this.S_BEFORERESIZE = new s.n()),
                (this.S_LOOPFIX = new s.n()),
                (this.S_BEFORELOOPFIX = new s.n()),
                (this.S_SLIDERMOVE = new s.n()),
                (this.S_SLIDECHANGE = new s.n()),
                (this.S_SETTRANSLATE = new s.n()),
                (this.S_SETTRANSITION = new s.n()),
                (this.S_FROMEDGE = new s.n()),
                (this.S_REACHEND = new s.n()),
                (this.S_REACHBEGINNING = new s.n()),
                (this.S_AUTOPLAY = new s.n()),
                (this.S_AUTOPLAYSTART = new s.n()),
                (this.S_AUTOPLAYSTOP = new s.n()),
                (this.S_IMAGESREADY = new s.n()),
                (this.S_LAZYIMAGELOAD = new s.n()),
                (this.S_LAZYIMAGEREADY = new s.n()),
                (this.S_SCROLLDRAGEND = new s.n()),
                (this.S_SCROLLDRAGMOVE = new s.n()),
                (this.S_SCROLLDRAGSTART = new s.n()),
                (this.S_NAVIGATIONHIDE = new s.n()),
                (this.S_NAVIGATIONSHOW = new s.n()),
                (this.S_PAGINATIONRENDER = new s.n()),
                (this.S_PAGINATIONUPDATE = new s.n()),
                (this.S_PAGINATIONHIDE = new s.n()),
                (this.S_PAGINATIONSHOW = new s.n()),
                (this.S_TAP = new s.n()),
                (this.S_CLICK = new s.n()),
                (this.S_DOUBLETAP = new s.n()),
                (this.S_TOUCHEND = new s.n()),
                (this.S_TOUCHMOVE = new s.n()),
                (this.S_TOUCHSTART = new s.n()),
                (this.S_TOUCHMOVEOPPOSITE = new s.n()),
                (this.S_TRANSITIONEND = new s.n()),
                (this.S_TRANSITIONSTART = new s.n()),
                (this.S_SLIDEPREVTRANSITIONEND = new s.n()),
                (this.S_SLIDEPREVTRANSITIONSTART = new s.n()),
                (this.S_SLIDENEXTTRANSITIONEND = new s.n()),
                (this.S_SLIDENEXTTRANSITIONSTART = new s.n()),
                (this.S_SLIDECHANGETRANSITIONEND = new s.n()),
                (this.S_SLIDECHANGETRANSITIONSTART = new s.n());
            }
            set index(e) {
              null != e && this.setIndex(e);
            }
            ngAfterViewInit() {
              if (!Object(a.v)(this.platformId)) return;
              const e = new fe(this.defaults);
              e.assign(this.config),
                !0 === e.scrollbar &&
                  (e.scrollbar = { el: '.swiper-scrollbar' }),
                !0 === e.pagination &&
                  (e.pagination = { el: '.swiper-pagination' }),
                !0 === e.navigation &&
                  (e.navigation = {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                  }),
                this.disabled &&
                  ((e.allowSlidePrev = !1), (e.allowSlideNext = !1)),
                null != this.initialIndex &&
                  ((e.initialSlide = this.initialIndex),
                  (this.initialIndex = null)),
                (e.on = {
                  slideChange: () => {
                    this.instance &&
                      this.indexChange.observers.length &&
                      this.emit(this.indexChange, this.instance.realIndex);
                  }
                }),
                this.zone.runOutsideAngular(() => {
                  this.instance = new he(this.elementRef.nativeElement, e);
                }),
                !1 !== e.init &&
                  this.S_INIT.observers.length &&
                  this.emit(this.S_INIT, this.instance),
                me.forEach(e => {
                  let t = e.replace('swiper', '');
                  (t = t.charAt(0).toLowerCase() + t.slice(1)),
                    this.instance.on(t, (...e) => {
                      1 === e.length && (e = e[0]);
                      const i = this['S_' + t.toUpperCase()];
                      i.observers.length && this.emit(i, e);
                    });
                }),
                this.configDiff ||
                  ((this.configDiff = this.differs
                    .find(this.config || {})
                    .create()),
                  this.configDiff.diff(this.config || {}));
            }
            ngOnDestroy() {
              this.instance &&
                (this.zone.runOutsideAngular(() => {
                  this.instance.destroy(!0, this.instance.initialized || !1);
                }),
                (this.instance = null));
            }
            ngDoCheck() {
              this.configDiff &&
                this.configDiff.diff(this.config || {}) &&
                ((this.initialIndex = this.getIndex(!0)),
                this.ngOnDestroy(),
                this.ngAfterViewInit(),
                this.update());
            }
            ngOnChanges(e) {
              this.instance &&
                e.disabled &&
                e.disabled.currentValue !== e.disabled.previousValue &&
                (!0 === e.disabled.currentValue ||
                  !1 === e.disabled.currentValue) &&
                this.zone.runOutsideAngular(() => {
                  this.ngOnDestroy(), this.ngAfterViewInit();
                });
            }
            emit(e, t) {
              this.performance ? e.emit(t) : this.zone.run(() => e.emit(t));
            }
            swiper() {
              return this.instance;
            }
            init() {
              this.instance &&
                this.zone.runOutsideAngular(() => {
                  this.instance.init();
                });
            }
            update() {
              setTimeout(() => {
                this.instance &&
                  this.zone.runOutsideAngular(() => {
                    this.instance.update();
                  });
              }, 0);
            }
            getIndex(e) {
              return this.instance
                ? e
                  ? this.instance.realIndex
                  : this.instance.activeIndex
                : this.initialIndex || 0;
            }
            setIndex(e, t, i) {
              if (this.instance) {
                let s = e * this.instance.params.slidesPerGroup;
                this.instance.params.loop && (s += this.instance.loopedSlides),
                  this.zone.runOutsideAngular(() => {
                    this.instance.slideTo(s, t, !i);
                  });
              } else this.initialIndex = e;
            }
            prevSlide(e, t) {
              this.instance &&
                this.zone.runOutsideAngular(() => {
                  this.instance.slidePrev(e, !t);
                });
            }
            nextSlide(e, t) {
              this.instance &&
                this.zone.runOutsideAngular(() => {
                  this.instance.slideNext(e, !t);
                });
            }
            stopAutoplay(e) {
              e && this.setIndex(0),
                this.instance &&
                  this.instance.autoplay &&
                  this.zone.runOutsideAngular(() => {
                    this.instance.autoplay.stop();
                  });
            }
            startAutoplay(e) {
              e && this.setIndex(0),
                this.instance &&
                  this.instance.autoplay &&
                  this.zone.runOutsideAngular(() => {
                    this.instance.autoplay.start();
                  });
            }
          };
          return (
            (e.ɵfac = function(t) {
              return new (t || e)(
                s.Lb(s.B),
                s.Lb(s.z),
                s.Lb(s.l),
                s.Lb(s.t),
                s.Lb(ge, 8)
              );
            }),
            (e.ɵdir = s.Gb({
              type: e,
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
              features: [s.vb]
            })),
            e
          );
        })(),
        ve = (() => {
          let e = class {
            constructor(e, t, i, a) {
              (this.zone = e),
                (this.cdRef = t),
                (this.platformId = i),
                (this.defaults = a),
                (this.mo = null),
                (this.swiperConfig = null),
                (this.paginationBackup = null),
                (this.paginationConfig = null),
                (this.index = null),
                (this.disabled = !1),
                (this.performance = !1),
                (this.useSwiperClass = !0),
                (this.indexChange = new s.n()),
                (this.S_INIT = new s.n()),
                (this.S_BEFOREDESTROY = new s.n()),
                (this.S_SCROLL = new s.n()),
                (this.S_PROGRESS = new s.n()),
                (this.S_KEYPRESS = new s.n()),
                (this.S_RESIZE = new s.n()),
                (this.S_BREAKPOINT = new s.n()),
                (this.S_ZOOMCHANGE = new s.n()),
                (this.S_AFTERRESIZE = new s.n()),
                (this.S_BEFORERESIZE = new s.n()),
                (this.S_BEFORELOOPFIX = new s.n()),
                (this.S_LOOPFIX = new s.n()),
                (this.S_SLIDERMOVE = new s.n()),
                (this.S_SLIDECHANGE = new s.n()),
                (this.S_SETTRANSLATE = new s.n()),
                (this.S_SETTRANSITION = new s.n()),
                (this.S_FROMEDGE = new s.n()),
                (this.S_REACHEND = new s.n()),
                (this.S_REACHBEGINNING = new s.n()),
                (this.S_AUTOPLAY = new s.n()),
                (this.S_AUTOPLAYSTART = new s.n()),
                (this.S_AUTOPLAYSTOP = new s.n()),
                (this.S_IMAGESREADY = new s.n()),
                (this.S_LAZYIMAGELOAD = new s.n()),
                (this.S_LAZYIMAGEREADY = new s.n()),
                (this.S_SCROLLDRAGEND = new s.n()),
                (this.S_SCROLLDRAGMOVE = new s.n()),
                (this.S_SCROLLDRAGSTART = new s.n()),
                (this.S_NAVIGATIONHIDE = new s.n()),
                (this.S_NAVIGATIONSHOW = new s.n()),
                (this.S_PAGINATIONRENDER = new s.n()),
                (this.S_PAGINATIONUPDATE = new s.n()),
                (this.S_PAGINATIONHIDE = new s.n()),
                (this.S_PAGINATIONSHOW = new s.n()),
                (this.S_TAP = new s.n()),
                (this.S_CLICK = new s.n()),
                (this.S_DOUBLETAP = new s.n()),
                (this.S_TOUCHEND = new s.n()),
                (this.S_TOUCHMOVE = new s.n()),
                (this.S_TOUCHSTART = new s.n()),
                (this.S_TOUCHMOVEOPPOSITE = new s.n()),
                (this.S_TRANSITIONEND = new s.n()),
                (this.S_TRANSITIONSTART = new s.n()),
                (this.S_SLIDEPREVTRANSITIONEND = new s.n()),
                (this.S_SLIDEPREVTRANSITIONSTART = new s.n()),
                (this.S_SLIDENEXTTRANSITIONEND = new s.n()),
                (this.S_SLIDENEXTTRANSITIONSTART = new s.n()),
                (this.S_SLIDECHANGETRANSITIONEND = new s.n()),
                (this.S_SLIDECHANGETRANSITIONSTART = new s.n());
            }
            get isAtLast() {
              return (
                !(!this.directiveRef || !this.directiveRef.swiper()) &&
                this.directiveRef.swiper().isEnd
              );
            }
            get isAtFirst() {
              return (
                !(!this.directiveRef || !this.directiveRef.swiper()) &&
                this.directiveRef.swiper().isBeginning
              );
            }
            ngAfterViewInit() {
              Object(a.v)(this.platformId) &&
                (this.zone.runOutsideAngular(() => {
                  this.updateClasses(),
                    this.swiperSlides &&
                      'undefined' != typeof MutationObserver &&
                      ((this.mo = new MutationObserver(() => {
                        this.updateClasses();
                      })),
                      this.mo.observe(this.swiperSlides.nativeElement, {
                        childList: !0
                      }));
                }),
                window.setTimeout(() => {
                  this.directiveRef &&
                    (this.S_INIT.emit(),
                    (this.directiveRef.indexChange = this.indexChange),
                    me.forEach(e => {
                      if (this.directiveRef) {
                        const t = 'S_' + e.replace('swiper', '').toUpperCase();
                        this.directiveRef[t] = this[t];
                      }
                    }));
                }, 0));
            }
            ngOnDestroy() {
              this.mo && this.mo.disconnect(),
                this.config &&
                  this.paginationBackup &&
                  (this.config.pagination = this.paginationBackup);
            }
            getConfig() {
              return (
                (this.swiperConfig = new fe(this.defaults)),
                this.swiperConfig.assign(this.config),
                !this.swiperSlides ||
                  (!0 !== this.swiperConfig.pagination &&
                    (!this.swiperConfig.pagination ||
                      'object' != typeof this.swiperConfig.pagination ||
                      (this.swiperConfig.pagination.type &&
                        'bullets' !== this.swiperConfig.pagination.type) ||
                      this.swiperConfig.pagination.renderBullet ||
                      '.swiper-pagination' !==
                        this.swiperConfig.pagination.el)) ||
                  ((this.config = this.config || {}),
                  this.paginationConfig ||
                    ((this.paginationBackup = this.config.pagination),
                    (this.paginationConfig = {
                      el: '.swiper-pagination',
                      renderBullet: (e, t) => {
                        let i = this.swiperSlides
                          ? Array.from(this.swiperSlides.nativeElement.children)
                          : [];
                        i = i.filter(e => e.classList.contains('swiper-slide'));
                        let s = `<span class="${t} ${t}-middle" index="${e}"></span>`;
                        return (
                          0 === e
                            ? (s = `<span class="${t} ${t}-first" index="${e}"></span>`)
                            : e === i.length - 1 &&
                              (s = `<span class="${t} ${t}-last" index="${e}"></span>`),
                          `<span class="swiper-pagination-handle" index="${e}">${s}</span>`
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
            updateClasses() {
              if (this.swiperSlides) {
                let e = !1;
                const t = this.swiperSlides.nativeElement.children;
                for (let i = 0; i < t.length; i++)
                  !1 === /swiper-.*/.test(t[i].className) &&
                    ((e = !0), t[i].classList.add('swiper-slide'));
                e && this.directiveRef && this.directiveRef.update();
              }
              this.cdRef.detectChanges();
            }
            onPaginationClick(e) {
              this.config &&
                this.directiveRef &&
                (!0 === this.config.pagination ||
                  (this.config.pagination &&
                    'object' == typeof this.config.pagination &&
                    (!this.config.pagination.type ||
                      'bullets' === this.config.pagination.type) &&
                    this.config.pagination.clickable &&
                    '.swiper-pagination' === this.config.pagination.el)) &&
                this.directiveRef.setIndex(e);
            }
          };
          return (
            (e.ɵfac = function(t) {
              return new (t || e)(s.Lb(s.z), s.Lb(s.h), s.Lb(s.B), s.Lb(ge, 8));
            }),
            (e.ɵcmp = s.Fb({
              type: e,
              selectors: [['swiper']],
              viewQuery: function(e, t) {
                var i;
                1 & e && (s.Jc(ce, !0), s.Jc(we, !0)),
                  2 & e &&
                    (s.sc((i = s.cc())) && (t.swiperSlides = i.first),
                    s.sc((i = s.cc())) && (t.directiveRef = i.first));
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
              ngContentSelectors: ue,
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
                  (s.jc(),
                  s.Qb(0, 'div', 0, 1),
                  s.Fc(2, '\n  '),
                  s.Qb(3, 'div', 2, 3),
                  s.Fc(5, '\n    '),
                  s.ic(6),
                  s.Fc(7, '\n  '),
                  s.Pb(),
                  s.Fc(8, '\n\n  '),
                  s.Mb(9, 'div', 4),
                  s.Fc(10, '\n\n  '),
                  s.Mb(11, 'div', 5),
                  s.Fc(12, '\n  '),
                  s.Mb(13, 'div', 6),
                  s.Fc(14, '\n\n  '),
                  s.Qb(15, 'div', 7),
                  s.bc('click', function(e) {
                    return t.onPaginationClick(e.target.getAttribute('index'));
                  })('keyup.enter', function(e) {
                    return t.onPaginationClick(e.target.getAttribute('index'));
                  }),
                  s.Pb(),
                  s.Fc(16, '\n'),
                  s.Pb(),
                  s.Fc(17, '\n')),
                  2 & e &&
                    (s.Db('swiper', t.useSwiperClass)(
                      'swiper-container',
                      t.useSwiperClass
                    ),
                    s.kc('swiper', t.getConfig())('index', t.index)(
                      'disabled',
                      t.disabled
                    )('performance', t.performance),
                    s.xb(9),
                    s.kc(
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
                    s.xb(2),
                    s.kc(
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
                    s.yb('disabled', t.isAtFirst || null),
                    s.xb(2),
                    s.kc(
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
                    s.yb('disabled', t.isAtLast || null),
                    s.xb(2),
                    s.kc(
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
              directives: [we],
              styles: [
                'swiper[fxflex]{display:-webkit-box;display:flex;flex-direction:inherit;min-width:0;min-height:0;-webkit-box-direction:inherit;-webkit-box-orient:inherit}swiper[fxflex]>.swiper.s-wrapper{flex:1 1 auto;min-width:0;min-height:0;-webkit-box-flex:1}swiper>.swiper.s-wrapper{width:100%;height:100%}swiper>.swiper.s-wrapper .swiper-wrapper .swiper-slide{will-change:transform;overflow:auto;width:100%;height:100%;max-width:100%;max-height:100%}swiper>.swiper.s-wrapper .swiper-pagination{pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle{position:relative;display:inline-block;padding:4px;margin:2px;cursor:pointer;pointer-events:all}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block;margin:0;pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{border:1px solid rgba(0,0,0,.5)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-prev{top:10px;left:50%;margin-top:0;margin-left:-13px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-next{top:auto;bottom:10px;left:50%;margin-top:0;margin-left:-13px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar{width:8px;-webkit-transition:width 250ms ease-in-out;transition:width 250ms ease-in-out}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar:hover{width:16px}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle{display:block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:0 -1px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar{height:8px;-webkit-transition:height 250ms ease-in-out;transition:height 250ms ease-in-out}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar:hover{height:16px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:-1px 0}',
                '@font-face{font-family:swiper-icons;src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff;--swiper-navigation-size:44px}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:flex;-webkit-transition-property:-webkit-transform;transition-property:transform,-webkit-transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:transform,-webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(-1 * var(--swiper-navigation-size)/ 2);z-index:10;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\'prev\'}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\'next\'}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:opacity .3s;transition:opacity .3s;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:transform .2s,top .2s;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:transform .2s,left .2s;transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:transform .2s,right .2s;transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:1s linear infinite swiper-preloader-spin;animation:1s linear infinite swiper-preloader-spin;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}'
              ],
              encapsulation: 2
            })),
            e
          );
        })(),
        be = (() => {
          let e = class {};
          return (
            (e.ɵmod = s.Jb({ type: e })),
            (e.ɵinj = s.Ib({
              factory: function(t) {
                return new (t || e)();
              },
              imports: [[a.b], a.b]
            })),
            e
          );
        })();
    }
  }
]);
