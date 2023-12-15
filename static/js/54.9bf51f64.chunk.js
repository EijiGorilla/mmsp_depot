"use strict";(self.webpackChunkmmsp_depot=self.webpackChunkmmsp_depot||[]).push([[54],{70054:(e,t,o)=>{o.r(t),o.d(t,{default:()=>F});var r=o(27366),i=o(42265),l=o(76200),s=(o(51508),o(97642)),n=o(66978),a=o(35995),y=o(49861),p=(o(25243),o(63780),o(93169),o(38511)),u=o(69912),d=o(53866),h=o(92975),c=o(30651),v=o(6693),m=o(6061),S=o(29598),b=o(71684),f=o(56811),g=o(45948),C=o(22061),_=o(16851),k=o(91946),G=o(16072),w=o(61459);const R=["atom","xml"],Z={base:C.Z,key:"type",typeMap:{"simple-line":_.Z},errorContext:"symbol"},P={base:C.Z,key:"type",typeMap:{"picture-marker":k.Z,"simple-marker":G.Z},errorContext:"symbol"},x={base:C.Z,key:"type",typeMap:{"simple-fill":w.Z},errorContext:"symbol"};let j=class extends((0,v.h)((0,b.Q)((0,m.q)((0,S.I)((0,f.M)((0,s.R)(c.Z))))))){constructor(){super(...arguments),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{var t;const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&(null===(t=o.outline)||void 0===t?void 0:t.style.includes("esriSFS"))&&(o.outline.style="esriSLSSolid")})),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,a.vt)(this.url,R)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(n.r9).then((()=>this._fetchService(t))).then((e=>{this.read(e,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const o=this.spatialReference,{data:r}=await(0,l.Z)(i.default.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,h.oR)(o)?void 0:null!==(t=o.wkid)&&void 0!==t?t:JSON.stringify(o)},signal:e});return r}_hasGeometry(e){var t,o;return null!==(t=null===(o=this.featureCollections)||void 0===o?void 0:o.some((t=>{var o,r;return(null===(o=t.featureSet)||void 0===o?void 0:o.geometryType)===e&&(null===(r=t.featureSet.features)||void 0===r?void 0:r.length)>0})))&&void 0!==t&&t}};(0,r._)([(0,y.Cb)()],j.prototype,"description",void 0),(0,r._)([(0,y.Cb)()],j.prototype,"featureCollections",void 0),(0,r._)([(0,p.r)("service","featureCollections",["featureCollection.layers"])],j.prototype,"readFeatureCollections",null),(0,r._)([(0,y.Cb)({type:d.Z,json:{name:"lookAtExtent"}})],j.prototype,"fullExtent",void 0),(0,r._)([(0,y.Cb)(g.id)],j.prototype,"id",void 0),(0,r._)([(0,y.Cb)(g.rn)],j.prototype,"legendEnabled",void 0),(0,r._)([(0,y.Cb)({types:Z,json:{write:!0}})],j.prototype,"lineSymbol",void 0),(0,r._)([(0,y.Cb)({type:["show","hide"]})],j.prototype,"listMode",void 0),(0,r._)([(0,y.Cb)({types:P,json:{write:!0}})],j.prototype,"pointSymbol",void 0),(0,r._)([(0,y.Cb)({types:x,json:{write:!0}})],j.prototype,"polygonSymbol",void 0),(0,r._)([(0,y.Cb)({type:["GeoRSS"]})],j.prototype,"operationalLayerType",void 0),(0,r._)([(0,y.Cb)(g.HQ)],j.prototype,"url",void 0),(0,r._)([(0,y.Cb)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],j.prototype,"title",null),(0,r._)([(0,y.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],j.prototype,"type",void 0),j=(0,r._)([(0,u.j)("esri.layers.GeoRSSLayer")],j);const F=j}}]);
//# sourceMappingURL=54.9bf51f64.chunk.js.map