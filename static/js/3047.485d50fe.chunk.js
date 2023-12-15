"use strict";(self.webpackChunkmmsp_depot=self.webpackChunkmmsp_depot||[]).push([[3047],{25666:(e,t,n)=>{n.d(t,{cn:()=>r,j:()=>o,lK:()=>i});const r="updating";function i(e){return"updating"===e?null:e}function o(e){return"updating"===e}},831:(e,t,n)=>{n.d(t,{Qw:()=>p,Z6:()=>h,ZS:()=>f,sw:()=>d});var r=n(14921),i=n(84652),o=n(12322);const s={setAttribute(){},rollback(){},commit(){}};var l,a;function d(e,t){const n=t.attributes[e.objectIdField];if(null==n)return s;const r=e.sessions.get(n);if(r)return r;const o=(0,i.d9)(t.attributes),a=new Set,d=e.i3sOverrides.createInteractiveEditSession(n),u=new Map,c=(e,t)=>{const r=u.get(e);if(null==r){const r=t.indexOf(n);return u.set(e,r),r}return r};let p=l.EDITING;const f={setAttribute(n,r){if(p!==l.EDITING)return;const i=e.fieldsIndex.get(n);if(!i)return;const s=e.attributeStorageInfo.findIndex((e=>e.name===i.name));if(s<0)return;if(!(n in o))throw new Error('Attribute "'.concat(n,'" is not an attribute of the edited feature.'));d.setAttribute(s,r);const u=e.attributeStorageInfo[s];let f=!1;a.add(n),e.forEachNode(((n,i)=>{const o=c(n,i);if(-1===o)return;const s=e.getAttributeData(n.index);if(s){const i=s[u.name];i&&(i[o]=r,e.setAttributeData(n.index,s,t),f=!0)}})),f&&e.clearMemCache()},rollback(){if(p===l.EDITING){for(const e of a)this.setAttribute(e,o[e]);d.remove(),p=l.ROLLED_BACK,e.sessions.delete(n)}},commit(){p===l.EDITING&&(d.remove(),p=l.COMMITTED,e.sessions.delete(n))}};return e.sessions.set(n,f),f}function u(e,t,n){var r;const{gidToFeatureInfo:i,oidToFeatureInfo:o,fieldsIndex:s,objectIdField:l,globalIdField:a,featureOrIdentifierList:d}=n;if(!n.featuresResolved&&null!=d){for(const e of d){var u;const t={feature:null,oid:-1,gid:null};if("attributes"in e){t.feature=e;const n=e.attributes;if(null!=n)for(const e in n){var c;if(-1!==t.oid&&null!=t.gid)break;const r=s.normalizeFieldName(e);r===l&&(t.oid=null!==(c=n[e])&&void 0!==c?c:-1),r===a&&(t.gid=n[e])}}else t.oid=null!==(u=e.objectId)&&void 0!==u?u:-1,t.gid=e.globalId;null!=t.gid&&i.set(t.gid,t),-1!==t.oid&&o.set(t.oid,t)}n.featuresResolved=!0}return null!==(r=-1!==e?o.get(e):null)&&void 0!==r?r:null!=t?i.get(t):null}function c(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];const s=[],l={gidToFeatureInfo:new Map,oidToFeatureInfo:new Map,featuresResolved:null==n,fieldsIndex:e.fieldsIndex,objectIdField:e.objectIdField,globalIdField:e.globalIdField,featureOrIdentifierList:n};for(const p of t){var a,d,c;if(null!=p.error)continue;const e=null!==(a=p.objectId)&&void 0!==a?a:-1,t=p.globalId,n=null!==(d=-1===e||o?u(e,t,l):null)&&void 0!==d?d:{feature:null,oid:e,gid:t},f={oid:-1===e?n.oid:e,gid:null!==t&&void 0!==t?t:n.gid,feature:n.feature,result:p};if(s.push(f),-1===f.oid&&null!=f.gid&&null!=i&&(f.oid=null!==(c=i.get(f.gid))&&void 0!==c?c:-1),-1===f.oid&&null!=f.gid){let e=r.get(f.gid);null==e&&(e=[],r.set(f.gid,e)),e.push(f)}}return s}async function p(e,t){var n,i,s;const l=new Map,a=c(e,t.addedFeatures,null===(n=t.edits)||void 0===n?void 0:n.addFeatures,l),d=c(e,t.updatedFeatures,null===(i=t.edits)||void 0===i?void 0:i.updateFeatures,l),u=c(e,t.deletedFeatures,null===(s=t.edits)||void 0===s?void 0:s.deleteFeatures,l,t.globalIdToObjectId,!1);return l.size>0&&await async function(e,t){const n=e.i3sOverrides.layer.associatedLayer;if(null==(null===n||void 0===n?void 0:n.globalIdField))return;const i=n.createQuery(),{objectIdField:s,globalIdField:l}=n;i.where=Array.from(t.keys()).map((e=>"".concat(l,"='").concat(e,"'"))).join(" OR "),i.returnGeometry=!1,i.outFields=[s,l],i.cacheHint=!1;const a=await(0,r.mt)((0,o.UK)(n,i));if(!a.ok)return;const d=a.value.features;for(const r of d){const e=r.attributes[l],n=r.attributes[s];if(null==e||null==n||-1===n)continue;const i=t.get(e);if(null!=i)for(const t of i)t.oid=n}}(e,l),{adds:a.filter((e=>-1!==e.oid)),updates:d.filter((e=>-1!==e.oid)),deletes:u.filter((e=>-1!==e.oid))}}function f(e,t){const n=new Map,r=t.adds,i=t.updates,o=t.deletes;if(r.length>0)for(const a of r){var s;const e=a.oid,t=a.feature;"mesh"===(null===t||void 0===t||null===(s=t.geometry)||void 0===s?void 0:s.type)&&n.set(e,t.geometry)}if(i.length>0)for(const a of i){var l;const e=a.oid,t=a.feature;"mesh"===(null===t||void 0===t||null===(l=t.geometry)||void 0===l?void 0:l.type)&&n.set(e,t.geometry)}if(o.length>0)for(const a of o)n.set(a.oid,null);for(const[a,d]of n)e.i3sOverrides.updateGeometry(a,d)}function h(e,t){var n;const r=function(e,t){const n=t.updates;if(!n||0===n.length)return new m;const r=new m,i=new Map;for(let o=0;o<e.attributeStorageInfo.length;o++)i.set(e.attributeStorageInfo[o].name,o);return e.forEachNode(((t,i)=>{for(const o of n){if(null==o.feature)continue;const n=o.feature,s=o.oid,l=i.indexOf(s);for(const i in n.attributes){const o=e.fieldsIndex.normalizeFieldName(i),a=g(r,t.index,o),d=n.attributes[i];a.push({featureIndex:l,featureId:s,value:d})}}})),r}(e,t),i=function(e,t){const n=new Map,r=t.adds;if(!r||0===r.length||null==e.globalIdField)return n;for(const o of r){var i;const e=o.oid,t=o.feature;"mesh"===(null===t||void 0===t||null===(i=t.geometry)||void 0===i?void 0:i.type)&&n.set(e,t)}return n}(e,t);if(0===r.size&&0===i.size)return;const o=new Map;for(let f=0;f<e.attributeStorageInfo.length;f++)o.set(e.attributeStorageInfo[f].name,f);let s=!1;r.forEach(((t,n)=>{const r=e.getAttributeData(n);let i=!1;t.forEach(((t,n)=>{const l=null!=r?r[n]:null,a=o.get(n);for(const{featureIndex:r,value:o,featureId:d}of t)l&&(l[r]=o,i=!0,s=!0),e.i3sOverrides.updateAttributeValue(d,a,o)})),i&&e.setAttributeData(n,r,null)})),s&&e.clearMemCache();const{fieldsIndex:l,i3sOverrides:a,objectIdField:d,globalIdField:u}=e,c=null===(n=a.layer.associatedLayer)||void 0===n?void 0:n.infoFor3D,p=new Set(c?[...Object.values(c.assetMapFieldRoles),...Object.values(c.transformFieldRoles)]:[]);for(const[f,h]of i){a.featureAdded(f);const{attributes:e}=h;for(const t in e){if(t!==d&&t!==u&&p.has(t))continue;const n=l.normalizeFieldName(t),r=null!=n?o.get(n):null;if(null==r)continue;const i=e[t];a.updateAttributeValue(f,r,i)}}}function g(e,t,n){const r=function(e,t){const n=e.get(t);if(n)return n;const r=new y;return e.set(t,r),r}(e,t),i=null!=n&&r.get(n);if(i)return i;const o=new Array;return r.set(n,o),o}(a=l||(l={}))[a.EDITING=0]="EDITING",a[a.ROLLED_BACK=1]="ROLLED_BACK",a[a.COMMITTED=2]="COMMITTED";const y=Map,m=Map},1247:(e,t,n)=>{n.d(t,{l:()=>d});var r=n(27366),i=n(32718),o=n(49861),s=(n(25243),n(63780),n(93169),n(69912)),l=n(54054),a=n(44011);const d=e=>{let t=class extends e{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=e=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&i.Z.getLogger(this).error("Error while evaluating definitionExpression: "+e),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&i.Z.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){var e;if(null===(e=this.i3slayer)||void 0===e||!e.definitionExpression)return null;try{const e=l.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return i.Z.getLogger(this).error("definitionExpression is using non standard function"),null;const t=[],n=e.fieldNames;return(0,a.e8)(n,this.i3slayer.fields,{missingFields:t}),t.length>0?(i.Z.getLogger(this).error("definitionExpression references unknown fields: ".concat(t.join(", "))),null):(this._definitionExpressionErrors=0,e)}catch(t){return i.Z.getLogger(this).error("Failed to parse definitionExpression: "+t),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(e,t){try{return e.testFeature(t)}catch(n){return this.logError(n),!1}}_addDefinitionExpressionToQuery(e){if(!this.parsedDefinitionExpression)return e;const t=this.i3slayer.definitionExpression,n=e.clone();return n.where?n.where="(".concat(t,") AND (").concat(n.where,")"):n.where=t,n}};return(0,r._)([(0,o.Cb)()],t.prototype,"i3slayer",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],t.prototype,"parsedDefinitionExpression",null),(0,r._)([(0,o.Cb)({readOnly:!0})],t.prototype,"definitionExpressionFields",null),t=(0,r._)([(0,s.j)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],t),t}},23224:(e,t,n)=>{n.d(t,{i:()=>a});var r=n(27366),i=n(10064),o=(n(32718),n(25243),n(63780),n(93169),n(69912)),s=n(37270),l=n(24405);const a=e=>{let t=class extends e{_validateFetchPopupFeatures(e){const{layer:t}=this,{popupEnabled:n}=t;if(!n)throw new i.Z("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:t});if(!(0,l.V5)(t,e))throw new i.Z("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:t})}async prepareFetchPopupFeatures(e){}async fetchPopupFeatures(e,t){this._validateFetchPopupFeatures(t);const n=null!=t?t.clientGraphics:null;if(!n||0===n.length)return[];const r="scene"===this.layer.type&&null!=this.layer.associatedLayer?this.layer.associatedLayer:this.layer;let i=[];"fieldsIndex"in this.layer&&(i=(0,s.Lk)(this.layer.fieldsIndex,await(0,l.e7)(r,(0,l.V5)(this.layer,t)))),await this.prepareFetchPopupFeatures(i);const o=new Set,a=[],d=[];for(const l of n)(0,s.Gm)(i,l,o)?d.push(l):a.push(l);return 0===d.length?a:this.whenGraphicAttributes(d,[...o]).catch((()=>d)).then((e=>a.concat(e)))}};return t=(0,r._)([(0,o.j)("esri.views.3d.layers.support.PopupSceneLayerView")],t),t}},6777:(e,t,n)=>{n.d(t,{K:()=>y});var r=n(27366),i=n(7138),o=n(32718),s=n(39052),l=n(49861),a=n(69912),d=n(50898);const u=e=>{let t=class extends e{constructor(){super(...arguments),this._numUpdating=0,this._asyncUpdateState=new Map}get updating(){return this._numUpdating>0}autoUpdateAsync(e,t){return function(e,t){const n=()=>{o&&!l&&e(r)},r=()=>{if(!o||l)return t();o.clear(),l=!0;const e=(0,s.LJ)(o,t);return l=!1,e},i=()=>{o&&(o.destroy(),o=null)};let o=new d.M(n),l=!1;return e(r),{remove:i}}((t=>this._updateAsync(e,t)),t)}async _updateAsync(e,n){if(!this._startAsyncUpdate(e)){try{const t=await n();this._set(e,t)}catch(t){o.Z.getLogger(this).warn('Async update of "'.concat(String(e),'" failed. Async update functions should not throw exceptions.'))}this._endAsyncUpdate(e)&&this._updateAsync(e,n)}}_startAsyncUpdate(e){var t;const n=null!==(t=this._asyncUpdateState.get(e))&&void 0!==t?t:c.None;return n&c.Updating?(this._asyncUpdateState.set(e,n|c.Invalidated),!0):(++this._numUpdating,this._asyncUpdateState.set(e,n|c.Updating),!1)}_endAsyncUpdate(e){var t;--this._numUpdating;const n=(null!==(t=this._asyncUpdateState.get(e))&&void 0!==t?t:c.None)&~c.Updating;return n&c.Invalidated?(this._asyncUpdateState.set(e,n&~c.Invalidated),!0):(this._asyncUpdateState.set(e,n),!1)}};return(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updating",null),(0,r._)([(0,l.Cb)()],t.prototype,"_numUpdating",void 0),t=(0,r._)([(0,a.j)("esri.core.AsyncUpdate")],t),t};var c,p;(p=c||(c={}))[p.None=0]="None",p[p.Updating=1]="Updating",p[p.Invalidated=2]="Invalidated";let f=class extends(u(i.Z)){};f=(0,r._)([(0,a.j)("esri.core.AsyncUpdate")],f);n(25243),n(63780),n(93169);var h=n(37270);const g="esri.views.3d.layers.support.SceneLayerViewRequiredFields";let y=class extends(u(i.Z)){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:t},rendererFields:n,labelingFields:r,viewFilterFields:i}=this;return(0,h.Q0)(e,[...null!==t&&void 0!==t?t:[],...null!==n&&void 0!==n?n:[],...null!==r&&void 0!==r?r:[],...null!==i&&void 0!==i?i:[]])}constructor(e){super(e)}initialize(){this.addHandles([this.autoUpdateAsync("rendererFields",(async()=>{const{fieldsIndex:e,renderer:t}=this.layer;return t?m((n=>t.collectRequiredFields(n,e))):null})),this.autoUpdateAsync("labelingFields",(async()=>{const{layer:e}=this;return e.labelsVisible?m((t=>(0,h.Mu)(t,e))):null})),this.autoUpdateAsync("viewFilterFields",(()=>{const{layer:e,filter:t}=this.layerView;return m((n=>(0,h.Ll)(n,e,t)))}))])}};async function m(e){const t=new Set;try{return await e(t),Array.from(t).sort()}catch(n){return o.Z.getLogger(g).error(n),null}}(0,r._)([(0,l.Cb)()],y.prototype,"layerView",void 0),(0,r._)([(0,l.Cb)()],y.prototype,"layer",null),(0,r._)([(0,l.Cb)()],y.prototype,"requiredFields",null),(0,r._)([(0,l.Cb)()],y.prototype,"rendererFields",void 0),(0,r._)([(0,l.Cb)()],y.prototype,"labelingFields",void 0),(0,r._)([(0,l.Cb)()],y.prototype,"viewFilterFields",void 0),y=(0,r._)([(0,a.j)(g)],y)},48252:(e,t,n)=>{n.d(t,{v:()=>i});var r=n(37270);function i(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:t},requiredFields:n}=this;return e.outFields?(0,r.Q0)(t,[...(0,r.Lk)(t,e.outFields),...n]):(0,r.Q0)(t,n)}}}}},17006:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(27366),i=n(63780),o=n(32718),s=n(92026),l=n(25666),a=n(66978),d=n(94172),u=n(49861),c=(n(25243),n(93169),n(69912)),p=n(79803),f=n(67581);const h="esri.views.layers.SceneLayerView",g=o.Z.getLogger(h);let y=class extends f.Z{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return(0,l.lK)(this._layerFilter)}get _layerFilter(){var e;const t=null===(e=this.layer)||void 0===e?void 0:e.filter;if(null==t||t.geometries.length<1)return null;const n=this._geometryEngine;if(null==n||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return l.cn;const r=t.geometries.at(0).spatialReference,o=t.geometries.toArray().map((e=>{try{e=n.simplify(e)}catch(t){return g.warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(null==e)return null;if(e.spatialReference.equals(r))return e;try{return(0,p.project)(e,r)}catch(t){return g.warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}})).filter(i.pC).sort(((e,t)=>e.extent.xmin-t.extent.xmin)),s=new Set,a=new Array,d=new Array;for(let i of o){const e=i.extent.xmin;if(a.length=0,s.forEach((t=>{if(e>=t.extent.xmax)return d.push(t),void s.delete(t);i.extent.ymin<=t.extent.ymax&&i.extent.ymax>=t.extent.ymin&&n.intersects(i,t)&&a.push(t)})),a.length>0){a.push(i);try{i=n.union(a)}catch(u){g.warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}a.pop(),a.forEach((e=>s.delete(e)))}s.add(i)}return s.forEach((e=>d.push(e))),d.length>0?{spatialRelationship:t.spatialRelationship,geometries:d}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(null==e||e.geometries.length<=1)return!1;const t=e.geometries.at(0).spatialReference;return e.geometries.some((e=>{let{spatialReference:n}=e;return!n.equals(t)&&!(0,p.canProjectWithoutEngine)(n,t)}))}get layerFilterUpdating(){return(0,l.j)(this._layerFilter)}initialize(){const{signal:e}=this._abortController;(0,d.N1)((()=>{var e;return this.destroyed||!this._geometryEngine&&(null===(e=this.layer)||void 0===e||null===(e=e.filter)||void 0===e||null===(e=e.geometries)||void 0===e?void 0:e.length)}),e).then((async()=>{(0,a.r9)(e),this._geometryEngine=await Promise.all([n.e(9058),n.e(2170)]).then(n.bind(n,2170))})).catch(a.H9),this._projectionEngineLoaded=(0,p.isLoaded)(),(0,d.N1)((()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine),e).then((async()=>{(0,a.r9)(e),await(0,p.load)(),this._projectionEngineLoaded=!0})).catch(a.H9)}destroy(){this._abortController=(0,s.IM)(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}};(0,r._)([(0,u.Cb)()],y.prototype,"layer",void 0),(0,r._)([(0,u.Cb)()],y.prototype,"availableFields",null),(0,r._)([(0,u.Cb)()],y.prototype,"maximumNumberOfFeatures",null),(0,r._)([(0,u.Cb)({readOnly:!0})],y.prototype,"maximumNumberOfFeaturesExceeded",null),(0,r._)([(0,u.Cb)()],y.prototype,"filter",void 0),(0,r._)([(0,u.Cb)({readOnly:!0})],y.prototype,"layerFilter",null),(0,r._)([(0,u.Cb)({readOnly:!0})],y.prototype,"_layerFilter",null),(0,r._)([(0,u.Cb)()],y.prototype,"_geometryEngine",void 0),(0,r._)([(0,u.Cb)()],y.prototype,"_projectionEngineLoaded",void 0),(0,r._)([(0,u.Cb)()],y.prototype,"_filterNeedsProjectionEngine",null),(0,r._)([(0,u.Cb)()],y.prototype,"layerFilterUpdating",null),y=(0,r._)([(0,c.j)(h)],y);const m=y}}]);
//# sourceMappingURL=3047.485d50fe.chunk.js.map