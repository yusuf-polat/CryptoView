var bF = Object.defineProperty,
    CF = Object.defineProperties,
    EF = Object.getOwnPropertyDescriptors,
    q4 = Object.getOwnPropertySymbols,
    wF = Object.prototype.hasOwnProperty,
    DF = Object.prototype.propertyIsEnumerable,
    K4 = (Je, De, Ve) => De in Je ? bF(Je, De, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Ve
    }) : Je[De] = Ve,
    G = (Je, De) => {
        for (var Ve in De || (De = {})) wF.call(De, Ve) && K4(Je, Ve, De[Ve]);
        if (q4)
            for (var Ve of q4(De)) DF.call(De, Ve) && K4(Je, Ve, De[Ve]);
        return Je
    },
    fu = (Je, De) => CF(Je, EF(De));
(self.webpackChunkcrypo = self.webpackChunkcrypo || []).push([
    [179], {
        255: Je => {
            function De(Ve) {
                return Promise.resolve().then(() => {
                    var Wn = new Error("Cannot find module '" + Ve + "'");
                    throw Wn.code = "MODULE_NOT_FOUND", Wn
                })
            }
            De.keys = () => [], De.resolve = De, De.id = 255, Je.exports = De
        },
        988: (Je, De, Ve) => {
            "use strict";
            var Wn = {};

            function Oa(t) {
                return "function" == typeof t
            }
            Ve.r(Wn), Ve.d(Wn, {
                afterMain: () => H_,
                afterRead: () => V_,
                afterWrite: () => W_,
                applyStyles: () => Xf,
                arrow: () => Z_,
                auto: () => wc,
                basePlacements: () => Is,
                beforeMain: () => B_,
                beforeRead: () => L_,
                beforeWrite: () => j_,
                bottom: () => Kt,
                clippingParents: () => R_,
                computeStyles: () => Jf,
                createPopper: () => op,
                createPopperBase: () => AO,
                createPopperLite: () => OO,
                detectOverflow: () => Ns,
                end: () => Dc,
                eventListeners: () => ep,
                flip: () => rb,
                hide: () => ab,
                left: () => St,
                main: () => $_,
                modifierPhases: () => q_,
                offset: () => lb,
                placements: () => Yf,
                popper: () => Ms,
                popperGenerator: () => Oc,
                popperOffsets: () => sp,
                preventOverflow: () => cb,
                read: () => F_,
                reference: () => k_,
                right: () => zt,
                start: () => ar,
                top: () => Tt,
                variationPlacements: () => Gf,
                viewport: () => zf,
                write: () => U_
            });
            let pu = !1;
            const Jt = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(t) {
                    if (t) {
                        const e = new Error;
                        console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + e.stack)
                    } else pu && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                    pu = t
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return pu
                }
            };

            function Tr(t) {
                setTimeout(() => {
                    throw t
                }, 0)
            }
            const Na = {
                    closed: !0,
                    next(t) {},
                    error(t) {
                        if (Jt.useDeprecatedSynchronousErrorHandling) throw t;
                        Tr(t)
                    },
                    complete() {}
                },
                t1 = Array.isArray || (t => t && "number" == typeof t.length);

            function n1(t) {
                return null !== t && "object" == typeof t
            }
            const xa = (() => {
                function t(e) {
                    return Error.call(this), this.message = e ? `${e.length} errors occurred during unsubscription:\n${e.map((n,s)=>`${s+1}) ${n.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = e, this
                }
                return t.prototype = Object.create(Error.prototype), t
            })();
            class be {
                constructor(e) {
                    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e)
                }
                unsubscribe() {
                    let e;
                    if (this.closed) return;
                    let {
                        _parentOrParents: n,
                        _ctorUnsubscribe: s,
                        _unsubscribe: o,
                        _subscriptions: l
                    } = this;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof be) n.remove(this);
                    else if (null !== n)
                        for (let c = 0; c < n.length; ++c) n[c].remove(this);
                    if (Oa(o)) {
                        s && (this._unsubscribe = void 0);
                        try {
                            o.call(this)
                        } catch (c) {
                            e = c instanceof xa ? i1(c.errors) : [c]
                        }
                    }
                    if (t1(l)) {
                        let c = -1,
                            u = l.length;
                        for (; ++c < u;) {
                            const d = l[c];
                            if (n1(d)) try {
                                d.unsubscribe()
                            } catch (f) {
                                e = e || [], f instanceof xa ? e = e.concat(i1(f.errors)) : e.push(f)
                            }
                        }
                    }
                    if (e) throw new xa(e)
                }
                add(e) {
                    let n = e;
                    if (!e) return be.EMPTY;
                    switch (typeof e) {
                        case "function":
                            n = new be(e);
                        case "object":
                            if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                            if (this.closed) return n.unsubscribe(), n;
                            if (!(n instanceof be)) {
                                const l = n;
                                n = new be, n._subscriptions = [l]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + e + " added to Subscription.")
                    }
                    let {
                        _parentOrParents: s
                    } = n;
                    if (null === s) n._parentOrParents = this;
                    else if (s instanceof be) {
                        if (s === this) return n;
                        n._parentOrParents = [s, this]
                    } else {
                        if (-1 !== s.indexOf(this)) return n;
                        s.push(this)
                    }
                    const o = this._subscriptions;
                    return null === o ? this._subscriptions = [n] : o.push(n), n
                }
                remove(e) {
                    const n = this._subscriptions;
                    if (n) {
                        const s = n.indexOf(e); - 1 !== s && n.splice(s, 1)
                    }
                }
            }
            var t;

            function i1(t) {
                return t.reduce((e, n) => e.concat(n instanceof xa ? n.errors : n), [])
            }
            be.EMPTY = ((t = new be).closed = !0, t);
            const Pa = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
            class pe extends be {
                constructor(e, n, s) {
                    switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                        case 0:
                            this.destination = Na;
                            break;
                        case 1:
                            if (!e) {
                                this.destination = Na;
                                break
                            }
                            if ("object" == typeof e) {
                                e instanceof pe ? (this.syncErrorThrowable = e.syncErrorThrowable, this.destination = e, e.add(this)) : (this.syncErrorThrowable = !0, this.destination = new r1(this, e));
                                break
                            }
                            default:
                                this.syncErrorThrowable = !0, this.destination = new r1(this, e, n, s)
                    }
                } [Pa]() {
                    return this
                }
                static create(e, n, s) {
                    const o = new pe(e, n, s);
                    return o.syncErrorThrowable = !1, o
                }
                next(e) {
                    this.isStopped || this._next(e)
                }
                error(e) {
                    this.isStopped || (this.isStopped = !0, this._error(e))
                }
                complete() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }
                unsubscribe() {
                    this.closed || (this.isStopped = !0, super.unsubscribe())
                }
                _next(e) {
                    this.destination.next(e)
                }
                _error(e) {
                    this.destination.error(e), this.unsubscribe()
                }
                _complete() {
                    this.destination.complete(), this.unsubscribe()
                }
                _unsubscribeAndRecycle() {
                    const {
                        _parentOrParents: e
                    } = this;
                    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
                }
            }
            class r1 extends pe {
                constructor(e, n, s, o) {
                    super(), this._parentSubscriber = e;
                    let l, c = this;
                    Oa(n) ? l = n : n && (l = n.next, s = n.error, o = n.complete, n !== Na && (c = Object.create(n), Oa(c.unsubscribe) && this.add(c.unsubscribe.bind(c)), c.unsubscribe = this.unsubscribe.bind(this))), this._context = c, this._next = l, this._error = s, this._complete = o
                }
                next(e) {
                    if (!this.isStopped && this._next) {
                        const {
                            _parentSubscriber: n
                        } = this;
                        Jt.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable ? this.__tryOrSetError(n, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                    }
                }
                error(e) {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: n
                        } = this, {
                            useDeprecatedSynchronousErrorHandling: s
                        } = Jt;
                        if (this._error) s && n.syncErrorThrowable ? (this.__tryOrSetError(n, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                        else if (n.syncErrorThrowable) s ? (n.syncErrorValue = e, n.syncErrorThrown = !0) : Tr(e), this.unsubscribe();
                        else {
                            if (this.unsubscribe(), s) throw e;
                            Tr(e)
                        }
                    }
                }
                complete() {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: e
                        } = this;
                        if (this._complete) {
                            const n = () => this._complete.call(this._context);
                            Jt.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }
                __tryOrUnsub(e, n) {
                    try {
                        e.call(this._context, n)
                    } catch (s) {
                        if (this.unsubscribe(), Jt.useDeprecatedSynchronousErrorHandling) throw s;
                        Tr(s)
                    }
                }
                __tryOrSetError(e, n, s) {
                    if (!Jt.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        n.call(this._context, s)
                    } catch (o) {
                        return Jt.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = o, e.syncErrorThrown = !0, !0) : (Tr(o), !0)
                    }
                    return !1
                }
                _unsubscribe() {
                    const {
                        _parentSubscriber: e
                    } = this;
                    this._context = null, this._parentSubscriber = null, e.unsubscribe()
                }
            }
            const zs = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function Ra(t) {
                return t
            }
            let me = (() => {
                class t {
                    constructor(n) {
                        this._isScalar = !1, n && (this._subscribe = n)
                    }
                    lift(n) {
                        const s = new t;
                        return s.source = this, s.operator = n, s
                    }
                    subscribe(n, s, o) {
                        const {
                            operator: l
                        } = this, c = function (t, e, n) {
                            if (t) {
                                if (t instanceof pe) return t;
                                if (t[Pa]) return t[Pa]()
                            }
                            return t || e || n ? new pe(t, e, n) : new pe(Na)
                        }(n, s, o);
                        if (c.add(l ? l.call(c, this.source) : this.source || Jt.useDeprecatedSynchronousErrorHandling && !c.syncErrorThrowable ? this._subscribe(c) : this._trySubscribe(c)), Jt.useDeprecatedSynchronousErrorHandling && c.syncErrorThrowable && (c.syncErrorThrowable = !1, c.syncErrorThrown)) throw c.syncErrorValue;
                        return c
                    }
                    _trySubscribe(n) {
                        try {
                            return this._subscribe(n)
                        } catch (s) {
                            Jt.useDeprecatedSynchronousErrorHandling && (n.syncErrorThrown = !0, n.syncErrorValue = s),
                                function (t) {
                                    for (; t;) {
                                        const {
                                            closed: e,
                                            destination: n,
                                            isStopped: s
                                        } = t;
                                        if (e || s) return !1;
                                        t = n && n instanceof pe ? n : null
                                    }
                                    return !0
                                }(n) ? n.error(s) : console.warn(s)
                        }
                    }
                    forEach(n, s) {
                        return new(s = o1(s))((o, l) => {
                            let c;
                            c = this.subscribe(u => {
                                try {
                                    n(u)
                                } catch (d) {
                                    l(d), c && c.unsubscribe()
                                }
                            }, l, o)
                        })
                    }
                    _subscribe(n) {
                        const {
                            source: s
                        } = this;
                        return s && s.subscribe(n)
                    } [zs]() {
                        return this
                    }
                    pipe(...n) {
                        return 0 === n.length ? this : function (t) {
                            return 0 === t.length ? Ra : 1 === t.length ? t[0] : function (n) {
                                return t.reduce((s, o) => o(s), n)
                            }
                        }(n)(this)
                    }
                    toPromise(n) {
                        return new(n = o1(n))((s, o) => {
                            let l;
                            this.subscribe(c => l = c, c => o(c), () => s(l))
                        })
                    }
                }
                return t.create = e => new t(e), t
            })();

            function o1(t) {
                if (t || (t = Jt.Promise || Promise), !t) throw new Error("no Promise impl found");
                return t
            }
            const Sr = (() => {
                function t() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            })();
            class Y4 extends be {
                constructor(e, n) {
                    super(), this.subject = e, this.subscriber = n, this.closed = !1
                }
                unsubscribe() {
                    if (this.closed) return;
                    this.closed = !0;
                    const e = this.subject,
                        n = e.observers;
                    if (this.subject = null, !n || 0 === n.length || e.isStopped || e.closed) return;
                    const s = n.indexOf(this.subscriber); - 1 !== s && n.splice(s, 1)
                }
            }
            class a1 extends pe {
                constructor(e) {
                    super(e), this.destination = e
                }
            }
            let qn = (() => {
                class t extends me {
                    constructor() {
                        super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
                    } [Pa]() {
                        return new a1(this)
                    }
                    lift(n) {
                        const s = new l1(this, this);
                        return s.operator = n, s
                    }
                    next(n) {
                        if (this.closed) throw new Sr;
                        if (!this.isStopped) {
                            const {
                                observers: s
                            } = this, o = s.length, l = s.slice();
                            for (let c = 0; c < o; c++) l[c].next(n)
                        }
                    }
                    error(n) {
                        if (this.closed) throw new Sr;
                        this.hasError = !0, this.thrownError = n, this.isStopped = !0;
                        const {
                            observers: s
                        } = this, o = s.length, l = s.slice();
                        for (let c = 0; c < o; c++) l[c].error(n);
                        this.observers.length = 0
                    }
                    complete() {
                        if (this.closed) throw new Sr;
                        this.isStopped = !0;
                        const {
                            observers: n
                        } = this, s = n.length, o = n.slice();
                        for (let l = 0; l < s; l++) o[l].complete();
                        this.observers.length = 0
                    }
                    unsubscribe() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }
                    _trySubscribe(n) {
                        if (this.closed) throw new Sr;
                        return super._trySubscribe(n)
                    }
                    _subscribe(n) {
                        if (this.closed) throw new Sr;
                        return this.hasError ? (n.error(this.thrownError), be.EMPTY) : this.isStopped ? (n.complete(), be.EMPTY) : (this.observers.push(n), new Y4(this, n))
                    }
                    asObservable() {
                        const n = new me;
                        return n.source = this, n
                    }
                }
                return t.create = (e, n) => new l1(e, n), t
            })();
            class l1 extends qn {
                constructor(e, n) {
                    super(), this.destination = e, this.source = n
                }
                next(e) {
                    const {
                        destination: n
                    } = this;
                    n && n.next && n.next(e)
                }
                error(e) {
                    const {
                        destination: n
                    } = this;
                    n && n.error && this.destination.error(e)
                }
                complete() {
                    const {
                        destination: e
                    } = this;
                    e && e.complete && this.destination.complete()
                }
                _subscribe(e) {
                    const {
                        source: n
                    } = this;
                    return n ? this.source.subscribe(e) : be.EMPTY
                }
            }

            function ka(t) {
                return t && "function" == typeof t.schedule
            }

            function he(t, e) {
                return function (s) {
                    if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return s.lift(new X4(t, e))
                }
            }
            class X4 {
                constructor(e, n) {
                    this.project = e, this.thisArg = n
                }
                call(e, n) {
                    return n.subscribe(new Q4(e, this.project, this.thisArg))
                }
            }
            class Q4 extends pe {
                constructor(e, n, s) {
                    super(e), this.project = n, this.count = 0, this.thisArg = s || this
                }
                _next(e) {
                    let n;
                    try {
                        n = this.project.call(this.thisArg, e, this.count++)
                    } catch (s) {
                        return void this.destination.error(s)
                    }
                    this.destination.next(n)
                }
            }
            const c1 = t => e => {
                    for (let n = 0, s = t.length; n < s && !e.closed; n++) e.next(t[n]);
                    e.complete()
                },
                La = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator",
                u1 = t => t && "number" == typeof t.length && "function" != typeof t;

            function d1(t) {
                return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
            }
            const gu = t => {
                if (t && "function" == typeof t[zs]) return (t => e => {
                    const n = t[zs]();
                    if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                    return n.subscribe(e)
                })(t);
                if (u1(t)) return c1(t);
                if (d1(t)) return (t => e => (t.then(n => {
                    e.closed || (e.next(n), e.complete())
                }, n => e.error(n)).then(null, Tr), e))(t);
                if (t && "function" == typeof t[La]) return (t => e => {
                    const n = t[La]();
                    for (;;) {
                        let s;
                        try {
                            s = n.next()
                        } catch (o) {
                            return e.error(o), e
                        }
                        if (s.done) {
                            e.complete();
                            break
                        }
                        if (e.next(s.value), e.closed) break
                    }
                    return "function" == typeof n.return && e.add(() => {
                        n.return && n.return()
                    }), e
                })(t); {
                    const n = `You provided ${n1(t)?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;
                    throw new TypeError(n)
                }
            };

            function mu(t, e) {
                return new me(n => {
                    const s = new be;
                    let o = 0;
                    return s.add(e.schedule(function () {
                        o !== t.length ? (n.next(t[o++]), n.closed || s.add(this.schedule())) : n.complete()
                    })), s
                })
            }

            function et(t, e) {
                return e ? function (t, e) {
                    if (null != t) {
                        if (function (t) {
                                return t && "function" == typeof t[zs]
                            }(t)) return function (t, e) {
                            return new me(n => {
                                const s = new be;
                                return s.add(e.schedule(() => {
                                    const o = t[zs]();
                                    s.add(o.subscribe({
                                        next(l) {
                                            s.add(e.schedule(() => n.next(l)))
                                        },
                                        error(l) {
                                            s.add(e.schedule(() => n.error(l)))
                                        },
                                        complete() {
                                            s.add(e.schedule(() => n.complete()))
                                        }
                                    }))
                                })), s
                            })
                        }(t, e);
                        if (d1(t)) return function (t, e) {
                            return new me(n => {
                                const s = new be;
                                return s.add(e.schedule(() => t.then(o => {
                                    s.add(e.schedule(() => {
                                        n.next(o), s.add(e.schedule(() => n.complete()))
                                    }))
                                }, o => {
                                    s.add(e.schedule(() => n.error(o)))
                                }))), s
                            })
                        }(t, e);
                        if (u1(t)) return mu(t, e);
                        if (function (t) {
                                return t && "function" == typeof t[La]
                            }(t) || "string" == typeof t) return function (t, e) {
                            if (!t) throw new Error("Iterable cannot be null");
                            return new me(n => {
                                const s = new be;
                                let o;
                                return s.add(() => {
                                    o && "function" == typeof o.return && o.return()
                                }), s.add(e.schedule(() => {
                                    o = t[La](), s.add(e.schedule(function () {
                                        if (n.closed) return;
                                        let l, c;
                                        try {
                                            const u = o.next();
                                            l = u.value, c = u.done
                                        } catch (u) {
                                            return void n.error(u)
                                        }
                                        c ? n.complete() : (n.next(l), this.schedule())
                                    }))
                                })), s
                            })
                        }(t, e)
                    }
                    throw new TypeError((null !== t && typeof t || t) + " is not observable")
                }(t, e) : t instanceof me ? t : new me(gu(t))
            }
            class vu extends pe {
                constructor(e) {
                    super(), this.parent = e
                }
                _next(e) {
                    this.parent.notifyNext(e)
                }
                _error(e) {
                    this.parent.notifyError(e), this.unsubscribe()
                }
                _complete() {
                    this.parent.notifyComplete(), this.unsubscribe()
                }
            }
            class yu extends pe {
                notifyNext(e) {
                    this.destination.next(e)
                }
                notifyError(e) {
                    this.destination.error(e)
                }
                notifyComplete() {
                    this.destination.complete()
                }
            }

            function _u(t, e) {
                if (e.closed) return;
                if (t instanceof me) return t.subscribe(e);
                let n;
                try {
                    n = gu(t)(e)
                } catch (s) {
                    e.error(s)
                }
                return n
            }

            function Ue(t, e, n = Number.POSITIVE_INFINITY) {
                return "function" == typeof e ? s => s.pipe(Ue((o, l) => et(t(o, l)).pipe(he((c, u) => e(o, c, l, u))), n)) : ("number" == typeof e && (n = e), s => s.lift(new l3(t, n)))
            }
            class l3 {
                constructor(e, n = Number.POSITIVE_INFINITY) {
                    this.project = e, this.concurrent = n
                }
                call(e, n) {
                    return n.subscribe(new c3(e, this.project, this.concurrent))
                }
            }
            class c3 extends yu {
                constructor(e, n, s = Number.POSITIVE_INFINITY) {
                    super(e), this.project = n, this.concurrent = s, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
                }
                _next(e) {
                    this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
                }
                _tryNext(e) {
                    let n;
                    const s = this.index++;
                    try {
                        n = this.project(e, s)
                    } catch (o) {
                        return void this.destination.error(o)
                    }
                    this.active++, this._innerSub(n)
                }
                _innerSub(e) {
                    const n = new vu(this),
                        s = this.destination;
                    s.add(n);
                    const o = _u(e, n);
                    o !== n && s.add(o)
                }
                _complete() {
                    this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                }
                notifyNext(e) {
                    this.destination.next(e)
                }
                notifyComplete() {
                    const e = this.buffer;
                    this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                }
            }

            function Gs(t = Number.POSITIVE_INFINITY) {
                return Ue(Ra, t)
            }

            function bu(t, e) {
                return e ? mu(t, e) : new me(c1(t))
            }

            function Cu() {
                return function (e) {
                    return e.lift(new d3(e))
                }
            }
            class d3 {
                constructor(e) {
                    this.connectable = e
                }
                call(e, n) {
                    const {
                        connectable: s
                    } = this;
                    s._refCount++;
                    const o = new h3(e, s),
                        l = n.subscribe(o);
                    return o.closed || (o.connection = s.connect()), l
                }
            }
            class h3 extends pe {
                constructor(e, n) {
                    super(e), this.connectable = n
                }
                _unsubscribe() {
                    const {
                        connectable: e
                    } = this;
                    if (!e) return void(this.connection = null);
                    this.connectable = null;
                    const n = e._refCount;
                    if (n <= 0) return void(this.connection = null);
                    if (e._refCount = n - 1, n > 1) return void(this.connection = null);
                    const {
                        connection: s
                    } = this, o = e._connection;
                    this.connection = null, o && (!s || o === s) && o.unsubscribe()
                }
            }
            class h1 extends me {
                constructor(e, n) {
                    super(), this.source = e, this.subjectFactory = n, this._refCount = 0, this._isComplete = !1
                }
                _subscribe(e) {
                    return this.getSubject().subscribe(e)
                }
                getSubject() {
                    const e = this._subject;
                    return (!e || e.isStopped) && (this._subject = this.subjectFactory()), this._subject
                }
                connect() {
                    let e = this._connection;
                    return e || (this._isComplete = !1, e = this._connection = new be, e.add(this.source.subscribe(new p3(this.getSubject(), this))), e.closed && (this._connection = null, e = be.EMPTY)), e
                }
                refCount() {
                    return Cu()(this)
                }
            }
            const f3 = (() => {
                const t = h1.prototype;
                return {
                    operator: {
                        value: null
                    },
                    _refCount: {
                        value: 0,
                        writable: !0
                    },
                    _subject: {
                        value: null,
                        writable: !0
                    },
                    _connection: {
                        value: null,
                        writable: !0
                    },
                    _subscribe: {
                        value: t._subscribe
                    },
                    _isComplete: {
                        value: t._isComplete,
                        writable: !0
                    },
                    getSubject: {
                        value: t.getSubject
                    },
                    connect: {
                        value: t.connect
                    },
                    refCount: {
                        value: t.refCount
                    }
                }
            })();
            class p3 extends a1 {
                constructor(e, n) {
                    super(e), this.connectable = n
                }
                _error(e) {
                    this._unsubscribe(), super._error(e)
                }
                _complete() {
                    this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
                }
                _unsubscribe() {
                    const e = this.connectable;
                    if (e) {
                        this.connectable = null;
                        const n = e._connection;
                        e._refCount = 0, e._subject = null, e._connection = null, n && n.unsubscribe()
                    }
                }
            }

            function y3() {
                return new qn
            }

            function ie(t) {
                for (let e in t)
                    if (t[e] === ie) return e;
                throw Error("Could not find renamed property on target object.")
            }

            function z(t) {
                if ("string" == typeof t) return t;
                if (Array.isArray(t)) return "[" + t.map(z).join(", ") + "]";
                if (null == t) return "" + t;
                if (t.overriddenName) return `${t.overriddenName}`;
                if (t.name) return `${t.name}`;
                const e = t.toString();
                if (null == e) return "" + e;
                const n = e.indexOf("\n");
                return -1 === n ? e : e.substring(0, n)
            }

            function wu(t, e) {
                return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e
            }
            const b3 = ie({
                __forward_ref__: ie
            });

            function Du(t) {
                return t.__forward_ref__ = Du, t.toString = function () {
                    return z(this())
                }, t
            }

            function x(t) {
                return function (t) {
                    return "function" == typeof t && t.hasOwnProperty(b3) && t.__forward_ref__ === Du
                }(t) ? t() : t
            }
            class Hi extends Error {
                constructor(e, n) {
                    super(function (t, e) {
                        return `${t?`NG0${t}: `:""}${e}`
                    }(e, n)), this.code = e
                }
            }

            function j(t) {
                return "string" == typeof t ? t : null == t ? "" : String(t)
            }

            function tt(t) {
                return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : j(t)
            }

            function Fa(t, e) {
                const n = e ? ` in ${e}` : "";
                throw new Hi("201", `No provider for ${tt(t)} found${n}`)
            }

            function vt(t, e) {
                null == t && function (t, e, n, s) {
                    throw new Error(`ASSERTION ERROR: ${t}` + (null == s ? "" : ` [Expected=> ${n} ${s} ${e} <=Actual]`))
                }(e, t, null, "!=")
            }

            function W(t) {
                return {
                    token: t.token,
                    providedIn: t.providedIn || null,
                    factory: t.factory,
                    value: void 0
                }
            }

            function En(t) {
                return {
                    providers: t.providers || [],
                    imports: t.imports || []
                }
            }

            function zn(t) {
                return p1(t, Va) || p1(t, m1)
            }

            function p1(t, e) {
                return t.hasOwnProperty(e) ? t[e] : null
            }

            function g1(t) {
                return t && (t.hasOwnProperty(Su) || t.hasOwnProperty(A3)) ? t[Su] : null
            }
            const Va = ie({
                    \u0275prov: ie
                }),
                Su = ie({
                    \u0275inj: ie
                }),
                m1 = ie({
                    ngInjectableDef: ie
                }),
                A3 = ie({
                    ngInjectorDef: ie
                });
            var P = (() => ((P = P || {})[P.Default = 0] = "Default", P[P.Host = 1] = "Host", P[P.Self = 2] = "Self", P[P.SkipSelf = 4] = "SkipSelf", P[P.Optional = 8] = "Optional", P))();
            let Au;

            function ui(t) {
                const e = Au;
                return Au = t, e
            }

            function v1(t, e, n) {
                const s = zn(t);
                return s && "root" == s.providedIn ? void 0 === s.value ? s.value = s.factory() : s.value : n & P.Optional ? null : void 0 !== e ? e : void Fa(z(t), "Injector")
            }

            function di(t) {
                return {
                    toString: t
                }.toString()
            }
            var xt = (() => ((xt = xt || {})[xt.OnPush = 0] = "OnPush", xt[xt.Default = 1] = "Default", xt))(),
                Pe = (() => ((Pe = Pe || {})[Pe.Emulated = 0] = "Emulated", Pe[Pe.None = 2] = "None", Pe[Pe.ShadowDom = 3] = "ShadowDom", Pe))();
            const M3 = "undefined" != typeof globalThis && globalThis,
                O3 = "undefined" != typeof window && window,
                N3 = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                x3 = "undefined" != typeof global && global,
                re = M3 || x3 || O3 || N3,
                Ar = {},
                le = [],
                Ba = ie({
                    \u0275cmp: ie
                }),
                Iu = ie({
                    \u0275dir: ie
                }),
                Mu = ie({
                    \u0275pipe: ie
                }),
                y1 = ie({
                    \u0275mod: ie
                }),
                P3 = ie({
                    \u0275loc: ie
                }),
                Gn = ie({
                    \u0275fac: ie
                }),
                Ys = ie({
                    __NG_ELEMENT_ID__: ie
                });
            let R3 = 0;

            function se(t) {
                return di(() => {
                    const n = {},
                        s = {
                            type: t.type,
                            providersResolver: null,
                            decls: t.decls,
                            vars: t.vars,
                            factory: null,
                            template: t.template || null,
                            consts: t.consts || null,
                            ngContentSelectors: t.ngContentSelectors,
                            hostBindings: t.hostBindings || null,
                            hostVars: t.hostVars || 0,
                            hostAttrs: t.hostAttrs || null,
                            contentQueries: t.contentQueries || null,
                            declaredInputs: n,
                            inputs: null,
                            outputs: null,
                            exportAs: t.exportAs || null,
                            onPush: t.changeDetection === xt.OnPush,
                            directiveDefs: null,
                            pipeDefs: null,
                            selectors: t.selectors || le,
                            viewQuery: t.viewQuery || null,
                            features: t.features || null,
                            data: t.data || {},
                            encapsulation: t.encapsulation || Pe.Emulated,
                            id: "c",
                            styles: t.styles || le,
                            _: null,
                            setInput: null,
                            schemas: t.schemas || null,
                            tView: null
                        },
                        o = t.directives,
                        l = t.features,
                        c = t.pipes;
                    return s.id += R3++, s.inputs = E1(t.inputs, n), s.outputs = E1(t.outputs), l && l.forEach(u => u(s)), s.directiveDefs = o ? () => ("function" == typeof o ? o() : o).map(_1) : null, s.pipeDefs = c ? () => ("function" == typeof c ? c() : c).map(b1) : null, s
                })
            }

            function _1(t) {
                return nt(t) || function (t) {
                    return t[Iu] || null
                }(t)
            }

            function b1(t) {
                return function (t) {
                    return t[Mu] || null
                }(t)
            }
            const C1 = {};

            function hi(t) {
                return di(() => {
                    const e = {
                        type: t.type,
                        bootstrap: t.bootstrap || le,
                        declarations: t.declarations || le,
                        imports: t.imports || le,
                        exports: t.exports || le,
                        transitiveCompileScopes: null,
                        schemas: t.schemas || null,
                        id: t.id || null
                    };
                    return null != t.id && (C1[t.id] = t.type), e
                })
            }

            function E1(t, e) {
                if (null == t) return Ar;
                const n = {};
                for (const s in t)
                    if (t.hasOwnProperty(s)) {
                        let o = t[s],
                            l = o;
                        Array.isArray(o) && (l = o[1], o = o[0]), n[o] = s, e && (e[o] = l)
                    } return n
            }
            const ze = se;

            function ct(t) {
                return {
                    type: t.type,
                    name: t.name,
                    factory: null,
                    pure: !1 !== t.pure,
                    onDestroy: t.type.prototype.ngOnDestroy || null
                }
            }

            function nt(t) {
                return t[Ba] || null
            }

            function Pt(t, e) {
                const n = t[y1] || null;
                if (!n && !0 === e) throw new Error(`Type ${z(t)} does not have '\u0275mod' property.`);
                return n
            }
            const q = 11;

            function wn(t) {
                return Array.isArray(t) && "object" == typeof t[1]
            }

            function tn(t) {
                return Array.isArray(t) && !0 === t[1]
            }

            function xu(t) {
                return 0 != (8 & t.flags)
            }

            function Ua(t) {
                return 2 == (2 & t.flags)
            }

            function Wa(t) {
                return 1 == (1 & t.flags)
            }

            function nn(t) {
                return null !== t.template
            }

            function H3(t) {
                return 0 != (512 & t[2])
            }

            function Ki(t, e) {
                return t.hasOwnProperty(Gn) ? t[Gn] : null
            }
            class D1 {
                constructor(e, n, s) {
                    this.previousValue = e, this.currentValue = n, this.firstChange = s
                }
                isFirstChange() {
                    return this.firstChange
                }
            }

            function pi() {
                return T1
            }

            function T1(t) {
                return t.type.prototype.ngOnChanges && (t.setInput = q3), W3
            }

            function W3() {
                const t = A1(this),
                    e = null == t ? void 0 : t.current;
                if (e) {
                    const n = t.previous;
                    if (n === Ar) t.previous = e;
                    else
                        for (let s in e) n[s] = e[s];
                    t.current = null, this.ngOnChanges(e)
                }
            }

            function q3(t, e, n, s) {
                const o = A1(t) || function (t, e) {
                        return t[S1] = e
                    }(t, {
                        previous: Ar,
                        current: null
                    }),
                    l = o.current || (o.current = {}),
                    c = o.previous,
                    u = this.declaredInputs[n],
                    d = c[u];
                l[u] = new D1(d && d.currentValue, e, c === Ar), t[s] = e
            }
            pi.ngInherit = !0;
            const S1 = "__ngSimpleChanges__";

            function A1(t) {
                return t[S1] || null
            }
            let ku;

            function Ce(t) {
                return !!t.listen
            }
            const O1 = {
                createRenderer: (t, e) => void 0 !== ku ? ku : "undefined" != typeof document ? document : void 0
            };

            function Ie(t) {
                for (; Array.isArray(t);) t = t[0];
                return t
            }

            function qa(t, e) {
                return Ie(e[t])
            }

            function Lt(t, e) {
                return Ie(e[t.index])
            }

            function Fu(t, e) {
                return t.data[e]
            }

            function _t(t, e) {
                const n = e[t];
                return wn(n) ? n : n[0]
            }

            function Vu(t) {
                return 128 == (128 & t[2])
            }

            function gi(t, e) {
                return null == e ? null : t[e]
            }

            function x1(t) {
                t[18] = 0
            }

            function Bu(t, e) {
                t[5] += e;
                let n = t,
                    s = t[3];
                for (; null !== s && (1 === e && 1 === n[5] || -1 === e && 0 === n[5]);) s[5] += e, n = s, s = s[3]
            }
            const L = {
                lFrame: $1(null),
                bindingsEnabled: !0,
                isInCheckNoChangesMode: !1
            };

            function P1() {
                return L.bindingsEnabled
            }

            function w() {
                return L.lFrame.lView
            }

            function J() {
                return L.lFrame.tView
            }

            function $u(t) {
                return L.lFrame.contextLView = t, t[8]
            }

            function Re() {
                let t = R1();
                for (; null !== t && 64 === t.type;) t = t.parent;
                return t
            }

            function R1() {
                return L.lFrame.currentTNode
            }

            function Dn(t, e) {
                const n = L.lFrame;
                n.currentTNode = t, n.isParent = e
            }

            function Hu() {
                return L.lFrame.isParent
            }

            function ju() {
                L.lFrame.isParent = !1
            }

            function Ka() {
                return L.isInCheckNoChangesMode
            }

            function za(t) {
                L.isInCheckNoChangesMode = t
            }

            function Pr() {
                return L.lFrame.bindingIndex++
            }

            function oE(t, e) {
                const n = L.lFrame;
                n.bindingIndex = n.bindingRootIndex = t, Uu(e)
            }

            function Uu(t) {
                L.lFrame.currentDirectiveIndex = t
            }

            function qu(t) {
                L.lFrame.currentQueryIndex = t
            }

            function lE(t) {
                const e = t[1];
                return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null
            }

            function V1(t, e, n) {
                if (n & P.SkipSelf) {
                    let o = e,
                        l = t;
                    for (; !(o = o.parent, null !== o || n & P.Host || (o = lE(l), null === o || (l = l[15], 10 & o.type))););
                    if (null === o) return !1;
                    e = o, t = l
                }
                const s = L.lFrame = B1();
                return s.currentTNode = e, s.lView = t, !0
            }

            function Ga(t) {
                const e = B1(),
                    n = t[1];
                L.lFrame = e, e.currentTNode = n.firstChild, e.lView = t, e.tView = n, e.contextLView = t, e.bindingIndex = n.bindingStartIndex, e.inI18n = !1
            }

            function B1() {
                const t = L.lFrame,
                    e = null === t ? null : t.child;
                return null === e ? $1(t) : e
            }

            function $1(t) {
                const e = {
                    currentTNode: null,
                    isParent: !0,
                    lView: null,
                    tView: null,
                    selectedIndex: -1,
                    contextLView: null,
                    elementDepthCount: 0,
                    currentNamespace: null,
                    currentDirectiveIndex: -1,
                    bindingRootIndex: -1,
                    bindingIndex: -1,
                    currentQueryIndex: 0,
                    parent: t,
                    child: null,
                    inI18n: !1
                };
                return null !== t && (t.child = e), e
            }

            function H1() {
                const t = L.lFrame;
                return L.lFrame = t.parent, t.currentTNode = null, t.lView = null, t
            }
            const j1 = H1;

            function Ya() {
                const t = H1();
                t.isParent = !0, t.tView = null, t.selectedIndex = -1, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
            }

            function rt() {
                return L.lFrame.selectedIndex
            }

            function mi(t) {
                L.lFrame.selectedIndex = t
            }

            function Ee() {
                const t = L.lFrame;
                return Fu(t.tView, t.selectedIndex)
            }

            function Xa(t, e) {
                for (let n = e.directiveStart, s = e.directiveEnd; n < s; n++) {
                    const l = t.data[n].type.prototype,
                        {
                            ngAfterContentInit: c,
                            ngAfterContentChecked: u,
                            ngAfterViewInit: d,
                            ngAfterViewChecked: f,
                            ngOnDestroy: p
                        } = l;
                    c && (t.contentHooks || (t.contentHooks = [])).push(-n, c), u && ((t.contentHooks || (t.contentHooks = [])).push(n, u), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, u)), d && (t.viewHooks || (t.viewHooks = [])).push(-n, d), f && ((t.viewHooks || (t.viewHooks = [])).push(n, f), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, f)), null != p && (t.destroyHooks || (t.destroyHooks = [])).push(n, p)
                }
            }

            function Qa(t, e, n) {
                U1(t, e, 3, n)
            }

            function Za(t, e, n, s) {
                (3 & t[2]) === n && U1(t, e, n, s)
            }

            function Ku(t, e) {
                let n = t[2];
                (3 & n) === e && (n &= 2047, n += 1, t[2] = n)
            }

            function U1(t, e, n, s) {
                const l = null != s ? s : -1,
                    c = e.length - 1;
                let u = 0;
                for (let d = void 0 !== s ? 65535 & t[18] : 0; d < c; d++)
                    if ("number" == typeof e[d + 1]) {
                        if (u = e[d], null != s && u >= s) break
                    } else e[d] < 0 && (t[18] += 65536), (u < l || -1 == l) && (vE(t, n, e, d), t[18] = (4294901760 & t[18]) + d + 2), d++
            }

            function vE(t, e, n, s) {
                const o = n[s] < 0,
                    l = n[s + 1],
                    u = t[o ? -n[s] : n[s]];
                if (o) {
                    if (t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e) {
                        t[2] += 2048;
                        try {
                            l.call(u)
                        } finally {}
                    }
                } else try {
                    l.call(u)
                } finally {}
            }
            class eo {
                constructor(e, n, s) {
                    this.factory = e, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = s
                }
            }

            function Ja(t, e, n) {
                const s = Ce(t);
                let o = 0;
                for (; o < n.length;) {
                    const l = n[o];
                    if ("number" == typeof l) {
                        if (0 !== l) break;
                        o++;
                        const c = n[o++],
                            u = n[o++],
                            d = n[o++];
                        s ? t.setAttribute(e, u, d, c) : e.setAttributeNS(c, u, d)
                    } else {
                        const c = l,
                            u = n[++o];
                        Gu(c) ? s && t.setProperty(e, c, u) : s ? t.setAttribute(e, c, u) : e.setAttribute(c, u), o++
                    }
                }
                return o
            }

            function W1(t) {
                return 3 === t || 4 === t || 6 === t
            }

            function Gu(t) {
                return 64 === t.charCodeAt(0)
            }

            function el(t, e) {
                if (null !== e && 0 !== e.length)
                    if (null === t || 0 === t.length) t = e.slice();
                    else {
                        let n = -1;
                        for (let s = 0; s < e.length; s++) {
                            const o = e[s];
                            "number" == typeof o ? n = o : 0 === n || q1(t, n, o, null, -1 === n || 2 === n ? e[++s] : null)
                        }
                    } return t
            }

            function q1(t, e, n, s, o) {
                let l = 0,
                    c = t.length;
                if (-1 === e) c = -1;
                else
                    for (; l < t.length;) {
                        const u = t[l++];
                        if ("number" == typeof u) {
                            if (u === e) {
                                c = -1;
                                break
                            }
                            if (u > e) {
                                c = l - 1;
                                break
                            }
                        }
                    }
                for (; l < t.length;) {
                    const u = t[l];
                    if ("number" == typeof u) break;
                    if (u === n) {
                        if (null === s) return void(null !== o && (t[l + 1] = o));
                        if (s === t[l + 1]) return void(t[l + 2] = o)
                    }
                    l++, null !== s && l++, null !== o && l++
                } - 1 !== c && (t.splice(c, 0, e), l = c + 1), t.splice(l++, 0, n), null !== s && t.splice(l++, 0, s), null !== o && t.splice(l++, 0, o)
            }

            function K1(t) {
                return -1 !== t
            }

            function Rr(t) {
                return 32767 & t
            }

            function kr(t, e) {
                let n = function (t) {
                        return t >> 16
                    }(t),
                    s = e;
                for (; n > 0;) s = s[15], n--;
                return s
            }
            let Yu = !0;

            function tl(t) {
                const e = Yu;
                return Yu = t, e
            }
            let wE = 0;

            function no(t, e) {
                const n = Qu(t, e);
                if (-1 !== n) return n;
                const s = e[1];
                s.firstCreatePass && (t.injectorIndex = e.length, Xu(s.data, t), Xu(e, null), Xu(s.blueprint, null));
                const o = nl(t, e),
                    l = t.injectorIndex;
                if (K1(o)) {
                    const c = Rr(o),
                        u = kr(o, e),
                        d = u[1].data;
                    for (let f = 0; f < 8; f++) e[l + f] = u[c + f] | d[c + f]
                }
                return e[l + 8] = o, l
            }

            function Xu(t, e) {
                t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
            }

            function Qu(t, e) {
                return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null === e[t.injectorIndex + 8] ? -1 : t.injectorIndex
            }

            function nl(t, e) {
                if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
                let n = 0,
                    s = null,
                    o = e;
                for (; null !== o;) {
                    const l = o[1],
                        c = l.type;
                    if (s = 2 === c ? l.declTNode : 1 === c ? o[6] : null, null === s) return -1;
                    if (n++, o = o[15], -1 !== s.injectorIndex) return s.injectorIndex | n << 16
                }
                return -1
            }

            function il(t, e, n) {
                ! function (t, e, n) {
                    let s;
                    "string" == typeof n ? s = n.charCodeAt(0) || 0 : n.hasOwnProperty(Ys) && (s = n[Ys]), null == s && (s = n[Ys] = wE++);
                    const o = 255 & s;
                    e.data[t + (o >> 5)] |= 1 << o
                }(t, e, n)
            }

            function Y1(t, e, n) {
                if (n & P.Optional) return t;
                Fa(e, "NodeInjector")
            }

            function X1(t, e, n, s) {
                if (n & P.Optional && void 0 === s && (s = null), 0 == (n & (P.Self | P.Host))) {
                    const o = t[9],
                        l = ui(void 0);
                    try {
                        return o ? o.get(e, s, n & P.Optional) : v1(e, s, n & P.Optional)
                    } finally {
                        ui(l)
                    }
                }
                return Y1(s, e, n)
            }

            function Q1(t, e, n, s = P.Default, o) {
                if (null !== t) {
                    const l = function (t) {
                        if ("string" == typeof t) return t.charCodeAt(0) || 0;
                        const e = t.hasOwnProperty(Ys) ? t[Ys] : void 0;
                        return "number" == typeof e ? e >= 0 ? 255 & e : SE : e
                    }(n);
                    if ("function" == typeof l) {
                        if (!V1(e, t, s)) return s & P.Host ? Y1(o, n, s) : X1(e, n, s, o);
                        try {
                            const c = l(s);
                            if (null != c || s & P.Optional) return c;
                            Fa(n)
                        } finally {
                            j1()
                        }
                    } else if ("number" == typeof l) {
                        let c = null,
                            u = Qu(t, e),
                            d = -1,
                            f = s & P.Host ? e[16][6] : null;
                        for ((-1 === u || s & P.SkipSelf) && (d = -1 === u ? nl(t, e) : e[u + 8], -1 !== d && eg(s, !1) ? (c = e[1], u = Rr(d), e = kr(d, e)) : u = -1); - 1 !== u;) {
                            const p = e[1];
                            if (J1(l, u, p.data)) {
                                const g = AE(u, e, n, c, s, f);
                                if (g !== Z1) return g
                            }
                            d = e[u + 8], -1 !== d && eg(s, e[1].data[u + 8] === f) && J1(l, u, e) ? (c = p, u = Rr(d), e = kr(d, e)) : u = -1
                        }
                    }
                }
                return X1(e, n, s, o)
            }
            const Z1 = {};

            function SE() {
                return new Lr(Re(), w())
            }

            function AE(t, e, n, s, o, l) {
                const c = e[1],
                    u = c.data[t + 8],
                    p = function (t, e, n, s, o) {
                        const l = t.providerIndexes,
                            c = e.data,
                            u = 1048575 & l,
                            d = t.directiveStart,
                            p = l >> 20,
                            m = o ? u + p : t.directiveEnd;
                        for (let v = s ? u : u + p; v < m; v++) {
                            const y = c[v];
                            if (v < d && n === y || v >= d && y.type === n) return v
                        }
                        if (o) {
                            const v = c[d];
                            if (v && nn(v) && v.type === n) return d
                        }
                        return null
                    }(u, c, n, null == s ? Ua(u) && Yu : s != c && 0 != (3 & u.type), o & P.Host && l === u);
                return null !== p ? io(e, c, p, u) : Z1
            }

            function io(t, e, n, s) {
                let o = t[n];
                const l = e.data;
                if (function (t) {
                        return t instanceof eo
                    }(o)) {
                    const c = o;
                    c.resolving && function (t, e) {
                        throw new Hi("200", `Circular dependency in DI detected for ${t}`)
                    }(tt(l[n]));
                    const u = tl(c.canSeeViewProviders);
                    c.resolving = !0;
                    const d = c.injectImpl ? ui(c.injectImpl) : null;
                    V1(t, s, P.Default);
                    try {
                        o = t[n] = c.factory(void 0, l, t, s), e.firstCreatePass && n >= s.directiveStart && function (t, e, n) {
                            const {
                                ngOnChanges: s,
                                ngOnInit: o,
                                ngDoCheck: l
                            } = e.type.prototype;
                            if (s) {
                                const c = T1(e);
                                (n.preOrderHooks || (n.preOrderHooks = [])).push(t, c), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, c)
                            }
                            o && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, o), l && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, l), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, l))
                        }(n, l[n], e)
                    } finally {
                        null !== d && ui(d), tl(u), c.resolving = !1, j1()
                    }
                }
                return o
            }

            function J1(t, e, n) {
                return !!(n[e + (t >> 5)] & 1 << t)
            }

            function eg(t, e) {
                return !(t & P.Self || t & P.Host && e)
            }
            class Lr {
                constructor(e, n) {
                    this._tNode = e, this._lView = n
                }
                get(e, n) {
                    return Q1(this._tNode, this._lView, e, void 0, n)
                }
            }
            const Vr = "__parameters__";

            function zi(t, e, n) {
                return di(() => {
                    const s = function (t) {
                        return function (...n) {
                            if (t) {
                                const s = t(...n);
                                for (const o in s) this[o] = s[o]
                            }
                        }
                    }(e);

                    function o(...l) {
                        if (this instanceof o) return s.apply(this, l), this;
                        const c = new o(...l);
                        return u.annotation = c, u;

                        function u(d, f, p) {
                            const g = d.hasOwnProperty(Vr) ? d[Vr] : Object.defineProperty(d, Vr, {
                                value: []
                            })[Vr];
                            for (; g.length <= p;) g.push(null);
                            return (g[p] = g[p] || []).push(c), d
                        }
                    }
                    return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o
                })
            }
            class te {
                constructor(e, n) {
                    this._desc = e, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = W({
                        token: this,
                        providedIn: n.providedIn || "root",
                        factory: n.factory
                    }))
                }
                toString() {
                    return `InjectionToken ${this._desc}`
                }
            }
            const xE = new te("AnalyzeForEntryComponents"),
                sl = Function;

            function Sn(t, e) {
                t.forEach(n => Array.isArray(n) ? Sn(n, e) : e(n))
            }

            function al(t, e, n) {
                e >= t.length ? t.push(n) : t.splice(e, 0, n)
            }

            function Gi(t, e) {
                return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
            }

            function yi(t, e) {
                const n = [];
                for (let s = 0; s < t; s++) n.push(e);
                return n
            }

            function bt(t, e, n) {
                let s = $r(t, e);
                return s >= 0 ? t[1 | s] = n : (s = ~s, function (t, e, n, s) {
                    let o = t.length;
                    if (o == e) t.push(n, s);
                    else if (1 === o) t.push(s, t[0]), t[0] = n;
                    else {
                        for (o--, t.push(t[o - 1], t[o]); o > e;) t[o] = t[o - 2], o--;
                        t[e] = n, t[e + 1] = s
                    }
                }(t, s, e, n)), s
            }

            function ed(t, e) {
                const n = $r(t, e);
                if (n >= 0) return t[1 | n]
            }

            function $r(t, e) {
                return function (t, e, n) {
                    let s = 0,
                        o = t.length >> n;
                    for (; o !== s;) {
                        const l = s + (o - s >> 1),
                            c = t[l << n];
                        if (e === c) return l << n;
                        c > e ? o = l : s = l + 1
                    }
                    return ~(o << n)
                }(t, e, 1)
            }
            const lo = {},
                nd = "__NG_DI_FLAG__",
                Hr = "ngTempTokenPath",
                jE = /\n/gm,
                id = "__source",
                rd = ie({
                    provide: String,
                    useValue: ie
                });
            let co;

            function jr(t) {
                const e = co;
                return co = t, e
            }

            function WE(t, e = P.Default) {
                if (void 0 === co) throw new Error("inject() must be called from an injection context");
                return null === co ? v1(t, void 0, e) : co.get(t, e & P.Optional ? null : void 0, e)
            }

            function A(t, e = P.Default) {
                return (Au || WE)(x(t), e)
            }

            function Yi(t) {
                const e = [];
                for (let n = 0; n < t.length; n++) {
                    const s = x(t[n]);
                    if (Array.isArray(s)) {
                        if (0 === s.length) throw new Error("Arguments array must have arguments.");
                        let o, l = P.Default;
                        for (let c = 0; c < s.length; c++) {
                            const u = s[c],
                                d = qE(u);
                            "number" == typeof d ? -1 === d ? o = u.token : l |= d : o = u
                        }
                        e.push(A(o, l))
                    } else e.push(A(s))
                }
                return e
            }

            function uo(t, e) {
                return t[nd] = e, t.prototype[nd] = e, t
            }

            function qE(t) {
                return t[nd]
            }

            function og(t, e, n, s) {
                const o = t[Hr];
                throw e[id] && o.unshift(e[id]), t.message = function (t, e, n, s = null) {
                    t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                    let o = z(e);
                    if (Array.isArray(e)) o = e.map(z).join(" -> ");
                    else if ("object" == typeof e) {
                        let l = [];
                        for (let c in e)
                            if (e.hasOwnProperty(c)) {
                                let u = e[c];
                                l.push(c + ":" + ("string" == typeof u ? JSON.stringify(u) : z(u)))
                            } o = `{${l.join(", ")}}`
                    }
                    return `${n}${s?"("+s+")":""}[${o}]: ${t.replace(jE,"\n  ")}`
                }("\n" + t.message, o, n, s), t.ngTokenPath = o, t[Hr] = null, t
            }
            const Ur = uo(zi("Inject", t => ({
                    token: t
                })), -1),
                dt = uo(zi("Optional"), 8),
                _i = uo(zi("SkipSelf"), 4);
            class Xi {
                constructor(e) {
                    this.changingThisBreaksApplicationSecurity = e
                }
                toString() {
                    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`
                }
            }

            function Ct(t) {
                return t instanceof Xi ? t.changingThisBreaksApplicationSecurity : t
            }

            function An(t, e) {
                const n = function (t) {
                    return t instanceof Xi && t.getTypeName() || null
                }(t);
                if (null != n && n !== e) {
                    if ("ResourceURL" === n && "URL" === e) return !0;
                    throw new Error(`Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`)
                }
                return n === e
            }
            const g5 = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
                m5 = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
            var ce = (() => ((ce = ce || {})[ce.NONE = 0] = "NONE", ce[ce.HTML = 1] = "HTML", ce[ce.STYLE = 2] = "STYLE", ce[ce.SCRIPT = 3] = "SCRIPT", ce[ce.URL = 4] = "URL", ce[ce.RESOURCE_URL = 5] = "RESOURCE_URL", ce))();

            function pl(t) {
                const e = function () {
                    const t = w();
                    return t && t[12]
                }();
                return e ? e.sanitize(ce.URL, t) || "" : An(t, "URL") ? Ct(t) : function (t) {
                    return (t = String(t)).match(g5) || t.match(m5) ? t : "unsafe:" + t
                }(j(t))
            }
            const Tg = "__ngContext__";

            function Ye(t, e) {
                t[Tg] = e
            }

            function fd(t) {
                const e = function (t) {
                    return t[Tg] || null
                }(t);
                return e ? Array.isArray(e) ? e : e.lView : null
            }

            function gl(t) {
                return t.ngOriginalError
            }

            function V5(t, ...e) {
                t.error(...e)
            }
            class Qi {
                constructor() {
                    this._console = console
                }
                handleError(e) {
                    const n = this._findOriginalError(e),
                        s = this._findContext(e),
                        o = function (t) {
                            return t && t.ngErrorLogger || V5
                        }(e);
                    o(this._console, "ERROR", e), n && o(this._console, "ORIGINAL ERROR", n), s && o(this._console, "ERROR CONTEXT", s)
                }
                _findContext(e) {
                    return e ? function (t) {
                        return t.ngDebugContext
                    }(e) || this._findContext(gl(e)) : null
                }
                _findOriginalError(e) {
                    let n = e && gl(e);
                    for (; n && gl(n);) n = gl(n);
                    return n || null
                }
            }
            const Rg = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(re))();

            function kg(t) {
                return t.ownerDocument.defaultView
            }

            function Mn(t) {
                return t instanceof Function ? t() : t
            }
            var Et = (() => ((Et = Et || {})[Et.Important = 1] = "Important", Et[Et.DashCase = 2] = "DashCase", Et))();

            function md(t, e) {
                return undefined(t, e)
            }

            function vo(t) {
                const e = t[3];
                return tn(e) ? e[3] : e
            }

            function vd(t) {
                return $g(t[13])
            }

            function yd(t) {
                return $g(t[4])
            }

            function $g(t) {
                for (; null !== t && !tn(t);) t = t[4];
                return t
            }

            function zr(t, e, n, s, o) {
                if (null != s) {
                    let l, c = !1;
                    tn(s) ? l = s : wn(s) && (c = !0, s = s[0]);
                    const u = Ie(s);
                    0 === t && null !== n ? null == o ? Kg(e, n, u) : Zi(e, n, u, o || null, !0) : 1 === t && null !== n ? Zi(e, n, u, o || null, !0) : 2 === t ? function (t, e, n) {
                        const s = vl(t, e);
                        s && function (t, e, n, s) {
                            Ce(t) ? t.removeChild(e, n, s) : e.removeChild(n)
                        }(t, s, e, n)
                    }(e, u, c) : 3 === t && e.destroyNode(u), null != l && function (t, e, n, s, o) {
                        const l = n[7];
                        l !== Ie(n) && zr(e, t, s, l, o);
                        for (let u = 10; u < n.length; u++) {
                            const d = n[u];
                            yo(d[1], d, t, e, s, l)
                        }
                    }(e, t, l, n, o)
                }
            }

            function bd(t, e, n) {
                return Ce(t) ? t.createElement(e, n) : null === n ? t.createElement(e) : t.createElementNS(n, e)
            }

            function jg(t, e) {
                const n = t[9],
                    s = n.indexOf(e),
                    o = e[3];
                1024 & e[2] && (e[2] &= -1025, Bu(o, -1)), n.splice(s, 1)
            }

            function Cd(t, e) {
                if (t.length <= 10) return;
                const n = 10 + e,
                    s = t[n];
                if (s) {
                    const o = s[17];
                    null !== o && o !== t && jg(o, s), e > 0 && (t[n - 1][4] = s[4]);
                    const l = Gi(t, 10 + e);
                    ! function (t, e) {
                        yo(t, e, e[q], 2, null, null), e[0] = null, e[6] = null
                    }(s[1], s);
                    const c = l[19];
                    null !== c && c.detachView(l[1]), s[3] = null, s[4] = null, s[2] &= -129
                }
                return s
            }

            function Ug(t, e) {
                if (!(256 & e[2])) {
                    const n = e[q];
                    Ce(n) && n.destroyNode && yo(t, e, n, 3, null, null),
                        function (t) {
                            let e = t[13];
                            if (!e) return Ed(t[1], t);
                            for (; e;) {
                                let n = null;
                                if (wn(e)) n = e[13];
                                else {
                                    const s = e[10];
                                    s && (n = s)
                                }
                                if (!n) {
                                    for (; e && !e[4] && e !== t;) wn(e) && Ed(e[1], e), e = e[3];
                                    null === e && (e = t), wn(e) && Ed(e[1], e), n = e && e[4]
                                }
                                e = n
                            }
                        }(e)
                }
            }

            function Ed(t, e) {
                if (!(256 & e[2])) {
                    e[2] &= -129, e[2] |= 256,
                        function (t, e) {
                            let n;
                            if (null != t && null != (n = t.destroyHooks))
                                for (let s = 0; s < n.length; s += 2) {
                                    const o = e[n[s]];
                                    if (!(o instanceof eo)) {
                                        const l = n[s + 1];
                                        if (Array.isArray(l))
                                            for (let c = 0; c < l.length; c += 2) {
                                                const u = o[l[c]],
                                                    d = l[c + 1];
                                                try {
                                                    d.call(u)
                                                } finally {}
                                            } else try {
                                                l.call(o)
                                            } finally {}
                                    }
                                }
                        }(t, e),
                        function (t, e) {
                            const n = t.cleanup,
                                s = e[7];
                            let o = -1;
                            if (null !== n)
                                for (let l = 0; l < n.length - 1; l += 2)
                                    if ("string" == typeof n[l]) {
                                        const c = n[l + 1],
                                            u = "function" == typeof c ? c(e) : Ie(e[c]),
                                            d = s[o = n[l + 2]],
                                            f = n[l + 3];
                                        "boolean" == typeof f ? u.removeEventListener(n[l], d, f) : f >= 0 ? s[o = f]() : s[o = -f].unsubscribe(), l += 2
                                    } else {
                                        const c = s[o = n[l + 1]];
                                        n[l].call(c)
                                    } if (null !== s) {
                                for (let l = o + 1; l < s.length; l++) s[l]();
                                e[7] = null
                            }
                        }(t, e), 1 === e[1].type && Ce(e[q]) && e[q].destroy();
                    const n = e[17];
                    if (null !== n && tn(e[3])) {
                        n !== e[3] && jg(n, e);
                        const s = e[19];
                        null !== s && s.detachView(t)
                    }
                }
            }

            function Wg(t, e, n) {
                return function (t, e, n) {
                    let s = e;
                    for (; null !== s && 40 & s.type;) s = (e = s).parent;
                    if (null === s) return n[0];
                    if (2 & s.flags) {
                        const o = t.data[s.directiveStart].encapsulation;
                        if (o === Pe.None || o === Pe.Emulated) return null
                    }
                    return Lt(s, n)
                }(t, e.parent, n)
            }

            function Zi(t, e, n, s, o) {
                Ce(t) ? t.insertBefore(e, n, s, o) : e.insertBefore(n, s, o)
            }

            function Kg(t, e, n) {
                Ce(t) ? t.appendChild(e, n) : e.appendChild(n)
            }

            function zg(t, e, n, s, o) {
                null !== s ? Zi(t, e, n, s, o) : Kg(t, e, n)
            }

            function vl(t, e) {
                return Ce(t) ? t.parentNode(e) : e.parentNode
            }

            function Gg(t, e, n) {
                return Xg(t, e, n)
            }
            let Xg = function (t, e, n) {
                return 40 & t.type ? Lt(t, n) : null
            };

            function yl(t, e, n, s) {
                const o = Wg(t, s, e),
                    l = e[q],
                    u = Gg(s.parent || e[6], s, e);
                if (null != o)
                    if (Array.isArray(n))
                        for (let d = 0; d < n.length; d++) zg(l, o, n[d], u, !1);
                    else zg(l, o, n, u, !1)
            }

            function _l(t, e) {
                if (null !== e) {
                    const n = e.type;
                    if (3 & n) return Lt(e, t);
                    if (4 & n) return Dd(-1, t[e.index]);
                    if (8 & n) {
                        const s = e.child;
                        if (null !== s) return _l(t, s); {
                            const o = t[e.index];
                            return tn(o) ? Dd(-1, o) : Ie(o)
                        }
                    }
                    if (32 & n) return md(e, t)() || Ie(t[e.index]); {
                        const s = Zg(t, e);
                        return null !== s ? Array.isArray(s) ? s[0] : _l(vo(t[16]), s) : _l(t, e.next)
                    }
                }
                return null
            }

            function Zg(t, e) {
                return null !== e ? t[16][6].projection[e.projection] : null
            }

            function Dd(t, e) {
                const n = 10 + t + 1;
                if (n < e.length) {
                    const s = e[n],
                        o = s[1].firstChild;
                    if (null !== o) return _l(s, o)
                }
                return e[7]
            }

            function Td(t, e, n, s, o, l, c) {
                for (; null != n;) {
                    const u = s[n.index],
                        d = n.type;
                    if (c && 0 === e && (u && Ye(Ie(u), s), n.flags |= 4), 64 != (64 & n.flags))
                        if (8 & d) Td(t, e, n.child, s, o, l, !1), zr(e, t, o, u, l);
                        else if (32 & d) {
                        const f = md(n, s);
                        let p;
                        for (; p = f();) zr(e, t, o, p, l);
                        zr(e, t, o, u, l)
                    } else 16 & d ? em(t, e, s, n, o, l) : zr(e, t, o, u, l);
                    n = c ? n.projectionNext : n.next
                }
            }

            function yo(t, e, n, s, o, l) {
                Td(n, s, t.firstChild, e, o, l, !1)
            }

            function em(t, e, n, s, o, l) {
                const c = n[16],
                    d = c[6].projection[s.projection];
                if (Array.isArray(d))
                    for (let f = 0; f < d.length; f++) zr(e, t, o, d[f], l);
                else Td(t, e, d, c[3], o, l, !0)
            }

            function tm(t, e, n) {
                Ce(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n
            }

            function Sd(t, e, n) {
                Ce(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n
            }

            function nm(t, e, n) {
                let s = t.length;
                for (;;) {
                    const o = t.indexOf(e, n);
                    if (-1 === o) return o;
                    if (0 === o || t.charCodeAt(o - 1) <= 32) {
                        const l = e.length;
                        if (o + l === s || t.charCodeAt(o + l) <= 32) return o
                    }
                    n = o + 1
                }
            }
            const im = "ng-template";

            function cw(t, e, n) {
                let s = 0;
                for (; s < t.length;) {
                    let o = t[s++];
                    if (n && "class" === o) {
                        if (o = t[s], -1 !== nm(o.toLowerCase(), e, 0)) return !0
                    } else if (1 === o) {
                        for (; s < t.length && "string" == typeof (o = t[s++]);)
                            if (o.toLowerCase() === e) return !0;
                        return !1
                    }
                }
                return !1
            }

            function rm(t) {
                return 4 === t.type && t.value !== im
            }

            function uw(t, e, n) {
                return e === (4 !== t.type || n ? t.value : im)
            }

            function dw(t, e, n) {
                let s = 4;
                const o = t.attrs || [],
                    l = function (t) {
                        for (let e = 0; e < t.length; e++)
                            if (W1(t[e])) return e;
                        return t.length
                    }(o);
                let c = !1;
                for (let u = 0; u < e.length; u++) {
                    const d = e[u];
                    if ("number" != typeof d) {
                        if (!c)
                            if (4 & s) {
                                if (s = 2 | 1 & s, "" !== d && !uw(t, d, n) || "" === d && 1 === e.length) {
                                    if (rn(s)) return !1;
                                    c = !0
                                }
                            } else {
                                const f = 8 & s ? d : e[++u];
                                if (8 & s && null !== t.attrs) {
                                    if (!cw(t.attrs, f, n)) {
                                        if (rn(s)) return !1;
                                        c = !0
                                    }
                                    continue
                                }
                                const g = hw(8 & s ? "class" : d, o, rm(t), n);
                                if (-1 === g) {
                                    if (rn(s)) return !1;
                                    c = !0;
                                    continue
                                }
                                if ("" !== f) {
                                    let m;
                                    m = g > l ? "" : o[g + 1].toLowerCase();
                                    const v = 8 & s ? m : null;
                                    if (v && -1 !== nm(v, f, 0) || 2 & s && f !== m) {
                                        if (rn(s)) return !1;
                                        c = !0
                                    }
                                }
                            }
                    } else {
                        if (!c && !rn(s) && !rn(d)) return !1;
                        if (c && rn(d)) continue;
                        c = !1, s = d | 1 & s
                    }
                }
                return rn(s) || c
            }

            function rn(t) {
                return 0 == (1 & t)
            }

            function hw(t, e, n, s) {
                if (null === e) return -1;
                let o = 0;
                if (s || !n) {
                    let l = !1;
                    for (; o < e.length;) {
                        const c = e[o];
                        if (c === t) return o;
                        if (3 === c || 6 === c) l = !0;
                        else {
                            if (1 === c || 2 === c) {
                                let u = e[++o];
                                for (;
                                    "string" == typeof u;) u = e[++o];
                                continue
                            }
                            if (4 === c) break;
                            if (0 === c) {
                                o += 4;
                                continue
                            }
                        }
                        o += l ? 1 : 2
                    }
                    return -1
                }
                return function (t, e) {
                    let n = t.indexOf(4);
                    if (n > -1)
                        for (n++; n < t.length;) {
                            const s = t[n];
                            if ("number" == typeof s) return -1;
                            if (s === e) return n;
                            n++
                        }
                    return -1
                }(e, t)
            }

            function sm(t, e, n = !1) {
                for (let s = 0; s < e.length; s++)
                    if (dw(t, e[s], n)) return !0;
                return !1
            }

            function mw(t, e) {
                e: for (let n = 0; n < e.length; n++) {
                    const s = e[n];
                    if (t.length === s.length) {
                        for (let o = 0; o < t.length; o++)
                            if (t[o] !== s[o]) continue e;
                        return !0
                    }
                }
                return !1
            }

            function om(t, e) {
                return t ? ":not(" + e.trim() + ")" : e
            }

            function vw(t) {
                let e = t[0],
                    n = 1,
                    s = 2,
                    o = "",
                    l = !1;
                for (; n < t.length;) {
                    let c = t[n];
                    if ("string" == typeof c)
                        if (2 & s) {
                            const u = t[++n];
                            o += "[" + c + (u.length > 0 ? '="' + u + '"' : "") + "]"
                        } else 8 & s ? o += "." + c : 4 & s && (o += " " + c);
                    else "" !== o && !rn(c) && (e += om(l, o), o = ""), s = c, l = l || !rn(s);
                    n++
                }
                return "" !== o && (e += om(l, o)), e
            }
            const B = {};

            function sn(t) {
                am(J(), w(), rt() + t, Ka())
            }

            function am(t, e, n, s) {
                if (!s)
                    if (3 == (3 & e[2])) {
                        const l = t.preOrderCheckHooks;
                        null !== l && Qa(e, l, n)
                    } else {
                        const l = t.preOrderHooks;
                        null !== l && Za(e, l, 0, n)
                    } mi(n)
            }

            function bl(t, e) {
                return t << 17 | e << 2
            }

            function on(t) {
                return t >> 17 & 32767
            }

            function Ad(t) {
                return 2 | t
            }

            function Xn(t) {
                return (131068 & t) >> 2
            }

            function Id(t, e) {
                return -131069 & t | e << 2
            }

            function Md(t) {
                return 1 | t
            }

            function vm(t, e) {
                const n = t.contentQueries;
                if (null !== n)
                    for (let s = 0; s < n.length; s += 2) {
                        const o = n[s],
                            l = n[s + 1];
                        if (-1 !== l) {
                            const c = t.data[l];
                            qu(o), c.contentQueries(2, e[l], l)
                        }
                    }
            }

            function _o(t, e, n, s, o, l, c, u, d, f) {
                const p = e.blueprint.slice();
                return p[0] = o, p[2] = 140 | s, x1(p), p[3] = p[15] = t, p[8] = n, p[10] = c || t && t[10], p[q] = u || t && t[q], p[12] = d || t && t[12] || null, p[9] = f || t && t[9] || null, p[6] = l, p[16] = 2 == e.type ? t[16] : p, p
            }

            function Gr(t, e, n, s, o) {
                let l = t.data[e];
                if (null === l) l = function (t, e, n, s, o) {
                    const l = R1(),
                        c = Hu(),
                        d = t.data[e] = function (t, e, n, s, o, l) {
                            return {
                                type: n,
                                index: s,
                                insertBeforeIndex: null,
                                injectorIndex: e ? e.injectorIndex : -1,
                                directiveStart: -1,
                                directiveEnd: -1,
                                directiveStylingLast: -1,
                                propertyBindings: null,
                                flags: 0,
                                providerIndexes: 0,
                                value: o,
                                attrs: l,
                                mergedAttrs: null,
                                localNames: null,
                                initialInputs: void 0,
                                inputs: null,
                                outputs: null,
                                tViews: null,
                                next: null,
                                projectionNext: null,
                                child: null,
                                parent: e,
                                projection: null,
                                styles: null,
                                stylesWithoutHost: null,
                                residualStyles: void 0,
                                classes: null,
                                classesWithoutHost: null,
                                residualClasses: void 0,
                                classBindings: 0,
                                styleBindings: 0
                            }
                        }(0, c ? l : l && l.parent, n, e, s, o);
                    return null === t.firstChild && (t.firstChild = d), null !== l && (c ? null == l.child && null !== d.parent && (l.child = d) : null === l.next && (l.next = d)), d
                }(t, e, n, s, o), L.lFrame.inI18n && (l.flags |= 64);
                else if (64 & l.type) {
                    l.type = n, l.value = s, l.attrs = o;
                    const c = function () {
                        const t = L.lFrame,
                            e = t.currentTNode;
                        return t.isParent ? e : e.parent
                    }();
                    l.injectorIndex = null === c ? -1 : c.injectorIndex
                }
                return Dn(l, !0), l
            }

            function Yr(t, e, n, s) {
                if (0 === n) return -1;
                const o = e.length;
                for (let l = 0; l < n; l++) e.push(s), t.blueprint.push(s), t.data.push(null);
                return o
            }

            function bo(t, e, n) {
                Ga(e);
                try {
                    const s = t.viewQuery;
                    null !== s && qd(1, s, n);
                    const o = t.template;
                    null !== o && ym(t, e, o, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && vm(t, e), t.staticViewQueries && qd(2, t.viewQuery, n);
                    const l = t.components;
                    null !== l && function (t, e) {
                        for (let n = 0; n < e.length; n++) Xw(t, e[n])
                    }(e, l)
                } catch (s) {
                    throw t.firstCreatePass && (t.incompleteFirstPass = !0, t.firstCreatePass = !1), s
                } finally {
                    e[2] &= -5, Ya()
                }
            }

            function Xr(t, e, n, s) {
                const o = e[2];
                if (256 == (256 & o)) return;
                Ga(e);
                const l = Ka();
                try {
                    x1(e),
                        function (t) {
                            L.lFrame.bindingIndex = t
                        }(t.bindingStartIndex), null !== n && ym(t, e, n, 2, s);
                    const c = 3 == (3 & o);
                    if (!l)
                        if (c) {
                            const f = t.preOrderCheckHooks;
                            null !== f && Qa(e, f, null)
                        } else {
                            const f = t.preOrderHooks;
                            null !== f && Za(e, f, 0, null), Ku(e, 0)
                        } if (function (t) {
                            for (let e = vd(t); null !== e; e = yd(e)) {
                                if (!e[2]) continue;
                                const n = e[9];
                                for (let s = 0; s < n.length; s++) {
                                    const o = n[s],
                                        l = o[3];
                                    0 == (1024 & o[2]) && Bu(l, 1), o[2] |= 1024
                                }
                            }
                        }(e), function (t) {
                            for (let e = vd(t); null !== e; e = yd(e))
                                for (let n = 10; n < e.length; n++) {
                                    const s = e[n],
                                        o = s[1];
                                    Vu(s) && Xr(o, s, o.template, s[8])
                                }
                        }(e), null !== t.contentQueries && vm(t, e), !l)
                        if (c) {
                            const f = t.contentCheckHooks;
                            null !== f && Qa(e, f)
                        } else {
                            const f = t.contentHooks;
                            null !== f && Za(e, f, 1), Ku(e, 1)
                        }!
                    function (t, e) {
                        const n = t.hostBindingOpCodes;
                        if (null !== n) try {
                            for (let s = 0; s < n.length; s++) {
                                const o = n[s];
                                if (o < 0) mi(~o);
                                else {
                                    const l = o,
                                        c = n[++s],
                                        u = n[++s];
                                    oE(c, l), u(2, e[l])
                                }
                            }
                        } finally {
                            mi(-1)
                        }
                    }(t, e);
                    const u = t.components;
                    null !== u && function (t, e) {
                        for (let n = 0; n < e.length; n++) Yw(t, e[n])
                    }(e, u);
                    const d = t.viewQuery;
                    if (null !== d && qd(2, d, s), !l)
                        if (c) {
                            const f = t.viewCheckHooks;
                            null !== f && Qa(e, f)
                        } else {
                            const f = t.viewHooks;
                            null !== f && Za(e, f, 2), Ku(e, 2)
                        }! 0 === t.firstUpdatePass && (t.firstUpdatePass = !1), l || (e[2] &= -73), 1024 & e[2] && (e[2] &= -1025, Bu(e[3], -1))
                } finally {
                    Ya()
                }
            }

            function Ow(t, e, n, s) {
                const o = e[10],
                    l = !Ka(),
                    c = function (t) {
                        return 4 == (4 & t[2])
                    }(e);
                try {
                    l && !c && o.begin && o.begin(), c && bo(t, e, s), Xr(t, e, n, s)
                } finally {
                    l && !c && o.end && o.end()
                }
            }

            function ym(t, e, n, s, o) {
                const l = rt(),
                    c = 2 & s;
                try {
                    mi(-1), c && e.length > 20 && am(t, e, 20, Ka()), n(s, o)
                } finally {
                    mi(l)
                }
            }

            function Fd(t, e, n) {
                !P1() || (function (t, e, n, s) {
                    const o = n.directiveStart,
                        l = n.directiveEnd;
                    t.firstCreatePass || no(n, e), Ye(s, e);
                    const c = n.initialInputs;
                    for (let u = o; u < l; u++) {
                        const d = t.data[u],
                            f = nn(d);
                        f && Ww(e, n, d);
                        const p = io(e, t, u, n);
                        Ye(p, e), null !== c && qw(0, u - o, p, d, 0, c), f && (_t(n.index, e)[8] = p)
                    }
                }(t, e, n, Lt(n, e)), 128 == (128 & n.flags) && function (t, e, n) {
                    const s = n.directiveStart,
                        o = n.directiveEnd,
                        c = n.index,
                        u = L.lFrame.currentDirectiveIndex;
                    try {
                        mi(c);
                        for (let d = s; d < o; d++) {
                            const f = t.data[d],
                                p = e[d];
                            Uu(d), (null !== f.hostBindings || 0 !== f.hostVars || null !== f.hostAttrs) && Am(f, p)
                        }
                    } finally {
                        mi(-1), Uu(u)
                    }
                }(t, e, n))
            }

            function Vd(t, e, n = Lt) {
                const s = e.localNames;
                if (null !== s) {
                    let o = e.index + 1;
                    for (let l = 0; l < s.length; l += 2) {
                        const c = s[l + 1],
                            u = -1 === c ? n(e, t) : t[c];
                        t[o++] = u
                    }
                }
            }

            function bm(t) {
                const e = t.tView;
                return null === e || e.incompleteFirstPass ? t.tView = wl(1, null, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts) : e
            }

            function wl(t, e, n, s, o, l, c, u, d, f) {
                const p = 20 + s,
                    g = p + o,
                    m = function (t, e) {
                        const n = [];
                        for (let s = 0; s < e; s++) n.push(s < t ? null : B);
                        return n
                    }(p, g),
                    v = "function" == typeof f ? f() : f;
                return m[1] = {
                    type: t,
                    blueprint: m,
                    template: n,
                    queries: null,
                    viewQuery: u,
                    declTNode: e,
                    data: m.slice().fill(null, p),
                    bindingStartIndex: p,
                    expandoStartIndex: g,
                    hostBindingOpCodes: null,
                    firstCreatePass: !0,
                    firstUpdatePass: !0,
                    staticViewQueries: !1,
                    staticContentQueries: !1,
                    preOrderHooks: null,
                    preOrderCheckHooks: null,
                    contentHooks: null,
                    contentCheckHooks: null,
                    viewHooks: null,
                    viewCheckHooks: null,
                    destroyHooks: null,
                    cleanup: null,
                    contentQueries: null,
                    components: null,
                    directiveRegistry: "function" == typeof l ? l() : l,
                    pipeRegistry: "function" == typeof c ? c() : c,
                    firstChild: null,
                    schemas: d,
                    consts: v,
                    incompleteFirstPass: !1
                }
            }

            function Dm(t, e, n) {
                for (let s in t)
                    if (t.hasOwnProperty(s)) {
                        const o = t[s];
                        (n = null === n ? {} : n).hasOwnProperty(s) ? n[s].push(e, o) : n[s] = [e, o]
                    } return n
            }

            function wt(t, e, n, s, o, l, c, u) {
                const d = Lt(e, n);
                let p, f = e.inputs;
                !u && null != f && (p = f[s]) ? (Fm(t, n, p, s, o), Ua(e) && function (t, e) {
                    const n = _t(e, t);
                    16 & n[2] || (n[2] |= 64)
                }(n, e.index)) : 3 & e.type && (s = function (t) {
                    return "class" === t ? "className" : "for" === t ? "htmlFor" : "formaction" === t ? "formAction" : "innerHtml" === t ? "innerHTML" : "readonly" === t ? "readOnly" : "tabindex" === t ? "tabIndex" : t
                }(s), o = null != c ? c(o, e.value || "", s) : o, Ce(l) ? l.setProperty(d, s, o) : Gu(s) || (d.setProperty ? d.setProperty(s, o) : d[s] = o))
            }

            function Bd(t, e, n, s) {
                let o = !1;
                if (P1()) {
                    const l = function (t, e, n) {
                            const s = t.directiveRegistry;
                            let o = null;
                            if (s)
                                for (let l = 0; l < s.length; l++) {
                                    const c = s[l];
                                    sm(n, c.selectors, !1) && (o || (o = []), il(no(n, e), t, c.type), nn(c) ? (Im(t, n), o.unshift(c)) : o.push(c))
                                }
                            return o
                        }(t, e, n),
                        c = null === s ? null : {
                            "": -1
                        };
                    if (null !== l) {
                        o = !0, Mm(n, t.data.length, l.length);
                        for (let p = 0; p < l.length; p++) {
                            const g = l[p];
                            g.providersResolver && g.providersResolver(g)
                        }
                        let u = !1,
                            d = !1,
                            f = Yr(t, e, l.length, null);
                        for (let p = 0; p < l.length; p++) {
                            const g = l[p];
                            n.mergedAttrs = el(n.mergedAttrs, g.hostAttrs), Om(t, n, e, f, g), Uw(f, g, c), null !== g.contentQueries && (n.flags |= 8), (null !== g.hostBindings || null !== g.hostAttrs || 0 !== g.hostVars) && (n.flags |= 128);
                            const m = g.type.prototype;
                            !u && (m.ngOnChanges || m.ngOnInit || m.ngDoCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index), u = !0), !d && (m.ngOnChanges || m.ngDoCheck) && ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index), d = !0), f++
                        }! function (t, e) {
                            const s = e.directiveEnd,
                                o = t.data,
                                l = e.attrs,
                                c = [];
                            let u = null,
                                d = null;
                            for (let f = e.directiveStart; f < s; f++) {
                                const p = o[f],
                                    g = p.inputs,
                                    m = null === l || rm(e) ? null : Kw(g, l);
                                c.push(m), u = Dm(g, f, u), d = Dm(p.outputs, f, d)
                            }
                            null !== u && (u.hasOwnProperty("class") && (e.flags |= 16), u.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = c, e.inputs = u, e.outputs = d
                        }(t, n)
                    }
                    c && function (t, e, n) {
                        if (e) {
                            const s = t.localNames = [];
                            for (let o = 0; o < e.length; o += 2) {
                                const l = n[e[o + 1]];
                                if (null == l) throw new Hi("301", `Export of name '${e[o+1]}' not found!`);
                                s.push(e[o], l)
                            }
                        }
                    }(n, s, c)
                }
                return n.mergedAttrs = el(n.mergedAttrs, n.attrs), o
            }

            function Sm(t, e, n, s, o, l) {
                const c = l.hostBindings;
                if (c) {
                    let u = t.hostBindingOpCodes;
                    null === u && (u = t.hostBindingOpCodes = []);
                    const d = ~e.index;
                    (function (t) {
                        let e = t.length;
                        for (; e > 0;) {
                            const n = t[--e];
                            if ("number" == typeof n && n < 0) return n
                        }
                        return 0
                    })(u) != d && u.push(d), u.push(s, o, c)
                }
            }

            function Am(t, e) {
                null !== t.hostBindings && t.hostBindings(1, e)
            }

            function Im(t, e) {
                e.flags |= 2, (t.components || (t.components = [])).push(e.index)
            }

            function Uw(t, e, n) {
                if (n) {
                    if (e.exportAs)
                        for (let s = 0; s < e.exportAs.length; s++) n[e.exportAs[s]] = t;
                    nn(e) && (n[""] = t)
                }
            }

            function Mm(t, e, n) {
                t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
            }

            function Om(t, e, n, s, o) {
                t.data[s] = o;
                const l = o.factory || (o.factory = Ki(o.type)),
                    c = new eo(l, nn(o), null);
                t.blueprint[s] = c, n[s] = c, Sm(t, e, 0, s, Yr(t, n, o.hostVars, B), o)
            }

            function Ww(t, e, n) {
                const s = Lt(e, t),
                    o = bm(n),
                    l = t[10],
                    c = Dl(t, _o(t, o, null, n.onPush ? 64 : 16, s, e, l, l.createRenderer(s, n), null, null));
                t[e.index] = c
            }

            function On(t, e, n, s, o, l) {
                const c = Lt(t, e);
                ! function (t, e, n, s, o, l, c) {
                    if (null == l) Ce(t) ? t.removeAttribute(e, o, n) : e.removeAttribute(o);
                    else {
                        const u = null == c ? j(l) : c(l, s || "", o);
                        Ce(t) ? t.setAttribute(e, o, u, n) : n ? e.setAttributeNS(n, o, u) : e.setAttribute(o, u)
                    }
                }(e[q], c, l, t.value, n, s, o)
            }

            function qw(t, e, n, s, o, l) {
                const c = l[e];
                if (null !== c) {
                    const u = s.setInput;
                    for (let d = 0; d < c.length;) {
                        const f = c[d++],
                            p = c[d++],
                            g = c[d++];
                        null !== u ? s.setInput(n, g, f, p) : n[p] = g
                    }
                }
            }

            function Kw(t, e) {
                let n = null,
                    s = 0;
                for (; s < e.length;) {
                    const o = e[s];
                    if (0 !== o)
                        if (5 !== o) {
                            if ("number" == typeof o) break;
                            t.hasOwnProperty(o) && (null === n && (n = []), n.push(o, t[o], e[s + 1])), s += 2
                        } else s += 2;
                    else s += 4
                }
                return n
            }

            function Nm(t, e, n, s) {
                return new Array(t, !0, !1, e, null, 0, s, n, null, null)
            }

            function Yw(t, e) {
                const n = _t(e, t);
                if (Vu(n)) {
                    const s = n[1];
                    80 & n[2] ? Xr(s, n, s.template, n[8]) : n[5] > 0 && Hd(n)
                }
            }

            function Hd(t) {
                for (let s = vd(t); null !== s; s = yd(s))
                    for (let o = 10; o < s.length; o++) {
                        const l = s[o];
                        if (1024 & l[2]) {
                            const c = l[1];
                            Xr(c, l, c.template, l[8])
                        } else l[5] > 0 && Hd(l)
                    }
                const n = t[1].components;
                if (null !== n)
                    for (let s = 0; s < n.length; s++) {
                        const o = _t(n[s], t);
                        Vu(o) && o[5] > 0 && Hd(o)
                    }
            }

            function Xw(t, e) {
                const n = _t(e, t),
                    s = n[1];
                (function (t, e) {
                    for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
                })(s, n), bo(s, n, n[8])
            }

            function Dl(t, e) {
                return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e
            }

            function jd(t) {
                for (; t;) {
                    t[2] |= 64;
                    const e = vo(t);
                    if (H3(t) && !e) return t;
                    t = e
                }
                return null
            }

            function Wd(t, e, n) {
                const s = e[10];
                s.begin && s.begin();
                try {
                    Xr(t, e, t.template, n)
                } catch (o) {
                    throw Lm(e, o), o
                } finally {
                    s.end && s.end()
                }
            }

            function xm(t) {
                ! function (t) {
                    for (let e = 0; e < t.components.length; e++) {
                        const n = t.components[e],
                            s = fd(n),
                            o = s[1];
                        Ow(o, s, o.template, n)
                    }
                }(t[8])
            }

            function qd(t, e, n) {
                qu(0), e(t, n)
            }
            const t7 = (() => Promise.resolve(null))();

            function Pm(t) {
                return t[7] || (t[7] = [])
            }

            function Rm(t) {
                return t.cleanup || (t.cleanup = [])
            }

            function Lm(t, e) {
                const n = t[9],
                    s = n ? n.get(Qi, null) : null;
                s && s.handleError(e)
            }

            function Fm(t, e, n, s, o) {
                for (let l = 0; l < n.length;) {
                    const c = n[l++],
                        u = n[l++],
                        d = e[c],
                        f = t.data[c];
                    null !== f.setInput ? f.setInput(d, o, s, u) : d[u] = o
                }
            }

            function Zn(t, e, n) {
                const s = qa(e, t);
                ! function (t, e, n) {
                    Ce(t) ? t.setValue(e, n) : e.textContent = n
                }(t[q], s, n)
            }

            function Tl(t, e, n) {
                let s = n ? t.styles : null,
                    o = n ? t.classes : null,
                    l = 0;
                if (null !== e)
                    for (let c = 0; c < e.length; c++) {
                        const u = e[c];
                        "number" == typeof u ? l = u : 1 == l ? o = wu(o, u) : 2 == l && (s = wu(s, u + ": " + e[++c] + ";"))
                    }
                n ? t.styles = s : t.stylesWithoutHost = s, n ? t.classes = o : t.classesWithoutHost = o
            }
            const Qr = new te("INJECTOR", -1);
            class Vm {
                get(e, n = lo) {
                    if (n === lo) {
                        const s = new Error(`NullInjectorError: No provider for ${z(e)}!`);
                        throw s.name = "NullInjectorError", s
                    }
                    return n
                }
            }
            const Co = new te("Set Injector scope."),
                Eo = {},
                r7 = {};
            let Kd;

            function Bm() {
                return void 0 === Kd && (Kd = new Vm), Kd
            }

            function $m(t, e = null, n = null, s) {
                return new o7(t, n, e || Bm(), s)
            }
            class o7 {
                constructor(e, n, s, o = null) {
                    this.parent = s, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
                    const l = [];
                    n && Sn(n, u => this.processProvider(u, e, n)), Sn([e], u => this.processInjectorType(u, [], l)), this.records.set(Qr, Zr(void 0, this));
                    const c = this.records.get(Co);
                    this.scope = null != c ? c.value : null, this.source = o || ("object" == typeof e ? null : z(e))
                }
                get destroyed() {
                    return this._destroyed
                }
                destroy() {
                    this.assertNotDestroyed(), this._destroyed = !0;
                    try {
                        this.onDestroy.forEach(e => e.ngOnDestroy())
                    } finally {
                        this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                    }
                }
                get(e, n = lo, s = P.Default) {
                    this.assertNotDestroyed();
                    const o = jr(this),
                        l = ui(void 0);
                    try {
                        if (!(s & P.SkipSelf)) {
                            let u = this.records.get(e);
                            if (void 0 === u) {
                                const d = function (t) {
                                    return "function" == typeof t || "object" == typeof t && t instanceof te
                                }(e) && zn(e);
                                u = d && this.injectableDefInScope(d) ? Zr(zd(e), Eo) : null, this.records.set(e, u)
                            }
                            if (null != u) return this.hydrate(e, u)
                        }
                        return (s & P.Self ? Bm() : this.parent).get(e, n = s & P.Optional && n === lo ? null : n)
                    } catch (c) {
                        if ("NullInjectorError" === c.name) {
                            if ((c[Hr] = c[Hr] || []).unshift(z(e)), o) throw c;
                            return og(c, e, "R3InjectorError", this.source)
                        }
                        throw c
                    } finally {
                        ui(l), jr(o)
                    }
                }
                _resolveInjectorDefTypes() {
                    this.injectorDefTypes.forEach(e => this.get(e))
                }
                toString() {
                    const e = [];
                    return this.records.forEach((s, o) => e.push(z(o))), `R3Injector[${e.join(", ")}]`
                }
                assertNotDestroyed() {
                    if (this._destroyed) throw new Error("Injector has already been destroyed.")
                }
                processInjectorType(e, n, s) {
                    if (!(e = x(e))) return !1;
                    let o = g1(e);
                    const l = null == o && e.ngModule || void 0,
                        c = void 0 === l ? e : l,
                        u = -1 !== s.indexOf(c);
                    if (void 0 !== l && (o = g1(l)), null == o) return !1;
                    if (null != o.imports && !u) {
                        let p;
                        s.push(c);
                        try {
                            Sn(o.imports, g => {
                                this.processInjectorType(g, n, s) && (void 0 === p && (p = []), p.push(g))
                            })
                        } finally {}
                        if (void 0 !== p)
                            for (let g = 0; g < p.length; g++) {
                                const {
                                    ngModule: m,
                                    providers: v
                                } = p[g];
                                Sn(v, y => this.processProvider(y, m, v || le))
                            }
                    }
                    this.injectorDefTypes.add(c);
                    const d = Ki(c) || (() => new c);
                    this.records.set(c, Zr(d, Eo));
                    const f = o.providers;
                    if (null != f && !u) {
                        const p = e;
                        Sn(f, g => this.processProvider(g, p, f))
                    }
                    return void 0 !== l && void 0 !== e.providers
                }
                processProvider(e, n, s) {
                    let o = Jr(e = x(e)) ? e : x(e && e.provide);
                    const l = function (t, e, n) {
                        return jm(t) ? Zr(void 0, t.useValue) : Zr(function (t, e, n) {
                            let s;
                            if (Jr(t)) {
                                const o = x(t);
                                return Ki(o) || zd(o)
                            }
                            if (jm(t)) s = () => x(t.useValue);
                            else if (function (t) {
                                    return !(!t || !t.useFactory)
                                }(t)) s = () => t.useFactory(...Yi(t.deps || []));
                            else if (function (t) {
                                    return !(!t || !t.useExisting)
                                }(t)) s = () => A(x(t.useExisting));
                            else {
                                const o = x(t && (t.useClass || t.provide));
                                if (! function (t) {
                                        return !!t.deps
                                    }(t)) return Ki(o) || zd(o);
                                s = () => new o(...Yi(t.deps))
                            }
                            return s
                        }(t), Eo)
                    }(e);
                    if (Jr(e) || !0 !== e.multi) this.records.get(o);
                    else {
                        let c = this.records.get(o);
                        c || (c = Zr(void 0, Eo, !0), c.factory = () => Yi(c.multi), this.records.set(o, c)), o = e, c.multi.push(e)
                    }
                    this.records.set(o, l)
                }
                hydrate(e, n) {
                    return n.value === Eo && (n.value = r7, n.value = n.factory()), "object" == typeof n.value && n.value && function (t) {
                        return null !== t && "object" == typeof t && "function" == typeof t.ngOnDestroy
                    }(n.value) && this.onDestroy.add(n.value), n.value
                }
                injectableDefInScope(e) {
                    if (!e.providedIn) return !1;
                    const n = x(e.providedIn);
                    return "string" == typeof n ? "any" === n || n === this.scope : this.injectorDefTypes.has(n)
                }
            }

            function zd(t) {
                const e = zn(t),
                    n = null !== e ? e.factory : Ki(t);
                if (null !== n) return n;
                if (t instanceof te) throw new Error(`Token ${z(t)} is missing a \u0275prov definition.`);
                if (t instanceof Function) return function (t) {
                    const e = t.length;
                    if (e > 0) {
                        const s = yi(e, "?");
                        throw new Error(`Can't resolve all parameters for ${z(t)}: (${s.join(", ")}).`)
                    }
                    const n = function (t) {
                        const e = t && (t[Va] || t[m1]);
                        if (e) {
                            const n = function (t) {
                                if (t.hasOwnProperty("name")) return t.name;
                                const e = ("" + t).match(/^function\s*([^\s(]+)/);
                                return null === e ? "" : e[1]
                            }(t);
                            return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`), e
                        }
                        return null
                    }(t);
                    return null !== n ? () => n.factory(t) : () => new t
                }(t);
                throw new Error("unreachable")
            }

            function Zr(t, e, n = !1) {
                return {
                    factory: t,
                    value: e,
                    multi: n ? [] : void 0
                }
            }

            function jm(t) {
                return null !== t && "object" == typeof t && rd in t
            }

            function Jr(t) {
                return "function" == typeof t
            }
            const Um = function (t, e, n) {
                return function (t, e = null, n = null, s) {
                    const o = $m(t, e, n, s);
                    return o._resolveInjectorDefTypes(), o
                }({
                    name: n
                }, e, t, n)
            };
            class ne {
                static create(e, n) {
                    return Array.isArray(e) ? Um(e, n, "") : Um(e.providers, e.parent, e.name || "")
                }
            }

            function A7(t, e) {
                Xa(fd(t)[1], Re())
            }
            ne.THROW_IF_NOT_FOUND = lo, ne.NULL = new Vm, ne.\u0275prov = W({
                token: ne,
                providedIn: "any",
                factory: () => A(Qr)
            }), ne.__NG_ELEMENT_ID__ = -1;
            let Sl = null;

            function es() {
                if (!Sl) {
                    const t = re.Symbol;
                    if (t && t.iterator) Sl = t.iterator;
                    else {
                        const e = Object.getOwnPropertyNames(Map.prototype);
                        for (let n = 0; n < e.length; ++n) {
                            const s = e[n];
                            "entries" !== s && "size" !== s && Map.prototype[s] === Map.prototype.entries && (Sl = s)
                        }
                    }
                }
                return Sl
            }
            class ln {
                constructor(e) {
                    this.wrapped = e
                }
                static wrap(e) {
                    return new ln(e)
                }
                static unwrap(e) {
                    return ln.isWrapped(e) ? e.wrapped : e
                }
                static isWrapped(e) {
                    return e instanceof ln
                }
            }

            function Do(t) {
                return !!eh(t) && (Array.isArray(t) || !(t instanceof Map) && es() in t)
            }

            function eh(t) {
                return null !== t && ("function" == typeof t || "object" == typeof t)
            }

            function Xe(t, e, n) {
                return !Object.is(t[e], n) && (t[e] = n, !0)
            }

            function th(t, e, n, s) {
                const o = w();
                return Xe(o, Pr(), e) && (J(), On(Ee(), o, t, e, n, s)), th
            }

            function Ei(t, e, n, s, o, l, c, u) {
                const d = w(),
                    f = J(),
                    p = t + 20,
                    g = f.firstCreatePass ? function (t, e, n, s, o, l, c, u, d) {
                        const f = e.consts,
                            p = Gr(e, t, 4, c || null, gi(f, u));
                        Bd(e, n, p, gi(f, d)), Xa(e, p);
                        const g = p.tViews = wl(2, p, s, o, l, e.directiveRegistry, e.pipeRegistry, null, e.schemas, f);
                        return null !== e.queries && (e.queries.template(e, p), g.queries = e.queries.embeddedTView(p)), p
                    }(p, f, d, e, n, s, o, l, c) : f.data[p];
                Dn(g, !1);
                const m = d[q].createComment("");
                yl(f, d, m, g), Ye(m, d), Dl(d, d[p] = Nm(m, d, m, g)), Wa(g) && Fd(f, d, g), null != c && Vd(d, g, u)
            }

            function N(t, e = P.Default) {
                const n = w();
                return null === n ? A(t, e) : Q1(Re(), n, x(t), e)
            }

            function $t(t, e, n) {
                const s = w();
                return Xe(s, Pr(), e) && wt(J(), Ee(), s, t, e, s[q], n, !1), $t
            }

            function oh(t, e, n, s, o) {
                const c = o ? "class" : "style";
                Fm(t, n, e.inputs[c], c, s)
            }

            function i(t, e, n, s) {
                const o = w(),
                    l = J(),
                    c = 20 + t,
                    u = o[q],
                    d = o[c] = bd(u, e, L.lFrame.currentNamespace),
                    f = l.firstCreatePass ? function (t, e, n, s, o, l, c) {
                        const u = e.consts,
                            f = Gr(e, t, 2, o, gi(u, l));
                        return Bd(e, n, f, gi(u, c)), null !== f.attrs && Tl(f, f.attrs, !1), null !== f.mergedAttrs && Tl(f, f.mergedAttrs, !0), null !== e.queries && e.queries.elementStart(e, f), f
                    }(c, l, o, 0, e, n, s) : l.data[c];
                Dn(f, !0);
                const p = f.mergedAttrs;
                null !== p && Ja(u, d, p);
                const g = f.classes;
                null !== g && Sd(u, d, g);
                const m = f.styles;
                null !== m && tm(u, d, m), 64 != (64 & f.flags) && yl(l, o, d, f), 0 === L.lFrame.elementDepthCount && Ye(d, o), L.lFrame.elementDepthCount++, Wa(f) && (Fd(l, o, f), function (t, e, n) {
                    if (xu(e)) {
                        const o = e.directiveEnd;
                        for (let l = e.directiveStart; l < o; l++) {
                            const c = t.data[l];
                            c.contentQueries && c.contentQueries(1, n[l], l)
                        }
                    }
                }(l, f, o)), null !== s && Vd(o, f)
            }

            function r() {
                let t = Re();
                Hu() ? ju() : (t = t.parent, Dn(t, !1));
                const e = t;
                L.lFrame.elementDepthCount--;
                const n = J();
                n.firstCreatePass && (Xa(n, t), xu(t) && n.queries.elementEnd(t)), null != e.classesWithoutHost && function (t) {
                    return 0 != (16 & t.flags)
                }(e) && oh(n, e, w(), e.classesWithoutHost, !0), null != e.stylesWithoutHost && function (t) {
                    return 0 != (32 & t.flags)
                }(e) && oh(n, e, w(), e.stylesWithoutHost, !1)
            }

            function h(t, e, n, s) {
                i(t, e, n, s), r()
            }

            function Ml(t) {
                return !!t && "function" == typeof t.then
            }

            function N0(t) {
                return !!t && "function" == typeof t.subscribe
            }
            const ah = N0;

            function ei(t, e, n, s) {
                const o = w(),
                    l = J(),
                    c = Re();
                return function (t, e, n, s, o, l, c, u) {
                    const d = Wa(s),
                        p = t.firstCreatePass && Rm(t),
                        g = e[8],
                        m = Pm(e);
                    let v = !0;
                    if (3 & s.type || u) {
                        const _ = Lt(s, e),
                            E = u ? u(_) : _,
                            C = m.length,
                            S = u ? T => u(Ie(T[s.index])) : s.index;
                        if (Ce(n)) {
                            let T = null;
                            if (!u && d && (T = function (t, e, n, s) {
                                    const o = t.cleanup;
                                    if (null != o)
                                        for (let l = 0; l < o.length - 1; l += 2) {
                                            const c = o[l];
                                            if (c === n && o[l + 1] === s) {
                                                const u = e[7],
                                                    d = o[l + 2];
                                                return u.length > d ? u[d] : null
                                            }
                                            "string" == typeof c && (l += 2)
                                        }
                                    return null
                                }(t, e, o, s.index)), null !== T)(T.__ngLastListenerFn__ || T).__ngNextListenerFn__ = l, T.__ngLastListenerFn__ = l, v = !1;
                            else {
                                l = lh(s, e, g, l, !1);
                                const O = n.listen(E, o, l);
                                m.push(l, O), p && p.push(o, S, C, C + 1)
                            }
                        } else l = lh(s, e, g, l, !0), E.addEventListener(o, l, c), m.push(l), p && p.push(o, S, C, c)
                    } else l = lh(s, e, g, l, !1);
                    const y = s.outputs;
                    let b;
                    if (v && null !== y && (b = y[o])) {
                        const _ = b.length;
                        if (_)
                            for (let E = 0; E < _; E += 2) {
                                const V = e[b[E]][b[E + 1]].subscribe(l),
                                    ee = m.length;
                                m.push(l, V), p && p.push(o, s.index, ee, -(ee + 1))
                            }
                    }
                }(l, o, o[q], c, t, e, !!n, s), ei
            }

            function R0(t, e, n, s) {
                try {
                    return !1 !== n(s)
                } catch (o) {
                    return Lm(t, o), !1
                }
            }

            function lh(t, e, n, s, o) {
                return function l(c) {
                    if (c === Function) return s;
                    const u = 2 & t.flags ? _t(t.index, e) : e;
                    0 == (32 & e[2]) && jd(u);
                    let d = R0(e, 0, s, c),
                        f = l.__ngNextListenerFn__;
                    for (; f;) d = R0(e, 0, f, c) && d, f = f.__ngNextListenerFn__;
                    return o && !1 === d && (c.preventDefault(), c.returnValue = !1), d
                }
            }

            function Ht(t = 1) {
                return function (t) {
                    return (L.lFrame.contextLView = function (t, e) {
                        for (; t > 0;) e = e[15], t--;
                        return e
                    }(t, L.lFrame.contextLView))[8]
                }(t)
            }

            function fD(t, e) {
                let n = null;
                const s = function (t) {
                    const e = t.attrs;
                    if (null != e) {
                        const n = e.indexOf(5);
                        if (0 == (1 & n)) return e[n + 1]
                    }
                    return null
                }(t);
                for (let o = 0; o < e.length; o++) {
                    const l = e[o];
                    if ("*" !== l) {
                        if (null === s ? sm(t, l, !0) : mw(s, l)) return o
                    } else n = o
                }
                return n
            }

            function K0(t, e, n, s, o) {
                const l = t[n + 1],
                    c = null === e;
                let u = s ? on(l) : Xn(l),
                    d = !1;
                for (; 0 !== u && (!1 === d || c);) {
                    const p = t[u + 1];
                    mD(t[u], e) && (d = !0, t[u + 1] = s ? Md(p) : Ad(p)), u = s ? on(p) : Xn(p)
                }
                d && (t[n + 1] = s ? Ad(l) : Md(l))
            }

            function mD(t, e) {
                return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && $r(t, e) >= 0
            }

            function So(t, e, n) {
                return cn(t, e, n, !1), So
            }

            function wi(t, e) {
                return cn(t, e, null, !0), wi
            }

            function cn(t, e, n, s) {
                const o = w(),
                    l = J(),
                    c = function (t) {
                        const e = L.lFrame,
                            n = e.bindingIndex;
                        return e.bindingIndex = e.bindingIndex + t, n
                    }(2);
                l.firstUpdatePass && function (t, e, n, s) {
                    const o = t.data;
                    if (null === o[n + 1]) {
                        const l = o[rt()],
                            c = function (t, e) {
                                return e >= t.expandoStartIndex
                            }(t, n);
                        (function (t, e) {
                            return 0 != (t.flags & (e ? 16 : 32))
                        })(l, s) && null === e && !c && (e = !1), e = function (t, e, n, s) {
                                const o = function (t) {
                                    const e = L.lFrame.currentDirectiveIndex;
                                    return -1 === e ? null : t[e]
                                }(t);
                                let l = s ? e.residualClasses : e.residualStyles;
                                if (null === o) 0 === (s ? e.classBindings : e.styleBindings) && (n = Ao(n = uh(null, t, e, n, s), e.attrs, s), l = null);
                                else {
                                    const c = e.directiveStylingLast;
                                    if (-1 === c || t[c] !== o)
                                        if (n = uh(o, t, e, n, s), null === l) {
                                            let d = function (t, e, n) {
                                                const s = n ? e.classBindings : e.styleBindings;
                                                if (0 !== Xn(s)) return t[on(s)]
                                            }(t, e, s);
                                            void 0 !== d && Array.isArray(d) && (d = uh(null, t, e, d[1], s), d = Ao(d, e.attrs, s), function (t, e, n, s) {
                                                t[on(n ? e.classBindings : e.styleBindings)] = s
                                            }(t, e, s, d))
                                        } else l = function (t, e, n) {
                                            let s;
                                            const o = e.directiveEnd;
                                            for (let l = 1 + e.directiveStylingLast; l < o; l++) s = Ao(s, t[l].hostAttrs, n);
                                            return Ao(s, e.attrs, n)
                                        }(t, e, s)
                                }
                                return void 0 !== l && (s ? e.residualClasses = l : e.residualStyles = l), n
                            }(o, l, e, s),
                            function (t, e, n, s, o, l) {
                                let c = l ? e.classBindings : e.styleBindings,
                                    u = on(c),
                                    d = Xn(c);
                                t[s] = n;
                                let p, f = !1;
                                if (Array.isArray(n)) {
                                    const g = n;
                                    p = g[1], (null === p || $r(g, p) > 0) && (f = !0)
                                } else p = n;
                                if (o)
                                    if (0 !== d) {
                                        const m = on(t[u + 1]);
                                        t[s + 1] = bl(m, u), 0 !== m && (t[m + 1] = Id(t[m + 1], s)), t[u + 1] = function (t, e) {
                                            return 131071 & t | e << 17
                                        }(t[u + 1], s)
                                    } else t[s + 1] = bl(u, 0), 0 !== u && (t[u + 1] = Id(t[u + 1], s)), u = s;
                                else t[s + 1] = bl(d, 0), 0 === u ? u = s : t[d + 1] = Id(t[d + 1], s), d = s;
                                f && (t[s + 1] = Ad(t[s + 1])), K0(t, p, s, !0), K0(t, p, s, !1),
                                    function (t, e, n, s, o) {
                                        const l = o ? t.residualClasses : t.residualStyles;
                                        null != l && "string" == typeof e && $r(l, e) >= 0 && (n[s + 1] = Md(n[s + 1]))
                                    }(e, p, t, s, l), c = bl(u, d), l ? e.classBindings = c : e.styleBindings = c
                            }(o, l, e, n, c, s)
                    }
                }(l, t, c, s), e !== B && Xe(o, c, e) && function (t, e, n, s, o, l, c, u) {
                    if (!(3 & e.type)) return;
                    const d = t.data,
                        f = d[u + 1];
                    Ol(function (t) {
                        return 1 == (1 & t)
                    }(f) ? iv(d, e, n, o, Xn(f), c) : void 0) || (Ol(l) || function (t) {
                        return 2 == (2 & t)
                    }(f) && (l = iv(d, null, n, o, u, c)), function (t, e, n, s, o) {
                        const l = Ce(t);
                        if (e) o ? l ? t.addClass(n, s) : n.classList.add(s) : l ? t.removeClass(n, s) : n.classList.remove(s);
                        else {
                            let c = -1 === s.indexOf("-") ? void 0 : Et.DashCase;
                            if (null == o) l ? t.removeStyle(n, s, c) : n.style.removeProperty(s);
                            else {
                                const u = "string" == typeof o && o.endsWith("!important");
                                u && (o = o.slice(0, -10), c |= Et.Important), l ? t.setStyle(n, s, o, c) : n.style.setProperty(s, o, u ? "important" : "")
                            }
                        }
                    }(s, c, qa(rt(), n), o, l))
                }(l, l.data[rt()], o, o[q], t, o[c + 1] = function (t, e) {
                    return null == t || ("string" == typeof e ? t += e : "object" == typeof t && (t = z(Ct(t)))), t
                }(e, n), s, c)
            }

            function uh(t, e, n, s, o) {
                let l = null;
                const c = n.directiveEnd;
                let u = n.directiveStylingLast;
                for (-1 === u ? u = n.directiveStart : u++; u < c && (l = e[u], s = Ao(s, l.hostAttrs, o), l !== t);) u++;
                return null !== t && (n.directiveStylingLast = u), s
            }

            function Ao(t, e, n) {
                const s = n ? 1 : 2;
                let o = -1;
                if (null !== e)
                    for (let l = 0; l < e.length; l++) {
                        const c = e[l];
                        "number" == typeof c ? o = c : o === s && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), bt(t, c, !!n || e[++l]))
                    }
                return void 0 === t ? null : t
            }

            function iv(t, e, n, s, o, l) {
                const c = null === e;
                let u;
                for (; o > 0;) {
                    const d = t[o],
                        f = Array.isArray(d),
                        p = f ? d[1] : d,
                        g = null === p;
                    let m = n[o + 1];
                    m === B && (m = g ? le : void 0);
                    let v = g ? ed(m, s) : p === s ? m : void 0;
                    if (f && !Ol(v) && (v = ed(d, s)), Ol(v) && (u = v, c)) return u;
                    const y = t[o + 1];
                    o = c ? on(y) : Xn(y)
                }
                if (null !== e) {
                    let d = l ? e.residualClasses : e.residualStyles;
                    null != d && (u = ed(d, s))
                }
                return u
            }

            function Ol(t) {
                return void 0 !== t
            }

            function a(t, e = "") {
                const n = w(),
                    s = J(),
                    o = t + 20,
                    l = s.firstCreatePass ? Gr(s, o, 1, e, null) : s.data[o],
                    c = n[o] = function (t, e) {
                        return Ce(t) ? t.createText(e) : t.createTextNode(e)
                    }(n[q], e);
                yl(s, n, c, l), Dn(l, !1)
            }

            function dh(t) {
                return hh("", t, ""), dh
            }

            function hh(t, e, n) {
                const s = w(),
                    o = function (t, e, n, s) {
                        return Xe(t, Pr(), n) ? e + j(n) + s : B
                    }(s, t, e, n);
                return o !== B && Zn(s, rt(), o), hh
            }

            function fh(t, e, n) {
                const s = w();
                return Xe(s, Pr(), e) && wt(J(), Ee(), s, t, e, s[q], n, !0), fh
            }
            const er = void 0;
            var QD = ["en", [
                    ["a", "p"],
                    ["AM", "PM"], er
                ],
                [
                    ["AM", "PM"], er, er
                ],
                [
                    ["S", "M", "T", "W", "T", "F", "S"],
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                ], er, [
                    ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                ], er, [
                    ["B", "A"],
                    ["BC", "AD"],
                    ["Before Christ", "Anno Domini"]
                ], 0, [6, 0],
                ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                ["{1}, {0}", er, "{1} 'at' {0}", er],
                [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
                function (t) {
                    const e = Math.floor(Math.abs(t)),
                        n = t.toString().replace(/^[^.]*\.?/, "").length;
                    return 1 === e && 0 === n ? 1 : 5
                }
            ];
            let hs = {};

            function Dv(t) {
                return t in hs || (hs[t] = re.ng && re.ng.common && re.ng.common.locales && re.ng.common.locales[t]), hs[t]
            }
            var M = (() => ((M = M || {})[M.LocaleId = 0] = "LocaleId", M[M.DayPeriodsFormat = 1] = "DayPeriodsFormat", M[M.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", M[M.DaysFormat = 3] = "DaysFormat", M[M.DaysStandalone = 4] = "DaysStandalone", M[M.MonthsFormat = 5] = "MonthsFormat", M[M.MonthsStandalone = 6] = "MonthsStandalone", M[M.Eras = 7] = "Eras", M[M.FirstDayOfWeek = 8] = "FirstDayOfWeek", M[M.WeekendRange = 9] = "WeekendRange", M[M.DateFormat = 10] = "DateFormat", M[M.TimeFormat = 11] = "TimeFormat", M[M.DateTimeFormat = 12] = "DateTimeFormat", M[M.NumberSymbols = 13] = "NumberSymbols", M[M.NumberFormats = 14] = "NumberFormats", M[M.CurrencyCode = 15] = "CurrencyCode", M[M.CurrencySymbol = 16] = "CurrencySymbol", M[M.CurrencyName = 17] = "CurrencyName", M[M.Currencies = 18] = "Currencies", M[M.Directionality = 19] = "Directionality", M[M.PluralCase = 20] = "PluralCase", M[M.ExtraData = 21] = "ExtraData", M))();
            const Nl = "en-US";
            let Tv = Nl;

            function ph(t) {
                vt(t, "Expected localeId to be defined"), "string" == typeof t && (Tv = t.toLowerCase().replace(/_/g, "-"))
            }
            class Xv {}
            const Zv = "ngComponent";
            class Z6 {
                resolveComponentFactory(e) {
                    throw function (t) {
                        const e = Error(`No component factory found for ${z(t)}. Did you add it to @NgModule.entryComponents?`);
                        return e[Zv] = t, e
                    }(e)
                }
            }
            class Di {}

            function Ll(...t) {}

            function ps(t, e) {
                return new ht(Lt(t, e))
            }
            Di.NULL = new Z6;
            const t8 = function () {
                return ps(Re(), w())
            };
            let ht = (() => {
                class t {
                    constructor(n) {
                        this.nativeElement = n
                    }
                }
                return t.__NG_ELEMENT_ID__ = t8, t
            })();
            class gs {}
            let Eh = (() => {
                class t {}
                return t.\u0275prov = W({
                    token: t,
                    providedIn: "root",
                    factory: () => null
                }), t
            })();
            class Vl {
                constructor(e) {
                    this.full = e, this.major = e.split(".")[0], this.minor = e.split(".")[1], this.patch = e.split(".").slice(2).join(".")
                }
            }
            const ey = new Vl("12.2.2");
            class ty {
                constructor() {}
                supports(e) {
                    return Do(e)
                }
                create(e) {
                    return new a8(e)
                }
            }
            const o8 = (t, e) => e;
            class a8 {
                constructor(e) {
                    this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || o8
                }
                forEachItem(e) {
                    let n;
                    for (n = this._itHead; null !== n; n = n._next) e(n)
                }
                forEachOperation(e) {
                    let n = this._itHead,
                        s = this._removalsHead,
                        o = 0,
                        l = null;
                    for (; n || s;) {
                        const c = !s || n && n.currentIndex < iy(s, o, l) ? n : s,
                            u = iy(c, o, l),
                            d = c.currentIndex;
                        if (c === s) o--, s = s._nextRemoved;
                        else if (n = n._next, null == c.previousIndex) o++;
                        else {
                            l || (l = []);
                            const f = u - o,
                                p = d - o;
                            if (f != p) {
                                for (let m = 0; m < f; m++) {
                                    const v = m < l.length ? l[m] : l[m] = 0,
                                        y = v + m;
                                    p <= y && y < f && (l[m] = v + 1)
                                }
                                l[c.previousIndex] = p - f
                            }
                        }
                        u !== d && e(c, u, d)
                    }
                }
                forEachPreviousItem(e) {
                    let n;
                    for (n = this._previousItHead; null !== n; n = n._nextPrevious) e(n)
                }
                forEachAddedItem(e) {
                    let n;
                    for (n = this._additionsHead; null !== n; n = n._nextAdded) e(n)
                }
                forEachMovedItem(e) {
                    let n;
                    for (n = this._movesHead; null !== n; n = n._nextMoved) e(n)
                }
                forEachRemovedItem(e) {
                    let n;
                    for (n = this._removalsHead; null !== n; n = n._nextRemoved) e(n)
                }
                forEachIdentityChange(e) {
                    let n;
                    for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) e(n)
                }
                diff(e) {
                    if (null == e && (e = []), !Do(e)) throw new Error(`Error trying to diff '${z(e)}'. Only arrays and iterables are allowed`);
                    return this.check(e) ? this : null
                }
                onDestroy() {}
                check(e) {
                    this._reset();
                    let o, l, c, n = this._itHead,
                        s = !1;
                    if (Array.isArray(e)) {
                        this.length = e.length;
                        for (let u = 0; u < this.length; u++) l = e[u], c = this._trackByFn(u, l), null !== n && Object.is(n.trackById, c) ? (s && (n = this._verifyReinsertion(n, l, c, u)), Object.is(n.item, l) || this._addIdentityChange(n, l)) : (n = this._mismatch(n, l, c, u), s = !0), n = n._next
                    } else o = 0,
                        function (t, e) {
                            if (Array.isArray(t))
                                for (let n = 0; n < t.length; n++) e(t[n]);
                            else {
                                const n = t[es()]();
                                let s;
                                for (; !(s = n.next()).done;) e(s.value)
                            }
                        }(e, u => {
                            c = this._trackByFn(o, u), null !== n && Object.is(n.trackById, c) ? (s && (n = this._verifyReinsertion(n, u, c, o)), Object.is(n.item, u) || this._addIdentityChange(n, u)) : (n = this._mismatch(n, u, c, o), s = !0), n = n._next, o++
                        }), this.length = o;
                    return this._truncate(n), this.collection = e, this.isDirty
                }
                get isDirty() {
                    return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                }
                _reset() {
                    if (this.isDirty) {
                        let e;
                        for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
                        for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
                        for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = e._nextMoved) e.previousIndex = e.currentIndex;
                        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                    }
                }
                _mismatch(e, n, s, o) {
                    let l;
                    return null === e ? l = this._itTail : (l = e._prev, this._remove(e)), null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(s, null)) ? (Object.is(e.item, n) || this._addIdentityChange(e, n), this._reinsertAfter(e, l, o)) : null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(s, o)) ? (Object.is(e.item, n) || this._addIdentityChange(e, n), this._moveAfter(e, l, o)) : e = this._addAfter(new l8(n, s), l, o), e
                }
                _verifyReinsertion(e, n, s, o) {
                    let l = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(s, null);
                    return null !== l ? e = this._reinsertAfter(l, e._prev, o) : e.currentIndex != o && (e.currentIndex = o, this._addToMoves(e, o)), e
                }
                _truncate(e) {
                    for (; null !== e;) {
                        const n = e._next;
                        this._addToRemovals(this._unlink(e)), e = n
                    }
                    null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                }
                _reinsertAfter(e, n, s) {
                    null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
                    const o = e._prevRemoved,
                        l = e._nextRemoved;
                    return null === o ? this._removalsHead = l : o._nextRemoved = l, null === l ? this._removalsTail = o : l._prevRemoved = o, this._insertAfter(e, n, s), this._addToMoves(e, s), e
                }
                _moveAfter(e, n, s) {
                    return this._unlink(e), this._insertAfter(e, n, s), this._addToMoves(e, s), e
                }
                _addAfter(e, n, s) {
                    return this._insertAfter(e, n, s), this._additionsTail = null === this._additionsTail ? this._additionsHead = e : this._additionsTail._nextAdded = e, e
                }
                _insertAfter(e, n, s) {
                    const o = null === n ? this._itHead : n._next;
                    return e._next = o, e._prev = n, null === o ? this._itTail = e : o._prev = e, null === n ? this._itHead = e : n._next = e, null === this._linkedRecords && (this._linkedRecords = new ny), this._linkedRecords.put(e), e.currentIndex = s, e
                }
                _remove(e) {
                    return this._addToRemovals(this._unlink(e))
                }
                _unlink(e) {
                    null !== this._linkedRecords && this._linkedRecords.remove(e);
                    const n = e._prev,
                        s = e._next;
                    return null === n ? this._itHead = s : n._next = s, null === s ? this._itTail = n : s._prev = n, e
                }
                _addToMoves(e, n) {
                    return e.previousIndex === n || (this._movesTail = null === this._movesTail ? this._movesHead = e : this._movesTail._nextMoved = e), e
                }
                _addToRemovals(e) {
                    return null === this._unlinkedRecords && (this._unlinkedRecords = new ny), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e
                }
                _addIdentityChange(e, n) {
                    return e.item = n, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = e : this._identityChangesTail._nextIdentityChange = e, e
                }
            }
            class l8 {
                constructor(e, n) {
                    this.item = e, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
                }
            }
            class c8 {
                constructor() {
                    this._head = null, this._tail = null
                }
                add(e) {
                    null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e)
                }
                get(e, n) {
                    let s;
                    for (s = this._head; null !== s; s = s._nextDup)
                        if ((null === n || n <= s.currentIndex) && Object.is(s.trackById, e)) return s;
                    return null
                }
                remove(e) {
                    const n = e._prevDup,
                        s = e._nextDup;
                    return null === n ? this._head = s : n._nextDup = s, null === s ? this._tail = n : s._prevDup = n, null === this._head
                }
            }
            class ny {
                constructor() {
                    this.map = new Map
                }
                put(e) {
                    const n = e.trackById;
                    let s = this.map.get(n);
                    s || (s = new c8, this.map.set(n, s)), s.add(e)
                }
                get(e, n) {
                    const o = this.map.get(e);
                    return o ? o.get(e, n) : null
                }
                remove(e) {
                    const n = e.trackById;
                    return this.map.get(n).remove(e) && this.map.delete(n), e
                }
                get isEmpty() {
                    return 0 === this.map.size
                }
                clear() {
                    this.map.clear()
                }
            }

            function iy(t, e, n) {
                const s = t.previousIndex;
                if (null === s) return s;
                let o = 0;
                return n && s < n.length && (o = n[s]), s + e + o
            }
            class ry {
                constructor() {}
                supports(e) {
                    return e instanceof Map || eh(e)
                }
                create() {
                    return new u8
                }
            }
            class u8 {
                constructor() {
                    this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                }
                get isDirty() {
                    return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                }
                forEachItem(e) {
                    let n;
                    for (n = this._mapHead; null !== n; n = n._next) e(n)
                }
                forEachPreviousItem(e) {
                    let n;
                    for (n = this._previousMapHead; null !== n; n = n._nextPrevious) e(n)
                }
                forEachChangedItem(e) {
                    let n;
                    for (n = this._changesHead; null !== n; n = n._nextChanged) e(n)
                }
                forEachAddedItem(e) {
                    let n;
                    for (n = this._additionsHead; null !== n; n = n._nextAdded) e(n)
                }
                forEachRemovedItem(e) {
                    let n;
                    for (n = this._removalsHead; null !== n; n = n._nextRemoved) e(n)
                }
                diff(e) {
                    if (e) {
                        if (!(e instanceof Map || eh(e))) throw new Error(`Error trying to diff '${z(e)}'. Only maps and objects are allowed`)
                    } else e = new Map;
                    return this.check(e) ? this : null
                }
                onDestroy() {}
                check(e) {
                    this._reset();
                    let n = this._mapHead;
                    if (this._appendAfter = null, this._forEach(e, (s, o) => {
                            if (n && n.key === o) this._maybeAddToChanges(n, s), this._appendAfter = n, n = n._next;
                            else {
                                const l = this._getOrCreateRecordForKey(o, s);
                                n = this._insertBeforeOrAppend(n, l)
                            }
                        }), n) {
                        n._prev && (n._prev._next = null), this._removalsHead = n;
                        for (let s = n; null !== s; s = s._nextRemoved) s === this._mapHead && (this._mapHead = null), this._records.delete(s.key), s._nextRemoved = s._next, s.previousValue = s.currentValue, s.currentValue = null, s._prev = null, s._next = null
                    }
                    return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                }
                _insertBeforeOrAppend(e, n) {
                    if (e) {
                        const s = e._prev;
                        return n._next = e, n._prev = s, e._prev = n, s && (s._next = n), e === this._mapHead && (this._mapHead = n), this._appendAfter = e, e
                    }
                    return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null
                }
                _getOrCreateRecordForKey(e, n) {
                    if (this._records.has(e)) {
                        const o = this._records.get(e);
                        this._maybeAddToChanges(o, n);
                        const l = o._prev,
                            c = o._next;
                        return l && (l._next = c), c && (c._prev = l), o._next = null, o._prev = null, o
                    }
                    const s = new d8(e);
                    return this._records.set(e, s), s.currentValue = n, this._addToAdditions(s), s
                }
                _reset() {
                    if (this.isDirty) {
                        let e;
                        for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
                        for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
                        for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
                        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                    }
                }
                _maybeAddToChanges(e, n) {
                    Object.is(n, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = n, this._addToChanges(e))
                }
                _addToAdditions(e) {
                    null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e)
                }
                _addToChanges(e) {
                    null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e)
                }
                _forEach(e, n) {
                    e instanceof Map ? e.forEach(n) : Object.keys(e).forEach(s => n(e[s], s))
                }
            }
            class d8 {
                constructor(e) {
                    this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                }
            }

            function sy() {
                return new xo([new ty])
            }
            let xo = (() => {
                class t {
                    constructor(n) {
                        this.factories = n
                    }
                    static create(n, s) {
                        if (null != s) {
                            const o = s.factories.slice();
                            n = n.concat(o)
                        }
                        return new t(n)
                    }
                    static extend(n) {
                        return {
                            provide: t,
                            useFactory: s => t.create(n, s || sy()),
                            deps: [
                                [t, new _i, new dt]
                            ]
                        }
                    }
                    find(n) {
                        const s = this.factories.find(o => o.supports(n));
                        if (null != s) return s;
                        throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(t){return t.name||typeof t}(n)}'`)
                    }
                }
                return t.\u0275prov = W({
                    token: t,
                    providedIn: "root",
                    factory: sy
                }), t
            })();

            function oy() {
                return new ms([new ry])
            }
            let ms = (() => {
                class t {
                    constructor(n) {
                        this.factories = n
                    }
                    static create(n, s) {
                        if (s) {
                            const o = s.factories.slice();
                            n = n.concat(o)
                        }
                        return new t(n)
                    }
                    static extend(n) {
                        return {
                            provide: t,
                            useFactory: s => t.create(n, s || oy()),
                            deps: [
                                [t, new _i, new dt]
                            ]
                        }
                    }
                    find(n) {
                        const s = this.factories.find(o => o.supports(n));
                        if (s) return s;
                        throw new Error(`Cannot find a differ supporting object '${n}'`)
                    }
                }
                return t.\u0275prov = W({
                    token: t,
                    providedIn: "root",
                    factory: oy
                }), t
            })();

            function Bl(t, e, n, s, o = !1) {
                for (; null !== n;) {
                    const l = e[n.index];
                    if (null !== l && s.push(Ie(l)), tn(l))
                        for (let u = 10; u < l.length; u++) {
                            const d = l[u],
                                f = d[1].firstChild;
                            null !== f && Bl(d[1], d, f, s)
                        }
                    const c = n.type;
                    if (8 & c) Bl(t, e, n.child, s);
                    else if (32 & c) {
                        const u = md(n, e);
                        let d;
                        for (; d = u();) s.push(d)
                    } else if (16 & c) {
                        const u = Zg(e, n);
                        if (Array.isArray(u)) s.push(...u);
                        else {
                            const d = vo(e[16]);
                            Bl(d[1], d, u, s, !0)
                        }
                    }
                    n = o ? n.projectionNext : n.next
                }
                return s
            }
            class Po {
                constructor(e, n) {
                    this._lView = e, this._cdRefInjectingView = n, this._appRef = null, this._attachedToViewContainer = !1
                }
                get rootNodes() {
                    const e = this._lView,
                        n = e[1];
                    return Bl(n, e, n.firstChild, [])
                }
                get context() {
                    return this._lView[8]
                }
                set context(e) {
                    this._lView[8] = e
                }
                get destroyed() {
                    return 256 == (256 & this._lView[2])
                }
                destroy() {
                    if (this._appRef) this._appRef.detachView(this);
                    else if (this._attachedToViewContainer) {
                        const e = this._lView[3];
                        if (tn(e)) {
                            const n = e[8],
                                s = n ? n.indexOf(this) : -1;
                            s > -1 && (Cd(e, s), Gi(n, s))
                        }
                        this._attachedToViewContainer = !1
                    }
                    Ug(this._lView[1], this._lView)
                }
                onDestroy(e) {
                    ! function (t, e, n, s) {
                        const o = Pm(e);
                        null === n ? o.push(s) : (o.push(n), t.firstCreatePass && Rm(t).push(s, o.length - 1))
                    }(this._lView[1], this._lView, null, e)
                }
                markForCheck() {
                    jd(this._cdRefInjectingView || this._lView)
                }
                detach() {
                    this._lView[2] &= -129
                }
                reattach() {
                    this._lView[2] |= 128
                }
                detectChanges() {
                    Wd(this._lView[1], this._lView, this.context)
                }
                checkNoChanges() {
                    ! function (t, e, n) {
                        za(!0);
                        try {
                            Wd(t, e, n)
                        } finally {
                            za(!1)
                        }
                    }(this._lView[1], this._lView, this.context)
                }
                attachToViewContainerRef() {
                    if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                    this._attachedToViewContainer = !0
                }
                detachFromAppRef() {
                    this._appRef = null,
                        function (t, e) {
                            yo(t, e, e[q], 2, null, null)
                        }(this._lView[1], this._lView)
                }
                attachToAppRef(e) {
                    if (this._attachedToViewContainer) throw new Error("This view is already attached to a ViewContainer!");
                    this._appRef = e
                }
            }
            class f8 extends Po {
                constructor(e) {
                    super(e), this._view = e
                }
                detectChanges() {
                    xm(this._view)
                }
                checkNoChanges() {
                    ! function (t) {
                        za(!0);
                        try {
                            xm(t)
                        } finally {
                            za(!1)
                        }
                    }(this._view)
                }
                get context() {
                    return null
                }
            }
            const g8 = function (t) {
                return function (t, e, n) {
                    if (Ua(t) && !n) {
                        const s = _t(t.index, e);
                        return new Po(s, s)
                    }
                    return 47 & t.type ? new Po(e[16], e) : null
                }(Re(), w(), 16 == (16 & t))
            };
            let $l = (() => {
                class t {}
                return t.__NG_ELEMENT_ID__ = g8, t
            })();
            const y8 = [new ry],
                b8 = new xo([new ty]),
                C8 = new ms(y8),
                w8 = function () {
                    return function (t, e) {
                        return 4 & t.type ? new T8(e, t, ps(t, e)) : null
                    }(Re(), w())
                };
            let ti = (() => {
                class t {}
                return t.__NG_ELEMENT_ID__ = w8, t
            })();
            const D8 = ti,
                T8 = class extends D8 {
                    constructor(e, n, s) {
                        super(), this._declarationLView = e, this._declarationTContainer = n, this.elementRef = s
                    }
                    createEmbeddedView(e) {
                        const n = this._declarationTContainer.tViews,
                            s = _o(this._declarationLView, n, e, 16, null, n.declTNode, null, null, null, null);
                        s[17] = this._declarationLView[this._declarationTContainer.index];
                        const l = this._declarationLView[19];
                        return null !== l && (s[19] = l.createEmbeddedView(n)), bo(n, s, e), new Po(s)
                    }
                };
            class Rn {}
            class ay {}
            const I8 = function () {
                return function (t, e) {
                    let n;
                    const s = e[t.index];
                    if (tn(s)) n = s;
                    else {
                        let o;
                        if (8 & t.type) o = Ie(s);
                        else {
                            const l = e[q];
                            o = l.createComment("");
                            const c = Lt(t, e);
                            Zi(l, vl(l, c), o, function (t, e) {
                                return Ce(t) ? t.nextSibling(e) : e.nextSibling
                            }(l, c), !1)
                        }
                        e[t.index] = n = Nm(s, e, o, t), Dl(e, n)
                    }
                    return new ly(n, t, e)
                }(Re(), w())
            };
            let dn = (() => {
                class t {}
                return t.__NG_ELEMENT_ID__ = I8, t
            })();
            const O8 = dn,
                ly = class extends O8 {
                    constructor(e, n, s) {
                        super(), this._lContainer = e, this._hostTNode = n, this._hostLView = s
                    }
                    get element() {
                        return ps(this._hostTNode, this._hostLView)
                    }
                    get injector() {
                        return new Lr(this._hostTNode, this._hostLView)
                    }
                    get parentInjector() {
                        const e = nl(this._hostTNode, this._hostLView);
                        if (K1(e)) {
                            const n = kr(e, this._hostLView),
                                s = Rr(e);
                            return new Lr(n[1].data[s + 8], n)
                        }
                        return new Lr(null, this._hostLView)
                    }
                    clear() {
                        for (; this.length > 0;) this.remove(this.length - 1)
                    }
                    get(e) {
                        const n = cy(this._lContainer);
                        return null !== n && n[e] || null
                    }
                    get length() {
                        return this._lContainer.length - 10
                    }
                    createEmbeddedView(e, n, s) {
                        const o = e.createEmbeddedView(n || {});
                        return this.insert(o, s), o
                    }
                    createComponent(e, n, s, o, l) {
                        const c = s || this.parentInjector;
                        if (!l && null == e.ngModule && c) {
                            const d = c.get(Rn, null);
                            d && (l = d)
                        }
                        const u = e.create(c, o, void 0, l);
                        return this.insert(u.hostView, n), u
                    }
                    insert(e, n) {
                        const s = e._lView,
                            o = s[1];
                        if (function (t) {
                                return tn(t[3])
                            }(s)) {
                            const p = this.indexOf(e);
                            if (-1 !== p) this.detach(p);
                            else {
                                const g = s[3],
                                    m = new ly(g, g[6], g[3]);
                                m.detach(m.indexOf(e))
                            }
                        }
                        const l = this._adjustIndex(n),
                            c = this._lContainer;
                        ! function (t, e, n, s) {
                            const o = 10 + s,
                                l = n.length;
                            s > 0 && (n[o - 1][4] = e), s < l - 10 ? (e[4] = n[o], al(n, 10 + s, e)) : (n.push(e), e[4] = null), e[3] = n;
                            const c = e[17];
                            null !== c && n !== c && function (t, e) {
                                const n = t[9];
                                e[16] !== e[3][3][16] && (t[2] = !0), null === n ? t[9] = [e] : n.push(e)
                            }(c, e);
                            const u = e[19];
                            null !== u && u.insertView(t), e[2] |= 128
                        }(o, s, c, l);
                        const u = Dd(l, c),
                            d = s[q],
                            f = vl(d, c[7]);
                        return null !== f && function (t, e, n, s, o, l) {
                            s[0] = o, s[6] = e, yo(t, s, n, 1, o, l)
                        }(o, c[6], d, s, f, u), e.attachToViewContainerRef(), al(wh(c), l, e), e
                    }
                    move(e, n) {
                        return this.insert(e, n)
                    }
                    indexOf(e) {
                        const n = cy(this._lContainer);
                        return null !== n ? n.indexOf(e) : -1
                    }
                    remove(e) {
                        const n = this._adjustIndex(e, -1),
                            s = Cd(this._lContainer, n);
                        s && (Gi(wh(this._lContainer), n), Ug(s[1], s))
                    }
                    detach(e) {
                        const n = this._adjustIndex(e, -1),
                            s = Cd(this._lContainer, n);
                        return s && null != Gi(wh(this._lContainer), n) ? new Po(s) : null
                    }
                    _adjustIndex(e, n = 0) {
                        return null == e ? this.length + n : e
                    }
                };

            function cy(t) {
                return t[8]
            }

            function wh(t) {
                return t[8] || (t[8] = [])
            }
            const bs = {};
            class Oy extends Di {
                constructor(e) {
                    super(), this.ngModule = e
                }
                resolveComponentFactory(e) {
                    const n = nt(e);
                    return new xy(n, this.ngModule)
                }
            }

            function Ny(t) {
                const e = [];
                for (let n in t) t.hasOwnProperty(n) && e.push({
                    propName: t[n],
                    templateName: n
                });
                return e
            }
            const ST = new te("SCHEDULER_TOKEN", {
                providedIn: "root",
                factory: () => Rg
            });
            class xy extends Xv {
                constructor(e, n) {
                    super(), this.componentDef = e, this.ngModule = n, this.componentType = e.type, this.selector = function (t) {
                        return t.map(vw).join(",")
                    }(e.selectors), this.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : [], this.isBoundToModule = !!n
                }
                get inputs() {
                    return Ny(this.componentDef.inputs)
                }
                get outputs() {
                    return Ny(this.componentDef.outputs)
                }
                create(e, n, s, o) {
                    const l = (o = o || this.ngModule) ? function (t, e) {
                            return {
                                get: (n, s, o) => {
                                    const l = t.get(n, bs, o);
                                    return l !== bs || s === bs ? l : e.get(n, s, o)
                                }
                            }
                        }(e, o.injector) : e,
                        c = l.get(gs, O1),
                        u = l.get(Eh, null),
                        d = c.createRenderer(null, this.componentDef),
                        f = this.componentDef.selectors[0][0] || "div",
                        p = s ? function (t, e, n) {
                            if (Ce(t)) return t.selectRootElement(e, n === Pe.ShadowDom);
                            let s = "string" == typeof e ? t.querySelector(e) : e;
                            return s.textContent = "", s
                        }(d, s, this.componentDef.encapsulation) : bd(c.createRenderer(null, this.componentDef), f, function (t) {
                            const e = t.toLowerCase();
                            return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null
                        }(f)),
                        g = this.componentDef.onPush ? 576 : 528,
                        m = function (t, e) {
                            return {
                                components: [],
                                scheduler: t || Rg,
                                clean: t7,
                                playerHandler: e || null,
                                flags: 0
                            }
                        }(),
                        v = wl(0, null, null, 1, 0, null, null, null, null, null),
                        y = _o(null, v, m, g, null, null, c, d, u, l);
                    let b, _;
                    Ga(y);
                    try {
                        const E = function (t, e, n, s, o, l) {
                            const c = n[1];
                            n[20] = t;
                            const d = Gr(c, 20, 2, "#host", null),
                                f = d.mergedAttrs = e.hostAttrs;
                            null !== f && (Tl(d, f, !0), null !== t && (Ja(o, t, f), null !== d.classes && Sd(o, t, d.classes), null !== d.styles && tm(o, t, d.styles)));
                            const p = s.createRenderer(t, e),
                                g = _o(n, bm(e), null, e.onPush ? 64 : 16, n[20], d, s, p, l || null, null);
                            return c.firstCreatePass && (il(no(d, n), c, e.type), Im(c, d), Mm(d, n.length, 1)), Dl(n, g), n[20] = g
                        }(p, this.componentDef, y, c, d);
                        if (p)
                            if (s) Ja(d, p, ["ng-version", ey.full]);
                            else {
                                const {
                                    attrs: C,
                                    classes: S
                                } = function (t) {
                                    const e = [],
                                        n = [];
                                    let s = 1,
                                        o = 2;
                                    for (; s < t.length;) {
                                        let l = t[s];
                                        if ("string" == typeof l) 2 === o ? "" !== l && e.push(l, t[++s]) : 8 === o && n.push(l);
                                        else {
                                            if (!rn(o)) break;
                                            o = l
                                        }
                                        s++
                                    }
                                    return {
                                        attrs: e,
                                        classes: n
                                    }
                                }(this.componentDef.selectors[0]);
                                C && Ja(d, p, C), S && S.length > 0 && Sd(d, p, S.join(" "))
                            } if (_ = Fu(v, 20), void 0 !== n) {
                            const C = _.projection = [];
                            for (let S = 0; S < this.ngContentSelectors.length; S++) {
                                const T = n[S];
                                C.push(null != T ? Array.from(T) : null)
                            }
                        }
                        b = function (t, e, n, s, o) {
                            const l = n[1],
                                c = function (t, e, n) {
                                    const s = Re();
                                    t.firstCreatePass && (n.providersResolver && n.providersResolver(n), Om(t, s, e, Yr(t, e, 1, null), n));
                                    const o = io(e, t, s.directiveStart, s);
                                    Ye(o, e);
                                    const l = Lt(s, e);
                                    return l && Ye(l, e), o
                                }(l, n, e);
                            if (s.components.push(c), t[8] = c, o && o.forEach(d => d(c, e)), e.contentQueries) {
                                const d = Re();
                                e.contentQueries(1, c, d.directiveStart)
                            }
                            const u = Re();
                            return !l.firstCreatePass || null === e.hostBindings && null === e.hostAttrs || (mi(u.index), Sm(n[1], u, 0, u.directiveStart, u.directiveEnd, e), Am(e, c)), c
                        }(E, this.componentDef, y, m, [A7]), bo(v, y, null)
                    } finally {
                        Ya()
                    }
                    return new MT(this.componentType, b, ps(_, y), y, _)
                }
            }
            class MT extends class {} {
                constructor(e, n, s, o, l) {
                    super(), this.location = s, this._rootLView = o, this._tNode = l, this.instance = n, this.hostView = this.changeDetectorRef = new f8(o), this.componentType = e
                }
                get injector() {
                    return new Lr(this._tNode, this._rootLView)
                }
                destroy() {
                    this.hostView.destroy()
                }
                onDestroy(e) {
                    this.hostView.onDestroy(e)
                }
            }
            const Cs = new Map;
            class xT extends Rn {
                constructor(e, n) {
                    super(), this._parent = n, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new Oy(this);
                    const s = Pt(e),
                        o = function (t) {
                            return t[P3] || null
                        }(e);
                    o && ph(o), this._bootstrapComponents = Mn(s.bootstrap), this._r3Injector = $m(e, n, [{
                        provide: Rn,
                        useValue: this
                    }, {
                        provide: Di,
                        useValue: this.componentFactoryResolver
                    }], z(e)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(e)
                }
                get(e, n = ne.THROW_IF_NOT_FOUND, s = P.Default) {
                    return e === ne || e === Rn || e === Qr ? this : this._r3Injector.get(e, n, s)
                }
                destroy() {
                    const e = this._r3Injector;
                    !e.destroyed && e.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null
                }
                onDestroy(e) {
                    this.destroyCbs.push(e)
                }
            }
            class Lh extends ay {
                constructor(e) {
                    super(), this.moduleType = e, null !== Pt(e) && function (t) {
                        const e = new Set;
                        ! function n(s) {
                            const o = Pt(s, !0),
                                l = o.id;
                            null !== l && (function (t, e, n) {
                                if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${z(e)} vs ${z(e.name)}`)
                            }(l, Cs.get(l), s), Cs.set(l, s));
                            const c = Mn(o.imports);
                            for (const u of c) e.has(u) || (e.add(u), n(u))
                        }(t)
                    }(e)
                }
                create(e) {
                    return new xT(this.moduleType, e)
                }
            }

            function ky(t, e, n, s, o, l) {
                const c = e + n;
                return Xe(t, c, o) ? function (t, e, n) {
                    return t[e] = n
                }(t, c + 1, l ? s.call(l, o) : s(o)) : function (t, e) {
                    const n = t[e];
                    return n === B ? void 0 : n
                }(t, c + 1)
            }

            function Hy(t, e, n) {
                const s = t + 20,
                    o = w(),
                    l = function (t, e) {
                        return t[e]
                    }(o, s);
                return function (t, e) {
                    ln.isWrapped(e) && (e = ln.unwrap(e), t[L.lFrame.bindingIndex] = B);
                    return e
                }(o, function (t, e) {
                    return t[1].data[e].pure
                }(o, s) ? ky(o, function () {
                    const t = L.lFrame;
                    let e = t.bindingRootIndex;
                    return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
                }(), e, l.transform, n, l) : l.transform(n))
            }

            function Fh(t) {
                return e => {
                    setTimeout(t, void 0, e)
                }
            }
            const Dt = class extends qn {
                constructor(e = !1) {
                    super(), this.__isAsync = e
                }
                emit(e) {
                    super.next(e)
                }
                subscribe(e, n, s) {
                    var o, l, c;
                    let u = e,
                        d = n || (() => null),
                        f = s;
                    if (e && "object" == typeof e) {
                        const g = e;
                        u = null === (o = g.next) || void 0 === o ? void 0 : o.bind(g), d = null === (l = g.error) || void 0 === l ? void 0 : l.bind(g), f = null === (c = g.complete) || void 0 === c ? void 0 : c.bind(g)
                    }
                    this.__isAsync && (d = Fh(d), u && (u = Fh(u)), f && (f = Fh(f)));
                    const p = super.subscribe({
                        next: u,
                        error: d,
                        complete: f
                    });
                    return e instanceof be && e.add(p), p
                }
            };
            Symbol;
            const qo = new te("Application Initializer");
            let ws = (() => {
                class t {
                    constructor(n) {
                        this.appInits = n, this.resolve = Ll, this.reject = Ll, this.initialized = !1, this.done = !1, this.donePromise = new Promise((s, o) => {
                            this.resolve = s, this.reject = o
                        })
                    }
                    runInitializers() {
                        if (this.initialized) return;
                        const n = [],
                            s = () => {
                                this.done = !0, this.resolve()
                            };
                        if (this.appInits)
                            for (let o = 0; o < this.appInits.length; o++) {
                                const l = this.appInits[o]();
                                if (Ml(l)) n.push(l);
                                else if (ah(l)) {
                                    const c = new Promise((u, d) => {
                                        l.subscribe({
                                            complete: u,
                                            error: d
                                        })
                                    });
                                    n.push(c)
                                }
                            }
                        Promise.all(n).then(() => {
                            s()
                        }).catch(o => {
                            this.reject(o)
                        }), 0 === n.length && s(), this.initialized = !0
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(qo, 8))
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();
            const Ko = new te("AppId"),
                x9 = {
                    provide: Ko,
                    useFactory: function () {
                        return `${Qh()}${Qh()}${Qh()}`
                    },
                    deps: []
                };

            function Qh() {
                return String.fromCharCode(97 + Math.floor(25 * Math.random()))
            }
            const u2 = new te("Platform Initializer"),
                Zh = new te("Platform ID"),
                d2 = new te("appBootstrapListener");
            let Yl = (() => {
                class t {
                    log(n) {
                        console.log(n)
                    }
                    warn(n) {
                        console.warn(n)
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();
            const Si = new te("LocaleId"),
                h2 = new te("DefaultCurrencyCode");
            class R9 {
                constructor(e, n) {
                    this.ngModuleFactory = e, this.componentFactories = n
                }
            }
            const Jh = function (t) {
                    return new Lh(t)
                },
                k9 = Jh,
                L9 = function (t) {
                    return Promise.resolve(Jh(t))
                },
                f2 = function (t) {
                    const e = Jh(t),
                        s = Mn(Pt(t).declarations).reduce((o, l) => {
                            const c = nt(l);
                            return c && o.push(new xy(c)), o
                        }, []);
                    return new R9(e, s)
                },
                F9 = f2,
                V9 = function (t) {
                    return Promise.resolve(f2(t))
                };
            let ir = (() => {
                class t {
                    constructor() {
                        this.compileModuleSync = k9, this.compileModuleAsync = L9, this.compileModuleAndAllComponentsSync = F9, this.compileModuleAndAllComponentsAsync = V9
                    }
                    clearCache() {}
                    clearCacheFor(n) {}
                    getModuleId(n) {}
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();
            const H9 = (() => Promise.resolve(0))();

            function ef(t) {
                "undefined" == typeof Zone ? H9.then(() => {
                    t && t.apply(null, null)
                }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
            }
            class Me {
                constructor({
                    enableLongStackTrace: e = !1,
                    shouldCoalesceEventChangeDetection: n = !1,
                    shouldCoalesceRunChangeDetection: s = !1
                }) {
                    if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new Dt(!1), this.onMicrotaskEmpty = new Dt(!1), this.onStable = new Dt(!1), this.onError = new Dt(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                    Zone.assertZonePatched();
                    const o = this;
                    o._nesting = 0, o._outer = o._inner = Zone.current, Zone.TaskTrackingZoneSpec && (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec)), e && Zone.longStackTraceZoneSpec && (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)), o.shouldCoalesceEventChangeDetection = !s && n, o.shouldCoalesceRunChangeDetection = s, o.lastRequestAnimationFrameId = -1, o.nativeRequestAnimationFrame = function () {
                            let t = re.requestAnimationFrame,
                                e = re.cancelAnimationFrame;
                            if ("undefined" != typeof Zone && t && e) {
                                const n = t[Zone.__symbol__("OriginalDelegate")];
                                n && (t = n);
                                const s = e[Zone.__symbol__("OriginalDelegate")];
                                s && (e = s)
                            }
                            return {
                                nativeRequestAnimationFrame: t,
                                nativeCancelAnimationFrame: e
                            }
                        }().nativeRequestAnimationFrame,
                        function (t) {
                            const e = () => {
                                ! function (t) {
                                    t.isCheckStableRunning || -1 !== t.lastRequestAnimationFrameId || (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(re, () => {
                                        t.fakeTopEventTask || (t.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                                            t.lastRequestAnimationFrameId = -1, nf(t), t.isCheckStableRunning = !0, tf(t), t.isCheckStableRunning = !1
                                        }, void 0, () => {}, () => {})), t.fakeTopEventTask.invoke()
                                    }), nf(t))
                                }(t)
                            };
                            t._inner = t._inner.fork({
                                name: "angular",
                                properties: {
                                    isAngularZone: !0
                                },
                                onInvokeTask: (n, s, o, l, c, u) => {
                                    try {
                                        return p2(t), n.invokeTask(o, l, c, u)
                                    } finally {
                                        (t.shouldCoalesceEventChangeDetection && "eventTask" === l.type || t.shouldCoalesceRunChangeDetection) && e(), g2(t)
                                    }
                                },
                                onInvoke: (n, s, o, l, c, u, d) => {
                                    try {
                                        return p2(t), n.invoke(o, l, c, u, d)
                                    } finally {
                                        t.shouldCoalesceRunChangeDetection && e(), g2(t)
                                    }
                                },
                                onHasTask: (n, s, o, l) => {
                                    n.hasTask(o, l), s === o && ("microTask" == l.change ? (t._hasPendingMicrotasks = l.microTask, nf(t), tf(t)) : "macroTask" == l.change && (t.hasPendingMacrotasks = l.macroTask))
                                },
                                onHandleError: (n, s, o, l) => (n.handleError(o, l), t.runOutsideAngular(() => t.onError.emit(l)), !1)
                            })
                        }(o)
                }
                static isInAngularZone() {
                    return !0 === Zone.current.get("isAngularZone")
                }
                static assertInAngularZone() {
                    if (!Me.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                }
                static assertNotInAngularZone() {
                    if (Me.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                }
                run(e, n, s) {
                    return this._inner.run(e, n, s)
                }
                runTask(e, n, s, o) {
                    const l = this._inner,
                        c = l.scheduleEventTask("NgZoneEvent: " + o, e, U9, Ll, Ll);
                    try {
                        return l.runTask(c, n, s)
                    } finally {
                        l.cancelTask(c)
                    }
                }
                runGuarded(e, n, s) {
                    return this._inner.runGuarded(e, n, s)
                }
                runOutsideAngular(e) {
                    return this._outer.run(e)
                }
            }
            const U9 = {};

            function tf(t) {
                if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
                    t._nesting++, t.onMicrotaskEmpty.emit(null)
                } finally {
                    if (t._nesting--, !t.hasPendingMicrotasks) try {
                        t.runOutsideAngular(() => t.onStable.emit(null))
                    } finally {
                        t.isStable = !0
                    }
                }
            }

            function nf(t) {
                t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || (t.shouldCoalesceEventChangeDetection || t.shouldCoalesceRunChangeDetection) && -1 !== t.lastRequestAnimationFrameId)
            }

            function p2(t) {
                t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
            }

            function g2(t) {
                t._nesting--, tf(t)
            }
            class K9 {
                constructor() {
                    this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Dt, this.onMicrotaskEmpty = new Dt, this.onStable = new Dt, this.onError = new Dt
                }
                run(e, n, s) {
                    return e.apply(n, s)
                }
                runGuarded(e, n, s) {
                    return e.apply(n, s)
                }
                runOutsideAngular(e) {
                    return e()
                }
                runTask(e, n, s, o) {
                    return e.apply(n, s)
                }
            }
            let rf = (() => {
                    class t {
                        constructor(n) {
                            this._ngZone = n, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), n.run(() => {
                                this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                            })
                        }
                        _watchAngularEvents() {
                            this._ngZone.onUnstable.subscribe({
                                next: () => {
                                    this._didWork = !0, this._isZoneStable = !1
                                }
                            }), this._ngZone.runOutsideAngular(() => {
                                this._ngZone.onStable.subscribe({
                                    next: () => {
                                        Me.assertNotInAngularZone(), ef(() => {
                                            this._isZoneStable = !0, this._runCallbacksIfReady()
                                        })
                                    }
                                })
                            })
                        }
                        increasePendingRequestCount() {
                            return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                        }
                        decreasePendingRequestCount() {
                            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                            return this._runCallbacksIfReady(), this._pendingCount
                        }
                        isStable() {
                            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                        }
                        _runCallbacksIfReady() {
                            if (this.isStable()) ef(() => {
                                for (; 0 !== this._callbacks.length;) {
                                    let n = this._callbacks.pop();
                                    clearTimeout(n.timeoutId), n.doneCb(this._didWork)
                                }
                                this._didWork = !1
                            });
                            else {
                                let n = this.getPendingTasks();
                                this._callbacks = this._callbacks.filter(s => !s.updateCb || !s.updateCb(n) || (clearTimeout(s.timeoutId), !1)), this._didWork = !0
                            }
                        }
                        getPendingTasks() {
                            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n => ({
                                source: n.source,
                                creationLocation: n.creationLocation,
                                data: n.data
                            })) : []
                        }
                        addCallback(n, s, o) {
                            let l = -1;
                            s && s > 0 && (l = setTimeout(() => {
                                this._callbacks = this._callbacks.filter(c => c.timeoutId !== l), n(this._didWork, this.getPendingTasks())
                            }, s)), this._callbacks.push({
                                doneCb: n,
                                timeoutId: l,
                                updateCb: o
                            })
                        }
                        whenStable(n, s, o) {
                            if (o && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
                            this.addCallback(n, s, o), this._runCallbacksIfReady()
                        }
                        getPendingRequestCount() {
                            return this._pendingCount
                        }
                        findProviders(n, s, o) {
                            return []
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)(A(Me))
                    }, t.\u0275prov = W({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })(),
                m2 = (() => {
                    class t {
                        constructor() {
                            this._applications = new Map, sf.addToWindow(this)
                        }
                        registerApplication(n, s) {
                            this._applications.set(n, s)
                        }
                        unregisterApplication(n) {
                            this._applications.delete(n)
                        }
                        unregisterAllApplications() {
                            this._applications.clear()
                        }
                        getTestability(n) {
                            return this._applications.get(n) || null
                        }
                        getAllTestabilities() {
                            return Array.from(this._applications.values())
                        }
                        getAllRootElements() {
                            return Array.from(this._applications.keys())
                        }
                        findTestabilityInTree(n, s = !0) {
                            return sf.findTestabilityInTree(this, n, s)
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275prov = W({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })();
            class z9 {
                addToWindow(e) {}
                findTestabilityInTree(e, n, s) {
                    return null
                }
            }
            let sf = new z9,
                v2 = !0,
                y2 = !1;
            let pn;
            const b2 = new te("AllowMultipleToken");
            class of {
                constructor(e, n) {
                    this.name = e, this.token = n
                }
            }

            function C2(t, e, n = []) {
                const s = `Platform: ${e}`,
                    o = new te(s);
                return (l = []) => {
                    let c = E2();
                    if (!c || c.injector.get(b2, !1))
                        if (t) t(n.concat(l).concat({
                            provide: o,
                            useValue: !0
                        }));
                        else {
                            const u = n.concat(l).concat({
                                provide: o,
                                useValue: !0
                            }, {
                                provide: Co,
                                useValue: "platform"
                            });
                            ! function (t) {
                                if (pn && !pn.destroyed && !pn.injector.get(b2, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                pn = t.get(w2);
                                const e = t.get(u2, null);
                                e && e.forEach(n => n())
                            }(ne.create({
                                providers: u,
                                name: s
                            }))
                        } return function (t) {
                        const e = E2();
                        if (!e) throw new Error("No platform exists!");
                        if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                        return e
                    }(o)
                }
            }

            function E2() {
                return pn && !pn.destroyed ? pn : null
            }
            let w2 = (() => {
                class t {
                    constructor(n) {
                        this._injector = n, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                    }
                    bootstrapModuleFactory(n, s) {
                        const u = function (t, e) {
                                let n;
                                return n = "noop" === t ? new K9 : ("zone.js" === t ? void 0 : t) || new Me({
                                    enableLongStackTrace: (y2 = !0, v2),
                                    shouldCoalesceEventChangeDetection: !!(null == e ? void 0 : e.ngZoneEventCoalescing),
                                    shouldCoalesceRunChangeDetection: !!(null == e ? void 0 : e.ngZoneRunCoalescing)
                                }), n
                            }(s ? s.ngZone : void 0, {
                                ngZoneEventCoalescing: s && s.ngZoneEventCoalescing || !1,
                                ngZoneRunCoalescing: s && s.ngZoneRunCoalescing || !1
                            }),
                            d = [{
                                provide: Me,
                                useValue: u
                            }];
                        return u.run(() => {
                            const f = ne.create({
                                    providers: d,
                                    parent: this.injector,
                                    name: n.moduleType.name
                                }),
                                p = n.create(f),
                                g = p.injector.get(Qi, null);
                            if (!g) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                            return u.runOutsideAngular(() => {
                                    const m = u.onError.subscribe({
                                        next: v => {
                                            g.handleError(v)
                                        }
                                    });
                                    p.onDestroy(() => {
                                        af(this._modules, p), m.unsubscribe()
                                    })
                                }),
                                function (t, e, n) {
                                    try {
                                        const s = n();
                                        return Ml(s) ? s.catch(o => {
                                            throw e.runOutsideAngular(() => t.handleError(o)), o
                                        }) : s
                                    } catch (s) {
                                        throw e.runOutsideAngular(() => t.handleError(s)), s
                                    }
                                }(g, u, () => {
                                    const m = p.injector.get(ws);
                                    return m.runInitializers(), m.donePromise.then(() => (ph(p.injector.get(Si, Nl) || Nl), this._moduleDoBootstrap(p), p))
                                })
                        })
                    }
                    bootstrapModule(n, s = []) {
                        const o = D2({}, s);
                        return function (t, e, n) {
                            const s = new Lh(n);
                            return Promise.resolve(s)
                        }(0, 0, n).then(l => this.bootstrapModuleFactory(l, o))
                    }
                    _moduleDoBootstrap(n) {
                        const s = n.injector.get(Ds);
                        if (n._bootstrapComponents.length > 0) n._bootstrapComponents.forEach(o => s.bootstrap(o));
                        else {
                            if (!n.instance.ngDoBootstrap) throw new Error(`The module ${z(n.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
                            n.instance.ngDoBootstrap(s)
                        }
                        this._modules.push(n)
                    }
                    onDestroy(n) {
                        this._destroyListeners.push(n)
                    }
                    get injector() {
                        return this._injector
                    }
                    destroy() {
                        if (this._destroyed) throw new Error("The platform has already been destroyed!");
                        this._modules.slice().forEach(n => n.destroy()), this._destroyListeners.forEach(n => n()), this._destroyed = !0
                    }
                    get destroyed() {
                        return this._destroyed
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(ne))
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();

            function D2(t, e) {
                return Array.isArray(e) ? e.reduce(D2, t) : Object.assign(Object.assign({}, t), e)
            }
            let Ds = (() => {
                class t {
                    constructor(n, s, o, l, c) {
                        this._zone = n, this._injector = s, this._exceptionHandler = o, this._componentFactoryResolver = l, this._initStatus = c, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                            next: () => {
                                this._zone.run(() => {
                                    this.tick()
                                })
                            }
                        });
                        const u = new me(f => {
                                this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                                    f.next(this._stable), f.complete()
                                })
                            }),
                            d = new me(f => {
                                let p;
                                this._zone.runOutsideAngular(() => {
                                    p = this._zone.onStable.subscribe(() => {
                                        Me.assertNotInAngularZone(), ef(() => {
                                            !this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks && (this._stable = !0, f.next(!0))
                                        })
                                    })
                                });
                                const g = this._zone.onUnstable.subscribe(() => {
                                    Me.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                                        f.next(!1)
                                    }))
                                });
                                return () => {
                                    p.unsubscribe(), g.unsubscribe()
                                }
                            });
                        this.isStable = function (...t) {
                            let e = Number.POSITIVE_INFINITY,
                                n = null,
                                s = t[t.length - 1];
                            return ka(s) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof s && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof me ? t[0] : Gs(e)(bu(t, n))
                        }(u, d.pipe(t => Cu()(function (t, e) {
                            return function (s) {
                                let o;
                                o = "function" == typeof t ? t : function () {
                                    return t
                                };
                                const l = Object.create(s, f3);
                                return l.source = s, l.subjectFactory = o, l
                            }
                        }(y3)(t))))
                    }
                    bootstrap(n, s) {
                        if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                        let o;
                        o = n instanceof Xv ? n : this._componentFactoryResolver.resolveComponentFactory(n), this.componentTypes.push(o.componentType);
                        const l = function (t) {
                                return t.isBoundToModule
                            }(o) ? void 0 : this._injector.get(Rn),
                            u = o.create(ne.NULL, [], s || o.selector, l),
                            d = u.location.nativeElement,
                            f = u.injector.get(rf, null),
                            p = f && u.injector.get(m2);
                        return f && p && p.registerApplication(d, f), u.onDestroy(() => {
                            this.detachView(u.hostView), af(this.components, u), p && p.unregisterApplication(d)
                        }), this._loadComponent(u), u
                    }
                    tick() {
                        if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                        try {
                            this._runningTick = !0;
                            for (let n of this._views) n.detectChanges()
                        } catch (n) {
                            this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n))
                        } finally {
                            this._runningTick = !1
                        }
                    }
                    attachView(n) {
                        const s = n;
                        this._views.push(s), s.attachToAppRef(this)
                    }
                    detachView(n) {
                        const s = n;
                        af(this._views, s), s.detachFromAppRef()
                    }
                    _loadComponent(n) {
                        this.attachView(n.hostView), this.tick(), this.components.push(n), this._injector.get(d2, []).concat(this._bootstrapListeners).forEach(o => o(n))
                    }
                    ngOnDestroy() {
                        this._views.slice().forEach(n => n.destroy()), this._onMicrotaskEmptySubscription.unsubscribe()
                    }
                    get viewCount() {
                        return this._views.length
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(Me), A(ne), A(Qi), A(Di), A(ws))
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();

            function af(t, e) {
                const n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            class Ql {}
            class lS {}
            const cS = {
                factoryPathPrefix: "",
                factoryPathSuffix: ".ngfactory"
            };
            let uS = (() => {
                class t {
                    constructor(n, s) {
                        this._compiler = n, this._config = s || cS
                    }
                    load(n) {
                        return this.loadAndCompile(n)
                    }
                    loadAndCompile(n) {
                        let [s, o] = n.split("#");
                        return void 0 === o && (o = "default"), Ve(255)(s).then(l => l[o]).then(l => I2(l, s, o)).then(l => this._compiler.compileModuleAsync(l))
                    }
                    loadFactory(n) {
                        let [s, o] = n.split("#"), l = "NgFactory";
                        return void 0 === o && (o = "default", l = ""), Ve(255)(this._config.factoryPathPrefix + s + this._config.factoryPathSuffix).then(c => c[o + l]).then(c => I2(c, s, o))
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(ir), A(lS, 8))
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();

            function I2(t, e, n) {
                if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
                return t
            }
            const bS = C2(null, "core", [{
                    provide: Zh,
                    useValue: "unknown"
                }, {
                    provide: w2,
                    deps: [ne]
                }, {
                    provide: m2,
                    deps: []
                }, {
                    provide: Yl,
                    deps: []
                }]),
                TS = [{
                    provide: Ds,
                    useClass: Ds,
                    deps: [Me, ne, Qi, Di, ws]
                }, {
                    provide: ST,
                    deps: [Me],
                    useFactory: function (t) {
                        let e = [];
                        return t.onStable.subscribe(() => {
                                for (; e.length;) e.pop()()
                            }),
                            function (n) {
                                e.push(n)
                            }
                    }
                }, {
                    provide: ws,
                    useClass: ws,
                    deps: [
                        [new dt, qo]
                    ]
                }, {
                    provide: ir,
                    useClass: ir,
                    deps: []
                }, x9, {
                    provide: xo,
                    useFactory: function () {
                        return b8
                    },
                    deps: []
                }, {
                    provide: ms,
                    useFactory: function () {
                        return C8
                    },
                    deps: []
                }, {
                    provide: Si,
                    useFactory: function (t) {
                        return ph(t = t || "undefined" != typeof $localize && $localize.locale || Nl), t
                    },
                    deps: [
                        [new Ur(Si), new dt, new _i]
                    ]
                }, {
                    provide: h2,
                    useValue: "USD"
                }];
            let AS = (() => {
                    class t {
                        constructor(n) {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)(A(Ds))
                    }, t.\u0275mod = hi({
                        type: t
                    }), t.\u0275inj = En({
                        providers: TS
                    }), t
                })(),
                ac = null;

            function Ii() {
                return ac
            }
            const We = new te("DocumentToken");
            let or = (() => {
                class t {
                    historyGo(n) {
                        throw new Error("Not implemented")
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)
                }, t.\u0275prov = W({
                    factory: SA,
                    token: t,
                    providedIn: "platform"
                }), t
            })();

            function SA() {
                return A(Z2)
            }
            const AA = new te("Location Initialized");
            let Z2 = (() => {
                class t extends or {
                    constructor(n) {
                        super(), this._doc = n, this._init()
                    }
                    _init() {
                        this.location = window.location, this._history = window.history
                    }
                    getBaseHrefFromDOM() {
                        return Ii().getBaseHref(this._doc)
                    }
                    onPopState(n) {
                        const s = Ii().getGlobalEventTarget(this._doc, "window");
                        return s.addEventListener("popstate", n, !1), () => s.removeEventListener("popstate", n)
                    }
                    onHashChange(n) {
                        const s = Ii().getGlobalEventTarget(this._doc, "window");
                        return s.addEventListener("hashchange", n, !1), () => s.removeEventListener("hashchange", n)
                    }
                    get href() {
                        return this.location.href
                    }
                    get protocol() {
                        return this.location.protocol
                    }
                    get hostname() {
                        return this.location.hostname
                    }
                    get port() {
                        return this.location.port
                    }
                    get pathname() {
                        return this.location.pathname
                    }
                    get search() {
                        return this.location.search
                    }
                    get hash() {
                        return this.location.hash
                    }
                    set pathname(n) {
                        this.location.pathname = n
                    }
                    pushState(n, s, o) {
                        J2() ? this._history.pushState(n, s, o) : this.location.hash = o
                    }
                    replaceState(n, s, o) {
                        J2() ? this._history.replaceState(n, s, o) : this.location.hash = o
                    }
                    forward() {
                        this._history.forward()
                    }
                    back() {
                        this._history.back()
                    }
                    historyGo(n = 0) {
                        this._history.go(n)
                    }
                    getState() {
                        return this._history.state
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(We))
                }, t.\u0275prov = W({
                    factory: IA,
                    token: t,
                    providedIn: "platform"
                }), t
            })();

            function J2() {
                return !!window.history.pushState
            }

            function IA() {
                return new Z2(A(We))
            }

            function Ef(t, e) {
                if (0 == t.length) return e;
                if (0 == e.length) return t;
                let n = 0;
                return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
            }

            function e_(t) {
                const e = t.match(/#|\?|$/),
                    n = e && e.index || t.length;
                return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
            }

            function ii(t) {
                return t && "?" !== t[0] ? "?" + t : t
            }
            let As = (() => {
                class t {
                    historyGo(n) {
                        throw new Error("Not implemented")
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)
                }, t.\u0275prov = W({
                    factory: MA,
                    token: t,
                    providedIn: "root"
                }), t
            })();

            function MA(t) {
                const e = A(We).location;
                return new t_(A(or), e && e.origin || "")
            }
            const wf = new te("appBaseHref");
            let t_ = (() => {
                    class t extends As {
                        constructor(n, s) {
                            if (super(), this._platformLocation = n, this._removeListenerFns = [], null == s && (s = this._platformLocation.getBaseHrefFromDOM()), null == s) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                            this._baseHref = s
                        }
                        ngOnDestroy() {
                            for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
                        }
                        onPopState(n) {
                            this._removeListenerFns.push(this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n))
                        }
                        getBaseHref() {
                            return this._baseHref
                        }
                        prepareExternalUrl(n) {
                            return Ef(this._baseHref, n)
                        }
                        path(n = !1) {
                            const s = this._platformLocation.pathname + ii(this._platformLocation.search),
                                o = this._platformLocation.hash;
                            return o && n ? `${s}${o}` : s
                        }
                        pushState(n, s, o, l) {
                            const c = this.prepareExternalUrl(o + ii(l));
                            this._platformLocation.pushState(n, s, c)
                        }
                        replaceState(n, s, o, l) {
                            const c = this.prepareExternalUrl(o + ii(l));
                            this._platformLocation.replaceState(n, s, c)
                        }
                        forward() {
                            this._platformLocation.forward()
                        }
                        back() {
                            this._platformLocation.back()
                        }
                        historyGo(n = 0) {
                            var s, o;
                            null === (o = (s = this._platformLocation).historyGo) || void 0 === o || o.call(s, n)
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)(A(or), A(wf, 8))
                    }, t.\u0275prov = W({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })(),
                OA = (() => {
                    class t extends As {
                        constructor(n, s) {
                            super(), this._platformLocation = n, this._baseHref = "", this._removeListenerFns = [], null != s && (this._baseHref = s)
                        }
                        ngOnDestroy() {
                            for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
                        }
                        onPopState(n) {
                            this._removeListenerFns.push(this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n))
                        }
                        getBaseHref() {
                            return this._baseHref
                        }
                        path(n = !1) {
                            let s = this._platformLocation.hash;
                            return null == s && (s = "#"), s.length > 0 ? s.substring(1) : s
                        }
                        prepareExternalUrl(n) {
                            const s = Ef(this._baseHref, n);
                            return s.length > 0 ? "#" + s : s
                        }
                        pushState(n, s, o, l) {
                            let c = this.prepareExternalUrl(o + ii(l));
                            0 == c.length && (c = this._platformLocation.pathname), this._platformLocation.pushState(n, s, c)
                        }
                        replaceState(n, s, o, l) {
                            let c = this.prepareExternalUrl(o + ii(l));
                            0 == c.length && (c = this._platformLocation.pathname), this._platformLocation.replaceState(n, s, c)
                        }
                        forward() {
                            this._platformLocation.forward()
                        }
                        back() {
                            this._platformLocation.back()
                        }
                        historyGo(n = 0) {
                            var s, o;
                            null === (o = (s = this._platformLocation).historyGo) || void 0 === o || o.call(s, n)
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)(A(or), A(wf, 8))
                    }, t.\u0275prov = W({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })(),
                lc = (() => {
                    class t {
                        constructor(n, s) {
                            this._subject = new Dt, this._urlChangeListeners = [], this._platformStrategy = n;
                            const o = this._platformStrategy.getBaseHref();
                            this._platformLocation = s, this._baseHref = e_(n_(o)), this._platformStrategy.onPopState(l => {
                                this._subject.emit({
                                    url: this.path(!0),
                                    pop: !0,
                                    state: l.state,
                                    type: l.type
                                })
                            })
                        }
                        path(n = !1) {
                            return this.normalize(this._platformStrategy.path(n))
                        }
                        getState() {
                            return this._platformLocation.getState()
                        }
                        isCurrentPathEqualTo(n, s = "") {
                            return this.path() == this.normalize(n + ii(s))
                        }
                        normalize(n) {
                            return t.stripTrailingSlash(function (t, e) {
                                return t && e.startsWith(t) ? e.substring(t.length) : e
                            }(this._baseHref, n_(n)))
                        }
                        prepareExternalUrl(n) {
                            return n && "/" !== n[0] && (n = "/" + n), this._platformStrategy.prepareExternalUrl(n)
                        }
                        go(n, s = "", o = null) {
                            this._platformStrategy.pushState(o, "", n, s), this._notifyUrlChangeListeners(this.prepareExternalUrl(n + ii(s)), o)
                        }
                        replaceState(n, s = "", o = null) {
                            this._platformStrategy.replaceState(o, "", n, s), this._notifyUrlChangeListeners(this.prepareExternalUrl(n + ii(s)), o)
                        }
                        forward() {
                            this._platformStrategy.forward()
                        }
                        back() {
                            this._platformStrategy.back()
                        }
                        historyGo(n = 0) {
                            var s, o;
                            null === (o = (s = this._platformStrategy).historyGo) || void 0 === o || o.call(s, n)
                        }
                        onUrlChange(n) {
                            this._urlChangeListeners.push(n), this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(s => {
                                this._notifyUrlChangeListeners(s.url, s.state)
                            }))
                        }
                        _notifyUrlChangeListeners(n = "", s) {
                            this._urlChangeListeners.forEach(o => o(n, s))
                        }
                        subscribe(n, s, o) {
                            return this._subject.subscribe({
                                next: n,
                                error: s,
                                complete: o
                            })
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)(A(As), A(or))
                    }, t.normalizeQueryParams = ii, t.joinWithSlash = Ef, t.stripTrailingSlash = e_, t.\u0275prov = W({
                        factory: NA,
                        token: t,
                        providedIn: "root"
                    }), t
                })();

            function NA() {
                return new lc(A(As), A(or))
            }

            function n_(t) {
                return t.replace(/\/index.html$/, "")
            }
            var Oe = (() => ((Oe = Oe || {})[Oe.Zero = 0] = "Zero", Oe[Oe.One = 1] = "One", Oe[Oe.Two = 2] = "Two", Oe[Oe.Few = 3] = "Few", Oe[Oe.Many = 4] = "Many", Oe[Oe.Other = 5] = "Other", Oe))();
            const BA = function (t) {
                return function (t) {
                    const e = function (t) {
                        return t.toLowerCase().replace(/_/g, "-")
                    }(t);
                    let n = Dv(e);
                    if (n) return n;
                    const s = e.split("-")[0];
                    if (n = Dv(s), n) return n;
                    if ("en" === s) return QD;
                    throw new Error(`Missing locale data for the locale "${t}".`)
                }(t)[M.PluralCase]
            };
            class yc {}
            let pI = (() => {
                class t extends yc {
                    constructor(n) {
                        super(), this.locale = n
                    }
                    getPluralCategory(n, s) {
                        switch (BA(s || this.locale)(n)) {
                            case Oe.Zero:
                                return "zero";
                            case Oe.One:
                                return "one";
                            case Oe.Two:
                                return "two";
                            case Oe.Few:
                                return "few";
                            case Oe.Many:
                                return "many";
                            default:
                                return "other"
                        }
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(Si))
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();
            class yI {
                constructor(e, n, s, o) {
                    this.$implicit = e, this.ngForOf = n, this.index = s, this.count = o
                }
                get first() {
                    return 0 === this.index
                }
                get last() {
                    return this.index === this.count - 1
                }
                get even() {
                    return this.index % 2 == 0
                }
                get odd() {
                    return !this.even
                }
            }
            let d_ = (() => {
                class t {
                    constructor(n, s, o) {
                        this._viewContainer = n, this._template = s, this._differs = o, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
                    }
                    set ngForOf(n) {
                        this._ngForOf = n, this._ngForOfDirty = !0
                    }
                    set ngForTrackBy(n) {
                        this._trackByFn = n
                    }
                    get ngForTrackBy() {
                        return this._trackByFn
                    }
                    set ngForTemplate(n) {
                        n && (this._template = n)
                    }
                    ngDoCheck() {
                        if (this._ngForOfDirty) {
                            this._ngForOfDirty = !1;
                            const n = this._ngForOf;
                            if (!this._differ && n) try {
                                this._differ = this._differs.find(n).create(this.ngForTrackBy)
                            } catch (s) {
                                throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(t){return t.name||typeof t}(n)}'. NgFor only supports binding to Iterables such as Arrays.`)
                            }
                        }
                        if (this._differ) {
                            const n = this._differ.diff(this._ngForOf);
                            n && this._applyChanges(n)
                        }
                    }
                    _applyChanges(n) {
                        const s = [];
                        n.forEachOperation((o, l, c) => {
                            if (null == o.previousIndex) {
                                const u = this._viewContainer.createEmbeddedView(this._template, new yI(null, this._ngForOf, -1, -1), null === c ? void 0 : c),
                                    d = new h_(o, u);
                                s.push(d)
                            } else if (null == c) this._viewContainer.remove(null === l ? void 0 : l);
                            else if (null !== l) {
                                const u = this._viewContainer.get(l);
                                this._viewContainer.move(u, c);
                                const d = new h_(o, u);
                                s.push(d)
                            }
                        });
                        for (let o = 0; o < s.length; o++) this._perViewChange(s[o].view, s[o].record);
                        for (let o = 0, l = this._viewContainer.length; o < l; o++) {
                            const c = this._viewContainer.get(o);
                            c.context.index = o, c.context.count = l, c.context.ngForOf = this._ngForOf
                        }
                        n.forEachIdentityChange(o => {
                            this._viewContainer.get(o.currentIndex).context.$implicit = o.item
                        })
                    }
                    _perViewChange(n, s) {
                        n.context.$implicit = s.item
                    }
                    static ngTemplateContextGuard(n, s) {
                        return !0
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(N(dn), N(ti), N(xo))
                }, t.\u0275dir = ze({
                    type: t,
                    selectors: [
                        ["", "ngFor", "", "ngForOf", ""]
                    ],
                    inputs: {
                        ngForOf: "ngForOf",
                        ngForTrackBy: "ngForTrackBy",
                        ngForTemplate: "ngForTemplate"
                    }
                }), t
            })();
            class h_ {
                constructor(e, n) {
                    this.record = e, this.view = n
                }
            }
            let f_ = (() => {
                class t {
                    constructor(n, s) {
                        this._viewContainer = n, this._context = new bI, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = s
                    }
                    set ngIf(n) {
                        this._context.$implicit = this._context.ngIf = n, this._updateView()
                    }
                    set ngIfThen(n) {
                        p_("ngIfThen", n), this._thenTemplateRef = n, this._thenViewRef = null, this._updateView()
                    }
                    set ngIfElse(n) {
                        p_("ngIfElse", n), this._elseTemplateRef = n, this._elseViewRef = null, this._updateView()
                    }
                    _updateView() {
                        this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                    }
                    static ngTemplateContextGuard(n, s) {
                        return !0
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(N(dn), N(ti))
                }, t.\u0275dir = ze({
                    type: t,
                    selectors: [
                        ["", "ngIf", ""]
                    ],
                    inputs: {
                        ngIf: "ngIf",
                        ngIfThen: "ngIfThen",
                        ngIfElse: "ngIfElse"
                    }
                }), t
            })();
            class bI {
                constructor() {
                    this.$implicit = null, this.ngIf = null
                }
            }

            function p_(t, e) {
                if (e && !e.createEmbeddedView) throw new Error(`${t} must be a TemplateRef, but received '${z(e)}'.`)
            }
            class SI {
                createSubscription(e, n) {
                    return e.subscribe({
                        next: n,
                        error: s => {
                            throw s
                        }
                    })
                }
                dispose(e) {
                    e.unsubscribe()
                }
                onDestroy(e) {
                    e.unsubscribe()
                }
            }
            class AI {
                createSubscription(e, n) {
                    return e.then(n, s => {
                        throw s
                    })
                }
                dispose(e) {}
                onDestroy(e) {}
            }
            const II = new AI,
                MI = new SI;
            let m_ = (() => {
                    class t {
                        constructor(n) {
                            this._ref = n, this._latestValue = null, this._subscription = null, this._obj = null, this._strategy = null
                        }
                        ngOnDestroy() {
                            this._subscription && this._dispose()
                        }
                        transform(n) {
                            return this._obj ? n !== this._obj ? (this._dispose(), this.transform(n)) : this._latestValue : (n && this._subscribe(n), this._latestValue)
                        }
                        _subscribe(n) {
                            this._obj = n, this._strategy = this._selectStrategy(n), this._subscription = this._strategy.createSubscription(n, s => this._updateLatestValue(n, s))
                        }
                        _selectStrategy(n) {
                            if (Ml(n)) return II;
                            if (N0(n)) return MI;
                            throw function (t, e) {
                                return Error(`InvalidPipeArgument: '${e}' for pipe '${z(t)}'`)
                            }(t, n)
                        }
                        _dispose() {
                            this._strategy.dispose(this._subscription), this._latestValue = null, this._subscription = null, this._obj = null
                        }
                        _updateLatestValue(n, s) {
                            n === this._obj && (this._latestValue = s, this._ref.markForCheck())
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)(N($l, 16))
                    }, t.\u0275pipe = ct({
                        name: "async",
                        type: t,
                        pure: !1
                    }), t
                })(),
                y_ = (() => {
                    class t {}
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275mod = hi({
                        type: t
                    }), t.\u0275inj = En({
                        providers: [{
                            provide: yc,
                            useClass: pI
                        }]
                    }), t
                })();
            let b_ = (() => {
                class t {}
                return t.\u0275prov = W({
                    token: t,
                    providedIn: "root",
                    factory: () => new GI(A(We), window)
                }), t
            })();
            class GI {
                constructor(e, n) {
                    this.document = e, this.window = n, this.offset = () => [0, 0]
                }
                setOffset(e) {
                    this.offset = Array.isArray(e) ? () => e : e
                }
                getScrollPosition() {
                    return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0]
                }
                scrollToPosition(e) {
                    this.supportsScrolling() && this.window.scrollTo(e[0], e[1])
                }
                scrollToAnchor(e) {
                    if (!this.supportsScrolling()) return;
                    const n = function (t, e) {
                        const n = t.getElementById(e) || t.getElementsByName(e)[0];
                        if (n) return n;
                        if ("function" == typeof t.createTreeWalker && t.body && (t.body.createShadowRoot || t.body.attachShadow)) {
                            const s = t.createTreeWalker(t.body, NodeFilter.SHOW_ELEMENT);
                            let o = s.currentNode;
                            for (; o;) {
                                const l = o.shadowRoot;
                                if (l) {
                                    const c = l.getElementById(e) || l.querySelector(`[name="${e}"]`);
                                    if (c) return c
                                }
                                o = s.nextNode()
                            }
                        }
                        return null
                    }(this.document, e);
                    n && (this.scrollToElement(n), this.attemptFocus(n))
                }
                setHistoryScrollRestoration(e) {
                    if (this.supportScrollRestoration()) {
                        const n = this.window.history;
                        n && n.scrollRestoration && (n.scrollRestoration = e)
                    }
                }
                scrollToElement(e) {
                    const n = e.getBoundingClientRect(),
                        s = n.left + this.window.pageXOffset,
                        o = n.top + this.window.pageYOffset,
                        l = this.offset();
                    this.window.scrollTo(s - l[0], o - l[1])
                }
                attemptFocus(e) {
                    return e.focus(), this.document.activeElement === e
                }
                supportScrollRestoration() {
                    try {
                        if (!this.supportsScrolling()) return !1;
                        const e = C_(this.window.history) || C_(Object.getPrototypeOf(this.window.history));
                        return !(!e || !e.writable && !e.set)
                    } catch (e) {
                        return !1
                    }
                }
                supportsScrolling() {
                    try {
                        return !!this.window && !!this.window.scrollTo && "pageXOffset" in this.window
                    } catch (e) {
                        return !1
                    }
                }
            }

            function C_(t) {
                return Object.getOwnPropertyDescriptor(t, "scrollRestoration")
            }
            class Lf extends class extends class {} {
                constructor() {
                    super(...arguments), this.supportsDOMEvents = !0
                }
            } {
                static makeCurrent() {
                    ! function (t) {
                        ac || (ac = t)
                    }(new Lf)
                }
                onAndCancel(e, n, s) {
                    return e.addEventListener(n, s, !1), () => {
                        e.removeEventListener(n, s, !1)
                    }
                }
                dispatchEvent(e, n) {
                    e.dispatchEvent(n)
                }
                remove(e) {
                    e.parentNode && e.parentNode.removeChild(e)
                }
                createElement(e, n) {
                    return (n = n || this.getDefaultDocument()).createElement(e)
                }
                createHtmlDocument() {
                    return document.implementation.createHTMLDocument("fakeTitle")
                }
                getDefaultDocument() {
                    return document
                }
                isElementNode(e) {
                    return e.nodeType === Node.ELEMENT_NODE
                }
                isShadowRoot(e) {
                    return e instanceof DocumentFragment
                }
                getGlobalEventTarget(e, n) {
                    return "window" === n ? window : "document" === n ? e : "body" === n ? e.body : null
                }
                getBaseHref(e) {
                    const n = (Jo = Jo || document.querySelector("base"), Jo ? Jo.getAttribute("href") : null);
                    return null == n ? null : function (t) {
                        _c = _c || document.createElement("a"), _c.setAttribute("href", t);
                        const e = _c.pathname;
                        return "/" === e.charAt(0) ? e : `/${e}`
                    }(n)
                }
                resetBaseElement() {
                    Jo = null
                }
                getUserAgent() {
                    return window.navigator.userAgent
                }
                getCookie(e) {
                    return function (t, e) {
                        e = encodeURIComponent(e);
                        for (const n of t.split(";")) {
                            const s = n.indexOf("="),
                                [o, l] = -1 == s ? [n, ""] : [n.slice(0, s), n.slice(s + 1)];
                            if (o.trim() === e) return decodeURIComponent(l)
                        }
                        return null
                    }(document.cookie, e)
                }
            }
            let _c, Jo = null;
            const E_ = new te("TRANSITION_ID"),
                tM = [{
                    provide: qo,
                    useFactory: function (t, e, n) {
                        return () => {
                            n.get(ws).donePromise.then(() => {
                                const s = Ii(),
                                    o = e.querySelectorAll(`style[ng-transition="${t}"]`);
                                for (let l = 0; l < o.length; l++) s.remove(o[l])
                            })
                        }
                    },
                    deps: [E_, We, ne],
                    multi: !0
                }];
            class Ff {
                static init() {
                    ! function (t) {
                        sf = t
                    }(new Ff)
                }
                addToWindow(e) {
                    re.getAngularTestability = (s, o = !0) => {
                        const l = e.findTestabilityInTree(s, o);
                        if (null == l) throw new Error("Could not find testability for element.");
                        return l
                    }, re.getAllAngularTestabilities = () => e.getAllTestabilities(), re.getAllAngularRootElements = () => e.getAllRootElements(), re.frameworkStabilizers || (re.frameworkStabilizers = []), re.frameworkStabilizers.push(s => {
                        const o = re.getAllAngularTestabilities();
                        let l = o.length,
                            c = !1;
                        const u = function (d) {
                            c = c || d, l--, 0 == l && s(c)
                        };
                        o.forEach(function (d) {
                            d.whenStable(u)
                        })
                    })
                }
                findTestabilityInTree(e, n, s) {
                    if (null == n) return null;
                    const o = e.getTestability(n);
                    return null != o ? o : s ? Ii().isShadowRoot(n) ? this.findTestabilityInTree(e, n.host, !0) : this.findTestabilityInTree(e, n.parentElement, !0) : null
                }
            }
            let nM = (() => {
                class t {
                    build() {
                        return new XMLHttpRequest
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();
            const ea = new te("EventManagerPlugins");
            let Cc = (() => {
                class t {
                    constructor(n, s) {
                        this._zone = s, this._eventNameToPlugin = new Map, n.forEach(o => o.manager = this), this._plugins = n.slice().reverse()
                    }
                    addEventListener(n, s, o) {
                        return this._findPluginFor(s).addEventListener(n, s, o)
                    }
                    addGlobalEventListener(n, s, o) {
                        return this._findPluginFor(s).addGlobalEventListener(n, s, o)
                    }
                    getZone() {
                        return this._zone
                    }
                    _findPluginFor(n) {
                        const s = this._eventNameToPlugin.get(n);
                        if (s) return s;
                        const o = this._plugins;
                        for (let l = 0; l < o.length; l++) {
                            const c = o[l];
                            if (c.supports(n)) return this._eventNameToPlugin.set(n, c), c
                        }
                        throw new Error(`No event manager plugin found for event ${n}`)
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(ea), A(Me))
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();
            class Vf {
                constructor(e) {
                    this._doc = e
                }
                addGlobalEventListener(e, n, s) {
                    const o = Ii().getGlobalEventTarget(this._doc, e);
                    if (!o) throw new Error(`Unsupported event target ${o} for event ${n}`);
                    return this.addEventListener(o, n, s)
                }
            }
            let D_ = (() => {
                    class t {
                        constructor() {
                            this._stylesSet = new Set
                        }
                        addStyles(n) {
                            const s = new Set;
                            n.forEach(o => {
                                this._stylesSet.has(o) || (this._stylesSet.add(o), s.add(o))
                            }), this.onStylesAdded(s)
                        }
                        onStylesAdded(n) {}
                        getAllStyles() {
                            return Array.from(this._stylesSet)
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275prov = W({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })(),
                ta = (() => {
                    class t extends D_ {
                        constructor(n) {
                            super(), this._doc = n, this._hostNodes = new Map, this._hostNodes.set(n.head, [])
                        }
                        _addStylesToHost(n, s, o) {
                            n.forEach(l => {
                                const c = this._doc.createElement("style");
                                c.textContent = l, o.push(s.appendChild(c))
                            })
                        }
                        addHost(n) {
                            const s = [];
                            this._addStylesToHost(this._stylesSet, n, s), this._hostNodes.set(n, s)
                        }
                        removeHost(n) {
                            const s = this._hostNodes.get(n);
                            s && s.forEach(T_), this._hostNodes.delete(n)
                        }
                        onStylesAdded(n) {
                            this._hostNodes.forEach((s, o) => {
                                this._addStylesToHost(n, o, s)
                            })
                        }
                        ngOnDestroy() {
                            this._hostNodes.forEach(n => n.forEach(T_))
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)(A(We))
                    }, t.\u0275prov = W({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })();

            function T_(t) {
                Ii().remove(t)
            }
            const Bf = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: "http://www.w3.org/1999/xhtml",
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                $f = /%COMP%/g;

            function Ec(t, e, n) {
                for (let s = 0; s < e.length; s++) {
                    let o = e[s];
                    Array.isArray(o) ? Ec(t, o, n) : (o = o.replace($f, t), n.push(o))
                }
                return n
            }

            function I_(t) {
                return e => {
                    if ("__ngUnwrap__" === e) return t;
                    !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
                }
            }
            let Hf = (() => {
                class t {
                    constructor(n, s, o) {
                        this.eventManager = n, this.sharedStylesHost = s, this.appId = o, this.rendererByCompId = new Map, this.defaultRenderer = new jf(n)
                    }
                    createRenderer(n, s) {
                        if (!n || !s) return this.defaultRenderer;
                        switch (s.encapsulation) {
                            case Pe.Emulated: {
                                let o = this.rendererByCompId.get(s.id);
                                return o || (o = new vM(this.eventManager, this.sharedStylesHost, s, this.appId), this.rendererByCompId.set(s.id, o)), o.applyToHost(n), o
                            }
                            case 1:
                            case Pe.ShadowDom:
                                return new yM(this.eventManager, this.sharedStylesHost, n, s);
                            default:
                                if (!this.rendererByCompId.has(s.id)) {
                                    const o = Ec(s.id, s.styles, []);
                                    this.sharedStylesHost.addStyles(o), this.rendererByCompId.set(s.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }
                    begin() {}
                    end() {}
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(Cc), A(ta), A(Ko))
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();
            class jf {
                constructor(e) {
                    this.eventManager = e, this.data = Object.create(null)
                }
                destroy() {}
                createElement(e, n) {
                    return n ? document.createElementNS(Bf[n] || n, e) : document.createElement(e)
                }
                createComment(e) {
                    return document.createComment(e)
                }
                createText(e) {
                    return document.createTextNode(e)
                }
                appendChild(e, n) {
                    e.appendChild(n)
                }
                insertBefore(e, n, s) {
                    e && e.insertBefore(n, s)
                }
                removeChild(e, n) {
                    e && e.removeChild(n)
                }
                selectRootElement(e, n) {
                    let s = "string" == typeof e ? document.querySelector(e) : e;
                    if (!s) throw new Error(`The selector "${e}" did not match any elements`);
                    return n || (s.textContent = ""), s
                }
                parentNode(e) {
                    return e.parentNode
                }
                nextSibling(e) {
                    return e.nextSibling
                }
                setAttribute(e, n, s, o) {
                    if (o) {
                        n = o + ":" + n;
                        const l = Bf[o];
                        l ? e.setAttributeNS(l, n, s) : e.setAttribute(n, s)
                    } else e.setAttribute(n, s)
                }
                removeAttribute(e, n, s) {
                    if (s) {
                        const o = Bf[s];
                        o ? e.removeAttributeNS(o, n) : e.removeAttribute(`${s}:${n}`)
                    } else e.removeAttribute(n)
                }
                addClass(e, n) {
                    e.classList.add(n)
                }
                removeClass(e, n) {
                    e.classList.remove(n)
                }
                setStyle(e, n, s, o) {
                    o & (Et.DashCase | Et.Important) ? e.style.setProperty(n, s, o & Et.Important ? "important" : "") : e.style[n] = s
                }
                removeStyle(e, n, s) {
                    s & Et.DashCase ? e.style.removeProperty(n) : e.style[n] = ""
                }
                setProperty(e, n, s) {
                    e[n] = s
                }
                setValue(e, n) {
                    e.nodeValue = n
                }
                listen(e, n, s) {
                    return "string" == typeof e ? this.eventManager.addGlobalEventListener(e, n, I_(s)) : this.eventManager.addEventListener(e, n, I_(s))
                }
            }
            class vM extends jf {
                constructor(e, n, s, o) {
                    super(e), this.component = s;
                    const l = Ec(o + "-" + s.id, s.styles, []);
                    n.addStyles(l), this.contentAttr = function (t) {
                        return "_ngcontent-%COMP%".replace($f, t)
                    }(o + "-" + s.id), this.hostAttr = function (t) {
                        return "_nghost-%COMP%".replace($f, t)
                    }(o + "-" + s.id)
                }
                applyToHost(e) {
                    super.setAttribute(e, this.hostAttr, "")
                }
                createElement(e, n) {
                    const s = super.createElement(e, n);
                    return super.setAttribute(s, this.contentAttr, ""), s
                }
            }
            class yM extends jf {
                constructor(e, n, s, o) {
                    super(e), this.sharedStylesHost = n, this.hostEl = s, this.shadowRoot = s.attachShadow({
                        mode: "open"
                    }), this.sharedStylesHost.addHost(this.shadowRoot);
                    const l = Ec(o.id, o.styles, []);
                    for (let c = 0; c < l.length; c++) {
                        const u = document.createElement("style");
                        u.textContent = l[c], this.shadowRoot.appendChild(u)
                    }
                }
                nodeOrShadowRoot(e) {
                    return e === this.hostEl ? this.shadowRoot : e
                }
                destroy() {
                    this.sharedStylesHost.removeHost(this.shadowRoot)
                }
                appendChild(e, n) {
                    return super.appendChild(this.nodeOrShadowRoot(e), n)
                }
                insertBefore(e, n, s) {
                    return super.insertBefore(this.nodeOrShadowRoot(e), n, s)
                }
                removeChild(e, n) {
                    return super.removeChild(this.nodeOrShadowRoot(e), n)
                }
                parentNode(e) {
                    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))
                }
            }
            let _M = (() => {
                class t extends Vf {
                    constructor(n) {
                        super(n)
                    }
                    supports(n) {
                        return !0
                    }
                    addEventListener(n, s, o) {
                        return n.addEventListener(s, o, !1), () => this.removeEventListener(n, s, o)
                    }
                    removeEventListener(n, s, o) {
                        return n.removeEventListener(s, o)
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(We))
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();
            const N_ = ["alt", "control", "meta", "shift"],
                SM = {
                    "\b": "Backspace",
                    "\t": "Tab",
                    "\x7f": "Delete",
                    "\x1b": "Escape",
                    Del: "Delete",
                    Esc: "Escape",
                    Left: "ArrowLeft",
                    Right: "ArrowRight",
                    Up: "ArrowUp",
                    Down: "ArrowDown",
                    Menu: "ContextMenu",
                    Scroll: "ScrollLock",
                    Win: "OS"
                },
                x_ = {
                    A: "1",
                    B: "2",
                    C: "3",
                    D: "4",
                    E: "5",
                    F: "6",
                    G: "7",
                    H: "8",
                    I: "9",
                    J: "*",
                    K: "+",
                    M: "-",
                    N: ".",
                    O: "/",
                    "`": "0",
                    "\x90": "NumLock"
                },
                AM = {
                    alt: t => t.altKey,
                    control: t => t.ctrlKey,
                    meta: t => t.metaKey,
                    shift: t => t.shiftKey
                };
            let IM = (() => {
                class t extends Vf {
                    constructor(n) {
                        super(n)
                    }
                    supports(n) {
                        return null != t.parseEventName(n)
                    }
                    addEventListener(n, s, o) {
                        const l = t.parseEventName(s),
                            c = t.eventCallback(l.fullKey, o, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular(() => Ii().onAndCancel(n, l.domEventName, c))
                    }
                    static parseEventName(n) {
                        const s = n.toLowerCase().split("."),
                            o = s.shift();
                        if (0 === s.length || "keydown" !== o && "keyup" !== o) return null;
                        const l = t._normalizeKey(s.pop());
                        let c = "";
                        if (N_.forEach(d => {
                                const f = s.indexOf(d);
                                f > -1 && (s.splice(f, 1), c += d + ".")
                            }), c += l, 0 != s.length || 0 === l.length) return null;
                        const u = {};
                        return u.domEventName = o, u.fullKey = c, u
                    }
                    static getEventFullKey(n) {
                        let s = "",
                            o = function (t) {
                                let e = t.key;
                                if (null == e) {
                                    if (e = t.keyIdentifier, null == e) return "Unidentified";
                                    e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && x_.hasOwnProperty(e) && (e = x_[e]))
                                }
                                return SM[e] || e
                            }(n);
                        return o = o.toLowerCase(), " " === o ? o = "space" : "." === o && (o = "dot"), N_.forEach(l => {
                            l != o && AM[l](n) && (s += l + ".")
                        }), s += o, s
                    }
                    static eventCallback(n, s, o) {
                        return l => {
                            t.getEventFullKey(l) === n && o.runGuarded(() => s(l))
                        }
                    }
                    static _normalizeKey(n) {
                        switch (n) {
                            case "esc":
                                return "escape";
                            default:
                                return n
                        }
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(We))
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();
            const LM = C2(bS, "browser", [{
                    provide: Zh,
                    useValue: "browser"
                }, {
                    provide: u2,
                    useValue: function () {
                        Lf.makeCurrent(), Ff.init()
                    },
                    multi: !0
                }, {
                    provide: We,
                    useFactory: function () {
                        return function (t) {
                            ku = t
                        }(document), document
                    },
                    deps: []
                }]),
                FM = [
                    [], {
                        provide: Co,
                        useValue: "root"
                    }, {
                        provide: Qi,
                        useFactory: function () {
                            return new Qi
                        },
                        deps: []
                    }, {
                        provide: ea,
                        useClass: _M,
                        multi: !0,
                        deps: [We, Me, Zh]
                    }, {
                        provide: ea,
                        useClass: IM,
                        multi: !0,
                        deps: [We]
                    },
                    [], {
                        provide: Hf,
                        useClass: Hf,
                        deps: [Cc, ta, Ko]
                    }, {
                        provide: gs,
                        useExisting: Hf
                    }, {
                        provide: D_,
                        useExisting: ta
                    }, {
                        provide: ta,
                        useClass: ta,
                        deps: [We]
                    }, {
                        provide: rf,
                        useClass: rf,
                        deps: [Me]
                    }, {
                        provide: Cc,
                        useClass: Cc,
                        deps: [ea, Me]
                    }, {
                        provide: class {},
                        useClass: nM,
                        deps: []
                    },
                    []
                ];
            let VM = (() => {
                class t {
                    constructor(n) {
                        if (n) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                    }
                    static withServerTransition(n) {
                        return {
                            ngModule: t,
                            providers: [{
                                provide: Ko,
                                useValue: n.appId
                            }, {
                                provide: E_,
                                useExisting: Ko
                            }, tM]
                        }
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(t, 12))
                }, t.\u0275mod = hi({
                    type: t
                }), t.\u0275inj = En({
                    providers: FM,
                    imports: [y_, AS]
                }), t
            })();
            "undefined" != typeof window && window;
            var Tt = "top",
                Kt = "bottom",
                zt = "right",
                St = "left",
                wc = "auto",
                Is = [Tt, Kt, zt, St],
                ar = "start",
                Dc = "end",
                R_ = "clippingParents",
                zf = "viewport",
                Ms = "popper",
                k_ = "reference",
                Gf = Is.reduce(function (t, e) {
                    return t.concat([e + "-" + ar, e + "-" + Dc])
                }, []),
                Yf = [].concat(Is, [wc]).reduce(function (t, e) {
                    return t.concat([e, e + "-" + ar, e + "-" + Dc])
                }, []),
                L_ = "beforeRead",
                F_ = "read",
                V_ = "afterRead",
                B_ = "beforeMain",
                $_ = "main",
                H_ = "afterMain",
                j_ = "beforeWrite",
                U_ = "write",
                W_ = "afterWrite",
                q_ = [L_, F_, V_, B_, $_, H_, j_, U_, W_];

            function kn(t) {
                return t ? (t.nodeName || "").toLowerCase() : null
            }

            function _n(t) {
                if (null == t) return window;
                if ("[object Window]" !== t.toString()) {
                    var e = t.ownerDocument;
                    return e && e.defaultView || window
                }
                return t
            }

            function na(t) {
                return t instanceof _n(t).Element || t instanceof Element
            }

            function At(t) {
                return t instanceof _n(t).HTMLElement || t instanceof HTMLElement
            }

            function K_(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof _n(t).ShadowRoot || t instanceof ShadowRoot)
            }
            const Xf = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function (t) {
                    var e = t.state;
                    Object.keys(e.elements).forEach(function (n) {
                        var s = e.styles[n] || {},
                            o = e.attributes[n] || {},
                            l = e.elements[n];
                        !At(l) || !kn(l) || (Object.assign(l.style, s), Object.keys(o).forEach(function (c) {
                            var u = o[c];
                            !1 === u ? l.removeAttribute(c) : l.setAttribute(c, !0 === u ? "" : u)
                        }))
                    })
                },
                effect: function (t) {
                    var e = t.state,
                        n = {
                            popper: {
                                position: e.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                        function () {
                            Object.keys(e.elements).forEach(function (s) {
                                var o = e.elements[s],
                                    l = e.attributes[s] || {},
                                    u = Object.keys(e.styles.hasOwnProperty(s) ? e.styles[s] : n[s]).reduce(function (d, f) {
                                        return d[f] = "", d
                                    }, {});
                                !At(o) || !kn(o) || (Object.assign(o.style, u), Object.keys(l).forEach(function (d) {
                                    o.removeAttribute(d)
                                }))
                            })
                        }
                },
                requires: ["computeStyles"]
            };

            function Ln(t) {
                return t.split("-")[0]
            }
            var Oi = Math.round;

            function Os(t, e) {
                void 0 === e && (e = !1);
                var n = t.getBoundingClientRect(),
                    s = 1,
                    o = 1;
                return At(t) && e && (s = n.width / t.offsetWidth || 1, o = n.height / t.offsetHeight || 1), {
                    width: Oi(n.width / s),
                    height: Oi(n.height / o),
                    top: Oi(n.top / o),
                    right: Oi(n.right / s),
                    bottom: Oi(n.bottom / o),
                    left: Oi(n.left / s),
                    x: Oi(n.left / s),
                    y: Oi(n.top / o)
                }
            }

            function Qf(t) {
                var e = Os(t),
                    n = t.offsetWidth,
                    s = t.offsetHeight;
                return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - s) <= 1 && (s = e.height), {
                    x: t.offsetLeft,
                    y: t.offsetTop,
                    width: n,
                    height: s
                }
            }

            function z_(t, e) {
                var n = e.getRootNode && e.getRootNode();
                if (t.contains(e)) return !0;
                if (n && K_(n)) {
                    var s = e;
                    do {
                        if (s && t.isSameNode(s)) return !0;
                        s = s.parentNode || s.host
                    } while (s)
                }
                return !1
            }

            function si(t) {
                return _n(t).getComputedStyle(t)
            }

            function GM(t) {
                return ["table", "td", "th"].indexOf(kn(t)) >= 0
            }

            function Ni(t) {
                return ((na(t) ? t.ownerDocument : t.document) || window.document).documentElement
            }

            function Tc(t) {
                return "html" === kn(t) ? t : t.assignedSlot || t.parentNode || (K_(t) ? t.host : null) || Ni(t)
            }

            function G_(t) {
                return At(t) && "fixed" !== si(t).position ? t.offsetParent : null
            }

            function ia(t) {
                for (var e = _n(t), n = G_(t); n && GM(n) && "static" === si(n).position;) n = G_(n);
                return n && ("html" === kn(n) || "body" === kn(n) && "static" === si(n).position) ? e : n || function (t) {
                    var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                    if (-1 !== navigator.userAgent.indexOf("Trident") && At(t) && "fixed" === si(t).position) return null;
                    for (var o = Tc(t); At(o) && ["html", "body"].indexOf(kn(o)) < 0;) {
                        var l = si(o);
                        if ("none" !== l.transform || "none" !== l.perspective || "paint" === l.contain || -1 !== ["transform", "perspective"].indexOf(l.willChange) || e && "filter" === l.willChange || e && l.filter && "none" !== l.filter) return o;
                        o = o.parentNode
                    }
                    return null
                }(t) || e
            }

            function Zf(t) {
                return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
            }
            var xi = Math.max,
                ra = Math.min,
                Sc = Math.round;

            function Ac(t, e, n) {
                return xi(t, ra(e, n))
            }

            function X_(t) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, t)
            }

            function Q_(t, e) {
                return e.reduce(function (n, s) {
                    return n[s] = t, n
                }, {})
            }
            const Z_ = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function (t) {
                    var e, n = t.state,
                        s = t.name,
                        o = t.options,
                        l = n.elements.arrow,
                        c = n.modifiersData.popperOffsets,
                        u = Ln(n.placement),
                        d = Zf(u),
                        p = [St, zt].indexOf(u) >= 0 ? "height" : "width";
                    if (l && c) {
                        var g = function (e, n) {
                                return X_("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, n.rects, {
                                    placement: n.placement
                                })) : e) ? e : Q_(e, Is))
                            }(o.padding, n),
                            m = Qf(l),
                            v = "y" === d ? Tt : St,
                            y = "y" === d ? Kt : zt,
                            b = n.rects.reference[p] + n.rects.reference[d] - c[d] - n.rects.popper[p],
                            _ = c[d] - n.rects.reference[d],
                            E = ia(l),
                            C = E ? "y" === d ? E.clientHeight || 0 : E.clientWidth || 0 : 0,
                            V = C / 2 - m[p] / 2 + (b / 2 - _ / 2),
                            ee = Ac(g[v], V, C - m[p] - g[y]);
                        n.modifiersData[s] = ((e = {})[d] = ee, e.centerOffset = ee - V, e)
                    }
                },
                effect: function (t) {
                    var e = t.state,
                        s = t.options.element,
                        o = void 0 === s ? "[data-popper-arrow]" : s;
                    null != o && ("string" == typeof o && !(o = e.elements.popper.querySelector(o)) || !z_(e.elements.popper, o) || (e.elements.arrow = o))
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };
            var JM = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function J_(t) {
                var e, n = t.popper,
                    s = t.popperRect,
                    o = t.placement,
                    l = t.offsets,
                    c = t.position,
                    u = t.gpuAcceleration,
                    d = t.adaptive,
                    f = t.roundOffsets,
                    p = !0 === f ? function (t) {
                        var n = t.y,
                            o = window.devicePixelRatio || 1;
                        return {
                            x: Sc(Sc(t.x * o) / o) || 0,
                            y: Sc(Sc(n * o) / o) || 0
                        }
                    }(l) : "function" == typeof f ? f(l) : l,
                    g = p.x,
                    m = void 0 === g ? 0 : g,
                    v = p.y,
                    y = void 0 === v ? 0 : v,
                    b = l.hasOwnProperty("x"),
                    _ = l.hasOwnProperty("y"),
                    E = St,
                    C = Tt,
                    S = window;
                if (d) {
                    var T = ia(n),
                        O = "clientHeight",
                        V = "clientWidth";
                    T === _n(n) && "static" !== si(T = Ni(n)).position && (O = "scrollHeight", V = "scrollWidth"), T = T, o === Tt && (C = Kt, y -= T[O] - s.height, y *= u ? 1 : -1), o === St && (E = zt, m -= T[V] - s.width, m *= u ? 1 : -1)
                }
                var ae, ee = Object.assign({
                    position: c
                }, d && JM);
                return Object.assign({}, ee, u ? ((ae = {})[C] = _ ? "0" : "", ae[E] = b ? "0" : "", ae.transform = (S.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", ae) : ((e = {})[C] = _ ? y + "px" : "", e[E] = b ? m + "px" : "", e.transform = "", e))
            }
            const Jf = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function (t) {
                    var e = t.state,
                        n = t.options,
                        s = n.gpuAcceleration,
                        o = void 0 === s || s,
                        l = n.adaptive,
                        c = void 0 === l || l,
                        u = n.roundOffsets,
                        d = void 0 === u || u,
                        p = {
                            placement: Ln(e.placement),
                            popper: e.elements.popper,
                            popperRect: e.rects.popper,
                            gpuAcceleration: o
                        };
                    null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, J_(Object.assign({}, p, {
                        offsets: e.modifiersData.popperOffsets,
                        position: e.options.strategy,
                        adaptive: c,
                        roundOffsets: d
                    })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, J_(Object.assign({}, p, {
                        offsets: e.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: d
                    })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                        "data-popper-placement": e.placement
                    })
                },
                data: {}
            };
            var Ic = {
                passive: !0
            };
            const ep = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function () {},
                effect: function (t) {
                    var e = t.state,
                        n = t.instance,
                        s = t.options,
                        o = s.scroll,
                        l = void 0 === o || o,
                        c = s.resize,
                        u = void 0 === c || c,
                        d = _n(e.elements.popper),
                        f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                    return l && f.forEach(function (p) {
                            p.addEventListener("scroll", n.update, Ic)
                        }), u && d.addEventListener("resize", n.update, Ic),
                        function () {
                            l && f.forEach(function (p) {
                                p.removeEventListener("scroll", n.update, Ic)
                            }), u && d.removeEventListener("resize", n.update, Ic)
                        }
                },
                data: {}
            };
            var iO = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function Mc(t) {
                return t.replace(/left|right|bottom|top/g, function (e) {
                    return iO[e]
                })
            }
            var rO = {
                start: "end",
                end: "start"
            };

            function eb(t) {
                return t.replace(/start|end/g, function (e) {
                    return rO[e]
                })
            }

            function tp(t) {
                var e = _n(t);
                return {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function np(t) {
                return Os(Ni(t)).left + tp(t).scrollLeft
            }

            function ip(t) {
                var e = si(t);
                return /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
            }

            function tb(t) {
                return ["html", "body", "#document"].indexOf(kn(t)) >= 0 ? t.ownerDocument.body : At(t) && ip(t) ? t : tb(Tc(t))
            }

            function sa(t, e) {
                var n;
                void 0 === e && (e = []);
                var s = tb(t),
                    o = s === (null == (n = t.ownerDocument) ? void 0 : n.body),
                    l = _n(s),
                    c = o ? [l].concat(l.visualViewport || [], ip(s) ? s : []) : s,
                    u = e.concat(c);
                return o ? u : u.concat(sa(Tc(c)))
            }

            function rp(t) {
                return Object.assign({}, t, {
                    left: t.x,
                    top: t.y,
                    right: t.x + t.width,
                    bottom: t.y + t.height
                })
            }

            function nb(t, e) {
                return e === zf ? rp(function (t) {
                    var e = _n(t),
                        n = Ni(t),
                        s = e.visualViewport,
                        o = n.clientWidth,
                        l = n.clientHeight,
                        c = 0,
                        u = 0;
                    return s && (o = s.width, l = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (c = s.offsetLeft, u = s.offsetTop)), {
                        width: o,
                        height: l,
                        x: c + np(t),
                        y: u
                    }
                }(t)) : At(e) ? function (t) {
                    var e = Os(t);
                    return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
                }(e) : rp(function (t) {
                    var e, n = Ni(t),
                        s = tp(t),
                        o = null == (e = t.ownerDocument) ? void 0 : e.body,
                        l = xi(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        c = xi(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        u = -s.scrollLeft + np(t),
                        d = -s.scrollTop;
                    return "rtl" === si(o || n).direction && (u += xi(n.clientWidth, o ? o.clientWidth : 0) - l), {
                        width: l,
                        height: c,
                        x: u,
                        y: d
                    }
                }(Ni(t)))
            }

            function oa(t) {
                return t.split("-")[1]
            }

            function ib(t) {
                var d, e = t.reference,
                    n = t.element,
                    s = t.placement,
                    o = s ? Ln(s) : null,
                    l = s ? oa(s) : null,
                    c = e.x + e.width / 2 - n.width / 2,
                    u = e.y + e.height / 2 - n.height / 2;
                switch (o) {
                    case Tt:
                        d = {
                            x: c,
                            y: e.y - n.height
                        };
                        break;
                    case Kt:
                        d = {
                            x: c,
                            y: e.y + e.height
                        };
                        break;
                    case zt:
                        d = {
                            x: e.x + e.width,
                            y: u
                        };
                        break;
                    case St:
                        d = {
                            x: e.x - n.width,
                            y: u
                        };
                        break;
                    default:
                        d = {
                            x: e.x,
                            y: e.y
                        }
                }
                var f = o ? Zf(o) : null;
                if (null != f) {
                    var p = "y" === f ? "height" : "width";
                    switch (l) {
                        case ar:
                            d[f] = d[f] - (e[p] / 2 - n[p] / 2);
                            break;
                        case Dc:
                            d[f] = d[f] + (e[p] / 2 - n[p] / 2)
                    }
                }
                return d
            }

            function Ns(t, e) {
                void 0 === e && (e = {});
                var s = e.placement,
                    o = void 0 === s ? t.placement : s,
                    l = e.boundary,
                    c = void 0 === l ? R_ : l,
                    u = e.rootBoundary,
                    d = void 0 === u ? zf : u,
                    f = e.elementContext,
                    p = void 0 === f ? Ms : f,
                    g = e.altBoundary,
                    m = void 0 !== g && g,
                    v = e.padding,
                    y = void 0 === v ? 0 : v,
                    b = X_("number" != typeof y ? y : Q_(y, Is)),
                    E = t.elements.reference,
                    C = t.rects.popper,
                    S = t.elements[m ? p === Ms ? k_ : Ms : p],
                    T = function (t, e, n) {
                        var s = "clippingParents" === e ? function (t) {
                                var e = sa(Tc(t)),
                                    s = ["absolute", "fixed"].indexOf(si(t).position) >= 0 && At(t) ? ia(t) : t;
                                return na(s) ? e.filter(function (o) {
                                    return na(o) && z_(o, s) && "body" !== kn(o)
                                }) : []
                            }(t) : [].concat(e),
                            o = [].concat(s, [n]),
                            c = o.reduce(function (u, d) {
                                var f = nb(t, d);
                                return u.top = xi(f.top, u.top), u.right = ra(f.right, u.right), u.bottom = ra(f.bottom, u.bottom), u.left = xi(f.left, u.left), u
                            }, nb(t, o[0]));
                        return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c
                    }(na(S) ? S : S.contextElement || Ni(t.elements.popper), c, d),
                    O = Os(E),
                    V = ib({
                        reference: O,
                        element: C,
                        strategy: "absolute",
                        placement: o
                    }),
                    ee = rp(Object.assign({}, C, V)),
                    ae = p === Ms ? ee : O,
                    _e = {
                        top: T.top - ae.top + b.top,
                        bottom: ae.bottom - T.bottom + b.bottom,
                        left: T.left - ae.left + b.left,
                        right: ae.right - T.right + b.right
                    },
                    Ae = t.modifiersData.offset;
                if (p === Ms && Ae) {
                    var xe = Ae[o];
                    Object.keys(_e).forEach(function (Nt) {
                        var je = [zt, Kt].indexOf(Nt) >= 0 ? 1 : -1,
                            Cn = [Tt, Kt].indexOf(Nt) >= 0 ? "y" : "x";
                        _e[Nt] += xe[Cn] * je
                    })
                }
                return _e
            }
            const rb = {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function (t) {
                    var e = t.state,
                        n = t.options,
                        s = t.name;
                    if (!e.modifiersData[s]._skip) {
                        for (var o = n.mainAxis, l = void 0 === o || o, c = n.altAxis, u = void 0 === c || c, d = n.fallbackPlacements, f = n.padding, p = n.boundary, g = n.rootBoundary, m = n.altBoundary, v = n.flipVariations, y = void 0 === v || v, b = n.allowedAutoPlacements, _ = e.options.placement, E = Ln(_), S = d || (E !== _ && y ? function (t) {
                                if (Ln(t) === wc) return [];
                                var e = Mc(t);
                                return [eb(t), e, eb(e)]
                            }(_) : [Mc(_)]), T = [_].concat(S).reduce(function (Dr, Un) {
                                return Dr.concat(Ln(Un) === wc ? function (t, e) {
                                    void 0 === e && (e = {});
                                    var o = e.boundary,
                                        l = e.rootBoundary,
                                        c = e.padding,
                                        u = e.flipVariations,
                                        d = e.allowedAutoPlacements,
                                        f = void 0 === d ? Yf : d,
                                        p = oa(e.placement),
                                        g = p ? u ? Gf : Gf.filter(function (y) {
                                            return oa(y) === p
                                        }) : Is,
                                        m = g.filter(function (y) {
                                            return f.indexOf(y) >= 0
                                        });
                                    0 === m.length && (m = g);
                                    var v = m.reduce(function (y, b) {
                                        return y[b] = Ns(t, {
                                            placement: b,
                                            boundary: o,
                                            rootBoundary: l,
                                            padding: c
                                        })[Ln(b)], y
                                    }, {});
                                    return Object.keys(v).sort(function (y, b) {
                                        return v[y] - v[b]
                                    })
                                }(e, {
                                    placement: Un,
                                    boundary: p,
                                    rootBoundary: g,
                                    padding: f,
                                    flipVariations: y,
                                    allowedAutoPlacements: b
                                }) : Un)
                            }, []), O = e.rects.reference, V = e.rects.popper, ee = new Map, ae = !0, _e = T[0], Ae = 0; Ae < T.length; Ae++) {
                            var xe = T[Ae],
                                Nt = Ln(xe),
                                je = oa(xe) === ar,
                                Cn = [Tt, Kt].indexOf(Nt) >= 0,
                                ci = Cn ? "width" : "height",
                                jn = Ns(e, {
                                    placement: xe,
                                    boundary: p,
                                    rootBoundary: g,
                                    altBoundary: m,
                                    padding: f
                                }),
                                wr = Cn ? je ? zt : St : je ? Kt : Tt;
                            O[ci] > V[ci] && (wr = Mc(wr));
                            var Qp = Mc(wr),
                                Ws = [];
                            if (l && Ws.push(jn[Nt] <= 0), u && Ws.push(jn[wr] <= 0, jn[Qp] <= 0), Ws.every(function (Dr) {
                                    return Dr
                                })) {
                                _e = xe, ae = !1;
                                break
                            }
                            ee.set(xe, Ws)
                        }
                        if (ae)
                            for (var Zp = function (Un) {
                                    var du = T.find(function (Jp) {
                                        var Ks = ee.get(Jp);
                                        if (Ks) return Ks.slice(0, Un).every(function (e1) {
                                            return e1
                                        })
                                    });
                                    if (du) return _e = du, "break"
                                }, qs = y ? 3 : 1; qs > 0 && "break" !== Zp(qs); qs--);
                        e.placement !== _e && (e.modifiersData[s]._skip = !0, e.placement = _e, e.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: {
                    _skip: !1
                }
            };

            function sb(t, e, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: t.top - e.height - n.y,
                    right: t.right - e.width + n.x,
                    bottom: t.bottom - e.height + n.y,
                    left: t.left - e.width - n.x
                }
            }

            function ob(t) {
                return [Tt, zt, Kt, St].some(function (e) {
                    return t[e] >= 0
                })
            }
            const ab = {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function (t) {
                        var e = t.state,
                            n = t.name,
                            s = e.rects.reference,
                            o = e.rects.popper,
                            l = e.modifiersData.preventOverflow,
                            c = Ns(e, {
                                elementContext: "reference"
                            }),
                            u = Ns(e, {
                                altBoundary: !0
                            }),
                            d = sb(c, s),
                            f = sb(u, o, l),
                            p = ob(d),
                            g = ob(f);
                        e.modifiersData[n] = {
                            referenceClippingOffsets: d,
                            popperEscapeOffsets: f,
                            isReferenceHidden: p,
                            hasPopperEscaped: g
                        }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                            "data-popper-reference-hidden": p,
                            "data-popper-escaped": g
                        })
                    }
                },
                lb = {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function (t) {
                        var e = t.state,
                            s = t.name,
                            o = t.options.offset,
                            l = void 0 === o ? [0, 0] : o,
                            c = Yf.reduce(function (p, g) {
                                return p[g] = function (t, e, n) {
                                    var s = Ln(t),
                                        o = [St, Tt].indexOf(s) >= 0 ? -1 : 1,
                                        l = "function" == typeof n ? n(Object.assign({}, e, {
                                            placement: t
                                        })) : n,
                                        c = l[0],
                                        u = l[1];
                                    return c = c || 0, u = (u || 0) * o, [St, zt].indexOf(s) >= 0 ? {
                                        x: u,
                                        y: c
                                    } : {
                                        x: c,
                                        y: u
                                    }
                                }(g, e.rects, l), p
                            }, {}),
                            u = c[e.placement],
                            f = u.y;
                        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += u.x, e.modifiersData.popperOffsets.y += f), e.modifiersData[s] = c
                    }
                },
                sp = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function (t) {
                        var e = t.state;
                        e.modifiersData[t.name] = ib({
                            reference: e.rects.reference,
                            element: e.rects.popper,
                            strategy: "absolute",
                            placement: e.placement
                        })
                    },
                    data: {}
                },
                cb = {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function (t) {
                        var e = t.state,
                            n = t.options,
                            s = t.name,
                            o = n.mainAxis,
                            l = void 0 === o || o,
                            c = n.altAxis,
                            u = void 0 !== c && c,
                            m = n.tether,
                            v = void 0 === m || m,
                            y = n.tetherOffset,
                            b = void 0 === y ? 0 : y,
                            _ = Ns(e, {
                                boundary: n.boundary,
                                rootBoundary: n.rootBoundary,
                                padding: n.padding,
                                altBoundary: n.altBoundary
                            }),
                            E = Ln(e.placement),
                            C = oa(e.placement),
                            S = !C,
                            T = Zf(E),
                            O = function (t) {
                                return "x" === t ? "y" : "x"
                            }(T),
                            V = e.modifiersData.popperOffsets,
                            ee = e.rects.reference,
                            ae = e.rects.popper,
                            _e = "function" == typeof b ? b(Object.assign({}, e.rects, {
                                placement: e.placement
                            })) : b,
                            Ae = {
                                x: 0,
                                y: 0
                            };
                        if (V) {
                            if (l || u) {
                                var xe = "y" === T ? Tt : St,
                                    Nt = "y" === T ? Kt : zt,
                                    je = "y" === T ? "height" : "width",
                                    Cn = V[T],
                                    ci = V[T] + _[xe],
                                    jn = V[T] - _[Nt],
                                    wr = v ? -ae[je] / 2 : 0,
                                    Qp = C === ar ? ee[je] : ae[je],
                                    Ws = C === ar ? -ae[je] : -ee[je],
                                    cu = e.elements.arrow,
                                    Zp = v && cu ? Qf(cu) : {
                                        width: 0,
                                        height: 0
                                    },
                                    qs = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0
                                    },
                                    uu = qs[xe],
                                    Dr = qs[Nt],
                                    Un = Ac(0, ee[je], Zp[je]),
                                    du = S ? ee[je] / 2 - wr - Un - uu - _e : Qp - Un - uu - _e,
                                    Jp = S ? -ee[je] / 2 + wr + Un + Dr + _e : Ws + Un + Dr + _e,
                                    Ks = e.elements.arrow && ia(e.elements.arrow),
                                    V4 = e.modifiersData.offset ? e.modifiersData.offset[e.placement][T] : 0,
                                    B4 = V[T] + du - V4 - (Ks ? "y" === T ? Ks.clientTop || 0 : Ks.clientLeft || 0 : 0),
                                    $4 = V[T] + Jp - V4;
                                if (l) {
                                    var H4 = Ac(v ? ra(ci, B4) : ci, Cn, v ? xi(jn, $4) : jn);
                                    V[T] = H4, Ae[T] = H4 - Cn
                                }
                                if (u) {
                                    var hu = V[O],
                                        j4 = hu + _["x" === T ? Tt : St],
                                        U4 = hu - _["x" === T ? Kt : zt],
                                        W4 = Ac(v ? ra(j4, B4) : j4, hu, v ? xi(U4, $4) : U4);
                                    V[O] = W4, Ae[O] = W4 - hu
                                }
                            }
                            e.modifiersData[s] = Ae
                        }
                    },
                    requiresIfExists: ["offset"]
                };

            function EO(t, e, n) {
                void 0 === n && (n = !1);
                var s = At(e),
                    o = At(e) && function (t) {
                        var e = t.getBoundingClientRect();
                        return 1 !== (e.width / t.offsetWidth || 1) || 1 !== (e.height / t.offsetHeight || 1)
                    }(e),
                    l = Ni(e),
                    c = Os(t, o),
                    u = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    d = {
                        x: 0,
                        y: 0
                    };
                return (s || !s && !n) && (("body" !== kn(e) || ip(l)) && (u = function (t) {
                    return t !== _n(t) && At(t) ? function (t) {
                        return {
                            scrollLeft: t.scrollLeft,
                            scrollTop: t.scrollTop
                        }
                    }(t) : tp(t)
                }(e)), At(e) ? ((d = Os(e, !0)).x += e.clientLeft, d.y += e.clientTop) : l && (d.x = np(l))), {
                    x: c.left + u.scrollLeft - d.x,
                    y: c.top + u.scrollTop - d.y,
                    width: c.width,
                    height: c.height
                }
            }

            function wO(t) {
                var e = new Map,
                    n = new Set,
                    s = [];

                function o(l) {
                    n.add(l.name), [].concat(l.requires || [], l.requiresIfExists || []).forEach(function (u) {
                        if (!n.has(u)) {
                            var d = e.get(u);
                            d && o(d)
                        }
                    }), s.push(l)
                }
                return t.forEach(function (l) {
                    e.set(l.name, l)
                }), t.forEach(function (l) {
                    n.has(l.name) || o(l)
                }), s
            }

            function TO(t) {
                var e;
                return function () {
                    return e || (e = new Promise(function (n) {
                        Promise.resolve().then(function () {
                            e = void 0, n(t())
                        })
                    })), e
                }
            }
            var ub = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function db() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return !e.some(function (s) {
                    return !(s && "function" == typeof s.getBoundingClientRect)
                })
            }

            function Oc(t) {
                void 0 === t && (t = {});
                var n = t.defaultModifiers,
                    s = void 0 === n ? [] : n,
                    o = t.defaultOptions,
                    l = void 0 === o ? ub : o;
                return function (u, d, f) {
                    void 0 === f && (f = l);
                    var p = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, ub, l),
                            modifiersData: {},
                            elements: {
                                reference: u,
                                popper: d
                            },
                            attributes: {},
                            styles: {}
                        },
                        g = [],
                        m = !1,
                        v = {
                            state: p,
                            setOptions: function (E) {
                                b(), p.options = Object.assign({}, l, p.options, E), p.scrollParents = {
                                    reference: na(u) ? sa(u) : u.contextElement ? sa(u.contextElement) : [],
                                    popper: sa(d)
                                };
                                var C = function (t) {
                                    var e = wO(t);
                                    return q_.reduce(function (n, s) {
                                        return n.concat(e.filter(function (o) {
                                            return o.phase === s
                                        }))
                                    }, [])
                                }(function (t) {
                                    var e = t.reduce(function (n, s) {
                                        var o = n[s.name];
                                        return n[s.name] = o ? Object.assign({}, o, s, {
                                            options: Object.assign({}, o.options, s.options),
                                            data: Object.assign({}, o.data, s.data)
                                        }) : s, n
                                    }, {});
                                    return Object.keys(e).map(function (n) {
                                        return e[n]
                                    })
                                }([].concat(s, p.options.modifiers)));
                                return p.orderedModifiers = C.filter(function (Ae) {
                                    return Ae.enabled
                                }), p.orderedModifiers.forEach(function (_) {
                                    var C = _.options,
                                        T = _.effect;
                                    if ("function" == typeof T) {
                                        var O = T({
                                            state: p,
                                            name: _.name,
                                            instance: v,
                                            options: void 0 === C ? {} : C
                                        });
                                        g.push(O || function () {})
                                    }
                                }), v.update()
                            },
                            forceUpdate: function () {
                                if (!m) {
                                    var E = p.elements,
                                        C = E.reference,
                                        S = E.popper;
                                    if (db(C, S)) {
                                        p.rects = {
                                            reference: EO(C, ia(S), "fixed" === p.options.strategy),
                                            popper: Qf(S)
                                        }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function (xe) {
                                            return p.modifiersData[xe.name] = Object.assign({}, xe.data)
                                        });
                                        for (var O = 0; O < p.orderedModifiers.length; O++)
                                            if (!0 !== p.reset) {
                                                var V = p.orderedModifiers[O],
                                                    ee = V.fn,
                                                    ae = V.options;
                                                "function" == typeof ee && (p = ee({
                                                    state: p,
                                                    options: void 0 === ae ? {} : ae,
                                                    name: V.name,
                                                    instance: v
                                                }) || p)
                                            } else p.reset = !1, O = -1
                                    }
                                }
                            },
                            update: TO(function () {
                                return new Promise(function (_) {
                                    v.forceUpdate(), _(p)
                                })
                            }),
                            destroy: function () {
                                b(), m = !0
                            }
                        };
                    if (!db(u, d)) return v;

                    function b() {
                        g.forEach(function (_) {
                            return _()
                        }), g = []
                    }
                    return v.setOptions(f).then(function (_) {
                        !m && f.onFirstUpdate && f.onFirstUpdate(_)
                    }), v
                }
            }
            var AO = Oc(),
                op = Oc({
                    defaultModifiers: [ep, sp, Jf, Xf, lb, rb, cb, Z_, ab]
                }),
                OO = Oc({
                    defaultModifiers: [ep, sp, Jf, Xf]
                });
            const ap = "transitionend",
                hb = t => {
                    let e = t.getAttribute("data-bs-target");
                    if (!e || "#" === e) {
                        let n = t.getAttribute("href");
                        if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                        n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), e = n && "#" !== n ? n.trim() : null
                    }
                    return e
                },
                lp = t => {
                    const e = hb(t);
                    return e && document.querySelector(e) ? e : null
                },
                Pi = t => {
                    const e = hb(t);
                    return e ? document.querySelector(e) : null
                },
                fb = t => {
                    t.dispatchEvent(new Event(ap))
                },
                lr = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
                Ri = t => lr(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
                Fn = (t, e, n) => {
                    Object.keys(n).forEach(s => {
                        const o = n[s],
                            l = e[s],
                            c = l && lr(l) ? "element" : (t => null == t ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase())(l);
                        if (!new RegExp(o).test(c)) throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${c}" but expected type "${o}".`)
                    })
                },
                aa = t => !(!lr(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                cr = t => !(t && t.nodeType === Node.ELEMENT_NODE && !t.classList.contains("disabled")) || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
                pb = t => {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" == typeof t.getRootNode) {
                        const e = t.getRootNode();
                        return e instanceof ShadowRoot ? e : null
                    }
                    return t instanceof ShadowRoot ? t : t.parentNode ? pb(t.parentNode) : null
                },
                Nc = () => {},
                gb = () => {
                    const {
                        jQuery: t
                    } = window;
                    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
                },
                cp = [],
                pt = () => "rtl" === document.documentElement.dir,
                Gt = t => {
                    (t => {
                        "loading" === document.readyState ? (cp.length || document.addEventListener("DOMContentLoaded", () => {
                            cp.forEach(e => e())
                        }), cp.push(t)) : t()
                    })(() => {
                        const e = gb();
                        if (e) {
                            const n = t.NAME,
                                s = e.fn[n];
                            e.fn[n] = t.jQueryInterface, e.fn[n].Constructor = t, e.fn[n].noConflict = () => (e.fn[n] = s, t.jQueryInterface)
                        }
                    })
                },
                ur = t => {
                    "function" == typeof t && t()
                },
                mb = (t, e, n = !0) => {
                    if (!n) return void ur(t);
                    const o = (t => {
                        if (!t) return 0;
                        let {
                            transitionDuration: e,
                            transitionDelay: n
                        } = window.getComputedStyle(t);
                        const s = Number.parseFloat(e),
                            o = Number.parseFloat(n);
                        return s || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
                    })(e) + 5;
                    let l = !1;
                    const c = ({
                        target: u
                    }) => {
                        u === e && (l = !0, e.removeEventListener(ap, c), ur(t))
                    };
                    e.addEventListener(ap, c), setTimeout(() => {
                        l || fb(e)
                    }, o)
                },
                vb = (t, e, n, s) => {
                    let o = t.indexOf(e);
                    if (-1 === o) return t[!n && s ? t.length - 1 : 0];
                    const l = t.length;
                    return o += n ? 1 : -1, s && (o = (o + l) % l), t[Math.max(0, Math.min(o, l - 1))]
                },
                FO = /[^.]*(?=\..*)\.|.*/,
                VO = /\..*/,
                BO = /::\d+$/,
                up = {};
            let yb = 1;
            const $O = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                },
                HO = /^(mouseenter|mouseleave)/i,
                _b = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

            function bb(t, e) {
                return e && `${e}::${yb++}` || t.uidEvent || yb++
            }

            function Cb(t) {
                const e = bb(t);
                return t.uidEvent = e, up[e] = up[e] || {}, up[e]
            }

            function Eb(t, e, n = null) {
                const s = Object.keys(t);
                for (let o = 0, l = s.length; o < l; o++) {
                    const c = t[s[o]];
                    if (c.originalHandler === e && c.delegationSelector === n) return c
                }
                return null
            }

            function wb(t, e, n) {
                const s = "string" == typeof e,
                    o = s ? n : e;
                let l = Tb(t);
                return _b.has(l) || (l = t), [s, o, l]
            }

            function Db(t, e, n, s, o) {
                if ("string" != typeof e || !t) return;
                if (n || (n = s, s = null), HO.test(e)) {
                    const v = y => function (b) {
                        if (!b.relatedTarget || b.relatedTarget !== b.delegateTarget && !b.delegateTarget.contains(b.relatedTarget)) return y.call(this, b)
                    };
                    s ? s = v(s) : n = v(n)
                }
                const [l, c, u] = wb(e, n, s), d = Cb(t), f = d[u] || (d[u] = {}), p = Eb(f, c, l ? n : null);
                if (p) return void(p.oneOff = p.oneOff && o);
                const g = bb(c, e.replace(FO, "")),
                    m = l ? function (t, e, n) {
                        return function s(o) {
                            const l = t.querySelectorAll(e);
                            for (let {
                                    target: c
                                } = o; c && c !== this; c = c.parentNode)
                                for (let u = l.length; u--;)
                                    if (l[u] === c) return o.delegateTarget = c, s.oneOff && D.off(t, o.type, e, n), n.apply(c, [o]);
                            return null
                        }
                    }(t, n, s) : function (t, e) {
                        return function n(s) {
                            return s.delegateTarget = t, n.oneOff && D.off(t, s.type, e), e.apply(t, [s])
                        }
                    }(t, n);
                m.delegationSelector = l ? n : null, m.originalHandler = c, m.oneOff = o, m.uidEvent = g, f[g] = m, t.addEventListener(u, m, l)
            }

            function dp(t, e, n, s, o) {
                const l = Eb(e[n], s, o);
                !l || (t.removeEventListener(n, l, Boolean(o)), delete e[n][l.uidEvent])
            }

            function Tb(t) {
                return t = t.replace(VO, ""), $O[t] || t
            }
            const D = {
                    on(t, e, n, s) {
                        Db(t, e, n, s, !1)
                    },
                    one(t, e, n, s) {
                        Db(t, e, n, s, !0)
                    },
                    off(t, e, n, s) {
                        if ("string" != typeof e || !t) return;
                        const [o, l, c] = wb(e, n, s), u = c !== e, d = Cb(t), f = e.startsWith(".");
                        if (void 0 !== l) {
                            if (!d || !d[c]) return;
                            return void dp(t, d, c, l, o ? n : null)
                        }
                        f && Object.keys(d).forEach(g => {
                            ! function (t, e, n, s) {
                                const o = e[n] || {};
                                Object.keys(o).forEach(l => {
                                    if (l.includes(s)) {
                                        const c = o[l];
                                        dp(t, e, n, c.originalHandler, c.delegationSelector)
                                    }
                                })
                            }(t, d, g, e.slice(1))
                        });
                        const p = d[c] || {};
                        Object.keys(p).forEach(g => {
                            const m = g.replace(BO, "");
                            if (!u || e.includes(m)) {
                                const v = p[g];
                                dp(t, d, c, v.originalHandler, v.delegationSelector)
                            }
                        })
                    },
                    trigger(t, e, n) {
                        if ("string" != typeof e || !t) return null;
                        const s = gb(),
                            o = Tb(e),
                            l = e !== o,
                            c = _b.has(o);
                        let u, d = !0,
                            f = !0,
                            p = !1,
                            g = null;
                        return l && s && (u = s.Event(e, n), s(t).trigger(u), d = !u.isPropagationStopped(), f = !u.isImmediatePropagationStopped(), p = u.isDefaultPrevented()), c ? (g = document.createEvent("HTMLEvents"), g.initEvent(o, d, !0)) : g = new CustomEvent(e, {
                            bubbles: d,
                            cancelable: !0
                        }), void 0 !== n && Object.keys(n).forEach(m => {
                            Object.defineProperty(g, m, {
                                get: () => n[m]
                            })
                        }), p && g.preventDefault(), f && t.dispatchEvent(g), g.defaultPrevented && void 0 !== u && u.preventDefault(), g
                    }
                },
                ki = new Map;
            var la = {
                set(t, e, n) {
                    ki.has(t) || ki.set(t, new Map);
                    const s = ki.get(t);
                    s.has(e) || 0 === s.size ? s.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
                },
                get: (t, e) => ki.has(t) && ki.get(t).get(e) || null,
                remove(t, e) {
                    if (!ki.has(t)) return;
                    const n = ki.get(t);
                    n.delete(e), 0 === n.size && ki.delete(t)
                }
            };
            class bn {
                constructor(e) {
                    (e = Ri(e)) && (this._element = e, la.set(this._element, this.constructor.DATA_KEY, this))
                }
                dispose() {
                    la.remove(this._element, this.constructor.DATA_KEY), D.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(e => {
                        this[e] = null
                    })
                }
                _queueCallback(e, n, s = !0) {
                    mb(e, n, s)
                }
                static getInstance(e) {
                    return la.get(Ri(e), this.DATA_KEY)
                }
                static getOrCreateInstance(e, n = {}) {
                    return this.getInstance(e) || new this(e, "object" == typeof n ? n : null)
                }
                static get VERSION() {
                    return "5.1.0"
                }
                static get NAME() {
                    throw new Error('You have to implement the static method "NAME", for each component!')
                }
                static get DATA_KEY() {
                    return `bs.${this.NAME}`
                }
                static get EVENT_KEY() {
                    return `.${this.DATA_KEY}`
                }
            }
            const xc = (t, e = "hide") => {
                    const s = t.NAME;
                    D.on(document, `click.dismiss${t.EVENT_KEY}`, `[data-bs-dismiss="${s}"]`, function (o) {
                        if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), cr(this)) return;
                        const l = Pi(this) || this.closest(`.${s}`);
                        t.getOrCreateInstance(l)[e]()
                    })
                },
                Sb = ".bs.alert",
                zO = `close${Sb}`,
                GO = `closed${Sb}`;
            class Pc extends bn {
                static get NAME() {
                    return "alert"
                }
                close() {
                    if (D.trigger(this._element, zO).defaultPrevented) return;
                    this._element.classList.remove("show");
                    const n = this._element.classList.contains("fade");
                    this._queueCallback(() => this._destroyElement(), this._element, n)
                }
                _destroyElement() {
                    this._element.remove(), D.trigger(this._element, GO), this.dispose()
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const n = Pc.getOrCreateInstance(this);
                        if ("string" == typeof e) {
                            if (void 0 === n[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                            n[e](this)
                        }
                    })
                }
            }
            xc(Pc, "close"), Gt(Pc);
            const Ab = '[data-bs-toggle="button"]';
            class Rc extends bn {
                static get NAME() {
                    return "button"
                }
                toggle() {
                    this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const n = Rc.getOrCreateInstance(this);
                        "toggle" === e && n[e]()
                    })
                }
            }

            function Ib(t) {
                return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
            }

            function hp(t) {
                return t.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`)
            }
            D.on(document, "click.bs.button.data-api", Ab, t => {
                t.preventDefault();
                const e = t.target.closest(Ab);
                Rc.getOrCreateInstance(e).toggle()
            }), Gt(Rc);
            const qe = {
                    setDataAttribute(t, e, n) {
                        t.setAttribute(`data-bs-${hp(e)}`, n)
                    },
                    removeDataAttribute(t, e) {
                        t.removeAttribute(`data-bs-${hp(e)}`)
                    },
                    getDataAttributes(t) {
                        if (!t) return {};
                        const e = {};
                        return Object.keys(t.dataset).filter(n => n.startsWith("bs")).forEach(n => {
                            let s = n.replace(/^bs/, "");
                            s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = Ib(t.dataset[n])
                        }), e
                    },
                    getDataAttribute: (t, e) => Ib(t.getAttribute(`data-bs-${hp(e)}`)),
                    offset(t) {
                        const e = t.getBoundingClientRect();
                        return {
                            top: e.top + window.pageYOffset,
                            left: e.left + window.pageXOffset
                        }
                    },
                    position: t => ({
                        top: t.offsetTop,
                        left: t.offsetLeft
                    })
                },
                H = {
                    find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
                    findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
                    children: (t, e) => [].concat(...t.children).filter(n => n.matches(e)),
                    parents(t, e) {
                        const n = [];
                        let s = t.parentNode;
                        for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;) s.matches(e) && n.push(s), s = s.parentNode;
                        return n
                    },
                    prev(t, e) {
                        let n = t.previousElementSibling;
                        for (; n;) {
                            if (n.matches(e)) return [n];
                            n = n.previousElementSibling
                        }
                        return []
                    },
                    next(t, e) {
                        let n = t.nextElementSibling;
                        for (; n;) {
                            if (n.matches(e)) return [n];
                            n = n.nextElementSibling
                        }
                        return []
                    },
                    focusableChildren(t) {
                        const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(n => `${n}:not([tabindex^="-"])`).join(", ");
                        return this.find(e, t).filter(n => !cr(n) && aa(n))
                    }
                },
                Mb = "carousel",
                It = ".bs.carousel",
                Ob = ".data-api",
                Nb = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0,
                    touch: !0
                },
                aN = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean",
                    touch: "boolean"
                },
                dr = "next",
                hr = "prev",
                fr = "left",
                ca = "right",
                lN = {
                    ArrowLeft: ca,
                    ArrowRight: fr
                },
                cN = `slide${It}`,
                xb = `slid${It}`,
                uN = `keydown${It}`,
                dN = `mouseenter${It}`,
                hN = `mouseleave${It}`,
                fN = `touchstart${It}`,
                pN = `touchmove${It}`,
                gN = `touchend${It}`,
                mN = `pointerdown${It}`,
                vN = `pointerup${It}`,
                yN = `dragstart${It}`,
                _N = `load${It}${Ob}`,
                bN = `click${It}${Ob}`,
                pr = "active",
                kc = ".active.carousel-item";
            class oi extends bn {
                constructor(e, n) {
                    super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(n), this._indicatorsElement = H.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
                }
                static get Default() {
                    return Nb
                }
                static get NAME() {
                    return Mb
                }
                next() {
                    this._slide(dr)
                }
                nextWhenVisible() {
                    !document.hidden && aa(this._element) && this.next()
                }
                prev() {
                    this._slide(hr)
                }
                pause(e) {
                    e || (this._isPaused = !0), H.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (fb(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }
                cycle(e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }
                to(e) {
                    this._activeElement = H.findOne(kc, this._element);
                    const n = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0)) {
                        if (!this._isSliding) return n === e ? (this.pause(), void this.cycle()) : void this._slide(e > n ? dr : hr, this._items[e]);
                        D.one(this._element, xb, () => this.to(e))
                    }
                }
                _getConfig(e) {
                    return e = G(G(G({}, Nb), qe.getDataAttributes(this._element)), "object" == typeof e ? e : {}), Fn(Mb, e, aN), e
                }
                _handleSwipe() {
                    const e = Math.abs(this.touchDeltaX);
                    if (e <= 40) return;
                    const n = e / this.touchDeltaX;
                    this.touchDeltaX = 0, n && this._slide(n > 0 ? ca : fr)
                }
                _addEventListeners() {
                    this._config.keyboard && D.on(this._element, uN, e => this._keydown(e)), "hover" === this._config.pause && (D.on(this._element, dN, e => this.pause(e)), D.on(this._element, hN, e => this.cycle(e))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
                }
                _addTouchEventListeners() {
                    const e = o => {
                            !this._pointerEvent || "pen" !== o.pointerType && "touch" !== o.pointerType ? this._pointerEvent || (this.touchStartX = o.touches[0].clientX) : this.touchStartX = o.clientX
                        },
                        n = o => {
                            this.touchDeltaX = o.touches && o.touches.length > 1 ? 0 : o.touches[0].clientX - this.touchStartX
                        },
                        s = o => {
                            this._pointerEvent && ("pen" === o.pointerType || "touch" === o.pointerType) && (this.touchDeltaX = o.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(l => this.cycle(l), 500 + this._config.interval))
                        };
                    H.find(".carousel-item img", this._element).forEach(o => {
                        D.on(o, yN, l => l.preventDefault())
                    }), this._pointerEvent ? (D.on(this._element, mN, o => e(o)), D.on(this._element, vN, o => s(o)), this._element.classList.add("pointer-event")) : (D.on(this._element, fN, o => e(o)), D.on(this._element, pN, o => n(o)), D.on(this._element, gN, o => s(o)))
                }
                _keydown(e) {
                    if (/input|textarea/i.test(e.target.tagName)) return;
                    const n = lN[e.key];
                    n && (e.preventDefault(), this._slide(n))
                }
                _getItemIndex(e) {
                    return this._items = e && e.parentNode ? H.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
                }
                _getItemByOrder(e, n) {
                    return vb(this._items, n, e === dr, this._config.wrap)
                }
                _triggerSlideEvent(e, n) {
                    const s = this._getItemIndex(e),
                        o = this._getItemIndex(H.findOne(kc, this._element));
                    return D.trigger(this._element, cN, {
                        relatedTarget: e,
                        direction: n,
                        from: o,
                        to: s
                    })
                }
                _setActiveIndicatorElement(e) {
                    if (this._indicatorsElement) {
                        const n = H.findOne(".active", this._indicatorsElement);
                        n.classList.remove(pr), n.removeAttribute("aria-current");
                        const s = H.find("[data-bs-target]", this._indicatorsElement);
                        for (let o = 0; o < s.length; o++)
                            if (Number.parseInt(s[o].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                                s[o].classList.add(pr), s[o].setAttribute("aria-current", "true");
                                break
                            }
                    }
                }
                _updateInterval() {
                    const e = this._activeElement || H.findOne(kc, this._element);
                    if (!e) return;
                    const n = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                    n ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = n) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
                _slide(e, n) {
                    const s = this._directionToOrder(e),
                        o = H.findOne(kc, this._element),
                        l = this._getItemIndex(o),
                        c = n || this._getItemByOrder(s, o),
                        u = this._getItemIndex(c),
                        d = Boolean(this._interval),
                        f = s === dr,
                        p = f ? "carousel-item-start" : "carousel-item-end",
                        g = f ? "carousel-item-next" : "carousel-item-prev",
                        m = this._orderToDirection(s);
                    if (c && c.classList.contains(pr)) return void(this._isSliding = !1);
                    if (this._isSliding || this._triggerSlideEvent(c, m).defaultPrevented || !o || !c) return;
                    this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(c), this._activeElement = c;
                    const y = () => {
                        D.trigger(this._element, xb, {
                            relatedTarget: c,
                            direction: m,
                            from: l,
                            to: u
                        })
                    };
                    this._element.classList.contains("slide") ? (c.classList.add(g), o.classList.add(p), c.classList.add(p), this._queueCallback(() => {
                        c.classList.remove(p, g), c.classList.add(pr), o.classList.remove(pr, g, p), this._isSliding = !1, setTimeout(y, 0)
                    }, o, !0)) : (o.classList.remove(pr), c.classList.add(pr), this._isSliding = !1, y()), d && this.cycle()
                }
                _directionToOrder(e) {
                    return [ca, fr].includes(e) ? pt() ? e === fr ? hr : dr : e === fr ? dr : hr : e
                }
                _orderToDirection(e) {
                    return [dr, hr].includes(e) ? pt() ? e === hr ? fr : ca : e === hr ? ca : fr : e
                }
                static carouselInterface(e, n) {
                    const s = oi.getOrCreateInstance(e, n);
                    let {
                        _config: o
                    } = s;
                    "object" == typeof n && (o = G(G({}, o), n));
                    const l = "string" == typeof n ? n : o.slide;
                    if ("number" == typeof n) s.to(n);
                    else if ("string" == typeof l) {
                        if (void 0 === s[l]) throw new TypeError(`No method named "${l}"`);
                        s[l]()
                    } else o.interval && o.ride && (s.pause(), s.cycle())
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        oi.carouselInterface(this, e)
                    })
                }
                static dataApiClickHandler(e) {
                    const n = Pi(this);
                    if (!n || !n.classList.contains("carousel")) return;
                    const s = G(G({}, qe.getDataAttributes(n)), qe.getDataAttributes(this)),
                        o = this.getAttribute("data-bs-slide-to");
                    o && (s.interval = !1), oi.carouselInterface(n, s), o && oi.getInstance(n).to(o), e.preventDefault()
                }
            }
            D.on(document, bN, "[data-bs-slide], [data-bs-slide-to]", oi.dataApiClickHandler), D.on(window, _N, () => {
                const t = H.find('[data-bs-ride="carousel"]');
                for (let e = 0, n = t.length; e < n; e++) oi.carouselInterface(t[e], oi.getInstance(t[e]))
            }), Gt(oi);
            const kb = "collapse",
                Lb = "bs.collapse",
                ua = `.${Lb}`,
                Fb = {
                    toggle: !0,
                    parent: null
                },
                FN = {
                    toggle: "boolean",
                    parent: "(null|element)"
                },
                VN = `show${ua}`,
                BN = `shown${ua}`,
                $N = `hide${ua}`,
                HN = `hidden${ua}`,
                jN = `click${ua}.data-api`,
                fp = "show",
                Li = "collapse",
                Lc = "collapsing",
                Vb = "collapsed",
                pp = '[data-bs-toggle="collapse"]';
            class Ps extends bn {
                constructor(e, n) {
                    super(e), this._isTransitioning = !1, this._config = this._getConfig(n), this._triggerArray = [];
                    const s = H.find(pp);
                    for (let o = 0, l = s.length; o < l; o++) {
                        const c = s[o],
                            u = lp(c),
                            d = H.find(u).filter(f => f === this._element);
                        null !== u && d.length && (this._selector = u, this._triggerArray.push(c))
                    }
                    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
                }
                static get Default() {
                    return Fb
                }
                static get NAME() {
                    return kb
                }
                toggle() {
                    this._isShown() ? this.hide() : this.show()
                }
                show() {
                    if (this._isTransitioning || this._isShown()) return;
                    let n, e = [];
                    if (this._config.parent) {
                        const f = H.find(`.${Li} .${Li}`, this._config.parent);
                        e = H.find(".show, .collapsing", this._config.parent).filter(p => !f.includes(p))
                    }
                    const s = H.findOne(this._selector);
                    if (e.length) {
                        const f = e.find(p => s !== p);
                        if (n = f ? Ps.getInstance(f) : null, n && n._isTransitioning) return
                    }
                    if (D.trigger(this._element, VN).defaultPrevented) return;
                    e.forEach(f => {
                        s !== f && Ps.getOrCreateInstance(f, {
                            toggle: !1
                        }).hide(), n || la.set(f, Lb, null)
                    });
                    const l = this._getDimension();
                    this._element.classList.remove(Li), this._element.classList.add(Lc), this._element.style[l] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                    const d = `scroll${l[0].toUpperCase()+l.slice(1)}`;
                    this._queueCallback(() => {
                        this._isTransitioning = !1, this._element.classList.remove(Lc), this._element.classList.add(Li, fp), this._element.style[l] = "", D.trigger(this._element, BN)
                    }, this._element, !0), this._element.style[l] = `${this._element[d]}px`
                }
                hide() {
                    if (this._isTransitioning || !this._isShown() || D.trigger(this._element, $N).defaultPrevented) return;
                    const n = this._getDimension();
                    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, this._element.classList.add(Lc), this._element.classList.remove(Li, fp);
                    const s = this._triggerArray.length;
                    for (let l = 0; l < s; l++) {
                        const c = this._triggerArray[l],
                            u = Pi(c);
                        u && !this._isShown(u) && this._addAriaAndCollapsedClass([c], !1)
                    }
                    this._isTransitioning = !0, this._element.style[n] = "", this._queueCallback(() => {
                        this._isTransitioning = !1, this._element.classList.remove(Lc), this._element.classList.add(Li), D.trigger(this._element, HN)
                    }, this._element, !0)
                }
                _isShown(e = this._element) {
                    return e.classList.contains(fp)
                }
                _getConfig(e) {
                    return (e = G(G(G({}, Fb), qe.getDataAttributes(this._element)), e)).toggle = Boolean(e.toggle), e.parent = Ri(e.parent), Fn(kb, e, FN), e
                }
                _getDimension() {
                    return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
                }
                _initializeChildren() {
                    if (!this._config.parent) return;
                    const e = H.find(`.${Li} .${Li}`, this._config.parent);
                    H.find(pp, this._config.parent).filter(n => !e.includes(n)).forEach(n => {
                        const s = Pi(n);
                        s && this._addAriaAndCollapsedClass([n], this._isShown(s))
                    })
                }
                _addAriaAndCollapsedClass(e, n) {
                    !e.length || e.forEach(s => {
                        n ? s.classList.remove(Vb) : s.classList.add(Vb), s.setAttribute("aria-expanded", n)
                    })
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const n = {};
                        "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1);
                        const s = Ps.getOrCreateInstance(this, n);
                        if ("string" == typeof e) {
                            if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
                            s[e]()
                        }
                    })
                }
            }
            D.on(document, jN, pp, function (t) {
                ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
                const e = lp(this);
                H.find(e).forEach(s => {
                    Ps.getOrCreateInstance(s, {
                        toggle: !1
                    }).toggle()
                })
            }), Gt(Ps);
            const gp = "dropdown",
                gr = ".bs.dropdown",
                mp = ".data-api",
                Fc = "Escape",
                vp = "ArrowUp",
                Vc = "ArrowDown",
                GN = new RegExp(`${vp}|${Vc}|${Fc}`),
                YN = `hide${gr}`,
                XN = `hidden${gr}`,
                QN = `show${gr}`,
                ZN = `shown${gr}`,
                Hb = `click${gr}${mp}`,
                jb = `keydown${gr}${mp}`,
                JN = `keyup${gr}${mp}`,
                Rs = "show",
                da = '[data-bs-toggle="dropdown"]',
                yp = ".dropdown-menu",
                ox = pt() ? "top-end" : "top-start",
                ax = pt() ? "top-start" : "top-end",
                lx = pt() ? "bottom-end" : "bottom-start",
                cx = pt() ? "bottom-start" : "bottom-end",
                ux = pt() ? "left-start" : "right-start",
                dx = pt() ? "right-start" : "left-start",
                hx = {
                    offset: [0, 2],
                    boundary: "clippingParents",
                    reference: "toggle",
                    display: "dynamic",
                    popperConfig: null,
                    autoClose: !0
                },
                fx = {
                    offset: "(array|string|function)",
                    boundary: "(string|element)",
                    reference: "(string|element|object)",
                    display: "string",
                    popperConfig: "(null|object|function)",
                    autoClose: "(boolean|string)"
                };
            class Yt extends bn {
                constructor(e, n) {
                    super(e), this._popper = null, this._config = this._getConfig(n), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
                }
                static get Default() {
                    return hx
                }
                static get DefaultType() {
                    return fx
                }
                static get NAME() {
                    return gp
                }
                toggle() {
                    return this._isShown() ? this.hide() : this.show()
                }
                show() {
                    if (cr(this._element) || this._isShown(this._menu)) return;
                    const e = {
                        relatedTarget: this._element
                    };
                    if (D.trigger(this._element, QN, e).defaultPrevented) return;
                    const s = Yt.getParentFromElement(this._element);
                    this._inNavbar ? qe.setDataAttribute(this._menu, "popper", "none") : this._createPopper(s), "ontouchstart" in document.documentElement && !s.closest(".navbar-nav") && [].concat(...document.body.children).forEach(o => D.on(o, "mouseover", Nc)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Rs), this._element.classList.add(Rs), D.trigger(this._element, ZN, e)
                }
                hide() {
                    !cr(this._element) && this._isShown(this._menu) && this._completeHide({
                        relatedTarget: this._element
                    })
                }
                dispose() {
                    this._popper && this._popper.destroy(), super.dispose()
                }
                update() {
                    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
                }
                _completeHide(e) {
                    D.trigger(this._element, YN, e).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(s => D.off(s, "mouseover", Nc)), this._popper && this._popper.destroy(), this._menu.classList.remove(Rs), this._element.classList.remove(Rs), this._element.setAttribute("aria-expanded", "false"), qe.removeDataAttribute(this._menu, "popper"), D.trigger(this._element, XN, e))
                }
                _getConfig(e) {
                    if (e = G(G(G({}, this.constructor.Default), qe.getDataAttributes(this._element)), e), Fn(gp, e, this.constructor.DefaultType), "object" == typeof e.reference && !lr(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(`${gp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                    return e
                }
                _createPopper(e) {
                    if (void 0 === Wn) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let n = this._element;
                    "parent" === this._config.reference ? n = e : lr(this._config.reference) ? n = Ri(this._config.reference) : "object" == typeof this._config.reference && (n = this._config.reference);
                    const s = this._getPopperConfig(),
                        o = s.modifiers.find(l => "applyStyles" === l.name && !1 === l.enabled);
                    this._popper = op(n, this._menu, s), o && qe.setDataAttribute(this._menu, "popper", "static")
                }
                _isShown(e = this._element) {
                    return e.classList.contains(Rs)
                }
                _getMenuElement() {
                    return H.next(this._element, yp)[0]
                }
                _getPlacement() {
                    const e = this._element.parentNode;
                    if (e.classList.contains("dropend")) return ux;
                    if (e.classList.contains("dropstart")) return dx;
                    const n = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                    return e.classList.contains("dropup") ? n ? ax : ox : n ? cx : lx
                }
                _detectNavbar() {
                    return null !== this._element.closest(".navbar")
                }
                _getOffset() {
                    const {
                        offset: e
                    } = this._config;
                    return "string" == typeof e ? e.split(",").map(n => Number.parseInt(n, 10)) : "function" == typeof e ? n => e(n, this._element) : e
                }
                _getPopperConfig() {
                    const e = {
                        placement: this._getPlacement(),
                        modifiers: [{
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }]
                    };
                    return "static" === this._config.display && (e.modifiers = [{
                        name: "applyStyles",
                        enabled: !1
                    }]), G(G({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig)
                }
                _selectMenuItem({
                    key: e,
                    target: n
                }) {
                    const s = H.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(aa);
                    !s.length || vb(s, n, e === Vc, !s.includes(n)).focus()
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const n = Yt.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                            n[e]()
                        }
                    })
                }
                static clearMenus(e) {
                    if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
                    const n = H.find(da);
                    for (let s = 0, o = n.length; s < o; s++) {
                        const l = Yt.getInstance(n[s]);
                        if (!l || !1 === l._config.autoClose || !l._isShown()) continue;
                        const c = {
                            relatedTarget: l._element
                        };
                        if (e) {
                            const u = e.composedPath(),
                                d = u.includes(l._menu);
                            if (u.includes(l._element) || "inside" === l._config.autoClose && !d || "outside" === l._config.autoClose && d || l._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                            "click" === e.type && (c.clickEvent = e)
                        }
                        l._completeHide(c)
                    }
                }
                static getParentFromElement(e) {
                    return Pi(e) || e.parentNode
                }
                static dataApiKeydownHandler(e) {
                    if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || e.key !== Fc && (e.key !== Vc && e.key !== vp || e.target.closest(yp)) : !GN.test(e.key)) return;
                    const n = this.classList.contains(Rs);
                    if (!n && e.key === Fc || (e.preventDefault(), e.stopPropagation(), cr(this))) return;
                    const s = this.matches(da) ? this : H.prev(this, da)[0],
                        o = Yt.getOrCreateInstance(s);
                    if (e.key !== Fc) return e.key === vp || e.key === Vc ? (n || o.show(), void o._selectMenuItem(e)) : void((!n || "Space" === e.key) && Yt.clearMenus());
                    o.hide()
                }
            }
            D.on(document, jb, da, Yt.dataApiKeydownHandler), D.on(document, jb, yp, Yt.dataApiKeydownHandler), D.on(document, Hb, Yt.clearMenus), D.on(document, JN, Yt.clearMenus), D.on(document, Hb, da, function (t) {
                t.preventDefault(), Yt.getOrCreateInstance(this).toggle()
            }), Gt(Yt);
            const Ub = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                Wb = ".sticky-top";
            class _p {
                constructor() {
                    this._element = document.body
                }
                getWidth() {
                    const e = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - e)
                }
                hide() {
                    const e = this.getWidth();
                    this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", n => n + e), this._setElementAttributes(Ub, "paddingRight", n => n + e), this._setElementAttributes(Wb, "marginRight", n => n - e)
                }
                _disableOverFlow() {
                    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
                }
                _setElementAttributes(e, n, s) {
                    const o = this.getWidth();
                    this._applyManipulationCallback(e, c => {
                        if (c !== this._element && window.innerWidth > c.clientWidth + o) return;
                        this._saveInitialAttribute(c, n);
                        const u = window.getComputedStyle(c)[n];
                        c.style[n] = `${s(Number.parseFloat(u))}px`
                    })
                }
                reset() {
                    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(Ub, "paddingRight"), this._resetElementAttributes(Wb, "marginRight")
                }
                _saveInitialAttribute(e, n) {
                    const s = e.style[n];
                    s && qe.setDataAttribute(e, n, s)
                }
                _resetElementAttributes(e, n) {
                    this._applyManipulationCallback(e, o => {
                        const l = qe.getDataAttribute(o, n);
                        void 0 === l ? o.style.removeProperty(n) : (qe.removeDataAttribute(o, n), o.style[n] = l)
                    })
                }
                _applyManipulationCallback(e, n) {
                    lr(e) ? n(e) : H.find(e, this._element).forEach(n)
                }
                isOverflowing() {
                    return this.getWidth() > 0
                }
            }
            const px = {
                    className: "modal-backdrop",
                    isVisible: !0,
                    isAnimated: !1,
                    rootElement: "body",
                    clickCallback: null
                },
                gx = {
                    className: "string",
                    isVisible: "boolean",
                    isAnimated: "boolean",
                    rootElement: "(element|string)",
                    clickCallback: "(function|null)"
                },
                qb = "backdrop",
                zb = `mousedown.bs.${qb}`;
            class Gb {
                constructor(e) {
                    this._config = this._getConfig(e), this._isAppended = !1, this._element = null
                }
                show(e) {
                    this._config.isVisible ? (this._append(), this._config.isAnimated && this._getElement(), this._getElement().classList.add("show"), this._emulateAnimation(() => {
                        ur(e)
                    })) : ur(e)
                }
                hide(e) {
                    this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
                        this.dispose(), ur(e)
                    })) : ur(e)
                }
                _getElement() {
                    if (!this._element) {
                        const e = document.createElement("div");
                        e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
                    }
                    return this._element
                }
                _getConfig(e) {
                    return (e = G(G({}, px), "object" == typeof e ? e : {})).rootElement = Ri(e.rootElement), Fn(qb, e, gx), e
                }
                _append() {
                    this._isAppended || (this._config.rootElement.append(this._getElement()), D.on(this._getElement(), zb, () => {
                        ur(this._config.clickCallback)
                    }), this._isAppended = !0)
                }
                dispose() {
                    !this._isAppended || (D.off(this._element, zb), this._element.remove(), this._isAppended = !1)
                }
                _emulateAnimation(e) {
                    mb(e, this._getElement(), this._config.isAnimated)
                }
            }
            const vx = {
                    trapElement: null,
                    autofocus: !0
                },
                yx = {
                    trapElement: "element",
                    autofocus: "boolean"
                },
                Bc = ".bs.focustrap",
                bx = `focusin${Bc}`,
                Cx = `keydown.tab${Bc}`,
                Yb = "backward";
            class Xb {
                constructor(e) {
                    this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
                }
                activate() {
                    const {
                        trapElement: e,
                        autofocus: n
                    } = this._config;
                    this._isActive || (n && e.focus(), D.off(document, Bc), D.on(document, bx, s => this._handleFocusin(s)), D.on(document, Cx, s => this._handleKeydown(s)), this._isActive = !0)
                }
                deactivate() {
                    !this._isActive || (this._isActive = !1, D.off(document, Bc))
                }
                _handleFocusin(e) {
                    const {
                        target: n
                    } = e, {
                        trapElement: s
                    } = this._config;
                    if (n === document || n === s || s.contains(n)) return;
                    const o = H.focusableChildren(s);
                    0 === o.length ? s.focus() : this._lastTabNavDirection === Yb ? o[o.length - 1].focus() : o[0].focus()
                }
                _handleKeydown(e) {
                    "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? Yb : "forward")
                }
                _getConfig(e) {
                    return e = G(G({}, vx), "object" == typeof e ? e : {}), Fn("focustrap", e, yx), e
                }
            }
            const Xt = ".bs.modal",
                Jb = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0
                },
                Tx = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean"
                },
                Sx = `hide${Xt}`,
                Ax = `hidePrevented${Xt}`,
                eC = `hidden${Xt}`,
                tC = `show${Xt}`,
                Ix = `shown${Xt}`,
                nC = `resize${Xt}`,
                iC = `click.dismiss${Xt}`,
                rC = `keydown.dismiss${Xt}`,
                Mx = `mouseup.dismiss${Xt}`,
                sC = `mousedown.dismiss${Xt}`,
                Ox = `click${Xt}.data-api`,
                oC = "modal-open",
                bp = "modal-static";
            class ha extends bn {
                constructor(e, n) {
                    super(e), this._config = this._getConfig(n), this._dialog = H.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new _p
                }
                static get Default() {
                    return Jb
                }
                static get NAME() {
                    return "modal"
                }
                toggle(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }
                show(e) {
                    this._isShown || this._isTransitioning || D.trigger(this._element, tC, {
                        relatedTarget: e
                    }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(oC), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), D.on(this._dialog, sC, () => {
                        D.one(this._element, Mx, s => {
                            s.target === this._element && (this._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(() => this._showElement(e)))
                }
                hide() {
                    if (!this._isShown || this._isTransitioning || D.trigger(this._element, Sx).defaultPrevented) return;
                    this._isShown = !1;
                    const n = this._isAnimated();
                    n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), D.off(this._element, iC), D.off(this._dialog, sC), this._queueCallback(() => this._hideModal(), this._element, n)
                }
                dispose() {
                    [window, this._dialog].forEach(e => D.off(e, Xt)), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                }
                handleUpdate() {
                    this._adjustDialog()
                }
                _initializeBackDrop() {
                    return new Gb({
                        isVisible: Boolean(this._config.backdrop),
                        isAnimated: this._isAnimated()
                    })
                }
                _initializeFocusTrap() {
                    return new Xb({
                        trapElement: this._element
                    })
                }
                _getConfig(e) {
                    return e = G(G(G({}, Jb), qe.getDataAttributes(this._element)), "object" == typeof e ? e : {}), Fn("modal", e, Tx), e
                }
                _showElement(e) {
                    const n = this._isAnimated(),
                        s = H.findOne(".modal-body", this._dialog);
                    (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) && document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, s && (s.scrollTop = 0), this._element.classList.add("show"), this._queueCallback(() => {
                        this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, D.trigger(this._element, Ix, {
                            relatedTarget: e
                        })
                    }, this._dialog, n)
                }
                _setEscapeEvent() {
                    this._isShown ? D.on(this._element, rC, e => {
                        this._config.keyboard && "Escape" === e.key ? (e.preventDefault(), this.hide()) : !this._config.keyboard && "Escape" === e.key && this._triggerBackdropTransition()
                    }) : D.off(this._element, rC)
                }
                _setResizeEvent() {
                    this._isShown ? D.on(window, nC, () => this._adjustDialog()) : D.off(window, nC)
                }
                _hideModal() {
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                        document.body.classList.remove(oC), this._resetAdjustments(), this._scrollBar.reset(), D.trigger(this._element, eC)
                    })
                }
                _showBackdrop(e) {
                    D.on(this._element, iC, n => {
                        this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : n.target === n.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
                    }), this._backdrop.show(e)
                }
                _isAnimated() {
                    return this._element.classList.contains("fade")
                }
                _triggerBackdropTransition() {
                    if (D.trigger(this._element, Ax).defaultPrevented) return;
                    const {
                        classList: n,
                        scrollHeight: s,
                        style: o
                    } = this._element, l = s > document.documentElement.clientHeight;
                    !l && "hidden" === o.overflowY || n.contains(bp) || (l || (o.overflowY = "hidden"), n.add(bp), this._queueCallback(() => {
                        n.remove(bp), l || this._queueCallback(() => {
                            o.overflowY = ""
                        }, this._dialog)
                    }, this._dialog), this._element.focus())
                }
                _adjustDialog() {
                    const e = this._element.scrollHeight > document.documentElement.clientHeight,
                        n = this._scrollBar.getWidth(),
                        s = n > 0;
                    (!s && e && !pt() || s && !e && pt()) && (this._element.style.paddingLeft = `${n}px`), (s && !e && !pt() || !s && e && pt()) && (this._element.style.paddingRight = `${n}px`)
                }
                _resetAdjustments() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }
                static jQueryInterface(e, n) {
                    return this.each(function () {
                        const s = ha.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
                            s[e](n)
                        }
                    })
                }
            }
            D.on(document, Ox, '[data-bs-toggle="modal"]', function (t) {
                const e = Pi(this);
                ["A", "AREA"].includes(this.tagName) && t.preventDefault(), D.one(e, tC, s => {
                    s.defaultPrevented || D.one(e, eC, () => {
                        aa(this) && this.focus()
                    })
                }), ha.getOrCreateInstance(e).toggle(this)
            }), xc(ha), Gt(ha);
            const lC = "offcanvas",
                mr = ".bs.offcanvas",
                cC = ".data-api",
                kx = `load${mr}${cC}`,
                uC = {
                    backdrop: !0,
                    keyboard: !0,
                    scroll: !1
                },
                Fx = {
                    backdrop: "boolean",
                    keyboard: "boolean",
                    scroll: "boolean"
                },
                hC = ".offcanvas.show",
                Bx = `show${mr}`,
                $x = `shown${mr}`,
                Hx = `hide${mr}`,
                fC = `hidden${mr}`,
                jx = `click${mr}${cC}`,
                Ux = `keydown.dismiss${mr}`;
            class vr extends bn {
                constructor(e, n) {
                    super(e), this._config = this._getConfig(n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
                }
                static get NAME() {
                    return lC
                }
                static get Default() {
                    return uC
                }
                toggle(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }
                show(e) {
                    this._isShown || D.trigger(this._element, Bx, {
                        relatedTarget: e
                    }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new _p).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
                        this._config.scroll || this._focustrap.activate(), D.trigger(this._element, $x, {
                            relatedTarget: e
                        })
                    }, this._element, !0))
                }
                hide() {
                    this._isShown && !D.trigger(this._element, Hx).defaultPrevented && (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
                        this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new _p).reset(), D.trigger(this._element, fC)
                    }, this._element, !0))
                }
                dispose() {
                    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                }
                _getConfig(e) {
                    return e = G(G(G({}, uC), qe.getDataAttributes(this._element)), "object" == typeof e ? e : {}), Fn(lC, e, Fx), e
                }
                _initializeBackDrop() {
                    return new Gb({
                        className: "offcanvas-backdrop",
                        isVisible: this._config.backdrop,
                        isAnimated: !0,
                        rootElement: this._element.parentNode,
                        clickCallback: () => this.hide()
                    })
                }
                _initializeFocusTrap() {
                    return new Xb({
                        trapElement: this._element
                    })
                }
                _addEventListeners() {
                    D.on(this._element, Ux, e => {
                        this._config.keyboard && "Escape" === e.key && this.hide()
                    })
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const n = vr.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === n[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                            n[e](this)
                        }
                    })
                }
            }
            D.on(document, jx, '[data-bs-toggle="offcanvas"]', function (t) {
                const e = Pi(this);
                if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), cr(this)) return;
                D.one(e, fC, () => {
                    aa(this) && this.focus()
                });
                const n = H.findOne(hC);
                n && n !== e && vr.getInstance(n).hide(), vr.getOrCreateInstance(e).toggle(this)
            }), D.on(window, kx, () => H.find(hC).forEach(t => vr.getOrCreateInstance(t).show())), xc(vr), Gt(vr);
            const qx = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
                zx = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
                Gx = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
                Yx = (t, e) => {
                    const n = t.nodeName.toLowerCase();
                    if (e.includes(n)) return !qx.has(n) || Boolean(zx.test(t.nodeValue) || Gx.test(t.nodeValue));
                    const s = e.filter(o => o instanceof RegExp);
                    for (let o = 0, l = s.length; o < l; o++)
                        if (s[o].test(n)) return !0;
                    return !1
                };

            function pC(t, e, n) {
                if (!t.length) return t;
                if (n && "function" == typeof n) return n(t);
                const o = (new window.DOMParser).parseFromString(t, "text/html"),
                    l = Object.keys(e),
                    c = [].concat(...o.body.querySelectorAll("*"));
                for (let u = 0, d = c.length; u < d; u++) {
                    const f = c[u],
                        p = f.nodeName.toLowerCase();
                    if (!l.includes(p)) {
                        f.remove();
                        continue
                    }
                    const g = [].concat(...f.attributes),
                        m = [].concat(e["*"] || [], e[p] || []);
                    g.forEach(v => {
                        Yx(v, m) || f.removeAttribute(v.nodeName)
                    })
                }
                return o.body.innerHTML
            }
            const gC = "tooltip",
                Vn = ".bs.tooltip",
                Zx = new Set(["sanitize", "allowList", "sanitizeFn"]),
                Jx = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(array|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacements: "array",
                    boundary: "(string|element)",
                    customClass: "(string|function)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    allowList: "object",
                    popperConfig: "(null|object|function)"
                },
                eP = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: pt() ? "left" : "right",
                    BOTTOM: "bottom",
                    LEFT: pt() ? "right" : "left"
                },
                tP = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: [0, 0],
                    container: !1,
                    fallbackPlacements: ["top", "right", "bottom", "left"],
                    boundary: "clippingParents",
                    customClass: "",
                    sanitize: !0,
                    sanitizeFn: null,
                    allowList: {
                        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                        a: ["target", "href", "title", "rel"],
                        area: [],
                        b: [],
                        br: [],
                        col: [],
                        code: [],
                        div: [],
                        em: [],
                        hr: [],
                        h1: [],
                        h2: [],
                        h3: [],
                        h4: [],
                        h5: [],
                        h6: [],
                        i: [],
                        img: ["src", "srcset", "alt", "title", "width", "height"],
                        li: [],
                        ol: [],
                        p: [],
                        pre: [],
                        s: [],
                        small: [],
                        span: [],
                        sub: [],
                        sup: [],
                        strong: [],
                        u: [],
                        ul: []
                    },
                    popperConfig: null
                },
                nP = {
                    HIDE: `hide${Vn}`,
                    HIDDEN: `hidden${Vn}`,
                    SHOW: `show${Vn}`,
                    SHOWN: `shown${Vn}`,
                    INSERTED: `inserted${Vn}`,
                    CLICK: `click${Vn}`,
                    FOCUSIN: `focusin${Vn}`,
                    FOCUSOUT: `focusout${Vn}`,
                    MOUSEENTER: `mouseenter${Vn}`,
                    MOUSELEAVE: `mouseleave${Vn}`
                },
                $c = "fade",
                fa = "show",
                pa = "show",
                vC = "hide.bs.modal",
                ga = "hover",
                Ep = "focus";
            class ks extends bn {
                constructor(e, n) {
                    if (void 0 === Wn) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                    super(e), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(n), this.tip = null, this._setListeners()
                }
                static get Default() {
                    return tP
                }
                static get NAME() {
                    return gC
                }
                static get Event() {
                    return nP
                }
                static get DefaultType() {
                    return Jx
                }
                enable() {
                    this._isEnabled = !0
                }
                disable() {
                    this._isEnabled = !1
                }
                toggleEnabled() {
                    this._isEnabled = !this._isEnabled
                }
                toggle(e) {
                    if (this._isEnabled)
                        if (e) {
                            const n = this._initializeOnDelegatedTarget(e);
                            n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (this.getTipElement().classList.contains(fa)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }
                dispose() {
                    clearTimeout(this._timeout), D.off(this._element.closest(".modal"), vC, this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose()
                }
                show() {
                    if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                    if (!this.isWithContent() || !this._isEnabled) return;
                    const e = D.trigger(this._element, this.constructor.Event.SHOW),
                        n = pb(this._element),
                        s = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
                    if (e.defaultPrevented || !s) return;
                    const o = this.getTipElement(),
                        l = (t => {
                            do {
                                t += Math.floor(1e6 * Math.random())
                            } while (document.getElementById(t));
                            return t
                        })(this.constructor.NAME);
                    o.setAttribute("id", l), this._element.setAttribute("aria-describedby", l), this._config.animation && o.classList.add($c);
                    const c = "function" == typeof this._config.placement ? this._config.placement.call(this, o, this._element) : this._config.placement,
                        u = this._getAttachment(c);
                    this._addAttachmentClass(u);
                    const {
                        container: d
                    } = this._config;
                    la.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (d.append(o), D.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = op(this._element, o, this._getPopperConfig(u)), o.classList.add(fa);
                    const f = this._resolvePossibleFunction(this._config.customClass);
                    f && o.classList.add(...f.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(m => {
                        D.on(m, "mouseover", Nc)
                    });
                    const g = this.tip.classList.contains($c);
                    this._queueCallback(() => {
                        const m = this._hoverState;
                        this._hoverState = null, D.trigger(this._element, this.constructor.Event.SHOWN), "out" === m && this._leave(null, this)
                    }, this.tip, g)
                }
                hide() {
                    if (!this._popper) return;
                    const e = this.getTipElement();
                    if (D.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                    e.classList.remove(fa), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(l => D.off(l, "mouseover", Nc)), this._activeTrigger.click = !1, this._activeTrigger[Ep] = !1, this._activeTrigger[ga] = !1;
                    const o = this.tip.classList.contains($c);
                    this._queueCallback(() => {
                        this._isWithActiveTrigger() || (this._hoverState !== pa && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), D.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
                    }, this.tip, o), this._hoverState = ""
                }
                update() {
                    null !== this._popper && this._popper.update()
                }
                isWithContent() {
                    return Boolean(this.getTitle())
                }
                getTipElement() {
                    if (this.tip) return this.tip;
                    const e = document.createElement("div");
                    e.innerHTML = this._config.template;
                    const n = e.children[0];
                    return this.setContent(n), n.classList.remove($c, fa), this.tip = n, this.tip
                }
                setContent(e) {
                    this._sanitizeAndSetContent(e, this.getTitle(), ".tooltip-inner")
                }
                _sanitizeAndSetContent(e, n, s) {
                    const o = H.findOne(s, e);
                    n || !o ? this.setElementContent(o, n) : o.remove()
                }
                setElementContent(e, n) {
                    if (null !== e) {
                        if (lr(n)) return n = Ri(n), void(this._config.html ? n.parentNode !== e && (e.innerHTML = "", e.append(n)) : e.textContent = n.textContent);
                        this._config.html ? (this._config.sanitize && (n = pC(n, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = n) : e.textContent = n
                    }
                }
                getTitle() {
                    const e = this._element.getAttribute("data-bs-original-title") || this._config.title;
                    return this._resolvePossibleFunction(e)
                }
                updateAttachment(e) {
                    return "right" === e ? "end" : "left" === e ? "start" : e
                }
                _initializeOnDelegatedTarget(e, n) {
                    return n || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
                }
                _getOffset() {
                    const {
                        offset: e
                    } = this._config;
                    return "string" == typeof e ? e.split(",").map(n => Number.parseInt(n, 10)) : "function" == typeof e ? n => e(n, this._element) : e
                }
                _resolvePossibleFunction(e) {
                    return "function" == typeof e ? e.call(this._element) : e
                }
                _getPopperConfig(e) {
                    const n = {
                        placement: e,
                        modifiers: [{
                            name: "flip",
                            options: {
                                fallbackPlacements: this._config.fallbackPlacements
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }, {
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: `.${this.constructor.NAME}-arrow`
                            }
                        }, {
                            name: "onChange",
                            enabled: !0,
                            phase: "afterWrite",
                            fn: s => this._handlePopperPlacementChange(s)
                        }],
                        onFirstUpdate: s => {
                            s.options.placement !== s.placement && this._handlePopperPlacementChange(s)
                        }
                    };
                    return G(G({}, n), "function" == typeof this._config.popperConfig ? this._config.popperConfig(n) : this._config.popperConfig)
                }
                _addAttachmentClass(e) {
                    this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)
                }
                _getAttachment(e) {
                    return eP[e.toUpperCase()]
                }
                _setListeners() {
                    this._config.trigger.split(" ").forEach(n => {
                        if ("click" === n) D.on(this._element, this.constructor.Event.CLICK, this._config.selector, s => this.toggle(s));
                        else if ("manual" !== n) {
                            const o = n === ga ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                            D.on(this._element, n === ga ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, this._config.selector, l => this._enter(l)), D.on(this._element, o, this._config.selector, l => this._leave(l))
                        }
                    }), this._hideModalHandler = () => {
                        this._element && this.hide()
                    }, D.on(this._element.closest(".modal"), vC, this._hideModalHandler), this._config.selector ? this._config = fu(G({}, this._config), {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }
                _fixTitle() {
                    const e = this._element.getAttribute("title"),
                        n = typeof this._element.getAttribute("data-bs-original-title");
                    (e || "string" !== n) && (this._element.setAttribute("data-bs-original-title", e || ""), e && !this._element.getAttribute("aria-label") && !this._element.textContent && this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""))
                }
                _enter(e, n) {
                    n = this._initializeOnDelegatedTarget(e, n), e && (n._activeTrigger["focusin" === e.type ? Ep : ga] = !0), n.getTipElement().classList.contains(fa) || n._hoverState === pa ? n._hoverState = pa : (clearTimeout(n._timeout), n._hoverState = pa, n._config.delay && n._config.delay.show ? n._timeout = setTimeout(() => {
                        n._hoverState === pa && n.show()
                    }, n._config.delay.show) : n.show())
                }
                _leave(e, n) {
                    if (n = this._initializeOnDelegatedTarget(e, n), e && (n._activeTrigger["focusout" === e.type ? Ep : ga] = n._element.contains(e.relatedTarget)), !n._isWithActiveTrigger()) {
                        if (clearTimeout(n._timeout), n._hoverState = "out", !n._config.delay || !n._config.delay.hide) return void n.hide();
                        n._timeout = setTimeout(() => {
                            "out" === n._hoverState && n.hide()
                        }, n._config.delay.hide)
                    }
                }
                _isWithActiveTrigger() {
                    for (const e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }
                _getConfig(e) {
                    const n = qe.getDataAttributes(this._element);
                    return Object.keys(n).forEach(s => {
                        Zx.has(s) && delete n[s]
                    }), (e = G(G(G({}, this.constructor.Default), n), "object" == typeof e && e ? e : {})).container = !1 === e.container ? document.body : Ri(e.container), "number" == typeof e.delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), Fn(gC, e, this.constructor.DefaultType), e.sanitize && (e.template = pC(e.template, e.allowList, e.sanitizeFn)), e
                }
                _getDelegateConfig() {
                    const e = {};
                    for (const n in this._config) this.constructor.Default[n] !== this._config[n] && (e[n] = this._config[n]);
                    return e
                }
                _cleanTipClass() {
                    const e = this.getTipElement(),
                        n = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                        s = e.getAttribute("class").match(n);
                    null !== s && s.length > 0 && s.map(o => o.trim()).forEach(o => e.classList.remove(o))
                }
                _getBasicClassPrefix() {
                    return "bs-tooltip"
                }
                _handlePopperPlacementChange(e) {
                    const {
                        state: n
                    } = e;
                    !n || (this.tip = n.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(n.placement)))
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const n = ks.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                            n[e]()
                        }
                    })
                }
            }
            Gt(ks);
            const Bn = ".bs.popover",
                cP = fu(G({}, ks.Default), {
                    placement: "right",
                    offset: [0, 8],
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                uP = fu(G({}, ks.DefaultType), {
                    content: "(string|element|function)"
                }),
                dP = {
                    HIDE: `hide${Bn}`,
                    HIDDEN: `hidden${Bn}`,
                    SHOW: `show${Bn}`,
                    SHOWN: `shown${Bn}`,
                    INSERTED: `inserted${Bn}`,
                    CLICK: `click${Bn}`,
                    FOCUSIN: `focusin${Bn}`,
                    FOCUSOUT: `focusout${Bn}`,
                    MOUSEENTER: `mouseenter${Bn}`,
                    MOUSELEAVE: `mouseleave${Bn}`
                };
            class wp extends ks {
                static get Default() {
                    return cP
                }
                static get NAME() {
                    return "popover"
                }
                static get Event() {
                    return dP
                }
                static get DefaultType() {
                    return uP
                }
                isWithContent() {
                    return this.getTitle() || this._getContent()
                }
                setContent(e) {
                    this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body")
                }
                _getContent() {
                    return this._resolvePossibleFunction(this._config.content)
                }
                _getBasicClassPrefix() {
                    return "bs-popover"
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const n = wp.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                            n[e]()
                        }
                    })
                }
            }
            Gt(wp);
            const yC = "scrollspy",
                Hc = ".bs.scrollspy",
                _C = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                gP = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                mP = `activate${Hc}`,
                vP = `scroll${Hc}`,
                yP = `load${Hc}.data-api`,
                bC = "dropdown-item",
                Ls = "active",
                Dp = ".nav-link",
                CC = ".list-group-item",
                Tp = `${Dp}, ${CC}, .${bC}`,
                EC = "position";
            class jc extends bn {
                constructor(e, n) {
                    super(e), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(n), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, D.on(this._scrollElement, vP, () => this._process()), this.refresh(), this._process()
                }
                static get Default() {
                    return _C
                }
                static get NAME() {
                    return yC
                }
                refresh() {
                    const n = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : EC : this._config.method,
                        s = n === EC ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), H.find(Tp, this._config.target).map(l => {
                        const c = lp(l),
                            u = c ? H.findOne(c) : null;
                        if (u) {
                            const d = u.getBoundingClientRect();
                            if (d.width || d.height) return [qe[n](u).top + s, c]
                        }
                        return null
                    }).filter(l => l).sort((l, c) => l[0] - c[0]).forEach(l => {
                        this._offsets.push(l[0]), this._targets.push(l[1])
                    })
                }
                dispose() {
                    D.off(this._scrollElement, Hc), super.dispose()
                }
                _getConfig(e) {
                    return (e = G(G(G({}, _C), qe.getDataAttributes(this._element)), "object" == typeof e && e ? e : {})).target = Ri(e.target) || document.documentElement, Fn(yC, e, gP), e
                }
                _getScrollTop() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }
                _getScrollHeight() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
                _getOffsetHeight() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }
                _process() {
                    const e = this._getScrollTop() + this._config.offset,
                        n = this._getScrollHeight(),
                        s = this._config.offset + n - this._getOffsetHeight();
                    if (this._scrollHeight !== n && this.refresh(), e >= s) {
                        const o = this._targets[this._targets.length - 1];
                        this._activeTarget !== o && this._activate(o)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (let o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
                _activate(e) {
                    this._activeTarget = e, this._clear();
                    const n = Tp.split(",").map(o => `${o}[data-bs-target="${e}"],${o}[href="${e}"]`),
                        s = H.findOne(n.join(","), this._config.target);
                    s.classList.add(Ls), s.classList.contains(bC) ? H.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add(Ls) : H.parents(s, ".nav, .list-group").forEach(o => {
                        H.prev(o, `${Dp}, ${CC}`).forEach(l => l.classList.add(Ls)), H.prev(o, ".nav-item").forEach(l => {
                            H.children(l, Dp).forEach(c => c.classList.add(Ls))
                        })
                    }), D.trigger(this._scrollElement, mP, {
                        relatedTarget: e
                    })
                }
                _clear() {
                    H.find(Tp, this._config.target).filter(e => e.classList.contains(Ls)).forEach(e => e.classList.remove(Ls))
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const n = jc.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                            n[e]()
                        }
                    })
                }
            }
            D.on(window, yP, () => {
                H.find('[data-bs-spy="scroll"]').forEach(t => new jc(t))
            }), Gt(jc);
            const ma = ".bs.tab",
                AP = `hide${ma}`,
                IP = `hidden${ma}`,
                MP = `show${ma}`,
                OP = `shown${ma}`,
                NP = `click${ma}.data-api`,
                va = "active",
                TC = ".active",
                SC = ":scope > li > .active";
            class Uc extends bn {
                static get NAME() {
                    return "tab"
                }
                show() {
                    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(va)) return;
                    let e;
                    const n = Pi(this._element),
                        s = this._element.closest(".nav, .list-group");
                    s && (e = H.find("UL" === s.nodeName || "OL" === s.nodeName ? SC : TC, s), e = e[e.length - 1]);
                    const o = e ? D.trigger(e, AP, {
                        relatedTarget: this._element
                    }) : null;
                    if (D.trigger(this._element, MP, {
                            relatedTarget: e
                        }).defaultPrevented || null !== o && o.defaultPrevented) return;
                    this._activate(this._element, s);
                    const c = () => {
                        D.trigger(e, IP, {
                            relatedTarget: this._element
                        }), D.trigger(this._element, OP, {
                            relatedTarget: e
                        })
                    };
                    n ? this._activate(n, n.parentNode, c) : c()
                }
                _activate(e, n, s) {
                    const l = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? H.children(n, TC) : H.find(SC, n))[0],
                        c = s && l && l.classList.contains("fade"),
                        u = () => this._transitionComplete(e, l, s);
                    l && c ? (l.classList.remove("show"), this._queueCallback(u, e, !0)) : u()
                }
                _transitionComplete(e, n, s) {
                    if (n) {
                        n.classList.remove(va);
                        const l = H.findOne(":scope > .dropdown-menu .active", n.parentNode);
                        l && l.classList.remove(va), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    e.classList.add(va), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), e.classList.contains("fade") && e.classList.add("show");
                    let o = e.parentNode;
                    if (o && "LI" === o.nodeName && (o = o.parentNode), o && o.classList.contains("dropdown-menu")) {
                        const l = e.closest(".dropdown");
                        l && H.find(".dropdown-toggle", l).forEach(c => c.classList.add(va)), e.setAttribute("aria-expanded", !0)
                    }
                    s && s()
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const n = Uc.getOrCreateInstance(this);
                        if ("string" == typeof e) {
                            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                            n[e]()
                        }
                    })
                }
            }
            D.on(document, NP, '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
                ["A", "AREA"].includes(this.tagName) && t.preventDefault(), cr(this) || Uc.getOrCreateInstance(this).show()
            }), Gt(Uc);
            const Fi = ".bs.toast",
                VP = `mouseover${Fi}`,
                BP = `mouseout${Fi}`,
                $P = `focusin${Fi}`,
                HP = `focusout${Fi}`,
                jP = `hide${Fi}`,
                UP = `hidden${Fi}`,
                WP = `show${Fi}`,
                qP = `shown${Fi}`,
                ya = "show",
                Wc = "showing",
                zP = {
                    animation: "boolean",
                    autohide: "boolean",
                    delay: "number"
                },
                MC = {
                    animation: !0,
                    autohide: !0,
                    delay: 5e3
                };
            class qc extends bn {
                constructor(e, n) {
                    super(e), this._config = this._getConfig(n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
                }
                static get DefaultType() {
                    return zP
                }
                static get Default() {
                    return MC
                }
                static get NAME() {
                    return "toast"
                }
                show() {
                    D.trigger(this._element, WP).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), this._element.classList.add(ya), this._element.classList.add(Wc), this._queueCallback(() => {
                        this._element.classList.remove(Wc), D.trigger(this._element, qP), this._maybeScheduleHide()
                    }, this._element, this._config.animation))
                }
                hide() {
                    this._element.classList.contains(ya) && !D.trigger(this._element, jP).defaultPrevented && (this._element.classList.add(Wc), this._queueCallback(() => {
                        this._element.classList.add("hide"), this._element.classList.remove(Wc), this._element.classList.remove(ya), D.trigger(this._element, UP)
                    }, this._element, this._config.animation))
                }
                dispose() {
                    this._clearTimeout(), this._element.classList.contains(ya) && this._element.classList.remove(ya), super.dispose()
                }
                _getConfig(e) {
                    return e = G(G(G({}, MC), qe.getDataAttributes(this._element)), "object" == typeof e && e ? e : {}), Fn("toast", e, this.constructor.DefaultType), e
                }
                _maybeScheduleHide() {
                    !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                        this.hide()
                    }, this._config.delay))
                }
                _onInteraction(e, n) {
                    switch (e.type) {
                        case "mouseover":
                        case "mouseout":
                            this._hasMouseInteraction = n;
                            break;
                        case "focusin":
                        case "focusout":
                            this._hasKeyboardInteraction = n
                    }
                    if (n) return void this._clearTimeout();
                    const s = e.relatedTarget;
                    this._element === s || this._element.contains(s) || this._maybeScheduleHide()
                }
                _setListeners() {
                    D.on(this._element, VP, e => this._onInteraction(e, !0)), D.on(this._element, BP, e => this._onInteraction(e, !1)), D.on(this._element, $P, e => this._onInteraction(e, !0)), D.on(this._element, HP, e => this._onInteraction(e, !1))
                }
                _clearTimeout() {
                    clearTimeout(this._timeout), this._timeout = null
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const n = qc.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                            n[e](this)
                        }
                    })
                }
            }

            function GP(t, e) {
                if (1 & t && (i(0, "div", 7), a(1), r()), 2 & t) {
                    const n = Ht();
                    sn(1), dh(n.counter)
                }
            }

            function YP(t, e) {
                if (1 & t && h(0, "img", 11), 2 & t) {
                    const n = Ht(2).index,
                        s = Ht();
                    So("object-fit", s.objectFit), $t("src", s.getImage(n).image.path, pl)
                }
            }

            function XP(t, e) {
                if (1 & t && (i(0, "div", 9), Ei(1, YP, 1, 3, "img", 10), r()), 2 & t) {
                    const n = Ht().index,
                        s = Ht();
                    So("width", s.getCellWidth() + "px")("border-radius", s.borderRadius + "px"), sn(1), $t("ngIf", s.getImage(n) && s.getImage(n).image)
                }
            }

            function QP(t, e) {
                1 & t && Ei(0, XP, 2, 5, "div", 8), 2 & t && $t("ngIf", e.index < Ht().cellLimit)
            }

            function ZP(t, e) {
                1 & t && h(0, "div", 14), 2 & t && wi("carousel-dot-active", e.index === Ht(2).activeDotIndex)
            }

            function JP(t, e) {
                if (1 & t && (i(0, "div", 12), Ei(1, ZP, 1, 2, "div", 13), r()), 2 & t) {
                    const n = Ht();
                    sn(1), $t("ngForOf", n.dotsArr)
                }
            }

            function eR(t, e) {
                if (1 & t) {
                    const n = w();
                    i(0, "div", 15), i(1, "div", 16), ei("click", function () {
                        return $u(n), Ht().prev()
                    }), r(), i(2, "div", 17), ei("click", function () {
                        return $u(n), Ht().next()
                    }), r(), r()
                }
                if (2 & t) {
                    const n = Ht();
                    wi("carousel-arrows-outside", n.arrowsOutside)("carousel-dark-arrows", "dark" === n.arrowsTheme), sn(1), wi("carousel-arrow-disabled", n.isPrevArrowDisabled()), sn(1), wi("carousel-arrow-disabled", n.isNextArrowDisabled())
                }
            }
            xc(qc), Gt(qc);
            const tR = ["*"];
            class nR {
                constructor(e) {
                    this.eventType = void 0, this.handlers = {}, this.startX = 0, this.startY = 0, this.lastTap = 0, this.doubleTapMinTimeout = 300, this.tapMinTimeout = 200, this.touchstartTime = 0, this.i = 0, this.isMousedown = !1, this._touchListeners = {
                        touchstart: "handleTouchstart",
                        touchmove: "handleTouchmove",
                        touchend: "handleTouchend"
                    }, this._mouseListeners = {
                        mousedown: "handleMousedown",
                        mousemove: "handleMousemove",
                        mouseup: "handleMouseup",
                        wheel: "handleWheel"
                    }, this._otherListeners = {
                        resize: "handleResize"
                    }, this.handleTouchstart = n => {
                        this.elementPosition = this.getElementPosition(), this.touchstartTime = (new Date).getTime(), void 0 === this.eventType && this.getTouchstartPosition(n), this.runHandler("touchstart", n)
                    }, this.handleTouchmove = n => {
                        switch (this.detectPan(n.touches) && this.runHandler("pan", n), this.detectPinch(n) && this.runHandler("pinch", n), this.detectLinearSwipe(n)) {
                            case "horizontal-swipe":
                                n.swipeType = "horizontal-swipe", this.runHandler("horizontal-swipe", n);
                                break;
                            case "vertical-swipe":
                                n.swipeType = "vertical-swipe", this.runHandler("vertical-swipe", n)
                        }(this.detectLinearSwipe(n) || "horizontal-swipe" === this.eventType || "vertical-swipe" === this.eventType) && this.handleLinearSwipe(n)
                    }, this.handleTouchend = n => {
                        const s = n.touches;
                        this.detectDoubleTap() && this.runHandler("double-tap", n), this.detectTap(), this.runHandler("touchend", n), this.eventType = "touchend", s && 0 === s.length && (this.eventType = void 0, this.i = 0)
                    }, this.handleMousedown = n => {
                        this.isMousedown = !0, this.elementPosition = this.getElementPosition(), this.touchstartTime = (new Date).getTime(), void 0 === this.eventType && this.getMousedownPosition(n), this.runHandler("mousedown", n)
                    }, this.handleMousemove = n => {
                        if (this.isMousedown) {
                            switch (this.runHandler("pan", n), this.detectLinearSwipe(n)) {
                                case "horizontal-swipe":
                                    n.swipeType = "horizontal-swipe", this.runHandler("horizontal-swipe", n);
                                    break;
                                case "vertical-swipe":
                                    n.swipeType = "vertical-swipe", this.runHandler("vertical-swipe", n)
                            }(this.detectLinearSwipe(n) || "horizontal-swipe" === this.eventType || "vertical-swipe" === this.eventType) && this.handleLinearSwipe(n)
                        }
                    }, this.handleMouseup = n => {
                        this.detectTap(), this.isMousedown = !1, this.runHandler("mouseup", n), this.eventType = void 0, this.i = 0
                    }, this.handleWheel = n => {
                        this.runHandler("wheel", n)
                    }, this.handleResize = n => {
                        this.runHandler("resize", n)
                    }, this.properties = e, this.element = this.properties.element, this.elementPosition = this.getElementPosition(), this.toggleEventListeners("addEventListener")
                }
                get touchListeners() {
                    return this.properties.touchListeners ? this.properties.touchListeners : this._touchListeners
                }
                get mouseListeners() {
                    return this.properties.mouseListeners ? this.properties.mouseListeners : this._mouseListeners
                }
                get otherListeners() {
                    return this.properties.otherListeners ? this.properties.otherListeners : this._otherListeners
                }
                destroy() {
                    this.toggleEventListeners("removeEventListener")
                }
                toggleEventListeners(e) {
                    let n;
                    for (var s in n = "mouse and touch" === this.properties.listeners ? Object.assign(this.touchListeners, this.mouseListeners) : this.detectTouchScreen() ? this.touchListeners : this.mouseListeners, this.properties.resize && (n = Object.assign(n, this.otherListeners)), n) {
                        const o = n[s];
                        "resize" === s ? ("addEventListener" === e && window.addEventListener(s, this[o], !1), "removeEventListener" === e && window.removeEventListener(s, this[o], !1)) : "mouseup" === s || "mousemove" === s ? ("addEventListener" === e && document.addEventListener(s, this[o], {
                            passive: !1
                        }), "removeEventListener" === e && document.removeEventListener(s, this[o], !1)) : ("addEventListener" === e && this.element.addEventListener(s, this[o], !1), "removeEventListener" === e && this.element.removeEventListener(s, this[o], !1))
                    }
                }
                addEventListeners(e) {
                    window.addEventListener(e, this[this._mouseListeners[e]], !1)
                }
                removeEventListeners(e) {
                    window.removeEventListener(e, this[this._mouseListeners[e]], !1)
                }
                handleLinearSwipe(e) {
                    this.i++, this.i > 3 && (this.eventType = this.getLinearSwipeType(e)), "horizontal-swipe" === this.eventType && this.runHandler("horizontal-swipe", e), "vertical-swipe" === this.eventType && this.runHandler("vertical-swipe", e)
                }
                runHandler(e, n) {
                    this.handlers[e] && this.handlers[e](n)
                }
                detectPan(e) {
                    return 1 === e.length && !this.eventType || "pan" === this.eventType
                }
                detectDoubleTap() {
                    if (null != this.eventType) return;
                    const e = (new Date).getTime(),
                        n = e - this.lastTap;
                    if (clearTimeout(this.doubleTapTimeout), n < this.doubleTapMinTimeout && n > 0) return !0;
                    this.doubleTapTimeout = setTimeout(() => {
                        clearTimeout(this.doubleTapTimeout)
                    }, this.doubleTapMinTimeout), this.lastTap = e
                }
                detectTap() {
                    if (null != this.eventType) return;
                    const n = (new Date).getTime() - this.touchstartTime;
                    n > 0 && this.runHandler(n < this.tapMinTimeout ? "tap" : "longtap", event)
                }
                detectPinch(e) {
                    return 2 === e.touches.length && void 0 === this.eventType || "pinch" === this.eventType
                }
                detectLinearSwipe(e) {
                    const n = e.touches;
                    if (n) {
                        if (1 === n.length && !this.eventType || "horizontal-swipe" === this.eventType || "vertical-swipe" === this.eventType) return this.getLinearSwipeType(e)
                    } else if (!this.eventType || "horizontal-swipe" === this.eventType || "vertical-swipe" === this.eventType) return this.getLinearSwipeType(e)
                }
                getLinearSwipeType(e) {
                    if ("horizontal-swipe" !== this.eventType && "vertical-swipe" !== this.eventType) {
                        const n = Math.abs(this.moveLeft(0, e) - this.startX);
                        return 3 * Math.abs(this.moveTop(0, e) - this.startY) > n ? "vertical-swipe" : "horizontal-swipe"
                    }
                    return this.eventType
                }
                getElementPosition() {
                    return this.element.getBoundingClientRect()
                }
                getTouchstartPosition(e) {
                    this.startX = e.touches[0].clientX - this.elementPosition.left, this.startY = e.touches[0].clientY - this.elementPosition.top
                }
                getMousedownPosition(e) {
                    this.startX = e.clientX - this.elementPosition.left, this.startY = e.clientY - this.elementPosition.top
                }
                moveLeft(e, n) {
                    const s = n.touches;
                    return s ? s[e].clientX - this.elementPosition.left : n.clientX - this.elementPosition.left
                }
                moveTop(e, n) {
                    const s = n.touches;
                    return s ? s[e].clientY - this.elementPosition.top : n.clientY - this.elementPosition.top
                }
                detectTouchScreen() {
                    var e = " -webkit- -moz- -o- -ms- ".split(" ");
                    if ("ontouchstart" in window) return !0;
                    var s = ["(", e.join("touch-enabled),("), "heartz", ")"].join("");
                    return window.matchMedia(s).matches
                }
                on(e, n) {
                    e && (this.handlers[e] = n)
                }
            }
            class iR {
                constructor(e, n, s, o, l) {
                    this.properties = e, this.utils = n, this.cells = s, this.container = o, this.slide = l, this.isSlideLengthLimited = !1, this.isContentImages = !0, this.isLazyLoad = !0, this.isContainerLocked = !0, this.alignCells = "left", this.initialContainerPosition = 0, this.containerPullLimit = 100, this.handleTouchstart = c => {
                        this.container.handleTouchstart(), this.slide.handleTouchstart(c)
                    }, this.handleHorizontalSwipe = c => {
                        this.container.handleHorizontalSwipe()
                    }, this.handleTouchend = c => {
                        this.properties.freeScroll ? this.container.handleTouchend() : (this.container.handleTouchend(!0), this.slide.handleTouchend(c))
                    }, this.isNextArrowDisabled = () => this.slide.isNextArrowDisabled(), this.isPrevArrowDisabled = () => this.slide.isPrevArrowDisabled(), this.init()
                }
                get cellLength() {
                    return this.cells.cellLength
                }
                get cellLengthInLightDOMMode() {
                    if (this.images) {
                        let e = this.numberOfVisibleCells + 2 * this.overflowCellsLimit;
                        return e > this.images.length && (e = this.images.length), e
                    }
                    return this.cellLength
                }
                get lastCellIndex() {
                    return this.images.length ? this.images.length - 1 : this.cells.cellLength - 1
                }
                get overflowCellsLimit() {
                    return this.utils.overflowCellsLimit
                }
                get cellLimit() {
                    if (this.isLightDOM) {
                        let e = this.numberOfVisibleCells + 2 * this.overflowCellsLimit;
                        return e < this.numberOfVisibleCells && (e = this.numberOfVisibleCells), e
                    }
                    return this.properties.images.length
                }
                get isLightDOM() {
                    return this.properties.lightDOM || this.properties.loop
                }
                get images() {
                    return this.properties.images
                }
                get margin() {
                    return this.properties.margin
                }
                get minSwipeDistance() {
                    return this.properties.minSwipeDistance
                }
                get transitionDuration() {
                    return this.properties.transitionDuration
                }
                get transitionTimingFunction() {
                    return this.properties.transitionTimingFunction
                }
                get fullCellWidth() {
                    return this.properties.cellWidth + this.margin
                }
                get numberOfVisibleCells() {
                    return this.utils.numberOfVisibleCells
                }
                get lapCounter() {
                    return Math.floor(this.slide.counter / this.cellLengthInLightDOMMode)
                }
                get slideCounter() {
                    return this.slide.counter
                }
                updateProperties(e) {
                    this.properties = e
                }
                init() {
                    this.cellsElement = this.properties.cellsElement, this.visibleWidth = this.properties.visibleWidth || this.cellsElement.parentElement.clientWidth
                }
                destroy() {
                    clearInterval(this.autoplayId)
                }
                lineUpCells() {
                    this.cells.lineUp()
                }
                handleTransitionend() {
                    this.slide.handleTransitionend()
                }
                getImage(e) {
                    return this.cells.getImage(e)
                }
                next(e = 1) {
                    this.isNextArrowDisabled() || this.slide.next(e)
                }
                prev(e = 1) {
                    this.slide.prev(e)
                }
                autoplay() {
                    this.autoplayId = setInterval(() => {
                        this.next()
                    }, this.properties.autoplayInterval)
                }
                stopAutoplay() {
                    this.autoplayId && clearInterval(this.autoplayId)
                }
            }
            class rR {
                constructor(e, n, s) {
                    this.carouselProperties = e, this.utils = n, this.cells = s, this.newPositionIndex = 0, this.isPositionCorrection = !1, this.initialPositionX = 0, this.initialElementPositionX = 0, this.isLocked = !0, this.pullLimit = 100, this.startTime = 0, this.startX = 0, this.moveX = 0, this.isSwipeInProgress = !1, this.init()
                }
                get visibleWidth() {
                    return this.utils.visibleWidth
                }
                get overflowCellsLimit() {
                    return this.utils.overflowCellsLimit
                }
                get images() {
                    return this.carouselProperties.images
                }
                get element() {
                    return this.carouselProperties.cellsElement
                }
                get freeScroll() {
                    return this.carouselProperties.freeScroll
                }
                get fullCellWidth() {
                    return this.carouselProperties.cellWidth + this.carouselProperties.margin
                }
                get numberOfVisibleCells() {
                    return this.utils.numberOfVisibleCells
                }
                get transitionDuration() {
                    return this.carouselProperties.transitionDuration
                }
                get transitionTimingFunction() {
                    return this.carouselProperties.transitionTimingFunction
                }
                get cellLength() {
                    return this.images ? this.images.length : this.cells.cellLength
                }
                get cellLengthInLightDOMMode() {
                    if (this.images) {
                        let e = this.numberOfVisibleCells + 2 * this.overflowCellsLimit;
                        return e > this.images.length && (e = this.images.length), e
                    }
                    return this.cellLength
                }
                get tooFewCells() {
                    return this.numberOfVisibleCells > this.cellLength
                }
                get disabled() {
                    return this.tooFewCells
                }
                get margin() {
                    return this.carouselProperties.margin
                }
                get isLightDOM() {
                    return this.carouselProperties.lightDOM || this.carouselProperties.loop
                }
                updateProperties(e) {
                    this.carouselProperties = e
                }
                init() {
                    this.setWidth()
                }
                handleTouchstart() {
                    this.startX = this.utils.getStartX(event), this.startTime = (new Date).getTime(), this.initialElementPositionX = this.getInitialElementPositionX()
                }
                handleHorizontalSwipe() {
                    this.disabled || (this.isSwipeInProgress || (this.startX = this.utils.getStartX(event), this.startTime = (new Date).getTime(), this.initialElementPositionX = this.getInitialElementPositionX()), this.isSwipeInProgress = !0, this.moveX = this.utils.getMoveX(event), this.move())
                }
                handleTouchend(e = !1) {
                    if (!this.disabled) {
                        if (e) return void(this.isSwipeInProgress = !1);
                        this.isSwipeInProgress = !1, this.finishMoving(), this.clearInitialValues()
                    }
                }
                move() {
                    let e = this.getMovePositionX();
                    const n = this.detectPulled(),
                        s = this.getDirection();
                    n && ("left" === n.edge && "right" === s || "right" === n.edge && "left" === s) && (e = this.slowdownOnPull(e)), this.transformPositionX(e, 0), this.freeScroll && (this.initialPositionX = e), n && ("left" === n.edge && n.overflowX > this.pullLimit && (this.initialPositionX = 0), "right" === n.edge && n.overflowX > this.pullLimit && (this.initialPositionX = e))
                }
                getMovePositionX() {
                    const e = this.getDistance();
                    return this.initialElementPositionX - e
                }
                getDistance() {
                    return this.startX - this.moveX
                }
                detectPulled() {
                    const e = this.getCurrentPositionX();
                    return e > 0 ? {
                        edge: "left",
                        positionX: e,
                        overflowX: Math.abs(e)
                    } : e < this.getEndPosition() ? {
                        edge: "right",
                        positionX: e,
                        overflowX: Math.abs(e - this.getEndPosition())
                    } : void 0
                }
                slowdownOnPull(e) {
                    let n = Math.abs(this.getDistance());
                    const s = this.getEndPosition(),
                        o = this.detectPulled();
                    if (!o) return 0;
                    const l = 3 + o.overflowX / 50;
                    let c = 0;
                    if ("left" === o.edge) {
                        this.initialElementPositionX < 0 && (n -= Math.abs(this.initialElementPositionX));
                        const u = n / l;
                        c = u, this.initialElementPositionX > 0 && (c = this.initialElementPositionX + u), c > this.pullLimit && (c = this.pullLimit)
                    }
                    if ("right" === o.edge) {
                        const u = s + (this.initialElementPositionX - n - s) / l,
                            d = this.getWidth();
                        c = u, this.initialElementPositionX < -(d - this.visibleWidth) && (c = d - this.visibleWidth + this.initialElementPositionX + u), c < s - this.pullLimit && (c = s - this.pullLimit)
                    }
                    return c
                }
                finishMoving() {
                    const e = this.getMovePositionX();
                    let n = 0;
                    this.freeScroll && (n = this.getInertia()), n = this.getAlignedPositionOnPull(n), this.transformPositionX(n), this.setInitialPosition(e)
                }
                getInertia() {
                    const e = this.getDistance(),
                        s = (new Date).getTime() - this.startTime;
                    return this.initialPositionX - e / s * 100
                }
                getAlignedPositionOnPull(e) {
                    const n = this.getDirection();
                    if ("left" === n) {
                        let s = this.getEndPosition();
                        if (e < s) return s
                    }
                    return "right" === n && e > 0 ? 0 : e
                }
                getCurrentPositionX() {
                    const e = this.element.parentElement.getBoundingClientRect();
                    return this.element.getBoundingClientRect().left - e.left
                }
                getEndPosition() {
                    if (this.isLightDOM) return -(this.cells.imageUtils.getImages().length * this.fullCellWidth - this.visibleWidth - this.margin); {
                        const e = this.getWidth();
                        return this.element.parentElement.clientWidth - e
                    }
                }
                transformPositionX(e, n = this.transitionDuration) {
                    void 0 !== e && (this.element.style.transition = "transform " + n + "ms " + this.transitionTimingFunction, this.element.style.transform = "translateX(" + e + "px)")
                }
                getWidth() {
                    let e = this.cellLengthInLightDOMMode * this.fullCellWidth,
                        n = this.cellLength * this.fullCellWidth;
                    return n < e && (e = n), this.isLightDOM ? e : n
                }
                setWidth() {
                    const e = this.getWidth();
                    this.element.style.width = e + "px"
                }
                setInitialPosition(e) {
                    this.initialPositionX = e
                }
                getElementPosition() {
                    return this.element.getBoundingClientRect()
                }
                getInitialElementPositionX() {
                    const e = this.utils.getCarouselElementPosition().left;
                    return this.getElementPosition().left - e
                }
                clearInitialValues() {
                    this.startX = this.moveX = 0
                }
                getDirection() {
                    const e = Math.sign(this.startX - this.moveX);
                    return -1 === e ? "right" : 1 === e ? "left" : void 0
                }
            }
            class sR {
                constructor(e) {
                    this.cellStack = [], this.element = e
                }
                getImages() {
                    return this.cellStack.filter(this.filter)
                }
                filter(e) {
                    return void 0 !== e.img
                }
            }
            class oR {
                constructor(e, n) {
                    this.carouselProperties = e, this.utils = n, this.counter = 0, this.imageUtils = new sR(this.element), this.init(e)
                }
                get images() {
                    return this.carouselProperties.images
                }
                get cellLength() {
                    return this.cells ? this.cells.length : 0
                }
                get fullCellWidth() {
                    return this.carouselProperties.cellWidth + this.carouselProperties.margin
                }
                get cellLengthInLightDOMMode() {
                    if (this.images) {
                        let e = this.numberOfVisibleCells + 2 * this.overflowCellsLimit;
                        return e > this.images.length && (e = this.images.length), e
                    }
                    return this.cellLength
                }
                get numberOfVisibleCells() {
                    return this.utils.numberOfVisibleCells
                }
                get overflowCellsLimit() {
                    return this.utils.overflowCellsLimit
                }
                get isLightDOM() {
                    return this.carouselProperties.lightDOM || this.carouselProperties.loop
                }
                updateProperties(e) {
                    this.carouselProperties = e
                }
                lineUp() {
                    const e = this.element ? this.element.children : [];
                    this.imageUtils.cellStack = [];
                    for (var n = 0; n < e.length; n++) {
                        let s = e[n],
                            o = this.getCellPositionInContainer(n);
                        s.style.transform = "translateX(" + o + "px)", s.style.width = this.carouselProperties.cellWidth + "px", this.getImage(n) && this.imageUtils.cellStack.push({
                            index: n,
                            positionX: o,
                            img: this.getImage(n).image
                        })
                    }
                }
                ifSequenceOfCellsIsChanged() {
                    return "translateX(0px)" !== this.element.children[0].style.transform
                }
                getCellPositionInContainer(e) {
                    return this.getCellIndexInContainer(e) * this.fullCellWidth
                }
                getCellIndexInContainer(e) {
                    let n;
                    if (!this.isLightDOM) return e;
                    let s = this.cellLengthInLightDOMMode,
                        o = this.counter - this.overflowCellsLimit;
                    return o > s && (o %= s), o < 0 ? e : (n = e - o, n < 0 && (n = s + n), n)
                }
                getImage(e) {
                    if (!this.images) return;
                    let n = this.getImageIndex(e),
                        s = this.images[n];
                    return s && !s.type && (s.type = "image"), {
                        image: this.images[n],
                        imageIndex: n
                    }
                }
                getImageIndex(e) {
                    const n = this.getCellIndexInContainer(e);
                    let s;
                    return this.counter > this.overflowCellsLimit ? (s = n + (this.counter - this.overflowCellsLimit), this.images && this.carouselProperties.loop && (s %= this.images.length)) : s = e, s
                }
                setCounter(e) {
                    this.counter = e
                }
                init(e) {
                    this.element = this.carouselProperties.cellsElement, this.cells = this.element.children, this.visibleWidth = this.carouselProperties.visibleWidth || this.element.parentElement.clientWidth
                }
            }
            class aR {
                constructor(e, n, s, o) {
                    this.carouselProperties = e, this.utils = n, this.cells = s, this.container = o, this.slideLength = 0, this.isSlideInProgress = !1, this.counter = 0, this._counter = 0, this.distance = 0, this.distanceAbs = 0, this.isNotClickOnArrow = !1, this.initialPositionX = 0, this.currentPositionX = 0, this.isSlideLengthLimited = !1, this.init()
                }
                get fullCellWidth() {
                    return this.carouselProperties.cellWidth + this.carouselProperties.margin
                }
                get margin() {
                    return this.carouselProperties.margin
                }
                get minSwipeDistance() {
                    return this.carouselProperties.minSwipeDistance
                }
                get numberOfVisibleCells() {
                    return this.utils.numberOfVisibleCells
                }
                get visibleCellsOverflowContainer() {
                    return this.utils.visibleCellsOverflowContainer
                }
                get fixedContainerPosition() {
                    return -this.overflowCellsLimit * this.fullCellWidth
                }
                get overflowCellsLimit() {
                    return this.utils.overflowCellsLimit
                }
                get images() {
                    return this.carouselProperties.images
                }
                get cellLength() {
                    return this.isLightDOM ? this.cells.cellLengthInLightDOMMode : this.images ? this.images.length : this.cells.cellLength
                }
                get isLightDOM() {
                    return this.carouselProperties.lightDOM || this.carouselProperties.loop
                }
                updateProperties(e) {
                    this.carouselProperties = e, this.setVisibleWidth()
                }
                init() {
                    this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth
                }
                handleTouchstart() {
                    this.isNotClickOnArrow = !0, this.isSlideLengthLimited = !1, this.isSlideInProgress || (this.initialPositionX = this.container.getCurrentPositionX())
                }
                handleTouchend() {
                    !this.isNotClickOnArrow || (this.currentPositionX = this.container.getCurrentPositionX(), this.distanceAbs = Math.abs(this.initialPositionX - this.currentPositionX), this.distance = this.initialPositionX - this.currentPositionX, this.direction = this.getDirection(), this.isNotClickOnArrow = !1, this.handleSlide())
                }
                handleTransitionend() {
                    this.setCounter(), this.isSlideInProgress = !1, this.isLightDOM && this.alignContainerFast()
                }
                handleSlide(e) {
                    let s;
                    if (!(e && this.isSlideInProgress || !this.direction)) {
                        if (e ? (this.slideLength = this.limitSlideLength(e), this.isSlideInProgress || (this.initialPositionX = this.container.getCurrentPositionX())) : this.slideLength = this.getSlideLength(this.distanceAbs), this._counter = this.getPreliminaryCounter(), "left" === this.direction) {
                            e || (this.slideLength = this.limitSlideLength(this.getSlideLength(this.distanceAbs))), this._counter = this.getPreliminaryCounter();
                            let o = this.isSlidesEnd(this._counter);
                            s = this.getPositionByIndex(this._counter), o && (this._counter = this.counter, s = this.getPositionByIndex(this.counter), this.slideLength = 0)
                        }
                        "right" === this.direction && (e || (this.slideLength = this.getSlideLength(this.distanceAbs)), this._counter < 0 && (this._counter = this.counter, this.slideLength = this.counter), s = this.getPositionByIndex(this.counter - this.slideLength)), this.container.getCurrentPositionX() !== s && (this.isSlideInProgress = !0, this.container.transformPositionX(s))
                    }
                }
                next(e = 1) {
                    this.direction = "left", this.handleSlide(e)
                }
                prev(e = 1) {
                    this.direction = "right", this.handleSlide(e)
                }
                select(e) {
                    e > this.cellLength - 1 || (e > this.counter && this.next(e - this.counter), e < this.counter && this.prev(this.counter - e))
                }
                getPreliminaryCounter() {
                    return "left" === this.direction ? this.counter + this.slideLength : "right" === this.direction ? this.counter - this.slideLength : 0
                }
                limitSlideLength(e) {
                    if (e > 1)
                        for (var n = 0; n < e; n++)
                            if (!this.isSlidesEnd(this.counter + (e - n))) {
                                e -= n, this.isSlideLengthLimited = n > 0;
                                break
                            } return e
                }
                getPositionCorrection(e) {
                    let n = 0,
                        s = this.isLastSlide(e);
                    return this.carouselProperties.loop || "right" === this.direction ? 0 : ((this.isSlideLengthLimited || s) && (this.visibleWidth < this.cells.cellLengthInLightDOMMode * this.fullCellWidth && (n = -(this.numberOfVisibleCells * this.fullCellWidth - this.visibleWidth - this.margin)), n >= -this.margin && (n = 0)), n)
                }
                getSlideLength(e) {
                    this.isLastSlide(this.counter) && "right" === this.direction && (e += this.visibleWidth % this.fullCellWidth);
                    let s = Math.floor(e / this.fullCellWidth);
                    return e % this.fullCellWidth >= this.minSwipeDistance && s++, s
                }
                getDistanceAbs() {
                    return Math.abs(this.initialPositionX - this.currentPositionX)
                }
                getDirection() {
                    const e = Math.sign(this.initialPositionX - this.currentPositionX);
                    return -1 === e ? "right" : 1 === e ? "left" : void 0
                }
                isSlidesEnd(e) {
                    return !this.carouselProperties.loop && (this.images ? this.images.length : this.cells.cellLength) - e + (this.visibleCellsOverflowContainer ? 1 : 0) < this.numberOfVisibleCells
                }
                isLastSlide(e) {
                    return this.isSlidesEnd(e + 1)
                }
                setCounter() {
                    "left" === this.direction && (this.counter = this.counter + this.slideLength), "right" === this.direction && (this.counter = this.counter - this.slideLength)
                }
                getPositionByIndex(e) {
                    let s, n = this.getPositionCorrection(this.counter + this.slideLength);
                    return 0 !== n && (n += this.fullCellWidth), "right" === this.direction && (n = 0), s = this.isLightDOM && this.isLightDOMMode(e) || this.isLightDOM && this.ifLeftDOMModeAtEnd(e) ? this.getPositionWithoutCorrection(this.initialPositionX) - ((e - this.counter) * this.fullCellWidth - n) : -(e * this.fullCellWidth - n), s = this.provideSafePosition(s), s
                }
                provideSafePosition(e) {
                    const n = this.container.getEndPosition();
                    return "left" === this.direction && e > 0 && (e = 0), "right" === this.direction && e < n && (e = n), e
                }
                getPositionWithoutCorrection(e) {
                    let n = Math.round(e) % this.fullCellWidth;
                    return 0 !== n ? e - (this.fullCellWidth + n) : e
                }
                isNextArrowDisabled() {
                    return this.isLastSlide(this.counter) || !this.visibleCellsOverflowContainer && this.cellLength <= this.numberOfVisibleCells || this.visibleCellsOverflowContainer && this.cellLength < this.numberOfVisibleCells
                }
                isPrevArrowDisabled() {
                    return 0 === this.counter
                }
                alignContainerFast() {
                    if (this.isLightDOMMode(this.counter)) this.container.transformPositionX(this.fixedContainerPosition, 0), this.cells.setCounter(this.counter), this.cells.lineUp();
                    else if (this.ifLeftDOMModeToBeginning(this.counter)) this.cells.ifSequenceOfCellsIsChanged() && (this.container.transformPositionX(-this.counter * this.fullCellWidth, 0), this.cells.setCounter(this.counter), this.cells.lineUp());
                    else if (this.ifLeftDOMModeAtEnd(this.counter)) {
                        let e = this.container.getCurrentPositionX(),
                            n = this.container.getWidth();
                        if (this.isLastSlide(this.counter) && n + e >= this.visibleWidth) return;
                        let s = this.getPositionCorrection(this.counter);
                        0 !== s && (s += this.fullCellWidth), "right" === this.direction && (s = 0), this.container.transformPositionX(this.fixedContainerPosition + s, 0), this.cells.setCounter(this.counter), this.cells.lineUp()
                    }
                }
                isLightDOMMode(e) {
                    let n, s = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;
                    return !!this.isLightDOM && (e > this.overflowCellsLimit && "left" === this.direction && e <= s && (n = !0), e >= this.overflowCellsLimit && "right" === this.direction && e < s && (n = !0), this.counter > this.overflowCellsLimit && "left" === this.direction && this.counter <= s && (n = !0), this.counter >= this.overflowCellsLimit && "right" === this.direction && this.counter < s && (n = !0), n)
                }
                ifLeftDOMModeAtEnd(e) {
                    let n, s = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;
                    return e >= s && (n = !0), this.counter >= s && (n = !0), n
                }
                ifLeftDOMModeToBeginning(e) {
                    let n;
                    return e <= this.overflowCellsLimit && (n = !0), this.counter <= this.overflowCellsLimit && (n = !0), n
                }
                setVisibleWidth() {
                    this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth
                }
            }
            class lR {
                constructor(e) {
                    this.carouselProperties = e
                }
                get images() {
                    return this.carouselProperties.images
                }
                get margin() {
                    return this.carouselProperties.margin
                }
                get overflowCellsLimit() {
                    if (this.images && this.isImagesLessCellLimit) {
                        let e = Math.floor((this.images.length - this.numberOfVisibleCells) / 2);
                        return e < 0 && (e = 0), e
                    }
                    return this.carouselProperties.overflowCellsLimit
                }
                get isImagesLessCellLimit() {
                    return 2 * this.carouselProperties.overflowCellsLimit + this.numberOfVisibleCells > this.images.length
                }
                get numberOfVisibleCells() {
                    return Math.ceil(this.visibleWidth / this.fullCellWidth)
                }
                get visibleCellsOverflowContainer() {
                    return this.numberOfVisibleCells * this.fullCellWidth - this.margin > this.visibleWidth
                }
                get fullCellWidth() {
                    return this.carouselProperties.cellWidth + this.carouselProperties.margin
                }
                get visibleWidth() {
                    return this.carouselProperties.visibleWidth || this.carouselProperties.cellsElement.parentElement.clientWidth
                }
                updateProperties(e) {
                    this.carouselProperties = e
                }
                getStartX(e) {
                    const n = e.touches,
                        s = this.getCarouselElementPosition().left;
                    let o;
                    return o = n ? n[0].clientX - s : e.clientX - s, o
                }
                getMoveX(e) {
                    const n = e.touches,
                        s = this.getCarouselElementPosition().left;
                    return n ? n[0].clientX - s : e.clientX - s
                }
                getCarouselElementPosition() {
                    return this.carouselProperties.hostElement.getBoundingClientRect()
                }
            }
            let cR = (() => {
                    class t {
                        constructor(n, s) {
                            this.elementRef = n, this.ref = s, this.minTimeout = 30, this.isVideoPlaying = !1, this._isCounter = !1, this._cellWidth = 200, this._loop = !1, this._lightDOM = !1, this.isMoving = !1, this.isNgContent = !1, this.events = new Dt, this.height = 200, this.autoplay = !1, this.autoplayInterval = 5e3, this.pauseOnHover = !0, this.dots = !1, this.margin = 10, this.objectFit = "cover", this.minSwipeDistance = 10, this.transitionDuration = 200, this.transitionTimingFunction = "ease-out", this.counterSeparator = " / ", this.overflowCellsLimit = 3, this.listeners = "mouse and touch", this.cellsToScroll = 1, this.freeScroll = !1, this.arrows = !0, this.arrowsOutside = !1, this.arrowsTheme = "light", this.hostClassCarousel = !0, this.handleTouchstart = o => {
                                this.touches.addEventListeners("mousemove", "handleMousemove"), this.carousel.handleTouchstart(o), this.isMoving = !0
                            }, this.handleHorizontalSwipe = o => {
                                o.preventDefault(), this.carousel.handleHorizontalSwipe(o)
                            }, this.handleTouchend = o => {
                                this.carousel.handleTouchend(o), this.touches.removeEventListeners("mousemove", "handleMousemove"), this.isMoving = !1
                            }, this.handleTap = o => {
                                let c = Array.prototype.slice.call(this.cellsElement.children),
                                    u = o.srcElement.closest(".carousel-cell");
                                c.indexOf(u), c.indexOf(u)
                            }
                        }
                        get isContainerLocked() {
                            if (this.carousel) return this.carousel.isContainerLocked
                        }
                        get slideCounter() {
                            if (this.carousel) return this.carousel.slideCounter
                        }
                        get lapCounter() {
                            if (this.carousel) return this.carousel.lapCounter
                        }
                        get isLandscape() {
                            return window.innerWidth > window.innerHeight
                        }
                        get isSafari() {
                            const n = navigator.userAgent.toLowerCase();
                            if (-1 !== n.indexOf("safari")) return !(n.indexOf("chrome") > -1)
                        }
                        get counter() {
                            let n;
                            return n = this.loop ? this.slideCounter % this.cellLength : this.slideCounter, n + 1 + this.counterSeparator + this.cellLength
                        }
                        get cellsElement() {
                            return this.elementRef.nativeElement.querySelector(".carousel-cells")
                        }
                        get isArrows() {
                            return this.arrows && !this.freeScroll
                        }
                        get isCounter() {
                            return this._isCounter && this.cellLength > 1
                        }
                        get activeDotIndex() {
                            return this.slideCounter % this.cellLength
                        }
                        get cellLimit() {
                            if (this.carousel) return this.carousel.cellLimit
                        }
                        get carouselWidth() {
                            return this.elementRef.nativeElement.clientWidth
                        }
                        set images(n) {
                            this._images = n
                        }
                        get images() {
                            return this._images
                        }
                        set cellWidth(n) {
                            n && (this._cellWidth = n)
                        }
                        set isCounter(n) {
                            n && (this._isCounter = n)
                        }
                        set loop(n) {
                            n && (this._loop = n)
                        }
                        get loop() {
                            return !!this.images && this._loop
                        }
                        set lightDOM(n) {
                            n && (this._lightDOM = n)
                        }
                        get lightDOM() {
                            return !!this.images && this._lightDOM
                        }
                        onWindowResize(n) {
                            this.utils.visibleWidth !== this.savedCarouselWidth && this.resize()
                        }
                        onMousemove(n) {
                            this.autoplay && this.pauseOnHover && this.carousel.stopAutoplay()
                        }
                        onMouseleave(n) {
                            this.autoplay && this.pauseOnHover && this.carousel.autoplay()
                        }
                        ngOnInit() {
                            this.isNgContent = this.cellsElement.children.length > 0, this.touches = new nR({
                                element: this.cellsElement,
                                listeners: this.listeners,
                                mouseListeners: {
                                    mousedown: "handleMousedown",
                                    mouseup: "handleMouseup"
                                }
                            }), this.touches.on("touchstart", this.handleTouchstart), this.touches.on("horizontal-swipe", this.handleHorizontalSwipe), this.touches.on("touchend", this.handleTouchend), this.touches.on("mousedown", this.handleTouchstart), this.touches.on("mouseup", this.handleTouchend), this.touches.on("tap", this.handleTap), this.setDimensions()
                        }
                        ngAfterViewInit() {
                            this.initCarousel(), this.cellLength = this.getCellLength(), this.dotsArr = Array(this.cellLength).fill(1), this.ref.detectChanges(), this.carousel.lineUpCells(), this.savedCarouselWidth = this.carouselWidth, this.detectDomChanges()
                        }
                        ngOnChanges(n) {
                            (n.width || n.height || n.images) && (this.setDimensions(), this.initCarousel(), this.carousel.lineUpCells(), this.ref.detectChanges())
                        }
                        ngOnDestroy() {
                            this.touches.destroy()
                        }
                        initCarousel() {
                            this.carouselProperties = {
                                id: this.id,
                                cellsElement: this.elementRef.nativeElement.querySelector(".carousel-cells"),
                                hostElement: this.elementRef.nativeElement,
                                images: this.images,
                                cellWidth: this.getCellWidth(),
                                loop: this.loop,
                                autoplayInterval: this.autoplayInterval,
                                overflowCellsLimit: this.overflowCellsLimit,
                                visibleWidth: this.width,
                                margin: this.margin,
                                minSwipeDistance: this.minSwipeDistance,
                                transitionDuration: this.transitionDuration,
                                transitionTimingFunction: this.transitionTimingFunction,
                                videoProperties: this.videoProperties,
                                eventHandler: this.events,
                                freeScroll: this.freeScroll,
                                lightDOM: this.lightDOM
                            }, this.utils = new lR(this.carouselProperties), this.cells = new oR(this.carouselProperties, this.utils), this.container = new rR(this.carouselProperties, this.utils, this.cells), this.slide = new aR(this.carouselProperties, this.utils, this.cells, this.container), this.carousel = new iR(this.carouselProperties, this.utils, this.cells, this.container, this.slide), this.autoplay && this.carousel.autoplay()
                        }
                        resize() {
                            this.landscapeMode = this.isLandscape, this.savedCarouselWidth = this.carouselWidth, this.carouselProperties.cellWidth = this.getCellWidth(), this.cells.updateProperties(this.carouselProperties), this.carousel.updateProperties(this.carouselProperties), this.container.updateProperties(this.carouselProperties), this.slide.updateProperties(this.carouselProperties), this.utils.updateProperties(this.carouselProperties), this.carousel.lineUpCells(), this.slide.select(0), this.ref.detectChanges()
                        }
                        detectDomChanges() {
                            new MutationObserver(o => {
                                this.onDomChanges()
                            }).observe(this.cellsElement, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0
                            })
                        }
                        onDomChanges() {
                            this.cellLength = this.getCellLength(), this.carousel.lineUpCells(), this.ref.detectChanges()
                        }
                        setDimensions() {
                            this.hostStyleHeight = this.height + "px", this.hostStyleWidth = this.width + "px"
                        }
                        getImage(n) {
                            return this.carousel.getImage(n)
                        }
                        handleTransitionendCellContainer(n) {
                            "carousel-cells" === n.target.className && this.carousel.handleTransitionend()
                        }
                        getCellWidth() {
                            let n = this.carouselWidth;
                            return this.cellsToShow ? (n - (this.cellsToShow > 1 ? this.margin : 0) * (this.cellsToShow - 1)) / this.cellsToShow : "100%" === this._cellWidth ? n : this._cellWidth
                        }
                        next() {
                            this.carousel.next(this.cellsToScroll), this.carousel.stopAutoplay()
                        }
                        prev() {
                            this.carousel.prev(this.cellsToScroll), this.carousel.stopAutoplay()
                        }
                        isNextArrowDisabled() {
                            if (this.carousel) return this.carousel.isNextArrowDisabled()
                        }
                        isPrevArrowDisabled() {
                            if (this.carousel) return this.carousel.isPrevArrowDisabled()
                        }
                        getCellLength() {
                            return this.images ? this.images.length : this.cellsElement.children.length
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)(N(ht), N($l))
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["carousel"],
                            ["", "carousel", ""]
                        ],
                        hostVars: 6,
                        hostBindings: function (n, s) {
                            1 & n && ei("resize", function (l) {
                                return s.onWindowResize(l)
                            }, !1, kg)("mousemove", function (l) {
                                return s.onMousemove(l)
                            })("mouseleave", function (l) {
                                return s.onMouseleave(l)
                            }), 2 & n && (So("height", s.hostStyleHeight)("width", s.hostStyleWidth), wi("carousel", s.hostClassCarousel))
                        },
                        inputs: {
                            height: "height",
                            autoplay: "autoplay",
                            autoplayInterval: "autoplayInterval",
                            pauseOnHover: "pauseOnHover",
                            dots: "dots",
                            margin: "margin",
                            objectFit: "objectFit",
                            minSwipeDistance: "minSwipeDistance",
                            transitionDuration: "transitionDuration",
                            transitionTimingFunction: "transitionTimingFunction",
                            counterSeparator: "counterSeparator",
                            overflowCellsLimit: "overflowCellsLimit",
                            listeners: "listeners",
                            cellsToScroll: "cellsToScroll",
                            freeScroll: "freeScroll",
                            arrows: "arrows",
                            arrowsOutside: "arrowsOutside",
                            arrowsTheme: "arrowsTheme",
                            isCounter: ["counter", "isCounter"],
                            images: "images",
                            cellWidth: "cellWidth",
                            loop: "loop",
                            lightDOM: "lightDOM",
                            id: "id",
                            width: "width",
                            borderRadius: "borderRadius",
                            videoProperties: "videoProperties",
                            cellsToShow: "cellsToShow"
                        },
                        outputs: {
                            events: "events"
                        },
                        features: [pi],
                        ngContentSelectors: tR,
                        decls: 8,
                        vars: 6,
                        consts: [
                            ["class", "carousel-counter", 4, "ngIf"],
                            [1, "carousel-container"],
                            [1, "carousel-cells", 3, "transitionend"],
                            ["cells", ""],
                            ["ngFor", "", 3, "ngForOf"],
                            ["class", "carousel-dots", 4, "ngIf"],
                            ["class", "carousel-arrows", 3, "carousel-arrows-outside", "carousel-dark-arrows", 4, "ngIf"],
                            [1, "carousel-counter"],
                            ["class", "carousel-cell", 3, "width", "border-radius", 4, "ngIf"],
                            [1, "carousel-cell"],
                            ["draggable", "false", 3, "src", "object-fit", 4, "ngIf"],
                            ["draggable", "false", 3, "src"],
                            [1, "carousel-dots"],
                            ["class", "carousel-dot", 3, "carousel-dot-active", 4, "ngFor", "ngForOf"],
                            [1, "carousel-dot"],
                            [1, "carousel-arrows"],
                            [1, "carousel-arrow", "carousel-arrow-prev", 3, "click"],
                            [1, "carousel-arrow", "carousel-arrow-next", 3, "click"]
                        ],
                        template: function (n, s) {
                            1 & n && (function (t) {
                                const e = w()[16][6];
                                if (!e.projection) {
                                    const s = e.projection = yi(t ? t.length : 1, null),
                                        o = s.slice();
                                    let l = e.child;
                                    for (; null !== l;) {
                                        const c = t ? fD(l, t) : 0;
                                        null !== c && (o[c] ? o[c].projectionNext = l : s[c] = l, o[c] = l), l = l.next
                                    }
                                }
                            }(), Ei(0, GP, 2, 1, "div", 0), i(1, "div", 1), i(2, "div", 2, 3), ei("transitionend", function (l) {
                                return s.handleTransitionendCellContainer(l)
                            }), function (t, e = 0, n) {
                                const s = w(),
                                    o = J(),
                                    l = Gr(o, 20 + t, 16, null, n || null);
                                null === l.projection && (l.projection = e), ju(), 64 != (64 & l.flags) && function (t, e, n) {
                                    em(e[q], 0, e, n, Wg(t, n, e), Gg(n.parent || e[6], n, e))
                                }(o, s, l)
                            }(4), Ei(5, QP, 1, 1, "ng-template", 4), r(), Ei(6, JP, 2, 1, "div", 5), r(), Ei(7, eR, 3, 8, "div", 6)), 2 & n && ($t("ngIf", s.isCounter), sn(1), wi("carousel-moving", s.isMoving), sn(4), $t("ngForOf", s.images), sn(1), $t("ngIf", s.dots), sn(1), $t("ngIf", s.isArrows))
                        },
                        directives: [f_, d_],
                        styles: ["[_nghost-%COMP%]{position:relative;display:block;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;user-select:none;z-index:10000;transform-origin:top left;box-sizing:border-box}[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:100%;cursor:grab}[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%]{cursor:grabbing}[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%]{text-align:right;position:absolute;z-index:30;transition:opacity .2s;top:8px;right:24px;border-radius:13px;background-color:rgba(23,37,68,.3);font-size:11px;color:#fff;padding:5px 7px;line-height:normal}[_nghost-%COMP%]     .carousel-cells{transition:transform .2s;width:100%;height:100%;display:block;will-change:transform}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell{width:100%;height:100%;position:absolute;overflow:hidden}[_nghost-%COMP%]     .carousel-cells .carousel-cell img, [_nghost-%COMP%]     .carousel-cells .carousel-cell video{width:100%;height:100%;position:relative;object-fit:contain}[_nghost-%COMP%]     .carousel-cells .carousel-cell img.swiper-hide{display:none}[_nghost-%COMP%]     .carousel-cells .carousel-cell .carousel-play{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:50%;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:-60px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:-60px}[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{filter:invert(1)}[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;z-index:10;text-align:center}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%]{display:inline-block;border:2px solid #fff;border-radius:100px;margin:4px;width:8px;height:8px}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot-active[_ngcontent-%COMP%]{background-color:#fff}"]
                    }), t
                })(),
                uR = (() => {
                    class t {}
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275mod = hi({
                        type: t
                    }), t.\u0275inj = En({
                        providers: [],
                        imports: [
                            [y_]
                        ]
                    }), t
                })();

            function U(...t) {
                let e = t[t.length - 1];
                return ka(e) ? (t.pop(), mu(t, e)) : bu(t)
            }
            class Qt extends qn {
                constructor(e) {
                    super(), this._value = e
                }
                get value() {
                    return this.getValue()
                }
                _subscribe(e) {
                    const n = super._subscribe(e);
                    return n && !n.closed && e.next(this._value), n
                }
                getValue() {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new Sr;
                    return this._value
                }
                next(e) {
                    super.next(this._value = e)
                }
            }
            class dR extends pe {
                notifyNext(e, n, s, o, l) {
                    this.destination.next(n)
                }
                notifyError(e, n) {
                    this.destination.error(e)
                }
                notifyComplete(e) {
                    this.destination.complete()
                }
            }
            class hR extends pe {
                constructor(e, n, s) {
                    super(), this.parent = e, this.outerValue = n, this.outerIndex = s, this.index = 0
                }
                _next(e) {
                    this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
                }
                _error(e) {
                    this.parent.notifyError(e, this), this.unsubscribe()
                }
                _complete() {
                    this.parent.notifyComplete(this), this.unsubscribe()
                }
            }

            function fR(t, e, n, s, o = new hR(t, n, s)) {
                if (!o.closed) return e instanceof me ? e.subscribe(o) : gu(e)(o)
            }
            const OC = {};
            class gR {
                constructor(e) {
                    this.resultSelector = e
                }
                call(e, n) {
                    return n.subscribe(new mR(e, this.resultSelector))
                }
            }
            class mR extends dR {
                constructor(e, n) {
                    super(e), this.resultSelector = n, this.active = 0, this.values = [], this.observables = []
                }
                _next(e) {
                    this.values.push(OC), this.observables.push(e)
                }
                _complete() {
                    const e = this.observables,
                        n = e.length;
                    if (0 === n) this.destination.complete();
                    else {
                        this.active = n, this.toRespond = n;
                        for (let s = 0; s < n; s++) this.add(fR(this, e[s], void 0, s))
                    }
                }
                notifyComplete(e) {
                    0 == (this.active -= 1) && this.destination.complete()
                }
                notifyNext(e, n, s) {
                    const o = this.values,
                        c = this.toRespond ? o[s] === OC ? --this.toRespond : this.toRespond : 0;
                    o[s] = n, 0 === c && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()))
                }
                _tryResultSelector(e) {
                    let n;
                    try {
                        n = this.resultSelector.apply(this, e)
                    } catch (s) {
                        return void this.destination.error(s)
                    }
                    this.destination.next(n)
                }
            }
            const Kc = (() => {
                function t() {
                    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            })();

            function Sp(...t) {
                return Gs(1)(U(...t))
            }
            const Fs = new me(t => t.complete());

            function Ap(t) {
                return t ? function (t) {
                    return new me(e => t.schedule(() => e.complete()))
                }(t) : Fs
            }

            function NC(t) {
                return new me(e => {
                    let n;
                    try {
                        n = t()
                    } catch (o) {
                        return void e.error(o)
                    }
                    return (n ? et(n) : Ap()).subscribe(e)
                })
            }

            function Vi(t, e) {
                return "function" == typeof e ? n => n.pipe(Vi((s, o) => et(t(s, o)).pipe(he((l, c) => e(s, l, o, c))))) : n => n.lift(new _R(t))
            }
            class _R {
                constructor(e) {
                    this.project = e
                }
                call(e, n) {
                    return n.subscribe(new bR(e, this.project))
                }
            }
            class bR extends yu {
                constructor(e, n) {
                    super(e), this.project = n, this.index = 0
                }
                _next(e) {
                    let n;
                    const s = this.index++;
                    try {
                        n = this.project(e, s)
                    } catch (o) {
                        return void this.destination.error(o)
                    }
                    this._innerSub(n)
                }
                _innerSub(e) {
                    const n = this.innerSubscription;
                    n && n.unsubscribe();
                    const s = new vu(this),
                        o = this.destination;
                    o.add(s), this.innerSubscription = _u(e, s), this.innerSubscription !== s && o.add(this.innerSubscription)
                }
                _complete() {
                    const {
                        innerSubscription: e
                    } = this;
                    (!e || e.closed) && super._complete(), this.unsubscribe()
                }
                _unsubscribe() {
                    this.innerSubscription = void 0
                }
                notifyComplete() {
                    this.innerSubscription = void 0, this.isStopped && super._complete()
                }
                notifyNext(e) {
                    this.destination.next(e)
                }
            }
            const xC = (() => {
                function t() {
                    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            })();

            function Ip(t) {
                return e => 0 === t ? Ap() : e.lift(new CR(t))
            }
            class CR {
                constructor(e) {
                    if (this.total = e, this.total < 0) throw new xC
                }
                call(e, n) {
                    return n.subscribe(new ER(e, this.total))
                }
            }
            class ER extends pe {
                constructor(e, n) {
                    super(e), this.total = n, this.count = 0
                }
                _next(e) {
                    const n = this.total,
                        s = ++this.count;
                    s <= n && (this.destination.next(e), s === n && (this.destination.complete(), this.unsubscribe()))
                }
            }

            function PC(t, e) {
                let n = !1;
                return arguments.length >= 2 && (n = !0),
                    function (o) {
                        return o.lift(new DR(t, e, n))
                    }
            }
            class DR {
                constructor(e, n, s = !1) {
                    this.accumulator = e, this.seed = n, this.hasSeed = s
                }
                call(e, n) {
                    return n.subscribe(new TR(e, this.accumulator, this.seed, this.hasSeed))
                }
            }
            class TR extends pe {
                constructor(e, n, s, o) {
                    super(e), this.accumulator = n, this._seed = s, this.hasSeed = o, this.index = 0
                }
                get seed() {
                    return this._seed
                }
                set seed(e) {
                    this.hasSeed = !0, this._seed = e
                }
                _next(e) {
                    if (this.hasSeed) return this._tryNext(e);
                    this.seed = e, this.destination.next(e)
                }
                _tryNext(e) {
                    const n = this.index++;
                    let s;
                    try {
                        s = this.accumulator(this.seed, e, n)
                    } catch (o) {
                        this.destination.error(o)
                    }
                    this.seed = s, this.destination.next(s)
                }
            }

            function Vs(t, e) {
                return function (s) {
                    return s.lift(new SR(t, e))
                }
            }
            class SR {
                constructor(e, n) {
                    this.predicate = e, this.thisArg = n
                }
                call(e, n) {
                    return n.subscribe(new AR(e, this.predicate, this.thisArg))
                }
            }
            class AR extends pe {
                constructor(e, n, s) {
                    super(e), this.predicate = n, this.thisArg = s, this.count = 0
                }
                _next(e) {
                    let n;
                    try {
                        n = this.predicate.call(this.thisArg, e, this.count++)
                    } catch (s) {
                        return void this.destination.error(s)
                    }
                    n && this.destination.next(e)
                }
            }

            function yr(t) {
                return function (n) {
                    const s = new IR(t),
                        o = n.lift(s);
                    return s.caught = o
                }
            }
            class IR {
                constructor(e) {
                    this.selector = e
                }
                call(e, n) {
                    return n.subscribe(new MR(e, this.selector, this.caught))
                }
            }
            class MR extends yu {
                constructor(e, n, s) {
                    super(e), this.selector = n, this.caught = s
                }
                error(e) {
                    if (!this.isStopped) {
                        let n;
                        try {
                            n = this.selector(e, this.caught)
                        } catch (l) {
                            return void super.error(l)
                        }
                        this._unsubscribeAndRecycle();
                        const s = new vu(this);
                        this.add(s);
                        const o = _u(n, s);
                        o !== s && this.add(o)
                    }
                }
            }

            function _a(t, e) {
                return Ue(t, e, 1)
            }

            function Mp(t) {
                return function (n) {
                    return 0 === t ? Ap() : n.lift(new OR(t))
                }
            }
            class OR {
                constructor(e) {
                    if (this.total = e, this.total < 0) throw new xC
                }
                call(e, n) {
                    return n.subscribe(new NR(e, this.total))
                }
            }
            class NR extends pe {
                constructor(e, n) {
                    super(e), this.total = n, this.ring = new Array, this.count = 0
                }
                _next(e) {
                    const n = this.ring,
                        s = this.total,
                        o = this.count++;
                    n.length < s ? n.push(e) : n[o % s] = e
                }
                _complete() {
                    const e = this.destination;
                    let n = this.count;
                    if (n > 0) {
                        const s = this.count >= this.total ? this.total : this.count,
                            o = this.ring;
                        for (let l = 0; l < s; l++) {
                            const c = n++ % s;
                            e.next(o[c])
                        }
                    }
                    e.complete()
                }
            }

            function RC(t = RR) {
                return e => e.lift(new xR(t))
            }
            class xR {
                constructor(e) {
                    this.errorFactory = e
                }
                call(e, n) {
                    return n.subscribe(new PR(e, this.errorFactory))
                }
            }
            class PR extends pe {
                constructor(e, n) {
                    super(e), this.errorFactory = n, this.hasValue = !1
                }
                _next(e) {
                    this.hasValue = !0, this.destination.next(e)
                }
                _complete() {
                    if (this.hasValue) return this.destination.complete(); {
                        let e;
                        try {
                            e = this.errorFactory()
                        } catch (n) {
                            e = n
                        }
                        this.destination.error(e)
                    }
                }
            }

            function RR() {
                return new Kc
            }

            function kC(t = null) {
                return e => e.lift(new kR(t))
            }
            class kR {
                constructor(e) {
                    this.defaultValue = e
                }
                call(e, n) {
                    return n.subscribe(new LR(e, this.defaultValue))
                }
            }
            class LR extends pe {
                constructor(e, n) {
                    super(e), this.defaultValue = n, this.isEmpty = !0
                }
                _next(e) {
                    this.isEmpty = !1, this.destination.next(e)
                }
                _complete() {
                    this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                }
            }

            function Bs(t, e) {
                const n = arguments.length >= 2;
                return s => s.pipe(t ? Vs((o, l) => t(o, l, s)) : Ra, Ip(1), n ? kC(e) : RC(() => new Kc))
            }

            function Bi() {}

            function Mt(t, e, n) {
                return function (o) {
                    return o.lift(new VR(t, e, n))
                }
            }
            class VR {
                constructor(e, n, s) {
                    this.nextOrObserver = e, this.error = n, this.complete = s
                }
                call(e, n) {
                    return n.subscribe(new BR(e, this.nextOrObserver, this.error, this.complete))
                }
            }
            class BR extends pe {
                constructor(e, n, s, o) {
                    super(e), this._tapNext = Bi, this._tapError = Bi, this._tapComplete = Bi, this._tapError = s || Bi, this._tapComplete = o || Bi, Oa(n) ? (this._context = this, this._tapNext = n) : n && (this._context = n, this._tapNext = n.next || Bi, this._tapError = n.error || Bi, this._tapComplete = n.complete || Bi)
                }
                _next(e) {
                    try {
                        this._tapNext.call(this._context, e)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.next(e)
                }
                _error(e) {
                    try {
                        this._tapError.call(this._context, e)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.error(e)
                }
                _complete() {
                    try {
                        this._tapComplete.call(this._context)
                    } catch (e) {
                        return void this.destination.error(e)
                    }
                    return this.destination.complete()
                }
            }
            class HR {
                constructor(e) {
                    this.callback = e
                }
                call(e, n) {
                    return n.subscribe(new jR(e, this.callback))
                }
            }
            class jR extends pe {
                constructor(e, n) {
                    super(e), this.add(new be(n))
                }
            }
            class ai {
                constructor(e, n) {
                    this.id = e, this.url = n
                }
            }
            class Op extends ai {
                constructor(e, n, s = "imperative", o = null) {
                    super(e, n), this.navigationTrigger = s, this.restoredState = o
                }
                toString() {
                    return `NavigationStart(id: ${this.id}, url: '${this.url}')`
                }
            }
            class ba extends ai {
                constructor(e, n, s) {
                    super(e, n), this.urlAfterRedirects = s
                }
                toString() {
                    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
                }
            }
            class LC extends ai {
                constructor(e, n, s) {
                    super(e, n), this.reason = s
                }
                toString() {
                    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
                }
            }
            class UR extends ai {
                constructor(e, n, s) {
                    super(e, n), this.error = s
                }
                toString() {
                    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
                }
            }
            class WR extends ai {
                constructor(e, n, s, o) {
                    super(e, n), this.urlAfterRedirects = s, this.state = o
                }
                toString() {
                    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class qR extends ai {
                constructor(e, n, s, o) {
                    super(e, n), this.urlAfterRedirects = s, this.state = o
                }
                toString() {
                    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class KR extends ai {
                constructor(e, n, s, o, l) {
                    super(e, n), this.urlAfterRedirects = s, this.state = o, this.shouldActivate = l
                }
                toString() {
                    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
                }
            }
            class zR extends ai {
                constructor(e, n, s, o) {
                    super(e, n), this.urlAfterRedirects = s, this.state = o
                }
                toString() {
                    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class GR extends ai {
                constructor(e, n, s, o) {
                    super(e, n), this.urlAfterRedirects = s, this.state = o
                }
                toString() {
                    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class FC {
                constructor(e) {
                    this.route = e
                }
                toString() {
                    return `RouteConfigLoadStart(path: ${this.route.path})`
                }
            }
            class VC {
                constructor(e) {
                    this.route = e
                }
                toString() {
                    return `RouteConfigLoadEnd(path: ${this.route.path})`
                }
            }
            class YR {
                constructor(e) {
                    this.snapshot = e
                }
                toString() {
                    return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class XR {
                constructor(e) {
                    this.snapshot = e
                }
                toString() {
                    return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class QR {
                constructor(e) {
                    this.snapshot = e
                }
                toString() {
                    return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class ZR {
                constructor(e) {
                    this.snapshot = e
                }
                toString() {
                    return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class BC {
                constructor(e, n, s) {
                    this.routerEvent = e, this.position = n, this.anchor = s
                }
                toString() {
                    return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`
                }
            }
            const X = "primary";
            class JR {
                constructor(e) {
                    this.params = e || {}
                }
                has(e) {
                    return Object.prototype.hasOwnProperty.call(this.params, e)
                }
                get(e) {
                    if (this.has(e)) {
                        const n = this.params[e];
                        return Array.isArray(n) ? n[0] : n
                    }
                    return null
                }
                getAll(e) {
                    if (this.has(e)) {
                        const n = this.params[e];
                        return Array.isArray(n) ? n : [n]
                    }
                    return []
                }
                get keys() {
                    return Object.keys(this.params)
                }
            }

            function $s(t) {
                return new JR(t)
            }
            const $C = "ngNavigationCancelingError";

            function Np(t) {
                const e = Error("NavigationCancelingError: " + t);
                return e[$C] = !0, e
            }

            function tk(t, e, n) {
                const s = n.path.split("/");
                if (s.length > t.length || "full" === n.pathMatch && (e.hasChildren() || s.length < t.length)) return null;
                const o = {};
                for (let l = 0; l < s.length; l++) {
                    const c = s[l],
                        u = t[l];
                    if (c.startsWith(":")) o[c.substring(1)] = u;
                    else if (c !== u.path) return null
                }
                return {
                    consumed: t.slice(0, s.length),
                    posParams: o
                }
            }

            function $n(t, e) {
                const n = t ? Object.keys(t) : void 0,
                    s = e ? Object.keys(e) : void 0;
                if (!n || !s || n.length != s.length) return !1;
                let o;
                for (let l = 0; l < n.length; l++)
                    if (o = n[l], !HC(t[o], e[o])) return !1;
                return !0
            }

            function HC(t, e) {
                if (Array.isArray(t) && Array.isArray(e)) {
                    if (t.length !== e.length) return !1;
                    const n = [...t].sort(),
                        s = [...e].sort();
                    return n.every((o, l) => s[l] === o)
                }
                return t === e
            }

            function jC(t) {
                return Array.prototype.concat.apply([], t)
            }

            function UC(t) {
                return t.length > 0 ? t[t.length - 1] : null
            }

            function Ke(t, e) {
                for (const n in t) t.hasOwnProperty(n) && e(t[n], n)
            }

            function Hn(t) {
                return ah(t) ? t : Ml(t) ? et(Promise.resolve(t)) : U(t)
            }
            const rk = {
                    exact: function KC(t, e, n) {
                        if (!br(t.segments, e.segments) || !zc(t.segments, e.segments, n) || t.numberOfChildren !== e.numberOfChildren) return !1;
                        for (const s in e.children)
                            if (!t.children[s] || !KC(t.children[s], e.children[s], n)) return !1;
                        return !0
                    },
                    subset: zC
                },
                WC = {
                    exact: function (t, e) {
                        return $n(t, e)
                    },
                    subset: function (t, e) {
                        return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => HC(t[n], e[n]))
                    },
                    ignored: () => !0
                };

            function qC(t, e, n) {
                return rk[n.paths](t.root, e.root, n.matrixParams) && WC[n.queryParams](t.queryParams, e.queryParams) && !("exact" === n.fragment && t.fragment !== e.fragment)
            }

            function zC(t, e, n) {
                return GC(t, e, e.segments, n)
            }

            function GC(t, e, n, s) {
                if (t.segments.length > n.length) {
                    const o = t.segments.slice(0, n.length);
                    return !(!br(o, n) || e.hasChildren() || !zc(o, n, s))
                }
                if (t.segments.length === n.length) {
                    if (!br(t.segments, n) || !zc(t.segments, n, s)) return !1;
                    for (const o in e.children)
                        if (!t.children[o] || !zC(t.children[o], e.children[o], s)) return !1;
                    return !0
                } {
                    const o = n.slice(0, t.segments.length),
                        l = n.slice(t.segments.length);
                    return !!(br(t.segments, o) && zc(t.segments, o, s) && t.children[X]) && GC(t.children[X], e, l, s)
                }
            }

            function zc(t, e, n) {
                return e.every((s, o) => WC[n](t[o].parameters, s.parameters))
            }
            class _r {
                constructor(e, n, s) {
                    this.root = e, this.queryParams = n, this.fragment = s
                }
                get queryParamMap() {
                    return this._queryParamMap || (this._queryParamMap = $s(this.queryParams)), this._queryParamMap
                }
                toString() {
                    return ck.serialize(this)
                }
            }
            class Z {
                constructor(e, n) {
                    this.segments = e, this.children = n, this.parent = null, Ke(n, (s, o) => s.parent = this)
                }
                hasChildren() {
                    return this.numberOfChildren > 0
                }
                get numberOfChildren() {
                    return Object.keys(this.children).length
                }
                toString() {
                    return Gc(this)
                }
            }
            class Ca {
                constructor(e, n) {
                    this.path = e, this.parameters = n
                }
                get parameterMap() {
                    return this._parameterMap || (this._parameterMap = $s(this.parameters)), this._parameterMap
                }
                toString() {
                    return ZC(this)
                }
            }

            function br(t, e) {
                return t.length === e.length && t.every((n, s) => n.path === e[s].path)
            }
            class xp {}
            class YC {
                parse(e) {
                    const n = new yk(e);
                    return new _r(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment())
                }
                serialize(e) {
                    return `${`/${Ea(e.root,!0)}`}${function(t){const e=Object.keys(t).map(n=>{const s=t[n];return Array.isArray(s)?s.map(o=>`${Yc(n)}=${Yc(o)}`).join("&"):`${Yc(n)}=${Yc(s)}`}).filter(n=>!!n);return e.length?` ? $ {
                        e.join("&")
                    }
                    `:""}(e.queryParams)}${"string"==typeof e.fragment?`#${function(t){return encodeURI(t)}(e.fragment)}`:""}`
                }
            }
            const ck = new YC;

            function Gc(t) {
                return t.segments.map(e => ZC(e)).join("/")
            }

            function Ea(t, e) {
                if (!t.hasChildren()) return Gc(t);
                if (e) {
                    const n = t.children[X] ? Ea(t.children[X], !1) : "",
                        s = [];
                    return Ke(t.children, (o, l) => {
                        l !== X && s.push(`${l}:${Ea(o,!1)}`)
                    }), s.length > 0 ? `${n}(${s.join("//")})` : n
                } {
                    const n = function (t, e) {
                        let n = [];
                        return Ke(t.children, (s, o) => {
                            o === X && (n = n.concat(e(s, o)))
                        }), Ke(t.children, (s, o) => {
                            o !== X && (n = n.concat(e(s, o)))
                        }), n
                    }(t, (s, o) => o === X ? [Ea(t.children[X], !1)] : [`${o}:${Ea(s,!1)}`]);
                    return 1 === Object.keys(t.children).length && null != t.children[X] ? `${Gc(t)}/${n[0]}` : `${Gc(t)}/(${n.join("//")})`
                }
            }

            function XC(t) {
                return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
            }

            function Yc(t) {
                return XC(t).replace(/%3B/gi, ";")
            }

            function Pp(t) {
                return XC(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
            }

            function Xc(t) {
                return decodeURIComponent(t)
            }

            function QC(t) {
                return Xc(t.replace(/\+/g, "%20"))
            }

            function ZC(t) {
                return `${Pp(t.path)}${function(t){return Object.keys(t).map(e=>`;${Pp(e)}=${Pp(t[e])}`).join("")}(t.parameters)}`
            }
            const fk = /^[^\/()?;=#]+/;

            function Qc(t) {
                const e = t.match(fk);
                return e ? e[0] : ""
            }
            const pk = /^[^=?&#]+/,
                mk = /^[^?&#]+/;
            class yk {
                constructor(e) {
                    this.url = e, this.remaining = e
                }
                parseRootSegment() {
                    return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Z([], {}) : new Z([], this.parseChildren())
                }
                parseQueryParams() {
                    const e = {};
                    if (this.consumeOptional("?"))
                        do {
                            this.parseQueryParam(e)
                        } while (this.consumeOptional("&"));
                    return e
                }
                parseFragment() {
                    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
                }
                parseChildren() {
                    if ("" === this.remaining) return {};
                    this.consumeOptional("/");
                    const e = [];
                    for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), e.push(this.parseSegment());
                    let n = {};
                    this.peekStartsWith("/(") && (this.capture("/"), n = this.parseParens(!0));
                    let s = {};
                    return this.peekStartsWith("(") && (s = this.parseParens(!1)), (e.length > 0 || Object.keys(n).length > 0) && (s[X] = new Z(e, n)), s
                }
                parseSegment() {
                    const e = Qc(this.remaining);
                    if ("" === e && this.peekStartsWith(";")) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
                    return this.capture(e), new Ca(Xc(e), this.parseMatrixParams())
                }
                parseMatrixParams() {
                    const e = {};
                    for (; this.consumeOptional(";");) this.parseParam(e);
                    return e
                }
                parseParam(e) {
                    const n = Qc(this.remaining);
                    if (!n) return;
                    this.capture(n);
                    let s = "";
                    if (this.consumeOptional("=")) {
                        const o = Qc(this.remaining);
                        o && (s = o, this.capture(s))
                    }
                    e[Xc(n)] = Xc(s)
                }
                parseQueryParam(e) {
                    const n = function (t) {
                        const e = t.match(pk);
                        return e ? e[0] : ""
                    }(this.remaining);
                    if (!n) return;
                    this.capture(n);
                    let s = "";
                    if (this.consumeOptional("=")) {
                        const c = function (t) {
                            const e = t.match(mk);
                            return e ? e[0] : ""
                        }(this.remaining);
                        c && (s = c, this.capture(s))
                    }
                    const o = QC(n),
                        l = QC(s);
                    if (e.hasOwnProperty(o)) {
                        let c = e[o];
                        Array.isArray(c) || (c = [c], e[o] = c), c.push(l)
                    } else e[o] = l
                }
                parseParens(e) {
                    const n = {};
                    for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                        const s = Qc(this.remaining),
                            o = this.remaining[s.length];
                        if ("/" !== o && ")" !== o && ";" !== o) throw new Error(`Cannot parse url '${this.url}'`);
                        let l;
                        s.indexOf(":") > -1 ? (l = s.substr(0, s.indexOf(":")), this.capture(l), this.capture(":")) : e && (l = X);
                        const c = this.parseChildren();
                        n[l] = 1 === Object.keys(c).length ? c[X] : new Z([], c), this.consumeOptional("//")
                    }
                    return n
                }
                peekStartsWith(e) {
                    return this.remaining.startsWith(e)
                }
                consumeOptional(e) {
                    return !!this.peekStartsWith(e) && (this.remaining = this.remaining.substring(e.length), !0)
                }
                capture(e) {
                    if (!this.consumeOptional(e)) throw new Error(`Expected "${e}".`)
                }
            }
            class JC {
                constructor(e) {
                    this._root = e
                }
                get root() {
                    return this._root.value
                }
                parent(e) {
                    const n = this.pathFromRoot(e);
                    return n.length > 1 ? n[n.length - 2] : null
                }
                children(e) {
                    const n = Rp(e, this._root);
                    return n ? n.children.map(s => s.value) : []
                }
                firstChild(e) {
                    const n = Rp(e, this._root);
                    return n && n.children.length > 0 ? n.children[0].value : null
                }
                siblings(e) {
                    const n = kp(e, this._root);
                    return n.length < 2 ? [] : n[n.length - 2].children.map(o => o.value).filter(o => o !== e)
                }
                pathFromRoot(e) {
                    return kp(e, this._root).map(n => n.value)
                }
            }

            function Rp(t, e) {
                if (t === e.value) return e;
                for (const n of e.children) {
                    const s = Rp(t, n);
                    if (s) return s
                }
                return null
            }

            function kp(t, e) {
                if (t === e.value) return [e];
                for (const n of e.children) {
                    const s = kp(t, n);
                    if (s.length) return s.unshift(e), s
                }
                return []
            }
            class li {
                constructor(e, n) {
                    this.value = e, this.children = n
                }
                toString() {
                    return `TreeNode(${this.value})`
                }
            }

            function wa(t) {
                const e = {};
                return t && t.children.forEach(n => e[n.value.outlet] = n), e
            }
            class e4 extends JC {
                constructor(e, n) {
                    super(e), this.snapshot = n, Lp(this, e)
                }
                toString() {
                    return this.snapshot.toString()
                }
            }

            function t4(t, e) {
                const n = function (t, e) {
                        const c = new Zc([], {}, {}, "", {}, X, e, null, t.root, -1, {});
                        return new i4("", new li(c, []))
                    }(t, e),
                    s = new Qt([new Ca("", {})]),
                    o = new Qt({}),
                    l = new Qt({}),
                    c = new Qt({}),
                    u = new Qt(""),
                    d = new Hs(s, o, c, u, l, X, e, n.root);
                return d.snapshot = n.root, new e4(new li(d, []), n)
            }
            class Hs {
                constructor(e, n, s, o, l, c, u, d) {
                    this.url = e, this.params = n, this.queryParams = s, this.fragment = o, this.data = l, this.outlet = c, this.component = u, this._futureSnapshot = d
                }
                get routeConfig() {
                    return this._futureSnapshot.routeConfig
                }
                get root() {
                    return this._routerState.root
                }
                get parent() {
                    return this._routerState.parent(this)
                }
                get firstChild() {
                    return this._routerState.firstChild(this)
                }
                get children() {
                    return this._routerState.children(this)
                }
                get pathFromRoot() {
                    return this._routerState.pathFromRoot(this)
                }
                get paramMap() {
                    return this._paramMap || (this._paramMap = this.params.pipe(he(e => $s(e)))), this._paramMap
                }
                get queryParamMap() {
                    return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(he(e => $s(e)))), this._queryParamMap
                }
                toString() {
                    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
                }
            }

            function n4(t, e = "emptyOnly") {
                const n = t.pathFromRoot;
                let s = 0;
                if ("always" !== e)
                    for (s = n.length - 1; s >= 1;) {
                        const o = n[s],
                            l = n[s - 1];
                        if (o.routeConfig && "" === o.routeConfig.path) s--;
                        else {
                            if (l.component) break;
                            s--
                        }
                    }
                return function (t) {
                    return t.reduce((e, n) => ({
                        params: Object.assign(Object.assign({}, e.params), n.params),
                        data: Object.assign(Object.assign({}, e.data), n.data),
                        resolve: Object.assign(Object.assign({}, e.resolve), n._resolvedData)
                    }), {
                        params: {},
                        data: {},
                        resolve: {}
                    })
                }(n.slice(s))
            }
            class Zc {
                constructor(e, n, s, o, l, c, u, d, f, p, g) {
                    this.url = e, this.params = n, this.queryParams = s, this.fragment = o, this.data = l, this.outlet = c, this.component = u, this.routeConfig = d, this._urlSegment = f, this._lastPathIndex = p, this._resolve = g
                }
                get root() {
                    return this._routerState.root
                }
                get parent() {
                    return this._routerState.parent(this)
                }
                get firstChild() {
                    return this._routerState.firstChild(this)
                }
                get children() {
                    return this._routerState.children(this)
                }
                get pathFromRoot() {
                    return this._routerState.pathFromRoot(this)
                }
                get paramMap() {
                    return this._paramMap || (this._paramMap = $s(this.params)), this._paramMap
                }
                get queryParamMap() {
                    return this._queryParamMap || (this._queryParamMap = $s(this.queryParams)), this._queryParamMap
                }
                toString() {
                    return `Route(url:'${this.url.map(s=>s.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`
                }
            }
            class i4 extends JC {
                constructor(e, n) {
                    super(n), this.url = e, Lp(this, n)
                }
                toString() {
                    return r4(this._root)
                }
            }

            function Lp(t, e) {
                e.value._routerState = t, e.children.forEach(n => Lp(t, n))
            }

            function r4(t) {
                const e = t.children.length > 0 ? ` { ${t.children.map(r4).join(", ")} } ` : "";
                return `${t.value}${e}`
            }

            function Fp(t) {
                if (t.snapshot) {
                    const e = t.snapshot,
                        n = t._futureSnapshot;
                    t.snapshot = n, $n(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), $n(e.params, n.params) || t.params.next(n.params),
                        function (t, e) {
                            if (t.length !== e.length) return !1;
                            for (let n = 0; n < t.length; ++n)
                                if (!$n(t[n], e[n])) return !1;
                            return !0
                        }(e.url, n.url) || t.url.next(n.url), $n(e.data, n.data) || t.data.next(n.data)
                } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
            }

            function Vp(t, e) {
                return $n(t.params, e.params) && function (t, e) {
                    return br(t, e) && t.every((n, s) => $n(n.parameters, e[s].parameters))
                }(t.url, e.url) && !(!t.parent != !e.parent) && (!t.parent || Vp(t.parent, e.parent))
            }

            function Jc(t, e, n) {
                if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
                    const s = n.value;
                    s._futureSnapshot = e.value;
                    const o = function (t, e, n) {
                        return e.children.map(s => {
                            for (const o of n.children)
                                if (t.shouldReuseRoute(s.value, o.value.snapshot)) return Jc(t, s, o);
                            return Jc(t, s)
                        })
                    }(t, e, n);
                    return new li(s, o)
                } {
                    if (t.shouldAttach(e.value)) {
                        const l = t.retrieve(e.value);
                        if (null !== l) {
                            const c = l.route;
                            return s4(e, c), c
                        }
                    }
                    const s = function (t) {
                            return new Hs(new Qt(t.url), new Qt(t.params), new Qt(t.queryParams), new Qt(t.fragment), new Qt(t.data), t.outlet, t.component, t)
                        }(e.value),
                        o = e.children.map(l => Jc(t, l));
                    return new li(s, o)
                }
            }

            function s4(t, e) {
                if (t.value.routeConfig !== e.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                if (t.children.length !== e.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                e.value._futureSnapshot = t.value;
                for (let n = 0; n < t.children.length; ++n) s4(t.children[n], e.children[n])
            }

            function eu(t) {
                return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
            }

            function Da(t) {
                return "object" == typeof t && null != t && t.outlets
            }

            function Bp(t, e, n, s, o) {
                let l = {};
                return s && Ke(s, (c, u) => {
                    l[u] = Array.isArray(c) ? c.map(d => `${d}`) : `${c}`
                }), new _r(n.root === t ? e : o4(n.root, t, e), l, o)
            }

            function o4(t, e, n) {
                const s = {};
                return Ke(t.children, (o, l) => {
                    s[l] = o === e ? n : o4(o, e, n)
                }), new Z(t.segments, s)
            }
            class a4 {
                constructor(e, n, s) {
                    if (this.isAbsolute = e, this.numberOfDoubleDots = n, this.commands = s, e && s.length > 0 && eu(s[0])) throw new Error("Root segment cannot have matrix parameters");
                    const o = s.find(Da);
                    if (o && o !== UC(s)) throw new Error("{outlets:{}} has to be the last command")
                }
                toRoot() {
                    return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
                }
            }
            class $p {
                constructor(e, n, s) {
                    this.segmentGroup = e, this.processChildren = n, this.index = s
                }
            }

            function l4(t, e, n) {
                if (t || (t = new Z([], {})), 0 === t.segments.length && t.hasChildren()) return tu(t, e, n);
                const s = function (t, e, n) {
                        let s = 0,
                            o = e;
                        const l = {
                            match: !1,
                            pathIndex: 0,
                            commandIndex: 0
                        };
                        for (; o < t.segments.length;) {
                            if (s >= n.length) return l;
                            const c = t.segments[o],
                                u = n[s];
                            if (Da(u)) break;
                            const d = `${u}`,
                                f = s < n.length - 1 ? n[s + 1] : null;
                            if (o > 0 && void 0 === d) break;
                            if (d && f && "object" == typeof f && void 0 === f.outlets) {
                                if (!u4(d, f, c)) return l;
                                s += 2
                            } else {
                                if (!u4(d, {}, c)) return l;
                                s++
                            }
                            o++
                        }
                        return {
                            match: !0,
                            pathIndex: o,
                            commandIndex: s
                        }
                    }(t, e, n),
                    o = n.slice(s.commandIndex);
                if (s.match && s.pathIndex < t.segments.length) {
                    const l = new Z(t.segments.slice(0, s.pathIndex), {});
                    return l.children[X] = new Z(t.segments.slice(s.pathIndex), t.children), tu(l, 0, o)
                }
                return s.match && 0 === o.length ? new Z(t.segments, {}) : s.match && !t.hasChildren() ? Hp(t, e, n) : s.match ? tu(t, 0, o) : Hp(t, e, n)
            }

            function tu(t, e, n) {
                if (0 === n.length) return new Z(t.segments, {}); {
                    const s = function (t) {
                            return Da(t[0]) ? t[0].outlets : {
                                [X]: t
                            }
                        }(n),
                        o = {};
                    return Ke(s, (l, c) => {
                        "string" == typeof l && (l = [l]), null !== l && (o[c] = l4(t.children[c], e, l))
                    }), Ke(t.children, (l, c) => {
                        void 0 === s[c] && (o[c] = l)
                    }), new Z(t.segments, o)
                }
            }

            function Hp(t, e, n) {
                const s = t.segments.slice(0, e);
                let o = 0;
                for (; o < n.length;) {
                    const l = n[o];
                    if (Da(l)) {
                        const d = Ok(l.outlets);
                        return new Z(s, d)
                    }
                    if (0 === o && eu(n[0])) {
                        s.push(new Ca(t.segments[e].path, c4(n[0]))), o++;
                        continue
                    }
                    const c = Da(l) ? l.outlets[X] : `${l}`,
                        u = o < n.length - 1 ? n[o + 1] : null;
                    c && u && eu(u) ? (s.push(new Ca(c, c4(u))), o += 2) : (s.push(new Ca(c, {})), o++)
                }
                return new Z(s, {})
            }

            function Ok(t) {
                const e = {};
                return Ke(t, (n, s) => {
                    "string" == typeof n && (n = [n]), null !== n && (e[s] = Hp(new Z([], {}), 0, n))
                }), e
            }

            function c4(t) {
                const e = {};
                return Ke(t, (n, s) => e[s] = `${n}`), e
            }

            function u4(t, e, n) {
                return t == n.path && $n(e, n.parameters)
            }
            class xk {
                constructor(e, n, s, o) {
                    this.routeReuseStrategy = e, this.futureState = n, this.currState = s, this.forwardEvent = o
                }
                activate(e) {
                    const n = this.futureState._root,
                        s = this.currState ? this.currState._root : null;
                    this.deactivateChildRoutes(n, s, e), Fp(this.futureState.root), this.activateChildRoutes(n, s, e)
                }
                deactivateChildRoutes(e, n, s) {
                    const o = wa(n);
                    e.children.forEach(l => {
                        const c = l.value.outlet;
                        this.deactivateRoutes(l, o[c], s), delete o[c]
                    }), Ke(o, (l, c) => {
                        this.deactivateRouteAndItsChildren(l, s)
                    })
                }
                deactivateRoutes(e, n, s) {
                    const o = e.value,
                        l = n ? n.value : null;
                    if (o === l)
                        if (o.component) {
                            const c = s.getContext(o.outlet);
                            c && this.deactivateChildRoutes(e, n, c.children)
                        } else this.deactivateChildRoutes(e, n, s);
                    else l && this.deactivateRouteAndItsChildren(n, s)
                }
                deactivateRouteAndItsChildren(e, n) {
                    this.routeReuseStrategy.shouldDetach(e.value.snapshot) ? this.detachAndStoreRouteSubtree(e, n) : this.deactivateRouteAndOutlet(e, n)
                }
                detachAndStoreRouteSubtree(e, n) {
                    const s = n.getContext(e.value.outlet);
                    if (s && s.outlet) {
                        const o = s.outlet.detach(),
                            l = s.children.onOutletDeactivated();
                        this.routeReuseStrategy.store(e.value.snapshot, {
                            componentRef: o,
                            route: e,
                            contexts: l
                        })
                    }
                }
                deactivateRouteAndOutlet(e, n) {
                    const s = n.getContext(e.value.outlet),
                        o = s && e.value.component ? s.children : n,
                        l = wa(e);
                    for (const c of Object.keys(l)) this.deactivateRouteAndItsChildren(l[c], o);
                    s && s.outlet && (s.outlet.deactivate(), s.children.onOutletDeactivated(), s.attachRef = null, s.resolver = null, s.route = null)
                }
                activateChildRoutes(e, n, s) {
                    const o = wa(n);
                    e.children.forEach(l => {
                        this.activateRoutes(l, o[l.value.outlet], s), this.forwardEvent(new ZR(l.value.snapshot))
                    }), e.children.length && this.forwardEvent(new XR(e.value.snapshot))
                }
                activateRoutes(e, n, s) {
                    const o = e.value,
                        l = n ? n.value : null;
                    if (Fp(o), o === l)
                        if (o.component) {
                            const c = s.getOrCreateContext(o.outlet);
                            this.activateChildRoutes(e, n, c.children)
                        } else this.activateChildRoutes(e, n, s);
                    else if (o.component) {
                        const c = s.getOrCreateContext(o.outlet);
                        if (this.routeReuseStrategy.shouldAttach(o.snapshot)) {
                            const u = this.routeReuseStrategy.retrieve(o.snapshot);
                            this.routeReuseStrategy.store(o.snapshot, null), c.children.onOutletReAttached(u.contexts), c.attachRef = u.componentRef, c.route = u.route.value, c.outlet && c.outlet.attach(u.componentRef, u.route.value), d4(u.route)
                        } else {
                            const u = function (t) {
                                    for (let e = t.parent; e; e = e.parent) {
                                        const n = e.routeConfig;
                                        if (n && n._loadedConfig) return n._loadedConfig;
                                        if (n && n.component) return null
                                    }
                                    return null
                                }(o.snapshot),
                                d = u ? u.module.componentFactoryResolver : null;
                            c.attachRef = null, c.route = o, c.resolver = d, c.outlet && c.outlet.activateWith(o, d), this.activateChildRoutes(e, null, c.children)
                        }
                    } else this.activateChildRoutes(e, null, s)
                }
            }

            function d4(t) {
                Fp(t.value), t.children.forEach(d4)
            }
            class jp {
                constructor(e, n) {
                    this.routes = e, this.module = n
                }
            }

            function $i(t) {
                return "function" == typeof t
            }

            function Cr(t) {
                return t instanceof _r
            }
            const Ta = Symbol("INITIAL_VALUE");

            function Sa() {
                return Vi(t => function (...t) {
                    let e, n;
                    return ka(t[t.length - 1]) && (n = t.pop()), "function" == typeof t[t.length - 1] && (e = t.pop()), 1 === t.length && t1(t[0]) && (t = t[0]), bu(t, n).lift(new gR(e))
                }(t.map(e => e.pipe(Ip(1), function (...t) {
                    const e = t[t.length - 1];
                    return ka(e) ? (t.pop(), n => Sp(t, n, e)) : n => Sp(t, n)
                }(Ta)))).pipe(PC((e, n) => {
                    let s = !1;
                    return n.reduce((o, l, c) => o !== Ta ? o : (l === Ta && (s = !0), s || !1 !== l && c !== n.length - 1 && !Cr(l) ? o : l), e)
                }, Ta), Vs(e => e !== Ta), he(e => Cr(e) ? e : !0 === e), Ip(1)))
            }
            let h4 = (() => {
                class t {}
                return t.\u0275fac = function (n) {
                    return new(n || t)
                }, t.\u0275cmp = se({
                    type: t,
                    selectors: [
                        ["ng-component"]
                    ],
                    decls: 1,
                    vars: 0,
                    template: function (n, s) {
                        1 & n && h(0, "router-outlet")
                    },
                    directives: function () {
                        return [Gp]
                    },
                    encapsulation: 2
                }), t
            })();

            function f4(t, e = "") {
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    Bk(s, $k(e, s))
                }
            }

            function Bk(t, e) {
                t.children && f4(t.children, e)
            }

            function $k(t, e) {
                return e ? t || e.path ? t && !e.path ? `${t}/` : !t && e.path ? e.path : `${t}/${e.path}` : "" : t
            }

            function Up(t) {
                const e = t.children && t.children.map(Up),
                    n = e ? Object.assign(Object.assign({}, t), {
                        children: e
                    }) : Object.assign({}, t);
                return !n.component && (e || n.loadChildren) && n.outlet && n.outlet !== X && (n.component = h4), n
            }

            function Zt(t) {
                return t.outlet || X
            }

            function p4(t, e) {
                const n = t.filter(s => Zt(s) === e);
                return n.push(...t.filter(s => Zt(s) !== e)), n
            }
            const g4 = {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {}
            };

            function nu(t, e, n) {
                var s;
                if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? Object.assign({}, g4) : {
                    matched: !0,
                    consumedSegments: [],
                    lastChild: 0,
                    parameters: {},
                    positionalParamSegments: {}
                };
                const l = (e.matcher || tk)(n, t, e);
                if (!l) return Object.assign({}, g4);
                const c = {};
                Ke(l.posParams, (d, f) => {
                    c[f] = d.path
                });
                const u = l.consumed.length > 0 ? Object.assign(Object.assign({}, c), l.consumed[l.consumed.length - 1].parameters) : c;
                return {
                    matched: !0,
                    consumedSegments: l.consumed,
                    lastChild: l.consumed.length,
                    parameters: u,
                    positionalParamSegments: null !== (s = l.posParams) && void 0 !== s ? s : {}
                }
            }

            function iu(t, e, n, s, o = "corrected") {
                if (n.length > 0 && function (t, e, n) {
                        return n.some(s => ru(t, e, s) && Zt(s) !== X)
                    }(t, n, s)) {
                    const c = new Z(e, function (t, e, n, s) {
                        const o = {};
                        o[X] = s, s._sourceSegment = t, s._segmentIndexShift = e.length;
                        for (const l of n)
                            if ("" === l.path && Zt(l) !== X) {
                                const c = new Z([], {});
                                c._sourceSegment = t, c._segmentIndexShift = e.length, o[Zt(l)] = c
                            } return o
                    }(t, e, s, new Z(n, t.children)));
                    return c._sourceSegment = t, c._segmentIndexShift = e.length, {
                        segmentGroup: c,
                        slicedSegments: []
                    }
                }
                if (0 === n.length && function (t, e, n) {
                        return n.some(s => ru(t, e, s))
                    }(t, n, s)) {
                    const c = new Z(t.segments, function (t, e, n, s, o, l) {
                        const c = {};
                        for (const u of s)
                            if (ru(t, n, u) && !o[Zt(u)]) {
                                const d = new Z([], {});
                                d._sourceSegment = t, d._segmentIndexShift = "legacy" === l ? t.segments.length : e.length, c[Zt(u)] = d
                            } return Object.assign(Object.assign({}, o), c)
                    }(t, e, n, s, t.children, o));
                    return c._sourceSegment = t, c._segmentIndexShift = e.length, {
                        segmentGroup: c,
                        slicedSegments: n
                    }
                }
                const l = new Z(t.segments, t.children);
                return l._sourceSegment = t, l._segmentIndexShift = e.length, {
                    segmentGroup: l,
                    slicedSegments: n
                }
            }

            function ru(t, e, n) {
                return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path
            }

            function m4(t, e, n, s) {
                return !!(Zt(t) === s || s !== X && ru(e, n, t)) && ("**" === t.path || nu(e, t, n).matched)
            }

            function v4(t, e, n) {
                return 0 === e.length && !t.children[n]
            }
            class Aa {
                constructor(e) {
                    this.segmentGroup = e || null
                }
            }
            class y4 {
                constructor(e) {
                    this.urlTree = e
                }
            }

            function su(t) {
                return new me(e => e.error(new Aa(t)))
            }

            function _4(t) {
                return new me(e => e.error(new y4(t)))
            }

            function qk(t) {
                return new me(e => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))
            }
            class Gk {
                constructor(e, n, s, o, l) {
                    this.configLoader = n, this.urlSerializer = s, this.urlTree = o, this.config = l, this.allowRedirects = !0, this.ngModule = e.get(Rn)
                }
                apply() {
                    const e = iu(this.urlTree.root, [], [], this.config).segmentGroup,
                        n = new Z(e.segments, e.children);
                    return this.expandSegmentGroup(this.ngModule, this.config, n, X).pipe(he(l => this.createUrlTree(Wp(l), this.urlTree.queryParams, this.urlTree.fragment))).pipe(yr(l => {
                        if (l instanceof y4) return this.allowRedirects = !1, this.match(l.urlTree);
                        throw l instanceof Aa ? this.noMatchError(l) : l
                    }))
                }
                match(e) {
                    return this.expandSegmentGroup(this.ngModule, this.config, e.root, X).pipe(he(o => this.createUrlTree(Wp(o), e.queryParams, e.fragment))).pipe(yr(o => {
                        throw o instanceof Aa ? this.noMatchError(o) : o
                    }))
                }
                noMatchError(e) {
                    return new Error(`Cannot match any routes. URL Segment: '${e.segmentGroup}'`)
                }
                createUrlTree(e, n, s) {
                    const o = e.segments.length > 0 ? new Z([], {
                        [X]: e
                    }) : e;
                    return new _r(o, n, s)
                }
                expandSegmentGroup(e, n, s, o) {
                    return 0 === s.segments.length && s.hasChildren() ? this.expandChildren(e, n, s).pipe(he(l => new Z([], l))) : this.expandSegment(e, s, n, s.segments, o, !0)
                }
                expandChildren(e, n, s) {
                    const o = [];
                    for (const l of Object.keys(s.children)) "primary" === l ? o.unshift(l) : o.push(l);
                    return et(o).pipe(_a(l => {
                        const c = s.children[l],
                            u = p4(n, l);
                        return this.expandSegmentGroup(e, u, c, l).pipe(he(d => ({
                            segment: d,
                            outlet: l
                        })))
                    }), PC((l, c) => (l[c.outlet] = c.segment, l), {}), function (t, e) {
                        const n = arguments.length >= 2;
                        return s => s.pipe(t ? Vs((o, l) => t(o, l, s)) : Ra, Mp(1), n ? kC(e) : RC(() => new Kc))
                    }())
                }
                expandSegment(e, n, s, o, l, c) {
                    return et(s).pipe(_a(u => this.expandSegmentAgainstRoute(e, n, s, u, o, l, c).pipe(yr(f => {
                        if (f instanceof Aa) return U(null);
                        throw f
                    }))), Bs(u => !!u), yr((u, d) => {
                        if (u instanceof Kc || "EmptyError" === u.name) {
                            if (v4(n, o, l)) return U(new Z([], {}));
                            throw new Aa(n)
                        }
                        throw u
                    }))
                }
                expandSegmentAgainstRoute(e, n, s, o, l, c, u) {
                    return m4(o, n, l, c) ? void 0 === o.redirectTo ? this.matchSegmentAgainstRoute(e, n, o, l, c) : u && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(e, n, s, o, l, c) : su(n) : su(n)
                }
                expandSegmentAgainstRouteUsingRedirect(e, n, s, o, l, c) {
                    return "**" === o.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, s, o, c) : this.expandRegularSegmentAgainstRouteUsingRedirect(e, n, s, o, l, c)
                }
                expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, s, o) {
                    const l = this.applyRedirectCommands([], s.redirectTo, {});
                    return s.redirectTo.startsWith("/") ? _4(l) : this.lineralizeSegments(s, l).pipe(Ue(c => {
                        const u = new Z(c, {});
                        return this.expandSegment(e, u, n, c, o, !1)
                    }))
                }
                expandRegularSegmentAgainstRouteUsingRedirect(e, n, s, o, l, c) {
                    const {
                        matched: u,
                        consumedSegments: d,
                        lastChild: f,
                        positionalParamSegments: p
                    } = nu(n, o, l);
                    if (!u) return su(n);
                    const g = this.applyRedirectCommands(d, o.redirectTo, p);
                    return o.redirectTo.startsWith("/") ? _4(g) : this.lineralizeSegments(o, g).pipe(Ue(m => this.expandSegment(e, n, s, m.concat(l.slice(f)), c, !1)))
                }
                matchSegmentAgainstRoute(e, n, s, o, l) {
                    if ("**" === s.path) return s.loadChildren ? (s._loadedConfig ? U(s._loadedConfig) : this.configLoader.load(e.injector, s)).pipe(he(m => (s._loadedConfig = m, new Z(o, {})))) : U(new Z(o, {}));
                    const {
                        matched: c,
                        consumedSegments: u,
                        lastChild: d
                    } = nu(n, s, o);
                    if (!c) return su(n);
                    const f = o.slice(d);
                    return this.getChildConfig(e, s, o).pipe(Ue(g => {
                        const m = g.module,
                            v = g.routes,
                            {
                                segmentGroup: y,
                                slicedSegments: b
                            } = iu(n, u, f, v),
                            _ = new Z(y.segments, y.children);
                        if (0 === b.length && _.hasChildren()) return this.expandChildren(m, v, _).pipe(he(T => new Z(u, T)));
                        if (0 === v.length && 0 === b.length) return U(new Z(u, {}));
                        const E = Zt(s) === l;
                        return this.expandSegment(m, _, v, b, E ? X : l, !0).pipe(he(S => new Z(u.concat(S.segments), S.children)))
                    }))
                }
                getChildConfig(e, n, s) {
                    return n.children ? U(new jp(n.children, e)) : n.loadChildren ? void 0 !== n._loadedConfig ? U(n._loadedConfig) : this.runCanLoadGuards(e.injector, n, s).pipe(Ue(o => o ? this.configLoader.load(e.injector, n).pipe(he(l => (n._loadedConfig = l, l))) : function (t) {
                        return new me(e => e.error(Np(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))
                    }(n))) : U(new jp([], e))
                }
                runCanLoadGuards(e, n, s) {
                    const o = n.canLoad;
                    return o && 0 !== o.length ? U(o.map(c => {
                        const u = e.get(c);
                        let d;
                        if (function (t) {
                                return t && $i(t.canLoad)
                            }(u)) d = u.canLoad(n, s);
                        else {
                            if (!$i(u)) throw new Error("Invalid CanLoad guard");
                            d = u(n, s)
                        }
                        return Hn(d)
                    })).pipe(Sa(), Mt(c => {
                        if (!Cr(c)) return;
                        const u = Np(`Redirecting to "${this.urlSerializer.serialize(c)}"`);
                        throw u.url = c, u
                    }), he(c => !0 === c)) : U(!0)
                }
                lineralizeSegments(e, n) {
                    let s = [],
                        o = n.root;
                    for (;;) {
                        if (s = s.concat(o.segments), 0 === o.numberOfChildren) return U(s);
                        if (o.numberOfChildren > 1 || !o.children[X]) return qk(e.redirectTo);
                        o = o.children[X]
                    }
                }
                applyRedirectCommands(e, n, s) {
                    return this.applyRedirectCreatreUrlTree(n, this.urlSerializer.parse(n), e, s)
                }
                applyRedirectCreatreUrlTree(e, n, s, o) {
                    const l = this.createSegmentGroup(e, n.root, s, o);
                    return new _r(l, this.createQueryParams(n.queryParams, this.urlTree.queryParams), n.fragment)
                }
                createQueryParams(e, n) {
                    const s = {};
                    return Ke(e, (o, l) => {
                        if ("string" == typeof o && o.startsWith(":")) {
                            const u = o.substring(1);
                            s[l] = n[u]
                        } else s[l] = o
                    }), s
                }
                createSegmentGroup(e, n, s, o) {
                    const l = this.createSegments(e, n.segments, s, o);
                    let c = {};
                    return Ke(n.children, (u, d) => {
                        c[d] = this.createSegmentGroup(e, u, s, o)
                    }), new Z(l, c)
                }
                createSegments(e, n, s, o) {
                    return n.map(l => l.path.startsWith(":") ? this.findPosParam(e, l, o) : this.findOrReturn(l, s))
                }
                findPosParam(e, n, s) {
                    const o = s[n.path.substring(1)];
                    if (!o) throw new Error(`Cannot redirect to '${e}'. Cannot find '${n.path}'.`);
                    return o
                }
                findOrReturn(e, n) {
                    let s = 0;
                    for (const o of n) {
                        if (o.path === e.path) return n.splice(s), o;
                        s++
                    }
                    return e
                }
            }

            function Wp(t) {
                const e = {};
                for (const s of Object.keys(t.children)) {
                    const l = Wp(t.children[s]);
                    (l.segments.length > 0 || l.hasChildren()) && (e[s] = l)
                }
                return function (t) {
                    if (1 === t.numberOfChildren && t.children[X]) {
                        const e = t.children[X];
                        return new Z(t.segments.concat(e.segments), e.children)
                    }
                    return t
                }(new Z(t.segments, e))
            }
            class b4 {
                constructor(e) {
                    this.path = e, this.route = this.path[this.path.length - 1]
                }
            }
            class ou {
                constructor(e, n) {
                    this.component = e, this.route = n
                }
            }

            function Qk(t, e, n) {
                const s = t._root;
                return Ia(s, e ? e._root : null, n, [s.value])
            }

            function au(t, e, n) {
                const s = function (t) {
                    if (!t) return null;
                    for (let e = t.parent; e; e = e.parent) {
                        const n = e.routeConfig;
                        if (n && n._loadedConfig) return n._loadedConfig
                    }
                    return null
                }(e);
                return (s ? s.module.injector : n).get(t)
            }

            function Ia(t, e, n, s, o = {
                canDeactivateChecks: [],
                canActivateChecks: []
            }) {
                const l = wa(e);
                return t.children.forEach(c => {
                    (function (t, e, n, s, o = {
                        canDeactivateChecks: [],
                        canActivateChecks: []
                    }) {
                        const l = t.value,
                            c = e ? e.value : null,
                            u = n ? n.getContext(t.value.outlet) : null;
                        if (c && l.routeConfig === c.routeConfig) {
                            const d = function (t, e, n) {
                                if ("function" == typeof n) return n(t, e);
                                switch (n) {
                                    case "pathParamsChange":
                                        return !br(t.url, e.url);
                                    case "pathParamsOrQueryParamsChange":
                                        return !br(t.url, e.url) || !$n(t.queryParams, e.queryParams);
                                    case "always":
                                        return !0;
                                    case "paramsOrQueryParamsChange":
                                        return !Vp(t, e) || !$n(t.queryParams, e.queryParams);
                                    case "paramsChange":
                                    default:
                                        return !Vp(t, e)
                                }
                            }(c, l, l.routeConfig.runGuardsAndResolvers);
                            d ? o.canActivateChecks.push(new b4(s)) : (l.data = c.data, l._resolvedData = c._resolvedData), Ia(t, e, l.component ? u ? u.children : null : n, s, o), d && u && u.outlet && u.outlet.isActivated && o.canDeactivateChecks.push(new ou(u.outlet.component, c))
                        } else c && Ma(e, u, o), o.canActivateChecks.push(new b4(s)), Ia(t, null, l.component ? u ? u.children : null : n, s, o)
                    })(c, l[c.value.outlet], n, s.concat([c.value]), o), delete l[c.value.outlet]
                }), Ke(l, (c, u) => Ma(c, n.getContext(u), o)), o
            }

            function Ma(t, e, n) {
                const s = wa(t),
                    o = t.value;
                Ke(s, (l, c) => {
                    Ma(l, o.component ? e ? e.children.getContext(c) : null : e, n)
                }), n.canDeactivateChecks.push(new ou(o.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, o))
            }
            class uL {}

            function C4(t) {
                return new me(e => e.error(t))
            }
            class hL {
                constructor(e, n, s, o, l, c) {
                    this.rootComponentType = e, this.config = n, this.urlTree = s, this.url = o, this.paramsInheritanceStrategy = l, this.relativeLinkResolution = c
                }
                recognize() {
                    const e = iu(this.urlTree.root, [], [], this.config.filter(c => void 0 === c.redirectTo), this.relativeLinkResolution).segmentGroup,
                        n = this.processSegmentGroup(this.config, e, X);
                    if (null === n) return null;
                    const s = new Zc([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, X, this.rootComponentType, null, this.urlTree.root, -1, {}),
                        o = new li(s, n),
                        l = new i4(this.url, o);
                    return this.inheritParamsAndData(l._root), l
                }
                inheritParamsAndData(e) {
                    const n = e.value,
                        s = n4(n, this.paramsInheritanceStrategy);
                    n.params = Object.freeze(s.params), n.data = Object.freeze(s.data), e.children.forEach(o => this.inheritParamsAndData(o))
                }
                processSegmentGroup(e, n, s) {
                    return 0 === n.segments.length && n.hasChildren() ? this.processChildren(e, n) : this.processSegment(e, n, n.segments, s)
                }
                processChildren(e, n) {
                    const s = [];
                    for (const l of Object.keys(n.children)) {
                        const c = n.children[l],
                            u = p4(e, l),
                            d = this.processSegmentGroup(u, c, l);
                        if (null === d) return null;
                        s.push(...d)
                    }
                    const o = E4(s);
                    return function (t) {
                        t.sort((e, n) => e.value.outlet === X ? -1 : n.value.outlet === X ? 1 : e.value.outlet.localeCompare(n.value.outlet))
                    }(o), o
                }
                processSegment(e, n, s, o) {
                    for (const l of e) {
                        const c = this.processSegmentAgainstRoute(l, n, s, o);
                        if (null !== c) return c
                    }
                    return v4(n, s, o) ? [] : null
                }
                processSegmentAgainstRoute(e, n, s, o) {
                    if (e.redirectTo || !m4(e, n, s, o)) return null;
                    let l, c = [],
                        u = [];
                    if ("**" === e.path) {
                        const v = s.length > 0 ? UC(s).parameters : {};
                        l = new Zc(s, v, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, T4(e), Zt(e), e.component, e, w4(n), D4(n) + s.length, S4(e))
                    } else {
                        const v = nu(n, e, s);
                        if (!v.matched) return null;
                        c = v.consumedSegments, u = s.slice(v.lastChild), l = new Zc(c, v.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, T4(e), Zt(e), e.component, e, w4(n), D4(n) + c.length, S4(e))
                    }
                    const d = function (t) {
                            return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
                        }(e),
                        {
                            segmentGroup: f,
                            slicedSegments: p
                        } = iu(n, c, u, d.filter(v => void 0 === v.redirectTo), this.relativeLinkResolution);
                    if (0 === p.length && f.hasChildren()) {
                        const v = this.processChildren(d, f);
                        return null === v ? null : [new li(l, v)]
                    }
                    if (0 === d.length && 0 === p.length) return [new li(l, [])];
                    const g = Zt(e) === o,
                        m = this.processSegment(d, f, p, g ? X : o);
                    return null === m ? null : [new li(l, m)]
                }
            }

            function gL(t) {
                const e = t.value.routeConfig;
                return e && "" === e.path && void 0 === e.redirectTo
            }

            function E4(t) {
                const e = [],
                    n = new Set;
                for (const s of t) {
                    if (!gL(s)) {
                        e.push(s);
                        continue
                    }
                    const o = e.find(l => s.value.routeConfig === l.value.routeConfig);
                    void 0 !== o ? (o.children.push(...s.children), n.add(o)) : e.push(s)
                }
                for (const s of n) {
                    const o = E4(s.children);
                    e.push(new li(s.value, o))
                }
                return e.filter(s => !n.has(s))
            }

            function w4(t) {
                let e = t;
                for (; e._sourceSegment;) e = e._sourceSegment;
                return e
            }

            function D4(t) {
                let e = t,
                    n = e._segmentIndexShift ? e._segmentIndexShift : 0;
                for (; e._sourceSegment;) e = e._sourceSegment, n += e._segmentIndexShift ? e._segmentIndexShift : 0;
                return n - 1
            }

            function T4(t) {
                return t.data || {}
            }

            function S4(t) {
                return t.resolve || {}
            }

            function qp(t) {
                return Vi(e => {
                    const n = t(e);
                    return n ? et(n).pipe(he(() => e)) : U(e)
                })
            }
            class wL extends class {
                shouldDetach(e) {
                    return !1
                }
                store(e, n) {}
                shouldAttach(e) {
                    return !1
                }
                retrieve(e) {
                    return null
                }
                shouldReuseRoute(e, n) {
                    return e.routeConfig === n.routeConfig
                }
            } {}
            const Kp = new te("ROUTES");
            class A4 {
                constructor(e, n, s, o) {
                    this.loader = e, this.compiler = n, this.onLoadStartListener = s, this.onLoadEndListener = o
                }
                load(e, n) {
                    if (n._loader$) return n._loader$;
                    this.onLoadStartListener && this.onLoadStartListener(n);
                    const o = this.loadModuleFactory(n.loadChildren).pipe(he(l => {
                        this.onLoadEndListener && this.onLoadEndListener(n);
                        const c = l.create(e);
                        return new jp(jC(c.injector.get(Kp, void 0, P.Self | P.Optional)).map(Up), c)
                    }), yr(l => {
                        throw n._loader$ = void 0, l
                    }));
                    return n._loader$ = new h1(o, () => new qn).pipe(Cu()), n._loader$
                }
                loadModuleFactory(e) {
                    return "string" == typeof e ? et(this.loader.load(e)) : Hn(e()).pipe(Ue(n => n instanceof ay ? U(n) : et(this.compiler.compileModuleAsync(n))))
                }
            }
            class DL {
                constructor() {
                    this.outlet = null, this.route = null, this.resolver = null, this.children = new js, this.attachRef = null
                }
            }
            class js {
                constructor() {
                    this.contexts = new Map
                }
                onChildOutletCreated(e, n) {
                    const s = this.getOrCreateContext(e);
                    s.outlet = n, this.contexts.set(e, s)
                }
                onChildOutletDestroyed(e) {
                    const n = this.getContext(e);
                    n && (n.outlet = null)
                }
                onOutletDeactivated() {
                    const e = this.contexts;
                    return this.contexts = new Map, e
                }
                onOutletReAttached(e) {
                    this.contexts = e
                }
                getOrCreateContext(e) {
                    let n = this.getContext(e);
                    return n || (n = new DL, this.contexts.set(e, n)), n
                }
                getContext(e) {
                    return this.contexts.get(e) || null
                }
            }
            class SL {
                shouldProcessUrl(e) {
                    return !0
                }
                extract(e) {
                    return e
                }
                merge(e, n) {
                    return e
                }
            }

            function AL(t) {
                throw t
            }

            function IL(t, e, n) {
                return e.parse("/")
            }

            function I4(t, e) {
                return U(null)
            }
            const ML = {
                    paths: "exact",
                    fragment: "ignored",
                    matrixParams: "ignored",
                    queryParams: "exact"
                },
                OL = {
                    paths: "subset",
                    fragment: "ignored",
                    matrixParams: "ignored",
                    queryParams: "subset"
                };
            let gt = (() => {
                class t {
                    constructor(n, s, o, l, c, u, d, f) {
                        this.rootComponentType = n, this.urlSerializer = s, this.rootContexts = o, this.location = l, this.config = f, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.disposed = !1, this.lastLocationChangeInfo = null, this.navigationId = 0, this.currentPageId = 0, this.isNgZoneEnabled = !1, this.events = new qn, this.errorHandler = AL, this.malformedUriErrorHandler = IL, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                            beforePreactivation: I4,
                            afterPreactivation: I4
                        }, this.urlHandlingStrategy = new SL, this.routeReuseStrategy = new wL, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "corrected", this.canceledNavigationResolution = "replace", this.ngModule = c.get(Rn), this.console = c.get(Yl);
                        const m = c.get(Me);
                        this.isNgZoneEnabled = m instanceof Me && Me.isInAngularZone(), this.resetConfig(f), this.currentUrlTree = new _r(new Z([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new A4(u, d, v => this.triggerEvent(new FC(v)), v => this.triggerEvent(new VC(v))), this.routerState = t4(this.currentUrlTree, this.rootComponentType), this.transitions = new Qt({
                            id: 0,
                            targetPageId: 0,
                            currentUrlTree: this.currentUrlTree,
                            currentRawUrl: this.currentUrlTree,
                            extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                            urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                            rawUrl: this.currentUrlTree,
                            extras: {},
                            resolve: null,
                            reject: null,
                            promise: Promise.resolve(!0),
                            source: "imperative",
                            restoredState: null,
                            currentSnapshot: this.routerState.snapshot,
                            targetSnapshot: null,
                            currentRouterState: this.routerState,
                            targetRouterState: null,
                            guards: {
                                canActivateChecks: [],
                                canDeactivateChecks: []
                            },
                            guardsResult: null
                        }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
                    }
                    get browserPageId() {
                        var n;
                        return null === (n = this.location.getState()) || void 0 === n ? void 0 : n.\u0275routerPageId
                    }
                    setupNavigations(n) {
                        const s = this.events;
                        return n.pipe(Vs(o => 0 !== o.id), he(o => Object.assign(Object.assign({}, o), {
                            extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl)
                        })), Vi(o => {
                            let l = !1,
                                c = !1;
                            return U(o).pipe(Mt(u => {
                                this.currentNavigation = {
                                    id: u.id,
                                    initialUrl: u.currentRawUrl,
                                    extractedUrl: u.extractedUrl,
                                    trigger: u.source,
                                    extras: u.extras,
                                    previousNavigation: this.lastSuccessfulNavigation ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {
                                        previousNavigation: null
                                    }) : null
                                }
                            }), Vi(u => {
                                const d = !this.navigated || u.extractedUrl.toString() !== this.browserUrlTree.toString(),
                                    f = ("reload" === this.onSameUrlNavigation || d) && this.urlHandlingStrategy.shouldProcessUrl(u.rawUrl);
                                if (lu(u.source) && (this.browserUrlTree = u.rawUrl), f) return U(u).pipe(Vi(p => {
                                    const g = this.transitions.getValue();
                                    return s.next(new Op(p.id, this.serializeUrl(p.extractedUrl), p.source, p.restoredState)), g !== this.transitions.getValue() ? Fs : Promise.resolve(p)
                                }), function (t, e, n, s) {
                                    return Vi(o => function (t, e, n, s, o) {
                                        return new Gk(t, e, n, s, o).apply()
                                    }(t, e, n, o.extractedUrl, s).pipe(he(l => Object.assign(Object.assign({}, o), {
                                        urlAfterRedirects: l
                                    }))))
                                }(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config), Mt(p => {
                                    this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {
                                        finalUrl: p.urlAfterRedirects
                                    })
                                }), function (t, e, n, s, o) {
                                    return Ue(l => function (t, e, n, s, o = "emptyOnly", l = "legacy") {
                                        try {
                                            const c = new hL(t, e, n, s, o, l).recognize();
                                            return null === c ? C4(new uL) : U(c)
                                        } catch (c) {
                                            return C4(c)
                                        }
                                    }(t, e, l.urlAfterRedirects, n(l.urlAfterRedirects), s, o).pipe(he(c => Object.assign(Object.assign({}, l), {
                                        targetSnapshot: c
                                    }))))
                                }(this.rootComponentType, this.config, p => this.serializeUrl(p), this.paramsInheritanceStrategy, this.relativeLinkResolution), Mt(p => {
                                    "eager" === this.urlUpdateStrategy && (p.extras.skipLocationChange || this.setBrowserUrl(p.urlAfterRedirects, p), this.browserUrlTree = p.urlAfterRedirects);
                                    const g = new WR(p.id, this.serializeUrl(p.extractedUrl), this.serializeUrl(p.urlAfterRedirects), p.targetSnapshot);
                                    s.next(g)
                                }));
                                if (d && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                                    const {
                                        id: g,
                                        extractedUrl: m,
                                        source: v,
                                        restoredState: y,
                                        extras: b
                                    } = u, _ = new Op(g, this.serializeUrl(m), v, y);
                                    s.next(_);
                                    const E = t4(m, this.rootComponentType).snapshot;
                                    return U(Object.assign(Object.assign({}, u), {
                                        targetSnapshot: E,
                                        urlAfterRedirects: m,
                                        extras: Object.assign(Object.assign({}, b), {
                                            skipLocationChange: !1,
                                            replaceUrl: !1
                                        })
                                    }))
                                }
                                return this.rawUrlTree = u.rawUrl, this.browserUrlTree = u.urlAfterRedirects, u.resolve(null), Fs
                            }), qp(u => {
                                const {
                                    targetSnapshot: d,
                                    id: f,
                                    extractedUrl: p,
                                    rawUrl: g,
                                    extras: {
                                        skipLocationChange: m,
                                        replaceUrl: v
                                    }
                                } = u;
                                return this.hooks.beforePreactivation(d, {
                                    navigationId: f,
                                    appliedUrlTree: p,
                                    rawUrlTree: g,
                                    skipLocationChange: !!m,
                                    replaceUrl: !!v
                                })
                            }), Mt(u => {
                                const d = new qR(u.id, this.serializeUrl(u.extractedUrl), this.serializeUrl(u.urlAfterRedirects), u.targetSnapshot);
                                this.triggerEvent(d)
                            }), he(u => Object.assign(Object.assign({}, u), {
                                guards: Qk(u.targetSnapshot, u.currentSnapshot, this.rootContexts)
                            })), function (t, e) {
                                return Ue(n => {
                                    const {
                                        targetSnapshot: s,
                                        currentSnapshot: o,
                                        guards: {
                                            canActivateChecks: l,
                                            canDeactivateChecks: c
                                        }
                                    } = n;
                                    return 0 === c.length && 0 === l.length ? U(Object.assign(Object.assign({}, n), {
                                        guardsResult: !0
                                    })) : function (t, e, n, s) {
                                        return et(t).pipe(Ue(o => function (t, e, n, s, o) {
                                            const l = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                                            return l && 0 !== l.length ? U(l.map(u => {
                                                const d = au(u, e, o);
                                                let f;
                                                if (function (t) {
                                                        return t && $i(t.canDeactivate)
                                                    }(d)) f = Hn(d.canDeactivate(t, e, n, s));
                                                else {
                                                    if (!$i(d)) throw new Error("Invalid CanDeactivate guard");
                                                    f = Hn(d(t, e, n, s))
                                                }
                                                return f.pipe(Bs())
                                            })).pipe(Sa()) : U(!0)
                                        }(o.component, o.route, n, e, s)), Bs(o => !0 !== o, !0))
                                    }(c, s, o, t).pipe(Ue(u => u && function (t) {
                                        return "boolean" == typeof t
                                    }(u) ? function (t, e, n, s) {
                                        return et(e).pipe(_a(o => Sp(function (t, e) {
                                            return null !== t && e && e(new YR(t)), U(!0)
                                        }(o.route.parent, s), function (t, e) {
                                            return null !== t && e && e(new QR(t)), U(!0)
                                        }(o.route, s), function (t, e, n) {
                                            const s = e[e.length - 1],
                                                l = e.slice(0, e.length - 1).reverse().map(c => function (t) {
                                                    const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                                                    return e && 0 !== e.length ? {
                                                        node: t,
                                                        guards: e
                                                    } : null
                                                }(c)).filter(c => null !== c).map(c => NC(() => U(c.guards.map(d => {
                                                    const f = au(d, c.node, n);
                                                    let p;
                                                    if (function (t) {
                                                            return t && $i(t.canActivateChild)
                                                        }(f)) p = Hn(f.canActivateChild(s, t));
                                                    else {
                                                        if (!$i(f)) throw new Error("Invalid CanActivateChild guard");
                                                        p = Hn(f(s, t))
                                                    }
                                                    return p.pipe(Bs())
                                                })).pipe(Sa())));
                                            return U(l).pipe(Sa())
                                        }(t, o.path, n), function (t, e, n) {
                                            const s = e.routeConfig ? e.routeConfig.canActivate : null;
                                            return s && 0 !== s.length ? U(s.map(l => NC(() => {
                                                const c = au(l, e, n);
                                                let u;
                                                if (function (t) {
                                                        return t && $i(t.canActivate)
                                                    }(c)) u = Hn(c.canActivate(e, t));
                                                else {
                                                    if (!$i(c)) throw new Error("Invalid CanActivate guard");
                                                    u = Hn(c(e, t))
                                                }
                                                return u.pipe(Bs())
                                            }))).pipe(Sa()) : U(!0)
                                        }(t, o.route, n))), Bs(o => !0 !== o, !0))
                                    }(s, l, t, e) : U(u)), he(u => Object.assign(Object.assign({}, n), {
                                        guardsResult: u
                                    })))
                                })
                            }(this.ngModule.injector, u => this.triggerEvent(u)), Mt(u => {
                                if (Cr(u.guardsResult)) {
                                    const f = Np(`Redirecting to "${this.serializeUrl(u.guardsResult)}"`);
                                    throw f.url = u.guardsResult, f
                                }
                                const d = new KR(u.id, this.serializeUrl(u.extractedUrl), this.serializeUrl(u.urlAfterRedirects), u.targetSnapshot, !!u.guardsResult);
                                this.triggerEvent(d)
                            }), Vs(u => !!u.guardsResult || (this.restoreHistory(u), this.cancelNavigationTransition(u, ""), !1)), qp(u => {
                                if (u.guards.canActivateChecks.length) return U(u).pipe(Mt(d => {
                                    const f = new zR(d.id, this.serializeUrl(d.extractedUrl), this.serializeUrl(d.urlAfterRedirects), d.targetSnapshot);
                                    this.triggerEvent(f)
                                }), Vi(d => {
                                    let f = !1;
                                    return U(d).pipe(function (t, e) {
                                        return Ue(n => {
                                            const {
                                                targetSnapshot: s,
                                                guards: {
                                                    canActivateChecks: o
                                                }
                                            } = n;
                                            if (!o.length) return U(n);
                                            let l = 0;
                                            return et(o).pipe(_a(c => function (t, e, n, s) {
                                                return function (t, e, n, s) {
                                                    const o = Object.keys(t);
                                                    if (0 === o.length) return U({});
                                                    const l = {};
                                                    return et(o).pipe(Ue(c => function (t, e, n, s) {
                                                        const o = au(t, e, s);
                                                        return Hn(o.resolve ? o.resolve(e, n) : o(e, n))
                                                    }(t[c], e, n, s).pipe(Mt(u => {
                                                        l[c] = u
                                                    }))), Mp(1), Ue(() => Object.keys(l).length === o.length ? U(l) : Fs))
                                                }(t._resolve, t, e, s).pipe(he(l => (t._resolvedData = l, t.data = Object.assign(Object.assign({}, t.data), n4(t, n).resolve), null)))
                                            }(c.route, s, t, e)), Mt(() => l++), Mp(1), Ue(c => l === o.length ? U(n) : Fs))
                                        })
                                    }(this.paramsInheritanceStrategy, this.ngModule.injector), Mt({
                                        next: () => f = !0,
                                        complete: () => {
                                            f || (this.restoreHistory(d), this.cancelNavigationTransition(d, "At least one route resolver didn't emit any value."))
                                        }
                                    }))
                                }), Mt(d => {
                                    const f = new GR(d.id, this.serializeUrl(d.extractedUrl), this.serializeUrl(d.urlAfterRedirects), d.targetSnapshot);
                                    this.triggerEvent(f)
                                }))
                            }), qp(u => {
                                const {
                                    targetSnapshot: d,
                                    id: f,
                                    extractedUrl: p,
                                    rawUrl: g,
                                    extras: {
                                        skipLocationChange: m,
                                        replaceUrl: v
                                    }
                                } = u;
                                return this.hooks.afterPreactivation(d, {
                                    navigationId: f,
                                    appliedUrlTree: p,
                                    rawUrlTree: g,
                                    skipLocationChange: !!m,
                                    replaceUrl: !!v
                                })
                            }), he(u => {
                                const d = function (t, e, n) {
                                    const s = Jc(t, e._root, n ? n._root : void 0);
                                    return new e4(s, e)
                                }(this.routeReuseStrategy, u.targetSnapshot, u.currentRouterState);
                                return Object.assign(Object.assign({}, u), {
                                    targetRouterState: d
                                })
                            }), Mt(u => {
                                this.currentUrlTree = u.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, u.rawUrl), this.routerState = u.targetRouterState, "deferred" === this.urlUpdateStrategy && (u.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, u), this.browserUrlTree = u.urlAfterRedirects)
                            }), ((t, e, n) => he(s => (new xk(e, s.targetRouterState, s.currentRouterState, n).activate(t), s)))(this.rootContexts, this.routeReuseStrategy, u => this.triggerEvent(u)), Mt({
                                next() {
                                    l = !0
                                },
                                complete() {
                                    l = !0
                                }
                            }), function (t) {
                                return e => e.lift(new HR(t))
                            }(() => {
                                if (!l && !c) {
                                    const u = `Navigation ID ${o.id} is not equal to the current navigation id ${this.navigationId}`;
                                    "replace" === this.canceledNavigationResolution ? (this.restoreHistory(o), this.cancelNavigationTransition(o, u)) : this.cancelNavigationTransition(o, u)
                                }
                                this.currentNavigation = null
                            }), yr(u => {
                                if (c = !0, function (t) {
                                        return t && t[$C]
                                    }(u)) {
                                    const d = Cr(u.url);
                                    d || (this.navigated = !0, this.restoreHistory(o, !0));
                                    const f = new LC(o.id, this.serializeUrl(o.extractedUrl), u.message);
                                    s.next(f), d ? setTimeout(() => {
                                        const p = this.urlHandlingStrategy.merge(u.url, this.rawUrlTree),
                                            g = {
                                                skipLocationChange: o.extras.skipLocationChange,
                                                replaceUrl: "eager" === this.urlUpdateStrategy || lu(o.source)
                                            };
                                        this.scheduleNavigation(p, "imperative", null, g, {
                                            resolve: o.resolve,
                                            reject: o.reject,
                                            promise: o.promise
                                        })
                                    }, 0) : o.resolve(!1)
                                } else {
                                    this.restoreHistory(o, !0);
                                    const d = new UR(o.id, this.serializeUrl(o.extractedUrl), u);
                                    s.next(d);
                                    try {
                                        o.resolve(this.errorHandler(u))
                                    } catch (f) {
                                        o.reject(f)
                                    }
                                }
                                return Fs
                            }))
                        }))
                    }
                    resetRootComponentType(n) {
                        this.rootComponentType = n, this.routerState.root.component = this.rootComponentType
                    }
                    getTransition() {
                        const n = this.transitions.value;
                        return n.urlAfterRedirects = this.browserUrlTree, n
                    }
                    setTransition(n) {
                        this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), n))
                    }
                    initialNavigation() {
                        this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                            replaceUrl: !0
                        })
                    }
                    setUpLocationChangeListener() {
                        this.locationSubscription || (this.locationSubscription = this.location.subscribe(n => {
                            const s = this.extractLocationChangeInfoFromEvent(n);
                            this.shouldScheduleNavigation(this.lastLocationChangeInfo, s) && setTimeout(() => {
                                const {
                                    source: o,
                                    state: l,
                                    urlTree: c
                                } = s, u = {
                                    replaceUrl: !0
                                };
                                if (l) {
                                    const d = Object.assign({}, l);
                                    delete d.navigationId, delete d.\u0275routerPageId, 0 !== Object.keys(d).length && (u.state = d)
                                }
                                this.scheduleNavigation(c, o, l, u)
                            }, 0), this.lastLocationChangeInfo = s
                        }))
                    }
                    extractLocationChangeInfoFromEvent(n) {
                        var s;
                        return {
                            source: "popstate" === n.type ? "popstate" : "hashchange",
                            urlTree: this.parseUrl(n.url),
                            state: (null === (s = n.state) || void 0 === s ? void 0 : s.navigationId) ? n.state : null,
                            transitionId: this.getTransition().id
                        }
                    }
                    shouldScheduleNavigation(n, s) {
                        if (!n) return !0;
                        const o = s.urlTree.toString() === n.urlTree.toString();
                        return s.transitionId !== n.transitionId || !o || !("hashchange" === s.source && "popstate" === n.source || "popstate" === s.source && "hashchange" === n.source)
                    }
                    get url() {
                        return this.serializeUrl(this.currentUrlTree)
                    }
                    getCurrentNavigation() {
                        return this.currentNavigation
                    }
                    triggerEvent(n) {
                        this.events.next(n)
                    }
                    resetConfig(n) {
                        f4(n), this.config = n.map(Up), this.navigated = !1, this.lastSuccessfulId = -1
                    }
                    ngOnDestroy() {
                        this.dispose()
                    }
                    dispose() {
                        this.transitions.complete(), this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = void 0), this.disposed = !0
                    }
                    createUrlTree(n, s = {}) {
                        const {
                            relativeTo: o,
                            queryParams: l,
                            fragment: c,
                            queryParamsHandling: u,
                            preserveFragment: d
                        } = s, f = o || this.routerState.root, p = d ? this.currentUrlTree.fragment : c;
                        let g = null;
                        switch (u) {
                            case "merge":
                                g = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), l);
                                break;
                            case "preserve":
                                g = this.currentUrlTree.queryParams;
                                break;
                            default:
                                g = l || null
                        }
                        return null !== g && (g = this.removeEmptyProps(g)),
                            function (t, e, n, s, o) {
                                if (0 === n.length) return Bp(e.root, e.root, e, s, o);
                                const l = function (t) {
                                    if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new a4(!0, 0, t);
                                    let e = 0,
                                        n = !1;
                                    const s = t.reduce((o, l, c) => {
                                        if ("object" == typeof l && null != l) {
                                            if (l.outlets) {
                                                const u = {};
                                                return Ke(l.outlets, (d, f) => {
                                                    u[f] = "string" == typeof d ? d.split("/") : d
                                                }), [...o, {
                                                    outlets: u
                                                }]
                                            }
                                            if (l.segmentPath) return [...o, l.segmentPath]
                                        }
                                        return "string" != typeof l ? [...o, l] : 0 === c ? (l.split("/").forEach((u, d) => {
                                            0 == d && "." === u || (0 == d && "" === u ? n = !0 : ".." === u ? e++ : "" != u && o.push(u))
                                        }), o) : [...o, l]
                                    }, []);
                                    return new a4(n, e, s)
                                }(n);
                                if (l.toRoot()) return Bp(e.root, new Z([], {}), e, s, o);
                                const c = function (t, e, n) {
                                        if (t.isAbsolute) return new $p(e.root, !0, 0);
                                        if (-1 === n.snapshot._lastPathIndex) {
                                            const l = n.snapshot._urlSegment;
                                            return new $p(l, l === e.root, 0)
                                        }
                                        const s = eu(t.commands[0]) ? 0 : 1;
                                        return function (t, e, n) {
                                            let s = t,
                                                o = e,
                                                l = n;
                                            for (; l > o;) {
                                                if (l -= o, s = s.parent, !s) throw new Error("Invalid number of '../'");
                                                o = s.segments.length
                                            }
                                            return new $p(s, !1, o - l)
                                        }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + s, t.numberOfDoubleDots)
                                    }(l, e, t),
                                    u = c.processChildren ? tu(c.segmentGroup, c.index, l.commands) : l4(c.segmentGroup, c.index, l.commands);
                                return Bp(c.segmentGroup, u, e, s, o)
                            }(f, this.currentUrlTree, n, g, null != p ? p : null)
                    }
                    navigateByUrl(n, s = {
                        skipLocationChange: !1
                    }) {
                        const o = Cr(n) ? n : this.parseUrl(n),
                            l = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
                        return this.scheduleNavigation(l, "imperative", null, s)
                    }
                    navigate(n, s = {
                        skipLocationChange: !1
                    }) {
                        return function (t) {
                            for (let e = 0; e < t.length; e++) {
                                const n = t[e];
                                if (null == n) throw new Error(`The requested path contains ${n} segment at index ${e}`)
                            }
                        }(n), this.navigateByUrl(this.createUrlTree(n, s), s)
                    }
                    serializeUrl(n) {
                        return this.urlSerializer.serialize(n)
                    }
                    parseUrl(n) {
                        let s;
                        try {
                            s = this.urlSerializer.parse(n)
                        } catch (o) {
                            s = this.malformedUriErrorHandler(o, this.urlSerializer, n)
                        }
                        return s
                    }
                    isActive(n, s) {
                        let o;
                        if (o = !0 === s ? Object.assign({}, ML) : !1 === s ? Object.assign({}, OL) : s, Cr(n)) return qC(this.currentUrlTree, n, o);
                        const l = this.parseUrl(n);
                        return qC(this.currentUrlTree, l, o)
                    }
                    removeEmptyProps(n) {
                        return Object.keys(n).reduce((s, o) => {
                            const l = n[o];
                            return null != l && (s[o] = l), s
                        }, {})
                    }
                    processNavigations() {
                        this.navigations.subscribe(n => {
                            this.navigated = !0, this.lastSuccessfulId = n.id, this.currentPageId = n.targetPageId, this.events.next(new ba(n.id, this.serializeUrl(n.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, n.resolve(!0)
                        }, n => {
                            this.console.warn("Unhandled Navigation Error: ")
                        })
                    }
                    scheduleNavigation(n, s, o, l, c) {
                        var u, d;
                        if (this.disposed) return Promise.resolve(!1);
                        const f = this.getTransition(),
                            p = lu(s) && f && !lu(f.source),
                            v = (this.lastSuccessfulId === f.id || this.currentNavigation ? f.rawUrl : f.urlAfterRedirects).toString() === n.toString();
                        if (p && v) return Promise.resolve(!0);
                        let y, b, _;
                        c ? (y = c.resolve, b = c.reject, _ = c.promise) : _ = new Promise((S, T) => {
                            y = S, b = T
                        });
                        const E = ++this.navigationId;
                        let C;
                        return "computed" === this.canceledNavigationResolution ? (0 === this.currentPageId && (o = this.location.getState()), C = o && o.\u0275routerPageId ? o.\u0275routerPageId : l.replaceUrl || l.skipLocationChange ? null !== (u = this.browserPageId) && void 0 !== u ? u : 0 : (null !== (d = this.browserPageId) && void 0 !== d ? d : 0) + 1) : C = 0, this.setTransition({
                            id: E,
                            targetPageId: C,
                            source: s,
                            restoredState: o,
                            currentUrlTree: this.currentUrlTree,
                            currentRawUrl: this.rawUrlTree,
                            rawUrl: n,
                            extras: l,
                            resolve: y,
                            reject: b,
                            promise: _,
                            currentSnapshot: this.routerState.snapshot,
                            currentRouterState: this.routerState
                        }), _.catch(S => Promise.reject(S))
                    }
                    setBrowserUrl(n, s) {
                        const o = this.urlSerializer.serialize(n),
                            l = Object.assign(Object.assign({}, s.extras.state), this.generateNgRouterState(s.id, s.targetPageId));
                        this.location.isCurrentPathEqualTo(o) || s.extras.replaceUrl ? this.location.replaceState(o, "", l) : this.location.go(o, "", l)
                    }
                    restoreHistory(n, s = !1) {
                        var o, l;
                        if ("computed" === this.canceledNavigationResolution) {
                            const c = this.currentPageId - n.targetPageId;
                            "popstate" !== n.source && "eager" !== this.urlUpdateStrategy && this.currentUrlTree !== (null === (o = this.currentNavigation) || void 0 === o ? void 0 : o.finalUrl) || 0 === c ? this.currentUrlTree === (null === (l = this.currentNavigation) || void 0 === l ? void 0 : l.finalUrl) && 0 === c && (this.resetState(n), this.browserUrlTree = n.currentUrlTree, this.resetUrlToCurrentUrlTree()) : this.location.historyGo(c)
                        } else "replace" === this.canceledNavigationResolution && (s && this.resetState(n), this.resetUrlToCurrentUrlTree())
                    }
                    resetState(n) {
                        this.routerState = n.currentRouterState, this.currentUrlTree = n.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n.rawUrl)
                    }
                    resetUrlToCurrentUrlTree() {
                        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
                    }
                    cancelNavigationTransition(n, s) {
                        const o = new LC(n.id, this.serializeUrl(n.extractedUrl), s);
                        this.triggerEvent(o), n.resolve(!1)
                    }
                    generateNgRouterState(n, s) {
                        return "computed" === this.canceledNavigationResolution ? {
                            navigationId: n,
                            \u0275routerPageId: s
                        } : {
                            navigationId: n
                        }
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(sl), A(xp), A(js), A(lc), A(ne), A(Ql), A(ir), A(void 0))
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();

            function lu(t) {
                return "imperative" !== t
            }
            let Ot = (() => {
                class t {
                    constructor(n, s, o) {
                        this.router = n, this.route = s, this.locationStrategy = o, this.commands = [], this.onChanges = new qn, this.subscription = n.events.subscribe(l => {
                            l instanceof ba && this.updateTargetUrlAndHref()
                        })
                    }
                    set routerLink(n) {
                        this.commands = null != n ? Array.isArray(n) ? n : [n] : []
                    }
                    ngOnChanges(n) {
                        this.updateTargetUrlAndHref(), this.onChanges.next(this)
                    }
                    ngOnDestroy() {
                        this.subscription.unsubscribe()
                    }
                    onClick(n, s, o, l, c) {
                        if (0 !== n || s || o || l || c || "string" == typeof this.target && "_self" != this.target) return !0;
                        const u = {
                            skipLocationChange: Us(this.skipLocationChange),
                            replaceUrl: Us(this.replaceUrl),
                            state: this.state
                        };
                        return this.router.navigateByUrl(this.urlTree, u), !1
                    }
                    updateTargetUrlAndHref() {
                        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
                    }
                    get urlTree() {
                        return this.router.createUrlTree(this.commands, {
                            relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                            queryParams: this.queryParams,
                            fragment: this.fragment,
                            queryParamsHandling: this.queryParamsHandling,
                            preserveFragment: Us(this.preserveFragment)
                        })
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(N(gt), N(Hs), N(As))
                }, t.\u0275dir = ze({
                    type: t,
                    selectors: [
                        ["a", "routerLink", ""],
                        ["area", "routerLink", ""]
                    ],
                    hostVars: 2,
                    hostBindings: function (n, s) {
                        1 & n && ei("click", function (l) {
                            return s.onClick(l.button, l.ctrlKey, l.shiftKey, l.altKey, l.metaKey)
                        }), 2 & n && (fh("href", s.href, pl), th("target", s.target))
                    },
                    inputs: {
                        routerLink: "routerLink",
                        target: "target",
                        queryParams: "queryParams",
                        fragment: "fragment",
                        queryParamsHandling: "queryParamsHandling",
                        preserveFragment: "preserveFragment",
                        skipLocationChange: "skipLocationChange",
                        replaceUrl: "replaceUrl",
                        state: "state",
                        relativeTo: "relativeTo"
                    },
                    features: [pi]
                }), t
            })();

            function Us(t) {
                return "" === t || !!t
            }
            let Gp = (() => {
                class t {
                    constructor(n, s, o, l, c) {
                        this.parentContexts = n, this.location = s, this.resolver = o, this.changeDetector = c, this.activated = null, this._activatedRoute = null, this.activateEvents = new Dt, this.deactivateEvents = new Dt, this.name = l || X, n.onChildOutletCreated(this.name, this)
                    }
                    ngOnDestroy() {
                        this.parentContexts.onChildOutletDestroyed(this.name)
                    }
                    ngOnInit() {
                        if (!this.activated) {
                            const n = this.parentContexts.getContext(this.name);
                            n && n.route && (n.attachRef ? this.attach(n.attachRef, n.route) : this.activateWith(n.route, n.resolver || null))
                        }
                    }
                    get isActivated() {
                        return !!this.activated
                    }
                    get component() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this.activated.instance
                    }
                    get activatedRoute() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this._activatedRoute
                    }
                    get activatedRouteData() {
                        return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                    }
                    detach() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        this.location.detach();
                        const n = this.activated;
                        return this.activated = null, this._activatedRoute = null, n
                    }
                    attach(n, s) {
                        this.activated = n, this._activatedRoute = s, this.location.insert(n.hostView)
                    }
                    deactivate() {
                        if (this.activated) {
                            const n = this.component;
                            this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(n)
                        }
                    }
                    activateWith(n, s) {
                        if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                        this._activatedRoute = n;
                        const c = (s = s || this.resolver).resolveComponentFactory(n._futureSnapshot.routeConfig.component),
                            u = this.parentContexts.getOrCreateContext(this.name).children,
                            d = new RL(n, u, this.location.injector);
                        this.activated = this.location.createComponent(c, this.location.length, d), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(N(js), N(dn), N(Di), function (t) {
                        return function (t, e) {
                            if ("class" === e) return t.classes;
                            if ("style" === e) return t.styles;
                            const n = t.attrs;
                            if (n) {
                                const s = n.length;
                                let o = 0;
                                for (; o < s;) {
                                    const l = n[o];
                                    if (W1(l)) break;
                                    if (0 === l) o += 2;
                                    else if ("number" == typeof l)
                                        for (o++; o < s && "string" == typeof n[o];) o++;
                                    else {
                                        if (l === e) return n[o + 1];
                                        o += 2
                                    }
                                }
                            }
                            return null
                        }(Re(), t)
                    }("name"), N($l))
                }, t.\u0275dir = ze({
                    type: t,
                    selectors: [
                        ["router-outlet"]
                    ],
                    outputs: {
                        activateEvents: "activate",
                        deactivateEvents: "deactivate"
                    },
                    exportAs: ["outlet"]
                }), t
            })();
            class RL {
                constructor(e, n, s) {
                    this.route = e, this.childContexts = n, this.parent = s
                }
                get(e, n) {
                    return e === Hs ? this.route : e === js ? this.childContexts : this.parent.get(e, n)
                }
            }
            class M4 {}
            class O4 {
                preload(e, n) {
                    return U(null)
                }
            }
            let N4 = (() => {
                    class t {
                        constructor(n, s, o, l, c) {
                            this.router = n, this.injector = l, this.preloadingStrategy = c, this.loader = new A4(s, o, f => n.triggerEvent(new FC(f)), f => n.triggerEvent(new VC(f)))
                        }
                        setUpPreloading() {
                            this.subscription = this.router.events.pipe(Vs(n => n instanceof ba), _a(() => this.preload())).subscribe(() => {})
                        }
                        preload() {
                            const n = this.injector.get(Rn);
                            return this.processRoutes(n, this.router.config)
                        }
                        ngOnDestroy() {
                            this.subscription && this.subscription.unsubscribe()
                        }
                        processRoutes(n, s) {
                            const o = [];
                            for (const l of s)
                                if (l.loadChildren && !l.canLoad && l._loadedConfig) {
                                    const c = l._loadedConfig;
                                    o.push(this.processRoutes(c.module, c.routes))
                                } else l.loadChildren && !l.canLoad ? o.push(this.preloadConfig(n, l)) : l.children && o.push(this.processRoutes(n, l.children));
                            return et(o).pipe(Gs(), he(l => {}))
                        }
                        preloadConfig(n, s) {
                            return this.preloadingStrategy.preload(s, () => (s._loadedConfig ? U(s._loadedConfig) : this.loader.load(n.injector, s)).pipe(Ue(l => (s._loadedConfig = l, this.processRoutes(l.module, l.routes)))))
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)(A(gt), A(Ql), A(ir), A(ne), A(M4))
                    }, t.\u0275prov = W({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })(),
                Yp = (() => {
                    class t {
                        constructor(n, s, o = {}) {
                            this.router = n, this.viewportScroller = s, this.options = o, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, o.scrollPositionRestoration = o.scrollPositionRestoration || "disabled", o.anchorScrolling = o.anchorScrolling || "disabled"
                        }
                        init() {
                            "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
                        }
                        createScrollEvents() {
                            return this.router.events.subscribe(n => {
                                n instanceof Op ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = n.navigationTrigger, this.restoredId = n.restoredState ? n.restoredState.navigationId : 0) : n instanceof ba && (this.lastId = n.id, this.scheduleScrollEvent(n, this.router.parseUrl(n.urlAfterRedirects).fragment))
                            })
                        }
                        consumeScrollEvents() {
                            return this.router.events.subscribe(n => {
                                n instanceof BC && (n.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(n.position) : n.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(n.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
                            })
                        }
                        scheduleScrollEvent(n, s) {
                            this.router.triggerEvent(new BC(n, "popstate" === this.lastSource ? this.store[this.restoredId] : null, s))
                        }
                        ngOnDestroy() {
                            this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)(A(gt), A(b_), A(void 0))
                    }, t.\u0275prov = W({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })();
            const Er = new te("ROUTER_CONFIGURATION"),
                x4 = new te("ROUTER_FORROOT_GUARD"),
                LL = [lc, {
                    provide: xp,
                    useClass: YC
                }, {
                    provide: gt,
                    useFactory: function (t, e, n, s, o, l, c, u = {}, d, f) {
                        const p = new gt(null, t, e, n, s, o, l, jC(c));
                        return d && (p.urlHandlingStrategy = d), f && (p.routeReuseStrategy = f),
                            function (t, e) {
                                t.errorHandler && (e.errorHandler = t.errorHandler), t.malformedUriErrorHandler && (e.malformedUriErrorHandler = t.malformedUriErrorHandler), t.onSameUrlNavigation && (e.onSameUrlNavigation = t.onSameUrlNavigation), t.paramsInheritanceStrategy && (e.paramsInheritanceStrategy = t.paramsInheritanceStrategy), t.relativeLinkResolution && (e.relativeLinkResolution = t.relativeLinkResolution), t.urlUpdateStrategy && (e.urlUpdateStrategy = t.urlUpdateStrategy)
                            }(u, p), u.enableTracing && p.events.subscribe(g => {
                                var m, v;
                                null === (m = console.group) || void 0 === m || m.call(console, `Router Event: ${g.constructor.name}`), console.log(g.toString()), console.log(g), null === (v = console.groupEnd) || void 0 === v || v.call(console)
                            }), p
                    },
                    deps: [xp, js, lc, ne, Ql, ir, Kp, Er, [class {}, new dt],
                        [class {}, new dt]
                    ]
                }, js, {
                    provide: Hs,
                    useFactory: function (t) {
                        return t.routerState.root
                    },
                    deps: [gt]
                }, {
                    provide: Ql,
                    useClass: uS
                }, N4, O4, class {
                    preload(e, n) {
                        return n().pipe(yr(() => U(null)))
                    }
                }, {
                    provide: Er,
                    useValue: {
                        enableTracing: !1
                    }
                }];

            function FL() {
                return new of ("Router", gt)
            }
            let P4 = (() => {
                class t {
                    constructor(n, s) {}
                    static forRoot(n, s) {
                        return {
                            ngModule: t,
                            providers: [LL, R4(n), {
                                    provide: x4,
                                    useFactory: $L,
                                    deps: [
                                        [gt, new dt, new _i]
                                    ]
                                }, {
                                    provide: Er,
                                    useValue: s || {}
                                }, {
                                    provide: As,
                                    useFactory: BL,
                                    deps: [or, [new Ur(wf), new dt], Er]
                                }, {
                                    provide: Yp,
                                    useFactory: VL,
                                    deps: [gt, b_, Er]
                                }, {
                                    provide: M4,
                                    useExisting: s && s.preloadingStrategy ? s.preloadingStrategy : O4
                                }, {
                                    provide: of ,
                                    multi: !0,
                                    useFactory: FL
                                },
                                [Xp, {
                                    provide: qo,
                                    multi: !0,
                                    useFactory: WL,
                                    deps: [Xp]
                                }, {
                                    provide: k4,
                                    useFactory: qL,
                                    deps: [Xp]
                                }, {
                                    provide: d2,
                                    multi: !0,
                                    useExisting: k4
                                }]
                            ]
                        }
                    }
                    static forChild(n) {
                        return {
                            ngModule: t,
                            providers: [R4(n)]
                        }
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(x4, 8), A(gt, 8))
                }, t.\u0275mod = hi({
                    type: t
                }), t.\u0275inj = En({}), t
            })();

            function VL(t, e, n) {
                return n.scrollOffset && e.setOffset(n.scrollOffset), new Yp(t, e, n)
            }

            function BL(t, e, n = {}) {
                return n.useHash ? new OA(t, e) : new t_(t, e)
            }

            function $L(t) {
                return "guarded"
            }

            function R4(t) {
                return [{
                    provide: xE,
                    multi: !0,
                    useValue: t
                }, {
                    provide: Kp,
                    multi: !0,
                    useValue: t
                }]
            }
            let Xp = (() => {
                class t {
                    constructor(n) {
                        this.injector = n, this.initNavigation = !1, this.destroyed = !1, this.resultOfPreactivationDone = new qn
                    }
                    appInitializer() {
                        return this.injector.get(AA, Promise.resolve(null)).then(() => {
                            if (this.destroyed) return Promise.resolve(!0);
                            let s = null;
                            const o = new Promise(u => s = u),
                                l = this.injector.get(gt),
                                c = this.injector.get(Er);
                            return "disabled" === c.initialNavigation ? (l.setUpLocationChangeListener(), s(!0)) : "enabled" === c.initialNavigation || "enabledBlocking" === c.initialNavigation ? (l.hooks.afterPreactivation = () => this.initNavigation ? U(null) : (this.initNavigation = !0, s(!0), this.resultOfPreactivationDone), l.initialNavigation()) : s(!0), o
                        })
                    }
                    bootstrapListener(n) {
                        const s = this.injector.get(Er),
                            o = this.injector.get(N4),
                            l = this.injector.get(Yp),
                            c = this.injector.get(gt),
                            u = this.injector.get(Ds);
                        n === u.components[0] && (("enabledNonBlocking" === s.initialNavigation || void 0 === s.initialNavigation) && c.initialNavigation(), o.setUpPreloading(), l.init(), c.resetRootComponentType(u.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
                    }
                    ngOnDestroy() {
                        this.destroyed = !0
                    }
                }
                return t.\u0275fac = function (n) {
                    return new(n || t)(A(ne))
                }, t.\u0275prov = W({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })();

            function WL(t) {
                return t.appInitializer.bind(t)
            }

            function qL(t) {
                return t.bootstrapListener.bind(t)
            }
            const k4 = new te("Router Initializer");
            let zL = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-market-pairs"]
                        ],
                        decls: 1124,
                        vars: 0,
                        consts: [
                            [1, "market-pairs"],
                            [1, "input-group"],
                            [1, "input-group-prepend"],
                            ["id", "inputGroup-sizing-sm", 1, "input-group-text"],
                            [1, "icon", "ion-md-search"],
                            ["type", "text", "placeholder", "Search", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"],
                            ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"],
                            ["role", "presentation", 1, "nav-item"],
                            ["id", "favorites-id", "data-bs-toggle", "tab", "data-bs-target", "#favorites", "type", "button", "role", "tab", "aria-controls", "favorites", "aria-selected", "true", 1, "nav-link"],
                            ["id", "btc-id", "data-bs-toggle", "tab", "data-bs-target", "#btc", "type", "button", "role", "tab", "aria-controls", "btc", "aria-selected", "false", 1, "nav-link", "active"],
                            ["id", "kcs-id", "data-bs-toggle", "tab", "data-bs-target", "#kcs", "type", "button", "role", "tab", "aria-controls", "kcs", "aria-selected", "false", 1, "nav-link"],
                            ["id", "usdt-id", "data-bs-toggle", "tab", "data-bs-target", "#usdt", "type", "button", "role", "tab", "aria-controls", "usdt", "aria-selected", "false", 1, "nav-link"],
                            ["id", "alts-id", "data-bs-toggle", "tab", "data-bs-target", "#alts", "type", "button", "role", "tab", "aria-controls", "alts", "aria-selected", "false", 1, "nav-link"],
                            ["id", "dai-id", "data-bs-toggle", "tab", "data-bs-target", "#dai", "type", "button", "role", "tab", "aria-controls", "dai", "aria-selected", "false", 1, "nav-link"],
                            ["id", "myTabContent", 1, "tab-content"],
                            ["id", "favorites", "role", "tabpanel", "aria-labelledby", "favorites-id", 1, "tab-pane", "fade"],
                            [1, "table", "star-active"],
                            [1, "icon", "ion-md-star"],
                            [1, "red"],
                            [1, "green"],
                            ["id", "btc", "role", "tabpanel", "aria-labelledby", "btc-id", 1, "tab-pane", "fade", "show", "active"],
                            [1, "table"],
                            ["id", "kcs", "role", "tabpanel", "aria-labelledby", "kcs-id", 1, "tab-pane", "fade"],
                            ["id", "usdt", "role", "tabpanel", "aria-labelledby", "usdt-id", 1, "tab-pane", "fade"],
                            ["id", "alts", "role", "tabpanel", "aria-labelledby", "alts-id", 1, "tab-pane", "fade"],
                            ["id", "dai", "role", "tabpanel", "aria-labelledby", "dai-id", 1, "tab-pane", "fade"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "div", 2), i(3, "span", 3), h(4, "i", 4), r(), r(), h(5, "input", 5), r(), i(6, "ul", 6), i(7, "li", 7), i(8, "button", 8), a(9, " \u2605 "), r(), r(), i(10, "li", 7), i(11, "button", 9), a(12, " BTC "), r(), r(), i(13, "li", 7), i(14, "button", 10), a(15, " ETH "), r(), r(), i(16, "li", 7), i(17, "button", 11), a(18, " NEO "), r(), r(), i(19, "li", 7), i(20, "button", 12), a(21, " USDT "), r(), r(), i(22, "li", 7), i(23, "button", 13), a(24, " DAI "), r(), r(), r(), i(25, "div", 14), i(26, "div", 15), i(27, "table", 16), i(28, "thead"), i(29, "tr"), i(30, "th"), a(31, "Pairs"), r(), i(32, "th"), a(33, "Last Price"), r(), i(34, "th"), a(35, "Change"), r(), r(), r(), i(36, "tbody"), i(37, "tr"), i(38, "td"), h(39, "i", 17), a(40, " ETH/BTC"), r(), i(41, "td"), a(42, "0.00020255"), r(), i(43, "td", 18), a(44, "-2.58%"), r(), r(), i(45, "tr"), i(46, "td"), h(47, "i", 17), a(48, " KCS/BTC"), r(), i(49, "td"), a(50, "0.00013192"), r(), i(51, "td", 19), a(52, "+5.6%"), r(), r(), i(53, "tr"), i(54, "td"), h(55, "i", 17), a(56, " XRP/BTC"), r(), i(57, "td"), a(58, "0.00002996"), r(), i(59, "td", 18), a(60, "-1.55%"), r(), r(), i(61, "tr"), i(62, "td"), h(63, "i", 17), a(64, " VET/BTC"), r(), i(65, "td"), a(66, "0.00000103"), r(), i(67, "td", 19), a(68, "+1.8%"), r(), r(), r(), r(), r(), i(69, "div", 20), i(70, "table", 21), i(71, "thead"), i(72, "tr"), i(73, "th"), a(74, "Pairs"), r(), i(75, "th"), a(76, "Last Price"), r(), i(77, "th"), a(78, "Change"), r(), r(), r(), i(79, "tbody"), i(80, "tr"), i(81, "td"), h(82, "i", 17), a(83, " ETH/BTC"), r(), i(84, "td"), a(85, "0.00020255"), r(), i(86, "td", 18), a(87, "-2.58%"), r(), r(), i(88, "tr"), i(89, "td"), h(90, "i", 17), a(91, " KCS/BTC"), r(), i(92, "td"), a(93, "0.00013192"), r(), i(94, "td", 19), a(95, "+5.6%"), r(), r(), i(96, "tr"), i(97, "td"), h(98, "i", 17), a(99, " XRP/BTC"), r(), i(100, "td"), a(101, "0.00002996"), r(), i(102, "td", 18), a(103, "-1.55%"), r(), r(), i(104, "tr"), i(105, "td"), h(106, "i", 17), a(107, " VET/BTC"), r(), i(108, "td"), a(109, "0.00000103"), r(), i(110, "td", 19), a(111, "+1.8%"), r(), r(), i(112, "tr"), i(113, "td"), h(114, "i", 17), a(115, " EOS/BTC"), r(), i(116, "td"), a(117, "0.00000103"), r(), i(118, "td", 18), a(119, "-2.05%"), r(), r(), i(120, "tr"), i(121, "td"), h(122, "i", 17), a(123, " BTT/BTC"), r(), i(124, "td"), a(125, "0.00002303"), r(), i(126, "td", 18), a(127, "-1.05%"), r(), r(), i(128, "tr"), i(129, "td"), h(130, "i", 17), a(131, " LTC/BTC"), r(), i(132, "td"), a(133, "0.03520103"), r(), i(134, "td", 19), a(135, "+1.5%"), r(), r(), i(136, "tr"), i(137, "td"), h(138, "i", 17), a(139, " TRX/BTC"), r(), i(140, "td"), a(141, "0.00330103"), r(), i(142, "td", 18), a(143, "-3.05%"), r(), r(), i(144, "tr"), i(145, "td"), h(146, "i", 17), a(147, " BSV/BTC"), r(), i(148, "td"), a(149, "0.00300103"), r(), i(150, "td", 19), a(151, "+2.05%"), r(), r(), i(152, "tr"), i(153, "td"), h(154, "i", 17), a(155, " COTI/BTC"), r(), i(156, "td"), a(157, "0.003500103"), r(), i(158, "td", 19), a(159, "+2.85%"), r(), r(), i(160, "tr"), i(161, "td"), h(162, "i", 17), a(163, " XYT/BTC"), r(), i(164, "td"), a(165, "0.00003103"), r(), i(166, "td", 19), a(167, "+3.55%"), r(), r(), i(168, "tr"), i(169, "td"), h(170, "i", 17), a(171, " BNB/BTC"), r(), i(172, "td"), a(173, "0.003500103"), r(), i(174, "td", 18), a(175, "-2.05%"), r(), r(), i(176, "tr"), i(177, "td"), h(178, "i", 17), a(179, " XMR/BTC"), r(), i(180, "td"), a(181, "0.003500103"), r(), i(182, "td", 18), a(183, "-1.05%"), r(), r(), i(184, "tr"), i(185, "td"), h(186, "i", 17), a(187, " TRY/BTC"), r(), i(188, "td"), a(189, "0.00000123"), r(), i(190, "td", 18), a(191, "-2.05%"), r(), r(), i(192, "tr"), i(193, "td"), h(194, "i", 17), a(195, " ADA/BTC"), r(), i(196, "td"), a(197, "0.00050103"), r(), i(198, "td", 19), a(199, "+5.05%"), r(), r(), i(200, "tr"), i(201, "td"), h(202, "i", 17), a(203, " NEO/BTC"), r(), i(204, "td"), a(205, "0.00340103"), r(), i(206, "td", 18), a(207, "-1.05%"), r(), r(), i(208, "tr"), i(209, "td"), h(210, "i", 17), a(211, " XLM/BTC"), r(), i(212, "td"), a(213, "0.00035103"), r(), i(214, "td", 19), a(215, "+5.05%"), r(), r(), i(216, "tr"), i(217, "td"), h(218, "i", 17), a(219, " ENQ/BTC"), r(), i(220, "td"), a(221, "0.00354103"), r(), i(222, "td", 19), a(223, "+2.02%"), r(), r(), i(224, "tr"), i(225, "td"), h(226, "i", 17), a(227, " AVA/BTC"), r(), i(228, "td"), a(229, "0.02535103"), r(), i(230, "td", 19), a(231, "+3.05%"), r(), r(), i(232, "tr"), i(233, "td"), h(234, "i", 17), a(235, " AMB/BTC"), r(), i(236, "td"), a(237, "0.05335103"), r(), i(238, "td", 19), a(239, "+1.0%"), r(), r(), i(240, "tr"), i(241, "td"), h(242, "i", 17), a(243, " MAP/BTC"), r(), i(244, "td"), a(245, "0.00234103"), r(), i(246, "td", 18), a(247, "-2.05%"), r(), r(), i(248, "tr"), i(249, "td"), h(250, "i", 17), a(251, " GO/BTC"), r(), i(252, "td"), a(253, "0.00354103"), r(), i(254, "td", 18), a(255, "-6.50%"), r(), r(), i(256, "tr"), i(257, "td"), h(258, "i", 17), a(259, " KICK/BTC"), r(), i(260, "td"), a(261, "0.02053103"), r(), i(262, "td", 18), a(263, "-6.05%"), r(), r(), i(264, "tr"), i(265, "td"), h(266, "i", 17), a(267, " DBC/BTC"), r(), i(268, "td"), a(269, "0.02535103"), r(), i(270, "td", 19), a(271, "+7.05%"), r(), r(), i(272, "tr"), i(273, "td"), h(274, "i", 17), a(275, " GGC/BTC"), r(), i(276, "td"), a(277, "0.00353103"), r(), i(278, "td", 18), a(279, "-4.05%"), r(), r(), r(), r(), r(), i(280, "div", 22), i(281, "table", 21), i(282, "thead"), i(283, "tr"), i(284, "th"), a(285, "Pairs"), r(), i(286, "th"), a(287, "Last Price"), r(), i(288, "th"), a(289, "Change"), r(), r(), r(), i(290, "tbody"), i(291, "tr"), i(292, "td"), h(293, "i", 17), a(294, " BTC/ETH"), r(), i(295, "td"), a(296, "0.00020255"), r(), i(297, "td", 19), a(298, "+1.58%"), r(), r(), i(299, "tr"), i(300, "td"), h(301, "i", 17), a(302, " KCS/ETH"), r(), i(303, "td"), a(304, "0.00013192"), r(), i(305, "td", 18), a(306, "-0.6%"), r(), r(), i(307, "tr"), i(308, "td"), h(309, "i", 17), a(310, " XRP/ETH"), r(), i(311, "td"), a(312, "0.00002996"), r(), i(313, "td", 18), a(314, "-0.55%"), r(), r(), i(315, "tr"), i(316, "td"), h(317, "i", 17), a(318, " VET/ETH"), r(), i(319, "td"), a(320, "0.00000103"), r(), i(321, "td", 19), a(322, "+1.8%"), r(), r(), i(323, "tr"), i(324, "td"), h(325, "i", 17), a(326, " EOS/ETH"), r(), i(327, "td"), a(328, "0.00000103"), r(), i(329, "td", 18), a(330, "-2.05%"), r(), r(), i(331, "tr"), i(332, "td"), h(333, "i", 17), a(334, " BTT/ETH"), r(), i(335, "td"), a(336, "0.00002303"), r(), i(337, "td", 18), a(338, "-1.05%"), r(), r(), i(339, "tr"), i(340, "td"), h(341, "i", 17), a(342, " LTC/ETH"), r(), i(343, "td"), a(344, "0.03520103"), r(), i(345, "td", 19), a(346, "+1.5%"), r(), r(), i(347, "tr"), i(348, "td"), h(349, "i", 17), a(350, " TRX/ETH"), r(), i(351, "td"), a(352, "0.00330103"), r(), i(353, "td", 18), a(354, "-3.05%"), r(), r(), i(355, "tr"), i(356, "td"), h(357, "i", 17), a(358, " BSV/ETH"), r(), i(359, "td"), a(360, "0.00300103"), r(), i(361, "td", 19), a(362, "+2.05%"), r(), r(), i(363, "tr"), i(364, "td"), h(365, "i", 17), a(366, " COTI/ETH"), r(), i(367, "td"), a(368, "0.003500103"), r(), i(369, "td", 19), a(370, "+2.85%"), r(), r(), i(371, "tr"), i(372, "td"), h(373, "i", 17), a(374, " XYT/ETH"), r(), i(375, "td"), a(376, "0.00003103"), r(), i(377, "td", 19), a(378, "+3.55%"), r(), r(), i(379, "tr"), i(380, "td"), h(381, "i", 17), a(382, " BNB/ETH"), r(), i(383, "td"), a(384, "0.003500103"), r(), i(385, "td", 18), a(386, "-2.05%"), r(), r(), i(387, "tr"), i(388, "td"), h(389, "i", 17), a(390, " XMR/ETH"), r(), i(391, "td"), a(392, "0.003500103"), r(), i(393, "td", 18), a(394, "-1.05%"), r(), r(), i(395, "tr"), i(396, "td"), h(397, "i", 17), a(398, " TRY/ETH"), r(), i(399, "td"), a(400, "0.00000123"), r(), i(401, "td", 18), a(402, "-2.05%"), r(), r(), i(403, "tr"), i(404, "td"), h(405, "i", 17), a(406, " ADA/ETH"), r(), i(407, "td"), a(408, "0.00050103"), r(), i(409, "td", 19), a(410, "+5.05%"), r(), r(), i(411, "tr"), i(412, "td"), h(413, "i", 17), a(414, " NEO/ETH"), r(), i(415, "td"), a(416, "0.00340103"), r(), i(417, "td", 18), a(418, "-1.05%"), r(), r(), i(419, "tr"), i(420, "td"), h(421, "i", 17), a(422, " XLM/ETH"), r(), i(423, "td"), a(424, "0.00035103"), r(), i(425, "td", 19), a(426, "+5.05%"), r(), r(), i(427, "tr"), i(428, "td"), h(429, "i", 17), a(430, " ENQ/ETH"), r(), i(431, "td"), a(432, "0.00354103"), r(), i(433, "td", 19), a(434, "+2.02%"), r(), r(), i(435, "tr"), i(436, "td"), h(437, "i", 17), a(438, " AVA/ETH"), r(), i(439, "td"), a(440, "0.02535103"), r(), i(441, "td", 19), a(442, "+3.05%"), r(), r(), i(443, "tr"), i(444, "td"), h(445, "i", 17), a(446, " AMB/ETH"), r(), i(447, "td"), a(448, "0.05335103"), r(), i(449, "td", 19), a(450, "+1.0%"), r(), r(), i(451, "tr"), i(452, "td"), h(453, "i", 17), a(454, " MAP/ETH"), r(), i(455, "td"), a(456, "0.00234103"), r(), i(457, "td", 18), a(458, "-2.05%"), r(), r(), i(459, "tr"), i(460, "td"), h(461, "i", 17), a(462, " GO/ETH"), r(), i(463, "td"), a(464, "0.00354103"), r(), i(465, "td", 18), a(466, "-6.50%"), r(), r(), i(467, "tr"), i(468, "td"), h(469, "i", 17), a(470, " KICK/ETH"), r(), i(471, "td"), a(472, "0.02053103"), r(), i(473, "td", 18), a(474, "-6.05%"), r(), r(), i(475, "tr"), i(476, "td"), h(477, "i", 17), a(478, " DBC/ETH"), r(), i(479, "td"), a(480, "0.02535103"), r(), i(481, "td", 19), a(482, "+7.05%"), r(), r(), i(483, "tr"), i(484, "td"), h(485, "i", 17), a(486, " GGC/ETH"), r(), i(487, "td"), a(488, "0.00353103"), r(), i(489, "td", 18), a(490, "-4.05%"), r(), r(), r(), r(), r(), i(491, "div", 23), i(492, "table", 21), i(493, "thead"), i(494, "tr"), i(495, "th"), a(496, "Pairs"), r(), i(497, "th"), a(498, "Last Price"), r(), i(499, "th"), a(500, "Change"), r(), r(), r(), i(501, "tbody"), i(502, "tr"), i(503, "td"), h(504, "i", 17), a(505, " ETH/NEO"), r(), i(506, "td"), a(507, "0.00350255"), r(), i(508, "td", 18), a(509, "-6.58%"), r(), r(), i(510, "tr"), i(511, "td"), h(512, "i", 17), a(513, " KCS/NEO"), r(), i(514, "td"), a(515, "0.00013192"), r(), i(516, "td", 19), a(517, "+0.6%"), r(), r(), i(518, "tr"), i(519, "td"), h(520, "i", 17), a(521, " XRP/NEO"), r(), i(522, "td"), a(523, "0.00002996"), r(), i(524, "td", 18), a(525, "-0.55%"), r(), r(), i(526, "tr"), i(527, "td"), h(528, "i", 17), a(529, " VET/NEO"), r(), i(530, "td"), a(531, "0.00000103"), r(), i(532, "td", 19), a(533, "+1.8%"), r(), r(), i(534, "tr"), i(535, "td"), h(536, "i", 17), a(537, " EOS/NEO"), r(), i(538, "td"), a(539, "0.00000103"), r(), i(540, "td", 18), a(541, "-2.05%"), r(), r(), i(542, "tr"), i(543, "td"), h(544, "i", 17), a(545, " BTT/NEO"), r(), i(546, "td"), a(547, "0.00002303"), r(), i(548, "td", 18), a(549, "-1.05%"), r(), r(), i(550, "tr"), i(551, "td"), h(552, "i", 17), a(553, " LTC/NEO"), r(), i(554, "td"), a(555, "0.03520103"), r(), i(556, "td", 19), a(557, "+1.5%"), r(), r(), i(558, "tr"), i(559, "td"), h(560, "i", 17), a(561, " TRX/NEO"), r(), i(562, "td"), a(563, "0.00330103"), r(), i(564, "td", 18), a(565, "-3.05%"), r(), r(), i(566, "tr"), i(567, "td"), h(568, "i", 17), a(569, " BSV/NEO"), r(), i(570, "td"), a(571, "0.00300103"), r(), i(572, "td", 19), a(573, "+2.05%"), r(), r(), i(574, "tr"), i(575, "td"), h(576, "i", 17), a(577, " COTI/NEO"), r(), i(578, "td"), a(579, "0.003500103"), r(), i(580, "td", 19), a(581, "+2.85%"), r(), r(), i(582, "tr"), i(583, "td"), h(584, "i", 17), a(585, " XYT/NEO"), r(), i(586, "td"), a(587, "0.00003103"), r(), i(588, "td", 19), a(589, "+3.55%"), r(), r(), i(590, "tr"), i(591, "td"), h(592, "i", 17), a(593, " BNB/NEO"), r(), i(594, "td"), a(595, "0.003500103"), r(), i(596, "td", 18), a(597, "-2.05%"), r(), r(), i(598, "tr"), i(599, "td"), h(600, "i", 17), a(601, " XMR/NEO"), r(), i(602, "td"), a(603, "0.003500103"), r(), i(604, "td", 18), a(605, "-1.05%"), r(), r(), i(606, "tr"), i(607, "td"), h(608, "i", 17), a(609, " TRY/NEO"), r(), i(610, "td"), a(611, "0.00000123"), r(), i(612, "td", 18), a(613, "-2.05%"), r(), r(), i(614, "tr"), i(615, "td"), h(616, "i", 17), a(617, " ADA/NEO"), r(), i(618, "td"), a(619, "0.00050103"), r(), i(620, "td", 19), a(621, "+5.05%"), r(), r(), i(622, "tr"), i(623, "td"), h(624, "i", 17), a(625, " NEO/NEO"), r(), i(626, "td"), a(627, "0.00340103"), r(), i(628, "td", 18), a(629, "-1.05%"), r(), r(), i(630, "tr"), i(631, "td"), h(632, "i", 17), a(633, " XLM/NEO"), r(), i(634, "td"), a(635, "0.00035103"), r(), i(636, "td", 19), a(637, "+5.05%"), r(), r(), i(638, "tr"), i(639, "td"), h(640, "i", 17), a(641, " ENQ/NEO"), r(), i(642, "td"), a(643, "0.00354103"), r(), i(644, "td", 19), a(645, "+2.02%"), r(), r(), i(646, "tr"), i(647, "td"), h(648, "i", 17), a(649, " AVA/NEO"), r(), i(650, "td"), a(651, "0.02535103"), r(), i(652, "td", 19), a(653, "+3.05%"), r(), r(), i(654, "tr"), i(655, "td"), h(656, "i", 17), a(657, " AMB/NEO"), r(), i(658, "td"), a(659, "0.05335103"), r(), i(660, "td", 19), a(661, "+1.0%"), r(), r(), i(662, "tr"), i(663, "td"), h(664, "i", 17), a(665, " MAP/NEO"), r(), i(666, "td"), a(667, "0.00234103"), r(), i(668, "td", 18), a(669, "-2.05%"), r(), r(), i(670, "tr"), i(671, "td"), h(672, "i", 17), a(673, " GO/NEO"), r(), i(674, "td"), a(675, "0.00354103"), r(), i(676, "td", 18), a(677, "-6.50%"), r(), r(), i(678, "tr"), i(679, "td"), h(680, "i", 17), a(681, " KICK/NEO"), r(), i(682, "td"), a(683, "0.02053103"), r(), i(684, "td", 18), a(685, "-6.05%"), r(), r(), i(686, "tr"), i(687, "td"), h(688, "i", 17), a(689, " DBC/NEO"), r(), i(690, "td"), a(691, "0.02535103"), r(), i(692, "td", 19), a(693, "+7.05%"), r(), r(), i(694, "tr"), i(695, "td"), h(696, "i", 17), a(697, " GGC/NEO"), r(), i(698, "td"), a(699, "0.00353103"), r(), i(700, "td", 18), a(701, "-4.05%"), r(), r(), r(), r(), r(), i(702, "div", 24), i(703, "table", 21), i(704, "thead"), i(705, "tr"), i(706, "th"), a(707, "Pairs"), r(), i(708, "th"), a(709, "Last Price"), r(), i(710, "th"), a(711, "Change"), r(), r(), r(), i(712, "tbody"), i(713, "tr"), i(714, "td"), h(715, "i", 17), a(716, " ETH/USDT"), r(), i(717, "td"), a(718, "0.00350255"), r(), i(719, "td", 18), a(720, "-2.58%"), r(), r(), i(721, "tr"), i(722, "td"), h(723, "i", 17), a(724, " KCS/USDT"), r(), i(725, "td"), a(726, "0.00013192"), r(), i(727, "td", 19), a(728, "+6.6%"), r(), r(), i(729, "tr"), i(730, "td"), h(731, "i", 17), a(732, " XRP/USDT"), r(), i(733, "td"), a(734, "0.00002996"), r(), i(735, "td", 18), a(736, "-0.55%"), r(), r(), i(737, "tr"), i(738, "td"), h(739, "i", 17), a(740, " VET/USDT"), r(), i(741, "td"), a(742, "0.00000103"), r(), i(743, "td", 19), a(744, "+1.8%"), r(), r(), i(745, "tr"), i(746, "td"), h(747, "i", 17), a(748, " EOS/USDT"), r(), i(749, "td"), a(750, "0.00000103"), r(), i(751, "td", 18), a(752, "-2.05%"), r(), r(), i(753, "tr"), i(754, "td"), h(755, "i", 17), a(756, " BTT/USDT"), r(), i(757, "td"), a(758, "0.00002303"), r(), i(759, "td", 18), a(760, "-1.05%"), r(), r(), i(761, "tr"), i(762, "td"), h(763, "i", 17), a(764, " LTC/USDT"), r(), i(765, "td"), a(766, "0.03520103"), r(), i(767, "td", 19), a(768, "+1.5%"), r(), r(), i(769, "tr"), i(770, "td"), h(771, "i", 17), a(772, " TRX/USDT"), r(), i(773, "td"), a(774, "0.00330103"), r(), i(775, "td", 18), a(776, "-3.05%"), r(), r(), i(777, "tr"), i(778, "td"), h(779, "i", 17), a(780, " BSV/USDT"), r(), i(781, "td"), a(782, "0.00300103"), r(), i(783, "td", 19), a(784, "+2.05%"), r(), r(), i(785, "tr"), i(786, "td"), h(787, "i", 17), a(788, " COTI/USDT"), r(), i(789, "td"), a(790, "0.003500103"), r(), i(791, "td", 19), a(792, "+2.85%"), r(), r(), i(793, "tr"), i(794, "td"), h(795, "i", 17), a(796, " XYT/USDT"), r(), i(797, "td"), a(798, "0.00003103"), r(), i(799, "td", 19), a(800, "+3.55%"), r(), r(), i(801, "tr"), i(802, "td"), h(803, "i", 17), a(804, " BNB/USDT"), r(), i(805, "td"), a(806, "0.003500103"), r(), i(807, "td", 18), a(808, "-2.05%"), r(), r(), i(809, "tr"), i(810, "td"), h(811, "i", 17), a(812, " XMR/USDT"), r(), i(813, "td"), a(814, "0.003500103"), r(), i(815, "td", 18), a(816, "-1.05%"), r(), r(), i(817, "tr"), i(818, "td"), h(819, "i", 17), a(820, " TRY/USDT"), r(), i(821, "td"), a(822, "0.00000123"), r(), i(823, "td", 18), a(824, "-2.05%"), r(), r(), i(825, "tr"), i(826, "td"), h(827, "i", 17), a(828, " ADA/USDT"), r(), i(829, "td"), a(830, "0.00050103"), r(), i(831, "td", 19), a(832, "+5.05%"), r(), r(), i(833, "tr"), i(834, "td"), h(835, "i", 17), a(836, " USDT/USDT"), r(), i(837, "td"), a(838, "0.00340103"), r(), i(839, "td", 18), a(840, "-1.05%"), r(), r(), i(841, "tr"), i(842, "td"), h(843, "i", 17), a(844, " XLM/USDT"), r(), i(845, "td"), a(846, "0.00035103"), r(), i(847, "td", 19), a(848, "+5.05%"), r(), r(), i(849, "tr"), i(850, "td"), h(851, "i", 17), a(852, " ENQ/USDT"), r(), i(853, "td"), a(854, "0.00354103"), r(), i(855, "td", 19), a(856, "+2.02%"), r(), r(), i(857, "tr"), i(858, "td"), h(859, "i", 17), a(860, " AVA/USDT"), r(), i(861, "td"), a(862, "0.02535103"), r(), i(863, "td", 19), a(864, "+3.05%"), r(), r(), i(865, "tr"), i(866, "td"), h(867, "i", 17), a(868, " AMB/USDT"), r(), i(869, "td"), a(870, "0.05335103"), r(), i(871, "td", 19), a(872, "+1.0%"), r(), r(), i(873, "tr"), i(874, "td"), h(875, "i", 17), a(876, " MAP/USDT"), r(), i(877, "td"), a(878, "0.00234103"), r(), i(879, "td", 18), a(880, "-2.05%"), r(), r(), i(881, "tr"), i(882, "td"), h(883, "i", 17), a(884, " GO/USDT"), r(), i(885, "td"), a(886, "0.00354103"), r(), i(887, "td", 18), a(888, "-6.50%"), r(), r(), i(889, "tr"), i(890, "td"), h(891, "i", 17), a(892, " KICK/USDT"), r(), i(893, "td"), a(894, "0.02053103"), r(), i(895, "td", 18), a(896, "-6.05%"), r(), r(), i(897, "tr"), i(898, "td"), h(899, "i", 17), a(900, " DBC/USDT"), r(), i(901, "td"), a(902, "0.02535103"), r(), i(903, "td", 19), a(904, "+7.05%"), r(), r(), i(905, "tr"), i(906, "td"), h(907, "i", 17), a(908, " GGC/USDT"), r(), i(909, "td"), a(910, "0.00353103"), r(), i(911, "td", 18), a(912, "-4.05%"), r(), r(), r(), r(), r(), i(913, "div", 25), i(914, "table", 21), i(915, "thead"), i(916, "tr"), i(917, "th"), a(918, "Pairs"), r(), i(919, "th"), a(920, "Last Price"), r(), i(921, "th"), a(922, "Change"), r(), r(), r(), i(923, "tbody"), i(924, "tr"), i(925, "td"), h(926, "i", 17), a(927, " ETH/DAI"), r(), i(928, "td"), a(929, "0.05320255"), r(), i(930, "td", 19), a(931, "+6.58%"), r(), r(), i(932, "tr"), i(933, "td"), h(934, "i", 17), a(935, " KCS/DAI"), r(), i(936, "td"), a(937, "0.00013192"), r(), i(938, "td", 19), a(939, "+0.6%"), r(), r(), i(940, "tr"), i(941, "td"), h(942, "i", 17), a(943, " XRP/DAI"), r(), i(944, "td"), a(945, "0.00002996"), r(), i(946, "td", 18), a(947, "-0.55%"), r(), r(), i(948, "tr"), i(949, "td"), h(950, "i", 17), a(951, " VET/DAI"), r(), i(952, "td"), a(953, "0.00000103"), r(), i(954, "td", 19), a(955, "+1.8%"), r(), r(), i(956, "tr"), i(957, "td"), h(958, "i", 17), a(959, " EOS/DAI"), r(), i(960, "td"), a(961, "0.00000103"), r(), i(962, "td", 18), a(963, "-2.05%"), r(), r(), i(964, "tr"), i(965, "td"), h(966, "i", 17), a(967, " BTT/DAI"), r(), i(968, "td"), a(969, "0.00002303"), r(), i(970, "td", 18), a(971, "-1.05%"), r(), r(), i(972, "tr"), i(973, "td"), h(974, "i", 17), a(975, " LTC/DAI"), r(), i(976, "td"), a(977, "0.03520103"), r(), i(978, "td", 19), a(979, "+1.5%"), r(), r(), i(980, "tr"), i(981, "td"), h(982, "i", 17), a(983, " TRX/DAI"), r(), i(984, "td"), a(985, "0.00330103"), r(), i(986, "td", 18), a(987, "-3.05%"), r(), r(), i(988, "tr"), i(989, "td"), h(990, "i", 17), a(991, " BSV/DAI"), r(), i(992, "td"), a(993, "0.00300103"), r(), i(994, "td", 19), a(995, "+2.05%"), r(), r(), i(996, "tr"), i(997, "td"), h(998, "i", 17), a(999, " COTI/DAI"), r(), i(1e3, "td"), a(1001, "0.003500103"), r(), i(1002, "td", 19), a(1003, "+2.85%"), r(), r(), i(1004, "tr"), i(1005, "td"), h(1006, "i", 17), a(1007, " XYT/DAI"), r(), i(1008, "td"), a(1009, "0.00003103"), r(), i(1010, "td", 19), a(1011, "+3.55%"), r(), r(), i(1012, "tr"), i(1013, "td"), h(1014, "i", 17), a(1015, " BNB/DAI"), r(), i(1016, "td"), a(1017, "0.003500103"), r(), i(1018, "td", 18), a(1019, "-2.05%"), r(), r(), i(1020, "tr"), i(1021, "td"), h(1022, "i", 17), a(1023, " XMR/DAI"), r(), i(1024, "td"), a(1025, "0.003500103"), r(), i(1026, "td", 18), a(1027, "-1.05%"), r(), r(), i(1028, "tr"), i(1029, "td"), h(1030, "i", 17), a(1031, " TRY/DAI"), r(), i(1032, "td"), a(1033, "0.00000123"), r(), i(1034, "td", 18), a(1035, "-2.05%"), r(), r(), i(1036, "tr"), i(1037, "td"), h(1038, "i", 17), a(1039, " ADA/DAI"), r(), i(1040, "td"), a(1041, "0.00050103"), r(), i(1042, "td", 19), a(1043, "+5.05%"), r(), r(), i(1044, "tr"), i(1045, "td"), h(1046, "i", 17), a(1047, " DAI/DAI"), r(), i(1048, "td"), a(1049, "0.00340103"), r(), i(1050, "td", 18), a(1051, "-1.05%"), r(), r(), i(1052, "tr"), i(1053, "td"), h(1054, "i", 17), a(1055, " XLM/DAI"), r(), i(1056, "td"), a(1057, "0.00035103"), r(), i(1058, "td", 19), a(1059, "+5.05%"), r(), r(), i(1060, "tr"), i(1061, "td"), h(1062, "i", 17), a(1063, " ENQ/DAI"), r(), i(1064, "td"), a(1065, "0.00354103"), r(), i(1066, "td", 19), a(1067, "+2.02%"), r(), r(), i(1068, "tr"), i(1069, "td"), h(1070, "i", 17), a(1071, " AVA/DAI"), r(), i(1072, "td"), a(1073, "0.02535103"), r(), i(1074, "td", 19), a(1075, "+3.05%"), r(), r(), i(1076, "tr"), i(1077, "td"), h(1078, "i", 17), a(1079, " AMB/DAI"), r(), i(1080, "td"), a(1081, "0.05335103"), r(), i(1082, "td", 19), a(1083, "+1.0%"), r(), r(), i(1084, "tr"), i(1085, "td"), h(1086, "i", 17), a(1087, " MAP/DAI"), r(), i(1088, "td"), a(1089, "0.00234103"), r(), i(1090, "td", 18), a(1091, "-2.05%"), r(), r(), i(1092, "tr"), i(1093, "td"), h(1094, "i", 17), a(1095, " GO/DAI"), r(), i(1096, "td"), a(1097, "0.00354103"), r(), i(1098, "td", 18), a(1099, "-6.50%"), r(), r(), i(1100, "tr"), i(1101, "td"), h(1102, "i", 17), a(1103, " KICK/DAI"), r(), i(1104, "td"), a(1105, "0.02053103"), r(), i(1106, "td", 18), a(1107, "-6.05%"), r(), r(), i(1108, "tr"), i(1109, "td"), h(1110, "i", 17), a(1111, " DBC/DAI"), r(), i(1112, "td"), a(1113, "0.02535103"), r(), i(1114, "td", 19), a(1115, "+7.05%"), r(), r(), i(1116, "tr"), i(1117, "td"), h(1118, "i", 17), a(1119, " GGC/DAI"), r(), i(1120, "td"), a(1121, "0.00353103"), r(), i(1122, "td", 18), a(1123, "-4.05%"), r(), r(), r(), r(), r(), r(), r())
                        },
                        styles: [""]
                    }), t
                })(),
                GL = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                        ngAfterViewInit() {
                            new TradingView.widget({
                                width: "100%",
                                height: "550px",
                                symbol: "BINANCE:BTCUSDT",
                                theme: "light",
                                allow_symbol_change: !0,
                                container_id: "tradingview_3462e"
                            })
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-trading-chart"]
                        ],
                        decls: 2,
                        vars: 0,
                        consts: [
                            [1, "main-chart", "mb15"],
                            ["id", "tradingview_3462e"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), h(1, "div", 1), r())
                        },
                        styles: [""]
                    }), t
                })(),
                YL = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                        ngAfterViewInit() {
                            new TradingView.widget({
                                width: "100%",
                                height: "550px",
                                symbol: "BINANCE:BTCUSDT",
                                theme: "dark",
                                allow_symbol_change: !0,
                                container_id: "tradingview_3463e"
                            })
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-trading-dark-chart"]
                        ],
                        decls: 2,
                        vars: 0,
                        consts: [
                            [1, "main-chart", "mb15"],
                            ["id", "tradingview_3463e"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), h(1, "div", 1), r())
                        },
                        styles: [""]
                    }), t
                })(),
                XL = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-market-trade"]
                        ],
                        decls: 367,
                        vars: 0,
                        consts: [
                            [1, "market-trade"],
                            ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"],
                            ["role", "presentation", 1, "nav-item"],
                            ["id", "limit-tab", "data-bs-toggle", "tab", "data-bs-target", "#limit", "type", "button", "role", "tab", "aria-controls", "limit", "aria-selected", "true", 1, "nav-link", "active"],
                            ["id", "market-tab", "data-bs-toggle", "tab", "data-bs-target", "#market", "type", "button", "role", "tab", "aria-controls", "market", "aria-selected", "false", 1, "nav-link"],
                            ["id", "stop-limit-tab", "data-bs-toggle", "tab", "data-bs-target", "#stop-limit", "type", "button", "role", "tab", "aria-controls", "stop-limit", "aria-selected", "false", 1, "nav-link"],
                            ["id", "stop-market-tab", "data-bs-toggle", "tab", "data-bs-target", "#stop-market", "type", "button", "role", "tab", "aria-controls", "stop-market", "aria-selected", "false", 1, "nav-link"],
                            ["id", "myTabContent", 1, "tab-content"],
                            ["id", "limit", "role", "tabpanel", "aria-labelledby", "limit-tab", 1, "tab-pane", "fade", "show", "active"],
                            [1, "d-flex", "justify-content-between"],
                            [1, "market-trade-buy"],
                            [1, "input-group"],
                            ["type", "number", "placeholder", "Price", "required", "", 1, "form-control"],
                            [1, "input-group-append"],
                            [1, "input-group-text"],
                            ["type", "number", "placeholder", "Amount", "required", "", 1, "form-control"],
                            [1, "market-trade-list"],
                            ["href", "#"],
                            ["type", "submit", 1, "btn", "buy"],
                            [1, "market-trade-sell"],
                            [1, "btn", "sell"],
                            ["id", "market", "role", "tabpanel", "aria-labelledby", "market-tab", 1, "tab-pane", "fade"],
                            ["id", "stop-limit", "role", "tabpanel", "aria-labelledby", "stop-limit-tab", 1, "tab-pane", "fade"],
                            ["id", "stop-market", "role", "tabpanel", "aria-labelledby", "stop-market-tab", 1, "tab-pane", "fade"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "ul", 1), i(2, "li", 2), i(3, "button", 3), a(4, " Limit "), r(), r(), i(5, "li", 2), i(6, "button", 4), a(7, " Market "), r(), r(), i(8, "li", 2), i(9, "button", 5), a(10, " Stop Limit "), r(), r(), i(11, "li", 2), i(12, "button", 6), a(13, " Stop Limit "), r(), r(), r(), i(14, "div", 7), i(15, "div", 8), i(16, "div", 9), i(17, "div", 10), i(18, "form"), i(19, "div", 11), h(20, "input", 12), i(21, "div", 13), i(22, "span", 14), a(23, "BTC"), r(), r(), r(), i(24, "div", 11), h(25, "input", 15), i(26, "div", 13), i(27, "span", 14), a(28, "ETH"), r(), r(), r(), i(29, "ul", 16), i(30, "li"), i(31, "a", 17), a(32, "25%"), r(), r(), i(33, "li"), i(34, "a", 17), a(35, "50%"), r(), r(), i(36, "li"), i(37, "a", 17), a(38, "75%"), r(), r(), i(39, "li"), i(40, "a", 17), a(41, "100%"), r(), r(), r(), i(42, "p"), a(43, "Available: "), i(44, "span"), a(45, "0 BTC = 0 USD"), r(), r(), i(46, "p"), a(47, "Volume: "), i(48, "span"), a(49, "0 BTC = 0 USD"), r(), r(), i(50, "p"), a(51, "Margin: "), i(52, "span"), a(53, "0 BTC = 0 USD"), r(), r(), i(54, "p"), a(55, "Fee: "), i(56, "span"), a(57, "0 BTC = 0 USD"), r(), r(), i(58, "button", 18), a(59, "Buy"), r(), r(), r(), i(60, "div", 19), i(61, "form"), i(62, "div", 11), h(63, "input", 12), i(64, "div", 13), i(65, "span", 14), a(66, "BTC"), r(), r(), r(), i(67, "div", 11), h(68, "input", 15), i(69, "div", 13), i(70, "span", 14), a(71, "ETH"), r(), r(), r(), i(72, "ul", 16), i(73, "li"), i(74, "a", 17), a(75, "25%"), r(), r(), i(76, "li"), i(77, "a", 17), a(78, "50%"), r(), r(), i(79, "li"), i(80, "a", 17), a(81, "75%"), r(), r(), i(82, "li"), i(83, "a", 17), a(84, "100%"), r(), r(), r(), i(85, "p"), a(86, "Available: "), i(87, "span"), a(88, "0 BTC = 0 USD"), r(), r(), i(89, "p"), a(90, "Volume: "), i(91, "span"), a(92, "0 BTC = 0 USD"), r(), r(), i(93, "p"), a(94, "Margin: "), i(95, "span"), a(96, "0 BTC = 0 USD"), r(), r(), i(97, "p"), a(98, "Fee: "), i(99, "span"), a(100, "0 BTC = 0 USD"), r(), r(), i(101, "button", 20), a(102, "Sell"), r(), r(), r(), r(), r(), i(103, "div", 21), i(104, "div", 9), i(105, "div", 10), i(106, "form"), i(107, "div", 11), h(108, "input", 12), i(109, "div", 13), i(110, "span", 14), a(111, "BTC"), r(), r(), r(), i(112, "div", 11), h(113, "input", 15), i(114, "div", 13), i(115, "span", 14), a(116, "ETH"), r(), r(), r(), i(117, "ul", 16), i(118, "li"), i(119, "a", 17), a(120, "25%"), r(), r(), i(121, "li"), i(122, "a", 17), a(123, "50%"), r(), r(), i(124, "li"), i(125, "a", 17), a(126, "75%"), r(), r(), i(127, "li"), i(128, "a", 17), a(129, "100%"), r(), r(), r(), i(130, "p"), a(131, "Available: "), i(132, "span"), a(133, "0 BTC = 0 USD"), r(), r(), i(134, "p"), a(135, "Volume: "), i(136, "span"), a(137, "0 BTC = 0 USD"), r(), r(), i(138, "p"), a(139, "Margin: "), i(140, "span"), a(141, "0 BTC = 0 USD"), r(), r(), i(142, "p"), a(143, "Fee: "), i(144, "span"), a(145, "0 BTC = 0 USD"), r(), r(), i(146, "button", 18), a(147, "Buy"), r(), r(), r(), i(148, "div", 19), i(149, "form"), i(150, "div", 11), h(151, "input", 12), i(152, "div", 13), i(153, "span", 14), a(154, "BTC"), r(), r(), r(), i(155, "div", 11), h(156, "input", 15), i(157, "div", 13), i(158, "span", 14), a(159, "ETH"), r(), r(), r(), i(160, "ul", 16), i(161, "li"), i(162, "a", 17), a(163, "25%"), r(), r(), i(164, "li"), i(165, "a", 17), a(166, "50%"), r(), r(), i(167, "li"), i(168, "a", 17), a(169, "75%"), r(), r(), i(170, "li"), i(171, "a", 17), a(172, "100%"), r(), r(), r(), i(173, "p"), a(174, "Available: "), i(175, "span"), a(176, "0 BTC = 0 USD"), r(), r(), i(177, "p"), a(178, "Volume: "), i(179, "span"), a(180, "0 BTC = 0 USD"), r(), r(), i(181, "p"), a(182, "Margin: "), i(183, "span"), a(184, "0 BTC = 0 USD"), r(), r(), i(185, "p"), a(186, "Fee: "), i(187, "span"), a(188, "0 BTC = 0 USD"), r(), r(), i(189, "button", 20), a(190, "Sell"), r(), r(), r(), r(), r(), i(191, "div", 22), i(192, "div", 9), i(193, "div", 10), i(194, "form"), i(195, "div", 11), h(196, "input", 12), i(197, "div", 13), i(198, "span", 14), a(199, "BTC"), r(), r(), r(), i(200, "div", 11), h(201, "input", 15), i(202, "div", 13), i(203, "span", 14), a(204, "ETH"), r(), r(), r(), i(205, "ul", 16), i(206, "li"), i(207, "a", 17), a(208, "25%"), r(), r(), i(209, "li"), i(210, "a", 17), a(211, "50%"), r(), r(), i(212, "li"), i(213, "a", 17), a(214, "75%"), r(), r(), i(215, "li"), i(216, "a", 17), a(217, "100%"), r(), r(), r(), i(218, "p"), a(219, "Available: "), i(220, "span"), a(221, "0 BTC = 0 USD"), r(), r(), i(222, "p"), a(223, "Volume: "), i(224, "span"), a(225, "0 BTC = 0 USD"), r(), r(), i(226, "p"), a(227, "Margin: "), i(228, "span"), a(229, "0 BTC = 0 USD"), r(), r(), i(230, "p"), a(231, "Fee: "), i(232, "span"), a(233, "0 BTC = 0 USD"), r(), r(), i(234, "button", 18), a(235, "Buy"), r(), r(), r(), i(236, "div", 19), i(237, "form"), i(238, "div", 11), h(239, "input", 12), i(240, "div", 13), i(241, "span", 14), a(242, "BTC"), r(), r(), r(), i(243, "div", 11), h(244, "input", 15), i(245, "div", 13), i(246, "span", 14), a(247, "ETH"), r(), r(), r(), i(248, "ul", 16), i(249, "li"), i(250, "a", 17), a(251, "25%"), r(), r(), i(252, "li"), i(253, "a", 17), a(254, "50%"), r(), r(), i(255, "li"), i(256, "a", 17), a(257, "75%"), r(), r(), i(258, "li"), i(259, "a", 17), a(260, "100%"), r(), r(), r(), i(261, "p"), a(262, "Available: "), i(263, "span"), a(264, "0 BTC = 0 USD"), r(), r(), i(265, "p"), a(266, "Volume: "), i(267, "span"), a(268, "0 BTC = 0 USD"), r(), r(), i(269, "p"), a(270, "Margin: "), i(271, "span"), a(272, "0 BTC = 0 USD"), r(), r(), i(273, "p"), a(274, "Fee: "), i(275, "span"), a(276, "0 BTC = 0 USD"), r(), r(), i(277, "button", 20), a(278, "Sell"), r(), r(), r(), r(), r(), i(279, "div", 23), i(280, "div", 9), i(281, "div", 10), i(282, "form"), i(283, "div", 11), h(284, "input", 12), i(285, "div", 13), i(286, "span", 14), a(287, "BTC"), r(), r(), r(), i(288, "div", 11), h(289, "input", 15), i(290, "div", 13), i(291, "span", 14), a(292, "ETH"), r(), r(), r(), i(293, "ul", 16), i(294, "li"), i(295, "a", 17), a(296, "25%"), r(), r(), i(297, "li"), i(298, "a", 17), a(299, "50%"), r(), r(), i(300, "li"), i(301, "a", 17), a(302, "75%"), r(), r(), i(303, "li"), i(304, "a", 17), a(305, "100%"), r(), r(), r(), i(306, "p"), a(307, "Available: "), i(308, "span"), a(309, "0 BTC = 0 USD"), r(), r(), i(310, "p"), a(311, "Volume: "), i(312, "span"), a(313, "0 BTC = 0 USD"), r(), r(), i(314, "p"), a(315, "Margin: "), i(316, "span"), a(317, "0 BTC = 0 USD"), r(), r(), i(318, "p"), a(319, "Fee: "), i(320, "span"), a(321, "0 BTC = 0 USD"), r(), r(), i(322, "button", 18), a(323, "Buy"), r(), r(), r(), i(324, "div", 19), i(325, "form"), i(326, "div", 11), h(327, "input", 12), i(328, "div", 13), i(329, "span", 14), a(330, "BTC"), r(), r(), r(), i(331, "div", 11), h(332, "input", 15), i(333, "div", 13), i(334, "span", 14), a(335, "ETH"), r(), r(), r(), i(336, "ul", 16), i(337, "li"), i(338, "a", 17), a(339, "25%"), r(), r(), i(340, "li"), i(341, "a", 17), a(342, "50%"), r(), r(), i(343, "li"), i(344, "a", 17), a(345, "75%"), r(), r(), i(346, "li"), i(347, "a", 17), a(348, "100%"), r(), r(), r(), i(349, "p"), a(350, "Available: "), i(351, "span"), a(352, "0 BTC = 0 USD"), r(), r(), i(353, "p"), a(354, "Volume: "), i(355, "span"), a(356, "0 BTC = 0 USD"), r(), r(), i(357, "p"), a(358, "Margin: "), i(359, "span"), a(360, "0 BTC = 0 USD"), r(), r(), i(361, "p"), a(362, "Fee: "), i(363, "span"), a(364, "0 BTC = 0 USD"), r(), r(), i(365, "button", 20), a(366, "Sell"), r(), r(), r(), r(), r(), r(), r())
                        },
                        styles: [""]
                    }), t
                })(),
                QL = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-order-book"]
                        ],
                        decls: 140,
                        vars: 0,
                        consts: [
                            [1, "order-book", "mb15"],
                            [1, "heading"],
                            [1, "table"],
                            [1, "red-bg-80"],
                            [1, "red"],
                            [1, "red-bg-60"],
                            [1, "red-bg-40"],
                            [1, "red-bg-20"],
                            [1, "red-bg-10"],
                            [1, "red-bg-8"],
                            [1, "red-bg-5"],
                            [1, "red-bg"],
                            [1, "ob-heading"],
                            [1, "green-bg"],
                            [1, "green"],
                            [1, "green-bg-5"],
                            [1, "green-bg-8"],
                            [1, "green-bg-10"],
                            [1, "green-bg-20"],
                            [1, "green-bg-40"],
                            [1, "green-bg-60"],
                            [1, "green-bg-80"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "h2", 1), a(2, "Order Book"), r(), i(3, "table", 2), i(4, "thead"), i(5, "tr"), i(6, "th"), a(7, "Price(BTC)"), r(), i(8, "th"), a(9, "Amount(ETH)"), r(), i(10, "th"), a(11, "Total(ETH)"), r(), r(), r(), i(12, "tbody"), i(13, "tr", 3), i(14, "td", 4), a(15, "0.022572"), r(), i(16, "td"), a(17, "1.253415"), r(), i(18, "td"), a(19, "15.27648"), r(), r(), i(20, "tr", 5), i(21, "td", 4), a(22, "0.020371"), r(), i(23, "td"), a(24, "1.205415"), r(), i(25, "td"), a(26, "15.25648"), r(), r(), i(27, "tr", 6), i(28, "td", 4), a(29, "0.023572"), r(), i(30, "td"), a(31, "1.645415"), r(), i(32, "td"), a(33, "15.23648"), r(), r(), i(34, "tr", 7), i(35, "td", 4), a(36, "0.032378"), r(), i(37, "td"), a(38, "1.206715"), r(), i(39, "td"), a(40, "15.25348"), r(), r(), i(41, "tr", 8), i(42, "td", 4), a(43, "0.022573"), r(), i(44, "td"), a(45, "1.262415"), r(), i(46, "td"), a(47, "15.19648"), r(), r(), i(48, "tr", 9), i(49, "td", 4), a(50, "0.154377"), r(), i(51, "td"), a(52, "1.225415"), r(), i(53, "td"), a(54, "15.35648"), r(), r(), i(55, "tr", 10), i(56, "td", 4), a(57, "0.120373"), r(), i(58, "td"), a(59, "1.285415"), r(), i(60, "td"), a(61, "15.25648"), r(), r(), i(62, "tr", 11), i(63, "td", 4), a(64, "0.028576"), r(), i(65, "td"), a(66, "1.291415"), r(), i(67, "td"), a(68, "15.26448"), r(), r(), r(), i(69, "tbody", 12), i(70, "tr"), i(71, "td"), i(72, "span"), a(73, "Last Price"), r(), a(74, " 0.020367 "), r(), i(75, "td"), i(76, "span"), a(77, "USD"), r(), a(78, " 148.65 "), r(), i(79, "td", 4), i(80, "span"), a(81, "Change"), r(), a(82, " -0.51% "), r(), r(), r(), i(83, "tbody"), i(84, "tr", 13), i(85, "td", 14), a(86, "0.158373"), r(), i(87, "td"), a(88, "1.209515"), r(), i(89, "td"), a(90, "15.23248"), r(), r(), i(91, "tr", 15), i(92, "td", 14), a(93, "0.020851"), r(), i(94, "td"), a(95, "1.206245"), r(), i(96, "td"), a(97, "15.25458"), r(), r(), i(98, "tr", 16), i(99, "td", 14), a(100, "0.025375"), r(), i(101, "td"), a(102, "1.205715"), r(), i(103, "td"), a(104, "15.65648"), r(), r(), i(105, "tr", 17), i(106, "td", 14), a(107, "0.020252"), r(), i(108, "td"), a(109, "1.205495"), r(), i(110, "td"), a(111, "15.24548"), r(), r(), i(112, "tr", 18), i(113, "td", 14), a(114, "0.020373"), r(), i(115, "td"), a(116, "1.205415"), r(), i(117, "td"), a(118, "15.25648"), r(), r(), i(119, "tr", 19), i(120, "td", 14), a(121, "0.020156"), r(), i(122, "td"), a(123, "1.207515"), r(), i(124, "td"), a(125, "15.28948"), r(), r(), i(126, "tr", 20), i(127, "td", 14), a(128, "0.540375"), r(), i(129, "td"), a(130, "1.205915"), r(), i(131, "td"), a(132, "15.25748"), r(), r(), i(133, "tr", 21), i(134, "td", 14), a(135, "0.020372"), r(), i(136, "td"), a(137, "1.205415"), r(), i(138, "td"), a(139, "15.25648"), r(), r(), r(), r(), r())
                        },
                        styles: [""]
                    }), t
                })(),
                ZL = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-market-history"]
                        ],
                        decls: 115,
                        vars: 0,
                        consts: [
                            [1, "market-history"],
                            ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"],
                            ["role", "presentation", 1, "nav-item"],
                            ["id", "recent-trades-tab", "data-bs-toggle", "tab", "data-bs-target", "#recent-trades", "type", "button", "role", "tab", "aria-controls", "recent-trades", "aria-selected", "true", 1, "nav-link"],
                            ["id", "myTabContent", 1, "tab-content"],
                            ["id", "recent-trades", "role", "tabpanel", "aria-labelledby", "recent-trades-tab", 1, "tab-pane", "fade", "show", "active"],
                            [1, "table"],
                            [1, "red"],
                            [1, "green"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "ul", 1), i(2, "li", 2), i(3, "button", 3), a(4, " Recent Trades "), r(), r(), r(), i(5, "div", 4), i(6, "div", 5), i(7, "table", 6), i(8, "thead"), i(9, "tr"), i(10, "th"), a(11, "Time"), r(), i(12, "th"), a(13, "Price(BTC)"), r(), i(14, "th"), a(15, "Amount(ETH)"), r(), r(), r(), i(16, "tbody"), i(17, "tr"), i(18, "td"), a(19, "13:03:53"), r(), i(20, "td", 7), a(21, "0.020191"), r(), i(22, "td"), a(23, "0.2155045"), r(), r(), i(24, "tr"), i(25, "td"), a(26, "13:03:53"), r(), i(27, "td", 8), a(28, "0.020191"), r(), i(29, "td"), a(30, "0.2155045"), r(), r(), i(31, "tr"), i(32, "td"), a(33, "13:03:53"), r(), i(34, "td", 8), a(35, "0.020191"), r(), i(36, "td"), a(37, "0.2155045"), r(), r(), i(38, "tr"), i(39, "td"), a(40, "13:03:53"), r(), i(41, "td", 7), a(42, "0.020191"), r(), i(43, "td"), a(44, "0.2155045"), r(), r(), i(45, "tr"), i(46, "td"), a(47, "13:03:53"), r(), i(48, "td", 8), a(49, "0.020191"), r(), i(50, "td"), a(51, "0.2155045"), r(), r(), i(52, "tr"), i(53, "td"), a(54, "13:03:53"), r(), i(55, "td", 8), a(56, "0.020191"), r(), i(57, "td"), a(58, "0.2155045"), r(), r(), i(59, "tr"), i(60, "td"), a(61, "13:03:53"), r(), i(62, "td", 8), a(63, "0.020191"), r(), i(64, "td"), a(65, "0.2155045"), r(), r(), i(66, "tr"), i(67, "td"), a(68, "13:03:53"), r(), i(69, "td", 7), a(70, "0.020191"), r(), i(71, "td"), a(72, "0.2155045"), r(), r(), i(73, "tr"), i(74, "td"), a(75, "13:03:53"), r(), i(76, "td", 7), a(77, "0.020191"), r(), i(78, "td"), a(79, "0.2155045"), r(), r(), i(80, "tr"), i(81, "td"), a(82, "13:03:53"), r(), i(83, "td", 8), a(84, "0.020191"), r(), i(85, "td"), a(86, "0.2155045"), r(), r(), i(87, "tr"), i(88, "td"), a(89, "13:03:53"), r(), i(90, "td", 8), a(91, "0.020191"), r(), i(92, "td"), a(93, "0.2155045"), r(), r(), i(94, "tr"), i(95, "td"), a(96, "13:03:53"), r(), i(97, "td", 7), a(98, "0.020191"), r(), i(99, "td"), a(100, "0.2155045"), r(), r(), i(101, "tr"), i(102, "td"), a(103, "13:03:53"), r(), i(104, "td", 8), a(105, "0.020191"), r(), i(106, "td"), a(107, "0.2155045"), r(), r(), i(108, "tr"), i(109, "td"), a(110, "13:03:53"), r(), i(111, "td", 7), a(112, "0.020191"), r(), i(113, "td"), a(114, "0.2155045"), r(), r(), r(), r(), r(), r(), r())
                        },
                        styles: [""]
                    }), t
                })(),
                JL = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-market-news"]
                        ],
                        decls: 39,
                        vars: 0,
                        consts: [
                            [1, "market-news", "mt15"],
                            [1, "heading"],
                            ["routerLink", "/news-details"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "h2", 1), a(2, "Market News"), r(), i(3, "ul"), i(4, "li"), i(5, "a", 2), i(6, "strong"), a(7, "KCS Pay Fees Feature is Coming Soon"), r(), a(8, " To accelerate the ecosystem construction of KuCoin Share (KCS) and promote the implementation of the KCS application. "), i(9, "span"), a(10, "2019-12-04 20:22"), r(), r(), r(), i(11, "li"), i(12, "a", 2), i(13, "strong"), a(14, "KCS Pay Fees Feature is Coming Soon"), r(), a(15, " To accelerate the ecosystem construction of KuCoin Share (KCS) and promote the implementation of the KCS application. "), i(16, "span"), a(17, "2019-12-04 20:22"), r(), r(), r(), i(18, "li"), i(19, "a", 2), i(20, "strong"), a(21, "KCS Pay Fees Feature is Coming Soon"), r(), a(22, " To accelerate the ecosystem construction of KuCoin Share (KCS) and promote the implementation of the KCS application. "), i(23, "span"), a(24, "2019-12-04 20:22"), r(), r(), r(), i(25, "li"), i(26, "a", 2), i(27, "strong"), a(28, "KCS Pay Fees Feature is Coming Soon"), r(), a(29, " To accelerate the ecosystem construction of KuCoin Share (KCS) and promote the implementation of the KCS application. "), i(30, "span"), a(31, "2019-12-04 20:22"), r(), r(), r(), i(32, "li"), i(33, "a", 2), i(34, "strong"), a(35, "KCS Pay Fees Feature is Coming Soon"), r(), a(36, " To accelerate the ecosystem construction of KuCoin Share (KCS) and promote the implementation of the KCS application. "), i(37, "span"), a(38, "2019-12-04 20:22"), r(), r(), r(), r(), r())
                        },
                        directives: [Ot],
                        styles: [""]
                    }), t
                })(),
                eF = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-history-order"]
                        ],
                        decls: 274,
                        vars: 0,
                        consts: [
                            [1, "market-history", "market-order", "markets-pair-list", "mt15"],
                            ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"],
                            ["role", "presentation", 1, "nav-item"],
                            ["id", "open-orders-tab", "data-bs-toggle", "tab", "data-bs-target", "#open-orders", "type", "button", "role", "tab", "aria-controls", "open-orders", "aria-selected", "true", 1, "nav-link", "active"],
                            ["id", "closed-orders-tab", "data-bs-toggle", "tab", "data-bs-target", "#closed-orders", "type", "button", "role", "tab", "aria-controls", "closed-orders", "aria-selected", "false", 1, "nav-link"],
                            ["id", "order-history-tab", "data-bs-toggle", "tab", "data-bs-target", "#order-history", "type", "button", "role", "tab", "aria-controls", "order-history", "aria-selected", "false", 1, "nav-link"],
                            ["id", "balance-tab", "data-bs-toggle", "tab", "data-bs-target", "#balance", "type", "button", "role", "tab", "aria-controls", "balance", "aria-selected", "false", 1, "nav-link"],
                            ["id", "myTabContent", 1, "tab-content"],
                            ["id", "open-orders", "role", "tabpanel", "aria-labelledby", "open-orders-tab", 1, "tab-pane", "fade", "show", "active"],
                            [1, "d-flex", "justify-content-between", "market-order-item"],
                            [1, "no-data"],
                            [1, "icon", "ion-md-document"],
                            ["id", "closed-orders", "role", "tabpanel", "aria-labelledby", "closed-orders-tab", 1, "tab-pane", "fade"],
                            [1, "table-responsive"],
                            [1, "table"],
                            [1, "green"],
                            [1, "icon", "ion-md-checkmark-circle-outline", "green"],
                            [1, "icon", "ion-md-close-circle-outline", "red"],
                            [1, "red"],
                            ["id", "order-history", "role", "tabpanel", "aria-labelledby", "order-history-tab", 1, "tab-pane", "fade"],
                            ["id", "balance", "role", "tabpanel", "aria-labelledby", "balance-tab", 1, "tab-pane", "fade"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "ul", 1), i(2, "li", 2), i(3, "button", 3), a(4, " Open Orders "), r(), r(), i(5, "li", 2), i(6, "button", 4), a(7, " Closed Orders "), r(), r(), i(8, "li", 2), i(9, "button", 5), a(10, " Order History "), r(), r(), i(11, "li", 2), i(12, "button", 6), a(13, " Balance "), r(), r(), r(), i(14, "div", 7), i(15, "div", 8), i(16, "ul", 9), i(17, "li"), a(18, "Time"), r(), i(19, "li"), a(20, "All pairs"), r(), i(21, "li"), a(22, "Buy/Sell"), r(), i(23, "li"), a(24, "Price"), r(), i(25, "li"), a(26, "Amount"), r(), i(27, "li"), a(28, "Executed"), r(), i(29, "li"), a(30, "Unexecuted"), r(), r(), i(31, "span", 10), h(32, "i", 11), a(33, " No data "), r(), r(), i(34, "div", 12), i(35, "div", 13), i(36, "table", 14), i(37, "thead"), i(38, "tr"), i(39, "th"), a(40, "Time"), r(), i(41, "th"), a(42, "All pairs"), r(), i(43, "th"), a(44, "Buy/Sell"), r(), i(45, "th"), a(46, "Price"), r(), i(47, "th"), a(48, "Amount"), r(), i(49, "th"), a(50, "Executed"), r(), i(51, "th"), a(52, "Unexecuted"), r(), r(), r(), i(53, "tbody"), i(54, "tr"), i(55, "td"), a(56, "2:40 PM"), r(), i(57, "td"), a(58, "ETH/BTC"), r(), i(59, "td", 15), a(60, "BUY"), r(), i(61, "td"), a(62, "$444"), r(), i(63, "td"), a(64, "41"), r(), i(65, "td"), h(66, "i", 16), r(), i(67, "td"), a(68, "-"), r(), r(), i(69, "tr"), i(70, "td"), a(71, "2:40 PM"), r(), i(72, "td"), a(73, "ETH/BTC"), r(), i(74, "td", 15), a(75, "BUY"), r(), i(76, "td"), a(77, "$444"), r(), i(78, "td"), a(79, "41"), r(), i(80, "td"), h(81, "i", 17), r(), i(82, "td"), a(83, "-"), r(), r(), i(84, "tr"), i(85, "td"), a(86, "2:40 PM"), r(), i(87, "td"), a(88, "ETH/BTC"), r(), i(89, "td", 15), a(90, "BUY"), r(), i(91, "td"), a(92, "$444"), r(), i(93, "td"), a(94, "41"), r(), i(95, "td"), h(96, "i", 16), r(), i(97, "td"), a(98, "-"), r(), r(), i(99, "tr"), i(100, "td"), a(101, "2:40 PM"), r(), i(102, "td"), a(103, "ETH/BTC"), r(), i(104, "td", 18), a(105, "SELL"), r(), i(106, "td"), a(107, "$444"), r(), i(108, "td"), a(109, "41"), r(), i(110, "td"), h(111, "i", 17), r(), i(112, "td"), a(113, "-"), r(), r(), r(), r(), r(), r(), i(114, "div", 19), i(115, "div", 13), i(116, "table", 14), i(117, "thead"), i(118, "tr"), i(119, "th"), a(120, "Time"), r(), i(121, "th"), a(122, "All pairs"), r(), i(123, "th"), a(124, "Buy/Sell"), r(), i(125, "th"), a(126, "Price"), r(), i(127, "th"), a(128, "Amount"), r(), i(129, "th"), a(130, "Executed"), r(), i(131, "th"), a(132, "Unexecuted"), r(), r(), r(), i(133, "tbody"), i(134, "tr"), i(135, "td"), a(136, "2:40 PM"), r(), i(137, "td"), a(138, "ETH/BTC"), r(), i(139, "td", 15), a(140, "BUY"), r(), i(141, "td"), a(142, "$444"), r(), i(143, "td"), a(144, "41"), r(), i(145, "td"), h(146, "i", 16), r(), i(147, "td"), a(148, "-"), r(), r(), i(149, "tr"), i(150, "td"), a(151, "2:40 PM"), r(), i(152, "td"), a(153, "ETH/BTC"), r(), i(154, "td", 15), a(155, "BUY"), r(), i(156, "td"), a(157, "$444"), r(), i(158, "td"), a(159, "41"), r(), i(160, "td"), h(161, "i", 17), r(), i(162, "td"), a(163, "-"), r(), r(), r(), r(), r(), r(), i(164, "div", 20), i(165, "div", 13), i(166, "table", 14), i(167, "thead"), i(168, "tr"), i(169, "th"), a(170, "Time"), r(), i(171, "th"), a(172, "All pairs"), r(), i(173, "th"), a(174, "Buy/Sell"), r(), i(175, "th"), a(176, "Price"), r(), i(177, "th"), a(178, "Amount"), r(), i(179, "th"), a(180, "Executed"), r(), i(181, "th"), a(182, "Unexecuted"), r(), r(), r(), i(183, "tbody"), i(184, "tr"), i(185, "td"), a(186, "2:40 PM"), r(), i(187, "td"), a(188, "ETH/BTC"), r(), i(189, "td", 15), a(190, "BUY"), r(), i(191, "td"), a(192, "$444"), r(), i(193, "td"), a(194, "41"), r(), i(195, "td"), h(196, "i", 16), r(), i(197, "td"), a(198, "-"), r(), r(), i(199, "tr"), i(200, "td"), a(201, "2:40 PM"), r(), i(202, "td"), a(203, "ETH/BTC"), r(), i(204, "td", 15), a(205, "BUY"), r(), i(206, "td"), a(207, "$444"), r(), i(208, "td"), a(209, "41"), r(), i(210, "td"), h(211, "i", 17), r(), i(212, "td"), a(213, "-"), r(), r(), i(214, "tr"), i(215, "td"), a(216, "2:40 PM"), r(), i(217, "td"), a(218, "ETH/BTC"), r(), i(219, "td", 15), a(220, "BUY"), r(), i(221, "td"), a(222, "$444"), r(), i(223, "td"), a(224, "41"), r(), i(225, "td"), h(226, "i", 16), r(), i(227, "td"), a(228, "-"), r(), r(), i(229, "tr"), i(230, "td"), a(231, "2:40 PM"), r(), i(232, "td"), a(233, "ETH/BTC"), r(), i(234, "td", 18), a(235, "SELL"), r(), i(236, "td"), a(237, "$444"), r(), i(238, "td"), a(239, "41"), r(), i(240, "td"), h(241, "i", 17), r(), i(242, "td"), a(243, "-"), r(), r(), i(244, "tr"), i(245, "td"), a(246, "2:40 PM"), r(), i(247, "td"), a(248, "ETH/BTC"), r(), i(249, "td", 18), a(250, "SELL"), r(), i(251, "td"), a(252, "$444"), r(), i(253, "td"), a(254, "41"), r(), i(255, "td"), h(256, "i", 17), r(), i(257, "td"), a(258, "-"), r(), r(), i(259, "tr"), i(260, "td"), a(261, "2:40 PM"), r(), i(262, "td"), a(263, "ETH/BTC"), r(), i(264, "td", 18), a(265, "SELL"), r(), i(266, "td"), a(267, "$444"), r(), i(268, "td"), a(269, "41"), r(), i(270, "td"), h(271, "i", 16), r(), i(272, "td"), a(273, "-"), r(), r(), r(), r(), r(), r(), r(), r())
                        },
                        styles: [""]
                    }), t
                })(),
                tF = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-exchange"]
                        ],
                        decls: 17,
                        vars: 0,
                        consts: [
                            [1, "container-fluid", "mtb15", "no-fluid"],
                            [1, "row", "sm-gutters"],
                            [1, "col-sm-12", "col-md-3"],
                            [1, "col-sm-12", "col-md-6"],
                            [1, "darkMode"],
                            [1, "lightMode"],
                            [1, "col-md-3"],
                            [1, "col-md-9"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "div", 2), h(3, "app-market-pairs"), r(), i(4, "div", 3), i(5, "div", 4), h(6, "app-trading-chart"), r(), i(7, "div", 5), h(8, "app-trading-dark-chart"), r(), h(9, "app-market-trade"), r(), i(10, "div", 6), h(11, "app-order-book"), h(12, "app-market-history"), r(), i(13, "div", 6), h(14, "app-market-news"), r(), i(15, "div", 7), h(16, "app-history-order"), r(), r(), r())
                        },
                        directives: [zL, GL, YL, XL, QL, ZL, JL, eF],
                        styles: [""]
                    }), t
                })(),
                nF = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-lock"]
                        ],
                        decls: 12,
                        vars: 0,
                        consts: [
                            [1, "vh-100", "d-flex", "justify-content-center"],
                            [1, "form-access", "my-auto"],
                            ["type", "password", "placeholder", "Enter your password", "required", "", 1, "form-control"],
                            ["type", "submit", 1, "btn", "btn-primary"],
                            ["routerLink", "/reset"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "form"), i(3, "span"), a(4, "Locked"), r(), h(5, "input", 2), i(6, "button", 3), a(7, "Unlock"), r(), i(8, "h2"), a(9, "No luck? "), i(10, "a", 4), a(11, "Reset Password"), r(), r(), r(), r(), r())
                        },
                        directives: [Ot],
                        styles: [""]
                    }), t
                })(),
                iF = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-login"]
                        ],
                        decls: 22,
                        vars: 0,
                        consts: [
                            [1, "vh-100", "d-flex", "justify-content-center"],
                            [1, "form-access", "my-auto"],
                            [1, "form-group"],
                            ["type", "email", "placeholder", "Email Address", "required", "", 1, "form-control"],
                            ["type", "password", "placeholder", "Password", "required", "", 1, "form-control"],
                            [1, "text-end"],
                            ["routerLink", "/reset"],
                            [1, "custom-control", "form-check"],
                            ["type", "checkbox", "id", "form-checkbox", 1, "form-check-input"],
                            ["for", "form-checkbox", 1, "form-check-label"],
                            ["type", "submit", 1, "btn", "btn-primary"],
                            ["routerLink", "/sign-up"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "form"), i(3, "span"), a(4, "Sign In"), r(), i(5, "div", 2), h(6, "input", 3), r(), i(7, "div", 2), h(8, "input", 4), r(), i(9, "div", 5), i(10, "a", 6), a(11, "Forgot Password?"), r(), r(), i(12, "div", 7), h(13, "input", 8), i(14, "label", 9), a(15, " Remember me "), r(), r(), i(16, "button", 10), a(17, "Sign In"), r(), r(), i(18, "h2"), a(19, " Don't have an account? "), i(20, "a", 11), a(21, "Sign up here"), r(), r(), r(), r())
                        },
                        directives: [Ot],
                        styles: [""]
                    }), t
                })(),
                rF = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-market-carousel"]
                        ],
                        decls: 161,
                        vars: 7,
                        consts: [
                            [3, "autoplay", "arrows", "autoplayInterval", "margin", "height", "cellWidth", "loop"],
                            [1, "carousel-cell"],
                            [1, "market-carousel-item"],
                            [1, "market-carousel-item-name"],
                            ["src", "../../../assets/img/icon/1.png", "alt", ""],
                            ["routerLink", "/wallet"],
                            [1, "btn", "buy"],
                            [1, "btn", "sell"],
                            ["src", "../../../assets/img/icon/16.png", "alt", ""],
                            ["src", "../../../assets/img/icon/3.png", "alt", ""],
                            ["src", "../../../assets/img/icon/4.png", "alt", ""],
                            ["src", "../../../assets/img/icon/5.png", "alt", ""],
                            ["src", "../../../assets/img/icon/6.png", "alt", ""],
                            ["src", "../../../assets/img/icon/7.png", "alt", ""],
                            ["src", "../../../assets/img/icon/8.png", "alt", ""],
                            ["src", "../../../assets/img/icon/9.png", "alt", ""],
                            ["src", "../../../assets/img/icon/10.png", "alt", ""]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "carousel", 0), i(1, "div", 1), i(2, "div", 2), i(3, "div", 3), h(4, "img", 4), i(5, "strong"), a(6, "Ethereum"), r(), r(), i(7, "h2"), a(8, "237394.06 ETH"), r(), i(9, "p"), a(10, "$12,000"), r(), i(11, "a", 5), i(12, "button", 6), a(13, "Deposit"), r(), r(), i(14, "a", 5), i(15, "button", 7), a(16, "Withdraw"), r(), r(), r(), r(), i(17, "div", 1), i(18, "div", 2), i(19, "div", 3), h(20, "img", 8), i(21, "strong"), a(22, "MultiVAC"), r(), r(), i(23, "h2"), a(24, "626984.06 MTV"), r(), i(25, "p"), a(26, "$11,020"), r(), i(27, "a", 5), i(28, "button", 6), a(29, "Deposit"), r(), r(), i(30, "a", 5), i(31, "button", 7), a(32, "Withdraw"), r(), r(), r(), r(), i(33, "div", 1), i(34, "div", 2), i(35, "div", 3), h(36, "img", 9), i(37, "strong"), a(38, "Litecoin"), r(), r(), i(39, "h2"), a(40, "624582.06 LTC"), r(), i(41, "p"), a(42, "$41,000"), r(), i(43, "a", 5), i(44, "button", 6), a(45, "Deposit"), r(), r(), i(46, "a", 5), i(47, "button", 7), a(48, "Withdraw"), r(), r(), r(), r(), i(49, "div", 1), i(50, "div", 2), i(51, "div", 3), h(52, "img", 10), i(53, "strong"), a(54, "KuCoin Token"), r(), r(), i(55, "h2"), a(56, "223222.06 KCS"), r(), i(57, "p"), a(58, "$5,000"), r(), i(59, "a", 5), i(60, "button", 6), a(61, "Deposit"), r(), r(), i(62, "a", 5), i(63, "button", 7), a(64, "Withdraw"), r(), r(), r(), r(), i(65, "div", 1), i(66, "div", 2), i(67, "div", 3), h(68, "img", 11), i(69, "strong"), a(70, "Coti"), r(), r(), i(71, "h2"), a(72, "267211.06 COTI"), r(), i(73, "p"), a(74, "$21,000"), r(), i(75, "a", 5), i(76, "button", 6), a(77, "Deposit"), r(), r(), i(78, "a", 5), i(79, "button", 7), a(80, "Withdraw"), r(), r(), r(), r(), i(81, "div", 1), i(82, "div", 2), i(83, "div", 3), h(84, "img", 12), i(85, "strong"), a(86, "Tron"), r(), r(), i(87, "h2"), a(88, "529922.06 TRX"), r(), i(89, "p"), a(90, "$12,003"), r(), i(91, "a", 5), i(92, "button", 6), a(93, "Deposit"), r(), r(), i(94, "a", 5), i(95, "button", 7), a(96, "Withdraw"), r(), r(), r(), r(), i(97, "div", 1), i(98, "div", 2), i(99, "div", 3), h(100, "img", 13), i(101, "strong"), a(102, "Monero"), r(), r(), i(103, "h2"), a(104, "229922.06 XMR"), r(), i(105, "p"), a(106, "$14,111"), r(), i(107, "a", 5), i(108, "button", 6), a(109, "Deposit"), r(), r(), i(110, "a", 5), i(111, "button", 7), a(112, "Withdraw"), r(), r(), r(), r(), i(113, "div", 1), i(114, "div", 2), i(115, "div", 3), h(116, "img", 14), i(117, "strong"), a(118, "Cardano"), r(), r(), i(119, "h2"), a(120, "93793.39 ADA"), r(), i(121, "p"), a(122, "$13,401"), r(), i(123, "a", 5), i(124, "button", 6), a(125, "Deposit"), r(), r(), i(126, "a", 5), i(127, "button", 7), a(128, "Withdraw"), r(), r(), r(), r(), i(129, "div", 1), i(130, "div", 2), i(131, "div", 3), h(132, "img", 15), i(133, "strong"), a(134, "Binance Coin"), r(), r(), i(135, "h2"), a(136, "328229.32 BNB"), r(), i(137, "p"), a(138, "$12,402"), r(), i(139, "a", 5), i(140, "button", 6), a(141, "Deposit"), r(), r(), i(142, "a", 5), i(143, "button", 7), a(144, "Withdraw"), r(), r(), r(), r(), i(145, "div", 1), i(146, "div", 2), i(147, "div", 3), h(148, "img", 16), i(149, "strong"), a(150, "Neo"), r(), r(), i(151, "h2"), a(152, "33398.32 NEO"), r(), i(153, "p"), a(154, "$23,202"), r(), i(155, "a", 5), i(156, "button", 6), a(157, "Deposit"), r(), r(), i(158, "a", 5), i(159, "button", 7), a(160, "Withdraw"), r(), r(), r(), r(), r()), 2 & n && $t("autoplay", !1)("arrows", !1)("autoplayInterval", 2e3)("margin", 20)("height", 285)("cellWidth", 350)("loop", !0)
                        },
                        directives: [cR, Ot],
                        styles: [""]
                    }), t
                })(),
                sF = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-markets-list"]
                        ],
                        decls: 1775,
                        vars: 0,
                        consts: [
                            [1, "markets", "pb70"],
                            [1, "container-fluid"],
                            [1, "row"],
                            [1, "col-md-12"],
                            [1, "markets-pair-list"],
                            ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"],
                            ["role", "presentation", 1, "nav-item"],
                            ["id", "favorites-id", "data-bs-toggle", "tab", "data-bs-target", "#favorites", "type", "button", "role", "tab", "aria-controls", "favorites", "aria-selected", "true", 1, "nav-link"],
                            ["id", "btc-id", "data-bs-toggle", "tab", "data-bs-target", "#btc", "type", "button", "role", "tab", "aria-controls", "btc", "aria-selected", "false", 1, "nav-link", "active"],
                            ["id", "kcs-id", "data-bs-toggle", "tab", "data-bs-target", "#kcs", "type", "button", "role", "tab", "aria-controls", "kcs", "aria-selected", "false", 1, "nav-link"],
                            ["id", "usdt-id", "data-bs-toggle", "tab", "data-bs-target", "#usdt", "type", "button", "role", "tab", "aria-controls", "usdt", "aria-selected", "false", 1, "nav-link"],
                            ["id", "alts-id", "data-bs-toggle", "tab", "data-bs-target", "#alts", "type", "button", "role", "tab", "aria-controls", "alts", "aria-selected", "false", 1, "nav-link"],
                            ["id", "myTabContent", 1, "tab-content"],
                            ["id", "favorites", "role", "tabpanel", "aria-labelledby", "favorites-id", 1, "tab-pane", "fade"],
                            [1, "table-responsive"],
                            [1, "table", "star-active"],
                            [1, "icon", "ion-md-star"],
                            ["src", "../../../assets/img/icon/1.png", "alt", "eth"],
                            [1, "green"],
                            ["src", "../../../assets/img/icon/2.png", "alt", "vid"],
                            [1, "red"],
                            ["src", "../../../assets/img/icon/3.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/4.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/5.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/6.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/7.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/8.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/9.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/10.png", "alt", "bitcoin"],
                            ["id", "btc", "role", "tabpanel", "aria-labelledby", "btc-id", 1, "tab-pane", "fade", "show", "active"],
                            [1, "table"],
                            ["src", "../../../assets/img/icon/11.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/12.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/13.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/14.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/15.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/16.png", "alt", "bitcoin"],
                            [1, "more-market-data"],
                            ["src", "../../../assets/img/icon/17.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/19.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/20.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/21.png", "alt", "bitcoin"],
                            ["src", "../../../assets/img/icon/22.png", "alt", "bitcoin"],
                            ["id", "kcs", "role", "tabpanel", "aria-labelledby", "kcs-id", 1, "tab-pane", "fade"],
                            ["id", "usdt", "role", "tabpanel", "aria-labelledby", "usdt-id", 1, "tab-pane", "fade"],
                            ["id", "alts", "role", "tabpanel", "aria-labelledby", "alts-id", 1, "tab-pane", "fade"],
                            [1, "text-center"],
                            ["routerLink", "/markets", 1, "load-more", "btn"],
                            [1, "icon", "ion-md-arrow-down"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "div", 2), i(3, "div", 3), i(4, "div", 4), i(5, "ul", 5), i(6, "li", 6), i(7, "button", 7), a(8, " \u2605 Favorites "), r(), r(), i(9, "li", 6), i(10, "button", 8), a(11, " BTC "), r(), r(), i(12, "li", 6), i(13, "button", 9), a(14, " KCS "), r(), r(), i(15, "li", 6), i(16, "button", 10), a(17, " USDT "), r(), r(), i(18, "li", 6), i(19, "button", 11), a(20, " ALTS "), r(), r(), r(), i(21, "div", 12), i(22, "div", 13), i(23, "div", 14), i(24, "table", 15), i(25, "thead"), i(26, "tr"), i(27, "th"), a(28, "Pairs"), r(), i(29, "th"), a(30, "Coin"), r(), i(31, "th"), a(32, "Last Price"), r(), i(33, "th"), a(34, "Change (24H)"), r(), i(35, "th"), a(36, "High (24H)"), r(), i(37, "th"), a(38, "Low (24h)"), r(), i(39, "th"), a(40, "Volume (24h)"), r(), r(), r(), i(41, "tbody"), i(42, "tr"), i(43, "td"), h(44, "i", 16), a(45, " ETH/BTC"), r(), i(46, "td"), h(47, "img", 17), a(48, " ETH"), r(), i(49, "td"), a(50, "7394.06"), r(), i(51, "td", 18), a(52, "+0.78%"), r(), i(53, "td"), a(54, "7444.91"), r(), i(55, "td"), a(56, "7267.06"), r(), i(57, "td"), a(58, "431,687,258.77"), r(), r(), i(59, "tr"), i(60, "td"), h(61, "i", 16), a(62, " EOS/BTC"), r(), i(63, "td"), h(64, "img", 19), a(65, " EOS"), r(), i(66, "td"), a(67, "6984.06"), r(), i(68, "td", 20), a(69, "-1.65%"), r(), i(70, "td"), a(71, "6554.91"), r(), i(72, "td"), a(73, "6548.06"), r(), i(74, "td"), a(75, "431,684,298.45"), r(), r(), i(76, "tr"), i(77, "td"), h(78, "i", 16), a(79, " LTC/BTC"), r(), i(80, "td"), h(81, "img", 21), a(82, " LTC"), r(), i(83, "td"), a(84, "4582.06"), r(), i(85, "td", 18), a(86, "+2.62%"), r(), i(87, "td"), a(88, "7444.91"), r(), i(89, "td"), a(90, "4646.06"), r(), i(91, "td"), a(92, "431,687,258.23"), r(), r(), i(93, "tr"), i(94, "td"), h(95, "i", 16), a(96, " KCS/BTC"), r(), i(97, "td"), h(98, "img", 22), a(99, " KCS"), r(), i(100, "td"), a(101, "7394.06"), r(), i(102, "td", 20), a(103, "-0.94%"), r(), i(104, "td"), a(105, "7444.91"), r(), i(106, "td"), a(107, "7267.06"), r(), i(108, "td"), a(109, "431,687,258.33"), r(), r(), i(110, "tr"), i(111, "td"), h(112, "i", 16), a(113, " COTI/BTC"), r(), i(114, "td"), h(115, "img", 23), a(116, " COTI"), r(), i(117, "td"), a(118, "7394.06"), r(), i(119, "td", 18), a(120, "+0.78%"), r(), i(121, "td"), a(122, "7444.91"), r(), i(123, "td"), a(124, "7267.06"), r(), i(125, "td"), a(126, "431,687,258.53"), r(), r(), i(127, "tr"), i(128, "td"), h(129, "i", 16), a(130, " TRX/BTC"), r(), i(131, "td"), h(132, "img", 24), a(133, " TRX"), r(), i(134, "td"), a(135, "7394.06"), r(), i(136, "td", 18), a(137, "+0.71%"), r(), i(138, "td"), a(139, "7444.91"), r(), i(140, "td"), a(141, "7267.06"), r(), i(142, "td"), a(143, "431,687,258.53"), r(), r(), i(144, "tr"), i(145, "td"), h(146, "i", 16), a(147, " XMR/BTC"), r(), i(148, "td"), h(149, "img", 25), a(150, " XMR"), r(), i(151, "td"), a(152, "7394.06"), r(), i(153, "td", 20), a(154, "-0.73%"), r(), i(155, "td"), a(156, "7444.91"), r(), i(157, "td"), a(158, "7267.06"), r(), i(159, "td"), a(160, "431,687,258.77"), r(), r(), i(161, "tr"), i(162, "td"), h(163, "i", 16), a(164, " ADA/BTC"), r(), i(165, "td"), h(166, "img", 26), a(167, " ADA"), r(), i(168, "td"), a(169, "7394.06"), r(), i(170, "td", 20), a(171, "-1.20%"), r(), i(172, "td"), a(173, "7444.91"), r(), i(174, "td"), a(175, "7267.06"), r(), i(176, "td"), a(177, "431,687,258.35"), r(), r(), i(178, "tr"), i(179, "td"), h(180, "i", 16), a(181, " BNB/BTC"), r(), i(182, "td"), h(183, "img", 27), a(184, " BNB"), r(), i(185, "td"), a(186, "7394.06"), r(), i(187, "td", 18), a(188, "+0.74%"), r(), i(189, "td"), a(190, "7444.91"), r(), i(191, "td"), a(192, "7267.06"), r(), i(193, "td"), a(194, "431,687,258.23"), r(), r(), i(195, "tr"), i(196, "td"), h(197, "i", 16), a(198, " NEO/BTC"), r(), i(199, "td"), h(200, "img", 28), a(201, " NEO"), r(), i(202, "td"), a(203, "7394.06"), r(), i(204, "td", 20), a(205, "-0.78%"), r(), i(206, "td"), a(207, "7444.91"), r(), i(208, "td"), a(209, "7267.06"), r(), i(210, "td"), a(211, "431,687,258.77"), r(), r(), r(), r(), r(), r(), i(212, "div", 29), i(213, "div", 14), i(214, "table", 30), i(215, "thead"), i(216, "tr"), i(217, "th"), a(218, "Pairs"), r(), i(219, "th"), a(220, "Coin"), r(), i(221, "th"), a(222, "Last Price"), r(), i(223, "th"), a(224, "Change (24H)"), r(), i(225, "th"), a(226, "High (24H)"), r(), i(227, "th"), a(228, "Low (24h)"), r(), i(229, "th"), a(230, "Volume (24h)"), r(), r(), r(), i(231, "tbody"), i(232, "tr"), i(233, "td"), h(234, "i", 16), a(235, " ETH/BTC"), r(), i(236, "td"), h(237, "img", 17), a(238, " ETH"), r(), i(239, "td"), a(240, "7394.06"), r(), i(241, "td", 18), a(242, "+0.78%"), r(), i(243, "td"), a(244, "7444.91"), r(), i(245, "td"), a(246, "7267.06"), r(), i(247, "td"), a(248, "431,687,258.77"), r(), r(), i(249, "tr"), i(250, "td"), h(251, "i", 16), a(252, " EOS/BTC"), r(), i(253, "td"), h(254, "img", 19), a(255, " EOS"), r(), i(256, "td"), a(257, "6984.06"), r(), i(258, "td", 20), a(259, "-1.65%"), r(), i(260, "td"), a(261, "6554.91"), r(), i(262, "td"), a(263, "6548.06"), r(), i(264, "td"), a(265, "431,684,298.45"), r(), r(), i(266, "tr"), i(267, "td"), h(268, "i", 16), a(269, " LTC/BTC"), r(), i(270, "td"), h(271, "img", 21), a(272, " LTC"), r(), i(273, "td"), a(274, "4582.06"), r(), i(275, "td", 18), a(276, "+2.62%"), r(), i(277, "td"), a(278, "7444.91"), r(), i(279, "td"), a(280, "4646.06"), r(), i(281, "td"), a(282, "431,687,258.23"), r(), r(), i(283, "tr"), i(284, "td"), h(285, "i", 16), a(286, " KCS/BTC"), r(), i(287, "td"), h(288, "img", 22), a(289, " KCS"), r(), i(290, "td"), a(291, "7394.06"), r(), i(292, "td", 20), a(293, "-0.94%"), r(), i(294, "td"), a(295, "7444.91"), r(), i(296, "td"), a(297, "7267.06"), r(), i(298, "td"), a(299, "431,687,258.33"), r(), r(), i(300, "tr"), i(301, "td"), h(302, "i", 16), a(303, " COTI/BTC"), r(), i(304, "td"), h(305, "img", 23), a(306, " COTI"), r(), i(307, "td"), a(308, "7394.06"), r(), i(309, "td", 18), a(310, "+0.78%"), r(), i(311, "td"), a(312, "7444.91"), r(), i(313, "td"), a(314, "7267.06"), r(), i(315, "td"), a(316, "431,687,258.53"), r(), r(), i(317, "tr"), i(318, "td"), h(319, "i", 16), a(320, " TRX/BTC"), r(), i(321, "td"), h(322, "img", 24), a(323, " TRX"), r(), i(324, "td"), a(325, "7394.06"), r(), i(326, "td", 18), a(327, "+0.71%"), r(), i(328, "td"), a(329, "7444.91"), r(), i(330, "td"), a(331, "7267.06"), r(), i(332, "td"), a(333, "431,687,258.53"), r(), r(), i(334, "tr"), i(335, "td"), h(336, "i", 16), a(337, " XMR/BTC"), r(), i(338, "td"), h(339, "img", 25), a(340, " XMR"), r(), i(341, "td"), a(342, "7394.06"), r(), i(343, "td", 20), a(344, "-0.73%"), r(), i(345, "td"), a(346, "7444.91"), r(), i(347, "td"), a(348, "7267.06"), r(), i(349, "td"), a(350, "431,687,258.77"), r(), r(), i(351, "tr"), i(352, "td"), h(353, "i", 16), a(354, " ADA/BTC"), r(), i(355, "td"), h(356, "img", 26), a(357, " ADA"), r(), i(358, "td"), a(359, "7394.06"), r(), i(360, "td", 20), a(361, "-1.20%"), r(), i(362, "td"), a(363, "7444.91"), r(), i(364, "td"), a(365, "7267.06"), r(), i(366, "td"), a(367, "431,687,258.35"), r(), r(), i(368, "tr"), i(369, "td"), h(370, "i", 16), a(371, " BNB/BTC"), r(), i(372, "td"), h(373, "img", 27), a(374, " BNB"), r(), i(375, "td"), a(376, "7394.06"), r(), i(377, "td", 18), a(378, "+0.74%"), r(), i(379, "td"), a(380, "7444.91"), r(), i(381, "td"), a(382, "7267.06"), r(), i(383, "td"), a(384, "431,687,258.23"), r(), r(), i(385, "tr"), i(386, "td"), h(387, "i", 16), a(388, " NEO/BTC"), r(), i(389, "td"), h(390, "img", 28), a(391, " NEO"), r(), i(392, "td"), a(393, "7394.06"), r(), i(394, "td", 20), a(395, "-0.78%"), r(), i(396, "td"), a(397, "7444.91"), r(), i(398, "td"), a(399, "7267.06"), r(), i(400, "td"), a(401, "431,687,258.77"), r(), r(), i(402, "tr"), i(403, "td"), h(404, "i", 16), a(405, " TOMO/BTC"), r(), i(406, "td"), h(407, "img", 31), a(408, " TOMO "), r(), i(409, "td"), a(410, "7394.06"), r(), i(411, "td", 20), a(412, "-4.78%"), r(), i(413, "td"), a(414, "7444.91"), r(), i(415, "td"), a(416, "7267.06"), r(), i(417, "td"), a(418, "431,687,258.33"), r(), r(), i(419, "tr"), i(420, "td"), h(421, "i", 16), a(422, " MKR/BTC"), r(), i(423, "td"), h(424, "img", 32), a(425, " MKR"), r(), i(426, "td"), a(427, "7394.06"), r(), i(428, "td", 18), a(429, "+0.32%"), r(), i(430, "td"), a(431, "7444.91"), r(), i(432, "td"), a(433, "7267.06"), r(), i(434, "td"), a(435, "431,687,258.14"), r(), r(), i(436, "tr"), i(437, "td"), h(438, "i", 16), a(439, " ZEC/BTC"), r(), i(440, "td"), h(441, "img", 33), a(442, " ZEC"), r(), i(443, "td"), a(444, "7394.06"), r(), i(445, "td", 18), a(446, "+5.53%"), r(), i(447, "td"), a(448, "7444.91"), r(), i(449, "td"), a(450, "7267.06"), r(), i(451, "td"), a(452, "431,687,258.22"), r(), r(), i(453, "tr"), i(454, "td"), h(455, "i", 16), a(456, " VSYS/BTC"), r(), i(457, "td"), h(458, "img", 34), a(459, " VSYS "), r(), i(460, "td"), a(461, "7394.06"), r(), i(462, "td", 20), a(463, "-3.52%"), r(), i(464, "td"), a(465, "7444.91"), r(), i(466, "td"), a(467, "7267.06"), r(), i(468, "td"), a(469, "431,687,258.35"), r(), r(), i(470, "tr"), i(471, "td"), h(472, "i", 16), a(473, " ATOM/BTC"), r(), i(474, "td"), h(475, "img", 35), a(476, " ATOM "), r(), i(477, "td"), a(478, "7394.06"), r(), i(479, "td", 20), a(480, "-2.78%"), r(), i(481, "td"), a(482, "7444.91"), r(), i(483, "td"), a(484, "7267.06"), r(), i(485, "td"), a(486, "431,687,258.21"), r(), r(), i(487, "tr"), i(488, "td"), h(489, "i", 16), a(490, " MTV/BTC"), r(), i(491, "td"), h(492, "img", 36), a(493, " MTV"), r(), i(494, "td"), a(495, "7394.06"), r(), i(496, "td", 18), a(497, "+1.78%"), r(), i(498, "td"), a(499, "7444.91"), r(), i(500, "td"), a(501, "7267.06"), r(), i(502, "td"), a(503, "431,687,258.32"), r(), r(), i(504, "tr", 37), i(505, "td"), h(506, "i", 16), a(507, " XTZ/BTC"), r(), i(508, "td"), h(509, "img", 38), a(510, " XTZ"), r(), i(511, "td"), a(512, "7394.06"), r(), i(513, "td", 20), a(514, "-3.78%"), r(), i(515, "td"), a(516, "7444.91"), r(), i(517, "td"), a(518, "7267.06"), r(), i(519, "td"), a(520, "431,687,258.25"), r(), r(), i(521, "tr", 37), i(522, "td"), h(523, "i", 16), a(524, " CEL/BTC"), r(), i(525, "td"), h(526, "img", 39), a(527, " CEL"), r(), i(528, "td"), a(529, "7394.06"), r(), i(530, "td", 20), a(531, "-3.78%"), r(), i(532, "td"), a(533, "7444.91"), r(), i(534, "td"), a(535, "7267.06"), r(), i(536, "td"), a(537, "431,687,258.25"), r(), r(), i(538, "tr", 37), i(539, "td"), h(540, "i", 16), a(541, " EGLD/BTC"), r(), i(542, "td"), h(543, "img", 40), a(544, " EGLD "), r(), i(545, "td"), a(546, "7394.06"), r(), i(547, "td", 20), a(548, "-3.78%"), r(), i(549, "td"), a(550, "7444.91"), r(), i(551, "td"), a(552, "7267.06"), r(), i(553, "td"), a(554, "431,687,258.25"), r(), r(), i(555, "tr", 37), i(556, "td"), h(557, "i", 16), a(558, " ZEC/BTC"), r(), i(559, "td"), h(560, "img", 41), a(561, " ZEC"), r(), i(562, "td"), a(563, "7394.06"), r(), i(564, "td", 20), a(565, "-3.78%"), r(), i(566, "td"), a(567, "7444.91"), r(), i(568, "td"), a(569, "7267.06"), r(), i(570, "td"), a(571, "431,687,258.25"), r(), r(), i(572, "tr", 37), i(573, "td"), h(574, "i", 16), a(575, " RUNE/BTC"), r(), i(576, "td"), h(577, "img", 42), a(578, " RUNE "), r(), i(579, "td"), a(580, "7394.06"), r(), i(581, "td", 20), a(582, "-3.78%"), r(), i(583, "td"), a(584, "7444.91"), r(), i(585, "td"), a(586, "7267.06"), r(), i(587, "td"), a(588, "431,687,258.25"), r(), r(), r(), r(), r(), r(), i(589, "div", 43), i(590, "div", 14), i(591, "table", 30), i(592, "thead"), i(593, "tr"), i(594, "th"), a(595, "Pairs"), r(), i(596, "th"), a(597, "Coin"), r(), i(598, "th"), a(599, "Last Price"), r(), i(600, "th"), a(601, "Change (24H)"), r(), i(602, "th"), a(603, "High (24H)"), r(), i(604, "th"), a(605, "Low (24h)"), r(), i(606, "th"), a(607, "Volume (24h)"), r(), r(), r(), i(608, "tbody"), i(609, "tr"), i(610, "td"), h(611, "i", 16), a(612, " ETH/KCS"), r(), i(613, "td"), h(614, "img", 17), a(615, " ETH"), r(), i(616, "td"), a(617, "7394.06"), r(), i(618, "td", 18), a(619, "+0.78%"), r(), i(620, "td"), a(621, "7444.91"), r(), i(622, "td"), a(623, "7267.06"), r(), i(624, "td"), a(625, "431,687,258.77"), r(), r(), i(626, "tr"), i(627, "td"), h(628, "i", 16), a(629, " EOS/KCS"), r(), i(630, "td"), h(631, "img", 19), a(632, " EOS"), r(), i(633, "td"), a(634, "6984.06"), r(), i(635, "td", 20), a(636, "-1.65%"), r(), i(637, "td"), a(638, "6554.91"), r(), i(639, "td"), a(640, "6548.06"), r(), i(641, "td"), a(642, "431,684,298.45"), r(), r(), i(643, "tr"), i(644, "td"), h(645, "i", 16), a(646, " LTC/KCS"), r(), i(647, "td"), h(648, "img", 21), a(649, " LTC"), r(), i(650, "td"), a(651, "4582.06"), r(), i(652, "td", 18), a(653, "+2.62%"), r(), i(654, "td"), a(655, "7444.91"), r(), i(656, "td"), a(657, "4646.06"), r(), i(658, "td"), a(659, "431,687,258.23"), r(), r(), i(660, "tr"), i(661, "td"), h(662, "i", 16), a(663, " KCS/KCS"), r(), i(664, "td"), h(665, "img", 22), a(666, " KCS"), r(), i(667, "td"), a(668, "7394.06"), r(), i(669, "td", 20), a(670, "-0.94%"), r(), i(671, "td"), a(672, "7444.91"), r(), i(673, "td"), a(674, "7267.06"), r(), i(675, "td"), a(676, "431,687,258.33"), r(), r(), i(677, "tr"), i(678, "td"), h(679, "i", 16), a(680, " COTI/KCS"), r(), i(681, "td"), h(682, "img", 23), a(683, " COTI"), r(), i(684, "td"), a(685, "7394.06"), r(), i(686, "td", 18), a(687, "+0.78%"), r(), i(688, "td"), a(689, "7444.91"), r(), i(690, "td"), a(691, "7267.06"), r(), i(692, "td"), a(693, "431,687,258.53"), r(), r(), i(694, "tr"), i(695, "td"), h(696, "i", 16), a(697, " TRX/KCS"), r(), i(698, "td"), h(699, "img", 24), a(700, " TRX"), r(), i(701, "td"), a(702, "7394.06"), r(), i(703, "td", 18), a(704, "+0.71%"), r(), i(705, "td"), a(706, "7444.91"), r(), i(707, "td"), a(708, "7267.06"), r(), i(709, "td"), a(710, "431,687,258.53"), r(), r(), i(711, "tr"), i(712, "td"), h(713, "i", 16), a(714, " XMR/KCS"), r(), i(715, "td"), h(716, "img", 25), a(717, " XMR"), r(), i(718, "td"), a(719, "7394.06"), r(), i(720, "td", 20), a(721, "-0.73%"), r(), i(722, "td"), a(723, "7444.91"), r(), i(724, "td"), a(725, "7267.06"), r(), i(726, "td"), a(727, "431,687,258.77"), r(), r(), i(728, "tr"), i(729, "td"), h(730, "i", 16), a(731, " ADA/KCS"), r(), i(732, "td"), h(733, "img", 26), a(734, " ADA"), r(), i(735, "td"), a(736, "7394.06"), r(), i(737, "td", 20), a(738, "-1.20%"), r(), i(739, "td"), a(740, "7444.91"), r(), i(741, "td"), a(742, "7267.06"), r(), i(743, "td"), a(744, "431,687,258.35"), r(), r(), i(745, "tr"), i(746, "td"), h(747, "i", 16), a(748, " BNB/KCS"), r(), i(749, "td"), h(750, "img", 27), a(751, " BNB"), r(), i(752, "td"), a(753, "7394.06"), r(), i(754, "td", 18), a(755, "+0.74%"), r(), i(756, "td"), a(757, "7444.91"), r(), i(758, "td"), a(759, "7267.06"), r(), i(760, "td"), a(761, "431,687,258.23"), r(), r(), i(762, "tr"), i(763, "td"), h(764, "i", 16), a(765, " NEO/KCS"), r(), i(766, "td"), h(767, "img", 28), a(768, " NEO"), r(), i(769, "td"), a(770, "7394.06"), r(), i(771, "td", 20), a(772, "-0.78%"), r(), i(773, "td"), a(774, "7444.91"), r(), i(775, "td"), a(776, "7267.06"), r(), i(777, "td"), a(778, "431,687,258.77"), r(), r(), i(779, "tr"), i(780, "td"), h(781, "i", 16), a(782, " TOMO/KCS"), r(), i(783, "td"), h(784, "img", 31), a(785, " TOMO "), r(), i(786, "td"), a(787, "7394.06"), r(), i(788, "td", 20), a(789, "-4.78%"), r(), i(790, "td"), a(791, "7444.91"), r(), i(792, "td"), a(793, "7267.06"), r(), i(794, "td"), a(795, "431,687,258.33"), r(), r(), i(796, "tr"), i(797, "td"), h(798, "i", 16), a(799, " MKR/KCS"), r(), i(800, "td"), h(801, "img", 32), a(802, " MKR"), r(), i(803, "td"), a(804, "7394.06"), r(), i(805, "td", 18), a(806, "+0.32%"), r(), i(807, "td"), a(808, "7444.91"), r(), i(809, "td"), a(810, "7267.06"), r(), i(811, "td"), a(812, "431,687,258.14"), r(), r(), i(813, "tr"), i(814, "td"), h(815, "i", 16), a(816, " ZEC/KCS"), r(), i(817, "td"), h(818, "img", 33), a(819, " ZEC"), r(), i(820, "td"), a(821, "7394.06"), r(), i(822, "td", 18), a(823, "+5.53%"), r(), i(824, "td"), a(825, "7444.91"), r(), i(826, "td"), a(827, "7267.06"), r(), i(828, "td"), a(829, "431,687,258.22"), r(), r(), i(830, "tr"), i(831, "td"), h(832, "i", 16), a(833, " VSYS/KCS"), r(), i(834, "td"), h(835, "img", 34), a(836, " VSYS "), r(), i(837, "td"), a(838, "7394.06"), r(), i(839, "td", 20), a(840, "-3.52%"), r(), i(841, "td"), a(842, "7444.91"), r(), i(843, "td"), a(844, "7267.06"), r(), i(845, "td"), a(846, "431,687,258.35"), r(), r(), i(847, "tr"), i(848, "td"), h(849, "i", 16), a(850, " ATOM/KCS"), r(), i(851, "td"), h(852, "img", 35), a(853, " ATOM "), r(), i(854, "td"), a(855, "7394.06"), r(), i(856, "td", 20), a(857, "-2.78%"), r(), i(858, "td"), a(859, "7444.91"), r(), i(860, "td"), a(861, "7267.06"), r(), i(862, "td"), a(863, "431,687,258.21"), r(), r(), i(864, "tr"), i(865, "td"), h(866, "i", 16), a(867, " MTV/KCS"), r(), i(868, "td"), h(869, "img", 36), a(870, " MTV"), r(), i(871, "td"), a(872, "7394.06"), r(), i(873, "td", 18), a(874, "+1.78%"), r(), i(875, "td"), a(876, "7444.91"), r(), i(877, "td"), a(878, "7267.06"), r(), i(879, "td"), a(880, "431,687,258.32"), r(), r(), i(881, "tr"), i(882, "td"), h(883, "i", 16), a(884, " XTZ/KCS"), r(), i(885, "td"), h(886, "img", 38), a(887, " XTZ"), r(), i(888, "td"), a(889, "7394.06"), r(), i(890, "td", 20), a(891, "-3.78%"), r(), i(892, "td"), a(893, "7444.91"), r(), i(894, "td"), a(895, "7267.06"), r(), i(896, "td"), a(897, "431,687,258.25"), r(), r(), i(898, "tr", 37), i(899, "td"), h(900, "i", 16), a(901, " XTZ/KCS"), r(), i(902, "td"), h(903, "img", 38), a(904, " XTZ"), r(), i(905, "td"), a(906, "7394.06"), r(), i(907, "td", 20), a(908, "-3.78%"), r(), i(909, "td"), a(910, "7444.91"), r(), i(911, "td"), a(912, "7267.06"), r(), i(913, "td"), a(914, "431,687,258.25"), r(), r(), i(915, "tr", 37), i(916, "td"), h(917, "i", 16), a(918, " CEL/KCS"), r(), i(919, "td"), h(920, "img", 39), a(921, " CEL"), r(), i(922, "td"), a(923, "7394.06"), r(), i(924, "td", 20), a(925, "-3.78%"), r(), i(926, "td"), a(927, "7444.91"), r(), i(928, "td"), a(929, "7267.06"), r(), i(930, "td"), a(931, "431,687,258.25"), r(), r(), i(932, "tr", 37), i(933, "td"), h(934, "i", 16), a(935, " EGLD/KCS"), r(), i(936, "td"), h(937, "img", 40), a(938, " EGLD "), r(), i(939, "td"), a(940, "7394.06"), r(), i(941, "td", 20), a(942, "-3.78%"), r(), i(943, "td"), a(944, "7444.91"), r(), i(945, "td"), a(946, "7267.06"), r(), i(947, "td"), a(948, "431,687,258.25"), r(), r(), i(949, "tr", 37), i(950, "td"), h(951, "i", 16), a(952, " ZEC/KCS"), r(), i(953, "td"), h(954, "img", 41), a(955, " ZEC"), r(), i(956, "td"), a(957, "7394.06"), r(), i(958, "td", 20), a(959, "-3.78%"), r(), i(960, "td"), a(961, "7444.91"), r(), i(962, "td"), a(963, "7267.06"), r(), i(964, "td"), a(965, "431,687,258.25"), r(), r(), i(966, "tr", 37), i(967, "td"), h(968, "i", 16), a(969, " RUNE/KCS"), r(), i(970, "td"), h(971, "img", 42), a(972, " RUNE "), r(), i(973, "td"), a(974, "7394.06"), r(), i(975, "td", 20), a(976, "-3.78%"), r(), i(977, "td"), a(978, "7444.91"), r(), i(979, "td"), a(980, "7267.06"), r(), i(981, "td"), a(982, "431,687,258.25"), r(), r(), r(), r(), r(), r(), i(983, "div", 44), i(984, "div", 14), i(985, "table", 30), i(986, "thead"), i(987, "tr"), i(988, "th"), a(989, "Pairs"), r(), i(990, "th"), a(991, "Coin"), r(), i(992, "th"), a(993, "Last Price"), r(), i(994, "th"), a(995, "Change (24H)"), r(), i(996, "th"), a(997, "High (24H)"), r(), i(998, "th"), a(999, "Low (24h)"), r(), i(1e3, "th"), a(1001, "Volume (24h)"), r(), r(), r(), i(1002, "tbody"), i(1003, "tr"), i(1004, "td"), h(1005, "i", 16), a(1006, " ETH/USDT"), r(), i(1007, "td"), h(1008, "img", 17), a(1009, " ETH"), r(), i(1010, "td"), a(1011, "7394.06"), r(), i(1012, "td", 18), a(1013, "+0.78%"), r(), i(1014, "td"), a(1015, "7444.91"), r(), i(1016, "td"), a(1017, "7267.06"), r(), i(1018, "td"), a(1019, "431,687,258.77"), r(), r(), i(1020, "tr"), i(1021, "td"), h(1022, "i", 16), a(1023, " EOS/USDT"), r(), i(1024, "td"), h(1025, "img", 19), a(1026, " EOS"), r(), i(1027, "td"), a(1028, "6984.06"), r(), i(1029, "td", 20), a(1030, "-1.65%"), r(), i(1031, "td"), a(1032, "6554.91"), r(), i(1033, "td"), a(1034, "6548.06"), r(), i(1035, "td"), a(1036, "431,684,298.45"), r(), r(), i(1037, "tr"), i(1038, "td"), h(1039, "i", 16), a(1040, " LTC/USDT"), r(), i(1041, "td"), h(1042, "img", 21), a(1043, " LTC"), r(), i(1044, "td"), a(1045, "4582.06"), r(), i(1046, "td", 18), a(1047, "+2.62%"), r(), i(1048, "td"), a(1049, "7444.91"), r(), i(1050, "td"), a(1051, "4646.06"), r(), i(1052, "td"), a(1053, "431,687,258.23"), r(), r(), i(1054, "tr"), i(1055, "td"), h(1056, "i", 16), a(1057, " USDT/USDT"), r(), i(1058, "td"), h(1059, "img", 22), a(1060, " USDT"), r(), i(1061, "td"), a(1062, "7394.06"), r(), i(1063, "td", 20), a(1064, "-0.94%"), r(), i(1065, "td"), a(1066, "7444.91"), r(), i(1067, "td"), a(1068, "7267.06"), r(), i(1069, "td"), a(1070, "431,687,258.33"), r(), r(), i(1071, "tr"), i(1072, "td"), h(1073, "i", 16), a(1074, " COTI/USDT"), r(), i(1075, "td"), h(1076, "img", 23), a(1077, " COTI"), r(), i(1078, "td"), a(1079, "7394.06"), r(), i(1080, "td", 18), a(1081, "+0.78%"), r(), i(1082, "td"), a(1083, "7444.91"), r(), i(1084, "td"), a(1085, "7267.06"), r(), i(1086, "td"), a(1087, "431,687,258.53"), r(), r(), i(1088, "tr"), i(1089, "td"), h(1090, "i", 16), a(1091, " TRX/USDT"), r(), i(1092, "td"), h(1093, "img", 24), a(1094, " TRX"), r(), i(1095, "td"), a(1096, "7394.06"), r(), i(1097, "td", 18), a(1098, "+0.71%"), r(), i(1099, "td"), a(1100, "7444.91"), r(), i(1101, "td"), a(1102, "7267.06"), r(), i(1103, "td"), a(1104, "431,687,258.53"), r(), r(), i(1105, "tr"), i(1106, "td"), h(1107, "i", 16), a(1108, " XMR/USDT"), r(), i(1109, "td"), h(1110, "img", 25), a(1111, " XMR"), r(), i(1112, "td"), a(1113, "7394.06"), r(), i(1114, "td", 20), a(1115, "-0.73%"), r(), i(1116, "td"), a(1117, "7444.91"), r(), i(1118, "td"), a(1119, "7267.06"), r(), i(1120, "td"), a(1121, "431,687,258.77"), r(), r(), i(1122, "tr"), i(1123, "td"), h(1124, "i", 16), a(1125, " ADA/USDT"), r(), i(1126, "td"), h(1127, "img", 26), a(1128, " ADA"), r(), i(1129, "td"), a(1130, "7394.06"), r(), i(1131, "td", 20), a(1132, "-1.20%"), r(), i(1133, "td"), a(1134, "7444.91"), r(), i(1135, "td"), a(1136, "7267.06"), r(), i(1137, "td"), a(1138, "431,687,258.35"), r(), r(), i(1139, "tr"), i(1140, "td"), h(1141, "i", 16), a(1142, " BNB/USDT"), r(), i(1143, "td"), h(1144, "img", 27), a(1145, " BNB"), r(), i(1146, "td"), a(1147, "7394.06"), r(), i(1148, "td", 18), a(1149, "+0.74%"), r(), i(1150, "td"), a(1151, "7444.91"), r(), i(1152, "td"), a(1153, "7267.06"), r(), i(1154, "td"), a(1155, "431,687,258.23"), r(), r(), i(1156, "tr"), i(1157, "td"), h(1158, "i", 16), a(1159, " NEO/USDT"), r(), i(1160, "td"), h(1161, "img", 28), a(1162, " NEO"), r(), i(1163, "td"), a(1164, "7394.06"), r(), i(1165, "td", 20), a(1166, "-0.78%"), r(), i(1167, "td"), a(1168, "7444.91"), r(), i(1169, "td"), a(1170, "7267.06"), r(), i(1171, "td"), a(1172, "431,687,258.77"), r(), r(), i(1173, "tr"), i(1174, "td"), h(1175, "i", 16), a(1176, " TOMO/USDT"), r(), i(1177, "td"), h(1178, "img", 31), a(1179, " TOMO "), r(), i(1180, "td"), a(1181, "7394.06"), r(), i(1182, "td", 20), a(1183, "-4.78%"), r(), i(1184, "td"), a(1185, "7444.91"), r(), i(1186, "td"), a(1187, "7267.06"), r(), i(1188, "td"), a(1189, "431,687,258.33"), r(), r(), i(1190, "tr"), i(1191, "td"), h(1192, "i", 16), a(1193, " MKR/USDT"), r(), i(1194, "td"), h(1195, "img", 32), a(1196, " MKR"), r(), i(1197, "td"), a(1198, "7394.06"), r(), i(1199, "td", 18), a(1200, "+0.32%"), r(), i(1201, "td"), a(1202, "7444.91"), r(), i(1203, "td"), a(1204, "7267.06"), r(), i(1205, "td"), a(1206, "431,687,258.14"), r(), r(), i(1207, "tr"), i(1208, "td"), h(1209, "i", 16), a(1210, " ZEC/USDT"), r(), i(1211, "td"), h(1212, "img", 33), a(1213, " ZEC"), r(), i(1214, "td"), a(1215, "7394.06"), r(), i(1216, "td", 18), a(1217, "+5.53%"), r(), i(1218, "td"), a(1219, "7444.91"), r(), i(1220, "td"), a(1221, "7267.06"), r(), i(1222, "td"), a(1223, "431,687,258.22"), r(), r(), i(1224, "tr"), i(1225, "td"), h(1226, "i", 16), a(1227, " VSYS/USDT"), r(), i(1228, "td"), h(1229, "img", 34), a(1230, " VSYS "), r(), i(1231, "td"), a(1232, "7394.06"), r(), i(1233, "td", 20), a(1234, "-3.52%"), r(), i(1235, "td"), a(1236, "7444.91"), r(), i(1237, "td"), a(1238, "7267.06"), r(), i(1239, "td"), a(1240, "431,687,258.35"), r(), r(), i(1241, "tr"), i(1242, "td"), h(1243, "i", 16), a(1244, " ATOM/USDT"), r(), i(1245, "td"), h(1246, "img", 35), a(1247, " ATOM "), r(), i(1248, "td"), a(1249, "7394.06"), r(), i(1250, "td", 20), a(1251, "-2.78%"), r(), i(1252, "td"), a(1253, "7444.91"), r(), i(1254, "td"), a(1255, "7267.06"), r(), i(1256, "td"), a(1257, "431,687,258.21"), r(), r(), i(1258, "tr"), i(1259, "td"), h(1260, "i", 16), a(1261, " MTV/USDT"), r(), i(1262, "td"), h(1263, "img", 36), a(1264, " MTV"), r(), i(1265, "td"), a(1266, "7394.06"), r(), i(1267, "td", 18), a(1268, "+1.78%"), r(), i(1269, "td"), a(1270, "7444.91"), r(), i(1271, "td"), a(1272, "7267.06"), r(), i(1273, "td"), a(1274, "431,687,258.32"), r(), r(), i(1275, "tr"), i(1276, "td"), h(1277, "i", 16), a(1278, " XTZ/USDT"), r(), i(1279, "td"), h(1280, "img", 38), a(1281, " XTZ"), r(), i(1282, "td"), a(1283, "7394.06"), r(), i(1284, "td", 20), a(1285, "-3.78%"), r(), i(1286, "td"), a(1287, "7444.91"), r(), i(1288, "td"), a(1289, "7267.06"), r(), i(1290, "td"), a(1291, "431,687,258.25"), r(), r(), i(1292, "tr", 37), i(1293, "td"), h(1294, "i", 16), a(1295, " XTZ/USDT"), r(), i(1296, "td"), h(1297, "img", 38), a(1298, " XTZ"), r(), i(1299, "td"), a(1300, "7394.06"), r(), i(1301, "td", 20), a(1302, "-3.78%"), r(), i(1303, "td"), a(1304, "7444.91"), r(), i(1305, "td"), a(1306, "7267.06"), r(), i(1307, "td"), a(1308, "431,687,258.25"), r(), r(), i(1309, "tr", 37), i(1310, "td"), h(1311, "i", 16), a(1312, " CEL/USDT"), r(), i(1313, "td"), h(1314, "img", 39), a(1315, " CEL"), r(), i(1316, "td"), a(1317, "7394.06"), r(), i(1318, "td", 20), a(1319, "-3.78%"), r(), i(1320, "td"), a(1321, "7444.91"), r(), i(1322, "td"), a(1323, "7267.06"), r(), i(1324, "td"), a(1325, "431,687,258.25"), r(), r(), i(1326, "tr", 37), i(1327, "td"), h(1328, "i", 16), a(1329, " EGLD/USDT"), r(), i(1330, "td"), h(1331, "img", 40), a(1332, " EGLD "), r(), i(1333, "td"), a(1334, "7394.06"), r(), i(1335, "td", 20), a(1336, "-3.78%"), r(), i(1337, "td"), a(1338, "7444.91"), r(), i(1339, "td"), a(1340, "7267.06"), r(), i(1341, "td"), a(1342, "431,687,258.25"), r(), r(), i(1343, "tr", 37), i(1344, "td"), h(1345, "i", 16), a(1346, " ZEC/USDT"), r(), i(1347, "td"), h(1348, "img", 41), a(1349, " ZEC"), r(), i(1350, "td"), a(1351, "7394.06"), r(), i(1352, "td", 20), a(1353, "-3.78%"), r(), i(1354, "td"), a(1355, "7444.91"), r(), i(1356, "td"), a(1357, "7267.06"), r(), i(1358, "td"), a(1359, "431,687,258.25"), r(), r(), i(1360, "tr", 37), i(1361, "td"), h(1362, "i", 16), a(1363, " RUNE/USDT"), r(), i(1364, "td"), h(1365, "img", 42), a(1366, " RUNE "), r(), i(1367, "td"), a(1368, "7394.06"), r(), i(1369, "td", 20), a(1370, "-3.78%"), r(), i(1371, "td"), a(1372, "7444.91"), r(), i(1373, "td"), a(1374, "7267.06"), r(), i(1375, "td"), a(1376, "431,687,258.25"), r(), r(), r(), r(), r(), r(), i(1377, "div", 45), i(1378, "div", 14), i(1379, "table", 30), i(1380, "thead"), i(1381, "tr"), i(1382, "th"), a(1383, "Pairs"), r(), i(1384, "th"), a(1385, "Coin"), r(), i(1386, "th"), a(1387, "Last Price"), r(), i(1388, "th"), a(1389, "Change (24H)"), r(), i(1390, "th"), a(1391, "High (24H)"), r(), i(1392, "th"), a(1393, "Low (24h)"), r(), i(1394, "th"), a(1395, "Volume (24h)"), r(), r(), r(), i(1396, "tbody"), i(1397, "tr"), i(1398, "td"), h(1399, "i", 16), a(1400, " ETH/ALTS"), r(), i(1401, "td"), h(1402, "img", 17), a(1403, " ETH"), r(), i(1404, "td"), a(1405, "7394.06"), r(), i(1406, "td", 18), a(1407, "+0.78%"), r(), i(1408, "td"), a(1409, "7444.91"), r(), i(1410, "td"), a(1411, "7267.06"), r(), i(1412, "td"), a(1413, "431,687,258.77"), r(), r(), i(1414, "tr"), i(1415, "td"), h(1416, "i", 16), a(1417, " EOS/ALTS"), r(), i(1418, "td"), h(1419, "img", 19), a(1420, " EOS"), r(), i(1421, "td"), a(1422, "6984.06"), r(), i(1423, "td", 20), a(1424, "-1.65%"), r(), i(1425, "td"), a(1426, "6554.91"), r(), i(1427, "td"), a(1428, "6548.06"), r(), i(1429, "td"), a(1430, "431,684,298.45"), r(), r(), i(1431, "tr"), i(1432, "td"), h(1433, "i", 16), a(1434, " LTC/ALTS"), r(), i(1435, "td"), h(1436, "img", 21), a(1437, " LTC"), r(), i(1438, "td"), a(1439, "4582.06"), r(), i(1440, "td", 18), a(1441, "+2.62%"), r(), i(1442, "td"), a(1443, "7444.91"), r(), i(1444, "td"), a(1445, "4646.06"), r(), i(1446, "td"), a(1447, "431,687,258.23"), r(), r(), i(1448, "tr"), i(1449, "td"), h(1450, "i", 16), a(1451, " ALTS/ALTS"), r(), i(1452, "td"), h(1453, "img", 22), a(1454, " ALTS"), r(), i(1455, "td"), a(1456, "7394.06"), r(), i(1457, "td", 20), a(1458, "-0.94%"), r(), i(1459, "td"), a(1460, "7444.91"), r(), i(1461, "td"), a(1462, "7267.06"), r(), i(1463, "td"), a(1464, "431,687,258.33"), r(), r(), i(1465, "tr"), i(1466, "td"), h(1467, "i", 16), a(1468, " COTI/ALTS"), r(), i(1469, "td"), h(1470, "img", 23), a(1471, " COTI"), r(), i(1472, "td"), a(1473, "7394.06"), r(), i(1474, "td", 18), a(1475, "+0.78%"), r(), i(1476, "td"), a(1477, "7444.91"), r(), i(1478, "td"), a(1479, "7267.06"), r(), i(1480, "td"), a(1481, "431,687,258.53"), r(), r(), i(1482, "tr"), i(1483, "td"), h(1484, "i", 16), a(1485, " TRX/ALTS"), r(), i(1486, "td"), h(1487, "img", 24), a(1488, " TRX"), r(), i(1489, "td"), a(1490, "7394.06"), r(), i(1491, "td", 18), a(1492, "+0.71%"), r(), i(1493, "td"), a(1494, "7444.91"), r(), i(1495, "td"), a(1496, "7267.06"), r(), i(1497, "td"), a(1498, "431,687,258.53"), r(), r(), i(1499, "tr"), i(1500, "td"), h(1501, "i", 16), a(1502, " XMR/ALTS"), r(), i(1503, "td"), h(1504, "img", 25), a(1505, " XMR"), r(), i(1506, "td"), a(1507, "7394.06"), r(), i(1508, "td", 20), a(1509, "-0.73%"), r(), i(1510, "td"), a(1511, "7444.91"), r(), i(1512, "td"), a(1513, "7267.06"), r(), i(1514, "td"), a(1515, "431,687,258.77"), r(), r(), i(1516, "tr"), i(1517, "td"), h(1518, "i", 16), a(1519, " ADA/ALTS"), r(), i(1520, "td"), h(1521, "img", 26), a(1522, " ADA"), r(), i(1523, "td"), a(1524, "7394.06"), r(), i(1525, "td", 20), a(1526, "-1.20%"), r(), i(1527, "td"), a(1528, "7444.91"), r(), i(1529, "td"), a(1530, "7267.06"), r(), i(1531, "td"), a(1532, "431,687,258.35"), r(), r(), i(1533, "tr"), i(1534, "td"), h(1535, "i", 16), a(1536, " BNB/ALTS"), r(), i(1537, "td"), h(1538, "img", 27), a(1539, " BNB"), r(), i(1540, "td"), a(1541, "7394.06"), r(), i(1542, "td", 18), a(1543, "+0.74%"), r(), i(1544, "td"), a(1545, "7444.91"), r(), i(1546, "td"), a(1547, "7267.06"), r(), i(1548, "td"), a(1549, "431,687,258.23"), r(), r(), i(1550, "tr"), i(1551, "td"), h(1552, "i", 16), a(1553, " NEO/ALTS"), r(), i(1554, "td"), h(1555, "img", 28), a(1556, " NEO"), r(), i(1557, "td"), a(1558, "7394.06"), r(), i(1559, "td", 20), a(1560, "-0.78%"), r(), i(1561, "td"), a(1562, "7444.91"), r(), i(1563, "td"), a(1564, "7267.06"), r(), i(1565, "td"), a(1566, "431,687,258.77"), r(), r(), i(1567, "tr"), i(1568, "td"), h(1569, "i", 16), a(1570, " TOMO/ALTS"), r(), i(1571, "td"), h(1572, "img", 31), a(1573, " TOMO "), r(), i(1574, "td"), a(1575, "7394.06"), r(), i(1576, "td", 20), a(1577, "-4.78%"), r(), i(1578, "td"), a(1579, "7444.91"), r(), i(1580, "td"), a(1581, "7267.06"), r(), i(1582, "td"), a(1583, "431,687,258.33"), r(), r(), i(1584, "tr"), i(1585, "td"), h(1586, "i", 16), a(1587, " MKR/ALTS"), r(), i(1588, "td"), h(1589, "img", 32), a(1590, " MKR"), r(), i(1591, "td"), a(1592, "7394.06"), r(), i(1593, "td", 18), a(1594, "+0.32%"), r(), i(1595, "td"), a(1596, "7444.91"), r(), i(1597, "td"), a(1598, "7267.06"), r(), i(1599, "td"), a(1600, "431,687,258.14"), r(), r(), i(1601, "tr"), i(1602, "td"), h(1603, "i", 16), a(1604, " ZEC/ALTS"), r(), i(1605, "td"), h(1606, "img", 33), a(1607, " ZEC"), r(), i(1608, "td"), a(1609, "7394.06"), r(), i(1610, "td", 18), a(1611, "+5.53%"), r(), i(1612, "td"), a(1613, "7444.91"), r(), i(1614, "td"), a(1615, "7267.06"), r(), i(1616, "td"), a(1617, "431,687,258.22"), r(), r(), i(1618, "tr"), i(1619, "td"), h(1620, "i", 16), a(1621, " VSYS/ALTS"), r(), i(1622, "td"), h(1623, "img", 34), a(1624, " VSYS "), r(), i(1625, "td"), a(1626, "7394.06"), r(), i(1627, "td", 20), a(1628, "-3.52%"), r(), i(1629, "td"), a(1630, "7444.91"), r(), i(1631, "td"), a(1632, "7267.06"), r(), i(1633, "td"), a(1634, "431,687,258.35"), r(), r(), i(1635, "tr"), i(1636, "td"), h(1637, "i", 16), a(1638, " ATOM/ALTS"), r(), i(1639, "td"), h(1640, "img", 35), a(1641, " ATOM "), r(), i(1642, "td"), a(1643, "7394.06"), r(), i(1644, "td", 20), a(1645, "-2.78%"), r(), i(1646, "td"), a(1647, "7444.91"), r(), i(1648, "td"), a(1649, "7267.06"), r(), i(1650, "td"), a(1651, "431,687,258.21"), r(), r(), i(1652, "tr"), i(1653, "td"), h(1654, "i", 16), a(1655, " MTV/ALTS"), r(), i(1656, "td"), h(1657, "img", 36), a(1658, " MTV"), r(), i(1659, "td"), a(1660, "7394.06"), r(), i(1661, "td", 18), a(1662, "+1.78%"), r(), i(1663, "td"), a(1664, "7444.91"), r(), i(1665, "td"), a(1666, "7267.06"), r(), i(1667, "td"), a(1668, "431,687,258.32"), r(), r(), i(1669, "tr"), i(1670, "td"), h(1671, "i", 16), a(1672, " XTZ/ALTS"), r(), i(1673, "td"), h(1674, "img", 38), a(1675, " XTZ"), r(), i(1676, "td"), a(1677, "7394.06"), r(), i(1678, "td", 20), a(1679, "-3.78%"), r(), i(1680, "td"), a(1681, "7444.91"), r(), i(1682, "td"), a(1683, "7267.06"), r(), i(1684, "td"), a(1685, "431,687,258.25"), r(), r(), i(1686, "tr", 37), i(1687, "td"), h(1688, "i", 16), a(1689, " XTZ/ALTS"), r(), i(1690, "td"), h(1691, "img", 38), a(1692, " XTZ"), r(), i(1693, "td"), a(1694, "7394.06"), r(), i(1695, "td", 20), a(1696, "-3.78%"), r(), i(1697, "td"), a(1698, "7444.91"), r(), i(1699, "td"), a(1700, "7267.06"), r(), i(1701, "td"), a(1702, "431,687,258.25"), r(), r(), i(1703, "tr", 37), i(1704, "td"), h(1705, "i", 16), a(1706, " CEL/ALTS"), r(), i(1707, "td"), h(1708, "img", 39), a(1709, " CEL"), r(), i(1710, "td"), a(1711, "7394.06"), r(), i(1712, "td", 20), a(1713, "-3.78%"), r(), i(1714, "td"), a(1715, "7444.91"), r(), i(1716, "td"), a(1717, "7267.06"), r(), i(1718, "td"), a(1719, "431,687,258.25"), r(), r(), i(1720, "tr", 37), i(1721, "td"), h(1722, "i", 16), a(1723, " EGLD/ALTS"), r(), i(1724, "td"), h(1725, "img", 40), a(1726, " EGLD "), r(), i(1727, "td"), a(1728, "7394.06"), r(), i(1729, "td", 20), a(1730, "-3.78%"), r(), i(1731, "td"), a(1732, "7444.91"), r(), i(1733, "td"), a(1734, "7267.06"), r(), i(1735, "td"), a(1736, "431,687,258.25"), r(), r(), i(1737, "tr", 37), i(1738, "td"), h(1739, "i", 16), a(1740, " ZEC/ALTS"), r(), i(1741, "td"), h(1742, "img", 41), a(1743, " ZEC"), r(), i(1744, "td"), a(1745, "7394.06"), r(), i(1746, "td", 20), a(1747, "-3.78%"), r(), i(1748, "td"), a(1749, "7444.91"), r(), i(1750, "td"), a(1751, "7267.06"), r(), i(1752, "td"), a(1753, "431,687,258.25"), r(), r(), i(1754, "tr", 37), i(1755, "td"), h(1756, "i", 16), a(1757, " RUNE/ALTS"), r(), i(1758, "td"), h(1759, "img", 42), a(1760, " RUNE "), r(), i(1761, "td"), a(1762, "7394.06"), r(), i(1763, "td", 20), a(1764, "-3.78%"), r(), i(1765, "td"), a(1766, "7444.91"), r(), i(1767, "td"), a(1768, "7267.06"), r(), i(1769, "td"), a(1770, "431,687,258.25"), r(), r(), r(), r(), r(), r(), r(), i(1771, "div", 46), i(1772, "a", 47), a(1773, " Load More "), h(1774, "i", 48), r(), r(), r(), r(), r(), r(), r())
                        },
                        directives: [Ot],
                        styles: [""]
                    }), t
                })();
            const oF = [{
                path: "",
                component: tF
            }, {
                path: "lock",
                component: nF
            }, {
                path: "login",
                component: iF
            }, {
                path: "markets",
                component: (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-markets"]
                        ],
                        decls: 5,
                        vars: 0,
                        consts: [
                            [1, "container-fluid"],
                            [1, "row"],
                            [1, "col-md-12"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "div", 2), h(3, "app-market-carousel"), r(), r(), r(), h(4, "app-markets-list"))
                        },
                        directives: [rF, sF],
                        styles: [""]
                    }), t
                })()
            }, {
                path: "news-details",
                component: (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-news-details"]
                        ],
                        decls: 14,
                        vars: 0,
                        consts: [
                            [1, "news-details"],
                            [1, "container"],
                            [1, "row"],
                            [1, "col-md-12"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "div", 2), i(3, "div", 3), i(4, "h2"), a(5, "KCS Pay Fees Feature is Coming Soon"), r(), i(6, "p"), a(7, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo illo natus iure earum recusandae autem quibusdam iste excepturi aut, provident eum maiores ad assumenda doloremque sint explicabo itaque adipisci! "), r(), i(8, "p"), a(9, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet dicta perferendis corporis ullam autem cum unde iste. Minus corporis, eaque accusamus commodi et molestiae illo laudantium odit asperiores numquam eos harum, quia quibusdam obcaecati dolorem sapiente voluptates aut dolores cumque modi ullam at repellendus. At, pariatur provident voluptates labore quia nulla qui illo! Veritatis sapiente perferendis nemo deleniti numquam maxime suscipit quas iusto? Distinctio est obcaecati reiciendis consequuntur accusantium nostrum officiis eveniet perferendis quisquam ratione quis, repellat quia numquam. Dolor ea quam veniam facere. Unde explicabo libero, doloremque quisquam illo, iusto ut voluptate cupiditate ipsum dignissimos reiciendis eligendi magnam! "), r(), i(10, "p"), a(11, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reprehenderit dolorum inventore vero ratione eum, molestiae doloremque et magnam rem perferendis aperiam! Neque tempora ipsum culpa quidem aliquam pariatur incidunt illo rem eius inventore asperiores, reprehenderit libero possimus nihil laborum reiciendis adipisci hic perferendis officia? Adipisci molestiae accusantium est sequi fugit numquam! Modi ipsum sed laboriosam quo rem cupiditate soluta facere! Quod minus voluptatum sint? Eum temporibus asperiores vel perspiciatis deleniti perferendis possimus enim. Numquam eius alias voluptatum fugit nesciunt doloremque accusantium similique obcaecati, error explicabo accusamus ducimus nam nobis. Enim voluptate illum rem qui exercitationem quo veritatis! Veritatis tempora quaerat aperiam, provident temporibus sunt fugit! Officiis tenetur soluta ad totam, aspernatur nostrum et expedita rerum consequuntur. Doloremque accusamus ex, beatae, in totam cupiditate inventore dicta qui soluta consectetur, enim repellat velit. Distinctio modi totam repellat laudantium tenetur impedit, explicabo suscipit rerum eaque tempore nobis fuga numquam at exercitationem praesentium quasi aperiam pariatur, molestiae ipsa voluptatum? Esse veniam aliquam unde quibusdam nulla obcaecati eius eos, illum incidunt eligendi dolores pariatur odit, repudiandae et hic sint! Impedit ullam soluta nobis veritatis quibusdam, quisquam minima repellat suscipit. Beatae, dolores esse ducimus, id officia reprehenderit unde incidunt ex quaerat laudantium sint nam debitis? "), r(), i(12, "p"), a(13, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reprehenderit dolorum inventore vero ratione eum, molestiae doloremque et magnam rem perferendis aperiam! Neque tempora ipsum culpa quidem aliquam pariatur incidunt illo rem eius inventore asperiores, reprehenderit libero possimus nihil laborum reiciendis adipisci hic perferendis officia? Adipisci molestiae accusantium est sequi fugit numquam! Modi ipsum sed laboriosam quo rem cupiditate soluta facere! Quod minus voluptatum sint? Eum temporibus asperiores vel perspiciatis deleniti perferendis possimus enim. Numquam eius alias voluptatum fugit nesciunt doloremque accusantium similique obcaecati, error explicabo accusamus ducimus nam nobis. Enim voluptate illum rem qui exercitationem quo veritatis! Veritatis tempora quaerat aperiam, provident temporibus sunt fugit! Officiis tenetur soluta ad totam, aspernatur nostrum et expedita rerum consequuntur. Doloremque accusamus ex, beatae, in totam cupiditate inventore dicta qui soluta consectetur, enim repellat velit. Distinctio modi totam repellat laudantium tenetur impedit, explicabo suscipit rerum eaque tempore nobis fuga numquam at exercitationem praesentium quasi aperiam pariatur, molestiae ipsa voluptatum? Esse veniam aliquam unde quibusdam nulla obcaecati eius eos, illum incidunt eligendi dolores pariatur odit, repudiandae et hic sint! Impedit ullam soluta nobis veritatis quibusdam, quisquam minima repellat suscipit. Beatae, dolores esse ducimus, id officia reprehenderit unde incidunt ex quaerat laudantium sint nam debitis? "), r(), r(), r(), r(), r())
                        },
                        styles: [""]
                    }), t
                })()
            }, {
                path: "otp-number",
                component: (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-otp-number"]
                        ],
                        decls: 14,
                        vars: 0,
                        consts: [
                            [1, "vh-100", "d-flex", "justify-content-center"],
                            [1, "form-access", "my-auto"],
                            [1, "mb-0"],
                            [1, "text-center", "mb-4"],
                            ["type", "phone", "placeholder", "Enter your phone number", "required", "", 1, "form-control"],
                            ["type", "submit", 1, "btn", "btn-primary"],
                            ["routerLink", "otp-verify"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "form"), i(3, "span", 2), a(4, "OTP Verification"), r(), i(5, "p", 3), a(6, " We will send one time code on this number "), r(), h(7, "input", 4), i(8, "button", 5), a(9, "Send"), r(), i(10, "h2"), a(11, "Don't get code? "), i(12, "a", 6), a(13, "Resend"), r(), r(), r(), r(), r())
                        },
                        directives: [Ot],
                        styles: [""]
                    }), t
                })()
            }, {
                path: "otp-verify",
                component: (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-otp-verify"]
                        ],
                        decls: 10,
                        vars: 0,
                        consts: [
                            [1, "vh-100", "d-flex", "justify-content-center"],
                            [1, "form-access", "my-auto"],
                            [1, "mb-0"],
                            [1, "text-center", "mb-4"],
                            ["type", "text", "placeholder", "Enter code here", "required", "", 1, "form-control"],
                            ["type", "submit", 1, "btn", "btn-primary"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "form"), i(3, "span", 2), a(4, "OTP Verification"), r(), i(5, "p", 3), a(6, "One time code send on on your number"), r(), h(7, "input", 4), i(8, "button", 5), a(9, "Reset"), r(), r(), r(), r())
                        },
                        styles: [""]
                    }), t
                })()
            }, {
                path: "profile",
                component: (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-profile"]
                        ],
                        decls: 1122,
                        vars: 0,
                        consts: [
                            [1, "settings", "mtb15"],
                            [1, "container-fluid"],
                            [1, "row"],
                            [1, "col-lg-3"],
                            ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs", "nav-pills", "settings-nav"],
                            ["role", "presentation", 1, "nav-item"],
                            ["id", "Profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#Profile", "type", "button", "role", "tab", "aria-controls", "Profile", "aria-selected", "true", 1, "nav-link", "active"],
                            ["id", "Wallet-tab", "data-bs-toggle", "tab", "data-bs-target", "#Wallet", "type", "button", "role", "tab", "aria-controls", "Wallet", "aria-selected", "false", 1, "nav-link"],
                            ["id", "Settings-tab", "data-bs-toggle", "tab", "data-bs-target", "#Settings", "type", "button", "role", "tab", "aria-controls", "Settings", "aria-selected", "false", 1, "nav-link"],
                            [1, "col-lg-9"],
                            ["id", "myTabContent", 1, "tab-content"],
                            ["id", "Profile", "role", "tabpanel", "aria-labelledby", "Profile-tab", 1, "tab-pane", "fade", "show", "active"],
                            [1, "card"],
                            [1, "card-body"],
                            [1, "card-title"],
                            [1, "settings-profile"],
                            ["src", "../../../assets/img/avatar.svg", "alt", "avatar"],
                            [1, "custom-file"],
                            ["type", "file", 1, "form-control"],
                            [1, "row", "mt-4"],
                            [1, "col-md-6"],
                            ["for", "formFirst"],
                            ["id", "formFirst", "type", "text", "placeholder", "First name", 1, "form-control"],
                            ["for", "formLast"],
                            ["id", "formLast", "type", "text", "placeholder", "Last name", 1, "form-control"],
                            ["for", "emailAddress"],
                            ["id", "emailAddress", "type", "text", "placeholder", "Enter your email", 1, "form-control"],
                            ["for", "phoneNumber"],
                            ["id", "phoneNumber", "type", "text", "placeholder", "Enter phone number", 1, "form-control"],
                            ["for", "selectLanguage"],
                            ["id", "selectLanguage", 1, "form-select"],
                            ["defaultValue", ""],
                            ["for", "selectCurrency"],
                            ["id", "selectCurrency", 1, "form-select"],
                            [1, "col-md-12"],
                            ["type", "submit", "value", "Update"],
                            ["for", "currentPass"],
                            ["id", "currentPass", "type", "text", "placeholder", "Enter your password", 1, "form-control"],
                            ["for", "newPass"],
                            ["id", "newPass", "type", "text", "placeholder", "Enter new password", 1, "form-control"],
                            ["for", "securityOne"],
                            ["id", "securityOne", 1, "form-select"],
                            ["for", "securityAnsOne"],
                            ["id", "securityAnsOne", "type", "text", "placeholder", "Enter your answer", 1, "form-control"],
                            ["for", "securityTwo"],
                            ["id", "securityTwo", 1, "form-select"],
                            ["for", "securityAnsTwo"],
                            ["id", "securityAnsTwo", "type", "text", "placeholder", "Enter your answer", 1, "form-control"],
                            ["for", "securityThree"],
                            ["id", "securityThree", 1, "form-select"],
                            ["for", "securityFore"],
                            ["id", "securityFore", "type", "text", "placeholder", "Enter your answer", 1, "form-control"],
                            ["id", "Wallet", "role", "tabpanel", "aria-labelledby", "Wallet-tab", 1, "tab-pane", "fade"],
                            [1, "wallet"],
                            [1, "col-lg-4"],
                            [1, "settings-nav", "nav", "nav-pills", "nav-tabs"],
                            [1, "nav-item"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinBTC", "type", "button", "role", "tab", "aria-controls", "coinBTC", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center", "active"],
                            [1, "d-flex"],
                            ["src", "../../../assets/img/icon/18.png", "alt", "btc"],
                            [1, "text-end"],
                            [1, "icon", "ion-md-lock"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinETH", "type", "button", "role", "tab", "aria-controls", "coinETH", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/1.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinBNB", "type", "button", "role", "tab", "aria-controls", "coinBNB", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/9.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinTRX", "type", "button", "role", "tab", "aria-controls", "coinTRX", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/6.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinEOS", "type", "button", "role", "tab", "aria-controls", "coinEOS", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/2.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinXMR", "type", "button", "role", "tab", "aria-controls", "coinXMR", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/7.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinKCS", "type", "button", "role", "tab", "aria-controls", "coinKCS", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/4.png", "alt", "btc"],
                            [1, "col-lg-8"],
                            [1, "tab-content"],
                            ["id", "coinBTC", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"],
                            [1, "d-flex", "justify-content-between", "align-items-center"],
                            [1, "d-flex", "align-items-center"],
                            [1, "icon", "ion-md-cash"],
                            [1, "icon", "ion-md-checkmark"],
                            [1, "btn", "green"],
                            [1, "btn", "red"],
                            [1, "row", "wallet-address"],
                            [1, "col-md-8"],
                            [1, "input-group"],
                            ["type", "text", "value", "Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e", 1, "form-control"],
                            [1, "input-group-prepend"],
                            [1, "btn", "btn-primary"],
                            [1, "col-md-4"],
                            [1, "darkMode"],
                            ["src", "../../../assets/img/qr-code-dark.svg", "alt", "qr-code"],
                            [1, "lightMode"],
                            ["src", "../../../assets/img/qr-code-light.svg", "alt", "qr-code"],
                            [1, "wallet-history"],
                            [1, "table"],
                            [1, "icon", "ion-md-checkmark-circle-outline", "green"],
                            [1, "icon", "ion-md-close-circle-outline", "red"],
                            ["id", "coinETH", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinBNB", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinTRX", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinEOS", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinXMR", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinKCS", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "Settings", "role", "tabpanel", "aria-labelledby", "Settings-tab", 1, "tab-pane", "fade"],
                            [1, "settings-notification"],
                            [1, "notification-info"],
                            [1, "custom-control", "form-check"],
                            ["type", "checkbox", "id", "notification1", 1, "form-check-input"],
                            ["for", "notification1", 1, "form-check-label"],
                            ["type", "checkbox", "id", "notification2", "checked", "", 1, "form-check-input"],
                            ["for", "notification2", 1, "form-check-label"],
                            ["type", "checkbox", "id", "notification3", 1, "form-check-input"],
                            ["for", "notification3", 1, "form-check-label"],
                            ["type", "checkbox", "id", "notification4", "checked", "", 1, "form-check-input"],
                            ["for", "notification4", 1, "form-check-label"],
                            ["type", "checkbox", "id", "notification5", "checked", "", 1, "form-check-input"],
                            ["for", "notification5", 1, "form-check-label"],
                            [1, "card", "settings-profile"],
                            ["for", "generateKey"],
                            ["id", "generateKey", "type", "text", "placeholder", "Enter your key name", 1, "form-control"],
                            ["for", "rewritePassword"],
                            ["id", "rewritePassword", "type", "password", "placeholder", "Confirm your password", 1, "form-control"],
                            ["type", "submit", "value", "Create API key"],
                            ["type", "checkbox", "id", "apiStatus1", "checked", "", 1, "form-check-input"],
                            ["for", "apiStatus1", 1, "form-check-label"],
                            [1, "icon", "ion-md-trash"],
                            ["type", "checkbox", "id", "apiStatus2", 1, "form-check-input"],
                            ["for", "apiStatus2", 1, "form-check-label"],
                            ["type", "checkbox", "id", "apiStatus3", 1, "form-check-input"],
                            ["for", "apiStatus3", 1, "form-check-label"],
                            ["type", "checkbox", "id", "apiStatus4", 1, "form-check-input"],
                            ["for", "apiStatus4", 1, "form-check-label"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "div", 2), i(3, "div", 3), i(4, "ul", 4), i(5, "li", 5), i(6, "button", 6), a(7, " Profile "), r(), r(), i(8, "li", 5), i(9, "button", 7), a(10, " Wallet "), r(), r(), i(11, "li", 5), i(12, "button", 8), a(13, " Settings "), r(), r(), r(), r(), i(14, "div", 9), i(15, "div", 10), i(16, "div", 11), i(17, "div", 12), i(18, "div", 13), i(19, "h5", 14), a(20, "General Information"), r(), i(21, "div", 15), i(22, "form"), h(23, "img", 16), i(24, "div", 17), h(25, "input", 18), r(), i(26, "div", 19), i(27, "div", 20), i(28, "label", 21), a(29, "First name"), r(), h(30, "input", 22), r(), i(31, "div", 20), i(32, "label", 23), a(33, "Last name"), r(), h(34, "input", 24), r(), i(35, "div", 20), i(36, "label", 25), a(37, "Email"), r(), h(38, "input", 26), r(), i(39, "div", 20), i(40, "label", 27), a(41, "Phone"), r(), h(42, "input", 28), r(), i(43, "div", 20), i(44, "label", 29), a(45, "Language"), r(), i(46, "select", 30), i(47, "option", 31), a(48, "English"), r(), i(49, "option"), a(50, "Mandarin Chinese"), r(), i(51, "option"), a(52, "Spanish"), r(), i(53, "option"), a(54, "Arabic"), r(), i(55, "option"), a(56, "Russian"), r(), r(), r(), i(57, "div", 20), i(58, "label", 32), a(59, "Currency"), r(), i(60, "select", 33), i(61, "option", 31), a(62, "USD"), r(), i(63, "option"), a(64, "EUR"), r(), i(65, "option"), a(66, "GBP"), r(), i(67, "option"), a(68, "CHF"), r(), r(), r(), i(69, "div", 34), h(70, "input", 35), r(), r(), r(), r(), r(), r(), i(71, "div", 12), i(72, "div", 13), i(73, "h5", 14), a(74, "Security Information"), r(), i(75, "div", 15), i(76, "form"), i(77, "div", 2), i(78, "div", 20), i(79, "label", 36), a(80, " Current password "), r(), h(81, "input", 37), r(), i(82, "div", 20), i(83, "label", 38), a(84, "New password"), r(), h(85, "input", 39), r(), i(86, "div", 20), i(87, "label", 40), a(88, " Security questions #1 "), r(), i(89, "select", 41), i(90, "option", 31), a(91, " What was the name of your first pet? "), r(), i(92, "option"), a(93, "What's your Mother's middle name?"), r(), i(94, "option"), a(95, " What was the name of your first school? "), r(), i(96, "option"), a(97, " Where did you travel for the first time? "), r(), r(), r(), i(98, "div", 20), i(99, "label", 42), a(100, "Answer"), r(), h(101, "input", 43), r(), i(102, "div", 20), i(103, "label", 44), a(104, " Security questions #2 "), r(), i(105, "select", 45), i(106, "option", 31), a(107, "Choose..."), r(), i(108, "option"), a(109, " What was the name of your first pet? "), r(), i(110, "option"), a(111, "What's your Mother's middle name?"), r(), i(112, "option"), a(113, " What was the name of your first school? "), r(), i(114, "option"), a(115, " Where did you travel for the first time? "), r(), r(), r(), i(116, "div", 20), i(117, "label", 46), a(118, "Answer"), r(), h(119, "input", 47), r(), i(120, "div", 20), i(121, "label", 48), a(122, " Security questions #3 "), r(), i(123, "select", 49), i(124, "option", 31), a(125, "Choose..."), r(), i(126, "option"), a(127, " What was the name of your first pet? "), r(), i(128, "option"), a(129, "What's your Mother's middle name?"), r(), i(130, "option"), a(131, " What was the name of your first school? "), r(), i(132, "option"), a(133, " Where did you travel for the first time? "), r(), r(), r(), i(134, "div", 20), i(135, "label", 50), a(136, "Answer"), r(), h(137, "input", 51), r(), i(138, "div", 34), h(139, "input", 35), r(), r(), r(), r(), r(), r(), r(), i(140, "div", 52), i(141, "div", 53), i(142, "div", 2), i(143, "div", 54), i(144, "ul", 55), i(145, "li", 56), i(146, "a", 57), i(147, "div", 58), h(148, "img", 59), i(149, "div"), i(150, "h2"), a(151, "BTC"), r(), i(152, "p"), a(153, "Bitcoin"), r(), r(), r(), i(154, "div"), i(155, "h3"), a(156, "4.5484254"), r(), i(157, "p", 60), h(158, "i", 61), a(159, " 0.0000000 "), r(), r(), r(), r(), i(160, "li", 56), i(161, "a", 62), i(162, "div", 58), h(163, "img", 63), i(164, "div"), i(165, "h2"), a(166, "ETH"), r(), i(167, "p"), a(168, "Ethereum"), r(), r(), r(), i(169, "div"), i(170, "h3"), a(171, "13.454845"), r(), i(172, "p", 60), h(173, "i", 61), a(174, " 0.0000000 "), r(), r(), r(), r(), i(175, "li", 56), i(176, "a", 64), i(177, "div", 58), h(178, "img", 65), i(179, "div"), i(180, "h2"), a(181, "BNB"), r(), i(182, "p"), a(183, "Binance"), r(), r(), r(), i(184, "div"), i(185, "h3"), a(186, "35.48428"), r(), i(187, "p", 60), h(188, "i", 61), a(189, " 0.0000000 "), r(), r(), r(), r(), i(190, "li", 56), i(191, "a", 66), i(192, "div", 58), h(193, "img", 67), i(194, "div"), i(195, "h2"), a(196, "TRX"), r(), i(197, "p"), a(198, "Tron"), r(), r(), r(), i(199, "div"), i(200, "h3"), a(201, "4.458941"), r(), i(202, "p", 60), h(203, "i", 61), a(204, " 0.0000000 "), r(), r(), r(), r(), i(205, "li", 56), i(206, "a", 68), i(207, "div", 58), h(208, "img", 69), i(209, "div"), i(210, "h2"), a(211, "EOS"), r(), i(212, "p"), a(213, "Eosio"), r(), r(), r(), i(214, "div"), i(215, "h3"), a(216, "33.478951"), r(), i(217, "p", 60), h(218, "i", 61), a(219, " 0.0000000 "), r(), r(), r(), r(), i(220, "li", 56), i(221, "a", 70), i(222, "div", 58), h(223, "img", 71), i(224, "div"), i(225, "h2"), a(226, "XMR"), r(), i(227, "p"), a(228, "Monero"), r(), r(), r(), i(229, "div"), i(230, "h3"), a(231, "99.465975"), r(), i(232, "p", 60), h(233, "i", 61), a(234, " 0.0000000 "), r(), r(), r(), r(), i(235, "li", 56), i(236, "a", 72), i(237, "div", 58), h(238, "img", 73), i(239, "div"), i(240, "h2"), a(241, "KCS"), r(), i(242, "p"), a(243, "Kstarcoin"), r(), r(), r(), i(244, "div"), i(245, "h3"), a(246, "114.57564"), r(), i(247, "p", 60), h(248, "i", 61), a(249, " 0.0000000 "), r(), r(), r(), r(), r(), r(), i(250, "div", 74), i(251, "div", 75), i(252, "div", 76), i(253, "div", 12), i(254, "div", 13), i(255, "h5", 14), a(256, "Balances"), r(), i(257, "ul"), i(258, "li", 77), i(259, "div", 78), h(260, "i", 79), i(261, "h2"), a(262, "Total Equity"), r(), r(), i(263, "div"), i(264, "h3"), a(265, "5.5894 BTC"), r(), r(), r(), i(266, "li", 77), i(267, "div", 78), h(268, "i", 80), i(269, "h2"), a(270, "Available Margin"), r(), r(), i(271, "div"), i(272, "h3"), a(273, "2.480 BTC"), r(), r(), r(), r(), i(274, "button", 81), a(275, "Deposit"), r(), i(276, "button", 82), a(277, "Withdraw"), r(), r(), r(), i(278, "div", 12), i(279, "div", 13), i(280, "h5", 14), a(281, "Wallet Deposit Address"), r(), i(282, "div", 83), i(283, "div", 84), i(284, "p"), a(285, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(286, "div", 85), h(287, "input", 86), i(288, "div", 87), i(289, "button", 88), a(290, " COPY "), r(), r(), r(), r(), i(291, "div", 89), i(292, "div", 90), h(293, "img", 91), r(), i(294, "div", 92), h(295, "img", 93), r(), r(), r(), r(), r(), i(296, "div", 12), i(297, "div", 13), i(298, "h5", 14), a(299, "Latest Transactions"), r(), i(300, "div", 94), i(301, "table", 95), i(302, "thead"), i(303, "tr"), i(304, "th"), a(305, "No."), r(), i(306, "th"), a(307, "Date"), r(), i(308, "th"), a(309, "Status"), r(), i(310, "th"), a(311, "Amount"), r(), r(), r(), i(312, "tbody"), i(313, "tr"), i(314, "td"), a(315, "1"), r(), i(316, "td"), a(317, "25-04-2019"), r(), i(318, "td"), h(319, "i", 96), r(), i(320, "td"), a(321, "4.5454334"), r(), r(), i(322, "tr"), i(323, "td"), a(324, "2"), r(), i(325, "td"), a(326, "25-05-2019"), r(), i(327, "td"), h(328, "i", 96), r(), i(329, "td"), a(330, "0.5484468"), r(), r(), i(331, "tr"), i(332, "td"), a(333, "3"), r(), i(334, "td"), a(335, "25-06-2019"), r(), i(336, "td"), h(337, "i", 97), r(), i(338, "td"), a(339, "2.5454545"), r(), r(), i(340, "tr"), i(341, "td"), a(342, "4"), r(), i(343, "td"), a(344, "25-07-2019"), r(), i(345, "td"), h(346, "i", 96), r(), i(347, "td"), a(348, "1.45894147"), r(), r(), i(349, "tr"), i(350, "td"), a(351, "3"), r(), i(352, "td"), a(353, "25-08-2019"), r(), i(354, "td"), h(355, "i", 97), r(), i(356, "td"), a(357, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(358, "div", 98), i(359, "div", 12), i(360, "div", 13), i(361, "h5", 14), a(362, "Balances"), r(), i(363, "ul"), i(364, "li", 77), i(365, "div", 78), h(366, "i", 79), i(367, "h2"), a(368, "Total Equity"), r(), r(), i(369, "div"), i(370, "h3"), a(371, "4.1542 ETH"), r(), r(), r(), i(372, "li", 77), i(373, "div", 78), h(374, "i", 80), i(375, "h2"), a(376, "Available Margin"), r(), r(), i(377, "div"), i(378, "h3"), a(379, "1.334 ETH"), r(), r(), r(), r(), i(380, "button", 81), a(381, "Deposit"), r(), i(382, "button", 82), a(383, "Withdraw"), r(), r(), r(), i(384, "div", 12), i(385, "div", 13), i(386, "h5", 14), a(387, "Wallet Deposit Address"), r(), i(388, "div", 83), i(389, "div", 84), i(390, "p"), a(391, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(392, "div", 85), h(393, "input", 86), i(394, "div", 87), i(395, "button", 88), a(396, " COPY "), r(), r(), r(), r(), i(397, "div", 89), i(398, "div", 90), h(399, "img", 91), r(), i(400, "div", 92), h(401, "img", 93), r(), r(), r(), r(), r(), i(402, "div", 12), i(403, "div", 13), i(404, "h5", 14), a(405, "Latest Transactions"), r(), i(406, "div", 94), i(407, "table", 95), i(408, "thead"), i(409, "tr"), i(410, "th"), a(411, "No."), r(), i(412, "th"), a(413, "Date"), r(), i(414, "th"), a(415, "Status"), r(), i(416, "th"), a(417, "Amount"), r(), r(), r(), i(418, "tbody"), i(419, "tr"), i(420, "td"), a(421, "1"), r(), i(422, "td"), a(423, "25-04-2019"), r(), i(424, "td"), h(425, "i", 96), r(), i(426, "td"), a(427, "4.5454334"), r(), r(), i(428, "tr"), i(429, "td"), a(430, "2"), r(), i(431, "td"), a(432, "25-05-2019"), r(), i(433, "td"), h(434, "i", 96), r(), i(435, "td"), a(436, "0.5484468"), r(), r(), i(437, "tr"), i(438, "td"), a(439, "3"), r(), i(440, "td"), a(441, "25-06-2019"), r(), i(442, "td"), h(443, "i", 97), r(), i(444, "td"), a(445, "2.5454545"), r(), r(), i(446, "tr"), i(447, "td"), a(448, "4"), r(), i(449, "td"), a(450, "25-07-2019"), r(), i(451, "td"), h(452, "i", 96), r(), i(453, "td"), a(454, "1.45894147"), r(), r(), i(455, "tr"), i(456, "td"), a(457, "3"), r(), i(458, "td"), a(459, "25-08-2019"), r(), i(460, "td"), h(461, "i", 97), r(), i(462, "td"), a(463, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(464, "div", 99), i(465, "div", 12), i(466, "div", 13), i(467, "h5", 14), a(468, "Balances"), r(), i(469, "ul"), i(470, "li", 77), i(471, "div", 78), h(472, "i", 79), i(473, "h2"), a(474, "Total Equity"), r(), r(), i(475, "div"), i(476, "h3"), a(477, "7.342 BNB"), r(), r(), r(), i(478, "li", 77), i(479, "div", 78), h(480, "i", 80), i(481, "h2"), a(482, "Available Margin"), r(), r(), i(483, "div"), i(484, "h3"), a(485, "0.332 BNB"), r(), r(), r(), r(), i(486, "button", 81), a(487, "Deposit"), r(), i(488, "button", 82), a(489, "Withdraw"), r(), r(), r(), i(490, "div", 12), i(491, "div", 13), i(492, "h5", 14), a(493, "Wallet Deposit Address"), r(), i(494, "div", 83), i(495, "div", 84), i(496, "p"), a(497, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(498, "div", 85), h(499, "input", 86), i(500, "div", 87), i(501, "button", 88), a(502, " COPY "), r(), r(), r(), r(), i(503, "div", 89), i(504, "div", 90), h(505, "img", 91), r(), i(506, "div", 92), h(507, "img", 93), r(), r(), r(), r(), r(), i(508, "div", 12), i(509, "div", 13), i(510, "h5", 14), a(511, "Latest Transactions"), r(), i(512, "div", 94), i(513, "table", 95), i(514, "thead"), i(515, "tr"), i(516, "th"), a(517, "No."), r(), i(518, "th"), a(519, "Date"), r(), i(520, "th"), a(521, "Status"), r(), i(522, "th"), a(523, "Amount"), r(), r(), r(), i(524, "tbody"), i(525, "tr"), i(526, "td"), a(527, "1"), r(), i(528, "td"), a(529, "25-04-2019"), r(), i(530, "td"), h(531, "i", 96), r(), i(532, "td"), a(533, "4.5454334"), r(), r(), i(534, "tr"), i(535, "td"), a(536, "2"), r(), i(537, "td"), a(538, "25-05-2019"), r(), i(539, "td"), h(540, "i", 96), r(), i(541, "td"), a(542, "0.5484468"), r(), r(), i(543, "tr"), i(544, "td"), a(545, "3"), r(), i(546, "td"), a(547, "25-06-2019"), r(), i(548, "td"), h(549, "i", 97), r(), i(550, "td"), a(551, "2.5454545"), r(), r(), i(552, "tr"), i(553, "td"), a(554, "4"), r(), i(555, "td"), a(556, "25-07-2019"), r(), i(557, "td"), h(558, "i", 96), r(), i(559, "td"), a(560, "1.45894147"), r(), r(), i(561, "tr"), i(562, "td"), a(563, "3"), r(), i(564, "td"), a(565, "25-08-2019"), r(), i(566, "td"), h(567, "i", 97), r(), i(568, "td"), a(569, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(570, "div", 100), i(571, "div", 12), i(572, "div", 13), i(573, "h5", 14), a(574, "Balances"), r(), i(575, "ul"), i(576, "li", 77), i(577, "div", 78), h(578, "i", 79), i(579, "h2"), a(580, "Total Equity"), r(), r(), i(581, "div"), i(582, "h3"), a(583, "4.3344 TRX"), r(), r(), r(), i(584, "li", 77), i(585, "div", 78), h(586, "i", 80), i(587, "h2"), a(588, "Available Margin"), r(), r(), i(589, "div"), i(590, "h3"), a(591, "1.453 TRX"), r(), r(), r(), r(), i(592, "button", 81), a(593, "Deposit"), r(), i(594, "button", 82), a(595, "Withdraw"), r(), r(), r(), i(596, "div", 12), i(597, "div", 13), i(598, "h5", 14), a(599, "Wallet Deposit Address"), r(), i(600, "div", 83), i(601, "div", 84), i(602, "p"), a(603, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(604, "div", 85), h(605, "input", 86), i(606, "div", 87), i(607, "button", 88), a(608, " COPY "), r(), r(), r(), r(), i(609, "div", 89), i(610, "div", 90), h(611, "img", 91), r(), i(612, "div", 92), h(613, "img", 93), r(), r(), r(), r(), r(), i(614, "div", 12), i(615, "div", 13), i(616, "h5", 14), a(617, "Latest Transactions"), r(), i(618, "div", 94), i(619, "table", 95), i(620, "thead"), i(621, "tr"), i(622, "th"), a(623, "No."), r(), i(624, "th"), a(625, "Date"), r(), i(626, "th"), a(627, "Status"), r(), i(628, "th"), a(629, "Amount"), r(), r(), r(), i(630, "tbody"), i(631, "tr"), i(632, "td"), a(633, "1"), r(), i(634, "td"), a(635, "25-04-2019"), r(), i(636, "td"), h(637, "i", 96), r(), i(638, "td"), a(639, "4.5454334"), r(), r(), i(640, "tr"), i(641, "td"), a(642, "2"), r(), i(643, "td"), a(644, "25-05-2019"), r(), i(645, "td"), h(646, "i", 96), r(), i(647, "td"), a(648, "0.5484468"), r(), r(), i(649, "tr"), i(650, "td"), a(651, "3"), r(), i(652, "td"), a(653, "25-06-2019"), r(), i(654, "td"), h(655, "i", 97), r(), i(656, "td"), a(657, "2.5454545"), r(), r(), i(658, "tr"), i(659, "td"), a(660, "4"), r(), i(661, "td"), a(662, "25-07-2019"), r(), i(663, "td"), h(664, "i", 96), r(), i(665, "td"), a(666, "1.45894147"), r(), r(), i(667, "tr"), i(668, "td"), a(669, "3"), r(), i(670, "td"), a(671, "25-08-2019"), r(), i(672, "td"), h(673, "i", 97), r(), i(674, "td"), a(675, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(676, "div", 101), i(677, "div", 12), i(678, "div", 13), i(679, "h5", 14), a(680, "Balances"), r(), i(681, "ul"), i(682, "li", 77), i(683, "div", 78), h(684, "i", 79), i(685, "h2"), a(686, "Total Equity"), r(), r(), i(687, "div"), i(688, "h3"), a(689, "33.35 EOS"), r(), r(), r(), i(690, "li", 77), i(691, "div", 78), h(692, "i", 80), i(693, "h2"), a(694, "Available Margin"), r(), r(), i(695, "div"), i(696, "h3"), a(697, "4.445 EOS"), r(), r(), r(), r(), i(698, "button", 81), a(699, "Deposit"), r(), i(700, "button", 82), a(701, "Withdraw"), r(), r(), r(), i(702, "div", 12), i(703, "div", 13), i(704, "h5", 14), a(705, "Wallet Deposit Address"), r(), i(706, "div", 83), i(707, "div", 84), i(708, "p"), a(709, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(710, "div", 85), h(711, "input", 86), i(712, "div", 87), i(713, "button", 88), a(714, " COPY "), r(), r(), r(), r(), i(715, "div", 89), i(716, "div", 90), h(717, "img", 91), r(), i(718, "div", 92), h(719, "img", 93), r(), r(), r(), r(), r(), i(720, "div", 12), i(721, "div", 13), i(722, "h5", 14), a(723, "Latest Transactions"), r(), i(724, "div", 94), i(725, "table", 95), i(726, "thead"), i(727, "tr"), i(728, "th"), a(729, "No."), r(), i(730, "th"), a(731, "Date"), r(), i(732, "th"), a(733, "Status"), r(), i(734, "th"), a(735, "Amount"), r(), r(), r(), i(736, "tbody"), i(737, "tr"), i(738, "td"), a(739, "1"), r(), i(740, "td"), a(741, "25-04-2019"), r(), i(742, "td"), h(743, "i", 96), r(), i(744, "td"), a(745, "4.5454334"), r(), r(), i(746, "tr"), i(747, "td"), a(748, "2"), r(), i(749, "td"), a(750, "25-05-2019"), r(), i(751, "td"), h(752, "i", 96), r(), i(753, "td"), a(754, "0.5484468"), r(), r(), i(755, "tr"), i(756, "td"), a(757, "3"), r(), i(758, "td"), a(759, "25-06-2019"), r(), i(760, "td"), h(761, "i", 97), r(), i(762, "td"), a(763, "2.5454545"), r(), r(), i(764, "tr"), i(765, "td"), a(766, "4"), r(), i(767, "td"), a(768, "25-07-2019"), r(), i(769, "td"), h(770, "i", 96), r(), i(771, "td"), a(772, "1.45894147"), r(), r(), i(773, "tr"), i(774, "td"), a(775, "3"), r(), i(776, "td"), a(777, "25-08-2019"), r(), i(778, "td"), h(779, "i", 97), r(), i(780, "td"), a(781, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(782, "div", 102), i(783, "div", 12), i(784, "div", 13), i(785, "h5", 14), a(786, "Balances"), r(), i(787, "ul"), i(788, "li", 77), i(789, "div", 78), h(790, "i", 79), i(791, "h2"), a(792, "Total Equity"), r(), r(), i(793, "div"), i(794, "h3"), a(795, "34.333 XMR"), r(), r(), r(), i(796, "li", 77), i(797, "div", 78), h(798, "i", 80), i(799, "h2"), a(800, "Available Margin"), r(), r(), i(801, "div"), i(802, "h3"), a(803, "2.354 XMR"), r(), r(), r(), r(), i(804, "button", 81), a(805, "Deposit"), r(), i(806, "button", 82), a(807, "Withdraw"), r(), r(), r(), i(808, "div", 12), i(809, "div", 13), i(810, "h5", 14), a(811, "Wallet Deposit Address"), r(), i(812, "div", 83), i(813, "div", 84), i(814, "p"), a(815, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(816, "div", 85), h(817, "input", 86), i(818, "div", 87), i(819, "button", 88), a(820, " COPY "), r(), r(), r(), r(), i(821, "div", 89), i(822, "div", 90), h(823, "img", 91), r(), i(824, "div", 92), h(825, "img", 93), r(), r(), r(), r(), r(), i(826, "div", 12), i(827, "div", 13), i(828, "h5", 14), a(829, "Latest Transactions"), r(), i(830, "div", 94), i(831, "table", 95), i(832, "thead"), i(833, "tr"), i(834, "th"), a(835, "No."), r(), i(836, "th"), a(837, "Date"), r(), i(838, "th"), a(839, "Status"), r(), i(840, "th"), a(841, "Amount"), r(), r(), r(), i(842, "tbody"), i(843, "tr"), i(844, "td"), a(845, "1"), r(), i(846, "td"), a(847, "25-04-2019"), r(), i(848, "td"), h(849, "i", 96), r(), i(850, "td"), a(851, "4.5454334"), r(), r(), i(852, "tr"), i(853, "td"), a(854, "2"), r(), i(855, "td"), a(856, "25-05-2019"), r(), i(857, "td"), h(858, "i", 96), r(), i(859, "td"), a(860, "0.5484468"), r(), r(), i(861, "tr"), i(862, "td"), a(863, "3"), r(), i(864, "td"), a(865, "25-06-2019"), r(), i(866, "td"), h(867, "i", 97), r(), i(868, "td"), a(869, "2.5454545"), r(), r(), i(870, "tr"), i(871, "td"), a(872, "4"), r(), i(873, "td"), a(874, "25-07-2019"), r(), i(875, "td"), h(876, "i", 96), r(), i(877, "td"), a(878, "1.45894147"), r(), r(), i(879, "tr"), i(880, "td"), a(881, "3"), r(), i(882, "td"), a(883, "25-08-2019"), r(), i(884, "td"), h(885, "i", 97), r(), i(886, "td"), a(887, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(888, "div", 103), i(889, "div", 12), i(890, "div", 13), i(891, "h5", 14), a(892, "Balances"), r(), i(893, "ul"), i(894, "li", 77), i(895, "div", 78), h(896, "i", 79), i(897, "h2"), a(898, "Total Equity"), r(), r(), i(899, "div"), i(900, "h3"), a(901, "86.577 KCS"), r(), r(), r(), i(902, "li", 77), i(903, "div", 78), h(904, "i", 80), i(905, "h2"), a(906, "Available Margin"), r(), r(), i(907, "div"), i(908, "h3"), a(909, "5.78 KCS"), r(), r(), r(), r(), i(910, "button", 81), a(911, "Deposit"), r(), i(912, "button", 82), a(913, "Withdraw"), r(), r(), r(), i(914, "div", 12), i(915, "div", 13), i(916, "h5", 14), a(917, "Wallet Deposit Address"), r(), i(918, "div", 83), i(919, "div", 84), i(920, "p"), a(921, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(922, "div", 85), h(923, "input", 86), i(924, "div", 87), i(925, "button", 88), a(926, " COPY "), r(), r(), r(), r(), i(927, "div", 89), i(928, "div", 90), h(929, "img", 91), r(), i(930, "div", 92), h(931, "img", 93), r(), r(), r(), r(), r(), i(932, "div", 12), i(933, "div", 13), i(934, "h5", 14), a(935, "Latest Transactions"), r(), i(936, "div", 94), i(937, "table", 95), i(938, "thead"), i(939, "tr"), i(940, "th"), a(941, "No."), r(), i(942, "th"), a(943, "Date"), r(), i(944, "th"), a(945, "Status"), r(), i(946, "th"), a(947, "Amount"), r(), r(), r(), i(948, "tbody"), i(949, "tr"), i(950, "td"), a(951, "1"), r(), i(952, "td"), a(953, "25-04-2019"), r(), i(954, "td"), h(955, "i", 96), r(), i(956, "td"), a(957, "4.5454334"), r(), r(), i(958, "tr"), i(959, "td"), a(960, "2"), r(), i(961, "td"), a(962, "25-05-2019"), r(), i(963, "td"), h(964, "i", 96), r(), i(965, "td"), a(966, "0.5484468"), r(), r(), i(967, "tr"), i(968, "td"), a(969, "3"), r(), i(970, "td"), a(971, "25-06-2019"), r(), i(972, "td"), h(973, "i", 97), r(), i(974, "td"), a(975, "2.5454545"), r(), r(), i(976, "tr"), i(977, "td"), a(978, "4"), r(), i(979, "td"), a(980, "25-07-2019"), r(), i(981, "td"), h(982, "i", 96), r(), i(983, "td"), a(984, "1.45894147"), r(), r(), i(985, "tr"), i(986, "td"), a(987, "3"), r(), i(988, "td"), a(989, "25-08-2019"), r(), i(990, "td"), h(991, "i", 97), r(), i(992, "td"), a(993, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), i(994, "div", 104), i(995, "div", 12), i(996, "div", 13), i(997, "h5", 14), a(998, "Notifications"), r(), i(999, "div", 105), i(1e3, "ul"), i(1001, "li"), i(1002, "div", 106), i(1003, "p"), a(1004, "Update price"), r(), i(1005, "span"), a(1006, " Get the update price in your dashboard "), r(), r(), i(1007, "div", 107), h(1008, "input", 108), h(1009, "label", 109), r(), r(), i(1010, "li"), i(1011, "div", 106), i(1012, "p"), a(1013, "2FA"), r(), i(1014, "span"), a(1015, " Unable two factor authentication service "), r(), r(), i(1016, "div", 107), h(1017, "input", 110), h(1018, "label", 111), r(), r(), i(1019, "li"), i(1020, "div", 106), i(1021, "p"), a(1022, "Latest news"), r(), i(1023, "span"), a(1024, "Get the latest news in your mail"), r(), r(), i(1025, "div", 107), h(1026, "input", 112), h(1027, "label", 113), r(), r(), i(1028, "li"), i(1029, "div", 106), i(1030, "p"), a(1031, "Email Service"), r(), i(1032, "span"), a(1033, "Get security code in your mail"), r(), r(), i(1034, "div", 107), h(1035, "input", 114), h(1036, "label", 115), r(), r(), i(1037, "li"), i(1038, "div", 106), i(1039, "p"), a(1040, "Phone Notify"), r(), i(1041, "span"), a(1042, " Get transition notification in your phone "), r(), r(), i(1043, "div", 107), h(1044, "input", 116), h(1045, "label", 117), r(), r(), r(), r(), r(), r(), i(1046, "div", 118), i(1047, "div", 13), i(1048, "h5", 14), a(1049, "Create API Key"), r(), i(1050, "div", 2), i(1051, "div", 20), i(1052, "label", 119), a(1053, " Generate key name "), r(), h(1054, "input", 120), r(), i(1055, "div", 20), i(1056, "label", 121), a(1057, " Confirm password "), r(), h(1058, "input", 122), r(), i(1059, "div", 34), h(1060, "input", 123), r(), r(), r(), r(), i(1061, "div", 12), i(1062, "div", 13), i(1063, "h5", 14), a(1064, "Your API Keys"), r(), i(1065, "div", 94), i(1066, "table", 95), i(1067, "thead"), i(1068, "tr"), i(1069, "th"), a(1070, "No."), r(), i(1071, "th"), a(1072, "Key"), r(), i(1073, "th"), a(1074, "Status"), r(), i(1075, "th"), a(1076, "Action"), r(), r(), r(), i(1077, "tbody"), i(1078, "tr"), i(1079, "td"), a(1080, "1"), r(), i(1081, "td"), a(1082, "zRmWVcrAZ1C0RZkFMu7K5v0KWC9jUJLt"), r(), i(1083, "td"), i(1084, "div", 107), h(1085, "input", 124), h(1086, "label", 125), r(), r(), i(1087, "td"), h(1088, "i", 126), r(), r(), i(1089, "tr"), i(1090, "td"), a(1091, "2"), r(), i(1092, "td"), a(1093, "Rv5dgnKdmVPyHwxeExBYz8uFwYQz3Jvg"), r(), i(1094, "td"), i(1095, "div", 107), h(1096, "input", 127), h(1097, "label", 128), r(), r(), i(1098, "td"), h(1099, "i", 126), r(), r(), i(1100, "tr"), i(1101, "td"), a(1102, "3"), r(), i(1103, "td"), a(1104, "VxEYIs1HwgmtKTUMA4aknjSEjjePZIWu"), r(), i(1105, "td"), i(1106, "div", 107), h(1107, "input", 129), h(1108, "label", 130), r(), r(), i(1109, "td"), h(1110, "i", 126), r(), r(), i(1111, "tr"), i(1112, "td"), a(1113, "4"), r(), i(1114, "td"), a(1115, "M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o"), r(), i(1116, "td"), i(1117, "div", 107), h(1118, "input", 131), h(1119, "label", 132), r(), r(), i(1120, "td"), h(1121, "i", 126), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r())
                        },
                        styles: [""]
                    }), t
                })()
            }, {
                path: "reset",
                component: (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-reset"]
                        ],
                        decls: 12,
                        vars: 0,
                        consts: [
                            [1, "vh-100", "d-flex", "justify-content-center"],
                            [1, "form-access", "my-auto"],
                            ["type", "email", "placeholder", "Enter Your Email Address", "required", "", 1, "form-control"],
                            ["type", "submit", 1, "btn", "btn-primary"],
                            ["routerLink", "/login"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "form"), i(3, "span"), a(4, "Reset password"), r(), h(5, "input", 2), i(6, "button", 3), a(7, "Reset"), r(), i(8, "h2"), a(9, " Remember Password? "), i(10, "a", 4), a(11, " Sign in here"), r(), r(), r(), r(), r())
                        },
                        directives: [Ot],
                        styles: [""]
                    }), t
                })()
            }, {
                path: "settings",
                component: (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-settings"]
                        ],
                        decls: 1122,
                        vars: 0,
                        consts: [
                            [1, "settings", "mtb15"],
                            [1, "container-fluid"],
                            [1, "row"],
                            [1, "col-lg-3"],
                            ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs", "nav-pills", "settings-nav"],
                            ["role", "presentation", 1, "nav-item"],
                            ["id", "Profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#Profile", "type", "button", "role", "tab", "aria-controls", "Profile", "aria-selected", "true", 1, "nav-link"],
                            ["id", "Wallet-tab", "data-bs-toggle", "tab", "data-bs-target", "#Wallet", "type", "button", "role", "tab", "aria-controls", "Wallet", "aria-selected", "false", 1, "nav-link"],
                            ["id", "Settings-tab", "data-bs-toggle", "tab", "data-bs-target", "#Settings", "type", "button", "role", "tab", "aria-controls", "Settings", "aria-selected", "false", 1, "nav-link", "active"],
                            [1, "col-lg-9"],
                            ["id", "myTabContent", 1, "tab-content"],
                            ["id", "Profile", "role", "tabpanel", "aria-labelledby", "Profile-tab", 1, "tab-pane", "fade"],
                            [1, "card"],
                            [1, "card-body"],
                            [1, "card-title"],
                            [1, "settings-profile"],
                            ["src", "../../../assets/img/avatar.svg", "alt", "avatar"],
                            [1, "custom-file"],
                            ["type", "file", 1, "form-control"],
                            [1, "row", "mt-4"],
                            [1, "col-md-6"],
                            ["for", "formFirst"],
                            ["id", "formFirst", "type", "text", "placeholder", "First name", 1, "form-control"],
                            ["for", "formLast"],
                            ["id", "formLast", "type", "text", "placeholder", "Last name", 1, "form-control"],
                            ["for", "emailAddress"],
                            ["id", "emailAddress", "type", "text", "placeholder", "Enter your email", 1, "form-control"],
                            ["for", "phoneNumber"],
                            ["id", "phoneNumber", "type", "text", "placeholder", "Enter phone number", 1, "form-control"],
                            ["for", "selectLanguage"],
                            ["id", "selectLanguage", 1, "form-select"],
                            ["defaultValue", ""],
                            ["for", "selectCurrency"],
                            ["id", "selectCurrency", 1, "form-select"],
                            [1, "col-md-12"],
                            ["type", "submit", "value", "Update"],
                            ["for", "currentPass"],
                            ["id", "currentPass", "type", "text", "placeholder", "Enter your password", 1, "form-control"],
                            ["for", "newPass"],
                            ["id", "newPass", "type", "text", "placeholder", "Enter new password", 1, "form-control"],
                            ["for", "securityOne"],
                            ["id", "securityOne", 1, "form-select"],
                            ["for", "securityAnsOne"],
                            ["id", "securityAnsOne", "type", "text", "placeholder", "Enter your answer", 1, "form-control"],
                            ["for", "securityTwo"],
                            ["id", "securityTwo", 1, "form-select"],
                            ["for", "securityAnsTwo"],
                            ["id", "securityAnsTwo", "type", "text", "placeholder", "Enter your answer", 1, "form-control"],
                            ["for", "securityThree"],
                            ["id", "securityThree", 1, "form-select"],
                            ["for", "securityFore"],
                            ["id", "securityFore", "type", "text", "placeholder", "Enter your answer", 1, "form-control"],
                            ["id", "Wallet", "role", "tabpanel", "aria-labelledby", "Wallet-tab", 1, "tab-pane", "fade"],
                            [1, "wallet"],
                            [1, "col-lg-4"],
                            [1, "settings-nav", "nav", "nav-pills", "nav-tabs"],
                            [1, "nav-item"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinBTC", "type", "button", "role", "tab", "aria-controls", "coinBTC", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center", "active"],
                            [1, "d-flex"],
                            ["src", "../../../assets/img/icon/18.png", "alt", "btc"],
                            [1, "text-end"],
                            [1, "icon", "ion-md-lock"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinETH", "type", "button", "role", "tab", "aria-controls", "coinETH", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/1.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinBNB", "type", "button", "role", "tab", "aria-controls", "coinBNB", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/9.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinTRX", "type", "button", "role", "tab", "aria-controls", "coinTRX", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/6.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinEOS", "type", "button", "role", "tab", "aria-controls", "coinEOS", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/2.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinXMR", "type", "button", "role", "tab", "aria-controls", "coinXMR", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/7.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinKCS", "type", "button", "role", "tab", "aria-controls", "coinKCS", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/4.png", "alt", "btc"],
                            [1, "col-lg-8"],
                            [1, "tab-content"],
                            ["id", "coinBTC", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"],
                            [1, "d-flex", "justify-content-between", "align-items-center"],
                            [1, "d-flex", "align-items-center"],
                            [1, "icon", "ion-md-cash"],
                            [1, "icon", "ion-md-checkmark"],
                            [1, "btn", "green"],
                            [1, "btn", "red"],
                            [1, "row", "wallet-address"],
                            [1, "col-md-8"],
                            [1, "input-group"],
                            ["type", "text", "value", "Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e", 1, "form-control"],
                            [1, "input-group-prepend"],
                            [1, "btn", "btn-primary"],
                            [1, "col-md-4"],
                            [1, "darkMode"],
                            ["src", "../../../assets/img/qr-code-dark.svg", "alt", "qr-code"],
                            [1, "lightMode"],
                            ["src", "../../../assets/img/qr-code-light.svg", "alt", "qr-code"],
                            [1, "wallet-history"],
                            [1, "table"],
                            [1, "icon", "ion-md-checkmark-circle-outline", "green"],
                            [1, "icon", "ion-md-close-circle-outline", "red"],
                            ["id", "coinETH", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinBNB", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinTRX", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinEOS", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinXMR", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinKCS", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "Settings", "role", "tabpanel", "aria-labelledby", "Settings-tab", 1, "tab-pane", "fade", "show", "active"],
                            [1, "settings-notification"],
                            [1, "notification-info"],
                            [1, "custom-control", "form-check"],
                            ["type", "checkbox", "id", "notification1", 1, "form-check-input"],
                            ["for", "notification1", 1, "form-check-label"],
                            ["type", "checkbox", "id", "notification2", "checked", "", 1, "form-check-input"],
                            ["for", "notification2", 1, "form-check-label"],
                            ["type", "checkbox", "id", "notification3", 1, "form-check-input"],
                            ["for", "notification3", 1, "form-check-label"],
                            ["type", "checkbox", "id", "notification4", "checked", "", 1, "form-check-input"],
                            ["for", "notification4", 1, "form-check-label"],
                            ["type", "checkbox", "id", "notification5", "checked", "", 1, "form-check-input"],
                            ["for", "notification5", 1, "form-check-label"],
                            [1, "card", "settings-profile"],
                            ["for", "generateKey"],
                            ["id", "generateKey", "type", "text", "placeholder", "Enter your key name", 1, "form-control"],
                            ["for", "rewritePassword"],
                            ["id", "rewritePassword", "type", "password", "placeholder", "Confirm your password", 1, "form-control"],
                            ["type", "submit", "value", "Create API key"],
                            ["type", "checkbox", "id", "apiStatus1", "checked", "", 1, "form-check-input"],
                            ["for", "apiStatus1", 1, "form-check-label"],
                            [1, "icon", "ion-md-trash"],
                            ["type", "checkbox", "id", "apiStatus2", 1, "form-check-input"],
                            ["for", "apiStatus2", 1, "form-check-label"],
                            ["type", "checkbox", "id", "apiStatus3", 1, "form-check-input"],
                            ["for", "apiStatus3", 1, "form-check-label"],
                            ["type", "checkbox", "id", "apiStatus4", 1, "form-check-input"],
                            ["for", "apiStatus4", 1, "form-check-label"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "div", 2), i(3, "div", 3), i(4, "ul", 4), i(5, "li", 5), i(6, "button", 6), a(7, " Profile "), r(), r(), i(8, "li", 5), i(9, "button", 7), a(10, " Wallet "), r(), r(), i(11, "li", 5), i(12, "button", 8), a(13, " Settings "), r(), r(), r(), r(), i(14, "div", 9), i(15, "div", 10), i(16, "div", 11), i(17, "div", 12), i(18, "div", 13), i(19, "h5", 14), a(20, "General Information"), r(), i(21, "div", 15), i(22, "form"), h(23, "img", 16), i(24, "div", 17), h(25, "input", 18), r(), i(26, "div", 19), i(27, "div", 20), i(28, "label", 21), a(29, "First name"), r(), h(30, "input", 22), r(), i(31, "div", 20), i(32, "label", 23), a(33, "Last name"), r(), h(34, "input", 24), r(), i(35, "div", 20), i(36, "label", 25), a(37, "Email"), r(), h(38, "input", 26), r(), i(39, "div", 20), i(40, "label", 27), a(41, "Phone"), r(), h(42, "input", 28), r(), i(43, "div", 20), i(44, "label", 29), a(45, "Language"), r(), i(46, "select", 30), i(47, "option", 31), a(48, "English"), r(), i(49, "option"), a(50, "Mandarin Chinese"), r(), i(51, "option"), a(52, "Spanish"), r(), i(53, "option"), a(54, "Arabic"), r(), i(55, "option"), a(56, "Russian"), r(), r(), r(), i(57, "div", 20), i(58, "label", 32), a(59, "Currency"), r(), i(60, "select", 33), i(61, "option", 31), a(62, "USD"), r(), i(63, "option"), a(64, "EUR"), r(), i(65, "option"), a(66, "GBP"), r(), i(67, "option"), a(68, "CHF"), r(), r(), r(), i(69, "div", 34), h(70, "input", 35), r(), r(), r(), r(), r(), r(), i(71, "div", 12), i(72, "div", 13), i(73, "h5", 14), a(74, "Security Information"), r(), i(75, "div", 15), i(76, "form"), i(77, "div", 2), i(78, "div", 20), i(79, "label", 36), a(80, " Current password "), r(), h(81, "input", 37), r(), i(82, "div", 20), i(83, "label", 38), a(84, "New password"), r(), h(85, "input", 39), r(), i(86, "div", 20), i(87, "label", 40), a(88, " Security questions #1 "), r(), i(89, "select", 41), i(90, "option", 31), a(91, " What was the name of your first pet? "), r(), i(92, "option"), a(93, "What's your Mother's middle name?"), r(), i(94, "option"), a(95, " What was the name of your first school? "), r(), i(96, "option"), a(97, " Where did you travel for the first time? "), r(), r(), r(), i(98, "div", 20), i(99, "label", 42), a(100, "Answer"), r(), h(101, "input", 43), r(), i(102, "div", 20), i(103, "label", 44), a(104, " Security questions #2 "), r(), i(105, "select", 45), i(106, "option", 31), a(107, "Choose..."), r(), i(108, "option"), a(109, " What was the name of your first pet? "), r(), i(110, "option"), a(111, "What's your Mother's middle name?"), r(), i(112, "option"), a(113, " What was the name of your first school? "), r(), i(114, "option"), a(115, " Where did you travel for the first time? "), r(), r(), r(), i(116, "div", 20), i(117, "label", 46), a(118, "Answer"), r(), h(119, "input", 47), r(), i(120, "div", 20), i(121, "label", 48), a(122, " Security questions #3 "), r(), i(123, "select", 49), i(124, "option", 31), a(125, "Choose..."), r(), i(126, "option"), a(127, " What was the name of your first pet? "), r(), i(128, "option"), a(129, "What's your Mother's middle name?"), r(), i(130, "option"), a(131, " What was the name of your first school? "), r(), i(132, "option"), a(133, " Where did you travel for the first time? "), r(), r(), r(), i(134, "div", 20), i(135, "label", 50), a(136, "Answer"), r(), h(137, "input", 51), r(), i(138, "div", 34), h(139, "input", 35), r(), r(), r(), r(), r(), r(), r(), i(140, "div", 52), i(141, "div", 53), i(142, "div", 2), i(143, "div", 54), i(144, "ul", 55), i(145, "li", 56), i(146, "a", 57), i(147, "div", 58), h(148, "img", 59), i(149, "div"), i(150, "h2"), a(151, "BTC"), r(), i(152, "p"), a(153, "Bitcoin"), r(), r(), r(), i(154, "div"), i(155, "h3"), a(156, "4.5484254"), r(), i(157, "p", 60), h(158, "i", 61), a(159, " 0.0000000 "), r(), r(), r(), r(), i(160, "li", 56), i(161, "a", 62), i(162, "div", 58), h(163, "img", 63), i(164, "div"), i(165, "h2"), a(166, "ETH"), r(), i(167, "p"), a(168, "Ethereum"), r(), r(), r(), i(169, "div"), i(170, "h3"), a(171, "13.454845"), r(), i(172, "p", 60), h(173, "i", 61), a(174, " 0.0000000 "), r(), r(), r(), r(), i(175, "li", 56), i(176, "a", 64), i(177, "div", 58), h(178, "img", 65), i(179, "div"), i(180, "h2"), a(181, "BNB"), r(), i(182, "p"), a(183, "Binance"), r(), r(), r(), i(184, "div"), i(185, "h3"), a(186, "35.48428"), r(), i(187, "p", 60), h(188, "i", 61), a(189, " 0.0000000 "), r(), r(), r(), r(), i(190, "li", 56), i(191, "a", 66), i(192, "div", 58), h(193, "img", 67), i(194, "div"), i(195, "h2"), a(196, "TRX"), r(), i(197, "p"), a(198, "Tron"), r(), r(), r(), i(199, "div"), i(200, "h3"), a(201, "4.458941"), r(), i(202, "p", 60), h(203, "i", 61), a(204, " 0.0000000 "), r(), r(), r(), r(), i(205, "li", 56), i(206, "a", 68), i(207, "div", 58), h(208, "img", 69), i(209, "div"), i(210, "h2"), a(211, "EOS"), r(), i(212, "p"), a(213, "Eosio"), r(), r(), r(), i(214, "div"), i(215, "h3"), a(216, "33.478951"), r(), i(217, "p", 60), h(218, "i", 61), a(219, " 0.0000000 "), r(), r(), r(), r(), i(220, "li", 56), i(221, "a", 70), i(222, "div", 58), h(223, "img", 71), i(224, "div"), i(225, "h2"), a(226, "XMR"), r(), i(227, "p"), a(228, "Monero"), r(), r(), r(), i(229, "div"), i(230, "h3"), a(231, "99.465975"), r(), i(232, "p", 60), h(233, "i", 61), a(234, " 0.0000000 "), r(), r(), r(), r(), i(235, "li", 56), i(236, "a", 72), i(237, "div", 58), h(238, "img", 73), i(239, "div"), i(240, "h2"), a(241, "KCS"), r(), i(242, "p"), a(243, "Kstarcoin"), r(), r(), r(), i(244, "div"), i(245, "h3"), a(246, "114.57564"), r(), i(247, "p", 60), h(248, "i", 61), a(249, " 0.0000000 "), r(), r(), r(), r(), r(), r(), i(250, "div", 74), i(251, "div", 75), i(252, "div", 76), i(253, "div", 12), i(254, "div", 13), i(255, "h5", 14), a(256, "Balances"), r(), i(257, "ul"), i(258, "li", 77), i(259, "div", 78), h(260, "i", 79), i(261, "h2"), a(262, "Total Equity"), r(), r(), i(263, "div"), i(264, "h3"), a(265, "5.5894 BTC"), r(), r(), r(), i(266, "li", 77), i(267, "div", 78), h(268, "i", 80), i(269, "h2"), a(270, "Available Margin"), r(), r(), i(271, "div"), i(272, "h3"), a(273, "2.480 BTC"), r(), r(), r(), r(), i(274, "button", 81), a(275, "Deposit"), r(), i(276, "button", 82), a(277, "Withdraw"), r(), r(), r(), i(278, "div", 12), i(279, "div", 13), i(280, "h5", 14), a(281, "Wallet Deposit Address"), r(), i(282, "div", 83), i(283, "div", 84), i(284, "p"), a(285, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(286, "div", 85), h(287, "input", 86), i(288, "div", 87), i(289, "button", 88), a(290, " COPY "), r(), r(), r(), r(), i(291, "div", 89), i(292, "div", 90), h(293, "img", 91), r(), i(294, "div", 92), h(295, "img", 93), r(), r(), r(), r(), r(), i(296, "div", 12), i(297, "div", 13), i(298, "h5", 14), a(299, "Latest Transactions"), r(), i(300, "div", 94), i(301, "table", 95), i(302, "thead"), i(303, "tr"), i(304, "th"), a(305, "No."), r(), i(306, "th"), a(307, "Date"), r(), i(308, "th"), a(309, "Status"), r(), i(310, "th"), a(311, "Amount"), r(), r(), r(), i(312, "tbody"), i(313, "tr"), i(314, "td"), a(315, "1"), r(), i(316, "td"), a(317, "25-04-2019"), r(), i(318, "td"), h(319, "i", 96), r(), i(320, "td"), a(321, "4.5454334"), r(), r(), i(322, "tr"), i(323, "td"), a(324, "2"), r(), i(325, "td"), a(326, "25-05-2019"), r(), i(327, "td"), h(328, "i", 96), r(), i(329, "td"), a(330, "0.5484468"), r(), r(), i(331, "tr"), i(332, "td"), a(333, "3"), r(), i(334, "td"), a(335, "25-06-2019"), r(), i(336, "td"), h(337, "i", 97), r(), i(338, "td"), a(339, "2.5454545"), r(), r(), i(340, "tr"), i(341, "td"), a(342, "4"), r(), i(343, "td"), a(344, "25-07-2019"), r(), i(345, "td"), h(346, "i", 96), r(), i(347, "td"), a(348, "1.45894147"), r(), r(), i(349, "tr"), i(350, "td"), a(351, "3"), r(), i(352, "td"), a(353, "25-08-2019"), r(), i(354, "td"), h(355, "i", 97), r(), i(356, "td"), a(357, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(358, "div", 98), i(359, "div", 12), i(360, "div", 13), i(361, "h5", 14), a(362, "Balances"), r(), i(363, "ul"), i(364, "li", 77), i(365, "div", 78), h(366, "i", 79), i(367, "h2"), a(368, "Total Equity"), r(), r(), i(369, "div"), i(370, "h3"), a(371, "4.1542 ETH"), r(), r(), r(), i(372, "li", 77), i(373, "div", 78), h(374, "i", 80), i(375, "h2"), a(376, "Available Margin"), r(), r(), i(377, "div"), i(378, "h3"), a(379, "1.334 ETH"), r(), r(), r(), r(), i(380, "button", 81), a(381, "Deposit"), r(), i(382, "button", 82), a(383, "Withdraw"), r(), r(), r(), i(384, "div", 12), i(385, "div", 13), i(386, "h5", 14), a(387, "Wallet Deposit Address"), r(), i(388, "div", 83), i(389, "div", 84), i(390, "p"), a(391, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(392, "div", 85), h(393, "input", 86), i(394, "div", 87), i(395, "button", 88), a(396, " COPY "), r(), r(), r(), r(), i(397, "div", 89), i(398, "div", 90), h(399, "img", 91), r(), i(400, "div", 92), h(401, "img", 93), r(), r(), r(), r(), r(), i(402, "div", 12), i(403, "div", 13), i(404, "h5", 14), a(405, "Latest Transactions"), r(), i(406, "div", 94), i(407, "table", 95), i(408, "thead"), i(409, "tr"), i(410, "th"), a(411, "No."), r(), i(412, "th"), a(413, "Date"), r(), i(414, "th"), a(415, "Status"), r(), i(416, "th"), a(417, "Amount"), r(), r(), r(), i(418, "tbody"), i(419, "tr"), i(420, "td"), a(421, "1"), r(), i(422, "td"), a(423, "25-04-2019"), r(), i(424, "td"), h(425, "i", 96), r(), i(426, "td"), a(427, "4.5454334"), r(), r(), i(428, "tr"), i(429, "td"), a(430, "2"), r(), i(431, "td"), a(432, "25-05-2019"), r(), i(433, "td"), h(434, "i", 96), r(), i(435, "td"), a(436, "0.5484468"), r(), r(), i(437, "tr"), i(438, "td"), a(439, "3"), r(), i(440, "td"), a(441, "25-06-2019"), r(), i(442, "td"), h(443, "i", 97), r(), i(444, "td"), a(445, "2.5454545"), r(), r(), i(446, "tr"), i(447, "td"), a(448, "4"), r(), i(449, "td"), a(450, "25-07-2019"), r(), i(451, "td"), h(452, "i", 96), r(), i(453, "td"), a(454, "1.45894147"), r(), r(), i(455, "tr"), i(456, "td"), a(457, "3"), r(), i(458, "td"), a(459, "25-08-2019"), r(), i(460, "td"), h(461, "i", 97), r(), i(462, "td"), a(463, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(464, "div", 99), i(465, "div", 12), i(466, "div", 13), i(467, "h5", 14), a(468, "Balances"), r(), i(469, "ul"), i(470, "li", 77), i(471, "div", 78), h(472, "i", 79), i(473, "h2"), a(474, "Total Equity"), r(), r(), i(475, "div"), i(476, "h3"), a(477, "7.342 BNB"), r(), r(), r(), i(478, "li", 77), i(479, "div", 78), h(480, "i", 80), i(481, "h2"), a(482, "Available Margin"), r(), r(), i(483, "div"), i(484, "h3"), a(485, "0.332 BNB"), r(), r(), r(), r(), i(486, "button", 81), a(487, "Deposit"), r(), i(488, "button", 82), a(489, "Withdraw"), r(), r(), r(), i(490, "div", 12), i(491, "div", 13), i(492, "h5", 14), a(493, "Wallet Deposit Address"), r(), i(494, "div", 83), i(495, "div", 84), i(496, "p"), a(497, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(498, "div", 85), h(499, "input", 86), i(500, "div", 87), i(501, "button", 88), a(502, " COPY "), r(), r(), r(), r(), i(503, "div", 89), i(504, "div", 90), h(505, "img", 91), r(), i(506, "div", 92), h(507, "img", 93), r(), r(), r(), r(), r(), i(508, "div", 12), i(509, "div", 13), i(510, "h5", 14), a(511, "Latest Transactions"), r(), i(512, "div", 94), i(513, "table", 95), i(514, "thead"), i(515, "tr"), i(516, "th"), a(517, "No."), r(), i(518, "th"), a(519, "Date"), r(), i(520, "th"), a(521, "Status"), r(), i(522, "th"), a(523, "Amount"), r(), r(), r(), i(524, "tbody"), i(525, "tr"), i(526, "td"), a(527, "1"), r(), i(528, "td"), a(529, "25-04-2019"), r(), i(530, "td"), h(531, "i", 96), r(), i(532, "td"), a(533, "4.5454334"), r(), r(), i(534, "tr"), i(535, "td"), a(536, "2"), r(), i(537, "td"), a(538, "25-05-2019"), r(), i(539, "td"), h(540, "i", 96), r(), i(541, "td"), a(542, "0.5484468"), r(), r(), i(543, "tr"), i(544, "td"), a(545, "3"), r(), i(546, "td"), a(547, "25-06-2019"), r(), i(548, "td"), h(549, "i", 97), r(), i(550, "td"), a(551, "2.5454545"), r(), r(), i(552, "tr"), i(553, "td"), a(554, "4"), r(), i(555, "td"), a(556, "25-07-2019"), r(), i(557, "td"), h(558, "i", 96), r(), i(559, "td"), a(560, "1.45894147"), r(), r(), i(561, "tr"), i(562, "td"), a(563, "3"), r(), i(564, "td"), a(565, "25-08-2019"), r(), i(566, "td"), h(567, "i", 97), r(), i(568, "td"), a(569, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(570, "div", 100), i(571, "div", 12), i(572, "div", 13), i(573, "h5", 14), a(574, "Balances"), r(), i(575, "ul"), i(576, "li", 77), i(577, "div", 78), h(578, "i", 79), i(579, "h2"), a(580, "Total Equity"), r(), r(), i(581, "div"), i(582, "h3"), a(583, "4.3344 TRX"), r(), r(), r(), i(584, "li", 77), i(585, "div", 78), h(586, "i", 80), i(587, "h2"), a(588, "Available Margin"), r(), r(), i(589, "div"), i(590, "h3"), a(591, "1.453 TRX"), r(), r(), r(), r(), i(592, "button", 81), a(593, "Deposit"), r(), i(594, "button", 82), a(595, "Withdraw"), r(), r(), r(), i(596, "div", 12), i(597, "div", 13), i(598, "h5", 14), a(599, "Wallet Deposit Address"), r(), i(600, "div", 83), i(601, "div", 84), i(602, "p"), a(603, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(604, "div", 85), h(605, "input", 86), i(606, "div", 87), i(607, "button", 88), a(608, " COPY "), r(), r(), r(), r(), i(609, "div", 89), i(610, "div", 90), h(611, "img", 91), r(), i(612, "div", 92), h(613, "img", 93), r(), r(), r(), r(), r(), i(614, "div", 12), i(615, "div", 13), i(616, "h5", 14), a(617, "Latest Transactions"), r(), i(618, "div", 94), i(619, "table", 95), i(620, "thead"), i(621, "tr"), i(622, "th"), a(623, "No."), r(), i(624, "th"), a(625, "Date"), r(), i(626, "th"), a(627, "Status"), r(), i(628, "th"), a(629, "Amount"), r(), r(), r(), i(630, "tbody"), i(631, "tr"), i(632, "td"), a(633, "1"), r(), i(634, "td"), a(635, "25-04-2019"), r(), i(636, "td"), h(637, "i", 96), r(), i(638, "td"), a(639, "4.5454334"), r(), r(), i(640, "tr"), i(641, "td"), a(642, "2"), r(), i(643, "td"), a(644, "25-05-2019"), r(), i(645, "td"), h(646, "i", 96), r(), i(647, "td"), a(648, "0.5484468"), r(), r(), i(649, "tr"), i(650, "td"), a(651, "3"), r(), i(652, "td"), a(653, "25-06-2019"), r(), i(654, "td"), h(655, "i", 97), r(), i(656, "td"), a(657, "2.5454545"), r(), r(), i(658, "tr"), i(659, "td"), a(660, "4"), r(), i(661, "td"), a(662, "25-07-2019"), r(), i(663, "td"), h(664, "i", 96), r(), i(665, "td"), a(666, "1.45894147"), r(), r(), i(667, "tr"), i(668, "td"), a(669, "3"), r(), i(670, "td"), a(671, "25-08-2019"), r(), i(672, "td"), h(673, "i", 97), r(), i(674, "td"), a(675, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(676, "div", 101), i(677, "div", 12), i(678, "div", 13), i(679, "h5", 14), a(680, "Balances"), r(), i(681, "ul"), i(682, "li", 77), i(683, "div", 78), h(684, "i", 79), i(685, "h2"), a(686, "Total Equity"), r(), r(), i(687, "div"), i(688, "h3"), a(689, "33.35 EOS"), r(), r(), r(), i(690, "li", 77), i(691, "div", 78), h(692, "i", 80), i(693, "h2"), a(694, "Available Margin"), r(), r(), i(695, "div"), i(696, "h3"), a(697, "4.445 EOS"), r(), r(), r(), r(), i(698, "button", 81), a(699, "Deposit"), r(), i(700, "button", 82), a(701, "Withdraw"), r(), r(), r(), i(702, "div", 12), i(703, "div", 13), i(704, "h5", 14), a(705, "Wallet Deposit Address"), r(), i(706, "div", 83), i(707, "div", 84), i(708, "p"), a(709, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(710, "div", 85), h(711, "input", 86), i(712, "div", 87), i(713, "button", 88), a(714, " COPY "), r(), r(), r(), r(), i(715, "div", 89), i(716, "div", 90), h(717, "img", 91), r(), i(718, "div", 92), h(719, "img", 93), r(), r(), r(), r(), r(), i(720, "div", 12), i(721, "div", 13), i(722, "h5", 14), a(723, "Latest Transactions"), r(), i(724, "div", 94), i(725, "table", 95), i(726, "thead"), i(727, "tr"), i(728, "th"), a(729, "No."), r(), i(730, "th"), a(731, "Date"), r(), i(732, "th"), a(733, "Status"), r(), i(734, "th"), a(735, "Amount"), r(), r(), r(), i(736, "tbody"), i(737, "tr"), i(738, "td"), a(739, "1"), r(), i(740, "td"), a(741, "25-04-2019"), r(), i(742, "td"), h(743, "i", 96), r(), i(744, "td"), a(745, "4.5454334"), r(), r(), i(746, "tr"), i(747, "td"), a(748, "2"), r(), i(749, "td"), a(750, "25-05-2019"), r(), i(751, "td"), h(752, "i", 96), r(), i(753, "td"), a(754, "0.5484468"), r(), r(), i(755, "tr"), i(756, "td"), a(757, "3"), r(), i(758, "td"), a(759, "25-06-2019"), r(), i(760, "td"), h(761, "i", 97), r(), i(762, "td"), a(763, "2.5454545"), r(), r(), i(764, "tr"), i(765, "td"), a(766, "4"), r(), i(767, "td"), a(768, "25-07-2019"), r(), i(769, "td"), h(770, "i", 96), r(), i(771, "td"), a(772, "1.45894147"), r(), r(), i(773, "tr"), i(774, "td"), a(775, "3"), r(), i(776, "td"), a(777, "25-08-2019"), r(), i(778, "td"), h(779, "i", 97), r(), i(780, "td"), a(781, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(782, "div", 102), i(783, "div", 12), i(784, "div", 13), i(785, "h5", 14), a(786, "Balances"), r(), i(787, "ul"), i(788, "li", 77), i(789, "div", 78), h(790, "i", 79), i(791, "h2"), a(792, "Total Equity"), r(), r(), i(793, "div"), i(794, "h3"), a(795, "34.333 XMR"), r(), r(), r(), i(796, "li", 77), i(797, "div", 78), h(798, "i", 80), i(799, "h2"), a(800, "Available Margin"), r(), r(), i(801, "div"), i(802, "h3"), a(803, "2.354 XMR"), r(), r(), r(), r(), i(804, "button", 81), a(805, "Deposit"), r(), i(806, "button", 82), a(807, "Withdraw"), r(), r(), r(), i(808, "div", 12), i(809, "div", 13), i(810, "h5", 14), a(811, "Wallet Deposit Address"), r(), i(812, "div", 83), i(813, "div", 84), i(814, "p"), a(815, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(816, "div", 85), h(817, "input", 86), i(818, "div", 87), i(819, "button", 88), a(820, " COPY "), r(), r(), r(), r(), i(821, "div", 89), i(822, "div", 90), h(823, "img", 91), r(), i(824, "div", 92), h(825, "img", 93), r(), r(), r(), r(), r(), i(826, "div", 12), i(827, "div", 13), i(828, "h5", 14), a(829, "Latest Transactions"), r(), i(830, "div", 94), i(831, "table", 95), i(832, "thead"), i(833, "tr"), i(834, "th"), a(835, "No."), r(), i(836, "th"), a(837, "Date"), r(), i(838, "th"), a(839, "Status"), r(), i(840, "th"), a(841, "Amount"), r(), r(), r(), i(842, "tbody"), i(843, "tr"), i(844, "td"), a(845, "1"), r(), i(846, "td"), a(847, "25-04-2019"), r(), i(848, "td"), h(849, "i", 96), r(), i(850, "td"), a(851, "4.5454334"), r(), r(), i(852, "tr"), i(853, "td"), a(854, "2"), r(), i(855, "td"), a(856, "25-05-2019"), r(), i(857, "td"), h(858, "i", 96), r(), i(859, "td"), a(860, "0.5484468"), r(), r(), i(861, "tr"), i(862, "td"), a(863, "3"), r(), i(864, "td"), a(865, "25-06-2019"), r(), i(866, "td"), h(867, "i", 97), r(), i(868, "td"), a(869, "2.5454545"), r(), r(), i(870, "tr"), i(871, "td"), a(872, "4"), r(), i(873, "td"), a(874, "25-07-2019"), r(), i(875, "td"), h(876, "i", 96), r(), i(877, "td"), a(878, "1.45894147"), r(), r(), i(879, "tr"), i(880, "td"), a(881, "3"), r(), i(882, "td"), a(883, "25-08-2019"), r(), i(884, "td"), h(885, "i", 97), r(), i(886, "td"), a(887, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(888, "div", 103), i(889, "div", 12), i(890, "div", 13), i(891, "h5", 14), a(892, "Balances"), r(), i(893, "ul"), i(894, "li", 77), i(895, "div", 78), h(896, "i", 79), i(897, "h2"), a(898, "Total Equity"), r(), r(), i(899, "div"), i(900, "h3"), a(901, "86.577 KCS"), r(), r(), r(), i(902, "li", 77), i(903, "div", 78), h(904, "i", 80), i(905, "h2"), a(906, "Available Margin"), r(), r(), i(907, "div"), i(908, "h3"), a(909, "5.78 KCS"), r(), r(), r(), r(), i(910, "button", 81), a(911, "Deposit"), r(), i(912, "button", 82), a(913, "Withdraw"), r(), r(), r(), i(914, "div", 12), i(915, "div", 13), i(916, "h5", 14), a(917, "Wallet Deposit Address"), r(), i(918, "div", 83), i(919, "div", 84), i(920, "p"), a(921, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(922, "div", 85), h(923, "input", 86), i(924, "div", 87), i(925, "button", 88), a(926, " COPY "), r(), r(), r(), r(), i(927, "div", 89), i(928, "div", 90), h(929, "img", 91), r(), i(930, "div", 92), h(931, "img", 93), r(), r(), r(), r(), r(), i(932, "div", 12), i(933, "div", 13), i(934, "h5", 14), a(935, "Latest Transactions"), r(), i(936, "div", 94), i(937, "table", 95), i(938, "thead"), i(939, "tr"), i(940, "th"), a(941, "No."), r(), i(942, "th"), a(943, "Date"), r(), i(944, "th"), a(945, "Status"), r(), i(946, "th"), a(947, "Amount"), r(), r(), r(), i(948, "tbody"), i(949, "tr"), i(950, "td"), a(951, "1"), r(), i(952, "td"), a(953, "25-04-2019"), r(), i(954, "td"), h(955, "i", 96), r(), i(956, "td"), a(957, "4.5454334"), r(), r(), i(958, "tr"), i(959, "td"), a(960, "2"), r(), i(961, "td"), a(962, "25-05-2019"), r(), i(963, "td"), h(964, "i", 96), r(), i(965, "td"), a(966, "0.5484468"), r(), r(), i(967, "tr"), i(968, "td"), a(969, "3"), r(), i(970, "td"), a(971, "25-06-2019"), r(), i(972, "td"), h(973, "i", 97), r(), i(974, "td"), a(975, "2.5454545"), r(), r(), i(976, "tr"), i(977, "td"), a(978, "4"), r(), i(979, "td"), a(980, "25-07-2019"), r(), i(981, "td"), h(982, "i", 96), r(), i(983, "td"), a(984, "1.45894147"), r(), r(), i(985, "tr"), i(986, "td"), a(987, "3"), r(), i(988, "td"), a(989, "25-08-2019"), r(), i(990, "td"), h(991, "i", 97), r(), i(992, "td"), a(993, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), i(994, "div", 104), i(995, "div", 12), i(996, "div", 13), i(997, "h5", 14), a(998, "Notifications"), r(), i(999, "div", 105), i(1e3, "ul"), i(1001, "li"), i(1002, "div", 106), i(1003, "p"), a(1004, "Update price"), r(), i(1005, "span"), a(1006, " Get the update price in your dashboard "), r(), r(), i(1007, "div", 107), h(1008, "input", 108), h(1009, "label", 109), r(), r(), i(1010, "li"), i(1011, "div", 106), i(1012, "p"), a(1013, "2FA"), r(), i(1014, "span"), a(1015, " Unable two factor authentication service "), r(), r(), i(1016, "div", 107), h(1017, "input", 110), h(1018, "label", 111), r(), r(), i(1019, "li"), i(1020, "div", 106), i(1021, "p"), a(1022, "Latest news"), r(), i(1023, "span"), a(1024, "Get the latest news in your mail"), r(), r(), i(1025, "div", 107), h(1026, "input", 112), h(1027, "label", 113), r(), r(), i(1028, "li"), i(1029, "div", 106), i(1030, "p"), a(1031, "Email Service"), r(), i(1032, "span"), a(1033, "Get security code in your mail"), r(), r(), i(1034, "div", 107), h(1035, "input", 114), h(1036, "label", 115), r(), r(), i(1037, "li"), i(1038, "div", 106), i(1039, "p"), a(1040, "Phone Notify"), r(), i(1041, "span"), a(1042, " Get transition notification in your phone "), r(), r(), i(1043, "div", 107), h(1044, "input", 116), h(1045, "label", 117), r(), r(), r(), r(), r(), r(), i(1046, "div", 118), i(1047, "div", 13), i(1048, "h5", 14), a(1049, "Create API Key"), r(), i(1050, "div", 2), i(1051, "div", 20), i(1052, "label", 119), a(1053, " Generate key name "), r(), h(1054, "input", 120), r(), i(1055, "div", 20), i(1056, "label", 121), a(1057, " Confirm password "), r(), h(1058, "input", 122), r(), i(1059, "div", 34), h(1060, "input", 123), r(), r(), r(), r(), i(1061, "div", 12), i(1062, "div", 13), i(1063, "h5", 14), a(1064, "Your API Keys"), r(), i(1065, "div", 94), i(1066, "table", 95), i(1067, "thead"), i(1068, "tr"), i(1069, "th"), a(1070, "No."), r(), i(1071, "th"), a(1072, "Key"), r(), i(1073, "th"), a(1074, "Status"), r(), i(1075, "th"), a(1076, "Action"), r(), r(), r(), i(1077, "tbody"), i(1078, "tr"), i(1079, "td"), a(1080, "1"), r(), i(1081, "td"), a(1082, "zRmWVcrAZ1C0RZkFMu7K5v0KWC9jUJLt"), r(), i(1083, "td"), i(1084, "div", 107), h(1085, "input", 124), h(1086, "label", 125), r(), r(), i(1087, "td"), h(1088, "i", 126), r(), r(), i(1089, "tr"), i(1090, "td"), a(1091, "2"), r(), i(1092, "td"), a(1093, "Rv5dgnKdmVPyHwxeExBYz8uFwYQz3Jvg"), r(), i(1094, "td"), i(1095, "div", 107), h(1096, "input", 127), h(1097, "label", 128), r(), r(), i(1098, "td"), h(1099, "i", 126), r(), r(), i(1100, "tr"), i(1101, "td"), a(1102, "3"), r(), i(1103, "td"), a(1104, "VxEYIs1HwgmtKTUMA4aknjSEjjePZIWu"), r(), i(1105, "td"), i(1106, "div", 107), h(1107, "input", 129), h(1108, "label", 130), r(), r(), i(1109, "td"), h(1110, "i", 126), r(), r(), i(1111, "tr"), i(1112, "td"), a(1113, "4"), r(), i(1114, "td"), a(1115, "M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o"), r(), i(1116, "td"), i(1117, "div", 107), h(1118, "input", 131), h(1119, "label", 132), r(), r(), i(1120, "td"), h(1121, "i", 126), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r())
                        },
                        styles: [""]
                    }), t
                })()
            }, {
                path: "sign-up",
                component: (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-sign-up"]
                        ],
                        decls: 25,
                        vars: 0,
                        consts: [
                            [1, "vh-100", "d-flex", "justify-content-center"],
                            [1, "form-access", "my-auto"],
                            [1, "form-group"],
                            ["type", "text", "placeholder", "Full Name", "required", "", 1, "form-control"],
                            ["type", "email", "placeholder", "Email Address", "required", "", 1, "form-control"],
                            ["type", "password", "placeholder", "Password", "required", "", 1, "form-control"],
                            ["type", "password", "placeholder", "Confirm Password", "required", "", 1, "form-control"],
                            [1, "custom-control", "form-check"],
                            ["type", "checkbox", "id", "form-checkbox", "required", "", 1, "form-check-input"],
                            ["for", "form-checkbox", 1, "form-check-label"],
                            ["routerLink", "/terms-and-conditions"],
                            ["type", "submit", 1, "btn", "btn-primary"],
                            ["routerLink", "/login"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "form"), i(3, "span"), a(4, "Create Account"), r(), i(5, "div", 2), h(6, "input", 3), r(), i(7, "div", 2), h(8, "input", 4), r(), i(9, "div", 2), h(10, "input", 5), r(), i(11, "div", 2), h(12, "input", 6), r(), i(13, "div", 7), h(14, "input", 8), i(15, "label", 9), a(16, " I agree to the "), i(17, "a", 10), a(18, "Terms & Conditions"), r(), r(), r(), i(19, "button", 11), a(20, "Create Account"), r(), r(), i(21, "h2"), a(22, " Already have an account? "), i(23, "a", 12), a(24, " Sign in here"), r(), r(), r(), r())
                        },
                        directives: [Ot],
                        styles: [""]
                    }), t
                })()
            }, {
                path: "terms-and-conditions",
                component: (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-terms-and-conditions"]
                        ],
                        decls: 42,
                        vars: 0,
                        consts: [
                            [1, "page-content"],
                            [1, "container"],
                            [1, "row"],
                            [1, "col-md-12"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "div", 2), i(3, "div", 3), i(4, "h2"), a(5, "Terms and Conditions"), r(), i(6, "p"), a(7, "Welcome to Crypo"), r(), i(8, "p"), a(9, " These terms and conditions outline the rules and regulations for the use of Company Name's Website "), r(), i(10, "p"), a(11, " By accessing this website we assume you accept these terms and conditions. Do not continue to use Crypo if you do not agree to take all of the terms and conditions stated on this page. "), r(), i(12, "p"), a(13, " The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: \u201cClient\u201d, \u201cYou\u201d and \u201cYour\u201d refers to you, the person log on this website and compliant to the Company's terms and conditions. \u201cThe Company\u201d, \u201cOurselves\u201d, \u201cWe\u201d, \u201cOur\u201d and \u201cUs\u201d, refers to our Company. \u201cParty\u201d, \u201cParties\u201d, or \u201cUs\u201d, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same. "), r(), i(14, "h2"), a(15, "Cookies"), r(), i(16, "p"), a(17, " We employ the use of cookies. By accessing Crypo, you agreed to use cookies in agreement with the Crypo's Privacy Policy. "), r(), i(18, "p"), a(19, " Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. "), r(), i(20, "h2"), a(21, "License"), r(), i(22, "p"), a(23, " Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions. "), r(), i(24, "h2"), a(25, "iFrames"), r(), i(26, "p"), a(27, " Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website. "), r(), i(28, "h2"), a(29, "Content Liability"), r(), i(30, "p"), a(31, " We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights. "), r(), i(32, "h2"), a(33, "Reservation of Rights"), r(), i(34, "p"), a(35, " We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions. "), r(), i(36, "h2"), a(37, "Removal of links from our website"), r(), i(38, "p"), a(39, " If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly. "), r(), i(40, "p"), a(41, " We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date. "), r(), r(), r(), r(), r())
                        },
                        styles: [""]
                    }), t
                })()
            }, {
                path: "wallet",
                component: (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-wallet"]
                        ],
                        decls: 1122,
                        vars: 0,
                        consts: [
                            [1, "settings", "mtb15"],
                            [1, "container-fluid"],
                            [1, "row"],
                            [1, "col-lg-3"],
                            ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs", "nav-pills", "settings-nav"],
                            ["role", "presentation", 1, "nav-item"],
                            ["id", "Profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#Profile", "type", "button", "role", "tab", "aria-controls", "Profile", "aria-selected", "true", 1, "nav-link"],
                            ["id", "Wallet-tab", "data-bs-toggle", "tab", "data-bs-target", "#Wallet", "type", "button", "role", "tab", "aria-controls", "Wallet", "aria-selected", "false", 1, "nav-link", "active"],
                            ["id", "Settings-tab", "data-bs-toggle", "tab", "data-bs-target", "#Settings", "type", "button", "role", "tab", "aria-controls", "Settings", "aria-selected", "false", 1, "nav-link"],
                            [1, "col-lg-9"],
                            ["id", "myTabContent", 1, "tab-content"],
                            ["id", "Profile", "role", "tabpanel", "aria-labelledby", "Profile-tab", 1, "tab-pane", "fade"],
                            [1, "card"],
                            [1, "card-body"],
                            [1, "card-title"],
                            [1, "settings-profile"],
                            ["src", "../../../assets/img/avatar.svg", "alt", "avatar"],
                            [1, "custom-file"],
                            ["type", "file", 1, "form-control"],
                            [1, "row", "mt-4"],
                            [1, "col-md-6"],
                            ["for", "formFirst"],
                            ["id", "formFirst", "type", "text", "placeholder", "First name", 1, "form-control"],
                            ["for", "formLast"],
                            ["id", "formLast", "type", "text", "placeholder", "Last name", 1, "form-control"],
                            ["for", "emailAddress"],
                            ["id", "emailAddress", "type", "text", "placeholder", "Enter your email", 1, "form-control"],
                            ["for", "phoneNumber"],
                            ["id", "phoneNumber", "type", "text", "placeholder", "Enter phone number", 1, "form-control"],
                            ["for", "selectLanguage"],
                            ["id", "selectLanguage", 1, "form-select"],
                            ["defaultValue", ""],
                            ["for", "selectCurrency"],
                            ["id", "selectCurrency", 1, "form-select"],
                            [1, "col-md-12"],
                            ["type", "submit", "value", "Update"],
                            ["for", "currentPass"],
                            ["id", "currentPass", "type", "text", "placeholder", "Enter your password", 1, "form-control"],
                            ["for", "newPass"],
                            ["id", "newPass", "type", "text", "placeholder", "Enter new password", 1, "form-control"],
                            ["for", "securityOne"],
                            ["id", "securityOne", 1, "form-select"],
                            ["for", "securityAnsOne"],
                            ["id", "securityAnsOne", "type", "text", "placeholder", "Enter your answer", 1, "form-control"],
                            ["for", "securityTwo"],
                            ["id", "securityTwo", 1, "form-select"],
                            ["for", "securityAnsTwo"],
                            ["id", "securityAnsTwo", "type", "text", "placeholder", "Enter your answer", 1, "form-control"],
                            ["for", "securityThree"],
                            ["id", "securityThree", 1, "form-select"],
                            ["for", "securityFore"],
                            ["id", "securityFore", "type", "text", "placeholder", "Enter your answer", 1, "form-control"],
                            ["id", "Wallet", "role", "tabpanel", "aria-labelledby", "Wallet-tab", 1, "tab-pane", "fade", "show", "active"],
                            [1, "wallet"],
                            [1, "col-lg-4"],
                            [1, "settings-nav", "nav", "nav-pills", "nav-tabs"],
                            [1, "nav-item"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinBTC", "type", "button", "role", "tab", "aria-controls", "coinBTC", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center", "active"],
                            [1, "d-flex"],
                            ["src", "../../../assets/img/icon/18.png", "alt", "btc"],
                            [1, "text-end"],
                            [1, "icon", "ion-md-lock"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinETH", "type", "button", "role", "tab", "aria-controls", "coinETH", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/1.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinBNB", "type", "button", "role", "tab", "aria-controls", "coinBNB", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/9.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinTRX", "type", "button", "role", "tab", "aria-controls", "coinTRX", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/6.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinEOS", "type", "button", "role", "tab", "aria-controls", "coinEOS", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/2.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinXMR", "type", "button", "role", "tab", "aria-controls", "coinXMR", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/7.png", "alt", "btc"],
                            ["href", "#", "data-bs-toggle", "tab", "data-bs-target", "#coinKCS", "type", "button", "role", "tab", "aria-controls", "coinKCS", "aria-selected", "true", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center"],
                            ["src", "../../../assets/img/icon/4.png", "alt", "btc"],
                            [1, "col-lg-8"],
                            [1, "tab-content"],
                            ["id", "coinBTC", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"],
                            [1, "d-flex", "justify-content-between", "align-items-center"],
                            [1, "d-flex", "align-items-center"],
                            [1, "icon", "ion-md-cash"],
                            [1, "icon", "ion-md-checkmark"],
                            [1, "btn", "green"],
                            [1, "btn", "red"],
                            [1, "row", "wallet-address"],
                            [1, "col-md-8"],
                            [1, "input-group"],
                            ["type", "text", "value", "Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e", 1, "form-control"],
                            [1, "input-group-prepend"],
                            [1, "btn", "btn-primary"],
                            [1, "col-md-4"],
                            [1, "darkMode"],
                            ["src", "../../../assets/img/qr-code-dark.svg", "alt", "qr-code"],
                            [1, "lightMode"],
                            ["src", "../../../assets/img/qr-code-light.svg", "alt", "qr-code"],
                            [1, "wallet-history"],
                            [1, "table"],
                            [1, "icon", "ion-md-checkmark-circle-outline", "green"],
                            [1, "icon", "ion-md-close-circle-outline", "red"],
                            ["id", "coinETH", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinBNB", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinTRX", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinEOS", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinXMR", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "coinKCS", "role", "tabpanel", 1, "tab-pane", "fade"],
                            ["id", "Settings", "role", "tabpanel", "aria-labelledby", "Settings-tab", 1, "tab-pane", "fade"],
                            [1, "settings-notification"],
                            [1, "notification-info"],
                            [1, "custom-control", "form-check"],
                            ["type", "checkbox", "id", "notification1", 1, "form-check-input"],
                            ["for", "notification1", 1, "form-check-label"],
                            ["type", "checkbox", "id", "notification2", "checked", "", 1, "form-check-input"],
                            ["for", "notification2", 1, "form-check-label"],
                            ["type", "checkbox", "id", "notification3", 1, "form-check-input"],
                            ["for", "notification3", 1, "form-check-label"],
                            ["type", "checkbox", "id", "notification4", "checked", "", 1, "form-check-input"],
                            ["for", "notification4", 1, "form-check-label"],
                            ["type", "checkbox", "id", "notification5", "checked", "", 1, "form-check-input"],
                            ["for", "notification5", 1, "form-check-label"],
                            [1, "card", "settings-profile"],
                            ["for", "generateKey"],
                            ["id", "generateKey", "type", "text", "placeholder", "Enter your key name", 1, "form-control"],
                            ["for", "rewritePassword"],
                            ["id", "rewritePassword", "type", "password", "placeholder", "Confirm your password", 1, "form-control"],
                            ["type", "submit", "value", "Create API key"],
                            ["type", "checkbox", "id", "apiStatus1", "checked", "", 1, "form-check-input"],
                            ["for", "apiStatus1", 1, "form-check-label"],
                            [1, "icon", "ion-md-trash"],
                            ["type", "checkbox", "id", "apiStatus2", 1, "form-check-input"],
                            ["for", "apiStatus2", 1, "form-check-label"],
                            ["type", "checkbox", "id", "apiStatus3", 1, "form-check-input"],
                            ["for", "apiStatus3", 1, "form-check-label"],
                            ["type", "checkbox", "id", "apiStatus4", 1, "form-check-input"],
                            ["for", "apiStatus4", 1, "form-check-label"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "div", 2), i(3, "div", 3), i(4, "ul", 4), i(5, "li", 5), i(6, "button", 6), a(7, " Profile "), r(), r(), i(8, "li", 5), i(9, "button", 7), a(10, " Wallet "), r(), r(), i(11, "li", 5), i(12, "button", 8), a(13, " Settings "), r(), r(), r(), r(), i(14, "div", 9), i(15, "div", 10), i(16, "div", 11), i(17, "div", 12), i(18, "div", 13), i(19, "h5", 14), a(20, "General Information"), r(), i(21, "div", 15), i(22, "form"), h(23, "img", 16), i(24, "div", 17), h(25, "input", 18), r(), i(26, "div", 19), i(27, "div", 20), i(28, "label", 21), a(29, "First name"), r(), h(30, "input", 22), r(), i(31, "div", 20), i(32, "label", 23), a(33, "Last name"), r(), h(34, "input", 24), r(), i(35, "div", 20), i(36, "label", 25), a(37, "Email"), r(), h(38, "input", 26), r(), i(39, "div", 20), i(40, "label", 27), a(41, "Phone"), r(), h(42, "input", 28), r(), i(43, "div", 20), i(44, "label", 29), a(45, "Language"), r(), i(46, "select", 30), i(47, "option", 31), a(48, "English"), r(), i(49, "option"), a(50, "Mandarin Chinese"), r(), i(51, "option"), a(52, "Spanish"), r(), i(53, "option"), a(54, "Arabic"), r(), i(55, "option"), a(56, "Russian"), r(), r(), r(), i(57, "div", 20), i(58, "label", 32), a(59, "Currency"), r(), i(60, "select", 33), i(61, "option", 31), a(62, "USD"), r(), i(63, "option"), a(64, "EUR"), r(), i(65, "option"), a(66, "GBP"), r(), i(67, "option"), a(68, "CHF"), r(), r(), r(), i(69, "div", 34), h(70, "input", 35), r(), r(), r(), r(), r(), r(), i(71, "div", 12), i(72, "div", 13), i(73, "h5", 14), a(74, "Security Information"), r(), i(75, "div", 15), i(76, "form"), i(77, "div", 2), i(78, "div", 20), i(79, "label", 36), a(80, " Current password "), r(), h(81, "input", 37), r(), i(82, "div", 20), i(83, "label", 38), a(84, "New password"), r(), h(85, "input", 39), r(), i(86, "div", 20), i(87, "label", 40), a(88, " Security questions #1 "), r(), i(89, "select", 41), i(90, "option", 31), a(91, " What was the name of your first pet? "), r(), i(92, "option"), a(93, "What's your Mother's middle name?"), r(), i(94, "option"), a(95, " What was the name of your first school? "), r(), i(96, "option"), a(97, " Where did you travel for the first time? "), r(), r(), r(), i(98, "div", 20), i(99, "label", 42), a(100, "Answer"), r(), h(101, "input", 43), r(), i(102, "div", 20), i(103, "label", 44), a(104, " Security questions #2 "), r(), i(105, "select", 45), i(106, "option", 31), a(107, "Choose..."), r(), i(108, "option"), a(109, " What was the name of your first pet? "), r(), i(110, "option"), a(111, "What's your Mother's middle name?"), r(), i(112, "option"), a(113, " What was the name of your first school? "), r(), i(114, "option"), a(115, " Where did you travel for the first time? "), r(), r(), r(), i(116, "div", 20), i(117, "label", 46), a(118, "Answer"), r(), h(119, "input", 47), r(), i(120, "div", 20), i(121, "label", 48), a(122, " Security questions #3 "), r(), i(123, "select", 49), i(124, "option", 31), a(125, "Choose..."), r(), i(126, "option"), a(127, " What was the name of your first pet? "), r(), i(128, "option"), a(129, "What's your Mother's middle name?"), r(), i(130, "option"), a(131, " What was the name of your first school? "), r(), i(132, "option"), a(133, " Where did you travel for the first time? "), r(), r(), r(), i(134, "div", 20), i(135, "label", 50), a(136, "Answer"), r(), h(137, "input", 51), r(), i(138, "div", 34), h(139, "input", 35), r(), r(), r(), r(), r(), r(), r(), i(140, "div", 52), i(141, "div", 53), i(142, "div", 2), i(143, "div", 54), i(144, "ul", 55), i(145, "li", 56), i(146, "a", 57), i(147, "div", 58), h(148, "img", 59), i(149, "div"), i(150, "h2"), a(151, "BTC"), r(), i(152, "p"), a(153, "Bitcoin"), r(), r(), r(), i(154, "div"), i(155, "h3"), a(156, "4.5484254"), r(), i(157, "p", 60), h(158, "i", 61), a(159, " 0.0000000 "), r(), r(), r(), r(), i(160, "li", 56), i(161, "a", 62), i(162, "div", 58), h(163, "img", 63), i(164, "div"), i(165, "h2"), a(166, "ETH"), r(), i(167, "p"), a(168, "Ethereum"), r(), r(), r(), i(169, "div"), i(170, "h3"), a(171, "13.454845"), r(), i(172, "p", 60), h(173, "i", 61), a(174, " 0.0000000 "), r(), r(), r(), r(), i(175, "li", 56), i(176, "a", 64), i(177, "div", 58), h(178, "img", 65), i(179, "div"), i(180, "h2"), a(181, "BNB"), r(), i(182, "p"), a(183, "Binance"), r(), r(), r(), i(184, "div"), i(185, "h3"), a(186, "35.48428"), r(), i(187, "p", 60), h(188, "i", 61), a(189, " 0.0000000 "), r(), r(), r(), r(), i(190, "li", 56), i(191, "a", 66), i(192, "div", 58), h(193, "img", 67), i(194, "div"), i(195, "h2"), a(196, "TRX"), r(), i(197, "p"), a(198, "Tron"), r(), r(), r(), i(199, "div"), i(200, "h3"), a(201, "4.458941"), r(), i(202, "p", 60), h(203, "i", 61), a(204, " 0.0000000 "), r(), r(), r(), r(), i(205, "li", 56), i(206, "a", 68), i(207, "div", 58), h(208, "img", 69), i(209, "div"), i(210, "h2"), a(211, "EOS"), r(), i(212, "p"), a(213, "Eosio"), r(), r(), r(), i(214, "div"), i(215, "h3"), a(216, "33.478951"), r(), i(217, "p", 60), h(218, "i", 61), a(219, " 0.0000000 "), r(), r(), r(), r(), i(220, "li", 56), i(221, "a", 70), i(222, "div", 58), h(223, "img", 71), i(224, "div"), i(225, "h2"), a(226, "XMR"), r(), i(227, "p"), a(228, "Monero"), r(), r(), r(), i(229, "div"), i(230, "h3"), a(231, "99.465975"), r(), i(232, "p", 60), h(233, "i", 61), a(234, " 0.0000000 "), r(), r(), r(), r(), i(235, "li", 56), i(236, "a", 72), i(237, "div", 58), h(238, "img", 73), i(239, "div"), i(240, "h2"), a(241, "KCS"), r(), i(242, "p"), a(243, "Kstarcoin"), r(), r(), r(), i(244, "div"), i(245, "h3"), a(246, "114.57564"), r(), i(247, "p", 60), h(248, "i", 61), a(249, " 0.0000000 "), r(), r(), r(), r(), r(), r(), i(250, "div", 74), i(251, "div", 75), i(252, "div", 76), i(253, "div", 12), i(254, "div", 13), i(255, "h5", 14), a(256, "Balances"), r(), i(257, "ul"), i(258, "li", 77), i(259, "div", 78), h(260, "i", 79), i(261, "h2"), a(262, "Total Equity"), r(), r(), i(263, "div"), i(264, "h3"), a(265, "5.5894 BTC"), r(), r(), r(), i(266, "li", 77), i(267, "div", 78), h(268, "i", 80), i(269, "h2"), a(270, "Available Margin"), r(), r(), i(271, "div"), i(272, "h3"), a(273, "2.480 BTC"), r(), r(), r(), r(), i(274, "button", 81), a(275, "Deposit"), r(), i(276, "button", 82), a(277, "Withdraw"), r(), r(), r(), i(278, "div", 12), i(279, "div", 13), i(280, "h5", 14), a(281, "Wallet Deposit Address"), r(), i(282, "div", 83), i(283, "div", 84), i(284, "p"), a(285, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(286, "div", 85), h(287, "input", 86), i(288, "div", 87), i(289, "button", 88), a(290, " COPY "), r(), r(), r(), r(), i(291, "div", 89), i(292, "div", 90), h(293, "img", 91), r(), i(294, "div", 92), h(295, "img", 93), r(), r(), r(), r(), r(), i(296, "div", 12), i(297, "div", 13), i(298, "h5", 14), a(299, "Latest Transactions"), r(), i(300, "div", 94), i(301, "table", 95), i(302, "thead"), i(303, "tr"), i(304, "th"), a(305, "No."), r(), i(306, "th"), a(307, "Date"), r(), i(308, "th"), a(309, "Status"), r(), i(310, "th"), a(311, "Amount"), r(), r(), r(), i(312, "tbody"), i(313, "tr"), i(314, "td"), a(315, "1"), r(), i(316, "td"), a(317, "25-04-2019"), r(), i(318, "td"), h(319, "i", 96), r(), i(320, "td"), a(321, "4.5454334"), r(), r(), i(322, "tr"), i(323, "td"), a(324, "2"), r(), i(325, "td"), a(326, "25-05-2019"), r(), i(327, "td"), h(328, "i", 96), r(), i(329, "td"), a(330, "0.5484468"), r(), r(), i(331, "tr"), i(332, "td"), a(333, "3"), r(), i(334, "td"), a(335, "25-06-2019"), r(), i(336, "td"), h(337, "i", 97), r(), i(338, "td"), a(339, "2.5454545"), r(), r(), i(340, "tr"), i(341, "td"), a(342, "4"), r(), i(343, "td"), a(344, "25-07-2019"), r(), i(345, "td"), h(346, "i", 96), r(), i(347, "td"), a(348, "1.45894147"), r(), r(), i(349, "tr"), i(350, "td"), a(351, "3"), r(), i(352, "td"), a(353, "25-08-2019"), r(), i(354, "td"), h(355, "i", 97), r(), i(356, "td"), a(357, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(358, "div", 98), i(359, "div", 12), i(360, "div", 13), i(361, "h5", 14), a(362, "Balances"), r(), i(363, "ul"), i(364, "li", 77), i(365, "div", 78), h(366, "i", 79), i(367, "h2"), a(368, "Total Equity"), r(), r(), i(369, "div"), i(370, "h3"), a(371, "4.1542 ETH"), r(), r(), r(), i(372, "li", 77), i(373, "div", 78), h(374, "i", 80), i(375, "h2"), a(376, "Available Margin"), r(), r(), i(377, "div"), i(378, "h3"), a(379, "1.334 ETH"), r(), r(), r(), r(), i(380, "button", 81), a(381, "Deposit"), r(), i(382, "button", 82), a(383, "Withdraw"), r(), r(), r(), i(384, "div", 12), i(385, "div", 13), i(386, "h5", 14), a(387, "Wallet Deposit Address"), r(), i(388, "div", 83), i(389, "div", 84), i(390, "p"), a(391, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(392, "div", 85), h(393, "input", 86), i(394, "div", 87), i(395, "button", 88), a(396, " COPY "), r(), r(), r(), r(), i(397, "div", 89), i(398, "div", 90), h(399, "img", 91), r(), i(400, "div", 92), h(401, "img", 93), r(), r(), r(), r(), r(), i(402, "div", 12), i(403, "div", 13), i(404, "h5", 14), a(405, "Latest Transactions"), r(), i(406, "div", 94), i(407, "table", 95), i(408, "thead"), i(409, "tr"), i(410, "th"), a(411, "No."), r(), i(412, "th"), a(413, "Date"), r(), i(414, "th"), a(415, "Status"), r(), i(416, "th"), a(417, "Amount"), r(), r(), r(), i(418, "tbody"), i(419, "tr"), i(420, "td"), a(421, "1"), r(), i(422, "td"), a(423, "25-04-2019"), r(), i(424, "td"), h(425, "i", 96), r(), i(426, "td"), a(427, "4.5454334"), r(), r(), i(428, "tr"), i(429, "td"), a(430, "2"), r(), i(431, "td"), a(432, "25-05-2019"), r(), i(433, "td"), h(434, "i", 96), r(), i(435, "td"), a(436, "0.5484468"), r(), r(), i(437, "tr"), i(438, "td"), a(439, "3"), r(), i(440, "td"), a(441, "25-06-2019"), r(), i(442, "td"), h(443, "i", 97), r(), i(444, "td"), a(445, "2.5454545"), r(), r(), i(446, "tr"), i(447, "td"), a(448, "4"), r(), i(449, "td"), a(450, "25-07-2019"), r(), i(451, "td"), h(452, "i", 96), r(), i(453, "td"), a(454, "1.45894147"), r(), r(), i(455, "tr"), i(456, "td"), a(457, "3"), r(), i(458, "td"), a(459, "25-08-2019"), r(), i(460, "td"), h(461, "i", 97), r(), i(462, "td"), a(463, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(464, "div", 99), i(465, "div", 12), i(466, "div", 13), i(467, "h5", 14), a(468, "Balances"), r(), i(469, "ul"), i(470, "li", 77), i(471, "div", 78), h(472, "i", 79), i(473, "h2"), a(474, "Total Equity"), r(), r(), i(475, "div"), i(476, "h3"), a(477, "7.342 BNB"), r(), r(), r(), i(478, "li", 77), i(479, "div", 78), h(480, "i", 80), i(481, "h2"), a(482, "Available Margin"), r(), r(), i(483, "div"), i(484, "h3"), a(485, "0.332 BNB"), r(), r(), r(), r(), i(486, "button", 81), a(487, "Deposit"), r(), i(488, "button", 82), a(489, "Withdraw"), r(), r(), r(), i(490, "div", 12), i(491, "div", 13), i(492, "h5", 14), a(493, "Wallet Deposit Address"), r(), i(494, "div", 83), i(495, "div", 84), i(496, "p"), a(497, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(498, "div", 85), h(499, "input", 86), i(500, "div", 87), i(501, "button", 88), a(502, " COPY "), r(), r(), r(), r(), i(503, "div", 89), i(504, "div", 90), h(505, "img", 91), r(), i(506, "div", 92), h(507, "img", 93), r(), r(), r(), r(), r(), i(508, "div", 12), i(509, "div", 13), i(510, "h5", 14), a(511, "Latest Transactions"), r(), i(512, "div", 94), i(513, "table", 95), i(514, "thead"), i(515, "tr"), i(516, "th"), a(517, "No."), r(), i(518, "th"), a(519, "Date"), r(), i(520, "th"), a(521, "Status"), r(), i(522, "th"), a(523, "Amount"), r(), r(), r(), i(524, "tbody"), i(525, "tr"), i(526, "td"), a(527, "1"), r(), i(528, "td"), a(529, "25-04-2019"), r(), i(530, "td"), h(531, "i", 96), r(), i(532, "td"), a(533, "4.5454334"), r(), r(), i(534, "tr"), i(535, "td"), a(536, "2"), r(), i(537, "td"), a(538, "25-05-2019"), r(), i(539, "td"), h(540, "i", 96), r(), i(541, "td"), a(542, "0.5484468"), r(), r(), i(543, "tr"), i(544, "td"), a(545, "3"), r(), i(546, "td"), a(547, "25-06-2019"), r(), i(548, "td"), h(549, "i", 97), r(), i(550, "td"), a(551, "2.5454545"), r(), r(), i(552, "tr"), i(553, "td"), a(554, "4"), r(), i(555, "td"), a(556, "25-07-2019"), r(), i(557, "td"), h(558, "i", 96), r(), i(559, "td"), a(560, "1.45894147"), r(), r(), i(561, "tr"), i(562, "td"), a(563, "3"), r(), i(564, "td"), a(565, "25-08-2019"), r(), i(566, "td"), h(567, "i", 97), r(), i(568, "td"), a(569, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(570, "div", 100), i(571, "div", 12), i(572, "div", 13), i(573, "h5", 14), a(574, "Balances"), r(), i(575, "ul"), i(576, "li", 77), i(577, "div", 78), h(578, "i", 79), i(579, "h2"), a(580, "Total Equity"), r(), r(), i(581, "div"), i(582, "h3"), a(583, "4.3344 TRX"), r(), r(), r(), i(584, "li", 77), i(585, "div", 78), h(586, "i", 80), i(587, "h2"), a(588, "Available Margin"), r(), r(), i(589, "div"), i(590, "h3"), a(591, "1.453 TRX"), r(), r(), r(), r(), i(592, "button", 81), a(593, "Deposit"), r(), i(594, "button", 82), a(595, "Withdraw"), r(), r(), r(), i(596, "div", 12), i(597, "div", 13), i(598, "h5", 14), a(599, "Wallet Deposit Address"), r(), i(600, "div", 83), i(601, "div", 84), i(602, "p"), a(603, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(604, "div", 85), h(605, "input", 86), i(606, "div", 87), i(607, "button", 88), a(608, " COPY "), r(), r(), r(), r(), i(609, "div", 89), i(610, "div", 90), h(611, "img", 91), r(), i(612, "div", 92), h(613, "img", 93), r(), r(), r(), r(), r(), i(614, "div", 12), i(615, "div", 13), i(616, "h5", 14), a(617, "Latest Transactions"), r(), i(618, "div", 94), i(619, "table", 95), i(620, "thead"), i(621, "tr"), i(622, "th"), a(623, "No."), r(), i(624, "th"), a(625, "Date"), r(), i(626, "th"), a(627, "Status"), r(), i(628, "th"), a(629, "Amount"), r(), r(), r(), i(630, "tbody"), i(631, "tr"), i(632, "td"), a(633, "1"), r(), i(634, "td"), a(635, "25-04-2019"), r(), i(636, "td"), h(637, "i", 96), r(), i(638, "td"), a(639, "4.5454334"), r(), r(), i(640, "tr"), i(641, "td"), a(642, "2"), r(), i(643, "td"), a(644, "25-05-2019"), r(), i(645, "td"), h(646, "i", 96), r(), i(647, "td"), a(648, "0.5484468"), r(), r(), i(649, "tr"), i(650, "td"), a(651, "3"), r(), i(652, "td"), a(653, "25-06-2019"), r(), i(654, "td"), h(655, "i", 97), r(), i(656, "td"), a(657, "2.5454545"), r(), r(), i(658, "tr"), i(659, "td"), a(660, "4"), r(), i(661, "td"), a(662, "25-07-2019"), r(), i(663, "td"), h(664, "i", 96), r(), i(665, "td"), a(666, "1.45894147"), r(), r(), i(667, "tr"), i(668, "td"), a(669, "3"), r(), i(670, "td"), a(671, "25-08-2019"), r(), i(672, "td"), h(673, "i", 97), r(), i(674, "td"), a(675, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(676, "div", 101), i(677, "div", 12), i(678, "div", 13), i(679, "h5", 14), a(680, "Balances"), r(), i(681, "ul"), i(682, "li", 77), i(683, "div", 78), h(684, "i", 79), i(685, "h2"), a(686, "Total Equity"), r(), r(), i(687, "div"), i(688, "h3"), a(689, "33.35 EOS"), r(), r(), r(), i(690, "li", 77), i(691, "div", 78), h(692, "i", 80), i(693, "h2"), a(694, "Available Margin"), r(), r(), i(695, "div"), i(696, "h3"), a(697, "4.445 EOS"), r(), r(), r(), r(), i(698, "button", 81), a(699, "Deposit"), r(), i(700, "button", 82), a(701, "Withdraw"), r(), r(), r(), i(702, "div", 12), i(703, "div", 13), i(704, "h5", 14), a(705, "Wallet Deposit Address"), r(), i(706, "div", 83), i(707, "div", 84), i(708, "p"), a(709, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(710, "div", 85), h(711, "input", 86), i(712, "div", 87), i(713, "button", 88), a(714, " COPY "), r(), r(), r(), r(), i(715, "div", 89), i(716, "div", 90), h(717, "img", 91), r(), i(718, "div", 92), h(719, "img", 93), r(), r(), r(), r(), r(), i(720, "div", 12), i(721, "div", 13), i(722, "h5", 14), a(723, "Latest Transactions"), r(), i(724, "div", 94), i(725, "table", 95), i(726, "thead"), i(727, "tr"), i(728, "th"), a(729, "No."), r(), i(730, "th"), a(731, "Date"), r(), i(732, "th"), a(733, "Status"), r(), i(734, "th"), a(735, "Amount"), r(), r(), r(), i(736, "tbody"), i(737, "tr"), i(738, "td"), a(739, "1"), r(), i(740, "td"), a(741, "25-04-2019"), r(), i(742, "td"), h(743, "i", 96), r(), i(744, "td"), a(745, "4.5454334"), r(), r(), i(746, "tr"), i(747, "td"), a(748, "2"), r(), i(749, "td"), a(750, "25-05-2019"), r(), i(751, "td"), h(752, "i", 96), r(), i(753, "td"), a(754, "0.5484468"), r(), r(), i(755, "tr"), i(756, "td"), a(757, "3"), r(), i(758, "td"), a(759, "25-06-2019"), r(), i(760, "td"), h(761, "i", 97), r(), i(762, "td"), a(763, "2.5454545"), r(), r(), i(764, "tr"), i(765, "td"), a(766, "4"), r(), i(767, "td"), a(768, "25-07-2019"), r(), i(769, "td"), h(770, "i", 96), r(), i(771, "td"), a(772, "1.45894147"), r(), r(), i(773, "tr"), i(774, "td"), a(775, "3"), r(), i(776, "td"), a(777, "25-08-2019"), r(), i(778, "td"), h(779, "i", 97), r(), i(780, "td"), a(781, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(782, "div", 102), i(783, "div", 12), i(784, "div", 13), i(785, "h5", 14), a(786, "Balances"), r(), i(787, "ul"), i(788, "li", 77), i(789, "div", 78), h(790, "i", 79), i(791, "h2"), a(792, "Total Equity"), r(), r(), i(793, "div"), i(794, "h3"), a(795, "34.333 XMR"), r(), r(), r(), i(796, "li", 77), i(797, "div", 78), h(798, "i", 80), i(799, "h2"), a(800, "Available Margin"), r(), r(), i(801, "div"), i(802, "h3"), a(803, "2.354 XMR"), r(), r(), r(), r(), i(804, "button", 81), a(805, "Deposit"), r(), i(806, "button", 82), a(807, "Withdraw"), r(), r(), r(), i(808, "div", 12), i(809, "div", 13), i(810, "h5", 14), a(811, "Wallet Deposit Address"), r(), i(812, "div", 83), i(813, "div", 84), i(814, "p"), a(815, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(816, "div", 85), h(817, "input", 86), i(818, "div", 87), i(819, "button", 88), a(820, " COPY "), r(), r(), r(), r(), i(821, "div", 89), i(822, "div", 90), h(823, "img", 91), r(), i(824, "div", 92), h(825, "img", 93), r(), r(), r(), r(), r(), i(826, "div", 12), i(827, "div", 13), i(828, "h5", 14), a(829, "Latest Transactions"), r(), i(830, "div", 94), i(831, "table", 95), i(832, "thead"), i(833, "tr"), i(834, "th"), a(835, "No."), r(), i(836, "th"), a(837, "Date"), r(), i(838, "th"), a(839, "Status"), r(), i(840, "th"), a(841, "Amount"), r(), r(), r(), i(842, "tbody"), i(843, "tr"), i(844, "td"), a(845, "1"), r(), i(846, "td"), a(847, "25-04-2019"), r(), i(848, "td"), h(849, "i", 96), r(), i(850, "td"), a(851, "4.5454334"), r(), r(), i(852, "tr"), i(853, "td"), a(854, "2"), r(), i(855, "td"), a(856, "25-05-2019"), r(), i(857, "td"), h(858, "i", 96), r(), i(859, "td"), a(860, "0.5484468"), r(), r(), i(861, "tr"), i(862, "td"), a(863, "3"), r(), i(864, "td"), a(865, "25-06-2019"), r(), i(866, "td"), h(867, "i", 97), r(), i(868, "td"), a(869, "2.5454545"), r(), r(), i(870, "tr"), i(871, "td"), a(872, "4"), r(), i(873, "td"), a(874, "25-07-2019"), r(), i(875, "td"), h(876, "i", 96), r(), i(877, "td"), a(878, "1.45894147"), r(), r(), i(879, "tr"), i(880, "td"), a(881, "3"), r(), i(882, "td"), a(883, "25-08-2019"), r(), i(884, "td"), h(885, "i", 97), r(), i(886, "td"), a(887, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), i(888, "div", 103), i(889, "div", 12), i(890, "div", 13), i(891, "h5", 14), a(892, "Balances"), r(), i(893, "ul"), i(894, "li", 77), i(895, "div", 78), h(896, "i", 79), i(897, "h2"), a(898, "Total Equity"), r(), r(), i(899, "div"), i(900, "h3"), a(901, "86.577 KCS"), r(), r(), r(), i(902, "li", 77), i(903, "div", 78), h(904, "i", 80), i(905, "h2"), a(906, "Available Margin"), r(), r(), i(907, "div"), i(908, "h3"), a(909, "5.78 KCS"), r(), r(), r(), r(), i(910, "button", 81), a(911, "Deposit"), r(), i(912, "button", 82), a(913, "Withdraw"), r(), r(), r(), i(914, "div", 12), i(915, "div", 13), i(916, "h5", 14), a(917, "Wallet Deposit Address"), r(), i(918, "div", 83), i(919, "div", 84), i(920, "p"), a(921, " Deposits to this address are unlimited. Note that you may not be able to withdraw all of your funds at once if you deposit more than your daily withdrawal limit. "), r(), i(922, "div", 85), h(923, "input", 86), i(924, "div", 87), i(925, "button", 88), a(926, " COPY "), r(), r(), r(), r(), i(927, "div", 89), i(928, "div", 90), h(929, "img", 91), r(), i(930, "div", 92), h(931, "img", 93), r(), r(), r(), r(), r(), i(932, "div", 12), i(933, "div", 13), i(934, "h5", 14), a(935, "Latest Transactions"), r(), i(936, "div", 94), i(937, "table", 95), i(938, "thead"), i(939, "tr"), i(940, "th"), a(941, "No."), r(), i(942, "th"), a(943, "Date"), r(), i(944, "th"), a(945, "Status"), r(), i(946, "th"), a(947, "Amount"), r(), r(), r(), i(948, "tbody"), i(949, "tr"), i(950, "td"), a(951, "1"), r(), i(952, "td"), a(953, "25-04-2019"), r(), i(954, "td"), h(955, "i", 96), r(), i(956, "td"), a(957, "4.5454334"), r(), r(), i(958, "tr"), i(959, "td"), a(960, "2"), r(), i(961, "td"), a(962, "25-05-2019"), r(), i(963, "td"), h(964, "i", 96), r(), i(965, "td"), a(966, "0.5484468"), r(), r(), i(967, "tr"), i(968, "td"), a(969, "3"), r(), i(970, "td"), a(971, "25-06-2019"), r(), i(972, "td"), h(973, "i", 97), r(), i(974, "td"), a(975, "2.5454545"), r(), r(), i(976, "tr"), i(977, "td"), a(978, "4"), r(), i(979, "td"), a(980, "25-07-2019"), r(), i(981, "td"), h(982, "i", 96), r(), i(983, "td"), a(984, "1.45894147"), r(), r(), i(985, "tr"), i(986, "td"), a(987, "3"), r(), i(988, "td"), a(989, "25-08-2019"), r(), i(990, "td"), h(991, "i", 97), r(), i(992, "td"), a(993, "2.5454545"), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), i(994, "div", 104), i(995, "div", 12), i(996, "div", 13), i(997, "h5", 14), a(998, "Notifications"), r(), i(999, "div", 105), i(1e3, "ul"), i(1001, "li"), i(1002, "div", 106), i(1003, "p"), a(1004, "Update price"), r(), i(1005, "span"), a(1006, " Get the update price in your dashboard "), r(), r(), i(1007, "div", 107), h(1008, "input", 108), h(1009, "label", 109), r(), r(), i(1010, "li"), i(1011, "div", 106), i(1012, "p"), a(1013, "2FA"), r(), i(1014, "span"), a(1015, " Unable two factor authentication service "), r(), r(), i(1016, "div", 107), h(1017, "input", 110), h(1018, "label", 111), r(), r(), i(1019, "li"), i(1020, "div", 106), i(1021, "p"), a(1022, "Latest news"), r(), i(1023, "span"), a(1024, "Get the latest news in your mail"), r(), r(), i(1025, "div", 107), h(1026, "input", 112), h(1027, "label", 113), r(), r(), i(1028, "li"), i(1029, "div", 106), i(1030, "p"), a(1031, "Email Service"), r(), i(1032, "span"), a(1033, "Get security code in your mail"), r(), r(), i(1034, "div", 107), h(1035, "input", 114), h(1036, "label", 115), r(), r(), i(1037, "li"), i(1038, "div", 106), i(1039, "p"), a(1040, "Phone Notify"), r(), i(1041, "span"), a(1042, " Get transition notification in your phone "), r(), r(), i(1043, "div", 107), h(1044, "input", 116), h(1045, "label", 117), r(), r(), r(), r(), r(), r(), i(1046, "div", 118), i(1047, "div", 13), i(1048, "h5", 14), a(1049, "Create API Key"), r(), i(1050, "div", 2), i(1051, "div", 20), i(1052, "label", 119), a(1053, " Generate key name "), r(), h(1054, "input", 120), r(), i(1055, "div", 20), i(1056, "label", 121), a(1057, " Confirm password "), r(), h(1058, "input", 122), r(), i(1059, "div", 34), h(1060, "input", 123), r(), r(), r(), r(), i(1061, "div", 12), i(1062, "div", 13), i(1063, "h5", 14), a(1064, "Your API Keys"), r(), i(1065, "div", 94), i(1066, "table", 95), i(1067, "thead"), i(1068, "tr"), i(1069, "th"), a(1070, "No."), r(), i(1071, "th"), a(1072, "Key"), r(), i(1073, "th"), a(1074, "Status"), r(), i(1075, "th"), a(1076, "Action"), r(), r(), r(), i(1077, "tbody"), i(1078, "tr"), i(1079, "td"), a(1080, "1"), r(), i(1081, "td"), a(1082, "zRmWVcrAZ1C0RZkFMu7K5v0KWC9jUJLt"), r(), i(1083, "td"), i(1084, "div", 107), h(1085, "input", 124), h(1086, "label", 125), r(), r(), i(1087, "td"), h(1088, "i", 126), r(), r(), i(1089, "tr"), i(1090, "td"), a(1091, "2"), r(), i(1092, "td"), a(1093, "Rv5dgnKdmVPyHwxeExBYz8uFwYQz3Jvg"), r(), i(1094, "td"), i(1095, "div", 107), h(1096, "input", 127), h(1097, "label", 128), r(), r(), i(1098, "td"), h(1099, "i", 126), r(), r(), i(1100, "tr"), i(1101, "td"), a(1102, "3"), r(), i(1103, "td"), a(1104, "VxEYIs1HwgmtKTUMA4aknjSEjjePZIWu"), r(), i(1105, "td"), i(1106, "div", 107), h(1107, "input", 129), h(1108, "label", 130), r(), r(), i(1109, "td"), h(1110, "i", 126), r(), r(), i(1111, "tr"), i(1112, "td"), a(1113, "4"), r(), i(1114, "td"), a(1115, "M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o"), r(), i(1116, "td"), i(1117, "div", 107), h(1118, "input", 131), h(1119, "label", 132), r(), r(), i(1120, "td"), h(1121, "i", 126), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r())
                        },
                        styles: [""]
                    }), t
                })()
            }, {
                path: "**",
                component: (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-not-found"]
                        ],
                        decls: 9,
                        vars: 0,
                        consts: [
                            [1, "error-page", "vh-100", "d-flex", "justify-content-center", "text-center"],
                            [1, "my-auto"],
                            ["routerLink", "/", 1, "btn"],
                            [1, "icon", "ion-md-home"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "div", 0), i(1, "div", 1), i(2, "h2"), a(3, "404"), r(), i(4, "p"), a(5, "Oops something went wrong"), r(), i(6, "a", 2), a(7, " Back to Home "), h(8, "i", 3), r(), r(), r())
                        },
                        directives: [Ot],
                        styles: [""]
                    }), t
                })()
            }];
            let aF = (() => {
                class t {}
                return t.\u0275fac = function (n) {
                    return new(n || t)
                }, t.\u0275mod = hi({
                    type: t
                }), t.\u0275inj = En({
                    imports: [
                        [P4.forRoot(oF)], P4
                    ]
                }), t
            })();
            class cF {
                constructor(e, n) {
                    this.compare = e, this.keySelector = n
                }
                call(e, n) {
                    return n.subscribe(new uF(e, this.compare, this.keySelector))
                }
            }
            class uF extends pe {
                constructor(e, n, s) {
                    super(e), this.keySelector = s, this.hasKey = !1, "function" == typeof n && (this.compare = n)
                }
                compare(e, n) {
                    return e === n
                }
                _next(e) {
                    let n;
                    try {
                        const {
                            keySelector: o
                        } = this;
                        n = o ? o(e) : e
                    } catch (o) {
                        return this.destination.error(o)
                    }
                    let s = !1;
                    if (this.hasKey) try {
                        const {
                            compare: o
                        } = this;
                        s = o(this.key, n)
                    } catch (o) {
                        return this.destination.error(o)
                    } else this.hasKey = !0;
                    s || (this.key = n, this.destination.next(e))
                }
            }
            const L4 = new te("DARK_MODE_OPTIONS"),
                dF = {
                    darkModeClass: "dark-mode",
                    lightModeClass: "light-mode",
                    preloadingClass: "dark-mode-preloading",
                    storageKey: "dark-mode",
                    element: document.body
                };
            let F4 = (() => {
                    class t {
                        matchMedia(n) {
                            return window.matchMedia(n)
                        }
                        prefersDarkMode() {
                            return this.matchMedia("(prefers-color-scheme: dark)").matches
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275prov = W({
                        factory: function () {
                            return new t
                        },
                        token: t,
                        providedIn: "root"
                    }), t
                })(),
                pF = (() => {
                    class t {
                        constructor(n, s, o) {
                            this.rendererFactory = n, this.mediaQueryService = s, this.providedOptions = o, this.options = Object.assign(Object.assign({}, dF), this.providedOptions || {}), this.renderer = this.rendererFactory.createRenderer(null, null), this.darkModeSubject$ = new Qt(this.getInitialDarkModeValue()), this.darkModeSubject$.getValue() ? this.enable() : this.disable(), this.removePreloadingClass()
                        }
                        get darkMode$() {
                            return this.darkModeSubject$.asObservable().pipe(n => n.lift(new cF(void 0, void 0)))
                        }
                        toggle() {
                            this.darkModeSubject$.getValue() ? this.disable() : this.enable()
                        }
                        enable() {
                            const {
                                element: n,
                                darkModeClass: s,
                                lightModeClass: o
                            } = this.options;
                            this.renderer.removeClass(n, o), this.renderer.addClass(n, s), this.saveDarkModeToStorage(!0), this.darkModeSubject$.next(!0)
                        }
                        disable() {
                            const {
                                element: n,
                                darkModeClass: s,
                                lightModeClass: o
                            } = this.options;
                            this.renderer.removeClass(n, s), this.renderer.addClass(n, o), this.saveDarkModeToStorage(!1), this.darkModeSubject$.next(!1)
                        }
                        getInitialDarkModeValue() {
                            const n = this.getDarkModeFromStorage();
                            return function (t) {
                                return null == t
                            }(n) ? this.mediaQueryService.prefersDarkMode() : n
                        }
                        saveDarkModeToStorage(n) {
                            localStorage.setItem(this.options.storageKey, JSON.stringify({
                                darkMode: n
                            }))
                        }
                        getDarkModeFromStorage() {
                            var n;
                            const s = localStorage.getItem(this.options.storageKey);
                            if (s) try {
                                return null === (n = JSON.parse(s)) || void 0 === n ? void 0 : n.darkMode
                            } catch (o) {
                                console.error("Invalid darkMode localStorage item:", s, "falling back to color scheme media query")
                            }
                            return null
                        }
                        removePreloadingClass() {
                            setTimeout(() => {
                                this.renderer.removeClass(this.options.element, this.options.preloadingClass)
                            })
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)(A(gs), A(F4), A(L4, 8))
                    }, t.\u0275prov = W({
                        factory: function () {
                            return new t(A(gs), A(F4), A(L4, 8))
                        },
                        token: t,
                        providedIn: "root"
                    }), t
                })(),
                gF = (() => {
                    class t {
                        constructor(n) {
                            this.darkModeService = n, this.darkMode$ = this.darkModeService.darkMode$
                        }
                        onToggle() {
                            this.darkModeService.toggle()
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)(N(pF))
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-header"]
                        ],
                        decls: 150,
                        vars: 3,
                        consts: [
                            [1, "light-bb"],
                            [1, "navbar", "navbar-expand-lg", "navbar-light"],
                            ["routerLink", "/", 1, "navbar-brand"],
                            ["src", "../../../assets/img/logo-dark.svg", "alt", "", 1, "darkMode"],
                            ["src", "../../../assets/img/logo-light.svg", "alt", "", 1, "lightMode"],
                            ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#headerNav", "aria-controls", "headerNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"],
                            [1, "navbar-toggler-icon"],
                            ["id", "headerNav", 1, "collapse", "navbar-collapse"],
                            [1, "navbar-nav", "me-auto"],
                            [1, "nav-item"],
                            ["aria-current", "page", "routerLink", "/", 1, "nav-link", "active"],
                            ["routerLink", "markets", 1, "nav-link"],
                            [1, "nav-item", "dropdown"],
                            ["href", "#", "id", "navbarDropdown1", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"],
                            ["aria-labelledby", "navbarDropdown1", 1, "dropdown-menu", "dropdown-menu-end"],
                            ["routerLink", "profile", 1, "dropdown-item"],
                            ["routerLink", "wallet", 1, "dropdown-item"],
                            ["routerLink", "settings", 1, "dropdown-item"],
                            ["href", "#", "id", "navbarDropdown2", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"],
                            ["aria-labelledby", "navbarDropdown2", 1, "dropdown-menu", "dropdown-menu-end"],
                            ["routerLink", "login", 1, "dropdown-item"],
                            ["routerLink", "sign-up", 1, "dropdown-item"],
                            ["routerLink", "lock", 1, "dropdown-item"],
                            ["routerLink", "otp-number", 1, "dropdown-item"],
                            ["routerLink", "otp-verify", 1, "dropdown-item"],
                            ["routerLink", "reset", 1, "dropdown-item"],
                            ["routerLink", "404", 1, "dropdown-item"],
                            [1, "navbar-nav", "ml-auto"],
                            [1, "nav-item", "header-custom-icon"],
                            ["id", "darkMode", "type", "checkbox", 1, "theme-toggle-input", 3, "checked", "change"],
                            ["href", "#", 1, "nav-link"],
                            ["for", "darkMode", 1, "theme-toggle-input-label"],
                            [1, "icon", "ion-md-moon", "darkMode"],
                            [1, "icon", "ion-md-sunny", "lightMode"],
                            [1, "nav-item", "dropdown", "header-custom-icon"],
                            ["href", "#", "id", "navbarDropdown4", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"],
                            [1, "icon", "ion-md-notifications"],
                            [1, "circle-pulse"],
                            ["aria-labelledby", "navbarDropdown4", 1, "dropdown-menu", "dropdown-menu-end"],
                            [1, "dropdown-header", "d-flex", "align-items-center", "justify-content-between"],
                            [1, "mb-0", "font-weight-medium"],
                            ["href", "#", 1, "text-muted"],
                            [1, "dropdown-body"],
                            ["href", "#", 1, "dropdown-item"],
                            [1, "icon"],
                            [1, "icon", "ion-md-lock"],
                            [1, "content"],
                            [1, "sub-text", "text-muted"],
                            [1, "icon", "ion-md-alert"],
                            [1, "icon", "ion-logo-android"],
                            [1, "icon", "ion-logo-bitcoin"],
                            [1, "icon", "ion-logo-usd"],
                            [1, "dropdown-footer", "d-flex", "align-items-center", "justify-content-center"],
                            ["href", "#"],
                            [1, "nav-item", "dropdown", "header-img-icon"],
                            ["href", "#", "id", "navbarDropdown5", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"],
                            ["src", "../../../assets/img/avatar.svg", "alt", "avatar", 1, "header-avatar-image"],
                            ["aria-labelledby", "navbarDropdown5", 1, "dropdown-menu", "dropdown-menu-end"],
                            ["routerLink", "profile"],
                            [1, "dropdown-header", "d-flex", "flex-column", "align-items-center"],
                            [1, "figure", "mb-3"],
                            ["src", "../../../assets/img/avatar.svg", "alt", ""],
                            [1, "info", "text-center"],
                            [1, "name", "font-weight-bold", "mb-0"],
                            [1, "email", "text-muted", "mb-3"],
                            [1, "profile-nav"],
                            ["routerLink", "/profile", 1, "nav-link"],
                            [1, "icon", "ion-md-person"],
                            ["routerLink", "wallet", 1, "nav-link"],
                            [1, "icon", "ion-md-wallet"],
                            ["routerLink", "settings", 1, "nav-link"],
                            [1, "icon", "ion-md-settings"],
                            ["routerLink", "/", 1, "nav-link", "red"],
                            [1, "icon", "ion-md-power"]
                        ],
                        template: function (n, s) {
                            1 & n && (i(0, "header", 0), i(1, "nav", 1), i(2, "a", 2), h(3, "img", 3), h(4, "img", 4), r(), i(5, "button", 5), h(6, "span", 6), r(), i(7, "div", 7), i(8, "ul", 8), i(9, "li", 9), i(10, "a", 10), a(11, "Exchange"), r(), r(), i(12, "li", 9), i(13, "a", 11), a(14, "Markets"), r(), r(), i(15, "li", 12), i(16, "a", 13), a(17, " Dashboard "), r(), i(18, "ul", 14), i(19, "li"), i(20, "a", 15), a(21, "Profile"), r(), r(), i(22, "li"), i(23, "a", 16), a(24, "Wallet"), r(), r(), i(25, "li"), i(26, "a", 17), a(27, "Settings"), r(), r(), r(), r(), i(28, "li", 12), i(29, "a", 18), a(30, " Pages "), r(), i(31, "ul", 19), i(32, "li"), i(33, "a", 20), a(34, "Login"), r(), r(), i(35, "li"), i(36, "a", 21), a(37, "Sign up"), r(), r(), i(38, "li"), i(39, "a", 22), a(40, "Lock"), r(), r(), i(41, "li"), i(42, "a", 23), a(43, "OTP Number"), r(), r(), i(44, "li"), i(45, "a", 24), a(46, "OTP Verify"), r(), r(), i(47, "li"), i(48, "a", 25), a(49, "Reset"), r(), r(), i(50, "li"), i(51, "a", 26), a(52, "404"), r(), r(), r(), r(), r(), i(53, "ul", 27), i(54, "li", 28), i(55, "input", 29), ei("change", function () {
                                return s.onToggle()
                            }), function (t, e) {
                                const n = J();
                                let s;
                                const o = t + 20;
                                n.firstCreatePass ? (s = function (t, e) {
                                    if (e)
                                        for (let n = e.length - 1; n >= 0; n--) {
                                            const s = e[n];
                                            if (t === s.name) return s
                                        }
                                    throw new Hi("302", `The pipe '${t}' could not be found!`)
                                }(e, n.pipeRegistry), n.data[o] = s, s.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(o, s.onDestroy)) : s = n.data[o];
                                const l = s.factory || (s.factory = Ki(s.type)),
                                    c = ui(N);
                                try {
                                    const u = tl(!1),
                                        d = l();
                                    tl(u),
                                        function (t, e, n, s) {
                                            n >= t.data.length && (t.data[n] = null, t.blueprint[n] = null), e[n] = s
                                        }(n, w(), o, d)
                                } finally {
                                    ui(c)
                                }
                            }(56, "async"), r(), i(57, "a", 30), i(58, "label", 31), h(59, "i", 32), h(60, "i", 33), r(), r(), r(), i(61, "li", 34), i(62, "a", 35), h(63, "i", 36), h(64, "span", 37), r(), i(65, "ul", 38), i(66, "div", 39), i(67, "p", 40), a(68, "6 New Notifications"), r(), i(69, "a", 41), a(70, "Clear all"), r(), r(), i(71, "div", 42), i(72, "a", 43), i(73, "div", 44), h(74, "i", 45), r(), i(75, "div", 46), i(76, "p"), a(77, "Account password change"), r(), i(78, "p", 47), a(79, "5 sec ago"), r(), r(), r(), i(80, "a", 43), i(81, "div", 44), h(82, "i", 48), r(), i(83, "div", 46), i(84, "p"), a(85, "Solve the security issue"), r(), i(86, "p", 47), a(87, "10 min ago"), r(), r(), r(), i(88, "a", 43), i(89, "div", 44), h(90, "i", 49), r(), i(91, "div", 46), i(92, "p"), a(93, "Download android app"), r(), i(94, "p", 47), a(95, "1 hrs ago"), r(), r(), r(), i(96, "a", 43), i(97, "div", 44), h(98, "i", 50), r(), i(99, "div", 46), i(100, "p"), a(101, "Bitcoin price is high now"), r(), i(102, "p", 47), a(103, "2 hrs ago"), r(), r(), r(), i(104, "a", 43), i(105, "div", 44), h(106, "i", 51), r(), i(107, "div", 46), i(108, "p"), a(109, "Payment completed"), r(), i(110, "p", 47), a(111, "4 hrs ago"), r(), r(), r(), r(), i(112, "div", 52), i(113, "a", 53), a(114, "View all"), r(), r(), r(), r(), i(115, "li", 54), i(116, "a", 55), h(117, "img", 56), r(), i(118, "ul", 57), i(119, "a", 58), i(120, "div", 59), i(121, "div", 60), h(122, "img", 61), r(), i(123, "div", 62), i(124, "p", 63), a(125, "Tony Stark"), r(), i(126, "p", 64), a(127, "tonystark@gmail.com"), r(), r(), r(), r(), i(128, "div", 42), i(129, "ul", 65), i(130, "li", 9), i(131, "a", 66), h(132, "i", 67), i(133, "span"), a(134, "Profile"), r(), r(), r(), i(135, "li", 9), i(136, "a", 68), h(137, "i", 69), i(138, "span"), a(139, "My Wallet"), r(), r(), r(), i(140, "li", 9), i(141, "a", 70), h(142, "i", 71), i(143, "span"), a(144, "Settings"), r(), r(), r(), i(145, "li", 9), i(146, "a", 72), h(147, "i", 73), i(148, "span"), a(149, "Log Out"), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()), 2 & n && (sn(55), $t("checked", Hy(56, 1, s.darkMode$)))
                        },
                        directives: [Ot],
                        pipes: [m_],
                        styles: [""]
                    }), t
                })(),
                mF = (() => {
                    class t {
                        constructor() {
                            this.title = "crypo"
                        }
                    }
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275cmp = se({
                        type: t,
                        selectors: [
                            ["app-root"]
                        ],
                        decls: 2,
                        vars: 0,
                        template: function (n, s) {
                            1 & n && (h(0, "app-header"), h(1, "router-outlet"))
                        },
                        directives: [gF, Gp],
                        styles: [""]
                    }), t
                })(),
                vF = (() => {
                    class t {}
                    return t.\u0275fac = function (n) {
                        return new(n || t)
                    }, t.\u0275mod = hi({
                        type: t,
                        bootstrap: [mF]
                    }), t.\u0275inj = En({
                        providers: [],
                        imports: [
                            [VM, aF, uR]
                        ]
                    }), t
                })();
            (function () {
                if (y2) throw new Error("Cannot enable prod mode after platform setup.");
                v2 = !1
            })(), LM().bootstrapModule(vF).catch(t => console.error(t))
        }
    },
    Je => {
        Je(Je.s = 988)
    }
]);