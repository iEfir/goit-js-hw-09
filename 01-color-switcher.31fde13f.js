!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");function n(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var a=setInterval(n,1e3);function o(){document.body.style.backgroundColor=n()}t.addEventListener("click",(function(){a=setInterval(o,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.31fde13f.js.map