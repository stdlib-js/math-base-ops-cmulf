// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@v0.0.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@v0.1.0-esm/index.mjs";function o(o,r){var i=s(o),l=s(r),d=m(o),n=m(r),j=t(i*l)-t(d*n),p=t(i*n)+t(d*l);return new e(t(j),t(p))}export{o as default};
//# sourceMappingURL=index.mjs.map
