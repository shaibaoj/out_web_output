import{P as o,Q as m,S as P,T as s,U as d,V as f,W as v,X as T,Y as b}from"./index.fe592241.js";function p(n){return n}function x(n,e,r){switch(r.length){case 0:return n.call(e);case 1:return n.call(e,r[0]);case 2:return n.call(e,r[0],r[1]);case 3:return n.call(e,r[0],r[1],r[2])}return n.apply(e,r)}var O=800,A=16,I=Date.now;function E(n){var e=0,r=0;return function(){var i=I(),t=A-(i-r);if(r=i,t>0){if(++e>=O)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function $(n){return function(){return n}}var k=o?function(n,e){return o(n,"toString",{configurable:!0,enumerable:!1,value:$(e),writable:!0})}:p;const N=k;var _=E(N);const C=_;var c=Math.max;function F(n,e,r){return e=c(e===void 0?n.length-1:e,0),function(){for(var i=arguments,t=-1,a=c(i.length-e,0),u=Array(a);++t<a;)u[t]=i[e+t];t=-1;for(var l=Array(e+1);++t<e;)l[t]=i[t];return l[e]=r(u),x(n,this,l)}}var G=9007199254740991;function H(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=G}var M="[object Arguments]";function g(n){return m(n)&&P(n)==M}var w=Object.prototype,R=w.hasOwnProperty,L=w.propertyIsEnumerable,U=g(function(){return arguments}())?g:function(n){return m(n)&&R.call(n,"callee")&&!L.call(n,"callee")};const y=U;function X(n,e){e=s(e,n);for(var r=0,i=e.length;n!=null&&r<i;)n=n[d(e[r++])];return r&&r==i?n:void 0}function B(n,e){for(var r=-1,i=e.length,t=n.length;++r<i;)n[t+r]=e[r];return n}var h=f?f.isConcatSpreadable:void 0;function D(n){return v(n)||y(n)||!!(h&&n&&n[h])}function S(n,e,r,i,t){var a=-1,u=n.length;for(r||(r=D),t||(t=[]);++a<u;){var l=n[a];e>0&&r(l)?e>1?S(l,e-1,r,i,t):B(t,l):i||(t[t.length]=l)}return t}function K(n){var e=n==null?0:n.length;return e?S(n,1):[]}function Q(n){return C(F(n,void 0,K),n+"")}function V(n,e){return n!=null&&e in Object(n)}function W(n,e,r){e=s(e,n);for(var i=-1,t=e.length,a=!1;++i<t;){var u=d(e[i]);if(!(a=n!=null&&r(n,u)))break;n=n[u]}return a||++i!=t?a:(t=n==null?0:n.length,!!t&&H(t)&&T(u,t)&&(v(n)||y(n)))}function Y(n,e){return n!=null&&W(n,e,V)}function q(n,e,r){for(var i=-1,t=e.length,a={};++i<t;){var u=e[i],l=X(n,u);r(l,u)&&b(a,s(u,n),l)}return a}function z(n,e){return q(n,e,function(r,i){return Y(n,i)})}var J=Q(function(n,e){return n==null?{}:z(n,e)});const j=J;export{y as a,H as i,j as p};