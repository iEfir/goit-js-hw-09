var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("7Y9D8");const i=document.querySelector(".form");function l(e,t){const r=Math.random()>.3;return new Promise(((n,o)=>{setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault();let t=e.currentTarget.delay.valueAsNumber;const r=e.currentTarget.step.valueAsNumber,n=e.currentTarget.amount.valueAsNumber;for(let e=1;e<=n;e++)l(e,t).then((({position:e,delay:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),t+=r;i.reset()}));
//# sourceMappingURL=03-promises.9378533c.js.map
