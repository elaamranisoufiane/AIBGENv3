"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[345],{5081:function(e,t,n){var r=n(9439),s=n(2791),a=n(184);t.Z=function(e){var t=e.imageUrl,n=e.fileName,i=(0,s.useState)(!1),l=(0,r.Z)(i,2),o=l[0],c=l[1];return(0,a.jsxs)("div",{onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1)},className:"cursor-pointer",children:[o&&(0,a.jsx)("div",{className:"absolute right-0 text-gray-900  bg-slate-50 opacity-60 hover:opacity-90 w-20 mr-12 mt-2 origin-top-right divide-y divide-gray-100 rounded-md",children:"Download"}),(0,a.jsx)("button",{onClick:function(){var e=document.createElement("a");e.href=t,e.download=n||"downloaded_image.png",e.click()},className:" text-white flex items-center px-3 py-2 rounded-md mt-2 focus:outline-none bg-slate-50 opacity-50 hover:opacity-100",children:(0,a.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,a.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,a.jsx)("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z",fill:"#1C274C"})," ",(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z",fill:"#1C274C"})," "]})]})})]})}},6345:function(e,t,n){n.a(e,(async function(e,r){try{n.r(t);var s=n(9439),a=n(4165),i=n(5861),l=n(2791),o=n(1243),c=n(5081),d=n(2426),u=n.n(d),m=n(184),h=window.location.origin,f=null,x=null,p=null,g=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/incrementAttempt",{withCredentials:!0});case 3:return t=e.sent,n=JSON.stringify(t.data),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Attempt number Check failed:",e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/descrementCredits",{withCredentials:!0});case 3:return t=e.sent,n=JSON.stringify(t.data),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Credit desc failed:",e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/getUser",{withCredentials:!0});case 3:return t=e.sent,JSON.stringify(t.data),e.abrupt("return",t.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Login failed:",e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),b=await w().then((function(e){return e.id})),j=await w().then((function(e){return e.role})),y=await w().then((function(e){return e.currentPeriodEnd&&u()(e.currentPeriodEnd)>Date.now()}));t.default=function(){var e=(0,l.useState)([]),t=(0,s.Z)(e,2),n=t[0],r=t[1],d=(0,l.useState)([]),u=(0,s.Z)(d,2),w=u[0],C=u[1];(0,l.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/api/getAllProductss",{withCredentials:!0});case 3:t=e.sent,r(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Failed to fetch plans:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/api/getAllProductsspayment",{withCredentials:!0});case 3:t=e.sent,C(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Failed to fetch plans payment:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var N=(0,l.useState)(!1),k=(0,s.Z)(N,2),Z=k[0],L=k[1],E=(0,l.useState)(null),M=(0,s.Z)(E,2),S=M[0],B=M[1],I=(0,l.useState)(!0),P=(0,s.Z)(I,2),R=P[0],U=P[1],V=(0,l.useState)(null),F=(0,s.Z)(V,2),A=F[0],_=F[1],z=(0,l.useState)(null),D=(0,s.Z)(z,2),G=D[0],O=D[1],J=(0,l.useState)(null),W=(0,s.Z)(J,2),H=W[0],$=W[1],T=(0,l.useState)(null),q=(0,s.Z)(T,2),K=q[0],Q=q[1];(0,l.useEffect)((function(){document.getElementById("myButton").addEventListener("click",ee)}),[]);var X=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(null),O(null);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){(0,o.Z)({method:"get",withCredentials:!0,url:"/checkNumberOfAttempt"}).then((function(e){$(e.data)})).catch((function(e){return console.log(e)}))}),[]),(0,l.useEffect)((function(){(0,o.Z)({method:"get",withCredentials:!0,url:"/checkSubscribe"}).then((function(e){var t=JSON.stringify(e.data);Q(t),x=t})).catch((function(e){return console.log(e)}))})),(0,l.useEffect)((function(){(0,o.Z)({method:"get",withCredentials:!0,url:"/getUserCredits"}).then((function(e){p=e.data.credits})).catch((function(e){return console.error(e)}))}),[]);var Y=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.files[0],f=n;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n,r,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,H="true"===x&&p>0||p>0){e.next=7;break}B(!1),L(!0),e.next=25;break;case 7:if(!H){e.next=25;break}if(t=document.getElementById("displayResults"),f){e.next=11;break}return e.abrupt("return");case 11:return B(!0),e.prev=12,X(),(n=new FormData).append("image",f),e.next=18,o.Z.post("/upload",n,{headers:{"Content-Type":"multipart/form-data"}});case 18:200===(r=e.sent).status&&(_(h+"/uploads/"+r.data.newImageUrl),s="/uploads/"+r.data.newImageUrl,(0,o.Z)({method:"post",data:{url:s,id_user:b},url:"/addImage",withCredentials:!0}).then((function(e){})).catch((function(e){console.error(e)})),t.style.display="block"),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(12),console.error("Error uploading image:",e.t0);case 25:e.next=30;break;case 27:e.prev=27,e.t1=e.catch(0),console.error("Error uploading image:",e.t1);case 30:return e.prev=30,B(!1),e.finish(30);case 33:case"end":return e.stop()}}),e,null,[[0,27,30,33],[12,22]])})));return function(){return e.apply(this,arguments)}}();if((0,l.useEffect)((function(){if((H="true"===x&&p>0||p>0)&&K&&A)try{U(!0);var e=encodeURIComponent(A);fetch("/api/rmbg?url=".concat(e,"&gen=").concat(null,"&rm=").concat(null)).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!1),"true"===K?(0,o.Z)({method:"post",data:{imageURL:t.newurl},url:"/downloadImage",withCredentials:!0}).then((function(e){var t=e.data.newImageUrl;O(t),(0,o.Z)({method:"post",data:{url:t,id_user:b},url:"/addImage",withCredentials:!0}).then((function(e){})).catch((function(e){console.error(e)}))})).catch((function(e){return console.log(e)})):(O(t.newurl),(0,o.Z)({method:"post",data:{url:t.newurl,id_user:b},url:"/addImage",withCredentials:!0}).then((function(e){})).catch((function(e){console.error(e)}))),(0,o.Z)({method:"get",withCredentials:!0,url:"/checkSubscribe"}).then((function(e){var t=JSON.stringify(e.data);Q(t)})).catch((function(e){return console.log(e)})),e.next=5,g();case 5:return e.next=7,v();case 7:(0,o.Z)({method:"get",withCredentials:!0,url:"/checkNumberOfAttempt"}).then((function(e){$(e.data)})).catch((function(e){return console.log(e)})),(0,o.Z)({method:"get",withCredentials:!0,url:"/getUserCredits"}).then((function(e){p=e.data.credits})).catch((function(e){return console.log(e)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error("Error:",e),B(!1),U(!1)})),B(!1),U(!1)}catch(t){console.error("Error creating object URL:",t),B(!1)}}),[A]),"undefined"!==typeof window){var te=document.getElementById("dropzone-file"),ne=document.getElementById("imageView"),re=document.getElementById("imageContainer"),se=document.getElementById("imagePlaceFree"),ae=document.getElementById("imagePlaceFilled");te&&te.addEventListener("change",(function(){var e=te.files[0];if(e){var t=new FileReader;t.onload=function(e){var t=e.target.result;se.style.display="none",ae.style.display="block",ne.src=t,re.style.display="block"},t.readAsDataURL(e)}}))}return(0,m.jsxs)("main",{className:"max-w-3/4 h-full flex  flex-col items-center min-h-screen p-2",children:[(0,m.jsxs)("div",{className:"container bg-white p-10 rounded-lg  mx-auto flex-col",children:[(0,m.jsx)("h2",{className:"text-2xl font-semibold",children:"Ai Background Removal "}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,m.jsxs)("div",{className:"w-full",children:[(0,m.jsxs)("label",{htmlFor:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ",children:[(0,m.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[(0,m.jsx)("svg",{className:"w-8 h-8 mb-4 text-gray-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16",children:(0,m.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),(0,m.jsxs)("p",{className:"mb-2 text-sm text-gray-500",children:[(0,m.jsx)("span",{className:"font-semibold",children:"Click to upload"})," or drag and drop"]}),(0,m.jsx)("p",{className:"text-xs text-gray-500",children:"SVG, PNG, JPG or GIF"})]}),(0,m.jsx)("input",{id:"dropzone-file",hidden:!0,type:"file",onChange:Y,className:"hidden",name:"dropzone-file"})]}),x&&"true"!==x?(0,m.jsx)("div",{id:"adsDiv1",className:"w-full h-auto bg-red-600",children:"put the ads here"}):null,S?(0,m.jsx)("button",{id:"myButton",value:"",className:"mt-4 w-full items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md hover:bg-blue-500 focus:shadow-outline focus:outline-none bg-primary-500 rounded",children:(0,m.jsxs)("svg",{"aria-hidden":"true",className:"inline w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,m.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})}):(0,m.jsx)("button",{id:"myButton",value:"",className:"mt-4 w-full  items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md hover:bg-blue-500 focus:shadow-outline focus:outline-none bg-primary-500 rounded",children:"Remove Background"})]}),(0,m.jsx)("div",{src:"",id:"imagePlaceFree",width:"100%",className:" bg-slate-100",alt:"Processed Image"}),(0,m.jsx)("div",{className:"w-full",id:"imagePlaceFilled",hidden:!0,children:(0,m.jsx)("div",{id:"imageContainer",children:(0,m.jsx)("div",{className:"flex items-center justify-center container h-80",children:(0,m.jsx)("img",{src:"",className:"h-full object-cover shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30",id:"imageView",alt:"Processed Image"})})})})]}),(0,m.jsx)("div",{id:"displayResults",className:"flex items-center justify-center",children:G?(0,m.jsxs)("div",{className:"relative group",children:[(0,m.jsx)("h1",{className:"text-2xl font-bold mt-3 text-center",children:"Removed background"}),x&&"true"!==x?(0,m.jsx)("div",{id:"adsDiv2",className:"w-full h-auto bg-red-600",children:"put the ads here"}):null,(0,m.jsxs)("div",{className:"flex items-center justify-center container h-80 mt-3",children:[(0,m.jsx)("img",{src:G,className:"h-full object-cover shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30",id:"imageView",alt:"Processed Image"}),(0,m.jsx)("div",{className:"absolute bottom-0 right-0 m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:(0,m.jsx)(c.Z,{className:"bg-blue-500 text-white flex items-center px-3 py-2 rounded-md mt-2 focus:outline-none",imageUrl:G,fileName:"AIBgen_Image.png"})})]})]}):(0,m.jsx)("div",{children:R?null:(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"w-full max-w-md mx-auto",children:(0,m.jsx)("div",{className:"flex justify-center items-center h-48",children:(0,m.jsx)("div",{className:"animate-spin w-16 h-16 border-t-2 border-blue-500 rounded-full"})})})})})}),Z&&"admin"!=j&&!y?(0,m.jsx)("div",{id:"showLimiteMessage",className:"modal fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-80 items-center justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:(0,m.jsxs)("div",{className:"md:w-2/3 mx-auto inline-block  align-center rounded-lg overflow-hidden shadow-xl  transform transition-all sm:my-8 sm:align-middle bg-white",children:[(0,m.jsxs)("div",{className:"flex items-start justify-between p-4 border-b rounded-t border-gray-600",children:[(0,m.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:" Monthly Plans "}),(0,m.jsxs)("button",{onClick:function(){return L(!1)},id:"closeModelButton",type:"button",className:" text-gray-900 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 ",children:[(0,m.jsx)("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:(0,m.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),(0,m.jsx)("span",{className:"sr-only",children:"Close"})]})]}),(0,m.jsx)("div",{className:"justify-center w-auto sm:grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-6",children:n.slice().reverse().map((function(e){return(0,m.jsxs)("div",{className:"p-6 space-y-6 flex flex-col relative",children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("p",{className:"text-gray-700 text-left",children:["Need more generations?  Upgrade to ",(0,m.jsx)("b",{children:e.name})," today."]}),(0,m.jsx)("div",{className:"flex flex-col",children:(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("div",{children:(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),(0,m.jsx)("div",{className:"col-span-11 text-l flex font-semibold pl-2",children:(0,m.jsx)("span",{className:"font-bold",children:e.description})})]})}),(0,m.jsxs)("div",{className:"rounded w-full flex flex-col border-solid",children:[(0,m.jsx)("h3",{className:"text-3xl p-5 text-left pl-6",children:e.name}),(0,m.jsxs)("div",{className:"flex flex-row items-center pt-3 pl-6 pr-10 gap-3 pb-3 text-primary-500",children:[(0,m.jsxs)("div",{className:"flex flex-row gap-1",children:[(0,m.jsx)("span",{className:"text-base",children:"$"}),(0,m.jsx)("p",{className:"text-5xl font-semibold",children:e.price})]}),(0,m.jsx)("p",{className:"font-light text-sm",children:"/ month"})]}),(0,m.jsx)("div",{className:"pl-6 pr-10 gap-3 pb-3 text-left",children:(0,m.jsxs)("ul",{className:"text-gray-700",children:[(0,m.jsx)("li",{children:"No advertisements"}),(0,m.jsx)("li",{children:"Commercial usage of photos"}),(0,m.jsx)("li",{children:"Premium support"})]})})]})]},e.id),(0,m.jsx)("a",{className:"w-[200px] plan-btn bg-primary-500 text-white text-base font-semibold py-2 px-4 rounded-lg mt-4 absolute bottom-5",href:e.checkoutUrl,children:"Subscribe"})]})}))})]})}):null,Z&&"admin"!=j&&y?(0,m.jsx)("div",{id:"showLimiteMessage",className:"modal fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-80 items-center justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:(0,m.jsxs)("div",{className:"md:w-2/3 mx-auto inline-block  align-center rounded-lg overflow-hidden shadow-xl  transform transition-all sm:my-8 sm:align-middle bg-white",children:[(0,m.jsxs)("div",{className:"flex items-start justify-between p-4 border-b rounded-t border-gray-600",children:[(0,m.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:" Add-on Plans "}),(0,m.jsxs)("button",{onClick:function(){return L(!1)},id:"closeModelButton",type:"button",className:" text-gray-900 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 ",children:[(0,m.jsx)("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:(0,m.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),(0,m.jsx)("span",{className:"sr-only",children:"Close"})]})]}),(0,m.jsx)("div",{className:"justify-center w-auto sm:grid sm:grid-cols-1 md:grid-cols-3 gap-4 p-6",children:w.slice().reverse().map((function(e){return(0,m.jsxs)("div",{className:"p-6 space-y-6 flex flex-col relative",children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("p",{className:"text-gray-700 text-left",children:["Want to buy more credits? Upgrade to ",(0,m.jsx)("b",{children:e.name})," today."]}),(0,m.jsx)("div",{className:"flex flex-col",children:(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("div",{children:(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),(0,m.jsx)("div",{className:"col-span-11 text-l flex font-semibold pl-2",children:(0,m.jsx)("span",{className:"font-bold",children:e.description})})]})}),(0,m.jsxs)("div",{className:"rounded w-full flex flex-col border-solid",children:[(0,m.jsx)("h3",{className:"text-3xl p-5 text-left pl-6",children:e.name}),(0,m.jsxs)("div",{className:"flex flex-row items-center pt-3 pl-6 pr-10 gap-3 pb-3 text-primary-500",children:[(0,m.jsxs)("div",{className:"flex flex-row gap-1",children:[(0,m.jsx)("span",{className:"text-base",children:"$"}),(0,m.jsx)("p",{className:"text-5xl font-semibold",children:e.price})]}),(0,m.jsx)("p",{className:"font-light text-sm",children:"/ month"})]}),(0,m.jsx)("div",{className:"pl-6 pr-10 gap-3 pb-3 text-left",children:(0,m.jsxs)("ul",{className:"text-gray-700",children:[(0,m.jsx)("li",{children:"No advertisements"}),(0,m.jsx)("li",{children:"Commercial usage of photos"}),(0,m.jsx)("li",{children:"Premium support"})]})})]})]},e.id),(0,m.jsx)("a",{className:"w-[200px] plan-btn bg-primary-500 text-white text-base font-semibold py-2 px-4 rounded-lg mt-4 absolute bottom-5",href:e.checkoutUrl,children:"Subscribe"})]})}))})]})}):null]}),(0,m.jsx)("style",{children:"\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n        main {\n          flex: 1;\n          display: flex;\n          flex-direction: column;\n        }\n        \n        .footer-content {\n          width: 100%;\n          border-top: 1px solid #eaeaea;\n          display: flex;\n          justify-content: space-between; \n          align-items: center; \n          color: gray;\n        }\n\n        .footer-links {\n          text-decoration: none;\n          color: gray;\n        } \n        code {\n          background: #fafafa;\n          border-radius: 5px;\n          padding: 0.75rem;\n          font-size: 1.1rem;\n          font-family:\n            Menlo,\n            Monaco,\n            Lucida Console,\n            Liberation Mono,\n            DejaVu Sans Mono,\n            Bitstream Vera Sans Mono,\n            Courier New,\n            monospace;\n        }\n      "})]})},r()}catch(C){r(C)}}),1)}}]);
//# sourceMappingURL=345.ad1e6d59.chunk.js.map