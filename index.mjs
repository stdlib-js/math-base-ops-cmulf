// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@esm/index.mjs";var r=t,m=e,n=s;var o=function(t,e){var s=m(t),o=m(e),i=n(t),d=n(e),l=r(s*o)-r(i*d),a=r(s*d)+r(i*o);return new t.constructor(r(l),r(a))};export{o as default};
//# sourceMappingURL=index.mjs.map
