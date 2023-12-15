/*! For license information please see 2355.52202898.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmmsp_depot=self.webpackChunkmmsp_depot||[]).push([[2355],{92355:(e,t,i)=>{i.r(t),i.d(t,{CalciteMeter:()=>P,defineCustomElement:()=>C});var a=i(51554),l=i(47242),n=i(85955),r=i(46895),s=i(92358),c=i(72021);const o="container",h="fill",d="step-line",b="label",u="label-hidden",g="label-range",m="label-value",v="unit-label",p="steps-visible",L="value-visible",f="fill-success",y="fill-warning",w="fill-danger",x=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.labelFlipMax=.8,this.labelFlipProximity=.15,this.maxPercent=100,this.minPercent=0,this.resizeObserver=(0,c.c)("resize",(()=>this.resizeHandler())),this.formatLabel=(e,t)=>{if("percent"===t){if(!this.percentFormatting){const e=(0,r.g)(this.effectiveLocale),t=new Intl.NumberFormat(e,{useGrouping:this.groupSeparator,style:"percent"});this.percentFormatting={formatter:t,locale:e}}return this.percentFormatting.formatter.format(e)}return r.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},r.n.localize(e.toString())},this.appearance="outline-fill",this.disabled=!1,this.fillType="range",this.form=void 0,this.groupSeparator=!1,this.high=void 0,this.label=void 0,this.low=void 0,this.max=100,this.min=0,this.name=void 0,this.numberingSystem=void 0,this.rangeLabels=!1,this.rangeLabelType="percent",this.scale="m",this.unitLabel="",this.value=void 0,this.valueLabel=!1,this.valueLabelType="percent",this.currentPercent=void 0,this.effectiveLocale=void 0,this.highActive=void 0,this.highPercent=void 0,this.lowActive=void 0,this.lowPercent=void 0}handleRangeChange(){this.calculateValues(),this.updateLabels()}handleLabelChange(){this.updateLabels()}async componentWillLoad(){(0,l.a)(this),this.calculateValues(),(0,n.a)(this,this.value)}componentDidLoad(){(0,l.s)(this),this.updateLabels()}connectedCallback(){var e;(0,r.c)(this),(0,n.c)(this),null===(e=this.resizeObserver)||void 0===e||e.observe(this.el)}disconnectedCallback(){var e;(0,r.d)(this),(0,n.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}resizeHandler(){this.updateLabels()}updateLabels(){this.valueLabelEl&&this.determineValueLabelPosition(),this.rangeLabels&&this.determineVisibleLabels()}calculateValues(){const{min:e,max:t,low:i,high:a,value:l}=this,n=100*(i-e)/(t-e),r=100*(a-e)/(t-e),s=100*(l-e)/(t-e);(!i||i<e||i>a||i>t)&&(this.low=e),(!a||a>t||a<i||a<e)&&(this.high=t),l||(this.value=e),this.lowPercent=n,this.highPercent=r,this.currentPercent=l?s:0,this.lowActive=!!i&&i>e&&(!l||i>l)&&(!a||i<a),this.highActive=!!a&&e<=a&&a<t&&(!l||a>l)&&(!i||a>i)}getMeterKindCssClass(){const{low:e,high:t,min:i,max:a,value:l}=this,n=e||i,r=t||a,s=l<r;return!l||!e&&s||l<n?f:l>=n&&s?y:l>=r?w:f}intersects(e,t){return e&&t&&(0,s.l)(e.getBoundingClientRect(),t.getBoundingClientRect())}determineVisibleLabels(){const{minLabelEl:e,lowLabelEl:t,highLabelEl:i,maxLabelEl:a}=this,l=this.intersects(i,a),n=this.intersects(t,i),r=this.intersects(t,a),s=this.intersects(e,i),c=this.intersects(e,t),o=this.intersects(e,a),h=u;t&&(c||r||n?t.classList.add(h):t.classList.remove(h)),i&&(s||r||l?i.classList.add(h):i.classList.remove(h)),e&&a&&(o?a.classList.add(h):a.classList.remove(h))}determineValueLabelPosition(){const{valueLabelEl:e,meterContainerEl:t,currentPercent:i}=this,a=i>100?100:i>0?i:0;a+100*(e.getBoundingClientRect().width-0)/(t.getBoundingClientRect().width-0)>=100?(e.style.insetInlineEnd="0%",e.style.removeProperty("inset-inline-start")):(e.style.insetInlineStart="".concat(a,"% "),e.style.removeProperty("inset-inline-end"))}renderMeterFill(){const{currentPercent:e,fillType:t}=this,i=this.getMeterKindCssClass();return(0,a.h)("div",{class:{[h]:!0,[i]:"single"!==t},style:{width:"".concat(e,"%")}})}renderRangeLine(e){const t={insetInlineStart:"".concat(e,"%")};return(0,a.h)("div",{class:d,style:t})}renderValueLabel(){const{currentPercent:e,valueLabelType:t,unitLabel:i,value:l}=this,n=this.formatLabel("percent"===t?e/100:l||0,t);return(0,a.h)("div",{class:{[b]:!0,[m]:!0},key:"low-label-line",ref:e=>this.valueLabelEl=e},n,i&&"percent"!==t&&(0,a.h)("span",{class:v},"\xa0",i))}renderMinLabel(){const{rangeLabelType:e,min:t,minPercent:i,unitLabel:l}=this,n={insetInlineStart:"".concat(i,"%")},r=this.formatLabel("percent"===e?i:t,e);return(0,a.h)("div",{class:{[b]:!0,[g]:!0},key:"min-label-line",style:n,ref:e=>this.minLabelEl=e},r,l&&"percent"!==e&&(0,a.h)("span",{class:v},"\xa0",l))}renderLowLabel(){const{rangeLabelType:e,low:t,lowPercent:i,highPercent:l,labelFlipProximity:n}=this,r=t?this.formatLabel("percent"===e?i/100:t,e):"",s={insetInlineStart:"".concat(i,"%")},c={insetInlineEnd:"".concat(100-i,"%")},o=(l-i)/100<n?c:s;return(0,a.h)("div",{class:{[b]:!0,[g]:!0},key:"low-label-line",style:o,ref:e=>this.lowLabelEl=e},r)}renderHighLabel(){const{rangeLabelType:e,high:t,highPercent:i,labelFlipMax:l}=this,n=t?this.formatLabel("percent"===e?i/100:t,e):"",r={insetInlineStart:"".concat(i,"%")},s={insetInlineEnd:"".concat(100-i,"%")},c=i/100>=l?s:r;return(0,a.h)("div",{class:{[b]:!0,[g]:!0},key:"high-label-line",style:c,ref:e=>this.highLabelEl=e},n)}renderMaxLabel(){const{rangeLabelType:e,max:t,maxPercent:i}=this,l={insetInlineEnd:"".concat(100-i,"%")},n=this.formatLabel("percent"===e?i/100:t,e);return(0,a.h)("div",{class:{[b]:!0,[g]:!0},key:"max-label-line",style:l,ref:e=>this.maxLabelEl=e},n)}render(){const{appearance:e,currentPercent:t,highActive:i,highPercent:l,label:n,lowActive:r,lowPercent:s,max:c,maxPercent:h,min:d,minPercent:b,rangeLabels:u,rangeLabelType:g,unitLabel:m,value:v,valueLabel:f,valueLabelType:y}=this,w=this.formatLabel(t/100,"percent"),x="".concat(v," ").concat(m),k="percent"===y?w:m?x:void 0;return(0,a.h)(a.AA,null,(0,a.h)("div",{"aria-label":n,"aria-valuemax":"percent"===g?h:c,"aria-valuemin":"percent"===g?b:d,"aria-valuenow":"percent"===y?t:v,"aria-valuetext":k,class:{[o]:!0,[p]:u,[L]:f,[e]:"outline-fill"!==e},role:"meter",ref:e=>this.meterContainerEl=e},this.renderMeterFill(),f&&this.renderValueLabel(),r&&this.renderRangeLine(s),i&&this.renderRangeLine(l),u&&this.renderMinLabel(),u&&r&&this.renderLowLabel(),u&&i&&this.renderHighLabel(),u&&this.renderMaxLabel()))}get el(){return this}static get watchers(){return{min:["handleRangeChange"],max:["handleRangeChange"],low:["handleRangeChange"],high:["handleRangeChange"],value:["handleRangeChange"],rangeLabels:["handleLabelChange"],rangeLabelType:["handleLabelChange"],unitLabel:["handleLabelChange"],valueLabel:["handleLabelChange"],valueLabelType:["handleLabelChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host{display:flex;--calcite-meter-space-internal:0.125rem;--calcite-meter-height-internal:1rem;--calcite-meter-font-size-internal:var(--calcite-font-size--1)}:host([scale=s]){--calcite-meter-height-internal:0.75rem;--calcite-meter-font-size-internal:var(--calcite-font-size--2)}:host([scale=l]){--calcite-meter-height-internal:1.5rem;--calcite-meter-font-size-internal:var(--calcite-font-size-0)}.container{position:relative;margin:0px;display:flex;inline-size:100%;align-items:center;block-size:var(--calcite-meter-height-internal);background-color:var(--calcite-ui-foreground-2);border:1px solid var(--calcite-ui-border-3);border-radius:var(--calcite-meter-height-internal)}.solid{border:1px solid var(--calcite-ui-foreground-3);background-color:var(--calcite-ui-foreground-3)}.outline{background-color:transparent}.value-visible{margin-block-start:1.5rem}.steps-visible{margin-block-end:1.5rem}.step-line{position:absolute;inset-block:0px;display:block;inline-size:var(--calcite-meter-space-internal);background-color:var(--calcite-ui-border-3)}.label{position:absolute;font-size:var(--calcite-meter-font-size-internal)}.label-hidden{visibility:hidden;opacity:0}.label-value{inset-block-end:calc(100% + 0.5em);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-1)}.label-range{color:var(--calcite-ui-text-3);inset-block-start:calc(100% + 0.5em)}.unit-label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3)}.label-value .unit-label{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.fill{position:absolute;z-index:var(--calcite-app-z-index);display:block;background-color:var(--calcite-ui-brand);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-inline-start:var(--calcite-meter-space-internal);inset-block:var(--calcite-meter-space-internal);border-radius:var(--calcite-meter-height-internal);max-inline-size:calc(100% - var(--calcite-meter-space-internal) * 2);min-inline-size:calc(var(--calcite-meter-height-internal) - var(--calcite-meter-space-internal) * 2);transition-property:inline-size, background-color, box-shadow}.fill-danger{background-color:var(--calcite-ui-danger)}.fill-success{background-color:var(--calcite-ui-success)}.fill-warning{background-color:var(--calcite-ui-warning)}.solid .fill{inset-block:0;inset-inline-start:0;max-inline-size:100%;min-inline-size:calc(var(--calcite-meter-height-internal));box-shadow:0 0 0 1px var(--calcite-ui-brand)}.solid .fill-danger{box-shadow:0 0 0 1px var(--calcite-ui-danger)}.solid .fill-success{box-shadow:0 0 0 1px var(--calcite-ui-success)}.solid .fill-warning{box-shadow:0 0 0 1px var(--calcite-ui-warning)}"}},[1,"calcite-meter",{appearance:[513],disabled:[516],fillType:[513,"fill-type"],form:[513],groupSeparator:[516,"group-separator"],high:[1538],label:[1],low:[1538],max:[514],min:[514],name:[513],numberingSystem:[1,"numbering-system"],rangeLabels:[516,"range-labels"],rangeLabelType:[513,"range-label-type"],scale:[513],unitLabel:[1,"unit-label"],value:[1026],valueLabel:[516,"value-label"],valueLabelType:[513,"value-label-type"],currentPercent:[32],effectiveLocale:[32],highActive:[32],highPercent:[32],lowActive:[32],lowPercent:[32]}]);function k(){if("undefined"===typeof customElements)return;["calcite-meter"].forEach((e=>{if("calcite-meter"===e)customElements.get(e)||customElements.define(e,x)}))}k();const P=x,C=k}}]);
//# sourceMappingURL=2355.52202898.chunk.js.map