import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const c=document.querySelector("form");c.addEventListener("submit",a);function a(i){i.preventDefault();const r=document.querySelector("input[name='delay']"),t=parseInt(r.value),n=document.getElementsByName("state");let o;for(const e of n)if(e.checked){o=e.value;break}new Promise((e,m)=>{setTimeout(()=>{o==="fulfilled"?e(t):m(t)},t)}).then(e=>{s.success({title:"",message:`✅ Fulfilled promise in ${e}ms`,position:"center"})}).catch(e=>{s.error({title:"",message:`❌ Rejected promise in ${e}ms`,position:"center"})})}
//# sourceMappingURL=commonHelpers2.js.map
