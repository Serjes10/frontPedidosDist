/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
    if (!e2.document) throw new Error("jQuery requires a window with a document");
    return t(e2);
  } : t(e);
})("undefined" != typeof window ? window : this, function(ie, e) {
  "use strict";
  var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function(e2) {
    return oe.flat.call(e2);
  } : function(e2) {
    return oe.concat.apply([], e2);
  }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function(e2) {
    return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
  }, y = function(e2) {
    return null != e2 && e2 === e2.window;
  }, C = ie.document, u = { type: true, src: true, nonce: true, noModule: true };
  function m(e2, t2, n2) {
    var r2, i2, o2 = (n2 = n2 || C).createElement("script");
    if (o2.text = e2, t2) for (r2 in u) (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
    n2.head.appendChild(o2).parentNode.removeChild(o2);
  }
  function x(e2) {
    return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[i.call(e2)] || "object" : typeof e2;
  }
  var t = "3.7.1", l = /HTML$/i, ce = function(e2, t2) {
    return new ce.fn.init(e2, t2);
  };
  function c(e2) {
    var t2 = !!e2 && "length" in e2 && e2.length, n2 = x(e2);
    return !v(e2) && !y(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
  }
  function fe(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }
  ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function() {
    return ae.call(this);
  }, get: function(e2) {
    return null == e2 ? ae.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
  }, pushStack: function(e2) {
    var t2 = ce.merge(this.constructor(), e2);
    return t2.prevObject = this, t2;
  }, each: function(e2) {
    return ce.each(this, e2);
  }, map: function(n2) {
    return this.pushStack(ce.map(this, function(e2, t2) {
      return n2.call(e2, t2, e2);
    }));
  }, slice: function() {
    return this.pushStack(ae.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return (t2 + 1) % 2;
    }));
  }, odd: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return t2 % 2;
    }));
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
    return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function() {
    var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
    for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || v(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++) if (null != (e2 = arguments[s2])) for (t2 in e2) r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (ce.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || ce.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = ce.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
    return a2;
  }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
    throw new Error(e2);
  }, noop: function() {
  }, isPlainObject: function(e2) {
    var t2, n2;
    return !(!e2 || "[object Object]" !== i.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = ue.call(t2, "constructor") && t2.constructor) && o.call(n2) === a);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2) return false;
    return true;
  }, globalEval: function(e2, t2, n2) {
    m(e2, { nonce: t2 && t2.nonce }, n2);
  }, each: function(e2, t2) {
    var n2, r2 = 0;
    if (c(e2)) {
      for (n2 = e2.length; r2 < n2; r2++) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    } else for (r2 in e2) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    return e2;
  }, text: function(e2) {
    var t2, n2 = "", r2 = 0, i2 = e2.nodeType;
    if (!i2) while (t2 = e2[r2++]) n2 += ce.text(t2);
    return 1 === i2 || 11 === i2 ? e2.textContent : 9 === i2 ? e2.documentElement.textContent : 3 === i2 || 4 === i2 ? e2.nodeValue : n2;
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return null != e2 && (c(Object(e2)) ? ce.merge(n2, "string" == typeof e2 ? [e2] : e2) : s.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    return null == t2 ? -1 : se.call(t2, e2, n2);
  }, isXMLDoc: function(e2) {
    var t2 = e2 && e2.namespaceURI, n2 = e2 && (e2.ownerDocument || e2).documentElement;
    return !l.test(t2 || n2 && n2.nodeName || "HTML");
  }, merge: function(e2, t2) {
    for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++) e2[i2++] = t2[r2];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++) !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
    return r2;
  }, map: function(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = [];
    if (c(e2)) for (r2 = e2.length; o2 < r2; o2++) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    else for (o2 in e2) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    return g(a2);
  }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
    n["[object " + t2 + "]"] = t2.toLowerCase();
  });
  var pe = oe.pop, de = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function(e2, t2) {
    var n2 = t2 && t2.parentNode;
    return e2 === n2 || !(!n2 || 1 !== n2.nodeType || !(e2.contains ? e2.contains(n2) : e2.compareDocumentPosition && 16 & e2.compareDocumentPosition(n2)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e2, t2) {
    return t2 ? "\0" === e2 ? "\uFFFD" : e2.slice(0, -1) + "\\" + e2.charCodeAt(e2.length - 1).toString(16) + " " : "\\" + e2;
  }
  ce.escapeSelector = function(e2) {
    return (e2 + "").replace(f, p);
  };
  var ye = C, me = s;
  !(function() {
    var e2, b2, w2, o2, a2, T2, r2, C2, d2, i2, k2 = me, S2 = ce.expando, E2 = 0, n2 = 0, s2 = W2(), c2 = W2(), u2 = W2(), h2 = W2(), l2 = function(e3, t3) {
      return e3 === t3 && (a2 = true), 0;
    }, f2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t2 = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p2 = "\\[" + ge + "*(" + t2 + ")(?:" + ge + "*([*^$|!~]?=)" + ge + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + t2 + "))|)" + ge + "*\\]", g2 = ":(" + t2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + p2 + ")*)|.*)\\)|)", v2 = new RegExp(ge + "+", "g"), y2 = new RegExp("^" + ge + "*," + ge + "*"), m2 = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x2 = new RegExp(ge + "|>"), j2 = new RegExp(g2), A2 = new RegExp("^" + t2 + "$"), D2 = { ID: new RegExp("^#(" + t2 + ")"), CLASS: new RegExp("^\\.(" + t2 + ")"), TAG: new RegExp("^(" + t2 + "|[*])"), ATTR: new RegExp("^" + p2), PSEUDO: new RegExp("^" + g2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f2 + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, N2 = /^(?:input|select|textarea|button)$/i, q2 = /^h\d$/i, L2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H2 = /[+~]/, O2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), P2 = function(e3, t3) {
      var n3 = "0x" + e3.slice(1) - 65536;
      return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
    }, M2 = function() {
      V2();
    }, R2 = J2(function(e3) {
      return true === e3.disabled && fe(e3, "fieldset");
    }, { dir: "parentNode", next: "legend" });
    try {
      k2.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e3) {
      k2 = { apply: function(e4, t3) {
        me.apply(e4, ae.call(t3));
      }, call: function(e4) {
        me.apply(e4, ae.call(arguments, 1));
      } };
    }
    function I2(t3, e3, n3, r3) {
      var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
      if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3) return n3;
      if (!r3 && (V2(e3), e3 = e3 || T2, C2)) {
        if (11 !== p3 && (u3 = L2.exec(t3))) if (i3 = u3[1]) {
          if (9 === p3) {
            if (!(a3 = e3.getElementById(i3))) return n3;
            if (a3.id === i3) return k2.call(n3, a3), n3;
          } else if (f3 && (a3 = f3.getElementById(i3)) && I2.contains(e3, a3) && a3.id === i3) return k2.call(n3, a3), n3;
        } else {
          if (u3[2]) return k2.apply(n3, e3.getElementsByTagName(t3)), n3;
          if ((i3 = u3[3]) && e3.getElementsByClassName) return k2.apply(n3, e3.getElementsByClassName(i3)), n3;
        }
        if (!(h2[t3 + " "] || d2 && d2.test(t3))) {
          if (c3 = t3, f3 = e3, 1 === p3 && (x2.test(t3) || m2.test(t3))) {
            (f3 = H2.test(t3) && U2(e3.parentNode) || e3) == e3 && le.scope || ((s3 = e3.getAttribute("id")) ? s3 = ce.escapeSelector(s3) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = Y2(t3)).length;
            while (o3--) l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + Q2(l3[o3]);
            c3 = l3.join(",");
          }
          try {
            return k2.apply(n3, f3.querySelectorAll(c3)), n3;
          } catch (e4) {
            h2(t3, true);
          } finally {
            s3 === S2 && e3.removeAttribute("id");
          }
        }
      }
      return re2(t3.replace(ve, "$1"), e3, n3, r3);
    }
    function W2() {
      var r3 = [];
      return function e3(t3, n3) {
        return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
      };
    }
    function F2(e3) {
      return e3[S2] = true, e3;
    }
    function $2(e3) {
      var t3 = T2.createElement("fieldset");
      try {
        return !!e3(t3);
      } catch (e4) {
        return false;
      } finally {
        t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
      }
    }
    function B2(t3) {
      return function(e3) {
        return fe(e3, "input") && e3.type === t3;
      };
    }
    function _2(t3) {
      return function(e3) {
        return (fe(e3, "input") || fe(e3, "button")) && e3.type === t3;
      };
    }
    function z2(t3) {
      return function(e3) {
        return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && R2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
      };
    }
    function X2(a3) {
      return F2(function(o3) {
        return o3 = +o3, F2(function(e3, t3) {
          var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
          while (i3--) e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
        });
      });
    }
    function U2(e3) {
      return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
    }
    function V2(e3) {
      var t3, n3 = e3 ? e3.ownerDocument || e3 : ye;
      return n3 != T2 && 9 === n3.nodeType && n3.documentElement && (r2 = (T2 = n3).documentElement, C2 = !ce.isXMLDoc(T2), i2 = r2.matches || r2.webkitMatchesSelector || r2.msMatchesSelector, r2.msMatchesSelector && ye != T2 && (t3 = T2.defaultView) && t3.top !== t3 && t3.addEventListener("unload", M2), le.getById = $2(function(e4) {
        return r2.appendChild(e4).id = ce.expando, !T2.getElementsByName || !T2.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = $2(function(e4) {
        return i2.call(e4, "*");
      }), le.scope = $2(function() {
        return T2.querySelectorAll(":scope");
      }), le.cssHas = $2(function() {
        try {
          return T2.querySelector(":has(*,:jqfake)"), false;
        } catch (e4) {
          return true;
        }
      }), le.getById ? (b2.filter.ID = function(e4) {
        var t4 = e4.replace(O2, P2);
        return function(e5) {
          return e5.getAttribute("id") === t4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && C2) {
          var n4 = t4.getElementById(e4);
          return n4 ? [n4] : [];
        }
      }) : (b2.filter.ID = function(e4) {
        var n4 = e4.replace(O2, P2);
        return function(e5) {
          var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
          return t4 && t4.value === n4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && C2) {
          var n4, r3, i3, o3 = t4.getElementById(e4);
          if (o3) {
            if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
            i3 = t4.getElementsByName(e4), r3 = 0;
            while (o3 = i3[r3++]) if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
          }
          return [];
        }
      }), b2.find.TAG = function(e4, t4) {
        return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : t4.querySelectorAll(e4);
      }, b2.find.CLASS = function(e4, t4) {
        if ("undefined" != typeof t4.getElementsByClassName && C2) return t4.getElementsByClassName(e4);
      }, d2 = [], $2(function(e4) {
        var t4;
        r2.appendChild(e4).innerHTML = "<a id='" + S2 + "' href='' disabled='disabled'></a><select id='" + S2 + "-\r\\' disabled='disabled'><option selected=''></option></select>", e4.querySelectorAll("[selected]").length || d2.push("\\[" + ge + "*(?:value|" + f2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || d2.push("~="), e4.querySelectorAll("a#" + S2 + "+*").length || d2.push(".#.+[+~]"), e4.querySelectorAll(":checked").length || d2.push(":checked"), (t4 = T2.createElement("input")).setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), r2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && d2.push(":enabled", ":disabled"), (t4 = T2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || d2.push("\\[" + ge + "*name" + ge + "*=" + ge + `*(?:''|"")`);
      }), le.cssHas || d2.push(":has"), d2 = d2.length && new RegExp(d2.join("|")), l2 = function(e4, t4) {
        if (e4 === t4) return a2 = true, 0;
        var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
        return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !le.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 === T2 || e4.ownerDocument == ye && I2.contains(ye, e4) ? -1 : t4 === T2 || t4.ownerDocument == ye && I2.contains(ye, t4) ? 1 : o2 ? se.call(o2, e4) - se.call(o2, t4) : 0 : 4 & n4 ? -1 : 1);
      }), T2;
    }
    for (e2 in I2.matches = function(e3, t3) {
      return I2(e3, null, null, t3);
    }, I2.matchesSelector = function(e3, t3) {
      if (V2(e3), C2 && !h2[t3 + " "] && (!d2 || !d2.test(t3))) try {
        var n3 = i2.call(e3, t3);
        if (n3 || le.disconnectedMatch || e3.document && 11 !== e3.document.nodeType) return n3;
      } catch (e4) {
        h2(t3, true);
      }
      return 0 < I2(t3, T2, null, [e3]).length;
    }, I2.contains = function(e3, t3) {
      return (e3.ownerDocument || e3) != T2 && V2(e3), ce.contains(e3, t3);
    }, I2.attr = function(e3, t3) {
      (e3.ownerDocument || e3) != T2 && V2(e3);
      var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && ue.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !C2) : void 0;
      return void 0 !== r3 ? r3 : e3.getAttribute(t3);
    }, I2.error = function(e3) {
      throw new Error("Syntax error, unrecognized expression: " + e3);
    }, ce.uniqueSort = function(e3) {
      var t3, n3 = [], r3 = 0, i3 = 0;
      if (a2 = !le.sortStable, o2 = !le.sortStable && ae.call(e3, 0), de.call(e3, l2), a2) {
        while (t3 = e3[i3++]) t3 === e3[i3] && (r3 = n3.push(i3));
        while (r3--) he.call(e3, n3[r3], 1);
      }
      return o2 = null, e3;
    }, ce.fn.uniqueSort = function() {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (b2 = ce.expr = { cacheLength: 50, createPseudo: F2, match: D2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
      return e3[1] = e3[1].replace(O2, P2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(O2, P2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
    }, CHILD: function(e3) {
      return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || I2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && I2.error(e3[0]), e3;
    }, PSEUDO: function(e3) {
      var t3, n3 = !e3[6] && e3[2];
      return D2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && j2.test(n3) && (t3 = Y2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
    } }, filter: { TAG: function(e3) {
      var t3 = e3.replace(O2, P2).toLowerCase();
      return "*" === e3 ? function() {
        return true;
      } : function(e4) {
        return fe(e4, t3);
      };
    }, CLASS: function(e3) {
      var t3 = s2[e3 + " "];
      return t3 || (t3 = new RegExp("(^|" + ge + ")" + e3 + "(" + ge + "|$)")) && s2(e3, function(e4) {
        return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
      });
    }, ATTR: function(n3, r3, i3) {
      return function(e3) {
        var t3 = I2.attr(e3, n3);
        return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(v2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
      };
    }, CHILD: function(d3, e3, t3, h3, g3) {
      var v3 = "nth" !== d3.slice(0, 3), y3 = "last" !== d3.slice(-4), m3 = "of-type" === e3;
      return 1 === h3 && 0 === g3 ? function(e4) {
        return !!e4.parentNode;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3, s3, u3 = v3 !== y3 ? "nextSibling" : "previousSibling", l3 = e4.parentNode, c3 = m3 && e4.nodeName.toLowerCase(), f3 = !n3 && !m3, p3 = false;
        if (l3) {
          if (v3) {
            while (u3) {
              o3 = e4;
              while (o3 = o3[u3]) if (m3 ? fe(o3, c3) : 1 === o3.nodeType) return false;
              s3 = u3 = "only" === d3 && !s3 && "nextSibling";
            }
            return true;
          }
          if (s3 = [y3 ? l3.firstChild : l3.lastChild], y3 && f3) {
            p3 = (a3 = (r3 = (i3 = l3[S2] || (l3[S2] = {}))[d3] || [])[0] === E2 && r3[1]) && r3[2], o3 = a3 && l3.childNodes[a3];
            while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if (1 === o3.nodeType && ++p3 && o3 === e4) {
              i3[d3] = [E2, a3, p3];
              break;
            }
          } else if (f3 && (p3 = a3 = (r3 = (i3 = e4[S2] || (e4[S2] = {}))[d3] || [])[0] === E2 && r3[1]), false === p3) {
            while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if ((m3 ? fe(o3, c3) : 1 === o3.nodeType) && ++p3 && (f3 && ((i3 = o3[S2] || (o3[S2] = {}))[d3] = [E2, p3]), o3 === e4)) break;
          }
          return (p3 -= g3) === h3 || p3 % h3 == 0 && 0 <= p3 / h3;
        }
      };
    }, PSEUDO: function(e3, o3) {
      var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || I2.error("unsupported pseudo: " + e3);
      return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? F2(function(e4, t4) {
        var n3, r3 = a3(e4, o3), i3 = r3.length;
        while (i3--) e4[n3 = se.call(e4, r3[i3])] = !(t4[n3] = r3[i3]);
      }) : function(e4) {
        return a3(e4, 0, t3);
      }) : a3;
    } }, pseudos: { not: F2(function(e3) {
      var r3 = [], i3 = [], s3 = ne2(e3.replace(ve, "$1"));
      return s3[S2] ? F2(function(e4, t3, n3, r4) {
        var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
        while (a3--) (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
      }) : function(e4, t3, n3) {
        return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
      };
    }), has: F2(function(t3) {
      return function(e3) {
        return 0 < I2(t3, e3).length;
      };
    }), contains: F2(function(t3) {
      return t3 = t3.replace(O2, P2), function(e3) {
        return -1 < (e3.textContent || ce.text(e3)).indexOf(t3);
      };
    }), lang: F2(function(n3) {
      return A2.test(n3 || "") || I2.error("unsupported lang: " + n3), n3 = n3.replace(O2, P2).toLowerCase(), function(e3) {
        var t3;
        do {
          if (t3 = C2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang")) return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
        } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
        return false;
      };
    }), target: function(e3) {
      var t3 = ie.location && ie.location.hash;
      return t3 && t3.slice(1) === e3.id;
    }, root: function(e3) {
      return e3 === r2;
    }, focus: function(e3) {
      return e3 === (function() {
        try {
          return T2.activeElement;
        } catch (e4) {
        }
      })() && T2.hasFocus() && !!(e3.type || e3.href || ~e3.tabIndex);
    }, enabled: z2(false), disabled: z2(true), checked: function(e3) {
      return fe(e3, "input") && !!e3.checked || fe(e3, "option") && !!e3.selected;
    }, selected: function(e3) {
      return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
    }, empty: function(e3) {
      for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) if (e3.nodeType < 6) return false;
      return true;
    }, parent: function(e3) {
      return !b2.pseudos.empty(e3);
    }, header: function(e3) {
      return q2.test(e3.nodeName);
    }, input: function(e3) {
      return N2.test(e3.nodeName);
    }, button: function(e3) {
      return fe(e3, "input") && "button" === e3.type || fe(e3, "button");
    }, text: function(e3) {
      var t3;
      return fe(e3, "input") && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
    }, first: X2(function() {
      return [0];
    }), last: X2(function(e3, t3) {
      return [t3 - 1];
    }), eq: X2(function(e3, t3, n3) {
      return [n3 < 0 ? n3 + t3 : n3];
    }), even: X2(function(e3, t3) {
      for (var n3 = 0; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), odd: X2(function(e3, t3) {
      for (var n3 = 1; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), lt: X2(function(e3, t3, n3) {
      var r3;
      for (r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; ) e3.push(r3);
      return e3;
    }), gt: X2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; ) e3.push(r3);
      return e3;
    }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true }) b2.pseudos[e2] = B2(e2);
    for (e2 in { submit: true, reset: true }) b2.pseudos[e2] = _2(e2);
    function G2() {
    }
    function Y2(e3, t3) {
      var n3, r3, i3, o3, a3, s3, u3, l3 = c2[e3 + " "];
      if (l3) return t3 ? 0 : l3.slice(0);
      a3 = e3, s3 = [], u3 = b2.preFilter;
      while (a3) {
        for (o3 in n3 && !(r3 = y2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = m2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace(ve, " ") }), a3 = a3.slice(n3.length)), b2.filter) !(r3 = D2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
        if (!n3) break;
      }
      return t3 ? a3.length : a3 ? I2.error(e3) : c2(e3, s3).slice(0);
    }
    function Q2(e3) {
      for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++) r3 += e3[t3].value;
      return r3;
    }
    function J2(a3, e3, t3) {
      var s3 = e3.dir, u3 = e3.next, l3 = u3 || s3, c3 = t3 && "parentNode" === l3, f3 = n2++;
      return e3.first ? function(e4, t4, n3) {
        while (e4 = e4[s3]) if (1 === e4.nodeType || c3) return a3(e4, t4, n3);
        return false;
      } : function(e4, t4, n3) {
        var r3, i3, o3 = [E2, f3];
        if (n3) {
          while (e4 = e4[s3]) if ((1 === e4.nodeType || c3) && a3(e4, t4, n3)) return true;
        } else while (e4 = e4[s3]) if (1 === e4.nodeType || c3) if (i3 = e4[S2] || (e4[S2] = {}), u3 && fe(e4, u3)) e4 = e4[s3] || e4;
        else {
          if ((r3 = i3[l3]) && r3[0] === E2 && r3[1] === f3) return o3[2] = r3[2];
          if ((i3[l3] = o3)[2] = a3(e4, t4, n3)) return true;
        }
        return false;
      };
    }
    function K2(i3) {
      return 1 < i3.length ? function(e3, t3, n3) {
        var r3 = i3.length;
        while (r3--) if (!i3[r3](e3, t3, n3)) return false;
        return true;
      } : i3[0];
    }
    function Z2(e3, t3, n3, r3, i3) {
      for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++) (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
      return a3;
    }
    function ee2(d3, h3, g3, v3, y3, e3) {
      return v3 && !v3[S2] && (v3 = ee2(v3)), y3 && !y3[S2] && (y3 = ee2(y3, e3)), F2(function(e4, t3, n3, r3) {
        var i3, o3, a3, s3, u3 = [], l3 = [], c3 = t3.length, f3 = e4 || (function(e5, t4, n4) {
          for (var r4 = 0, i4 = t4.length; r4 < i4; r4++) I2(e5, t4[r4], n4);
          return n4;
        })(h3 || "*", n3.nodeType ? [n3] : n3, []), p3 = !d3 || !e4 && h3 ? f3 : Z2(f3, u3, d3, n3, r3);
        if (g3 ? g3(p3, s3 = y3 || (e4 ? d3 : c3 || v3) ? [] : t3, n3, r3) : s3 = p3, v3) {
          i3 = Z2(s3, l3), v3(i3, [], n3, r3), o3 = i3.length;
          while (o3--) (a3 = i3[o3]) && (s3[l3[o3]] = !(p3[l3[o3]] = a3));
        }
        if (e4) {
          if (y3 || d3) {
            if (y3) {
              i3 = [], o3 = s3.length;
              while (o3--) (a3 = s3[o3]) && i3.push(p3[o3] = a3);
              y3(null, s3 = [], i3, r3);
            }
            o3 = s3.length;
            while (o3--) (a3 = s3[o3]) && -1 < (i3 = y3 ? se.call(e4, a3) : u3[o3]) && (e4[i3] = !(t3[i3] = a3));
          }
        } else s3 = Z2(s3 === t3 ? s3.splice(c3, s3.length) : s3), y3 ? y3(null, t3, s3, r3) : k2.apply(t3, s3);
      });
    }
    function te2(e3) {
      for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = J2(function(e4) {
        return e4 === i3;
      }, a3, true), l3 = J2(function(e4) {
        return -1 < se.call(i3, e4);
      }, a3, true), c3 = [function(e4, t4, n4) {
        var r4 = !o3 && (n4 || t4 != w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
        return i3 = null, r4;
      }]; s3 < r3; s3++) if (t3 = b2.relative[e3[s3].type]) c3 = [J2(K2(c3), t3)];
      else {
        if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
          for (n3 = ++s3; n3 < r3; n3++) if (b2.relative[e3[n3].type]) break;
          return ee2(1 < s3 && K2(c3), 1 < s3 && Q2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace(ve, "$1"), t3, s3 < n3 && te2(e3.slice(s3, n3)), n3 < r3 && te2(e3 = e3.slice(n3)), n3 < r3 && Q2(e3));
        }
        c3.push(t3);
      }
      return K2(c3);
    }
    function ne2(e3, t3) {
      var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = u2[e3 + " "];
      if (!a3) {
        t3 || (t3 = Y2(e3)), n3 = t3.length;
        while (n3--) (a3 = te2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
        (a3 = u2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
          var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = E2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
          for (i4 && (w2 = t4 == T2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
            if (x3 && o4) {
              a4 = 0, t4 || o4.ownerDocument == T2 || (V2(o4), n4 = !C2);
              while (s3 = v3[a4++]) if (s3(o4, t4 || T2, n4)) {
                k2.call(r4, o4);
                break;
              }
              i4 && (E2 = h3);
            }
            m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
          }
          if (u3 += l3, m3 && l3 !== u3) {
            a4 = 0;
            while (s3 = y3[a4++]) s3(c3, f3, t4, n4);
            if (e4) {
              if (0 < u3) while (l3--) c3[l3] || f3[l3] || (f3[l3] = pe.call(r4));
              f3 = Z2(f3);
            }
            k2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && ce.uniqueSort(r4);
          }
          return i4 && (E2 = h3, w2 = p3), c3;
        }, m3 ? F2(r3) : r3))).selector = e3;
      }
      return a3;
    }
    function re2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && Y2(e3 = l3.selector || e3);
      if (n3 = n3 || [], 1 === c3.length) {
        if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && C2 && b2.relative[o3[1].type]) {
          if (!(t3 = (b2.find.ID(a3.matches[0].replace(O2, P2), t3) || [])[0])) return n3;
          l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
        }
        i3 = D2.needsContext.test(e3) ? 0 : o3.length;
        while (i3--) {
          if (a3 = o3[i3], b2.relative[s3 = a3.type]) break;
          if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(O2, P2), H2.test(o3[0].type) && U2(t3.parentNode) || t3))) {
            if (o3.splice(i3, 1), !(e3 = r3.length && Q2(o3))) return k2.apply(n3, r3), n3;
            break;
          }
        }
      }
      return (l3 || ne2(e3, c3))(r3, t3, !C2, n3, !t3 || H2.test(e3) && U2(t3.parentNode) || t3), n3;
    }
    G2.prototype = b2.filters = b2.pseudos, b2.setFilters = new G2(), le.sortStable = S2.split("").sort(l2).join("") === S2, V2(), le.sortDetached = $2(function(e3) {
      return 1 & e3.compareDocumentPosition(T2.createElement("fieldset"));
    }), ce.find = I2, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I2.compile = ne2, I2.select = re2, I2.setDocument = V2, I2.tokenize = Y2, I2.escape = ce.escapeSelector, I2.getText = ce.text, I2.isXML = ce.isXMLDoc, I2.selectors = ce.expr, I2.support = ce.support, I2.uniqueSort = ce.uniqueSort;
  })();
  var d = function(e2, t2, n2) {
    var r2 = [], i2 = void 0 !== n2;
    while ((e2 = e2[t2]) && 9 !== e2.nodeType) if (1 === e2.nodeType) {
      if (i2 && ce(e2).is(n2)) break;
      r2.push(e2);
    }
    return r2;
  }, h = function(e2, t2) {
    for (var n2 = []; e2; e2 = e2.nextSibling) 1 === e2.nodeType && e2 !== t2 && n2.push(e2);
    return n2;
  }, b = ce.expr.match.needsContext, w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e2, n2, r2) {
    return v(n2) ? ce.grep(e2, function(e3, t2) {
      return !!n2.call(e3, t2, e3) !== r2;
    }) : n2.nodeType ? ce.grep(e2, function(e3) {
      return e3 === n2 !== r2;
    }) : "string" != typeof n2 ? ce.grep(e2, function(e3) {
      return -1 < se.call(n2, e3) !== r2;
    }) : ce.filter(n2, e2, r2);
  }
  ce.filter = function(e2, t2, n2) {
    var r2 = t2[0];
    return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? ce.find.matchesSelector(r2, e2) ? [r2] : [] : ce.find.matches(e2, ce.grep(t2, function(e3) {
      return 1 === e3.nodeType;
    }));
  }, ce.fn.extend({ find: function(e2) {
    var t2, n2, r2 = this.length, i2 = this;
    if ("string" != typeof e2) return this.pushStack(ce(e2).filter(function() {
      for (t2 = 0; t2 < r2; t2++) if (ce.contains(i2[t2], this)) return true;
    }));
    for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++) ce.find(e2, i2[t2], n2);
    return 1 < r2 ? ce.uniqueSort(n2) : n2;
  }, filter: function(e2) {
    return this.pushStack(T(this, e2 || [], false));
  }, not: function(e2) {
    return this.pushStack(T(this, e2 || [], true));
  }, is: function(e2) {
    return !!T(this, "string" == typeof e2 && b.test(e2) ? ce(e2) : e2 || [], false).length;
  } });
  var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function(e2, t2, n2) {
    var r2, i2;
    if (!e2) return this;
    if (n2 = n2 || k, "string" == typeof e2) {
      if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : S.exec(e2)) || !r2[1] && t2) return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
      if (r2[1]) {
        if (t2 = t2 instanceof ce ? t2[0] : t2, ce.merge(this, ce.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : C, true)), w.test(r2[1]) && ce.isPlainObject(t2)) for (r2 in t2) v(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
        return this;
      }
      return (i2 = C.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
    }
    return e2.nodeType ? (this[0] = e2, this.length = 1, this) : v(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(ce) : ce.makeArray(e2, this);
  }).prototype = ce.fn, k = ce(C);
  var E = /^(?:parents|prev(?:Until|All))/, j = { children: true, contents: true, next: true, prev: true };
  function A(e2, t2) {
    while ((e2 = e2[t2]) && 1 !== e2.nodeType) ;
    return e2;
  }
  ce.fn.extend({ has: function(e2) {
    var t2 = ce(e2, this), n2 = t2.length;
    return this.filter(function() {
      for (var e3 = 0; e3 < n2; e3++) if (ce.contains(this, t2[e3])) return true;
    });
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && ce(e2);
    if (!b.test(e2)) {
      for (; r2 < i2; r2++) for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode) if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && ce.find.matchesSelector(n2, e2))) {
        o2.push(n2);
        break;
      }
    }
    return this.pushStack(1 < o2.length ? ce.uniqueSort(o2) : o2);
  }, index: function(e2) {
    return e2 ? "string" == typeof e2 ? se.call(ce(e2), this[0]) : se.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e2, t2))));
  }, addBack: function(e2) {
    return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
  } }), ce.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && 11 !== t2.nodeType ? t2 : null;
  }, parents: function(e2) {
    return d(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return d(e2, "parentNode", n2);
  }, next: function(e2) {
    return A(e2, "nextSibling");
  }, prev: function(e2) {
    return A(e2, "previousSibling");
  }, nextAll: function(e2) {
    return d(e2, "nextSibling");
  }, prevAll: function(e2) {
    return d(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return d(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return d(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return h((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return h(e2.firstChild);
  }, contents: function(e2) {
    return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (fe(e2, "template") && (e2 = e2.content || e2), ce.merge([], e2.childNodes));
  } }, function(r2, i2) {
    ce.fn[r2] = function(e2, t2) {
      var n2 = ce.map(this, i2, e2);
      return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = ce.filter(t2, n2)), 1 < this.length && (j[r2] || ce.uniqueSort(n2), E.test(r2) && n2.reverse()), this.pushStack(n2);
    };
  });
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e2) {
    return e2;
  }
  function q(e2) {
    throw e2;
  }
  function L(e2, t2, n2, r2) {
    var i2;
    try {
      e2 && v(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && v(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
    } catch (e3) {
      n2.apply(void 0, [e3]);
    }
  }
  ce.Callbacks = function(r2) {
    var e2, n2;
    r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, ce.each(e2.match(D) || [], function(e3, t3) {
      n2[t3] = true;
    }), n2) : ce.extend({}, r2);
    var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
      for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
        t2 = u2.shift();
        while (++l2 < s2.length) false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
      }
      r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
    }, f2 = { add: function() {
      return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), (function n3(e3) {
        ce.each(e3, function(e4, t3) {
          v(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== x(t3) && n3(t3);
        });
      })(arguments), t2 && !i2 && c2()), this;
    }, remove: function() {
      return ce.each(arguments, function(e3, t3) {
        var n3;
        while (-1 < (n3 = ce.inArray(t3, s2, n3))) s2.splice(n3, 1), n3 <= l2 && l2--;
      }), this;
    }, has: function(e3) {
      return e3 ? -1 < ce.inArray(e3, s2) : 0 < s2.length;
    }, empty: function() {
      return s2 && (s2 = []), this;
    }, disable: function() {
      return a2 = u2 = [], s2 = t2 = "", this;
    }, disabled: function() {
      return !s2;
    }, lock: function() {
      return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
    }, locked: function() {
      return !!a2;
    }, fireWith: function(e3, t3) {
      return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
    }, fire: function() {
      return f2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!o2;
    } };
    return f2;
  }, ce.extend({ Deferred: function(e2) {
    var o2 = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
      return i2;
    }, always: function() {
      return s2.done(arguments).fail(arguments), this;
    }, "catch": function(e3) {
      return a2.then(null, e3);
    }, pipe: function() {
      var i3 = arguments;
      return ce.Deferred(function(r2) {
        ce.each(o2, function(e3, t2) {
          var n2 = v(i3[t2[4]]) && i3[t2[4]];
          s2[t2[1]](function() {
            var e4 = n2 && n2.apply(this, arguments);
            e4 && v(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
          });
        }), i3 = null;
      }).promise();
    }, then: function(t2, n2, r2) {
      var u2 = 0;
      function l2(i3, o3, a3, s3) {
        return function() {
          var n3 = this, r3 = arguments, e3 = function() {
            var e4, t4;
            if (!(i3 < u2)) {
              if ((e4 = a3.apply(n3, r3)) === o3.promise()) throw new TypeError("Thenable self-resolution");
              t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, v(t4) ? s3 ? t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3)) : (u2++, t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3), l2(u2, o3, N, o3.notifyWith))) : (a3 !== N && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
            }
          }, t3 = s3 ? e3 : function() {
            try {
              e3();
            } catch (e4) {
              ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e4, t3.error), u2 <= i3 + 1 && (a3 !== q && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
            }
          };
          i3 ? t3() : (ce.Deferred.getErrorHook ? t3.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t3.error = ce.Deferred.getStackHook()), ie.setTimeout(t3));
        };
      }
      return ce.Deferred(function(e3) {
        o2[0][3].add(l2(0, e3, v(r2) ? r2 : N, e3.notifyWith)), o2[1][3].add(l2(0, e3, v(t2) ? t2 : N)), o2[2][3].add(l2(0, e3, v(n2) ? n2 : q));
      }).promise();
    }, promise: function(e3) {
      return null != e3 ? ce.extend(e3, a2) : a2;
    } }, s2 = {};
    return ce.each(o2, function(e3, t2) {
      var n2 = t2[2], r2 = t2[5];
      a2[t2[1]] = n2.add, r2 && n2.add(function() {
        i2 = r2;
      }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
        return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
      }, s2[t2[0] + "With"] = n2.fireWith;
    }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
  }, when: function(e2) {
    var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = ae.call(arguments), o2 = ce.Deferred(), a2 = function(t3) {
      return function(e3) {
        r2[t3] = this, i2[t3] = 1 < arguments.length ? ae.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
      };
    };
    if (n2 <= 1 && (L(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || v(i2[t2] && i2[t2].then))) return o2.then();
    while (t2--) L(i2[t2], a2(t2), o2.reject);
    return o2.promise();
  } });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function(e2, t2) {
    ie.console && ie.console.warn && e2 && H.test(e2.name) && ie.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
  }, ce.readyException = function(e2) {
    ie.setTimeout(function() {
      throw e2;
    });
  };
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
  }
  ce.fn.ready = function(e2) {
    return O.then(e2)["catch"](function(e3) {
      ce.readyException(e3);
    }), this;
  }, ce.extend({ isReady: false, readyWait: 1, ready: function(e2) {
    (true === e2 ? --ce.readyWait : ce.isReady) || (ce.isReady = true) !== e2 && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
  } }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var M = function(e2, t2, n2, r2, i2, o2, a2) {
    var s2 = 0, u2 = e2.length, l2 = null == n2;
    if ("object" === x(n2)) for (s2 in i2 = true, n2) M(e2, t2, s2, n2[s2], true, o2, a2);
    else if (void 0 !== r2 && (i2 = true, v(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
      return l2.call(ce(e3), n3);
    })), t2)) for (; s2 < u2; s2++) t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
    return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
  }, R = /^-ms-/, I = /-([a-z])/g;
  function W(e2, t2) {
    return t2.toUpperCase();
  }
  function F(e2) {
    return e2.replace(R, "ms-").replace(I, W);
  }
  var $ = function(e2) {
    return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  B.uid = 1, B.prototype = { cache: function(e2) {
    var t2 = e2[this.expando];
    return t2 || (t2 = {}, $(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
  }, set: function(e2, t2, n2) {
    var r2, i2 = this.cache(e2);
    if ("string" == typeof t2) i2[F(t2)] = n2;
    else for (r2 in t2) i2[F(r2)] = t2[r2];
    return i2;
  }, get: function(e2, t2) {
    return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][F(t2)];
  }, access: function(e2, t2, n2) {
    return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
  }, remove: function(e2, t2) {
    var n2, r2 = e2[this.expando];
    if (void 0 !== r2) {
      if (void 0 !== t2) {
        n2 = (t2 = Array.isArray(t2) ? t2.map(F) : (t2 = F(t2)) in r2 ? [t2] : t2.match(D) || []).length;
        while (n2--) delete r2[t2[n2]];
      }
      (void 0 === t2 || ce.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
    }
  }, hasData: function(e2) {
    var t2 = e2[this.expando];
    return void 0 !== t2 && !ce.isEmptyObject(t2);
  } };
  var _ = new B(), z = new B(), X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g;
  function V(e2, t2, n2) {
    var r2, i2;
    if (void 0 === n2 && 1 === e2.nodeType) if (r2 = "data-" + t2.replace(U, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
      try {
        n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : X.test(i2) ? JSON.parse(i2) : i2);
      } catch (e3) {
      }
      z.set(e2, t2, n2);
    } else n2 = void 0;
    return n2;
  }
  ce.extend({ hasData: function(e2) {
    return z.hasData(e2) || _.hasData(e2);
  }, data: function(e2, t2, n2) {
    return z.access(e2, t2, n2);
  }, removeData: function(e2, t2) {
    z.remove(e2, t2);
  }, _data: function(e2, t2, n2) {
    return _.access(e2, t2, n2);
  }, _removeData: function(e2, t2) {
    _.remove(e2, t2);
  } }), ce.fn.extend({ data: function(n2, e2) {
    var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
    if (void 0 === n2) {
      if (this.length && (i2 = z.get(o2), 1 === o2.nodeType && !_.get(o2, "hasDataAttrs"))) {
        t2 = a2.length;
        while (t2--) a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = F(r2.slice(5)), V(o2, r2, i2[r2]));
        _.set(o2, "hasDataAttrs", true);
      }
      return i2;
    }
    return "object" == typeof n2 ? this.each(function() {
      z.set(this, n2);
    }) : M(this, function(e3) {
      var t3;
      if (o2 && void 0 === e3) return void 0 !== (t3 = z.get(o2, n2)) ? t3 : void 0 !== (t3 = V(o2, n2)) ? t3 : void 0;
      this.each(function() {
        z.set(this, n2, e3);
      });
    }, null, e2, 1 < arguments.length, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      z.remove(this, e2);
    });
  } }), ce.extend({ queue: function(e2, t2, n2) {
    var r2;
    if (e2) return t2 = (t2 || "fx") + "queue", r2 = _.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = _.access(e2, t2, ce.makeArray(n2)) : r2.push(n2)), r2 || [];
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = ce.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = ce._queueHooks(e2, t2);
    "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
      ce.dequeue(e2, t2);
    }, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return _.get(e2, n2) || _.access(e2, n2, { empty: ce.Callbacks("once memory").add(function() {
      _.remove(e2, [t2 + "queue", n2]);
    }) });
  } }), ce.fn.extend({ queue: function(t2, n2) {
    var e2 = 2;
    return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? ce.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
      var e3 = ce.queue(this, t2, n2);
      ce._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && ce.dequeue(this, t2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      ce.dequeue(this, e2);
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, t2) {
    var n2, r2 = 1, i2 = ce.Deferred(), o2 = this, a2 = this.length, s2 = function() {
      --r2 || i2.resolveWith(o2, [o2]);
    };
    "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
    while (a2--) (n2 = _.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
    return s2(), i2.promise(t2);
  } });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"), Q = ["Top", "Right", "Bottom", "Left"], J = C.documentElement, K = function(e2) {
    return ce.contains(e2.ownerDocument, e2);
  }, Z = { composed: true };
  J.getRootNode && (K = function(e2) {
    return ce.contains(e2.ownerDocument, e2) || e2.getRootNode(Z) === e2.ownerDocument;
  });
  var ee = function(e2, t2) {
    return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && K(e2) && "none" === ce.css(e2, "display");
  };
  function te(e2, t2, n2, r2) {
    var i2, o2, a2 = 20, s2 = r2 ? function() {
      return r2.cur();
    } : function() {
      return ce.css(e2, t2, "");
    }, u2 = s2(), l2 = n2 && n2[3] || (ce.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (ce.cssNumber[t2] || "px" !== l2 && +u2) && Y.exec(ce.css(e2, t2));
    if (c2 && c2[3] !== l2) {
      u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
      while (a2--) ce.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
      c2 *= 2, ce.style(e2, t2, c2 + l2), n2 = n2 || [];
    }
    return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
  }
  var ne = {};
  function re(e2, t2) {
    for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++) (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = _.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ee(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ne[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = ce.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ne[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", _.set(r2, "display", n2)));
    for (c2 = 0; c2 < f2; c2++) null != l2[c2] && (e2[c2].style.display = l2[c2]);
    return e2;
  }
  ce.fn.extend({ show: function() {
    return re(this, true);
  }, hide: function() {
    return re(this);
  }, toggle: function(e2) {
    return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
      ee(this) ? ce(this).show() : ce(this).hide();
    });
  } });
  var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
  xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(true).cloneNode(true).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(true).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
  var ke = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  function Se(e2, t2) {
    var n2;
    return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && fe(e2, t2) ? ce.merge([e2], n2) : n2;
  }
  function Ee(e2, t2) {
    for (var n2 = 0, r2 = e2.length; n2 < r2; n2++) _.set(e2[n2], "globalEval", !t2 || _.get(t2[n2], "globalEval"));
  }
  ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e2, t2, n2, r2, i2) {
    for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++) if ((o2 = e2[d2]) || 0 === o2) if ("object" === x(o2)) ce.merge(p2, o2.nodeType ? [o2] : o2);
    else if (je.test(o2)) {
      a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (Te.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ke[s2] || ke._default, a2.innerHTML = u2[1] + ce.htmlPrefilter(o2) + u2[2], c2 = u2[0];
      while (c2--) a2 = a2.lastChild;
      ce.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
    } else p2.push(t2.createTextNode(o2));
    f2.textContent = "", d2 = 0;
    while (o2 = p2[d2++]) if (r2 && -1 < ce.inArray(o2, r2)) i2 && i2.push(o2);
    else if (l2 = K(o2), a2 = Se(f2.appendChild(o2), "script"), l2 && Ee(a2), n2) {
      c2 = 0;
      while (o2 = a2[c2++]) Ce.test(o2.type || "") && n2.push(o2);
    }
    return f2;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return true;
  }
  function qe() {
    return false;
  }
  function Le(e2, t2, n2, r2, i2, o2) {
    var a2, s2;
    if ("object" == typeof t2) {
      for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2) Le(e2, s2, n2, r2, t2[s2], o2);
      return e2;
    }
    if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2) i2 = qe;
    else if (!i2) return e2;
    return 1 === o2 && (a2 = i2, (i2 = function(e3) {
      return ce().off(e3), a2.apply(this, arguments);
    }).guid = a2.guid || (a2.guid = ce.guid++)), e2.each(function() {
      ce.event.add(this, t2, i2, r2, n2);
    });
  }
  function He(e2, r2, t2) {
    t2 ? (_.set(e2, r2, false), ce.event.add(e2, r2, { namespace: false, handler: function(e3) {
      var t3, n2 = _.get(this, r2);
      if (1 & e3.isTrigger && this[r2]) {
        if (n2) (ce.event.special[r2] || {}).delegateType && e3.stopPropagation();
        else if (n2 = ae.call(arguments), _.set(this, r2, n2), this[r2](), t3 = _.get(this, r2), _.set(this, r2, false), n2 !== t3) return e3.stopImmediatePropagation(), e3.preventDefault(), t3;
      } else n2 && (_.set(this, r2, ce.event.trigger(n2[0], n2.slice(1), this)), e3.stopPropagation(), e3.isImmediatePropagationStopped = Ne);
    } })) : void 0 === _.get(e2, r2) && ce.event.add(e2, r2, Ne);
  }
  ce.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.get(t2);
    if ($(t2)) {
      n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && ce.find.matchesSelector(J, i2), n2.guid || (n2.guid = ce.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
        return "undefined" != typeof ce && ce.event.triggered !== e3.type ? ce.event.dispatch.apply(t2, arguments) : void 0;
      }), l2 = (e2 = (e2 || "").match(D) || [""]).length;
      while (l2--) d2 = g2 = (s2 = De.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = ce.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = ce.event.special[d2] || {}, c2 = ce.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && ce.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), ce.event.global[d2] = true);
    }
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.hasData(e2) && _.get(e2);
    if (v2 && (u2 = v2.events)) {
      l2 = (t2 = (t2 || "").match(D) || [""]).length;
      while (l2--) if (d2 = g2 = (s2 = De.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
        f2 = ce.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
        while (o2--) c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
        a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || ce.removeEvent(e2, d2, v2.handle), delete u2[d2]);
      } else for (d2 in u2) ce.event.remove(e2, d2 + t2[l2], n2, r2, true);
      ce.isEmptyObject(u2) && _.remove(e2, "handle events");
    }
  }, dispatch: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = ce.event.fix(e2), l2 = (_.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = ce.event.special[u2.type] || {};
    for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++) s2[t2] = arguments[t2];
    if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
      a2 = ce.event.handlers.call(this, u2, l2), t2 = 0;
      while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
        u2.currentTarget = i2.elem, n2 = 0;
        while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped()) u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((ce.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
      }
      return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
    }
  }, handlers: function(e2, t2) {
    var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
    if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
      for (; l2 !== this; l2 = l2.parentNode || this) if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
        for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++) void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < ce(i2, this).index(l2) : ce.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
        o2.length && s2.push({ elem: l2, handlers: o2 });
      }
    }
    return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
  }, addProp: function(t2, e2) {
    Object.defineProperty(ce.Event.prototype, t2, { enumerable: true, configurable: true, get: v(e2) ? function() {
      if (this.originalEvent) return e2(this.originalEvent);
    } : function() {
      if (this.originalEvent) return this.originalEvent[t2];
    }, set: function(e3) {
      Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
    } });
  }, fix: function(e2) {
    return e2[ce.expando] ? e2 : new ce.Event(e2);
  }, special: { load: { noBubble: true }, click: { setup: function(e2) {
    var t2 = this || e2;
    return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click", true), false;
  }, trigger: function(e2) {
    var t2 = this || e2;
    return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click"), true;
  }, _default: function(e2) {
    var t2 = e2.target;
    return we.test(t2.type) && t2.click && fe(t2, "input") && _.get(t2, "click") || fe(t2, "a");
  } }, beforeunload: { postDispatch: function(e2) {
    void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
  } } } }, ce.removeEvent = function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2);
  }, ce.Event = function(e2, t2) {
    if (!(this instanceof ce.Event)) return new ce.Event(e2, t2);
    e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ne : qe, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && ce.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[ce.expando] = true;
  }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: qe, isPropagationStopped: qe, isImmediatePropagationStopped: qe, isSimulated: false, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = Ne, e2 && !this.isSimulated && e2.preventDefault();
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = Ne, e2 && !this.isSimulated && e2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e2 = this.originalEvent;
    this.isImmediatePropagationStopped = Ne, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
  } }, ce.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function(r2, i2) {
    function o2(e2) {
      if (C.documentMode) {
        var t2 = _.get(this, "handle"), n2 = ce.event.fix(e2);
        n2.type = "focusin" === e2.type ? "focus" : "blur", n2.isSimulated = true, t2(e2), n2.target === n2.currentTarget && t2(n2);
      } else ce.event.simulate(i2, e2.target, ce.event.fix(e2));
    }
    ce.event.special[r2] = { setup: function() {
      var e2;
      if (He(this, r2, true), !C.documentMode) return false;
      (e2 = _.get(this, i2)) || this.addEventListener(i2, o2), _.set(this, i2, (e2 || 0) + 1);
    }, trigger: function() {
      return He(this, r2), true;
    }, teardown: function() {
      var e2;
      if (!C.documentMode) return false;
      (e2 = _.get(this, i2) - 1) ? _.set(this, i2, e2) : (this.removeEventListener(i2, o2), _.remove(this, i2));
    }, _default: function(e2) {
      return _.get(e2.target, r2);
    }, delegateType: i2 }, ce.event.special[i2] = { setup: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2);
      n2 || (C.documentMode ? this.addEventListener(i2, o2) : e2.addEventListener(r2, o2, true)), _.set(t2, i2, (n2 || 0) + 1);
    }, teardown: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2) - 1;
      n2 ? _.set(t2, i2, n2) : (C.documentMode ? this.removeEventListener(i2, o2) : e2.removeEventListener(r2, o2, true), _.remove(t2, i2));
    } };
  }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
    ce.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
      var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
      return n2 && (n2 === this || ce.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
    } };
  }), ce.fn.extend({ on: function(e2, t2, n2, r2) {
    return Le(this, e2, t2, n2, r2);
  }, one: function(e2, t2, n2, r2) {
    return Le(this, e2, t2, n2, r2, 1);
  }, off: function(e2, t2, n2) {
    var r2, i2;
    if (e2 && e2.preventDefault && e2.handleObj) return r2 = e2.handleObj, ce(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
    if ("object" == typeof e2) {
      for (i2 in e2) this.off(i2, t2, e2[i2]);
      return this;
    }
    return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = qe), this.each(function() {
      ce.event.remove(this, e2, n2, t2);
    });
  } });
  var Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e2, t2) {
    return fe(e2, "table") && fe(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && ce(e2).children("tbody")[0] || e2;
  }
  function Ie(e2) {
    return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
  }
  function We(e2) {
    return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
  }
  function Fe(e2, t2) {
    var n2, r2, i2, o2, a2, s2;
    if (1 === t2.nodeType) {
      if (_.hasData(e2) && (s2 = _.get(e2).events)) for (i2 in _.remove(t2, "handle events"), s2) for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++) ce.event.add(t2, i2, s2[i2][n2]);
      z.hasData(e2) && (o2 = z.access(e2), a2 = ce.extend({}, o2), z.set(t2, a2));
    }
  }
  function $e(n2, r2, i2, o2) {
    r2 = g(r2);
    var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = v(d2);
    if (h2 || 1 < f2 && "string" == typeof d2 && !le.checkClone && Pe.test(d2)) return n2.each(function(e3) {
      var t3 = n2.eq(e3);
      h2 && (r2[0] = d2.call(this, e3, t3.html())), $e(t3, r2, i2, o2);
    });
    if (f2 && (t2 = (e2 = Ae(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
      for (s2 = (a2 = ce.map(Se(e2, "script"), Ie)).length; c2 < f2; c2++) u2 = e2, c2 !== p2 && (u2 = ce.clone(u2, true, true), s2 && ce.merge(a2, Se(u2, "script"))), i2.call(n2[c2], u2, c2);
      if (s2) for (l2 = a2[a2.length - 1].ownerDocument, ce.map(a2, We), c2 = 0; c2 < s2; c2++) u2 = a2[c2], Ce.test(u2.type || "") && !_.access(u2, "globalEval") && ce.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? ce._evalUrl && !u2.noModule && ce._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : m(u2.textContent.replace(Me, ""), u2, l2));
    }
    return n2;
  }
  function Be(e2, t2, n2) {
    for (var r2, i2 = t2 ? ce.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++) n2 || 1 !== r2.nodeType || ce.cleanData(Se(r2)), r2.parentNode && (n2 && K(r2) && Ee(Se(r2, "script")), r2.parentNode.removeChild(r2));
    return e2;
  }
  ce.extend({ htmlPrefilter: function(e2) {
    return e2;
  }, clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = K(e2);
    if (!(le.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || ce.isXMLDoc(e2))) for (a2 = Se(c2), r2 = 0, i2 = (o2 = Se(e2)).length; r2 < i2; r2++) s2 = o2[r2], u2 = a2[r2], void 0, "input" === (l2 = u2.nodeName.toLowerCase()) && we.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
    if (t2) if (n2) for (o2 = o2 || Se(e2), a2 = a2 || Se(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++) Fe(o2[r2], a2[r2]);
    else Fe(e2, c2);
    return 0 < (a2 = Se(c2, "script")).length && Ee(a2, !f2 && Se(e2, "script")), c2;
  }, cleanData: function(e2) {
    for (var t2, n2, r2, i2 = ce.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++) if ($(n2)) {
      if (t2 = n2[_.expando]) {
        if (t2.events) for (r2 in t2.events) i2[r2] ? ce.event.remove(n2, r2) : ce.removeEvent(n2, r2, t2.handle);
        n2[_.expando] = void 0;
      }
      n2[z.expando] && (n2[z.expando] = void 0);
    }
  } }), ce.fn.extend({ detach: function(e2) {
    return Be(this, e2, true);
  }, remove: function(e2) {
    return Be(this, e2);
  }, text: function(e2) {
    return M(this, function(e3) {
      return void 0 === e3 ? ce.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
      });
    }, null, e2, arguments.length);
  }, append: function() {
    return $e(this, arguments, function(e2) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e2).appendChild(e2);
    });
  }, prepend: function() {
    return $e(this, arguments, function(e2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t2 = Re(this, e2);
        t2.insertBefore(e2, t2.firstChild);
      }
    });
  }, before: function() {
    return $e(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return $e(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, empty: function() {
    for (var e2, t2 = 0; null != (e2 = this[t2]); t2++) 1 === e2.nodeType && (ce.cleanData(Se(e2, false)), e2.textContent = "");
    return this;
  }, clone: function(e2, t2) {
    return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
      return ce.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return M(this, function(e3) {
      var t2 = this[0] || {}, n2 = 0, r2 = this.length;
      if (void 0 === e3 && 1 === t2.nodeType) return t2.innerHTML;
      if ("string" == typeof e3 && !Oe.test(e3) && !ke[(Te.exec(e3) || ["", ""])[1].toLowerCase()]) {
        e3 = ce.htmlPrefilter(e3);
        try {
          for (; n2 < r2; n2++) 1 === (t2 = this[n2] || {}).nodeType && (ce.cleanData(Se(t2, false)), t2.innerHTML = e3);
          t2 = 0;
        } catch (e4) {
        }
      }
      t2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function() {
    var n2 = [];
    return $e(this, arguments, function(e2) {
      var t2 = this.parentNode;
      ce.inArray(this, n2) < 0 && (ce.cleanData(Se(this)), t2 && t2.replaceChild(e2, this));
    }, n2);
  } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
    ce.fn[e2] = function(e3) {
      for (var t2, n2 = [], r2 = ce(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++) t2 = o2 === i2 ? this : this.clone(true), ce(r2[o2])[a2](t2), s.apply(n2, t2.get());
      return this.pushStack(n2);
    };
  });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Xe = function(e2) {
    var t2 = e2.ownerDocument.defaultView;
    return t2 && t2.opener || (t2 = ie), t2.getComputedStyle(e2);
  }, Ue = function(e2, t2, n2) {
    var r2, i2, o2 = {};
    for (i2 in t2) o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
    for (i2 in r2 = n2.call(e2), t2) e2.style[i2] = o2[i2];
    return r2;
  }, Ve = new RegExp(Q.join("|"), "i");
  function Ge(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = ze.test(t2), u2 = e2.style;
    return (n2 = n2 || Xe(e2)) && (a2 = n2.getPropertyValue(t2) || n2[t2], s2 && a2 && (a2 = a2.replace(ve, "$1") || void 0), "" !== a2 || K(e2) || (a2 = ce.style(e2, t2)), !le.pixelBoxStyles() && _e.test(a2) && Ve.test(t2) && (r2 = u2.width, i2 = u2.minWidth, o2 = u2.maxWidth, u2.minWidth = u2.maxWidth = u2.width = a2, a2 = n2.width, u2.width = r2, u2.minWidth = i2, u2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
  }
  function Ye(e2, t2) {
    return { get: function() {
      if (!e2()) return (this.get = t2).apply(this, arguments);
      delete this.get;
    } };
  }
  !(function() {
    function e2() {
      if (l2) {
        u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u2).appendChild(l2);
        var e3 = ie.getComputedStyle(l2);
        n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), J.removeChild(u2), l2 = null;
      }
    }
    function t2(e3) {
      return Math.round(parseFloat(e3));
    }
    var n2, r2, i2, o2, a2, s2, u2 = C.createElement("div"), l2 = C.createElement("div");
    l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l2.style.backgroundClip, ce.extend(le, { boxSizingReliable: function() {
      return e2(), r2;
    }, pixelBoxStyles: function() {
      return e2(), o2;
    }, pixelPosition: function() {
      return e2(), n2;
    }, reliableMarginLeft: function() {
      return e2(), s2;
    }, scrollboxSize: function() {
      return e2(), i2;
    }, reliableTrDimensions: function() {
      var e3, t3, n3, r3;
      return null == a2 && (e3 = C.createElement("table"), t3 = C.createElement("tr"), n3 = C.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "box-sizing:content-box;border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", J.appendChild(e3).appendChild(t3).appendChild(n3), r3 = ie.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, J.removeChild(e3)), a2;
    } }));
  })();
  var Qe = ["Webkit", "Moz", "ms"], Je = C.createElement("div").style, Ke = {};
  function Ze(e2) {
    var t2 = ce.cssProps[e2] || Ke[e2];
    return t2 || (e2 in Je ? e2 : Ke[e2] = (function(e3) {
      var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Qe.length;
      while (n2--) if ((e3 = Qe[n2] + t3) in Je) return e3;
    })(e2) || e2);
  }
  var et = /^(none|table(?!-c[ea]).+)/, tt = { position: "absolute", visibility: "hidden", display: "block" }, nt = { letterSpacing: "0", fontWeight: "400" };
  function rt(e2, t2, n2) {
    var r2 = Y.exec(t2);
    return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
  }
  function it(e2, t2, n2, r2, i2, o2) {
    var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0, l2 = 0;
    if (n2 === (r2 ? "border" : "content")) return 0;
    for (; a2 < 4; a2 += 2) "margin" === n2 && (l2 += ce.css(e2, n2 + Q[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= ce.css(e2, "padding" + Q[a2], true, i2)), "margin" !== n2 && (u2 -= ce.css(e2, "border" + Q[a2] + "Width", true, i2))) : (u2 += ce.css(e2, "padding" + Q[a2], true, i2), "padding" !== n2 ? u2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2) : s2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2));
    return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2 + l2;
  }
  function ot(e2, t2, n2) {
    var r2 = Xe(e2), i2 = (!le.boxSizingReliable() || n2) && "border-box" === ce.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Ge(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
    if (_e.test(a2)) {
      if (!n2) return a2;
      a2 = "auto";
    }
    return (!le.boxSizingReliable() && i2 || !le.reliableTrDimensions() && fe(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === ce.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === ce.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + it(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
  }
  function at(e2, t2, n2, r2, i2) {
    return new at.prototype.init(e2, t2, n2, r2, i2);
  }
  ce.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = Ge(e2, "opacity");
      return "" === n2 ? "1" : n2;
    }
  } } }, cssNumber: { animationIterationCount: true, aspectRatio: true, borderImageSlice: true, columnCount: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, scale: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeMiterlimit: true, strokeOpacity: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
    if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
      var i2, o2, a2, s2 = F(t2), u2 = ze.test(t2), l2 = e2.style;
      if (u2 || (t2 = Ze(s2)), a2 = ce.cssHooks[t2] || ce.cssHooks[s2], void 0 === n2) return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
      "string" === (o2 = typeof n2) && (i2 = Y.exec(n2)) && i2[1] && (n2 = te(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (ce.cssNumber[s2] ? "" : "px")), le.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
    }
  }, css: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2 = F(t2);
    return ze.test(t2) || (t2 = Ze(s2)), (a2 = ce.cssHooks[t2] || ce.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Ge(e2, t2, r2)), "normal" === i2 && t2 in nt && (i2 = nt[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
  } }), ce.each(["height", "width"], function(e2, u2) {
    ce.cssHooks[u2] = { get: function(e3, t2, n2) {
      if (t2) return !et.test(ce.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? ot(e3, u2, n2) : Ue(e3, tt, function() {
        return ot(e3, u2, n2);
      });
    }, set: function(e3, t2, n2) {
      var r2, i2 = Xe(e3), o2 = !le.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === ce.css(e3, "boxSizing", false, i2), s2 = n2 ? it(e3, u2, n2, a2, i2) : 0;
      return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - it(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = Y.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = ce.css(e3, u2)), rt(0, t2, s2);
    } };
  }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e2, t2) {
    if (t2) return (parseFloat(Ge(e2, "marginLeft")) || e2.getBoundingClientRect().left - Ue(e2, { marginLeft: 0 }, function() {
      return e2.getBoundingClientRect().left;
    })) + "px";
  }), ce.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
    ce.cssHooks[i2 + o2] = { expand: function(e2) {
      for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++) n2[i2 + Q[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
      return n2;
    } }, "margin" !== i2 && (ce.cssHooks[i2 + o2].set = rt);
  }), ce.fn.extend({ css: function(e2, t2) {
    return M(this, function(e3, t3, n2) {
      var r2, i2, o2 = {}, a2 = 0;
      if (Array.isArray(t3)) {
        for (r2 = Xe(e3), i2 = t3.length; a2 < i2; a2++) o2[t3[a2]] = ce.css(e3, t3[a2], false, r2);
        return o2;
      }
      return void 0 !== n2 ? ce.style(e3, t3, n2) : ce.css(e3, t3);
    }, e2, t2, 1 < arguments.length);
  } }), ((ce.Tween = at).prototype = { constructor: at, init: function(e2, t2, n2, r2, i2, o2) {
    this.elem = e2, this.prop = n2, this.easing = i2 || ce.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (ce.cssNumber[n2] ? "" : "px");
  }, cur: function() {
    var e2 = at.propHooks[this.prop];
    return e2 && e2.get ? e2.get(this) : at.propHooks._default.get(this);
  }, run: function(e2) {
    var t2, n2 = at.propHooks[this.prop];
    return this.options.duration ? this.pos = t2 = ce.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : at.propHooks._default.set(this), this;
  } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function(e2) {
    var t2;
    return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = ce.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
  }, set: function(e2) {
    ce.fx.step[e2.prop] ? ce.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !ce.cssHooks[e2.prop] && null == e2.elem.style[Ze(e2.prop)] ? e2.elem[e2.prop] = e2.now : ce.style(e2.elem, e2.prop, e2.now + e2.unit);
  } } }).scrollTop = at.propHooks.scrollLeft = { set: function(e2) {
    e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
  } }, ce.easing = { linear: function(e2) {
    return e2;
  }, swing: function(e2) {
    return 0.5 - Math.cos(e2 * Math.PI) / 2;
  }, _default: "swing" }, ce.fx = at.prototype.init, ce.fx.step = {};
  var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
  function dt() {
    ut && (false === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
  }
  function ht() {
    return ie.setTimeout(function() {
      st = void 0;
    }), st = Date.now();
  }
  function gt(e2, t2) {
    var n2, r2 = 0, i2 = { height: e2 };
    for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2) i2["margin" + (n2 = Q[r2])] = i2["padding" + n2] = e2;
    return t2 && (i2.opacity = i2.width = e2), i2;
  }
  function vt(e2, t2, n2) {
    for (var r2, i2 = (yt.tweeners[t2] || []).concat(yt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++) if (r2 = i2[o2].call(n2, t2, e2)) return r2;
  }
  function yt(o2, e2, t2) {
    var n2, a2, r2 = 0, i2 = yt.prefilters.length, s2 = ce.Deferred().always(function() {
      delete u2.elem;
    }), u2 = function() {
      if (a2) return false;
      for (var e3 = st || ht(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++) l2.tweens[r3].run(n3);
      return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
    }, l2 = s2.promise({ elem: o2, props: ce.extend({}, e2), opts: ce.extend(true, { specialEasing: {}, easing: ce.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: st || ht(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
      var n3 = ce.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
      return l2.tweens.push(n3), n3;
    }, stop: function(e3) {
      var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
      if (a2) return this;
      for (a2 = true; t3 < n3; t3++) l2.tweens[t3].run(1);
      return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
    } }), c2 = l2.props;
    for (!(function(e3, t3) {
      var n3, r3, i3, o3, a3;
      for (n3 in e3) if (i3 = t3[r3 = F(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = ce.cssHooks[r3]) && "expand" in a3) for (n3 in o3 = a3.expand(o3), delete e3[r3], o3) n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
      else t3[r3] = i3;
    })(c2, l2.opts.specialEasing); r2 < i2; r2++) if (n2 = yt.prefilters[r2].call(l2, o2, c2, l2.opts)) return v(n2.stop) && (ce._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
    return ce.map(c2, vt, l2), v(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), ce.fx.timer(ce.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
  }
  ce.Animation = ce.extend(yt, { tweeners: { "*": [function(e2, t2) {
    var n2 = this.createTween(e2, t2);
    return te(n2.elem, e2, Y.exec(t2), n2), n2;
  }] }, tweener: function(e2, t2) {
    v(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(D);
    for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++) n2 = e2[r2], yt.tweeners[n2] = yt.tweeners[n2] || [], yt.tweeners[n2].unshift(t2);
  }, prefilters: [function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ee(e2), v2 = _.get(e2, "fxshow");
    for (r2 in n2.queue || (null == (a2 = ce._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
      a2.unqueued || s2();
    }), a2.unqueued++, p2.always(function() {
      p2.always(function() {
        a2.unqueued--, ce.queue(e2, "fx").length || a2.empty.fire();
      });
    })), t2) if (i2 = t2[r2], ft.test(i2)) {
      if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
        if ("show" !== i2 || !v2 || void 0 === v2[r2]) continue;
        g2 = true;
      }
      d2[r2] = v2 && v2[r2] || ce.style(e2, r2);
    }
    if ((u2 = !ce.isEmptyObject(t2)) || !ce.isEmptyObject(d2)) for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = _.get(e2, "display")), "none" === (c2 = ce.css(e2, "display")) && (l2 ? c2 = l2 : (re([e2], true), l2 = e2.style.display || l2, c2 = ce.css(e2, "display"), re([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === ce.css(e2, "float") && (u2 || (p2.done(function() {
      h2.display = l2;
    }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
      h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
    })), u2 = false, d2) u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = _.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && re([e2], true), p2.done(function() {
      for (r2 in g2 || re([e2]), _.remove(e2, "fxshow"), d2) ce.style(e2, r2, d2[r2]);
    })), u2 = vt(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
  }], prefilter: function(e2, t2) {
    t2 ? yt.prefilters.unshift(e2) : yt.prefilters.push(e2);
  } }), ce.speed = function(e2, t2, n2) {
    var r2 = e2 && "object" == typeof e2 ? ce.extend({}, e2) : { complete: n2 || !n2 && t2 || v(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !v(t2) && t2 };
    return ce.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in ce.fx.speeds ? r2.duration = ce.fx.speeds[r2.duration] : r2.duration = ce.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
      v(r2.old) && r2.old.call(this), r2.queue && ce.dequeue(this, r2.queue);
    }, r2;
  }, ce.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
    return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
  }, animate: function(t2, e2, n2, r2) {
    var i2 = ce.isEmptyObject(t2), o2 = ce.speed(e2, n2, r2), a2 = function() {
      var e3 = yt(this, ce.extend({}, t2), o2);
      (i2 || _.get(this, "finish")) && e3.stop(true);
    };
    return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
  }, stop: function(i2, e2, o2) {
    var a2 = function(e3) {
      var t2 = e3.stop;
      delete e3.stop, t2(o2);
    };
    return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
      var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = ce.timers, r2 = _.get(this);
      if (t2) r2[t2] && r2[t2].stop && a2(r2[t2]);
      else for (t2 in r2) r2[t2] && r2[t2].stop && pt.test(t2) && a2(r2[t2]);
      for (t2 = n2.length; t2--; ) n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
      !e3 && o2 || ce.dequeue(this, i2);
    });
  }, finish: function(a2) {
    return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
      var e2, t2 = _.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = ce.timers, o2 = n2 ? n2.length : 0;
      for (t2.finish = true, ce.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; ) i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
      for (e2 = 0; e2 < o2; e2++) n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
      delete t2.finish;
    });
  } }), ce.each(["toggle", "show", "hide"], function(e2, r2) {
    var i2 = ce.fn[r2];
    ce.fn[r2] = function(e3, t2, n2) {
      return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(gt(r2, true), e3, t2, n2);
    };
  }), ce.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
    ce.fn[e2] = function(e3, t2, n2) {
      return this.animate(r2, e3, t2, n2);
    };
  }), ce.timers = [], ce.fx.tick = function() {
    var e2, t2 = 0, n2 = ce.timers;
    for (st = Date.now(); t2 < n2.length; t2++) (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
    n2.length || ce.fx.stop(), st = void 0;
  }, ce.fx.timer = function(e2) {
    ce.timers.push(e2), ce.fx.start();
  }, ce.fx.interval = 13, ce.fx.start = function() {
    ut || (ut = true, dt());
  }, ce.fx.stop = function() {
    ut = null;
  }, ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ce.fn.delay = function(r2, e2) {
    return r2 = ce.fx && ce.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
      var n2 = ie.setTimeout(e3, r2);
      t2.stop = function() {
        ie.clearTimeout(n2);
      };
    });
  }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
  var mt, xt = ce.expr.attrHandle;
  ce.fn.extend({ attr: function(e2, t2) {
    return M(this, ce.attr, e2, t2, 1 < arguments.length);
  }, removeAttr: function(e2) {
    return this.each(function() {
      ce.removeAttr(this, e2);
    });
  } }), ce.extend({ attr: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return "undefined" == typeof e2.getAttribute ? ce.prop(e2, t2, n2) : (1 === o2 && ce.isXMLDoc(e2) || (i2 = ce.attrHooks[t2.toLowerCase()] || (ce.expr.match.bool.test(t2) ? mt : void 0)), void 0 !== n2 ? null === n2 ? void ce.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = ce.find.attr(e2, t2)) ? void 0 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!le.radioValue && "radio" === t2 && fe(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, removeAttr: function(e2, t2) {
    var n2, r2 = 0, i2 = t2 && t2.match(D);
    if (i2 && 1 === e2.nodeType) while (n2 = i2[r2++]) e2.removeAttribute(n2);
  } }), mt = { set: function(e2, t2, n2) {
    return false === t2 ? ce.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
  } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
    var a2 = xt[t2] || ce.find.attr;
    xt[t2] = function(e3, t3, n2) {
      var r2, i2, o2 = t3.toLowerCase();
      return n2 || (i2 = xt[o2], xt[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, xt[o2] = i2), r2;
    };
  });
  var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
  function Tt(e2) {
    return (e2.match(D) || []).join(" ");
  }
  function Ct(e2) {
    return e2.getAttribute && e2.getAttribute("class") || "";
  }
  function kt(e2) {
    return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(D) || [];
  }
  ce.fn.extend({ prop: function(e2, t2) {
    return M(this, ce.prop, e2, t2, 1 < arguments.length);
  }, removeProp: function(e2) {
    return this.each(function() {
      delete this[ce.propFix[e2] || e2];
    });
  } }), ce.extend({ prop: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return 1 === o2 && ce.isXMLDoc(e2) || (t2 = ce.propFix[t2] || t2, i2 = ce.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var t2 = ce.find.attr(e2, "tabindex");
    return t2 ? parseInt(t2, 10) : bt.test(e2.nodeName) || wt.test(e2.nodeName) && e2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
  }, set: function(e2) {
    var t2 = e2.parentNode;
    t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
  } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({ addClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).addClass(t2.call(this, e3, Ct(this)));
    }) : (e2 = kt(t2)).length ? this.each(function() {
      if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) i2 = e2[o2], n2.indexOf(" " + i2 + " ") < 0 && (n2 += i2 + " ");
        a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this;
  }, removeClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).removeClass(t2.call(this, e3, Ct(this)));
    }) : arguments.length ? (e2 = kt(t2)).length ? this.each(function() {
      if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) {
          i2 = e2[o2];
          while (-1 < n2.indexOf(" " + i2 + " ")) n2 = n2.replace(" " + i2 + " ", " ");
        }
        a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this : this.attr("class", "");
  }, toggleClass: function(t2, n2) {
    var e2, r2, i2, o2, a2 = typeof t2, s2 = "string" === a2 || Array.isArray(t2);
    return v(t2) ? this.each(function(e3) {
      ce(this).toggleClass(t2.call(this, e3, Ct(this), n2), n2);
    }) : "boolean" == typeof n2 && s2 ? n2 ? this.addClass(t2) : this.removeClass(t2) : (e2 = kt(t2), this.each(function() {
      if (s2) for (o2 = ce(this), i2 = 0; i2 < e2.length; i2++) r2 = e2[i2], o2.hasClass(r2) ? o2.removeClass(r2) : o2.addClass(r2);
      else void 0 !== t2 && "boolean" !== a2 || ((r2 = Ct(this)) && _.set(this, "__className__", r2), this.setAttribute && this.setAttribute("class", r2 || false === t2 ? "" : _.get(this, "__className__") || ""));
    }));
  }, hasClass: function(e2) {
    var t2, n2, r2 = 0;
    t2 = " " + e2 + " ";
    while (n2 = this[r2++]) if (1 === n2.nodeType && -1 < (" " + Tt(Ct(n2)) + " ").indexOf(t2)) return true;
    return false;
  } });
  var St = /\r/g;
  ce.fn.extend({ val: function(n2) {
    var r2, e2, i2, t2 = this[0];
    return arguments.length ? (i2 = v(n2), this.each(function(e3) {
      var t3;
      1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, ce(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = ce.map(t3, function(e4) {
        return null == e4 ? "" : e4 + "";
      })), (r2 = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
    })) : t2 ? (r2 = ce.valHooks[t2.type] || ce.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(St, "") : null == e2 ? "" : e2 : void 0;
  } }), ce.extend({ valHooks: { option: { get: function(e2) {
    var t2 = ce.find.attr(e2, "value");
    return null != t2 ? t2 : Tt(ce.text(e2));
  } }, select: { get: function(e2) {
    var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
    for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++) if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !fe(n2.parentNode, "optgroup"))) {
      if (t2 = ce(n2).val(), a2) return t2;
      s2.push(t2);
    }
    return s2;
  }, set: function(e2, t2) {
    var n2, r2, i2 = e2.options, o2 = ce.makeArray(t2), a2 = i2.length;
    while (a2--) ((r2 = i2[a2]).selected = -1 < ce.inArray(ce.valHooks.option.get(r2), o2)) && (n2 = true);
    return n2 || (e2.selectedIndex = -1), o2;
  } } } }), ce.each(["radio", "checkbox"], function() {
    ce.valHooks[this] = { set: function(e2, t2) {
      if (Array.isArray(t2)) return e2.checked = -1 < ce.inArray(ce(e2).val(), t2);
    } }, le.checkOn || (ce.valHooks[this].get = function(e2) {
      return null === e2.getAttribute("value") ? "on" : e2.value;
    });
  });
  var Et = ie.location, jt = { guid: Date.now() }, At = /\?/;
  ce.parseXML = function(e2) {
    var t2, n2;
    if (!e2 || "string" != typeof e2) return null;
    try {
      t2 = new ie.DOMParser().parseFromString(e2, "text/xml");
    } catch (e3) {
    }
    return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || ce.error("Invalid XML: " + (n2 ? ce.map(n2.childNodes, function(e3) {
      return e3.textContent;
    }).join("\n") : e2)), t2;
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/, Nt = function(e2) {
    e2.stopPropagation();
  };
  ce.extend(ce.event, { trigger: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || C], d2 = ue.call(e2, "type") ? e2.type : e2, h2 = ue.call(e2, "namespace") ? e2.namespace.split(".") : [];
    if (o2 = f2 = a2 = n2 = n2 || C, 3 !== n2.nodeType && 8 !== n2.nodeType && !Dt.test(d2 + ce.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[ce.expando] ? e2 : new ce.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : ce.makeArray(t2, [e2]), c2 = ce.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
      if (!r2 && !c2.noBubble && !y(n2)) {
        for (s2 = c2.delegateType || d2, Dt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode) p2.push(o2), a2 = o2;
        a2 === (n2.ownerDocument || C) && p2.push(a2.defaultView || a2.parentWindow || ie);
      }
      i2 = 0;
      while ((o2 = p2[i2++]) && !e2.isPropagationStopped()) f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (_.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && _.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && $(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
      return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !$(n2) || u2 && v(n2[d2]) && !y(n2) && ((a2 = n2[u2]) && (n2[u2] = null), ce.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, Nt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, Nt), ce.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
    }
  }, simulate: function(e2, t2, n2) {
    var r2 = ce.extend(new ce.Event(), n2, { type: e2, isSimulated: true });
    ce.event.trigger(r2, null, t2);
  } }), ce.fn.extend({ trigger: function(e2, t2) {
    return this.each(function() {
      ce.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, t2) {
    var n2 = this[0];
    if (n2) return ce.event.trigger(e2, t2, n2, true);
  } });
  var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n2, e2, r2, i2) {
    var t2;
    if (Array.isArray(e2)) ce.each(e2, function(e3, t3) {
      r2 || qt.test(n2) ? i2(n2, t3) : Pt(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
    });
    else if (r2 || "object" !== x(e2)) i2(n2, e2);
    else for (t2 in e2) Pt(n2 + "[" + t2 + "]", e2[t2], r2, i2);
  }
  ce.param = function(e2, t2) {
    var n2, r2 = [], i2 = function(e3, t3) {
      var n3 = v(t3) ? t3() : t3;
      r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
    };
    if (null == e2) return "";
    if (Array.isArray(e2) || e2.jquery && !ce.isPlainObject(e2)) ce.each(e2, function() {
      i2(this.name, this.value);
    });
    else for (n2 in e2) Pt(n2, e2[n2], t2, i2);
    return r2.join("&");
  }, ce.fn.extend({ serialize: function() {
    return ce.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = ce.prop(this, "elements");
      return e2 ? ce.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e2) && (this.checked || !we.test(e2));
    }).map(function(e2, t2) {
      var n2 = ce(this).val();
      return null == n2 ? null : Array.isArray(n2) ? ce.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(Lt, "\r\n") };
      }) : { name: t2.name, value: n2.replace(Lt, "\r\n") };
    }).get();
  } });
  var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a");
  function Ut(o2) {
    return function(e2, t2) {
      "string" != typeof e2 && (t2 = e2, e2 = "*");
      var n2, r2 = 0, i2 = e2.toLowerCase().match(D) || [];
      if (v(t2)) while (n2 = i2[r2++]) "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
    };
  }
  function Vt(t2, i2, o2, a2) {
    var s2 = {}, u2 = t2 === _t;
    function l2(e2) {
      var r2;
      return s2[e2] = true, ce.each(t2[e2] || [], function(e3, t3) {
        var n2 = t3(i2, o2, a2);
        return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
      }), r2;
    }
    return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
  }
  function Gt(e2, t2) {
    var n2, r2, i2 = ce.ajaxSettings.flatOptions || {};
    for (n2 in t2) void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
    return r2 && ce.extend(true, e2, r2), e2;
  }
  Xt.href = Et.href, ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": ce.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
    return t2 ? Gt(Gt(e2, ce.ajaxSettings), t2) : Gt(ce.ajaxSettings, e2);
  }, ajaxPrefilter: Ut(Bt), ajaxTransport: Ut(_t), ajax: function(e2, t2) {
    "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
    var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = ce.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? ce(y2) : ce.event, x2 = ce.Deferred(), b2 = ce.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
      var t3;
      if (h2) {
        if (!n2) {
          n2 = {};
          while (t3 = Wt.exec(p2)) n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
        }
        t3 = n2[e3.toLowerCase() + " "];
      }
      return null == t3 ? null : t3.join(", ");
    }, getAllResponseHeaders: function() {
      return h2 ? p2 : null;
    }, setRequestHeader: function(e3, t3) {
      return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
    }, overrideMimeType: function(e3) {
      return null == h2 && (v2.mimeType = e3), this;
    }, statusCode: function(e3) {
      var t3;
      if (e3) if (h2) T2.always(e3[T2.status]);
      else for (t3 in e3) w2[t3] = [w2[t3], e3[t3]];
      return this;
    }, abort: function(e3) {
      var t3 = e3 || u2;
      return c2 && c2.abort(t3), l2(0, t3), this;
    } };
    if (x2.promise(T2), v2.url = ((e2 || v2.url || Et.href) + "").replace($t, Et.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(D) || [""], null == v2.crossDomain) {
      r2 = C.createElement("a");
      try {
        r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Xt.protocol + "//" + Xt.host != r2.protocol + "//" + r2.host;
      } catch (e3) {
        v2.crossDomain = true;
      }
    }
    if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = ce.param(v2.data, v2.traditional)), Vt(Bt, v2, t2, T2), h2) return T2;
    for (i2 in (g2 = ce.event && v2.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Ft.test(v2.type), f2 = v2.url.replace(Rt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(Mt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (At.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(It, "$1"), o2 = (At.test(f2) ? "&" : "?") + "_=" + jt.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (ce.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", ce.lastModified[f2]), ce.etag[f2] && T2.setRequestHeader("If-None-Match", ce.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers) T2.setRequestHeader(i2, v2.headers[i2]);
    if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2)) return T2.abort();
    if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Vt(_t, v2, t2, T2)) {
      if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2) return T2;
      v2.async && 0 < v2.timeout && (d2 = ie.setTimeout(function() {
        T2.abort("timeout");
      }, v2.timeout));
      try {
        h2 = false, c2.send(a2, l2);
      } catch (e3) {
        if (h2) throw e3;
        l2(-1, e3);
      }
    } else l2(-1, "No Transport");
    function l2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = t3;
      h2 || (h2 = true, d2 && ie.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = (function(e4, t4, n4) {
        var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
        while ("*" === u4[0]) u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
        if (r4) {
          for (i4 in s4) if (s4[i4] && s4[i4].test(r4)) {
            u4.unshift(i4);
            break;
          }
        }
        if (u4[0] in n4) o4 = u4[0];
        else {
          for (i4 in n4) {
            if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
              o4 = i4;
              break;
            }
            a4 || (a4 = i4);
          }
          o4 = o4 || a4;
        }
        if (o4) return o4 !== u4[0] && u4.unshift(o4), n4[o4];
      })(v2, T2, n3)), !i3 && -1 < ce.inArray("script", v2.dataTypes) && ce.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
      }), s3 = (function(e4, t4, n4, r4) {
        var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
        if (c3[1]) for (a4 in e4.converters) l4[a4.toLowerCase()] = e4.converters[a4];
        o4 = c3.shift();
        while (o4) if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
          if ("*" === o4) o4 = u4;
          else if ("*" !== u4 && u4 !== o4) {
            if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
              for (i4 in l4) if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                break;
              }
            }
            if (true !== a4) if (a4 && e4["throws"]) t4 = a4(t4);
            else try {
              t4 = a4(t4);
            } catch (e5) {
              return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
            }
          }
        }
        return { state: "success", data: t4 };
      })(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (ce.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (ce.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --ce.active || ce.event.trigger("ajaxStop")));
    }
    return T2;
  }, getJSON: function(e2, t2, n2) {
    return ce.get(e2, t2, n2, "json");
  }, getScript: function(e2, t2) {
    return ce.get(e2, void 0, t2, "script");
  } }), ce.each(["get", "post"], function(e2, i2) {
    ce[i2] = function(e3, t2, n2, r2) {
      return v(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), ce.ajax(ce.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, ce.isPlainObject(e3) && e3));
    };
  }), ce.ajaxPrefilter(function(e2) {
    var t2;
    for (t2 in e2.headers) "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
  }), ce._evalUrl = function(e2, t2, n2) {
    return ce.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
    } }, dataFilter: function(e3) {
      ce.globalEval(e3, t2, n2);
    } });
  }, ce.fn.extend({ wrapAll: function(e2) {
    var t2;
    return this[0] && (v(e2) && (e2 = e2.call(this[0])), t2 = ce(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
      var e3 = this;
      while (e3.firstElementChild) e3 = e3.firstElementChild;
      return e3;
    }).append(this)), this;
  }, wrapInner: function(n2) {
    return v(n2) ? this.each(function(e2) {
      ce(this).wrapInner(n2.call(this, e2));
    }) : this.each(function() {
      var e2 = ce(this), t2 = e2.contents();
      t2.length ? t2.wrapAll(n2) : e2.append(n2);
    });
  }, wrap: function(t2) {
    var n2 = v(t2);
    return this.each(function(e2) {
      ce(this).wrapAll(n2 ? t2.call(this, e2) : t2);
    });
  }, unwrap: function(e2) {
    return this.parent(e2).not("body").each(function() {
      ce(this).replaceWith(this.childNodes);
    }), this;
  } }), ce.expr.pseudos.hidden = function(e2) {
    return !ce.expr.pseudos.visible(e2);
  }, ce.expr.pseudos.visible = function(e2) {
    return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, ce.ajaxSettings.xhr = function() {
    try {
      return new ie.XMLHttpRequest();
    } catch (e2) {
    }
  };
  var Yt = { 0: 200, 1223: 204 }, Qt = ce.ajaxSettings.xhr();
  le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i2) {
    var o2, a2;
    if (le.cors || Qt && !i2.crossDomain) return { send: function(e2, t2) {
      var n2, r2 = i2.xhr();
      if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields) for (n2 in i2.xhrFields) r2[n2] = i2.xhrFields[n2];
      for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2) r2.setRequestHeader(n2, e2[n2]);
      o2 = function(e3) {
        return function() {
          o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(Yt[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
        };
      }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
        4 === r2.readyState && ie.setTimeout(function() {
          o2 && a2();
        });
      }, o2 = o2("abort");
      try {
        r2.send(i2.hasContent && i2.data || null);
      } catch (e3) {
        if (o2) throw e3;
      }
    }, abort: function() {
      o2 && o2();
    } };
  }), ce.ajaxPrefilter(function(e2) {
    e2.crossDomain && (e2.contents.script = false);
  }), ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
    return ce.globalEval(e2), e2;
  } } }), ce.ajaxPrefilter("script", function(e2) {
    void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
  }), ce.ajaxTransport("script", function(n2) {
    var r2, i2;
    if (n2.crossDomain || n2.scriptAttrs) return { send: function(e2, t2) {
      r2 = ce("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
        r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
      }), C.head.appendChild(r2[0]);
    }, abort: function() {
      i2 && i2();
    } };
  });
  var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var e2 = Kt.pop() || ce.expando + "_" + jt.guid++;
    return this[e2] = true, e2;
  } }), ce.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
    var r2, i2, o2, a2 = false !== e2.jsonp && (Zt.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e2.data) && "data");
    if (a2 || "jsonp" === e2.dataTypes[0]) return r2 = e2.jsonpCallback = v(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Zt, "$1" + r2) : false !== e2.jsonp && (e2.url += (At.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
      return o2 || ce.error(r2 + " was not called"), o2[0];
    }, e2.dataTypes[0] = "json", i2 = ie[r2], ie[r2] = function() {
      o2 = arguments;
    }, n2.always(function() {
      void 0 === i2 ? ce(ie).removeProp(r2) : ie[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, Kt.push(r2)), o2 && v(i2) && i2(o2[0]), o2 = i2 = void 0;
    }), "script";
  }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e2, t2, n2) {
    return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (le.createHTMLDocument ? ((r2 = (t2 = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t2.head.appendChild(r2)) : t2 = C), o2 = !n2 && [], (i2 = w.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = Ae([e2], t2, o2), o2 && o2.length && ce(o2).remove(), ce.merge([], i2.childNodes)));
    var r2, i2, o2;
  }, ce.fn.load = function(e2, t2, n2) {
    var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
    return -1 < s2 && (r2 = Tt(e2.slice(s2)), e2 = e2.slice(0, s2)), v(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && ce.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
      o2 = arguments, a2.html(r2 ? ce("<div>").append(ce.parseHTML(e3)).find(r2) : e3);
    }).always(n2 && function(e3, t3) {
      a2.each(function() {
        n2.apply(this, o2 || [e3.responseText, t3, e3]);
      });
    }), this;
  }, ce.expr.pseudos.animated = function(t2) {
    return ce.grep(ce.timers, function(e2) {
      return t2 === e2.elem;
    }).length;
  }, ce.offset = { setOffset: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2 = ce.css(e2, "position"), c2 = ce(e2), f2 = {};
    "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = ce.css(e2, "top"), u2 = ce.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), v(t2) && (t2 = t2.call(e2, n2, ce.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
  } }, ce.fn.extend({ offset: function(t2) {
    if (arguments.length) return void 0 === t2 ? this : this.each(function(e3) {
      ce.offset.setOffset(this, t2, e3);
    });
    var e2, n2, r2 = this[0];
    return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
  }, position: function() {
    if (this[0]) {
      var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
      if ("fixed" === ce.css(r2, "position")) t2 = r2.getBoundingClientRect();
      else {
        t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
        while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === ce.css(e2, "position")) e2 = e2.parentNode;
        e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = ce(e2).offset()).top += ce.css(e2, "borderTopWidth", true), i2.left += ce.css(e2, "borderLeftWidth", true));
      }
      return { top: t2.top - i2.top - ce.css(r2, "marginTop", true), left: t2.left - i2.left - ce.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var e2 = this.offsetParent;
      while (e2 && "static" === ce.css(e2, "position")) e2 = e2.offsetParent;
      return e2 || J;
    });
  } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
    var o2 = "pageYOffset" === i2;
    ce.fn[t2] = function(e2) {
      return M(this, function(e3, t3, n2) {
        var r2;
        if (y(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2) return r2 ? r2[i2] : e3[t3];
        r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
      }, t2, e2, arguments.length);
    };
  }), ce.each(["top", "left"], function(e2, n2) {
    ce.cssHooks[n2] = Ye(le.pixelPosition, function(e3, t2) {
      if (t2) return t2 = Ge(e3, n2), _e.test(t2) ? ce(e3).position()[n2] + "px" : t2;
    });
  }), ce.each({ Height: "height", Width: "width" }, function(a2, s2) {
    ce.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
      ce.fn[o2] = function(e2, t2) {
        var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
        return M(this, function(e3, t3, n3) {
          var r3;
          return y(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? ce.css(e3, t3, i2) : ce.style(e3, t3, n3, i2);
        }, s2, n2 ? e2 : void 0, n2);
      };
    });
  }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
    ce.fn[t2] = function(e3) {
      return this.on(t2, e3);
    };
  }), ce.fn.extend({ bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  }, hover: function(e2, t2) {
    return this.on("mouseenter", e2).on("mouseleave", t2 || e2);
  } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
    ce.fn[n2] = function(e3, t2) {
      return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
    };
  });
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function(e2, t2) {
    var n2, r2, i2;
    if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), v(e2)) return r2 = ae.call(arguments, 2), (i2 = function() {
      return e2.apply(t2 || this, r2.concat(ae.call(arguments)));
    }).guid = e2.guid = e2.guid || ce.guid++, i2;
  }, ce.holdReady = function(e2) {
    e2 ? ce.readyWait++ : ce.ready(true);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e2) {
    var t2 = ce.type(e2);
    return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
  }, ce.trim = function(e2) {
    return null == e2 ? "" : (e2 + "").replace(en, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ce;
  });
  var tn = ie.jQuery, nn = ie.$;
  return ce.noConflict = function(e2) {
    return ie.$ === ce && (ie.$ = nn), e2 && ie.jQuery === ce && (ie.jQuery = tn), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});
(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function() {
  "use strict";
  function e(e2) {
    return e2 && "[object Function]" === {}.toString.call(e2);
  }
  function t(e2, t2) {
    if (1 !== e2.nodeType) return [];
    var o2 = e2.ownerDocument.defaultView, n2 = o2.getComputedStyle(e2, null);
    return t2 ? n2[t2] : n2;
  }
  function o(e2) {
    return "HTML" === e2.nodeName ? e2 : e2.parentNode || e2.host;
  }
  function n(e2) {
    if (!e2) return document.body;
    switch (e2.nodeName) {
      case "HTML":
      case "BODY":
        return e2.ownerDocument.body;
      case "#document":
        return e2.body;
    }
    var i2 = t(e2), r2 = i2.overflow, p2 = i2.overflowX, s2 = i2.overflowY;
    return /(auto|scroll|overlay)/.test(r2 + s2 + p2) ? e2 : n(o(e2));
  }
  function i(e2) {
    return e2 && e2.referenceNode ? e2.referenceNode : e2;
  }
  function r(e2) {
    return 11 === e2 ? re : 10 === e2 ? pe : re || pe;
  }
  function p(e2) {
    if (!e2) return document.documentElement;
    for (var o2 = r(10) ? document.body : null, n2 = e2.offsetParent || null; n2 === o2 && e2.nextElementSibling; ) n2 = (e2 = e2.nextElementSibling).offsetParent;
    var i2 = n2 && n2.nodeName;
    return i2 && "BODY" !== i2 && "HTML" !== i2 ? -1 !== ["TH", "TD", "TABLE"].indexOf(n2.nodeName) && "static" === t(n2, "position") ? p(n2) : n2 : e2 ? e2.ownerDocument.documentElement : document.documentElement;
  }
  function s(e2) {
    var t2 = e2.nodeName;
    return "BODY" !== t2 && ("HTML" === t2 || p(e2.firstElementChild) === e2);
  }
  function d(e2) {
    return null === e2.parentNode ? e2 : d(e2.parentNode);
  }
  function a(e2, t2) {
    if (!e2 || !e2.nodeType || !t2 || !t2.nodeType) return document.documentElement;
    var o2 = e2.compareDocumentPosition(t2) & Node.DOCUMENT_POSITION_FOLLOWING, n2 = o2 ? e2 : t2, i2 = o2 ? t2 : e2, r2 = document.createRange();
    r2.setStart(n2, 0), r2.setEnd(i2, 0);
    var l2 = r2.commonAncestorContainer;
    if (e2 !== l2 && t2 !== l2 || n2.contains(i2)) return s(l2) ? l2 : p(l2);
    var f2 = d(e2);
    return f2.host ? a(f2.host, t2) : a(e2, d(t2).host);
  }
  function l(e2) {
    var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top", o2 = "top" === t2 ? "scrollTop" : "scrollLeft", n2 = e2.nodeName;
    if ("BODY" === n2 || "HTML" === n2) {
      var i2 = e2.ownerDocument.documentElement, r2 = e2.ownerDocument.scrollingElement || i2;
      return r2[o2];
    }
    return e2[o2];
  }
  function f(e2, t2) {
    var o2 = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n2 = l(t2, "top"), i2 = l(t2, "left"), r2 = o2 ? -1 : 1;
    return e2.top += n2 * r2, e2.bottom += n2 * r2, e2.left += i2 * r2, e2.right += i2 * r2, e2;
  }
  function m(e2, t2) {
    var o2 = "x" === t2 ? "Left" : "Top", n2 = "Left" == o2 ? "Right" : "Bottom";
    return parseFloat(e2["border" + o2 + "Width"]) + parseFloat(e2["border" + n2 + "Width"]);
  }
  function h(e2, t2, o2, n2) {
    return ee(t2["offset" + e2], t2["scroll" + e2], o2["client" + e2], o2["offset" + e2], o2["scroll" + e2], r(10) ? parseInt(o2["offset" + e2]) + parseInt(n2["margin" + ("Height" === e2 ? "Top" : "Left")]) + parseInt(n2["margin" + ("Height" === e2 ? "Bottom" : "Right")]) : 0);
  }
  function c(e2) {
    var t2 = e2.body, o2 = e2.documentElement, n2 = r(10) && getComputedStyle(o2);
    return { height: h("Height", t2, o2, n2), width: h("Width", t2, o2, n2) };
  }
  function g(e2) {
    return le({}, e2, { right: e2.left + e2.width, bottom: e2.top + e2.height });
  }
  function u(e2) {
    var o2 = {};
    try {
      if (r(10)) {
        o2 = e2.getBoundingClientRect();
        var n2 = l(e2, "top"), i2 = l(e2, "left");
        o2.top += n2, o2.left += i2, o2.bottom += n2, o2.right += i2;
      } else o2 = e2.getBoundingClientRect();
    } catch (t2) {
    }
    var p2 = { left: o2.left, top: o2.top, width: o2.right - o2.left, height: o2.bottom - o2.top }, s2 = "HTML" === e2.nodeName ? c(e2.ownerDocument) : {}, d2 = s2.width || e2.clientWidth || p2.width, a2 = s2.height || e2.clientHeight || p2.height, f2 = e2.offsetWidth - d2, h2 = e2.offsetHeight - a2;
    if (f2 || h2) {
      var u2 = t(e2);
      f2 -= m(u2, "x"), h2 -= m(u2, "y"), p2.width -= f2, p2.height -= h2;
    }
    return g(p2);
  }
  function b(e2, o2) {
    var i2 = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p2 = r(10), s2 = "HTML" === o2.nodeName, d2 = u(e2), a2 = u(o2), l2 = n(e2), m2 = t(o2), h2 = parseFloat(m2.borderTopWidth), c2 = parseFloat(m2.borderLeftWidth);
    i2 && s2 && (a2.top = ee(a2.top, 0), a2.left = ee(a2.left, 0));
    var b2 = g({ top: d2.top - a2.top - h2, left: d2.left - a2.left - c2, width: d2.width, height: d2.height });
    if (b2.marginTop = 0, b2.marginLeft = 0, !p2 && s2) {
      var w2 = parseFloat(m2.marginTop), y2 = parseFloat(m2.marginLeft);
      b2.top -= h2 - w2, b2.bottom -= h2 - w2, b2.left -= c2 - y2, b2.right -= c2 - y2, b2.marginTop = w2, b2.marginLeft = y2;
    }
    return (p2 && !i2 ? o2.contains(l2) : o2 === l2 && "BODY" !== l2.nodeName) && (b2 = f(b2, o2)), b2;
  }
  function w(e2) {
    var t2 = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o2 = e2.ownerDocument.documentElement, n2 = b(e2, o2), i2 = ee(o2.clientWidth, window.innerWidth || 0), r2 = ee(o2.clientHeight, window.innerHeight || 0), p2 = t2 ? 0 : l(o2), s2 = t2 ? 0 : l(o2, "left"), d2 = { top: p2 - n2.top + n2.marginTop, left: s2 - n2.left + n2.marginLeft, width: i2, height: r2 };
    return g(d2);
  }
  function y(e2) {
    var n2 = e2.nodeName;
    if ("BODY" === n2 || "HTML" === n2) return false;
    if ("fixed" === t(e2, "position")) return true;
    var i2 = o(e2);
    return !!i2 && y(i2);
  }
  function E(e2) {
    if (!e2 || !e2.parentElement || r()) return document.documentElement;
    for (var o2 = e2.parentElement; o2 && "none" === t(o2, "transform"); ) o2 = o2.parentElement;
    return o2 || document.documentElement;
  }
  function v(e2, t2, r2, p2) {
    var s2 = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], d2 = { top: 0, left: 0 }, l2 = s2 ? E(e2) : a(e2, i(t2));
    if ("viewport" === p2) d2 = w(l2, s2);
    else {
      var f2;
      "scrollParent" === p2 ? (f2 = n(o(t2)), "BODY" === f2.nodeName && (f2 = e2.ownerDocument.documentElement)) : "window" === p2 ? f2 = e2.ownerDocument.documentElement : f2 = p2;
      var m2 = b(f2, l2, s2);
      if ("HTML" === f2.nodeName && !y(l2)) {
        var h2 = c(e2.ownerDocument), g2 = h2.height, u2 = h2.width;
        d2.top += m2.top - m2.marginTop, d2.bottom = g2 + m2.top, d2.left += m2.left - m2.marginLeft, d2.right = u2 + m2.left;
      } else d2 = m2;
    }
    r2 = r2 || 0;
    var v2 = "number" == typeof r2;
    return d2.left += v2 ? r2 : r2.left || 0, d2.top += v2 ? r2 : r2.top || 0, d2.right -= v2 ? r2 : r2.right || 0, d2.bottom -= v2 ? r2 : r2.bottom || 0, d2;
  }
  function x(e2) {
    var t2 = e2.width, o2 = e2.height;
    return t2 * o2;
  }
  function O(e2, t2, o2, n2, i2) {
    var r2 = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e2.indexOf("auto")) return e2;
    var p2 = v(o2, n2, r2, i2), s2 = { top: { width: p2.width, height: t2.top - p2.top }, right: { width: p2.right - t2.right, height: p2.height }, bottom: { width: p2.width, height: p2.bottom - t2.bottom }, left: { width: t2.left - p2.left, height: p2.height } }, d2 = Object.keys(s2).map(function(e3) {
      return le({ key: e3 }, s2[e3], { area: x(s2[e3]) });
    }).sort(function(e3, t3) {
      return t3.area - e3.area;
    }), a2 = d2.filter(function(e3) {
      var t3 = e3.width, n3 = e3.height;
      return t3 >= o2.clientWidth && n3 >= o2.clientHeight;
    }), l2 = 0 < a2.length ? a2[0].key : d2[0].key, f2 = e2.split("-")[1];
    return l2 + (f2 ? "-" + f2 : "");
  }
  function L(e2, t2, o2) {
    var n2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, r2 = n2 ? E(t2) : a(t2, i(o2));
    return b(o2, r2, n2);
  }
  function S(e2) {
    var t2 = e2.ownerDocument.defaultView, o2 = t2.getComputedStyle(e2), n2 = parseFloat(o2.marginTop || 0) + parseFloat(o2.marginBottom || 0), i2 = parseFloat(o2.marginLeft || 0) + parseFloat(o2.marginRight || 0), r2 = { width: e2.offsetWidth + i2, height: e2.offsetHeight + n2 };
    return r2;
  }
  function T(e2) {
    var t2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e2.replace(/left|right|bottom|top/g, function(e3) {
      return t2[e3];
    });
  }
  function C(e2, t2, o2) {
    o2 = o2.split("-")[0];
    var n2 = S(e2), i2 = { width: n2.width, height: n2.height }, r2 = -1 !== ["right", "left"].indexOf(o2), p2 = r2 ? "top" : "left", s2 = r2 ? "left" : "top", d2 = r2 ? "height" : "width", a2 = r2 ? "width" : "height";
    return i2[p2] = t2[p2] + t2[d2] / 2 - n2[d2] / 2, i2[s2] = o2 === s2 ? t2[s2] - n2[a2] : t2[T(s2)], i2;
  }
  function D(e2, t2) {
    return Array.prototype.find ? e2.find(t2) : e2.filter(t2)[0];
  }
  function N(e2, t2, o2) {
    if (Array.prototype.findIndex) return e2.findIndex(function(e3) {
      return e3[t2] === o2;
    });
    var n2 = D(e2, function(e3) {
      return e3[t2] === o2;
    });
    return e2.indexOf(n2);
  }
  function P(t2, o2, n2) {
    var i2 = void 0 === n2 ? t2 : t2.slice(0, N(t2, "name", n2));
    return i2.forEach(function(t3) {
      t3["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var n3 = t3["function"] || t3.fn;
      t3.enabled && e(n3) && (o2.offsets.popper = g(o2.offsets.popper), o2.offsets.reference = g(o2.offsets.reference), o2 = n3(o2, t3));
    }), o2;
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e2 = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: false, offsets: {} };
      e2.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e2.placement = O(this.options.placement, e2.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e2.originalPlacement = e2.placement, e2.positionFixed = this.options.positionFixed, e2.offsets.popper = C(this.popper, e2.offsets.reference, e2.placement), e2.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e2 = P(this.modifiers, e2), this.state.isCreated ? this.options.onUpdate(e2) : (this.state.isCreated = true, this.options.onCreate(e2));
    }
  }
  function W(e2, t2) {
    return e2.some(function(e3) {
      var o2 = e3.name, n2 = e3.enabled;
      return n2 && o2 === t2;
    });
  }
  function B(e2) {
    for (var t2 = [false, "ms", "Webkit", "Moz", "O"], o2 = e2.charAt(0).toUpperCase() + e2.slice(1), n2 = 0; n2 < t2.length; n2++) {
      var i2 = t2[n2], r2 = i2 ? "" + i2 + o2 : e2;
      if ("undefined" != typeof document.body.style[r2]) return r2;
    }
    return null;
  }
  function H() {
    return this.state.isDestroyed = true, W(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[B("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }
  function A(e2) {
    var t2 = e2.ownerDocument;
    return t2 ? t2.defaultView : window;
  }
  function M(e2, t2, o2, i2) {
    var r2 = "BODY" === e2.nodeName, p2 = r2 ? e2.ownerDocument.defaultView : e2;
    p2.addEventListener(t2, o2, { passive: true }), r2 || M(n(p2.parentNode), t2, o2, i2), i2.push(p2);
  }
  function F(e2, t2, o2, i2) {
    o2.updateBound = i2, A(e2).addEventListener("resize", o2.updateBound, { passive: true });
    var r2 = n(e2);
    return M(r2, "scroll", o2.updateBound, o2.scrollParents), o2.scrollElement = r2, o2.eventsEnabled = true, o2;
  }
  function I() {
    this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
  }
  function R(e2, t2) {
    return A(e2).removeEventListener("resize", t2.updateBound), t2.scrollParents.forEach(function(e3) {
      e3.removeEventListener("scroll", t2.updateBound);
    }), t2.updateBound = null, t2.scrollParents = [], t2.scrollElement = null, t2.eventsEnabled = false, t2;
  }
  function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
  }
  function Y(e2) {
    return "" !== e2 && !isNaN(parseFloat(e2)) && isFinite(e2);
  }
  function V(e2, t2) {
    Object.keys(t2).forEach(function(o2) {
      var n2 = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o2) && Y(t2[o2]) && (n2 = "px"), e2.style[o2] = t2[o2] + n2;
    });
  }
  function j(e2, t2) {
    Object.keys(t2).forEach(function(o2) {
      var n2 = t2[o2];
      false === n2 ? e2.removeAttribute(o2) : e2.setAttribute(o2, t2[o2]);
    });
  }
  function q(e2, t2) {
    var o2 = e2.offsets, n2 = o2.popper, i2 = o2.reference, r2 = $, p2 = function(e3) {
      return e3;
    }, s2 = r2(i2.width), d2 = r2(n2.width), a2 = -1 !== ["left", "right"].indexOf(e2.placement), l2 = -1 !== e2.placement.indexOf("-"), f2 = t2 ? a2 || l2 || s2 % 2 == d2 % 2 ? r2 : Z : p2, m2 = t2 ? r2 : p2;
    return { left: f2(1 == s2 % 2 && 1 == d2 % 2 && !l2 && t2 ? n2.left - 1 : n2.left), top: m2(n2.top), bottom: m2(n2.bottom), right: f2(n2.right) };
  }
  function K(e2, t2, o2) {
    var n2 = D(e2, function(e3) {
      var o3 = e3.name;
      return o3 === t2;
    }), i2 = !!n2 && e2.some(function(e3) {
      return e3.name === o2 && e3.enabled && e3.order < n2.order;
    });
    if (!i2) {
      var r2 = "`" + t2 + "`";
      console.warn("`" + o2 + "` modifier is required by " + r2 + " modifier in order to work, be sure to include it before " + r2 + "!");
    }
    return i2;
  }
  function z(e2) {
    return "end" === e2 ? "start" : "start" === e2 ? "end" : e2;
  }
  function G(e2) {
    var t2 = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o2 = he.indexOf(e2), n2 = he.slice(o2 + 1).concat(he.slice(0, o2));
    return t2 ? n2.reverse() : n2;
  }
  function _(e2, t2, o2, n2) {
    var i2 = e2.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r2 = +i2[1], p2 = i2[2];
    if (!r2) return e2;
    if (0 === p2.indexOf("%")) {
      var s2;
      switch (p2) {
        case "%p":
          s2 = o2;
          break;
        case "%":
        case "%r":
        default:
          s2 = n2;
      }
      var d2 = g(s2);
      return d2[t2] / 100 * r2;
    }
    if ("vh" === p2 || "vw" === p2) {
      var a2;
      return a2 = "vh" === p2 ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a2 / 100 * r2;
    }
    return r2;
  }
  function X(e2, t2, o2, n2) {
    var i2 = [0, 0], r2 = -1 !== ["right", "left"].indexOf(n2), p2 = e2.split(/(\+|\-)/).map(function(e3) {
      return e3.trim();
    }), s2 = p2.indexOf(D(p2, function(e3) {
      return -1 !== e3.search(/,|\s/);
    }));
    p2[s2] && -1 === p2[s2].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var d2 = /\s*,\s*|\s+/, a2 = -1 === s2 ? [p2] : [p2.slice(0, s2).concat([p2[s2].split(d2)[0]]), [p2[s2].split(d2)[1]].concat(p2.slice(s2 + 1))];
    return a2 = a2.map(function(e3, n3) {
      var i3 = (1 === n3 ? !r2 : r2) ? "height" : "width", p3 = false;
      return e3.reduce(function(e4, t3) {
        return "" === e4[e4.length - 1] && -1 !== ["+", "-"].indexOf(t3) ? (e4[e4.length - 1] = t3, p3 = true, e4) : p3 ? (e4[e4.length - 1] += t3, p3 = false, e4) : e4.concat(t3);
      }, []).map(function(e4) {
        return _(e4, i3, t2, o2);
      });
    }), a2.forEach(function(e3, t3) {
      e3.forEach(function(o3, n3) {
        Y(o3) && (i2[t3] += o3 * ("-" === e3[n3 - 1] ? -1 : 1));
      });
    }), i2;
  }
  function J(e2, t2) {
    var o2, n2 = t2.offset, i2 = e2.placement, r2 = e2.offsets, p2 = r2.popper, s2 = r2.reference, d2 = i2.split("-")[0];
    return o2 = Y(+n2) ? [+n2, 0] : X(n2, p2, s2, d2), "left" === d2 ? (p2.top += o2[0], p2.left -= o2[1]) : "right" === d2 ? (p2.top += o2[0], p2.left += o2[1]) : "top" === d2 ? (p2.left += o2[0], p2.top -= o2[1]) : "bottom" === d2 && (p2.left += o2[0], p2.top += o2[1]), e2.popper = p2, e2;
  }
  var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator, oe = (function() {
    for (var e2 = ["Edge", "Trident", "Firefox"], t2 = 0; t2 < e2.length; t2 += 1) if (te && 0 <= navigator.userAgent.indexOf(e2[t2])) return 1;
    return 0;
  })(), ne = te && window.Promise, ie = ne ? function(e2) {
    var t2 = false;
    return function() {
      t2 || (t2 = true, window.Promise.resolve().then(function() {
        t2 = false, e2();
      }));
    };
  } : function(e2) {
    var t2 = false;
    return function() {
      t2 || (t2 = true, setTimeout(function() {
        t2 = false, e2();
      }, oe));
    };
  }, re = te && !!(window.MSInputMethodContext && document.documentMode), pe = te && /MSIE 10/.test(navigator.userAgent), se = function(e2, t2) {
    if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
  }, de = /* @__PURE__ */ (function() {
    function e2(e3, t2) {
      for (var o2, n2 = 0; n2 < t2.length; n2++) o2 = t2[n2], o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
    }
    return function(t2, o2, n2) {
      return o2 && e2(t2.prototype, o2), n2 && e2(t2, n2), t2;
    };
  })(), ae = function(e2, t2, o2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: o2, enumerable: true, configurable: true, writable: true }) : e2[t2] = o2, e2;
  }, le = Object.assign || function(e2) {
    for (var t2, o2 = 1; o2 < arguments.length; o2++) for (var n2 in t2 = arguments[o2], t2) Object.prototype.hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
    return e2;
  }, fe = te && /Firefox/i.test(navigator.userAgent), me = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], he = me.slice(3), ce = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" }, ge = (function() {
    function t2(o2, n2) {
      var i2 = this, r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      se(this, t2), this.scheduleUpdate = function() {
        return requestAnimationFrame(i2.update);
      }, this.update = ie(this.update.bind(this)), this.options = le({}, t2.Defaults, r2), this.state = { isDestroyed: false, isCreated: false, scrollParents: [] }, this.reference = o2 && o2.jquery ? o2[0] : o2, this.popper = n2 && n2.jquery ? n2[0] : n2, this.options.modifiers = {}, Object.keys(le({}, t2.Defaults.modifiers, r2.modifiers)).forEach(function(e2) {
        i2.options.modifiers[e2] = le({}, t2.Defaults.modifiers[e2] || {}, r2.modifiers ? r2.modifiers[e2] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function(e2) {
        return le({ name: e2 }, i2.options.modifiers[e2]);
      }).sort(function(e2, t3) {
        return e2.order - t3.order;
      }), this.modifiers.forEach(function(t3) {
        t3.enabled && e(t3.onLoad) && t3.onLoad(i2.reference, i2.popper, i2.options, t3, i2.state);
      }), this.update();
      var p2 = this.options.eventsEnabled;
      p2 && this.enableEventListeners(), this.state.eventsEnabled = p2;
    }
    return de(t2, [{ key: "update", value: function() {
      return k.call(this);
    } }, { key: "destroy", value: function() {
      return H.call(this);
    } }, { key: "enableEventListeners", value: function() {
      return I.call(this);
    } }, { key: "disableEventListeners", value: function() {
      return U.call(this);
    } }]), t2;
  })();
  return ge.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ge.placements = me, ge.Defaults = { placement: "bottom", positionFixed: false, eventsEnabled: true, removeOnDestroy: false, onCreate: function() {
  }, onUpdate: function() {
  }, modifiers: { shift: { order: 100, enabled: true, fn: function(e2) {
    var t2 = e2.placement, o2 = t2.split("-")[0], n2 = t2.split("-")[1];
    if (n2) {
      var i2 = e2.offsets, r2 = i2.reference, p2 = i2.popper, s2 = -1 !== ["bottom", "top"].indexOf(o2), d2 = s2 ? "left" : "top", a2 = s2 ? "width" : "height", l2 = { start: ae({}, d2, r2[d2]), end: ae({}, d2, r2[d2] + r2[a2] - p2[a2]) };
      e2.offsets.popper = le({}, p2, l2[n2]);
    }
    return e2;
  } }, offset: { order: 200, enabled: true, fn: J, offset: 0 }, preventOverflow: { order: 300, enabled: true, fn: function(e2, t2) {
    var o2 = t2.boundariesElement || p(e2.instance.popper);
    e2.instance.reference === o2 && (o2 = p(o2));
    var n2 = B("transform"), i2 = e2.instance.popper.style, r2 = i2.top, s2 = i2.left, d2 = i2[n2];
    i2.top = "", i2.left = "", i2[n2] = "";
    var a2 = v(e2.instance.popper, e2.instance.reference, t2.padding, o2, e2.positionFixed);
    i2.top = r2, i2.left = s2, i2[n2] = d2, t2.boundaries = a2;
    var l2 = t2.priority, f2 = e2.offsets.popper, m2 = { primary: function(e3) {
      var o3 = f2[e3];
      return f2[e3] < a2[e3] && !t2.escapeWithReference && (o3 = ee(f2[e3], a2[e3])), ae({}, e3, o3);
    }, secondary: function(e3) {
      var o3 = "right" === e3 ? "left" : "top", n3 = f2[o3];
      return f2[e3] > a2[e3] && !t2.escapeWithReference && (n3 = Q(f2[o3], a2[e3] - ("right" === e3 ? f2.width : f2.height))), ae({}, o3, n3);
    } };
    return l2.forEach(function(e3) {
      var t3 = -1 === ["left", "top"].indexOf(e3) ? "secondary" : "primary";
      f2 = le({}, f2, m2[t3](e3));
    }), e2.offsets.popper = f2, e2;
  }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: true, fn: function(e2) {
    var t2 = e2.offsets, o2 = t2.popper, n2 = t2.reference, i2 = e2.placement.split("-")[0], r2 = Z, p2 = -1 !== ["top", "bottom"].indexOf(i2), s2 = p2 ? "right" : "bottom", d2 = p2 ? "left" : "top", a2 = p2 ? "width" : "height";
    return o2[s2] < r2(n2[d2]) && (e2.offsets.popper[d2] = r2(n2[d2]) - o2[a2]), o2[d2] > r2(n2[s2]) && (e2.offsets.popper[d2] = r2(n2[s2])), e2;
  } }, arrow: { order: 500, enabled: true, fn: function(e2, o2) {
    var n2;
    if (!K(e2.instance.modifiers, "arrow", "keepTogether")) return e2;
    var i2 = o2.element;
    if ("string" == typeof i2) {
      if (i2 = e2.instance.popper.querySelector(i2), !i2) return e2;
    } else if (!e2.instance.popper.contains(i2)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e2;
    var r2 = e2.placement.split("-")[0], p2 = e2.offsets, s2 = p2.popper, d2 = p2.reference, a2 = -1 !== ["left", "right"].indexOf(r2), l2 = a2 ? "height" : "width", f2 = a2 ? "Top" : "Left", m2 = f2.toLowerCase(), h2 = a2 ? "left" : "top", c2 = a2 ? "bottom" : "right", u2 = S(i2)[l2];
    d2[c2] - u2 < s2[m2] && (e2.offsets.popper[m2] -= s2[m2] - (d2[c2] - u2)), d2[m2] + u2 > s2[c2] && (e2.offsets.popper[m2] += d2[m2] + u2 - s2[c2]), e2.offsets.popper = g(e2.offsets.popper);
    var b2 = d2[m2] + d2[l2] / 2 - u2 / 2, w2 = t(e2.instance.popper), y2 = parseFloat(w2["margin" + f2]), E2 = parseFloat(w2["border" + f2 + "Width"]), v2 = b2 - e2.offsets.popper[m2] - y2 - E2;
    return v2 = ee(Q(s2[l2] - u2, v2), 0), e2.arrowElement = i2, e2.offsets.arrow = (n2 = {}, ae(n2, m2, $(v2)), ae(n2, h2, ""), n2), e2;
  }, element: "[x-arrow]" }, flip: { order: 600, enabled: true, fn: function(e2, t2) {
    if (W(e2.instance.modifiers, "inner")) return e2;
    if (e2.flipped && e2.placement === e2.originalPlacement) return e2;
    var o2 = v(e2.instance.popper, e2.instance.reference, t2.padding, t2.boundariesElement, e2.positionFixed), n2 = e2.placement.split("-")[0], i2 = T(n2), r2 = e2.placement.split("-")[1] || "", p2 = [];
    switch (t2.behavior) {
      case ce.FLIP:
        p2 = [n2, i2];
        break;
      case ce.CLOCKWISE:
        p2 = G(n2);
        break;
      case ce.COUNTERCLOCKWISE:
        p2 = G(n2, true);
        break;
      default:
        p2 = t2.behavior;
    }
    return p2.forEach(function(s2, d2) {
      if (n2 !== s2 || p2.length === d2 + 1) return e2;
      n2 = e2.placement.split("-")[0], i2 = T(n2);
      var a2 = e2.offsets.popper, l2 = e2.offsets.reference, f2 = Z, m2 = "left" === n2 && f2(a2.right) > f2(l2.left) || "right" === n2 && f2(a2.left) < f2(l2.right) || "top" === n2 && f2(a2.bottom) > f2(l2.top) || "bottom" === n2 && f2(a2.top) < f2(l2.bottom), h2 = f2(a2.left) < f2(o2.left), c2 = f2(a2.right) > f2(o2.right), g2 = f2(a2.top) < f2(o2.top), u2 = f2(a2.bottom) > f2(o2.bottom), b2 = "left" === n2 && h2 || "right" === n2 && c2 || "top" === n2 && g2 || "bottom" === n2 && u2, w2 = -1 !== ["top", "bottom"].indexOf(n2), y2 = !!t2.flipVariations && (w2 && "start" === r2 && h2 || w2 && "end" === r2 && c2 || !w2 && "start" === r2 && g2 || !w2 && "end" === r2 && u2), E2 = !!t2.flipVariationsByContent && (w2 && "start" === r2 && c2 || w2 && "end" === r2 && h2 || !w2 && "start" === r2 && u2 || !w2 && "end" === r2 && g2), v2 = y2 || E2;
      (m2 || b2 || v2) && (e2.flipped = true, (m2 || b2) && (n2 = p2[d2 + 1]), v2 && (r2 = z(r2)), e2.placement = n2 + (r2 ? "-" + r2 : ""), e2.offsets.popper = le({}, e2.offsets.popper, C(e2.instance.popper, e2.offsets.reference, e2.placement)), e2 = P(e2.instance.modifiers, e2, "flip"));
    }), e2;
  }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: false, flipVariationsByContent: false }, inner: { order: 700, enabled: false, fn: function(e2) {
    var t2 = e2.placement, o2 = t2.split("-")[0], n2 = e2.offsets, i2 = n2.popper, r2 = n2.reference, p2 = -1 !== ["left", "right"].indexOf(o2), s2 = -1 === ["top", "left"].indexOf(o2);
    return i2[p2 ? "left" : "top"] = r2[o2] - (s2 ? i2[p2 ? "width" : "height"] : 0), e2.placement = T(t2), e2.offsets.popper = g(i2), e2;
  } }, hide: { order: 800, enabled: true, fn: function(e2) {
    if (!K(e2.instance.modifiers, "hide", "preventOverflow")) return e2;
    var t2 = e2.offsets.reference, o2 = D(e2.instance.modifiers, function(e3) {
      return "preventOverflow" === e3.name;
    }).boundaries;
    if (t2.bottom < o2.top || t2.left > o2.right || t2.top > o2.bottom || t2.right < o2.left) {
      if (true === e2.hide) return e2;
      e2.hide = true, e2.attributes["x-out-of-boundaries"] = "";
    } else {
      if (false === e2.hide) return e2;
      e2.hide = false, e2.attributes["x-out-of-boundaries"] = false;
    }
    return e2;
  } }, computeStyle: { order: 850, enabled: true, fn: function(e2, t2) {
    var o2 = t2.x, n2 = t2.y, i2 = e2.offsets.popper, r2 = D(e2.instance.modifiers, function(e3) {
      return "applyStyle" === e3.name;
    }).gpuAcceleration;
    void 0 !== r2 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
    var s2, d2, a2 = void 0 === r2 ? t2.gpuAcceleration : r2, l2 = p(e2.instance.popper), f2 = u(l2), m2 = { position: i2.position }, h2 = q(e2, 2 > window.devicePixelRatio || !fe), c2 = "bottom" === o2 ? "top" : "bottom", g2 = "right" === n2 ? "left" : "right", b2 = B("transform");
    if (d2 = "bottom" == c2 ? "HTML" === l2.nodeName ? -l2.clientHeight + h2.bottom : -f2.height + h2.bottom : h2.top, s2 = "right" == g2 ? "HTML" === l2.nodeName ? -l2.clientWidth + h2.right : -f2.width + h2.right : h2.left, a2 && b2) m2[b2] = "translate3d(" + s2 + "px, " + d2 + "px, 0)", m2[c2] = 0, m2[g2] = 0, m2.willChange = "transform";
    else {
      var w2 = "bottom" == c2 ? -1 : 1, y2 = "right" == g2 ? -1 : 1;
      m2[c2] = d2 * w2, m2[g2] = s2 * y2, m2.willChange = c2 + ", " + g2;
    }
    var E2 = { "x-placement": e2.placement };
    return e2.attributes = le({}, E2, e2.attributes), e2.styles = le({}, m2, e2.styles), e2.arrowStyles = le({}, e2.offsets.arrow, e2.arrowStyles), e2;
  }, gpuAcceleration: true, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: true, fn: function(e2) {
    return V(e2.instance.popper, e2.styles), j(e2.instance.popper, e2.attributes), e2.arrowElement && Object.keys(e2.arrowStyles).length && V(e2.arrowElement, e2.arrowStyles), e2;
  }, onLoad: function(e2, t2, o2, n2, i2) {
    var r2 = L(i2, t2, e2, o2.positionFixed), p2 = O(o2.placement, r2, t2, e2, o2.modifiers.flip.boundariesElement, o2.modifiers.flip.padding);
    return t2.setAttribute("x-placement", p2), V(t2, { position: o2.positionFixed ? "fixed" : "absolute" }), o2;
  }, gpuAcceleration: void 0 } } }, ge;
});
/*!
  * Bootstrap v4.6.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery, t.Popper);
})(this, (function(t, e, n) {
  "use strict";
  function i(t2) {
    return t2 && "object" == typeof t2 && "default" in t2 ? t2 : { default: t2 };
  }
  var o = i(e), a = i(n);
  function s(t2, e2) {
    for (var n2 = 0; n2 < e2.length; n2++) {
      var i2 = e2[n2];
      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
    }
  }
  function l(t2, e2, n2) {
    return e2 && s(t2.prototype, e2), n2 && s(t2, n2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
  }
  function r() {
    return r = Object.assign ? Object.assign.bind() : function(t2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var n2 = arguments[e2];
        for (var i2 in n2) Object.prototype.hasOwnProperty.call(n2, i2) && (t2[i2] = n2[i2]);
      }
      return t2;
    }, r.apply(this, arguments);
  }
  function u(t2, e2) {
    return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
      return t3.__proto__ = e3, t3;
    }, u(t2, e2);
  }
  var f = "transitionend";
  var d = { TRANSITION_END: "bsTransitionEnd", getUID: function(t2) {
    do {
      t2 += ~~(1e6 * Math.random());
    } while (document.getElementById(t2));
    return t2;
  }, getSelectorFromElement: function(t2) {
    var e2 = t2.getAttribute("data-target");
    if (!e2 || "#" === e2) {
      var n2 = t2.getAttribute("href");
      e2 = n2 && "#" !== n2 ? n2.trim() : "";
    }
    try {
      return document.querySelector(e2) ? e2 : null;
    } catch (t3) {
      return null;
    }
  }, getTransitionDurationFromElement: function(t2) {
    if (!t2) return 0;
    var e2 = o.default(t2).css("transition-duration"), n2 = o.default(t2).css("transition-delay"), i2 = parseFloat(e2), a2 = parseFloat(n2);
    return i2 || a2 ? (e2 = e2.split(",")[0], n2 = n2.split(",")[0], 1e3 * (parseFloat(e2) + parseFloat(n2))) : 0;
  }, reflow: function(t2) {
    return t2.offsetHeight;
  }, triggerTransitionEnd: function(t2) {
    o.default(t2).trigger(f);
  }, supportsTransitionEnd: function() {
    return Boolean(f);
  }, isElement: function(t2) {
    return (t2[0] || t2).nodeType;
  }, typeCheckConfig: function(t2, e2, n2) {
    for (var i2 in n2) if (Object.prototype.hasOwnProperty.call(n2, i2)) {
      var o2 = n2[i2], a2 = e2[i2], s2 = a2 && d.isElement(a2) ? "element" : null === (l2 = a2) || "undefined" == typeof l2 ? "" + l2 : {}.toString.call(l2).match(/\s([a-z]+)/i)[1].toLowerCase();
      if (!new RegExp(o2).test(s2)) throw new Error(t2.toUpperCase() + ': Option "' + i2 + '" provided type "' + s2 + '" but expected type "' + o2 + '".');
    }
    var l2;
  }, findShadowRoot: function(t2) {
    if (!document.documentElement.attachShadow) return null;
    if ("function" == typeof t2.getRootNode) {
      var e2 = t2.getRootNode();
      return e2 instanceof ShadowRoot ? e2 : null;
    }
    return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? d.findShadowRoot(t2.parentNode) : null;
  }, jQueryDetection: function() {
    if ("undefined" == typeof o.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t2 = o.default.fn.jquery.split(" ")[0].split(".");
    if (t2[0] < 2 && t2[1] < 9 || 1 === t2[0] && 9 === t2[1] && t2[2] < 1 || t2[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  } };
  d.jQueryDetection(), o.default.fn.emulateTransitionEnd = function(t2) {
    var e2 = this, n2 = false;
    return o.default(this).one(d.TRANSITION_END, (function() {
      n2 = true;
    })), setTimeout((function() {
      n2 || d.triggerTransitionEnd(e2);
    }), t2), this;
  }, o.default.event.special[d.TRANSITION_END] = { bindType: f, delegateType: f, handle: function(t2) {
    if (o.default(t2.target).is(this)) return t2.handleObj.handler.apply(this, arguments);
  } };
  var c = "bs.alert", h = o.default.fn.alert, g = (function() {
    function t2(t3) {
      this._element = t3;
    }
    var e2 = t2.prototype;
    return e2.close = function(t3) {
      var e3 = this._element;
      t3 && (e3 = this._getRootElement(t3)), this._triggerCloseEvent(e3).isDefaultPrevented() || this._removeElement(e3);
    }, e2.dispose = function() {
      o.default.removeData(this._element, c), this._element = null;
    }, e2._getRootElement = function(t3) {
      var e3 = d.getSelectorFromElement(t3), n2 = false;
      return e3 && (n2 = document.querySelector(e3)), n2 || (n2 = o.default(t3).closest(".alert")[0]), n2;
    }, e2._triggerCloseEvent = function(t3) {
      var e3 = o.default.Event("close.bs.alert");
      return o.default(t3).trigger(e3), e3;
    }, e2._removeElement = function(t3) {
      var e3 = this;
      if (o.default(t3).removeClass("show"), o.default(t3).hasClass("fade")) {
        var n2 = d.getTransitionDurationFromElement(t3);
        o.default(t3).one(d.TRANSITION_END, (function(n3) {
          return e3._destroyElement(t3, n3);
        })).emulateTransitionEnd(n2);
      } else this._destroyElement(t3);
    }, e2._destroyElement = function(t3) {
      o.default(t3).detach().trigger("closed.bs.alert").remove();
    }, t2._jQueryInterface = function(e3) {
      return this.each((function() {
        var n2 = o.default(this), i2 = n2.data(c);
        i2 || (i2 = new t2(this), n2.data(c, i2)), "close" === e3 && i2[e3](this);
      }));
    }, t2._handleDismiss = function(t3) {
      return function(e3) {
        e3 && e3.preventDefault(), t3.close(this);
      };
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }]), t2;
  })();
  o.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', g._handleDismiss(new g())), o.default.fn.alert = g._jQueryInterface, o.default.fn.alert.Constructor = g, o.default.fn.alert.noConflict = function() {
    return o.default.fn.alert = h, g._jQueryInterface;
  };
  var m = "bs.button", p = o.default.fn.button, _ = "active", v = '[data-toggle^="button"]', y = 'input:not([type="hidden"])', b = ".btn", E = (function() {
    function t2(t3) {
      this._element = t3, this.shouldAvoidTriggerChange = false;
    }
    var e2 = t2.prototype;
    return e2.toggle = function() {
      var t3 = true, e3 = true, n2 = o.default(this._element).closest('[data-toggle="buttons"]')[0];
      if (n2) {
        var i2 = this._element.querySelector(y);
        if (i2) {
          if ("radio" === i2.type) if (i2.checked && this._element.classList.contains(_)) t3 = false;
          else {
            var a2 = n2.querySelector(".active");
            a2 && o.default(a2).removeClass(_);
          }
          t3 && ("checkbox" !== i2.type && "radio" !== i2.type || (i2.checked = !this._element.classList.contains(_)), this.shouldAvoidTriggerChange || o.default(i2).trigger("change")), i2.focus(), e3 = false;
        }
      }
      this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e3 && this._element.setAttribute("aria-pressed", !this._element.classList.contains(_)), t3 && o.default(this._element).toggleClass(_));
    }, e2.dispose = function() {
      o.default.removeData(this._element, m), this._element = null;
    }, t2._jQueryInterface = function(e3, n2) {
      return this.each((function() {
        var i2 = o.default(this), a2 = i2.data(m);
        a2 || (a2 = new t2(this), i2.data(m, a2)), a2.shouldAvoidTriggerChange = n2, "toggle" === e3 && a2[e3]();
      }));
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }]), t2;
  })();
  o.default(document).on("click.bs.button.data-api", v, (function(t2) {
    var e2 = t2.target, n2 = e2;
    if (o.default(e2).hasClass("btn") || (e2 = o.default(e2).closest(b)[0]), !e2 || e2.hasAttribute("disabled") || e2.classList.contains("disabled")) t2.preventDefault();
    else {
      var i2 = e2.querySelector(y);
      if (i2 && (i2.hasAttribute("disabled") || i2.classList.contains("disabled"))) return void t2.preventDefault();
      "INPUT" !== n2.tagName && "LABEL" === e2.tagName || E._jQueryInterface.call(o.default(e2), "toggle", "INPUT" === n2.tagName);
    }
  })).on("focus.bs.button.data-api blur.bs.button.data-api", v, (function(t2) {
    var e2 = o.default(t2.target).closest(b)[0];
    o.default(e2).toggleClass("focus", /^focus(in)?$/.test(t2.type));
  })), o.default(window).on("load.bs.button.data-api", (function() {
    for (var t2 = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e2 = 0, n2 = t2.length; e2 < n2; e2++) {
      var i2 = t2[e2], o2 = i2.querySelector(y);
      o2.checked || o2.hasAttribute("checked") ? i2.classList.add(_) : i2.classList.remove(_);
    }
    for (var a2 = 0, s2 = (t2 = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; a2 < s2; a2++) {
      var l2 = t2[a2];
      "true" === l2.getAttribute("aria-pressed") ? l2.classList.add(_) : l2.classList.remove(_);
    }
  })), o.default.fn.button = E._jQueryInterface, o.default.fn.button.Constructor = E, o.default.fn.button.noConflict = function() {
    return o.default.fn.button = p, E._jQueryInterface;
  };
  var T = "carousel", w = "bs.carousel", C = o.default.fn[T], S = "active", N = "next", D = "prev", A = "slid.bs.carousel", I = ".active.carousel-item", k = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true }, O = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, j = { TOUCH: "touch", PEN: "pen" }, P = (function() {
    function t2(t3, e3) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e3), this._element = t3, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }
    var e2 = t2.prototype;
    return e2.next = function() {
      this._isSliding || this._slide(N);
    }, e2.nextWhenVisible = function() {
      var t3 = o.default(this._element);
      !document.hidden && t3.is(":visible") && "hidden" !== t3.css("visibility") && this.next();
    }, e2.prev = function() {
      this._isSliding || this._slide(D);
    }, e2.pause = function(t3) {
      t3 || (this._isPaused = true), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
    }, e2.cycle = function(t3) {
      t3 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, e2.to = function(t3) {
      var e3 = this;
      this._activeElement = this._element.querySelector(I);
      var n2 = this._getItemIndex(this._activeElement);
      if (!(t3 > this._items.length - 1 || t3 < 0)) if (this._isSliding) o.default(this._element).one(A, (function() {
        return e3.to(t3);
      }));
      else {
        if (n2 === t3) return this.pause(), void this.cycle();
        var i2 = t3 > n2 ? N : D;
        this._slide(i2, this._items[t3]);
      }
    }, e2.dispose = function() {
      o.default(this._element).off(".bs.carousel"), o.default.removeData(this._element, w), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, e2._getConfig = function(t3) {
      return t3 = r({}, k, t3), d.typeCheckConfig(T, t3, O), t3;
    }, e2._handleSwipe = function() {
      var t3 = Math.abs(this.touchDeltaX);
      if (!(t3 <= 40)) {
        var e3 = t3 / this.touchDeltaX;
        this.touchDeltaX = 0, e3 > 0 && this.prev(), e3 < 0 && this.next();
      }
    }, e2._addEventListeners = function() {
      var t3 = this;
      this._config.keyboard && o.default(this._element).on("keydown.bs.carousel", (function(e3) {
        return t3._keydown(e3);
      })), "hover" === this._config.pause && o.default(this._element).on("mouseenter.bs.carousel", (function(e3) {
        return t3.pause(e3);
      })).on("mouseleave.bs.carousel", (function(e3) {
        return t3.cycle(e3);
      })), this._config.touch && this._addTouchEventListeners();
    }, e2._addTouchEventListeners = function() {
      var t3 = this;
      if (this._touchSupported) {
        var e3 = function(e4) {
          t3._pointerEvent && j[e4.originalEvent.pointerType.toUpperCase()] ? t3.touchStartX = e4.originalEvent.clientX : t3._pointerEvent || (t3.touchStartX = e4.originalEvent.touches[0].clientX);
        }, n2 = function(e4) {
          t3._pointerEvent && j[e4.originalEvent.pointerType.toUpperCase()] && (t3.touchDeltaX = e4.originalEvent.clientX - t3.touchStartX), t3._handleSwipe(), "hover" === t3._config.pause && (t3.pause(), t3.touchTimeout && clearTimeout(t3.touchTimeout), t3.touchTimeout = setTimeout((function(e5) {
            return t3.cycle(e5);
          }), 500 + t3._config.interval));
        };
        o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(t4) {
          return t4.preventDefault();
        })), this._pointerEvent ? (o.default(this._element).on("pointerdown.bs.carousel", (function(t4) {
          return e3(t4);
        })), o.default(this._element).on("pointerup.bs.carousel", (function(t4) {
          return n2(t4);
        })), this._element.classList.add("pointer-event")) : (o.default(this._element).on("touchstart.bs.carousel", (function(t4) {
          return e3(t4);
        })), o.default(this._element).on("touchmove.bs.carousel", (function(e4) {
          return (function(e5) {
            t3.touchDeltaX = e5.originalEvent.touches && e5.originalEvent.touches.length > 1 ? 0 : e5.originalEvent.touches[0].clientX - t3.touchStartX;
          })(e4);
        })), o.default(this._element).on("touchend.bs.carousel", (function(t4) {
          return n2(t4);
        })));
      }
    }, e2._keydown = function(t3) {
      if (!/input|textarea/i.test(t3.target.tagName)) switch (t3.which) {
        case 37:
          t3.preventDefault(), this.prev();
          break;
        case 39:
          t3.preventDefault(), this.next();
      }
    }, e2._getItemIndex = function(t3) {
      return this._items = t3 && t3.parentNode ? [].slice.call(t3.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t3);
    }, e2._getItemByDirection = function(t3, e3) {
      var n2 = t3 === N, i2 = t3 === D, o2 = this._getItemIndex(e3), a2 = this._items.length - 1;
      if ((i2 && 0 === o2 || n2 && o2 === a2) && !this._config.wrap) return e3;
      var s2 = (o2 + (t3 === D ? -1 : 1)) % this._items.length;
      return -1 === s2 ? this._items[this._items.length - 1] : this._items[s2];
    }, e2._triggerSlideEvent = function(t3, e3) {
      var n2 = this._getItemIndex(t3), i2 = this._getItemIndex(this._element.querySelector(I)), a2 = o.default.Event("slide.bs.carousel", { relatedTarget: t3, direction: e3, from: i2, to: n2 });
      return o.default(this._element).trigger(a2), a2;
    }, e2._setActiveIndicatorElement = function(t3) {
      if (this._indicatorsElement) {
        var e3 = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
        o.default(e3).removeClass(S);
        var n2 = this._indicatorsElement.children[this._getItemIndex(t3)];
        n2 && o.default(n2).addClass(S);
      }
    }, e2._updateInterval = function() {
      var t3 = this._activeElement || this._element.querySelector(I);
      if (t3) {
        var e3 = parseInt(t3.getAttribute("data-interval"), 10);
        e3 ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e3) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, e2._slide = function(t3, e3) {
      var n2, i2, a2, s2 = this, l2 = this._element.querySelector(I), r2 = this._getItemIndex(l2), u2 = e3 || l2 && this._getItemByDirection(t3, l2), f2 = this._getItemIndex(u2), c2 = Boolean(this._interval);
      if (t3 === N ? (n2 = "carousel-item-left", i2 = "carousel-item-next", a2 = "left") : (n2 = "carousel-item-right", i2 = "carousel-item-prev", a2 = "right"), u2 && o.default(u2).hasClass(S)) this._isSliding = false;
      else if (!this._triggerSlideEvent(u2, a2).isDefaultPrevented() && l2 && u2) {
        this._isSliding = true, c2 && this.pause(), this._setActiveIndicatorElement(u2), this._activeElement = u2;
        var h2 = o.default.Event(A, { relatedTarget: u2, direction: a2, from: r2, to: f2 });
        if (o.default(this._element).hasClass("slide")) {
          o.default(u2).addClass(i2), d.reflow(u2), o.default(l2).addClass(n2), o.default(u2).addClass(n2);
          var g2 = d.getTransitionDurationFromElement(l2);
          o.default(l2).one(d.TRANSITION_END, (function() {
            o.default(u2).removeClass(n2 + " " + i2).addClass(S), o.default(l2).removeClass("active " + i2 + " " + n2), s2._isSliding = false, setTimeout((function() {
              return o.default(s2._element).trigger(h2);
            }), 0);
          })).emulateTransitionEnd(g2);
        } else o.default(l2).removeClass(S), o.default(u2).addClass(S), this._isSliding = false, o.default(this._element).trigger(h2);
        c2 && this.cycle();
      }
    }, t2._jQueryInterface = function(e3) {
      return this.each((function() {
        var n2 = o.default(this).data(w), i2 = r({}, k, o.default(this).data());
        "object" == typeof e3 && (i2 = r({}, i2, e3));
        var a2 = "string" == typeof e3 ? e3 : i2.slide;
        if (n2 || (n2 = new t2(this, i2), o.default(this).data(w, n2)), "number" == typeof e3) n2.to(e3);
        else if ("string" == typeof a2) {
          if ("undefined" == typeof n2[a2]) throw new TypeError('No method named "' + a2 + '"');
          n2[a2]();
        } else i2.interval && i2.ride && (n2.pause(), n2.cycle());
      }));
    }, t2._dataApiClickHandler = function(e3) {
      var n2 = d.getSelectorFromElement(this);
      if (n2) {
        var i2 = o.default(n2)[0];
        if (i2 && o.default(i2).hasClass("carousel")) {
          var a2 = r({}, o.default(i2).data(), o.default(this).data()), s2 = this.getAttribute("data-slide-to");
          s2 && (a2.interval = false), t2._jQueryInterface.call(o.default(i2), a2), s2 && o.default(i2).data(w).to(s2), e3.preventDefault();
        }
      }
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return k;
    } }]), t2;
  })();
  o.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", P._dataApiClickHandler), o.default(window).on("load.bs.carousel.data-api", (function() {
    for (var t2 = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e2 = 0, n2 = t2.length; e2 < n2; e2++) {
      var i2 = o.default(t2[e2]);
      P._jQueryInterface.call(i2, i2.data());
    }
  })), o.default.fn[T] = P._jQueryInterface, o.default.fn[T].Constructor = P, o.default.fn[T].noConflict = function() {
    return o.default.fn[T] = C, P._jQueryInterface;
  };
  var L = "collapse", R = "bs.collapse", x = o.default.fn[L], q = "show", F = "collapse", Q = "collapsing", B = "collapsed", H = "width", U = '[data-toggle="collapse"]', M = { toggle: true, parent: "" }, W = { toggle: "boolean", parent: "(string|element)" }, V = (function() {
    function t2(t3, e3) {
      this._isTransitioning = false, this._element = t3, this._config = this._getConfig(e3), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t3.id + '"],[data-toggle="collapse"][data-target="#' + t3.id + '"]'));
      for (var n2 = [].slice.call(document.querySelectorAll(U)), i2 = 0, o2 = n2.length; i2 < o2; i2++) {
        var a2 = n2[i2], s2 = d.getSelectorFromElement(a2), l2 = [].slice.call(document.querySelectorAll(s2)).filter((function(e4) {
          return e4 === t3;
        }));
        null !== s2 && l2.length > 0 && (this._selector = s2, this._triggerArray.push(a2));
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }
    var e2 = t2.prototype;
    return e2.toggle = function() {
      o.default(this._element).hasClass(q) ? this.hide() : this.show();
    }, e2.show = function() {
      var e3, n2, i2 = this;
      if (!(this._isTransitioning || o.default(this._element).hasClass(q) || (this._parent && 0 === (e3 = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t3) {
        return "string" == typeof i2._config.parent ? t3.getAttribute("data-parent") === i2._config.parent : t3.classList.contains(F);
      }))).length && (e3 = null), e3 && (n2 = o.default(e3).not(this._selector).data(R)) && n2._isTransitioning))) {
        var a2 = o.default.Event("show.bs.collapse");
        if (o.default(this._element).trigger(a2), !a2.isDefaultPrevented()) {
          e3 && (t2._jQueryInterface.call(o.default(e3).not(this._selector), "hide"), n2 || o.default(e3).data(R, null));
          var s2 = this._getDimension();
          o.default(this._element).removeClass(F).addClass(Q), this._element.style[s2] = 0, this._triggerArray.length && o.default(this._triggerArray).removeClass(B).attr("aria-expanded", true), this.setTransitioning(true);
          var l2 = "scroll" + (s2[0].toUpperCase() + s2.slice(1)), r2 = d.getTransitionDurationFromElement(this._element);
          o.default(this._element).one(d.TRANSITION_END, (function() {
            o.default(i2._element).removeClass(Q).addClass("collapse show"), i2._element.style[s2] = "", i2.setTransitioning(false), o.default(i2._element).trigger("shown.bs.collapse");
          })).emulateTransitionEnd(r2), this._element.style[s2] = this._element[l2] + "px";
        }
      }
    }, e2.hide = function() {
      var t3 = this;
      if (!this._isTransitioning && o.default(this._element).hasClass(q)) {
        var e3 = o.default.Event("hide.bs.collapse");
        if (o.default(this._element).trigger(e3), !e3.isDefaultPrevented()) {
          var n2 = this._getDimension();
          this._element.style[n2] = this._element.getBoundingClientRect()[n2] + "px", d.reflow(this._element), o.default(this._element).addClass(Q).removeClass("collapse show");
          var i2 = this._triggerArray.length;
          if (i2 > 0) for (var a2 = 0; a2 < i2; a2++) {
            var s2 = this._triggerArray[a2], l2 = d.getSelectorFromElement(s2);
            null !== l2 && (o.default([].slice.call(document.querySelectorAll(l2))).hasClass(q) || o.default(s2).addClass(B).attr("aria-expanded", false));
          }
          this.setTransitioning(true), this._element.style[n2] = "";
          var r2 = d.getTransitionDurationFromElement(this._element);
          o.default(this._element).one(d.TRANSITION_END, (function() {
            t3.setTransitioning(false), o.default(t3._element).removeClass(Q).addClass(F).trigger("hidden.bs.collapse");
          })).emulateTransitionEnd(r2);
        }
      }
    }, e2.setTransitioning = function(t3) {
      this._isTransitioning = t3;
    }, e2.dispose = function() {
      o.default.removeData(this._element, R), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, e2._getConfig = function(t3) {
      return (t3 = r({}, M, t3)).toggle = Boolean(t3.toggle), d.typeCheckConfig(L, t3, W), t3;
    }, e2._getDimension = function() {
      return o.default(this._element).hasClass(H) ? H : "height";
    }, e2._getParent = function() {
      var e3, n2 = this;
      d.isElement(this._config.parent) ? (e3 = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e3 = this._config.parent[0])) : e3 = document.querySelector(this._config.parent);
      var i2 = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', a2 = [].slice.call(e3.querySelectorAll(i2));
      return o.default(a2).each((function(e4, i3) {
        n2._addAriaAndCollapsedClass(t2._getTargetFromElement(i3), [i3]);
      })), e3;
    }, e2._addAriaAndCollapsedClass = function(t3, e3) {
      var n2 = o.default(t3).hasClass(q);
      e3.length && o.default(e3).toggleClass(B, !n2).attr("aria-expanded", n2);
    }, t2._getTargetFromElement = function(t3) {
      var e3 = d.getSelectorFromElement(t3);
      return e3 ? document.querySelector(e3) : null;
    }, t2._jQueryInterface = function(e3) {
      return this.each((function() {
        var n2 = o.default(this), i2 = n2.data(R), a2 = r({}, M, n2.data(), "object" == typeof e3 && e3 ? e3 : {});
        if (!i2 && a2.toggle && "string" == typeof e3 && /show|hide/.test(e3) && (a2.toggle = false), i2 || (i2 = new t2(this, a2), n2.data(R, i2)), "string" == typeof e3) {
          if ("undefined" == typeof i2[e3]) throw new TypeError('No method named "' + e3 + '"');
          i2[e3]();
        }
      }));
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return M;
    } }]), t2;
  })();
  o.default(document).on("click.bs.collapse.data-api", U, (function(t2) {
    "A" === t2.currentTarget.tagName && t2.preventDefault();
    var e2 = o.default(this), n2 = d.getSelectorFromElement(this), i2 = [].slice.call(document.querySelectorAll(n2));
    o.default(i2).each((function() {
      var t3 = o.default(this), n3 = t3.data(R) ? "toggle" : e2.data();
      V._jQueryInterface.call(t3, n3);
    }));
  })), o.default.fn[L] = V._jQueryInterface, o.default.fn[L].Constructor = V, o.default.fn[L].noConflict = function() {
    return o.default.fn[L] = x, V._jQueryInterface;
  };
  var z = "dropdown", K = "bs.dropdown", X = o.default.fn[z], Y = new RegExp("38|40|27"), $ = "disabled", J = "show", G = "dropdown-menu-right", Z = "hide.bs.dropdown", tt = "hidden.bs.dropdown", et = "click.bs.dropdown.data-api", nt = "keydown.bs.dropdown.data-api", it = '[data-toggle="dropdown"]', ot = ".dropdown-menu", at = { offset: 0, flip: true, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null }, st = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" }, lt = (function() {
    function t2(t3, e3) {
      this._element = t3, this._popper = null, this._config = this._getConfig(e3), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }
    var e2 = t2.prototype;
    return e2.toggle = function() {
      if (!this._element.disabled && !o.default(this._element).hasClass($)) {
        var e3 = o.default(this._menu).hasClass(J);
        t2._clearMenus(), e3 || this.show(true);
      }
    }, e2.show = function(e3) {
      if (void 0 === e3 && (e3 = false), !(this._element.disabled || o.default(this._element).hasClass($) || o.default(this._menu).hasClass(J))) {
        var n2 = { relatedTarget: this._element }, i2 = o.default.Event("show.bs.dropdown", n2), s2 = t2._getParentFromElement(this._element);
        if (o.default(s2).trigger(i2), !i2.isDefaultPrevented()) {
          if (!this._inNavbar && e3) {
            if ("undefined" == typeof a.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var l2 = this._element;
            "parent" === this._config.reference ? l2 = s2 : d.isElement(this._config.reference) && (l2 = this._config.reference, "undefined" != typeof this._config.reference.jquery && (l2 = this._config.reference[0])), "scrollParent" !== this._config.boundary && o.default(s2).addClass("position-static"), this._popper = new a.default(l2, this._menu, this._getPopperConfig());
          }
          "ontouchstart" in document.documentElement && 0 === o.default(s2).closest(".navbar-nav").length && o.default(document.body).children().on("mouseover", null, o.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", true), o.default(this._menu).toggleClass(J), o.default(s2).toggleClass(J).trigger(o.default.Event("shown.bs.dropdown", n2));
        }
      }
    }, e2.hide = function() {
      if (!this._element.disabled && !o.default(this._element).hasClass($) && o.default(this._menu).hasClass(J)) {
        var e3 = { relatedTarget: this._element }, n2 = o.default.Event(Z, e3), i2 = t2._getParentFromElement(this._element);
        o.default(i2).trigger(n2), n2.isDefaultPrevented() || (this._popper && this._popper.destroy(), o.default(this._menu).toggleClass(J), o.default(i2).toggleClass(J).trigger(o.default.Event(tt, e3)));
      }
    }, e2.dispose = function() {
      o.default.removeData(this._element, K), o.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
    }, e2.update = function() {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, e2._addEventListeners = function() {
      var t3 = this;
      o.default(this._element).on("click.bs.dropdown", (function(e3) {
        e3.preventDefault(), e3.stopPropagation(), t3.toggle();
      }));
    }, e2._getConfig = function(t3) {
      return t3 = r({}, this.constructor.Default, o.default(this._element).data(), t3), d.typeCheckConfig(z, t3, this.constructor.DefaultType), t3;
    }, e2._getMenuElement = function() {
      if (!this._menu) {
        var e3 = t2._getParentFromElement(this._element);
        e3 && (this._menu = e3.querySelector(ot));
      }
      return this._menu;
    }, e2._getPlacement = function() {
      var t3 = o.default(this._element.parentNode), e3 = "bottom-start";
      return t3.hasClass("dropup") ? e3 = o.default(this._menu).hasClass(G) ? "top-end" : "top-start" : t3.hasClass("dropright") ? e3 = "right-start" : t3.hasClass("dropleft") ? e3 = "left-start" : o.default(this._menu).hasClass(G) && (e3 = "bottom-end"), e3;
    }, e2._detectNavbar = function() {
      return o.default(this._element).closest(".navbar").length > 0;
    }, e2._getOffset = function() {
      var t3 = this, e3 = {};
      return "function" == typeof this._config.offset ? e3.fn = function(e4) {
        return e4.offsets = r({}, e4.offsets, t3._config.offset(e4.offsets, t3._element)), e4;
      } : e3.offset = this._config.offset, e3;
    }, e2._getPopperConfig = function() {
      var t3 = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
      return "static" === this._config.display && (t3.modifiers.applyStyle = { enabled: false }), r({}, t3, this._config.popperConfig);
    }, t2._jQueryInterface = function(e3) {
      return this.each((function() {
        var n2 = o.default(this).data(K);
        if (n2 || (n2 = new t2(this, "object" == typeof e3 ? e3 : null), o.default(this).data(K, n2)), "string" == typeof e3) {
          if ("undefined" == typeof n2[e3]) throw new TypeError('No method named "' + e3 + '"');
          n2[e3]();
        }
      }));
    }, t2._clearMenus = function(e3) {
      if (!e3 || 3 !== e3.which && ("keyup" !== e3.type || 9 === e3.which)) for (var n2 = [].slice.call(document.querySelectorAll(it)), i2 = 0, a2 = n2.length; i2 < a2; i2++) {
        var s2 = t2._getParentFromElement(n2[i2]), l2 = o.default(n2[i2]).data(K), r2 = { relatedTarget: n2[i2] };
        if (e3 && "click" === e3.type && (r2.clickEvent = e3), l2) {
          var u2 = l2._menu;
          if (o.default(s2).hasClass(J) && !(e3 && ("click" === e3.type && /input|textarea/i.test(e3.target.tagName) || "keyup" === e3.type && 9 === e3.which) && o.default.contains(s2, e3.target))) {
            var f2 = o.default.Event(Z, r2);
            o.default(s2).trigger(f2), f2.isDefaultPrevented() || ("ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), n2[i2].setAttribute("aria-expanded", "false"), l2._popper && l2._popper.destroy(), o.default(u2).removeClass(J), o.default(s2).removeClass(J).trigger(o.default.Event(tt, r2)));
          }
        }
      }
    }, t2._getParentFromElement = function(t3) {
      var e3, n2 = d.getSelectorFromElement(t3);
      return n2 && (e3 = document.querySelector(n2)), e3 || t3.parentNode;
    }, t2._dataApiKeydownHandler = function(e3) {
      if (!(/input|textarea/i.test(e3.target.tagName) ? 32 === e3.which || 27 !== e3.which && (40 !== e3.which && 38 !== e3.which || o.default(e3.target).closest(ot).length) : !Y.test(e3.which)) && !this.disabled && !o.default(this).hasClass($)) {
        var n2 = t2._getParentFromElement(this), i2 = o.default(n2).hasClass(J);
        if (i2 || 27 !== e3.which) {
          if (e3.preventDefault(), e3.stopPropagation(), !i2 || 27 === e3.which || 32 === e3.which) return 27 === e3.which && o.default(n2.querySelector(it)).trigger("focus"), void o.default(this).trigger("click");
          var a2 = [].slice.call(n2.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t3) {
            return o.default(t3).is(":visible");
          }));
          if (0 !== a2.length) {
            var s2 = a2.indexOf(e3.target);
            38 === e3.which && s2 > 0 && s2--, 40 === e3.which && s2 < a2.length - 1 && s2++, s2 < 0 && (s2 = 0), a2[s2].focus();
          }
        }
      }
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return at;
    } }, { key: "DefaultType", get: function() {
      return st;
    } }]), t2;
  })();
  o.default(document).on(nt, it, lt._dataApiKeydownHandler).on(nt, ot, lt._dataApiKeydownHandler).on(et + " keyup.bs.dropdown.data-api", lt._clearMenus).on(et, it, (function(t2) {
    t2.preventDefault(), t2.stopPropagation(), lt._jQueryInterface.call(o.default(this), "toggle");
  })).on(et, ".dropdown form", (function(t2) {
    t2.stopPropagation();
  })), o.default.fn[z] = lt._jQueryInterface, o.default.fn[z].Constructor = lt, o.default.fn[z].noConflict = function() {
    return o.default.fn[z] = X, lt._jQueryInterface;
  };
  var rt = "bs.modal", ut = o.default.fn.modal, ft = "modal-open", dt = "fade", ct = "show", ht = "modal-static", gt = "hidden.bs.modal", mt = "show.bs.modal", pt = "focusin.bs.modal", _t = "resize.bs.modal", vt = "click.dismiss.bs.modal", yt = "keydown.dismiss.bs.modal", bt = "mousedown.dismiss.bs.modal", Et = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Tt = { backdrop: true, keyboard: true, focus: true, show: true }, wt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Ct = (function() {
    function t2(t3, e3) {
      this._config = this._getConfig(e3), this._element = t3, this._dialog = t3.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = false, this._isBodyOverflowing = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollbarWidth = 0;
    }
    var e2 = t2.prototype;
    return e2.toggle = function(t3) {
      return this._isShown ? this.hide() : this.show(t3);
    }, e2.show = function(t3) {
      var e3 = this;
      if (!this._isShown && !this._isTransitioning) {
        var n2 = o.default.Event(mt, { relatedTarget: t3 });
        o.default(this._element).trigger(n2), n2.isDefaultPrevented() || (this._isShown = true, o.default(this._element).hasClass(dt) && (this._isTransitioning = true), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), o.default(this._element).on(vt, '[data-dismiss="modal"]', (function(t4) {
          return e3.hide(t4);
        })), o.default(this._dialog).on(bt, (function() {
          o.default(e3._element).one("mouseup.dismiss.bs.modal", (function(t4) {
            o.default(t4.target).is(e3._element) && (e3._ignoreBackdropClick = true);
          }));
        })), this._showBackdrop((function() {
          return e3._showElement(t3);
        })));
      }
    }, e2.hide = function(t3) {
      var e3 = this;
      if (t3 && t3.preventDefault(), this._isShown && !this._isTransitioning) {
        var n2 = o.default.Event("hide.bs.modal");
        if (o.default(this._element).trigger(n2), this._isShown && !n2.isDefaultPrevented()) {
          this._isShown = false;
          var i2 = o.default(this._element).hasClass(dt);
          if (i2 && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), o.default(document).off(pt), o.default(this._element).removeClass(ct), o.default(this._element).off(vt), o.default(this._dialog).off(bt), i2) {
            var a2 = d.getTransitionDurationFromElement(this._element);
            o.default(this._element).one(d.TRANSITION_END, (function(t4) {
              return e3._hideModal(t4);
            })).emulateTransitionEnd(a2);
          } else this._hideModal();
        }
      }
    }, e2.dispose = function() {
      [window, this._element, this._dialog].forEach((function(t3) {
        return o.default(t3).off(".bs.modal");
      })), o.default(document).off(pt), o.default.removeData(this._element, rt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, e2.handleUpdate = function() {
      this._adjustDialog();
    }, e2._getConfig = function(t3) {
      return t3 = r({}, Tt, t3), d.typeCheckConfig("modal", t3, wt), t3;
    }, e2._triggerBackdropTransition = function() {
      var t3 = this, e3 = o.default.Event("hidePrevented.bs.modal");
      if (o.default(this._element).trigger(e3), !e3.isDefaultPrevented()) {
        var n2 = this._element.scrollHeight > document.documentElement.clientHeight;
        n2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(ht);
        var i2 = d.getTransitionDurationFromElement(this._dialog);
        o.default(this._element).off(d.TRANSITION_END), o.default(this._element).one(d.TRANSITION_END, (function() {
          t3._element.classList.remove(ht), n2 || o.default(t3._element).one(d.TRANSITION_END, (function() {
            t3._element.style.overflowY = "";
          })).emulateTransitionEnd(t3._element, i2);
        })).emulateTransitionEnd(i2), this._element.focus();
      }
    }, e2._showElement = function(t3) {
      var e3 = this, n2 = o.default(this._element).hasClass(dt), i2 = this._dialog ? this._dialog.querySelector(".modal-body") : null;
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), o.default(this._dialog).hasClass("modal-dialog-scrollable") && i2 ? i2.scrollTop = 0 : this._element.scrollTop = 0, n2 && d.reflow(this._element), o.default(this._element).addClass(ct), this._config.focus && this._enforceFocus();
      var a2 = o.default.Event("shown.bs.modal", { relatedTarget: t3 }), s2 = function() {
        e3._config.focus && e3._element.focus(), e3._isTransitioning = false, o.default(e3._element).trigger(a2);
      };
      if (n2) {
        var l2 = d.getTransitionDurationFromElement(this._dialog);
        o.default(this._dialog).one(d.TRANSITION_END, s2).emulateTransitionEnd(l2);
      } else s2();
    }, e2._enforceFocus = function() {
      var t3 = this;
      o.default(document).off(pt).on(pt, (function(e3) {
        document !== e3.target && t3._element !== e3.target && 0 === o.default(t3._element).has(e3.target).length && t3._element.focus();
      }));
    }, e2._setEscapeEvent = function() {
      var t3 = this;
      this._isShown ? o.default(this._element).on(yt, (function(e3) {
        t3._config.keyboard && 27 === e3.which ? (e3.preventDefault(), t3.hide()) : t3._config.keyboard || 27 !== e3.which || t3._triggerBackdropTransition();
      })) : this._isShown || o.default(this._element).off(yt);
    }, e2._setResizeEvent = function() {
      var t3 = this;
      this._isShown ? o.default(window).on(_t, (function(e3) {
        return t3.handleUpdate(e3);
      })) : o.default(window).off(_t);
    }, e2._hideModal = function() {
      var t3 = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._showBackdrop((function() {
        o.default(document.body).removeClass(ft), t3._resetAdjustments(), t3._resetScrollbar(), o.default(t3._element).trigger(gt);
      }));
    }, e2._removeBackdrop = function() {
      this._backdrop && (o.default(this._backdrop).remove(), this._backdrop = null);
    }, e2._showBackdrop = function(t3) {
      var e3 = this, n2 = o.default(this._element).hasClass(dt) ? dt : "";
      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n2 && this._backdrop.classList.add(n2), o.default(this._backdrop).appendTo(document.body), o.default(this._element).on(vt, (function(t4) {
          e3._ignoreBackdropClick ? e3._ignoreBackdropClick = false : t4.target === t4.currentTarget && ("static" === e3._config.backdrop ? e3._triggerBackdropTransition() : e3.hide());
        })), n2 && d.reflow(this._backdrop), o.default(this._backdrop).addClass(ct), !t3) return;
        if (!n2) return void t3();
        var i2 = d.getTransitionDurationFromElement(this._backdrop);
        o.default(this._backdrop).one(d.TRANSITION_END, t3).emulateTransitionEnd(i2);
      } else if (!this._isShown && this._backdrop) {
        o.default(this._backdrop).removeClass(ct);
        var a2 = function() {
          e3._removeBackdrop(), t3 && t3();
        };
        if (o.default(this._element).hasClass(dt)) {
          var s2 = d.getTransitionDurationFromElement(this._backdrop);
          o.default(this._backdrop).one(d.TRANSITION_END, a2).emulateTransitionEnd(s2);
        } else a2();
      } else t3 && t3();
    }, e2._adjustDialog = function() {
      var t3 = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t3 && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t3 && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, e2._resetAdjustments = function() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, e2._checkScrollbar = function() {
      var t3 = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(t3.left + t3.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, e2._setScrollbar = function() {
      var t3 = this;
      if (this._isBodyOverflowing) {
        var e3 = [].slice.call(document.querySelectorAll(Et)), n2 = [].slice.call(document.querySelectorAll(".sticky-top"));
        o.default(e3).each((function(e4, n3) {
          var i3 = n3.style.paddingRight, a3 = o.default(n3).css("padding-right");
          o.default(n3).data("padding-right", i3).css("padding-right", parseFloat(a3) + t3._scrollbarWidth + "px");
        })), o.default(n2).each((function(e4, n3) {
          var i3 = n3.style.marginRight, a3 = o.default(n3).css("margin-right");
          o.default(n3).data("margin-right", i3).css("margin-right", parseFloat(a3) - t3._scrollbarWidth + "px");
        }));
        var i2 = document.body.style.paddingRight, a2 = o.default(document.body).css("padding-right");
        o.default(document.body).data("padding-right", i2).css("padding-right", parseFloat(a2) + this._scrollbarWidth + "px");
      }
      o.default(document.body).addClass(ft);
    }, e2._resetScrollbar = function() {
      var t3 = [].slice.call(document.querySelectorAll(Et));
      o.default(t3).each((function(t4, e4) {
        var n3 = o.default(e4).data("padding-right");
        o.default(e4).removeData("padding-right"), e4.style.paddingRight = n3 || "";
      }));
      var e3 = [].slice.call(document.querySelectorAll(".sticky-top"));
      o.default(e3).each((function(t4, e4) {
        var n3 = o.default(e4).data("margin-right");
        "undefined" != typeof n3 && o.default(e4).css("margin-right", n3).removeData("margin-right");
      }));
      var n2 = o.default(document.body).data("padding-right");
      o.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n2 || "";
    }, e2._getScrollbarWidth = function() {
      var t3 = document.createElement("div");
      t3.className = "modal-scrollbar-measure", document.body.appendChild(t3);
      var e3 = t3.getBoundingClientRect().width - t3.clientWidth;
      return document.body.removeChild(t3), e3;
    }, t2._jQueryInterface = function(e3, n2) {
      return this.each((function() {
        var i2 = o.default(this).data(rt), a2 = r({}, Tt, o.default(this).data(), "object" == typeof e3 && e3 ? e3 : {});
        if (i2 || (i2 = new t2(this, a2), o.default(this).data(rt, i2)), "string" == typeof e3) {
          if ("undefined" == typeof i2[e3]) throw new TypeError('No method named "' + e3 + '"');
          i2[e3](n2);
        } else a2.show && i2.show(n2);
      }));
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return Tt;
    } }]), t2;
  })();
  o.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(t2) {
    var e2, n2 = this, i2 = d.getSelectorFromElement(this);
    i2 && (e2 = document.querySelector(i2));
    var a2 = o.default(e2).data(rt) ? "toggle" : r({}, o.default(e2).data(), o.default(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t2.preventDefault();
    var s2 = o.default(e2).one(mt, (function(t3) {
      t3.isDefaultPrevented() || s2.one(gt, (function() {
        o.default(n2).is(":visible") && n2.focus();
      }));
    }));
    Ct._jQueryInterface.call(o.default(e2), a2, this);
  })), o.default.fn.modal = Ct._jQueryInterface, o.default.fn.modal.Constructor = Ct, o.default.fn.modal.noConflict = function() {
    return o.default.fn.modal = ut, Ct._jQueryInterface;
  };
  var St = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], Nt = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Dt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function At(t2, e2, n2) {
    if (0 === t2.length) return t2;
    if (n2 && "function" == typeof n2) return n2(t2);
    for (var i2 = new window.DOMParser().parseFromString(t2, "text/html"), o2 = Object.keys(e2), a2 = [].slice.call(i2.body.querySelectorAll("*")), s2 = function(t3, n3) {
      var i3 = a2[t3], s3 = i3.nodeName.toLowerCase();
      if (-1 === o2.indexOf(i3.nodeName.toLowerCase())) return i3.parentNode.removeChild(i3), "continue";
      var l3 = [].slice.call(i3.attributes), r3 = [].concat(e2["*"] || [], e2[s3] || []);
      l3.forEach((function(t4) {
        (function(t5, e3) {
          var n4 = t5.nodeName.toLowerCase();
          if (-1 !== e3.indexOf(n4)) return -1 === St.indexOf(n4) || Boolean(Nt.test(t5.nodeValue) || Dt.test(t5.nodeValue));
          for (var i4 = e3.filter((function(t6) {
            return t6 instanceof RegExp;
          })), o3 = 0, a3 = i4.length; o3 < a3; o3++) if (i4[o3].test(n4)) return true;
          return false;
        })(t4, r3) || i3.removeAttribute(t4.nodeName);
      }));
    }, l2 = 0, r2 = a2.length; l2 < r2; l2++) s2(l2);
    return i2.body.innerHTML;
  }
  var It = "tooltip", kt = "bs.tooltip", Ot = o.default.fn.tooltip, jt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), Pt = ["sanitize", "whiteList", "sanitizeFn"], Lt = "fade", Rt = "show", xt = "show", qt = "out", Ft = "hover", Qt = "focus", Bt = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }, Ht = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: 0, container: false, fallbackPlacement: "flip", boundary: "scrollParent", customClass: "", sanitize: true, sanitizeFn: null, whiteList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null }, Ut = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" }, Mt = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" }, Wt = (function() {
    function t2(t3, e3) {
      if ("undefined" == typeof a.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t3, this.config = this._getConfig(e3), this.tip = null, this._setListeners();
    }
    var e2 = t2.prototype;
    return e2.enable = function() {
      this._isEnabled = true;
    }, e2.disable = function() {
      this._isEnabled = false;
    }, e2.toggleEnabled = function() {
      this._isEnabled = !this._isEnabled;
    }, e2.toggle = function(t3) {
      if (this._isEnabled) if (t3) {
        var e3 = this.constructor.DATA_KEY, n2 = o.default(t3.currentTarget).data(e3);
        n2 || (n2 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), o.default(t3.currentTarget).data(e3, n2)), n2._activeTrigger.click = !n2._activeTrigger.click, n2._isWithActiveTrigger() ? n2._enter(null, n2) : n2._leave(null, n2);
      } else {
        if (o.default(this.getTipElement()).hasClass(Rt)) return void this._leave(null, this);
        this._enter(null, this);
      }
    }, e2.dispose = function() {
      clearTimeout(this._timeout), o.default.removeData(this.element, this.constructor.DATA_KEY), o.default(this.element).off(this.constructor.EVENT_KEY), o.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && o.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, e2.show = function() {
      var t3 = this;
      if ("none" === o.default(this.element).css("display")) throw new Error("Please use show on visible elements");
      var e3 = o.default.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        o.default(this.element).trigger(e3);
        var n2 = d.findShadowRoot(this.element), i2 = o.default.contains(null !== n2 ? n2 : this.element.ownerDocument.documentElement, this.element);
        if (e3.isDefaultPrevented() || !i2) return;
        var s2 = this.getTipElement(), l2 = d.getUID(this.constructor.NAME);
        s2.setAttribute("id", l2), this.element.setAttribute("aria-describedby", l2), this.setContent(), this.config.animation && o.default(s2).addClass(Lt);
        var r2 = "function" == typeof this.config.placement ? this.config.placement.call(this, s2, this.element) : this.config.placement, u2 = this._getAttachment(r2);
        this.addAttachmentClass(u2);
        var f2 = this._getContainer();
        o.default(s2).data(this.constructor.DATA_KEY, this), o.default.contains(this.element.ownerDocument.documentElement, this.tip) || o.default(s2).appendTo(f2), o.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new a.default(this.element, s2, this._getPopperConfig(u2)), o.default(s2).addClass(Rt), o.default(s2).addClass(this.config.customClass), "ontouchstart" in document.documentElement && o.default(document.body).children().on("mouseover", null, o.default.noop);
        var c2 = function() {
          t3.config.animation && t3._fixTransition();
          var e4 = t3._hoverState;
          t3._hoverState = null, o.default(t3.element).trigger(t3.constructor.Event.SHOWN), e4 === qt && t3._leave(null, t3);
        };
        if (o.default(this.tip).hasClass(Lt)) {
          var h2 = d.getTransitionDurationFromElement(this.tip);
          o.default(this.tip).one(d.TRANSITION_END, c2).emulateTransitionEnd(h2);
        } else c2();
      }
    }, e2.hide = function(t3) {
      var e3 = this, n2 = this.getTipElement(), i2 = o.default.Event(this.constructor.Event.HIDE), a2 = function() {
        e3._hoverState !== xt && n2.parentNode && n2.parentNode.removeChild(n2), e3._cleanTipClass(), e3.element.removeAttribute("aria-describedby"), o.default(e3.element).trigger(e3.constructor.Event.HIDDEN), null !== e3._popper && e3._popper.destroy(), t3 && t3();
      };
      if (o.default(this.element).trigger(i2), !i2.isDefaultPrevented()) {
        if (o.default(n2).removeClass(Rt), "ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false, o.default(this.tip).hasClass(Lt)) {
          var s2 = d.getTransitionDurationFromElement(n2);
          o.default(n2).one(d.TRANSITION_END, a2).emulateTransitionEnd(s2);
        } else a2();
        this._hoverState = "";
      }
    }, e2.update = function() {
      null !== this._popper && this._popper.scheduleUpdate();
    }, e2.isWithContent = function() {
      return Boolean(this.getTitle());
    }, e2.addAttachmentClass = function(t3) {
      o.default(this.getTipElement()).addClass("bs-tooltip-" + t3);
    }, e2.getTipElement = function() {
      return this.tip = this.tip || o.default(this.config.template)[0], this.tip;
    }, e2.setContent = function() {
      var t3 = this.getTipElement();
      this.setElementContent(o.default(t3.querySelectorAll(".tooltip-inner")), this.getTitle()), o.default(t3).removeClass("fade show");
    }, e2.setElementContent = function(t3, e3) {
      "object" != typeof e3 || !e3.nodeType && !e3.jquery ? this.config.html ? (this.config.sanitize && (e3 = At(e3, this.config.whiteList, this.config.sanitizeFn)), t3.html(e3)) : t3.text(e3) : this.config.html ? o.default(e3).parent().is(t3) || t3.empty().append(e3) : t3.text(o.default(e3).text());
    }, e2.getTitle = function() {
      var t3 = this.element.getAttribute("data-original-title");
      return t3 || (t3 = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t3;
    }, e2._getPopperConfig = function(t3) {
      var e3 = this;
      return r({}, { placement: t3, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t4) {
        t4.originalPlacement !== t4.placement && e3._handlePopperPlacementChange(t4);
      }, onUpdate: function(t4) {
        return e3._handlePopperPlacementChange(t4);
      } }, this.config.popperConfig);
    }, e2._getOffset = function() {
      var t3 = this, e3 = {};
      return "function" == typeof this.config.offset ? e3.fn = function(e4) {
        return e4.offsets = r({}, e4.offsets, t3.config.offset(e4.offsets, t3.element)), e4;
      } : e3.offset = this.config.offset, e3;
    }, e2._getContainer = function() {
      return false === this.config.container ? document.body : d.isElement(this.config.container) ? o.default(this.config.container) : o.default(document).find(this.config.container);
    }, e2._getAttachment = function(t3) {
      return Bt[t3.toUpperCase()];
    }, e2._setListeners = function() {
      var t3 = this;
      this.config.trigger.split(" ").forEach((function(e3) {
        if ("click" === e3) o.default(t3.element).on(t3.constructor.Event.CLICK, t3.config.selector, (function(e4) {
          return t3.toggle(e4);
        }));
        else if ("manual" !== e3) {
          var n2 = e3 === Ft ? t3.constructor.Event.MOUSEENTER : t3.constructor.Event.FOCUSIN, i2 = e3 === Ft ? t3.constructor.Event.MOUSELEAVE : t3.constructor.Event.FOCUSOUT;
          o.default(t3.element).on(n2, t3.config.selector, (function(e4) {
            return t3._enter(e4);
          })).on(i2, t3.config.selector, (function(e4) {
            return t3._leave(e4);
          }));
        }
      })), this._hideModalHandler = function() {
        t3.element && t3.hide();
      }, o.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = r({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, e2._fixTitle = function() {
      var t3 = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== t3) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, e2._enter = function(t3, e3) {
      var n2 = this.constructor.DATA_KEY;
      (e3 = e3 || o.default(t3.currentTarget).data(n2)) || (e3 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), o.default(t3.currentTarget).data(n2, e3)), t3 && (e3._activeTrigger["focusin" === t3.type ? Qt : Ft] = true), o.default(e3.getTipElement()).hasClass(Rt) || e3._hoverState === xt ? e3._hoverState = xt : (clearTimeout(e3._timeout), e3._hoverState = xt, e3.config.delay && e3.config.delay.show ? e3._timeout = setTimeout((function() {
        e3._hoverState === xt && e3.show();
      }), e3.config.delay.show) : e3.show());
    }, e2._leave = function(t3, e3) {
      var n2 = this.constructor.DATA_KEY;
      (e3 = e3 || o.default(t3.currentTarget).data(n2)) || (e3 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), o.default(t3.currentTarget).data(n2, e3)), t3 && (e3._activeTrigger["focusout" === t3.type ? Qt : Ft] = false), e3._isWithActiveTrigger() || (clearTimeout(e3._timeout), e3._hoverState = qt, e3.config.delay && e3.config.delay.hide ? e3._timeout = setTimeout((function() {
        e3._hoverState === qt && e3.hide();
      }), e3.config.delay.hide) : e3.hide());
    }, e2._isWithActiveTrigger = function() {
      for (var t3 in this._activeTrigger) if (this._activeTrigger[t3]) return true;
      return false;
    }, e2._getConfig = function(t3) {
      var e3 = o.default(this.element).data();
      return Object.keys(e3).forEach((function(t4) {
        -1 !== Pt.indexOf(t4) && delete e3[t4];
      })), "number" == typeof (t3 = r({}, this.constructor.Default, e3, "object" == typeof t3 && t3 ? t3 : {})).delay && (t3.delay = { show: t3.delay, hide: t3.delay }), "number" == typeof t3.title && (t3.title = t3.title.toString()), "number" == typeof t3.content && (t3.content = t3.content.toString()), d.typeCheckConfig(It, t3, this.constructor.DefaultType), t3.sanitize && (t3.template = At(t3.template, t3.whiteList, t3.sanitizeFn)), t3;
    }, e2._getDelegateConfig = function() {
      var t3 = {};
      if (this.config) for (var e3 in this.config) this.constructor.Default[e3] !== this.config[e3] && (t3[e3] = this.config[e3]);
      return t3;
    }, e2._cleanTipClass = function() {
      var t3 = o.default(this.getTipElement()), e3 = t3.attr("class").match(jt);
      null !== e3 && e3.length && t3.removeClass(e3.join(""));
    }, e2._handlePopperPlacementChange = function(t3) {
      this.tip = t3.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t3.placement));
    }, e2._fixTransition = function() {
      var t3 = this.getTipElement(), e3 = this.config.animation;
      null === t3.getAttribute("x-placement") && (o.default(t3).removeClass(Lt), this.config.animation = false, this.hide(), this.show(), this.config.animation = e3);
    }, t2._jQueryInterface = function(e3) {
      return this.each((function() {
        var n2 = o.default(this), i2 = n2.data(kt), a2 = "object" == typeof e3 && e3;
        if ((i2 || !/dispose|hide/.test(e3)) && (i2 || (i2 = new t2(this, a2), n2.data(kt, i2)), "string" == typeof e3)) {
          if ("undefined" == typeof i2[e3]) throw new TypeError('No method named "' + e3 + '"');
          i2[e3]();
        }
      }));
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return Ht;
    } }, { key: "NAME", get: function() {
      return It;
    } }, { key: "DATA_KEY", get: function() {
      return kt;
    } }, { key: "Event", get: function() {
      return Mt;
    } }, { key: "EVENT_KEY", get: function() {
      return ".bs.tooltip";
    } }, { key: "DefaultType", get: function() {
      return Ut;
    } }]), t2;
  })();
  o.default.fn.tooltip = Wt._jQueryInterface, o.default.fn.tooltip.Constructor = Wt, o.default.fn.tooltip.noConflict = function() {
    return o.default.fn.tooltip = Ot, Wt._jQueryInterface;
  };
  var Vt = "bs.popover", zt = o.default.fn.popover, Kt = new RegExp("(^|\\s)bs-popover\\S+", "g"), Xt = r({}, Wt.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Yt = r({}, Wt.DefaultType, { content: "(string|element|function)" }), $t = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" }, Jt = (function(t2) {
    var e2, n2;
    function i2() {
      return t2.apply(this, arguments) || this;
    }
    n2 = t2, (e2 = i2).prototype = Object.create(n2.prototype), e2.prototype.constructor = e2, u(e2, n2);
    var a2 = i2.prototype;
    return a2.isWithContent = function() {
      return this.getTitle() || this._getContent();
    }, a2.addAttachmentClass = function(t3) {
      o.default(this.getTipElement()).addClass("bs-popover-" + t3);
    }, a2.getTipElement = function() {
      return this.tip = this.tip || o.default(this.config.template)[0], this.tip;
    }, a2.setContent = function() {
      var t3 = o.default(this.getTipElement());
      this.setElementContent(t3.find(".popover-header"), this.getTitle());
      var e3 = this._getContent();
      "function" == typeof e3 && (e3 = e3.call(this.element)), this.setElementContent(t3.find(".popover-body"), e3), t3.removeClass("fade show");
    }, a2._getContent = function() {
      return this.element.getAttribute("data-content") || this.config.content;
    }, a2._cleanTipClass = function() {
      var t3 = o.default(this.getTipElement()), e3 = t3.attr("class").match(Kt);
      null !== e3 && e3.length > 0 && t3.removeClass(e3.join(""));
    }, i2._jQueryInterface = function(t3) {
      return this.each((function() {
        var e3 = o.default(this).data(Vt), n3 = "object" == typeof t3 ? t3 : null;
        if ((e3 || !/dispose|hide/.test(t3)) && (e3 || (e3 = new i2(this, n3), o.default(this).data(Vt, e3)), "string" == typeof t3)) {
          if ("undefined" == typeof e3[t3]) throw new TypeError('No method named "' + t3 + '"');
          e3[t3]();
        }
      }));
    }, l(i2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return Xt;
    } }, { key: "NAME", get: function() {
      return "popover";
    } }, { key: "DATA_KEY", get: function() {
      return Vt;
    } }, { key: "Event", get: function() {
      return $t;
    } }, { key: "EVENT_KEY", get: function() {
      return ".bs.popover";
    } }, { key: "DefaultType", get: function() {
      return Yt;
    } }]), i2;
  })(Wt);
  o.default.fn.popover = Jt._jQueryInterface, o.default.fn.popover.Constructor = Jt, o.default.fn.popover.noConflict = function() {
    return o.default.fn.popover = zt, Jt._jQueryInterface;
  };
  var Gt = "scrollspy", Zt = "bs.scrollspy", te = o.default.fn[Gt], ee = "active", ne = "position", ie = ".nav, .list-group", oe = { offset: 10, method: "auto", target: "" }, ae = { offset: "number", method: "string", target: "(string|element)" }, se = (function() {
    function t2(t3, e3) {
      var n2 = this;
      this._element = t3, this._scrollElement = "BODY" === t3.tagName ? window : t3, this._config = this._getConfig(e3), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, o.default(this._scrollElement).on("scroll.bs.scrollspy", (function(t4) {
        return n2._process(t4);
      })), this.refresh(), this._process();
    }
    var e2 = t2.prototype;
    return e2.refresh = function() {
      var t3 = this, e3 = this._scrollElement === this._scrollElement.window ? "offset" : ne, n2 = "auto" === this._config.method ? e3 : this._config.method, i2 = n2 === ne ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(t4) {
        var e4, a2 = d.getSelectorFromElement(t4);
        if (a2 && (e4 = document.querySelector(a2)), e4) {
          var s2 = e4.getBoundingClientRect();
          if (s2.width || s2.height) return [o.default(e4)[n2]().top + i2, a2];
        }
        return null;
      })).filter(Boolean).sort((function(t4, e4) {
        return t4[0] - e4[0];
      })).forEach((function(e4) {
        t3._offsets.push(e4[0]), t3._targets.push(e4[1]);
      }));
    }, e2.dispose = function() {
      o.default.removeData(this._element, Zt), o.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, e2._getConfig = function(t3) {
      if ("string" != typeof (t3 = r({}, oe, "object" == typeof t3 && t3 ? t3 : {})).target && d.isElement(t3.target)) {
        var e3 = o.default(t3.target).attr("id");
        e3 || (e3 = d.getUID(Gt), o.default(t3.target).attr("id", e3)), t3.target = "#" + e3;
      }
      return d.typeCheckConfig(Gt, t3, ae), t3;
    }, e2._getScrollTop = function() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, e2._getScrollHeight = function() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, e2._getOffsetHeight = function() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, e2._process = function() {
      var t3 = this._getScrollTop() + this._config.offset, e3 = this._getScrollHeight(), n2 = this._config.offset + e3 - this._getOffsetHeight();
      if (this._scrollHeight !== e3 && this.refresh(), t3 >= n2) {
        var i2 = this._targets[this._targets.length - 1];
        this._activeTarget !== i2 && this._activate(i2);
      } else {
        if (this._activeTarget && t3 < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
        for (var o2 = this._offsets.length; o2--; ) this._activeTarget !== this._targets[o2] && t3 >= this._offsets[o2] && ("undefined" == typeof this._offsets[o2 + 1] || t3 < this._offsets[o2 + 1]) && this._activate(this._targets[o2]);
      }
    }, e2._activate = function(t3) {
      this._activeTarget = t3, this._clear();
      var e3 = this._selector.split(",").map((function(e4) {
        return e4 + '[data-target="' + t3 + '"],' + e4 + '[href="' + t3 + '"]';
      })), n2 = o.default([].slice.call(document.querySelectorAll(e3.join(","))));
      n2.hasClass("dropdown-item") ? (n2.closest(".dropdown").find(".dropdown-toggle").addClass(ee), n2.addClass(ee)) : (n2.addClass(ee), n2.parents(ie).prev(".nav-link, .list-group-item").addClass(ee), n2.parents(ie).prev(".nav-item").children(".nav-link").addClass(ee)), o.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t3 });
    }, e2._clear = function() {
      [].slice.call(document.querySelectorAll(this._selector)).filter((function(t3) {
        return t3.classList.contains(ee);
      })).forEach((function(t3) {
        return t3.classList.remove(ee);
      }));
    }, t2._jQueryInterface = function(e3) {
      return this.each((function() {
        var n2 = o.default(this).data(Zt);
        if (n2 || (n2 = new t2(this, "object" == typeof e3 && e3), o.default(this).data(Zt, n2)), "string" == typeof e3) {
          if ("undefined" == typeof n2[e3]) throw new TypeError('No method named "' + e3 + '"');
          n2[e3]();
        }
      }));
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return oe;
    } }]), t2;
  })();
  o.default(window).on("load.bs.scrollspy.data-api", (function() {
    for (var t2 = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e2 = t2.length; e2--; ) {
      var n2 = o.default(t2[e2]);
      se._jQueryInterface.call(n2, n2.data());
    }
  })), o.default.fn[Gt] = se._jQueryInterface, o.default.fn[Gt].Constructor = se, o.default.fn[Gt].noConflict = function() {
    return o.default.fn[Gt] = te, se._jQueryInterface;
  };
  var le = "bs.tab", re = o.default.fn.tab, ue = "active", fe = "fade", de = "show", ce = ".active", he = "> li > .active", ge = (function() {
    function t2(t3) {
      this._element = t3;
    }
    var e2 = t2.prototype;
    return e2.show = function() {
      var t3 = this;
      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o.default(this._element).hasClass(ue) || o.default(this._element).hasClass("disabled") || this._element.hasAttribute("disabled"))) {
        var e3, n2, i2 = o.default(this._element).closest(".nav, .list-group")[0], a2 = d.getSelectorFromElement(this._element);
        if (i2) {
          var s2 = "UL" === i2.nodeName || "OL" === i2.nodeName ? he : ce;
          n2 = (n2 = o.default.makeArray(o.default(i2).find(s2)))[n2.length - 1];
        }
        var l2 = o.default.Event("hide.bs.tab", { relatedTarget: this._element }), r2 = o.default.Event("show.bs.tab", { relatedTarget: n2 });
        if (n2 && o.default(n2).trigger(l2), o.default(this._element).trigger(r2), !r2.isDefaultPrevented() && !l2.isDefaultPrevented()) {
          a2 && (e3 = document.querySelector(a2)), this._activate(this._element, i2);
          var u2 = function() {
            var e4 = o.default.Event("hidden.bs.tab", { relatedTarget: t3._element }), i3 = o.default.Event("shown.bs.tab", { relatedTarget: n2 });
            o.default(n2).trigger(e4), o.default(t3._element).trigger(i3);
          };
          e3 ? this._activate(e3, e3.parentNode, u2) : u2();
        }
      }
    }, e2.dispose = function() {
      o.default.removeData(this._element, le), this._element = null;
    }, e2._activate = function(t3, e3, n2) {
      var i2 = this, a2 = (!e3 || "UL" !== e3.nodeName && "OL" !== e3.nodeName ? o.default(e3).children(ce) : o.default(e3).find(he))[0], s2 = n2 && a2 && o.default(a2).hasClass(fe), l2 = function() {
        return i2._transitionComplete(t3, a2, n2);
      };
      if (a2 && s2) {
        var r2 = d.getTransitionDurationFromElement(a2);
        o.default(a2).removeClass(de).one(d.TRANSITION_END, l2).emulateTransitionEnd(r2);
      } else l2();
    }, e2._transitionComplete = function(t3, e3, n2) {
      if (e3) {
        o.default(e3).removeClass(ue);
        var i2 = o.default(e3.parentNode).find("> .dropdown-menu .active")[0];
        i2 && o.default(i2).removeClass(ue), "tab" === e3.getAttribute("role") && e3.setAttribute("aria-selected", false);
      }
      o.default(t3).addClass(ue), "tab" === t3.getAttribute("role") && t3.setAttribute("aria-selected", true), d.reflow(t3), t3.classList.contains(fe) && t3.classList.add(de);
      var a2 = t3.parentNode;
      if (a2 && "LI" === a2.nodeName && (a2 = a2.parentNode), a2 && o.default(a2).hasClass("dropdown-menu")) {
        var s2 = o.default(t3).closest(".dropdown")[0];
        if (s2) {
          var l2 = [].slice.call(s2.querySelectorAll(".dropdown-toggle"));
          o.default(l2).addClass(ue);
        }
        t3.setAttribute("aria-expanded", true);
      }
      n2 && n2();
    }, t2._jQueryInterface = function(e3) {
      return this.each((function() {
        var n2 = o.default(this), i2 = n2.data(le);
        if (i2 || (i2 = new t2(this), n2.data(le, i2)), "string" == typeof e3) {
          if ("undefined" == typeof i2[e3]) throw new TypeError('No method named "' + e3 + '"');
          i2[e3]();
        }
      }));
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }]), t2;
  })();
  o.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t2) {
    t2.preventDefault(), ge._jQueryInterface.call(o.default(this), "show");
  })), o.default.fn.tab = ge._jQueryInterface, o.default.fn.tab.Constructor = ge, o.default.fn.tab.noConflict = function() {
    return o.default.fn.tab = re, ge._jQueryInterface;
  };
  var me = "bs.toast", pe = o.default.fn.toast, _e = "hide", ve = "show", ye = "showing", be = "click.dismiss.bs.toast", Ee = { animation: true, autohide: true, delay: 500 }, Te = { animation: "boolean", autohide: "boolean", delay: "number" }, we = (function() {
    function t2(t3, e3) {
      this._element = t3, this._config = this._getConfig(e3), this._timeout = null, this._setListeners();
    }
    var e2 = t2.prototype;
    return e2.show = function() {
      var t3 = this, e3 = o.default.Event("show.bs.toast");
      if (o.default(this._element).trigger(e3), !e3.isDefaultPrevented()) {
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
        var n2 = function() {
          t3._element.classList.remove(ye), t3._element.classList.add(ve), o.default(t3._element).trigger("shown.bs.toast"), t3._config.autohide && (t3._timeout = setTimeout((function() {
            t3.hide();
          }), t3._config.delay));
        };
        if (this._element.classList.remove(_e), d.reflow(this._element), this._element.classList.add(ye), this._config.animation) {
          var i2 = d.getTransitionDurationFromElement(this._element);
          o.default(this._element).one(d.TRANSITION_END, n2).emulateTransitionEnd(i2);
        } else n2();
      }
    }, e2.hide = function() {
      if (this._element.classList.contains(ve)) {
        var t3 = o.default.Event("hide.bs.toast");
        o.default(this._element).trigger(t3), t3.isDefaultPrevented() || this._close();
      }
    }, e2.dispose = function() {
      this._clearTimeout(), this._element.classList.contains(ve) && this._element.classList.remove(ve), o.default(this._element).off(be), o.default.removeData(this._element, me), this._element = null, this._config = null;
    }, e2._getConfig = function(t3) {
      return t3 = r({}, Ee, o.default(this._element).data(), "object" == typeof t3 && t3 ? t3 : {}), d.typeCheckConfig("toast", t3, this.constructor.DefaultType), t3;
    }, e2._setListeners = function() {
      var t3 = this;
      o.default(this._element).on(be, '[data-dismiss="toast"]', (function() {
        return t3.hide();
      }));
    }, e2._close = function() {
      var t3 = this, e3 = function() {
        t3._element.classList.add(_e), o.default(t3._element).trigger("hidden.bs.toast");
      };
      if (this._element.classList.remove(ve), this._config.animation) {
        var n2 = d.getTransitionDurationFromElement(this._element);
        o.default(this._element).one(d.TRANSITION_END, e3).emulateTransitionEnd(n2);
      } else e3();
    }, e2._clearTimeout = function() {
      clearTimeout(this._timeout), this._timeout = null;
    }, t2._jQueryInterface = function(e3) {
      return this.each((function() {
        var n2 = o.default(this), i2 = n2.data(me);
        if (i2 || (i2 = new t2(this, "object" == typeof e3 && e3), n2.data(me, i2)), "string" == typeof e3) {
          if ("undefined" == typeof i2[e3]) throw new TypeError('No method named "' + e3 + '"');
          i2[e3](this);
        }
      }));
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "DefaultType", get: function() {
      return Te;
    } }, { key: "Default", get: function() {
      return Ee;
    } }]), t2;
  })();
  o.default.fn.toast = we._jQueryInterface, o.default.fn.toast.Constructor = we, o.default.fn.toast.noConflict = function() {
    return o.default.fn.toast = pe, we._jQueryInterface;
  }, t.Alert = g, t.Button = E, t.Carousel = P, t.Collapse = V, t.Dropdown = lt, t.Modal = Ct, t.Popover = Jt, t.Scrollspy = se, t.Tab = ge, t.Toast = we, t.Tooltip = Wt, t.Util = d, Object.defineProperty(t, "__esModule", { value: true });
}));
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
!(function(A, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (A = "undefined" != typeof globalThis ? globalThis : A || self).html2canvas = e();
})(this, function() {
  "use strict";
  /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
  
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
  
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
  var r = function(A2, e2) {
    return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(A3, e3) {
      A3.__proto__ = e3;
    } || function(A3, e3) {
      for (var t2 in e3) Object.prototype.hasOwnProperty.call(e3, t2) && (A3[t2] = e3[t2]);
    })(A2, e2);
  };
  function A(A2, e2) {
    if ("function" != typeof e2 && null !== e2) throw new TypeError("Class extends value " + String(e2) + " is not a constructor or null");
    function t2() {
      this.constructor = A2;
    }
    r(A2, e2), A2.prototype = null === e2 ? Object.create(e2) : (t2.prototype = e2.prototype, new t2());
  }
  var h = function() {
    return (h = Object.assign || function(A2) {
      for (var e2, t2 = 1, r2 = arguments.length; t2 < r2; t2++) for (var B2 in e2 = arguments[t2]) Object.prototype.hasOwnProperty.call(e2, B2) && (A2[B2] = e2[B2]);
      return A2;
    }).apply(this, arguments);
  };
  function a(A2, s2, o2, i2) {
    return new (o2 = o2 || Promise)(function(t2, e2) {
      function r2(A3) {
        try {
          n2(i2.next(A3));
        } catch (A4) {
          e2(A4);
        }
      }
      function B2(A3) {
        try {
          n2(i2.throw(A3));
        } catch (A4) {
          e2(A4);
        }
      }
      function n2(A3) {
        var e3;
        A3.done ? t2(A3.value) : ((e3 = A3.value) instanceof o2 ? e3 : new o2(function(A4) {
          A4(e3);
        })).then(r2, B2);
      }
      n2((i2 = i2.apply(A2, s2 || [])).next());
    });
  }
  function H(t2, r2) {
    var B2, n2, s2, o2 = { label: 0, sent: function() {
      if (1 & s2[0]) throw s2[1];
      return s2[1];
    }, trys: [], ops: [] }, A2 = { next: e2(0), throw: e2(1), return: e2(2) };
    return "function" == typeof Symbol && (A2[Symbol.iterator] = function() {
      return this;
    }), A2;
    function e2(e3) {
      return function(A3) {
        return (function(e4) {
          if (B2) throw new TypeError("Generator is already executing.");
          for (; o2; ) try {
            if (B2 = 1, n2 && (s2 = 2 & e4[0] ? n2.return : e4[0] ? n2.throw || ((s2 = n2.return) && s2.call(n2), 0) : n2.next) && !(s2 = s2.call(n2, e4[1])).done) return s2;
            switch (n2 = 0, (e4 = s2 ? [2 & e4[0], s2.value] : e4)[0]) {
              case 0:
              case 1:
                s2 = e4;
                break;
              case 4:
                return o2.label++, { value: e4[1], done: false };
              case 5:
                o2.label++, n2 = e4[1], e4 = [0];
                continue;
              case 7:
                e4 = o2.ops.pop(), o2.trys.pop();
                continue;
              default:
                if (!(s2 = 0 < (s2 = o2.trys).length && s2[s2.length - 1]) && (6 === e4[0] || 2 === e4[0])) {
                  o2 = 0;
                  continue;
                }
                if (3 === e4[0] && (!s2 || e4[1] > s2[0] && e4[1] < s2[3])) {
                  o2.label = e4[1];
                  break;
                }
                if (6 === e4[0] && o2.label < s2[1]) {
                  o2.label = s2[1], s2 = e4;
                  break;
                }
                if (s2 && o2.label < s2[2]) {
                  o2.label = s2[2], o2.ops.push(e4);
                  break;
                }
                s2[2] && o2.ops.pop(), o2.trys.pop();
                continue;
            }
            e4 = r2.call(t2, o2);
          } catch (A4) {
            e4 = [6, A4], n2 = 0;
          } finally {
            B2 = s2 = 0;
          }
          if (5 & e4[0]) throw e4[1];
          return { value: e4[0] ? e4[1] : void 0, done: true };
        })([e3, A3]);
      };
    }
  }
  function t(A2, e2, t2) {
    if (t2 || 2 === arguments.length) for (var r2, B2 = 0, n2 = e2.length; B2 < n2; B2++) !r2 && B2 in e2 || ((r2 = r2 || Array.prototype.slice.call(e2, 0, B2))[B2] = e2[B2]);
    return A2.concat(r2 || e2);
  }
  var d = (B.prototype.add = function(A2, e2, t2, r2) {
    return new B(this.left + A2, this.top + e2, this.width + t2, this.height + r2);
  }, B.fromClientRect = function(A2, e2) {
    return new B(e2.left + A2.windowBounds.left, e2.top + A2.windowBounds.top, e2.width, e2.height);
  }, B.fromDOMRectList = function(A2, e2) {
    e2 = Array.from(e2).find(function(A3) {
      return 0 !== A3.width;
    });
    return e2 ? new B(e2.left + A2.windowBounds.left, e2.top + A2.windowBounds.top, e2.width, e2.height) : B.EMPTY;
  }, B.EMPTY = new B(0, 0, 0, 0), B);
  function B(A2, e2, t2, r2) {
    this.left = A2, this.top = e2, this.width = t2, this.height = r2;
  }
  for (var f = function(A2, e2) {
    return d.fromClientRect(A2, e2.getBoundingClientRect());
  }, Q = function(A2) {
    for (var e2 = [], t2 = 0, r2 = A2.length; t2 < r2; ) {
      var B2, n2 = A2.charCodeAt(t2++);
      55296 <= n2 && n2 <= 56319 && t2 < r2 ? 56320 == (64512 & (B2 = A2.charCodeAt(t2++))) ? e2.push(((1023 & n2) << 10) + (1023 & B2) + 65536) : (e2.push(n2), t2--) : e2.push(n2);
    }
    return e2;
  }, g = function() {
    for (var A2 = [], e2 = 0; e2 < arguments.length; e2++) A2[e2] = arguments[e2];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A2);
    var t2 = A2.length;
    if (!t2) return "";
    for (var r2 = [], B2 = -1, n2 = ""; ++B2 < t2; ) {
      var s2 = A2[B2];
      s2 <= 65535 ? r2.push(s2) : (s2 -= 65536, r2.push(55296 + (s2 >> 10), s2 % 1024 + 56320)), (B2 + 1 === t2 || 16384 < r2.length) && (n2 += String.fromCharCode.apply(String, r2), r2.length = 0);
    }
    return n2;
  }, e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), s = 0; s < e.length; s++) n[e.charCodeAt(s)] = s;
  for (var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i = 0; i < o.length; i++) c[o.charCodeAt(i)] = i;
  function w(A2, e2, t2) {
    return A2.slice ? A2.slice(e2, t2) : new Uint16Array(Array.prototype.slice.call(A2, e2, t2));
  }
  var U = (l.prototype.get = function(A2) {
    var e2;
    if (0 <= A2) {
      if (A2 < 55296 || 56319 < A2 && A2 <= 65535) return e2 = this.index[A2 >> 5], this.data[e2 = (e2 << 2) + (31 & A2)];
      if (A2 <= 65535) return e2 = this.index[2048 + (A2 - 55296 >> 5)], this.data[e2 = (e2 << 2) + (31 & A2)];
      if (A2 < this.highStart) return e2 = this.index[e2 = 2080 + (A2 >> 11)], e2 = this.index[e2 += A2 >> 5 & 63], this.data[e2 = (e2 << 2) + (31 & A2)];
      if (A2 <= 1114111) return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, l);
  function l(A2, e2, t2, r2, B2, n2) {
    this.initialValue = A2, this.errorValue = e2, this.highStart = t2, this.highValueIndex = r2, this.index = B2, this.data = n2;
  }
  for (var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), F = 0; F < C.length; F++) u[C.charCodeAt(F)] = F;
  function p(A2, e2, t2, r2) {
    var B2 = r2[t2];
    if (Array.isArray(A2) ? -1 !== A2.indexOf(B2) : A2 === B2) for (var n2 = t2; n2 <= r2.length; ) {
      if ((o2 = r2[++n2]) === e2) return 1;
      if (o2 !== D) break;
    }
    if (B2 === D) for (n2 = t2; 0 < n2; ) {
      var s2 = r2[--n2];
      if (Array.isArray(A2) ? -1 !== A2.indexOf(s2) : A2 === s2) for (var o2, i2 = t2; i2 <= r2.length; ) {
        if ((o2 = r2[++i2]) === e2) return 1;
        if (o2 !== D) break;
      }
      if (s2 !== D) break;
    }
  }
  function E(A2, e2) {
    for (var t2 = A2; 0 <= t2; ) {
      var r2 = e2[t2];
      if (r2 !== D) return r2;
      t2--;
    }
    return 0;
  }
  function I(t2, A2) {
    var e2 = (B2 = (function(A3, r3) {
      void 0 === r3 && (r3 = "strict");
      var B3 = [], n2 = [], s2 = [];
      return A3.forEach(function(A4, e3) {
        var t3 = rA.get(A4);
        if (50 < t3 ? (s2.push(true), t3 -= 50) : s2.push(false), -1 !== ["normal", "auto", "loose"].indexOf(r3) && -1 !== [8208, 8211, 12316, 12448].indexOf(A4)) return n2.push(e3), B3.push(16);
        if (4 !== t3 && 11 !== t3) return n2.push(e3), 31 === t3 ? B3.push("strict" === r3 ? O : q) : t3 === AA || 29 === t3 ? B3.push(J) : 43 === t3 ? 131072 <= A4 && A4 <= 196605 || 196608 <= A4 && A4 <= 262141 ? B3.push(q) : B3.push(J) : void B3.push(t3);
        if (0 === e3) return n2.push(e3), B3.push(J);
        t3 = B3[e3 - 1];
        return -1 === iA.indexOf(t3) ? (n2.push(n2[e3 - 1]), B3.push(t3)) : (n2.push(e3), B3.push(J));
      }), [n2, B3, s2];
    })(t2, (A2 = A2 || { lineBreak: "normal", wordBreak: "normal" }).lineBreak))[0], r2 = B2[1], B2 = B2[2];
    return [e2, r2 = "break-all" === A2.wordBreak || "break-word" === A2.wordBreak ? r2.map(function(A3) {
      return -1 !== [R, J, AA].indexOf(A3) ? q : A3;
    }) : r2, "keep-all" === A2.wordBreak ? B2.map(function(A3, e3) {
      return A3 && 19968 <= t2[e3] && t2[e3] <= 40959;
    }) : void 0];
  }
  var y, K, m, L, b, D = 10, v = 13, x = 15, M = 17, S = 18, T = 19, G = 20, O = 21, V = 22, k = 24, R = 25, N = 26, P = 27, X = 28, J = 30, Y = 32, W = 33, Z = 34, _ = 35, q = 37, j = 38, z = 39, $ = 40, AA = 42, eA = [9001, 65288], tA = "\xD7", rA = (m = (function(A2) {
    var e2, t2, r2, B2, n2 = 0.75 * A2.length, s2 = A2.length, o2 = 0;
    "=" === A2[A2.length - 1] && (n2--, "=" === A2[A2.length - 2] && n2--);
    for (var n2 = new ("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(n2), i2 = Array.isArray(n2) ? n2 : new Uint8Array(n2), Q2 = 0; Q2 < s2; Q2 += 4) e2 = c[A2.charCodeAt(Q2)], t2 = c[A2.charCodeAt(Q2 + 1)], r2 = c[A2.charCodeAt(Q2 + 2)], B2 = c[A2.charCodeAt(Q2 + 3)], i2[o2++] = e2 << 2 | t2 >> 4, i2[o2++] = (15 & t2) << 4 | r2 >> 2, i2[o2++] = (3 & r2) << 6 | 63 & B2;
    return n2;
  })(y = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="), L = Array.isArray(m) ? (function(A2) {
    for (var e2 = A2.length, t2 = [], r2 = 0; r2 < e2; r2 += 4) t2.push(A2[r2 + 3] << 24 | A2[r2 + 2] << 16 | A2[r2 + 1] << 8 | A2[r2]);
    return t2;
  })(m) : new Uint32Array(m), b = Array.isArray(m) ? (function(A2) {
    for (var e2 = A2.length, t2 = [], r2 = 0; r2 < e2; r2 += 2) t2.push(A2[r2 + 1] << 8 | A2[r2]);
    return t2;
  })(m) : new Uint16Array(m), y = w(b, 12, L[4] / 2), K = 2 === L[5] ? w(b, (24 + L[4]) / 2) : (m = L, b = Math.ceil((24 + L[4]) / 4), m.slice ? m.slice(b, K) : new Uint32Array(Array.prototype.slice.call(m, b, K))), new U(L[0], L[1], L[2], L[3], y, K)), BA = [J, 36], nA = [1, 2, 3, 5], sA = [D, 8], oA = [P, N], iA = nA.concat(sA), QA = [j, z, $, Z, _], cA = [x, v], aA = (gA.prototype.slice = function() {
    return g.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, gA);
  function gA(A2, e2, t2, r2) {
    this.codePoints = A2, this.required = "!" === e2, this.start = t2, this.end = r2;
  }
  function wA(A2, e2) {
    var t2 = Q(A2), r2 = (e2 = I(t2, e2))[0], B2 = e2[1], n2 = e2[2], s2 = t2.length, o2 = 0, i2 = 0;
    return { next: function() {
      if (s2 <= i2) return { done: true, value: null };
      for (var A3 = tA; i2 < s2 && (A3 = (function(A4, e4, t3, r3, B3) {
        if (0 === t3[r3]) return tA;
        var n3 = r3 - 1;
        if (Array.isArray(B3) && true === B3[n3]) return tA;
        var s3 = n3 - 1, o3 = 1 + n3, i3 = e4[n3], r3 = 0 <= s3 ? e4[s3] : 0, B3 = e4[o3];
        if (2 === i3 && 3 === B3) return tA;
        if (-1 !== nA.indexOf(i3)) return "!";
        if (-1 !== nA.indexOf(B3)) return tA;
        if (-1 !== sA.indexOf(B3)) return tA;
        if (8 === E(n3, e4)) return "\xF7";
        if (11 === rA.get(A4[n3])) return tA;
        if ((i3 === Y || i3 === W) && 11 === rA.get(A4[o3])) return tA;
        if (7 === i3 || 7 === B3) return tA;
        if (9 === i3) return tA;
        if (-1 === [D, v, x].indexOf(i3) && 9 === B3) return tA;
        if (-1 !== [M, S, T, k, X].indexOf(B3)) return tA;
        if (E(n3, e4) === V) return tA;
        if (p(23, V, n3, e4)) return tA;
        if (p([M, S], O, n3, e4)) return tA;
        if (p(12, 12, n3, e4)) return tA;
        if (i3 === D) return "\xF7";
        if (23 === i3 || 23 === B3) return tA;
        if (16 === B3 || 16 === i3) return "\xF7";
        if (-1 !== [v, x, O].indexOf(B3) || 14 === i3) return tA;
        if (36 === r3 && -1 !== cA.indexOf(i3)) return tA;
        if (i3 === X && 36 === B3) return tA;
        if (B3 === G) return tA;
        if (-1 !== BA.indexOf(B3) && i3 === R || -1 !== BA.indexOf(i3) && B3 === R) return tA;
        if (i3 === P && -1 !== [q, Y, W].indexOf(B3) || -1 !== [q, Y, W].indexOf(i3) && B3 === N) return tA;
        if (-1 !== BA.indexOf(i3) && -1 !== oA.indexOf(B3) || -1 !== oA.indexOf(i3) && -1 !== BA.indexOf(B3)) return tA;
        if (-1 !== [P, N].indexOf(i3) && (B3 === R || -1 !== [V, x].indexOf(B3) && e4[1 + o3] === R) || -1 !== [V, x].indexOf(i3) && B3 === R || i3 === R && -1 !== [R, X, k].indexOf(B3)) return tA;
        if (-1 !== [R, X, k, M, S].indexOf(B3)) for (var Q2 = n3; 0 <= Q2; ) {
          if ((c2 = e4[Q2]) === R) return tA;
          if (-1 === [X, k].indexOf(c2)) break;
          Q2--;
        }
        if (-1 !== [P, N].indexOf(B3)) for (var c2, Q2 = -1 !== [M, S].indexOf(i3) ? s3 : n3; 0 <= Q2; ) {
          if ((c2 = e4[Q2]) === R) return tA;
          if (-1 === [X, k].indexOf(c2)) break;
          Q2--;
        }
        if (j === i3 && -1 !== [j, z, Z, _].indexOf(B3) || -1 !== [z, Z].indexOf(i3) && -1 !== [z, $].indexOf(B3) || -1 !== [$, _].indexOf(i3) && B3 === $) return tA;
        if (-1 !== QA.indexOf(i3) && -1 !== [G, N].indexOf(B3) || -1 !== QA.indexOf(B3) && i3 === P) return tA;
        if (-1 !== BA.indexOf(i3) && -1 !== BA.indexOf(B3)) return tA;
        if (i3 === k && -1 !== BA.indexOf(B3)) return tA;
        if (-1 !== BA.concat(R).indexOf(i3) && B3 === V && -1 === eA.indexOf(A4[o3]) || -1 !== BA.concat(R).indexOf(B3) && i3 === S) return tA;
        if (41 === i3 && 41 === B3) {
          for (var a2 = t3[n3], g2 = 1; 0 < a2 && 41 === e4[--a2]; ) g2++;
          if (g2 % 2 != 0) return tA;
        }
        return i3 === Y && B3 === W ? tA : "\xF7";
      })(t2, B2, r2, ++i2, n2)) === tA; ) ;
      if (A3 === tA && i2 !== s2) return { done: true, value: null };
      var e3 = new aA(t2, A3, o2, i2);
      return o2 = i2, { value: e3, done: false };
    } };
  }
  function UA(A2) {
    return 48 <= A2 && A2 <= 57;
  }
  function lA(A2) {
    return UA(A2) || 65 <= A2 && A2 <= 70 || 97 <= A2 && A2 <= 102;
  }
  function CA(A2) {
    return 10 === A2 || 9 === A2 || 32 === A2;
  }
  function uA(A2) {
    return 97 <= (t2 = e2 = A2) && t2 <= 122 || 65 <= (e2 = e2) && e2 <= 90 || 128 <= A2 || 95 === A2;
    var e2, t2;
  }
  function FA(A2) {
    return uA(A2) || UA(A2) || 45 === A2;
  }
  function hA(A2, e2) {
    return 92 === A2 && 10 !== e2;
  }
  function dA(A2, e2, t2) {
    return 45 === A2 ? uA(e2) || hA(e2, t2) : !!uA(A2) || 92 === A2 && 10 !== e2;
  }
  function fA(A2, e2, t2) {
    return 43 === A2 || 45 === A2 ? !!UA(e2) || 46 === e2 && UA(t2) : UA(46 === A2 ? e2 : A2);
  }
  var HA = { type: 2 }, pA = { type: 3 }, EA = { type: 4 }, IA = { type: 13 }, yA = { type: 8 }, KA = { type: 21 }, mA = { type: 9 }, LA = { type: 10 }, bA = { type: 11 }, DA = { type: 12 }, vA = { type: 14 }, xA = { type: 23 }, MA = { type: 1 }, SA = { type: 25 }, TA = { type: 24 }, GA = { type: 26 }, OA = { type: 27 }, VA = { type: 28 }, kA = { type: 29 }, RA = { type: 31 }, NA = { type: 32 }, PA = (XA.prototype.write = function(A2) {
    this._value = this._value.concat(Q(A2));
  }, XA.prototype.read = function() {
    for (var A2 = [], e2 = this.consumeToken(); e2 !== NA; ) A2.push(e2), e2 = this.consumeToken();
    return A2;
  }, XA.prototype.consumeToken = function() {
    var A2 = this.consumeCodePoint();
    switch (A2) {
      case 34:
        return this.consumeStringToken(34);
      case 35:
        var e2 = this.peekCodePoint(0), t2 = this.peekCodePoint(1), r2 = this.peekCodePoint(2);
        if (FA(e2) || hA(t2, r2)) {
          var B2 = dA(e2, t2, r2) ? 2 : 1;
          return { type: 5, value: this.consumeName(), flags: B2 };
        }
        break;
      case 36:
        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), IA;
        break;
      case 39:
        return this.consumeStringToken(39);
      case 40:
        return HA;
      case 41:
        return pA;
      case 42:
        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), vA;
        break;
      case 43:
        if (fA(A2, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A2), this.consumeNumericToken();
        break;
      case 44:
        return EA;
      case 45:
        var r2 = A2, B2 = this.peekCodePoint(0), n2 = this.peekCodePoint(1);
        if (fA(r2, B2, n2)) return this.reconsumeCodePoint(A2), this.consumeNumericToken();
        if (dA(r2, B2, n2)) return this.reconsumeCodePoint(A2), this.consumeIdentLikeToken();
        if (45 === B2 && 62 === n2) return this.consumeCodePoint(), this.consumeCodePoint(), TA;
        break;
      case 46:
        if (fA(A2, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A2), this.consumeNumericToken();
        break;
      case 47:
        if (42 === this.peekCodePoint(0)) for (this.consumeCodePoint(); ; ) {
          var s2 = this.consumeCodePoint();
          if (42 === s2 && 47 === (s2 = this.consumeCodePoint())) return this.consumeToken();
          if (-1 === s2) return this.consumeToken();
        }
        break;
      case 58:
        return GA;
      case 59:
        return OA;
      case 60:
        if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(), this.consumeCodePoint(), SA;
        break;
      case 64:
        var n2 = this.peekCodePoint(0), o2 = this.peekCodePoint(1), i2 = this.peekCodePoint(2);
        if (dA(n2, o2, i2)) return { type: 7, value: this.consumeName() };
        break;
      case 91:
        return VA;
      case 92:
        if (hA(A2, this.peekCodePoint(0))) return this.reconsumeCodePoint(A2), this.consumeIdentLikeToken();
        break;
      case 93:
        return kA;
      case 61:
        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), yA;
        break;
      case 123:
        return bA;
      case 125:
        return DA;
      case 117:
      case 85:
        o2 = this.peekCodePoint(0), i2 = this.peekCodePoint(1);
        return 43 !== o2 || !lA(i2) && 63 !== i2 || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A2), this.consumeIdentLikeToken();
      case 124:
        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), mA;
        if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), KA;
        break;
      case 126:
        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), LA;
        break;
      case -1:
        return NA;
    }
    return CA(A2) ? (this.consumeWhiteSpace(), RA) : UA(A2) ? (this.reconsumeCodePoint(A2), this.consumeNumericToken()) : uA(A2) ? (this.reconsumeCodePoint(A2), this.consumeIdentLikeToken()) : { type: 6, value: g(A2) };
  }, XA.prototype.consumeCodePoint = function() {
    var A2 = this._value.shift();
    return void 0 === A2 ? -1 : A2;
  }, XA.prototype.reconsumeCodePoint = function(A2) {
    this._value.unshift(A2);
  }, XA.prototype.peekCodePoint = function(A2) {
    return A2 >= this._value.length ? -1 : this._value[A2];
  }, XA.prototype.consumeUnicodeRangeToken = function() {
    for (var A2 = [], e2 = this.consumeCodePoint(); lA(e2) && A2.length < 6; ) A2.push(e2), e2 = this.consumeCodePoint();
    for (var t2 = false; 63 === e2 && A2.length < 6; ) A2.push(e2), e2 = this.consumeCodePoint(), t2 = true;
    if (t2) return { type: 30, start: parseInt(g.apply(void 0, A2.map(function(A3) {
      return 63 === A3 ? 48 : A3;
    })), 16), end: parseInt(g.apply(void 0, A2.map(function(A3) {
      return 63 === A3 ? 70 : A3;
    })), 16) };
    var r2 = parseInt(g.apply(void 0, A2), 16);
    if (45 === this.peekCodePoint(0) && lA(this.peekCodePoint(1))) {
      this.consumeCodePoint();
      for (var e2 = this.consumeCodePoint(), B2 = []; lA(e2) && B2.length < 6; ) B2.push(e2), e2 = this.consumeCodePoint();
      return { type: 30, start: r2, end: parseInt(g.apply(void 0, B2), 16) };
    }
    return { type: 30, start: r2, end: r2 };
  }, XA.prototype.consumeIdentLikeToken = function() {
    var A2 = this.consumeName();
    return "url" === A2.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), { type: 19, value: A2 }) : { type: 20, value: A2 };
  }, XA.prototype.consumeUrlToken = function() {
    var A2 = [];
    if (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)) return { type: 22, value: "" };
    var e2, t2 = this.peekCodePoint(0);
    if (39 === t2 || 34 === t2) {
      t2 = this.consumeStringToken(this.consumeCodePoint());
      return 0 === t2.type && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), { type: 22, value: t2.value }) : (this.consumeBadUrlRemnants(), xA);
    }
    for (; ; ) {
      var r2 = this.consumeCodePoint();
      if (-1 === r2 || 41 === r2) return { type: 22, value: g.apply(void 0, A2) };
      if (CA(r2)) return this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), { type: 22, value: g.apply(void 0, A2) }) : (this.consumeBadUrlRemnants(), xA);
      if (34 === r2 || 39 === r2 || 40 === r2 || (0 <= (e2 = r2) && e2 <= 8 || 11 === e2 || 14 <= e2 && e2 <= 31 || 127 === e2)) return this.consumeBadUrlRemnants(), xA;
      if (92 === r2) {
        if (!hA(r2, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), xA;
        A2.push(this.consumeEscapedCodePoint());
      } else A2.push(r2);
    }
  }, XA.prototype.consumeWhiteSpace = function() {
    for (; CA(this.peekCodePoint(0)); ) this.consumeCodePoint();
  }, XA.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var A2 = this.consumeCodePoint();
      if (41 === A2 || -1 === A2) return;
      hA(A2, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, XA.prototype.consumeStringSlice = function(A2) {
    for (var e2 = ""; 0 < A2; ) {
      var t2 = Math.min(5e4, A2);
      e2 += g.apply(void 0, this._value.splice(0, t2)), A2 -= t2;
    }
    return this._value.shift(), e2;
  }, XA.prototype.consumeStringToken = function(A2) {
    for (var e2 = "", t2 = 0; ; ) {
      var r2, B2 = this._value[t2];
      if (-1 === B2 || void 0 === B2 || B2 === A2) return { type: 0, value: e2 += this.consumeStringSlice(t2) };
      if (10 === B2) return this._value.splice(0, t2), MA;
      92 !== B2 || -1 !== (r2 = this._value[t2 + 1]) && void 0 !== r2 && (10 === r2 ? (e2 += this.consumeStringSlice(t2), t2 = -1, this._value.shift()) : hA(B2, r2) && (e2 += this.consumeStringSlice(t2), e2 += g(this.consumeEscapedCodePoint()), t2 = -1)), t2++;
    }
  }, XA.prototype.consumeNumber = function() {
    var A2 = [], e2 = 4;
    for (43 !== (t2 = this.peekCodePoint(0)) && 45 !== t2 || A2.push(this.consumeCodePoint()); UA(this.peekCodePoint(0)); ) A2.push(this.consumeCodePoint());
    var t2 = this.peekCodePoint(0), r2 = this.peekCodePoint(1);
    if (46 === t2 && UA(r2)) for (A2.push(this.consumeCodePoint(), this.consumeCodePoint()), e2 = 8; UA(this.peekCodePoint(0)); ) A2.push(this.consumeCodePoint());
    t2 = this.peekCodePoint(0);
    var r2 = this.peekCodePoint(1), B2 = this.peekCodePoint(2);
    if ((69 === t2 || 101 === t2) && ((43 === r2 || 45 === r2) && UA(B2) || UA(r2))) for (A2.push(this.consumeCodePoint(), this.consumeCodePoint()), e2 = 8; UA(this.peekCodePoint(0)); ) A2.push(this.consumeCodePoint());
    return [(function(A3) {
      var e3 = 0, t3 = 1;
      43 !== A3[e3] && 45 !== A3[e3] || (45 === A3[e3] && (t3 = -1), e3++);
      for (var r3 = []; UA(A3[e3]); ) r3.push(A3[e3++]);
      var B3 = r3.length ? parseInt(g.apply(void 0, r3), 10) : 0;
      46 === A3[e3] && e3++;
      for (var n2 = []; UA(A3[e3]); ) n2.push(A3[e3++]);
      var s2 = n2.length, o2 = s2 ? parseInt(g.apply(void 0, n2), 10) : 0;
      69 !== A3[e3] && 101 !== A3[e3] || e3++;
      var i2 = 1;
      43 !== A3[e3] && 45 !== A3[e3] || (45 === A3[e3] && (i2 = -1), e3++);
      for (var Q2 = []; UA(A3[e3]); ) Q2.push(A3[e3++]);
      var c2 = Q2.length ? parseInt(g.apply(void 0, Q2), 10) : 0;
      return t3 * (B3 + o2 * Math.pow(10, -s2)) * Math.pow(10, i2 * c2);
    })(A2), e2];
  }, XA.prototype.consumeNumericToken = function() {
    var A2 = this.consumeNumber(), e2 = A2[0], t2 = A2[1], r2 = this.peekCodePoint(0), B2 = this.peekCodePoint(1), A2 = this.peekCodePoint(2);
    return dA(r2, B2, A2) ? { type: 15, number: e2, flags: t2, unit: this.consumeName() } : 37 === r2 ? (this.consumeCodePoint(), { type: 16, number: e2, flags: t2 }) : { type: 17, number: e2, flags: t2 };
  }, XA.prototype.consumeEscapedCodePoint = function() {
    var A2, e2 = this.consumeCodePoint();
    if (lA(e2)) {
      for (var t2 = g(e2); lA(this.peekCodePoint(0)) && t2.length < 6; ) t2 += g(this.consumeCodePoint());
      CA(this.peekCodePoint(0)) && this.consumeCodePoint();
      var r2 = parseInt(t2, 16);
      return 0 === r2 || 55296 <= (A2 = r2) && A2 <= 57343 || 1114111 < r2 ? 65533 : r2;
    }
    return -1 === e2 ? 65533 : e2;
  }, XA.prototype.consumeName = function() {
    for (var A2 = ""; ; ) {
      var e2 = this.consumeCodePoint();
      if (FA(e2)) A2 += g(e2);
      else {
        if (!hA(e2, this.peekCodePoint(0))) return this.reconsumeCodePoint(e2), A2;
        A2 += g(this.consumeEscapedCodePoint());
      }
    }
  }, XA);
  function XA() {
    this._value = [];
  }
  var JA = (YA.create = function(A2) {
    var e2 = new PA();
    return e2.write(A2), new YA(e2.read());
  }, YA.parseValue = function(A2) {
    return YA.create(A2).parseComponentValue();
  }, YA.parseValues = function(A2) {
    return YA.create(A2).parseComponentValues();
  }, YA.prototype.parseComponentValue = function() {
    for (var A2 = this.consumeToken(); 31 === A2.type; ) A2 = this.consumeToken();
    if (32 === A2.type) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    this.reconsumeToken(A2);
    for (var e2 = this.consumeComponentValue(); 31 === (A2 = this.consumeToken()).type; ) ;
    if (32 === A2.type) return e2;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }, YA.prototype.parseComponentValues = function() {
    for (var A2 = []; ; ) {
      var e2 = this.consumeComponentValue();
      if (32 === e2.type) return A2;
      A2.push(e2), A2.push();
    }
  }, YA.prototype.consumeComponentValue = function() {
    var A2 = this.consumeToken();
    switch (A2.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(A2.type);
      case 19:
        return this.consumeFunction(A2);
    }
    return A2;
  }, YA.prototype.consumeSimpleBlock = function(A2) {
    for (var e2 = { type: A2, values: [] }, t2 = this.consumeToken(); ; ) {
      if (32 === t2.type || ce(t2, A2)) return e2;
      this.reconsumeToken(t2), e2.values.push(this.consumeComponentValue()), t2 = this.consumeToken();
    }
  }, YA.prototype.consumeFunction = function(A2) {
    for (var e2 = { name: A2.value, values: [], type: 18 }; ; ) {
      var t2 = this.consumeToken();
      if (32 === t2.type || 3 === t2.type) return e2;
      this.reconsumeToken(t2), e2.values.push(this.consumeComponentValue());
    }
  }, YA.prototype.consumeToken = function() {
    var A2 = this._tokens.shift();
    return void 0 === A2 ? NA : A2;
  }, YA.prototype.reconsumeToken = function(A2) {
    this._tokens.unshift(A2);
  }, YA);
  function YA(A2) {
    this._tokens = A2;
  }
  function WA(A2) {
    return 15 === A2.type;
  }
  function ZA(A2) {
    return 17 === A2.type;
  }
  function _A(A2) {
    return 20 === A2.type;
  }
  function qA(A2) {
    return 0 === A2.type;
  }
  function jA(A2, e2) {
    return _A(A2) && A2.value === e2;
  }
  function zA(A2) {
    return 31 !== A2.type;
  }
  function $A(A2) {
    return 31 !== A2.type && 4 !== A2.type;
  }
  function Ae(A2) {
    var e2 = [], t2 = [];
    return A2.forEach(function(A3) {
      if (4 === A3.type) {
        if (0 === t2.length) throw new Error("Error parsing function args, zero tokens for arg");
        return e2.push(t2), void (t2 = []);
      }
      31 !== A3.type && t2.push(A3);
    }), t2.length && e2.push(t2), e2;
  }
  function ee(A2) {
    return 17 === A2.type || 15 === A2.type;
  }
  function te(A2) {
    return 16 === A2.type || ee(A2);
  }
  function re(A2) {
    return 1 < A2.length ? [A2[0], A2[1]] : [A2[0]];
  }
  function Be(A2, e2, t2) {
    var r2 = A2[0], A2 = A2[1];
    return [Ue(r2, e2), Ue(void 0 !== A2 ? A2 : r2, t2)];
  }
  function ne(A2) {
    return 15 === A2.type && ("deg" === A2.unit || "grad" === A2.unit || "rad" === A2.unit || "turn" === A2.unit);
  }
  function se(A2) {
    switch (A2.filter(_A).map(function(A3) {
      return A3.value;
    }).join(" ")) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [ae, ae];
      case "to top":
      case "bottom":
        return Ce(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [ae, we];
      case "to right":
      case "left":
        return Ce(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [we, we];
      case "to bottom":
      case "top":
        return Ce(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [we, ae];
      case "to left":
      case "right":
        return Ce(270);
    }
    return 0;
  }
  function oe(A2) {
    return 0 == (255 & A2);
  }
  function ie(A2) {
    var e2 = 255 & A2, t2 = 255 & A2 >> 8, r2 = 255 & A2 >> 16, A2 = 255 & A2 >> 24;
    return e2 < 255 ? "rgba(" + A2 + "," + r2 + "," + t2 + "," + e2 / 255 + ")" : "rgb(" + A2 + "," + r2 + "," + t2 + ")";
  }
  function Qe(A2, e2) {
    if (17 === A2.type) return A2.number;
    if (16 !== A2.type) return 0;
    var t2 = 3 === e2 ? 1 : 255;
    return 3 === e2 ? A2.number / 100 * t2 : Math.round(A2.number / 100 * t2);
  }
  var ce = function(A2, e2) {
    return 11 === e2 && 12 === A2.type || (28 === e2 && 29 === A2.type || 2 === e2 && 3 === A2.type);
  }, ae = { type: 17, number: 0, flags: 4 }, ge = { type: 16, number: 50, flags: 4 }, we = { type: 16, number: 100, flags: 4 }, Ue = function(A2, e2) {
    if (16 === A2.type) return A2.number / 100 * e2;
    if (WA(A2)) switch (A2.unit) {
      case "rem":
      case "em":
        return 16 * A2.number;
      default:
        return A2.number;
    }
    return A2.number;
  }, le = function(A2, e2) {
    if (15 === e2.type) switch (e2.unit) {
      case "deg":
        return Math.PI * e2.number / 180;
      case "grad":
        return Math.PI / 200 * e2.number;
      case "rad":
        return e2.number;
      case "turn":
        return 2 * Math.PI * e2.number;
    }
    throw new Error("Unsupported angle type");
  }, Ce = function(A2) {
    return Math.PI * A2 / 180;
  }, ue = function(A2, e2) {
    if (18 === e2.type) {
      var t2 = me[e2.name];
      if (void 0 === t2) throw new Error('Attempting to parse an unsupported color function "' + e2.name + '"');
      return t2(A2, e2.values);
    }
    if (5 === e2.type) {
      if (3 === e2.value.length) {
        var r2 = e2.value.substring(0, 1), B2 = e2.value.substring(1, 2), n2 = e2.value.substring(2, 3);
        return Fe(parseInt(r2 + r2, 16), parseInt(B2 + B2, 16), parseInt(n2 + n2, 16), 1);
      }
      if (4 === e2.value.length) {
        var r2 = e2.value.substring(0, 1), B2 = e2.value.substring(1, 2), n2 = e2.value.substring(2, 3), s2 = e2.value.substring(3, 4);
        return Fe(parseInt(r2 + r2, 16), parseInt(B2 + B2, 16), parseInt(n2 + n2, 16), parseInt(s2 + s2, 16) / 255);
      }
      if (6 === e2.value.length) {
        r2 = e2.value.substring(0, 2), B2 = e2.value.substring(2, 4), n2 = e2.value.substring(4, 6);
        return Fe(parseInt(r2, 16), parseInt(B2, 16), parseInt(n2, 16), 1);
      }
      if (8 === e2.value.length) {
        r2 = e2.value.substring(0, 2), B2 = e2.value.substring(2, 4), n2 = e2.value.substring(4, 6), s2 = e2.value.substring(6, 8);
        return Fe(parseInt(r2, 16), parseInt(B2, 16), parseInt(n2, 16), parseInt(s2, 16) / 255);
      }
    }
    if (20 === e2.type) {
      e2 = Le[e2.value.toUpperCase()];
      if (void 0 !== e2) return e2;
    }
    return Le.TRANSPARENT;
  }, Fe = function(A2, e2, t2, r2) {
    return (A2 << 24 | e2 << 16 | t2 << 8 | Math.round(255 * r2) << 0) >>> 0;
  }, he = function(A2, e2) {
    e2 = e2.filter($A);
    if (3 === e2.length) {
      var t2 = e2.map(Qe), r2 = t2[0], B2 = t2[1], t2 = t2[2];
      return Fe(r2, B2, t2, 1);
    }
    if (4 !== e2.length) return 0;
    e2 = e2.map(Qe), r2 = e2[0], B2 = e2[1], t2 = e2[2], e2 = e2[3];
    return Fe(r2, B2, t2, e2);
  };
  function de(A2, e2, t2) {
    return t2 < 0 && (t2 += 1), 1 <= t2 && --t2, t2 < 1 / 6 ? (e2 - A2) * t2 * 6 + A2 : t2 < 0.5 ? e2 : t2 < 2 / 3 ? 6 * (e2 - A2) * (2 / 3 - t2) + A2 : A2;
  }
  function fe(A2, e2) {
    return ue(A2, JA.create(e2).parseComponentValue());
  }
  function He(A2, e2) {
    return A2 = ue(A2, e2[0]), (e2 = e2[1]) && te(e2) ? { color: A2, stop: e2 } : { color: A2, stop: null };
  }
  function pe(A2, t2) {
    var e2 = A2[0], r2 = A2[A2.length - 1];
    null === e2.stop && (e2.stop = ae), null === r2.stop && (r2.stop = we);
    for (var B2 = [], n2 = 0, s2 = 0; s2 < A2.length; s2++) {
      var o2 = A2[s2].stop;
      null !== o2 ? (n2 < (o2 = Ue(o2, t2)) ? B2.push(o2) : B2.push(n2), n2 = o2) : B2.push(null);
    }
    for (var i2 = null, s2 = 0; s2 < B2.length; s2++) {
      var Q2 = B2[s2];
      if (null === Q2) null === i2 && (i2 = s2);
      else if (null !== i2) {
        for (var c2 = s2 - i2, a2 = (Q2 - B2[i2 - 1]) / (1 + c2), g2 = 1; g2 <= c2; g2++) B2[i2 + g2 - 1] = a2 * g2;
        i2 = null;
      }
    }
    return A2.map(function(A3, e3) {
      return { color: A3.color, stop: Math.max(Math.min(1, B2[e3] / t2), 0) };
    });
  }
  function Ee(A2, e2, t2) {
    var r2 = "number" == typeof A2 ? A2 : (s2 = e2 / 2, r2 = (n2 = t2) / 2, s2 = Ue((B2 = A2)[0], e2) - s2, n2 = r2 - Ue(B2[1], n2), (Math.atan2(n2, s2) + 2 * Math.PI) % (2 * Math.PI)), B2 = Math.abs(e2 * Math.sin(r2)) + Math.abs(t2 * Math.cos(r2)), n2 = e2 / 2, s2 = t2 / 2, e2 = B2 / 2, t2 = Math.sin(r2 - Math.PI / 2) * e2, e2 = Math.cos(r2 - Math.PI / 2) * e2;
    return [B2, n2 - e2, n2 + e2, s2 - t2, s2 + t2];
  }
  function Ie(A2, e2) {
    return Math.sqrt(A2 * A2 + e2 * e2);
  }
  function ye(A2, e2, B2, n2, s2) {
    return [[0, 0], [0, e2], [A2, 0], [A2, e2]].reduce(function(A3, e3) {
      var t2 = e3[0], r2 = e3[1], r2 = Ie(B2 - t2, n2 - r2);
      return (s2 ? r2 < A3.optimumDistance : r2 > A3.optimumDistance) ? { optimumCorner: e3, optimumDistance: r2 } : A3;
    }, { optimumDistance: s2 ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
  }
  var Ke = function(A2, e2) {
    var t2 = e2.filter($A), r2 = t2[0], B2 = t2[1], n2 = t2[2], e2 = t2[3], t2 = (17 === r2.type ? Ce(r2.number) : le(A2, r2)) / (2 * Math.PI), A2 = te(B2) ? B2.number / 100 : 0, r2 = te(n2) ? n2.number / 100 : 0, B2 = void 0 !== e2 && te(e2) ? Ue(e2, 1) : 1;
    if (0 == A2) return Fe(255 * r2, 255 * r2, 255 * r2, 1);
    n2 = r2 <= 0.5 ? r2 * (1 + A2) : r2 + A2 - r2 * A2, e2 = 2 * r2 - n2, A2 = de(e2, n2, t2 + 1 / 3), r2 = de(e2, n2, t2), t2 = de(e2, n2, t2 - 1 / 3);
    return Fe(255 * A2, 255 * r2, 255 * t2, B2);
  }, me = { hsl: Ke, hsla: Ke, rgb: he, rgba: he }, Le = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, be = { name: "background-clip", initialValue: "border-box", prefix: false, type: 1, parse: function(A2, e2) {
    return e2.map(function(A3) {
      if (_A(A3)) switch (A3.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
      return 0;
    });
  } }, De = { name: "background-color", initialValue: "transparent", prefix: false, type: 3, format: "color" }, Ke = function(t2, A2) {
    var r2 = Ce(180), B2 = [];
    return Ae(A2).forEach(function(A3, e2) {
      if (0 === e2) {
        e2 = A3[0];
        if (20 === e2.type && -1 !== ["top", "left", "right", "bottom"].indexOf(e2.value)) return void (r2 = se(A3));
        if (ne(e2)) return void (r2 = (le(t2, e2) + Ce(270)) % Ce(360));
      }
      A3 = He(t2, A3);
      B2.push(A3);
    }), { angle: r2, stops: B2, type: 1 };
  }, ve = "closest-side", xe = "farthest-side", Me = "closest-corner", Se = "farthest-corner", Te = "ellipse", Ge = "contain", he = function(r2, A2) {
    var B2 = 0, n2 = 3, s2 = [], o2 = [];
    return Ae(A2).forEach(function(A3, e2) {
      var t2 = true;
      0 === e2 ? t2 = A3.reduce(function(A4, e3) {
        if (_A(e3)) switch (e3.value) {
          case "center":
            return o2.push(ge), false;
          case "top":
          case "left":
            return o2.push(ae), false;
          case "right":
          case "bottom":
            return o2.push(we), false;
        }
        else if (te(e3) || ee(e3)) return o2.push(e3), false;
        return A4;
      }, t2) : 1 === e2 && (t2 = A3.reduce(function(A4, e3) {
        if (_A(e3)) switch (e3.value) {
          case "circle":
            return B2 = 0, false;
          case Te:
            return !(B2 = 1);
          case Ge:
          case ve:
            return n2 = 0, false;
          case xe:
            return !(n2 = 1);
          case Me:
            return !(n2 = 2);
          case "cover":
          case Se:
            return !(n2 = 3);
        }
        else if (ee(e3) || te(e3)) return (n2 = !Array.isArray(n2) ? [] : n2).push(e3), false;
        return A4;
      }, t2)), t2 && (A3 = He(r2, A3), s2.push(A3));
    }), { size: n2, shape: B2, stops: s2, position: o2, type: 2 };
  }, Oe = function(A2, e2) {
    if (22 === e2.type) {
      var t2 = { url: e2.value, type: 0 };
      return A2.cache.addImage(e2.value), t2;
    }
    if (18 !== e2.type) throw new Error("Unsupported image type " + e2.type);
    t2 = ke[e2.name];
    if (void 0 === t2) throw new Error('Attempting to parse an unsupported image function "' + e2.name + '"');
    return t2(A2, e2.values);
  };
  var Ve, ke = { "linear-gradient": function(t2, A2) {
    var r2 = Ce(180), B2 = [];
    return Ae(A2).forEach(function(A3, e2) {
      if (0 === e2) {
        e2 = A3[0];
        if (20 === e2.type && "to" === e2.value) return void (r2 = se(A3));
        if (ne(e2)) return void (r2 = le(t2, e2));
      }
      A3 = He(t2, A3);
      B2.push(A3);
    }), { angle: r2, stops: B2, type: 1 };
  }, "-moz-linear-gradient": Ke, "-ms-linear-gradient": Ke, "-o-linear-gradient": Ke, "-webkit-linear-gradient": Ke, "radial-gradient": function(B2, A2) {
    var n2 = 0, s2 = 3, o2 = [], i2 = [];
    return Ae(A2).forEach(function(A3, e2) {
      var t2, r2 = true;
      0 === e2 && (t2 = false, r2 = A3.reduce(function(A4, e3) {
        if (t2) if (_A(e3)) switch (e3.value) {
          case "center":
            return i2.push(ge), A4;
          case "top":
          case "left":
            return i2.push(ae), A4;
          case "right":
          case "bottom":
            return i2.push(we), A4;
        }
        else (te(e3) || ee(e3)) && i2.push(e3);
        else if (_A(e3)) switch (e3.value) {
          case "circle":
            return n2 = 0, false;
          case Te:
            return !(n2 = 1);
          case "at":
            return !(t2 = true);
          case ve:
            return s2 = 0, false;
          case "cover":
          case xe:
            return !(s2 = 1);
          case Ge:
          case Me:
            return !(s2 = 2);
          case Se:
            return !(s2 = 3);
        }
        else if (ee(e3) || te(e3)) return (s2 = !Array.isArray(s2) ? [] : s2).push(e3), false;
        return A4;
      }, r2)), r2 && (A3 = He(B2, A3), o2.push(A3));
    }), { size: s2, shape: n2, stops: o2, position: i2, type: 2 };
  }, "-moz-radial-gradient": he, "-ms-radial-gradient": he, "-o-radial-gradient": he, "-webkit-radial-gradient": he, "-webkit-gradient": function(r2, A2) {
    var e2 = Ce(180), B2 = [], n2 = 1;
    return Ae(A2).forEach(function(A3, e3) {
      var t2, A3 = A3[0];
      if (0 === e3) {
        if (_A(A3) && "linear" === A3.value) return void (n2 = 1);
        if (_A(A3) && "radial" === A3.value) return void (n2 = 2);
      }
      18 === A3.type && ("from" === A3.name ? (t2 = ue(r2, A3.values[0]), B2.push({ stop: ae, color: t2 })) : "to" === A3.name ? (t2 = ue(r2, A3.values[0]), B2.push({ stop: we, color: t2 })) : "color-stop" !== A3.name || 2 === (A3 = A3.values.filter($A)).length && (t2 = ue(r2, A3[1]), A3 = A3[0], ZA(A3) && B2.push({ stop: { type: 16, number: 100 * A3.number, flags: A3.flags }, color: t2 })));
    }), 1 === n2 ? { angle: (e2 + Ce(180)) % Ce(360), stops: B2, type: n2 } : { size: 3, shape: 0, stops: B2, position: [], type: n2 };
  } }, Re = { name: "background-image", initialValue: "none", type: 1, prefix: false, parse: function(e2, A2) {
    if (0 === A2.length) return [];
    var t2 = A2[0];
    return 20 === t2.type && "none" === t2.value ? [] : A2.filter(function(A3) {
      return $A(A3) && !(20 === (A3 = A3).type && "none" === A3.value || 18 === A3.type && !ke[A3.name]);
    }).map(function(A3) {
      return Oe(e2, A3);
    });
  } }, Ne = { name: "background-origin", initialValue: "border-box", prefix: false, type: 1, parse: function(A2, e2) {
    return e2.map(function(A3) {
      if (_A(A3)) switch (A3.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
      return 0;
    });
  } }, Pe = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: false, parse: function(A2, e2) {
    return Ae(e2).map(function(A3) {
      return A3.filter(te);
    }).map(re);
  } }, Xe = { name: "background-repeat", initialValue: "repeat", prefix: false, type: 1, parse: function(A2, e2) {
    return Ae(e2).map(function(A3) {
      return A3.filter(_A).map(function(A4) {
        return A4.value;
      }).join(" ");
    }).map(Je);
  } }, Je = function(A2) {
    switch (A2) {
      case "no-repeat":
        return 1;
      case "repeat-x":
      case "repeat no-repeat":
        return 2;
      case "repeat-y":
      case "no-repeat repeat":
        return 3;
      default:
        return 0;
    }
  };
  (he = Ve = Ve || {}).AUTO = "auto", he.CONTAIN = "contain";
  function Ye(A2, e2) {
    return _A(A2) && "normal" === A2.value ? 1.2 * e2 : 17 === A2.type ? e2 * A2.number : te(A2) ? Ue(A2, e2) : e2;
  }
  var We, Ze, _e = { name: "background-size", initialValue: "0", prefix: !(he.COVER = "cover"), type: 1, parse: function(A2, e2) {
    return Ae(e2).map(function(A3) {
      return A3.filter(qe);
    });
  } }, qe = function(A2) {
    return _A(A2) || te(A2);
  }, he = function(A2) {
    return { name: "border-" + A2 + "-color", initialValue: "transparent", prefix: false, type: 3, format: "color" };
  }, je = he("top"), ze = he("right"), $e = he("bottom"), At = he("left"), he = function(A2) {
    return { name: "border-radius-" + A2, initialValue: "0 0", prefix: false, type: 1, parse: function(A3, e2) {
      return re(e2.filter(te));
    } };
  }, et = he("top-left"), tt = he("top-right"), rt = he("bottom-right"), Bt = he("bottom-left"), he = function(A2) {
    return { name: "border-" + A2 + "-style", initialValue: "solid", prefix: false, type: 2, parse: function(A3, e2) {
      switch (e2) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    } };
  }, nt = he("top"), st = he("right"), ot = he("bottom"), it = he("left"), he = function(A2) {
    return { name: "border-" + A2 + "-width", initialValue: "0", type: 0, prefix: false, parse: function(A3, e2) {
      return WA(e2) ? e2.number : 0;
    } };
  }, Qt = he("top"), ct = he("right"), at = he("bottom"), gt = he("left"), wt = { name: "color", initialValue: "transparent", prefix: false, type: 3, format: "color" }, Ut = { name: "direction", initialValue: "ltr", prefix: false, type: 2, parse: function(A2, e2) {
    return "rtl" !== e2 ? 0 : 1;
  } }, lt = { name: "display", initialValue: "inline-block", prefix: false, type: 1, parse: function(A2, e2) {
    return e2.filter(_A).reduce(function(A3, e3) {
      return A3 | Ct(e3.value);
    }, 0);
  } }, Ct = function(A2) {
    switch (A2) {
      case "block":
      case "-webkit-box":
        return 2;
      case "inline":
        return 4;
      case "run-in":
        return 8;
      case "flow":
        return 16;
      case "flow-root":
        return 32;
      case "table":
        return 64;
      case "flex":
      case "-webkit-flex":
        return 128;
      case "grid":
      case "-ms-grid":
        return 256;
      case "ruby":
        return 512;
      case "subgrid":
        return 1024;
      case "list-item":
        return 2048;
      case "table-row-group":
        return 4096;
      case "table-header-group":
        return 8192;
      case "table-footer-group":
        return 16384;
      case "table-row":
        return 32768;
      case "table-cell":
        return 65536;
      case "table-column-group":
        return 131072;
      case "table-column":
        return 262144;
      case "table-caption":
        return 524288;
      case "ruby-base":
        return 1048576;
      case "ruby-text":
        return 2097152;
      case "ruby-base-container":
        return 4194304;
      case "ruby-text-container":
        return 8388608;
      case "contents":
        return 16777216;
      case "inline-block":
        return 33554432;
      case "inline-list-item":
        return 67108864;
      case "inline-table":
        return 134217728;
      case "inline-flex":
        return 268435456;
      case "inline-grid":
        return 536870912;
    }
    return 0;
  }, ut = { name: "float", initialValue: "none", prefix: false, type: 2, parse: function(A2, e2) {
    switch (e2) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  } }, Ft = { name: "letter-spacing", initialValue: "0", prefix: false, type: 0, parse: function(A2, e2) {
    return !(20 === e2.type && "normal" === e2.value || 17 !== e2.type && 15 !== e2.type) ? e2.number : 0;
  } }, ht = { name: "line-break", initialValue: (he = We = We || {}).NORMAL = "normal", prefix: !(he.STRICT = "strict"), type: 2, parse: function(A2, e2) {
    return "strict" !== e2 ? We.NORMAL : We.STRICT;
  } }, dt = { name: "line-height", initialValue: "normal", prefix: false, type: 4 }, ft = { name: "list-style-image", initialValue: "none", type: 0, prefix: false, parse: function(A2, e2) {
    return 20 === e2.type && "none" === e2.value ? null : Oe(A2, e2);
  } }, Ht = { name: "list-style-position", initialValue: "outside", prefix: false, type: 2, parse: function(A2, e2) {
    return "inside" !== e2 ? 1 : 0;
  } }, pt = { name: "list-style-type", initialValue: "none", prefix: false, type: 2, parse: function(A2, e2) {
    switch (e2) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      default:
        return -1;
    }
  } }, he = function(A2) {
    return { name: "margin-" + A2, initialValue: "0", prefix: false, type: 4 };
  }, Et = he("top"), It = he("right"), yt = he("bottom"), Kt = he("left"), mt = { name: "overflow", initialValue: "visible", prefix: false, type: 1, parse: function(A2, e2) {
    return e2.filter(_A).map(function(A3) {
      switch (A3.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        default:
          return 0;
      }
    });
  } }, Lt = { name: "overflow-wrap", initialValue: "normal", prefix: false, type: 2, parse: function(A2, e2) {
    return "break-word" !== e2 ? "normal" : "break-word";
  } }, he = function(A2) {
    return { name: "padding-" + A2, initialValue: "0", prefix: false, type: 3, format: "length-percentage" };
  }, bt = he("top"), Dt = he("right"), vt = he("bottom"), xt = he("left"), Mt = { name: "text-align", initialValue: "left", prefix: false, type: 2, parse: function(A2, e2) {
    switch (e2) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      default:
        return 0;
    }
  } }, St = { name: "position", initialValue: "static", prefix: false, type: 2, parse: function(A2, e2) {
    switch (e2) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  } }, Tt = { name: "text-shadow", initialValue: "none", type: 1, prefix: false, parse: function(n2, A2) {
    return 1 === A2.length && jA(A2[0], "none") ? [] : Ae(A2).map(function(A3) {
      for (var e2 = { color: Le.TRANSPARENT, offsetX: ae, offsetY: ae, blur: ae }, t2 = 0, r2 = 0; r2 < A3.length; r2++) {
        var B2 = A3[r2];
        ee(B2) ? (0 === t2 ? e2.offsetX = B2 : 1 === t2 ? e2.offsetY = B2 : e2.blur = B2, t2++) : e2.color = ue(n2, B2);
      }
      return e2;
    });
  } }, Gt = { name: "text-transform", initialValue: "none", prefix: false, type: 2, parse: function(A2, e2) {
    switch (e2) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  } }, Ot = { name: "transform", initialValue: "none", prefix: true, type: 0, parse: function(A2, e2) {
    if (20 === e2.type && "none" === e2.value) return null;
    if (18 !== e2.type) return null;
    var t2 = Vt[e2.name];
    if (void 0 === t2) throw new Error('Attempting to parse an unsupported transform function "' + e2.name + '"');
    return t2(e2.values);
  } }, Vt = { matrix: function(A2) {
    A2 = A2.filter(function(A3) {
      return 17 === A3.type;
    }).map(function(A3) {
      return A3.number;
    });
    return 6 === A2.length ? A2 : null;
  }, matrix3d: function(A2) {
    var e2 = A2.filter(function(A3) {
      return 17 === A3.type;
    }).map(function(A3) {
      return A3.number;
    }), t2 = e2[0], r2 = e2[1];
    e2[2], e2[3];
    var B2 = e2[4], n2 = e2[5];
    e2[6], e2[7], e2[8], e2[9], e2[10], e2[11];
    var s2 = e2[12], A2 = e2[13];
    return e2[14], e2[15], 16 === e2.length ? [t2, r2, B2, n2, s2, A2] : null;
  } }, he = { type: 16, number: 50, flags: 4 }, kt = [he, he], Rt = { name: "transform-origin", initialValue: "50% 50%", prefix: true, type: 1, parse: function(A2, e2) {
    e2 = e2.filter(te);
    return 2 !== e2.length ? kt : [e2[0], e2[1]];
  } }, Nt = { name: "visible", initialValue: "none", prefix: false, type: 2, parse: function(A2, e2) {
    switch (e2) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      default:
        return 0;
    }
  } };
  (he = Ze = Ze || {}).NORMAL = "normal", he.BREAK_ALL = "break-all";
  function Pt(A2, e2) {
    return 0 != (A2 & e2);
  }
  function Xt(A2, e2, t2) {
    return (A2 = A2 && A2[Math.min(e2, A2.length - 1)]) ? t2 ? A2.open : A2.close : "";
  }
  var Jt = { name: "word-break", initialValue: "normal", prefix: !(he.KEEP_ALL = "keep-all"), type: 2, parse: function(A2, e2) {
    switch (e2) {
      case "break-all":
        return Ze.BREAK_ALL;
      case "keep-all":
        return Ze.KEEP_ALL;
      default:
        return Ze.NORMAL;
    }
  } }, Yt = { name: "z-index", initialValue: "auto", prefix: false, type: 0, parse: function(A2, e2) {
    if (20 === e2.type) return { auto: true, order: 0 };
    if (ZA(e2)) return { auto: false, order: e2.number };
    throw new Error("Invalid z-index number parsed");
  } }, Wt = function(A2, e2) {
    if (15 === e2.type) switch (e2.unit.toLowerCase()) {
      case "s":
        return 1e3 * e2.number;
      case "ms":
        return e2.number;
    }
    throw new Error("Unsupported time type");
  }, Zt = { name: "opacity", initialValue: "1", type: 0, prefix: false, parse: function(A2, e2) {
    return ZA(e2) ? e2.number : 1;
  } }, _t = { name: "text-decoration-color", initialValue: "transparent", prefix: false, type: 3, format: "color" }, qt = { name: "text-decoration-line", initialValue: "none", prefix: false, type: 1, parse: function(A2, e2) {
    return e2.filter(_A).map(function(A3) {
      switch (A3.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(A3) {
      return 0 !== A3;
    });
  } }, jt = { name: "font-family", initialValue: "", prefix: false, type: 1, parse: function(A2, e2) {
    var t2 = [], r2 = [];
    return e2.forEach(function(A3) {
      switch (A3.type) {
        case 20:
        case 0:
          t2.push(A3.value);
          break;
        case 17:
          t2.push(A3.number.toString());
          break;
        case 4:
          r2.push(t2.join(" ")), t2.length = 0;
      }
    }), t2.length && r2.push(t2.join(" ")), r2.map(function(A3) {
      return -1 === A3.indexOf(" ") ? A3 : "'" + A3 + "'";
    });
  } }, zt = { name: "font-size", initialValue: "0", prefix: false, type: 3, format: "length" }, $t = { name: "font-weight", initialValue: "normal", type: 0, prefix: false, parse: function(A2, e2) {
    return ZA(e2) ? e2.number : !_A(e2) || "bold" !== e2.value ? 400 : 700;
  } }, Ar = { name: "font-variant", initialValue: "none", type: 1, prefix: false, parse: function(A2, e2) {
    return e2.filter(_A).map(function(A3) {
      return A3.value;
    });
  } }, er = { name: "font-style", initialValue: "normal", prefix: false, type: 2, parse: function(A2, e2) {
    switch (e2) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      default:
        return "normal";
    }
  } }, tr = { name: "content", initialValue: "none", type: 1, prefix: false, parse: function(A2, e2) {
    if (0 === e2.length) return [];
    var t2 = e2[0];
    return 20 === t2.type && "none" === t2.value ? [] : e2;
  } }, rr = { name: "counter-increment", initialValue: "none", prefix: true, type: 1, parse: function(A2, e2) {
    if (0 === e2.length) return null;
    var t2 = e2[0];
    if (20 === t2.type && "none" === t2.value) return null;
    for (var r2 = [], B2 = e2.filter(zA), n2 = 0; n2 < B2.length; n2++) {
      var s2 = B2[n2], o2 = B2[n2 + 1];
      20 === s2.type && (o2 = o2 && ZA(o2) ? o2.number : 1, r2.push({ counter: s2.value, increment: o2 }));
    }
    return r2;
  } }, Br = { name: "counter-reset", initialValue: "none", prefix: true, type: 1, parse: function(A2, e2) {
    if (0 === e2.length) return [];
    for (var t2 = [], r2 = e2.filter(zA), B2 = 0; B2 < r2.length; B2++) {
      var n2 = r2[B2], s2 = r2[B2 + 1];
      _A(n2) && "none" !== n2.value && (s2 = s2 && ZA(s2) ? s2.number : 0, t2.push({ counter: n2.value, reset: s2 }));
    }
    return t2;
  } }, nr = { name: "duration", initialValue: "0s", prefix: false, type: 1, parse: function(e2, A2) {
    return A2.filter(WA).map(function(A3) {
      return Wt(e2, A3);
    });
  } }, sr = { name: "quotes", initialValue: "none", prefix: true, type: 1, parse: function(A2, e2) {
    if (0 === e2.length) return null;
    var t2 = e2[0];
    if (20 === t2.type && "none" === t2.value) return null;
    var r2 = [], B2 = e2.filter(qA);
    if (B2.length % 2 != 0) return null;
    for (var n2 = 0; n2 < B2.length; n2 += 2) {
      var s2 = B2[n2].value, o2 = B2[n2 + 1].value;
      r2.push({ open: s2, close: o2 });
    }
    return r2;
  } }, or = { name: "box-shadow", initialValue: "none", type: 1, prefix: false, parse: function(n2, A2) {
    return 1 === A2.length && jA(A2[0], "none") ? [] : Ae(A2).map(function(A3) {
      for (var e2 = { color: 255, offsetX: ae, offsetY: ae, blur: ae, spread: ae, inset: false }, t2 = 0, r2 = 0; r2 < A3.length; r2++) {
        var B2 = A3[r2];
        jA(B2, "inset") ? e2.inset = true : ee(B2) ? (0 === t2 ? e2.offsetX = B2 : 1 === t2 ? e2.offsetY = B2 : 2 === t2 ? e2.blur = B2 : e2.spread = B2, t2++) : e2.color = ue(n2, B2);
      }
      return e2;
    });
  } }, ir = { name: "paint-order", initialValue: "normal", prefix: false, type: 1, parse: function(A2, e2) {
    var t2 = [];
    return e2.filter(_A).forEach(function(A3) {
      switch (A3.value) {
        case "stroke":
          t2.push(1);
          break;
        case "fill":
          t2.push(0);
          break;
        case "markers":
          t2.push(2);
      }
    }), [0, 1, 2].forEach(function(A3) {
      -1 === t2.indexOf(A3) && t2.push(A3);
    }), t2;
  } }, Qr = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: false, type: 3, format: "color" }, cr = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: false, parse: function(A2, e2) {
    return WA(e2) ? e2.number : 0;
  } }, ar = (gr.prototype.isVisible = function() {
    return 0 < this.display && 0 < this.opacity && 0 === this.visibility;
  }, gr.prototype.isTransparent = function() {
    return oe(this.backgroundColor);
  }, gr.prototype.isTransformed = function() {
    return null !== this.transform;
  }, gr.prototype.isPositioned = function() {
    return 0 !== this.position;
  }, gr.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, gr.prototype.isFloating = function() {
    return 0 !== this.float;
  }, gr.prototype.isInlineLevel = function() {
    return Pt(this.display, 4) || Pt(this.display, 33554432) || Pt(this.display, 268435456) || Pt(this.display, 536870912) || Pt(this.display, 67108864) || Pt(this.display, 134217728);
  }, gr);
  function gr(A2, e2) {
    this.animationDuration = lr(A2, nr, e2.animationDuration), this.backgroundClip = lr(A2, be, e2.backgroundClip), this.backgroundColor = lr(A2, De, e2.backgroundColor), this.backgroundImage = lr(A2, Re, e2.backgroundImage), this.backgroundOrigin = lr(A2, Ne, e2.backgroundOrigin), this.backgroundPosition = lr(A2, Pe, e2.backgroundPosition), this.backgroundRepeat = lr(A2, Xe, e2.backgroundRepeat), this.backgroundSize = lr(A2, _e, e2.backgroundSize), this.borderTopColor = lr(A2, je, e2.borderTopColor), this.borderRightColor = lr(A2, ze, e2.borderRightColor), this.borderBottomColor = lr(A2, $e, e2.borderBottomColor), this.borderLeftColor = lr(A2, At, e2.borderLeftColor), this.borderTopLeftRadius = lr(A2, et, e2.borderTopLeftRadius), this.borderTopRightRadius = lr(A2, tt, e2.borderTopRightRadius), this.borderBottomRightRadius = lr(A2, rt, e2.borderBottomRightRadius), this.borderBottomLeftRadius = lr(A2, Bt, e2.borderBottomLeftRadius), this.borderTopStyle = lr(A2, nt, e2.borderTopStyle), this.borderRightStyle = lr(A2, st, e2.borderRightStyle), this.borderBottomStyle = lr(A2, ot, e2.borderBottomStyle), this.borderLeftStyle = lr(A2, it, e2.borderLeftStyle), this.borderTopWidth = lr(A2, Qt, e2.borderTopWidth), this.borderRightWidth = lr(A2, ct, e2.borderRightWidth), this.borderBottomWidth = lr(A2, at, e2.borderBottomWidth), this.borderLeftWidth = lr(A2, gt, e2.borderLeftWidth), this.boxShadow = lr(A2, or, e2.boxShadow), this.color = lr(A2, wt, e2.color), this.direction = lr(A2, Ut, e2.direction), this.display = lr(A2, lt, e2.display), this.float = lr(A2, ut, e2.cssFloat), this.fontFamily = lr(A2, jt, e2.fontFamily), this.fontSize = lr(A2, zt, e2.fontSize), this.fontStyle = lr(A2, er, e2.fontStyle), this.fontVariant = lr(A2, Ar, e2.fontVariant), this.fontWeight = lr(A2, $t, e2.fontWeight), this.letterSpacing = lr(A2, Ft, e2.letterSpacing), this.lineBreak = lr(A2, ht, e2.lineBreak), this.lineHeight = lr(A2, dt, e2.lineHeight), this.listStyleImage = lr(A2, ft, e2.listStyleImage), this.listStylePosition = lr(A2, Ht, e2.listStylePosition), this.listStyleType = lr(A2, pt, e2.listStyleType), this.marginTop = lr(A2, Et, e2.marginTop), this.marginRight = lr(A2, It, e2.marginRight), this.marginBottom = lr(A2, yt, e2.marginBottom), this.marginLeft = lr(A2, Kt, e2.marginLeft), this.opacity = lr(A2, Zt, e2.opacity);
    var t2 = lr(A2, mt, e2.overflow);
    this.overflowX = t2[0], this.overflowY = t2[1 < t2.length ? 1 : 0], this.overflowWrap = lr(A2, Lt, e2.overflowWrap), this.paddingTop = lr(A2, bt, e2.paddingTop), this.paddingRight = lr(A2, Dt, e2.paddingRight), this.paddingBottom = lr(A2, vt, e2.paddingBottom), this.paddingLeft = lr(A2, xt, e2.paddingLeft), this.paintOrder = lr(A2, ir, e2.paintOrder), this.position = lr(A2, St, e2.position), this.textAlign = lr(A2, Mt, e2.textAlign), this.textDecorationColor = lr(A2, _t, null !== (t2 = e2.textDecorationColor) && void 0 !== t2 ? t2 : e2.color), this.textDecorationLine = lr(A2, qt, null !== (t2 = e2.textDecorationLine) && void 0 !== t2 ? t2 : e2.textDecoration), this.textShadow = lr(A2, Tt, e2.textShadow), this.textTransform = lr(A2, Gt, e2.textTransform), this.transform = lr(A2, Ot, e2.transform), this.transformOrigin = lr(A2, Rt, e2.transformOrigin), this.visibility = lr(A2, Nt, e2.visibility), this.webkitTextStrokeColor = lr(A2, Qr, e2.webkitTextStrokeColor), this.webkitTextStrokeWidth = lr(A2, cr, e2.webkitTextStrokeWidth), this.wordBreak = lr(A2, Jt, e2.wordBreak), this.zIndex = lr(A2, Yt, e2.zIndex);
  }
  for (var wr = function(A2, e2) {
    this.content = lr(A2, tr, e2.content), this.quotes = lr(A2, sr, e2.quotes);
  }, Ur = function(A2, e2) {
    this.counterIncrement = lr(A2, rr, e2.counterIncrement), this.counterReset = lr(A2, Br, e2.counterReset);
  }, lr = function(A2, e2, t2) {
    var r2 = new PA(), t2 = null != t2 ? t2.toString() : e2.initialValue;
    r2.write(t2);
    var B2 = new JA(r2.read());
    switch (e2.type) {
      case 2:
        var n2 = B2.parseComponentValue();
        return e2.parse(A2, _A(n2) ? n2.value : e2.initialValue);
      case 0:
        return e2.parse(A2, B2.parseComponentValue());
      case 1:
        return e2.parse(A2, B2.parseComponentValues());
      case 4:
        return B2.parseComponentValue();
      case 3:
        switch (e2.format) {
          case "angle":
            return le(A2, B2.parseComponentValue());
          case "color":
            return ue(A2, B2.parseComponentValue());
          case "image":
            return Oe(A2, B2.parseComponentValue());
          case "length":
            var s2 = B2.parseComponentValue();
            return ee(s2) ? s2 : ae;
          case "length-percentage":
            s2 = B2.parseComponentValue();
            return te(s2) ? s2 : ae;
          case "time":
            return Wt(A2, B2.parseComponentValue());
        }
    }
  }, Cr = function(A2, e2) {
    A2 = (function(A3) {
      switch (A3.getAttribute("data-html2canvas-debug")) {
        case "all":
          return 1;
        case "clone":
          return 2;
        case "parse":
          return 3;
        case "render":
          return 4;
        default:
          return 0;
      }
    })(A2);
    return 1 === A2 || e2 === A2;
  }, ur = function(A2, e2) {
    this.context = A2, this.textNodes = [], this.elements = [], this.flags = 0, Cr(e2, 3), this.styles = new ar(A2, window.getComputedStyle(e2, null)), JB(e2) && (this.styles.animationDuration.some(function(A3) {
      return 0 < A3;
    }) && (e2.style.animationDuration = "0s"), null !== this.styles.transform && (e2.style.transform = "none")), this.bounds = f(this.context, e2), Cr(e2, 4) && (this.flags |= 16);
  }, Fr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hr = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), dr = 0; dr < Fr.length; dr++) hr[Fr.charCodeAt(dr)] = dr;
  function fr(A2, e2, t2) {
    return A2.slice ? A2.slice(e2, t2) : new Uint16Array(Array.prototype.slice.call(A2, e2, t2));
  }
  var Hr = (pr.prototype.get = function(A2) {
    var e2;
    if (0 <= A2) {
      if (A2 < 55296 || 56319 < A2 && A2 <= 65535) return e2 = this.index[A2 >> 5], this.data[e2 = (e2 << 2) + (31 & A2)];
      if (A2 <= 65535) return e2 = this.index[2048 + (A2 - 55296 >> 5)], this.data[e2 = (e2 << 2) + (31 & A2)];
      if (A2 < this.highStart) return e2 = this.index[e2 = 2080 + (A2 >> 11)], e2 = this.index[e2 += A2 >> 5 & 63], this.data[e2 = (e2 << 2) + (31 & A2)];
      if (A2 <= 1114111) return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, pr);
  function pr(A2, e2, t2, r2, B2, n2) {
    this.initialValue = A2, this.errorValue = e2, this.highStart = t2, this.highValueIndex = r2, this.index = B2, this.data = n2;
  }
  for (var Er = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ir = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), yr = 0; yr < Er.length; yr++) Ir[Er.charCodeAt(yr)] = yr;
  function Kr(A2) {
    return kr.get(A2);
  }
  function mr(A2) {
    var t2 = (function(A3) {
      for (var e2 = [], t3 = 0, r3 = A3.length; t3 < r3; ) {
        var B3, n3 = A3.charCodeAt(t3++);
        55296 <= n3 && n3 <= 56319 && t3 < r3 ? 56320 == (64512 & (B3 = A3.charCodeAt(t3++))) ? e2.push(((1023 & n3) << 10) + (1023 & B3) + 65536) : (e2.push(n3), t3--) : e2.push(n3);
      }
      return e2;
    })(A2), r2 = t2.length, B2 = 0, n2 = 0, s2 = t2.map(Kr);
    return { next: function() {
      if (r2 <= B2) return { done: true, value: null };
      for (var A3 = Rr; B2 < r2 && (A3 = (function(A4, e3) {
        var t3 = e3 - 2, r3 = A4[t3], B3 = A4[e3 - 1], e3 = A4[e3];
        if (2 === B3 && 3 === e3) return Rr;
        if (2 === B3 || 3 === B3 || 4 === B3) return "\xF7";
        if (2 === e3 || 3 === e3 || 4 === e3) return "\xF7";
        if (B3 === Tr && -1 !== [Tr, Gr, Or, Vr].indexOf(e3)) return Rr;
        if (!(B3 !== Or && B3 !== Gr || e3 !== Gr && 10 !== e3)) return Rr;
        if ((B3 === Vr || 10 === B3) && 10 === e3) return Rr;
        if (13 === e3 || 5 === e3) return Rr;
        if (7 === e3) return Rr;
        if (1 === B3) return Rr;
        if (13 === B3 && 14 === e3) {
          for (; 5 === r3; ) r3 = A4[--t3];
          if (14 === r3) return Rr;
        }
        if (15 === B3 && 15 === e3) {
          for (var n3 = 0; 15 === r3; ) n3++, r3 = A4[--t3];
          if (n3 % 2 == 0) return Rr;
        }
        return "\xF7";
      })(s2, ++B2)) === Rr; ) ;
      if (A3 === Rr && B2 !== r2) return { done: true, value: null };
      var e2 = function() {
        for (var A4 = [], e3 = 0; e3 < arguments.length; e3++) A4[e3] = arguments[e3];
        if (String.fromCodePoint) return String.fromCodePoint.apply(String, A4);
        var t3 = A4.length;
        if (!t3) return "";
        for (var r3 = [], B3 = -1, n3 = ""; ++B3 < t3; ) {
          var s3 = A4[B3];
          s3 <= 65535 ? r3.push(s3) : (s3 -= 65536, r3.push(55296 + (s3 >> 10), s3 % 1024 + 56320)), (B3 + 1 === t3 || 16384 < r3.length) && (n3 += String.fromCharCode.apply(String, r3), r3.length = 0);
        }
        return n3;
      }.apply(null, t2.slice(n2, B2));
      return n2 = B2, { value: e2, done: false };
    } };
  }
  function Lr(A2) {
    return 0 === A2[0] && 255 === A2[1] && 0 === A2[2] && 255 === A2[3];
  }
  var br, Dr, vr, xr, Mr, Sr, Tr = 8, Gr = 9, Or = 11, Vr = 12, kr = (vr = (function(A2) {
    var e2, t2, r2, B2, n2 = 0.75 * A2.length, s2 = A2.length, o2 = 0;
    "=" === A2[A2.length - 1] && (n2--, "=" === A2[A2.length - 2] && n2--);
    for (var n2 = new ("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(n2), i2 = Array.isArray(n2) ? n2 : new Uint8Array(n2), Q2 = 0; Q2 < s2; Q2 += 4) e2 = hr[A2.charCodeAt(Q2)], t2 = hr[A2.charCodeAt(Q2 + 1)], r2 = hr[A2.charCodeAt(Q2 + 2)], B2 = hr[A2.charCodeAt(Q2 + 3)], i2[o2++] = e2 << 2 | t2 >> 4, i2[o2++] = (15 & t2) << 4 | r2 >> 2, i2[o2++] = (3 & r2) << 6 | 63 & B2;
    return n2;
  })(br = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="), xr = Array.isArray(vr) ? (function(A2) {
    for (var e2 = A2.length, t2 = [], r2 = 0; r2 < e2; r2 += 4) t2.push(A2[r2 + 3] << 24 | A2[r2 + 2] << 16 | A2[r2 + 1] << 8 | A2[r2]);
    return t2;
  })(vr) : new Uint32Array(vr), Mr = Array.isArray(vr) ? (function(A2) {
    for (var e2 = A2.length, t2 = [], r2 = 0; r2 < e2; r2 += 2) t2.push(A2[r2 + 1] << 8 | A2[r2]);
    return t2;
  })(vr) : new Uint16Array(vr), br = fr(Mr, 12, xr[4] / 2), Dr = 2 === xr[5] ? fr(Mr, (24 + xr[4]) / 2) : (vr = xr, Mr = Math.ceil((24 + xr[4]) / 4), vr.slice ? vr.slice(Mr, Dr) : new Uint32Array(Array.prototype.slice.call(vr, Mr, Dr))), new Hr(xr[0], xr[1], xr[2], xr[3], br, Dr)), Rr = "\xD7", Nr = function(A2, e2, t2, r2, B2) {
    var n2 = "http://www.w3.org/2000/svg", s2 = document.createElementNS(n2, "svg"), n2 = document.createElementNS(n2, "foreignObject");
    return s2.setAttributeNS(null, "width", A2.toString()), s2.setAttributeNS(null, "height", e2.toString()), n2.setAttributeNS(null, "width", "100%"), n2.setAttributeNS(null, "height", "100%"), n2.setAttributeNS(null, "x", t2.toString()), n2.setAttributeNS(null, "y", r2.toString()), n2.setAttributeNS(null, "externalResourcesRequired", "true"), s2.appendChild(n2), n2.appendChild(B2), s2;
  }, Pr = function(r2) {
    return new Promise(function(A2, e2) {
      var t2 = new Image();
      t2.onload = function() {
        return A2(t2);
      }, t2.onerror = e2, t2.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(r2));
    });
  }, Xr = { get SUPPORT_RANGE_BOUNDS() {
    var A2 = (function(A3) {
      if (A3.createRange) {
        var e2 = A3.createRange();
        if (e2.getBoundingClientRect) {
          var t2 = A3.createElement("boundtest");
          t2.style.height = "123px", t2.style.display = "block", A3.body.appendChild(t2), e2.selectNode(t2);
          e2 = e2.getBoundingClientRect(), e2 = Math.round(e2.height);
          if (A3.body.removeChild(t2), 123 === e2) return true;
        }
      }
      return false;
    })(document);
    return Object.defineProperty(Xr, "SUPPORT_RANGE_BOUNDS", { value: A2 }), A2;
  }, get SUPPORT_WORD_BREAKING() {
    var A2 = Xr.SUPPORT_RANGE_BOUNDS && (function(A3) {
      var e2 = A3.createElement("boundtest");
      e2.style.width = "50px", e2.style.display = "block", e2.style.fontSize = "12px", e2.style.letterSpacing = "0px", e2.style.wordSpacing = "0px", A3.body.appendChild(e2);
      var r2 = A3.createRange();
      e2.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "";
      var B2 = e2.firstChild, t2 = Q(B2.data).map(function(A4) {
        return g(A4);
      }), n2 = 0, s2 = {}, t2 = t2.every(function(A4, e3) {
        r2.setStart(B2, n2), r2.setEnd(B2, n2 + A4.length);
        var t3 = r2.getBoundingClientRect();
        n2 += A4.length;
        A4 = t3.x > s2.x || t3.y > s2.y;
        return s2 = t3, 0 === e3 || A4;
      });
      return A3.body.removeChild(e2), t2;
    })(document);
    return Object.defineProperty(Xr, "SUPPORT_WORD_BREAKING", { value: A2 }), A2;
  }, get SUPPORT_SVG_DRAWING() {
    var A2 = (function(A3) {
      var e2 = new Image(), t2 = A3.createElement("canvas"), A3 = t2.getContext("2d");
      if (!A3) return false;
      e2.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
      try {
        A3.drawImage(e2, 0, 0), t2.toDataURL();
      } catch (A4) {
        return false;
      }
      return true;
    })(document);
    return Object.defineProperty(Xr, "SUPPORT_SVG_DRAWING", { value: A2 }), A2;
  }, get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A2 = "function" == typeof Array.from && "function" == typeof window.fetch ? (function(t2) {
      var A3 = t2.createElement("canvas"), r2 = 100;
      A3.width = r2, A3.height = r2;
      var B2 = A3.getContext("2d");
      if (!B2) return Promise.reject(false);
      B2.fillStyle = "rgb(0, 255, 0)", B2.fillRect(0, 0, r2, r2);
      var e2 = new Image(), n2 = A3.toDataURL();
      e2.src = n2;
      e2 = Nr(r2, r2, 0, 0, e2);
      return B2.fillStyle = "red", B2.fillRect(0, 0, r2, r2), Pr(e2).then(function(A4) {
        B2.drawImage(A4, 0, 0);
        var e3 = B2.getImageData(0, 0, r2, r2).data;
        B2.fillStyle = "red", B2.fillRect(0, 0, r2, r2);
        A4 = t2.createElement("div");
        return A4.style.backgroundImage = "url(" + n2 + ")", A4.style.height = "100px", Lr(e3) ? Pr(Nr(r2, r2, 0, 0, A4)) : Promise.reject(false);
      }).then(function(A4) {
        return B2.drawImage(A4, 0, 0), Lr(B2.getImageData(0, 0, r2, r2).data);
      }).catch(function() {
        return false;
      });
    })(document) : Promise.resolve(false);
    return Object.defineProperty(Xr, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A2 }), A2;
  }, get SUPPORT_CORS_IMAGES() {
    var A2 = void 0 !== new Image().crossOrigin;
    return Object.defineProperty(Xr, "SUPPORT_CORS_IMAGES", { value: A2 }), A2;
  }, get SUPPORT_RESPONSE_TYPE() {
    var A2 = "string" == typeof new XMLHttpRequest().responseType;
    return Object.defineProperty(Xr, "SUPPORT_RESPONSE_TYPE", { value: A2 }), A2;
  }, get SUPPORT_CORS_XHR() {
    var A2 = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(Xr, "SUPPORT_CORS_XHR", { value: A2 }), A2;
  }, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var A2 = !("undefined" == typeof Intl || !Intl.Segmenter);
    return Object.defineProperty(Xr, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A2 }), A2;
  } }, Jr = function(A2, e2) {
    this.text = A2, this.bounds = e2;
  }, Yr = function(A2, e2) {
    var t2 = e2.ownerDocument;
    if (t2) {
      var r2 = t2.createElement("html2canvaswrapper");
      r2.appendChild(e2.cloneNode(true));
      t2 = e2.parentNode;
      if (t2) {
        t2.replaceChild(r2, e2);
        A2 = f(A2, r2);
        return r2.firstChild && t2.replaceChild(r2.firstChild, r2), A2;
      }
    }
    return d.EMPTY;
  }, Wr = function(A2, e2, t2) {
    var r2 = A2.ownerDocument;
    if (!r2) throw new Error("Node has no owner document");
    r2 = r2.createRange();
    return r2.setStart(A2, e2), r2.setEnd(A2, e2 + t2), r2;
  }, Zr = function(A2) {
    if (Xr.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e2 = new Intl.Segmenter(void 0, { granularity: "grapheme" });
      return Array.from(e2.segment(A2)).map(function(A3) {
        return A3.segment;
      });
    }
    return (function(A3) {
      for (var e3, t2 = mr(A3), r2 = []; !(e3 = t2.next()).done; ) e3.value && r2.push(e3.value.slice());
      return r2;
    })(A2);
  }, _r = function(A2, e2) {
    return 0 !== e2.letterSpacing ? Zr(A2) : (function(A3, e3) {
      if (Xr.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var t2 = new Intl.Segmenter(void 0, { granularity: "word" });
        return Array.from(t2.segment(A3)).map(function(A4) {
          return A4.segment;
        });
      }
      return jr(A3, e3);
    })(A2, e2);
  }, qr = [32, 160, 4961, 65792, 65793, 4153, 4241], jr = function(A2, e2) {
    for (var t2, r2 = wA(A2, { lineBreak: e2.lineBreak, wordBreak: "break-word" === e2.overflowWrap ? "break-word" : e2.wordBreak }), B2 = []; !(t2 = r2.next()).done; ) !(function() {
      var A3, e3;
      t2.value && (A3 = t2.value.slice(), A3 = Q(A3), e3 = "", A3.forEach(function(A4) {
        -1 === qr.indexOf(A4) ? e3 += g(A4) : (e3.length && B2.push(e3), B2.push(g(A4)), e3 = "");
      }), e3.length && B2.push(e3));
    })();
    return B2;
  }, zr = function(A2, e2, t2) {
    var B2, n2, s2, o2, i2;
    this.text = $r(e2.data, t2.textTransform), this.textBounds = (B2 = A2, A2 = this.text, s2 = e2, A2 = _r(A2, n2 = t2), o2 = [], i2 = 0, A2.forEach(function(A3) {
      var e3, t3, r2;
      n2.textDecorationLine.length || 0 < A3.trim().length ? Xr.SUPPORT_RANGE_BOUNDS ? 1 < (r2 = Wr(s2, i2, A3.length).getClientRects()).length ? (e3 = Zr(A3), t3 = 0, e3.forEach(function(A4) {
        o2.push(new Jr(A4, d.fromDOMRectList(B2, Wr(s2, t3 + i2, A4.length).getClientRects()))), t3 += A4.length;
      })) : o2.push(new Jr(A3, d.fromDOMRectList(B2, r2))) : (r2 = s2.splitText(A3.length), o2.push(new Jr(A3, Yr(B2, s2))), s2 = r2) : Xr.SUPPORT_RANGE_BOUNDS || (s2 = s2.splitText(A3.length)), i2 += A3.length;
    }), o2);
  }, $r = function(A2, e2) {
    switch (e2) {
      case 1:
        return A2.toLowerCase();
      case 3:
        return A2.replace(AB, eB);
      case 2:
        return A2.toUpperCase();
      default:
        return A2;
    }
  }, AB = /(^|\s|:|-|\(|\))([a-z])/g, eB = function(A2, e2, t2) {
    return 0 < A2.length ? e2 + t2.toUpperCase() : A2;
  }, tB = (A(rB, Sr = ur), rB);
  function rB(A2, e2) {
    A2 = Sr.call(this, A2, e2) || this;
    return A2.src = e2.currentSrc || e2.src, A2.intrinsicWidth = e2.naturalWidth, A2.intrinsicHeight = e2.naturalHeight, A2.context.cache.addImage(A2.src), A2;
  }
  var BB, nB = (A(sB, BB = ur), sB);
  function sB(A2, e2) {
    A2 = BB.call(this, A2, e2) || this;
    return A2.canvas = e2, A2.intrinsicWidth = e2.width, A2.intrinsicHeight = e2.height, A2;
  }
  var oB, iB = (A(QB, oB = ur), QB);
  function QB(A2, e2) {
    var t2 = oB.call(this, A2, e2) || this, r2 = new XMLSerializer(), A2 = f(A2, e2);
    return e2.setAttribute("width", A2.width + "px"), e2.setAttribute("height", A2.height + "px"), t2.svg = "data:image/svg+xml," + encodeURIComponent(r2.serializeToString(e2)), t2.intrinsicWidth = e2.width.baseVal.value, t2.intrinsicHeight = e2.height.baseVal.value, t2.context.cache.addImage(t2.svg), t2;
  }
  var cB, aB = (A(gB, cB = ur), gB);
  function gB(A2, e2) {
    A2 = cB.call(this, A2, e2) || this;
    return A2.value = e2.value, A2;
  }
  var wB, UB = (A(lB, wB = ur), lB);
  function lB(A2, e2) {
    A2 = wB.call(this, A2, e2) || this;
    return A2.start = e2.start, A2.reversed = "boolean" == typeof e2.reversed && true === e2.reversed, A2;
  }
  var CB, uB = [{ type: 15, flags: 0, unit: "px", number: 3 }], FB = [{ type: 16, flags: 0, number: 50 }], hB = "checkbox", dB = "radio", fB = "password", HB = 707406591, pB = (A(EB, CB = ur), EB);
  function EB(A2, e2) {
    var t2 = CB.call(this, A2, e2) || this;
    switch (t2.type = e2.type.toLowerCase(), t2.checked = e2.checked, t2.value = 0 === (e2 = (A2 = e2).type === fB ? new Array(A2.value.length + 1).join("\u2022") : A2.value).length ? A2.placeholder || "" : e2, t2.type !== hB && t2.type !== dB || (t2.styles.backgroundColor = 3739148031, t2.styles.borderTopColor = t2.styles.borderRightColor = t2.styles.borderBottomColor = t2.styles.borderLeftColor = 2779096575, t2.styles.borderTopWidth = t2.styles.borderRightWidth = t2.styles.borderBottomWidth = t2.styles.borderLeftWidth = 1, t2.styles.borderTopStyle = t2.styles.borderRightStyle = t2.styles.borderBottomStyle = t2.styles.borderLeftStyle = 1, t2.styles.backgroundClip = [0], t2.styles.backgroundOrigin = [0], t2.bounds = (e2 = t2.bounds).width > e2.height ? new d(e2.left + (e2.width - e2.height) / 2, e2.top, e2.height, e2.height) : e2.width < e2.height ? new d(e2.left, e2.top + (e2.height - e2.width) / 2, e2.width, e2.width) : e2), t2.type) {
      case hB:
        t2.styles.borderTopRightRadius = t2.styles.borderTopLeftRadius = t2.styles.borderBottomRightRadius = t2.styles.borderBottomLeftRadius = uB;
        break;
      case dB:
        t2.styles.borderTopRightRadius = t2.styles.borderTopLeftRadius = t2.styles.borderBottomRightRadius = t2.styles.borderBottomLeftRadius = FB;
    }
    return t2;
  }
  var IB, yB = (A(KB, IB = ur), KB);
  function KB(A2, e2) {
    A2 = IB.call(this, A2, e2) || this, e2 = e2.options[e2.selectedIndex || 0];
    return A2.value = e2 && e2.text || "", A2;
  }
  var mB, LB = (A(bB, mB = ur), bB);
  function bB(A2, e2) {
    A2 = mB.call(this, A2, e2) || this;
    return A2.value = e2.value, A2;
  }
  var DB, vB = (A(xB, DB = ur), xB);
  function xB(A2, e2) {
    var t2, r2, B2 = DB.call(this, A2, e2) || this;
    B2.src = e2.src, B2.width = parseInt(e2.width, 10) || 0, B2.height = parseInt(e2.height, 10) || 0, B2.backgroundColor = B2.styles.backgroundColor;
    try {
      e2.contentWindow && e2.contentWindow.document && e2.contentWindow.document.documentElement && (B2.tree = kB(A2, e2.contentWindow.document.documentElement), t2 = e2.contentWindow.document.documentElement ? fe(A2, getComputedStyle(e2.contentWindow.document.documentElement).backgroundColor) : Le.TRANSPARENT, r2 = e2.contentWindow.document.body ? fe(A2, getComputedStyle(e2.contentWindow.document.body).backgroundColor) : Le.TRANSPARENT, B2.backgroundColor = oe(t2) ? oe(r2) ? B2.styles.backgroundColor : r2 : t2);
    } catch (A3) {
    }
    return B2;
  }
  function MB(A2) {
    return "VIDEO" === A2.tagName;
  }
  function SB(A2) {
    return "STYLE" === A2.tagName;
  }
  function TB(A2) {
    return 0 < A2.tagName.indexOf("-");
  }
  var GB = ["OL", "UL", "MENU"], OB = function(e2, A2, t2, r2) {
    for (var B2 = A2.firstChild; B2; B2 = s2) {
      var n2, s2 = B2.nextSibling;
      PB(B2) && 0 < B2.data.trim().length ? t2.textNodes.push(new zr(e2, B2, t2.styles)) : XB(B2) && (rn(B2) && B2.assignedNodes ? B2.assignedNodes().forEach(function(A3) {
        return OB(e2, A3, t2, r2);
      }) : (n2 = VB(e2, B2)).styles.isVisible() && (RB(B2, n2, r2) ? n2.flags |= 4 : NB(n2.styles) && (n2.flags |= 2), -1 !== GB.indexOf(B2.tagName) && (n2.flags |= 8), t2.elements.push(n2), B2.slot, B2.shadowRoot ? OB(e2, B2.shadowRoot, n2, r2) : en(B2) || qB(B2) || tn(B2) || OB(e2, B2, n2, r2)));
    }
  }, VB = function(A2, e2) {
    return new ($B(e2) ? tB : zB(e2) ? nB : qB(e2) ? iB : WB(e2) ? aB : ZB(e2) ? UB : _B(e2) ? pB : tn(e2) ? yB : en(e2) ? LB : An(e2) ? vB : ur)(A2, e2);
  }, kB = function(A2, e2) {
    var t2 = VB(A2, e2);
    return t2.flags |= 4, OB(A2, e2, t2, t2), t2;
  }, RB = function(A2, e2, t2) {
    return e2.styles.isPositionedWithZIndex() || e2.styles.opacity < 1 || e2.styles.isTransformed() || jB(A2) && t2.styles.isTransparent();
  }, NB = function(A2) {
    return A2.isPositioned() || A2.isFloating();
  }, PB = function(A2) {
    return A2.nodeType === Node.TEXT_NODE;
  }, XB = function(A2) {
    return A2.nodeType === Node.ELEMENT_NODE;
  }, JB = function(A2) {
    return XB(A2) && void 0 !== A2.style && !YB(A2);
  }, YB = function(A2) {
    return "object" == typeof A2.className;
  }, WB = function(A2) {
    return "LI" === A2.tagName;
  }, ZB = function(A2) {
    return "OL" === A2.tagName;
  }, _B = function(A2) {
    return "INPUT" === A2.tagName;
  }, qB = function(A2) {
    return "svg" === A2.tagName;
  }, jB = function(A2) {
    return "BODY" === A2.tagName;
  }, zB = function(A2) {
    return "CANVAS" === A2.tagName;
  }, $B = function(A2) {
    return "IMG" === A2.tagName;
  }, An = function(A2) {
    return "IFRAME" === A2.tagName;
  }, en = function(A2) {
    return "TEXTAREA" === A2.tagName;
  }, tn = function(A2) {
    return "SELECT" === A2.tagName;
  }, rn = function(A2) {
    return "SLOT" === A2.tagName;
  }, Bn = (nn.prototype.getCounterValue = function(A2) {
    A2 = this.counters[A2];
    return A2 && A2.length ? A2[A2.length - 1] : 1;
  }, nn.prototype.getCounterValues = function(A2) {
    A2 = this.counters[A2];
    return A2 || [];
  }, nn.prototype.pop = function(A2) {
    var e2 = this;
    A2.forEach(function(A3) {
      return e2.counters[A3].pop();
    });
  }, nn.prototype.parse = function(A2) {
    var t2 = this, e2 = A2.counterIncrement, A2 = A2.counterReset, r2 = true;
    null !== e2 && e2.forEach(function(A3) {
      var e3 = t2.counters[A3.counter];
      e3 && 0 !== A3.increment && (r2 = false, e3.length || e3.push(1), e3[Math.max(0, e3.length - 1)] += A3.increment);
    });
    var B2 = [];
    return r2 && A2.forEach(function(A3) {
      var e3 = t2.counters[A3.counter];
      B2.push(A3.counter), (e3 = e3 || (t2.counters[A3.counter] = [])).push(A3.reset);
    }), B2;
  }, nn);
  function nn() {
    this.counters = {};
  }
  function sn(r2, A2, e2, B2, t2, n2) {
    return r2 < A2 || e2 < r2 ? Fn(r2, t2, 0 < n2.length) : B2.integers.reduce(function(A3, e3, t3) {
      for (; e3 <= r2; ) r2 -= e3, A3 += B2.values[t3];
      return A3;
    }, "") + n2;
  }
  function on(A2, e2, t2, r2) {
    for (var B2 = ""; t2 || A2--, B2 = r2(A2) + B2, e2 <= (A2 /= e2) * e2; ) ;
    return B2;
  }
  function Qn(A2, e2, t2, r2, B2) {
    var n2 = t2 - e2 + 1;
    return (A2 < 0 ? "-" : "") + (on(Math.abs(A2), n2, r2, function(A3) {
      return g(Math.floor(A3 % n2) + e2);
    }) + B2);
  }
  function cn(A2, e2, t2) {
    void 0 === t2 && (t2 = ". ");
    var r2 = e2.length;
    return on(Math.abs(A2), r2, false, function(A3) {
      return e2[Math.floor(A3 % r2)];
    }) + t2;
  }
  function an(A2, e2, t2, r2, B2, n2) {
    if (A2 < -9999 || 9999 < A2) return Fn(A2, 4, 0 < B2.length);
    var s2 = Math.abs(A2), o2 = B2;
    if (0 === s2) return e2[0] + o2;
    for (var i2 = 0; 0 < s2 && i2 <= 4; i2++) {
      var Q2 = s2 % 10;
      0 == Q2 && Pt(n2, 1) && "" !== o2 ? o2 = e2[Q2] + o2 : 1 < Q2 || 1 == Q2 && 0 === i2 || 1 == Q2 && 1 === i2 && Pt(n2, 2) || 1 == Q2 && 1 === i2 && Pt(n2, 4) && 100 < A2 || 1 == Q2 && 1 < i2 && Pt(n2, 8) ? o2 = e2[Q2] + (0 < i2 ? t2[i2 - 1] : "") + o2 : 1 == Q2 && 0 < i2 && (o2 = t2[i2 - 1] + o2), s2 = Math.floor(s2 / 10);
    }
    return (A2 < 0 ? r2 : "") + o2;
  }
  var gn, wn = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, Un = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["\u0554", "\u0553", "\u0552", "\u0551", "\u0550", "\u054F", "\u054E", "\u054D", "\u054C", "\u054B", "\u054A", "\u0549", "\u0548", "\u0547", "\u0546", "\u0545", "\u0544", "\u0543", "\u0542", "\u0541", "\u0540", "\u053F", "\u053E", "\u053D", "\u053C", "\u053B", "\u053A", "\u0539", "\u0538", "\u0537", "\u0536", "\u0535", "\u0534", "\u0533", "\u0532", "\u0531"] }, ln = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["\u05D9\u05F3", "\u05D8\u05F3", "\u05D7\u05F3", "\u05D6\u05F3", "\u05D5\u05F3", "\u05D4\u05F3", "\u05D3\u05F3", "\u05D2\u05F3", "\u05D1\u05F3", "\u05D0\u05F3", "\u05EA", "\u05E9", "\u05E8", "\u05E7", "\u05E6", "\u05E4", "\u05E2", "\u05E1", "\u05E0", "\u05DE", "\u05DC", "\u05DB", "\u05D9\u05D8", "\u05D9\u05D7", "\u05D9\u05D6", "\u05D8\u05D6", "\u05D8\u05D5", "\u05D9", "\u05D8", "\u05D7", "\u05D6", "\u05D5", "\u05D4", "\u05D3", "\u05D2", "\u05D1", "\u05D0"] }, Cn = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["\u10F5", "\u10F0", "\u10EF", "\u10F4", "\u10EE", "\u10ED", "\u10EC", "\u10EB", "\u10EA", "\u10E9", "\u10E8", "\u10E7", "\u10E6", "\u10E5", "\u10E4", "\u10F3", "\u10E2", "\u10E1", "\u10E0", "\u10DF", "\u10DE", "\u10DD", "\u10F2", "\u10DC", "\u10DB", "\u10DA", "\u10D9", "\u10D8", "\u10D7", "\u10F1", "\u10D6", "\u10D5", "\u10D4", "\u10D3", "\u10D2", "\u10D1", "\u10D0"] }, un = "\uB9C8\uC774\uB108\uC2A4", Fn = function(A2, e2, t2) {
    var r2 = t2 ? ". " : "", B2 = t2 ? "\u3001" : "", n2 = t2 ? ", " : "", s2 = t2 ? " " : "";
    switch (e2) {
      case 0:
        return "\u2022" + s2;
      case 1:
        return "\u25E6" + s2;
      case 2:
        return "\u25FE" + s2;
      case 5:
        var o2 = Qn(A2, 48, 57, true, r2);
        return o2.length < 4 ? "0" + o2 : o2;
      case 4:
        return cn(A2, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", B2);
      case 6:
        return sn(A2, 1, 3999, wn, 3, r2).toLowerCase();
      case 7:
        return sn(A2, 1, 3999, wn, 3, r2);
      case 8:
        return Qn(A2, 945, 969, false, r2);
      case 9:
        return Qn(A2, 97, 122, false, r2);
      case 10:
        return Qn(A2, 65, 90, false, r2);
      case 11:
        return Qn(A2, 1632, 1641, true, r2);
      case 12:
      case 49:
        return sn(A2, 1, 9999, Un, 3, r2);
      case 35:
        return sn(A2, 1, 9999, Un, 3, r2).toLowerCase();
      case 13:
        return Qn(A2, 2534, 2543, true, r2);
      case 14:
      case 30:
        return Qn(A2, 6112, 6121, true, r2);
      case 15:
        return cn(A2, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", B2);
      case 16:
        return cn(A2, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", B2);
      case 17:
      case 48:
        return an(A2, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", "\u8CA0", B2, 14);
      case 47:
        return an(A2, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", "\u62FE\u4F70\u4EDF\u842C", "\u8CA0", B2, 15);
      case 42:
        return an(A2, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", "\u8D1F", B2, 14);
      case 41:
        return an(A2, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", "\u62FE\u4F70\u4EDF\u842C", "\u8D1F", B2, 15);
      case 26:
        return an(A2, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", "\u30DE\u30A4\u30CA\u30B9", B2, 0);
      case 25:
        return an(A2, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", "\u30DE\u30A4\u30CA\u30B9", B2, 7);
      case 31:
        return an(A2, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", un, n2, 7);
      case 33:
        return an(A2, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", un, n2, 0);
      case 32:
        return an(A2, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", un, n2, 7);
      case 18:
        return Qn(A2, 2406, 2415, true, r2);
      case 20:
        return sn(A2, 1, 19999, Cn, 3, r2);
      case 21:
        return Qn(A2, 2790, 2799, true, r2);
      case 22:
        return Qn(A2, 2662, 2671, true, r2);
      case 22:
        return sn(A2, 1, 10999, ln, 3, r2);
      case 23:
        return cn(A2, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
      case 24:
        return cn(A2, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
      case 27:
        return Qn(A2, 3302, 3311, true, r2);
      case 28:
        return cn(A2, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", B2);
      case 29:
        return cn(A2, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", B2);
      case 34:
        return Qn(A2, 3792, 3801, true, r2);
      case 37:
        return Qn(A2, 6160, 6169, true, r2);
      case 38:
        return Qn(A2, 4160, 4169, true, r2);
      case 39:
        return Qn(A2, 2918, 2927, true, r2);
      case 40:
        return Qn(A2, 1776, 1785, true, r2);
      case 43:
        return Qn(A2, 3046, 3055, true, r2);
      case 44:
        return Qn(A2, 3174, 3183, true, r2);
      case 45:
        return Qn(A2, 3664, 3673, true, r2);
      case 46:
        return Qn(A2, 3872, 3881, true, r2);
      default:
        return Qn(A2, 48, 57, true, r2);
    }
  }, hn = "data-html2canvas-ignore", dn = (fn.prototype.toIFrame = function(A2, r2) {
    var e2 = this, B2 = pn(A2, r2);
    if (!B2.contentWindow) return Promise.reject("Unable to find iframe window");
    var t2 = A2.defaultView.pageXOffset, n2 = A2.defaultView.pageYOffset, s2 = B2.contentWindow, o2 = s2.document, A2 = In(B2).then(function() {
      return a(e2, void 0, void 0, function() {
        var e3, t3;
        return H(this, function(A3) {
          switch (A3.label) {
            case 0:
              return this.scrolledElements.forEach(bn), s2 && (s2.scrollTo(r2.left, r2.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || s2.scrollY === r2.top && s2.scrollX === r2.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(s2.scrollX - r2.left, s2.scrollY - r2.top, 0, 0))), e3 = this.options.onclone, void 0 === (t3 = this.clonedReferenceElement) ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : o2.fonts && o2.fonts.ready ? [4, o2.fonts.ready] : [3, 2];
            case 1:
              A3.sent(), A3.label = 2;
            case 2:
              return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, En(o2)] : [3, 4];
            case 3:
              A3.sent(), A3.label = 4;
            case 4:
              return "function" == typeof e3 ? [2, Promise.resolve().then(function() {
                return e3(o2, t3);
              }).then(function() {
                return B2;
              })] : [2, B2];
          }
        });
      });
    });
    return o2.open(), o2.write(mn(document.doctype) + "<html></html>"), Ln(this.referenceElement.ownerDocument, t2, n2), o2.replaceChild(o2.adoptNode(this.documentElement), o2.documentElement), o2.close(), A2;
  }, fn.prototype.createElementClone = function(A2) {
    if (Cr(A2, 2), zB(A2)) return this.createCanvasClone(A2);
    if (MB(A2)) return this.createVideoClone(A2);
    if (SB(A2)) return this.createStyleClone(A2);
    var e2 = A2.cloneNode(false);
    return $B(e2) && ($B(A2) && A2.currentSrc && A2.currentSrc !== A2.src && (e2.src = A2.currentSrc, e2.srcset = ""), "lazy" === e2.loading && (e2.loading = "eager")), TB(e2) ? this.createCustomElementClone(e2) : e2;
  }, fn.prototype.createCustomElementClone = function(A2) {
    var e2 = document.createElement("html2canvascustomelement");
    return Kn(A2.style, e2), e2;
  }, fn.prototype.createStyleClone = function(A2) {
    try {
      var e2 = A2.sheet;
      if (e2 && e2.cssRules) {
        var t2 = [].slice.call(e2.cssRules, 0).reduce(function(A3, e3) {
          return e3 && "string" == typeof e3.cssText ? A3 + e3.cssText : A3;
        }, ""), r2 = A2.cloneNode(false);
        return r2.textContent = t2, r2;
      }
    } catch (A3) {
      if (this.context.logger.error("Unable to access cssRules property", A3), "SecurityError" !== A3.name) throw A3;
    }
    return A2.cloneNode(false);
  }, fn.prototype.createCanvasClone = function(e2) {
    var A2;
    if (this.options.inlineImages && e2.ownerDocument) {
      var t2 = e2.ownerDocument.createElement("img");
      try {
        return t2.src = e2.toDataURL(), t2;
      } catch (A3) {
        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e2);
      }
    }
    t2 = e2.cloneNode(false);
    try {
      t2.width = e2.width, t2.height = e2.height;
      var r2, B2, n2 = e2.getContext("2d"), s2 = t2.getContext("2d");
      return s2 && (!this.options.allowTaint && n2 ? s2.putImageData(n2.getImageData(0, 0, e2.width, e2.height), 0, 0) : (!(r2 = null !== (A2 = e2.getContext("webgl2")) && void 0 !== A2 ? A2 : e2.getContext("webgl")) || false === (null == (B2 = r2.getContextAttributes()) ? void 0 : B2.preserveDrawingBuffer) && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e2), s2.drawImage(e2, 0, 0))), t2;
    } catch (A3) {
      this.context.logger.info("Unable to clone canvas as it is tainted", e2);
    }
    return t2;
  }, fn.prototype.createVideoClone = function(e2) {
    var A2 = e2.ownerDocument.createElement("canvas");
    A2.width = e2.offsetWidth, A2.height = e2.offsetHeight;
    var t2 = A2.getContext("2d");
    try {
      return t2 && (t2.drawImage(e2, 0, 0, A2.width, A2.height), this.options.allowTaint || t2.getImageData(0, 0, A2.width, A2.height)), A2;
    } catch (A3) {
      this.context.logger.info("Unable to clone video as it is tainted", e2);
    }
    A2 = e2.ownerDocument.createElement("canvas");
    return A2.width = e2.offsetWidth, A2.height = e2.offsetHeight, A2;
  }, fn.prototype.appendChildNode = function(A2, e2, t2) {
    XB(e2) && ("SCRIPT" === e2.tagName || e2.hasAttribute(hn) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(e2)) || this.options.copyStyles && XB(e2) && SB(e2) || A2.appendChild(this.cloneNode(e2, t2));
  }, fn.prototype.cloneChildNodes = function(A2, e2, t2) {
    for (var r2, B2 = this, n2 = (A2.shadowRoot || A2).firstChild; n2; n2 = n2.nextSibling) XB(n2) && rn(n2) && "function" == typeof n2.assignedNodes ? (r2 = n2.assignedNodes()).length && r2.forEach(function(A3) {
      return B2.appendChildNode(e2, A3, t2);
    }) : this.appendChildNode(e2, n2, t2);
  }, fn.prototype.cloneNode = function(A2, e2) {
    if (PB(A2)) return document.createTextNode(A2.data);
    if (!A2.ownerDocument) return A2.cloneNode(false);
    var t2 = A2.ownerDocument.defaultView;
    if (t2 && XB(A2) && (JB(A2) || YB(A2))) {
      var r2 = this.createElementClone(A2);
      r2.style.transitionProperty = "none";
      var B2 = t2.getComputedStyle(A2), n2 = t2.getComputedStyle(A2, ":before"), s2 = t2.getComputedStyle(A2, ":after");
      this.referenceElement === A2 && JB(r2) && (this.clonedReferenceElement = r2), jB(r2) && Mn(r2);
      t2 = this.counters.parse(new Ur(this.context, B2)), n2 = this.resolvePseudoContent(A2, r2, n2, gn.BEFORE);
      TB(A2) && (e2 = true), MB(A2) || this.cloneChildNodes(A2, r2, e2), n2 && r2.insertBefore(n2, r2.firstChild);
      s2 = this.resolvePseudoContent(A2, r2, s2, gn.AFTER);
      return s2 && r2.appendChild(s2), this.counters.pop(t2), (B2 && (this.options.copyStyles || YB(A2)) && !An(A2) || e2) && Kn(B2, r2), 0 === A2.scrollTop && 0 === A2.scrollLeft || this.scrolledElements.push([r2, A2.scrollLeft, A2.scrollTop]), (en(A2) || tn(A2)) && (en(r2) || tn(r2)) && (r2.value = A2.value), r2;
    }
    return A2.cloneNode(false);
  }, fn.prototype.resolvePseudoContent = function(o2, A2, e2, t2) {
    var i2 = this;
    if (e2) {
      var r2 = e2.content, Q2 = A2.ownerDocument;
      if (Q2 && r2 && "none" !== r2 && "-moz-alt-content" !== r2 && "none" !== e2.display) {
        this.counters.parse(new Ur(this.context, e2));
        var c2 = new wr(this.context, e2), a2 = Q2.createElement("html2canvaspseudoelement");
        Kn(e2, a2), c2.content.forEach(function(A3) {
          if (0 === A3.type) a2.appendChild(Q2.createTextNode(A3.value));
          else if (22 === A3.type) {
            var e3 = Q2.createElement("img");
            e3.src = A3.value, e3.style.opacity = "1", a2.appendChild(e3);
          } else if (18 === A3.type) {
            var t3, r3, B2, n2, s2;
            "attr" === A3.name ? (e3 = A3.values.filter(_A)).length && a2.appendChild(Q2.createTextNode(o2.getAttribute(e3[0].value) || "")) : "counter" === A3.name ? (B2 = (r3 = A3.values.filter($A))[0], r3 = r3[1], B2 && _A(B2) && (t3 = i2.counters.getCounterValue(B2.value), s2 = r3 && _A(r3) ? pt.parse(i2.context, r3.value) : 3, a2.appendChild(Q2.createTextNode(Fn(t3, s2, false))))) : "counters" === A3.name && (B2 = (t3 = A3.values.filter($A))[0], s2 = t3[1], r3 = t3[2], B2 && _A(B2) && (B2 = i2.counters.getCounterValues(B2.value), n2 = r3 && _A(r3) ? pt.parse(i2.context, r3.value) : 3, s2 = s2 && 0 === s2.type ? s2.value : "", s2 = B2.map(function(A4) {
              return Fn(A4, n2, false);
            }).join(s2), a2.appendChild(Q2.createTextNode(s2))));
          } else if (20 === A3.type) switch (A3.value) {
            case "open-quote":
              a2.appendChild(Q2.createTextNode(Xt(c2.quotes, i2.quoteDepth++, true)));
              break;
            case "close-quote":
              a2.appendChild(Q2.createTextNode(Xt(c2.quotes, --i2.quoteDepth, false)));
              break;
            default:
              a2.appendChild(Q2.createTextNode(A3.value));
          }
        }), a2.className = Dn + " " + vn;
        t2 = t2 === gn.BEFORE ? " " + Dn : " " + vn;
        return YB(A2) ? A2.className.baseValue += t2 : A2.className += t2, a2;
      }
    }
  }, fn.destroy = function(A2) {
    return !!A2.parentNode && (A2.parentNode.removeChild(A2), true);
  }, fn);
  function fn(A2, e2, t2) {
    if (this.context = A2, this.options = t2, this.scrolledElements = [], this.referenceElement = e2, this.counters = new Bn(), this.quoteDepth = 0, !e2.ownerDocument) throw new Error("Cloned element does not have an owner document");
    this.documentElement = this.cloneNode(e2.ownerDocument.documentElement, false);
  }
  (he = gn = gn || {})[he.BEFORE = 0] = "BEFORE", he[he.AFTER = 1] = "AFTER";
  function Hn(e2) {
    return new Promise(function(A2) {
      !e2.complete && e2.src ? (e2.onload = A2, e2.onerror = A2) : A2();
    });
  }
  var pn = function(A2, e2) {
    var t2 = A2.createElement("iframe");
    return t2.className = "html2canvas-container", t2.style.visibility = "hidden", t2.style.position = "fixed", t2.style.left = "-10000px", t2.style.top = "0px", t2.style.border = "0", t2.width = e2.width.toString(), t2.height = e2.height.toString(), t2.scrolling = "no", t2.setAttribute(hn, "true"), A2.body.appendChild(t2), t2;
  }, En = function(A2) {
    return Promise.all([].slice.call(A2.images, 0).map(Hn));
  }, In = function(B2) {
    return new Promise(function(e2, A2) {
      var t2 = B2.contentWindow;
      if (!t2) return A2("No window assigned for iframe");
      var r2 = t2.document;
      t2.onload = B2.onload = function() {
        t2.onload = B2.onload = null;
        var A3 = setInterval(function() {
          0 < r2.body.childNodes.length && "complete" === r2.readyState && (clearInterval(A3), e2(B2));
        }, 50);
      };
    });
  }, yn = ["all", "d", "content"], Kn = function(A2, e2) {
    for (var t2 = A2.length - 1; 0 <= t2; t2--) {
      var r2 = A2.item(t2);
      -1 === yn.indexOf(r2) && e2.style.setProperty(r2, A2.getPropertyValue(r2));
    }
    return e2;
  }, mn = function(A2) {
    var e2 = "";
    return A2 && (e2 += "<!DOCTYPE ", A2.name && (e2 += A2.name), A2.internalSubset && (e2 += A2.internalSubset), A2.publicId && (e2 += '"' + A2.publicId + '"'), A2.systemId && (e2 += '"' + A2.systemId + '"'), e2 += ">"), e2;
  }, Ln = function(A2, e2, t2) {
    A2 && A2.defaultView && (e2 !== A2.defaultView.pageXOffset || t2 !== A2.defaultView.pageYOffset) && A2.defaultView.scrollTo(e2, t2);
  }, bn = function(A2) {
    var e2 = A2[0], t2 = A2[1], A2 = A2[2];
    e2.scrollLeft = t2, e2.scrollTop = A2;
  }, Dn = "___html2canvas___pseudoelement_before", vn = "___html2canvas___pseudoelement_after", xn = '{\n    content: "" !important;\n    display: none !important;\n}', Mn = function(A2) {
    Sn(A2, "." + Dn + ":before" + xn + "\n         ." + vn + ":after" + xn);
  }, Sn = function(A2, e2) {
    var t2 = A2.ownerDocument;
    t2 && ((t2 = t2.createElement("style")).textContent = e2, A2.appendChild(t2));
  }, Tn = (Gn.getOrigin = function(A2) {
    var e2 = Gn._link;
    return e2 ? (e2.href = A2, e2.href = e2.href, e2.protocol + e2.hostname + e2.port) : "about:blank";
  }, Gn.isSameOrigin = function(A2) {
    return Gn.getOrigin(A2) === Gn._origin;
  }, Gn.setContext = function(A2) {
    Gn._link = A2.document.createElement("a"), Gn._origin = Gn.getOrigin(A2.location.href);
  }, Gn._origin = "about:blank", Gn);
  function Gn() {
  }
  var On = (Vn.prototype.addImage = function(A2) {
    var e2 = Promise.resolve();
    return this.has(A2) || (Yn(A2) || Pn(A2)) && (this._cache[A2] = this.loadImage(A2)).catch(function() {
    }), e2;
  }, Vn.prototype.match = function(A2) {
    return this._cache[A2];
  }, Vn.prototype.loadImage = function(s2) {
    return a(this, void 0, void 0, function() {
      var e2, r2, t2, B2, n2 = this;
      return H(this, function(A2) {
        switch (A2.label) {
          case 0:
            return (e2 = Tn.isSameOrigin(s2), r2 = !Xn(s2) && true === this._options.useCORS && Xr.SUPPORT_CORS_IMAGES && !e2, t2 = !Xn(s2) && !e2 && !Yn(s2) && "string" == typeof this._options.proxy && Xr.SUPPORT_CORS_XHR && !r2, e2 || false !== this._options.allowTaint || Xn(s2) || Yn(s2) || t2 || r2) ? (B2 = s2, t2 ? [4, this.proxy(B2)] : [3, 2]) : [2];
          case 1:
            B2 = A2.sent(), A2.label = 2;
          case 2:
            return this.context.logger.debug("Added image " + s2.substring(0, 256)), [4, new Promise(function(A3, e3) {
              var t3 = new Image();
              t3.onload = function() {
                return A3(t3);
              }, t3.onerror = e3, (Jn(B2) || r2) && (t3.crossOrigin = "anonymous"), t3.src = B2, true === t3.complete && setTimeout(function() {
                return A3(t3);
              }, 500), 0 < n2._options.imageTimeout && setTimeout(function() {
                return e3("Timed out (" + n2._options.imageTimeout + "ms) loading image");
              }, n2._options.imageTimeout);
            })];
          case 3:
            return [2, A2.sent()];
        }
      });
    });
  }, Vn.prototype.has = function(A2) {
    return void 0 !== this._cache[A2];
  }, Vn.prototype.keys = function() {
    return Promise.resolve(Object.keys(this._cache));
  }, Vn.prototype.proxy = function(s2) {
    var o2 = this, i2 = this._options.proxy;
    if (!i2) throw new Error("No proxy defined");
    var Q2 = s2.substring(0, 256);
    return new Promise(function(e2, t2) {
      var r2 = Xr.SUPPORT_RESPONSE_TYPE ? "blob" : "text", B2 = new XMLHttpRequest();
      B2.onload = function() {
        var A3;
        200 === B2.status ? "text" == r2 ? e2(B2.response) : ((A3 = new FileReader()).addEventListener("load", function() {
          return e2(A3.result);
        }, false), A3.addEventListener("error", function(A4) {
          return t2(A4);
        }, false), A3.readAsDataURL(B2.response)) : t2("Failed to proxy resource " + Q2 + " with status code " + B2.status);
      }, B2.onerror = t2;
      var A2, n2 = -1 < i2.indexOf("?") ? "&" : "?";
      B2.open("GET", i2 + n2 + "url=" + encodeURIComponent(s2) + "&responseType=" + r2), "text" != r2 && B2 instanceof XMLHttpRequest && (B2.responseType = r2), o2._options.imageTimeout && (A2 = o2._options.imageTimeout, B2.timeout = A2, B2.ontimeout = function() {
        return t2("Timed out (" + A2 + "ms) proxying " + Q2);
      }), B2.send();
    });
  }, Vn);
  function Vn(A2, e2) {
    this.context = A2, this._options = e2, this._cache = {};
  }
  var kn = /^data:image\/svg\+xml/i, Rn = /^data:image\/.*;base64,/i, Nn = /^data:image\/.*/i, Pn = function(A2) {
    return Xr.SUPPORT_SVG_DRAWING || !Wn(A2);
  }, Xn = function(A2) {
    return Nn.test(A2);
  }, Jn = function(A2) {
    return Rn.test(A2);
  }, Yn = function(A2) {
    return "blob" === A2.substr(0, 4);
  }, Wn = function(A2) {
    return "svg" === A2.substr(-3).toLowerCase() || kn.test(A2);
  }, Zn = (_n.prototype.add = function(A2, e2) {
    return new _n(this.x + A2, this.y + e2);
  }, _n);
  function _n(A2, e2) {
    this.type = 0, this.x = A2, this.y = e2;
  }
  function qn(A2, e2, t2) {
    return new Zn(A2.x + (e2.x - A2.x) * t2, A2.y + (e2.y - A2.y) * t2);
  }
  var jn = (zn.prototype.subdivide = function(A2, e2) {
    var t2 = qn(this.start, this.startControl, A2), r2 = qn(this.startControl, this.endControl, A2), B2 = qn(this.endControl, this.end, A2), n2 = qn(t2, r2, A2), r2 = qn(r2, B2, A2), A2 = qn(n2, r2, A2);
    return e2 ? new zn(this.start, t2, n2, A2) : new zn(A2, r2, B2, this.end);
  }, zn.prototype.add = function(A2, e2) {
    return new zn(this.start.add(A2, e2), this.startControl.add(A2, e2), this.endControl.add(A2, e2), this.end.add(A2, e2));
  }, zn.prototype.reverse = function() {
    return new zn(this.end, this.endControl, this.startControl, this.start);
  }, zn);
  function zn(A2, e2, t2, r2) {
    this.type = 1, this.start = A2, this.startControl = e2, this.endControl = t2, this.end = r2;
  }
  function $n(A2) {
    return 1 === A2.type;
  }
  var As, es = function(A2) {
    var e2 = A2.styles, t2 = A2.bounds, r2 = (C2 = Be(e2.borderTopLeftRadius, t2.width, t2.height))[0], B2 = C2[1], n2 = (u2 = Be(e2.borderTopRightRadius, t2.width, t2.height))[0], s2 = u2[1], o2 = (F2 = Be(e2.borderBottomRightRadius, t2.width, t2.height))[0], i2 = F2[1], Q2 = (h2 = Be(e2.borderBottomLeftRadius, t2.width, t2.height))[0], c2 = h2[1];
    (d2 = []).push((r2 + n2) / t2.width), d2.push((Q2 + o2) / t2.width), d2.push((B2 + c2) / t2.height), d2.push((s2 + i2) / t2.height), 1 < (f2 = Math.max.apply(Math, d2)) && (r2 /= f2, B2 /= f2, n2 /= f2, s2 /= f2, o2 /= f2, i2 /= f2, Q2 /= f2, c2 /= f2);
    var a2 = t2.width - n2, g2 = t2.height - i2, w2 = t2.width - o2, U2 = t2.height - c2, l2 = e2.borderTopWidth, C2 = e2.borderRightWidth, u2 = e2.borderBottomWidth, F2 = e2.borderLeftWidth, h2 = Ue(e2.paddingTop, A2.bounds.width), d2 = Ue(e2.paddingRight, A2.bounds.width), f2 = Ue(e2.paddingBottom, A2.bounds.width), A2 = Ue(e2.paddingLeft, A2.bounds.width);
    this.topLeftBorderDoubleOuterBox = 0 < r2 || 0 < B2 ? ss(t2.left + F2 / 3, t2.top + l2 / 3, r2 - F2 / 3, B2 - l2 / 3, As.TOP_LEFT) : new Zn(t2.left + F2 / 3, t2.top + l2 / 3), this.topRightBorderDoubleOuterBox = 0 < r2 || 0 < B2 ? ss(t2.left + a2, t2.top + l2 / 3, n2 - C2 / 3, s2 - l2 / 3, As.TOP_RIGHT) : new Zn(t2.left + t2.width - C2 / 3, t2.top + l2 / 3), this.bottomRightBorderDoubleOuterBox = 0 < o2 || 0 < i2 ? ss(t2.left + w2, t2.top + g2, o2 - C2 / 3, i2 - u2 / 3, As.BOTTOM_RIGHT) : new Zn(t2.left + t2.width - C2 / 3, t2.top + t2.height - u2 / 3), this.bottomLeftBorderDoubleOuterBox = 0 < Q2 || 0 < c2 ? ss(t2.left + F2 / 3, t2.top + U2, Q2 - F2 / 3, c2 - u2 / 3, As.BOTTOM_LEFT) : new Zn(t2.left + F2 / 3, t2.top + t2.height - u2 / 3), this.topLeftBorderDoubleInnerBox = 0 < r2 || 0 < B2 ? ss(t2.left + 2 * F2 / 3, t2.top + 2 * l2 / 3, r2 - 2 * F2 / 3, B2 - 2 * l2 / 3, As.TOP_LEFT) : new Zn(t2.left + 2 * F2 / 3, t2.top + 2 * l2 / 3), this.topRightBorderDoubleInnerBox = 0 < r2 || 0 < B2 ? ss(t2.left + a2, t2.top + 2 * l2 / 3, n2 - 2 * C2 / 3, s2 - 2 * l2 / 3, As.TOP_RIGHT) : new Zn(t2.left + t2.width - 2 * C2 / 3, t2.top + 2 * l2 / 3), this.bottomRightBorderDoubleInnerBox = 0 < o2 || 0 < i2 ? ss(t2.left + w2, t2.top + g2, o2 - 2 * C2 / 3, i2 - 2 * u2 / 3, As.BOTTOM_RIGHT) : new Zn(t2.left + t2.width - 2 * C2 / 3, t2.top + t2.height - 2 * u2 / 3), this.bottomLeftBorderDoubleInnerBox = 0 < Q2 || 0 < c2 ? ss(t2.left + 2 * F2 / 3, t2.top + U2, Q2 - 2 * F2 / 3, c2 - 2 * u2 / 3, As.BOTTOM_LEFT) : new Zn(t2.left + 2 * F2 / 3, t2.top + t2.height - 2 * u2 / 3), this.topLeftBorderStroke = 0 < r2 || 0 < B2 ? ss(t2.left + F2 / 2, t2.top + l2 / 2, r2 - F2 / 2, B2 - l2 / 2, As.TOP_LEFT) : new Zn(t2.left + F2 / 2, t2.top + l2 / 2), this.topRightBorderStroke = 0 < r2 || 0 < B2 ? ss(t2.left + a2, t2.top + l2 / 2, n2 - C2 / 2, s2 - l2 / 2, As.TOP_RIGHT) : new Zn(t2.left + t2.width - C2 / 2, t2.top + l2 / 2), this.bottomRightBorderStroke = 0 < o2 || 0 < i2 ? ss(t2.left + w2, t2.top + g2, o2 - C2 / 2, i2 - u2 / 2, As.BOTTOM_RIGHT) : new Zn(t2.left + t2.width - C2 / 2, t2.top + t2.height - u2 / 2), this.bottomLeftBorderStroke = 0 < Q2 || 0 < c2 ? ss(t2.left + F2 / 2, t2.top + U2, Q2 - F2 / 2, c2 - u2 / 2, As.BOTTOM_LEFT) : new Zn(t2.left + F2 / 2, t2.top + t2.height - u2 / 2), this.topLeftBorderBox = 0 < r2 || 0 < B2 ? ss(t2.left, t2.top, r2, B2, As.TOP_LEFT) : new Zn(t2.left, t2.top), this.topRightBorderBox = 0 < n2 || 0 < s2 ? ss(t2.left + a2, t2.top, n2, s2, As.TOP_RIGHT) : new Zn(t2.left + t2.width, t2.top), this.bottomRightBorderBox = 0 < o2 || 0 < i2 ? ss(t2.left + w2, t2.top + g2, o2, i2, As.BOTTOM_RIGHT) : new Zn(t2.left + t2.width, t2.top + t2.height), this.bottomLeftBorderBox = 0 < Q2 || 0 < c2 ? ss(t2.left, t2.top + U2, Q2, c2, As.BOTTOM_LEFT) : new Zn(t2.left, t2.top + t2.height), this.topLeftPaddingBox = 0 < r2 || 0 < B2 ? ss(t2.left + F2, t2.top + l2, Math.max(0, r2 - F2), Math.max(0, B2 - l2), As.TOP_LEFT) : new Zn(t2.left + F2, t2.top + l2), this.topRightPaddingBox = 0 < n2 || 0 < s2 ? ss(t2.left + Math.min(a2, t2.width - C2), t2.top + l2, a2 > t2.width + C2 ? 0 : Math.max(0, n2 - C2), Math.max(0, s2 - l2), As.TOP_RIGHT) : new Zn(t2.left + t2.width - C2, t2.top + l2), this.bottomRightPaddingBox = 0 < o2 || 0 < i2 ? ss(t2.left + Math.min(w2, t2.width - F2), t2.top + Math.min(g2, t2.height - u2), Math.max(0, o2 - C2), Math.max(0, i2 - u2), As.BOTTOM_RIGHT) : new Zn(t2.left + t2.width - C2, t2.top + t2.height - u2), this.bottomLeftPaddingBox = 0 < Q2 || 0 < c2 ? ss(t2.left + F2, t2.top + Math.min(U2, t2.height - u2), Math.max(0, Q2 - F2), Math.max(0, c2 - u2), As.BOTTOM_LEFT) : new Zn(t2.left + F2, t2.top + t2.height - u2), this.topLeftContentBox = 0 < r2 || 0 < B2 ? ss(t2.left + F2 + A2, t2.top + l2 + h2, Math.max(0, r2 - (F2 + A2)), Math.max(0, B2 - (l2 + h2)), As.TOP_LEFT) : new Zn(t2.left + F2 + A2, t2.top + l2 + h2), this.topRightContentBox = 0 < n2 || 0 < s2 ? ss(t2.left + Math.min(a2, t2.width + F2 + A2), t2.top + l2 + h2, a2 > t2.width + F2 + A2 ? 0 : n2 - F2 + A2, s2 - (l2 + h2), As.TOP_RIGHT) : new Zn(t2.left + t2.width - (C2 + d2), t2.top + l2 + h2), this.bottomRightContentBox = 0 < o2 || 0 < i2 ? ss(t2.left + Math.min(w2, t2.width - (F2 + A2)), t2.top + Math.min(g2, t2.height + l2 + h2), Math.max(0, o2 - (C2 + d2)), i2 - (u2 + f2), As.BOTTOM_RIGHT) : new Zn(t2.left + t2.width - (C2 + d2), t2.top + t2.height - (u2 + f2)), this.bottomLeftContentBox = 0 < Q2 || 0 < c2 ? ss(t2.left + F2 + A2, t2.top + U2, Math.max(0, Q2 - (F2 + A2)), c2 - (u2 + f2), As.BOTTOM_LEFT) : new Zn(t2.left + F2 + A2, t2.top + t2.height - (u2 + f2));
  };
  (he = As = As || {})[he.TOP_LEFT = 0] = "TOP_LEFT", he[he.TOP_RIGHT = 1] = "TOP_RIGHT", he[he.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", he[he.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
  function ts(A2) {
    return [A2.topLeftBorderBox, A2.topRightBorderBox, A2.bottomRightBorderBox, A2.bottomLeftBorderBox];
  }
  function rs(A2) {
    return [A2.topLeftPaddingBox, A2.topRightPaddingBox, A2.bottomRightPaddingBox, A2.bottomLeftPaddingBox];
  }
  function Bs(A2) {
    return 1 === A2.type;
  }
  function ns(A2, t2) {
    return A2.length === t2.length && A2.some(function(A3, e2) {
      return A3 === t2[e2];
    });
  }
  var ss = function(A2, e2, t2, r2, B2) {
    var n2 = (Math.sqrt(2) - 1) / 3 * 4, s2 = t2 * n2, o2 = r2 * n2, i2 = A2 + t2, Q2 = e2 + r2;
    switch (B2) {
      case As.TOP_LEFT:
        return new jn(new Zn(A2, Q2), new Zn(A2, Q2 - o2), new Zn(i2 - s2, e2), new Zn(i2, e2));
      case As.TOP_RIGHT:
        return new jn(new Zn(A2, e2), new Zn(A2 + s2, e2), new Zn(i2, Q2 - o2), new Zn(i2, Q2));
      case As.BOTTOM_RIGHT:
        return new jn(new Zn(i2, e2), new Zn(i2, e2 + o2), new Zn(A2 + s2, Q2), new Zn(A2, Q2));
      default:
        As.BOTTOM_LEFT;
        return new jn(new Zn(i2, Q2), new Zn(i2 - s2, Q2), new Zn(A2, e2 + o2), new Zn(A2, e2));
    }
  }, os = function(A2, e2, t2) {
    this.offsetX = A2, this.offsetY = e2, this.matrix = t2, this.type = 0, this.target = 6;
  }, is = function(A2, e2) {
    this.path = A2, this.target = e2, this.type = 1;
  }, Qs = function(A2) {
    this.opacity = A2, this.type = 2, this.target = 6;
  }, cs = function(A2) {
    this.element = A2, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
  }, as = (gs.prototype.getEffects = function(e2) {
    for (var A2 = -1 === [2, 3].indexOf(this.container.styles.position), t2 = this.parent, r2 = this.effects.slice(0); t2; ) {
      var B2, n2, s2 = t2.effects.filter(function(A3) {
        return !Bs(A3);
      });
      A2 || 0 !== t2.container.styles.position || !t2.parent ? (r2.unshift.apply(r2, s2), A2 = -1 === [2, 3].indexOf(t2.container.styles.position), 0 !== t2.container.styles.overflowX && (B2 = ts(t2.curves), n2 = rs(t2.curves), ns(B2, n2) || r2.unshift(new is(n2, 6)))) : r2.unshift.apply(r2, s2), t2 = t2.parent;
    }
    return r2.filter(function(A3) {
      return Pt(A3.target, e2);
    });
  }, gs);
  function gs(A2, e2) {
    var t2, r2;
    this.container = A2, this.parent = e2, this.effects = [], this.curves = new es(this.container), this.container.styles.opacity < 1 && this.effects.push(new Qs(this.container.styles.opacity)), null !== this.container.styles.transform && (e2 = this.container.bounds.left + this.container.styles.transformOrigin[0].number, t2 = this.container.bounds.top + this.container.styles.transformOrigin[1].number, r2 = this.container.styles.transform, this.effects.push(new os(e2, t2, r2))), 0 !== this.container.styles.overflowX && (t2 = ts(this.curves), r2 = rs(this.curves), ns(t2, r2) ? this.effects.push(new is(t2, 6)) : (this.effects.push(new is(t2, 2)), this.effects.push(new is(r2, 4))));
  }
  function ws(A2, e2) {
    switch (e2) {
      case 0:
        return Hs(A2.topLeftBorderBox, A2.topLeftPaddingBox, A2.topRightBorderBox, A2.topRightPaddingBox);
      case 1:
        return Hs(A2.topRightBorderBox, A2.topRightPaddingBox, A2.bottomRightBorderBox, A2.bottomRightPaddingBox);
      case 2:
        return Hs(A2.bottomRightBorderBox, A2.bottomRightPaddingBox, A2.bottomLeftBorderBox, A2.bottomLeftPaddingBox);
      default:
        return Hs(A2.bottomLeftBorderBox, A2.bottomLeftPaddingBox, A2.topLeftBorderBox, A2.topLeftPaddingBox);
    }
  }
  function Us(A2) {
    var e2 = A2.bounds, A2 = A2.styles;
    return e2.add(A2.borderLeftWidth, A2.borderTopWidth, -(A2.borderRightWidth + A2.borderLeftWidth), -(A2.borderTopWidth + A2.borderBottomWidth));
  }
  function ls(A2) {
    var e2 = A2.styles, t2 = A2.bounds, r2 = Ue(e2.paddingLeft, t2.width), B2 = Ue(e2.paddingRight, t2.width), n2 = Ue(e2.paddingTop, t2.width), A2 = Ue(e2.paddingBottom, t2.width);
    return t2.add(r2 + e2.borderLeftWidth, n2 + e2.borderTopWidth, -(e2.borderRightWidth + e2.borderLeftWidth + r2 + B2), -(e2.borderTopWidth + e2.borderBottomWidth + n2 + A2));
  }
  function Cs(A2, e2, t2) {
    var r2 = (B2 = Es(A2.styles.backgroundOrigin, e2), n2 = A2, 0 === B2 ? n2.bounds : (2 === B2 ? ls : Us)(n2)), B2 = (s2 = Es(A2.styles.backgroundClip, e2), o2 = A2, 0 === s2 ? o2.bounds : (2 === s2 ? ls : Us)(o2)), n2 = ps(Es(A2.styles.backgroundSize, e2), t2, r2), s2 = n2[0], o2 = n2[1], t2 = Be(Es(A2.styles.backgroundPosition, e2), r2.width - s2, r2.height - o2);
    return [Is(Es(A2.styles.backgroundRepeat, e2), t2, n2, r2, B2), Math.round(r2.left + t2[0]), Math.round(r2.top + t2[1]), s2, o2];
  }
  function us(A2) {
    return _A(A2) && A2.value === Ve.AUTO;
  }
  function Fs(A2) {
    return "number" == typeof A2;
  }
  var hs = function(Q2, c2, a2, g2) {
    Q2.container.elements.forEach(function(A2) {
      var e2 = Pt(A2.flags, 4), t2 = Pt(A2.flags, 2), r2 = new as(A2, Q2);
      Pt(A2.styles.display, 2048) && g2.push(r2);
      var B2, n2, s2, o2, i2 = Pt(A2.flags, 8) ? [] : g2;
      e2 || t2 ? (B2 = e2 || A2.styles.isPositioned() ? a2 : c2, t2 = new cs(r2), A2.styles.isPositioned() || A2.styles.opacity < 1 || A2.styles.isTransformed() ? (n2 = A2.styles.zIndex.order) < 0 ? (s2 = 0, B2.negativeZIndex.some(function(A3, e3) {
        return n2 > A3.element.container.styles.zIndex.order ? (s2 = e3, false) : 0 < s2;
      }), B2.negativeZIndex.splice(s2, 0, t2)) : 0 < n2 ? (o2 = 0, B2.positiveZIndex.some(function(A3, e3) {
        return n2 >= A3.element.container.styles.zIndex.order ? (o2 = e3 + 1, false) : 0 < o2;
      }), B2.positiveZIndex.splice(o2, 0, t2)) : B2.zeroOrAutoZIndexOrTransformedOrOpacity.push(t2) : (A2.styles.isFloating() ? B2.nonPositionedFloats : B2.nonPositionedInlineLevel).push(t2), hs(r2, t2, e2 ? t2 : a2, i2)) : ((A2.styles.isInlineLevel() ? c2.inlineLevel : c2.nonInlineLevel).push(r2), hs(r2, c2, a2, i2)), Pt(A2.flags, 8) && ds(A2, i2);
    });
  }, ds = function(A2, e2) {
    for (var t2 = A2 instanceof UB ? A2.start : 1, r2 = A2 instanceof UB && A2.reversed, B2 = 0; B2 < e2.length; B2++) {
      var n2 = e2[B2];
      n2.container instanceof aB && "number" == typeof n2.container.value && 0 !== n2.container.value && (t2 = n2.container.value), n2.listValue = Fn(t2, n2.container.styles.listStyleType, true), t2 += r2 ? -1 : 1;
    }
  }, fs = function(A2, e2) {
    var t2 = [];
    return $n(A2) ? t2.push(A2.subdivide(0.5, false)) : t2.push(A2), $n(e2) ? t2.push(e2.subdivide(0.5, true)) : t2.push(e2), t2;
  }, Hs = function(A2, e2, t2, r2) {
    var B2 = [];
    return $n(A2) ? B2.push(A2.subdivide(0.5, false)) : B2.push(A2), $n(t2) ? B2.push(t2.subdivide(0.5, true)) : B2.push(t2), $n(r2) ? B2.push(r2.subdivide(0.5, true).reverse()) : B2.push(r2), $n(e2) ? B2.push(e2.subdivide(0.5, false).reverse()) : B2.push(e2), B2;
  }, ps = function(A2, e2, t2) {
    var r2 = e2[0], B2 = e2[1], n2 = e2[2], s2 = A2[0], o2 = A2[1];
    if (!s2) return [0, 0];
    if (te(s2) && o2 && te(o2)) return [Ue(s2, t2.width), Ue(o2, t2.height)];
    var i2 = Fs(n2);
    if (_A(s2) && (s2.value === Ve.CONTAIN || s2.value === Ve.COVER)) return Fs(n2) ? t2.width / t2.height < n2 != (s2.value === Ve.COVER) ? [t2.width, t2.width / n2] : [t2.height * n2, t2.height] : [t2.width, t2.height];
    var Q2 = Fs(r2), e2 = Fs(B2), A2 = Q2 || e2;
    if (us(s2) && (!o2 || us(o2))) return Q2 && e2 ? [r2, B2] : i2 || A2 ? A2 && i2 ? [Q2 ? r2 : B2 * n2, e2 ? B2 : r2 / n2] : [Q2 ? r2 : t2.width, e2 ? B2 : t2.height] : [t2.width, t2.height];
    if (i2) {
      var c2 = 0, a2 = 0;
      return te(s2) ? c2 = Ue(s2, t2.width) : te(o2) && (a2 = Ue(o2, t2.height)), us(s2) ? c2 = a2 * n2 : o2 && !us(o2) || (a2 = c2 / n2), [c2, a2];
    }
    c2 = null, a2 = null;
    if (te(s2) ? c2 = Ue(s2, t2.width) : o2 && te(o2) && (a2 = Ue(o2, t2.height)), null !== (c2 = null !== (a2 = null !== c2 && (!o2 || us(o2)) ? Q2 && e2 ? c2 / r2 * B2 : t2.height : a2) && us(s2) ? Q2 && e2 ? a2 / B2 * r2 : t2.width : c2) && null !== a2) return [c2, a2];
    throw new Error("Unable to calculate background-size for element");
  }, Es = function(A2, e2) {
    e2 = A2[e2];
    return void 0 === e2 ? A2[0] : e2;
  }, Is = function(A2, e2, t2, r2, B2) {
    var n2 = e2[0], s2 = e2[1], o2 = t2[0], i2 = t2[1];
    switch (A2) {
      case 2:
        return [new Zn(Math.round(r2.left), Math.round(r2.top + s2)), new Zn(Math.round(r2.left + r2.width), Math.round(r2.top + s2)), new Zn(Math.round(r2.left + r2.width), Math.round(i2 + r2.top + s2)), new Zn(Math.round(r2.left), Math.round(i2 + r2.top + s2))];
      case 3:
        return [new Zn(Math.round(r2.left + n2), Math.round(r2.top)), new Zn(Math.round(r2.left + n2 + o2), Math.round(r2.top)), new Zn(Math.round(r2.left + n2 + o2), Math.round(r2.height + r2.top)), new Zn(Math.round(r2.left + n2), Math.round(r2.height + r2.top))];
      case 1:
        return [new Zn(Math.round(r2.left + n2), Math.round(r2.top + s2)), new Zn(Math.round(r2.left + n2 + o2), Math.round(r2.top + s2)), new Zn(Math.round(r2.left + n2 + o2), Math.round(r2.top + s2 + i2)), new Zn(Math.round(r2.left + n2), Math.round(r2.top + s2 + i2))];
      default:
        return [new Zn(Math.round(B2.left), Math.round(B2.top)), new Zn(Math.round(B2.left + B2.width), Math.round(B2.top)), new Zn(Math.round(B2.left + B2.width), Math.round(B2.height + B2.top)), new Zn(Math.round(B2.left), Math.round(B2.height + B2.top))];
    }
  }, ys = "Hidden Text", Ks = (ms.prototype.parseMetrics = function(A2, e2) {
    var t2 = this._document.createElement("div"), r2 = this._document.createElement("img"), B2 = this._document.createElement("span"), n2 = this._document.body;
    t2.style.visibility = "hidden", t2.style.fontFamily = A2, t2.style.fontSize = e2, t2.style.margin = "0", t2.style.padding = "0", t2.style.whiteSpace = "nowrap", n2.appendChild(t2), r2.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", r2.width = 1, r2.height = 1, r2.style.margin = "0", r2.style.padding = "0", r2.style.verticalAlign = "baseline", B2.style.fontFamily = A2, B2.style.fontSize = e2, B2.style.margin = "0", B2.style.padding = "0", B2.appendChild(this._document.createTextNode(ys)), t2.appendChild(B2), t2.appendChild(r2);
    e2 = r2.offsetTop - B2.offsetTop + 2;
    t2.removeChild(B2), t2.appendChild(this._document.createTextNode(ys)), t2.style.lineHeight = "normal", r2.style.verticalAlign = "super";
    r2 = r2.offsetTop - t2.offsetTop + 2;
    return n2.removeChild(t2), { baseline: e2, middle: r2 };
  }, ms.prototype.getMetrics = function(A2, e2) {
    var t2 = A2 + " " + e2;
    return void 0 === this._data[t2] && (this._data[t2] = this.parseMetrics(A2, e2)), this._data[t2];
  }, ms);
  function ms(A2) {
    this._data = {}, this._document = A2;
  }
  var Ls, he = function(A2, e2) {
    this.context = A2, this.options = e2;
  }, bs = (A(Ds, Ls = he), Ds.prototype.applyEffects = function(A2) {
    for (var e2 = this; this._activeEffects.length; ) this.popEffect();
    A2.forEach(function(A3) {
      return e2.applyEffect(A3);
    });
  }, Ds.prototype.applyEffect = function(A2) {
    this.ctx.save(), 2 === A2.type && (this.ctx.globalAlpha = A2.opacity), 0 === A2.type && (this.ctx.translate(A2.offsetX, A2.offsetY), this.ctx.transform(A2.matrix[0], A2.matrix[1], A2.matrix[2], A2.matrix[3], A2.matrix[4], A2.matrix[5]), this.ctx.translate(-A2.offsetX, -A2.offsetY)), Bs(A2) && (this.path(A2.path), this.ctx.clip()), this._activeEffects.push(A2);
  }, Ds.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, Ds.prototype.renderStack = function(e2) {
    return a(this, void 0, void 0, function() {
      return H(this, function(A2) {
        switch (A2.label) {
          case 0:
            return e2.element.container.styles.isVisible() ? [4, this.renderStackContent(e2)] : [3, 2];
          case 1:
            A2.sent(), A2.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, Ds.prototype.renderNode = function(e2) {
    return a(this, void 0, void 0, function() {
      return H(this, function(A2) {
        switch (A2.label) {
          case 0:
            return Pt(e2.container.flags, 16), e2.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e2)] : [3, 3];
          case 1:
            return A2.sent(), [4, this.renderNodeContent(e2)];
          case 2:
            A2.sent(), A2.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, Ds.prototype.renderTextWithLetterSpacing = function(t2, A2, r2) {
    var B2 = this;
    0 === A2 ? this.ctx.fillText(t2.text, t2.bounds.left, t2.bounds.top + r2) : Zr(t2.text).reduce(function(A3, e2) {
      return B2.ctx.fillText(e2, A3, t2.bounds.top + r2), A3 + B2.ctx.measureText(e2).width;
    }, t2.bounds.left);
  }, Ds.prototype.createFontStyle = function(A2) {
    var e2 = A2.fontVariant.filter(function(A3) {
      return "normal" === A3 || "small-caps" === A3;
    }).join(""), t2 = Gs(A2.fontFamily).join(", "), r2 = WA(A2.fontSize) ? "" + A2.fontSize.number + A2.fontSize.unit : A2.fontSize.number + "px";
    return [[A2.fontStyle, e2, A2.fontWeight, r2, t2].join(" "), t2, r2];
  }, Ds.prototype.renderTextNode = function(i2, Q2) {
    return a(this, void 0, void 0, function() {
      var e2, t2, r2, B2, n2, s2, o2 = this;
      return H(this, function(A2) {
        return r2 = this.createFontStyle(Q2), e2 = r2[0], t2 = r2[1], r2 = r2[2], this.ctx.font = e2, this.ctx.direction = 1 === Q2.direction ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", r2 = this.fontMetrics.getMetrics(t2, r2), B2 = r2.baseline, n2 = r2.middle, s2 = Q2.paintOrder, i2.textBounds.forEach(function(t3) {
          s2.forEach(function(A3) {
            switch (A3) {
              case 0:
                o2.ctx.fillStyle = ie(Q2.color), o2.renderTextWithLetterSpacing(t3, Q2.letterSpacing, B2);
                var e3 = Q2.textShadow;
                e3.length && t3.text.trim().length && (e3.slice(0).reverse().forEach(function(A4) {
                  o2.ctx.shadowColor = ie(A4.color), o2.ctx.shadowOffsetX = A4.offsetX.number * o2.options.scale, o2.ctx.shadowOffsetY = A4.offsetY.number * o2.options.scale, o2.ctx.shadowBlur = A4.blur.number, o2.renderTextWithLetterSpacing(t3, Q2.letterSpacing, B2);
                }), o2.ctx.shadowColor = "", o2.ctx.shadowOffsetX = 0, o2.ctx.shadowOffsetY = 0, o2.ctx.shadowBlur = 0), Q2.textDecorationLine.length && (o2.ctx.fillStyle = ie(Q2.textDecorationColor || Q2.color), Q2.textDecorationLine.forEach(function(A4) {
                  switch (A4) {
                    case 1:
                      o2.ctx.fillRect(t3.bounds.left, Math.round(t3.bounds.top + B2), t3.bounds.width, 1);
                      break;
                    case 2:
                      o2.ctx.fillRect(t3.bounds.left, Math.round(t3.bounds.top), t3.bounds.width, 1);
                      break;
                    case 3:
                      o2.ctx.fillRect(t3.bounds.left, Math.ceil(t3.bounds.top + n2), t3.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                Q2.webkitTextStrokeWidth && t3.text.trim().length && (o2.ctx.strokeStyle = ie(Q2.webkitTextStrokeColor), o2.ctx.lineWidth = Q2.webkitTextStrokeWidth, o2.ctx.lineJoin = window.chrome ? "miter" : "round", o2.ctx.strokeText(t3.text, t3.bounds.left, t3.bounds.top + B2)), o2.ctx.strokeStyle = "", o2.ctx.lineWidth = 0, o2.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, Ds.prototype.renderReplacedElement = function(A2, e2, t2) {
    var r2;
    t2 && 0 < A2.intrinsicWidth && 0 < A2.intrinsicHeight && (r2 = ls(A2), e2 = rs(e2), this.path(e2), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(t2, 0, 0, A2.intrinsicWidth, A2.intrinsicHeight, r2.left, r2.top, r2.width, r2.height), this.ctx.restore());
  }, Ds.prototype.renderNodeContent = function(w2) {
    return a(this, void 0, void 0, function() {
      var e2, t2, r2, B2, n2, s2, o2, i2, Q2, c2, a2, g2;
      return H(this, function(A2) {
        switch (A2.label) {
          case 0:
            this.applyEffects(w2.getEffects(4)), e2 = w2.container, t2 = w2.curves, r2 = e2.styles, B2 = 0, n2 = e2.textNodes, A2.label = 1;
          case 1:
            return B2 < n2.length ? (s2 = n2[B2], [4, this.renderTextNode(s2, r2)]) : [3, 4];
          case 2:
            A2.sent(), A2.label = 3;
          case 3:
            return B2++, [3, 1];
          case 4:
            if (!(e2 instanceof tB)) return [3, 8];
            A2.label = 5;
          case 5:
            return A2.trys.push([5, 7, , 8]), [4, this.context.cache.match(e2.src)];
          case 6:
            return Q2 = A2.sent(), this.renderReplacedElement(e2, t2, Q2), [3, 8];
          case 7:
            return A2.sent(), this.context.logger.error("Error loading image " + e2.src), [3, 8];
          case 8:
            if (e2 instanceof nB && this.renderReplacedElement(e2, t2, e2.canvas), !(e2 instanceof iB)) return [3, 12];
            A2.label = 9;
          case 9:
            return A2.trys.push([9, 11, , 12]), [4, this.context.cache.match(e2.svg)];
          case 10:
            return Q2 = A2.sent(), this.renderReplacedElement(e2, t2, Q2), [3, 12];
          case 11:
            return A2.sent(), this.context.logger.error("Error loading svg " + e2.svg.substring(0, 255)), [3, 12];
          case 12:
            return e2 instanceof vB && e2.tree ? [4, new Ds(this.context, { scale: this.options.scale, backgroundColor: e2.backgroundColor, x: 0, y: 0, width: e2.width, height: e2.height }).render(e2.tree)] : [3, 14];
          case 13:
            s2 = A2.sent(), e2.width && e2.height && this.ctx.drawImage(s2, 0, 0, e2.width, e2.height, e2.bounds.left, e2.bounds.top, e2.bounds.width, e2.bounds.height), A2.label = 14;
          case 14:
            if (e2 instanceof pB && (i2 = Math.min(e2.bounds.width, e2.bounds.height), e2.type === hB ? e2.checked && (this.ctx.save(), this.path([new Zn(e2.bounds.left + 0.39363 * i2, e2.bounds.top + 0.79 * i2), new Zn(e2.bounds.left + 0.16 * i2, e2.bounds.top + 0.5549 * i2), new Zn(e2.bounds.left + 0.27347 * i2, e2.bounds.top + 0.44071 * i2), new Zn(e2.bounds.left + 0.39694 * i2, e2.bounds.top + 0.5649 * i2), new Zn(e2.bounds.left + 0.72983 * i2, e2.bounds.top + 0.23 * i2), new Zn(e2.bounds.left + 0.84 * i2, e2.bounds.top + 0.34085 * i2), new Zn(e2.bounds.left + 0.39363 * i2, e2.bounds.top + 0.79 * i2)]), this.ctx.fillStyle = ie(HB), this.ctx.fill(), this.ctx.restore()) : e2.type === dB && e2.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(e2.bounds.left + i2 / 2, e2.bounds.top + i2 / 2, i2 / 4, 0, 2 * Math.PI, true), this.ctx.fillStyle = ie(HB), this.ctx.fill(), this.ctx.restore())), xs(e2) && e2.value.length) {
              switch (c2 = this.createFontStyle(r2), a2 = c2[0], i2 = c2[1], c2 = this.fontMetrics.getMetrics(a2, i2).baseline, this.ctx.font = a2, this.ctx.fillStyle = ie(r2.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Ss(e2.styles.textAlign), g2 = ls(e2), o2 = 0, e2.styles.textAlign) {
                case 1:
                  o2 += g2.width / 2;
                  break;
                case 2:
                  o2 += g2.width;
              }
              i2 = g2.add(o2, 0, 0, -g2.height / 2 + 1), this.ctx.save(), this.path([new Zn(g2.left, g2.top), new Zn(g2.left + g2.width, g2.top), new Zn(g2.left + g2.width, g2.top + g2.height), new Zn(g2.left, g2.top + g2.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Jr(e2.value, i2), r2.letterSpacing, c2), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!Pt(e2.styles.display, 2048)) return [3, 20];
            if (null === e2.styles.listStyleImage) return [3, 19];
            if (0 !== (c2 = e2.styles.listStyleImage).type) return [3, 18];
            Q2 = void 0, c2 = c2.url, A2.label = 15;
          case 15:
            return A2.trys.push([15, 17, , 18]), [4, this.context.cache.match(c2)];
          case 16:
            return Q2 = A2.sent(), this.ctx.drawImage(Q2, e2.bounds.left - (Q2.width + 10), e2.bounds.top), [3, 18];
          case 17:
            return A2.sent(), this.context.logger.error("Error loading list-style-image " + c2), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            w2.listValue && -1 !== e2.styles.listStyleType && (a2 = this.createFontStyle(r2)[0], this.ctx.font = a2, this.ctx.fillStyle = ie(r2.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", g2 = new d(e2.bounds.left, e2.bounds.top + Ue(e2.styles.paddingTop, e2.bounds.width), e2.bounds.width, Ye(r2.lineHeight, r2.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Jr(w2.listValue, g2), r2.letterSpacing, Ye(r2.lineHeight, r2.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), A2.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, Ds.prototype.renderStackContent = function(C2) {
    return a(this, void 0, void 0, function() {
      var e2, t2, r2, B2, n2, s2, o2, i2, Q2, c2, a2, g2, w2, U2, l2;
      return H(this, function(A2) {
        switch (A2.label) {
          case 0:
            return Pt(C2.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(C2.element)];
          case 1:
            A2.sent(), e2 = 0, t2 = C2.negativeZIndex, A2.label = 2;
          case 2:
            return e2 < t2.length ? (l2 = t2[e2], [4, this.renderStack(l2)]) : [3, 5];
          case 3:
            A2.sent(), A2.label = 4;
          case 4:
            return e2++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(C2.element)];
          case 6:
            A2.sent(), r2 = 0, B2 = C2.nonInlineLevel, A2.label = 7;
          case 7:
            return r2 < B2.length ? (l2 = B2[r2], [4, this.renderNode(l2)]) : [3, 10];
          case 8:
            A2.sent(), A2.label = 9;
          case 9:
            return r2++, [3, 7];
          case 10:
            n2 = 0, s2 = C2.nonPositionedFloats, A2.label = 11;
          case 11:
            return n2 < s2.length ? (l2 = s2[n2], [4, this.renderStack(l2)]) : [3, 14];
          case 12:
            A2.sent(), A2.label = 13;
          case 13:
            return n2++, [3, 11];
          case 14:
            o2 = 0, i2 = C2.nonPositionedInlineLevel, A2.label = 15;
          case 15:
            return o2 < i2.length ? (l2 = i2[o2], [4, this.renderStack(l2)]) : [3, 18];
          case 16:
            A2.sent(), A2.label = 17;
          case 17:
            return o2++, [3, 15];
          case 18:
            Q2 = 0, c2 = C2.inlineLevel, A2.label = 19;
          case 19:
            return Q2 < c2.length ? (l2 = c2[Q2], [4, this.renderNode(l2)]) : [3, 22];
          case 20:
            A2.sent(), A2.label = 21;
          case 21:
            return Q2++, [3, 19];
          case 22:
            a2 = 0, g2 = C2.zeroOrAutoZIndexOrTransformedOrOpacity, A2.label = 23;
          case 23:
            return a2 < g2.length ? (l2 = g2[a2], [4, this.renderStack(l2)]) : [3, 26];
          case 24:
            A2.sent(), A2.label = 25;
          case 25:
            return a2++, [3, 23];
          case 26:
            w2 = 0, U2 = C2.positiveZIndex, A2.label = 27;
          case 27:
            return w2 < U2.length ? (l2 = U2[w2], [4, this.renderStack(l2)]) : [3, 30];
          case 28:
            A2.sent(), A2.label = 29;
          case 29:
            return w2++, [3, 27];
          case 30:
            return [2];
        }
      });
    });
  }, Ds.prototype.mask = function(A2) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(A2.slice(0).reverse()), this.ctx.closePath();
  }, Ds.prototype.path = function(A2) {
    this.ctx.beginPath(), this.formatPath(A2), this.ctx.closePath();
  }, Ds.prototype.formatPath = function(A2) {
    var r2 = this;
    A2.forEach(function(A3, e2) {
      var t2 = $n(A3) ? A3.start : A3;
      0 === e2 ? r2.ctx.moveTo(t2.x, t2.y) : r2.ctx.lineTo(t2.x, t2.y), $n(A3) && r2.ctx.bezierCurveTo(A3.startControl.x, A3.startControl.y, A3.endControl.x, A3.endControl.y, A3.end.x, A3.end.y);
    });
  }, Ds.prototype.renderRepeat = function(A2, e2, t2, r2) {
    this.path(A2), this.ctx.fillStyle = e2, this.ctx.translate(t2, r2), this.ctx.fill(), this.ctx.translate(-t2, -r2);
  }, Ds.prototype.resizeImage = function(A2, e2, t2) {
    if (A2.width === e2 && A2.height === t2) return A2;
    var r2 = (null !== (r2 = this.canvas.ownerDocument) && void 0 !== r2 ? r2 : document).createElement("canvas");
    return r2.width = Math.max(1, e2), r2.height = Math.max(1, t2), r2.getContext("2d").drawImage(A2, 0, 0, A2.width, A2.height, 0, 0, e2, t2), r2;
  }, Ds.prototype.renderBackgroundImage = function(f2) {
    return a(this, void 0, void 0, function() {
      var h2, e2, d2, t2, r2, B2;
      return H(this, function(A2) {
        switch (A2.label) {
          case 0:
            h2 = f2.styles.backgroundImage.length - 1, e2 = function(e3) {
              var t3, r3, B3, n2, s2, o2, i2, Q2, c2, a2, g2, w2, U2, l2, C2, u2, F2;
              return H(this, function(A3) {
                switch (A3.label) {
                  case 0:
                    if (0 !== e3.type) return [3, 5];
                    t3 = void 0, r3 = e3.url, A3.label = 1;
                  case 1:
                    return A3.trys.push([1, 3, , 4]), [4, d2.context.cache.match(r3)];
                  case 2:
                    return t3 = A3.sent(), [3, 4];
                  case 3:
                    return A3.sent(), d2.context.logger.error("Error loading background-image " + r3), [3, 4];
                  case 4:
                    return t3 && (B3 = Cs(f2, h2, [t3.width, t3.height, t3.width / t3.height]), o2 = B3[0], g2 = B3[1], w2 = B3[2], c2 = B3[3], a2 = B3[4], s2 = d2.ctx.createPattern(d2.resizeImage(t3, c2, a2), "repeat"), d2.renderRepeat(o2, s2, g2, w2)), [3, 6];
                  case 5:
                    1 === e3.type ? (F2 = Cs(f2, h2, [null, null, null]), o2 = F2[0], g2 = F2[1], w2 = F2[2], c2 = F2[3], a2 = F2[4], C2 = Ee(e3.angle, c2, a2), l2 = C2[0], B3 = C2[1], i2 = C2[2], u2 = C2[3], Q2 = C2[4], (F2 = document.createElement("canvas")).width = c2, F2.height = a2, C2 = F2.getContext("2d"), n2 = C2.createLinearGradient(B3, u2, i2, Q2), pe(e3.stops, l2).forEach(function(A4) {
                      return n2.addColorStop(A4.stop, ie(A4.color));
                    }), C2.fillStyle = n2, C2.fillRect(0, 0, c2, a2), 0 < c2 && 0 < a2 && (s2 = d2.ctx.createPattern(F2, "repeat"), d2.renderRepeat(o2, s2, g2, w2))) : 2 === e3.type && (u2 = Cs(f2, h2, [null, null, null]), o2 = u2[0], i2 = u2[1], Q2 = u2[2], c2 = u2[3], a2 = u2[4], l2 = 0 === e3.position.length ? [ge] : e3.position, g2 = Ue(l2[0], c2), w2 = Ue(l2[l2.length - 1], a2), C2 = (function(A4, e4, t4, r4, B4) {
                      var n3, s3, o3, i3, Q3 = 0, c3 = 0;
                      switch (A4.size) {
                        case 0:
                          0 === A4.shape ? Q3 = c3 = Math.min(Math.abs(e4), Math.abs(e4 - r4), Math.abs(t4), Math.abs(t4 - B4)) : 1 === A4.shape && (Q3 = Math.min(Math.abs(e4), Math.abs(e4 - r4)), c3 = Math.min(Math.abs(t4), Math.abs(t4 - B4)));
                          break;
                        case 2:
                          0 === A4.shape ? Q3 = c3 = Math.min(Ie(e4, t4), Ie(e4, t4 - B4), Ie(e4 - r4, t4), Ie(e4 - r4, t4 - B4)) : 1 === A4.shape && (n3 = Math.min(Math.abs(t4), Math.abs(t4 - B4)) / Math.min(Math.abs(e4), Math.abs(e4 - r4)), o3 = (s3 = ye(r4, B4, e4, t4, true))[0], i3 = s3[1], c3 = n3 * (Q3 = Ie(o3 - e4, (i3 - t4) / n3)));
                          break;
                        case 1:
                          0 === A4.shape ? Q3 = c3 = Math.max(Math.abs(e4), Math.abs(e4 - r4), Math.abs(t4), Math.abs(t4 - B4)) : 1 === A4.shape && (Q3 = Math.max(Math.abs(e4), Math.abs(e4 - r4)), c3 = Math.max(Math.abs(t4), Math.abs(t4 - B4)));
                          break;
                        case 3:
                          0 === A4.shape ? Q3 = c3 = Math.max(Ie(e4, t4), Ie(e4, t4 - B4), Ie(e4 - r4, t4), Ie(e4 - r4, t4 - B4)) : 1 === A4.shape && (n3 = Math.max(Math.abs(t4), Math.abs(t4 - B4)) / Math.max(Math.abs(e4), Math.abs(e4 - r4)), o3 = (s3 = ye(r4, B4, e4, t4, false))[0], i3 = s3[1], c3 = n3 * (Q3 = Ie(o3 - e4, (i3 - t4) / n3)));
                      }
                      return Array.isArray(A4.size) && (Q3 = Ue(A4.size[0], r4), c3 = 2 === A4.size.length ? Ue(A4.size[1], B4) : Q3), [Q3, c3];
                    })(e3, g2, w2, c2, a2), F2 = C2[0], u2 = C2[1], 0 < F2 && 0 < u2 && (U2 = d2.ctx.createRadialGradient(i2 + g2, Q2 + w2, 0, i2 + g2, Q2 + w2, F2), pe(e3.stops, 2 * F2).forEach(function(A4) {
                      return U2.addColorStop(A4.stop, ie(A4.color));
                    }), d2.path(o2), d2.ctx.fillStyle = U2, F2 !== u2 ? (l2 = f2.bounds.left + 0.5 * f2.bounds.width, C2 = f2.bounds.top + 0.5 * f2.bounds.height, F2 = 1 / (u2 = u2 / F2), d2.ctx.save(), d2.ctx.translate(l2, C2), d2.ctx.transform(1, 0, 0, u2, 0, 0), d2.ctx.translate(-l2, -C2), d2.ctx.fillRect(i2, F2 * (Q2 - C2) + C2, c2, a2 * F2), d2.ctx.restore()) : d2.ctx.fill())), A3.label = 6;
                  case 6:
                    return h2--, [2];
                }
              });
            }, d2 = this, t2 = 0, r2 = f2.styles.backgroundImage.slice(0).reverse(), A2.label = 1;
          case 1:
            return t2 < r2.length ? (B2 = r2[t2], [5, e2(B2)]) : [3, 4];
          case 2:
            A2.sent(), A2.label = 3;
          case 3:
            return t2++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, Ds.prototype.renderSolidBorder = function(e2, t2, r2) {
    return a(this, void 0, void 0, function() {
      return H(this, function(A2) {
        return this.path(ws(r2, t2)), this.ctx.fillStyle = ie(e2), this.ctx.fill(), [2];
      });
    });
  }, Ds.prototype.renderDoubleBorder = function(t2, r2, B2, n2) {
    return a(this, void 0, void 0, function() {
      var e2;
      return H(this, function(A2) {
        switch (A2.label) {
          case 0:
            return r2 < 3 ? [4, this.renderSolidBorder(t2, B2, n2)] : [3, 2];
          case 1:
            return A2.sent(), [2];
          case 2:
            return e2 = (function(A3, e3) {
              switch (e3) {
                case 0:
                  return Hs(A3.topLeftBorderBox, A3.topLeftBorderDoubleOuterBox, A3.topRightBorderBox, A3.topRightBorderDoubleOuterBox);
                case 1:
                  return Hs(A3.topRightBorderBox, A3.topRightBorderDoubleOuterBox, A3.bottomRightBorderBox, A3.bottomRightBorderDoubleOuterBox);
                case 2:
                  return Hs(A3.bottomRightBorderBox, A3.bottomRightBorderDoubleOuterBox, A3.bottomLeftBorderBox, A3.bottomLeftBorderDoubleOuterBox);
                default:
                  return Hs(A3.bottomLeftBorderBox, A3.bottomLeftBorderDoubleOuterBox, A3.topLeftBorderBox, A3.topLeftBorderDoubleOuterBox);
              }
            })(n2, B2), this.path(e2), this.ctx.fillStyle = ie(t2), this.ctx.fill(), e2 = (function(A3, e3) {
              switch (e3) {
                case 0:
                  return Hs(A3.topLeftBorderDoubleInnerBox, A3.topLeftPaddingBox, A3.topRightBorderDoubleInnerBox, A3.topRightPaddingBox);
                case 1:
                  return Hs(A3.topRightBorderDoubleInnerBox, A3.topRightPaddingBox, A3.bottomRightBorderDoubleInnerBox, A3.bottomRightPaddingBox);
                case 2:
                  return Hs(A3.bottomRightBorderDoubleInnerBox, A3.bottomRightPaddingBox, A3.bottomLeftBorderDoubleInnerBox, A3.bottomLeftPaddingBox);
                default:
                  return Hs(A3.bottomLeftBorderDoubleInnerBox, A3.bottomLeftPaddingBox, A3.topLeftBorderDoubleInnerBox, A3.topLeftPaddingBox);
              }
            })(n2, B2), this.path(e2), this.ctx.fill(), [2];
        }
      });
    });
  }, Ds.prototype.renderNodeBackgroundAndBorders = function(c2) {
    return a(this, void 0, void 0, function() {
      var e2, t2, r2, B2, n2, s2, o2, i2, Q2 = this;
      return H(this, function(A2) {
        switch (A2.label) {
          case 0:
            return (this.applyEffects(c2.getEffects(2)), e2 = c2.container.styles, t2 = !oe(e2.backgroundColor) || e2.backgroundImage.length, r2 = [{ style: e2.borderTopStyle, color: e2.borderTopColor, width: e2.borderTopWidth }, { style: e2.borderRightStyle, color: e2.borderRightColor, width: e2.borderRightWidth }, { style: e2.borderBottomStyle, color: e2.borderBottomColor, width: e2.borderBottomWidth }, { style: e2.borderLeftStyle, color: e2.borderLeftColor, width: e2.borderLeftWidth }], B2 = Ms(Es(e2.backgroundClip, 0), c2.curves), t2 || e2.boxShadow.length) ? (this.ctx.save(), this.path(B2), this.ctx.clip(), oe(e2.backgroundColor) || (this.ctx.fillStyle = ie(e2.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(c2.container)]) : [3, 2];
          case 1:
            A2.sent(), this.ctx.restore(), e2.boxShadow.slice(0).reverse().forEach(function(A3) {
              Q2.ctx.save();
              var t3, r3, B3, n3, e3 = ts(c2.curves), s3 = A3.inset ? 0 : 1e4, o3 = (t3 = -s3 + (A3.inset ? 1 : -1) * A3.spread.number, r3 = (A3.inset ? 1 : -1) * A3.spread.number, B3 = A3.spread.number * (A3.inset ? -2 : 2), n3 = A3.spread.number * (A3.inset ? -2 : 2), e3.map(function(A4, e4) {
                switch (e4) {
                  case 0:
                    return A4.add(t3, r3);
                  case 1:
                    return A4.add(t3 + B3, r3);
                  case 2:
                    return A4.add(t3 + B3, r3 + n3);
                  case 3:
                    return A4.add(t3, r3 + n3);
                }
                return A4;
              }));
              A3.inset ? (Q2.path(e3), Q2.ctx.clip(), Q2.mask(o3)) : (Q2.mask(e3), Q2.ctx.clip(), Q2.path(o3)), Q2.ctx.shadowOffsetX = A3.offsetX.number + s3, Q2.ctx.shadowOffsetY = A3.offsetY.number, Q2.ctx.shadowColor = ie(A3.color), Q2.ctx.shadowBlur = A3.blur.number, Q2.ctx.fillStyle = A3.inset ? ie(A3.color) : "rgba(0,0,0,1)", Q2.ctx.fill(), Q2.ctx.restore();
            }), A2.label = 2;
          case 2:
            s2 = n2 = 0, o2 = r2, A2.label = 3;
          case 3:
            return s2 < o2.length ? 0 !== (i2 = o2[s2]).style && !oe(i2.color) && 0 < i2.width ? 2 !== i2.style ? [3, 5] : [4, this.renderDashedDottedBorder(i2.color, i2.width, n2, c2.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return A2.sent(), [3, 11];
          case 5:
            return 3 !== i2.style ? [3, 7] : [4, this.renderDashedDottedBorder(i2.color, i2.width, n2, c2.curves, 3)];
          case 6:
            return A2.sent(), [3, 11];
          case 7:
            return 4 !== i2.style ? [3, 9] : [4, this.renderDoubleBorder(i2.color, i2.width, n2, c2.curves)];
          case 8:
            return A2.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(i2.color, n2, c2.curves)];
          case 10:
            A2.sent(), A2.label = 11;
          case 11:
            n2++, A2.label = 12;
          case 12:
            return s2++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, Ds.prototype.renderDashedDottedBorder = function(g2, w2, U2, l2, C2) {
    return a(this, void 0, void 0, function() {
      var e2, t2, r2, B2, n2, s2, o2, i2, Q2, c2, a2;
      return H(this, function(A2) {
        return this.ctx.save(), Q2 = (function(A3, e3) {
          switch (e3) {
            case 0:
              return fs(A3.topLeftBorderStroke, A3.topRightBorderStroke);
            case 1:
              return fs(A3.topRightBorderStroke, A3.bottomRightBorderStroke);
            case 2:
              return fs(A3.bottomRightBorderStroke, A3.bottomLeftBorderStroke);
            default:
              return fs(A3.bottomLeftBorderStroke, A3.topLeftBorderStroke);
          }
        })(l2, U2), e2 = ws(l2, U2), 2 === C2 && (this.path(e2), this.ctx.clip()), s2 = $n(e2[0]) ? (t2 = e2[0].start.x, e2[0].start.y) : (t2 = e2[0].x, e2[0].y), o2 = $n(e2[1]) ? (r2 = e2[1].end.x, e2[1].end.y) : (r2 = e2[1].x, e2[1].y), B2 = 0 === U2 || 2 === U2 ? Math.abs(t2 - r2) : Math.abs(s2 - o2), this.ctx.beginPath(), 3 === C2 ? this.formatPath(Q2) : this.formatPath(e2.slice(0, 2)), n2 = w2 < 3 ? 3 * w2 : 2 * w2, s2 = w2 < 3 ? 2 * w2 : w2, 3 === C2 && (s2 = n2 = w2), o2 = true, B2 <= 2 * n2 ? o2 = false : B2 <= 2 * n2 + s2 ? (n2 *= i2 = B2 / (2 * n2 + s2), s2 *= i2) : (Q2 = Math.floor((B2 + s2) / (n2 + s2)), i2 = (B2 - Q2 * n2) / (Q2 - 1), s2 = (Q2 = (B2 - (Q2 + 1) * n2) / Q2) <= 0 || Math.abs(s2 - i2) < Math.abs(s2 - Q2) ? i2 : Q2), o2 && (3 === C2 ? this.ctx.setLineDash([0, n2 + s2]) : this.ctx.setLineDash([n2, s2])), 3 === C2 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = w2) : this.ctx.lineWidth = 2 * w2 + 1.1, this.ctx.strokeStyle = ie(g2), this.ctx.stroke(), this.ctx.setLineDash([]), 2 === C2 && ($n(e2[0]) && (c2 = e2[3], a2 = e2[0], this.ctx.beginPath(), this.formatPath([new Zn(c2.end.x, c2.end.y), new Zn(a2.start.x, a2.start.y)]), this.ctx.stroke()), $n(e2[1]) && (c2 = e2[1], a2 = e2[2], this.ctx.beginPath(), this.formatPath([new Zn(c2.end.x, c2.end.y), new Zn(a2.start.x, a2.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2];
      });
    });
  }, Ds.prototype.render = function(B2) {
    return a(this, void 0, void 0, function() {
      return H(this, function(A2) {
        switch (A2.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = ie(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), t2 = new as(e2 = B2, null), r2 = new cs(t2), hs(t2, r2, r2, e2 = []), ds(t2.container, e2), [4, this.renderStack(r2)];
          case 1:
            return A2.sent(), this.applyEffects([]), [2, this.canvas];
        }
        var e2, t2, r2;
      });
    });
  }, Ds);
  function Ds(A2, e2) {
    A2 = Ls.call(this, A2, e2) || this;
    return A2._activeEffects = [], A2.canvas = e2.canvas || document.createElement("canvas"), A2.ctx = A2.canvas.getContext("2d"), e2.canvas || (A2.canvas.width = Math.floor(e2.width * e2.scale), A2.canvas.height = Math.floor(e2.height * e2.scale), A2.canvas.style.width = e2.width + "px", A2.canvas.style.height = e2.height + "px"), A2.fontMetrics = new Ks(document), A2.ctx.scale(A2.options.scale, A2.options.scale), A2.ctx.translate(-e2.x, -e2.y), A2.ctx.textBaseline = "bottom", A2._activeEffects = [], A2.context.logger.debug("Canvas renderer initialized (" + e2.width + "x" + e2.height + ") with scale " + e2.scale), A2;
  }
  var vs, xs = function(A2) {
    return A2 instanceof LB || (A2 instanceof yB || A2 instanceof pB && A2.type !== dB && A2.type !== hB);
  }, Ms = function(A2, e2) {
    switch (A2) {
      case 0:
        return ts(e2);
      case 2:
        return [e2.topLeftContentBox, e2.topRightContentBox, e2.bottomRightContentBox, e2.bottomLeftContentBox];
      default:
        return rs(e2);
    }
  }, Ss = function(A2) {
    switch (A2) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, Ts = ["-apple-system", "system-ui"], Gs = function(A2) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A2.filter(function(A3) {
      return -1 === Ts.indexOf(A3);
    }) : A2;
  }, Os = (A(Vs, vs = he), Vs.prototype.render = function(t2) {
    return a(this, void 0, void 0, function() {
      var e2;
      return H(this, function(A2) {
        switch (A2.label) {
          case 0:
            return e2 = Nr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t2), [4, ks(e2)];
          case 1:
            return e2 = A2.sent(), this.options.backgroundColor && (this.ctx.fillStyle = ie(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(e2, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  }, Vs);
  function Vs(A2, e2) {
    A2 = vs.call(this, A2, e2) || this;
    return A2.canvas = e2.canvas || document.createElement("canvas"), A2.ctx = A2.canvas.getContext("2d"), A2.options = e2, A2.canvas.width = Math.floor(e2.width * e2.scale), A2.canvas.height = Math.floor(e2.height * e2.scale), A2.canvas.style.width = e2.width + "px", A2.canvas.style.height = e2.height + "px", A2.ctx.scale(A2.options.scale, A2.options.scale), A2.ctx.translate(-e2.x, -e2.y), A2.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + e2.width + "x" + e2.height + " at " + e2.x + "," + e2.y + ") with scale " + e2.scale), A2;
  }
  var ks = function(r2) {
    return new Promise(function(A2, e2) {
      var t2 = new Image();
      t2.onload = function() {
        A2(t2);
      }, t2.onerror = e2, t2.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(r2));
    });
  }, Rs = (Ns.prototype.debug = function() {
    for (var A2 = [], e2 = 0; e2 < arguments.length; e2++) A2[e2] = arguments[e2];
    this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, t([this.id, this.getTime() + "ms"], A2)) : this.info.apply(this, A2));
  }, Ns.prototype.getTime = function() {
    return Date.now() - this.start;
  }, Ns.prototype.info = function() {
    for (var A2 = [], e2 = 0; e2 < arguments.length; e2++) A2[e2] = arguments[e2];
    this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, t([this.id, this.getTime() + "ms"], A2));
  }, Ns.prototype.warn = function() {
    for (var A2 = [], e2 = 0; e2 < arguments.length; e2++) A2[e2] = arguments[e2];
    this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn ? console.warn.apply(console, t([this.id, this.getTime() + "ms"], A2)) : this.info.apply(this, A2));
  }, Ns.prototype.error = function() {
    for (var A2 = [], e2 = 0; e2 < arguments.length; e2++) A2[e2] = arguments[e2];
    this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, t([this.id, this.getTime() + "ms"], A2)) : this.info.apply(this, A2));
  }, Ns.instances = {}, Ns);
  function Ns(A2) {
    var e2 = A2.id, A2 = A2.enabled;
    this.id = e2, this.enabled = A2, this.start = Date.now();
  }
  var Ps = (Xs.instanceCount = 1, Xs);
  function Xs(A2, e2) {
    this.windowBounds = e2, this.instanceName = "#" + Xs.instanceCount++, this.logger = new Rs({ id: this.instanceName, enabled: A2.logging }), this.cache = null !== (e2 = A2.cache) && void 0 !== e2 ? e2 : new On(this, A2);
  }
  "undefined" != typeof window && Tn.setContext(window);
  var Js = function(u2, F2) {
    return a(void 0, void 0, void 0, function() {
      var e2, t2, r2, B2, n2, s2, o2, i2, Q2, c2, a2, g2, w2, U2, l2, C2;
      return H(this, function(A2) {
        switch (A2.label) {
          case 0:
            if (!u2 || "object" != typeof u2) return [2, Promise.reject("Invalid element provided as first argument")];
            if (!(e2 = u2.ownerDocument)) throw new Error("Element is not attached to a Document");
            if (!(t2 = e2.defaultView)) throw new Error("Document is not attached to a Window");
            return w2 = { allowTaint: null !== (U2 = F2.allowTaint) && void 0 !== U2 && U2, imageTimeout: null !== (c2 = F2.imageTimeout) && void 0 !== c2 ? c2 : 15e3, proxy: F2.proxy, useCORS: null !== (a2 = F2.useCORS) && void 0 !== a2 && a2 }, U2 = h({ logging: null === (g2 = F2.logging) || void 0 === g2 || g2, cache: F2.cache }, w2), c2 = { windowWidth: null !== (c2 = F2.windowWidth) && void 0 !== c2 ? c2 : t2.innerWidth, windowHeight: null !== (a2 = F2.windowHeight) && void 0 !== a2 ? a2 : t2.innerHeight, scrollX: null !== (g2 = F2.scrollX) && void 0 !== g2 ? g2 : t2.pageXOffset, scrollY: null !== (w2 = F2.scrollY) && void 0 !== w2 ? w2 : t2.pageYOffset }, a2 = new d(c2.scrollX, c2.scrollY, c2.windowWidth, c2.windowHeight), g2 = new Ps(U2, a2), c2 = null !== (w2 = F2.foreignObjectRendering) && void 0 !== w2 && w2, w2 = { allowTaint: null !== (U2 = F2.allowTaint) && void 0 !== U2 && U2, onclone: F2.onclone, ignoreElements: F2.ignoreElements, inlineImages: c2, copyStyles: c2 }, g2.logger.debug("Starting document clone with size " + a2.width + "x" + a2.height + " scrolled to " + -a2.left + "," + -a2.top), U2 = new dn(g2, u2, w2), (w2 = U2.clonedReferenceElement) ? [4, U2.toIFrame(e2, a2)] : [2, Promise.reject("Unable to find element in cloned iframe")];
          case 1:
            return (r2 = A2.sent(), l2 = jB(w2) || "HTML" === w2.tagName ? (function(A3) {
              var e3 = A3.body, t3 = A3.documentElement;
              if (!e3 || !t3) throw new Error("Unable to get document size");
              A3 = Math.max(Math.max(e3.scrollWidth, t3.scrollWidth), Math.max(e3.offsetWidth, t3.offsetWidth), Math.max(e3.clientWidth, t3.clientWidth)), t3 = Math.max(Math.max(e3.scrollHeight, t3.scrollHeight), Math.max(e3.offsetHeight, t3.offsetHeight), Math.max(e3.clientHeight, t3.clientHeight));
              return new d(0, 0, A3, t3);
            })(w2.ownerDocument) : f(g2, w2), B2 = l2.width, n2 = l2.height, s2 = l2.left, o2 = l2.top, i2 = Ys(g2, w2, F2.backgroundColor), l2 = { canvas: F2.canvas, backgroundColor: i2, scale: null !== (l2 = null !== (l2 = F2.scale) && void 0 !== l2 ? l2 : t2.devicePixelRatio) && void 0 !== l2 ? l2 : 1, x: (null !== (l2 = F2.x) && void 0 !== l2 ? l2 : 0) + s2, y: (null !== (l2 = F2.y) && void 0 !== l2 ? l2 : 0) + o2, width: null !== (l2 = F2.width) && void 0 !== l2 ? l2 : Math.ceil(B2), height: null !== (l2 = F2.height) && void 0 !== l2 ? l2 : Math.ceil(n2) }, c2) ? (g2.logger.debug("Document cloned, using foreign object rendering"), [4, new Os(g2, l2).render(w2)]) : [3, 3];
          case 2:
            return Q2 = A2.sent(), [3, 5];
          case 3:
            return g2.logger.debug("Document cloned, element located at " + s2 + "," + o2 + " with size " + B2 + "x" + n2 + " using computed rendering"), g2.logger.debug("Starting DOM parsing"), C2 = kB(g2, w2), i2 === C2.styles.backgroundColor && (C2.styles.backgroundColor = Le.TRANSPARENT), g2.logger.debug("Starting renderer for element at " + l2.x + "," + l2.y + " with size " + l2.width + "x" + l2.height), [4, new bs(g2, l2).render(C2)];
          case 4:
            Q2 = A2.sent(), A2.label = 5;
          case 5:
            return null !== (C2 = F2.removeContainer) && void 0 !== C2 && !C2 || dn.destroy(r2) || g2.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore"), g2.logger.debug("Finished rendering"), [2, Q2];
        }
      });
    });
  }, Ys = function(A2, e2, t2) {
    var r2 = e2.ownerDocument, B2 = r2.documentElement ? fe(A2, getComputedStyle(r2.documentElement).backgroundColor) : Le.TRANSPARENT, n2 = r2.body ? fe(A2, getComputedStyle(r2.body).backgroundColor) : Le.TRANSPARENT, t2 = "string" == typeof t2 ? fe(A2, t2) : null === t2 ? Le.TRANSPARENT : 4294967295;
    return e2 === r2.documentElement ? oe(B2) ? oe(n2) ? t2 : n2 : B2 : t2;
  };
  return function(A2, e2) {
    return Js(A2, e2 = void 0 === e2 ? {} : e2);
  };
});
!(function(t) {
  "function" == typeof define && define.amd ? define(t) : t();
})(function() {
  "use strict";
  /** @license
     * jsPDF - PDF Document creation from JavaScript
     * Version 1.5.3 Built on 2018-12-27T14:11:42.696Z
     *                      CommitID d93d28db14
     *
     * Copyright (c) 2010-2016 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
     *               2010 Aaron Spike, https://github.com/acspike
     *               2012 Willow Systems Corporation, willow-systems.com
     *               2012 Pablo Hess, https://github.com/pablohess
     *               2012 Florian Jenett, https://github.com/fjenett
     *               2013 Warren Weckesser, https://github.com/warrenweckesser
     *               2013 Youssef Beddad, https://github.com/lifof
     *               2013 Lee Driscoll, https://github.com/lsdriscoll
     *               2013 Stefan Slonevskiy, https://github.com/stefslon
     *               2013 Jeremy Morel, https://github.com/jmorel
     *               2013 Christoph Hartmann, https://github.com/chris-rock
     *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
     *               2014 James Makes, https://github.com/dollaruw
     *               2014 Diego Casorran, https://github.com/diegocr
     *               2014 Steven Spungin, https://github.com/Flamenco
     *               2014 Kenneth Glassey, https://github.com/Gavvers
     *
     * Licensed under the MIT License
     *
     * Contributor(s):
     *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
     *    kim3er, mfo, alnorth, Flamenco
     */
  function se(t2) {
    return (se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    })(t2);
  }
  !(function(t2) {
    if ("object" !== se(t2.console)) {
      t2.console = {};
      for (var e2, n2, r2 = t2.console, i2 = function() {
      }, o2 = ["memory"], a2 = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); e2 = o2.pop(); ) r2[e2] || (r2[e2] = {});
      for (; n2 = a2.pop(); ) r2[n2] || (r2[n2] = i2);
    }
    var s2, l2, h2, u2, c2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    void 0 === t2.btoa && (t2.btoa = function(t3) {
      var e3, n3, r3, i3, o3, a3 = 0, s3 = 0, l3 = "", h3 = [];
      if (!t3) return t3;
      for (; e3 = (o3 = t3.charCodeAt(a3++) << 16 | t3.charCodeAt(a3++) << 8 | t3.charCodeAt(a3++)) >> 18 & 63, n3 = o3 >> 12 & 63, r3 = o3 >> 6 & 63, i3 = 63 & o3, h3[s3++] = c2.charAt(e3) + c2.charAt(n3) + c2.charAt(r3) + c2.charAt(i3), a3 < t3.length; ) ;
      l3 = h3.join("");
      var u3 = t3.length % 3;
      return (u3 ? l3.slice(0, u3 - 3) : l3) + "===".slice(u3 || 3);
    }), void 0 === t2.atob && (t2.atob = function(t3) {
      var e3, n3, r3, i3, o3, a3, s3 = 0, l3 = 0, h3 = [];
      if (!t3) return t3;
      for (t3 += ""; e3 = (a3 = c2.indexOf(t3.charAt(s3++)) << 18 | c2.indexOf(t3.charAt(s3++)) << 12 | (i3 = c2.indexOf(t3.charAt(s3++))) << 6 | (o3 = c2.indexOf(t3.charAt(s3++)))) >> 16 & 255, n3 = a3 >> 8 & 255, r3 = 255 & a3, h3[l3++] = 64 == i3 ? String.fromCharCode(e3) : 64 == o3 ? String.fromCharCode(e3, n3) : String.fromCharCode(e3, n3, r3), s3 < t3.length; ) ;
      return h3.join("");
    }), Array.prototype.map || (Array.prototype.map = function(t3) {
      if (null == this || "function" != typeof t3) throw new TypeError();
      for (var e3 = Object(this), n3 = e3.length >>> 0, r3 = new Array(n3), i3 = 1 < arguments.length ? arguments[1] : void 0, o3 = 0; o3 < n3; o3++) o3 in e3 && (r3[o3] = t3.call(i3, e3[o3], o3, e3));
      return r3;
    }), Array.isArray || (Array.isArray = function(t3) {
      return "[object Array]" === Object.prototype.toString.call(t3);
    }), Array.prototype.forEach || (Array.prototype.forEach = function(t3, e3) {
      if (null == this || "function" != typeof t3) throw new TypeError();
      for (var n3 = Object(this), r3 = n3.length >>> 0, i3 = 0; i3 < r3; i3++) i3 in n3 && t3.call(e3, n3[i3], i3, n3);
    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(t3) {
      if (null == this) throw new TypeError('"this" is null or not defined');
      var e3 = Object(this), n3 = e3.length >>> 0;
      if ("function" != typeof t3) throw new TypeError("predicate must be a function");
      for (var r3 = arguments[1], i3 = 0; i3 < n3; ) {
        var o3 = e3[i3];
        if (t3.call(r3, o3, i3, e3)) return o3;
        i3++;
      }
    }, configurable: true, writable: true }), Object.keys || (Object.keys = (s2 = Object.prototype.hasOwnProperty, l2 = !{ toString: null }.propertyIsEnumerable("toString"), u2 = (h2 = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function(t3) {
      if ("object" !== se(t3) && ("function" != typeof t3 || null === t3)) throw new TypeError();
      var e3, n3, r3 = [];
      for (e3 in t3) s2.call(t3, e3) && r3.push(e3);
      if (l2) for (n3 = 0; n3 < u2; n3++) s2.call(t3, h2[n3]) && r3.push(h2[n3]);
      return r3;
    })), "function" != typeof Object.assign && (Object.assign = function(t3) {
      if (null == t3) throw new TypeError("Cannot convert undefined or null to object");
      t3 = Object(t3);
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var n3 = arguments[e3];
        if (null != n3) for (var r3 in n3) Object.prototype.hasOwnProperty.call(n3, r3) && (t3[r3] = n3[r3]);
      }
      return t3;
    }), String.prototype.trim || (String.prototype.trim = function() {
      return this.replace(/^\s+|\s+$/g, "");
    }), String.prototype.trimLeft || (String.prototype.trimLeft = function() {
      return this.replace(/^\s+/g, "");
    }), String.prototype.trimRight || (String.prototype.trimRight = function() {
      return this.replace(/\s+$/g, "");
    }), Number.isInteger = Number.isInteger || function(t3) {
      return "number" == typeof t3 && isFinite(t3) && Math.floor(t3) === t3;
    };
  })("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")());
  var t, e, n, _, l, F, P, p, d, k, a, o, s, h, u, c, r, i, f, g, m, y, v, w, b, x, I, C, B, N, L, A, S, j, E, M, O, q, T, R, D, U, z, H, W, V, G, Y, J, X, K, Z, Q, $, tt, et, nt, rt, it, ot, at, st, lt = (function(ie) {
    function oe(o2) {
      if ("object" !== se(o2)) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
      var a2 = {};
      this.subscribe = function(t2, e2, n2) {
        if (n2 = n2 || false, "string" != typeof t2 || "function" != typeof e2 || "boolean" != typeof n2) throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
        a2.hasOwnProperty(t2) || (a2[t2] = {});
        var r2 = Math.random().toString(35);
        return a2[t2][r2] = [e2, !!n2], r2;
      }, this.unsubscribe = function(t2) {
        for (var e2 in a2) if (a2[e2][t2]) return delete a2[e2][t2], 0 === Object.keys(a2[e2]).length && delete a2[e2], true;
        return false;
      }, this.publish = function(t2) {
        if (a2.hasOwnProperty(t2)) {
          var e2 = Array.prototype.slice.call(arguments, 1), n2 = [];
          for (var r2 in a2[t2]) {
            var i2 = a2[t2][r2];
            try {
              i2[0].apply(o2, e2);
            } catch (t3) {
              ie.console && console.error("jsPDF PubSub Error", t3.message, t3);
            }
            i2[1] && n2.push(r2);
          }
          n2.length && n2.forEach(this.unsubscribe);
        }
      }, this.getTopics = function() {
        return a2;
      };
    }
    function ae(t2, e2, i2, n2) {
      var r2 = {}, o2 = [], a2 = 1;
      "object" === se(t2) && (t2 = (r2 = t2).orientation, e2 = r2.unit || e2, i2 = r2.format || i2, n2 = r2.compress || r2.compressPdf || n2, o2 = r2.filters || (true === n2 ? ["FlateEncode"] : o2), a2 = "number" == typeof r2.userUnit ? Math.abs(r2.userUnit) : 1), e2 = e2 || "mm", t2 = ("" + (t2 || "P")).toLowerCase();
      var s2 = r2.putOnlyUsedFonts || true, K2 = {}, l2 = { internal: {}, __private__: {} };
      l2.__private__.PubSub = oe;
      var h2 = "1.3", u2 = l2.__private__.getPdfVersion = function() {
        return h2;
      }, c2 = (l2.__private__.setPdfVersion = function(t3) {
        h2 = t3;
      }, { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] }), f2 = (l2.__private__.getPageFormats = function() {
        return c2;
      }, l2.__private__.getPageFormat = function(t3) {
        return c2[t3];
      });
      "string" == typeof i2 && (i2 = f2(i2)), i2 = i2 || f2("a4");
      var p2, Z2 = l2.f2 = l2.__private__.f2 = function(t3) {
        if (isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.f2");
        return t3.toFixed(2);
      }, Q2 = l2.__private__.f3 = function(t3) {
        if (isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.f3");
        return t3.toFixed(3);
      }, d2 = "00000000000000000000000000000000", g2 = l2.__private__.getFileId = function() {
        return d2;
      }, m2 = l2.__private__.setFileId = function(t3) {
        return t3 = t3 || "12345678901234567890123456789012".split("").map(function() {
          return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
        }).join(""), d2 = t3;
      };
      l2.setFileId = function(t3) {
        return m2(t3), this;
      }, l2.getFileId = function() {
        return g2();
      };
      var y2 = l2.__private__.convertDateToPDFDate = function(t3) {
        var e3 = t3.getTimezoneOffset(), n3 = e3 < 0 ? "+" : "-", r3 = Math.floor(Math.abs(e3 / 60)), i3 = Math.abs(e3 % 60), o3 = [n3, P2(r3), "'", P2(i3), "'"].join("");
        return ["D:", t3.getFullYear(), P2(t3.getMonth() + 1), P2(t3.getDate()), P2(t3.getHours()), P2(t3.getMinutes()), P2(t3.getSeconds()), o3].join("");
      }, v2 = l2.__private__.convertPDFDateToDate = function(t3) {
        var e3 = parseInt(t3.substr(2, 4), 10), n3 = parseInt(t3.substr(6, 2), 10) - 1, r3 = parseInt(t3.substr(8, 2), 10), i3 = parseInt(t3.substr(10, 2), 10), o3 = parseInt(t3.substr(12, 2), 10), a3 = parseInt(t3.substr(14, 2), 10);
        parseInt(t3.substr(16, 2), 10), parseInt(t3.substr(20, 2), 10);
        return new Date(e3, n3, r3, i3, o3, a3, 0);
      }, w2 = l2.__private__.setCreationDate = function(t3) {
        var e3;
        if (void 0 === t3 && (t3 = /* @__PURE__ */ new Date()), "object" === se(t3) && "[object Date]" === Object.prototype.toString.call(t3)) e3 = y2(t3);
        else {
          if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|\-0[0-9]|\-1[0-1])\'(0[0-9]|[1-5][0-9])\'?$/.test(t3)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
          e3 = t3;
        }
        return p2 = e3;
      }, b2 = l2.__private__.getCreationDate = function(t3) {
        var e3 = p2;
        return "jsDate" === t3 && (e3 = v2(p2)), e3;
      };
      l2.setCreationDate = function(t3) {
        return w2(t3), this;
      }, l2.getCreationDate = function(t3) {
        return b2(t3);
      };
      var x2, N2, L2, A2, S2, $2, _2, F2, P2 = l2.__private__.padd2 = function(t3) {
        return ("0" + parseInt(t3)).slice(-2);
      }, k2 = false, I2 = [], C2 = [], B2 = 0, tt2 = (l2.__private__.setCustomOutputDestination = function(t3) {
        N2 = t3;
      }, l2.__private__.resetCustomOutputDestination = function(t3) {
        N2 = void 0;
      }, l2.__private__.out = function(t3) {
        var e3;
        return t3 = "string" == typeof t3 ? t3 : t3.toString(), (e3 = void 0 === N2 ? k2 ? I2[x2] : C2 : N2).push(t3), k2 || (B2 += t3.length + 1), e3;
      }), j2 = l2.__private__.write = function(t3) {
        return tt2(1 === arguments.length ? t3.toString() : Array.prototype.join.call(arguments, " "));
      }, E2 = l2.__private__.getArrayBuffer = function(t3) {
        for (var e3 = t3.length, n3 = new ArrayBuffer(e3), r3 = new Uint8Array(n3); e3--; ) r3[e3] = t3.charCodeAt(e3);
        return n3;
      }, M2 = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]], et2 = (l2.__private__.getStandardFonts = function(t3) {
        return M2;
      }, r2.fontSize || 16), O2 = (l2.__private__.setFontSize = l2.setFontSize = function(t3) {
        return et2 = t3, this;
      }, l2.__private__.getFontSize = l2.getFontSize = function() {
        return et2;
      }), nt2 = r2.R2L || false, q2 = (l2.__private__.setR2L = l2.setR2L = function(t3) {
        return nt2 = t3, this;
      }, l2.__private__.getR2L = l2.getR2L = function(t3) {
        return nt2;
      }, l2.__private__.setZoomMode = function(t3) {
        var e3 = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
        if (/^\d*\.?\d*\%$/.test(t3)) L2 = t3;
        else if (isNaN(t3)) {
          if (-1 === e3.indexOf(t3)) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + t3 + '" is not recognized.');
          L2 = t3;
        } else L2 = parseInt(t3, 10);
      }), T2 = (l2.__private__.getZoomMode = function() {
        return L2;
      }, l2.__private__.setPageMode = function(t3) {
        if (-1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(t3)) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + t3 + '" is not recognized.');
        A2 = t3;
      }), R2 = (l2.__private__.getPageMode = function() {
        return A2;
      }, l2.__private__.setLayoutMode = function(t3) {
        if (-1 == [void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(t3)) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + t3 + '" is not recognized.');
        S2 = t3;
      }), D2 = (l2.__private__.getLayoutMode = function() {
        return S2;
      }, l2.__private__.setDisplayMode = l2.setDisplayMode = function(t3, e3, n3) {
        return q2(t3), R2(e3), T2(n3), this;
      }, { title: "", subject: "", author: "", keywords: "", creator: "" }), U2 = (l2.__private__.getDocumentProperty = function(t3) {
        if (-1 === Object.keys(D2).indexOf(t3)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
        return D2[t3];
      }, l2.__private__.getDocumentProperties = function(t3) {
        return D2;
      }, l2.__private__.setDocumentProperties = l2.setProperties = l2.setDocumentProperties = function(t3) {
        for (var e3 in D2) D2.hasOwnProperty(e3) && t3[e3] && (D2[e3] = t3[e3]);
        return this;
      }, l2.__private__.setDocumentProperty = function(t3, e3) {
        if (-1 === Object.keys(D2).indexOf(t3)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
        return D2[t3] = e3;
      }, 0), z2 = [], rt2 = {}, H2 = {}, W2 = 0, V2 = [], G2 = [], it2 = new oe(l2), Y2 = r2.hotfixes || [], J2 = l2.__private__.newObject = function() {
        var t3 = X2();
        return ot2(t3, true), t3;
      }, X2 = l2.__private__.newObjectDeferred = function() {
        return z2[++U2] = function() {
          return B2;
        }, U2;
      }, ot2 = function(t3, e3) {
        return e3 = "boolean" == typeof e3 && e3, z2[t3] = B2, e3 && tt2(t3 + " 0 obj"), t3;
      }, at2 = l2.__private__.newAdditionalObject = function() {
        var t3 = { objId: X2(), content: "" };
        return G2.push(t3), t3;
      }, st2 = X2(), lt2 = X2(), ht2 = l2.__private__.decodeColorString = function(t3) {
        var e3 = t3.split(" ");
        if (2 === e3.length && ("g" === e3[1] || "G" === e3[1])) {
          var n3 = parseFloat(e3[0]);
          e3 = [n3, n3, n3, "r"];
        }
        for (var r3 = "#", i3 = 0; i3 < 3; i3++) r3 += ("0" + Math.floor(255 * parseFloat(e3[i3])).toString(16)).slice(-2);
        return r3;
      }, ut2 = l2.__private__.encodeColorString = function(t3) {
        var e3;
        "string" == typeof t3 && (t3 = { ch1: t3 });
        var n3 = t3.ch1, r3 = t3.ch2, i3 = t3.ch3, o3 = t3.ch4, a3 = (t3.precision, "draw" === t3.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"]);
        if ("string" == typeof n3 && "#" !== n3.charAt(0)) {
          var s3 = new RGBColor(n3);
          if (s3.ok) n3 = s3.toHex();
          else if (!/^\d*\.?\d*$/.test(n3)) throw new Error('Invalid color "' + n3 + '" passed to jsPDF.encodeColorString.');
        }
        if ("string" == typeof n3 && /^#[0-9A-Fa-f]{3}$/.test(n3) && (n3 = "#" + n3[1] + n3[1] + n3[2] + n3[2] + n3[3] + n3[3]), "string" == typeof n3 && /^#[0-9A-Fa-f]{6}$/.test(n3)) {
          var l3 = parseInt(n3.substr(1), 16);
          n3 = l3 >> 16 & 255, r3 = l3 >> 8 & 255, i3 = 255 & l3;
        }
        if (void 0 === r3 || void 0 === o3 && n3 === r3 && r3 === i3) if ("string" == typeof n3) e3 = n3 + " " + a3[0];
        else switch (t3.precision) {
          case 2:
            e3 = Z2(n3 / 255) + " " + a3[0];
            break;
          case 3:
          default:
            e3 = Q2(n3 / 255) + " " + a3[0];
        }
        else if (void 0 === o3 || "object" === se(o3)) {
          if (o3 && !isNaN(o3.a) && 0 === o3.a) return e3 = ["1.000", "1.000", "1.000", a3[1]].join(" ");
          if ("string" == typeof n3) e3 = [n3, r3, i3, a3[1]].join(" ");
          else switch (t3.precision) {
            case 2:
              e3 = [Z2(n3 / 255), Z2(r3 / 255), Z2(i3 / 255), a3[1]].join(" ");
              break;
            default:
            case 3:
              e3 = [Q2(n3 / 255), Q2(r3 / 255), Q2(i3 / 255), a3[1]].join(" ");
          }
        } else if ("string" == typeof n3) e3 = [n3, r3, i3, o3, a3[2]].join(" ");
        else switch (t3.precision) {
          case 2:
            e3 = [Z2(n3 / 255), Z2(r3 / 255), Z2(i3 / 255), Z2(o3 / 255), a3[2]].join(" ");
            break;
          case 3:
          default:
            e3 = [Q2(n3 / 255), Q2(r3 / 255), Q2(i3 / 255), Q2(o3 / 255), a3[2]].join(" ");
        }
        return e3;
      }, ct2 = l2.__private__.getFilters = function() {
        return o2;
      }, ft2 = l2.__private__.putStream = function(t3) {
        var e3 = (t3 = t3 || {}).data || "", n3 = t3.filters || ct2(), r3 = t3.alreadyAppliedFilters || [], i3 = t3.addLength1 || false, o3 = e3.length, a3 = {};
        true === n3 && (n3 = ["FlateEncode"]);
        var s3 = t3.additionalKeyValues || [], l3 = (a3 = void 0 !== ae.API.processDataByFilters ? ae.API.processDataByFilters(e3, n3) : { data: e3, reverseChain: [] }).reverseChain + (Array.isArray(r3) ? r3.join(" ") : r3.toString());
        0 !== a3.data.length && (s3.push({ key: "Length", value: a3.data.length }), true === i3 && s3.push({ key: "Length1", value: o3 })), 0 != l3.length && (l3.split("/").length - 1 == 1 ? s3.push({ key: "Filter", value: l3 }) : s3.push({ key: "Filter", value: "[" + l3 + "]" })), tt2("<<");
        for (var h3 = 0; h3 < s3.length; h3++) tt2("/" + s3[h3].key + " " + s3[h3].value);
        tt2(">>"), 0 !== a3.data.length && (tt2("stream"), tt2(a3.data), tt2("endstream"));
      }, pt2 = l2.__private__.putPage = function(t3) {
        t3.mediaBox;
        var e3 = t3.number, n3 = t3.data, r3 = t3.objId, i3 = t3.contentsObjId;
        ot2(r3, true);
        V2[x2].mediaBox.topRightX, V2[x2].mediaBox.bottomLeftX, V2[x2].mediaBox.topRightY, V2[x2].mediaBox.bottomLeftY;
        tt2("<</Type /Page"), tt2("/Parent " + t3.rootDictionaryObjId + " 0 R"), tt2("/Resources " + t3.resourceDictionaryObjId + " 0 R"), tt2("/MediaBox [" + parseFloat(Z2(t3.mediaBox.bottomLeftX)) + " " + parseFloat(Z2(t3.mediaBox.bottomLeftY)) + " " + Z2(t3.mediaBox.topRightX) + " " + Z2(t3.mediaBox.topRightY) + "]"), null !== t3.cropBox && tt2("/CropBox [" + Z2(t3.cropBox.bottomLeftX) + " " + Z2(t3.cropBox.bottomLeftY) + " " + Z2(t3.cropBox.topRightX) + " " + Z2(t3.cropBox.topRightY) + "]"), null !== t3.bleedBox && tt2("/BleedBox [" + Z2(t3.bleedBox.bottomLeftX) + " " + Z2(t3.bleedBox.bottomLeftY) + " " + Z2(t3.bleedBox.topRightX) + " " + Z2(t3.bleedBox.topRightY) + "]"), null !== t3.trimBox && tt2("/TrimBox [" + Z2(t3.trimBox.bottomLeftX) + " " + Z2(t3.trimBox.bottomLeftY) + " " + Z2(t3.trimBox.topRightX) + " " + Z2(t3.trimBox.topRightY) + "]"), null !== t3.artBox && tt2("/ArtBox [" + Z2(t3.artBox.bottomLeftX) + " " + Z2(t3.artBox.bottomLeftY) + " " + Z2(t3.artBox.topRightX) + " " + Z2(t3.artBox.topRightY) + "]"), "number" == typeof t3.userUnit && 1 !== t3.userUnit && tt2("/UserUnit " + t3.userUnit), it2.publish("putPage", { objId: r3, pageContext: V2[e3], pageNumber: e3, page: n3 }), tt2("/Contents " + i3 + " 0 R"), tt2(">>"), tt2("endobj");
        var o3 = n3.join("\n");
        return ot2(i3, true), ft2({ data: o3, filters: ct2() }), tt2("endobj"), r3;
      }, dt2 = l2.__private__.putPages = function() {
        var t3, e3, n3 = [];
        for (t3 = 1; t3 <= W2; t3++) V2[t3].objId = X2(), V2[t3].contentsObjId = X2();
        for (t3 = 1; t3 <= W2; t3++) n3.push(pt2({ number: t3, data: I2[t3], objId: V2[t3].objId, contentsObjId: V2[t3].contentsObjId, mediaBox: V2[t3].mediaBox, cropBox: V2[t3].cropBox, bleedBox: V2[t3].bleedBox, trimBox: V2[t3].trimBox, artBox: V2[t3].artBox, userUnit: V2[t3].userUnit, rootDictionaryObjId: st2, resourceDictionaryObjId: lt2 }));
        ot2(st2, true), tt2("<</Type /Pages");
        var r3 = "/Kids [";
        for (e3 = 0; e3 < W2; e3++) r3 += n3[e3] + " 0 R ";
        tt2(r3 + "]"), tt2("/Count " + W2), tt2(">>"), tt2("endobj"), it2.publish("postPutPages");
      }, gt2 = function() {
        !(function() {
          for (var t3 in rt2) rt2.hasOwnProperty(t3) && (false === s2 || true === s2 && K2.hasOwnProperty(t3)) && (e3 = rt2[t3], it2.publish("putFont", { font: e3, out: tt2, newObject: J2, putStream: ft2 }), true !== e3.isAlreadyPutted && (e3.objectNumber = J2(), tt2("<<"), tt2("/Type /Font"), tt2("/BaseFont /" + e3.postScriptName), tt2("/Subtype /Type1"), "string" == typeof e3.encoding && tt2("/Encoding /" + e3.encoding), tt2("/FirstChar 32"), tt2("/LastChar 255"), tt2(">>"), tt2("endobj")));
          var e3;
        })(), it2.publish("putResources"), ot2(lt2, true), tt2("<<"), (function() {
          for (var t3 in tt2("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), tt2("/Font <<"), rt2) rt2.hasOwnProperty(t3) && (false === s2 || true === s2 && K2.hasOwnProperty(t3)) && tt2("/" + t3 + " " + rt2[t3].objectNumber + " 0 R");
          tt2(">>"), tt2("/XObject <<"), it2.publish("putXobjectDict"), tt2(">>");
        })(), tt2(">>"), tt2("endobj"), it2.publish("postPutResources");
      }, mt2 = function(t3, e3, n3) {
        H2.hasOwnProperty(e3) || (H2[e3] = {}), H2[e3][n3] = t3;
      }, yt2 = function(t3, e3, n3, r3, i3) {
        i3 = i3 || false;
        var o3 = "F" + (Object.keys(rt2).length + 1).toString(10), a3 = { id: o3, postScriptName: t3, fontName: e3, fontStyle: n3, encoding: r3, isStandardFont: i3, metadata: {} };
        return it2.publish("addFont", { font: a3, instance: this }), void 0 !== o3 && (rt2[o3] = a3, mt2(o3, e3, n3)), o3;
      }, vt2 = l2.__private__.pdfEscape = l2.pdfEscape = function(t3, e3) {
        return (function(t4, e4) {
          var n3, r3, i3, o3, a3, s3, l3, h3, u3;
          if (i3 = (e4 = e4 || {}).sourceEncoding || "Unicode", a3 = e4.outputEncoding, (e4.autoencode || a3) && rt2[$2].metadata && rt2[$2].metadata[i3] && rt2[$2].metadata[i3].encoding && (o3 = rt2[$2].metadata[i3].encoding, !a3 && rt2[$2].encoding && (a3 = rt2[$2].encoding), !a3 && o3.codePages && (a3 = o3.codePages[0]), "string" == typeof a3 && (a3 = o3[a3]), a3)) {
            for (l3 = false, s3 = [], n3 = 0, r3 = t4.length; n3 < r3; n3++) (h3 = a3[t4.charCodeAt(n3)]) ? s3.push(String.fromCharCode(h3)) : s3.push(t4[n3]), s3[n3].charCodeAt(0) >> 8 && (l3 = true);
            t4 = s3.join("");
          }
          for (n3 = t4.length; void 0 === l3 && 0 !== n3; ) t4.charCodeAt(n3 - 1) >> 8 && (l3 = true), n3--;
          if (!l3) return t4;
          for (s3 = e4.noBOM ? [] : [254, 255], n3 = 0, r3 = t4.length; n3 < r3; n3++) {
            if ((u3 = (h3 = t4.charCodeAt(n3)) >> 8) >> 8) throw new Error("Character at position " + n3 + " of string '" + t4 + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
            s3.push(u3), s3.push(h3 - (u3 << 8));
          }
          return String.fromCharCode.apply(void 0, s3);
        })(t3, e3).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
      }, wt2 = l2.__private__.beginPage = function(t3, e3) {
        var n3, r3 = "string" == typeof e3 && e3.toLowerCase();
        if ("string" == typeof t3 && (n3 = f2(t3.toLowerCase())) && (t3 = n3[0], e3 = n3[1]), Array.isArray(t3) && (e3 = t3[1], t3 = t3[0]), (isNaN(t3) || isNaN(e3)) && (t3 = i2[0], e3 = i2[1]), r3) {
          switch (r3.substr(0, 1)) {
            case "l":
              t3 < e3 && (r3 = "s");
              break;
            case "p":
              e3 < t3 && (r3 = "s");
          }
          "s" === r3 && (n3 = t3, t3 = e3, e3 = n3);
        }
        (14400 < t3 || 14400 < e3) && (console.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), t3 = Math.min(14400, t3), e3 = Math.min(14400, e3)), i2 = [t3, e3], k2 = true, I2[++W2] = [], V2[W2] = { objId: 0, contentsObjId: 0, userUnit: Number(a2), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(t3), topRightY: Number(e3) } }, xt2(W2);
      }, bt2 = function() {
        wt2.apply(this, arguments), Dt(Rt), tt2(Jt), 0 !== te && tt2(te + " J"), 0 !== ne && tt2(ne + " j"), it2.publish("addPage", { pageNumber: W2 });
      }, xt2 = function(t3) {
        0 < t3 && t3 <= W2 && (x2 = t3);
      }, Nt2 = l2.__private__.getNumberOfPages = l2.getNumberOfPages = function() {
        return I2.length - 1;
      }, Lt2 = function(t3, e3, n3) {
        var r3, i3 = void 0;
        return n3 = n3 || {}, t3 = void 0 !== t3 ? t3 : rt2[$2].fontName, e3 = void 0 !== e3 ? e3 : rt2[$2].fontStyle, r3 = t3.toLowerCase(), void 0 !== H2[r3] && void 0 !== H2[r3][e3] ? i3 = H2[r3][e3] : void 0 !== H2[t3] && void 0 !== H2[t3][e3] ? i3 = H2[t3][e3] : false === n3.disableWarning && console.warn("Unable to look up font label for font '" + t3 + "', '" + e3 + "'. Refer to getFontList() for available fonts."), i3 || n3.noFallback || null == (i3 = H2.times[e3]) && (i3 = H2.times.normal), i3;
      }, At2 = l2.__private__.putInfo = function() {
        for (var t3 in J2(), tt2("<<"), tt2("/Producer (jsPDF " + ae.version + ")"), D2) D2.hasOwnProperty(t3) && D2[t3] && tt2("/" + t3.substr(0, 1).toUpperCase() + t3.substr(1) + " (" + vt2(D2[t3]) + ")");
        tt2("/CreationDate (" + p2 + ")"), tt2(">>"), tt2("endobj");
      }, St2 = l2.__private__.putCatalog = function(t3) {
        var e3 = (t3 = t3 || {}).rootDictionaryObjId || st2;
        switch (J2(), tt2("<<"), tt2("/Type /Catalog"), tt2("/Pages " + e3 + " 0 R"), L2 || (L2 = "fullwidth"), L2) {
          case "fullwidth":
            tt2("/OpenAction [3 0 R /FitH null]");
            break;
          case "fullheight":
            tt2("/OpenAction [3 0 R /FitV null]");
            break;
          case "fullpage":
            tt2("/OpenAction [3 0 R /Fit]");
            break;
          case "original":
            tt2("/OpenAction [3 0 R /XYZ null null 1]");
            break;
          default:
            var n3 = "" + L2;
            "%" === n3.substr(n3.length - 1) && (L2 = parseInt(L2) / 100), "number" == typeof L2 && tt2("/OpenAction [3 0 R /XYZ null null " + Z2(L2) + "]");
        }
        switch (S2 || (S2 = "continuous"), S2) {
          case "continuous":
            tt2("/PageLayout /OneColumn");
            break;
          case "single":
            tt2("/PageLayout /SinglePage");
            break;
          case "two":
          case "twoleft":
            tt2("/PageLayout /TwoColumnLeft");
            break;
          case "tworight":
            tt2("/PageLayout /TwoColumnRight");
        }
        A2 && tt2("/PageMode /" + A2), it2.publish("putCatalog"), tt2(">>"), tt2("endobj");
      }, _t2 = l2.__private__.putTrailer = function() {
        tt2("trailer"), tt2("<<"), tt2("/Size " + (U2 + 1)), tt2("/Root " + U2 + " 0 R"), tt2("/Info " + (U2 - 1) + " 0 R"), tt2("/ID [ <" + d2 + "> <" + d2 + "> ]"), tt2(">>");
      }, Ft2 = l2.__private__.putHeader = function() {
        tt2("%PDF-" + h2), tt2("%\xBA\xDF\xAC\xE0");
      }, Pt2 = l2.__private__.putXRef = function() {
        var t3 = 1, e3 = "0000000000";
        for (tt2("xref"), tt2("0 " + (U2 + 1)), tt2("0000000000 65535 f "), t3 = 1; t3 <= U2; t3++) {
          "function" == typeof z2[t3] ? tt2((e3 + z2[t3]()).slice(-10) + " 00000 n ") : void 0 !== z2[t3] ? tt2((e3 + z2[t3]).slice(-10) + " 00000 n ") : tt2("0000000000 00000 n ");
        }
      }, kt2 = l2.__private__.buildDocument = function() {
        k2 = false, B2 = U2 = 0, C2 = [], z2 = [], G2 = [], st2 = X2(), lt2 = X2(), it2.publish("buildDocument"), Ft2(), dt2(), (function() {
          it2.publish("putAdditionalObjects");
          for (var t4 = 0; t4 < G2.length; t4++) {
            var e3 = G2[t4];
            ot2(e3.objId, true), tt2(e3.content), tt2("endobj");
          }
          it2.publish("postPutAdditionalObjects");
        })(), gt2(), At2(), St2();
        var t3 = B2;
        return Pt2(), _t2(), tt2("startxref"), tt2("" + t3), tt2("%%EOF"), k2 = true, C2.join("\n");
      }, It = l2.__private__.getBlob = function(t3) {
        return new Blob([E2(t3)], { type: "application/pdf" });
      }, Ct = l2.output = l2.__private__.output = ((F2 = function(t3, e3) {
        e3 = e3 || {};
        var n3 = kt2();
        switch ("string" == typeof e3 ? e3 = { filename: e3 } : e3.filename = e3.filename || "generated.pdf", t3) {
          case void 0:
            return n3;
          case "save":
            l2.save(e3.filename);
            break;
          case "arraybuffer":
            return E2(n3);
          case "blob":
            return It(n3);
          case "bloburi":
          case "bloburl":
            if (void 0 !== ie.URL && "function" == typeof ie.URL.createObjectURL) return ie.URL && ie.URL.createObjectURL(It(n3)) || void 0;
            console.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
            break;
          case "datauristring":
          case "dataurlstring":
            return "data:application/pdf;filename=" + e3.filename + ";base64," + btoa(n3);
          case "dataurlnewwindow":
            var r3 = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring") + '"></iframe></body></html>', i3 = ie.open();
            if (null !== i3 && i3.document.write(r3), i3 || "undefined" == typeof safari) return i3;
          case "datauri":
          case "dataurl":
            return ie.document.location.href = "data:application/pdf;filename=" + e3.filename + ";base64," + btoa(n3);
          default:
            return null;
        }
      }).foo = function() {
        try {
          return F2.apply(this, arguments);
        } catch (t3) {
          var e3 = t3.stack || "";
          ~e3.indexOf(" at ") && (e3 = e3.split(" at ")[1]);
          var n3 = "Error in function " + e3.split("\n")[0].split("<")[0] + ": " + t3.message;
          if (!ie.console) throw new Error(n3);
          ie.console.error(n3, t3), ie.alert && alert(n3);
        }
      }, (F2.foo.bar = F2).foo), Bt = function(t3) {
        return true === Array.isArray(Y2) && -1 < Y2.indexOf(t3);
      };
      switch (e2) {
        case "pt":
          _2 = 1;
          break;
        case "mm":
          _2 = 72 / 25.4;
          break;
        case "cm":
          _2 = 72 / 2.54;
          break;
        case "in":
          _2 = 72;
          break;
        case "px":
          _2 = 1 == Bt("px_scaling") ? 0.75 : 96 / 72;
          break;
        case "pc":
        case "em":
          _2 = 12;
          break;
        case "ex":
          _2 = 6;
          break;
        default:
          throw new Error("Invalid unit: " + e2);
      }
      w2(), m2();
      var jt = l2.__private__.getPageInfo = function(t3) {
        if (isNaN(t3) || t3 % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
        return { objId: V2[t3].objId, pageNumber: t3, pageContext: V2[t3] };
      }, Et = l2.__private__.getPageInfoByObjId = function(t3) {
        for (var e3 in V2) if (V2[e3].objId === t3) break;
        if (isNaN(t3) || t3 % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
        return jt(e3);
      }, Mt = l2.__private__.getCurrentPageInfo = function() {
        return { objId: V2[x2].objId, pageNumber: x2, pageContext: V2[x2] };
      };
      l2.addPage = function() {
        return bt2.apply(this, arguments), this;
      }, l2.setPage = function() {
        return xt2.apply(this, arguments), this;
      }, l2.insertPage = function(t3) {
        return this.addPage(), this.movePage(x2, t3), this;
      }, l2.movePage = function(t3, e3) {
        if (e3 < t3) {
          for (var n3 = I2[t3], r3 = V2[t3], i3 = t3; e3 < i3; i3--) I2[i3] = I2[i3 - 1], V2[i3] = V2[i3 - 1];
          I2[e3] = n3, V2[e3] = r3, this.setPage(e3);
        } else if (t3 < e3) {
          for (n3 = I2[t3], r3 = V2[t3], i3 = t3; i3 < e3; i3++) I2[i3] = I2[i3 + 1], V2[i3] = V2[i3 + 1];
          I2[e3] = n3, V2[e3] = r3, this.setPage(e3);
        }
        return this;
      }, l2.deletePage = function() {
        return function(t3) {
          0 < t3 && t3 <= W2 && (I2.splice(t3, 1), --W2 < x2 && (x2 = W2), this.setPage(x2));
        }.apply(this, arguments), this;
      };
      l2.__private__.text = l2.text = function(t3, e3, n3, i3) {
        var r3;
        "number" != typeof t3 || "number" != typeof e3 || "string" != typeof n3 && !Array.isArray(n3) || (r3 = n3, n3 = e3, e3 = t3, t3 = r3);
        var o3 = arguments[3], a3 = arguments[4], s3 = arguments[5];
        if ("object" === se(o3) && null !== o3 || ("string" == typeof a3 && (s3 = a3, a3 = null), "string" == typeof o3 && (s3 = o3, o3 = null), "number" == typeof o3 && (a3 = o3, o3 = null), i3 = { flags: o3, angle: a3, align: s3 }), (o3 = o3 || {}).noBOM = o3.noBOM || true, o3.autoencode = o3.autoencode || true, isNaN(e3) || isNaN(n3) || null == t3) throw new Error("Invalid arguments passed to jsPDF.text");
        if (0 === t3.length) return c3;
        var l3, h3 = "", u3 = "number" == typeof i3.lineHeightFactor ? i3.lineHeightFactor : Tt, c3 = i3.scope || this;
        function f3(t4) {
          for (var e4, n4 = t4.concat(), r4 = [], i4 = n4.length; i4--; ) "string" == typeof (e4 = n4.shift()) ? r4.push(e4) : Array.isArray(t4) && 1 === e4.length ? r4.push(e4[0]) : r4.push([e4[0], e4[1], e4[2]]);
          return r4;
        }
        function p3(t4, e4) {
          var n4;
          if ("string" == typeof t4) n4 = e4(t4)[0];
          else if (Array.isArray(t4)) {
            for (var r4, i4, o4 = t4.concat(), a4 = [], s4 = o4.length; s4--; ) "string" == typeof (r4 = o4.shift()) ? a4.push(e4(r4)[0]) : Array.isArray(r4) && "string" === r4[0] && (i4 = e4(r4[0], r4[1], r4[2]), a4.push([i4[0], i4[1], i4[2]]));
            n4 = a4;
          }
          return n4;
        }
        var d3 = false, g3 = true;
        if ("string" == typeof t3) d3 = true;
        else if (Array.isArray(t3)) {
          for (var m3, y3 = t3.concat(), v3 = [], w3 = y3.length; w3--; ) ("string" != typeof (m3 = y3.shift()) || Array.isArray(m3) && "string" != typeof m3[0]) && (g3 = false);
          d3 = g3;
        }
        if (false === d3) throw new Error('Type of text must be string or Array. "' + t3 + '" is not recognized.');
        var b3 = rt2[$2].encoding;
        "WinAnsiEncoding" !== b3 && "StandardEncoding" !== b3 || (t3 = p3(t3, function(t4, e4, n4) {
          return [(r4 = t4, r4 = r4.split("	").join(Array(i3.TabLen || 9).join(" ")), vt2(r4, o3)), e4, n4];
          var r4;
        })), "string" == typeof t3 && (t3 = t3.match(/[\r?\n]/) ? t3.split(/\r\n|\r|\n/g) : [t3]);
        var x3 = et2 / c3.internal.scaleFactor, N3 = x3 * (Tt - 1);
        switch (i3.baseline) {
          case "bottom":
            n3 -= N3;
            break;
          case "top":
            n3 += x3 - N3;
            break;
          case "hanging":
            n3 += x3 - 2 * N3;
            break;
          case "middle":
            n3 += x3 / 2 - N3;
        }
        0 < (O3 = i3.maxWidth || 0) && ("string" == typeof t3 ? t3 = c3.splitTextToSize(t3, O3) : "[object Array]" === Object.prototype.toString.call(t3) && (t3 = c3.splitTextToSize(t3.join(" "), O3)));
        var L3 = { text: t3, x: e3, y: n3, options: i3, mutex: { pdfEscape: vt2, activeFontKey: $2, fonts: rt2, activeFontSize: et2 } };
        it2.publish("preProcessText", L3), t3 = L3.text;
        a3 = (i3 = L3.options).angle;
        var A3 = c3.internal.scaleFactor, S3 = [];
        if (a3) {
          a3 *= Math.PI / 180;
          var _3 = Math.cos(a3), F3 = Math.sin(a3);
          S3 = [Z2(_3), Z2(F3), Z2(-1 * F3), Z2(_3)];
        }
        void 0 !== (M3 = i3.charSpace) && (h3 += Q2(M3 * A3) + " Tc\n");
        i3.lang;
        var P3 = -1, k3 = void 0 !== i3.renderingMode ? i3.renderingMode : i3.stroke, I3 = c3.internal.getCurrentPageInfo().pageContext;
        switch (k3) {
          case 0:
          case false:
          case "fill":
            P3 = 0;
            break;
          case 1:
          case true:
          case "stroke":
            P3 = 1;
            break;
          case 2:
          case "fillThenStroke":
            P3 = 2;
            break;
          case 3:
          case "invisible":
            P3 = 3;
            break;
          case 4:
          case "fillAndAddForClipping":
            P3 = 4;
            break;
          case 5:
          case "strokeAndAddPathForClipping":
            P3 = 5;
            break;
          case 6:
          case "fillThenStrokeAndAddToPathForClipping":
            P3 = 6;
            break;
          case 7:
          case "addToPathForClipping":
            P3 = 7;
        }
        var C3 = void 0 !== I3.usedRenderingMode ? I3.usedRenderingMode : -1;
        -1 !== P3 ? h3 += P3 + " Tr\n" : -1 !== C3 && (h3 += "0 Tr\n"), -1 !== P3 && (I3.usedRenderingMode = P3);
        s3 = i3.align || "left";
        var B3 = et2 * u3, j3 = c3.internal.pageSize.getWidth(), E3 = (A3 = c3.internal.scaleFactor, rt2[$2]), M3 = i3.charSpace || Qt, O3 = i3.maxWidth || 0, q3 = (o3 = {}, []);
        if ("[object Array]" === Object.prototype.toString.call(t3)) {
          var T3, R3;
          v3 = f3(t3);
          "left" !== s3 && (R3 = v3.map(function(t4) {
            return c3.getStringUnitWidth(t4, { font: E3, charSpace: M3, fontSize: et2 }) * et2 / A3;
          }));
          var D3, U3 = Math.max.apply(Math, R3), z3 = 0;
          if ("right" === s3) {
            e3 -= R3[0], t3 = [];
            var H3 = 0;
            for (w3 = v3.length; H3 < w3; H3++) U3 - R3[H3], T3 = 0 === H3 ? (D3 = Wt(e3), Vt(n3)) : (D3 = (z3 - R3[H3]) * A3, -B3), t3.push([v3[H3], D3, T3]), z3 = R3[H3];
          } else if ("center" === s3) {
            e3 -= R3[0] / 2, t3 = [];
            for (H3 = 0, w3 = v3.length; H3 < w3; H3++) (U3 - R3[H3]) / 2, T3 = 0 === H3 ? (D3 = Wt(e3), Vt(n3)) : (D3 = (z3 - R3[H3]) / 2 * A3, -B3), t3.push([v3[H3], D3, T3]), z3 = R3[H3];
          } else if ("left" === s3) {
            t3 = [];
            for (H3 = 0, w3 = v3.length; H3 < w3; H3++) T3 = 0 === H3 ? Vt(n3) : -B3, D3 = 0 === H3 ? Wt(e3) : 0, t3.push(v3[H3]);
          } else {
            if ("justify" !== s3) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
            t3 = [];
            for (O3 = 0 !== O3 ? O3 : j3, H3 = 0, w3 = v3.length; H3 < w3; H3++) T3 = 0 === H3 ? Vt(n3) : -B3, D3 = 0 === H3 ? Wt(e3) : 0, H3 < w3 - 1 && q3.push(((O3 - R3[H3]) / (v3[H3].split(" ").length - 1) * A3).toFixed(2)), t3.push([v3[H3], D3, T3]);
          }
        }
        true === ("boolean" == typeof i3.R2L ? i3.R2L : nt2) && (t3 = p3(t3, function(t4, e4, n4) {
          return [t4.split("").reverse().join(""), e4, n4];
        }));
        L3 = { text: t3, x: e3, y: n3, options: i3, mutex: { pdfEscape: vt2, activeFontKey: $2, fonts: rt2, activeFontSize: et2 } };
        it2.publish("postProcessText", L3), t3 = L3.text, l3 = L3.mutex.isHex;
        v3 = f3(t3);
        t3 = [];
        var W3, V3, G3, Y3 = 0, J3 = (w3 = v3.length, "");
        for (H3 = 0; H3 < w3; H3++) J3 = "", Array.isArray(v3[H3]) ? (W3 = parseFloat(v3[H3][1]), V3 = parseFloat(v3[H3][2]), G3 = (l3 ? "<" : "(") + v3[H3][0] + (l3 ? ">" : ")"), Y3 = 1) : (W3 = Wt(e3), V3 = Vt(n3), G3 = (l3 ? "<" : "(") + v3[H3] + (l3 ? ">" : ")")), void 0 !== q3 && void 0 !== q3[H3] && (J3 = q3[H3] + " Tw\n"), 0 !== S3.length && 0 === H3 ? t3.push(J3 + S3.join(" ") + " " + W3.toFixed(2) + " " + V3.toFixed(2) + " Tm\n" + G3) : 1 === Y3 || 0 === Y3 && 0 === H3 ? t3.push(J3 + W3.toFixed(2) + " " + V3.toFixed(2) + " Td\n" + G3) : t3.push(J3 + G3);
        t3 = 0 === Y3 ? t3.join(" Tj\nT* ") : t3.join(" Tj\n"), t3 += " Tj\n";
        var X3 = "BT\n/" + $2 + " " + et2 + " Tf\n" + (et2 * u3).toFixed(2) + " TL\n" + Kt + "\n";
        return X3 += h3, X3 += t3, tt2(X3 += "ET"), K2[$2] = true, c3;
      }, l2.__private__.lstext = l2.lstext = function(t3, e3, n3, r3) {
        return console.warn("jsPDF.lstext is deprecated"), this.text(t3, e3, n3, { charSpace: r3 });
      }, l2.__private__.clip = l2.clip = function(t3) {
        tt2("evenodd" === t3 ? "W*" : "W"), tt2("n");
      }, l2.__private__.clip_fixed = l2.clip_fixed = function(t3) {
        console.log("clip_fixed is deprecated"), l2.clip(t3);
      };
      var Ot = l2.__private__.isValidStyle = function(t3) {
        var e3 = false;
        return -1 !== [void 0, null, "S", "F", "DF", "FD", "f", "f*", "B", "B*"].indexOf(t3) && (e3 = true), e3;
      }, qt = l2.__private__.getStyle = function(t3) {
        var e3 = "S";
        return "F" === t3 ? e3 = "f" : "FD" === t3 || "DF" === t3 ? e3 = "B" : "f" !== t3 && "f*" !== t3 && "B" !== t3 && "B*" !== t3 || (e3 = t3), e3;
      };
      l2.__private__.line = l2.line = function(t3, e3, n3, r3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(n3) || isNaN(r3)) throw new Error("Invalid arguments passed to jsPDF.line");
        return this.lines([[n3 - t3, r3 - e3]], t3, e3);
      }, l2.__private__.lines = l2.lines = function(t3, e3, n3, r3, i3, o3) {
        var a3, s3, l3, h3, u3, c3, f3, p3, d3, g3, m3, y3;
        if ("number" == typeof t3 && (y3 = n3, n3 = e3, e3 = t3, t3 = y3), r3 = r3 || [1, 1], o3 = o3 || false, isNaN(e3) || isNaN(n3) || !Array.isArray(t3) || !Array.isArray(r3) || !Ot(i3) || "boolean" != typeof o3) throw new Error("Invalid arguments passed to jsPDF.lines");
        for (tt2(Q2(Wt(e3)) + " " + Q2(Vt(n3)) + " m "), a3 = r3[0], s3 = r3[1], h3 = t3.length, g3 = e3, m3 = n3, l3 = 0; l3 < h3; l3++) 2 === (u3 = t3[l3]).length ? (g3 = u3[0] * a3 + g3, m3 = u3[1] * s3 + m3, tt2(Q2(Wt(g3)) + " " + Q2(Vt(m3)) + " l")) : (c3 = u3[0] * a3 + g3, f3 = u3[1] * s3 + m3, p3 = u3[2] * a3 + g3, d3 = u3[3] * s3 + m3, g3 = u3[4] * a3 + g3, m3 = u3[5] * s3 + m3, tt2(Q2(Wt(c3)) + " " + Q2(Vt(f3)) + " " + Q2(Wt(p3)) + " " + Q2(Vt(d3)) + " " + Q2(Wt(g3)) + " " + Q2(Vt(m3)) + " c"));
        return o3 && tt2(" h"), null !== i3 && tt2(qt(i3)), this;
      }, l2.__private__.rect = l2.rect = function(t3, e3, n3, r3, i3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(n3) || isNaN(r3) || !Ot(i3)) throw new Error("Invalid arguments passed to jsPDF.rect");
        return tt2([Z2(Wt(t3)), Z2(Vt(e3)), Z2(n3 * _2), Z2(-r3 * _2), "re"].join(" ")), null !== i3 && tt2(qt(i3)), this;
      }, l2.__private__.triangle = l2.triangle = function(t3, e3, n3, r3, i3, o3, a3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(n3) || isNaN(r3) || isNaN(i3) || isNaN(o3) || !Ot(a3)) throw new Error("Invalid arguments passed to jsPDF.triangle");
        return this.lines([[n3 - t3, r3 - e3], [i3 - n3, o3 - r3], [t3 - i3, e3 - o3]], t3, e3, [1, 1], a3, true), this;
      }, l2.__private__.roundedRect = l2.roundedRect = function(t3, e3, n3, r3, i3, o3, a3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(n3) || isNaN(r3) || isNaN(i3) || isNaN(o3) || !Ot(a3)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
        var s3 = 4 / 3 * (Math.SQRT2 - 1);
        return this.lines([[n3 - 2 * i3, 0], [i3 * s3, 0, i3, o3 - o3 * s3, i3, o3], [0, r3 - 2 * o3], [0, o3 * s3, -i3 * s3, o3, -i3, o3], [2 * i3 - n3, 0], [-i3 * s3, 0, -i3, -o3 * s3, -i3, -o3], [0, 2 * o3 - r3], [0, -o3 * s3, i3 * s3, -o3, i3, -o3]], t3 + i3, e3, [1, 1], a3), this;
      }, l2.__private__.ellipse = l2.ellipse = function(t3, e3, n3, r3, i3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(n3) || isNaN(r3) || !Ot(i3)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
        var o3 = 4 / 3 * (Math.SQRT2 - 1) * n3, a3 = 4 / 3 * (Math.SQRT2 - 1) * r3;
        return tt2([Z2(Wt(t3 + n3)), Z2(Vt(e3)), "m", Z2(Wt(t3 + n3)), Z2(Vt(e3 - a3)), Z2(Wt(t3 + o3)), Z2(Vt(e3 - r3)), Z2(Wt(t3)), Z2(Vt(e3 - r3)), "c"].join(" ")), tt2([Z2(Wt(t3 - o3)), Z2(Vt(e3 - r3)), Z2(Wt(t3 - n3)), Z2(Vt(e3 - a3)), Z2(Wt(t3 - n3)), Z2(Vt(e3)), "c"].join(" ")), tt2([Z2(Wt(t3 - n3)), Z2(Vt(e3 + a3)), Z2(Wt(t3 - o3)), Z2(Vt(e3 + r3)), Z2(Wt(t3)), Z2(Vt(e3 + r3)), "c"].join(" ")), tt2([Z2(Wt(t3 + o3)), Z2(Vt(e3 + r3)), Z2(Wt(t3 + n3)), Z2(Vt(e3 + a3)), Z2(Wt(t3 + n3)), Z2(Vt(e3)), "c"].join(" ")), null !== i3 && tt2(qt(i3)), this;
      }, l2.__private__.circle = l2.circle = function(t3, e3, n3, r3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(n3) || !Ot(r3)) throw new Error("Invalid arguments passed to jsPDF.circle");
        return this.ellipse(t3, e3, n3, n3, r3);
      };
      l2.setFont = function(t3, e3) {
        return $2 = Lt2(t3, e3, { disableWarning: false }), this;
      }, l2.setFontStyle = l2.setFontType = function(t3) {
        return $2 = Lt2(void 0, t3), this;
      };
      l2.__private__.getFontList = l2.getFontList = function() {
        var t3, e3, n3, r3 = {};
        for (t3 in H2) if (H2.hasOwnProperty(t3)) for (e3 in r3[t3] = n3 = [], H2[t3]) H2[t3].hasOwnProperty(e3) && n3.push(e3);
        return r3;
      };
      l2.addFont = function(t3, e3, n3, r3) {
        yt2.call(this, t3, e3, n3, r3 = r3 || "Identity-H");
      };
      var Tt, Rt = r2.lineWidth || 0.200025, Dt = l2.__private__.setLineWidth = l2.setLineWidth = function(t3) {
        return tt2((t3 * _2).toFixed(2) + " w"), this;
      }, Ut = (l2.__private__.setLineDash = ae.API.setLineDash = function(t3, e3) {
        if (t3 = t3 || [], e3 = e3 || 0, isNaN(e3) || !Array.isArray(t3)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
        return t3 = t3.map(function(t4) {
          return (t4 * _2).toFixed(3);
        }).join(" "), e3 = parseFloat((e3 * _2).toFixed(3)), tt2("[" + t3 + "] " + e3 + " d"), this;
      }, l2.__private__.getLineHeight = l2.getLineHeight = function() {
        return et2 * Tt;
      }), zt = (Ut = l2.__private__.getLineHeight = l2.getLineHeight = function() {
        return et2 * Tt;
      }, l2.__private__.setLineHeightFactor = l2.setLineHeightFactor = function(t3) {
        return "number" == typeof (t3 = t3 || 1.15) && (Tt = t3), this;
      }), Ht = l2.__private__.getLineHeightFactor = l2.getLineHeightFactor = function() {
        return Tt;
      };
      zt(r2.lineHeight);
      var Wt = l2.__private__.getHorizontalCoordinate = function(t3) {
        return t3 * _2;
      }, Vt = l2.__private__.getVerticalCoordinate = function(t3) {
        return V2[x2].mediaBox.topRightY - V2[x2].mediaBox.bottomLeftY - t3 * _2;
      }, Gt = l2.__private__.getHorizontalCoordinateString = function(t3) {
        return Z2(t3 * _2);
      }, Yt = l2.__private__.getVerticalCoordinateString = function(t3) {
        return Z2(V2[x2].mediaBox.topRightY - V2[x2].mediaBox.bottomLeftY - t3 * _2);
      }, Jt = r2.strokeColor || "0 G", Xt = (l2.__private__.getStrokeColor = l2.getDrawColor = function() {
        return ht2(Jt);
      }, l2.__private__.setStrokeColor = l2.setDrawColor = function(t3, e3, n3, r3) {
        return Jt = ut2({ ch1: t3, ch2: e3, ch3: n3, ch4: r3, pdfColorType: "draw", precision: 2 }), tt2(Jt), this;
      }, r2.fillColor || "0 g"), Kt = (l2.__private__.getFillColor = l2.getFillColor = function() {
        return ht2(Xt);
      }, l2.__private__.setFillColor = l2.setFillColor = function(t3, e3, n3, r3) {
        return Xt = ut2({ ch1: t3, ch2: e3, ch3: n3, ch4: r3, pdfColorType: "fill", precision: 2 }), tt2(Xt), this;
      }, r2.textColor || "0 g"), Zt = l2.__private__.getTextColor = l2.getTextColor = function() {
        return ht2(Kt);
      }, Qt = (l2.__private__.setTextColor = l2.setTextColor = function(t3, e3, n3, r3) {
        return Kt = ut2({ ch1: t3, ch2: e3, ch3: n3, ch4: r3, pdfColorType: "text", precision: 3 }), this;
      }, r2.charSpace || 0), $t = l2.__private__.getCharSpace = l2.getCharSpace = function() {
        return Qt;
      }, te = (l2.__private__.setCharSpace = l2.setCharSpace = function(t3) {
        if (isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
        return Qt = t3, this;
      }, 0);
      l2.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 };
      l2.__private__.setLineCap = l2.setLineCap = function(t3) {
        var e3 = l2.CapJoinStyles[t3];
        if (void 0 === e3) throw new Error("Line cap style of '" + t3 + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
        return tt2((te = e3) + " J"), this;
      };
      var ee, ne = 0;
      l2.__private__.setLineJoin = l2.setLineJoin = function(t3) {
        var e3 = l2.CapJoinStyles[t3];
        if (void 0 === e3) throw new Error("Line join style of '" + t3 + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
        return tt2((ne = e3) + " j"), this;
      }, l2.__private__.setMiterLimit = l2.setMiterLimit = function(t3) {
        if (t3 = t3 || 0, isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.setMiterLimit");
        return ee = parseFloat(Z2(t3 * _2)), tt2(ee + " M"), this;
      };
      for (var re in l2.save = function(r3, t3) {
        if (r3 = r3 || "generated.pdf", (t3 = t3 || {}).returnPromise = t3.returnPromise || false, false !== t3.returnPromise) return new Promise(function(t4, e3) {
          try {
            var n3 = le(It(kt2()), r3);
            "function" == typeof le.unload && ie.setTimeout && setTimeout(le.unload, 911), t4(n3);
          } catch (t5) {
            e3(t5.message);
          }
        });
        le(It(kt2()), r3), "function" == typeof le.unload && ie.setTimeout && setTimeout(le.unload, 911);
      }, ae.API) ae.API.hasOwnProperty(re) && ("events" === re && ae.API.events.length ? (function(t3, e3) {
        var n3, r3, i3;
        for (i3 = e3.length - 1; -1 !== i3; i3--) n3 = e3[i3][0], r3 = e3[i3][1], t3.subscribe.apply(t3, [n3].concat("function" == typeof r3 ? [r3] : r3));
      })(it2, ae.API.events) : l2[re] = ae.API[re]);
      return l2.internal = { pdfEscape: vt2, getStyle: qt, getFont: function() {
        return rt2[Lt2.apply(l2, arguments)];
      }, getFontSize: O2, getCharSpace: $t, getTextColor: Zt, getLineHeight: Ut, getLineHeightFactor: Ht, write: j2, getHorizontalCoordinate: Wt, getVerticalCoordinate: Vt, getCoordinateString: Gt, getVerticalCoordinateString: Yt, collections: {}, newObject: J2, newAdditionalObject: at2, newObjectDeferred: X2, newObjectDeferredBegin: ot2, getFilters: ct2, putStream: ft2, events: it2, scaleFactor: _2, pageSize: { getWidth: function() {
        return (V2[x2].mediaBox.topRightX - V2[x2].mediaBox.bottomLeftX) / _2;
      }, setWidth: function(t3) {
        V2[x2].mediaBox.topRightX = t3 * _2 + V2[x2].mediaBox.bottomLeftX;
      }, getHeight: function() {
        return (V2[x2].mediaBox.topRightY - V2[x2].mediaBox.bottomLeftY) / _2;
      }, setHeight: function(t3) {
        V2[x2].mediaBox.topRightY = t3 * _2 + V2[x2].mediaBox.bottomLeftY;
      } }, output: Ct, getNumberOfPages: Nt2, pages: I2, out: tt2, f2: Z2, f3: Q2, getPageInfo: jt, getPageInfoByObjId: Et, getCurrentPageInfo: Mt, getPDFVersion: u2, hasHotfix: Bt }, Object.defineProperty(l2.internal.pageSize, "width", { get: function() {
        return (V2[x2].mediaBox.topRightX - V2[x2].mediaBox.bottomLeftX) / _2;
      }, set: function(t3) {
        V2[x2].mediaBox.topRightX = t3 * _2 + V2[x2].mediaBox.bottomLeftX;
      }, enumerable: true, configurable: true }), Object.defineProperty(l2.internal.pageSize, "height", { get: function() {
        return (V2[x2].mediaBox.topRightY - V2[x2].mediaBox.bottomLeftY) / _2;
      }, set: function(t3) {
        V2[x2].mediaBox.topRightY = t3 * _2 + V2[x2].mediaBox.bottomLeftY;
      }, enumerable: true, configurable: true }), (function(t3) {
        for (var e3 = 0, n3 = M2.length; e3 < n3; e3++) {
          var r3 = yt2(t3[e3][0], t3[e3][1], t3[e3][2], M2[e3][3], true);
          K2[r3] = true;
          var i3 = t3[e3][0].split("-");
          mt2(r3, i3[0], i3[1] || "");
        }
        it2.publish("addFonts", { fonts: rt2, dictionary: H2 });
      })(M2), $2 = "F1", bt2(i2, t2), it2.publish("initialized"), l2;
    }
    return ae.API = { events: [] }, ae.version = "1.5.3", "function" == typeof define && define.amd ? define("jsPDF", function() {
      return ae;
    }) : "undefined" != typeof module && module.exports ? (module.exports = ae, module.exports.jsPDF = ae) : ie.jsPDF = ae, ae;
  })("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")());
  /**
     * @license
     * Copyright (c) 2016 Alexander Weidt,
     * https://github.com/BiggA94
     * 
     * Licensed under the MIT License. http://opensource.org/licenses/mit-license
     */
  (function(t2, e2) {
    var A2, n2 = 1, S2 = function(t3) {
      return t3.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    }, y2 = function(t3) {
      return t3.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
    }, _2 = function(t3) {
      if (isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.f2");
      return t3.toFixed(2);
    }, s2 = function(t3) {
      if (isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.f2");
      return t3.toFixed(5);
    };
    t2.__acroform__ = {};
    var r2 = function(t3, e3) {
      t3.prototype = Object.create(e3.prototype), t3.prototype.constructor = t3;
    }, v2 = function(t3) {
      return t3 * n2;
    }, w2 = function(t3) {
      return t3 / n2;
    }, l2 = function(t3) {
      var e3 = new j2(), n3 = Y2.internal.getHeight(t3) || 0, r3 = Y2.internal.getWidth(t3) || 0;
      return e3.BBox = [0, 0, Number(_2(r3)), Number(_2(n3))], e3;
    }, i2 = t2.__acroform__.setBit = function(t3, e3) {
      if (t3 = t3 || 0, e3 = e3 || 0, isNaN(t3) || isNaN(e3)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
      return t3 |= 1 << e3;
    }, o2 = t2.__acroform__.clearBit = function(t3, e3) {
      if (t3 = t3 || 0, e3 = e3 || 0, isNaN(t3) || isNaN(e3)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
      return t3 &= ~(1 << e3);
    }, a2 = t2.__acroform__.getBit = function(t3, e3) {
      if (isNaN(t3) || isNaN(e3)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
      return 0 == (t3 & 1 << e3) ? 0 : 1;
    }, b2 = t2.__acroform__.getBitForPdf = function(t3, e3) {
      if (isNaN(t3) || isNaN(e3)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
      return a2(t3, e3 - 1);
    }, x2 = t2.__acroform__.setBitForPdf = function(t3, e3) {
      if (isNaN(t3) || isNaN(e3)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
      return i2(t3, e3 - 1);
    }, N2 = t2.__acroform__.clearBitForPdf = function(t3, e3, n3) {
      if (isNaN(t3) || isNaN(e3)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
      return o2(t3, e3 - 1);
    }, c2 = t2.__acroform__.calculateCoordinates = function(t3) {
      var e3 = this.internal.getHorizontalCoordinate, n3 = this.internal.getVerticalCoordinate, r3 = t3[0], i3 = t3[1], o3 = t3[2], a3 = t3[3], s3 = {};
      return s3.lowerLeft_X = e3(r3) || 0, s3.lowerLeft_Y = n3(i3 + a3) || 0, s3.upperRight_X = e3(r3 + o3) || 0, s3.upperRight_Y = n3(i3) || 0, [Number(_2(s3.lowerLeft_X)), Number(_2(s3.lowerLeft_Y)), Number(_2(s3.upperRight_X)), Number(_2(s3.upperRight_Y))];
    }, f2 = function(t3) {
      if (t3.appearanceStreamContent) return t3.appearanceStreamContent;
      if (t3.V || t3.DV) {
        var e3 = [], n3 = t3.V || t3.DV, r3 = h2(t3, n3), i3 = A2.internal.getFont(t3.fontName, t3.fontStyle).id;
        e3.push("/Tx BMC"), e3.push("q"), e3.push("BT"), e3.push(A2.__private__.encodeColorString(t3.color)), e3.push("/" + i3 + " " + _2(r3.fontSize) + " Tf"), e3.push("1 0 0 1 0 0 Tm"), e3.push(r3.text), e3.push("ET"), e3.push("Q"), e3.push("EMC");
        var o3 = new l2(t3);
        return o3.stream = e3.join("\n"), o3;
      }
    }, h2 = function(i3, t3) {
      var e3 = i3.maxFontSize || 12, n3 = (i3.fontName, { text: "", fontSize: "" }), o3 = (t3 = ")" == (t3 = "(" == t3.substr(0, 1) ? t3.substr(1) : t3).substr(t3.length - 1) ? t3.substr(0, t3.length - 1) : t3).split(" "), r3 = (A2.__private__.encodeColorString(i3.color), e3), a3 = Y2.internal.getHeight(i3) || 0;
      a3 = a3 < 0 ? -a3 : a3;
      var s3 = Y2.internal.getWidth(i3) || 0;
      s3 = s3 < 0 ? -s3 : s3;
      var l3 = function(t4, e4, n4) {
        if (t4 + 1 < o3.length) {
          var r4 = e4 + " " + o3[t4 + 1];
          return F2(r4, i3, n4).width <= s3 - 4;
        }
        return false;
      };
      r3++;
      t: for (; ; ) {
        t3 = "";
        var h3 = F2("3", i3, --r3).height, u3 = i3.multiline ? a3 - r3 : (a3 - h3) / 2, c3 = -2, f3 = u3 += 2, p3 = 0, d3 = 0, g3 = 0;
        if (r3 <= 0) {
          t3 = "(...) Tj\n", t3 += "% Width of Text: " + F2(t3, i3, r3 = 12).width + ", FieldWidth:" + s3 + "\n";
          break;
        }
        g3 = F2(o3[0] + " ", i3, r3).width;
        var m3 = "", y3 = 0;
        for (var v3 in o3) if (o3.hasOwnProperty(v3)) {
          m3 = " " == (m3 += o3[v3] + " ").substr(m3.length - 1) ? m3.substr(0, m3.length - 1) : m3;
          var w3 = parseInt(v3);
          g3 = F2(m3 + " ", i3, r3).width;
          var b3 = l3(w3, m3, r3), x3 = v3 >= o3.length - 1;
          if (b3 && !x3) {
            m3 += " ";
            continue;
          }
          if (b3 || x3) {
            if (x3) d3 = w3;
            else if (i3.multiline && a3 < (h3 + 2) * (y3 + 2) + 2) continue t;
          } else {
            if (!i3.multiline) continue t;
            if (a3 < (h3 + 2) * (y3 + 2) + 2) continue t;
            d3 = w3;
          }
          for (var N3 = "", L3 = p3; L3 <= d3; L3++) N3 += o3[L3] + " ";
          switch (N3 = " " == N3.substr(N3.length - 1) ? N3.substr(0, N3.length - 1) : N3, g3 = F2(N3, i3, r3).width, i3.textAlign) {
            case "right":
              c3 = s3 - g3 - 2;
              break;
            case "center":
              c3 = (s3 - g3) / 2;
              break;
            case "left":
            default:
              c3 = 2;
          }
          t3 += _2(c3) + " " + _2(f3) + " Td\n", t3 += "(" + S2(N3) + ") Tj\n", t3 += -_2(c3) + " 0 Td\n", f3 = -(r3 + 2), g3 = 0, p3 = d3 + 1, y3++, m3 = "";
        } else ;
        break;
      }
      return n3.text = t3, n3.fontSize = r3, n3;
    }, F2 = function(t3, e3, n3) {
      var r3 = A2.internal.getFont(e3.fontName, e3.fontStyle), i3 = A2.getStringUnitWidth(t3, { font: r3, fontSize: parseFloat(n3), charSpace: 0 }) * parseFloat(n3);
      return { height: A2.getStringUnitWidth("3", { font: r3, fontSize: parseFloat(n3), charSpace: 0 }) * parseFloat(n3) * 1.5, width: i3 };
    }, u2 = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: false, internal: null, isInitialized: false }, p2 = function() {
      A2.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
      var t3 = A2.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
      for (var e3 in t3) if (t3.hasOwnProperty(e3)) {
        var n3 = t3[e3];
        n3.objId = void 0, n3.hasAnnotation && d2.call(A2, n3);
      }
    }, d2 = function(t3) {
      var e3 = { type: "reference", object: t3 };
      void 0 === A2.internal.getPageInfo(t3.page).pageContext.annotations.find(function(t4) {
        return t4.type === e3.type && t4.object === e3.object;
      }) && A2.internal.getPageInfo(t3.page).pageContext.annotations.push(e3);
    }, g2 = function() {
      if (void 0 === A2.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
      A2.internal.write("/AcroForm " + A2.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
    }, m2 = function() {
      A2.internal.events.unsubscribe(A2.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete A2.internal.acroformPlugin.acroFormDictionaryRoot._eventID, A2.internal.acroformPlugin.printedOut = true;
    }, L2 = function(t3) {
      var e3 = !t3;
      t3 || (A2.internal.newObjectDeferredBegin(A2.internal.acroformPlugin.acroFormDictionaryRoot.objId, true), A2.internal.acroformPlugin.acroFormDictionaryRoot.putStream());
      t3 = t3 || A2.internal.acroformPlugin.acroFormDictionaryRoot.Kids;
      for (var n3 in t3) if (t3.hasOwnProperty(n3)) {
        var r3 = t3[n3], i3 = [], o3 = r3.Rect;
        if (r3.Rect && (r3.Rect = c2.call(this, r3.Rect)), A2.internal.newObjectDeferredBegin(r3.objId, true), r3.DA = Y2.createDefaultAppearanceStream(r3), "object" === se(r3) && "function" == typeof r3.getKeyValueListForStream && (i3 = r3.getKeyValueListForStream()), r3.Rect = o3, r3.hasAppearanceStream && !r3.appearanceStreamContent) {
          var a3 = f2.call(this, r3);
          i3.push({ key: "AP", value: "<</N " + a3 + ">>" }), A2.internal.acroformPlugin.xForms.push(a3);
        }
        if (r3.appearanceStreamContent) {
          var s3 = "";
          for (var l3 in r3.appearanceStreamContent) if (r3.appearanceStreamContent.hasOwnProperty(l3)) {
            var h3 = r3.appearanceStreamContent[l3];
            if (s3 += "/" + l3 + " ", s3 += "<<", 1 <= Object.keys(h3).length || Array.isArray(h3)) for (var n3 in h3) {
              var u3;
              if (h3.hasOwnProperty(n3)) "function" == typeof (u3 = h3[n3]) && (u3 = u3.call(this, r3)), s3 += "/" + n3 + " " + u3 + " ", 0 <= A2.internal.acroformPlugin.xForms.indexOf(u3) || A2.internal.acroformPlugin.xForms.push(u3);
            }
            else "function" == typeof (u3 = h3) && (u3 = u3.call(this, r3)), s3 += "/" + n3 + " " + u3, 0 <= A2.internal.acroformPlugin.xForms.indexOf(u3) || A2.internal.acroformPlugin.xForms.push(u3);
            s3 += ">>";
          }
          i3.push({ key: "AP", value: "<<\n" + s3 + ">>" });
        }
        A2.internal.putStream({ additionalKeyValues: i3 }), A2.internal.out("endobj");
      }
      e3 && P2.call(this, A2.internal.acroformPlugin.xForms);
    }, P2 = function(t3) {
      for (var e3 in t3) if (t3.hasOwnProperty(e3)) {
        var n3 = e3, r3 = t3[e3];
        A2.internal.newObjectDeferredBegin(r3 && r3.objId, true), "object" === se(r3) && "function" == typeof r3.putStream && r3.putStream(), delete t3[n3];
      }
    }, k2 = function() {
      if (void 0 !== this.internal && (void 0 === this.internal.acroformPlugin || false === this.internal.acroformPlugin.isInitialized)) {
        if (A2 = this, M2.FieldNum = 0, this.internal.acroformPlugin = JSON.parse(JSON.stringify(u2)), this.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
        n2 = A2.internal.scaleFactor, A2.internal.acroformPlugin.acroFormDictionaryRoot = new E2(), A2.internal.acroformPlugin.acroFormDictionaryRoot._eventID = A2.internal.events.subscribe("postPutResources", m2), A2.internal.events.subscribe("buildDocument", p2), A2.internal.events.subscribe("putCatalog", g2), A2.internal.events.subscribe("postPutPages", L2), A2.internal.acroformPlugin.isInitialized = true;
      }
    }, I2 = t2.__acroform__.arrayToPdfArray = function(t3) {
      if (Array.isArray(t3)) {
        for (var e3 = "[", n3 = 0; n3 < t3.length; n3++) switch (0 !== n3 && (e3 += " "), se(t3[n3])) {
          case "boolean":
          case "number":
          case "object":
            e3 += t3[n3].toString();
            break;
          case "string":
            "/" !== t3[n3].substr(0, 1) ? e3 += "(" + S2(t3[n3].toString()) + ")" : e3 += t3[n3].toString();
        }
        return e3 += "]";
      }
      throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
    };
    var C2 = function(t3) {
      return (t3 = t3 || "").toString(), t3 = "(" + S2(t3) + ")";
    }, B2 = function() {
      var e3;
      Object.defineProperty(this, "objId", { configurable: true, get: function() {
        if (e3 || (e3 = A2.internal.newObjectDeferred()), !e3) throw new Error("AcroFormPDFObject: Couldn't create Object ID");
        return e3;
      }, set: function(t3) {
        e3 = t3;
      } });
    };
    B2.prototype.toString = function() {
      return this.objId + " 0 R";
    }, B2.prototype.putStream = function() {
      var t3 = this.getKeyValueListForStream();
      A2.internal.putStream({ data: this.stream, additionalKeyValues: t3 }), A2.internal.out("endobj");
    }, B2.prototype.getKeyValueListForStream = function() {
      return (function(t3) {
        var e3 = [], n3 = Object.getOwnPropertyNames(t3).filter(function(t4) {
          return "content" != t4 && "appearanceStreamContent" != t4 && "_" != t4.substring(0, 1);
        });
        for (var r3 in n3) if (false === Object.getOwnPropertyDescriptor(t3, n3[r3]).configurable) {
          var i3 = n3[r3], o3 = t3[i3];
          o3 && (Array.isArray(o3) ? e3.push({ key: i3, value: I2(o3) }) : o3 instanceof B2 ? e3.push({ key: i3, value: o3.objId + " 0 R" }) : "function" != typeof o3 && e3.push({ key: i3, value: o3 }));
        }
        return e3;
      })(this);
    };
    var j2 = function() {
      B2.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: false, writeable: true }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: false, writeable: true }), Object.defineProperty(this, "FormType", { value: 1, configurable: false, writeable: true });
      var e3, n3 = [];
      Object.defineProperty(this, "BBox", { configurable: false, writeable: true, get: function() {
        return n3;
      }, set: function(t3) {
        n3 = t3;
      } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: false, writeable: true }), Object.defineProperty(this, "stream", { enumerable: false, configurable: true, set: function(t3) {
        e3 = t3.trim();
      }, get: function() {
        return e3 || null;
      } });
    };
    r2(j2, B2);
    var E2 = function() {
      B2.call(this);
      var e3, t3 = [];
      Object.defineProperty(this, "Kids", { enumerable: false, configurable: true, get: function() {
        return 0 < t3.length ? t3 : void 0;
      } }), Object.defineProperty(this, "Fields", { enumerable: false, configurable: false, get: function() {
        return t3;
      } }), Object.defineProperty(this, "DA", { enumerable: false, configurable: false, get: function() {
        if (e3) return "(" + e3 + ")";
      }, set: function(t4) {
        e3 = t4;
      } });
    };
    r2(E2, B2);
    var M2 = function t3() {
      B2.call(this);
      var e3 = 4;
      Object.defineProperty(this, "F", { enumerable: false, configurable: false, get: function() {
        return e3;
      }, set: function(t4) {
        if (isNaN(t4)) throw new Error('Invalid value "' + t4 + '" for attribute F supplied.');
        e3 = t4;
      } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(e3, 3));
      }, set: function(t4) {
        true === Boolean(t4) ? this.F = x2(e3, 3) : this.F = N2(e3, 3);
      } });
      var n3 = 0;
      Object.defineProperty(this, "Ff", { enumerable: false, configurable: false, get: function() {
        return n3;
      }, set: function(t4) {
        if (isNaN(t4)) throw new Error('Invalid value "' + t4 + '" for attribute Ff supplied.');
        n3 = t4;
      } });
      var r3 = [];
      Object.defineProperty(this, "Rect", { enumerable: false, configurable: false, get: function() {
        if (0 !== r3.length) return r3;
      }, set: function(t4) {
        r3 = void 0 !== t4 ? t4 : [];
      } }), Object.defineProperty(this, "x", { enumerable: true, configurable: true, get: function() {
        return !r3 || isNaN(r3[0]) ? 0 : w2(r3[0]);
      }, set: function(t4) {
        r3[0] = v2(t4);
      } }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, get: function() {
        return !r3 || isNaN(r3[1]) ? 0 : w2(r3[1]);
      }, set: function(t4) {
        r3[1] = v2(t4);
      } }), Object.defineProperty(this, "width", { enumerable: true, configurable: true, get: function() {
        return !r3 || isNaN(r3[2]) ? 0 : w2(r3[2]);
      }, set: function(t4) {
        r3[2] = v2(t4);
      } }), Object.defineProperty(this, "height", { enumerable: true, configurable: true, get: function() {
        return !r3 || isNaN(r3[3]) ? 0 : w2(r3[3]);
      }, set: function(t4) {
        r3[3] = v2(t4);
      } });
      var i3 = "";
      Object.defineProperty(this, "FT", { enumerable: true, configurable: false, get: function() {
        return i3;
      }, set: function(t4) {
        switch (t4) {
          case "/Btn":
          case "/Tx":
          case "/Ch":
          case "/Sig":
            i3 = t4;
            break;
          default:
            throw new Error('Invalid value "' + t4 + '" for attribute FT supplied.');
        }
      } });
      var o3 = null;
      Object.defineProperty(this, "T", { enumerable: true, configurable: false, get: function() {
        if (!o3 || o3.length < 1) {
          if (this instanceof H2) return;
          o3 = "FieldObject" + t3.FieldNum++;
        }
        return "(" + S2(o3) + ")";
      }, set: function(t4) {
        o3 = t4.toString();
      } }), Object.defineProperty(this, "fieldName", { configurable: true, enumerable: true, get: function() {
        return o3;
      }, set: function(t4) {
        o3 = t4;
      } });
      var a3 = "helvetica";
      Object.defineProperty(this, "fontName", { enumerable: true, configurable: true, get: function() {
        return a3;
      }, set: function(t4) {
        a3 = t4;
      } });
      var s3 = "normal";
      Object.defineProperty(this, "fontStyle", { enumerable: true, configurable: true, get: function() {
        return s3;
      }, set: function(t4) {
        s3 = t4;
      } });
      var l3 = 0;
      Object.defineProperty(this, "fontSize", { enumerable: true, configurable: true, get: function() {
        return w2(l3);
      }, set: function(t4) {
        l3 = v2(t4);
      } });
      var h3 = 50;
      Object.defineProperty(this, "maxFontSize", { enumerable: true, configurable: true, get: function() {
        return w2(h3);
      }, set: function(t4) {
        h3 = v2(t4);
      } });
      var u3 = "black";
      Object.defineProperty(this, "color", { enumerable: true, configurable: true, get: function() {
        return u3;
      }, set: function(t4) {
        u3 = t4;
      } });
      var c3 = "/F1 0 Tf 0 g";
      Object.defineProperty(this, "DA", { enumerable: true, configurable: false, get: function() {
        if (!(!c3 || this instanceof H2 || this instanceof V2)) return C2(c3);
      }, set: function(t4) {
        t4 = t4.toString(), c3 = t4;
      } });
      var f3 = null;
      Object.defineProperty(this, "DV", { enumerable: false, configurable: false, get: function() {
        if (f3) return this instanceof D2 == false ? C2(f3) : f3;
      }, set: function(t4) {
        t4 = t4.toString(), f3 = this instanceof D2 == false ? "(" === t4.substr(0, 1) ? y2(t4.substr(1, t4.length - 2)) : y2(t4) : t4;
      } }), Object.defineProperty(this, "defaultValue", { enumerable: true, configurable: true, get: function() {
        return this instanceof D2 == true ? y2(f3.substr(1, f3.length - 1)) : f3;
      }, set: function(t4) {
        t4 = t4.toString(), f3 = this instanceof D2 == true ? "/" + t4 : t4;
      } });
      var p3 = null;
      Object.defineProperty(this, "V", { enumerable: false, configurable: false, get: function() {
        if (p3) return this instanceof D2 == false ? C2(p3) : p3;
      }, set: function(t4) {
        t4 = t4.toString(), p3 = this instanceof D2 == false ? "(" === t4.substr(0, 1) ? y2(t4.substr(1, t4.length - 2)) : y2(t4) : t4;
      } }), Object.defineProperty(this, "value", { enumerable: true, configurable: true, get: function() {
        return this instanceof D2 == true ? y2(p3.substr(1, p3.length - 1)) : p3;
      }, set: function(t4) {
        t4 = t4.toString(), p3 = this instanceof D2 == true ? "/" + t4 : t4;
      } }), Object.defineProperty(this, "hasAnnotation", { enumerable: true, configurable: true, get: function() {
        return this.Rect;
      } }), Object.defineProperty(this, "Type", { enumerable: true, configurable: false, get: function() {
        return this.hasAnnotation ? "/Annot" : null;
      } }), Object.defineProperty(this, "Subtype", { enumerable: true, configurable: false, get: function() {
        return this.hasAnnotation ? "/Widget" : null;
      } });
      var d3, g3 = false;
      Object.defineProperty(this, "hasAppearanceStream", { enumerable: true, configurable: true, writeable: true, get: function() {
        return g3;
      }, set: function(t4) {
        t4 = Boolean(t4), g3 = t4;
      } }), Object.defineProperty(this, "page", { enumerable: true, configurable: true, writeable: true, get: function() {
        if (d3) return d3;
      }, set: function(t4) {
        d3 = t4;
      } }), Object.defineProperty(this, "readOnly", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 1));
      }, set: function(t4) {
        true === Boolean(t4) ? this.Ff = x2(this.Ff, 1) : this.Ff = N2(this.Ff, 1);
      } }), Object.defineProperty(this, "required", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 2));
      }, set: function(t4) {
        true === Boolean(t4) ? this.Ff = x2(this.Ff, 2) : this.Ff = N2(this.Ff, 2);
      } }), Object.defineProperty(this, "noExport", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 3));
      }, set: function(t4) {
        true === Boolean(t4) ? this.Ff = x2(this.Ff, 3) : this.Ff = N2(this.Ff, 3);
      } });
      var m3 = null;
      Object.defineProperty(this, "Q", { enumerable: true, configurable: false, get: function() {
        if (null !== m3) return m3;
      }, set: function(t4) {
        if (-1 === [0, 1, 2].indexOf(t4)) throw new Error('Invalid value "' + t4 + '" for attribute Q supplied.');
        m3 = t4;
      } }), Object.defineProperty(this, "textAlign", { get: function() {
        var t4 = "left";
        switch (m3) {
          case 0:
          default:
            t4 = "left";
            break;
          case 1:
            t4 = "center";
            break;
          case 2:
            t4 = "right";
        }
        return t4;
      }, configurable: true, enumerable: true, set: function(t4) {
        switch (t4) {
          case "right":
          case 2:
            m3 = 2;
            break;
          case "center":
          case 1:
            m3 = 1;
            break;
          case "left":
          case 0:
          default:
            m3 = 0;
        }
      } });
    };
    r2(M2, B2);
    var O2 = function() {
      M2.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
      var e3 = 0;
      Object.defineProperty(this, "TI", { enumerable: true, configurable: false, get: function() {
        return e3;
      }, set: function(t3) {
        e3 = t3;
      } }), Object.defineProperty(this, "topIndex", { enumerable: true, configurable: true, get: function() {
        return e3;
      }, set: function(t3) {
        e3 = t3;
      } });
      var r3 = [];
      Object.defineProperty(this, "Opt", { enumerable: true, configurable: false, get: function() {
        return I2(r3);
      }, set: function(t3) {
        var e4, n3;
        n3 = [], "string" == typeof (e4 = t3) && (n3 = (function(t4, e5, n4) {
          n4 || (n4 = 1);
          for (var r4, i3 = []; r4 = e5.exec(t4); ) i3.push(r4[n4]);
          return i3;
        })(e4, /\((.*?)\)/g)), r3 = n3;
      } }), this.getOptions = function() {
        return r3;
      }, this.setOptions = function(t3) {
        r3 = t3, this.sort && r3.sort();
      }, this.addOption = function(t3) {
        t3 = (t3 = t3 || "").toString(), r3.push(t3), this.sort && r3.sort();
      }, this.removeOption = function(t3, e4) {
        for (e4 = e4 || false, t3 = (t3 = t3 || "").toString(); -1 !== r3.indexOf(t3) && (r3.splice(r3.indexOf(t3), 1), false !== e4); ) ;
      }, Object.defineProperty(this, "combo", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 18));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 18) : this.Ff = N2(this.Ff, 18);
      } }), Object.defineProperty(this, "edit", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 19));
      }, set: function(t3) {
        true === this.combo && (true === Boolean(t3) ? this.Ff = x2(this.Ff, 19) : this.Ff = N2(this.Ff, 19));
      } }), Object.defineProperty(this, "sort", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 20));
      }, set: function(t3) {
        true === Boolean(t3) ? (this.Ff = x2(this.Ff, 20), r3.sort()) : this.Ff = N2(this.Ff, 20);
      } }), Object.defineProperty(this, "multiSelect", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 22));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 22) : this.Ff = N2(this.Ff, 22);
      } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 23));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 23) : this.Ff = N2(this.Ff, 23);
      } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 27));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 27) : this.Ff = N2(this.Ff, 27);
      } }), this.hasAppearanceStream = false;
    };
    r2(O2, M2);
    var q2 = function() {
      O2.call(this), this.fontName = "helvetica", this.combo = false;
    };
    r2(q2, O2);
    var T2 = function() {
      q2.call(this), this.combo = true;
    };
    r2(T2, q2);
    var R2 = function() {
      T2.call(this), this.edit = true;
    };
    r2(R2, T2);
    var D2 = function() {
      M2.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 15));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 15) : this.Ff = N2(this.Ff, 15);
      } }), Object.defineProperty(this, "radio", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 16));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 16) : this.Ff = N2(this.Ff, 16);
      } }), Object.defineProperty(this, "pushButton", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 17));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 17) : this.Ff = N2(this.Ff, 17);
      } }), Object.defineProperty(this, "radioIsUnison", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 26));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 26) : this.Ff = N2(this.Ff, 26);
      } });
      var e3, n3 = {};
      Object.defineProperty(this, "MK", { enumerable: false, configurable: false, get: function() {
        if (0 !== Object.keys(n3).length) {
          var t3, e4 = [];
          for (t3 in e4.push("<<"), n3) e4.push("/" + t3 + " (" + n3[t3] + ")");
          return e4.push(">>"), e4.join("\n");
        }
      }, set: function(t3) {
        "object" === se(t3) && (n3 = t3);
      } }), Object.defineProperty(this, "caption", { enumerable: true, configurable: true, get: function() {
        return n3.CA || "";
      }, set: function(t3) {
        "string" == typeof t3 && (n3.CA = t3);
      } }), Object.defineProperty(this, "AS", { enumerable: false, configurable: false, get: function() {
        return e3;
      }, set: function(t3) {
        e3 = t3;
      } }), Object.defineProperty(this, "appearanceState", { enumerable: true, configurable: true, get: function() {
        return e3.substr(1, e3.length - 1);
      }, set: function(t3) {
        e3 = "/" + t3;
      } });
    };
    r2(D2, M2);
    var U2 = function() {
      D2.call(this), this.pushButton = true;
    };
    r2(U2, D2);
    var z2 = function() {
      D2.call(this), this.radio = true, this.pushButton = false;
      var e3 = [];
      Object.defineProperty(this, "Kids", { enumerable: true, configurable: false, get: function() {
        return e3;
      }, set: function(t3) {
        e3 = void 0 !== t3 ? t3 : [];
      } });
    };
    r2(z2, D2);
    var H2 = function() {
      var e3, n3;
      M2.call(this), Object.defineProperty(this, "Parent", { enumerable: false, configurable: false, get: function() {
        return e3;
      }, set: function(t3) {
        e3 = t3;
      } }), Object.defineProperty(this, "optionName", { enumerable: false, configurable: true, get: function() {
        return n3;
      }, set: function(t3) {
        n3 = t3;
      } });
      var r3, i3 = {};
      Object.defineProperty(this, "MK", { enumerable: false, configurable: false, get: function() {
        var t3, e4 = [];
        for (t3 in e4.push("<<"), i3) e4.push("/" + t3 + " (" + i3[t3] + ")");
        return e4.push(">>"), e4.join("\n");
      }, set: function(t3) {
        "object" === se(t3) && (i3 = t3);
      } }), Object.defineProperty(this, "caption", { enumerable: true, configurable: true, get: function() {
        return i3.CA || "";
      }, set: function(t3) {
        "string" == typeof t3 && (i3.CA = t3);
      } }), Object.defineProperty(this, "AS", { enumerable: false, configurable: false, get: function() {
        return r3;
      }, set: function(t3) {
        r3 = t3;
      } }), Object.defineProperty(this, "appearanceState", { enumerable: true, configurable: true, get: function() {
        return r3.substr(1, r3.length - 1);
      }, set: function(t3) {
        r3 = "/" + t3;
      } }), this.optionName = name, this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Y2.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(name);
    };
    r2(H2, M2), z2.prototype.setAppearance = function(t3) {
      if (!("createAppearanceStream" in t3 && "getCA" in t3)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
      for (var e3 in this.Kids) if (this.Kids.hasOwnProperty(e3)) {
        var n3 = this.Kids[e3];
        n3.appearanceStreamContent = t3.createAppearanceStream(n3.optionName), n3.caption = t3.getCA();
      }
    }, z2.prototype.createOption = function(t3) {
      this.Kids.length;
      var e3 = new H2();
      return e3.Parent = this, e3.optionName = t3, this.Kids.push(e3), J2.call(this, e3), e3;
    };
    var W2 = function() {
      D2.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Y2.CheckBox.createAppearanceStream();
    };
    r2(W2, D2);
    var V2 = function() {
      M2.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 13));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 13) : this.Ff = N2(this.Ff, 13);
      } }), Object.defineProperty(this, "fileSelect", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 21));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 21) : this.Ff = N2(this.Ff, 21);
      } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 23));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 23) : this.Ff = N2(this.Ff, 23);
      } }), Object.defineProperty(this, "doNotScroll", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 24));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 24) : this.Ff = N2(this.Ff, 24);
      } }), Object.defineProperty(this, "comb", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 25));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 25) : this.Ff = N2(this.Ff, 25);
      } }), Object.defineProperty(this, "richText", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 26));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 26) : this.Ff = N2(this.Ff, 26);
      } });
      var e3 = null;
      Object.defineProperty(this, "MaxLen", { enumerable: true, configurable: false, get: function() {
        return e3;
      }, set: function(t3) {
        e3 = t3;
      } }), Object.defineProperty(this, "maxLength", { enumerable: true, configurable: true, get: function() {
        return e3;
      }, set: function(t3) {
        Number.isInteger(t3) && (e3 = t3);
      } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: true, configurable: true, get: function() {
        return this.V || this.DV;
      } });
    };
    r2(V2, M2);
    var G2 = function() {
      V2.call(this), Object.defineProperty(this, "password", { enumerable: true, configurable: true, get: function() {
        return Boolean(b2(this.Ff, 14));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = x2(this.Ff, 14) : this.Ff = N2(this.Ff, 14);
      } }), this.password = true;
    };
    r2(G2, V2);
    var Y2 = { CheckBox: { createAppearanceStream: function() {
      return { N: { On: Y2.CheckBox.YesNormal }, D: { On: Y2.CheckBox.YesPushDown, Off: Y2.CheckBox.OffPushDown } };
    }, YesPushDown: function(t3) {
      var e3 = l2(t3), n3 = [], r3 = A2.internal.getFont(t3.fontName, t3.fontStyle).id, i3 = A2.__private__.encodeColorString(t3.color), o3 = h2(t3, t3.caption);
      return n3.push("0.749023 g"), n3.push("0 0 " + _2(Y2.internal.getWidth(t3)) + " " + _2(Y2.internal.getHeight(t3)) + " re"), n3.push("f"), n3.push("BMC"), n3.push("q"), n3.push("0 0 1 rg"), n3.push("/" + r3 + " " + _2(o3.fontSize) + " Tf " + i3), n3.push("BT"), n3.push(o3.text), n3.push("ET"), n3.push("Q"), n3.push("EMC"), e3.stream = n3.join("\n"), e3;
    }, YesNormal: function(t3) {
      var e3 = l2(t3), n3 = A2.internal.getFont(t3.fontName, t3.fontStyle).id, r3 = A2.__private__.encodeColorString(t3.color), i3 = [], o3 = Y2.internal.getHeight(t3), a3 = Y2.internal.getWidth(t3), s3 = h2(t3, t3.caption);
      return i3.push("1 g"), i3.push("0 0 " + _2(a3) + " " + _2(o3) + " re"), i3.push("f"), i3.push("q"), i3.push("0 0 1 rg"), i3.push("0 0 " + _2(a3 - 1) + " " + _2(o3 - 1) + " re"), i3.push("W"), i3.push("n"), i3.push("0 g"), i3.push("BT"), i3.push("/" + n3 + " " + _2(s3.fontSize) + " Tf " + r3), i3.push(s3.text), i3.push("ET"), i3.push("Q"), e3.stream = i3.join("\n"), e3;
    }, OffPushDown: function(t3) {
      var e3 = l2(t3), n3 = [];
      return n3.push("0.749023 g"), n3.push("0 0 " + _2(Y2.internal.getWidth(t3)) + " " + _2(Y2.internal.getHeight(t3)) + " re"), n3.push("f"), e3.stream = n3.join("\n"), e3;
    } }, RadioButton: { Circle: { createAppearanceStream: function(t3) {
      var e3 = { D: { Off: Y2.RadioButton.Circle.OffPushDown }, N: {} };
      return e3.N[t3] = Y2.RadioButton.Circle.YesNormal, e3.D[t3] = Y2.RadioButton.Circle.YesPushDown, e3;
    }, getCA: function() {
      return "l";
    }, YesNormal: function(t3) {
      var e3 = l2(t3), n3 = [], r3 = Y2.internal.getWidth(t3) <= Y2.internal.getHeight(t3) ? Y2.internal.getWidth(t3) / 4 : Y2.internal.getHeight(t3) / 4;
      r3 = Number((0.9 * r3).toFixed(5));
      var i3 = Y2.internal.Bezier_C, o3 = Number((r3 * i3).toFixed(5));
      return n3.push("q"), n3.push("1 0 0 1 " + s2(Y2.internal.getWidth(t3) / 2) + " " + s2(Y2.internal.getHeight(t3) / 2) + " cm"), n3.push(r3 + " 0 m"), n3.push(r3 + " " + o3 + " " + o3 + " " + r3 + " 0 " + r3 + " c"), n3.push("-" + o3 + " " + r3 + " -" + r3 + " " + o3 + " -" + r3 + " 0 c"), n3.push("-" + r3 + " -" + o3 + " -" + o3 + " -" + r3 + " 0 -" + r3 + " c"), n3.push(o3 + " -" + r3 + " " + r3 + " -" + o3 + " " + r3 + " 0 c"), n3.push("f"), n3.push("Q"), e3.stream = n3.join("\n"), e3;
    }, YesPushDown: function(t3) {
      var e3 = l2(t3), n3 = [], r3 = Y2.internal.getWidth(t3) <= Y2.internal.getHeight(t3) ? Y2.internal.getWidth(t3) / 4 : Y2.internal.getHeight(t3) / 4, i3 = (r3 = Number((0.9 * r3).toFixed(5)), Number((2 * r3).toFixed(5))), o3 = Number((i3 * Y2.internal.Bezier_C).toFixed(5)), a3 = Number((r3 * Y2.internal.Bezier_C).toFixed(5));
      return n3.push("0.749023 g"), n3.push("q"), n3.push("1 0 0 1 " + s2(Y2.internal.getWidth(t3) / 2) + " " + s2(Y2.internal.getHeight(t3) / 2) + " cm"), n3.push(i3 + " 0 m"), n3.push(i3 + " " + o3 + " " + o3 + " " + i3 + " 0 " + i3 + " c"), n3.push("-" + o3 + " " + i3 + " -" + i3 + " " + o3 + " -" + i3 + " 0 c"), n3.push("-" + i3 + " -" + o3 + " -" + o3 + " -" + i3 + " 0 -" + i3 + " c"), n3.push(o3 + " -" + i3 + " " + i3 + " -" + o3 + " " + i3 + " 0 c"), n3.push("f"), n3.push("Q"), n3.push("0 g"), n3.push("q"), n3.push("1 0 0 1 " + s2(Y2.internal.getWidth(t3) / 2) + " " + s2(Y2.internal.getHeight(t3) / 2) + " cm"), n3.push(r3 + " 0 m"), n3.push(r3 + " " + a3 + " " + a3 + " " + r3 + " 0 " + r3 + " c"), n3.push("-" + a3 + " " + r3 + " -" + r3 + " " + a3 + " -" + r3 + " 0 c"), n3.push("-" + r3 + " -" + a3 + " -" + a3 + " -" + r3 + " 0 -" + r3 + " c"), n3.push(a3 + " -" + r3 + " " + r3 + " -" + a3 + " " + r3 + " 0 c"), n3.push("f"), n3.push("Q"), e3.stream = n3.join("\n"), e3;
    }, OffPushDown: function(t3) {
      var e3 = l2(t3), n3 = [], r3 = Y2.internal.getWidth(t3) <= Y2.internal.getHeight(t3) ? Y2.internal.getWidth(t3) / 4 : Y2.internal.getHeight(t3) / 4, i3 = (r3 = Number((0.9 * r3).toFixed(5)), Number((2 * r3).toFixed(5))), o3 = Number((i3 * Y2.internal.Bezier_C).toFixed(5));
      return n3.push("0.749023 g"), n3.push("q"), n3.push("1 0 0 1 " + s2(Y2.internal.getWidth(t3) / 2) + " " + s2(Y2.internal.getHeight(t3) / 2) + " cm"), n3.push(i3 + " 0 m"), n3.push(i3 + " " + o3 + " " + o3 + " " + i3 + " 0 " + i3 + " c"), n3.push("-" + o3 + " " + i3 + " -" + i3 + " " + o3 + " -" + i3 + " 0 c"), n3.push("-" + i3 + " -" + o3 + " -" + o3 + " -" + i3 + " 0 -" + i3 + " c"), n3.push(o3 + " -" + i3 + " " + i3 + " -" + o3 + " " + i3 + " 0 c"), n3.push("f"), n3.push("Q"), e3.stream = n3.join("\n"), e3;
    } }, Cross: { createAppearanceStream: function(t3) {
      var e3 = { D: { Off: Y2.RadioButton.Cross.OffPushDown }, N: {} };
      return e3.N[t3] = Y2.RadioButton.Cross.YesNormal, e3.D[t3] = Y2.RadioButton.Cross.YesPushDown, e3;
    }, getCA: function() {
      return "8";
    }, YesNormal: function(t3) {
      var e3 = l2(t3), n3 = [], r3 = Y2.internal.calculateCross(t3);
      return n3.push("q"), n3.push("1 1 " + _2(Y2.internal.getWidth(t3) - 2) + " " + _2(Y2.internal.getHeight(t3) - 2) + " re"), n3.push("W"), n3.push("n"), n3.push(_2(r3.x1.x) + " " + _2(r3.x1.y) + " m"), n3.push(_2(r3.x2.x) + " " + _2(r3.x2.y) + " l"), n3.push(_2(r3.x4.x) + " " + _2(r3.x4.y) + " m"), n3.push(_2(r3.x3.x) + " " + _2(r3.x3.y) + " l"), n3.push("s"), n3.push("Q"), e3.stream = n3.join("\n"), e3;
    }, YesPushDown: function(t3) {
      var e3 = l2(t3), n3 = Y2.internal.calculateCross(t3), r3 = [];
      return r3.push("0.749023 g"), r3.push("0 0 " + _2(Y2.internal.getWidth(t3)) + " " + _2(Y2.internal.getHeight(t3)) + " re"), r3.push("f"), r3.push("q"), r3.push("1 1 " + _2(Y2.internal.getWidth(t3) - 2) + " " + _2(Y2.internal.getHeight(t3) - 2) + " re"), r3.push("W"), r3.push("n"), r3.push(_2(n3.x1.x) + " " + _2(n3.x1.y) + " m"), r3.push(_2(n3.x2.x) + " " + _2(n3.x2.y) + " l"), r3.push(_2(n3.x4.x) + " " + _2(n3.x4.y) + " m"), r3.push(_2(n3.x3.x) + " " + _2(n3.x3.y) + " l"), r3.push("s"), r3.push("Q"), e3.stream = r3.join("\n"), e3;
    }, OffPushDown: function(t3) {
      var e3 = l2(t3), n3 = [];
      return n3.push("0.749023 g"), n3.push("0 0 " + _2(Y2.internal.getWidth(t3)) + " " + _2(Y2.internal.getHeight(t3)) + " re"), n3.push("f"), e3.stream = n3.join("\n"), e3;
    } } }, createDefaultAppearanceStream: function(t3) {
      var e3 = A2.internal.getFont(t3.fontName, t3.fontStyle).id, n3 = A2.__private__.encodeColorString(t3.color);
      return "/" + e3 + " " + t3.fontSize + " Tf " + n3;
    } };
    Y2.internal = { Bezier_C: 0.551915024494, calculateCross: function(t3) {
      var e3 = Y2.internal.getWidth(t3), n3 = Y2.internal.getHeight(t3), r3 = Math.min(e3, n3);
      return { x1: { x: (e3 - r3) / 2, y: (n3 - r3) / 2 + r3 }, x2: { x: (e3 - r3) / 2 + r3, y: (n3 - r3) / 2 }, x3: { x: (e3 - r3) / 2, y: (n3 - r3) / 2 }, x4: { x: (e3 - r3) / 2 + r3, y: (n3 - r3) / 2 + r3 } };
    } }, Y2.internal.getWidth = function(t3) {
      var e3 = 0;
      return "object" === se(t3) && (e3 = v2(t3.Rect[2])), e3;
    }, Y2.internal.getHeight = function(t3) {
      var e3 = 0;
      return "object" === se(t3) && (e3 = v2(t3.Rect[3])), e3;
    };
    var J2 = t2.addField = function(t3) {
      if (k2.call(this), !(t3 instanceof M2)) throw new Error("Invalid argument passed to jsPDF.addField.");
      return function(t4) {
        A2.internal.acroformPlugin.printedOut && (A2.internal.acroformPlugin.printedOut = false, A2.internal.acroformPlugin.acroFormDictionaryRoot = null), A2.internal.acroformPlugin.acroFormDictionaryRoot || k2.call(A2), A2.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t4);
      }.call(this, t3), t3.page = A2.internal.getCurrentPageInfo().pageNumber, this;
    };
    t2.addButton = function(t3) {
      if (t3 instanceof D2 == false) throw new Error("Invalid argument passed to jsPDF.addButton.");
      return J2.call(this, t3);
    }, t2.addTextField = function(t3) {
      if (t3 instanceof V2 == false) throw new Error("Invalid argument passed to jsPDF.addTextField.");
      return J2.call(this, t3);
    }, t2.addChoiceField = function(t3) {
      if (t3 instanceof O2 == false) throw new Error("Invalid argument passed to jsPDF.addChoiceField.");
      return J2.call(this, t3);
    };
    "object" == se(e2) && void 0 === e2.ChoiceField && void 0 === e2.ListBox && void 0 === e2.ComboBox && void 0 === e2.EditBox && void 0 === e2.Button && void 0 === e2.PushButton && void 0 === e2.RadioButton && void 0 === e2.CheckBox && void 0 === e2.TextField && void 0 === e2.PasswordField ? (e2.ChoiceField = O2, e2.ListBox = q2, e2.ComboBox = T2, e2.EditBox = R2, e2.Button = D2, e2.PushButton = U2, e2.RadioButton = z2, e2.CheckBox = W2, e2.TextField = V2, e2.PasswordField = G2, e2.AcroForm = { Appearance: Y2 }) : console.warn("AcroForm-Classes are not populated into global-namespace, because the class-Names exist already."), t2.AcroFormChoiceField = O2, t2.AcroFormListBox = q2, t2.AcroFormComboBox = T2, t2.AcroFormEditBox = R2, t2.AcroFormButton = D2, t2.AcroFormPushButton = U2, t2.AcroFormRadioButton = z2, t2.AcroFormCheckBox = W2, t2.AcroFormTextField = V2, t2.AcroFormPasswordField = G2, t2.AcroFormAppearance = Y2, t2.AcroForm = { ChoiceField: O2, ListBox: q2, ComboBox: T2, EditBox: R2, Button: D2, PushButton: U2, RadioButton: z2, CheckBox: W2, TextField: V2, PasswordField: G2, Appearance: Y2 };
  })((window.tmp = lt).API, "undefined" != typeof window && window || "undefined" != typeof global && global), /** @license
     * jsPDF addImage plugin
     * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
     *               2013 Chris Dowling, https://github.com/gingerchris
     *               2013 Trinh Ho, https://github.com/ineedfat
     *               2013 Edwin Alejandro Perez, https://github.com/eaparango
     *               2013 Norah Smith, https://github.com/burnburnrocket
     *               2014 Diego Casorran, https://github.com/diegocr
     *               2014 James Robb, https://github.com/jamesbrobb
     *
     * 
     */
  (function(x2) {
    var N2 = "addImage_", l2 = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, h2 = x2.getImageFileTypeByImageData = function(t2, e2) {
      var n3, r2;
      e2 = e2 || "UNKNOWN";
      var i2, o2, a2, s2 = "UNKNOWN";
      for (a2 in x2.isArrayBufferView(t2) && (t2 = x2.arrayBufferToBinaryString(t2)), l2) for (i2 = l2[a2], n3 = 0; n3 < i2.length; n3 += 1) {
        for (o2 = true, r2 = 0; r2 < i2[n3].length; r2 += 1) if (void 0 !== i2[n3][r2] && i2[n3][r2] !== t2.charCodeAt(r2)) {
          o2 = false;
          break;
        }
        if (true === o2) {
          s2 = a2;
          break;
        }
      }
      return "UNKNOWN" === s2 && "UNKNOWN" !== e2 && (console.warn('FileType of Image not recognized. Processing image as "' + e2 + '".'), s2 = e2), s2;
    }, n2 = function t2(e2) {
      for (var n3 = this.internal.newObject(), r2 = this.internal.write, i2 = this.internal.putStream, o2 = (0, this.internal.getFilters)(); -1 !== o2.indexOf("FlateEncode"); ) o2.splice(o2.indexOf("FlateEncode"), 1);
      e2.n = n3;
      var a2 = [];
      if (a2.push({ key: "Type", value: "/XObject" }), a2.push({ key: "Subtype", value: "/Image" }), a2.push({ key: "Width", value: e2.w }), a2.push({ key: "Height", value: e2.h }), e2.cs === this.color_spaces.INDEXED ? a2.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (e2.pal.length / 3 - 1) + " " + ("smask" in e2 ? n3 + 2 : n3 + 1) + " 0 R]" }) : (a2.push({ key: "ColorSpace", value: "/" + e2.cs }), e2.cs === this.color_spaces.DEVICE_CMYK && a2.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), a2.push({ key: "BitsPerComponent", value: e2.bpc }), "dp" in e2 && a2.push({ key: "DecodeParms", value: "<<" + e2.dp + ">>" }), "trns" in e2 && e2.trns.constructor == Array) {
        for (var s2 = "", l3 = 0, h3 = e2.trns.length; l3 < h3; l3++) s2 += e2.trns[l3] + " " + e2.trns[l3] + " ";
        a2.push({ key: "Mask", value: "[" + s2 + "]" });
      }
      "smask" in e2 && a2.push({ key: "SMask", value: n3 + 1 + " 0 R" });
      var u3 = void 0 !== e2.f ? ["/" + e2.f] : void 0;
      if (i2({ data: e2.data, additionalKeyValues: a2, alreadyAppliedFilters: u3 }), r2("endobj"), "smask" in e2) {
        var c2 = "/Predictor " + e2.p + " /Colors 1 /BitsPerComponent " + e2.bpc + " /Columns " + e2.w, f2 = { w: e2.w, h: e2.h, cs: "DeviceGray", bpc: e2.bpc, dp: c2, data: e2.smask };
        "f" in e2 && (f2.f = e2.f), t2.call(this, f2);
      }
      e2.cs === this.color_spaces.INDEXED && (this.internal.newObject(), i2({ data: this.arrayBufferToBinaryString(new Uint8Array(e2.pal)) }), r2("endobj"));
    }, L2 = function() {
      var t2 = this.internal.collections[N2 + "images"];
      for (var e2 in t2) n2.call(this, t2[e2]);
    }, A2 = function() {
      var t2, e2 = this.internal.collections[N2 + "images"], n3 = this.internal.write;
      for (var r2 in e2) n3("/I" + (t2 = e2[r2]).i, t2.n, "0", "R");
    }, S2 = function(t2) {
      return "function" == typeof x2["process" + t2.toUpperCase()];
    }, _2 = function(t2) {
      return "object" === se(t2) && 1 === t2.nodeType;
    }, F2 = function(t2, e2) {
      if ("IMG" === t2.nodeName && t2.hasAttribute("src")) {
        var n3 = "" + t2.getAttribute("src");
        if (0 === n3.indexOf("data:image/")) return unescape(n3);
        var r2 = x2.loadFile(n3);
        if (void 0 !== r2) return btoa(r2);
      }
      if ("CANVAS" === t2.nodeName) {
        var i2 = t2;
        return t2.toDataURL("image/jpeg", 1);
      }
      (i2 = document.createElement("canvas")).width = t2.clientWidth || t2.width, i2.height = t2.clientHeight || t2.height;
      var o2 = i2.getContext("2d");
      if (!o2) throw "addImage requires canvas to be supported by browser.";
      return o2.drawImage(t2, 0, 0, i2.width, i2.height), i2.toDataURL("png" == ("" + e2).toLowerCase() ? "image/png" : "image/jpeg");
    }, P2 = function(t2, e2) {
      var n3;
      if (e2) {
        for (var r2 in e2) if (t2 === e2[r2].alias) {
          n3 = e2[r2];
          break;
        }
      }
      return n3;
    };
    x2.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" }, x2.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" }, x2.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, x2.sHashCode = function(t2) {
      var e2, n3 = 0;
      if (0 === (t2 = t2 || "").length) return n3;
      for (e2 = 0; e2 < t2.length; e2++) n3 = (n3 << 5) - n3 + t2.charCodeAt(e2), n3 |= 0;
      return n3;
    }, x2.isString = function(t2) {
      return "string" == typeof t2;
    }, x2.validateStringAsBase64 = function(t2) {
      (t2 = t2 || "").toString().trim();
      var e2 = true;
      return 0 === t2.length && (e2 = false), t2.length % 4 != 0 && (e2 = false), false === /^[A-Za-z0-9+\/]+$/.test(t2.substr(0, t2.length - 2)) && (e2 = false), false === /^[A-Za-z0-9\/][A-Za-z0-9+\/]|[A-Za-z0-9+\/]=|==$/.test(t2.substr(-2)) && (e2 = false), e2;
    }, x2.extractInfoFromBase64DataURI = function(t2) {
      return /^data:([\w]+?\/([\w]+?));\S*;*base64,(.+)$/g.exec(t2);
    }, x2.extractImageFromDataUrl = function(t2) {
      var e2 = (t2 = t2 || "").split("base64,"), n3 = null;
      if (2 === e2.length) {
        var r2 = /^data:(\w*\/\w*);*(charset=[\w=-]*)*;*$/.exec(e2[0]);
        Array.isArray(r2) && (n3 = { mimeType: r2[1], charset: r2[2], data: e2[1] });
      }
      return n3;
    }, x2.supportsArrayBuffer = function() {
      return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array;
    }, x2.isArrayBuffer = function(t2) {
      return !!this.supportsArrayBuffer() && t2 instanceof ArrayBuffer;
    }, x2.isArrayBufferView = function(t2) {
      return !!this.supportsArrayBuffer() && ("undefined" != typeof Uint32Array && (t2 instanceof Int8Array || t2 instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t2 instanceof Uint8ClampedArray || t2 instanceof Int16Array || t2 instanceof Uint16Array || t2 instanceof Int32Array || t2 instanceof Uint32Array || t2 instanceof Float32Array || t2 instanceof Float64Array));
    }, x2.binaryStringToUint8Array = function(t2) {
      for (var e2 = t2.length, n3 = new Uint8Array(e2), r2 = 0; r2 < e2; r2++) n3[r2] = t2.charCodeAt(r2);
      return n3;
    }, x2.arrayBufferToBinaryString = function(t2) {
      if ("function" == typeof atob) return atob(this.arrayBufferToBase64(t2));
    }, x2.arrayBufferToBase64 = function(t2) {
      for (var e2, n3 = "", r2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i2 = new Uint8Array(t2), o2 = i2.byteLength, a2 = o2 % 3, s2 = o2 - a2, l3 = 0; l3 < s2; l3 += 3) n3 += r2[(16515072 & (e2 = i2[l3] << 16 | i2[l3 + 1] << 8 | i2[l3 + 2])) >> 18] + r2[(258048 & e2) >> 12] + r2[(4032 & e2) >> 6] + r2[63 & e2];
      return 1 == a2 ? n3 += r2[(252 & (e2 = i2[s2])) >> 2] + r2[(3 & e2) << 4] + "==" : 2 == a2 && (n3 += r2[(64512 & (e2 = i2[s2] << 8 | i2[s2 + 1])) >> 10] + r2[(1008 & e2) >> 4] + r2[(15 & e2) << 2] + "="), n3;
    }, x2.createImageInfo = function(t2, e2, n3, r2, i2, o2, a2, s2, l3, h3, u3, c2, f2) {
      var p2 = { alias: s2, w: e2, h: n3, cs: r2, bpc: i2, i: a2, data: t2 };
      return o2 && (p2.f = o2), l3 && (p2.dp = l3), h3 && (p2.trns = h3), u3 && (p2.pal = u3), c2 && (p2.smask = c2), f2 && (p2.p = f2), p2;
    }, x2.addImage = function(t2, e2, n3, r2, i2, o2, a2, s2, l3) {
      var h3 = "";
      if ("string" != typeof e2) {
        var u3 = o2;
        o2 = i2, i2 = r2, r2 = n3, n3 = e2, e2 = u3;
      }
      if ("object" === se(t2) && !_2(t2) && "imageData" in t2) {
        var c2 = t2;
        t2 = c2.imageData, e2 = c2.format || e2 || "UNKNOWN", n3 = c2.x || n3 || 0, r2 = c2.y || r2 || 0, i2 = c2.w || i2, o2 = c2.h || o2, a2 = c2.alias || a2, s2 = c2.compression || s2, l3 = c2.rotation || c2.angle || l3;
      }
      var f2 = this.internal.getFilters();
      if (void 0 === s2 && -1 !== f2.indexOf("FlateEncode") && (s2 = "SLOW"), "string" == typeof t2 && (t2 = unescape(t2)), isNaN(n3) || isNaN(r2)) throw console.error("jsPDF.addImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addImage");
      var p2, d2, g2, m2, y2, v2, w2, b2 = function() {
        var t3 = this.internal.collections[N2 + "images"];
        return t3 || (this.internal.collections[N2 + "images"] = t3 = {}, this.internal.events.subscribe("putResources", L2), this.internal.events.subscribe("putXobjectDict", A2)), t3;
      }.call(this);
      if (!((p2 = P2(t2, b2)) || (_2(t2) && (t2 = F2(t2, e2)), (null == (w2 = a2) || 0 === w2.length) && (a2 = "string" == typeof (v2 = t2) ? x2.sHashCode(v2) : x2.isArrayBufferView(v2) ? x2.sHashCode(x2.arrayBufferToBinaryString(v2)) : null), p2 = P2(a2, b2)))) {
        if (this.isString(t2) && ("" !== (h3 = this.convertStringToImageData(t2)) ? t2 = h3 : void 0 !== (h3 = x2.loadFile(t2)) && (t2 = h3)), e2 = this.getImageFileTypeByImageData(t2, e2), !S2(e2)) throw new Error("addImage does not support files of type '" + e2 + "', please ensure that a plugin for '" + e2 + "' support is added.");
        if (this.supportsArrayBuffer() && (t2 instanceof Uint8Array || (d2 = t2, t2 = this.binaryStringToUint8Array(t2))), !(p2 = this["process" + e2.toUpperCase()](t2, (y2 = 0, (m2 = b2) && (y2 = Object.keys ? Object.keys(m2).length : (function(t3) {
          var e3 = 0;
          for (var n4 in t3) t3.hasOwnProperty(n4) && e3++;
          return e3;
        })(m2)), y2), a2, ((g2 = s2) && "string" == typeof g2 && (g2 = g2.toUpperCase()), g2 in x2.image_compression ? g2 : x2.image_compression.NONE), d2))) throw new Error("An unknown error occurred whilst processing the image");
      }
      return function(t3, e3, n4, r3, i3, o3, a3, s3) {
        var l4 = function(t4, e4, n5) {
          return t4 || e4 || (e4 = t4 = -96), t4 < 0 && (t4 = -1 * n5.w * 72 / t4 / this.internal.scaleFactor), e4 < 0 && (e4 = -1 * n5.h * 72 / e4 / this.internal.scaleFactor), 0 === t4 && (t4 = e4 * n5.w / n5.h), 0 === e4 && (e4 = t4 * n5.h / n5.w), [t4, e4];
        }.call(this, n4, r3, i3), h4 = this.internal.getCoordinateString, u4 = this.internal.getVerticalCoordinateString;
        if (n4 = l4[0], r3 = l4[1], a3[o3] = i3, s3) {
          s3 *= Math.PI / 180;
          var c3 = Math.cos(s3), f3 = Math.sin(s3), p3 = function(t4) {
            return t4.toFixed(4);
          }, d3 = [p3(c3), p3(f3), p3(-1 * f3), p3(c3), 0, 0, "cm"];
        }
        this.internal.write("q"), s3 ? (this.internal.write([1, "0", "0", 1, h4(t3), u4(e3 + r3), "cm"].join(" ")), this.internal.write(d3.join(" ")), this.internal.write([h4(n4), "0", "0", h4(r3), "0", "0", "cm"].join(" "))) : this.internal.write([h4(n4), "0", "0", h4(r3), h4(t3), u4(e3 + r3), "cm"].join(" ")), this.internal.write("/I" + i3.i + " Do"), this.internal.write("Q");
      }.call(this, n3, r2, i2, o2, p2, p2.i, b2, l3), this;
    }, x2.convertStringToImageData = function(t2) {
      var e2, n3 = "";
      if (this.isString(t2)) {
        var r2;
        e2 = null !== (r2 = this.extractImageFromDataUrl(t2)) ? r2.data : t2;
        try {
          n3 = atob(e2);
        } catch (t3) {
          throw x2.validateStringAsBase64(e2) ? new Error("atob-Error in jsPDF.convertStringToImageData " + t3.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertStringToImageData ");
        }
      }
      return n3;
    };
    var u2 = function(t2, e2) {
      return t2.subarray(e2, e2 + 5);
    };
    x2.processJPEG = function(t2, e2, n3, r2, i2, o2) {
      var a2, s2 = this.decode.DCT_DECODE;
      if (!this.isString(t2) && !this.isArrayBuffer(t2) && !this.isArrayBufferView(t2)) return null;
      if (this.isString(t2) && (a2 = (function(t3) {
        var e3;
        if ("JPEG" !== h2(t3)) throw new Error("getJpegSize requires a binary string jpeg file");
        for (var n4 = 256 * t3.charCodeAt(4) + t3.charCodeAt(5), r3 = 4, i3 = t3.length; r3 < i3; ) {
          if (r3 += n4, 255 !== t3.charCodeAt(r3)) throw new Error("getJpegSize could not find the size of the image");
          if (192 === t3.charCodeAt(r3 + 1) || 193 === t3.charCodeAt(r3 + 1) || 194 === t3.charCodeAt(r3 + 1) || 195 === t3.charCodeAt(r3 + 1) || 196 === t3.charCodeAt(r3 + 1) || 197 === t3.charCodeAt(r3 + 1) || 198 === t3.charCodeAt(r3 + 1) || 199 === t3.charCodeAt(r3 + 1)) return e3 = 256 * t3.charCodeAt(r3 + 5) + t3.charCodeAt(r3 + 6), [256 * t3.charCodeAt(r3 + 7) + t3.charCodeAt(r3 + 8), e3, t3.charCodeAt(r3 + 9)];
          r3 += 2, n4 = 256 * t3.charCodeAt(r3) + t3.charCodeAt(r3 + 1);
        }
      })(t2)), this.isArrayBuffer(t2) && (t2 = new Uint8Array(t2)), this.isArrayBufferView(t2) && (a2 = (function(t3) {
        if (65496 != (t3[0] << 8 | t3[1])) throw new Error("Supplied data is not a JPEG");
        for (var e3, n4 = t3.length, r3 = (t3[4] << 8) + t3[5], i3 = 4; i3 < n4; ) {
          if (r3 = ((e3 = u2(t3, i3 += r3))[2] << 8) + e3[3], (192 === e3[1] || 194 === e3[1]) && 255 === e3[0] && 7 < r3) return { width: ((e3 = u2(t3, i3 + 5))[2] << 8) + e3[3], height: (e3[0] << 8) + e3[1], numcomponents: e3[4] };
          i3 += 2;
        }
        throw new Error("getJpegSizeFromBytes could not find the size of the image");
      })(t2), t2 = i2 || this.arrayBufferToBinaryString(t2)), void 0 === o2) switch (a2.numcomponents) {
        case 1:
          o2 = this.color_spaces.DEVICE_GRAY;
          break;
        case 4:
          o2 = this.color_spaces.DEVICE_CMYK;
          break;
        default:
        case 3:
          o2 = this.color_spaces.DEVICE_RGB;
      }
      return this.createImageInfo(t2, a2.width, a2.height, o2, 8, s2, e2, n3);
    }, x2.processJPG = function() {
      return this.processJPEG.apply(this, arguments);
    }, x2.getImageProperties = function(t2) {
      var e2, n3, r2 = "";
      if (_2(t2) && (t2 = F2(t2)), this.isString(t2) && ("" !== (r2 = this.convertStringToImageData(t2)) ? t2 = r2 : void 0 !== (r2 = x2.loadFile(t2)) && (t2 = r2)), n3 = this.getImageFileTypeByImageData(t2), !S2(n3)) throw new Error("addImage does not support files of type '" + n3 + "', please ensure that a plugin for '" + n3 + "' support is added.");
      if (this.supportsArrayBuffer() && (t2 instanceof Uint8Array || (t2 = this.binaryStringToUint8Array(t2))), !(e2 = this["process" + n3.toUpperCase()](t2))) throw new Error("An unknown error occurred whilst processing the image");
      return { fileType: n3, width: e2.w, height: e2.h, colorSpace: e2.cs, compressionMode: e2.f, bitsPerComponent: e2.bpc };
    };
  })(lt.API), /**
     * @license
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
  t = lt.API, lt.API.events.push(["addPage", function(t2) {
    this.internal.getPageInfo(t2.pageNumber).pageContext.annotations = [];
  }]), t.events.push(["putPage", function(t2) {
    for (var e2 = this.internal.getPageInfoByObjId(t2.objId), n2 = t2.pageContext.annotations, r2 = function(t3) {
      if (void 0 !== t3 && "" != t3) return true;
    }, i2 = false, o2 = 0; o2 < n2.length && !i2; o2++) switch ((l2 = n2[o2]).type) {
      case "link":
        if (r2(l2.options.url) || r2(l2.options.pageNumber)) {
          i2 = true;
          break;
        }
      case "reference":
      case "text":
      case "freetext":
        i2 = true;
    }
    if (0 != i2) {
      this.internal.write("/Annots ["), this.internal.pageSize.height;
      var a2 = this.internal.getCoordinateString, s2 = this.internal.getVerticalCoordinateString;
      for (o2 = 0; o2 < n2.length; o2++) {
        var l2;
        switch ((l2 = n2[o2]).type) {
          case "reference":
            this.internal.write(" " + l2.object.objId + " 0 R ");
            break;
          case "text":
            var h2 = this.internal.newAdditionalObject(), u2 = this.internal.newAdditionalObject(), c2 = l2.title || "Note";
            m2 = "<</Type /Annot /Subtype /Text " + (p2 = "/Rect [" + a2(l2.bounds.x) + " " + s2(l2.bounds.y + l2.bounds.h) + " " + a2(l2.bounds.x + l2.bounds.w) + " " + s2(l2.bounds.y) + "] ") + "/Contents (" + l2.contents + ")", m2 += " /Popup " + u2.objId + " 0 R", m2 += " /P " + e2.objId + " 0 R", m2 += " /T (" + c2 + ") >>", h2.content = m2;
            var f2 = h2.objId + " 0 R";
            m2 = "<</Type /Annot /Subtype /Popup " + (p2 = "/Rect [" + a2(l2.bounds.x + 30) + " " + s2(l2.bounds.y + l2.bounds.h) + " " + a2(l2.bounds.x + l2.bounds.w + 30) + " " + s2(l2.bounds.y) + "] ") + " /Parent " + f2, l2.open && (m2 += " /Open true"), m2 += " >>", u2.content = m2, this.internal.write(h2.objId, "0 R", u2.objId, "0 R");
            break;
          case "freetext":
            var p2 = "/Rect [" + a2(l2.bounds.x) + " " + s2(l2.bounds.y) + " " + a2(l2.bounds.x + l2.bounds.w) + " " + s2(l2.bounds.y + l2.bounds.h) + "] ", d2 = l2.color || "#000000";
            m2 = "<</Type /Annot /Subtype /FreeText " + p2 + "/Contents (" + l2.contents + ")", m2 += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + d2 + ")", m2 += " /Border [0 0 0]", m2 += " >>", this.internal.write(m2);
            break;
          case "link":
            if (l2.options.name) {
              var g2 = this.annotations._nameMap[l2.options.name];
              l2.options.pageNumber = g2.page, l2.options.top = g2.y;
            } else l2.options.top || (l2.options.top = 0);
            p2 = "/Rect [" + a2(l2.x) + " " + s2(l2.y) + " " + a2(l2.x + l2.w) + " " + s2(l2.y + l2.h) + "] ";
            var m2 = "";
            if (l2.options.url) m2 = "<</Type /Annot /Subtype /Link " + p2 + "/Border [0 0 0] /A <</S /URI /URI (" + l2.options.url + ") >>";
            else if (l2.options.pageNumber) switch (m2 = "<</Type /Annot /Subtype /Link " + p2 + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(l2.options.pageNumber).objId + " 0 R", l2.options.magFactor = l2.options.magFactor || "XYZ", l2.options.magFactor) {
              case "Fit":
                m2 += " /Fit]";
                break;
              case "FitH":
                m2 += " /FitH " + l2.options.top + "]";
                break;
              case "FitV":
                l2.options.left = l2.options.left || 0, m2 += " /FitV " + l2.options.left + "]";
                break;
              case "XYZ":
              default:
                var y2 = s2(l2.options.top);
                l2.options.left = l2.options.left || 0, void 0 === l2.options.zoom && (l2.options.zoom = 0), m2 += " /XYZ " + l2.options.left + " " + y2 + " " + l2.options.zoom + "]";
            }
            "" != m2 && (m2 += " >>", this.internal.write(m2));
        }
      }
      this.internal.write("]");
    }
  }]), t.createAnnotation = function(t2) {
    var e2 = this.internal.getCurrentPageInfo();
    switch (t2.type) {
      case "link":
        this.link(t2.bounds.x, t2.bounds.y, t2.bounds.w, t2.bounds.h, t2);
        break;
      case "text":
      case "freetext":
        e2.pageContext.annotations.push(t2);
    }
  }, t.link = function(t2, e2, n2, r2, i2) {
    this.internal.getCurrentPageInfo().pageContext.annotations.push({ x: t2, y: e2, w: n2, h: r2, options: i2, type: "link" });
  }, t.textWithLink = function(t2, e2, n2, r2) {
    var i2 = this.getTextWidth(t2), o2 = this.internal.getLineHeight() / this.internal.scaleFactor;
    return this.text(t2, e2, n2), n2 += 0.2 * o2, this.link(e2, n2 - o2, i2, o2, r2), i2;
  }, t.getTextWidth = function(t2) {
    var e2 = this.internal.getFontSize();
    return this.getStringUnitWidth(t2) * e2 / this.internal.scaleFactor;
  }, /**
     * @license
     * Copyright (c) 2017 Aras Abbasi 
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
  (function(t2) {
    var h2 = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, a2 = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, e2 = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, n2 = [1570, 1571, 1573, 1575];
    t2.__arabicParser__ = {};
    var r2 = t2.__arabicParser__.isInArabicSubstitutionA = function(t3) {
      return void 0 !== h2[t3.charCodeAt(0)];
    }, u2 = t2.__arabicParser__.isArabicLetter = function(t3) {
      return "string" == typeof t3 && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t3);
    }, i2 = t2.__arabicParser__.isArabicEndLetter = function(t3) {
      return u2(t3) && r2(t3) && h2[t3.charCodeAt(0)].length <= 2;
    }, o2 = t2.__arabicParser__.isArabicAlfLetter = function(t3) {
      return u2(t3) && 0 <= n2.indexOf(t3.charCodeAt(0));
    }, s2 = (t2.__arabicParser__.arabicLetterHasIsolatedForm = function(t3) {
      return u2(t3) && r2(t3) && 1 <= h2[t3.charCodeAt(0)].length;
    }, t2.__arabicParser__.arabicLetterHasFinalForm = function(t3) {
      return u2(t3) && r2(t3) && 2 <= h2[t3.charCodeAt(0)].length;
    }), l2 = (t2.__arabicParser__.arabicLetterHasInitialForm = function(t3) {
      return u2(t3) && r2(t3) && 3 <= h2[t3.charCodeAt(0)].length;
    }, t2.__arabicParser__.arabicLetterHasMedialForm = function(t3) {
      return u2(t3) && r2(t3) && 4 == h2[t3.charCodeAt(0)].length;
    }), c2 = t2.__arabicParser__.resolveLigatures = function(t3) {
      var e3 = 0, n3 = a2, r3 = 0, i3 = "", o3 = 0;
      for (e3 = 0; e3 < t3.length; e3 += 1) void 0 !== n3[t3.charCodeAt(e3)] ? (o3++, "number" == typeof (n3 = n3[t3.charCodeAt(e3)]) && (r3 = -1 !== (r3 = f2(t3.charAt(e3), t3.charAt(e3 - o3), t3.charAt(e3 + 1))) ? r3 : 0, i3 += String.fromCharCode(n3), n3 = a2, o3 = 0), e3 === t3.length - 1 && (n3 = a2, i3 += t3.charAt(e3 - (o3 - 1)), e3 -= o3 - 1, o3 = 0)) : (n3 = a2, i3 += t3.charAt(e3 - o3), e3 -= o3, o3 = 0);
      return i3;
    }, f2 = (t2.__arabicParser__.isArabicDiacritic = function(t3) {
      return void 0 !== t3 && void 0 !== e2[t3.charCodeAt(0)];
    }, t2.__arabicParser__.getCorrectForm = function(t3, e3, n3) {
      return u2(t3) ? false === r2(t3) ? -1 : !s2(t3) || !u2(e3) && !u2(n3) || !u2(n3) && i2(e3) || i2(t3) && !u2(e3) || i2(t3) && o2(e3) || i2(t3) && i2(e3) ? 0 : l2(t3) && u2(e3) && !i2(e3) && u2(n3) && s2(n3) ? 3 : i2(t3) || !u2(n3) ? 1 : 2 : -1;
    }), p2 = t2.__arabicParser__.processArabic = t2.processArabic = function(t3) {
      var e3 = 0, n3 = 0, r3 = 0, i3 = "", o3 = "", a3 = "", s3 = (t3 = t3 || "").split("\\s+"), l3 = [];
      for (e3 = 0; e3 < s3.length; e3 += 1) {
        for (l3.push(""), n3 = 0; n3 < s3[e3].length; n3 += 1) i3 = s3[e3][n3], o3 = s3[e3][n3 - 1], a3 = s3[e3][n3 + 1], u2(i3) ? (r3 = f2(i3, o3, a3), l3[e3] += -1 !== r3 ? String.fromCharCode(h2[i3.charCodeAt(0)][r3]) : i3) : l3[e3] += i3;
        l3[e3] = c2(l3[e3]);
      }
      return l3.join(" ");
    };
    t2.events.push(["preProcessText", function(t3) {
      var e3 = t3.text, n3 = (t3.x, t3.y, t3.options || {}), r3 = (t3.mutex, n3.lang, []);
      if ("[object Array]" === Object.prototype.toString.call(e3)) {
        var i3 = 0;
        for (r3 = [], i3 = 0; i3 < e3.length; i3 += 1) "[object Array]" === Object.prototype.toString.call(e3[i3]) ? r3.push([p2(e3[i3][0]), e3[i3][1], e3[i3][2]]) : r3.push([p2(e3[i3])]);
        t3.text = r3;
      } else t3.text = p2(e3);
    }]);
  })(lt.API), lt.API.autoPrint = function(t2) {
    var e2;
    switch ((t2 = t2 || {}).variant = t2.variant || "non-conform", t2.variant) {
      case "javascript":
        this.addJS("print({});");
        break;
      case "non-conform":
      default:
        this.internal.events.subscribe("postPutResources", function() {
          e2 = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
        }), this.internal.events.subscribe("putCatalog", function() {
          this.internal.out("/OpenAction " + e2 + " 0 R");
        });
    }
    return this;
  }, /**
     * @license
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
  e = lt.API, (n = function() {
    var e2 = void 0;
    Object.defineProperty(this, "pdf", { get: function() {
      return e2;
    }, set: function(t2) {
      e2 = t2;
    } });
    var n2 = 150;
    Object.defineProperty(this, "width", { get: function() {
      return n2;
    }, set: function(t2) {
      n2 = isNaN(t2) || false === Number.isInteger(t2) || t2 < 0 ? 150 : t2, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = n2 + 1);
    } });
    var r2 = 300;
    Object.defineProperty(this, "height", { get: function() {
      return r2;
    }, set: function(t2) {
      r2 = isNaN(t2) || false === Number.isInteger(t2) || t2 < 0 ? 300 : t2, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = r2 + 1);
    } });
    var i2 = [];
    Object.defineProperty(this, "childNodes", { get: function() {
      return i2;
    }, set: function(t2) {
      i2 = t2;
    } });
    var o2 = {};
    Object.defineProperty(this, "style", { get: function() {
      return o2;
    }, set: function(t2) {
      o2 = t2;
    } }), Object.defineProperty(this, "parentNode", { get: function() {
      return false;
    } });
  }).prototype.getContext = function(t2, e2) {
    var n2;
    if ("2d" !== (t2 = t2 || "2d")) return null;
    for (n2 in e2) this.pdf.context2d.hasOwnProperty(n2) && (this.pdf.context2d[n2] = e2[n2]);
    return (this.pdf.context2d._canvas = this).pdf.context2d;
  }, n.prototype.toDataURL = function() {
    throw new Error("toDataURL is not implemented.");
  }, e.events.push(["initialized", function() {
    this.canvas = new n(), this.canvas.pdf = this;
  }]), /** 
     * @license
     * ====================================================================
     * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
     *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
     *               2013 Lee Driscoll, https://github.com/lsdriscoll
     *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
     *               2014 James Hall, james@parall.ax
     *               2014 Diego Casorran, https://github.com/diegocr
     *
     * 
     * ====================================================================
     */
  _ = lt.API, F = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }, P = 1, p = function(t2, e2, n2, r2, i2) {
    F = { x: t2, y: e2, w: n2, h: r2, ln: i2 };
  }, d = function() {
    return F;
  }, k = { left: 0, top: 0, bottom: 0 }, _.setHeaderFunction = function(t2) {
    l = t2;
  }, _.getTextDimensions = function(t2, e2) {
    var n2 = this.table_font_size || this.internal.getFontSize(), r2 = (this.internal.getFont().fontStyle, (e2 = e2 || {}).scaleFactor || this.internal.scaleFactor), i2 = 0, o2 = 0, a2 = 0;
    if ("string" == typeof t2) 0 != (i2 = this.getStringUnitWidth(t2) * n2) && (o2 = 1);
    else {
      if ("[object Array]" !== Object.prototype.toString.call(t2)) throw new Error("getTextDimensions expects text-parameter to be of type String or an Array of Strings.");
      for (var s2 = 0; s2 < t2.length; s2++) i2 < (a2 = this.getStringUnitWidth(t2[s2]) * n2) && (i2 = a2);
      0 !== i2 && (o2 = t2.length);
    }
    return { w: i2 /= r2, h: Math.max((o2 * n2 * this.getLineHeightFactor() - n2 * (this.getLineHeightFactor() - 1)) / r2, 0) };
  }, _.cellAddPage = function() {
    var t2 = this.margins || k;
    this.addPage(), p(t2.left, t2.top, void 0, void 0), P += 1;
  }, _.cellInitialize = function() {
    F = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }, P = 1;
  }, _.cell = function(t2, e2, n2, r2, i2, o2, a2) {
    var s2 = d(), l2 = false;
    if (void 0 !== s2.ln) if (s2.ln === o2) t2 = s2.x + s2.w, e2 = s2.y;
    else {
      var h2 = this.margins || k;
      s2.y + s2.h + r2 + 13 >= this.internal.pageSize.getHeight() - h2.bottom && (this.cellAddPage(), l2 = true, this.printHeaders && this.tableHeaderRow && this.printHeaderRow(o2, true)), e2 = d().y + d().h, l2 && (e2 = 23);
    }
    if (void 0 !== i2[0]) if (this.printingHeaderRow ? this.rect(t2, e2, n2, r2, "FD") : this.rect(t2, e2, n2, r2), "right" === a2) {
      i2 instanceof Array || (i2 = [i2]);
      for (var u2 = 0; u2 < i2.length; u2++) {
        var c2 = i2[u2], f2 = this.getStringUnitWidth(c2) * this.internal.getFontSize() / this.internal.scaleFactor;
        this.text(c2, t2 + n2 - f2 - 3, e2 + this.internal.getLineHeight() * (u2 + 1));
      }
    } else this.text(i2, t2 + 3, e2 + this.internal.getLineHeight());
    return p(t2, e2, n2, r2, o2), this;
  }, _.arrayMax = function(t2, e2) {
    var n2, r2, i2, o2 = t2[0];
    for (n2 = 0, r2 = t2.length; n2 < r2; n2 += 1) i2 = t2[n2], e2 ? -1 === e2(o2, i2) && (o2 = i2) : o2 < i2 && (o2 = i2);
    return o2;
  }, _.table = function(t2, e2, n2, r2, i2) {
    if (!n2) throw "No data for PDF table";
    var o2, a2, s2, l2, h2, u2, c2, f2, p2, d2, g2 = [], m2 = [], y2 = {}, v2 = {}, w2 = [], b2 = [], x2 = false, N2 = true, L2 = 12, A2 = k;
    if (A2.width = this.internal.pageSize.getWidth(), i2 && (true === i2.autoSize && (x2 = true), false === i2.printHeaders && (N2 = false), i2.fontSize && (L2 = i2.fontSize), i2.css && void 0 !== i2.css["font-size"] && (L2 = 16 * i2.css["font-size"]), i2.margins && (A2 = i2.margins)), this.lnMod = 0, F = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }, P = 1, this.printHeaders = N2, this.margins = A2, this.setFontSize(L2), this.table_font_size = L2, null == r2) g2 = Object.keys(n2[0]);
    else if (r2[0] && "string" != typeof r2[0]) for (a2 = 0, s2 = r2.length; a2 < s2; a2 += 1) o2 = r2[a2], g2.push(o2.name), m2.push(o2.prompt), v2[o2.name] = o2.width * (19.049976 / 25.4);
    else g2 = r2;
    if (x2) for (d2 = function(t3) {
      return t3[o2];
    }, a2 = 0, s2 = g2.length; a2 < s2; a2 += 1) {
      for (y2[o2 = g2[a2]] = n2.map(d2), w2.push(this.getTextDimensions(m2[a2] || o2, { scaleFactor: 1 }).w), c2 = 0, l2 = (u2 = y2[o2]).length; c2 < l2; c2 += 1) h2 = u2[c2], w2.push(this.getTextDimensions(h2, { scaleFactor: 1 }).w);
      v2[o2] = _.arrayMax(w2), w2 = [];
    }
    if (N2) {
      var S2 = this.calculateLineHeight(g2, v2, m2.length ? m2 : g2);
      for (a2 = 0, s2 = g2.length; a2 < s2; a2 += 1) o2 = g2[a2], b2.push([t2, e2, v2[o2], S2, String(m2.length ? m2[a2] : o2)]);
      this.setTableHeaderRow(b2), this.printHeaderRow(1, false);
    }
    for (a2 = 0, s2 = n2.length; a2 < s2; a2 += 1) for (f2 = n2[a2], S2 = this.calculateLineHeight(g2, v2, f2), c2 = 0, p2 = g2.length; c2 < p2; c2 += 1) o2 = g2[c2], this.cell(t2, e2, v2[o2], S2, f2[o2], a2 + 2, o2.align);
    return this.lastCellPos = F, this.table_x = t2, this.table_y = e2, this;
  }, _.calculateLineHeight = function(t2, e2, n2) {
    for (var r2, i2 = 0, o2 = 0; o2 < t2.length; o2++) {
      n2[r2 = t2[o2]] = this.splitTextToSize(String(n2[r2]), e2[r2] - 3);
      var a2 = this.internal.getLineHeight() * n2[r2].length + 3;
      i2 < a2 && (i2 = a2);
    }
    return i2;
  }, _.setTableHeaderRow = function(t2) {
    this.tableHeaderRow = t2;
  }, _.printHeaderRow = function(t2, e2) {
    if (!this.tableHeaderRow) throw "Property tableHeaderRow does not exist.";
    var n2, r2, i2, o2;
    if (this.printingHeaderRow = true, void 0 !== l) {
      var a2 = l(this, P);
      p(a2[0], a2[1], a2[2], a2[3], -1);
    }
    this.setFontStyle("bold");
    var s2 = [];
    for (i2 = 0, o2 = this.tableHeaderRow.length; i2 < o2; i2 += 1) this.setFillColor(200, 200, 200), n2 = this.tableHeaderRow[i2], e2 && (this.margins.top = 13, n2[1] = this.margins && this.margins.top || 0, s2.push(n2)), r2 = [].concat(n2), this.cell.apply(this, r2.concat(t2));
    0 < s2.length && this.setTableHeaderRow(s2), this.setFontStyle("normal"), this.printingHeaderRow = false;
  }, /**
     * jsPDF Context2D PlugIn Copyright (c) 2014 Steven Spungin (TwelveTone LLC) steven@twelvetone.tv
     *
     * Licensed under the MIT License. http://opensource.org/licenses/mit-license
     */
  (function(t2, e2) {
    var l2, i2, o2, h2, u2, c2 = function(t3) {
      return t3 = t3 || {}, this.isStrokeTransparent = t3.isStrokeTransparent || false, this.strokeOpacity = t3.strokeOpacity || 1, this.strokeStyle = t3.strokeStyle || "#000000", this.fillStyle = t3.fillStyle || "#000000", this.isFillTransparent = t3.isFillTransparent || false, this.fillOpacity = t3.fillOpacity || 1, this.font = t3.font || "10px sans-serif", this.textBaseline = t3.textBaseline || "alphabetic", this.textAlign = t3.textAlign || "left", this.lineWidth = t3.lineWidth || 1, this.lineJoin = t3.lineJoin || "miter", this.lineCap = t3.lineCap || "butt", this.path = t3.path || [], this.transform = void 0 !== t3.transform ? t3.transform.clone() : new M2(), this.globalCompositeOperation = t3.globalCompositeOperation || "normal", this.globalAlpha = t3.globalAlpha || 1, this.clip_path = t3.clip_path || [], this.currentPoint = t3.currentPoint || new j2(), this.miterLimit = t3.miterLimit || 10, this.lastPoint = t3.lastPoint || new j2(), this.ignoreClearRect = "boolean" != typeof t3.ignoreClearRect || t3.ignoreClearRect, this;
    };
    t2.events.push(["initialized", function() {
      this.context2d = new n2(this), l2 = this.internal.f2, this.internal.f3, i2 = this.internal.getCoordinateString, o2 = this.internal.getVerticalCoordinateString, h2 = this.internal.getHorizontalCoordinate, u2 = this.internal.getVerticalCoordinate;
    }]);
    var n2 = function(t3) {
      Object.defineProperty(this, "canvas", { get: function() {
        return { parentNode: false, style: false };
      } }), Object.defineProperty(this, "pdf", { get: function() {
        return t3;
      } });
      var e3 = false;
      Object.defineProperty(this, "pageWrapXEnabled", { get: function() {
        return e3;
      }, set: function(t4) {
        e3 = Boolean(t4);
      } });
      var n3 = false;
      Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
        return n3;
      }, set: function(t4) {
        n3 = Boolean(t4);
      } });
      var r3 = 0;
      Object.defineProperty(this, "posX", { get: function() {
        return r3;
      }, set: function(t4) {
        isNaN(t4) || (r3 = t4);
      } });
      var i3 = 0;
      Object.defineProperty(this, "posY", { get: function() {
        return i3;
      }, set: function(t4) {
        isNaN(t4) || (i3 = t4);
      } });
      var o3 = false;
      Object.defineProperty(this, "autoPaging", { get: function() {
        return o3;
      }, set: function(t4) {
        o3 = Boolean(t4);
      } });
      var a3 = 0;
      Object.defineProperty(this, "lastBreak", { get: function() {
        return a3;
      }, set: function(t4) {
        a3 = t4;
      } });
      var s3 = [];
      Object.defineProperty(this, "pageBreaks", { get: function() {
        return s3;
      }, set: function(t4) {
        s3 = t4;
      } });
      var l3 = new c2();
      Object.defineProperty(this, "ctx", { get: function() {
        return l3;
      }, set: function(t4) {
        t4 instanceof c2 && (l3 = t4);
      } }), Object.defineProperty(this, "path", { get: function() {
        return l3.path;
      }, set: function(t4) {
        l3.path = t4;
      } });
      var h3 = [];
      Object.defineProperty(this, "ctxStack", { get: function() {
        return h3;
      }, set: function(t4) {
        h3 = t4;
      } }), Object.defineProperty(this, "fillStyle", { get: function() {
        return this.ctx.fillStyle;
      }, set: function(t4) {
        var e4;
        e4 = f2(t4), this.ctx.fillStyle = e4.style, this.ctx.isFillTransparent = 0 === e4.a, this.ctx.fillOpacity = e4.a, this.pdf.setFillColor(e4.r, e4.g, e4.b, { a: e4.a }), this.pdf.setTextColor(e4.r, e4.g, e4.b, { a: e4.a });
      } }), Object.defineProperty(this, "strokeStyle", { get: function() {
        return this.ctx.strokeStyle;
      }, set: function(t4) {
        var e4 = f2(t4);
        this.ctx.strokeStyle = e4.style, this.ctx.isStrokeTransparent = 0 === e4.a, this.ctx.strokeOpacity = e4.a, 0 === e4.a ? this.pdf.setDrawColor(255, 255, 255) : (e4.a, this.pdf.setDrawColor(e4.r, e4.g, e4.b));
      } }), Object.defineProperty(this, "lineCap", { get: function() {
        return this.ctx.lineCap;
      }, set: function(t4) {
        -1 !== ["butt", "round", "square"].indexOf(t4) && (this.ctx.lineCap = t4, this.pdf.setLineCap(t4));
      } }), Object.defineProperty(this, "lineWidth", { get: function() {
        return this.ctx.lineWidth;
      }, set: function(t4) {
        isNaN(t4) || (this.ctx.lineWidth = t4, this.pdf.setLineWidth(t4));
      } }), Object.defineProperty(this, "lineJoin", { get: function() {
        return this.ctx.lineJoin;
      }, set: function(t4) {
        -1 !== ["bevel", "round", "miter"].indexOf(t4) && (this.ctx.lineJoin = t4, this.pdf.setLineJoin(t4));
      } }), Object.defineProperty(this, "miterLimit", { get: function() {
        return this.ctx.miterLimit;
      }, set: function(t4) {
        isNaN(t4) || (this.ctx.miterLimit = t4, this.pdf.setMiterLimit(t4));
      } }), Object.defineProperty(this, "textBaseline", { get: function() {
        return this.ctx.textBaseline;
      }, set: function(t4) {
        this.ctx.textBaseline = t4;
      } }), Object.defineProperty(this, "textAlign", { get: function() {
        return this.ctx.textAlign;
      }, set: function(t4) {
        -1 !== ["right", "end", "center", "left", "start"].indexOf(t4) && (this.ctx.textAlign = t4);
      } }), Object.defineProperty(this, "font", { get: function() {
        return this.ctx.font;
      }, set: function(t4) {
        var e4;
        if (this.ctx.font = t4, null !== (e4 = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t4))) {
          var n4 = e4[1], r4 = (e4[2], e4[3]), i4 = e4[4], o4 = e4[5], a4 = e4[6];
          i4 = "px" === o4 ? Math.floor(parseFloat(i4)) : "em" === o4 ? Math.floor(parseFloat(i4) * this.pdf.getFontSize()) : Math.floor(parseFloat(i4)), this.pdf.setFontSize(i4);
          var s4 = "";
          ("bold" === r4 || 700 <= parseInt(r4, 10) || "bold" === n4) && (s4 = "bold"), "italic" === n4 && (s4 += "italic"), 0 === s4.length && (s4 = "normal");
          for (var l4 = "", h4 = a4.toLowerCase().replace(/"|'/g, "").split(/\s*,\s*/), u3 = { arial: "Helvetica", verdana: "Helvetica", helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", courier: "Courier", times: "Times", cursive: "Times", fantasy: "Times", serif: "Times" }, c3 = 0; c3 < h4.length; c3++) {
            if (void 0 !== this.pdf.internal.getFont(h4[c3], s4, { noFallback: true, disableWarning: true })) {
              l4 = h4[c3];
              break;
            }
            if ("bolditalic" === s4 && void 0 !== this.pdf.internal.getFont(h4[c3], "bold", { noFallback: true, disableWarning: true })) l4 = h4[c3], s4 = "bold";
            else if (void 0 !== this.pdf.internal.getFont(h4[c3], "normal", { noFallback: true, disableWarning: true })) {
              l4 = h4[c3], s4 = "normal";
              break;
            }
          }
          if ("" === l4) {
            for (c3 = 0; c3 < h4.length; c3++) if (u3[h4[c3]]) {
              l4 = u3[h4[c3]];
              break;
            }
          }
          l4 = "" === l4 ? "Times" : l4, this.pdf.setFont(l4, s4);
        }
      } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
        return this.ctx.globalCompositeOperation;
      }, set: function(t4) {
        this.ctx.globalCompositeOperation = t4;
      } }), Object.defineProperty(this, "globalAlpha", { get: function() {
        return this.ctx.globalAlpha;
      }, set: function(t4) {
        this.ctx.globalAlpha = t4;
      } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
        return this.ctx.ignoreClearRect;
      }, set: function(t4) {
        this.ctx.ignoreClearRect = Boolean(t4);
      } });
    };
    n2.prototype.fill = function() {
      r2.call(this, "fill", false);
    }, n2.prototype.stroke = function() {
      r2.call(this, "stroke", false);
    }, n2.prototype.beginPath = function() {
      this.path = [{ type: "begin" }];
    }, n2.prototype.moveTo = function(t3, e3) {
      if (isNaN(t3) || isNaN(e3)) throw console.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
      var n3 = this.ctx.transform.applyToPoint(new j2(t3, e3));
      this.path.push({ type: "mt", x: n3.x, y: n3.y }), this.ctx.lastPoint = new j2(t3, e3);
    }, n2.prototype.closePath = function() {
      var t3 = new j2(0, 0), e3 = 0;
      for (e3 = this.path.length - 1; -1 !== e3; e3--) if ("begin" === this.path[e3].type && "object" === se(this.path[e3 + 1]) && "number" == typeof this.path[e3 + 1].x) {
        t3 = new j2(this.path[e3 + 1].x, this.path[e3 + 1].y), this.path.push({ type: "lt", x: t3.x, y: t3.y });
        break;
      }
      "object" === se(this.path[e3 + 2]) && "number" == typeof this.path[e3 + 2].x && this.path.push(JSON.parse(JSON.stringify(this.path[e3 + 2]))), this.path.push({ type: "close" }), this.ctx.lastPoint = new j2(t3.x, t3.y);
    }, n2.prototype.lineTo = function(t3, e3) {
      if (isNaN(t3) || isNaN(e3)) throw console.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
      var n3 = this.ctx.transform.applyToPoint(new j2(t3, e3));
      this.path.push({ type: "lt", x: n3.x, y: n3.y }), this.ctx.lastPoint = new j2(n3.x, n3.y);
    }, n2.prototype.clip = function() {
      this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), r2.call(this, null, true);
    }, n2.prototype.quadraticCurveTo = function(t3, e3, n3, r3) {
      if (isNaN(n3) || isNaN(r3) || isNaN(t3) || isNaN(e3)) throw console.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
      var i3 = this.ctx.transform.applyToPoint(new j2(n3, r3)), o3 = this.ctx.transform.applyToPoint(new j2(t3, e3));
      this.path.push({ type: "qct", x1: o3.x, y1: o3.y, x: i3.x, y: i3.y }), this.ctx.lastPoint = new j2(i3.x, i3.y);
    }, n2.prototype.bezierCurveTo = function(t3, e3, n3, r3, i3, o3) {
      if (isNaN(i3) || isNaN(o3) || isNaN(t3) || isNaN(e3) || isNaN(n3) || isNaN(r3)) throw console.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
      var a3 = this.ctx.transform.applyToPoint(new j2(i3, o3)), s3 = this.ctx.transform.applyToPoint(new j2(t3, e3)), l3 = this.ctx.transform.applyToPoint(new j2(n3, r3));
      this.path.push({ type: "bct", x1: s3.x, y1: s3.y, x2: l3.x, y2: l3.y, x: a3.x, y: a3.y }), this.ctx.lastPoint = new j2(a3.x, a3.y);
    }, n2.prototype.arc = function(t3, e3, n3, r3, i3, o3) {
      if (isNaN(t3) || isNaN(e3) || isNaN(n3) || isNaN(r3) || isNaN(i3)) throw console.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
      if (o3 = Boolean(o3), !this.ctx.transform.isIdentity) {
        var a3 = this.ctx.transform.applyToPoint(new j2(t3, e3));
        t3 = a3.x, e3 = a3.y;
        var s3 = this.ctx.transform.applyToPoint(new j2(0, n3)), l3 = this.ctx.transform.applyToPoint(new j2(0, 0));
        n3 = Math.sqrt(Math.pow(s3.x - l3.x, 2) + Math.pow(s3.y - l3.y, 2));
      }
      Math.abs(i3 - r3) >= 2 * Math.PI && (r3 = 0, i3 = 2 * Math.PI), this.path.push({ type: "arc", x: t3, y: e3, radius: n3, startAngle: r3, endAngle: i3, counterclockwise: o3 });
    }, n2.prototype.arcTo = function(t3, e3, n3, r3, i3) {
      throw new Error("arcTo not implemented.");
    }, n2.prototype.rect = function(t3, e3, n3, r3) {
      if (isNaN(t3) || isNaN(e3) || isNaN(n3) || isNaN(r3)) throw console.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
      this.moveTo(t3, e3), this.lineTo(t3 + n3, e3), this.lineTo(t3 + n3, e3 + r3), this.lineTo(t3, e3 + r3), this.lineTo(t3, e3), this.lineTo(t3 + n3, e3), this.lineTo(t3, e3);
    }, n2.prototype.fillRect = function(t3, e3, n3, r3) {
      if (isNaN(t3) || isNaN(e3) || isNaN(n3) || isNaN(r3)) throw console.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
      if (!N2.call(this)) {
        var i3 = {};
        "butt" !== this.lineCap && (i3.lineCap = this.lineCap, this.lineCap = "butt"), "miter" !== this.lineJoin && (i3.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(t3, e3, n3, r3), this.fill(), i3.hasOwnProperty("lineCap") && (this.lineCap = i3.lineCap), i3.hasOwnProperty("lineJoin") && (this.lineJoin = i3.lineJoin);
      }
    }, n2.prototype.strokeRect = function(t3, e3, n3, r3) {
      if (isNaN(t3) || isNaN(e3) || isNaN(n3) || isNaN(r3)) throw console.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
      L2.call(this) || (this.beginPath(), this.rect(t3, e3, n3, r3), this.stroke());
    }, n2.prototype.clearRect = function(t3, e3, n3, r3) {
      if (isNaN(t3) || isNaN(e3) || isNaN(n3) || isNaN(r3)) throw console.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
      this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(t3, e3, n3, r3));
    }, n2.prototype.save = function(t3) {
      t3 = "boolean" != typeof t3 || t3;
      for (var e3 = this.pdf.internal.getCurrentPageInfo().pageNumber, n3 = 0; n3 < this.pdf.internal.getNumberOfPages(); n3++) this.pdf.setPage(n3 + 1), this.pdf.internal.out("q");
      if (this.pdf.setPage(e3), t3) {
        this.ctx.fontSize = this.pdf.internal.getFontSize();
        var r3 = new c2(this.ctx);
        this.ctxStack.push(this.ctx), this.ctx = r3;
      }
    }, n2.prototype.restore = function(t3) {
      t3 = "boolean" != typeof t3 || t3;
      for (var e3 = this.pdf.internal.getCurrentPageInfo().pageNumber, n3 = 0; n3 < this.pdf.internal.getNumberOfPages(); n3++) this.pdf.setPage(n3 + 1), this.pdf.internal.out("Q");
      this.pdf.setPage(e3), t3 && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin);
    }, n2.prototype.toDataURL = function() {
      throw new Error("toDataUrl not implemented.");
    };
    var f2 = function(t3) {
      var e3, n3, r3, i3;
      if (true === t3.isCanvasGradient && (t3 = t3.getColor()), !t3) return { r: 0, g: 0, b: 0, a: 0, style: t3 };
      if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t3)) i3 = r3 = n3 = e3 = 0;
      else {
        var o3 = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t3);
        if (null !== o3) e3 = parseInt(o3[1]), n3 = parseInt(o3[2]), r3 = parseInt(o3[3]), i3 = 1;
        else if (null !== (o3 = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/.exec(t3))) e3 = parseInt(o3[1]), n3 = parseInt(o3[2]), r3 = parseInt(o3[3]), i3 = parseFloat(o3[4]);
        else {
          if (i3 = 1, "string" == typeof t3 && "#" !== t3.charAt(0)) {
            var a3 = new RGBColor(t3);
            t3 = a3.ok ? a3.toHex() : "#000000";
          }
          4 === t3.length ? (e3 = t3.substring(1, 2), e3 += e3, n3 = t3.substring(2, 3), n3 += n3, r3 = t3.substring(3, 4), r3 += r3) : (e3 = t3.substring(1, 3), n3 = t3.substring(3, 5), r3 = t3.substring(5, 7)), e3 = parseInt(e3, 16), n3 = parseInt(n3, 16), r3 = parseInt(r3, 16);
        }
      }
      return { r: e3, g: n3, b: r3, a: i3, style: t3 };
    }, N2 = function() {
      return this.ctx.isFillTransparent || 0 == this.globalAlpha;
    }, L2 = function() {
      return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha);
    };
    n2.prototype.fillText = function(t3, e3, n3, r3) {
      if (isNaN(e3) || isNaN(n3) || "string" != typeof t3) throw console.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
      if (r3 = isNaN(r3) ? void 0 : r3, !N2.call(this)) {
        n3 = a2.call(this, n3);
        var i3 = B2(this.ctx.transform.rotation), o3 = this.ctx.transform.scaleX;
        s2.call(this, { text: t3, x: e3, y: n3, scale: o3, angle: i3, align: this.textAlign, maxWidth: r3 });
      }
    }, n2.prototype.strokeText = function(t3, e3, n3, r3) {
      if (isNaN(e3) || isNaN(n3) || "string" != typeof t3) throw console.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
      if (!L2.call(this)) {
        r3 = isNaN(r3) ? void 0 : r3, n3 = a2.call(this, n3);
        var i3 = B2(this.ctx.transform.rotation), o3 = this.ctx.transform.scaleX;
        s2.call(this, { text: t3, x: e3, y: n3, scale: o3, renderingMode: "stroke", angle: i3, align: this.textAlign, maxWidth: r3 });
      }
    }, n2.prototype.measureText = function(t3) {
      if ("string" != typeof t3) throw console.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
      var e3 = this.pdf, n3 = this.pdf.internal.scaleFactor, r3 = e3.internal.getFontSize(), i3 = e3.getStringUnitWidth(t3) * r3 / e3.internal.scaleFactor;
      return new function(t4) {
        var e4 = (t4 = t4 || {}).width || 0;
        return Object.defineProperty(this, "width", { get: function() {
          return e4;
        } }), this;
      }({ width: i3 *= Math.round(96 * n3 / 72 * 1e4) / 1e4 });
    }, n2.prototype.scale = function(t3, e3) {
      if (isNaN(t3) || isNaN(e3)) throw console.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
      var n3 = new M2(t3, 0, 0, e3, 0, 0);
      this.ctx.transform = this.ctx.transform.multiply(n3);
    }, n2.prototype.rotate = function(t3) {
      if (isNaN(t3)) throw console.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
      var e3 = new M2(Math.cos(t3), Math.sin(t3), -Math.sin(t3), Math.cos(t3), 0, 0);
      this.ctx.transform = this.ctx.transform.multiply(e3);
    }, n2.prototype.translate = function(t3, e3) {
      if (isNaN(t3) || isNaN(e3)) throw console.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
      var n3 = new M2(1, 0, 0, 1, t3, e3);
      this.ctx.transform = this.ctx.transform.multiply(n3);
    }, n2.prototype.transform = function(t3, e3, n3, r3, i3, o3) {
      if (isNaN(t3) || isNaN(e3) || isNaN(n3) || isNaN(r3) || isNaN(i3) || isNaN(o3)) throw console.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
      var a3 = new M2(t3, e3, n3, r3, i3, o3);
      this.ctx.transform = this.ctx.transform.multiply(a3);
    }, n2.prototype.setTransform = function(t3, e3, n3, r3, i3, o3) {
      t3 = isNaN(t3) ? 1 : t3, e3 = isNaN(e3) ? 0 : e3, n3 = isNaN(n3) ? 0 : n3, r3 = isNaN(r3) ? 1 : r3, i3 = isNaN(i3) ? 0 : i3, o3 = isNaN(o3) ? 0 : o3, this.ctx.transform = new M2(t3, e3, n3, r3, i3, o3);
    }, n2.prototype.drawImage = function(t3, e3, n3, r3, i3, o3, a3, s3, l3) {
      var h3 = this.pdf.getImageProperties(t3), u3 = 1, c3 = 1, f3 = 1, p3 = 1;
      void 0 !== r3 && void 0 !== s3 && (f3 = s3 / r3, p3 = l3 / i3, u3 = h3.width / r3 * s3 / r3, c3 = h3.height / i3 * l3 / i3), void 0 === o3 && (o3 = e3, a3 = n3, n3 = e3 = 0), void 0 !== r3 && void 0 === s3 && (s3 = r3, l3 = i3), void 0 === r3 && void 0 === s3 && (s3 = h3.width, l3 = h3.height);
      var d3 = this.ctx.transform.decompose(), g3 = B2(d3.rotate.shx);
      d3.scale.sx, d3.scale.sy;
      for (var m3, y3 = new M2(), v3 = ((y3 = (y3 = (y3 = y3.multiply(d3.translate)).multiply(d3.skew)).multiply(d3.scale)).applyToPoint(new j2(s3, l3)), y3.applyToRectangle(new E2(o3 - e3 * f3, a3 - n3 * p3, r3 * u3, i3 * c3))), w3 = F2.call(this, v3), b3 = [], x2 = 0; x2 < w3.length; x2 += 1) -1 === b3.indexOf(w3[x2]) && b3.push(w3[x2]);
      if (b3.sort(), this.autoPaging) for (var N3 = b3[0], L3 = b3[b3.length - 1], A3 = N3; A3 < L3 + 1; A3++) {
        if (this.pdf.setPage(A3), 0 !== this.ctx.clip_path.length) {
          var S3 = this.path;
          m3 = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = P2(m3, this.posX, -1 * this.pdf.internal.pageSize.height * (A3 - 1) + this.posY), k2.call(this, "fill", true), this.path = S3;
        }
        var _3 = JSON.parse(JSON.stringify(v3));
        _3 = P2([_3], this.posX, -1 * this.pdf.internal.pageSize.height * (A3 - 1) + this.posY)[0], this.pdf.addImage(t3, "jpg", _3.x, _3.y, _3.w, _3.h, null, null, g3);
      }
      else this.pdf.addImage(t3, "jpg", v3.x, v3.y, v3.w, v3.h, null, null, g3);
    };
    var F2 = function(t3, e3, n3) {
      var r3 = [];
      switch (e3 = e3 || this.pdf.internal.pageSize.width, n3 = n3 || this.pdf.internal.pageSize.height, t3.type) {
        default:
        case "mt":
        case "lt":
          r3.push(Math.floor((t3.y + this.posY) / n3) + 1);
          break;
        case "arc":
          r3.push(Math.floor((t3.y + this.posY - t3.radius) / n3) + 1), r3.push(Math.floor((t3.y + this.posY + t3.radius) / n3) + 1);
          break;
        case "qct":
          var i3 = w2(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t3.x1, t3.y1, t3.x, t3.y);
          r3.push(Math.floor(i3.y / n3) + 1), r3.push(Math.floor((i3.y + i3.h) / n3) + 1);
          break;
        case "bct":
          var o3 = b2(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t3.x1, t3.y1, t3.x2, t3.y2, t3.x, t3.y);
          r3.push(Math.floor(o3.y / n3) + 1), r3.push(Math.floor((o3.y + o3.h) / n3) + 1);
          break;
        case "rect":
          r3.push(Math.floor((t3.y + this.posY) / n3) + 1), r3.push(Math.floor((t3.y + t3.h + this.posY) / n3) + 1);
      }
      for (var a3 = 0; a3 < r3.length; a3 += 1) for (; this.pdf.internal.getNumberOfPages() < r3[a3]; ) v2.call(this);
      return r3;
    }, v2 = function() {
      var t3 = this.fillStyle, e3 = this.strokeStyle, n3 = this.font, r3 = this.lineCap, i3 = this.lineWidth, o3 = this.lineJoin;
      this.pdf.addPage(), this.fillStyle = t3, this.strokeStyle = e3, this.font = n3, this.lineCap = r3, this.lineWidth = i3, this.lineJoin = o3;
    }, P2 = function(t3, e3, n3) {
      for (var r3 = 0; r3 < t3.length; r3++) switch (t3[r3].type) {
        case "bct":
          t3[r3].x2 += e3, t3[r3].y2 += n3;
        case "qct":
          t3[r3].x1 += e3, t3[r3].y1 += n3;
        case "mt":
        case "lt":
        case "arc":
        default:
          t3[r3].x += e3, t3[r3].y += n3;
      }
      return t3;
    }, r2 = function(t3, e3) {
      for (var n3, r3, i3 = this.fillStyle, o3 = this.strokeStyle, a3 = (this.font, this.lineCap), s3 = this.lineWidth, l3 = this.lineJoin, h3 = JSON.parse(JSON.stringify(this.path)), u3 = JSON.parse(JSON.stringify(this.path)), c3 = [], f3 = 0; f3 < u3.length; f3++) if (void 0 !== u3[f3].x) for (var p3 = F2.call(this, u3[f3]), d3 = 0; d3 < p3.length; d3 += 1) -1 === c3.indexOf(p3[d3]) && c3.push(p3[d3]);
      for (f3 = 0; f3 < c3.length; f3++) for (; this.pdf.internal.getNumberOfPages() < c3[f3]; ) v2.call(this);
      if (c3.sort(), this.autoPaging) {
        var g3 = c3[0], m3 = c3[c3.length - 1];
        for (f3 = g3; f3 < m3 + 1; f3++) {
          if (this.pdf.setPage(f3), this.fillStyle = i3, this.strokeStyle = o3, this.lineCap = a3, this.lineWidth = s3, this.lineJoin = l3, 0 !== this.ctx.clip_path.length) {
            var y3 = this.path;
            n3 = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = P2(n3, this.posX, -1 * this.pdf.internal.pageSize.height * (f3 - 1) + this.posY), k2.call(this, t3, true), this.path = y3;
          }
          r3 = JSON.parse(JSON.stringify(h3)), this.path = P2(r3, this.posX, -1 * this.pdf.internal.pageSize.height * (f3 - 1) + this.posY), false !== e3 && 0 !== f3 || k2.call(this, t3, e3);
        }
      } else k2.call(this, t3, e3);
      this.path = h3;
    }, k2 = function(t3, e3) {
      if (("stroke" !== t3 || e3 || !L2.call(this)) && ("stroke" === t3 || e3 || !N2.call(this))) {
        var n3 = [];
        this.ctx.globalAlpha;
        this.ctx.fillOpacity < 1 && this.ctx.fillOpacity;
        for (var r3, i3 = this.path, o3 = 0; o3 < i3.length; o3++) {
          var a3 = i3[o3];
          switch (a3.type) {
            case "begin":
              n3.push({ begin: true });
              break;
            case "close":
              n3.push({ close: true });
              break;
            case "mt":
              n3.push({ start: a3, deltas: [], abs: [] });
              break;
            case "lt":
              var s3 = n3.length;
              if (!isNaN(i3[o3 - 1].x)) {
                var l3 = [a3.x - i3[o3 - 1].x, a3.y - i3[o3 - 1].y];
                if (0 < s3) {
                  for (; 0 <= s3; s3--) if (true !== n3[s3 - 1].close && true !== n3[s3 - 1].begin) {
                    n3[s3 - 1].deltas.push(l3), n3[s3 - 1].abs.push(a3);
                    break;
                  }
                }
              }
              break;
            case "bct":
              l3 = [a3.x1 - i3[o3 - 1].x, a3.y1 - i3[o3 - 1].y, a3.x2 - i3[o3 - 1].x, a3.y2 - i3[o3 - 1].y, a3.x - i3[o3 - 1].x, a3.y - i3[o3 - 1].y];
              n3[n3.length - 1].deltas.push(l3);
              break;
            case "qct":
              var h3 = i3[o3 - 1].x + 2 / 3 * (a3.x1 - i3[o3 - 1].x), u3 = i3[o3 - 1].y + 2 / 3 * (a3.y1 - i3[o3 - 1].y), c3 = a3.x + 2 / 3 * (a3.x1 - a3.x), f3 = a3.y + 2 / 3 * (a3.y1 - a3.y), p3 = a3.x, d3 = a3.y;
              l3 = [h3 - i3[o3 - 1].x, u3 - i3[o3 - 1].y, c3 - i3[o3 - 1].x, f3 - i3[o3 - 1].y, p3 - i3[o3 - 1].x, d3 - i3[o3 - 1].y];
              n3[n3.length - 1].deltas.push(l3);
              break;
            case "arc":
              n3.push({ deltas: [], abs: [], arc: true }), Array.isArray(n3[n3.length - 1].abs) && n3[n3.length - 1].abs.push(a3);
          }
        }
        r3 = e3 ? null : "stroke" === t3 ? "stroke" : "fill";
        for (o3 = 0; o3 < n3.length; o3++) {
          if (n3[o3].arc) for (var g3 = n3[o3].abs, m3 = 0; m3 < g3.length; m3++) {
            var y3 = g3[m3];
            if (void 0 !== y3.startAngle) {
              var v3 = B2(y3.startAngle), w3 = B2(y3.endAngle), b3 = y3.x, x2 = y3.y;
              A2.call(this, b3, x2, y3.radius, v3, w3, y3.counterclockwise, r3, e3);
            } else I2.call(this, y3.x, y3.y);
          }
          if (!n3[o3].arc && true !== n3[o3].close && true !== n3[o3].begin) {
            b3 = n3[o3].start.x, x2 = n3[o3].start.y;
            C2.call(this, n3[o3].deltas, b3, x2, null, null);
          }
        }
        r3 && S2.call(this, r3), e3 && _2.call(this);
      }
    }, a2 = function(t3) {
      var e3 = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, n3 = e3 * (this.pdf.internal.getLineHeightFactor() - 1);
      switch (this.ctx.textBaseline) {
        case "bottom":
          return t3 - n3;
        case "top":
          return t3 + e3 - n3;
        case "hanging":
          return t3 + e3 - 2 * n3;
        case "middle":
          return t3 + e3 / 2 - n3;
        case "ideographic":
          return t3;
        case "alphabetic":
        default:
          return t3;
      }
    };
    n2.prototype.createLinearGradient = function() {
      var t3 = function() {
      };
      return t3.colorStops = [], t3.addColorStop = function(t4, e3) {
        this.colorStops.push([t4, e3]);
      }, t3.getColor = function() {
        return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1];
      }, t3.isCanvasGradient = true, t3;
    }, n2.prototype.createPattern = function() {
      return this.createLinearGradient();
    }, n2.prototype.createRadialGradient = function() {
      return this.createLinearGradient();
    };
    var A2 = function(t3, e3, n3, r3, i3, o3, a3, s3) {
      this.pdf.internal.scaleFactor;
      for (var l3 = y2(r3), h3 = y2(i3), u3 = g2.call(this, n3, l3, h3, o3), c3 = 0; c3 < u3.length; c3++) {
        var f3 = u3[c3];
        0 === c3 && p2.call(this, f3.x1 + t3, f3.y1 + e3), d2.call(this, t3, e3, f3.x2, f3.y2, f3.x3, f3.y3, f3.x4, f3.y4);
      }
      s3 ? _2.call(this) : S2.call(this, a3);
    }, S2 = function(t3) {
      switch (t3) {
        case "stroke":
          this.pdf.internal.out("S");
          break;
        case "fill":
          this.pdf.internal.out("f");
      }
    }, _2 = function() {
      this.pdf.clip();
    }, p2 = function(t3, e3) {
      this.pdf.internal.out(i2(t3) + " " + o2(e3) + " m");
    }, s2 = function(t3) {
      var e3;
      switch (t3.align) {
        case "right":
        case "end":
          e3 = "right";
          break;
        case "center":
          e3 = "center";
          break;
        case "left":
        case "start":
        default:
          e3 = "left";
      }
      var n3 = this.ctx.transform.applyToPoint(new j2(t3.x, t3.y)), r3 = this.ctx.transform.decompose(), i3 = new M2();
      i3 = (i3 = (i3 = i3.multiply(r3.translate)).multiply(r3.skew)).multiply(r3.scale);
      for (var o3, a3 = this.pdf.getTextDimensions(t3.text), s3 = this.ctx.transform.applyToRectangle(new E2(t3.x, t3.y, a3.w, a3.h)), l3 = i3.applyToRectangle(new E2(t3.x, t3.y - a3.h, a3.w, a3.h)), h3 = F2.call(this, l3), u3 = [], c3 = 0; c3 < h3.length; c3 += 1) -1 === u3.indexOf(h3[c3]) && u3.push(h3[c3]);
      if (u3.sort(), true === this.autoPaging) for (var f3 = u3[0], p3 = u3[u3.length - 1], d3 = f3; d3 < p3 + 1; d3++) {
        if (this.pdf.setPage(d3), 0 !== this.ctx.clip_path.length) {
          var g3 = this.path;
          o3 = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = P2(o3, this.posX, -1 * this.pdf.internal.pageSize.height * (d3 - 1) + this.posY), k2.call(this, "fill", true), this.path = g3;
        }
        var m3 = JSON.parse(JSON.stringify(s3));
        if (m3 = P2([m3], this.posX, -1 * this.pdf.internal.pageSize.height * (d3 - 1) + this.posY)[0], 0.01 <= t3.scale) {
          var y3 = this.pdf.internal.getFontSize();
          this.pdf.setFontSize(y3 * t3.scale);
        }
        this.pdf.text(t3.text, m3.x, m3.y, { angle: t3.angle, align: e3, renderingMode: t3.renderingMode, maxWidth: t3.maxWidth }), 0.01 <= t3.scale && this.pdf.setFontSize(y3);
      }
      else {
        if (0.01 <= t3.scale) {
          y3 = this.pdf.internal.getFontSize();
          this.pdf.setFontSize(y3 * t3.scale);
        }
        this.pdf.text(t3.text, n3.x + this.posX, n3.y + this.posY, { angle: t3.angle, align: e3, renderingMode: t3.renderingMode, maxWidth: t3.maxWidth }), 0.01 <= t3.scale && this.pdf.setFontSize(y3);
      }
    }, I2 = function(t3, e3, n3, r3) {
      n3 = n3 || 0, r3 = r3 || 0, this.pdf.internal.out(i2(t3 + n3) + " " + o2(e3 + r3) + " l");
    }, C2 = function(t3, e3, n3) {
      return this.pdf.lines(t3, e3, n3, null, null);
    }, d2 = function(t3, e3, n3, r3, i3, o3, a3, s3) {
      this.pdf.internal.out([l2(h2(n3 + t3)), l2(u2(r3 + e3)), l2(h2(i3 + t3)), l2(u2(o3 + e3)), l2(h2(a3 + t3)), l2(u2(s3 + e3)), "c"].join(" "));
    }, g2 = function(t3, e3, n3, r3) {
      var i3 = 2 * Math.PI, o3 = e3;
      (o3 < i3 || i3 < o3) && (o3 %= i3);
      var a3 = n3;
      (a3 < i3 || i3 < a3) && (a3 %= i3);
      for (var s3 = [], l3 = Math.PI / 2, h3 = r3 ? -1 : 1, u3 = e3, c3 = Math.min(i3, Math.abs(a3 - o3)); 1e-5 < c3; ) {
        var f3 = u3 + h3 * Math.min(c3, l3);
        s3.push(m2.call(this, t3, u3, f3)), c3 -= Math.abs(f3 - u3), u3 = f3;
      }
      return s3;
    }, m2 = function(t3, e3, n3) {
      var r3 = (n3 - e3) / 2, i3 = t3 * Math.cos(r3), o3 = t3 * Math.sin(r3), a3 = i3, s3 = -o3, l3 = a3 * a3 + s3 * s3, h3 = l3 + a3 * i3 + s3 * o3, u3 = 4 / 3 * (Math.sqrt(2 * l3 * h3) - h3) / (a3 * o3 - s3 * i3), c3 = a3 - u3 * s3, f3 = s3 + u3 * a3, p3 = c3, d3 = -f3, g3 = r3 + e3, m3 = Math.cos(g3), y3 = Math.sin(g3);
      return { x1: t3 * Math.cos(e3), y1: t3 * Math.sin(e3), x2: c3 * m3 - f3 * y3, y2: c3 * y3 + f3 * m3, x3: p3 * m3 - d3 * y3, y3: p3 * y3 + d3 * m3, x4: t3 * Math.cos(n3), y4: t3 * Math.sin(n3) };
    }, B2 = function(t3) {
      return 180 * t3 / Math.PI;
    }, y2 = function(t3) {
      return t3 * Math.PI / 180;
    }, w2 = function(t3, e3, n3, r3, i3, o3) {
      var a3 = t3 + 0.5 * (n3 - t3), s3 = e3 + 0.5 * (r3 - e3), l3 = i3 + 0.5 * (n3 - i3), h3 = o3 + 0.5 * (r3 - o3), u3 = Math.min(t3, i3, a3, l3), c3 = Math.max(t3, i3, a3, l3), f3 = Math.min(e3, o3, s3, h3), p3 = Math.max(e3, o3, s3, h3);
      return new E2(u3, f3, c3 - u3, p3 - f3);
    }, b2 = function(t3, e3, n3, r3, i3, o3, a3, s3) {
      for (var l3, h3, u3, c3, f3, p3, d3, g3, m3, y3, v3, w3, b3, x2 = n3 - t3, N3 = r3 - e3, L3 = i3 - n3, A3 = o3 - r3, S3 = a3 - i3, _3 = s3 - o3, F3 = 0; F3 < 41; F3++) g3 = (p3 = (h3 = t3 + (l3 = F3 / 40) * x2) + l3 * ((c3 = n3 + l3 * L3) - h3)) + l3 * (c3 + l3 * (i3 + l3 * S3 - c3) - p3), m3 = (d3 = (u3 = e3 + l3 * N3) + l3 * ((f3 = r3 + l3 * A3) - u3)) + l3 * (f3 + l3 * (o3 + l3 * _3 - f3) - d3), b3 = 0 == F3 ? (w3 = y3 = g3, v3 = m3) : (y3 = Math.min(y3, g3), v3 = Math.min(v3, m3), w3 = Math.max(w3, g3), Math.max(b3, m3));
      return new E2(Math.round(y3), Math.round(v3), Math.round(w3 - y3), Math.round(b3 - v3));
    }, j2 = function(t3, e3) {
      var n3 = t3 || 0;
      Object.defineProperty(this, "x", { enumerable: true, get: function() {
        return n3;
      }, set: function(t4) {
        isNaN(t4) || (n3 = parseFloat(t4));
      } });
      var r3 = e3 || 0;
      Object.defineProperty(this, "y", { enumerable: true, get: function() {
        return r3;
      }, set: function(t4) {
        isNaN(t4) || (r3 = parseFloat(t4));
      } });
      var i3 = "pt";
      return Object.defineProperty(this, "type", { enumerable: true, get: function() {
        return i3;
      }, set: function(t4) {
        i3 = t4.toString();
      } }), this;
    }, E2 = function(t3, e3, n3, r3) {
      j2.call(this, t3, e3), this.type = "rect";
      var i3 = n3 || 0;
      Object.defineProperty(this, "w", { enumerable: true, get: function() {
        return i3;
      }, set: function(t4) {
        isNaN(t4) || (i3 = parseFloat(t4));
      } });
      var o3 = r3 || 0;
      return Object.defineProperty(this, "h", { enumerable: true, get: function() {
        return o3;
      }, set: function(t4) {
        isNaN(t4) || (o3 = parseFloat(t4));
      } }), this;
    }, M2 = function(t3, e3, n3, r3, i3, o3) {
      var a3 = [];
      return Object.defineProperty(this, "sx", { get: function() {
        return a3[0];
      }, set: function(t4) {
        a3[0] = Math.round(1e5 * t4) / 1e5;
      } }), Object.defineProperty(this, "shy", { get: function() {
        return a3[1];
      }, set: function(t4) {
        a3[1] = Math.round(1e5 * t4) / 1e5;
      } }), Object.defineProperty(this, "shx", { get: function() {
        return a3[2];
      }, set: function(t4) {
        a3[2] = Math.round(1e5 * t4) / 1e5;
      } }), Object.defineProperty(this, "sy", { get: function() {
        return a3[3];
      }, set: function(t4) {
        a3[3] = Math.round(1e5 * t4) / 1e5;
      } }), Object.defineProperty(this, "tx", { get: function() {
        return a3[4];
      }, set: function(t4) {
        a3[4] = Math.round(1e5 * t4) / 1e5;
      } }), Object.defineProperty(this, "ty", { get: function() {
        return a3[5];
      }, set: function(t4) {
        a3[5] = Math.round(1e5 * t4) / 1e5;
      } }), Object.defineProperty(this, "rotation", { get: function() {
        return Math.atan2(this.shx, this.sx);
      } }), Object.defineProperty(this, "scaleX", { get: function() {
        return this.decompose().scale.sx;
      } }), Object.defineProperty(this, "scaleY", { get: function() {
        return this.decompose().scale.sy;
      } }), Object.defineProperty(this, "isIdentity", { get: function() {
        return 1 === this.sx && (0 === this.shy && (0 === this.shx && (1 === this.sy && (0 === this.tx && 0 === this.ty))));
      } }), this.sx = isNaN(t3) ? 1 : t3, this.shy = isNaN(e3) ? 0 : e3, this.shx = isNaN(n3) ? 0 : n3, this.sy = isNaN(r3) ? 1 : r3, this.tx = isNaN(i3) ? 0 : i3, this.ty = isNaN(o3) ? 0 : o3, this;
    };
    M2.prototype.multiply = function(t3) {
      var e3 = t3.sx * this.sx + t3.shy * this.shx, n3 = t3.sx * this.shy + t3.shy * this.sy, r3 = t3.shx * this.sx + t3.sy * this.shx, i3 = t3.shx * this.shy + t3.sy * this.sy, o3 = t3.tx * this.sx + t3.ty * this.shx + this.tx, a3 = t3.tx * this.shy + t3.ty * this.sy + this.ty;
      return new M2(e3, n3, r3, i3, o3, a3);
    }, M2.prototype.decompose = function() {
      var t3 = this.sx, e3 = this.shy, n3 = this.shx, r3 = this.sy, i3 = this.tx, o3 = this.ty, a3 = Math.sqrt(t3 * t3 + e3 * e3), s3 = (t3 /= a3) * n3 + (e3 /= a3) * r3;
      n3 -= t3 * s3, r3 -= e3 * s3;
      var l3 = Math.sqrt(n3 * n3 + r3 * r3);
      return s3 /= l3, t3 * (r3 /= l3) < e3 * (n3 /= l3) && (t3 = -t3, e3 = -e3, s3 = -s3, a3 = -a3), { scale: new M2(a3, 0, 0, l3, 0, 0), translate: new M2(1, 0, 0, 1, i3, o3), rotate: new M2(t3, e3, -e3, t3, 0, 0), skew: new M2(1, 0, s3, 1, 0, 0) };
    }, M2.prototype.applyToPoint = function(t3) {
      var e3 = t3.x * this.sx + t3.y * this.shx + this.tx, n3 = t3.x * this.shy + t3.y * this.sy + this.ty;
      return new j2(e3, n3);
    }, M2.prototype.applyToRectangle = function(t3) {
      var e3 = this.applyToPoint(t3), n3 = this.applyToPoint(new j2(t3.x + t3.w, t3.y + t3.h));
      return new E2(e3.x, e3.y, n3.x - e3.x, n3.y - e3.y);
    }, M2.prototype.clone = function() {
      var t3 = this.sx, e3 = this.shy, n3 = this.shx, r3 = this.sy, i3 = this.tx, o3 = this.ty;
      return new M2(t3, e3, n3, r3, i3, o3);
    };
  })(lt.API, "undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()), /**
     * jsPDF filters PlugIn
     * Copyright (c) 2014 Aras Abbasi 
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
  a = lt.API, o = function(t2) {
    var r2, e2, n2, i2, o2, a2, s2, l2, h2, u2;
    for (/[^\x00-\xFF]/.test(t2), e2 = [], n2 = 0, i2 = (t2 += r2 = "\0\0\0\0".slice(t2.length % 4 || 4)).length; n2 < i2; n2 += 4) 0 !== (o2 = (t2.charCodeAt(n2) << 24) + (t2.charCodeAt(n2 + 1) << 16) + (t2.charCodeAt(n2 + 2) << 8) + t2.charCodeAt(n2 + 3)) ? (a2 = (o2 = ((o2 = ((o2 = ((o2 = (o2 - (u2 = o2 % 85)) / 85) - (h2 = o2 % 85)) / 85) - (l2 = o2 % 85)) / 85) - (s2 = o2 % 85)) / 85) % 85, e2.push(a2 + 33, s2 + 33, l2 + 33, h2 + 33, u2 + 33)) : e2.push(122);
    return (function(t3, e3) {
      for (var n3 = r2.length; 0 < n3; n3--) t3.pop();
    })(e2), String.fromCharCode.apply(String, e2) + "~>";
  }, s = function(t2) {
    var r2, e2, n2, i2, o2, a2 = String, s2 = "length", l2 = "charCodeAt", h2 = "slice", u2 = "replace";
    for (t2[h2](-2), t2 = t2[h2](0, -2)[u2](/\s/g, "")[u2]("z", "!!!!!"), n2 = [], i2 = 0, o2 = (t2 += r2 = "uuuuu"[h2](t2[s2] % 5 || 5))[s2]; i2 < o2; i2 += 5) e2 = 52200625 * (t2[l2](i2) - 33) + 614125 * (t2[l2](i2 + 1) - 33) + 7225 * (t2[l2](i2 + 2) - 33) + 85 * (t2[l2](i2 + 3) - 33) + (t2[l2](i2 + 4) - 33), n2.push(255 & e2 >> 24, 255 & e2 >> 16, 255 & e2 >> 8, 255 & e2);
    return (function(t3, e3) {
      for (var n3 = r2[s2]; 0 < n3; n3--) t3.pop();
    })(n2), a2.fromCharCode.apply(a2, n2);
  }, h = function(t2) {
    for (var e2 = "", n2 = 0; n2 < t2.length; n2 += 1) e2 += ("0" + t2.charCodeAt(n2).toString(16)).slice(-2);
    return e2 += ">";
  }, u = function(t2) {
    var e2 = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if (-1 !== (t2 = t2.replace(/\s/g, "")).indexOf(">") && (t2 = t2.substr(0, t2.indexOf(">"))), t2.length % 2 && (t2 += "0"), false === e2.test(t2)) return "";
    for (var n2 = "", r2 = 0; r2 < t2.length; r2 += 2) n2 += String.fromCharCode("0x" + (t2[r2] + t2[r2 + 1]));
    return n2;
  }, c = function(t2, e2) {
    e2 = Object.assign({ predictor: 1, colors: 1, bitsPerComponent: 8, columns: 1 }, e2);
    for (var n2, r2, i2 = [], o2 = t2.length; o2--; ) i2[o2] = t2.charCodeAt(o2);
    return n2 = a.adler32cs.from(t2), (r2 = new Deflater(6)).append(new Uint8Array(i2)), t2 = r2.flush(), (i2 = new Uint8Array(t2.length + 6)).set(new Uint8Array([120, 156])), i2.set(t2, 2), i2.set(new Uint8Array([255 & n2, n2 >> 8 & 255, n2 >> 16 & 255, n2 >> 24 & 255]), t2.length + 2), t2 = String.fromCharCode.apply(null, i2);
  }, a.processDataByFilters = function(t2, e2) {
    var n2 = 0, r2 = t2 || "", i2 = [];
    for ("string" == typeof (e2 = e2 || []) && (e2 = [e2]), n2 = 0; n2 < e2.length; n2 += 1) switch (e2[n2]) {
      case "ASCII85Decode":
      case "/ASCII85Decode":
        r2 = s(r2), i2.push("/ASCII85Encode");
        break;
      case "ASCII85Encode":
      case "/ASCII85Encode":
        r2 = o(r2), i2.push("/ASCII85Decode");
        break;
      case "ASCIIHexDecode":
      case "/ASCIIHexDecode":
        r2 = u(r2), i2.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        r2 = h(r2), i2.push("/ASCIIHexDecode");
        break;
      case "FlateEncode":
      case "/FlateEncode":
        r2 = c(r2), i2.push("/FlateDecode");
        break;
      default:
        throw 'The filter: "' + e2[n2] + '" is not implemented';
    }
    return { data: r2, reverseChain: i2.reverse().join(" ") };
  }, /**
     * jsPDF fileloading PlugIn
     * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
  (r = lt.API).loadFile = function(t2, e2, n2) {
    var r2;
    e2 = e2 || true, n2 = n2 || function() {
    };
    try {
      r2 = (function(t3, e3, n3) {
        var r3 = new XMLHttpRequest(), i2 = [], o2 = 0, a2 = function(t4) {
          var e4 = t4.length, n4 = String.fromCharCode;
          for (o2 = 0; o2 < e4; o2 += 1) i2.push(n4(255 & t4.charCodeAt(o2)));
          return i2.join("");
        };
        if (r3.open("GET", t3, !e3), r3.overrideMimeType("text/plain; charset=x-user-defined"), false === e3 && (r3.onload = function() {
          return a2(this.responseText);
        }), r3.send(null), 200 === r3.status) return e3 ? a2(r3.responseText) : void 0;
        console.warn('Unable to load file "' + t3 + '"');
      })(t2, e2);
    } catch (t3) {
      r2 = void 0;
    }
    return r2;
  }, r.loadImageFile = r.loadFile, /**
     * Copyright (c) 2018 Erik Koopmans
     * Released under the MIT License.
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
  i = lt.API, f = "undefined" != typeof window && window || "undefined" != typeof global && global, g = function(t2) {
    var e2 = se(t2);
    return "undefined" === e2 ? "undefined" : "string" === e2 || t2 instanceof String ? "string" : "number" === e2 || t2 instanceof Number ? "number" : "function" === e2 || t2 instanceof Function ? "function" : t2 && t2.constructor === Array ? "array" : t2 && 1 === t2.nodeType ? "element" : "object" === e2 ? "object" : "unknown";
  }, m = function(t2, e2) {
    var n2 = document.createElement(t2);
    if (e2.className && (n2.className = e2.className), e2.innerHTML) {
      n2.innerHTML = e2.innerHTML;
      for (var r2 = n2.getElementsByTagName("script"), i2 = r2.length; 0 < i2--; null) r2[i2].parentNode.removeChild(r2[i2]);
    }
    for (var o2 in e2.style) n2.style[o2] = e2.style[o2];
    return n2;
  }, (((y = function t2(e2) {
    var n2 = Object.assign(t2.convert(Promise.resolve()), JSON.parse(JSON.stringify(t2.template))), r2 = t2.convert(Promise.resolve(), n2);
    return r2 = (r2 = r2.setProgress(1, t2, 1, [t2])).set(e2);
  }).prototype = Object.create(Promise.prototype)).constructor = y).convert = function(t2, e2) {
    return t2.__proto__ = e2 || y.prototype, t2;
  }, y.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {
  } }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: true, x: 0, y: 0, html2canvas: {}, jsPDF: {} } }, y.prototype.from = function(t2, e2) {
    return this.then(function() {
      switch (e2 = e2 || (function(t3) {
        switch (g(t3)) {
          case "string":
            return "string";
          case "element":
            return "canvas" === t3.nodeName.toLowerCase ? "canvas" : "element";
          default:
            return "unknown";
        }
      })(t2)) {
        case "string":
          return this.set({ src: m("div", { innerHTML: t2 }) });
        case "element":
          return this.set({ src: t2 });
        case "canvas":
          return this.set({ canvas: t2 });
        case "img":
          return this.set({ img: t2 });
        default:
          return this.error("Unknown source type.");
      }
    });
  }, y.prototype.to = function(t2) {
    switch (t2) {
      case "container":
        return this.toContainer();
      case "canvas":
        return this.toCanvas();
      case "img":
        return this.toImg();
      case "pdf":
        return this.toPdf();
      default:
        return this.error("Invalid target.");
    }
  }, y.prototype.toContainer = function() {
    return this.thenList([function() {
      return this.prop.src || this.error("Cannot duplicate - no source HTML.");
    }, function() {
      return this.prop.pageSize || this.setPageSize();
    }]).then(function() {
      var t2 = { position: "relative", display: "inline-block", width: Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: "white" }, e2 = (function t3(e3, n2) {
        for (var r2 = 3 === e3.nodeType ? document.createTextNode(e3.nodeValue) : e3.cloneNode(false), i2 = e3.firstChild; i2; i2 = i2.nextSibling) true !== n2 && 1 === i2.nodeType && "SCRIPT" === i2.nodeName || r2.appendChild(t3(i2, n2));
        return 1 === e3.nodeType && ("CANVAS" === e3.nodeName ? (r2.width = e3.width, r2.height = e3.height, r2.getContext("2d").drawImage(e3, 0, 0)) : "TEXTAREA" !== e3.nodeName && "SELECT" !== e3.nodeName || (r2.value = e3.value), r2.addEventListener("load", function() {
          r2.scrollTop = e3.scrollTop, r2.scrollLeft = e3.scrollLeft;
        }, true)), r2;
      })(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      "BODY" === e2.tagName && (t2.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = m("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = m("div", { className: "html2pdf__container", style: t2 }), this.prop.container.appendChild(e2), this.prop.container.firstChild.appendChild(m("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, y.prototype.toCanvas = function() {
    var t2 = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(t2).then(function() {
      var t3 = Object.assign({}, this.opt.html2canvas);
      if (delete t3.onrendered, this.isHtml2CanvasLoaded()) return html2canvas(this.prop.container, t3);
    }).then(function(t3) {
      (this.opt.html2canvas.onrendered || function() {
      })(t3), this.prop.canvas = t3, document.body.removeChild(this.prop.overlay);
    });
  }, y.prototype.toContext2d = function() {
    var t2 = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(t2).then(function() {
      var t3 = this.opt.jsPDF, e2 = Object.assign({ async: true, allowTaint: true, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: true, proxy: null, removeContainer: true, foreignObjectRendering: false, useCORS: false }, this.opt.html2canvas);
      if (delete e2.onrendered, t3.context2d.autoPaging = true, t3.context2d.posX = this.opt.x, t3.context2d.posY = this.opt.y, e2.windowHeight = e2.windowHeight || 0, e2.windowHeight = 0 == e2.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : e2.windowHeight, this.isHtml2CanvasLoaded()) return html2canvas(this.prop.container, e2);
    }).then(function(t3) {
      (this.opt.html2canvas.onrendered || function() {
      })(t3), this.prop.canvas = t3, document.body.removeChild(this.prop.overlay);
    });
  }, y.prototype.toImg = function() {
    return this.thenList([function() {
      return this.prop.canvas || this.toCanvas();
    }]).then(function() {
      var t2 = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = t2;
    });
  }, y.prototype.toPdf = function() {
    return this.thenList([function() {
      return this.toContext2d();
    }]).then(function() {
      this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
    });
  }, y.prototype.output = function(t2, e2, n2) {
    return "img" === (n2 = n2 || "pdf").toLowerCase() || "image" === n2.toLowerCase() ? this.outputImg(t2, e2) : this.outputPdf(t2, e2);
  }, y.prototype.outputPdf = function(t2, e2) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      return this.prop.pdf.output(t2, e2);
    });
  }, y.prototype.outputImg = function(t2, e2) {
    return this.thenList([function() {
      return this.prop.img || this.toImg();
    }]).then(function() {
      switch (t2) {
        case void 0:
        case "img":
          return this.prop.img;
        case "datauristring":
        case "dataurlstring":
          return this.prop.img.src;
        case "datauri":
        case "dataurl":
          return document.location.href = this.prop.img.src;
        default:
          throw 'Image output type "' + t2 + '" is not supported.';
      }
    });
  }, y.prototype.isHtml2CanvasLoaded = function() {
    var t2 = void 0 !== f.html2canvas;
    return t2 || console.error("html2canvas not loaded."), t2;
  }, y.prototype.save = function(t2) {
    if (this.isHtml2CanvasLoaded()) return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).set(t2 ? { filename: t2 } : null).then(function() {
      this.prop.pdf.save(this.opt.filename);
    });
  }, y.prototype.doCallback = function(t2) {
    if (this.isHtml2CanvasLoaded()) return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      this.prop.callback(this.prop.pdf);
    });
  }, y.prototype.set = function(e2) {
    if ("object" !== g(e2)) return this;
    var t2 = Object.keys(e2 || {}).map(function(t3) {
      if (t3 in y.template.prop) return function() {
        this.prop[t3] = e2[t3];
      };
      switch (t3) {
        case "margin":
          return this.setMargin.bind(this, e2.margin);
        case "jsPDF":
          return function() {
            return this.opt.jsPDF = e2.jsPDF, this.setPageSize();
          };
        case "pageSize":
          return this.setPageSize.bind(this, e2.pageSize);
        default:
          return function() {
            this.opt[t3] = e2[t3];
          };
      }
    }, this);
    return this.then(function() {
      return this.thenList(t2);
    });
  }, y.prototype.get = function(e2, n2) {
    return this.then(function() {
      var t2 = e2 in y.template.prop ? this.prop[e2] : this.opt[e2];
      return n2 ? n2(t2) : t2;
    });
  }, y.prototype.setMargin = function(t2) {
    return this.then(function() {
      switch (g(t2)) {
        case "number":
          t2 = [t2, t2, t2, t2];
        case "array":
          if (2 === t2.length && (t2 = [t2[0], t2[1], t2[0], t2[1]]), 4 === t2.length) break;
        default:
          return this.error("Invalid margin array.");
      }
      this.opt.margin = t2;
    }).then(this.setPageSize);
  }, y.prototype.setPageSize = function(t2) {
    function e2(t3, e3) {
      return Math.floor(t3 * e3 / 72 * 96);
    }
    return this.then(function() {
      (t2 = t2 || lt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t2.inner = { width: t2.width - this.opt.margin[1] - this.opt.margin[3], height: t2.height - this.opt.margin[0] - this.opt.margin[2] }, t2.inner.px = { width: e2(t2.inner.width, t2.k), height: e2(t2.inner.height, t2.k) }, t2.inner.ratio = t2.inner.height / t2.inner.width), this.prop.pageSize = t2;
    });
  }, y.prototype.setProgress = function(t2, e2, n2, r2) {
    return null != t2 && (this.progress.val = t2), null != e2 && (this.progress.state = e2), null != n2 && (this.progress.n = n2), null != r2 && (this.progress.stack = r2), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, y.prototype.updateProgress = function(t2, e2, n2, r2) {
    return this.setProgress(t2 ? this.progress.val + t2 : null, e2 || null, n2 ? this.progress.n + n2 : null, r2 ? this.progress.stack.concat(r2) : null);
  }, y.prototype.then = function(t2, e2) {
    var n2 = this;
    return this.thenCore(t2, e2, function(e3, t3) {
      return n2.updateProgress(null, null, 1, [e3]), Promise.prototype.then.call(this, function(t4) {
        return n2.updateProgress(null, e3), t4;
      }).then(e3, t3).then(function(t4) {
        return n2.updateProgress(1), t4;
      });
    });
  }, y.prototype.thenCore = function(t2, e2, n2) {
    n2 = n2 || Promise.prototype.then;
    var r2 = this;
    t2 && (t2 = t2.bind(r2)), e2 && (e2 = e2.bind(r2));
    var i2 = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? r2 : y.convert(Object.assign({}, r2), Promise.prototype), o2 = n2.call(i2, t2, e2);
    return y.convert(o2, r2.__proto__);
  }, y.prototype.thenExternal = function(t2, e2) {
    return Promise.prototype.then.call(this, t2, e2);
  }, y.prototype.thenList = function(t2) {
    var e2 = this;
    return t2.forEach(function(t3) {
      e2 = e2.thenCore(t3);
    }), e2;
  }, y.prototype.catch = function(t2) {
    t2 && (t2 = t2.bind(this));
    var e2 = Promise.prototype.catch.call(this, t2);
    return y.convert(e2, this);
  }, y.prototype.catchExternal = function(t2) {
    return Promise.prototype.catch.call(this, t2);
  }, y.prototype.error = function(t2) {
    return this.then(function() {
      throw new Error(t2);
    });
  }, y.prototype.using = y.prototype.set, y.prototype.saveAs = y.prototype.save, y.prototype.export = y.prototype.output, y.prototype.run = y.prototype.then, lt.getPageSize = function(t2, e2, n2) {
    if ("object" === se(t2)) {
      var r2 = t2;
      t2 = r2.orientation, e2 = r2.unit || e2, n2 = r2.format || n2;
    }
    e2 = e2 || "mm", n2 = n2 || "a4", t2 = ("" + (t2 || "P")).toLowerCase();
    var i2 = ("" + n2).toLowerCase(), o2 = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
    switch (e2) {
      case "pt":
        var a2 = 1;
        break;
      case "mm":
        a2 = 72 / 25.4;
        break;
      case "cm":
        a2 = 72 / 2.54;
        break;
      case "in":
        a2 = 72;
        break;
      case "px":
        a2 = 0.75;
        break;
      case "pc":
      case "em":
        a2 = 12;
        break;
      case "ex":
        a2 = 6;
        break;
      default:
        throw "Invalid unit: " + e2;
    }
    if (o2.hasOwnProperty(i2)) var s2 = o2[i2][1] / a2, l2 = o2[i2][0] / a2;
    else try {
      s2 = n2[1], l2 = n2[0];
    } catch (t3) {
      throw new Error("Invalid format: " + n2);
    }
    if ("p" === t2 || "portrait" === t2) {
      if (t2 = "p", s2 < l2) {
        var h2 = l2;
        l2 = s2, s2 = h2;
      }
    } else {
      if ("l" !== t2 && "landscape" !== t2) throw "Invalid orientation: " + t2;
      t2 = "l", l2 < s2 && (h2 = l2, l2 = s2, s2 = h2);
    }
    return { width: l2, height: s2, unit: e2, k: a2 };
  }, i.html = function(t2, e2) {
    (e2 = e2 || {}).callback = e2.callback || function() {
    }, e2.html2canvas = e2.html2canvas || {}, e2.html2canvas.canvas = e2.html2canvas.canvas || this.canvas, e2.jsPDF = e2.jsPDF || this, e2.jsPDF;
    var n2 = new y(e2);
    return e2.worker ? n2 : n2.from(t2).doCallback();
  }, lt.API.addJS = function(t2) {
    return b = t2, this.internal.events.subscribe("postPutResources", function(t3) {
      v = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (v + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), w = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + b + ")"), this.internal.out(">>"), this.internal.out("endobj");
    }), this.internal.events.subscribe("putCatalog", function() {
      void 0 !== v && void 0 !== w && this.internal.out("/Names <</JavaScript " + v + " 0 R>>");
    }), this;
  }, /**
     * @license
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
  (x = lt.API).events.push(["postPutResources", function() {
    var t2 = this, e2 = /^(\d+) 0 obj$/;
    if (0 < this.outline.root.children.length) for (var n2 = t2.outline.render().split(/\r\n/), r2 = 0; r2 < n2.length; r2++) {
      var i2 = n2[r2], o2 = e2.exec(i2);
      if (null != o2) {
        var a2 = o2[1];
        t2.internal.newObjectDeferredBegin(a2, false);
      }
      t2.internal.write(i2);
    }
    if (this.outline.createNamedDestinations) {
      var s2 = this.internal.pages.length, l2 = [];
      for (r2 = 0; r2 < s2; r2++) {
        var h2 = t2.internal.newObject();
        l2.push(h2);
        var u2 = t2.internal.getPageInfo(r2 + 1);
        t2.internal.write("<< /D[" + u2.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var c2 = t2.internal.newObject();
      for (t2.internal.write("<< /Names [ "), r2 = 0; r2 < l2.length; r2++) t2.internal.write("(page_" + (r2 + 1) + ")" + l2[r2] + " 0 R");
      t2.internal.write(" ] >>", "endobj"), t2.internal.newObject(), t2.internal.write("<< /Dests " + c2 + " 0 R"), t2.internal.write(">>", "endobj");
    }
  }]), x.events.push(["putCatalog", function() {
    0 < this.outline.root.children.length && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + namesOid + " 0 R"));
  }]), x.events.push(["initialized", function() {
    var a2 = this;
    a2.outline = { createNamedDestinations: false, root: { children: [] } }, a2.outline.add = function(t2, e2, n2) {
      var r2 = { title: e2, options: n2, children: [] };
      return null == t2 && (t2 = this.root), t2.children.push(r2), r2;
    }, a2.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = a2, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, a2.outline.genIds_r = function(t2) {
      t2.id = a2.internal.newObjectDeferred();
      for (var e2 = 0; e2 < t2.children.length; e2++) this.genIds_r(t2.children[e2]);
    }, a2.outline.renderRoot = function(t2) {
      this.objStart(t2), this.line("/Type /Outlines"), 0 < t2.children.length && (this.line("/First " + this.makeRef(t2.children[0])), this.line("/Last " + this.makeRef(t2.children[t2.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, t2)), this.objEnd();
    }, a2.outline.renderItems = function(t2) {
      this.ctx.pdf.internal.getCoordinateString;
      for (var e2 = this.ctx.pdf.internal.getVerticalCoordinateString, n2 = 0; n2 < t2.children.length; n2++) {
        var r2 = t2.children[n2];
        this.objStart(r2), this.line("/Title " + this.makeString(r2.title)), this.line("/Parent " + this.makeRef(t2)), 0 < n2 && this.line("/Prev " + this.makeRef(t2.children[n2 - 1])), n2 < t2.children.length - 1 && this.line("/Next " + this.makeRef(t2.children[n2 + 1])), 0 < r2.children.length && (this.line("/First " + this.makeRef(r2.children[0])), this.line("/Last " + this.makeRef(r2.children[r2.children.length - 1])));
        var i2 = this.count = this.count_r({ count: 0 }, r2);
        if (0 < i2 && this.line("/Count " + i2), r2.options && r2.options.pageNumber) {
          var o2 = a2.internal.getPageInfo(r2.options.pageNumber);
          this.line("/Dest [" + o2.objId + " 0 R /XYZ 0 " + e2(0) + " 0]");
        }
        this.objEnd();
      }
      for (n2 = 0; n2 < t2.children.length; n2++) r2 = t2.children[n2], this.renderItems(r2);
    }, a2.outline.line = function(t2) {
      this.ctx.val += t2 + "\r\n";
    }, a2.outline.makeRef = function(t2) {
      return t2.id + " 0 R";
    }, a2.outline.makeString = function(t2) {
      return "(" + a2.internal.pdfEscape(t2) + ")";
    }, a2.outline.objStart = function(t2) {
      this.ctx.val += "\r\n" + t2.id + " 0 obj\r\n<<\r\n";
    }, a2.outline.objEnd = function(t2) {
      this.ctx.val += ">> \r\nendobj\r\n";
    }, a2.outline.count_r = function(t2, e2) {
      for (var n2 = 0; n2 < e2.children.length; n2++) t2.count++, this.count_r(t2, e2.children[n2]);
      return t2.count;
    };
  }]), /**
     * @license
     * 
     * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
     *
     * 
     * ====================================================================
     */
  I = lt.API, C = function() {
    var t2 = "function" == typeof Deflater;
    if (!t2) throw new Error("requires deflate.js for compression");
    return t2;
  }, B = function(t2, e2, n2, r2) {
    var i2 = 5, o2 = E;
    switch (r2) {
      case I.image_compression.FAST:
        i2 = 3, o2 = j;
        break;
      case I.image_compression.MEDIUM:
        i2 = 6, o2 = M;
        break;
      case I.image_compression.SLOW:
        i2 = 9, o2 = O;
    }
    t2 = A(t2, e2, n2, o2);
    var a2 = new Uint8Array(N(i2)), s2 = L(t2), l2 = new Deflater(i2), h2 = l2.append(t2), u2 = l2.flush(), c2 = a2.length + h2.length + u2.length, f2 = new Uint8Array(c2 + 4);
    return f2.set(a2), f2.set(h2, a2.length), f2.set(u2, a2.length + h2.length), f2[c2++] = s2 >>> 24 & 255, f2[c2++] = s2 >>> 16 & 255, f2[c2++] = s2 >>> 8 & 255, f2[c2++] = 255 & s2, I.arrayBufferToBinaryString(f2);
  }, N = function(t2, e2) {
    var n2 = Math.LOG2E * Math.log(32768) - 8 << 4 | 8, r2 = n2 << 8;
    return r2 |= Math.min(3, (e2 - 1 & 255) >> 1) << 6, r2 |= 0, [n2, 255 & (r2 += 31 - r2 % 31)];
  }, L = function(t2, e2) {
    for (var n2, r2 = 1, i2 = 0, o2 = t2.length, a2 = 0; 0 < o2; ) {
      for (o2 -= n2 = e2 < o2 ? e2 : o2; i2 += r2 += t2[a2++], --n2; ) ;
      r2 %= 65521, i2 %= 65521;
    }
    return (i2 << 16 | r2) >>> 0;
  }, A = function(t2, e2, n2, r2) {
    for (var i2, o2, a2, s2 = t2.length / e2, l2 = new Uint8Array(t2.length + s2), h2 = T(), u2 = 0; u2 < s2; u2++) {
      if (a2 = u2 * e2, i2 = t2.subarray(a2, a2 + e2), r2) l2.set(r2(i2, n2, o2), a2 + u2);
      else {
        for (var c2 = 0, f2 = h2.length, p2 = []; c2 < f2; c2++) p2[c2] = h2[c2](i2, n2, o2);
        var d2 = R(p2.concat());
        l2.set(p2[d2], a2 + u2);
      }
      o2 = i2;
    }
    return l2;
  }, S = function(t2, e2, n2) {
    var r2 = Array.apply([], t2);
    return r2.unshift(0), r2;
  }, j = function(t2, e2, n2) {
    var r2, i2 = [], o2 = 0, a2 = t2.length;
    for (i2[0] = 1; o2 < a2; o2++) r2 = t2[o2 - e2] || 0, i2[o2 + 1] = t2[o2] - r2 + 256 & 255;
    return i2;
  }, E = function(t2, e2, n2) {
    var r2, i2 = [], o2 = 0, a2 = t2.length;
    for (i2[0] = 2; o2 < a2; o2++) r2 = n2 && n2[o2] || 0, i2[o2 + 1] = t2[o2] - r2 + 256 & 255;
    return i2;
  }, M = function(t2, e2, n2) {
    var r2, i2, o2 = [], a2 = 0, s2 = t2.length;
    for (o2[0] = 3; a2 < s2; a2++) r2 = t2[a2 - e2] || 0, i2 = n2 && n2[a2] || 0, o2[a2 + 1] = t2[a2] + 256 - (r2 + i2 >>> 1) & 255;
    return o2;
  }, O = function(t2, e2, n2) {
    var r2, i2, o2, a2, s2 = [], l2 = 0, h2 = t2.length;
    for (s2[0] = 4; l2 < h2; l2++) r2 = t2[l2 - e2] || 0, i2 = n2 && n2[l2] || 0, o2 = n2 && n2[l2 - e2] || 0, a2 = q(r2, i2, o2), s2[l2 + 1] = t2[l2] - a2 + 256 & 255;
    return s2;
  }, q = function(t2, e2, n2) {
    var r2 = t2 + e2 - n2, i2 = Math.abs(r2 - t2), o2 = Math.abs(r2 - e2), a2 = Math.abs(r2 - n2);
    return i2 <= o2 && i2 <= a2 ? t2 : o2 <= a2 ? e2 : n2;
  }, T = function() {
    return [S, j, E, M, O];
  }, R = function(t2) {
    for (var e2, n2, r2, i2 = 0, o2 = t2.length; i2 < o2; ) ((e2 = D(t2[i2].slice(1))) < n2 || !n2) && (n2 = e2, r2 = i2), i2++;
    return r2;
  }, D = function(t2) {
    for (var e2 = 0, n2 = t2.length, r2 = 0; e2 < n2; ) r2 += Math.abs(t2[e2++]);
    return r2;
  }, I.processPNG = function(t2, e2, n2, r2, i2) {
    var o2, a2, s2, l2, h2, u2, c2 = this.color_spaces.DEVICE_RGB, f2 = this.decode.FLATE_DECODE, p2 = 8;
    if (this.isArrayBuffer(t2) && (t2 = new Uint8Array(t2)), this.isArrayBufferView(t2)) {
      if ("function" != typeof PNG || "function" != typeof kt) throw new Error("PNG support requires png.js and zlib.js");
      if (t2 = (o2 = new PNG(t2)).imgData, p2 = o2.bits, c2 = o2.colorSpace, l2 = o2.colors, -1 !== [4, 6].indexOf(o2.colorType)) {
        if (8 === o2.bits) for (var d2, g2 = (_2 = 32 == o2.pixelBitlength ? new Uint32Array(o2.decodePixels().buffer) : 16 == o2.pixelBitlength ? new Uint16Array(o2.decodePixels().buffer) : new Uint8Array(o2.decodePixels().buffer)).length, m2 = new Uint8Array(g2 * o2.colors), y2 = new Uint8Array(g2), v2 = o2.pixelBitlength - o2.bits, w2 = 0, b2 = 0; w2 < g2; w2++) {
          for (x2 = _2[w2], d2 = 0; d2 < v2; ) m2[b2++] = x2 >>> d2 & 255, d2 += o2.bits;
          y2[w2] = x2 >>> d2 & 255;
        }
        if (16 === o2.bits) {
          g2 = (_2 = new Uint32Array(o2.decodePixels().buffer)).length, m2 = new Uint8Array(g2 * (32 / o2.pixelBitlength) * o2.colors), y2 = new Uint8Array(g2 * (32 / o2.pixelBitlength));
          for (var x2, N2 = 1 < o2.colors, L2 = b2 = w2 = 0; w2 < g2; ) x2 = _2[w2++], m2[b2++] = x2 >>> 0 & 255, N2 && (m2[b2++] = x2 >>> 16 & 255, x2 = _2[w2++], m2[b2++] = x2 >>> 0 & 255), y2[L2++] = x2 >>> 16 & 255;
          p2 = 8;
        }
        r2 !== I.image_compression.NONE && C() ? (t2 = B(m2, o2.width * o2.colors, o2.colors, r2), u2 = B(y2, o2.width, 1, r2)) : (t2 = m2, u2 = y2, f2 = null);
      }
      if (3 === o2.colorType && (c2 = this.color_spaces.INDEXED, h2 = o2.palette, o2.transparency.indexed)) {
        var A2 = o2.transparency.indexed, S2 = 0;
        for (w2 = 0, g2 = A2.length; w2 < g2; ++w2) S2 += A2[w2];
        if ((S2 /= 255) == g2 - 1 && -1 !== A2.indexOf(0)) s2 = [A2.indexOf(0)];
        else if (S2 !== g2) {
          var _2 = o2.decodePixels();
          for (y2 = new Uint8Array(_2.length), w2 = 0, g2 = _2.length; w2 < g2; w2++) y2[w2] = A2[_2[w2]];
          u2 = B(y2, o2.width, 1);
        }
      }
      var F2 = (function(t3) {
        var e3;
        switch (t3) {
          case I.image_compression.FAST:
            e3 = 11;
            break;
          case I.image_compression.MEDIUM:
            e3 = 13;
            break;
          case I.image_compression.SLOW:
            e3 = 14;
            break;
          default:
            e3 = 12;
        }
        return e3;
      })(r2);
      return a2 = f2 === this.decode.FLATE_DECODE ? "/Predictor " + F2 + " /Colors " + l2 + " /BitsPerComponent " + p2 + " /Columns " + o2.width : "/Colors " + l2 + " /BitsPerComponent " + p2 + " /Columns " + o2.width, (this.isArrayBuffer(t2) || this.isArrayBufferView(t2)) && (t2 = this.arrayBufferToBinaryString(t2)), (u2 && this.isArrayBuffer(u2) || this.isArrayBufferView(u2)) && (u2 = this.arrayBufferToBinaryString(u2)), this.createImageInfo(t2, o2.width, o2.height, c2, p2, f2, e2, n2, a2, s2, h2, u2, F2);
    }
    throw new Error("Unsupported PNG image data, try using JPEG instead.");
  }, /**
     * @license
     * Copyright (c) 2017 Aras Abbasi 
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
  (U = lt.API).processGIF89A = function(t2, e2, n2, r2, i2) {
    var o2 = new At(t2), a2 = o2.width, s2 = o2.height, l2 = [];
    o2.decodeAndBlitFrameRGBA(0, l2);
    var h2 = { data: l2, width: a2, height: s2 }, u2 = new _t(100).encode(h2, 100);
    return U.processJPEG.call(this, u2, e2, n2, r2);
  }, U.processGIF87A = U.processGIF89A, /**
     * Copyright (c) 2018 Aras Abbasi 
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
  (z = lt.API).processBMP = function(t2, e2, n2, r2, i2) {
    var o2 = new Ft(t2, false), a2 = o2.width, s2 = o2.height, l2 = { data: o2.getData(), width: a2, height: s2 }, h2 = new _t(100).encode(l2, 100);
    return z.processJPEG.call(this, h2, e2, n2, r2);
  }, lt.API.setLanguage = function(t2) {
    return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = false), void 0 !== { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "FYRO Macedonian", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[t2] && (this.internal.languageSettings.languageCode = t2, false === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
      this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
    }), this.internal.languageSettings.isSubscribed = true)), this;
  }, /** @license
     * MIT license.
     * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
     *               2014 Diego Casorran, https://github.com/diegocr
     *
     * 
     * ====================================================================
     */
  H = lt.API, W = H.getCharWidthsArray = function(t2, e2) {
    var n2, r2, i2, o2 = (e2 = e2 || {}).font || this.internal.getFont(), a2 = e2.fontSize || this.internal.getFontSize(), s2 = e2.charSpace || this.internal.getCharSpace(), l2 = e2.widths ? e2.widths : o2.metadata.Unicode.widths, h2 = l2.fof ? l2.fof : 1, u2 = e2.kerning ? e2.kerning : o2.metadata.Unicode.kerning, c2 = u2.fof ? u2.fof : 1, f2 = 0, p2 = l2[0] || h2, d2 = [];
    for (n2 = 0, r2 = t2.length; n2 < r2; n2++) i2 = t2.charCodeAt(n2), "function" == typeof o2.metadata.widthOfString ? d2.push((o2.metadata.widthOfGlyph(o2.metadata.characterToGlyph(i2)) + s2 * (1e3 / a2) || 0) / 1e3) : d2.push((l2[i2] || p2) / h2 + (u2[i2] && u2[i2][f2] || 0) / c2), f2 = i2;
    return d2;
  }, V = H.getArraySum = function(t2) {
    for (var e2 = t2.length, n2 = 0; e2; ) n2 += t2[--e2];
    return n2;
  }, G = H.getStringUnitWidth = function(t2, e2) {
    var n2 = (e2 = e2 || {}).fontSize || this.internal.getFontSize(), r2 = e2.font || this.internal.getFont(), i2 = e2.charSpace || this.internal.getCharSpace();
    return "function" == typeof r2.metadata.widthOfString ? r2.metadata.widthOfString(t2, n2, i2) / n2 : V(W.apply(this, arguments));
  }, Y = function(t2, e2, n2, r2) {
    for (var i2 = [], o2 = 0, a2 = t2.length, s2 = 0; o2 !== a2 && s2 + e2[o2] < n2; ) s2 += e2[o2], o2++;
    i2.push(t2.slice(0, o2));
    var l2 = o2;
    for (s2 = 0; o2 !== a2; ) s2 + e2[o2] > r2 && (i2.push(t2.slice(l2, o2)), s2 = 0, l2 = o2), s2 += e2[o2], o2++;
    return l2 !== o2 && i2.push(t2.slice(l2, o2)), i2;
  }, J = function(t2, e2, n2) {
    n2 || (n2 = {});
    var r2, i2, o2, a2, s2, l2, h2 = [], u2 = [h2], c2 = n2.textIndent || 0, f2 = 0, p2 = 0, d2 = t2.split(" "), g2 = W.apply(this, [" ", n2])[0];
    if (l2 = -1 === n2.lineIndent ? d2[0].length + 2 : n2.lineIndent || 0) {
      var m2 = Array(l2).join(" "), y2 = [];
      d2.map(function(t3) {
        1 < (t3 = t3.split(/\s*\n/)).length ? y2 = y2.concat(t3.map(function(t4, e3) {
          return (e3 && t4.length ? "\n" : "") + t4;
        })) : y2.push(t3[0]);
      }), d2 = y2, l2 = G.apply(this, [m2, n2]);
    }
    for (o2 = 0, a2 = d2.length; o2 < a2; o2++) {
      var v2 = 0;
      if (r2 = d2[o2], l2 && "\n" == r2[0] && (r2 = r2.substr(1), v2 = 1), i2 = W.apply(this, [r2, n2]), e2 < c2 + f2 + (p2 = V(i2)) || v2) {
        if (e2 < p2) {
          for (s2 = Y.apply(this, [r2, i2, e2 - (c2 + f2), e2]), h2.push(s2.shift()), h2 = [s2.pop()]; s2.length; ) u2.push([s2.shift()]);
          p2 = V(i2.slice(r2.length - (h2[0] ? h2[0].length : 0)));
        } else h2 = [r2];
        u2.push(h2), c2 = p2 + l2, f2 = g2;
      } else h2.push(r2), c2 += f2 + p2, f2 = g2;
    }
    if (l2) var w2 = function(t3, e3) {
      return (e3 ? m2 : "") + t3.join(" ");
    };
    else w2 = function(t3) {
      return t3.join(" ");
    };
    return u2.map(w2);
  }, H.splitTextToSize = function(t2, e2, n2) {
    var r2, i2 = (n2 = n2 || {}).fontSize || this.internal.getFontSize(), o2 = function(t3) {
      var e3 = { 0: 1 }, n3 = {};
      if (t3.widths && t3.kerning) return { widths: t3.widths, kerning: t3.kerning };
      var r3 = this.internal.getFont(t3.fontName, t3.fontStyle), i3 = "Unicode";
      return r3.metadata[i3] ? { widths: r3.metadata[i3].widths || e3, kerning: r3.metadata[i3].kerning || n3 } : { font: r3.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
    }.call(this, n2);
    r2 = Array.isArray(t2) ? t2 : t2.split(/\r?\n/);
    var a2 = 1 * this.internal.scaleFactor * e2 / i2;
    o2.textIndent = n2.textIndent ? 1 * n2.textIndent * this.internal.scaleFactor / i2 : 0, o2.lineIndent = n2.lineIndent;
    var s2, l2, h2 = [];
    for (s2 = 0, l2 = r2.length; s2 < l2; s2++) h2 = h2.concat(J.apply(this, [r2[s2], a2, o2]));
    return h2;
  }, /** @license
     jsPDF standard_fonts_metrics plugin
     * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
     * MIT license.
     * 
     * ====================================================================
     */
  X = lt.API, Z = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: (K = function(t2) {
    for (var e2 = "klmnopqrstuvwxyz", n2 = {}, r2 = 0; r2 < e2.length; r2++) n2[e2[r2]] = "0123456789abcdef"[r2];
    var i2, o2, a2, s2, l2, h2 = {}, u2 = 1, c2 = h2, f2 = [], p2 = "", d2 = "", g2 = t2.length - 1;
    for (r2 = 1; r2 != g2; ) l2 = t2[r2], r2 += 1, "'" == l2 ? o2 = o2 ? (s2 = o2.join(""), i2) : [] : o2 ? o2.push(l2) : "{" == l2 ? (f2.push([c2, s2]), c2 = {}, s2 = i2) : "}" == l2 ? ((a2 = f2.pop())[0][a2[1]] = c2, s2 = i2, c2 = a2[0]) : "-" == l2 ? u2 = -1 : s2 === i2 ? n2.hasOwnProperty(l2) ? (p2 += n2[l2], s2 = parseInt(p2, 16) * u2, u2 = 1, p2 = "") : p2 += l2 : n2.hasOwnProperty(l2) ? (d2 += n2[l2], c2[s2] = parseInt(d2, 16) * u2, u2 = 1, s2 = i2, d2 = "") : d2 += l2;
    return h2;
  })("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, Q = { Unicode: { Courier: Z, "Courier-Bold": Z, "Courier-BoldOblique": Z, "Courier-Oblique": Z, Helvetica: Z, "Helvetica-Bold": Z, "Helvetica-BoldOblique": Z, "Helvetica-Oblique": Z, "Times-Roman": Z, "Times-Bold": Z, "Times-BoldItalic": Z, "Times-Italic": Z } }, $ = { Unicode: { "Courier-Oblique": K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": K("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": K("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": K("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: K("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: K("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": K("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: K("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": K("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": K("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": K("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } }, X.events.push(["addFont", function(t2) {
    var e2, n2, r2, i2 = t2.font, o2 = "Unicode";
    (e2 = $[o2][i2.postScriptName]) && ((n2 = i2.metadata[o2] ? i2.metadata[o2] : i2.metadata[o2] = {}).widths = e2.widths, n2.kerning = e2.kerning), (r2 = Q[o2][i2.postScriptName]) && ((n2 = i2.metadata[o2] ? i2.metadata[o2] : i2.metadata[o2] = {}).encoding = r2).codePages && r2.codePages.length && (i2.encoding = r2.codePages[0]);
  }]), /**
     * @license
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
  tt = lt, "undefined" != typeof self && self || "undefined" != typeof global && global || "undefined" != typeof window && window || Function("return this")(), tt.API.events.push(["addFont", function(t2) {
    var e2 = t2.font, n2 = t2.instance;
    if (void 0 !== n2 && n2.existsFileInVFS(e2.postScriptName)) {
      var r2 = n2.getFileFromVFS(e2.postScriptName);
      if ("string" != typeof r2) throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + e2.postScriptName + "').");
      e2.metadata = tt.API.TTFFont.open(e2.postScriptName, e2.fontName, r2, e2.encoding), e2.metadata.Unicode = e2.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, e2.metadata.glyIdsUsed = [0];
    } else if (false === e2.isStandardFont) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + e2.postScriptName + "').");
  }]), /** @license
     * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
     * 
     * 
     * ====================================================================
     */
  (et = lt.API).addSvg = function(t2, e2, n2, r2, i2) {
    if (void 0 === e2 || void 0 === n2) throw new Error("addSVG needs values for 'x' and 'y'");
    function o2(t3) {
      for (var e3 = parseFloat(t3[1]), n3 = parseFloat(t3[2]), r3 = [], i3 = 3, o3 = t3.length; i3 < o3; ) "c" === t3[i3] ? (r3.push([parseFloat(t3[i3 + 1]), parseFloat(t3[i3 + 2]), parseFloat(t3[i3 + 3]), parseFloat(t3[i3 + 4]), parseFloat(t3[i3 + 5]), parseFloat(t3[i3 + 6])]), i3 += 7) : "l" === t3[i3] ? (r3.push([parseFloat(t3[i3 + 1]), parseFloat(t3[i3 + 2])]), i3 += 3) : i3 += 1;
      return [e3, n3, r3];
    }
    var a2, s2, l2, h2, u2, c2, f2, p2, d2 = (h2 = document, p2 = h2.createElement("iframe"), u2 = ".jsPDF_sillysvg_iframe {display:none;position:absolute;}", (f2 = (c2 = h2).createElement("style")).type = "text/css", f2.styleSheet ? f2.styleSheet.cssText = u2 : f2.appendChild(c2.createTextNode(u2)), c2.getElementsByTagName("head")[0].appendChild(f2), p2.name = "childframe", p2.setAttribute("width", 0), p2.setAttribute("height", 0), p2.setAttribute("frameborder", "0"), p2.setAttribute("scrolling", "no"), p2.setAttribute("seamless", "seamless"), p2.setAttribute("class", "jsPDF_sillysvg_iframe"), h2.body.appendChild(p2), p2), g2 = (a2 = t2, (l2 = ((s2 = d2).contentWindow || s2.contentDocument).document).write(a2), l2.close(), l2.getElementsByTagName("svg")[0]), m2 = [1, 1], y2 = parseFloat(g2.getAttribute("width")), v2 = parseFloat(g2.getAttribute("height"));
    y2 && v2 && (r2 && i2 ? m2 = [r2 / y2, i2 / v2] : r2 ? m2 = [r2 / y2, r2 / y2] : i2 && (m2 = [i2 / v2, i2 / v2]));
    var w2, b2, x2, N2, L2 = g2.childNodes;
    for (w2 = 0, b2 = L2.length; w2 < b2; w2++) (x2 = L2[w2]).tagName && "PATH" === x2.tagName.toUpperCase() && ((N2 = o2(x2.getAttribute("d").split(" ")))[0] = N2[0] * m2[0] + e2, N2[1] = N2[1] * m2[1] + n2, this.lines.call(this, N2[2], N2[0], N2[1], m2));
    return this;
  }, et.addSVG = et.addSvg, et.addSvgAsImage = function(t2, e2, n2, r2, i2, o2, a2, s2) {
    if (isNaN(e2) || isNaN(n2)) throw console.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
    if (isNaN(r2) || isNaN(i2)) throw console.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
    var l2 = document.createElement("canvas");
    l2.width = r2, l2.height = i2;
    var h2 = l2.getContext("2d");
    return h2.fillStyle = "#fff", h2.fillRect(0, 0, l2.width, l2.height), canvg(l2, t2, { ignoreMouse: true, ignoreAnimation: true, ignoreDimensions: true, ignoreClear: true }), this.addImage(l2.toDataURL("image/jpeg", 1), e2, n2, r2, i2, a2, s2), this;
  }, lt.API.putTotalPages = function(t2) {
    var e2, n2 = 0;
    n2 = parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e2 = new RegExp(t2, "g"), this.internal.getNumberOfPages()) : (e2 = new RegExp(this.pdfEscape16(t2, this.internal.getFont()), "g"), this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
    for (var r2 = 1; r2 <= this.internal.getNumberOfPages(); r2++) for (var i2 = 0; i2 < this.internal.pages[r2].length; i2++) this.internal.pages[r2][i2] = this.internal.pages[r2][i2].replace(e2, n2);
    return this;
  }, lt.API.viewerPreferences = function(t2, e2) {
    var n2;
    t2 = t2 || {}, e2 = e2 || false;
    var r2, i2, o2 = { HideToolbar: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, HideMenubar: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, FitWindow: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, CenterWindow: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: false, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: false, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: false, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: false, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: false, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: false, valueSet: null, pdfVersion: 1.7 } }, a2 = Object.keys(o2), s2 = [], l2 = 0, h2 = 0, u2 = 0, c2 = true;
    function f2(t3, e3) {
      var n3, r3 = false;
      for (n3 = 0; n3 < t3.length; n3 += 1) t3[n3] === e3 && (r3 = true);
      return r3;
    }
    if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(o2)), this.internal.viewerpreferences.isSubscribed = false), n2 = this.internal.viewerpreferences.configuration, "reset" === t2 || true === e2) {
      var p2 = a2.length;
      for (u2 = 0; u2 < p2; u2 += 1) n2[a2[u2]].value = n2[a2[u2]].defaultValue, n2[a2[u2]].explicitSet = false;
    }
    if ("object" === se(t2)) {
      for (r2 in t2) if (i2 = t2[r2], f2(a2, r2) && void 0 !== i2) {
        if ("boolean" === n2[r2].type && "boolean" == typeof i2) n2[r2].value = i2;
        else if ("name" === n2[r2].type && f2(n2[r2].valueSet, i2)) n2[r2].value = i2;
        else if ("integer" === n2[r2].type && Number.isInteger(i2)) n2[r2].value = i2;
        else if ("array" === n2[r2].type) {
          for (l2 = 0; l2 < i2.length; l2 += 1) if (c2 = true, 1 === i2[l2].length && "number" == typeof i2[l2][0]) s2.push(String(i2[l2] - 1));
          else if (1 < i2[l2].length) {
            for (h2 = 0; h2 < i2[l2].length; h2 += 1) "number" != typeof i2[l2][h2] && (c2 = false);
            true === c2 && s2.push([i2[l2][0] - 1, i2[l2][1] - 1].join(" "));
          }
          n2[r2].value = "[" + s2.join(" ") + "]";
        } else n2[r2].value = n2[r2].defaultValue;
        n2[r2].explicitSet = true;
      }
    }
    return false === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
      var t3, e3 = [];
      for (t3 in n2) true === n2[t3].explicitSet && ("name" === n2[t3].type ? e3.push("/" + t3 + " /" + n2[t3].value) : e3.push("/" + t3 + " " + n2[t3].value));
      0 !== e3.length && this.internal.write("/ViewerPreferences\n<<\n" + e3.join("\n") + "\n>>");
    }), this.internal.viewerpreferences.isSubscribed = true), this.internal.viewerpreferences.configuration = n2, this;
  }, /** ==================================================================== 
     * jsPDF XMP metadata plugin
     * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
     * 
     * 
     * ====================================================================
     */
  nt = lt.API, ot = it = rt = "", nt.addMetadata = function(t2, e2) {
    return it = e2 || "http://jspdf.default.namespaceuri/", rt = t2, this.internal.events.subscribe("postPutResources", function() {
      if (rt) {
        var t3 = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + it + '"><jspdf:metadata>', e3 = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), n2 = unescape(encodeURIComponent(t3)), r2 = unescape(encodeURIComponent(rt)), i2 = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), o2 = unescape(encodeURIComponent("</x:xmpmeta>")), a2 = n2.length + r2.length + i2.length + e3.length + o2.length;
        ot = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + a2 + " >>"), this.internal.write("stream"), this.internal.write(e3 + n2 + r2 + i2 + o2), this.internal.write("endstream"), this.internal.write("endobj");
      } else ot = "";
    }), this.internal.events.subscribe("putCatalog", function() {
      ot && this.internal.write("/Metadata " + ot + " 0 R");
    }), this;
  }, (function(f2, t2) {
    var e2 = f2.API;
    var m2 = e2.pdfEscape16 = function(t3, e3) {
      for (var n2, r2 = e3.metadata.Unicode.widths, i2 = ["", "0", "00", "000", "0000"], o2 = [""], a2 = 0, s2 = t3.length; a2 < s2; ++a2) {
        if (n2 = e3.metadata.characterToGlyph(t3.charCodeAt(a2)), e3.metadata.glyIdsUsed.push(n2), e3.metadata.toUnicode[n2] = t3.charCodeAt(a2), -1 == r2.indexOf(n2) && (r2.push(n2), r2.push([parseInt(e3.metadata.widthOfGlyph(n2), 10)])), "0" == n2) return o2.join("");
        n2 = n2.toString(16), o2.push(i2[4 - n2.length], n2);
      }
      return o2.join("");
    }, p2 = function(t3) {
      var e3, n2, r2, i2, o2, a2, s2;
      for (o2 = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", r2 = [], a2 = 0, s2 = (n2 = Object.keys(t3).sort(function(t4, e4) {
        return t4 - e4;
      })).length; a2 < s2; a2++) e3 = n2[a2], 100 <= r2.length && (o2 += "\n" + r2.length + " beginbfchar\n" + r2.join("\n") + "\nendbfchar", r2 = []), i2 = ("0000" + t3[e3].toString(16)).slice(-4), e3 = ("0000" + (+e3).toString(16)).slice(-4), r2.push("<" + e3 + "><" + i2 + ">");
      return r2.length && (o2 += "\n" + r2.length + " beginbfchar\n" + r2.join("\n") + "\nendbfchar\n"), o2 += "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
    };
    e2.events.push(["putFont", function(t3) {
      !(function(t4, e3, n2, r2) {
        if (t4.metadata instanceof f2.API.TTFFont && "Identity-H" === t4.encoding) {
          for (var i2 = t4.metadata.Unicode.widths, o2 = t4.metadata.subset.encode(t4.metadata.glyIdsUsed, 1), a2 = "", s2 = 0; s2 < o2.length; s2++) a2 += String.fromCharCode(o2[s2]);
          var l2 = n2();
          r2({ data: a2, addLength1: true }), e3("endobj");
          var h3 = n2();
          r2({ data: p2(t4.metadata.toUnicode), addLength1: true }), e3("endobj");
          var u2 = n2();
          e3("<<"), e3("/Type /FontDescriptor"), e3("/FontName /" + t4.fontName), e3("/FontFile2 " + l2 + " 0 R"), e3("/FontBBox " + f2.API.PDFObject.convert(t4.metadata.bbox)), e3("/Flags " + t4.metadata.flags), e3("/StemV " + t4.metadata.stemV), e3("/ItalicAngle " + t4.metadata.italicAngle), e3("/Ascent " + t4.metadata.ascender), e3("/Descent " + t4.metadata.decender), e3("/CapHeight " + t4.metadata.capHeight), e3(">>"), e3("endobj");
          var c2 = n2();
          e3("<<"), e3("/Type /Font"), e3("/BaseFont /" + t4.fontName), e3("/FontDescriptor " + u2 + " 0 R"), e3("/W " + f2.API.PDFObject.convert(i2)), e3("/CIDToGIDMap /Identity"), e3("/DW 1000"), e3("/Subtype /CIDFontType2"), e3("/CIDSystemInfo"), e3("<<"), e3("/Supplement 0"), e3("/Registry (Adobe)"), e3("/Ordering (" + t4.encoding + ")"), e3(">>"), e3(">>"), e3("endobj"), t4.objectNumber = n2(), e3("<<"), e3("/Type /Font"), e3("/Subtype /Type0"), e3("/ToUnicode " + h3 + " 0 R"), e3("/BaseFont /" + t4.fontName), e3("/Encoding /" + t4.encoding), e3("/DescendantFonts [" + c2 + " 0 R]"), e3(">>"), e3("endobj"), t4.isAlreadyPutted = true;
        }
      })(t3.font, t3.out, t3.newObject, t3.putStream);
    }]);
    e2.events.push(["putFont", function(t3) {
      !(function(t4, e3, n2, r2) {
        if (t4.metadata instanceof f2.API.TTFFont && "WinAnsiEncoding" === t4.encoding) {
          t4.metadata.Unicode.widths;
          for (var i2 = t4.metadata.rawData, o2 = "", a2 = 0; a2 < i2.length; a2++) o2 += String.fromCharCode(i2[a2]);
          var s2 = n2();
          r2({ data: o2, addLength1: true }), e3("endobj");
          var l2 = n2();
          r2({ data: p2(t4.metadata.toUnicode), addLength1: true }), e3("endobj");
          var h3 = n2();
          for (e3("<<"), e3("/Descent " + t4.metadata.decender), e3("/CapHeight " + t4.metadata.capHeight), e3("/StemV " + t4.metadata.stemV), e3("/Type /FontDescriptor"), e3("/FontFile2 " + s2 + " 0 R"), e3("/Flags 96"), e3("/FontBBox " + f2.API.PDFObject.convert(t4.metadata.bbox)), e3("/FontName /" + t4.fontName), e3("/ItalicAngle " + t4.metadata.italicAngle), e3("/Ascent " + t4.metadata.ascender), e3(">>"), e3("endobj"), t4.objectNumber = n2(), a2 = 0; a2 < t4.metadata.hmtx.widths.length; a2++) t4.metadata.hmtx.widths[a2] = parseInt(t4.metadata.hmtx.widths[a2] * (1e3 / t4.metadata.head.unitsPerEm));
          e3("<</Subtype/TrueType/Type/Font/ToUnicode " + l2 + " 0 R/BaseFont/" + t4.fontName + "/FontDescriptor " + h3 + " 0 R/Encoding/" + t4.encoding + " /FirstChar 29 /LastChar 255 /Widths " + f2.API.PDFObject.convert(t4.metadata.hmtx.widths) + ">>"), e3("endobj"), t4.isAlreadyPutted = true;
        }
      })(t3.font, t3.out, t3.newObject, t3.putStream);
    }]);
    var h2 = function(t3) {
      var e3, n2, r2 = t3.text || "", i2 = t3.x, o2 = t3.y, a2 = t3.options || {}, s2 = t3.mutex || {}, l2 = s2.pdfEscape, h3 = s2.activeFontKey, u2 = s2.fonts, c2 = (s2.activeFontSize, ""), f3 = 0, p3 = "", d2 = u2[n2 = h3].encoding;
      if ("Identity-H" !== u2[n2].encoding) return { text: r2, x: i2, y: o2, options: a2, mutex: s2 };
      for (p3 = r2, n2 = h3, "[object Array]" === Object.prototype.toString.call(r2) && (p3 = r2[0]), f3 = 0; f3 < p3.length; f3 += 1) u2[n2].metadata.hasOwnProperty("cmap") && (e3 = u2[n2].metadata.cmap.unicode.codeMap[p3[f3].charCodeAt(0)]), e3 ? c2 += p3[f3] : p3[f3].charCodeAt(0) < 256 && u2[n2].metadata.hasOwnProperty("Unicode") ? c2 += p3[f3] : c2 += "";
      var g2 = "";
      return parseInt(n2.slice(1)) < 14 || "WinAnsiEncoding" === d2 ? g2 = (function(t4) {
        for (var e4 = "", n3 = 0; n3 < t4.length; n3++) e4 += "" + t4.charCodeAt(n3).toString(16);
        return e4;
      })(l2(c2, n2)) : "Identity-H" === d2 && (g2 = m2(c2, u2[n2])), s2.isHex = true, { text: g2, x: i2, y: o2, options: a2, mutex: s2 };
    };
    e2.events.push(["postProcessText", function(t3) {
      var e3 = t3.text || "", n2 = t3.x, r2 = t3.y, i2 = t3.options, o2 = t3.mutex, a2 = (i2.lang, []), s2 = { text: e3, x: n2, y: r2, options: i2, mutex: o2 };
      if ("[object Array]" === Object.prototype.toString.call(e3)) {
        var l2 = 0;
        for (l2 = 0; l2 < e3.length; l2 += 1) "[object Array]" === Object.prototype.toString.call(e3[l2]) && 3 === e3[l2].length ? a2.push([h2(Object.assign({}, s2, { text: e3[l2][0] })).text, e3[l2][1], e3[l2][2]]) : a2.push(h2(Object.assign({}, s2, { text: e3[l2] })).text);
        t3.text = a2;
      } else t3.text = h2(Object.assign({}, s2, { text: e3 })).text;
    }]);
  })(lt, "undefined" != typeof self && self || "undefined" != typeof global && global || "undefined" != typeof window && window || Function("return this")()), at = lt.API, st = function(t2) {
    return void 0 !== t2 && (void 0 === t2.vFS && (t2.vFS = {}), true);
  }, at.existsFileInVFS = function(t2) {
    return !!st(this.internal) && void 0 !== this.internal.vFS[t2];
  }, at.addFileToVFS = function(t2, e2) {
    return st(this.internal), this.internal.vFS[t2] = e2, this;
  }, at.getFileFromVFS = function(t2) {
    return st(this.internal), void 0 !== this.internal.vFS[t2] ? this.internal.vFS[t2] : null;
  }, lt.API.addHTML = function(t2, d2, g2, s2, m2) {
    if ("undefined" == typeof html2canvas && "undefined" == typeof rasterizeHTML) throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");
    "number" != typeof d2 && (s2 = d2, m2 = g2), "function" == typeof s2 && (m2 = s2, s2 = null), "function" != typeof m2 && (m2 = function() {
    });
    var e2 = this.internal, y2 = e2.scaleFactor, v2 = e2.pageSize.getWidth(), w2 = e2.pageSize.getHeight();
    if ((s2 = s2 || {}).onrendered = function(l2) {
      d2 = parseInt(d2) || 0, g2 = parseInt(g2) || 0;
      var t3 = s2.dim || {}, h2 = Object.assign({ top: 0, right: 0, bottom: 0, left: 0, useFor: "content" }, s2.margin), e3 = t3.h || Math.min(w2, l2.height / y2), u2 = t3.w || Math.min(v2, l2.width / y2) - d2, c2 = s2.format || "JPEG", f2 = s2.imageCompression || "SLOW";
      if (l2.height > w2 - h2.top - h2.bottom && s2.pagesplit) {
        var p2 = function(t4, e4, n4, r3, i3) {
          var o3 = document.createElement("canvas");
          o3.height = i3, o3.width = r3;
          var a2 = o3.getContext("2d");
          return a2.mozImageSmoothingEnabled = false, a2.webkitImageSmoothingEnabled = false, a2.msImageSmoothingEnabled = false, a2.imageSmoothingEnabled = false, a2.fillStyle = s2.backgroundColor || "#ffffff", a2.fillRect(0, 0, r3, i3), a2.drawImage(t4, e4, n4, r3, i3, 0, 0, r3, i3), o3;
        }, n3 = function() {
          for (var t4, e4, n4 = 0, r3 = 0, i3 = {}, o3 = false; ; ) {
            var a2;
            if (r3 = 0, i3.top = 0 !== n4 ? h2.top : g2, i3.left = 0 !== n4 ? h2.left : d2, o3 = (v2 - h2.left - h2.right) * y2 < l2.width, "content" === h2.useFor ? 0 === n4 ? (t4 = Math.min((v2 - h2.left) * y2, l2.width), e4 = Math.min((w2 - h2.top) * y2, l2.height - n4)) : (t4 = Math.min(v2 * y2, l2.width), e4 = Math.min(w2 * y2, l2.height - n4), i3.top = 0) : (t4 = Math.min((v2 - h2.left - h2.right) * y2, l2.width), e4 = Math.min((w2 - h2.bottom - h2.top) * y2, l2.height - n4)), o3) for (; ; ) {
              "content" === h2.useFor && (0 === r3 ? t4 = Math.min((v2 - h2.left) * y2, l2.width) : (t4 = Math.min(v2 * y2, l2.width - r3), i3.left = 0));
              var s3 = [a2 = p2(l2, r3, n4, t4, e4), i3.left, i3.top, a2.width / y2, a2.height / y2, c2, null, f2];
              if (this.addImage.apply(this, s3), (r3 += t4) >= l2.width) break;
              this.addPage();
            }
            else s3 = [a2 = p2(l2, 0, n4, t4, e4), i3.left, i3.top, a2.width / y2, a2.height / y2, c2, null, f2], this.addImage.apply(this, s3);
            if ((n4 += e4) >= l2.height) break;
            this.addPage();
          }
          m2(u2, n4, null, s3);
        }.bind(this);
        if ("CANVAS" === l2.nodeName) {
          var r2 = new Image();
          r2.onload = n3, r2.src = l2.toDataURL("image/png"), l2 = r2;
        } else n3();
      } else {
        var i2 = Math.random().toString(35), o2 = [l2, d2, g2, u2, e3, c2, i2, f2];
        this.addImage.apply(this, o2), m2(u2, e3, i2, o2);
      }
    }.bind(this), "undefined" != typeof html2canvas && !s2.rstz) return html2canvas(t2, s2);
    if ("undefined" == typeof rasterizeHTML) return null;
    var n2 = "drawDocument";
    return "string" == typeof t2 && (n2 = /^http/.test(t2) ? "drawURL" : "drawHTML"), s2.width = s2.width || v2 * y2, rasterizeHTML[n2](t2, void 0, s2).then(function(t3) {
      s2.onrendered(t3.image);
    }, function(t3) {
      m2(null, t3);
    });
  }, /**
     * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
     * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
     *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
     *               2014 Diego Casorran, https://github.com/diegocr
     *               2014 Daniel Husar, https://github.com/danielhusar
     *               2014 Wolfgang Gassler, https://github.com/woolfg
     *               2014 Steven Spungin, https://github.com/flamenco
     *
     * @license
     * 
     * ====================================================================
     */
  (function(t2) {
    var P2, k2, i2, a2, s2, l2, h2, u2, I2, w2, f2, c2, p2, n2, C2, B2, d2, g2, m2, j2;
    P2 = /* @__PURE__ */ (function() {
      return function(t3) {
        return e2.prototype = t3, new e2();
      };
      function e2() {
      }
    })(), w2 = function(t3) {
      var e2, n3, r2, i3, o2, a3, s3;
      for (n3 = 0, r2 = t3.length, e2 = void 0, a3 = i3 = false; !i3 && n3 !== r2; ) (e2 = t3[n3] = t3[n3].trimLeft()) && (i3 = true), n3++;
      for (n3 = r2 - 1; r2 && !a3 && -1 !== n3; ) (e2 = t3[n3] = t3[n3].trimRight()) && (a3 = true), n3--;
      for (o2 = /\s+$/g, s3 = true, n3 = 0; n3 !== r2; ) "\u2028" != t3[n3] && (e2 = t3[n3].replace(/\s+/g, " "), s3 && (e2 = e2.trimLeft()), e2 && (s3 = o2.test(e2)), t3[n3] = e2), n3++;
      return t3;
    }, c2 = function(t3) {
      var e2, n3, r2;
      for (e2 = void 0, n3 = (r2 = t3.split(",")).shift(); !e2 && n3; ) e2 = i2[n3.trim().toLowerCase()], n3 = r2.shift();
      return e2;
    }, p2 = function(t3) {
      var e2;
      return -1 < (t3 = "auto" === t3 ? "0px" : t3).indexOf("em") && !isNaN(Number(t3.replace("em", ""))) && (t3 = 18.719 * Number(t3.replace("em", "")) + "px"), -1 < t3.indexOf("pt") && !isNaN(Number(t3.replace("pt", ""))) && (t3 = 1.333 * Number(t3.replace("pt", "")) + "px"), void 0, 16, (e2 = n2[t3]) ? e2 : void 0 !== (e2 = { "xx-small": 9, "x-small": 11, small: 13, medium: 16, large: 19, "x-large": 23, "xx-large": 28, auto: 0 }[t3]) ? n2[t3] = e2 / 16 : (e2 = parseFloat(t3)) ? n2[t3] = e2 / 16 : (e2 = t3.match(/([\d\.]+)(px)/), Array.isArray(e2) && 3 === e2.length ? n2[t3] = parseFloat(e2[1]) / 16 : n2[t3] = 1);
    }, I2 = function(t3) {
      var e2, n3, r2, i3, o2;
      return o2 = t3, i3 = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(o2, null) : o2.currentStyle ? o2.currentStyle : o2.style, n3 = void 0, (e2 = {})["font-family"] = c2((r2 = function(t4) {
        return t4 = t4.replace(/-\D/g, function(t5) {
          return t5.charAt(1).toUpperCase();
        }), i3[t4];
      })("font-family")) || "times", e2["font-style"] = a2[r2("font-style")] || "normal", e2["text-align"] = s2[r2("text-align")] || "left", "bold" === (n3 = l2[r2("font-weight")] || "normal") && ("normal" === e2["font-style"] ? e2["font-style"] = n3 : e2["font-style"] = n3 + e2["font-style"]), e2["font-size"] = p2(r2("font-size")) || 1, e2["line-height"] = p2(r2("line-height")) || 1, e2.display = "inline" === r2("display") ? "inline" : "block", n3 = "block" === e2.display, e2["margin-top"] = n3 && p2(r2("margin-top")) || 0, e2["margin-bottom"] = n3 && p2(r2("margin-bottom")) || 0, e2["padding-top"] = n3 && p2(r2("padding-top")) || 0, e2["padding-bottom"] = n3 && p2(r2("padding-bottom")) || 0, e2["margin-left"] = n3 && p2(r2("margin-left")) || 0, e2["margin-right"] = n3 && p2(r2("margin-right")) || 0, e2["padding-left"] = n3 && p2(r2("padding-left")) || 0, e2["padding-right"] = n3 && p2(r2("padding-right")) || 0, e2["page-break-before"] = r2("page-break-before") || "auto", e2.float = h2[r2("cssFloat")] || "none", e2.clear = u2[r2("clear")] || "none", e2.color = r2("color"), e2;
    }, C2 = function(t3, e2, n3) {
      var r2, i3, o2, a3, s3;
      if (o2 = false, a3 = i3 = void 0, r2 = n3["#" + t3.id]) if ("function" == typeof r2) o2 = r2(t3, e2);
      else for (i3 = 0, a3 = r2.length; !o2 && i3 !== a3; ) o2 = r2[i3](t3, e2), i3++;
      if (r2 = n3[t3.nodeName], !o2 && r2) if ("function" == typeof r2) o2 = r2(t3, e2);
      else for (i3 = 0, a3 = r2.length; !o2 && i3 !== a3; ) o2 = r2[i3](t3, e2), i3++;
      for (s3 = "string" == typeof t3.className ? t3.className.split(" ") : [], i3 = 0; i3 < s3.length; i3++) if (r2 = n3["." + s3[i3]], !o2 && r2) if ("function" == typeof r2) o2 = r2(t3, e2);
      else for (i3 = 0, a3 = r2.length; !o2 && i3 !== a3; ) o2 = r2[i3](t3, e2), i3++;
      return o2;
    }, j2 = function(t3, e2) {
      var n3, r2, i3, o2, a3, s3, l3, h3, u3;
      for (n3 = [], r2 = [], i3 = 0, u3 = t3.rows[0].cells.length, l3 = t3.clientWidth; i3 < u3; ) h3 = t3.rows[0].cells[i3], r2[i3] = { name: h3.textContent.toLowerCase().replace(/\s+/g, ""), prompt: h3.textContent.replace(/\r?\n/g, ""), width: h3.clientWidth / l3 * e2.pdf.internal.pageSize.getWidth() }, i3++;
      for (i3 = 1; i3 < t3.rows.length; ) {
        for (s3 = t3.rows[i3], a3 = {}, o2 = 0; o2 < s3.cells.length; ) a3[r2[o2].name] = s3.cells[o2].textContent.replace(/\r?\n/g, ""), o2++;
        n3.push(a3), i3++;
      }
      return { rows: n3, headers: r2 };
    };
    var E2 = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, OBJECT: 1, EMBED: 1, SELECT: 1 }, M2 = 1;
    k2 = function(t3, i3, e2) {
      var n3, r2, o2, a3, s3, l3, h3, u3;
      for (r2 = t3.childNodes, n3 = void 0, (s3 = "block" === (o2 = I2(t3)).display) && (i3.setBlockBoundary(), i3.setBlockStyle(o2)), a3 = 0, l3 = r2.length; a3 < l3; ) {
        if ("object" === se(n3 = r2[a3])) {
          if (i3.executeWatchFunctions(n3), 1 === n3.nodeType && "HEADER" === n3.nodeName) {
            var c3 = n3, f3 = i3.pdf.margins_doc.top;
            i3.pdf.internal.events.subscribe("addPage", function(t4) {
              i3.y = f3, k2(c3, i3, e2), i3.pdf.margins_doc.top = i3.y + 10, i3.y += 10;
            }, false);
          }
          if (8 === n3.nodeType && "#comment" === n3.nodeName) ~n3.textContent.indexOf("ADD_PAGE") && (i3.pdf.addPage(), i3.y = i3.pdf.margins_doc.top);
          else if (1 !== n3.nodeType || E2[n3.nodeName]) if (3 === n3.nodeType) {
            var p3 = n3.nodeValue;
            if (n3.nodeValue && "LI" === n3.parentNode.nodeName) if ("OL" === n3.parentNode.parentNode.nodeName) p3 = M2++ + ". " + p3;
            else {
              var d3 = o2["font-size"], g3 = (3 - 0.75 * d3) * i3.pdf.internal.scaleFactor, m3 = 0.75 * d3 * i3.pdf.internal.scaleFactor, y2 = 1.74 * d3 / i3.pdf.internal.scaleFactor;
              u3 = function(t4, e3) {
                this.pdf.circle(t4 + g3, e3 + m3, y2, "FD");
              };
            }
            16 & n3.ownerDocument.body.compareDocumentPosition(n3) && i3.addText(p3, o2);
          } else "string" == typeof n3 && i3.addText(n3, o2);
          else {
            var v2;
            if ("IMG" === n3.nodeName) {
              var w3 = n3.getAttribute("src");
              v2 = B2[i3.pdf.sHashCode(w3) || w3];
            }
            if (v2) {
              i3.pdf.internal.pageSize.getHeight() - i3.pdf.margins_doc.bottom < i3.y + n3.height && i3.y > i3.pdf.margins_doc.top && (i3.pdf.addPage(), i3.y = i3.pdf.margins_doc.top, i3.executeWatchFunctions(n3));
              var b2 = I2(n3), x2 = i3.x, N2 = 12 / i3.pdf.internal.scaleFactor, L2 = (b2["margin-left"] + b2["padding-left"]) * N2, A2 = (b2["margin-right"] + b2["padding-right"]) * N2, S2 = (b2["margin-top"] + b2["padding-top"]) * N2, _2 = (b2["margin-bottom"] + b2["padding-bottom"]) * N2;
              void 0 !== b2.float && "right" === b2.float ? x2 += i3.settings.width - n3.width - A2 : x2 += L2, i3.pdf.addImage(v2, x2, i3.y + S2, n3.width, n3.height), v2 = void 0, "right" === b2.float || "left" === b2.float ? (i3.watchFunctions.push(function(t4, e3, n4, r3) {
                return i3.y >= e3 ? (i3.x += t4, i3.settings.width += n4, true) : !!(r3 && 1 === r3.nodeType && !E2[r3.nodeName] && i3.x + r3.width > i3.pdf.margins_doc.left + i3.pdf.margins_doc.width) && (i3.x += t4, i3.y = e3, i3.settings.width += n4, true);
              }.bind(this, "left" === b2.float ? -n3.width - L2 - A2 : 0, i3.y + n3.height + S2 + _2, n3.width)), i3.watchFunctions.push(function(t4, e3, n4) {
                return !(i3.y < t4 && e3 === i3.pdf.internal.getNumberOfPages()) || 1 === n4.nodeType && "both" === I2(n4).clear && (i3.y = t4, true);
              }.bind(this, i3.y + n3.height, i3.pdf.internal.getNumberOfPages())), i3.settings.width -= n3.width + L2 + A2, "left" === b2.float && (i3.x += n3.width + L2 + A2)) : i3.y += n3.height + S2 + _2;
            } else if ("TABLE" === n3.nodeName) h3 = j2(n3, i3), i3.y += 10, i3.pdf.table(i3.x, i3.y, h3.rows, h3.headers, { autoSize: false, printHeaders: e2.printHeaders, margins: i3.pdf.margins_doc, css: I2(n3) }), i3.y = i3.pdf.lastCellPos.y + i3.pdf.lastCellPos.h + 20;
            else if ("OL" === n3.nodeName || "UL" === n3.nodeName) M2 = 1, C2(n3, i3, e2) || k2(n3, i3, e2), i3.y += 10;
            else if ("LI" === n3.nodeName) {
              var F2 = i3.x;
              i3.x += 20 / i3.pdf.internal.scaleFactor, i3.y += 3, C2(n3, i3, e2) || k2(n3, i3, e2), i3.x = F2;
            } else "BR" === n3.nodeName ? (i3.y += o2["font-size"] * i3.pdf.internal.scaleFactor, i3.addText("\u2028", P2(o2))) : C2(n3, i3, e2) || k2(n3, i3, e2);
          }
        }
        a3++;
      }
      if (e2.outY = i3.y, s3) return i3.setBlockBoundary(u3);
    }, B2 = {}, d2 = function(t3, o2, e2, n3) {
      var a3, r2 = t3.getElementsByTagName("img"), i3 = r2.length, s3 = 0;
      function l3() {
        o2.pdf.internal.events.publish("imagesLoaded"), n3(a3);
      }
      function h3(e3, n4, r3) {
        if (e3) {
          var i4 = new Image();
          a3 = ++s3, i4.crossOrigin = "", i4.onerror = i4.onload = function() {
            if (i4.complete && (0 === i4.src.indexOf("data:image/") && (i4.width = n4 || i4.width || 0, i4.height = r3 || i4.height || 0), i4.width + i4.height)) {
              var t4 = o2.pdf.sHashCode(e3) || e3;
              B2[t4] = B2[t4] || i4;
            }
            --s3 || l3();
          }, i4.src = e3;
        }
      }
      for (; i3--; ) h3(r2[i3].getAttribute("src"), r2[i3].width, r2[i3].height);
      return s3 || l3();
    }, g2 = function(t3, o2, a3) {
      var s3 = t3.getElementsByTagName("footer");
      if (0 < s3.length) {
        s3 = s3[0];
        var e2 = o2.pdf.internal.write, n3 = o2.y;
        o2.pdf.internal.write = function() {
        }, k2(s3, o2, a3);
        var l3 = Math.ceil(o2.y - n3) + 5;
        o2.y = n3, o2.pdf.internal.write = e2, o2.pdf.margins_doc.bottom += l3;
        for (var r2 = function(t4) {
          var e3 = void 0 !== t4 ? t4.pageNumber : 1, n4 = o2.y;
          o2.y = o2.pdf.internal.pageSize.getHeight() - o2.pdf.margins_doc.bottom, o2.pdf.margins_doc.bottom -= l3;
          for (var r3 = s3.getElementsByTagName("span"), i4 = 0; i4 < r3.length; ++i4) -1 < (" " + r3[i4].className + " ").replace(/[\n\t]/g, " ").indexOf(" pageCounter ") && (r3[i4].innerHTML = e3), -1 < (" " + r3[i4].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") && (r3[i4].innerHTML = "###jsPDFVarTotalPages###");
          k2(s3, o2, a3), o2.pdf.margins_doc.bottom += l3, o2.y = n4;
        }, i3 = s3.getElementsByTagName("span"), h3 = 0; h3 < i3.length; ++h3) -1 < (" " + i3[h3].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") && o2.pdf.internal.events.subscribe("htmlRenderingFinished", o2.pdf.putTotalPages.bind(o2.pdf, "###jsPDFVarTotalPages###"), true);
        o2.pdf.internal.events.subscribe("addPage", r2, false), r2(), E2.FOOTER = 1;
      }
    }, m2 = function(t3, e2, n3, r2, i3, o2) {
      if (!e2) return false;
      var a3, s3, l3, h3;
      "string" == typeof e2 || e2.parentNode || (e2 = "" + e2.innerHTML), "string" == typeof e2 && (a3 = e2.replace(/<\/?script[^>]*?>/gi, ""), h3 = "jsPDFhtmlText" + Date.now().toString() + (1e3 * Math.random()).toFixed(0), (l3 = document.createElement("div")).style.cssText = "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;", l3.innerHTML = '<iframe style="height:1px;width:1px" name="' + h3 + '" />', document.body.appendChild(l3), (s3 = window.frames[h3]).document.open(), s3.document.writeln(a3), s3.document.close(), e2 = s3.document.body);
      var u3, c3 = new f2(t3, n3, r2, i3);
      return d2.call(this, e2, c3, i3.elementHandlers, function(t4) {
        g2(e2, c3, i3.elementHandlers), k2(e2, c3, i3.elementHandlers), c3.pdf.internal.events.publish("htmlRenderingFinished"), u3 = c3.dispose(), "function" == typeof o2 ? o2(u3) : t4 && console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!");
      }), u3 || { x: c3.x, y: c3.y };
    }, (f2 = function(t3, e2, n3, r2) {
      return this.pdf = t3, this.x = e2, this.y = n3, this.settings = r2, this.watchFunctions = [], this.init(), this;
    }).prototype.init = function() {
      return this.paragraph = { text: [], style: [] }, this.pdf.internal.write("q");
    }, f2.prototype.dispose = function() {
      return this.pdf.internal.write("Q"), { x: this.x, y: this.y, ready: true };
    }, f2.prototype.executeWatchFunctions = function(t3) {
      var e2 = false, n3 = [];
      if (0 < this.watchFunctions.length) {
        for (var r2 = 0; r2 < this.watchFunctions.length; ++r2) true === this.watchFunctions[r2](t3) ? e2 = true : n3.push(this.watchFunctions[r2]);
        this.watchFunctions = n3;
      }
      return e2;
    }, f2.prototype.splitFragmentsIntoLines = function(t3, e2) {
      var n3, r2, i3, o2, a3, s3, l3, h3, u3, c3, f3, p3, d3, g3;
      for (12, c3 = this.pdf.internal.scaleFactor, o2 = {}, s3 = l3 = h3 = g3 = a3 = i3 = u3 = r2 = void 0, p3 = [f3 = []], n3 = 0, d3 = this.settings.width; t3.length; ) if (a3 = t3.shift(), g3 = e2.shift(), a3) if ((i3 = o2[(r2 = g3["font-family"]) + (u3 = g3["font-style"])]) || (i3 = this.pdf.internal.getFont(r2, u3).metadata.Unicode, o2[r2 + u3] = i3), h3 = { widths: i3.widths, kerning: i3.kerning, fontSize: 12 * g3["font-size"], textIndent: n3 }, l3 = this.pdf.getStringUnitWidth(a3, h3) * h3.fontSize / c3, "\u2028" == a3) f3 = [], p3.push(f3);
      else if (d3 < n3 + l3) {
        for (s3 = this.pdf.splitTextToSize(a3, d3, h3), f3.push([s3.shift(), g3]); s3.length; ) f3 = [[s3.shift(), g3]], p3.push(f3);
        n3 = this.pdf.getStringUnitWidth(f3[0][0], h3) * h3.fontSize / c3;
      } else f3.push([a3, g3]), n3 += l3;
      if (void 0 !== g3["text-align"] && ("center" === g3["text-align"] || "right" === g3["text-align"] || "justify" === g3["text-align"])) for (var m3 = 0; m3 < p3.length; ++m3) {
        var y2 = this.pdf.getStringUnitWidth(p3[m3][0][0], h3) * h3.fontSize / c3;
        0 < m3 && (p3[m3][0][1] = P2(p3[m3][0][1]));
        var v2 = d3 - y2;
        if ("right" === g3["text-align"]) p3[m3][0][1]["margin-left"] = v2;
        else if ("center" === g3["text-align"]) p3[m3][0][1]["margin-left"] = v2 / 2;
        else if ("justify" === g3["text-align"]) {
          var w3 = p3[m3][0][0].split(" ").length - 1;
          p3[m3][0][1]["word-spacing"] = v2 / w3, m3 === p3.length - 1 && (p3[m3][0][1]["word-spacing"] = 0);
        }
      }
      return p3;
    }, f2.prototype.RenderTextFragment = function(t3, e2) {
      var n3, r2;
      r2 = 0, this.pdf.internal.pageSize.getHeight() - this.pdf.margins_doc.bottom < this.y + this.pdf.internal.getFontSize() && (this.pdf.internal.write("ET", "Q"), this.pdf.addPage(), this.y = this.pdf.margins_doc.top, this.pdf.internal.write("q", "BT", this.getPdfColor(e2.color), this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td"), r2 = Math.max(r2, e2["line-height"], e2["font-size"]), this.pdf.internal.write(0, (-12 * r2).toFixed(2), "Td")), n3 = this.pdf.internal.getFont(e2["font-family"], e2["font-style"]);
      var i3 = this.getPdfColor(e2.color);
      i3 !== this.lastTextColor && (this.pdf.internal.write(i3), this.lastTextColor = i3), void 0 !== e2["word-spacing"] && 0 < e2["word-spacing"] && this.pdf.internal.write(e2["word-spacing"].toFixed(2), "Tw"), this.pdf.internal.write("/" + n3.id, (12 * e2["font-size"]).toFixed(2), "Tf", "(" + this.pdf.internal.pdfEscape(t3) + ") Tj"), void 0 !== e2["word-spacing"] && this.pdf.internal.write(0, "Tw");
    }, f2.prototype.getPdfColor = function(t3) {
      var e2, n3, r2, i3 = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(t3);
      if (null != i3) e2 = parseInt(i3[1]), n3 = parseInt(i3[2]), r2 = parseInt(i3[3]);
      else {
        if ("string" == typeof t3 && "#" != t3.charAt(0)) {
          var o2 = new RGBColor(t3);
          t3 = o2.ok ? o2.toHex() : "#000000";
        }
        e2 = t3.substring(1, 3), e2 = parseInt(e2, 16), n3 = t3.substring(3, 5), n3 = parseInt(n3, 16), r2 = t3.substring(5, 7), r2 = parseInt(r2, 16);
      }
      if ("string" == typeof e2 && /^#[0-9A-Fa-f]{6}$/.test(e2)) {
        var a3 = parseInt(e2.substr(1), 16);
        e2 = a3 >> 16 & 255, n3 = a3 >> 8 & 255, r2 = 255 & a3;
      }
      var s3 = this.f3;
      return 0 === e2 && 0 === n3 && 0 === r2 || void 0 === n3 ? s3(e2 / 255) + " g" : [s3(e2 / 255), s3(n3 / 255), s3(r2 / 255), "rg"].join(" ");
    }, f2.prototype.f3 = function(t3) {
      return t3.toFixed(3);
    }, f2.prototype.renderParagraph = function(t3) {
      var e2, n3, r2, i3, o2, a3, s3, l3, h3, u3, c3, f3, p3;
      if (r2 = w2(this.paragraph.text), f3 = this.paragraph.style, e2 = this.paragraph.blockstyle, this.paragraph.priorblockstyle || {}, this.paragraph = { text: [], style: [], blockstyle: {}, priorblockstyle: e2 }, r2.join("").trim()) {
        s3 = this.splitFragmentsIntoLines(r2, f3), l3 = a3 = void 0, n3 = 12 / this.pdf.internal.scaleFactor, this.priorMarginBottom = this.priorMarginBottom || 0, c3 = (Math.max((e2["margin-top"] || 0) - this.priorMarginBottom, 0) + (e2["padding-top"] || 0)) * n3, u3 = ((e2["margin-bottom"] || 0) + (e2["padding-bottom"] || 0)) * n3, this.priorMarginBottom = e2["margin-bottom"] || 0, "always" === e2["page-break-before"] && (this.pdf.addPage(), this.y = 0, c3 = ((e2["margin-top"] || 0) + (e2["padding-top"] || 0)) * n3), h3 = this.pdf.internal.write, o2 = i3 = void 0, this.y += c3, h3("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
        for (var d3 = 0; s3.length; ) {
          for (i3 = l3 = 0, o2 = (a3 = s3.shift()).length; i3 !== o2; ) a3[i3][0].trim() && (l3 = Math.max(l3, a3[i3][1]["line-height"], a3[i3][1]["font-size"]), p3 = 7 * a3[i3][1]["font-size"]), i3++;
          var g3 = 0, m3 = 0;
          for (void 0 !== a3[0][1]["margin-left"] && 0 < a3[0][1]["margin-left"] && (g3 = (m3 = this.pdf.internal.getCoordinateString(a3[0][1]["margin-left"])) - d3, d3 = m3), h3(g3 + Math.max(e2["margin-left"] || 0, 0) * n3, (-12 * l3).toFixed(2), "Td"), i3 = 0, o2 = a3.length; i3 !== o2; ) a3[i3][0] && this.RenderTextFragment(a3[i3][0], a3[i3][1]), i3++;
          if (this.y += l3 * n3, this.executeWatchFunctions(a3[0][1]) && 0 < s3.length) {
            var y2 = [], v2 = [];
            s3.forEach(function(t4) {
              for (var e3 = 0, n4 = t4.length; e3 !== n4; ) t4[e3][0] && (y2.push(t4[e3][0] + " "), v2.push(t4[e3][1])), ++e3;
            }), s3 = this.splitFragmentsIntoLines(w2(y2), v2), h3("ET", "Q"), h3("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
          }
        }
        return t3 && "function" == typeof t3 && t3.call(this, this.x - 9, this.y - p3 / 2), h3("ET", "Q"), this.y += u3;
      }
    }, f2.prototype.setBlockBoundary = function(t3) {
      return this.renderParagraph(t3);
    }, f2.prototype.setBlockStyle = function(t3) {
      return this.paragraph.blockstyle = t3;
    }, f2.prototype.addText = function(t3, e2) {
      return this.paragraph.text.push(t3), this.paragraph.style.push(e2);
    }, i2 = { helvetica: "helvetica", "sans-serif": "helvetica", "times new roman": "times", serif: "times", times: "times", monospace: "courier", courier: "courier" }, l2 = { 100: "normal", 200: "normal", 300: "normal", 400: "normal", 500: "bold", 600: "bold", 700: "bold", 800: "bold", 900: "bold", normal: "normal", bold: "bold", bolder: "bold", lighter: "normal" }, a2 = { normal: "normal", italic: "italic", oblique: "italic" }, s2 = { left: "left", right: "right", center: "center", justify: "justify" }, h2 = { none: "none", right: "right", left: "left" }, u2 = { none: "none", both: "both" }, n2 = { normal: 1 }, t2.fromHTML = function(t3, e2, n3, r2, i3, o2) {
      return this.margins_doc = o2 || { top: 0, bottom: 0 }, r2 || (r2 = {}), r2.elementHandlers || (r2.elementHandlers = {}), m2(this, t3, isNaN(e2) ? 4 : e2, isNaN(n3) ? 4 : n3, r2, i3);
    };
  })(lt.API), lt.API, ("undefined" != typeof window && window || "undefined" != typeof global && global).html2pdf = function(t2, a2, e2) {
    var n2 = a2.canvas;
    if (n2) {
      var r2, i2;
      if ((n2.pdf = a2).annotations = { _nameMap: [], createAnnotation: function(t3, e3) {
        var n3, r3 = a2.context2d._wrapX(e3.left), i3 = a2.context2d._wrapY(e3.top), o3 = (a2.context2d._page(e3.top), t3.indexOf("#"));
        n3 = 0 <= o3 ? { name: t3.substring(o3 + 1) } : { url: t3 }, a2.link(r3, i3, e3.right - e3.left, e3.bottom - e3.top, n3);
      }, setName: function(t3, e3) {
        var n3 = a2.context2d._wrapX(e3.left), r3 = a2.context2d._wrapY(e3.top), i3 = a2.context2d._page(e3.top);
        this._nameMap[t3] = { page: i3, x: n3, y: r3 };
      } }, n2.annotations = a2.annotations, a2.context2d._pageBreakAt = function(t3) {
        this.pageBreaks.push(t3);
      }, a2.context2d._gotoPage = function(t3) {
        for (; a2.internal.getNumberOfPages() < t3; ) a2.addPage();
        a2.setPage(t3);
      }, "string" == typeof t2) {
        t2 = t2.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
        var o2, s2, l2 = document.createElement("iframe");
        document.body.appendChild(l2), null != (o2 = l2.contentDocument) && null != o2 || (o2 = l2.contentWindow.document), o2.open(), o2.write(t2), o2.close(), r2 = o2.body, s2 = o2.body || {}, t2 = o2.documentElement || {}, i2 = Math.max(s2.scrollHeight, s2.offsetHeight, t2.clientHeight, t2.scrollHeight, t2.offsetHeight);
      } else s2 = (r2 = t2).body || {}, i2 = Math.max(s2.scrollHeight, s2.offsetHeight, t2.clientHeight, t2.scrollHeight, t2.offsetHeight);
      var h2 = { async: true, allowTaint: true, backgroundColor: "#ffffff", canvas: n2, imageTimeout: 15e3, logging: true, proxy: null, removeContainer: true, foreignObjectRendering: false, useCORS: false, windowHeight: i2 = a2.internal.pageSize.getHeight(), scrollY: i2 };
      a2.context2d.pageWrapYEnabled = true, a2.context2d.pageWrapY = a2.internal.pageSize.getHeight(), html2canvas(r2, h2).then(function(t3) {
        e2 && (l2 && l2.parentElement.removeChild(l2), e2(a2));
      });
    } else alert("jsPDF canvas plugin not installed");
  }, window.tmp = html2pdf, (function(f2) {
    var r2 = f2.BlobBuilder || f2.WebKitBlobBuilder || f2.MSBlobBuilder || f2.MozBlobBuilder;
    f2.URL = f2.URL || f2.webkitURL || function(t3, e3) {
      return (e3 = document.createElement("a")).href = t3, e3;
    };
    var n2 = f2.Blob, p2 = URL.createObjectURL, d2 = URL.revokeObjectURL, o2 = f2.Symbol && f2.Symbol.toStringTag, t2 = false, e2 = false, g2 = !!f2.ArrayBuffer, i2 = r2 && r2.prototype.append && r2.prototype.getBlob;
    try {
      t2 = 2 === new Blob(["\xE4"]).size, e2 = 2 === new Blob([new Uint8Array([1, 2])]).size;
    } catch (t3) {
    }
    function a2(t3) {
      return t3.map(function(t4) {
        if (t4.buffer instanceof ArrayBuffer) {
          var e3 = t4.buffer;
          if (t4.byteLength !== e3.byteLength) {
            var n3 = new Uint8Array(t4.byteLength);
            n3.set(new Uint8Array(e3, t4.byteOffset, t4.byteLength)), e3 = n3.buffer;
          }
          return e3;
        }
        return t4;
      });
    }
    function s2(t3, e3) {
      e3 = e3 || {};
      var n3 = new r2();
      return a2(t3).forEach(function(t4) {
        n3.append(t4);
      }), e3.type ? n3.getBlob(e3.type) : n3.getBlob();
    }
    function l2(t3, e3) {
      return new n2(a2(t3), e3 || {});
    }
    if (f2.Blob && (s2.prototype = Blob.prototype, l2.prototype = Blob.prototype), o2) try {
      File.prototype[o2] = "File", Blob.prototype[o2] = "Blob", FileReader.prototype[o2] = "FileReader";
    } catch (t3) {
    }
    function h2() {
      var t3 = !!f2.ActiveXObject || "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style, e3 = f2.XMLHttpRequest && f2.XMLHttpRequest.prototype.send;
      t3 && e3 && (XMLHttpRequest.prototype.send = function(t4) {
        t4 instanceof Blob && this.setRequestHeader("Content-Type", t4.type), e3.call(this, t4);
      });
      try {
        new File([], "");
      } catch (t4) {
        try {
          var n3 = new Function('class File extends Blob {constructor(chunks, name, opts) {opts = opts || {};super(chunks, opts || {});this.name = name;this.lastModifiedDate = opts.lastModified ? new Date(opts.lastModified) : new Date;this.lastModified = +this.lastModifiedDate;}};return new File([], ""), File')();
          f2.File = n3;
        } catch (t5) {
          n3 = function(t6, e4, n4) {
            var r3 = new Blob(t6, n4), i3 = n4 && void 0 !== n4.lastModified ? new Date(n4.lastModified) : /* @__PURE__ */ new Date();
            return r3.name = e4, r3.lastModifiedDate = i3, r3.lastModified = +i3, r3.toString = function() {
              return "[object File]";
            }, o2 && (r3[o2] = "File"), r3;
          };
          f2.File = n3;
        }
      }
    }
    t2 ? (h2(), f2.Blob = e2 ? f2.Blob : l2) : i2 ? (h2(), f2.Blob = s2) : (function() {
      function a3(t4) {
        for (var e4 = [], n4 = 0; n4 < t4.length; n4++) {
          var r4 = t4.charCodeAt(n4);
          r4 < 128 ? e4.push(r4) : r4 < 2048 ? e4.push(192 | r4 >> 6, 128 | 63 & r4) : r4 < 55296 || 57344 <= r4 ? e4.push(224 | r4 >> 12, 128 | r4 >> 6 & 63, 128 | 63 & r4) : (n4++, r4 = 65536 + ((1023 & r4) << 10 | 1023 & t4.charCodeAt(n4)), e4.push(240 | r4 >> 18, 128 | r4 >> 12 & 63, 128 | r4 >> 6 & 63, 128 | 63 & r4));
        }
        return e4;
      }
      function e3(t4) {
        var e4, n4, r4, i4, o4, a4;
        for (e4 = "", r4 = t4.length, n4 = 0; n4 < r4; ) switch ((i4 = t4[n4++]) >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            e4 += String.fromCharCode(i4);
            break;
          case 12:
          case 13:
            o4 = t4[n4++], e4 += String.fromCharCode((31 & i4) << 6 | 63 & o4);
            break;
          case 14:
            o4 = t4[n4++], a4 = t4[n4++], e4 += String.fromCharCode((15 & i4) << 12 | (63 & o4) << 6 | (63 & a4) << 0);
        }
        return e4;
      }
      function s3(t4) {
        for (var e4 = new Array(t4.byteLength), n4 = new Uint8Array(t4), r4 = e4.length; r4--; ) e4[r4] = n4[r4];
        return e4;
      }
      function n3(t4) {
        for (var e4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n4 = [], r4 = 0; r4 < t4.length; r4 += 3) {
          var i4 = t4[r4], o4 = r4 + 1 < t4.length, a4 = o4 ? t4[r4 + 1] : 0, s4 = r4 + 2 < t4.length, l4 = s4 ? t4[r4 + 2] : 0, h4 = i4 >> 2, u3 = (3 & i4) << 4 | a4 >> 4, c3 = (15 & a4) << 2 | l4 >> 6, f3 = 63 & l4;
          s4 || (f3 = 64, o4 || (c3 = 64)), n4.push(e4[h4], e4[u3], e4[c3], e4[f3]);
        }
        return n4.join("");
      }
      var t3 = Object.create || function(t4) {
        function e4() {
        }
        return e4.prototype = t4, new e4();
      };
      if (g2) var r3 = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], l3 = ArrayBuffer.isView || function(t4) {
        return t4 && -1 < r3.indexOf(Object.prototype.toString.call(t4));
      };
      function h3(t4, e4) {
        for (var n4 = 0, r4 = (t4 = t4 || []).length; n4 < r4; n4++) {
          var i4 = t4[n4];
          i4 instanceof h3 ? t4[n4] = i4._buffer : "string" == typeof i4 ? t4[n4] = a3(i4) : g2 && (ArrayBuffer.prototype.isPrototypeOf(i4) || l3(i4)) ? t4[n4] = s3(i4) : g2 && (o4 = i4) && DataView.prototype.isPrototypeOf(o4) ? t4[n4] = s3(i4.buffer) : t4[n4] = a3(String(i4));
        }
        var o4;
        this._buffer = [].concat.apply([], t4), this.size = this._buffer.length, this.type = e4 && e4.type || "";
      }
      function i3(t4, e4, n4) {
        var r4 = h3.call(this, t4, n4 = n4 || {}) || this;
        return r4.name = e4, r4.lastModifiedDate = n4.lastModified ? new Date(n4.lastModified) : /* @__PURE__ */ new Date(), r4.lastModified = +r4.lastModifiedDate, r4;
      }
      if (h3.prototype.slice = function(t4, e4, n4) {
        return new h3([this._buffer.slice(t4 || 0, e4 || this._buffer.length)], { type: n4 });
      }, h3.prototype.toString = function() {
        return "[object Blob]";
      }, (i3.prototype = t3(h3.prototype)).constructor = i3, Object.setPrototypeOf) Object.setPrototypeOf(i3, h3);
      else try {
        i3.__proto__ = h3;
      } catch (t4) {
      }
      function o3() {
        if (!(this instanceof o3)) throw new TypeError("Failed to construct 'FileReader': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
        var n4 = document.createDocumentFragment();
        this.addEventListener = n4.addEventListener, this.dispatchEvent = function(t4) {
          var e4 = this["on" + t4.type];
          "function" == typeof e4 && e4(t4), n4.dispatchEvent(t4);
        }, this.removeEventListener = n4.removeEventListener;
      }
      function u2(t4, e4, n4) {
        if (!(e4 instanceof h3)) throw new TypeError("Failed to execute '" + n4 + "' on 'FileReader': parameter 1 is not of type 'Blob'.");
        t4.result = "", setTimeout(function() {
          this.readyState = o3.LOADING, t4.dispatchEvent(new Event("load")), t4.dispatchEvent(new Event("loadend"));
        });
      }
      i3.prototype.toString = function() {
        return "[object File]";
      }, o3.EMPTY = 0, o3.LOADING = 1, o3.DONE = 2, o3.prototype.error = null, o3.prototype.onabort = null, o3.prototype.onerror = null, o3.prototype.onload = null, o3.prototype.onloadend = null, o3.prototype.onloadstart = null, o3.prototype.onprogress = null, o3.prototype.readAsDataURL = function(t4) {
        u2(this, t4, "readAsDataURL"), this.result = "data:" + t4.type + ";base64," + n3(t4._buffer);
      }, o3.prototype.readAsText = function(t4) {
        u2(this, t4, "readAsText"), this.result = e3(t4._buffer);
      }, o3.prototype.readAsArrayBuffer = function(t4) {
        u2(this, t4, "readAsText"), this.result = t4._buffer.slice();
      }, o3.prototype.abort = function() {
      }, URL.createObjectURL = function(t4) {
        return t4 instanceof h3 ? "data:" + t4.type + ";base64," + n3(t4._buffer) : p2.call(URL, t4);
      }, URL.revokeObjectURL = function(t4) {
        d2 && d2.call(URL, t4);
      };
      var c2 = f2.XMLHttpRequest && f2.XMLHttpRequest.prototype.send;
      c2 && (XMLHttpRequest.prototype.send = function(t4) {
        t4 instanceof h3 ? (this.setRequestHeader("Content-Type", t4.type), c2.call(this, e3(t4._buffer))) : c2.call(this, t4);
      }), f2.FileReader = o3, f2.File = i3, f2.Blob = h3;
    })();
  })("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")());
  var ht, ut, ct, ft, pt, dt, gt, mt, yt, vt, wt, bt, xt, Nt, Lt, le = le || (function(s2) {
    if (!(void 0 === s2 || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
      var t2 = s2.document, l2 = function() {
        return s2.URL || s2.webkitURL || s2;
      }, h2 = t2.createElementNS("http://www.w3.org/1999/xhtml", "a"), u2 = "download" in h2, c2 = /constructor/i.test(s2.HTMLElement) || s2.safari, f2 = /CriOS\/[\d]+/.test(navigator.userAgent), p2 = s2.setImmediate || s2.setTimeout, d2 = function(t3) {
        p2(function() {
          throw t3;
        }, 0);
      }, g2 = function(t3) {
        setTimeout(function() {
          "string" == typeof t3 ? l2().revokeObjectURL(t3) : t3.remove();
        }, 4e4);
      }, m2 = function(t3) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t3.type) ? new Blob([String.fromCharCode(65279), t3], { type: t3.type }) : t3;
      }, r2 = function(t3, n2, e3) {
        e3 || (t3 = m2(t3));
        var r3, i2 = this, o2 = "application/octet-stream" === t3.type, a2 = function() {
          !(function(t4, e4, n3) {
            for (var r4 = (e4 = [].concat(e4)).length; r4--; ) {
              var i3 = t4["on" + e4[r4]];
              if ("function" == typeof i3) try {
                i3.call(t4, n3 || t4);
              } catch (t5) {
                d2(t5);
              }
            }
          })(i2, "writestart progress write writeend".split(" "));
        };
        if (i2.readyState = i2.INIT, u2) return r3 = l2().createObjectURL(t3), void p2(function() {
          var t4, e4;
          h2.href = r3, h2.download = n2, t4 = h2, e4 = new MouseEvent("click"), t4.dispatchEvent(e4), a2(), g2(r3), i2.readyState = i2.DONE;
        }, 0);
        !(function() {
          if ((f2 || o2 && c2) && s2.FileReader) {
            var e4 = new FileReader();
            return e4.onloadend = function() {
              var t4 = f2 ? e4.result : e4.result.replace(/^data:[^;]*;/, "data:attachment/file;");
              s2.open(t4, "_blank") || (s2.location.href = t4), t4 = void 0, i2.readyState = i2.DONE, a2();
            }, e4.readAsDataURL(t3), i2.readyState = i2.INIT;
          }
          r3 || (r3 = l2().createObjectURL(t3)), o2 ? s2.location.href = r3 : s2.open(r3, "_blank") || (s2.location.href = r3);
          i2.readyState = i2.DONE, a2(), g2(r3);
        })();
      }, e2 = r2.prototype;
      return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(t3, e3, n2) {
        return e3 = e3 || t3.name || "download", n2 || (t3 = m2(t3)), navigator.msSaveOrOpenBlob(t3, e3);
      } : (e2.abort = function() {
      }, e2.readyState = e2.INIT = 0, e2.WRITING = 1, e2.DONE = 2, e2.error = e2.onwritestart = e2.onprogress = e2.onwrite = e2.onabort = e2.onerror = e2.onwriteend = null, function(t3, e3, n2) {
        return new r2(t3, e3 || t3.name || "download", n2);
      });
    }
  })("undefined" != typeof self && self || "undefined" != typeof window && window || void 0);
  function At(x2) {
    var t2 = 0;
    if (71 !== x2[t2++] || 73 !== x2[t2++] || 70 !== x2[t2++] || 56 !== x2[t2++] || 56 != (x2[t2++] + 1 & 253) || 97 !== x2[t2++]) throw "Invalid GIF 87a/89a header.";
    var N2 = x2[t2++] | x2[t2++] << 8, e2 = x2[t2++] | x2[t2++] << 8, n2 = x2[t2++], r2 = n2 >> 7, i2 = 1 << (7 & n2) + 1;
    x2[t2++];
    x2[t2++];
    var o2 = null;
    r2 && (o2 = t2, t2 += 3 * i2);
    var a2 = true, s2 = [], l2 = 0, h2 = null, u2 = 0, c2 = null;
    for (this.width = N2, this.height = e2; a2 && t2 < x2.length; ) switch (x2[t2++]) {
      case 33:
        switch (x2[t2++]) {
          case 255:
            if (11 !== x2[t2] || 78 == x2[t2 + 1] && 69 == x2[t2 + 2] && 84 == x2[t2 + 3] && 83 == x2[t2 + 4] && 67 == x2[t2 + 5] && 65 == x2[t2 + 6] && 80 == x2[t2 + 7] && 69 == x2[t2 + 8] && 50 == x2[t2 + 9] && 46 == x2[t2 + 10] && 48 == x2[t2 + 11] && 3 == x2[t2 + 12] && 1 == x2[t2 + 13] && 0 == x2[t2 + 16]) t2 += 14, c2 = x2[t2++] | x2[t2++] << 8, t2++;
            else for (t2 += 12; ; ) {
              if (0 === (A2 = x2[t2++])) break;
              t2 += A2;
            }
            break;
          case 249:
            if (4 !== x2[t2++] || 0 !== x2[t2 + 4]) throw "Invalid graphics extension block.";
            var f2 = x2[t2++];
            l2 = x2[t2++] | x2[t2++] << 8, h2 = x2[t2++], 0 == (1 & f2) && (h2 = null), u2 = f2 >> 2 & 7, t2++;
            break;
          case 254:
            for (; ; ) {
              if (0 === (A2 = x2[t2++])) break;
              t2 += A2;
            }
            break;
          default:
            throw "Unknown graphic control label: 0x" + x2[t2 - 1].toString(16);
        }
        break;
      case 44:
        var p2 = x2[t2++] | x2[t2++] << 8, d2 = x2[t2++] | x2[t2++] << 8, g2 = x2[t2++] | x2[t2++] << 8, m2 = x2[t2++] | x2[t2++] << 8, y2 = x2[t2++], v2 = y2 >> 6 & 1, w2 = o2, b2 = false;
        if (y2 >> 7) {
          b2 = true;
          w2 = t2, t2 += 3 * (1 << (7 & y2) + 1);
        }
        var L2 = t2;
        for (t2++; ; ) {
          var A2;
          if (0 === (A2 = x2[t2++])) break;
          t2 += A2;
        }
        s2.push({ x: p2, y: d2, width: g2, height: m2, has_local_palette: b2, palette_offset: w2, data_offset: L2, data_length: t2 - L2, transparent_index: h2, interlaced: !!v2, delay: l2, disposal: u2 });
        break;
      case 59:
        a2 = false;
        break;
      default:
        throw "Unknown gif block: 0x" + x2[t2 - 1].toString(16);
    }
    this.numFrames = function() {
      return s2.length;
    }, this.loopCount = function() {
      return c2;
    }, this.frameInfo = function(t3) {
      if (t3 < 0 || t3 >= s2.length) throw "Frame index out of range.";
      return s2[t3];
    }, this.decodeAndBlitFrameBGRA = function(t3, e3) {
      var n3 = this.frameInfo(t3), r3 = n3.width * n3.height, i3 = new Uint8Array(r3);
      St(x2, n3.data_offset, i3, r3);
      var o3 = n3.palette_offset, a3 = n3.transparent_index;
      null === a3 && (a3 = 256);
      var s3 = n3.width, l3 = N2 - s3, h3 = s3, u3 = 4 * (n3.y * N2 + n3.x), c3 = 4 * ((n3.y + n3.height) * N2 + n3.x), f3 = u3, p3 = 4 * l3;
      true === n3.interlaced && (p3 += 4 * (s3 + l3) * 7);
      for (var d3 = 8, g3 = 0, m3 = i3.length; g3 < m3; ++g3) {
        var y3 = i3[g3];
        if (0 === h3 && (h3 = s3, c3 <= (f3 += p3) && (p3 = l3 + 4 * (s3 + l3) * (d3 - 1), f3 = u3 + (s3 + l3) * (d3 << 1), d3 >>= 1)), y3 === a3) f3 += 4;
        else {
          var v3 = x2[o3 + 3 * y3], w3 = x2[o3 + 3 * y3 + 1], b3 = x2[o3 + 3 * y3 + 2];
          e3[f3++] = b3, e3[f3++] = w3, e3[f3++] = v3, e3[f3++] = 255;
        }
        --h3;
      }
    }, this.decodeAndBlitFrameRGBA = function(t3, e3) {
      var n3 = this.frameInfo(t3), r3 = n3.width * n3.height, i3 = new Uint8Array(r3);
      St(x2, n3.data_offset, i3, r3);
      var o3 = n3.palette_offset, a3 = n3.transparent_index;
      null === a3 && (a3 = 256);
      var s3 = n3.width, l3 = N2 - s3, h3 = s3, u3 = 4 * (n3.y * N2 + n3.x), c3 = 4 * ((n3.y + n3.height) * N2 + n3.x), f3 = u3, p3 = 4 * l3;
      true === n3.interlaced && (p3 += 4 * (s3 + l3) * 7);
      for (var d3 = 8, g3 = 0, m3 = i3.length; g3 < m3; ++g3) {
        var y3 = i3[g3];
        if (0 === h3 && (h3 = s3, c3 <= (f3 += p3) && (p3 = l3 + 4 * (s3 + l3) * (d3 - 1), f3 = u3 + (s3 + l3) * (d3 << 1), d3 >>= 1)), y3 === a3) f3 += 4;
        else {
          var v3 = x2[o3 + 3 * y3], w3 = x2[o3 + 3 * y3 + 1], b3 = x2[o3 + 3 * y3 + 2];
          e3[f3++] = v3, e3[f3++] = w3, e3[f3++] = b3, e3[f3++] = 255;
        }
        --h3;
      }
    };
  }
  function St(t2, e2, n2, r2) {
    for (var i2 = t2[e2++], o2 = 1 << i2, a2 = o2 + 1, s2 = a2 + 1, l2 = i2 + 1, h2 = (1 << l2) - 1, u2 = 0, c2 = 0, f2 = 0, p2 = t2[e2++], d2 = new Int32Array(4096), g2 = null; ; ) {
      for (; u2 < 16 && 0 !== p2; ) c2 |= t2[e2++] << u2, u2 += 8, 1 === p2 ? p2 = t2[e2++] : --p2;
      if (u2 < l2) break;
      var m2 = c2 & h2;
      if (c2 >>= l2, u2 -= l2, m2 !== o2) {
        if (m2 === a2) break;
        for (var y2 = m2 < s2 ? m2 : g2, v2 = 0, w2 = y2; o2 < w2; ) w2 = d2[w2] >> 8, ++v2;
        var b2 = w2;
        if (r2 < f2 + v2 + (y2 !== m2 ? 1 : 0)) return void console.log("Warning, gif stream longer than expected.");
        n2[f2++] = b2;
        var x2 = f2 += v2;
        for (y2 !== m2 && (n2[f2++] = b2), w2 = y2; v2--; ) w2 = d2[w2], n2[--x2] = 255 & w2, w2 >>= 8;
        null !== g2 && s2 < 4096 && (d2[s2++] = g2 << 8 | b2, h2 + 1 <= s2 && l2 < 12 && (++l2, h2 = h2 << 1 | 1)), g2 = m2;
      } else s2 = a2 + 1, h2 = (1 << (l2 = i2 + 1)) - 1, g2 = null;
    }
    return f2 !== r2 && console.log("Warning, gif stream shorter than expected."), n2;
  }
  try {
    exports.GifWriter = function(y2, t2, e2, n2) {
      var v2 = 0, r2 = void 0 === (n2 = void 0 === n2 ? {} : n2).loop ? null : n2.loop, w2 = void 0 === n2.palette ? null : n2.palette;
      if (t2 <= 0 || e2 <= 0 || 65535 < t2 || 65535 < e2) throw "Width/Height invalid.";
      function b2(t3) {
        var e3 = t3.length;
        if (e3 < 2 || 256 < e3 || e3 & e3 - 1) throw "Invalid code/color length, must be power of 2 and 2 .. 256.";
        return e3;
      }
      y2[v2++] = 71, y2[v2++] = 73, y2[v2++] = 70, y2[v2++] = 56, y2[v2++] = 57, y2[v2++] = 97;
      var i2 = 0, o2 = 0;
      if (null !== w2) {
        for (var a2 = b2(w2); a2 >>= 1; ) ++i2;
        if (a2 = 1 << i2, --i2, void 0 !== n2.background) {
          if (a2 <= (o2 = n2.background)) throw "Background index out of range.";
          if (0 === o2) throw "Background index explicitly passed as 0.";
        }
      }
      if (y2[v2++] = 255 & t2, y2[v2++] = t2 >> 8 & 255, y2[v2++] = 255 & e2, y2[v2++] = e2 >> 8 & 255, y2[v2++] = (null !== w2 ? 128 : 0) | i2, y2[v2++] = o2, y2[v2++] = 0, null !== w2) for (var s2 = 0, l2 = w2.length; s2 < l2; ++s2) {
        var h2 = w2[s2];
        y2[v2++] = h2 >> 16 & 255, y2[v2++] = h2 >> 8 & 255, y2[v2++] = 255 & h2;
      }
      if (null !== r2) {
        if (r2 < 0 || 65535 < r2) throw "Loop count invalid.";
        y2[v2++] = 33, y2[v2++] = 255, y2[v2++] = 11, y2[v2++] = 78, y2[v2++] = 69, y2[v2++] = 84, y2[v2++] = 83, y2[v2++] = 67, y2[v2++] = 65, y2[v2++] = 80, y2[v2++] = 69, y2[v2++] = 50, y2[v2++] = 46, y2[v2++] = 48, y2[v2++] = 3, y2[v2++] = 1, y2[v2++] = 255 & r2, y2[v2++] = r2 >> 8 & 255, y2[v2++] = 0;
      }
      var x2 = false;
      this.addFrame = function(t3, e3, n3, r3, i3, o3) {
        if (true === x2 && (--v2, x2 = false), o3 = void 0 === o3 ? {} : o3, t3 < 0 || e3 < 0 || 65535 < t3 || 65535 < e3) throw "x/y invalid.";
        if (n3 <= 0 || r3 <= 0 || 65535 < n3 || 65535 < r3) throw "Width/Height invalid.";
        if (i3.length < n3 * r3) throw "Not enough pixels for the frame size.";
        var a3 = true, s3 = o3.palette;
        if (null == s3 && (a3 = false, s3 = w2), null == s3) throw "Must supply either a local or global palette.";
        for (var l3 = b2(s3), h3 = 0; l3 >>= 1; ) ++h3;
        l3 = 1 << h3;
        var u2 = void 0 === o3.delay ? 0 : o3.delay, c2 = void 0 === o3.disposal ? 0 : o3.disposal;
        if (c2 < 0 || 3 < c2) throw "Disposal out of range.";
        var f2 = false, p2 = 0;
        if (void 0 !== o3.transparent && null !== o3.transparent && (f2 = true, (p2 = o3.transparent) < 0 || l3 <= p2)) throw "Transparent color index.";
        if ((0 !== c2 || f2 || 0 !== u2) && (y2[v2++] = 33, y2[v2++] = 249, y2[v2++] = 4, y2[v2++] = c2 << 2 | (true === f2 ? 1 : 0), y2[v2++] = 255 & u2, y2[v2++] = u2 >> 8 & 255, y2[v2++] = p2, y2[v2++] = 0), y2[v2++] = 44, y2[v2++] = 255 & t3, y2[v2++] = t3 >> 8 & 255, y2[v2++] = 255 & e3, y2[v2++] = e3 >> 8 & 255, y2[v2++] = 255 & n3, y2[v2++] = n3 >> 8 & 255, y2[v2++] = 255 & r3, y2[v2++] = r3 >> 8 & 255, y2[v2++] = true === a3 ? 128 | h3 - 1 : 0, true === a3) for (var d2 = 0, g2 = s3.length; d2 < g2; ++d2) {
          var m2 = s3[d2];
          y2[v2++] = m2 >> 16 & 255, y2[v2++] = m2 >> 8 & 255, y2[v2++] = 255 & m2;
        }
        v2 = (function(e4, n4, t4, r4) {
          e4[n4++] = t4;
          var i4 = n4++, o4 = 1 << t4, a4 = o4 - 1, s4 = o4 + 1, l4 = s4 + 1, h4 = t4 + 1, u3 = 0, c3 = 0;
          function f3(t5) {
            for (; t5 <= u3; ) e4[n4++] = 255 & c3, c3 >>= 8, u3 -= 8, n4 === i4 + 256 && (e4[i4] = 255, i4 = n4++);
          }
          function p3(t5) {
            c3 |= t5 << u3, u3 += h4, f3(8);
          }
          var d3 = r4[0] & a4, g3 = {};
          p3(o4);
          for (var m3 = 1, y3 = r4.length; m3 < y3; ++m3) {
            var v3 = r4[m3] & a4, w3 = d3 << 8 | v3, b3 = g3[w3];
            if (void 0 === b3) {
              for (c3 |= d3 << u3, u3 += h4; 8 <= u3; ) e4[n4++] = 255 & c3, c3 >>= 8, u3 -= 8, n4 === i4 + 256 && (e4[i4] = 255, i4 = n4++);
              4096 === l4 ? (p3(o4), l4 = s4 + 1, h4 = t4 + 1, g3 = {}) : (1 << h4 <= l4 && ++h4, g3[w3] = l4++), d3 = v3;
            } else d3 = b3;
          }
          return p3(d3), p3(s4), f3(1), i4 + 1 === n4 ? e4[i4] = 0 : (e4[i4] = n4 - i4 - 1, e4[n4++] = 0), n4;
        })(y2, v2, h3 < 2 ? 2 : h3, i3);
      }, this.end = function() {
        return false === x2 && (y2[v2++] = 59, x2 = true), v2;
      };
    }, exports.GifReader = At;
  } catch (t2) {
  }
  function _t(t2) {
    var N2, L2, A2, S2, e2, c2 = Math.floor, _2 = new Array(64), F2 = new Array(64), P2 = new Array(64), k2 = new Array(64), y2 = new Array(65535), v2 = new Array(65535), Z2 = new Array(64), w2 = new Array(64), I2 = [], C2 = 0, B2 = 7, j2 = new Array(64), E2 = new Array(64), M2 = new Array(64), n2 = new Array(256), O2 = new Array(2048), b2 = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], q2 = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], T2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], R2 = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], D2 = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], U2 = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], z2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], H2 = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], W2 = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
    function r2(t3, e3) {
      for (var n3 = 0, r3 = 0, i2 = new Array(), o2 = 1; o2 <= 16; o2++) {
        for (var a2 = 1; a2 <= t3[o2]; a2++) i2[e3[r3]] = [], i2[e3[r3]][0] = n3, i2[e3[r3]][1] = o2, r3++, n3++;
        n3 *= 2;
      }
      return i2;
    }
    function V2(t3) {
      for (var e3 = t3[0], n3 = t3[1] - 1; 0 <= n3; ) e3 & 1 << n3 && (C2 |= 1 << B2), n3--, --B2 < 0 && (255 == C2 ? (G2(255), G2(0)) : G2(C2), B2 = 7, C2 = 0);
    }
    function G2(t3) {
      I2.push(t3);
    }
    function Y2(t3) {
      G2(t3 >> 8 & 255), G2(255 & t3);
    }
    function J2(t3, e3, n3, r3, i2) {
      for (var o2, a2 = i2[0], s2 = i2[240], l2 = (function(t4, e4) {
        var n4, r4, i3, o3, a3, s3, l3, h3, u3, c4, f3 = 0;
        for (u3 = 0; u3 < 8; ++u3) {
          n4 = t4[f3], r4 = t4[f3 + 1], i3 = t4[f3 + 2], o3 = t4[f3 + 3], a3 = t4[f3 + 4], s3 = t4[f3 + 5], l3 = t4[f3 + 6];
          var p3 = n4 + (h3 = t4[f3 + 7]), d3 = n4 - h3, g3 = r4 + l3, m3 = r4 - l3, y3 = i3 + s3, v3 = i3 - s3, w3 = o3 + a3, b3 = o3 - a3, x2 = p3 + w3, N3 = p3 - w3, L3 = g3 + y3, A3 = g3 - y3;
          t4[f3] = x2 + L3, t4[f3 + 4] = x2 - L3;
          var S3 = 0.707106781 * (A3 + N3);
          t4[f3 + 2] = N3 + S3, t4[f3 + 6] = N3 - S3;
          var _3 = 0.382683433 * ((x2 = b3 + v3) - (A3 = m3 + d3)), F3 = 0.5411961 * x2 + _3, P3 = 1.306562965 * A3 + _3, k3 = 0.707106781 * (L3 = v3 + m3), I3 = d3 + k3, C3 = d3 - k3;
          t4[f3 + 5] = C3 + F3, t4[f3 + 3] = C3 - F3, t4[f3 + 1] = I3 + P3, t4[f3 + 7] = I3 - P3, f3 += 8;
        }
        for (u3 = f3 = 0; u3 < 8; ++u3) {
          n4 = t4[f3], r4 = t4[f3 + 8], i3 = t4[f3 + 16], o3 = t4[f3 + 24], a3 = t4[f3 + 32], s3 = t4[f3 + 40], l3 = t4[f3 + 48];
          var B3 = n4 + (h3 = t4[f3 + 56]), j3 = n4 - h3, E3 = r4 + l3, M3 = r4 - l3, O3 = i3 + s3, q3 = i3 - s3, T3 = o3 + a3, R3 = o3 - a3, D3 = B3 + T3, U3 = B3 - T3, z3 = E3 + O3, H3 = E3 - O3;
          t4[f3] = D3 + z3, t4[f3 + 32] = D3 - z3;
          var W3 = 0.707106781 * (H3 + U3);
          t4[f3 + 16] = U3 + W3, t4[f3 + 48] = U3 - W3;
          var V3 = 0.382683433 * ((D3 = R3 + q3) - (H3 = M3 + j3)), G3 = 0.5411961 * D3 + V3, Y3 = 1.306562965 * H3 + V3, J3 = 0.707106781 * (z3 = q3 + M3), X3 = j3 + J3, K2 = j3 - J3;
          t4[f3 + 40] = K2 + G3, t4[f3 + 24] = K2 - G3, t4[f3 + 8] = X3 + Y3, t4[f3 + 56] = X3 - Y3, f3++;
        }
        for (u3 = 0; u3 < 64; ++u3) c4 = t4[u3] * e4[u3], Z2[u3] = 0 < c4 ? c4 + 0.5 | 0 : c4 - 0.5 | 0;
        return Z2;
      })(t3, e3), h2 = 0; h2 < 64; ++h2) w2[b2[h2]] = l2[h2];
      var u2 = w2[0] - n3;
      n3 = w2[0], 0 == u2 ? V2(r3[0]) : (V2(r3[v2[o2 = 32767 + u2]]), V2(y2[o2]));
      for (var c3 = 63; 0 < c3 && 0 == w2[c3]; c3--) ;
      if (0 == c3) return V2(a2), n3;
      for (var f2, p2 = 1; p2 <= c3; ) {
        for (var d2 = p2; 0 == w2[p2] && p2 <= c3; ++p2) ;
        var g2 = p2 - d2;
        if (16 <= g2) {
          f2 = g2 >> 4;
          for (var m2 = 1; m2 <= f2; ++m2) V2(s2);
          g2 &= 15;
        }
        o2 = 32767 + w2[p2], V2(i2[(g2 << 4) + v2[o2]]), V2(y2[o2]), p2++;
      }
      return 63 != c3 && V2(a2), n3;
    }
    function X2(t3) {
      if (t3 <= 0 && (t3 = 1), 100 < t3 && (t3 = 100), e2 != t3) {
        (function(t4) {
          for (var e3 = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n3 = 0; n3 < 64; n3++) {
            var r3 = c2((e3[n3] * t4 + 50) / 100);
            r3 < 1 ? r3 = 1 : 255 < r3 && (r3 = 255), _2[b2[n3]] = r3;
          }
          for (var i2 = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], o2 = 0; o2 < 64; o2++) {
            var a2 = c2((i2[o2] * t4 + 50) / 100);
            a2 < 1 ? a2 = 1 : 255 < a2 && (a2 = 255), F2[b2[o2]] = a2;
          }
          for (var s2 = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], l2 = 0, h2 = 0; h2 < 8; h2++) for (var u2 = 0; u2 < 8; u2++) P2[l2] = 1 / (_2[b2[l2]] * s2[h2] * s2[u2] * 8), k2[l2] = 1 / (F2[b2[l2]] * s2[h2] * s2[u2] * 8), l2++;
        })(t3 < 50 ? Math.floor(5e3 / t3) : Math.floor(200 - 2 * t3)), e2 = t3;
      }
    }
    this.encode = function(t3, e3) {
      var n3, r3;
      (/* @__PURE__ */ new Date()).getTime();
      e3 && X2(e3), I2 = new Array(), C2 = 0, B2 = 7, Y2(65496), Y2(65504), Y2(16), G2(74), G2(70), G2(73), G2(70), G2(0), G2(1), G2(1), G2(0), Y2(1), Y2(1), G2(0), G2(0), (function() {
        Y2(65499), Y2(132), G2(0);
        for (var t4 = 0; t4 < 64; t4++) G2(_2[t4]);
        G2(1);
        for (var e4 = 0; e4 < 64; e4++) G2(F2[e4]);
      })(), n3 = t3.width, r3 = t3.height, Y2(65472), Y2(17), G2(8), Y2(r3), Y2(n3), G2(3), G2(1), G2(17), G2(0), G2(2), G2(17), G2(1), G2(3), G2(17), G2(1), (function() {
        Y2(65476), Y2(418), G2(0);
        for (var t4 = 0; t4 < 16; t4++) G2(q2[t4 + 1]);
        for (var e4 = 0; e4 <= 11; e4++) G2(T2[e4]);
        G2(16);
        for (var n4 = 0; n4 < 16; n4++) G2(R2[n4 + 1]);
        for (var r4 = 0; r4 <= 161; r4++) G2(D2[r4]);
        G2(1);
        for (var i3 = 0; i3 < 16; i3++) G2(U2[i3 + 1]);
        for (var o3 = 0; o3 <= 11; o3++) G2(z2[o3]);
        G2(17);
        for (var a3 = 0; a3 < 16; a3++) G2(H2[a3 + 1]);
        for (var s3 = 0; s3 <= 161; s3++) G2(W2[s3]);
      })(), Y2(65498), Y2(12), G2(3), G2(1), G2(0), G2(2), G2(17), G2(3), G2(17), G2(0), G2(63), G2(0);
      var i2 = 0, o2 = 0, a2 = 0;
      C2 = 0, B2 = 7, this.encode.displayName = "_encode_";
      for (var s2, l2, h2, u2, c3, f2, p2, d2, g2, m2 = t3.data, y3 = t3.width, v3 = t3.height, w3 = 4 * y3, b3 = 0; b3 < v3; ) {
        for (s2 = 0; s2 < w3; ) {
          for (f2 = c3 = w3 * b3 + s2, p2 = -1, g2 = d2 = 0; g2 < 64; g2++) f2 = c3 + (d2 = g2 >> 3) * w3 + (p2 = 4 * (7 & g2)), v3 <= b3 + d2 && (f2 -= w3 * (b3 + 1 + d2 - v3)), w3 <= s2 + p2 && (f2 -= s2 + p2 - w3 + 4), l2 = m2[f2++], h2 = m2[f2++], u2 = m2[f2++], j2[g2] = (O2[l2] + O2[h2 + 256 >> 0] + O2[u2 + 512 >> 0] >> 16) - 128, E2[g2] = (O2[l2 + 768 >> 0] + O2[h2 + 1024 >> 0] + O2[u2 + 1280 >> 0] >> 16) - 128, M2[g2] = (O2[l2 + 1280 >> 0] + O2[h2 + 1536 >> 0] + O2[u2 + 1792 >> 0] >> 16) - 128;
          i2 = J2(j2, P2, i2, N2, A2), o2 = J2(E2, k2, o2, L2, S2), a2 = J2(M2, k2, a2, L2, S2), s2 += 32;
        }
        b3 += 8;
      }
      if (0 <= B2) {
        var x2 = [];
        x2[1] = B2 + 1, x2[0] = (1 << B2 + 1) - 1, V2(x2);
      }
      return Y2(65497), new Uint8Array(I2);
    }, (function() {
      (/* @__PURE__ */ new Date()).getTime();
      t2 || (t2 = 50), (function() {
        for (var t3 = String.fromCharCode, e3 = 0; e3 < 256; e3++) n2[e3] = t3(e3);
      })(), N2 = r2(q2, T2), L2 = r2(U2, z2), A2 = r2(R2, D2), S2 = r2(H2, W2), (function() {
        for (var t3 = 1, e3 = 2, n3 = 1; n3 <= 15; n3++) {
          for (var r3 = t3; r3 < e3; r3++) v2[32767 + r3] = n3, y2[32767 + r3] = [], y2[32767 + r3][1] = n3, y2[32767 + r3][0] = r3;
          for (var i2 = -(e3 - 1); i2 <= -t3; i2++) v2[32767 + i2] = n3, y2[32767 + i2] = [], y2[32767 + i2][1] = n3, y2[32767 + i2][0] = e3 - 1 + i2;
          t3 <<= 1, e3 <<= 1;
        }
      })(), (function() {
        for (var t3 = 0; t3 < 256; t3++) O2[t3] = 19595 * t3, O2[t3 + 256 >> 0] = 38470 * t3, O2[t3 + 512 >> 0] = 7471 * t3 + 32768, O2[t3 + 768 >> 0] = -11059 * t3, O2[t3 + 1024 >> 0] = -21709 * t3, O2[t3 + 1280 >> 0] = 32768 * t3 + 8421375, O2[t3 + 1536 >> 0] = -27439 * t3, O2[t3 + 1792 >> 0] = -5329 * t3;
      })(), X2(t2), (/* @__PURE__ */ new Date()).getTime();
    })();
  }
  function Ft(t2, e2) {
    if (this.pos = 0, this.buffer = t2, this.datav = new DataView(t2.buffer), this.is_with_alpha = !!e2, this.bottom_up = true, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag)) throw new Error("Invalid BMP File");
    this.parseHeader(), this.parseBGR();
  }
  window.tmp = At, lt.API.adler32cs = (dt = "function" == typeof ArrayBuffer && "function" == typeof Uint8Array, gt = null, mt = (function() {
    if (!dt) return function() {
      return false;
    };
    try {
      var t2 = {};
      "function" == typeof t2.Buffer && (gt = t2.Buffer);
    } catch (t3) {
    }
    return function(t3) {
      return t3 instanceof ArrayBuffer || null !== gt && t3 instanceof gt;
    };
  })(), yt = null !== gt ? function(t2) {
    return new gt(t2, "utf8").toString("binary");
  } : function(t2) {
    return unescape(encodeURIComponent(t2));
  }, vt = function(t2, e2) {
    for (var n2 = 65535 & t2, r2 = t2 >>> 16, i2 = 0, o2 = e2.length; i2 < o2; i2++) n2 = (n2 + (255 & e2.charCodeAt(i2))) % 65521, r2 = (r2 + n2) % 65521;
    return (r2 << 16 | n2) >>> 0;
  }, wt = function(t2, e2) {
    for (var n2 = 65535 & t2, r2 = t2 >>> 16, i2 = 0, o2 = e2.length; i2 < o2; i2++) n2 = (n2 + e2[i2]) % 65521, r2 = (r2 + n2) % 65521;
    return (r2 << 16 | n2) >>> 0;
  }, xt = (bt = {}).Adler32 = (((pt = (ft = function(t2) {
    if (!(this instanceof ft)) throw new TypeError("Constructor cannot called be as a function.");
    if (!isFinite(t2 = null == t2 ? 1 : +t2)) throw new Error("First arguments needs to be a finite number.");
    this.checksum = t2 >>> 0;
  }).prototype = {}).constructor = ft).from = ((ht = function(t2) {
    if (!(this instanceof ft)) throw new TypeError("Constructor cannot called be as a function.");
    if (null == t2) throw new Error("First argument needs to be a string.");
    this.checksum = vt(1, t2.toString());
  }).prototype = pt, ht), ft.fromUtf8 = ((ut = function(t2) {
    if (!(this instanceof ft)) throw new TypeError("Constructor cannot called be as a function.");
    if (null == t2) throw new Error("First argument needs to be a string.");
    var e2 = yt(t2.toString());
    this.checksum = vt(1, e2);
  }).prototype = pt, ut), dt && (ft.fromBuffer = ((ct = function(t2) {
    if (!(this instanceof ft)) throw new TypeError("Constructor cannot called be as a function.");
    if (!mt(t2)) throw new Error("First argument needs to be ArrayBuffer.");
    var e2 = new Uint8Array(t2);
    return this.checksum = wt(1, e2);
  }).prototype = pt, ct)), pt.update = function(t2) {
    if (null == t2) throw new Error("First argument needs to be a string.");
    return t2 = t2.toString(), this.checksum = vt(this.checksum, t2);
  }, pt.updateUtf8 = function(t2) {
    if (null == t2) throw new Error("First argument needs to be a string.");
    var e2 = yt(t2.toString());
    return this.checksum = vt(this.checksum, e2);
  }, dt && (pt.updateBuffer = function(t2) {
    if (!mt(t2)) throw new Error("First argument needs to be ArrayBuffer.");
    var e2 = new Uint8Array(t2);
    return this.checksum = wt(this.checksum, e2);
  }), pt.clone = function() {
    return new xt(this.checksum);
  }, ft), bt.from = function(t2) {
    if (null == t2) throw new Error("First argument needs to be a string.");
    return vt(1, t2.toString());
  }, bt.fromUtf8 = function(t2) {
    if (null == t2) throw new Error("First argument needs to be a string.");
    var e2 = yt(t2.toString());
    return vt(1, e2);
  }, dt && (bt.fromBuffer = function(t2) {
    if (!mt(t2)) throw new Error("First argument need to be ArrayBuffer.");
    var e2 = new Uint8Array(t2);
    return wt(1, e2);
  }), bt), (function(t2) {
    t2.__bidiEngine__ = t2.prototype.__bidiEngine__ = function(t3) {
      var d2, g2, c2, f2, i2, o3, a2, s2 = e2, m2 = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], y2 = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], v2 = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, l2 = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, h2 = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "\xAB", "\xBB", "\xAB", "\u2039", "\u203A", "\u2039", "\u2045", "\u2046", "\u2045", "\u207D", "\u207E", "\u207D", "\u208D", "\u208E", "\u208D", "\u2264", "\u2265", "\u2264", "\u2329", "\u232A", "\u2329", "\uFE59", "\uFE5A", "\uFE59", "\uFE5B", "\uFE5C", "\uFE5B", "\uFE5D", "\uFE5E", "\uFE5D", "\uFE64", "\uFE65", "\uFE64"], u2 = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), w2 = false, b2 = 0;
      this.__bidiEngine__ = {};
      var x2 = function(t4) {
        var e3 = t4.charCodeAt(), n2 = e3 >> 8, r2 = l2[n2];
        return void 0 !== r2 ? s2[256 * r2 + (255 & e3)] : 252 === n2 || 253 === n2 ? "AL" : u2.test(n2) ? "L" : 8 === n2 ? "R" : "N";
      }, p2 = function(t4) {
        for (var e3, n2 = 0; n2 < t4.length; n2++) {
          if ("L" === (e3 = x2(t4.charAt(n2)))) return false;
          if ("R" === e3) return true;
        }
        return false;
      }, N2 = function(t4, e3, n2, r2) {
        var i3, o4, a3, s3, l3 = e3[r2];
        switch (l3) {
          case "L":
          case "R":
            w2 = false;
            break;
          case "N":
          case "AN":
            break;
          case "EN":
            w2 && (l3 = "AN");
            break;
          case "AL":
            w2 = true, l3 = "R";
            break;
          case "WS":
            l3 = "N";
            break;
          case "CS":
            r2 < 1 || r2 + 1 >= e3.length || "EN" !== (i3 = n2[r2 - 1]) && "AN" !== i3 || "EN" !== (o4 = e3[r2 + 1]) && "AN" !== o4 ? l3 = "N" : w2 && (o4 = "AN"), l3 = o4 === i3 ? o4 : "N";
            break;
          case "ES":
            l3 = "EN" === (i3 = 0 < r2 ? n2[r2 - 1] : "B") && r2 + 1 < e3.length && "EN" === e3[r2 + 1] ? "EN" : "N";
            break;
          case "ET":
            if (0 < r2 && "EN" === n2[r2 - 1]) {
              l3 = "EN";
              break;
            }
            if (w2) {
              l3 = "N";
              break;
            }
            for (a3 = r2 + 1, s3 = e3.length; a3 < s3 && "ET" === e3[a3]; ) a3++;
            l3 = a3 < s3 && "EN" === e3[a3] ? "EN" : "N";
            break;
          case "NSM":
            if (c2 && !f2) {
              for (s3 = e3.length, a3 = r2 + 1; a3 < s3 && "NSM" === e3[a3]; ) a3++;
              if (a3 < s3) {
                var h3 = t4[r2], u3 = 1425 <= h3 && h3 <= 2303 || 64286 === h3;
                if (i3 = e3[a3], u3 && ("R" === i3 || "AL" === i3)) {
                  l3 = "R";
                  break;
                }
              }
            }
            l3 = r2 < 1 || "B" === (i3 = e3[r2 - 1]) ? "N" : n2[r2 - 1];
            break;
          case "B":
            d2 = !(w2 = false), l3 = b2;
            break;
          case "S":
            g2 = true, l3 = "N";
            break;
          case "LRE":
          case "RLE":
          case "LRO":
          case "RLO":
          case "PDF":
            w2 = false;
            break;
          case "BN":
            l3 = "N";
        }
        return l3;
      }, L2 = function(t4, e3, n2) {
        var r2 = t4.split("");
        return n2 && A2(r2, n2, { hiLevel: b2 }), r2.reverse(), e3 && e3.reverse(), r2.join("");
      }, A2 = function(t4, e3, n2) {
        var r2, i3, o4, a3, s3, l3 = -1, h3 = t4.length, u3 = 0, c3 = [], f3 = b2 ? y2 : m2, p3 = [];
        for (g2 = d2 = w2 = false, i3 = 0; i3 < h3; i3++) p3[i3] = x2(t4[i3]);
        for (o4 = 0; o4 < h3; o4++) {
          if (s3 = u3, c3[o4] = N2(t4, p3, c3, o4), r2 = 240 & (u3 = f3[s3][v2[c3[o4]]]), u3 &= 15, e3[o4] = a3 = f3[u3][5], 0 < r2) if (16 === r2) {
            for (i3 = l3; i3 < o4; i3++) e3[i3] = 1;
            l3 = -1;
          } else l3 = -1;
          if (f3[u3][6]) -1 === l3 && (l3 = o4);
          else if (-1 < l3) {
            for (i3 = l3; i3 < o4; i3++) e3[i3] = a3;
            l3 = -1;
          }
          "B" === p3[o4] && (e3[o4] = 0), n2.hiLevel |= a3;
        }
        g2 && (function(t5, e4, n3) {
          for (var r3 = 0; r3 < n3; r3++) if ("S" === t5[r3]) {
            e4[r3] = b2;
            for (var i4 = r3 - 1; 0 <= i4 && "WS" === t5[i4]; i4--) e4[i4] = b2;
          }
        })(p3, e3, h3);
      }, S2 = function(t4, e3, n2, r2, i3) {
        if (!(i3.hiLevel < t4)) {
          if (1 === t4 && 1 === b2 && !d2) return e3.reverse(), void (n2 && n2.reverse());
          for (var o4, a3, s3, l3, h3 = e3.length, u3 = 0; u3 < h3; ) {
            if (r2[u3] >= t4) {
              for (s3 = u3 + 1; s3 < h3 && r2[s3] >= t4; ) s3++;
              for (l3 = u3, a3 = s3 - 1; l3 < a3; l3++, a3--) o4 = e3[l3], e3[l3] = e3[a3], e3[a3] = o4, n2 && (o4 = n2[l3], n2[l3] = n2[a3], n2[a3] = o4);
              u3 = s3;
            }
            u3++;
          }
        }
      }, _2 = function(t4, e3, n2) {
        var r2 = t4.split(""), i3 = { hiLevel: b2 };
        return n2 || (n2 = []), A2(r2, n2, i3), (function(t5, e4, n3) {
          if (0 !== n3.hiLevel && a2) for (var r3, i4 = 0; i4 < t5.length; i4++) 1 === e4[i4] && 0 <= (r3 = h2.indexOf(t5[i4])) && (t5[i4] = h2[r3 + 1]);
        })(r2, n2, i3), S2(2, r2, e3, n2, i3), S2(1, r2, e3, n2, i3), r2.join("");
      };
      return this.__bidiEngine__.doBidiReorder = function(t4, e3, n2) {
        if ((function(t5, e4) {
          if (e4) for (var n3 = 0; n3 < t5.length; n3++) e4[n3] = n3;
          void 0 === f2 && (f2 = p2(t5)), void 0 === o3 && (o3 = p2(t5));
        })(t4, e3), c2 || !i2 || o3) if (c2 && i2 && f2 ^ o3) b2 = f2 ? 1 : 0, t4 = L2(t4, e3, n2);
        else if (!c2 && i2 && o3) b2 = f2 ? 1 : 0, t4 = _2(t4, e3, n2), t4 = L2(t4, e3);
        else if (!c2 || f2 || i2 || o3) {
          if (c2 && !i2 && f2 ^ o3) t4 = L2(t4, e3), t4 = f2 ? (b2 = 0, _2(t4, e3, n2)) : (b2 = 1, t4 = _2(t4, e3, n2), L2(t4, e3));
          else if (c2 && f2 && !i2 && o3) b2 = 1, t4 = _2(t4, e3, n2), t4 = L2(t4, e3);
          else if (!c2 && !i2 && f2 ^ o3) {
            var r2 = a2;
            f2 ? (b2 = 1, t4 = _2(t4, e3, n2), b2 = 0, a2 = false, t4 = _2(t4, e3, n2), a2 = r2) : (b2 = 0, t4 = _2(t4, e3, n2), t4 = L2(t4, e3), a2 = !(b2 = 1), t4 = _2(t4, e3, n2), a2 = r2, t4 = L2(t4, e3));
          }
        } else b2 = 0, t4 = _2(t4, e3, n2);
        else b2 = f2 ? 1 : 0, t4 = _2(t4, e3, n2);
        return t4;
      }, this.__bidiEngine__.setOptions = function(t4) {
        t4 && (c2 = t4.isInputVisual, i2 = t4.isOutputVisual, f2 = t4.isInputRtl, o3 = t4.isOutputRtl, a2 = t4.isSymmetricSwapping);
      }, this.__bidiEngine__.setOptions(t3), this.__bidiEngine__;
    };
    var e2 = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], o2 = new t2.__bidiEngine__({ isInputVisual: true });
    t2.API.events.push(["postProcessText", function(t3) {
      var e3 = t3.text, n2 = (t3.x, t3.y, t3.options || {}), r2 = (t3.mutex, n2.lang, []);
      if ("[object Array]" === Object.prototype.toString.call(e3)) {
        var i2 = 0;
        for (r2 = [], i2 = 0; i2 < e3.length; i2 += 1) "[object Array]" === Object.prototype.toString.call(e3[i2]) ? r2.push([o2.doBidiReorder(e3[i2][0]), e3[i2][1], e3[i2][2]]) : r2.push([o2.doBidiReorder(e3[i2])]);
        t3.text = r2;
      } else t3.text = o2.doBidiReorder(e3);
    }]);
  })(lt), window.tmp = _t, Ft.prototype.parseHeader = function() {
    if (this.fileSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, true), this.pos += 4, this.offset = this.datav.getUint32(this.pos, true), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.width = this.datav.getUint32(this.pos, true), this.pos += 4, this.height = this.datav.getInt32(this.pos, true), this.pos += 4, this.planes = this.datav.getUint16(this.pos, true), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, true), this.pos += 2, this.compress = this.datav.getUint32(this.pos, true), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.hr = this.datav.getUint32(this.pos, true), this.pos += 4, this.vr = this.datav.getUint32(this.pos, true), this.pos += 4, this.colors = this.datav.getUint32(this.pos, true), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, true), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
      var t2 = 0 === this.colors ? 1 << this.bitPP : this.colors;
      this.palette = new Array(t2);
      for (var e2 = 0; e2 < t2; e2++) {
        var n2 = this.datav.getUint8(this.pos++, true), r2 = this.datav.getUint8(this.pos++, true), i2 = this.datav.getUint8(this.pos++, true), o2 = this.datav.getUint8(this.pos++, true);
        this.palette[e2] = { red: i2, green: r2, blue: n2, quad: o2 };
      }
    }
    this.height < 0 && (this.height *= -1, this.bottom_up = false);
  }, Ft.prototype.parseBGR = function() {
    this.pos = this.offset;
    try {
      var t2 = "bit" + this.bitPP, e2 = this.width * this.height * 4;
      this.data = new Uint8Array(e2), this[t2]();
    } catch (t3) {
      console.log("bit decode error:" + t3);
    }
  }, Ft.prototype.bit1 = function() {
    var t2 = Math.ceil(this.width / 8), e2 = t2 % 4, n2 = 0 <= this.height ? this.height - 1 : -this.height;
    for (n2 = this.height - 1; 0 <= n2; n2--) {
      for (var r2 = this.bottom_up ? n2 : this.height - 1 - n2, i2 = 0; i2 < t2; i2++) for (var o2 = this.datav.getUint8(this.pos++, true), a2 = r2 * this.width * 4 + 8 * i2 * 4, s2 = 0; s2 < 8 && 8 * i2 + s2 < this.width; s2++) {
        var l2 = this.palette[o2 >> 7 - s2 & 1];
        this.data[a2 + 4 * s2] = l2.blue, this.data[a2 + 4 * s2 + 1] = l2.green, this.data[a2 + 4 * s2 + 2] = l2.red, this.data[a2 + 4 * s2 + 3] = 255;
      }
      0 != e2 && (this.pos += 4 - e2);
    }
  }, Ft.prototype.bit4 = function() {
    for (var t2 = Math.ceil(this.width / 2), e2 = t2 % 4, n2 = this.height - 1; 0 <= n2; n2--) {
      for (var r2 = this.bottom_up ? n2 : this.height - 1 - n2, i2 = 0; i2 < t2; i2++) {
        var o2 = this.datav.getUint8(this.pos++, true), a2 = r2 * this.width * 4 + 2 * i2 * 4, s2 = o2 >> 4, l2 = 15 & o2, h2 = this.palette[s2];
        if (this.data[a2] = h2.blue, this.data[a2 + 1] = h2.green, this.data[a2 + 2] = h2.red, this.data[a2 + 3] = 255, 2 * i2 + 1 >= this.width) break;
        h2 = this.palette[l2], this.data[a2 + 4] = h2.blue, this.data[a2 + 4 + 1] = h2.green, this.data[a2 + 4 + 2] = h2.red, this.data[a2 + 4 + 3] = 255;
      }
      0 != e2 && (this.pos += 4 - e2);
    }
  }, Ft.prototype.bit8 = function() {
    for (var t2 = this.width % 4, e2 = this.height - 1; 0 <= e2; e2--) {
      for (var n2 = this.bottom_up ? e2 : this.height - 1 - e2, r2 = 0; r2 < this.width; r2++) {
        var i2 = this.datav.getUint8(this.pos++, true), o2 = n2 * this.width * 4 + 4 * r2;
        if (i2 < this.palette.length) {
          var a2 = this.palette[i2];
          this.data[o2] = a2.red, this.data[o2 + 1] = a2.green, this.data[o2 + 2] = a2.blue, this.data[o2 + 3] = 255;
        } else this.data[o2] = 255, this.data[o2 + 1] = 255, this.data[o2 + 2] = 255, this.data[o2 + 3] = 255;
      }
      0 != t2 && (this.pos += 4 - t2);
    }
  }, Ft.prototype.bit15 = function() {
    for (var t2 = this.width % 3, e2 = parseInt("11111", 2), n2 = this.height - 1; 0 <= n2; n2--) {
      for (var r2 = this.bottom_up ? n2 : this.height - 1 - n2, i2 = 0; i2 < this.width; i2++) {
        var o2 = this.datav.getUint16(this.pos, true);
        this.pos += 2;
        var a2 = (o2 & e2) / e2 * 255 | 0, s2 = (o2 >> 5 & e2) / e2 * 255 | 0, l2 = (o2 >> 10 & e2) / e2 * 255 | 0, h2 = o2 >> 15 ? 255 : 0, u2 = r2 * this.width * 4 + 4 * i2;
        this.data[u2] = l2, this.data[u2 + 1] = s2, this.data[u2 + 2] = a2, this.data[u2 + 3] = h2;
      }
      this.pos += t2;
    }
  }, Ft.prototype.bit16 = function() {
    for (var t2 = this.width % 3, e2 = parseInt("11111", 2), n2 = parseInt("111111", 2), r2 = this.height - 1; 0 <= r2; r2--) {
      for (var i2 = this.bottom_up ? r2 : this.height - 1 - r2, o2 = 0; o2 < this.width; o2++) {
        var a2 = this.datav.getUint16(this.pos, true);
        this.pos += 2;
        var s2 = (a2 & e2) / e2 * 255 | 0, l2 = (a2 >> 5 & n2) / n2 * 255 | 0, h2 = (a2 >> 11) / e2 * 255 | 0, u2 = i2 * this.width * 4 + 4 * o2;
        this.data[u2] = h2, this.data[u2 + 1] = l2, this.data[u2 + 2] = s2, this.data[u2 + 3] = 255;
      }
      this.pos += t2;
    }
  }, Ft.prototype.bit24 = function() {
    for (var t2 = this.height - 1; 0 <= t2; t2--) {
      for (var e2 = this.bottom_up ? t2 : this.height - 1 - t2, n2 = 0; n2 < this.width; n2++) {
        var r2 = this.datav.getUint8(this.pos++, true), i2 = this.datav.getUint8(this.pos++, true), o2 = this.datav.getUint8(this.pos++, true), a2 = e2 * this.width * 4 + 4 * n2;
        this.data[a2] = o2, this.data[a2 + 1] = i2, this.data[a2 + 2] = r2, this.data[a2 + 3] = 255;
      }
      this.pos += this.width % 4;
    }
  }, Ft.prototype.bit32 = function() {
    for (var t2 = this.height - 1; 0 <= t2; t2--) for (var e2 = this.bottom_up ? t2 : this.height - 1 - t2, n2 = 0; n2 < this.width; n2++) {
      var r2 = this.datav.getUint8(this.pos++, true), i2 = this.datav.getUint8(this.pos++, true), o2 = this.datav.getUint8(this.pos++, true), a2 = this.datav.getUint8(this.pos++, true), s2 = e2 * this.width * 4 + 4 * n2;
      this.data[s2] = o2, this.data[s2 + 1] = i2, this.data[s2 + 2] = r2, this.data[s2 + 3] = a2;
    }
  }, Ft.prototype.getData = function() {
    return this.data;
  }, window.tmp = Ft, /*
     Copyright (c) 2013 Gildas Lormeau. All rights reserved.
  
     Redistribution and use in source and binary forms, with or without
     modification, are permitted provided that the following conditions are met:
  
     1. Redistributions of source code must retain the above copyright notice,
     this list of conditions and the following disclaimer.
  
     2. Redistributions in binary form must reproduce the above copyright 
     notice, this list of conditions and the following disclaimer in 
     the documentation and/or other materials provided with the distribution.
  
     3. The names of the authors may not be used to endorse or promote products
     derived from this software without specific prior written permission.
  
     THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
     INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
     FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
     INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
     INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
     LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
     OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
     LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
     NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
     EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */
  (function(t2) {
    var d2 = 15, g2 = 573, e2 = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];
    function ct2() {
      var p2 = this;
      function l2(t3, e3) {
        for (var n3 = 0; n3 |= 1 & t3, t3 >>>= 1, n3 <<= 1, 0 < --e3; ) ;
        return n3 >>> 1;
      }
      p2.build_tree = function(t3) {
        var e3, n3, r3, i3 = p2.dyn_tree, o3 = p2.stat_desc.static_tree, a2 = p2.stat_desc.elems, s2 = -1;
        for (t3.heap_len = 0, t3.heap_max = g2, e3 = 0; e3 < a2; e3++) 0 !== i3[2 * e3] ? (t3.heap[++t3.heap_len] = s2 = e3, t3.depth[e3] = 0) : i3[2 * e3 + 1] = 0;
        for (; t3.heap_len < 2; ) i3[2 * (r3 = t3.heap[++t3.heap_len] = s2 < 2 ? ++s2 : 0)] = 1, t3.depth[r3] = 0, t3.opt_len--, o3 && (t3.static_len -= o3[2 * r3 + 1]);
        for (p2.max_code = s2, e3 = Math.floor(t3.heap_len / 2); 1 <= e3; e3--) t3.pqdownheap(i3, e3);
        for (r3 = a2; e3 = t3.heap[1], t3.heap[1] = t3.heap[t3.heap_len--], t3.pqdownheap(i3, 1), n3 = t3.heap[1], t3.heap[--t3.heap_max] = e3, t3.heap[--t3.heap_max] = n3, i3[2 * r3] = i3[2 * e3] + i3[2 * n3], t3.depth[r3] = Math.max(t3.depth[e3], t3.depth[n3]) + 1, i3[2 * e3 + 1] = i3[2 * n3 + 1] = r3, t3.heap[1] = r3++, t3.pqdownheap(i3, 1), 2 <= t3.heap_len; ) ;
        t3.heap[--t3.heap_max] = t3.heap[1], (function(t4) {
          var e4, n4, r4, i4, o4, a3, s3 = p2.dyn_tree, l3 = p2.stat_desc.static_tree, h2 = p2.stat_desc.extra_bits, u2 = p2.stat_desc.extra_base, c2 = p2.stat_desc.max_length, f2 = 0;
          for (i4 = 0; i4 <= d2; i4++) t4.bl_count[i4] = 0;
          for (s3[2 * t4.heap[t4.heap_max] + 1] = 0, e4 = t4.heap_max + 1; e4 < g2; e4++) c2 < (i4 = s3[2 * s3[2 * (n4 = t4.heap[e4]) + 1] + 1] + 1) && (i4 = c2, f2++), s3[2 * n4 + 1] = i4, n4 > p2.max_code || (t4.bl_count[i4]++, o4 = 0, u2 <= n4 && (o4 = h2[n4 - u2]), a3 = s3[2 * n4], t4.opt_len += a3 * (i4 + o4), l3 && (t4.static_len += a3 * (l3[2 * n4 + 1] + o4)));
          if (0 !== f2) {
            do {
              for (i4 = c2 - 1; 0 === t4.bl_count[i4]; ) i4--;
              t4.bl_count[i4]--, t4.bl_count[i4 + 1] += 2, t4.bl_count[c2]--, f2 -= 2;
            } while (0 < f2);
            for (i4 = c2; 0 !== i4; i4--) for (n4 = t4.bl_count[i4]; 0 !== n4; ) (r4 = t4.heap[--e4]) > p2.max_code || (s3[2 * r4 + 1] != i4 && (t4.opt_len += (i4 - s3[2 * r4 + 1]) * s3[2 * r4], s3[2 * r4 + 1] = i4), n4--);
          }
        })(t3), (function(t4, e4, n4) {
          var r4, i4, o4, a3 = [], s3 = 0;
          for (r4 = 1; r4 <= d2; r4++) a3[r4] = s3 = s3 + n4[r4 - 1] << 1;
          for (i4 = 0; i4 <= e4; i4++) 0 !== (o4 = t4[2 * i4 + 1]) && (t4[2 * i4] = l2(a3[o4]++, o4));
        })(i3, p2.max_code, t3.bl_count);
      };
    }
    function ft2(t3, e3, n3, r3, i3) {
      this.static_tree = t3, this.extra_bits = e3, this.extra_base = n3, this.elems = r3, this.max_length = i3;
    }
    ct2._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28], ct2.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0], ct2.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576], ct2.d_code = function(t3) {
      return t3 < 256 ? e2[t3] : e2[256 + (t3 >>> 7)];
    }, ct2.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], ct2.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], ct2.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], ct2.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], ft2.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8], ft2.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5], ft2.static_l_desc = new ft2(ft2.static_ltree, ct2.extra_lbits, 257, 286, d2), ft2.static_d_desc = new ft2(ft2.static_dtree, ct2.extra_dbits, 0, 30, d2), ft2.static_bl_desc = new ft2(null, ct2.extra_blbits, 0, 19, 7);
    function n2(t3, e3, n3, r3, i3) {
      this.good_length = t3, this.max_lazy = e3, this.nice_length = n3, this.max_chain = r3, this.func = i3;
    }
    var pt2 = [new n2(0, 0, 0, 0, 0), new n2(4, 4, 8, 4, 1), new n2(4, 5, 16, 8, 1), new n2(4, 6, 32, 32, 1), new n2(4, 4, 16, 16, 2), new n2(8, 16, 32, 32, 2), new n2(8, 16, 128, 128, 2), new n2(8, 32, 128, 256, 2), new n2(32, 128, 258, 1024, 2), new n2(32, 258, 258, 4096, 2)], dt2 = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""];
    function gt2(t3, e3, n3, r3) {
      var i3 = t3[2 * e3], o3 = t3[2 * n3];
      return i3 < o3 || i3 == o3 && r3[e3] <= r3[n3];
    }
    function r2() {
      var l2, h2, u2, c2, f2, p2, d3, g3, i3, m2, y2, v2, w2, a2, b2, x2, N2, L2, A2, S2, _2, F2, P2, k2, I2, C2, B2, j2, E2, M2, s2, O2, q2, T2, R2, D2, U2, o3, z2, H2, W2, V2 = this, G2 = new ct2(), Y2 = new ct2(), J2 = new ct2();
      function X2() {
        var t3;
        for (t3 = 0; t3 < 286; t3++) s2[2 * t3] = 0;
        for (t3 = 0; t3 < 30; t3++) O2[2 * t3] = 0;
        for (t3 = 0; t3 < 19; t3++) q2[2 * t3] = 0;
        s2[512] = 1, V2.opt_len = V2.static_len = 0, D2 = o3 = 0;
      }
      function K2(t3, e4) {
        var n3, r3, i4 = -1, o4 = t3[1], a3 = 0, s3 = 7, l3 = 4;
        for (0 === o4 && (s3 = 138, l3 = 3), t3[2 * (e4 + 1) + 1] = 65535, n3 = 0; n3 <= e4; n3++) r3 = o4, o4 = t3[2 * (n3 + 1) + 1], ++a3 < s3 && r3 == o4 || (a3 < l3 ? q2[2 * r3] += a3 : 0 !== r3 ? (r3 != i4 && q2[2 * r3]++, q2[32]++) : a3 <= 10 ? q2[34]++ : q2[36]++, i4 = r3, l3 = (a3 = 0) === o4 ? (s3 = 138, 3) : r3 == o4 ? (s3 = 6, 3) : (s3 = 7, 4));
      }
      function Z2(t3) {
        V2.pending_buf[V2.pending++] = t3;
      }
      function Q2(t3) {
        Z2(255 & t3), Z2(t3 >>> 8 & 255);
      }
      function $2(t3, e4) {
        var n3, r3 = e4;
        16 - r3 < W2 ? (Q2(H2 |= (n3 = t3) << W2 & 65535), H2 = n3 >>> 16 - W2, W2 += r3 - 16) : (H2 |= t3 << W2 & 65535, W2 += r3);
      }
      function tt2(t3, e4) {
        var n3 = 2 * t3;
        $2(65535 & e4[n3], 65535 & e4[n3 + 1]);
      }
      function et2(t3, e4) {
        var n3, r3, i4 = -1, o4 = t3[1], a3 = 0, s3 = 7, l3 = 4;
        for (0 === o4 && (s3 = 138, l3 = 3), n3 = 0; n3 <= e4; n3++) if (r3 = o4, o4 = t3[2 * (n3 + 1) + 1], !(++a3 < s3 && r3 == o4)) {
          if (a3 < l3) for (; tt2(r3, q2), 0 != --a3; ) ;
          else 0 !== r3 ? (r3 != i4 && (tt2(r3, q2), a3--), tt2(16, q2), $2(a3 - 3, 2)) : a3 <= 10 ? (tt2(17, q2), $2(a3 - 3, 3)) : (tt2(18, q2), $2(a3 - 11, 7));
          i4 = r3, l3 = (a3 = 0) === o4 ? (s3 = 138, 3) : r3 == o4 ? (s3 = 6, 3) : (s3 = 7, 4);
        }
      }
      function nt2() {
        16 == W2 ? (Q2(H2), W2 = H2 = 0) : 8 <= W2 && (Z2(255 & H2), H2 >>>= 8, W2 -= 8);
      }
      function rt2(t3, e4) {
        var n3, r3, i4;
        if (V2.pending_buf[U2 + 2 * D2] = t3 >>> 8 & 255, V2.pending_buf[U2 + 2 * D2 + 1] = 255 & t3, V2.pending_buf[T2 + D2] = 255 & e4, D2++, 0 === t3 ? s2[2 * e4]++ : (o3++, t3--, s2[2 * (ct2._length_code[e4] + 256 + 1)]++, O2[2 * ct2.d_code(t3)]++), 0 == (8191 & D2) && 2 < B2) {
          for (n3 = 8 * D2, r3 = _2 - N2, i4 = 0; i4 < 30; i4++) n3 += O2[2 * i4] * (5 + ct2.extra_dbits[i4]);
          if (n3 >>>= 3, o3 < Math.floor(D2 / 2) && n3 < Math.floor(r3 / 2)) return true;
        }
        return D2 == R2 - 1;
      }
      function it2(t3, e4) {
        var n3, r3, i4, o4, a3 = 0;
        if (0 !== D2) for (; n3 = V2.pending_buf[U2 + 2 * a3] << 8 & 65280 | 255 & V2.pending_buf[U2 + 2 * a3 + 1], r3 = 255 & V2.pending_buf[T2 + a3], a3++, 0 === n3 ? tt2(r3, t3) : (tt2((i4 = ct2._length_code[r3]) + 256 + 1, t3), 0 !== (o4 = ct2.extra_lbits[i4]) && $2(r3 -= ct2.base_length[i4], o4), tt2(i4 = ct2.d_code(--n3), e4), 0 !== (o4 = ct2.extra_dbits[i4]) && $2(n3 -= ct2.base_dist[i4], o4)), a3 < D2; ) ;
        tt2(256, t3), z2 = t3[513];
      }
      function ot2() {
        8 < W2 ? Q2(H2) : 0 < W2 && Z2(255 & H2), W2 = H2 = 0;
      }
      function at2(t3, e4, n3) {
        var r3, i4, o4;
        $2(0 + (n3 ? 1 : 0), 3), r3 = t3, i4 = e4, o4 = true, ot2(), z2 = 8, o4 && (Q2(i4), Q2(~i4)), V2.pending_buf.set(g3.subarray(r3, r3 + i4), V2.pending), V2.pending += i4;
      }
      function e3(t3, e4, n3) {
        var r3, i4, o4 = 0;
        0 < B2 ? (G2.build_tree(V2), Y2.build_tree(V2), o4 = (function() {
          var t4;
          for (K2(s2, G2.max_code), K2(O2, Y2.max_code), J2.build_tree(V2), t4 = 18; 3 <= t4 && 0 === q2[2 * ct2.bl_order[t4] + 1]; t4--) ;
          return V2.opt_len += 3 * (t4 + 1) + 5 + 5 + 4, t4;
        })(), r3 = V2.opt_len + 3 + 7 >>> 3, (i4 = V2.static_len + 3 + 7 >>> 3) <= r3 && (r3 = i4)) : r3 = i4 = e4 + 5, e4 + 4 <= r3 && -1 != t3 ? at2(t3, e4, n3) : i4 == r3 ? ($2(2 + (n3 ? 1 : 0), 3), it2(ft2.static_ltree, ft2.static_dtree)) : ($2(4 + (n3 ? 1 : 0), 3), (function(t4, e5, n4) {
          var r4;
          for ($2(t4 - 257, 5), $2(e5 - 1, 5), $2(n4 - 4, 4), r4 = 0; r4 < n4; r4++) $2(q2[2 * ct2.bl_order[r4] + 1], 3);
          et2(s2, t4 - 1), et2(O2, e5 - 1);
        })(G2.max_code + 1, Y2.max_code + 1, o4 + 1), it2(s2, O2)), X2(), n3 && ot2();
      }
      function st2(t3) {
        e3(0 <= N2 ? N2 : -1, _2 - N2, t3), N2 = _2, l2.flush_pending();
      }
      function lt2() {
        var t3, e4, n3, r3;
        do {
          if (0 === (r3 = i3 - P2 - _2) && 0 === _2 && 0 === P2) r3 = f2;
          else if (-1 == r3) r3--;
          else if (f2 + f2 - 262 <= _2) {
            for (g3.set(g3.subarray(f2, f2 + f2), 0), F2 -= f2, _2 -= f2, N2 -= f2, n3 = t3 = w2; e4 = 65535 & y2[--n3], y2[n3] = f2 <= e4 ? e4 - f2 : 0, 0 != --t3; ) ;
            for (n3 = t3 = f2; e4 = 65535 & m2[--n3], m2[n3] = f2 <= e4 ? e4 - f2 : 0, 0 != --t3; ) ;
            r3 += f2;
          }
          if (0 === l2.avail_in) return;
          t3 = l2.read_buf(g3, _2 + P2, r3), 3 <= (P2 += t3) && (v2 = ((v2 = 255 & g3[_2]) << x2 ^ 255 & g3[_2 + 1]) & b2);
        } while (P2 < 262 && 0 !== l2.avail_in);
      }
      function ht2(t3) {
        var e4, n3, r3 = I2, i4 = _2, o4 = k2, a3 = f2 - 262 < _2 ? _2 - (f2 - 262) : 0, s3 = M2, l3 = d3, h3 = _2 + 258, u3 = g3[i4 + o4 - 1], c3 = g3[i4 + o4];
        E2 <= k2 && (r3 >>= 2), P2 < s3 && (s3 = P2);
        do {
          if (g3[(e4 = t3) + o4] == c3 && g3[e4 + o4 - 1] == u3 && g3[e4] == g3[i4] && g3[++e4] == g3[i4 + 1]) {
            i4 += 2, e4++;
            do {
            } while (g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && i4 < h3);
            if (n3 = 258 - (h3 - i4), i4 = h3 - 258, o4 < n3) {
              if (F2 = t3, s3 <= (o4 = n3)) break;
              u3 = g3[i4 + o4 - 1], c3 = g3[i4 + o4];
            }
          }
        } while ((t3 = 65535 & m2[t3 & l3]) > a3 && 0 != --r3);
        return o4 <= P2 ? o4 : P2;
      }
      function ut2(t3) {
        return t3.total_in = t3.total_out = 0, t3.msg = null, V2.pending = 0, V2.pending_out = 0, h2 = 113, c2 = 0, G2.dyn_tree = s2, G2.stat_desc = ft2.static_l_desc, Y2.dyn_tree = O2, Y2.stat_desc = ft2.static_d_desc, J2.dyn_tree = q2, J2.stat_desc = ft2.static_bl_desc, W2 = H2 = 0, z2 = 8, X2(), (function() {
          var t4;
          for (i3 = 2 * f2, t4 = y2[w2 - 1] = 0; t4 < w2 - 1; t4++) y2[t4] = 0;
          C2 = pt2[B2].max_lazy, E2 = pt2[B2].good_length, M2 = pt2[B2].nice_length, I2 = pt2[B2].max_chain, L2 = k2 = 2, v2 = S2 = P2 = N2 = _2 = 0;
        })(), 0;
      }
      V2.depth = [], V2.bl_count = [], V2.heap = [], s2 = [], O2 = [], q2 = [], V2.pqdownheap = function(t3, e4) {
        for (var n3 = V2.heap, r3 = n3[e4], i4 = e4 << 1; i4 <= V2.heap_len && (i4 < V2.heap_len && gt2(t3, n3[i4 + 1], n3[i4], V2.depth) && i4++, !gt2(t3, r3, n3[i4], V2.depth)); ) n3[e4] = n3[i4], e4 = i4, i4 <<= 1;
        n3[e4] = r3;
      }, V2.deflateInit = function(t3, e4, n3, r3, i4, o4) {
        return r3 || (r3 = 8), i4 || (i4 = 8), o4 || (o4 = 0), t3.msg = null, -1 == e4 && (e4 = 6), i4 < 1 || 9 < i4 || 8 != r3 || n3 < 9 || 15 < n3 || e4 < 0 || 9 < e4 || o4 < 0 || 2 < o4 ? -2 : (t3.dstate = V2, d3 = (f2 = 1 << (p2 = n3)) - 1, b2 = (w2 = 1 << (a2 = i4 + 7)) - 1, x2 = Math.floor((a2 + 3 - 1) / 3), g3 = new Uint8Array(2 * f2), m2 = [], y2 = [], R2 = 1 << i4 + 6, V2.pending_buf = new Uint8Array(4 * R2), u2 = 4 * R2, U2 = Math.floor(R2 / 2), T2 = 3 * R2, B2 = e4, j2 = o4, ut2(t3));
      }, V2.deflateEnd = function() {
        return 42 != h2 && 113 != h2 && 666 != h2 ? -2 : (V2.pending_buf = null, g3 = m2 = y2 = null, V2.dstate = null, 113 == h2 ? -3 : 0);
      }, V2.deflateParams = function(t3, e4, n3) {
        var r3 = 0;
        return -1 == e4 && (e4 = 6), e4 < 0 || 9 < e4 || n3 < 0 || 2 < n3 ? -2 : (pt2[B2].func != pt2[e4].func && 0 !== t3.total_in && (r3 = t3.deflate(1)), B2 != e4 && (C2 = pt2[B2 = e4].max_lazy, E2 = pt2[B2].good_length, M2 = pt2[B2].nice_length, I2 = pt2[B2].max_chain), j2 = n3, r3);
      }, V2.deflateSetDictionary = function(t3, e4, n3) {
        var r3, i4 = n3, o4 = 0;
        if (!e4 || 42 != h2) return -2;
        if (i4 < 3) return 0;
        for (f2 - 262 < i4 && (o4 = n3 - (i4 = f2 - 262)), g3.set(e4.subarray(o4, o4 + i4), 0), N2 = _2 = i4, v2 = ((v2 = 255 & g3[0]) << x2 ^ 255 & g3[1]) & b2, r3 = 0; r3 <= i4 - 3; r3++) v2 = (v2 << x2 ^ 255 & g3[r3 + 2]) & b2, m2[r3 & d3] = y2[v2], y2[v2] = r3;
        return 0;
      }, V2.deflate = function(t3, e4) {
        var n3, r3, i4, o4, a3, s3;
        if (4 < e4 || e4 < 0) return -2;
        if (!t3.next_out || !t3.next_in && 0 !== t3.avail_in || 666 == h2 && 4 != e4) return t3.msg = dt2[4], -2;
        if (0 === t3.avail_out) return t3.msg = dt2[7], -5;
        if (l2 = t3, o4 = c2, c2 = e4, 42 == h2 && (r3 = 8 + (p2 - 8 << 4) << 8, 3 < (i4 = (B2 - 1 & 255) >> 1) && (i4 = 3), r3 |= i4 << 6, 0 !== _2 && (r3 |= 32), h2 = 113, Z2((s3 = r3 += 31 - r3 % 31) >> 8 & 255), Z2(255 & s3)), 0 !== V2.pending) {
          if (l2.flush_pending(), 0 === l2.avail_out) return c2 = -1, 0;
        } else if (0 === l2.avail_in && e4 <= o4 && 4 != e4) return l2.msg = dt2[7], -5;
        if (666 == h2 && 0 !== l2.avail_in) return t3.msg = dt2[7], -5;
        if (0 !== l2.avail_in || 0 !== P2 || 0 != e4 && 666 != h2) {
          switch (a3 = -1, pt2[B2].func) {
            case 0:
              a3 = (function(t4) {
                var e5, n4 = 65535;
                for (u2 - 5 < n4 && (n4 = u2 - 5); ; ) {
                  if (P2 <= 1) {
                    if (lt2(), 0 === P2 && 0 == t4) return 0;
                    if (0 === P2) break;
                  }
                  if (_2 += P2, e5 = N2 + n4, ((P2 = 0) === _2 || e5 <= _2) && (P2 = _2 - e5, _2 = e5, st2(false), 0 === l2.avail_out)) return 0;
                  if (f2 - 262 <= _2 - N2 && (st2(false), 0 === l2.avail_out)) return 0;
                }
                return st2(4 == t4), 0 === l2.avail_out ? 4 == t4 ? 2 : 0 : 4 == t4 ? 3 : 1;
              })(e4);
              break;
            case 1:
              a3 = (function(t4) {
                for (var e5, n4 = 0; ; ) {
                  if (P2 < 262) {
                    if (lt2(), P2 < 262 && 0 == t4) return 0;
                    if (0 === P2) break;
                  }
                  if (3 <= P2 && (v2 = (v2 << x2 ^ 255 & g3[_2 + 2]) & b2, n4 = 65535 & y2[v2], m2[_2 & d3] = y2[v2], y2[v2] = _2), 0 !== n4 && (_2 - n4 & 65535) <= f2 - 262 && 2 != j2 && (L2 = ht2(n4)), 3 <= L2) if (e5 = rt2(_2 - F2, L2 - 3), P2 -= L2, L2 <= C2 && 3 <= P2) {
                    for (L2--; v2 = (v2 << x2 ^ 255 & g3[++_2 + 2]) & b2, n4 = 65535 & y2[v2], m2[_2 & d3] = y2[v2], y2[v2] = _2, 0 != --L2; ) ;
                    _2++;
                  } else _2 += L2, L2 = 0, v2 = ((v2 = 255 & g3[_2]) << x2 ^ 255 & g3[_2 + 1]) & b2;
                  else e5 = rt2(0, 255 & g3[_2]), P2--, _2++;
                  if (e5 && (st2(false), 0 === l2.avail_out)) return 0;
                }
                return st2(4 == t4), 0 === l2.avail_out ? 4 == t4 ? 2 : 0 : 4 == t4 ? 3 : 1;
              })(e4);
              break;
            case 2:
              a3 = (function(t4) {
                for (var e5, n4, r4 = 0; ; ) {
                  if (P2 < 262) {
                    if (lt2(), P2 < 262 && 0 == t4) return 0;
                    if (0 === P2) break;
                  }
                  if (3 <= P2 && (v2 = (v2 << x2 ^ 255 & g3[_2 + 2]) & b2, r4 = 65535 & y2[v2], m2[_2 & d3] = y2[v2], y2[v2] = _2), k2 = L2, A2 = F2, L2 = 2, 0 !== r4 && k2 < C2 && (_2 - r4 & 65535) <= f2 - 262 && (2 != j2 && (L2 = ht2(r4)), L2 <= 5 && (1 == j2 || 3 == L2 && 4096 < _2 - F2) && (L2 = 2)), 3 <= k2 && L2 <= k2) {
                    for (n4 = _2 + P2 - 3, e5 = rt2(_2 - 1 - A2, k2 - 3), P2 -= k2 - 1, k2 -= 2; ++_2 <= n4 && (v2 = (v2 << x2 ^ 255 & g3[_2 + 2]) & b2, r4 = 65535 & y2[v2], m2[_2 & d3] = y2[v2], y2[v2] = _2), 0 != --k2; ) ;
                    if (S2 = 0, L2 = 2, _2++, e5 && (st2(false), 0 === l2.avail_out)) return 0;
                  } else if (0 !== S2) {
                    if ((e5 = rt2(0, 255 & g3[_2 - 1])) && st2(false), _2++, P2--, 0 === l2.avail_out) return 0;
                  } else S2 = 1, _2++, P2--;
                }
                return 0 !== S2 && (e5 = rt2(0, 255 & g3[_2 - 1]), S2 = 0), st2(4 == t4), 0 === l2.avail_out ? 4 == t4 ? 2 : 0 : 4 == t4 ? 3 : 1;
              })(e4);
          }
          if (2 != a3 && 3 != a3 || (h2 = 666), 0 == a3 || 2 == a3) return 0 === l2.avail_out && (c2 = -1), 0;
          if (1 == a3) {
            if (1 == e4) $2(2, 3), tt2(256, ft2.static_ltree), nt2(), 1 + z2 + 10 - W2 < 9 && ($2(2, 3), tt2(256, ft2.static_ltree), nt2()), z2 = 7;
            else if (at2(0, 0, false), 3 == e4) for (n3 = 0; n3 < w2; n3++) y2[n3] = 0;
            if (l2.flush_pending(), 0 === l2.avail_out) return c2 = -1, 0;
          }
        }
        return 4 != e4 ? 0 : 1;
      };
    }
    function i2() {
      this.next_in_index = 0, this.next_out_index = 0, this.avail_in = 0, this.total_in = 0, this.avail_out = 0, this.total_out = 0;
    }
    i2.prototype = { deflateInit: function(t3, e3) {
      return this.dstate = new r2(), e3 || (e3 = d2), this.dstate.deflateInit(this, t3, e3);
    }, deflate: function(t3) {
      return this.dstate ? this.dstate.deflate(this, t3) : -2;
    }, deflateEnd: function() {
      if (!this.dstate) return -2;
      var t3 = this.dstate.deflateEnd();
      return this.dstate = null, t3;
    }, deflateParams: function(t3, e3) {
      return this.dstate ? this.dstate.deflateParams(this, t3, e3) : -2;
    }, deflateSetDictionary: function(t3, e3) {
      return this.dstate ? this.dstate.deflateSetDictionary(this, t3, e3) : -2;
    }, read_buf: function(t3, e3, n3) {
      var r3 = this.avail_in;
      return n3 < r3 && (r3 = n3), 0 === r3 ? 0 : (this.avail_in -= r3, t3.set(this.next_in.subarray(this.next_in_index, this.next_in_index + r3), e3), this.next_in_index += r3, this.total_in += r3, r3);
    }, flush_pending: function() {
      var t3 = this, e3 = t3.dstate.pending;
      e3 > t3.avail_out && (e3 = t3.avail_out), 0 !== e3 && (t3.next_out.set(t3.dstate.pending_buf.subarray(t3.dstate.pending_out, t3.dstate.pending_out + e3), t3.next_out_index), t3.next_out_index += e3, t3.dstate.pending_out += e3, t3.total_out += e3, t3.avail_out -= e3, t3.dstate.pending -= e3, 0 === t3.dstate.pending && (t3.dstate.pending_out = 0));
    } };
    var o2 = t2.zip || t2;
    o2.Deflater = o2._jzlib_Deflater = function(t3) {
      var s2 = new i2(), l2 = new Uint8Array(512), e3 = t3 ? t3.level : -1;
      void 0 === e3 && (e3 = -1), s2.deflateInit(e3), s2.next_out = l2, this.append = function(t4, e4) {
        var n3, r3 = [], i3 = 0, o3 = 0, a2 = 0;
        if (t4.length) {
          s2.next_in_index = 0, s2.next_in = t4, s2.avail_in = t4.length;
          do {
            if (s2.next_out_index = 0, s2.avail_out = 512, 0 != s2.deflate(0)) throw new Error("deflating: " + s2.msg);
            s2.next_out_index && (512 == s2.next_out_index ? r3.push(new Uint8Array(l2)) : r3.push(new Uint8Array(l2.subarray(0, s2.next_out_index)))), a2 += s2.next_out_index, e4 && 0 < s2.next_in_index && s2.next_in_index != i3 && (e4(s2.next_in_index), i3 = s2.next_in_index);
          } while (0 < s2.avail_in || 0 === s2.avail_out);
          return n3 = new Uint8Array(a2), r3.forEach(function(t5) {
            n3.set(t5, o3), o3 += t5.length;
          }), n3;
        }
      }, this.flush = function() {
        var t4, e4, n3 = [], r3 = 0, i3 = 0;
        do {
          if (s2.next_out_index = 0, s2.avail_out = 512, 1 != (t4 = s2.deflate(4)) && 0 != t4) throw new Error("deflating: " + s2.msg);
          0 < 512 - s2.avail_out && n3.push(new Uint8Array(l2.subarray(0, s2.next_out_index))), i3 += s2.next_out_index;
        } while (0 < s2.avail_in || 0 === s2.avail_out);
        return s2.deflateEnd(), e4 = new Uint8Array(i3), n3.forEach(function(t5) {
          e4.set(t5, r3), r3 += t5.length;
        }), e4;
      };
    };
  })("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()), ("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()).RGBColor = function(t2) {
    var e2;
    t2 = t2 || "", this.ok = false, "#" == t2.charAt(0) && (t2 = t2.substr(1, 6)), t2 = (t2 = t2.replace(/ /g, "")).toLowerCase();
    var n2 = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" };
    for (var r2 in n2) t2 == r2 && (t2 = n2[r2]);
    for (var i2 = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(t3) {
      return [parseInt(t3[1]), parseInt(t3[2]), parseInt(t3[3])];
    } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(t3) {
      return [parseInt(t3[1], 16), parseInt(t3[2], 16), parseInt(t3[3], 16)];
    } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(t3) {
      return [parseInt(t3[1] + t3[1], 16), parseInt(t3[2] + t3[2], 16), parseInt(t3[3] + t3[3], 16)];
    } }], o2 = 0; o2 < i2.length; o2++) {
      var a2 = i2[o2].re, s2 = i2[o2].process, l2 = a2.exec(t2);
      l2 && (e2 = s2(l2), this.r = e2[0], this.g = e2[1], this.b = e2[2], this.ok = true);
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : 255 < this.r ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : 255 < this.g ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : 255 < this.b ? 255 : this.b, this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toHex = function() {
      var t3 = this.r.toString(16), e3 = this.g.toString(16), n3 = this.b.toString(16);
      return 1 == t3.length && (t3 = "0" + t3), 1 == e3.length && (e3 = "0" + e3), 1 == n3.length && (n3 = "0" + n3), "#" + t3 + e3 + n3;
    };
  }, (function(t2) {
    var n2 = "+".charCodeAt(0), r2 = "/".charCodeAt(0), i2 = "0".charCodeAt(0), o2 = "a".charCodeAt(0), a2 = "A".charCodeAt(0), s2 = "-".charCodeAt(0), l2 = "_".charCodeAt(0), u2 = function(t3) {
      var e3 = t3.charCodeAt(0);
      return e3 === n2 || e3 === s2 ? 62 : e3 === r2 || e3 === l2 ? 63 : e3 < i2 ? -1 : e3 < i2 + 10 ? e3 - i2 + 26 + 26 : e3 < a2 + 26 ? e3 - a2 : e3 < o2 + 26 ? e3 - o2 + 26 : void 0;
    };
    t2.API.TTFFont = (function() {
      function i3(t3, e3, n3) {
        var r3;
        if (this.rawData = t3, r3 = this.contents = new J2(t3), this.contents.pos = 4, "ttcf" === r3.readString(4)) {
          if (!e3) throw new Error("Must specify a font name for TTC files.");
          throw new Error("Font " + e3 + " not found in TTC file.");
        }
        r3.pos = 0, this.parse(), this.subset = new P2(this), this.registerTTF();
      }
      return i3.open = function(t3, e3, n3, r3) {
        if ("string" != typeof n3) throw new Error("Invalid argument supplied in TTFFont.open");
        return new i3((function(t4) {
          var e4, n4, r4, i4, o3, a3;
          if (0 < t4.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
          var s3 = t4.length;
          o3 = "=" === t4.charAt(s3 - 2) ? 2 : "=" === t4.charAt(s3 - 1) ? 1 : 0, a3 = new Uint8Array(3 * t4.length / 4 - o3), r4 = 0 < o3 ? t4.length - 4 : t4.length;
          var l3 = 0;
          function h3(t5) {
            a3[l3++] = t5;
          }
          for (n4 = e4 = 0; e4 < r4; e4 += 4, n4 += 3) h3((16711680 & (i4 = u2(t4.charAt(e4)) << 18 | u2(t4.charAt(e4 + 1)) << 12 | u2(t4.charAt(e4 + 2)) << 6 | u2(t4.charAt(e4 + 3)))) >> 16), h3((65280 & i4) >> 8), h3(255 & i4);
          return 2 === o3 ? h3(255 & (i4 = u2(t4.charAt(e4)) << 2 | u2(t4.charAt(e4 + 1)) >> 4)) : 1 === o3 && (h3((i4 = u2(t4.charAt(e4)) << 10 | u2(t4.charAt(e4 + 1)) << 4 | u2(t4.charAt(e4 + 2)) >> 2) >> 8 & 255), h3(255 & i4)), a3;
        })(n3), e3, r3);
      }, i3.prototype.parse = function() {
        return this.directory = new e2(this.contents), this.head = new p2(this), this.name = new b2(this), this.cmap = new y2(this), this.toUnicode = /* @__PURE__ */ new Map(), this.hhea = new g2(this), this.maxp = new x2(this), this.hmtx = new N2(this), this.post = new v2(this), this.os2 = new m2(this), this.loca = new F2(this), this.glyf = new A2(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
      }, i3.prototype.registerTTF = function() {
        var i4, t3, e3, n3, r3;
        if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function() {
          var t4, e4, n4, r4;
          for (r4 = [], t4 = 0, e4 = (n4 = this.bbox).length; t4 < e4; t4++) i4 = n4[t4], r4.push(Math.round(i4 * this.scaleFactor));
          return r4;
        }.call(this), this.stemV = 0, this.post.exists ? (e3 = 255 & (n3 = this.post.italic_angle), true & (t3 = n3 >> 16) && (t3 = -(1 + (65535 ^ t3))), this.italicAngle = +(t3 + "." + e3)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (r3 = this.familyClass) || 2 === r3 || 3 === r3 || 4 === r3 || 5 === r3 || 7 === r3, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
      }, i3.prototype.characterToGlyph = function(t3) {
        var e3;
        return (null != (e3 = this.cmap.unicode) ? e3.codeMap[t3] : void 0) || 0;
      }, i3.prototype.widthOfGlyph = function(t3) {
        var e3;
        return e3 = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t3).advance * e3;
      }, i3.prototype.widthOfString = function(t3, e3, n3) {
        var r3, i4, o3, a3, s3;
        for (i4 = a3 = o3 = 0, s3 = (t3 = "" + t3).length; 0 <= s3 ? a3 < s3 : s3 < a3; i4 = 0 <= s3 ? ++a3 : --a3) r3 = t3.charCodeAt(i4), o3 += this.widthOfGlyph(this.characterToGlyph(r3)) + n3 * (1e3 / e3) || 0;
        return o3 * (e3 / 1e3);
      }, i3.prototype.lineHeight = function(t3, e3) {
        var n3;
        return null == e3 && (e3 = false), n3 = e3 ? this.lineGap : 0, (this.ascender + n3 - this.decender) / 1e3 * t3;
      }, i3;
    })();
    var h2, J2 = (function() {
      function t3(t4) {
        this.data = null != t4 ? t4 : [], this.pos = 0, this.length = this.data.length;
      }
      return t3.prototype.readByte = function() {
        return this.data[this.pos++];
      }, t3.prototype.writeByte = function(t4) {
        return this.data[this.pos++] = t4;
      }, t3.prototype.readUInt32 = function() {
        return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
      }, t3.prototype.writeUInt32 = function(t4) {
        return this.writeByte(t4 >>> 24 & 255), this.writeByte(t4 >> 16 & 255), this.writeByte(t4 >> 8 & 255), this.writeByte(255 & t4);
      }, t3.prototype.readInt32 = function() {
        var t4;
        return 2147483648 <= (t4 = this.readUInt32()) ? t4 - 4294967296 : t4;
      }, t3.prototype.writeInt32 = function(t4) {
        return t4 < 0 && (t4 += 4294967296), this.writeUInt32(t4);
      }, t3.prototype.readUInt16 = function() {
        return this.readByte() << 8 | this.readByte();
      }, t3.prototype.writeUInt16 = function(t4) {
        return this.writeByte(t4 >> 8 & 255), this.writeByte(255 & t4);
      }, t3.prototype.readInt16 = function() {
        var t4;
        return 32768 <= (t4 = this.readUInt16()) ? t4 - 65536 : t4;
      }, t3.prototype.writeInt16 = function(t4) {
        return t4 < 0 && (t4 += 65536), this.writeUInt16(t4);
      }, t3.prototype.readString = function(t4) {
        var e3, n3, r3;
        for (n3 = [], e3 = r3 = 0; 0 <= t4 ? r3 < t4 : t4 < r3; e3 = 0 <= t4 ? ++r3 : --r3) n3[e3] = String.fromCharCode(this.readByte());
        return n3.join("");
      }, t3.prototype.writeString = function(t4) {
        var e3, n3, r3, i3;
        for (i3 = [], e3 = n3 = 0, r3 = t4.length; 0 <= r3 ? n3 < r3 : r3 < n3; e3 = 0 <= r3 ? ++n3 : --n3) i3.push(this.writeByte(t4.charCodeAt(e3)));
        return i3;
      }, t3.prototype.readShort = function() {
        return this.readInt16();
      }, t3.prototype.writeShort = function(t4) {
        return this.writeInt16(t4);
      }, t3.prototype.readLongLong = function() {
        var t4, e3, n3, r3, i3, o3, a3, s3;
        return t4 = this.readByte(), e3 = this.readByte(), n3 = this.readByte(), r3 = this.readByte(), i3 = this.readByte(), o3 = this.readByte(), a3 = this.readByte(), s3 = this.readByte(), 128 & t4 ? -1 * (72057594037927940 * (255 ^ t4) + 281474976710656 * (255 ^ e3) + 1099511627776 * (255 ^ n3) + 4294967296 * (255 ^ r3) + 16777216 * (255 ^ i3) + 65536 * (255 ^ o3) + 256 * (255 ^ a3) + (255 ^ s3) + 1) : 72057594037927940 * t4 + 281474976710656 * e3 + 1099511627776 * n3 + 4294967296 * r3 + 16777216 * i3 + 65536 * o3 + 256 * a3 + s3;
      }, t3.prototype.writeLongLong = function(t4) {
        var e3, n3;
        return e3 = Math.floor(t4 / 4294967296), n3 = 4294967295 & t4, this.writeByte(e3 >> 24 & 255), this.writeByte(e3 >> 16 & 255), this.writeByte(e3 >> 8 & 255), this.writeByte(255 & e3), this.writeByte(n3 >> 24 & 255), this.writeByte(n3 >> 16 & 255), this.writeByte(n3 >> 8 & 255), this.writeByte(255 & n3);
      }, t3.prototype.readInt = function() {
        return this.readInt32();
      }, t3.prototype.writeInt = function(t4) {
        return this.writeInt32(t4);
      }, t3.prototype.read = function(t4) {
        var e3, n3;
        for (e3 = [], n3 = 0; 0 <= t4 ? n3 < t4 : t4 < n3; 0 <= t4 ? ++n3 : --n3) e3.push(this.readByte());
        return e3;
      }, t3.prototype.write = function(t4) {
        var e3, n3, r3, i3;
        for (i3 = [], n3 = 0, r3 = t4.length; n3 < r3; n3++) e3 = t4[n3], i3.push(this.writeByte(e3));
        return i3;
      }, t3;
    })(), e2 = (function() {
      var d3;
      function t3(t4) {
        var e3, n3, r3;
        for (this.scalarType = t4.readInt(), this.tableCount = t4.readShort(), this.searchRange = t4.readShort(), this.entrySelector = t4.readShort(), this.rangeShift = t4.readShort(), this.tables = {}, n3 = 0, r3 = this.tableCount; 0 <= r3 ? n3 < r3 : r3 < n3; 0 <= r3 ? ++n3 : --n3) e3 = { tag: t4.readString(4), checksum: t4.readInt(), offset: t4.readInt(), length: t4.readInt() }, this.tables[e3.tag] = e3;
      }
      return t3.prototype.encode = function(t4) {
        var e3, n3, r3, i3, o3, a3, s3, l3, h3, u3, c3, f3, p3;
        for (p3 in c3 = Object.keys(t4).length, a3 = Math.log(2), h3 = 16 * Math.floor(Math.log(c3) / a3), i3 = Math.floor(h3 / a3), l3 = 16 * c3 - h3, (n3 = new J2()).writeInt(this.scalarType), n3.writeShort(c3), n3.writeShort(h3), n3.writeShort(i3), n3.writeShort(l3), r3 = 16 * c3, s3 = n3.pos + r3, o3 = null, f3 = [], t4) for (u3 = t4[p3], n3.writeString(p3), n3.writeInt(d3(u3)), n3.writeInt(s3), n3.writeInt(u3.length), f3 = f3.concat(u3), "head" === p3 && (o3 = s3), s3 += u3.length; s3 % 4; ) f3.push(0), s3++;
        return n3.write(f3), e3 = 2981146554 - d3(n3.data), n3.pos = o3 + 8, n3.writeUInt32(e3), n3.data;
      }, d3 = function(t4) {
        var e3, n3, r3, i3;
        for (t4 = L2.call(t4); t4.length % 4; ) t4.push(0);
        for (n3 = new J2(t4), r3 = e3 = 0, i3 = t4.length; r3 < i3; r3 += 4) e3 += n3.readUInt32();
        return 4294967295 & e3;
      }, t3;
    })(), c2 = {}.hasOwnProperty, f2 = function(t3, e3) {
      for (var n3 in e3) c2.call(e3, n3) && (t3[n3] = e3[n3]);
      function r3() {
        this.constructor = t3;
      }
      return r3.prototype = e3.prototype, t3.prototype = new r3(), t3.__super__ = e3.prototype, t3;
    };
    h2 = (function() {
      function t3(t4) {
        var e3;
        this.file = t4, e3 = this.file.directory.tables[this.tag], this.exists = !!e3, e3 && (this.offset = e3.offset, this.length = e3.length, this.parse(this.file.contents));
      }
      return t3.prototype.parse = function() {
      }, t3.prototype.encode = function() {
      }, t3.prototype.raw = function() {
        return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
      }, t3;
    })();
    var p2 = (function(t3) {
      function e3() {
        return e3.__super__.constructor.apply(this, arguments);
      }
      return f2(e3, h2), e3.prototype.tag = "head", e3.prototype.parse = function(t4) {
        return t4.pos = this.offset, this.version = t4.readInt(), this.revision = t4.readInt(), this.checkSumAdjustment = t4.readInt(), this.magicNumber = t4.readInt(), this.flags = t4.readShort(), this.unitsPerEm = t4.readShort(), this.created = t4.readLongLong(), this.modified = t4.readLongLong(), this.xMin = t4.readShort(), this.yMin = t4.readShort(), this.xMax = t4.readShort(), this.yMax = t4.readShort(), this.macStyle = t4.readShort(), this.lowestRecPPEM = t4.readShort(), this.fontDirectionHint = t4.readShort(), this.indexToLocFormat = t4.readShort(), this.glyphDataFormat = t4.readShort();
      }, e3.prototype.encode = function(t4) {
        var e4;
        return (e4 = new J2()).writeInt(this.version), e4.writeInt(this.revision), e4.writeInt(this.checkSumAdjustment), e4.writeInt(this.magicNumber), e4.writeShort(this.flags), e4.writeShort(this.unitsPerEm), e4.writeLongLong(this.created), e4.writeLongLong(this.modified), e4.writeShort(this.xMin), e4.writeShort(this.yMin), e4.writeShort(this.xMax), e4.writeShort(this.yMax), e4.writeShort(this.macStyle), e4.writeShort(this.lowestRecPPEM), e4.writeShort(this.fontDirectionHint), e4.writeShort(t4), e4.writeShort(this.glyphDataFormat), e4.data;
      }, e3;
    })(), d2 = (function() {
      function t3(n3, t4) {
        var e3, r3, i3, o3, a3, s3, l3, h3, u3, c3, f3, p3, d3, g3, m3, y3, v3, w3;
        switch (this.platformID = n3.readUInt16(), this.encodingID = n3.readShort(), this.offset = t4 + n3.readInt(), u3 = n3.pos, n3.pos = this.offset, this.format = n3.readUInt16(), this.length = n3.readUInt16(), this.language = n3.readUInt16(), this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format, this.codeMap = {}, this.format) {
          case 0:
            for (s3 = m3 = 0; m3 < 256; s3 = ++m3) this.codeMap[s3] = n3.readByte();
            break;
          case 4:
            for (f3 = n3.readUInt16(), c3 = f3 / 2, n3.pos += 6, i3 = (function() {
              var t5, e4;
              for (e4 = [], s3 = t5 = 0; 0 <= c3 ? t5 < c3 : c3 < t5; s3 = 0 <= c3 ? ++t5 : --t5) e4.push(n3.readUInt16());
              return e4;
            })(), n3.pos += 2, d3 = (function() {
              var t5, e4;
              for (e4 = [], s3 = t5 = 0; 0 <= c3 ? t5 < c3 : c3 < t5; s3 = 0 <= c3 ? ++t5 : --t5) e4.push(n3.readUInt16());
              return e4;
            })(), l3 = (function() {
              var t5, e4;
              for (e4 = [], s3 = t5 = 0; 0 <= c3 ? t5 < c3 : c3 < t5; s3 = 0 <= c3 ? ++t5 : --t5) e4.push(n3.readUInt16());
              return e4;
            })(), h3 = (function() {
              var t5, e4;
              for (e4 = [], s3 = t5 = 0; 0 <= c3 ? t5 < c3 : c3 < t5; s3 = 0 <= c3 ? ++t5 : --t5) e4.push(n3.readUInt16());
              return e4;
            })(), r3 = (this.length - n3.pos + this.offset) / 2, a3 = (function() {
              var t5, e4;
              for (e4 = [], s3 = t5 = 0; 0 <= r3 ? t5 < r3 : r3 < t5; s3 = 0 <= r3 ? ++t5 : --t5) e4.push(n3.readUInt16());
              return e4;
            })(), s3 = y3 = 0, w3 = i3.length; y3 < w3; s3 = ++y3) for (g3 = i3[s3], e3 = v3 = p3 = d3[s3]; p3 <= g3 ? v3 <= g3 : g3 <= v3; e3 = p3 <= g3 ? ++v3 : --v3) 0 === h3[s3] ? o3 = e3 + l3[s3] : 0 !== (o3 = a3[h3[s3] / 2 + (e3 - p3) - (c3 - s3)] || 0) && (o3 += l3[s3]), this.codeMap[e3] = 65535 & o3;
        }
        n3.pos = u3;
      }
      return t3.encode = function(t4, e3) {
        var n3, r3, i3, o3, a3, s3, l3, h3, u3, c3, f3, p3, d3, g3, m3, y3, v3, w3, b3, x3, N3, L3, A3, S3, _3, F3, P3, k2, I2, C2, B2, j2, E2, M2, O2, q2, T2, R2, D2, U2, z2, H2, W2, V2, G2, Y2;
        switch (k2 = new J2(), o3 = Object.keys(t4).sort(function(t5, e4) {
          return t5 - e4;
        }), e3) {
          case "macroman":
            for (d3 = 0, g3 = (function() {
              var t5, e4;
              for (e4 = [], p3 = t5 = 0; t5 < 256; p3 = ++t5) e4.push(0);
              return e4;
            })(), y3 = { 0: 0 }, i3 = {}, I2 = 0, E2 = o3.length; I2 < E2; I2++) null == y3[W2 = t4[r3 = o3[I2]]] && (y3[W2] = ++d3), i3[r3] = { old: t4[r3], new: y3[t4[r3]] }, g3[r3] = y3[t4[r3]];
            return k2.writeUInt16(1), k2.writeUInt16(0), k2.writeUInt32(12), k2.writeUInt16(0), k2.writeUInt16(262), k2.writeUInt16(0), k2.write(g3), { charMap: i3, subtable: k2.data, maxGlyphID: d3 + 1 };
          case "unicode":
            for (F3 = [], u3 = [], y3 = {}, n3 = {}, m3 = l3 = null, C2 = v3 = 0, M2 = o3.length; C2 < M2; C2++) null == y3[b3 = t4[r3 = o3[C2]]] && (y3[b3] = ++v3), n3[r3] = { old: b3, new: y3[b3] }, a3 = y3[b3] - r3, null != m3 && a3 === l3 || (m3 && u3.push(m3), F3.push(r3), l3 = a3), m3 = r3;
            for (m3 && u3.push(m3), u3.push(65535), F3.push(65535), S3 = 2 * (A3 = F3.length), L3 = 2 * Math.pow(Math.log(A3) / Math.LN2, 2), c3 = Math.log(L3 / 2) / Math.LN2, N3 = 2 * A3 - L3, s3 = [], x3 = [], f3 = [], p3 = B2 = 0, O2 = F3.length; B2 < O2; p3 = ++B2) {
              if (_3 = F3[p3], h3 = u3[p3], 65535 === _3) {
                s3.push(0), x3.push(0);
                break;
              }
              if (32768 <= _3 - (P3 = n3[_3].new)) for (s3.push(0), x3.push(2 * (f3.length + A3 - p3)), r3 = j2 = _3; _3 <= h3 ? j2 <= h3 : h3 <= j2; r3 = _3 <= h3 ? ++j2 : --j2) f3.push(n3[r3].new);
              else s3.push(P3 - _3), x3.push(0);
            }
            for (k2.writeUInt16(3), k2.writeUInt16(1), k2.writeUInt32(12), k2.writeUInt16(4), k2.writeUInt16(16 + 8 * A3 + 2 * f3.length), k2.writeUInt16(0), k2.writeUInt16(S3), k2.writeUInt16(L3), k2.writeUInt16(c3), k2.writeUInt16(N3), z2 = 0, q2 = u3.length; z2 < q2; z2++) r3 = u3[z2], k2.writeUInt16(r3);
            for (k2.writeUInt16(0), H2 = 0, T2 = F3.length; H2 < T2; H2++) r3 = F3[H2], k2.writeUInt16(r3);
            for (V2 = 0, R2 = s3.length; V2 < R2; V2++) a3 = s3[V2], k2.writeUInt16(a3);
            for (G2 = 0, D2 = x3.length; G2 < D2; G2++) w3 = x3[G2], k2.writeUInt16(w3);
            for (Y2 = 0, U2 = f3.length; Y2 < U2; Y2++) d3 = f3[Y2], k2.writeUInt16(d3);
            return { charMap: n3, subtable: k2.data, maxGlyphID: v3 + 1 };
        }
      }, t3;
    })(), y2 = (function(t3) {
      function e3() {
        return e3.__super__.constructor.apply(this, arguments);
      }
      return f2(e3, h2), e3.prototype.tag = "cmap", e3.prototype.parse = function(t4) {
        var e4, n3, r3;
        for (t4.pos = this.offset, this.version = t4.readUInt16(), n3 = t4.readUInt16(), this.tables = [], this.unicode = null, r3 = 0; 0 <= n3 ? r3 < n3 : n3 < r3; 0 <= n3 ? ++r3 : --r3) e4 = new d2(t4, this.offset), this.tables.push(e4), e4.isUnicode && null == this.unicode && (this.unicode = e4);
        return true;
      }, e3.encode = function(t4, e4) {
        var n3, r3;
        return null == e4 && (e4 = "macroman"), n3 = d2.encode(t4, e4), (r3 = new J2()).writeUInt16(0), r3.writeUInt16(1), n3.table = r3.data.concat(n3.subtable), n3;
      }, e3;
    })(), g2 = (function(t3) {
      function e3() {
        return e3.__super__.constructor.apply(this, arguments);
      }
      return f2(e3, h2), e3.prototype.tag = "hhea", e3.prototype.parse = function(t4) {
        return t4.pos = this.offset, this.version = t4.readInt(), this.ascender = t4.readShort(), this.decender = t4.readShort(), this.lineGap = t4.readShort(), this.advanceWidthMax = t4.readShort(), this.minLeftSideBearing = t4.readShort(), this.minRightSideBearing = t4.readShort(), this.xMaxExtent = t4.readShort(), this.caretSlopeRise = t4.readShort(), this.caretSlopeRun = t4.readShort(), this.caretOffset = t4.readShort(), t4.pos += 8, this.metricDataFormat = t4.readShort(), this.numberOfMetrics = t4.readUInt16();
      }, e3;
    })(), m2 = (function(t3) {
      function e3() {
        return e3.__super__.constructor.apply(this, arguments);
      }
      return f2(e3, h2), e3.prototype.tag = "OS/2", e3.prototype.parse = function(n3) {
        if (n3.pos = this.offset, this.version = n3.readUInt16(), this.averageCharWidth = n3.readShort(), this.weightClass = n3.readUInt16(), this.widthClass = n3.readUInt16(), this.type = n3.readShort(), this.ySubscriptXSize = n3.readShort(), this.ySubscriptYSize = n3.readShort(), this.ySubscriptXOffset = n3.readShort(), this.ySubscriptYOffset = n3.readShort(), this.ySuperscriptXSize = n3.readShort(), this.ySuperscriptYSize = n3.readShort(), this.ySuperscriptXOffset = n3.readShort(), this.ySuperscriptYOffset = n3.readShort(), this.yStrikeoutSize = n3.readShort(), this.yStrikeoutPosition = n3.readShort(), this.familyClass = n3.readShort(), this.panose = (function() {
          var t4, e4;
          for (e4 = [], t4 = 0; t4 < 10; ++t4) e4.push(n3.readByte());
          return e4;
        })(), this.charRange = (function() {
          var t4, e4;
          for (e4 = [], t4 = 0; t4 < 4; ++t4) e4.push(n3.readInt());
          return e4;
        })(), this.vendorID = n3.readString(4), this.selection = n3.readShort(), this.firstCharIndex = n3.readShort(), this.lastCharIndex = n3.readShort(), 0 < this.version && (this.ascent = n3.readShort(), this.descent = n3.readShort(), this.lineGap = n3.readShort(), this.winAscent = n3.readShort(), this.winDescent = n3.readShort(), this.codePageRange = (function() {
          var t4, e4;
          for (e4 = [], t4 = 0; t4 < 2; ++t4) e4.push(n3.readInt());
          return e4;
        })(), 1 < this.version)) return this.xHeight = n3.readShort(), this.capHeight = n3.readShort(), this.defaultChar = n3.readShort(), this.breakChar = n3.readShort(), this.maxContext = n3.readShort();
      }, e3;
    })(), v2 = (function(t3) {
      function e3() {
        return e3.__super__.constructor.apply(this, arguments);
      }
      return f2(e3, h2), e3.prototype.tag = "post", e3.prototype.parse = function(r3) {
        var t4, e4, n3, i3;
        switch (r3.pos = this.offset, this.format = r3.readInt(), this.italicAngle = r3.readInt(), this.underlinePosition = r3.readShort(), this.underlineThickness = r3.readShort(), this.isFixedPitch = r3.readInt(), this.minMemType42 = r3.readInt(), this.maxMemType42 = r3.readInt(), this.minMemType1 = r3.readInt(), this.maxMemType1 = r3.readInt(), this.format) {
          case 65536:
            break;
          case 131072:
            for (e4 = r3.readUInt16(), this.glyphNameIndex = [], n3 = 0; 0 <= e4 ? n3 < e4 : e4 < n3; 0 <= e4 ? ++n3 : --n3) this.glyphNameIndex.push(r3.readUInt16());
            for (this.names = [], i3 = []; r3.pos < this.offset + this.length; ) t4 = r3.readByte(), i3.push(this.names.push(r3.readString(t4)));
            return i3;
          case 151552:
            return e4 = r3.readUInt16(), this.offsets = r3.read(e4);
          case 196608:
            break;
          case 262144:
            return this.map = function() {
              var t5, e5, n4;
              for (n4 = [], t5 = 0, e5 = this.file.maxp.numGlyphs; 0 <= e5 ? t5 < e5 : e5 < t5; 0 <= e5 ? ++t5 : --t5) n4.push(r3.readUInt32());
              return n4;
            }.call(this);
        }
      }, e3;
    })(), w2 = function(t3, e3) {
      this.raw = t3, this.length = t3.length, this.platformID = e3.platformID, this.encodingID = e3.encodingID, this.languageID = e3.languageID;
    }, b2 = (function(t3) {
      function e3() {
        return e3.__super__.constructor.apply(this, arguments);
      }
      return f2(e3, h2), e3.prototype.tag = "name", e3.prototype.parse = function(t4) {
        var e4, n3, r3, i3, o3, a3, s3, l3, h3, u3, c3, f3;
        for (t4.pos = this.offset, t4.readShort(), e4 = t4.readShort(), a3 = t4.readShort(), n3 = [], i3 = h3 = 0; 0 <= e4 ? h3 < e4 : e4 < h3; i3 = 0 <= e4 ? ++h3 : --h3) n3.push({ platformID: t4.readShort(), encodingID: t4.readShort(), languageID: t4.readShort(), nameID: t4.readShort(), length: t4.readShort(), offset: this.offset + a3 + t4.readShort() });
        for (s3 = {}, i3 = u3 = 0, c3 = n3.length; u3 < c3; i3 = ++u3) r3 = n3[i3], t4.pos = r3.offset, l3 = t4.readString(r3.length), o3 = new w2(l3, r3), null == s3[f3 = r3.nameID] && (s3[f3] = []), s3[r3.nameID].push(o3);
        this.strings = s3, this.copyright = s3[0], this.fontFamily = s3[1], this.fontSubfamily = s3[2], this.uniqueSubfamily = s3[3], this.fontName = s3[4], this.version = s3[5];
        try {
          this.postscriptName = s3[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
        } catch (t5) {
          this.postscriptName = s3[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
        }
        return this.trademark = s3[7], this.manufacturer = s3[8], this.designer = s3[9], this.description = s3[10], this.vendorUrl = s3[11], this.designerUrl = s3[12], this.license = s3[13], this.licenseUrl = s3[14], this.preferredFamily = s3[15], this.preferredSubfamily = s3[17], this.compatibleFull = s3[18], this.sampleText = s3[19];
      }, e3;
    })(), x2 = (function(t3) {
      function e3() {
        return e3.__super__.constructor.apply(this, arguments);
      }
      return f2(e3, h2), e3.prototype.tag = "maxp", e3.prototype.parse = function(t4) {
        return t4.pos = this.offset, this.version = t4.readInt(), this.numGlyphs = t4.readUInt16(), this.maxPoints = t4.readUInt16(), this.maxContours = t4.readUInt16(), this.maxCompositePoints = t4.readUInt16(), this.maxComponentContours = t4.readUInt16(), this.maxZones = t4.readUInt16(), this.maxTwilightPoints = t4.readUInt16(), this.maxStorage = t4.readUInt16(), this.maxFunctionDefs = t4.readUInt16(), this.maxInstructionDefs = t4.readUInt16(), this.maxStackElements = t4.readUInt16(), this.maxSizeOfInstructions = t4.readUInt16(), this.maxComponentElements = t4.readUInt16(), this.maxComponentDepth = t4.readUInt16();
      }, e3;
    })(), N2 = (function(t3) {
      function e3() {
        return e3.__super__.constructor.apply(this, arguments);
      }
      return f2(e3, h2), e3.prototype.tag = "hmtx", e3.prototype.parse = function(n3) {
        var t4, r3, i3, e4, o3, a3, s3;
        for (n3.pos = this.offset, this.metrics = [], e4 = 0, a3 = this.file.hhea.numberOfMetrics; 0 <= a3 ? e4 < a3 : a3 < e4; 0 <= a3 ? ++e4 : --e4) this.metrics.push({ advance: n3.readUInt16(), lsb: n3.readInt16() });
        for (r3 = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = (function() {
          var t5, e5;
          for (e5 = [], t5 = 0; 0 <= r3 ? t5 < r3 : r3 < t5; 0 <= r3 ? ++t5 : --t5) e5.push(n3.readInt16());
          return e5;
        })(), this.widths = function() {
          var t5, e5, n4, r4;
          for (r4 = [], t5 = 0, e5 = (n4 = this.metrics).length; t5 < e5; t5++) i3 = n4[t5], r4.push(i3.advance);
          return r4;
        }.call(this), t4 = this.widths[this.widths.length - 1], s3 = [], o3 = 0; 0 <= r3 ? o3 < r3 : r3 < o3; 0 <= r3 ? ++o3 : --o3) s3.push(this.widths.push(t4));
        return s3;
      }, e3.prototype.forGlyph = function(t4) {
        return t4 in this.metrics ? this.metrics[t4] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[t4 - this.metrics.length] };
      }, e3;
    })(), L2 = [].slice, A2 = (function(t3) {
      function e3() {
        return e3.__super__.constructor.apply(this, arguments);
      }
      return f2(e3, h2), e3.prototype.tag = "glyf", e3.prototype.parse = function(t4) {
        return this.cache = {};
      }, e3.prototype.glyphFor = function(t4) {
        var e4, n3, r3, i3, o3, a3, s3, l3, h3, u3;
        return (t4 = t4) in this.cache ? this.cache[t4] : (i3 = this.file.loca, e4 = this.file.contents, n3 = i3.indexOf(t4), 0 === (r3 = i3.lengthOf(t4)) ? this.cache[t4] = null : (e4.pos = this.offset + n3, o3 = (a3 = new J2(e4.read(r3))).readShort(), l3 = a3.readShort(), u3 = a3.readShort(), s3 = a3.readShort(), h3 = a3.readShort(), this.cache[t4] = -1 === o3 ? new _2(a3, l3, u3, s3, h3) : new S2(a3, o3, l3, u3, s3, h3), this.cache[t4]));
      }, e3.prototype.encode = function(t4, e4, n3) {
        var r3, i3, o3, a3, s3;
        for (o3 = [], i3 = [], a3 = 0, s3 = e4.length; a3 < s3; a3++) r3 = t4[e4[a3]], i3.push(o3.length), r3 && (o3 = o3.concat(r3.encode(n3)));
        return i3.push(o3.length), { table: o3, offsets: i3 };
      }, e3;
    })(), S2 = (function() {
      function t3(t4, e3, n3, r3, i3, o3) {
        this.raw = t4, this.numberOfContours = e3, this.xMin = n3, this.yMin = r3, this.xMax = i3, this.yMax = o3, this.compound = false;
      }
      return t3.prototype.encode = function() {
        return this.raw.data;
      }, t3;
    })(), _2 = (function() {
      function t3(t4, e3, n3, r3, i3) {
        var o3, a3;
        for (this.raw = t4, this.xMin = e3, this.yMin = n3, this.xMax = r3, this.yMax = i3, this.compound = true, this.glyphIDs = [], this.glyphOffsets = [], o3 = this.raw; a3 = o3.readShort(), this.glyphOffsets.push(o3.pos), this.glyphIDs.push(o3.readShort()), 32 & a3; ) o3.pos += 1 & a3 ? 4 : 2, 128 & a3 ? o3.pos += 8 : 64 & a3 ? o3.pos += 4 : 8 & a3 && (o3.pos += 2);
      }
      return 1, 8, 32, 64, 128, t3.prototype.encode = function(t4) {
        var e3, n3, r3, i3, o3;
        for (n3 = new J2(L2.call(this.raw.data)), e3 = r3 = 0, i3 = (o3 = this.glyphIDs).length; r3 < i3; e3 = ++r3) o3[e3], n3.pos = this.glyphOffsets[e3];
        return n3.data;
      }, t3;
    })(), F2 = (function(t3) {
      function e3() {
        return e3.__super__.constructor.apply(this, arguments);
      }
      return f2(e3, h2), e3.prototype.tag = "loca", e3.prototype.parse = function(r3) {
        var t4;
        return r3.pos = this.offset, t4 = this.file.head.indexToLocFormat, this.offsets = 0 === t4 ? function() {
          var t5, e4, n3;
          for (n3 = [], t5 = 0, e4 = this.length; t5 < e4; t5 += 2) n3.push(2 * r3.readUInt16());
          return n3;
        }.call(this) : function() {
          var t5, e4, n3;
          for (n3 = [], t5 = 0, e4 = this.length; t5 < e4; t5 += 4) n3.push(r3.readUInt32());
          return n3;
        }.call(this);
      }, e3.prototype.indexOf = function(t4) {
        return this.offsets[t4];
      }, e3.prototype.lengthOf = function(t4) {
        return this.offsets[t4 + 1] - this.offsets[t4];
      }, e3.prototype.encode = function(t4, e4) {
        for (var n3 = new Uint32Array(this.offsets.length), r3 = 0, i3 = 0, o3 = 0; o3 < n3.length; ++o3) if (n3[o3] = r3, i3 < e4.length && e4[i3] == o3) {
          ++i3, n3[o3] = r3;
          var a3 = this.offsets[o3], s3 = this.offsets[o3 + 1] - a3;
          0 < s3 && (r3 += s3);
        }
        for (var l3 = new Array(4 * n3.length), h3 = 0; h3 < n3.length; ++h3) l3[4 * h3 + 3] = 255 & n3[h3], l3[4 * h3 + 2] = (65280 & n3[h3]) >> 8, l3[4 * h3 + 1] = (16711680 & n3[h3]) >> 16, l3[4 * h3] = (4278190080 & n3[h3]) >> 24;
        return l3;
      }, e3;
    })(), P2 = (function() {
      function t3(t4) {
        this.font = t4, this.subset = {}, this.unicodes = {}, this.next = 33;
      }
      return t3.prototype.generateCmap = function() {
        var t4, e3, n3, r3, i3;
        for (e3 in r3 = this.font.cmap.tables[0].codeMap, t4 = {}, i3 = this.subset) n3 = i3[e3], t4[e3] = r3[n3];
        return t4;
      }, t3.prototype.glyphsFor = function(t4) {
        var e3, n3, r3, i3, o3, a3, s3;
        for (r3 = {}, o3 = 0, a3 = t4.length; o3 < a3; o3++) r3[i3 = t4[o3]] = this.font.glyf.glyphFor(i3);
        for (i3 in e3 = [], r3) (null != (n3 = r3[i3]) ? n3.compound : void 0) && e3.push.apply(e3, n3.glyphIDs);
        if (0 < e3.length) for (i3 in s3 = this.glyphsFor(e3)) n3 = s3[i3], r3[i3] = n3;
        return r3;
      }, t3.prototype.encode = function(t4, e3) {
        var n3, r3, i3, o3, a3, s3, l3, h3, u3, c3, f3, p3, d3, g3, m3;
        for (r3 in n3 = y2.encode(this.generateCmap(), "unicode"), o3 = this.glyphsFor(t4), f3 = { 0: 0 }, m3 = n3.charMap) f3[(s3 = m3[r3]).old] = s3.new;
        for (p3 in c3 = n3.maxGlyphID, o3) p3 in f3 || (f3[p3] = c3++);
        return h3 = (function(t5) {
          var e4, n4;
          for (e4 in n4 = {}, t5) n4[t5[e4]] = e4;
          return n4;
        })(f3), u3 = Object.keys(h3).sort(function(t5, e4) {
          return t5 - e4;
        }), d3 = (function() {
          var t5, e4, n4;
          for (n4 = [], t5 = 0, e4 = u3.length; t5 < e4; t5++) a3 = u3[t5], n4.push(h3[a3]);
          return n4;
        })(), i3 = this.font.glyf.encode(o3, d3, f3), l3 = this.font.loca.encode(i3.offsets, d3), g3 = { cmap: this.font.cmap.raw(), glyf: i3.table, loca: l3, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(e3) }, this.font.os2.exists && (g3["OS/2"] = this.font.os2.raw()), this.font.directory.encode(g3);
      }, t3;
    })();
    t2.API.PDFObject = (function() {
      var o3;
      function a3() {
      }
      return o3 = function(t3, e3) {
        return (Array(e3 + 1).join("0") + t3).slice(-e3);
      }, a3.convert = function(r3) {
        var i3, t3, e3, n3;
        if (Array.isArray(r3)) return "[" + (function() {
          var t4, e4, n4;
          for (n4 = [], t4 = 0, e4 = r3.length; t4 < e4; t4++) i3 = r3[t4], n4.push(a3.convert(i3));
          return n4;
        })().join(" ") + "]";
        if ("string" == typeof r3) return "/" + r3;
        if (null != r3 ? r3.isString : void 0) return "(" + r3 + ")";
        if (r3 instanceof Date) return "(D:" + o3(r3.getUTCFullYear(), 4) + o3(r3.getUTCMonth(), 2) + o3(r3.getUTCDate(), 2) + o3(r3.getUTCHours(), 2) + o3(r3.getUTCMinutes(), 2) + o3(r3.getUTCSeconds(), 2) + "Z)";
        if ("[object Object]" !== {}.toString.call(r3)) return "" + r3;
        for (t3 in e3 = ["<<"], r3) n3 = r3[t3], e3.push("/" + t3 + " " + a3.convert(n3));
        return e3.push(">>"), e3.join("\n");
      }, a3;
    })();
  })(lt), /*
    # PNG.js
    # Copyright (c) 2011 Devon Govett
    # MIT LICENSE
    # 
    # 
    */
  Nt = "undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")(), Lt = (function() {
    var h2, n2, r2;
    function i2(t2) {
      var e2, n3, r3, i3, o2, a2, s2, l2, h3, u2, c2, f2, p2, d2;
      for (this.data = t2, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, a2 = null; ; ) {
        switch (e2 = this.readUInt32(), h3 = function() {
          var t3, e3;
          for (e3 = [], t3 = 0; t3 < 4; ++t3) e3.push(String.fromCharCode(this.data[this.pos++]));
          return e3;
        }.call(this).join("")) {
          case "IHDR":
            this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
            break;
          case "acTL":
            this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
            break;
          case "PLTE":
            this.palette = this.read(e2);
            break;
          case "fcTL":
            a2 && this.animation.frames.push(a2), this.pos += 4, a2 = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, o2 = this.readUInt16(), i3 = this.readUInt16() || 100, a2.delay = 1e3 * o2 / i3, a2.disposeOp = this.data[this.pos++], a2.blendOp = this.data[this.pos++], a2.data = [];
            break;
          case "IDAT":
          case "fdAT":
            for ("fdAT" === h3 && (this.pos += 4, e2 -= 4), t2 = (null != a2 ? a2.data : void 0) || this.imgData, f2 = 0; 0 <= e2 ? f2 < e2 : e2 < f2; 0 <= e2 ? ++f2 : --f2) t2.push(this.data[this.pos++]);
            break;
          case "tRNS":
            switch (this.transparency = {}, this.colorType) {
              case 3:
                if (r3 = this.palette.length / 3, this.transparency.indexed = this.read(e2), this.transparency.indexed.length > r3) throw new Error("More transparent colors than palette size");
                if (0 < (u2 = r3 - this.transparency.indexed.length)) for (p2 = 0; 0 <= u2 ? p2 < u2 : u2 < p2; 0 <= u2 ? ++p2 : --p2) this.transparency.indexed.push(255);
                break;
              case 0:
                this.transparency.grayscale = this.read(e2)[0];
                break;
              case 2:
                this.transparency.rgb = this.read(e2);
            }
            break;
          case "tEXt":
            s2 = (c2 = this.read(e2)).indexOf(0), l2 = String.fromCharCode.apply(String, c2.slice(0, s2)), this.text[l2] = String.fromCharCode.apply(String, c2.slice(s2 + 1));
            break;
          case "IEND":
            return a2 && this.animation.frames.push(a2), this.colors = function() {
              switch (this.colorType) {
                case 0:
                case 3:
                case 4:
                  return 1;
                case 2:
                case 6:
                  return 3;
              }
            }.call(this), this.hasAlphaChannel = 4 === (d2 = this.colorType) || 6 === d2, n3 = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * n3, this.colorSpace = function() {
              switch (this.colors) {
                case 1:
                  return "DeviceGray";
                case 3:
                  return "DeviceRGB";
              }
            }.call(this), void (this.imgData = new Uint8Array(this.imgData));
          default:
            this.pos += e2;
        }
        if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
      }
    }
    i2.load = function(t2, e2, n3) {
      var r3;
      return "function" == typeof e2 && (n3 = e2), (r3 = new XMLHttpRequest()).open("GET", t2, true), r3.responseType = "arraybuffer", r3.onload = function() {
        var t3;
        return t3 = new i2(new Uint8Array(r3.response || r3.mozResponseArrayBuffer)), "function" == typeof (null != e2 ? e2.getContext : void 0) && t3.render(e2), "function" == typeof n3 ? n3(t3) : void 0;
      }, r3.send(null);
    }, i2.prototype.read = function(t2) {
      var e2, n3;
      for (n3 = [], e2 = 0; 0 <= t2 ? e2 < t2 : t2 < e2; 0 <= t2 ? ++e2 : --e2) n3.push(this.data[this.pos++]);
      return n3;
    }, i2.prototype.readUInt32 = function() {
      return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
    }, i2.prototype.readUInt16 = function() {
      return this.data[this.pos++] << 8 | this.data[this.pos++];
    }, i2.prototype.decodePixels = function(C2) {
      var B2 = this.pixelBitlength / 8, j2 = new Uint8Array(this.width * this.height * B2), E2 = 0, M2 = this;
      if (null == C2 && (C2 = this.imgData), 0 === C2.length) return new Uint8Array(0);
      function t2(t3, e2, n3, r3) {
        var i3, o2, a2, s2, l2, h3, u2, c2, f2, p2, d2, g2, m2, y2, v2, w2, b2, x2, N2, L2, A2, S2 = Math.ceil((M2.width - t3) / n3), _2 = Math.ceil((M2.height - e2) / r3), F2 = M2.width == S2 && M2.height == _2;
        for (y2 = B2 * S2, g2 = F2 ? j2 : new Uint8Array(y2 * _2), h3 = C2.length, o2 = m2 = 0; m2 < _2 && E2 < h3; ) {
          switch (C2[E2++]) {
            case 0:
              for (s2 = b2 = 0; b2 < y2; s2 = b2 += 1) g2[o2++] = C2[E2++];
              break;
            case 1:
              for (s2 = x2 = 0; x2 < y2; s2 = x2 += 1) i3 = C2[E2++], l2 = s2 < B2 ? 0 : g2[o2 - B2], g2[o2++] = (i3 + l2) % 256;
              break;
            case 2:
              for (s2 = N2 = 0; N2 < y2; s2 = N2 += 1) i3 = C2[E2++], a2 = (s2 - s2 % B2) / B2, v2 = m2 && g2[(m2 - 1) * y2 + a2 * B2 + s2 % B2], g2[o2++] = (v2 + i3) % 256;
              break;
            case 3:
              for (s2 = L2 = 0; L2 < y2; s2 = L2 += 1) i3 = C2[E2++], a2 = (s2 - s2 % B2) / B2, l2 = s2 < B2 ? 0 : g2[o2 - B2], v2 = m2 && g2[(m2 - 1) * y2 + a2 * B2 + s2 % B2], g2[o2++] = (i3 + Math.floor((l2 + v2) / 2)) % 256;
              break;
            case 4:
              for (s2 = A2 = 0; A2 < y2; s2 = A2 += 1) i3 = C2[E2++], a2 = (s2 - s2 % B2) / B2, l2 = s2 < B2 ? 0 : g2[o2 - B2], 0 === m2 ? v2 = w2 = 0 : (v2 = g2[(m2 - 1) * y2 + a2 * B2 + s2 % B2], w2 = a2 && g2[(m2 - 1) * y2 + (a2 - 1) * B2 + s2 % B2]), u2 = l2 + v2 - w2, c2 = Math.abs(u2 - l2), p2 = Math.abs(u2 - v2), d2 = Math.abs(u2 - w2), f2 = c2 <= p2 && c2 <= d2 ? l2 : p2 <= d2 ? v2 : w2, g2[o2++] = (i3 + f2) % 256;
              break;
            default:
              throw new Error("Invalid filter algorithm: " + C2[E2 - 1]);
          }
          if (!F2) {
            var P2 = ((e2 + m2 * r3) * M2.width + t3) * B2, k2 = m2 * y2;
            for (s2 = 0; s2 < S2; s2 += 1) {
              for (var I2 = 0; I2 < B2; I2 += 1) j2[P2++] = g2[k2++];
              P2 += (n3 - 1) * B2;
            }
          }
          m2++;
        }
      }
      return C2 = (C2 = new kt(C2)).getBytes(), 1 == M2.interlaceMethod ? (t2(0, 0, 8, 8), t2(4, 0, 8, 8), t2(0, 4, 4, 8), t2(2, 0, 4, 4), t2(0, 2, 2, 4), t2(1, 0, 2, 2), t2(0, 1, 1, 2)) : t2(0, 0, 1, 1), j2;
    }, i2.prototype.decodePalette = function() {
      var t2, e2, n3, r3, i3, o2, a2, s2, l2;
      for (n3 = this.palette, o2 = this.transparency.indexed || [], i3 = new Uint8Array((o2.length || 0) + n3.length), r3 = 0, n3.length, e2 = a2 = t2 = 0, s2 = n3.length; a2 < s2; e2 = a2 += 3) i3[r3++] = n3[e2], i3[r3++] = n3[e2 + 1], i3[r3++] = n3[e2 + 2], i3[r3++] = null != (l2 = o2[t2++]) ? l2 : 255;
      return i3;
    }, i2.prototype.copyToImageData = function(t2, e2) {
      var n3, r3, i3, o2, a2, s2, l2, h3, u2, c2, f2;
      if (r3 = this.colors, u2 = null, n3 = this.hasAlphaChannel, this.palette.length && (u2 = null != (f2 = this._decodedPalette) ? f2 : this._decodedPalette = this.decodePalette(), r3 = 4, n3 = true), h3 = (i3 = t2.data || t2).length, a2 = u2 || e2, o2 = s2 = 0, 1 === r3) for (; o2 < h3; ) l2 = u2 ? 4 * e2[o2 / 4] : s2, c2 = a2[l2++], i3[o2++] = c2, i3[o2++] = c2, i3[o2++] = c2, i3[o2++] = n3 ? a2[l2++] : 255, s2 = l2;
      else for (; o2 < h3; ) l2 = u2 ? 4 * e2[o2 / 4] : s2, i3[o2++] = a2[l2++], i3[o2++] = a2[l2++], i3[o2++] = a2[l2++], i3[o2++] = n3 ? a2[l2++] : 255, s2 = l2;
    }, i2.prototype.decode = function() {
      var t2;
      return t2 = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t2, this.decodePixels()), t2;
    };
    try {
      n2 = Nt.document.createElement("canvas"), r2 = n2.getContext("2d");
    } catch (t2) {
      return -1;
    }
    return h2 = function(t2) {
      var e2;
      return r2.width = t2.width, r2.height = t2.height, r2.clearRect(0, 0, t2.width, t2.height), r2.putImageData(t2, 0, 0), (e2 = new Image()).src = n2.toDataURL(), e2;
    }, i2.prototype.decodeFrames = function(t2) {
      var e2, n3, r3, i3, o2, a2, s2, l2;
      if (this.animation) {
        for (l2 = [], n3 = o2 = 0, a2 = (s2 = this.animation.frames).length; o2 < a2; n3 = ++o2) e2 = s2[n3], r3 = t2.createImageData(e2.width, e2.height), i3 = this.decodePixels(new Uint8Array(e2.data)), this.copyToImageData(r3, i3), e2.imageData = r3, l2.push(e2.image = h2(r3));
        return l2;
      }
    }, i2.prototype.renderFrame = function(t2, e2) {
      var n3, r3, i3;
      return n3 = (r3 = this.animation.frames)[e2], i3 = r3[e2 - 1], 0 === e2 && t2.clearRect(0, 0, this.width, this.height), 1 === (null != i3 ? i3.disposeOp : void 0) ? t2.clearRect(i3.xOffset, i3.yOffset, i3.width, i3.height) : 2 === (null != i3 ? i3.disposeOp : void 0) && t2.putImageData(i3.imageData, i3.xOffset, i3.yOffset), 0 === n3.blendOp && t2.clearRect(n3.xOffset, n3.yOffset, n3.width, n3.height), t2.drawImage(n3.image, n3.xOffset, n3.yOffset);
    }, i2.prototype.animate = function(n3) {
      var r3, i3, o2, a2, s2, t2, l2 = this;
      return i3 = 0, t2 = this.animation, a2 = t2.numFrames, o2 = t2.frames, s2 = t2.numPlays, (r3 = function() {
        var t3, e2;
        if (t3 = i3++ % a2, e2 = o2[t3], l2.renderFrame(n3, t3), 1 < a2 && i3 / a2 < s2) return l2.animation._timeout = setTimeout(r3, e2.delay);
      })();
    }, i2.prototype.stopAnimation = function() {
      var t2;
      return clearTimeout(null != (t2 = this.animation) ? t2._timeout : void 0);
    }, i2.prototype.render = function(t2) {
      var e2, n3;
      return t2._png && t2._png.stopAnimation(), t2._png = this, t2.width = this.width, t2.height = this.height, e2 = t2.getContext("2d"), this.animation ? (this.decodeFrames(e2), this.animate(e2)) : (n3 = e2.createImageData(this.width, this.height), this.copyToImageData(n3, this.decodePixels()), e2.putImageData(n3, 0, 0));
    }, i2;
  })(), Nt.PNG = Lt;
  var Pt = (function() {
    function t2() {
      this.pos = 0, this.bufferLength = 0, this.eof = false, this.buffer = null;
    }
    return t2.prototype = { ensureBuffer: function(t3) {
      var e2 = this.buffer, n2 = e2 ? e2.byteLength : 0;
      if (t3 < n2) return e2;
      for (var r2 = 512; r2 < t3; ) r2 <<= 1;
      for (var i2 = new Uint8Array(r2), o2 = 0; o2 < n2; ++o2) i2[o2] = e2[o2];
      return this.buffer = i2;
    }, getByte: function() {
      for (var t3 = this.pos; this.bufferLength <= t3; ) {
        if (this.eof) return null;
        this.readBlock();
      }
      return this.buffer[this.pos++];
    }, getBytes: function(t3) {
      var e2 = this.pos;
      if (t3) {
        this.ensureBuffer(e2 + t3);
        for (var n2 = e2 + t3; !this.eof && this.bufferLength < n2; ) this.readBlock();
        var r2 = this.bufferLength;
        r2 < n2 && (n2 = r2);
      } else {
        for (; !this.eof; ) this.readBlock();
        n2 = this.bufferLength;
      }
      return this.pos = n2, this.buffer.subarray(e2, n2);
    }, lookChar: function() {
      for (var t3 = this.pos; this.bufferLength <= t3; ) {
        if (this.eof) return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos]);
    }, getChar: function() {
      for (var t3 = this.pos; this.bufferLength <= t3; ) {
        if (this.eof) return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos++]);
    }, makeSubStream: function(t3, e2, n2) {
      for (var r2 = t3 + e2; this.bufferLength <= r2 && !this.eof; ) this.readBlock();
      return new Stream(this.buffer, t3, e2, n2);
    }, skip: function(t3) {
      t3 || (t3 = 1), this.pos += t3;
    }, reset: function() {
      this.pos = 0;
    } }, t2;
  })(), kt = (function() {
    if ("undefined" != typeof Uint32Array) {
      var k2 = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), I2 = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]), C2 = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]), B2 = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9], j2 = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
      return (t2.prototype = Object.create(Pt.prototype)).getBits = function(t3) {
        for (var e2, n2 = this.codeSize, r2 = this.codeBuf, i2 = this.bytes, o2 = this.bytesPos; n2 < t3; ) void 0 === (e2 = i2[o2++]) && E2("Bad encoding in flate stream"), r2 |= e2 << n2, n2 += 8;
        return e2 = r2 & (1 << t3) - 1, this.codeBuf = r2 >> t3, this.codeSize = n2 -= t3, this.bytesPos = o2, e2;
      }, t2.prototype.getCode = function(t3) {
        for (var e2 = t3[0], n2 = t3[1], r2 = this.codeSize, i2 = this.codeBuf, o2 = this.bytes, a2 = this.bytesPos; r2 < n2; ) {
          var s2;
          void 0 === (s2 = o2[a2++]) && E2("Bad encoding in flate stream"), i2 |= s2 << r2, r2 += 8;
        }
        var l2 = e2[i2 & (1 << n2) - 1], h2 = l2 >> 16, u2 = 65535 & l2;
        return (0 == r2 || r2 < h2 || 0 == h2) && E2("Bad encoding in flate stream"), this.codeBuf = i2 >> h2, this.codeSize = r2 - h2, this.bytesPos = a2, u2;
      }, t2.prototype.generateHuffmanTable = function(t3) {
        for (var e2 = t3.length, n2 = 0, r2 = 0; r2 < e2; ++r2) t3[r2] > n2 && (n2 = t3[r2]);
        for (var i2 = 1 << n2, o2 = new Uint32Array(i2), a2 = 1, s2 = 0, l2 = 2; a2 <= n2; ++a2, s2 <<= 1, l2 <<= 1) for (var h2 = 0; h2 < e2; ++h2) if (t3[h2] == a2) {
          var u2 = 0, c2 = s2;
          for (r2 = 0; r2 < a2; ++r2) u2 = u2 << 1 | 1 & c2, c2 >>= 1;
          for (r2 = u2; r2 < i2; r2 += l2) o2[r2] = a2 << 16 | h2;
          ++s2;
        }
        return [o2, n2];
      }, t2.prototype.readBlock = function() {
        function t3(t4, e3, n3, r3, i3) {
          for (var o3 = t4.getBits(n3) + r3; 0 < o3--; ) e3[l2++] = i3;
        }
        var e2 = this.getBits(3);
        if (1 & e2 && (this.eof = true), 0 != (e2 >>= 1)) {
          var n2, r2;
          if (1 == e2) n2 = B2, r2 = j2;
          else if (2 == e2) {
            for (var i2 = this.getBits(5) + 257, o2 = this.getBits(5) + 1, a2 = this.getBits(4) + 4, s2 = Array(k2.length), l2 = 0; l2 < a2; ) s2[k2[l2++]] = this.getBits(3);
            for (var h2 = this.generateHuffmanTable(s2), u2 = 0, c2 = (l2 = 0, i2 + o2), f2 = new Array(c2); l2 < c2; ) {
              var p2 = this.getCode(h2);
              16 == p2 ? t3(this, f2, 2, 3, u2) : 17 == p2 ? t3(this, f2, 3, 3, u2 = 0) : 18 == p2 ? t3(this, f2, 7, 11, u2 = 0) : f2[l2++] = u2 = p2;
            }
            n2 = this.generateHuffmanTable(f2.slice(0, i2)), r2 = this.generateHuffmanTable(f2.slice(i2, c2));
          } else E2("Unknown block type in flate stream");
          for (var d2 = (_2 = this.buffer) ? _2.length : 0, g2 = this.bufferLength; ; ) {
            var m2 = this.getCode(n2);
            if (m2 < 256) d2 <= g2 + 1 && (d2 = (_2 = this.ensureBuffer(g2 + 1)).length), _2[g2++] = m2;
            else {
              if (256 == m2) return void (this.bufferLength = g2);
              var y2 = (m2 = I2[m2 -= 257]) >> 16;
              0 < y2 && (y2 = this.getBits(y2));
              u2 = (65535 & m2) + y2;
              m2 = this.getCode(r2), 0 < (y2 = (m2 = C2[m2]) >> 16) && (y2 = this.getBits(y2));
              var v2 = (65535 & m2) + y2;
              d2 <= g2 + u2 && (d2 = (_2 = this.ensureBuffer(g2 + u2)).length);
              for (var w2 = 0; w2 < u2; ++w2, ++g2) _2[g2] = _2[g2 - v2];
            }
          }
        } else {
          var b2, x2 = this.bytes, N2 = this.bytesPos;
          void 0 === (b2 = x2[N2++]) && E2("Bad block header in flate stream");
          var L2 = b2;
          void 0 === (b2 = x2[N2++]) && E2("Bad block header in flate stream"), L2 |= b2 << 8, void 0 === (b2 = x2[N2++]) && E2("Bad block header in flate stream");
          var A2 = b2;
          void 0 === (b2 = x2[N2++]) && E2("Bad block header in flate stream"), (A2 |= b2 << 8) != (65535 & ~L2) && E2("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
          var S2 = this.bufferLength, _2 = this.ensureBuffer(S2 + L2), F2 = S2 + L2;
          this.bufferLength = F2;
          for (var P2 = S2; P2 < F2; ++P2) {
            if (void 0 === (b2 = x2[N2++])) {
              this.eof = true;
              break;
            }
            _2[P2] = b2;
          }
          this.bytesPos = N2;
        }
      }, t2;
    }
    function E2(t3) {
      throw new Error(t3);
    }
    function t2(t3) {
      var e2 = 0, n2 = t3[e2++], r2 = t3[e2++];
      -1 != n2 && -1 != r2 || E2("Invalid header in flate stream"), 8 != (15 & n2) && E2("Unknown compression method in flate stream"), ((n2 << 8) + r2) % 31 != 0 && E2("Bad FCHECK in flate stream"), 32 & r2 && E2("FDICT bit set in flate stream"), this.bytes = t3, this.bytesPos = 2, this.codeSize = 0, this.codeBuf = 0, Pt.call(this);
    }
  })();
  window.tmp = kt;
});
try {
  module.exports = jsPDF;
} catch (t) {
}
//# sourceMappingURL=scripts.js.map
