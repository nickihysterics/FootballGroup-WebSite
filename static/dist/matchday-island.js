function X1(V) {
  return V && V.__esModule && Object.prototype.hasOwnProperty.call(V, "default") ? V.default : V;
}
var dE = { exports: {} }, Kp = {}, pE = { exports: {} }, gt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XR;
function K1() {
  if (XR) return gt;
  XR = 1;
  var V = Symbol.for("react.element"), Y = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), vt = Symbol.for("react.strict_mode"), rt = Symbol.for("react.profiler"), dt = Symbol.for("react.provider"), S = Symbol.for("react.context"), Bt = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), he = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), te = Symbol.iterator;
  function Re(b) {
    return b === null || typeof b != "object" ? null : (b = te && b[te] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, $e = Object.assign, St = {};
  function ht(b, P, He) {
    this.props = b, this.context = P, this.refs = St, this.updater = He || oe;
  }
  ht.prototype.isReactComponent = {}, ht.prototype.setState = function(b, P) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, P, "setState");
  }, ht.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function fn() {
  }
  fn.prototype = ht.prototype;
  function pt(b, P, He) {
    this.props = b, this.context = P, this.refs = St, this.updater = He || oe;
  }
  var Qe = pt.prototype = new fn();
  Qe.constructor = pt, $e(Qe, ht.prototype), Qe.isPureReactComponent = !0;
  var mt = Array.isArray, be = Object.prototype.hasOwnProperty, st = { current: null }, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function an(b, P, He) {
    var Ae, at = {}, Je = null, Ke = null;
    if (P != null) for (Ae in P.ref !== void 0 && (Ke = P.ref), P.key !== void 0 && (Je = "" + P.key), P) be.call(P, Ae) && !Fe.hasOwnProperty(Ae) && (at[Ae] = P[Ae]);
    var et = arguments.length - 2;
    if (et === 1) at.children = He;
    else if (1 < et) {
      for (var it = Array(et), Pt = 0; Pt < et; Pt++) it[Pt] = arguments[Pt + 2];
      at.children = it;
    }
    if (b && b.defaultProps) for (Ae in et = b.defaultProps, et) at[Ae] === void 0 && (at[Ae] = et[Ae]);
    return { $$typeof: V, type: b, key: Je, ref: Ke, props: at, _owner: st.current };
  }
  function Ft(b, P) {
    return { $$typeof: V, type: b.type, key: P, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function Zt(b) {
    return typeof b == "object" && b !== null && b.$$typeof === V;
  }
  function ln(b) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(He) {
      return P[He];
    });
  }
  var _t = /\/+/g;
  function Oe(b, P) {
    return typeof b == "object" && b !== null && b.key != null ? ln("" + b.key) : P.toString(36);
  }
  function At(b, P, He, Ae, at) {
    var Je = typeof b;
    (Je === "undefined" || Je === "boolean") && (b = null);
    var Ke = !1;
    if (b === null) Ke = !0;
    else switch (Je) {
      case "string":
      case "number":
        Ke = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case V:
          case Y:
            Ke = !0;
        }
    }
    if (Ke) return Ke = b, at = at(Ke), b = Ae === "" ? "." + Oe(Ke, 0) : Ae, mt(at) ? (He = "", b != null && (He = b.replace(_t, "$&/") + "/"), At(at, P, He, "", function(Pt) {
      return Pt;
    })) : at != null && (Zt(at) && (at = Ft(at, He + (!at.key || Ke && Ke.key === at.key ? "" : ("" + at.key).replace(_t, "$&/") + "/") + b)), P.push(at)), 1;
    if (Ke = 0, Ae = Ae === "" ? "." : Ae + ":", mt(b)) for (var et = 0; et < b.length; et++) {
      Je = b[et];
      var it = Ae + Oe(Je, et);
      Ke += At(Je, P, He, it, at);
    }
    else if (it = Re(b), typeof it == "function") for (b = it.call(b), et = 0; !(Je = b.next()).done; ) Je = Je.value, it = Ae + Oe(Je, et++), Ke += At(Je, P, He, it, at);
    else if (Je === "object") throw P = String(b), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return Ke;
  }
  function bt(b, P, He) {
    if (b == null) return b;
    var Ae = [], at = 0;
    return At(b, Ae, "", "", function(Je) {
      return P.call(He, Je, at++);
    }), Ae;
  }
  function Dt(b) {
    if (b._status === -1) {
      var P = b._result;
      P = P(), P.then(function(He) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = He);
      }, function(He) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = He);
      }), b._status === -1 && (b._status = 0, b._result = P);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var Ce = { current: null }, Z = { transition: null }, Te = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: Z, ReactCurrentOwner: st };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return gt.Children = { map: bt, forEach: function(b, P, He) {
    bt(b, function() {
      P.apply(this, arguments);
    }, He);
  }, count: function(b) {
    var P = 0;
    return bt(b, function() {
      P++;
    }), P;
  }, toArray: function(b) {
    return bt(b, function(P) {
      return P;
    }) || [];
  }, only: function(b) {
    if (!Zt(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, gt.Component = ht, gt.Fragment = L, gt.Profiler = rt, gt.PureComponent = pt, gt.StrictMode = vt, gt.Suspense = pe, gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, gt.act = re, gt.cloneElement = function(b, P, He) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var Ae = $e({}, b.props), at = b.key, Je = b.ref, Ke = b._owner;
    if (P != null) {
      if (P.ref !== void 0 && (Je = P.ref, Ke = st.current), P.key !== void 0 && (at = "" + P.key), b.type && b.type.defaultProps) var et = b.type.defaultProps;
      for (it in P) be.call(P, it) && !Fe.hasOwnProperty(it) && (Ae[it] = P[it] === void 0 && et !== void 0 ? et[it] : P[it]);
    }
    var it = arguments.length - 2;
    if (it === 1) Ae.children = He;
    else if (1 < it) {
      et = Array(it);
      for (var Pt = 0; Pt < it; Pt++) et[Pt] = arguments[Pt + 2];
      Ae.children = et;
    }
    return { $$typeof: V, type: b.type, key: at, ref: Je, props: Ae, _owner: Ke };
  }, gt.createContext = function(b) {
    return b = { $$typeof: S, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: dt, _context: b }, b.Consumer = b;
  }, gt.createElement = an, gt.createFactory = function(b) {
    var P = an.bind(null, b);
    return P.type = b, P;
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(b) {
    return { $$typeof: Bt, render: b };
  }, gt.isValidElement = Zt, gt.lazy = function(b) {
    return { $$typeof: ot, _payload: { _status: -1, _result: b }, _init: Dt };
  }, gt.memo = function(b, P) {
    return { $$typeof: he, type: b, compare: P === void 0 ? null : P };
  }, gt.startTransition = function(b) {
    var P = Z.transition;
    Z.transition = {};
    try {
      b();
    } finally {
      Z.transition = P;
    }
  }, gt.unstable_act = re, gt.useCallback = function(b, P) {
    return Ce.current.useCallback(b, P);
  }, gt.useContext = function(b) {
    return Ce.current.useContext(b);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(b) {
    return Ce.current.useDeferredValue(b);
  }, gt.useEffect = function(b, P) {
    return Ce.current.useEffect(b, P);
  }, gt.useId = function() {
    return Ce.current.useId();
  }, gt.useImperativeHandle = function(b, P, He) {
    return Ce.current.useImperativeHandle(b, P, He);
  }, gt.useInsertionEffect = function(b, P) {
    return Ce.current.useInsertionEffect(b, P);
  }, gt.useLayoutEffect = function(b, P) {
    return Ce.current.useLayoutEffect(b, P);
  }, gt.useMemo = function(b, P) {
    return Ce.current.useMemo(b, P);
  }, gt.useReducer = function(b, P, He) {
    return Ce.current.useReducer(b, P, He);
  }, gt.useRef = function(b) {
    return Ce.current.useRef(b);
  }, gt.useState = function(b) {
    return Ce.current.useState(b);
  }, gt.useSyncExternalStore = function(b, P, He) {
    return Ce.current.useSyncExternalStore(b, P, He);
  }, gt.useTransition = function() {
    return Ce.current.useTransition();
  }, gt.version = "18.3.1", gt;
}
var Jp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Jp.exports;
var KR;
function Z1() {
  return KR || (KR = 1, function(V, Y) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var L = "18.3.1", vt = Symbol.for("react.element"), rt = Symbol.for("react.portal"), dt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Bt = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), he = Symbol.for("react.context"), ot = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), Re = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), $e = Symbol.for("react.lazy"), St = Symbol.for("react.offscreen"), ht = Symbol.iterator, fn = "@@iterator";
      function pt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = ht && h[ht] || h[fn];
        return typeof C == "function" ? C : null;
      }
      var Qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, mt = {
        transition: null
      }, be = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, st = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Fe = {}, an = null;
      function Ft(h) {
        an = h;
      }
      Fe.setExtraStackFrame = function(h) {
        an = h;
      }, Fe.getCurrentStack = null, Fe.getStackAddendum = function() {
        var h = "";
        an && (h += an);
        var C = Fe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Zt = !1, ln = !1, _t = !1, Oe = !1, At = !1, bt = {
        ReactCurrentDispatcher: Qe,
        ReactCurrentBatchConfig: mt,
        ReactCurrentOwner: st
      };
      bt.ReactDebugCurrentFrame = Fe, bt.ReactCurrentActQueue = be;
      function Dt(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          Z("warn", h, z);
        }
      }
      function Ce(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          Z("error", h, z);
        }
      }
      function Z(h, C, z) {
        {
          var j = bt.ReactDebugCurrentFrame, K = j.getStackAddendum();
          K !== "" && (C += "%s", z = z.concat([K]));
          var Ne = z.map(function(ae) {
            return String(ae);
          });
          Ne.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ne);
        }
      }
      var Te = {};
      function re(h, C) {
        {
          var z = h.constructor, j = z && (z.displayName || z.name) || "ReactClass", K = j + "." + C;
          if (Te[K])
            return;
          Ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), Te[K] = !0;
        }
      }
      var b = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, z) {
          re(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, z, j) {
          re(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, z, j) {
          re(h, "setState");
        }
      }, P = Object.assign, He = {};
      Object.freeze(He);
      function Ae(h, C, z) {
        this.props = h, this.context = C, this.refs = He, this.updater = z || b;
      }
      Ae.prototype.isReactComponent = {}, Ae.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ae.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var at = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Je = function(h, C) {
          Object.defineProperty(Ae.prototype, h, {
            get: function() {
              Dt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Ke in at)
          at.hasOwnProperty(Ke) && Je(Ke, at[Ke]);
      }
      function et() {
      }
      et.prototype = Ae.prototype;
      function it(h, C, z) {
        this.props = h, this.context = C, this.refs = He, this.updater = z || b;
      }
      var Pt = it.prototype = new et();
      Pt.constructor = it, P(Pt, Ae.prototype), Pt.isPureReactComponent = !0;
      function On() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var wr = Array.isArray;
      function Cn(h) {
        return wr(h);
      }
      function nr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Pn(h) {
        try {
          return Bn(h), !1;
        } catch {
          return !0;
        }
      }
      function Bn(h) {
        return "" + h;
      }
      function Ir(h) {
        if (Pn(h))
          return Ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Bn(h);
      }
      function si(h, C, z) {
        var j = h.displayName;
        if (j)
          return j;
        var K = C.displayName || C.name || "";
        return K !== "" ? z + "(" + K + ")" : z;
      }
      function oa(h) {
        return h.displayName || "Context";
      }
      function qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case dt:
            return "Fragment";
          case rt:
            return "Portal";
          case Bt:
            return "Profiler";
          case S:
            return "StrictMode";
          case te:
            return "Suspense";
          case Re:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case he:
              var C = h;
              return oa(C) + ".Consumer";
            case pe:
              var z = h;
              return oa(z._context) + ".Provider";
            case ot:
              return si(h, h.render, "ForwardRef");
            case oe:
              var j = h.displayName || null;
              return j !== null ? j : qn(h.type) || "Memo";
            case $e: {
              var K = h, Ne = K._payload, ae = K._init;
              try {
                return qn(ae(Ne));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rn = Object.prototype.hasOwnProperty, Yn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, Ia, Nn;
      Nn = {};
      function Sr(h) {
        if (Rn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sa(h) {
        if (Rn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function $a(h, C) {
        var z = function() {
          gr || (gr = !0, Ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function ci(h, C) {
        var z = function() {
          Ia || (Ia = !0, Ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function J(h) {
        if (typeof h.ref == "string" && st.current && h.__self && st.current.stateNode !== h.__self) {
          var C = qn(st.current.type);
          Nn[C] || (Ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Nn[C] = !0);
        }
      }
      var xe = function(h, C, z, j, K, Ne, ae) {
        var ze = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: vt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: ae,
          // Record the component responsible for creating this element.
          _owner: Ne
        };
        return ze._store = {}, Object.defineProperty(ze._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ze, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(ze, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
      };
      function tt(h, C, z) {
        var j, K = {}, Ne = null, ae = null, ze = null, ft = null;
        if (C != null) {
          Sr(C) && (ae = C.ref, J(C)), sa(C) && (Ir(C.key), Ne = "" + C.key), ze = C.__self === void 0 ? null : C.__self, ft = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Rn.call(C, j) && !Yn.hasOwnProperty(j) && (K[j] = C[j]);
        }
        var wt = arguments.length - 2;
        if (wt === 1)
          K.children = z;
        else if (wt > 1) {
          for (var nn = Array(wt), Qt = 0; Qt < wt; Qt++)
            nn[Qt] = arguments[Qt + 2];
          Object.freeze && Object.freeze(nn), K.children = nn;
        }
        if (h && h.defaultProps) {
          var nt = h.defaultProps;
          for (j in nt)
            K[j] === void 0 && (K[j] = nt[j]);
        }
        if (Ne || ae) {
          var Wt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ne && $a(K, Wt), ae && ci(K, Wt);
        }
        return xe(h, Ne, ae, ze, ft, st.current, K);
      }
      function jt(h, C) {
        var z = xe(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function Jt(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, K = P({}, h.props), Ne = h.key, ae = h.ref, ze = h._self, ft = h._source, wt = h._owner;
        if (C != null) {
          Sr(C) && (ae = C.ref, wt = st.current), sa(C) && (Ir(C.key), Ne = "" + C.key);
          var nn;
          h.type && h.type.defaultProps && (nn = h.type.defaultProps);
          for (j in C)
            Rn.call(C, j) && !Yn.hasOwnProperty(j) && (C[j] === void 0 && nn !== void 0 ? K[j] = nn[j] : K[j] = C[j]);
        }
        var Qt = arguments.length - 2;
        if (Qt === 1)
          K.children = z;
        else if (Qt > 1) {
          for (var nt = Array(Qt), Wt = 0; Wt < Qt; Wt++)
            nt[Wt] = arguments[Wt + 2];
          K.children = nt;
        }
        return xe(h.type, Ne, ae, ze, ft, wt, K);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === vt;
      }
      var un = ".", Xn = ":";
      function en(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(K) {
          return z[K];
        });
        return "$" + j;
      }
      var Yt = !1, It = /\/+/g;
      function ca(h) {
        return h.replace(It, "$&/");
      }
      function Er(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Ir(h.key), en("" + h.key)) : C.toString(36);
      }
      function Ta(h, C, z, j, K) {
        var Ne = typeof h;
        (Ne === "undefined" || Ne === "boolean") && (h = null);
        var ae = !1;
        if (h === null)
          ae = !0;
        else
          switch (Ne) {
            case "string":
            case "number":
              ae = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case vt:
                case rt:
                  ae = !0;
              }
          }
        if (ae) {
          var ze = h, ft = K(ze), wt = j === "" ? un + Er(ze, 0) : j;
          if (Cn(ft)) {
            var nn = "";
            wt != null && (nn = ca(wt) + "/"), Ta(ft, C, nn, "", function(qf) {
              return qf;
            });
          } else ft != null && (vn(ft) && (ft.key && (!ze || ze.key !== ft.key) && Ir(ft.key), ft = jt(
            ft,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ft.key && (!ze || ze.key !== ft.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + ft.key) + "/"
            ) : "") + wt
          )), C.push(ft));
          return 1;
        }
        var Qt, nt, Wt = 0, hn = j === "" ? un : j + Xn;
        if (Cn(h))
          for (var Cl = 0; Cl < h.length; Cl++)
            Qt = h[Cl], nt = hn + Er(Qt, Cl), Wt += Ta(Qt, C, z, nt, K);
        else {
          var Go = pt(h);
          if (typeof Go == "function") {
            var Pi = h;
            Go === Pi.entries && (Yt || Dt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var qo = Go.call(Pi), uu, Gf = 0; !(uu = qo.next()).done; )
              Qt = uu.value, nt = hn + Er(Qt, Gf++), Wt += Ta(Qt, C, z, nt, K);
          } else if (Ne === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Wt;
      }
      function Fi(h, C, z) {
        if (h == null)
          return h;
        var j = [], K = 0;
        return Ta(h, j, "", "", function(Ne) {
          return C.call(z, Ne, K++);
        }), j;
      }
      function Zl(h) {
        var C = 0;
        return Fi(h, function() {
          C++;
        }), C;
      }
      function Jl(h, C, z) {
        Fi(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function dl(h) {
        return Fi(h, function(C) {
          return C;
        }) || [];
      }
      function pl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function eu(h) {
        var C = {
          $$typeof: he,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: pe,
          _context: C
        };
        var z = !1, j = !1, K = !1;
        {
          var Ne = {
            $$typeof: he,
            _context: C
          };
          Object.defineProperties(Ne, {
            Provider: {
              get: function() {
                return j || (j = !0, Ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ae) {
                C.Provider = ae;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ae) {
                C._currentValue = ae;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ae) {
                C._currentValue2 = ae;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ae) {
                C._threadCount = ae;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, Ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ae) {
                K || (Dt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ae), K = !0);
              }
            }
          }), C.Consumer = Ne;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var _r = -1, br = 0, rr = 1, fi = 2;
      function Qa(h) {
        if (h._status === _r) {
          var C = h._result, z = C();
          if (z.then(function(Ne) {
            if (h._status === br || h._status === _r) {
              var ae = h;
              ae._status = rr, ae._result = Ne;
            }
          }, function(Ne) {
            if (h._status === br || h._status === _r) {
              var ae = h;
              ae._status = fi, ae._result = Ne;
            }
          }), h._status === _r) {
            var j = h;
            j._status = br, j._result = z;
          }
        }
        if (h._status === rr) {
          var K = h._result;
          return K === void 0 && Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, K), "default" in K || Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, K), K.default;
        } else
          throw h._result;
      }
      function di(h) {
        var C = {
          // We use these fields to store the result.
          _status: _r,
          _result: h
        }, z = {
          $$typeof: $e,
          _payload: C,
          _init: Qa
        };
        {
          var j, K;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Ne) {
                Ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Ne, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(Ne) {
                Ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = Ne, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function pi(h) {
        h != null && h.$$typeof === oe ? Ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ce("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ce("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: ot,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(j) {
              z = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === dt || h === Bt || At || h === S || h === te || h === Re || Oe || h === St || Zt || ln || _t || typeof h == "object" && h !== null && (h.$$typeof === $e || h.$$typeof === oe || h.$$typeof === pe || h.$$typeof === he || h.$$typeof === ot || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ie(h, C) {
        I(h) || Ce("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: oe,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(K) {
              j = K, !h.name && !h.displayName && (h.displayName = K);
            }
          });
        }
        return z;
      }
      function me() {
        var h = Qe.current;
        return h === null && Ce(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ge(h) {
        var C = me();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? Ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && Ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ye(h) {
        var C = me();
        return C.useState(h);
      }
      function ct(h, C, z) {
        var j = me();
        return j.useReducer(h, C, z);
      }
      function lt(h) {
        var C = me();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var z = me();
        return z.useEffect(h, C);
      }
      function tn(h, C) {
        var z = me();
        return z.useInsertionEffect(h, C);
      }
      function on(h, C) {
        var z = me();
        return z.useLayoutEffect(h, C);
      }
      function ar(h, C) {
        var z = me();
        return z.useCallback(h, C);
      }
      function Wa(h, C) {
        var z = me();
        return z.useMemo(h, C);
      }
      function Ga(h, C, z) {
        var j = me();
        return j.useImperativeHandle(h, C, z);
      }
      function qe(h, C) {
        {
          var z = me();
          return z.useDebugValue(h, C);
        }
      }
      function Ze() {
        var h = me();
        return h.useTransition();
      }
      function qa(h) {
        var C = me();
        return C.useDeferredValue(h);
      }
      function tu() {
        var h = me();
        return h.useId();
      }
      function nu(h, C, z) {
        var j = me();
        return j.useSyncExternalStore(h, C, z);
      }
      var vl = 0, Qu, hl, $r, Io, kr, lc, uc;
      function Wu() {
      }
      Wu.__reactDisabledLog = !0;
      function ml() {
        {
          if (vl === 0) {
            Qu = console.log, hl = console.info, $r = console.warn, Io = console.error, kr = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Wu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          vl++;
        }
      }
      function fa() {
        {
          if (vl--, vl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, h, {
                value: Qu
              }),
              info: P({}, h, {
                value: hl
              }),
              warn: P({}, h, {
                value: $r
              }),
              error: P({}, h, {
                value: Io
              }),
              group: P({}, h, {
                value: kr
              }),
              groupCollapsed: P({}, h, {
                value: lc
              }),
              groupEnd: P({}, h, {
                value: uc
              })
            });
          }
          vl < 0 && Ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = bt.ReactCurrentDispatcher, Ka;
      function Gu(h, C, z) {
        {
          if (Ka === void 0)
            try {
              throw Error();
            } catch (K) {
              var j = K.stack.trim().match(/\n( *(at )?)/);
              Ka = j && j[1] || "";
            }
          return `
` + Ka + h;
        }
      }
      var ru = !1, yl;
      {
        var qu = typeof WeakMap == "function" ? WeakMap : Map;
        yl = new qu();
      }
      function Xu(h, C) {
        if (!h || ru)
          return "";
        {
          var z = yl.get(h);
          if (z !== void 0)
            return z;
        }
        var j;
        ru = !0;
        var K = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ne;
        Ne = Xa.current, Xa.current = null, ml();
        try {
          if (C) {
            var ae = function() {
              throw Error();
            };
            if (Object.defineProperty(ae.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ae, []);
              } catch (hn) {
                j = hn;
              }
              Reflect.construct(h, [], ae);
            } else {
              try {
                ae.call();
              } catch (hn) {
                j = hn;
              }
              h.call(ae.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              j = hn;
            }
            h();
          }
        } catch (hn) {
          if (hn && j && typeof hn.stack == "string") {
            for (var ze = hn.stack.split(`
`), ft = j.stack.split(`
`), wt = ze.length - 1, nn = ft.length - 1; wt >= 1 && nn >= 0 && ze[wt] !== ft[nn]; )
              nn--;
            for (; wt >= 1 && nn >= 0; wt--, nn--)
              if (ze[wt] !== ft[nn]) {
                if (wt !== 1 || nn !== 1)
                  do
                    if (wt--, nn--, nn < 0 || ze[wt] !== ft[nn]) {
                      var Qt = `
` + ze[wt].replace(" at new ", " at ");
                      return h.displayName && Qt.includes("<anonymous>") && (Qt = Qt.replace("<anonymous>", h.displayName)), typeof h == "function" && yl.set(h, Qt), Qt;
                    }
                  while (wt >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          ru = !1, Xa.current = Ne, fa(), Error.prepareStackTrace = K;
        }
        var nt = h ? h.displayName || h.name : "", Wt = nt ? Gu(nt) : "";
        return typeof h == "function" && yl.set(h, Wt), Wt;
      }
      function Hi(h, C, z) {
        return Xu(h, !1);
      }
      function Qf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Vi(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Xu(h, Qf(h));
        if (typeof h == "string")
          return Gu(h);
        switch (h) {
          case te:
            return Gu("Suspense");
          case Re:
            return Gu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ot:
              return Hi(h.render);
            case oe:
              return Vi(h.type, C, z);
            case $e: {
              var j = h, K = j._payload, Ne = j._init;
              try {
                return Vi(Ne(K), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Ot = {}, Ku = bt.ReactDebugCurrentFrame;
      function xt(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Ku.setExtraStackFrame(z);
        } else
          Ku.setExtraStackFrame(null);
      }
      function $o(h, C, z, j, K) {
        {
          var Ne = Function.call.bind(Rn);
          for (var ae in h)
            if (Ne(h, ae)) {
              var ze = void 0;
              try {
                if (typeof h[ae] != "function") {
                  var ft = Error((j || "React class") + ": " + z + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ft.name = "Invariant Violation", ft;
                }
                ze = h[ae](C, ae, j, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (wt) {
                ze = wt;
              }
              ze && !(ze instanceof Error) && (xt(K), Ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", z, ae, typeof ze), xt(null)), ze instanceof Error && !(ze.message in Ot) && (Ot[ze.message] = !0, xt(K), Ce("Failed %s type: %s", z, ze.message), xt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Ft(z);
        } else
          Ft(null);
      }
      var Be;
      Be = !1;
      function Zu() {
        if (st.current) {
          var h = qn(st.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function hi(h) {
        return h != null ? ir(h.__source) : "";
      }
      var Dr = {};
      function mi(h) {
        var C = Zu();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function sn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = mi(C);
          if (!Dr[z]) {
            Dr[z] = !0;
            var j = "";
            h && h._owner && h._owner !== st.current && (j = " It was passed a child from " + qn(h._owner.type) + "."), vi(h), Ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, j), vi(null);
          }
        }
      }
      function $t(h, C) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var z = 0; z < h.length; z++) {
              var j = h[z];
              vn(j) && sn(j, C);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var K = pt(h);
            if (typeof K == "function" && K !== h.entries)
              for (var Ne = K.call(h), ae; !(ae = Ne.next()).done; )
                vn(ae.value) && sn(ae.value, C);
          }
        }
      }
      function gl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === ot || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === oe))
            z = C.propTypes;
          else
            return;
          if (z) {
            var j = qn(C);
            $o(z, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Be) {
            Be = !0;
            var K = qn(C);
            Ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function In(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var j = C[z];
            if (j !== "children" && j !== "key") {
              vi(h), Ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), Ce("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Or(h, C, z) {
        var j = I(h);
        if (!j) {
          var K = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = hi(C);
          Ne ? K += Ne : K += Zu();
          var ae;
          h === null ? ae = "null" : Cn(h) ? ae = "array" : h !== void 0 && h.$$typeof === vt ? (ae = "<" + (qn(h.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof h, Ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, K);
        }
        var ze = tt.apply(this, arguments);
        if (ze == null)
          return ze;
        if (j)
          for (var ft = 2; ft < arguments.length; ft++)
            $t(arguments[ft], h);
        return h === dt ? In(ze) : gl(ze), ze;
      }
      var xa = !1;
      function au(h) {
        var C = Or.bind(null, h);
        return C.type = h, xa || (xa = !0, Dt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Dt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Qo(h, C, z) {
        for (var j = Jt.apply(this, arguments), K = 2; K < arguments.length; K++)
          $t(arguments[K], j.type);
        return gl(j), j;
      }
      function Wo(h, C) {
        var z = mt.transition;
        mt.transition = {};
        var j = mt.transition;
        mt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (mt.transition = z, z === null && j._updatedFibers) {
            var K = j._updatedFibers.size;
            K > 10 && Dt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var Sl = !1, iu = null;
      function Wf(h) {
        if (iu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = V && V[C];
            iu = z.call(V, "timers").setImmediate;
          } catch {
            iu = function(K) {
              Sl === !1 && (Sl = !0, typeof MessageChannel > "u" && Ce("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ne = new MessageChannel();
              Ne.port1.onmessage = K, Ne.port2.postMessage(void 0);
            };
          }
        return iu(h);
      }
      var wa = 0, Za = !1;
      function yi(h) {
        {
          var C = wa;
          wa++, be.current === null && (be.current = []);
          var z = be.isBatchingLegacy, j;
          try {
            if (be.isBatchingLegacy = !0, j = h(), !z && be.didScheduleLegacyUpdate) {
              var K = be.current;
              K !== null && (be.didScheduleLegacyUpdate = !1, El(K));
            }
          } catch (nt) {
            throw _a(C), nt;
          } finally {
            be.isBatchingLegacy = z;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Ne = j, ae = !1, ze = {
              then: function(nt, Wt) {
                ae = !0, Ne.then(function(hn) {
                  _a(C), wa === 0 ? Ju(hn, nt, Wt) : nt(hn);
                }, function(hn) {
                  _a(C), Wt(hn);
                });
              }
            };
            return !Za && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ae || (Za = !0, Ce("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ze;
          } else {
            var ft = j;
            if (_a(C), wa === 0) {
              var wt = be.current;
              wt !== null && (El(wt), be.current = null);
              var nn = {
                then: function(nt, Wt) {
                  be.current === null ? (be.current = [], Ju(ft, nt, Wt)) : nt(ft);
                }
              };
              return nn;
            } else {
              var Qt = {
                then: function(nt, Wt) {
                  nt(ft);
                }
              };
              return Qt;
            }
          }
        }
      }
      function _a(h) {
        h !== wa - 1 && Ce("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), wa = h;
      }
      function Ju(h, C, z) {
        {
          var j = be.current;
          if (j !== null)
            try {
              El(j), Wf(function() {
                j.length === 0 ? (be.current = null, C(h)) : Ju(h, C, z);
              });
            } catch (K) {
              z(K);
            }
          else
            C(h);
        }
      }
      var eo = !1;
      function El(h) {
        if (!eo) {
          eo = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            eo = !1;
          }
        }
      }
      var lu = Or, to = Qo, no = au, Ja = {
        map: Fi,
        forEach: Jl,
        count: Zl,
        toArray: dl,
        only: pl
      };
      Y.Children = Ja, Y.Component = Ae, Y.Fragment = dt, Y.Profiler = Bt, Y.PureComponent = it, Y.StrictMode = S, Y.Suspense = te, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bt, Y.act = yi, Y.cloneElement = to, Y.createContext = eu, Y.createElement = lu, Y.createFactory = no, Y.createRef = On, Y.forwardRef = pi, Y.isValidElement = vn, Y.lazy = di, Y.memo = ie, Y.startTransition = Wo, Y.unstable_act = yi, Y.useCallback = ar, Y.useContext = Ge, Y.useDebugValue = qe, Y.useDeferredValue = qa, Y.useEffect = Tn, Y.useId = tu, Y.useImperativeHandle = Ga, Y.useInsertionEffect = tn, Y.useLayoutEffect = on, Y.useMemo = Wa, Y.useReducer = ct, Y.useRef = lt, Y.useState = Ye, Y.useSyncExternalStore = nu, Y.useTransition = Ze, Y.version = L, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
process.env.NODE_ENV === "production" ? pE.exports = K1() : pE.exports = Z1();
var ic = pE.exports;
const J1 = /* @__PURE__ */ X1(ic);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function ek() {
  if (ZR) return Kp;
  ZR = 1;
  var V = ic, Y = Symbol.for("react.element"), L = Symbol.for("react.fragment"), vt = Object.prototype.hasOwnProperty, rt = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, dt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(Bt, pe, he) {
    var ot, te = {}, Re = null, oe = null;
    he !== void 0 && (Re = "" + he), pe.key !== void 0 && (Re = "" + pe.key), pe.ref !== void 0 && (oe = pe.ref);
    for (ot in pe) vt.call(pe, ot) && !dt.hasOwnProperty(ot) && (te[ot] = pe[ot]);
    if (Bt && Bt.defaultProps) for (ot in pe = Bt.defaultProps, pe) te[ot] === void 0 && (te[ot] = pe[ot]);
    return { $$typeof: Y, type: Bt, key: Re, ref: oe, props: te, _owner: rt.current };
  }
  return Kp.Fragment = L, Kp.jsx = S, Kp.jsxs = S, Kp;
}
var Zp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JR;
function tk() {
  return JR || (JR = 1, process.env.NODE_ENV !== "production" && function() {
    var V = ic, Y = Symbol.for("react.element"), L = Symbol.for("react.portal"), vt = Symbol.for("react.fragment"), rt = Symbol.for("react.strict_mode"), dt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Bt = Symbol.for("react.context"), pe = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), ot = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), Re = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), $e = Symbol.iterator, St = "@@iterator";
    function ht(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = $e && R[$e] || R[St];
      return typeof I == "function" ? I : null;
    }
    var fn = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function pt(R) {
      {
        for (var I = arguments.length, ie = new Array(I > 1 ? I - 1 : 0), me = 1; me < I; me++)
          ie[me - 1] = arguments[me];
        Qe("error", R, ie);
      }
    }
    function Qe(R, I, ie) {
      {
        var me = fn.ReactDebugCurrentFrame, Ge = me.getStackAddendum();
        Ge !== "" && (I += "%s", ie = ie.concat([Ge]));
        var Ye = ie.map(function(ct) {
          return String(ct);
        });
        Ye.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, Ye);
      }
    }
    var mt = !1, be = !1, st = !1, Fe = !1, an = !1, Ft;
    Ft = Symbol.for("react.module.reference");
    function Zt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === vt || R === dt || an || R === rt || R === he || R === ot || Fe || R === oe || mt || be || st || typeof R == "object" && R !== null && (R.$$typeof === Re || R.$$typeof === te || R.$$typeof === S || R.$$typeof === Bt || R.$$typeof === pe || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ft || R.getModuleId !== void 0));
    }
    function ln(R, I, ie) {
      var me = R.displayName;
      if (me)
        return me;
      var Ge = I.displayName || I.name || "";
      return Ge !== "" ? ie + "(" + Ge + ")" : ie;
    }
    function _t(R) {
      return R.displayName || "Context";
    }
    function Oe(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && pt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case vt:
          return "Fragment";
        case L:
          return "Portal";
        case dt:
          return "Profiler";
        case rt:
          return "StrictMode";
        case he:
          return "Suspense";
        case ot:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Bt:
            var I = R;
            return _t(I) + ".Consumer";
          case S:
            var ie = R;
            return _t(ie._context) + ".Provider";
          case pe:
            return ln(R, R.render, "ForwardRef");
          case te:
            var me = R.displayName || null;
            return me !== null ? me : Oe(R.type) || "Memo";
          case Re: {
            var Ge = R, Ye = Ge._payload, ct = Ge._init;
            try {
              return Oe(ct(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var At = Object.assign, bt = 0, Dt, Ce, Z, Te, re, b, P;
    function He() {
    }
    He.__reactDisabledLog = !0;
    function Ae() {
      {
        if (bt === 0) {
          Dt = console.log, Ce = console.info, Z = console.warn, Te = console.error, re = console.group, b = console.groupCollapsed, P = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: He,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        bt++;
      }
    }
    function at() {
      {
        if (bt--, bt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: At({}, R, {
              value: Dt
            }),
            info: At({}, R, {
              value: Ce
            }),
            warn: At({}, R, {
              value: Z
            }),
            error: At({}, R, {
              value: Te
            }),
            group: At({}, R, {
              value: re
            }),
            groupCollapsed: At({}, R, {
              value: b
            }),
            groupEnd: At({}, R, {
              value: P
            })
          });
        }
        bt < 0 && pt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Je = fn.ReactCurrentDispatcher, Ke;
    function et(R, I, ie) {
      {
        if (Ke === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var me = Ge.stack.trim().match(/\n( *(at )?)/);
            Ke = me && me[1] || "";
          }
        return `
` + Ke + R;
      }
    }
    var it = !1, Pt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Pt = new On();
    }
    function wr(R, I) {
      if (!R || it)
        return "";
      {
        var ie = Pt.get(R);
        if (ie !== void 0)
          return ie;
      }
      var me;
      it = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = Je.current, Je.current = null, Ae();
      try {
        if (I) {
          var ct = function() {
            throw Error();
          };
          if (Object.defineProperty(ct.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ct, []);
            } catch (qe) {
              me = qe;
            }
            Reflect.construct(R, [], ct);
          } else {
            try {
              ct.call();
            } catch (qe) {
              me = qe;
            }
            R.call(ct.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            me = qe;
          }
          R();
        }
      } catch (qe) {
        if (qe && me && typeof qe.stack == "string") {
          for (var lt = qe.stack.split(`
`), Tn = me.stack.split(`
`), tn = lt.length - 1, on = Tn.length - 1; tn >= 1 && on >= 0 && lt[tn] !== Tn[on]; )
            on--;
          for (; tn >= 1 && on >= 0; tn--, on--)
            if (lt[tn] !== Tn[on]) {
              if (tn !== 1 || on !== 1)
                do
                  if (tn--, on--, on < 0 || lt[tn] !== Tn[on]) {
                    var ar = `
` + lt[tn].replace(" at new ", " at ");
                    return R.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", R.displayName)), typeof R == "function" && Pt.set(R, ar), ar;
                  }
                while (tn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        it = !1, Je.current = Ye, at(), Error.prepareStackTrace = Ge;
      }
      var Wa = R ? R.displayName || R.name : "", Ga = Wa ? et(Wa) : "";
      return typeof R == "function" && Pt.set(R, Ga), Ga;
    }
    function Cn(R, I, ie) {
      return wr(R, !1);
    }
    function nr(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function Pn(R, I, ie) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return wr(R, nr(R));
      if (typeof R == "string")
        return et(R);
      switch (R) {
        case he:
          return et("Suspense");
        case ot:
          return et("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case pe:
            return Cn(R.render);
          case te:
            return Pn(R.type, I, ie);
          case Re: {
            var me = R, Ge = me._payload, Ye = me._init;
            try {
              return Pn(Ye(Ge), I, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Ir = {}, si = fn.ReactDebugCurrentFrame;
    function oa(R) {
      if (R) {
        var I = R._owner, ie = Pn(R.type, R._source, I ? I.type : null);
        si.setExtraStackFrame(ie);
      } else
        si.setExtraStackFrame(null);
    }
    function qn(R, I, ie, me, Ge) {
      {
        var Ye = Function.call.bind(Bn);
        for (var ct in R)
          if (Ye(R, ct)) {
            var lt = void 0;
            try {
              if (typeof R[ct] != "function") {
                var Tn = Error((me || "React class") + ": " + ie + " type `" + ct + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ct] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              lt = R[ct](I, ct, me, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tn) {
              lt = tn;
            }
            lt && !(lt instanceof Error) && (oa(Ge), pt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", ie, ct, typeof lt), oa(null)), lt instanceof Error && !(lt.message in Ir) && (Ir[lt.message] = !0, oa(Ge), pt("Failed %s type: %s", ie, lt.message), oa(null));
          }
      }
    }
    var Rn = Array.isArray;
    function Yn(R) {
      return Rn(R);
    }
    function gr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, ie = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ie;
      }
    }
    function Ia(R) {
      try {
        return Nn(R), !1;
      } catch {
        return !0;
      }
    }
    function Nn(R) {
      return "" + R;
    }
    function Sr(R) {
      if (Ia(R))
        return pt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(R)), Nn(R);
    }
    var sa = fn.ReactCurrentOwner, $a = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ci, J;
    function xe(R) {
      if (Bn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function tt(R) {
      if (Bn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function jt(R, I) {
      typeof R.ref == "string" && sa.current;
    }
    function Jt(R, I) {
      {
        var ie = function() {
          ci || (ci = !0, pt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function vn(R, I) {
      {
        var ie = function() {
          J || (J = !0, pt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var un = function(R, I, ie, me, Ge, Ye, ct) {
      var lt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Y,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: ie,
        props: ct,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return lt._store = {}, Object.defineProperty(lt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(lt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(lt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(lt.props), Object.freeze(lt)), lt;
    };
    function Xn(R, I, ie, me, Ge) {
      {
        var Ye, ct = {}, lt = null, Tn = null;
        ie !== void 0 && (Sr(ie), lt = "" + ie), tt(I) && (Sr(I.key), lt = "" + I.key), xe(I) && (Tn = I.ref, jt(I, Ge));
        for (Ye in I)
          Bn.call(I, Ye) && !$a.hasOwnProperty(Ye) && (ct[Ye] = I[Ye]);
        if (R && R.defaultProps) {
          var tn = R.defaultProps;
          for (Ye in tn)
            ct[Ye] === void 0 && (ct[Ye] = tn[Ye]);
        }
        if (lt || Tn) {
          var on = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          lt && Jt(ct, on), Tn && vn(ct, on);
        }
        return un(R, lt, Tn, Ge, me, sa.current, ct);
      }
    }
    var en = fn.ReactCurrentOwner, Yt = fn.ReactDebugCurrentFrame;
    function It(R) {
      if (R) {
        var I = R._owner, ie = Pn(R.type, R._source, I ? I.type : null);
        Yt.setExtraStackFrame(ie);
      } else
        Yt.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function Er(R) {
      return typeof R == "object" && R !== null && R.$$typeof === Y;
    }
    function Ta() {
      {
        if (en.current) {
          var R = Oe(en.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Fi(R) {
      return "";
    }
    var Zl = {};
    function Jl(R) {
      {
        var I = Ta();
        if (!I) {
          var ie = typeof R == "string" ? R : R.displayName || R.name;
          ie && (I = `

Check the top-level render call using <` + ie + ">.");
        }
        return I;
      }
    }
    function dl(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ie = Jl(I);
        if (Zl[ie])
          return;
        Zl[ie] = !0;
        var me = "";
        R && R._owner && R._owner !== en.current && (me = " It was passed a child from " + Oe(R._owner.type) + "."), It(R), pt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, me), It(null);
      }
    }
    function pl(R, I) {
      {
        if (typeof R != "object")
          return;
        if (Yn(R))
          for (var ie = 0; ie < R.length; ie++) {
            var me = R[ie];
            Er(me) && dl(me, I);
          }
        else if (Er(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ge = ht(R);
          if (typeof Ge == "function" && Ge !== R.entries)
            for (var Ye = Ge.call(R), ct; !(ct = Ye.next()).done; )
              Er(ct.value) && dl(ct.value, I);
        }
      }
    }
    function eu(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var ie;
        if (typeof I == "function")
          ie = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === pe || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === te))
          ie = I.propTypes;
        else
          return;
        if (ie) {
          var me = Oe(I);
          qn(ie, R.props, "prop", me, R);
        } else if (I.PropTypes !== void 0 && !ca) {
          ca = !0;
          var Ge = Oe(I);
          pt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && pt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(R) {
      {
        for (var I = Object.keys(R.props), ie = 0; ie < I.length; ie++) {
          var me = I[ie];
          if (me !== "children" && me !== "key") {
            It(R), pt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), It(null);
            break;
          }
        }
        R.ref !== null && (It(R), pt("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    var br = {};
    function rr(R, I, ie, me, Ge, Ye) {
      {
        var ct = Zt(R);
        if (!ct) {
          var lt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (lt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Fi();
          Tn ? lt += Tn : lt += Ta();
          var tn;
          R === null ? tn = "null" : Yn(R) ? tn = "array" : R !== void 0 && R.$$typeof === Y ? (tn = "<" + (Oe(R.type) || "Unknown") + " />", lt = " Did you accidentally export a JSX literal instead of a component?") : tn = typeof R, pt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tn, lt);
        }
        var on = Xn(R, I, ie, Ge, Ye);
        if (on == null)
          return on;
        if (ct) {
          var ar = I.children;
          if (ar !== void 0)
            if (me)
              if (Yn(ar)) {
                for (var Wa = 0; Wa < ar.length; Wa++)
                  pl(ar[Wa], R);
                Object.freeze && Object.freeze(ar);
              } else
                pt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pl(ar, R);
        }
        if (Bn.call(I, "key")) {
          var Ga = Oe(R), qe = Object.keys(I).filter(function(tu) {
            return tu !== "key";
          }), Ze = qe.length > 0 ? "{key: someKey, " + qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!br[Ga + Ze]) {
            var qa = qe.length > 0 ? "{" + qe.join(": ..., ") + ": ...}" : "{}";
            pt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ze, Ga, qa, Ga), br[Ga + Ze] = !0;
          }
        }
        return R === vt ? _r(on) : eu(on), on;
      }
    }
    function fi(R, I, ie) {
      return rr(R, I, ie, !0);
    }
    function Qa(R, I, ie) {
      return rr(R, I, ie, !1);
    }
    var di = Qa, pi = fi;
    Zp.Fragment = vt, Zp.jsx = di, Zp.jsxs = pi;
  }()), Zp;
}
process.env.NODE_ENV === "production" ? dE.exports = ek() : dE.exports = tk();
var ee = dE.exports, vE = { exports: {} }, Ba = {}, $m = { exports: {} }, cE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eT;
function nk() {
  return eT || (eT = 1, function(V) {
    function Y(Z, Te) {
      var re = Z.length;
      Z.push(Te);
      e: for (; 0 < re; ) {
        var b = re - 1 >>> 1, P = Z[b];
        if (0 < rt(P, Te)) Z[b] = Te, Z[re] = P, re = b;
        else break e;
      }
    }
    function L(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function vt(Z) {
      if (Z.length === 0) return null;
      var Te = Z[0], re = Z.pop();
      if (re !== Te) {
        Z[0] = re;
        e: for (var b = 0, P = Z.length, He = P >>> 1; b < He; ) {
          var Ae = 2 * (b + 1) - 1, at = Z[Ae], Je = Ae + 1, Ke = Z[Je];
          if (0 > rt(at, re)) Je < P && 0 > rt(Ke, at) ? (Z[b] = Ke, Z[Je] = re, b = Je) : (Z[b] = at, Z[Ae] = re, b = Ae);
          else if (Je < P && 0 > rt(Ke, re)) Z[b] = Ke, Z[Je] = re, b = Je;
          else break e;
        }
      }
      return Te;
    }
    function rt(Z, Te) {
      var re = Z.sortIndex - Te.sortIndex;
      return re !== 0 ? re : Z.id - Te.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var dt = performance;
      V.unstable_now = function() {
        return dt.now();
      };
    } else {
      var S = Date, Bt = S.now();
      V.unstable_now = function() {
        return S.now() - Bt;
      };
    }
    var pe = [], he = [], ot = 1, te = null, Re = 3, oe = !1, $e = !1, St = !1, ht = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, pt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Qe(Z) {
      for (var Te = L(he); Te !== null; ) {
        if (Te.callback === null) vt(he);
        else if (Te.startTime <= Z) vt(he), Te.sortIndex = Te.expirationTime, Y(pe, Te);
        else break;
        Te = L(he);
      }
    }
    function mt(Z) {
      if (St = !1, Qe(Z), !$e) if (L(pe) !== null) $e = !0, Dt(be);
      else {
        var Te = L(he);
        Te !== null && Ce(mt, Te.startTime - Z);
      }
    }
    function be(Z, Te) {
      $e = !1, St && (St = !1, fn(an), an = -1), oe = !0;
      var re = Re;
      try {
        for (Qe(Te), te = L(pe); te !== null && (!(te.expirationTime > Te) || Z && !ln()); ) {
          var b = te.callback;
          if (typeof b == "function") {
            te.callback = null, Re = te.priorityLevel;
            var P = b(te.expirationTime <= Te);
            Te = V.unstable_now(), typeof P == "function" ? te.callback = P : te === L(pe) && vt(pe), Qe(Te);
          } else vt(pe);
          te = L(pe);
        }
        if (te !== null) var He = !0;
        else {
          var Ae = L(he);
          Ae !== null && Ce(mt, Ae.startTime - Te), He = !1;
        }
        return He;
      } finally {
        te = null, Re = re, oe = !1;
      }
    }
    var st = !1, Fe = null, an = -1, Ft = 5, Zt = -1;
    function ln() {
      return !(V.unstable_now() - Zt < Ft);
    }
    function _t() {
      if (Fe !== null) {
        var Z = V.unstable_now();
        Zt = Z;
        var Te = !0;
        try {
          Te = Fe(!0, Z);
        } finally {
          Te ? Oe() : (st = !1, Fe = null);
        }
      } else st = !1;
    }
    var Oe;
    if (typeof pt == "function") Oe = function() {
      pt(_t);
    };
    else if (typeof MessageChannel < "u") {
      var At = new MessageChannel(), bt = At.port2;
      At.port1.onmessage = _t, Oe = function() {
        bt.postMessage(null);
      };
    } else Oe = function() {
      ht(_t, 0);
    };
    function Dt(Z) {
      Fe = Z, st || (st = !0, Oe());
    }
    function Ce(Z, Te) {
      an = ht(function() {
        Z(V.unstable_now());
      }, Te);
    }
    V.unstable_IdlePriority = 5, V.unstable_ImmediatePriority = 1, V.unstable_LowPriority = 4, V.unstable_NormalPriority = 3, V.unstable_Profiling = null, V.unstable_UserBlockingPriority = 2, V.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, V.unstable_continueExecution = function() {
      $e || oe || ($e = !0, Dt(be));
    }, V.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ft = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, V.unstable_getCurrentPriorityLevel = function() {
      return Re;
    }, V.unstable_getFirstCallbackNode = function() {
      return L(pe);
    }, V.unstable_next = function(Z) {
      switch (Re) {
        case 1:
        case 2:
        case 3:
          var Te = 3;
          break;
        default:
          Te = Re;
      }
      var re = Re;
      Re = Te;
      try {
        return Z();
      } finally {
        Re = re;
      }
    }, V.unstable_pauseExecution = function() {
    }, V.unstable_requestPaint = function() {
    }, V.unstable_runWithPriority = function(Z, Te) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var re = Re;
      Re = Z;
      try {
        return Te();
      } finally {
        Re = re;
      }
    }, V.unstable_scheduleCallback = function(Z, Te, re) {
      var b = V.unstable_now();
      switch (typeof re == "object" && re !== null ? (re = re.delay, re = typeof re == "number" && 0 < re ? b + re : b) : re = b, Z) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = re + P, Z = { id: ot++, callback: Te, priorityLevel: Z, startTime: re, expirationTime: P, sortIndex: -1 }, re > b ? (Z.sortIndex = re, Y(he, Z), L(pe) === null && Z === L(he) && (St ? (fn(an), an = -1) : St = !0, Ce(mt, re - b))) : (Z.sortIndex = P, Y(pe, Z), $e || oe || ($e = !0, Dt(be))), Z;
    }, V.unstable_shouldYield = ln, V.unstable_wrapCallback = function(Z) {
      var Te = Re;
      return function() {
        var re = Re;
        Re = Te;
        try {
          return Z.apply(this, arguments);
        } finally {
          Re = re;
        }
      };
    };
  }(cE)), cE;
}
var fE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function rk() {
  return tT || (tT = 1, function(V) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Y = !1, L = 5;
      function vt(J, xe) {
        var tt = J.length;
        J.push(xe), S(J, xe, tt);
      }
      function rt(J) {
        return J.length === 0 ? null : J[0];
      }
      function dt(J) {
        if (J.length === 0)
          return null;
        var xe = J[0], tt = J.pop();
        return tt !== xe && (J[0] = tt, Bt(J, tt, 0)), xe;
      }
      function S(J, xe, tt) {
        for (var jt = tt; jt > 0; ) {
          var Jt = jt - 1 >>> 1, vn = J[Jt];
          if (pe(vn, xe) > 0)
            J[Jt] = xe, J[jt] = vn, jt = Jt;
          else
            return;
        }
      }
      function Bt(J, xe, tt) {
        for (var jt = tt, Jt = J.length, vn = Jt >>> 1; jt < vn; ) {
          var un = (jt + 1) * 2 - 1, Xn = J[un], en = un + 1, Yt = J[en];
          if (pe(Xn, xe) < 0)
            en < Jt && pe(Yt, Xn) < 0 ? (J[jt] = Yt, J[en] = xe, jt = en) : (J[jt] = Xn, J[un] = xe, jt = un);
          else if (en < Jt && pe(Yt, xe) < 0)
            J[jt] = Yt, J[en] = xe, jt = en;
          else
            return;
        }
      }
      function pe(J, xe) {
        var tt = J.sortIndex - xe.sortIndex;
        return tt !== 0 ? tt : J.id - xe.id;
      }
      var he = 1, ot = 2, te = 3, Re = 4, oe = 5;
      function $e(J, xe) {
      }
      var St = typeof performance == "object" && typeof performance.now == "function";
      if (St) {
        var ht = performance;
        V.unstable_now = function() {
          return ht.now();
        };
      } else {
        var fn = Date, pt = fn.now();
        V.unstable_now = function() {
          return fn.now() - pt;
        };
      }
      var Qe = 1073741823, mt = -1, be = 250, st = 5e3, Fe = 1e4, an = Qe, Ft = [], Zt = [], ln = 1, _t = null, Oe = te, At = !1, bt = !1, Dt = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, Te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function re(J) {
        for (var xe = rt(Zt); xe !== null; ) {
          if (xe.callback === null)
            dt(Zt);
          else if (xe.startTime <= J)
            dt(Zt), xe.sortIndex = xe.expirationTime, vt(Ft, xe);
          else
            return;
          xe = rt(Zt);
        }
      }
      function b(J) {
        if (Dt = !1, re(J), !bt)
          if (rt(Ft) !== null)
            bt = !0, Nn(P);
          else {
            var xe = rt(Zt);
            xe !== null && Sr(b, xe.startTime - J);
          }
      }
      function P(J, xe) {
        bt = !1, Dt && (Dt = !1, sa()), At = !0;
        var tt = Oe;
        try {
          var jt;
          if (!Y) return He(J, xe);
        } finally {
          _t = null, Oe = tt, At = !1;
        }
      }
      function He(J, xe) {
        var tt = xe;
        for (re(tt), _t = rt(Ft); _t !== null && !(_t.expirationTime > tt && (!J || si())); ) {
          var jt = _t.callback;
          if (typeof jt == "function") {
            _t.callback = null, Oe = _t.priorityLevel;
            var Jt = _t.expirationTime <= tt, vn = jt(Jt);
            tt = V.unstable_now(), typeof vn == "function" ? _t.callback = vn : _t === rt(Ft) && dt(Ft), re(tt);
          } else
            dt(Ft);
          _t = rt(Ft);
        }
        if (_t !== null)
          return !0;
        var un = rt(Zt);
        return un !== null && Sr(b, un.startTime - tt), !1;
      }
      function Ae(J, xe) {
        switch (J) {
          case he:
          case ot:
          case te:
          case Re:
          case oe:
            break;
          default:
            J = te;
        }
        var tt = Oe;
        Oe = J;
        try {
          return xe();
        } finally {
          Oe = tt;
        }
      }
      function at(J) {
        var xe;
        switch (Oe) {
          case he:
          case ot:
          case te:
            xe = te;
            break;
          default:
            xe = Oe;
            break;
        }
        var tt = Oe;
        Oe = xe;
        try {
          return J();
        } finally {
          Oe = tt;
        }
      }
      function Je(J) {
        var xe = Oe;
        return function() {
          var tt = Oe;
          Oe = xe;
          try {
            return J.apply(this, arguments);
          } finally {
            Oe = tt;
          }
        };
      }
      function Ke(J, xe, tt) {
        var jt = V.unstable_now(), Jt;
        if (typeof tt == "object" && tt !== null) {
          var vn = tt.delay;
          typeof vn == "number" && vn > 0 ? Jt = jt + vn : Jt = jt;
        } else
          Jt = jt;
        var un;
        switch (J) {
          case he:
            un = mt;
            break;
          case ot:
            un = be;
            break;
          case oe:
            un = an;
            break;
          case Re:
            un = Fe;
            break;
          case te:
          default:
            un = st;
            break;
        }
        var Xn = Jt + un, en = {
          id: ln++,
          callback: xe,
          priorityLevel: J,
          startTime: Jt,
          expirationTime: Xn,
          sortIndex: -1
        };
        return Jt > jt ? (en.sortIndex = Jt, vt(Zt, en), rt(Ft) === null && en === rt(Zt) && (Dt ? sa() : Dt = !0, Sr(b, Jt - jt))) : (en.sortIndex = Xn, vt(Ft, en), !bt && !At && (bt = !0, Nn(P))), en;
      }
      function et() {
      }
      function it() {
        !bt && !At && (bt = !0, Nn(P));
      }
      function Pt() {
        return rt(Ft);
      }
      function On(J) {
        J.callback = null;
      }
      function wr() {
        return Oe;
      }
      var Cn = !1, nr = null, Pn = -1, Bn = L, Ir = -1;
      function si() {
        var J = V.unstable_now() - Ir;
        return !(J < Bn);
      }
      function oa() {
      }
      function qn(J) {
        if (J < 0 || J > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        J > 0 ? Bn = Math.floor(1e3 / J) : Bn = L;
      }
      var Rn = function() {
        if (nr !== null) {
          var J = V.unstable_now();
          Ir = J;
          var xe = !0, tt = !0;
          try {
            tt = nr(xe, J);
          } finally {
            tt ? Yn() : (Cn = !1, nr = null);
          }
        } else
          Cn = !1;
      }, Yn;
      if (typeof Te == "function")
        Yn = function() {
          Te(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var gr = new MessageChannel(), Ia = gr.port2;
        gr.port1.onmessage = Rn, Yn = function() {
          Ia.postMessage(null);
        };
      } else
        Yn = function() {
          Ce(Rn, 0);
        };
      function Nn(J) {
        nr = J, Cn || (Cn = !0, Yn());
      }
      function Sr(J, xe) {
        Pn = Ce(function() {
          J(V.unstable_now());
        }, xe);
      }
      function sa() {
        Z(Pn), Pn = -1;
      }
      var $a = oa, ci = null;
      V.unstable_IdlePriority = oe, V.unstable_ImmediatePriority = he, V.unstable_LowPriority = Re, V.unstable_NormalPriority = te, V.unstable_Profiling = ci, V.unstable_UserBlockingPriority = ot, V.unstable_cancelCallback = On, V.unstable_continueExecution = it, V.unstable_forceFrameRate = qn, V.unstable_getCurrentPriorityLevel = wr, V.unstable_getFirstCallbackNode = Pt, V.unstable_next = at, V.unstable_pauseExecution = et, V.unstable_requestPaint = $a, V.unstable_runWithPriority = Ae, V.unstable_scheduleCallback = Ke, V.unstable_shouldYield = si, V.unstable_wrapCallback = Je, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fE)), fE;
}
var nT;
function oT() {
  return nT || (nT = 1, process.env.NODE_ENV === "production" ? $m.exports = nk() : $m.exports = rk()), $m.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rT;
function ak() {
  if (rT) return Ba;
  rT = 1;
  var V = ic, Y = oT();
  function L(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var vt = /* @__PURE__ */ new Set(), rt = {};
  function dt(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (rt[n] = r, n = 0; n < r.length; n++) vt.add(r[n]);
  }
  var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pe = Object.prototype.hasOwnProperty, he = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ot = {}, te = {};
  function Re(n) {
    return pe.call(te, n) ? !0 : pe.call(ot, n) ? !1 : he.test(n) ? te[n] = !0 : (ot[n] = !0, !1);
  }
  function oe(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function $e(n, r, l, o) {
    if (r === null || typeof r > "u" || oe(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function St(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ht = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ht[n] = new St(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ht[r] = new St(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ht[n] = new St(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ht[n] = new St(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ht[n] = new St(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ht[n] = new St(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ht[n] = new St(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ht[n] = new St(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ht[n] = new St(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function pt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      pt
    );
    ht[r] = new St(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, pt);
    ht[r] = new St(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, pt);
    ht[r] = new St(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ht[n] = new St(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ht.xlinkHref = new St("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ht[n] = new St(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Qe(n, r, l, o) {
    var c = ht.hasOwnProperty(r) ? ht[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && ($e(r, l, c, o) && (l = null), o || c === null ? Re(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var mt = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), st = Symbol.for("react.portal"), Fe = Symbol.for("react.fragment"), an = Symbol.for("react.strict_mode"), Ft = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), ln = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), Oe = Symbol.for("react.suspense"), At = Symbol.for("react.suspense_list"), bt = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function Te(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = Object.assign, b;
  function P(n) {
    if (b === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      b = r && r[1] || "";
    }
    return `
` + b + n;
  }
  var He = !1;
  function Ae(n, r) {
    if (!n || He) return "";
    He = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      He = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function at(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ae(n.type, !1), n;
      case 11:
        return n = Ae(n.type.render, !1), n;
      case 1:
        return n = Ae(n.type, !0), n;
      default:
        return "";
    }
  }
  function Je(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Fe:
        return "Fragment";
      case st:
        return "Portal";
      case Ft:
        return "Profiler";
      case an:
        return "StrictMode";
      case Oe:
        return "Suspense";
      case At:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ln:
        return (n.displayName || "Context") + ".Consumer";
      case Zt:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case bt:
        return r = n.displayName || null, r !== null ? r : Je(n.type) || "Memo";
      case Dt:
        r = n._payload, n = n._init;
        try {
          return Je(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ke(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Je(r);
      case 8:
        return r === an ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function it(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Pt(n) {
    var r = it(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function On(n) {
    n._valueTracker || (n._valueTracker = Pt(n));
  }
  function wr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = it(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Cn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nr(n, r) {
    var l = r.checked;
    return re({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Pn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = et(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && Qe(n, "checked", r, !1);
  }
  function Ir(n, r) {
    Bn(n, r);
    var l = et(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, et(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function si(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function oa(n, r, l) {
    (r !== "number" || Cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qn = Array.isArray;
  function Rn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + et(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(L(91));
    return re({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(L(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(L(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: et(l) };
  }
  function Ia(n, r) {
    var l = et(r.value), o = et(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Nn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var $a, ci = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for ($a = $a || document.createElement("div"), $a.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = $a.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function J(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var xe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, tt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xe).forEach(function(n) {
    tt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), xe[r] = xe[n];
    });
  });
  function jt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || xe.hasOwnProperty(n) && xe[n] ? ("" + r).trim() : r + "px";
  }
  function Jt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = jt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function un(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(L(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(L(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(L(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(L(62));
    }
  }
  function Xn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var en = null;
  function Yt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var It = null, ca = null, Er = null;
  function Ta(n) {
    if (n = ke(n)) {
      if (typeof It != "function") throw Error(L(280));
      var r = n.stateNode;
      r && (r = mn(r), It(n.stateNode, n.type, r));
    }
  }
  function Fi(n) {
    ca ? Er ? Er.push(n) : Er = [n] : ca = n;
  }
  function Zl() {
    if (ca) {
      var n = ca, r = Er;
      if (Er = ca = null, Ta(n), r) for (n = 0; n < r.length; n++) Ta(r[n]);
    }
  }
  function Jl(n, r) {
    return n(r);
  }
  function dl() {
  }
  var pl = !1;
  function eu(n, r, l) {
    if (pl) return n(r, l);
    pl = !0;
    try {
      return Jl(n, r, l);
    } finally {
      pl = !1, (ca !== null || Er !== null) && (dl(), Zl());
    }
  }
  function _r(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = mn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(L(231, r, typeof l));
    return l;
  }
  var br = !1;
  if (Bt) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      br = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    br = !1;
  }
  function fi(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (W) {
      this.onError(W);
    }
  }
  var Qa = !1, di = null, pi = !1, R = null, I = { onError: function(n) {
    Qa = !0, di = n;
  } };
  function ie(n, r, l, o, c, d, m, E, T) {
    Qa = !1, di = null, fi.apply(I, arguments);
  }
  function me(n, r, l, o, c, d, m, E, T) {
    if (ie.apply(this, arguments), Qa) {
      if (Qa) {
        var U = di;
        Qa = !1, di = null;
      } else throw Error(L(198));
      pi || (pi = !0, R = U);
    }
  }
  function Ge(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ye(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function ct(n) {
    if (Ge(n) !== n) throw Error(L(188));
  }
  function lt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ge(n), r === null) throw Error(L(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return ct(c), n;
          if (d === o) return ct(c), r;
          d = d.sibling;
        }
        throw Error(L(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(L(189));
        }
      }
      if (l.alternate !== o) throw Error(L(190));
    }
    if (l.tag !== 3) throw Error(L(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = lt(n), n !== null ? tn(n) : null;
  }
  function tn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = tn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = Y.unstable_scheduleCallback, ar = Y.unstable_cancelCallback, Wa = Y.unstable_shouldYield, Ga = Y.unstable_requestPaint, qe = Y.unstable_now, Ze = Y.unstable_getCurrentPriorityLevel, qa = Y.unstable_ImmediatePriority, tu = Y.unstable_UserBlockingPriority, nu = Y.unstable_NormalPriority, vl = Y.unstable_LowPriority, Qu = Y.unstable_IdlePriority, hl = null, $r = null;
  function Io(n) {
    if ($r && typeof $r.onCommitFiberRoot == "function") try {
      $r.onCommitFiberRoot(hl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : Wu, lc = Math.log, uc = Math.LN2;
  function Wu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / uc | 0) | 0;
  }
  var ml = 64, fa = 4194304;
  function Xa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ka(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Xa(E) : (d &= m, d !== 0 && (o = Xa(d)));
    } else m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Gu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ru(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - kr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = Gu(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function yl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function qu() {
    var n = ml;
    return ml <<= 1, !(ml & 4194240) && (ml = 64), n;
  }
  function Xu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Hi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function Qf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Ot = 0;
  function Ku(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var xt, $o, vi, Be, Zu, ir = !1, hi = [], Dr = null, mi = null, sn = null, $t = /* @__PURE__ */ new Map(), gl = /* @__PURE__ */ new Map(), In = [], Or = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Dr = null;
        break;
      case "dragenter":
      case "dragleave":
        mi = null;
        break;
      case "mouseover":
      case "mouseout":
        sn = null;
        break;
      case "pointerover":
      case "pointerout":
        $t.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gl.delete(r.pointerId);
    }
  }
  function au(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ke(r), r !== null && $o(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Qo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Dr = au(Dr, n, r, l, o, c), !0;
      case "dragenter":
        return mi = au(mi, n, r, l, o, c), !0;
      case "mouseover":
        return sn = au(sn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return $t.set(d, au($t.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, gl.set(d, au(gl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Wo(n) {
    var r = pu(n.target);
    if (r !== null) {
      var l = Ge(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ye(l), r !== null) {
            n.blockedOn = r, Zu(n.priority, function() {
              vi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Sl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = to(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        en = o, l.target.dispatchEvent(o), en = null;
      } else return r = ke(l), r !== null && $o(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function iu(n, r, l) {
    Sl(n) && l.delete(r);
  }
  function Wf() {
    ir = !1, Dr !== null && Sl(Dr) && (Dr = null), mi !== null && Sl(mi) && (mi = null), sn !== null && Sl(sn) && (sn = null), $t.forEach(iu), gl.forEach(iu);
  }
  function wa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, Y.unstable_scheduleCallback(Y.unstable_NormalPriority, Wf)));
  }
  function Za(n) {
    function r(c) {
      return wa(c, n);
    }
    if (0 < hi.length) {
      wa(hi[0], n);
      for (var l = 1; l < hi.length; l++) {
        var o = hi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Dr !== null && wa(Dr, n), mi !== null && wa(mi, n), sn !== null && wa(sn, n), $t.forEach(r), gl.forEach(r), l = 0; l < In.length; l++) o = In[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < In.length && (l = In[0], l.blockedOn === null); ) Wo(l), l.blockedOn === null && In.shift();
  }
  var yi = mt.ReactCurrentBatchConfig, _a = !0;
  function Ju(n, r, l, o) {
    var c = Ot, d = yi.transition;
    yi.transition = null;
    try {
      Ot = 1, El(n, r, l, o);
    } finally {
      Ot = c, yi.transition = d;
    }
  }
  function eo(n, r, l, o) {
    var c = Ot, d = yi.transition;
    yi.transition = null;
    try {
      Ot = 4, El(n, r, l, o);
    } finally {
      Ot = c, yi.transition = d;
    }
  }
  function El(n, r, l, o) {
    if (_a) {
      var c = to(n, r, l, o);
      if (c === null) Sc(n, r, o, lu, l), xa(n, o);
      else if (Qo(c, n, r, l, o)) o.stopPropagation();
      else if (xa(n, o), r & 4 && -1 < Or.indexOf(n)) {
        for (; c !== null; ) {
          var d = ke(c);
          if (d !== null && xt(d), d = to(n, r, l, o), d === null && Sc(n, r, o, lu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Sc(n, r, o, null, l);
    }
  }
  var lu = null;
  function to(n, r, l, o) {
    if (lu = null, n = Yt(o), n = pu(n), n !== null) if (r = Ge(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ye(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return lu = n, null;
  }
  function no(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ze()) {
          case qa:
            return 1;
          case tu:
            return 4;
          case nu:
          case vl:
            return 16;
          case Qu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ja = null, h = null, C = null;
  function z() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in Ja ? Ja.value : Ja.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function K() {
    return !0;
  }
  function Ne() {
    return !1;
  }
  function ae(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? K : Ne, this.isPropagationStopped = Ne, this;
    }
    return re(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = K);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = K);
    }, persist: function() {
    }, isPersistent: K }), r;
  }
  var ze = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ft = ae(ze), wt = re({}, ze, { view: 0, detail: 0 }), nn = ae(wt), Qt, nt, Wt, hn = re({}, wt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Wt && (Wt && n.type === "mousemove" ? (Qt = n.screenX - Wt.screenX, nt = n.screenY - Wt.screenY) : nt = Qt = 0, Wt = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : nt;
  } }), Cl = ae(hn), Go = re({}, hn, { dataTransfer: 0 }), Pi = ae(Go), qo = re({}, wt, { relatedTarget: 0 }), uu = ae(qo), Gf = re({}, ze, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = ae(Gf), qf = re({}, ze, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ev = ae(qf), Xf = re({}, ze, { data: 0 }), Kf = ae(Xf), tv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, nv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Gm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Bi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Gm[n]) ? !!r[n] : !1;
  }
  function Zf() {
    return Bi;
  }
  var Jf = re({}, wt, { key: function(n) {
    if (n.key) {
      var r = tv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? nv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ed = ae(Jf), td = re({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rv = ae(td), sc = re({}, wt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zf }), av = ae(sc), Qr = re({}, ze, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yi = ae(Qr), Ln = re({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ii = ae(Ln), nd = [9, 13, 27, 32], ro = Bt && "CompositionEvent" in window, Xo = null;
  Bt && "documentMode" in document && (Xo = document.documentMode);
  var Ko = Bt && "TextEvent" in window && !Xo, iv = Bt && (!ro || Xo && 8 < Xo && 11 >= Xo), lv = " ", cc = !1;
  function uv(n, r) {
    switch (n) {
      case "keyup":
        return nd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ov(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ao = !1;
  function sv(n, r) {
    switch (n) {
      case "compositionend":
        return ov(r);
      case "keypress":
        return r.which !== 32 ? null : (cc = !0, lv);
      case "textInput":
        return n = r.data, n === lv && cc ? null : n;
      default:
        return null;
    }
  }
  function qm(n, r) {
    if (ao) return n === "compositionend" || !ro && uv(n, r) ? (n = z(), C = h = Ja = null, ao = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return iv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Xm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function cv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xm[n.type] : r === "textarea";
  }
  function rd(n, r, l, o) {
    Fi(o), r = rs(r, "onChange"), 0 < r.length && (l = new ft("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var gi = null, ou = null;
  function fv(n) {
    fu(n, 0);
  }
  function Zo(n) {
    var r = ti(n);
    if (wr(r)) return n;
  }
  function Km(n, r) {
    if (n === "change") return r;
  }
  var dv = !1;
  if (Bt) {
    var ad;
    if (Bt) {
      var id = "oninput" in document;
      if (!id) {
        var pv = document.createElement("div");
        pv.setAttribute("oninput", "return;"), id = typeof pv.oninput == "function";
      }
      ad = id;
    } else ad = !1;
    dv = ad && (!document.documentMode || 9 < document.documentMode);
  }
  function vv() {
    gi && (gi.detachEvent("onpropertychange", hv), ou = gi = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && Zo(ou)) {
      var r = [];
      rd(r, ou, n, Yt(n)), eu(fv, r);
    }
  }
  function Zm(n, r, l) {
    n === "focusin" ? (vv(), gi = r, ou = l, gi.attachEvent("onpropertychange", hv)) : n === "focusout" && vv();
  }
  function mv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(ou);
  }
  function Jm(n, r) {
    if (n === "click") return Zo(r);
  }
  function yv(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function ey(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : ey;
  function Jo(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!pe.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function gv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function fc(n, r) {
    var l = gv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = gv(l);
    }
  }
  function Rl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Rl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function es() {
    for (var n = window, r = Cn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Cn(n.document);
    }
    return r;
  }
  function dc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function io(n) {
    var r = es(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Rl(l.ownerDocument.documentElement, l)) {
      if (o !== null && dc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = fc(l, d);
          var m = fc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ty = Bt && "documentMode" in document && 11 >= document.documentMode, lo = null, ld = null, ts = null, ud = !1;
  function od(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ud || lo == null || lo !== Cn(o) || (o = lo, "selectionStart" in o && dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ts && Jo(ts, o) || (ts = o, o = rs(ld, "onSelect"), 0 < o.length && (r = new ft("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = lo)));
  }
  function pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var su = { animationend: pc("Animation", "AnimationEnd"), animationiteration: pc("Animation", "AnimationIteration"), animationstart: pc("Animation", "AnimationStart"), transitionend: pc("Transition", "TransitionEnd") }, lr = {}, sd = {};
  Bt && (sd = document.createElement("div").style, "AnimationEvent" in window || (delete su.animationend.animation, delete su.animationiteration.animation, delete su.animationstart.animation), "TransitionEvent" in window || delete su.transitionend.transition);
  function vc(n) {
    if (lr[n]) return lr[n];
    if (!su[n]) return n;
    var r = su[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in sd) return lr[n] = r[l];
    return n;
  }
  var Sv = vc("animationend"), Ev = vc("animationiteration"), Cv = vc("animationstart"), Rv = vc("transitionend"), cd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ba(n, r) {
    cd.set(n, r), dt(r, [n]);
  }
  for (var fd = 0; fd < hc.length; fd++) {
    var cu = hc[fd], ny = cu.toLowerCase(), ry = cu[0].toUpperCase() + cu.slice(1);
    ba(ny, "on" + ry);
  }
  ba(Sv, "onAnimationEnd"), ba(Ev, "onAnimationIteration"), ba(Cv, "onAnimationStart"), ba("dblclick", "onDoubleClick"), ba("focusin", "onFocus"), ba("focusout", "onBlur"), ba(Rv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), dt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), dt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), dt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), dt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ns = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, me(o, r, void 0, n), n.currentTarget = null;
  }
  function fu(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
      }
    }
    if (pi) throw n = R, pi = !1, R = null, n;
  }
  function Ht(n, r) {
    var l = r[ls];
    l === void 0 && (l = r[ls] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Tv(r, n, 2, !1), l.add(o));
  }
  function yc(n, r, l) {
    var o = 0;
    r && (o |= 4), Tv(l, n, o, r);
  }
  var gc = "_reactListening" + Math.random().toString(36).slice(2);
  function uo(n) {
    if (!n[gc]) {
      n[gc] = !0, vt.forEach(function(l) {
        l !== "selectionchange" && (dd.has(l) || yc(l, !1, n), yc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[gc] || (r[gc] = !0, yc("selectionchange", !1, r));
    }
  }
  function Tv(n, r, l, o) {
    switch (no(r)) {
      case 1:
        var c = Ju;
        break;
      case 4:
        c = eo;
        break;
      default:
        c = El;
    }
    l = c.bind(null, r, l, n), c = void 0, !br || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Sc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = pu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    eu(function() {
      var U = d, W = Yt(l), q = [];
      e: {
        var Q = cd.get(n);
        if (Q !== void 0) {
          var ce = ft, ye = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              ce = ed;
              break;
            case "focusin":
              ye = "focus", ce = uu;
              break;
            case "focusout":
              ye = "blur", ce = uu;
              break;
            case "beforeblur":
            case "afterblur":
              ce = uu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ce = Cl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Pi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = av;
              break;
            case Sv:
            case Ev:
            case Cv:
              ce = oc;
              break;
            case Rv:
              ce = Yi;
              break;
            case "scroll":
              ce = nn;
              break;
            case "wheel":
              ce = Ii;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = ev;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = rv;
          }
          var Ee = (r & 4) !== 0, kn = !Ee && n === "scroll", k = Ee ? Q !== null ? Q + "Capture" : null : Q;
          Ee = [];
          for (var w = U, N; w !== null; ) {
            N = w;
            var G = N.stateNode;
            if (N.tag === 5 && G !== null && (N = G, k !== null && (G = _r(w, k), G != null && Ee.push(oo(w, G, N)))), kn) break;
            w = w.return;
          }
          0 < Ee.length && (Q = new ce(Q, ye, null, l, W), q.push({ event: Q, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Q = n === "mouseover" || n === "pointerover", ce = n === "mouseout" || n === "pointerout", Q && l !== en && (ye = l.relatedTarget || l.fromElement) && (pu(ye) || ye[$i])) break e;
          if ((ce || Q) && (Q = W.window === W ? W : (Q = W.ownerDocument) ? Q.defaultView || Q.parentWindow : window, ce ? (ye = l.relatedTarget || l.toElement, ce = U, ye = ye ? pu(ye) : null, ye !== null && (kn = Ge(ye), ye !== kn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (ce = null, ye = U), ce !== ye)) {
            if (Ee = Cl, G = "onMouseLeave", k = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = rv, G = "onPointerLeave", k = "onPointerEnter", w = "pointer"), kn = ce == null ? Q : ti(ce), N = ye == null ? Q : ti(ye), Q = new Ee(G, w + "leave", ce, l, W), Q.target = kn, Q.relatedTarget = N, G = null, pu(W) === U && (Ee = new Ee(k, w + "enter", ye, l, W), Ee.target = N, Ee.relatedTarget = kn, G = Ee), kn = G, ce && ye) t: {
              for (Ee = ce, k = ye, w = 0, N = Ee; N; N = Tl(N)) w++;
              for (N = 0, G = k; G; G = Tl(G)) N++;
              for (; 0 < w - N; ) Ee = Tl(Ee), w--;
              for (; 0 < N - w; ) k = Tl(k), N--;
              for (; w--; ) {
                if (Ee === k || k !== null && Ee === k.alternate) break t;
                Ee = Tl(Ee), k = Tl(k);
              }
              Ee = null;
            }
            else Ee = null;
            ce !== null && xv(q, Q, ce, Ee, !1), ye !== null && kn !== null && xv(q, kn, ye, Ee, !0);
          }
        }
        e: {
          if (Q = U ? ti(U) : window, ce = Q.nodeName && Q.nodeName.toLowerCase(), ce === "select" || ce === "input" && Q.type === "file") var ge = Km;
          else if (cv(Q)) if (dv) ge = yv;
          else {
            ge = mv;
            var Me = Zm;
          }
          else (ce = Q.nodeName) && ce.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (ge = Jm);
          if (ge && (ge = ge(n, U))) {
            rd(q, ge, l, W);
            break e;
          }
          Me && Me(n, Q, U), n === "focusout" && (Me = Q._wrapperState) && Me.controlled && Q.type === "number" && oa(Q, "number", Q.value);
        }
        switch (Me = U ? ti(U) : window, n) {
          case "focusin":
            (cv(Me) || Me.contentEditable === "true") && (lo = Me, ld = U, ts = null);
            break;
          case "focusout":
            ts = ld = lo = null;
            break;
          case "mousedown":
            ud = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ud = !1, od(q, l, W);
            break;
          case "selectionchange":
            if (ty) break;
          case "keydown":
          case "keyup":
            od(q, l, W);
        }
        var Ue;
        if (ro) e: {
          switch (n) {
            case "compositionstart":
              var Pe = "onCompositionStart";
              break e;
            case "compositionend":
              Pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Pe = "onCompositionUpdate";
              break e;
          }
          Pe = void 0;
        }
        else ao ? uv(n, l) && (Pe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (iv && l.locale !== "ko" && (ao || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && ao && (Ue = z()) : (Ja = W, h = "value" in Ja ? Ja.value : Ja.textContent, ao = !0)), Me = rs(U, Pe), 0 < Me.length && (Pe = new Kf(Pe, n, null, l, W), q.push({ event: Pe, listeners: Me }), Ue ? Pe.data = Ue : (Ue = ov(l), Ue !== null && (Pe.data = Ue)))), (Ue = Ko ? sv(n, l) : qm(n, l)) && (U = rs(U, "onBeforeInput"), 0 < U.length && (W = new Kf("onBeforeInput", "beforeinput", null, l, W), q.push({ event: W, listeners: U }), W.data = Ue));
      }
      fu(q, r);
    });
  }
  function oo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function rs(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = _r(n, l), d != null && o.unshift(oo(n, d, c)), d = _r(n, r), d != null && o.push(oo(n, d, c))), n = n.return;
    }
    return o;
  }
  function Tl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function xv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = _r(l, d), T != null && m.unshift(oo(l, T, E))) : c || (T = _r(l, d), T != null && m.push(oo(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var wv = /\r\n?/g, ay = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(wv, `
`).replace(ay, "");
  }
  function Ec(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(L(425));
  }
  function xl() {
  }
  var as = null, du = null;
  function Cc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, pd = typeof clearTimeout == "function" ? clearTimeout : void 0, bv = typeof Promise == "function" ? Promise : void 0, so = typeof queueMicrotask == "function" ? queueMicrotask : typeof bv < "u" ? function(n) {
    return bv.resolve(null).then(n).catch(Tc);
  } : Rc;
  function Tc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function co(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Za(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Za(r);
  }
  function Si(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function kv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var wl = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + wl, is = "__reactProps$" + wl, $i = "__reactContainer$" + wl, ls = "__reactEvents$" + wl, fo = "__reactListeners$" + wl, iy = "__reactHandles$" + wl;
  function pu(n) {
    var r = n[Ei];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[$i] || l[Ei]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = kv(n); n !== null; ) {
          if (l = n[Ei]) return l;
          n = kv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ke(n) {
    return n = n[Ei] || n[$i], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ti(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(L(33));
  }
  function mn(n) {
    return n[is] || null;
  }
  var Et = [], ka = -1;
  function Da(n) {
    return { current: n };
  }
  function rn(n) {
    0 > ka || (n.current = Et[ka], Et[ka] = null, ka--);
  }
  function _e(n, r) {
    ka++, Et[ka] = n.current, n.current = r;
  }
  var Cr = {}, En = Da(Cr), $n = Da(!1), Wr = Cr;
  function Gr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Cr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Mn(n) {
    return n = n.childContextTypes, n != null;
  }
  function po() {
    rn($n), rn(En);
  }
  function Dv(n, r, l) {
    if (En.current !== Cr) throw Error(L(168));
    _e(En, r), _e($n, l);
  }
  function us(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(L(108, Ke(n) || "Unknown", c));
    return re({}, l, o);
  }
  function Kn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr, Wr = En.current, _e(En, n), _e($n, $n.current), !0;
  }
  function xc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(L(169));
    l ? (n = us(n, r, Wr), o.__reactInternalMemoizedMergedChildContext = n, rn($n), rn(En), _e(En, n)) : rn($n), _e($n, l);
  }
  var Ci = null, vo = !1, Qi = !1;
  function wc(n) {
    Ci === null ? Ci = [n] : Ci.push(n);
  }
  function _l(n) {
    vo = !0, wc(n);
  }
  function Ri() {
    if (!Qi && Ci !== null) {
      Qi = !0;
      var n = 0, r = Ot;
      try {
        var l = Ci;
        for (Ot = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ci = null, vo = !1;
      } catch (c) {
        throw Ci !== null && (Ci = Ci.slice(n + 1)), on(qa, Ri), c;
      } finally {
        Ot = r, Qi = !1;
      }
    }
    return null;
  }
  var bl = [], kl = 0, Dl = null, Wi = 0, zn = [], Oa = 0, da = null, Ti = 1, xi = "";
  function vu(n, r) {
    bl[kl++] = Wi, bl[kl++] = Dl, Dl = n, Wi = r;
  }
  function Ov(n, r, l) {
    zn[Oa++] = Ti, zn[Oa++] = xi, zn[Oa++] = da, da = n;
    var o = Ti;
    n = xi;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ti = 1 << 32 - kr(r) + c | l << c | o, xi = d + n;
    } else Ti = 1 << d | l << c | o, xi = n;
  }
  function _c(n) {
    n.return !== null && (vu(n, 1), Ov(n, 1, 0));
  }
  function bc(n) {
    for (; n === Dl; ) Dl = bl[--kl], bl[kl] = null, Wi = bl[--kl], bl[kl] = null;
    for (; n === da; ) da = zn[--Oa], zn[Oa] = null, xi = zn[--Oa], zn[Oa] = null, Ti = zn[--Oa], zn[Oa] = null;
  }
  var qr = null, Xr = null, dn = !1, Na = null;
  function vd(n, r) {
    var l = Aa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Nv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = Si(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: Ti, overflow: xi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Aa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Xr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (dn) {
      var r = Xr;
      if (r) {
        var l = r;
        if (!Nv(n, r)) {
          if (hd(n)) throw Error(L(418));
          r = Si(l.nextSibling);
          var o = qr;
          r && Nv(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, qr = n);
        }
      } else {
        if (hd(n)) throw Error(L(418));
        n.flags = n.flags & -4097 | 2, dn = !1, qr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function kc(n) {
    if (n !== qr) return !1;
    if (!dn) return Qn(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = Xr)) {
      if (hd(n)) throw os(), Error(L(418));
      for (; r; ) vd(n, r), r = Si(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(L(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xr = Si(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xr = null;
      }
    } else Xr = qr ? Si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function os() {
    for (var n = Xr; n; ) n = Si(n.nextSibling);
  }
  function Ol() {
    Xr = qr = null, dn = !1;
  }
  function Gi(n) {
    Na === null ? Na = [n] : Na.push(n);
  }
  var ly = mt.ReactCurrentBatchConfig;
  function hu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(L(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(L(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(L(284));
      if (!l._owner) throw Error(L(290, n));
    }
    return n;
  }
  function Dc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(L(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Lv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function mu(n) {
    function r(k, w) {
      if (n) {
        var N = k.deletions;
        N === null ? (k.deletions = [w], k.flags |= 16) : N.push(w);
      }
    }
    function l(k, w) {
      if (!n) return null;
      for (; w !== null; ) r(k, w), w = w.sibling;
      return null;
    }
    function o(k, w) {
      for (k = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? k.set(w.key, w) : k.set(w.index, w), w = w.sibling;
      return k;
    }
    function c(k, w) {
      return k = Fl(k, w), k.index = 0, k.sibling = null, k;
    }
    function d(k, w, N) {
      return k.index = N, n ? (N = k.alternate, N !== null ? (N = N.index, N < w ? (k.flags |= 2, w) : N) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, w, N, G) {
      return w === null || w.tag !== 6 ? (w = Wd(N, k.mode, G), w.return = k, w) : (w = c(w, N), w.return = k, w);
    }
    function T(k, w, N, G) {
      var ge = N.type;
      return ge === Fe ? W(k, w, N.props.children, G, N.key) : w !== null && (w.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Dt && Lv(ge) === w.type) ? (G = c(w, N.props), G.ref = hu(k, w, N), G.return = k, G) : (G = Fs(N.type, N.key, N.props, null, k.mode, G), G.ref = hu(k, w, N), G.return = k, G);
    }
    function U(k, w, N, G) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== N.containerInfo || w.stateNode.implementation !== N.implementation ? (w = sf(N, k.mode, G), w.return = k, w) : (w = c(w, N.children || []), w.return = k, w);
    }
    function W(k, w, N, G, ge) {
      return w === null || w.tag !== 7 ? (w = el(N, k.mode, G, ge), w.return = k, w) : (w = c(w, N), w.return = k, w);
    }
    function q(k, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Wd("" + w, k.mode, N), w.return = k, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case be:
            return N = Fs(w.type, w.key, w.props, null, k.mode, N), N.ref = hu(k, null, w), N.return = k, N;
          case st:
            return w = sf(w, k.mode, N), w.return = k, w;
          case Dt:
            var G = w._init;
            return q(k, G(w._payload), N);
        }
        if (qn(w) || Te(w)) return w = el(w, k.mode, N, null), w.return = k, w;
        Dc(k, w);
      }
      return null;
    }
    function Q(k, w, N, G) {
      var ge = w !== null ? w.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return ge !== null ? null : E(k, w, "" + N, G);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case be:
            return N.key === ge ? T(k, w, N, G) : null;
          case st:
            return N.key === ge ? U(k, w, N, G) : null;
          case Dt:
            return ge = N._init, Q(
              k,
              w,
              ge(N._payload),
              G
            );
        }
        if (qn(N) || Te(N)) return ge !== null ? null : W(k, w, N, G, null);
        Dc(k, N);
      }
      return null;
    }
    function ce(k, w, N, G, ge) {
      if (typeof G == "string" && G !== "" || typeof G == "number") return k = k.get(N) || null, E(w, k, "" + G, ge);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case be:
            return k = k.get(G.key === null ? N : G.key) || null, T(w, k, G, ge);
          case st:
            return k = k.get(G.key === null ? N : G.key) || null, U(w, k, G, ge);
          case Dt:
            var Me = G._init;
            return ce(k, w, N, Me(G._payload), ge);
        }
        if (qn(G) || Te(G)) return k = k.get(N) || null, W(w, k, G, ge, null);
        Dc(w, G);
      }
      return null;
    }
    function ye(k, w, N, G) {
      for (var ge = null, Me = null, Ue = w, Pe = w = 0, er = null; Ue !== null && Pe < N.length; Pe++) {
        Ue.index > Pe ? (er = Ue, Ue = null) : er = Ue.sibling;
        var Mt = Q(k, Ue, N[Pe], G);
        if (Mt === null) {
          Ue === null && (Ue = er);
          break;
        }
        n && Ue && Mt.alternate === null && r(k, Ue), w = d(Mt, w, Pe), Me === null ? ge = Mt : Me.sibling = Mt, Me = Mt, Ue = er;
      }
      if (Pe === N.length) return l(k, Ue), dn && vu(k, Pe), ge;
      if (Ue === null) {
        for (; Pe < N.length; Pe++) Ue = q(k, N[Pe], G), Ue !== null && (w = d(Ue, w, Pe), Me === null ? ge = Ue : Me.sibling = Ue, Me = Ue);
        return dn && vu(k, Pe), ge;
      }
      for (Ue = o(k, Ue); Pe < N.length; Pe++) er = ce(Ue, k, Pe, N[Pe], G), er !== null && (n && er.alternate !== null && Ue.delete(er.key === null ? Pe : er.key), w = d(er, w, Pe), Me === null ? ge = er : Me.sibling = er, Me = er);
      return n && Ue.forEach(function(Pl) {
        return r(k, Pl);
      }), dn && vu(k, Pe), ge;
    }
    function Ee(k, w, N, G) {
      var ge = Te(N);
      if (typeof ge != "function") throw Error(L(150));
      if (N = ge.call(N), N == null) throw Error(L(151));
      for (var Me = ge = null, Ue = w, Pe = w = 0, er = null, Mt = N.next(); Ue !== null && !Mt.done; Pe++, Mt = N.next()) {
        Ue.index > Pe ? (er = Ue, Ue = null) : er = Ue.sibling;
        var Pl = Q(k, Ue, Mt.value, G);
        if (Pl === null) {
          Ue === null && (Ue = er);
          break;
        }
        n && Ue && Pl.alternate === null && r(k, Ue), w = d(Pl, w, Pe), Me === null ? ge = Pl : Me.sibling = Pl, Me = Pl, Ue = er;
      }
      if (Mt.done) return l(
        k,
        Ue
      ), dn && vu(k, Pe), ge;
      if (Ue === null) {
        for (; !Mt.done; Pe++, Mt = N.next()) Mt = q(k, Mt.value, G), Mt !== null && (w = d(Mt, w, Pe), Me === null ? ge = Mt : Me.sibling = Mt, Me = Mt);
        return dn && vu(k, Pe), ge;
      }
      for (Ue = o(k, Ue); !Mt.done; Pe++, Mt = N.next()) Mt = ce(Ue, k, Pe, Mt.value, G), Mt !== null && (n && Mt.alternate !== null && Ue.delete(Mt.key === null ? Pe : Mt.key), w = d(Mt, w, Pe), Me === null ? ge = Mt : Me.sibling = Mt, Me = Mt);
      return n && Ue.forEach(function(vh) {
        return r(k, vh);
      }), dn && vu(k, Pe), ge;
    }
    function kn(k, w, N, G) {
      if (typeof N == "object" && N !== null && N.type === Fe && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case be:
            e: {
              for (var ge = N.key, Me = w; Me !== null; ) {
                if (Me.key === ge) {
                  if (ge = N.type, ge === Fe) {
                    if (Me.tag === 7) {
                      l(k, Me.sibling), w = c(Me, N.props.children), w.return = k, k = w;
                      break e;
                    }
                  } else if (Me.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Dt && Lv(ge) === Me.type) {
                    l(k, Me.sibling), w = c(Me, N.props), w.ref = hu(k, Me, N), w.return = k, k = w;
                    break e;
                  }
                  l(k, Me);
                  break;
                } else r(k, Me);
                Me = Me.sibling;
              }
              N.type === Fe ? (w = el(N.props.children, k.mode, G, N.key), w.return = k, k = w) : (G = Fs(N.type, N.key, N.props, null, k.mode, G), G.ref = hu(k, w, N), G.return = k, k = G);
            }
            return m(k);
          case st:
            e: {
              for (Me = N.key; w !== null; ) {
                if (w.key === Me) if (w.tag === 4 && w.stateNode.containerInfo === N.containerInfo && w.stateNode.implementation === N.implementation) {
                  l(k, w.sibling), w = c(w, N.children || []), w.return = k, k = w;
                  break e;
                } else {
                  l(k, w);
                  break;
                }
                else r(k, w);
                w = w.sibling;
              }
              w = sf(N, k.mode, G), w.return = k, k = w;
            }
            return m(k);
          case Dt:
            return Me = N._init, kn(k, w, Me(N._payload), G);
        }
        if (qn(N)) return ye(k, w, N, G);
        if (Te(N)) return Ee(k, w, N, G);
        Dc(k, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, w !== null && w.tag === 6 ? (l(k, w.sibling), w = c(w, N), w.return = k, k = w) : (l(k, w), w = Wd(N, k.mode, G), w.return = k, k = w), m(k)) : l(k, w);
    }
    return kn;
  }
  var xn = mu(!0), le = mu(!1), pa = Da(null), Kr = null, ho = null, yd = null;
  function gd() {
    yd = ho = Kr = null;
  }
  function Sd(n) {
    var r = pa.current;
    rn(pa), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Kr = n, yd = ho = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (An = !0), n.firstContext = null);
  }
  function La(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, ho === null) {
      if (Kr === null) throw Error(L(308));
      ho = n, Kr.dependencies = { lanes: 0, firstContext: n };
    } else ho = ho.next = n;
    return r;
  }
  var yu = null;
  function Cd(n) {
    yu === null ? yu = [n] : yu.push(n);
  }
  function Rd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, va(n, o);
  }
  function va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = !1;
  function Td(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Mv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function qi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Nl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Ct & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, va(n, l);
  }
  function Oc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function zv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ss(n, r, l, o) {
    var c = n.updateQueue;
    ha = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== m && (E === null ? W.firstBaseUpdate = U : E.next = U, W.lastBaseUpdate = T));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, W = U = T = null, E = d;
      do {
        var Q = E.lane, ce = E.eventTime;
        if ((o & Q) === Q) {
          W !== null && (W = W.next = {
            eventTime: ce,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ee = E;
            switch (Q = r, ce = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  q = ye.call(ce, q, Q);
                  break e;
                }
                q = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, Q = typeof ye == "function" ? ye.call(ce, q, Q) : ye, Q == null) break e;
                q = re({}, q, Q);
                break e;
              case 2:
                ha = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Q = c.effects, Q === null ? c.effects = [E] : Q.push(E));
        } else ce = { eventTime: ce, lane: Q, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (U = W = ce, T = q) : W = W.next = ce, m |= Q;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Q = E, E = Q.next, Q.next = null, c.lastBaseUpdate = Q, c.shared.pending = null;
        }
      } while (!0);
      if (W === null && (T = q), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Di |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function xd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(L(191, c));
        c.call(o);
      }
    }
  }
  var cs = {}, wi = Da(cs), fs = Da(cs), ds = Da(cs);
  function gu(n) {
    if (n === cs) throw Error(L(174));
    return n;
  }
  function wd(n, r) {
    switch (_e(ds, r), _e(fs, n), _e(wi, cs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sa(r, n);
    }
    rn(wi), _e(wi, r);
  }
  function Su() {
    rn(wi), rn(fs), rn(ds);
  }
  function Uv(n) {
    gu(ds.current);
    var r = gu(wi.current), l = sa(r, n.type);
    r !== l && (_e(fs, n), _e(wi, l));
  }
  function Nc(n) {
    fs.current === n && (rn(wi), rn(fs));
  }
  var gn = Da(0);
  function Lc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ps = [];
  function De() {
    for (var n = 0; n < ps.length; n++) ps[n]._workInProgressVersionPrimary = null;
    ps.length = 0;
  }
  var ut = mt.ReactCurrentDispatcher, Nt = mt.ReactCurrentBatchConfig, Gt = 0, Lt = null, Un = null, Zn = null, Mc = !1, vs = !1, Eu = 0, $ = 0;
  function kt() {
    throw Error(L(321));
  }
  function je(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function Ll(n, r, l, o, c, d) {
    if (Gt = d, Lt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ut.current = n === null || n.memoizedState === null ? Gc : Es, n = l(o, c), vs) {
      d = 0;
      do {
        if (vs = !1, Eu = 0, 25 <= d) throw Error(L(301));
        d += 1, Zn = Un = null, r.updateQueue = null, ut.current = qc, n = l(o, c);
      } while (vs);
    }
    if (ut.current = wu, r = Un !== null && Un.next !== null, Gt = 0, Zn = Un = Lt = null, Mc = !1, r) throw Error(L(300));
    return n;
  }
  function ni() {
    var n = Eu !== 0;
    return Eu = 0, n;
  }
  function Rr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Zn === null ? Lt.memoizedState = Zn = n : Zn = Zn.next = n, Zn;
  }
  function wn() {
    if (Un === null) {
      var n = Lt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Zn === null ? Lt.memoizedState : Zn.next;
    if (r !== null) Zn = r, Un = n;
    else {
      if (n === null) throw Error(L(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Zn === null ? Lt.memoizedState = Zn = n : Zn = Zn.next = n;
    }
    return Zn;
  }
  function Xi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ml(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(L(311));
    l.lastRenderedReducer = n;
    var o = Un, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, U = d;
      do {
        var W = U.lane;
        if ((Gt & W) === W) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var q = {
            lane: W,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = q, m = o) : T = T.next = q, Lt.lanes |= W, Di |= W;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, ei(o, r.memoizedState) || (An = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Lt.lanes |= d, Di |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Cu(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(L(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ei(d, r.memoizedState) || (An = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function zc() {
  }
  function Uc(n, r) {
    var l = Lt, o = wn(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, An = !0), o = o.queue, hs(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Zn !== null && Zn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ru(9, jc.bind(null, l, o, c, r), void 0, null), Wn === null) throw Error(L(349));
      Gt & 30 || Ac(l, r, c);
    }
    return c;
  }
  function Ac(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Lt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Lt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function jc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Vc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Hc(r) && Vc(n);
    });
  }
  function Hc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ei(n, l);
    } catch {
      return !0;
    }
  }
  function Vc(n) {
    var r = va(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function Pc(n) {
    var r = Rr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xi, lastRenderedState: n }, r.queue = n, n = n.dispatch = xu.bind(null, Lt, n), [r.memoizedState, n];
  }
  function Ru(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Lt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Lt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return wn().memoizedState;
  }
  function mo(n, r, l, o) {
    var c = Rr();
    Lt.flags |= n, c.memoizedState = Ru(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function yo(n, r, l, o) {
    var c = wn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var m = Un.memoizedState;
      if (d = m.destroy, o !== null && je(o, m.deps)) {
        c.memoizedState = Ru(r, l, d, o);
        return;
      }
    }
    Lt.flags |= n, c.memoizedState = Ru(1 | r, l, d, o);
  }
  function Yc(n, r) {
    return mo(8390656, 8, n, r);
  }
  function hs(n, r) {
    return yo(2048, 8, n, r);
  }
  function Ic(n, r) {
    return yo(4, 2, n, r);
  }
  function ms(n, r) {
    return yo(4, 4, n, r);
  }
  function Tu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function $c(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(4, 4, Tu.bind(null, r, n), l);
  }
  function ys() {
  }
  function Qc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && je(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Wc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && je(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function _d(n, r, l) {
    return Gt & 21 ? (ei(l, r) || (l = qu(), Lt.lanes |= l, Di |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, An = !0), n.memoizedState = l);
  }
  function gs(n, r) {
    var l = Ot;
    Ot = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Nt.transition;
    Nt.transition = {};
    try {
      n(!1), r();
    } finally {
      Ot = l, Nt.transition = o;
    }
  }
  function bd() {
    return wn().memoizedState;
  }
  function Ss(n, r, l) {
    var o = Oi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Zr(n)) Av(r, l);
    else if (l = Rd(n, r, l, o), l !== null) {
      var c = Hn();
      zr(l, n, o, c), Kt(l, r, o);
    }
  }
  function xu(n, r, l) {
    var o = Oi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Zr(n)) Av(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ei(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Cd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Rd(n, r, c, o), l !== null && (c = Hn(), zr(l, n, o, c), Kt(l, r, o));
    }
  }
  function Zr(n) {
    var r = n.alternate;
    return n === Lt || r !== null && r === Lt;
  }
  function Av(n, r) {
    vs = Mc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Kt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var wu = { readContext: La, useCallback: kt, useContext: kt, useEffect: kt, useImperativeHandle: kt, useInsertionEffect: kt, useLayoutEffect: kt, useMemo: kt, useReducer: kt, useRef: kt, useState: kt, useDebugValue: kt, useDeferredValue: kt, useTransition: kt, useMutableSource: kt, useSyncExternalStore: kt, useId: kt, unstable_isNewReconciler: !1 }, Gc = { readContext: La, useCallback: function(n, r) {
    return Rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: La, useEffect: Yc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, mo(
      4194308,
      4,
      Tu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return mo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return mo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Rr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Rr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Ss.bind(null, Lt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Rr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Pc, useDebugValue: ys, useDeferredValue: function(n) {
    return Rr().memoizedState = n;
  }, useTransition: function() {
    var n = Pc(!1), r = n[0];
    return n = gs.bind(null, n[1]), Rr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Lt, c = Rr();
    if (dn) {
      if (l === void 0) throw Error(L(407));
      l = l();
    } else {
      if (l = r(), Wn === null) throw Error(L(349));
      Gt & 30 || Ac(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Yc(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ru(9, jc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Rr(), r = Wn.identifierPrefix;
    if (dn) {
      var l = xi, o = Ti;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Eu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = $++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Es = {
    readContext: La,
    useCallback: Qc,
    useContext: La,
    useEffect: hs,
    useImperativeHandle: $c,
    useInsertionEffect: Ic,
    useLayoutEffect: ms,
    useMemo: Wc,
    useReducer: Ml,
    useRef: Bc,
    useState: function() {
      return Ml(Xi);
    },
    useDebugValue: ys,
    useDeferredValue: function(n) {
      var r = wn();
      return _d(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = Ml(Xi)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Uc,
    useId: bd,
    unstable_isNewReconciler: !1
  }, qc = { readContext: La, useCallback: Qc, useContext: La, useEffect: hs, useImperativeHandle: $c, useInsertionEffect: Ic, useLayoutEffect: ms, useMemo: Wc, useReducer: Cu, useRef: Bc, useState: function() {
    return Cu(Xi);
  }, useDebugValue: ys, useDeferredValue: function(n) {
    var r = wn();
    return Un === null ? r.memoizedState = n : _d(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Cu(Xi)[0], r = wn().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: Uc, useId: bd, unstable_isNewReconciler: !1 };
  function ri(n, r) {
    if (n && n.defaultProps) {
      r = re({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : re({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Xc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ge(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Nl(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Nl(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Oi(n), c = qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Nl(n, c, o), r !== null && (zr(r, n, o, l), Oc(r, n, o));
  } };
  function jv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Jo(l, o) || !Jo(c, d) : !0;
  }
  function Kc(n, r, l) {
    var o = !1, c = Cr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = La(d) : (c = Mn(r) ? Wr : En.current, o = r.contextTypes, d = (o = o != null) ? Gr(n, c) : Cr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Xc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Fv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Xc.enqueueReplaceState(r, r.state, null);
  }
  function Cs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = La(d) : (d = Mn(r) ? Wr : En.current, c.context = Gr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Xc.enqueueReplaceState(c, c.state, null), ss(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
    try {
      var l = "", o = r;
      do
        l += at(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Dd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Zc = typeof WeakMap == "function" ? WeakMap : Map;
  function Hv(n, r, l) {
    l = qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      To || (To = !0, Du = o), Od(n, r);
    }, l;
  }
  function Nd(n, r, l) {
    l = qi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof o != "function" && (Al === null ? Al = /* @__PURE__ */ new Set([this]) : Al.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ld(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Zc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = py.bind(null, n, r, l), r.then(n, n));
  }
  function Vv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function zl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = qi(-1, 1), r.tag = 2, Nl(l, r, 1))), l.lanes |= 1), n);
  }
  var Rs = mt.ReactCurrentOwner, An = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? le(r, null, l, o) : xn(r, n.child, l, o);
  }
  function Jr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Ll(n, r, l, o, d, c), l = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && l && _c(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function bu(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Xe(n, r, d, o, c)) : (n = Fs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Jo, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Fl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Xe(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Jo(d, o) && n.ref === r.ref) if (An = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (An = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Pv(n, r, l, o, c);
  }
  function Ts(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _e(Eo, ma), ma |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, _e(Eo, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, _e(Eo, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, _e(Eo, ma), ma |= o;
    return ur(n, r, c, l), r.child;
  }
  function Md(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Pv(n, r, l, o, c) {
    var d = Mn(l) ? Wr : En.current;
    return d = Gr(r, d), yn(r, c), l = Ll(n, r, l, o, d, c), o = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && o && _c(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function Bv(n, r, l, o, c) {
    if (Mn(l)) {
      var d = !0;
      Kn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) Ma(n, r), Kc(r, l, o), Cs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = La(U) : (U = Mn(l) ? Wr : En.current, U = Gr(r, U));
      var W = l.getDerivedStateFromProps, q = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Fv(r, m, o, U), ha = !1;
      var Q = r.memoizedState;
      m.state = Q, ss(r, o, m, c), T = r.memoizedState, E !== o || Q !== T || $n.current || ha ? (typeof W == "function" && (kd(r, l, W, o), T = r.memoizedState), (E = ha || jv(r, l, E, o, Q, T, U)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Mv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ri(r.type, E), m.props = U, q = r.pendingProps, Q = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = La(T) : (T = Mn(l) ? Wr : En.current, T = Gr(r, T));
      var ce = l.getDerivedStateFromProps;
      (W = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== q || Q !== T) && Fv(r, m, o, T), ha = !1, Q = r.memoizedState, m.state = Q, ss(r, o, m, c);
      var ye = r.memoizedState;
      E !== q || Q !== ye || $n.current || ha ? (typeof ce == "function" && (kd(r, l, ce, o), ye = r.memoizedState), (U = ha || jv(r, l, U, o, Q, ye, T) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return xs(n, r, l, o, d, c);
  }
  function xs(n, r, l, o, c, d) {
    Md(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && xc(r, l, !1), za(n, r, d);
    o = r.stateNode, Rs.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = xn(r, n.child, null, d), r.child = xn(r, null, E, d)) : ur(n, r, E, d), r.memoizedState = o.state, c && xc(r, l, !0), r.child;
  }
  function go(n) {
    var r = n.stateNode;
    r.pendingContext ? Dv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Dv(n, r.context, !1), wd(n, r.containerInfo);
  }
  function Yv(n, r, l, o, c) {
    return Ol(), Gi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var Jc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ef(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), _e(gn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Hl(m, o, 0, null), n = el(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = zd(l), r.memoizedState = Jc, n) : Ud(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Iv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Fl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Fl(E, d) : (d = el(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? zd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Jc, o;
    }
    return d = n.child, n = d.sibling, o = Fl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ud(n, r) {
    return r = Hl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ws(n, r, l, o) {
    return o !== null && Gi(o), xn(r, n.child, null, l), n = Ud(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Iv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Dd(Error(L(422))), ws(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Hl({ mode: "visible", children: o.children }, c, 0, null), d = el(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && xn(r, n.child, null, m), r.child.memoizedState = zd(m), r.memoizedState = Jc, d);
    if (!(r.mode & 1)) return ws(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(L(419)), o = Dd(d, o, void 0), ws(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, An || E) {
      if (o = Wn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, va(n, c), zr(o, n, c, -1));
      }
      return $d(), o = Dd(Error(L(421))), ws(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xr = Si(c.nextSibling), qr = r, dn = !0, Na = null, n !== null && (zn[Oa++] = Ti, zn[Oa++] = xi, zn[Oa++] = da, Ti = n.id, xi = n.overflow, da = r), r = Ud(r, o.children), r.flags |= 4096, r);
  }
  function Ad(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function Nr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function _i(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ur(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ad(n, l, r);
        else if (n.tag === 19) Ad(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (_e(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Lc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Nr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Lc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Nr(r, !0, l, null, d);
        break;
      case "together":
        Nr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ma(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Di |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(L(153));
    if (r.child !== null) {
      for (n = r.child, l = Fl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Fl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _s(n, r, l) {
    switch (r.tag) {
      case 3:
        go(r), Ol();
        break;
      case 5:
        Uv(r);
        break;
      case 1:
        Mn(r.type) && Kn(r);
        break;
      case 4:
        wd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        _e(pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (_e(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ef(n, r, l) : (_e(gn, gn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        _e(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return _i(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), _e(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ts(n, r, l);
    }
    return za(n, r, l);
  }
  var Ua, jn, $v, Qv;
  Ua = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, jn = function() {
  }, $v = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, gu(wi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = re({}, c, { value: void 0 }), o = re({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yn(n, c), o = Yn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = xl);
      }
      un(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (rt.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (rt.hasOwnProperty(U) ? (T != null && U === "onScroll" && Ht("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Qv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function bs(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Jn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Wv(n, r, l) {
    var o = r.pendingProps;
    switch (bc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Jn(r), null;
      case 1:
        return Mn(r.type) && po(), Jn(r), null;
      case 3:
        return o = r.stateNode, Su(), rn($n), rn(En), De(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (kc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Na !== null && (Ou(Na), Na = null))), jn(n, r), Jn(r), null;
      case 5:
        Nc(r);
        var c = gu(ds.current);
        if (l = r.type, n !== null && r.stateNode != null) $v(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(L(166));
            return Jn(r), null;
          }
          if (n = gu(wi.current), kc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ei] = r, o[is] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Ht("cancel", o), Ht("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ht("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ns.length; c++) Ht(ns[c], o);
                break;
              case "source":
                Ht("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Ht(
                  "error",
                  o
                ), Ht("load", o);
                break;
              case "details":
                Ht("toggle", o);
                break;
              case "input":
                Pn(o, d), Ht("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Ht("invalid", o);
                break;
              case "textarea":
                gr(o, d), Ht("invalid", o);
            }
            un(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ec(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ec(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : rt.hasOwnProperty(m) && E != null && m === "onScroll" && Ht("scroll", o);
            }
            switch (l) {
              case "input":
                On(o), si(o, d, !0);
                break;
              case "textarea":
                On(o), Nn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = xl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ei] = r, n[is] = o, Ua(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Xn(l, o), l) {
                case "dialog":
                  Ht("cancel", n), Ht("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ht("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ns.length; c++) Ht(ns[c], n);
                  c = o;
                  break;
                case "source":
                  Ht("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Ht(
                    "error",
                    n
                  ), Ht("load", n), c = o;
                  break;
                case "details":
                  Ht("toggle", n), c = o;
                  break;
                case "input":
                  Pn(n, o), c = nr(n, o), Ht("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = re({}, o, { value: void 0 }), Ht("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = Yn(n, o), Ht("invalid", n);
                  break;
                default:
                  c = o;
              }
              un(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Jt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ci(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && J(n, T) : typeof T == "number" && J(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (rt.hasOwnProperty(d) ? T != null && d === "onScroll" && Ht("scroll", n) : T != null && Qe(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), si(n, o, !1);
                  break;
                case "textarea":
                  On(n), Nn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + et(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Rn(n, !!o.multiple, d, !1) : o.defaultValue != null && Rn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = xl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Jn(r), null;
      case 6:
        if (n && r.stateNode != null) Qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(L(166));
          if (l = gu(ds.current), gu(wi.current), kc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ei] = r, (d = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                Ec(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ec(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ei] = r, r.stateNode = o;
        }
        return Jn(r), null;
      case 13:
        if (rn(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Xr !== null && r.mode & 1 && !(r.flags & 128)) os(), Ol(), r.flags |= 98560, d = !1;
          else if (d = kc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(L(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(L(317));
              d[Ei] = r;
            } else Ol(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Jn(r), d = !1;
          } else Na !== null && (Ou(Na), Na = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? bn === 0 && (bn = 3) : $d())), r.updateQueue !== null && (r.flags |= 4), Jn(r), null);
      case 4:
        return Su(), jn(n, r), n === null && uo(r.stateNode.containerInfo), Jn(r), null;
      case 10:
        return Sd(r.type._context), Jn(r), null;
      case 17:
        return Mn(r.type) && po(), Jn(r), null;
      case 19:
        if (rn(gn), d = r.memoizedState, d === null) return Jn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) bs(d, !1);
        else {
          if (bn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Lc(n), m !== null) {
              for (r.flags |= 128, bs(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return _e(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && qe() > Ro && (r.flags |= 128, o = !0, bs(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Lc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), bs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return Jn(r), null;
          } else 2 * qe() - d.renderingStartTime > Ro && l !== 1073741824 && (r.flags |= 128, o = !0, bs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = qe(), r.sibling = null, l = gn.current, _e(gn, o ? l & 1 | 2 : l & 1), r) : (Jn(r), null);
      case 22:
      case 23:
        return Id(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ma & 1073741824 && (Jn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Jn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(L(156, r.tag));
  }
  function tf(n, r) {
    switch (bc(r), r.tag) {
      case 1:
        return Mn(r.type) && po(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Su(), rn($n), rn(En), De(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Nc(r), null;
      case 13:
        if (rn(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(L(340));
          Ol();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return rn(gn), null;
      case 4:
        return Su(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Id(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ks = !1, Tr = !1, uy = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function So(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      pn(n, r, o);
    }
    else l.current = null;
  }
  function nf(n, r, l) {
    try {
      l();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var Gv = !1;
  function qv(n, r) {
    if (as = _a, n = es(), dc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, U = 0, W = 0, q = n, Q = null;
          t: for (; ; ) {
            for (var ce; q !== l || c !== 0 && q.nodeType !== 3 || (E = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (T = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (ce = q.firstChild) !== null; )
              Q = q, q = ce;
            for (; ; ) {
              if (q === n) break t;
              if (Q === l && ++U === c && (E = m), Q === d && ++W === o && (T = m), (ce = q.nextSibling) !== null) break;
              q = Q, Q = q.parentNode;
            }
            q = ce;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (du = { focusedElem: n, selectionRange: l }, _a = !1, ve = r; ve !== null; ) if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ve = n;
    else for (; ve !== null; ) {
      r = ve;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Ee = ye.memoizedProps, kn = ye.memoizedState, k = r.stateNode, w = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : ri(r.type, Ee), kn);
              k.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var N = r.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(L(163));
        }
      } catch (G) {
        pn(r, r.return, G);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ve = n;
        break;
      }
      ve = r.return;
    }
    return ye = Gv, Gv = !1, ye;
  }
  function Ds(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && nf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Os(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function jd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function rf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[is], delete r[ls], delete r[fo], delete r[iy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ns(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ki(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ns(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function bi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = xl));
    else if (o !== 4 && (n = n.child, n !== null)) for (bi(n, r, l), n = n.sibling; n !== null; ) bi(n, r, l), n = n.sibling;
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  var _n = null, Lr = !1;
  function Mr(n, r, l) {
    for (l = l.child; l !== null; ) Xv(n, r, l), l = l.sibling;
  }
  function Xv(n, r, l) {
    if ($r && typeof $r.onCommitFiberUnmount == "function") try {
      $r.onCommitFiberUnmount(hl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Tr || So(l, r);
      case 6:
        var o = _n, c = Lr;
        _n = null, Mr(n, r, l), _n = o, Lr = c, _n !== null && (Lr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : _n.removeChild(l.stateNode));
        break;
      case 18:
        _n !== null && (Lr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? co(n.parentNode, l) : n.nodeType === 1 && co(n, l), Za(n)) : co(_n, l.stateNode));
        break;
      case 4:
        o = _n, c = Lr, _n = l.stateNode.containerInfo, Lr = !0, Mr(n, r, l), _n = o, Lr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && nf(l, r, m), c = c.next;
          } while (c !== o);
        }
        Mr(n, r, l);
        break;
      case 1:
        if (!Tr && (So(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          pn(l, r, E);
        }
        Mr(n, r, l);
        break;
      case 21:
        Mr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Tr = (o = Tr) || l.memoizedState !== null, Mr(n, r, l), Tr = o) : Mr(n, r, l);
        break;
      default:
        Mr(n, r, l);
    }
  }
  function Kv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new uy()), r.forEach(function(o) {
        var c = lh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              _n = E.stateNode, Lr = !1;
              break e;
            case 3:
              _n = E.stateNode.containerInfo, Lr = !0;
              break e;
            case 4:
              _n = E.stateNode.containerInfo, Lr = !0;
              break e;
          }
          E = E.return;
        }
        if (_n === null) throw Error(L(160));
        Xv(d, m, c), _n = null, Lr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        pn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Fd(r, n), r = r.sibling;
  }
  function Fd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ea(n), o & 4) {
          try {
            Ds(3, n, n.return), Os(3, n);
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
          try {
            Ds(5, n, n.return);
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        ai(r, n), ea(n), o & 512 && l !== null && So(l, l.return);
        break;
      case 5:
        if (ai(r, n), ea(n), o & 512 && l !== null && So(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            J(c, "");
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), Xn(E, m);
            var U = Xn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var W = T[m], q = T[m + 1];
              W === "style" ? Jt(c, q) : W === "dangerouslySetInnerHTML" ? ci(c, q) : W === "children" ? J(c, q) : Qe(c, W, q, U);
            }
            switch (E) {
              case "input":
                Ir(c, d);
                break;
              case "textarea":
                Ia(c, d);
                break;
              case "select":
                var Q = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ce = d.value;
                ce != null ? Rn(c, !!d.multiple, ce, !1) : Q !== !!d.multiple && (d.defaultValue != null ? Rn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Rn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[is] = d;
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (ai(r, n), ea(n), o & 4) {
          if (n.stateNode === null) throw Error(L(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (ai(r, n), ea(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Za(r.containerInfo);
        } catch (Ee) {
          pn(n, n.return, Ee);
        }
        break;
      case 4:
        ai(r, n), ea(n);
        break;
      case 13:
        ai(r, n), ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = qe())), o & 4 && Kv(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (Tr = (U = Tr) || W, ai(r, n), Tr = U) : ai(r, n), ea(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !W && n.mode & 1) for (ve = n, W = n.child; W !== null; ) {
            for (q = ve = W; ve !== null; ) {
              switch (Q = ve, ce = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ds(4, Q, Q.return);
                  break;
                case 1:
                  So(Q, Q.return);
                  var ye = Q.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = Q, l = Q.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Ee) {
                      pn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  So(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    Ls(q);
                    continue;
                  }
              }
              ce !== null ? (ce.return = Q, ve = ce) : Ls(q);
            }
            W = W.sibling;
          }
          e: for (W = null, q = n; ; ) {
            if (q.tag === 5) {
              if (W === null) {
                W = q;
                try {
                  c = q.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = q.stateNode, T = q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = jt("display", m));
                } catch (Ee) {
                  pn(n, n.return, Ee);
                }
              }
            } else if (q.tag === 6) {
              if (W === null) try {
                q.stateNode.nodeValue = U ? "" : q.memoizedProps;
              } catch (Ee) {
                pn(n, n.return, Ee);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              W === q && (W = null), q = q.return;
            }
            W === q && (W = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ea(n), o & 4 && Kv(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ea(n);
    }
  }
  function ea(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ns(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(L(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (J(c, ""), o.flags &= -33);
            var d = Ki(n);
            ki(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ki(n);
            bi(n, E, m);
            break;
          default:
            throw Error(L(161));
        }
      } catch (T) {
        pn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function oy(n, r, l) {
    ve = n, Hd(n);
  }
  function Hd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || ks;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Tr;
          E = ks;
          var U = Tr;
          if (ks = m, (Tr = T) && !U) for (ve = c; ve !== null; ) m = ve, T = m.child, m.tag === 22 && m.memoizedState !== null ? Vd(c) : T !== null ? (T.return = m, ve = T) : Vd(c);
          for (; d !== null; ) ve = d, Hd(d), d = d.sibling;
          ve = c, ks = E, Tr = U;
        }
        Zv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : Zv(n);
    }
  }
  function Zv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Tr || Os(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Tr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ri(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && xd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                xd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var U = r.alternate;
                if (U !== null) {
                  var W = U.memoizedState;
                  if (W !== null) {
                    var q = W.dehydrated;
                    q !== null && Za(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
          Tr || r.flags & 512 && jd(r);
        } catch (Q) {
          pn(r, r.return, Q);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Ls(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Vd(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Os(4, r);
            } catch (T) {
              pn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                pn(r, c, T);
              }
            }
            var d = r.return;
            try {
              jd(r);
            } catch (T) {
              pn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              jd(r);
            } catch (T) {
              pn(r, m, T);
            }
        }
      } catch (T) {
        pn(r, r.return, T);
      }
      if (r === n) {
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var sy = Math.ceil, Ul = mt.ReactCurrentDispatcher, ku = mt.ReactCurrentOwner, or = mt.ReactCurrentBatchConfig, Ct = 0, Wn = null, Fn = null, sr = 0, ma = 0, Eo = Da(0), bn = 0, Ms = null, Di = 0, Co = 0, af = 0, zs = null, ta = null, Pd = 0, Ro = 1 / 0, ya = null, To = !1, Du = null, Al = null, lf = !1, Zi = null, Us = 0, jl = 0, xo = null, As = -1, xr = 0;
  function Hn() {
    return Ct & 6 ? qe() : As !== -1 ? As : As = qe();
  }
  function Oi(n) {
    return n.mode & 1 ? Ct & 2 && sr !== 0 ? sr & -sr : ly.transition !== null ? (xr === 0 && (xr = qu()), xr) : (n = Ot, n !== 0 || (n = window.event, n = n === void 0 ? 16 : no(n.type)), n) : 1;
  }
  function zr(n, r, l, o) {
    if (50 < jl) throw jl = 0, xo = null, Error(L(185));
    Hi(n, l, o), (!(Ct & 2) || n !== Wn) && (n === Wn && (!(Ct & 2) && (Co |= l), bn === 4 && ii(n, sr)), na(n, o), l === 1 && Ct === 0 && !(r.mode & 1) && (Ro = qe() + 500, vo && Ri()));
  }
  function na(n, r) {
    var l = n.callbackNode;
    ru(n, r);
    var o = Ka(n, n === Wn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? _l(Bd.bind(null, n)) : wc(Bd.bind(null, n)), so(function() {
        !(Ct & 6) && Ri();
      }), l = null;
      else {
        switch (Ku(o)) {
          case 1:
            l = qa;
            break;
          case 4:
            l = tu;
            break;
          case 16:
            l = nu;
            break;
          case 536870912:
            l = Qu;
            break;
          default:
            l = nu;
        }
        l = oh(l, uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function uf(n, r) {
    if (As = -1, xr = 0, Ct & 6) throw Error(L(327));
    var l = n.callbackNode;
    if (wo() && n.callbackNode !== l) return null;
    var o = Ka(n, n === Wn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = Ct;
      Ct |= 2;
      var d = eh();
      (Wn !== n || sr !== r) && (ya = null, Ro = qe() + 500, Ji(n, r));
      do
        try {
          th();
          break;
        } catch (E) {
          Jv(n, E);
        }
      while (!0);
      gd(), Ul.current = d, Ct = c, Fn !== null ? r = 0 : (Wn = null, sr = 0, r = bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = yl(n), c !== 0 && (o = c, r = js(n, c))), r === 1) throw l = Ms, Ji(n, 0), ii(n, o), na(n, qe()), l;
      if (r === 6) ii(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !cy(c) && (r = of(n, o), r === 2 && (d = yl(n), d !== 0 && (o = d, r = js(n, d))), r === 1)) throw l = Ms, Ji(n, 0), ii(n, o), na(n, qe()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(L(345));
          case 2:
            Lu(n, ta, ya);
            break;
          case 3:
            if (ii(n, o), (o & 130023424) === o && (r = Pd + 500 - qe(), 10 < r)) {
              if (Ka(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rc(Lu.bind(null, n, ta, ya), r);
              break;
            }
            Lu(n, ta, ya);
            break;
          case 4:
            if (ii(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = qe() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * sy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rc(Lu.bind(null, n, ta, ya), o);
              break;
            }
            Lu(n, ta, ya);
            break;
          case 5:
            Lu(n, ta, ya);
            break;
          default:
            throw Error(L(329));
        }
      }
    }
    return na(n, qe()), n.callbackNode === l ? uf.bind(null, n) : null;
  }
  function js(n, r) {
    var l = zs;
    return n.current.memoizedState.isDehydrated && (Ji(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = ta, ta = l, r !== null && Ou(r)), n;
  }
  function Ou(n) {
    ta === null ? ta = n : ta.push.apply(ta, n);
  }
  function cy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ei(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ii(n, r) {
    for (r &= ~af, r &= ~Co, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bd(n) {
    if (Ct & 6) throw Error(L(327));
    wo();
    var r = Ka(n, 0);
    if (!(r & 1)) return na(n, qe()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = yl(n);
      o !== 0 && (r = o, l = js(n, o));
    }
    if (l === 1) throw l = Ms, Ji(n, 0), ii(n, r), na(n, qe()), l;
    if (l === 6) throw Error(L(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Lu(n, ta, ya), na(n, qe()), null;
  }
  function Yd(n, r) {
    var l = Ct;
    Ct |= 1;
    try {
      return n(r);
    } finally {
      Ct = l, Ct === 0 && (Ro = qe() + 500, vo && Ri());
    }
  }
  function Nu(n) {
    Zi !== null && Zi.tag === 0 && !(Ct & 6) && wo();
    var r = Ct;
    Ct |= 1;
    var l = or.transition, o = Ot;
    try {
      if (or.transition = null, Ot = 1, n) return n();
    } finally {
      Ot = o, or.transition = l, Ct = r, !(Ct & 6) && Ri();
    }
  }
  function Id() {
    ma = Eo.current, rn(Eo);
  }
  function Ji(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (bc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && po();
          break;
        case 3:
          Su(), rn($n), rn(En), De();
          break;
        case 5:
          Nc(o);
          break;
        case 4:
          Su();
          break;
        case 13:
          rn(gn);
          break;
        case 19:
          rn(gn);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Id();
      }
      l = l.return;
    }
    if (Wn = n, Fn = n = Fl(n.current, null), sr = ma = r, bn = 0, Ms = null, af = Co = Di = 0, ta = zs = null, yu !== null) {
      for (r = 0; r < yu.length; r++) if (l = yu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      yu = null;
    }
    return n;
  }
  function Jv(n, r) {
    do {
      var l = Fn;
      try {
        if (gd(), ut.current = wu, Mc) {
          for (var o = Lt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Mc = !1;
        }
        if (Gt = 0, Zn = Un = Lt = null, vs = !1, Eu = 0, ku.current = null, l === null || l.return === null) {
          bn = 1, Ms = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = sr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, W = E, q = W.tag;
            if (!(W.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var Q = W.alternate;
              Q ? (W.updateQueue = Q.updateQueue, W.memoizedState = Q.memoizedState, W.lanes = Q.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var ce = Vv(m);
            if (ce !== null) {
              ce.flags &= -257, zl(ce, m, E, d, r), ce.mode & 1 && Ld(d, U, r), r = ce, T = U;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Ld(d, U, r), $d();
                break e;
              }
              T = Error(L(426));
            }
          } else if (dn && E.mode & 1) {
            var kn = Vv(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), zl(kn, m, E, d, r), Gi(_u(T, E));
              break e;
            }
          }
          d = T = _u(T, E), bn !== 4 && (bn = 2), zs === null ? zs = [d] : zs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Hv(d, T, r);
                zv(d, k);
                break e;
              case 1:
                E = T;
                var w = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Al === null || !Al.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var G = Nd(d, E, r);
                  zv(d, G);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        rh(l);
      } catch (ge) {
        r = ge, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function eh() {
    var n = Ul.current;
    return Ul.current = wu, n === null ? wu : n;
  }
  function $d() {
    (bn === 0 || bn === 3 || bn === 2) && (bn = 4), Wn === null || !(Di & 268435455) && !(Co & 268435455) || ii(Wn, sr);
  }
  function of(n, r) {
    var l = Ct;
    Ct |= 2;
    var o = eh();
    (Wn !== n || sr !== r) && (ya = null, Ji(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        Jv(n, c);
      }
    while (!0);
    if (gd(), Ct = l, Ul.current = o, Fn !== null) throw Error(L(261));
    return Wn = null, sr = 0, bn;
  }
  function fy() {
    for (; Fn !== null; ) nh(Fn);
  }
  function th() {
    for (; Fn !== null && !Wa(); ) nh(Fn);
  }
  function nh(n) {
    var r = uh(n.alternate, n, ma);
    n.memoizedProps = n.pendingProps, r === null ? rh(n) : Fn = r, ku.current = null;
  }
  function rh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = tf(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          bn = 6, Fn = null;
          return;
        }
      } else if (l = Wv(l, r, ma), l !== null) {
        Fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    bn === 0 && (bn = 5);
  }
  function Lu(n, r, l) {
    var o = Ot, c = or.transition;
    try {
      or.transition = null, Ot = 1, dy(n, r, l, o);
    } finally {
      or.transition = c, Ot = o;
    }
    return null;
  }
  function dy(n, r, l, o) {
    do
      wo();
    while (Zi !== null);
    if (Ct & 6) throw Error(L(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(L(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Qf(n, d), n === Wn && (Fn = Wn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, oh(nu, function() {
      return wo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Ot;
      Ot = 1;
      var E = Ct;
      Ct |= 4, ku.current = null, qv(n, l), Fd(l, n), io(du), _a = !!as, du = as = null, n.current = l, oy(l), Ga(), Ct = E, Ot = m, or.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Zi = n, Us = c), d = n.pendingLanes, d === 0 && (Al = null), Io(l.stateNode), na(n, qe()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (To) throw To = !1, n = Du, Du = null, n;
    return Us & 1 && n.tag !== 0 && wo(), d = n.pendingLanes, d & 1 ? n === xo ? jl++ : (jl = 0, xo = n) : jl = 0, Ri(), null;
  }
  function wo() {
    if (Zi !== null) {
      var n = Ku(Us), r = or.transition, l = Ot;
      try {
        if (or.transition = null, Ot = 16 > n ? 16 : n, Zi === null) var o = !1;
        else {
          if (n = Zi, Zi = null, Us = 0, Ct & 6) throw Error(L(331));
          var c = Ct;
          for (Ct |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (ve = U; ve !== null; ) {
                    var W = ve;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ds(8, W, d);
                    }
                    var q = W.child;
                    if (q !== null) q.return = W, ve = q;
                    else for (; ve !== null; ) {
                      W = ve;
                      var Q = W.sibling, ce = W.return;
                      if (rf(W), W === U) {
                        ve = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = ce, ve = Q;
                        break;
                      }
                      ve = ce;
                    }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ee = ye.child;
                  if (Ee !== null) {
                    ye.child = null;
                    do {
                      var kn = Ee.sibling;
                      Ee.sibling = null, Ee = kn;
                    } while (Ee !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ve = m;
            else e: for (; ve !== null; ) {
              if (d = ve, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ds(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, ve = k;
                break e;
              }
              ve = d.return;
            }
          }
          var w = n.current;
          for (ve = w; ve !== null; ) {
            m = ve;
            var N = m.child;
            if (m.subtreeFlags & 2064 && N !== null) N.return = m, ve = N;
            else e: for (m = w; ve !== null; ) {
              if (E = ve, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Os(9, E);
                }
              } catch (ge) {
                pn(E, E.return, ge);
              }
              if (E === m) {
                ve = null;
                break e;
              }
              var G = E.sibling;
              if (G !== null) {
                G.return = E.return, ve = G;
                break e;
              }
              ve = E.return;
            }
          }
          if (Ct = c, Ri(), $r && typeof $r.onPostCommitFiberRoot == "function") try {
            $r.onPostCommitFiberRoot(hl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Ot = l, or.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = _u(l, r), r = Hv(n, r, 1), n = Nl(n, r, 1), r = Hn(), n !== null && (Hi(n, 1, r), na(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Al === null || !Al.has(o))) {
          n = _u(l, n), n = Nd(r, n, 1), r = Nl(r, n, 1), n = Hn(), r !== null && (Hi(r, 1, n), na(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function py(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Wn === n && (sr & l) === l && (bn === 4 || bn === 3 && (sr & 130023424) === sr && 500 > qe() - Pd ? Ji(n, 0) : af |= l), na(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = fa, fa <<= 1, !(fa & 130023424) && (fa = 4194304)) : r = 1);
    var l = Hn();
    n = va(n, r), n !== null && (Hi(n, r, l), na(n, l));
  }
  function vy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ih(n, l);
  }
  function lh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(L(314));
    }
    o !== null && o.delete(r), ih(n, l);
  }
  var uh;
  uh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || $n.current) An = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return An = !1, _s(n, r, l);
      An = !!(n.flags & 131072);
    }
    else An = !1, dn && r.flags & 1048576 && Ov(r, Wi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ma(n, r), n = r.pendingProps;
        var c = Gr(r, En.current);
        yn(r, l), c = Ll(null, r, o, n, c, l);
        var d = ni();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Mn(o) ? (d = !0, Kn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = Xc, r.stateNode = c, c._reactInternals = r, Cs(r, o, n, l), r = xs(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && _c(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ma(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = ri(o, n), c) {
            case 0:
              r = Pv(null, r, o, n, l);
              break e;
            case 1:
              r = Bv(null, r, o, n, l);
              break e;
            case 11:
              r = Jr(null, r, o, n, l);
              break e;
            case 14:
              r = bu(null, r, o, ri(o.type, n), l);
              break e;
          }
          throw Error(L(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Pv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Bv(n, r, o, c, l);
      case 3:
        e: {
          if (go(r), n === null) throw Error(L(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Mv(n, r), ss(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(L(423)), r), r = Yv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(L(424)), r), r = Yv(n, r, o, l, c);
            break e;
          } else for (Xr = Si(r.stateNode.containerInfo.firstChild), qr = r, dn = !0, Na = null, l = le(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ol(), o === c) {
              r = za(n, r, l);
              break e;
            }
            ur(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Uv(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Cc(o, c) ? m = null : d !== null && Cc(o, d) && (r.flags |= 32), Md(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return ef(n, r, l);
      case 4:
        return wd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = xn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Jr(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, _e(pa, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !$n.current) {
              r = za(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = qi(-1, l & -l), T.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var W = U.pending;
                      W === null ? T.next = T : (T.next = W.next, W.next = T), U.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(L(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Ed(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          ur(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = La(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ri(o, r.pendingProps), c = ri(o.type, c), bu(n, r, o, c, l);
      case 15:
        return Xe(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Ma(n, r), r.tag = 1, Mn(o) ? (n = !0, Kn(r)) : n = !1, yn(r, l), Kc(r, o, c), Cs(r, o, c, l), xs(null, r, o, !0, n, l);
      case 19:
        return _i(n, r, l);
      case 22:
        return Ts(n, r, l);
    }
    throw Error(L(156, r.tag));
  };
  function oh(n, r) {
    return on(n, r);
  }
  function hy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Aa(n, r, l, o) {
    return new hy(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === bt) return 14;
    }
    return 2;
  }
  function Fl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Aa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Fs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Fe:
        return el(l.children, c, d, r);
      case an:
        m = 8, c |= 8;
        break;
      case Ft:
        return n = Aa(12, l, r, c | 2), n.elementType = Ft, n.lanes = d, n;
      case Oe:
        return n = Aa(13, l, r, c), n.elementType = Oe, n.lanes = d, n;
      case At:
        return n = Aa(19, l, r, c), n.elementType = At, n.lanes = d, n;
      case Ce:
        return Hl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Zt:
            m = 10;
            break e;
          case ln:
            m = 9;
            break e;
          case _t:
            m = 11;
            break e;
          case bt:
            m = 14;
            break e;
          case Dt:
            m = 16, o = null;
            break e;
        }
        throw Error(L(130, n == null ? n : typeof n, ""));
    }
    return r = Aa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function el(n, r, l, o) {
    return n = Aa(7, n, o, r), n.lanes = l, n;
  }
  function Hl(n, r, l, o) {
    return n = Aa(22, n, o, r), n.elementType = Ce, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Wd(n, r, l) {
    return n = Aa(6, n, null, r), n.lanes = l, n;
  }
  function sf(n, r, l) {
    return r = Aa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xu(0), this.expirationTimes = Xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function cf(n, r, l, o, c, d, m, E, T) {
    return n = new sh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Aa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Td(d), n;
  }
  function yy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: st, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Gd(n) {
    if (!n) return Cr;
    n = n._reactInternals;
    e: {
      if (Ge(n) !== n || n.tag !== 1) throw Error(L(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Mn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(L(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Mn(l)) return us(n, l, r);
    }
    return r;
  }
  function ch(n, r, l, o, c, d, m, E, T) {
    return n = cf(l, o, !0, n, c, d, m, E, T), n.context = Gd(null), l = n.current, o = Hn(), c = Oi(l), d = qi(o, c), d.callback = r ?? null, Nl(l, d, c), n.current.lanes = c, Hi(n, c, o), na(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Hn(), m = Oi(c);
    return l = Gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Nl(c, r, m), n !== null && (zr(n, c, m, d), Oc(n, c, m)), m;
  }
  function df(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function qd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function pf(n, r) {
    qd(n, r), (n = n.alternate) && qd(n, r);
  }
  function fh() {
    return null;
  }
  var Mu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Xd(n) {
    this._internalRoot = n;
  }
  vf.prototype.render = Xd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(L(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = Xd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Nu(function() {
        ff(null, n, null, null);
      }), r[$i] = null;
    }
  };
  function vf(n) {
    this._internalRoot = n;
  }
  vf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Be();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < In.length && r !== 0 && r < In[l].priority; l++) ;
      In.splice(l, 0, n), l === 0 && Wo(n);
    }
  };
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function dh() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = df(m);
          d.call(U);
        };
      }
      var m = ch(r, o, n, 0, null, !1, !1, "", dh);
      return n._reactRootContainer = m, n[$i] = m.current, uo(n.nodeType === 8 ? n.parentNode : n), Nu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = df(T);
        E.call(U);
      };
    }
    var T = cf(n, 0, !1, null, null, !1, !1, "", dh);
    return n._reactRootContainer = T, n[$i] = T.current, uo(n.nodeType === 8 ? n.parentNode : n), Nu(function() {
      ff(r, T, l, o);
    }), T;
  }
  function Hs(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = df(m);
          E.call(T);
        };
      }
      ff(r, m, n, c);
    } else m = gy(l, r, n, c, o);
    return df(m);
  }
  xt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), na(r, qe()), !(Ct & 6) && (Ro = qe() + 500, Ri()));
        }
        break;
      case 13:
        Nu(function() {
          var o = va(n, 1);
          if (o !== null) {
            var c = Hn();
            zr(o, n, 1, c);
          }
        }), pf(n, 1);
    }
  }, $o = function(n) {
    if (n.tag === 13) {
      var r = va(n, 134217728);
      if (r !== null) {
        var l = Hn();
        zr(r, n, 134217728, l);
      }
      pf(n, 134217728);
    }
  }, vi = function(n) {
    if (n.tag === 13) {
      var r = Oi(n), l = va(n, r);
      if (l !== null) {
        var o = Hn();
        zr(l, n, r, o);
      }
      pf(n, r);
    }
  }, Be = function() {
    return Ot;
  }, Zu = function(n, r) {
    var l = Ot;
    try {
      return Ot = n, r();
    } finally {
      Ot = l;
    }
  }, It = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ir(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(L(90));
              wr(o), Ir(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ia(n, l);
        break;
      case "select":
        r = l.value, r != null && Rn(n, !!l.multiple, r, !1);
    }
  }, Jl = Yd, dl = Nu;
  var Sy = { usingClientEntryPoint: !1, Events: [ke, ti, mn, Fi, Zl, Yd] }, Vs = { findFiberByHostInstance: pu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ph = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || fh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      hl = Vl.inject(ph), $r = Vl;
    } catch {
    }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, Ba.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r)) throw Error(L(200));
    return yy(n, r, null, l);
  }, Ba.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(L(299));
    var l = !1, o = "", c = Mu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[$i] = r.current, uo(n.nodeType === 8 ? n.parentNode : n), new Xd(r);
  }, Ba.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(L(188)) : (n = Object.keys(n).join(","), Error(L(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n) {
    return Nu(n);
  }, Ba.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(L(200));
    return Hs(null, n, r, !0, l);
  }, Ba.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(L(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Mu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = ch(r, null, n, 1, l ?? null, c, !1, d, m), n[$i] = r.current, uo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, Ba.render = function(n, r, l) {
    if (!hf(r)) throw Error(L(200));
    return Hs(null, n, r, !1, l);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(L(40));
    return n._reactRootContainer ? (Nu(function() {
      Hs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[$i] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = Yd, Ba.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(L(200));
    if (n == null || n._reactInternals === void 0) throw Error(L(38));
    return Hs(n, r, l, !1, o);
  }, Ba.version = "18.3.1-next-f1338f8080-20240426", Ba;
}
var Ya = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function ik() {
  return aT || (aT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var V = ic, Y = oT(), L = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vt = !1;
    function rt(e) {
      vt = e;
    }
    function dt(e) {
      if (!vt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Bt("warn", e, a);
      }
    }
    function S(e) {
      if (!vt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Bt("error", e, a);
      }
    }
    function Bt(e, t, a) {
      {
        var i = L.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var pe = 0, he = 1, ot = 2, te = 3, Re = 4, oe = 5, $e = 6, St = 7, ht = 8, fn = 9, pt = 10, Qe = 11, mt = 12, be = 13, st = 14, Fe = 15, an = 16, Ft = 17, Zt = 18, ln = 19, _t = 21, Oe = 22, At = 23, bt = 24, Dt = 25, Ce = !0, Z = !1, Te = !1, re = !1, b = !1, P = !0, He = !0, Ae = !0, at = !0, Je = /* @__PURE__ */ new Set(), Ke = {}, et = {};
    function it(e, t) {
      Pt(e, t), Pt(e + "Capture", t);
    }
    function Pt(e, t) {
      Ke[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ke[e] = t;
      {
        var a = e.toLowerCase();
        et[a] = e, e === "onDoubleClick" && (et.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Je.add(t[i]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wr = Object.prototype.hasOwnProperty;
    function Cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Pn(e), !1;
      } catch {
        return !0;
      }
    }
    function Pn(e) {
      return "" + e;
    }
    function Bn(e, t) {
      if (nr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Pn(e);
    }
    function Ir(e) {
      if (nr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Pn(e);
    }
    function si(e, t) {
      if (nr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Pn(e);
    }
    function oa(e, t) {
      if (nr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Pn(e);
    }
    function qn(e) {
      if (nr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Pn(e);
    }
    function Rn(e) {
      if (nr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cn(e)), Pn(e);
    }
    var Yn = 0, gr = 1, Ia = 2, Nn = 3, Sr = 4, sa = 5, $a = 6, ci = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", J = ci + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", xe = new RegExp("^[" + ci + "][" + J + "]*$"), tt = {}, jt = {};
    function Jt(e) {
      return wr.call(jt, e) ? !0 : wr.call(tt, e) ? !1 : xe.test(e) ? (jt[e] = !0, !0) : (tt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === Yn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
      if (a !== null && a.type === Yn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || un(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Nn:
            return !t;
          case Sr:
            return t === !1;
          case sa:
            return isNaN(t);
          case $a:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function en(e) {
      return It.hasOwnProperty(e) ? It[e] : null;
    }
    function Yt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ia || t === Nn || t === Sr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var It = {}, ca = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ca.forEach(function(e) {
      It[e] = new Yt(
        e,
        Yn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      It[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      It[e] = new Yt(
        e,
        Ia,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      It[e] = new Yt(
        e,
        Ia,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      It[e] = new Yt(
        e,
        Nn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new Yt(
        e,
        Nn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new Yt(
        e,
        Sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new Yt(
        e,
        $a,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      It[e] = new Yt(
        e,
        sa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Er = /[\-\:]([a-z])/g, Ta = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      It[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      It[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      It[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      It[e] = new Yt(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Fi = "xlinkHref";
    It[Fi] = new Yt(
      "xlinkHref",
      gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      It[e] = new Yt(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Zl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Jl = !1;
    function dl(e) {
      !Jl && Zl.test(e) && (Jl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function pl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Bn(a, t), i.sanitizeURL && dl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Xn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Nn)
            return a;
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function eu(e, t, a, i) {
      {
        if (!Jt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Bn(a, t), u === "" + a ? a : u;
      }
    }
    function _r(e, t, a, i) {
      var u = en(t);
      if (!vn(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (Jt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Bn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Nn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, x;
          _ === Nn || _ === Sr && a === !0 ? x = "" : (Bn(a, y), x = "" + a, u.sanitizeURL && dl(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var br = Symbol.for("react.element"), rr = Symbol.for("react.portal"), fi = Symbol.for("react.fragment"), Qa = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), pi = Symbol.for("react.provider"), R = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), Ge = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), ct = Symbol.for("react.scope"), lt = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), tn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Wa = Symbol.iterator, Ga = "@@iterator";
    function qe(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Wa && e[Wa] || e[Ga];
      return typeof t == "function" ? t : null;
    }
    var Ze = Object.assign, qa = 0, tu, nu, vl, Qu, hl, $r, Io;
    function kr() {
    }
    kr.__reactDisabledLog = !0;
    function lc() {
      {
        if (qa === 0) {
          tu = console.log, nu = console.info, vl = console.warn, Qu = console.error, hl = console.group, $r = console.groupCollapsed, Io = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: kr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        qa++;
      }
    }
    function uc() {
      {
        if (qa--, qa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ze({}, e, {
              value: tu
            }),
            info: Ze({}, e, {
              value: nu
            }),
            warn: Ze({}, e, {
              value: vl
            }),
            error: Ze({}, e, {
              value: Qu
            }),
            group: Ze({}, e, {
              value: hl
            }),
            groupCollapsed: Ze({}, e, {
              value: $r
            }),
            groupEnd: Ze({}, e, {
              value: Io
            })
          });
        }
        qa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Wu = L.ReactCurrentDispatcher, ml;
    function fa(e, t, a) {
      {
        if (ml === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ml = i && i[1] || "";
          }
        return `
` + ml + e;
      }
    }
    var Xa = !1, Ka;
    {
      var Gu = typeof WeakMap == "function" ? WeakMap : Map;
      Ka = new Gu();
    }
    function ru(e, t) {
      if (!e || Xa)
        return "";
      {
        var a = Ka.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Wu.current, Wu.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && Ka.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Xa = !1, Wu.current = s, uc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", M = x ? fa(x) : "";
      return typeof e == "function" && Ka.set(e, M), M;
    }
    function yl(e, t, a) {
      return ru(e, !0);
    }
    function qu(e, t, a) {
      return ru(e, !1);
    }
    function Xu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Hi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ru(e, Xu(e));
      if (typeof e == "string")
        return fa(e);
      switch (e) {
        case ie:
          return fa("Suspense");
        case me:
          return fa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return qu(e.render);
          case Ge:
            return Hi(e.type, t, a);
          case Ye: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Hi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Qf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case oe:
          return fa(e.type);
        case an:
          return fa("Lazy");
        case be:
          return fa("Suspense");
        case ln:
          return fa("SuspenseList");
        case pe:
        case ot:
        case Fe:
          return qu(e.type);
        case Qe:
          return qu(e.type.render);
        case he:
          return yl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Qf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ot(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ku(e) {
      return e.displayName || "Context";
    }
    function xt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case fi:
          return "Fragment";
        case rr:
          return "Portal";
        case di:
          return "Profiler";
        case Qa:
          return "StrictMode";
        case ie:
          return "Suspense";
        case me:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Ku(t) + ".Consumer";
          case pi:
            var a = e;
            return Ku(a._context) + ".Provider";
          case I:
            return Ot(e, e.render, "ForwardRef");
          case Ge:
            var i = e.displayName || null;
            return i !== null ? i : xt(e.type) || "Memo";
          case Ye: {
            var u = e, s = u._payload, f = u._init;
            try {
              return xt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function $o(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function Be(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case bt:
          return "Cache";
        case fn:
          var i = a;
          return vi(i) + ".Consumer";
        case pt:
          var u = a;
          return vi(u._context) + ".Provider";
        case Zt:
          return "DehydratedFragment";
        case Qe:
          return $o(a, a.render, "ForwardRef");
        case St:
          return "Fragment";
        case oe:
          return a;
        case Re:
          return "Portal";
        case te:
          return "Root";
        case $e:
          return "Text";
        case an:
          return xt(a);
        case ht:
          return a === Qa ? "StrictMode" : "Mode";
        case Oe:
          return "Offscreen";
        case mt:
          return "Profiler";
        case _t:
          return "Scope";
        case be:
          return "Suspense";
        case ln:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case he:
        case pe:
        case Ft:
        case ot:
        case st:
        case Fe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = L.ReactDebugCurrentFrame, ir = null, hi = !1;
    function Dr() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return Be(e);
      }
      return null;
    }
    function mi() {
      return ir === null ? "" : Vi(ir);
    }
    function sn() {
      Zu.getCurrentStack = null, ir = null, hi = !1;
    }
    function $t(e) {
      Zu.getCurrentStack = e === null ? null : mi, ir = e, hi = !1;
    }
    function gl() {
      return ir;
    }
    function In(e) {
      hi = e;
    }
    function Or(e) {
      return "" + e;
    }
    function xa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Rn(e), e;
        default:
          return "";
      }
    }
    var au = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Qo(e, t) {
      au[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Wo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Sl(e) {
      return e._valueTracker;
    }
    function iu(e) {
      e._valueTracker = null;
    }
    function Wf(e) {
      var t = "";
      return e && (Wo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function wa(e) {
      var t = Wo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Rn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Rn(p), i = "" + p;
          },
          stopTracking: function() {
            iu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Za(e) {
      Sl(e) || (e._valueTracker = wa(e));
    }
    function yi(e) {
      if (!e)
        return !1;
      var t = Sl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Wf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function _a(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ju = !1, eo = !1, El = !1, lu = !1;
    function to(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function no(e, t) {
      var a = e, i = t.checked, u = Ze({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Ja(e, t) {
      Qo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !eo && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), eo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ju && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), Ju = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: xa(t.value != null ? t.value : i),
        controlled: to(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && _r(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = to(t);
        !a._wrapperState.controlled && i && !lu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), lu = !0), a._wrapperState.controlled && !i && !El && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), El = !0);
      }
      h(e, t);
      var u = xa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Or(u)) : a.value !== Or(u) && (a.value = Or(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ne(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ne(a, t.type, xa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Or(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), K(a, t);
    }
    function K(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Bn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Nh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            yi(f), C(f, p);
          }
        }
      }
    }
    function Ne(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _a(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Or(e._wrapperState.initialValue) : e.defaultValue !== Or(a) && (e.defaultValue = Or(a)));
    }
    var ae = !1, ze = !1, ft = !1;
    function wt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? V.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ze || (ze = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ft || (ft = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ae && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ae = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", Or(xa(t.value)));
    }
    var Qt = Array.isArray;
    function nt(e) {
      return Qt(e);
    }
    var Wt;
    Wt = !1;
    function hn() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Cl = ["value", "defaultValue"];
    function Go(e) {
      {
        Qo("select", e);
        for (var t = 0; t < Cl.length; t++) {
          var a = Cl[t];
          if (e[a] != null) {
            var i = nt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Pi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Or(xa(a)), _ = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          _ === null && !u[x].disabled && (_ = u[x]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function qo(e, t) {
      return Ze({}, t, {
        value: void 0
      });
    }
    function uu(e, t) {
      var a = e;
      Go(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Wt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Wt = !0);
    }
    function Gf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Pi(a, !!t.multiple, i, !1) : t.defaultValue != null && Pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Pi(a, !!t.multiple, t.defaultValue, !0) : Pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function qf(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var ev = !1;
    function Xf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ze({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Or(a._wrapperState.initialValue)
      });
      return i;
    }
    function Kf(e, t) {
      var a = e;
      Qo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ev && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), ev = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (nt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: xa(i)
      };
    }
    function tv(e, t) {
      var a = e, i = xa(t.value), u = xa(t.defaultValue);
      if (i != null) {
        var s = Or(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Or(u));
    }
    function nv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Gm(e, t) {
      tv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", Zf = "http://www.w3.org/1998/Math/MathML", Jf = "http://www.w3.org/2000/svg";
    function ed(e) {
      switch (e) {
        case "svg":
          return Jf;
        case "math":
          return Zf;
        default:
          return Bi;
      }
    }
    function td(e, t) {
      return e == null || e === Bi ? ed(t) : e === Jf && t === "foreignObject" ? Bi : e;
    }
    var rv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sc, av = rv(function(e, t) {
      if (e.namespaceURI === Jf && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, Yi = 3, Ln = 8, Ii = 9, nd = 11, ro = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Ko = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function iv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var lv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ko).forEach(function(e) {
      lv.forEach(function(t) {
        Ko[iv(t, e)] = Ko[e];
      });
    });
    function cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Ko.hasOwnProperty(e) && Ko[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var uv = /([A-Z])/g, ov = /^ms-/;
    function ao(e) {
      return e.replace(uv, "-$1").toLowerCase().replace(ov, "-ms-");
    }
    var sv = function() {
    };
    {
      var qm = /^(?:webkit|moz|o)[A-Z]/, Xm = /^-ms-/, cv = /-(.)/g, rd = /;\s*$/, gi = {}, ou = {}, fv = !1, Zo = !1, Km = function(e) {
        return e.replace(cv, function(t, a) {
          return a.toUpperCase();
        });
      }, dv = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Km(e.replace(Xm, "ms-"))
        ));
      }, ad = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, id = function(e, t) {
        ou.hasOwnProperty(t) && ou[t] || (ou[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(rd, "")));
      }, pv = function(e, t) {
        fv || (fv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, vv = function(e, t) {
        Zo || (Zo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sv = function(e, t) {
        e.indexOf("-") > -1 ? dv(e) : qm.test(e) ? ad(e) : rd.test(t) && id(e, t), typeof t == "number" && (isNaN(t) ? pv(e, t) : isFinite(t) || vv(e, t));
      };
    }
    var hv = sv;
    function Zm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : ao(i)) + ":", t += cc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function mv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || hv(i, t[i]);
          var s = cc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Jm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function yv(e) {
      var t = {};
      for (var a in e)
        for (var i = Xo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ey(e, t) {
      {
        if (!t)
          return;
        var a = yv(e), i = yv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Jm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ei = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Jo = Ze({
      menuitem: !0
    }, ei), gv = "__html";
    function fc(e, t) {
      if (t) {
        if (Jo[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(gv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Rl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var es = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, dc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, io = {}, ty = new RegExp("^(aria)-[" + J + "]*$"), lo = new RegExp("^(aria)[A-Z][" + J + "]*$");
    function ld(e, t) {
      {
        if (wr.call(io, t) && io[t])
          return !0;
        if (lo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), io[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), io[t] = !0, !0;
        }
        if (ty.test(t)) {
          var u = t.toLowerCase(), s = dc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return io[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), io[t] = !0, !0;
        }
      }
      return !0;
    }
    function ts(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ld(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ud(e, t) {
      Rl(e, t) || ts(e, t);
    }
    var od = !1;
    function pc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !od && (od = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var su = function() {
    };
    {
      var lr = {}, sd = /^on./, vc = /^on[^A-Z]/, Sv = new RegExp("^(aria)-[" + J + "]*$"), Ev = new RegExp("^(aria)[A-Z][" + J + "]*$");
      su = function(e, t, a, i) {
        if (wr.call(lr, t) && lr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (sd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (sd.test(t))
          return vc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (Sv.test(t) || Ev.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var v = en(t), y = v !== null && v.type === Yn;
        if (es.hasOwnProperty(u)) {
          var g = es[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), lr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && un(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : y ? !0 : un(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Nn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var Cv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = su(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Rv(e, t, a) {
      Rl(e, t) || Cv(e, t, a);
    }
    var cd = 1, hc = 2, ba = 4, fd = cd | hc | ba, cu = null;
    function ny(e) {
      cu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), cu = e;
    }
    function ry() {
      cu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), cu = null;
    }
    function ns(e) {
      return e === cu;
    }
    function dd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var mc = null, fu = null, Ht = null;
    function yc(e) {
      var t = ko(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Nh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function gc(e) {
      mc = e;
    }
    function uo(e) {
      fu ? Ht ? Ht.push(e) : Ht = [e] : fu = e;
    }
    function Tv() {
      return fu !== null || Ht !== null;
    }
    function Sc() {
      if (fu) {
        var e = fu, t = Ht;
        if (fu = null, Ht = null, yc(e), t)
          for (var a = 0; a < t.length; a++)
            yc(t[a]);
      }
    }
    var oo = function(e, t) {
      return e(t);
    }, rs = function() {
    }, Tl = !1;
    function xv() {
      var e = Tv();
      e && (rs(), Sc());
    }
    function wv(e, t, a) {
      if (Tl)
        return e(t, a);
      Tl = !0;
      try {
        return oo(e, t, a);
      } finally {
        Tl = !1, xv();
      }
    }
    function ay(e, t, a) {
      oo = e, rs = a;
    }
    function _v(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && _v(t));
        default:
          return !1;
      }
    }
    function xl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Nh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var as = !1;
    if (On)
      try {
        var du = {};
        Object.defineProperty(du, "passive", {
          get: function() {
            as = !0;
          }
        }), window.addEventListener("test", du, du), window.removeEventListener("test", du, du);
      } catch {
        as = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Rc = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var pd = document.createElement("react");
      Rc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, x = !0, M = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          pd.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var ue = Array.prototype.slice.call(arguments, 3);
        function Le() {
          _ = !0, F(), a.apply(i, ue), x = !1;
        }
        var we, Tt = !1, yt = !1;
        function D(O) {
          if (we = O.error, Tt = !0, we === null && O.colno === 0 && O.lineno === 0 && (yt = !0), O.defaultPrevented && we != null && typeof we == "object")
            try {
              we._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), pd.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), pd.dispatchEvent(g), A && Object.defineProperty(window, "event", A), _ && x && (Tt ? yt && (we = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : we = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(we)), window.removeEventListener("error", D), !_)
          return F(), Cc.apply(this, arguments);
      };
    }
    var bv = Rc, so = !1, Tc = null, co = !1, Si = null, kv = {
      onError: function(e) {
        so = !0, Tc = e;
      }
    };
    function wl(e, t, a, i, u, s, f, p, v) {
      so = !1, Tc = null, bv.apply(kv, arguments);
    }
    function Ei(e, t, a, i, u, s, f, p, v) {
      if (wl.apply(this, arguments), so) {
        var y = ls();
        co || (co = !0, Si = y);
      }
    }
    function is() {
      if (co) {
        var e = Si;
        throw co = !1, Si = null, e;
      }
    }
    function $i() {
      return so;
    }
    function ls() {
      if (so) {
        var e = Tc;
        return so = !1, Tc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function fo(e) {
      return e._reactInternals;
    }
    function iy(e) {
      return e._reactInternals !== void 0;
    }
    function pu(e, t) {
      e._reactInternals = t;
    }
    var ke = (
      /*                      */
      0
    ), ti = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), Et = (
      /*                       */
      4
    ), ka = (
      /*                */
      16
    ), Da = (
      /*                 */
      32
    ), rn = (
      /*                     */
      64
    ), _e = (
      /*                   */
      128
    ), Cr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), $n = (
      /*                     */
      1024
    ), Wr = (
      /*                      */
      2048
    ), Gr = (
      /*                    */
      4096
    ), Mn = (
      /*                   */
      8192
    ), po = (
      /*             */
      16384
    ), Dv = (
      /*               */
      32767
    ), us = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), xc = (
      /* */
      131072
    ), Ci = (
      /*                       */
      1048576
    ), vo = (
      /*                    */
      2097152
    ), Qi = (
      /*                 */
      4194304
    ), wc = (
      /*                */
      8388608
    ), _l = (
      /*               */
      16777216
    ), Ri = (
      /*              */
      33554432
    ), bl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Et | $n | 0
    ), kl = mn | Et | ka | Da | En | Gr | Mn, Dl = Et | rn | En | Mn, Wi = Wr | ka, zn = Qi | wc | vo, Oa = L.ReactCurrentOwner;
    function da(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | Gr)) !== ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function Ti(e) {
      if (e.tag === be) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function xi(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function vu(e) {
      return da(e) === e;
    }
    function Ov(e) {
      {
        var t = Oa.current;
        if (t !== null && t.tag === he) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Be(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = fo(e);
      return u ? da(u) === u : !1;
    }
    function _c(e) {
      if (da(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function bc(e) {
      var t = e.alternate;
      if (!t) {
        var a = da(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return _c(s), e;
            if (v === u)
              return _c(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = bc(e);
      return t !== null ? Xr(t) : null;
    }
    function Xr(e) {
      if (e.tag === oe || e.tag === $e)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Xr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = bc(e);
      return t !== null ? Na(t) : null;
    }
    function Na(e) {
      if (e.tag === oe || e.tag === $e)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Re) {
          var a = Na(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = Y.unstable_scheduleCallback, Nv = Y.unstable_cancelCallback, hd = Y.unstable_shouldYield, md = Y.unstable_requestPaint, Qn = Y.unstable_now, kc = Y.unstable_getCurrentPriorityLevel, os = Y.unstable_ImmediatePriority, Ol = Y.unstable_UserBlockingPriority, Gi = Y.unstable_NormalPriority, ly = Y.unstable_LowPriority, hu = Y.unstable_IdlePriority, Dc = Y.unstable_yieldValue, Lv = Y.unstable_setDisableYieldValue, mu = null, xn = null, le = null, pa = !1, Kr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ho(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        He && (e = Ze({}, e, {
          getLaneLabelMap: yu,
          injectProfilingHooks: La
        })), mu = t.inject(e), xn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yd(e, t) {
      if (xn && typeof xn.onScheduleFiberRoot == "function")
        try {
          xn.onScheduleFiberRoot(mu, e, t);
        } catch (a) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function gd(e, t) {
      if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & _e) === _e;
          if (Ae) {
            var i;
            switch (t) {
              case Nr:
                i = os;
                break;
              case _i:
                i = Ol;
                break;
              case Ma:
                i = Gi;
                break;
              case za:
                i = hu;
                break;
              default:
                i = Gi;
                break;
            }
            xn.onCommitFiberRoot(mu, e, i, a);
          }
        } catch (u) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Sd(e) {
      if (xn && typeof xn.onPostCommitFiberRoot == "function")
        try {
          xn.onPostCommitFiberRoot(mu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ed(e) {
      if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
          xn.onCommitFiberUnmount(mu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Dc == "function" && (Lv(e), rt(e)), xn && typeof xn.setStrictMode == "function")
        try {
          xn.setStrictMode(mu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function La(e) {
      le = e;
    }
    function yu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Eu; a++) {
          var i = Av(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Cd(e) {
      le !== null && typeof le.markCommitStarted == "function" && le.markCommitStarted(e);
    }
    function Rd() {
      le !== null && typeof le.markCommitStopped == "function" && le.markCommitStopped();
    }
    function va(e) {
      le !== null && typeof le.markComponentRenderStarted == "function" && le.markComponentRenderStarted(e);
    }
    function ha() {
      le !== null && typeof le.markComponentRenderStopped == "function" && le.markComponentRenderStopped();
    }
    function Td(e) {
      le !== null && typeof le.markComponentPassiveEffectMountStarted == "function" && le.markComponentPassiveEffectMountStarted(e);
    }
    function Mv() {
      le !== null && typeof le.markComponentPassiveEffectMountStopped == "function" && le.markComponentPassiveEffectMountStopped();
    }
    function qi(e) {
      le !== null && typeof le.markComponentPassiveEffectUnmountStarted == "function" && le.markComponentPassiveEffectUnmountStarted(e);
    }
    function Nl() {
      le !== null && typeof le.markComponentPassiveEffectUnmountStopped == "function" && le.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      le !== null && typeof le.markComponentLayoutEffectMountStarted == "function" && le.markComponentLayoutEffectMountStarted(e);
    }
    function zv() {
      le !== null && typeof le.markComponentLayoutEffectMountStopped == "function" && le.markComponentLayoutEffectMountStopped();
    }
    function ss(e) {
      le !== null && typeof le.markComponentLayoutEffectUnmountStarted == "function" && le.markComponentLayoutEffectUnmountStarted(e);
    }
    function xd() {
      le !== null && typeof le.markComponentLayoutEffectUnmountStopped == "function" && le.markComponentLayoutEffectUnmountStopped();
    }
    function cs(e, t, a) {
      le !== null && typeof le.markComponentErrored == "function" && le.markComponentErrored(e, t, a);
    }
    function wi(e, t, a) {
      le !== null && typeof le.markComponentSuspended == "function" && le.markComponentSuspended(e, t, a);
    }
    function fs(e) {
      le !== null && typeof le.markLayoutEffectsStarted == "function" && le.markLayoutEffectsStarted(e);
    }
    function ds() {
      le !== null && typeof le.markLayoutEffectsStopped == "function" && le.markLayoutEffectsStopped();
    }
    function gu(e) {
      le !== null && typeof le.markPassiveEffectsStarted == "function" && le.markPassiveEffectsStarted(e);
    }
    function wd() {
      le !== null && typeof le.markPassiveEffectsStopped == "function" && le.markPassiveEffectsStopped();
    }
    function Su(e) {
      le !== null && typeof le.markRenderStarted == "function" && le.markRenderStarted(e);
    }
    function Uv() {
      le !== null && typeof le.markRenderYielded == "function" && le.markRenderYielded();
    }
    function Nc() {
      le !== null && typeof le.markRenderStopped == "function" && le.markRenderStopped();
    }
    function gn(e) {
      le !== null && typeof le.markRenderScheduled == "function" && le.markRenderScheduled(e);
    }
    function Lc(e, t) {
      le !== null && typeof le.markForceUpdateScheduled == "function" && le.markForceUpdateScheduled(e, t);
    }
    function ps(e, t) {
      le !== null && typeof le.markStateUpdateScheduled == "function" && le.markStateUpdateScheduled(e, t);
    }
    var De = (
      /*                         */
      0
    ), ut = (
      /*                 */
      1
    ), Nt = (
      /*                    */
      2
    ), Gt = (
      /*               */
      8
    ), Lt = (
      /*              */
      16
    ), Un = Math.clz32 ? Math.clz32 : vs, Zn = Math.log, Mc = Math.LN2;
    function vs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zn(t) / Mc | 0) | 0;
    }
    var Eu = 31, $ = (
      /*                        */
      0
    ), kt = (
      /*                          */
      0
    ), je = (
      /*                        */
      1
    ), Ll = (
      /*    */
      2
    ), ni = (
      /*             */
      4
    ), Rr = (
      /*            */
      8
    ), wn = (
      /*                     */
      16
    ), Xi = (
      /*                */
      32
    ), Ml = (
      /*                       */
      4194240
    ), Cu = (
      /*                        */
      64
    ), zc = (
      /*                        */
      128
    ), Uc = (
      /*                        */
      256
    ), Ac = (
      /*                        */
      512
    ), jc = (
      /*                        */
      1024
    ), Fc = (
      /*                        */
      2048
    ), Hc = (
      /*                        */
      4096
    ), Vc = (
      /*                        */
      8192
    ), Pc = (
      /*                        */
      16384
    ), Ru = (
      /*                       */
      32768
    ), Bc = (
      /*                       */
      65536
    ), mo = (
      /*                       */
      131072
    ), yo = (
      /*                       */
      262144
    ), Yc = (
      /*                       */
      524288
    ), hs = (
      /*                       */
      1048576
    ), Ic = (
      /*                       */
      2097152
    ), ms = (
      /*                            */
      130023424
    ), Tu = (
      /*                             */
      4194304
    ), $c = (
      /*                             */
      8388608
    ), ys = (
      /*                             */
      16777216
    ), Qc = (
      /*                             */
      33554432
    ), Wc = (
      /*                             */
      67108864
    ), _d = Tu, gs = (
      /*          */
      134217728
    ), bd = (
      /*                          */
      268435455
    ), Ss = (
      /*               */
      268435456
    ), xu = (
      /*                        */
      536870912
    ), Zr = (
      /*                   */
      1073741824
    );
    function Av(e) {
      {
        if (e & je)
          return "Sync";
        if (e & Ll)
          return "InputContinuousHydration";
        if (e & ni)
          return "InputContinuous";
        if (e & Rr)
          return "DefaultHydration";
        if (e & wn)
          return "Default";
        if (e & Xi)
          return "TransitionHydration";
        if (e & Ml)
          return "Transition";
        if (e & ms)
          return "Retry";
        if (e & gs)
          return "SelectiveHydration";
        if (e & Ss)
          return "IdleHydration";
        if (e & xu)
          return "Idle";
        if (e & Zr)
          return "Offscreen";
      }
    }
    var Kt = -1, wu = Cu, Gc = Tu;
    function Es(e) {
      switch (zl(e)) {
        case je:
          return je;
        case Ll:
          return Ll;
        case ni:
          return ni;
        case Rr:
          return Rr;
        case wn:
          return wn;
        case Xi:
          return Xi;
        case Cu:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Ru:
        case Bc:
        case mo:
        case yo:
        case Yc:
        case hs:
        case Ic:
          return e & Ml;
        case Tu:
        case $c:
        case ys:
        case Qc:
        case Wc:
          return e & ms;
        case gs:
          return gs;
        case Ss:
          return Ss;
        case xu:
          return xu;
        case Zr:
          return Zr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function qc(e, t) {
      var a = e.pendingLanes;
      if (a === $)
        return $;
      var i = $, u = e.suspendedLanes, s = e.pingedLanes, f = a & bd;
      if (f !== $) {
        var p = f & ~u;
        if (p !== $)
          i = Es(p);
        else {
          var v = f & s;
          v !== $ && (i = Es(v));
        }
      } else {
        var y = a & ~u;
        y !== $ ? i = Es(y) : s !== $ && (i = Es(s));
      }
      if (i === $)
        return $;
      if (t !== $ && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === $) {
        var g = zl(i), _ = zl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === wn && (_ & Ml) !== $
        )
          return t;
      }
      (i & ni) !== $ && (i |= a & wn);
      var x = e.entangledLanes;
      if (x !== $)
        for (var M = e.entanglements, A = i & x; A > 0; ) {
          var F = An(A), ue = 1 << F;
          i |= M[F], A &= ~ue;
        }
      return i;
    }
    function ri(e, t) {
      for (var a = e.eventTimes, i = Kt; t > 0; ) {
        var u = An(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function kd(e, t) {
      switch (e) {
        case je:
        case Ll:
        case ni:
          return t + 250;
        case Rr:
        case wn:
        case Xi:
        case Cu:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Ru:
        case Bc:
        case mo:
        case yo:
        case Yc:
        case hs:
        case Ic:
          return t + 5e3;
        case Tu:
        case $c:
        case ys:
        case Qc:
        case Wc:
          return Kt;
        case gs:
        case Ss:
        case xu:
        case Zr:
          return Kt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Kt;
      }
    }
    function Xc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p, y = s[p];
        y === Kt ? ((v & i) === $ || (v & u) !== $) && (s[p] = kd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function jv(e) {
      return Es(e.pendingLanes);
    }
    function Kc(e) {
      var t = e.pendingLanes & ~Zr;
      return t !== $ ? t : t & Zr ? Zr : $;
    }
    function Fv(e) {
      return (e & je) !== $;
    }
    function Cs(e) {
      return (e & bd) !== $;
    }
    function _u(e) {
      return (e & ms) === e;
    }
    function Dd(e) {
      var t = je | ni | wn;
      return (e & t) === $;
    }
    function Od(e) {
      return (e & Ml) === e;
    }
    function Zc(e, t) {
      var a = Ll | ni | Rr | wn;
      return (t & a) !== $;
    }
    function Hv(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function Nd(e) {
      return (e & Ml) !== $;
    }
    function Ld() {
      var e = wu;
      return wu <<= 1, (wu & Ml) === $ && (wu = Cu), e;
    }
    function Vv() {
      var e = Gc;
      return Gc <<= 1, (Gc & ms) === $ && (Gc = Tu), e;
    }
    function zl(e) {
      return e & -e;
    }
    function Rs(e) {
      return zl(e);
    }
    function An(e) {
      return 31 - Un(e);
    }
    function ur(e) {
      return An(e);
    }
    function Jr(e, t) {
      return (e & t) !== $;
    }
    function bu(e, t) {
      return (e & t) === t;
    }
    function Xe(e, t) {
      return e | t;
    }
    function Ts(e, t) {
      return e & ~t;
    }
    function Md(e, t) {
      return e & t;
    }
    function Pv(e) {
      return e;
    }
    function Bv(e, t) {
      return e !== kt && e < t ? e : t;
    }
    function xs(e) {
      for (var t = [], a = 0; a < Eu; a++)
        t.push(e);
      return t;
    }
    function go(e, t, a) {
      e.pendingLanes |= t, t !== xu && (e.suspendedLanes = $, e.pingedLanes = $);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function Yv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = An(i), s = 1 << u;
        a[u] = Kt, i &= ~s;
      }
    }
    function Jc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p;
        i[p] = $, u[p] = Kt, s[p] = Kt, f &= ~v;
      }
    }
    function ef(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = An(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ud(e, t) {
      var a = zl(t), i;
      switch (a) {
        case ni:
          i = Ll;
          break;
        case wn:
          i = Rr;
          break;
        case Cu:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Ru:
        case Bc:
        case mo:
        case yo:
        case Yc:
        case hs:
        case Ic:
        case Tu:
        case $c:
        case ys:
        case Qc:
        case Wc:
          i = Xi;
          break;
        case xu:
          i = Ss;
          break;
        default:
          i = kt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== kt ? kt : i;
    }
    function ws(e, t, a) {
      if (Kr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Iv(e, t) {
      if (Kr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ur(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ad(e, t) {
      return null;
    }
    var Nr = je, _i = ni, Ma = wn, za = xu, _s = kt;
    function Ua() {
      return _s;
    }
    function jn(e) {
      _s = e;
    }
    function $v(e, t) {
      var a = _s;
      try {
        return _s = e, t();
      } finally {
        _s = a;
      }
    }
    function Qv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function bs(e, t) {
      return e > t ? e : t;
    }
    function Jn(e, t) {
      return e !== 0 && e < t;
    }
    function Wv(e) {
      var t = zl(e);
      return Jn(Nr, t) ? Jn(_i, t) ? Cs(t) ? Ma : za : _i : Nr;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ks;
    function Tr(e) {
      ks = e;
    }
    function uy(e) {
      ks(e);
    }
    var ve;
    function So(e) {
      ve = e;
    }
    var nf;
    function Gv(e) {
      nf = e;
    }
    var qv;
    function Ds(e) {
      qv = e;
    }
    var Os;
    function jd(e) {
      Os = e;
    }
    var rf = !1, Ns = [], Ki = null, bi = null, ki = null, _n = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), Mr = [], Xv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Kv(e) {
      return Xv.indexOf(e) > -1;
    }
    function ai(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Fd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ki = null;
          break;
        case "dragenter":
        case "dragleave":
          bi = null;
          break;
        case "mouseover":
        case "mouseout":
          ki = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          _n.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Lr.delete(i);
          break;
        }
      }
    }
    function ea(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ai(t, a, i, u, s);
        if (t !== null) {
          var p = ko(t);
          p !== null && ve(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function oy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ki = ea(Ki, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return bi = ea(bi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ki = ea(ki, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return _n.set(y, ea(_n.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return Lr.set(_, ea(Lr.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = da(t);
        if (a !== null) {
          var i = a.tag;
          if (i === be) {
            var u = Ti(a);
            if (u !== null) {
              e.blockedOn = u, Os(e.priority, function() {
                nf(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = xi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zv(e) {
      for (var t = qv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Mr.length && Jn(t, Mr[i].priority); i++)
        ;
      Mr.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ls(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Co(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ny(s), u.target.dispatchEvent(s), ry();
        } else {
          var f = ko(i);
          return f !== null && ve(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Vd(e, t, a) {
      Ls(e) && a.delete(t);
    }
    function sy() {
      rf = !1, Ki !== null && Ls(Ki) && (Ki = null), bi !== null && Ls(bi) && (bi = null), ki !== null && Ls(ki) && (ki = null), _n.forEach(Vd), Lr.forEach(Vd);
    }
    function Ul(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, Y.unstable_scheduleCallback(Y.unstable_NormalPriority, sy)));
    }
    function ku(e) {
      if (Ns.length > 0) {
        Ul(Ns[0], e);
        for (var t = 1; t < Ns.length; t++) {
          var a = Ns[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ki !== null && Ul(Ki, e), bi !== null && Ul(bi, e), ki !== null && Ul(ki, e);
      var i = function(p) {
        return Ul(p, e);
      };
      _n.forEach(i), Lr.forEach(i);
      for (var u = 0; u < Mr.length; u++) {
        var s = Mr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Mr.length > 0; ) {
        var f = Mr[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Mr.shift();
      }
    }
    var or = L.ReactCurrentBatchConfig, Ct = !0;
    function Wn(e) {
      Ct = !!e;
    }
    function Fn() {
      return Ct;
    }
    function sr(e, t, a) {
      var i = af(t), u;
      switch (i) {
        case Nr:
          u = ma;
          break;
        case _i:
          u = Eo;
          break;
        case Ma:
        default:
          u = bn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ma(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(Nr), bn(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function Eo(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(_i), bn(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function bn(e, t, a, i) {
      Ct && Ms(e, t, a, i);
    }
    function Ms(e, t, a, i) {
      var u = Co(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Di, a), Fd(e, i);
        return;
      }
      if (oy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Fd(e, i), t & ba && Kv(e)) {
        for (; u !== null; ) {
          var s = ko(u);
          s !== null && uy(s);
          var f = Co(e, t, a, i);
          if (f === null && _y(e, t, i, Di, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Di = null;
    function Co(e, t, a, i) {
      Di = null;
      var u = dd(i), s = Ys(u);
      if (s !== null) {
        var f = da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === be) {
            var v = Ti(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (tf(y))
              return xi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Di = s, null;
    }
    function af(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Nr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return _i;
        case "message": {
          var t = kc();
          switch (t) {
            case os:
              return Nr;
            case Ol:
              return _i;
            case Gi:
            case ly:
              return Ma;
            case hu:
              return za;
            default:
              return Ma;
          }
        }
        default:
          return Ma;
      }
    }
    function zs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ta(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Pd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ro(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ya = null, To = null, Du = null;
    function Al(e) {
      return ya = e, To = Us(), !0;
    }
    function lf() {
      ya = null, To = null, Du = null;
    }
    function Zi() {
      if (Du)
        return Du;
      var e, t = To, a = t.length, i, u = Us(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Du = u.slice(e, p), Du;
    }
    function Us() {
      return "value" in ya ? ya.value : ya.textContent;
    }
    function jl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function xo() {
      return !0;
    }
    function As() {
      return !1;
    }
    function xr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = xo : this.isDefaultPrevented = As, this.isPropagationStopped = As, this;
      }
      return Ze(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: xo
      }), t;
    }
    var Hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Oi = xr(Hn), zr = Ze({}, Hn, {
      view: 0,
      detail: 0
    }), na = xr(zr), uf, js, Ou;
    function cy(e) {
      e !== Ou && (Ou && e.type === "mousemove" ? (uf = e.screenX - Ou.screenX, js = e.screenY - Ou.screenY) : (uf = 0, js = 0), Ou = e);
    }
    var ii = Ze({}, zr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (cy(e), uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : js;
      }
    }), Bd = xr(ii), Yd = Ze({}, ii, {
      dataTransfer: 0
    }), Nu = xr(Yd), Id = Ze({}, zr, {
      relatedTarget: 0
    }), Ji = xr(Id), Jv = Ze({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), eh = xr(Jv), $d = Ze({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), of = xr($d), fy = Ze({}, Hn, {
      data: 0
    }), th = xr(fy), nh = th, rh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Lu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function dy(e) {
      if (e.key) {
        var t = rh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = jl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Lu[e.keyCode] || "Unidentified" : "";
    }
    var wo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ah(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = wo[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return ah;
    }
    var py = Ze({}, zr, {
      key: dy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? jl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ih = xr(py), vy = Ze({}, ii, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), lh = xr(vy), uh = Ze({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), oh = xr(uh), hy = Ze({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Aa = xr(hy), Qd = Ze({}, ii, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), my = xr(Qd), Fl = [9, 13, 27, 32], Fs = 229, el = On && "CompositionEvent" in window, Hl = null;
    On && "documentMode" in document && (Hl = document.documentMode);
    var Wd = On && "TextEvent" in window && !Hl, sf = On && (!el || Hl && Hl > 8 && Hl <= 11), sh = 32, cf = String.fromCharCode(sh);
    function yy() {
      it("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), it("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), it("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), it("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function ch(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ff(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function df(e, t) {
      return e === "keydown" && t.keyCode === Fs;
    }
    function qd(e, t) {
      switch (e) {
        case "keyup":
          return Fl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Fs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function fh(e) {
      return e.locale === "ko";
    }
    var Mu = !1;
    function Xd(e, t, a, i, u) {
      var s, f;
      if (el ? s = ff(t) : Mu ? qd(t, i) && (s = "onCompositionEnd") : df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sf && !fh(i) && (!Mu && s === "onCompositionStart" ? Mu = Al(u) : s === "onCompositionEnd" && Mu && (f = Zi()));
      var p = gh(a, s);
      if (p.length > 0) {
        var v = new th(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = pf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function vf(e, t) {
      switch (e) {
        case "compositionend":
          return pf(t);
        case "keypress":
          var a = t.which;
          return a !== sh ? null : (Gd = !0, cf);
        case "textInput":
          var i = t.data;
          return i === cf && Gd ? null : i;
        default:
          return null;
      }
    }
    function Kd(e, t) {
      if (Mu) {
        if (e === "compositionend" || !el && qd(e, t)) {
          var a = Zi();
          return lf(), Mu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ch(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sf && !fh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, u) {
      var s;
      if (Wd ? s = vf(t, i) : s = Kd(t, i), !s)
        return null;
      var f = gh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new nh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function dh(e, t, a, i, u, s, f) {
      Xd(e, t, a, i, u), hf(e, t, a, i, u);
    }
    var gy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Hs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Sy(e) {
      if (!On)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vs() {
      it("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function ph(e, t, a, i) {
      uo(i);
      var u = gh(t, "onChange");
      if (u.length > 0) {
        var s = new Oi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      ph(t, n, e, dd(e)), wv(o, t);
    }
    function o(e) {
      bE(e, 0);
    }
    function c(e) {
      var t = Cf(e);
      if (yi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    On && (m = Sy("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", U);
    }
    function T() {
      Vl && (Vl.detachEvent("onpropertychange", U), Vl = null, n = null);
    }
    function U(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function W(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function Q(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ce(e, t) {
      if (e === "click")
        return c(t);
    }
    function ye(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ee(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ne(e, "number", e.value);
    }
    function kn(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (r(p) ? v = d : Hs(p) ? m ? v = ye : (v = q, y = W) : Q(p) && (v = ce), v) {
        var g = v(t, a);
        if (g) {
          ph(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Ee(p);
    }
    function k() {
      Pt("onMouseEnter", ["mouseout", "mouseover"]), Pt("onMouseLeave", ["mouseout", "mouseover"]), Pt("onPointerEnter", ["pointerout", "pointerover"]), Pt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function w(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ns(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ys(y) || fp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var x, M;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (x = a, M = A ? Ys(A) : null, M !== null) {
            var F = da(M);
            (M !== F || M.tag !== oe && M.tag !== $e) && (M = null);
          }
        } else
          x = null, M = a;
        if (x !== M) {
          var ue = Bd, Le = "onMouseLeave", we = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ue = lh, Le = "onPointerLeave", we = "onPointerEnter", Tt = "pointer");
          var yt = x == null ? g : Cf(x), D = M == null ? g : Cf(M), H = new ue(Le, Tt + "leave", x, i, u);
          H.target = yt, H.relatedTarget = D;
          var O = null, X = Ys(u);
          if (X === a) {
            var de = new ue(we, Tt + "enter", M, i, u);
            de.target = D, de.relatedTarget = yt, O = de;
          }
          kT(e, H, O, x, M);
        }
      }
    }
    function N(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var G = typeof Object.is == "function" ? Object.is : N;
    function ge(e, t) {
      if (G(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!wr.call(t, s) || !G(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Me(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ue(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Pe(e, t) {
      for (var a = Me(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Yi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Me(Ue(a));
      }
    }
    function er(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Mt(e, u, s, f, p);
    }
    function Mt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var x = null; g === t && (a === 0 || g.nodeType === Yi) && (f = s + a), g === i && (u === 0 || g.nodeType === Yi) && (p = s + u), g.nodeType === Yi && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
          _ = g, g = x;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Pl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Pe(e, f), g = Pe(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function vh(e) {
      return e && e.nodeType === Yi;
    }
    function mE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : vh(e) ? !1 : vh(t) ? mE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cT(e) {
      return e && e.ownerDocument && mE(e.ownerDocument.documentElement, e);
    }
    function fT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function yE() {
      for (var e = window, t = _a(); t instanceof e.HTMLIFrameElement; ) {
        if (fT(t))
          e = t.contentWindow;
        else
          return t;
        t = _a(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dT() {
      var e = yE();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? vT(e) : null
      };
    }
    function pT(e) {
      var t = yE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cT(a)) {
        i !== null && Ey(a) && hT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function vT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function hT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Pl(e, t);
    }
    var mT = On && "documentMode" in document && document.documentMode <= 11;
    function yT() {
      it("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, Cy = null, Zd = null, Ry = !1;
    function gT(e) {
      if ("selectionStart" in e && Ey(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function ST(e) {
      return e.window === e ? e.document : e.nodeType === Ii ? e : e.ownerDocument;
    }
    function gE(e, t, a) {
      var i = ST(a);
      if (!(Ry || mf == null || mf !== _a(i))) {
        var u = gT(mf);
        if (!Zd || !ge(Zd, u)) {
          Zd = u;
          var s = gh(Cy, "onSelect");
          if (s.length > 0) {
            var f = new Oi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = mf;
          }
        }
      }
    }
    function ET(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (Hs(p) || p.contentEditable === "true") && (mf = p, Cy = a, Zd = null);
          break;
        case "focusout":
          mf = null, Cy = null, Zd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, gE(e, i, u);
          break;
        case "selectionchange":
          if (mT)
            break;
        case "keydown":
        case "keyup":
          gE(e, i, u);
      }
    }
    function hh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: hh("Animation", "AnimationEnd"),
      animationiteration: hh("Animation", "AnimationIteration"),
      animationstart: hh("Animation", "AnimationStart"),
      transitionend: hh("Transition", "TransitionEnd")
    }, Ty = {}, SE = {};
    On && (SE = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function mh(e) {
      if (Ty[e])
        return Ty[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in SE)
          return Ty[e] = t[a];
      return e;
    }
    var EE = mh("animationend"), CE = mh("animationiteration"), RE = mh("animationstart"), TE = mh("transitionend"), xE = /* @__PURE__ */ new Map(), wE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      xE.set(e, t), it(t, [e]);
    }
    function CT() {
      for (var e = 0; e < wE.length; e++) {
        var t = wE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(EE, "onAnimationEnd"), _o(CE, "onAnimationIteration"), _o(RE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(TE, "onTransitionEnd");
    }
    function RT(e, t, a, i, u, s, f) {
      var p = xE.get(t);
      if (p !== void 0) {
        var v = Oi, y = t;
        switch (t) {
          case "keypress":
            if (jl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = ih;
            break;
          case "focusin":
            y = "focus", v = Ji;
            break;
          case "focusout":
            y = "blur", v = Ji;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ji;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Nu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = oh;
            break;
          case EE:
          case CE:
          case RE:
            v = eh;
            break;
          case TE:
            v = Aa;
            break;
          case "scroll":
            v = na;
            break;
          case "wheel":
            v = my;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = of;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = lh;
            break;
        }
        var g = (s & ba) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = _T(a, p, i.type, g, _);
          if (x.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: x
            });
          }
        }
      }
    }
    CT(), k(), Vs(), yT(), yy();
    function TT(e, t, a, i, u, s, f) {
      RT(e, t, a, i, u, s);
      var p = (s & fd) === 0;
      p && (w(e, t, a, i, u), kn(e, t, a, i, u), ET(e, t, a, i, u), dh(e, t, a, i, u));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], xy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function _E(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ei(i, t, void 0, e), e.currentTarget = null;
    }
    function xT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _E(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, x = g.currentTarget, M = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          _E(e, M, x), i = _;
        }
    }
    function bE(e, t) {
      for (var a = (t & ba) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        xT(s, f, a);
      }
      is();
    }
    function wT(e, t, a, i, u) {
      var s = dd(a), f = [];
      TT(f, e, i, a, s, t), bE(f, t);
    }
    function Sn(e, t) {
      xy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = tw(t), u = DT(e);
      i.has(u) || (kE(t, e, hc, a), i.add(u));
    }
    function wy(e, t, a) {
      xy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ba), kE(a, e, i, t);
    }
    var yh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[yh]) {
        e[yh] = !0, Je.forEach(function(a) {
          a !== "selectionchange" && (xy.has(a) || wy(a, !1, e), wy(a, !0, e));
        });
        var t = e.nodeType === Ii ? e : e.ownerDocument;
        t !== null && (t[yh] || (t[yh] = !0, wy("selectionchange", !1, t)));
      }
    }
    function kE(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      as && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Pd(e, t, s, f) : ta(e, t, s) : f !== void 0 ? Ro(e, t, s, f) : zs(e, t, s);
    }
    function DE(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
      var s = i;
      if (!(t & cd) && !(t & hc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === te || v === Re) {
              var y = p.stateNode.containerInfo;
              if (DE(y, f))
                break;
              if (v === Re)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === te || _ === Re) {
                    var x = g.stateNode.containerInfo;
                    if (DE(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Ys(y);
                if (M === null)
                  return;
                var A = M.tag;
                if (A === oe || A === $e) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      wv(function() {
        return wT(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _T(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, x = _.stateNode, M = _.tag;
        if (M === oe && x !== null && (g = x, p !== null)) {
          var A = xl(y, p);
          A != null && v.push(tp(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function gh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === oe && f !== null) {
          var v = f, y = xl(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = xl(u, t);
          g != null && i.push(tp(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== oe);
      return e || null;
    }
    function bT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = gf(s))
        u++;
      for (var f = 0, p = i; p; p = gf(p))
        f++;
      for (; u - f > 0; )
        a = gf(a), u--;
      for (; f - u > 0; )
        i = gf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = gf(a), i = gf(i);
      }
      return null;
    }
    function OE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === oe && g !== null) {
          var x = g;
          if (u) {
            var M = xl(p, s);
            M != null && f.unshift(tp(p, M, x));
          } else if (!u) {
            var A = xl(p, s);
            A != null && f.push(tp(p, A, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function kT(e, t, a, i, u) {
      var s = i && u ? bT(i, u) : null;
      i !== null && OE(e, t, i, s, !1), u !== null && a !== null && OE(e, a, u, s, !0);
    }
    function DT(e, t) {
      return e + "__bubble";
    }
    var ja = !1, np = "dangerouslySetInnerHTML", Sh = "suppressContentEditableWarning", bo = "suppressHydrationWarning", NE = "autoFocus", Ps = "children", Bs = "style", Eh = "__html", by, Ch, rp, LE, Rh, ME, zE;
    by = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ch = function(e, t) {
      ud(e, t), pc(e, t), Rv(e, t, {
        registrationNameDependencies: Ke,
        possibleRegistrationNames: et
      });
    }, ME = On && !document.documentMode, rp = function(e, t, a) {
      if (!ja) {
        var i = Th(a), u = Th(t);
        u !== i && (ja = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, LE = function(e) {
      if (!ja) {
        ja = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Rh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, zE = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OT = /\r\n?/g, NT = /\u0000|\uFFFD/g;
    function Th(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OT, `
`).replace(NT, "");
    }
    function xh(e, t, a, i) {
      var u = Th(t), s = Th(e);
      if (s !== u && (i && (ja || (ja = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ce))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function UE(e) {
      return e.nodeType === Ii ? e : e.ownerDocument;
    }
    function LT() {
    }
    function wh(e) {
      e.onclick = LT;
    }
    function MT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Bs)
            f && Object.freeze(f), mv(t, f);
          else if (s === np) {
            var p = f ? f[Eh] : void 0;
            p != null && av(t, p);
          } else if (s === Ps)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ro(t, f);
            } else typeof f == "number" && ro(t, "" + f);
          else s === Sh || s === bo || s === NE || (Ke.hasOwnProperty(s) ? f != null && (typeof f != "function" && Rh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && _r(t, s, f, u));
        }
    }
    function zT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Bs ? mv(e, f) : s === np ? av(e, f) : s === Ps ? ro(e, f) : _r(e, s, f, i);
      }
    }
    function UT(e, t, a, i) {
      var u, s = UE(a), f, p = i;
      if (p === Bi && (p = ed(e)), p === Bi) {
        if (u = Rl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Bi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !wr.call(by, e) && (by[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function AT(e, t) {
      return UE(t).createTextNode(e);
    }
    function jT(e, t, a, i) {
      var u = Rl(t, a);
      Ch(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            Sn(Jd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          Ja(e, a), s = no(e, a), Sn("invalid", e);
          break;
        case "option":
          wt(e, a), s = a;
          break;
        case "select":
          uu(e, a), s = qo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Kf(e, a), s = Xf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fc(t, s), MT(t, e, i, s, u), t) {
        case "input":
          Za(e), z(e, a, !1);
          break;
        case "textarea":
          Za(e), nv(e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          Gf(e, a);
          break;
        default:
          typeof s.onClick == "function" && wh(e);
          break;
      }
    }
    function FT(e, t, a, i, u) {
      Ch(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = no(e, a), p = no(e, i), s = [];
          break;
        case "select":
          f = qo(e, a), p = qo(e, i), s = [];
          break;
        case "textarea":
          f = Xf(e, a), p = Xf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && wh(e);
          break;
      }
      fc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Bs) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Ps || v === Sh || v === bo || v === NE || (Ke.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === M || x == null && M == null))
          if (v === Bs)
            if (x && Object.freeze(x), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && M[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === np) {
            var A = x ? x[Eh] : void 0, F = M ? M[Eh] : void 0;
            A != null && F !== A && (s = s || []).push(v, A);
          } else v === Ps ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === Sh || v === bo || (Ke.hasOwnProperty(v) ? (x != null && (typeof x != "function" && Rh(v, x), v === "onScroll" && Sn("scroll", e)), !s && M !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (ey(g, p[Bs]), (s = s || []).push(Bs, g)), s;
    }
    function HT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Rl(a, i), f = Rl(a, u);
      switch (zT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          tv(e, u);
          break;
        case "select":
          oc(e, u);
          break;
      }
    }
    function VT(e) {
      {
        var t = e.toLowerCase();
        return es.hasOwnProperty(t) && es[t] || null;
      }
    }
    function PT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Rl(t, a), Ch(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            Sn(Jd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          Ja(e, a), Sn("invalid", e);
          break;
        case "option":
          wt(e, a);
          break;
        case "select":
          uu(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Kf(e, a), Sn("invalid", e);
          break;
      }
      fc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var x = g[_].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var M = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var F = a[A];
          if (A === Ps)
            typeof F == "string" ? e.textContent !== F && (a[bo] !== !0 && xh(e.textContent, F, s, f), M = [Ps, F]) : typeof F == "number" && e.textContent !== "" + F && (a[bo] !== !0 && xh(e.textContent, F, s, f), M = [Ps, "" + F]);
          else if (Ke.hasOwnProperty(A))
            F != null && (typeof F != "function" && Rh(A, F), A === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ue = void 0, Le = en(A);
            if (a[bo] !== !0) {
              if (!(A === Sh || A === bo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === np) {
                  var we = e.innerHTML, Tt = F ? F[Eh] : void 0;
                  if (Tt != null) {
                    var yt = zE(e, Tt);
                    yt !== we && rp(A, we, yt);
                  }
                } else if (A === Bs) {
                  if (v.delete(A), ME) {
                    var D = Zm(F);
                    ue = e.getAttribute("style"), D !== ue && rp(A, ue, D);
                  }
                } else if (p && !b)
                  v.delete(A.toLowerCase()), ue = eu(e, A, F), F !== ue && rp(A, ue, F);
                else if (!vn(A, Le, p) && !Xn(A, F, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), ue = pl(e, A, F, Le);
                  else {
                    var O = i;
                    if (O === Bi && (O = ed(t)), O === Bi)
                      v.delete(A.toLowerCase());
                    else {
                      var X = VT(A);
                      X !== null && X !== A && (H = !0, v.delete(X)), v.delete(A);
                    }
                    ue = eu(e, A, F);
                  }
                  var de = b;
                  !de && F !== ue && !H && rp(A, ue, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[bo] !== !0 && LE(v), t) {
        case "input":
          Za(e), z(e, a, !0);
          break;
        case "textarea":
          Za(e), nv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && wh(e);
          break;
      }
      return M;
    }
    function BT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (ja)
          return;
        ja = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (ja)
          return;
        ja = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (ja)
          return;
        ja = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (t === "" || ja)
          return;
        ja = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function YT(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Gm(e, a);
          return;
        case "select":
          qf(e, a);
          return;
      }
    }
    var ap = function() {
    }, ip = function() {
    };
    {
      var IT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], AE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], $T = AE.concat(["button"]), QT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], jE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ip = function(e, t) {
        var a = Ze({}, e || jE), i = {
          tag: t
        };
        return AE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), $T.indexOf(t) !== -1 && (a.pTagInButtonScope = null), IT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var WT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return QT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, GT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, FE = {};
      ap = function(e, t, a) {
        a = a || jE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = WT(e, u) ? null : i, f = s ? null : GT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!FE[y]) {
            FE[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var _h = "suppressHydrationWarning", bh = "$", kh = "/$", lp = "$?", up = "$!", qT = "style", Ly = null, My = null;
    function XT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ii:
        case nd: {
          t = i === Ii ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : td(null, "");
          break;
        }
        default: {
          var s = i === Ln ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = td(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ip(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function KT(e, t, a) {
      {
        var i = e, u = td(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function fk(e) {
      return e;
    }
    function ZT(e) {
      Ly = Fn(), My = dT();
      var t = null;
      return Wn(!1), t;
    }
    function JT(e) {
      pT(My), Wn(Ly), Ly = null, My = null;
    }
    function ex(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = UT(e, t, a, s);
      return cp(u, y), Py(y, t), y;
    }
    function tx(e, t) {
      e.appendChild(t);
    }
    function nx(e, t, a, i, u) {
      switch (jT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function rx(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return FT(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ax(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = AT(e, t);
      return cp(i, s), s;
    }
    function ix() {
      var e = window.event;
      return e === void 0 ? Ma : af(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, lx = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, HE = typeof Promise == "function" ? Promise : void 0, ux = typeof queueMicrotask == "function" ? queueMicrotask : typeof HE < "u" ? function(e) {
      return HE.resolve(null).then(e).catch(ox);
    } : Uy;
    function ox(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function sx(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function cx(e, t, a, i, u, s) {
      HT(e, t, a, i, u), Py(e, u);
    }
    function VE(e) {
      ro(e, "");
    }
    function fx(e, t, a) {
      e.nodeValue = a;
    }
    function dx(e, t) {
      e.appendChild(t);
    }
    function px(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && wh(a);
    }
    function vx(e, t, a) {
      e.insertBefore(t, a);
    }
    function hx(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function mx(e, t) {
      e.removeChild(t);
    }
    function yx(e, t) {
      e.nodeType === Ln ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ln) {
          var s = u.data;
          if (s === kh)
            if (i === 0) {
              e.removeChild(u), ku(t);
              return;
            } else
              i--;
          else (s === bh || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      ku(t);
    }
    function gx(e, t) {
      e.nodeType === Ln ? jy(e.parentNode, t) : e.nodeType === Qr && jy(e, t), ku(e);
    }
    function Sx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Ex(e) {
      e.nodeValue = "";
    }
    function Cx(e, t) {
      e = e;
      var a = t[qT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function Rx(e, t) {
      e.nodeValue = t;
    }
    function Tx(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === Ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function xx(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function wx(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function _x(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function PE(e) {
      return e.data === lp;
    }
    function Fy(e) {
      return e.data === up;
    }
    function bx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function kx(e, t) {
      e._reactRetry = t;
    }
    function Dh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === Yi)
          break;
        if (t === Ln) {
          var a = e.data;
          if (a === bh || a === up || a === lp)
            break;
          if (a === kh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return Dh(e.nextSibling);
    }
    function Dx(e) {
      return Dh(e.firstChild);
    }
    function Ox(e) {
      return Dh(e.firstChild);
    }
    function Nx(e) {
      return Dh(e.nextSibling);
    }
    function Lx(e, t, a, i, u, s, f) {
      cp(s, e), Py(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ut) !== De;
      return PT(e, t, a, p, i, y, f);
    }
    function Mx(e, t, a, i) {
      return cp(a, e), a.mode & ut, BT(e, t);
    }
    function zx(e, t) {
      cp(t, e);
    }
    function Ux(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === kh) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === bh || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function BE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === bh || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === kh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Ax(e) {
      ku(e);
    }
    function jx(e) {
      ku(e);
    }
    function Fx(e) {
      return e !== "head" && e !== "body";
    }
    function Hx(e, t, a, i) {
      var u = !0;
      xh(t.nodeValue, a, i, u);
    }
    function Vx(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        xh(i.nodeValue, u, s, f);
      }
    }
    function Px(e, t) {
      t.nodeType === Qr ? ky(e, t) : t.nodeType === Ln || Dy(e, t);
    }
    function Bx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? ky(a, t) : t.nodeType === Ln || Dy(a, t));
      }
    }
    function Yx(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === Qr ? ky(a, i) : i.nodeType === Ln || Dy(a, i));
    }
    function Ix(e, t, a) {
      Oy(e, t);
    }
    function $x(e, t) {
      Ny(e, t);
    }
    function Qx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function Wx(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ny(a, t);
      }
    }
    function Gx(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Oy(a, i);
    }
    function qx(e, t, a, i, u) {
      (u || t[_h] !== !0) && Ny(a, i);
    }
    function Xx(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Kx(e) {
      ep(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, Hy = "__reactProps$" + Sf, sp = "__reactContainer$" + Sf, Vy = "__reactEvents$" + Sf, Zx = "__reactListeners$" + Sf, Jx = "__reactHandles$" + Sf;
    function ew(e) {
      delete e[Ef], delete e[Hy], delete e[Vy], delete e[Zx], delete e[Jx];
    }
    function cp(e, t) {
      t[Ef] = e;
    }
    function Oh(e, t) {
      t[sp] = e;
    }
    function YE(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function Ys(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = BE(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = BE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ko(e) {
      var t = e[Ef] || e[sp];
      return t && (t.tag === oe || t.tag === $e || t.tag === be || t.tag === te) ? t : null;
    }
    function Cf(e) {
      if (e.tag === oe || e.tag === $e)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Nh(e) {
      return e[Hy] || null;
    }
    function Py(e, t) {
      e[Hy] = t;
    }
    function tw(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var IE = {}, $E = L.ReactDebugCurrentFrame;
    function Lh(e) {
      if (e) {
        var t = e._owner, a = Hi(e.type, e._source, t ? t.type : null);
        $E.setExtraStackFrame(a);
      } else
        $E.setExtraStackFrame(null);
    }
    function tl(e, t, a, i, u) {
      {
        var s = Function.call.bind(wr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Lh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Lh(null)), p instanceof Error && !(p.message in IE) && (IE[p.message] = !0, Lh(u), S("Failed %s type: %s", a, p.message), Lh(null));
          }
      }
    }
    var By = [], Mh;
    Mh = [];
    var zu = -1;
    function Do(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (zu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Mh[zu] && S("Unexpected Fiber popped."), e.current = By[zu], By[zu] = null, Mh[zu] = null, zu--;
    }
    function aa(e, t, a) {
      zu++, By[zu] = e.current, Mh[zu] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var li = {};
    Object.freeze(li);
    var Uu = Do(li), Bl = Do(!1), Iy = li;
    function Rf(e, t, a) {
      return a && Yl(t) ? Iy : Uu.current;
    }
    function QE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Tf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Be(e) || "Unknown";
          tl(i, s, "context", p);
        }
        return u && QE(e, t, s), s;
      }
    }
    function zh() {
      return Bl.current;
    }
    function Yl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Uh(e) {
      ra(Bl, e), ra(Uu, e);
    }
    function $y(e) {
      ra(Bl, e), ra(Uu, e);
    }
    function WE(e, t, a) {
      {
        if (Uu.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(Uu, t, e), aa(Bl, a, e);
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Be(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Be(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Be(e) || "Unknown";
          tl(u, f, "child context", v);
        }
        return Ze({}, a, f);
      }
    }
    function Ah(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Iy = Uu.current, aa(Uu, a, e), aa(Bl, Bl.current, e), !0;
      }
    }
    function qE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = GE(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Bl, e), ra(Uu, e), aa(Uu, u, e), aa(Bl, a, e);
        } else
          ra(Bl, e), aa(Bl, a, e);
      }
    }
    function nw(e) {
      {
        if (!vu(e) || e.tag !== he)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case he: {
              var a = t.type;
              if (Yl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Oo = 0, jh = 1, Au = null, Qy = !1, Wy = !1;
    function XE(e) {
      Au === null ? Au = [e] : Au.push(e);
    }
    function rw(e) {
      Qy = !0, XE(e);
    }
    function KE() {
      Qy && No();
    }
    function No() {
      if (!Wy && Au !== null) {
        Wy = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = Au;
          for (jn(Nr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Au = null, Qy = !1;
        } catch (s) {
          throw Au !== null && (Au = Au.slice(e + 1)), vd(os, No), s;
        } finally {
          jn(t), Wy = !1;
        }
      }
      return null;
    }
    var xf = [], wf = 0, Fh = null, Hh = 0, Ni = [], Li = 0, Is = null, ju = 1, Fu = "";
    function aw(e) {
      return Qs(), (e.flags & Ci) !== ke;
    }
    function iw(e) {
      return Qs(), Hh;
    }
    function lw() {
      var e = Fu, t = ju, a = t & ~uw(t);
      return a.toString(32) + e;
    }
    function $s(e, t) {
      Qs(), xf[wf++] = Hh, xf[wf++] = Fh, Fh = e, Hh = t;
    }
    function ZE(e, t, a) {
      Qs(), Ni[Li++] = ju, Ni[Li++] = Fu, Ni[Li++] = Is, Is = e;
      var i = ju, u = Fu, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), x = f >> y, M = s - y, A = Vh(t) + M, F = p << M, ue = F | x, Le = _ + u;
        ju = 1 << A | ue, Fu = Le;
      } else {
        var we = p << s, Tt = we | f, yt = u;
        ju = 1 << v | Tt, Fu = yt;
      }
    }
    function Gy(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        $s(e, a), ZE(e, a, i);
      }
    }
    function Vh(e) {
      return 32 - Un(e);
    }
    function uw(e) {
      return 1 << Vh(e) - 1;
    }
    function qy(e) {
      for (; e === Fh; )
        Fh = xf[--wf], xf[wf] = null, Hh = xf[--wf], xf[wf] = null;
      for (; e === Is; )
        Is = Ni[--Li], Ni[Li] = null, Fu = Ni[--Li], Ni[Li] = null, ju = Ni[--Li], Ni[Li] = null;
    }
    function ow() {
      return Qs(), Is !== null ? {
        id: ju,
        overflow: Fu
      } : null;
    }
    function sw(e, t) {
      Qs(), Ni[Li++] = ju, Ni[Li++] = Fu, Ni[Li++] = Is, ju = t.id, Fu = t.overflow, Is = e;
    }
    function Qs() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, Mi = null, nl = !1, Ws = !1, Lo = null;
    function cw() {
      nl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function JE() {
      Ws = !0;
    }
    function fw() {
      return Ws;
    }
    function dw(e) {
      var t = e.stateNode.containerInfo;
      return Mi = Ox(t), Ur = e, nl = !0, Lo = null, Ws = !1, !0;
    }
    function pw(e, t, a) {
      return Mi = Nx(t), Ur = e, nl = !0, Lo = null, Ws = !1, a !== null && sw(e, a), !0;
    }
    function eC(e, t) {
      switch (e.tag) {
        case te: {
          Px(e.stateNode.containerInfo, t);
          break;
        }
        case oe: {
          var a = (e.mode & ut) !== De;
          Yx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case be: {
          var i = e.memoizedState;
          i.dehydrated !== null && Bx(i.dehydrated, t);
          break;
        }
      }
    }
    function tC(e, t) {
      eC(e, t);
      var a = y1();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ka) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Ws)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case oe:
                var i = t.type;
                t.pendingProps, Ix(a, i);
                break;
              case $e:
                var u = t.pendingProps;
                $x(a, u);
                break;
            }
            break;
          }
          case oe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case oe: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ut) !== De;
                Gx(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case $e: {
                var _ = t.pendingProps, x = (e.mode & ut) !== De;
                qx(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case be: {
            var M = e.memoizedState, A = M.dehydrated;
            if (A !== null) switch (t.tag) {
              case oe:
                var F = t.type;
                t.pendingProps, Qx(A, F);
                break;
              case $e:
                var ue = t.pendingProps;
                Wx(A, ue);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function nC(e, t) {
      t.flags = t.flags & ~Gr | mn, Xy(e, t);
    }
    function rC(e, t) {
      switch (e.tag) {
        case oe: {
          var a = e.type;
          e.pendingProps;
          var i = xx(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, Mi = Dx(i), !0) : !1;
        }
        case $e: {
          var u = e.pendingProps, s = wx(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, Mi = null, !0) : !1;
        }
        case be: {
          var f = _x(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ow(),
              retryLane: Zr
            };
            e.memoizedState = p;
            var v = g1(f);
            return v.return = e, e.child = v, Ur = e, Mi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ky(e) {
      return (e.mode & ut) !== De && (e.flags & _e) === ke;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Jy(e) {
      if (nl) {
        var t = Mi;
        if (!t) {
          Ky(e) && (Xy(Ur, e), Zy()), nC(Ur, e), nl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!rC(e, t)) {
          Ky(e) && (Xy(Ur, e), Zy()), t = op(a);
          var i = Ur;
          if (!t || !rC(e, t)) {
            nC(Ur, e), nl = !1, Ur = e;
            return;
          }
          tC(i, a);
        }
      }
    }
    function vw(e, t, a) {
      var i = e.stateNode, u = !Ws, s = Lx(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function hw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Mx(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & ut) !== De;
              Hx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case oe: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ut) !== De;
              Vx(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function mw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      zx(a, e);
    }
    function yw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Ux(a);
    }
    function aC(e) {
      for (var t = e.return; t !== null && t.tag !== oe && t.tag !== te && t.tag !== be; )
        t = t.return;
      Ur = t;
    }
    function Ph(e) {
      if (e !== Ur)
        return !1;
      if (!nl)
        return aC(e), nl = !0, !1;
      if (e.tag !== te && (e.tag !== oe || Fx(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = Mi;
        if (t)
          if (Ky(e))
            iC(e), Zy();
          else
            for (; t; )
              tC(e, t), t = op(t);
      }
      return aC(e), e.tag === be ? Mi = yw(e) : Mi = Ur ? op(e.stateNode) : null, !0;
    }
    function gw() {
      return nl && Mi !== null;
    }
    function iC(e) {
      for (var t = Mi; t; )
        eC(e, t), t = op(t);
    }
    function _f() {
      Ur = null, Mi = null, nl = !1, Ws = !1;
    }
    function lC() {
      Lo !== null && (J0(Lo), Lo = null);
    }
    function Ar() {
      return nl;
    }
    function eg(e) {
      Lo === null ? Lo = [e] : Lo.push(e);
    }
    var Sw = L.ReactCurrentBatchConfig, Ew = null;
    function Cw() {
      return Sw.transition;
    }
    var rl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Rw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, Gs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], qs = /* @__PURE__ */ new Set();
      rl.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, rl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(x) {
          e.add(Be(x) || "Component"), qs.add(x.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(x) {
          t.add(Be(x) || "Component"), qs.add(x.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          a.add(Be(x) || "Component"), qs.add(x.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          i.add(Be(x) || "Component"), qs.add(x.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          u.add(Be(x) || "Component"), qs.add(x.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(x) {
          s.add(Be(x) || "Component"), qs.add(x.type);
        }), yp = []), t.size > 0) {
          var f = Gs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Gs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Gs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Gs(e);
          dt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Gs(a);
          dt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Gs(u);
          dt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Bh = /* @__PURE__ */ new Map(), uC = /* @__PURE__ */ new Set();
      rl.recordLegacyContextWarning = function(e, t) {
        var a = Rw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!uC.has(e.type)) {
          var i = Bh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Bh.set(a, i)), i.push(e));
        }
      }, rl.flushLegacyContextWarning = function() {
        Bh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Be(s) || "Component"), uC.add(s.type);
            });
            var u = Gs(i);
            try {
              $t(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              sn();
            }
          }
        });
      }, rl.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Bh = /* @__PURE__ */ new Map();
      };
    }
    var tg, ng, rg, ag, ig, oC = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, oC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Be(t) || "Component";
        ag[a] || (ag[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Tw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Gt || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== he) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Tw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Be(e) || "Component";
          rg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), rg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== he)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          si(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var x = v.refs;
            _ === null ? delete x[y] : x[y] = _;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ih(e) {
      {
        var t = Be(e) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function sC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function cC(e) {
      function t(D, H) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [H], D.flags |= ka) : O.push(H);
        }
      }
      function a(D, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, H) {
        for (var O = /* @__PURE__ */ new Map(), X = H; X !== null; )
          X.key !== null ? O.set(X.key, X) : O.set(X.index, X), X = X.sibling;
        return O;
      }
      function u(D, H) {
        var O = ac(D, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, H, O) {
        if (D.index = O, !e)
          return D.flags |= Ci, H;
        var X = D.alternate;
        if (X !== null) {
          var de = X.index;
          return de < H ? (D.flags |= mn, H) : de;
        } else
          return D.flags |= mn, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= mn), D;
      }
      function p(D, H, O, X) {
        if (H === null || H.tag !== $e) {
          var de = eE(O, D.mode, X);
          return de.return = D, de;
        } else {
          var se = u(H, O);
          return se.return = D, se;
        }
      }
      function v(D, H, O, X) {
        var de = O.type;
        if (de === fi)
          return g(D, H, O.props.children, X, O.key);
        if (H !== null && (H.elementType === de || // Keep this check inline so it only runs on the false path:
        hR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof de == "object" && de !== null && de.$$typeof === Ye && sC(de) === H.type)) {
          var se = u(H, O.props);
          return se.ref = gp(D, H, O), se.return = D, se._debugSource = O._source, se._debugOwner = O._owner, se;
        }
        var Ve = JS(O, D.mode, X);
        return Ve.ref = gp(D, H, O), Ve.return = D, Ve;
      }
      function y(D, H, O, X) {
        if (H === null || H.tag !== Re || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var de = tE(O, D.mode, X);
          return de.return = D, de;
        } else {
          var se = u(H, O.children || []);
          return se.return = D, se;
        }
      }
      function g(D, H, O, X, de) {
        if (H === null || H.tag !== St) {
          var se = Yo(O, D.mode, X, de);
          return se.return = D, se;
        } else {
          var Ve = u(H, O);
          return Ve.return = D, Ve;
        }
      }
      function _(D, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var X = eE("" + H, D.mode, O);
          return X.return = D, X;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case br: {
              var de = JS(H, D.mode, O);
              return de.ref = gp(D, null, H), de.return = D, de;
            }
            case rr: {
              var se = tE(H, D.mode, O);
              return se.return = D, se;
            }
            case Ye: {
              var Ve = H._payload, We = H._init;
              return _(D, We(Ve), O);
            }
          }
          if (nt(H) || qe(H)) {
            var Xt = Yo(H, D.mode, O, null);
            return Xt.return = D, Xt;
          }
          Yh(D, H);
        }
        return typeof H == "function" && Ih(D), null;
      }
      function x(D, H, O, X) {
        var de = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return de !== null ? null : p(D, H, "" + O, X);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case br:
              return O.key === de ? v(D, H, O, X) : null;
            case rr:
              return O.key === de ? y(D, H, O, X) : null;
            case Ye: {
              var se = O._payload, Ve = O._init;
              return x(D, H, Ve(se), X);
            }
          }
          if (nt(O) || qe(O))
            return de !== null ? null : g(D, H, O, X, null);
          Yh(D, O);
        }
        return typeof O == "function" && Ih(D), null;
      }
      function M(D, H, O, X, de) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var se = D.get(O) || null;
          return p(H, se, "" + X, de);
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case br: {
              var Ve = D.get(X.key === null ? O : X.key) || null;
              return v(H, Ve, X, de);
            }
            case rr: {
              var We = D.get(X.key === null ? O : X.key) || null;
              return y(H, We, X, de);
            }
            case Ye:
              var Xt = X._payload, zt = X._init;
              return M(D, H, O, zt(Xt), de);
          }
          if (nt(X) || qe(X)) {
            var Gn = D.get(O) || null;
            return g(H, Gn, X, de, null);
          }
          Yh(H, X);
        }
        return typeof X == "function" && Ih(H), null;
      }
      function A(D, H, O) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case br:
            case rr:
              oC(D, O);
              var X = D.key;
              if (typeof X != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(X);
                break;
              }
              if (!H.has(X)) {
                H.add(X);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", X);
              break;
            case Ye:
              var de = D._payload, se = D._init;
              A(se(de), H, O);
              break;
          }
        }
        return H;
      }
      function F(D, H, O, X) {
        for (var de = null, se = 0; se < O.length; se++) {
          var Ve = O[se];
          de = A(Ve, de, D);
        }
        for (var We = null, Xt = null, zt = H, Gn = 0, Ut = 0, Vn = null; zt !== null && Ut < O.length; Ut++) {
          zt.index > Ut ? (Vn = zt, zt = null) : Vn = zt.sibling;
          var la = x(D, zt, O[Ut], X);
          if (la === null) {
            zt === null && (zt = Vn);
            break;
          }
          e && zt && la.alternate === null && t(D, zt), Gn = s(la, Gn, Ut), Xt === null ? We = la : Xt.sibling = la, Xt = la, zt = Vn;
        }
        if (Ut === O.length) {
          if (a(D, zt), Ar()) {
            var Yr = Ut;
            $s(D, Yr);
          }
          return We;
        }
        if (zt === null) {
          for (; Ut < O.length; Ut++) {
            var oi = _(D, O[Ut], X);
            oi !== null && (Gn = s(oi, Gn, Ut), Xt === null ? We = oi : Xt.sibling = oi, Xt = oi);
          }
          if (Ar()) {
            var Ca = Ut;
            $s(D, Ca);
          }
          return We;
        }
        for (var Ra = i(D, zt); Ut < O.length; Ut++) {
          var ua = M(Ra, D, Ut, O[Ut], X);
          ua !== null && (e && ua.alternate !== null && Ra.delete(ua.key === null ? Ut : ua.key), Gn = s(ua, Gn, Ut), Xt === null ? We = ua : Xt.sibling = ua, Xt = ua);
        }
        if (e && Ra.forEach(function($f) {
          return t(D, $f);
        }), Ar()) {
          var $u = Ut;
          $s(D, $u);
        }
        return We;
      }
      function ue(D, H, O, X) {
        var de = qe(O);
        if (typeof de != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ng || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), O.entries === de && (tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var se = de.call(O);
          if (se)
            for (var Ve = null, We = se.next(); !We.done; We = se.next()) {
              var Xt = We.value;
              Ve = A(Xt, Ve, D);
            }
        }
        var zt = de.call(O);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, Ut = null, Vn = H, la = 0, Yr = 0, oi = null, Ca = zt.next(); Vn !== null && !Ca.done; Yr++, Ca = zt.next()) {
          Vn.index > Yr ? (oi = Vn, Vn = null) : oi = Vn.sibling;
          var Ra = x(D, Vn, Ca.value, X);
          if (Ra === null) {
            Vn === null && (Vn = oi);
            break;
          }
          e && Vn && Ra.alternate === null && t(D, Vn), la = s(Ra, la, Yr), Ut === null ? Gn = Ra : Ut.sibling = Ra, Ut = Ra, Vn = oi;
        }
        if (Ca.done) {
          if (a(D, Vn), Ar()) {
            var ua = Yr;
            $s(D, ua);
          }
          return Gn;
        }
        if (Vn === null) {
          for (; !Ca.done; Yr++, Ca = zt.next()) {
            var $u = _(D, Ca.value, X);
            $u !== null && (la = s($u, la, Yr), Ut === null ? Gn = $u : Ut.sibling = $u, Ut = $u);
          }
          if (Ar()) {
            var $f = Yr;
            $s(D, $f);
          }
          return Gn;
        }
        for (var Xp = i(D, Vn); !Ca.done; Yr++, Ca = zt.next()) {
          var Kl = M(Xp, D, Yr, Ca.value, X);
          Kl !== null && (e && Kl.alternate !== null && Xp.delete(Kl.key === null ? Yr : Kl.key), la = s(Kl, la, Yr), Ut === null ? Gn = Kl : Ut.sibling = Kl, Ut = Kl);
        }
        if (e && Xp.forEach(function(q1) {
          return t(D, q1);
        }), Ar()) {
          var G1 = Yr;
          $s(D, G1);
        }
        return Gn;
      }
      function Le(D, H, O, X) {
        if (H !== null && H.tag === $e) {
          a(D, H.sibling);
          var de = u(H, O);
          return de.return = D, de;
        }
        a(D, H);
        var se = eE(O, D.mode, X);
        return se.return = D, se;
      }
      function we(D, H, O, X) {
        for (var de = O.key, se = H; se !== null; ) {
          if (se.key === de) {
            var Ve = O.type;
            if (Ve === fi) {
              if (se.tag === St) {
                a(D, se.sibling);
                var We = u(se, O.props.children);
                return We.return = D, We._debugSource = O._source, We._debugOwner = O._owner, We;
              }
            } else if (se.elementType === Ve || // Keep this check inline so it only runs on the false path:
            hR(se, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ve == "object" && Ve !== null && Ve.$$typeof === Ye && sC(Ve) === se.type) {
              a(D, se.sibling);
              var Xt = u(se, O.props);
              return Xt.ref = gp(D, se, O), Xt.return = D, Xt._debugSource = O._source, Xt._debugOwner = O._owner, Xt;
            }
            a(D, se);
            break;
          } else
            t(D, se);
          se = se.sibling;
        }
        if (O.type === fi) {
          var zt = Yo(O.props.children, D.mode, X, O.key);
          return zt.return = D, zt;
        } else {
          var Gn = JS(O, D.mode, X);
          return Gn.ref = gp(D, H, O), Gn.return = D, Gn;
        }
      }
      function Tt(D, H, O, X) {
        for (var de = O.key, se = H; se !== null; ) {
          if (se.key === de)
            if (se.tag === Re && se.stateNode.containerInfo === O.containerInfo && se.stateNode.implementation === O.implementation) {
              a(D, se.sibling);
              var Ve = u(se, O.children || []);
              return Ve.return = D, Ve;
            } else {
              a(D, se);
              break;
            }
          else
            t(D, se);
          se = se.sibling;
        }
        var We = tE(O, D.mode, X);
        return We.return = D, We;
      }
      function yt(D, H, O, X) {
        var de = typeof O == "object" && O !== null && O.type === fi && O.key === null;
        if (de && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case br:
              return f(we(D, H, O, X));
            case rr:
              return f(Tt(D, H, O, X));
            case Ye:
              var se = O._payload, Ve = O._init;
              return yt(D, H, Ve(se), X);
          }
          if (nt(O))
            return F(D, H, O, X);
          if (qe(O))
            return ue(D, H, O, X);
          Yh(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(D, H, "" + O, X)) : (typeof O == "function" && Ih(D), a(D, H));
      }
      return yt;
    }
    var bf = cC(!0), fC = cC(!1);
    function xw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function ww(e, t) {
      for (var a = e.child; a !== null; )
        d1(a, t), a = a.sibling;
    }
    var lg = Do(null), ug;
    ug = {};
    var $h = null, kf = null, og = null, Qh = !1;
    function Wh() {
      $h = null, kf = null, og = null, Qh = !1;
    }
    function dC() {
      Qh = !0;
    }
    function pC() {
      Qh = !1;
    }
    function vC(e, t, a) {
      aa(lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ug && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ug;
    }
    function sg(e, t) {
      var a = lg.current;
      ra(lg, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (bu(i.childLanes, t) ? u !== null && !bu(u.childLanes, t) && (u.childLanes = Xe(u.childLanes, t)) : (i.childLanes = Xe(i.childLanes, t), u !== null && (u.childLanes = Xe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _w(e, t, a) {
      bw(e, t, a);
    }
    function bw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === he) {
                var p = Rs(a), v = Hu(Kt, p);
                v.tag = qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = Xe(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = Xe(x.lanes, a)), cg(i.return, a, e), s.lanes = Xe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === pt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Zt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Xe(M.lanes, a);
          var A = M.alternate;
          A !== null && (A.lanes = Xe(A.lanes, a)), cg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Df(e, t) {
      $h = e, kf = null, og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Jr(a.lanes, t) && Mp(), a.firstContext = null);
      }
    }
    function tr(e) {
      Qh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if ($h === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, $h.dependencies = {
            lanes: $,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Xs = null;
    function fg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function kw() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Xs = null;
      }
    }
    function hC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Gh(e, i);
    }
    function Dw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ow(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Gh(e, i);
    }
    function Fa(e, t) {
      return Gh(e, t);
    }
    var Nw = Gh;
    function Gh(e, t) {
      e.lanes = Xe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Xe(a.lanes, t)), a === null && (e.flags & (mn | Gr)) !== ke && fR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Xe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Xe(a.childLanes, t) : (u.flags & (mn | Gr)) !== ke && fR(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var mC = 0, yC = 1, qh = 2, dg = 3, Xh = !1, pg, Kh;
    pg = !1, Kh = null;
    function vg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: $
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function gC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Hu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: mC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Mo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Kh === u && !pg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), Db()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Nw(e, a);
      } else
        return Ow(e, u, t, a);
    }
    function Zh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Nd(a)) {
          var s = u.lanes;
          s = Md(s, e.pendingLanes);
          var f = Xe(s, a);
          u.lanes = f, ef(e, f);
        }
      }
    }
    function hg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Lw(e, t, a, i, u, s) {
      switch (a.tag) {
        case yC: {
          var f = a.payload;
          if (typeof f == "function") {
            dC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              pC();
            }
            return p;
          }
          return f;
        }
        case dg:
          e.flags = e.flags & ~Kn | _e;
        case mC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            dC(), y = v.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              pC();
            }
          } else
            y = v;
          return y == null ? i : Ze({}, i, y);
        }
        case qh:
          return Xh = !0, i;
      }
      return i;
    }
    function Jh(e, t, a, i) {
      var u = e.updateQueue;
      Xh = !1, Kh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, x = _.lastBaseUpdate;
          x !== f && (x === null ? _.firstBaseUpdate = y : x.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, A = $, F = null, ue = null, Le = null, we = s;
        do {
          var Tt = we.lane, yt = we.eventTime;
          if (bu(i, Tt)) {
            if (Le !== null) {
              var H = {
                eventTime: yt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                tag: we.tag,
                payload: we.payload,
                callback: we.callback,
                next: null
              };
              Le = Le.next = H;
            }
            M = Lw(e, u, we, M, t, a);
            var O = we.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            we.lane !== kt) {
              e.flags |= rn;
              var X = u.effects;
              X === null ? u.effects = [we] : X.push(we);
            }
          } else {
            var D = {
              eventTime: yt,
              lane: Tt,
              tag: we.tag,
              payload: we.payload,
              callback: we.callback,
              next: null
            };
            Le === null ? (ue = Le = D, F = M) : Le = Le.next = D, A = Xe(A, Tt);
          }
          if (we = we.next, we === null) {
            if (p = u.shared.pending, p === null)
              break;
            var de = p, se = de.next;
            de.next = null, we = se, u.lastBaseUpdate = de, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (F = M), u.baseState = F, u.firstBaseUpdate = ue, u.lastBaseUpdate = Le;
        var Ve = u.shared.interleaved;
        if (Ve !== null) {
          var We = Ve;
          do
            A = Xe(A, We.lane), We = We.next;
          while (We !== Ve);
        } else s === null && (u.shared.lanes = $);
        $p(A), e.lanes = A, e.memoizedState = M;
      }
      Kh = null;
    }
    function Mw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function SC() {
      Xh = !1;
    }
    function em() {
      return Xh;
    }
    function EC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Mw(f, a));
        }
    }
    var Sp = {}, zo = Do(Sp), Ep = Do(Sp), tm = Do(Sp);
    function nm(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function CC() {
      var e = nm(tm.current);
      return e;
    }
    function mg(e, t) {
      aa(tm, t, e), aa(Ep, e, e), aa(zo, Sp, e);
      var a = XT(t);
      ra(zo, e), aa(zo, a, e);
    }
    function Of(e) {
      ra(zo, e), ra(Ep, e), ra(tm, e);
    }
    function yg() {
      var e = nm(zo.current);
      return e;
    }
    function RC(e) {
      nm(tm.current);
      var t = nm(zo.current), a = KT(t, e.type);
      t !== a && (aa(Ep, e, e), aa(zo, a, e));
    }
    function gg(e) {
      Ep.current === e && (ra(zo, e), ra(Ep, e));
    }
    var zw = 0, TC = 1, xC = 1, Cp = 2, al = Do(zw);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function Nf(e) {
      return e & TC;
    }
    function Eg(e, t) {
      return e & TC | t;
    }
    function Uw(e, t) {
      return e | t;
    }
    function Uo(e, t) {
      aa(al, t, e);
    }
    function Lf(e) {
      ra(al, e);
    }
    function Aw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function rm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === be) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || PE(i) || Fy(i))
              return t;
          }
        } else if (t.tag === ln && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & _e) !== ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ha = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), Il = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), Cg = [];
    function Rg() {
      for (var e = 0; e < Cg.length; e++) {
        var t = Cg[e];
        t._workInProgressVersionPrimary = null;
      }
      Cg.length = 0;
    }
    function jw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var fe = L.ReactCurrentDispatcher, Rp = L.ReactCurrentBatchConfig, Tg, Mf;
    Tg = /* @__PURE__ */ new Set();
    var Ks = $, qt = null, dr = null, pr = null, am = !1, Tp = !1, xp = 0, Fw = 0, Hw = 25, B = null, zi = null, Ao = -1, xg = !1;
    function Vt() {
      {
        var e = B;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function ne() {
      {
        var e = B;
        zi !== null && (Ao++, zi[Ao] !== e && Vw(e));
      }
    }
    function zf(e) {
      e != null && !nt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function Vw(e) {
      {
        var t = Be(qt);
        if (!Tg.has(t) && (Tg.add(t), zi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ao; u++) {
            for (var s = zi[u], f = u === Ao ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function wg(e, t) {
      if (xg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!G(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, u, s) {
      Ks = s, qt = t, zi = e !== null ? e._debugHookTypes : null, Ao = -1, xg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? fe.current = QC : zi !== null ? fe.current = $C : fe.current = IC;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, xp = 0, p >= Hw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, xg = !1, dr = null, pr = null, t.updateQueue = null, Ao = -1, fe.current = WC, f = a(i, u);
        } while (Tp);
      }
      fe.current = ym, t._debugHookTypes = zi;
      var v = dr !== null && dr.next !== null;
      if (Ks = $, qt = null, dr = null, pr = null, B = null, zi = null, Ao = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ut) !== De && S("Internal React error: Expected static flag was missing. Please notify the React team."), am = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function wC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Lt) !== De ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ts(e.lanes, a);
    }
    function _C() {
      if (fe.current = ym, am) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        am = !1;
      }
      Ks = $, qt = null, dr = null, pr = null, zi = null, Ao = -1, B = null, HC = !1, Tp = !1, xp = 0;
    }
    function $l() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? qt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ui() {
      var e;
      if (dr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = qt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? qt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function bC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function _g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function bg(e, t, a) {
      var i = $l(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Iw.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, x = null, M = null, A = null, F = g;
        do {
          var ue = F.lane;
          if (bu(Ks, ue)) {
            if (A !== null) {
              var we = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              A = A.next = we;
            }
            if (F.hasEagerState)
              _ = F.eagerState;
            else {
              var Tt = F.action;
              _ = e(_, Tt);
            }
          } else {
            var Le = {
              lane: ue,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (M = A = Le, x = _) : A = A.next = Le, qt.lanes = Xe(qt.lanes, ue), $p(ue);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? x = _ : A.next = M, G(_, i.memoizedState) || Mp(), i.memoizedState = _, i.baseState = x, i.baseQueue = A, u.lastRenderedState = _;
      }
      var yt = u.interleaved;
      if (yt !== null) {
        var D = yt;
        do {
          var H = D.lane;
          qt.lanes = Xe(qt.lanes, H), $p(H), D = D.next;
        } while (D !== yt);
      } else f === null && (u.lanes = $);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Dg(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        G(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function dk(e, t, a) {
    }
    function pk(e, t, a) {
    }
    function Og(e, t, a) {
      var i = qt, u = $l(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Mf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      } else {
        if (s = t(), !Mf) {
          var p = t();
          G(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
        }
        var v = Am();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Zc(v, Ks) || kC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, sm(OC.bind(null, i, y, e), [e]), i.flags |= Wr, wp(cr | jr, DC.bind(null, i, y, s, t), void 0, null), s;
    }
    function im(e, t, a) {
      var i = qt, u = Ui(), s = t();
      if (!Mf) {
        var f = t();
        G(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      }
      var p = u.memoizedState, v = !G(p, s);
      v && (u.memoizedState = s, Mp());
      var y = u.queue;
      if (bp(OC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Wr, wp(cr | jr, DC.bind(null, i, y, s, t), void 0, null);
        var g = Am();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Zc(g, Ks) || kC(i, t, s);
      }
      return s;
    }
    function kC(e, t, a) {
      e.flags |= po;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = bC(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function DC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, NC(t) && LC(e);
    }
    function OC(e, t, a) {
      var i = function() {
        NC(t) && LC(e);
      };
      return a(i);
    }
    function NC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !G(a, i);
      } catch {
        return !0;
      }
    }
    function LC(e) {
      var t = Fa(e, je);
      t !== null && yr(t, e, je, Kt);
    }
    function lm(e) {
      var t = $l();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: _g,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = $w.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function Ng(e) {
      return kg(_g);
    }
    function Lg(e) {
      return Dg(_g);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = bC(), qt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Mg(e) {
      var t = $l();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function um(e) {
      var t = Ui();
      return t.memoizedState;
    }
    function _p(e, t, a, i) {
      var u = $l(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = wp(cr | t, a, void 0, s);
    }
    function om(e, t, a, i) {
      var u = Ui(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (wg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = wp(cr | t, a, f, s);
    }
    function sm(e, t) {
      return (qt.mode & Lt) !== De ? _p(Ri | Wr | wc, jr, e, t) : _p(Wr | wc, jr, e, t);
    }
    function bp(e, t) {
      return om(Wr, jr, e, t);
    }
    function zg(e, t) {
      return _p(Et, Il, e, t);
    }
    function cm(e, t) {
      return om(Et, Il, e, t);
    }
    function Ug(e, t) {
      var a = Et;
      return a |= Qi, (qt.mode & Lt) !== De && (a |= _l), _p(a, fr, e, t);
    }
    function fm(e, t) {
      return om(Et, fr, e, t);
    }
    function MC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Ag(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Et;
      return u |= Qi, (qt.mode & Lt) !== De && (u |= _l), _p(u, fr, MC.bind(null, t, e), i);
    }
    function dm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return om(Et, fr, MC.bind(null, t, e), i);
    }
    function Pw(e, t) {
    }
    var pm = Pw;
    function jg(e, t) {
      var a = $l(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function vm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (wg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fg(e, t) {
      var a = $l(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function hm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (wg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Hg(e) {
      var t = $l();
      return t.memoizedState = e, e;
    }
    function zC(e) {
      var t = Ui(), a = dr, i = a.memoizedState;
      return AC(t, i, e);
    }
    function UC(e) {
      var t = Ui();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return AC(t, a, e);
    }
    function AC(e, t, a) {
      var i = !Dd(Ks);
      if (i) {
        if (!G(a, t)) {
          var u = Ld();
          qt.lanes = Xe(qt.lanes, u), $p(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function Bw(e, t, a) {
      var i = Ua();
      jn(Qv(i, _i)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && dt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Vg() {
      var e = lm(!1), t = e[0], a = e[1], i = Bw.bind(null, a), u = $l();
      return u.memoizedState = i, [t, i];
    }
    function jC() {
      var e = Ng(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function FC() {
      var e = Lg(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var HC = !1;
    function Yw() {
      return HC;
    }
    function Pg() {
      var e = $l(), t = Am(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = lw();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Fw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function mm() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function Iw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VC(e))
        PC(t, u);
      else {
        var s = hC(e, t, u, i);
        if (s !== null) {
          var f = Ea();
          yr(s, e, i, f), BC(s, t, i);
        }
      }
      YC(e, i);
    }
    function $w(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VC(e))
        PC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === $ && (s === null || s.lanes === $)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = fe.current, fe.current = il;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, G(y, v)) {
                Dw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              fe.current = p;
            }
          }
        }
        var g = hC(e, t, u, i);
        if (g !== null) {
          var _ = Ea();
          yr(g, e, i, _), BC(g, t, i);
        }
      }
      YC(e, i);
    }
    function VC(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function PC(e, t) {
      Tp = am = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function BC(e, t, a) {
      if (Nd(a)) {
        var i = t.lanes;
        i = Md(i, e.pendingLanes);
        var u = Xe(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function YC(e, t, a) {
      ps(e, t);
    }
    var ym = {
      readContext: tr,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: Z
    }, IC = null, $C = null, QC = null, WC = null, Ql = null, il = null, gm = null;
    {
      var Bg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ie = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      IC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Vt(), zf(t), jg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Vt(), zf(t), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Vt(), zf(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Vt(), zf(t), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Vt(), zf(t), Ug(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Vt(), zf(t);
          var a = fe.current;
          fe.current = Ql;
          try {
            return Fg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Vt();
          var i = fe.current;
          fe.current = Ql;
          try {
            return bg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Vt(), Mg(e);
        },
        useState: function(e) {
          B = "useState", Vt();
          var t = fe.current;
          fe.current = Ql;
          try {
            return lm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Vt(), Hg(e);
        },
        useTransition: function() {
          return B = "useTransition", Vt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Vt(), Og(e, t, a);
        },
        useId: function() {
          return B = "useId", Vt(), Pg();
        },
        unstable_isNewReconciler: Z
      }, $C = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", ne(), jg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", ne(), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", ne(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", ne(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", ne(), Ug(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", ne();
          var a = fe.current;
          fe.current = Ql;
          try {
            return Fg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", ne();
          var i = fe.current;
          fe.current = Ql;
          try {
            return bg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", ne(), Mg(e);
        },
        useState: function(e) {
          B = "useState", ne();
          var t = fe.current;
          fe.current = Ql;
          try {
            return lm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", ne(), Hg(e);
        },
        useTransition: function() {
          return B = "useTransition", ne(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", ne(), Og(e, t, a);
        },
        useId: function() {
          return B = "useId", ne(), Pg();
        },
        unstable_isNewReconciler: Z
      }, QC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", ne(), vm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", ne(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", ne(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", ne(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", ne(), fm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", ne();
          var a = fe.current;
          fe.current = il;
          try {
            return hm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", ne();
          var i = fe.current;
          fe.current = il;
          try {
            return kg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", ne(), um();
        },
        useState: function(e) {
          B = "useState", ne();
          var t = fe.current;
          fe.current = il;
          try {
            return Ng(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", ne(), pm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", ne(), zC(e);
        },
        useTransition: function() {
          return B = "useTransition", ne(), jC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", ne(), im(e, t);
        },
        useId: function() {
          return B = "useId", ne(), mm();
        },
        unstable_isNewReconciler: Z
      }, WC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", ne(), vm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", ne(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", ne(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", ne(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", ne(), fm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", ne();
          var a = fe.current;
          fe.current = gm;
          try {
            return hm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", ne();
          var i = fe.current;
          fe.current = gm;
          try {
            return Dg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", ne(), um();
        },
        useState: function(e) {
          B = "useState", ne();
          var t = fe.current;
          fe.current = gm;
          try {
            return Lg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", ne(), pm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", ne(), UC(e);
        },
        useTransition: function() {
          return B = "useTransition", ne(), FC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", ne(), im(e, t);
        },
        useId: function() {
          return B = "useId", ne(), mm();
        },
        unstable_isNewReconciler: Z
      }, Ql = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ie(), Vt(), jg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ie(), Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ie(), Vt(), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ie(), Vt(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ie(), Vt(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ie(), Vt(), Ug(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ie(), Vt();
          var a = fe.current;
          fe.current = Ql;
          try {
            return Fg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ie(), Vt();
          var i = fe.current;
          fe.current = Ql;
          try {
            return bg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ie(), Vt(), Mg(e);
        },
        useState: function(e) {
          B = "useState", Ie(), Vt();
          var t = fe.current;
          fe.current = Ql;
          try {
            return lm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ie(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ie(), Vt(), Hg(e);
        },
        useTransition: function() {
          return B = "useTransition", Ie(), Vt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ie(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ie(), Vt(), Og(e, t, a);
        },
        useId: function() {
          return B = "useId", Ie(), Vt(), Pg();
        },
        unstable_isNewReconciler: Z
      }, il = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ie(), ne(), vm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ie(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ie(), ne(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ie(), ne(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ie(), ne(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ie(), ne(), fm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ie(), ne();
          var a = fe.current;
          fe.current = il;
          try {
            return hm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ie(), ne();
          var i = fe.current;
          fe.current = il;
          try {
            return kg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ie(), ne(), um();
        },
        useState: function(e) {
          B = "useState", Ie(), ne();
          var t = fe.current;
          fe.current = il;
          try {
            return Ng(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ie(), ne(), pm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ie(), ne(), zC(e);
        },
        useTransition: function() {
          return B = "useTransition", Ie(), ne(), jC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ie(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ie(), ne(), im(e, t);
        },
        useId: function() {
          return B = "useId", Ie(), ne(), mm();
        },
        unstable_isNewReconciler: Z
      }, gm = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ie(), ne(), vm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ie(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ie(), ne(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ie(), ne(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ie(), ne(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ie(), ne(), fm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ie(), ne();
          var a = fe.current;
          fe.current = il;
          try {
            return hm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ie(), ne();
          var i = fe.current;
          fe.current = il;
          try {
            return Dg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ie(), ne(), um();
        },
        useState: function(e) {
          B = "useState", Ie(), ne();
          var t = fe.current;
          fe.current = il;
          try {
            return Lg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ie(), ne(), pm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ie(), ne(), UC(e);
        },
        useTransition: function() {
          return B = "useTransition", Ie(), ne(), FC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ie(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ie(), ne(), im(e, t);
        },
        useId: function() {
          return B = "useId", Ie(), ne(), mm();
        },
        unstable_isNewReconciler: Z
      };
    }
    var jo = Y.unstable_now, GC = 0, Sm = -1, kp = -1, Em = -1, Yg = !1, Cm = !1;
    function qC() {
      return Yg;
    }
    function Qw() {
      Cm = !0;
    }
    function Ww() {
      Yg = !1, Cm = !1;
    }
    function Gw() {
      Yg = Cm, Cm = !1;
    }
    function XC() {
      return GC;
    }
    function KC() {
      GC = jo();
    }
    function Ig(e) {
      kp = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function ZC(e) {
      kp = -1;
    }
    function Rm(e, t) {
      if (kp >= 0) {
        var a = jo() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Wl(e) {
      if (Sm >= 0) {
        var t = jo() - Sm;
        Sm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case mt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function $g(e) {
      if (Em >= 0) {
        var t = jo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case mt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Gl() {
      Sm = jo();
    }
    function Qg() {
      Em = jo();
    }
    function Wg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ll(e, t) {
      if (e && e.defaultProps) {
        var a = Ze({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Gg = {}, qg, Xg, Kg, Zg, Jg, JC, Tm, eS, tS, nS, Dp;
    {
      qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var e0 = /* @__PURE__ */ new Set();
      Tm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          e0.has(a) || (e0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, JC = function(e, t) {
        if (t === void 0) {
          var a = xt(e) || "Component";
          Jg.has(a) || (Jg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Gg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Gg);
    }
    function rS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Gt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        JC(t, s);
      }
      var f = s == null ? u : Ze({}, u, s);
      if (e.memoizedState = f, e.lanes === $) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: Ov,
      enqueueSetState: function(e, t, a) {
        var i = fo(e), u = Ea(), s = Po(i), f = Hu(u, s);
        f.payload = t, a != null && (Tm(a, "setState"), f.callback = a);
        var p = Mo(i, f, s);
        p !== null && (yr(p, i, s, u), Zh(p, i, s)), ps(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = fo(e), u = Ea(), s = Po(i), f = Hu(u, s);
        f.tag = yC, f.payload = t, a != null && (Tm(a, "replaceState"), f.callback = a);
        var p = Mo(i, f, s);
        p !== null && (yr(p, i, s, u), Zh(p, i, s)), ps(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = fo(e), i = Ea(), u = Po(a), s = Hu(i, u);
        s.tag = qh, t != null && (Tm(t, "forceUpdate"), s.callback = t);
        var f = Mo(a, s, u);
        f !== null && (yr(f, a, u, i), Zh(f, a, u)), Lc(a, u);
      }
    };
    function t0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Gt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", xt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ge(a, i) || !ge(u, s) : !0;
    }
    function qw(e, t, a) {
      var i = e.stateNode;
      {
        var u = xt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === De && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === De && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", xt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Kg.has(t) && (Kg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", xt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || nt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function n0(e, t) {
      t.updater = aS, e.stateNode = t, pu(t, e), t._reactInternalInstance = Gg;
    }
    function r0(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !nS.has(t)) {
          nS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === pi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", xt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = Rf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Tf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & Gt) {
        yn(!0);
        try {
          g = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      n0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var x = xt(t) || "Component";
          Xg.has(x) || (Xg.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || A !== null || F !== null) {
            var ue = xt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(ue) || (Zg.add(ue), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ue, Le, M !== null ? `
  ` + M : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && QE(e, u, s), g;
    }
    function Xw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Be(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function a0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Be(e) || "Component";
          qg.has(s) || (qg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      qw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = Rf(e, t, !0);
        u.context = Tf(e, f);
      }
      {
        if (u.state === a) {
          var p = xt(t) || "Component";
          eS.has(p) || (eS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Gt && rl.recordLegacyContextWarning(e, u), rl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (rS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xw(e, u), Jh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Et;
        y |= Qi, (e.mode & Lt) !== De && (y |= _l), e.flags |= y;
      }
    }
    function Kw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = Rf(e, t, !0);
        v = Tf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && a0(e, u, a, v), SC();
      var x = e.memoizedState, M = u.state = x;
      if (Jh(e, a, u, i), M = e.memoizedState, s === a && x === M && !zh() && !em()) {
        if (typeof u.componentDidMount == "function") {
          var A = Et;
          A |= Qi, (e.mode & Lt) !== De && (A |= _l), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (rS(e, t, g, a), M = e.memoizedState);
      var F = em() || t0(e, t, s, a, x, M, v);
      if (F) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ue = Et;
          ue |= Qi, (e.mode & Lt) !== De && (ue |= _l), e.flags |= ue;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = Et;
          Le |= Qi, (e.mode & Lt) !== De && (Le |= _l), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function Zw(e, t, a, i, u) {
      var s = t.stateNode;
      gC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ll(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = li;
      if (typeof g == "object" && g !== null)
        _ = tr(g);
      else {
        var x = Rf(t, a, !0);
        _ = Tf(t, x);
      }
      var M = a.getDerivedStateFromProps, A = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && a0(t, s, i, _), SC();
      var F = t.memoizedState, ue = s.state = F;
      if (Jh(t, i, s, u), ue = t.memoizedState, f === v && F === ue && !zh() && !em() && !Te)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= $n), !1;
      typeof M == "function" && (rS(t, a, M, i), ue = t.memoizedState);
      var Le = em() || t0(t, a, p, i, F, ue, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Te;
      return Le ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ue, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ue, _)), typeof s.componentDidUpdate == "function" && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= $n)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= $n), t.memoizedProps = i, t.memoizedState = ue), s.props = i, s.state = ue, s.context = _, Le;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function lS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Jw(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = Jw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === he)
            return;
          console.error(i);
        }
        var p = u ? Be(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Be(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var e_ = typeof WeakMap == "function" ? WeakMap : Map;
    function i0(e, t, a) {
      var i = Hu(Kt, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Qb(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = Hu(Kt, a);
      i.tag = dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          mR(e), uS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        mR(e), uS(e, t), typeof u != "function" && Ib(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Jr(e.lanes, je) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Be(e) || "Unknown"));
      }), i;
    }
    function l0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new e_(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Wb.bind(null, e, t, a);
        Kr && Qp(e, a), t.then(s, s);
      }
    }
    function t_(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function n_(e, t) {
      var a = e.tag;
      if ((e.mode & ut) === De && (a === pe || a === Qe || a === Fe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function u0(e) {
      var t = e;
      do {
        if (t.tag === be && Aw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function o0(e, t, a, i, u) {
      if ((e.mode & ut) === De) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= _e, a.flags |= xc, a.flags &= -52805, a.tag === he) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ft;
            else {
              var f = Hu(Kt, je);
              f.tag = qh, Mo(a, f, je);
            }
          }
          a.lanes = Xe(a.lanes, je);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = u, e;
    }
    function r_(e, t, a, i, u) {
      if (a.flags |= us, Kr && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        n_(a), Ar() && a.mode & ut && JE();
        var f = u0(t);
        if (f !== null) {
          f.flags &= ~Cr, o0(f, t, a, e, u), f.mode & ut && l0(e, s, u), t_(f, e, s);
          return;
        } else {
          if (!Fv(u)) {
            l0(e, s, u), PS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & ut) {
        JE();
        var v = u0(t);
        if (v !== null) {
          (v.flags & Kn) === ke && (v.flags |= Cr), o0(v, t, a, e, u), eg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), Ab(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= Kn;
            var _ = Rs(u);
            y.lanes = Xe(y.lanes, _);
            var x = i0(y, g, _);
            hg(y, x);
            return;
          }
          case he:
            var M = i, A = y.type, F = y.stateNode;
            if ((y.flags & _e) === ke && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !uR(F))) {
              y.flags |= Kn;
              var ue = Rs(u);
              y.lanes = Xe(y.lanes, ue);
              var Le = oS(y, M, ue);
              hg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function a_() {
      return null;
    }
    var Op = L.ReactCurrentOwner, ul = !1, sS, Np, cS, fS, dS, Js, pS, xm, Lp;
    sS = {}, Np = {}, cS = {}, fS = {}, dS = {}, Js = !1, pS = {}, xm = {}, Lp = {};
    function ga(e, t, a, i) {
      e === null ? t.child = fC(t, null, a, i) : t.child = bf(t, e.child, a, i);
    }
    function i_(e, t, a, i) {
      t.child = bf(t, e.child, null, i), t.child = bf(t, null, a, i);
    }
    function s0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), va(t);
      {
        if (Op.current = t, In(!0), v = Uf(e, t, f, i, p, u), y = Af(), t.mode & Gt) {
          yn(!0);
          try {
            v = Uf(e, t, f, i, p, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        In(!1);
      }
      return ha(), e !== null && !ul ? (wC(e, t, u), Vu(e, t, u)) : (Ar() && y && Gy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function c0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (c1(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = If(s), t.tag = Fe, t.type = f, mS(t, s), f0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && tl(
            p,
            i,
            // Resolved props
            "prop",
            xt(s)
          ), a.defaultProps !== void 0) {
            var v = xt(s) || "Unknown";
            Lp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Lp[v] = !0);
          }
        }
        var y = ZS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && tl(
          _,
          i,
          // Resolved props
          "prop",
          xt(g)
        );
      }
      var x = e.child, M = RS(e, u);
      if (!M) {
        var A = x.memoizedProps, F = a.compare;
        if (F = F !== null ? F : ge, F(A, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ti;
      var ue = ac(x, i);
      return ue.ref = t.ref, ue.return = t, t.child = ue, ue;
    }
    function f0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ye) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && tl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            xt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ge(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ul = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & xc) !== ke && (ul = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function d0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || re)
        if ((t.mode & ut) === De) {
          var f = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, jm(t, a);
        } else if (Jr(a, Zr)) {
          var _ = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var x = s !== null ? s.baseLanes : a;
          jm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Xe(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Zr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, jm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Xe(s.baseLanes, a), t.memoizedState = null) : M = a, jm(t, M);
      }
      return ga(e, t, u, a), t.child;
    }
    function l_(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function u_(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function o_(e, t, a) {
      {
        t.flags |= Et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ga(e, t, s, a), t.child;
    }
    function p0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= vo);
    }
    function vS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f;
      {
        var p = Rf(t, a, !0);
        f = Tf(t, p);
      }
      var v, y;
      Df(t, u), va(t);
      {
        if (Op.current = t, In(!0), v = Uf(e, t, a, i, f, u), y = Af(), t.mode & Gt) {
          yn(!0);
          try {
            v = Uf(e, t, a, i, f, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        In(!1);
      }
      return ha(), e !== null && !ul ? (wC(e, t, u), Vu(e, t, u)) : (Ar() && y && Gy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function v0(e, t, a, i, u) {
      {
        switch (w1(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= _e, t.flags |= Kn;
            var y = new Error("Simulated error coming from DevTools"), g = Rs(u);
            t.lanes = Xe(t.lanes, g);
            var _ = oS(t, Zs(y, t), g);
            hg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && tl(
            x,
            i,
            // Resolved props
            "prop",
            xt(a)
          );
        }
      }
      var M;
      Yl(a) ? (M = !0, Ah(t)) : M = !1, Df(t, u);
      var A = t.stateNode, F;
      A === null ? (_m(e, t), r0(t, a, i), iS(t, a, i, u), F = !0) : e === null ? F = Kw(t, a, i, u) : F = Zw(e, t, a, i, u);
      var ue = hS(e, t, a, F, M, u);
      {
        var Le = t.stateNode;
        F && Le.props !== i && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Be(t) || "a component"), Js = !0);
      }
      return ue;
    }
    function hS(e, t, a, i, u, s) {
      p0(e, t);
      var f = (t.flags & _e) !== ke;
      if (!i && !f)
        return u && qE(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ZC();
      else {
        va(t);
        {
          if (In(!0), v = p.render(), t.mode & Gt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          In(!1);
        }
        ha();
      }
      return t.flags |= ti, e !== null && f ? i_(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && qE(t, a, !0), t.child;
    }
    function h0(e) {
      var t = e.stateNode;
      t.pendingContext ? WE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && WE(e, t.context, !1), mg(e, t.containerInfo);
    }
    function s_(e, t, a) {
      if (h0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      gC(e, t), Jh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Cr) {
          var g = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return m0(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return m0(e, t, p, a, _);
        } else {
          dw(t);
          var x = fC(t, null, p, a);
          t.child = x;
          for (var M = x; M; )
            M.flags = M.flags & ~mn | Gr, M = M.sibling;
        }
      } else {
        if (_f(), p === s)
          return Vu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function m0(e, t, a, i, u) {
      return _f(), eg(u), t.flags |= Cr, ga(e, t, a, i), t.child;
    }
    function c_(e, t, a) {
      RC(t), e === null && Jy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = zy(i, u);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= Da), p0(e, t), ga(e, t, f, a), t.child;
    }
    function f_(e, t) {
      return e === null && Jy(t), null;
    }
    function d_(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = f1(v), g = ll(v, u), _;
      switch (y) {
        case pe:
          return mS(t, v), t.type = v = If(v), _ = vS(null, t, v, g, i), _;
        case he:
          return t.type = v = QS(v), _ = v0(null, t, v, g, i), _;
        case Qe:
          return t.type = v = WS(v), _ = s0(null, t, v, g, i), _;
        case st: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && tl(
              x,
              g,
              // Resolved for outer only
              "prop",
              xt(v)
            );
          }
          return _ = c0(
            null,
            t,
            v,
            ll(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ye && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function p_(e, t, a, i, u) {
      _m(e, t), t.tag = he;
      var s;
      return Yl(a) ? (s = !0, Ah(t)) : s = !1, Df(t, u), r0(t, a, i), iS(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function v_(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = Tf(t, f);
      }
      Df(t, i);
      var p, v;
      va(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = xt(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & Gt && rl.recordLegacyContextWarning(t, null), In(!0), Op.current = t, p = Uf(null, t, a, u, s, i), v = Af(), In(!1);
      }
      if (ha(), t.flags |= ti, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = xt(a) || "Unknown";
        Np[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Np[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = xt(a) || "Unknown";
          Np[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Np[_] = !0);
        }
        t.tag = he, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Yl(a) ? (x = !0, Ah(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), n0(t, p), iS(t, a, u, i), hS(null, t, a, !0, x, i);
      } else {
        if (t.tag = pe, t.mode & Gt) {
          yn(!0);
          try {
            p = Uf(null, t, a, u, s, i), v = Af();
          } finally {
            yn(!1);
          }
        }
        return Ar() && v && Gy(t), ga(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = xt(t) || "Unknown";
          Lp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Lp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = xt(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), fS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = xt(t) || "Unknown";
          cS[v] || (S("%s: Function components do not support contextType.", v), cS[v] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: kt
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: a_(),
        transitions: null
      };
    }
    function h_(e, t) {
      var a = null;
      return {
        baseLanes: Xe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function m_(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sg(e, Cp);
    }
    function y_(e, t) {
      return Ts(e.childLanes, t);
    }
    function y0(e, t, a) {
      var i = t.pendingProps;
      _1(t) && (t.flags |= _e);
      var u = al.current, s = !1, f = (t.flags & _e) !== ke;
      if (f || m_(u, e) ? (s = !0, t.flags &= ~_e) : (e === null || e.memoizedState !== null) && (u = Uw(u, xC)), u = Nf(u), Uo(t, u), e === null) {
        Jy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return R_(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = g_(t, y, g, a), x = t.child;
          return x.memoizedState = gS(a), t.memoizedState = yS, _;
        } else
          return SS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var A = M.dehydrated;
          if (A !== null)
            return T_(e, t, f, i, A, M, a);
        }
        if (s) {
          var F = i.fallback, ue = i.children, Le = E_(e, t, ue, F, a), we = t.child, Tt = e.child.memoizedState;
          return we.memoizedState = Tt === null ? gS(a) : h_(Tt, a), we.childLanes = y_(e, a), t.memoizedState = yS, Le;
        } else {
          var yt = i.children, D = S_(e, t, yt, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = ES(u, i);
      return s.return = e, e.child = s, s;
    }
    function g_(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ut) === De && s !== null ? (p = s, p.childLanes = $, p.pendingProps = f, e.mode & Nt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = ES(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return gR(e, t, $, null);
    }
    function g0(e, t) {
      return ac(e, t);
    }
    function S_(e, t, a, i) {
      var u = e.child, s = u.sibling, f = g0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ut) === De && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ka) : p.push(s);
      }
      return t.child = f, f;
    }
    function E_(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ut) === De && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = $, y.pendingProps = v, t.mode & Nt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = g0(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var _;
      return p !== null ? _ = ac(p, i) : (_ = Yo(i, s, u, null), _.flags |= mn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function wm(e, t, a, i) {
      i !== null && eg(i), bf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function C_(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Yo(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ut) !== De && bf(t, e.child, null, u), v;
    }
    function R_(e, t, a) {
      return (e.mode & ut) === De ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = je) : Fy(t) ? e.lanes = Rr : e.lanes = Zr, null;
    }
    function T_(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var D = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return wm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= _e, null;
          var H = i.children, O = i.fallback, X = C_(e, t, H, O, f), de = t.child;
          return de.memoizedState = gS(f), t.memoizedState = yS, X;
        }
      else {
        if (cw(), (t.mode & ut) === De)
          return wm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Fy(u)) {
          var p, v, y;
          {
            var g = bx(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = lS(_, p, y);
          return wm(e, t, f, x);
        }
        var M = Jr(f, e.childLanes);
        if (ul || M) {
          var A = Am();
          if (A !== null) {
            var F = Ud(A, f);
            if (F !== kt && F !== s.retryLane) {
              s.retryLane = F;
              var ue = Kt;
              Fa(e, F), yr(A, e, F, ue);
            }
          }
          PS();
          var Le = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return wm(e, t, f, Le);
        } else if (PE(u)) {
          t.flags |= _e, t.child = e.child;
          var we = Gb.bind(null, e);
          return kx(u, we), null;
        } else {
          pw(t, u, s.treeContext);
          var Tt = i.children, yt = SS(t, Tt);
          return yt.flags |= Gr, yt;
        }
      }
    }
    function S0(e, t, a) {
      e.lanes = Xe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Xe(i.lanes, t)), cg(e.return, t, a);
    }
    function x_(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === be) {
          var u = i.memoizedState;
          u !== null && S0(i, a, e);
        } else if (i.tag === ln)
          S0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function w_(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && rm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function __(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !pS[e])
        if (pS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function b_(e, t) {
      e !== void 0 && !xm[e] && (e !== "collapsed" && e !== "hidden" ? (xm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (xm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function E0(e, t) {
      {
        var a = nt(e), i = !a && typeof qe(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function k_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (nt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!E0(e[a], a))
              return;
        } else {
          var i = qe(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!E0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function C0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      __(u), b_(s, u), k_(f, u), ga(e, t, f, a);
      var p = al.current, v = Sg(p, Cp);
      if (v)
        p = Eg(p, Cp), t.flags |= _e;
      else {
        var y = e !== null && (e.flags & _e) !== ke;
        y && x_(t, t.child, a), p = Nf(p);
      }
      if (Uo(t, p), (t.mode & ut) === De)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = w_(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), CS(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var A = M.alternate;
              if (A !== null && rm(A) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = x, x = M, M = F;
            }
            CS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            CS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function D_(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = bf(t, null, i, a) : ga(e, t, i, a), t.child;
    }
    var R0 = !1;
    function O_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || R0 || (R0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && tl(v, s, "prop", "Context.Provider");
      }
      if (vC(t, u, p), f !== null) {
        var y = f.value;
        if (G(y, p)) {
          if (f.children === s.children && !zh())
            return Vu(e, t, a);
        } else
          _w(t, u, a);
      }
      var g = s.children;
      return ga(e, t, g, a), t.child;
    }
    var T0 = !1;
    function N_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (T0 || (T0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = tr(i);
      va(t);
      var p;
      return Op.current = t, In(!0), p = s(f), In(!1), ha(), t.flags |= ti, ga(e, t, p, a), t.child;
    }
    function Mp() {
      ul = !0;
    }
    function _m(e, t) {
      (t.mode & ut) === De && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZC(), $p(t.lanes), Jr(a, t.childLanes) ? (xw(e, t), t.child) : null;
    }
    function L_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ka) : s.push(e), a.flags |= mn, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!Jr(a, t);
    }
    function M_(e, t, a) {
      switch (t.tag) {
        case te:
          h0(t), t.stateNode, _f();
          break;
        case oe:
          RC(t);
          break;
        case he: {
          var i = t.type;
          Yl(i) && Ah(t);
          break;
        }
        case Re:
          mg(t, t.stateNode.containerInfo);
          break;
        case pt: {
          var u = t.memoizedProps.value, s = t.type._context;
          vC(t, s, u);
          break;
        }
        case mt:
          {
            var f = Jr(a, t.childLanes);
            f && (t.flags |= Et);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case be: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Uo(t, Nf(al.current)), t.flags |= _e, null;
            var y = t.child, g = y.childLanes;
            if (Jr(a, g))
              return y0(e, t, a);
            Uo(t, Nf(al.current));
            var _ = Vu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            Uo(t, Nf(al.current));
          break;
        }
        case ln: {
          var x = (e.flags & _e) !== ke, M = Jr(a, t.childLanes);
          if (x) {
            if (M)
              return C0(e, t, a);
            t.flags |= _e;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Uo(t, al.current), M)
            break;
          return null;
        }
        case Oe:
        case At:
          return t.lanes = $, d0(e, t, a);
      }
      return Vu(e, t, a);
    }
    function x0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return L_(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || zh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ul = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & _e) === ke)
            return ul = !1, M_(e, t, a);
          (e.flags & xc) !== ke ? ul = !0 : ul = !1;
        }
      } else if (ul = !1, Ar() && aw(t)) {
        var f = t.index, p = iw();
        ZE(t, p, f);
      }
      switch (t.lanes = $, t.tag) {
        case ot:
          return v_(e, t, t.type, a);
        case an: {
          var v = t.elementType;
          return d_(e, t, v, a);
        }
        case pe: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : ll(y, g);
          return vS(e, t, y, _, a);
        }
        case he: {
          var x = t.type, M = t.pendingProps, A = t.elementType === x ? M : ll(x, M);
          return v0(e, t, x, A, a);
        }
        case te:
          return s_(e, t, a);
        case oe:
          return c_(e, t, a);
        case $e:
          return f_(e, t);
        case be:
          return y0(e, t, a);
        case Re:
          return D_(e, t, a);
        case Qe: {
          var F = t.type, ue = t.pendingProps, Le = t.elementType === F ? ue : ll(F, ue);
          return s0(e, t, F, Le, a);
        }
        case St:
          return l_(e, t, a);
        case ht:
          return u_(e, t, a);
        case mt:
          return o_(e, t, a);
        case pt:
          return O_(e, t, a);
        case fn:
          return N_(e, t, a);
        case st: {
          var we = t.type, Tt = t.pendingProps, yt = ll(we, Tt);
          if (t.type !== t.elementType) {
            var D = we.propTypes;
            D && tl(
              D,
              yt,
              // Resolved for outer only
              "prop",
              xt(we)
            );
          }
          return yt = ll(we.type, yt), c0(e, t, we, yt, a);
        }
        case Fe:
          return f0(e, t, t.type, t.pendingProps, a);
        case Ft: {
          var H = t.type, O = t.pendingProps, X = t.elementType === H ? O : ll(H, O);
          return p_(e, t, H, X, a);
        }
        case ln:
          return C0(e, t, a);
        case _t:
          break;
        case Oe:
          return d0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= Et;
    }
    function w0(e) {
      e.flags |= En, e.flags |= vo;
    }
    var _0, TS, b0, k0;
    _0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === oe || u.tag === $e)
          tx(e, u.stateNode);
        else if (u.tag !== Re) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, TS = function(e, t) {
    }, b0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = yg(), v = rx(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, k0 = function(e, t, a, i) {
      a !== i && jf(t);
    };
    function zp(e, t) {
      if (!Ar())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, i = ke;
      if (t) {
        if ((e.mode & Nt) !== De) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Xe(a, Xe(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Xe(a, Xe(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Nt) !== De) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Xe(a, Xe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Xe(a, Xe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function z_(e, t, a) {
      if (gw() && (t.mode & ut) !== De && (t.flags & _e) === ke)
        return iC(t), _f(), t.flags |= Cr | us | Kn, !1;
      var i = Ph(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (mw(t), Fr(t), (t.mode & Nt) !== De) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (_f(), (t.flags & _e) === ke && (t.memoizedState = null), t.flags |= Et, Fr(t), (t.mode & Nt) !== De) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return lC(), !0;
    }
    function D0(e, t, a) {
      var i = t.pendingProps;
      switch (qy(t), t.tag) {
        case ot:
        case an:
        case Fe:
        case pe:
        case Qe:
        case St:
        case ht:
        case mt:
        case fn:
        case st:
          return Fr(t), null;
        case he: {
          var u = t.type;
          return Yl(u) && Uh(t), Fr(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (Of(t), $y(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Ph(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== ke) && (t.flags |= $n, lC());
            }
          }
          return TS(e, t), Fr(t), null;
        }
        case oe: {
          gg(t);
          var v = CC(), y = t.type;
          if (e !== null && t.stateNode != null)
            b0(e, t, y, i, v), e.ref !== t.ref && w0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var g = yg(), _ = Ph(t);
            if (_)
              vw(t, v, g) && jf(t);
            else {
              var x = ex(y, i, v, g, t);
              _0(x, t, !1, !1), t.stateNode = x, nx(x, y, i, v) && jf(t);
            }
            t.ref !== null && w0(t);
          }
          return Fr(t), null;
        }
        case $e: {
          var M = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            k0(e, t, A, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = CC(), ue = yg(), Le = Ph(t);
            Le ? hw(t) && jf(t) : t.stateNode = ax(M, F, ue, t);
          }
          return Fr(t), null;
        }
        case be: {
          Lf(t);
          var we = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = z_(e, t, we);
            if (!Tt)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & _e) !== ke)
            return t.lanes = a, (t.mode & Nt) !== De && Wg(t), t;
          var yt = we !== null, D = e !== null && e.memoizedState !== null;
          if (yt !== D && yt) {
            var H = t.child;
            if (H.flags |= Mn, (t.mode & ut) !== De) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Sg(al.current, xC) ? Ub() : PS();
            }
          }
          var X = t.updateQueue;
          if (X !== null && (t.flags |= Et), Fr(t), (t.mode & Nt) !== De && yt) {
            var de = t.child;
            de !== null && (t.treeBaseDuration -= de.treeBaseDuration);
          }
          return null;
        }
        case Re:
          return Of(t), TS(e, t), e === null && Kx(t.stateNode.containerInfo), Fr(t), null;
        case pt:
          var se = t.type._context;
          return sg(se, t), Fr(t), null;
        case Ft: {
          var Ve = t.type;
          return Yl(Ve) && Uh(t), Fr(t), null;
        }
        case ln: {
          Lf(t);
          var We = t.memoizedState;
          if (We === null)
            return Fr(t), null;
          var Xt = (t.flags & _e) !== ke, zt = We.rendering;
          if (zt === null)
            if (Xt)
              zp(We, !1);
            else {
              var Gn = jb() && (e === null || (e.flags & _e) === ke);
              if (!Gn)
                for (var Ut = t.child; Ut !== null; ) {
                  var Vn = rm(Ut);
                  if (Vn !== null) {
                    Xt = !0, t.flags |= _e, zp(We, !1);
                    var la = Vn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= Et), t.subtreeFlags = ke, ww(t, a), Uo(t, Eg(al.current, Cp)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              We.tail !== null && Qn() > X0() && (t.flags |= _e, Xt = !0, zp(We, !1), t.lanes = _d);
            }
          else {
            if (!Xt) {
              var Yr = rm(zt);
              if (Yr !== null) {
                t.flags |= _e, Xt = !0;
                var oi = Yr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Et), zp(We, !0), We.tail === null && We.tailMode === "hidden" && !zt.alternate && !Ar())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - We.renderingStartTime > X0() && a !== Zr && (t.flags |= _e, Xt = !0, zp(We, !1), t.lanes = _d);
            }
            if (We.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var Ca = We.last;
              Ca !== null ? Ca.sibling = zt : t.child = zt, We.last = zt;
            }
          }
          if (We.tail !== null) {
            var Ra = We.tail;
            We.rendering = Ra, We.tail = Ra.sibling, We.renderingStartTime = Qn(), Ra.sibling = null;
            var ua = al.current;
            return Xt ? ua = Eg(ua, Cp) : ua = Nf(ua), Uo(t, ua), Ra;
          }
          return Fr(t), null;
        }
        case _t:
          break;
        case Oe:
        case At: {
          VS(t);
          var $u = t.memoizedState, $f = $u !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Kl = Xp !== null;
            Kl !== $f && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !re && (t.flags |= Mn);
          }
          return !$f || (t.mode & ut) === De ? Fr(t) : Jr(Xl, Zr) && (Fr(t), t.subtreeFlags & (mn | Et) && (t.flags |= Mn)), null;
        }
        case bt:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function U_(e, t, a) {
      switch (qy(t), t.tag) {
        case he: {
          var i = t.type;
          Yl(i) && Uh(t);
          var u = t.flags;
          return u & Kn ? (t.flags = u & ~Kn | _e, (t.mode & Nt) !== De && Wg(t), t) : null;
        }
        case te: {
          t.stateNode, Of(t), $y(t), Rg();
          var s = t.flags;
          return (s & Kn) !== ke && (s & _e) === ke ? (t.flags = s & ~Kn | _e, t) : null;
        }
        case oe:
          return gg(t), null;
        case be: {
          Lf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            _f();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | _e, (t.mode & Nt) !== De && Wg(t), t) : null;
        }
        case ln:
          return Lf(t), null;
        case Re:
          return Of(t), null;
        case pt:
          var v = t.type._context;
          return sg(v, t), null;
        case Oe:
        case At:
          return VS(t), null;
        case bt:
          return null;
        default:
          return null;
      }
    }
    function O0(e, t, a) {
      switch (qy(t), t.tag) {
        case he: {
          var i = t.type.childContextTypes;
          i != null && Uh(t);
          break;
        }
        case te: {
          t.stateNode, Of(t), $y(t), Rg();
          break;
        }
        case oe: {
          gg(t);
          break;
        }
        case Re:
          Of(t);
          break;
        case be:
          Lf(t);
          break;
        case ln:
          Lf(t);
          break;
        case pt:
          var u = t.type._context;
          sg(u, t);
          break;
        case Oe:
        case At:
          VS(t);
          break;
      }
    }
    var N0 = null;
    N0 = /* @__PURE__ */ new Set();
    var bm = !1, Hr = !1, A_ = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Ff = null, Hf = null;
    function j_(e) {
      wl(null, function() {
        throw e;
      }), ls();
    }
    var F_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Nt)
        try {
          Gl(), t.componentWillUnmount();
        } finally {
          Wl(e);
        }
      else
        t.componentWillUnmount();
    };
    function L0(e, t) {
      try {
        Fo(fr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function xS(e, t, a) {
      try {
        F_(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function H_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function M0(e, t) {
      try {
        U0(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Vf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ae && at && e.mode & Nt)
              try {
                Gl(), i = a(null);
              } finally {
                Wl(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Be(e));
        } else
          a.current = null;
    }
    function km(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var z0 = !1;
    function V_(e, t) {
      ZT(e.containerInfo), Se = t, P_();
      var a = z0;
      return z0 = !1, a;
    }
    function P_() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & bl) !== ke && t !== null ? (t.return = e, Se = t) : B_();
      }
    }
    function B_() {
      for (; Se !== null; ) {
        var e = Se;
        $t(e);
        try {
          Y_(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function Y_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & $n) !== ke) {
        switch ($t(e), e.tag) {
          case pe:
          case Qe:
          case Fe:
            break;
          case he: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Js && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ll(e.type, i), u);
              {
                var p = N0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Be(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              Tx(v.containerInfo);
            }
            break;
          }
          case oe:
          case $e:
          case Re:
          case Ft:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        sn();
      }
    }
    function ol(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & jr) !== Ha ? qi(t) : (e & fr) !== Ha && ss(t), (e & Il) !== Ha && Wp(!0), km(t, a, p), (e & Il) !== Ha && Wp(!1), (e & jr) !== Ha ? Nl() : (e & fr) !== Ha && xd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Fo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Ha ? Td(t) : (e & fr) !== Ha && Oc(t);
            var f = s.create;
            (e & Il) !== Ha && Wp(!0), s.destroy = f(), (e & Il) !== Ha && Wp(!1), (e & jr) !== Ha ? Mv() : (e & fr) !== Ha && zv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== ke ? v = "useLayoutEffect" : (s.tag & Il) !== ke ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function I_(e, t) {
      if ((t.flags & Et) !== ke)
        switch (t.tag) {
          case mt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = XC(), p = t.alternate === null ? "mount" : "update";
            qC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case te:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case mt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function $_(e, t, a, i) {
      if ((a.flags & Dl) !== ke)
        switch (a.tag) {
          case pe:
          case Qe:
          case Fe: {
            if (!Hr)
              if (a.mode & Nt)
                try {
                  Gl(), Fo(fr | cr, a);
                } finally {
                  Wl(a);
                }
              else
                Fo(fr | cr, a);
            break;
          }
          case he: {
            var u = a.stateNode;
            if (a.flags & Et && !Hr)
              if (t === null)
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), a.mode & Nt)
                  try {
                    Gl(), u.componentDidMount();
                  } finally {
                    Wl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ll(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), a.mode & Nt)
                  try {
                    Gl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Wl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), EC(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case oe:
                    y = a.child.stateNode;
                    break;
                  case he:
                    y = a.child.stateNode;
                    break;
                }
              EC(a, v, y);
            }
            break;
          }
          case oe: {
            var g = a.stateNode;
            if (t === null && a.flags & Et) {
              var _ = a.type, x = a.memoizedProps;
              sx(g, _, x);
            }
            break;
          }
          case $e:
            break;
          case Re:
            break;
          case mt: {
            {
              var M = a.memoizedProps, A = M.onCommit, F = M.onRender, ue = a.stateNode.effectDuration, Le = XC(), we = t === null ? "mount" : "update";
              qC() && (we = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, we, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof A == "function" && A(a.memoizedProps.id, we, ue, Le), Bb(a);
                var Tt = a.return;
                e: for (; Tt !== null; ) {
                  switch (Tt.tag) {
                    case te:
                      var yt = Tt.stateNode;
                      yt.effectDuration += ue;
                      break e;
                    case mt:
                      var D = Tt.stateNode;
                      D.effectDuration += ue;
                      break e;
                  }
                  Tt = Tt.return;
                }
              }
            }
            break;
          }
          case be: {
            J_(e, a);
            break;
          }
          case ln:
          case Ft:
          case _t:
          case Oe:
          case At:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & En && U0(a);
    }
    function Q_(e) {
      switch (e.tag) {
        case pe:
        case Qe:
        case Fe: {
          if (e.mode & Nt)
            try {
              Gl(), L0(e, e.return);
            } finally {
              Wl(e);
            }
          else
            L0(e, e.return);
          break;
        }
        case he: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && H_(e, e.return, t), M0(e, e.return);
          break;
        }
        case oe: {
          M0(e, e.return);
          break;
        }
      }
    }
    function W_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === oe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Sx(u) : Cx(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === $e) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Ex(s) : Rx(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === Oe || i.tag === At) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function U0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case oe:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Nt)
            try {
              Gl(), u = t(i);
            } finally {
              Wl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Be(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Be(e)), t.current = i;
      }
    }
    function G_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function A0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, A0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === oe) {
          var a = e.stateNode;
          a !== null && ew(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function q_(e) {
      for (var t = e.return; t !== null; ) {
        if (j0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function j0(e) {
      return e.tag === oe || e.tag === te || e.tag === Re;
    }
    function F0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || j0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== oe && t.tag !== $e && t.tag !== Zt; ) {
          if (t.flags & mn || t.child === null || t.tag === Re)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function X_(e) {
      var t = q_(e);
      switch (t.tag) {
        case oe: {
          var a = t.stateNode;
          t.flags & Da && (VE(a), t.flags &= ~Da);
          var i = F0(e);
          _S(e, i, a);
          break;
        }
        case te:
        case Re: {
          var u = t.stateNode.containerInfo, s = F0(e);
          wS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === oe || i === $e;
      if (u) {
        var s = e.stateNode;
        t ? hx(a, s, t) : px(a, s);
      } else if (i !== Re) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === oe || i === $e;
      if (u) {
        var s = e.stateNode;
        t ? vx(a, s, t) : dx(a, s);
      } else if (i !== Re) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, sl = !1;
    function K_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case oe: {
              Vr = i.stateNode, sl = !1;
              break e;
            }
            case te: {
              Vr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
            case Re: {
              Vr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        H0(e, t, a), Vr = null, sl = !1;
      }
      G_(a);
    }
    function Ho(e, t, a) {
      for (var i = a.child; i !== null; )
        H0(e, t, i), i = i.sibling;
    }
    function H0(e, t, a) {
      switch (Ed(a), a.tag) {
        case oe:
          Hr || Vf(a, t);
        case $e: {
          {
            var i = Vr, u = sl;
            Vr = null, Ho(e, t, a), Vr = i, sl = u, Vr !== null && (sl ? yx(Vr, a.stateNode) : mx(Vr, a.stateNode));
          }
          return;
        }
        case Zt: {
          Vr !== null && (sl ? gx(Vr, a.stateNode) : jy(Vr, a.stateNode));
          return;
        }
        case Re: {
          {
            var s = Vr, f = sl;
            Vr = a.stateNode.containerInfo, sl = !0, Ho(e, t, a), Vr = s, sl = f;
          }
          return;
        }
        case pe:
        case Qe:
        case st:
        case Fe: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, x = _.destroy, M = _.tag;
                  x !== void 0 && ((M & Il) !== Ha ? km(a, t, x) : (M & fr) !== Ha && (ss(a), a.mode & Nt ? (Gl(), km(a, t, x), Wl(a)) : km(a, t, x), xd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Ho(e, t, a);
          return;
        }
        case he: {
          if (!Hr) {
            Vf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && xS(a, t, A);
          }
          Ho(e, t, a);
          return;
        }
        case _t: {
          Ho(e, t, a);
          return;
        }
        case Oe: {
          if (
            // TODO: Remove this dead flag
            a.mode & ut
          ) {
            var F = Hr;
            Hr = F || a.memoizedState !== null, Ho(e, t, a), Hr = F;
          } else
            Ho(e, t, a);
          break;
        }
        default: {
          Ho(e, t, a);
          return;
        }
      }
    }
    function Z_(e) {
      e.memoizedState;
    }
    function J_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && jx(s);
          }
        }
      }
    }
    function V0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new A_()), t.forEach(function(i) {
          var u = qb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Kr)
              if (Ff !== null && Hf !== null)
                Qp(Hf, Ff);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function eb(e, t, a) {
      Ff = a, Hf = e, $t(t), P0(t, e), $t(t), Ff = null, Hf = null;
    }
    function cl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            K_(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = gl();
      if (t.subtreeFlags & kl)
        for (var p = t.child; p !== null; )
          $t(p), P0(p, e), p = p.sibling;
      $t(f);
    }
    function P0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case pe:
        case Qe:
        case st:
        case Fe: {
          if (cl(t, e), ql(e), u & Et) {
            try {
              ol(Il | cr, e, e.return), Fo(Il | cr, e);
            } catch (Ve) {
              cn(e, e.return, Ve);
            }
            if (e.mode & Nt) {
              try {
                Gl(), ol(fr | cr, e, e.return);
              } catch (Ve) {
                cn(e, e.return, Ve);
              }
              Wl(e);
            } else
              try {
                ol(fr | cr, e, e.return);
              } catch (Ve) {
                cn(e, e.return, Ve);
              }
          }
          return;
        }
        case he: {
          cl(t, e), ql(e), u & En && i !== null && Vf(i, i.return);
          return;
        }
        case oe: {
          cl(t, e), ql(e), u & En && i !== null && Vf(i, i.return);
          {
            if (e.flags & Da) {
              var s = e.stateNode;
              try {
                VE(s);
              } catch (Ve) {
                cn(e, e.return, Ve);
              }
            }
            if (u & Et) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    cx(f, g, y, v, p, e);
                  } catch (Ve) {
                    cn(e, e.return, Ve);
                  }
              }
            }
          }
          return;
        }
        case $e: {
          if (cl(t, e), ql(e), u & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, x = e.memoizedProps, M = i !== null ? i.memoizedProps : x;
            try {
              fx(_, M, x);
            } catch (Ve) {
              cn(e, e.return, Ve);
            }
          }
          return;
        }
        case te: {
          if (cl(t, e), ql(e), u & Et && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                Ax(t.containerInfo);
              } catch (Ve) {
                cn(e, e.return, Ve);
              }
          }
          return;
        }
        case Re: {
          cl(t, e), ql(e);
          return;
        }
        case be: {
          cl(t, e), ql(e);
          var F = e.child;
          if (F.flags & Mn) {
            var ue = F.stateNode, Le = F.memoizedState, we = Le !== null;
            if (ue.isHidden = we, we) {
              var Tt = F.alternate !== null && F.alternate.memoizedState !== null;
              Tt || zb();
            }
          }
          if (u & Et) {
            try {
              Z_(e);
            } catch (Ve) {
              cn(e, e.return, Ve);
            }
            V0(e);
          }
          return;
        }
        case Oe: {
          var yt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ut
          ) {
            var D = Hr;
            Hr = D || yt, cl(t, e), Hr = D;
          } else
            cl(t, e);
          if (ql(e), u & Mn) {
            var H = e.stateNode, O = e.memoizedState, X = O !== null, de = e;
            if (H.isHidden = X, X && !yt && (de.mode & ut) !== De) {
              Se = de;
              for (var se = de.child; se !== null; )
                Se = se, nb(se), se = se.sibling;
            }
            W_(de, X);
          }
          return;
        }
        case ln: {
          cl(t, e), ql(e), u & Et && V0(e);
          return;
        }
        case _t:
          return;
        default: {
          cl(t, e), ql(e);
          return;
        }
      }
    }
    function ql(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          X_(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & Gr && (e.flags &= ~Gr);
    }
    function tb(e, t, a) {
      Ff = a, Hf = t, Se = e, B0(e, t, a), Ff = null, Hf = null;
    }
    function B0(e, t, a) {
      for (var i = (e.mode & ut) !== De; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Oe && i) {
          var f = u.memoizedState !== null, p = f || bm;
          if (p) {
            bS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, _ = bm, x = Hr;
            bm = p, Hr = g, Hr && !x && (Se = u, rb(u));
            for (var M = s; M !== null; )
              Se = M, B0(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Se = u, bm = _, Hr = x, bS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Dl) !== ke && s !== null ? (s.return = u, Se = s) : bS(e, t, a);
      }
    }
    function bS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & Dl) !== ke) {
          var u = i.alternate;
          $t(i);
          try {
            $_(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          sn();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function nb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case pe:
          case Qe:
          case st:
          case Fe: {
            if (t.mode & Nt)
              try {
                Gl(), ol(fr, t, t.return);
              } finally {
                Wl(t);
              }
            else
              ol(fr, t, t.return);
            break;
          }
          case he: {
            Vf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && xS(t, t.return, i);
            break;
          }
          case oe: {
            Vf(t, t.return);
            break;
          }
          case Oe: {
            var u = t.memoizedState !== null;
            if (u) {
              Y0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : Y0(e);
      }
    }
    function Y0(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function rb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Oe) {
          var i = t.memoizedState !== null;
          if (i) {
            I0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : I0(e);
      }
    }
    function I0(e) {
      for (; Se !== null; ) {
        var t = Se;
        $t(t);
        try {
          Q_(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (sn(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function ab(e, t, a, i) {
      Se = t, ib(t, e, a, i);
    }
    function ib(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & Wi) !== ke && s !== null ? (s.return = u, Se = s) : lb(e, t, a, i);
      }
    }
    function lb(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & Wr) !== ke) {
          $t(u);
          try {
            ub(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          sn();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function ub(e, t, a, i) {
      switch (t.tag) {
        case pe:
        case Qe:
        case Fe: {
          if (t.mode & Nt) {
            Qg();
            try {
              Fo(jr | cr, t);
            } finally {
              $g(t);
            }
          } else
            Fo(jr | cr, t);
          break;
        }
      }
    }
    function ob(e) {
      Se = e, sb();
    }
    function sb() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & ka) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, db(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Se = e;
          }
        }
        (e.subtreeFlags & Wi) !== ke && t !== null ? (t.return = e, Se = t) : cb();
      }
    }
    function cb() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & Wr) !== ke && ($t(e), fb(e), sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function fb(e) {
      switch (e.tag) {
        case pe:
        case Qe:
        case Fe: {
          e.mode & Nt ? (Qg(), ol(jr | cr, e, e.return), $g(e)) : ol(jr | cr, e, e.return);
          break;
        }
      }
    }
    function db(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        $t(a), vb(a, t), sn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : pb(e);
      }
    }
    function pb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (A0(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function vb(e, t) {
      switch (e.tag) {
        case pe:
        case Qe:
        case Fe: {
          e.mode & Nt ? (Qg(), ol(jr, e, t), $g(e)) : ol(jr, e, t);
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case pe:
        case Qe:
        case Fe: {
          try {
            Fo(fr | cr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case he: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case pe:
        case Qe:
        case Fe: {
          try {
            Fo(jr | cr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case pe:
        case Qe:
        case Fe: {
          try {
            ol(fr | cr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case he: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && xS(e, e.return, t);
          break;
        }
      }
    }
    function gb(e) {
      switch (e.tag) {
        case pe:
        case Qe:
        case Fe:
          try {
            ol(jr | cr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var Sb = [];
    function Eb() {
      Sb.forEach(function(e) {
        return e();
      });
    }
    var Cb = L.ReactCurrentActQueue;
    function Rb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function $0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Cb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Tb = Math.ceil, kS = L.ReactCurrentDispatcher, DS = L.ReactCurrentOwner, Pr = L.ReactCurrentBatchConfig, fl = L.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), Q0 = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Ai = (
      /*                */
      4
    ), Pu = 0, Ap = 1, ec = 2, Dm = 3, jp = 4, W0 = 5, OS = 6, Rt = vr, Sa = null, Dn = null, hr = $, Xl = $, NS = Do($), mr = Pu, Fp = null, Om = $, Hp = $, Nm = $, Vp = null, Va = null, LS = 0, G0 = 500, q0 = 1 / 0, xb = 500, Bu = null;
    function Pp() {
      q0 = Qn() + xb;
    }
    function X0() {
      return q0;
    }
    var Lm = !1, MS = null, Pf = null, tc = !1, Vo = null, Bp = $, zS = [], US = null, wb = 50, Yp = 0, AS = null, jS = !1, Mm = !1, _b = 50, Bf = 0, zm = null, Ip = Kt, Um = $, K0 = !1;
    function Am() {
      return Sa;
    }
    function Ea() {
      return (Rt & (Br | Ai)) !== vr ? Qn() : (Ip !== Kt || (Ip = Qn()), Ip);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & ut) === De)
        return je;
      if ((Rt & Br) !== vr && hr !== $)
        return Rs(hr);
      var a = Cw() !== Ew;
      if (a) {
        if (Pr.transition !== null) {
          var i = Pr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Um === kt && (Um = Ld()), Um;
      }
      var u = Ua();
      if (u !== kt)
        return u;
      var s = ix();
      return s;
    }
    function bb(e) {
      var t = e.mode;
      return (t & ut) === De ? je : Vv();
    }
    function yr(e, t, a, i) {
      Kb(), K0 && S("useInsertionEffect must not schedule updates."), jS && (Mm = !0), go(e, a, i), (Rt & Br) !== $ && e === Sa ? e1(t) : (Kr && ws(e, t, a), t1(t), e === Sa && ((Rt & Br) === vr && (Hp = Xe(Hp, a)), mr === jp && Bo(e, hr)), Pa(e, i), a === je && Rt === vr && (t.mode & ut) === De && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !fl.isBatchingLegacy && (Pp(), KE()));
    }
    function kb(e, t, a) {
      var i = e.current;
      i.lanes = t, go(e, t, a), Pa(e, a);
    }
    function Db(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & Br) !== vr
      );
    }
    function Pa(e, t) {
      var a = e.callbackNode;
      Xc(e, t);
      var i = qc(e, e === Sa ? hr : $);
      if (i === $) {
        a !== null && pR(a), e.callbackNode = null, e.callbackPriority = kt;
        return;
      }
      var u = zl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(fl.current !== null && a !== IS)) {
        a == null && s !== je && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && pR(a);
      var f;
      if (u === je)
        e.tag === Oo ? (fl.isBatchingLegacy !== null && (fl.didScheduleLegacyUpdate = !0), rw(eR.bind(null, e))) : XE(eR.bind(null, e)), fl.current !== null ? fl.current.push(No) : ux(function() {
          (Rt & (Br | Ai)) === vr && No();
        }), f = null;
      else {
        var p;
        switch (Wv(i)) {
          case Nr:
            p = os;
            break;
          case _i:
            p = Ol;
            break;
          case Ma:
            p = Gi;
            break;
          case za:
            p = hu;
            break;
          default:
            p = Gi;
            break;
        }
        f = $S(p, Z0.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function Z0(e, t) {
      if (Ww(), Ip = Kt, Um = $, (Rt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Iu();
      if (i && e.callbackNode !== a)
        return null;
      var u = qc(e, e === Sa ? hr : $);
      if (u === $)
        return null;
      var s = !Zc(e, u) && !Hv(e, u) && !t, f = s ? Hb(e, u) : Fm(e, u);
      if (f !== Pu) {
        if (f === ec) {
          var p = Kc(e);
          p !== $ && (u = p, f = FS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw nc(e, $), Bo(e, u), Pa(e, Qn()), v;
        }
        if (f === OS)
          Bo(e, u);
        else {
          var y = !Zc(e, u), g = e.current.alternate;
          if (y && !Nb(g)) {
            if (f = Fm(e, u), f === ec) {
              var _ = Kc(e);
              _ !== $ && (u = _, f = FS(e, _));
            }
            if (f === Ap) {
              var x = Fp;
              throw nc(e, $), Bo(e, u), Pa(e, Qn()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Ob(e, f, u);
        }
      }
      return Pa(e, Qn()), e.callbackNode === a ? Z0.bind(null, e) : null;
    }
    function FS(e, t) {
      var a = Vp;
      if (tf(e)) {
        var i = nc(e, t);
        i.flags |= Cr, Xx(e.containerInfo);
      }
      var u = Fm(e, t);
      if (u !== ec) {
        var s = Va;
        Va = a, s !== null && J0(s);
      }
      return u;
    }
    function J0(e) {
      Va === null ? Va = e : Va.push.apply(Va, e);
    }
    function Ob(e, t, a) {
      switch (t) {
        case Pu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Va, Bu);
          break;
        }
        case Dm: {
          if (Bo(e, a), _u(a) && // do not delay if we're inside an act() scope
          !vR()) {
            var i = LS + G0 - Qn();
            if (i > 10) {
              var u = qc(e, $);
              if (u !== $)
                break;
              var s = e.suspendedLanes;
              if (!bu(s, a)) {
                Ea(), Jc(e, s);
                break;
              }
              e.timeoutHandle = Uy(rc.bind(null, e, Va, Bu), i);
              break;
            }
          }
          rc(e, Va, Bu);
          break;
        }
        case jp: {
          if (Bo(e, a), Od(a))
            break;
          if (!vR()) {
            var f = ri(e, a), p = f, v = Qn() - p, y = Xb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(rc.bind(null, e, Va, Bu), y);
              break;
            }
          }
          rc(e, Va, Bu);
          break;
        }
        case W0: {
          rc(e, Va, Bu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Nb(e) {
      for (var t = e; ; ) {
        if (t.flags & po) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!G(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & po && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Bo(e, t) {
      t = Ts(t, Nm), t = Ts(t, Hp), Yv(e, t);
    }
    function eR(e) {
      if (Gw(), (Rt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      Iu();
      var t = qc(e, $);
      if (!Jr(t, je))
        return Pa(e, Qn()), null;
      var a = Fm(e, t);
      if (e.tag !== Oo && a === ec) {
        var i = Kc(e);
        i !== $ && (t = i, a = FS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw nc(e, $), Bo(e, t), Pa(e, Qn()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Va, Bu), Pa(e, Qn()), null;
    }
    function Lb(e, t) {
      t !== $ && (ef(e, Xe(t, je)), Pa(e, Qn()), (Rt & (Br | Ai)) === vr && (Pp(), No()));
    }
    function HS(e, t) {
      var a = Rt;
      Rt |= Q0;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !fl.isBatchingLegacy && (Pp(), KE());
      }
    }
    function Mb(e, t, a, i, u) {
      var s = Ua(), f = Pr.transition;
      try {
        return Pr.transition = null, jn(Nr), e(t, a, i, u);
      } finally {
        jn(s), Pr.transition = f, Rt === vr && Pp();
      }
    }
    function Yu(e) {
      Vo !== null && Vo.tag === Oo && (Rt & (Br | Ai)) === vr && Iu();
      var t = Rt;
      Rt |= Q0;
      var a = Pr.transition, i = Ua();
      try {
        return Pr.transition = null, jn(Nr), e ? e() : void 0;
      } finally {
        jn(i), Pr.transition = a, Rt = t, (Rt & (Br | Ai)) === vr && No();
      }
    }
    function tR() {
      return (Rt & (Br | Ai)) !== vr;
    }
    function jm(e, t) {
      aa(NS, Xl, e), Xl = Xe(Xl, t);
    }
    function VS(e) {
      Xl = NS.current, ra(NS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, lx(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var u = i.alternate;
          O0(u, i), i = i.return;
        }
      Sa = e;
      var s = ac(e.current, null);
      return Dn = s, hr = Xl = t, mr = Pu, Fp = null, Om = $, Hp = $, Nm = $, Vp = null, Va = null, kw(), rl.discardPendingWarnings(), s;
    }
    function nR(e, t) {
      do {
        var a = Dn;
        try {
          if (Wh(), _C(), sn(), DS.current = null, a === null || a.return === null) {
            mr = Ap, Fp = t, Dn = null;
            return;
          }
          if (Ae && a.mode & Nt && Rm(a, !0), He)
            if (ha(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              wi(a, i, hr);
            } else
              cs(a, t, hr);
          r_(e, a.return, a, t, hr), lR(a);
        } catch (u) {
          t = u, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function rR() {
      var e = kS.current;
      return kS.current = ym, e === null ? ym : e;
    }
    function aR(e) {
      kS.current = e;
    }
    function zb() {
      LS = Qn();
    }
    function $p(e) {
      Om = Xe(e, Om);
    }
    function Ub() {
      mr === Pu && (mr = Dm);
    }
    function PS() {
      (mr === Pu || mr === Dm || mr === ec) && (mr = jp), Sa !== null && (Cs(Om) || Cs(Hp)) && Bo(Sa, hr);
    }
    function Ab(e) {
      mr !== jp && (mr = ec), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function jb() {
      return mr === Pu;
    }
    function Fm(e, t) {
      var a = Rt;
      Rt |= Br;
      var i = rR();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, hr), u.clear()), Iv(e, t);
        }
        Bu = Ad(), nc(e, t);
      }
      Su(t);
      do
        try {
          Fb();
          break;
        } catch (s) {
          nR(e, s);
        }
      while (!0);
      if (Wh(), Rt = a, aR(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Nc(), Sa = null, hr = $, mr;
    }
    function Fb() {
      for (; Dn !== null; )
        iR(Dn);
    }
    function Hb(e, t) {
      var a = Rt;
      Rt |= Br;
      var i = rR();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, hr), u.clear()), Iv(e, t);
        }
        Bu = Ad(), Pp(), nc(e, t);
      }
      Su(t);
      do
        try {
          Vb();
          break;
        } catch (s) {
          nR(e, s);
        }
      while (!0);
      return Wh(), aR(i), Rt = a, Dn !== null ? (Uv(), Pu) : (Nc(), Sa = null, hr = $, mr);
    }
    function Vb() {
      for (; Dn !== null && !hd(); )
        iR(Dn);
    }
    function iR(e) {
      var t = e.alternate;
      $t(e);
      var a;
      (e.mode & Nt) !== De ? (Ig(e), a = BS(t, e, Xl), Rm(e, !0)) : a = BS(t, e, Xl), sn(), e.memoizedProps = e.pendingProps, a === null ? lR(e) : Dn = a, DS.current = null;
    }
    function lR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & us) === ke) {
          $t(t);
          var u = void 0;
          if ((t.mode & Nt) === De ? u = D0(a, t, Xl) : (Ig(t), u = D0(a, t, Xl), Rm(t, !1)), sn(), u !== null) {
            Dn = u;
            return;
          }
        } else {
          var s = U_(a, t);
          if (s !== null) {
            s.flags &= Dv, Dn = s;
            return;
          }
          if ((t.mode & Nt) !== De) {
            Rm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= us, i.subtreeFlags = ke, i.deletions = null;
          else {
            mr = OS, Dn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Dn = v;
          return;
        }
        t = i, Dn = t;
      } while (t !== null);
      mr === Pu && (mr = W0);
    }
    function rc(e, t, a) {
      var i = Ua(), u = Pr.transition;
      try {
        Pr.transition = null, jn(Nr), Pb(e, t, a, i);
      } finally {
        Pr.transition = u, jn(i);
      }
      return null;
    }
    function Pb(e, t, a, i) {
      do
        Iu();
      while (Vo !== null);
      if (Zb(), (Rt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Cd(s), u === null)
        return Rd(), null;
      if (s === $ && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = kt;
      var f = Xe(u.lanes, u.childLanes);
      zd(e, f), e === Sa && (Sa = null, Dn = null, hr = $), ((u.subtreeFlags & Wi) !== ke || (u.flags & Wi) !== ke) && (tc || (tc = !0, US = a, $S(Gi, function() {
        return Iu(), null;
      })));
      var p = (u.subtreeFlags & (bl | kl | Dl | Wi)) !== ke, v = (u.flags & (bl | kl | Dl | Wi)) !== ke;
      if (p || v) {
        var y = Pr.transition;
        Pr.transition = null;
        var g = Ua();
        jn(Nr);
        var _ = Rt;
        Rt |= Ai, DS.current = null, V_(e, u), KC(), eb(e, u, s), JT(e.containerInfo), e.current = u, fs(s), tb(u, e, s), ds(), md(), Rt = _, jn(g), Pr.transition = y;
      } else
        e.current = u, KC();
      var x = tc;
      if (tc ? (tc = !1, Vo = e, Bp = s) : (Bf = 0, zm = null), f = e.pendingLanes, f === $ && (Pf = null), x || cR(e.current, !1), gd(u.stateNode, i), Kr && e.memoizedUpdaters.clear(), Eb(), Pa(e, Qn()), t !== null)
        for (var M = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], ue = F.stack, Le = F.digest;
          M(F.value, {
            componentStack: ue,
            digest: Le
          });
        }
      if (Lm) {
        Lm = !1;
        var we = MS;
        throw MS = null, we;
      }
      return Jr(Bp, je) && e.tag !== Oo && Iu(), f = e.pendingLanes, Jr(f, je) ? (Qw(), e === AS ? Yp++ : (Yp = 0, AS = e)) : Yp = 0, No(), Rd(), null;
    }
    function Iu() {
      if (Vo !== null) {
        var e = Wv(Bp), t = bs(Ma, e), a = Pr.transition, i = Ua();
        try {
          return Pr.transition = null, jn(t), Yb();
        } finally {
          jn(i), Pr.transition = a;
        }
      }
      return !1;
    }
    function Bb(e) {
      zS.push(e), tc || (tc = !0, $S(Gi, function() {
        return Iu(), null;
      }));
    }
    function Yb() {
      if (Vo === null)
        return !1;
      var e = US;
      US = null;
      var t = Vo, a = Bp;
      if (Vo = null, Bp = $, (Rt & (Br | Ai)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, Mm = !1, gu(a);
      var i = Rt;
      Rt |= Ai, ob(t.current), ab(t, t.current, a, e);
      {
        var u = zS;
        zS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          I_(t, f);
        }
      }
      wd(), cR(t.current, !0), Rt = i, No(), Mm ? t === zm ? Bf++ : (Bf = 0, zm = t) : Bf = 0, jS = !1, Mm = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function uR(e) {
      return Pf !== null && Pf.has(e);
    }
    function Ib(e) {
      Pf === null ? Pf = /* @__PURE__ */ new Set([e]) : Pf.add(e);
    }
    function $b(e) {
      Lm || (Lm = !0, MS = e);
    }
    var Qb = $b;
    function oR(e, t, a) {
      var i = Zs(a, t), u = i0(e, i, je), s = Mo(e, u, je), f = Ea();
      s !== null && (go(s, je, f), Pa(s, f));
    }
    function cn(e, t, a) {
      if (j_(a), Wp(!1), e.tag === te) {
        oR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          oR(i, e, a);
          return;
        } else if (i.tag === he) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !uR(s)) {
            var f = Zs(a, e), p = oS(i, f, je), v = Mo(i, p, je), y = Ea();
            v !== null && (go(v, je, y), Pa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Wb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ea();
      Jc(e, a), n1(e), Sa === e && bu(hr, a) && (mr === jp || mr === Dm && _u(hr) && Qn() - LS < G0 ? nc(e, $) : Nm = Xe(Nm, a)), Pa(e, u);
    }
    function sR(e, t) {
      t === kt && (t = bb(e));
      var a = Ea(), i = Fa(e, t);
      i !== null && (go(i, t, a), Pa(i, a));
    }
    function Gb(e) {
      var t = e.memoizedState, a = kt;
      t !== null && (a = t.retryLane), sR(e, a);
    }
    function qb(e, t) {
      var a = kt, i;
      switch (e.tag) {
        case be:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ln:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), sR(e, a);
    }
    function Xb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Tb(e / 1960) * 1960;
    }
    function Kb() {
      if (Yp > wb)
        throw Yp = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > _b && (Bf = 0, zm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Zb() {
      rl.flushLegacyContextWarning(), rl.flushPendingUnsafeLifecycleWarnings();
    }
    function cR(e, t) {
      $t(e), Hm(e, _l, yb), t && Hm(e, Ri, gb), Hm(e, _l, hb), t && Hm(e, Ri, mb), sn();
    }
    function Hm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ke ? i = i.child : ((i.flags & t) !== ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Vm = null;
    function fR(e) {
      {
        if ((Rt & Br) !== vr || !(e.mode & ut))
          return;
        var t = e.tag;
        if (t !== ot && t !== te && t !== he && t !== pe && t !== Qe && t !== st && t !== Fe)
          return;
        var a = Be(e) || "ReactComponent";
        if (Vm !== null) {
          if (Vm.has(a))
            return;
          Vm.add(a);
        } else
          Vm = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          $t(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? $t(e) : sn();
        }
      }
    }
    var BS;
    {
      var Jb = null;
      BS = function(e, t, a) {
        var i = SR(Jb, t);
        try {
          return x0(e, t, a);
        } catch (s) {
          if (fw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Wh(), _C(), O0(e, t), SR(t, i), t.mode & Nt && Ig(t), wl(null, x0, null, e, t, a), $i()) {
            var u = ls();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var dR = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function e1(e) {
      if (hi && !Yw())
        switch (e.tag) {
          case pe:
          case Qe:
          case Fe: {
            var t = Dn && Be(Dn) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Be(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case he: {
            dR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), dR = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (Kr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ws(e, i, t);
        });
      }
    }
    var IS = {};
    function $S(e, t) {
      {
        var a = fl.current;
        return a !== null ? (a.push(t), IS) : vd(e, t);
      }
    }
    function pR(e) {
      if (e !== IS)
        return Nv(e);
    }
    function vR() {
      return fl.current !== null;
    }
    function t1(e) {
      {
        if (e.mode & ut) {
          if (!$0())
            return;
        } else if (!Rb() || Rt !== vr || e.tag !== pe && e.tag !== Qe && e.tag !== Fe)
          return;
        if (fl.current === null) {
          var t = ir;
          try {
            $t(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Be(e));
          } finally {
            t ? $t(e) : sn();
          }
        }
      }
    }
    function n1(e) {
      e.tag !== Oo && $0() && fl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      K0 = e;
    }
    var ji = null, Yf = null, r1 = function(e) {
      ji = e;
    };
    function If(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return If(e);
    }
    function WS(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = If(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: I,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function hR(e, t) {
      {
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case he: {
            typeof i == "function" && (u = !0);
            break;
          }
          case pe: {
            (typeof i == "function" || s === Ye) && (u = !0);
            break;
          }
          case Qe: {
            (s === I || s === Ye) && (u = !0);
            break;
          }
          case st:
          case Fe: {
            (s === Ge || s === Ye) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ji(a);
          if (f !== void 0 && f === ji(i))
            return !0;
        }
        return !1;
      }
    }
    function mR(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        Yf === null && (Yf = /* @__PURE__ */ new WeakSet()), Yf.add(e);
      }
    }
    var a1 = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Iu(), Yu(function() {
          GS(e.current, i, a);
        });
      }
    }, i1 = function(e, t) {
      {
        if (e.context !== li)
          return;
        Iu(), Yu(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function GS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case pe:
          case Fe:
          case he:
            v = p;
            break;
          case Qe:
            v = p.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = ji(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === he ? g = !0 : y = !0));
        }
        if (Yf !== null && (Yf.has(e) || i !== null && Yf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Fa(e, je);
          x !== null && yr(x, e, je, Kt);
        }
        u !== null && !g && GS(u, t, a), s !== null && GS(s, t, a);
      }
    }
    var l1 = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case pe:
          case Fe:
          case he:
            p = f;
            break;
          case Qe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? u1(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function u1(e, t) {
      {
        var a = o1(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case oe:
              t.add(i.stateNode);
              return;
            case Re:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function o1(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === oe)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var XS;
    {
      XS = !1;
      try {
        var yR = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function s1(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new s1(e, t, a, i);
    };
    function KS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function c1(e) {
      return typeof e == "function" && !KS(e) && e.defaultProps === void 0;
    }
    function f1(e) {
      if (typeof e == "function")
        return KS(e) ? he : pe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return Qe;
        if (t === Ge)
          return st;
      }
      return ot;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ot:
        case pe:
        case Fe:
          a.type = If(e.type);
          break;
        case he:
          a.type = QS(e.type);
          break;
        case Qe:
          a.type = WS(e.type);
          break;
      }
      return a;
    }
    function d1(e, t) {
      e.flags &= zn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = $, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function p1(e, t, a) {
      var i;
      return e === jh ? (i = ut, t === !0 && (i |= Gt, i |= Lt)) : i = De, Kr && (i |= Nt), ui(te, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = ot, p = e;
      if (typeof e == "function")
        KS(e) ? (f = he, p = QS(p)) : p = If(p);
      else if (typeof e == "string")
        f = oe;
      else
        e: switch (e) {
          case fi:
            return Yo(a.children, u, s, t);
          case Qa:
            f = ht, u |= Gt, (u & ut) !== De && (u |= Lt);
            break;
          case di:
            return v1(a, u, s, t);
          case ie:
            return h1(a, u, s, t);
          case me:
            return m1(a, u, s, t);
          case Tn:
            return gR(a, u, s, t);
          case tn:
          case ct:
          case on:
          case ar:
          case lt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case pi:
                  f = pt;
                  break e;
                case R:
                  f = fn;
                  break e;
                case I:
                  f = Qe, p = WS(p);
                  break e;
                case Ge:
                  f = st;
                  break e;
                case Ye:
                  f = an, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Be(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function JS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = ZS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = ui(St, e, i, t);
      return u.lanes = a, u;
    }
    function v1(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(mt, e, i, t | Nt);
      return u.elementType = di, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function h1(e, t, a, i) {
      var u = ui(be, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function m1(e, t, a, i) {
      var u = ui(ln, e, i, t);
      return u.elementType = me, u.lanes = a, u;
    }
    function gR(e, t, a, i) {
      var u = ui(Oe, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function eE(e, t, a) {
      var i = ui($e, e, null, t);
      return i.lanes = a, i;
    }
    function y1() {
      var e = ui(oe, null, null, De);
      return e.elementType = "DELETED", e;
    }
    function g1(e) {
      var t = ui(Zt, null, null, De);
      return t.stateNode = e, t;
    }
    function tE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(Re, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function SR(e, t) {
      return e === null && (e = ui(ot, null, null, De)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function S1(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = kt, this.eventTimes = xs($), this.expirationTimes = xs(Kt), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = xs($), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Eu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case jh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Oo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function ER(e, t, a, i, u, s, f, p, v, y) {
      var g = new S1(e, t, a, p, v), _ = p1(t, s);
      g.current = _, _.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = x;
      }
      return vg(_), g;
    }
    var nE = "18.3.1";
    function E1(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ir(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var rE, aE;
    rE = !1, aE = {};
    function CR(e) {
      if (!e)
        return li;
      var t = fo(e), a = nw(t);
      if (t.tag === he) {
        var i = t.type;
        if (Yl(i))
          return GE(t, i, a);
      }
      return a;
    }
    function C1(e, t) {
      {
        var a = fo(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qr(a);
        if (u === null)
          return null;
        if (u.mode & Gt) {
          var s = Be(a) || "Component";
          if (!aE[s]) {
            aE[s] = !0;
            var f = ir;
            try {
              $t(u), a.mode & Gt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? $t(f) : sn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function RR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return ER(e, t, v, y, a, i, u, s, f);
    }
    function TR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = ER(a, i, g, e, u, s, f, p, v);
      _.context = CR(null);
      var x = _.current, M = Ea(), A = Po(x), F = Hu(M, A);
      return F.callback = t ?? null, Mo(x, F, A), kb(_, A, M), _;
    }
    function Gp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = Ea(), f = Po(u);
      gn(f);
      var p = CR(a);
      t.context === null ? t.context = p : t.pendingContext = p, hi && ir !== null && !rE && (rE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Be(ir) || "Unknown"));
      var v = Hu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Mo(u, v, f);
      return y !== null && (yr(y, u, f, s), Zh(y, u, f)), f;
    }
    function Pm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case oe:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function R1(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = jv(t);
            Lb(t, a);
          }
          break;
        }
        case be: {
          Yu(function() {
            var u = Fa(e, je);
            if (u !== null) {
              var s = Ea();
              yr(u, e, je, s);
            }
          });
          var i = je;
          iE(e, i);
          break;
        }
      }
    }
    function xR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Bv(a.retryLane, t));
    }
    function iE(e, t) {
      xR(e, t);
      var a = e.alternate;
      a && xR(a, t);
    }
    function T1(e) {
      if (e.tag === be) {
        var t = gs, a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function x1(e) {
      if (e.tag === be) {
        var t = Po(e), a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function wR(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var _R = function(e) {
      return null;
    };
    function w1(e) {
      return _R(e);
    }
    var bR = function(e) {
      return !1;
    };
    function _1(e) {
      return bR(e);
    }
    var kR = null, DR = null, OR = null, NR = null, LR = null, MR = null, zR = null, UR = null, AR = null;
    {
      var jR = function(e, t, a) {
        var i = t[a], u = nt(e) ? e.slice() : Ze({}, e);
        return a + 1 === t.length ? (nt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = jR(e[i], t, a + 1), u);
      }, FR = function(e, t) {
        return jR(e, t, 0);
      }, HR = function(e, t, a, i) {
        var u = t[i], s = nt(e) ? e.slice() : Ze({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], nt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = HR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, VR = function(e, t, a) {
        if (t.length !== a.length) {
          dt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              dt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return HR(e, t, a, 0);
      }, PR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = nt(e) ? e.slice() : Ze({}, e);
        return s[u] = PR(e[u], t, a + 1, i), s;
      }, BR = function(e, t, a) {
        return PR(e, t, 0, a);
      }, lE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      kR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = BR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ze({}, e.memoizedProps);
          var f = Fa(e, je);
          f !== null && yr(f, e, je, Kt);
        }
      }, DR = function(e, t, a) {
        var i = lE(e, t);
        if (i !== null) {
          var u = FR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ze({}, e.memoizedProps);
          var s = Fa(e, je);
          s !== null && yr(s, e, je, Kt);
        }
      }, OR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ze({}, e.memoizedProps);
          var f = Fa(e, je);
          f !== null && yr(f, e, je, Kt);
        }
      }, NR = function(e, t, a) {
        e.pendingProps = BR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, je);
        i !== null && yr(i, e, je, Kt);
      }, LR = function(e, t) {
        e.pendingProps = FR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Fa(e, je);
        a !== null && yr(a, e, je, Kt);
      }, MR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, je);
        i !== null && yr(i, e, je, Kt);
      }, zR = function(e) {
        var t = Fa(e, je);
        t !== null && yr(t, e, je, Kt);
      }, UR = function(e) {
        _R = e;
      }, AR = function(e) {
        bR = e;
      };
    }
    function b1(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function k1(e) {
      return null;
    }
    function D1() {
      return ir;
    }
    function O1(e) {
      var t = e.findFiberByHostInstance, a = L.ReactCurrentDispatcher;
      return ho({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: kR,
        overrideHookStateDeletePath: DR,
        overrideHookStateRenamePath: OR,
        overrideProps: NR,
        overridePropsDeletePath: LR,
        overridePropsRenamePath: MR,
        setErrorHandler: UR,
        setSuspenseHandler: AR,
        scheduleUpdate: zR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: b1,
        findFiberByHostInstance: t || k1,
        // React Refresh
        findHostInstancesForRefresh: l1,
        scheduleRefresh: a1,
        scheduleRoot: i1,
        setRefreshHandler: r1,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: D1,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: nE
      });
    }
    var YR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function uE(e) {
      this._internalRoot = e;
    }
    Bm.prototype.render = uE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ym(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ln) {
          var i = wR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Gp(e, t, null, null);
    }, Bm.prototype.unmount = uE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        tR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yu(function() {
          Gp(null, e, null, null);
        }), YE(t);
      }
    };
    function N1(e, t) {
      if (!Ym(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      IR(e);
      var a = !1, i = !1, u = "", s = YR;
      t != null && (t.hydrate ? dt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === br && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = RR(e, jh, null, a, i, u, s);
      Oh(f.current, e);
      var p = e.nodeType === Ln ? e.parentNode : e;
      return ep(p), new uE(f);
    }
    function Bm(e) {
      this._internalRoot = e;
    }
    function L1(e) {
      e && Zv(e);
    }
    Bm.prototype.unstable_scheduleHydration = L1;
    function M1(e, t, a) {
      if (!Ym(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      IR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = YR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = TR(t, null, e, jh, i, s, f, p, v);
      if (Oh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          jw(y, _);
        }
      return new Bm(y);
    }
    function Ym(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Ii || e.nodeType === nd));
    }
    function qp(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Ii || e.nodeType === nd || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function IR(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var z1 = L.ReactCurrentOwner, $R;
    $R = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = wR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = oE(e), u = !!(i && ko(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function oE(e) {
      return e ? e.nodeType === Ii ? e.documentElement : e.firstChild : null;
    }
    function QR() {
    }
    function U1(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Pm(f);
            s.call(x);
          };
        }
        var f = TR(
          t,
          i,
          e,
          Oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QR
        );
        e._reactRootContainer = f, Oh(f.current, e);
        var p = e.nodeType === Ln ? e.parentNode : e;
        return ep(p), Yu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = Pm(g);
            y.call(x);
          };
        }
        var g = RR(
          e,
          Oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QR
        );
        e._reactRootContainer = g, Oh(g.current, e);
        var _ = e.nodeType === Ln ? e.parentNode : e;
        return ep(_), Yu(function() {
          Gp(t, g, a, i);
        }), g;
      }
    }
    function A1(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Im(e, t, a, i, u) {
      $R(a), A1(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = U1(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Pm(f);
            p.call(v);
          };
        }
        Gp(t, f, e, u);
      }
      return Pm(f);
    }
    var WR = !1;
    function j1(e) {
      {
        WR || (WR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = z1.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : C1(e, "findDOMNode");
    }
    function F1(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Im(null, e, t, !0, a);
    }
    function H1(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Im(null, e, t, !1, a);
    }
    function V1(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Im(e, t, a, !1, i);
    }
    var GR = !1;
    function P1(e) {
      if (GR || (GR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = oE(e), i = a && !ko(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yu(function() {
          Im(null, null, e, !1, function() {
            e._reactRootContainer = null, YE(e);
          });
        }), !0;
      } else {
        {
          var u = oE(e), s = !!(u && ko(u)), f = e.nodeType === Qr && qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Tr(R1), So(T1), Gv(x1), Ds(Ua), jd($v), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gc(YT), ay(HS, Mb, Yu);
    function B1(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ym(t))
        throw new Error("Target container is not a DOM element.");
      return E1(e, t, null, a);
    }
    function Y1(e, t, a, i) {
      return V1(e, t, a, i);
    }
    var sE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ko, Cf, Nh, uo, Sc, HS]
    };
    function I1(e, t) {
      return sE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), N1(e, t);
    }
    function $1(e, t, a) {
      return sE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), M1(e, t, a);
    }
    function Q1(e) {
      return tR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yu(e);
    }
    var W1 = O1({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: nE,
      rendererPackageName: "react-dom"
    });
    if (!W1 && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qR = window.location.protocol;
      /^(https?|file):$/.test(qR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sE, Ya.createPortal = B1, Ya.createRoot = I1, Ya.findDOMNode = j1, Ya.flushSync = Q1, Ya.hydrate = F1, Ya.hydrateRoot = $1, Ya.render = H1, Ya.unmountComponentAtNode = P1, Ya.unstable_batchedUpdates = HS, Ya.unstable_renderSubtreeIntoContainer = Y1, Ya.version = nE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ya;
}
function sT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sT);
    } catch (V) {
      console.error(V);
    }
  }
}
process.env.NODE_ENV === "production" ? (sT(), vE.exports = ak()) : vE.exports = ik();
var lk = vE.exports, hE, Qm = lk;
if (process.env.NODE_ENV === "production")
  hE = Qm.createRoot, Qm.hydrateRoot;
else {
  var iT = Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  hE = function(V, Y) {
    iT.usingClientEntryPoint = !0;
    try {
      return Qm.createRoot(V, Y);
    } finally {
      iT.usingClientEntryPoint = !1;
    }
  };
}
function lT(V) {
  if (!V)
    return "";
  const Y = new Date(V);
  if (Number.isNaN(Y.getTime()))
    return "";
  const L = Y.getTime() - Date.now();
  if (L <= 0)
    return "Матч-дэй уже начался";
  const vt = Math.floor(L / 6e4), rt = Math.floor(vt / (60 * 24)), dt = Math.floor(vt % (60 * 24) / 60), S = vt % 60;
  return rt > 0 ? `До стартового свистка: ${rt} д ${dt} ч` : `До стартового свистка: ${dt} ч ${String(S).padStart(2, "0")} мин`;
}
function uk(V) {
  const [Y, L] = ic.useState(() => lT(V));
  return ic.useEffect(() => {
    if (!V) {
      L("");
      return;
    }
    const vt = () => {
      L(lT(V));
    };
    vt();
    const rt = window.setInterval(vt, 3e4);
    return () => window.clearInterval(rt);
  }, [V]), Y;
}
function ok({ clubShortName: V, latestResult: Y }) {
  const L = Y && Y.score_for !== null && Y.score_against !== null;
  return /* @__PURE__ */ ee.jsxs("article", { className: "matchday-result-panel", children: [
    /* @__PURE__ */ ee.jsxs("div", { className: "matchday-result-panel__head", children: [
      /* @__PURE__ */ ee.jsx("span", { className: "matchday-result-panel__eyebrow", children: "Последний результат" }),
      Y != null && Y.source_url ? /* @__PURE__ */ ee.jsx("a", { href: Y.source_url, target: "_blank", rel: "noreferrer", className: "text-link", children: "Протокол матча" }) : null
    ] }),
    Y ? /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
      L ? /* @__PURE__ */ ee.jsxs("div", { className: "matchday-result-panel__score", children: [
        /* @__PURE__ */ ee.jsx("strong", { children: Y.score_for }),
        /* @__PURE__ */ ee.jsx("span", { children: ":" }),
        /* @__PURE__ */ ee.jsx("strong", { children: Y.score_against })
      ] }) : /* @__PURE__ */ ee.jsx("div", { className: "matchday-result-panel__status", children: "Счёт уточняется" }),
      /* @__PURE__ */ ee.jsxs("h3", { children: [
        V,
        " vs ",
        Y.opponent
      ] }),
      /* @__PURE__ */ ee.jsxs("p", { children: [
        Y.competition,
        " · ",
        Y.date_label
      ] }),
      Y.summary ? /* @__PURE__ */ ee.jsx("p", { className: "matchday-result-panel__summary", children: Y.summary }) : null
    ] }) : /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
      /* @__PURE__ */ ee.jsx("div", { className: "matchday-result-panel__status", children: "Нет завершённых матчей" }),
      /* @__PURE__ */ ee.jsx("h3", { children: "Результаты будут доступны после ближайшей игры" }),
      /* @__PURE__ */ ee.jsx("p", { children: "Модуль результата нужен, чтобы блок держал спортивный ритм, а не превращался в промо-баннер без футбола." })
    ] })
  ] });
}
function sk({ links: V }) {
  const Y = [
    {
      key: "membership_url",
      href: V.membership_url,
      className: "matchday-sales-card matchday-sales-card--soft",
      label: "Абонементы",
      title: "Сезонный доступ на домашние матчи",
      body: "Лучший сценарий для возвратной аудитории и повторных посещений."
    },
    {
      key: "shop_url",
      href: V.shop_url,
      className: "matchday-sales-card",
      label: "Магазин",
      title: "Форма, капсулы и клубный мерч",
      body: "Коммерческий маршрут должен жить рядом с главным матчевым оффером."
    },
    {
      key: "hospitality_url",
      href: V.hospitality_url,
      className: "matchday-sales-card matchday-sales-card--dark",
      label: "Hospitality",
      title: "Премиальный день матча",
      body: "Отдельный high-value вход для корпоративных гостей и business club."
    }
  ].filter((L) => L.href);
  return Y.length === 0 ? null : /* @__PURE__ */ ee.jsx("div", { className: "matchday-sales-rail", children: Y.map((L) => /* @__PURE__ */ ee.jsxs("a", { href: L.href, target: "_blank", rel: "noreferrer", className: L.className, children: [
    /* @__PURE__ */ ee.jsx("span", { children: L.label }),
    /* @__PURE__ */ ee.jsx("strong", { children: L.title }),
    /* @__PURE__ */ ee.jsx("p", { children: L.body })
  ] }, L.key)) });
}
function ck({ data: V }) {
  var L, vt, rt, dt, S;
  const Y = uk((L = V.featured_match) == null ? void 0 : L.kickoff_iso);
  return /* @__PURE__ */ ee.jsxs("div", { className: "matchday-deck", children: [
    /* @__PURE__ */ ee.jsxs("div", { className: "matchday-shell", children: [
      /* @__PURE__ */ ee.jsxs("div", { className: "matchday-shell__top", children: [
        /* @__PURE__ */ ee.jsxs("article", { className: "matchday-headliner", children: [
          /* @__PURE__ */ ee.jsxs("div", { className: "matchday-headliner__topline", children: [
            /* @__PURE__ */ ee.jsx("p", { className: "eyebrow", children: "Главный матч недели" }),
            /* @__PURE__ */ ee.jsx("span", { className: "matchday-headliner__competition", children: ((vt = V.featured_match) == null ? void 0 : vt.competition) || "Matchday center" })
          ] }),
          V.featured_match ? /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
            /* @__PURE__ */ ee.jsxs("div", { className: "matchday-headliner__versus", children: [
              /* @__PURE__ */ ee.jsxs("div", { className: "matchday-club", children: [
                /* @__PURE__ */ ee.jsx("span", { children: "Домашняя команда" }),
                /* @__PURE__ */ ee.jsx("strong", { children: V.club.short_name })
              ] }),
              /* @__PURE__ */ ee.jsx("div", { className: "matchday-club__separator", children: "vs" }),
              /* @__PURE__ */ ee.jsxs("div", { className: "matchday-club matchday-club--away", children: [
                /* @__PURE__ */ ee.jsx("span", { children: "Соперник" }),
                /* @__PURE__ */ ee.jsx("strong", { children: V.featured_match.opponent })
              ] })
            ] }),
            /* @__PURE__ */ ee.jsxs("div", { className: "matchday-headliner__facts", children: [
              /* @__PURE__ */ ee.jsxs("div", { children: [
                /* @__PURE__ */ ee.jsx("span", { children: "Дата" }),
                /* @__PURE__ */ ee.jsx("strong", { children: V.featured_match.date_label })
              ] }),
              /* @__PURE__ */ ee.jsxs("div", { children: [
                /* @__PURE__ */ ee.jsx("span", { children: "Начало" }),
                /* @__PURE__ */ ee.jsx("strong", { children: V.featured_match.time_label })
              ] }),
              /* @__PURE__ */ ee.jsxs("div", { children: [
                /* @__PURE__ */ ee.jsx("span", { children: "Город" }),
                /* @__PURE__ */ ee.jsx("strong", { children: V.featured_match.city || V.club.city })
              ] }),
              /* @__PURE__ */ ee.jsxs("div", { children: [
                /* @__PURE__ */ ee.jsx("span", { children: "Арена" }),
                /* @__PURE__ */ ee.jsx("strong", { children: V.featured_match.venue })
              ] })
            ] }),
            /* @__PURE__ */ ee.jsx("p", { className: "matchday-headliner__note", children: "Ключевой матч вынесен как спортивная афиша: дата, время, город и покупка не конкурируют друг с другом, а собираются в одну геометрию." }),
            /* @__PURE__ */ ee.jsxs("div", { className: "matchday-headliner__footer", children: [
              /* @__PURE__ */ ee.jsx("div", { className: "matchday-headliner__countdown", children: Y }),
              /* @__PURE__ */ ee.jsxs("div", { className: "matchday-headliner__actions", children: [
                V.links.ticket_url ? /* @__PURE__ */ ee.jsx("a", { href: V.links.ticket_url, target: "_blank", rel: "noreferrer", className: "button", children: "Билеты на матч" }) : null,
                /* @__PURE__ */ ee.jsx("a", { href: V.links.matches_url, className: "text-link", children: "Весь календарь сезона" })
              ] })
            ] })
          ] }) : /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
            /* @__PURE__ */ ee.jsx("div", { className: "matchday-headliner__versus", children: /* @__PURE__ */ ee.jsxs("div", { className: "matchday-club", children: [
              /* @__PURE__ */ ee.jsx("span", { children: "Matchday" }),
              /* @__PURE__ */ ee.jsx("strong", { children: "Следующий матч появится здесь" })
            ] }) }),
            /* @__PURE__ */ ee.jsx("p", { className: "matchday-headliner__note", children: "Пока игра не назначена, секция остаётся главным входом в календарь, результаты и ключевые коммерческие предложения клуба." }),
            /* @__PURE__ */ ee.jsx("div", { className: "matchday-headliner__footer", children: /* @__PURE__ */ ee.jsx("div", { className: "matchday-headliner__actions", children: /* @__PURE__ */ ee.jsx("a", { href: V.links.matches_url, className: "button", children: "Открыть матч-центр" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ ee.jsx(ok, { clubShortName: V.club.short_name, latestResult: V.latest_result })
      ] }),
      /* @__PURE__ */ ee.jsx(sk, { links: V.links })
    ] }),
    /* @__PURE__ */ ee.jsx("div", { className: "matchday-ticker", children: /* @__PURE__ */ ee.jsxs("div", { className: "matchday-ticker__track", children: [
      /* @__PURE__ */ ee.jsx("span", { children: "Следующий матч" }),
      (rt = V.featured_match) != null && rt.opponent ? /* @__PURE__ */ ee.jsx("span", { children: V.featured_match.opponent }) : null,
      ((dt = V.latest_result) == null ? void 0 : dt.score_for) !== null && ((S = V.latest_result) == null ? void 0 : S.score_against) !== null ? /* @__PURE__ */ ee.jsxs("span", { children: [
        "Последний счёт ",
        V.latest_result.score_for,
        ":",
        V.latest_result.score_against
      ] }) : null,
      /* @__PURE__ */ ee.jsx("span", { children: V.club.stadium }),
      V.links.ticket_url ? /* @__PURE__ */ ee.jsx("span", { children: "Билеты" }) : null,
      V.links.membership_url ? /* @__PURE__ */ ee.jsx("span", { children: "Абонементы" }) : null,
      V.links.shop_url ? /* @__PURE__ */ ee.jsx("span", { children: "Магазин" }) : null
    ] }) })
  ] });
}
const uT = document.getElementById("matchday-react-root"), Wm = document.getElementById("matchday-island-data");
if (uT && (Wm != null && Wm.textContent)) {
  const V = JSON.parse(Wm.textContent);
  hE(uT).render(
    /* @__PURE__ */ ee.jsx(J1.StrictMode, { children: /* @__PURE__ */ ee.jsx(ck, { data: V }) })
  );
}
