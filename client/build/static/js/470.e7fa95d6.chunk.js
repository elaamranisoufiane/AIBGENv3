"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[470],{3470:function(e,t,s){s.r(t);var n=s(4165),a=s(5861),r=s(9439),l=s(2791),c=s(1243),i=s(184);t.default=function(){var e=(0,l.useState)([]),t=(0,r.Z)(e,2),s=t[0],o=t[1],m=(0,l.useState)([]),d=(0,r.Z)(m,2),x=d[0],u=d[1],p=(0,l.useState)(!1),h=(0,r.Z)(p,2),f=h[0],b=h[1],g=(0,l.useState)(!1),y=(0,r.Z)(g,2),j=y[0],v=y[1],w=(0,l.useState)(!1),N=(0,r.Z)(w,2),k=N[0],Z=N[1],C=(0,l.useState)(!1),S=(0,r.Z)(C,2),P=S[0],Y=S[1],A=(0,l.useState)(!1),G=(0,r.Z)(A,2),I=G[0],F=G[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/api/getAllProductssGuest",{withCredentials:!0});case 3:t=e.sent,o(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Fetching plans failed:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/api/getAllProductsspaymentGuest",{withCredentials:!0});case 3:t=e.sent,u(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Fetching payment plans failed:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),(0,i.jsx)("main",{className:s.length>0?"max-w-3/4 h-full flex   flex-col items-center min-h-screen":"",children:(0,i.jsxs)("div",{className:"flex justify-center min-h-screen mt-11",children:[(0,i.jsxs)("div",{className:"bg-white p-2 rounded-lg shadow-lg w-5/6 h-auto",children:[(0,i.jsx)("div",{children:(0,i.jsx)("h1",{className:"mt-2 text-center text-3xl font-extrabold text-gray-900",children:"OUR Prices"})}),(0,i.jsx)("div",{className:"flex items-start justify-between p-4 border-b rounded-t border-gray-600",children:(0,i.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:" Monthly Plans "})}),(0,i.jsx)("div",{className:"justify-center w-auto sm:grid sm:grid-cols-1 lg:flex pt-8 pb-8",children:s.map((function(e){return(0,i.jsxs)("div",{className:"pricing-card flex flex-col border border-gray-300 rounded-lg p-6 text-center hover:shadow-md w-full mb-12 lg:w-1/4 lg:mb-0 lg:ml-2",children:[(0,i.jsx)("h2",{className:"plan-name text-xl text-black font-semibold mb-4",children:e.name}),(0,i.jsx)("ul",{className:"plan-features",children:(0,i.jsxs)("li",{children:["  ",e.description," "]})}),(0,i.jsxs)("p",{className:"plan-price text-lg text-primary-500 mt-4",children:["$",e.price,(0,i.jsx)("span",{className:"plan-price-per-month text-sm text-gray-600",children:"/mo"})]}),(0,i.jsx)("a",{className:"plan-btn bg-primary-500 text-white text-base font-semibold py-2 px-4 rounded-lg mt-4",href:"/register",children:"Get Started"}),(0,i.jsx)("p",{className:"plan-note text-sm text-gray-600 mt-4",children:"You can cancel your subscription anytime."})]},e.id)}))}),(0,i.jsx)("hr",{}),(0,i.jsx)("div",{className:"flex items-start justify-between p-4 border-b rounded-t border-gray-600",children:(0,i.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:" Add-on Plans  "})}),(0,i.jsx)("div",{className:"justify-center sm:grid sm:grid-cols-1 lg:flex pt-8 pb-8",children:x.map((function(e){return(0,i.jsxs)("div",{className:"pricing-card flex flex-col border border-gray-300 rounded-lg p-6 text-center hover:shadow-md w-full mb-12 lg:w-1/4 lg:mb-0 lg:ml-2",children:[(0,i.jsx)("h2",{className:"plan-name text-xl text-black font-semibold mb-4",children:e.name}),(0,i.jsx)("ul",{className:"plan-features",children:(0,i.jsxs)("li",{children:["  ",e.description," "]})}),(0,i.jsxs)("p",{className:"plan-price text-lg text-primary-500 mt-4",children:["$",e.price,(0,i.jsx)("span",{className:"plan-price-per-month text-sm text-gray-600",children:"/mo"})]}),(0,i.jsx)("a",{className:"plan-btn bg-primary-500 text-white text-base font-semibold py-2 px-4 rounded-lg mt-4",href:"/register",children:"Get Started"}),(0,i.jsx)("p",{className:"plan-note text-sm text-gray-600 mt-4",children:"You can cancel your subscription anytime."})]},e.id)}))}),(0,i.jsx)("div",{className:"px-4 py-12 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-14",children:(0,i.jsxs)("div",{className:"max-w-xl sm:mx-auto lg:max-w-2xl",children:[(0,i.jsx)("div",{className:"max-w-xl mb-10 text-center md:mx-auto md:mb-12 lg:max-w-2xl",children:(0,i.jsx)("h2",{className:"max-w-lg mb-6 font-sans font-bold leading-none tracking-tight text-slate-900 text-2xl md:mx-auto lg:text-3xl",children:"Pricing Plan FAQs"})}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"border-b ".concat(f?"open":""),children:[(0,i.jsx)("div",{className:"flex text-lg font-medium py-4 flex-row text-left px-4 w-full items-center justify-between hover:bg-slate-100",onClick:function(){return b(!f)},children:"What's included in the plans?"}),f&&(0,i.jsx)("div",{className:"px-4 mb-4 mt-2",children:"In each plan, you will receive credits based on the plan you choose, which you can use to generate images.   "})]}),(0,i.jsxs)("div",{className:"border-b ".concat(j?"open":""),children:[(0,i.jsx)("div",{className:"flex text-lg font-medium py-4 flex-row text-left px-4 w-full items-center justify-between hover:bg-slate-100",onClick:function(){return v(!j)},children:"How can i get more credits?"}),j&&(0,i.jsx)("div",{className:"px-4 mb-4 mt-2",children:"You can purchase more credits from your profile settings..  "})]}),(0,i.jsxs)("div",{className:"border-b ".concat(k?"open":""),children:[(0,i.jsx)("div",{className:"flex text-lg font-medium py-4 flex-row text-left px-4 w-full items-center justify-between hover:bg-slate-100",onClick:function(){return Z(!k)},children:"How can I upgrade my plan?"}),k&&(0,i.jsx)("div",{className:"px-4 mb-4 mt-2",children:"You can upgrade your plan by visiting the billing section of your account settings."})]}),(0,i.jsxs)("div",{className:"border-b ".concat(P?"open":""),children:[(0,i.jsx)("div",{className:"flex text-lg font-medium py-4 flex-row text-left px-4 w-full items-center justify-between hover:bg-slate-100",onClick:function(){return Y(!P)},children:"Can I cancel my subscription at any time?"}),P&&(0,i.jsx)("div",{className:"px-4 mb-4 mt-2",children:"Yes, you can cancel your subscription at any time."})]}),(0,i.jsxs)("div",{className:"border-b ".concat(I?"open":""),children:[(0,i.jsx)("div",{className:"flex text-lg font-medium py-4 flex-row text-left px-4 w-full items-center justify-between hover:bg-slate-100",onClick:function(){return F(!I)},children:"How can I contact customer support?"}),I&&(0,i.jsx)("div",{className:"px-4 mb-4 mt-2",children:"You can contact our customer support team by emailing apps127@yahoo.in."})]})]})]})})]}),(0,i.jsx)("style",{children:"\n                @keyframes spin {\n                    0% {\n                        transform: rotate(0deg);\n                    }\n                    100% {\n                        transform: rotate(360deg);\n                    }\n                }\n            "})]})})}}}]);
//# sourceMappingURL=470.e7fa95d6.chunk.js.map