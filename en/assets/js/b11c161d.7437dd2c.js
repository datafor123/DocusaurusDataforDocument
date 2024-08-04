"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[6121],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return r?a.createElement(g,o(o({ref:t},l),{},{components:r})):a.createElement(g,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={id:"datasource-JDBC-driver",title:"JDBC Driver Management",sidebar_position:70},o="JDBC Driver Management",s={unversionedId:"40 datasource/datasource-JDBC-driver",id:"40 datasource/datasource-JDBC-driver",title:"JDBC Driver Management",description:"Datafor supports managing and configuring different versions of JDBC drivers to support various versions of databases. This feature ensures that your database connections are compatible with the corresponding database versions, preventing connection issues due to driver version mismatches.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/40 datasource/70 JDBC\u9a71\u52a8\u7ba1\u7406.md",sourceDirName:"40 datasource",slug:"/40 datasource/datasource-JDBC-driver",permalink:"/docs/en/40 datasource/datasource-JDBC-driver",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/40 datasource/70 JDBC\u9a71\u52a8\u7ba1\u7406.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{id:"datasource-JDBC-driver",title:"JDBC Driver Management",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"JDBC Timezone Setting",permalink:"/docs/en/40 datasource/datasource-sqsz"},next:{title:"Calculated Columns",permalink:"/docs/en/50 model/model-calculated-field"}},d={},c=[{value:"Instructions",id:"instructions",level:2},{value:"Accessing the Driver Management Interface",id:"accessing-the-driver-management-interface",level:3},{value:"Adding a New JDBC Driver",id:"adding-a-new-jdbc-driver",level:3},{value:"Updating an Existing JDBC Driver",id:"updating-an-existing-jdbc-driver",level:3},{value:"Deleting a JDBC Driver",id:"deleting-a-jdbc-driver",level:3}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"jdbc-driver-management"},"JDBC Driver Management"),(0,n.kt)("p",null,"Datafor supports managing and configuring different versions of JDBC drivers to support various versions of databases. This feature ensures that your database connections are compatible with the corresponding database versions, preventing connection issues due to driver version mismatches."),(0,n.kt)("h2",{id:"instructions"},"Instructions"),(0,n.kt)("h3",{id:"accessing-the-driver-management-interface"},"Accessing the Driver Management Interface"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to the Datafor platform.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Navigate to the settings page and select "JDBC Driver".'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/datasource/1722756248069.png",width:"100%"})))),(0,n.kt)("h3",{id:"adding-a-new-jdbc-driver"},"Adding a New JDBC Driver"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Click the "New" button.')),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/datasource/1722756292343.png",width:"100%"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the pop-up window:"),(0,n.kt)("p",{parentName:"li"},"Enter the ",(0,n.kt)("strong",{parentName:"p"},"Driver Name"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Database Type")," (e.g., MySQL, PostgreSQL, etc.).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fill in the ",(0,n.kt)("strong",{parentName:"p"},"Driver Class")," information.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Upload the appropriate version of the JDBC driver file (.jar file).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Click the "OK" button to complete the driver addition.'))),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/datasource/1722756315643.png",width:"60%"})))),(0,n.kt)("h3",{id:"updating-an-existing-jdbc-driver"},"Updating an Existing JDBC Driver"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'In the driver management interface, find the driver that needs updating. Click the "Edit" menu.')),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/datasource/1722756353546.png",width:"100%"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Upload the new driver file and update other information. Click the "OK" button to complete the driver update.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/datasource/1722756379921.png",width:"60%"})))),(0,n.kt)("h3",{id:"deleting-a-jdbc-driver"},"Deleting a JDBC Driver"),(0,n.kt)("p",null,'In the driver list\'s action menu, select the "Delete" menu.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/datasource/1722756404187.png",width:"100%"})))}p.isMDXComponent=!0}}]);