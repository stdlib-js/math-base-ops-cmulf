"use strict";var q=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var f=q(function(w,s){
var e=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/complex-float32/dist'),m=require('@stdlib/complex-realf/dist'),o=require('@stdlib/complex-imagf/dist');function p(a,r){var i=m(a),v=m(r),t=o(a),u=o(r),l=e(i*v)-e(t*u),n=e(i*u)+e(t*v);return new c(e(l),e(n))}s.exports=p
});var x=f();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
