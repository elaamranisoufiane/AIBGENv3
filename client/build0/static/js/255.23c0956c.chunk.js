"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[255],{3255:function(e,t,n){n.r(t);var r=n(4165),s=n(5861),a=n(9439),l=n(2791),i=n(1243),o=n(184),c=window.location.origin,d=null;t.default=function(){var e=(0,l.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1];(0,l.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/api/getAllProductssGuest",{withCredentials:!0});case 3:t=e.sent,u(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Failed to fetch plans:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var m=(0,l.useState)(!1),h=(0,a.Z)(m,2),x=h[0],f=h[1],p=(0,l.useState)(null),g=(0,a.Z)(p,2),w=g[0],v=g[1],j=(0,l.useState)(!0),b=(0,a.Z)(j,2),y=b[0],N=b[1],k=(0,l.useState)(null),C=(0,a.Z)(k,2),Z=C[0],B=C[1],M=(0,l.useState)(null),E=(0,a.Z)(M,2),I=E[0],L=E[1];(0,l.useEffect)((function(){document.getElementById("myButton").addEventListener("click",S)}),[]);var P=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B(null),L(null);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.files[0],d=n;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,n,s,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=document.getElementById("displayResults"),d){e.next=4;break}return e.abrupt("return");case 4:return v(!0),e.prev=5,P(),(n=new FormData).append("image",d),e.next=11,i.Z.post("/upload",n,{headers:{"Content-Type":"multipart/form-data"}});case 11:200===(s=e.sent).status&&(B(c+"/uploads/"+s.data.newImageUrl),a="/uploads/"+s.data.newImageUrl,(0,i.Z)({method:"post",data:{url:a},url:"/addImage",withCredentials:!0}).then((function(e){})).catch((function(e){console.error(e)})),t.style.display="block"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error("Error uploading image:",e.t0);case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(0),console.error("Error uploading image:",e.t1);case 23:return e.prev=23,v(!1),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[0,20,23,26],[5,15]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){if(Z)try{N(!0);var e=encodeURIComponent(Z);fetch("/api/rmbg-guest?url=".concat(e)).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){N(!1),L(e.newurl),(0,i.Z)({method:"post",data:{url:e.newurl},url:"/addImage",withCredentials:!0}).then((function(e){f(!0)})).catch((function(e){console.error(e)}))})).catch((function(e){v(!1),N(!1)})),v(!1),N(!1)}catch(t){v(!1)}}),[Z]),(0,l.useEffect)((function(){if("undefined"!==typeof window){var e=document.getElementById("dropzone-file"),t=document.getElementById("imageView"),n=document.getElementById("imageContainer"),r=document.getElementById("imagePlaceFree"),s=document.getElementById("imagePlaceFilled");e&&e.addEventListener("change",(function(){var a=e.files[0];if(a){var l=new FileReader;l.onload=function(e){var a=e.target.result;r.style.display="none",s.style.display="block",t.src=a,n.style.display="block"},l.readAsDataURL(a)}}))}}));return(0,o.jsxs)("main",{className:"max-w-3/4 h-full flex  flex-col items-center min-h-screen p-2",children:[(0,o.jsxs)("div",{className:"container bg-white p-10 rounded-lg  mx-auto flex-col",children:[(0,o.jsx)("h2",{className:"text-2xl font-semibold",children:"Ai Background Removal"}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,o.jsxs)("div",{className:"w-full",children:[(0,o.jsxs)("label",{htmlFor:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ",children:[(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[(0,o.jsx)("svg",{className:"w-8 h-8 mb-4 text-gray-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16",children:(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),(0,o.jsxs)("p",{className:"mb-2 text-sm text-gray-500",children:[(0,o.jsx)("span",{className:"font-semibold",children:"Click to upload"})," or drag and drop"]}),(0,o.jsx)("p",{className:"text-xs text-gray-500",children:"SVG, PNG, JPG or GIF"})]}),(0,o.jsx)("input",{id:"dropzone-file",hidden:!0,type:"file",onChange:F,className:"hidden",name:"dropzone-file"})]}),(0,o.jsx)("div",{id:"adsDiv",className:"w-full h-auto bg-red-600",children:"put the ads here"}),w?(0,o.jsx)("button",{id:"myButton",value:"",className:"mt-4 w-full items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md hover:bg-blue-500 focus:shadow-outline focus:outline-none bg-primary-500 rounded",children:(0,o.jsxs)("svg",{"aria-hidden":"true",className:"inline w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,o.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})}):(0,o.jsx)("button",{id:"myButton",value:"",className:"mt-4 w-full  items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md hover:bg-blue-500 focus:shadow-outline focus:outline-none bg-primary-500 rounded",children:"Remove Background"})]}),(0,o.jsx)("div",{src:"",id:"imagePlaceFree",width:"100%",className:" bg-slate-100",alt:"Processed Image"}),(0,o.jsx)("div",{className:"w-full",id:"imagePlaceFilled",hidden:!0,children:(0,o.jsx)("div",{id:"imageContainer",children:(0,o.jsx)("div",{className:"flex items-center justify-center container h-80",children:(0,o.jsx)("img",{src:"",className:"h-full object-cover shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30",id:"imageView",alt:"Processed Image"})})})})]}),(0,o.jsx)("div",{id:"displayResults",className:"flex items-center justify-center",children:I?(0,o.jsxs)("div",{className:"relative group",children:[(0,o.jsx)("h1",{className:"text-2xl font-bold mt-3 text-center",children:"Removed background"}),(0,o.jsx)("div",{id:"adsDiv2",className:"w-full h-auto bg-red-600",children:"put the ads here"}),(0,o.jsx)("div",{className:"flex items-center justify-center container h-80 mt-3",children:(0,o.jsx)("img",{src:I,onContextMenu:function(e){e.preventDefault()},className:"h-full object-cover shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30",id:"imageView",alt:"Processed Image"})}),(0,o.jsx)("div",{className:"absolute bottom-0 right-0 m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}):(0,o.jsx)("div",{children:y?null:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"w-full max-w-md mx-auto",children:(0,o.jsx)("div",{className:"flex justify-center items-center h-48",children:(0,o.jsx)("div",{className:"animate-spin w-16 h-16 border-t-2 border-blue-500 rounded-full"})})})})})}),x?(0,o.jsx)("div",{id:"showLimiteMessage",className:"modal fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-80 items-center justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:(0,o.jsxs)("div",{className:"md:w-2/3 mx-auto inline-block  align-center rounded-lg overflow-hidden shadow-xl  transform transition-all sm:my-8 sm:align-middle bg-white",children:[(0,o.jsxs)("div",{className:"flex items-start justify-between p-4 border-b rounded-t border-gray-600",children:[(0,o.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:" Monthly Plans "}),(0,o.jsxs)("button",{onClick:function(){return f(!1)},id:"closeModelButton",type:"button",className:" text-gray-900 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 ",children:[(0,o.jsx)("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:(0,o.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),(0,o.jsx)("span",{className:"sr-only",children:"Close"})]})]}),(0,o.jsx)("div",{className:"justify-center w-auto sm:grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-6",children:n.slice().reverse().map((function(e){return(0,o.jsxs)("div",{className:"p-6 space-y-6 flex flex-col relative",children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{className:"text-gray-700 text-left",children:["Need more generations?  Upgrade to ",(0,o.jsx)("b",{children:e.name})," today."]}),(0,o.jsx)("div",{className:"flex flex-col",children:(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)("div",{children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),(0,o.jsx)("div",{className:"col-span-11 text-l flex font-semibold pl-2",children:(0,o.jsx)("span",{className:"font-bold",children:e.description})})]})}),(0,o.jsxs)("div",{className:"rounded w-full flex flex-col border-solid",children:[(0,o.jsx)("h3",{className:"text-3xl p-5 text-left pl-6",children:e.name}),(0,o.jsxs)("div",{className:"flex flex-row items-center pt-3 pl-6 pr-10 gap-3 pb-3 text-primary-500",children:[(0,o.jsxs)("div",{className:"flex flex-row gap-1",children:[(0,o.jsx)("span",{className:"text-base",children:"$"}),(0,o.jsx)("p",{className:"text-5xl font-semibold",children:e.price})]}),(0,o.jsx)("p",{className:"font-light text-sm",children:"/ month"})]}),(0,o.jsx)("div",{className:"pl-6 pr-10 gap-3 pb-3 text-left",children:(0,o.jsxs)("ul",{className:"text-gray-700",children:[(0,o.jsx)("li",{children:"No advertisements"}),(0,o.jsx)("li",{children:"Commercial usage of photos"}),(0,o.jsx)("li",{children:"Premium support"})]})})]})]},e.id),(0,o.jsx)("a",{className:"w-[200px] plan-btn bg-primary-500 text-white text-base font-semibold py-2 px-4 rounded-lg mt-4 absolute bottom-5",href:"/register",children:"Subscribe"})]})}))})]})}):null]}),(0,o.jsx)("style",{children:"\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n        main {\n          flex: 1;\n          display: flex;\n          flex-direction: column;\n        }\n        \n        .footer-content {\n          width: 100%;\n          border-top: 1px solid #eaeaea;\n          display: flex;\n          justify-content: space-between; \n          align-items: center; \n          color: gray;\n        }\n\n        .footer-links {\n          text-decoration: none;\n          color: gray;\n        } \n        code {\n          background: #fafafa;\n          border-radius: 5px;\n          padding: 0.75rem;\n          font-size: 1.1rem;\n          font-family:\n            Menlo,\n            Monaco,\n            Lucida Console,\n            Liberation Mono,\n            DejaVu Sans Mono,\n            Bitstream Vera Sans Mono,\n            Courier New,\n            monospace;\n        }\n      "})]})}}}]);
//# sourceMappingURL=255.23c0956c.chunk.js.map