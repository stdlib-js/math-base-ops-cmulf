// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@esm/index.mjs";function r(r,m){var n=e(r),o=e(m),i=s(r),d=s(m),l=t(n*o)-t(i*d),j=t(n*d)+t(i*o);return new r.constructor(t(l),t(j))}export{r as default};
//# sourceMappingURL=index.mjs.map
