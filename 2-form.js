import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form"),o=t.elements.email,r=t.elements.message,l={email:"",message:""};try{o.value=JSON.parse(localStorage.getItem("feedback-form-state")).email??"",r.value=JSON.parse(localStorage.getItem("feedback-form-state")).message??""}catch{localStorage.setItem("feedback-form-state",JSON.stringify(l))}t.addEventListener("input",s);function s(e){const a=JSON.parse(localStorage.getItem("feedback-form-state"));JSON.parse(localStorage.getItem("feedback-form-state")),a[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(a))}t.addEventListener("submit",m);function m(e){if(e.preventDefault(),o.value===""||r.value==="")return alert("Fill please all fields");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),t.reset(),localStorage.removeItem("feedback-form-state")}
//# sourceMappingURL=2-form.js.map
