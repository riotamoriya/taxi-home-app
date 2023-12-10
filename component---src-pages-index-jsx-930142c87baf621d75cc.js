/*! For license information please see component---src-pages-index-jsx-930142c87baf621d75cc.js.LICENSE.txt */
(self.webpackChunktaxi_home_app=self.webpackChunktaxi_home_app||[]).push([[230],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},9723:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294);var a=e=>{let{children:t}=e;return r.createElement("div",null,r.createElement("main",null,t))}},6617:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=n(1883);var o=()=>{const e=(0,a.useStaticQuery)("3000541721"),t=e.site.siteMetadata.title,n=e.site.siteMetadata.description;return r.createElement(r.Fragment,null,r.createElement("title",null,t),r.createElement("meta",{name:"description",content:n}),r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:description",content:n}),r.createElement("meta",{property:"og:site_name",content:t}),r.createElement("meta",{name:"twitter:card",content:t}),r.createElement("meta",{name:"twitter:title",content:t}),r.createElement("meta",{name:"twitter:description",content:n}))}},7431:function(e,t,n){"use strict";n.d(t,{A:function(){return r}});let r=function(){function e(){}var t=e.prototype;return t.getItem=function(e){return void 0===e&&(e="default"),localStorage.getItem(e)},t.getAllItems=function(){const e={};for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);e[n]=localStorage.getItem(n)}return e},t.setItem=function(e,t){void 0===t&&(t="default"),localStorage.setItem(t,e)},t.removeItem=function(e){void 0===e&&(e="default"),localStorage.removeItem(e)},t.clearAll=function(){localStorage.clear()},e}()},83:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return p},default:function(){return g}});var r={};n.r(r),n.d(r,{G:function(){return m}});var a=n(7294),o=n(1883),l=n(682),i=n(7054),c=n(9723),s=n(6617),u=n(7431),m="index-module--setting--57959";const f="AIzaSyAHBXoMvGeglvuefGCDrm_GFjqj3XGS1EA";console.log(f);const d=e=>{let{googleMapsApiKey:t,homeAddress:n,homeAddressLat:r,homeAddressLng:o}=e;const{0:c,1:s}=(0,a.useState)(null),{0:u,1:m}=(0,a.useState)(null),f={lat:parseFloat(r),lng:parseFloat(o)};return(0,a.useEffect)((()=>{navigator.geolocation.getCurrentPosition((e=>{s({lat:e.coords.latitude,lng:e.coords.longitude}),setTimeout((()=>{m(!0)}),2500)}))}),[]),a.createElement(l.Z,{className:"mt-5"},a.createElement("h4",{className:"title"},"【自動車】帰宅経路"),a.createElement("p",{className:"sentence"},"運転者様へ",a.createElement("br",null),a.createElement("br",null),"私の住所及び現在地からの経路は以下の通りです。",a.createElement("br",null),"この度は運転をどうぞよろしくお願いいたします。",a.createElement("br",null)),a.createElement("p",{className:"address"},a.createElement("i",null,a.createElement("u",null,"住所: ",n)),a.createElement("br",null)),c&&a.createElement(i.KJ,{googleMapsApiKey:t},a.createElement(i.b6,{center:c,zoom:14,mapContainerStyle:{width:"100%",height:"400px"}},a.createElement(i.Jx,{position:c,title:"現在地"}),a.createElement(i.Jx,{position:f,title:"目的地"}),u&&a.createElement(i.mF,{options:{origin:c,destination:f,travelMode:"DRIVING"},callback:e=>{"OK"===e.status?m(e):console.error("Directions request failed:",e.status)}}),u&&a.createElement(i.tH,{directions:u}))))},p=()=>a.createElement(s.Z,null);var g=()=>{const{0:e,1:t}=(0,a.useState)(""),{0:n,1:l}=(0,a.useState)(["0","0"]);return(0,a.useEffect)((()=>{(async()=>{const e=await new u.A,n=await JSON.parse(e.getItem());await t(n.field1),await l([n.field2,n.field3])})()}),[]),a.createElement(c.Z,null,a.createElement("main",{className:r.main},a.createElement(o.Link,{to:"/setting",className:m}),a.createElement(d,{googleMapsApiKey:f,homeAddress:e,homeAddressLat:n[0],homeAddressLng:n[1]})))}},682:function(e,t,n){"use strict";var r=n(4184),a=n.n(r),o=n(7294),l=n(6792),i=n(5893);const c=o.forwardRef((({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...o},c)=>{const s=(0,l.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:c,...o,className:a()(r,t?`${s}${u}`:s)})}));c.displayName="Container",t.Z=c},6792:function(e,t,n){"use strict";n.d(t,{pi:function(){return s},vE:function(){return c},zG:function(){return u}});var r=n(7294);n(5893);const a=["xxl","xl","lg","md","sm","xs"],o=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:l,Provider:i}=o;function c(e,t){const{prefixes:n}=(0,r.useContext)(o);return e||n[t]||t}function s(){const{breakpoints:e}=(0,r.useContext)(o);return e}function u(){const{minBreakpoint:e}=(0,r.useContext)(o);return e}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-930142c87baf621d75cc.js.map