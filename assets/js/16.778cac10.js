(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{309:function(t,e){t.exports=function(t){return null==t}},327:function(t,e,n){},352:function(t,e,n){var r=n(26),o=n(12),i=n(22);t.exports=function(t){return"string"==typeof t||!o(t)&&i(t)&&"[object String]"==r(t)}},353:function(t,e,n){"use strict";n(327)},380:function(t,e,n){"use strict";n.r(e);n(29);var r=n(19),o=n(352),i=n.n(o),s=n(309),a=n.n(s),p={name:"PageNav",props:["sidebarItems"],computed:{prev(){return u(l.PREV,this)},next(){return u(l.NEXT,this)}},methods:{showTooltip(t){const e=document.body.clientWidth,n=t.clientX,r=t.target.querySelector(".tooltip");if(!r)return;const o=r.style;n<e/2?(o.right=null,o.left=n+10+"px"):(o.left=null,o.right=e-n+10+"px"),o.top=t.clientY+10+"px"}}};const l={NEXT:{resolveLink:function(t,e){return c(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return c(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function u(t,{$themeConfig:e,$page:n,$route:o,$site:s,sidebarItems:p}){const{resolveLink:l,getThemeLinkConfig:u,getPageLinkConfig:c}=t,v=u(e),g=c(n),f=a()(g)?v:g;return!1===f?void 0:i()(f)?Object(r.l)(s.pages,f,o.path):l(n,p)}function c(t,e,n){const r=[];!function t(e,n){for(let r=0,o=e.length;r<o;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(let e=0;e<r.length;e++){const o=r[e];if("page"===o.type&&o.path===decodeURIComponent(t.path))return r[e+n]}}var v=p,g=(n(353),n(0)),f=Object(g.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-nav-wapper"},[!1!==t.$themeConfig.pageButton&&(t.prev||t.next)?e("div",{staticClass:"page-nav-centre-wrap"},[t.prev?e("router-link",{staticClass:"page-nav-centre page-nav-centre-prev",attrs:{to:t.prev.path},nativeOn:{mouseenter:function(e){return t.showTooltip(e)},mousemove:function(e){return t.showTooltip(e)}}},[e("div",{staticClass:"tooltip"},[t._v(t._s(t.prev.title||t.prev.path))])]):t._e(),t._v(" "),t.next?e("router-link",{staticClass:"page-nav-centre page-nav-centre-next",attrs:{to:t.next.path},nativeOn:{mouseenter:function(e){return t.showTooltip(e)},mousemove:function(e){return t.showTooltip(e)}}},[e("div",{staticClass:"tooltip"},[t._v(t._s(t.next.title||t.next.path))])]):t._e()],1):t._e(),t._v(" "),t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?e("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},[t.next?e("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("→\n      ")],1):t._e()])]):t._e()])}),[],!1,null,null,null);e.default=f.exports}}]);