import{u as i,a as l,z as t,j as s,F as c,b as m}from"./index-CY0hWspf.js";const g="_container_opzj6_1",d={container:g},u=()=>{const{setAuth:o}=i(),[e]=l("global"),a=[{name:"email",label:"Email",type:"email"},{name:"password",label:e("logIn.password"),type:"password"}],n=t.object({email:t.string().email(e("logIn.email-error-msg")),password:t.string().regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,e("logIn.pass-error-msg"))}),r=()=>{o(!0),localStorage.setItem("auth","true"),m("/")};return s.jsx("div",{className:d.container,children:s.jsx("div",{children:s.jsx(c,{fields:a,schema:n,onSubmit:r,title:e("logIn.title"),titleButton:"Login"})})})};export{u as default};
