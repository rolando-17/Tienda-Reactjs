(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[1],{19:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n={SET_PRODUCTS:"SET_PRODUCTS",ADD_PRODUCTS:"ADD_PRODUCTS",REMOVE_PRODUCTS:"REMOVE_PRODUCTS"}},29:function(e,t,c){},30:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(14),s=c.n(a),i=(c(29),c(30),c(13)),o=c(16),j=c(24),l=c(9),u=c(19),b=[],d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,c=t.payload;switch(t.type){case u.a.ADD_PRODUCTS:var n=e.find((function(e){return e._id===c._id}));if(n)return e.map((function(e){return e._id===c._id?Object(l.a)(Object(l.a)({},e),{},{count:e.count+1}):e}));var r=t.payload;return[].concat(Object(j.a)(e),[Object(l.a)(Object(l.a)({},r),{},{count:1})]);case u.a.REMOVE_PRODUCTS:var a=e.find((function(e){return e._id===c._id}));return 1===a.count?e.filter((function(e){return e._id!==a._id})):e.map((function(e){return e._id===c._id?Object(l.a)(Object(l.a)({},e),{},{count:e.count-1}):e}));default:return e}},O=Object(o.a)({handleCart:d}),h=Object(o.b)(O,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),x=c(21),f=c(8),m=c(3),p=c(1),_=function(){return Object(p.jsx)("footer",{children:Object(p.jsxs)("small",{children:["created by"," ",Object(p.jsx)("b",{children:Object(p.jsx)("a",{href:"https://github.com/volta2016",children:"volta2016"})})," ","- ",(new Date).getFullYear()]})})},v=function(){return Object(p.jsxs)("div",{className:"search flex",children:[Object(p.jsx)("input",{className:"pserch",type:"text",placeholder:"Busca productos"}),Object(p.jsx)("button",{className:"pserch",children:"search"})]})},g=c.p+"static/media/logo-shopping-cart-mobile.167256ec.svg",E=c.p+"static/media/profile.f91a58b1.svg",D=function(){var e=Object(i.c)((function(e){return e.handleCart}));return Object(p.jsxs)("div",{className:"checkout",children:[Object(p.jsxs)(f.b,{to:"/checkout",className:"anchor-cart",children:[Object(p.jsx)("img",{className:"icon-check",src:g,alt:"cart"}),"(",e.length,")"]}),Object(p.jsx)(f.b,{to:"/register",className:"anchor-cart",children:Object(p.jsx)("img",{className:"icon-check",src:E,alt:"profile"})})]})},S=function(){return Object(p.jsx)("div",{className:"menumb",children:Object(p.jsx)("h2",{children:"Menu"})})},N=c.p+"static/media/redux.0e4fb1c8.svg",T=function(){return Object(p.jsx)("header",{children:Object(p.jsxs)("nav",{className:"container grid-header",children:[Object(p.jsxs)(f.b,{className:"tex-logo",to:"/",children:["Store ",Object(p.jsx)("img",{className:"icon-check",src:N,alt:"redux"})," "]}),Object(p.jsx)(v,{}),Object(p.jsx)(D,{}),Object(p.jsx)(S,{})]})})},R=function(e){var t=e.children;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(T,{}),t,Object(p.jsx)(_,{})]})},y=Object(n.lazy)((function(){return Promise.all([c.e(0),c.e(5)]).then(c.bind(null,79))})),P=Object(n.lazy)((function(){return Promise.all([c.e(0),c.e(4)]).then(c.bind(null,81))})),C=Object(n.lazy)((function(){return c.e(6).then(c.bind(null,80))})),U=Object(n.lazy)((function(){return c.e(7).then(c.bind(null,78))})),k=function(){return Object(p.jsx)(n.Suspense,{fallback:Object(p.jsx)("h2",{children:"Loading Ecommerce..."}),children:Object(p.jsx)(f.a,{children:Object(p.jsx)(R,{children:Object(p.jsxs)(m.c,{children:[Object(p.jsx)(m.a,{path:"/",exact:!0,component:y}),Object(p.jsx)(m.a,{path:"/products/:id",exact:!0,component:P}),Object(p.jsx)(m.a,{path:"/checkout",exact:!0,component:C}),Object(p.jsx)(m.a,{path:"*",exact:!0,component:U})]})})})})},w=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2)[1];return Object(n.useEffect)((function(){fetch("http://localhost:5000/").then((function(e){return e.text()})).then((function(e){return t(e)}))}),[]),Object(p.jsxs)("div",{style:{textAlign:"center"},children:[Object(p.jsx)("h1",{children:" Prueba tecnica front Ecomsur 2021"}),Object(p.jsx)(k,{})]})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(i.a,{store:h,children:Object(p.jsx)(w,{})})}),document.getElementById("root"))}},[[41,2,3]]]);
//# sourceMappingURL=main.49aa0443.chunk.js.map