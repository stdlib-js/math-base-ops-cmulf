// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@v0.2.0-esm/index.mjs";function i(i,r){var d=s(i),n=s(r),o=m(i),l=m(r),j=t(d*n)-t(o*l),p=t(d*l)+t(o*n);return new e(t(j),t(p))}export{i as default};
//# sourceMappingURL=index.mjs.map
