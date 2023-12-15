"use strict";(self.webpackChunkmmsp_depot=self.webpackChunkmmsp_depot||[]).push([[6039],{45900:(t,e,n)=>{n.d(e,{m:()=>h});var i=n(27366),a=n(7138),l=n(32718),o=n(66978),r=n(49861),s=(n(25243),n(63780),n(93169),n(69912)),u=n(99034),c=n(92853);let h=class extends a.Z{constructor(t){super(t),this.manipulators=new c.D,this.automaticManipulatorSelection=!0,this.hasGrabbedManipulators=!1,this.hasHoveredManipulators=!1,this.firstGrabbedManipulator=null,this.created=!1,this.removeIncompleteOnCancel=!0,this._editableFlags=new Map([[u.bH.MANAGER,!0],[u.bH.USER,!0]]),this._creationFinishedResolver=(0,o.hh)()}get active(){return null!=this.view&&this.view.activeTool===this}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this._syncVisible())}get editable(){return this.getEditableFlag(u.bH.USER)}set editable(t){this.setEditableFlag(u.bH.USER,t)}get updating(){return!1}get cursor(){return null}get hasFocusedManipulators(){return this.hasGrabbedManipulators||this.hasHoveredManipulators}destroy(){this.manipulators.destroy(),this._set("view",null)}onAdd(){this._syncVisible()}activate(){null!=this.view?(this.view.focus(),this.onActivate()):l.Z.getLogger(this).error("Can't activate tool if view is not defined.")}deactivate(){this.onDeactivate()}handleInputEvent(t){this.onInputEvent(t)}handleInputEventAfter(t){this.onInputEventAfter(t)}setEditableFlag(t,e){this._editableFlags.set(t,e),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),t===u.bH.USER&&this.notifyChange("editable"),this.onEditableChange(),this.onManipulatorSelectionChanged()}getEditableFlag(t){var e;return null!==(e=this._editableFlags.get(t))&&void 0!==e&&e}whenCreated(){return this._creationFinishedResolver.promise}onManipulatorSelectionChanged(){}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(t){}onInputEventAfter(t){}get internallyEditable(){return this.getEditableFlag(u.bH.USER)&&this.getEditableFlag(u.bH.MANAGER)}finishToolCreation(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)}_syncVisible(){if(this.initialized)if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)}_show(){this._updateManipulatorAttachment(),this.onShow()}_hide(){this._updateManipulatorAttachment(),this.onHide()}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach()}};(0,i._)([(0,r.Cb)({constructOnly:!0})],h.prototype,"view",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],h.prototype,"active",null),(0,i._)([(0,r.Cb)({value:!0})],h.prototype,"visible",null),(0,i._)([(0,r.Cb)({value:!0})],h.prototype,"editable",null),(0,i._)([(0,r.Cb)({readOnly:!0})],h.prototype,"manipulators",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],h.prototype,"updating",null),(0,i._)([(0,r.Cb)()],h.prototype,"cursor",null),(0,i._)([(0,r.Cb)({readOnly:!0})],h.prototype,"automaticManipulatorSelection",void 0),(0,i._)([(0,r.Cb)()],h.prototype,"hasFocusedManipulators",null),(0,i._)([(0,r.Cb)()],h.prototype,"hasGrabbedManipulators",void 0),(0,i._)([(0,r.Cb)()],h.prototype,"hasHoveredManipulators",void 0),(0,i._)([(0,r.Cb)()],h.prototype,"firstGrabbedManipulator",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],h.prototype,"created",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],h.prototype,"removeIncompleteOnCancel",void 0),h=(0,i._)([(0,s.j)("esri.views.interactive.InteractiveToolBase")],h)},92853:(t,e,n)=>{n.d(e,{D:()=>l});var i,a=n(80987);!function(t){t[t.WhenToolEditable=0]="WhenToolEditable",t[t.WhenToolNotEditable=1]="WhenToolNotEditable",t[t.Always=2]="Always"}(i||(i={}));class l{constructor(){this._isToolEditable=!0,this._manipulators=new a.Z,this._resourceContexts={manipulator3D:{}},this._attached=!1}set isToolEditable(t){this._isToolEditable=t}get length(){return this._manipulators.length}add(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.WhenToolEditable;this.addMany([t],e)}addMany(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.WhenToolEditable;for(const n of t){const t={manipulator:n,visibilityPredicate:e,attached:!1};this._manipulators.add(t),this._attached&&this._updateManipulatorAttachment(t)}}remove(t){for(let e=0;e<this._manipulators.length;e++)if(this._manipulators.at(e).manipulator===t){const t=this._manipulators.splice(e,1)[0];this._detachManipulator(t);break}}removeAll(){this._manipulators.forEach((t=>{this._detachManipulator(t)})),this._manipulators.removeAll()}attach(){this._manipulators.forEach((t=>{this._updateManipulatorAttachment(t)})),this._attached=!0}detach(){this._manipulators.forEach((t=>{this._detachManipulator(t)})),this._attached=!1}destroy(){this.detach(),this._manipulators.forEach((t=>{let{manipulator:e}=t;return e.destroy()})),this._manipulators.destroy(),this._resourceContexts=null}on(t,e){return this._manipulators.on(t,(t=>{e(t)}))}forEach(t){for(const e of this._manipulators.items)t(e)}some(t){return this._manipulators.items.some(t)}toArray(){const t=[];return this.forEach((e=>t.push(e.manipulator))),t}intersect(t,e){let n=null,i=Number.MAX_VALUE;return this._manipulators.forEach((a=>{let{manipulator:l,attached:o}=a;if(!o||!l.interactive)return;const r=l.intersectionDistance(t,e);null!=r&&r<i&&(i=r,n=l)})),n}_updateManipulatorAttachment(t){this._isManipulatorItemVisible(t)?this._attachManipulator(t):this._detachManipulator(t)}_attachManipulator(t){t.attached||(t.manipulator.attach&&t.manipulator.attach(this._resourceContexts),t.attached=!0)}_detachManipulator(t){if(!t.attached)return;const e=t.manipulator;e.grabbing=!1,e.dragging=!1,e.hovering=!1,e.selected=!1,e.detach&&e.detach(this._resourceContexts),t.attached=!1}_isManipulatorItemVisible(t){return t.visibilityPredicate===i.Always||(this._isToolEditable?t.visibilityPredicate===i.WhenToolEditable:t.visibilityPredicate===i.WhenToolNotEditable)}}},5693:(t,e,n)=>{n.d(e,{hM:()=>y,Xd:()=>v,a9:()=>m,di:()=>_,BS:()=>E,Cf:()=>f});n(59486),n(63780),n(93169);var i=n(84652),a=(n(16889),n(71353),n(79803)),l=n(37818),o=n(67331),r=n(74509),s=n(50951),u=(n(65156),n(376),n(69662));function c(t,e,n,i){var a,l;if(null==i||t.hasZ||(i=void 0),"point"===t.type)return t.x+=e,t.y+=n,t.hasZ&&null!=i&&(t.z+=i),t;if("multipoint"===t.type){const a=t.points;for(let t=0;t<a.length;t++)a[t]=h(a[t],e,n,i);return t}if("extent"===t.type)return t.xmin+=e,t.xmax+=e,t.ymin+=n,t.ymax+=n,null!=i&&(null!==(a=t.zmin)&&void 0!==a||(t.zmin=0),t.zmin+=i,null!==(l=t.zmax)&&void 0!==l||(t.zmax=0),t.zmax+=i),t;const o=(0,u.nA)(t),r="polyline"===t.type?t.paths:t.rings;for(let s=0;s<o.length;s++){const t=o[s];for(let a=0;a<t.length;a++)t[a]=h(t[a],e,n,i)}return"paths"in t?t.paths=r:t.rings=r,t}function h(t,e,n,i){return d(t,t[0]+e,t[1]+n,null!=t[2]&&null!=i?t[2]+i:void 0)}function d(t,e,n,i){const a=[e,n];return t.length>2&&a.push(null!=i?i:t[2]),t.length>3&&a.push(t[3]),a}var p=n(585);function v(t,e){return t.events.on("drag",function(t,e){let n=null,i=null;return a=>{if("cancel"===a.action)return void(null!=i&&(i.execute({action:"cancel"}),n=null,i=null));const l={action:a.action,screenStart:a.start,screenEnd:a.screenPoint};"start"===a.action&&null==n&&(n=new y,i=new y,e(t,n,i,a.pointerType,l)),null!=n&&n.execute(l),"end"===a.action&&null!=n&&(n=null,i=null)}}(t,e))}function m(t,e){let n=null;return i=>{if("start"===i.action&&(n=function(t,e,n){const i=t.geometry,r=(0,l.D)(e);if(null==i)return null;if("mesh"===i.type)return function(t,e,n,i){if(e.vertexSpace.isRelative)return function(t,e,n,i){const l=b(n.getOriginPoint(e.spatialReference),i),r=e.spatialReference;return null==l?null:{move:(e,i,s,u)=>{const h=c(l.clone(),e,i,s);if(h.spatialReference.equals(r))n.setOriginFromPoint(h);else{const t=(0,a.project)(h,r);null!=t&&n.setOriginFromPoint(t)}if(n.isGeoreferenced)t.notifyGeometryChanged();else{const e="end"===u;t.notifyMeshTransformChanged(e?{action:o.u.UpdateFastLocalOrigin}:{})}}}}(t,e,e.vertexSpace,n);if(!e.spatialReference.equals(n))return null;let l=0,r=0,u=0;return{move:(n,a,o)=>{const c=n-l,h=a-r,d=o-u;if(c||h||d){var v;const m=new p.Z(e.origin.x+c,e.origin.y+h,(null!==(v=e.origin.z)&&void 0!==v?v:0)+d,e.origin.spatialReference);e.centerAt(m,{geographic:e.vertexSpace.isRelative?void 0:i===s.JY.Global}),t.notifyGeometryChanged(),l=n,r=a,u=o}}}}(t,i,r,n);const u=b(i,r),h=i.spatialReference;return null==u?null:{move:(e,n,i)=>{const l=c(u.clone(),e,n,i);l.spatialReference.equals(h)?t.geometry=l:t.geometry=(0,a.project)(l,h)}}}(t,i.mapStart.spatialReference,e)),null==n)return null;const r=i.mapEnd.x-i.mapStart.x,u=i.mapEnd.y-i.mapStart.y,h=i.mapEnd.z-i.mapStart.z;return n.move(r,u,h,i.action),{...i,translationX:r,translationY:u,translationZ:h}}}function b(t,e){return null==t?null:t.spatialReference.equals(e)?t.clone():(0,a.project)(t,e)}function f(t){var e;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2?arguments[2]:void 0,l=null;const o=null==n||null!==(e=t.spatialReference)&&void 0!==e&&e.equals(n)?t=>t:t=>null!=t?(0,a.project)(t,n):t,r={exclude:[],...i};return e=>{if("start"===e.action&&(l=o(t.toMap(e.screenStart,r))),null==l)return null;const n=o(t.toMap(e.screenEnd,r));return null!=n?{...e,mapStart:l,mapEnd:n}:null}}function _(t,e){const n=new Map;for(const a of e)n.set(a,(0,i.d9)(t[a]));return e=>(n.forEach(((e,n)=>{t[n]=e})),e)}const g=()=>{};class y{constructor(){this.execute=g}next(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new y;return null!=t&&(this.execute=n=>{const i=t(n);null!=i&&e.execute(i)}),e}}function E(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("2d"===t.type)return t=>t;let i=null;return a=>{"start"===a.action&&(i=t.toMap(a.screenStart,{exclude:n}),null!=i&&(i.z=(0,r.Ou)(i,t,e)));const l=t.toMap(a.screenEnd,{exclude:n});null!=l&&(l.z=(0,r.Ou)(l,t,e));const o=null!=i&&null!=l?{sceneStart:i,sceneEnd:l}:null;return{...a,scenePoints:o}}}}}]);
//# sourceMappingURL=6039.1ea886dd.chunk.js.map