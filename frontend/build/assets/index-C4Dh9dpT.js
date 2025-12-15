var Tk=Object.defineProperty;var Bp=e=>{throw TypeError(e)};var Pk=(e,t,n)=>t in e?Tk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Fn=(e,t,n)=>Pk(e,typeof t!="symbol"?t+"":t,n),Yc=(e,t,n)=>t.has(e)||Bp("Cannot "+n);var A=(e,t,n)=>(Yc(e,t,"read from private field"),n?n.call(e):t.get(e)),de=(e,t,n)=>t.has(e)?Bp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ee=(e,t,n,r)=>(Yc(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),ot=(e,t,n)=>(Yc(e,t,"access private method"),n);var wa=(e,t,n,r)=>({set _(o){ee(e,t,o,n)},get _(){return A(e,t,r)}});function jk(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function ra(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tv={exports:{}},oc={},Pv={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),Nk=Symbol.for("react.portal"),Ek=Symbol.for("react.fragment"),Mk=Symbol.for("react.strict_mode"),Ak=Symbol.for("react.profiler"),Ik=Symbol.for("react.provider"),Rk=Symbol.for("react.context"),Dk=Symbol.for("react.forward_ref"),Lk=Symbol.for("react.suspense"),Ok=Symbol.for("react.memo"),Fk=Symbol.for("react.lazy"),_p=Symbol.iterator;function Bk(e){return e===null||typeof e!="object"?null:(e=_p&&e[_p]||e["@@iterator"],typeof e=="function"?e:null)}var jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nv=Object.assign,Ev={};function Ii(e,t,n){this.props=e,this.context=t,this.refs=Ev,this.updater=n||jv}Ii.prototype.isReactComponent={};Ii.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ii.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mv(){}Mv.prototype=Ii.prototype;function Mh(e,t,n){this.props=e,this.context=t,this.refs=Ev,this.updater=n||jv}var Ah=Mh.prototype=new Mv;Ah.constructor=Mh;Nv(Ah,Ii.prototype);Ah.isPureReactComponent=!0;var Wp=Array.isArray,Av=Object.prototype.hasOwnProperty,Ih={current:null},Iv={key:!0,ref:!0,__self:!0,__source:!0};function Rv(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Av.call(t,r)&&!Iv.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:oa,type:e,key:i,ref:s,props:o,_owner:Ih.current}}function _k(e,t){return{$$typeof:oa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rh(e){return typeof e=="object"&&e!==null&&e.$$typeof===oa}function Wk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vp=/\/+/g;function Gc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wk(""+e.key):t.toString(36)}function qa(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case oa:case Nk:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Gc(s,0):r,Wp(o)?(n="",e!=null&&(n=e.replace(Vp,"$&/")+"/"),qa(o,t,n,"",function(u){return u})):o!=null&&(Rh(o)&&(o=_k(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Vp,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Wp(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+Gc(i,l);s+=qa(i,t,n,c,o)}else if(c=Bk(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+Gc(i,l++),s+=qa(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ba(e,t,n){if(e==null)return e;var r=[],o=0;return qa(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Vk(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},Ka={transition:null},Hk={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:Ih};function Dv(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:ba,forEach:function(e,t,n){ba(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ba(e,function(){t++}),t},toArray:function(e){return ba(e,function(t){return t})||[]},only:function(e){if(!Rh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ce.Component=Ii;ce.Fragment=Ek;ce.Profiler=Ak;ce.PureComponent=Mh;ce.StrictMode=Mk;ce.Suspense=Lk;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hk;ce.act=Dv;ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nv({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Ih.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Av.call(t,c)&&!Iv.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:oa,type:e.type,key:o,ref:i,props:r,_owner:s}};ce.createContext=function(e){return e={$$typeof:Rk,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ik,_context:e},e.Consumer=e};ce.createElement=Rv;ce.createFactory=function(e){var t=Rv.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:Dk,render:e}};ce.isValidElement=Rh;ce.lazy=function(e){return{$$typeof:Fk,_payload:{_status:-1,_result:e},_init:Vk}};ce.memo=function(e,t){return{$$typeof:Ok,type:e,compare:t===void 0?null:t}};ce.startTransition=function(e){var t=Ka.transition;Ka.transition={};try{e()}finally{Ka.transition=t}};ce.unstable_act=Dv;ce.useCallback=function(e,t){return vt.current.useCallback(e,t)};ce.useContext=function(e){return vt.current.useContext(e)};ce.useDebugValue=function(){};ce.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};ce.useEffect=function(e,t){return vt.current.useEffect(e,t)};ce.useId=function(){return vt.current.useId()};ce.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};ce.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};ce.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};ce.useMemo=function(e,t){return vt.current.useMemo(e,t)};ce.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};ce.useRef=function(e){return vt.current.useRef(e)};ce.useState=function(e){return vt.current.useState(e)};ce.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};ce.useTransition=function(){return vt.current.useTransition()};ce.version="18.3.1";Pv.exports=ce;var m=Pv.exports;const O=ra(m),ic=jk({__proto__:null,default:O},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zk=m,$k=Symbol.for("react.element"),Uk=Symbol.for("react.fragment"),Yk=Object.prototype.hasOwnProperty,Gk=zk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qk={key:!0,ref:!0,__self:!0,__source:!0};function Lv(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Yk.call(t,r)&&!qk.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:$k,type:e,key:i,ref:s,props:o,_owner:Gk.current}}oc.Fragment=Uk;oc.jsx=Lv;oc.jsxs=Lv;Tv.exports=oc;var a=Tv.exports,Ov={exports:{}},_t={},Fv={exports:{}},Bv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,I){var T=E.length;E.push(I);e:for(;0<T;){var C=T-1>>>1,D=E[C];if(0<o(D,I))E[C]=I,E[T]=D,T=C;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var I=E[0],T=E.pop();if(T!==I){E[0]=T;e:for(var C=0,D=E.length,F=D>>>1;C<F;){var W=2*(C+1)-1,q=E[W],U=W+1,H=E[U];if(0>o(q,T))U<D&&0>o(H,q)?(E[C]=H,E[U]=T,C=U):(E[C]=q,E[W]=T,C=W);else if(U<D&&0>o(H,T))E[C]=H,E[U]=T,C=U;else break e}}return I}function o(E,I){var T=E.sortIndex-I.sortIndex;return T!==0?T:E.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,h=null,p=3,f=!1,w=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(E){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=E)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function S(E){if(x=!1,y(E),!w)if(n(c)!==null)w=!0,G(k);else{var I=n(u);I!==null&&z(S,I.startTime-E)}}function k(E,I){w=!1,x&&(x=!1,g(N),N=-1),f=!0;var T=p;try{for(y(I),h=n(c);h!==null&&(!(h.expirationTime>I)||E&&!B());){var C=h.callback;if(typeof C=="function"){h.callback=null,p=h.priorityLevel;var D=C(h.expirationTime<=I);I=e.unstable_now(),typeof D=="function"?h.callback=D:h===n(c)&&r(c),y(I)}else r(c);h=n(c)}if(h!==null)var F=!0;else{var W=n(u);W!==null&&z(S,W.startTime-I),F=!1}return F}finally{h=null,p=T,f=!1}}var P=!1,j=null,N=-1,R=5,M=-1;function B(){return!(e.unstable_now()-M<R)}function V(){if(j!==null){var E=e.unstable_now();M=E;var I=!0;try{I=j(!0,E)}finally{I?$():(P=!1,j=null)}}else P=!1}var $;if(typeof v=="function")$=function(){v(V)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,X=_.port2;_.port1.onmessage=V,$=function(){X.postMessage(null)}}else $=function(){b(V,0)};function G(E){j=E,P||(P=!0,$())}function z(E,I){N=b(function(){E(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||f||(w=!0,G(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var T=p;p=I;try{return E()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,I){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var T=p;p=E;try{return I()}finally{p=T}},e.unstable_scheduleCallback=function(E,I,T){var C=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?C+T:C):T=C,E){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=T+D,E={id:d++,callback:I,priorityLevel:E,startTime:T,expirationTime:D,sortIndex:-1},T>C?(E.sortIndex=T,t(u,E),n(c)===null&&E===n(u)&&(x?(g(N),N=-1):x=!0,z(S,T-C))):(E.sortIndex=D,t(c,E),w||f||(w=!0,G(k))),E},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(E){var I=p;return function(){var T=p;p=I;try{return E.apply(this,arguments)}finally{p=T}}}})(Bv);Fv.exports=Bv;var Kk=Fv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qk=m,Ft=Kk;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _v=new Set,Ps={};function jo(e,t){vi(e,t),vi(e+"Capture",t)}function vi(e,t){for(Ps[e]=t,e=0;e<t.length;e++)_v.add(t[e])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=Object.prototype.hasOwnProperty,Jk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hp={},zp={};function Xk(e){return $u.call(zp,e)?!0:$u.call(Hp,e)?!1:Jk.test(e)?zp[e]=!0:(Hp[e]=!0,!1)}function Zk(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function eC(e,t,n,r){if(t===null||typeof t>"u"||Zk(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xt(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new xt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new xt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new xt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new xt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new xt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new xt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new xt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new xt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new xt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dh=/[\-:]([a-z])/g;function Lh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Dh,Lh);nt[t]=new xt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Dh,Lh);nt[t]=new xt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Dh,Lh);nt[t]=new xt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new xt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new xt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Oh(e,t,n,r){var o=nt.hasOwnProperty(t)?nt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(eC(t,n,o,r)&&(n=null),r||o===null?Xk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nr=Qk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),Fo=Symbol.for("react.portal"),Bo=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),Uu=Symbol.for("react.profiler"),Wv=Symbol.for("react.provider"),Vv=Symbol.for("react.context"),Bh=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),_h=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),Hv=Symbol.for("react.offscreen"),$p=Symbol.iterator;function Ui(e){return e===null||typeof e!="object"?null:(e=$p&&e[$p]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,qc;function is(e){if(qc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qc=t&&t[1]||""}return`
`+qc+e}var Kc=!1;function Qc(e,t){if(!e||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?is(e):""}function tC(e){switch(e.tag){case 5:return is(e.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return e=Qc(e.type,!1),e;case 11:return e=Qc(e.type.render,!1),e;case 1:return e=Qc(e.type,!0),e;default:return""}}function qu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bo:return"Fragment";case Fo:return"Portal";case Uu:return"Profiler";case Fh:return"StrictMode";case Yu:return"Suspense";case Gu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vv:return(e.displayName||"Context")+".Consumer";case Wv:return(e._context.displayName||"Context")+".Provider";case Bh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _h:return t=e.displayName||null,t!==null?t:qu(e.type)||"Memo";case pr:t=e._payload,e=e._init;try{return qu(e(t))}catch{}}return null}function nC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(t);case 8:return t===Fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Or(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rC(e){var t=zv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ka(e){e._valueTracker||(e._valueTracker=rC(e))}function $v(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ml(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ku(e,t){var n=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Up(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Or(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uv(e,t){t=t.checked,t!=null&&Oh(e,"checked",t,!1)}function Qu(e,t){Uv(e,t);var n=Or(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ju(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ju(e,t.type,Or(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ju(e,t,n){(t!=="number"||ml(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ss=Array.isArray;function ei(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Or(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(ss(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Or(n)}}function Yv(e,t){var n=Or(t.value),r=Or(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ca,qv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ca.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function js(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oC=["Webkit","ms","Moz","O"];Object.keys(hs).forEach(function(e){oC.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hs[t]=hs[e]})});function Kv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hs.hasOwnProperty(e)&&hs[e]?(""+t).trim():t+"px"}function Qv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Kv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var iC=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ed(e,t){if(t){if(iC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function td(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nd=null;function Wh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rd=null,ti=null,ni=null;function Kp(e){if(e=aa(e)){if(typeof rd!="function")throw Error(L(280));var t=e.stateNode;t&&(t=uc(t),rd(e.stateNode,e.type,t))}}function Jv(e){ti?ni?ni.push(e):ni=[e]:ti=e}function Xv(){if(ti){var e=ti,t=ni;if(ni=ti=null,Kp(e),t)for(e=0;e<t.length;e++)Kp(t[e])}}function Zv(e,t){return e(t)}function ex(){}var Jc=!1;function tx(e,t,n){if(Jc)return e(t,n);Jc=!0;try{return Zv(e,t,n)}finally{Jc=!1,(ti!==null||ni!==null)&&(ex(),Xv())}}function Ns(e,t){var n=e.stateNode;if(n===null)return null;var r=uc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var od=!1;if(Kn)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){od=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{od=!1}function sC(e,t,n,r,o,i,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var fs=!1,gl=null,yl=!1,id=null,aC={onError:function(e){fs=!0,gl=e}};function lC(e,t,n,r,o,i,s,l,c){fs=!1,gl=null,sC.apply(aC,arguments)}function cC(e,t,n,r,o,i,s,l,c){if(lC.apply(this,arguments),fs){if(fs){var u=gl;fs=!1,gl=null}else throw Error(L(198));yl||(yl=!0,id=u)}}function No(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qp(e){if(No(e)!==e)throw Error(L(188))}function uC(e){var t=e.alternate;if(!t){if(t=No(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Qp(o),e;if(i===r)return Qp(o),t;i=i.sibling}throw Error(L(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function rx(e){return e=uC(e),e!==null?ox(e):null}function ox(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ox(e);if(t!==null)return t;e=e.sibling}return null}var ix=Ft.unstable_scheduleCallback,Jp=Ft.unstable_cancelCallback,dC=Ft.unstable_shouldYield,hC=Ft.unstable_requestPaint,_e=Ft.unstable_now,fC=Ft.unstable_getCurrentPriorityLevel,Vh=Ft.unstable_ImmediatePriority,sx=Ft.unstable_UserBlockingPriority,vl=Ft.unstable_NormalPriority,pC=Ft.unstable_LowPriority,ax=Ft.unstable_IdlePriority,sc=null,En=null;function mC(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(sc,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:vC,gC=Math.log,yC=Math.LN2;function vC(e){return e>>>=0,e===0?32:31-(gC(e)/yC|0)|0}var Ta=64,Pa=4194304;function as(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=as(l):(i&=s,i!==0&&(r=as(i)))}else s=n&~o,s!==0?r=as(s):i!==0&&(r=as(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mn(t),o=1<<n,r|=e[n],t&=~o;return r}function xC(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wC(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-mn(i),l=1<<s,c=o[s];c===-1?(!(l&n)||l&r)&&(o[s]=xC(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function sd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lx(){var e=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),e}function Xc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ia(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mn(t),e[t]=n}function bC(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-mn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Hh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ge=0;function cx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ux,zh,dx,hx,fx,ad=!1,ja=[],jr=null,Nr=null,Er=null,Es=new Map,Ms=new Map,gr=[],SC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(e,t){switch(e){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ms.delete(t.pointerId)}}function Gi(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=aa(t),t!==null&&zh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function kC(e,t,n,r,o){switch(t){case"focusin":return jr=Gi(jr,e,t,n,r,o),!0;case"dragenter":return Nr=Gi(Nr,e,t,n,r,o),!0;case"mouseover":return Er=Gi(Er,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Es.set(i,Gi(Es.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ms.set(i,Gi(Ms.get(i)||null,e,t,n,r,o)),!0}return!1}function px(e){var t=io(e.target);if(t!==null){var n=No(t);if(n!==null){if(t=n.tag,t===13){if(t=nx(n),t!==null){e.blockedOn=t,fx(e.priority,function(){dx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ld(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nd=r,n.target.dispatchEvent(r),nd=null}else return t=aa(n),t!==null&&zh(t),e.blockedOn=n,!1;t.shift()}return!0}function Zp(e,t,n){Qa(e)&&n.delete(t)}function CC(){ad=!1,jr!==null&&Qa(jr)&&(jr=null),Nr!==null&&Qa(Nr)&&(Nr=null),Er!==null&&Qa(Er)&&(Er=null),Es.forEach(Zp),Ms.forEach(Zp)}function qi(e,t){e.blockedOn===t&&(e.blockedOn=null,ad||(ad=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,CC)))}function As(e){function t(o){return qi(o,e)}if(0<ja.length){qi(ja[0],e);for(var n=1;n<ja.length;n++){var r=ja[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jr!==null&&qi(jr,e),Nr!==null&&qi(Nr,e),Er!==null&&qi(Er,e),Es.forEach(t),Ms.forEach(t),n=0;n<gr.length;n++)r=gr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)px(n),n.blockedOn===null&&gr.shift()}var ri=nr.ReactCurrentBatchConfig,wl=!0;function TC(e,t,n,r){var o=ge,i=ri.transition;ri.transition=null;try{ge=1,$h(e,t,n,r)}finally{ge=o,ri.transition=i}}function PC(e,t,n,r){var o=ge,i=ri.transition;ri.transition=null;try{ge=4,$h(e,t,n,r)}finally{ge=o,ri.transition=i}}function $h(e,t,n,r){if(wl){var o=ld(e,t,n,r);if(o===null)lu(e,t,r,bl,n),Xp(e,r);else if(kC(o,e,t,n,r))r.stopPropagation();else if(Xp(e,r),t&4&&-1<SC.indexOf(e)){for(;o!==null;){var i=aa(o);if(i!==null&&ux(i),i=ld(e,t,n,r),i===null&&lu(e,t,r,bl,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else lu(e,t,r,null,n)}}var bl=null;function ld(e,t,n,r){if(bl=null,e=Wh(r),e=io(e),e!==null)if(t=No(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bl=e,null}function mx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fC()){case Vh:return 1;case sx:return 4;case vl:case pC:return 16;case ax:return 536870912;default:return 16}default:return 16}}var Cr=null,Uh=null,Ja=null;function gx(){if(Ja)return Ja;var e,t=Uh,n=t.length,r,o="value"in Cr?Cr.value:Cr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Ja=o.slice(e,1<r?1-r:void 0)}function Xa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Na(){return!0}function em(){return!1}function Wt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Na:em,this.isPropagationStopped=em,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),t}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yh=Wt(Ri),sa=Ie({},Ri,{view:0,detail:0}),jC=Wt(sa),Zc,eu,Ki,ac=Ie({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ki&&(Ki&&e.type==="mousemove"?(Zc=e.screenX-Ki.screenX,eu=e.screenY-Ki.screenY):eu=Zc=0,Ki=e),Zc)},movementY:function(e){return"movementY"in e?e.movementY:eu}}),tm=Wt(ac),NC=Ie({},ac,{dataTransfer:0}),EC=Wt(NC),MC=Ie({},sa,{relatedTarget:0}),tu=Wt(MC),AC=Ie({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),IC=Wt(AC),RC=Ie({},Ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),DC=Wt(RC),LC=Ie({},Ri,{data:0}),nm=Wt(LC),OC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _C(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=BC[e])?!!t[e]:!1}function Gh(){return _C}var WC=Ie({},sa,{key:function(e){if(e.key){var t=OC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?FC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gh,charCode:function(e){return e.type==="keypress"?Xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),VC=Wt(WC),HC=Ie({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=Wt(HC),zC=Ie({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gh}),$C=Wt(zC),UC=Ie({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),YC=Wt(UC),GC=Ie({},ac,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qC=Wt(GC),KC=[9,13,27,32],qh=Kn&&"CompositionEvent"in window,ps=null;Kn&&"documentMode"in document&&(ps=document.documentMode);var QC=Kn&&"TextEvent"in window&&!ps,yx=Kn&&(!qh||ps&&8<ps&&11>=ps),om=" ",im=!1;function vx(e,t){switch(e){case"keyup":return KC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _o=!1;function JC(e,t){switch(e){case"compositionend":return xx(t);case"keypress":return t.which!==32?null:(im=!0,om);case"textInput":return e=t.data,e===om&&im?null:e;default:return null}}function XC(e,t){if(_o)return e==="compositionend"||!qh&&vx(e,t)?(e=gx(),Ja=Uh=Cr=null,_o=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yx&&t.locale!=="ko"?null:t.data;default:return null}}var ZC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ZC[e.type]:t==="textarea"}function wx(e,t,n,r){Jv(r),t=Sl(t,"onChange"),0<t.length&&(n=new Yh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ms=null,Is=null;function eT(e){Ax(e,0)}function lc(e){var t=Ho(e);if($v(t))return e}function tT(e,t){if(e==="change")return t}var bx=!1;if(Kn){var nu;if(Kn){var ru="oninput"in document;if(!ru){var am=document.createElement("div");am.setAttribute("oninput","return;"),ru=typeof am.oninput=="function"}nu=ru}else nu=!1;bx=nu&&(!document.documentMode||9<document.documentMode)}function lm(){ms&&(ms.detachEvent("onpropertychange",Sx),Is=ms=null)}function Sx(e){if(e.propertyName==="value"&&lc(Is)){var t=[];wx(t,Is,e,Wh(e)),tx(eT,t)}}function nT(e,t,n){e==="focusin"?(lm(),ms=t,Is=n,ms.attachEvent("onpropertychange",Sx)):e==="focusout"&&lm()}function rT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lc(Is)}function oT(e,t){if(e==="click")return lc(t)}function iT(e,t){if(e==="input"||e==="change")return lc(t)}function sT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yn=typeof Object.is=="function"?Object.is:sT;function Rs(e,t){if(yn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!$u.call(t,o)||!yn(e[o],t[o]))return!1}return!0}function cm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function um(e,t){var n=cm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cm(n)}}function kx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cx(){for(var e=window,t=ml();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ml(e.document)}return t}function Kh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function aT(e){var t=Cx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kx(n.ownerDocument.documentElement,n)){if(r!==null&&Kh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=um(n,i);var s=um(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lT=Kn&&"documentMode"in document&&11>=document.documentMode,Wo=null,cd=null,gs=null,ud=!1;function dm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ud||Wo==null||Wo!==ml(r)||(r=Wo,"selectionStart"in r&&Kh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gs&&Rs(gs,r)||(gs=r,r=Sl(cd,"onSelect"),0<r.length&&(t=new Yh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wo)))}function Ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vo={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},ou={},Tx={};Kn&&(Tx=document.createElement("div").style,"AnimationEvent"in window||(delete Vo.animationend.animation,delete Vo.animationiteration.animation,delete Vo.animationstart.animation),"TransitionEvent"in window||delete Vo.transitionend.transition);function cc(e){if(ou[e])return ou[e];if(!Vo[e])return e;var t=Vo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tx)return ou[e]=t[n];return e}var Px=cc("animationend"),jx=cc("animationiteration"),Nx=cc("animationstart"),Ex=cc("transitionend"),Mx=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(e,t){Mx.set(e,t),jo(t,[e])}for(var iu=0;iu<hm.length;iu++){var su=hm[iu],cT=su.toLowerCase(),uT=su[0].toUpperCase()+su.slice(1);$r(cT,"on"+uT)}$r(Px,"onAnimationEnd");$r(jx,"onAnimationIteration");$r(Nx,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(Ex,"onTransitionEnd");vi("onMouseEnter",["mouseout","mouseover"]);vi("onMouseLeave",["mouseout","mouseover"]);vi("onPointerEnter",["pointerout","pointerover"]);vi("onPointerLeave",["pointerout","pointerover"]);jo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jo("onBeforeInput",["compositionend","keypress","textInput","paste"]);jo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function fm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cC(r,t,void 0,e),e.currentTarget=null}function Ax(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&o.isPropagationStopped())break e;fm(o,l,u),i=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&o.isPropagationStopped())break e;fm(o,l,u),i=c}}}if(yl)throw e=id,yl=!1,id=null,e}function ke(e,t){var n=t[md];n===void 0&&(n=t[md]=new Set);var r=e+"__bubble";n.has(r)||(Ix(t,e,2,!1),n.add(r))}function au(e,t,n){var r=0;t&&(r|=4),Ix(n,e,r,t)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function Ds(e){if(!e[Ma]){e[Ma]=!0,_v.forEach(function(n){n!=="selectionchange"&&(dT.has(n)||au(n,!1,e),au(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ma]||(t[Ma]=!0,au("selectionchange",!1,t))}}function Ix(e,t,n,r){switch(mx(t)){case 1:var o=TC;break;case 4:o=PC;break;default:o=$h}n=o.bind(null,t,n,e),o=void 0,!od||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function lu(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;l!==null;){if(s=io(l),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}l=l.parentNode}}r=r.return}tx(function(){var u=i,d=Wh(n),h=[];e:{var p=Mx.get(e);if(p!==void 0){var f=Yh,w=e;switch(e){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":f=VC;break;case"focusin":w="focus",f=tu;break;case"focusout":w="blur",f=tu;break;case"beforeblur":case"afterblur":f=tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=EC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=$C;break;case Px:case jx:case Nx:f=IC;break;case Ex:f=YC;break;case"scroll":f=jC;break;case"wheel":f=qC;break;case"copy":case"cut":case"paste":f=DC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=rm}var x=(t&4)!==0,b=!x&&e==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var v=u,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,g!==null&&(S=Ns(v,g),S!=null&&x.push(Ls(v,S,y)))),b)break;v=v.return}0<x.length&&(p=new f(p,w,null,n,d),h.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==nd&&(w=n.relatedTarget||n.fromElement)&&(io(w)||w[Qn]))break e;if((f||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,f?(w=n.relatedTarget||n.toElement,f=u,w=w?io(w):null,w!==null&&(b=No(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(f=null,w=u),f!==w)){if(x=tm,S="onMouseLeave",g="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(x=rm,S="onPointerLeave",g="onPointerEnter",v="pointer"),b=f==null?p:Ho(f),y=w==null?p:Ho(w),p=new x(S,v+"leave",f,n,d),p.target=b,p.relatedTarget=y,S=null,io(d)===u&&(x=new x(g,v+"enter",w,n,d),x.target=y,x.relatedTarget=b,S=x),b=S,f&&w)t:{for(x=f,g=w,v=0,y=x;y;y=Do(y))v++;for(y=0,S=g;S;S=Do(S))y++;for(;0<v-y;)x=Do(x),v--;for(;0<y-v;)g=Do(g),y--;for(;v--;){if(x===g||g!==null&&x===g.alternate)break t;x=Do(x),g=Do(g)}x=null}else x=null;f!==null&&pm(h,p,f,x,!1),w!==null&&b!==null&&pm(h,b,w,x,!0)}}e:{if(p=u?Ho(u):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var k=tT;else if(sm(p))if(bx)k=iT;else{k=rT;var P=nT}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=oT);if(k&&(k=k(e,u))){wx(h,k,n,d);break e}P&&P(e,p,u),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Ju(p,"number",p.value)}switch(P=u?Ho(u):window,e){case"focusin":(sm(P)||P.contentEditable==="true")&&(Wo=P,cd=u,gs=null);break;case"focusout":gs=cd=Wo=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,dm(h,n,d);break;case"selectionchange":if(lT)break;case"keydown":case"keyup":dm(h,n,d)}var j;if(qh)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else _o?vx(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(yx&&n.locale!=="ko"&&(_o||N!=="onCompositionStart"?N==="onCompositionEnd"&&_o&&(j=gx()):(Cr=d,Uh="value"in Cr?Cr.value:Cr.textContent,_o=!0)),P=Sl(u,N),0<P.length&&(N=new nm(N,e,null,n,d),h.push({event:N,listeners:P}),j?N.data=j:(j=xx(n),j!==null&&(N.data=j)))),(j=QC?JC(e,n):XC(e,n))&&(u=Sl(u,"onBeforeInput"),0<u.length&&(d=new nm("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=j))}Ax(h,t)})}function Ls(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ns(e,n),i!=null&&r.unshift(Ls(e,i,o)),i=Ns(e,t),i!=null&&r.push(Ls(e,i,o))),e=e.return}return r}function Do(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pm(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,o?(c=Ns(n,i),c!=null&&s.unshift(Ls(n,c,l))):o||(c=Ns(n,i),c!=null&&s.push(Ls(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var hT=/\r\n?/g,fT=/\u0000|\uFFFD/g;function mm(e){return(typeof e=="string"?e:""+e).replace(hT,`
`).replace(fT,"")}function Aa(e,t,n){if(t=mm(t),mm(e)!==t&&n)throw Error(L(425))}function kl(){}var dd=null,hd=null;function fd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pd=typeof setTimeout=="function"?setTimeout:void 0,pT=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,mT=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(e){return gm.resolve(null).then(e).catch(gT)}:pd;function gT(e){setTimeout(function(){throw e})}function cu(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),As(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);As(t)}function Mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ym(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Di=Math.random().toString(36).slice(2),Pn="__reactFiber$"+Di,Os="__reactProps$"+Di,Qn="__reactContainer$"+Di,md="__reactEvents$"+Di,yT="__reactListeners$"+Di,vT="__reactHandles$"+Di;function io(e){var t=e[Pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qn]||n[Pn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ym(e);e!==null;){if(n=e[Pn])return n;e=ym(e)}return t}e=n,n=e.parentNode}return null}function aa(e){return e=e[Pn]||e[Qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ho(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function uc(e){return e[Os]||null}var gd=[],zo=-1;function Ur(e){return{current:e}}function Ce(e){0>zo||(e.current=gd[zo],gd[zo]=null,zo--)}function we(e,t){zo++,gd[zo]=e.current,e.current=t}var Fr={},dt=Ur(Fr),Ct=Ur(!1),bo=Fr;function xi(e,t){var n=e.type.contextTypes;if(!n)return Fr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Tt(e){return e=e.childContextTypes,e!=null}function Cl(){Ce(Ct),Ce(dt)}function vm(e,t,n){if(dt.current!==Fr)throw Error(L(168));we(dt,t),we(Ct,n)}function Rx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(L(108,nC(e)||"Unknown",o));return Ie({},n,r)}function Tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fr,bo=dt.current,we(dt,e),we(Ct,Ct.current),!0}function xm(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Rx(e,t,bo),r.__reactInternalMemoizedMergedChildContext=e,Ce(Ct),Ce(dt),we(dt,e)):Ce(Ct),we(Ct,n)}var Hn=null,dc=!1,uu=!1;function Dx(e){Hn===null?Hn=[e]:Hn.push(e)}function xT(e){dc=!0,Dx(e)}function Yr(){if(!uu&&Hn!==null){uu=!0;var e=0,t=ge;try{var n=Hn;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Hn=null,dc=!1}catch(o){throw Hn!==null&&(Hn=Hn.slice(e+1)),ix(Vh,Yr),o}finally{ge=t,uu=!1}}return null}var $o=[],Uo=0,Pl=null,jl=0,Yt=[],Gt=0,So=null,$n=1,Un="";function to(e,t){$o[Uo++]=jl,$o[Uo++]=Pl,Pl=e,jl=t}function Lx(e,t,n){Yt[Gt++]=$n,Yt[Gt++]=Un,Yt[Gt++]=So,So=e;var r=$n;e=Un;var o=32-mn(r)-1;r&=~(1<<o),n+=1;var i=32-mn(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,$n=1<<32-mn(t)+o|n<<o|r,Un=i+e}else $n=1<<i|n<<o|r,Un=e}function Qh(e){e.return!==null&&(to(e,1),Lx(e,1,0))}function Jh(e){for(;e===Pl;)Pl=$o[--Uo],$o[Uo]=null,jl=$o[--Uo],$o[Uo]=null;for(;e===So;)So=Yt[--Gt],Yt[Gt]=null,Un=Yt[--Gt],Yt[Gt]=null,$n=Yt[--Gt],Yt[Gt]=null}var Dt=null,Rt=null,Ne=!1,fn=null;function Ox(e,t){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,Rt=Mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=So!==null?{id:$n,overflow:Un}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Dt=e,Rt=null,!0):!1;default:return!1}}function yd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vd(e){if(Ne){var t=Rt;if(t){var n=t;if(!wm(e,t)){if(yd(e))throw Error(L(418));t=Mr(n.nextSibling);var r=Dt;t&&wm(e,t)?Ox(r,n):(e.flags=e.flags&-4097|2,Ne=!1,Dt=e)}}else{if(yd(e))throw Error(L(418));e.flags=e.flags&-4097|2,Ne=!1,Dt=e}}}function bm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function Ia(e){if(e!==Dt)return!1;if(!Ne)return bm(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fd(e.type,e.memoizedProps)),t&&(t=Rt)){if(yd(e))throw Fx(),Error(L(418));for(;t;)Ox(e,t),t=Mr(t.nextSibling)}if(bm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=Mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=Dt?Mr(e.stateNode.nextSibling):null;return!0}function Fx(){for(var e=Rt;e;)e=Mr(e.nextSibling)}function wi(){Rt=Dt=null,Ne=!1}function Xh(e){fn===null?fn=[e]:fn.push(e)}var wT=nr.ReactCurrentBatchConfig;function Qi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Ra(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sm(e){var t=e._init;return t(e._payload)}function Bx(e){function t(g,v){if(e){var y=g.deletions;y===null?(g.deletions=[v],g.flags|=16):y.push(v)}}function n(g,v){if(!e)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function o(g,v){return g=Dr(g,v),g.index=0,g.sibling=null,g}function i(g,v,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<v?(g.flags|=2,v):y):(g.flags|=2,v)):(g.flags|=1048576,v)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,v,y,S){return v===null||v.tag!==6?(v=yu(y,g.mode,S),v.return=g,v):(v=o(v,y),v.return=g,v)}function c(g,v,y,S){var k=y.type;return k===Bo?d(g,v,y.props.children,S,y.key):v!==null&&(v.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===pr&&Sm(k)===v.type)?(S=o(v,y.props),S.ref=Qi(g,v,y),S.return=g,S):(S=il(y.type,y.key,y.props,null,g.mode,S),S.ref=Qi(g,v,y),S.return=g,S)}function u(g,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=vu(y,g.mode,S),v.return=g,v):(v=o(v,y.children||[]),v.return=g,v)}function d(g,v,y,S,k){return v===null||v.tag!==7?(v=vo(y,g.mode,S,k),v.return=g,v):(v=o(v,y),v.return=g,v)}function h(g,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=yu(""+v,g.mode,y),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:return y=il(v.type,v.key,v.props,null,g.mode,y),y.ref=Qi(g,null,v),y.return=g,y;case Fo:return v=vu(v,g.mode,y),v.return=g,v;case pr:var S=v._init;return h(g,S(v._payload),y)}if(ss(v)||Ui(v))return v=vo(v,g.mode,y,null),v.return=g,v;Ra(g,v)}return null}function p(g,v,y,S){var k=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:l(g,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sa:return y.key===k?c(g,v,y,S):null;case Fo:return y.key===k?u(g,v,y,S):null;case pr:return k=y._init,p(g,v,k(y._payload),S)}if(ss(y)||Ui(y))return k!==null?null:d(g,v,y,S,null);Ra(g,y)}return null}function f(g,v,y,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(y)||null,l(v,g,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Sa:return g=g.get(S.key===null?y:S.key)||null,c(v,g,S,k);case Fo:return g=g.get(S.key===null?y:S.key)||null,u(v,g,S,k);case pr:var P=S._init;return f(g,v,y,P(S._payload),k)}if(ss(S)||Ui(S))return g=g.get(y)||null,d(v,g,S,k,null);Ra(v,S)}return null}function w(g,v,y,S){for(var k=null,P=null,j=v,N=v=0,R=null;j!==null&&N<y.length;N++){j.index>N?(R=j,j=null):R=j.sibling;var M=p(g,j,y[N],S);if(M===null){j===null&&(j=R);break}e&&j&&M.alternate===null&&t(g,j),v=i(M,v,N),P===null?k=M:P.sibling=M,P=M,j=R}if(N===y.length)return n(g,j),Ne&&to(g,N),k;if(j===null){for(;N<y.length;N++)j=h(g,y[N],S),j!==null&&(v=i(j,v,N),P===null?k=j:P.sibling=j,P=j);return Ne&&to(g,N),k}for(j=r(g,j);N<y.length;N++)R=f(j,g,N,y[N],S),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?N:R.key),v=i(R,v,N),P===null?k=R:P.sibling=R,P=R);return e&&j.forEach(function(B){return t(g,B)}),Ne&&to(g,N),k}function x(g,v,y,S){var k=Ui(y);if(typeof k!="function")throw Error(L(150));if(y=k.call(y),y==null)throw Error(L(151));for(var P=k=null,j=v,N=v=0,R=null,M=y.next();j!==null&&!M.done;N++,M=y.next()){j.index>N?(R=j,j=null):R=j.sibling;var B=p(g,j,M.value,S);if(B===null){j===null&&(j=R);break}e&&j&&B.alternate===null&&t(g,j),v=i(B,v,N),P===null?k=B:P.sibling=B,P=B,j=R}if(M.done)return n(g,j),Ne&&to(g,N),k;if(j===null){for(;!M.done;N++,M=y.next())M=h(g,M.value,S),M!==null&&(v=i(M,v,N),P===null?k=M:P.sibling=M,P=M);return Ne&&to(g,N),k}for(j=r(g,j);!M.done;N++,M=y.next())M=f(j,g,N,M.value,S),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?N:M.key),v=i(M,v,N),P===null?k=M:P.sibling=M,P=M);return e&&j.forEach(function(V){return t(g,V)}),Ne&&to(g,N),k}function b(g,v,y,S){if(typeof y=="object"&&y!==null&&y.type===Bo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Sa:e:{for(var k=y.key,P=v;P!==null;){if(P.key===k){if(k=y.type,k===Bo){if(P.tag===7){n(g,P.sibling),v=o(P,y.props.children),v.return=g,g=v;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===pr&&Sm(k)===P.type){n(g,P.sibling),v=o(P,y.props),v.ref=Qi(g,P,y),v.return=g,g=v;break e}n(g,P);break}else t(g,P);P=P.sibling}y.type===Bo?(v=vo(y.props.children,g.mode,S,y.key),v.return=g,g=v):(S=il(y.type,y.key,y.props,null,g.mode,S),S.ref=Qi(g,v,y),S.return=g,g=S)}return s(g);case Fo:e:{for(P=y.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(g,v.sibling),v=o(v,y.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else t(g,v);v=v.sibling}v=vu(y,g.mode,S),v.return=g,g=v}return s(g);case pr:return P=y._init,b(g,v,P(y._payload),S)}if(ss(y))return w(g,v,y,S);if(Ui(y))return x(g,v,y,S);Ra(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(g,v.sibling),v=o(v,y),v.return=g,g=v):(n(g,v),v=yu(y,g.mode,S),v.return=g,g=v),s(g)):n(g,v)}return b}var bi=Bx(!0),_x=Bx(!1),Nl=Ur(null),El=null,Yo=null,Zh=null;function ef(){Zh=Yo=El=null}function tf(e){var t=Nl.current;Ce(Nl),e._currentValue=t}function xd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oi(e,t){El=e,Zh=Yo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(kt=!0),e.firstContext=null)}function Jt(e){var t=e._currentValue;if(Zh!==e)if(e={context:e,memoizedValue:t,next:null},Yo===null){if(El===null)throw Error(L(308));Yo=e,El.dependencies={lanes:0,firstContext:e}}else Yo=Yo.next=e;return t}var so=null;function nf(e){so===null?so=[e]:so.push(e)}function Wx(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,nf(t)):(n.next=o.next,o.next=n),t.interleaved=n,Jn(e,r)}function Jn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mr=!1;function rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ar(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Jn(e,n)}return o=r.interleaved,o===null?(t.next=t,nf(r)):(t.next=o.next,o.next=t),r.interleaved=t,Jn(e,n)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hh(e,n)}}function km(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ml(e,t,n,r){var o=e.updateQueue;mr=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?i=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(i!==null){var h=o.baseState;s=0,d=u=c=null,l=i;do{var p=l.lane,f=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,x=l;switch(p=t,f=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){h=w.call(f,h,p);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,p=typeof w=="function"?w.call(f,h,p):w,p==null)break e;h=Ie({},h,p);break e;case 2:mr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=f,c=h):d=d.next=f,s|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(c=h),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Co|=s,e.lanes=s,e.memoizedState=h}}function Cm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(L(191,o));o.call(r)}}}var la={},Mn=Ur(la),Fs=Ur(la),Bs=Ur(la);function ao(e){if(e===la)throw Error(L(174));return e}function of(e,t){switch(we(Bs,t),we(Fs,e),we(Mn,la),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zu(t,e)}Ce(Mn),we(Mn,t)}function Si(){Ce(Mn),Ce(Fs),Ce(Bs)}function Hx(e){ao(Bs.current);var t=ao(Mn.current),n=Zu(t,e.type);t!==n&&(we(Fs,e),we(Mn,n))}function sf(e){Fs.current===e&&(Ce(Mn),Ce(Fs))}var Ee=Ur(0);function Al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var du=[];function af(){for(var e=0;e<du.length;e++)du[e]._workInProgressVersionPrimary=null;du.length=0}var el=nr.ReactCurrentDispatcher,hu=nr.ReactCurrentBatchConfig,ko=0,Ae=null,Ge=null,Je=null,Il=!1,ys=!1,_s=0,bT=0;function it(){throw Error(L(321))}function lf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yn(e[n],t[n]))return!1;return!0}function cf(e,t,n,r,o,i){if(ko=i,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,el.current=e===null||e.memoizedState===null?TT:PT,e=n(r,o),ys){i=0;do{if(ys=!1,_s=0,25<=i)throw Error(L(301));i+=1,Je=Ge=null,t.updateQueue=null,el.current=jT,e=n(r,o)}while(ys)}if(el.current=Rl,t=Ge!==null&&Ge.next!==null,ko=0,Je=Ge=Ae=null,Il=!1,t)throw Error(L(300));return e}function uf(){var e=_s!==0;return _s=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Ae.memoizedState=Je=e:Je=Je.next=e,Je}function Xt(){if(Ge===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Je===null?Ae.memoizedState:Je.next;if(t!==null)Je=t,Ge=e;else{if(e===null)throw Error(L(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Je===null?Ae.memoizedState=Je=e:Je=Je.next=e}return Je}function Ws(e,t){return typeof t=="function"?t(e):t}function fu(e){var t=Xt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=Ge,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,c=null,u=i;do{var d=u.lane;if((ko&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,s=r):c=c.next=h,Ae.lanes|=d,Co|=d}u=u.next}while(u!==null&&u!==i);c===null?s=r:c.next=l,yn(r,t.memoizedState)||(kt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Ae.lanes|=i,Co|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pu(e){var t=Xt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);yn(i,t.memoizedState)||(kt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function zx(){}function $x(e,t){var n=Ae,r=Xt(),o=t(),i=!yn(r.memoizedState,o);if(i&&(r.memoizedState=o,kt=!0),r=r.queue,df(Gx.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Vs(9,Yx.bind(null,n,r,o,t),void 0,null),Xe===null)throw Error(L(349));ko&30||Ux(n,t,o)}return o}function Ux(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yx(e,t,n,r){t.value=n,t.getSnapshot=r,qx(t)&&Kx(e)}function Gx(e,t,n){return n(function(){qx(t)&&Kx(e)})}function qx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yn(e,n)}catch{return!0}}function Kx(e){var t=Jn(e,1);t!==null&&gn(t,e,1,-1)}function Tm(e){var t=Sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ws,lastRenderedState:e},t.queue=e,e=e.dispatch=CT.bind(null,Ae,e),[t.memoizedState,e]}function Vs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qx(){return Xt().memoizedState}function tl(e,t,n,r){var o=Sn();Ae.flags|=e,o.memoizedState=Vs(1|t,n,void 0,r===void 0?null:r)}function hc(e,t,n,r){var o=Xt();r=r===void 0?null:r;var i=void 0;if(Ge!==null){var s=Ge.memoizedState;if(i=s.destroy,r!==null&&lf(r,s.deps)){o.memoizedState=Vs(t,n,i,r);return}}Ae.flags|=e,o.memoizedState=Vs(1|t,n,i,r)}function Pm(e,t){return tl(8390656,8,e,t)}function df(e,t){return hc(2048,8,e,t)}function Jx(e,t){return hc(4,2,e,t)}function Xx(e,t){return hc(4,4,e,t)}function Zx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ew(e,t,n){return n=n!=null?n.concat([e]):null,hc(4,4,Zx.bind(null,t,e),n)}function hf(){}function tw(e,t){var n=Xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nw(e,t){var n=Xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rw(e,t,n){return ko&21?(yn(n,t)||(n=lx(),Ae.lanes|=n,Co|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,kt=!0),e.memoizedState=n)}function ST(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=hu.transition;hu.transition={};try{e(!1),t()}finally{ge=n,hu.transition=r}}function ow(){return Xt().memoizedState}function kT(e,t,n){var r=Rr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iw(e))sw(t,n);else if(n=Wx(e,t,n,r),n!==null){var o=yt();gn(n,e,r,o),aw(n,t,r)}}function CT(e,t,n){var r=Rr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iw(e))sw(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,yn(l,s)){var c=t.interleaved;c===null?(o.next=o,nf(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Wx(e,t,o,r),n!==null&&(o=yt(),gn(n,e,r,o),aw(n,t,r))}}function iw(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function sw(e,t){ys=Il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function aw(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hh(e,n)}}var Rl={readContext:Jt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},TT={readContext:Jt,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:Pm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,tl(4194308,4,Zx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return tl(4,2,e,t)},useMemo:function(e,t){var n=Sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kT.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:Tm,useDebugValue:hf,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=Tm(!1),t=e[0];return e=ST.bind(null,e[1]),Sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,o=Sn();if(Ne){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Xe===null)throw Error(L(349));ko&30||Ux(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Pm(Gx.bind(null,r,i,e),[e]),r.flags|=2048,Vs(9,Yx.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Sn(),t=Xe.identifierPrefix;if(Ne){var n=Un,r=$n;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_s++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bT++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},PT={readContext:Jt,useCallback:tw,useContext:Jt,useEffect:df,useImperativeHandle:ew,useInsertionEffect:Jx,useLayoutEffect:Xx,useMemo:nw,useReducer:fu,useRef:Qx,useState:function(){return fu(Ws)},useDebugValue:hf,useDeferredValue:function(e){var t=Xt();return rw(t,Ge.memoizedState,e)},useTransition:function(){var e=fu(Ws)[0],t=Xt().memoizedState;return[e,t]},useMutableSource:zx,useSyncExternalStore:$x,useId:ow,unstable_isNewReconciler:!1},jT={readContext:Jt,useCallback:tw,useContext:Jt,useEffect:df,useImperativeHandle:ew,useInsertionEffect:Jx,useLayoutEffect:Xx,useMemo:nw,useReducer:pu,useRef:Qx,useState:function(){return pu(Ws)},useDebugValue:hf,useDeferredValue:function(e){var t=Xt();return Ge===null?t.memoizedState=e:rw(t,Ge.memoizedState,e)},useTransition:function(){var e=pu(Ws)[0],t=Xt().memoizedState;return[e,t]},useMutableSource:zx,useSyncExternalStore:$x,useId:ow,unstable_isNewReconciler:!1};function ln(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function wd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fc={isMounted:function(e){return(e=e._reactInternals)?No(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=yt(),o=Rr(e),i=Yn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ar(e,i,o),t!==null&&(gn(t,e,o,r),Za(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=yt(),o=Rr(e),i=Yn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ar(e,i,o),t!==null&&(gn(t,e,o,r),Za(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),r=Rr(e),o=Yn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ar(e,o,r),t!==null&&(gn(t,e,r,n),Za(t,e,r))}};function jm(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Rs(n,r)||!Rs(o,i):!0}function lw(e,t,n){var r=!1,o=Fr,i=t.contextType;return typeof i=="object"&&i!==null?i=Jt(i):(o=Tt(t)?bo:dt.current,r=t.contextTypes,i=(r=r!=null)?xi(e,o):Fr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Nm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function bd(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},rf(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Jt(i):(i=Tt(t)?bo:dt.current,o.context=xi(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(wd(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&fc.enqueueReplaceState(o,o.state,null),Ml(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ki(e,t){try{var n="",r=t;do n+=tC(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function mu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Sd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var NT=typeof WeakMap=="function"?WeakMap:Map;function cw(e,t,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ll||(Ll=!0,Id=r),Sd(e,t)},n}function uw(e,t,n){n=Yn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Sd(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Sd(e,t),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Em(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new NT;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=HT.bind(null,e,t,n),t.then(e,e))}function Mm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Am(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yn(-1,1),t.tag=2,Ar(n,t,1))),n.lanes|=1),e)}var ET=nr.ReactCurrentOwner,kt=!1;function pt(e,t,n,r){t.child=e===null?_x(t,null,n,r):bi(t,e.child,n,r)}function Im(e,t,n,r,o){n=n.render;var i=t.ref;return oi(t,o),r=cf(e,t,n,r,i,o),n=uf(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xn(e,t,o)):(Ne&&n&&Qh(t),t.flags|=1,pt(e,t,r,o),t.child)}function Rm(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!wf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,dw(e,t,i,r,o)):(e=il(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Rs,n(s,r)&&e.ref===t.ref)return Xn(e,t,o)}return t.flags|=1,e=Dr(i,r),e.ref=t.ref,e.return=t,t.child=e}function dw(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Rs(i,r)&&e.ref===t.ref)if(kt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(kt=!0);else return t.lanes=e.lanes,Xn(e,t,o)}return kd(e,t,n,r,o)}function hw(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(qo,At),At|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(qo,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,we(qo,At),At|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,we(qo,At),At|=r;return pt(e,t,o,n),t.child}function fw(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kd(e,t,n,r,o){var i=Tt(n)?bo:dt.current;return i=xi(t,i),oi(t,o),n=cf(e,t,n,r,i,o),r=uf(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xn(e,t,o)):(Ne&&r&&Qh(t),t.flags|=1,pt(e,t,n,o),t.child)}function Dm(e,t,n,r,o){if(Tt(n)){var i=!0;Tl(t)}else i=!1;if(oi(t,o),t.stateNode===null)nl(e,t),lw(t,n,r),bd(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Jt(u):(u=Tt(n)?bo:dt.current,u=xi(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Nm(t,s,r,u),mr=!1;var p=t.memoizedState;s.state=p,Ml(t,r,s,o),c=t.memoizedState,l!==r||p!==c||Ct.current||mr?(typeof d=="function"&&(wd(t,n,d,r),c=t.memoizedState),(l=mr||jm(t,n,l,r,p,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Vx(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ln(t.type,l),s.props=u,h=t.pendingProps,p=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Jt(c):(c=Tt(n)?bo:dt.current,c=xi(t,c));var f=n.getDerivedStateFromProps;(d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||p!==c)&&Nm(t,s,r,c),mr=!1,p=t.memoizedState,s.state=p,Ml(t,r,s,o);var w=t.memoizedState;l!==h||p!==w||Ct.current||mr?(typeof f=="function"&&(wd(t,n,f,r),w=t.memoizedState),(u=mr||jm(t,n,u,r,p,w,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Cd(e,t,n,r,i,o)}function Cd(e,t,n,r,o,i){fw(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&xm(t,n,!1),Xn(e,t,i);r=t.stateNode,ET.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=bi(t,e.child,null,i),t.child=bi(t,null,l,i)):pt(e,t,l,i),t.memoizedState=r.state,o&&xm(t,n,!0),t.child}function pw(e){var t=e.stateNode;t.pendingContext?vm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vm(e,t.context,!1),of(e,t.containerInfo)}function Lm(e,t,n,r,o){return wi(),Xh(o),t.flags|=256,pt(e,t,n,r),t.child}var Td={dehydrated:null,treeContext:null,retryLane:0};function Pd(e){return{baseLanes:e,cachePool:null,transitions:null}}function mw(e,t,n){var r=t.pendingProps,o=Ee.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),we(Ee,o&1),e===null)return vd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=gc(s,r,0,null),e=vo(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Pd(n),t.memoizedState=Td,e):ff(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return MT(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Dr(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Dr(l,i):(i=vo(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Pd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Td,r}return i=e.child,e=i.sibling,r=Dr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ff(e,t){return t=gc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Da(e,t,n,r){return r!==null&&Xh(r),bi(t,e.child,null,n),e=ff(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function MT(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=mu(Error(L(422))),Da(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=gc({mode:"visible",children:r.children},o,0,null),i=vo(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&bi(t,e.child,null,s),t.child.memoizedState=Pd(s),t.memoizedState=Td,i);if(!(t.mode&1))return Da(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(L(419)),r=mu(i,r,void 0),Da(e,t,s,r)}if(l=(s&e.childLanes)!==0,kt||l){if(r=Xe,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Jn(e,o),gn(r,e,o,-1))}return xf(),r=mu(Error(L(421))),Da(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=zT.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Rt=Mr(o.nextSibling),Dt=t,Ne=!0,fn=null,e!==null&&(Yt[Gt++]=$n,Yt[Gt++]=Un,Yt[Gt++]=So,$n=e.id,Un=e.overflow,So=t),t=ff(t,r.children),t.flags|=4096,t)}function Om(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xd(e.return,t,n)}function gu(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function gw(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(pt(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Om(e,n,t);else if(e.tag===19)Om(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(we(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Al(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),gu(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Al(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}gu(t,!0,n,null,i);break;case"together":gu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Co|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Dr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function AT(e,t,n){switch(t.tag){case 3:pw(t),wi();break;case 5:Hx(t);break;case 1:Tt(t.type)&&Tl(t);break;case 4:of(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;we(Nl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(we(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?mw(e,t,n):(we(Ee,Ee.current&1),e=Xn(e,t,n),e!==null?e.sibling:null);we(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gw(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),we(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,hw(e,t,n)}return Xn(e,t,n)}var yw,jd,vw,xw;yw=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jd=function(){};vw=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ao(Mn.current);var i=null;switch(n){case"input":o=Ku(e,o),r=Ku(e,r),i=[];break;case"select":o=Ie({},o,{value:void 0}),r=Ie({},r,{value:void 0}),i=[];break;case"textarea":o=Xu(e,o),r=Xu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=kl)}ed(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ps.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ps.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ke("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};xw=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ji(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function st(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function IT(e,t,n){var r=t.pendingProps;switch(Jh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(t),null;case 1:return Tt(t.type)&&Cl(),st(t),null;case 3:return r=t.stateNode,Si(),Ce(Ct),Ce(dt),af(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,fn!==null&&(Ld(fn),fn=null))),jd(e,t),st(t),null;case 5:sf(t);var o=ao(Bs.current);if(n=t.type,e!==null&&t.stateNode!=null)vw(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return st(t),null}if(e=ao(Mn.current),Ia(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Pn]=t,r[Os]=i,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(o=0;o<ls.length;o++)ke(ls[o],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Up(r,i),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ke("invalid",r);break;case"textarea":Gp(r,i),ke("invalid",r)}ed(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Aa(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Aa(r.textContent,l,e),o=["children",""+l]):Ps.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ke("scroll",r)}switch(n){case"input":ka(r),Yp(r,i,!0);break;case"textarea":ka(r),qp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=kl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Pn]=t,e[Os]=r,yw(e,t,!1,!1),t.stateNode=e;e:{switch(s=td(n,r),n){case"dialog":ke("cancel",e),ke("close",e),o=r;break;case"iframe":case"object":case"embed":ke("load",e),o=r;break;case"video":case"audio":for(o=0;o<ls.length;o++)ke(ls[o],e);o=r;break;case"source":ke("error",e),o=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),o=r;break;case"details":ke("toggle",e),o=r;break;case"input":Up(e,r),o=Ku(e,r),ke("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Ie({},r,{value:void 0}),ke("invalid",e);break;case"textarea":Gp(e,r),o=Xu(e,r),ke("invalid",e);break;default:o=r}ed(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?Qv(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&qv(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&js(e,c):typeof c=="number"&&js(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ps.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ke("scroll",e):c!=null&&Oh(e,i,c,s))}switch(n){case"input":ka(e),Yp(e,r,!1);break;case"textarea":ka(e),qp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Or(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ei(e,!!r.multiple,i,!1):r.defaultValue!=null&&ei(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return st(t),null;case 6:if(e&&t.stateNode!=null)xw(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=ao(Bs.current),ao(Mn.current),Ia(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pn]=t,(i=r.nodeValue!==n)&&(e=Dt,e!==null))switch(e.tag){case 3:Aa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Aa(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=t,t.stateNode=r}return st(t),null;case 13:if(Ce(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&Rt!==null&&t.mode&1&&!(t.flags&128))Fx(),wi(),t.flags|=98560,i=!1;else if(i=Ia(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(L(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[Pn]=t}else wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;st(t),i=!1}else fn!==null&&(Ld(fn),fn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?qe===0&&(qe=3):xf())),t.updateQueue!==null&&(t.flags|=4),st(t),null);case 4:return Si(),jd(e,t),e===null&&Ds(t.stateNode.containerInfo),st(t),null;case 10:return tf(t.type._context),st(t),null;case 17:return Tt(t.type)&&Cl(),st(t),null;case 19:if(Ce(Ee),i=t.memoizedState,i===null)return st(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Ji(i,!1);else{if(qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Al(e),s!==null){for(t.flags|=128,Ji(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(Ee,Ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&_e()>Ci&&(t.flags|=128,r=!0,Ji(i,!1),t.lanes=4194304)}else{if(!r)if(e=Al(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ji(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ne)return st(t),null}else 2*_e()-i.renderingStartTime>Ci&&n!==1073741824&&(t.flags|=128,r=!0,Ji(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=_e(),t.sibling=null,n=Ee.current,we(Ee,r?n&1|2:n&1),t):(st(t),null);case 22:case 23:return vf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?At&1073741824&&(st(t),t.subtreeFlags&6&&(t.flags|=8192)):st(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function RT(e,t){switch(Jh(t),t.tag){case 1:return Tt(t.type)&&Cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Si(),Ce(Ct),Ce(dt),af(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return sf(t),null;case 13:if(Ce(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Ee),null;case 4:return Si(),null;case 10:return tf(t.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var La=!1,ct=!1,DT=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Go(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function Nd(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var Fm=!1;function LT(e,t){if(dd=wl,e=Cx(),Kh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,h=e,p=null;t:for(;;){for(var f;h!==n||o!==0&&h.nodeType!==3||(l=s+o),h!==i||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(f=h.firstChild)!==null;)p=h,h=f;for(;;){if(h===e)break t;if(p===n&&++u===o&&(l=s),p===i&&++d===r&&(c=s),(f=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=f}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(hd={focusedElem:e,selectionRange:n},wl=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,b=w.memoizedState,g=t.stateNode,v=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:ln(t.type,x),b);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(S){Oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return w=Fm,Fm=!1,w}function vs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Nd(t,n,i)}o=o.next}while(o!==r)}}function pc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ed(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ww(e){var t=e.alternate;t!==null&&(e.alternate=null,ww(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pn],delete t[Os],delete t[md],delete t[yT],delete t[vT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bw(e){return e.tag===5||e.tag===3||e.tag===4}function Bm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Md(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kl));else if(r!==4&&(e=e.child,e!==null))for(Md(e,t,n),e=e.sibling;e!==null;)Md(e,t,n),e=e.sibling}function Ad(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ad(e,t,n),e=e.sibling;e!==null;)Ad(e,t,n),e=e.sibling}var Ze=null,hn=!1;function cr(e,t,n){for(n=n.child;n!==null;)Sw(e,t,n),n=n.sibling}function Sw(e,t,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:ct||Go(n,t);case 6:var r=Ze,o=hn;Ze=null,cr(e,t,n),Ze=r,hn=o,Ze!==null&&(hn?(e=Ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(hn?(e=Ze,n=n.stateNode,e.nodeType===8?cu(e.parentNode,n):e.nodeType===1&&cu(e,n),As(e)):cu(Ze,n.stateNode));break;case 4:r=Ze,o=hn,Ze=n.stateNode.containerInfo,hn=!0,cr(e,t,n),Ze=r,hn=o;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Nd(n,t,s),o=o.next}while(o!==r)}cr(e,t,n);break;case 1:if(!ct&&(Go(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,t,l)}cr(e,t,n);break;case 21:cr(e,t,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,cr(e,t,n),ct=r):cr(e,t,n);break;default:cr(e,t,n)}}function _m(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new DT),t.forEach(function(r){var o=$T.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function on(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,hn=!1;break e;case 3:Ze=l.stateNode.containerInfo,hn=!0;break e;case 4:Ze=l.stateNode.containerInfo,hn=!0;break e}l=l.return}if(Ze===null)throw Error(L(160));Sw(i,s,o),Ze=null,hn=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){Oe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kw(t,e),t=t.sibling}function kw(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(t,e),bn(e),r&4){try{vs(3,e,e.return),pc(3,e)}catch(x){Oe(e,e.return,x)}try{vs(5,e,e.return)}catch(x){Oe(e,e.return,x)}}break;case 1:on(t,e),bn(e),r&512&&n!==null&&Go(n,n.return);break;case 5:if(on(t,e),bn(e),r&512&&n!==null&&Go(n,n.return),e.flags&32){var o=e.stateNode;try{js(o,"")}catch(x){Oe(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Uv(o,i),td(l,s);var u=td(l,i);for(s=0;s<c.length;s+=2){var d=c[s],h=c[s+1];d==="style"?Qv(o,h):d==="dangerouslySetInnerHTML"?qv(o,h):d==="children"?js(o,h):Oh(o,d,h,u)}switch(l){case"input":Qu(o,i);break;case"textarea":Yv(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var f=i.value;f!=null?ei(o,!!i.multiple,f,!1):p!==!!i.multiple&&(i.defaultValue!=null?ei(o,!!i.multiple,i.defaultValue,!0):ei(o,!!i.multiple,i.multiple?[]:"",!1))}o[Os]=i}catch(x){Oe(e,e.return,x)}}break;case 6:if(on(t,e),bn(e),r&4){if(e.stateNode===null)throw Error(L(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){Oe(e,e.return,x)}}break;case 3:if(on(t,e),bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{As(t.containerInfo)}catch(x){Oe(e,e.return,x)}break;case 4:on(t,e),bn(e);break;case 13:on(t,e),bn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(gf=_e())),r&4&&_m(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ct=(u=ct)||d,on(t,e),ct=u):on(t,e),bn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Y=e,d=e.child;d!==null;){for(h=Y=d;Y!==null;){switch(p=Y,f=p.child,p.tag){case 0:case 11:case 14:case 15:vs(4,p,p.return);break;case 1:Go(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){Oe(r,n,x)}}break;case 5:Go(p,p.return);break;case 22:if(p.memoizedState!==null){Vm(h);continue}}f!==null?(f.return=p,Y=f):Vm(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Kv("display",s))}catch(x){Oe(e,e.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){Oe(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:on(t,e),bn(e),r&4&&_m(e);break;case 21:break;default:on(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bw(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(js(o,""),r.flags&=-33);var i=Bm(e);Ad(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Bm(e);Md(e,l,s);break;default:throw Error(L(161))}}catch(c){Oe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function OT(e,t,n){Y=e,Cw(e)}function Cw(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var o=Y,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||La;if(!s){var l=o.alternate,c=l!==null&&l.memoizedState!==null||ct;l=La;var u=ct;if(La=s,(ct=c)&&!u)for(Y=o;Y!==null;)s=Y,c=s.child,s.tag===22&&s.memoizedState!==null?Hm(o):c!==null?(c.return=s,Y=c):Hm(o);for(;i!==null;)Y=i,Cw(i),i=i.sibling;Y=o,La=l,ct=u}Wm(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,Y=i):Wm(e)}}function Wm(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ct||pc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ct)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ln(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Cm(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cm(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&As(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ct||t.flags&512&&Ed(t)}catch(p){Oe(t,t.return,p)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Vm(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Hm(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pc(4,t)}catch(c){Oe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){Oe(t,o,c)}}var i=t.return;try{Ed(t)}catch(c){Oe(t,i,c)}break;case 5:var s=t.return;try{Ed(t)}catch(c){Oe(t,s,c)}}}catch(c){Oe(t,t.return,c)}if(t===e){Y=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Y=l;break}Y=t.return}}var FT=Math.ceil,Dl=nr.ReactCurrentDispatcher,pf=nr.ReactCurrentOwner,Kt=nr.ReactCurrentBatchConfig,fe=0,Xe=null,Ve=null,tt=0,At=0,qo=Ur(0),qe=0,Hs=null,Co=0,mc=0,mf=0,xs=null,St=null,gf=0,Ci=1/0,Vn=null,Ll=!1,Id=null,Ir=null,Oa=!1,Tr=null,Ol=0,ws=0,Rd=null,rl=-1,ol=0;function yt(){return fe&6?_e():rl!==-1?rl:rl=_e()}function Rr(e){return e.mode&1?fe&2&&tt!==0?tt&-tt:wT.transition!==null?(ol===0&&(ol=lx()),ol):(e=ge,e!==0||(e=window.event,e=e===void 0?16:mx(e.type)),e):1}function gn(e,t,n,r){if(50<ws)throw ws=0,Rd=null,Error(L(185));ia(e,n,r),(!(fe&2)||e!==Xe)&&(e===Xe&&(!(fe&2)&&(mc|=n),qe===4&&yr(e,tt)),Pt(e,r),n===1&&fe===0&&!(t.mode&1)&&(Ci=_e()+500,dc&&Yr()))}function Pt(e,t){var n=e.callbackNode;wC(e,t);var r=xl(e,e===Xe?tt:0);if(r===0)n!==null&&Jp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jp(n),t===1)e.tag===0?xT(zm.bind(null,e)):Dx(zm.bind(null,e)),mT(function(){!(fe&6)&&Yr()}),n=null;else{switch(cx(r)){case 1:n=Vh;break;case 4:n=sx;break;case 16:n=vl;break;case 536870912:n=ax;break;default:n=vl}n=Iw(n,Tw.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tw(e,t){if(rl=-1,ol=0,fe&6)throw Error(L(327));var n=e.callbackNode;if(ii()&&e.callbackNode!==n)return null;var r=xl(e,e===Xe?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fl(e,r);else{t=r;var o=fe;fe|=2;var i=jw();(Xe!==e||tt!==t)&&(Vn=null,Ci=_e()+500,yo(e,t));do try{WT();break}catch(l){Pw(e,l)}while(!0);ef(),Dl.current=i,fe=o,Ve!==null?t=0:(Xe=null,tt=0,t=qe)}if(t!==0){if(t===2&&(o=sd(e),o!==0&&(r=o,t=Dd(e,o))),t===1)throw n=Hs,yo(e,0),yr(e,r),Pt(e,_e()),n;if(t===6)yr(e,r);else{if(o=e.current.alternate,!(r&30)&&!BT(o)&&(t=Fl(e,r),t===2&&(i=sd(e),i!==0&&(r=i,t=Dd(e,i))),t===1))throw n=Hs,yo(e,0),yr(e,r),Pt(e,_e()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:no(e,St,Vn);break;case 3:if(yr(e,r),(r&130023424)===r&&(t=gf+500-_e(),10<t)){if(xl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){yt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=pd(no.bind(null,e,St,Vn),t);break}no(e,St,Vn);break;case 4:if(yr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-mn(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FT(r/1960))-r,10<r){e.timeoutHandle=pd(no.bind(null,e,St,Vn),r);break}no(e,St,Vn);break;case 5:no(e,St,Vn);break;default:throw Error(L(329))}}}return Pt(e,_e()),e.callbackNode===n?Tw.bind(null,e):null}function Dd(e,t){var n=xs;return e.current.memoizedState.isDehydrated&&(yo(e,t).flags|=256),e=Fl(e,t),e!==2&&(t=St,St=n,t!==null&&Ld(t)),e}function Ld(e){St===null?St=e:St.push.apply(St,e)}function BT(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!yn(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yr(e,t){for(t&=~mf,t&=~mc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mn(t),r=1<<n;e[n]=-1,t&=~r}}function zm(e){if(fe&6)throw Error(L(327));ii();var t=xl(e,0);if(!(t&1))return Pt(e,_e()),null;var n=Fl(e,t);if(e.tag!==0&&n===2){var r=sd(e);r!==0&&(t=r,n=Dd(e,r))}if(n===1)throw n=Hs,yo(e,0),yr(e,t),Pt(e,_e()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,no(e,St,Vn),Pt(e,_e()),null}function yf(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(Ci=_e()+500,dc&&Yr())}}function To(e){Tr!==null&&Tr.tag===0&&!(fe&6)&&ii();var t=fe;fe|=1;var n=Kt.transition,r=ge;try{if(Kt.transition=null,ge=1,e)return e()}finally{ge=r,Kt.transition=n,fe=t,!(fe&6)&&Yr()}}function vf(){At=qo.current,Ce(qo)}function yo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pT(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Jh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:Si(),Ce(Ct),Ce(dt),af();break;case 5:sf(r);break;case 4:Si();break;case 13:Ce(Ee);break;case 19:Ce(Ee);break;case 10:tf(r.type._context);break;case 22:case 23:vf()}n=n.return}if(Xe=e,Ve=e=Dr(e.current,null),tt=At=t,qe=0,Hs=null,mf=mc=Co=0,St=xs=null,so!==null){for(t=0;t<so.length;t++)if(n=so[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}so=null}return e}function Pw(e,t){do{var n=Ve;try{if(ef(),el.current=Rl,Il){for(var r=Ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Il=!1}if(ko=0,Je=Ge=Ae=null,ys=!1,_s=0,pf.current=null,n===null||n.return===null){qe=1,Hs=t,Ve=null;break}e:{var i=e,s=n.return,l=n,c=t;if(t=tt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=Mm(s);if(f!==null){f.flags&=-257,Am(f,s,l,i,t),f.mode&1&&Em(i,u,t),t=f,c=u;var w=t.updateQueue;if(w===null){var x=new Set;x.add(c),t.updateQueue=x}else w.add(c);break e}else{if(!(t&1)){Em(i,u,t),xf();break e}c=Error(L(426))}}else if(Ne&&l.mode&1){var b=Mm(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Am(b,s,l,i,t),Xh(ki(c,l));break e}}i=c=ki(c,l),qe!==4&&(qe=2),xs===null?xs=[i]:xs.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=cw(i,c,t);km(i,g);break e;case 1:l=c;var v=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ir===null||!Ir.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=uw(i,l,t);km(i,S);break e}}i=i.return}while(i!==null)}Ew(n)}catch(k){t=k,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function jw(){var e=Dl.current;return Dl.current=Rl,e===null?Rl:e}function xf(){(qe===0||qe===3||qe===2)&&(qe=4),Xe===null||!(Co&268435455)&&!(mc&268435455)||yr(Xe,tt)}function Fl(e,t){var n=fe;fe|=2;var r=jw();(Xe!==e||tt!==t)&&(Vn=null,yo(e,t));do try{_T();break}catch(o){Pw(e,o)}while(!0);if(ef(),fe=n,Dl.current=r,Ve!==null)throw Error(L(261));return Xe=null,tt=0,qe}function _T(){for(;Ve!==null;)Nw(Ve)}function WT(){for(;Ve!==null&&!dC();)Nw(Ve)}function Nw(e){var t=Aw(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?Ew(e):Ve=t,pf.current=null}function Ew(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=RT(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,Ve=null;return}}else if(n=IT(n,t,At),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);qe===0&&(qe=5)}function no(e,t,n){var r=ge,o=Kt.transition;try{Kt.transition=null,ge=1,VT(e,t,n,r)}finally{Kt.transition=o,ge=r}return null}function VT(e,t,n,r){do ii();while(Tr!==null);if(fe&6)throw Error(L(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(bC(e,i),e===Xe&&(Ve=Xe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oa||(Oa=!0,Iw(vl,function(){return ii(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Kt.transition,Kt.transition=null;var s=ge;ge=1;var l=fe;fe|=4,pf.current=null,LT(e,n),kw(n,e),aT(hd),wl=!!dd,hd=dd=null,e.current=n,OT(n),hC(),fe=l,ge=s,Kt.transition=i}else e.current=n;if(Oa&&(Oa=!1,Tr=e,Ol=o),i=e.pendingLanes,i===0&&(Ir=null),mC(n.stateNode),Pt(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ll)throw Ll=!1,e=Id,Id=null,e;return Ol&1&&e.tag!==0&&ii(),i=e.pendingLanes,i&1?e===Rd?ws++:(ws=0,Rd=e):ws=0,Yr(),null}function ii(){if(Tr!==null){var e=cx(Ol),t=Kt.transition,n=ge;try{if(Kt.transition=null,ge=16>e?16:e,Tr===null)var r=!1;else{if(e=Tr,Tr=null,Ol=0,fe&6)throw Error(L(331));var o=fe;for(fe|=4,Y=e.current;Y!==null;){var i=Y,s=i.child;if(Y.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(Y=u;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:vs(8,d,i)}var h=d.child;if(h!==null)h.return=d,Y=h;else for(;Y!==null;){d=Y;var p=d.sibling,f=d.return;if(ww(d),d===u){Y=null;break}if(p!==null){p.return=f,Y=p;break}Y=f}}}var w=i.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}Y=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,Y=s;else e:for(;Y!==null;){if(i=Y,i.flags&2048)switch(i.tag){case 0:case 11:case 15:vs(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,Y=g;break e}Y=i.return}}var v=e.current;for(Y=v;Y!==null;){s=Y;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,Y=y;else e:for(s=v;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pc(9,l)}}catch(k){Oe(l,l.return,k)}if(l===s){Y=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,Y=S;break e}Y=l.return}}if(fe=o,Yr(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(sc,e)}catch{}r=!0}return r}finally{ge=n,Kt.transition=t}}return!1}function $m(e,t,n){t=ki(n,t),t=cw(e,t,1),e=Ar(e,t,1),t=yt(),e!==null&&(ia(e,1,t),Pt(e,t))}function Oe(e,t,n){if(e.tag===3)$m(e,e,n);else for(;t!==null;){if(t.tag===3){$m(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){e=ki(n,e),e=uw(t,e,1),t=Ar(t,e,1),e=yt(),t!==null&&(ia(t,1,e),Pt(t,e));break}}t=t.return}}function HT(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(tt&n)===n&&(qe===4||qe===3&&(tt&130023424)===tt&&500>_e()-gf?yo(e,0):mf|=n),Pt(e,t)}function Mw(e,t){t===0&&(e.mode&1?(t=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):t=1);var n=yt();e=Jn(e,t),e!==null&&(ia(e,t,n),Pt(e,n))}function zT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mw(e,n)}function $T(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),Mw(e,n)}var Aw;Aw=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ct.current)kt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return kt=!1,AT(e,t,n);kt=!!(e.flags&131072)}else kt=!1,Ne&&t.flags&1048576&&Lx(t,jl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;nl(e,t),e=t.pendingProps;var o=xi(t,dt.current);oi(t,n),o=cf(null,t,r,e,o,n);var i=uf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Tt(r)?(i=!0,Tl(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,rf(t),o.updater=fc,t.stateNode=o,o._reactInternals=t,bd(t,r,e,n),t=Cd(null,t,r,!0,i,n)):(t.tag=0,Ne&&i&&Qh(t),pt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(nl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=YT(r),e=ln(r,e),o){case 0:t=kd(null,t,r,e,n);break e;case 1:t=Dm(null,t,r,e,n);break e;case 11:t=Im(null,t,r,e,n);break e;case 14:t=Rm(null,t,r,ln(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ln(r,o),kd(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ln(r,o),Dm(e,t,r,o,n);case 3:e:{if(pw(t),e===null)throw Error(L(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Vx(e,t),Ml(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ki(Error(L(423)),t),t=Lm(e,t,r,n,o);break e}else if(r!==o){o=ki(Error(L(424)),t),t=Lm(e,t,r,n,o);break e}else for(Rt=Mr(t.stateNode.containerInfo.firstChild),Dt=t,Ne=!0,fn=null,n=_x(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wi(),r===o){t=Xn(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return Hx(t),e===null&&vd(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,fd(r,o)?s=null:i!==null&&fd(r,i)&&(t.flags|=32),fw(e,t),pt(e,t,s,n),t.child;case 6:return e===null&&vd(t),null;case 13:return mw(e,t,n);case 4:return of(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bi(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ln(r,o),Im(e,t,r,o,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,we(Nl,r._currentValue),r._currentValue=s,i!==null)if(yn(i.value,s)){if(i.children===o.children&&!Ct.current){t=Xn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Yn(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),xd(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(L(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xd(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}pt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,oi(t,n),o=Jt(o),r=r(o),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,o=ln(r,t.pendingProps),o=ln(r.type,o),Rm(e,t,r,o,n);case 15:return dw(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ln(r,o),nl(e,t),t.tag=1,Tt(r)?(e=!0,Tl(t)):e=!1,oi(t,n),lw(t,r,o),bd(t,r,o,n),Cd(null,t,r,!0,e,n);case 19:return gw(e,t,n);case 22:return hw(e,t,n)}throw Error(L(156,t.tag))};function Iw(e,t){return ix(e,t)}function UT(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,r){return new UT(e,t,n,r)}function wf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function YT(e){if(typeof e=="function")return wf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bh)return 11;if(e===_h)return 14}return 2}function Dr(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function il(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")wf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Bo:return vo(n.children,o,i,t);case Fh:s=8,o|=8;break;case Uu:return e=qt(12,n,t,o|2),e.elementType=Uu,e.lanes=i,e;case Yu:return e=qt(13,n,t,o),e.elementType=Yu,e.lanes=i,e;case Gu:return e=qt(19,n,t,o),e.elementType=Gu,e.lanes=i,e;case Hv:return gc(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wv:s=10;break e;case Vv:s=9;break e;case Bh:s=11;break e;case _h:s=14;break e;case pr:s=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=qt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function vo(e,t,n,r){return e=qt(7,e,r,t),e.lanes=n,e}function gc(e,t,n,r){return e=qt(22,e,r,t),e.elementType=Hv,e.lanes=n,e.stateNode={isHidden:!1},e}function yu(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function vu(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function GT(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xc(0),this.expirationTimes=Xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function bf(e,t,n,r,o,i,s,l,c){return e=new GT(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rf(i),e}function qT(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rw(e){if(!e)return Fr;e=e._reactInternals;e:{if(No(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(Tt(n))return Rx(e,n,t)}return t}function Dw(e,t,n,r,o,i,s,l,c){return e=bf(n,r,!0,e,o,i,s,l,c),e.context=Rw(null),n=e.current,r=yt(),o=Rr(n),i=Yn(r,o),i.callback=t??null,Ar(n,i,o),e.current.lanes=o,ia(e,o,r),Pt(e,r),e}function yc(e,t,n,r){var o=t.current,i=yt(),s=Rr(o);return n=Rw(n),t.context===null?t.context=n:t.pendingContext=n,t=Yn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ar(o,t,s),e!==null&&(gn(e,o,s,i),Za(e,o,s)),s}function Bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Um(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sf(e,t){Um(e,t),(e=e.alternate)&&Um(e,t)}function KT(){return null}var Lw=typeof reportError=="function"?reportError:function(e){console.error(e)};function kf(e){this._internalRoot=e}vc.prototype.render=kf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));yc(e,t,null,null)};vc.prototype.unmount=kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;To(function(){yc(null,e,null,null)}),t[Qn]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var t=hx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gr.length&&t!==0&&t<gr[n].priority;n++);gr.splice(n,0,e),n===0&&px(e)}};function Cf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function QT(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Bl(s);i.call(u)}}var s=Dw(t,r,e,0,null,!1,!1,"",Ym);return e._reactRootContainer=s,e[Qn]=s.current,Ds(e.nodeType===8?e.parentNode:e),To(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Bl(c);l.call(u)}}var c=bf(e,0,!1,null,null,!1,!1,"",Ym);return e._reactRootContainer=c,e[Qn]=c.current,Ds(e.nodeType===8?e.parentNode:e),To(function(){yc(t,c,n,r)}),c}function wc(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var c=Bl(s);l.call(c)}}yc(t,s,e,o)}else s=QT(n,t,e,o,r);return Bl(s)}ux=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=as(t.pendingLanes);n!==0&&(Hh(t,n|1),Pt(t,_e()),!(fe&6)&&(Ci=_e()+500,Yr()))}break;case 13:To(function(){var r=Jn(e,1);if(r!==null){var o=yt();gn(r,e,1,o)}}),Sf(e,1)}};zh=function(e){if(e.tag===13){var t=Jn(e,134217728);if(t!==null){var n=yt();gn(t,e,134217728,n)}Sf(e,134217728)}};dx=function(e){if(e.tag===13){var t=Rr(e),n=Jn(e,t);if(n!==null){var r=yt();gn(n,e,t,r)}Sf(e,t)}};hx=function(){return ge};fx=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};rd=function(e,t,n){switch(t){case"input":if(Qu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=uc(r);if(!o)throw Error(L(90));$v(r),Qu(r,o)}}}break;case"textarea":Yv(e,n);break;case"select":t=n.value,t!=null&&ei(e,!!n.multiple,t,!1)}};Zv=yf;ex=To;var JT={usingClientEntryPoint:!1,Events:[aa,Ho,uc,Jv,Xv,yf]},Xi={findFiberByHostInstance:io,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XT={bundleType:Xi.bundleType,version:Xi.version,rendererPackageName:Xi.rendererPackageName,rendererConfig:Xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rx(e),e===null?null:e.stateNode},findFiberByHostInstance:Xi.findFiberByHostInstance||KT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{sc=Fa.inject(XT),En=Fa}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JT;_t.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(t))throw Error(L(200));return qT(e,t,null,n)};_t.createRoot=function(e,t){if(!Cf(e))throw Error(L(299));var n=!1,r="",o=Lw;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=bf(e,1,!1,null,null,n,!1,r,o),e[Qn]=t.current,Ds(e.nodeType===8?e.parentNode:e),new kf(t)};_t.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=rx(t),e=e===null?null:e.stateNode,e};_t.flushSync=function(e){return To(e)};_t.hydrate=function(e,t,n){if(!xc(t))throw Error(L(200));return wc(null,e,t,!0,n)};_t.hydrateRoot=function(e,t,n){if(!Cf(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Lw;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Dw(t,null,e,1,n??null,o,!1,i,s),e[Qn]=t.current,Ds(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new vc(t)};_t.render=function(e,t,n){if(!xc(t))throw Error(L(200));return wc(null,e,t,!1,n)};_t.unmountComponentAtNode=function(e){if(!xc(e))throw Error(L(40));return e._reactRootContainer?(To(function(){wc(null,null,e,!1,function(){e._reactRootContainer=null,e[Qn]=null})}),!0):!1};_t.unstable_batchedUpdates=yf;_t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xc(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return wc(e,t,n,!1,r)};_t.version="18.3.1-next-f1338f8080-20240426";function Ow(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ow)}catch(e){console.error(e)}}Ow(),Ov.exports=_t;var ca=Ov.exports;const Tf=ra(ca);var Fw,Gm=ca;Fw=Gm.createRoot,Gm.hydrateRoot;const ZT=1,eP=1e6;let xu=0;function tP(){return xu=(xu+1)%Number.MAX_SAFE_INTEGER,xu.toString()}const wu=new Map,qm=e=>{if(wu.has(e))return;const t=setTimeout(()=>{wu.delete(e),bs({type:"REMOVE_TOAST",toastId:e})},eP);wu.set(e,t)},nP=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,ZT)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?qm(n):e.toasts.forEach(r=>{qm(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},sl=[];let al={toasts:[]};function bs(e){al=nP(al,e),sl.forEach(t=>{t(al)})}function rP({...e}){const t=tP(),n=o=>bs({type:"UPDATE_TOAST",toast:{...o,id:t}}),r=()=>bs({type:"DISMISS_TOAST",toastId:t});return bs({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:o=>{o||r()}}}),{id:t,dismiss:r,update:n}}function bc(){const[e,t]=m.useState(al);return m.useEffect(()=>(sl.push(t),()=>{const n=sl.indexOf(t);n>-1&&sl.splice(n,1)}),[e]),{...e,toast:rP,dismiss:n=>bs({type:"DISMISS_TOAST",toastId:n})}}function ie(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Km(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function ua(...e){return t=>{let n=!1;const r=e.map(o=>{const i=Km(o,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let o=0;o<r.length;o++){const i=r[o];typeof i=="function"?i():Km(e[o],null)}}}}function Fe(...e){return m.useCallback(ua(...e),e)}function Li(e,t=[]){let n=[];function r(i,s){const l=m.createContext(s),c=n.length;n=[...n,s];const u=h=>{var g;const{scope:p,children:f,...w}=h,x=((g=p==null?void 0:p[e])==null?void 0:g[c])||l,b=m.useMemo(()=>w,Object.values(w));return a.jsx(x.Provider,{value:b,children:f})};u.displayName=i+"Provider";function d(h,p){var x;const f=((x=p==null?void 0:p[e])==null?void 0:x[c])||l,w=m.useContext(f);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${h}\` must be used within \`${i}\``)}return[u,d]}const o=()=>{const i=n.map(s=>m.createContext(s));return function(l){const c=(l==null?void 0:l[e])||i;return m.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return o.scopeName=e,[r,oP(o,...t)]}function oP(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const s=r.reduce((l,{useScope:c,scopeName:u})=>{const h=c(i)[`__scope${u}`];return{...l,...h}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function Qm(e){const t=iP(e),n=m.forwardRef((r,o)=>{const{children:i,...s}=r,l=m.Children.toArray(i),c=l.find(aP);if(c){const u=c.props.children,d=l.map(h=>h===c?m.Children.count(u)>1?m.Children.only(null):m.isValidElement(u)?u.props.children:null:h);return a.jsx(t,{...s,ref:o,children:m.isValidElement(u)?m.cloneElement(u,void 0,d):null})}return a.jsx(t,{...s,ref:o,children:i})});return n.displayName=`${e}.Slot`,n}function iP(e){const t=m.forwardRef((n,r)=>{const{children:o,...i}=n;if(m.isValidElement(o)){const s=cP(o),l=lP(i,o.props);return o.type!==m.Fragment&&(l.ref=r?ua(r,s):s),m.cloneElement(o,l)}return m.Children.count(o)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var sP=Symbol("radix.slottable");function aP(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===sP}function lP(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...l)=>{const c=i(...l);return o(...l),c}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function cP(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Sc(e){const t=e+"CollectionProvider",[n,r]=Li(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=x=>{const{scope:b,children:g}=x,v=O.useRef(null),y=O.useRef(new Map).current;return a.jsx(o,{scope:b,itemMap:y,collectionRef:v,children:g})};s.displayName=t;const l=e+"CollectionSlot",c=Qm(l),u=O.forwardRef((x,b)=>{const{scope:g,children:v}=x,y=i(l,g),S=Fe(b,y.collectionRef);return a.jsx(c,{ref:S,children:v})});u.displayName=l;const d=e+"CollectionItemSlot",h="data-radix-collection-item",p=Qm(d),f=O.forwardRef((x,b)=>{const{scope:g,children:v,...y}=x,S=O.useRef(null),k=Fe(b,S),P=i(d,g);return O.useEffect(()=>(P.itemMap.set(S,{ref:S,...y}),()=>void P.itemMap.delete(S))),a.jsx(p,{[h]:"",ref:k,children:v})});f.displayName=d;function w(x){const b=i(e+"CollectionConsumer",x);return O.useCallback(()=>{const v=b.collectionRef.current;if(!v)return[];const y=Array.from(v.querySelectorAll(`[${h}]`));return Array.from(b.itemMap.values()).sort((P,j)=>y.indexOf(P.ref.current)-y.indexOf(j.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:s,Slot:u,ItemSlot:f},w,r]}function uP(e){const t=dP(e),n=m.forwardRef((r,o)=>{const{children:i,...s}=r,l=m.Children.toArray(i),c=l.find(fP);if(c){const u=c.props.children,d=l.map(h=>h===c?m.Children.count(u)>1?m.Children.only(null):m.isValidElement(u)?u.props.children:null:h);return a.jsx(t,{...s,ref:o,children:m.isValidElement(u)?m.cloneElement(u,void 0,d):null})}return a.jsx(t,{...s,ref:o,children:i})});return n.displayName=`${e}.Slot`,n}function dP(e){const t=m.forwardRef((n,r)=>{const{children:o,...i}=n;if(m.isValidElement(o)){const s=mP(o),l=pP(i,o.props);return o.type!==m.Fragment&&(l.ref=r?ua(r,s):s),m.cloneElement(o,l)}return m.Children.count(o)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var hP=Symbol("radix.slottable");function fP(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===hP}function pP(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...l)=>{const c=i(...l);return o(...l),c}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function mP(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var gP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],me=gP.reduce((e,t)=>{const n=uP(`Primitive.${t}`),r=m.forwardRef((o,i)=>{const{asChild:s,...l}=o,c=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(c,{...l,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function _l(e,t){e&&ca.flushSync(()=>e.dispatchEvent(t))}function mt(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function yP(e,t=globalThis==null?void 0:globalThis.document){const n=mt(e);m.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var vP="DismissableLayer",Od="dismissableLayer.update",xP="dismissableLayer.pointerDownOutside",wP="dismissableLayer.focusOutside",Jm,Bw=m.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),kc=m.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:s,onDismiss:l,...c}=e,u=m.useContext(Bw),[d,h]=m.useState(null),p=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,f]=m.useState({}),w=Fe(t,j=>h(j)),x=Array.from(u.layers),[b]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),g=x.indexOf(b),v=d?x.indexOf(d):-1,y=u.layersWithOutsidePointerEventsDisabled.size>0,S=v>=g,k=SP(j=>{const N=j.target,R=[...u.branches].some(M=>M.contains(N));!S||R||(o==null||o(j),s==null||s(j),j.defaultPrevented||l==null||l())},p),P=kP(j=>{const N=j.target;[...u.branches].some(M=>M.contains(N))||(i==null||i(j),s==null||s(j),j.defaultPrevented||l==null||l())},p);return yP(j=>{v===u.layers.size-1&&(r==null||r(j),!j.defaultPrevented&&l&&(j.preventDefault(),l()))},p),m.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Jm=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Xm(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=Jm)}},[d,p,n,u]),m.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Xm())},[d,u]),m.useEffect(()=>{const j=()=>f({});return document.addEventListener(Od,j),()=>document.removeEventListener(Od,j)},[]),a.jsx(me.div,{...c,ref:w,style:{pointerEvents:y?S?"auto":"none":void 0,...e.style},onFocusCapture:ie(e.onFocusCapture,P.onFocusCapture),onBlurCapture:ie(e.onBlurCapture,P.onBlurCapture),onPointerDownCapture:ie(e.onPointerDownCapture,k.onPointerDownCapture)})});kc.displayName=vP;var bP="DismissableLayerBranch",_w=m.forwardRef((e,t)=>{const n=m.useContext(Bw),r=m.useRef(null),o=Fe(t,r);return m.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),a.jsx(me.div,{...e,ref:o})});_w.displayName=bP;function SP(e,t=globalThis==null?void 0:globalThis.document){const n=mt(e),r=m.useRef(!1),o=m.useRef(()=>{});return m.useEffect(()=>{const i=l=>{if(l.target&&!r.current){let c=function(){Ww(xP,n,u,{discrete:!0})};const u={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=c,t.addEventListener("click",o.current,{once:!0})):c()}else t.removeEventListener("click",o.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function kP(e,t=globalThis==null?void 0:globalThis.document){const n=mt(e),r=m.useRef(!1);return m.useEffect(()=>{const o=i=>{i.target&&!r.current&&Ww(wP,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Xm(){const e=new CustomEvent(Od);document.dispatchEvent(e)}function Ww(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?_l(o,i):o.dispatchEvent(i)}var CP=kc,TP=_w,Zt=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{},PP="Portal",Vw=m.forwardRef((e,t)=>{var l;const{container:n,...r}=e,[o,i]=m.useState(!1);Zt(()=>i(!0),[]);const s=n||o&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return s?Tf.createPortal(a.jsx(me.div,{...r,ref:t}),s):null});Vw.displayName=PP;function jP(e,t){return m.useReducer((n,r)=>t[n][r]??n,e)}var Eo=e=>{const{present:t,children:n}=e,r=NP(t),o=typeof n=="function"?n({present:r.isPresent}):m.Children.only(n),i=Fe(r.ref,EP(o));return typeof n=="function"||r.isPresent?m.cloneElement(o,{ref:i}):null};Eo.displayName="Presence";function NP(e){const[t,n]=m.useState(),r=m.useRef(null),o=m.useRef(e),i=m.useRef("none"),s=e?"mounted":"unmounted",[l,c]=jP(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const u=Ba(r.current);i.current=l==="mounted"?u:"none"},[l]),Zt(()=>{const u=r.current,d=o.current;if(d!==e){const p=i.current,f=Ba(u);e?c("MOUNT"):f==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(d&&p!==f?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,c]),Zt(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,h=f=>{const x=Ba(r.current).includes(CSS.escape(f.animationName));if(f.target===t&&x&&(c("ANIMATION_END"),!o.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},p=f=>{f.target===t&&(i.current=Ba(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:m.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function Ba(e){return(e==null?void 0:e.animationName)||"none"}function EP(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var MP=ic[" useInsertionEffect ".trim().toString()]||Zt;function Cc({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,i,s]=AP({defaultProp:t,onChange:n}),l=e!==void 0,c=l?e:o;{const d=m.useRef(e!==void 0);m.useEffect(()=>{const h=d.current;h!==l&&console.warn(`${r} is changing from ${h?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=l},[l,r])}const u=m.useCallback(d=>{var h;if(l){const p=IP(d)?d(e):d;p!==e&&((h=s.current)==null||h.call(s,p))}else i(d)},[l,e,i,s]);return[c,u]}function AP({defaultProp:e,onChange:t}){const[n,r]=m.useState(e),o=m.useRef(n),i=m.useRef(t);return MP(()=>{i.current=t},[t]),m.useEffect(()=>{var s;o.current!==n&&((s=i.current)==null||s.call(i,n),o.current=n)},[n,o]),[n,r,i]}function IP(e){return typeof e=="function"}var RP=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),DP="VisuallyHidden",Tc=m.forwardRef((e,t)=>a.jsx(me.span,{...e,ref:t,style:{...RP,...e.style}}));Tc.displayName=DP;var Hw=Tc,Pf="ToastProvider",[jf,LP,OP]=Sc("Toast"),[zw]=Li("Toast",[OP]),[FP,Pc]=zw(Pf),$w=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:i=50,children:s}=e,[l,c]=m.useState(null),[u,d]=m.useState(0),h=m.useRef(!1),p=m.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Pf}\`. Expected non-empty \`string\`.`),a.jsx(jf.Provider,{scope:t,children:a.jsx(FP,{scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:i,toastCount:u,viewport:l,onViewportChange:c,onToastAdd:m.useCallback(()=>d(f=>f+1),[]),onToastRemove:m.useCallback(()=>d(f=>f-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:p,children:s})})};$w.displayName=Pf;var Uw="ToastViewport",BP=["F8"],Fd="toast.viewportPause",Bd="toast.viewportResume",Yw=m.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=BP,label:o="Notifications ({hotkey})",...i}=e,s=Pc(Uw,n),l=LP(n),c=m.useRef(null),u=m.useRef(null),d=m.useRef(null),h=m.useRef(null),p=Fe(t,h,s.onViewportChange),f=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),w=s.toastCount>0;m.useEffect(()=>{const b=g=>{var y;r.length!==0&&r.every(S=>g[S]||g.code===S)&&((y=h.current)==null||y.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[r]),m.useEffect(()=>{const b=c.current,g=h.current;if(w&&b&&g){const v=()=>{if(!s.isClosePausedRef.current){const P=new CustomEvent(Fd);g.dispatchEvent(P),s.isClosePausedRef.current=!0}},y=()=>{if(s.isClosePausedRef.current){const P=new CustomEvent(Bd);g.dispatchEvent(P),s.isClosePausedRef.current=!1}},S=P=>{!b.contains(P.relatedTarget)&&y()},k=()=>{b.contains(document.activeElement)||y()};return b.addEventListener("focusin",v),b.addEventListener("focusout",S),b.addEventListener("pointermove",v),b.addEventListener("pointerleave",k),window.addEventListener("blur",v),window.addEventListener("focus",y),()=>{b.removeEventListener("focusin",v),b.removeEventListener("focusout",S),b.removeEventListener("pointermove",v),b.removeEventListener("pointerleave",k),window.removeEventListener("blur",v),window.removeEventListener("focus",y)}}},[w,s.isClosePausedRef]);const x=m.useCallback(({tabbingDirection:b})=>{const v=l().map(y=>{const S=y.ref.current,k=[S,...JP(S)];return b==="forwards"?k:k.reverse()});return(b==="forwards"?v.reverse():v).flat()},[l]);return m.useEffect(()=>{const b=h.current;if(b){const g=v=>{var k,P,j;const y=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!y){const N=document.activeElement,R=v.shiftKey;if(v.target===b&&R){(k=u.current)==null||k.focus();return}const V=x({tabbingDirection:R?"backwards":"forwards"}),$=V.findIndex(_=>_===N);bu(V.slice($+1))?v.preventDefault():R?(P=u.current)==null||P.focus():(j=d.current)==null||j.focus()}};return b.addEventListener("keydown",g),()=>b.removeEventListener("keydown",g)}},[l,x]),a.jsxs(TP,{ref:c,role:"region","aria-label":o.replace("{hotkey}",f),tabIndex:-1,style:{pointerEvents:w?void 0:"none"},children:[w&&a.jsx(_d,{ref:u,onFocusFromOutsideViewport:()=>{const b=x({tabbingDirection:"forwards"});bu(b)}}),a.jsx(jf.Slot,{scope:n,children:a.jsx(me.ol,{tabIndex:-1,...i,ref:p})}),w&&a.jsx(_d,{ref:d,onFocusFromOutsideViewport:()=>{const b=x({tabbingDirection:"backwards"});bu(b)}})]})});Yw.displayName=Uw;var Gw="ToastFocusProxy",_d=m.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,i=Pc(Gw,n);return a.jsx(Tc,{tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:s=>{var u;const l=s.relatedTarget;!((u=i.viewport)!=null&&u.contains(l))&&r()}})});_d.displayName=Gw;var da="Toast",_P="toast.swipeStart",WP="toast.swipeMove",VP="toast.swipeCancel",HP="toast.swipeEnd",qw=m.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:o,onOpenChange:i,...s}=e,[l,c]=Cc({prop:r,defaultProp:o??!0,onChange:i,caller:da});return a.jsx(Eo,{present:n||l,children:a.jsx(UP,{open:l,...s,ref:t,onClose:()=>c(!1),onPause:mt(e.onPause),onResume:mt(e.onResume),onSwipeStart:ie(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ie(e.onSwipeMove,u=>{const{x:d,y:h}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:ie(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ie(e.onSwipeEnd,u=>{const{x:d,y:h}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),c(!1)})})})});qw.displayName=da;var[zP,$P]=zw(da,{onClose(){}}),UP=m.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:o,open:i,onClose:s,onEscapeKeyDown:l,onPause:c,onResume:u,onSwipeStart:d,onSwipeMove:h,onSwipeCancel:p,onSwipeEnd:f,...w}=e,x=Pc(da,n),[b,g]=m.useState(null),v=Fe(t,_=>g(_)),y=m.useRef(null),S=m.useRef(null),k=o||x.duration,P=m.useRef(0),j=m.useRef(k),N=m.useRef(0),{onToastAdd:R,onToastRemove:M}=x,B=mt(()=>{var X;(b==null?void 0:b.contains(document.activeElement))&&((X=x.viewport)==null||X.focus()),s()}),V=m.useCallback(_=>{!_||_===1/0||(window.clearTimeout(N.current),P.current=new Date().getTime(),N.current=window.setTimeout(B,_))},[B]);m.useEffect(()=>{const _=x.viewport;if(_){const X=()=>{V(j.current),u==null||u()},G=()=>{const z=new Date().getTime()-P.current;j.current=j.current-z,window.clearTimeout(N.current),c==null||c()};return _.addEventListener(Fd,G),_.addEventListener(Bd,X),()=>{_.removeEventListener(Fd,G),_.removeEventListener(Bd,X)}}},[x.viewport,k,c,u,V]),m.useEffect(()=>{i&&!x.isClosePausedRef.current&&V(k)},[i,k,x.isClosePausedRef,V]),m.useEffect(()=>(R(),()=>M()),[R,M]);const $=m.useMemo(()=>b?t0(b):null,[b]);return x.viewport?a.jsxs(a.Fragment,{children:[$&&a.jsx(YP,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite",children:$}),a.jsx(zP,{scope:n,onClose:B,children:ca.createPortal(a.jsx(jf.ItemSlot,{scope:n,children:a.jsx(CP,{asChild:!0,onEscapeKeyDown:ie(l,()=>{x.isFocusedToastEscapeKeyDownRef.current||B(),x.isFocusedToastEscapeKeyDownRef.current=!1}),children:a.jsx(me.li,{tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":x.swipeDirection,...w,ref:v,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ie(e.onKeyDown,_=>{_.key==="Escape"&&(l==null||l(_.nativeEvent),_.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,B()))}),onPointerDown:ie(e.onPointerDown,_=>{_.button===0&&(y.current={x:_.clientX,y:_.clientY})}),onPointerMove:ie(e.onPointerMove,_=>{if(!y.current)return;const X=_.clientX-y.current.x,G=_.clientY-y.current.y,z=!!S.current,E=["left","right"].includes(x.swipeDirection),I=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,T=E?I(0,X):0,C=E?0:I(0,G),D=_.pointerType==="touch"?10:2,F={x:T,y:C},W={originalEvent:_,delta:F};z?(S.current=F,_a(WP,h,W,{discrete:!1})):Zm(F,x.swipeDirection,D)?(S.current=F,_a(_P,d,W,{discrete:!1}),_.target.setPointerCapture(_.pointerId)):(Math.abs(X)>D||Math.abs(G)>D)&&(y.current=null)}),onPointerUp:ie(e.onPointerUp,_=>{const X=S.current,G=_.target;if(G.hasPointerCapture(_.pointerId)&&G.releasePointerCapture(_.pointerId),S.current=null,y.current=null,X){const z=_.currentTarget,E={originalEvent:_,delta:X};Zm(X,x.swipeDirection,x.swipeThreshold)?_a(HP,f,E,{discrete:!0}):_a(VP,p,E,{discrete:!0}),z.addEventListener("click",I=>I.preventDefault(),{once:!0})}})})})}),x.viewport)})]}):null}),YP=e=>{const{__scopeToast:t,children:n,...r}=e,o=Pc(da,t),[i,s]=m.useState(!1),[l,c]=m.useState(!1);return KP(()=>s(!0)),m.useEffect(()=>{const u=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(u)},[]),l?null:a.jsx(Vw,{asChild:!0,children:a.jsx(Tc,{...r,children:i&&a.jsxs(a.Fragment,{children:[o.label," ",n]})})})},GP="ToastTitle",Kw=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(me.div,{...r,ref:t})});Kw.displayName=GP;var qP="ToastDescription",Qw=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(me.div,{...r,ref:t})});Qw.displayName=qP;var Jw="ToastAction",Xw=m.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?a.jsx(e0,{altText:n,asChild:!0,children:a.jsx(Nf,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Jw}\`. Expected non-empty \`string\`.`),null)});Xw.displayName=Jw;var Zw="ToastClose",Nf=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,o=$P(Zw,n);return a.jsx(e0,{asChild:!0,children:a.jsx(me.button,{type:"button",...r,ref:t,onClick:ie(e.onClick,o.onClose)})})});Nf.displayName=Zw;var e0=m.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...o}=e;return a.jsx(me.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t})});function t0(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),QP(r)){const o=r.ariaHidden||r.hidden||r.style.display==="none",i=r.dataset.radixToastAnnounceExclude==="";if(!o)if(i){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...t0(r))}}),t}function _a(e,t,n,{discrete:r}){const o=n.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?_l(o,i):o.dispatchEvent(i)}var Zm=(e,t,n=0)=>{const r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;return t==="left"||t==="right"?i&&r>n:!i&&o>n};function KP(e=()=>{}){const t=mt(e);Zt(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function QP(e){return e.nodeType===e.ELEMENT_NODE}function JP(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function bu(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var XP=$w,n0=Yw,r0=qw,o0=Kw,i0=Qw,s0=Xw,a0=Nf;function l0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=l0(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function c0(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=l0(e))&&(r&&(r+=" "),r+=t);return r}const eg=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,tg=c0,Ef=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return tg(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:i}=t,s=Object.keys(o).map(u=>{const d=n==null?void 0:n[u],h=i==null?void 0:i[u];if(d===null)return null;const p=eg(d)||eg(h);return o[u][p]}),l=n&&Object.entries(n).reduce((u,d)=>{let[h,p]=d;return p===void 0||(u[h]=p),u},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,d)=>{let{class:h,className:p,...f}=d;return Object.entries(f).every(w=>{let[x,b]=w;return Array.isArray(b)?b.includes({...i,...l}[x]):{...i,...l}[x]===b})?[...u,h,p]:u},[]);return tg(e,s,c,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u0=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ej={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...l},c)=>m.createElement("svg",{ref:c,...ej,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:u0("lucide",o),...l},[...s.map(([u,d])=>m.createElement(u,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=(e,t)=>{const n=m.forwardRef(({className:r,...o},i)=>m.createElement(tj,{ref:i,iconNode:t,className:u0(`lucide-${ZP(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=Q("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=Q("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=Q("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=Q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=Q("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=Q("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=Q("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=Q("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=Q("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=Q("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=Q("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=Q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=Q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=Q("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=Q("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=Q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=Q("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=Q("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=Q("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uj=Q("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=Q("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=Q("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=Q("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=Q("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=Q("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=Q("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=Q("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=Q("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=Q("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=Q("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=Q("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=Q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=Q("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=Q("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=Q("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=Q("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=Q("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=Q("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=Q("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=Q("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=Q("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=Q("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=Q("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=Q("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=Q("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=Q("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=Q("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=Q("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=Q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=Q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=Q("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),If="-",Mj=e=>{const t=Ij(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const l=s.split(If);return l[0]===""&&l.length!==1&&l.shift(),w0(l,t)||Aj(s)},getConflictingClassGroupIds:(s,l)=>{const c=n[s]||[];return l&&r[s]?[...c,...r[s]]:c}}},w0=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?w0(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const i=e.join(If);return(s=t.validators.find(({validator:l})=>l(i)))==null?void 0:s.classGroupId},ig=/^\[(.+)\]$/,Aj=e=>{if(ig.test(e)){const t=ig.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Ij=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Dj(Object.entries(e.classGroups),n).forEach(([i,s])=>{Hd(s,r,i,t)}),r},Hd=(e,t,n,r)=>{e.forEach(o=>{if(typeof o=="string"){const i=o===""?t:sg(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(Rj(o)){Hd(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,s])=>{Hd(s,sg(t,i),n,r)})})},sg=(e,t)=>{let n=e;return t.split(If).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Rj=e=>e.isThemeGetter,Dj=(e,t)=>t?e.map(([n,r])=>{const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([s,l])=>[t+s,l])):i);return[n,o]}):e,Lj=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const o=(i,s)=>{n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return o(i,s),s},set(i,s){n.has(i)?n.set(i,s):o(i,s)}}},b0="!",Oj=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],i=t.length,s=l=>{const c=[];let u=0,d=0,h;for(let b=0;b<l.length;b++){let g=l[b];if(u===0){if(g===o&&(r||l.slice(b,b+i)===t)){c.push(l.slice(d,b)),d=b+i;continue}if(g==="/"){h=b;continue}}g==="["?u++:g==="]"&&u--}const p=c.length===0?l:l.substring(d),f=p.startsWith(b0),w=f?p.substring(1):p,x=h&&h>d?h-d:void 0;return{modifiers:c,hasImportantModifier:f,baseClassName:w,maybePostfixModifierPosition:x}};return n?l=>n({className:l,parseClassName:s}):s},Fj=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},Bj=e=>({cache:Lj(e.cacheSize),parseClassName:Oj(e),...Mj(e)}),_j=/\s+/,Wj=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=[],s=e.trim().split(_j);let l="";for(let c=s.length-1;c>=0;c-=1){const u=s[c],{modifiers:d,hasImportantModifier:h,baseClassName:p,maybePostfixModifierPosition:f}=n(u);let w=!!f,x=r(w?p.substring(0,f):p);if(!x){if(!w){l=u+(l.length>0?" "+l:l);continue}if(x=r(p),!x){l=u+(l.length>0?" "+l:l);continue}w=!1}const b=Fj(d).join(":"),g=h?b+b0:b,v=g+x;if(i.includes(v))continue;i.push(v);const y=o(x,w);for(let S=0;S<y.length;++S){const k=y[S];i.push(g+k)}l=u+(l.length>0?" "+l:l)}return l};function Vj(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=S0(t))&&(r&&(r+=" "),r+=n);return r}const S0=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=S0(e[r]))&&(n&&(n+=" "),n+=t);return n};function Hj(e,...t){let n,r,o,i=s;function s(c){const u=t.reduce((d,h)=>h(d),e());return n=Bj(u),r=n.cache.get,o=n.cache.set,i=l,l(c)}function l(c){const u=r(c);if(u)return u;const d=Wj(c,n);return o(c,d),d}return function(){return i(Vj.apply(null,arguments))}}const Se=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},k0=/^\[(?:([a-z-]+):)?(.+)\]$/i,zj=/^\d+\/\d+$/,$j=new Set(["px","full","screen"]),Uj=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Yj=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Gj=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,qj=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Kj=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Bn=e=>si(e)||$j.has(e)||zj.test(e),ur=e=>Oi(e,"length",rN),si=e=>!!e&&!Number.isNaN(Number(e)),Su=e=>Oi(e,"number",si),Zi=e=>!!e&&Number.isInteger(Number(e)),Qj=e=>e.endsWith("%")&&si(e.slice(0,-1)),oe=e=>k0.test(e),dr=e=>Uj.test(e),Jj=new Set(["length","size","percentage"]),Xj=e=>Oi(e,Jj,C0),Zj=e=>Oi(e,"position",C0),eN=new Set(["image","url"]),tN=e=>Oi(e,eN,iN),nN=e=>Oi(e,"",oN),es=()=>!0,Oi=(e,t,n)=>{const r=k0.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},rN=e=>Yj.test(e)&&!Gj.test(e),C0=()=>!1,oN=e=>qj.test(e),iN=e=>Kj.test(e),sN=()=>{const e=Se("colors"),t=Se("spacing"),n=Se("blur"),r=Se("brightness"),o=Se("borderColor"),i=Se("borderRadius"),s=Se("borderSpacing"),l=Se("borderWidth"),c=Se("contrast"),u=Se("grayscale"),d=Se("hueRotate"),h=Se("invert"),p=Se("gap"),f=Se("gradientColorStops"),w=Se("gradientColorStopPositions"),x=Se("inset"),b=Se("margin"),g=Se("opacity"),v=Se("padding"),y=Se("saturate"),S=Se("scale"),k=Se("sepia"),P=Se("skew"),j=Se("space"),N=Se("translate"),R=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",oe,t],V=()=>[oe,t],$=()=>["",Bn,ur],_=()=>["auto",si,oe],X=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["solid","dashed","dotted","double","none"],z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],E=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",oe],T=()=>["auto","avoid","all","avoid-page","page","left","right","column"],C=()=>[si,oe];return{cacheSize:500,separator:":",theme:{colors:[es],spacing:[Bn,ur],blur:["none","",dr,oe],brightness:C(),borderColor:[e],borderRadius:["none","","full",dr,oe],borderSpacing:V(),borderWidth:$(),contrast:C(),grayscale:I(),hueRotate:C(),invert:I(),gap:V(),gradientColorStops:[e],gradientColorStopPositions:[Qj,ur],inset:B(),margin:B(),opacity:C(),padding:V(),saturate:C(),scale:C(),sepia:I(),skew:C(),space:V(),translate:V()},classGroups:{aspect:[{aspect:["auto","square","video",oe]}],container:["container"],columns:[{columns:[dr]}],"break-after":[{"break-after":T()}],"break-before":[{"break-before":T()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...X(),oe]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Zi,oe]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",oe]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",Zi,oe]}],"grid-cols":[{"grid-cols":[es]}],"col-start-end":[{col:["auto",{span:["full",Zi,oe]},oe]}],"col-start":[{"col-start":_()}],"col-end":[{"col-end":_()}],"grid-rows":[{"grid-rows":[es]}],"row-start-end":[{row:["auto",{span:[Zi,oe]},oe]}],"row-start":[{"row-start":_()}],"row-end":[{"row-end":_()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",oe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",oe]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...E()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...E(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...E(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",oe,t]}],"min-w":[{"min-w":[oe,t,"min","max","fit"]}],"max-w":[{"max-w":[oe,t,"none","full","min","max","fit","prose",{screen:[dr]},dr]}],h:[{h:[oe,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[oe,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[oe,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[oe,t,"auto","min","max","fit"]}],"font-size":[{text:["base",dr,ur]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Su]}],"font-family":[{font:[es]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",oe]}],"line-clamp":[{"line-clamp":["none",si,Su]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Bn,oe]}],"list-image":[{"list-image":["none",oe]}],"list-style-type":[{list:["none","disc","decimal",oe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...G(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Bn,ur]}],"underline-offset":[{"underline-offset":["auto",Bn,oe]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:V()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",oe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",oe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...X(),Zj]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Xj]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},tN]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...G(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:G()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...G()]}],"outline-offset":[{"outline-offset":[Bn,oe]}],"outline-w":[{outline:[Bn,ur]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[Bn,ur]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",dr,nN]}],"shadow-color":[{shadow:[es]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",dr,oe]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[h]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",oe]}],duration:[{duration:C()}],ease:[{ease:["linear","in","out","in-out",oe]}],delay:[{delay:C()}],animate:[{animate:["none","spin","ping","pulse","bounce",oe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[Zi,oe]}],"translate-x":[{"translate-x":[N]}],"translate-y":[{"translate-y":[N]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",oe]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",oe]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":V()}],"scroll-mx":[{"scroll-mx":V()}],"scroll-my":[{"scroll-my":V()}],"scroll-ms":[{"scroll-ms":V()}],"scroll-me":[{"scroll-me":V()}],"scroll-mt":[{"scroll-mt":V()}],"scroll-mr":[{"scroll-mr":V()}],"scroll-mb":[{"scroll-mb":V()}],"scroll-ml":[{"scroll-ml":V()}],"scroll-p":[{"scroll-p":V()}],"scroll-px":[{"scroll-px":V()}],"scroll-py":[{"scroll-py":V()}],"scroll-ps":[{"scroll-ps":V()}],"scroll-pe":[{"scroll-pe":V()}],"scroll-pt":[{"scroll-pt":V()}],"scroll-pr":[{"scroll-pr":V()}],"scroll-pb":[{"scroll-pb":V()}],"scroll-pl":[{"scroll-pl":V()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",oe]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Bn,ur,Su]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},aN=Hj(sN);function le(...e){return aN(c0(e))}const lN=XP,T0=m.forwardRef(({className:e,...t},n)=>a.jsx(n0,{ref:n,className:le("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));T0.displayName=n0.displayName;const cN=Ef("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),P0=m.forwardRef(({className:e,variant:t,...n},r)=>a.jsx(r0,{ref:r,className:le(cN({variant:t}),e),...n}));P0.displayName=r0.displayName;const uN=m.forwardRef(({className:e,...t},n)=>a.jsx(s0,{ref:n,className:le("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));uN.displayName=s0.displayName;const j0=m.forwardRef(({className:e,...t},n)=>a.jsx(a0,{ref:n,className:le("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:a.jsx(jc,{className:"h-4 w-4"})}));j0.displayName=a0.displayName;const N0=m.forwardRef(({className:e,...t},n)=>a.jsx(o0,{ref:n,className:le("text-sm font-semibold",e),...t}));N0.displayName=o0.displayName;const E0=m.forwardRef(({className:e,...t},n)=>a.jsx(i0,{ref:n,className:le("text-sm opacity-90",e),...t}));E0.displayName=i0.displayName;function dN(){const{toasts:e}=bc();return a.jsxs(lN,{children:[e.map(function({id:t,title:n,description:r,action:o,...i}){return a.jsxs(P0,{...i,children:[a.jsxs("div",{className:"grid gap-1",children:[n&&a.jsx(N0,{children:n}),r&&a.jsx(E0,{children:r})]}),o,a.jsx(j0,{})]},t)}),a.jsx(T0,{})]})}var ag=["light","dark"],hN="(prefers-color-scheme: dark)",fN=m.createContext(void 0),pN={setTheme:e=>{},themes:[]},mN=()=>{var e;return(e=m.useContext(fN))!=null?e:pN};m.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:o,defaultTheme:i,value:s,attrs:l,nonce:c})=>{let u=i==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${l.map(w=>`'${w}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=o?ag.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(w,x=!1,b=!0)=>{let g=s?s[w]:w,v=x?w+"|| ''":`'${g}'`,y="";return o&&b&&!x&&ag.includes(w)&&(y+=`d.style.colorScheme = '${w}';`),n==="class"?x||g?y+=`c.add(${v})`:y+="null":g&&(y+=`d[s](n,${v})`),y},f=e?`!function(){${d}${p(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${hN}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}${u?"":"else{"+p(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}else{${p(i,!1,!1)};}${h}}catch(t){}}();`;return m.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:f}})});var gN=e=>{switch(e){case"success":return xN;case"info":return bN;case"warning":return wN;case"error":return SN;default:return null}},yN=Array(12).fill(0),vN=({visible:e,className:t})=>O.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},O.createElement("div",{className:"sonner-spinner"},yN.map((n,r)=>O.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),xN=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),wN=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),bN=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),SN=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),kN=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},O.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),O.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),CN=()=>{let[e,t]=O.useState(document.hidden);return O.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},zd=1,TN=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,o=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:zd++,i=this.toasts.find(l=>l.id===o),s=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(o)&&this.dismissedToasts.delete(o),i?this.toasts=this.toasts.map(l=>l.id===o?(this.publish({...l,...e,id:o,title:n}),{...l,...e,id:o,dismissible:s,title:n}):l):this.addToast({title:n,...r,dismissible:s,id:o}),o},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),o=n!==void 0,i,s=r.then(async c=>{if(i=["resolve",c],O.isValidElement(c))o=!1,this.create({id:n,type:"default",message:c});else if(jN(c)&&!c.ok){o=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${c.status}`):t.error,d=typeof t.description=="function"?await t.description(`HTTP error! status: ${c.status}`):t.description;this.create({id:n,type:"error",message:u,description:d})}else if(t.success!==void 0){o=!1;let u=typeof t.success=="function"?await t.success(c):t.success,d=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"success",message:u,description:d})}}).catch(async c=>{if(i=["reject",c],t.error!==void 0){o=!1;let u=typeof t.error=="function"?await t.error(c):t.error,d=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"error",message:u,description:d})}}).finally(()=>{var c;o&&(this.dismiss(n),n=void 0),(c=t.finally)==null||c.call(t)}),l=()=>new Promise((c,u)=>s.then(()=>i[0]==="reject"?u(i[1]):c(i[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:l}:Object.assign(n,{unwrap:l})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||zd++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},bt=new TN,PN=(e,t)=>{let n=(t==null?void 0:t.id)||zd++;return bt.addToast({title:e,...t,id:n}),n},jN=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",NN=PN,EN=()=>bt.toasts,MN=()=>bt.getActiveToasts(),jn=Object.assign(NN,{success:bt.success,info:bt.info,warning:bt.warning,error:bt.error,custom:bt.custom,message:bt.message,promise:bt.promise,dismiss:bt.dismiss,loading:bt.loading},{getHistory:EN,getToasts:MN});function AN(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}AN(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Wa(e){return e.label!==void 0}var IN=3,RN="32px",DN="16px",lg=4e3,LN=356,ON=14,FN=20,BN=200;function sn(...e){return e.filter(Boolean).join(" ")}function _N(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var WN=e=>{var t,n,r,o,i,s,l,c,u,d,h;let{invert:p,toast:f,unstyled:w,interacting:x,setHeights:b,visibleToasts:g,heights:v,index:y,toasts:S,expanded:k,removeToast:P,defaultRichColors:j,closeButton:N,style:R,cancelButtonStyle:M,actionButtonStyle:B,className:V="",descriptionClassName:$="",duration:_,position:X,gap:G,loadingIcon:z,expandByDefault:E,classNames:I,icons:T,closeButtonAriaLabel:C="Close toast",pauseWhenPageIsHidden:D}=e,[F,W]=O.useState(null),[q,U]=O.useState(null),[H,Z]=O.useState(!1),[re,ue]=O.useState(!1),[se,ne]=O.useState(!1),[ve,ae]=O.useState(!1),[he,We]=O.useState(!1),[Pe,Re]=O.useState(0),[$e,Ke]=O.useState(0),rt=O.useRef(f.duration||_||lg),rr=O.useRef(null),Mt=O.useRef(null),Qr=y===0,zi=y+1<=g,Ue=f.type,Ye=f.dismissible!==!1,Ro=f.className||"",Jr=f.descriptionClassName||"",wn=O.useMemo(()=>v.findIndex(te=>te.toastId===f.id)||0,[v,f.id]),or=O.useMemo(()=>{var te;return(te=f.closeButton)!=null?te:N},[f.closeButton,N]),Xr=O.useMemo(()=>f.duration||_||lg,[f.duration,_]),ir=O.useRef(0),On=O.useRef(0),xe=O.useRef(0),be=O.useRef(null),[Vt,$c]=X.split("-"),$i=O.useMemo(()=>v.reduce((te,ye,je)=>je>=wn?te:te+ye.height,0),[v,wn]),Fp=CN(),kk=f.invert||p,Uc=Ue==="loading";On.current=O.useMemo(()=>wn*G+$i,[wn,$i]),O.useEffect(()=>{rt.current=Xr},[Xr]),O.useEffect(()=>{Z(!0)},[]),O.useEffect(()=>{let te=Mt.current;if(te){let ye=te.getBoundingClientRect().height;return Ke(ye),b(je=>[{toastId:f.id,height:ye,position:f.position},...je]),()=>b(je=>je.filter(tn=>tn.toastId!==f.id))}},[b,f.id]),O.useLayoutEffect(()=>{if(!H)return;let te=Mt.current,ye=te.style.height;te.style.height="auto";let je=te.getBoundingClientRect().height;te.style.height=ye,Ke(je),b(tn=>tn.find(nn=>nn.toastId===f.id)?tn.map(nn=>nn.toastId===f.id?{...nn,height:je}:nn):[{toastId:f.id,height:je,position:f.position},...tn])},[H,f.title,f.description,b,f.id]);let sr=O.useCallback(()=>{ue(!0),Re(On.current),b(te=>te.filter(ye=>ye.toastId!==f.id)),setTimeout(()=>{P(f)},BN)},[f,P,b,On]);O.useEffect(()=>{if(f.promise&&Ue==="loading"||f.duration===1/0||f.type==="loading")return;let te;return k||x||D&&Fp?(()=>{if(xe.current<ir.current){let ye=new Date().getTime()-ir.current;rt.current=rt.current-ye}xe.current=new Date().getTime()})():rt.current!==1/0&&(ir.current=new Date().getTime(),te=setTimeout(()=>{var ye;(ye=f.onAutoClose)==null||ye.call(f,f),sr()},rt.current)),()=>clearTimeout(te)},[k,x,f,Ue,D,Fp,sr]),O.useEffect(()=>{f.delete&&sr()},[sr,f.delete]);function Ck(){var te,ye,je;return T!=null&&T.loading?O.createElement("div",{className:sn(I==null?void 0:I.loader,(te=f==null?void 0:f.classNames)==null?void 0:te.loader,"sonner-loader"),"data-visible":Ue==="loading"},T.loading):z?O.createElement("div",{className:sn(I==null?void 0:I.loader,(ye=f==null?void 0:f.classNames)==null?void 0:ye.loader,"sonner-loader"),"data-visible":Ue==="loading"},z):O.createElement(vN,{className:sn(I==null?void 0:I.loader,(je=f==null?void 0:f.classNames)==null?void 0:je.loader),visible:Ue==="loading"})}return O.createElement("li",{tabIndex:0,ref:Mt,className:sn(V,Ro,I==null?void 0:I.toast,(t=f==null?void 0:f.classNames)==null?void 0:t.toast,I==null?void 0:I.default,I==null?void 0:I[Ue],(n=f==null?void 0:f.classNames)==null?void 0:n[Ue]),"data-sonner-toast":"","data-rich-colors":(r=f.richColors)!=null?r:j,"data-styled":!(f.jsx||f.unstyled||w),"data-mounted":H,"data-promise":!!f.promise,"data-swiped":he,"data-removed":re,"data-visible":zi,"data-y-position":Vt,"data-x-position":$c,"data-index":y,"data-front":Qr,"data-swiping":se,"data-dismissible":Ye,"data-type":Ue,"data-invert":kk,"data-swipe-out":ve,"data-swipe-direction":q,"data-expanded":!!(k||E&&H),style:{"--index":y,"--toasts-before":y,"--z-index":S.length-y,"--offset":`${re?Pe:On.current}px`,"--initial-height":E?"auto":`${$e}px`,...R,...f.style},onDragEnd:()=>{ne(!1),W(null),be.current=null},onPointerDown:te=>{Uc||!Ye||(rr.current=new Date,Re(On.current),te.target.setPointerCapture(te.pointerId),te.target.tagName!=="BUTTON"&&(ne(!0),be.current={x:te.clientX,y:te.clientY}))},onPointerUp:()=>{var te,ye,je,tn;if(ve||!Ye)return;be.current=null;let nn=Number(((te=Mt.current)==null?void 0:te.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),ar=Number(((ye=Mt.current)==null?void 0:ye.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Zr=new Date().getTime()-((je=rr.current)==null?void 0:je.getTime()),rn=F==="x"?nn:ar,lr=Math.abs(rn)/Zr;if(Math.abs(rn)>=FN||lr>.11){Re(On.current),(tn=f.onDismiss)==null||tn.call(f,f),U(F==="x"?nn>0?"right":"left":ar>0?"down":"up"),sr(),ae(!0),We(!1);return}ne(!1),W(null)},onPointerMove:te=>{var ye,je,tn,nn;if(!be.current||!Ye||((ye=window.getSelection())==null?void 0:ye.toString().length)>0)return;let ar=te.clientY-be.current.y,Zr=te.clientX-be.current.x,rn=(je=e.swipeDirections)!=null?je:_N(X);!F&&(Math.abs(Zr)>1||Math.abs(ar)>1)&&W(Math.abs(Zr)>Math.abs(ar)?"x":"y");let lr={x:0,y:0};F==="y"?(rn.includes("top")||rn.includes("bottom"))&&(rn.includes("top")&&ar<0||rn.includes("bottom")&&ar>0)&&(lr.y=ar):F==="x"&&(rn.includes("left")||rn.includes("right"))&&(rn.includes("left")&&Zr<0||rn.includes("right")&&Zr>0)&&(lr.x=Zr),(Math.abs(lr.x)>0||Math.abs(lr.y)>0)&&We(!0),(tn=Mt.current)==null||tn.style.setProperty("--swipe-amount-x",`${lr.x}px`),(nn=Mt.current)==null||nn.style.setProperty("--swipe-amount-y",`${lr.y}px`)}},or&&!f.jsx?O.createElement("button",{"aria-label":C,"data-disabled":Uc,"data-close-button":!0,onClick:Uc||!Ye?()=>{}:()=>{var te;sr(),(te=f.onDismiss)==null||te.call(f,f)},className:sn(I==null?void 0:I.closeButton,(o=f==null?void 0:f.classNames)==null?void 0:o.closeButton)},(i=T==null?void 0:T.close)!=null?i:kN):null,f.jsx||m.isValidElement(f.title)?f.jsx?f.jsx:typeof f.title=="function"?f.title():f.title:O.createElement(O.Fragment,null,Ue||f.icon||f.promise?O.createElement("div",{"data-icon":"",className:sn(I==null?void 0:I.icon,(s=f==null?void 0:f.classNames)==null?void 0:s.icon)},f.promise||f.type==="loading"&&!f.icon?f.icon||Ck():null,f.type!=="loading"?f.icon||(T==null?void 0:T[Ue])||gN(Ue):null):null,O.createElement("div",{"data-content":"",className:sn(I==null?void 0:I.content,(l=f==null?void 0:f.classNames)==null?void 0:l.content)},O.createElement("div",{"data-title":"",className:sn(I==null?void 0:I.title,(c=f==null?void 0:f.classNames)==null?void 0:c.title)},typeof f.title=="function"?f.title():f.title),f.description?O.createElement("div",{"data-description":"",className:sn($,Jr,I==null?void 0:I.description,(u=f==null?void 0:f.classNames)==null?void 0:u.description)},typeof f.description=="function"?f.description():f.description):null),m.isValidElement(f.cancel)?f.cancel:f.cancel&&Wa(f.cancel)?O.createElement("button",{"data-button":!0,"data-cancel":!0,style:f.cancelButtonStyle||M,onClick:te=>{var ye,je;Wa(f.cancel)&&Ye&&((je=(ye=f.cancel).onClick)==null||je.call(ye,te),sr())},className:sn(I==null?void 0:I.cancelButton,(d=f==null?void 0:f.classNames)==null?void 0:d.cancelButton)},f.cancel.label):null,m.isValidElement(f.action)?f.action:f.action&&Wa(f.action)?O.createElement("button",{"data-button":!0,"data-action":!0,style:f.actionButtonStyle||B,onClick:te=>{var ye,je;Wa(f.action)&&((je=(ye=f.action).onClick)==null||je.call(ye,te),!te.defaultPrevented&&sr())},className:sn(I==null?void 0:I.actionButton,(h=f==null?void 0:f.classNames)==null?void 0:h.actionButton)},f.action.label):null))};function cg(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function VN(e,t){let n={};return[e,t].forEach((r,o)=>{let i=o===1,s=i?"--mobile-offset":"--offset",l=i?DN:RN;function c(u){["top","right","bottom","left"].forEach(d=>{n[`${s}-${d}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?c(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${s}-${u}`]=l:n[`${s}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):c(l)}),n}var HN=m.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:o=["altKey","KeyT"],expand:i,closeButton:s,className:l,offset:c,mobileOffset:u,theme:d="light",richColors:h,duration:p,style:f,visibleToasts:w=IN,toastOptions:x,dir:b=cg(),gap:g=ON,loadingIcon:v,icons:y,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:k}=e,[P,j]=O.useState([]),N=O.useMemo(()=>Array.from(new Set([r].concat(P.filter(D=>D.position).map(D=>D.position)))),[P,r]),[R,M]=O.useState([]),[B,V]=O.useState(!1),[$,_]=O.useState(!1),[X,G]=O.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),z=O.useRef(null),E=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),I=O.useRef(null),T=O.useRef(!1),C=O.useCallback(D=>{j(F=>{var W;return(W=F.find(q=>q.id===D.id))!=null&&W.delete||bt.dismiss(D.id),F.filter(({id:q})=>q!==D.id)})},[]);return O.useEffect(()=>bt.subscribe(D=>{if(D.dismiss){j(F=>F.map(W=>W.id===D.id?{...W,delete:!0}:W));return}setTimeout(()=>{Tf.flushSync(()=>{j(F=>{let W=F.findIndex(q=>q.id===D.id);return W!==-1?[...F.slice(0,W),{...F[W],...D},...F.slice(W+1)]:[D,...F]})})})}),[]),O.useEffect(()=>{if(d!=="system"){G(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?G("dark"):G("light")),typeof window>"u")return;let D=window.matchMedia("(prefers-color-scheme: dark)");try{D.addEventListener("change",({matches:F})=>{G(F?"dark":"light")})}catch{D.addListener(({matches:W})=>{try{G(W?"dark":"light")}catch(q){console.error(q)}})}},[d]),O.useEffect(()=>{P.length<=1&&V(!1)},[P]),O.useEffect(()=>{let D=F=>{var W,q;o.every(U=>F[U]||F.code===U)&&(V(!0),(W=z.current)==null||W.focus()),F.code==="Escape"&&(document.activeElement===z.current||(q=z.current)!=null&&q.contains(document.activeElement))&&V(!1)};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[o]),O.useEffect(()=>{if(z.current)return()=>{I.current&&(I.current.focus({preventScroll:!0}),I.current=null,T.current=!1)}},[z.current]),O.createElement("section",{ref:t,"aria-label":`${S} ${E}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},N.map((D,F)=>{var W;let[q,U]=D.split("-");return P.length?O.createElement("ol",{key:D,dir:b==="auto"?cg():b,tabIndex:-1,ref:z,className:l,"data-sonner-toaster":!0,"data-theme":X,"data-y-position":q,"data-lifted":B&&P.length>1&&!i,"data-x-position":U,style:{"--front-toast-height":`${((W=R[0])==null?void 0:W.height)||0}px`,"--width":`${LN}px`,"--gap":`${g}px`,...f,...VN(c,u)},onBlur:H=>{T.current&&!H.currentTarget.contains(H.relatedTarget)&&(T.current=!1,I.current&&(I.current.focus({preventScroll:!0}),I.current=null))},onFocus:H=>{H.target instanceof HTMLElement&&H.target.dataset.dismissible==="false"||T.current||(T.current=!0,I.current=H.relatedTarget)},onMouseEnter:()=>V(!0),onMouseMove:()=>V(!0),onMouseLeave:()=>{$||V(!1)},onDragEnd:()=>V(!1),onPointerDown:H=>{H.target instanceof HTMLElement&&H.target.dataset.dismissible==="false"||_(!0)},onPointerUp:()=>_(!1)},P.filter(H=>!H.position&&F===0||H.position===D).map((H,Z)=>{var re,ue;return O.createElement(WN,{key:H.id,icons:y,index:Z,toast:H,defaultRichColors:h,duration:(re=x==null?void 0:x.duration)!=null?re:p,className:x==null?void 0:x.className,descriptionClassName:x==null?void 0:x.descriptionClassName,invert:n,visibleToasts:w,closeButton:(ue=x==null?void 0:x.closeButton)!=null?ue:s,interacting:$,position:D,style:x==null?void 0:x.style,unstyled:x==null?void 0:x.unstyled,classNames:x==null?void 0:x.classNames,cancelButtonStyle:x==null?void 0:x.cancelButtonStyle,actionButtonStyle:x==null?void 0:x.actionButtonStyle,removeToast:C,toasts:P.filter(se=>se.position==H.position),heights:R.filter(se=>se.position==H.position),setHeights:M,expandByDefault:i,gap:g,loadingIcon:v,expanded:B,pauseWhenPageIsHidden:k,swipeDirections:e.swipeDirections})})):null}))});const zN=({...e})=>{const{theme:t="system"}=mN();return a.jsx(HN,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var $N=ic[" useId ".trim().toString()]||(()=>{}),UN=0;function M0(e){const[t,n]=m.useState($N());return Zt(()=>{n(r=>r??String(UN++))},[e]),e||(t?`radix-${t}`:"")}const YN=["top","right","bottom","left"],Wr=Math.min,It=Math.max,Vl=Math.round,Va=Math.floor,An=e=>({x:e,y:e}),GN={left:"right",right:"left",bottom:"top",top:"bottom"},qN={start:"end",end:"start"};function $d(e,t,n){return It(e,Wr(t,n))}function Zn(e,t){return typeof e=="function"?e(t):e}function er(e){return e.split("-")[0]}function Fi(e){return e.split("-")[1]}function Rf(e){return e==="x"?"y":"x"}function Df(e){return e==="y"?"height":"width"}const KN=new Set(["top","bottom"]);function Nn(e){return KN.has(er(e))?"y":"x"}function Lf(e){return Rf(Nn(e))}function QN(e,t,n){n===void 0&&(n=!1);const r=Fi(e),o=Lf(e),i=Df(o);let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=Hl(s)),[s,Hl(s)]}function JN(e){const t=Hl(e);return[Ud(e),t,Ud(t)]}function Ud(e){return e.replace(/start|end/g,t=>qN[t])}const ug=["left","right"],dg=["right","left"],XN=["top","bottom"],ZN=["bottom","top"];function eE(e,t,n){switch(e){case"top":case"bottom":return n?t?dg:ug:t?ug:dg;case"left":case"right":return t?XN:ZN;default:return[]}}function tE(e,t,n,r){const o=Fi(e);let i=eE(er(e),n==="start",r);return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(Ud)))),i}function Hl(e){return e.replace(/left|right|bottom|top/g,t=>GN[t])}function nE(e){return{top:0,right:0,bottom:0,left:0,...e}}function A0(e){return typeof e!="number"?nE(e):{top:e,right:e,bottom:e,left:e}}function zl(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function hg(e,t,n){let{reference:r,floating:o}=e;const i=Nn(t),s=Lf(t),l=Df(s),c=er(t),u=i==="y",d=r.x+r.width/2-o.width/2,h=r.y+r.height/2-o.height/2,p=r[l]/2-o[l]/2;let f;switch(c){case"top":f={x:d,y:r.y-o.height};break;case"bottom":f={x:d,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:h};break;case"left":f={x:r.x-o.width,y:h};break;default:f={x:r.x,y:r.y}}switch(Fi(t)){case"start":f[s]-=p*(n&&u?-1:1);break;case"end":f[s]+=p*(n&&u?-1:1);break}return f}const rE=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,l=i.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:h}=hg(u,r,c),p=r,f={},w=0;for(let x=0;x<l.length;x++){const{name:b,fn:g}=l[x],{x:v,y,data:S,reset:k}=await g({x:d,y:h,initialPlacement:r,placement:p,strategy:o,middlewareData:f,rects:u,platform:s,elements:{reference:e,floating:t}});d=v??d,h=y??h,f={...f,[b]:{...f[b],...S}},k&&w<=50&&(w++,typeof k=="object"&&(k.placement&&(p=k.placement),k.rects&&(u=k.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):k.rects),{x:d,y:h}=hg(u,p,c)),x=-1)}return{x:d,y:h,placement:p,strategy:o,middlewareData:f}};async function zs(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:s,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:f=0}=Zn(t,e),w=A0(f),b=l[p?h==="floating"?"reference":"floating":h],g=zl(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(b)))==null||n?b:b.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),v=h==="floating"?{x:r,y:o,width:s.floating.width,height:s.floating.height}:s.reference,y=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),S=await(i.isElement==null?void 0:i.isElement(y))?await(i.getScale==null?void 0:i.getScale(y))||{x:1,y:1}:{x:1,y:1},k=zl(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:c}):v);return{top:(g.top-k.top+w.top)/S.y,bottom:(k.bottom-g.bottom+w.bottom)/S.y,left:(g.left-k.left+w.left)/S.x,right:(k.right-g.right+w.right)/S.x}}const oE=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:s,elements:l,middlewareData:c}=t,{element:u,padding:d=0}=Zn(e,t)||{};if(u==null)return{};const h=A0(d),p={x:n,y:r},f=Lf(o),w=Df(f),x=await s.getDimensions(u),b=f==="y",g=b?"top":"left",v=b?"bottom":"right",y=b?"clientHeight":"clientWidth",S=i.reference[w]+i.reference[f]-p[f]-i.floating[w],k=p[f]-i.reference[f],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let j=P?P[y]:0;(!j||!await(s.isElement==null?void 0:s.isElement(P)))&&(j=l.floating[y]||i.floating[w]);const N=S/2-k/2,R=j/2-x[w]/2-1,M=Wr(h[g],R),B=Wr(h[v],R),V=M,$=j-x[w]-B,_=j/2-x[w]/2+N,X=$d(V,_,$),G=!c.arrow&&Fi(o)!=null&&_!==X&&i.reference[w]/2-(_<V?M:B)-x[w]/2<0,z=G?_<V?_-V:_-$:0;return{[f]:p[f]+z,data:{[f]:X,centerOffset:_-X-z,...G&&{alignmentOffset:z}},reset:G}}}),iE=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:s,initialPlacement:l,platform:c,elements:u}=t,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:x=!0,...b}=Zn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const g=er(o),v=Nn(l),y=er(l)===l,S=await(c.isRTL==null?void 0:c.isRTL(u.floating)),k=p||(y||!x?[Hl(l)]:JN(l)),P=w!=="none";!p&&P&&k.push(...tE(l,x,w,S));const j=[l,...k],N=await zs(t,b),R=[];let M=((r=i.flip)==null?void 0:r.overflows)||[];if(d&&R.push(N[g]),h){const _=QN(o,s,S);R.push(N[_[0]],N[_[1]])}if(M=[...M,{placement:o,overflows:R}],!R.every(_=>_<=0)){var B,V;const _=(((B=i.flip)==null?void 0:B.index)||0)+1,X=j[_];if(X&&(!(h==="alignment"?v!==Nn(X):!1)||M.every(E=>Nn(E.placement)===v?E.overflows[0]>0:!0)))return{data:{index:_,overflows:M},reset:{placement:X}};let G=(V=M.filter(z=>z.overflows[0]<=0).sort((z,E)=>z.overflows[1]-E.overflows[1])[0])==null?void 0:V.placement;if(!G)switch(f){case"bestFit":{var $;const z=($=M.filter(E=>{if(P){const I=Nn(E.placement);return I===v||I==="y"}return!0}).map(E=>[E.placement,E.overflows.filter(I=>I>0).reduce((I,T)=>I+T,0)]).sort((E,I)=>E[1]-I[1])[0])==null?void 0:$[0];z&&(G=z);break}case"initialPlacement":G=l;break}if(o!==G)return{reset:{placement:G}}}return{}}}};function fg(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function pg(e){return YN.some(t=>e[t]>=0)}const sE=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Zn(e,t);switch(r){case"referenceHidden":{const i=await zs(t,{...o,elementContext:"reference"}),s=fg(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:pg(s)}}}case"escaped":{const i=await zs(t,{...o,altBoundary:!0}),s=fg(i,n.floating);return{data:{escapedOffsets:s,escaped:pg(s)}}}default:return{}}}}},I0=new Set(["left","top"]);async function aE(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=er(n),l=Fi(n),c=Nn(n)==="y",u=I0.has(s)?-1:1,d=i&&c?-1:1,h=Zn(t,e);let{mainAxis:p,crossAxis:f,alignmentAxis:w}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&typeof w=="number"&&(f=l==="end"?w*-1:w),c?{x:f*d,y:p*u}:{x:p*u,y:f*d}}const lE=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:s,middlewareData:l}=t,c=await aE(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:o+c.x,y:i+c.y,data:{...c,placement:s}}}}},cE=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:b=>{let{x:g,y:v}=b;return{x:g,y:v}}},...c}=Zn(e,t),u={x:n,y:r},d=await zs(t,c),h=Nn(er(o)),p=Rf(h);let f=u[p],w=u[h];if(i){const b=p==="y"?"top":"left",g=p==="y"?"bottom":"right",v=f+d[b],y=f-d[g];f=$d(v,f,y)}if(s){const b=h==="y"?"top":"left",g=h==="y"?"bottom":"right",v=w+d[b],y=w-d[g];w=$d(v,w,y)}const x=l.fn({...t,[p]:f,[h]:w});return{...x,data:{x:x.x-n,y:x.y-r,enabled:{[p]:i,[h]:s}}}}}},uE=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:s}=t,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=Zn(e,t),d={x:n,y:r},h=Nn(o),p=Rf(h);let f=d[p],w=d[h];const x=Zn(l,t),b=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:0,crossAxis:0,...x};if(c){const y=p==="y"?"height":"width",S=i.reference[p]-i.floating[y]+b.mainAxis,k=i.reference[p]+i.reference[y]-b.mainAxis;f<S?f=S:f>k&&(f=k)}if(u){var g,v;const y=p==="y"?"width":"height",S=I0.has(er(o)),k=i.reference[h]-i.floating[y]+(S&&((g=s.offset)==null?void 0:g[h])||0)+(S?0:b.crossAxis),P=i.reference[h]+i.reference[y]+(S?0:((v=s.offset)==null?void 0:v[h])||0)-(S?b.crossAxis:0);w<k?w=k:w>P&&(w=P)}return{[p]:f,[h]:w}}}},dE=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:o,rects:i,platform:s,elements:l}=t,{apply:c=()=>{},...u}=Zn(e,t),d=await zs(t,u),h=er(o),p=Fi(o),f=Nn(o)==="y",{width:w,height:x}=i.floating;let b,g;h==="top"||h==="bottom"?(b=h,g=p===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(g=h,b=p==="end"?"top":"bottom");const v=x-d.top-d.bottom,y=w-d.left-d.right,S=Wr(x-d[b],v),k=Wr(w-d[g],y),P=!t.middlewareData.shift;let j=S,N=k;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(N=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(j=v),P&&!p){const M=It(d.left,0),B=It(d.right,0),V=It(d.top,0),$=It(d.bottom,0);f?N=w-2*(M!==0||B!==0?M+B:It(d.left,d.right)):j=x-2*(V!==0||$!==0?V+$:It(d.top,d.bottom))}await c({...t,availableWidth:N,availableHeight:j});const R=await s.getDimensions(l.floating);return w!==R.width||x!==R.height?{reset:{rects:!0}}:{}}}};function Nc(){return typeof window<"u"}function Bi(e){return R0(e)?(e.nodeName||"").toLowerCase():"#document"}function Lt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ln(e){var t;return(t=(R0(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function R0(e){return Nc()?e instanceof Node||e instanceof Lt(e).Node:!1}function vn(e){return Nc()?e instanceof Element||e instanceof Lt(e).Element:!1}function Dn(e){return Nc()?e instanceof HTMLElement||e instanceof Lt(e).HTMLElement:!1}function mg(e){return!Nc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Lt(e).ShadowRoot}const hE=new Set(["inline","contents"]);function fa(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=xn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!hE.has(o)}const fE=new Set(["table","td","th"]);function pE(e){return fE.has(Bi(e))}const mE=[":popover-open",":modal"];function Ec(e){return mE.some(t=>{try{return e.matches(t)}catch{return!1}})}const gE=["transform","translate","scale","rotate","perspective"],yE=["transform","translate","scale","rotate","perspective","filter"],vE=["paint","layout","strict","content"];function Of(e){const t=Ff(),n=vn(e)?xn(e):e;return gE.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||yE.some(r=>(n.willChange||"").includes(r))||vE.some(r=>(n.contain||"").includes(r))}function xE(e){let t=Vr(e);for(;Dn(t)&&!Pi(t);){if(Of(t))return t;if(Ec(t))return null;t=Vr(t)}return null}function Ff(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const wE=new Set(["html","body","#document"]);function Pi(e){return wE.has(Bi(e))}function xn(e){return Lt(e).getComputedStyle(e)}function Mc(e){return vn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Vr(e){if(Bi(e)==="html")return e;const t=e.assignedSlot||e.parentNode||mg(e)&&e.host||Ln(e);return mg(t)?t.host:t}function D0(e){const t=Vr(e);return Pi(t)?e.ownerDocument?e.ownerDocument.body:e.body:Dn(t)&&fa(t)?t:D0(t)}function $s(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=D0(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),s=Lt(o);if(i){const l=Yd(s);return t.concat(s,s.visualViewport||[],fa(o)?o:[],l&&n?$s(l):[])}return t.concat(o,$s(o,[],n))}function Yd(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function L0(e){const t=xn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Dn(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,l=Vl(n)!==i||Vl(r)!==s;return l&&(n=i,r=s),{width:n,height:r,$:l}}function Bf(e){return vn(e)?e:e.contextElement}function ai(e){const t=Bf(e);if(!Dn(t))return An(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=L0(t);let s=(i?Vl(n.width):n.width)/r,l=(i?Vl(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const bE=An(0);function O0(e){const t=Lt(e);return!Ff()||!t.visualViewport?bE:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function SE(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Lt(e)?!1:t}function Po(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=Bf(e);let s=An(1);t&&(r?vn(r)&&(s=ai(r)):s=ai(e));const l=SE(i,n,r)?O0(i):An(0);let c=(o.left+l.x)/s.x,u=(o.top+l.y)/s.y,d=o.width/s.x,h=o.height/s.y;if(i){const p=Lt(i),f=r&&vn(r)?Lt(r):r;let w=p,x=Yd(w);for(;x&&r&&f!==w;){const b=ai(x),g=x.getBoundingClientRect(),v=xn(x),y=g.left+(x.clientLeft+parseFloat(v.paddingLeft))*b.x,S=g.top+(x.clientTop+parseFloat(v.paddingTop))*b.y;c*=b.x,u*=b.y,d*=b.x,h*=b.y,c+=y,u+=S,w=Lt(x),x=Yd(w)}}return zl({width:d,height:h,x:c,y:u})}function Ac(e,t){const n=Mc(e).scrollLeft;return t?t.left+n:Po(Ln(e)).left+n}function F0(e,t){const n=e.getBoundingClientRect(),r=n.left+t.scrollLeft-Ac(e,n),o=n.top+t.scrollTop;return{x:r,y:o}}function kE(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",s=Ln(r),l=t?Ec(t.floating):!1;if(r===s||l&&i)return n;let c={scrollLeft:0,scrollTop:0},u=An(1);const d=An(0),h=Dn(r);if((h||!h&&!i)&&((Bi(r)!=="body"||fa(s))&&(c=Mc(r)),Dn(r))){const f=Po(r);u=ai(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}const p=s&&!h&&!i?F0(s,c):An(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+d.x+p.x,y:n.y*u.y-c.scrollTop*u.y+d.y+p.y}}function CE(e){return Array.from(e.getClientRects())}function TE(e){const t=Ln(e),n=Mc(e),r=e.ownerDocument.body,o=It(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=It(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+Ac(e);const l=-n.scrollTop;return xn(r).direction==="rtl"&&(s+=It(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:s,y:l}}const gg=25;function PE(e,t){const n=Lt(e),r=Ln(e),o=n.visualViewport;let i=r.clientWidth,s=r.clientHeight,l=0,c=0;if(o){i=o.width,s=o.height;const d=Ff();(!d||d&&t==="fixed")&&(l=o.offsetLeft,c=o.offsetTop)}const u=Ac(r);if(u<=0){const d=r.ownerDocument,h=d.body,p=getComputedStyle(h),f=d.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,w=Math.abs(r.clientWidth-h.clientWidth-f);w<=gg&&(i-=w)}else u<=gg&&(i+=u);return{width:i,height:s,x:l,y:c}}const jE=new Set(["absolute","fixed"]);function NE(e,t){const n=Po(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Dn(e)?ai(e):An(1),s=e.clientWidth*i.x,l=e.clientHeight*i.y,c=o*i.x,u=r*i.y;return{width:s,height:l,x:c,y:u}}function yg(e,t,n){let r;if(t==="viewport")r=PE(e,n);else if(t==="document")r=TE(Ln(e));else if(vn(t))r=NE(t,n);else{const o=O0(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return zl(r)}function B0(e,t){const n=Vr(e);return n===t||!vn(n)||Pi(n)?!1:xn(n).position==="fixed"||B0(n,t)}function EE(e,t){const n=t.get(e);if(n)return n;let r=$s(e,[],!1).filter(l=>vn(l)&&Bi(l)!=="body"),o=null;const i=xn(e).position==="fixed";let s=i?Vr(e):e;for(;vn(s)&&!Pi(s);){const l=xn(s),c=Of(s);!c&&l.position==="fixed"&&(o=null),(i?!c&&!o:!c&&l.position==="static"&&!!o&&jE.has(o.position)||fa(s)&&!c&&B0(e,s))?r=r.filter(d=>d!==s):o=l,s=Vr(s)}return t.set(e,r),r}function ME(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const s=[...n==="clippingAncestors"?Ec(t)?[]:EE(t,this._c):[].concat(n),r],l=s[0],c=s.reduce((u,d)=>{const h=yg(t,d,o);return u.top=It(h.top,u.top),u.right=Wr(h.right,u.right),u.bottom=Wr(h.bottom,u.bottom),u.left=It(h.left,u.left),u},yg(t,l,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function AE(e){const{width:t,height:n}=L0(e);return{width:t,height:n}}function IE(e,t,n){const r=Dn(t),o=Ln(t),i=n==="fixed",s=Po(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const c=An(0);function u(){c.x=Ac(o)}if(r||!r&&!i)if((Bi(t)!=="body"||fa(o))&&(l=Mc(t)),r){const f=Po(t,!0,i,t);c.x=f.x+t.clientLeft,c.y=f.y+t.clientTop}else o&&u();i&&!r&&o&&u();const d=o&&!r&&!i?F0(o,l):An(0),h=s.left+l.scrollLeft-c.x-d.x,p=s.top+l.scrollTop-c.y-d.y;return{x:h,y:p,width:s.width,height:s.height}}function ku(e){return xn(e).position==="static"}function vg(e,t){if(!Dn(e)||xn(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Ln(e)===n&&(n=n.ownerDocument.body),n}function _0(e,t){const n=Lt(e);if(Ec(e))return n;if(!Dn(e)){let o=Vr(e);for(;o&&!Pi(o);){if(vn(o)&&!ku(o))return o;o=Vr(o)}return n}let r=vg(e,t);for(;r&&pE(r)&&ku(r);)r=vg(r,t);return r&&Pi(r)&&ku(r)&&!Of(r)?n:r||xE(e)||n}const RE=async function(e){const t=this.getOffsetParent||_0,n=this.getDimensions,r=await n(e.floating);return{reference:IE(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function DE(e){return xn(e).direction==="rtl"}const LE={convertOffsetParentRelativeRectToViewportRelativeRect:kE,getDocumentElement:Ln,getClippingRect:ME,getOffsetParent:_0,getElementRects:RE,getClientRects:CE,getDimensions:AE,getScale:ai,isElement:vn,isRTL:DE};function W0(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function OE(e,t){let n=null,r;const o=Ln(e);function i(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const u=e.getBoundingClientRect(),{left:d,top:h,width:p,height:f}=u;if(l||t(),!p||!f)return;const w=Va(h),x=Va(o.clientWidth-(d+p)),b=Va(o.clientHeight-(h+f)),g=Va(d),y={rootMargin:-w+"px "+-x+"px "+-b+"px "+-g+"px",threshold:It(0,Wr(1,c))||1};let S=!0;function k(P){const j=P[0].intersectionRatio;if(j!==c){if(!S)return s();j?s(!1,j):r=setTimeout(()=>{s(!1,1e-7)},1e3)}j===1&&!W0(u,e.getBoundingClientRect())&&s(),S=!1}try{n=new IntersectionObserver(k,{...y,root:o.ownerDocument})}catch{n=new IntersectionObserver(k,y)}n.observe(e)}return s(!0),i}function FE(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=Bf(e),d=o||i?[...u?$s(u):[],...$s(t)]:[];d.forEach(g=>{o&&g.addEventListener("scroll",n,{passive:!0}),i&&g.addEventListener("resize",n)});const h=u&&l?OE(u,n):null;let p=-1,f=null;s&&(f=new ResizeObserver(g=>{let[v]=g;v&&v.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var y;(y=f)==null||y.observe(t)})),n()}),u&&!c&&f.observe(u),f.observe(t));let w,x=c?Po(e):null;c&&b();function b(){const g=Po(e);x&&!W0(x,g)&&n(),x=g,w=requestAnimationFrame(b)}return n(),()=>{var g;d.forEach(v=>{o&&v.removeEventListener("scroll",n),i&&v.removeEventListener("resize",n)}),h==null||h(),(g=f)==null||g.disconnect(),f=null,c&&cancelAnimationFrame(w)}}const BE=lE,_E=cE,WE=iE,VE=dE,HE=sE,xg=oE,zE=uE,$E=(e,t,n)=>{const r=new Map,o={platform:LE,...n},i={...o.platform,_c:r};return rE(e,t,{...o,platform:i})};var UE=typeof document<"u",YE=function(){},ll=UE?m.useLayoutEffect:YE;function $l(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!$l(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!$l(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function V0(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function wg(e,t){const n=V0(e);return Math.round(t*n)/n}function Cu(e){const t=m.useRef(e);return ll(()=>{t.current=e}),t}function GE(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:s}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,h]=m.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,f]=m.useState(r);$l(p,r)||f(r);const[w,x]=m.useState(null),[b,g]=m.useState(null),v=m.useCallback(E=>{E!==P.current&&(P.current=E,x(E))},[]),y=m.useCallback(E=>{E!==j.current&&(j.current=E,g(E))},[]),S=i||w,k=s||b,P=m.useRef(null),j=m.useRef(null),N=m.useRef(d),R=c!=null,M=Cu(c),B=Cu(o),V=Cu(u),$=m.useCallback(()=>{if(!P.current||!j.current)return;const E={placement:t,strategy:n,middleware:p};B.current&&(E.platform=B.current),$E(P.current,j.current,E).then(I=>{const T={...I,isPositioned:V.current!==!1};_.current&&!$l(N.current,T)&&(N.current=T,ca.flushSync(()=>{h(T)}))})},[p,t,n,B,V]);ll(()=>{u===!1&&N.current.isPositioned&&(N.current.isPositioned=!1,h(E=>({...E,isPositioned:!1})))},[u]);const _=m.useRef(!1);ll(()=>(_.current=!0,()=>{_.current=!1}),[]),ll(()=>{if(S&&(P.current=S),k&&(j.current=k),S&&k){if(M.current)return M.current(S,k,$);$()}},[S,k,$,M,R]);const X=m.useMemo(()=>({reference:P,floating:j,setReference:v,setFloating:y}),[v,y]),G=m.useMemo(()=>({reference:S,floating:k}),[S,k]),z=m.useMemo(()=>{const E={position:n,left:0,top:0};if(!G.floating)return E;const I=wg(G.floating,d.x),T=wg(G.floating,d.y);return l?{...E,transform:"translate("+I+"px, "+T+"px)",...V0(G.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:I,top:T}},[n,l,G.floating,d.x,d.y]);return m.useMemo(()=>({...d,update:$,refs:X,elements:G,floatingStyles:z}),[d,$,X,G,z])}const qE=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?xg({element:r.current,padding:o}).fn(n):{}:r?xg({element:r,padding:o}).fn(n):{}}}},KE=(e,t)=>({...BE(e),options:[e,t]}),QE=(e,t)=>({..._E(e),options:[e,t]}),JE=(e,t)=>({...zE(e),options:[e,t]}),XE=(e,t)=>({...WE(e),options:[e,t]}),ZE=(e,t)=>({...VE(e),options:[e,t]}),e2=(e,t)=>({...HE(e),options:[e,t]}),t2=(e,t)=>({...qE(e),options:[e,t]});var n2="Arrow",H0=m.forwardRef((e,t)=>{const{children:n,width:r=10,height:o=5,...i}=e;return a.jsx(me.svg,{...i,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:a.jsx("polygon",{points:"0,0 30,0 15,10"})})});H0.displayName=n2;var r2=H0;function z0(e){const[t,n]=m.useState(void 0);return Zt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let s,l;if("borderBoxSize"in i){const c=i.borderBoxSize,u=Array.isArray(c)?c[0]:c;s=u.inlineSize,l=u.blockSize}else s=e.offsetWidth,l=e.offsetHeight;n({width:s,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var $0="Popper",[U0,Y0]=Li($0),[SL,G0]=U0($0),q0="PopperAnchor",K0=m.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=G0(q0,n),s=m.useRef(null),l=Fe(t,s),c=m.useRef(null);return m.useEffect(()=>{const u=c.current;c.current=(r==null?void 0:r.current)||s.current,u!==c.current&&i.onAnchorChange(c.current)}),r?null:a.jsx(me.div,{...o,ref:l})});K0.displayName=q0;var _f="PopperContent",[o2,i2]=U0(_f),Q0=m.forwardRef((e,t)=>{var H,Z,re,ue,se,ne;const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:i="center",alignOffset:s=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:h="partial",hideWhenDetached:p=!1,updatePositionStrategy:f="optimized",onPlaced:w,...x}=e,b=G0(_f,n),[g,v]=m.useState(null),y=Fe(t,ve=>v(ve)),[S,k]=m.useState(null),P=z0(S),j=(P==null?void 0:P.width)??0,N=(P==null?void 0:P.height)??0,R=r+(i!=="center"?"-"+i:""),M=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},B=Array.isArray(u)?u:[u],V=B.length>0,$={padding:M,boundary:B.filter(a2),altBoundary:V},{refs:_,floatingStyles:X,placement:G,isPositioned:z,middlewareData:E}=GE({strategy:"fixed",placement:R,whileElementsMounted:(...ve)=>FE(...ve,{animationFrame:f==="always"}),elements:{reference:b.anchor},middleware:[KE({mainAxis:o+N,alignmentAxis:s}),c&&QE({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?JE():void 0,...$}),c&&XE({...$}),ZE({...$,apply:({elements:ve,rects:ae,availableWidth:he,availableHeight:We})=>{const{width:Pe,height:Re}=ae.reference,$e=ve.floating.style;$e.setProperty("--radix-popper-available-width",`${he}px`),$e.setProperty("--radix-popper-available-height",`${We}px`),$e.setProperty("--radix-popper-anchor-width",`${Pe}px`),$e.setProperty("--radix-popper-anchor-height",`${Re}px`)}}),S&&t2({element:S,padding:l}),l2({arrowWidth:j,arrowHeight:N}),p&&e2({strategy:"referenceHidden",...$})]}),[I,T]=Z0(G),C=mt(w);Zt(()=>{z&&(C==null||C())},[z,C]);const D=(H=E.arrow)==null?void 0:H.x,F=(Z=E.arrow)==null?void 0:Z.y,W=((re=E.arrow)==null?void 0:re.centerOffset)!==0,[q,U]=m.useState();return Zt(()=>{g&&U(window.getComputedStyle(g).zIndex)},[g]),a.jsx("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...X,transform:z?X.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:q,"--radix-popper-transform-origin":[(ue=E.transformOrigin)==null?void 0:ue.x,(se=E.transformOrigin)==null?void 0:se.y].join(" "),...((ne=E.hide)==null?void 0:ne.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:a.jsx(o2,{scope:n,placedSide:I,onArrowChange:k,arrowX:D,arrowY:F,shouldHideArrow:W,children:a.jsx(me.div,{"data-side":I,"data-align":T,...x,ref:y,style:{...x.style,animation:z?void 0:"none"}})})})});Q0.displayName=_f;var J0="PopperArrow",s2={top:"bottom",right:"left",bottom:"top",left:"right"},X0=m.forwardRef(function(t,n){const{__scopePopper:r,...o}=t,i=i2(J0,r),s=s2[i.placedSide];return a.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:a.jsx(r2,{...o,ref:n,style:{...o.style,display:"block"}})})});X0.displayName=J0;function a2(e){return e!==null}var l2=e=>({name:"transformOrigin",options:e,fn(t){var b,g,v;const{placement:n,rects:r,middlewareData:o}=t,s=((b=o.arrow)==null?void 0:b.centerOffset)!==0,l=s?0:e.arrowWidth,c=s?0:e.arrowHeight,[u,d]=Z0(n),h={start:"0%",center:"50%",end:"100%"}[d],p=(((g=o.arrow)==null?void 0:g.x)??0)+l/2,f=(((v=o.arrow)==null?void 0:v.y)??0)+c/2;let w="",x="";return u==="bottom"?(w=s?h:`${p}px`,x=`${-c}px`):u==="top"?(w=s?h:`${p}px`,x=`${r.floating.height+c}px`):u==="right"?(w=`${-c}px`,x=s?h:`${f}px`):u==="left"&&(w=`${r.floating.width+c}px`,x=s?h:`${f}px`),{data:{x:w,y:x}}}});function Z0(e){const[t,n="center"]=e.split("-");return[t,n]}var c2=K0,u2=Q0,d2=X0,h2=Symbol("radix.slottable");function f2(e){const t=({children:n})=>a.jsx(a.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=h2,t}var[Ic]=Li("Tooltip",[Y0]),Wf=Y0(),eb="TooltipProvider",p2=700,bg="tooltip.open",[m2,tb]=Ic(eb),nb=e=>{const{__scopeTooltip:t,delayDuration:n=p2,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:i}=e,s=m.useRef(!0),l=m.useRef(!1),c=m.useRef(0);return m.useEffect(()=>{const u=c.current;return()=>window.clearTimeout(u)},[]),a.jsx(m2,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:m.useCallback(()=>{window.clearTimeout(c.current),s.current=!1},[]),onClose:m.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:m.useCallback(u=>{l.current=u},[]),disableHoverableContent:o,children:i})};nb.displayName=eb;var rb="Tooltip",[kL,Rc]=Ic(rb),Gd="TooltipTrigger",g2=m.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Rc(Gd,n),i=tb(Gd,n),s=Wf(n),l=m.useRef(null),c=Fe(t,l,o.onTriggerChange),u=m.useRef(!1),d=m.useRef(!1),h=m.useCallback(()=>u.current=!1,[]);return m.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),a.jsx(c2,{asChild:!0,...s,children:a.jsx(me.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...r,ref:c,onPointerMove:ie(e.onPointerMove,p=>{p.pointerType!=="touch"&&!d.current&&!i.isPointerInTransitRef.current&&(o.onTriggerEnter(),d.current=!0)}),onPointerLeave:ie(e.onPointerLeave,()=>{o.onTriggerLeave(),d.current=!1}),onPointerDown:ie(e.onPointerDown,()=>{o.open&&o.onClose(),u.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:ie(e.onFocus,()=>{u.current||o.onOpen()}),onBlur:ie(e.onBlur,o.onClose),onClick:ie(e.onClick,o.onClose)})})});g2.displayName=Gd;var y2="TooltipPortal",[CL,v2]=Ic(y2,{forceMount:void 0}),ji="TooltipContent",ob=m.forwardRef((e,t)=>{const n=v2(ji,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...i}=e,s=Rc(ji,e.__scopeTooltip);return a.jsx(Eo,{present:r||s.open,children:s.disableHoverableContent?a.jsx(ib,{side:o,...i,ref:t}):a.jsx(x2,{side:o,...i,ref:t})})}),x2=m.forwardRef((e,t)=>{const n=Rc(ji,e.__scopeTooltip),r=tb(ji,e.__scopeTooltip),o=m.useRef(null),i=Fe(t,o),[s,l]=m.useState(null),{trigger:c,onClose:u}=n,d=o.current,{onPointerInTransitChange:h}=r,p=m.useCallback(()=>{l(null),h(!1)},[h]),f=m.useCallback((w,x)=>{const b=w.currentTarget,g={x:w.clientX,y:w.clientY},v=C2(g,b.getBoundingClientRect()),y=T2(g,v),S=P2(x.getBoundingClientRect()),k=N2([...y,...S]);l(k),h(!0)},[h]);return m.useEffect(()=>()=>p(),[p]),m.useEffect(()=>{if(c&&d){const w=b=>f(b,d),x=b=>f(b,c);return c.addEventListener("pointerleave",w),d.addEventListener("pointerleave",x),()=>{c.removeEventListener("pointerleave",w),d.removeEventListener("pointerleave",x)}}},[c,d,f,p]),m.useEffect(()=>{if(s){const w=x=>{const b=x.target,g={x:x.clientX,y:x.clientY},v=(c==null?void 0:c.contains(b))||(d==null?void 0:d.contains(b)),y=!j2(g,s);v?p():y&&(p(),u())};return document.addEventListener("pointermove",w),()=>document.removeEventListener("pointermove",w)}},[c,d,s,u,p]),a.jsx(ib,{...e,ref:i})}),[w2,b2]=Ic(rb,{isInside:!1}),S2=f2("TooltipContent"),ib=m.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":o,onEscapeKeyDown:i,onPointerDownOutside:s,...l}=e,c=Rc(ji,n),u=Wf(n),{onClose:d}=c;return m.useEffect(()=>(document.addEventListener(bg,d),()=>document.removeEventListener(bg,d)),[d]),m.useEffect(()=>{if(c.trigger){const h=p=>{const f=p.target;f!=null&&f.contains(c.trigger)&&d()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[c.trigger,d]),a.jsx(kc,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:h=>h.preventDefault(),onDismiss:d,children:a.jsxs(u2,{"data-state":c.stateAttribute,...u,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[a.jsx(S2,{children:r}),a.jsx(w2,{scope:n,isInside:!0,children:a.jsx(Hw,{id:c.contentId,role:"tooltip",children:o||r})})]})})});ob.displayName=ji;var sb="TooltipArrow",k2=m.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Wf(n);return b2(sb,n).isInside?null:a.jsx(d2,{...o,...r,ref:t})});k2.displayName=sb;function C2(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function T2(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function P2(e){const{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}function j2(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const l=t[i],c=t[s],u=l.x,d=l.y,h=c.x,p=c.y;d>r!=p>r&&n<(h-u)*(r-d)/(p-d)+u&&(o=!o)}return o}function N2(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),E2(t)}function E2(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const o=e[r];for(;t.length>=2;){const i=t[t.length-1],s=t[t.length-2];if((i.x-s.x)*(o.y-s.y)>=(i.y-s.y)*(o.x-s.x))t.pop();else break}t.push(o)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r];for(;n.length>=2;){const i=n[n.length-1],s=n[n.length-2];if((i.x-s.x)*(o.y-s.y)>=(i.y-s.y)*(o.x-s.x))n.pop();else break}n.push(o)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var M2=nb,ab=ob;const A2=M2,I2=m.forwardRef(({className:e,sideOffset:t=4,...n},r)=>a.jsx(ab,{ref:r,sideOffset:t,className:le("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));I2.displayName=ab.displayName;var Dc=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},R2={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},vr,Eh,gv,D2=(gv=class{constructor(){de(this,vr,R2);de(this,Eh,!1)}setTimeoutProvider(e){ee(this,vr,e)}setTimeout(e,t){return A(this,vr).setTimeout(e,t)}clearTimeout(e){A(this,vr).clearTimeout(e)}setInterval(e,t){return A(this,vr).setInterval(e,t)}clearInterval(e){A(this,vr).clearInterval(e)}},vr=new WeakMap,Eh=new WeakMap,gv),qd=new D2;function L2(e){setTimeout(e,0)}var Lc=typeof window>"u"||"Deno"in globalThis;function cn(){}function O2(e,t){return typeof e=="function"?e(t):e}function F2(e){return typeof e=="number"&&e>=0&&e!==1/0}function B2(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Kd(e,t){return typeof e=="function"?e(t):e}function _2(e,t){return typeof e=="function"?e(t):e}function Sg(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:s,stale:l}=e;if(s){if(r){if(t.queryHash!==Vf(s,t.options))return!1}else if(!Ys(t.queryKey,s))return!1}if(n!=="all"){const c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||o&&o!==t.state.fetchStatus||i&&!i(t))}function kg(e,t){const{exact:n,status:r,predicate:o,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(Us(t.options.mutationKey)!==Us(i))return!1}else if(!Ys(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function Vf(e,t){return((t==null?void 0:t.queryKeyHashFn)||Us)(e)}function Us(e){return JSON.stringify(e,(t,n)=>Qd(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function Ys(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Ys(e[n],t[n])):!1}var W2=Object.prototype.hasOwnProperty;function lb(e,t){if(e===t)return e;const n=Cg(e)&&Cg(t);if(!n&&!(Qd(e)&&Qd(t)))return t;const o=(n?e:Object.keys(e)).length,i=n?t:Object.keys(t),s=i.length,l=n?new Array(s):{};let c=0;for(let u=0;u<s;u++){const d=n?u:i[u],h=e[d],p=t[d];if(h===p){l[d]=h,(n?u<o:W2.call(e,d))&&c++;continue}if(h===null||p===null||typeof h!="object"||typeof p!="object"){l[d]=p;continue}const f=lb(h,p);l[d]=f,f===h&&c++}return o===s&&c===o?e:l}function Cg(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Qd(e){if(!Tg(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Tg(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Tg(e){return Object.prototype.toString.call(e)==="[object Object]"}function V2(e){return new Promise(t=>{qd.setTimeout(t,e)})}function H2(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?lb(e,t):t}function z2(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function $2(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Hf=Symbol();function cb(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Hf?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var co,xr,ui,yv,U2=(yv=class extends Dc{constructor(){super();de(this,co);de(this,xr);de(this,ui);ee(this,ui,t=>{if(!Lc&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){A(this,xr)||this.setEventListener(A(this,ui))}onUnsubscribe(){var t;this.hasListeners()||((t=A(this,xr))==null||t.call(this),ee(this,xr,void 0))}setEventListener(t){var n;ee(this,ui,t),(n=A(this,xr))==null||n.call(this),ee(this,xr,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){A(this,co)!==t&&(ee(this,co,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof A(this,co)=="boolean"?A(this,co):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},co=new WeakMap,xr=new WeakMap,ui=new WeakMap,yv),ub=new U2;function Y2(){let e,t;const n=new Promise((o,i)=>{e=o,t=i});n.status="pending",n.catch(()=>{});function r(o){Object.assign(n,o),delete n.resolve,delete n.reject}return n.resolve=o=>{r({status:"fulfilled",value:o}),e(o)},n.reject=o=>{r({status:"rejected",reason:o}),t(o)},n}var G2=L2;function q2(){let e=[],t=0,n=l=>{l()},r=l=>{l()},o=G2;const i=l=>{t?e.push(l):o(()=>{n(l)})},s=()=>{const l=e;e=[],l.length&&o(()=>{r(()=>{l.forEach(c=>{n(c)})})})};return{batch:l=>{let c;t++;try{c=l()}finally{t--,t||s()}return c},batchCalls:l=>(...c)=>{i(()=>{l(...c)})},schedule:i,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{o=l}}}var gt=q2(),di,wr,hi,vv,K2=(vv=class extends Dc{constructor(){super();de(this,di,!0);de(this,wr);de(this,hi);ee(this,hi,t=>{if(!Lc&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){A(this,wr)||this.setEventListener(A(this,hi))}onUnsubscribe(){var t;this.hasListeners()||((t=A(this,wr))==null||t.call(this),ee(this,wr,void 0))}setEventListener(t){var n;ee(this,hi,t),(n=A(this,wr))==null||n.call(this),ee(this,wr,t(this.setOnline.bind(this)))}setOnline(t){A(this,di)!==t&&(ee(this,di,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return A(this,di)}},di=new WeakMap,wr=new WeakMap,hi=new WeakMap,vv),Ul=new K2;function Q2(e){return Math.min(1e3*2**e,3e4)}function db(e){return(e??"online")==="online"?Ul.isOnline():!0}var Jd=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function hb(e){let t=!1,n=0,r;const o=Y2(),i=()=>o.status!=="pending",s=x=>{var b;if(!i()){const g=new Jd(x);p(g),(b=e.onCancel)==null||b.call(e,g)}},l=()=>{t=!0},c=()=>{t=!1},u=()=>ub.isFocused()&&(e.networkMode==="always"||Ul.isOnline())&&e.canRun(),d=()=>db(e.networkMode)&&e.canRun(),h=x=>{i()||(r==null||r(),o.resolve(x))},p=x=>{i()||(r==null||r(),o.reject(x))},f=()=>new Promise(x=>{var b;r=g=>{(i()||u())&&x(g)},(b=e.onPause)==null||b.call(e)}).then(()=>{var x;r=void 0,i()||(x=e.onContinue)==null||x.call(e)}),w=()=>{if(i())return;let x;const b=n===0?e.initialPromise:void 0;try{x=b??e.fn()}catch(g){x=Promise.reject(g)}Promise.resolve(x).then(h).catch(g=>{var P;if(i())return;const v=e.retry??(Lc?0:3),y=e.retryDelay??Q2,S=typeof y=="function"?y(n,g):y,k=v===!0||typeof v=="number"&&n<v||typeof v=="function"&&v(n,g);if(t||!k){p(g);return}n++,(P=e.onFail)==null||P.call(e,n,g),V2(S).then(()=>u()?void 0:f()).then(()=>{t?p(g):w()})})};return{promise:o,status:()=>o.status,cancel:s,continue:()=>(r==null||r(),o),cancelRetry:l,continueRetry:c,canStart:d,start:()=>(d()?w():f().then(w),o)}}var uo,xv,fb=(xv=class{constructor(){de(this,uo)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),F2(this.gcTime)&&ee(this,uo,qd.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Lc?1/0:5*60*1e3))}clearGcTimeout(){A(this,uo)&&(qd.clearTimeout(A(this,uo)),ee(this,uo,void 0))}},uo=new WeakMap,xv),ho,fi,Ut,fo,Qe,ea,po,un,Wn,wv,J2=(wv=class extends fb{constructor(t){super();de(this,un);de(this,ho);de(this,fi);de(this,Ut);de(this,fo);de(this,Qe);de(this,ea);de(this,po);ee(this,po,!1),ee(this,ea,t.defaultOptions),this.setOptions(t.options),this.observers=[],ee(this,fo,t.client),ee(this,Ut,A(this,fo).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,ee(this,ho,jg(this.options)),this.state=t.state??A(this,ho),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=A(this,Qe))==null?void 0:t.promise}setOptions(t){if(this.options={...A(this,ea),...t},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const n=jg(this.options);n.data!==void 0&&(this.setState(Pg(n.data,n.dataUpdatedAt)),ee(this,ho,n))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&A(this,Ut).remove(this)}setData(t,n){const r=H2(this.state.data,t,this.options);return ot(this,un,Wn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){ot(this,un,Wn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=A(this,Qe))==null?void 0:r.promise;return(o=A(this,Qe))==null||o.cancel(t),n?n.then(cn).catch(cn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(A(this,ho))}isActive(){return this.observers.some(t=>_2(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Hf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Kd(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!B2(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=A(this,Qe))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=A(this,Qe))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),A(this,Ut).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(A(this,Qe)&&(A(this,po)?A(this,Qe).cancel({revert:!0}):A(this,Qe).cancelRetry()),this.scheduleGc()),A(this,Ut).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||ot(this,un,Wn).call(this,{type:"invalidate"})}async fetch(t,n){var c,u,d,h,p,f,w,x,b,g,v,y;if(this.state.fetchStatus!=="idle"&&((c=A(this,Qe))==null?void 0:c.status())!=="rejected"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(A(this,Qe))return A(this,Qe).continueRetry(),A(this,Qe).promise}if(t&&this.setOptions(t),!this.options.queryFn){const S=this.observers.find(k=>k.options.queryFn);S&&this.setOptions(S.options)}const r=new AbortController,o=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>(ee(this,po,!0),r.signal)})},i=()=>{const S=cb(this.options,n),P=(()=>{const j={client:A(this,fo),queryKey:this.queryKey,meta:this.meta};return o(j),j})();return ee(this,po,!1),this.options.persister?this.options.persister(S,P,this):S(P)},l=(()=>{const S={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:A(this,fo),state:this.state,fetchFn:i};return o(S),S})();(u=this.options.behavior)==null||u.onFetch(l,this),ee(this,fi,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=l.fetchOptions)==null?void 0:d.meta))&&ot(this,un,Wn).call(this,{type:"fetch",meta:(h=l.fetchOptions)==null?void 0:h.meta}),ee(this,Qe,hb({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,onCancel:S=>{S instanceof Jd&&S.revert&&this.setState({...A(this,fi),fetchStatus:"idle"}),r.abort()},onFail:(S,k)=>{ot(this,un,Wn).call(this,{type:"failed",failureCount:S,error:k})},onPause:()=>{ot(this,un,Wn).call(this,{type:"pause"})},onContinue:()=>{ot(this,un,Wn).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0}));try{const S=await A(this,Qe).start();if(S===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(S),(f=(p=A(this,Ut).config).onSuccess)==null||f.call(p,S,this),(x=(w=A(this,Ut).config).onSettled)==null||x.call(w,S,this.state.error,this),S}catch(S){if(S instanceof Jd){if(S.silent)return A(this,Qe).promise;if(S.revert){if(this.state.data===void 0)throw S;return this.state.data}}throw ot(this,un,Wn).call(this,{type:"error",error:S}),(g=(b=A(this,Ut).config).onError)==null||g.call(b,S,this),(y=(v=A(this,Ut).config).onSettled)==null||y.call(v,this.state.data,S,this),S}finally{this.scheduleGc()}}},ho=new WeakMap,fi=new WeakMap,Ut=new WeakMap,fo=new WeakMap,Qe=new WeakMap,ea=new WeakMap,po=new WeakMap,un=new WeakSet,Wn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...X2(r.data,this.options),fetchMeta:t.meta??null};case"success":const o={...r,...Pg(t.data,t.dataUpdatedAt),dataUpdateCount:r.dataUpdateCount+1,...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return ee(this,fi,t.manual?o:void 0),o;case"error":const i=t.error;return{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),gt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),A(this,Ut).notify({query:this,type:"updated",action:t})})},wv);function X2(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:db(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Pg(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function jg(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}function Ng(e){return{onFetch:(t,n)=>{var d,h,p,f,w;const r=t.options,o=(p=(h=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:h.fetchMore)==null?void 0:p.direction,i=((f=t.state.data)==null?void 0:f.pages)||[],s=((w=t.state.data)==null?void 0:w.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const u=async()=>{let x=!1;const b=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(t.signal.aborted?x=!0:t.signal.addEventListener("abort",()=>{x=!0}),t.signal)})},g=cb(t.options,t.fetchOptions),v=async(y,S,k)=>{if(x)return Promise.reject();if(S==null&&y.pages.length)return Promise.resolve(y);const j=(()=>{const B={client:t.client,queryKey:t.queryKey,pageParam:S,direction:k?"backward":"forward",meta:t.options.meta};return b(B),B})(),N=await g(j),{maxPages:R}=t.options,M=k?$2:z2;return{pages:M(y.pages,N,R),pageParams:M(y.pageParams,S,R)}};if(o&&i.length){const y=o==="backward",S=y?Z2:Eg,k={pages:i,pageParams:s},P=S(r,k);l=await v(k,P,y)}else{const y=e??i.length;do{const S=c===0?s[0]??r.initialPageParam:Eg(r,l);if(c>0&&S==null)break;l=await v(l,S),c++}while(c<y)}return l};t.options.persister?t.fetchFn=()=>{var x,b;return(b=(x=t.options).persister)==null?void 0:b.call(x,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Eg(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Z2(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var ta,kn,ft,mo,Cn,hr,bv,eM=(bv=class extends fb{constructor(t){super();de(this,Cn);de(this,ta);de(this,kn);de(this,ft);de(this,mo);ee(this,ta,t.client),this.mutationId=t.mutationId,ee(this,ft,t.mutationCache),ee(this,kn,[]),this.state=t.state||tM(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){A(this,kn).includes(t)||(A(this,kn).push(t),this.clearGcTimeout(),A(this,ft).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){ee(this,kn,A(this,kn).filter(n=>n!==t)),this.scheduleGc(),A(this,ft).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){A(this,kn).length||(this.state.status==="pending"?this.scheduleGc():A(this,ft).remove(this))}continue(){var t;return((t=A(this,mo))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var s,l,c,u,d,h,p,f,w,x,b,g,v,y,S,k,P,j,N,R;const n=()=>{ot(this,Cn,hr).call(this,{type:"continue"})},r={client:A(this,ta),meta:this.options.meta,mutationKey:this.options.mutationKey};ee(this,mo,hb({fn:()=>this.options.mutationFn?this.options.mutationFn(t,r):Promise.reject(new Error("No mutationFn found")),onFail:(M,B)=>{ot(this,Cn,hr).call(this,{type:"failed",failureCount:M,error:B})},onPause:()=>{ot(this,Cn,hr).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>A(this,ft).canRun(this)}));const o=this.state.status==="pending",i=!A(this,mo).canStart();try{if(o)n();else{ot(this,Cn,hr).call(this,{type:"pending",variables:t,isPaused:i}),await((l=(s=A(this,ft).config).onMutate)==null?void 0:l.call(s,t,this,r));const B=await((u=(c=this.options).onMutate)==null?void 0:u.call(c,t,r));B!==this.state.context&&ot(this,Cn,hr).call(this,{type:"pending",context:B,variables:t,isPaused:i})}const M=await A(this,mo).start();return await((h=(d=A(this,ft).config).onSuccess)==null?void 0:h.call(d,M,t,this.state.context,this,r)),await((f=(p=this.options).onSuccess)==null?void 0:f.call(p,M,t,this.state.context,r)),await((x=(w=A(this,ft).config).onSettled)==null?void 0:x.call(w,M,null,this.state.variables,this.state.context,this,r)),await((g=(b=this.options).onSettled)==null?void 0:g.call(b,M,null,t,this.state.context,r)),ot(this,Cn,hr).call(this,{type:"success",data:M}),M}catch(M){try{throw await((y=(v=A(this,ft).config).onError)==null?void 0:y.call(v,M,t,this.state.context,this,r)),await((k=(S=this.options).onError)==null?void 0:k.call(S,M,t,this.state.context,r)),await((j=(P=A(this,ft).config).onSettled)==null?void 0:j.call(P,void 0,M,this.state.variables,this.state.context,this,r)),await((R=(N=this.options).onSettled)==null?void 0:R.call(N,void 0,M,t,this.state.context,r)),M}finally{ot(this,Cn,hr).call(this,{type:"error",error:M})}}finally{A(this,ft).runNext(this)}}},ta=new WeakMap,kn=new WeakMap,ft=new WeakMap,mo=new WeakMap,Cn=new WeakSet,hr=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),gt.batch(()=>{A(this,kn).forEach(r=>{r.onMutationUpdate(t)}),A(this,ft).notify({mutation:this,type:"updated",action:t})})},bv);function tM(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var zn,dn,na,Sv,nM=(Sv=class extends Dc{constructor(t={}){super();de(this,zn);de(this,dn);de(this,na);this.config=t,ee(this,zn,new Set),ee(this,dn,new Map),ee(this,na,0)}build(t,n,r){const o=new eM({client:t,mutationCache:this,mutationId:++wa(this,na)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){A(this,zn).add(t);const n=Ha(t);if(typeof n=="string"){const r=A(this,dn).get(n);r?r.push(t):A(this,dn).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(A(this,zn).delete(t)){const n=Ha(t);if(typeof n=="string"){const r=A(this,dn).get(n);if(r)if(r.length>1){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}else r[0]===t&&A(this,dn).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Ha(t);if(typeof n=="string"){const r=A(this,dn).get(n),o=r==null?void 0:r.find(i=>i.state.status==="pending");return!o||o===t}else return!0}runNext(t){var r;const n=Ha(t);if(typeof n=="string"){const o=(r=A(this,dn).get(n))==null?void 0:r.find(i=>i!==t&&i.state.isPaused);return(o==null?void 0:o.continue())??Promise.resolve()}else return Promise.resolve()}clear(){gt.batch(()=>{A(this,zn).forEach(t=>{this.notify({type:"removed",mutation:t})}),A(this,zn).clear(),A(this,dn).clear()})}getAll(){return Array.from(A(this,zn))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>kg(n,r))}findAll(t={}){return this.getAll().filter(n=>kg(t,n))}notify(t){gt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return gt.batch(()=>Promise.all(t.map(n=>n.continue().catch(cn))))}},zn=new WeakMap,dn=new WeakMap,na=new WeakMap,Sv);function Ha(e){var t;return(t=e.options.scope)==null?void 0:t.id}var Tn,kv,rM=(kv=class extends Dc{constructor(t={}){super();de(this,Tn);this.config=t,ee(this,Tn,new Map)}build(t,n,r){const o=n.queryKey,i=n.queryHash??Vf(o,n);let s=this.get(i);return s||(s=new J2({client:t,queryKey:o,queryHash:i,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(s)),s}add(t){A(this,Tn).has(t.queryHash)||(A(this,Tn).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=A(this,Tn).get(t.queryHash);n&&(t.destroy(),n===t&&A(this,Tn).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){gt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return A(this,Tn).get(t)}getAll(){return[...A(this,Tn).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Sg(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Sg(t,r)):n}notify(t){gt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){gt.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){gt.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Tn=new WeakMap,kv),De,br,Sr,pi,mi,kr,gi,yi,Cv,oM=(Cv=class{constructor(e={}){de(this,De);de(this,br);de(this,Sr);de(this,pi);de(this,mi);de(this,kr);de(this,gi);de(this,yi);ee(this,De,e.queryCache||new rM),ee(this,br,e.mutationCache||new nM),ee(this,Sr,e.defaultOptions||{}),ee(this,pi,new Map),ee(this,mi,new Map),ee(this,kr,0)}mount(){wa(this,kr)._++,A(this,kr)===1&&(ee(this,gi,ub.subscribe(async e=>{e&&(await this.resumePausedMutations(),A(this,De).onFocus())})),ee(this,yi,Ul.subscribe(async e=>{e&&(await this.resumePausedMutations(),A(this,De).onOnline())})))}unmount(){var e,t;wa(this,kr)._--,A(this,kr)===0&&((e=A(this,gi))==null||e.call(this),ee(this,gi,void 0),(t=A(this,yi))==null||t.call(this),ee(this,yi,void 0))}isFetching(e){return A(this,De).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return A(this,br).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=A(this,De).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=A(this,De).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Kd(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return A(this,De).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=A(this,De).get(r.queryHash),i=o==null?void 0:o.state.data,s=O2(t,i);if(s!==void 0)return A(this,De).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return gt.batch(()=>A(this,De).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=A(this,De).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=A(this,De);gt.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=A(this,De);return gt.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=gt.batch(()=>A(this,De).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(cn).catch(cn)}invalidateQueries(e,t={}){return gt.batch(()=>(A(this,De).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=gt.batch(()=>A(this,De).findAll(e).filter(o=>!o.isDisabled()&&!o.isStatic()).map(o=>{let i=o.fetch(void 0,n);return n.throwOnError||(i=i.catch(cn)),o.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(cn)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=A(this,De).build(this,t);return n.isStaleByTime(Kd(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(cn).catch(cn)}fetchInfiniteQuery(e){return e.behavior=Ng(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(cn).catch(cn)}ensureInfiniteQueryData(e){return e.behavior=Ng(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ul.isOnline()?A(this,br).resumePausedMutations():Promise.resolve()}getQueryCache(){return A(this,De)}getMutationCache(){return A(this,br)}getDefaultOptions(){return A(this,Sr)}setDefaultOptions(e){ee(this,Sr,e)}setQueryDefaults(e,t){A(this,pi).set(Us(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...A(this,pi).values()],n={};return t.forEach(r=>{Ys(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){A(this,mi).set(Us(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...A(this,mi).values()],n={};return t.forEach(r=>{Ys(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...A(this,Sr).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Vf(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Hf&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...A(this,Sr).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){A(this,De).clear(),A(this,br).clear()}},De=new WeakMap,br=new WeakMap,Sr=new WeakMap,pi=new WeakMap,mi=new WeakMap,kr=new WeakMap,gi=new WeakMap,yi=new WeakMap,Cv),iM=m.createContext(void 0),sM=({client:e,children:t})=>(m.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),a.jsx(iM.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gs(){return Gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gs.apply(this,arguments)}var Pr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pr||(Pr={}));const Mg="popstate";function aM(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:l}=r.location;return Xd("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Yl(o)}return cM(t,n,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lM(){return Math.random().toString(36).substr(2,8)}function Ag(e,t){return{usr:e.state,key:e.key,idx:t}}function Xd(e,t,n,r){return n===void 0&&(n=null),Gs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_i(t):t,{state:n,key:t&&t.key||r||lM()})}function Yl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _i(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function cM(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=Pr.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(Gs({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){l=Pr.Pop;let b=d(),g=b==null?null:b-u;u=b,c&&c({action:l,location:x.location,delta:g})}function p(b,g){l=Pr.Push;let v=Xd(x.location,b,g);u=d()+1;let y=Ag(v,u),S=x.createHref(v);try{s.pushState(y,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(S)}i&&c&&c({action:l,location:x.location,delta:1})}function f(b,g){l=Pr.Replace;let v=Xd(x.location,b,g);u=d();let y=Ag(v,u),S=x.createHref(v);s.replaceState(y,"",S),i&&c&&c({action:l,location:x.location,delta:0})}function w(b){let g=o.location.origin!=="null"?o.location.origin:o.location.href,v=typeof b=="string"?b:Yl(b);return v=v.replace(/ $/,"%20"),ze(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let x={get action(){return l},get location(){return e(o,s)},listen(b){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Mg,h),c=b,()=>{o.removeEventListener(Mg,h),c=null}},createHref(b){return t(o,b)},createURL:w,encodeLocation(b){let g=w(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:f,go(b){return s.go(b)}};return x}var Ig;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ig||(Ig={}));function uM(e,t,n){return n===void 0&&(n="/"),dM(e,t,n)}function dM(e,t,n,r){let o=typeof t=="string"?_i(t):t,i=$f(o.pathname||"/",n);if(i==null)return null;let s=pb(e);hM(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=CM(i);l=bM(s[c],u)}return l}function pb(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(ze(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Lr([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(ze(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pb(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:xM(u,i.index),routesMeta:d})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let c of mb(i.path))o(i,s,c)}),t}function mb(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=mb(r.join("/")),l=[];return l.push(...s.map(c=>c===""?i:[i,c].join("/"))),o&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function hM(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:wM(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fM=/^:[\w-]+$/,pM=3,mM=2,gM=1,yM=10,vM=-2,Rg=e=>e==="*";function xM(e,t){let n=e.split("/"),r=n.length;return n.some(Rg)&&(r+=vM),t&&(r+=mM),n.filter(o=>!Rg(o)).reduce((o,i)=>o+(fM.test(i)?pM:i===""?gM:yM),r)}function wM(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function bM(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",h=SM({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!h)return null;Object.assign(o,h.params),s.push({params:o,pathname:Lr([i,h.pathname]),pathnameBase:EM(Lr([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=Lr([i,h.pathnameBase]))}return s}function SM(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=kM(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:p,isOptional:f}=d;if(p==="*"){let x=l[h]||"";s=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const w=l[h];return f&&!w?u[p]=void 0:u[p]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function kM(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function CM(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $f(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const TM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,PM=e=>TM.test(e);function jM(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?_i(e):e,i;if(n)if(PM(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),zf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=Dg(n.substring(1),"/"):i=Dg(n,t)}else i=t;return{pathname:i,search:MM(r),hash:AM(o)}}function Dg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Tu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NM(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gb(e,t){let n=NM(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function yb(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=_i(e):(o=Gs({},e),ze(!o.pathname||!o.pathname.includes("?"),Tu("?","pathname","search",o)),ze(!o.pathname||!o.pathname.includes("#"),Tu("#","pathname","hash",o)),ze(!o.search||!o.search.includes("#"),Tu("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(s==null)l=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),h-=1;o.pathname=p.join("/")}l=h>=0?t[h]:"/"}let c=jM(o,l),u=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Lr=e=>e.join("/").replace(/\/\/+/g,"/"),EM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),MM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,AM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function IM(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vb=["post","put","patch","delete"];new Set(vb);const RM=["get",...vb];new Set(RM);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qs(){return qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qs.apply(this,arguments)}const Uf=m.createContext(null),DM=m.createContext(null),Mo=m.createContext(null),Oc=m.createContext(null),Gr=m.createContext({outlet:null,matches:[],isDataRoute:!1}),xb=m.createContext(null);function LM(e,t){let{relative:n}=t===void 0?{}:t;pa()||ze(!1);let{basename:r,navigator:o}=m.useContext(Mo),{hash:i,pathname:s,search:l}=Sb(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Lr([r,s])),o.createHref({pathname:c,search:l,hash:i})}function pa(){return m.useContext(Oc)!=null}function qr(){return pa()||ze(!1),m.useContext(Oc).location}function wb(e){m.useContext(Mo).static||m.useLayoutEffect(e)}function bb(){let{isDataRoute:e}=m.useContext(Gr);return e?KM():OM()}function OM(){pa()||ze(!1);let e=m.useContext(Uf),{basename:t,future:n,navigator:r}=m.useContext(Mo),{matches:o}=m.useContext(Gr),{pathname:i}=qr(),s=JSON.stringify(gb(o,n.v7_relativeSplatPath)),l=m.useRef(!1);return wb(()=>{l.current=!0}),m.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let h=yb(u,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Lr([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,s,i,e])}function FM(){let{matches:e}=m.useContext(Gr),t=e[e.length-1];return t?t.params:{}}function Sb(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=m.useContext(Mo),{matches:o}=m.useContext(Gr),{pathname:i}=qr(),s=JSON.stringify(gb(o,r.v7_relativeSplatPath));return m.useMemo(()=>yb(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function BM(e,t){return _M(e,t)}function _M(e,t,n,r){pa()||ze(!1);let{navigator:o}=m.useContext(Mo),{matches:i}=m.useContext(Gr),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=qr(),d;if(t){var h;let b=typeof t=="string"?_i(t):t;c==="/"||(h=b.pathname)!=null&&h.startsWith(c)||ze(!1),d=b}else d=u;let p=d.pathname||"/",f=p;if(c!=="/"){let b=c.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let w=uM(e,{pathname:f}),x=$M(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Lr([c,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:Lr([c,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&x?m.createElement(Oc.Provider,{value:{location:qs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Pr.Pop}},x):x}function WM(){let e=qM(),t=IM(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:o},n):null,null)}const VM=m.createElement(WM,null);class HM extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(Gr.Provider,{value:this.props.routeContext},m.createElement(xb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zM(e){let{routeContext:t,match:n,children:r}=e,o=m.useContext(Uf);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(Gr.Provider,{value:t},r)}function $M(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=s.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);d>=0||ze(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let h=s[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:p,errors:f}=n,w=h.route.loader&&p[h.route.id]===void 0&&(!f||f[h.route.id]===void 0);if(h.route.lazy||w){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,h,p)=>{let f,w=!1,x=null,b=null;n&&(f=l&&h.route.id?l[h.route.id]:void 0,x=h.route.errorElement||VM,c&&(u<0&&p===0?(QM("route-fallback"),w=!0,b=null):u===p&&(w=!0,b=h.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,p+1)),v=()=>{let y;return f?y=x:w?y=b:h.route.Component?y=m.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=d,m.createElement(zM,{match:h,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?m.createElement(HM,{location:n.location,revalidation:n.revalidation,component:x,error:f,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var kb=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(kb||{}),Cb=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Cb||{});function UM(e){let t=m.useContext(Uf);return t||ze(!1),t}function YM(e){let t=m.useContext(DM);return t||ze(!1),t}function GM(e){let t=m.useContext(Gr);return t||ze(!1),t}function Tb(e){let t=GM(),n=t.matches[t.matches.length-1];return n.route.id||ze(!1),n.route.id}function qM(){var e;let t=m.useContext(xb),n=YM(),r=Tb();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function KM(){let{router:e}=UM(kb.UseNavigateStable),t=Tb(Cb.UseNavigateStable),n=m.useRef(!1);return wb(()=>{n.current=!0}),m.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,qs({fromRouteId:t},i)))},[e,t])}const Lg={};function QM(e,t,n){Lg[e]||(Lg[e]=!0)}function JM(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function at(e){ze(!1)}function XM(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Pr.Pop,navigator:i,static:s=!1,future:l}=e;pa()&&ze(!1);let c=t.replace(/^\/*/,"/"),u=m.useMemo(()=>({basename:c,navigator:i,static:s,future:qs({v7_relativeSplatPath:!1},l)}),[c,l,i,s]);typeof r=="string"&&(r=_i(r));let{pathname:d="/",search:h="",hash:p="",state:f=null,key:w="default"}=r,x=m.useMemo(()=>{let b=$f(d,c);return b==null?null:{location:{pathname:b,search:h,hash:p,state:f,key:w},navigationType:o}},[c,d,h,p,f,w,o]);return x==null?null:m.createElement(Mo.Provider,{value:u},m.createElement(Oc.Provider,{children:n,value:x}))}function ZM(e){let{children:t,location:n}=e;return BM(Zd(t),n)}new Promise(()=>{});function Zd(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(r,o)=>{if(!m.isValidElement(r))return;let i=[...t,o];if(r.type===m.Fragment){n.push.apply(n,Zd(r.props.children,i));return}r.type!==at&&ze(!1),!r.props.index||!r.props.children||ze(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Zd(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eh(){return eh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eh.apply(this,arguments)}function eA(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function tA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nA(e,t){return e.button===0&&(!t||t==="_self")&&!tA(e)}const rA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],oA="6";try{window.__reactRouterVersion=oA}catch{}const iA="startTransition",Og=ic[iA];function sA(e){let{basename:t,children:n,future:r,window:o}=e,i=m.useRef();i.current==null&&(i.current=aM({window:o,v5Compat:!0}));let s=i.current,[l,c]=m.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=m.useCallback(h=>{u&&Og?Og(()=>c(h)):c(h)},[c,u]);return m.useLayoutEffect(()=>s.listen(d),[s,d]),m.useEffect(()=>JM(r),[r]),m.createElement(XM,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const aA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pe=m.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:c,to:u,preventScrollReset:d,viewTransition:h}=t,p=eA(t,rA),{basename:f}=m.useContext(Mo),w,x=!1;if(typeof u=="string"&&lA.test(u)&&(w=u,aA))try{let y=new URL(window.location.href),S=u.startsWith("//")?new URL(y.protocol+u):new URL(u),k=$f(S.pathname,f);S.origin===y.origin&&k!=null?u=k+S.search+S.hash:x=!0}catch{}let b=LM(u,{relative:o}),g=cA(u,{replace:s,state:l,target:c,preventScrollReset:d,relative:o,viewTransition:h});function v(y){r&&r(y),y.defaultPrevented||g(y)}return m.createElement("a",eh({},p,{href:w||b,onClick:x||i?r:v,ref:n,target:c}))});var Fg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Fg||(Fg={}));var Bg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bg||(Bg={}));function cA(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:l}=t===void 0?{}:t,c=bb(),u=qr(),d=Sb(e,{relative:s});return m.useCallback(h=>{if(nA(h,n)){h.preventDefault();let p=r!==void 0?r:Yl(u)===Yl(d);c(e,{replace:p,state:o,preventScrollReset:i,relative:s,viewTransition:l})}},[u,c,d,r,o,n,e,i,s,l])}var uA=typeof Element<"u",dA=typeof Map=="function",hA=typeof Set=="function",fA=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function cl(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!cl(e[r],t[r]))return!1;return!0}var i;if(dA&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!cl(r.value[1],t.get(r.value[0])))return!1;return!0}if(hA&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(fA&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(uA&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!cl(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var pA=function(t,n){try{return cl(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const mA=ra(pA);var gA=function(e,t,n,r,o,i,s,l){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,s,l],d=0;c=new Error(t.replace(/%s/g,function(){return u[d++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},yA=gA;const _g=ra(yA);var vA=function(t,n,r,o){var i=r?r.call(o,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),u=0;u<s.length;u++){var d=s[u];if(!c(d))return!1;var h=t[d],p=n[d];if(i=r?r.call(o,h,p,d):void 0,i===!1||i===void 0&&h!==p)return!1}return!0};const xA=ra(vA);var Pb=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Pb||{}),Pu={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Wg=Object.values(Pb),Yf={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},wA=Object.entries(Yf).reduce((e,[t,n])=>(e[n]=t,e),{}),pn="data-rh",li={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},ci=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},bA=e=>{let t=ci(e,"title");const n=ci(e,li.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=ci(e,li.DEFAULT_TITLE);return t||r||void 0},SA=e=>ci(e,li.ON_CHANGE_CLIENT_STATE)||(()=>{}),ju=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),kA=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const o=Object.keys(r);for(let i=0;i<o.length;i+=1){const l=o[i].toLowerCase();if(e.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),CA=e=>console&&typeof console.warn=="function"&&console.warn(e),ts=(e,t,n)=>{const r={};return n.filter(o=>Array.isArray(o[e])?!0:(typeof o[e]<"u"&&CA(`Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`),!1)).map(o=>o[e]).reverse().reduce((o,i)=>{const s={};i.filter(c=>{let u;const d=Object.keys(c);for(let p=0;p<d.length;p+=1){const f=d[p],w=f.toLowerCase();t.indexOf(w)!==-1&&!(u==="rel"&&c[u].toLowerCase()==="canonical")&&!(w==="rel"&&c[w].toLowerCase()==="stylesheet")&&(u=w),t.indexOf(f)!==-1&&(f==="innerHTML"||f==="cssText"||f==="itemprop")&&(u=f)}if(!u||!c[u])return!1;const h=c[u].toLowerCase();return r[u]||(r[u]={}),s[u]||(s[u]={}),r[u][h]?!1:(s[u][h]=!0,!0)}).reverse().forEach(c=>o.push(c));const l=Object.keys(s);for(let c=0;c<l.length;c+=1){const u=l[c],d={...r[u],...s[u]};r[u]=d}return o},[]).reverse()},TA=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},PA=e=>({baseTag:kA(["href"],e),bodyAttributes:ju("bodyAttributes",e),defer:ci(e,li.DEFER),encode:ci(e,li.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ju("htmlAttributes",e),linkTags:ts("link",["rel","href"],e),metaTags:ts("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:ts("noscript",["innerHTML"],e),onChangeClientState:SA(e),scriptTags:ts("script",["src","innerHTML"],e),styleTags:ts("style",["cssText"],e),title:bA(e),titleAttributes:ju("titleAttributes",e),prioritizeSeoTags:TA(e,li.PRIORITIZE_SEO_TAGS)}),jb=e=>Array.isArray(e)?e.join(""):e,jA=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Nu=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(jA(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},Vg=(e,t)=>({...e,[t]:void 0}),NA=["noscript","script","style"],th=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Nb=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),EA=(e,t,n,r)=>{const o=Nb(n),i=jb(t);return o?`<${e} ${pn}="true" ${o}>${th(i,r)}</${e}>`:`<${e} ${pn}="true">${th(i,r)}</${e}>`},MA=(e,t,n=!0)=>t.reduce((r,o)=>{const i=o,s=Object.keys(i).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,d)=>{const h=typeof i[d]>"u"?d:`${d}="${th(i[d],n)}"`;return u?`${u} ${h}`:h},""),l=i.innerHTML||i.cssText||"",c=NA.indexOf(e)===-1;return`${r}<${e} ${pn}="true" ${s}${c?"/>":`>${l}</${e}>`}`},""),Eb=(e,t={})=>Object.keys(e).reduce((n,r)=>{const o=Yf[r];return n[o||r]=e[r],n},t),AA=(e,t,n)=>{const r={key:t,[pn]:!0},o=Eb(n,r);return[O.createElement("title",o,t)]},ul=(e,t)=>t.map((n,r)=>{const o={key:r,[pn]:!0};return Object.keys(n).forEach(i=>{const l=Yf[i]||i;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:c}}else o[l]=n[i]}),O.createElement(e,o)}),$t=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>AA(e,t.title,t.titleAttributes),toString:()=>EA(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Eb(t),toString:()=>Nb(t)};default:return{toComponent:()=>ul(e,t),toString:()=>MA(e,t,n)}}},IA=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const o=Nu(e,Pu.meta),i=Nu(t,Pu.link),s=Nu(n,Pu.script);return{priorityMethods:{toComponent:()=>[...ul("meta",o.priority),...ul("link",i.priority),...ul("script",s.priority)],toString:()=>`${$t("meta",o.priority,r)} ${$t("link",i.priority,r)} ${$t("script",s.priority,r)}`},metaTags:o.default,linkTags:i.default,scriptTags:s.default}},RA=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:o,noscriptTags:i,styleTags:s,title:l="",titleAttributes:c,prioritizeSeoTags:u}=e;let{linkTags:d,metaTags:h,scriptTags:p}=e,f={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:f,linkTags:d,metaTags:h,scriptTags:p}=IA(e)),{priority:f,base:$t("base",t,r),bodyAttributes:$t("bodyAttributes",n,r),htmlAttributes:$t("htmlAttributes",o,r),link:$t("link",d,r),meta:$t("meta",h,r),noscript:$t("noscript",i,r),script:$t("script",p,r),style:$t("style",s,r),title:$t("title",{title:l,titleAttributes:c},r)}},nh=RA,za=[],Mb=!!(typeof window<"u"&&window.document&&window.document.createElement),rh=class{constructor(e,t){Fn(this,"instances",[]);Fn(this,"canUseDOM",Mb);Fn(this,"context");Fn(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?za:this.instances,add:e=>{(this.canUseDOM?za:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?za:this.instances).indexOf(e);(this.canUseDOM?za:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=nh({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},DA={},Ab=O.createContext(DA),go,Ib=(go=class extends m.Component{constructor(n){super(n);Fn(this,"helmetData");this.helmetData=new rh(this.props.context||{},go.canUseDOM)}render(){return O.createElement(Ab.Provider,{value:this.helmetData.value},this.props.children)}},Fn(go,"canUseDOM",Mb),go),Lo=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${pn}]`),o=[].slice.call(r),i=[];let s;return t&&t.length&&t.forEach(l=>{const c=document.createElement(e);for(const u in l)if(Object.prototype.hasOwnProperty.call(l,u))if(u==="innerHTML")c.innerHTML=l.innerHTML;else if(u==="cssText")c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{const d=u,h=typeof l[d]>"u"?"":l[d];c.setAttribute(u,h)}c.setAttribute(pn,"true"),o.some((u,d)=>(s=d,c.isEqualNode(u)))?o.splice(s,1):i.push(c)}),o.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),i.forEach(l=>n.appendChild(l)),{oldTags:o,newTags:i}},oh=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(pn),o=r?r.split(","):[],i=[...o],s=Object.keys(t);for(const l of s){const c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);const u=i.indexOf(l);u!==-1&&i.splice(u,1)}for(let l=i.length-1;l>=0;l-=1)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(pn):n.getAttribute(pn)!==s.join(",")&&n.setAttribute(pn,s.join(","))},LA=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=jb(e)),oh("title",t)},Hg=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:o,linkTags:i,metaTags:s,noscriptTags:l,onChangeClientState:c,scriptTags:u,styleTags:d,title:h,titleAttributes:p}=e;oh("body",r),oh("html",o),LA(h,p);const f={baseTag:Lo("base",n),linkTags:Lo("link",i),metaTags:Lo("meta",s),noscriptTags:Lo("noscript",l),scriptTags:Lo("script",u),styleTags:Lo("style",d)},w={},x={};Object.keys(f).forEach(b=>{const{newTags:g,oldTags:v}=f[b];g.length&&(w[b]=g),v.length&&(x[b]=f[b].oldTags)}),t&&t(),c(e,w,x)},ns=null,OA=e=>{ns&&cancelAnimationFrame(ns),e.defer?ns=requestAnimationFrame(()=>{Hg(e,()=>{ns=null})}):(Hg(e),ns=null)},FA=OA,zg=class extends m.Component{constructor(){super(...arguments);Fn(this,"rendered",!1)}shouldComponentUpdate(t){return!xA(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const o=PA(t.get().map(i=>{const s={...i.props};return delete s.context,s}));Ib.canUseDOM?FA(o):nh&&(r=nh(o)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},zu,wt=(zu=class extends m.Component{shouldComponentUpdate(e){return!mA(Vg(this.props,"helmetData"),Vg(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return _g(Wg.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Wg.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),_g(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return O.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:o,...i}=r.props,s=Object.keys(i).reduce((c,u)=>(c[wA[u]||u]=i[u],c),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,o),l){case"Symbol(react.fragment)":t=this.mapChildrenToProps(o,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,o);break;default:t=this.mapObjectTypeChildren(r,t,s,o);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof rh)){const o=r;r=new rh(o.context,!0),delete n.helmetData}return r?O.createElement(zg,{...n,context:r.value}):O.createElement(Ab.Consumer,null,o=>O.createElement(zg,{...n,context:o}))}},Fn(zu,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),zu);const BA=()=>{const{pathname:e}=qr();return m.useEffect(()=>{window.scrollTo(0,0)},[e]),null},ma=()=>{const[e,t]=m.useState([]);return m.useEffect(()=>{const n=[];for(let r=0;r<30;r++)n.push({id:r,left:Math.random()*100,size:Math.random()*4+2,delay:Math.random()*20,duration:Math.random()*15+15});t(n)},[]),a.jsx("div",{className:"particles-container",children:e.map(n=>a.jsx("div",{className:"particle",style:{left:`${n.left}%`,width:`${n.size}px`,height:`${n.size}px`,animationDelay:`${n.delay}s`,animationDuration:`${n.duration}s`}},n.id))})};var _A=Symbol.for("react.lazy"),Gl=ic[" use ".trim().toString()];function WA(e){return typeof e=="object"&&e!==null&&"then"in e}function Rb(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===_A&&"_payload"in e&&WA(e._payload)}function Db(e){const t=VA(e),n=m.forwardRef((r,o)=>{let{children:i,...s}=r;Rb(i)&&typeof Gl=="function"&&(i=Gl(i._payload));const l=m.Children.toArray(i),c=l.find(zA);if(c){const u=c.props.children,d=l.map(h=>h===c?m.Children.count(u)>1?m.Children.only(null):m.isValidElement(u)?u.props.children:null:h);return a.jsx(t,{...s,ref:o,children:m.isValidElement(u)?m.cloneElement(u,void 0,d):null})}return a.jsx(t,{...s,ref:o,children:i})});return n.displayName=`${e}.Slot`,n}var Lb=Db("Slot");function VA(e){const t=m.forwardRef((n,r)=>{let{children:o,...i}=n;if(Rb(o)&&typeof Gl=="function"&&(o=Gl(o._payload)),m.isValidElement(o)){const s=UA(o),l=$A(i,o.props);return o.type!==m.Fragment&&(l.ref=r?ua(r,s):s),m.cloneElement(o,l)}return m.Children.count(o)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var HA=Symbol("radix.slottable");function zA(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===HA}function $A(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...l)=>{const c=i(...l);return o(...l),c}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function UA(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const YA=Ef("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",hero:"bg-primary text-primary-foreground font-bold tracking-wide hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 active:scale-95 pulse-glow",glass:"glass-card text-foreground hover:bg-muted/20 border-primary/20 hover:border-primary/40",glow:"bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-12 rounded-xl px-8 text-base",xl:"h-14 rounded-xl px-10 text-lg",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),He=m.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>{const s=r?Lb:"button";return a.jsx(s,{className:le(YA({variant:t,size:n,className:e})),ref:i,...o})});He.displayName="Button";var GA=m.createContext(void 0);function Ob(e){const t=m.useContext(GA);return e||t||"ltr"}function Fb(e){const t=m.useRef({value:e,previous:e});return m.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var Ao="NavigationMenu",[Gf,Bb,qA]=Sc(Ao),[ih,KA,QA]=Sc(Ao),[qf]=Li(Ao,[qA,QA]),[JA,en]=qf(Ao),[XA,ZA]=qf(Ao),_b=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:i,delayDuration:s=200,skipDelayDuration:l=300,orientation:c="horizontal",dir:u,...d}=e,[h,p]=m.useState(null),f=Fe(t,R=>p(R)),w=Ob(u),x=m.useRef(0),b=m.useRef(0),g=m.useRef(0),[v,y]=m.useState(!0),[S,k]=Cc({prop:r,onChange:R=>{const M=R!=="",B=l>0;M?(window.clearTimeout(g.current),B&&y(!1)):(window.clearTimeout(g.current),g.current=window.setTimeout(()=>y(!0),l)),o==null||o(R)},defaultProp:i??"",caller:Ao}),P=m.useCallback(()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>k(""),150)},[k]),j=m.useCallback(R=>{window.clearTimeout(b.current),k(R)},[k]),N=m.useCallback(R=>{S===R?window.clearTimeout(b.current):x.current=window.setTimeout(()=>{window.clearTimeout(b.current),k(R)},s)},[S,k,s]);return m.useEffect(()=>()=>{window.clearTimeout(x.current),window.clearTimeout(b.current),window.clearTimeout(g.current)},[]),a.jsx(Wb,{scope:n,isRootMenu:!0,value:S,dir:w,orientation:c,rootNavigationMenu:h,onTriggerEnter:R=>{window.clearTimeout(x.current),v?N(R):j(R)},onTriggerLeave:()=>{window.clearTimeout(x.current),P()},onContentEnter:()=>window.clearTimeout(b.current),onContentLeave:P,onItemSelect:R=>{k(M=>M===R?"":R)},onItemDismiss:()=>k(""),children:a.jsx(me.nav,{"aria-label":"Main","data-orientation":c,dir:w,...d,ref:f})})});_b.displayName=Ao;var sh="NavigationMenuSub",eI=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:i,orientation:s="horizontal",...l}=e,c=en(sh,n),[u,d]=Cc({prop:r,onChange:o,defaultProp:i??"",caller:sh});return a.jsx(Wb,{scope:n,isRootMenu:!1,value:u,dir:c.dir,orientation:s,rootNavigationMenu:c.rootNavigationMenu,onTriggerEnter:h=>d(h),onItemSelect:h=>d(h),onItemDismiss:()=>d(""),children:a.jsx(me.div,{"data-orientation":s,...l,ref:t})})});eI.displayName=sh;var Wb=e=>{const{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:o,orientation:i,children:s,value:l,onItemSelect:c,onItemDismiss:u,onTriggerEnter:d,onTriggerLeave:h,onContentEnter:p,onContentLeave:f}=e,[w,x]=m.useState(null),[b,g]=m.useState(new Map),[v,y]=m.useState(null);return a.jsx(JA,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:l,previousValue:Fb(l),baseId:M0(),dir:o,orientation:i,viewport:w,onViewportChange:x,indicatorTrack:v,onIndicatorTrackChange:y,onTriggerEnter:mt(d),onTriggerLeave:mt(h),onContentEnter:mt(p),onContentLeave:mt(f),onItemSelect:mt(c),onItemDismiss:mt(u),onViewportContentChange:m.useCallback((S,k)=>{g(P=>(P.set(S,k),new Map(P)))},[]),onViewportContentRemove:m.useCallback(S=>{g(k=>k.has(S)?(k.delete(S),new Map(k)):k)},[]),children:a.jsx(Gf.Provider,{scope:t,children:a.jsx(XA,{scope:t,items:b,children:s})})})},Vb="NavigationMenuList",Hb=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=en(Vb,n),i=a.jsx(me.ul,{"data-orientation":o.orientation,...r,ref:t});return a.jsx(me.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:a.jsx(Gf.Slot,{scope:n,children:o.isRootMenu?a.jsx(Xb,{asChild:!0,children:i}):i})})});Hb.displayName=Vb;var zb="NavigationMenuItem",[tI,$b]=qf(zb),Ub=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,...o}=e,i=M0(),s=r||i||"LEGACY_REACT_AUTO_VALUE",l=m.useRef(null),c=m.useRef(null),u=m.useRef(null),d=m.useRef(()=>{}),h=m.useRef(!1),p=m.useCallback((w="start")=>{if(l.current){d.current();const x=lh(l.current);x.length&&Jf(w==="start"?x:x.reverse())}},[]),f=m.useCallback(()=>{if(l.current){const w=lh(l.current);w.length&&(d.current=lI(w))}},[]);return a.jsx(tI,{scope:n,value:s,triggerRef:c,contentRef:l,focusProxyRef:u,wasEscapeCloseRef:h,onEntryKeyDown:p,onFocusProxyEnter:p,onRootContentClose:f,onContentFocusOutside:f,children:a.jsx(me.li,{...o,ref:t})})});Ub.displayName=zb;var ah="NavigationMenuTrigger",Yb=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,disabled:r,...o}=e,i=en(ah,e.__scopeNavigationMenu),s=$b(ah,e.__scopeNavigationMenu),l=m.useRef(null),c=Fe(l,s.triggerRef,t),u=e1(i.baseId,s.value),d=t1(i.baseId,s.value),h=m.useRef(!1),p=m.useRef(!1),f=s.value===i.value;return a.jsxs(a.Fragment,{children:[a.jsx(Gf.ItemSlot,{scope:n,value:s.value,children:a.jsx(Zb,{asChild:!0,children:a.jsx(me.button,{id:u,disabled:r,"data-disabled":r?"":void 0,"data-state":Xf(f),"aria-expanded":f,"aria-controls":d,...o,ref:c,onPointerEnter:ie(e.onPointerEnter,()=>{p.current=!1,s.wasEscapeCloseRef.current=!1}),onPointerMove:ie(e.onPointerMove,ql(()=>{r||p.current||s.wasEscapeCloseRef.current||h.current||(i.onTriggerEnter(s.value),h.current=!0)})),onPointerLeave:ie(e.onPointerLeave,ql(()=>{r||(i.onTriggerLeave(),h.current=!1)})),onClick:ie(e.onClick,()=>{i.onItemSelect(s.value),p.current=f}),onKeyDown:ie(e.onKeyDown,w=>{const b={horizontal:"ArrowDown",vertical:i.dir==="rtl"?"ArrowLeft":"ArrowRight"}[i.orientation];f&&w.key===b&&(s.onEntryKeyDown(),w.preventDefault())})})})}),f&&a.jsxs(a.Fragment,{children:[a.jsx(Hw,{"aria-hidden":!0,tabIndex:0,ref:s.focusProxyRef,onFocus:w=>{const x=s.contentRef.current,b=w.relatedTarget,g=b===l.current,v=x==null?void 0:x.contains(b);(g||!v)&&s.onFocusProxyEnter(g?"start":"end")}}),i.viewport&&a.jsx("span",{"aria-owns":d})]})]})});Yb.displayName=ah;var nI="NavigationMenuLink",$g="navigationMenu.linkSelect",Gb=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,active:r,onSelect:o,...i}=e;return a.jsx(Zb,{asChild:!0,children:a.jsx(me.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...i,ref:t,onClick:ie(e.onClick,s=>{const l=s.target,c=new CustomEvent($g,{bubbles:!0,cancelable:!0});if(l.addEventListener($g,u=>o==null?void 0:o(u),{once:!0}),_l(l,c),!c.defaultPrevented&&!s.metaKey){const u=new CustomEvent(dl,{bubbles:!0,cancelable:!0});_l(l,u)}},{checkForDefaultPrevented:!1})})})});Gb.displayName=nI;var Kf="NavigationMenuIndicator",qb=m.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=en(Kf,e.__scopeNavigationMenu),i=!!o.value;return o.indicatorTrack?Tf.createPortal(a.jsx(Eo,{present:n||i,children:a.jsx(rI,{...r,ref:t})}),o.indicatorTrack):null});qb.displayName=Kf;var rI=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=en(Kf,n),i=Bb(n),[s,l]=m.useState(null),[c,u]=m.useState(null),d=o.orientation==="horizontal",h=!!o.value;m.useEffect(()=>{var x;const w=(x=i().find(b=>b.value===o.value))==null?void 0:x.ref.current;w&&l(w)},[i,o.value]);const p=()=>{s&&u({size:d?s.offsetWidth:s.offsetHeight,offset:d?s.offsetLeft:s.offsetTop})};return ch(s,p),ch(o.indicatorTrack,p),c?a.jsx(me.div,{"aria-hidden":!0,"data-state":h?"visible":"hidden","data-orientation":o.orientation,...r,ref:t,style:{position:"absolute",...d?{left:0,width:c.size+"px",transform:`translateX(${c.offset}px)`}:{top:0,height:c.size+"px",transform:`translateY(${c.offset}px)`},...r.style}}):null}),Ni="NavigationMenuContent",Kb=m.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=en(Ni,e.__scopeNavigationMenu),i=$b(Ni,e.__scopeNavigationMenu),s=Fe(i.contentRef,t),l=i.value===o.value,c={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return o.viewport?a.jsx(oI,{forceMount:n,...c,ref:s}):a.jsx(Eo,{present:n||l,children:a.jsx(Qb,{"data-state":Xf(l),...c,ref:s,onPointerEnter:ie(e.onPointerEnter,o.onContentEnter),onPointerLeave:ie(e.onPointerLeave,ql(o.onContentLeave)),style:{pointerEvents:!l&&o.isRootMenu?"none":void 0,...c.style}})})});Kb.displayName=Ni;var oI=m.forwardRef((e,t)=>{const n=en(Ni,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:o}=n;return Zt(()=>{r(e.value,{ref:t,...e})},[e,t,r]),Zt(()=>()=>o(e.value),[e.value,o]),null}),dl="navigationMenu.rootContentDismiss",Qb=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,triggerRef:o,focusProxyRef:i,wasEscapeCloseRef:s,onRootContentClose:l,onContentFocusOutside:c,...u}=e,d=en(Ni,n),h=m.useRef(null),p=Fe(h,t),f=e1(d.baseId,r),w=t1(d.baseId,r),x=Bb(n),b=m.useRef(null),{onItemDismiss:g}=d;m.useEffect(()=>{const y=h.current;if(d.isRootMenu&&y){const S=()=>{var k;g(),l(),y.contains(document.activeElement)&&((k=o.current)==null||k.focus())};return y.addEventListener(dl,S),()=>y.removeEventListener(dl,S)}},[d.isRootMenu,e.value,o,g,l]);const v=m.useMemo(()=>{const S=x().map(M=>M.value);d.dir==="rtl"&&S.reverse();const k=S.indexOf(d.value),P=S.indexOf(d.previousValue),j=r===d.value,N=P===S.indexOf(r);if(!j&&!N)return b.current;const R=(()=>{if(k!==P){if(j&&P!==-1)return k>P?"from-end":"from-start";if(N&&k!==-1)return k>P?"to-start":"to-end"}return null})();return b.current=R,R},[d.previousValue,d.value,d.dir,x,r]);return a.jsx(Xb,{asChild:!0,children:a.jsx(kc,{id:w,"aria-labelledby":f,"data-motion":v,"data-orientation":d.orientation,...u,ref:p,disableOutsidePointerEvents:!1,onDismiss:()=>{var S;const y=new Event(dl,{bubbles:!0,cancelable:!0});(S=h.current)==null||S.dispatchEvent(y)},onFocusOutside:ie(e.onFocusOutside,y=>{var k;c();const S=y.target;(k=d.rootNavigationMenu)!=null&&k.contains(S)&&y.preventDefault()}),onPointerDownOutside:ie(e.onPointerDownOutside,y=>{var j;const S=y.target,k=x().some(N=>{var R;return(R=N.ref.current)==null?void 0:R.contains(S)}),P=d.isRootMenu&&((j=d.viewport)==null?void 0:j.contains(S));(k||P||!d.isRootMenu)&&y.preventDefault()}),onKeyDown:ie(e.onKeyDown,y=>{var P;const S=y.altKey||y.ctrlKey||y.metaKey;if(y.key==="Tab"&&!S){const j=lh(y.currentTarget),N=document.activeElement,R=j.findIndex(V=>V===N),B=y.shiftKey?j.slice(0,R).reverse():j.slice(R+1,j.length);Jf(B)?y.preventDefault():(P=i.current)==null||P.focus()}}),onEscapeKeyDown:ie(e.onEscapeKeyDown,y=>{s.current=!0})})})}),Qf="NavigationMenuViewport",Jb=m.forwardRef((e,t)=>{const{forceMount:n,...r}=e,i=!!en(Qf,e.__scopeNavigationMenu).value;return a.jsx(Eo,{present:n||i,children:a.jsx(iI,{...r,ref:t})})});Jb.displayName=Qf;var iI=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,children:r,...o}=e,i=en(Qf,n),s=Fe(t,i.onViewportChange),l=ZA(Ni,e.__scopeNavigationMenu),[c,u]=m.useState(null),[d,h]=m.useState(null),p=c?(c==null?void 0:c.width)+"px":void 0,f=c?(c==null?void 0:c.height)+"px":void 0,w=!!i.value,x=w?i.value:i.previousValue;return ch(d,()=>{d&&u({width:d.offsetWidth,height:d.offsetHeight})}),a.jsx(me.div,{"data-state":Xf(w),"data-orientation":i.orientation,...o,ref:s,style:{pointerEvents:!w&&i.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":p,"--radix-navigation-menu-viewport-height":f,...o.style},onPointerEnter:ie(e.onPointerEnter,i.onContentEnter),onPointerLeave:ie(e.onPointerLeave,ql(i.onContentLeave)),children:Array.from(l.items).map(([g,{ref:v,forceMount:y,...S}])=>{const k=x===g;return a.jsx(Eo,{present:y||k,children:a.jsx(Qb,{...S,ref:ua(v,P=>{k&&P&&h(P)})})},g)})})}),sI="FocusGroup",Xb=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=en(sI,n);return a.jsx(ih.Provider,{scope:n,children:a.jsx(ih.Slot,{scope:n,children:a.jsx(me.div,{dir:o.dir,...r,ref:t})})})}),Ug=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],aI="FocusGroupItem",Zb=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=KA(n),i=en(aI,n);return a.jsx(ih.ItemSlot,{scope:n,children:a.jsx(me.button,{...r,ref:t,onKeyDown:ie(e.onKeyDown,s=>{if(["Home","End",...Ug].includes(s.key)){let c=o().map(h=>h.ref.current);if([i.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(s.key)&&c.reverse(),Ug.includes(s.key)){const h=c.indexOf(s.currentTarget);c=c.slice(h+1)}setTimeout(()=>Jf(c)),s.preventDefault()}})})})});function lh(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Jf(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}function lI(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const n=t.dataset.tabindex;t.setAttribute("tabindex",n)})}}function ch(e,t){const n=mt(t);Zt(()=>{let r=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,n])}function Xf(e){return e?"open":"closed"}function e1(e,t){return`${e}-trigger-${t}`}function t1(e,t){return`${e}-content-${t}`}function ql(e){return t=>t.pointerType==="mouse"?e(t):void 0}var n1=_b,r1=Hb,cI=Ub,o1=Yb,uI=Gb,i1=qb,s1=Kb,a1=Jb;const l1=m.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(n1,{ref:r,className:le("relative z-10 flex max-w-max flex-1 items-center justify-center",e),...n,children:[t,a.jsx(h1,{})]}));l1.displayName=n1.displayName;const c1=m.forwardRef(({className:e,...t},n)=>a.jsx(r1,{ref:n,className:le("group flex flex-1 list-none items-center justify-center space-x-1",e),...t}));c1.displayName=r1.displayName;const dI=cI,hI=Ef("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),u1=m.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(o1,{ref:r,className:le(hI(),"group",e),...n,children:[t," ",a.jsx(p0,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"})]}));u1.displayName=o1.displayName;const d1=m.forwardRef(({className:e,...t},n)=>a.jsx(s1,{ref:n,className:le("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",e),...t}));d1.displayName=s1.displayName;const fI=uI,h1=m.forwardRef(({className:e,...t},n)=>a.jsx("div",{className:le("absolute left-0 top-full flex justify-center"),children:a.jsx(a1,{className:le("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",e),ref:n,...t})}));h1.displayName=a1.displayName;const pI=m.forwardRef(({className:e,...t},n)=>a.jsx(i1,{ref:n,className:le("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",e),...t,children:a.jsx("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})}));pI.displayName=i1.displayName;const Yg=[{name:"Home",path:"/"},{name:"SPICE App",path:"/spice-app"},{name:"About Us",path:"/about"},{name:"Meet the Team",path:"/team"},{name:"Contact Us",path:"/contact"}],Gg=[{name:"For the Interested/Curious",path:"/guide/newcomers",description:"New to the lifestyle? Start here"},{name:"How To",path:"/guide/how-to",description:"Step-by-step guides & tips"},{name:"Community & Lifestyles",path:"/guide/community",description:"ENM, BDSM, Swingers, Poly & more"},{name:"Glossary",path:"/guide/glossary",description:"Learn the terminology"},{name:"BDSM Quiz",path:"/quiz",description:"Discover your preferences"},{name:"Safety",path:"/guide/safety",description:"Online & dating safety"},{name:"Self Care Resources",path:"/guide/self-care",description:"Mental health & support"}],ht=()=>{const[e,t]=m.useState(!1),[n,r]=m.useState(!1),o=qr();return a.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50",children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs("div",{className:"flex items-center justify-between h-16",children:[a.jsx(pe,{to:"/",className:"flex items-center gap-2",children:a.jsx("span",{className:"text-2xl font-bold text-gradient",children:"SPICE"})}),a.jsxs("nav",{className:"hidden lg:flex items-center gap-1",children:[Yg.map(i=>a.jsx(pe,{to:i.path,className:le("px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",o.pathname===i.path?"bg-primary/20 text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted/50"),children:i.name},i.path)),a.jsx(l1,{children:a.jsx(c1,{children:a.jsxs(dI,{children:[a.jsx(u1,{className:le("px-4 py-2 rounded-lg text-sm font-medium bg-transparent",o.pathname.startsWith("/guide")||o.pathname==="/quiz"?"bg-primary/20 text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted/50"),children:"SPICE Guide"}),a.jsx(d1,{children:a.jsx("ul",{className:"grid w-[400px] gap-1 p-4 bg-popover",children:Gg.map(i=>a.jsx("li",{children:a.jsx(fI,{asChild:!0,children:a.jsxs(pe,{to:i.path,className:le("block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",o.pathname===i.path&&"bg-accent/50"),children:[a.jsx("div",{className:"text-sm font-medium leading-none mb-1",children:i.name}),a.jsx("p",{className:"line-clamp-1 text-xs leading-snug text-muted-foreground",children:i.description})]})})},i.path))})})]})})}),a.jsxs(pe,{to:"/download",className:le("flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",o.pathname==="/download"?"bg-primary text-primary-foreground":"bg-primary/20 text-primary hover:bg-primary/30"),children:[a.jsx(rg,{className:"w-4 h-4"}),"Download SPICE"]})]}),a.jsx(He,{variant:"ghost",size:"icon",className:"lg:hidden",onClick:()=>t(!e),children:e?a.jsx(jc,{className:"h-5 w-5"}):a.jsx(vj,{className:"h-5 w-5"})})]}),e&&a.jsx("nav",{className:"lg:hidden py-4 border-t border-border/50 max-h-[calc(100vh-4rem)] overflow-y-auto",children:a.jsxs("div",{className:"flex flex-col gap-2",children:[Yg.map(i=>a.jsx(pe,{to:i.path,onClick:()=>t(!1),className:le("px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",o.pathname===i.path?"bg-primary/20 text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted/50"),children:i.name},i.path)),a.jsxs("div",{className:"border-t border-border/50 pt-2 mt-2",children:[a.jsxs("button",{onClick:()=>r(!n),className:le("w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",o.pathname.startsWith("/guide")||o.pathname==="/quiz"?"bg-primary/20 text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted/50"),children:["SPICE Guide",a.jsx(p0,{className:le("w-4 h-4 transition-transform",n&&"rotate-180")})]}),n&&a.jsx("div",{className:"pl-4 mt-2 space-y-1",children:Gg.map(i=>a.jsx(pe,{to:i.path,onClick:()=>t(!1),className:le("block px-4 py-2 rounded-lg text-sm transition-all duration-300",o.pathname===i.path?"bg-primary/20 text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted/50"),children:i.name},i.path))})]}),a.jsxs(pe,{to:"/download",onClick:()=>t(!1),className:"flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium bg-primary/20 text-primary hover:bg-primary/30 transition-all duration-300 mt-2",children:[a.jsx(rg,{className:"w-4 h-4"}),"Download SPICE"]})]})})]})})},xo=m.forwardRef(({className:e,type:t,...n},r)=>a.jsx("input",{type:t,className:le("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));xo.displayName="Input";const qg="spice_launch_target_date",mI=()=>{const e=localStorage.getItem(qg);if(e)return parseInt(e,10);const t=new Date;t.setDate(t.getDate()+30);const n=t.getTime();return localStorage.setItem(qg,n.toString()),n},gI=()=>{const[e,t]=m.useState({days:0,hours:0,minutes:0,seconds:0});m.useEffect(()=>{const r=mI(),o=()=>{const s=new Date().getTime(),l=r-s;l>0?t({days:Math.floor(l/(1e3*60*60*24)),hours:Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),minutes:Math.floor(l%(1e3*60*60)/(1e3*60)),seconds:Math.floor(l%(1e3*60)/1e3)}):t({days:0,hours:0,minutes:0,seconds:0})};o();const i=setInterval(o,1e3);return()=>clearInterval(i)},[]);const n=({value:r,label:o})=>a.jsxs("div",{className:"flex flex-col items-center",children:[a.jsxs("div",{className:"relative glass-card rounded-xl p-4 min-w-[70px] md:min-w-[90px] overflow-hidden group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),a.jsx("span",{className:"text-3xl md:text-5xl font-bold text-gradient font-space relative z-10 block text-center",children:r.toString().padStart(2,"0")}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent shimmer"})]}),a.jsx("span",{className:"text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-widest font-medium",children:o})]});return a.jsxs("div",{className:"glass-card rounded-2xl p-6 md:p-8 border-gradient",children:[a.jsxs("div",{className:"text-center mb-6",children:[a.jsx("h3",{className:"text-primary font-semibold text-lg md:text-xl tracking-wide",children:"Launch Countdown"}),a.jsx("p",{className:"text-muted-foreground text-sm mt-1",children:"Get ready for something amazing"})]}),a.jsxs("div",{className:"flex justify-center gap-3 md:gap-6",children:[a.jsx(n,{value:e.days,label:"Days"}),a.jsx(n,{value:e.hours,label:"Hours"}),a.jsx(n,{value:e.minutes,label:"Minutes"}),a.jsx(n,{value:e.seconds,label:"Seconds"})]})]})};var Zf={};(function e(t,n,r,o){var i=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),s=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=function(){if(!t.OffscreenCanvas)return!1;try{var T=new OffscreenCanvas(1,1),C=T.getContext("2d");C.fillRect(0,0,1,1);var D=T.transferToImageBitmap();C.createPattern(D,"no-repeat")}catch{return!1}return!0}();function c(){}function u(T){var C=n.exports.Promise,D=C!==void 0?C:t.Promise;return typeof D=="function"?new D(T):(T(c,c),null)}var d=function(T,C){return{transform:function(D){if(T)return D;if(C.has(D))return C.get(D);var F=new OffscreenCanvas(D.width,D.height),W=F.getContext("2d");return W.drawImage(D,0,0),C.set(D,F),F},clear:function(){C.clear()}}}(l,new Map),h=function(){var T=Math.floor(16.666666666666668),C,D,F={},W=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(q){var U=Math.random();return F[U]=requestAnimationFrame(function H(Z){W===Z||W+T-1<Z?(W=Z,delete F[U],q()):F[U]=requestAnimationFrame(H)}),U},D=function(q){F[q]&&cancelAnimationFrame(F[q])}):(C=function(q){return setTimeout(q,T)},D=function(q){return clearTimeout(q)}),{frame:C,cancel:D}}(),p=function(){var T,C,D={};function F(W){function q(U,H){W.postMessage({options:U||{},callback:H})}W.init=function(H){var Z=H.transferControlToOffscreen();W.postMessage({canvas:Z},[Z])},W.fire=function(H,Z,re){if(C)return q(H,null),C;var ue=Math.random().toString(36).slice(2);return C=u(function(se){function ne(ve){ve.data.callback===ue&&(delete D[ue],W.removeEventListener("message",ne),C=null,d.clear(),re(),se())}W.addEventListener("message",ne),q(H,ue),D[ue]=ne.bind(null,{data:{callback:ue}})}),C},W.reset=function(){W.postMessage({reset:!0});for(var H in D)D[H](),delete D[H]}}return function(){if(T)return T;if(!r&&i){var W=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{T=new Worker(URL.createObjectURL(new Blob([W])))}catch(q){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",q),null}F(T)}return T}}(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(T,C){return C?C(T):T}function x(T){return T!=null}function b(T,C,D){return w(T&&x(T[C])?T[C]:f[C],D)}function g(T){return T<0?0:Math.floor(T)}function v(T,C){return Math.floor(Math.random()*(C-T))+T}function y(T){return parseInt(T,16)}function S(T){return T.map(k)}function k(T){var C=String(T).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:y(C.substring(0,2)),g:y(C.substring(2,4)),b:y(C.substring(4,6))}}function P(T){var C=b(T,"origin",Object);return C.x=b(C,"x",Number),C.y=b(C,"y",Number),C}function j(T){T.width=document.documentElement.clientWidth,T.height=document.documentElement.clientHeight}function N(T){var C=T.getBoundingClientRect();T.width=C.width,T.height=C.height}function R(T){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=T,C}function M(T,C,D,F,W,q,U,H,Z){T.save(),T.translate(C,D),T.rotate(q),T.scale(F,W),T.arc(0,0,1,U,H,Z),T.restore()}function B(T){var C=T.angle*(Math.PI/180),D=T.spread*(Math.PI/180);return{x:T.x,y:T.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:T.startVelocity*.5+Math.random()*T.startVelocity,angle2D:-C+(.5*D-Math.random()*D),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:T.color,shape:T.shape,tick:0,totalTicks:T.ticks,decay:T.decay,drift:T.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:T.gravity*3,ovalScalar:.6,scalar:T.scalar,flat:T.flat}}function V(T,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var D=C.tick++/C.totalTicks,F=C.x+C.random*C.tiltCos,W=C.y+C.random*C.tiltSin,q=C.wobbleX+C.random*C.tiltCos,U=C.wobbleY+C.random*C.tiltSin;if(T.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-D)+")",T.beginPath(),s&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))T.fill(z(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(q-F)*.1,Math.abs(U-W)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var H=Math.PI/10*C.wobble,Z=Math.abs(q-F)*.1,re=Math.abs(U-W)*.1,ue=C.shape.bitmap.width*C.scalar,se=C.shape.bitmap.height*C.scalar,ne=new DOMMatrix([Math.cos(H)*Z,Math.sin(H)*Z,-Math.sin(H)*re,Math.cos(H)*re,C.x,C.y]);ne.multiplySelf(new DOMMatrix(C.shape.matrix));var ve=T.createPattern(d.transform(C.shape.bitmap),"no-repeat");ve.setTransform(ne),T.globalAlpha=1-D,T.fillStyle=ve,T.fillRect(C.x-ue/2,C.y-se/2,ue,se),T.globalAlpha=1}else if(C.shape==="circle")T.ellipse?T.ellipse(C.x,C.y,Math.abs(q-F)*C.ovalScalar,Math.abs(U-W)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):M(T,C.x,C.y,Math.abs(q-F)*C.ovalScalar,Math.abs(U-W)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var ae=Math.PI/2*3,he=4*C.scalar,We=8*C.scalar,Pe=C.x,Re=C.y,$e=5,Ke=Math.PI/$e;$e--;)Pe=C.x+Math.cos(ae)*We,Re=C.y+Math.sin(ae)*We,T.lineTo(Pe,Re),ae+=Ke,Pe=C.x+Math.cos(ae)*he,Re=C.y+Math.sin(ae)*he,T.lineTo(Pe,Re),ae+=Ke;else T.moveTo(Math.floor(C.x),Math.floor(C.y)),T.lineTo(Math.floor(C.wobbleX),Math.floor(W)),T.lineTo(Math.floor(q),Math.floor(U)),T.lineTo(Math.floor(F),Math.floor(C.wobbleY));return T.closePath(),T.fill(),C.tick<C.totalTicks}function $(T,C,D,F,W){var q=C.slice(),U=T.getContext("2d"),H,Z,re=u(function(ue){function se(){H=Z=null,U.clearRect(0,0,F.width,F.height),d.clear(),W(),ue()}function ne(){r&&!(F.width===o.width&&F.height===o.height)&&(F.width=T.width=o.width,F.height=T.height=o.height),!F.width&&!F.height&&(D(T),F.width=T.width,F.height=T.height),U.clearRect(0,0,F.width,F.height),q=q.filter(function(ve){return V(U,ve)}),q.length?H=h.frame(ne):se()}H=h.frame(ne),Z=se});return{addFettis:function(ue){return q=q.concat(ue),re},canvas:T,promise:re,reset:function(){H&&h.cancel(H),Z&&Z()}}}function _(T,C){var D=!T,F=!!b(C||{},"resize"),W=!1,q=b(C,"disableForReducedMotion",Boolean),U=i&&!!b(C||{},"useWorker"),H=U?p():null,Z=D?j:N,re=T&&H?!!T.__confetti_initialized:!1,ue=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,se;function ne(ae,he,We){for(var Pe=b(ae,"particleCount",g),Re=b(ae,"angle",Number),$e=b(ae,"spread",Number),Ke=b(ae,"startVelocity",Number),rt=b(ae,"decay",Number),rr=b(ae,"gravity",Number),Mt=b(ae,"drift",Number),Qr=b(ae,"colors",S),zi=b(ae,"ticks",Number),Ue=b(ae,"shapes"),Ye=b(ae,"scalar"),Ro=!!b(ae,"flat"),Jr=P(ae),wn=Pe,or=[],Xr=T.width*Jr.x,ir=T.height*Jr.y;wn--;)or.push(B({x:Xr,y:ir,angle:Re,spread:$e,startVelocity:Ke,color:Qr[wn%Qr.length],shape:Ue[v(0,Ue.length)],ticks:zi,decay:rt,gravity:rr,drift:Mt,scalar:Ye,flat:Ro}));return se?se.addFettis(or):(se=$(T,or,Z,he,We),se.promise)}function ve(ae){var he=q||b(ae,"disableForReducedMotion",Boolean),We=b(ae,"zIndex",Number);if(he&&ue)return u(function(Ke){Ke()});D&&se?T=se.canvas:D&&!T&&(T=R(We),document.body.appendChild(T)),F&&!re&&Z(T);var Pe={width:T.width,height:T.height};H&&!re&&H.init(T),re=!0,H&&(T.__confetti_initialized=!0);function Re(){if(H){var Ke={getBoundingClientRect:function(){if(!D)return T.getBoundingClientRect()}};Z(Ke),H.postMessage({resize:{width:Ke.width,height:Ke.height}});return}Pe.width=Pe.height=null}function $e(){se=null,F&&(W=!1,t.removeEventListener("resize",Re)),D&&T&&(document.body.contains(T)&&document.body.removeChild(T),T=null,re=!1)}return F&&!W&&(W=!0,t.addEventListener("resize",Re,!1)),H?H.fire(ae,Pe,$e):ne(ae,Pe,$e)}return ve.reset=function(){H&&H.reset(),se&&se.reset()},ve}var X;function G(){return X||(X=_(null,{useWorker:!0,resize:!0})),X}function z(T,C,D,F,W,q,U){var H=new Path2D(T),Z=new Path2D;Z.addPath(H,new DOMMatrix(C));var re=new Path2D;return re.addPath(Z,new DOMMatrix([Math.cos(U)*W,Math.sin(U)*W,-Math.sin(U)*q,Math.cos(U)*q,D,F])),re}function E(T){if(!s)throw new Error("path confetti are not supported in this browser");var C,D;typeof T=="string"?C=T:(C=T.path,D=T.matrix);var F=new Path2D(C),W=document.createElement("canvas"),q=W.getContext("2d");if(!D){for(var U=1e3,H=U,Z=U,re=0,ue=0,se,ne,ve=0;ve<U;ve+=2)for(var ae=0;ae<U;ae+=2)q.isPointInPath(F,ve,ae,"nonzero")&&(H=Math.min(H,ve),Z=Math.min(Z,ae),re=Math.max(re,ve),ue=Math.max(ue,ae));se=re-H,ne=ue-Z;var he=10,We=Math.min(he/se,he/ne);D=[We,0,0,We,-Math.round(se/2+H)*We,-Math.round(ne/2+Z)*We]}return{type:"path",path:C,matrix:D}}function I(T){var C,D=1,F="#000000",W='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof T=="string"?C=T:(C=T.text,D="scalar"in T?T.scalar:D,W="fontFamily"in T?T.fontFamily:W,F="color"in T?T.color:F);var q=10*D,U=""+q+"px "+W,H=new OffscreenCanvas(q,q),Z=H.getContext("2d");Z.font=U;var re=Z.measureText(C),ue=Math.ceil(re.actualBoundingBoxRight+re.actualBoundingBoxLeft),se=Math.ceil(re.actualBoundingBoxAscent+re.actualBoundingBoxDescent),ne=2,ve=re.actualBoundingBoxLeft+ne,ae=re.actualBoundingBoxAscent+ne;ue+=ne+ne,se+=ne+ne,H=new OffscreenCanvas(ue,se),Z=H.getContext("2d"),Z.font=U,Z.fillStyle=F,Z.fillText(C,ve,ae);var he=1/D;return{type:"bitmap",bitmap:H.transferToImageBitmap(),matrix:[he,0,0,he,-ue*he/2,-se*he/2]}}n.exports=function(){return G().apply(this,arguments)},n.exports.reset=function(){G().reset()},n.exports.create=_,n.exports.shapeFromPath=E,n.exports.shapeFromText=I})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Zf,!1);const f1=Zf.exports;Zf.exports.create;var yI={};const vI=()=>{f1({particleCount:100,spread:70,origin:{y:.6},colors:["#FF4D6D","#FF758F","#FFB3C1","#C9184A","#FF8FA3"]})},xI=()=>{const[e,t]=m.useState(""),[n,r]=m.useState(!1),[o,i]=m.useState(!1),s=async l=>{if(l.preventDefault(),!e||!e.includes("@")){jn.error("Please enter a valid email address");return}r(!0);try{const c=yI.REACT_APP_BACKEND_URL||"http://localhost:8001",u=await fetch(`${c}/api/waitlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,source:"hero"})});if(!u.ok)throw new Error("Failed to join waitlist");const d=await u.json();d!=null&&d.alreadyExists?(jn.info("You're already part of the Spice family! 💕 Sit tight — we'll let you know as soon as we launch.",{duration:5e3}),t("")):(vI(),i(!0),jn.success("Welcome to the Spice family! 🎉 Check your inbox for a confirmation email and get ready for something special.",{duration:5e3}),t(""),setTimeout(()=>i(!1),3e3))}catch(c){console.error("Error joining waitlist:",c),((c==null?void 0:c.message)||"").includes("already on the waitlist")?jn.info("You're already part of the Spice family! 💕 Sit tight — we'll let you know as soon as we launch.",{duration:5e3}):jn.error("Something went wrong. Please try again.")}finally{r(!1)}};return a.jsxs("section",{className:"relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12 overflow-hidden",children:[a.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"}),a.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-purple/10 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}}),a.jsx("div",{className:"absolute top-20 right-10 md:right-20 float",children:a.jsx(jt,{className:"w-8 h-8 text-primary/40"})}),a.jsx("div",{className:"absolute bottom-40 left-10 md:left-20 float-delayed",children:a.jsx(Qt,{className:"w-6 h-6 text-primary/30"})}),a.jsxs("div",{className:"relative z-10 max-w-5xl mx-auto text-center space-y-8",children:[a.jsx("div",{className:"fade-in-up mb-12",children:a.jsx(gI,{})}),a.jsxs("div",{className:"fade-in-up-delayed",style:{animationDelay:"0.2s"},children:[a.jsx("h1",{className:"text-7xl md:text-9xl font-black text-gradient glow-text tracking-tight font-outfit",children:"SPICE"}),a.jsx("p",{className:"sr-only",children:"SPICE - The Premier Dating App for Swingers, BDSM & ENM Community"}),a.jsx("div",{className:"h-1.5 w-40 mx-auto mt-4 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"})]}),a.jsxs("div",{className:"space-y-4 fade-in-up-delayed",style:{animationDelay:"0.4s"},children:[a.jsx("h2",{className:"text-2xl md:text-4xl font-semibold text-foreground",children:"Premium Dating for Adventurous Adults"}),a.jsx("p",{className:"text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed",children:"Join thousands of adventurous singles and couples exploring swingers, BDSM, and ENM connections in a safe, premium lifestyle community."})]}),a.jsx("div",{className:"pt-8 space-y-6 fade-in-up-delayed",style:{animationDelay:"0.6s"},children:a.jsxs("div",{className:`glass-card rounded-2xl p-8 max-w-md mx-auto border-gradient transition-all duration-500 ${o?"ring-2 ring-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-[1.02]":""}`,children:[a.jsx("h3",{className:`text-xl font-semibold mb-2 transition-colors duration-300 ${o?"text-green-500":"text-primary"}`,children:o?"🎉 You're In!":"Join the Waitlist"}),a.jsx("p",{className:"text-muted-foreground text-sm mb-6",children:o?"Welcome to the Spice family!":"Get 2 months free VIP access when we launch"}),a.jsxs("form",{onSubmit:s,className:"space-y-4",children:[a.jsx(xo,{type:"email",placeholder:"Enter your email",value:e,onChange:l=>t(l.target.value),className:"bg-background/50 border-border/50 focus:border-primary h-12 text-center",disabled:n}),a.jsxs(He,{type:"submit",variant:"hero",size:"xl",className:"w-full",disabled:n,children:[n?a.jsx(Mf,{className:"w-5 h-5 animate-spin"}):a.jsx(jt,{className:"w-5 h-5"}),n?"Joining...":"Join Waitlist"]})]})]})}),a.jsx("div",{className:"pt-12 fade-in-up-delayed",style:{animationDelay:"0.8s"},children:a.jsxs("div",{className:"flex flex-col items-center gap-2 animate-bounce",children:[a.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-widest",children:"Discover More"}),a.jsx(nj,{className:"w-5 h-5 text-primary"})]})})]})]})},wI=()=>a.jsx("section",{className:"relative py-24 px-4",children:a.jsxs("div",{className:"max-w-6xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16 space-y-4",children:[a.jsxs("h2",{className:"text-3xl md:text-5xl font-bold",children:["What is ",a.jsx("span",{className:"text-gradient",children:"SPICE"}),"? How is it different?"]}),a.jsx("div",{className:"h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"})]}),a.jsxs("div",{className:"glass-card rounded-3xl p-8 md:p-12 border-gradient feature-card",children:[a.jsxs("div",{className:"flex items-start gap-4 mb-8",children:[a.jsx("div",{className:"p-3 rounded-xl bg-primary/20 text-primary shrink-0",children:a.jsx(Vd,{className:"w-8 h-8"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-primary mb-4",children:"SPICE: The dating app that actually gets it..."}),a.jsx("p",{className:"text-muted-foreground leading-relaxed text-lg",children:"because it was built by people who LIVE it."})]})]}),a.jsxs("div",{className:"space-y-6 text-foreground/90 leading-relaxed",children:[a.jsxs("p",{className:"text-lg",children:["Tired of vanilla apps run by clueless corporates? SPICE isn't that. We're the app created",a.jsx("span",{className:"text-primary font-semibold",children:" BY the community, FOR the community"})," — built by people who actually understand the lifestyle, from the curious newcomers to the seasoned veterans who live it every day."]}),a.jsxs("p",{className:"text-lg",children:[`Whether you're a couple looking to add some heat to the bedroom, a single searching for that perfect play partner who shares your exact interests, or a seasoned explorer seeking real connections (not endless "hey" messages from tourists) —`,a.jsx("span",{className:"text-gradient font-semibold",children:" SPICE turns up the heat."})]}),a.jsx("div",{className:"glass-card rounded-xl p-6 mt-8 border-primary/20",children:a.jsxs("p",{className:"text-xl font-semibold text-center",children:["This isn't just another dating app. This is ",a.jsx("span",{className:"text-primary",children:"YOUR playground"}),", built by people who've been in the playroom."]})})]})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-6 mt-12",children:[{icon:_r,label:"Community Built",desc:"By people who understand"},{icon:ha,label:"100% Verified",desc:"Real people, real connections"},{icon:Vd,label:"200+ Desires",desc:"Find your exact match"}].map((e,t)=>a.jsxs("div",{className:"glass-card rounded-2xl p-6 text-center feature-card border-gradient",style:{animationDelay:`${t*.1}s`},children:[a.jsx("div",{className:"w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center",children:a.jsx(e.icon,{className:"w-7 h-7 text-primary"})}),a.jsx("h4",{className:"font-semibold text-lg mb-1",children:e.label}),a.jsx("p",{className:"text-muted-foreground text-sm",children:e.desc})]},t))})]})}),bI=["Swingers","Polyamorous","Kink & BDSM","Ethical non-monogamy","Hotwifing / cuckolding","Solo explorers","Queer, trans, non-binary","Ace & demi","All dynamics & roles"],SI=()=>a.jsxs("section",{className:"py-24 px-4 relative overflow-hidden",children:[a.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"}),a.jsxs("div",{className:"max-w-5xl mx-auto relative z-10",children:[a.jsxs("div",{className:"text-center mb-12 space-y-4",children:[a.jsxs("h2",{className:"text-3xl md:text-5xl font-bold",children:["One App. ",a.jsx("span",{className:"text-gradient",children:"Every Flavor"})," of Desire."]}),a.jsxs("p",{className:"text-xl text-muted-foreground",children:["SPICE isn't just for one crowd. It's for ",a.jsx("span",{className:"text-primary font-semibold",children:"every"})," crowd."]})]}),a.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:bI.map((e,t)=>a.jsxs("div",{className:"glass-card rounded-full px-6 py-3 flex items-center gap-3 feature-card border-gradient group cursor-default",style:{animationDelay:`${t*.05}s`},children:[a.jsx("div",{className:"w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors",children:a.jsx(Ti,{className:"w-3 h-3 text-primary"})}),a.jsx("span",{className:"font-medium",children:e})]},e))}),a.jsxs("div",{className:"glass-card rounded-3xl p-8 md:p-10 text-center border-gradient max-w-3xl mx-auto",children:[a.jsxs("p",{className:"text-2xl md:text-3xl font-bold mb-4",children:[a.jsx("span",{className:"text-gradient",children:"200+ desires."})," Every dynamic. Every body. Every identity."]}),a.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"Mark what you love, what you're curious about, and what's a hard no — the app listens. SPICE doesn't judge. It just helps you find the people who are into the exact same thing, verifies they're real, and makes sure they actually show up."})]})]})]}),rs=[{icon:oj,title:"AI-Powered Matching",description:"Advanced algorithms find your perfect match based on desires, compatibility, and chemistry.",highlights:[{title:"Smart Compatibility Scoring",desc:"Our AI analyzes 200+ data points to calculate compatibility scores and surface the best matches for you."},{title:"Hidden Gems Discovery",desc:"AI surfaces highly compatible profiles you might have missed, revealing unexpected perfect matches."},{title:"Adaptive Learning",desc:"The system learns from your interactions to continuously improve match quality over time."}]},{icon:ha,title:"Verified & Safe Community",description:"Every member is thoroughly verified. No bots, no spam, no fake profiles.",highlights:[{title:"Rigorous Verification",desc:"Photo ID verification and profile review ensure every member is authentic and genuine."},{title:"24/7 Moderation",desc:"AI and human moderators work around the clock to maintain a safe, respectful environment."},{title:"Zero Tolerance Policy",desc:"Advanced detection systems immediately remove bad actors, ensuring your safety and privacy."}]},{icon:f0,title:"Events & Community",description:"Connect online and offline through curated events and community features.",highlights:[{title:"Exclusive Local Events",desc:"Discover lifestyle parties, mixers, and social gatherings happening in your area."},{title:"Community Forums",desc:"Share experiences, ask questions, and engage with verified members in moderated spaces."},{title:"Host Your Own Events",desc:"VIP members can create and host their own events for the community."}]}],kI=[{icon:_r,title:"Couples Dashboard",desc:"Optional read-only dashboard for couples who like to share transparency. View each other's profile activities, matches, and interactions in a secure space designed for trust and openness."},{icon:h0,title:"Built-in BDSM Quiz",desc:"Comprehensive quiz that automatically posts to your profile (if you choose) and refines your matches based on compatibility."},{icon:x0,title:"Learning Journeys",desc:"Curious but don't know where to start? Explore guided learning paths for different interests to better understand yourself."},{icon:Af,title:"Consent & Verification",desc:"Blockchain-powered consent agreements and verified meet validations with user feedback."}],CI=()=>{const[e,t]=m.useState(0),n=()=>t(i=>(i+1)%rs.length),r=()=>t(i=>(i-1+rs.length)%rs.length),o=rs[e];return a.jsx("section",{className:"py-24 px-4",children:a.jsxs("div",{className:"max-w-6xl mx-auto",children:[a.jsx("div",{className:"mb-24",children:a.jsxs("div",{className:"glass-card rounded-3xl p-8 md:p-12 border-gradient relative overflow-hidden",children:[a.jsx("div",{className:"absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"}),a.jsxs("div",{className:"relative z-10",children:[a.jsxs("div",{className:"flex items-center justify-between mb-8",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:"p-4 rounded-2xl bg-primary/20 text-primary",children:a.jsx(o.icon,{className:"w-8 h-8"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-2xl md:text-3xl font-bold",children:o.title}),a.jsx("p",{className:"text-muted-foreground mt-1",children:o.description})]})]}),a.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[a.jsx(He,{variant:"glass",size:"icon",onClick:r,children:a.jsx(ng,{className:"w-5 h-5"})}),a.jsx(He,{variant:"glass",size:"icon",onClick:n,children:a.jsx(Wd,{className:"w-5 h-5"})})]})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:o.highlights.map((i,s)=>a.jsxs("div",{className:"glass-card rounded-2xl p-6 feature-card border-primary/10 hover:border-primary/30",children:[a.jsx("h4",{className:"font-semibold text-lg text-primary mb-3",children:i.title}),a.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:i.desc})]},s))}),a.jsx("div",{className:"flex justify-center gap-2 mt-8",children:rs.map((i,s)=>a.jsx("button",{onClick:()=>t(s),className:`w-2.5 h-2.5 rounded-full transition-all duration-300 ${s===e?"bg-primary w-8":"bg-muted-foreground/30 hover:bg-muted-foreground/50"}`},s))}),a.jsxs("div",{className:"flex md:hidden items-center justify-center gap-4 mt-6",children:[a.jsx(He,{variant:"glass",size:"icon",onClick:r,children:a.jsx(ng,{className:"w-5 h-5"})}),a.jsx(He,{variant:"glass",size:"icon",onClick:n,children:a.jsx(Wd,{className:"w-5 h-5"})})]})]})]})}),a.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:kI.map((i,s)=>a.jsx("div",{className:"glass-card rounded-2xl p-6 feature-card border-gradient group",children:a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors shrink-0",children:a.jsx(i.icon,{className:"w-6 h-6"})}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold text-lg mb-2",children:i.title}),a.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:i.desc})]})]})},s))})]})})},TI=["Create solo or couple profiles","Browse & discover profiles","20-50 daily likes","Unlimited messaging with matches","Add desires & interests (200+ options)","Basic AI compatibility matching","Human verification & badges","Group chats & community access"],PI=[{text:"Unlimited likes",highlight:"no daily limit"},{text:"See who liked you",highlight:"instant visibility"},{text:"Hyper-Match™ AI Engine",highlight:"full compatibility scoring (0-100)"},{text:"Hidden Gems",highlight:"AI surfaces highly compatible matches daily"},{text:"Advanced filters",highlight:"exact preferences, dynamics & aesthetics"},{text:"Incognito Mode",highlight:"browse privately"},{text:"Private Photos & Videos",highlight:"grant/revoke access"},{text:"Travel Mode",highlight:"connect anywhere"},{text:"10× profile boost",highlight:"increased visibility"},{text:"Events access",highlight:"discover, RSVP, host"},{text:"Couple profiles",highlight:"link & activity logs"}],jI=()=>a.jsx("section",{className:"py-24 px-4",children:a.jsxs("div",{className:"max-w-5xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16 space-y-4",children:[a.jsxs("h2",{className:"text-3xl md:text-5xl font-bold",children:[a.jsx("span",{className:"text-gradient",children:"Membership"})," Options"]}),a.jsx("p",{className:"text-xl text-muted-foreground",children:"Choose the experience that's right for you"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"glass-card rounded-3xl p-8 border-gradient feature-card",children:[a.jsxs("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-2xl font-bold mb-2",children:"Free Membership"}),a.jsx("div",{className:"flex items-baseline gap-1",children:a.jsx("span",{className:"text-5xl font-black text-gradient",children:"$0"})})]}),a.jsx("ul",{className:"space-y-4 mb-8",children:TI.map((e,t)=>a.jsxs("li",{className:"flex items-start gap-3",children:[a.jsx("div",{className:"w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5",children:a.jsx(Ti,{className:"w-3 h-3 text-primary"})}),a.jsx("span",{className:"text-foreground/90",children:e})]},t))}),a.jsx(He,{variant:"glass",size:"lg",className:"w-full",children:"Get Started Free"})]}),a.jsxs("div",{className:"relative glass-card rounded-3xl p-8 border-2 border-primary/50 feature-card glow-pink",children:[a.jsx("div",{className:"absolute -top-4 left-1/2 -translate-x-1/2",children:a.jsxs("div",{className:"bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2",children:[a.jsx(cj,{className:"w-4 h-4"}),"MOST POPULAR"]})}),a.jsxs("div",{className:"mb-6 pt-2",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-2 flex items-center gap-2",children:[a.jsx(jt,{className:"w-6 h-6 text-primary"}),"VIP Membership"]}),a.jsxs("div",{className:"flex items-baseline gap-2",children:[a.jsx("span",{className:"text-5xl font-black text-gradient",children:"$16.99"}),a.jsx("span",{className:"text-muted-foreground",children:"/month"})]}),a.jsxs("p",{className:"text-sm text-muted-foreground mt-2",children:["or $149.99/year ",a.jsx("span",{className:"text-primary font-semibold",children:"(save 26%)"})]})]}),a.jsx("p",{className:"text-sm text-primary font-medium mb-4",children:"Everything in Free, plus:"}),a.jsx("ul",{className:"space-y-3 mb-8",children:PI.map((e,t)=>a.jsxs("li",{className:"flex items-start gap-3",children:[a.jsx("div",{className:"w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center shrink-0 mt-0.5",children:a.jsx(Ti,{className:"w-3 h-3 text-primary"})}),a.jsxs("span",{className:"text-foreground/90",children:[a.jsx("span",{className:"font-semibold",children:e.text}),a.jsxs("span",{className:"text-muted-foreground",children:[" - ",e.highlight]})]})]},t))}),a.jsxs(He,{variant:"hero",size:"lg",className:"w-full",children:[a.jsx(jt,{className:"w-5 h-5"}),"Get VIP Access"]})]})]})]})}),Nt=()=>a.jsx("footer",{className:"py-16 px-4 border-t border-border/50",children:a.jsxs("div",{className:"max-w-5xl mx-auto",children:[a.jsxs("div",{className:"glass-card rounded-2xl p-8 mb-12 border-gradient text-center",children:[a.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Get the SPICE App"}),a.jsx("p",{className:"text-muted-foreground mb-6 max-w-md mx-auto",children:"Download SPICE on your mobile device and connect with the community on the go."}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[a.jsxs("a",{href:"#",className:"flex items-center gap-3 px-5 py-3 rounded-xl glass-card border border-border/50 hover:bg-primary/10 transition-colors w-full sm:w-auto",children:[a.jsx(d0,{className:"w-7 h-7 text-foreground"}),a.jsxs("div",{className:"text-left",children:[a.jsx("div",{className:"text-xs text-muted-foreground",children:"Download on the"}),a.jsx("div",{className:"text-sm font-semibold",children:"App Store"})]})]}),a.jsxs("a",{href:"#",className:"flex items-center gap-3 px-5 py-3 rounded-xl glass-card border border-border/50 hover:bg-primary/10 transition-colors w-full sm:w-auto",children:[a.jsx(y0,{className:"w-7 h-7 text-foreground"}),a.jsxs("div",{className:"text-left",children:[a.jsx("div",{className:"text-xs text-muted-foreground",children:"Get it on"}),a.jsx("div",{className:"text-sm font-semibold",children:"Google Play"})]})]})]})]}),a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 mb-12",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold mb-4",children:"Product"}),a.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[a.jsx("li",{children:a.jsx(pe,{to:"/spice-app",className:"hover:text-foreground transition-colors",children:"SPICE App"})}),a.jsx("li",{children:a.jsx(pe,{to:"/download",className:"hover:text-foreground transition-colors",children:"Download"})}),a.jsx("li",{children:a.jsx(pe,{to:"/quiz",className:"hover:text-foreground transition-colors",children:"BDSM Quiz"})})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold mb-4",children:"SPICE Guide"}),a.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[a.jsx("li",{children:a.jsx(pe,{to:"/guide/newcomers",className:"hover:text-foreground transition-colors",children:"For Newcomers"})}),a.jsx("li",{children:a.jsx(pe,{to:"/guide/how-to",className:"hover:text-foreground transition-colors",children:"How To"})}),a.jsx("li",{children:a.jsx(pe,{to:"/guide/glossary",className:"hover:text-foreground transition-colors",children:"Glossary"})})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold mb-4",children:"Community"}),a.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[a.jsx("li",{children:a.jsx(pe,{to:"/guide/community",className:"hover:text-foreground transition-colors",children:"Lifestyles"})}),a.jsx("li",{children:a.jsx(pe,{to:"/guide/safety",className:"hover:text-foreground transition-colors",children:"Safety"})}),a.jsx("li",{children:a.jsx(pe,{to:"/guide/self-care",className:"hover:text-foreground transition-colors",children:"Self Care"})})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold mb-4",children:"Company"}),a.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[a.jsx("li",{children:a.jsx(pe,{to:"/about",className:"hover:text-foreground transition-colors",children:"About Us"})}),a.jsx("li",{children:a.jsx(pe,{to:"/team",className:"hover:text-foreground transition-colors",children:"Meet the Team"})}),a.jsx("li",{children:a.jsx(pe,{to:"/contact",className:"hover:text-foreground transition-colors",children:"Contact"})})]})]})]}),a.jsxs("div",{className:"text-center space-y-4",children:[a.jsx("div",{className:"flex items-center justify-center gap-3",children:a.jsx("span",{className:"text-3xl font-black text-gradient",children:"SPICE"})}),a.jsx("p",{className:"text-muted-foreground text-sm",children:"Premium lifestyle community for 18+ verified members only."}),a.jsxs("p",{className:"text-muted-foreground/60 text-xs",children:["© ",new Date().getFullYear()," SPICE. All rights reserved."]})]})]})}),NI=()=>a.jsxs("div",{className:"relative min-h-screen",children:[a.jsx(wt,{children:a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/"})}),a.jsx(ma,{}),a.jsx(ht,{}),a.jsxs("main",{className:"relative z-10 pt-16",children:[a.jsx(xI,{}),a.jsx(wI,{}),a.jsx(SI,{}),a.jsx(CI,{}),a.jsx(jI,{}),a.jsx(Nt,{})]})]}),ep=m.createContext({});function tp(e){const t=m.useRef(null);return t.current===null&&(t.current=e()),t.current}const Fc=m.createContext(null),np=m.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class EI extends m.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function MI({children:e,isPresent:t}){const n=m.useId(),r=m.useRef(null),o=m.useRef({width:0,height:0,top:0,left:0}),{nonce:i}=m.useContext(np);return m.useInsertionEffect(()=>{const{width:s,height:l,top:c,left:u}=o.current;if(t||!r.current||!s||!l)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return i&&(d.nonce=i),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),a.jsx(EI,{isPresent:t,childRef:r,sizeRef:o,children:m.cloneElement(e,{ref:r})})}const AI=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:i,mode:s})=>{const l=tp(II),c=m.useId(),u=m.useCallback(h=>{l.set(h,!0);for(const p of l.values())if(!p)return;r&&r()},[l,r]),d=m.useMemo(()=>({id:c,initial:t,isPresent:n,custom:o,onExitComplete:u,register:h=>(l.set(h,!1),()=>l.delete(h))}),i?[Math.random(),u]:[n,u]);return m.useMemo(()=>{l.forEach((h,p)=>l.set(p,!1))},[n]),m.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),s==="popLayout"&&(e=a.jsx(MI,{isPresent:n,children:e})),a.jsx(Fc.Provider,{value:d,children:e})};function II(){return new Map}function p1(e=!0){const t=m.useContext(Fc);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:o}=t,i=m.useId();m.useEffect(()=>{e&&o(i)},[e]);const s=m.useCallback(()=>e&&r&&r(i),[i,r,e]);return!n&&r?[!1,s]:[!0]}const $a=e=>e.key||"";function Kg(e){const t=[];return m.Children.forEach(e,n=>{m.isValidElement(n)&&t.push(n)}),t}const rp=typeof window<"u",m1=rp?m.useLayoutEffect:m.useEffect,RI=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:i="sync",propagate:s=!1})=>{const[l,c]=p1(s),u=m.useMemo(()=>Kg(e),[e]),d=s&&!l?[]:u.map($a),h=m.useRef(!0),p=m.useRef(u),f=tp(()=>new Map),[w,x]=m.useState(u),[b,g]=m.useState(u);m1(()=>{h.current=!1,p.current=u;for(let S=0;S<b.length;S++){const k=$a(b[S]);d.includes(k)?f.delete(k):f.get(k)!==!0&&f.set(k,!1)}},[b,d.length,d.join("-")]);const v=[];if(u!==w){let S=[...u];for(let k=0;k<b.length;k++){const P=b[k],j=$a(P);d.includes(j)||(S.splice(k,0,P),v.push(P))}i==="wait"&&v.length&&(S=v),g(Kg(S)),x(u);return}const{forceRender:y}=m.useContext(ep);return a.jsx(a.Fragment,{children:b.map(S=>{const k=$a(S),P=s&&!l?!1:u===b||d.includes(k),j=()=>{if(f.has(k))f.set(k,!0);else return;let N=!0;f.forEach(R=>{R||(N=!1)}),N&&(y==null||y(),g(p.current),s&&(c==null||c()),r&&r())};return a.jsx(AI,{isPresent:P,initial:!h.current||n?void 0:!1,custom:P?void 0:t,presenceAffectsLayout:o,mode:i,onExitComplete:P?void 0:j,children:S},k)})})},Ot=e=>e;let g1=Ot;function op(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ei=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Gn=e=>e*1e3,qn=e=>e/1e3,DI={useManualTiming:!1};function LI(e){let t=new Set,n=new Set,r=!1,o=!1;const i=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function l(u){i.has(u)&&(c.schedule(u),e()),u(s)}const c={schedule:(u,d=!1,h=!1)=>{const f=h&&r?t:n;return d&&i.add(u),f.has(u)||f.add(u),u},cancel:u=>{n.delete(u),i.delete(u)},process:u=>{if(s=u,r){o=!0;return}r=!0,[t,n]=[n,t],t.forEach(l),t.clear(),r=!1,o&&(o=!1,c.process(u))}};return c}const Ua=["read","resolveKeyframes","update","preRender","render","postRender"],OI=40;function y1(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=()=>n=!0,s=Ua.reduce((g,v)=>(g[v]=LI(i),g),{}),{read:l,resolveKeyframes:c,update:u,preRender:d,render:h,postRender:p}=s,f=()=>{const g=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(g-o.timestamp,OI),1),o.timestamp=g,o.isProcessing=!0,l.process(o),c.process(o),u.process(o),d.process(o),h.process(o),p.process(o),o.isProcessing=!1,n&&t&&(r=!1,e(f))},w=()=>{n=!0,r=!0,o.isProcessing||e(f)};return{schedule:Ua.reduce((g,v)=>{const y=s[v];return g[v]=(S,k=!1,P=!1)=>(n||w(),y.schedule(S,k,P)),g},{}),cancel:g=>{for(let v=0;v<Ua.length;v++)s[Ua[v]].cancel(g)},state:o,steps:s}}const{schedule:Te,cancel:Hr,state:et,steps:Eu}=y1(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ot,!0),v1=m.createContext({strict:!1}),Qg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Mi={};for(const e in Qg)Mi[e]={isEnabled:t=>Qg[e].some(n=>!!t[n])};function FI(e){for(const t in e)Mi[t]={...Mi[t],...e[t]}}const BI=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Kl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||BI.has(e)}let x1=e=>!Kl(e);function _I(e){e&&(x1=t=>t.startsWith("on")?!Kl(t):e(t))}try{_I(require("@emotion/is-prop-valid").default)}catch{}function WI(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(x1(o)||n===!0&&Kl(o)||!t&&!Kl(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function VI(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,o)=>o==="create"?e:(t.has(o)||t.set(o,e(o)),t.get(o))})}const Bc=m.createContext({});function Ks(e){return typeof e=="string"||Array.isArray(e)}function _c(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const ip=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],sp=["initial",...ip];function Wc(e){return _c(e.animate)||sp.some(t=>Ks(e[t]))}function w1(e){return!!(Wc(e)||e.variants)}function HI(e,t){if(Wc(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ks(n)?n:void 0,animate:Ks(r)?r:void 0}}return e.inherit!==!1?t:{}}function zI(e){const{initial:t,animate:n}=HI(e,m.useContext(Bc));return m.useMemo(()=>({initial:t,animate:n}),[Jg(t),Jg(n)])}function Jg(e){return Array.isArray(e)?e.join(" "):e}const $I=Symbol.for("motionComponentSymbol");function Ko(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function UI(e,t,n){return m.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Ko(n)&&(n.current=r))},[t])}const ap=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),YI="framerAppearId",b1="data-"+ap(YI),{schedule:lp}=y1(queueMicrotask,!1),S1=m.createContext({});function GI(e,t,n,r,o){var i,s;const{visualElement:l}=m.useContext(Bc),c=m.useContext(v1),u=m.useContext(Fc),d=m.useContext(np).reducedMotion,h=m.useRef(null);r=r||c.renderer,!h.current&&r&&(h.current=r(e,{visualState:t,parent:l,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=h.current,f=m.useContext(S1);p&&!p.projection&&o&&(p.type==="html"||p.type==="svg")&&qI(h.current,n,o,f);const w=m.useRef(!1);m.useInsertionEffect(()=>{p&&w.current&&p.update(n,u)});const x=n[b1],b=m.useRef(!!x&&!(!((i=window.MotionHandoffIsComplete)===null||i===void 0)&&i.call(window,x))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,x)));return m1(()=>{p&&(w.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),lp.render(p.render),b.current&&p.animationState&&p.animationState.animateChanges())}),m.useEffect(()=>{p&&(!b.current&&p.animationState&&p.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,x)}),b.current=!1))}),p}function qI(e,t,n,r){const{layoutId:o,layout:i,drag:s,dragConstraints:l,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:k1(e.parent)),e.projection.setOptions({layoutId:o,layout:i,alwaysMeasureLayout:!!s||l&&Ko(l),visualElement:e,animationType:typeof i=="string"?i:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function k1(e){if(e)return e.options.allowProjection!==!1?e.projection:k1(e.parent)}function KI({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){var i,s;e&&FI(e);function l(u,d){let h;const p={...m.useContext(np),...u,layoutId:QI(u)},{isStatic:f}=p,w=zI(u),x=r(u,f);if(!f&&rp){JI();const b=XI(p);h=b.MeasureLayout,w.visualElement=GI(o,x,p,t,b.ProjectionNode)}return a.jsxs(Bc.Provider,{value:w,children:[h&&w.visualElement?a.jsx(h,{visualElement:w.visualElement,...p}):null,n(o,u,UI(x,w.visualElement,d),x,f,w.visualElement)]})}l.displayName=`motion.${typeof o=="string"?o:`create(${(s=(i=o.displayName)!==null&&i!==void 0?i:o.name)!==null&&s!==void 0?s:""})`}`;const c=m.forwardRef(l);return c[$I]=o,c}function QI({layoutId:e}){const t=m.useContext(ep).id;return t&&e!==void 0?t+"-"+e:e}function JI(e,t){m.useContext(v1).strict}function XI(e){const{drag:t,layout:n}=Mi;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const ZI=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function cp(e){return typeof e!="string"||e.includes("-")?!1:!!(ZI.indexOf(e)>-1||/[A-Z]/u.test(e))}function Xg(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function up(e,t,n,r){if(typeof t=="function"){const[o,i]=Xg(r);t=t(n!==void 0?n:e.custom,o,i)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,i]=Xg(r);t=t(n!==void 0?n:e.custom,o,i)}return t}const uh=e=>Array.isArray(e),eR=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),tR=e=>uh(e)?e[e.length-1]||0:e,ut=e=>!!(e&&e.getVelocity);function hl(e){const t=ut(e)?e.get():e;return eR(t)?t.toValue():t}function nR({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,o,i){const s={latestValues:rR(r,o,i,e),renderState:t()};return n&&(s.onMount=l=>n({props:r,current:l,...s}),s.onUpdate=l=>n(l)),s}const C1=e=>(t,n)=>{const r=m.useContext(Bc),o=m.useContext(Fc),i=()=>nR(e,t,r,o);return n?i():tp(i)};function rR(e,t,n,r){const o={},i=r(e,{});for(const p in i)o[p]=hl(i[p]);let{initial:s,animate:l}=e;const c=Wc(e),u=w1(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const h=d?l:s;if(h&&typeof h!="boolean"&&!_c(h)){const p=Array.isArray(h)?h:[h];for(let f=0;f<p.length;f++){const w=up(e,p[f]);if(w){const{transitionEnd:x,transition:b,...g}=w;for(const v in g){let y=g[v];if(Array.isArray(y)){const S=d?y.length-1:0;y=y[S]}y!==null&&(o[v]=y)}for(const v in x)o[v]=x[v]}}}return o}const Wi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Io=new Set(Wi),T1=e=>t=>typeof t=="string"&&t.startsWith(e),P1=T1("--"),oR=T1("var(--"),dp=e=>oR(e)?iR.test(e.split("/*")[0].trim()):!1,iR=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,j1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,tr=(e,t,n)=>n>t?t:n<e?e:n,Vi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Qs={...Vi,transform:e=>tr(0,1,e)},Ya={...Vi,default:1},ga=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),fr=ga("deg"),In=ga("%"),J=ga("px"),sR=ga("vh"),aR=ga("vw"),Zg={...In,parse:e=>In.parse(e)/100,transform:e=>In.transform(e*100)},lR={borderWidth:J,borderTopWidth:J,borderRightWidth:J,borderBottomWidth:J,borderLeftWidth:J,borderRadius:J,radius:J,borderTopLeftRadius:J,borderTopRightRadius:J,borderBottomRightRadius:J,borderBottomLeftRadius:J,width:J,maxWidth:J,height:J,maxHeight:J,top:J,right:J,bottom:J,left:J,padding:J,paddingTop:J,paddingRight:J,paddingBottom:J,paddingLeft:J,margin:J,marginTop:J,marginRight:J,marginBottom:J,marginLeft:J,backgroundPositionX:J,backgroundPositionY:J},cR={rotate:fr,rotateX:fr,rotateY:fr,rotateZ:fr,scale:Ya,scaleX:Ya,scaleY:Ya,scaleZ:Ya,skew:fr,skewX:fr,skewY:fr,distance:J,translateX:J,translateY:J,translateZ:J,x:J,y:J,z:J,perspective:J,transformPerspective:J,opacity:Qs,originX:Zg,originY:Zg,originZ:J},ey={...Vi,transform:Math.round},hp={...lR,...cR,zIndex:ey,size:J,fillOpacity:Qs,strokeOpacity:Qs,numOctaves:ey},uR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},dR=Wi.length;function hR(e,t,n){let r="",o=!0;for(let i=0;i<dR;i++){const s=Wi[i],l=e[s];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(s.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=j1(l,hp[s]);if(!c){o=!1;const d=uR[s]||s;r+=`${d}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,o?"":r):o&&(r="none"),r}function fp(e,t,n){const{style:r,vars:o,transformOrigin:i}=e;let s=!1,l=!1;for(const c in t){const u=t[c];if(Io.has(c)){s=!0;continue}else if(P1(c)){o[c]=u;continue}else{const d=j1(u,hp[c]);c.startsWith("origin")?(l=!0,i[c]=d):r[c]=d}}if(t.transform||(s||n?r.transform=hR(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=i;r.transformOrigin=`${c} ${u} ${d}`}}const fR={offset:"stroke-dashoffset",array:"stroke-dasharray"},pR={offset:"strokeDashoffset",array:"strokeDasharray"};function mR(e,t,n=1,r=0,o=!0){e.pathLength=1;const i=o?fR:pR;e[i.offset]=J.transform(-r);const s=J.transform(t),l=J.transform(n);e[i.array]=`${s} ${l}`}function ty(e,t,n){return typeof e=="string"?e:J.transform(t+n*e)}function gR(e,t,n){const r=ty(t,e.x,e.width),o=ty(n,e.y,e.height);return`${r} ${o}`}function pp(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:i,pathLength:s,pathSpacing:l=1,pathOffset:c=0,...u},d,h){if(fp(e,u,h),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:f,dimensions:w}=e;p.transform&&(w&&(f.transform=p.transform),delete p.transform),w&&(o!==void 0||i!==void 0||f.transform)&&(f.transformOrigin=gR(w,o!==void 0?o:.5,i!==void 0?i:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),s!==void 0&&mR(p,s,l,c,!1)}const mp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),N1=()=>({...mp(),attrs:{}}),gp=e=>typeof e=="string"&&e.toLowerCase()==="svg";function E1(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const M1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function A1(e,t,n,r){E1(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(M1.has(o)?o:ap(o),t.attrs[o])}const Ql={};function yR(e){Object.assign(Ql,e)}function I1(e,{layout:t,layoutId:n}){return Io.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ql[e]||e==="opacity")}function yp(e,t,n){var r;const{style:o}=e,i={};for(const s in o)(ut(o[s])||t.style&&ut(t.style[s])||I1(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(i[s]=o[s]);return i}function R1(e,t,n){const r=yp(e,t,n);for(const o in e)if(ut(e[o])||ut(t[o])){const i=Wi.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[i]=e[o]}return r}function vR(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const ny=["x","y","width","height","cx","cy","r"],xR={useVisualState:C1({scrapeMotionValuesFromProps:R1,createRenderState:N1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:o})=>{if(!n)return;let i=!!e.drag;if(!i){for(const l in o)if(Io.has(l)){i=!0;break}}if(!i)return;let s=!t;if(t)for(let l=0;l<ny.length;l++){const c=ny[l];e[c]!==t[c]&&(s=!0)}s&&Te.read(()=>{vR(n,r),Te.render(()=>{pp(r,o,gp(n.tagName),e.transformTemplate),A1(n,r)})})}})},wR={useVisualState:C1({scrapeMotionValuesFromProps:yp,createRenderState:mp})};function D1(e,t,n){for(const r in t)!ut(t[r])&&!I1(r,n)&&(e[r]=t[r])}function bR({transformTemplate:e},t){return m.useMemo(()=>{const n=mp();return fp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function SR(e,t){const n=e.style||{},r={};return D1(r,n,e),Object.assign(r,bR(e,t)),r}function kR(e,t){const n={},r=SR(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function CR(e,t,n,r){const o=m.useMemo(()=>{const i=N1();return pp(i,t,gp(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};D1(i,e.style,e),o.style={...i,...o.style}}return o}function TR(e=!1){return(n,r,o,{latestValues:i},s)=>{const c=(cp(n)?CR:kR)(r,i,s,n),u=WI(r,typeof n=="string",e),d=n!==m.Fragment?{...u,...c,ref:o}:{},{children:h}=r,p=m.useMemo(()=>ut(h)?h.get():h,[h]);return m.createElement(n,{...d,children:p})}}function PR(e,t){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const s={...cp(r)?xR:wR,preloadedFeatures:e,useRender:TR(o),createVisualElement:t,Component:r};return KI(s)}}function L1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Vc(e,t,n){const r=e.getProps();return up(r,t,n!==void 0?n:r.custom,e)}const jR=op(()=>window.ScrollTimeline!==void 0);class NR{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(o=>{if(jR()&&o.attachTimeline)return o.attachTimeline(t);if(typeof n=="function")return n(o)});return()=>{r.forEach((o,i)=>{o&&o(),this.animations[i].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class ER extends NR{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function vp(e,t){return e?e[t]||e.default||e:void 0}const dh=2e4;function O1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<dh;)t+=n,r=e.next(t);return t>=dh?1/0:t}function xp(e){return typeof e=="function"}function ry(e,t){e.timeline=t,e.onfinish=null}const wp=e=>Array.isArray(e)&&typeof e[0]=="number",MR={linearEasing:void 0};function AR(e,t){const n=op(e);return()=>{var r;return(r=MR[t])!==null&&r!==void 0?r:n()}}const Jl=AR(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),F1=(e,t,n=10)=>{let r="";const o=Math.max(Math.round(t/n),2);for(let i=0;i<o;i++)r+=e(Ei(0,o-1,i))+", ";return`linear(${r.substring(0,r.length-2)})`};function B1(e){return!!(typeof e=="function"&&Jl()||!e||typeof e=="string"&&(e in hh||Jl())||wp(e)||Array.isArray(e)&&e.every(B1))}const cs=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,hh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:cs([0,.65,.55,1]),circOut:cs([.55,0,1,.45]),backIn:cs([.31,.01,.66,-.59]),backOut:cs([.33,1.53,.69,.99])};function _1(e,t){if(e)return typeof e=="function"&&Jl()?F1(e,t):wp(e)?cs(e):Array.isArray(e)?e.map(n=>_1(n,t)||hh.easeOut):hh[e]}const an={x:!1,y:!1};function W1(){return an.x||an.y}function IR(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let o=document;const i=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}function V1(e,t){const n=IR(e),r=new AbortController,o={passive:!0,...t,signal:r.signal};return[n,o,()=>r.abort()]}function oy(e){return t=>{t.pointerType==="touch"||W1()||e(t)}}function RR(e,t,n={}){const[r,o,i]=V1(e,n),s=oy(l=>{const{target:c}=l,u=t(l);if(typeof u!="function"||!c)return;const d=oy(h=>{u(h),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,o)});return r.forEach(l=>{l.addEventListener("pointerenter",s,o)}),i}const H1=(e,t)=>t?e===t?!0:H1(e,t.parentElement):!1,bp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,DR=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function LR(e){return DR.has(e.tagName)||e.tabIndex!==-1}const us=new WeakSet;function iy(e){return t=>{t.key==="Enter"&&e(t)}}function Mu(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const OR=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=iy(()=>{if(us.has(n))return;Mu(n,"down");const o=iy(()=>{Mu(n,"up")}),i=()=>Mu(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",i,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function sy(e){return bp(e)&&!W1()}function FR(e,t,n={}){const[r,o,i]=V1(e,n),s=l=>{const c=l.currentTarget;if(!sy(l)||us.has(c))return;us.add(c);const u=t(l),d=(f,w)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",p),!(!sy(f)||!us.has(c))&&(us.delete(c),typeof u=="function"&&u(f,{success:w}))},h=f=>{d(f,n.useGlobalTarget||H1(c,f.target))},p=f=>{d(f,!1)};window.addEventListener("pointerup",h,o),window.addEventListener("pointercancel",p,o)};return r.forEach(l=>{!LR(l)&&l.getAttribute("tabindex")===null&&(l.tabIndex=0),(n.useGlobalTarget?window:l).addEventListener("pointerdown",s,o),l.addEventListener("focus",u=>OR(u,o),o)}),i}function BR(e){return e==="x"||e==="y"?an[e]?null:(an[e]=!0,()=>{an[e]=!1}):an.x||an.y?null:(an.x=an.y=!0,()=>{an.x=an.y=!1})}const z1=new Set(["width","height","top","left","right","bottom",...Wi]);let fl;function _R(){fl=void 0}const Rn={now:()=>(fl===void 0&&Rn.set(et.isProcessing||DI.useManualTiming?et.timestamp:performance.now()),fl),set:e=>{fl=e,queueMicrotask(_R)}};function Sp(e,t){e.indexOf(t)===-1&&e.push(t)}function kp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Cp{constructor(){this.subscriptions=[]}add(t){return Sp(this.subscriptions,t),()=>kp(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let i=0;i<o;i++){const s=this.subscriptions[i];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function $1(e,t){return t?e*(1e3/t):0}const ay=30,WR=e=>!isNaN(parseFloat(e));class VR{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const i=Rn.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Rn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=WR(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Cp);const r=this.events[t].add(n);return t==="change"?()=>{r(),Te.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Rn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>ay)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ay);return $1(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Js(e,t){return new VR(e,t)}function HR(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Js(n))}function zR(e,t){const n=Vc(e,t);let{transitionEnd:r={},transition:o={},...i}=n||{};i={...i,...r};for(const s in i){const l=tR(i[s]);HR(e,s,l)}}function $R(e){return!!(ut(e)&&e.add)}function fh(e,t){const n=e.getValue("willChange");if($R(n))return n.add(t)}function U1(e){return e.props[b1]}const Y1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,UR=1e-7,YR=12;function GR(e,t,n,r,o){let i,s,l=0;do s=t+(n-t)/2,i=Y1(s,r,o)-e,i>0?n=s:t=s;while(Math.abs(i)>UR&&++l<YR);return s}function ya(e,t,n,r){if(e===t&&n===r)return Ot;const o=i=>GR(i,0,1,e,n);return i=>i===0||i===1?i:Y1(o(i),t,r)}const G1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,q1=e=>t=>1-e(1-t),K1=ya(.33,1.53,.69,.99),Tp=q1(K1),Q1=G1(Tp),J1=e=>(e*=2)<1?.5*Tp(e):.5*(2-Math.pow(2,-10*(e-1))),Pp=e=>1-Math.sin(Math.acos(e)),X1=q1(Pp),Z1=G1(Pp),eS=e=>/^0[^.\s]+$/u.test(e);function qR(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||eS(e):!0}const Ss=e=>Math.round(e*1e5)/1e5,jp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function KR(e){return e==null}const QR=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Np=(e,t)=>n=>!!(typeof n=="string"&&QR.test(n)&&n.startsWith(e)||t&&!KR(n)&&Object.prototype.hasOwnProperty.call(n,t)),tS=(e,t,n)=>r=>{if(typeof r!="string")return r;const[o,i,s,l]=r.match(jp);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(s),alpha:l!==void 0?parseFloat(l):1}},JR=e=>tr(0,255,e),Au={...Vi,transform:e=>Math.round(JR(e))},lo={test:Np("rgb","red"),parse:tS("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Au.transform(e)+", "+Au.transform(t)+", "+Au.transform(n)+", "+Ss(Qs.transform(r))+")"};function XR(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const ph={test:Np("#"),parse:XR,transform:lo.transform},Qo={test:Np("hsl","hue"),parse:tS("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+In.transform(Ss(t))+", "+In.transform(Ss(n))+", "+Ss(Qs.transform(r))+")"},lt={test:e=>lo.test(e)||ph.test(e)||Qo.test(e),parse:e=>lo.test(e)?lo.parse(e):Qo.test(e)?Qo.parse(e):ph.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?lo.transform(e):Qo.transform(e)},ZR=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function eD(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(jp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(ZR))===null||n===void 0?void 0:n.length)||0)>0}const nS="number",rS="color",tD="var",nD="var(",ly="${}",rD=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Xs(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},o=[];let i=0;const l=t.replace(rD,c=>(lt.test(c)?(r.color.push(i),o.push(rS),n.push(lt.parse(c))):c.startsWith(nD)?(r.var.push(i),o.push(tD),n.push(c)):(r.number.push(i),o.push(nS),n.push(parseFloat(c))),++i,ly)).split(ly);return{values:n,split:l,indexes:r,types:o}}function oS(e){return Xs(e).values}function iS(e){const{split:t,types:n}=Xs(e),r=t.length;return o=>{let i="";for(let s=0;s<r;s++)if(i+=t[s],o[s]!==void 0){const l=n[s];l===nS?i+=Ss(o[s]):l===rS?i+=lt.transform(o[s]):i+=o[s]}return i}}const oD=e=>typeof e=="number"?0:e;function iD(e){const t=oS(e);return iS(e)(t.map(oD))}const zr={test:eD,parse:oS,createTransformer:iS,getAnimatableNone:iD},sD=new Set(["brightness","contrast","saturate","opacity"]);function aD(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(jp)||[];if(!r)return e;const o=n.replace(r,"");let i=sD.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const lD=/\b([a-z-]*)\(.*?\)/gu,mh={...zr,getAnimatableNone:e=>{const t=e.match(lD);return t?t.map(aD).join(" "):e}},cD={...hp,color:lt,backgroundColor:lt,outlineColor:lt,fill:lt,stroke:lt,borderColor:lt,borderTopColor:lt,borderRightColor:lt,borderBottomColor:lt,borderLeftColor:lt,filter:mh,WebkitFilter:mh},Ep=e=>cD[e];function sS(e,t){let n=Ep(e);return n!==mh&&(n=zr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const uD=new Set(["auto","none","0"]);function dD(e,t,n){let r=0,o;for(;r<e.length&&!o;){const i=e[r];typeof i=="string"&&!uD.has(i)&&Xs(i).values.length&&(o=e[r]),r++}if(o&&n)for(const i of t)e[i]=sS(n,o)}const cy=e=>e===Vi||e===J,uy=(e,t)=>parseFloat(e.split(", ")[t]),dy=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return uy(o[1],t);{const i=r.match(/^matrix\((.+)\)$/u);return i?uy(i[1],e):0}},hD=new Set(["x","y","z"]),fD=Wi.filter(e=>!hD.has(e));function pD(e){const t=[];return fD.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Ai={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:dy(4,13),y:dy(5,14)};Ai.translateX=Ai.x;Ai.translateY=Ai.y;const wo=new Set;let gh=!1,yh=!1;function aS(){if(yh){const e=Array.from(wo).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const o=pD(r);o.length&&(n.set(r,o),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const o=n.get(r);o&&o.forEach(([i,s])=>{var l;(l=r.getValue(i))===null||l===void 0||l.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}yh=!1,gh=!1,wo.forEach(e=>e.complete()),wo.clear()}function lS(){wo.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(yh=!0)})}function mD(){lS(),aS()}class Mp{constructor(t,n,r,o,i,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=o,this.element=i,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(wo.add(this),gh||(gh=!0,Te.read(lS),Te.resolveKeyframes(aS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:o}=this;for(let i=0;i<t.length;i++)if(t[i]===null)if(i===0){const s=o==null?void 0:o.get(),l=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const c=r.readValue(n,l);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=l),o&&s===void 0&&o.set(t[0])}else t[i]=t[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),wo.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,wo.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const cS=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),gD=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yD(e){const t=gD.exec(e);if(!t)return[,];const[,n,r,o]=t;return[`--${n??r}`,o]}function uS(e,t,n=1){const[r,o]=yD(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const s=i.trim();return cS(s)?parseFloat(s):s}return dp(o)?uS(o,t,n+1):o}const dS=e=>t=>t.test(e),vD={test:e=>e==="auto",parse:e=>e},hS=[Vi,J,In,fr,aR,sR,vD],hy=e=>hS.find(dS(e));class fS extends Mp{constructor(t,n,r,o,i){super(t,n,r,o,i,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),dp(u))){const d=uS(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!z1.has(r)||t.length!==2)return;const[o,i]=t,s=hy(o),l=hy(i);if(s!==l)if(cy(s)&&cy(l))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let o=0;o<t.length;o++)qR(t[o])&&r.push(o);r.length&&dD(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ai[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(r,o).jump(o,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:o}=this;if(!n||!n.current)return;const i=n.getValue(r);i&&i.jump(this.measuredOrigin,!1);const s=o.length-1,l=o[s];o[s]=Ai[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const fy=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(zr.test(e)||e==="0")&&!e.startsWith("url("));function xD(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function wD(e,t,n,r){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const i=e[e.length-1],s=fy(o,t),l=fy(i,t);return!s||!l?!1:xD(e)||(n==="spring"||xp(n))&&r}const bD=e=>e!==null;function Hc(e,{repeat:t,repeatType:n="loop"},r){const o=e.filter(bD),i=t&&n!=="loop"&&t%2===1?0:o.length-1;return!i||r===void 0?o[i]:r}const SD=40;class pS{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:o=0,repeatDelay:i=0,repeatType:s="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Rn.now(),this.options={autoplay:t,delay:n,type:r,repeat:o,repeatDelay:i,repeatType:s,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>SD?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&mD(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Rn.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:i,delay:s,onComplete:l,onUpdate:c,isGenerator:u}=this.options;if(!u&&!wD(t,r,o,i))if(s)this.options.duration=0;else{c&&c(Hc(t,this.options,n)),l&&l(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Me=(e,t,n)=>e+(t-e)*n;function Iu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function kD({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,i=0,s=0;if(!t)o=i=s=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;o=Iu(c,l,e+1/3),i=Iu(c,l,e),s=Iu(c,l,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(s*255),alpha:r}}function Xl(e,t){return n=>n>0?t:e}const Ru=(e,t,n)=>{const r=e*e,o=n*(t*t-r)+r;return o<0?0:Math.sqrt(o)},CD=[ph,lo,Qo],TD=e=>CD.find(t=>t.test(e));function py(e){const t=TD(e);if(!t)return!1;let n=t.parse(e);return t===Qo&&(n=kD(n)),n}const my=(e,t)=>{const n=py(e),r=py(t);if(!n||!r)return Xl(e,t);const o={...n};return i=>(o.red=Ru(n.red,r.red,i),o.green=Ru(n.green,r.green,i),o.blue=Ru(n.blue,r.blue,i),o.alpha=Me(n.alpha,r.alpha,i),lo.transform(o))},PD=(e,t)=>n=>t(e(n)),va=(...e)=>e.reduce(PD),vh=new Set(["none","hidden"]);function jD(e,t){return vh.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function ND(e,t){return n=>Me(e,t,n)}function Ap(e){return typeof e=="number"?ND:typeof e=="string"?dp(e)?Xl:lt.test(e)?my:AD:Array.isArray(e)?mS:typeof e=="object"?lt.test(e)?my:ED:Xl}function mS(e,t){const n=[...e],r=n.length,o=e.map((i,s)=>Ap(i)(i,t[s]));return i=>{for(let s=0;s<r;s++)n[s]=o[s](i);return n}}function ED(e,t){const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Ap(e[o])(e[o],t[o]));return o=>{for(const i in r)n[i]=r[i](o);return n}}function MD(e,t){var n;const r=[],o={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],l=e.indexes[s][o[s]],c=(n=e.values[l])!==null&&n!==void 0?n:0;r[i]=c,o[s]++}return r}const AD=(e,t)=>{const n=zr.createTransformer(t),r=Xs(e),o=Xs(t);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?vh.has(e)&&!o.values.length||vh.has(t)&&!r.values.length?jD(e,t):va(mS(MD(r,o),o.values),n):Xl(e,t)};function gS(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Me(e,t,n):Ap(e)(e,t)}const ID=5;function yS(e,t,n){const r=Math.max(t-ID,0);return $1(n-e(r),t-r)}const Le={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Du=.001;function RD({duration:e=Le.duration,bounce:t=Le.bounce,velocity:n=Le.velocity,mass:r=Le.mass}){let o,i,s=1-t;s=tr(Le.minDamping,Le.maxDamping,s),e=tr(Le.minDuration,Le.maxDuration,qn(e)),s<1?(o=u=>{const d=u*s,h=d*e,p=d-n,f=xh(u,s),w=Math.exp(-h);return Du-p/f*w},i=u=>{const h=u*s*e,p=h*n+n,f=Math.pow(s,2)*Math.pow(u,2)*e,w=Math.exp(-h),x=xh(Math.pow(u,2),s);return(-o(u)+Du>0?-1:1)*((p-f)*w)/x}):(o=u=>{const d=Math.exp(-u*e),h=(u-n)*e+1;return-Du+d*h},i=u=>{const d=Math.exp(-u*e),h=(n-u)*(e*e);return d*h});const l=5/e,c=LD(o,i,l);if(e=Gn(e),isNaN(c))return{stiffness:Le.stiffness,damping:Le.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const DD=12;function LD(e,t,n){let r=n;for(let o=1;o<DD;o++)r=r-e(r)/t(r);return r}function xh(e,t){return e*Math.sqrt(1-t*t)}const OD=["duration","bounce"],FD=["stiffness","damping","mass"];function gy(e,t){return t.some(n=>e[n]!==void 0)}function BD(e){let t={velocity:Le.velocity,stiffness:Le.stiffness,damping:Le.damping,mass:Le.mass,isResolvedFromDuration:!1,...e};if(!gy(e,FD)&&gy(e,OD))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),o=r*r,i=2*tr(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:Le.mass,stiffness:o,damping:i}}else{const n=RD(e);t={...t,...n,mass:Le.mass},t.isResolvedFromDuration=!0}return t}function vS(e=Le.visualDuration,t=Le.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:o}=n;const i=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],l={done:!1,value:i},{stiffness:c,damping:u,mass:d,duration:h,velocity:p,isResolvedFromDuration:f}=BD({...n,velocity:-qn(n.velocity||0)}),w=p||0,x=u/(2*Math.sqrt(c*d)),b=s-i,g=qn(Math.sqrt(c/d)),v=Math.abs(b)<5;r||(r=v?Le.restSpeed.granular:Le.restSpeed.default),o||(o=v?Le.restDelta.granular:Le.restDelta.default);let y;if(x<1){const k=xh(g,x);y=P=>{const j=Math.exp(-x*g*P);return s-j*((w+x*g*b)/k*Math.sin(k*P)+b*Math.cos(k*P))}}else if(x===1)y=k=>s-Math.exp(-g*k)*(b+(w+g*b)*k);else{const k=g*Math.sqrt(x*x-1);y=P=>{const j=Math.exp(-x*g*P),N=Math.min(k*P,300);return s-j*((w+x*g*b)*Math.sinh(N)+k*b*Math.cosh(N))/k}}const S={calculatedDuration:f&&h||null,next:k=>{const P=y(k);if(f)l.done=k>=h;else{let j=0;x<1&&(j=k===0?Gn(w):yS(y,k,P));const N=Math.abs(j)<=r,R=Math.abs(s-P)<=o;l.done=N&&R}return l.value=l.done?s:P,l},toString:()=>{const k=Math.min(O1(S),dh),P=F1(j=>S.next(k*j).value,k,30);return k+"ms "+P}};return S}function yy({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}){const h=e[0],p={done:!1,value:h},f=N=>l!==void 0&&N<l||c!==void 0&&N>c,w=N=>l===void 0?c:c===void 0||Math.abs(l-N)<Math.abs(c-N)?l:c;let x=n*t;const b=h+x,g=s===void 0?b:s(b);g!==b&&(x=g-h);const v=N=>-x*Math.exp(-N/r),y=N=>g+v(N),S=N=>{const R=v(N),M=y(N);p.done=Math.abs(R)<=u,p.value=p.done?g:M};let k,P;const j=N=>{f(p.value)&&(k=N,P=vS({keyframes:[p.value,w(p.value)],velocity:yS(y,N,p.value),damping:o,stiffness:i,restDelta:u,restSpeed:d}))};return j(0),{calculatedDuration:null,next:N=>{let R=!1;return!P&&k===void 0&&(R=!0,S(N),j(N)),k!==void 0&&N>=k?P.next(N-k):(!R&&S(N),p)}}}const _D=ya(.42,0,1,1),WD=ya(0,0,.58,1),xS=ya(.42,0,.58,1),VD=e=>Array.isArray(e)&&typeof e[0]!="number",HD={linear:Ot,easeIn:_D,easeInOut:xS,easeOut:WD,circIn:Pp,circInOut:Z1,circOut:X1,backIn:Tp,backInOut:Q1,backOut:K1,anticipate:J1},vy=e=>{if(wp(e)){g1(e.length===4);const[t,n,r,o]=e;return ya(t,n,r,o)}else if(typeof e=="string")return HD[e];return e};function zD(e,t,n){const r=[],o=n||gS,i=e.length-1;for(let s=0;s<i;s++){let l=o(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||Ot:t;l=va(c,l)}r.push(l)}return r}function $D(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const i=e.length;if(g1(i===t.length),i===1)return()=>t[0];if(i===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=zD(t,r,o),c=l.length,u=d=>{if(s&&d<e[0])return t[0];let h=0;if(c>1)for(;h<e.length-2&&!(d<e[h+1]);h++);const p=Ei(e[h],e[h+1],d);return l[h](p)};return n?d=>u(tr(e[0],e[i-1],d)):u}function UD(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=Ei(0,t,r);e.push(Me(n,1,o))}}function YD(e){const t=[0];return UD(t,e.length-1),t}function GD(e,t){return e.map(n=>n*t)}function qD(e,t){return e.map(()=>t||xS).splice(0,e.length-1)}function Zl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=VD(r)?r.map(vy):vy(r),i={done:!1,value:t[0]},s=GD(n&&n.length===t.length?n:YD(t),e),l=$D(s,t,{ease:Array.isArray(o)?o:qD(t,o)});return{calculatedDuration:e,next:c=>(i.value=l(c),i.done=c>=e,i)}}const KD=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Te.update(t,!0),stop:()=>Hr(t),now:()=>et.isProcessing?et.timestamp:Rn.now()}},QD={decay:yy,inertia:yy,tween:Zl,keyframes:Zl,spring:vS},JD=e=>e/100;class Ip extends pS{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:o,keyframes:i}=this.options,s=(o==null?void 0:o.KeyframeResolver)||Mp,l=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new s(i,l,n,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:i,velocity:s=0}=this.options,l=xp(n)?n:QD[n]||Zl;let c,u;l!==Zl&&typeof t[0]!="number"&&(c=va(JD,gS(t[0],t[1])),t=[0,100]);const d=l({...this.options,keyframes:t});i==="mirror"&&(u=l({...this.options,keyframes:[...t].reverse(),velocity:-s})),d.calculatedDuration===null&&(d.calculatedDuration=O1(d));const{calculatedDuration:h}=d,p=h+o,f=p*(r+1)-o;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:h,resolvedDuration:p,totalDuration:f}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:N}=this.options;return{done:!0,value:N[N.length-1]}}const{finalKeyframe:o,generator:i,mirroredGenerator:s,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:h}=r;if(this.startTime===null)return i.next(0);const{delay:p,repeat:f,repeatType:w,repeatDelay:x,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let y=this.currentTime,S=i;if(f){const N=Math.min(this.currentTime,d)/h;let R=Math.floor(N),M=N%1;!M&&N>=1&&(M=1),M===1&&R--,R=Math.min(R,f+1),!!(R%2)&&(w==="reverse"?(M=1-M,x&&(M-=x/h)):w==="mirror"&&(S=s)),y=tr(0,1,M)*h}const k=v?{done:!1,value:c[0]}:S.next(y);l&&(k.value=l(k.value));let{done:P}=k;!v&&u!==null&&(P=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return j&&o!==void 0&&(k.value=Hc(c,this.options,o)),b&&b(k.value),j&&this.finish(),k}get duration(){const{resolved:t}=this;return t?qn(t.calculatedDuration):0}get time(){return qn(this.currentTime)}set time(t){t=Gn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=qn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=KD,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(i=>this.tick(i))),n&&n();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const XD=new Set(["opacity","clipPath","filter","transform"]);function ZD(e,t,n,{delay:r=0,duration:o=300,repeat:i=0,repeatType:s="loop",ease:l="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=_1(l,o);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:o,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:i+1,direction:s==="reverse"?"alternate":"normal"})}const e4=op(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ec=10,t4=2e4;function n4(e){return xp(e.type)||e.type==="spring"||!B1(e.ease)}function r4(e,t){const n=new Ip({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const o=[];let i=0;for(;!r.done&&i<t4;)r=n.sample(i),o.push(r.value),i+=ec;return{times:void 0,keyframes:o,duration:i-ec,ease:"linear"}}const wS={anticipate:J1,backInOut:Q1,circInOut:Z1};function o4(e){return e in wS}class xy extends pS{constructor(t){super(t);const{name:n,motionValue:r,element:o,keyframes:i}=this.options;this.resolver=new fS(i,(s,l)=>this.onKeyframesResolved(s,l),n,r,o),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:o,ease:i,type:s,motionValue:l,name:c,startTime:u}=this.options;if(!l.owner||!l.owner.current)return!1;if(typeof i=="string"&&Jl()&&o4(i)&&(i=wS[i]),n4(this.options)){const{onComplete:h,onUpdate:p,motionValue:f,element:w,...x}=this.options,b=r4(t,x);t=b.keyframes,t.length===1&&(t[1]=t[0]),r=b.duration,o=b.times,i=b.ease,s="keyframes"}const d=ZD(l.owner.current,c,t,{...this.options,duration:r,times:o,ease:i});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(ry(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:h}=this.options;l.set(Hc(t,this.options,n)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:o,type:s,ease:i,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return qn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return qn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Gn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Ot;const{animation:r}=n;ry(r,t)}return Ot}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:o,type:i,ease:s,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:h,element:p,...f}=this.options,w=new Ip({...f,keyframes:r,duration:o,type:i,ease:s,times:l,isGenerator:!0}),x=Gn(this.time);u.setWithVelocity(w.sample(x-ec).value,w.sample(x).value,ec)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:o,repeatType:i,damping:s,type:l}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=n.owner.getProps();return e4()&&r&&XD.has(r)&&!c&&!u&&!o&&i!=="mirror"&&s!==0&&l!=="inertia"}}const i4={type:"spring",stiffness:500,damping:25,restSpeed:10},s4=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),a4={type:"keyframes",duration:.8},l4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},c4=(e,{keyframes:t})=>t.length>2?a4:Io.has(e)?e.startsWith("scale")?s4(t[1]):i4:l4;function u4({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:i,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Rp=(e,t,n,r={},o,i)=>s=>{const l=vp(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Gn(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:p=>{t.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{s(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:i?void 0:o};u4(l)||(d={...d,...c4(e,d)}),d.duration&&(d.duration=Gn(d.duration)),d.repeatDelay&&(d.repeatDelay=Gn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let h=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(h=!0)),h&&!i&&t.get()!==void 0){const p=Hc(d.keyframes,l);if(p!==void 0)return Te.update(()=>{d.onUpdate(p),d.onComplete()}),new ER([])}return!i&&xy.supports(d)?new xy(d):new Ip(d)};function d4({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function bS(e,t,{delay:n=0,transitionOverride:r,type:o}={}){var i;let{transition:s=e.getDefaultTransition(),transitionEnd:l,...c}=t;r&&(s=r);const u=[],d=o&&e.animationState&&e.animationState.getState()[o];for(const h in c){const p=e.getValue(h,(i=e.latestValues[h])!==null&&i!==void 0?i:null),f=c[h];if(f===void 0||d&&d4(d,h))continue;const w={delay:n,...vp(s||{},h)};let x=!1;if(window.MotionHandoffAnimation){const g=U1(e);if(g){const v=window.MotionHandoffAnimation(g,h,Te);v!==null&&(w.startTime=v,x=!0)}}fh(e,h),p.start(Rp(h,p,f,e.shouldReduceMotion&&z1.has(h)?{type:!1}:w,e,x));const b=p.animation;b&&u.push(b)}return l&&Promise.all(u).then(()=>{Te.update(()=>{l&&zR(e,l)})}),u}function wh(e,t,n={}){var r;const o=Vc(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(i=n.transitionOverride);const s=o?()=>Promise.all(bS(e,o,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:h,staggerDirection:p}=i;return h4(e,t,d+u,h,p,n)}:()=>Promise.resolve(),{when:c}=i;if(c){const[u,d]=c==="beforeChildren"?[s,l]:[l,s];return u().then(()=>d())}else return Promise.all([s(),l(n.delay)])}function h4(e,t,n=0,r=0,o=1,i){const s=[],l=(e.variantChildren.size-1)*r,c=o===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(f4).forEach((u,d)=>{u.notify("AnimationStart",t),s.push(wh(u,t,{...i,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function f4(e,t){return e.sortNodePosition(t)}function p4(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(i=>wh(e,i,n));r=Promise.all(o)}else if(typeof t=="string")r=wh(e,t,n);else{const o=typeof t=="function"?Vc(e,t,n.custom):t;r=Promise.all(bS(e,o,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const m4=sp.length;function SS(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?SS(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<m4;n++){const r=sp[n],o=e.props[r];(Ks(o)||o===!1)&&(t[r]=o)}return t}const g4=[...ip].reverse(),y4=ip.length;function v4(e){return t=>Promise.all(t.map(({animation:n,options:r})=>p4(e,n,r)))}function x4(e){let t=v4(e),n=wy(),r=!0;const o=c=>(u,d)=>{var h;const p=Vc(e,d,c==="exit"?(h=e.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(p){const{transition:f,transitionEnd:w,...x}=p;u={...u,...x,...w}}return u};function i(c){t=c(e)}function s(c){const{props:u}=e,d=SS(e.parent)||{},h=[],p=new Set;let f={},w=1/0;for(let b=0;b<y4;b++){const g=g4[b],v=n[g],y=u[g]!==void 0?u[g]:d[g],S=Ks(y),k=g===c?v.isActive:null;k===!1&&(w=b);let P=y===d[g]&&y!==u[g]&&S;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),v.protectedKeys={...f},!v.isActive&&k===null||!y&&!v.prevProp||_c(y)||typeof y=="boolean")continue;const j=w4(v.prevProp,y);let N=j||g===c&&v.isActive&&!P&&S||b>w&&S,R=!1;const M=Array.isArray(y)?y:[y];let B=M.reduce(o(g),{});k===!1&&(B={});const{prevResolvedValues:V={}}=v,$={...V,...B},_=z=>{N=!0,p.has(z)&&(R=!0,p.delete(z)),v.needsAnimating[z]=!0;const E=e.getValue(z);E&&(E.liveStyle=!1)};for(const z in $){const E=B[z],I=V[z];if(f.hasOwnProperty(z))continue;let T=!1;uh(E)&&uh(I)?T=!L1(E,I):T=E!==I,T?E!=null?_(z):p.add(z):E!==void 0&&p.has(z)?_(z):v.protectedKeys[z]=!0}v.prevProp=y,v.prevResolvedValues=B,v.isActive&&(f={...f,...B}),r&&e.blockInitialAnimation&&(N=!1),N&&(!(P&&j)||R)&&h.push(...M.map(z=>({animation:z,options:{type:g}})))}if(p.size){const b={};p.forEach(g=>{const v=e.getBaseTarget(g),y=e.getValue(g);y&&(y.liveStyle=!0),b[g]=v??null}),h.push({animation:b})}let x=!!h.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(h):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var f;return(f=p.animationState)===null||f===void 0?void 0:f.setActive(c,u)}),n[c].isActive=u;const h=s(c);for(const p in n)n[p].protectedKeys={};return h}return{animateChanges:s,setActive:l,setAnimateFunction:i,getState:()=>n,reset:()=>{n=wy(),r=!0}}}function w4(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!L1(t,e):!1}function eo(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function wy(){return{animate:eo(!0),whileInView:eo(),whileHover:eo(),whileTap:eo(),whileDrag:eo(),whileFocus:eo(),exit:eo()}}class Kr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class b4 extends Kr{constructor(t){super(t),t.animationState||(t.animationState=x4(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();_c(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let S4=0;class k4 extends Kr{constructor(){super(...arguments),this.id=S4++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const C4={animation:{Feature:b4},exit:{Feature:k4}};function Zs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function xa(e){return{point:{x:e.pageX,y:e.pageY}}}const T4=e=>t=>bp(t)&&e(t,xa(t));function ks(e,t,n,r){return Zs(e,t,T4(n),r)}const by=(e,t)=>Math.abs(e-t);function P4(e,t){const n=by(e.x,t.x),r=by(e.y,t.y);return Math.sqrt(n**2+r**2)}class kS{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Ou(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,f=P4(h.offset,{x:0,y:0})>=3;if(!p&&!f)return;const{point:w}=h,{timestamp:x}=et;this.history.push({...w,timestamp:x});const{onStart:b,onMove:g}=this.handlers;p||(b&&b(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,h)},this.handlePointerMove=(h,p)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Lu(p,this.transformPagePoint),Te.update(this.updatePoint,!0)},this.handlePointerUp=(h,p)=>{this.end();const{onEnd:f,onSessionEnd:w,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Ou(h.type==="pointercancel"?this.lastMoveEventInfo:Lu(p,this.transformPagePoint),this.history);this.startEvent&&f&&f(h,b),w&&w(h,b)},!bp(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const s=xa(t),l=Lu(s,this.transformPagePoint),{point:c}=l,{timestamp:u}=et;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Ou(l,this.history)),this.removeListeners=va(ks(this.contextWindow,"pointermove",this.handlePointerMove),ks(this.contextWindow,"pointerup",this.handlePointerUp),ks(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Hr(this.updatePoint)}}function Lu(e,t){return t?{point:t(e.point)}:e}function Sy(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ou({point:e},t){return{point:e,delta:Sy(e,CS(t)),offset:Sy(e,j4(t)),velocity:N4(t,.1)}}function j4(e){return e[0]}function CS(e){return e[e.length-1]}function N4(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=CS(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Gn(t)));)n--;if(!r)return{x:0,y:0};const i=qn(o.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const s={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const TS=1e-4,E4=1-TS,M4=1+TS,PS=.01,A4=0-PS,I4=0+PS;function Bt(e){return e.max-e.min}function R4(e,t,n){return Math.abs(e-t)<=n}function ky(e,t,n,r=.5){e.origin=r,e.originPoint=Me(t.min,t.max,e.origin),e.scale=Bt(n)/Bt(t),e.translate=Me(n.min,n.max,e.origin)-e.originPoint,(e.scale>=E4&&e.scale<=M4||isNaN(e.scale))&&(e.scale=1),(e.translate>=A4&&e.translate<=I4||isNaN(e.translate))&&(e.translate=0)}function Cs(e,t,n,r){ky(e.x,t.x,n.x,r?r.originX:void 0),ky(e.y,t.y,n.y,r?r.originY:void 0)}function Cy(e,t,n){e.min=n.min+t.min,e.max=e.min+Bt(t)}function D4(e,t,n){Cy(e.x,t.x,n.x),Cy(e.y,t.y,n.y)}function Ty(e,t,n){e.min=t.min-n.min,e.max=e.min+Bt(t)}function Ts(e,t,n){Ty(e.x,t.x,n.x),Ty(e.y,t.y,n.y)}function L4(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Me(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Me(n,e,r.max):Math.min(e,n)),e}function Py(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function O4(e,{top:t,left:n,bottom:r,right:o}){return{x:Py(e.x,n,o),y:Py(e.y,t,r)}}function jy(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function F4(e,t){return{x:jy(e.x,t.x),y:jy(e.y,t.y)}}function B4(e,t){let n=.5;const r=Bt(e),o=Bt(t);return o>r?n=Ei(t.min,t.max-r,e.min):r>o&&(n=Ei(e.min,e.max-o,t.min)),tr(0,1,n)}function _4(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const bh=.35;function W4(e=bh){return e===!1?e=0:e===!0&&(e=bh),{x:Ny(e,"left","right"),y:Ny(e,"top","bottom")}}function Ny(e,t,n){return{min:Ey(e,t),max:Ey(e,n)}}function Ey(e,t){return typeof e=="number"?e:e[t]||0}const My=()=>({translate:0,scale:1,origin:0,originPoint:0}),Jo=()=>({x:My(),y:My()}),Ay=()=>({min:0,max:0}),Be=()=>({x:Ay(),y:Ay()});function zt(e){return[e("x"),e("y")]}function jS({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function V4({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function H4(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Fu(e){return e===void 0||e===1}function Sh({scale:e,scaleX:t,scaleY:n}){return!Fu(e)||!Fu(t)||!Fu(n)}function ro(e){return Sh(e)||NS(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function NS(e){return Iy(e.x)||Iy(e.y)}function Iy(e){return e&&e!=="0%"}function tc(e,t,n){const r=e-n,o=t*r;return n+o}function Ry(e,t,n,r,o){return o!==void 0&&(e=tc(e,o,r)),tc(e,n,r)+t}function kh(e,t=0,n=1,r,o){e.min=Ry(e.min,t,n,r,o),e.max=Ry(e.max,t,n,r,o)}function ES(e,{x:t,y:n}){kh(e.x,t.translate,t.scale,t.originPoint),kh(e.y,n.translate,n.scale,n.originPoint)}const Dy=.999999999999,Ly=1.0000000000001;function z4(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let i,s;for(let l=0;l<o;l++){i=n[l],s=i.projectionDelta;const{visualElement:c}=i.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Zo(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,ES(e,s)),r&&ro(i.latestValues)&&Zo(e,i.latestValues))}t.x<Ly&&t.x>Dy&&(t.x=1),t.y<Ly&&t.y>Dy&&(t.y=1)}function Xo(e,t){e.min=e.min+t,e.max=e.max+t}function Oy(e,t,n,r,o=.5){const i=Me(e.min,e.max,o);kh(e,t,n,i,r)}function Zo(e,t){Oy(e.x,t.x,t.scaleX,t.scale,t.originX),Oy(e.y,t.y,t.scaleY,t.scale,t.originY)}function MS(e,t){return jS(H4(e.getBoundingClientRect(),t))}function $4(e,t,n){const r=MS(e,n),{scroll:o}=t;return o&&(Xo(r.x,o.offset.x),Xo(r.y,o.offset.y)),r}const AS=({current:e})=>e?e.ownerDocument.defaultView:null,U4=new WeakMap;class Y4{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Be(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=d=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(xa(d).point)},i=(d,h)=>{const{drag:p,dragPropagation:f,onDragStart:w}=this.getProps();if(p&&!f&&(this.openDragLock&&this.openDragLock(),this.openDragLock=BR(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zt(b=>{let g=this.getAxisMotionValue(b).get()||0;if(In.test(g)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[b];y&&(g=Bt(y)*(parseFloat(g)/100))}}this.originPoint[b]=g}),w&&Te.postRender(()=>w(d,h)),fh(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(d,h)=>{const{dragPropagation:p,dragDirectionLock:f,onDirectionLock:w,onDrag:x}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:b}=h;if(f&&this.currentDirection===null){this.currentDirection=G4(b),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",h.point,b),this.updateAxis("y",h.point,b),this.visualElement.render(),x&&x(d,h)},l=(d,h)=>this.stop(d,h),c=()=>zt(d=>{var h;return this.getAnimationState(d)==="paused"&&((h=this.getAxisMotionValue(d).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new kS(t,{onSessionStart:o,onStart:i,onMove:s,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:AS(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:i}=this.getProps();i&&Te.postRender(()=>i(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!Ga(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=L4(s,this.constraints[t],this.elastic[t])),i.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;n&&Ko(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=O4(o.layoutBox,n):this.constraints=!1,this.elastic=W4(r),i!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&zt(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=_4(o.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ko(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=$4(r,o.root,this.visualElement.getTransformPagePoint());let s=F4(o.layout.layoutBox,i);if(n){const l=n(V4(s));this.hasMutatedConstraints=!!l,l&&(s=jS(l))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:i,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=zt(d=>{if(!Ga(d,n,this.currentDirection))return;let h=c&&c[d]||{};s&&(h={min:0,max:0});const p=o?200:1e6,f=o?40:1e7,w={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...i,...h};return this.startAxisValueAnimation(d,w)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return fh(this.visualElement,t),r.start(Rp(t,r,0,n,this.visualElement,!1))}stopAnimation(){zt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){zt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){zt(n=>{const{drag:r}=this.getProps();if(!Ga(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(n);if(o&&o.layout){const{min:s,max:l}=o.layout.layoutBox[n];i.set(t[n]-Me(s,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ko(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};zt(s=>{const l=this.getAxisMotionValue(s);if(l&&this.constraints!==!1){const c=l.get();o[s]=B4({min:c,max:c},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),zt(s=>{if(!Ga(s,t,null))return;const l=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];l.set(Me(c,u,o[s]))})}addListeners(){if(!this.visualElement.current)return;U4.set(this.visualElement,this);const t=this.visualElement.current,n=ks(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Ko(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Te.read(r);const s=Zs(window,"resize",()=>this.scalePositionWithinConstraints()),l=o.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(zt(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=c[d].translate,h.set(h.get()+c[d].translate))}),this.visualElement.render())});return()=>{s(),n(),i(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:s=bh,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:i,dragElastic:s,dragMomentum:l}}}function Ga(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function G4(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class q4 extends Kr{constructor(t){super(t),this.removeGroupControls=Ot,this.removeListeners=Ot,this.controls=new Y4(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ot}unmount(){this.removeGroupControls(),this.removeListeners()}}const Fy=e=>(t,n)=>{e&&Te.postRender(()=>e(t,n))};class K4 extends Kr{constructor(){super(...arguments),this.removePointerDownListener=Ot}onPointerDown(t){this.session=new kS(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:AS(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Fy(t),onStart:Fy(n),onMove:r,onEnd:(i,s)=>{delete this.session,o&&Te.postRender(()=>o(i,s))}}}mount(){this.removePointerDownListener=ks(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const pl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function By(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const os={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(J.test(e))e=parseFloat(e);else return e;const n=By(e,t.target.x),r=By(e,t.target.y);return`${n}% ${r}%`}},Q4={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=zr.parse(e);if(o.length>5)return r;const i=zr.createTransformer(e),s=typeof o[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;o[0+s]/=l,o[1+s]/=c;const u=Me(l,c,.5);return typeof o[2+s]=="number"&&(o[2+s]/=u),typeof o[3+s]=="number"&&(o[3+s]/=u),i(o)}};class J4 extends m.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:i}=t;yR(X4),i&&(n.group&&n.group.add(i),r&&r.register&&o&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),pl.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:i}=this.props,s=r.projection;return s&&(s.isPresent=i,o||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?s.promote():s.relegate()||Te.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),lp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function IS(e){const[t,n]=p1(),r=m.useContext(ep);return a.jsx(J4,{...e,layoutGroup:r,switchLayoutGroup:m.useContext(S1),isPresent:t,safeToRemove:n})}const X4={borderRadius:{...os,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:os,borderTopRightRadius:os,borderBottomLeftRadius:os,borderBottomRightRadius:os,boxShadow:Q4};function Z4(e,t,n){const r=ut(e)?e:Js(e);return r.start(Rp("",r,t,n)),r.animation}function e5(e){return e instanceof SVGElement&&e.tagName!=="svg"}const t5=(e,t)=>e.depth-t.depth;class n5{constructor(){this.children=[],this.isDirty=!1}add(t){Sp(this.children,t),this.isDirty=!0}remove(t){kp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(t5),this.isDirty=!1,this.children.forEach(t)}}function r5(e,t){const n=Rn.now(),r=({timestamp:o})=>{const i=o-n;i>=t&&(Hr(r),e(i-t))};return Te.read(r,!0),()=>Hr(r)}const RS=["TopLeft","TopRight","BottomLeft","BottomRight"],o5=RS.length,_y=e=>typeof e=="string"?parseFloat(e):e,Wy=e=>typeof e=="number"||J.test(e);function i5(e,t,n,r,o,i){o?(e.opacity=Me(0,n.opacity!==void 0?n.opacity:1,s5(r)),e.opacityExit=Me(t.opacity!==void 0?t.opacity:1,0,a5(r))):i&&(e.opacity=Me(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<o5;s++){const l=`border${RS[s]}Radius`;let c=Vy(t,l),u=Vy(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Wy(c)===Wy(u)?(e[l]=Math.max(Me(_y(c),_y(u),r),0),(In.test(u)||In.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=Me(t.rotate||0,n.rotate||0,r))}function Vy(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const s5=DS(0,.5,X1),a5=DS(.5,.95,Ot);function DS(e,t,n){return r=>r<e?0:r>t?1:n(Ei(e,t,r))}function Hy(e,t){e.min=t.min,e.max=t.max}function Ht(e,t){Hy(e.x,t.x),Hy(e.y,t.y)}function zy(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function $y(e,t,n,r,o){return e-=t,e=tc(e,1/n,r),o!==void 0&&(e=tc(e,1/o,r)),e}function l5(e,t=0,n=1,r=.5,o,i=e,s=e){if(In.test(t)&&(t=parseFloat(t),t=Me(s.min,s.max,t/100)-s.min),typeof t!="number")return;let l=Me(i.min,i.max,r);e===i&&(l-=t),e.min=$y(e.min,t,n,l,o),e.max=$y(e.max,t,n,l,o)}function Uy(e,t,[n,r,o],i,s){l5(e,t[n],t[r],t[o],t.scale,i,s)}const c5=["x","scaleX","originX"],u5=["y","scaleY","originY"];function Yy(e,t,n,r){Uy(e.x,t,c5,n?n.x:void 0,r?r.x:void 0),Uy(e.y,t,u5,n?n.y:void 0,r?r.y:void 0)}function Gy(e){return e.translate===0&&e.scale===1}function LS(e){return Gy(e.x)&&Gy(e.y)}function qy(e,t){return e.min===t.min&&e.max===t.max}function d5(e,t){return qy(e.x,t.x)&&qy(e.y,t.y)}function Ky(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function OS(e,t){return Ky(e.x,t.x)&&Ky(e.y,t.y)}function Qy(e){return Bt(e.x)/Bt(e.y)}function Jy(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class h5{constructor(){this.members=[]}add(t){Sp(this.members,t),t.scheduleRender()}remove(t){if(kp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function f5(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((o||i||s)&&(r=`translate3d(${o}px, ${i}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:h,rotateY:p,skewX:f,skewY:w}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),h&&(r+=`rotateX(${h}deg) `),p&&(r+=`rotateY(${p}deg) `),f&&(r+=`skewX(${f}deg) `),w&&(r+=`skewY(${w}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const oo={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ds=typeof window<"u"&&window.MotionDebug!==void 0,Bu=["","X","Y","Z"],p5={visibility:"hidden"},Xy=1e3;let m5=0;function _u(e,t,n,r){const{latestValues:o}=t;o[e]&&(n[e]=o[e],t.setStaticValue(e,0),r&&(r[e]=0))}function FS(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=U1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:i}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Te,!(o||i))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&FS(r)}function BS({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(s={},l=t==null?void 0:t()){this.id=m5++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ds&&(oo.totalNodes=oo.resolvedTargetDeltas=oo.recalculatedProjection=0),this.nodes.forEach(v5),this.nodes.forEach(k5),this.nodes.forEach(C5),this.nodes.forEach(x5),ds&&window.MotionDebug.record(oo)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new n5)}addEventListener(s,l){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Cp),this.eventHandlers.get(s).add(l)}notifyListeners(s,...l){const c=this.eventHandlers.get(s);c&&c.notify(...l)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=e5(s),this.instance=s;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let h;const p=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=r5(p,250),pl.hasAnimatedSinceResize&&(pl.hasAnimatedSinceResize=!1,this.nodes.forEach(ev))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:p,hasRelativeTargetChanged:f,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||E5,{onLayoutAnimationStart:b,onLayoutAnimationComplete:g}=d.getProps(),v=!this.targetLayout||!OS(this.targetLayout,w)||f,y=!p&&f;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||p&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,y);const S={...vp(x,"layout"),onPlay:b,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else p||ev(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Hr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(T5),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&FS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Zy);return}this.isUpdating||this.nodes.forEach(b5),this.isUpdating=!1,this.nodes.forEach(S5),this.nodes.forEach(g5),this.nodes.forEach(y5),this.clearAllSnapshots();const l=Rn.now();et.delta=tr(0,1e3/60,l-et.timestamp),et.timestamp=l,et.isProcessing=!0,Eu.update.process(et),Eu.preRender.process(et),Eu.render.process(et),et.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,lp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(w5),this.sharedNodes.forEach(P5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Te.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Te.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Be(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(l=!1),l){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!LS(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&(l||ro(this.latestValues)||d)&&(o(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return s&&(c=this.removeTransform(c)),M5(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:l}=this.options;if(!l)return Be();const c=l.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(A5))){const{scroll:d}=this.root;d&&(Xo(c.x,d.offset.x),Xo(c.y,d.offset.y))}return c}removeElementScroll(s){var l;const c=Be();if(Ht(c,s),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:h,options:p}=d;d!==this.root&&h&&p.layoutScroll&&(h.wasRoot&&Ht(c,s),Xo(c.x,h.offset.x),Xo(c.y,h.offset.y))}return c}applyTransform(s,l=!1){const c=Be();Ht(c,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Zo(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),ro(d.latestValues)&&Zo(c,d.latestValues)}return ro(this.latestValues)&&Zo(c,this.latestValues),c}removeTransform(s){const l=Be();Ht(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!ro(u.latestValues))continue;Sh(u.latestValues)&&u.updateSnapshot();const d=Be(),h=u.measurePageBox();Ht(d,h),Yy(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return ro(this.latestValues)&&Yy(l,this.latestValues),l}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==et.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:p}=this.options;if(!(!this.layout||!(h||p))){if(this.resolvedRelativeTargetAt=et.timestamp,!this.targetDelta&&!this.relativeTarget){const f=this.getClosestProjectingParent();f&&f.layout&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Be(),this.relativeTargetOrigin=Be(),Ts(this.relativeTargetOrigin,this.layout.layoutBox,f.layout.layoutBox),Ht(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Be(),this.targetWithTransforms=Be()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),D4(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ht(this.target,this.layout.layoutBox),ES(this.target,this.targetDelta)):Ht(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const f=this.getClosestProjectingParent();f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Be(),this.relativeTargetOrigin=Be(),Ts(this.relativeTargetOrigin,this.target,f.target),Ht(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ds&&oo.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Sh(this.parent.latestValues)||NS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===et.timestamp&&(u=!1),u)return;const{layout:d,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||h))return;Ht(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,f=this.treeScale.y;z4(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=Be());const{target:w}=l;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(zy(this.prevProjectionDelta.x,this.projectionDelta.x),zy(this.prevProjectionDelta.y,this.projectionDelta.y)),Cs(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==f||!Jy(this.projectionDelta.x,this.prevProjectionDelta.x)||!Jy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w)),ds&&oo.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Jo(),this.projectionDelta=Jo(),this.projectionDeltaWithTransform=Jo()}setAnimationOrigin(s,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},h=Jo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=Be(),f=c?c.source:void 0,w=this.layout?this.layout.source:void 0,x=f!==w,b=this.getStack(),g=!b||b.members.length<=1,v=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(N5));this.animationProgress=0;let y;this.mixTargetDelta=S=>{const k=S/1e3;tv(h.x,s.x,k),tv(h.y,s.y,k),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ts(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),j5(this.relativeTarget,this.relativeTargetOrigin,p,k),y&&d5(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Be()),Ht(y,this.relativeTarget)),x&&(this.animationValues=d,i5(d,u,this.latestValues,k,v,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Hr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Te.update(()=>{pl.hasAnimatedSinceResize=!0,this.currentAnimation=Z4(0,Xy,{...s,onUpdate:l=>{this.mixTargetDelta(l),s.onUpdate&&s.onUpdate(l)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Xy),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=s;if(!(!l||!c||!u)){if(this!==s&&this.layout&&u&&_S(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||Be();const h=Bt(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+h;const p=Bt(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+p}Ht(l,c),Zo(l,d),Cs(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(s,l){this.sharedNodes.has(s)||this.sharedNodes.set(s,new h5),this.sharedNodes.get(s).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:l}=this.options;return l?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:l}=this.options;return l?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let l=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&_u("z",s,u,this.animationValues);for(let d=0;d<Bu.length;d++)_u(`rotate${Bu[d]}`,s,u,this.animationValues),_u(`skew${Bu[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}getProjectionStyles(s){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return p5;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=hl(s==null?void 0:s.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=hl(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!ro(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=h.animationValues||h.latestValues;this.applyTransformsToTarget(),u.transform=f5(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:f,y:w}=this.projectionDelta;u.transformOrigin=`${f.origin*100}% ${w.origin*100}% 0`,h.animationValues?u.opacity=h===this?(c=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in Ql){if(p[x]===void 0)continue;const{correct:b,applyTo:g}=Ql[x],v=u.transform==="none"?p[x]:b(p[x],h);if(g){const y=g.length;for(let S=0;S<y;S++)u[g[S]]=v}else u[x]=v}return this.options.layoutId&&(u.pointerEvents=h===this?hl(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var l;return(l=s.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Zy),this.root.sharedNodes.clear()}}}function g5(e){e.updateLayout()}function y5(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:i}=e.options,s=n.source!==e.layout.source;i==="size"?zt(h=>{const p=s?n.measuredBox[h]:n.layoutBox[h],f=Bt(p);p.min=r[h].min,p.max=p.min+f}):_S(i,n.layoutBox,r)&&zt(h=>{const p=s?n.measuredBox[h]:n.layoutBox[h],f=Bt(r[h]);p.max=p.min+f,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+f)});const l=Jo();Cs(l,r,n.layoutBox);const c=Jo();s?Cs(c,e.applyTransform(o,!0),n.measuredBox):Cs(c,r,n.layoutBox);const u=!LS(l);let d=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:p,layout:f}=h;if(p&&f){const w=Be();Ts(w,n.layoutBox,p.layoutBox);const x=Be();Ts(x,r,f.layoutBox),OS(w,x)||(d=!0),h.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=w,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function v5(e){ds&&oo.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function x5(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function w5(e){e.clearSnapshot()}function Zy(e){e.clearMeasurements()}function b5(e){e.isLayoutDirty=!1}function S5(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ev(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function k5(e){e.resolveTargetDelta()}function C5(e){e.calcProjection()}function T5(e){e.resetSkewAndRotation()}function P5(e){e.removeLeadSnapshot()}function tv(e,t,n){e.translate=Me(t.translate,0,n),e.scale=Me(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function nv(e,t,n,r){e.min=Me(t.min,n.min,r),e.max=Me(t.max,n.max,r)}function j5(e,t,n,r){nv(e.x,t.x,n.x,r),nv(e.y,t.y,n.y,r)}function N5(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const E5={duration:.45,ease:[.4,0,.1,1]},rv=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ov=rv("applewebkit/")&&!rv("chrome/")?Math.round:Ot;function iv(e){e.min=ov(e.min),e.max=ov(e.max)}function M5(e){iv(e.x),iv(e.y)}function _S(e,t,n){return e==="position"||e==="preserve-aspect"&&!R4(Qy(t),Qy(n),.2)}function A5(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const I5=BS({attachResizeListener:(e,t)=>Zs(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Wu={current:void 0},WS=BS({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Wu.current){const e=new I5({});e.mount(window),e.setOptions({layoutScroll:!0}),Wu.current=e}return Wu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),R5={pan:{Feature:K4},drag:{Feature:q4,ProjectionNode:WS,MeasureLayout:IS}};function sv(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,i=r[o];i&&Te.postRender(()=>i(t,xa(t)))}class D5 extends Kr{mount(){const{current:t}=this.node;t&&(this.unmount=RR(t,n=>(sv(this.node,n,"Start"),r=>sv(this.node,r,"End"))))}unmount(){}}class L5 extends Kr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=va(Zs(this.node.current,"focus",()=>this.onFocus()),Zs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function av(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),i=r[o];i&&Te.postRender(()=>i(t,xa(t)))}class O5 extends Kr{mount(){const{current:t}=this.node;t&&(this.unmount=FR(t,n=>(av(this.node,n,"Start"),(r,{success:o})=>av(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ch=new WeakMap,Vu=new WeakMap,F5=e=>{const t=Ch.get(e.target);t&&t(e)},B5=e=>{e.forEach(F5)};function _5({root:e,...t}){const n=e||document;Vu.has(n)||Vu.set(n,{});const r=Vu.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(B5,{root:e,...t})),r[o]}function W5(e,t,n){const r=_5(t);return Ch.set(e,n),r.observe(e),()=>{Ch.delete(e),r.unobserve(e)}}const V5={some:0,all:1};class H5 extends Kr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:i}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:V5[o]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,i&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),p=u?d:h;p&&p(c)};return W5(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(z5(t,n))&&this.startObserver()}unmount(){}}function z5({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const $5={inView:{Feature:H5},tap:{Feature:O5},focus:{Feature:L5},hover:{Feature:D5}},U5={layout:{ProjectionNode:WS,MeasureLayout:IS}},Th={current:null},VS={current:!1};function Y5(){if(VS.current=!0,!!rp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Th.current=e.matches;e.addListener(t),t()}else Th.current=!1}const G5=[...hS,lt,zr],q5=e=>G5.find(dS(e)),lv=new WeakMap;function K5(e,t,n){for(const r in t){const o=t[r],i=n[r];if(ut(o))e.addValue(r,o);else if(ut(i))e.addValue(r,Js(o,{owner:e}));else if(i!==o)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(o):s.hasAnimated||s.set(o)}else{const s=e.getStaticValue(r);e.addValue(r,Js(s!==void 0?s:o,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const cv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Q5{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:i,visualState:s},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=Rn.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,Te.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=s;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=l,this.blockInitialAnimation=!!i,this.isControllingVariants=Wc(n),this.isVariantNode=w1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:h,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in p){const w=p[f];c[f]!==void 0&&ut(w)&&w.set(c[f],!1)}}mount(t){this.current=t,lv.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),VS.current||Y5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Th.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){lv.delete(this.current),this.projection&&this.projection.unmount(),Hr(this.notifyUpdate),Hr(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Io.has(t),o=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&Te.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),i(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Mi){const n=Mi[t];if(!n)continue;const{isEnabled:r,Feature:o}=n;if(!this.features[t]&&o&&r(this.props)&&(this.features[t]=new o(this)),this.features[t]){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Be()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<cv.length;r++){const o=cv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i="on"+o,s=t[i];s&&(this.propEventSubscriptions[o]=this.on(o,s))}this.prevMotionValues=K5(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Js(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let o=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return o!=null&&(typeof o=="string"&&(cS(o)||eS(o))?o=parseFloat(o):!q5(o)&&zr.test(n)&&(o=sS(t,n)),this.setBaseTarget(t,ut(o)?o.get():o)),ut(o)?o.get():o}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const s=up(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(o=s[t])}if(r&&o!==void 0)return o;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!ut(i)?i:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Cp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class HS extends Q5{constructor(){super(...arguments),this.KeyframeResolver=fS}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ut(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function J5(e){return window.getComputedStyle(e)}class X5 extends HS{constructor(){super(...arguments),this.type="html",this.renderInstance=E1}readValueFromInstance(t,n){if(Io.has(n)){const r=Ep(n);return r&&r.default||0}else{const r=J5(t),o=(P1(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return MS(t,n)}build(t,n,r){fp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return yp(t,n,r)}}class Z5 extends HS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Be}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Io.has(n)){const r=Ep(n);return r&&r.default||0}return n=M1.has(n)?n:ap(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return R1(t,n,r)}build(t,n,r){pp(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,o){A1(t,n,r,o)}mount(t){this.isSVGTag=gp(t.tagName),super.mount(t)}}const e3=(e,t)=>cp(e)?new Z5(t):new X5(t,{allowProjection:e!==m.Fragment}),t3=PR({...C4,...$5,...R5,...U5},e3),K=VI(t3),zS=m.forwardRef(({...e},t)=>a.jsx("nav",{ref:t,"aria-label":"breadcrumb",...e}));zS.displayName="Breadcrumb";const $S=m.forwardRef(({className:e,...t},n)=>a.jsx("ol",{ref:n,className:le("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",e),...t}));$S.displayName="BreadcrumbList";const US=m.forwardRef(({className:e,...t},n)=>a.jsx("li",{ref:n,className:le("inline-flex items-center gap-1.5",e),...t}));US.displayName="BreadcrumbItem";const YS=m.forwardRef(({asChild:e,className:t,...n},r)=>{const o=e?Lb:"a";return a.jsx(o,{ref:r,className:le("transition-colors hover:text-foreground",t),...n})});YS.displayName="BreadcrumbLink";const GS=m.forwardRef(({className:e,...t},n)=>a.jsx("span",{ref:n,role:"link","aria-disabled":"true","aria-current":"page",className:le("font-normal text-foreground",e),...t}));GS.displayName="BreadcrumbPage";const qS=({children:e,className:t,...n})=>a.jsx("li",{role:"presentation","aria-hidden":"true",className:le("[&>svg]:size-3.5",t),...n,children:e??a.jsx(Wd,{})});qS.displayName="BreadcrumbSeparator";const n3=[{slug:"first-steps-lifestyle-beginners-guide",title:"Your First Steps Into the Lifestyle: A Beginner's Complete Guide",category:"Getting Started",excerpt:"Everything you need to know before taking your first steps into ethical non-monogamy, from communication basics to setting boundaries.",image:"https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"8 min read",publishedDate:"2025-01-15",forCouples:!0,forSingles:!0,tags:["beginners","getting started","communication","boundaries"],content:`
## Welcome to Your Journey

Taking your first steps into the lifestyle—whether that's ethical non-monogamy (ENM), swinging, BDSM, or polyamory—can feel both exciting and overwhelming. This guide will help you navigate those initial feelings and set you up for positive experiences.

## Understanding Your "Why"

Before diving in, take time to understand your motivations:

- **Curiosity**: Are you simply curious about what's out there?
- **Connection**: Are you seeking deeper connections or new types of relationships?
- **Exploration**: Do you want to explore aspects of your sexuality in a safe environment?
- **Adventure**: Are you looking for new experiences with your partner?

There's no wrong answer, but understanding your motivations helps you communicate them to potential partners and make informed decisions.

## The Foundation: Communication

Every successful lifestyle experience is built on clear, honest communication. Here's how to start:

### With Yourself
- Journal about your desires, fears, and boundaries
- Research different lifestyle options to understand what appeals to you
- Be honest about what you're comfortable with—and what you're not

### With Your Partner (if applicable)
- Choose a calm, private moment for initial conversations
- Use "I" statements: "I've been curious about..." rather than "We should try..."
- Listen without judgment to their responses
- Give them time to process—this might be new information

### With Potential Connections
- Be upfront about your experience level
- Clearly state your boundaries before any encounter
- Ask about their boundaries and expectations

## Setting Boundaries

Boundaries aren't restrictions—they're the framework that allows you to explore safely.

### Types of Boundaries

**Hard Limits**: Activities you will absolutely not engage in, no exceptions.
- These should be clearly communicated and never pressured

**Soft Limits**: Things you're hesitant about but might explore under the right circumstances.
- These can evolve over time with trust and experience

**Time Boundaries**: How much time you're willing to dedicate to lifestyle activities.

**Emotional Boundaries**: What level of emotional connection are you comfortable with?

## Starting Slow

There's no rush. Many newcomers find success by:

1. **Reading and researching** for several months before taking action
2. **Attending vanilla social events** at lifestyle clubs just to observe the environment
3. **Meeting for coffee first** with any potential connections
4. **Starting with same-room play** before trying separate experiences
5. **Taking breaks** to process experiences with your partner

## Red Flags to Watch For

As a newcomer, be alert to:

- People who pressure you to move faster than you're comfortable
- Anyone who dismisses your boundaries
- Couples or individuals who won't respect "no" or "slow down"
- People who won't discuss safer sex practices
- Anyone who discourages you from communicating with your partner

## Your First Experience Checklist

✓ Discussed expectations with any partners involved
✓ Established clear boundaries and safe words
✓ Chosen a safe, comfortable location
✓ Shared your plans with a trusted friend (for safety)
✓ Had recent STI testing and discussed sexual health
✓ Planned time for aftercare and debriefing

## After Your First Experience

No matter how it goes, give yourself grace:

- **It went well?** Celebrate, but don't rush into more immediately
- **Mixed feelings?** Totally normal. Journal about what worked and what didn't
- **Not what you expected?** That's valuable information. Reassess your interests

Remember: Many people in the lifestyle had awkward or imperfect first experiences. Growth comes from reflection and adjustment.

## Moving Forward

The lifestyle journey is personal and non-linear. Some people dive in enthusiastically; others take years to explore. Both approaches are valid. What matters is that every step feels right for you.

Welcome to the community. We're glad you're here.
    `},{slug:"how-to-start-swinging-couples-communication",title:"How to Start Swinging as a Couple: Communication First",category:"For Couples",excerpt:"Learn how to have the crucial conversations with your partner before exploring the swinging lifestyle together.",image:"https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read",publishedDate:"2025-01-12",forCouples:!0,forSingles:!1,tags:["couples","swinging","communication","getting started"],content:`
## The Conversation That Changes Everything

Bringing up swinging with your partner can feel daunting, but it doesn't have to be. The key is approaching the conversation with openness, patience, and zero pressure.

## Timing Matters

Choose your moment wisely:

**Good times:**
- During a relaxed evening at home
- On a weekend when you have time to talk
- After you've both had a good day
- During an intimate moment when you're feeling connected

**Bad times:**
- During an argument or period of relationship stress
- Right before bed when you're tired
- When either of you is distracted
- In public or with others around

## Starting the Conversation

Here are some gentle ways to open the dialogue:

> "I've been reading about couples who explore together, and I'm curious what you think about it."

> "I came across this article about ethical non-monogamy. Have you ever thought about that?"

> "I love our relationship and I've been thinking about ways we could add some adventure. Can we talk about fantasies?"

## What If They're Not Into It?

This is crucial: **if your partner isn't interested, respect that completely.**

- Thank them for listening
- Reassure them this doesn't change how you feel about the relationship
- Don't bring it up again unless they do
- Never pressure, guilt, or manipulate

Many partners who initially say no become curious later. Pressure guarantees they won't.

## If They're Open to Discussing

Great! Now take it slow:

### Phase 1: Fantasy Exploration
- Share fantasies without commitment to acting on them
- Watch ethical porn together that explores the topic
- Read about other couples' experiences
- Discuss what appeals and what doesn't

### Phase 2: Establishing Ground Rules
- What types of activities are okay? Soft swap? Full swap?
- Together only or separate play allowed?
- Any physical types that are off-limits?
- How will you handle it if one of you wants to stop?

### Phase 3: Research Together
- Explore lifestyle websites and apps together
- Read reviews of local clubs or events
- Join online communities to learn more
- Create a joint profile if you decide to proceed

## Essential Agreements

Before your first experience, agree on:

1. **The Safe Word**: A word that means "stop everything immediately"
2. **Check-In Protocol**: How often you'll check with each other during experiences
3. **Veto Power**: Either partner can end any situation, no questions asked
4. **Debrief Time**: When and how you'll discuss experiences afterward
5. **Privacy Rules**: What can be shared with others about your lifestyle activities

## Handling Jealousy

Jealousy may come up—that's normal. Prepare for it:

- **Acknowledge it**: "I felt jealous when..." is healthy communication
- **Explore the root**: Is it insecurity? Fear of loss? Comparison?
- **Reassure each other**: Extra affection and affirmation help
- **Adjust as needed**: If something triggers jealousy, change your approach

## Common Pitfalls to Avoid

❌ Rushing into experiences before you're both ready
❌ Using swinging to "fix" relationship problems
❌ Keeping secrets about your experiences
❌ Comparing yourself to others
❌ Forgetting to prioritize your relationship

## The Ongoing Conversation

Swinging isn't a one-time discussion—it's an ongoing dialogue. Schedule regular check-ins to discuss:

- How you're both feeling about recent experiences
- Whether boundaries need adjusting
- What you'd like to try next
- Any concerns or discomforts

## Remember

The goal isn't just to swing—it's to grow closer as a couple while exploring together. If at any point the lifestyle is pulling you apart rather than bringing you together, it's okay to pause or stop entirely.

Your relationship comes first, always.
    `},{slug:"navigating-lifestyle-single-person",title:"Navigating the Lifestyle as a Single Person",category:"For Singles",excerpt:"Tips and etiquette for singles entering ENM communities, whether you identify as a unicorn, solo poly, or are just exploring.",image:"https://images.unsplash.com/photo-1522098635833-216c03d81fbe?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"7 min read",publishedDate:"2025-01-10",forCouples:!1,forSingles:!0,tags:["singles","unicorn","solo poly","etiquette"],content:`
## Being Single in the Lifestyle

Whether you're a single woman (sometimes called a "unicorn"), a single man, or non-binary individual, there's a place for you in the lifestyle community. Here's how to navigate it successfully.

## Understanding Your Role Options

### The Unicorn
Single individuals (traditionally women) who play with couples. Called "unicorns" because they're considered rare and sought-after.

**Pros:**
- Very in demand
- Can be selective about partners
- Often welcomed at clubs and events

**Challenges:**
- "Unicorn hunters" may see you as a prop rather than a person
- May face pressure to satisfy both partners equally
- Your needs can be overlooked

### Solo Polyamory
Maintaining multiple romantic relationships without a "primary" partner.

**Pros:**
- Freedom to design relationships that work for you
- No one relationship takes priority
- Independence maintained

**Challenges:**
- Others may not understand your relationship style
- Scheduling can be complex
- May face judgment from monogamous and poly communities alike

### Single and Exploring
Not looking for committed relationships, just experiences.

**Pros:**
- Freedom to explore different dynamics
- No ongoing commitments
- Can try many different things

**Challenges:**
- Building trust takes more effort
- Some events restrict single attendance
- May be viewed with suspicion initially

## Single Men: Navigating Extra Challenges

Let's be real: single men often face more barriers in the lifestyle community. Here's how to overcome them:

### Build Your Reputation
- Be patient and respectful—always
- Get verified on platforms that offer it
- Ask satisfied partners if they'd be references
- Contribute positively to community discussions

### Manage Expectations
- Some clubs have limited single male entry or higher fees
- Couples may be cautious initially
- Quality connections take time to develop

### Stand Out Positively
- Read profiles thoroughly before reaching out
- Send thoughtful, personalized messages
- Respect boundaries enthusiastically
- Be an excellent communicator

## Etiquette for Singles

### At Events and Clubs
- Never assume someone is available
- Ask before touching—always
- Respect "no" the first time, every time
- Don't follow people around or hover
- Maintain good hygiene and presentation

### Online
- Be honest about being single in your profile
- Don't pretend to be part of a couple
- Respond to rejections gracefully
- Don't send unsolicited explicit photos

### With Couples
- Treat both partners as individuals
- Don't try to create division or competition
- Check in with both partners regularly
- Respect their relationship agreements

## Protecting Yourself

As a single person, you may be more vulnerable. Stay safe:

1. **Always meet in public first** for initial meetings
2. **Tell a friend** where you're going and when to expect you back
3. **Trust your gut**—if something feels off, leave
4. **Verify identities** through video chat before meeting
5. **Keep control** of your transportation
6. **Practice safer sex** consistently

## Finding Your Community

### Online Platforms
- Lifestyle-specific dating apps
- FetLife for kink-focused connections
- Reddit communities for advice and connections

### In Person
- Lifestyle clubs and events
- Munches (vanilla social gatherings for kinksters)
- Polyamory meetup groups
- LGBTQ+ spaces that are lifestyle-friendly

## Dealing with Couple Privilege

Couples often get priority in lifestyle spaces. This can be frustrating, but there are ways to work within the system:

- Build genuine friendships with couples
- Offer value beyond just physical availability
- Create your own social gatherings
- Find singles-friendly spaces and events

## Self-Care for Single Lifestylers

The lifestyle can be emotionally taxing for singles. Remember:

- **Your worth isn't measured by demand**: Slow periods don't reflect your value
- **Quality over quantity**: One great connection beats ten mediocre ones
- **Take breaks**: It's okay to step back when needed
- **Maintain vanilla friendships**: Keep connections outside the lifestyle

## You Belong Here

Despite the challenges, many singles find deep fulfillment in the lifestyle community. You bring unique value—your independence, your individual perspective, and your openness to connection.

Welcome, and enjoy the journey.
    `},{slug:"kink-101-bdsm-beginners",title:"Kink 101: Understanding BDSM for Beginners",category:"BDSM Basics",excerpt:"A safe and welcoming introduction to BDSM, covering consent, negotiation, and exploring your interests.",image:"https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"10 min read",publishedDate:"2025-01-08",forCouples:!0,forSingles:!0,tags:["BDSM","kink","beginners","consent","negotiation"],content:`
## What is BDSM?

BDSM is an acronym that encompasses several related practices:

- **B**ondage & **D**iscipline
- **D**ominance & **S**ubmission
- **S**adism & **M**asochism

Despite how it's often portrayed in media, BDSM is fundamentally about trust, communication, and the consensual exchange of power between adults.

## The Core Principles

### Consent
Everything in BDSM is consensual. Period. This means:
- All participants actively agree to activities
- Consent can be withdrawn at any time
- Consent is enthusiastic, not reluctant
- Consent is specific—agreeing to one thing doesn't mean agreeing to everything

### Communication
BDSM requires more communication than vanilla sex, not less:
- Discuss interests, limits, and boundaries before any scene
- Use safe words during play
- Debrief afterward about what worked and what didn't

### Safety
Physical and emotional safety are paramount:
- Learn proper techniques before trying activities
- Have safety tools (scissors for rope, etc.) accessible
- Start slow and build up intensity gradually
- Never play under the influence of substances

## Understanding Roles

### Dominant (Dom/Domme)
The partner who takes control during a scene:
- Guides the action and makes decisions
- Responsible for the submissive's safety and wellbeing
- Sets the tone and pacing
- Must be attentive and responsive to their partner

### Submissive (sub)
The partner who gives up control:
- Follows the dominant's direction
- Communicates limits clearly
- Uses safe words when needed
- Submission is a gift freely given, not taken

### Switch
Someone who enjoys both roles:
- May switch between scenes or within a scene
- May prefer certain roles with certain partners
- Equally valid as those who identify with one role

## Safe Words

A safe word is a predetermined word that immediately stops or pauses play.

**The Traffic Light System:**
- 🟢 **Green**: Everything is good, continue
- 🟡 **Yellow**: Slow down, check in, something's off
- 🔴 **Red**: Stop everything immediately

Choose a safe word that:
- You'll remember under stress
- Wouldn't naturally come up during play
- Both/all partners know and respect

## Types of BDSM Play

### Impact Play
Striking the body for pleasure (spanking, flogging, paddling)
- Start light and build up
- Avoid dangerous areas (spine, kidneys, neck)
- Discuss marks and bruising preferences

### Bondage
Restraint using rope, cuffs, or other materials
- Learn proper techniques to avoid nerve damage
- Always have safety shears accessible
- Check circulation regularly

### Sensation Play
Using temperature, textures, or other stimuli
- Blindfolds heighten other senses
- Ice, wax, feathers, etc.
- Generally lower risk for beginners

### Power Exchange
The psychological aspects of D/s dynamics
- Can range from bedroom-only to 24/7 dynamics
- Includes things like rules, protocols, and rituals
- The mental aspect is often more intense than physical play

## Negotiation: Before You Play

Every scene should be negotiated beforehand:

1. **Discuss interests**: What do you both want from this scene?
2. **Share limits**: What's absolutely off the table?
3. **Health considerations**: Injuries, conditions, triggers?
4. **Safe words**: Confirm what they are
5. **Aftercare needs**: What do you each need afterward?

## Aftercare: After You Play

Aftercare is the care given after a scene:

**Physical aftercare:**
- Water and snacks
- Blankets and warmth
- Treating any marks or bruises
- Physical closeness

**Emotional aftercare:**
- Words of affirmation
- Processing the experience
- Reassurance and connection
- Time together before separating

**Note:** Dominants need aftercare too! Topping can be emotionally and physically draining.

## Finding Your Interests

Not sure what you're into? Try:

- Taking online BDSM questionnaires together
- Reading erotica and noting what excites you
- Watching ethical BDSM porn for ideas
- Attending classes or workshops
- Joining online communities like FetLife

## Common Beginner Mistakes

❌ Rushing into intense activities without experience
❌ Copying what you've seen in porn (it's not realistic)
❌ Skipping negotiation or aftercare
❌ Assuming your partner's interests match yours
❌ Being too embarrassed to communicate

## Your Journey Begins

BDSM is a vast world with something for everyone. Take your time exploring, prioritize safety and consent, and enjoy discovering this side of yourself and your connections.

Welcome to the kink community.
    `},{slug:"is-polyamory-right-for-you",title:"Is Polyamory Right for You? Self-Reflection Questions",category:"Polyamory",excerpt:"Explore whether ethical non-monogamy aligns with your values, needs, and relationship goals.",image:"https://images.unsplash.com/photo-1522098635833-216c03d81fbe?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"5 min read",publishedDate:"2025-01-05",forCouples:!0,forSingles:!0,tags:["polyamory","ENM","self-reflection","relationships"],content:`
## Before You Decide

Polyamory isn't for everyone, and that's okay. This guide will help you explore whether it might be right for you through honest self-reflection.

## What Polyamory Is (and Isn't)

**Polyamory IS:**
- Multiple romantic/loving relationships with everyone's knowledge and consent
- Built on honesty, communication, and ethical behavior
- A valid relationship orientation for some people
- Hard work that requires significant emotional labor

**Polyamory ISN'T:**
- A way to fix a broken relationship
- Permission to cheat
- Just about sex
- Easier than monogamy
- An excuse to avoid commitment

## Self-Reflection Questions

### About Your Capacity

**1. How do you feel about sharing time and attention?**
In polyamory, your partners will have other relationships. Can you genuinely feel joy (compersion) when a partner is happy with someone else?

**2. How much emotional energy do you have?**
Multiple relationships require significant emotional investment. Are you someone with high emotional capacity, or do you find one relationship already draining at times?

**3. How do you handle scheduling complexity?**
Polyamory requires serious calendar management. Does complex scheduling stress you out or feel manageable?

### About Your Communication Skills

**4. How comfortable are you with difficult conversations?**
Polyamory requires constant communication about feelings, boundaries, and needs—even when it's uncomfortable.

**5. Can you articulate your needs clearly?**
Your partners won't be able to read your mind. Can you express what you need without expecting others to figure it out?

**6. How do you handle hearing hard truths?**
Partners will need to tell you things that might be difficult to hear. Can you receive feedback without becoming defensive?

### About Your Attachment Style

**7. How secure do you feel in relationships?**
Anxious attachment can be intensified by polyamory. Do you need constant reassurance, or can you feel secure even when a partner is with someone else?

**8. How do you respond to jealousy?**
Jealousy happens in polyamory. Can you recognize it, communicate about it, and work through it rather than being controlled by it?

### About Your Motivations

**9. Why are you considering polyamory?**
Healthy reasons:
- You've always felt capable of loving multiple people
- You want to explore different types of connection
- Your current relationship is strong and you want to expand together

Unhealthy reasons:
- Your partner wants it and you're afraid to say no
- You want to fix problems in your current relationship
- You've already developed feelings for someone else and want permission

**10. Are you considering this freely?**
Polyamory under pressure isn't polyamory—it's coercion. Is this genuinely your desire, or are you being pushed?

## Green Flags You Might Thrive

✓ You've always questioned monogamy, even before it was mainstream
✓ You experience compersion naturally
✓ You have strong communication skills and enjoy deep conversations
✓ You're secure in yourself and don't need a partner to feel complete
✓ You have the time and energy for multiple relationships
✓ You're excited by the idea, not just curious

## Red Flags to Pause

⚠️ You're doing this primarily to please a partner
⚠️ Your current relationship has significant unresolved issues
⚠️ You have untreated anxiety or jealousy issues
⚠️ You're trying to meet all your needs through relationships
⚠️ You expect polyamory to be easier than monogamy
⚠️ You're not willing to do the emotional work required

## There's No Rush

You don't have to decide today. Many people:
- Research for months or years before trying polyamory
- Start with opening up fantasies before actions
- Try it and decide it's not for them—and that's valid
- Identify as "poly curious" while they figure things out

## Next Steps If You're Interested

1. **Read more**: Books like "The Ethical Slut" and "Polysecure" are great resources
2. **Join communities**: Find local polyamory groups or online forums
3. **Talk to poly people**: Hear about real experiences, good and bad
4. **Consider therapy**: A poly-friendly therapist can help you explore
5. **Discuss with partners**: If you're coupled, start the conversation

## Remember

Polyamory is a valid choice, but so is monogamy. The goal is to find what genuinely works for you—not to fit into any particular box. Whatever you decide, make sure it's authentic to who you are.
    `},{slug:"managing-jealousy-couples-guide",title:"Managing Jealousy: A Couple's Guide",category:"For Couples",excerpt:"Practical strategies for couples to work through jealousy and strengthen their connection while exploring.",image:"https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"8 min read",publishedDate:"2025-01-03",forCouples:!0,forSingles:!1,tags:["couples","jealousy","communication","emotional wellness"],content:`
## Jealousy is Normal

Let's start here: feeling jealous doesn't mean you're failing at non-monogamy. Jealousy is a human emotion that even the most experienced lifestyle participants feel sometimes.

The goal isn't to eliminate jealousy—it's to understand it, communicate about it, and not let it control your actions.

## Understanding What Jealousy Really Is

Jealousy is usually a surface emotion covering deeper feelings:

### Fear of Loss
"Will they leave me for this person?"
- Rooted in attachment insecurity
- Addressed through reassurance and action

### Fear of Inadequacy
"Am I not enough?"
- Rooted in self-esteem issues
- Addressed through self-work and partner affirmation

### Fear of Missing Out
"They're having experiences I'm not"
- Rooted in comparison and scarcity thinking
- Addressed through reframing and creating your own experiences

### Fear of the Unknown
"What if something changes?"
- Rooted in anxiety about change
- Addressed through communication and gradual exposure

## The STOP Technique

When jealousy hits, try this:

**S - Stop**: Pause before reacting. Don't make decisions or accusations when emotions are high.

**T - Think**: What am I really feeling? What's the root cause? Is this about my partner or about me?

**O - Observe**: Notice the physical sensations without judgment. Where do you feel it in your body?

**P - Proceed**: Once calm, decide on a constructive next step—usually communication.

## Communicating About Jealousy

### Do's:
- Use "I" statements: "I feel jealous when..." not "You make me jealous when..."
- Be specific about triggers
- Ask for what you need: "I need extra reassurance today"
- Acknowledge your partner's patience
- Recognize jealousy as information, not accusation

### Don'ts:
- Blame your partner for your feelings
- Issue ultimatums when emotional
- Expect your partner to fix your jealousy for you
- Suppress jealousy until it explodes
- Use jealousy to control your partner's behavior

## Practical Jealousy Management Strategies

### Before Experiences

1. **Pre-game reassurance**: Spend quality time together before either of you engages with others
2. **Set check-in expectations**: When and how will you touch base?
3. **Discuss details**: Some couples want to know everything; others prefer less detail. Agree on what works.

### During Experiences

4. **Stay occupied**: Don't sit home spiraling. Plan activities you enjoy.
5. **Limited checking**: Checking your phone every 2 minutes increases anxiety. Set reasonable expectations.
6. **Self-soothing**: Use techniques like deep breathing, journaling, or calling a friend.

### After Experiences

7. **Reconnection rituals**: Plan something special together after experiences with others
8. **Debrief thoughtfully**: Share at an appropriate level for both of you
9. **Give it time**: Don't expect to feel 100% fine immediately

## The Jealousy Journal

Keep a jealousy journal to track:

- What triggered the jealousy?
- What was the underlying fear?
- Physical sensations you noticed
- How you coped
- What helped/didn't help
- What you might do differently next time

Over time, patterns emerge that help you understand and manage your triggers.

## When Your Partner is Jealous

If your partner expresses jealousy:

1. **Listen without defending**: Their feelings are valid even if you did nothing wrong
2. **Validate**: "I understand why you might feel that way"
3. **Reassure**: Remind them of your commitment and love
4. **Ask what they need**: "What would help you feel better?"
5. **Follow through**: If you commit to something, do it

## Compersion: The Opposite of Jealousy

Compersion is feeling joy when your partner experiences joy with someone else. It's not required, but it's possible:

- Start by noticing any positive feelings, however small
- Reframe: "My partner is happy" instead of "My partner is happy with someone else"
- Celebrate your partner's experiences as you would other good things in their life
- Don't force it—compersion often develops naturally over time

## When Jealousy Signals a Problem

Sometimes jealousy is telling you something important:

- **Your boundaries are being crossed**: This needs addressing
- **Your needs aren't being met**: Time to renegotiate
- **You're not ready for this**: It's okay to slow down or stop
- **There are relationship issues to address**: The lifestyle can amplify existing problems

## Seeking Help

Consider couples therapy if:
- Jealousy is causing frequent conflict
- You can't communicate about it productively
- It's affecting your mental health
- You're considering ending the relationship

Look for a therapist who is lifestyle-aware or ENM-friendly.

## Progress, Not Perfection

Jealousy management is a skill that develops over time. Celebrate small wins, be patient with yourselves, and remember: working through jealousy together can actually strengthen your bond.

You're not alone in this. Every couple in the lifestyle has been where you are.
    `}],r3=[{slug:"how-to-set-boundaries-open-relationships",title:"How to Set Boundaries in Open Relationships",category:"How To",excerpt:"Clear communication and defined boundaries are the foundation of healthy ENM relationships.",image:"https://images.unsplash.com/photo-1586380951230-e6703d9f6833?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read",publishedDate:"2025-01-14",tags:["boundaries","ENM","communication","relationships"],content:`
## Why Boundaries Matter

In ethical non-monogamy, boundaries are the infrastructure that makes everything work. They're not restrictions—they're agreements that create safety and trust.

## Types of Boundaries

### Physical Boundaries
- What sexual activities are okay with others?
- Are certain acts reserved for primary partners?
- What about kissing, cuddling, or other physical intimacy?
- What safer sex practices are required?

### Emotional Boundaries
- Is falling in love with others allowed?
- How much emotional intimacy with others is comfortable?
- Are certain topics reserved for your primary relationship?

### Time Boundaries
- How often can you see other partners?
- Are certain days/times reserved for your relationship?
- How much notice is needed before a date?

### Communication Boundaries
- How much do you want to know about other relationships?
- When do you need to be informed about new partners?
- What's private vs. shared information?

### Social Boundaries
- Do you meet each other's other partners?
- Can other partners attend social events?
- What do you tell friends and family?

## How to Set Boundaries

### Step 1: Self-Reflection
Before talking to partners, understand your own needs:
- What makes you feel safe?
- What are your dealbreakers?
- Where are you flexible?
- What do you need to feel secure?

### Step 2: Have the Conversation
- Choose a calm, private moment
- Each person shares their needs and limits
- Listen without judgment
- Ask clarifying questions

### Step 3: Negotiate
- Find where your boundaries align
- Discuss areas of difference
- Look for compromises that work for everyone
- Some things may be non-negotiable—that's okay

### Step 4: Document
- Write down your agreements
- Be specific: "Check in by midnight" not "Check in sometime"
- Review and sign if that helps you both commit

### Step 5: Revisit Regularly
- Boundaries can evolve as relationships grow
- Schedule regular check-ins (monthly or quarterly)
- Be open to renegotiating as needed

## Communicating Boundaries

**Clear and direct:**
> "I need you to text me before any physical intimacy with someone new."

**Using "I" statements:**
> "I feel anxious when I don't know where you are, so I need a check-in text on date nights."

**Non-judgmental:**
> "Overnights with others don't work for me right now" not "Only trashy people do overnights."

## When Boundaries Are Crossed

It will happen eventually. Here's how to handle it:

1. **Address it promptly**: Don't let resentment build
2. **Assume good intent**: Most boundary violations are accidental
3. **Express impact**: "When X happened, I felt Y"
4. **Discuss repair**: What does the person who crossed need to do?
5. **Prevent recurrence**: What systems can prevent this in the future?

## Boundaries vs. Rules

**Boundaries** are about your own behavior and needs:
> "I need to know when you have sex with someone new."

**Rules** try to control your partner's behavior:
> "You're not allowed to have sex without asking me first."

Healthy boundaries focus on what you need, not controlling others.

## Common Boundary Mistakes

❌ Setting boundaries you don't actually want just to seem "cool"
❌ Agreeing to boundaries you know you can't keep
❌ Using boundaries as punishment
❌ Changing boundaries without discussion
❌ Having different rules for yourself vs. your partner

## Remember

Boundaries protect relationships—they don't limit them. Clear boundaries actually create more freedom because everyone knows what's okay and what's not.

Your boundaries are valid. Communicate them clearly, enforce them consistently, and don't apologize for having needs.
    `},{slug:"how-to-have-the-talk-partner",title:"How to Have 'The Talk' With Your Partner",category:"How To",excerpt:"A step-by-step guide to opening up the conversation about exploring ethical non-monogamy.",image:"https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"8 min read",publishedDate:"2025-01-12",tags:["communication","couples","ENM","conversation"],content:`
## The Conversation That Changes Everything

Bringing up non-monogamy with a monogamous partner is one of the most nerve-wracking conversations you may ever have. This guide will help you prepare.

## Before the Conversation

### Know Your Why
- Why do you want to explore non-monogamy?
- What do you hope to gain?
- What's missing (if anything) in your current relationship?
- Is this a need or a desire?

### Research First
- Understand the different types of ENM
- Know what you're actually proposing
- Be prepared to answer questions
- Have resources ready to share

### Prepare for Outcomes
- Best case: They're open to discussing it
- Neutral case: They need time to process
- Challenging case: They're hurt or defensive
- You need to be prepared for all three

## Choosing the Right Moment

**Good times:**
- When you're both relaxed and connected
- After a good day together
- During a dedicated conversation time
- When you have privacy and won't be interrupted

**Bad times:**
- During conflict or stress
- When either of you is tired or distracted
- Right before an important event
- After they've had a bad day

## How to Start

### Opening Lines That Work:

> "There's something I've been thinking about that I'd like to share with you. Is this a good time for a deeper conversation?"

> "I want to talk about something that's important to me, and I want you to know that our relationship comes first."

> "I've been doing some reading about different relationship styles, and I'd love to hear your thoughts."

### What NOT to Say:

❌ "I've been wanting to sleep with other people."
❌ "I met someone I want to date."
❌ "I need this or I can't stay."
❌ "Everyone's doing it these days."

## During the Conversation

### Do:
- Be honest but gentle
- Listen more than you talk
- Acknowledge their feelings
- Answer questions honestly
- Give them time to process
- Emphasize your commitment to them

### Don't:
- Pressure for an immediate answer
- Get defensive if they react negatively
- Make them feel inadequate
- Present it as already decided
- Mention specific people you want to date

## Handling Different Reactions

### If They're Interested:
- Don't rush! Take time to discuss
- Start researching together
- Consider counseling to navigate the transition
- Go slowly—there's no deadline

### If They Need Time:
- Give it without pressure
- Let them come to you with questions
- Offer resources but don't push
- Continue showing love and commitment

### If They React Negatively:
- Stay calm and don't get defensive
- Validate their feelings: "I understand this is a lot"
- Don't try to convince them in the moment
- Ask if you can revisit the conversation later
- Be prepared that they may never be interested

## Follow-Up Conversations

This is rarely a one-time discussion:

1. **Check in**: "How are you feeling about our conversation?"
2. **Answer questions**: As they arise over days/weeks
3. **Share resources**: Articles, books, podcasts
4. **Give space**: Don't bring it up every day
5. **Reassure**: Continue showing love and commitment

## If They Say No

A "no" requires you to make a choice:

- **Accept it**: Monogamy is the agreement you made. Can you happily continue?
- **Revisit later**: Some people change their minds over time (but don't count on it)
- **Evaluate the relationship**: If this is a fundamental need, you may be incompatible

What's NOT acceptable:
- Cheating
- Pressuring or manipulating
- Making them feel guilty
- Having the lifestyle without their knowledge

## Professional Support

Consider working with a couples therapist who:
- Is ENM-friendly or knowledgeable
- Can help you communicate effectively
- Provides a safe space for difficult emotions
- Doesn't have a bias toward monogamy or non-monogamy

## Remember

This conversation is about opening dialogue, not getting a particular outcome. Your partner deserves honesty, time, and respect regardless of what they decide.

However it goes, you'll know you were authentic and gave your relationship the chance to grow—however that looks for you both.
    `},{slug:"how-to-navigate-first-play-party",title:"How to Navigate Your First Play Party",category:"How To",excerpt:"Everything you need to know before attending your first lifestyle event or play party.",image:"https://images.unsplash.com/photo-1522098635833-216c03d81fbe?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"10 min read",publishedDate:"2025-01-10",tags:["play party","events","lifestyle","etiquette"],content:`
## Your First Play Party

Attending your first lifestyle party or event can be exciting and nerve-wracking. This guide will help you feel prepared and confident.

## What is a Play Party?

A play party is a social gathering where lifestyle activities can take place. They range from:

- **House parties**: Intimate gatherings in private homes
- **Club events**: Organized events at dedicated lifestyle venues
- **Hotel takeovers**: Events in rented hotel spaces
- **Themed parties**: Events with specific dress codes or themes

## Before You Go

### Research the Event
- What's the dress code?
- What's the vibe? (couples-focused, BDSM, swinger, mixed?)
- What amenities are available?
- What's the single policy?
- Is there an application or verification process?

### Prepare with Your Partner (if applicable)
- Discuss expectations and boundaries
- Establish a check-in system
- Agree on a signal to leave
- Talk about what you're open to
- Discuss how to handle approaches from others

### Practical Preparation
- Grooming and hygiene (freshly showered, etc.)
- Pack a bag with:
  - Condoms and safer sex supplies
  - Any toys you might want
  - A change of clothes
  - Cash for tips/entry
  - Breath mints
  - ID

## What to Wear

**For Women/Femmes:**
- Lingerie, club wear, or sexy costumes (depends on theme)
- Comfortable heels or bring backup shoes
- Check dress code for colors (some parties have rules)

**For Men/Mascs:**
- Nice pants/jeans and a button-down shirt minimum
- Some parties require certain dress codes
- Underwear matters if clothes might come off

**Everyone:**
- You can arrive in vanilla clothes and change
- When in doubt, dress up rather than down
- Check the specific event's requirements

## At the Party

### First Hour

1. **Check in and pay**: Follow the entry process
2. **Get oriented**: Take a tour if offered, find bathrooms and exits
3. **Get a drink**: Settle your nerves (but stay sober enough to consent)
4. **Observe**: Watch how others interact before joining in
5. **Socialize**: Start with vanilla conversation in common areas

### Making Connections

- **Start with conversation**: Don't lead with sexual interest
- **Read body language**: Is this person/couple open to chatting?
- **Introduce yourselves**: First names are usually fine
- **Share your experience level**: "This is our first party" is okay to say
- **Listen for invitations**: Wait to be invited to play or to private areas

### Consent at Parties

**Always ask before:**
- Touching anyone
- Joining a scene or group
- Watching people up close
- Taking photos (almost always prohibited anyway)

**"No" is a complete sentence:**
- Respect rejection immediately
- Don't ask why or try to negotiate
- Thank them and move on gracefully

## Party Etiquette

### Do's:
✓ Be friendly and approachable
✓ Respect others' space and scenes
✓ Clean up after yourself
✓ Thank your hosts
✓ Tip staff if applicable
✓ Follow the rules

### Don'ts:
✗ Stare at people playing
✗ Touch without consent
✗ Get too intoxicated
✗ Pressure anyone
✗ Share details about attendees outside the party
✗ Take photos or video

## If You Want to Play

### Starting Small
- Same-room play (with your partner while others are nearby)
- Soft touching or kissing with others
- Watching scenes (from an appropriate distance)

### Communicating Interest
- "Would you like to join us in the play area?"
- "We're interested in getting to know you better—are you open to that?"
- "We think you're both attractive. What are you looking for tonight?"

### During Play
- Check in with your partner regularly
- Use safe words
- Stop immediately if anyone says stop
- Aftercare afterward

## If You Don't Want to Play

That's completely okay! Many people attend parties just to:
- Socialize with like-minded people
- Enjoy the atmosphere
- Build connections for future dates
- Get comfortable before playing

You're not obligated to do anything. "We're just watching tonight" is perfectly acceptable.

## After the Party

### Debrief with Your Partner
- What did you enjoy?
- What was uncomfortable?
- What would you do differently?
- Would you go again?

### Follow Up with Connections
- Exchange contact info for people you clicked with
- Don't be a stranger if you made friends
- Some lasting connections form at these events

### Self-Care
- You might feel tired, excited, overwhelmed, or all three
- Take time to process
- Don't rush to another event

## Final Thoughts

Your first play party is about exploration and discovery. There's no pressure to do anything except be respectful and have fun at whatever level works for you.

Enjoy the experience!
    `},{slug:"how-to-practice-safe-kink",title:"How to Practice Safe Kink",category:"How To",excerpt:"Essential safety practices for BDSM play, from negotiation to aftercare.",image:"https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"7 min read",publishedDate:"2025-01-08",tags:["BDSM","safety","kink","consent"],content:`
## Safe, Sane, and Consensual

The BDSM community has long held "Safe, Sane, and Consensual" (SSC) or "Risk-Aware Consensual Kink" (RACK) as guiding principles. Here's how to put them into practice.

## Before Play: Negotiation

### What to Discuss:
- **Interests**: What do you both want to try?
- **Experience levels**: How practiced are you with these activities?
- **Hard limits**: What's absolutely off the table?
- **Soft limits**: What might be okay with discussion?
- **Health concerns**: Injuries, conditions, medications, triggers?
- **Safe words**: What signals stop or slow down?
- **Aftercare needs**: What do you each need afterward?

### Negotiation Tools:
- Yes/No/Maybe lists
- BDSM checklists (available online)
- Verbal discussion
- Written contracts (for ongoing dynamics)

## Physical Safety

### General Principles
- **Learn before you do**: Get education on techniques
- **Start slow**: Build intensity gradually
- **Stay sober**: Substances impair judgment
- **Check in frequently**: "How are you doing?"
- **Have safety equipment ready**: Scissors, keys, first aid

### Impact Play Safety
- Safe areas: Buttocks, upper thighs, upper back
- Avoid: Spine, kidneys, neck, joints, tailbone
- Start light and build
- Check in about pain vs. injury
- Know the difference between "good" and "bad" pain

### Bondage Safety
- **Never leave someone bound alone**
- **Safety shears** must be within reach
- Check circulation every 15-20 minutes
- Avoid pressure on joints and nerves
- Have backup keys for locks
- Learn proper techniques from experienced practitioners

### Breath Play Warning
Breath play (choking, etc.) carries significant risk of death or brain damage. If you choose to engage:
- Understand you cannot make it "safe"—only "safer"
- Never restrict blood flow to the brain
- Never use hands around the neck
- Have someone trained in CPR present
- Know the warning signs of distress

## Emotional Safety

### Creating Trust
- Build rapport before intense play
- Start with lower-intensity activities
- Honor boundaries without question
- Be honest about your experience level
- Follow through on what you've negotiated

### Watching for Distress
- Non-verbal signs of distress:
  - Sudden silence or stillness
  - Changes in breathing
  - Tensing or pulling away
  - Tears or shaking
- Check in verbally if you notice these signs

## Safe Words

### The Traffic Light System:
- 🟢 **Green**: Everything's good
- 🟡 **Yellow**: Slow down, I need a moment
- 🔴 **Red**: Stop everything immediately

### Non-verbal Safe Words:
For gagged play or when speaking is difficult:
- Dropping a held object
- Specific hand signals
- Tapping out (like in wrestling)
- Grunting patterns

### When Safe Words Are Used:
- Stop IMMEDIATELY
- No questions, no negotiating
- Check in on your partner
- Provide aftercare
- Discuss later when both are recovered

## Aftercare

### Physical Aftercare
- Water and snacks (play can be dehydrating)
- Blankets for temperature regulation
- First aid for any marks
- Physical closeness if desired
- Time to rest

### Emotional Aftercare
- Words of affirmation
- Reassurance and validation
- Processing the experience together
- Checking in over the following days

### Dom/Top Aftercare
Tops and dominants need aftercare too:
- Processing any intense emotions
- Reassurance they were a good partner
- Physical comfort
- Time to decompress

## Drop: What It Is and How to Handle It

"Drop" is a period of low mood or physical fatigue after intense play:

### Sub Drop
- Can occur hours or days after play
- Symptoms: sadness, lethargy, irritability
- Treatment: self-care, check-ins with partner, time

### Dom Drop
- Often overlooked but equally real
- Symptoms: guilt, doubt, emotional exhaustion
- Treatment: reassurance from partner, self-compassion

## Learning More

Safe kink requires ongoing education:
- Attend workshops and classes
- Read books by experienced practitioners
- Join communities like FetLife for knowledge sharing
- Find a mentor
- Practice skills on yourself or inanimate objects first

## When Things Go Wrong

If an injury occurs:
1. Stop play immediately
2. Assess the injury
3. Seek medical attention if needed
4. Be honest with medical professionals (they've seen everything)
5. Process emotionally together
6. Discuss what happened and how to prevent it

## Final Thoughts

Safe kink is about maximizing pleasure while minimizing risk. It requires education, communication, and ongoing attention to both physical and emotional wellbeing.

Play safe, and have fun.
    `},{slug:"how-to-create-dating-profile-stands-out",title:"How to Create a Dating Profile That Stands Out",category:"How To",excerpt:"Tips for crafting an authentic and attractive profile on lifestyle dating apps.",image:"https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"5 min read",publishedDate:"2025-01-06",tags:["dating","profile","apps","tips"],content:`
## Standing Out in the Lifestyle

Your profile is your first impression. In a sea of profiles, here's how to create one that attracts the right connections.

## Photos That Work

### Do Include:
- Clear face photos (at least one)
- Full body shots
- Photos that show your personality
- Recent photos (within the last year)
- Photos where you look happy and approachable

### Do NOT Include:
- All blurry or dark photos
- Only bathroom mirror selfies
- Explicit photos as your main pics
- Photos with exes cropped out
- Photos from 10 years ago

### For Couples:
- Include photos together AND individually
- Make sure both people are equally visible
- Show your dynamic and connection
- Have each person choose their own photos

## Writing Your Bio

### What to Include:
- What you're looking for (friends, play partners, relationships?)
- Your experience level
- Your interests in and out of the lifestyle
- What makes you unique
- Your availability and situation

### Examples of Good Bios:

**Individual:**
> "Curious single exploring the lifestyle. Software developer by day, amateur chef by night. Looking for connections that start with great conversation. ENM-curious and open to learning. Not looking for: pushy people or those in secret situations."

**Couple:**
> "Married 8 years, in the lifestyle for 2. She's an extrovert who loves making new friends; he's more reserved but warms up quickly. Looking for other couples for drinks and seeing where things go. No pressure, good communication required."

### What to Avoid:
- Negativity: "Don't message me if..."
- Vagueness: "Ask me anything"
- Sexual demands: Leading with explicit requests
- Dishonesty: About your situation, status, or photos
- Desperation: Coming on too strong

## Your Interests/Preferences Section

### Be Honest About:
- Your actual interests (not what you think sounds good)
- Your experience level
- What you're NOT into (hard limits)
- What you might be open to (soft limits)

### Be Specific:
❌ "Open to anything"
✓ "Interested in soft swap, curious about full swap with the right couple"

❌ "Into kink"
✓ "Enjoy light bondage, sensation play, and D/s dynamics"

## Messaging Tips

### First Messages That Work:
- Reference something specific from their profile
- Ask a question they'd enjoy answering
- Be friendly, not sexual (initially)
- Show you read their profile

### Example:
> "Hi [Name], I noticed you mentioned you're into hiking—we are too! What's your favorite trail in the area? We're also pretty new to the lifestyle and appreciated how honest you were about being beginners."

### Messages That Get Ignored:
- "Hey" or "Hi there"
- Copy-paste messages
- Immediately sexual messages
- Super long essays
- Messages that show you didn't read their profile

## Verification Tips

- Complete platform verification if available
- Link to other social media if comfortable
- Be willing to video chat before meeting
- Provide references if asked (and if you have them)

## Red Flags in Others' Profiles

Watch out for:
- No photos or only body parts
- Vague about their situation
- "Discreet" married people (cheating isn't ENM)
- Profiles that seem too good to be true
- Pushy or aggressive communication

## Maintaining Your Profile

- Update photos regularly
- Revise your bio as your interests evolve
- Respond to messages in a timely way
- Be active on the platform
- Remove the profile if you're no longer looking

## Remember

The goal is to attract people you're actually compatible with—not to appeal to everyone. Be authentic, be clear about what you want, and the right connections will come.

Happy matching!
    `},{slug:"how-to-handle-jealousy-enm",title:"How to Handle Jealousy in ENM",category:"How To",excerpt:"Practical strategies for recognizing, processing, and working through jealousy.",image:"https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"9 min read",publishedDate:"2025-01-04",tags:["jealousy","ENM","emotional wellness","relationships"],content:`
## Jealousy is Normal

First, let's normalize this: jealousy happens in ethical non-monogamy. Even experienced practitioners feel it sometimes. The goal isn't to never feel jealous—it's to handle jealousy constructively.

## Understanding Jealousy

Jealousy is typically a secondary emotion covering primary fears:

### Fear of Abandonment
"They'll leave me for someone better"
- Rooted in attachment anxiety
- Often from past experiences or childhood

### Fear of Inadequacy
"I'm not enough for them"
- Rooted in low self-esteem
- Comparison with others

### Fear of Missing Out
"They're having experiences without me"
- Rooted in scarcity thinking
- Feeling left out

### Fear of the Unknown
"What if everything changes?"
- Rooted in anxiety about change
- Loss of control

## Recognizing Jealousy in Your Body

Jealousy often shows up physically before we name it:
- Tight chest or stomach
- Racing heart
- Clenched jaw or fists
- Restlessness
- Difficulty focusing

Noticing these sensations helps you catch jealousy early.

## In the Moment: The STOP Technique

**S - Stop**: Don't react immediately. Pause.

**T - Think**: What am I feeling? What's underneath the jealousy?

**O - Observe**: Notice body sensations without judgment.

**P - Proceed**: Choose a constructive response.

## Processing Jealousy

### Step 1: Name It
Say to yourself or your partner: "I'm feeling jealous." This simple acknowledgment reduces its power.

### Step 2: Get Curious
Ask yourself:
- What specifically triggered this?
- What am I afraid of?
- Is this about my partner or about me?
- Is my fear realistic?

### Step 3: Self-Soothe
- Deep breathing
- Grounding exercises
- Physical movement
- Journaling
- Calling a supportive friend

### Step 4: Communicate
When calm, share with your partner:
- "I felt jealous when X happened"
- "I think it's because I'm afraid of Y"
- "What I need is Z"

### Step 5: Request (Don't Demand)
You can ask for reassurance or adjustments, but your partner isn't obligated to change their behavior to manage your emotions.

## Preventive Strategies

### Build Self-Worth
- Your value doesn't decrease because your partner values others
- Invest in your own interests and growth
- Remember what makes you uniquely you

### Strengthen Your Relationship
- Quality time together
- Regular check-ins
- Physical affection
- Shared experiences

### Create Positive Associations
- Plan something nice for yourself when your partner has a date
- Reframe: "My partner is happy" instead of "My partner is with someone else"
- Practice gratitude for your relationship

### Adjust Agreements If Needed
If certain situations consistently trigger intense jealousy:
- Discuss adjusting boundaries
- Slow down the pace
- Get more information (or less—whatever helps)

## When Jealousy Is Information

Sometimes jealousy signals something real:

- **Your needs aren't being met**: Address this directly
- **Boundaries are being pushed**: Reinforce them
- **Something feels unfair**: Renegotiate agreements
- **Your partner is being inconsiderate**: Have a conversation
- **You're not ready for this pace**: It's okay to slow down

## Compersion: Jealousy's Opposite

Compersion is feeling joy when your partner is happy with someone else. Tips for developing it:

- Start by noticing any positive feelings, however small
- Remind yourself that love isn't zero-sum
- See your partner's joy as a gift to you both
- Don't force it—compersion often grows naturally

## When to Seek Help

Consider therapy if:
- Jealousy is constant or overwhelming
- It's causing significant relationship conflict
- You're unable to function during partner's dates
- Jealousy triggers controlling behaviors
- Past trauma is being activated

Look for a therapist who understands ENM.

## What NOT to Do

❌ Pretend you're not jealous
❌ Blame your partner for your feelings
❌ Use jealousy to control their behavior
❌ Compare yourself to metamours
❌ Make major decisions while triggered

## Final Thoughts

Jealousy doesn't mean you're bad at non-monogamy. It means you're human. With practice, you'll learn to experience jealousy without being controlled by it.

Be patient with yourself. This is a skill that develops over time.
    `},{slug:"how-to-find-local-community",title:"How to Find Your Local Community",category:"How To",excerpt:"Discover how to connect with lifestyle communities in your area safely and authentically.",image:"https://images.unsplash.com/photo-1522098635833-216c03d81fbe?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read",publishedDate:"2025-01-02",tags:["community","local","events","connections"],content:`
## Finding Your People

One of the best parts of the lifestyle is the community. Here's how to find your local scene.

## Online Starting Points

### Lifestyle-Specific Platforms
- **SPICE** (coming soon!): Connect with verified members
- **SDC**: Large swinger community
- **Kasidie**: Active in many regions
- **SLS (SwingLifestyle)**: One of the oldest platforms
- **Feeld**: Good for ENM and kink
- **3Fun**: Popular threesome-focused app

### Kink/BDSM Platforms
- **FetLife**: The Facebook of kink—great for finding events
- **Recon**: For gay leather/fetish community
- **KinkD**: Dating app for kinksters

### Polyamory-Specific
- **OKCupid**: Has robust poly options
- **#open**: ENM-focused app
- **Polyamory Facebook groups** (search your city)

## Finding Local Events

### Types of Events

**Munches**: Vanilla social gatherings for kinky people
- Usually at restaurants or bars
- No play, just conversation
- Great for newcomers
- Search FetLife for local munches

**Meet & Greets**: Social events hosted by lifestyle clubs or groups
- Low-pressure introduction to the community
- Often at vanilla venues
- Good for networking

**Clubs & Parties**: Dedicated lifestyle venues or events
- On-premise play usually available
- Various themes and vibes
- Usually require vetting or membership

**Workshops & Classes**: Educational events
- Learn skills (rope, impact, communication)
- Meet like-minded people
- Often good for singles

### Where to Find Events
- FetLife events section
- Lifestyle platform event calendars
- Club websites and newsletters
- Local Facebook groups
- Reddit (r/swingers, r/polyamory, local subreddits)
- Word of mouth once you know people

## Vetting Communities and Events

### Green Flags:
✓ Clear consent policies
✓ Established reputation in the community
✓ Responsive organizers
✓ Verification or screening process
✓ Positive reviews from multiple sources

### Red Flags:
⚠️ No consent policies
⚠️ Pressure to participate
⚠️ Unable to verify legitimacy
⚠️ Very new with no references
⚠️ Bad reviews or warning posts

## Making Connections

### At Events
- Introduce yourself warmly
- Ask people about their experience in the community
- Exchange contact info with people you click with
- Follow up within a few days

### Online
- Join local groups and participate in discussions
- Be helpful and positive in community spaces
- Attend virtual events and socials
- Don't just lurk—engage

### Building Reputation
- Be consistent and reliable
- Follow through on commitments
- Be respectful of everyone, even those you're not interested in
- Don't gossip or share private information
- Get involved: volunteer, help organize, contribute

## If Your Area is Small

### Options:
- Look for events in nearby larger cities
- Travel for bigger gatherings
- Host your own small events
- Build a private network of like-minded people
- Engage heavily in online communities
- Consider hosting virtual events

## Safety Considerations

### Protecting Your Privacy
- Use a separate email for lifestyle accounts
- Be careful with face photos until you trust platforms
- Don't share identifying information publicly
- Consider a lifestyle-only phone number

### Vetting Individuals
- Meet in public first
- Verify through video chat
- Check for references in the community
- Trust your instincts

## Getting Involved

Once you're established:
- Consider volunteering at events
- Host your own gatherings
- Mentor newcomers
- Contribute to online discussions
- Help build the community you want to see

## Remember

Finding your community takes time. Be patient, be authentic, and the right connections will come. The lifestyle community is generally welcoming to newcomers who approach with respect and genuine interest.

See you out there!
    `},{slug:"how-to-negotiate-scene",title:"How to Negotiate a Scene",category:"How To",excerpt:"A comprehensive guide to BDSM scene negotiation for beginners and experienced players.",image:"https://images.unsplash.com/photo-1586380951230-e6703d9f6833?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"8 min read",publishedDate:"2024-12-28",tags:["BDSM","negotiation","scenes","consent"],content:`
## The Art of Scene Negotiation

Negotiation is where good BDSM experiences are built. This conversation sets you up for satisfying, safe play.

## When to Negotiate

- Before any new scene with any partner
- When trying new activities with existing partners
- When circumstances change (health, emotions, relationship)
- When significant time has passed since last play

## What to Discuss

### 1. Desires and Interests
- What do you each want from this scene?
- What activities are you hoping for?
- What's the desired intensity level?
- What kind of dynamic or energy?

### 2. Experience and Skill
- How experienced are you with these activities?
- What's your skill level (especially for tops)?
- Any activities you're new to?
- Any areas where you need to go slow?

### 3. Hard and Soft Limits
**Hard limits**: Non-negotiable no's
- Activities you will not do under any circumstances
- Body parts that are off-limits
- Words or scenarios that are dealbreakers

**Soft limits**: Maybe's with conditions
- Things you might try with the right person/circumstances
- Areas where you need to warm up
- Activities requiring extra communication

### 4. Health and Safety
- Injuries, chronic conditions, or disabilities
- Medications that affect play
- Mental health considerations (triggers, trauma)
- STI status and safer sex requirements
- Panic responses or past bad experiences

### 5. Safe Words and Signals
- Verbal safe words (red/yellow/green or custom)
- Non-verbal signals (for gagging or speech restriction)
- How safe words will be responded to

### 6. Aftercare Needs
- What do you each need after play?
- Physical comfort (water, blankets, snacks)
- Emotional care (cuddling, words, space)
- Time together vs. alone time
- Check-ins in the following days

## The Negotiation Conversation

### Setting
- Private and comfortable
- Sober and rested
- Not during sexual activity
- Enough time to be thorough

### Tone
- Honest and direct
- Non-judgmental
- Curious, not interrogating
- Collaborative, not adversarial

### Sample Questions
**To ask your partner:**
- "What are you hoping to experience today?"
- "What's something that would make this amazing for you?"
- "Is there anything you definitely don't want?"
- "How are you feeling emotionally right now?"
- "What do you need from me afterward?"

**To share:**
- "I'm really excited about trying..."
- "I need you to know that [limit] is off the table for me."
- "I might need to pause if I get overwhelmed—I'll say yellow."
- "Afterward, I usually need [aftercare need]."

## Negotiation Tools

### Yes/No/Maybe Lists
Go through a checklist of activities and mark:
- Yes: I want to do this
- No: I will not do this
- Maybe: I might be interested under certain conditions

### The 1-5 Scale
Rate activities on interest and experience:
- 1: No interest / No experience
- 5: Very interested / Very experienced

Compare ratings to find compatible activities.

### Written Agreements
For ongoing dynamics, write out:
- Rules and expectations
- Limits and boundaries
- Protocols and rituals
- Review periods and renegotiation terms

## Common Negotiation Mistakes

❌ Being too shy to ask important questions
❌ Assuming you know your partner's limits
❌ Agreeing to things you're not comfortable with
❌ Forgetting to discuss aftercare
❌ Rushing through negotiation to get to play
❌ Not being honest about experience level
❌ Assuming one negotiation covers all future play

## During the Scene

Negotiation doesn't end when play begins:
- Check in verbally: "How are you doing?"
- Watch for non-verbal cues
- Honor safe words immediately
- Adjust based on what's happening
- It's okay to pause and discuss

## After the Scene

### Immediate
- Provide agreed-upon aftercare
- Check in on physical and emotional state
- Stay present and connected

### Later (days after)
- Check in about how they're feeling
- Discuss what worked and what didn't
- Note anything to do differently next time
- Watch for drop and provide support

## Renegotiating

Boundaries can change. It's okay to:
- Add new limits at any time
- Remove activities that aren't working
- Ask to try something new
- Slow down or pause ongoing dynamics

## Remember

Good negotiation leads to better scenes. It's not a barrier to fun—it's the foundation of it. Take the time to do it well, and you'll both have better experiences.

Now go play!
    `},{slug:"how-to-practice-compersion",title:"How to Practice Compersion",category:"How To",excerpt:"Learn to experience joy when your partner finds happiness with others.",image:"https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"7 min read",publishedDate:"2024-12-25",tags:["compersion","ENM","emotional wellness","polyamory"],content:`
## What is Compersion?

Compersion is often called "the opposite of jealousy"—it's the feeling of joy when your partner is happy with someone else. In polyamory and ENM, it's considered a wonderful experience, but it's not required.

## Compersion is Not Required

Let's be clear: you don't have to feel compersion to practice ethical non-monogamy successfully. Many experienced poly people don't feel compersion consistently, and that's okay.

What matters is:
- Managing jealousy constructively
- Supporting your partner's other relationships
- Not sabotaging their happiness

Compersion, when it happens, is a bonus.

## What Compersion Feels Like

People describe compersion as:
- Warmth when seeing your partner smile about someone
- Excitement when they share good news about another relationship
- Feeling "full" rather than diminished
- Pride in your partner's ability to love
- Gratitude that they have rich connections

## Why Compersion Can Be Hard

### Social Conditioning
We're taught that if a partner wants others, it means we're not enough. Unlearning this takes time.

### Insecurity
Feeling threatened by others makes joy difficult. Working on security helps.

### Comparison
If you're comparing yourself to metamours, compersion is nearly impossible.

### Scarcity Thinking
Believing love is finite makes sharing feel like loss.

## Cultivating Compersion

### 1. Work on Your Security
Compersion flows from security. Build it by:
- Strengthening your primary relationship(s)
- Developing self-worth independent of relationships
- Addressing attachment anxiety if present
- Getting reassurance when needed

### 2. Shift Your Thinking

**From:** "They're giving love to someone else"
**To:** "They have more love in their life"

**From:** "They're having experiences without me"
**To:** "They're happy, and that benefits us all"

**From:** "That person is competition"
**To:** "That person adds joy to my partner's life"

### 3. Focus on Your Partner's Joy

When your partner shares about another relationship:
- Notice their happiness (the smile, the energy)
- Ask questions from curiosity, not anxiety
- Celebrate with them as you would other good news
- Let their joy be contagious

### 4. Develop Relationship with Metamours

Compersion often grows when you:
- Know your metamours as real people
- See their positive qualities
- Understand what they add to your partner's life
- Build your own friendship with them (if desired)

### 5. Practice Gratitude

Regularly note:
- What you appreciate about your partner
- How your partner shows up for you
- Ways your life is enriched by this relationship
- The benefits you receive from their happiness

### 6. Start Small

You don't have to feel joy about everything immediately:
- Start with small things (texts, coffee dates)
- Notice any positive feelings, however slight
- Build from there gradually
- Don't force intense compersion about intense situations

## Compersion Exercises

### The Joy Reflection
When your partner has a positive experience with someone else:
1. Notice their happiness
2. Say (aloud or to yourself): "I'm glad you're happy"
3. Observe any positive feelings that arise
4. Don't judge yourself if positive feelings don't come

### The Empathy Bridge
1. Think of a time YOU felt joy about something
2. Imagine your partner feeling that same joy
3. Connect to their experience through your own
4. Let yourself share in their emotion

### The Reframe Practice
When jealousy arises, consciously reframe:
- Jealous thought: "They're having fun without me"
- Reframe: "They're having fun, and I want them to be happy"

## When Compersion Doesn't Come

If you're not feeling compersion:

### Don't:
- Shame yourself
- Pretend to feel it
- Force it
- Think you're bad at ENM

### Do:
- Accept where you are
- Focus on managing jealousy
- Continue supporting your partner
- Trust that feelings may shift over time

## The Spectrum of Feelings

Feelings about your partner's other relationships exist on a spectrum:

😰 Intense jealousy → 😕 Discomfort → 😐 Neutrality → 🙂 Acceptance → 😊 Compersion

Moving from intense jealousy to neutrality is significant progress. You don't have to jump to compersion.

## Final Thoughts

Compersion is beautiful when it happens, but it's not a requirement for successful non-monogamy. Focus on building security, managing difficult emotions, and supporting your partner. If compersion develops, wonderful. If not, you can still have fulfilling, ethical non-monogamous relationships.

Be patient with yourself. This is a journey.
    `}],KS=[...n3,...r3],QS=[{slug:"protecting-privacy-dating-apps",title:"Protecting Your Privacy on Dating Apps",category:"Online Safety",excerpt:"Essential tips for maintaining your privacy and security while using lifestyle apps and websites.",image:"https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read",publishedDate:"2025-01-15",tags:["privacy","online safety","dating apps","security"],content:`
## Your Privacy Matters

In the lifestyle community, privacy is often a primary concern. Many members need to keep their activities separate from their professional or family life. Here's how to protect yourself online.

## Account Security Basics

### Use Strong, Unique Passwords
- Create passwords with 12+ characters
- Mix uppercase, lowercase, numbers, and symbols
- Never reuse passwords across platforms
- Consider a password manager like 1Password or Bitwarden

### Enable Two-Factor Authentication (2FA)
- Adds a second layer of security
- Use an authenticator app rather than SMS when possible
- Keep backup codes in a secure location

### Secure Your Email
- Consider a separate email for lifestyle activities
- ProtonMail offers strong privacy protection
- Enable 2FA on your email accounts
- Be cautious about what you send via email

## Profile Privacy

### Photos
- **Consider waiting** to share face photos until you trust someone
- Use photos that can't be reverse-searched (original, not on other platforms)
- Be aware of metadata in photos (location data)
- Some people use blurred or partial face photos initially

### Personal Information
- Use a lifestyle-only first name or nickname if preferred
- Don't share your workplace, full name, or exact location
- Be vague about identifying details in your bio
- Don't link to vanilla social media

### Verification
- Verify through platforms that offer it
- Video chat before meeting to confirm identity
- Be cautious of people who refuse to verify

## Communication Security

### On Platforms
- Use the platform's messaging system initially
- Don't move to personal channels too quickly
- Be cautious about clicking links from strangers

### Moving Off-Platform
- Consider apps with disappearing messages (Signal, Telegram)
- Google Voice provides a separate phone number
- Don't use your work phone or primary number initially

### What NOT to Share
- Your home address
- Your workplace
- Your daily schedule/routine
- Financial information
- Identifying photos (kids, home, car with plates)

## Red Flags: Scams and Bad Actors

### Common Scams
- Requests for money or gift cards
- Investment or crypto "opportunities"
- Asking you to verify through external sites
- Blackmail attempts with photos

### Warning Signs
- Profiles seem too perfect or professional
- Inconsistent stories or details
- Refusing to video chat or meet
- Rushing intimacy or trust
- Asking unusual questions about your finances

### If You're Being Scammed or Threatened
- Don't pay any money
- Screenshot all communications
- Report to the platform
- Contact local police if threats are made
- Remember: you're not at fault

## When Your Privacy is Compromised

### If You're Outed
- Stay calm and assess the actual damage
- Don't make hasty decisions
- Consider who actually needs to know
- Seek support from trusted friends
- Consider consulting a therapist

### If Photos Are Shared Without Consent
- Document everything
- Report to platforms for removal
- In many places, this is illegal (revenge porn laws)
- Consult with a lawyer if needed
- NCMEC (CyberTipline) can help with image removal

## Platform-Specific Tips

### Mainstream Apps (Tinder, Bumble)
- Can be seen by vanilla friends
- Limited privacy controls
- Photos may be visible to anyone

### Lifestyle Apps (SPICE, SDC, etc.)
- Generally more privacy-focused
- Often require verification
- Community typically understands discretion needs

### FetLife
- Don't use photos from other platforms
- Be aware it's not fully private
- Don't include identifying information

## Work/Professional Life

### Keeping It Separate
- Never use work email or devices
- Be cautious about photos in work attire
- Consider what's searchable by your real name
- LinkedIn photos can be reverse-searched

### If Your Career is High-Profile
- Extra caution with photos
- Consider waiting longer before sharing identifiable info
- Use platforms with strong verification
- Build trust slowly with potential connections

## Final Thoughts

Privacy in the lifestyle isn't about shame—it's about autonomy and safety. You have the right to explore your sexuality without it affecting other areas of your life.

Take the precautions that feel right for your situation, and remember: the right connections will respect your need for discretion.

Stay safe out there.
    `},{slug:"spotting-fake-profiles-catfishing",title:"Spotting Fake Profiles and Catfishing",category:"Online Safety",excerpt:"Red flags to watch for and verification strategies to ensure you're talking to real people.",image:"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"5 min read",publishedDate:"2025-01-13",tags:["catfishing","fake profiles","verification","safety"],content:`
## The Reality of Fake Profiles

Unfortunately, fake profiles and catfishing exist in lifestyle spaces just as they do elsewhere online. Learning to spot them protects you from wasted time, emotional manipulation, and potential scams.

## Types of Fake Profiles

### The Catfish
Someone pretending to be a different person entirely—using someone else's photos and creating a fictional identity.

### The Collector
Creates profiles to collect photos and conversations without any intention of meeting.

### The Scammer
Using fake profiles to build trust before requesting money, gifts, or personal information.

### The Cheating "Single"
Claiming to be single or in an open relationship when they're actually cheating.

### The Fantasy Profile
Couples who don't actually exist—one person posing as a couple to get attention.

## Red Flags in Profiles

### Photo Red Flags
- All photos are professional or model-quality
- Very few photos (1-2 only)
- Photos look outdated (hairstyles, fashion)
- No candid or casual shots
- All photos are heavily filtered
- None show the person with friends or in social situations

### Bio Red Flags
- Very generic bio with no specific details
- Copy-paste feel to the writing
- Claims to be "new to this" but profile is old
- Inconsistencies in details
- No interests or preferences listed
- Vague about location or situation

### Profile Activity Red Flags
- Very new account with complete profile
- No activity in community features
- No verifications despite platform offering them

## Red Flags in Communication

### Early Conversation Red Flags
- Answers don't match profile information
- Generic responses that could apply to anyone
- Avoids direct questions about themselves
- Very quickly wants to move to another platform
- Love bombing (excessive flattery immediately)

### Verification Resistance
- Refuses to video chat
- Always has an excuse for why they can't verify
- Photos sent don't match profile
- Voice calls always have "technical issues"

### Scam Indicators
- Brings up money or financial difficulties
- Has an "emergency" requiring help
- Asks about your financial situation
- Requests gift cards or cryptocurrency
- Has a business opportunity to share

## How to Verify Someone

### Before Investing Time
1. **Reverse image search** their photos (Google Images, TinEye)
2. **Check profile age** and activity level
3. **Look for platform verifications** if available
4. **Read reviews or references** if the platform has them

### Before Meeting
1. **Video chat** at least once—this is non-negotiable
2. **Ask specific questions** that require detailed answers
3. **Check story consistency** over multiple conversations
4. **Trust your instincts** if something feels off

### During Video Chat
- Ensure the person matches their photos
- Look for signs they're not alone (when they claimed to be)
- Ask them to do something specific (wave, show surroundings)
- Note the background—does it match their claimed location?

## The Verification Conversation

How to ask for verification without being offensive:

> "I always video chat before meeting anyone in person—it helps me feel safe. When would work for you?"

> "No pressure, but I've learned to be cautious online. Would you be up for a quick video call this week?"

> "I know it might seem extra, but a quick video chat would help us both feel more confident about meeting up."

If they refuse repeatedly, move on. Legitimate people understand the need for verification.

## Specific Scenarios

### Couples
- Ask to chat with both members separately
- Request photos showing them together
- Note if one person does all the communicating
- Look for chemistry between them on video

### Singles Claiming ENM
- Ask about their partner(s) and situation
- Request to briefly meet or video with the partner
- Be cautious if the partner is always "unavailable"
- Trust your gut about their relationship status

### Locals vs. Travelers
- Verify location through video call (look for location cues)
- Be cautious of people always "traveling to your area soon"
- Ask specific questions about your local area

## What to Do If You've Been Catfished

### Steps to Take
1. Stop all communication
2. Don't send any more photos or information
3. Screenshot conversations for evidence
4. Report the profile to the platform
5. Warn others if appropriate (community forums, etc.)

### Emotional Recovery
- You're not foolish—catfishers are skilled manipulators
- Talk to someone you trust about the experience
- Take a break from dating if needed
- Don't let it make you cynical about everyone

## Prevention Summary

✓ Always verify through video before meeting
✓ Trust your instincts when something feels wrong
✓ Be cautious of people who refuse to verify
✓ Don't send money or explicit content early
✓ Keep identifiable information private initially
✓ Use platforms with verification features
✓ Report suspicious profiles

## Remember

Most people in the lifestyle community are genuine, but protecting yourself is smart, not paranoid. The right people will understand and respect your need for verification.

Stay safe, and don't let the fakes discourage you from finding real connections.
    `},{slug:"secure-communication-practices",title:"Secure Communication Practices",category:"Online Safety",excerpt:"How to keep your conversations private and protect sensitive information.",image:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"4 min read",publishedDate:"2025-01-11",tags:["communication","security","encryption","privacy"],content:`
## Why Communication Security Matters

In the lifestyle, you're often sharing sensitive information—photos, desires, identities—that you want to keep private. Here's how to communicate securely.

## Choosing Secure Platforms

### Most Secure (End-to-End Encrypted)
- **Signal**: Gold standard for privacy, disappearing messages
- **WhatsApp**: End-to-end encrypted (owned by Facebook/Meta)
- **Telegram** (Secret Chats only): Must enable manually

### Moderately Secure
- Platform messaging systems (stay in-app when possible)
- iMessage (if both users have iPhones)

### Less Secure
- Standard SMS text messages
- Regular email
- Social media DMs

## Secure Messaging Best Practices

### Use Disappearing Messages
Most secure apps offer messages that delete automatically:
- Signal: Set timer from 30 seconds to 4 weeks
- Telegram: Secret chats can have self-destruct timers
- Snapchat: Built-in disappearing content

### Verify Recipients
Before sending sensitive content:
- Double-check you're messaging the right person
- Verify the account hasn't been compromised
- Be certain about group chat membership

### Mind Your Metadata
Even with encrypted content, metadata reveals:
- Who you're talking to
- When and how often you communicate
- Your location (sometimes)

## Phone Number Privacy

### Options for Separate Numbers
- **Google Voice**: Free US number, requires Google account
- **TextNow**: Free number with ads
- **Hushed**: Paid burner number service
- **Burner**: Disposable phone numbers

### Benefits of Separate Numbers
- Keep your real number private
- Easy to change if needed
- Can't be linked to your identity easily
- Separate notifications and logs

## Photo Security

### Before Sending
- Remove metadata (EXIF data) that shows location
- Be aware of identifiable background elements
- Consider what could identify you (tattoos, jewelry, home)

### How to Remove Metadata
- iPhone: Use Shortcuts app or third-party apps
- Android: Many gallery apps have options to strip EXIF
- Web tools: Various online EXIF removers (use trusted ones)

### Safe Sharing Practices
- Use platforms that strip metadata automatically
- Don't use cloud storage that syncs to shared devices
- Be selective about what you send early in connections

## Email Security

### For Lifestyle Communications
- Create a dedicated email address
- Use a privacy-focused provider (ProtonMail, Tutanota)
- Don't link it to your real identity
- Enable 2FA

### What NOT to Email
- Explicit photos
- Real name and lifestyle activities together
- Anything you wouldn't want forwarded

## When Privacy is Breached

### If Messages Are Exposed
- Assess what was shared and potential impact
- Change passwords and enable 2FA everywhere
- Document the breach
- Consider who had access (partner, ex, hack?)

### If Photos Are Shared Without Consent
- This may be illegal in your jurisdiction
- Document everything
- Report to platforms for removal
- Consider legal consultation

## Quick Reference

### For Maximum Privacy:
1. Use Signal for messaging
2. Get a separate phone number (Google Voice)
3. Create a dedicated email (ProtonMail)
4. Strip metadata from photos before sending
5. Use disappearing messages
6. Don't share identifying information early

### When Communicating with New People:
1. Stay on-platform initially
2. Move to encrypted apps before less secure ones
3. Verify identity before sharing sensitive content
4. Trust gradually, not immediately
5. Have a plan if things go wrong

## Remember

Perfect security doesn't exist, but good practices significantly reduce risk. The key is making informed choices about what you share, with whom, and through which channels.

Your privacy is worth protecting. Take the time to do it right.
    `},{slug:"first-meet-safety-guidelines",title:"First Meet Safety Guidelines",category:"Dating Safety",excerpt:"A comprehensive checklist for meeting someone from the lifestyle community for the first time.",image:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"7 min read",publishedDate:"2025-01-10",tags:["safety","first meet","dating","checklist"],content:`
## Meeting Someone New

Meeting someone from the lifestyle community for the first time should be exciting, not anxiety-inducing. These guidelines help ensure your safety while keeping things fun.

## Before the Meet

### Verification Checklist
✓ Had at least one video chat
✓ Photos match across conversations
✓ Story has been consistent
✓ No major red flags in communication
✓ You feel genuinely comfortable

### Tell Someone
Always inform a trusted friend about:
- Who you're meeting (share profile/photos)
- Where you're going
- When you expect to be back
- A check-in schedule

### Set Up a Safety System
- Schedule text check-ins (every hour, for example)
- Establish a code word for "call me with an emergency"
- Have a backup plan if you need to leave quickly

## Choosing a Location

### Ideal First Meet Locations
- Coffee shops
- Casual restaurants
- Hotel lounges or bars
- Public parks (daytime)
- Wine bars

### Why Public Matters
- Easy to leave if needed
- Others around if you need help
- No pressure for intimacy
- Natural time limits

### Red Flags
🚩 They insist on private location first
🚩 They want you to come to their home
🚩 They suggest remote or isolated spots
🚩 They refuse to meet in public at all

## Getting There Safely

### Transportation
- Drive yourself or use rideshare
- Don't accept a ride from them for the first meet
- Park in a well-lit area
- Know your exit route

### What to Bring
- Fully charged phone
- Cash (in case you need to leave quickly)
- Your own car keys
- Emergency contact info written down

### What NOT to Bring
- Large amounts of cash
- Expensive jewelry
- Anything you can't leave behind if needed

## During the Meet

### First Impressions
- Do they match their photos and video?
- Does their story check out?
- How does your gut feel?

### Green Flags
✓ They're respectful of your time
✓ They're interested in getting to know you (not just physical)
✓ They accept boundaries easily
✓ They don't pressure you about future plans
✓ They're honest if something from their profile wasn't accurate

### Red Flags
🚩 They're significantly different from photos/video
🚩 They immediately push for intimacy
🚩 They get defensive about questions
🚩 They're rude to staff
🚩 They've been drinking before you arrived
🚩 They try to isolate you from public spaces

### If Something Feels Off
- Trust your instincts—they exist for a reason
- You don't owe anyone an explanation
- "I'm sorry, but I need to go" is complete
- Leave immediately if you feel unsafe

## Check-Ins

### With Your Safety Contact
At pre-arranged times, text your contact:
- "Everything's great" = All good
- Pre-arranged code word = Call me immediately
- No response = They should try to reach you

### With Yourself
Ask yourself periodically:
- Am I comfortable?
- Am I being pressured?
- Does this person seem genuine?
- Do I want to continue?

## Ending the Meet

### If It Goes Well
- Exchange contact info if you haven't
- Discuss potential next steps
- Don't feel obligated to extend the date
- Text your safety contact that you're leaving

### If It Doesn't Go Well
- "Thank you for meeting me, but I don't think we're a match"
- You don't owe more explanation
- Leave promptly
- Block if needed

### Getting Home Safely
- Check your surroundings before getting in your car
- Make sure you're not being followed
- Text your safety contact when you're home

## Special Scenarios

### Meeting a Couple
- Try to meet both members
- Watch for dynamics between them
- Make sure both are equally enthusiastic
- Be cautious if only one person does all the talking

### Lifestyle Events
- First events can be intimidating
- Attend with a friend if possible
- Know the venue's safety policies
- You're not obligated to play at your first event

### Hotel Meets (After Initial Public Meet)
- Don't share hotel name until you trust them
- Let your safety contact know the location
- Keep your room key accessible
- Have exit routes in mind

## After the Meet

### Debrief
- What went well?
- Any concerns?
- Would you see them again?
- Update your safety contact

### If You Felt Unsafe
- Document what happened
- Report to the platform if applicable
- Warn others if appropriate (be factual)
- Consider whether to block/report

## The Safety Contact Script

Share this with your safety person:

> "I'm meeting [name/username] from [platform] at [location] at [time]. Here's their photo [share]. I'll check in at [times]. If I text [code word] or don't respond to your check-in, please call me. If you can't reach me after [time], call [backup plan]."

## Remember

Being cautious isn't paranoid—it's smart. The right people will understand and respect your safety practices. Those who don't respect them are showing you who they are.

Trust your instincts. They're there to protect you.

Stay safe, and enjoy the connections!
    `},{slug:"buddy-system-keeping-friends-informed",title:"The Buddy System: Keeping Friends Informed",category:"Dating Safety",excerpt:"How to set up a safety network when meeting new connections.",image:"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"4 min read",publishedDate:"2025-01-08",tags:["safety","buddy system","friends","support"],content:`
## The Buddy System

Having someone who knows where you are and who you're with is one of the simplest and most effective safety measures you can take.

## Who to Choose

### Ideal Safety Buddies
- Someone who knows about your lifestyle activities
- Available during your typical meeting times
- Reliable about checking their phone
- Won't judge or overreact
- Can be trusted with sensitive information

### Building Your Network
Not everyone has a friend who knows about the lifestyle. Options:
- A close friend you trust completely
- A lifestyle friend from the community
- A partner or metamour
- Online communities have volunteer buddy systems

## Setting Up the System

### Before Each Meet

Share with your buddy:
1. **Who**: Name/username, platform, photo
2. **Where**: Exact location (restaurant name, address)
3. **When**: Time meeting starts, expected duration
4. **How**: Check-in schedule and codes

### Sample Message

> "Hey! Meeting JohnDoe123 from SPICE tonight. Here's his pic [attach]. We're meeting at The Coffee House, 123 Main St, at 7pm. I'll text you at 8pm and 9pm. If I text 'pizza' or don't respond within 15 mins of check-in, please call me. If no answer, escalate."

## Check-In Codes

### Simple System
- "👍" = All good
- "Pizza" or another random word = Need a call
- No response = Buddy should call you

### Advanced System
- "Green" = Great, might stay longer
- "Yellow" = Fine but ready to leave
- "Red" = Need emergency call now
- "Burger" (or any code) = Come get me/call police

## What Your Buddy Should Do

### If Check-In Is Good
- Acknowledge with a quick response
- Stay available for next check-in

### If Code Word Is Used
- Call immediately with a scripted "emergency"
- "Hey, I need you to come home right away, there's a problem"
- Be prepared to stay on the line

### If No Response
1. Wait 10-15 minutes
2. Call (not text)
3. If no answer, try once more
4. Contact emergency contact or consider calling police
5. Share the location you were given

## The Emergency Call Script

When your buddy calls with the fake emergency:

> "Hey, I'm so sorry to interrupt but [emergency]. Can you come home/come help?"

You say:
> "Oh no, I'll be right there. I'm so sorry, I have to go."

This gives you an out that doesn't create confrontation.

## Privacy Considerations

### What Your Buddy Knows
Be aware that your buddy will know:
- Who you're meeting
- That you're in the lifestyle
- Details about your activities

Choose someone you trust with this information.

### Protecting Your Buddy
- Don't share more details than necessary
- Respect their boundaries about involvement
- Thank them for their support
- Return the favor if they need it

## For Couples

### Both Going Together
- Still have a buddy who isn't at the meet
- Check in from the event
- Have code words for "we want to leave"

### One Partner Going Alone
- The other partner can be the buddy
- Or both can have separate buddies
- Clear communication about check-ins

## Technology Helpers

### Location Sharing Apps
- Find My Friends (iPhone)
- Google Maps location sharing
- Life360
- Share for specific time periods

### Benefits
- Buddy can see your location in real-time
- Don't need to remember to check in
- Can be disabled after the meet

### Limitations
- Requires phone and battery
- Could be left behind
- Not a replacement for check-ins

## When Things Go Right

After a successful meet:
- Let your buddy know you're safe
- Thank them for being available
- Don't forget the final check-in

> "Home safe! He was great, we're going to see each other again. Thanks for being my backup! 💕"

## When Things Go Wrong

If something happens:
- Your buddy should take your safety seriously
- Follow the escalation plan you've established
- You can always call 911 yourself if needed
- Don't let embarrassment stop you from getting help

## Building the Habit

### Making It Routine
- Send the info message every time, no exceptions
- Use the same format so it's easy
- Set phone reminders for check-ins
- Thank your buddy each time

### Being a Good Buddy
When someone asks you:
- Take it seriously
- Stay available during the window
- Respond to check-ins promptly
- Know the escalation plan

## Final Thoughts

The buddy system isn't paranoid—it's practical. Most meets will go perfectly fine, and your buddy will just get a "home safe" text. But having that safety net means you can relax and enjoy getting to know someone new.

Be safe. Have fun. And be a good buddy to others when they need it.
    `},{slug:"trusting-your-instincts",title:"Trusting Your Instincts",category:"Dating Safety",excerpt:"Recognizing and acting on red flags during dates and meetups.",image:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"5 min read",publishedDate:"2025-01-06",tags:["instincts","red flags","safety","intuition"],content:`
## Your Gut Knows

That uneasy feeling you can't quite explain? That's your intuition speaking. In lifestyle situations, learning to recognize and trust these signals can keep you safe.

## The Science of Intuition

Your brain processes thousands of micro-signals that don't make it to conscious awareness:
- Body language inconsistencies
- Tone of voice changes
- Environmental cues
- Pattern recognition from past experiences

When something "feels off," your brain has noticed something even if you can't articulate it.

## Recognizing Red Flags

### In Online Communication

**Early Warning Signs:**
- Avoiding direct questions
- Inconsistencies in their story
- Excessive flattery or "love bombing"
- Pushing to move fast
- Becoming defensive when questioned
- Refusing reasonable verification requests

**What Your Gut Might Notice:**
- Something feels "performative"
- Their interest seems more like a script
- You feel uncomfortable but can't say why
- You're making excuses for them

### In Person

**Behavioral Red Flags:**
- They look around nervously
- Excessive drinking
- Touching without permission
- Ignoring subtle boundary-setting
- Getting defensive about casual questions
- Pressuring you to go somewhere private

**Environmental Red Flags:**
- Unexpected changes to plans
- Being taken somewhere you didn't agree to
- Others in the space seem uncomfortable
- Your exits feel blocked

**Physical Sensations to Notice:**
- Stomach tightening
- Heart rate increasing
- Feeling trapped or cornered
- Wanting to move away from them
- Difficulty relaxing despite trying

## Why We Ignore Our Instincts

### Social Conditioning
- We're taught to be "polite"
- Women especially are trained to prioritize others' comfort
- We don't want to seem "paranoid" or "rude"

### Wishful Thinking
- We want the connection to work out
- We've invested time and hope
- We rationalize red flags away

### Past Patterns
- If previous fears were "unfounded," we dismiss current ones
- Past trauma can make us doubt ourselves

## Giving Yourself Permission

### It's Okay To:
- Leave at any point, for any reason
- Not explain yourself
- Cancel plans if something feels wrong
- Ghost someone who's made you uncomfortable
- Say no at any stage, even if you said yes before
- Prioritize your safety over someone else's feelings

### You Don't Owe Anyone:
- An explanation for your discomfort
- Another chance
- A completed date
- Physical affection
- Anything at all

## Practical Exit Strategies

### The Direct Exit
> "I'm not feeling a connection. I'm going to head out."
> "I need to leave now. Goodbye."

### The Soft Exit
> "I just got a text and need to go handle something."
> "I'm not feeling well—I think I need to call it a night."

### The Emergency Exit
- Pre-arranged call from a friend
- Text your buddy your code word
- Go to staff and ask for help
- Call 911 if you feel in danger

## When Your Instincts Scream

If you're feeling genuine fear:

1. **Trust it.** Don't rationalize.
2. **Get to safety.** Leave immediately.
3. **Make noise if needed.** Others will help.
4. **Call for help.** 911, your buddy, anyone.
5. **Don't worry about being "wrong."** Your safety matters more than their feelings.

## After Ignoring Your Instincts

If something bad happened because you overrode your gut:

- **It wasn't your fault.** Manipulators are skilled.
- **Learn from it.** Commit to trusting yourself next time.
- **Seek support.** Talk to someone you trust.
- **Be gentle with yourself.** Hindsight is 20/20.

## Strengthening Your Intuition

### Practice Noticing
- Pay attention to physical sensations in different situations
- Note when something feels "off" and why
- Journal about gut feelings and their outcomes

### Honor the Small Things
- If you don't want to answer a question, don't
- If you need a break, take one
- If something makes you uncomfortable, remove yourself

### Debrief After Experiences
- What did your gut say?
- Did you listen?
- What would you do differently?

## The Gift of Fear

Gavin de Becker's book "The Gift of Fear" is excellent reading on this topic. Key insight: real fear is a survival signal that should never be ignored.

> "True fear is a gift. Unwarranted fear is a curse."

Learn to tell the difference, and always err on the side of safety.

## Final Thoughts

Your intuition has evolved over millions of years to keep you safe. In lifestyle situations, where you're often with new people in potentially vulnerable circumstances, it's one of your most valuable tools.

Trust yourself. Your instincts are there for a reason.
    `},{slug:"enthusiastic-consent-101",title:"Enthusiastic Consent 101",category:"Consent & Boundaries",excerpt:"What consent really means and how to practice it in every interaction.",image:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read",publishedDate:"2025-01-05",tags:["consent","boundaries","communication","safety"],content:`
## Beyond "No Means No"

The old framework of "no means no" has evolved. In modern understanding, especially in lifestyle communities, we practice **enthusiastic consent**: looking for an active, clear "yes" rather than just the absence of "no."

## What Is Enthusiastic Consent?

Enthusiastic consent means:
- **Freely given**: No pressure, coercion, or manipulation
- **Reversible**: Can be withdrawn at any time
- **Informed**: Understanding what you're agreeing to
- **Enthusiastic**: Active desire, not just absence of refusal
- **Specific**: Consent to one thing isn't consent to everything

### What It Sounds Like
✓ "Yes, I'd love that"
✓ "That sounds amazing"
✓ "I'm really into this"
✓ "I want you to..."
✓ "Please do that"

### What It Doesn't Sound Like
✗ Silence
✗ "I guess..."
✗ "If you want to..."
✗ "I don't know..."
✗ Not resisting

## Asking for Consent

### How to Ask
- "Would you like to...?"
- "Can I...?"
- "How do you feel about...?"
- "Is this okay?"
- "What would you enjoy?"

### Making It Natural
Asking for consent doesn't have to be awkward:

**Instead of:** "May I have permission to kiss you?"
**Try:** "I really want to kiss you right now. Would that be okay?"

**Instead of:** "Do you consent to being touched?"
**Try:** "I'd love to touch you here. Would you like that?"

### Reading the Response
Look for:
- Verbal confirmation
- Body language (leaning in, reciprocating)
- Genuine enthusiasm
- Eye contact and engagement

If you see:
- Hesitation
- Pulling away
- Tension
- Lack of engagement

**Stop and check in verbally.**

## Consent in Different Contexts

### Kink/BDSM
- Negotiation happens before the scene
- Safe words are established
- Consent to specific activities, not blanket consent
- Even in power exchange, the submissive has ultimate control

### Group Situations
- Each person must consent individually
- Consent from one isn't consent from others
- Check in with everyone, not just one spokesperson
- Group dynamics don't override individual boundaries

### Ongoing Relationships
- Past consent doesn't guarantee future consent
- Check in even with established partners
- Consent can change based on mood, circumstances, or health
- Never assume

### Intoxication
- Intoxicated people cannot give valid consent
- If someone is drunk or high, don't proceed
- Better to miss an opportunity than violate consent
- "They seemed into it" is not a defense

## Withdrawing Consent

### You Can Withdraw Consent:
- At any time, for any reason
- Even if you said yes before
- Even if you've done this before
- Even in the middle of an activity
- Without explanation

### How to Withdraw
- "Stop"
- "I want to stop now"
- Safe word
- Any clear indication

### Receiving Withdrawn Consent
- Stop immediately
- No questions, no negotiating
- Check if they're okay
- Thank them for communicating
- Don't make them feel guilty

## When Consent Is Violated

### If Your Consent Was Violated
- Your feelings are valid
- It wasn't your fault
- You can report (to platforms, organizers, or authorities)
- Seek support from trusted people
- Consider professional help

### If You Violated Someone's Consent
- Stop immediately
- Acknowledge what happened
- Apologize sincerely
- Give them space
- Reflect seriously on how it happened
- Commit to doing better

## Consent Violations Are Not:
- Misunderstandings that are corrected immediately
- Someone changing their mind and you respecting it
- Asking and receiving "no"
- Uncomfortable conversations about boundaries

## Consent Culture

### In the Lifestyle Community
The lifestyle community generally holds consent to a high standard:
- Most clubs and events have strict consent policies
- Violations are taken seriously
- Communication about boundaries is normalized
- Asking before touching is expected

### Being Part of the Solution
- Model consent in all your interactions
- Speak up if you see violations
- Support those who share their experiences
- Don't protect violators
- Educate those who don't understand

## Practice Scenarios

### Scenario 1: Touch
**Good:** "You look amazing. Can I put my hand on your waist?"
**Better:** "I'd love to touch you. Where would feel good?"

### Scenario 2: Escalating
**Good:** "Can we take this further?"
**Better:** "What would you like to do next?"

### Scenario 3: Checking In
**Good:** "Are you okay?"
**Better:** "How are you feeling about this? What do you need?"

## Final Thoughts

Consent isn't a barrier to intimacy—it's the foundation of it. When both (or all) parties are genuinely enthusiastic, the experience is better for everyone.

Practice makes perfect. The more you ask, the more natural it becomes. And being known as someone who respects consent? That's attractive.

Enthusiastic consent: because "yes" should mean "hell yes."
    `},{slug:"setting-communicating-boundaries",title:"Setting and Communicating Boundaries",category:"Consent & Boundaries",excerpt:"How to clearly express your limits and respect those of others.",image:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"5 min read",publishedDate:"2025-01-03",tags:["boundaries","communication","consent","relationships"],content:`
## Boundaries Are Healthy

Boundaries aren't walls that keep people out—they're fences with gates that you control. They protect your wellbeing while allowing connection.

## Types of Boundaries

### Physical Boundaries
- What kind of touch is okay?
- Which body parts are off-limits?
- What activities will you engage in?
- Safer sex requirements?

### Emotional Boundaries
- What topics are you willing to discuss?
- How much emotional intimacy are you comfortable with?
- What kind of support can you offer/receive?

### Time Boundaries
- How much time can you dedicate?
- What's your availability?
- How quickly do you respond to messages?

### Privacy Boundaries
- What information do you share?
- Who can know about your lifestyle activities?
- What can be photographed or recorded?

## Knowing Your Boundaries

### Questions to Ask Yourself
- What makes me feel safe and comfortable?
- What activities am I curious about vs. certain about?
- What are my non-negotiables?
- What do I need to feel respected?
- What triggers do I have?

### Hard vs. Soft Limits

**Hard Limits**: Absolute no's, non-negotiable
- These don't change based on circumstances
- Should be clearly communicated upfront
- Must always be respected

**Soft Limits**: Maybe's with conditions
- Might explore with the right person/situation
- May change over time
- Require discussion and negotiation

## Communicating Your Boundaries

### Be Direct
- State boundaries clearly, not as hints
- Use "I" statements
- Be specific about what you need

**Instead of:** "I don't really like being surprised"
**Try:** "I need activities to be discussed before they happen"

### Be Proactive
Don't wait until boundaries are crossed:
- Share important boundaries early
- Include them in profile/conversation
- Remind partners before activities

### Script Examples

**Setting a boundary:**
> "I want to let you know that [X] is a hard limit for me. I'm not comfortable with it under any circumstances."

**Clarifying a boundary:**
> "When I said I was interested in [Y], I meant [specific version]. Can we talk about what that looks like?"

**Reinforcing a boundary:**
> "I mentioned earlier that I'm not okay with [X]. I need that to be respected."

## When Boundaries Are Tested

### Signs Someone Is Pushing
- "Just try it once"
- "You said you might be open to it"
- "Don't knock it till you try it"
- Sulking or guilt-tripping when you say no
- "Coming back" to boundaries you've set

### How to Respond
- Restate your boundary clearly
- You don't need to justify or explain
- Notice the pattern if it continues
- Consider whether this person respects you

### When to Walk Away
If someone:
- Repeatedly pushes against your boundaries
- Gets angry when you set limits
- Makes you feel guilty for having boundaries
- Violates boundaries after agreeing to them

**This is not a safe person to play with.**

## Respecting Others' Boundaries

### Listen Carefully
- Don't assume you know their limits
- Ask clarifying questions
- Pay attention to hesitation or uncertainty

### Accept "No" Gracefully
- Thank them for being clear
- Don't ask why or try to negotiate
- Move on without making them feel bad

### Honor Boundaries Consistently
- What they said yesterday still applies
- Don't test to see if limits have changed
- If you're unsure, ask again

## Boundaries Can Change

### Expanding Boundaries
Over time, you might be open to more:
- This happens naturally with trust and experience
- It should never be pressured
- Communicate changes proactively

### Contracting Boundaries
You can also add new limits:
- Based on bad experiences
- As you learn more about yourself
- Due to life circumstances

Both directions are valid. Your boundaries are yours to set.

## Common Boundary Mistakes

### Mistakes in Setting
❌ Not having boundaries (trying to be "easy-going")
❌ Having unclear or vague boundaries
❌ Hiding important boundaries until they're tested
❌ Setting boundaries you don't actually want

### Mistakes in Enforcement
❌ Making exceptions when you shouldn't
❌ Feeling guilty for having boundaries
❌ Apologizing for your limits
❌ Letting erosion happen gradually

## Boundaries in Practice

### In Negotiation
- State your limits clearly
- Listen to theirs fully
- Discuss where you overlap
- Clarify anything uncertain

### During Activities
- Safe words for when boundaries are approached
- Check in if something unexpected comes up
- Stop and discuss if needed

### After Activities
- Discuss if anything felt boundary-adjacent
- Clarify for next time
- Appreciate each other's respect

## Final Thoughts

Strong boundaries create stronger connections. When people know where they stand, they can relax into the experience. When you feel safe, you can be more present.

Your boundaries are valid. Communicate them clearly. Enforce them consistently. And extend the same respect to others.
    `},{slug:"what-to-do-consent-violated",title:"What to Do If Consent Is Violated",category:"Consent & Boundaries",excerpt:"Resources and steps for handling consent violations in the lifestyle community.",image:"https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"8 min read",publishedDate:"2025-01-01",tags:["consent","safety","resources","support"],content:`
## When Consent Is Violated

Having your consent violated is serious and traumatic. This guide provides practical steps and resources for the aftermath.

**Important:** Whatever happened was not your fault. You didn't cause this by your choices, clothing, intoxication level, or anything else.

## Immediate Aftermath

### Your Safety First
- Get to a safe location
- If you're in immediate danger, call 911
- Don't be alone if you don't want to be
- Call someone you trust

### Physical Care
If the violation was physical/sexual:
- You can choose whether to shower or not
- If considering reporting, preserving evidence helps
  - Don't wash clothes
  - Go to a hospital for a forensic exam (this doesn't obligate you to report)
- Seek medical care if injured

### Emotional First Aid
- You might feel shock, numbness, anger, confusion—all are normal
- You don't have to process everything right now
- Let yourself feel what you feel without judgment

## What To Do Next

### Document What Happened
While memories are fresh:
- Write down exactly what happened
- Note date, time, location
- Screenshots of any communications
- Names of any witnesses
- Save any physical evidence

This documentation is for you—you can decide later what to do with it.

### Seek Support

**People to contact:**
- Trusted friend or partner
- Crisis hotlines (listed below)
- Therapist (kink-aware if possible)
- Support groups (online or in-person)

**What you might need:**
- Someone to listen without judging
- Practical help (food, company, logistics)
- Professional support for processing trauma

### Medical Care

Consider seeking care for:
- STI testing
- Emergency contraception if relevant
- Treatment of any injuries
- Forensic exam (doesn't obligate you to report)

Hospitals with SANE (Sexual Assault Nurse Examiner) nurses provide specialized care.

## Reporting Options

### To Authorities
You have the choice whether to report to police. There's no wrong answer.

**Considerations:**
- Reporting can be empowering for some
- The process can be difficult and retraumatizing
- Outcomes are often uncertain
- Time limits vary by jurisdiction
- You can report now and decide about pressing charges later

### To Platforms
If you met through an app or website:
- Report the person to the platform
- Include documentation
- Request they be removed

### To Community
Many lifestyle communities have:
- Formal reporting processes
- Community moderators or leaders
- Ways to warn others

Consider:
- Speaking to event organizers if it happened at an event
- Posting in community spaces (some allow this, some don't)
- Warning trusted friends who might encounter this person

## Healing

### Short-Term

**Normal reactions:**
- Intrusive thoughts
- Difficulty sleeping
- Anxiety or hypervigilance
- Mood swings
- Physical symptoms (nausea, headaches)

**Helpful actions:**
- Let yourself rest
- Lean on your support system
- Maintain routines when possible
- Be patient with yourself
- Avoid numbing with substances

### Long-Term

**Professional support:**
- Trauma-informed therapy is highly recommended
- EMDR can be effective for processing trauma
- Support groups provide community healing

**Lifestyle considerations:**
- Taking a break from the lifestyle is okay
- Returning when ready is also okay
- Your pace is your own

### Things That Help

- Reclaiming a sense of control
- Being believed and supported
- Speaking about it (when you're ready)
- Continuing to experience pleasure and connection (when ready)
- Understanding it wasn't your fault

### Things That Don't Help

- Being pressured to report (or not report)
- Being told how to feel
- Rushing your healing
- Isolation
- Self-blame

## For Partners and Friends

If someone discloses to you:

### Do:
- Believe them
- Listen without interrupting
- Ask what they need
- Offer specific help
- Follow their lead on next steps
- Check in on them over time

### Don't:
- Question their account
- Ask what they were wearing/doing
- Push them to report (or not report)
- Make it about your feelings
- Tell anyone without permission
- Try to "fix" things

## Resources

### Crisis Hotlines
- **RAINN:** 1-800-656-4673 (24/7)
- **National Sexual Assault Hotline:** 1-800-656-4673
- **Crisis Text Line:** Text HOME to 741741

### Online Resources
- RAINN (rainn.org): Resources for survivors
- After Silence (aftersilence.org): Online support community
- Pandora's Project: Support for survivors

### Finding Kink-Aware Help
- NCSF Kink-Aware Professionals: kapprofessionals.org
- Psychology Today directory (filter for sex-positive/kink-aware)

## Legal Considerations

### Evidence Preservation
If you might report later:
- Screenshot communications
- Save any physical evidence
- Get a forensic exam (doesn't obligate reporting)
- Document timeline and details

### Statute of Limitations
These vary by location and type of assault. Consult with:
- Local victim advocacy organizations
- Law enforcement (you can ask without filing a report)
- An attorney specializing in sexual assault

## Moving Forward

### Healing Is Non-Linear
- Good days and bad days are normal
- Triggers may appear unexpectedly
- Progress isn't always visible day-to-day
- You will feel better than you do right now

### You're Not Alone
Many people in the lifestyle community have experienced violations and found ways to heal and thrive. You are not broken. This happened to you; it's not who you are.

### The Community Cares
While violations happen, the lifestyle community largely stands against them. Most people want safe spaces and will support survivors. You don't have to navigate this alone.

## Final Thoughts

Whatever happened, however you're feeling, whatever you decide to do—you are valid. There's no right way to respond to trauma. Your healing is yours.

You survived. You're still here. You matter.

Reach out for help. You deserve support.
    `},{slug:"sti-testing-what-when-how-often",title:"STI Testing: What, When, and How Often",category:"Sexual Health",excerpt:"A guide to regular testing and what to get tested for as an active member of the lifestyle.",image:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"7 min read",publishedDate:"2024-12-30",tags:["STI","testing","health","safety"],content:`
## Sexual Health is Self-Care

Regular STI testing isn't about shame or fear—it's responsible self-care and consideration for your partners. In the lifestyle community, testing is normalized and expected.

## What to Get Tested For

### Standard Panel
A comprehensive STI panel typically includes:

- **HIV**: Blood test
- **Syphilis**: Blood test
- **Gonorrhea**: Urine and/or swab (throat, rectal if applicable)
- **Chlamydia**: Urine and/or swab (throat, rectal if applicable)
- **Hepatitis B & C**: Blood test (if not vaccinated for B)
- **Herpes (HSV-1 & HSV-2)**: Blood test (often not included unless requested)

### Additional Tests Based on Activity
- **HPV**: Pap smear for those with cervixes; no standard test for those without
- **Mycoplasma/Ureaplasma**: Not always standard, ask if concerned
- **Trichomoniasis**: Sometimes included, sometimes must request

### Know Your Status
Request a copy of your results. Many lifestyle apps allow you to upload or share test results.

## How Often to Test

### General Guidelines

| Activity Level | Testing Frequency |
|----------------|-------------------|
| Monogamous | Annually |
| Occasional lifestyle play | Every 3-6 months |
| Regular lifestyle activity | Every 3 months |
| Very active | Monthly or as needed |

### Test After
- Any new partner
- Known exposure to an STI
- Condom failure or breakage
- If a partner discloses a new diagnosis

### Window Periods
STIs have "window periods" where they won't show on tests:

| STI | Window Period |
|-----|---------------|
| HIV (4th gen test) | 18-45 days |
| Syphilis | 3-6 weeks |
| Gonorrhea | 1-14 days |
| Chlamydia | 1-14 days |
| Herpes | 2-12 weeks |
| Hepatitis B | 6 weeks - 6 months |

If you had a potential exposure, wait for the window period before testing, then test again later to confirm.

## Where to Get Tested

### Options

**Healthcare Provider**
- Your regular doctor
- Gynecologist or urologist
- May be covered by insurance

**Sexual Health Clinics**
- Planned Parenthood
- Local health department
- LGBT centers often offer testing

**At-Home Tests**
- Services like Everlywell, myLAB Box, STDcheck
- Convenient and private
- Variable quality; use reputable services

**Specialized Services**
- Some cities have clinics specifically for sexually active adults
- Often faster, more judgment-free

### Cost Considerations
- Many clinics offer free or sliding-scale testing
- Insurance typically covers routine testing
- At-home tests range from $50-$200+
- Consider the cost of NOT testing

## Having the Testing Conversation

### How to Ask
> "When were you last tested, and what did you test for?"
> "What's your testing routine?"
> "I got tested last month—here are my results. Would you share yours?"

### What If They Haven't Tested Recently?
- Offer to go together
- Use barriers until they do
- It's okay to decline play until testing happens

### Red Flags
- Refuses to discuss testing
- "I don't need to test, I can tell"
- Gets defensive or angry
- Claims to be "clean" without testing

## If You Test Positive

### First: Don't Panic
- Most STIs are treatable
- Many are curable
- With proper care, all are manageable

### Next Steps
1. Get treatment from a healthcare provider
2. Follow treatment protocols completely
3. Abstain from sex until cleared (timing varies by STI)
4. Notify recent partners
5. Get retested to confirm treatment worked

### Disclosure
You should tell:
- Current partners
- Recent partners (within window period + time since)
- Future partners (for chronic conditions like herpes or HIV)

### The Disclosure Conversation

> "Before we go further, I want to share that I have [STI]. Here's what that means: [transmission info, management]. I want you to be able to make an informed decision."

Many people will still be interested in playing with you. Disclosure shows integrity.

## Reducing Risk

### Barriers
- Condoms reduce most STI transmission significantly
- Dental dams for oral sex
- Gloves for manual play
- Barriers for sex toys

### PrEP and PEP
- **PrEP**: Daily medication to prevent HIV infection
- **PEP**: Emergency medication after potential HIV exposure
- Consult with healthcare provider about these options

### Vaccination
Vaccines exist for:
- Hepatitis A & B
- HPV (up to age 45 for most people)
- Meningitis (MENVEO)

### Communication
- Discuss STI status before play
- Be honest about symptoms
- Stay home if you have symptoms or active outbreaks

## Testing as Community Care

Regular testing isn't just about you—it's about:
- Protecting your partners
- Maintaining community trust
- Reducing stigma
- Modeling responsible behavior

When we all test regularly, we create a safer community for everyone.

## Final Thoughts

Getting tested might feel vulnerable, but it's an act of care for yourself and others. In the lifestyle community, "I test regularly" is attractive. It shows you take sexual health seriously.

Make testing a regular part of your self-care routine. Your health—and your partners'—is worth it.

Stay healthy, play safe.
    `},{slug:"safer-sex-practices-enm",title:"Safer Sex Practices for ENM",category:"Sexual Health",excerpt:"Barrier methods, risk reduction, and communication about sexual health.",image:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read",publishedDate:"2024-12-28",tags:["safer sex","barriers","ENM","health"],content:`
## Safer Sex in ENM

When you have multiple partners, safer sex practices become even more important—not just for you, but for everyone in your network. Here's how to navigate it.

## Understanding Risk

### No Such Thing as "100% Safe"
All sexual activity carries some risk. The goal is "safer" sex:
- Reducing risk to acceptable levels
- Making informed choices
- Protecting yourself and partners

### Risk Factors
Higher risk with:
- More partners
- Unprotected sex
- Certain activities (anal > vaginal > oral for many STIs)
- Partners with unknown STI status
- Presence of other STIs

Lower risk with:
- Consistent barrier use
- Regular testing
- Fewer partners
- PrEP (for HIV)
- Open communication

## Barrier Methods

### External (Male) Condoms
- 85-98% effective against pregnancy
- Significant reduction in STI transmission
- Use with water or silicone-based lube only
- Check expiration dates
- Use a new one for each partner and each activity

### Internal (Female) Condoms
- Alternative when external condoms won't work
- Can be inserted ahead of time
- Good for people with latex allergies (most are nitrile)
- Can be used for anal sex as well

### Dental Dams
- For oral sex (cunnilingus, rimming)
- Can also cut a condom open to create one
- Use a new dam for each area/partner
- Keep track of which side touches what

### Gloves
- For manual stimulation
- Especially with multiple partners or at parties
- Protects both people from fluid exchange
- Change between partners and activities

### Finger Cots
- Like tiny condoms for fingers
- Good for targeted protection
- Useful when a full glove isn't needed

## Fluid Bonding

**Fluid bonding** = choosing to have unprotected sex with specific partner(s)

### Considerations
- Both/all parties should test first
- Discuss what it means for your network
- May require additional agreements (barriers with others)
- Can be emotionally significant

### Questions to Ask
- What's our testing history?
- What will we use with other partners?
- How do we handle new partners joining?
- What if someone in the polycule tests positive?

## Communication Practices

### Before New Partners
- Discuss testing status and history
- Share what barriers you use
- Ask about their practices
- Agree on what protection you'll use

### With Existing Partners
- Inform them of new partners
- Discuss any changes in risk
- Renegotiate agreements as needed
- Be honest if something unexpected happens

### Scripts

**Asking about status:**
> "Before we go further, let's talk about sexual health. When were you last tested and what were your results?"

**Sharing your practices:**
> "My testing routine is every three months. I use condoms with all partners. Here are my recent results."

**Negotiating protection:**
> "I'd like to use condoms for penetration and dental dams for oral. What works for you?"

## By Activity

### Lower Risk Activities
- Mutual masturbation (watching)
- Dry humping with clothes
- Massage
- Kissing (generally lower risk)
- Using separate toys

### Moderate Risk Activities
- Oral sex (some STI transmission possible)
- Manual stimulation (low but not zero risk)
- Protected penetrative sex

### Higher Risk Activities
- Unprotected penetrative sex
- Anal sex (even with condoms, higher risk)
- Blood play
- Sharing toys without barriers

## At Parties and Events

### Bring Your Own
- Condoms (multiple types/sizes)
- Lube (both water and silicone-based)
- Dental dams
- Gloves
- Finger cots

### Change Between Partners
- New barrier for each person
- New barrier for each activity
- New barrier for each orifice
- Yes, this means a lot of barrier changes

### Stay Aware
- Be mindful of what's happened where
- Don't assume others' protection level
- Ask about practices beforehand

## When Things Don't Go as Planned

### Barrier Failure
If a condom breaks or comes off:
- Stop and address immediately
- Clean up
- Discuss PEP if HIV is a concern (within 72 hours)
- Get tested at appropriate windows
- Inform other partners

### In the Heat of the Moment
If you find yourself without protection:
- It's okay to stop
- Other activities don't require the same barriers
- "I want to continue but not without protection" is valid

## Navigating Disagreements

### If a Partner Doesn't Want to Use Protection
- You get to make your own choices
- "I'm only comfortable with barriers" is complete
- Don't compromise your health for the moment
- Find partners who respect your practices

### Different Agreements with Different Partners
This is common in ENM:
- Fluid bonded with one, barriers with others
- Different levels based on testing schedules
- Communicate clearly about what applies with whom

## Final Thoughts

Safer sex in ENM isn't about distrust—it's about care. For yourself, your partners, and your entire network.

The few seconds it takes to use protection are nothing compared to the peace of mind of knowing you're taking care of everyone involved.

Play safe. Play often. Take care of each other.
    `},{slug:"prep-and-pep-what-you-need-to-know",title:"PrEP and PEP: What You Need to Know",category:"Sexual Health",excerpt:"Understanding HIV prevention medications and whether they're right for you.",image:"https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"5 min read",publishedDate:"2024-12-25",tags:["PrEP","PEP","HIV prevention","sexual health"],content:`
## HIV Prevention Medications

PrEP and PEP are medications that prevent HIV infection. Understanding them gives you more tools to protect yourself in the lifestyle.

## What is PrEP?

**PrEP (Pre-Exposure Prophylaxis)** = medication taken BEFORE potential HIV exposure to prevent infection.

### How It Works
- You take a pill daily (or as "on-demand" dosing for some)
- The medication stays in your system
- If HIV enters your body, PrEP prevents it from establishing infection

### Effectiveness
- Daily PrEP is 99% effective against HIV through sex when taken consistently
- Effectiveness drops significantly with inconsistent use
- Does NOT protect against other STIs

### Who Should Consider PrEP
- Anyone in the lifestyle with multiple partners
- Those with HIV-positive partners
- People who don't consistently use condoms
- Those who have had STIs recently (indicates exposure risk)
- Anyone who wants maximum protection

### Getting PrEP
1. See a healthcare provider (many Planned Parenthood locations prescribe)
2. Get baseline testing (HIV, kidney function, Hep B)
3. Get prescription
4. Follow up every 3 months for testing and refills

### Costs
- Often covered by insurance
- Manufacturer programs offer it free to uninsured
- Generic versions are becoming available

### Side Effects (Usually Mild)
- Nausea (usually goes away after a few weeks)
- Headache
- Some people experience none

## What is PEP?

**PEP (Post-Exposure Prophylaxis)** = emergency medication taken AFTER potential HIV exposure.

### When to Use PEP
- Condom broke with HIV-positive partner
- Non-consensual sex
- Sharing needles
- Any potential HIV exposure

### Time Matters
- Must start within 72 hours of exposure
- Most effective within 24 hours
- After 72 hours, PEP won't work

### How It Works
- Take medication for 28 days
- Prevents HIV from establishing infection
- Get tested afterward to confirm it worked

### Getting PEP
- Emergency rooms
- Urgent care centers
- Some pharmacies
- Sexual health clinics
- Call ahead if possible

### PEP is for Emergencies
- Not designed for regular use
- More side effects than PrEP
- If you need PEP frequently, consider PrEP instead

## PrEP vs. PEP

| Feature | PrEP | PEP |
|---------|------|-----|
| When taken | Before exposure | After exposure |
| Duration | Ongoing | 28 days |
| Timing | Can plan ahead | Must start within 72 hours |
| Use case | Regular protection | Emergency use |
| Side effects | Usually mild | Can be more significant |

## Common Questions

### "Do I still need condoms if I'm on PrEP?"
PrEP only protects against HIV. Condoms protect against other STIs and pregnancy. Many people use both.

### "Can I just do on-demand PrEP?"
"2-1-1" dosing (two pills 2-24 hours before sex, one pill 24 hours later, one pill 48 hours later) is approved in some regions. Discuss with your provider.

### "What if I miss a dose?"
Take it when you remember. If it's almost time for your next dose, skip the missed one. Don't double up. Occasional misses reduce protection somewhat.

### "Does PrEP affect other birth control?"
No known interactions with hormonal birth control.

### "Can I drink alcohol on PrEP?"
Yes, occasional alcohol doesn't affect PrEP effectiveness. Heavy drinking might make you forget doses.

### "Will PrEP affect my testing?"
PrEP can affect some HIV test results. Tell healthcare providers you're on PrEP.

## Talking About PrEP

### With Partners
> "I'm on PrEP, which means I'm protected against HIV. I still use barriers for other STIs. What's your protection situation?"

### If Partners Have Concerns
- PrEP doesn't mean promiscuity
- Being on PrEP shows health responsibility
- It's a personal medical decision

### In Profiles
Many lifestyle platforms allow you to indicate:
- HIV status
- PrEP status
- Testing frequency

Being open about PrEP is increasingly normalized and respected.

## Getting Started with PrEP

### Step 1: Consultation
Talk to a healthcare provider about your situation and risk factors.

### Step 2: Testing
Baseline tests include:
- HIV test (must be negative to start PrEP)
- Kidney function test
- Hepatitis B test
- STI screening

### Step 3: Prescription
If appropriate, you'll get a prescription (usually Truvada or Descovy).

### Step 4: Ongoing Care
Every 3 months:
- HIV testing
- STI screening
- Kidney function check
- Prescription refill

## Finding Providers

### Resources
- PleasePrEPme.org: Provider directory
- GetYourPrEP.com: Resources and provider finder
- Local LGBT centers often have PrEP programs
- Planned Parenthood provides PrEP

## Final Thoughts

PrEP and PEP are powerful tools in your sexual health toolkit. They don't replace other safer sex practices, but they add an important layer of protection.

If you're active in the lifestyle and haven't talked to a provider about PrEP, consider making that appointment. Prevention is empowerment.

Stay healthy. Stay informed. Take care of yourself.
    `}],JS=[{slug:"managing-anxiety-non-traditional-relationships",title:"Managing Anxiety in Non-Traditional Relationships",category:"Mental Health",excerpt:"Strategies for coping with anxiety that may arise in ENM and lifestyle dynamics.",image:"https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"7 min read",publishedDate:"2025-01-15",tags:["anxiety","mental health","ENM","coping"],content:`
## Anxiety in the Lifestyle

Exploring ethical non-monogamy and lifestyle activities can bring up anxiety—even for emotionally secure people. This guide helps you understand and manage that anxiety.

## Common Sources of Anxiety

### Fear of the Unknown
- "What if my partner falls in love with someone else?"
- "What if I'm not good enough compared to others?"
- "What if our relationship changes?"

### Social Anxiety
- Meeting new people at events
- Worrying about being judged
- Fear of rejection

### Attachment Anxiety
- Feeling anxious when partner is with others
- Needing constant reassurance
- Difficulty tolerating uncertainty

### Performance Anxiety
- Worrying about sexual performance
- Comparing yourself to others
- Fear of not meeting expectations

## Recognizing Anxiety

### Physical Signs
- Racing heart
- Tight chest or stomach
- Difficulty breathing
- Sweating
- Restlessness

### Mental Signs
- Racing thoughts
- Catastrophizing
- Difficulty concentrating
- Mind going blank
- Intrusive what-ifs

### Behavioral Signs
- Avoidance
- Checking phone constantly
- Seeking reassurance repeatedly
- Difficulty sleeping

## Coping Strategies

### In the Moment

**Grounding Techniques**

*5-4-3-2-1 Method:*
- 5 things you can see
- 4 things you can touch
- 3 things you can hear
- 2 things you can smell
- 1 thing you can taste

*Box Breathing:*
- Breathe in for 4 counts
- Hold for 4 counts
- Breathe out for 4 counts
- Hold for 4 counts
- Repeat

**Self-Talk**
- "This feeling is temporary"
- "I've handled difficult feelings before"
- "My anxiety doesn't predict the future"
- "I am safe right now"

### Long-Term Strategies

**Build Your Security**
- Work on self-worth independent of relationships
- Develop a life and identity outside of partnerships
- Address attachment wounds (therapy can help)
- Practice self-compassion

**Improve Communication**
- Express needs before anxiety escalates
- Ask for reassurance when needed (appropriately)
- Share your anxiety with trusted partners
- Collaborate on strategies together

**Create Structure**
- Establish check-in routines with partners
- Have agreements that help you feel secure
- Build in transition rituals (before/after partner's dates)
- Maintain your own schedule and activities

**Physical Self-Care**
- Regular exercise (powerful anti-anxiety)
- Adequate sleep
- Limited caffeine and alcohol
- Healthy nutrition

## When Your Partner is Anxious

### Helpful Responses
- Listen without judgment
- Validate their feelings
- Offer reassurance (within reason)
- Ask what they need
- Follow through on commitments

### Less Helpful Responses
- "Just relax"
- "There's nothing to worry about"
- Getting defensive
- Making them feel guilty
- Dismissing their concerns

## Anxiety vs. Intuition

How to tell the difference:

**Anxiety:**
- Based on "what ifs" and worst cases
- Feels familiar (you've felt it before, often)
- Changes with your mood
- Responds to reassurance
- Often about the future

**Intuition:**
- Based on something specific
- Feels different from your usual anxiety
- Doesn't change with mood
- Doesn't respond to reassurance
- Often about something present

If you can't tell, talk to someone you trust.

## Lifestyle-Specific Anxieties

### Before a Partner's Date
- Plan something enjoyable for yourself
- Have a check-in schedule agreed upon
- Avoid doom-scrolling or stalking metamour's social media
- Practice self-soothing techniques

### At Events/Parties
- Go with someone you trust
- Give yourself permission to leave
- Don't pressure yourself to participate
- Focus on connection, not performance

### After Difficult Experiences
- Allow yourself to process
- Talk to your partner(s)
- Consider whether something needs to change
- Be gentle with yourself

## When to Seek Help

Consider professional support if:
- Anxiety is constant or overwhelming
- It's affecting your daily life
- You're having panic attacks
- You can't manage it with self-help strategies
- It's causing significant relationship conflict

### Finding the Right Help
- Look for therapists familiar with ENM/kink
- NCSF Kink-Aware Professionals directory
- Psychology Today (filter for sex-positive)
- Ask lifestyle community for recommendations

## Anxiety Isn't a Dealbreaker

Many people successfully navigate the lifestyle while managing anxiety. It takes:
- Self-awareness
- Good communication
- Supportive partners
- Appropriate coping tools
- Sometimes professional help

Your anxiety doesn't mean you're wrong for this lifestyle—it means you're human.

## Final Thoughts

Anxiety is information, not a verdict. It tells you something needs attention—maybe a boundary, maybe reassurance, maybe personal work. Listen to it, address what you can, and don't let it make all your decisions.

You've got this.
    `},{slug:"processing-jealousy-mental-health-approach",title:"Processing Jealousy: A Mental Health Approach",category:"Mental Health",excerpt:"Understanding jealousy as an emotion and working through it constructively.",image:"https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read",publishedDate:"2025-01-13",tags:["jealousy","mental health","emotions","processing"],content:`
## Jealousy as Information

In our culture, jealousy is often treated as a character flaw or a sign you're doing non-monogamy "wrong." In reality, jealousy is just an emotion—neither good nor bad. What matters is how you process and respond to it.

## The Nature of Jealousy

### What Jealousy Actually Is
Jealousy is a complex emotion often containing:
- Fear of loss
- Fear of inadequacy
- Perceived threat to something important
- Sometimes, unmet needs signaling for attention

### Jealousy vs. Envy
- **Jealousy**: Fear of losing something you have
- **Envy**: Wanting something someone else has

In ENM, both can show up. They have different roots and different solutions.

## The Processing Framework

### Step 1: Notice and Name
When jealousy arises:
- Recognize it: "I'm feeling jealous"
- Locate it in your body: Where do you feel it?
- Rate the intensity: 1-10?

Naming emotions reduces their intensity.

### Step 2: Create Space
Before reacting:
- Take a breath (or several)
- Remind yourself this feeling is temporary
- Resist the urge to act immediately
- Journal or talk it out with yourself

### Step 3: Get Curious

Ask yourself:
- What triggered this feeling?
- What am I actually afraid of?
- What would make this feel better?
- Is there a need here that isn't being met?
- Is this old stuff or current stuff?

### Step 4: Identify the Root

Jealousy usually covers deeper fears:

**Fear of abandonment**: "They'll leave me"
**Fear of inadequacy**: "I'm not enough"
**Fear of scarcity**: "There's not enough love/time/attention"
**Fear of change**: "Everything will be different"
**Unhealed wounds**: Past betrayals, childhood experiences

### Step 5: Choose Your Response

Once you understand the root:
- **Communication**: Share your experience with your partner
- **Reassurance**: Ask for what you need (reasonably)
- **Self-soothing**: Use coping techniques
- **Boundary adjustment**: If needed, renegotiate agreements
- **Professional support**: If patterns keep repeating

## Processing Techniques

### Journaling Prompts
- "The story I'm telling myself is..."
- "What I'm really afraid of is..."
- "What I need right now is..."
- "Something that would help is..."
- "This reminds me of..."

### The "Worst Case" Exercise
1. What's the worst that could happen?
2. Could I survive that?
3. How likely is the worst case actually?
4. What's more likely to happen?
5. What's the best that could happen?

### Parts Work
Speak to your jealousy as if it's a part of you:
- "Hello jealousy, I see you"
- "What are you trying to protect me from?"
- "Thank you for trying to keep me safe"
- "I've got this. You can relax"

### Body-Based Processing
- Physical exercise to move the energy
- Deep breathing to calm the nervous system
- Progressive muscle relaxation
- Shaking or dancing to release tension

## Communication About Jealousy

### How to Share
- "I'm feeling jealous and I want to process it with you"
- "I noticed jealousy come up when [specific trigger]"
- "I think what I need is [specific request]"
- "This isn't your fault or your responsibility to fix, but I want you to know"

### What NOT to Do
- Blame your partner for your feelings
- Make accusations
- Issue ultimatums
- Expect them to "fix" your jealousy
- Suppress until you explode

### Receiving Your Partner's Jealousy
- Listen without defensiveness
- Validate their feelings
- Ask how you can help
- Don't take it personally
- Work together on solutions

## When Jealousy Signals Something Real

Sometimes jealousy is pointing to actual issues:
- A boundary being pushed
- An agreement not being honored
- Needs not being met
- Incompatibility
- Someone acting untrustworthy

If your jealousy keeps pointing to the same thing, pay attention.

## Building Jealousy Resilience

### Long-term Practices
- Regular self-care and self-worth work
- Strong support network
- Good communication habits
- Processing past wounds
- Building security in your relationship(s)

### Mindset Shifts
From: "I shouldn't feel jealous"
To: "Jealousy is information I can learn from"

From: "Their love for others threatens me"
To: "Love isn't zero-sum"

From: "I need to eliminate jealousy"
To: "I'm learning to work with jealousy"

## Professional Support

Consider therapy if:
- Jealousy is constant or overwhelming
- It's significantly impacting your relationships
- You recognize patterns from past trauma
- Self-help strategies aren't enough
- You're experiencing obsessive thoughts

Look for therapists familiar with ENM who can help without pathologizing your relationship style.

## Final Thoughts

Jealousy doesn't mean you're failing at non-monogamy. It means you're human, and something in your emotional world needs attention.

The goal isn't to never feel jealous—it's to develop a healthy relationship with the emotion so it doesn't run your life.

You can feel jealous and still choose trust. You can feel jealous and still support your partner's other relationships. You can feel jealous and still have beautiful, fulfilling connections.

One feeling at a time.
    `},{slug:"when-to-seek-professional-help",title:"When to Seek Professional Help",category:"Mental Health",excerpt:"Recognizing when you might benefit from working with a kink-aware therapist.",image:"https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"5 min read",publishedDate:"2025-01-10",tags:["therapy","mental health","kink-aware","professional help"],content:`
## Therapy and the Lifestyle

Seeking professional mental health support is a sign of strength, not weakness. In the lifestyle, finding the right therapist—one who understands and doesn't pathologize your relationship style—makes all the difference.

## Signs You Might Benefit from Therapy

### Emotional Indicators
- Persistent anxiety that self-help can't address
- Depression or prolonged low mood
- Overwhelming jealousy that doesn't improve
- Difficulty regulating emotions
- Feeling "stuck" in patterns you can't change

### Relationship Indicators
- Recurring conflicts you can't resolve
- Communication breakdown
- Trust issues affecting multiple relationships
- Difficulty setting or maintaining boundaries
- Processing relationship transitions (opening up, ending relationships)

### Behavioral Indicators
- Substance use to cope with lifestyle activities
- Avoidance of situations you want to engage with
- Compulsive behaviors around sex or dating
- Neglecting other important areas of life
- Isolation from support systems

### Trauma Indicators
- Past experiences intruding on current relationships
- Flashbacks, nightmares, or intrusive thoughts
- Strong reactions that seem disproportionate to triggers
- History of abuse or assault affecting current intimacy

## Why Kink/ENM-Aware Matters

### The Wrong Therapist Can:
- Pathologize your relationship style
- Assume your problems stem from non-monogamy
- Recommend abandoning the lifestyle as "treatment"
- Not understand the dynamics you're navigating
- Make you feel judged

### The Right Therapist Will:
- Accept your relationship style as valid
- Focus on the actual issues you're facing
- Understand lifestyle-specific challenges
- Not require you to educate them on basics
- Meet you where you are

## Finding Kink-Aware Professionals

### Resources
- **NCSF Kink-Aware Professionals**: kapprofessionals.org
- **Psychology Today**: Filter for "sex-positive," "LGBTQ+," "alternative lifestyles"
- **Open Path Collective**: Affordable sessions, filter for relevant specialties
- **Community recommendations**: Ask trusted lifestyle friends

### Questions to Ask Potential Therapists

Before starting:
- "Are you familiar with ethical non-monogamy/polyamory/kink?"
- "What's your approach when working with clients in non-traditional relationships?"
- "Do you view non-monogamy as a valid relationship structure?"
- "Have you worked with clients in the lifestyle before?"

Watch for:
- Non-judgmental responses
- Familiarity with terminology
- Focus on your actual concerns, not your relationship structure
- Willingness to learn if they have knowledge gaps

## Types of Professional Support

### Individual Therapy
For personal issues:
- Anxiety, depression, trauma
- Attachment patterns
- Self-worth work
- Processing individual experiences

### Couples/Relationship Therapy
For relationship issues:
- Communication breakdown
- Trust repair
- Processing transitions
- Conflict resolution

### Group Therapy
For community support:
- Processing shared experiences
- Learning from others
- Reducing isolation
- Building skills together

### Sex Therapy
For intimacy-related concerns:
- Performance anxiety
- Desire discrepancy
- Trauma affecting sexuality
- Kink-specific issues

## What to Expect

### First Sessions
- Intake and history
- Discussion of your goals
- Understanding their approach
- Building rapport

### Ongoing Work
- Regular sessions (weekly/biweekly typically)
- Working toward your goals
- Adjusting as needed
- Check-ins on progress

### It's Okay to Shop Around
- The first therapist might not be the right fit
- Give it a few sessions, but trust your gut
- You're hiring them; you can "fire" them
- Finding the right fit matters

## Cost and Access

### Insurance
- Many therapists take insurance
- Check your plan's mental health coverage
- Ask about out-of-network benefits

### Sliding Scale
- Many therapists offer reduced rates based on income
- Ask directly—it's common

### Community Resources
- LGBT centers often offer affordable counseling
- Universities sometimes have training clinics
- Online options (BetterHelp, Talkspace) may be more affordable

### Online vs. In-Person
Both are valid:
- Online offers convenience and more options
- In-person may feel more connected
- Choose what works for your situation

## Making the Most of Therapy

### Be Honest
- About your lifestyle activities
- About what's really bothering you
- When something the therapist says doesn't land
- If you're not making progress

### Do the Work
- Show up consistently
- Try suggested exercises
- Practice between sessions
- Be patient with the process

### Communicate with Your Therapist
- If something isn't working, say so
- Ask questions about their approach
- Share feedback on what helps

## When It's Urgent

If you're experiencing:
- Suicidal thoughts
- Urges to harm yourself or others
- Acute crisis

**Reach out immediately:**
- 988 Suicide & Crisis Lifeline: Call or text 988
- Crisis Text Line: Text HOME to 741741
- Emergency services: 911
- Your local emergency room

You don't have to be in danger to reach out. Crisis lines support all levels of distress.

## Final Thoughts

Seeking help is an act of self-love and relationship care. The right therapist can help you navigate the unique challenges of the lifestyle while supporting your overall mental health.

You deserve support. You deserve to feel better. And help is available.

Take care of yourself.
    `},{slug:"self-compassion-alternative-lifestyles",title:"Self-Compassion in Alternative Lifestyles",category:"Emotional Wellbeing",excerpt:"Being kind to yourself while navigating non-traditional relationship structures.",image:"https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read",publishedDate:"2025-01-08",tags:["self-compassion","emotional wellness","self-care","lifestyle"],content:`
## The Challenge of Self-Compassion

In the lifestyle, we often hold ourselves to impossibly high standards: being perfectly secure, never jealous, always sex-positive, endlessly compersive. When we fall short, self-criticism follows. Self-compassion offers a different path.

## What Is Self-Compassion?

Dr. Kristin Neff defines self-compassion as three elements:

### 1. Self-Kindness vs. Self-Judgment
Treating yourself with warmth when you struggle, rather than harsh criticism.

### 2. Common Humanity vs. Isolation
Recognizing that struggle is part of the shared human experience, not something that isolates you.

### 3. Mindfulness vs. Over-Identification
Being present with difficult feelings without drowning in them.

## Why It's Hard in the Lifestyle

### The "Cool Girl/Guy" Trap
There's pressure to be:
- Never jealous
- Always up for anything
- Infinitely flexible
- Completely secure
- Sexually adventurous without limit

When we don't meet these impossible standards, we criticize ourselves.

### Internalizing Judgment
Society still judges non-traditional relationships. We can internalize this and:
- Question our worth
- Feel shame about our desires
- Hide parts of ourselves
- Hold ourselves to extra-high standards to "prove" we're okay

### Comparison
In the lifestyle, it's easy to compare:
- Bodies
- Sexual skills
- Emotional processing
- Number of partners
- "Success" in various dynamics

Comparison kills self-compassion.

## Practicing Self-Compassion

### When You Feel Jealous
**Instead of:** "What's wrong with me? I shouldn't feel this way."
**Try:** "Jealousy is hard. Many people in my situation feel this. I'm doing my best."

### When You Make a Mistake
**Instead of:** "I'm terrible at this. I should have known better."
**Try:** "I made a mistake. That's human. What can I learn from this?"

### When You're Struggling
**Instead of:** "Everyone else handles this fine. Why can't I?"
**Try:** "This is genuinely difficult. It's okay to struggle with hard things."

### When You Compare Yourself
**Instead of:** "They're better than me. I'll never measure up."
**Try:** "We're all on our own journeys. My path is mine."

## Self-Compassion Exercises

### The Self-Compassion Break
When difficulty arises:

1. **Acknowledge**: "This is a moment of suffering"
2. **Common humanity**: "Suffering is part of life; others feel this too"
3. **Kindness**: "May I be kind to myself in this moment"

### Write Yourself a Letter
Write to yourself as you would to a dear friend:
- Acknowledge what you're going through
- Validate your feelings
- Offer encouragement
- Express care and support

### Physical Self-Compassion
- Place your hand on your heart
- Give yourself a gentle hug
- Speak to yourself kindly out loud
- Physical touch activates the care system

### The "What Would I Say to a Friend?" Test
When you catch yourself in self-criticism:
1. Notice what you're saying to yourself
2. Ask: "Would I say this to a friend?"
3. What would you say to them instead?
4. Say that to yourself

## Common Self-Criticism in the Lifestyle

### "I should be over this by now"
**Compassionate response:** Growth takes time. There's no timeline for emotional development.

### "I'm too jealous to be in the lifestyle"
**Compassionate response:** Jealousy is normal. What matters is how I work with it.

### "I'm not adventurous enough"
**Compassionate response:** My boundaries and pace are valid. I get to define my own adventure.

### "I can't do anything right"
**Compassionate response:** I'm human. I'm learning. Mistakes are part of growth.

### "I'm a burden on my partners"
**Compassionate response:** My needs are legitimate. Healthy relationships include support.

## Self-Compassion ≠ Self-Indulgence

Self-compassion is NOT:
- Letting yourself off the hook for harmful behavior
- Avoiding responsibility
- Making excuses
- Lowering standards
- Wallowing in self-pity

Self-compassion IS:
- Being kind while also growing
- Taking responsibility with grace
- Holding yourself accountable without cruelty
- Learning from mistakes without drowning in shame

## Building a Self-Compassion Practice

### Daily Practices
- Morning self-affirmation
- Compassionate journaling
- Mindfulness meditation
- Physical self-care

### In Difficult Moments
- Self-compassion break
- Kind self-talk
- Grounding exercises
- Reaching out for support

### Ongoing Work
- Noticing self-critical patterns
- Practicing catching and reframing
- Building kindness as a habit
- Celebrating progress

## Resources

### Books
- "Self-Compassion" by Kristin Neff
- "The Mindful Self-Compassion Workbook" by Neff and Germer
- "Radical Acceptance" by Tara Brach

### Apps
- Insight Timer (guided meditations)
- Self-Compassion app by Kristin Neff
- Headspace or Calm

### Online
- self-compassion.org (free exercises and meditations)
- YouTube guided self-compassion meditations

## Final Thoughts

You're navigating something complex. Non-traditional relationships require emotional work that society doesn't prepare us for. You deserve kindness along the way—especially from yourself.

When you stumble, when you feel things you wish you didn't, when you make mistakes: remember that you're human. And that's enough.

Be gentle with yourself. You're doing better than you think.
    `},{slug:"dealing-with-drop-after-intense-experiences",title:"Dealing with Drop After Intense Experiences",category:"Emotional Wellbeing",excerpt:"Understanding and managing sub drop, dom drop, and emotional drops after events.",image:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"8 min read",publishedDate:"2025-01-05",tags:["drop","aftercare","BDSM","emotional wellness"],content:`
## What Is Drop?

"Drop" is the physical and emotional low that can follow intense experiences—whether BDSM scenes, play parties, new relationship energy (NRE), or significant lifestyle events. It's caused by neurochemical shifts as your body returns to baseline.

## The Science Behind Drop

During intense experiences, your body releases:
- **Endorphins**: Natural painkillers creating euphoria
- **Adrenaline**: Fight-or-flight energy
- **Dopamine**: Pleasure and reward
- **Oxytocin**: Bonding hormone

After the experience, these chemicals drop, sometimes below baseline. This neurochemical "hangover" is drop.

## Types of Drop

### Sub Drop
Most commonly discussed, affecting submissives after BDSM scenes.

**Symptoms may include:**
- Sadness or emotional fragility
- Crying for "no reason"
- Fatigue and lethargy
- Physical aches
- Feeling disconnected or "spacey"
- Negative self-talk
- Difficulty concentrating

**Timing:** Can occur hours to 2-3 days after a scene

### Dom Drop / Top Drop
Less discussed but equally real, affecting dominants after scenes.

**Symptoms may include:**
- Guilt or doubt ("Did I hurt them?")
- Emotional exhaustion
- Questioning skills or worthiness
- Feeling disconnected from the sub
- Physical fatigue
- Sadness or anxiety

**Timing:** Similar to sub drop, often 1-3 days after

### Event Drop
After play parties, conferences, or intense lifestyle weekends.

**Symptoms may include:**
- Post-event depression
- Missing the energy and connection
- Difficulty returning to "regular life"
- Feeling isolated from vanilla world
- Physical exhaustion

**Timing:** Often hits 1-3 days after returning home

### NRE Crash
When new relationship energy fades or a connection ends.

**Symptoms may include:**
- Intense sadness disproportionate to connection length
- Withdrawal-like feelings
- Obsessive thoughts about the person
- Difficulty feeling interested in other things

## Recognizing Drop

### Physical Signs
- Extreme fatigue
- Headaches
- Muscle aches
- Appetite changes
- Sleep disturbances

### Emotional Signs
- Unexpected crying
- Feeling "empty" or flat
- Anxiety without clear cause
- Irritability
- Negative self-perception

### Cognitive Signs
- Difficulty concentrating
- Foggy thinking
- Intrusive negative thoughts
- Questioning everything

## Managing Drop

### Immediate Aftercare
Right after intense experiences:
- Physical comfort (blankets, water, snacks)
- Emotional presence (cuddling, reassurance)
- Grounding (talking about the experience)
- Time before separating

### Extended Aftercare

**Day 1-3:**
- Check-in texts or calls with scene partners
- Extra self-care (rest, nutrition, hydration)
- Avoid major decisions
- Plan something gentle and nurturing

**Physical:**
- Rest as much as possible
- Eat protein and complex carbs
- Stay hydrated
- Gentle exercise if it helps

**Emotional:**
- Talk to understanding friends
- Journal about your experience
- Watch comforting shows or movies
- Practice self-compassion

### For Doms/Tops Specifically
- Receive reassurance from your sub/bottom
- Process any guilt or doubt
- Acknowledge your own needs
- Don't just focus on the sub's drop

## Prevention Strategies

### Before Scenes/Events
- Ensure you're well-rested and fed
- Discuss drop history with partners
- Plan aftercare in advance
- Have check-in schedule ready

### During Scenes/Events
- Don't overextend yourself
- Stay hydrated
- Pace yourself
- Notice when you're reaching limits

### After Scenes/Events
- Prioritize aftercare
- Don't schedule demanding activities for the next day
- Have support people aware and available
- Stick to your aftercare plan

## When Drop Gets Serious

### Seek Support If:
- Drop lasts more than a week
- You're having thoughts of self-harm
- You can't function in daily life
- Drop is getting worse, not better
- You're experiencing severe anxiety or depression

### Resources
- Reach out to your partner(s)
- Contact a kink-aware therapist
- Crisis line if thoughts become dangerous: 988

## Supporting Someone in Drop

### Do:
- Check in regularly (don't wait for them to reach out)
- Validate their feelings
- Offer specific help ("Can I bring you food?")
- Reassure them this is temporary and normal
- Be patient

### Don't:
- Minimize their feelings
- Tell them to "snap out of it"
- Get defensive if they're emotional
- Leave them alone unless they ask for space
- Forget that you might need support too

## Communication Scripts

### Asking for Support
> "I'm experiencing drop from our scene. I could really use some reassurance and maybe a call?"

### Checking on a Partner
> "Hey, just checking in. How are you feeling today? Drop can hit around this time. I'm here if you need anything."

### During Drop
> "I'm having a hard time right now. I know it's drop, but I'm feeling [specific feeling]. Can we talk?"

## Normalizing Drop

Drop doesn't mean:
- Something was wrong with the scene
- You're not cut out for kink
- Your relationship is in trouble
- You're too emotional

Drop does mean:
- You had an intense experience
- Your body is recalibrating
- You're human
- Self-care is needed

## Final Thoughts

Drop is a natural consequence of the neurochemistry of intense experiences. Understanding it, preparing for it, and supporting each other through it is part of healthy lifestyle practice.

Be patient with yourself. This feeling will pass. And the memories of the intense experiences that caused it? Those are worth the temporary low.

Take care of yourself. You've earned it.
    `},{slug:"building-emotional-resilience",title:"Building Emotional Resilience",category:"Emotional Wellbeing",excerpt:"Strengthening your emotional core for the unique challenges of lifestyle relationships.",image:"https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"7 min read",publishedDate:"2025-01-02",tags:["resilience","emotional wellness","relationships","personal growth"],content:`
## What Is Emotional Resilience?

Emotional resilience is the ability to adapt to stressful situations, cope with challenges, and bounce back from setbacks. In the lifestyle, it's essential for navigating the unique emotional terrain of non-traditional relationships.

## Why It Matters in the Lifestyle

### Unique Challenges
The lifestyle involves:
- Navigating jealousy and compersion
- Managing multiple relationships
- Handling rejection
- Processing intense experiences
- Dealing with societal judgment
- Constant communication demands

### Without Resilience
You might:
- Be overwhelmed by every challenge
- Avoid situations that could be rewarding
- Damage relationships with poor coping
- Burn out on the lifestyle entirely

### With Resilience
You can:
- Navigate challenges as learning experiences
- Stay present through difficulty
- Maintain perspective during hard times
- Grow stronger through adversity

## Building Blocks of Resilience

### 1. Self-Awareness
Understanding your:
- Emotional patterns
- Triggers and sensitivities
- Coping mechanisms (healthy and unhealthy)
- Strengths and growing edges

**Practice:** Regular journaling about emotional experiences

### 2. Emotional Regulation
The ability to:
- Notice emotions without being overwhelmed
- Self-soothe during distress
- Return to baseline after intensity
- Choose responses rather than react

**Practice:** Mindfulness meditation, breathing exercises

### 3. Optimistic Thinking
Not toxic positivity, but:
- Belief that you can handle challenges
- Focus on what you can control
- Ability to find meaning in difficulty
- Hope for positive outcomes

**Practice:** Gratitude journaling, cognitive reframing

### 4. Support Systems
Having:
- People you can lean on
- Different types of support for different needs
- Community who understands the lifestyle
- Professional support if needed

**Practice:** Nurturing relationships, building community

### 5. Purpose and Values
Clarity about:
- Why you're in the lifestyle
- What matters most to you
- How you want to show up
- Your non-negotiables

**Practice:** Values clarification exercises

## Resilience-Building Exercises

### The "What I've Survived" List
Write down challenges you've already overcome:
- Relationship difficulties you've navigated
- Fears you've faced
- Hard conversations you've had
- Setbacks you've bounced back from

Use this list when facing new challenges: "I've gotten through hard things before."

### The 10-10-10 Exercise
When facing difficulty, ask:
- How will I feel about this in 10 minutes?
- How will I feel in 10 months?
- How will I feel in 10 years?

This provides perspective on current intensity.

### Stress Inoculation
Deliberately expose yourself to manageable stressors:
- Start with smaller challenges
- Practice coping with them
- Build up to bigger ones
- Each success builds confidence

### The "Best Self" Visualization
Imagine yourself handling a future challenge well:
- What are you thinking?
- What are you doing?
- How are you feeling?
- What resources are you using?

This primes your brain for success.

## Resilience in Lifestyle Contexts

### When a Partner Has a New Connection
Build resilience by:
- Focusing on your own activities and connections
- Practicing self-soothing techniques
- Challenging catastrophic thinking
- Remembering past times you've navigated this

### When Facing Rejection
Build resilience by:
- Not taking it personally (it's about fit, not worth)
- Focusing on what you learned
- Reaching out to supportive people
- Returning to activities that make you feel good

### After Difficult Conversations
Build resilience by:
- Acknowledging the courage it took
- Processing emotions through journaling or talking
- Taking care of physical needs
- Celebrating having the hard conversation

### When Mistakes Are Made
Build resilience by:
- Practicing self-compassion
- Focusing on what you can do differently
- Making amends where appropriate
- Moving forward without endless rumination

## Long-Term Resilience Development

### Daily Practices
- Mindfulness meditation (even 5 minutes)
- Physical exercise
- Gratitude reflection
- Adequate sleep and nutrition

### Weekly Practices
- Connecting with support systems
- Processing recent challenges
- Self-care activities
- Reviewing wins and growth

### Ongoing Practices
- Therapy or coaching
- Reading and learning
- Community involvement
- Intentional growth activities

## When Resilience Feels Impossible

### It's Okay to Struggle
Resilience doesn't mean never falling apart. It means:
- Knowing you can get back up
- Having tools to help you
- Asking for support when needed
- Being patient with yourself

### Signs You Need Extra Support
- Prolonged inability to cope
- Withdrawal from things you enjoy
- Physical health impacts
- Relationships deteriorating
- Thoughts of self-harm

Reach out for professional help if needed.

## The Paradox of Resilience

The more you believe you can handle challenges, the more challenges you can actually handle. Resilience builds on itself.

Start where you are. Use what you have. Do what you can.

## Final Thoughts

You don't have to be perfectly resilient. You just have to keep building, keep practicing, keep showing up.

Every challenge you navigate strengthens you for the next one. Every time you bounce back, you prove to yourself that you can.

The lifestyle asks a lot of our emotional selves. Building resilience is how we meet that ask—not by being invulnerable, but by being adaptable, supported, and kind to ourselves along the way.

You've got this.
    `},{slug:"finding-kink-friendly-support-groups",title:"Finding Kink-Friendly Support Groups",category:"Community Support",excerpt:"Resources for connecting with others who understand the lifestyle.",image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"5 min read",publishedDate:"2024-12-30",tags:["support groups","community","kink-friendly","resources"],content:`
## You're Not Alone

Finding people who understand your lifestyle—without needing to explain or defend it—is invaluable. Support groups provide community, understanding, and shared wisdom.

## Types of Support Groups

### Discussion Groups
Regular gatherings to discuss lifestyle topics:
- Polyamory discussion groups
- Kink/BDSM support meetings
- Swinger community socials
- ENM relationship support

### Processing Groups
For working through specific experiences:
- Consent violation survivors
- Relationship transitions
- Coming out support
- Drop and aftercare

### Educational Groups
Learning together:
- Skill-sharing (rope, impact, etc.)
- Communication workshops
- Relationship skills
- Safety practices

### Social Groups
Community building:
- Munches (vanilla social gatherings)
- Lifestyle social events
- Activity groups (hiking, gaming, etc.)
- Online communities

## Finding Groups

### FetLife
The main hub for kink community:
- Search events in your area
- Look for discussion groups
- Find local munches
- Join online groups by topic

### Meetup.com
Search for:
- Polyamory groups
- ENM/open relationship groups
- Alternative lifestyle groups
- Sex-positive discussion groups

### Reddit
Subreddits like:
- r/polyamory
- r/nonmonogamy
- r/BDSMcommunity
- r/swingers
- Local subreddits for your city

### Facebook
Private groups for:
- Local poly communities
- Kink discussion
- Swinger communities
- Identity-specific groups

### Discord
Many lifestyle communities have servers:
- Search for servers by topic
- Some are local, some global
- Real-time discussion and support

### Local Organizations
- LGBT centers often have ENM groups
- Sex-positive spaces
- Kink education organizations
- Lifestyle clubs may host support groups

## Evaluating Groups

### Green Flags
✓ Clear consent policies
✓ Moderation that enforces boundaries
✓ Welcoming to newcomers
✓ Diverse membership
✓ Focus on support, not drama

### Red Flags
⚠ No moderation or boundary enforcement
⚠ Exclusive or cliquish
⚠ Drama-focused
⚠ Pressure to participate in activities
⚠ Judgment of certain identities or choices

## Participating in Groups

### Getting Started
- Lurk first to understand the culture
- Introduce yourself when ready
- Share at your comfort level
- Ask questions

### Being a Good Member
- Listen more than you talk initially
- Respect confidentiality
- Don't recruit or hit on people
- Contribute positively

### What to Share
- Experiences you're processing
- Questions you have
- Resources you've found helpful
- Support for others

### What Not to Share
- Identifying information about others without consent
- Details that could "out" members
- Drama or gossip
- Unwanted advice

## Online vs. In-Person

### Online Groups
**Pros:**
- Accessible from anywhere
- Anonymity possible
- Available anytime
- Good for introverts

**Cons:**
- Less deep connection
- Can be trolled or fake
- Missing non-verbal communication
- Easier to disengage

### In-Person Groups
**Pros:**
- Real human connection
- Builds local community
- Harder to fake identity
- Non-verbal support

**Cons:**
- Requires travel
- Less anonymous
- Set times may not work
- May not be available locally

## Creating Your Own Group

If you can't find what you need:

### Steps
1. Define the purpose
2. Choose a platform (Facebook, Discord, in-person)
3. Set clear guidelines
4. Start small
5. Moderate actively
6. Grow organically

### Keys to Success
- Clear boundaries and rules
- Active moderation
- Consistent meeting times/engagement
- Welcoming atmosphere
- Balance of support and social

## Privacy Considerations

### Protecting Yourself
- Use a lifestyle-specific username
- Don't share identifying info early
- Vet groups before sharing details
- Trust your gut about safety

### Protecting Others
- Never out anyone
- Don't share others' info or stories
- Respect the confidentiality of the group
- Report violations to moderators

## Finding Your People

It may take time to find your community. Try:
- Multiple groups before settling
- Both online and in-person options
- Different topics (poly, kink, ENM broadly)
- Giving groups a few visits before deciding

The right community is out there. Keep looking.

## Final Thoughts

Support groups aren't just for crisis—they're for ongoing connection, learning, and growth. Finding your people makes the lifestyle journey richer and easier.

You deserve community that understands you. It exists. Go find it.
    `},{slug:"building-support-network",title:"Building a Support Network",category:"Community Support",excerpt:"Creating meaningful connections with people who can support your journey.",image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read",publishedDate:"2024-12-28",tags:["support network","community","connections","relationships"],content:`
## Why Support Networks Matter

In the lifestyle, you may not be able to talk to everyone in your life about your relationships and experiences. A support network of understanding people is essential for emotional wellbeing.

## Types of Support

### Emotional Support
People who listen, validate, and empathize:
- When you're processing jealousy
- After difficult conversations
- During relationship challenges
- When you need to vent

### Practical Support
People who help with logistics:
- Babysitting during date nights
- Advice on practical matters
- Recommendations and resources
- Help in emergencies

### Informational Support
People who share knowledge:
- More experienced lifestyle practitioners
- Those who've navigated similar situations
- Resources and recommendations
- Guidance and advice

### Validation Support
People who affirm your choices:
- Who understand and accept the lifestyle
- Who don't judge your decisions
- Who remind you that you're okay
- Who celebrate your wins

## Building Your Network

### Start with Who You Have

**Assess existing relationships:**
- Who might be open-minded?
- Who has shown acceptance of difference?
- Who keeps confidences?
- Who supports you unconditionally?

**Consider carefully:**
- Not everyone needs to know everything
- Some people can support some areas but not others
- You can share selectively

### Expand into Community

**Lifestyle community:**
- Attend munches and social events
- Join online communities
- Take classes and workshops
- Be present consistently

**Building connections:**
- Be genuinely interested in others
- Offer support before you need it
- Follow through on commitments
- Be trustworthy with others' information

### Create Different Circles

**Inner circle:**
People who know everything and can be called any time
- Very few people
- High trust
- Deep connection

**Middle circle:**
People who know some things and can be called upon sometimes
- Lifestyle friends
- Trusted vanilla friends who know
- Regular support people

**Outer circle:**
People who might not know details but still support
- Work friends who don't know specifics
- Family members with limited info
- Casual acquaintances

## Nurturing Connections

### Be a Good Friend First
- Listen actively
- Follow up on things they've shared
- Celebrate their wins
- Be there during hard times
- Keep their confidences

### Reciprocity Matters
- Offer support, not just receive it
- Be available when they need you
- Don't make the relationship one-sided
- Express appreciation

### Stay Connected
- Regular check-ins
- Share your life updates
- Remember important dates
- Make time for connection

## When You Need Support

### Asking for Help
Many people struggle to ask. Try:

> "I'm going through something and could use some support. Do you have time to talk?"

> "I need to process something. Can I call you tonight?"

> "I'm having a hard day. Could we grab coffee?"

### Being Specific
Help people help you:

> "I don't need advice, I just need to vent."

> "I'm looking for feedback on this situation."

> "I need distraction right now—can we talk about something else?"

### Different Support for Different Needs
- Processing jealousy → someone who understands ENM
- Relationship advice → someone who knows your situation well
- Distraction → anyone fun to be with
- Crisis → someone available and stable

## Challenges

### Isolation
If you don't have support:
- Online communities can bridge the gap
- Therapists provide professional support
- Building community takes time—start now
- Quality over quantity

### Burnout
Supporting others while needing support:
- It's okay to take breaks
- Set boundaries on your availability
- Don't be the only support for anyone
- Ask for support yourself

### Changing Relationships
When relationships shift:
- Some friends may not understand lifestyle changes
- Some lifestyle friends may fade after relationship changes
- Be flexible about who fills what role
- Grieve lost connections as needed

## Professional Support

Don't forget:
- Therapists (kink/ENM-aware)
- Coaches
- Support groups
- Crisis resources

Professional support complements but doesn't replace personal connections.

## Building Community

### Be the Connector
- Introduce people who might get along
- Host gatherings
- Create the community you want to see
- Welcome newcomers

### Invest in Community
- Show up consistently
- Contribute more than you take
- Help others build their networks
- Be part of something larger than yourself

## Quality Over Quantity

You don't need many people:
- A few true supporters are better than many surface connections
- Deep relationships take time to build
- It's okay if your network is small
- Focus on quality of connection

## Final Thoughts

Building a support network is one of the most important things you can do for your lifestyle journey. You don't have to navigate this alone.

Start where you are. Reach out to one person. Join one community. Build from there.

The connections you make will support you through challenges and celebrate with you through joys. And you'll do the same for them.

You're worth supporting. Go build your network.
    `},{slug:"online-communities-forums",title:"Online Communities and Forums",category:"Community Support",excerpt:"Safe online spaces to discuss experiences and seek advice.",image:"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"4 min read",publishedDate:"2024-12-25",tags:["online communities","forums","resources","support"],content:`
## The Value of Online Community

Online communities offer unique benefits for lifestyle folks: accessibility from anywhere, anonymity if needed, 24/7 availability, and connection with people you might never meet locally.

## Where to Find Communities

### Reddit
**Subreddits for lifestyle topics:**
- r/polyamory (400k+ members)
- r/nonmonogamy
- r/BDSMcommunity
- r/swingers
- r/OpenMarriage
- r/polyfidelity

**How to use Reddit:**
- Read rules before posting
- Search before asking common questions
- Contribute to discussions, not just your own posts
- Use throwaway accounts for privacy

### FetLife
**The "Facebook of kink"**
- Groups for every interest and location
- Event listings
- Personal profiles
- Writings and resources

**Getting started:**
- Create a profile (can be anonymous)
- Join local and interest-based groups
- Read before you post
- FetLife is NOT a dating site—use it for community

### Discord
**Real-time chat servers:**
- Search "polyamory Discord" or "BDSM Discord"
- Many have text channels and voice chats
- Often more active discussion
- Good for casual socializing

### Facebook Groups
**Private groups available:**
- Local poly and ENM groups
- Kink community groups
- Swinger community groups
- Identity-specific groups

**Privacy considerations:**
- Use your real Facebook = less anonymous
- Group membership may be visible
- Consider a lifestyle-only Facebook account

### Specialized Forums
**Platform-specific communities:**
- Loving More (polyamory)
- The Ethical Slut forums
- SwingLifestyle forums
- Various dating platform forums

## Navigating Online Spaces

### Before Posting
- Read the rules/FAQ
- Search if your question has been asked
- Observe the culture of the space
- Check if it's the right place for your topic

### When Posting
- Be specific about your situation
- Note your experience level if relevant
- Ask clear questions
- Be respectful of different perspectives

### Engaging with Responses
- Thank people for their input
- Clarify if needed
- Don't get defensive about feedback
- Report genuinely problematic responses

## Getting the Most from Online Communities

### Diversify Your Sources
- Don't rely on one community
- Different spaces have different perspectives
- Get multiple viewpoints

### Give as Much as You Take
- Answer others' questions
- Share your experiences
- Contribute resources
- Support community members

### Remember the Limitations
- Online advice isn't professional help
- Anonymity means you don't know who's advising
- Not all advice applies to your situation
- Use it as one input, not the only input

## Staying Safe Online

### Privacy
- Use lifestyle-specific usernames
- Don't share identifying information
- Be careful about photos
- Assume anything online can be screenshot

### Emotional Safety
- Don't feed the trolls
- Block/mute when needed
- Take breaks from heated discussions
- Not all feedback is valid or helpful

### Spotting Bad Advice
- Anyone claiming to have THE answer
- Advice that feels wrong for your situation
- Shaming for asking questions
- "One true way" mentality

## Building Online Relationships

### Moving from Online to Real Connection
- Video chat before meeting
- Meet in public first
- Verify through multiple channels
- Trust building takes time

### Online Friends Are Real Friends
- Relationships formed online can be deep
- Community support is valuable
- Don't discount online connections

## When Online Isn't Enough

Online community complements but doesn't replace:
- In-person connection
- Professional support (therapy)
- Actual relationships
- Real-world community

Use online as a supplement, not a substitute.

## Final Thoughts

Online communities have helped countless people in the lifestyle feel less alone, learn from others' experiences, and find their people.

Use them wisely. Contribute generously. Protect your privacy. And remember that there's a whole community out there going through similar things.

You're not alone. Log on and find your people.
    `}],XS=[{slug:"what-is-ethical-non-monogamy",title:"What is Ethical Non-Monogamy?",category:"Ethical Non-Monogamy",excerpt:"An introduction to ENM principles and different relationship structures.",image:"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"5 min read",publishedDate:"2025-01-15",tags:["ENM","introduction","relationship structures"],content:`
## What is Ethical Non-Monogamy?

Ethical Non-Monogamy (ENM) is an umbrella term for any relationship structure where all parties consent to having romantic or sexual relationships with multiple people. The key word is "ethical"—everyone involved knows about and agrees to the arrangement.

## Core Principles of ENM

### Consent
All parties must give informed, enthusiastic consent to the relationship structure. This isn't just agreeing reluctantly—it's actively choosing this style of relationship.

### Honesty
No secrets, no deception. Everyone knows what's happening, even if they don't know every detail. The level of detail shared varies by relationship agreement.

### Communication
Constant, open dialogue about feelings, boundaries, needs, and experiences. More communication than monogamy, not less.

### Respect
For all people involved—partners, metamours (your partners' partners), and yourself.

## Types of ENM Relationships

### Polyamory
Multiple loving, committed relationships. Emphasis on emotional connection and love, not just sex.

### Swinging
Couples (or singles) who engage in recreational sex with others. Often focused on sex rather than romantic relationships.

### Open Relationships
Typically a primary couple who have sex with others, but keep romantic feelings exclusive to each other.

### Relationship Anarchy
Rejecting relationship hierarchies and societal expectations. Each relationship is defined individually without predetermined rules.

### Monogamish
Mostly monogamous with occasional exceptions, agreed upon by both partners.

### Don't Ask Don't Tell (DADT)
Partners can have other relationships, but don't discuss them. Generally considered less healthy than other forms.

## Common Misconceptions

### "It's just an excuse to cheat"
ENM is the opposite of cheating. Cheating involves deception; ENM involves consent and transparency.

### "You just haven't found 'the one'"
Many people in ENM have deep, loving primary relationships. ENM is a valid relationship orientation, not a stopgap.

### "You can't really love someone if you love others too"
Love isn't a finite resource. Parents love multiple children fully; friends can love multiple friends. Romantic love can work the same way.

### "It doesn't work"
Many ENM relationships are stable, long-term, and fulfilling. Like monogamy, success depends on the people involved and their communication.

## Is ENM Right for You?

ENM might suit you if:
- You question whether one person should meet all your needs
- You experience attraction to others without diminishing love for your partner
- You value autonomy and freedom in relationships
- You have strong communication skills (or want to develop them)
- The idea genuinely excites you (not just your partner)

ENM might not suit you if:
- You're doing it to fix a troubled relationship
- Your partner wants it but you're reluctantly agreeing
- You struggle with jealousy that feels unmanageable
- You value the exclusivity of monogamy
- You're not willing to do significant emotional work

## Getting Started

If you're curious about ENM:

1. **Research**: Read books like "The Ethical Slut," "More Than Two," or "Polysecure"
2. **Self-reflection**: What appeals to you? What concerns you?
3. **Communication**: If partnered, start conversations carefully
4. **Community**: Find local or online ENM groups to learn from others
5. **Therapy**: Consider working with an ENM-aware therapist
6. **Go slow**: There's no rush to define or act on anything

## Final Thoughts

ENM isn't better or worse than monogamy—it's different. What matters is choosing the relationship structure that genuinely works for you and practicing it with integrity.

Welcome to exploring your options.
    `},{slug:"enm-vs-cheating-understanding-difference",title:"ENM vs Cheating: Understanding the Difference",category:"Ethical Non-Monogamy",excerpt:"Why consent and communication make all the difference.",image:"https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"4 min read",publishedDate:"2025-01-12",tags:["ENM","cheating","consent","ethics"],content:`
## The Critical Difference

At first glance, someone might see ENM as "sanctioned cheating." This fundamentally misunderstands both concepts. The difference is consent and honesty.

## What is Cheating?

Cheating is violating the agreed-upon rules of a relationship. In most relationships, this means:
- Having sexual or romantic relationships outside the partnership without consent
- Hiding significant connections from a partner
- Deceiving your partner about your activities

**Key elements:**
- Violation of trust
- Deception (lying or hiding)
- Lack of consent from all parties
- Breaking established agreements

## What is ENM?

ENM involves:
- Mutually agreed-upon openness to other relationships
- Full knowledge of all parties involved
- Ongoing communication about feelings, boundaries, and activities
- Consent that can be withdrawn

**Key elements:**
- Trust is maintained through honesty
- Transparency (appropriate to each relationship's agreements)
- Full consent from all parties
- Agreements are created together

## The Consent Question

### In Cheating
- Partner doesn't know
- Partner hasn't agreed
- Deception is intentional
- Power is taken without permission

### In ENM
- Partner knows
- Partner has agreed
- Transparency is the norm
- Power is shared through negotiation

## Common Scenarios

### Scenario 1: New Attraction
**Cheating approach:** Pursue the attraction secretly, hide communications, lie about whereabouts.

**ENM approach:** Discuss the attraction with partner(s), negotiate whether/how to pursue it, keep everyone informed.

### Scenario 2: Ongoing Outside Relationship
**Cheating approach:** Maintain double life, compartmentalize relationships, hope partner never finds out.

**ENM approach:** All partners know about each other, relationships exist with transparency, no need for deception.

### Scenario 3: Feelings Developing
**Cheating approach:** Hide growing feelings, create emotional distance from primary partner to protect secret.

**ENM approach:** Share emotional experiences with partners, process feelings together, adjust agreements if needed.

## "But Isn't It Still Betrayal?"

Some argue that any outside relationship is betrayal. Here's why that doesn't apply to ENM:

### Agreements Define Betrayal
What's "betrayal" depends on what's agreed. In monogamy, outside relationships violate the agreement. In ENM, they don't—because the agreement is different.

### Consent Changes Everything
If someone agrees to share their partner with others, there's no betrayal when it happens. The betrayal would be in NOT communicating.

### It's Not About "Permission to Cheat"
ENM isn't getting permission to break rules. It's creating different rules together that work for everyone.

## Can Cheating Happen in ENM?

Yes! Cheating in ENM might look like:
- Violating specific boundaries ("We agreed to always use protection")
- Hiding a new relationship that should be disclosed
- Breaking "veto" or other agreements
- Lying about activities with other partners

Even in open relationships, breaking the actual agreements is cheating.

## For Those Struggling with the Distinction

### If You're Considering ENM
- Be honest with yourself about your motivations
- Are you trying to legitimize already-happening deception?
- Or genuinely interested in a different relationship structure?
- If you're already cheating, come clean first before proposing ENM

### If Your Partner Proposes ENM
- You get to say no
- ENM isn't something one person decides for both
- Reluctant agreement isn't real consent
- Your comfort matters equally

### If You're Comparing to Your Own Relationships
- What works for others doesn't have to work for you
- Neither monogamy nor ENM is morally superior
- The ethics are in the practice, not the structure

## Final Thoughts

The difference between ENM and cheating is simple but profound: consent and honesty. When everyone involved agrees and knows what's happening, there's no betrayal—just a different kind of relationship.

Cheating is defined by deception. ENM is defined by communication. They're opposites, not variations.
    `},{slug:"coming-out-enm-friends-family",title:"Coming Out as ENM to Friends & Family",category:"Ethical Non-Monogamy",excerpt:"Navigating conversations about your relationship choices.",image:"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"7 min read",publishedDate:"2025-01-08",tags:["coming out","family","friends","ENM"],content:`
## The Decision to Come Out

Coming out as ENM is a personal decision. You don't owe anyone information about your relationship structure, but there are situations where sharing feels right or necessary.

## Reasons People Come Out

### Practical Reasons
- Partners attending family events
- Living situations that are hard to explain
- Social media presence
- Children who might share information

### Emotional Reasons
- Desire for authenticity
- Tired of hiding or lying
- Wanting acceptance for who you are
- Building deeper relationships through honesty

### Relationship Reasons
- Partner(s) want to be acknowledged
- Feeling like you're hiding an important part of your life
- Metamours becoming significant people

## Before You Come Out

### Questions to Consider
- Why do you want to come out to this person?
- What's the best possible outcome?
- What's the worst possible outcome?
- Can you handle the worst outcome?
- Is this the right time?

### Who to Tell (and Who Not To)
Not everyone needs to know:
- Start with those most likely to be supportive
- Consider who has a genuine need to know
- Protect yourself from those who could cause harm
- You can come out selectively

### Assess Risks
Depending on your situation:
- Job security (especially in certain industries/regions)
- Custody concerns if you have children
- Family relationships that matter to you
- Community standing

## How to Have the Conversation

### Setting the Stage
- Choose a private, comfortable setting
- Ensure you have enough time
- Don't do it during conflict or stress
- Be sober and clear-headed

### The Conversation

**Open with care:**
> "There's something about my life I'd like to share with you. Our relationship matters to me, and I want to be more open with you about who I am."

**Explain simply:**
> "I'm in a type of relationship called ethical non-monogamy. This means that my partner(s) and I have agreed that we can have other romantic or sexual relationships, with everyone's knowledge and consent."

**Address misconceptions:**
> "This isn't cheating—everyone knows and agrees. It's not about our relationship being broken—we're happy. It's a choice we've made together."

**Invite questions:**
> "I know this might be new or surprising. I'm happy to answer questions if you have them."

### What Not to Do
- Don't overshare details (especially sexual ones)
- Don't be defensive from the start
- Don't expect immediate acceptance
- Don't apologize for who you are

## Handling Reactions

### Positive Reactions
- Express appreciation
- Answer questions openly
- Don't over-explain once they've accepted
- Continue the relationship normally

### Curious/Confused Reactions
- Be patient with questions
- Offer resources if they want to learn more
- Give them time to process
- Check in later

### Negative Reactions
- Stay calm
- Don't argue in the moment
- Set boundaries if needed: "I understand you don't agree, but I need you to be respectful"
- Give them space if they need it
- Accept that some people may not come around

### Worst Case Reactions
If someone threatens outing you, becomes abusive, or cuts you off:
- Prioritize your safety
- Lean on your support network
- Consider whether this relationship serves you
- Seek professional support if needed

## Specific Relationships

### Parents
- They may fear for your happiness/wellbeing
- Generational differences in understanding
- May take time to accept
- Focus on your happiness and health

### Friends
- Often more accepting than family
- May already have suspected
- Could create distance from shared friend groups
- Might open doors to their own truths

### Coworkers
- Generally higher risk
- Consider workplace culture carefully
- Know your legal protections (or lack thereof)
- You don't owe coworkers personal information

### Children
- Age-appropriate honesty
- Focus on "different kinds of families"
- Emphasize love and consent
- Consider involving a family therapist

## After Coming Out

### Give It Time
- Don't expect immediate resolution
- Check in periodically
- Be consistent in showing your life is working

### Maintain Boundaries
- You don't owe endless education
- You can decline invasive questions
- You can limit discussions if they become harmful

### Build Your Support Network
- Connect with others who've come out
- Join ENM communities
- Celebrate those who accept you
- Accept that some relationships may change

## Remember

Coming out is for you, not for them. Do it when it serves your wellbeing and authenticity. You get to choose who knows what about your life.

Your relationship structure is valid. You deserve to be seen and accepted for who you are.
    `},{slug:"bdsm-101-understanding-basics",title:"BDSM 101: Understanding the Basics",category:"BDSM & Kink",excerpt:"An introduction to kink culture, terminology, and practices.",image:"https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"8 min read",publishedDate:"2025-01-14",tags:["BDSM","kink","introduction","basics"],content:`
## What is BDSM?

BDSM stands for several overlapping concepts:
- **B**ondage & **D**iscipline
- **D**ominance & **S**ubmission  
- **S**adism & **M**asochism

It encompasses a wide range of activities, relationships, and dynamics that involve the consensual exchange of power, sensation play, and/or psychological elements.

## The Foundation: Consent

Everything in BDSM rests on consent. This means:

### Informed Consent
- Understanding what you're agreeing to
- Knowing the risks involved
- Being aware of what will happen

### Enthusiastic Consent
- Wanting to participate
- Not just absence of "no"
- Active, clear "yes"

### Ongoing Consent
- Can be withdrawn at any time
- Requires continuous communication
- Changes based on circumstances

## Key Concepts

### Safe, Sane, and Consensual (SSC)
The traditional framework:
- **Safe**: Minimize risk of harm
- **Sane**: Sound mind, not impaired
- **Consensual**: All parties agree

### Risk-Aware Consensual Kink (RACK)
A newer framework acknowledging:
- All activities carry some risk
- Participants are aware of and accept risks
- Consent is still paramount

### Safe Words
Predetermined words or signals to:
- **Stop** immediately (usually "red")
- **Slow down/check in** (usually "yellow")
- **Continue** (usually "green")

Non-verbal alternatives exist for situations where speaking isn't possible.

## The Players

### Dominant (Dom/Domme)
- Takes control during scenes
- Responsible for the experience
- Leads the dynamic

### Submissive (Sub)
- Gives up control consensually
- Follows the dominant's direction
- Submission is an active choice, not weakness

### Switch
- Enjoys both roles
- May switch within scenes or relationships
- Equally valid identity

### Other Roles
- **Top**: Does the action (tying, spanking)
- **Bottom**: Receives the action
- **Sadist**: Enjoys giving sensation/pain
- **Masochist**: Enjoys receiving sensation/pain

Note: These can combine in various ways (submissive sadist, dominant masochist, etc.)

## Types of Play

### Impact Play
Striking the body:
- Spanking (hands)
- Flogging (multi-tailed implements)
- Paddling (flat implements)
- Caning (rigid implements)

### Bondage
Restraint using:
- Rope (shibari/kinbaku)
- Cuffs and restraints
- Tape, wrap
- Furniture

### Sensation Play
Varying stimuli:
- Temperature (ice, wax)
- Texture (fur, pinwheels)
- Sensory deprivation (blindfolds)
- Tickling

### Power Exchange
The psychological dynamic:
- Protocols and rules
- Service
- Worship
- Control and surrender

### Edge Play
Higher-risk activities:
- Breath play
- Knife play
- Blood play
- Fire play

*These require significant education and carry real risks.*

## Getting Started

### Educate Yourself
- Read books (The New Topping Book/Bottoming Book, SM 101)
- Watch educational videos (not porn—actual education)
- Attend workshops
- Join communities like FetLife

### Explore Your Interests
- Take BDSM questionnaires together
- Discuss fantasies and curiosities
- Start slow and build up
- There's no rush

### Find Community
- Local munches (vanilla social gatherings)
- Workshops and classes
- Online communities
- Mentors

### Safety First
- Learn proper technique before trying
- Have safety equipment ready
- Start with lower-risk activities
- Never play under the influence

## Common Misconceptions

### "It's abuse"
Abuse involves harm without consent. BDSM involves sensation and power WITH consent. The difference is fundamental.

### "Something must be wrong with you"
BDSM practitioners are psychologically healthy. Kink is a valid sexual expression, not a disorder.

### "It's always extreme"
BDSM ranges from light spanking to elaborate scenes. Most people practice somewhere in the middle.

### "Submissives are weak"
Submission requires tremendous strength—knowing yourself, communicating needs, trusting another person.

### "Dominants are abusers"
Good dominants are caring, attentive, and prioritize their submissive's wellbeing above their own pleasure.

## Next Steps

If you're curious:
1. Research and educate yourself
2. Communicate with potential partners
3. Start with communication and negotiation
4. Try low-risk activities first
5. Build up slowly based on experience
6. Join community to continue learning

Welcome to your exploration.
    `},{slug:"importance-of-aftercare",title:"The Importance of Aftercare",category:"BDSM & Kink",excerpt:"Why aftercare is essential for healthy BDSM experiences.",image:"https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"5 min read",publishedDate:"2025-01-10",tags:["aftercare","BDSM","wellbeing","safety"],content:`
## What is Aftercare?

Aftercare is the care and attention given to all participants after a BDSM scene or intense experience. It helps everyone transition back to baseline and process what happened.

## Why Aftercare Matters

### The Physical Reasons
During intense scenes, your body experiences:
- Adrenaline and endorphin release
- Possible physical marks or soreness
- Temperature changes
- Physical exhaustion

After the scene, you need:
- Hydration
- Warmth
- Rest
- Treatment of any marks

### The Emotional Reasons
Scenes can bring up:
- Intense emotions
- Vulnerability
- Processing of power dynamics
- Connection needs

Aftercare provides:
- Reassurance
- Validation
- Emotional processing
- Connection

### The Chemical Reasons
The neurochemical "high" of a scene is followed by a drop as chemicals return to baseline. Aftercare helps ease this transition.

## What Does Aftercare Look Like?

### Physical Aftercare
- Water and hydration
- Snacks (especially sugar and protein)
- Blankets or warmth
- Physical touch (cuddling, holding)
- Treating any marks or bruises
- Rest

### Emotional Aftercare
- Verbal reassurance: "You did so well"
- Validation: "You're safe, I've got you"
- Presence: Simply being together
- Words of affirmation
- Processing the experience

### Practical Aftercare
- Checking in on wellbeing
- Making sure they can get home safely
- Planning for the next day(s)
- Contact information for follow-up

## Everyone Needs Aftercare

### For Submissives/Bottoms
Often discussed, but critical:
- Processing surrender and vulnerability
- Physical recovery from receiving
- Reassurance of value and care
- Transitioning out of subspace

### For Dominants/Tops
Less discussed, equally important:
- Processing the responsibility of control
- Recovery from the focus required
- Reassurance about their actions
- Managing dom drop

### For Switches
- Different needs depending on role played
- May need to transition between headspaces
- Address both top and bottom needs

## Negotiating Aftercare

### Questions to Ask
Before any scene, discuss:
- "What do you need after we play?"
- "What helps you feel cared for?"
- "What should I avoid doing?"
- "How long do you typically need?"

### Common Needs
Some people need:
- Lots of physical touch
- Time alone
- Verbal processing
- Distraction (TV, light conversation)
- Sleep
- Food/drink

### Individual Differences
There's no one-size-fits-all:
- Learn what your partner(s) need
- Share what you need
- Be flexible and attentive

## When Aftercare Is Unavailable

Sometimes aftercare from a play partner isn't possible:
- Casual encounters
- Events where you separate after
- Long-distance play

### Self-Care Alternatives
- Plan for your own aftercare needs
- Have a friend on call to check in
- Create a comfortable space at home
- Have comfort items ready
- Practice self-soothing techniques

### Extended Aftercare
Beyond immediate aftercare:
- Check-in texts the next day
- Phone calls if drop hits
- Continued contact as needed

## Drop: When Aftercare Isn't Enough

Even with good aftercare, drop can happen:
- Usually 1-3 days after
- Feeling sad, irritable, or "off"
- Physical symptoms possible

### Managing Drop
- Recognize it for what it is
- Reach out to play partners or support
- Practice self-compassion
- Engage in self-care
- It will pass

## Final Thoughts

Aftercare isn't optional—it's a fundamental part of ethical BDSM practice. It honors the vulnerability shared during scenes and supports everyone's wellbeing.

Negotiate it, practice it, receive it. Your scenes and relationships will be better for it.
    `},{slug:"finding-your-kink-identity",title:"Finding Your Kink Identity",category:"BDSM & Kink",excerpt:"Exploring different roles and discovering what resonates with you.",image:"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read",publishedDate:"2025-01-06",tags:["kink identity","exploration","BDSM","self-discovery"],content:`
## Your Kink Journey

Figuring out your kink identity—whether you're a dominant, submissive, switch, sadist, masochist, or something else entirely—is a personal journey. Here's how to explore.

## There's No Rush

### Take Your Time
- Identity often clarifies through experience
- It's okay not to know immediately
- Many people's identities evolve over time
- "Curious" or "exploring" are valid identities

### It's Okay to Change
- What excites you at 25 may differ at 45
- New experiences can reveal new interests
- Partners can influence what you enjoy
- Growth and change are natural

## Exploration Methods

### Self-Reflection
Questions to consider:
- In fantasies, what role do you take?
- What aspects of BDSM intrigue you most?
- Does control feel exciting to give or receive?
- Does sensation appeal from giving or receiving end?
- What do you daydream about?

### Questionnaires and Tests
Tools like the BDSM test (bdsmtest.org):
- Not definitive but helpful starting points
- Take multiple times and compare
- Discuss results with partners
- Use as conversation starters

### Education
Learn about different roles:
- Read about various dynamics
- Watch educational content
- Attend workshops
- Talk to experienced practitioners

### Experimentation
Try things (safely):
- Start with lower-risk activities
- Try different roles
- Play with different people
- Notice what resonates

## Common Identities

### Dominant
- Enjoys having control
- Takes charge in scenes
- Responsible for the experience
- Feels fulfilled by guiding others

### Submissive
- Enjoys surrendering control
- Follows direction
- Finds freedom in submission
- Feels fulfilled by serving/pleasing

### Switch
- Enjoys both roles
- May prefer one in different contexts
- Can switch within relationships or scenes
- Equally valid as single-role identities

### Sadist
- Enjoys causing sensation/pain
- Can be dominant or submissive
- Draws pleasure from partner's experience
- Requires consent and care

### Masochist
- Enjoys receiving sensation/pain
- Can be dominant or submissive
- Finds pleasure or release in sensation
- Wide range of intensity preferences

### Service-Oriented
- Focus on service and devotion
- May be domestic, sexual, or general
- Can exist in D/s or independently
- About the act of serving

### Rope Enthusiast (Rigger/Bunny)
- Focused on bondage and rope
- Rigger: the tier
- Bunny: the tied
- Can be separate from D/s

### Pet Play
- Taking on animal personas
- Pup, kitten, pony, etc.
- Can involve training dynamics
- Wide range of intensity

## What If You Don't Fit Categories?

### That's Normal
- Labels are tools, not definitions
- Many people don't fit neatly
- Create your own language if needed
- Your experience is valid regardless

### Focus on Activities vs. Identity
Instead of "what am I?", ask:
- What do I enjoy doing?
- What do I want to try?
- What dynamics feel good?
- What turns me on?

## Common Challenges

### "I should be [X]"
- Societal expectations affect us
- Gender norms can pressure identity
- Your kink is about you, not expectations
- What you WANT matters, not what you "should" be

### "My partner wants me to be [X]"
- Don't adopt identity to please others
- Authentic exploration requires freedom
- Communicate about your process
- Compromise is possible, coercion isn't

### "I'm attracted to [X] but feel shame"
- Kink shame is common and workable
- Examine where the shame comes from
- Connect with accepting community
- Consider kink-aware therapy

## Finding Your People

Once you have some sense of your interests:
- Seek community with similar interests
- Find mentors who can guide
- Connect with potential partners who complement
- Build relationships based on authenticity

## Final Thoughts

Your kink identity is yours to discover, define, and redefine as you grow. There's no right answer, no correct timeline, and no judgment for wherever you land.

Explore curiously. Communicate openly. Enjoy the journey of discovering yourself.
    `}],o3=()=>[...KS,...QS,...JS,...XS],i3={"/":"Home","/spice-app":"SPICE App","/about":"About Us","/team":"Our Team","/contact":"Contact","/quiz":"BDSM Quiz","/guide/newcomers":"For the Interested/Curious","/guide/how-to":"How To","/guide/community":"Community & Lifestyles","/guide/glossary":"Glossary","/guide/safety":"Safety","/guide/self-care":"Self Care Resources","/download":"Download SPICE"},Et=()=>{const t=qr().pathname;if(t==="/")return null;const n=t.split("/").filter(Boolean),r=[{path:"/",name:"Home"}];if(n[0]==="guide"&&n[1]==="article"&&n[2]){r.push({path:"/guide/newcomers",name:"SPICE Guide"});const s=n[2],l=o3().find(u=>u.slug===s),c=(l==null?void 0:l.title)||s.split("-").map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" ");r.push({path:t,name:c})}else{let s="";n.forEach((l,c)=>{if(s+=`/${l}`,l==="guide"&&c<n.length-1)r.push({path:"/guide/newcomers",name:"SPICE Guide"});else if(l!=="guide"){const u=i3[s]||l.charAt(0).toUpperCase()+l.slice(1);r.push({path:s,name:u})}})}const i={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:r.map((s,l)=>({"@type":"ListItem",position:l+1,name:s.name,item:`https://thespiceapp.com${s.path}`}))};return a.jsxs(a.Fragment,{children:[a.jsx(wt,{children:a.jsx("script",{type:"application/ld+json",children:JSON.stringify(i)})}),a.jsx("div",{className:"fixed top-16 left-0 right-0 z-40 glass-card border-b border-border/30 py-2 px-4",children:a.jsx("div",{className:"container mx-auto",children:a.jsx(zS,{children:a.jsx($S,{children:r.map((s,l)=>a.jsx(US,{children:l===r.length-1?a.jsx(GS,{className:"max-w-[200px] truncate",children:s.name}):a.jsxs(a.Fragment,{children:[a.jsx(YS,{asChild:!0,children:a.jsx(pe,{to:s.path,children:s.name})}),a.jsx(qS,{})]})},s.path+l))})})})})]})},s3=[{name:"100% Photo Verification",spice:"yes",feeld:"partial",threefun:"no",tinder:"partial",sdc:"no",beedoo:"no"},{name:"LGBTQ+ Inclusive",spice:"yes",feeld:"yes",threefun:"partial",tinder:"partial",sdc:"partial",beedoo:"yes"},{name:"Couples Matching",spice:"yes",feeld:"yes",threefun:"yes",tinder:"no",sdc:"yes",beedoo:"yes"},{name:"Partner Linking with Relationship Type",spice:"yes",feeld:"partial",threefun:"partial",tinder:"no",sdc:"partial",beedoo:"partial"},{name:"Couple Profile Verification (Both Partners)",spice:"yes",feeld:"no",threefun:"no",tinder:"no",sdc:"partial",beedoo:"no"},{name:"Polyamorous Lifestyle Support",spice:"yes",feeld:"yes",threefun:"partial",tinder:"no",sdc:"partial",beedoo:"partial"},{name:"BDSM Quiz & Compatibility",spice:"yes",feeld:"partial",threefun:"no",tinder:"no",sdc:"no",beedoo:"partial"},{name:"Learning Modules & Education",spice:"yes",feeld:"no",threefun:"no",tinder:"no",sdc:"no",beedoo:"no"},{name:"Hyper Match AI Engine",spice:"yes",feeld:"no",threefun:"no",tinder:"partial",sdc:"no",beedoo:"no"},{name:"Advanced Match Filters",spice:"yes",feeld:"partial",threefun:"partial",tinder:"partial",sdc:"yes",beedoo:"partial"},{name:"Couples Activity Log Dashboard",spice:"yes",feeld:"no",threefun:"no",tinder:"no",sdc:"partial",beedoo:"no"},{name:"ISO Local User Posts",spice:"yes",feeld:"no",threefun:"no",tinder:"no",sdc:"yes",beedoo:"no"},{name:"Community Forum with Groups",spice:"yes",feeld:"no",threefun:"partial",tinder:"no",sdc:"yes",beedoo:"partial"},{name:"User Feedback & Validations",spice:"yes",feeld:"partial",threefun:"no",tinder:"no",sdc:"partial",beedoo:"no"},{name:"200+ Desire Tags",spice:"yes",feeld:"partial",threefun:"partial",tinder:"no",sdc:"partial",beedoo:"partial"},{name:"Event Integration",spice:"coming",feeld:"no",threefun:"no",tinder:"no",sdc:"yes",beedoo:"no"},{name:"Privacy Controls",spice:"yes",feeld:"partial",threefun:"partial",tinder:"partial",sdc:"yes",beedoo:"partial"},{name:"Community Verified",spice:"yes",feeld:"no",threefun:"no",tinder:"no",sdc:"partial",beedoo:"no"},{name:"No Fake Profiles",spice:"yes",feeld:"partial",threefun:"no",tinder:"no",sdc:"partial",beedoo:"partial"},{name:"Free Messaging",spice:"yes",feeld:"no",threefun:"no",tinder:"no",sdc:"no",beedoo:"partial"},{name:"Group Chats",spice:"yes",feeld:"no",threefun:"yes",tinder:"no",sdc:"yes",beedoo:"yes"},{name:"Travel Mode",spice:"coming",feeld:"yes",threefun:"no",tinder:"yes",sdc:"yes",beedoo:"no"},{name:"Anonymous Browsing",spice:"yes",feeld:"partial",threefun:"partial",tinder:"no",sdc:"yes",beedoo:"partial"}],a3=[{key:"spice",name:"SPICE",highlight:!0},{key:"feeld",name:"Feeld",highlight:!1},{key:"threefun",name:"3Fun",highlight:!1},{key:"tinder",name:"Tinder",highlight:!1},{key:"sdc",name:"SDC",highlight:!1},{key:"beedoo",name:"Beedoo",highlight:!1}],Oo=({status:e})=>{switch(e){case"yes":return a.jsx(K.div,{initial:{scale:0},whileInView:{scale:1},transition:{type:"spring",stiffness:500,damping:30},className:"w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center",children:a.jsx(Ti,{className:"w-5 h-5 text-green-400"})});case"no":return a.jsx(K.div,{initial:{scale:0},whileInView:{scale:1},transition:{type:"spring",stiffness:500,damping:30},className:"w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center",children:a.jsx(jc,{className:"w-5 h-5 text-red-400"})});case"partial":return a.jsx(K.div,{initial:{scale:0},whileInView:{scale:1},transition:{type:"spring",stiffness:500,damping:30},className:"w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center",children:a.jsx(g0,{className:"w-5 h-5 text-yellow-400"})});case"coming":return a.jsx(K.div,{initial:{scale:0},whileInView:{scale:1},transition:{type:"spring",stiffness:500,damping:30},className:"px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium",children:"Soon"})}},l3=()=>a.jsxs("div",{className:"relative min-h-screen",children:[a.jsxs(wt,{children:[a.jsx("title",{children:"SPICE App Features — Compare Dating Apps for Swingers & BDSM"}),a.jsx("meta",{name:"description",content:"See how SPICE compares to Feeld, 3Fun, Tinder, SDC, and other dating apps. Discover our unique features for swingers, BDSM, and ENM communities."}),a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/spice-app"})]}),a.jsx(ma,{}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("main",{className:"relative z-10 pt-32 pb-12",children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs(K.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center mb-16",children:[a.jsxs("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:["Why Choose ",a.jsx("span",{className:"text-gradient",children:"SPICE"}),"?"]}),a.jsx("p",{className:"text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto",children:"See how SPICE compares to other dating apps. We're building the most inclusive, verified, and feature-rich platform for the lifestyle community."})]}),a.jsx(K.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"glass-card rounded-2xl overflow-hidden",children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full min-w-[800px]",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("th",{className:"p-4 text-left text-muted-foreground font-medium",children:"Features"}),a3.map((e,t)=>a.jsx(K.th,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.1*t},className:`p-4 text-center ${e.highlight?"bg-primary/10 text-primary font-bold text-lg":"text-foreground font-medium"}`,children:e.name},e.key))]})}),a.jsx("tbody",{children:s3.map((e,t)=>a.jsxs(K.tr,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.05*t},viewport:{once:!0},className:"border-b border-border/30 hover:bg-muted/20 transition-colors",children:[a.jsx("td",{className:"p-4 font-medium",children:e.name}),a.jsx("td",{className:"p-4 text-center bg-primary/5",children:a.jsx("div",{className:"flex justify-center",children:a.jsx(Oo,{status:e.spice})})}),a.jsx("td",{className:"p-4 text-center",children:a.jsx("div",{className:"flex justify-center",children:a.jsx(Oo,{status:e.feeld})})}),a.jsx("td",{className:"p-4 text-center",children:a.jsx("div",{className:"flex justify-center",children:a.jsx(Oo,{status:e.threefun})})}),a.jsx("td",{className:"p-4 text-center",children:a.jsx("div",{className:"flex justify-center",children:a.jsx(Oo,{status:e.tinder})})}),a.jsx("td",{className:"p-4 text-center",children:a.jsx("div",{className:"flex justify-center",children:a.jsx(Oo,{status:e.sdc})})}),a.jsx("td",{className:"p-4 text-center",children:a.jsx("div",{className:"flex justify-center",children:a.jsx(Oo,{status:e.beedoo})})})]},e.name))})]})})}),a.jsxs(K.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"flex flex-wrap justify-center gap-6 mt-8",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center",children:a.jsx(Ti,{className:"w-4 h-4 text-green-400"})}),a.jsx("span",{className:"text-sm text-muted-foreground",children:"Full Support"})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center",children:a.jsx(g0,{className:"w-4 h-4 text-yellow-400"})}),a.jsx("span",{className:"text-sm text-muted-foreground",children:"Partial Support"})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center",children:a.jsx(jc,{className:"w-4 h-4 text-red-400"})}),a.jsx("span",{className:"text-sm text-muted-foreground",children:"Not Available"})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium",children:"Soon"}),a.jsx("span",{className:"text-sm text-muted-foreground",children:"Coming Soon"})]})]}),a.jsxs(K.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mt-16",children:[a.jsxs("h2",{className:"text-3xl font-bold mb-4",children:["Ready to experience the ",a.jsx("span",{className:"text-gradient",children:"difference"}),"?"]}),a.jsx("p",{className:"text-muted-foreground mb-8",children:"Join thousands waiting for the launch of SPICE."})]})]})}),a.jsx(Nt,{})]}),c3=[{icon:Qt,title:"Authentic Connections",description:"We believe in fostering genuine relationships built on trust, respect, and shared desires."},{icon:ha,title:"Privacy First",description:"Your privacy is sacred. We implement industry-leading security measures to protect your identity."},{icon:_r,title:"Community Driven",description:"SPICE is built by the community, for the community. Your feedback shapes our platform."},{icon:jt,title:"Inclusive by Design",description:"We celebrate all orientations, identities, and relationship styles without judgment."},{icon:Pj,title:"Verified Experience",description:"Every profile is verified. No bots, no fakes—just real people seeking real connections."},{icon:x0,title:"Innovation Forward",description:"We're constantly evolving with cutting-edge features that enhance your experience."}],u3=[{value:"10K+",label:"Waitlist Members"},{value:"200+",label:"Desire Tags"},{value:"100%",label:"Verification Rate"},{value:"50+",label:"Countries Represented"}],d3=()=>a.jsxs("div",{className:"relative min-h-screen",children:[a.jsxs(wt,{children:[a.jsx("title",{children:"About SPICE — Our Mission for Inclusive Adult Dating"}),a.jsx("meta",{name:"description",content:"Learn about SPICE's mission to create the most inclusive, verified, and privacy-focused dating app for swingers, BDSM, and ENM communities."}),a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/about"})]}),a.jsx(ma,{}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("main",{className:"relative z-10 pt-32 pb-12",children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs(K.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center mb-20",children:[a.jsxs("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:["About ",a.jsx("span",{className:"text-gradient",children:"SPICE"})]}),a.jsx("p",{className:"text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto",children:"We're on a mission to create the most inclusive, safe, and exciting platform for adults exploring their desires and connections."})]}),a.jsxs(K.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"grid md:grid-cols-2 gap-12 items-center mb-20",children:[a.jsxs("div",{children:[a.jsxs(K.h2,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"text-3xl md:text-4xl font-bold mb-6",children:["Our ",a.jsx("span",{className:"text-gradient",children:"Story"})]}),a.jsx(K.p,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{delay:.1},viewport:{once:!0},className:"text-muted-foreground mb-4",children:"SPICE was born from frustration with existing dating platforms that failed to serve the lifestyle community. We saw the need for a space where adults could explore their desires without judgment, fake profiles, or privacy concerns."}),a.jsx(K.p,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{delay:.2},viewport:{once:!0},className:"text-muted-foreground",children:"Built by members of the community, SPICE understands what you need. We're not just another dating app—we're a movement towards authentic, verified, and respectful connections."})]}),a.jsxs(K.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"glass-card rounded-2xl p-8 relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"}),a.jsx("div",{className:"relative grid grid-cols-2 gap-6",children:u3.map((e,t)=>a.jsxs(K.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.1*t},viewport:{once:!0},className:"text-center",children:[a.jsx("div",{className:"text-3xl md:text-4xl font-bold text-gradient mb-2",children:e.value}),a.jsx("div",{className:"text-sm text-muted-foreground",children:e.label})]},e.label))})]})]}),a.jsxs(K.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-20",children:[a.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-12",children:["Our ",a.jsx("span",{className:"text-gradient",children:"Values"})]}),a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:c3.map((e,t)=>a.jsxs(K.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{delay:.1*t},viewport:{once:!0},whileHover:{y:-5,scale:1.02},className:"glass-card rounded-xl p-6 group",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors",children:a.jsx(e.icon,{className:"w-6 h-6 text-primary"})}),a.jsx("h3",{className:"text-xl font-bold mb-2",children:e.title}),a.jsx("p",{className:"text-muted-foreground text-sm",children:e.description})]},e.title))})]}),a.jsxs(K.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"}),a.jsxs("div",{className:"relative",children:[a.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:["Our ",a.jsx("span",{className:"text-gradient",children:"Mission"})]}),a.jsx("p",{className:"text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto",children:'"To create a world where adults can freely explore their desires, form authentic connections, and be part of a community that celebrates individuality—all within a safe, verified, and judgment-free space."'})]})]})]})}),a.jsx(Nt,{})]}),h3="/assets/kyle-witter-e8RIkyTO.png",f3=[{name:"Kyle Witter",role:"Founder & CEO",bio:"Visionary entrepreneur and creative force behind SPICE. Kyle single-handedly designed, developed, and launched the entire platform from concept to reality. With an unwavering passion for building inclusive communities and a relentless drive to innovate, he transformed his vision of a safer, more authentic lifestyle app into existence. A true builder at heart, Kyle embodies the spirit of turning bold ideas into meaningful connections.",image:h3,gradient:"from-primary to-pink-500"},{name:"Jordan Chen",role:"CTO & Co-Founder",bio:"Ex-Google engineer passionate about privacy-first technology and secure platforms.",avatar:"💡",gradient:"from-purple-500 to-violet-500"},{name:"Sam Taylor",role:"Head of Community",bio:"Community builder dedicated to creating safe, welcoming environments for all.",avatar:"💜",gradient:"from-fuchsia-500 to-pink-500"},{name:"Morgan Blake",role:"Head of Design",bio:"Award-winning designer focused on creating beautiful, intuitive experiences.",avatar:"✨",gradient:"from-violet-500 to-purple-500"},{name:"Casey Kim",role:"Head of Trust & Safety",bio:"Expert in platform safety with a mission to eliminate fake profiles and harassment.",avatar:"🛡️",gradient:"from-rose-500 to-pink-500"},{name:"Riley Morgan",role:"Head of Product",bio:"Product visionary bringing community feedback to life with innovative features.",avatar:"🚀",gradient:"from-pink-500 to-fuchsia-500"}],p3=()=>a.jsxs("div",{className:"relative min-h-screen",children:[a.jsxs(wt,{children:[a.jsx("title",{children:"Meet the SPICE Team — Leadership Behind Your Dating App"}),a.jsx("meta",{name:"description",content:"Meet the passionate team behind SPICE. Our diverse leadership is dedicated to building the safest, most inclusive dating platform for lifestyle communities."}),a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/team"})]}),a.jsx(ma,{}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("main",{className:"relative z-10 pt-32 pb-12",children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs(K.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center mb-16",children:[a.jsxs("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:["Meet the ",a.jsx("span",{className:"text-gradient",children:"Team"})]}),a.jsx("p",{className:"text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto",children:"We're a passionate group of individuals united by our commitment to creating the best platform for the lifestyle community."})]}),a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",children:f3.map((e,t)=>a.jsxs(K.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{delay:.1*t},viewport:{once:!0},whileHover:{y:-10},className:"glass-card rounded-2xl p-6 group",children:[e.image?a.jsx(K.div,{whileHover:{scale:1.05},className:"w-28 h-28 rounded-2xl overflow-hidden mb-6 mx-auto shadow-lg ring-2 ring-primary/30",children:a.jsx("img",{src:e.image,alt:e.name,className:"w-full h-full object-cover object-top"})}):a.jsx(K.div,{whileHover:{scale:1.1,rotate:5},className:`w-24 h-24 rounded-2xl bg-gradient-to-br ${e.gradient} flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg`,children:e.avatar}),a.jsxs("div",{className:"text-center",children:[a.jsx("h3",{className:"text-xl font-bold mb-1",children:e.name}),a.jsx("p",{className:"text-primary text-sm font-medium mb-3",children:e.role}),a.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:e.bio}),a.jsxs("div",{className:"flex justify-center gap-3",children:[a.jsx(K.button,{whileHover:{scale:1.1},whileTap:{scale:.95},className:"w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors",children:a.jsx(mj,{className:"w-4 h-4 text-muted-foreground"})}),a.jsx(K.button,{whileHover:{scale:1.1},whileTap:{scale:.95},className:"w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors",children:a.jsx(Nj,{className:"w-4 h-4 text-muted-foreground"})}),a.jsx(K.button,{whileHover:{scale:1.1},whileTap:{scale:.95},className:"w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors",children:a.jsx(hj,{className:"w-4 h-4 text-muted-foreground"})})]})]})]},e.name))}),a.jsxs(K.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"}),a.jsxs("div",{className:"relative",children:[a.jsx(K.div,{initial:{scale:0},whileInView:{scale:1},transition:{type:"spring",stiffness:200},viewport:{once:!0},className:"w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-3xl mx-auto mb-6",children:"🎯"}),a.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Want to ",a.jsx("span",{className:"text-gradient",children:"Join Us"}),"?"]}),a.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"We're always looking for passionate individuals who share our vision. If you believe in creating inclusive spaces and building amazing products, we'd love to hear from you."}),a.jsx(pe,{to:"/contact",children:a.jsx(K.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors",children:"Get in Touch"})})]})]})]})}),a.jsx(Nt,{})]}),ZS=m.forwardRef(({className:e,...t},n)=>a.jsx("textarea",{className:le("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...t}));ZS.displayName="Textarea";var m3={};const g3=[{icon:gj,title:"Email Us",description:"For general inquiries",value:"info@thespiceapp.com",gradient:"from-pink-500 to-rose-500"},{icon:m0,title:"Support",description:"Get help with your account",value:"support@thespiceapp.com",gradient:"from-purple-500 to-violet-500"},{icon:ij,title:"Partnerships",description:"Business opportunities",value:"partners@thespiceapp.com",gradient:"from-fuchsia-500 to-pink-500"}],y3=[{question:"When is SPICE launching?",answer:"We're launching in 30 days! Join the waitlist to be among the first to experience SPICE."},{question:"Is SPICE free to use?",answer:"SPICE offers a generous free tier with essential features. Premium features will be available with our subscription plans."},{question:"How does verification work?",answer:"Every user goes through our photo verification process to ensure authenticity. This helps maintain a community of real, verified members."},{question:"Is my data safe?",answer:"Absolutely. We use industry-leading encryption and never share your personal information. Privacy is at the core of everything we build."}],v3=()=>{const[e,t]=m.useState({name:"",email:"",subject:"",message:""}),[n,r]=m.useState(!1),{toast:o}=bc(),i=async s=>{s.preventDefault(),r(!0);try{const l=m3.REACT_APP_BACKEND_URL||"http://localhost:8001",c=await fetch(`${l}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!c.ok)throw new Error("Failed to send message");const u=await c.json();o({title:"Message sent!",description:"We'll get back to you as soon as possible."}),t({name:"",email:"",subject:"",message:""})}catch(l){const c=l instanceof Error?l.message:"Something went wrong";o({title:"Error",description:c,variant:"destructive"})}finally{r(!1)}};return a.jsxs("div",{className:"relative min-h-screen",children:[a.jsxs(wt,{children:[a.jsx("title",{children:"Contact SPICE — Get in Touch with Our Team"}),a.jsx("meta",{name:"description",content:"Have questions about SPICE? Contact our team for support, partnerships, or general inquiries. We'd love to hear from you."}),a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/contact"})]}),a.jsx(ma,{}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("main",{className:"relative z-10 pt-32 pb-12",children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs(K.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center mb-16",children:[a.jsxs("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:["Get in ",a.jsx("span",{className:"text-gradient",children:"Touch"})]}),a.jsx("p",{className:"text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto",children:"Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-6 mb-16",children:g3.map((s,l)=>a.jsxs(K.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{delay:.1*l},viewport:{once:!0},whileHover:{y:-5},className:"glass-card rounded-xl p-6 text-center group",children:[a.jsx(K.div,{whileHover:{scale:1.1,rotate:5},className:`w-14 h-14 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`,children:a.jsx(s.icon,{className:"w-7 h-7 text-white"})}),a.jsx("h3",{className:"text-lg font-bold mb-1",children:s.title}),a.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:s.description}),a.jsx("a",{href:`mailto:${s.value}`,className:"text-primary text-sm font-medium hover:underline",children:s.value})]},s.title))}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-12",children:[a.jsxs(K.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"glass-card rounded-2xl p-8",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[a.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center",children:a.jsx(xj,{className:"w-5 h-5 text-primary"})}),a.jsx("h2",{className:"text-2xl font-bold",children:"Send a Message"})]}),a.jsxs("form",{onSubmit:i,className:"space-y-5",children:[a.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-sm font-medium text-muted-foreground mb-2 block",children:"Your Name"}),a.jsx(xo,{value:e.name,onChange:s=>t({...e,name:s.target.value}),placeholder:"John Doe",required:!0,className:"bg-muted/50 border-border/50"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-sm font-medium text-muted-foreground mb-2 block",children:"Email Address"}),a.jsx(xo,{type:"email",value:e.email,onChange:s=>t({...e,email:s.target.value}),placeholder:"john@example.com",required:!0,className:"bg-muted/50 border-border/50"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-sm font-medium text-muted-foreground mb-2 block",children:"Subject"}),a.jsx(xo,{value:e.subject,onChange:s=>t({...e,subject:s.target.value}),placeholder:"How can we help?",required:!0,className:"bg-muted/50 border-border/50"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-sm font-medium text-muted-foreground mb-2 block",children:"Message"}),a.jsx(ZS,{value:e.message,onChange:s=>t({...e,message:s.target.value}),placeholder:"Tell us more about your inquiry...",required:!0,rows:5,className:"bg-muted/50 border-border/50 resize-none"})]}),a.jsx(He,{type:"submit",disabled:n,className:"w-full",variant:"hero",size:"lg",children:n?a.jsxs(a.Fragment,{children:[a.jsx(Mf,{className:"w-4 h-4 mr-2 animate-spin"}),"Sending..."]}):a.jsxs(a.Fragment,{children:[a.jsx(kj,{className:"w-4 h-4 mr-2"}),"Send Message"]})})]})]}),a.jsxs(K.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[a.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[a.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center",children:a.jsx(m0,{className:"w-5 h-5 text-primary"})}),a.jsx("h2",{className:"text-2xl font-bold",children:"Frequently Asked"})]}),a.jsx("div",{className:"space-y-4",children:y3.map((s,l)=>a.jsxs(K.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.1*l},viewport:{once:!0},className:"glass-card rounded-xl p-5",children:[a.jsx("h3",{className:"font-bold mb-2",children:s.question}),a.jsx("p",{className:"text-sm text-muted-foreground",children:s.answer})]},s.question))}),a.jsx(K.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"glass-card rounded-xl p-6 mt-6",children:a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0",children:a.jsx(yj,{className:"w-6 h-6 text-white"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-bold mb-1",children:"Headquarters"}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["SPICE HQ",a.jsx("br",{}),"Virginia Beach, VA",a.jsx("br",{}),"United States"]})]})]})})]})]})]})}),a.jsx(Nt,{})]})};function x3(e,t=[]){let n=[];function r(i,s){const l=m.createContext(s);l.displayName=i+"Context";const c=n.length;n=[...n,s];const u=h=>{var g;const{scope:p,children:f,...w}=h,x=((g=p==null?void 0:p[e])==null?void 0:g[c])||l,b=m.useMemo(()=>w,Object.values(w));return a.jsx(x.Provider,{value:b,children:f})};u.displayName=i+"Provider";function d(h,p){var x;const f=((x=p==null?void 0:p[e])==null?void 0:x[c])||l,w=m.useContext(f);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${h}\` must be used within \`${i}\``)}return[u,d]}const o=()=>{const i=n.map(s=>m.createContext(s));return function(l){const c=(l==null?void 0:l[e])||i;return m.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return o.scopeName=e,[r,w3(o,...t)]}function w3(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const s=r.reduce((l,{useScope:c,scopeName:u})=>{const h=c(i)[`__scope${u}`];return{...l,...h}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}var b3=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ek=b3.reduce((e,t)=>{const n=Db(`Primitive.${t}`),r=m.forwardRef((o,i)=>{const{asChild:s,...l}=o,c=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(c,{...l,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),Dp="Progress",Lp=100,[S3]=x3(Dp),[k3,C3]=S3(Dp),tk=m.forwardRef((e,t)=>{const{__scopeProgress:n,value:r=null,max:o,getValueLabel:i=T3,...s}=e;(o||o===0)&&!uv(o)&&console.error(P3(`${o}`,"Progress"));const l=uv(o)?o:Lp;r!==null&&!dv(r,l)&&console.error(j3(`${r}`,"Progress"));const c=dv(r,l)?r:null,u=nc(c)?i(c,l):void 0;return a.jsx(k3,{scope:n,value:c,max:l,children:a.jsx(ek.div,{"aria-valuemax":l,"aria-valuemin":0,"aria-valuenow":nc(c)?c:void 0,"aria-valuetext":u,role:"progressbar","data-state":ok(c,l),"data-value":c??void 0,"data-max":l,...s,ref:t})})});tk.displayName=Dp;var nk="ProgressIndicator",rk=m.forwardRef((e,t)=>{const{__scopeProgress:n,...r}=e,o=C3(nk,n);return a.jsx(ek.div,{"data-state":ok(o.value,o.max),"data-value":o.value??void 0,"data-max":o.max,...r,ref:t})});rk.displayName=nk;function T3(e,t){return`${Math.round(e/t*100)}%`}function ok(e,t){return e==null?"indeterminate":e===t?"complete":"loading"}function nc(e){return typeof e=="number"}function uv(e){return nc(e)&&!isNaN(e)&&e>0}function dv(e,t){return nc(e)&&!isNaN(e)&&e<=t&&e>=0}function P3(e,t){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Lp}\`.`}function j3(e,t){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Lp} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var ik=tk,N3=rk;const rc=m.forwardRef(({className:e,value:t,...n},r)=>a.jsx(ik,{ref:r,className:le("relative h-4 w-full overflow-hidden rounded-full bg-secondary",e),...n,children:a.jsx(N3,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(t||0)}%)`}})}));rc.displayName=ik.displayName;const E3=({insights:e,onRestart:t,responses:n})=>{const{toast:r}=bc(),[o,i]=m.useState(!1),[s,l]=m.useState(null),[c,u]=m.useState(!1),d=f=>f<25?"Submissive":f<45?"Sub-leaning Switch":f<55?"Switch":f<75?"Dom-leaning Switch":"Dominant",h=async()=>{i(!0);try{navigator.share?(await navigator.share({title:"My BDSM Compatibility Results",text:`I just completed the SPICE BDSM Compatibility Quiz! My role: ${e.archetype}`,url:window.location.href}),r({title:"Shared!",description:"Results shared successfully"})):(await navigator.clipboard.writeText(window.location.href),l(window.location.href),r({title:"Link Copied!",description:"Share this link with others"}))}catch(f){console.error("Share error:",f);try{await navigator.clipboard.writeText(window.location.href),r({title:"Link Copied!",description:"Results link copied to clipboard"})}catch{r({title:"Share Failed",description:"Unable to share results. Try copying the URL manually.",variant:"destructive"})}}finally{i(!1)}},p=async()=>{s&&(await navigator.clipboard.writeText(s),u(!0),setTimeout(()=>u(!1),2e3),r({title:"Copied!",description:"Share link copied to clipboard"}))};return a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsx("div",{className:"sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border/50 p-4 z-10",children:a.jsxs("div",{className:"max-w-4xl mx-auto flex items-center justify-between",children:[a.jsxs(pe,{to:"/",className:"flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",children:[a.jsx(Wl,{className:"w-4 h-4"}),"Back to Home"]}),a.jsxs(He,{variant:"outline",size:"sm",onClick:t,children:[a.jsx(bj,{className:"w-4 h-4 mr-2"}),"Retake Quiz"]})]})}),a.jsxs("div",{className:"max-w-4xl mx-auto p-4 md:p-8",children:[a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[a.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-pink-500/20 mb-6",children:a.jsx(jt,{className:"w-10 h-10 text-primary"})}),a.jsx("h1",{className:"text-3xl md:text-4xl font-bold mb-2",children:"Your Results Are Ready!"}),a.jsx("div",{className:"inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-xl mt-4",children:e.archetype})]}),a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-card/50 border border-border/50 rounded-2xl p-6 mb-6",children:[a.jsxs("h2",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[a.jsx(Qt,{className:"w-5 h-5 text-pink-500"}),"Your Intimacy Profile"]}),a.jsx("p",{className:"text-lg text-muted-foreground leading-relaxed",children:e.personalitySummary})]}),a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[a.jsxs("div",{className:"bg-card/50 border border-border/50 rounded-xl p-5",children:[a.jsx("h3",{className:"font-semibold mb-3",children:"Power Dynamic Spectrum"}),a.jsx("div",{className:"mb-2",children:a.jsx(rc,{value:e.scores.dominanceSubmission,className:"h-3"})}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted-foreground",children:"Submissive"}),a.jsx("span",{className:"font-medium text-primary",children:d(e.scores.dominanceSubmission)}),a.jsx("span",{className:"text-muted-foreground",children:"Dominant"})]})]}),a.jsxs("div",{className:"bg-card/50 border border-border/50 rounded-xl p-5",children:[a.jsx("h3",{className:"font-semibold mb-3",children:"Openness to Exploration"}),a.jsx("div",{className:"mb-2",children:a.jsx(rc,{value:e.scores.opennessToExploration,className:"h-3"})}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted-foreground",children:"Conservative"}),a.jsxs("span",{className:"font-medium text-primary",children:[e.scores.opennessToExploration,"%"]}),a.jsx("span",{className:"text-muted-foreground",children:"Adventurous"})]})]}),a.jsxs("div",{className:"bg-card/50 border border-border/50 rounded-xl p-5",children:[a.jsx("h3",{className:"font-semibold mb-2",children:"Communication Style"}),a.jsx("p",{className:"text-lg font-medium text-primary",children:e.scores.communicationStyle})]}),a.jsxs("div",{className:"bg-card/50 border border-border/50 rounded-xl p-5",children:[a.jsx("h3",{className:"font-semibold mb-2",children:"Experience Level"}),a.jsx("p",{className:"text-lg font-medium text-primary",children:e.scores.experienceLevel})]})]}),e.lifestyle&&a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"bg-card/50 border border-border/50 rounded-2xl p-6 mb-6",children:[a.jsx("h2",{className:"text-xl font-bold mb-4",children:"Your Lifestyle Preferences"}),a.jsxs("div",{className:"mb-4",children:[a.jsx("div",{className:"inline-block px-4 py-2 rounded-lg bg-primary/20 text-primary font-semibold mb-2",children:e.lifestyle.primary}),a.jsx("p",{className:"text-muted-foreground mt-2",children:e.lifestyle.description})]}),e.lifestyle.secondary&&e.lifestyle.secondary.length>0&&a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold mb-2 text-sm",children:"Also Compatible With:"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:e.lifestyle.secondary.map((f,w)=>a.jsx("span",{className:"px-3 py-1 rounded-full bg-muted text-sm",children:f},w))})]})]}),e.bdsmRole&&a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:"bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-6 mb-6",children:[a.jsx("h2",{className:"text-xl font-bold mb-4",children:"Your BDSM Role"}),a.jsxs("div",{className:"mb-4",children:[a.jsx("div",{className:"inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 font-bold text-lg mb-2",children:e.bdsmRole.primary}),a.jsx("p",{className:"text-muted-foreground mt-2",children:e.bdsmRole.description})]}),e.bdsmRole.style&&e.bdsmRole.style.length>0&&a.jsxs("div",{className:"mb-3",children:[a.jsx("h3",{className:"font-semibold mb-2 text-sm",children:"Your Style:"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:e.bdsmRole.style.map((f,w)=>a.jsx("span",{className:"px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-sm",children:f},w))})]}),e.bdsmRole.secondary&&e.bdsmRole.secondary.length>0&&a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold mb-2 text-sm",children:"Secondary Roles:"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:e.bdsmRole.secondary.map((f,w)=>a.jsx("span",{className:"px-3 py-1 rounded-full bg-muted text-sm",children:f},w))})]})]}),e.topKinks&&e.topKinks.length>0&&a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"bg-card/50 border border-border/50 rounded-2xl p-6 mb-6",children:[a.jsx("h2",{className:"text-xl font-bold mb-4",children:"Your Top Kinks & Interests"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.topKinks.map((f,w)=>a.jsxs("div",{className:"p-4 rounded-xl bg-background/50 border border-border/30",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("h3",{className:"font-semibold",children:f.name}),a.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${f.interest==="high"?"bg-primary/20 text-primary":f.interest==="medium"?"bg-yellow-500/20 text-yellow-500":"bg-muted text-muted-foreground"}`,children:f.interest==="high"?"🔥 High":f.interest==="medium"?"⭐ Medium":"💭 Low"})]}),a.jsx("p",{className:"text-sm text-muted-foreground",children:f.description})]},w))})]}),e.hardLimits&&e.hardLimits.length>0&&a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:"bg-red-500/5 border border-red-500/20 rounded-2xl p-6 mb-6",children:[a.jsx("h2",{className:"text-xl font-bold mb-3 text-red-400",children:"Your Hard Limits"}),a.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"These are important boundaries that partners should respect:"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:e.hardLimits.map((f,w)=>a.jsxs("span",{className:"px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm",children:["⛔ ",f]},w))})]}),a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"bg-card/50 border border-border/50 rounded-2xl p-6 mb-6",children:[a.jsx("h2",{className:"text-xl font-bold mb-4",children:"Key Personality Traits"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:e.keyTraits.map((f,w)=>a.jsxs("div",{className:"flex gap-3 p-3 rounded-lg bg-background/50",children:[a.jsx("div",{className:"w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold text-foreground",children:f.trait}),a.jsx("p",{className:"text-sm text-muted-foreground",children:f.description})]})]},w))})]}),e.idealPartner&&a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:"bg-gradient-to-br from-primary/10 to-pink-500/10 border border-primary/20 rounded-2xl p-6 mb-6",children:[a.jsxs("h2",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[a.jsx(Qt,{className:"w-5 h-5 text-primary"}),"Your Ideal Partner"]}),a.jsx("p",{className:"text-muted-foreground leading-relaxed",children:e.idealPartner})]}),a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"bg-card/50 border border-border/50 rounded-2xl p-6 mb-6",children:[a.jsxs("h2",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[a.jsx(jj,{className:"w-5 h-5 text-primary"}),"Partner Compatibility Insights"]}),a.jsx("p",{className:"text-muted-foreground leading-relaxed",children:e.compatibilityInsights})]}),a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.65},className:"bg-card/50 border border-border/50 rounded-2xl p-6 mb-8",children:[a.jsx("h2",{className:"text-xl font-bold mb-4",children:"Areas for Exploration & Growth"}),a.jsx("ul",{className:"space-y-2",children:e.growthAreas.map((f,w)=>a.jsxs("li",{className:"flex items-start gap-3",children:[a.jsx(jt,{className:"w-4 h-4 mt-1 text-primary flex-shrink-0"}),a.jsx("span",{className:"text-muted-foreground",children:f})]},w))})]}),a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:"text-center",children:[a.jsx("p",{className:"text-muted-foreground mb-4",children:"Ready to find your perfect match?"}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[a.jsx(pe,{to:"/",children:a.jsxs(He,{size:"lg",className:"bg-gradient-to-r from-primary to-pink-600",children:["Join SPICE Waitlist",a.jsx(Qt,{className:"ml-2 w-4 h-4"})]})}),a.jsxs(He,{variant:"outline",size:"lg",onClick:h,disabled:o,children:[a.jsx(Cj,{className:"mr-2 w-4 h-4"}),o?"Sharing...":"Share Results"]}),s&&a.jsxs("div",{className:"mt-4 p-4 bg-muted rounded-lg",children:[a.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Shareable Link:"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"text",value:s,readOnly:!0,className:"flex-1 px-3 py-2 bg-background border border-border rounded text-sm"}),a.jsx(He,{size:"sm",variant:"outline",onClick:p,children:c?a.jsx(Ti,{className:"w-4 h-4"}):a.jsx(lj,{className:"w-4 h-4"})})]})]})]})]})]})]})};function sk(e,[t,n]){return Math.min(n,Math.max(t,e))}var ak=["PageUp","PageDown"],lk=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ck={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Hi="Slider",[Ph,M3,A3]=Sc(Hi),[uk]=Li(Hi,[A3]),[I3,zc]=uk(Hi),dk=m.forwardRef((e,t)=>{const{name:n,min:r=0,max:o=100,step:i=1,orientation:s="horizontal",disabled:l=!1,minStepsBetweenThumbs:c=0,defaultValue:u=[r],value:d,onValueChange:h=()=>{},onValueCommit:p=()=>{},inverted:f=!1,form:w,...x}=e,b=m.useRef(new Set),g=m.useRef(0),y=s==="horizontal"?R3:D3,[S=[],k]=Cc({prop:d,defaultProp:u,onChange:B=>{var $;($=[...b.current][g.current])==null||$.focus(),h(B)}}),P=m.useRef(S);function j(B){const V=_3(S,B);M(B,V)}function N(B){M(B,g.current)}function R(){const B=P.current[g.current];S[g.current]!==B&&p(S)}function M(B,V,{commit:$}={commit:!1}){const _=z3(i),X=$3(Math.round((B-r)/i)*i+r,_),G=sk(X,[r,o]);k((z=[])=>{const E=F3(z,G,V);if(H3(E,c*i)){g.current=E.indexOf(G);const I=String(E)!==String(z);return I&&$&&p(E),I?E:z}else return z})}return a.jsx(I3,{scope:e.__scopeSlider,name:n,disabled:l,min:r,max:o,valueIndexToChangeRef:g,thumbs:b.current,values:S,orientation:s,form:w,children:a.jsx(Ph.Provider,{scope:e.__scopeSlider,children:a.jsx(Ph.Slot,{scope:e.__scopeSlider,children:a.jsx(y,{"aria-disabled":l,"data-disabled":l?"":void 0,...x,ref:t,onPointerDown:ie(x.onPointerDown,()=>{l||(P.current=S)}),min:r,max:o,inverted:f,onSlideStart:l?void 0:j,onSlideMove:l?void 0:N,onSlideEnd:l?void 0:R,onHomeKeyDown:()=>!l&&M(r,0,{commit:!0}),onEndKeyDown:()=>!l&&M(o,S.length-1,{commit:!0}),onStepKeyDown:({event:B,direction:V})=>{if(!l){const X=ak.includes(B.key)||B.shiftKey&&lk.includes(B.key)?10:1,G=g.current,z=S[G],E=i*X*V;M(z+E,G,{commit:!0})}}})})})})});dk.displayName=Hi;var[hk,fk]=uk(Hi,{startEdge:"left",endEdge:"right",size:"width",direction:1}),R3=m.forwardRef((e,t)=>{const{min:n,max:r,dir:o,inverted:i,onSlideStart:s,onSlideMove:l,onSlideEnd:c,onStepKeyDown:u,...d}=e,[h,p]=m.useState(null),f=Fe(t,y=>p(y)),w=m.useRef(void 0),x=Ob(o),b=x==="ltr",g=b&&!i||!b&&i;function v(y){const S=w.current||h.getBoundingClientRect(),k=[0,S.width],j=Op(k,g?[n,r]:[r,n]);return w.current=S,j(y-S.left)}return a.jsx(hk,{scope:e.__scopeSlider,startEdge:g?"left":"right",endEdge:g?"right":"left",direction:g?1:-1,size:"width",children:a.jsx(pk,{dir:x,"data-orientation":"horizontal",...d,ref:f,style:{...d.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:y=>{const S=v(y.clientX);s==null||s(S)},onSlideMove:y=>{const S=v(y.clientX);l==null||l(S)},onSlideEnd:()=>{w.current=void 0,c==null||c()},onStepKeyDown:y=>{const k=ck[g?"from-left":"from-right"].includes(y.key);u==null||u({event:y,direction:k?-1:1})}})})}),D3=m.forwardRef((e,t)=>{const{min:n,max:r,inverted:o,onSlideStart:i,onSlideMove:s,onSlideEnd:l,onStepKeyDown:c,...u}=e,d=m.useRef(null),h=Fe(t,d),p=m.useRef(void 0),f=!o;function w(x){const b=p.current||d.current.getBoundingClientRect(),g=[0,b.height],y=Op(g,f?[r,n]:[n,r]);return p.current=b,y(x-b.top)}return a.jsx(hk,{scope:e.__scopeSlider,startEdge:f?"bottom":"top",endEdge:f?"top":"bottom",size:"height",direction:f?1:-1,children:a.jsx(pk,{"data-orientation":"vertical",...u,ref:h,style:{...u.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:x=>{const b=w(x.clientY);i==null||i(b)},onSlideMove:x=>{const b=w(x.clientY);s==null||s(b)},onSlideEnd:()=>{p.current=void 0,l==null||l()},onStepKeyDown:x=>{const g=ck[f?"from-bottom":"from-top"].includes(x.key);c==null||c({event:x,direction:g?-1:1})}})})}),pk=m.forwardRef((e,t)=>{const{__scopeSlider:n,onSlideStart:r,onSlideMove:o,onSlideEnd:i,onHomeKeyDown:s,onEndKeyDown:l,onStepKeyDown:c,...u}=e,d=zc(Hi,n);return a.jsx(me.span,{...u,ref:t,onKeyDown:ie(e.onKeyDown,h=>{h.key==="Home"?(s(h),h.preventDefault()):h.key==="End"?(l(h),h.preventDefault()):ak.concat(lk).includes(h.key)&&(c(h),h.preventDefault())}),onPointerDown:ie(e.onPointerDown,h=>{const p=h.target;p.setPointerCapture(h.pointerId),h.preventDefault(),d.thumbs.has(p)?p.focus():r(h)}),onPointerMove:ie(e.onPointerMove,h=>{h.target.hasPointerCapture(h.pointerId)&&o(h)}),onPointerUp:ie(e.onPointerUp,h=>{const p=h.target;p.hasPointerCapture(h.pointerId)&&(p.releasePointerCapture(h.pointerId),i(h))})})}),mk="SliderTrack",gk=m.forwardRef((e,t)=>{const{__scopeSlider:n,...r}=e,o=zc(mk,n);return a.jsx(me.span,{"data-disabled":o.disabled?"":void 0,"data-orientation":o.orientation,...r,ref:t})});gk.displayName=mk;var jh="SliderRange",yk=m.forwardRef((e,t)=>{const{__scopeSlider:n,...r}=e,o=zc(jh,n),i=fk(jh,n),s=m.useRef(null),l=Fe(t,s),c=o.values.length,u=o.values.map(p=>wk(p,o.min,o.max)),d=c>1?Math.min(...u):0,h=100-Math.max(...u);return a.jsx(me.span,{"data-orientation":o.orientation,"data-disabled":o.disabled?"":void 0,...r,ref:l,style:{...e.style,[i.startEdge]:d+"%",[i.endEdge]:h+"%"}})});yk.displayName=jh;var Nh="SliderThumb",vk=m.forwardRef((e,t)=>{const n=M3(e.__scopeSlider),[r,o]=m.useState(null),i=Fe(t,l=>o(l)),s=m.useMemo(()=>r?n().findIndex(l=>l.ref.current===r):-1,[n,r]);return a.jsx(L3,{...e,ref:i,index:s})}),L3=m.forwardRef((e,t)=>{const{__scopeSlider:n,index:r,name:o,...i}=e,s=zc(Nh,n),l=fk(Nh,n),[c,u]=m.useState(null),d=Fe(t,v=>u(v)),h=c?s.form||!!c.closest("form"):!0,p=z0(c),f=s.values[r],w=f===void 0?0:wk(f,s.min,s.max),x=B3(r,s.values.length),b=p==null?void 0:p[l.size],g=b?W3(b,w,l.direction):0;return m.useEffect(()=>{if(c)return s.thumbs.add(c),()=>{s.thumbs.delete(c)}},[c,s.thumbs]),a.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[l.startEdge]:`calc(${w}% + ${g}px)`},children:[a.jsx(Ph.ItemSlot,{scope:e.__scopeSlider,children:a.jsx(me.span,{role:"slider","aria-label":e["aria-label"]||x,"aria-valuemin":s.min,"aria-valuenow":f,"aria-valuemax":s.max,"aria-orientation":s.orientation,"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,tabIndex:s.disabled?void 0:0,...i,ref:d,style:f===void 0?{display:"none"}:e.style,onFocus:ie(e.onFocus,()=>{s.valueIndexToChangeRef.current=r})})}),h&&a.jsx(xk,{name:o??(s.name?s.name+(s.values.length>1?"[]":""):void 0),form:s.form,value:f},r)]})});vk.displayName=Nh;var O3="RadioBubbleInput",xk=m.forwardRef(({__scopeSlider:e,value:t,...n},r)=>{const o=m.useRef(null),i=Fe(o,r),s=Fb(t);return m.useEffect(()=>{const l=o.current;if(!l)return;const c=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(c,"value").set;if(s!==t&&d){const h=new Event("input",{bubbles:!0});d.call(l,t),l.dispatchEvent(h)}},[s,t]),a.jsx(me.input,{style:{display:"none"},...n,ref:i,defaultValue:t})});xk.displayName=O3;function F3(e=[],t,n){const r=[...e];return r[n]=t,r.sort((o,i)=>o-i)}function wk(e,t,n){const i=100/(n-t)*(e-t);return sk(i,[0,100])}function B3(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function _3(e,t){if(e.length===1)return 0;const n=e.map(o=>Math.abs(o-t)),r=Math.min(...n);return n.indexOf(r)}function W3(e,t,n){const r=e/2,i=Op([0,50],[0,r]);return(r-i(t)*n)*n}function V3(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}function H3(e,t){if(t>0){const n=V3(e);return Math.min(...n)>=t}return!0}function Op(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function z3(e){return(String(e).split(".")[1]||"").length}function $3(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}var bk=dk,U3=gk,Y3=yk,G3=vk;const Sk=m.forwardRef(({className:e,...t},n)=>a.jsxs(bk,{ref:n,className:le("relative flex w-full touch-none select-none items-center",e),...t,children:[a.jsx(U3,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:a.jsx(Y3,{className:"absolute h-full bg-primary"})}),a.jsx(G3,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]}));Sk.displayName=bk.displayName;const q3=({question:e,currentAnswer:t,onAnswer:n})=>a.jsxs(K.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},className:"text-center",children:[a.jsx("div",{className:"mb-2",children:a.jsx("span",{className:"inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium",children:e.category})}),a.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-8 text-foreground",children:e.question}),e.type==="choice"&&e.options&&a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl mx-auto",children:e.options.map(r=>a.jsx(K.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>n(r.value),className:le("p-4 rounded-xl border-2 transition-all text-left",t===r.value?"border-primary bg-primary/10 shadow-lg shadow-primary/20":"border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card"),children:a.jsx("span",{className:le("font-medium",t===r.value?"text-primary":"text-foreground"),children:r.label})},r.value))}),e.type==="scale"&&e.scaleLabels&&a.jsxs("div",{className:"max-w-md mx-auto",children:[a.jsx("div",{className:"mb-8",children:a.jsx(Sk,{value:[typeof t=="number"?t:50],onValueChange:r=>n(r[0]),max:100,step:1,className:"w-full"})}),a.jsxs("div",{className:"flex justify-between text-sm text-muted-foreground",children:[a.jsx("span",{children:e.scaleLabels.min}),a.jsxs("span",{className:"text-primary font-medium",children:[typeof t=="number"?t:50,"%"]}),a.jsx("span",{children:e.scaleLabels.max})]})]}),e.type==="multi"&&e.options&&a.jsxs("div",{className:"space-y-4 max-w-xl mx-auto",children:[a.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Select all that apply"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:e.options.map(r=>{const o=Array.isArray(t)&&t.includes(r.value);return a.jsx(K.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>{const i=Array.isArray(t)?t:[];n(o?i.filter(s=>s!==r.value):[...i,r.value])},className:le("p-4 rounded-xl border-2 transition-all text-left relative",o?"border-primary bg-primary/10 shadow-lg shadow-primary/20":"border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card"),children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("div",{className:le("w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5",o?"border-primary bg-primary":"border-muted-foreground"),children:o&&a.jsx("svg",{className:"w-3 h-3 text-primary-foreground",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 13l4 4L19 7"})})}),a.jsx("span",{className:le("font-medium",o?"text-primary":"text-foreground"),children:r.label})]})},r.value)})})]})]}),_n=[{id:"relationship_structure",question:"What relationship structure appeals to you most?",category:"Lifestyle",section:"lifestyle",type:"choice",options:[{value:"monogamous",label:"Monogamous - Exclusive partnership"},{value:"open",label:"Open relationship - Sexual freedom with emotional commitment"},{value:"polyamorous",label:"Polyamorous - Multiple romantic relationships"},{value:"swinger",label:"Swinging - Recreational sex with other couples"},{value:"relationship_anarchy",label:"Relationship Anarchy - Fluid, non-hierarchical"},{value:"exploring",label:"Still exploring what works for me"}]},{id:"non_monogamy_interest",question:"How comfortable are you with ethical non-monogamy (ENM)?",category:"Lifestyle",section:"lifestyle",type:"scale",scaleLabels:{min:"Prefer monogamy",max:"Enthusiastic about ENM"}},{id:"group_play",question:"What's your interest level in group activities (threesomes, orgies, play parties)?",category:"Lifestyle",section:"lifestyle",type:"choice",options:[{value:"not_interested",label:"Not interested"},{value:"curious",label:"Curious, might try"},{value:"occasional",label:"Enjoy occasionally"},{value:"regular",label:"Regular part of my lifestyle"},{value:"prefer",label:"Strongly prefer group dynamics"}]},{id:"kink_community",question:"How involved do you want to be in the kink/BDSM community?",category:"Lifestyle",section:"lifestyle",type:"choice",options:[{value:"private",label:"Keep it completely private"},{value:"online",label:"Online communities only"},{value:"occasional",label:"Attend events occasionally"},{value:"active",label:"Active community member"},{value:"organizer",label:"Want to organize/lead in community"}]},{id:"lifestyle_integration",question:"How much do you want BDSM integrated into your daily life?",category:"Lifestyle",section:"lifestyle",type:"choice",options:[{value:"bedroom_only",label:"Bedroom only - completely separate from daily life"},{value:"occasional",label:"Occasional play sessions"},{value:"subtle_247",label:"Subtle 24/7 with protocols"},{value:"full_247",label:"Full 24/7 power exchange"},{value:"flexible",label:"Flexible - varies by mood/situation"}]},{id:"primary_role",question:"Which BDSM role resonates most with you?",category:"Role Identity",section:"role",type:"choice",options:[{value:"dominant",label:"Dominant/Dom/Domme - I lead and control"},{value:"submissive",label:"Submissive/Sub - I surrender and serve"},{value:"switch",label:"Switch - I enjoy both dominant and submissive roles"},{value:"top",label:"Top - I give sensation/action (not power exchange focused)"},{value:"bottom",label:"Bottom - I receive sensation/action"},{value:"master_mistress",label:"Master/Mistress - Authority-focused dominance"},{value:"slave",label:"Slave - Total power exchange and service"},{value:"brat",label:"Brat - Playful resistance and teasing"},{value:"primal",label:"Primal - Instinct-driven, animalistic energy"},{value:"sadist",label:"Sadist - I enjoy giving pain/intensity"},{value:"masochist",label:"Masochist - I enjoy receiving pain/intensity"},{value:"exploring",label:"Still exploring my role"}]},{id:"dominance_style",question:"If you identify as Dominant/Top, which style appeals to you most?",category:"Role Identity",section:"role",type:"multi",options:[{value:"strict",label:"Strict - Rules, discipline, structure"},{value:"sensual",label:"Sensual - Pleasure-focused, teasing"},{value:"sadistic",label:"Sadistic - Pain and intensity"},{value:"nurturing",label:"Nurturing - Caregiver, protective"},{value:"degrading",label:"Degrading - Humiliation, objectification"},{value:"primal",label:"Primal - Raw, instinctual, animalistic"},{value:"owner",label:"Owner - Possession, control, authority"},{value:"not_applicable",label:"Not applicable to me"}]},{id:"submission_style",question:"If you identify as Submissive/Bottom, which style appeals to you most?",category:"Role Identity",section:"role",type:"multi",options:[{value:"obedient",label:"Obedient - Eager to please and follow rules"},{value:"brat",label:"Brat - Playful resistance, testing boundaries"},{value:"masochistic",label:"Masochistic - Craving pain and intensity"},{value:"service",label:"Service-oriented - Acts of service and care"},{value:"pet",label:"Pet/Kitten/Puppy - Animal persona play"},{value:"little",label:"Little/Middle - Age regression play"},{value:"rope_bunny",label:"Rope bunny - Love being tied up"},{value:"slave",label:"Slave - Total power exchange"},{value:"not_applicable",label:"Not applicable to me"}]},{id:"switch_preference",question:"If you're a Switch, do you have a preference?",category:"Role Identity",section:"role",type:"choice",options:[{value:"lean_dominant",label:"Lean dominant but enjoy submitting sometimes"},{value:"lean_submissive",label:"Lean submissive but enjoy dominating sometimes"},{value:"equal",label:"Equal interest in both roles"},{value:"partner_dependent",label:"Depends on my partner's energy"},{value:"not_switch",label:"I'm not a switch"}]},{id:"power_exchange_level",question:"What level of power exchange interests you?",category:"Power Dynamics",section:"dynamics",type:"choice",options:[{value:"scene_only",label:"Scene only - Power exchange during play sessions"},{value:"bedroom",label:"Bedroom - Extended to all intimate time"},{value:"partial_247",label:"Partial 24/7 - Some aspects outside bedroom"},{value:"full_247",label:"Full 24/7 - Constant power exchange"},{value:"total_authority",label:"Total authority transfer (Master/slave dynamic)"},{value:"equal",label:"No power exchange - Equal partners who enjoy kink"}]},{id:"bondage_interest",question:"How interested are you in bondage and restraint?",category:"Kinks",section:"kinks",type:"scale",scaleLabels:{min:"Not interested",max:"Major interest"}},{id:"bondage_types",question:"Which types of bondage interest you?",category:"Kinks",section:"kinks",type:"multi",options:[{value:"rope",label:"Rope bondage/Shibari"},{value:"cuffs",label:"Cuffs and restraints"},{value:"tape",label:"Tape bondage"},{value:"furniture",label:"Bondage furniture"},{value:"mummification",label:"Mummification"},{value:"predicament",label:"Predicament bondage"},{value:"self",label:"Self-bondage"},{value:"none",label:"None interest me"}]},{id:"impact_play_interest",question:"Rate your interest in impact play (spanking, flogging, etc.)",category:"Kinks",section:"kinks",type:"scale",scaleLabels:{min:"Not interested",max:"Major interest"}},{id:"impact_types",question:"Which impact play activities interest you?",category:"Kinks",section:"kinks",type:"multi",options:[{value:"spanking_hand",label:"Spanking (hand)"},{value:"paddling",label:"Paddling"},{value:"flogging",label:"Flogging/Whips"},{value:"caning",label:"Caning"},{value:"slapping",label:"Slapping (face, body)"},{value:"punching",label:"Punching/Heavy impact"},{value:"crops",label:"Crops and riding crops"},{value:"none",label:"None interest me"}]},{id:"roleplay_scenarios",question:"Which roleplay scenarios appeal to you?",category:"Kinks",section:"kinks",type:"multi",options:[{value:"age_play",label:"Age play (Daddy/Mommy Dom, Little)"},{value:"pet_play",label:"Pet play (Puppy, Kitten, Pony)"},{value:"authority",label:"Authority figures (Teacher, Boss, Officer)"},{value:"capture",label:"Capture/Kidnapping fantasy"},{value:"medical",label:"Medical play"},{value:"religious",label:"Religious authority scenarios"},{value:"historical",label:"Historical roles (Victorian, Medieval)"},{value:"supernatural",label:"Supernatural (Vampire, Werewolf)"},{value:"none",label:"Not interested in roleplay"}]},{id:"humiliation_interest",question:"How interested are you in humiliation play?",category:"Kinks",section:"kinks",type:"scale",scaleLabels:{min:"Hard limit",max:"Major turn-on"}},{id:"humiliation_types",question:"If interested in humiliation, which types?",category:"Kinks",section:"kinks",type:"multi",options:[{value:"verbal",label:"Verbal humiliation/Name calling"},{value:"public",label:"Public humiliation"},{value:"body_worship",label:"Body worship/Degradation"},{value:"objectification",label:"Objectification (furniture, toy)"},{value:"sexual",label:"Sexual humiliation"},{value:"forced",label:"Forced activities"},{value:"exposure",label:"Exposure/Embarrassment"},{value:"not_interested",label:"Not interested"}]},{id:"sensory_play_interest",question:"Rate your interest in sensory play",category:"Kinks",section:"kinks",type:"scale",scaleLabels:{min:"Not interested",max:"Major interest"}},{id:"sensory_types",question:"Which sensory experiences appeal to you?",category:"Kinks",section:"kinks",type:"multi",options:[{value:"blindfolds",label:"Blindfolds/Sensory deprivation"},{value:"temperature",label:"Temperature play (ice, wax)"},{value:"texture",label:"Texture play (feathers, silk, rough)"},{value:"electro",label:"Electrostimulation"},{value:"wax",label:"Wax play"},{value:"knife",label:"Knife play (sensation, not cutting)"},{value:"fire",label:"Fire play"},{value:"none",label:"None interest me"}]},{id:"edge_play_interest",question:"Interest in edge play (breath play, knife play, blood play)?",category:"Kinks",section:"kinks",type:"choice",options:[{value:"hard_limit",label:"Hard limit - Absolutely not"},{value:"nervous",label:"Curious but nervous"},{value:"interested",label:"Interested with experienced partner"},{value:"experienced",label:"Experienced and enjoy"},{value:"seek",label:"Actively seek edge play"}]},{id:"anal_play",question:"Interest level in anal play and training?",category:"Kinks",section:"kinks",type:"scale",scaleLabels:{min:"Hard limit",max:"Major interest"}},{id:"orgasm_control",question:"Interest in orgasm control/denial?",category:"Kinks",section:"kinks",type:"scale",scaleLabels:{min:"Not interested",max:"Major interest"}},{id:"chastity",question:"Interest in chastity devices and long-term denial?",category:"Kinks",section:"kinks",type:"choice",options:[{value:"not_interested",label:"Not interested"},{value:"curious",label:"Curious about trying"},{value:"short_term",label:"Interested in short-term (hours/days)"},{value:"long_term",label:"Interested in long-term (weeks/months)"},{value:"permanent",label:"Interested in permanent/long-term lifestyle"}]},{id:"exhibitionism",question:"Interest in exhibitionism/voyeurism?",category:"Kinks",section:"kinks",type:"choice",options:[{value:"private_only",label:"Prefer complete privacy"},{value:"photography",label:"Enjoy intimate photography"},{value:"online",label:"Interested in online sharing"},{value:"watched",label:"Being watched by others in person"},{value:"public",label:"Public/semi-public play"},{value:"watching",label:"Prefer watching others"}]},{id:"fluids",question:"Comfort level with bodily fluids in play?",category:"Kinks",section:"kinks",type:"choice",options:[{value:"standard_only",label:"Standard fluids only (natural intimacy)"},{value:"saliva",label:"Comfortable with saliva/spit play"},{value:"squirt",label:"Interested in squirting/ejaculation focus"},{value:"watersports",label:"Interested in watersports/golden showers"},{value:"all",label:"Open to various fluid play"},{value:"hard_limit",label:"Hard limit beyond natural intimacy"}]},{id:"intensity_preference",question:"What level of intensity do you generally prefer?",category:"Dynamics",section:"dynamics",type:"scale",scaleLabels:{min:"Gentle & sensual",max:"Intense & extreme"}},{id:"pain_pleasure",question:"How do you relate to pain in intimate contexts?",category:"Dynamics",section:"dynamics",type:"choice",options:[{value:"avoid",label:"I avoid pain completely"},{value:"tolerate",label:"I tolerate some pain for my partner"},{value:"neutral",label:"Pain is neutral to me"},{value:"arousing",label:"Pain enhances arousal"},{value:"require",label:"I need pain to reach peak arousal"},{value:"give_enjoy",label:"I enjoy giving pain to willing partners"}]},{id:"control_comfort",question:"How comfortable are you with giving up control to a trusted partner?",category:"Dynamics",section:"dynamics",type:"scale",scaleLabels:{min:"Very uncomfortable",max:"Completely comfortable"}},{id:"taking_control",question:"How comfortable are you with taking complete control of a partner?",category:"Dynamics",section:"dynamics",type:"scale",scaleLabels:{min:"Very uncomfortable",max:"Completely comfortable"}},{id:"communication_style",question:"How do you prefer to communicate boundaries and desires?",category:"Compatibility",section:"compatibility",type:"multi",options:[{value:"verbal_direct",label:"Direct verbal communication"},{value:"written",label:"Written agreements and contracts"},{value:"checklists",label:"Kink checklists and spreadsheets"},{value:"gradual",label:"Gradual discussions over time"},{value:"nonverbal",label:"Body language and signals"},{value:"safewords",label:"Safeword system and traffic lights"}]},{id:"aftercare_needs",question:"How important is aftercare to you?",category:"Compatibility",section:"compatibility",type:"scale",scaleLabels:{min:"Not needed",max:"Absolutely essential"}},{id:"aftercare_type",question:"What type of aftercare do you need/enjoy providing?",category:"Compatibility",section:"compatibility",type:"multi",options:[{value:"physical",label:"Physical - Cuddling, holding, warmth"},{value:"verbal",label:"Verbal - Reassurance, praise, processing"},{value:"care",label:"Acts of care - Water, snacks, blankets"},{value:"alone",label:"Alone time to decompress"},{value:"playful",label:"Playful - Laughter, lightness"},{value:"sexual",label:"Sexual - Continuing intimacy"}]},{id:"experience_level",question:"How would you describe your BDSM/kink experience?",category:"Compatibility",section:"compatibility",type:"choice",options:[{value:"fantasy_only",label:"Fantasy only - Haven't tried yet"},{value:"curious",label:"Curious beginner - Want to explore"},{value:"novice",label:"Novice - Some basic experience"},{value:"intermediate",label:"Intermediate - Regular practitioner"},{value:"experienced",label:"Experienced - Years in the lifestyle"},{value:"expert",label:"Expert - Extensive experience/educator"}]},{id:"learning_style",question:"How do you prefer to learn about new kinks and techniques?",category:"Compatibility",section:"compatibility",type:"multi",options:[{value:"research",label:"Research online and in books"},{value:"workshops",label:"Attend workshops and classes"},{value:"mentor",label:"Learn from experienced mentor"},{value:"partner",label:"Explore with trusted partner"},{value:"community",label:"Community events and munches"},{value:"trial",label:"Trial and error experimentation"}]},{id:"protocol_interest",question:"Interest in formal protocols and rituals?",category:"Compatibility",section:"compatibility",type:"scale",scaleLabels:{min:"Prefer totally casual",max:"Love strict structure"}},{id:"emotional_connection",question:"How important is emotional connection for kink/BDSM?",category:"Compatibility",section:"compatibility",type:"choice",options:[{value:"unnecessary",label:"Not necessary - Can be purely physical"},{value:"preferred",label:"Preferred but not required"},{value:"important",label:"Important - Enhances the experience"},{value:"essential",label:"Essential - Must have deep connection"},{value:"romantic",label:"Need romantic love for power exchange"}]},{id:"jealousy_compersion",question:"How do you feel about your partner playing with others?",category:"Compatibility",section:"compatibility",type:"choice",options:[{value:"monogamous",label:"Prefer complete monogamy"},{value:"controlled_jealousy",label:"Jealous but working on it"},{value:"neutral",label:"Neutral - Okay with guidelines"},{value:"compersion",label:"Feel compersion (joy in their joy)"},{value:"encourage",label:"Actively encourage it"},{value:"required",label:"Prefer/require non-monogamy"}]},{id:"gender_preference",question:"Gender preference for BDSM/kink partners?",category:"Compatibility",section:"compatibility",type:"choice",options:[{value:"men",label:"Men only"},{value:"women",label:"Women only"},{value:"nonbinary",label:"Non-binary/genderqueer only"},{value:"feminine",label:"Feminine-presenting people"},{value:"masculine",label:"Masculine-presenting people"},{value:"any",label:"Any gender/no preference"},{value:"specific",label:"Specific genders for specific dynamics"}]},{id:"exploration_pace",question:"What pace of exploration feels right for you?",category:"Compatibility",section:"compatibility",type:"choice",options:[{value:"very_slow",label:"Very slow - Take months building trust"},{value:"slow",label:"Slow and steady - New thing every few weeks"},{value:"moderate",label:"Moderate - Regularly trying new things"},{value:"adventurous",label:"Adventurous - Eager to explore quickly"},{value:"settled",label:"Settled - I know what I like"}]},{id:"risk_tolerance",question:"Your tolerance for risk in BDSM/kink activities?",category:"Compatibility",section:"compatibility",type:"choice",options:[{value:"risk_aware",label:"Very risk-aware - Careful and cautious"},{value:"calculated",label:"Calculated risks with safety measures"},{value:"moderate",label:"Moderate - Balance safety and intensity"},{value:"edge",label:"Enjoy edge play - Calculated higher risk"},{value:"extreme",label:"Extreme - Push boundaries significantly"}]},{id:"deal_breakers",question:"Which would be absolute deal-breakers for you?",category:"Compatibility",section:"compatibility",type:"multi",options:[{value:"dishonesty",label:"Dishonesty or hiding things"},{value:"no_consent",label:"Consent violations"},{value:"unsafe",label:"Unsafe practices"},{value:"drugs",label:"Drug/alcohol use during play"},{value:"no_aftercare",label:"Lack of aftercare"},{value:"public_exposure",label:"Unwanted public exposure of identity"},{value:"permanence",label:"Permanent marks/body modification"},{value:"none",label:"I'm very flexible"}]},{id:"ideal_dynamic",question:"Describe your ideal BDSM dynamic:",category:"Compatibility",section:"compatibility",type:"choice",options:[{value:"casual_scenes",label:"Casual scenes with various partners"},{value:"steady_play_partner",label:"Steady play partner, no romance"},{value:"romantic_kink",label:"Romantic relationship with kink"},{value:"primary_secondary",label:"Primary with secondary play partners"},{value:"poly_dynamic",label:"Polyamorous kink family"},{value:"master_slave",label:"Master/slave or Owner/property"},{value:"exploring",label:"Still figuring it out"}]}];var K3={};const Q3=()=>{const[e,t]=m.useState(0),[n,r]=m.useState([]),[o,i]=m.useState(!1),[s,l]=m.useState(null),[c,u]=m.useState(!1),{toast:d}=bc(),h=(e+1)/_n.length*100,p=y=>{const S=[...n],k=S.findIndex(P=>P.questionId===_n[e].id);k>=0?S[k].answer=y:S.push({questionId:_n[e].id,answer:y}),r(S)},f=()=>{const y=n.find(S=>S.questionId===_n[e].id);return y==null?void 0:y.answer},w=async()=>{e<_n.length-1?t(y=>y+1):await b()},x=()=>{e>0&&t(y=>y-1)},b=async()=>{i(!0);try{const y=K3.REACT_APP_BACKEND_URL||"http://localhost:8001",S=await fetch(`${y}/api/analyze-quiz`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({responses:n})});if(!S.ok)throw new Error(`Analysis failed: ${S.statusText}`);const k=await S.json();if(k.success&&k.insights)l(k.insights),d({title:"Analysis Complete!",description:"Your personalized insights are ready."});else throw new Error("Invalid response from analysis service")}catch(y){console.error("Quiz analysis error:",y),d({title:"Using Local Analysis",description:"AI analysis unavailable, using local processing."});const S=g(n);l(S)}finally{i(!1)}},g=y=>{var Ro,Jr,wn,or,Xr,ir,On;const S=xe=>{var be;return(be=y.find(Vt=>Vt.questionId===xe))==null?void 0:be.answer},k=S("relationship_structure"),P=S("non_monogamy_interest")||50,j=S("group_play"),N=S("kink_community"),R=S("lifestyle_integration"),M={monogamous:"Monogamous",open:"Open Relationship",polyamorous:"Polyamorous",swinger:"Swinger Lifestyle",relationship_anarchy:"Relationship Anarchist",exploring:"Exploring Relationship Styles"},B=[];P>60&&k==="monogamous"&&B.push("Open to ENM"),(j==="regular"||j==="prefer")&&B.push("Group Play Enthusiast"),(N==="active"||N==="organizer")&&B.push("Community Active"),(R==="full_247"||R==="subtle_247")&&B.push("24/7 Dynamic");const V=`You identify as ${((Ro=M[k])==null?void 0:Ro.toLowerCase())||"exploring"} with ${P>70?"strong enthusiasm for":P>50?"openness to":P>30?"curiosity about":"preference against"} ethical non-monogamy. ${R==="full_247"?"You seek full 24/7 power exchange integration.":R==="subtle_247"?"You prefer subtle D/s elements in daily life.":R==="bedroom_only"?"You keep kink separate in the bedroom.":"You take a flexible approach to kink integration."}`,$=S("primary_role"),_=(S("dominance_style")||[]).filter(xe=>xe!=="not_applicable"),X=(S("submission_style")||[]).filter(xe=>xe!=="not_applicable"),G=S("switch_preference"),z=S("control_comfort")||50,E=S("taking_control")||50,I=S("power_exchange_level"),T={dominant:"Dominant",submissive:"Submissive",switch:"Switch",top:"Top",bottom:"Bottom",master_mistress:"Master/Mistress",slave:"Slave",brat:"Brat",primal:"Primal",sadist:"Sadist",masochist:"Masochist",exploring:"Exploring My Role"};let C=50;$==="dominant"||$==="master_mistress"||$==="top"||$==="sadist"?C+=30:$==="submissive"||$==="slave"||$==="bottom"||$==="masochist"?C-=30:$==="brat"?C-=15:$==="primal"&&(C+=(E-50)/5),E>z?C+=(E-z)/3:C-=(z-E)/3,I==="equal"?C=50:I==="total_authority"&&(C+=10),G==="lean_dominant"?C+=10:G==="lean_submissive"?C-=10:G==="equal"&&(C=50),C=Math.max(0,Math.min(100,C));const F=[..._,...X].map(xe=>xe.split("_").map(be=>be.charAt(0).toUpperCase()+be.slice(1)).join(" ")),W=[];$==="switch"&&(G==="lean_dominant"&&W.push("Dominant-leaning"),G==="lean_submissive"&&W.push("Submissive-leaning")),$==="dominant"&&X.length>0&&W.push("Switch potential"),$==="submissive"&&_.length>0&&W.push("Switch potential");const q=`As a ${((Jr=T[$])==null?void 0:Jr.toLowerCase())||"person exploring their role"}, you ${C>70?"strongly identify with taking control and leading in scenes":C<30?"deeply enjoy surrender and following your partner's lead":"appreciate both giving and receiving control depending on the dynamic"}. ${F.length>0?`Your style leans ${F.slice(0,3).join(", ")}.`:"You're still discovering your specific style."} ${I==="full_247"?"You seek total power exchange in a 24/7 dynamic.":I==="total_authority"?"You desire complete authority transfer.":I==="scene_only"?"You prefer power exchange limited to scenes.":"Your preferred level of power exchange varies."}`,U=[];[{id:"bondage_interest",name:"Bondage & Restraint",types:S("bondage_types")||[]},{id:"impact_play_interest",name:"Impact Play",types:S("impact_types")||[]},{id:"sensory_play_interest",name:"Sensory Play",types:S("sensory_types")||[]},{id:"humiliation_interest",name:"Humiliation & Degradation",types:S("humiliation_types")||[]},{id:"orgasm_control",name:"Orgasm Control & Denial",types:[]},{id:"anal_play",name:"Anal Play",types:[]}].forEach(xe=>{const be=S(xe.id);if(be&&be>40){const Vt=xe.types.filter($i=>$i!=="none"&&$i!=="not_interested").length,$c=Vt>0?` including ${Vt} specific interests`:"";U.push({name:xe.name,interest:be>75?"high":be>60?"medium":"low",description:`Interest level: ${be}%${$c}`})}});const Z=(S("roleplay_scenarios")||[]).filter(xe=>xe!=="none");Z.length>0&&U.push({name:"Roleplay & Fantasy",interest:Z.length>3?"high":"medium",description:`Interested in ${Z.length} scenario types`});const re=S("chastity");re&&re!=="not_interested"&&U.push({name:"Chastity & Long-term Denial",interest:re==="permanent"||re==="long_term"?"high":"medium",description:`Interested in ${re.replace(/_/g," ")} chastity`});const ue=S("exhibitionism");ue&&ue!=="private_only"&&U.push({name:"Exhibitionism/Voyeurism",interest:ue==="public"?"high":"medium",description:`Preferences: ${ue.replace(/_/g," ")}`});const se=S("edge_play_interest");(se==="experienced"||se==="seek")&&U.push({name:"Edge Play",interest:se==="seek"?"high":"medium",description:"Breath play, knife play, and high-risk activities"}),U.sort((xe,be)=>{const Vt={high:3,medium:2,low:1};return Vt[be.interest]-Vt[xe.interest]});const ne=[];(S("bondage_interest")||50)<20&&ne.push("Bondage/Restraint"),(S("impact_play_interest")||50)<20&&ne.push("Impact Play"),(S("humiliation_interest")||50)<20&&ne.push("Humiliation"),(S("anal_play")||50)<20&&ne.push("Anal Play"),se==="hard_limit"&&ne.push("Edge Play (Breath/Blood/Knife)"),S("fluids")==="hard_limit"&&ne.push("Bodily Fluids Beyond Natural"),(S("deal_breakers")||[]).filter(xe=>xe!=="none").forEach(xe=>{const be=xe.replace(/_/g," ").split(" ").map(Vt=>Vt.charAt(0).toUpperCase()+Vt.slice(1)).join(" ");ne.includes(be)||ne.push(be)});const he=S("experience_level"),We={fantasy_only:"Fantasy Only",curious:"Curious Beginner",novice:"Novice",intermediate:"Intermediate",experienced:"Experienced Practitioner",expert:"Expert/Educator"},Pe=S("intensity_preference")||50;S("pain_pleasure");const Re=S("emotional_connection"),$e=S("aftercare_needs")||50,Ke=S("communication_style")||[],rt=S("exploration_pace");S("gender_preference");const rr=S("jealousy_compersion"),Mt=S("risk_tolerance"),Qr=[Pe,rt==="adventurous"?90:rt==="moderate"?70:rt==="slow"?40:60,U.length*10,Mt==="extreme"?90:Mt==="edge"?75:Mt==="moderate"?50:30],zi=Math.min(100,Qr.reduce((xe,be)=>xe+be,0)/Qr.length),Ue=[{trait:T[$]||"Explorer",description:C>70?"You thrive in leadership and control, guiding scenes with confidence":C<30?"You find deep fulfillment in surrender and serving your partner's desires":"You enjoy the fluidity of both giving and receiving control"},{trait:Pe>70?"Intensity Seeker":Pe<30?"Sensual Explorer":"Balanced Intensity",description:Pe>70?"You crave intense, edgy experiences that push boundaries":Pe<30?"You prefer gentle, sensual connections and gradual buildup":"You appreciate a range from gentle sensuality to moderate intensity"},{trait:We[he]||"Curious Beginner",description:he==="expert"?"Extensive experience and knowledge in the lifestyle":he==="experienced"?"Well-versed in kink practices with years of experience":he==="intermediate"?"Growing experience with regular practice":he==="novice"?"Some hands-on experience, building skills":he==="curious"?"New to the lifestyle, eager to explore":"Exploring fantasies and learning about kink"}];$e>75&&Ue.push({trait:"Aftercare Focused",description:"You prioritize emotional processing and care after intense scenes"}),Ke.length>3&&Ue.push({trait:"Multi-Modal Communicator",description:"You excel at using various communication methods to express boundaries and desires"});const Ye=[];return(he==="fantasy_only"||he==="curious")&&(Ye.push("Connect with the kink community through munches and educational events"),Ye.push("Start with beginner-friendly activities and build trust with partners")),rt==="very_slow"||rt==="slow"?Ye.push("Take time to build trust and comfort before trying new activities"):rt==="adventurous"&&Ye.push("Balance enthusiasm with safety - research thoroughly before trying edge play"),U.length>0&&Ye.push(`Deepen your exploration of ${U[0].name.toLowerCase()}`),Ke.length<2&&Ye.push("Develop multiple communication methods for expressing needs and boundaries"),$e<40&&Ye.push("Learn about the importance of aftercare for emotional wellbeing"),Ye.push("Continue education through workshops, books, and community learning"),Ye.push("Practice negotiation and consent conversations with potential partners"),{personalitySummary:`You identify as ${T[$]||"exploring your role"} with ${((wn=We[he])==null?void 0:wn.toLowerCase())||"emerging"} experience in BDSM and kink. ${U.length>0?`Your primary interests include ${U.slice(0,3).map(xe=>xe.name.toLowerCase()).join(", ")}.`:"You're exploring various kinks to discover your interests."} You prefer ${((or=M[k])==null?void 0:or.toLowerCase())||"exploring"} relationship structures and ${Pe>70?"crave intense, boundary-pushing experiences":Pe<30?"enjoy gentle, sensual explorations":"appreciate a balanced range of intensity levels"}. ${Re==="essential"||Re==="romantic"?"Deep emotional connection is essential for your kink experiences.":Re==="unnecessary"?"You can separate kink from emotional connection.":"You value emotional connection but can be flexible."}`,keyTraits:Ue.slice(0,4),compatibilityInsights:`Based on your comprehensive profile, you'd thrive with partners who ${C>70?"naturally submit and seek structure, enjoying your authoritative energy":C<30?"confidently take control and provide the guidance you crave":"can switch dynamics with you, matching your versatile energy"}. Your ${((Xr=M[k])==null?void 0:Xr.toLowerCase())||"relationship"} approach means ${k==="monogamous"?"you value exclusive, deep connection with a single partner":k==="polyamorous"?"you can love multiple people simultaneously with honesty":k==="open"?"you separate emotional and sexual connections thoughtfully":k==="swinger"?"you enjoy shared sexual experiences as a couple":"you take a flexible, individual approach to relationships"}. ${rr==="compersion"||rr==="encourage"?"You feel compersion, taking joy in your partner's pleasure with others.":rr==="monogamous"?"You prefer complete monogamy and exclusivity.":"You navigate jealousy and sharing with clear communication."} Ideal partners share your ${Pe>60?"appetite for intensity":"preference for sensuality"}, respect your ${ne.length} hard limits, and match your ${rt==="very_slow"?"patient, gradual":rt==="adventurous"?"eager, adventurous":"moderate"} pace of exploration.`,growthAreas:Ye.slice(0,6),scores:{dominanceSubmission:Math.round(C),communicationStyle:Ke.length>2?"Multi-Modal Communicator":Ke.includes("verbal_direct")?"Direct Verbal":"Developing Style",experienceLevel:We[he]||"Exploring",opennessToExploration:Math.round(zi)},archetype:`${T[$]||"Explorer"}${F.length>0?" - "+F[0]:""}`,lifestyle:{primary:M[k]||"Exploring",secondary:B,description:V},bdsmRole:{primary:T[$]||"Exploring",secondary:W,style:F.slice(0,4),description:q},topKinks:U.length>0?U.slice(0,8):[{name:"Still Exploring",interest:"medium",description:"Take time to discover what excites you through education and gradual exploration"}],hardLimits:ne.length>0?ne:["No major limits identified - communicate boundaries with partners"],idealPartner:`Your ideal partner ${C>70?"is naturally submissive, craving your structure and control":C>55?"leans submissive but appreciates your flexibility":C<30?"is a confident, experienced dominant who provides clear leadership":C<45?"leans dominant but appreciates your input":"shares your switch nature, enjoying both roles with equal enthusiasm"}. They ${k==="monogamous"?"are committed to monogamy and building deep exclusive intimacy":k==="polyamorous"?"embrace polyamory and managing multiple loving relationships":k==="open"?"appreciate the distinction between sex and romance in open dynamics":k==="swinger"?"enjoy the swinger lifestyle and shared recreational experiences":"are open to exploring various relationship structures together"}. ${Re==="essential"||Re==="romantic"?"Deep emotional and romantic connection is essential to them.":Re==="unnecessary"?"They can keep kink and emotion separate.":"They value connection but maintain healthy boundaries."} They're ${he==="expert"||he==="experienced"?"experienced practitioners who match your expertise":he==="intermediate"?"established in the lifestyle with solid experience":he==="novice"||he==="curious"?"patient educators or fellow learners growing together":"experienced enough to guide your exploration safely"}, share enthusiasm for ${((ir=U[0])==null?void 0:ir.name.toLowerCase())||"exploration"}, absolutely respect your hard limits around ${((On=ne[0])==null?void 0:On.toLowerCase())||"boundaries"}, and ${$e>70?"prioritize thorough aftercare":$e<30?"are comfortable with minimal aftercare":"provide balanced aftercare"}.`}},v=()=>{t(0),r([]),l(null),u(!1)};return s?a.jsx(E3,{insights:s,onRestart:v,responses:n}):c?a.jsxs("div",{className:"min-h-screen bg-background flex flex-col",children:[a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("div",{className:"sticky top-16 bg-background/95 backdrop-blur-sm border-b border-border/50 p-4 z-10 mt-28",children:a.jsxs("div",{className:"max-w-2xl mx-auto",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("span",{className:"text-sm text-muted-foreground",children:["Question ",e+1," of ",_n.length]}),a.jsxs("span",{className:"text-sm font-medium text-primary",children:[Math.round(h),"% Complete"]})]}),a.jsx(rc,{value:h,className:"h-2"})]})}),a.jsx("div",{className:"flex-1 flex items-center justify-center p-4",children:a.jsx("div",{className:"max-w-2xl w-full",children:a.jsx(RI,{mode:"wait",children:o?a.jsxs(K.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"text-center py-12",children:[a.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 animate-pulse",children:a.jsx(jt,{className:"w-8 h-8 text-primary animate-spin"})}),a.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Analyzing Your Responses..."}),a.jsx("p",{className:"text-muted-foreground",children:"Our AI is creating your personalized compatibility profile"})]},"analyzing"):a.jsx(q3,{question:_n[e],currentAnswer:f(),onAnswer:p},e)})})}),!o&&a.jsx("div",{className:"sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border/50 p-4",children:a.jsxs("div",{className:"max-w-2xl mx-auto flex items-center justify-between",children:[a.jsxs(He,{variant:"ghost",onClick:x,disabled:e===0,children:[a.jsx(Wl,{className:"mr-2 w-4 h-4"}),"Previous"]}),a.jsx(He,{onClick:w,disabled:f()===void 0||Array.isArray(f())&&f().length===0,className:"bg-gradient-to-r from-primary to-pink-600",children:e===_n.length-1?a.jsxs(a.Fragment,{children:["Get Results",a.jsx(jt,{className:"ml-2 w-4 h-4"})]}):a.jsxs(a.Fragment,{children:["Next",a.jsx(Br,{className:"ml-2 w-4 h-4"})]})})]})})]}):a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsxs(wt,{children:[a.jsx("title",{children:"BDSM Compatibility Quiz — Discover Your Intimacy Style | SPICE"}),a.jsx("meta",{name:"description",content:"Take our AI-powered BDSM compatibility quiz to discover your intimacy style, preferences, and find compatible partners. Safe, private, and non-judgmental."}),a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/quiz"})]}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("div",{className:"pt-32 flex items-center justify-center p-4",children:a.jsxs(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-2xl w-full text-center",children:[a.jsxs("div",{className:"mb-8",children:[a.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6",children:a.jsx(jt,{className:"w-10 h-10 text-primary"})}),a.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-pink-500 to-purple-500 bg-clip-text text-transparent",children:"BDSM Compatibility Quiz"}),a.jsx("p",{className:"text-lg text-muted-foreground mb-6",children:"Discover your intimacy style and preferences through our AI-powered analysis"})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:[a.jsxs("div",{className:"bg-card/50 border border-border/50 rounded-xl p-4",children:[a.jsx(Qt,{className:"w-8 h-8 text-pink-500 mx-auto mb-2"}),a.jsx("h3",{className:"font-semibold mb-1",children:"Personalized Insights"}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"AI-generated analysis tailored to you"})]}),a.jsxs("div",{className:"bg-card/50 border border-border/50 rounded-xl p-4",children:[a.jsx(ha,{className:"w-8 h-8 text-green-500 mx-auto mb-2"}),a.jsx("h3",{className:"font-semibold mb-1",children:"Safe & Private"}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Your responses are anonymous"})]}),a.jsxs("div",{className:"bg-card/50 border border-border/50 rounded-xl p-4",children:[a.jsx(Af,{className:"w-8 h-8 text-purple-500 mx-auto mb-2"}),a.jsx("h3",{className:"font-semibold mb-1",children:"Non-Judgmental"}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Sex-positive and inclusive"})]})]}),a.jsxs("p",{className:"text-sm text-muted-foreground mb-6",children:[_n.length," questions • Takes about 5 minutes"]}),a.jsxs(He,{onClick:()=>u(!0),size:"lg",className:"bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90",children:["Start Quiz",a.jsx(Br,{className:"ml-2 w-4 h-4"})]})]})})]})},J3=[{id:1,slug:"first-steps-lifestyle-beginners-guide",category:"Getting Started",title:"Your First Steps Into the Lifestyle: A Beginner's Complete Guide",excerpt:"Everything you need to know before taking your first steps into ethical non-monogamy, from communication basics to setting boundaries.",image:"https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"8 min read",forCouples:!0,forSingles:!0},{id:2,slug:"how-to-start-swinging-couples-communication",category:"For Couples",title:"How to Start Swinging as a Couple: Communication First",excerpt:"Learn how to have the crucial conversations with your partner before exploring the swinging lifestyle together.",image:"https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read",forCouples:!0,forSingles:!1},{id:3,slug:"navigating-lifestyle-single-person",category:"For Singles",title:"Navigating the Lifestyle as a Single Person",excerpt:"Tips and etiquette for singles entering ENM communities, whether you identify as a unicorn, solo poly, or are just exploring.",image:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"7 min read",forCouples:!1,forSingles:!0},{id:4,slug:"kink-101-bdsm-beginners",category:"BDSM Basics",title:"Kink 101: Understanding BDSM for Beginners",excerpt:"A safe and welcoming introduction to BDSM, covering consent, negotiation, and exploring your interests.",image:"https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"10 min read",forCouples:!0,forSingles:!0},{id:5,slug:"is-polyamory-right-for-you",category:"Polyamory",title:"Is Polyamory Right for You? Self-Reflection Questions",excerpt:"Explore whether ethical non-monogamy aligns with your values, needs, and relationship goals.",image:"https://images.unsplash.com/photo-1522098635833-216c03d81fbe?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"5 min read",forCouples:!0,forSingles:!0},{id:6,slug:"managing-jealousy-couples-guide",category:"For Couples",title:"Managing Jealousy: A Couple's Guide",excerpt:"Practical strategies for couples to work through jealousy and strengthen their connection while exploring.",image:"https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"8 min read",forCouples:!0,forSingles:!1}],X3=()=>a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsxs(wt,{children:[a.jsx("title",{children:"For the Interested & Curious | SPICE Guide"}),a.jsx("meta",{name:"description",content:"New to the lifestyle? Explore our beginner guides for couples and singles entering ENM, swinging, BDSM, and polyamory communities."}),a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/guide/newcomers"})]}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("main",{className:"pt-32 pb-16 px-4",children:a.jsxs("div",{className:"max-w-6xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6",children:[a.jsx(jt,{className:"w-4 h-4 text-primary"}),a.jsx("span",{className:"text-sm text-muted-foreground",children:"SPICE Guide"})]}),a.jsxs("h1",{className:"text-4xl md:text-5xl font-black mb-6",children:[a.jsx("span",{className:"text-gradient",children:"For the Interested"}),a.jsx("br",{}),a.jsx("span",{className:"text-foreground",children:"& Curious"})]}),a.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto",children:"Whether you're a couple exploring together or a single person curious about the lifestyle, we've got you covered with everything you need to know."})]}),a.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:[a.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full glass-card",children:[a.jsx(_r,{className:"w-4 h-4 text-primary"}),a.jsx("span",{className:"text-sm",children:"For Couples"})]}),a.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full glass-card",children:[a.jsx(Qt,{className:"w-4 h-4 text-primary"}),a.jsx("span",{className:"text-sm",children:"For Singles"})]})]}),a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:J3.map(e=>a.jsx(pe,{to:`/guide/article/${e.slug}`,className:"glass-card rounded-2xl overflow-hidden border-gradient feature-card group cursor-pointer block",children:a.jsxs("article",{children:[a.jsxs("div",{className:"relative h-48 overflow-hidden",children:[a.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"}),a.jsx("div",{className:"absolute top-4 left-4",children:a.jsx("span",{className:"px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground",children:e.category})}),a.jsxs("div",{className:"absolute top-4 right-4 flex gap-2",children:[e.forCouples&&a.jsx("span",{className:"px-2 py-1 text-xs rounded-full bg-background/80 backdrop-blur-sm",children:a.jsx(_r,{className:"w-3 h-3 inline"})}),e.forSingles&&a.jsx("span",{className:"px-2 py-1 text-xs rounded-full bg-background/80 backdrop-blur-sm",children:a.jsx(Qt,{className:"w-3 h-3 inline"})})]})]}),a.jsxs("div",{className:"p-6",children:[a.jsx("h2",{className:"text-lg font-bold mb-3 group-hover:text-primary transition-colors",children:e.title}),a.jsx("p",{className:"text-muted-foreground text-sm mb-4 line-clamp-2",children:e.excerpt}),a.jsxs("div",{className:"flex items-center justify-between text-xs text-muted-foreground",children:[a.jsx("span",{children:e.author}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{children:e.readTime}),a.jsx(Br,{className:"w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"})]})]})]})]})},e.id))}),a.jsx("div",{className:"mt-16 text-center",children:a.jsxs("div",{className:"glass-card rounded-2xl p-8 border-gradient max-w-2xl mx-auto",children:[a.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Ready to explore?"}),a.jsx("p",{className:"text-muted-foreground mb-6",children:"Take our compatibility quiz to discover more about yourself and find like-minded connections."}),a.jsxs(pe,{to:"/quiz",className:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors",children:["Take the BDSM Quiz",a.jsx(Br,{className:"w-4 h-4"})]})]})})]})}),a.jsx(Nt,{})]}),Z3=[{id:1,slug:"how-to-set-boundaries-open-relationships",title:"How to Set Boundaries in Open Relationships",excerpt:"Clear communication and defined boundaries are the foundation of healthy ENM relationships.",image:"https://images.unsplash.com/photo-1586380951230-e6703d9f6833?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read"},{id:2,slug:"how-to-have-the-talk-partner",title:"How to Have 'The Talk' With Your Partner",excerpt:"A step-by-step guide to opening up the conversation about exploring ethical non-monogamy.",image:"https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"8 min read"},{id:3,slug:"how-to-navigate-first-play-party",title:"How to Navigate Your First Play Party",excerpt:"Everything you need to know before attending your first lifestyle event or play party.",image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"10 min read"},{id:4,slug:"how-to-practice-safe-kink",title:"How to Practice Safe Kink",excerpt:"Essential safety practices for BDSM play, from negotiation to aftercare.",image:"https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"7 min read"},{id:5,slug:"how-to-create-dating-profile-stands-out",title:"How to Create a Dating Profile That Stands Out",excerpt:"Tips for crafting an authentic and attractive profile on lifestyle dating apps.",image:"https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"5 min read"},{id:6,slug:"how-to-handle-jealousy-enm",title:"How to Handle Jealousy in ENM",excerpt:"Practical strategies for recognizing, processing, and working through jealousy.",image:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"9 min read"},{id:7,slug:"how-to-find-local-community",title:"How to Find Your Local Community",excerpt:"Discover how to connect with lifestyle communities in your area safely and authentically.",image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"6 min read"},{id:8,slug:"how-to-negotiate-scene",title:"How to Negotiate a Scene",excerpt:"A comprehensive guide to BDSM scene negotiation for beginners and experienced players.",image:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"8 min read"},{id:9,slug:"how-to-practice-compersion",title:"How to Practice Compersion",excerpt:"Learn to experience joy when your partner finds happiness with others.",image:"https://images.unsplash.com/photo-1522098635833-216c03d81fbe?w=600&h=400&fit=crop",author:"SPICE Team",readTime:"7 min read"}],eL=()=>a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsxs(wt,{children:[a.jsx("title",{children:"How To Guides | SPICE Guide"}),a.jsx("meta",{name:"description",content:"Learn how to navigate relationships, communicate effectively, and explore the lifestyle with our comprehensive how-to guides."}),a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/guide/how-to"})]}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("main",{className:"pt-32 pb-16 px-4",children:a.jsxs("div",{className:"max-w-6xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6",children:[a.jsx(fj,{className:"w-4 h-4 text-primary"}),a.jsx("span",{className:"text-sm text-muted-foreground",children:"How To"})]}),a.jsx("h1",{className:"text-4xl md:text-5xl font-black mb-6",children:a.jsx("span",{className:"text-gradient",children:"How To"})}),a.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto",children:"Practical guides and step-by-step advice for navigating relationships, communication, and exploration in the lifestyle."})]}),a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:Z3.map(e=>a.jsx(pe,{to:`/guide/article/${e.slug}`,className:"glass-card rounded-2xl overflow-hidden border-gradient feature-card group cursor-pointer block",children:a.jsxs("article",{children:[a.jsxs("div",{className:"relative h-48 overflow-hidden",children:[a.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"}),a.jsx("div",{className:"absolute top-4 left-4",children:a.jsx("span",{className:"px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground",children:"How To"})})]}),a.jsxs("div",{className:"p-6",children:[a.jsx("h2",{className:"text-lg font-bold mb-3 group-hover:text-primary transition-colors",children:e.title}),a.jsx("p",{className:"text-muted-foreground text-sm mb-4 line-clamp-2",children:e.excerpt}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[a.jsx("span",{children:e.author}),a.jsx("span",{children:"•"}),a.jsx("span",{children:e.readTime})]}),a.jsx(Br,{className:"w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"})]})]})]})},e.id))})]})}),a.jsx(Nt,{})]}),hv=[{id:"enm",name:"Ethical Non-Monogamy (ENM)",icon:Qt,description:"Explore relationships beyond traditional monogamy with honesty, consent, and respect.",color:"from-pink-500/20 to-rose-500/20",articles:[{slug:"what-is-ethical-non-monogamy",title:"What is Ethical Non-Monogamy?",excerpt:"An introduction to ENM principles and different relationship structures.",readTime:"5 min read",image:"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=250&fit=crop"},{slug:"enm-vs-cheating-understanding-difference",title:"ENM vs Cheating: Understanding the Difference",excerpt:"Why consent and communication make all the difference.",readTime:"4 min read",image:"https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=400&h=250&fit=crop"},{slug:"coming-out-enm-friends-family",title:"Coming Out as ENM to Friends & Family",excerpt:"Navigating conversations about your relationship choices.",readTime:"7 min read",image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop"}]},{id:"bdsm",name:"BDSM & Kink",icon:Vd,description:"A safe space to explore bondage, discipline, dominance, submission, and more.",color:"from-purple-500/20 to-violet-500/20",articles:[{slug:"bdsm-101-understanding-basics",title:"BDSM 101: Understanding the Basics",excerpt:"An introduction to kink culture, terminology, and practices.",readTime:"8 min read",image:"https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=400&h=250&fit=crop"},{slug:"importance-of-aftercare",title:"The Importance of Aftercare",excerpt:"Why aftercare is essential for healthy BDSM experiences.",readTime:"5 min read",image:"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=250&fit=crop"},{slug:"finding-your-kink-identity",title:"Finding Your Kink Identity",excerpt:"Exploring different roles and discovering what resonates with you.",readTime:"6 min read",image:"https://images.unsplash.com/photo-1586380951230-e6703d9f6833?w=400&h=250&fit=crop"}]},{id:"swingers",name:"Swingers",icon:_r,description:"Couples and singles who enjoy consensual partner sharing and lifestyle events.",color:"from-orange-500/20 to-amber-500/20",articles:[{slug:"how-to-start-swinging-couples-communication",title:"Swinging 101: Getting Started",excerpt:"Everything couples need to know before entering the swinging lifestyle.",readTime:"7 min read",image:"https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=400&h=250&fit=crop"},{slug:"how-to-navigate-first-play-party",title:"Swinger Etiquette: The Unwritten Rules",excerpt:"How to navigate clubs, parties, and online communities respectfully.",readTime:"6 min read",image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop"},{slug:"how-to-set-boundaries-open-relationships",title:"Soft Swap vs Full Swap: What's Right for You?",excerpt:"Understanding different levels of participation in swinging.",readTime:"5 min read",image:"https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=400&h=250&fit=crop"}]},{id:"poly",name:"Polyamory",icon:pj,description:"Building multiple loving, committed relationships with the knowledge and consent of everyone involved.",color:"from-blue-500/20 to-cyan-500/20",articles:[{slug:"is-polyamory-right-for-you",title:"What is Polyamory?",excerpt:"Understanding the philosophy and practice of ethical multi-partner relationships.",readTime:"6 min read",image:"https://images.unsplash.com/photo-1522098635833-216c03d81fbe?w=400&h=250&fit=crop"},{slug:"managing-jealousy-couples-guide",title:"Polyamory Relationship Structures",excerpt:"From triads to polycules: different ways to structure poly relationships.",readTime:"8 min read",image:"https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=400&h=250&fit=crop"},{slug:"how-to-practice-compersion",title:"Managing Time and Energy in Polyamory",excerpt:"Practical tips for balancing multiple relationships.",readTime:"7 min read",image:"https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=400&h=250&fit=crop"}]}],tL=()=>a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsxs(wt,{children:[a.jsx("title",{children:"Community & Lifestyles | SPICE Guide"}),a.jsx("meta",{name:"description",content:"Explore different lifestyle communities including ENM, BDSM, Swinging, and Polyamory. Find articles, guides, and resources for each community."}),a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/guide/community"})]}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("main",{className:"pt-32 pb-16 px-4",children:a.jsxs("div",{className:"max-w-6xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6",children:[a.jsx(_r,{className:"w-4 h-4 text-primary"}),a.jsx("span",{className:"text-sm text-muted-foreground",children:"SPICE Guide"})]}),a.jsxs("h1",{className:"text-4xl md:text-5xl font-black mb-6",children:[a.jsx("span",{className:"text-gradient",children:"Community"}),a.jsx("br",{}),a.jsx("span",{className:"text-foreground",children:"& Lifestyles"})]}),a.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto",children:"Discover the diverse communities within the lifestyle world. Each has its own culture, practices, and ways of connecting."})]}),a.jsx("div",{className:"space-y-16",children:hv.map(e=>a.jsxs("section",{className:"scroll-mt-24",id:e.id,children:[a.jsxs("div",{className:`glass-card rounded-2xl p-8 border-gradient mb-8 bg-gradient-to-br ${e.color}`,children:[a.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center",children:a.jsx(e.icon,{className:"w-6 h-6 text-primary"})}),a.jsx("h2",{className:"text-2xl md:text-3xl font-bold",children:e.name})]}),a.jsx("p",{className:"text-muted-foreground text-lg max-w-2xl",children:e.description})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:e.articles.map((t,n)=>a.jsx(pe,{to:`/guide/article/${t.slug}`,className:"glass-card rounded-xl overflow-hidden border-gradient feature-card group cursor-pointer block",children:a.jsxs("article",{children:[a.jsxs("div",{className:"relative h-36 overflow-hidden",children:[a.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"}),a.jsx("div",{className:"absolute top-3 left-3",children:a.jsx("span",{className:"px-2 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground",children:e.name.split(" ")[0]})})]}),a.jsxs("div",{className:"p-5",children:[a.jsx("h3",{className:"text-lg font-bold mb-3 group-hover:text-primary transition-colors",children:t.title}),a.jsx("p",{className:"text-muted-foreground text-sm mb-4 line-clamp-2",children:t.excerpt}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs text-muted-foreground",children:t.readTime}),a.jsx(Br,{className:"w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"})]})]})]})},n))})]},e.id))}),a.jsx("div",{className:"mt-16",children:a.jsxs("div",{className:"glass-card rounded-2xl p-6 border-gradient",children:[a.jsx("h3",{className:"text-lg font-bold mb-4 text-center",children:"Quick Navigation"}),a.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:hv.map(e=>a.jsxs("a",{href:`#${e.id}`,className:"flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-primary/20 transition-colors",children:[a.jsx(e.icon,{className:"w-4 h-4 text-primary"}),a.jsx("span",{className:"text-sm",children:e.name})]},e.id))})]})})]})}),a.jsx(Nt,{})]}),fv=[{term:"Aftercare",definition:"The care and attention given to partners after a BDSM scene or intense sexual experience. This can include physical comfort, emotional support, hydration, and processing the experience together.",category:"practices"},{term:"Age Play",definition:"A type of role play where participants adopt ages different from their own, often involving caregiver/little dynamics. Always between consenting adults.",category:"desires"},{term:"Bondage",definition:"The practice of restraining a partner using rope, cuffs, tape, or other materials for erotic purposes. Requires knowledge of safety techniques.",category:"desires"},{term:"Boot Worship",definition:"A fetish focused on boots, often involving the worship, cleaning, or kissing of a partner's footwear as part of a D/s dynamic.",category:"desires"},{term:"Breath Play",definition:"Activities involving the restriction of breathing for erotic purposes. Considered edge play due to significant risks including death. Requires extensive education if practiced.",category:"desires"},{term:"CBT (Cock and Ball Torture)",definition:"Activities involving the application of pain or pressure to male genitals for erotic purposes. Ranges from mild to intense.",category:"desires"},{term:"Chastity",definition:"The practice of restricting sexual release, often using devices like chastity cages. Common in D/s dynamics as a form of control.",category:"desires"},{term:"Cuckolding",definition:"A fetish where someone derives pleasure from their partner having sex with others, often with elements of humiliation or voyeurism.",category:"desires"},{term:"Degradation",definition:"A form of erotic humiliation where one partner verbally or physically degrades the other. Requires careful negotiation and aftercare.",category:"desires"},{term:"Edge Play",definition:"BDSM activities that push boundaries or carry higher risk, such as breath play, knife play, or blood play. Requires advanced knowledge and carries real dangers.",category:"desires"},{term:"Exhibitionism",definition:"The desire to be watched during sexual or intimate activities. Should only be practiced in appropriate contexts with consenting observers.",category:"desires"},{term:"Figging",definition:"The practice of inserting peeled ginger root into the anus or vagina for a burning sensation. A form of sensation play.",category:"desires"},{term:"Fire Play",definition:"BDSM activities involving controlled flames, typically using flash cotton, alcohol, or fire wands on the body. Edge play requiring training.",category:"desires"},{term:"Flogging",definition:"Impact play using a flogger—a multi-tailed implement. Intensity varies based on material, technique, and location on body.",category:"desires"},{term:"Foot Fetish",definition:"Sexual interest in feet, including activities like foot worship, foot jobs, or simply finding feet attractive.",category:"desires"},{term:"Forced Orgasm",definition:"A BDSM activity where the dominant brings the submissive to orgasm repeatedly despite protests (within negotiated consent). Often involves restraint.",category:"desires"},{term:"Golden Shower",definition:"A form of watersports involving urination on a partner for erotic purposes. Also called 'water sports' or 'piss play.'",category:"desires"},{term:"Impact Play",definition:"Any BDSM activity involving striking the body, including spanking, flogging, paddling, caning, and more.",category:"desires"},{term:"Kink",definition:"Sexual practices or desires that fall outside of conventional sexual norms. What constitutes 'kink' varies by culture and individual perspective.",category:"desires"},{term:"Knife Play",definition:"BDSM activities involving knives for psychological effect and/or light sensation. Edge play with real risk; requires training.",category:"desires"},{term:"Latex/Rubber Fetish",definition:"Sexual attraction to latex or rubber clothing and materials. Part of the broader category of material fetishes.",category:"desires"},{term:"Leather",definition:"Both a material fetish and a broader community/identity, especially in gay male spaces. The leather community has deep historical roots in BDSM.",category:"desires"},{term:"Needle Play",definition:"BDSM activity involving temporary insertion of sterile needles into the skin. Edge play requiring medical knowledge and sterile technique.",category:"desires"},{term:"Orgasm Control",definition:"D/s dynamic where one partner controls when and how the other can orgasm. Includes edging, denial, and ruined orgasms.",category:"desires"},{term:"Orgasm Denial",definition:"The practice of bringing someone close to orgasm but not allowing release. Can be for one session or extended periods.",category:"desires"},{term:"Pet Play",definition:"Role play where one person takes on the role of an animal (puppy, kitten, pony, etc.) and another may be handler/owner. Can range from playful to serious lifestyle.",category:"desires"},{term:"Predicament Bondage",definition:"Bondage designed to create a dilemma where the restrained person must choose between uncomfortable positions or actions.",category:"desires"},{term:"Primal Play",definition:"BDSM involving raw, instinctual energy—often including chasing, wrestling, biting, growling, and less structured dynamics.",category:"desires"},{term:"Role Play",definition:"Taking on characters or scenarios during sexual or BDSM activities. Includes everything from doctor/patient to elaborate fantasies.",category:"desires"},{term:"Rope Bondage",definition:"Bondage using rope, including Western-style ties and Japanese-influenced shibari/kinbaku. Popular form of bondage with active community.",category:"desires"},{term:"Sensation Play",definition:"BDSM activities focused on creating interesting sensations: temperature play, texture play, Wartenberg wheels, etc.",category:"desires"},{term:"Shibari/Kinbaku",definition:"Japanese-influenced rope bondage known for aesthetic ties and suspension. Shibari means 'decorative tying'; kinbaku means 'tight binding.'",category:"desires"},{term:"Spanking",definition:"Impact play using hands on the buttocks. One of the most common forms of impact play, ranging from playful to intense.",category:"desires"},{term:"Suspension",definition:"Advanced rope bondage where the bound person is lifted partially or fully off the ground. Requires significant skill and carries risks.",category:"desires"},{term:"Voyeurism",definition:"The desire to watch others engage in intimate activities. Ethical practice requires consent from those being watched.",category:"desires"},{term:"Wax Play",definition:"Dripping melted candle wax on a partner's body. Uses special low-temperature candles; regular candles can cause burns.",category:"desires"},{term:"Allosexual",definition:"A person who experiences sexual attraction. The counterpart to asexual, used in ace community discussions.",category:"identities"},{term:"Androsexual",definition:"Sexual attraction to masculinity or masculine-presenting people, regardless of their gender identity.",category:"identities"},{term:"Asexual",definition:"A person who experiences little to no sexual attraction. Asexuality is a spectrum, and aces may still have romantic attractions or choose to have sex.",category:"identities"},{term:"Bicurious",definition:"Curiosity about sexual attraction to or experiences with more than one gender, while not yet identifying as bisexual.",category:"identities"},{term:"Bisexual",definition:"Attraction to more than one gender, often (but not exclusively) attraction to both one's own gender and other genders.",category:"identities"},{term:"Demisexual",definition:"A sexual orientation where someone only experiences sexual attraction after forming a strong emotional bond with another person.",category:"identities"},{term:"Fluid (Sexually Fluid)",definition:"A person whose sexual attraction or identity changes over time. Recognizes that sexuality can be dynamic rather than fixed.",category:"identities"},{term:"Gay",definition:"Homosexual—primarily attracted to the same gender. Often used by men but can apply to any gender.",category:"identities"},{term:"Graysexual",definition:"On the asexual spectrum—experiencing sexual attraction rarely, with low intensity, or only under specific circumstances.",category:"identities"},{term:"Gynosexual",definition:"Sexual attraction to femininity or feminine-presenting people, regardless of their gender identity.",category:"identities"},{term:"Heteroflexible",definition:"Primarily heterosexual but occasionally attracted to or open to experiences with same-gender individuals.",category:"identities"},{term:"Heterosexual/Straight",definition:"Attraction primarily or exclusively to a different gender than one's own.",category:"identities"},{term:"Homoflexible",definition:"Primarily homosexual but occasionally attracted to or open to experiences with different-gender individuals.",category:"identities"},{term:"Lesbian",definition:"A woman (cis or trans) who is primarily attracted to other women. Some non-binary people also identify as lesbian.",category:"identities"},{term:"Omnisexual",definition:"Attraction to all genders, with gender playing a role in the attraction (unlike pansexuality where gender is irrelevant).",category:"identities"},{term:"Pansexual",definition:"A sexual orientation characterized by attraction to people regardless of their gender identity or biological sex.",category:"identities"},{term:"Polysexual",definition:"Attraction to multiple genders but not all. Different from polyamory (multiple relationships).",category:"identities"},{term:"Queer",definition:"An umbrella term reclaimed by many in the LGBTQ+ community. Can indicate non-heterosexual orientation or non-cisgender identity.",category:"identities"},{term:"Questioning",definition:"The process of exploring one's sexual orientation or gender identity. A valid identity in itself.",category:"identities"},{term:"Sapiosexual",definition:"Attraction primarily to intelligence rather than physical characteristics. Controversial as a sexual orientation.",category:"identities"},{term:"Skoliosexual",definition:"Attraction specifically to non-binary or genderqueer individuals. Term is debated within the community.",category:"identities"},{term:"Anchor Partner",definition:"In polyamory, a partner who provides stability and grounding, similar to but less hierarchical than 'primary partner.'",category:"relationships"},{term:"Closed Relationship",definition:"A relationship where partners have agreed not to pursue other romantic or sexual connections. Includes monogamy and closed polyamory.",category:"relationships"},{term:"Comet",definition:"A partner who passes in and out of your life like a comet—intense when present but with long periods apart. Common in long-distance situations.",category:"relationships"},{term:"Compersion",definition:"The feeling of joy when seeing your partner happy with another person. Often described as the opposite of jealousy, it's a common concept in polyamorous relationships.",category:"relationships"},{term:"Don't Ask Don't Tell (DADT)",definition:"A form of non-monogamy where partners can see others but don't share details. Generally considered less healthy than other ENM styles.",category:"relationships"},{term:"ENM (Ethical Non-Monogamy)",definition:"An umbrella term for relationship structures where all parties consent to having multiple romantic or sexual relationships. Includes polyamory, swinging, and open relationships.",category:"relationships"},{term:"Fluid Bonding",definition:"The decision to have unprotected sex with a partner, typically after both parties have been tested for STIs. This is often a significant step in ENM relationships.",category:"relationships"},{term:"Friends with Benefits (FWB)",definition:"A relationship involving friendship and sexual activity without romantic commitment. Can exist within or outside of ENM structures.",category:"relationships"},{term:"Hierarchical Polyamory",definition:"Polyamory with explicit rankings of partners—usually primary, secondary, etc. The primary relationship has certain privileges or protections.",category:"relationships"},{term:"Kitchen Table Polyamory",definition:"A style of polyamory where all members of a polycule are comfortable spending time together—like sitting around a kitchen table. Contrasts with parallel polyamory.",category:"relationships"},{term:"Metamour",definition:"Your partner's other partner. In polyamorous relationships, metamours may or may not have a personal relationship with each other.",category:"relationships"},{term:"Monogamish",definition:"A relationship that is primarily monogamous but with occasional, agreed-upon exceptions for outside sexual activity.",category:"relationships"},{term:"Nesting Partner",definition:"A partner you live with. Can be used instead of 'primary' to avoid hierarchy implications while acknowledging shared living.",category:"relationships"},{term:"New Relationship Energy (NRE)",definition:"The excitement, infatuation, and heightened emotional state experienced at the beginning of a new romantic or sexual relationship.",category:"relationships"},{term:"Non-Hierarchical Polyamory",definition:"Polyamory without explicit ranking of relationships. Each relationship is valued for what it is rather than its position in a hierarchy.",category:"relationships"},{term:"One Penis Policy (OPP)",definition:"A rule in some relationships where a woman can only have one male partner (usually her existing partner). Often criticized as sexist and based in insecurity.",category:"relationships"},{term:"Open Relationship",definition:"A relationship where partners agree they can have sexual (and sometimes romantic) relationships with others. Specific rules vary by couple.",category:"relationships"},{term:"Parallel Polyamory",definition:"A style where metamours have limited or no interaction with each other. Contrasts with kitchen table polyamory.",category:"relationships"},{term:"Paramour",definition:"A romantic or sexual partner outside of a primary relationship. Less commonly used than 'partner' or 'metamour.'",category:"relationships"},{term:"Platonic Life Partner",definition:"A committed life partnership that is not romantic or sexual in nature. Recognizes deep committed relationships beyond romance.",category:"relationships"},{term:"Polycule",definition:"A network of people connected through polyamorous relationships. The term comes from 'molecule' and describes the interconnected nature of poly relationships.",category:"relationships"},{term:"Polyfidelity",definition:"A closed polyamorous relationship—multiple people committed to each other but not open to new partners.",category:"relationships"},{term:"Polyamory",definition:"The practice of having multiple romantic and/or sexual relationships simultaneously with the knowledge and consent of all involved.",category:"relationships"},{term:"Primary Partner",definition:"In hierarchical polyamory, the partner with highest priority—often sharing finances, living space, or life decisions.",category:"relationships"},{term:"Quad",definition:"A polyamorous configuration of four people. Can take various forms (two couples who date, all four interconnected, etc.).",category:"relationships"},{term:"Relationship Anarchy",definition:"A relationship philosophy that rejects hierarchy and societal expectations. Each relationship is defined individually without predetermined rules.",category:"relationships"},{term:"Relationship Escalator",definition:"The socially expected progression of relationships: dating → exclusivity → moving in → engagement → marriage → children. ENM often steps off this escalator.",category:"relationships"},{term:"Secondary Partner",definition:"In hierarchical polyamory, a partner who is not the primary. May have fewer privileges or time than the primary partner.",category:"relationships"},{term:"Solo Poly",definition:"A polyamorous approach where someone chooses not to have a primary or nesting partner, prioritizing their independence while maintaining multiple relationships.",category:"relationships"},{term:"Swinging",definition:"Sexual activity between couples (and sometimes singles) as a social/recreational activity. Generally focuses on sex rather than ongoing romantic relationships.",category:"relationships"},{term:"Throuple/Triad",definition:"A romantic relationship involving three people. All three are in relationship with each other, not just two with a shared third.",category:"relationships"},{term:"Unicorn",definition:"A bisexual person (often a woman) who joins a couple for sexual or romantic relationships. The term reflects how rare such arrangements can be to find.",category:"relationships"},{term:"Unicorn Hunters",definition:"Couples (typically hetero) seeking a bisexual woman to date them both. Often criticized for objectifying the third person and having unrealistic expectations.",category:"relationships"},{term:"V/Vee",definition:"A polyamorous configuration where one person (the hinge) has two partners who are not romantically involved with each other.",category:"relationships"},{term:"24/7",definition:"A D/s dynamic that extends beyond scenes into daily life. The power exchange is continuous, though specifics vary by relationship.",category:"roles"},{term:"Alpha",definition:"In pet play dynamics, a dominant role overseeing other pups or pets. Also used more generally to mean a dominant personality.",category:"roles"},{term:"Bottom",definition:"The person who receives in a BDSM scene (gets tied, spanked, etc.). Not necessarily submissive—can be a 'bossy bottom' or 'service top' situation.",category:"roles"},{term:"Brat",definition:"A type of submissive who intentionally misbehaves or provokes their dominant, often to elicit punishment. Part of the dynamic, not actual disrespect.",category:"roles"},{term:"Brat Tamer",definition:"A dominant who enjoys and handles bratty submissives, bringing them back in line through punishment or other means.",category:"roles"},{term:"Bull",definition:"In cuckolding dynamics, the person who has sex with someone's partner while the 'cuckold' watches or knows.",category:"roles"},{term:"Caregiver/Little (CG/L)",definition:"A D/s dynamic involving a caregiver role (Daddy, Mommy, etc.) and a little role (someone who takes on childlike persona). Part of age play.",category:"roles"},{term:"Cuckold",definition:"Someone (traditionally male) who derives pleasure from their partner having sex with others. Often involves humiliation elements.",category:"roles"},{term:"Cuckquean",definition:"The female equivalent of cuckold—a woman who derives pleasure from her partner having sex with others.",category:"roles"},{term:"Daddy Dom (DD)",definition:"A dominant who takes on a paternal, caring role while maintaining control. Part of DD/lg (Daddy Dom/little girl) dynamics.",category:"roles"},{term:"Dominant (Dom/Domme)",definition:"In BDSM, the partner who takes the controlling role in a power exchange dynamic. They guide scenes and take responsibility for their submissive's experience.",category:"roles"},{term:"Handler",definition:"In pet play, the person who 'handles' or cares for the pet. Similar to a dominant but specific to pet play dynamics.",category:"roles"},{term:"Hinge",definition:"In a V polyamorous configuration, the person in the middle who is dating both others (who aren't dating each other).",category:"roles"},{term:"Hotwife",definition:"A married woman who has sex with others with her husband's knowledge and encouragement. Related to cuckolding but without humiliation focus.",category:"roles"},{term:"Little",definition:"In CG/L dynamics, the person who takes on a childlike persona. Can range from subtle to elaborate role play. Always between consenting adults.",category:"roles"},{term:"Masochist",definition:"Someone who derives pleasure from receiving pain or intense sensation. Can be submissive but doesn't have to be.",category:"roles"},{term:"Master/Mistress",definition:"Formal titles for dominants, particularly in M/s (Master/slave) dynamics. Indicates a more intense power exchange than Dom/sub.",category:"roles"},{term:"Middle",definition:"In age play, someone who takes on a preteen/teen persona rather than a younger 'little' or older role.",category:"roles"},{term:"Mommy Domme",definition:"A female dominant who takes on a maternal, nurturing role while maintaining control. Part of caregiving D/s dynamics.",category:"roles"},{term:"Owner",definition:"In pet play or ownership dynamics, the person who 'owns' the pet or property. Higher-protocol term than handler.",category:"roles"},{term:"Primal Predator/Prey",definition:"In primal play, the chaser (predator) and the chased (prey). Raw, instinctual energy without formal D/s protocols.",category:"roles"},{term:"Rigger",definition:"Someone who ties rope bondage. The partner being tied is often called a 'bunny' or 'rope bottom.'",category:"roles"},{term:"Rope Bunny",definition:"Someone who enjoys being tied in rope bondage. The term is endearing and common in the rope community.",category:"roles"},{term:"Sadist",definition:"Someone who derives pleasure from giving pain or intense sensation. Can be dominant but doesn't have to be.",category:"roles"},{term:"Service Submissive",definition:"A submissive whose focus is on serving their dominant through acts of service—domestic, sexual, or otherwise.",category:"roles"},{term:"Slave",definition:"In M/s dynamics, the person who surrenders extensive control to their Master/Mistress. More intense than typical D/s.",category:"roles"},{term:"Stag",definition:"Like a cuckold's partner but without humiliation—a man who enjoys his wife having sex with others from a place of pride rather than humiliation.",category:"roles"},{term:"Submissive (Sub)",definition:"In BDSM, the partner who consensually gives up control to the dominant. Submission is an active choice and requires trust and communication.",category:"roles"},{term:"Switch",definition:"Someone who enjoys both dominant and submissive roles in BDSM, either in different relationships or within the same dynamic.",category:"roles"},{term:"Top",definition:"The person who does in a BDSM scene (ties, spanks, etc.). Not necessarily dominant—a service top serves their bottom's desires.",category:"roles"},{term:"BDSM",definition:"An acronym for Bondage/Discipline, Dominance/Submission, and Sadism/Masochism. It encompasses a wide range of erotic practices involving power exchange, restraint, and sensation play.",category:"practices"},{term:"Check-In",definition:"Verbal or non-verbal communication during a scene to ensure all parties are doing well. Essential for maintaining consent.",category:"practices"},{term:"Collar",definition:"In D/s dynamics, a collar often symbolizes the D/s relationship—similar to a wedding ring. Can be worn 24/7 or for scenes only.",category:"practices"},{term:"Collaring Ceremony",definition:"A ritual marking a formal D/s commitment, similar to a wedding. The dominant places a collar on the submissive.",category:"practices"},{term:"Consent Violation",definition:"Any activity that occurs without proper consent, or continues after consent is withdrawn. A serious breach of BDSM ethics.",category:"practices"},{term:"Contract",definition:"A written agreement in D/s relationships outlining rules, expectations, limits, and terms. Not legally binding but symbolically important.",category:"practices"},{term:"Drop",definition:"The physical and emotional low that can occur after intense scenes or experiences, caused by neurochemical changes. Includes sub drop and dom drop.",category:"practices"},{term:"Dungeon",definition:"A space equipped for BDSM play, including furniture and equipment. Can be in a club, private home, or commercial space.",category:"practices"},{term:"Full Swap",definition:"In swinging, sexual activity that includes penetrative intercourse with other partners. Contrasts with soft swap.",category:"practices"},{term:"Gang Bang",definition:"Sexual activity where one person has sex with multiple partners in succession or simultaneously. Consensual and planned.",category:"practices"},{term:"Group Sex",definition:"Sexual activity involving more than two people. Common at lifestyle events and can take many forms.",category:"practices"},{term:"Hard Limit",definition:"Activities that a person will absolutely not engage in under any circumstances. These boundaries are non-negotiable and must always be respected.",category:"practices"},{term:"Lifestyle (The)",definition:"Shorthand for the swinger/ENM lifestyle. 'Are you in the lifestyle?' is a common way to ask about involvement.",category:"practices"},{term:"Munch",definition:"A casual, vanilla social gathering for people in the kink community. Usually at a restaurant or bar, with no play.",category:"practices"},{term:"Negotiation",definition:"The conversation before BDSM activity where participants discuss wants, limits, health concerns, and expectations.",category:"practices"},{term:"Play Party",definition:"A social gathering where sexual or BDSM activity can take place. Rules and formats vary widely.",category:"practices"},{term:"Protocol",definition:"Rules governing behavior in a D/s dynamic—how to address the dominant, postures, rituals, etc. Varies from minimal to elaborate.",category:"practices"},{term:"RACK (Risk-Aware Consensual Kink)",definition:"A framework acknowledging that all BDSM carries some risk, emphasizing awareness and informed consent.",category:"practices"},{term:"Safer Sex",definition:"Practices that reduce risk of STI transmission, including barriers, testing, and communication. Important in ENM contexts.",category:"practices"},{term:"Safeword",definition:"A predetermined word or signal used during BDSM play to immediately stop or pause the scene. Common systems include 'red' (stop) and 'yellow' (slow down).",category:"practices"},{term:"Same-Room",definition:"In swinging, when two couples have sex in the same room with their own partners but in each other's presence.",category:"practices"},{term:"Scene",definition:"A BDSM encounter or session. Can be elaborate or simple, planned or spontaneous.",category:"practices"},{term:"Soft Limit",definition:"Activities that someone is hesitant about but may be willing to explore under the right circumstances, with the right partner, or with proper negotiation.",category:"practices"},{term:"Soft Swap",definition:"In swinging, sexual activity with others that doesn't include penetrative intercourse. Often used by couples new to the lifestyle.",category:"practices"},{term:"SSC (Safe, Sane, Consensual)",definition:"The traditional framework for ethical BDSM: activities should be safe, participants should be in a healthy mental state, and everyone must consent.",category:"practices"},{term:"Subspace",definition:"An altered state of consciousness that submissives may enter during intense scenes, caused by endorphin release. Can impair judgment.",category:"practices"},{term:"Swinger Club/Lifestyle Club",definition:"A venue for lifestyle activities, often with social areas and private rooms. Rules and atmospheres vary significantly.",category:"practices"},{term:"TPE (Total Power Exchange)",definition:"An intense D/s dynamic where the dominant has control over most or all aspects of the submissive's life. Not for beginners.",category:"practices"},{term:"Vanilla",definition:"Conventional or 'mainstream' sexual practices that don't involve BDSM or kink elements. Not a derogatory term—simply describes preferences.",category:"practices"},{term:"Veto",definition:"In some ENM relationships, the power for one partner to end another partner's outside relationship. Controversial and increasingly uncommon.",category:"practices"}],Hu=[{id:"all",label:"All"},{id:"desires",label:"Desires & Kinks"},{id:"identities",label:"Sexual Identities"},{id:"relationships",label:"Relationship Types"},{id:"roles",label:"Roles & Dynamics"},{id:"practices",label:"Practices"}],nL=()=>{var s;const[e,t]=m.useState(""),[n,r]=m.useState("all"),o=m.useMemo(()=>fv.filter(l=>{const c=l.term.toLowerCase().includes(e.toLowerCase())||l.definition.toLowerCase().includes(e.toLowerCase()),u=n==="all"||l.category===n;return c&&u}).sort((l,c)=>l.term.localeCompare(c.term)),[e,n]),i=m.useMemo(()=>{const l={};return o.forEach(c=>{const u=c.term[0].toUpperCase();l[u]||(l[u]=[]),l[u].push(c)}),l},[o]);return a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsxs(wt,{children:[a.jsx("title",{children:"Glossary | SPICE Guide"}),a.jsx("meta",{name:"description",content:"Learn lifestyle terminology with our comprehensive glossary. From BDSM terms to polyamory concepts, understand the language of ethical non-monogamy."}),a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/guide/glossary"})]}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("main",{className:"pt-32 pb-16 px-4",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6",children:[a.jsx(rj,{className:"w-4 h-4 text-primary"}),a.jsx("span",{className:"text-sm text-muted-foreground",children:"SPICE Guide"})]}),a.jsx("h1",{className:"text-4xl md:text-5xl font-black mb-6",children:a.jsx("span",{className:"text-gradient",children:"Glossary"})}),a.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto",children:"Understanding the language of the lifestyle is the first step to meaningful connection."}),a.jsxs("p",{className:"text-sm text-muted-foreground mt-2",children:[fv.length," terms and counting"]})]}),a.jsxs("div",{className:"relative mb-8",children:[a.jsx(Sj,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"}),a.jsx(xo,{type:"text",placeholder:"Search terms...",value:e,onChange:l=>t(l.target.value),className:"pl-12 h-12 glass-card border-border/50"})]}),a.jsx("div",{className:"flex flex-wrap gap-2 mb-12",children:Hu.map(l=>a.jsx("button",{onClick:()=>r(l.id),className:`px-4 py-2 rounded-full text-sm font-medium transition-all ${n===l.id?"bg-primary text-primary-foreground":"glass-card hover:bg-primary/20"}`,children:l.label},l.id))}),a.jsxs("p",{className:"text-sm text-muted-foreground mb-8",children:["Showing ",o.length," term",o.length!==1?"s":"",e&&` for "${e}"`,n!=="all"&&` in ${(s=Hu.find(l=>l.id===n))==null?void 0:s.label}`]}),a.jsx("div",{className:"space-y-8",children:Object.entries(i).map(([l,c])=>a.jsxs("div",{children:[a.jsx("div",{className:"sticky top-20 z-10 mb-4",children:a.jsx("span",{className:"inline-block px-4 py-2 text-2xl font-black text-gradient glass-card rounded-lg",children:l})}),a.jsx("div",{className:"space-y-4",children:c.map(u=>{var d;return a.jsxs("div",{className:"glass-card rounded-xl p-6 border-gradient hover:bg-primary/5 transition-colors",children:[a.jsxs("div",{className:"flex items-start justify-between gap-4 mb-2",children:[a.jsx("h3",{className:"text-lg font-bold text-primary",children:u.term}),a.jsx("span",{className:"px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground whitespace-nowrap",children:(d=Hu.find(h=>h.id===u.category))==null?void 0:d.label})]}),a.jsx("p",{className:"text-muted-foreground",children:u.definition})]},u.term)})})]},l))}),o.length===0&&a.jsx("div",{className:"text-center py-12",children:a.jsx("p",{className:"text-muted-foreground",children:"No terms found matching your search."})})]})}),a.jsx(Nt,{})]})},pv=[{id:"online",title:"Online Safety",icon:Af,description:"Protect yourself in the digital world",articles:[{slug:"protecting-privacy-dating-apps",title:"Protecting Your Privacy on Dating Apps",excerpt:"Essential tips for maintaining your privacy and security while using lifestyle apps and websites.",readTime:"6 min read",image:"https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&h=250&fit=crop"},{slug:"spotting-fake-profiles-catfishing",title:"Spotting Fake Profiles and Catfishing",excerpt:"Red flags to watch for and verification strategies to ensure you're talking to real people.",readTime:"5 min read",image:"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=250&fit=crop"},{slug:"secure-communication-practices",title:"Secure Communication Practices",excerpt:"How to keep your conversations private and protect sensitive information.",readTime:"4 min read",image:"https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=250&fit=crop"}]},{id:"dating",title:"Dating Safety",icon:dj,description:"Stay safe when meeting new people",articles:[{slug:"first-meet-safety-guidelines",title:"First Meet Safety Guidelines",excerpt:"A comprehensive checklist for meeting someone from the lifestyle community for the first time.",readTime:"7 min read",image:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop"},{slug:"buddy-system-keeping-friends-informed",title:"The Buddy System: Keeping Friends Informed",excerpt:"How to set up a safety network when meeting new connections.",readTime:"4 min read",image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"},{slug:"trusting-your-instincts",title:"Trusting Your Instincts",excerpt:"Recognizing and acting on red flags during dates and meetups.",readTime:"5 min read",image:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=250&fit=crop"}]},{id:"consent",title:"Consent & Boundaries",icon:Qt,description:"Understanding and practicing enthusiastic consent",articles:[{slug:"enthusiastic-consent-101",title:"Enthusiastic Consent 101",excerpt:"What consent really means and how to practice it in every interaction.",readTime:"6 min read",image:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop"},{slug:"setting-communicating-boundaries",title:"Setting and Communicating Boundaries",excerpt:"How to clearly express your limits and respect those of others.",readTime:"5 min read",image:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop"},{slug:"what-to-do-consent-violated",title:"What to Do If Consent Is Violated",excerpt:"Resources and steps for handling consent violations in the lifestyle community.",readTime:"8 min read",image:"https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop"}]},{id:"health",title:"Sexual Health",icon:v0,description:"Protecting yourself and your partners",articles:[{slug:"sti-testing-what-when-how-often",title:"STI Testing: What, When, and How Often",excerpt:"A guide to regular testing and what to get tested for as an active member of the lifestyle.",readTime:"7 min read",image:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop"},{slug:"safer-sex-practices-enm",title:"Safer Sex Practices for ENM",excerpt:"Barrier methods, risk reduction, and communication about sexual health.",readTime:"6 min read",image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop"},{slug:"prep-and-pep-what-you-need-to-know",title:"PrEP and PEP: What You Need to Know",excerpt:"Understanding HIV prevention medications and whether they're right for you.",readTime:"5 min read",image:"https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=250&fit=crop"}]}],rL=()=>a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsxs(wt,{children:[a.jsx("title",{children:"Safety Resources | SPICE Guide"}),a.jsx("meta",{name:"description",content:"Stay safe in the lifestyle with our comprehensive safety guides. Learn about online safety, dating safety, consent, and sexual health."}),a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/guide/safety"})]}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("main",{className:"pt-32 pb-16 px-4",children:a.jsxs("div",{className:"max-w-6xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6",children:[a.jsx(ha,{className:"w-4 h-4 text-primary"}),a.jsx("span",{className:"text-sm text-muted-foreground",children:"SPICE Guide"})]}),a.jsx("h1",{className:"text-4xl md:text-5xl font-black mb-6",children:a.jsx("span",{className:"text-gradient",children:"Safety"})}),a.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto",children:"Your safety is our priority. Learn how to protect yourself online, in person, and in your intimate experiences."})]}),a.jsx("div",{className:"glass-card rounded-2xl p-6 border-gradient bg-destructive/10 mb-12",children:a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx(v0,{className:"w-6 h-6 text-destructive shrink-0 mt-1"}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-bold mb-2",children:"Emergency Resources"}),a.jsx("p",{className:"text-muted-foreground mb-4",children:"If you're in immediate danger, please contact emergency services. For non-emergency support:"}),a.jsxs("div",{className:"flex flex-wrap gap-4 text-sm",children:[a.jsx("span",{className:"text-foreground",children:"RAINN Hotline: 1-800-656-4673"}),a.jsx("span",{className:"text-muted-foreground",children:"|"}),a.jsx("span",{className:"text-foreground",children:"National DV Hotline: 1-800-799-7233"})]})]})]})}),a.jsx("div",{className:"space-y-16",children:pv.map(e=>a.jsxs("section",{className:"scroll-mt-24",id:e.id,children:[a.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center",children:a.jsx(e.icon,{className:"w-6 h-6 text-primary"})}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold",children:e.title}),a.jsx("p",{className:"text-muted-foreground",children:e.description})]})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:e.articles.map((t,n)=>a.jsx(pe,{to:`/guide/article/${t.slug}`,className:"glass-card rounded-xl overflow-hidden border-gradient feature-card group cursor-pointer block",children:a.jsxs("article",{children:[a.jsxs("div",{className:"relative h-36 overflow-hidden",children:[a.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"})]}),a.jsxs("div",{className:"p-5",children:[a.jsx("h3",{className:"text-lg font-bold mb-3 group-hover:text-primary transition-colors",children:t.title}),a.jsx("p",{className:"text-muted-foreground text-sm mb-4 line-clamp-2",children:t.excerpt}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs text-muted-foreground",children:t.readTime}),a.jsx(Br,{className:"w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"})]})]})]})},n))})]},e.id))}),a.jsx("div",{className:"mt-16",children:a.jsxs("div",{className:"glass-card rounded-2xl p-6 border-gradient",children:[a.jsx("h3",{className:"text-lg font-bold mb-4 text-center",children:"Quick Navigation"}),a.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:pv.map(e=>a.jsxs("a",{href:`#${e.id}`,className:"flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-primary/20 transition-colors",children:[a.jsx(e.icon,{className:"w-4 h-4 text-primary"}),a.jsx("span",{className:"text-sm",children:e.title})]},e.id))})]})})]})}),a.jsx(Nt,{})]}),oL=[{id:"mental-health",title:"Mental Health",icon:h0,description:"Taking care of your mind is essential for healthy relationships",articles:[{slug:"managing-anxiety-non-traditional-relationships",title:"Managing Anxiety in Non-Traditional Relationships",excerpt:"Strategies for coping with anxiety that may arise in ENM and lifestyle dynamics.",readTime:"7 min read",image:"https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=250&fit=crop"},{slug:"processing-jealousy-mental-health-approach",title:"Processing Jealousy: A Mental Health Approach",excerpt:"Understanding jealousy as an emotion and working through it constructively.",readTime:"6 min read",image:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=250&fit=crop"},{slug:"when-to-seek-professional-help",title:"When to Seek Professional Help",excerpt:"Recognizing when you might benefit from working with a kink-aware therapist.",readTime:"5 min read",image:"https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=400&h=250&fit=crop"}]},{id:"emotional",title:"Emotional Wellbeing",icon:Qt,description:"Nurturing your emotional health in the lifestyle",articles:[{slug:"self-compassion-alternative-lifestyles",title:"Self-Compassion in Alternative Lifestyles",excerpt:"Being kind to yourself while navigating non-traditional relationship structures.",readTime:"6 min read",image:"https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop"},{slug:"dealing-with-drop-after-intense-experiences",title:"Dealing with Drop After Intense Experiences",excerpt:"Understanding and managing sub drop, dom drop, and emotional drops after events.",readTime:"8 min read",image:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop"},{slug:"building-emotional-resilience",title:"Building Emotional Resilience",excerpt:"Strengthening your emotional core for the unique challenges of lifestyle relationships.",readTime:"7 min read",image:"https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=400&h=250&fit=crop"}]},{id:"community",title:"Community Support",icon:_r,description:"You're not alone—find your people",articles:[{slug:"finding-kink-friendly-support-groups",title:"Finding Kink-Friendly Support Groups",excerpt:"Resources for connecting with others who understand the lifestyle.",readTime:"5 min read",image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop"},{slug:"building-support-network",title:"Building a Support Network",excerpt:"Creating meaningful connections with people who can support your journey.",readTime:"6 min read",image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"},{slug:"online-communities-forums",title:"Online Communities and Forums",excerpt:"Safe online spaces to discuss experiences and seek advice.",readTime:"4 min read",image:"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=250&fit=crop"}]}],iL=[{name:"NCSF Kink-Aware Professionals",description:"Find therapists, doctors, and legal professionals who understand alternative lifestyles.",url:"https://www.kapprofessionals.org/"},{name:"Psychology Today - Find a Therapist",description:"Search for therapists specializing in sexuality, LGBTQ+, and non-traditional relationships.",url:"https://www.psychologytoday.com/us/therapists"},{name:"Crisis Text Line",description:"Text HOME to 741741 to connect with a trained crisis counselor.",url:"https://www.crisistextline.org/"},{name:"7 Cups",description:"Free online chat with trained listeners for emotional support.",url:"https://www.7cups.com/"}],sL=()=>a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsxs(wt,{children:[a.jsx("title",{children:"Self Care Resources | SPICE Guide"}),a.jsx("meta",{name:"description",content:"Prioritize your mental health and wellbeing. Find resources for self-care, emotional support, and mental health in the lifestyle community."}),a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/guide/self-care"})]}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("main",{className:"pt-32 pb-16 px-4",children:a.jsxs("div",{className:"max-w-6xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6",children:[a.jsx(jt,{className:"w-4 h-4 text-primary"}),a.jsx("span",{className:"text-sm text-muted-foreground",children:"SPICE Guide"})]}),a.jsxs("h1",{className:"text-4xl md:text-5xl font-black mb-6",children:[a.jsx("span",{className:"text-gradient",children:"Self Care"}),a.jsx("br",{}),a.jsx("span",{className:"text-foreground",children:"Resources"})]}),a.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto",children:"Your wellbeing matters. Explore resources for mental health, emotional support, and self-care tailored to the lifestyle community."})]}),a.jsx("div",{className:"glass-card rounded-2xl p-6 border-gradient bg-primary/10 mb-12",children:a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx(wj,{className:"w-6 h-6 text-primary shrink-0 mt-1"}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-bold mb-2",children:"Need Immediate Support?"}),a.jsx("p",{className:"text-muted-foreground mb-4",children:"If you're in crisis or need someone to talk to right now, these resources are available 24/7:"}),a.jsxs("div",{className:"flex flex-wrap gap-4 text-sm",children:[a.jsx("span",{className:"text-foreground",children:"988 Suicide & Crisis Lifeline: Call or text 988"}),a.jsx("span",{className:"text-muted-foreground",children:"|"}),a.jsx("span",{className:"text-foreground",children:"Crisis Text Line: Text HOME to 741741"})]})]})]})}),a.jsx("div",{className:"space-y-16",children:oL.map(e=>a.jsxs("section",{className:"scroll-mt-24",id:e.id,children:[a.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center",children:a.jsx(e.icon,{className:"w-6 h-6 text-primary"})}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold",children:e.title}),a.jsx("p",{className:"text-muted-foreground",children:e.description})]})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:e.articles.map((t,n)=>a.jsx(pe,{to:`/guide/article/${t.slug}`,className:"glass-card rounded-xl overflow-hidden border-gradient feature-card group cursor-pointer block",children:a.jsxs("article",{children:[a.jsxs("div",{className:"relative h-36 overflow-hidden",children:[a.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"})]}),a.jsxs("div",{className:"p-5",children:[a.jsx("h3",{className:"text-lg font-bold mb-3 group-hover:text-primary transition-colors",children:t.title}),a.jsx("p",{className:"text-muted-foreground text-sm mb-4 line-clamp-2",children:t.excerpt}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs text-muted-foreground",children:t.readTime}),a.jsx(Br,{className:"w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"})]})]})]})},n))})]},e.id))}),a.jsxs("section",{className:"mt-16",children:[a.jsx("h2",{className:"text-2xl font-bold mb-8 text-center",children:"External Resources"}),a.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:iL.map((e,t)=>a.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"glass-card rounded-xl p-6 border-gradient hover:bg-primary/10 transition-colors group",children:a.jsxs("div",{className:"flex items-start justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-bold mb-2 group-hover:text-primary transition-colors",children:e.name}),a.jsx("p",{className:"text-muted-foreground text-sm",children:e.description})]}),a.jsx(uj,{className:"w-5 h-5 text-muted-foreground shrink-0 group-hover:text-primary transition-colors"})]})},t))})]}),a.jsx("div",{className:"mt-16",children:a.jsxs("div",{className:"glass-card rounded-2xl p-8 border-gradient text-center max-w-2xl mx-auto",children:[a.jsx(Qt,{className:"w-12 h-12 text-primary mx-auto mb-4"}),a.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Remember"}),a.jsx("p",{className:"text-muted-foreground",children:"Taking care of yourself isn't selfish—it's essential. You deserve to feel supported, understood, and valued in all aspects of your life and relationships."})]})})]})}),a.jsx(Nt,{})]});var aL={};const lL=["Verified adult community","Advanced matching algorithms","Secure and private messaging","Event discovery nearby","Compatibility quizzes","Community forums"],cL=()=>{f1({particleCount:100,spread:70,origin:{y:.6},colors:["#FF4D6D","#FF758F","#FFB3C1","#C9184A","#FF8FA3"]})},uL=()=>{const[e,t]=m.useState(""),[n,r]=m.useState(!1),[o,i]=m.useState(!1),s=async l=>{if(l.preventDefault(),!e||!e.includes("@")){jn.error("Please enter a valid email address");return}r(!0);try{const c=aL.REACT_APP_BACKEND_URL||"http://localhost:8001",u=await fetch(`${c}/api/waitlist`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,source:"download"})});if(!u.ok)throw new Error("Failed to join waitlist");const d=await u.json();d!=null&&d.alreadyExists?(jn.info("You're already part of the Spice family! 💕 Sit tight — we'll let you know as soon as we launch.",{duration:5e3}),t("")):(cL(),i(!0),jn.success("Welcome to the Spice family! 🎉 Check your inbox for a confirmation email and get ready for something special.",{duration:5e3}),t(""),setTimeout(()=>i(!1),3e3))}catch(c){console.error("Error joining waitlist:",c),((c==null?void 0:c.message)||"").includes("already on the waitlist")?jn.info("You're already part of the Spice family! 💕 Sit tight — we'll let you know as soon as we launch.",{duration:5e3}):jn.error("Something went wrong. Please try again.")}finally{r(!1)}};return a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsxs(wt,{children:[a.jsx("title",{children:"Download SPICE App | iOS & Android"}),a.jsx("meta",{name:"description",content:"Download the SPICE app for iPhone and Android. Join the premier adult dating community for swingers, BDSM enthusiasts, and ENM lifestyles."}),a.jsx("link",{rel:"canonical",href:"https://thespiceapp.com/download"})]}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("main",{className:"pt-32 pb-16 px-4",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6",children:[a.jsx(og,{className:"w-4 h-4 text-primary"}),a.jsx("span",{className:"text-sm text-muted-foreground",children:"Mobile App"})]}),a.jsx("h1",{className:"text-4xl md:text-5xl font-black mb-6",children:a.jsx("span",{className:"text-gradient",children:"Download SPICE"})}),a.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto mb-8",children:"Take your connections on the go. The SPICE app puts the entire lifestyle community in your pocket."}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[a.jsxs("a",{href:"#",className:"flex items-center gap-3 px-6 py-4 rounded-xl glass-card border-gradient hover:bg-primary/10 transition-colors group w-full sm:w-auto",children:[a.jsx(d0,{className:"w-8 h-8 text-foreground"}),a.jsxs("div",{className:"text-left",children:[a.jsx("div",{className:"text-xs text-muted-foreground",children:"Download on the"}),a.jsx("div",{className:"text-lg font-semibold",children:"App Store"})]})]}),a.jsxs("a",{href:"#",className:"flex items-center gap-3 px-6 py-4 rounded-xl glass-card border-gradient hover:bg-primary/10 transition-colors group w-full sm:w-auto",children:[a.jsx(y0,{className:"w-8 h-8 text-foreground"}),a.jsxs("div",{className:"text-left",children:[a.jsx("div",{className:"text-xs text-muted-foreground",children:"Get it on"}),a.jsx("div",{className:"text-lg font-semibold",children:"Google Play"})]})]})]}),a.jsxs("div",{className:`glass-card rounded-2xl p-8 border-gradient max-w-lg mx-auto transition-all duration-500 ${o?"ring-2 ring-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-[1.02] bg-green-500/10":"bg-primary/10"}`,children:[a.jsx(jt,{className:`w-8 h-8 mx-auto mb-4 ${o?"text-green-500":"text-primary"}`}),a.jsx("h2",{className:`text-xl font-bold mb-2 ${o?"text-green-500":""}`,children:o?"🎉 You're In!":"Coming Soon!"}),a.jsx("p",{className:"text-muted-foreground text-sm mb-6",children:o?"Welcome to the Spice family!":"Our mobile app is currently in development. Join the waitlist and get 2 months FREE VIP access when we launch."}),a.jsxs("form",{onSubmit:s,className:"space-y-4",children:[a.jsx(xo,{type:"email",placeholder:"Enter your email",value:e,onChange:l=>t(l.target.value),className:"bg-background/50 border-border/50 focus:border-primary h-12 text-center",disabled:n,required:!0}),a.jsxs(He,{type:"submit",className:"w-full h-12",disabled:n,children:[n?a.jsx(Mf,{className:"w-5 h-5 animate-spin mr-2"}):a.jsx(jt,{className:"w-5 h-5 mr-2"}),n?"Joining...":"Join the Waitlist"]})]})]})]}),a.jsxs("div",{className:"glass-card rounded-2xl p-8 border-gradient mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"What You'll Get"}),a.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:lL.map((l,c)=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(sj,{className:"w-5 h-5 text-primary shrink-0"}),a.jsx("span",{children:l})]},c))})]}),a.jsx("div",{className:"relative",children:a.jsx("div",{className:"glass-card rounded-3xl p-8 border-gradient text-center",children:a.jsx("div",{className:"w-64 h-[500px] mx-auto bg-gradient-to-b from-primary/20 to-secondary/20 rounded-[3rem] flex items-center justify-center border-4 border-border",children:a.jsxs("div",{className:"text-center",children:[a.jsx(og,{className:"w-16 h-16 text-primary mx-auto mb-4"}),a.jsx("p",{className:"text-muted-foreground",children:"App Preview"}),a.jsx("p",{className:"text-sm text-muted-foreground/60",children:"Coming Soon"})]})})})}),a.jsx("div",{className:"mt-12 text-center",children:a.jsxs("div",{className:"glass-card rounded-2xl p-8 border-gradient max-w-md mx-auto",children:[a.jsx("h3",{className:"text-xl font-bold mb-4",children:"Scan to Download"}),a.jsx("div",{className:"w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center mb-4",children:a.jsx("span",{className:"text-muted-foreground text-xs",children:"QR Code"})}),a.jsx("p",{className:"text-muted-foreground text-sm",children:"Scan with your phone's camera to go directly to the app store."})]})})]})}),a.jsx(Nt,{})]})},dL=()=>[...KS,...QS,...JS,...XS],hL=e=>dL().find(t=>t.slug===e),fL=()=>{const{slug:e}=FM(),t=bb(),n=e?hL(e):void 0;if(!n)return a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsx(ht,{}),a.jsx("main",{className:"pt-32 pb-16 px-4",children:a.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[a.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Article Not Found"}),a.jsx("p",{className:"text-muted-foreground mb-8",children:"The article you're looking for doesn't exist or has been moved."}),a.jsxs(He,{onClick:()=>t(-1),children:[a.jsx(Wl,{className:"w-4 h-4 mr-2"}),"Go Back"]})]})}),a.jsx(Nt,{})]});const r=i=>new Date(i).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),o=i=>i.split(`
`).map((s,l)=>s.startsWith("## ")?`<h2 class="text-2xl font-bold mt-8 mb-4 text-gradient">${s.slice(3)}</h2>`:s.startsWith("### ")?`<h3 class="text-xl font-semibold mt-6 mb-3 text-primary">${s.slice(4)}</h3>`:(s=s.replace(/\*\*(.*?)\*\*/g,'<strong class="text-foreground">$1</strong>'),s=s.replace(/\*(.*?)\*/g,"<em>$1</em>"),s=s.replace(/✓/g,'<span class="text-green-500">✓</span>'),s=s.replace(/✗/g,'<span class="text-red-500">✗</span>'),s=s.replace(/❌/g,'<span class="text-red-500">❌</span>'),s=s.replace(/⚠️/g,'<span class="text-yellow-500">⚠️</span>'),s=s.replace(/🚩/g,'<span class="text-red-500">🚩</span>'),s.startsWith("> ")?`<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">${s.slice(2)}</blockquote>`:s.startsWith("- ")?`<li class="ml-4 mb-2">${s.slice(2)}</li>`:/^\d+\.\s/.test(s)?`<li class="ml-4 mb-2 list-decimal">${s.replace(/^\d+\.\s/,"")}</li>`:s.startsWith("|")?`<div class="overflow-x-auto my-4"><code class="text-sm">${s}</code></div>`:s.trim()===""?"<br/>":`<p class="mb-4 text-muted-foreground leading-relaxed">${s}</p>`)).join("");return a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsxs(wt,{children:[a.jsxs("title",{children:[n.title," | SPICE Guide"]}),a.jsx("meta",{name:"description",content:n.excerpt}),a.jsx("link",{rel:"canonical",href:`https://thespiceapp.com/guide/article/${n.slug}`})]}),a.jsx(ht,{}),a.jsx(Et,{}),a.jsx("main",{className:"pt-32 pb-16 px-4",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsxs(He,{variant:"ghost",onClick:()=>t(-1),className:"mb-8",children:[a.jsx(Wl,{className:"w-4 h-4 mr-2"}),"Back"]}),a.jsxs("article",{children:[a.jsxs("div",{className:"relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8",children:[a.jsx("img",{src:n.image,alt:n.title,className:"w-full h-full object-cover"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"}),a.jsxs("div",{className:"absolute bottom-6 left-6 right-6",children:[a.jsx("span",{className:"inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground mb-4",children:n.category}),a.jsx("h1",{className:"text-3xl md:text-4xl font-black text-foreground",children:n.title})]})]}),a.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Ej,{className:"w-4 h-4"}),a.jsx("span",{children:n.author})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(f0,{className:"w-4 h-4"}),a.jsx("span",{children:r(n.publishedDate)})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(aj,{className:"w-4 h-4"}),a.jsx("span",{children:n.readTime})]})]}),n.tags&&n.tags.length>0&&a.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:n.tags.map((i,s)=>a.jsxs("span",{className:"inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground",children:[a.jsx(Tj,{className:"w-3 h-3"}),i]},s))}),a.jsx("div",{className:"glass-card rounded-xl p-6 border-gradient mb-8",children:a.jsx("p",{className:"text-lg text-muted-foreground italic",children:n.excerpt})}),a.jsx("div",{className:"prose prose-invert max-w-none",dangerouslySetInnerHTML:{__html:o(n.content)}}),a.jsxs("div",{className:"mt-16 glass-card rounded-2xl p-8 border-gradient text-center",children:[a.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Ready to explore?"}),a.jsx("p",{className:"text-muted-foreground mb-6",children:"Take our compatibility quiz to discover more about yourself and find like-minded connections."}),a.jsx(pe,{to:"/quiz",className:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors",children:"Take the BDSM Quiz"})]})]})]})}),a.jsx(Nt,{})]})},pL=()=>{const e=qr();return m.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),a.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:a.jsxs("div",{className:"text-center",children:[a.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),a.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),a.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},mL=new oM,gL=()=>a.jsx(Ib,{children:a.jsx(sM,{client:mL,children:a.jsxs(A2,{children:[a.jsx(dN,{}),a.jsx(zN,{}),a.jsxs(sA,{children:[a.jsx(BA,{}),a.jsxs(ZM,{children:[a.jsx(at,{path:"/",element:a.jsx(NI,{})}),a.jsx(at,{path:"/spice-app",element:a.jsx(l3,{})}),a.jsx(at,{path:"/about",element:a.jsx(d3,{})}),a.jsx(at,{path:"/team",element:a.jsx(p3,{})}),a.jsx(at,{path:"/contact",element:a.jsx(v3,{})}),a.jsx(at,{path:"/quiz",element:a.jsx(Q3,{})}),a.jsx(at,{path:"/guide/newcomers",element:a.jsx(X3,{})}),a.jsx(at,{path:"/guide/how-to",element:a.jsx(eL,{})}),a.jsx(at,{path:"/guide/community",element:a.jsx(tL,{})}),a.jsx(at,{path:"/guide/glossary",element:a.jsx(nL,{})}),a.jsx(at,{path:"/guide/safety",element:a.jsx(rL,{})}),a.jsx(at,{path:"/guide/self-care",element:a.jsx(sL,{})}),a.jsx(at,{path:"/download",element:a.jsx(uL,{})}),a.jsx(at,{path:"/guide/article/:slug",element:a.jsx(fL,{})}),a.jsx(at,{path:"*",element:a.jsx(pL,{})})]})]})]})})}),yL="G-9REM6Z20KL";function mv(e){typeof window>"u"||window.gtag&&window.gtag("config",yL,{page_path:e})}const vL="G-9REM6Z20KL";function xL(e){if(typeof document>"u")return;const t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t);const n=document.createElement("script");n.innerHTML=`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${e}', { send_page_view: false });
  `,document.head.appendChild(n)}function wL(){mv(window.location.pathname+window.location.search);const e=history.pushState,t=history.replaceState;history.pushState=function(...n){const r=e.apply(this,n);return window.dispatchEvent(new Event("locationchange")),r},history.replaceState=function(...n){const r=t.apply(this,n);return window.dispatchEvent(new Event("locationchange")),r},window.addEventListener("popstate",()=>{window.dispatchEvent(new Event("locationchange"))}),window.addEventListener("locationchange",()=>{mv(window.location.pathname+window.location.search)})}xL(vL);Fw(document.getElementById("root")).render(a.jsx(gL,{}));typeof window<"u"&&wL();
