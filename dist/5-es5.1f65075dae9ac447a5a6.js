!(function() {
  function e(e) {
    return (
      (function(e) {
        if (Array.isArray(e)) return t(e);
      })(e) ||
      (function(e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      })(e) ||
      (function(e, n) {
        if (!e) return;
        if ('string' == typeof e) return t(e, n);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === i && e.constructor && (i = e.constructor.name);
        if ('Map' === i || 'Set' === i) return Array.from(e);
        if (
          'Arguments' === i ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
        )
          return t(e, n);
      })(e) ||
      (function() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function t(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function i(e, t, i) {
    return t && n(e.prototype, t), i && n(e, i), e;
  }
  function o(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
      '2d4A': function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
          return c;
        });
        var i = n('nhfI'),
          s = n('6NWb'),
          a = n('M0ag'),
          r = n('sYmb'),
          l = n('fXoL'),
          c = (function() {
            var e = function e() {
              o(this, e);
            };
            return (
              (e.ɵmod = l.Jb({ type: e })),
              (e.ɵinj = l.Ib({
                factory: function(t) {
                  return new (t || e)();
                },
                imports: [[i.c, s.b, a.a, r.a.forChild()]]
              })),
              e
            );
          })();
      },
      '8klf': function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
          return l;
        });
        var i = n('M0ag'),
          s = n('tyNb'),
          a = n('sYmb'),
          r = n('fXoL'),
          l = (function() {
            var e = function e() {
              o(this, e);
            };
            return (
              (e.ɵmod = r.Jb({ type: e })),
              (e.ɵinj = r.Ib({
                factory: function(t) {
                  return new (t || e)();
                },
                imports: [[i.a, s.g, a.a.forChild()]]
              })),
              e
            );
          })();
      },
      ORAR: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
          return r;
        });
        var i = n('tyNb'),
          s = n('sYmb'),
          a = n('fXoL'),
          r = (function() {
            var e = function e() {
              o(this, e);
            };
            return (
              (e.ɵmod = a.Jb({ type: e })),
              (e.ɵinj = a.Ib({
                factory: function(t) {
                  return new (t || e)();
                },
                imports: [[i.g, s.a.forChild()]]
              })),
              e
            );
          })();
      },
      'T7/b': function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
          return r;
        });
        var i = n('ofXK'),
          s = n('bqtT'),
          a = n('fXoL'),
          r = (function() {
            var e = function e() {
              o(this, e);
            };
            return (
              (e.ɵmod = a.Jb({ type: e })),
              (e.ɵinj = a.Ib({
                factory: function(t) {
                  return new (t || e)();
                },
                imports: [[i.b, s.b.forChild()]]
              })),
              e
            );
          })();
      },
      bqtT: function(t, n, s) {
        'use strict';
        s.d(n, 'c', function() {
          return b;
        }),
          s.d(n, 'a', function() {
            return v;
          }),
          s.d(n, 'b', function() {
            return p;
          });
        var a = s('fXoL'),
          r = s('ofXK'),
          l = ['nsmContent'],
          c = ['nsmDialog'],
          d = ['nsmOverlay'];
        function u(e, t) {
          if (1 & e) {
            var n = a.Rb();
            a.Qb(0, 'button', 9),
              a.bc('click', function() {
                return a.vc(n), a.fc(2).close();
              }),
              a.Fc(1, '\n            '),
              a.Mb(2, 'img', 10),
              a.Fc(3, '\n          '),
              a.Pb();
          }
        }
        var h = function(e, t) {
            return { transparent: e, overlay: !0, 'nsm-overlay-open': t };
          },
          f = function(e, t) {
            return ['nsm-dialog', e, t];
          };
        function m(e, t) {
          if (1 & e) {
            var n = a.Rb();
            a.Qb(0, 'div', 1, 2),
              a.bc('mousedown', function(e) {
                return a.vc(n), a.fc().dismiss(e);
              }),
              a.Fc(2, '\n      '),
              a.Qb(3, 'div', 3, 4),
              a.Fc(5, '\n        '),
              a.Qb(6, 'div', 5, 6),
              a.Fc(8, '\n          '),
              a.Qb(9, 'div', 7),
              a.Fc(10, '\n            '),
              a.ic(11),
              a.Fc(12, '\n          '),
              a.Pb(),
              a.Fc(13, '\n          '),
              a.Dc(14, u, 4, 0, 'button', 8),
              a.Fc(15, '\n        '),
              a.Pb(),
              a.Fc(16, '\n      '),
              a.Pb(),
              a.Fc(17, '\n    '),
              a.Pb();
          }
          if (2 & e) {
            var i = a.fc();
            a.Cc('z-index', i.visible ? i.layerPosition - 1 : -1),
              a.kc('ngClass', a.pc(7, h, !i.backdrop, i.openedClass)),
              a.xb(3),
              a.Cc('z-index', i.visible ? i.layerPosition : -1),
              a.kc(
                'ngClass',
                a.pc(
                  10,
                  f,
                  i.customClass,
                  i.openedClass ? 'nsm-dialog-open' : 'nsm-dialog-close'
                )
              ),
              a.xb(11),
              a.kc('ngIf', i.closable);
          }
        }
        var g = ['*'],
          v = (function() {
            var e = (function() {
              function e(t, n) {
                o(this, e),
                  (this._renderer = t),
                  (this._changeDetectorRef = n),
                  (this.closable = !0),
                  (this.escapable = !0),
                  (this.dismissable = !0),
                  (this.identifier = ''),
                  (this.customClass = 'nsm-dialog-animation-fade'),
                  (this.visible = !1),
                  (this.backdrop = !0),
                  (this.force = !0),
                  (this.hideDelay = 500),
                  (this.autostart = !1),
                  (this.target = ''),
                  (this.visibleChange = new a.n()),
                  (this.onClose = new a.n()),
                  (this.onCloseFinished = new a.n()),
                  (this.onDismiss = new a.n()),
                  (this.onDismissFinished = new a.n()),
                  (this.onAnyCloseEvent = new a.n()),
                  (this.onAnyCloseEventFinished = new a.n()),
                  (this.onOpen = new a.n()),
                  (this.onOpenFinished = new a.n()),
                  (this.onEscape = new a.n()),
                  (this.onDataAdded = new a.n()),
                  (this.onDataRemoved = new a.n()),
                  (this.layerPosition = 1041),
                  (this.overlayVisible = !1),
                  (this.openedClass = !1),
                  (this.createFrom = 'html');
              }
              return (
                i(e, [
                  {
                    key: 'ngOnInit',
                    value: function() {
                      if (!this.identifier || !this.identifier.length)
                        throw new Error(
                          'identifier field isn\u2019t set. Please set one before calling <ngx-smart-modal> in a template.'
                        );
                      this._sendEvent('create');
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function() {
                      this._sendEvent('delete');
                    }
                  },
                  {
                    key: 'open',
                    value: function(e) {
                      return this._sendEvent('open', { top: e }), this;
                    }
                  },
                  {
                    key: 'close',
                    value: function() {
                      return this._sendEvent('close'), this;
                    }
                  },
                  {
                    key: 'dismiss',
                    value: function(e) {
                      return this.dismissable &&
                        e.target.classList.contains('overlay')
                        ? (this._sendEvent('dismiss'), this)
                        : this;
                    }
                  },
                  {
                    key: 'toggle',
                    value: function(e) {
                      return this._sendEvent('toggle', { top: e }), this;
                    }
                  },
                  {
                    key: 'addCustomClass',
                    value: function(e) {
                      return (
                        this.customClass.length
                          ? (this.customClass += ' ' + e)
                          : (this.customClass = e),
                        this
                      );
                    }
                  },
                  {
                    key: 'removeCustomClass',
                    value: function(e) {
                      return (
                        (this.customClass = e
                          ? this.customClass.replace(e, '').trim()
                          : ''),
                        this
                      );
                    }
                  },
                  {
                    key: 'isVisible',
                    value: function() {
                      return this.visible;
                    }
                  },
                  {
                    key: 'hasData',
                    value: function() {
                      return void 0 !== this._data;
                    }
                  },
                  {
                    key: 'setData',
                    value: function(e, t) {
                      return (
                        (!this.hasData() || (this.hasData() && t)) &&
                          ((this._data = e),
                          this.onDataAdded.emit(this._data),
                          this.markForCheck()),
                        this
                      );
                    }
                  },
                  {
                    key: 'getData',
                    value: function() {
                      return this._data;
                    }
                  },
                  {
                    key: 'removeData',
                    value: function() {
                      return (
                        (this._data = void 0),
                        this.onDataRemoved.emit(!0),
                        this.markForCheck(),
                        this
                      );
                    }
                  },
                  {
                    key: 'addBodyClass',
                    value: function() {
                      return (
                        this._renderer.addClass(document.body, 'dialog-open'),
                        this
                      );
                    }
                  },
                  {
                    key: 'removeBodyClass',
                    value: function() {
                      return (
                        this._renderer.removeClass(
                          document.body,
                          'dialog-open'
                        ),
                        this
                      );
                    }
                  },
                  {
                    key: 'markForCheck',
                    value: function() {
                      try {
                        this._changeDetectorRef.detectChanges();
                      } catch (e) {}
                      this._changeDetectorRef.markForCheck();
                    }
                  },
                  {
                    key: 'targetPlacement',
                    value: function() {
                      if (
                        !(
                          this.nsmDialog.length &&
                          this.nsmContent.length &&
                          this.nsmOverlay.length &&
                          this.target
                        )
                      )
                        return !1;
                      var e = document.querySelector(this.target);
                      if (!e) return !1;
                      var t = e.getBoundingClientRect(),
                        n = this.nsmOverlay.first.nativeElement.getBoundingClientRect(),
                        i = this.nsmContent.first.nativeElement.getBoundingClientRect(),
                        o = this.nsmDialog.first.nativeElement.getBoundingClientRect(),
                        s = parseInt(
                          getComputedStyle(this.nsmContent.first.nativeElement)
                            .marginLeft,
                          10
                        ),
                        a = parseInt(
                          getComputedStyle(this.nsmContent.first.nativeElement)
                            .marginTop,
                          10
                        ),
                        r = t.top - o.top - (i.height - t.height) / 2,
                        l = t.left - o.left - (i.width - t.width) / 2;
                      l + o.left + i.width + 2 * s > n.width
                        ? (l = n.width - (o.left + i.width) - 2 * s)
                        : l + o.left < 0 && (l = -o.left),
                        r + o.top + i.height + a > n.height &&
                          (r = n.height - (o.top + i.height) - a),
                        this._renderer.setStyle(
                          this.nsmContent.first.nativeElement,
                          'top',
                          (r < 0 ? 0 : r) + 'px'
                        ),
                        this._renderer.setStyle(
                          this.nsmContent.first.nativeElement,
                          'left',
                          l + 'px'
                        );
                    }
                  },
                  {
                    key: '_sendEvent',
                    value: function(e, t) {
                      var n = new CustomEvent('ngx-smart-modal.' + e, {
                        detail: {
                          extraData: t,
                          instance: { id: this.identifier, modal: this }
                        }
                      });
                      window.dispatchEvent(n);
                    }
                  }
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function(t) {
                return new (t || e)(a.Lb(a.D), a.Lb(a.h));
              }),
              (e.ɵcmp = a.Fb({
                type: e,
                selectors: [['ngx-smart-modal']],
                viewQuery: function(e, t) {
                  var n;
                  1 & e && (a.Jc(l, !0), a.Jc(c, !0), a.Jc(d, !0)),
                    2 & e &&
                      (a.sc((n = a.cc())) && (t.nsmContent = n),
                      a.sc((n = a.cc())) && (t.nsmDialog = n),
                      a.sc((n = a.cc())) && (t.nsmOverlay = n));
                },
                hostBindings: function(e, t) {
                  1 & e &&
                    a.bc(
                      'resize',
                      function() {
                        return t.targetPlacement();
                      },
                      !1,
                      a.uc
                    );
                },
                inputs: {
                  closable: 'closable',
                  escapable: 'escapable',
                  dismissable: 'dismissable',
                  identifier: 'identifier',
                  customClass: 'customClass',
                  visible: 'visible',
                  backdrop: 'backdrop',
                  force: 'force',
                  hideDelay: 'hideDelay',
                  autostart: 'autostart',
                  target: 'target'
                },
                outputs: {
                  visibleChange: 'visibleChange',
                  onClose: 'onClose',
                  onCloseFinished: 'onCloseFinished',
                  onDismiss: 'onDismiss',
                  onDismissFinished: 'onDismissFinished',
                  onAnyCloseEvent: 'onAnyCloseEvent',
                  onAnyCloseEventFinished: 'onAnyCloseEventFinished',
                  onOpen: 'onOpen',
                  onOpenFinished: 'onOpenFinished',
                  onEscape: 'onEscape',
                  onDataAdded: 'onDataAdded',
                  onDataRemoved: 'onDataRemoved'
                },
                ngContentSelectors: g,
                decls: 3,
                vars: 1,
                consts: [
                  [3, 'z-index', 'ngClass', 'mousedown', 4, 'ngIf'],
                  [3, 'ngClass', 'mousedown'],
                  ['nsmOverlay', ''],
                  [3, 'ngClass'],
                  ['nsmDialog', ''],
                  [1, 'nsm-content'],
                  ['nsmContent', ''],
                  [1, 'nsm-body'],
                  [
                    'type',
                    'button',
                    'aria-label',
                    'Close',
                    'class',
                    'nsm-dialog-btn-close',
                    3,
                    'click',
                    4,
                    'ngIf'
                  ],
                  [
                    'type',
                    'button',
                    'aria-label',
                    'Close',
                    1,
                    'nsm-dialog-btn-close',
                    3,
                    'click'
                  ],
                  [
                    'src',
                    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNS45NDMsNi4wNThjLTguMDc3LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDksMEw2LjA1OCw0NzYuNjkzYy04LjA3Nyw4LjA3Ny04LjA3NywyMS4xNzIsMCwyOS4yNDkgICAgQzEwLjA5Niw1MDkuOTgyLDE1LjM5LDUxMiwyMC42ODMsNTEyYzUuMjkzLDAsMTAuNTg2LTIuMDE5LDE0LjYyNS02LjA1OUw1MDUuOTQzLDM1LjMwNiAgICBDNTE0LjAxOSwyNy4yMyw1MTQuMDE5LDE0LjEzNSw1MDUuOTQzLDYuMDU4eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNS45NDIsNDc2LjY5NEwzNS4zMDYsNi4wNTljLTguMDc2LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDgsMGMtOC4wNzcsOC4wNzYtOC4wNzcsMjEuMTcxLDAsMjkuMjQ4bDQ3MC42MzYsNDcwLjYzNiAgICBjNC4wMzgsNC4wMzksOS4zMzIsNi4wNTgsMTQuNjI1LDYuMDU4YzUuMjkzLDAsMTAuNTg3LTIuMDE5LDE0LjYyNC02LjA1N0M1MTQuMDE4LDQ5Ny44NjYsNTE0LjAxOCw0ODQuNzcxLDUwNS45NDIsNDc2LjY5NHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'
                  ]
                ],
                template: function(e, t) {
                  1 & e &&
                    (a.jc(),
                    a.Fc(0, '\n    '),
                    a.Dc(1, m, 18, 13, 'div', 0),
                    a.Fc(2, '\n  ')),
                    2 & e && (a.xb(1), a.kc('ngIf', t.overlayVisible));
                },
                directives: [r.k, r.i],
                encapsulation: 2
              })),
              e
            );
          })(),
          y = (function() {
            var t = (function() {
              function t() {
                o(this, t), (this._modalStack = []);
              }
              return (
                i(t, [
                  {
                    key: 'addModal',
                    value: function(e, t) {
                      if (t) {
                        var n = this._modalStack.findIndex(function(t) {
                          return t.id === e.id;
                        });
                        n > -1
                          ? (this._modalStack[n].modal = e.modal)
                          : this._modalStack.push(e);
                      } else this._modalStack.push(e);
                    }
                  },
                  {
                    key: 'getModal',
                    value: function(e) {
                      var t = this._modalStack.find(function(t) {
                        return t.id === e;
                      });
                      if (void 0 !== t) return t.modal;
                      throw new Error('Cannot find modal with identifier ' + e);
                    }
                  },
                  {
                    key: 'getModalStack',
                    value: function() {
                      return this._modalStack;
                    }
                  },
                  {
                    key: 'getOpenedModals',
                    value: function() {
                      return this._modalStack.filter(function(e) {
                        return e.modal.visible;
                      });
                    }
                  },
                  {
                    key: 'getTopOpenedModal',
                    value: function() {
                      if (!this.getOpenedModals().length)
                        throw new Error('No modal is opened');
                      return this.getOpenedModals()
                        .map(function(e) {
                          return e.modal;
                        })
                        .reduce(function(e, t) {
                          return t.layerPosition > e.layerPosition ? t : e;
                        }, this.getOpenedModals()[0].modal);
                    }
                  },
                  {
                    key: 'getHigherIndex',
                    value: function() {
                      return (
                        Math.max.apply(
                          Math,
                          e(
                            this._modalStack.map(function(e) {
                              return e.modal.layerPosition;
                            })
                          ).concat([1041])
                        ) + 1
                      );
                    }
                  },
                  {
                    key: 'getModalStackCount',
                    value: function() {
                      return this._modalStack.length;
                    }
                  },
                  {
                    key: 'removeModal',
                    value: function(e) {
                      var t = this._modalStack.findIndex(function(t) {
                        return t.id === e;
                      });
                      t > -1 && this._modalStack.splice(t, 1);
                    }
                  }
                ]),
                t
              );
            })();
            return (
              (t.ɵfac = function(e) {
                return new (e || t)();
              }),
              (t.ɵprov = a.Hb({ token: t, factory: t.ɵfac })),
              t
            );
          })(),
          b = (function() {
            var e = (function() {
              function e(t, n, i, s, a) {
                var r = this;
                o(this, e),
                  (this._componentFactoryResolver = t),
                  (this._appRef = n),
                  (this._injector = i),
                  (this._document = s),
                  (this._modalStack = a),
                  (this._escapeKeyboardEvent = function(e) {
                    if (27 === e.keyCode)
                      try {
                        var t = r.getTopOpenedModal();
                        return (
                          !!t.escapable &&
                          (t.onEscape.emit(t), r.closeLatestModal(), !0)
                        );
                      } catch (n) {
                        return !1;
                      }
                    return !1;
                  }),
                  this._addEvents();
              }
              return (
                i(e, [
                  {
                    key: 'addModal',
                    value: function(e, t) {
                      this._modalStack.addModal(e, t);
                    }
                  },
                  {
                    key: 'getModal',
                    value: function(e) {
                      return this._modalStack.getModal(e);
                    }
                  },
                  {
                    key: 'get',
                    value: function(e) {
                      return this.getModal(e);
                    }
                  },
                  {
                    key: 'open',
                    value: function(e) {
                      var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      return this._openModal(this.get(e), t);
                    }
                  },
                  {
                    key: 'close',
                    value: function(e) {
                      return this._closeModal(this.get(e));
                    }
                  },
                  {
                    key: 'toggle',
                    value: function(e) {
                      var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      return this._toggleModal(this.get(e), t);
                    }
                  },
                  {
                    key: 'getModalStack',
                    value: function() {
                      return this._modalStack.getModalStack();
                    }
                  },
                  {
                    key: 'getOpenedModals',
                    value: function() {
                      return this._modalStack.getOpenedModals();
                    }
                  },
                  {
                    key: 'getTopOpenedModal',
                    value: function() {
                      return this._modalStack.getTopOpenedModal();
                    }
                  },
                  {
                    key: 'getHigherIndex',
                    value: function() {
                      return this._modalStack.getHigherIndex();
                    }
                  },
                  {
                    key: 'getModalStackCount',
                    value: function() {
                      return this._modalStack.getModalStackCount();
                    }
                  },
                  {
                    key: 'removeModal',
                    value: function(e) {
                      this._modalStack.removeModal(e);
                    }
                  },
                  {
                    key: 'setModalData',
                    value: function(e, t, n) {
                      var i;
                      return !!(i = this.get(t)) && (i.setData(e, n), !0);
                    }
                  },
                  {
                    key: 'getModalData',
                    value: function(e) {
                      var t;
                      return (t = this.get(e)) ? t.getData() : null;
                    }
                  },
                  {
                    key: 'resetModalData',
                    value: function(e) {
                      if (
                        this._modalStack.getModalStack().find(function(t) {
                          return t.id === e;
                        })
                      ) {
                        var t = this.getModal(e).getData();
                        return this.getModal(e).removeData(), t;
                      }
                      return !1;
                    }
                  },
                  {
                    key: 'closeLatestModal',
                    value: function() {
                      this.getTopOpenedModal().close();
                    }
                  },
                  {
                    key: 'create',
                    value: function(e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                      try {
                        return this.getModal(e);
                      } catch (a) {
                        var i = this._componentFactoryResolver.resolveComponentFactory(
                            v
                          ),
                          o = this._resolveNgContent(t),
                          s = i.create(this._injector, o);
                        return (
                          (s.instance.identifier = e),
                          (s.instance.createFrom = 'service'),
                          'boolean' == typeof n.closable &&
                            (s.instance.closable = n.closable),
                          'boolean' == typeof n.escapable &&
                            (s.instance.escapable = n.escapable),
                          'boolean' == typeof n.dismissable &&
                            (s.instance.dismissable = n.dismissable),
                          'string' == typeof n.customClass &&
                            (s.instance.customClass = n.customClass),
                          'boolean' == typeof n.backdrop &&
                            (s.instance.backdrop = n.backdrop),
                          'boolean' == typeof n.force &&
                            (s.instance.force = n.force),
                          'number' == typeof n.hideDelay &&
                            (s.instance.hideDelay = n.hideDelay),
                          'boolean' == typeof n.autostart &&
                            (s.instance.autostart = n.autostart),
                          'string' == typeof n.target &&
                            (s.instance.target = n.target),
                          this._appRef.attachView(s.hostView),
                          document.body.appendChild(s.hostView.rootNodes[0]),
                          s.instance
                        );
                      }
                    }
                  },
                  {
                    key: '_addEvents',
                    value: function() {
                      var e = this;
                      window.addEventListener(
                        'ngx-smart-modal.create',
                        function(t) {
                          e._initModal(t.detail.instance);
                        }
                      ),
                        window.addEventListener(
                          'ngx-smart-modal.delete',
                          function(t) {
                            e._deleteModal(t.detail.instance);
                          }
                        ),
                        window.addEventListener(
                          'ngx-smart-modal.open',
                          function(t) {
                            e._openModal(t.detail.instance.modal, t.detail.top);
                          }
                        ),
                        window.addEventListener(
                          'ngx-smart-modal.toggle',
                          function(t) {
                            e._toggleModal(
                              t.detail.instance.modal,
                              t.detail.top
                            );
                          }
                        ),
                        window.addEventListener(
                          'ngx-smart-modal.close',
                          function(t) {
                            e._closeModal(t.detail.instance.modal);
                          }
                        ),
                        window.addEventListener(
                          'ngx-smart-modal.dismiss',
                          function(t) {
                            e._dismissModal(t.detail.instance.modal);
                          }
                        ),
                        window.addEventListener(
                          'keyup',
                          this._escapeKeyboardEvent
                        );
                    }
                  },
                  {
                    key: '_initModal',
                    value: function(e) {
                      (e.modal.layerPosition += this.getModalStackCount()),
                        this.addModal(e, e.modal.force),
                        e.modal.autostart && this.open(e.id);
                    }
                  },
                  {
                    key: '_openModal',
                    value: function(e, t) {
                      return (
                        !e.visible &&
                        (t && (e.layerPosition = this.getHigherIndex()),
                        e.addBodyClass(),
                        (e.overlayVisible = !0),
                        (e.visible = !0),
                        e.onOpen.emit(e),
                        e.markForCheck(),
                        setTimeout(function() {
                          (e.openedClass = !0),
                            e.target && e.targetPlacement(),
                            e.markForCheck(),
                            e.onOpenFinished.emit(e);
                        }),
                        !0)
                      );
                    }
                  },
                  {
                    key: '_toggleModal',
                    value: function(e, t) {
                      return e.visible
                        ? this._closeModal(e)
                        : this._openModal(e, t);
                    }
                  },
                  {
                    key: '_closeModal',
                    value: function(e) {
                      return (
                        !!e.openedClass &&
                        ((e.openedClass = !1),
                        e.onClose.emit(e),
                        e.onAnyCloseEvent.emit(e),
                        this.getOpenedModals().length < 2 &&
                          e.removeBodyClass(),
                        setTimeout(function() {
                          e.visibleChange.emit(e.visible),
                            (e.visible = !1),
                            (e.overlayVisible = !1),
                            e.markForCheck(),
                            e.onCloseFinished.emit(e),
                            e.onAnyCloseEventFinished.emit(e);
                        }, e.hideDelay),
                        !0)
                      );
                    }
                  },
                  {
                    key: '_dismissModal',
                    value: function(e) {
                      return (
                        !!e.openedClass &&
                        ((e.openedClass = !1),
                        e.onDismiss.emit(e),
                        e.onAnyCloseEvent.emit(e),
                        this.getOpenedModals().length < 2 &&
                          e.removeBodyClass(),
                        setTimeout(function() {
                          (e.visible = !1),
                            e.visibleChange.emit(e.visible),
                            (e.overlayVisible = !1),
                            e.markForCheck(),
                            e.onDismissFinished.emit(e),
                            e.onAnyCloseEventFinished.emit(e);
                        }, e.hideDelay),
                        !0)
                      );
                    }
                  },
                  {
                    key: '_deleteModal',
                    value: function(e) {
                      this.removeModal(e.id),
                        this.getModalStack().length ||
                          e.modal.removeBodyClass();
                    }
                  },
                  {
                    key: '_resolveNgContent',
                    value: function(e) {
                      return 'string' == typeof e
                        ? [[this._document.createTextNode(e)]]
                        : e instanceof a.K
                        ? [e.createEmbeddedView(null).rootNodes]
                        : [
                            [
                              this._componentFactoryResolver
                                .resolveComponentFactory(e)
                                .create(this._injector).location.nativeElement
                            ],
                            [this._document.createTextNode('')]
                          ];
                    }
                  }
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function(t) {
                return new (t || e)(
                  a.Yb(a.j),
                  a.Yb(a.g),
                  a.Yb(a.r),
                  a.Yb(r.c),
                  a.Yb(y)
                );
              }),
              (e.ɵprov = a.Hb({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          p = (function() {
            var e = (function() {
              function e(t) {
                o(this, e), (this.serivce = t);
              }
              return (
                i(e, null, [
                  {
                    key: 'forRoot',
                    value: function() {
                      return { ngModule: e, providers: [b, y] };
                    }
                  },
                  {
                    key: 'forChild',
                    value: function() {
                      return { ngModule: e, providers: [b, y] };
                    }
                  }
                ]),
                e
              );
            })();
            return (
              (e.ɵmod = a.Jb({ type: e })),
              (e.ɵinj = a.Ib({
                factory: function(t) {
                  return new (t || e)(a.Yb(b));
                },
                imports: [[r.b]]
              })),
              e
            );
          })();
      },
      u3Pa: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
          return c;
        });
        var s = n('bqtT'),
          a = n('fXoL'),
          r = n('jhN1'),
          l = ['*'],
          c = (function() {
            var e = (function() {
              function e(t, n) {
                o(this, e),
                  (this.sanitizer = t),
                  (this.ngxSmartModalService = n),
                  (this.size = 'md'),
                  (this.classes = '');
              }
              return (
                i(e, [
                  {
                    key: 'ngOnInit',
                    value: function() {
                      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
                        'https://www.youtube.com/embed/'.concat(
                          this.videoId,
                          '?rel=0&autoplay=1&controls=0&showinfo=0&ecver=1&enablejsapi=1'
                        )
                      );
                    }
                  },
                  {
                    key: 'ngAfterViewInit',
                    value: function() {
                      this.ngxSmartModalService
                        .getModal(this.identifier)
                        .onOpen.subscribe(function(e) {
                          console.log('Rickroll modal opened!', e);
                        });
                    }
                  },
                  {
                    key: 'getCustomClass',
                    value: function() {
                      return 'dialog-'
                        .concat(this.size, ' ')
                        .concat(this.classes);
                    }
                  }
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function(t) {
                return new (t || e)(a.Lb(r.b), a.Lb(s.c));
              }),
              (e.ɵcmp = a.Fb({
                type: e,
                selectors: [['dc-modal-video']],
                inputs: {
                  identifier: 'identifier',
                  videoId: 'videoId',
                  size: 'size',
                  classes: 'classes'
                },
                ngContentSelectors: l,
                decls: 14,
                vars: 3,
                consts: [
                  ['href', 'javascript:;', 3, 'click'],
                  [3, 'identifier', 'customClass'],
                  ['videoModal', ''],
                  [1, 'video-container'],
                  [
                    'frameborder',
                    '0',
                    'allowfullscreen',
                    '',
                    1,
                    'video-iframe',
                    3,
                    'src'
                  ]
                ],
                template: function(e, t) {
                  if (1 & e) {
                    var n = a.Rb();
                    a.jc(),
                      a.Qb(0, 'a', 0),
                      a.bc('click', function() {
                        return a.vc(n), a.tc(6).open();
                      }),
                      a.Fc(1, '\n  '),
                      a.ic(2),
                      a.Fc(3, '\n'),
                      a.Pb(),
                      a.Fc(4, '\n'),
                      a.Qb(5, 'ngx-smart-modal', 1, 2),
                      a.Fc(7, '\n  '),
                      a.Qb(8, 'div', 3),
                      a.Fc(9, '\n    '),
                      a.Mb(10, 'iframe', 4),
                      a.Fc(11, '\n  '),
                      a.Pb(),
                      a.Fc(12, '\n'),
                      a.Pb(),
                      a.Fc(13, '\n');
                  }
                  2 & e &&
                    (a.xb(5),
                    a.kc('identifier', t.identifier)(
                      'customClass',
                      t.getCustomClass()
                    ),
                    a.xb(5),
                    a.kc('src', t.videoUrl, a.xc));
                },
                directives: [s.a],
                styles: [
                  '.video-container[_ngcontent-%COMP%]{height:0;width:100%;overflow:hidden;padding-top:56.25%}.video-container[_ngcontent-%COMP%]   .video-iframe[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;display:block;top:0;left:0}'
                ]
              })),
              e
            );
          })();
      }
    }
  ]);
})();
