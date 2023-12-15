"use strict";(self.webpackChunkmmsp_depot=self.webpackChunkmmsp_depot||[]).push([[5064],{5064:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var s=r(27366),o=(r(59486),r(44055)),i=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),n=r(97642),a=r(66978),l=r(35995),u=r(49861),p=(r(25243),r(63780),r(93169)),d=r(69912),c=r(27823),h=r(30651),y=r(10064),m=r(54472),f=r(32718),g=r(70431),v=r(63543),b=r(49818),_=r(53866),C=r(80885);let S=class extends m.Z{constructor(){super(...arguments),this.type="geojson",this.refresh=(0,a.Ds)((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null!==(e=this._connection)&&void 0!==e&&e.close(),this._connection=null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>b.Z.fromJSON(e)))}queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:_.Z.fromJSON(e.extent)})))}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new y.Z("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],s=[],o=[];if(e.addFeatures)for(const i of e.addFeatures)r.push(this._serializeFeature(i));if(e.deleteFeatures)for(const i of e.deleteFeatures)"objectId"in i&&null!=i.objectId?s.push(i.objectId):"attributes"in i&&null!=i.attributes[t]&&s.push(i.attributes[t]);if(e.updateFeatures)for(const i of e.updateFeatures)o.push(this._serializeFeature(i));return this._connection.invoke("applyEdits",{adds:r,updates:o,deletes:s}).then((e=>{let{extent:t,timeExtent:r,featureEditResults:s}=e;return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),this._createEditsResult(s)}))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new y.Z("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return null==t?null:"mesh"===t.type||"extent"===t.type?C.Z.fromExtent(t.extent):t}async _startWorker(e){var t;this._connection=await(0,g.bA)("GeoJSONSourceWorker",{strategy:(0,p.Z)("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:r,spatialReference:s,hasZ:o,geometryType:i,objectIdField:n,url:a,timeInfo:l,customParameters:u}=this.layer,d="defaults"===this.layer.originOf("spatialReference"),h={url:a,customParameters:u,fields:r&&r.map((e=>e.toJSON())),geometryType:c.M.toJSON(i),hasZ:o,objectIdField:n,timeInfo:l?l.toJSON():null,spatialReference:d?null:s&&s.toJSON()},y=await this._connection.invoke("load",h,{signal:e});for(const p of y.warnings){var m;f.Z.getLogger(this.layer).warn("#load()","$".concat(p.message," (title: '").concat(this.layer.title||"no title","', id: '").concat(null!==(m=this.layer.id)&&void 0!==m?m:"no id","')"),{warning:p})}y.featureErrors.length&&f.Z.getLogger(this.layer).warn("#load()","Encountered ".concat(y.featureErrors.length," validation errors while loading features. (title: '").concat(this.layer.title||"no title","', id: '").concat(null!==(t=this.layer.id)&&void 0!==t?t:"no id","')"),{errors:y.featureErrors}),this.sourceJSON=y.layerDefinition,this.capabilities=(0,v.MS)(this.sourceJSON.hasZ,!0)}};(0,s._)([(0,u.Cb)()],S.prototype,"capabilities",void 0),(0,s._)([(0,u.Cb)()],S.prototype,"type",void 0),(0,s._)([(0,u.Cb)({constructOnly:!0})],S.prototype,"layer",void 0),(0,s._)([(0,u.Cb)()],S.prototype,"sourceJSON",void 0),S=(0,s._)([(0,d.j)("esri.layers.graphics.sources.GeoJSONSource")],S);var F=r(6693),O=r(46671),I=r(7632),E=r(37563),x=r(6061),R=r(94207),N=r(29598),w=r(71684),Z=r(56811),j=r(99063),J=r(45948),P=r(12224),q=r(87165),T=r(83040),D=r(25610),A=r(37270),Q=r(77748),k=r(85116),G=r(86638),M=r(81085),z=r(6701),B=r(78952);const U=(0,D.v)();let L=class extends((0,R.c)((0,O.N)((0,E.M)((0,I.b)((0,F.h)((0,j.n)((0,Z.M)((0,w.Q)((0,x.q)((0,N.I)((0,n.R)(h.Z)))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new S({layer:this}),this.spatialReference=B.Z.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(a.r9).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,A.YN)(this.renderer,this.fieldsIndex),(0,A.UF)(this.timeInfo,this.fieldsIndex)}));return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,l.mN)(this.url):null}set renderer(e){(0,A.YN)(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=(0,l.mN)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:s}=await r.e(9887).then(r.bind(r,29887));await this.load();const o=await s(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),o}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,M.eZ)(this,e)}createQuery(){var e;const t=new G.Z,r=null===(e=this.capabilities)||void 0===e?void 0:e.data;t.returnGeometry=!0,r&&r.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:o}=this;return t.timeExtent=null!=s&&null!=o?o.offset(-s.value,s.unit):o||null,t}getFieldDomain(e,t){let r,s=!1;const o=null===t||void 0===t?void 0:t.feature,i=null===o||void 0===o?void 0:o.attributes,n=this.typeIdField&&(null===i||void 0===i?void 0:i[this.typeIdField]);return null!=n&&this.types&&(s=this.types.some((t=>t.id==n&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),s||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(G.Z.from(e)||this.createQuery(),t))).then((e=>{if(null!==e&&void 0!==e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(G.Z.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(G.Z.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(G.Z.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};(0,s._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1}})],L.prototype,"capabilities",null),(0,s._)([(0,u.Cb)({type:String})],L.prototype,"copyright",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],L.prototype,"createQueryVersion",null),(0,s._)([(0,u.Cb)((0,z.mi)("dateFieldsTimeReference"))],L.prototype,"dateFieldsTimeZone",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],L.prototype,"defaultPopupTemplate",null),(0,s._)([(0,u.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],L.prototype,"definitionExpression",void 0),(0,s._)([(0,u.Cb)({type:String})],L.prototype,"displayField",void 0),(0,s._)([(0,u.Cb)({type:Boolean})],L.prototype,"editingEnabled",void 0),(0,s._)([(0,u.Cb)(J.PV)],L.prototype,"elevationInfo",void 0),(0,s._)([(0,u.Cb)({type:[T.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],L.prototype,"fields",void 0),(0,s._)([(0,u.Cb)(U.fieldsIndex)],L.prototype,"fieldsIndex",void 0),(0,s._)([(0,u.Cb)({type:_.Z,json:{name:"extent"}})],L.prototype,"fullExtent",void 0),(0,s._)([(0,u.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:c.M.read}}})],L.prototype,"geometryType",void 0),(0,s._)([(0,u.Cb)({type:Boolean})],L.prototype,"hasZ",void 0),(0,s._)([(0,u.Cb)(J.id)],L.prototype,"id",void 0),(0,s._)([(0,u.Cb)({type:Boolean,readOnly:!0})],L.prototype,"isTable",null),(0,s._)([(0,u.Cb)(J.iR)],L.prototype,"labelsVisible",void 0),(0,s._)([(0,u.Cb)({type:[Q.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:k.r},write:!0}})],L.prototype,"labelingInfo",void 0),(0,s._)([(0,u.Cb)(J.rn)],L.prototype,"legendEnabled",void 0),(0,s._)([(0,u.Cb)({type:["show","hide"]})],L.prototype,"listMode",void 0),(0,s._)([(0,u.Cb)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],L.prototype,"objectIdField",void 0),(0,s._)([(0,u.Cb)(J.Oh)],L.prototype,"opacity",void 0),(0,s._)([(0,u.Cb)({type:["GeoJSON"]})],L.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],L.prototype,"parsedUrl",null),(0,s._)([(0,u.Cb)(J.C_)],L.prototype,"popupEnabled",void 0),(0,s._)([(0,u.Cb)({type:o.Z,json:{name:"popupInfo",write:!0}})],L.prototype,"popupTemplate",void 0),(0,s._)([(0,u.Cb)({types:i.A,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:i.o}}}})],L.prototype,"renderer",null),(0,s._)([(0,u.Cb)(J.YI)],L.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],L.prototype,"source",void 0),(0,s._)([(0,u.Cb)({type:B.Z})],L.prototype,"spatialReference",void 0),(0,s._)([(0,u.Cb)({type:[P.Z]})],L.prototype,"templates",void 0),(0,s._)([(0,u.Cb)()],L.prototype,"title",void 0),(0,s._)([(0,u.Cb)({json:{read:!1},readOnly:!0})],L.prototype,"type",void 0),(0,s._)([(0,u.Cb)({type:String,readOnly:!0})],L.prototype,"typeIdField",void 0),(0,s._)([(0,u.Cb)({type:[q.Z]})],L.prototype,"types",void 0),(0,s._)([(0,u.Cb)(J.HQ)],L.prototype,"url",null),L=(0,s._)([(0,d.j)("esri.layers.GeoJSONLayer")],L);const H=L},60480:(e,t,r)=>{r.d(t,{g:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},63543:(e,t,r)=>{r.d(t,{Dm:()=>p,Hq:()=>d,MS:()=>c,bU:()=>a});var s=r(93169),o=r(84652),i=r(60480),n=r(76115);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function p(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r="this.".concat(t," = null;");for(const t in e)r+="this".concat(l.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const s=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return()=>new s}catch(r){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,o.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);
//# sourceMappingURL=5064.cb6cb503.chunk.js.map