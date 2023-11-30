/*! For license information please see files-reference-files.js.LICENSE.txt */
(()=>{"use strict";var e,i,n,o={67926:(e,i,n)=>{var o=n(20144),a=n(31352),r=(n(13372),n(29612)),l=n(79753),d=n(62520),s=n.n(d),c=n(25108);const A={name:"ReferenceFileWidget",props:{richObject:{type:Object,required:!0},accessible:{type:Boolean,default:!0}},data(){return{previewUrl:window.OC.MimeType.getIconUrl(this.richObject.mimetype)}},computed:{fileSize(){return window.OC.Util.humanFileSize(this.richObject.size)},fileMtime(){return window.OC.Util.relativeModifiedDate(1e3*this.richObject.mtime)},filePath(){return s().dirname(this.richObject.path)},filePreview(){return this.previewUrl?{backgroundImage:"url("+this.previewUrl+")"}:{backgroundImage:"url("+window.OC.MimeType.getIconUrl(this.richObject.mimetype)+")"}},filePreviewClass(){return this.previewUrl?"widget-file--image--preview":"widget-file--image--icon"}},mounted(){if(this.richObject["preview-available"]){const e=(0,l.generateUrl)("/core/preview?fileId={fileId}&x=250&y=250",{fileId:this.richObject.id}),t=new Image;t.onload=()=>{this.previewUrl=e},t.onerror=e=>{c.error("could not load recommendation preview",e)},t.src=e}},methods:{navigate(){OCA.Viewer&&-1!==OCA.Viewer.mimetypes.indexOf(this.richObject.mimetype)?OCA.Viewer.open({path:this.richObject.path}):window.location=this.richObject.link}}};var p=n(93379),g=n.n(p),f=n(7795),C=n.n(f),u=n(90569),m=n.n(u),w=n(3565),v=n.n(w),h=n(19216),b=n.n(h),x=n(44589),y=n.n(x),I=n(27357),j={};j.styleTagTransform=y(),j.setAttributes=v(),j.insert=m().bind(null,"head"),j.domAPI=C(),j.insertStyleElement=b(),g()(I.Z,j),I.Z&&I.Z.locals&&I.Z.locals;var k=n(51900);const M=(0,k.Z)(A,(function(){var e=this,t=e._self._c;return e.accessible?t("a",{staticClass:"widget-file",attrs:{href:e.richObject.link},on:{click:function(t){return t.preventDefault(),e.navigate.apply(null,arguments)}}},[t("div",{staticClass:"widget-file--image",class:e.filePreviewClass,style:e.filePreview}),e._v(" "),t("div",{staticClass:"widget-file--details"},[t("p",{staticClass:"widget-file--title"},[e._v(e._s(e.richObject.name))]),e._v(" "),t("p",{staticClass:"widget-file--description"},[e._v(e._s(e.fileSize)),t("br"),e._v(e._s(e.fileMtime))]),e._v(" "),t("p",{staticClass:"widget-file--link"},[e._v(e._s(e.filePath))])])]):t("div",{staticClass:"widget-file widget-file--no-access"},[t("div",{staticClass:"widget-file--image widget-file--image--icon icon-folder"}),e._v(" "),t("div",{staticClass:"widget-file--details"},[t("p",{staticClass:"widget-file--title"},[e._v("\n\t\t\t"+e._s(e.t("files","File cannot be accessed"))+"\n\t\t")]),e._v(" "),t("p",{staticClass:"widget-file--description"},[e._v("\n\t\t\t"+e._s(e.t("files","You might not have have permissions to view it, ask the sender to share it"))+"\n\t\t")])])])}),[],!1,null,"3f729da0",null).exports;var O=n(64024);const B={name:"FileReferencePickerElement",components:{},props:{providerId:{type:String,required:!0},accessible:{type:Boolean,default:!1}},mounted(){this.openFilePicker(),window.addEventListener("click",this.onWindowClick)},beforeDestroy(){window.removeEventListener("click",this.onWindowClick)},methods:{onWindowClick(e){"A"===e.target.tagName&&e.target.classList.contains("oc-dialog-close")&&this.$emit("cancel")},async openFilePicker(){OC.dialogs.filepicker(t("files","Select file or folder to link to"),(e=>{OC.Files.getClient().getFileInfo(e).then(((e,t)=>{this.submit(t.id)}))}),!1,[],!1,O.K9.Choose,"",{target:this.$refs.picker})},submit(e){const t=window.location.protocol+"//"+window.location.host+(0,l.generateUrl)("/f/{fileId}",{fileId:e});this.$emit("submit",t)}}};var Z=n(62940),L={};L.styleTagTransform=y(),L.setAttributes=v(),L.insert=m().bind(null,"head"),L.domAPI=C(),L.insertStyleElement=b(),g()(Z.Z,L),Z.Z&&Z.Z.locals&&Z.Z.locals;const S=(0,k.Z)(B,(function(){return(0,this._self._c)("div",{ref:"picker",staticClass:"reference-file-picker"})}),[],!1,null,"2dd87592",null).exports;o.default.mixin({methods:{t:a.Iu}}),(0,r.r)("file",((e,t)=>{let{richObjectType:i,richObject:n,accessible:a}=t;new(o.default.extend(M))({propsData:{richObjectType:i,richObject:n,accessible:a}}).$mount(e)})),(0,r.f)("files",((e,t)=>{let{providerId:i,accessible:n}=t;const a=new(o.default.extend(S))({propsData:{providerId:i,accessible:n}}).$mount(e);return new r.e(a.$el,a)}),((e,t)=>{t.object.$destroy()}))},62940:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(87537),o=i.n(n),a=i(23645),r=i.n(a)()(o());r.push([e.id,".reference-file-picker[data-v-2dd87592]{flex-grow:1;padding:12px 16px 16px 16px}.reference-file-picker[data-v-2dd87592] .oc-dialog{transform:none !important;box-shadow:none !important;flex-grow:1 !important;position:static !important;width:100% !important;height:auto !important;padding:0 !important;max-width:initial}.reference-file-picker[data-v-2dd87592] .oc-dialog .oc-dialog-close{display:none}.reference-file-picker[data-v-2dd87592] .oc-dialog .oc-dialog-buttonrow.onebutton.aside{position:absolute;padding:12px 32px}.reference-file-picker[data-v-2dd87592] .oc-dialog .oc-dialog-content{max-width:100% !important}","",{version:3,sources:["webpack://./apps/files/src/views/FileReferencePickerElement.vue"],names:[],mappings:"AACA,wCACC,WAAA,CACA,2BAAA,CAEA,mDACC,yBAAA,CACA,0BAAA,CACA,sBAAA,CACA,0BAAA,CACA,qBAAA,CACA,sBAAA,CACA,oBAAA,CACA,iBAAA,CAEA,oEACC,YAAA,CAGD,wFACC,iBAAA,CACA,iBAAA,CAGD,sEACC,yBAAA",sourcesContent:["\n.reference-file-picker {\n\tflex-grow: 1;\n\tpadding: 12px 16px 16px 16px;\n\n\t&:deep(.oc-dialog) {\n\t\ttransform: none !important;\n\t\tbox-shadow: none !important;\n\t\tflex-grow: 1 !important;\n\t\tposition: static !important;\n\t\twidth: 100% !important;\n\t\theight: auto !important;\n\t\tpadding: 0 !important;\n\t\tmax-width: initial;\n\n\t\t.oc-dialog-close {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.oc-dialog-buttonrow.onebutton.aside {\n\t\t\tposition: absolute;\n\t\t\tpadding: 12px 32px;\n\t\t}\n\n\t\t.oc-dialog-content {\n\t\t\tmax-width: 100% !important;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const l=r},27357:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(87537),o=i.n(n),a=i(23645),r=i.n(a)()(o());r.push([e.id,".widget-file[data-v-3f729da0]{display:flex;flex-grow:1;color:var(--color-main-text) !important;text-decoration:none !important}.widget-file--image[data-v-3f729da0]{min-width:40%;background-position:center;background-size:cover;background-repeat:no-repeat}.widget-file--image.widget-file--image--icon[data-v-3f729da0]{min-width:88px;background-size:44px}.widget-file--title[data-v-3f729da0]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:bold}.widget-file--details[data-v-3f729da0]{padding:12px;flex-grow:1;display:flex;flex-direction:column}.widget-file--details p[data-v-3f729da0]{margin:0;padding:0}.widget-file--description[data-v-3f729da0]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.widget-file--link[data-v-3f729da0]{color:var(--color-text-maxcontrast)}.widget-file.widget-file--no-access[data-v-3f729da0]{padding:12px}.widget-file.widget-file--no-access .widget-file--details[data-v-3f729da0]{padding:0}","",{version:3,sources:["webpack://./apps/files/src/views/ReferenceFileWidget.vue"],names:[],mappings:"AACA,8BACC,YAAA,CACA,WAAA,CACA,uCAAA,CACA,+BAAA,CAEA,qCACC,aAAA,CACA,0BAAA,CACA,qBAAA,CACA,2BAAA,CAEA,8DACC,cAAA,CACA,oBAAA,CAIF,qCACC,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,gBAAA,CAGD,uCACC,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CAEA,yCACC,QAAA,CACA,SAAA,CAIF,2CACC,eAAA,CACA,sBAAA,CACA,mBAAA,CACA,oBAAA,CACA,YAAA,CACA,2BAAA,CAGD,oCACC,mCAAA,CAGD,qDACC,YAAA,CAEA,2EACC,SAAA",sourcesContent:["\n.widget-file {\n\tdisplay: flex;\n\tflex-grow: 1;\n\tcolor: var(--color-main-text) !important;\n\ttext-decoration: none !important;\n\n\t&--image {\n\t\tmin-width: 40%;\n\t\tbackground-position: center;\n\t\tbackground-size: cover;\n\t\tbackground-repeat: no-repeat;\n\n\t\t&.widget-file--image--icon {\n\t\t\tmin-width: 88px;\n\t\t\tbackground-size: 44px;\n\t\t}\n\t}\n\n\t&--title {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\tfont-weight: bold;\n\t}\n\n\t&--details {\n\t\tpadding: 12px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tp {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n\n\t&--description {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-line-clamp: 3;\n\t\tline-clamp: 3;\n\t\t-webkit-box-orient: vertical;\n\t}\n\n\t&--link {\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&.widget-file--no-access {\n\t\tpadding: 12px;\n\n\t\t.widget-file--details {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const l=r},42761:e=>{e.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTS00LTRoMjR2MjRILTRWLTR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTggMEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOC0zLjYtOC04LTh6IiBmaWxsPSIjZWQ0ODRjIi8+PHBhdGggZD0iTTUgNi41aDZjLjggMCAxLjUuNyAxLjUgMS41cy0uNyAxLjUtMS41IDEuNUg1Yy0uOCAwLTEuNS0uNy0xLjUtMS41UzQuMiA2LjUgNSA2LjV6IiBmaWxsPSIjZmRmZmZmIi8+PC9zdmc+Cg=="},87210:e=>{e.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTQuOCAxMS4yaDYuNFY0LjhINC44djYuNHpNOCAwQzMuNiAwIDAgMy42IDAgOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHoiIGZpbGw9IiM0OWIzODIiLz48L3N2Zz4K"},94659:e=>{e.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS00LTRoMjR2MjRILTR6Ii8+PHBhdGggZD0iTTYuOS4xQzMgLjYtLjEgNC0uMSA4YzAgNC40IDMuNiA4IDggOCA0IDAgNy40LTMgOC02LjktMS4yIDEuMy0yLjkgMi4xLTQuNyAyLjEtMy41IDAtNi40LTIuOS02LjQtNi40IDAtMS45LjgtMy42IDIuMS00Ljd6IiBmaWxsPSIjZjRhMzMxIi8+PC9zdmc+Cg=="}},a={};function r(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=o,e=[],r.O=(t,i,n,o)=>{if(!i){var a=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],o=e[c][2];for(var l=!0,d=0;d<i.length;d++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](i[d])))?i.splice(d--,1):(l=!1,o<a&&(a=o));if(l){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,n,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,i)=>(r.f[i](e,t),t)),[])),r.u=e=>e+"-"+e+".js?v="+{2048:"78a82614529a3cefcde7",4180:"5116179e8f8e6c1f643c"}[e],r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},n="nextcloud:",r.l=(e,t,o,a)=>{if(i[e])i[e].push(t);else{var l,d;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var A=s[c];if(A.getAttribute("src")==e||A.getAttribute("data-webpack")==n+o){l=A;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",n+o),l.src=e),i[e]=[t];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(g);var o=i[e];if(delete i[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),t)return t(n)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),d&&document.head.appendChild(l)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.j=9098,(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&!e;)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=document.baseURI||self.location.href;var e={9098:0};r.f.j=(t,i)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var o=new Promise(((i,o)=>n=e[t]=[i,o]));i.push(n[2]=o);var a=r.p+r.u(t),l=new Error;r.l(a,(i=>{if(r.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}}),"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,i)=>{var n,o,a=i[0],l=i[1],d=i[2],s=0;if(a.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(d)var c=d(r)}for(t&&t(i);s<a.length;s++)o=a[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),r.nc=void 0;var l=r.O(void 0,[7874],(()=>r(67926)));l=r.O(l)})();
//# sourceMappingURL=files-reference-files.js.map?v=d975f122e4a71c6ae0ee