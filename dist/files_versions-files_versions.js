/*! For license information please see files_versions-files_versions.js.LICENSE.txt */
(()=>{var e,s,n,i={15732:(e,s,n)=>{"use strict";var i=n(20144),o=n(31352),r=n(62520),a=n.n(r),l=n(64024),c=n(3344),d=n.n(c),f=n(69183),u=n(77958),v=n(65358),m=n(79753),p=n(80351),h=n.n(p);const b=function(e){const t=(e.startsWith("/")?e:"/".concat(e)).split("/");let s="";return t.forEach((e=>{""!==e&&(s+="/"+encodeURIComponent(e))})),s};var A,j=n(14596);const _=(0,m.generateRemoteUrl)("dav"),g=(0,j.eI)(_,{headers:{"X-Requested-With":"XMLHttpRequest",requesttoken:null!==(A=(0,u.IH)())&&void 0!==A?A:""}}),y=(0,n(17499).IY)().setApp("files_version").detectUser().build();var C=n(88722),w=n(41293),x=n(15743),k=n(73229),V=n(80419),I=n(57612),L=n(24860),z=n(15961),O=n(79954);const N={name:"Version",components:{NcActionLink:z.ih,NcActionButton:z.Js,NcListItem:z.hx,NcModal:z.Jc,NcButton:z.P2,NcTextField:z.h3,BackupRestore:C.Z,Download:w.Z,FileCompare:x.Z,Pencil:k.default,Check:V.default,Delete:I.Z,ImageOffOutline:L.Z},directives:{tooltip:z.u},filters:{humanReadableSize:e=>OC.Util.humanFileSize(e),humanDateFromNow:e=>h()(e).fromNow()},props:{version:{type:Object,required:!0},fileInfo:{type:Object,required:!0},isCurrent:{type:Boolean,default:!1},isFirstVersion:{type:Boolean,default:!1},loadPreview:{type:Boolean,default:!1},canView:{type:Boolean,default:!1},canCompare:{type:Boolean,default:!1}},data(){return{previewLoaded:!1,showVersionLabelForm:!1,formVersionLabelValue:this.version.label,capabilities:(0,O.j)("core","capabilities",{files:{version_labeling:!1,version_deletion:!1}})}},computed:{versionLabel(){var e;const t=null!==(e=this.version.label)&&void 0!==e?e:"";return this.isCurrent?""===t?(0,o.Iu)("files_versions","Current version"):"".concat(t," (").concat((0,o.Iu)("files_versions","Current version"),")"):this.isFirstVersion&&""===t?(0,o.Iu)("files_versions","Initial version"):t},downloadURL(){return this.isCurrent?(0,m.getRootUrl)()+(0,v.RQ)("/remote.php/webdav",this.fileInfo.path,this.fileInfo.name):(0,m.getRootUrl)()+this.version.url},formattedDate(){return h()(this.version.mtime).format("LLL")},enableLabeling(){return!0===this.capabilities.files.version_labeling},enableDeletion(){return!0===this.capabilities.files.version_deletion}},methods:{openVersionLabelModal(){this.showVersionLabelForm=!0,this.$nextTick((()=>{this.$refs.labelInput.$el.getElementsByTagName("input")[0].focus()}))},restoreVersion(){this.$emit("restore",this.version)},setVersionLabel(e){this.formVersionLabelValue=e,this.showVersionLabelForm=!1,this.$emit("label-update",this.version,e)},deleteVersion(){this.$emit("delete",this.version)},click(){this.canView?this.$emit("click",{version:this.version}):window.location=this.downloadURL},compareVersion(){if(!this.canView)throw new Error("Cannot compare version of this file");this.$emit("compare",{version:this.version})}}};var B=n(93379),R=n.n(B),S=n(7795),D=n.n(S),F=n(90569),U=n.n(F),E=n(3565),P=n.n(E),T=n(19216),$=n.n(T),M=n(44589),q=n.n(M),Z=n(28176),Y={};Y.styleTagTransform=q(),Y.setAttributes=P(),Y.insert=U().bind(null,"head"),Y.domAPI=D(),Y.insertStyleElement=$(),R()(Z.Z,Y),Z.Z&&Z.Z.locals&&Z.Z.locals;var W=n(51900);const G={name:"VersionTab",components:{Version:(0,W.Z)(N,(function(){var e=this,t=e._self._c;return t("div",[t("NcListItem",{staticClass:"version",attrs:{title:e.versionLabel,"force-display-actions":!0,"data-files-versions-version":""},on:{click:e.click},scopedSlots:e._u([{key:"icon",fn:function(){return[e.loadPreview||e.previewLoaded?e.isCurrent||e.version.hasPreview?t("img",{staticClass:"version__image",attrs:{src:e.version.previewUrl,alt:"",decoding:"async",fetchpriority:"low",loading:"lazy"},on:{load:function(t){e.previewLoaded=!0}}}):t("div",{staticClass:"version__image"},[t("ImageOffOutline",{attrs:{size:20}})],1):t("div",{staticClass:"version__image"})]},proxy:!0},{key:"subtitle",fn:function(){return[t("div",{staticClass:"version__info"},[t("span",{attrs:{title:e.formattedDate}},[e._v(e._s(e._f("humanDateFromNow")(e.version.mtime)))]),e._v(" "),t("span",{staticClass:"version__info__size"},[e._v("•")]),e._v(" "),t("span",{staticClass:"version__info__size"},[e._v(e._s(e._f("humanReadableSize")(e.version.size)))])])]},proxy:!0},{key:"actions",fn:function(){return[e.enableLabeling?t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.openVersionLabelModal},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Pencil",{attrs:{size:22}})]},proxy:!0}],null,!1,3072546167)},[e._v("\n\t\t\t\t"+e._s(""===e.version.label?e.t("files_versions","Name this version"):e.t("files_versions","Edit version name"))+"\n\t\t\t")]):e._e(),e._v(" "),!e.isCurrent&&e.canView&&e.canCompare?t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.compareVersion},scopedSlots:e._u([{key:"icon",fn:function(){return[t("FileCompare",{attrs:{size:22}})]},proxy:!0}],null,!1,1958207595)},[e._v("\n\t\t\t\t"+e._s(e.t("files_versions","Compare to current version"))+"\n\t\t\t")]):e._e(),e._v(" "),e.isCurrent?e._e():t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.restoreVersion},scopedSlots:e._u([{key:"icon",fn:function(){return[t("BackupRestore",{attrs:{size:22}})]},proxy:!0}],null,!1,2239038444)},[e._v("\n\t\t\t\t"+e._s(e.t("files_versions","Restore version"))+"\n\t\t\t")]),e._v(" "),t("NcActionLink",{attrs:{href:e.downloadURL,"close-after-click":!0,download:e.downloadURL},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Download",{attrs:{size:22}})]},proxy:!0}])},[e._v("\n\t\t\t\t"+e._s(e.t("files_versions","Download version"))+"\n\t\t\t")]),e._v(" "),!e.isCurrent&&e.enableDeletion?t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.deleteVersion},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Delete",{attrs:{size:22}})]},proxy:!0}],null,!1,2429175571)},[e._v("\n\t\t\t\t"+e._s(e.t("files_versions","Delete version"))+"\n\t\t\t")]):e._e()]},proxy:!0}])}),e._v(" "),e.showVersionLabelForm?t("NcModal",{attrs:{title:e.t("files_versions","Name this version")},on:{close:function(t){e.showVersionLabelForm=!1}}},[t("form",{staticClass:"version-label-modal",on:{submit:function(t){return t.preventDefault(),e.setVersionLabel(e.formVersionLabelValue)}}},[t("label",[t("div",{staticClass:"version-label-modal__title"},[e._v(e._s(e.t("photos","Version name")))]),e._v(" "),t("NcTextField",{ref:"labelInput",attrs:{value:e.formVersionLabelValue,placeholder:e.t("photos","Version name"),"label-outside":!0},on:{"update:value":function(t){e.formVersionLabelValue=t}}})],1),e._v(" "),t("div",{staticClass:"version-label-modal__info"},[e._v("\n\t\t\t\t"+e._s(e.t("photos","Named versions are persisted, and excluded from automatic cleanups when your storage quota is full."))+"\n\t\t\t")]),e._v(" "),t("div",{staticClass:"version-label-modal__actions"},[t("NcButton",{attrs:{disabled:0===e.formVersionLabelValue.trim().length},on:{click:function(t){return e.setVersionLabel("")}}},[e._v("\n\t\t\t\t\t"+e._s(e.t("files_versions","Remove version name"))+"\n\t\t\t\t")]),e._v(" "),t("NcButton",{attrs:{type:"primary","native-type":"submit"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Check")]},proxy:!0}],null,!1,2308323205)},[e._v("\n\t\t\t\t\t"+e._s(e.t("files_versions","Save version name"))+"\n\t\t\t\t")])],1)])]):e._e()],1)}),[],!1,null,"b584f27c",null).exports},mixins:[d()],data:()=>({fileInfo:null,isActive:!1,versions:[],loading:!1}),mounted(){(0,f.Ld)("files_versions:restore:restored",this.fetchVersions)},beforeUnmount(){(0,f.r1)("files_versions:restore:restored",this.fetchVersions)},computed:{orderedVersions(){return[...this.versions].sort(((e,t)=>e.mtime===this.fileInfo.mtime?-1:t.mtime===this.fileInfo.mtime?1:t.mtime-e.mtime))},initialVersionMtime(){return this.versions.map((e=>e.mtime)).reduce(((e,t)=>Math.min(e,t)))},viewerFileInfo(){let e="";return 1&this.fileInfo.permissions&&(e+="R"),2&this.fileInfo.permissions&&(e+="W"),8&this.fileInfo.permissions&&(e+="D"),{...this.fileInfo,mime:this.fileInfo.mimetype,basename:this.fileInfo.name,filename:this.fileInfo.path+"/"+this.fileInfo.name,permissions:e,fileid:this.fileInfo.id}},canView(){var e,t;return null===(e=window.OCA.Viewer)||void 0===e||null===(t=e.mimetypesCompare)||void 0===t?void 0:t.includes(this.fileInfo.mimetype)},canCompare(){return!this.isMobile}},methods:{async update(e){this.fileInfo=e,this.resetState(),this.fetchVersions()},async setIsActive(e){this.isActive=e},async fetchVersions(){try{this.loading=!0,this.versions=await async function(e){var t;const s="/versions/".concat(null===(t=(0,u.ts)())||void 0===t?void 0:t.uid,"/versions/").concat(e.id);try{return(await g.getDirectoryContents(s,{data:'<?xml version="1.0"?>\n<d:propfind xmlns:d="DAV:"\n\txmlns:oc="http://owncloud.org/ns"\n\txmlns:nc="http://nextcloud.org/ns"\n\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t<d:prop>\n\t\t<d:getcontentlength />\n\t\t<d:getcontenttype />\n\t\t<d:getlastmodified />\n\t\t<d:getetag />\n\t\t<nc:version-label />\n\t\t<nc:has-preview />\n\t</d:prop>\n</d:propfind>',details:!0})).data.filter((e=>{let{mime:t}=e;return""!==t})).map((t=>function(e,t){const s=1e3*h()(e.lastmod).unix();let n="";return n=s===t.mtime?(0,m.generateUrl)("/core/preview?fileId={fileId}&c={fileEtag}&x=250&y=250&forceIcon=0&a=0",{fileId:t.id,fileEtag:t.etag}):(0,m.generateUrl)("/apps/files_versions/preview?file={file}&version={fileVersion}",{file:(0,v.RQ)(t.path,t.name),fileVersion:e.basename}),{fileId:t.id,label:e.props["version-label"],filename:e.filename,basename:h()(s).format("LLL"),mime:e.mime,etag:"".concat(e.props.getetag),size:e.size,type:e.type,mtime:s,permissions:"R",hasPreview:1===e.props["has-preview"],previewUrl:n,url:(0,v.RQ)("/remote.php/dav",e.filename),source:(0,m.generateRemoteUrl)("dav")+b(e.filename),fileVersion:e.basename}}(t,e)))}catch(e){throw y.error("Could not fetch version",{exception:e}),e}}(this.fileInfo)}finally{this.loading=!1}},async handleRestore(e){const s=this.fileInfo;this.fileInfo={...this.fileInfo,size:e.size,mtime:e.mtime};const n={preventDefault:!1,fileInfo:this.fileInfo,version:e};if((0,f.j8)("files_versions:restore:requested",n),!n.preventDefault)try{await async function(e){try{var t,s;y.debug("Restoring version",{url:e.url}),await g.moveFile("/versions/".concat(null===(t=(0,u.ts)())||void 0===t?void 0:t.uid,"/versions/").concat(e.fileId,"/").concat(e.fileVersion),"/versions/".concat(null===(s=(0,u.ts)())||void 0===s?void 0:s.uid,"/restore/target"))}catch(e){throw y.error("Could not restore version",{exception:e}),e}}(e),""!==e.label?(0,l.s$)(t("files_versions","".concat(e.label," restored"))):e.mtime===this.initialVersionMtime?(0,l.s$)(t("files_versions","Initial version restored")):(0,l.s$)(t("files_versions","Version restored")),(0,f.j8)("files_versions:restore:restored",e)}catch(n){this.fileInfo=s,(0,l.x2)(t("files_versions","Could not restore version")),(0,f.j8)("files_versions:restore:failed",e)}},async handleLabelUpdate(e,s){const n=e.label;e.label=s;try{await async function(e,t){return await g.customRequest(e.filename,{method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t\t\t<d:propertyupdate xmlns:d="DAV:"\n\t\t\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t\t<d:set>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t<nc:version-label>'.concat(t,"</nc:version-label>\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:set>\n\t\t\t\t\t</d:propertyupdate>")})}(e,s)}catch(s){e.label=n,(0,l.x2)(t("files_versions","Could not set version name"))}},async handleDelete(e){const s=this.versions.indexOf(e);this.versions.splice(s,1);try{await async function(e){await g.deleteFile(e.filename)}(e)}catch(s){this.versions.push(e),(0,l.x2)(t("files_versions","Could not delete version"))}},resetState(){this.$set(this,"versions",[])},openVersion(e){let{version:t}=e;if(t.mtime===this.fileInfo.mtime)return void OCA.Viewer.open({fileInfo:this.viewerFileInfo});const s=this.versions.map((e=>{var t,s;return{...e,filename:e.mtime===this.fileInfo.mtime?a().join("files",null!==(t=null===(s=(0,u.ts)())||void 0===s?void 0:s.uid)&&void 0!==t?t:"",fileInfo.path,fileInfo.name):e.filename,hasPreview:!1,previewUrl:void 0}}));OCA.Viewer.open({fileInfo:s.find((e=>e.source===t.source)),enableSidebar:!1})},compareVersion(e){let{version:t}=e;const s=this.versions.map((e=>({...e,hasPreview:!1,previewUrl:void 0})));OCA.Viewer.compare(this.viewerFileInfo,s.find((e=>e.source===t.source)))}}},H=(0,W.Z)(G,(function(){var e=this,t=e._self._c;return t("ul",{attrs:{"data-files-versions-versions-list":""}},e._l(e.orderedVersions,(function(s){return t("Version",{key:s.mtime,attrs:{"can-view":e.canView,"can-compare":e.canCompare,"load-preview":e.isActive,version:s,"file-info":e.fileInfo,"is-current":s.mtime===e.fileInfo.mtime,"is-first-version":s.mtime===e.initialVersionMtime},on:{click:e.openVersion,compare:e.compareVersion,restore:e.handleRestore,"label-update":e.handleLabelUpdate,delete:e.handleDelete}})})),1)}),[],!1,null,null,null).exports;var Q=n(2324),J=n(27608);i.default.prototype.t=o.Iu,i.default.prototype.n=o.uN,i.default.use(Q.default);const X=i.default.extend(H);let K=null;window.addEventListener("DOMContentLoaded",(function(){var e;void 0!==(null===(e=OCA.Files)||void 0===e?void 0:e.Sidebar)&&OCA.Files.Sidebar.registerTab(new OCA.Files.Sidebar.Tab({id:"version_vue",name:(0,o.Iu)("files_versions","Versions"),iconSvg:J,async mount(e,t,s){K&&K.$destroy(),K=new X({parent:s}),await K.update(t),K.$mount(e)},update(e){K.update(e)},setIsActive(e){K.setIsActive(e)},destroy(){K.$destroy(),K=null},enabled(e){var t;return!(null===(t=null==e?void 0:e.isDirectory())||void 0===t||t)}}))}))},28176:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var n=s(87537),i=s.n(n),o=s(23645),r=s.n(o)()(i());r.push([e.id,".version[data-v-b584f27c]{display:flex;flex-direction:row}.version__info[data-v-b584f27c]{display:flex;flex-direction:row;align-items:center;gap:.5rem}.version__info__size[data-v-b584f27c]{color:var(--color-text-lighter)}.version__image[data-v-b584f27c]{width:3rem;height:3rem;border:1px solid var(--color-border);border-radius:var(--border-radius-large);display:flex;justify-content:center;color:var(--color-text-light)}.version-label-modal[data-v-b584f27c]{display:flex;justify-content:space-between;flex-direction:column;height:250px;padding:16px}.version-label-modal__title[data-v-b584f27c]{margin-bottom:12px;font-weight:600}.version-label-modal__info[data-v-b584f27c]{margin-top:12px;color:var(--color-text-maxcontrast)}.version-label-modal__actions[data-v-b584f27c]{display:flex;justify-content:space-between;margin-top:64px}","",{version:3,sources:["webpack://./apps/files_versions/src/components/Version.vue"],names:[],mappings:"AACA,0BACC,YAAA,CACA,kBAAA,CAEA,gCACC,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,SAAA,CAEA,sCACC,+BAAA,CAIF,iCACC,UAAA,CACA,WAAA,CACA,oCAAA,CACA,wCAAA,CAGA,YAAA,CACA,sBAAA,CACA,6BAAA,CAIF,sCACC,YAAA,CACA,6BAAA,CACA,qBAAA,CACA,YAAA,CACA,YAAA,CAEA,6CACC,kBAAA,CACA,eAAA,CAGD,4CACC,eAAA,CACA,mCAAA,CAGD,+CACC,YAAA,CACA,6BAAA,CACA,eAAA",sourcesContent:["\n.version {\n\tdisplay: flex;\n\tflex-direction: row;\n\n\t&__info {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tgap: 0.5rem;\n\n\t\t&__size {\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\t}\n\n\t&__image {\n\t\twidth: 3rem;\n\t\theight: 3rem;\n\t\tborder: 1px solid var(--color-border);\n\t\tborder-radius: var(--border-radius-large);\n\n\t\t// Useful to display no preview icon.\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tcolor: var(--color-text-light);\n\t}\n}\n\n.version-label-modal {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-direction: column;\n\theight: 250px;\n\tpadding: 16px;\n\n\t&__title {\n\t\tmargin-bottom: 12px;\n\t\tfont-weight: 600;\n\t}\n\n\t&__info {\n\t\tmargin-top: 12px;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__actions {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tmargin-top: 64px;\n\t}\n}\n"],sourceRoot:""}]);const a=r},46700:(e,t,s)=>{var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function i(e){var t=o(e);return s(t)}function o(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=46700}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var s=o[e]={id:e,loaded:!1,exports:{}};return i[e].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=i,e=[],r.O=(t,s,n,i)=>{if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],i=e[d][2];for(var a=!0,l=0;l<s.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((e=>r.O[e](s[l])))?s.splice(l--,1):(a=!1,i<o&&(o=i));if(a){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,n,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,s)=>(r.f[s](e,t),t)),[])),r.u=e=>e+"-"+e+".js?v=00434e4baa0d8e7b79f1",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s={},n="nextcloud:",r.l=(e,t,i,o)=>{if(s[e])s[e].push(t);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var f=c[d];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+i){a=f;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+i),a.src=e),s[e]=[t];var u=(t,n)=>{a.onerror=a.onload=null,clearTimeout(v);var i=s[e];if(delete s[e],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(n))),t)return t(n)},v=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),l&&document.head.appendChild(a)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.j=1358,(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=document.baseURI||self.location.href;var e={1358:0};r.f.j=(t,s)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)s.push(n[2]);else{var i=new Promise(((s,i)=>n=e[t]=[s,i]));s.push(n[2]=i);var o=r.p+r.u(t),a=new Error;r.l(o,(s=>{if(r.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",a.name="ChunkLoadError",a.type=i,a.request=o,n[1](a)}}),"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,s)=>{var n,i,o=s[0],a=s[1],l=s[2],c=0;if(o.some((t=>0!==e[t]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var d=l(r)}for(t&&t(s);c<o.length;c++)i=o[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})(),r.nc=void 0;var a=r.O(void 0,[7874],(()=>r(15732)));a=r.O(a)})();
//# sourceMappingURL=files_versions-files_versions.js.map?v=c221b409d73d8b1aa286