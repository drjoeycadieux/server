/*! For license information please see 3222-3222.js.LICENSE.txt */
"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[3222],{92246:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(87537),n=i.n(a),r=i(23645),l=i.n(r)()(n());l.push([e.id,".template-picker__item[data-v-0859a92c]{display:flex}.template-picker__label[data-v-0859a92c]{display:flex;align-items:center;flex:1 1;flex-direction:column}.template-picker__label[data-v-0859a92c],.template-picker__label *[data-v-0859a92c]{cursor:pointer;user-select:none}.template-picker__label[data-v-0859a92c]::before{display:none !important}.template-picker__preview[data-v-0859a92c]{display:block;overflow:hidden;flex:1 1;width:var(--width);min-height:var(--height);max-height:var(--height);padding:0;border:var(--border) solid var(--color-border);border-radius:var(--border-radius-large)}input:checked+label>.template-picker__preview[data-v-0859a92c]{border-color:var(--color-primary-element)}.template-picker__preview--failed[data-v-0859a92c]{display:flex}.template-picker__image[data-v-0859a92c]{max-width:100%;background-color:var(--color-main-background);object-fit:cover}.template-picker__preview--failed .template-picker__image[data-v-0859a92c]{width:calc(var(--margin)*8);margin:auto;background-color:rgba(0,0,0,0) !important;object-fit:initial}.template-picker__title[data-v-0859a92c]{overflow:hidden;max-width:calc(var(--width) + 4px);padding:var(--margin);white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./apps/files/src/components/TemplatePreview.vue"],names:[],mappings:"AAGC,wCACC,YAAA,CAGD,yCACC,YAAA,CAEA,kBAAA,CACA,QAAA,CACA,qBAAA,CAEA,oFACC,cAAA,CACA,gBAAA,CAGD,iDACC,uBAAA,CAIF,2CACC,aAAA,CACA,eAAA,CAEA,QAAA,CACA,kBAAA,CACA,wBAAA,CACA,wBAAA,CACA,SAAA,CACA,8CAAA,CACA,wCAAA,CAEA,+DACC,yCAAA,CAGD,mDAEC,YAAA,CAIF,yCACC,cAAA,CACA,6CAAA,CAEA,gBAAA,CAID,2EACC,2BAAA,CAEA,WAAA,CACA,yCAAA,CAEA,kBAAA,CAGD,yCACC,eAAA,CAEA,kCAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:["\n\n.template-picker {\n\t&__item {\n\t\tdisplay: flex;\n\t}\n\n\t&__label {\n\t\tdisplay: flex;\n\t\t// Align in the middle of the grid\n\t\talign-items: center;\n\t\tflex: 1 1;\n\t\tflex-direction: column;\n\n\t\t&, * {\n\t\t\tcursor: pointer;\n\t\t\tuser-select: none;\n\t\t}\n\n\t\t&::before {\n\t\t\tdisplay: none !important;\n\t\t}\n\t}\n\n\t&__preview {\n\t\tdisplay: block;\n\t\toverflow: hidden;\n\t\t// Stretch so all entries are the same width\n\t\tflex: 1 1;\n\t\twidth: var(--width);\n\t\tmin-height: var(--height);\n\t\tmax-height: var(--height);\n\t\tpadding: 0;\n\t\tborder: var(--border) solid var(--color-border);\n\t\tborder-radius: var(--border-radius-large);\n\n\t\tinput:checked + label > & {\n\t\t\tborder-color: var(--color-primary-element);\n\t\t}\n\n\t\t&--failed {\n\t\t\t// Make sure to properly center fallback icon\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n\n\t&__image {\n\t\tmax-width: 100%;\n\t\tbackground-color: var(--color-main-background);\n\n\t\tobject-fit: cover;\n\t}\n\n\t// Failed preview, fallback to mime icon\n\t&__preview--failed &__image {\n\t\twidth: calc(var(--margin) * 8);\n\t\t// Center mime icon\n\t\tmargin: auto;\n\t\tbackground-color: transparent !important;\n\n\t\tobject-fit: initial;\n\t}\n\n\t&__title {\n\t\toverflow: hidden;\n\t\t// also count preview border\n\t\tmax-width: calc(var(--width) + 2*2px);\n\t\tpadding: var(--margin);\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n}\n\n"],sourceRoot:""}]);const o=l},92464:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(87537),n=i.n(a),r=i(23645),l=i.n(r)()(n());l.push([e.id,".templates-picker__form[data-v-6c7bdb8e]{padding:calc(var(--margin)*2);padding-bottom:0}.templates-picker__form h2[data-v-6c7bdb8e]{text-align:center;font-weight:bold;margin:var(--margin) 0 calc(var(--margin)*2)}.templates-picker__list[data-v-6c7bdb8e]{display:grid;grid-gap:calc(var(--margin)*2);grid-auto-columns:1fr;max-width:calc(var(--fullwidth)*6);grid-template-columns:repeat(auto-fit, var(--fullwidth));grid-auto-rows:1fr;justify-content:center}.templates-picker__buttons[data-v-6c7bdb8e]{display:flex;justify-content:end;padding:calc(var(--margin)*2) var(--margin);position:sticky;bottom:0;background-image:linear-gradient(0, var(--gradient-main-background))}.templates-picker__buttons button[data-v-6c7bdb8e],.templates-picker__buttons input[type=submit][data-v-6c7bdb8e]{height:44px}.templates-picker[data-v-6c7bdb8e] .modal-container{position:relative}.templates-picker__loading[data-v-6c7bdb8e]{position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;margin:0;background-color:var(--color-main-background-translucent)}","",{version:3,sources:["webpack://./apps/files/src/views/TemplatePicker.vue"],names:[],mappings:"AAEC,yCACC,6BAAA,CAEA,gBAAA,CAEA,4CACC,iBAAA,CACA,gBAAA,CACA,4CAAA,CAIF,yCACC,YAAA,CACA,8BAAA,CACA,qBAAA,CAEA,kCAAA,CACA,wDAAA,CAEA,kBAAA,CAEA,sBAAA,CAGD,4CACC,YAAA,CACA,mBAAA,CACA,2CAAA,CACA,eAAA,CACA,QAAA,CACA,oEAAA,CAEA,kHACC,WAAA,CAKF,oDACC,iBAAA,CAGD,4CACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,sBAAA,CACA,UAAA,CACA,WAAA,CACA,QAAA,CACA,yDAAA",sourcesContent:["\n.templates-picker {\n\t&__form {\n\t\tpadding: calc(var(--margin) * 2);\n\t\t// Will be handled by the buttons\n\t\tpadding-bottom: 0;\n\n\t\th2 {\n\t\t\ttext-align: center;\n\t\t\tfont-weight: bold;\n\t\t\tmargin: var(--margin) 0 calc(var(--margin) * 2);\n\t\t}\n\t}\n\n\t&__list {\n\t\tdisplay: grid;\n\t\tgrid-gap: calc(var(--margin) * 2);\n\t\tgrid-auto-columns: 1fr;\n\t\t// We want maximum 5 columns. Putting 6 as we don't count the grid gap. So it will always be lower than 6\n\t\tmax-width: calc(var(--fullwidth) * 6);\n\t\tgrid-template-columns: repeat(auto-fit, var(--fullwidth));\n\t\t// Make sure all rows are the same height\n\t\tgrid-auto-rows: 1fr;\n\t\t// Center the columns set\n\t\tjustify-content: center;\n\t}\n\n\t&__buttons {\n\t\tdisplay: flex;\n\t\tjustify-content: end;\n\t\tpadding: calc(var(--margin) * 2) var(--margin);\n\t\tposition: sticky;\n\t\tbottom: 0;\n\t\tbackground-image: linear-gradient(0, var(--gradient-main-background));\n\n\t\tbutton, input[type='submit'] {\n\t\t\theight: 44px;\n\t\t}\n\t}\n\n\t// Make sure we're relative for the loading emptycontent on top\n\t::v-deep .modal-container {\n\t\tposition: relative;\n\t}\n\n\t&__loading {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmargin: 0;\n\t\tbackground-color: var(--color-main-background-translucent);\n\t}\n}\n\n"],sourceRoot:""}]);const o=l},73222:(e,t,i)=>{i.r(t),i.d(t,{default:()=>$});var a=i(77958),n=i(64024),r=i(69183),l=i(5656),o=i(31352),s=i(79753),c=i(62520),A=i(20144),d=i(93664),p=i(52506),m=i(79584),h=i(29742);const u={name:"TemplatePreview",inheritAttrs:!1,props:{basename:{type:String,required:!0},checked:{type:Boolean,default:!1},fileid:{type:[String,Number],required:!0},filename:{type:String,required:!0},previewUrl:{type:String,default:null},hasPreview:{type:Boolean,default:!0},mime:{type:String,required:!0},ratio:{type:Number,default:null}},data:()=>({failedPreview:!1}),computed:{nameWithoutExt(){return this.basename.indexOf(".")>-1?this.basename.split(".").slice(0,-1).join("."):this.basename},id(){return`template-picker-${this.fileid}`},realPreviewUrl(){return this.failedPreview&&this.mimeIcon?this.mimeIcon:this.previewUrl?this.previewUrl:(0,a.ts)()?(0,s.generateUrl)(`/core/preview?fileId=${this.fileid}&x=256&y=256&a=1`):(0,s.generateUrl)(`/apps/files_sharing/publicpreview/${document.getElementById("sharingToken")&&document.getElementById("sharingToken").value}?fileId=${this.fileid}&file=${(0,h.Px)(this.filename)}&x=256&y=256&a=1`)},mimeIcon(){return OC.MimeType.getIconUrl(this.mime)}},methods:{onCheck(){this.$emit("check",this.fileid)},onFailure(){this.failedPreview=!0}}};var C=i(93379),v=i.n(C),g=i(7795),f=i.n(g),b=i(90569),w=i.n(b),_=i(3565),k=i.n(_),y=i(19216),x=i.n(y),B=i(44589),E=i.n(B),P=i(92246),T={};T.styleTagTransform=E(),T.setAttributes=k(),T.insert=w().bind(null,"head"),T.domAPI=f(),T.insertStyleElement=x(),v()(P.Z,T),P.Z&&P.Z.locals&&P.Z.locals;var Z=i(51900);const I=(0,Z.Z)(u,(function(){var e=this,t=e._self._c;return t("li",{staticClass:"template-picker__item"},[t("input",{staticClass:"radio",attrs:{id:e.id,type:"radio",name:"template-picker"},domProps:{checked:e.checked},on:{change:e.onCheck}}),e._v(" "),t("label",{staticClass:"template-picker__label",attrs:{for:e.id}},[t("div",{staticClass:"template-picker__preview",class:e.failedPreview?"template-picker__preview--failed":""},[t("img",{staticClass:"template-picker__image",attrs:{src:e.realPreviewUrl,alt:"",draggable:"false"},on:{error:e.onFailure}})]),e._v(" "),t("span",{staticClass:"template-picker__title"},[e._v("\n\t\t\t"+e._s(e.nameWithoutExt)+"\n\t\t")])])])}),[],!1,null,"0859a92c",null).exports;var D=i(4389);const j=(0,A.aZ)({name:"TemplatePicker",components:{NcEmptyContent:p.Z,NcModal:m.Z,TemplatePreview:I},data:()=>({checked:-1,loading:!1,name:null,opened:!1,provider:null}),computed:{extension(){return(0,c.extname)(this.name??"")},nameWithoutExt(){return this.extension?this.name.slice(0,0-this.extension.length):this.name},emptyTemplate(){return{basename:(0,o.Iu)("files","Blank"),fileid:-1,filename:(0,o.Iu)("files","Blank"),hasPreview:!1,mime:this.provider?.mimetypes[0]||this.provider?.mimetypes}},selectedTemplate(){return this.provider?this.provider.templates.find((e=>e.fileid===this.checked)):null},style(){if(!this.provider)return{};const e=(this.provider.ratio?this.provider.ratio:1.77)>1?240:160;return{"--margin":"8px","--width":e+"px","--border":"2px","--fullwidth":e+16+4+"px","--height":this.provider.ratio?Math.round(e/this.provider.ratio)+"px":null}}},methods:{t:o.Iu,async open(e,t){this.checked=this.emptyTemplate.fileid,this.name=e,this.provider=t;const i=(await async function(){return(await d.Z.get((0,s.generateOcsUrl)("apps/files/api/v1/templates"))).data.ocs.data}()).find((e=>e.app===t.app&&e.label===t.label));if(null===i)throw new Error("Failed to match provider in results");this.provider=i,0!==i.templates.length?this.opened=!0:this.onSubmit()},close(){this.checked=this.emptyTemplate.fileid,this.loading=!1,this.name=null,this.opened=!1,this.provider=null},onCheck(e){this.checked=e},async onSubmit(){this.loading=!0;const e=new URL(window.location.href).searchParams.get("dir")||"/";this.nameWithoutExt===this.name&&(D.Z.warn("Fixed invalid filename",{name:this.name,extension:this.provider?.extension}),this.name=`${this.name}${this.provider?.extension??""}`);try{const t=await async function(e,t,i){return(await d.Z.post((0,s.generateOcsUrl)("apps/files/api/v1/templates/create"),{filePath:e,templatePath:t,templateType:i})).data.ocs.data}((0,c.normalize)(`${e}/${this.name}`),this.selectedTemplate?.filename??"",this.selectedTemplate?.templateType??"");D.Z.debug("Created new file",t);const i=(0,a.ts)()?.uid||null,n=new l.$B({id:t.fileid,source:(0,s.generateRemoteUrl)((0,c.join)(`dav/files/${i}`,t.filename)),root:`/files/${i}`,mime:t.mime,mtime:new Date(1e3*t.lastmod),owner:i,size:t.size,permissions:t.permissions,attributes:{...t,"has-preview":t.hasPreview}});(0,r.j8)("files:node:created",n),(0,r.j8)("files:node:focus",n),this.close()}catch(e){D.Z.error("Error while creating the new file from template",{error:e}),(0,n.x2)((0,o.Iu)("files","Unable to create new file from template"))}finally{this.loading=!1}}}});var U=i(92464),S={};S.styleTagTransform=E(),S.setAttributes=k(),S.insert=w().bind(null,"head"),S.domAPI=f(),S.insertStyleElement=x(),v()(U.Z,S),U.Z&&U.Z.locals&&U.Z.locals;const $=(0,Z.Z)(j,(function(){var e=this,t=e._self._c;return e._self._setupProxy,e.opened?t("NcModal",{staticClass:"templates-picker",attrs:{"clear-view-delay":-1,size:"large"},on:{close:e.close}},[t("form",{staticClass:"templates-picker__form",style:e.style,on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.onSubmit.apply(null,arguments)}}},[t("h2",[e._v(e._s(e.t("files","Pick a template for {name}",{name:e.nameWithoutExt})))]),e._v(" "),t("ul",{staticClass:"templates-picker__list"},[t("TemplatePreview",e._b({attrs:{checked:e.checked===e.emptyTemplate.fileid},on:{check:e.onCheck}},"TemplatePreview",e.emptyTemplate,!1)),e._v(" "),e._l(e.provider.templates,(function(i){return t("TemplatePreview",e._b({key:i.fileid,attrs:{checked:e.checked===i.fileid,ratio:e.provider.ratio},on:{check:e.onCheck}},"TemplatePreview",i,!1))}))],2),e._v(" "),t("div",{staticClass:"templates-picker__buttons"},[t("input",{staticClass:"primary",attrs:{type:"submit","aria-label":e.t("files","Create a new file with the selected template")},domProps:{value:e.t("files","Create")}})])]),e._v(" "),e.loading?t("NcEmptyContent",{staticClass:"templates-picker__loading",attrs:{icon:"icon-loading"}},[e._v("\n\t\t"+e._s(e.t("files","Creating file"))+"\n\t")]):e._e()],1):e._e()}),[],!1,null,"6c7bdb8e",null).exports}}]);
//# sourceMappingURL=3222-3222.js.map?v=67e1d3f37964c638f58a