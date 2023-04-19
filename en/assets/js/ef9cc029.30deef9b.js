"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[9978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||l;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={id:"sjfx-tbckx",title:"Chart Reference Lines",sidebar_position:3},i="Chart Reference Lines",o={unversionedId:"70 analysis/sjfx-tbckx",id:"70 analysis/sjfx-tbckx",title:"Chart Reference Lines",description:"Chart reference lines refer to a set of marker lines added to a chart to assist users in analyzing and comparing data. Users can freely add, edit, and delete reference lines to meet their needs. Through reference lines, users can gain a clearer understanding of data trends and outliers.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/70 analysis/\u56fe\u8868\u53c2\u8003\u7ebf.md",sourceDirName:"70 analysis",slug:"/70 analysis/sjfx-tbckx",permalink:"/docs/en/70 analysis/sjfx-tbckx",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/70 analysis/\u56fe\u8868\u53c2\u8003\u7ebf.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"sjfx-tbckx",title:"Chart Reference Lines",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Drill down",permalink:"/docs/en/70 analysis/kzt-jmgnjs"},next:{title:"Sorting",permalink:"/docs/en/70 analysis/sjfx-px"}},s={},c=[{value:"Types of Reference Lines",id:"types-of-reference-lines",level:2},{value:"Charts that Support Chart Reference Lines",id:"charts-that-support-chart-reference-lines",level:2},{value:"How to Set Reference Lines",id:"how-to-set-reference-lines",level:2},{value:"Deleting a Reference Line",id:"deleting-a-reference-line",level:2}],d={toc:c};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"chart-reference-lines"},"Chart Reference Lines"),(0,r.kt)("p",null,"Chart reference lines refer to a set of marker lines added to a chart to assist users in analyzing and comparing data. Users can freely add, edit, and delete reference lines to meet their needs. Through reference lines, users can gain a clearer understanding of data trends and outliers."),(0,r.kt)("h2",{id:"types-of-reference-lines"},"Types of Reference Lines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Constant Line:")," Also known as a threshold line or target line, used to mark a fixed value or range. For example, if we want to set the sales target to 1 million, we can add a constant line in a bar chart or line chart to help us compare the actual sales with the target value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mean Line:")," Also known as an average line or average reference line, used to mark the average value of data. The mean is the result of summing all the data and dividing by the number of data points, and it can help us understand the overall trend of the dataset. By adding a mean line, we can compare the differences between each data point and the overall trend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Median Line:")," Also known as a median reference line, used to mark the median value of data. The median is the value that is in the middle of the dataset when sorted in ascending or descending order. Compared to the mean, the median reflects the central location of the data distribution better, so the median line is also an important reference line when analyzing a dataset.")),(0,r.kt)("h2",{id:"charts-that-support-chart-reference-lines"},"Charts that Support Chart Reference Lines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bar Chart"),(0,r.kt)("li",{parentName:"ul"},"Column Chart"),(0,r.kt)("li",{parentName:"ul"},"Line Chart")),(0,r.kt)("h2",{id:"how-to-set-reference-lines"},"How to Set Reference Lines"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Select the "Analysis" menu in the component menu, and then select the reference line to be created from the sub-menu.'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"1681908277369",src:n(3233).Z,width:"1842",height:"868"})))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click the "New" button.'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"1681908387754",src:n(1546).Z,width:"1843",height:"857"})))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the reference line."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For a constant line, specify the value or range to be marked."),(0,r.kt)("li",{parentName:"ul"},"For a mean or median line, select the type of line and configure any additional settings, such as line color or style.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"1681908430941",src:n(6120).Z,width:"1843",height:"860"})))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the reference line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Measure"),(0,r.kt)("td",{parentName:"tr",align:null},"The Measure to use for the reference line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Width"),(0,r.kt)("td",{parentName:"tr",align:null},"The width of the reference line in pixels.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Style"),(0,r.kt)("td",{parentName:"tr",align:null},"The style of the reference line, such as dashed or dotted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to show a label for the reference line, typically displaying the value or name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Align"),(0,r.kt)("td",{parentName:"tr",align:null},"The horizontal alignment of the reference line label, such as left, center, or right.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vertical"),(0,r.kt)("td",{parentName:"tr",align:null},"The vertical alignment of the reference line label, such as top, middle, or bottom.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Font"),(0,r.kt)("td",{parentName:"tr",align:null},"The font and size of the reference line label.")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1681908493054",src:n(117).Z,width:"1842",height:"863"})),(0,r.kt)("h2",{id:"deleting-a-reference-line"},"Deleting a Reference Line"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Choose "Edit" for the reference line you want to delete from the component menu.'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"1681908591771",src:n(6877).Z,width:"1841",height:"831"})))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the delete button on the right side of the reference line."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"1681908648830",src:n(535).Z,width:"1833",height:"830"})))))}p.isMDXComponent=!0},3233:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1681908277369-80c769050b68a7e615aaeb11732469d0.png"},1546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1681908387754-bfe0a27bdaed39c20bb85579f8c9e01d.png"},6120:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1681908430941-9ae49e6a750ec89f8f86019bf5a2a268.png"},117:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1681908493054-8d1a138cd9aa72150b727d4e8fd40389.png"},6877:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1681908591771-adcfbdc0c79c63ab95c428e9bba8ccbc.png"},535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1681908648830-cabff86fa7ec9555cb10bedb3104308e.png"}}]);