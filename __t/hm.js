(function () {
  var h = {}, mt = {}, c = { id: "f3b6b71c1bc16c915445fd90679f9934", dm: ["c.joehe.cn"], js: "tongji.baidu.com/hm-web/js/", etrk: [], cetrk: [], cptrk: [], icon: '', ctrk: [], nv: -1, vdur: 1800000, age: 31536000000, rec: 0, rp: [], trust: 0, vcard: 0, qiao: 0, lxb: 0, kbtrk: 0, pt: 0, spa: 0, oc: 0, aet: '', hca: 'E4ED8F271247765B', conv: 0, med: 0, cvcc: '', cvcf: [], apps: '' }; var q = void 0, u = !0, w = null, x = !1; mt.cookie = {}; mt.cookie.set = function (a, b, g) { var d; g.Q && (d = new Date, d.setTime(d.getTime() + g.Q)); document.cookie = a + "=" + b + (g.domain ? "; domain=" + g.domain : "") + (g.path ? "; path=" + g.path : "") + (d ? "; expires=" + d.toGMTString() : "") + (g.Jc ? "; secure" : "") }; mt.cookie.get = function (a) { return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : w };
  mt.cookie.hc = function (a, b) { try { var g = "Hm_ck_" + +new Date; mt.cookie.set(g, "is-cookie-enabled", { domain: a, path: b, Q: q }); var d = "is-cookie-enabled" === mt.cookie.get(g) ? "1" : "0"; mt.cookie.set(g, "", { domain: a, path: b, Q: -1 }); return d } catch (e) { return "0" } }; mt.lang = {}; mt.lang.d = function (a, b) { return "[object " + b + "]" === {}.toString.call(a) }; mt.lang.Za = function (a) { return mt.lang.d(a, "Number") && isFinite(a) }; mt.lang.H = function (a) { return mt.lang.d(a, "String") }; mt.lang.isArray = function (a) { return mt.lang.d(a, "Array") };
  mt.lang.h = function (a) { return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a }; mt.lang.trim = function (a) { return a.replace(/^\s+|\s+$/g, "") }; mt.lang.G = function (a, b) { var g = x; if (a == w || !mt.lang.d(a, "Array") || b === q) return g; if (Array.prototype.indexOf) g = -1 !== a.indexOf(b); else for (var d = 0; d < a.length; d++)if (a[d] === b) { g = u; break } return g }; mt.url = {}; mt.url.m = function (a, b) { var g = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", "")); return g ? g[3] : w };
  mt.url.Ec = function (a) { return (a = a.match(/^(https?:)\/\//)) ? a[1] : w }; mt.url.Mb = function (a) { return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : w }; mt.url.L = function (a) { return (a = mt.url.Mb(a)) ? a.replace(/:\d+$/, "") : a }; mt.url.wa = function (a) { return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : w };
  (function () {
    var a = mt.lang, b = mt.url; mt.f = {}; mt.f.Ua = function (a) { return document.getElementById(a) }; mt.f.ua = function (a) {
      if (!a) return w; try {
        a = String(a); if (0 === a.indexOf("!HMCQ!")) return a; if (0 === a.indexOf("!HMCC!")) return document.querySelector(a.substring(6, a.length)); for (var d = a.split(">"), e = document.body, b = d.length - 1; 0 <= b; b--)if (-1 < d[b].indexOf("#")) { var f = d[b].split("#")[1]; (e = document.getElementById(f)) || (e = document.getElementById(decodeURIComponent(f))); d = d.splice(b + 1, d.length - (b + 1)); break } for (a =
          0; e && a < d.length;) { var l = String(d[a]).toLowerCase(); if (!("html" === l || "body" === l)) { var b = 0, n = d[a].match(/\[(\d+)\]/i), f = []; if (n) b = n[1] - 1, l = l.split("[")[0]; else if (1 !== e.childNodes.length) { for (var p = 0, s = 0, t = e.childNodes.length; s < t; s++) { var v = e.childNodes[s]; 1 === v.nodeType && v.nodeName.toLowerCase() === l && p++; if (1 < p) return w } if (1 !== p) return w } for (p = 0; p < e.childNodes.length; p++)1 === e.childNodes[p].nodeType && e.childNodes[p].nodeName.toLowerCase() === l && f.push(e.childNodes[p]); if (!f[b]) return w; e = f[b] } a++ } return e
      } catch (k) { return w }
    };
    mt.f.wa = function (a, d) { var e = [], b = []; if (!a) return b; for (; a.parentNode != w;) { for (var f = 0, l = 0, n = a.parentNode.childNodes.length, p = 0; p < n; p++) { var s = a.parentNode.childNodes[p]; if (s.nodeName === a.nodeName && (f++, s === a && (l = f), 0 < l && 1 < f)) break } if ((n = "" !== a.id) && d) { e.unshift("#" + encodeURIComponent(a.id)); break } else n && (n = "#" + encodeURIComponent(a.id), n = 0 < e.length ? n + ">" + e.join(">") : n, b.push(n)), e.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < f ? "[" + l + "]" : "")); a = a.parentNode } b.push(e.join(">")); return b };
    mt.f.xa = function (a) { return (a = mt.f.wa(a, u)) && a.length ? String(a[0]) : "" }; mt.f.Qb = function (a) { return mt.f.wa(a, x) }; mt.f.Fb = function (a) { var d; for (d = "A"; (a = a.parentNode) && 1 == a.nodeType;)if (a.tagName == d) return a; return w }; mt.f.Ib = function (a) { return 9 === a.nodeType ? a : a.ownerDocument || a.document }; mt.f.Ob = function (a) {
      var d = { top: 0, left: 0 }; if (!a) return d; var e = mt.f.Ib(a).documentElement; "undefined" !== typeof a.getBoundingClientRect && (d = a.getBoundingClientRect()); return {
        top: d.top + (window.pageYOffset || e.scrollTop) -
          (e.clientTop || 0), left: d.left + (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
      }
    }; mt.f.getAttribute = function (a, d) { var e = a.getAttribute && a.getAttribute(d) || w; if (!e && a.attributes && a.attributes.length) for (var b = a.attributes, f = b.length, l = 0; l < f; l++)b[l].nodeName === d && (e = b[l].nodeValue); return e }; mt.f.T = function (a) { var d = "document"; a.tagName !== q && (d = a.tagName); return d.toLowerCase() }; mt.f.Tb = function (b) {
      var d = ""; b.textContent ? d = a.trim(b.textContent) : b.innerText && (d = a.trim(b.innerText)); d && (d = d.replace(/\s+/g,
        " ").substring(0, 255)); return d
    }; mt.f.S = function (g, d) {
      var e; a.H(g) && 0 === String(g).indexOf("!HMCQ!") ? (e = String(g), e = b.m(document.location.href, e.substring(6, e.length))) : a.H(g) || (e = mt.f.T(g), "input" === e && d && ("button" === g.type || "submit" === g.type) ? e = a.trim(g.value) || "" : "input" === e && !d && "password" !== g.type ? e = a.trim(g.value) || "" : "img" === e ? (e = mt.f.getAttribute, e = e(g, "alt") || e(g, "title") || e(g, "src")) : e = "body" === e || "html" === e ? ["(hm-default-content-for-", e, ")"].join("") : mt.f.Tb(g)); return String(e || "").substring(0,
        255)
    }; (function () {
      (mt.f.gb = function () {
        function a() { if (!a.fa) { a.fa = u; for (var d = 0, b = r.length; d < b; d++)r[d]() } } function d() { try { document.documentElement.doScroll("left") } catch (b) { setTimeout(d, 1); return } a() } var b = x, r = [], f; document.addEventListener ? f = function () { document.removeEventListener("DOMContentLoaded", f, x); a() } : document.attachEvent && (f = function () { "complete" === document.readyState && (document.detachEvent("onreadystatechange", f), a()) }); (function () {
          if (!b) if (b = u, "complete" === document.readyState) a.fa = u;
          else if (document.addEventListener) document.addEventListener("DOMContentLoaded", f, x), window.addEventListener("load", a, x); else if (document.attachEvent) { document.attachEvent("onreadystatechange", f); window.attachEvent("onload", a); var l = x; try { l = window.frameElement == w } catch (n) { } document.documentElement.doScroll && l && d() }
        })(); return function (d) { a.fa ? d() : r.push(d) }
      }()).fa = x
    })(); return mt.f
  })(); mt.event = {};
  mt.event.e = function (a, b, g) { a.attachEvent ? a.attachEvent("on" + b, function (d) { g.call(a, d) }) : a.addEventListener && a.addEventListener(b, g, x) }; mt.event.preventDefault = function (a) { a.preventDefault ? a.preventDefault() : a.returnValue = x };
  (function () {
    var a = mt.event; mt.g = {}; mt.g.Ca = /msie (\d+\.\d+)/i.test(navigator.userAgent); mt.g.Nb = function () { if (document.documentMode) return document.documentMode; var a = /msie (\d+\.\d+)/i.exec(navigator.userAgent); return a ? +a[1] || 0 : 0 }; mt.g.Gc = function () { try { return !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && "undefined" !== typeof document.body.style.webkitFilter && !window.chrome } catch (a) { return x } }; mt.g.cookieEnabled = navigator.cookieEnabled; mt.g.javaEnabled = navigator.javaEnabled();
    mt.g.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || ""; mt.g.kc = (window.screen.width || 0) + "x" + (window.screen.height || 0); mt.g.colorDepth = window.screen.colorDepth || 0; mt.g.U = function () { var a; a = a || document; return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10) }; mt.g.M = function () { var a = document; return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10) }; mt.g.ob =
      0; mt.g.Vb = function () { var a = document; return parseInt(window.innerWidth || a.documentElement.clientWidth || a.body.offsetWidth || 0, 10) }; mt.g.orientation = 0; (function () { function b() { var a = 0; window.orientation !== q && (a = window.orientation); screen && (screen.orientation && screen.orientation.angle !== q) && (a = screen.orientation.angle); mt.g.orientation = a; mt.g.ob = mt.g.Vb() } b(); a.e(window, "orientationchange", b) })(); return mt.g
  })(); mt.s = {}; mt.s.parse = function (a) { return (new Function("return (" + a + ")"))() };
  mt.s.stringify = function () {
    function a(a) { /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) { var d = g[a]; if (d) return d; d = a.charCodeAt(); return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16) })); return '"' + a + '"' } function b(a) { return 10 > a ? "0" + a : a } var g = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }; return function (d) {
      switch (typeof d) {
        case "undefined": return "undefined"; case "number": return isFinite(d) ? String(d) : "null"; case "string": return a(d); case "boolean": return String(d);
        default: if (d === w) return "null"; if (d instanceof Array) { var e = ["["], g = d.length, f, l, n; for (l = 0; l < g; l++)switch (n = d[l], typeof n) { case "undefined": case "function": case "unknown": break; default: f && e.push(","), e.push(mt.s.stringify(n)), f = 1 }e.push("]"); return e.join("") } if (d instanceof Date) return '"' + d.getFullYear() + "-" + b(d.getMonth() + 1) + "-" + b(d.getDate()) + "T" + b(d.getHours()) + ":" + b(d.getMinutes()) + ":" + b(d.getSeconds()) + '"'; f = ["{"]; l = mt.s.stringify; for (g in d) if (Object.prototype.hasOwnProperty.call(d, g)) switch (n =
          d[g], typeof n) { case "undefined": case "unknown": case "function": break; default: e && f.push(","), e = 1, f.push(l(g) + ":" + l(n)) }f.push("}"); return f.join("")
      }
    }
  }(); mt.localStorage = {}; mt.localStorage.ma = function () { if (!mt.localStorage.l) try { mt.localStorage.l = document.createElement("input"), mt.localStorage.l.type = "hidden", mt.localStorage.l.style.display = "none", mt.localStorage.l.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l) } catch (a) { return x } return u };
  mt.localStorage.set = function (a, b, g) { var d = new Date; d.setTime(d.getTime() + g || 31536E6); try { window.localStorage ? (b = d.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.ma() && (mt.localStorage.l.expires = d.toUTCString(), mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.setAttribute(a, b), mt.localStorage.l.save(document.location.hostname)) } catch (e) { } };
  mt.localStorage.get = function (a) { if (window.localStorage) { if (a = window.localStorage.getItem(a)) { var b = a.indexOf("|"), g = a.substring(0, b) - 0; if (g && g > (new Date).getTime()) return a.substring(b + 1) } } else if (mt.localStorage.ma()) try { return mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.getAttribute(a) } catch (d) { } return w };
  mt.localStorage.remove = function (a) { if (window.localStorage) window.localStorage.removeItem(a); else if (mt.localStorage.ma()) try { mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.removeAttribute(a), mt.localStorage.l.save(document.location.hostname) } catch (b) { } }; mt.sessionStorage = {}; mt.sessionStorage.set = function (a, b) { try { window.sessionStorage && window.sessionStorage.setItem(a, b) } catch (g) { } };
  mt.sessionStorage.get = function (a) { try { return window.sessionStorage ? window.sessionStorage.getItem(a) : w } catch (b) { return w } }; mt.sessionStorage.remove = function (a) { try { window.sessionStorage && window.sessionStorage.removeItem(a) } catch (b) { } }; mt.lb = {}; mt.lb.log = function (a, b) { var g = new Image, d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36); window[d] = g; g.onload = function () { g.onload = w; g = window[d] = w; b && b(a) }; g.src = a }; mt.Ka = {};
  mt.Ka.Ub = function () { var a = ""; if (navigator.plugins && navigator.mimeTypes.length) { var b = navigator.plugins["Shockwave Flash"]; b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1")) } else if (window.ActiveXObject) try { if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2")) } catch (g) { } return a };
  mt.Ka.Dc = function (a, b, g, d, e) { return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + g + '" height="' + d + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (e || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + g + '" height="' + d + '" src="' + b + '" flashvars="' + (e || "") + '" allowscriptaccess="always" /></object>' };
  h.D = {
    Fc: "http://tongji.baidu.com/hm-web/welcome/ico", fb: "hm.baidu.com/hm.gif", vb: /^(tongji|hmcdn).baidu.com$/, nb: "tongji.baidu.com", Zb: "hmmd", $b: "hmpl", xc: "utm_medium", Yb: "hmkw", zc: "utm_term", Wb: "hmci", wc: "utm_content", ac: "hmsr", yc: "utm_source", Xb: "hmcu", vc: "utm_campaign", N: 0, J: Math.round(+new Date / 1E3), protocol: "https:" === document.location.protocol ? "https:" : "http:", Ea: "https:", Hc: 0, Bc: 6E5, Ic: 6E5, lc: 5E3, Cc: 5, pa: 1024, Ac: 1, Ga: 2147483647, mb: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
    V: u, Ra: ["a", "input", "button"], Oa: { id: "data-hm-id", aa: "data-hm-class", $: "data-hm-xpath", content: "data-hm-content", ia: "data-hm-tag", link: "data-hm-link" }, Qa: "data-hm-enabled", Pa: "data-hm-disabled", ic: "https://hmcdn.baidu.com/static/tongji/plugins/", eb: ["UrlChangeTracker", "OcpcCbHm"]
  }; (function () { var a = { F: {}, e: function (a, g) { this.F[a] = this.F[a] || []; this.F[a].push(g) }, K: function (a, g) { this.F[a] = this.F[a] || []; for (var d = this.F[a].length, e = 0; e < d; e++)this.F[a][e](g) } }; return h.z = a })();
  (function () {
    var a = mt.lang, b = /^https?:\/\//, g = {
      Hb: function (a) { var e; try { e = JSON.parse(decodeURIComponent(a[0])) } catch (b) { } return e }, $a: function (a, e) { var g = h.c && h.c.b && h.c.b.u || document.location.href; b.test(a) || (g = g.replace(b, "")); a = a.replace(/\/$/, ""); g = g.replace(/\/$/, ""); e && (g = g.replace(/^(https?:\/\/)?www\./, "$1")); return RegExp("^" + a.replace(/[?.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$").test(g) }, ca: function (d, e) {
        var b = g.Hb(d); if (!a.d(b, "Undefined")) {
          if (a.d(b, "Array")) {
            for (var f = 0; f < b.length; f++)if (g.$a(b[f],
              e)) return u; return x
          } if (a.d(b, "Object")) { var f = [], l; for (l in b) b.hasOwnProperty(l) && g.$a(l, e) && (f = f.concat(b[l])); return f }
        }
      }
    }; return h.ra = g
  })();
  (function () { function a(a, d) { var e = document.createElement("script"); e.charset = "utf-8"; b.d(d, "Function") && (e.readyState ? e.onreadystatechange = function () { if ("loaded" === e.readyState || "complete" === e.readyState) e.onreadystatechange = w, d() } : e.onload = function () { d() }); e.src = a; var r = document.getElementsByTagName("script")[0]; r.parentNode.insertBefore(e, r) } var b = mt.lang; return h.load = a })();
  (function () {
    var a = mt.cookie, b = mt.localStorage, g = mt.sessionStorage, d = {
      getData: function (d) { try { return a.get(d) || g.get(d) || b.get(d) } catch (r) { } }, setData: function (e, r, f) { try { a.set(e, r, { domain: d.R(), path: d.da(), Q: f }), f ? b.set(e, r, f) : g.set(e, r) } catch (l) { } }, removeData: function (e) { try { a.set(e, "", { domain: d.R(), path: d.da(), Q: -1 }), g.remove(e), b.remove(e) } catch (r) { } }, W: function (a, d) { a = "." + a.replace(/:\d+/, ""); d = "." + d.replace(/:\d+/, ""); var b = a.indexOf(d); return -1 < b && b + d.length === a.length }, ga: function (a, d) {
        a = a.replace(/^https?:\/\//,
          ""); return 0 === a.indexOf(d)
      }, R: function () { for (var a = document.location.hostname, b = 0, f = c.dm.length; b < f; b++)if (d.W(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, ""); return a }, da: function () { for (var a = 0, b = c.dm.length; a < b; a++) { var f = c.dm[a]; if (-1 < f.indexOf("/") && d.ga(document.location.href, f)) return f.replace(/^[^/]+(\/.*)/, "$1") + "/" } return "/" }
    }; return h.qa = d
  })();
  (function () {
    var a = mt.lang, b = mt.s, g = h.qa, d = { pageview: {}, session: {}, autoEventTracking: {}, customEvent: {}, user: {} }, e = { user: 1, session: 2, pageview: 3, autoEventTracking: 3, customEvent: 3, others: 3 }, r = ["session", "user"], f = "Hm_up_" + c.id, l = {
      init: function () { l.ec() }, ec: function () { try { var e = b.parse(decodeURIComponent(g.getData(f))); a.d(e, "Object") && (d.user = e) } catch (p) { } }, A: function (a) { var b = {}; d[a] !== q && (b = d[a]); a = this.ya(); for (var e in b) b.hasOwnProperty(e) && (a[e] = b[e]); return a }, ya: function () {
        for (var a = {}, b, e = r.length -
          1; 0 <= e; e--) { b = d[r[e]]; for (var t in b) b.hasOwnProperty(t) && (a[t] = b[t]) } return a
      }, setProperty: function (e, f, g) { var t = d[e]; if (a.d(t, "Object") && a.d(f, "Object")) { for (var v in f) if (f.hasOwnProperty(v)) { var k = a.h(String(v)); if (g || !/^_/.test(k) && !/_$/.test(k) || /^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(k)) { var m = f[v]; if (m == w) delete t[k]; else { if (a.d(m, "Object") || a.d(m, "Array")) m = b.stringify(m); m = a.h(String(m)); l.gc(e, k, m) && (t[k] = { value: m, scope: l.Wa(e) }) } } } "user" === e && l.Ia() } }, o: function (b) {
        b !== q && ("userId" ===
          b && a.d(d.user, "Object") ? (delete d.user.uid_, l.Ia()) : "user" === b && a.d(d.user, "Object") ? (b = d.user.uid_, d.user = b === q ? {} : { uid_: b }, l.Ia()) : d[b] !== q && (d[b] = {}))
      }, Ia: function () { try { g.setData(f, encodeURIComponent(b.stringify(d.user)), c.age) } catch (a) { } }, gc: function (a, b, e) { var f = u, g = d[a]; if (256 < encodeURIComponent(String(b)).length || 256 < encodeURIComponent(String(e)).length) f = x; else { var k = g[b]; g[b] = { value: e, scope: l.Wa(a) }; a = l.O(l.A(a)); 2048 < encodeURIComponent(a).length && (k !== q ? g[b] = k : delete g[b], f = x) } return f },
      O: function (a) { var b = [], d, e; for (e in a) a.hasOwnProperty(e) && (d = [e, a[e].value], (1 === a[e].scope || 2 === a[e].scope) && d.push(a[e].scope), b.push(d.join("*"))); return b.join("!") }, Wa: function (a) { a = e[a]; return a !== q ? a : e.others }
    }; return h.P = l
  })();
  (function () {
    var a = mt.f, b = mt.lang, g = h.z, d = h.ra, e = h.P, r = e.O; if (b.isArray(c.cptrk) && 0 < c.cptrk.length) {
      var f = {
        cb: {}, ka: {}, init: function () { for (var a, e = d.ca(c.cptrk) || [], g = 0; g < e.length; g++)if (a = e[g], a.a !== q && b.d(a.a, "Object")) { a = a.a; for (var s in a) a.hasOwnProperty(s) && (f.ka[s] = String(a[s])) } }, bb: function () { var b, d, e; for (e in f.ka) if (f.ka.hasOwnProperty(e) && f.cb[e] === q && (b = f.ka[e], b = a.ua(b))) d = d === q ? {} : d, d[e] = a.S(b, x), f.cb[e] = u; return d }, Aa: function () { var a = f.bb(); a && f.nc(a) }, dc: function () {
          "MutationObserver" in
          window ? (new MutationObserver(f.Aa)).observe(document.body, { childList: u, subtree: u }) : window.setInterval(f.Aa, 15E3)
        }, nc: function (a) { if (b.d(a, "Object")) try { e.setProperty("pageview", a); var d = h.c.b.p, f = h.c.b.ep; h.c.b.et = 9; h.c.b.ep = ""; h.c.b.p = r(e.A("pageview")); h.c.i(); h.c.b.p = d; h.c.b.ep = f; e.o("pageview") } catch (g) { } }
      }; f.init(); g.e("pv-b", function () { var a = f.bb(); a && e.setProperty("pageview", a) }); f.dc(); a.gb(f.Aa)
    }
  })();
  (function () {
    var a = mt.lang, b = mt.f, g = h.ra, d = {
      ba: function (a, r) { return function (f) { var l = f.target || f.srcElement; if (l) { var n = g.ca(r) || [], p = l.getAttribute(a.la); f = f.clientX + ":" + f.clientY; if (p && p === f) l.removeAttribute(a.la); else if (0 < n.length && (l = b.Qb(l)) && l.length) if (n = l.length, p = l[l.length - 1], 1E4 > n * p.split(">").length) for (p = 0; p < n; p++)d.jb(a, l[p]); else d.jb(a, p) } } }, jb: function (b, d) {
        for (var f = {}, g = String(d).split(">").length, n = 0; n < g; n++)f[d] = "", d = d.substring(0, d.lastIndexOf(">")); b && (a.d(b, "Object") && b.Sa) &&
          b.Sa(f)
      }, jc: function (a, b) { return function (d) { (d.target || d.srcElement).setAttribute(a.la, d.clientX + ":" + d.clientY); a && a.w && (b ? a.w(b) : a.w("#" + encodeURIComponent(this.id), d.type)) } }
    }; return h.ta = d
  })();
  (function () {
    var a = mt.f, b = mt.event, g = mt.lang, d = h.D, e = h.ra, r = h.ta, f = h.P, l = f.O, n = {
      la: "HM_ce", pb: function () { if (c.cetrk && 0 < c.cetrk.length) { b.e(document, "click", r.ba(n, c.cetrk)); for (var d = e.ca(c.cetrk) || [], f = 0, g = d.length; f < g; f++) { var v = d[f], k = v.p || ""; -1 === k.indexOf(">") && (0 === k.indexOf("#") && (k = k.substring(1)), (k = a.Ua(k)) && b.e(k, "click", r.jc(n, v))) } } }, Sa: function (a) { for (var b = e.ca(c.cetrk) || [], d = 0; d < b.length; d++) { var f = b[d], k = n.Kb(f.p, a); k && n.w(f, k) } }, Kb: function (a, b) {
        a = String(a); if (0 < a.indexOf("*")) {
          var d =
            RegExp("^" + a.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\*/, "\\d+") + "$"), e; for (e in b) if (b.hasOwnProperty(e) && d.test(e)) return e; return w
        } return b.hasOwnProperty(a) ? a : w
      }, w: function (b, d) { h.c.b.et = 7; var e = b && b.k || "", e = g.h(e), v = {}; if (b && b.a && g.d(b.a, "Object")) { var k = b.a, m; for (m in k) if (k.hasOwnProperty(m)) { var y = n.Rb(k[m] || "", d), y = y ? a.S(y, x) : ""; v[m] = y } } v = n.Gb(v, d || b && b.p); v._iden = e; f.setProperty("customEvent", v); h.c.b.ep = ""; h.c.b.p = l(f.A("customEvent")); h.c.i(); h.c.b.p = ""; f.o("customEvent") },
      Gb: function (b, e) { var f = a.ua(e), g = d.Oa; f && (c.aet && c.aet.length ? (b.ei_ = a.getAttribute(f, g.id) || a.getAttribute(f, "id") || "", b.ec_ = a.getAttribute(f, g.aa) || a.getAttribute(f, "class") || "", b.ex_ = a.getAttribute(f, g.$) || a.xa(f), b.en_ = a.getAttribute(f, g.content) || a.S(f, u), b.et_ = a.getAttribute(f, g.ia) || a.T(f), b.el_ = a.getAttribute(f, g.link) || a.getAttribute(f, "href") || "") : (b.ex_ = a.getAttribute(f, g.$) || a.xa(f), b.en_ = a.getAttribute(f, g.content) || a.S(f, u))); return b }, Rb: function (b, d) {
        b = String(b); d = String(d); if (0 < b.indexOf("*")) {
          var e =
            /.*\[(\d+)\]$/.exec(d); b = b.replace("*", e ? e[1] : "1")
        } return a.ua(b)
      }
    }; h.z.e("pv-b", n.pb); return n
  })();
  (function () {
    var a = mt.lang, b = mt.f, g = mt.event, d = mt.g, e = h.D, r = h.z, f = h.P, l = f.O, n = +new Date, p = [], s = {
      ba: function () {
        return function (d) {
          if (h.c && h.c.V && c.aet && c.aet.length) {
            var f = d.target || d.srcElement; if (f) {
              var g = h.c.Ra, m = b.getAttribute(f, e.Qa) != w ? u : x; if (b.getAttribute(f, e.Pa) == w) if (m) s.na(s.va(f, d)); else {
                var y = b.T(f); if (a.G(g, "*") || a.G(g, y)) s.na(s.va(f, d)); else for (; f.parentNode != w;) {
                  var m = f.parentNode, y = b.T(m), z = "a" === y && a.G(g, "a") ? u : x, y = "button" === y && a.G(g, "button") ? u : x, A = b.getAttribute(m, e.Qa) != w ? u : x;
                  if (b.getAttribute(m, e.Pa) == w && (z || y || A)) { s.na(s.va(m, d)); break } f = f.parentNode
                }
              }
            }
          }
        }
      }, va: function (f, g) {
        var k = {}, m = e.Oa; k.id = b.getAttribute(f, m.id) || b.getAttribute(f, "id") || ""; k.aa = b.getAttribute(f, m.aa) || b.getAttribute(f, "class") || ""; k.$ = b.getAttribute(f, m.$) || b.xa(f); k.content = b.getAttribute(f, m.content) || b.S(f, u); k.ia = b.getAttribute(f, m.ia) || b.T(f); k.link = b.getAttribute(f, m.link) || b.getAttribute(f, "href") || ""; k.type = g.type || "click"; m = a.Za(f.offsetTop) ? f.offsetTop : 0; "click" === g.type ? m = d.Ca ? g.clientY +
          Math.max(document.documentElement.scrollTop, document.body.scrollTop) : g.pageY : "touchend" === g.type && (g.ab && g.ab.changedTouches) && (m = g.ab.changedTouches[0].pageY); k.uc = m; m = this.Jb(g); k.Fa = m.Fa || 0; k.Ha = m.Ha || 0; k.Na = m.Na || 0; k.za = m.za || 0; k.La = m.La || "b"; return k
      }, Jb: function (f) {
        var e = f.target || f.srcElement, g; if (d.Ca) { var m = Math.max(document.documentElement.scrollTop, document.body.scrollTop); g = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft); g = f.clientX + g; f = f.clientY + m } else g = f.pageX,
          f = f.pageY; var y = m = 0, z = 0, A = 0; if (e && (m = e.offsetWidth || e.clientWidth, y = e.offsetHeight || e.clientHeight, A = b.Ob(e), z = A.left, A = A.top, a.d(e.getBBox, "Function") && (y = e.getBBox(), m = y.width, y = y.height), "html" === (e.tagName || "").toLowerCase())) m = Math.max(m, e.clientWidth), y = Math.max(y, e.clientHeight); return { Fa: Math.round(100 * ((g - z) / m)), Ha: Math.round(100 * ((f - A) / y)), Na: m, za: y, La: ("a" === (e.tagName || "").toLowerCase() ? e : b.Fb(e)) ? "a" : "b" }
      }, na: function (b) {
        var d = a.h; b = [+new Date - (h.c.X !== q ? h.c.X : n), d(b.id), d(b.aa), d(b.ia),
        d(b.$), d(b.link), d(b.content), b.type, b.uc, b.Fa, b.Ha, b.Na, b.za, b.La].join("*"); s.oa(b); a.d(this.Z(), "Function") && this.Z()()
      }, oa: function (a) { a.length > e.pa || (encodeURIComponent(p.join("!") + a).length > e.pa && (s.w(p.join("!")), p = []), p.push(a)) }, w: function (a) { h.c.b.et = 5; h.c.b.ep = a; h.c.b.p = l(f.A("autoEventTracking")); h.c.i(); h.c.b.p = "" }, Z: function () { return function () { p && p.length && (s.w(p.join("!")), p = []) } }
    }; a.H(c.aet) && "" !== c.aet && r.e("pv-b", function () {
      g.e(document, "click", s.ba()); "ontouchend" in document &&
        g.e(window, "touchend", s.ba()); g.e(window, "unload", s.Z())
    }); return s
  })();
  (function () {
    var a = mt.lang, b = mt.event, g = mt.g, d = h.D, e = h.z, r = +new Date, f = [], l = w, n = { tb: function () { a.H(c.aet) && "" !== c.aet && setInterval(n.ib, d.lc) }, ib: function () { var a = g.U() + g.M(); 0 < a - h.c.b.vl && (h.c.b.vl = a) } }, p = {
      Bb: function () { return function () { h.c && (h.c.V && c.aet && c.aet.length) && (window.clearTimeout(l), l = window.setTimeout(function () { p.rb(g.U() + g.M()) }, 150)) } }, rb: function (a) { p.oa([+new Date - (h.c.X !== q ? h.c.X : r), a].join("*")) }, oa: function (a) {
        if (encodeURIComponent(f.join("!") + a).length > d.pa || 3 < f.length) p.w(f.join("!")),
          f = []; f.push(a)
      }, w: function (a) { n.ib(); h.c.b.et = 6; h.c.b.vh = g.M(); h.c.b.ep = a; h.c.i() }, Z: function () { return function () { f && f.length && (p.w(f.join("!")), f = []) } }
    }; a.H(c.aet) && "" !== c.aet && e.e("pv-b", function () { b.e(window, "scroll", p.Bb()); b.e(window, "unload", p.Z()); n.tb() }); return p
  })();
  (function () {
    function a() { return function () { h.c.b.nv = 0; h.c.b.st = 4; h.c.b.et = 3; h.c.b.ep = h.sa.Pb() + "," + h.sa.Lb(); h.c.b.hca = c.hca; h.c.i() } } function b() { clearTimeout(z); var a; m && (a = "visible" == document[m]); y && (a = !document[y]); l = "undefined" == typeof a ? u : a; if ((!f || !n) && l && p) k = u, t = +new Date; else if (f && n && (!l || !p)) k = x, v += +new Date - t; f = l; n = p; z = setTimeout(b, 100) } function g(a) {
      var m = document, b = ""; if (a in m) b = a; else for (var d = ["webkit", "ms", "moz", "o"], e = 0; e < d.length; e++) {
        var f = d[e] + a.charAt(0).toUpperCase() + a.slice(1);
        if (f in m) { b = f; break }
      } return b
    } function d(a) { if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) p = "focus" == a.type || "focusin" == a.type ? u : x, b() } var e = mt.event, r = h.z, f = u, l = u, n = u, p = u, s = +new Date, t = s, v = 0, k = u, m = g("visibilityState"), y = g("hidden"), z; b(); (function () {
      var a = m.replace(/[vV]isibilityState/, "visibilitychange"); e.e(document, a, b); e.e(window, "pageshow", b); e.e(window, "pagehide", b); "object" == typeof document.onfocusin ? (e.e(document, "focusin", d), e.e(document, "focusout", d)) : (e.e(window,
        "focus", d), e.e(window, "blur", d))
    })(); h.sa = { Pb: function () { return +new Date - s }, Lb: function () { return k ? +new Date - t + v : v } }; r.e("pv-b", function () { e.e(window, "unload", a()) }); r.e("duration-send", a()); r.e("duration-done", function () { t = s = +new Date; v = 0 }); return h.sa
  })();
  (function () { var a = mt.lang, b = h.D, g = h.load, d = { bc: function (d) { if ((window._dxt === q || a.d(window._dxt, "Array")) && "undefined" !== typeof h.c) { var r = h.c.R(); g([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(r)].join(""), d) } }, tc: function (b) { if (a.d(b, "String") || a.d(b, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", b]) } }; return h.zb = d })();
  (function () {
    function a(a, b, d, f) { if (!(a === q || b === q || f === q)) { if ("" === a) return [b, d, f].join("*"); a = String(a).split("!"); for (var e, g = x, k = 0; k < a.length; k++)if (e = a[k].split("*"), String(b) === e[0]) { e[1] = d; e[2] = f; a[k] = e.join("*"); g = u; break } g || a.push([b, d, f].join("*")); return a.join("!") } } function b(a) { for (var f in a) if ({}.hasOwnProperty.call(a, f)) { var e = a[f]; d.d(e, "Object") || d.d(e, "Array") ? b(e) : a[f] = String(e) } } var g = mt.url, d = mt.lang, e = mt.s, r = mt.g, f = h.D, l = h.z, n = h.zb, p = h.load, s = h.qa, t = h.P, v = t.O, k = {
      Y: [], ha: 0, Da: x,
      C: { Ma: "", page: "" }, init: function () { k.j = 0; t.init(); l.e("pv-b", function () { k.Ab(); k.Cb() }); l.e("pv-d", function () { k.Db(); k.C.page = "" }); l.e("stag-b", function () { h.c.b.api = k.j || k.ha ? k.j + "_" + k.ha : ""; h.c.b.ct = [decodeURIComponent(s.getData("Hm_ct_" + c.id) || ""), k.C.Ma, k.C.page].join("!") }); l.e("stag-d", function () { h.c.b.api = 0; k.j = 0; k.ha = 0 }) }, Ab: function () {
        var a = window._hmt || []; if (!a || d.d(a, "Array")) window._hmt = {
          id: c.id, cmd: {}, push: function () {
            for (var a = window._hmt, b = 0; b < arguments.length; b++) {
              var m = arguments[b];
              d.d(m, "Array") && (a.cmd[a.id].push(m), "_setAccount" === m[0] && (1 < m.length && /^[0-9a-f]{32}$/.test(m[1])) && (m = m[1], a.id = m, a.cmd[m] = a.cmd[m] || []))
            }
          }
        }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
      }, Cb: function () { var a = window._hmt; if (a && a.cmd && a.cmd[c.id]) for (var b = a.cmd[c.id], d = /^_track(Event|MobConv|Order)$/, e = 0, f = b.length; e < f; e++) { var g = b[e]; d.test(g[0]) ? k.Y.push(g) : k.Ja(g) } a.cmd[c.id] = { push: k.Ja } }, Db: function () { if (0 < k.Y.length) for (var a = 0, b = k.Y.length; a < b; a++)k.Ja(k.Y[a]); k.Y = w }, Ja: function (a) {
        var b =
          a[0]; if (k.hasOwnProperty(b) && d.d(k[b], "Function")) k[b](a)
      }, _setAccount: function (a) { 1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (k.j |= 1) }, _setAutoPageview: function (a) { if (1 < a.length && (a = a[1], x === a || u === a)) k.j |= 2, h.c.Xa = a }, _trackPageview: function (a) {
        1 < a.length && (a[1].charAt && "/" === a[1].charAt(0)) && (k.j |= 4, h.c.b.sn = h.c.Va(), h.c.b.et = 0, h.c.b.ep = "", h.c.b.vl = r.U() + r.M(), h.c.b.kb = 0, h.c.Ba ? (h.c.b.nv = 0, h.c.b.st = 4) : h.c.Ba = u, k.Da || (h.c.b.su = h.c.b.u || document.location.href), h.c.b.u = f.protocol + "//" + document.location.host +
          a[1], h.c.b.p = v(t.A("pageview")), h.c.i(), h.c.b.p = "", h.c.X = +new Date, t.o("pageview"))
      }, _trackEvent: function (a) { 2 < a.length && (k.j |= 8, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 4, h.c.b.ep = d.h(a[1]) + "*" + d.h(a[2]) + (a[3] ? "*" + d.h(a[3]) : "") + (a[4] ? "*" + d.h(a[4]) : ""), h.c.b.p = v(t.ya()), h.c.i(), h.c.b.p = "") }, _setCustomVar: function (a) {
        if (!(4 > a.length)) {
          var b = a[1], e = a[4] || 3; if (0 < b && 6 > b && 0 < e && 4 > e) {
            k.ha++; for (var f = (h.c.b.cv || "*").split("!"), g = f.length; g < b - 1; g++)f.push("*"); f[b - 1] = e + "*" + d.h(a[2]) + "*" + d.h(a[3]); h.c.b.cv = f.join("!");
            a = h.c.b.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, ""); "" !== a ? s.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : s.removeData("Hm_cv_" + c.id)
          }
        }
      }, _setUserTag: function (b) { if (!(3 > b.length)) { var e = d.h(b[1]); b = d.h(b[2]); if (e !== q && b !== q) { var f = decodeURIComponent(s.getData("Hm_ct_" + c.id) || ""), f = a(f, e, 1, b); s.setData("Hm_ct_" + c.id, encodeURIComponent(f), c.age) } } }, _setVisitTag: function (b) { if (!(3 > b.length)) { var e = d.h(b[1]); b = d.h(b[2]); if (e !== q && b !== q) { var f = k.C.Ma, f = a(f, e, 2, b); k.C.Ma = f } } }, _setPageTag: function (b) {
        if (!(3 >
          b.length)) { var f = d.h(b[1]); b = d.h(b[2]); if (f !== q && b !== q) { var e = k.C.page, e = a(e, f, 3, b); k.C.page = e } }
      }, _setReferrerOverride: function (a) { 1 < a.length && (a = a[1], d.d(a, "String") ? (h.c.b.su = "/" === a.charAt(0) ? f.protocol + "//" + window.location.host + a : a, k.Da = u) : k.Da = x) }, _trackOrder: function (a) { a = a[1]; d.d(a, "Object") && (b(a), k.j |= 16, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 94, h.c.b.ep = e.stringify(a), h.c.b.p = v(t.ya()), h.c.i(), h.c.b.p = "") }, _trackMobConv: function (a) {
        if (a = { webim: 1, tel: 2, map: 3, sms: 4, callback: 5, share: 6 }[a[1]]) k.j |=
          32, h.c.b.et = 93, h.c.b.ep = a, h.c.i()
      }, _setDataxId: function (a) { a = a[1]; n.bc(); n.tc(a) }, _setUserId: function (a) { a = a[1]; if (a !== q && (d.H(a) || d.Za(a))) { var b = t.A("user").uid_; if (!(b && b.value === d.h(String(a)))) { var b = h.c.b.p, e = h.c.b.ep; h.c.b.et = 8; h.c.b.ep = ""; h.c.b.p = "uid_*" + d.h(String(a)); h.c.i(); var f = {}; f.uid_ = a; t.setProperty("user", f, u); h.c.b.p = b; h.c.b.ep = e } } }, _clearUserId: function (a) { 1 < a.length && u === a[1] && t.o("userId") }, _setUserProperty: function (a) { a = a[1]; d.d(a, "Object") && t.setProperty("user", a) }, _clearUserProperty: function (a) {
        1 <
        a.length && u === a[1] && t.o("user")
      }, _setSessionProperty: function (a) { a = a[1]; d.d(a, "Object") && t.setProperty("session", a) }, _clearSessionProperty: function (a) { 1 < a.length && u === a[1] && t.o("session") }, _setPageviewProperty: function (a) { a = a[1]; d.d(a, "Object") && t.setProperty("pageview", a) }, _clearPageviewProperty: function (a) { 1 < a.length && u === a[1] && t.o("pageview") }, _setAutoEventTrackingProperty: function (a) { a = a[1]; d.d(a, "Object") && t.setProperty("autoEventTracking", a) }, _clearAutoEventTrackingProperty: function (a) {
        1 < a.length &&
        u === a[1] && t.o("autoEventTracking")
      }, _setAutoTracking: function (a) { if (1 < a.length && (a = a[1], x === a || u === a)) h.c.Ya = a }, _setAutoEventTracking: function (a) { if (1 < a.length && (a = a[1], x === a || u === a)) h.c.V = a }, _trackPageDuration: function (a) { 1 < a.length ? (a = a[1], 2 === String(a).split(",").length && (h.c.b.et = 3, h.c.b.ep = a, h.c.i())) : l.K("duration-send"); l.K("duration-done") }, _require: function (a) { 1 < a.length && (a = a[1], f.vb.test(g.L(a)) && p(a)) }, _providePlugin: function (a) {
        if (1 < a.length) {
          var b = window._hmt, e = a[1]; a = a[2]; if (d.G(f.eb,
            e) && d.d(a, "Function") && (b.plugins = b.plugins || {}, b.I = b.I || {}, b.plugins[e] = a, b.B = b.B || [], a = b.B.slice(), e && a.length && a[0][1] === e)) for (var g = 0, k = a.length; g < k; g++) { var l = a[g][2] || {}; if (b.plugins[e] && !b.I[e]) b.I[e] = new b.plugins[e](l), b.B.shift(); else break }
        }
      }, _requirePlugin: function (a) {
        if (1 < a.length) {
          var b = window._hmt, e = a[1], g = a[2] || {}; if (d.G(f.eb, e)) if (b.plugins = b.plugins || {}, b.I = b.I || {}, b.plugins[e] && !b.I[e]) b.I[e] = new b.plugins[e](g); else {
            b.B = b.B || []; for (var g = 0, l = b.B.length; g < l; g++)if (b.B[g][1] ===
              e) return; b.B.push(a); k._require([w, f.ic + e + ".js"])
          }
        }
      }, _trackCustomEvent: function (a) { if (1 < a.length) { var b = a[1]; a = a[2]; d.d(a, "Object") || (a = {}); a._iden = b; t.setProperty("customEvent", a); h.c.b.et = 7; h.c.b.ep = ""; h.c.b.p = v(t.A("customEvent")); h.c.i(); h.c.b.p = ""; t.o("customEvent") } }
    }; k.init(); h.wb = k; return h.wb
  })();
  (function () { var a = h.z; c.spa !== q && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]), a.e("pv-b", function () { "" !== window.location.hash && (h.c.b.u = window.location.href) })) })();
  (function () {
    function a() { "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = u, this.b = {}, this.Ya = this.Xa = u, this.V = k.V, this.Ra = e.H(c.aet) && 0 < c.aet.length ? c.aet.split(",") : "", this.Ba = x, this.init()) } var b = mt.url, g = mt.lb, d = mt.Ka, e = mt.lang, r = mt.cookie, f = mt.g, l = mt.sessionStorage, n = mt.s, p = mt.event, s = h.qa, t = h.P, v = t.O, k = h.D, m = h.load, y = h.z; a.prototype = {
      W: function (a, b) { a = "." + a.replace(/:\d+/, ""); b = "." + b.replace(/:\d+/, ""); var d = a.indexOf(b); return -1 < d && d + b.length === a.length }, ga: function (a,
        b) { a = a.replace(/^https?:\/\//, ""); return 0 === a.indexOf(b) }, ea: function (a) { for (var d = 0; d < c.dm.length; d++)if (-1 < c.dm[d].indexOf("/")) { if (this.ga(a, c.dm[d])) return u } else { var e = b.L(a); if (e && this.W(e, c.dm[d])) return u } return x }, R: function () { for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)if (this.W(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, ""); return a }, da: function () {
          for (var a = 0, b = c.dm.length; a < b; a++) {
            var d = c.dm[a]; if (-1 < d.indexOf("/") && this.ga(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/,
              "$1") + "/"
          } return "/"
        }, Sb: function () { if (!document.referrer) return k.J - k.N > c.vdur ? 1 : 4; var a = x; this.ea(document.referrer) && this.ea(document.location.href) ? a = u : (a = b.L(document.referrer), a = this.W(a || "", document.location.hostname)); return a ? k.J - k.N > c.vdur ? 1 : 4 : 3 }, rc: function () {
          var a, b, d, e, f, g; k.N = s.getData("Hm_lpvt_" + c.id) || 0; 13 === k.N.length && (k.N = Math.round(k.N / 1E3)); b = this.Sb(); a = 4 !== b ? 1 : 0; if (g = s.getData("Hm_lvt_" + c.id)) {
            e = g.split(","); for (f = e.length - 1; 0 <= f; f--)13 === e[f].length && (e[f] = "" + Math.round(e[f] /
              1E3)); for (; 2592E3 < k.J - e[0];)e.shift(); f = 4 > e.length ? 2 : 3; for (1 === a && e.push(k.J); 4 < e.length;)e.shift(); g = e.join(","); e = e[e.length - 1]
          } else g = k.J, e = "", f = 1; this.fc() ? (s.setData("Hm_lvt_" + c.id, g, c.age), s.setData("Hm_lpvt_" + c.id, k.J), d = r.hc(this.R(), this.da())) : this.Eb(); if (0 === c.nv && this.ea(document.location.href) && ("" === document.referrer || this.ea(document.referrer))) a = 0, b = 4; this.b.nv = a; this.b.st = b; this.b.cc = d; this.b.lt = e; this.b.lv = f
        }, fc: function () {
          var a = b.L(document.location.href); return !e.G("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),
            a)
        }, Eb: function () { for (var a = document.cookie.split(";"), b = 0; b < a.length; b++) { var d = a[b].split("="); d.length && /Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0])) && s.removeData(d[0]); d.length && /Hm_ck_[0-9]{13}/.test(String(d[0])) && s.removeData(d[0]) } }, qc: function () { for (var a = [], b = this.b.et, d = 0, e = k.mb.length; d < e; d++) { var f = k.mb[d], g = this.b[f]; "undefined" !== typeof g && "" !== g && ("tt" !== f || "tt" === f && 0 === b) && ("ct" !== f || "ct" === f && 0 === b) && a.push(f + "=" + encodeURIComponent(g)) } return a.join("&") }, sc: function () {
          this.rc();
          this.b.si = c.id; this.b.sn = this.Va(); this.b.su = document.referrer; this.b.ds = f.kc; this.b.cl = f.colorDepth + "-bit"; this.b.ln = String(f.language).toLowerCase(); this.b.ja = f.javaEnabled ? 1 : 0; this.b.ck = f.cookieEnabled ? 1 : 0; this.b.lo = "number" === typeof _bdhm_top ? 1 : 0; this.b.fl = d.Ub(); this.b.v = "1.2.76"; this.b.cv = decodeURIComponent(s.getData("Hm_cv_" + c.id) || ""); this.b.tt = document.title || ""; this.b.vl = f.U() + f.M(); var a = document.location.href; this.b.cm = b.m(a, k.Zb) || ""; this.b.cp = b.m(a, k.$b) || b.m(a, k.xc) || ""; this.b.cw = b.m(a,
            k.Yb) || b.m(a, k.zc) || ""; this.b.ci = b.m(a, k.Wb) || b.m(a, k.wc) || ""; this.b.cf = b.m(a, k.ac) || b.m(a, k.yc) || ""; this.b.cu = b.m(a, k.Xb) || b.m(a, k.vc) || ""; this.b.u = window.location.href
        }, init: function () { try { this.sc(), 0 === this.b.nv ? this.pc() : this.Ta(), h.c = this, this.yb(), this.xb(), y.K("pv-b"), this.mc() } catch (a) { var b = []; b.push("si=" + c.id); b.push("n=" + encodeURIComponent(a.name)); b.push("m=" + encodeURIComponent(a.message)); b.push("r=" + encodeURIComponent(document.referrer)); g.log(k.Ea + "//" + k.fb + "?" + b.join("&")) } }, mc: function () {
          function a() { y.K("pv-d") }
          this.Xa ? (this.Ba = u, this.b.et = 0, this.b.ep = "", this.b.p = v(t.A("pageview")), this.b.vl = f.U() + f.M(), this.i(a), this.b.p = "") : a(); this.X = +new Date; t.o("pageview")
        }, i: function (a) { if (this.Ya) { var b = this; b.b.rnd = Math.round(Math.random() * k.Ga); b.b.r = f.orientation; b.b.ww = f.ob; y.K("stag-b"); var d = k.Ea + "//" + k.fb + "?" + b.qc(); y.K("stag-d"); b.ub(d); g.log(d, function (d) { b.hb(d); e.d(a, "Function") && a.call(b) }) } }, yb: function () {
          var a = document.location.hash.substring(1), d = RegExp(c.id), e = b.L(document.referrer) === k.nb ? 1 : 0, f =
            b.m(a, "jn"), g = /^select$/.test(f); a && (d.test(a) && e && g) && (this.b.rnd = Math.round(Math.random() * k.Ga), a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", k.protocol + "//" + c.js + f + ".js?" + this.b.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a, f))
        }, xb: function () {
          try {
            if (window.postMessage && window.self !== window.parent) {
              var a = this; p.e(window, "message", function (d) {
                if (b.L(d.origin) === k.nb) {
                  d = d.data || {};
                  var e = d.jn || "", f = /^customevent$|^heatmap$|^pageclick$/.test(e); if (RegExp(c.id).test(d.sd || "") && f) a.b.rnd = Math.round(Math.random() * k.Ga), m(k.protocol + "//" + c.js + e + ".js?" + a.b.rnd)
                }
              }); window.parent.postMessage({ id: c.id, url: document.location.href, status: "__Messenger__hmLoaded" }, "*")
            }
          } catch (d) { }
        }, ub: function (a) {
          var b; try { b = n.parse(l.get("Hm_unsent_" + c.id) || "[]") } catch (d) { b = [] } var e = this.b.u ? "" : "&u=" + encodeURIComponent(document.location.href); b.push(a.replace(/^https?:\/\//, "") + e); l.set("Hm_unsent_" + c.id,
            n.stringify(b))
        }, hb: function (a) { var b; try { b = n.parse(l.get("Hm_unsent_" + c.id) || "[]") } catch (d) { b = [] } if (b.length) { a = a.replace(/^https?:\/\//, ""); for (var e = 0; e < b.length; e++)if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) { b.splice(e, 1); break } b.length ? l.set("Hm_unsent_" + c.id, n.stringify(b)) : this.Ta() } }, Ta: function () { l.remove("Hm_unsent_" + c.id) }, pc: function () {
          var a = this, b; try { b = n.parse(l.get("Hm_unsent_" + c.id) || "[]") } catch (d) { b = [] } if (b.length) for (var e = function (b) { g.log(k.Ea + "//" + b, function (b) { a.hb(b) }) },
            f = 0; f < b.length; f++)e(b[f])
        }, Va: function () { return Math.round(+new Date / 1E3) % 65535 }
    }; return new a
  })(); var B = h.D, C = h.load; c.pt && C([B.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
  (function () {
    var a = mt.g, b = mt.lang, g = mt.event, d = mt.s; if ("undefined" !== typeof h.c && (c.med || (!a.Ca || 7 < a.Nb()) && c.cvcc)) {
      var e, r, f, l, n = function (a) { if (a.item) { for (var b = a.length, d = Array(b); b--;)d[b] = a[b]; return d } return [].slice.call(a) }, p = function (a, b) { for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === x) return x }, s = function (a, g) {
        var k = {}; k.n = e; k.t = "clk"; k.v = a; if (g) {
          var l = g.getAttribute("href"), n = g.getAttribute("onclick") ? "" + g.getAttribute("onclick") : w, p = g.getAttribute("id") || ""; f.test(l) ? (k.sn =
            "mediate", k.snv = l) : b.d(n, "String") && f.test(n) && (k.sn = "wrap", k.snv = n); k.id = p
        } h.c.b.et = 86; h.c.b.ep = d.stringify(k); h.c.i(); for (k = +new Date; 400 >= +new Date - k;);
      }; if (c.med) r = "/zoosnet", e = "swt", f = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, l = {
        click: function () {
          for (var a = [], b = n(document.getElementsByTagName("a")), b = [].concat.apply(b, n(document.getElementsByTagName("area"))), b = [].concat.apply(b, n(document.getElementsByTagName("img"))), d, e, g = 0, k = b.length; g < k; g++)d = b[g], e =
            d.getAttribute("onclick"), d = d.getAttribute("href"), (f.test(e) || f.test(d)) && a.push(b[g]); return a
        }
      }; else if (c.cvcc) {
        r = "/other-comm"; e = "other"; f = c.cvcc.q || q; var t = c.cvcc.id || q; l = {
          click: function () {
            for (var a = [], b = n(document.getElementsByTagName("a")), b = [].concat.apply(b, n(document.getElementsByTagName("area"))), b = [].concat.apply(b, n(document.getElementsByTagName("img"))), d, e, g, k = 0, l = b.length; k < l; k++)d = b[k], f !== q ? (e = d.getAttribute("onclick"), g = d.getAttribute("href"), t ? (d = d.getAttribute("id"), (f.test(e) ||
              f.test(g) || t.test(d)) && a.push(b[k])) : (f.test(e) || f.test(g)) && a.push(b[k])) : t !== q && (d = d.getAttribute("id"), t.test(d) && a.push(b[k])); return a
          }
        }
      } if ("undefined" !== typeof l && "undefined" !== typeof f) {
        var v; r += /\/$/.test(r) ? "" : "/"; var k = function (a, d) { if (v === d) return s(r + a, d), x; if (b.d(d, "Array") || b.d(d, "NodeList")) for (var e = 0, f = d.length; e < f; e++)if (v === d[e]) return s(r + a + "/" + (e + 1), d[e]), x }; g.e(document, "mousedown", function (a) {
          a = a || window.event; v = a.target || a.srcElement; var d = {}; for (p(l, function (a, e) {
            d[a] = b.d(e,
              "Function") ? e() : document.getElementById(e)
          }); v && v !== document && p(d, k) !== x;)v = v.parentNode
        })
      }
    }
  })(); (function () { var a = mt.f, b = mt.lang, g = mt.event, d = mt.s; if ("undefined" !== typeof h.c && b.d(c.cvcf, "Array") && 0 < c.cvcf.length) { var e = { qb: function () { for (var b = c.cvcf.length, d, l = 0; l < b; l++)(d = a.Ua(decodeURIComponent(c.cvcf[l]))) && g.e(d, "click", e.ta()) }, ta: function () { return function () { h.c.b.et = 86; var a = { n: "form", t: "clk" }; a.id = this.id; h.c.b.ep = d.stringify(a); h.c.i() } } }; a.gb(function () { e.qb() }) } })();
  (function () { var a = mt.event, b = mt.s; if (c.med && "undefined" !== typeof h.c) { var g = { n: "anti", sb: 0, kb: 0, clk: 0 }, d = function () { h.c.b.et = 86; h.c.b.ep = b.stringify(g); h.c.i() }; a.e(document, "click", function () { g.clk++ }); a.e(document, "keyup", function () { g.kb = 1 }); a.e(window, "scroll", function () { g.sb++ }); a.e(window, "load", function () { setTimeout(d, 5E3) }) } })(); c.oc !== q && "1" === String(c.oc) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "OcpcCbHm"]));
})();