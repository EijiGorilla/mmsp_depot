"use strict";(self.webpackChunkmmsp_depot=self.webpackChunkmmsp_depot||[]).push([[1491],{35582:(e,t,i)=>{i.d(t,{M:()=>g,b:()=>h});var n,s,a=i(30168),o=i(41012),r=i(95276),l=i(58406),c=i(98634),d=i(64201),u=i(4760);function h(e){const t=new d.kG,{vertex:i,fragment:h}=t;(0,o.Sv)(i,e),i.uniforms.add(new l.p("width",(e=>e.width))),t.attributes.add(u.T.POSITION,"vec3"),t.attributes.add(u.T.NORMAL,"vec3"),t.attributes.add(u.T.UV0,"vec2"),t.attributes.add(u.T.AUXPOS1,"float"),t.varyings.add("vtc","vec2"),t.varyings.add("vlength","float"),t.varyings.add("vradius","float"),i.code.add((0,c.H)(n||(n=(0,a.Z)(["void main(void) {\nvec3 bitangent = normal;\nvtc = uv0;\nvlength = auxpos1;\nvradius = 0.5 * width;\nvec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);\ngl_Position = proj * pos;\n}"])))),h.uniforms.add(new l.p("outlineSize",(e=>e.outlineSize)),new r.N("outlineColor",(e=>e.outlineColor)),new l.p("stripeLength",(e=>e.stripeLength)),new r.N("stripeEvenColor",(e=>e.stripeEvenColor)),new r.N("stripeOddColor",(e=>e.stripeOddColor)));const g=1/Math.sqrt(2);return h.code.add((0,c.H)(s||(s=(0,a.Z)(["\n    const float INV_SQRT2 = ",";\n\n    vec4 arrowColor(vec2 tc, float len) {\n      float d = INV_SQRT2 * (tc.x - abs(tc.y));\n      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));\n      d = min(d, 1.0 - abs(tc.y));\n\n      if (d < 0.0) {\n        return vec4(0.0);\n      } else if (d < outlineSize) {\n        return outlineColor;\n      } else {\n        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;\n      }\n    }\n\n    void main(void) {\n      vec2 ntc = vec2(vtc.x / vradius, vtc.y);\n      vec4 color = arrowColor(ntc, vlength / vradius);\n      if (color.a == 0.0) {\n        discard;\n      }\n      fragColor = color;\n    }\n  "])),c.H.float(g))),t}const g=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}))},61491:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Re});var n=i(27366),s=i(7138),a=i(92026),o=i(49861),r=(i(25243),i(63780),i(93169),i(69912)),l=i(77671),c=i(98074),d=i(51817),u=i(32718),h=i(47898),g=i(94172),_=i(11186),p=i(71353),v=i(2170),m=i(29909),b=i(79803),w=i(29691),y=i(68859),C=i(67751),L=i(15559),P=i(33906),f=i(39409);const S="esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController",E=u.Z.getLogger(S);let A=class extends s.Z{constructor(e){super(e),this._unitNormalizer=new f.D,this._tempStartPosition=(0,p.c)(),this._tempEndPosition=(0,p.c)(),this._tempCornerPosition=(0,p.c)()}initialize(){const e=this.view.spatialReference,t=(0,w.rS)(e),i=t===w.GG?w.wY:t;this._sphericalPCPF=i;const n=(0,b.canProjectWithoutEngine)(e,i);this._unitNormalizer.spatialReference=n?i:e,this.addHandles([(0,g.YP)((()=>({viewData:this.viewData,startPoint:this.analysis.startPoint})),(e=>{let{viewData:t,startPoint:i}=e;t.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(i)}),g.tX),(0,g.YP)((()=>({viewData:this.viewData,endPoint:this.analysis.endPoint})),(e=>{let{viewData:t,endPoint:i}=e;t.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(i)}),g.tX),(0,g.YP)((()=>({result:this._computedResult,viewData:this.viewData})),(e=>{let{result:t,viewData:i}=e;i.result=t}),g.tX)])}_applyProjectionAndElevationAlignment(e){if(null==e)return e;const{spatialReference:t,elevationProvider:i}=this.view,n=(0,P.G)(e,t,i);return null!==n&&void 0!==n?n:((0,P.e)(this.analysis,e.spatialReference,E),null)}get _computedResult(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,measurementMode:i}=this.viewData;if(null==e||null==t)return null;const n=this._euclideanDistances(e,t),s=this._geodesicDistance(e,t,n.horizontal.value),a=i===d.e.Geodesic||i===d.e.Auto&&n.horizontal.value>1e5?"geodesic":"euclidean";return{mode:a,distance:"euclidean"===a?n.direct:s,directDistance:n.direct,horizontalDistance:n.horizontal,verticalDistance:n.vertical,geodesicDistance:s}}_euclideanDistances(e,t){const i=e.clone();i.z=t.z;const n=this._tempStartPosition,s=this._tempEndPosition,a=this._tempCornerPosition,o=this.view.spatialReference,r=this._sphericalPCPF,l=(0,b.canProjectWithoutEngine)(o,r)?r:o;(0,y.K)(e,n,l),(0,y.K)(t,s,l),(0,y.K)(i,a,l);const c=(0,_.o)(n,s),d=(0,_.o)(a,s),u=Math.abs(t.z-e.z),g=e=>this._unitNormalizer.normalizeDistance(e),p=g(c),v=g(d),m=g(u);return{direct:(0,h.EV)(p,"meters"),horizontal:(0,h.EV)(v,"meters"),vertical:(0,h.EV)(m,"meters")}}_geodesicDistance(e,t,i){const n=e.spatialReference,s=new m.Z({spatialReference:n});s.addPath([e,t]);const a=n.isGeographic&&(0,L.Gb)(n)?(0,L.Jf)([s],"meters")[0]:n.isWebMercator?(0,v.geodesicLength)(s,"meters"):null,o=null!=a?a:this._fallbackGeodesicDistance(e,t,i);return(0,h.EV)(o,"meters")}_fallbackGeodesicDistance(e,t,i){if((0,C.U)(e,z)&&(0,C.U)(t,O)){const e=new L._q;return(0,L.cA)(e,z,O),e.distance}return i}};(0,n._)([(0,o.Cb)()],A.prototype,"view",void 0),(0,n._)([(0,o.Cb)()],A.prototype,"analysis",void 0),(0,n._)([(0,o.Cb)()],A.prototype,"viewData",void 0),(0,n._)([(0,o.Cb)()],A.prototype,"_computedResult",null),A=(0,n._)([(0,r.j)(S)],A);const z=(0,p.c)(),O=(0,p.c)();i(59166);var V=i(86950),M=i(16889),D=i(58935),T=i(17842),x=i(68860),G=i(88396),R=i(55203),j=i(26243),H=i(61201),N=i(33837),k=i(100),W=i(81949),U=i(90045),I=i(67077),B=i(51378),X=i(52168),Q=i(70619),F=i(56529),Y=i(55158),Z=i(37081),q=i(23620),K=i(93822),J=i(4760),$=i(82144),ee=i(31132),te=i(33559),ie=i(7566),ne=i(78041),se=i(27627),ae=i(25920),oe=i(8883),re=i(35582),le=i(8548),ce=i(36207);class de extends ee.A{constructor(e,t,i){super(e,t,i)}initializeProgram(e){return new se.$(e.rctx,de.shader.get().build(this.configuration),ie.i)}_setPipelineState(e){const t=e===ae.A.NONE,i=this.configuration;return(0,ce.sm)({blending:i.transparent?t?ne.wu:(0,ne.j7)(e):null,polygonOffset:this.configuration.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:le.wb.LESS},depthWrite:ce.LZ,colorWrite:ce.BK})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return le.MX.TRIANGLE_STRIP}}de.shader=new $.J(re.M,(()=>i.e(4142).then(i.bind(i,14142))));class ue extends oe.W{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=ae.A.NONE}}(0,n._)([(0,te.o)()],ue.prototype,"polygonOffsetEnabled",void 0),(0,n._)([(0,te.o)()],ue.prototype,"transparent",void 0),(0,n._)([(0,te.o)({count:ae.A.COUNT})],ue.prototype,"transparencyPassType",void 0);class he extends F.F5{constructor(e){super(e,new _e),this._configuration=new ue}getConfiguration(e,t){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this._transparent,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration}intersect(){}produces(e,t){return(t===Z.H.Color||t===Z.H.Alpha)&&e===(this._transparent?K.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:K.r.OPAQUE_MATERIAL)}createGLMaterial(e){return new ge(e)}createBufferWriter(){return new Ce}get _transparent(){const{parameters:e}=this;return e.outlineColor[3]<1||e.stripeEvenColor[3]<1||e.stripeOddColor[3]<1}}class ge extends q.Z{beginSlot(e){return this.ensureTechnique(de,e)}}class _e extends F.Mt{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=(0,I.f)(1,.5,0,1),this.stripeEvenColor=(0,I.f)(1,1,1,1),this.stripeOddColor=(0,I.f)(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const pe=(0,Y.U$)().vec3f(J.T.POSITION).vec3f(J.T.NORMAL).vec2f(J.T.UV0).f32(J.T.AUXPOS1),ve=(0,p.c)(),me=(0,p.c)(),be=(0,p.c)(),we=(0,p.c)(),ye=(0,p.c)();class Ce{constructor(){this.vertexBufferLayout=pe}elementCount(e){return 2*(e.attributes.get(J.T.POSITION).indices.length/2+1)}write(e,t,i,n,s){const{data:a,indices:o}=i.attributes.get(J.T.POSITION),r=i.attributes.get(J.T.NORMAL).data,l=a.length/3;o&&o.length!==2*(l-1)&&console.warn("MeasurementArrowMaterial does not support indices");const c=ve,d=me,u=be,h=we,g=ye,p=n.position,v=n.normal,m=n.uv0;let b=0;for(let y=0;y<l;++y){const i=3*y;if((0,_.s)(c,a[i],a[i+1],a[i+2]),y<l-1){const e=3*(y+1);(0,_.s)(d,a[e],a[e+1],a[e+2]),(0,_.s)(g,r[e],r[e+1],r[e+2]),(0,_.n)(g,g),(0,_.f)(u,d,c),(0,_.n)(u,u),(0,_.b)(h,g,u),(0,_.n)(h,h)}const n=(0,_.o)(c,d);e&&t&&((0,_.e)(c,c,e),(0,_.e)(d,d,e),(0,_.e)(h,h,t));const o=s+2*y,w=o+1;p.setVec(o,c),p.setVec(w,c),v.setVec(o,h),v.setVec(w,h),m.set(o,0,b),m.set(o,1,-1),m.set(w,0,b),m.set(w,1,1),y<l-1&&(b+=n)}const w=n.auxpos1;for(let _=0;_<2*l;++_)w.set(s+_,b)}}class Le extends X._{constructor(e){super(e),this._arrowWidth=16,this._arrowSubdivisions=128,this._origin=(0,p.c)(),this._originTransform=(0,W.a)(),this._arrowCenter=(0,p.c)(),this._renderOccluded=F.yD.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._color=(0,I.c)(),this._contrastColor=(0,I.c)(),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const e=this._stripesEnabled?this._contrastColor:this._color;this._arrowMaterial.setParameters({stripeEvenColor:e})}}get color(){return this._color}set color(e){(0,V.Ht)(e,this._color)||((0,U.c)(this._color,e),this._updateArrowColor())}get contrastColor(){return this._contrastColor}set contrastColor(e){(0,V.Ht)(e,this._color)||((0,U.c)(this._contrastColor,e),this._updateArrowColor())}createExternalResources(){const e=this._color,t=this._contrastColor,i=this._stripesEnabled?t:e;this._arrowMaterial=new he({outlineColor:e,stripeEvenColor:i,stripeOddColor:e,renderOccluded:this.renderOccluded,polygonOffset:!0,isDecoration:this.isDecoration}),this._handles=new k.Z,this._handles.add((0,g.YP)((()=>this.view.state.camera),(()=>{this._viewChanged()})))}destroyExternalResources(){this._arrowMaterial=null,this._handles=(0,a.SC)(this._handles)}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){var t;if(null==(null===(t=this._geometry)||void 0===t?void 0:t.startRenderSpace)||null==this._geometry.endRenderSpace)return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);i.transformation=this._originTransform,e.addGeometry(i),this._viewChanged()}_createArrowGeometry(e,t,i,n){const s=this.view.renderCoordsHelper,a=[],o=[],r=(e,t)=>{const n=B.WM.get();(0,_.f)(n,e,i),a.push(n),o.push(t)};if("euclidean"===n.type){n.eval(.5,this._arrowCenter);const i=B.WM.get();s.worldUpAtPosition(this._arrowCenter,i),r(e,i),r(t,i)}else{n.eval(.5,this._arrowCenter);const e=this._arrowSubdivisions+1&-2;for(let t=0;t<e;++t){const i=t/(e-1),a=B.WM.get(),o=B.WM.get();n.eval(i,a),s.worldUpAtPosition(a,o),r(a,o)}}return(0,Q.rh)(this._arrowMaterial,a,o)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&null!=this._geometry){const e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._arrowWidth*e})}}_updateArrowColor(){if(!this.attached)return;const e=this._color,t=this._contrastColor,i=this._stripesEnabled?t:e,n=e,s=e;this._arrowMaterial.setParameters({stripeEvenColor:i,outlineColor:n,stripeOddColor:s})}}var Pe=i(98917),fe=i(9052),Se=i(86700),Ee=i(36257),Ae=i(41201);let ze=class extends s.Z{get _parameters(){const e=this.view.effectiveTheme,{accentColor:t,textColor:i}=e,n=(0,V.O)(t),s=(0,V.Ch)(t,.75),a=(0,V.O)((0,V.mj)(t)),o=(0,V.mj)(i,V.K6.Low);return{accentColor:n,contrastColor:a,translucentAccentColor:s,triangleLineWidth:3,geodesicProjectionLineWidth:2,guideLineWidth:2,guideStippleLengthPixels:3,directLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12,textColor:i,textBackgroundColor:(0,V.G)(o,.6),textCalloutColor:(0,V.G)(o,.5)}}get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView;if(null==e||null==t||e.equals(t))return R.w.None;const i=this.analysisView.result;if(null==i)return R.w.Direct;if("geodesic"===i.mode)return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?R.w.ProjectedGeodesic:R.w.Direct;const{verticalDistance:n,horizontalDistance:s}=i,a=n.value,o=s.value;return Math.min(a/o,o/a)<this.triangleCollapseRatioThreshold?R.w.Direct:R.w.Triangle}get actualVisualizedMeasurement(){if(null==this.analysisView.result)switch(this.analysisView.measurementMode){case d.e.Auto:case d.e.Euclidean:default:return"euclidean";case d.e.Geodesic:return"geodesic"}return this.analysisView.result.mode}get allowVisualElementsOrientationChange(){return null==this._triangleOrientationOverride}set allowVisualElementsOrientationChange(e){null==this._triangleOrientationOverride!==e&&(null==this._triangleOrientationOverride?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){const e="geodesic"===this.actualVisualizedMeasurement;return{direct:this._segmentLabel,horizontal:e?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}constructor(e){super(e),this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=(0,p.c)(),this._endPosition=(0,p.c)(),this._cornerPosition=(0,p.c)(),this._startPositionAtSeaLevel=(0,p.c)(),this._endPositionAtSeaLevel=(0,p.c)(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=R.x.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const e=this._parameters,t={attached:!0,view:this.view,isDecoration:!0},{guideLineWidth:i,guideStippleLengthPixels:n,triangleLineWidth:s,geodesicProjectionLineWidth:a,directLabelFontSize:o,verticalLabelFontSize:r,horizontalLabelFontSize:l}=e;this._segmentVisualElement=new Le({...t,geometry:null,renderOccluded:F.yD.OccludeAndTransparent}),this._triangleVisualElement=new N.r({...t,width:s,renderOccluded:F.yD.OccludeAndTransparent}),this._rightAngleQuad=new Pe.R({...t,renderOccluded:F.yD.OccludeAndTransparent});const c={...t,polygonOffset:!0,renderOccluded:F.yD.OccludeAndTransparent};this._projectedGeodesicLine=new N.r({...c,width:a,stipplePattern:(0,Se.z5)(n)}),this._geodesicStartHint=new N.r({...c,width:i,stipplePattern:(0,Se.z5)(n)}),this._geodesicEndHint=new N.r({...c,width:i,stipplePattern:(0,Se.z5)(n)}),this._segmentLabel=new H.Kc({...t,fontSize:o}),this._verticalLabel=new H.Kc({...t,fontSize:r}),this._horizontalLabel=new H.Kc({...t,fontSize:l}),this.addHandles([(0,g.YP)((()=>{const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView,i=this.view;return{view:i,camera:i.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}}),(e=>this._updateGeometryAndViewMode(e)),g.tX),(0,g.YP)((()=>({visible:this.visible,viewMode:this.viewMode})),(e=>this._updateVisualElementVisibility(e)),g.tX),(0,g.YP)((()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement})),(e=>this._updateLabelText(e)),g.tX),(0,g.YP)((()=>({visible:this.visible,viewMode:this.viewMode})),(e=>this._updateLabelVisibility(e)),g.tX),(0,g.YP)((()=>this._measurementArrowStripeLength),(e=>this._updateSegmentStripeLength(e)),g.tX),(0,Ee.qe)((async()=>this._updateMessageBundle())),(0,g.YP)((()=>this._parameters),(e=>{let{textBackgroundColor:t,textCalloutColor:i,textColor:n,translucentAccentColor:s,accentColor:a,contrastColor:o}=e;const{_segmentLabel:r,_verticalLabel:l,_horizontalLabel:c,_triangleVisualElement:d,_rightAngleQuad:u,_projectedGeodesicLine:h,_geodesicStartHint:g,_geodesicEndHint:_,_segmentVisualElement:p}=this;r.backgroundColor=t,r.calloutColor=i,r.textColor=n,l.backgroundColor=t,l.calloutColor=i,l.textColor=n,c.backgroundColor=t,c.calloutColor=i,c.textColor=n,d.color=s,u.color=s,h.color=s,g.color=s,_.color=s,p.color=a,p.contrastColor=o}),g.nn)]),this._updateMessageBundle()}destroy(){this._segmentVisualElement=(0,a.SC)(this._segmentVisualElement),this._triangleVisualElement=(0,a.SC)(this._triangleVisualElement),this._rightAngleQuad=(0,a.SC)(this._rightAngleQuad),this._projectedGeodesicLine=(0,a.SC)(this._projectedGeodesicLine),this._geodesicStartHint=(0,a.SC)(this._geodesicStartHint),this._geodesicEndHint=(0,a.SC)(this._geodesicEndHint),this._segmentLabel=(0,a.SC)(this._segmentLabel),this._verticalLabel=(0,a.SC)(this._verticalLabel),this._horizontalLabel=(0,a.SC)(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility(e){let{visible:t,viewMode:i}=e;if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,t)switch(i){case R.w.None:break;case R.w.Direct:this._segmentVisualElement.visible=!0;break;case R.w.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case R.w.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode(e){let{view:t,camera:i,viewMode:n,elevationAlignedStartPoint:s,elevationAlignedEndPoint:a,orientation:o,visualizedMeasurement:r,stripeLength:l}=e;const c=t.renderCoordsHelper;if(null==c||null==s||null==a||s.equals(a))return;let d=this._startPosition,u=this._endPosition;c.toRenderCoords(s,d),c.toRenderCoords(a,u);const h=o===R.x.AboveSegment?1:-1,g=h*(c.getAltitude(u)-c.getAltitude(d));g<0&&(d=this._endPosition,u=this._startPosition);const _="geodesic"===r?new fe.u(this._startPosition,this._endPosition,c.spatialReference):new fe.y(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=_,this._updateSegmentStripeLength(l),n){case R.w.Direct:this._updateSegment(_,o);break;case R.w.Triangle:this._updateSegmentAndTriangle({view:t,camera:i,segment:_,orientation:o,startPosition:d,endPosition:u,deltaSign:h,altitudeDelta:g});break;case R.w.ProjectedGeodesic:this._updateSegmentAndProjection({view:t,orientation:o,startPosition:d,endPosition:u})}}_updateSegment(e,t){this._segmentLabel.anchor=t===R.x.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"}}_updateSegmentAndTriangle(e){let{view:{renderCoordsHelper:t},camera:i,segment:n,orientation:s,startPosition:a,endPosition:o,deltaSign:r,altitudeDelta:l}=e;const c=this._cornerPosition;t.worldUpAtPosition(a,c),(0,_.i)(c,c,r*Math.abs(l)),(0,_.g)(c,c,a),this._triangleVisualElement.geometry=[[[a[0],a[1],a[2]],[c[0],c[1],c[2]],[o[0],o[1],o[2]]]],this._rightAngleQuad.geometry={previous:a,center:c,next:o};const d=new fe.y(a,c),u=new fe.y(c,o),h=function(e,t,i,n,s){const a=Ve,o=Me;s.projectToRenderScreen(i,a),s.projectToRenderScreen(t,o);const r={segment:"bottom",horizontal:"top",vertical:a[0]<o[0]?"left":"right"};{const n=De,a=Te;if((0,j.c)(e,i,n,s),(0,j.c)(e,t,a,s),(0,G.g)(n,a)>=Oe){const e=Math.sign(n[1])===Math.sign(a[1]);r.segment=e?(0,H.jB)(r.vertical):r.vertical}else{const e=xe;(0,j.c)(i,t,e,s),(0,G.g)(e,a)>=Oe&&(r.segment=Math.sign(e[0])===Math.sign(a[0])?(0,H.jB)(r.horizontal):r.horizontal)}}if(n===R.x.BelowSegment){const e=e=>"top"===e?"bottom":"top";r.segment=e(r.segment),r.horizontal=e(r.horizontal),r.vertical=e(r.vertical)}return r}(a,o,c,s,i);this._segmentLabel.anchor=h.segment,this._segmentLabel.geometry={type:"segment",segment:n,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:d,sampleLocation:"center"},this._verticalLabel.anchor=h.vertical,this._horizontalLabel.geometry={type:"segment",segment:u,sampleLocation:"center"},this._horizontalLabel.anchor=h.horizontal}_updateSegmentAndProjection(e){let{view:{renderCoordsHelper:t},orientation:i,startPosition:n,endPosition:s}=e;t.setAltitude(this._startPositionAtSeaLevel,0,n),t.setAltitude(this._endPositionAtSeaLevel,0,s);const a=new fe.u(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(a),this._geodesicStartHint.setGeometryFromSegment(new fe.y(this._startPositionAtSeaLevel,n)),this._geodesicEndHint.setGeometryFromSegment(new fe.y(this._endPositionAtSeaLevel,s)),this._segmentLabel.geometry={type:"segment",segment:a,sampleLocation:"center"},this._segmentLabel.anchor=i===R.x.AboveSegment?"top":"bottom"}_updateLabelText(e){let{text:t,visualizedMeasurement:i}=e;null!=t?(this._segmentLabel.text="euclidean"===i?t.euclideanDistance:t.geodesicDistance,this._horizontalLabel.text=t.horizontalDistance,this._verticalLabel.text=t.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility(e){let{visible:t,viewMode:i}=e;const n=this._segmentLabel,s=this._horizontalLabel,a=this._verticalLabel;if(n.visible=!1,s.visible=!1,a.visible=!1,t)switch(i){case R.w.Direct:n.visible=!0;break;case R.w.Triangle:n.visible=!0,s.visible=!0,a.visible=!0;break;case R.w.ProjectedGeodesic:n.visible=!0;case R.w.None:}}get _labelsText(){if(this.destroyed)return null;const e=this.messages,t=this.analysisView.result;if(null==t||null==e)return null;const{directDistance:i,horizontalDistance:n,verticalDistance:s,geodesicDistance:a}=t,o=this.analysisView.unit,r=e=>({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:"",...e});switch(o){case"metric":return r({euclideanDistance:i&&(0,D.Rd)(e,i),geodesicDistance:a&&(0,D.Rd)(e,a),horizontalDistance:n&&(0,D.Rd)(e,n),verticalDistance:s&&(0,D.Wv)(e,s)});case"imperial":return r({euclideanDistance:i&&(0,D.Ud)(e,i),geodesicDistance:a&&(0,D.Ud)(e,a),horizontalDistance:n&&(0,D.Ud)(e,n),verticalDistance:s&&(0,D.Zv)(e,s)});default:return r({euclideanDistance:i&&(0,D.VG)(e,i,o),geodesicDistance:a&&(0,D.VG)(e,a,o),horizontalDistance:n&&(0,D.VG)(e,n,o),verticalDistance:s&&(0,D.VG)(e,s,o)})}}_updateSegmentStripeLength(e){const t=this._segmentVisualElement;null!=e?(t.stripeLength=e,t.stripesEnabled=!0):t.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(null!=this._triangleOrientationOverride)return this._triangleOrientationOverride;const e=this.visualElementOrientation;return e===R.x.Auto?this.view.state.camera.aboveGround?R.x.AboveSegment:R.x.BelowSegment:e}_requiresGeodesicGuideAt(e){const t=this.view;if(null===t||void 0===t||!t.state)return!1;const i=t.state.camera,n=t.renderCoordsHelper;if(!n)return!1;const s=i.computeScreenPixelSizeAt(e);return n.getAltitude(e)/s>=10}get _measurementArrowStripeLength(){const{result:e,unit:t}=this.analysisView;if(null==e)return null;let i=null;const n=e.directDistance;switch(t){case"metric":i=n&&(0,h.nn)(n,"meters");break;case"imperial":i=n&&(0,h.nn)(n,(0,x.Q7)(n.value,n.unit));break;default:i=n&&(0,h.nn)(n,t)}return null==i?null:(0,M.sk)(i.value/30)*(0,x.En)(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,(0,Ae.ME)("esri/core/t9n/Units").then((e=>{this.messages=e})).finally((()=>{this.loadingMessages=!1}))}get testData(){var e;return{labels:this.labels,stripeLength:null===(e=this._segmentVisualElement)||void 0===e?void 0:e.stripeLength}}};(0,n._)([(0,o.Cb)()],ze.prototype,"_parameters",null),(0,n._)([(0,o.Cb)()],ze.prototype,"_triangleOrientationOverride",void 0),(0,n._)([(0,o.Cb)()],ze.prototype,"messages",void 0),(0,n._)([(0,o.Cb)()],ze.prototype,"view",void 0),(0,n._)([(0,o.Cb)()],ze.prototype,"analysis",void 0),(0,n._)([(0,o.Cb)()],ze.prototype,"analysisView",void 0),(0,n._)([(0,o.Cb)()],ze.prototype,"loadingMessages",void 0),(0,n._)([(0,o.Cb)()],ze.prototype,"visible",null),(0,n._)([(0,o.Cb)()],ze.prototype,"viewMode",null),(0,n._)([(0,o.Cb)()],ze.prototype,"actualVisualizedMeasurement",null),(0,n._)([(0,o.Cb)()],ze.prototype,"visualElementOrientation",void 0),(0,n._)([(0,o.Cb)()],ze.prototype,"triangleCollapseRatioThreshold",void 0),(0,n._)([(0,o.Cb)()],ze.prototype,"allowVisualElementsOrientationChange",null),(0,n._)([(0,o.Cb)()],ze.prototype,"labels",null),(0,n._)([(0,o.Cb)()],ze.prototype,"_labelsText",null),(0,n._)([(0,o.Cb)()],ze.prototype,"_actualVisualElementsOrientation",null),(0,n._)([(0,o.Cb)()],ze.prototype,"_measurementArrowStripeLength",null),ze=(0,n._)([(0,r.j)("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],ze);const Oe=Math.cos((0,M.Vl)(12)),Ve=(0,T.J$)(),Me=(0,T.J$)(),De=(0,T.gX)(),Te=(0,T.gX)(),xe=(0,T.gX)();let Ge=class extends((0,c.p)(s.Z)){constructor(e){super(e),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=d.e.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const e=this.view,t=this.analysis;this._analysisVisualization=new ze({view:e,analysis:t,analysisView:this}),this._analysisController=new A({view:e,analysis:t,viewData:this})}destroy(){this._analysisController=(0,a.SC)(this._analysisController),this._analysisVisualization=(0,a.SC)(this._analysisVisualization)}get updating(){var e;return!(null===(e=this._analysisVisualization)||void 0===e||!e.loadingMessages)}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(e){this._analysisVisualization.visualElementOrientation=e}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(e){this._analysisVisualization.allowVisualElementsOrientationChange=e}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(e){this._analysisVisualization.triangleCollapseRatioThreshold=e}get directLabelText(){var e,t;return null!==(e=null===(t=this._analysisVisualization.labels.direct)||void 0===t?void 0:t.text)&&void 0!==e?e:""}get horizontalLabelText(){var e,t;return null!==(e=null===(t=this._analysisVisualization.labels.horizontal)||void 0===t?void 0:t.text)&&void 0!==e?e:""}get verticalLabelText(){var e,t;return null!==(e=null===(t=this._analysisVisualization.labels.vertical)||void 0===t?void 0:t.text)&&void 0!==e?e:""}get unit(){var e;return null!==(e=this.analysis.unit)&&void 0!==e?e:this._defaultUnit}get testData(){var e;return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:{...null===(e=this._analysisVisualization)||void 0===e?void 0:e.testData,visualization:this._analysisVisualization,controller:this._analysisController}}};(0,n._)([(0,o.Cb)()],Ge.prototype,"updating",null),(0,n._)([(0,o.Cb)({readOnly:!0})],Ge.prototype,"type",void 0),(0,n._)([(0,o.Cb)({constructOnly:!0,nonNullable:!0})],Ge.prototype,"analysis",void 0),(0,n._)([(0,o.Cb)()],Ge.prototype,"result",void 0),(0,n._)([(0,o.Cb)()],Ge.prototype,"measurementMode",void 0),(0,n._)([(0,o.Cb)()],Ge.prototype,"elevationAlignedStartPoint",void 0),(0,n._)([(0,o.Cb)()],Ge.prototype,"elevationAlignedEndPoint",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],Ge.prototype,"viewMode",null),(0,n._)([(0,o.Cb)({readOnly:!0})],Ge.prototype,"actualVisualizedMeasurement",null),(0,n._)([(0,o.Cb)()],Ge.prototype,"visualElementOrientation",null),(0,n._)([(0,o.Cb)()],Ge.prototype,"allowVisualElementsOrientationChange",null),(0,n._)([(0,o.Cb)()],Ge.prototype,"triangleCollapseRatioThreshold",null),(0,n._)([(0,o.Cb)({readOnly:!0})],Ge.prototype,"directLabelText",null),(0,n._)([(0,o.Cb)({readOnly:!0})],Ge.prototype,"horizontalLabelText",null),(0,n._)([(0,o.Cb)({readOnly:!0})],Ge.prototype,"verticalLabelText",null),(0,n._)([(0,o.Cb)()],Ge.prototype,"_analysisVisualization",void 0),(0,n._)([(0,o.Cb)()],Ge.prototype,"_analysisController",void 0),(0,n._)([(0,o.Cb)()],Ge.prototype,"unit",null),(0,n._)([(0,o.Cb)(l.Y)],Ge.prototype,"_defaultUnit",void 0),Ge=(0,n._)([(0,r.j)("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],Ge);const Re=Ge},55203:(e,t,i)=>{var n,s;i.d(t,{w:()=>n,x:()=>s}),function(e){e[e.None=0]="None",e[e.Direct=1]="Direct",e[e.Triangle=2]="Triangle",e[e.ProjectedGeodesic=3]="ProjectedGeodesic"}(n||(n={})),function(e){e[e.Auto=0]="Auto",e[e.AboveSegment=1]="AboveSegment",e[e.BelowSegment=2]="BelowSegment"}(s||(s={}))}}]);
//# sourceMappingURL=1491.74417636.chunk.js.map