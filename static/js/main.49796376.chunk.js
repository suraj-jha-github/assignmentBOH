(this.webpackJsonpbidonhomes=this.webpackJsonpbidonhomes||[]).push([[0],{30:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(16),i=c.n(a),s=(c(30),c(6)),o=c(3),l=c(4),u=c(11),j="USER_SIGIN_REQUEST",d="USER_SIGIN_SUCESS",b="USER_SIGIN_FAIL",O="USER_LOGOUT",p="CREATE_NOTE",h=c(1),m=function(){var e=Object(s.b)(),t=Object(n.useState)(!1),c=Object(u.a)(t,2),r=c[0],a=c[1],i=Object(n.useState)({name:"",des:"",price:"",qty:"",url:""}),j=Object(u.a)(i,2),d=j[0],b=j[1],O=Object(s.c)((function(e){return e.userSignin})).userInfo,m=Object(o.f)();O||m.push("/signin");var x=function(t){t.preventDefault(),d.name&&d.price&&d.qty&&(e(function(e){return function(t,c){t({type:p,payload:e}),localStorage.setItem("productDetail",JSON.stringify(c().productReducer.products))}}(d)),m.push("/products"))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"add-Item",children:Object(h.jsx)("button",{onClick:function(){a(!0)},children:"Add Product"})}),r?Object(h.jsx)("div",{className:"background-popup",children:Object(h.jsxs)("form",{className:"popup-cotent",onSubmit:x,children:[Object(h.jsx)("input",{type:"text",value:d.name,onChange:function(e){b(Object(l.a)(Object(l.a)({},d),{},{name:e.target.value}))},placeholder:"Enter the product name"}),Object(h.jsx)("input",{type:"text",value:d.des,onChange:function(e){b(Object(l.a)(Object(l.a)({},d),{},{des:e.target.value}))},placeholder:"Write product description"}),Object(h.jsx)("input",{type:"number",value:d.price,onChange:function(e){b(Object(l.a)(Object(l.a)({},d),{},{price:e.target.value}))},placeholder:"Price of product",pattern:"/^[+-]?([0-9]+\\.?[0-9]*|\\.[0-9]+)$/"}),Object(h.jsx)("input",{type:"number",value:d.qty,onChange:function(e){b(Object(l.a)(Object(l.a)({},d),{},{qty:e.target.value}))},placeholder:"Quantity of product"}),Object(h.jsx)("input",{type:"url",value:d.url,onChange:function(e){b(Object(l.a)(Object(l.a)({},d),{},{url:e.target.value}))},placeholder:"Enter user image url"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"close",onClick:function(){a(!1)},children:"close"}),Object(h.jsx)("button",{className:"submit",onSubmit:x,children:"Submit"})]})]})}):""]})},x=function(){return Object(h.jsx)("footer",{children:"\xa9 Copyright By Suraj"})},v=c(10),f=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(s.b)(),i=Object(s.c)((function(e){return e.userSignin})).userInfo;return Object(h.jsxs)("nav",{className:c?"navbar":"navbar h-res",children:[i?Object(h.jsx)("div",{className:"nav-left",children:Object(h.jsx)(v.b,{to:"/",children:i.name.split(" ")[0]})}):Object(h.jsx)("div",{className:"nav-left",children:Object(h.jsx)(v.b,{to:"/",children:"Bidonhomes"})}),Object(h.jsx)("div",{className:"burger",onClick:function(){r(!0!==c)},children:Object(h.jsx)("i",{class:"fa fa-bars","aria-hidden":"true"})}),Object(h.jsx)("div",{className:"nav-right",children:i?Object(h.jsxs)("div",{className:c?"nav-item":"nav-item v-res",children:[Object(h.jsx)("div",{children:Object(h.jsx)(v.b,{to:"/products",children:"PRODUCTS"})}),Object(h.jsx)("div",{children:Object(h.jsx)(v.b,{to:"/addProduct",children:"ADD ITEM"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){a((function(e,t){localStorage.removeItem("userInfo"),e({type:O})})),console.log(i)},to:"#",children:"LogOut"})})]}):Object(h.jsx)("div",{className:c?"":"v-res",children:Object(h.jsx)(v.b,{to:"/signin",children:"LOG IN"})})})]})},g=function(){return Object(h.jsx)("div",{className:"home-div",children:Object(h.jsx)("h1",{children:"Welcome To My Task"})})},S=function(e){var t=e.item;return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsx)("div",{className:"img-div",style:{backgroundColor:"rgb(".concat(Math.ceil(100*Math.random()),", ").concat(Math.ceil(100*Math.random()),",70)")},children:Object(h.jsx)("img",{src:t.url,alt:""})}),Object(h.jsxs)("div",{className:"text-div",children:[Object(h.jsx)("h1",{children:t.name}),Object(h.jsx)("p",{children:t.des}),Object(h.jsxs)("p",{children:["RS.",t.price]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Quantity:"}),"\xa0",Object(h.jsx)("span",{children:t.qty})]})]})]})},y=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),i=Object(u.a)(a,2),l=i[0],j=i[1],d=Object(n.useState)(),b=Object(u.a)(d,2),O=b[0],p=b[1],m=Object(n.useState)(),x=Object(u.a)(m,2),v=x[0],f=x[1],g=Object(s.c)((function(e){return e.userSignin.userInfo})),y=Object(s.c)((function(e){return e.productReducer}));Object(n.useEffect)((function(){p(y.products),f(O)}),[y,O]);var I=Object(o.f)();return g||I.push("/signin"),Object(n.useEffect)((function(){f(c.trim()?O.filter((function(e){return e.name.toLowerCase().includes(c.trim().toLowerCase())})):O)}),[c,O]),Object(h.jsxs)("div",{className:"product-content",children:[Object(h.jsxs)("div",{className:"action-div",children:[Object(h.jsx)("input",{type:"text",placeholder:"search the product",value:c,onChange:function(e){r(e.target.value)}}),Object(h.jsxs)("select",{onChange:function(e){j(e.target.value),f("lowest"===l?O.sort((function(e,t){return parseInt(t.price)-parseInt(e.price)})):"highest"===l?O.sort((function(e,t){return parseInt(e.price)-parseInt(t.price)})):v),console.log(v)},children:[Object(h.jsx)("option",{value:"",children:"Select"}),Object(h.jsx)("option",{value:"lowest",children:"lowest to highest"}),Object(h.jsx)("option",{value:"highest",children:"highest to lowest"})]})]}),Object(h.jsx)("div",{className:"product-div",children:v&&v.map((function(e,t){return Object(h.jsx)(S,{item:e},t)}))})]})},I=function(){var e=Object(s.c)((function(e){return e.userSignin})),t=e.userInfo;console.log(e);var c=Object(o.f)(),r=Object(s.b)(),a=Object(n.useState)({name:"",email:""}),i=Object(u.a)(a,2),O=i[0],p=i[1];t&&c.push("/addProduct");var m=function(e){e.preventDefault(),/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(O.email)&&""!==O.name?(r(function(e){return function(t){try{t({type:j}),t({type:d,payload:e}),localStorage.setItem("userInfo",JSON.stringify(e))}catch(c){t({type:b,payload:c.message})}}}(O)),c.push("/addProduct")):alert("please signin properly")};return Object(h.jsx)("div",{className:"login-container",children:Object(h.jsxs)("form",{className:"login-div",onSubmit:m,children:[Object(h.jsx)("h1",{children:"Sign In"}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",placeholder:"Enter Your Name",name:"name",value:O.name,onChange:function(e){return p(Object(l.a)(Object(l.a)({},O),{},{name:e.target.value}))}})}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",placeholder:"Enter Your Email",name:"email",value:O.email,onChange:function(e){return p(Object(l.a)(Object(l.a)({},O),{},{email:e.target.value}))}})}),Object(h.jsx)("button",{onClick:m,children:"Sign In"})]})})},N=c(15),C=c(23),E=c(24),R=c(25),k=[E.a],w=Object(N.combineReducers)({userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{loading:!0};case d:return{loading:!1,userInfo:t.payload};case b:return{loading:!1,error:t.payload};case O:return{userInfo:null};default:return e}},productReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;return t.type===p?Object(l.a)(Object(l.a)({},e),{},{products:[t.payload].concat(Object(R.a)(e.products))}):e}}),D={userSignin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null},productReducer:{products:localStorage.getItem("productDetail")?JSON.parse(localStorage.getItem("productDetail")):[]}},T=Object(N.createStore)(w,D,Object(C.composeWithDevTools)(N.applyMiddleware.apply(void 0,k))),_=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(s.a,{store:T,children:Object(h.jsxs)("div",{className:"grid-container",children:[Object(h.jsx)("header",{children:Object(h.jsx)(f,{})}),Object(h.jsx)("main",{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/signin",component:I}),Object(h.jsx)(o.a,{exact:!0,path:"/",component:g}),Object(h.jsx)(o.a,{exact:!0,path:"/addProduct",component:m}),Object(h.jsx)(o.a,{exact:!0,path:"/products",component:y})]})}),Object(h.jsx)("footer",{children:Object(h.jsx)(x,{})})]})})})};i.a.render(Object(h.jsx)(v.a,{children:Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(_,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.49796376.chunk.js.map