"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[535],{9535:function(e,n,t){t.a(e,(async function(e,r){try{t.r(n);var s=t(9439),a=t(4165),l=t(5861),i=t(2791),o=t(1243),d=t(184),c=window.location.origin,u=null,m=null,h=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/api/getAllProductssGuest",{withCredentials:!0});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("Fetching plans failed:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),x=await h().then((function(e){return e}));n.default=function(){var e=(0,i.useState)(!1),n=(0,s.Z)(e,2),t=n[0],r=n[1],h=(0,i.useState)(null),f=(0,s.Z)(h,2),p=f[0],g=f[1],v=(0,i.useState)(!0),w=(0,s.Z)(v,2),j=w[0],b=w[1],y=(0,i.useState)(null),N=(0,s.Z)(y,2),C=N[0],k=N[1],I=(0,i.useState)(null),Z=(0,s.Z)(I,2),B=Z[0],E=Z[1],M=(0,i.useState)(""),P=(0,s.Z)(M,2),L=P[0],F=P[1],S=(0,i.useState)(""),D=(0,s.Z)(S,2),U=D[0],G=D[1],R=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(null),E(null);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){document.getElementById("myButton").addEventListener("click",V)}),[]);(0,i.useEffect)((function(){u=!L.trim()}));var V=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var n,t,r,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!u){e.next=6;break}return G("The Description is required."),e.abrupt("return");case 6:G("");case 7:if(n=document.getElementById("displayResults"),m){e.next=10;break}return e.abrupt("return");case 10:return g(!0),e.prev=11,R(),(t=new FormData).append("image",m),e.next=17,o.Z.post("/upload",t,{headers:{"Content-Type":"multipart/form-data"}});case 17:200===(r=e.sent).status&&(k(c+"/uploads/"+r.data.newImageUrl),s="/uploads/"+r.data.newImageUrl,(0,o.Z)({method:"post",data:{url:s},url:"/addImage",withCredentials:!0}).catch((function(e){console.error(e)})),n.style.display="block"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(11),console.error("Error uploading image:",e.t0);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(0),console.error("Error uploading image:",e.t1);case 29:return e.prev=29,g(!1),e.finish(29);case 32:case"end":return e.stop()}}),e,null,[[0,26,29,32],[11,21]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){if(C)try{b(!0);var e,n,t=encodeURIComponent(C);null!=document.getElementById("numberImages")&&(e=document.getElementById("numberImages").value);var s=document.getElementById("desc").value.split(" ").join("+"),a=encodeURIComponent(s);if(null!=document.getElementById("NegPro")){var l=document.getElementById("NegPro").value.split(" ").join("+");n=encodeURIComponent(l)}else n="";fetch("/api/genbg-guest?url=".concat(t,"&promptDesc=").concat(a,"&image_number=").concat(e,"&NpromptDesc=").concat(n)).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){E(e.newurl);for(var n=0;n<e.newurl.length;n++)(0,o.Z)({method:"post",data:{imageURL:e.newurl[n]},url:"/downloadImage",withCredentials:!0}).then((function(e){var n=e.data.newImageUrl;(0,o.Z)({method:"post",data:{url:n},url:"/addImage",withCredentials:!0}).then((function(e){r(!0)})).catch((function(e){console.error(e)}))})).catch((function(e){return console.log(e)}));g(!1)})).catch((function(e){console.error("Error:",e),g(!1)})),g(!1),b(!1)}catch(i){g(!1),b(!1)}}),[C]),(0,i.useEffect)((function(){if("undefined"!==typeof window){var e=document.getElementById("dropzone-file"),n=document.getElementById("imageView"),t=document.getElementById("imageContainer"),r=document.getElementById("imagePlaceFree"),s=document.getElementById("imagePlaceFilled");e&&e.addEventListener("change",(function(){var a=e.files[0];if(a){var l=new FileReader;l.onload=function(e){var a=e.target.result;r.style.display="none",s.style.display="block",n.src=a,t.style.display="block"},l.readAsDataURL(a)}}))}}));var z=function(e){e.preventDefault()};return(0,d.jsxs)("main",{className:"max-w-3/4 h-full flex  flex-col items-center min-h-screen p-2",children:[(0,d.jsxs)("div",{className:"container bg-white p-10 rounded-lg  mx-auto flex-col",children:[(0,d.jsx)("h2",{className:"text-2xl font-semibold",children:"Ai Background General"}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,d.jsxs)("div",{className:"w-full",children:[(0,d.jsxs)("label",{htmlFor:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ",children:[(0,d.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[(0,d.jsx)("svg",{className:"w-8 h-8 mb-4 text-gray-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16",children:(0,d.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),(0,d.jsxs)("p",{className:"mb-2 text-sm text-gray-500",children:[(0,d.jsx)("span",{className:"font-semibold",children:"Click to upload"})," or drag and drop"]}),(0,d.jsx)("p",{className:"text-xs text-gray-500",children:"SVG, PNG, JPG or GIF"})]}),(0,d.jsx)("input",{id:"dropzone-file",hidden:!0,type:"file",onChange:function(e){var n=e.target.files[0];m=n},className:"hidden",name:"dropzone-file"})]}),U&&(0,d.jsx)("p",{className:"text-red-500 text-sm mt-2",children:U}),(0,d.jsx)("textarea",{onChange:function(e){F(e.target.value)},placeholder:"Describe image",id:"desc",name:"desc",className:"border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-900 mt-2",required:!0}),(0,d.jsxs)("select",{id:"numberImages",name:"numberImages",className:"border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-900 mt-2 mb-2",defaultValue:"1",children:[(0,d.jsx)("option",{value:"1",disabled:!0,hidden:!0,children:"Number of images to generate"}),(0,d.jsx)("option",{value:"1",children:"1"}),(0,d.jsx)("option",{value:"2",children:"2"}),(0,d.jsx)("option",{value:"3",children:"3"}),(0,d.jsx)("option",{value:"4",children:"4"})]}),(0,d.jsx)("div",{id:"adsDiv",className:"w-full h-auto bg-red-600",children:"put the ads here"}),p?(0,d.jsx)("button",{id:"myButton",value:"",className:"mt-4 w-full items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md hover:bg-blue-500 focus:shadow-outline focus:outline-none bg-primary-500 rounded",children:(0,d.jsxs)("svg",{"aria-hidden":"true",className:"inline w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})}):(0,d.jsx)("button",{id:"myButton",value:"",className:"mt-4 w-full  items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md hover:bg-blue-500 focus:shadow-outline focus:outline-none bg-primary-500 rounded",children:"Generate Background"})]}),(0,d.jsx)("div",{src:"",id:"imagePlaceFree",width:"100%",className:" bg-slate-100",alt:"Processed Image"}),(0,d.jsx)("div",{className:"w-full",id:"imagePlaceFilled",hidden:!0,children:(0,d.jsx)("div",{id:"imageContainer",children:(0,d.jsx)("div",{className:"flex items-center justify-center container h-100",children:(0,d.jsx)("img",{src:"",className:"h-full object-cover shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30",id:"imageView",alt:"Processed Image"})})})})]}),(0,d.jsx)("div",{id:"displayResults",className:"flex items-center justify-center",children:B?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{className:"text-2xl font-bold mt-3 text-center",children:"Generated background"}),(0,d.jsx)("div",{id:"adsDiv2",className:"w-full h-auto bg-red-600",children:"put the ads here"}),(0,d.jsx)("div",{className:"grid md:grid-cols-".concat(2===B.length?1:3===B.length?2:4===B.length?3:5===B.length?4:1," gap-1"),children:B.slice(1).map((function(e,n){return(0,d.jsxs)("div",{className:"flex items-center justify-center container h-100 mt-3 mx-2",children:[(0,d.jsx)("img",{src:e,onContextMenu:z,className:"h-full object-cover shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30",alt:"Processed Image ".concat(n+1)},n),(0,d.jsx)("div",{className:"absolute bottom-0 right-0 m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})}))})]}):(0,d.jsx)("div",{children:j?null:(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"w-full max-w-md mx-auto",children:(0,d.jsx)("div",{className:"flex justify-center items-center h-48",children:(0,d.jsx)("div",{className:"animate-spin w-16 h-16 border-t-2 border-blue-500 rounded-full"})})})})})}),t?(0,d.jsx)("div",{id:"showLimiteMessage",className:"modal fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-80 items-center justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:(0,d.jsxs)("div",{className:"md:w-2/3 mx-auto inline-block  align-center rounded-lg overflow-hidden shadow-xl  transform transition-all sm:my-8 sm:align-middle bg-white",children:[(0,d.jsxs)("div",{className:"flex items-start justify-between p-4 border-b rounded-t border-gray-600",children:[(0,d.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:" Monthly Plans "}),(0,d.jsxs)("button",{onClick:function(){return r(!1)},id:"closeModelButton",type:"button",className:" text-gray-900 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 ",children:[(0,d.jsx)("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:(0,d.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),(0,d.jsx)("span",{className:"sr-only",children:"Close"})]})]}),(0,d.jsx)("div",{className:"justify-center w-auto sm:grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-6",children:x.slice().reverse().map((function(e){return(0,d.jsxs)("div",{className:"p-6 space-y-6 flex flex-col relative",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{className:"text-gray-700 text-left",children:["Need more generations?  Upgrade to ",(0,d.jsx)("b",{children:e.name})," today."]}),(0,d.jsx)("div",{className:"flex flex-col",children:(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsx)("div",{children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),(0,d.jsx)("div",{className:"col-span-11 text-l flex font-semibold pl-2",children:(0,d.jsx)("span",{className:"font-bold",children:e.description})})]})}),(0,d.jsxs)("div",{className:"rounded w-full flex flex-col border-solid",children:[(0,d.jsx)("h3",{className:"text-3xl p-5 text-left pl-6",children:e.name}),(0,d.jsxs)("div",{className:"flex flex-row items-center pt-3 pl-6 pr-10 gap-3 pb-3 text-primary-500",children:[(0,d.jsxs)("div",{className:"flex flex-row gap-1",children:[(0,d.jsx)("span",{className:"text-base",children:"$"}),(0,d.jsx)("p",{className:"text-5xl font-semibold",children:e.price})]}),(0,d.jsx)("p",{className:"font-light text-sm",children:"/ month"})]}),(0,d.jsx)("div",{className:"pl-6 pr-10 gap-3 pb-3 text-left",children:(0,d.jsxs)("ul",{className:"text-gray-700",children:[(0,d.jsx)("li",{children:"No advertisements"}),(0,d.jsx)("li",{children:"Commercial usage of photos"}),(0,d.jsx)("li",{children:"Premium support"})]})})]})]},e.id),(0,d.jsx)("a",{className:"w-[200px] plan-btn bg-primary-500 text-white text-base font-semibold py-2 px-4 rounded-lg mt-4 absolute bottom-5",href:"/register",children:"Subscribe"})]})}))})]})}):null]}),(0,d.jsx)("style",{children:"\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n        main {\n          flex: 1;\n          display: flex;\n          flex-direction: column;\n        }\n        \n        .footer-content {\n          width: 100%;\n          border-top: 1px solid #eaeaea;\n          display: flex;\n          justify-content: space-between; \n          align-items: center; \n          color: gray;\n        }\n\n        .footer-links {\n          text-decoration: none;\n          color: gray;\n        } \n        code {\n          background: #fafafa;\n          border-radius: 5px;\n          padding: 0.75rem;\n          font-size: 1.1rem;\n          font-family:\n            Menlo,\n            Monaco,\n            Lucida Console,\n            Liberation Mono,\n            DejaVu Sans Mono,\n            Bitstream Vera Sans Mono,\n            Courier New,\n            monospace;\n        }\n      "})]})},r()}catch(f){r(f)}}),1)}}]);
//# sourceMappingURL=535.8b5755e3.chunk.js.map