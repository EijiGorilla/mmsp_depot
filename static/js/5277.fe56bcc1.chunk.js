/*! For license information please see 5277.fe56bcc1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmmsp_depot=self.webpackChunkmmsp_depot||[]).push([[5277],{93350:(e,t,s)=>{s.d(t,{C:()=>i,a:()=>l,b:()=>r,c:()=>n,d:()=>a,e:()=>o});const i="48px",a="320px",n="476px",r="768px",l="1152px",o="1440px"},35277:(e,t,s)=>{s.r(t),s.d(t,{CalcitePagination:()=>a,defineCustomElement:()=>n});var i=s(4580);const a=i.P,n=i.d},4580:(e,t,s)=>{s.d(t,{P:()=>w,d:()=>L});var i=s(51554),a=s(47242),n=s(46895),r=s(52655),l=s(72021),o=s(93350),c=s(64044),h=s(57601);const m="page",d="selected",g="chevron",p="disabled",u="ellipsis",v="chevron-right",f="chevron-left",b="chevron-start",I="chevron-end",x={width:{large:S(o.e),medium:S(o.a),small:S(o.b),xsmall:S(o.c),xxsmall:S(o.d)}};function S(e){return parseInt(e)}const C=11,k=9,z=7,P=5,y=1,w=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePaginationChange=(0,i.yM)(this,"calcitePaginationChange",6),this.resizeObserver=(0,l.c)("resize",(e=>e.forEach(this.resizeHandler))),this.resizeHandler=e=>{let{contentRect:{width:t}}=e;return this.setMaxItemsToBreakpoint(t)},this.firstClicked=()=>{this.startItem=1,this.emitUpdate()},this.lastClicked=()=>{this.startItem=this.lastStartItem,this.emitUpdate()},this.previousClicked=async()=>{await this.previousPage(),this.emitUpdate()},this.nextClicked=async()=>{await this.nextPage(),this.emitUpdate()},this.handlePageClick=e=>{const t=e.target;this.startItem=parseInt(t.value,10),this.emitUpdate()},this.groupSeparator=!1,this.messages=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.pageSize=20,this.scale="m",this.startItem=1,this.totalItems=0,this.defaultMessages=void 0,this.effectiveLocale="",this.maxItems=y,this.totalPages=void 0,this.lastStartItem=void 0,this.isXXSmall=void 0}onMessagesChange(){}handleTotalPages(){this.pageSize<1&&(this.pageSize=1),this.totalPages=this.totalItems/this.pageSize}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}effectiveLocaleWatcher(){n.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator}}handleLastStartItemChange(){const{totalItems:e,pageSize:t,totalPages:s}=this;this.lastStartItem=1+(e%t===0?e-t:Math.floor(s)*t)}handleIsXXSmall(){this.isXXSmall=this.maxItems===y}connectedCallback(){var e;(0,n.c)(this),(0,r.c)(this),null===(e=this.resizeObserver)||void 0===e||e.observe(this.el)}async componentWillLoad(){await(0,r.s)(this),(0,a.a)(this),this.handleTotalPages(),this.handleLastStartItemChange(),this.handleIsXXSmall()}componentDidLoad(){(0,a.s)(this),this.setMaxItemsToBreakpoint(this.el.clientWidth)}disconnectedCallback(){var e;(0,n.d)(this),(0,r.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}async setFocus(){await(0,a.c)(this),this.el.focus()}async nextPage(){this.startItem=Math.min(this.lastStartItem,this.startItem+this.pageSize)}async previousPage(){this.startItem=Math.max(1,this.startItem-this.pageSize)}setMaxItemsToBreakpoint(e){x&&e&&(e>=x.width.medium?this.maxItems=C:e>=x.width.small?this.maxItems=k:e>=x.width.xsmall?this.maxItems=z:e>=x.width.xxsmall?this.maxItems=P:this.maxItems=y)}showStartEllipsis(){return this.totalPages>this.maxItems&&Math.floor(this.startItem/this.pageSize)>this.maxItems-2-2}showEndEllipsis(){return this.totalPages>this.maxItems&&(this.totalItems-this.startItem)/this.pageSize>this.maxItems-2-1}emitUpdate(){this.calcitePaginationChange.emit()}renderEllipsis(e){return(0,i.h)("span",{class:u,"data-test-ellipsis":e,key:e},"\u2026")}renderItems(){const{totalItems:e,pageSize:t,startItem:s,maxItems:i,totalPages:a,lastStartItem:n,isXXSmall:r}=this,l=[];if(r)return l.push(this.renderPage(s)),l;const o=e>t,c=this.showStartEllipsis(),h=this.showEndEllipsis();o&&l.push(this.renderPage(1)),c&&l.push(this.renderEllipsis("start"));const m=i-2-(h?1:0)-(c?1:0);let d,g;a-1<=m?(g=1+t,d=n-t):s/t<m?(g=1+t,d=1+m*t):s+m*t>=e?(g=n-m*t,d=n-t):(g=s-t*((m-1)/2),d=s+t*((m-1)/2));for(let p=0;p<m&&g<=d;p++)l.push(this.renderPage(g)),g+=t;return h&&l.push(this.renderEllipsis("end")),l.push(this.renderPage(n)),l}renderPage(e){const{pageSize:t}=this,s=Math.floor(e/t)+(1===t?0:1);n.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const a=n.n.localize(s.toString()),r=e===this.startItem;return(0,i.h)("button",{"aria-current":r?"page":"false",class:{[m]:!0,[d]:r},onClick:this.handlePageClick,value:e},a)}renderPreviousChevron(){const{pageSize:e,startItem:t,messages:s}=this,a=1===e?t<=e:t<e;return(0,i.h)("button",{"aria-label":s.previous,class:{[g]:!0,[p]:a},"data-test-chevron":"previous",disabled:a,key:"previous",onClick:this.previousClicked},(0,i.h)("calcite-icon",{flipRtl:!0,icon:f,scale:(0,c.g)(this.scale)}))}renderNextChevron(){const{totalItems:e,pageSize:t,startItem:s,messages:a}=this,n=s+t>e;return(0,i.h)("button",{"aria-label":a.next,class:{[g]:!0,[p]:n},"data-test-chevron":"next",disabled:n,key:"next-button",onClick:this.nextClicked},(0,i.h)("calcite-icon",{flipRtl:!0,icon:v,scale:(0,c.g)(this.scale)}))}renderFirstChevron(){const{messages:e,startItem:t,isXXSmall:s}=this,a=1===t;return s?(0,i.h)("button",{"aria-label":e.first,class:{[g]:!0,[p]:a},disabled:a,key:"first-button",onClick:this.firstClicked},(0,i.h)("calcite-icon",{flipRtl:!0,icon:b,scale:(0,c.g)(this.scale)})):null}renderLastChevron(){const{messages:e,startItem:t,isXXSmall:s,lastStartItem:a}=this,n=t===a;return s?(0,i.h)("button",{"aria-label":e.last,class:{[g]:!0,[p]:n},disabled:n,key:"last-button",onClick:this.lastClicked},(0,i.h)("calcite-icon",{flipRtl:!0,icon:I,scale:(0,c.g)(this.scale)})):null}render(){return(0,i.h)(i.HY,null,this.renderFirstChevron(),this.renderPreviousChevron(),this.renderItems(),this.renderNextChevron(),this.renderLastChevron())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],totalItems:["handleTotalPages","handleLastStartItemChange"],pageSize:["handleTotalPages","handleLastStartItemChange"],effectiveLocale:["effectiveLocaleChange","effectiveLocaleWatcher"],totalPages:["handleLastStartItemChange"],maxItems:["handleIsXXSmall"]}}static get style(){return":host{display:flex;writing-mode:horizontal-tb}:host([scale=s]) .chevron,:host([scale=s]) .page,:host([scale=s]) .ellipsis{block-size:1.5rem;padding-inline:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;min-inline-size:1.5rem}:host([scale=m]) .chevron,:host([scale=m]) .page,:host([scale=m]) .ellipsis{block-size:2rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;min-inline-size:2rem}:host([scale=l]) .chevron,:host([scale=l]) .page,:host([scale=l]) .ellipsis{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-inline-size:2.75rem}:host([scale=l]) .chevron{padding-inline:0.625rem}:host([scale=l]) .page,:host([scale=l]) .ellipsis{padding-inline:0.75rem}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.chevron,.page,.ellipsis{margin:0px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-style:none;--tw-border-opacity:0;background-color:transparent;padding:0px;vertical-align:baseline;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3)}.chevron,.page{cursor:pointer;border-block:2px solid transparent}.chevron:hover,.page:hover{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-ui-border-2)}.page.selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-end-color:var(--calcite-ui-brand)}.chevron:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-brand)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron.disabled{pointer-events:none;background-color:transparent}.chevron.disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-pagination",{groupSeparator:[516,"group-separator"],messages:[1040],messageOverrides:[1040],numberingSystem:[1,"numbering-system"],pageSize:[1538,"page-size"],scale:[513],startItem:[1538,"start-item"],totalItems:[514,"total-items"],defaultMessages:[32],effectiveLocale:[32],maxItems:[32],totalPages:[32],lastStartItem:[32],isXXSmall:[32],setFocus:[64],nextPage:[64],previousPage:[64]}]);function L(){if("undefined"===typeof customElements)return;["calcite-pagination","calcite-icon"].forEach((e=>{switch(e){case"calcite-pagination":customElements.get(e)||customElements.define(e,w);break;case"calcite-icon":customElements.get(e)||(0,h.d)()}}))}L()}}]);
//# sourceMappingURL=5277.fe56bcc1.chunk.js.map