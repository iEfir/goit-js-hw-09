const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");function n(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}let o=setInterval(n,1e3);function d(){document.body.style.backgroundColor=n()}t.addEventListener("click",(function(){o=setInterval(d,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.b88400bd.js.map
