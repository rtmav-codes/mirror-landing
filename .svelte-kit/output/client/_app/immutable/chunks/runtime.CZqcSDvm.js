var xn=Array.isArray,Nn=Array.from,kn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Cn=Object.prototype,bn=Array.prototype,Zt=Object.getPrototypeOf;function Pn(t){return typeof t=="function"}const Fn=()=>{};function Ln(t){return t()}function zt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,dt=4,Y=8,lt=16,T=32,z=64,tt=128,D=256,G=512,h=1024,I=2048,j=4096,k=8192,b=16384,Wt=32768,Et=65536,qn=1<<17,Xt=1<<19,yt=1<<20,ct=Symbol("$state"),Mn=Symbol("legacy props"),Hn=Symbol("");function wt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Yn(){throw new Error("https://svelte.dev/e/hydration_failed")}function jn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Un(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function Vn(){W=!0}const Gn=1,Kn=2,$n=4,Zn=8,zn=16,Wn=1,Xn=2,Jn=4,Qn=8,tr=16,nr=4,rr=1,er=2,ln="[",an="[!",on="]",mt={},sr=Symbol();function at(t,n){var r={f:0,v:t,reactions:null,equals:wt,version:0};return r}function lr(t){return At(at(t))}function un(t,n=!1){var e;const r=at(t);return n||(r.equals=Tt),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function ar(t,n=!1){return At(un(t,n))}function At(t){return u!==null&&u.f&y&&(w===null?mn([t]):w.push(t)),t}function or(t,n){return u!==null&&it()&&u.f&(y|lt)&&(w===null||!w.includes(t))&&sn(),fn(t,n)}function fn(t,n){return t.equals(n)||(t.v=n,t.version=jt(),gt(t,I),it()&&o!==null&&o.f&h&&!(o.f&T)&&(v!==null&&v.includes(t)?(m(o,I),Q(o)):g===null?An([t]):g.push(t))),n}function gt(t,n){var r=t.reactions;if(r!==null)for(var e=it(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&I||!e&&a===o||(m(a,n),i&(h|D)&&(i&y?gt(a,j):Q(a)))}}function It(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function ur(t){C=t}let A;function L(t){if(t===null)throw It(),mt;return A=t}function ir(){return L(P(A))}function fr(t){if(C){if(P(A)!==null)throw It(),mt;A=t}}function _r(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===ln||r===an)&&(t+=1)}var e=P(n);n.remove(),n=e}}var vt,Rt,St;function cr(){if(vt===void 0){vt=window;var t=Element.prototype,n=Node.prototype;Rt=_t(n,"firstChild").get,St=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Rt.call(t)}function P(t){return St.call(t)}function vr(t,n){if(!C)return rt(t);var r=rt(A);if(r===null)r=A.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),L(e),e}return L(r),r}function pr(t,n){if(!C){var r=rt(t);return r instanceof Comment&&r.data===""?P(r):r}return A}function hr(t,n=1,r=!1){let e=C?A:t;for(var s;n--;)s=e,e=P(e);if(!C)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=nt();return e===null?s==null||s.after(a):e.before(a),L(a),a}return L(e),e}function dr(t){t.textContent=""}function _n(t){var n=y|I;o===null?n|=D:o.f|=yt;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:f,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??o};return r!==null&&(r.children??(r.children=[])).push(e),e}function Er(t){const n=_n(t);return n.equals=Tt,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ot(e):O(e)}}}function cn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Dt(t){var n,r=o;Z(cn(t));try{Ot(t),n=Bt(t)}finally{Z(r)}return n}function xt(t){var n=Dt(t),r=(S||t.f&D)&&t.deps!==null?j:h;m(t,r),t.equals(n)||(t.v=n,t.version=jt())}function ot(t){Ot(t),H(t,0),m(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){o===null&&u===null&&nn(),u!==null&&u.f&D&&tn(),ut&&Qt()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&z)!==0,l=o,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=x;try{pt(!0),J(a),a.f|=Wt}catch(_){throw O(a),_}finally{pt(i)}}else n!==null&&Q(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&yt)===0;if(!p&&!s&&e&&(l!==null&&vn(a,l),u!==null&&u.f&y)){var d=u;(d.children??(d.children=[])).push(a)}return a}function yr(t){const n=F(Y,null,!1);return m(n,h),n.teardown=t,n}function wr(t){Nt();var n=o!==null&&(o.f&T)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=kt(t);return e}}function Tr(t){return Nt(),pn(t)}function mr(t){const n=F(z,t,!0);return(r={})=>new Promise(e=>{r.outro?En(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function kt(t){return F(dt,t,!1)}function pn(t){return F(Y,t,!0)}function Ar(t){return hn(t)}function hn(t,n=0){return F(Y|lt|n,t,!0)}function gr(t,n=!0){return F(Y|T,t,!0,n)}function Ct(t){var n=t.teardown;if(n!==null){const r=ut,e=u;ht(!0),$(null);try{n.call(null)}finally{ht(r),$(e)}}}function bt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ot(n[r])}}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function dn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:P(e);e.remove(),e=l}r=!0}Pt(t,n&&!r),bt(t),H(t,0),m(t,b);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Ct(t);var i=t.parent;i!==null&&i.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function En(t,n){var r=[];Lt(t,r,!0),yn(r,()=>{O(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Lt(t,n,r){if(!(t.f&k)){if(t.f^=k,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&Et)!==0||(e.f&T)!==0;Lt(e,n,l?r:!1),e=s}}}function Ir(t){qt(t,!0)}function qt(t,n){if(t.f&k){B(t)&&J(t),t.f^=k;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Et)!==0||(r.f&T)!==0;qt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let K=!1,et=[];function Mt(){K=!1;const t=et.slice();et=[],zt(t)}function Rr(t){K||(K=!0,queueMicrotask(Mt)),et.push(t)}function wn(){K&&Mt()}const Ht=0,Tn=1;let U=!1,V=Ht,q=!1,M=null,x=!1,ut=!1;function pt(t){x=t}function ht(t){ut=t}let R=[],N=0;let u=null;function $(t){u=t}let o=null;function Z(t){o=t}let w=null;function mn(t){w=t}let v=null,E=0,g=null;function An(t){g=t}let Yt=1,S=!1,f=null;function jt(){return++Yt}function it(){return!W||f!==null&&f.l===null}function B(t){var a,i;var n=t.f;if(n&I)return!0;if(n&j){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&G){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=G}for(s=0;s<r.length;s++){var l=r[s];if(B(l)&&xt(l),e&&o!==null&&!S&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}(!e||o!==null&&!S)&&m(t,h)}return!1}function gn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw U=!1,t}function In(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&tt)===0)}function X(t,n,r,e){if(U){if(r===null&&(U=!1),In(n))throw t;return}r!==null&&(U=!0);{gn(t,n);return}}function Bt(t){var ft;var n=v,r=E,e=g,s=u,l=S,a=w,i=f,p=t.f;v=null,E=0,g=null,u=p&(T|z)?null:t,S=!x&&(p&D)!==0,w=null,f=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(H(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!S)for(c=E;c<_.length;c++)((ft=_[c]).reactions??(ft.reactions=[])).push(t)}else _!==null&&E<_.length&&(H(t,E),_.length=E);return d}finally{v=n,E=r,g=e,u=s,S=l,w=a,f=i}}function Rn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(m(n,j),n.f&(D|G)||(n.f^=G),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Rn(t,r[e])}function J(t){var n=t.f;if(!(n&b)){m(t,h);var r=o,e=f;o=t;try{n&lt?dn(t):Pt(t),bt(t),Ct(t);var s=Bt(t);t.teardown=typeof s=="function"?s:null,t.version=Yt}catch(l){X(l,t,r,e||t.ctx)}finally{o=r}}}function Ut(){if(N>1e3){N=0;try{rn()}catch(t){if(M!==null)X(t,M,null);else throw t}}N++}function Vt(t){var n=t.length;if(n!==0){Ut();var r=x;x=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Gt(s,l),Sn(l)}}finally{x=r}}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(b|k)))try{B(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function On(){if(q=!1,N>1001)return;const t=R;R=[],Vt(t),q||(N=0,M=null)}function Q(t){V===Ht&&(q||(q=!0,queueMicrotask(On))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|T)){if(!(r&h))return;n.f^=h}}R.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&T)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&k))if(s&Y){if(l)r.f^=h;else try{B(r)&&J(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&dt&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Gt(p,n)}function Kt(t){var n=V,r=R;try{Ut();const s=[];V=Tn,R=s,q=!1,Vt(r);var e=t==null?void 0:t();return wn(),(R.length>0||s.length>0)&&Kt(),N=0,M=null,e}finally{V=n,R=r}}async function Sr(){await Promise.resolve(),Kt()}function Or(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&b){var e=Dt(t);return ot(t),e}if(u!==null){w!==null&&w.includes(t)&&en();var s=u.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),g!==null&&o!==null&&o.f&h&&!(o.f&T)&&g.includes(t)&&(m(o,I),Q(o))}else if(r&&t.deps===null)for(var l=t,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=t,B(l)&&xt(l)),t.v}function Dr(t){const n=u;try{return u=null,t()}finally{u=n}}const Dn=~(I|j|h);function m(t,n){t.f=t.f&Dn|n}function xr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(f.l={s:null,u:null,r1:[],r2:at(!1)})}function Nr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];Z(l.effect),$(l.reaction),kt(l.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{_t as $,Z as A,xn as B,u as C,o as D,Et as E,cr as F,rt as G,ln as H,P as I,mt as J,ur as K,L,ir as M,on as N,It as O,Yn as P,dr as Q,Nn as R,mr as S,nt as T,ct as U,Cn as V,bn as W,at as X,Bn as Y,or as Z,sr as _,Dr as a,Un as a0,Zt as a1,an as a2,_r as a3,Ir as a4,En as a5,jn as a6,qn as a7,Jn as a8,Tt as a9,zn as aA,Hn as aB,$t as aC,lt as aD,Wt as aE,Pn as aF,nr as aG,ar as aH,Jt as aI,T as aa,z as ab,Wn as ac,Xn as ad,Qn as ae,Mn as af,Er as ag,tr as ah,un as ai,rr as aj,er as ak,kt as al,pn as am,Rr as an,Kt as ao,Sr as ap,lr as aq,yr as ar,k as as,fn as at,Lt as au,yn as av,Gn as aw,Kn as ax,$n as ay,Zn as az,Tr as b,f as c,zt as d,kr as e,_n as f,Or as g,Vn as h,hn as i,gr as j,O as k,W as l,C as m,Fn as n,A as o,xr as p,pr as q,Ln as r,Nr as s,Ar as t,wr as u,vr as v,fr as w,hr as x,kn as y,$ as z};