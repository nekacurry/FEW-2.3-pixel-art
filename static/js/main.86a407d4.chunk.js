(this["webpackJsonppixel-art"]=this["webpackJsonppixel-art"]||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),o=n(8),a=n.n(o),i=(n(21),n(22),n(5)),u="SET_COLOR",l="PICK_COLOR",s="FILL_COLOR",d="RESET",j=n(2);var b=function(){var t=Object(i.c)((function(t){return t.grid})),e=Object(i.c)((function(t){return t.color})),n=Object(i.b)();return Object(j.jsx)("div",{className:"Grid",children:t.map((function(t,c){return Object(j.jsx)("div",{style:{backgroundColor:t},onClick:function(){return n(function(t,e){return{type:u,payload:{color:t,index:e}}}(e,c))}})}))})},f=n(16);var p=function(){var t=Object(c.useState)("red"),e=Object(f.a)(t,2),n=e[0],r=e[1],o=Object(i.b)();return Object(j.jsx)("div",{className:"picker",children:Object(j.jsx)("input",{type:"color",value:n,onChange:function(t){r(t.target.value),o(function(t){return{type:l,payload:{color:t}}}(t.target.value))}})})};var O=function(){var t=Object(i.c)((function(t){return t})).color,e=Object(i.b)();return Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{className:"fill-button",onClick:function(){return e(function(t){return{type:s,payload:{color:t}}}(t))},children:"Fill"}),Object(j.jsx)("button",{className:"reset-button",onClick:function(t){e({type:d})},children:"Reset"})]})};var h=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("h1",{className:"App-title",children:"Pixely Redux"})}),Object(j.jsx)(b,{}),Object(j.jsx)(p,{}),Object(j.jsx)(O,{})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),o(t),a(t)}))},x=n(10),y=function(){for(var t=[],e=0;e<100;e+=1)t.push("#f7f7f7");return t},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y(),e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return t.map((function(t,n){return e.payload.index===n?e.payload.color:t}));case s:return t.map((function(){return e.payload.color}));case d:return y();default:return t}},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return e.payload.color;default:return t}},C=Object(x.a)({grid:g,color:m}),N=n(15),k=Object(x.b)(C);a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(N.a,{children:Object(j.jsx)(i.a,{store:k,children:Object(j.jsx)(h,{})})})}),document.getElementById("root")),v()}},[[29,1,2]]]);
//# sourceMappingURL=main.86a407d4.chunk.js.map