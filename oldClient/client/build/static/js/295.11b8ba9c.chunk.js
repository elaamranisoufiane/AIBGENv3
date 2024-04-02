"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[295],{179:function(e,n,t){t.r(n);var r=t(4165),s=t(5861),a=t(9439),i=t(2791),o=t(1243),c=t(184);n.default=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],l=n[1],d=(0,i.useState)(1),u=(0,a.Z)(d,2),h=u[0],x=u[1],m=(0,i.useState)(1),g=(0,a.Z)(m,2),f=g[0],b=g[1],p=(0,i.useState)(""),j=(0,a.Z)(p,2),v=j[0],y=j[1],N=(0,i.useState)(-1),w=(0,a.Z)(N,2),S=w[0],k=w[1],C=(0,i.useState)(-1),Z=(0,a.Z)(C,2),E=Z[0],M=Z[1],F=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/getAllUsers?page=".concat(h,"&querySearch=").concat(v,"&statusActive=").concat(E,"&statusSubscription=").concat(S),{withCredentials:!0});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching users:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n,t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/getTotalUsers",{withCredentials:!0});case 3:n=e.sent,t=n.data,s=Math.ceil(t/10),b(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching total users:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){F().then((function(e){l(e)})),U()}),[h]);var A=function(){var e=[],n=Math.max(1,h-1),t=Math.min(f,h+1);h>2&&e.push((0,c.jsx)("li",{className:"mr-2",children:(0,c.jsx)("button",{className:"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 ",children:"..."})},"min"));for(var r=function(n){e.push((0,c.jsx)("li",{className:"mr-2",children:(0,c.jsx)("a",{onClick:function(){return x(n)},className:"cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border ".concat(h===n?"bg-blue-500":"bg-gray-300"," hover:bg-gray-100 hover:text-gray-700 "),children:"".concat(n)})},n))},s=n;s<=t;s++)r(s);return h<f-1&&e.push((0,c.jsx)("li",{className:"mr-2",children:(0,c.jsx)("button",{className:"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 ",children:"..."})},"max")),e};return(0,c.jsxs)("main",{className:"max-w-3/4 h-full flex  flex-col items-center min-h-screen",children:[(0,c.jsxs)("div",{className:"container bg-white p-10 rounded-lg   mx-auto flex-col",children:[(0,c.jsx)("h2",{className:"text-2xl font-semibold",children:"Users Management"}),(0,c.jsx)("div",{className:"bg-white p-4 rounded-lg",children:(0,c.jsxs)("div",{className:"grid grid-cols-1 gap-4",children:[(0,c.jsxs)("div",{className:"p-4 rounded-lg flex-auto",children:[(0,c.jsx)("span",{className:"float-left",children:(0,c.jsx)("a",{className:"font-bold py-2 px-4 roundedmt-4  items-center  tracking-wide text-white transition duration-200 shadow-md hover:bg-blue-500 focus:shadow-outline focus:outline-none bg-primary-500 rounded",href:"/admin/add",children:"Add User"})}),(0,c.jsxs)("div",{className:"float-right",children:[(0,c.jsxs)("select",{id:"searchSubs",name:"searchSubs",className:"border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-900 mt-2 mb-2",value:S,onChange:function(e){k(e.target.value)},children:[(0,c.jsx)("option",{value:"-1",children:"Subscribe Status"}),(0,c.jsx)("option",{value:"0",children:"Not subscribe"}),(0,c.jsx)("option",{value:"1",children:"Subscribe"})]}),(0,c.jsxs)("select",{id:"searchStatus",name:"searchStatus",className:"border ml-2 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-900 mt-2 mb-2 placeholder='status'",value:E,onChange:function(e){M(e.target.value)},children:[(0,c.jsx)("option",{value:"-1",children:"Status"}),(0,c.jsx)("option",{value:"0",children:"Not Active"}),(0,c.jsx)("option",{value:"1",children:"Active"})]}),(0,c.jsx)("input",{className:'font-bold py-2 px-4 roundedmt-4 ml-2  items-center placeholder="Search"  tracking-wide bg-gray-100 transition duration-200 shadow-mdfocus:shadow-outline focus:outline-none rounded',onChange:function(e){y(e.target.value)},placeholder:"Search users"}),(0,c.jsx)("a",{onClick:function(e){F().then((function(e){l(e)})),x(1),U()},className:"font-bold py-2 px-4 ml-2 roundedmt-4 cursor-pointer  items-center  tracking-wide text-white transition duration-200 shadow-md hover:bg-blue-500 focus:shadow-outline focus:outline-none bg-primary-500 rounded",children:"Search"})]})]}),t.map((function(e,n){return(0,c.jsxs)("div",{className:"bg-gray-100 p-4 rounded-lg flex-auto",children:[(0,c.jsxs)("div",{className:"text-xl font-semibold",children:[e.id," - ",e.username,"  "]}),(0,c.jsxs)("div",{className:"text-sm text-gray-600",children:[(0,c.jsxs)("span",{className:"mb-2",children:[(0,c.jsx)("b",{children:"Email:"})," ",e.email]}),(0,c.jsxs)("span",{className:"mb-2 ml-3",children:[(0,c.jsx)("b",{children:"Number of generated images: "}),e.attempt]}),(0,c.jsxs)("span",{className:"mb-2 ml-3",children:[(0,c.jsx)("b",{children:"User created at: "}),new Date(e.created_at).toLocaleDateString()]}),(0,c.jsx)("span",{className:"mb-2 ml-3",children:(0,c.jsxs)("b",{children:[" Credits: ",e.credits]})}),(0,c.jsxs)("span",{className:"block",children:[(0,c.jsx)("b",{children:"Subscription End: "}),e.currentPeriodEnd?(0,c.jsx)(c.Fragment,{children:new Date(e.currentPeriodEnd).toLocaleDateString()}):(0,c.jsx)(c.Fragment,{children:"Not subscribed"})]}),(0,c.jsxs)("span",{children:[(0,c.jsx)("b",{children:"Status: "}),e.canceled||0==e.credits||"Free Plan"===e.planName?(0,c.jsx)("span",{className:"text-red-700",children:"Not Active"}):(0,c.jsx)("span",{className:"text-green-700",children:"Active"})]}),(0,c.jsx)("br",{}),(0,c.jsxs)("span",{children:[(0,c.jsx)("b",{children:"Plan: "}),e.planName?(0,c.jsx)(c.Fragment,{children:e.planName}):null]}),(0,c.jsx)("br",{}),(0,c.jsxs)("span",{children:[(0,c.jsx)("b",{children:"Email Status: "}),e.is_verified&&1==e.is_verified?(0,c.jsx)(c.Fragment,{children:"verified"}):(0,c.jsx)(c.Fragment,{children:"Not verified"})]})]}),(0,c.jsxs)("div",{className:"mt-2 float-right",children:[(0,c.jsx)("a",{className:"bg-blue-500 hover:bg-blue-800 font-bold py-2 px-4 roundedmt-4  items-center  tracking-wide text-white transition duration-200 shadow-md focus:shadow-outline focus:outline-none  rounded",href:"/admin/edit/".concat(e.id),children:"Edit"}),(0,c.jsx)("a",{className:"ml-4 bg-red-500 font-bold py-2 px-4 roundedmt-4  items-center  tracking-wide text-white transition duration-200 shadow-md hover:bg-red-800 focus:shadow-outline focus:outline-none rounded cursor-pointer",onClick:function(){return n=e.id,void o.Z.delete("/deleteUser/".concat(n)).then((function(e){F().then((function(e){l(e)})),A(),U()})).catch((function(e){console.error("Error deleting item",e)}));var n},children:"Delete"})]})]},n)})),(0,c.jsx)("nav",{className:"flex justify-center items-center",children:(0,c.jsxs)("ul",{className:"inline-flex -space-x-px text-sm",children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{onClick:function(){return x((function(e){return e-1}))},disabled:1===h,className:"flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700",children:"Previous"})}),A(),(0,c.jsx)("li",{children:(0,c.jsx)("button",{onClick:function(){return x((function(e){return e+1}))},disabled:h===f,className:"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700",children:"Next"})})]})})]})})]}),(0,c.jsx)("style",{children:"\n        main { \n          flex: 1;\n          display: flex;\n          flex-direction: column;\n        }\n        \n        .footer-content {\n          width: 100%;\n          border-top: 1px solid #eaeaea;\n          display: flex;\n          justify-content: space-between; \n          align-items: center; \n          color: gray;\n        }\n\n        .footer-links {\n          text-decoration: none;\n          color: gray;\n        } \n        code {\n          background: #fafafa;\n          border-radius: 5px;\n          padding: 0.75rem;\n          font-size: 1.1rem;\n          font-family:\n            Menlo,\n            Monaco,\n            Lucida Console,\n            Liberation Mono,\n            DejaVu Sans Mono,\n            Bitstream Vera Sans Mono,\n            Courier New,\n            monospace;\n        }\n      "}),(0,c.jsx)("style",{children:"\n        html,\n        body {\n          padding: 0;\n          margin: 0;\n          font-family:\n            -apple-system,\n            BlinkMacSystemFont,\n            Segoe UI,\n            Roboto,\n            Oxygen,\n            Ubuntu,\n            Cantarell,\n            Fira Sans,\n            Droid Sans,\n            Helvetica Neue,\n            sans-serif;\n        }\n        * {\n          box-sizing: border-box;\n        }\n        \n      "})]})}}}]);
//# sourceMappingURL=295.11b8ba9c.chunk.js.map