(() => {
  "use strict";
  var e = {
      208: (e, t, n) => {
        n.d(t, { A: () => d });
        var o = n(601),
          a = n.n(o),
          c = n(314),
          r = n.n(c)()(a());
        r.push([
          e.id,
          "#shop-name-header {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n#cake-image {\n  width: 240px;\n}\n",
          "",
        ]);
        const d = r;
      },
      314: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  o &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  o && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, o, a, c) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var r = {};
              if (o)
                for (var d = 0; d < this.length; d++) {
                  var i = this[d][0];
                  null != i && (r[i] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var s = [].concat(e[l]);
                (o && r[s[0]]) ||
                  (void 0 !== c &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = c)),
                  n &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = n))
                      : (s[2] = n)),
                  a &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = a))
                      : (s[4] = "".concat(a))),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === e) {
              n = o;
              break;
            }
          return n;
        }
        function o(e, o) {
          for (var c = {}, r = [], d = 0; d < e.length; d++) {
            var i = e[d],
              l = o.base ? i[0] + o.base : i[0],
              s = c[l] || 0,
              u = "".concat(l, " ").concat(s);
            c[l] = s + 1;
            var p = n(u),
              m = {
                css: i[1],
                media: i[2],
                sourceMap: i[3],
                supports: i[4],
                layer: i[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(m);
            else {
              var h = a(m, o);
              (o.byIndex = d),
                t.splice(d, 0, { identifier: u, updater: h, references: 1 });
            }
            r.push(u);
          }
          return r;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var c = o((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var r = 0; r < c.length; r++) {
              var d = n(c[r]);
              t[d].references--;
            }
            for (var i = o(e, a), l = 0; l < c.length; l++) {
              var s = n(c[l]);
              0 === t[s].references && (t[s].updater(), t.splice(s, 1));
            }
            c = i;
          };
        };
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var o = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(n);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      56: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var o = "";
                n.supports && (o += "@supports (".concat(n.supports, ") {")),
                  n.media && (o += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (o += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (o += n.css),
                  a && (o += "}"),
                  n.media && (o += "}"),
                  n.supports && (o += "}");
                var c = n.sourceMap;
                c &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
                      " */"
                    )),
                  t.styleTagTransform(o, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(o) {
    var a = t[o];
    if (void 0 !== a) return a.exports;
    var c = (t[o] = { id: o, exports: {} });
    return e[o](c, c.exports, n), c.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var o = t.getElementsByTagName("script");
        if (o.length)
          for (var a = o.length - 1; a > -1 && (!e || !/^http(s?):/.test(e)); )
            e = o[a--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.nc = void 0),
    (() => {
      const e = n.p + "561f441ba2a376271897.jpg";
      function t() {
        const t = document.querySelector("#content");
        t.innerHTML = "";
        const n = document.createElement("div");
        (n.id = "shop-name-header"), t.appendChild(n);
        const o = document.createElement("h1");
        (o.textContent = "Cole's Cake Club"), n.appendChild(o);
        const a = new Image();
        (a.src = e), (a.id = "cake-image"), n.appendChild(a);
        const c = document.createElement("div");
        t.appendChild(c);
        const r = document.createElement("div");
        (r.id = "quote-itself"),
          (r.textContent =
            '"Cole\'s has become our go-to for getting tasty, pretty and well-priced cakes for birthdays, anniversaries and often for no special reason🤣. The cakes are always delicious and staff is super kind andhelpful. Would highly recommend."'),
          c.appendChild(r);
        const d = document.createElement("div");
        (d.textContent = "- Diabetus Maximus"),
          (d.id = "customer-name"),
          c.appendChild(d);
        const i = document.createElement("div");
        (i.id = "hours"), t.appendChild(i);
        const l = document.createElement("h2");
        (l.id = "hours-header"), (l.textContent = "Hours"), i.appendChild(l);
        const s = document.createElement("ul");
        (s.id = "hours-list"), i.appendChild(s);
        const u = document.createElement("li");
        u.textContent = "Monday - 9am to 9pm";
        const p = document.createElement("li");
        p.textContent = "Tuesday - 9am to 9pm";
        const m = document.createElement("li");
        m.textContent = "Wednesday - 9am to 9pm";
        const h = document.createElement("li");
        h.textContent = "Thursday - 9am to 9pm";
        const f = document.createElement("li");
        f.textContent = "Friday - 9am to 9pm";
        const C = document.createElement("li");
        C.textContent = "Saturday - Closed";
        const v = document.createElement("li");
        v.textContent = "Sunday - 10am to 8pm";
        const E = [u, p, m, h, f, C, v];
        for (let e of E) (e.className = "timing"), s.appendChild(e);
        const y = document.createElement("div");
        t.appendChild(y);
        const x = document.createElement("h2");
        (x.textContent = "Location"), y.appendChild(x);
        const g = document.createElement("div");
        (g.textContent = "123 Buff Bear Street, Madison, Wisconsin"),
          (g.id = "location-itself"),
          y.appendChild(g);
      }
      var o = n(72),
        a = n.n(o),
        c = n(825),
        r = n.n(c),
        d = n(659),
        i = n.n(d),
        l = n(56),
        s = n.n(l),
        u = n(540),
        p = n.n(u),
        m = n(113),
        h = n.n(m),
        f = n(208),
        C = {};
      (C.styleTagTransform = h()),
        (C.setAttributes = s()),
        (C.insert = i().bind(null, "head")),
        (C.domAPI = r()),
        (C.insertStyleElement = p()),
        a()(f.A, C),
        f.A && f.A.locals && f.A.locals,
        t(),
        document.querySelector("#menu-button").addEventListener("click", () => {
          !(function () {
            const e = document.querySelector("#content");
            e.innerHTML = "";
            const t = document.createElement("h1");
            (t.textContent = "Menu"), e.appendChild(t);
            const n = document.createElement("ul");
            e.appendChild(n);
            const o = document.createElement("li");
            n.appendChild(o), (o.className = "menu-item");
            const a = document.createElement("h2");
            (a.textContent = "Cake"), o.appendChild(a);
            const c = document.createElement("div");
            (c.textContent =
              "A delicious cake founded on a vanilla base, topped with cherries and chocolate and prepared with love"),
              o.appendChild(c);
            const r = document.createElement("li");
            n.appendChild(r), (r.className = "menu-item");
            const d = document.createElement("h2");
            (d.textContent = "Big Cake"), r.appendChild(d);
            const i = document.createElement("div");
            (i.textContent =
              "A big, delicious cake founded on a big vanilla base, topped with big cherries and chocolate and prepared with lots of love"),
              r.appendChild(i);
            const l = document.createElement("li");
            n.appendChild(l), (l.className = "menu-item");
            const s = document.createElement("h2");
            (s.textContent = "Very Big Cake"), l.appendChild(s);
            const u = document.createElement("div");
            (u.textContent =
              "A very big, delicious cake founded on a very big vanilla base, topped with very big cherries and chocolate and prepared with lots and lots of love"),
              l.appendChild(u);
          })();
        }),
        document.querySelector("#home-button").addEventListener("click", () => {
          t();
        }),
        document
          .querySelector("#contact-button")
          .addEventListener("click", () => {
            !(function () {
              const e = document.querySelector("#content");
              e.innerHTML = "";
              const t = document.createElement("h1");
              (t.textContent = "Contact Us"), e.appendChild(t);
              const n = document.createElement("ul");
              e.appendChild(n);
              const o = document.createElement("li");
              n.appendChild(o);
              const a = document.createElement("h2");
              (a.textContent = "Man"), o.appendChild(a);
              const c = document.createElement("div");
              o.appendChild(c);
              const r = document.createElement("div");
              (r.textContent = "A man like no other"), c.appendChild(r);
              const d = document.createElement("div");
              (d.textContent = "(123) 456-7890"), c.appendChild(d);
              const i = document.createElement("div");
              (i.textContent = "arealmansemail@human.com"), c.appendChild(i);
              const l = document.createElement("li");
              n.appendChild(l);
              const s = document.createElement("h2");
              (s.textContent = "Woman"), l.appendChild(s);
              const u = document.createElement("div");
              l.appendChild(u);
              const p = document.createElement("div");
              (p.textContent = "A woman like no other"), u.appendChild(p);
              const m = document.createElement("div");
              (m.textContent = "(987) 654-3210"), u.appendChild(m);
              const h = document.createElement("div");
              (h.textContent = "arealwomansemail@human.com"), u.appendChild(h);
              const f = document.createElement("li");
              n.appendChild(f);
              const C = document.createElement("h2");
              (C.textContent = "Broad Man"), f.appendChild(C);
              const v = document.createElement("div");
              f.appendChild(v);
              const E = document.createElement("div");
              (E.textContent = "A broad man"), v.appendChild(E);
              const y = document.createElement("div");
              (y.textContent = "(420) 666-6969"), v.appendChild(y);
              const x = document.createElement("div");
              (x.textContent = "abroadman@broad.com"), v.appendChild(x);
            })();
          });
    })();
})();
