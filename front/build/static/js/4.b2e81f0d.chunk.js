(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[4],{45:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(21),a=c(0);function r(t,e){var c=Object(a.useState)((function(){try{var c=window.localStorage.getItem(t);return c?JSON.parse(c):e}catch(n){return e}})),r=Object(n.a)(c,2),s=r[0],i=r[1];return[s,function(e){try{i(e),window.localStorage.setItem(t,JSON.stringify(e))}catch(c){console.log(c)}}]}},46:function(t,e,c){"use strict";c.d(e,"b",(function(){return r})),c.d(e,"a",(function(){return s}));var n=c(50),a=c.n(n),r=function(){return a.a.get("".concat("http://localhost:5000/api/products")).then((function(t){return t}))},s=function(t){return a.a.get("".concat("http://localhost:5000/api/products/").concat(t)).then((function(t){return t}))}},47:function(t,e,c){"use strict";c.d(e,"a",(function(){return a})),c.d(e,"b",(function(){return r}));var n=c(19),a=function(t){return{type:n.a.ADD_PRODUCTS,payload:t}},r=function(t){return{type:n.a.REMOVE_PRODUCTS,payload:t}}},81:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(3),r=c(13),s=c(47),i=c(8),o=c(48),u=c.n(o),l=c(49),d=c(21),j=c(45),b=c(46),f=function(t){var e=Object(j.a)("products",""),c=Object(d.a)(e,2),a=c[0],r=c[1],s=Object(n.useState)(!0),i=Object(d.a)(s,2),o=i[0],f=i[1],O=Object(n.useState)(!1),h=Object(d.a)(O,2),p=h[0],x=h[1];function m(){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(u.a.mark((function e(){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.a)(t);case 3:c=e.sent,n=c.data,r(n),f(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),f(!1),x(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){m()}),[t]),{products:a,loading:o,error:p,getProductsById:m}},O=c(1),h=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"box-skeleton-6",children:"sekeleton details"}),Object(O.jsx)("div",{className:"box-skeleton-6",children:"skeleton details"})]})};e.default=function(){var t=Object(a.f)().id,e=f(t),c=e.products,n=e.loading,o=Object(r.b)(),u=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"detail-6 mt",children:Object(O.jsx)("img",{src:"http://localhost:5000".concat(c.image),alt:c.name})}),Object(O.jsxs)("div",{className:"detail-6 mt",children:[Object(O.jsx)("h4",{className:"text-black",children:c.category}),Object(O.jsx)("h1",{className:"m-y",children:c.name}),Object(O.jsxs)("p",{className:"rating",children:[Object(O.jsx)("b",{children:"Rating"})," ",c.rating,Object(O.jsx)("i",{className:"fa fa-star"})]}),Object(O.jsxs)("h3",{className:"display-6 fw-bold my-4",children:["$ ",c.price]}),Object(O.jsx)("p",{className:"descritption m-y",children:c.description}),Object(O.jsxs)("div",{className:"flex",children:[Object(O.jsx)("button",{className:"buy-detail",onClick:function(){return t=c,void o(Object(s.a)(t));var t},children:"Add to Cart"}),Object(O.jsx)(i.b,{to:"/checkout",className:"buy-detail",children:"Go to Cart"})]})]})]})};return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"container flex-wrap",children:n?Object(O.jsx)(h,{}):Object(O.jsx)(u,{})})})}}}]);
//# sourceMappingURL=4.b2e81f0d.chunk.js.map