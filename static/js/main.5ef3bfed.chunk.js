(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(32)},23:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(8),c=t.n(o),l=(t(23),t(1)),m=t(11),u=t(3),s=t(14),d=t(9),i=t.n(d),p=t(10),g=t.n(p),b=function(e){for(var a=[],t=0;t<e;t++)a.push(t);return a},f=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),h=function(e,a,t,r){var n=5e5+1e4*e,o=i.a.createMortgageCalculator();o.totalPrice=n,o.downPayment=.2*n,o.interestRate=.0128,o.months=360,o.taxRate=0,o.insuranceRate=.0013,o.mortgageInsuranceRate=0,o.mortgageInsuranceEnabled=!1,o.mortgageInsuranceThreshold=.1,o.additionalPrincipalPayment=0;var c=o.calculatePayment(),l=c.paymentSchedule[0].totalPayment,m=parseFloat(t)/12,u=parseFloat(r),s=parseFloat(a),d=l+s+m+20,p=c.paymentSchedule[0].interestPayment+s+m+20,b=360*(u-p)/o.downPayment,h=g()(Math.pow(1+b,1/30)-1).format("0.00%");return{price:f.format(n),down:f.format(o.downPayment),mortgage:f.format(l),management:f.format(s),tax:f.format(m),insurance:f.format(20),rental:f.format(u),cash:f.format(u-d),profit:f.format(u-p),roi:h}};function E(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=a[e],r=a[1],n=a[2],o=a[3];return b(t).map(function(e){return Object(s.a)({},h(e,r,n,o))})}()}var y=m.a.div.withConfig({displayName:"App__Styles",componentId:"o1ug4n-0"})(["padding:1rem;table{border-spacing:0;border:1px solid black;tr{:last-child{td{border-bottom:0;}}}th,td{margin:0;padding:0.5rem;border-bottom:1px solid black;border-right:1px solid black;:last-child{border-right:0;}}}"]);function v(e){var a=e.columns,t=e.data,r=Object(u.b)({columns:a,data:t},u.a),o=r.getTableProps,c=r.getTableBodyProps,l=r.headerGroups,m=r.rows,s=r.prepareRow;return n.a.createElement(n.a.Fragment,null,n.a.createElement("table",o(),n.a.createElement("thead",null,l.map(function(e){return n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(function(e){return n.a.createElement("th",e.getHeaderProps(),e.render("Header"))}))})),n.a.createElement("tbody",c(),m.slice(0,50).map(function(e,a){return s(e),n.a.createElement("tr",e.getRowProps(),e.cells.map(function(e){return n.a.createElement("td",e.getCellProps(),e.render("Cell"))}))}))))}var w=function(){var e=Object(r.useState)(E(40,123)),a=Object(l.a)(e,2),t=a[0],o=a[1],c=n.a.useMemo(function(){return[{Header:"\u623f\u4ef7",accessor:"price"},{Header:"\u9996\u4ed8",accessor:"down"},{Header:"\u6bcf\u6708\u652f\u51fa",columns:[{Header:"\u8d37\u6b3e\u6708\u4f9b",accessor:"mortgage"},{Header:"\u7ba1\u7406\u8d39",accessor:"management"},{Header:"\u5730\u7a0e",accessor:"tax"},{Header:"\u623f\u4e1c\u4fdd\u9669",accessor:"insurance"}]},{Header:"\u6bcf\u6708\u6536\u5165",columns:[{Header:"\u79df\u91d1",accessor:"rental"}]},{Header:"\u8d22\u52a1\u5206\u6790",columns:[{Header:"\u6bcf\u6708\u73b0\u91d1\u6d41",accessor:"cash"},{Header:"\u6bcf\u6708\u6536\u76ca\u6d41",accessor:"profit"},{Header:"\u79df\u91d1\u5e74\u5316\u590d\u5408\u56de\u62a5",accessor:"roi"}]}]},[]),m=Object(r.useState)(0),u=Object(l.a)(m,2),s=u[0],d=u[1],i=Object(r.useState)(0),p=Object(l.a)(i,2),g=p[0],b=p[1],f=Object(r.useState)(0),h=Object(l.a)(f,2),w=h[0],H=h[1];return n.a.createElement(y,null,n.a.createElement("div",null,n.a.createElement("h1",null,"\u52a0\u62ff\u5927Condo\u6295\u8d44\u6536\u76ca\u8ba1\u7b97"),n.a.createElement("p",null,"condo\u6295\u8d44\u5229\u5668\uff0c\u8d37\u6b3e\u630980%\uff0c30\u5e741.28%\u5229\u7387\uff0c\u571f\u5730\u8f6c\u8ba9\u7a0e\u76ee\u524d\u6682\u4e0d\u652f\u6301\u3002"),n.a.createElement("p",null,"\u6709\u4efb\u4f55\u5efa\u8bae/\u95ee\u9898\u6b22\u8fce\u8054\u7cfbNic\uff0c\u90ae\u7bb1mercurywin@gmail.com\uff0c\u6301\u7eed\u66f4\u65b0\u4e2d\u3002"),n.a.createElement("p",null,"\u7ba1\u7406\u8d39/\u6708\uff1a",n.a.createElement("input",{type:"number",name:"management",onChange:function(e){d(e.target.value),o(E(40,e.target.value,g,w))}}),"  "),n.a.createElement("p",null,"\u571f\u5730\u7a0e/\u5e74\uff1a",n.a.createElement("input",{type:"number",name:"tax",onChange:function(e){b(e.target.value),o(E(40,s,e.target.value,w))}}),"  "),n.a.createElement("p",null,"\u6708\u79df\u91d1/\u6708\uff1a",n.a.createElement("input",{type:"number",name:"rental",onChange:function(e){H(e.target.value),o(E(40,s,g,e.target.value))}}),"  ")),n.a.createElement(v,{columns:c,data:t}))};c.a.render(n.a.createElement(w,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5ef3bfed.chunk.js.map