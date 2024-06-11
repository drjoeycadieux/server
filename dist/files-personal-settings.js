/*! For license information please see files-personal-settings.js.license?v=66a9fe3bc950699223b9 */
(()=>{"use strict";var e,r,n,s={12910:(e,r,n)=>{var s=n(85471),i=n(21777),o=n(26287),a=n(17334),l=n.n(a),c=n(63814),d=n(85168),u=n(67607),p=n(9518);const f=(0,n(35947).YK)().setApp("files").detectUser().build(),h=(0,d.a1)(t("files","Choose a file or folder to transfer")).setMultiSelect(!1).setType(1).allowDirectories().build(),g={name:"TransferOwnershipDialogue",components:{NcSelect:u.A,NcButton:p.A},data:()=>({directory:void 0,directoryPickerError:void 0,submitError:void 0,loadingUsers:!1,selectedUser:null,userSuggestions:{},config:{minSearchStringLength:parseInt(OC.config["sharing.minSearchStringLength"],10)||0}}),computed:{canSubmit(){return!!this.directory&&!!this.selectedUser},formatedUserSuggestions(){return Object.keys(this.userSuggestions).map((e=>{const t=this.userSuggestions[e];return{user:t.uid,displayName:t.displayName,icon:"icon-user"}}))},submitButtonText(){if(!this.canSubmit)return t("files","Transfer");const e=this.readableDirectory.split("/");return t("files","Transfer {path} to {userid}",{path:e[e.length-1],userid:this.selectedUser.displayName})},readableDirectory(){return this.directory?this.directory.substring(1):""}},created(){this.findUserDebounced=l()(this.findUser,300),this.findUser("")},methods:{start(){this.directoryPickerError=void 0,h.pick().then((e=>""===e?"/":e)).then((e=>{if(f.debug("path ".concat(e," selected for transferring ownership")),!e.startsWith("/"))throw new Error(t("files","Invalid path selected"));this.directory=e})).catch((e=>{f.error("Selecting object for transfer aborted: ".concat(e.message||"Unknown error"),{error:e}),this.directoryPickerError=e.message||t("files","Unknown error"),(0,d.Qg)(this.directoryPickerError)}))},async findUser(e){if(this.query=e.trim(),!(e.length<this.config.minSearchStringLength)){this.loadingUsers=!0;try{const t=await o.A.get((0,c.KT)("apps/files_sharing/api/v1/sharees"),{params:{format:"json",itemType:"file",search:e,perPage:20,lookup:!1}});this.userSuggestions={},t.data.ocs.data.exact.users.concat(t.data.ocs.data.users).forEach((e=>{s.Ay.set(this.userSuggestions,e.value.shareWith,{uid:e.value.shareWith,displayName:e.label})}))}catch(e){f.error("could not fetch users",{error:e})}finally{this.loadingUsers=!1}}},submit(){this.canSubmit||f.warn("ignoring form submit"),this.submitError=void 0;const e={path:this.directory,recipient:this.selectedUser.user};f.debug("submit transfer ownership form",e);const r=(0,c.KT)("apps/files/api/v1/transferownership");o.A.post(r,e).then((e=>e.data)).then((e=>{f.info("Transfer ownership request sent",{data:e}),this.directory=void 0,this.selectedUser=null,(0,d.Te)(t("files","Ownership transfer request sent"))})).catch((e=>{var r;f.error("Could not send ownership transfer request",{error:e}),403===(null==e||null===(r=e.response)||void 0===r?void 0:r.status)?this.submitError=t("files","Cannot transfer ownership of a file or folder you do not own"):this.submitError=e.message||t("files","Unknown error"),(0,d.Qg)(this.submitError)}))}}};var m=n(85072),v=n.n(m),A=n(97825),b=n.n(A),w=n(77659),y=n.n(w),C=n(55056),_=n.n(C),x=n(10540),S=n.n(x),k=n(41113),T=n.n(k),U=n(12405),E={};E.styleTagTransform=T(),E.setAttributes=_(),E.insert=y().bind(null,"head"),E.domAPI=b(),E.insertStyleElement=S(),v()(U.A,E),U.A&&U.A.locals&&U.A.locals;var O=n(14486);const D={name:"PersonalSettings",components:{TransferOwnershipDialogue:(0,O.A)(g,(function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v(e._s(e.t("files","Transfer ownership of a file or folder"))+" ")]),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("p",{staticClass:"transfer-select-row"},[t("span",[e._v(e._s(e.readableDirectory))]),e._v(" "),void 0===e.directory?t("NcButton",{staticClass:"transfer-select-row__choose_button",on:{click:function(t){return t.preventDefault(),e.start.apply(null,arguments)}}},[e._v("\n\t\t\t\t"+e._s(e.t("files","Choose file or folder to transfer"))+"\n\t\t\t")]):t("NcButton",{on:{click:function(t){return t.preventDefault(),e.start.apply(null,arguments)}}},[e._v("\n\t\t\t\t"+e._s(e.t("files","Change"))+"\n\t\t\t")])],1),e._v(" "),t("p",{staticClass:"new-owner-row"},[t("label",{attrs:{for:"targetUser"}},[t("span",[e._v(e._s(e.t("files","New owner")))])]),e._v(" "),t("NcSelect",{staticClass:"middle-align",attrs:{"input-id":"targetUser",options:e.formatedUserSuggestions,multiple:!1,loading:e.loadingUsers,label:"displayName","user-select":!0},on:{search:e.findUserDebounced},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}})],1),e._v(" "),t("p",[t("NcButton",{attrs:{"native-type":"submit",type:"primary",disabled:!e.canSubmit}},[e._v("\n\t\t\t\t"+e._s(e.submitButtonText)+"\n\t\t\t")])],1)])])}),[],!1,null,"5937cded",null).exports}},N=(0,O.A)(D,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"section",attrs:{id:"files-personal-settings"}},[t("h2",[e._v(e._s(e.t("files","Files")))]),e._v(" "),t("TransferOwnershipDialogue")],1)}),[],!1,null,null,null).exports;n.nc=btoa((0,i.do)()),s.Ay.prototype.t=t,window.TESTING||(new(s.Ay.extend(N))).$mount("#files-personal-settings")},12405:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(71354),s=r.n(n),i=r(76314),o=r.n(i)()(s());o.push([e.id,".middle-align[data-v-5937cded]{vertical-align:middle}p[data-v-5937cded]{margin-top:12px;margin-bottom:12px}.new-owner-row[data-v-5937cded]{display:flex;flex-wrap:wrap}.new-owner-row label[data-v-5937cded]{display:flex;align-items:center;margin-bottom:calc(var(--default-grid-baseline)*2)}.new-owner-row label span[data-v-5937cded]{margin-right:8px}.new-owner-row .multiselect[data-v-5937cded]{flex-grow:1;max-width:280px}.transfer-select-row span[data-v-5937cded]{margin-right:8px}.transfer-select-row__choose_button[data-v-5937cded]{width:min(100%,400px) !important}","",{version:3,sources:["webpack://./apps/files/src/components/TransferOwnershipDialogue.vue"],names:[],mappings:"AACA,+BACC,qBAAA,CAED,mBACC,eAAA,CACA,kBAAA,CAED,gCACC,YAAA,CACA,cAAA,CAEA,sCACC,YAAA,CACA,kBAAA,CACA,kDAAA,CAEA,2CACC,gBAAA,CAIF,6CACC,WAAA,CACA,eAAA,CAID,2CACC,gBAAA,CAGD,qDACC,gCAAA",sourcesContent:["\n.middle-align {\n\tvertical-align: middle;\n}\np {\n\tmargin-top: 12px;\n\tmargin-bottom: 12px;\n}\n.new-owner-row {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\n\tlabel {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin-bottom: calc(var(--default-grid-baseline) * 2);\n\n\t\tspan {\n\t\t\tmargin-right: 8px;\n\t\t}\n\t}\n\n\t.multiselect {\n\t\tflex-grow: 1;\n\t\tmax-width: 280px;\n\t}\n}\n.transfer-select-row {\n\tspan {\n\t\tmargin-right: 8px;\n\t}\n\n\t&__choose_button {\n\t\twidth: min(100%, 400px) !important;\n\t}\n}\n"],sourceRoot:""}]);const a=o}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return s[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=s,e=[],o.O=(t,r,n,s)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],s=e[d][2];for(var a=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(a=!1,s<i&&(i=s));if(a){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,n,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+"-"+e+".js?v="+{1110:"a5d6e6f59aa058840a1e",5455:"3ac95a973131d586425e"}[e],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="nextcloud:",o.l=(e,t,s,i)=>{if(r[e])r[e].push(t);else{var a,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+s){a=u;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",n+s),a.src=e),r[e]=[t];var p=(t,n)=>{a.onerror=a.onload=null,clearTimeout(f);var s=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=9233,(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e={9233:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise(((r,s)=>n=e[t]=[r,s]));r.push(n[2]=s);var i=o.p+o.u(t),a=new Error;o.l(i,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",a.name="ChunkLoadError",a.type=s,a.request=i,n[1](a)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,i=r[0],a=r[1],l=r[2],c=0;if(i.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(l)var d=l(o)}for(t&&t(r);c<i.length;c++)s=i[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.nc=void 0;var a=o.O(void 0,[4208],(()=>o(12910)));a=o.O(a)})();
//# sourceMappingURL=files-personal-settings.js.map?v=66a9fe3bc950699223b9