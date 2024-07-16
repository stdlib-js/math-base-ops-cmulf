// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@v0.0.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@v0.2.1-esm/index.mjs";function r(r,i){var o=s(r),d=s(i),n=m(r),l=m(i),j=t(o*d)-t(n*l),p=t(o*l)+t(n*d);return new e(t(j),t(p))}export{r as default};
//# sourceMappingURL=index.mjs.map
