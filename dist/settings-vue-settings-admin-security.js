/*! For license information please see settings-vue-settings-admin-security.js.LICENSE.txt */
!function(){"use strict";var e,n={61482:function(e,n,o){var r=o(79954),s=o(20144),i=o(4820),a=o(98266),c=o.n(a),d=o(10861),u=o.n(d),l=o(20571),p=o.n(l),g=o(13299),f=o.n(g),h=o(96486),m=o.n(h),v=o(79753),b=o(25108),y={name:"AdminTwoFactor",components:{NcMultiselect:c(),NcButton:u(),NcCheckboxRadioSwitch:p(),NcSettingsSection:f()},data:function(){return{loading:!1,dirty:!1,groups:[],loadingGroups:!1,twoFactorAdminDoc:(0,r.j)("settings","two-factor-admin-doc")}},computed:{enforced:{get:function(){return this.$store.state.enforced},set:function(t){this.dirty=!0,this.$store.commit("setEnforced",t)}},enforcedGroups:{get:function(){return this.$store.state.enforcedGroups},set:function(t){this.dirty=!0,this.$store.commit("setEnforcedGroups",t)}},excludedGroups:{get:function(){return this.$store.state.excludedGroups},set:function(t){this.dirty=!0,this.$store.commit("setExcludedGroups",t)}}},mounted:function(){this.groups=m().sortedUniq(m().uniq(this.enforcedGroups.concat(this.excludedGroups))),this.searchGroup("")},methods:{searchGroup:m().debounce((function(t){var e=this;this.loadingGroups=!0,i.default.get((0,v.generateOcsUrl)("cloud/groups?offset=0&search={query}&limit=20",{query:t})).then((function(t){return t.data.ocs})).then((function(t){return t.data.groups})).then((function(t){e.groups=m().sortedUniq(m().uniq(e.groups.concat(t)))})).catch((function(t){return b.error("could not search groups",t)})).then((function(){e.loadingGroups=!1}))}),500),saveChanges:function(){var t=this;this.loading=!0;var e={enforced:this.enforced,enforcedGroups:this.enforcedGroups,excludedGroups:this.excludedGroups};i.default.put((0,v.generateUrl)("/settings/api/admin/twofactorauth"),e).then((function(t){return t.data})).then((function(e){t.state=e,t.dirty=!1})).catch((function(t){b.error("could not save changes",t)})).then((function(){t.loading=!1}))}}},A=o(93379),w=o.n(A),C=o(7795),x=o.n(C),_=o(90569),k=o.n(_),G=o(3565),S=o.n(G),E=o(19216),N=o.n(E),R=o(44589),M=o.n(R),D=o(38358),O={};O.styleTagTransform=M(),O.setAttributes=S(),O.insert=k().bind(null,"head"),O.domAPI=x(),O.insertStyleElement=N(),w()(D.Z,O),D.Z&&D.Z.locals&&D.Z.locals;var B=o(51900),T=(0,B.Z)(y,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{title:t.t("settings","Two-Factor Authentication"),description:t.t("settings","Two-factor authentication can be enforced for all users and specific groups. If they do not have a two-factor provider configured, they will be unable to log into the system."),"doc-url":t.twoFactorAdminDoc}},[t.loading?e("p",[e("span",{staticClass:"icon-loading-small two-factor-loading"}),t._v(" "),e("span",[t._v(t._s(t.t("settings","Enforce two-factor authentication")))])]):e("NcCheckboxRadioSwitch",{attrs:{id:"two-factor-enforced",checked:t.enforced,type:"switch"},on:{"update:checked":function(e){t.enforced=e}}},[t._v("\n\t\t"+t._s(t.t("settings","Enforce two-factor authentication"))+"\n\t")]),t._v(" "),t.enforced?[e("h3",[t._v(t._s(t.t("settings","Limit to groups")))]),t._v("\n\t\t"+t._s(t.t("settings","Enforcement of two-factor authentication can be set for certain groups only."))+"\n\t\t"),e("p",{staticClass:"top-margin"},[t._v("\n\t\t\t"+t._s(t.t("settings","Two-factor authentication is enforced for all members of the following groups."))+"\n\t\t")]),t._v(" "),e("p",[e("NcMultiselect",{attrs:{options:t.groups,placeholder:t.t("settings","Enforced groups"),disabled:t.loading,multiple:!0,searchable:!0,loading:t.loadingGroups,"show-no-options":!1,"close-on-select":!1},on:{"search-change":t.searchGroup},model:{value:t.enforcedGroups,callback:function(e){t.enforcedGroups=e},expression:"enforcedGroups"}})],1),t._v(" "),e("p",{staticClass:"top-margin"},[t._v("\n\t\t\t"+t._s(t.t("settings","Two-factor authentication is not enforced for members of the following groups."))+"\n\t\t")]),t._v(" "),e("p",[e("NcMultiselect",{attrs:{options:t.groups,placeholder:t.t("settings","Excluded groups"),disabled:t.loading,multiple:!0,searchable:!0,loading:t.loadingGroups,"show-no-options":!1,"close-on-select":!1},on:{"search-change":t.searchGroup},model:{value:t.excludedGroups,callback:function(e){t.excludedGroups=e},expression:"excludedGroups"}})],1),t._v(" "),e("p",{staticClass:"top-margin"},[e("em",[t._v("\n\t\t\t\t"+t._s(t.t("settings","When groups are selected/excluded, they use the following logic to determine if a user has 2FA enforced: If no groups are selected, 2FA is enabled for everyone except members of the excluded groups. If groups are selected, 2FA is enabled for all members of these. If a user is both in a selected and excluded group, the selected takes precedence and 2FA is enforced."))+"\n\t\t\t")])])]:t._e(),t._v(" "),e("p",{staticClass:"top-margin"},[t.dirty?e("NcButton",{attrs:{type:"primary",disabled:t.loading},on:{click:t.saveChanges}},[t._v("\n\t\t\t"+t._s(t.t("settings","Save changes"))+"\n\t\t")]):t._e()],1)],2)}),[],!1,null,"9ec3edc6",null).exports,P=o(17499),j=o(10128),Z=(o(65509),o(64024));function F(t,e,n,o,r,s,i){try{var a=t[s](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(o,r)}function I(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var s=t.apply(e,n);function i(t){F(s,o,r,i,a,"next",t)}function a(t){F(s,o,r,i,a,"throw",t)}i(void 0)}))}}var q=(0,P.IY)().setApp("settings").detectUser().build(),U={name:"Encryption",components:{NcCheckboxRadioSwitch:p(),NcSettingsSection:f(),NcButton:u()},data:function(){var t=(0,r.j)("settings","encryption-modules");return{encryptionReady:(0,r.j)("settings","encryption-ready"),encryptionEnabled:(0,r.j)("settings","encryption-enabled"),externalBackendsEnabled:(0,r.j)("settings","external-backends-enabled"),encryptionAdminDoc:(0,r.j)("settings","encryption-admin-doc"),encryptionModules:t,shouldDisplayWarning:!1,migrating:!1,defaultCheckedModule:Object.entries(t).find((function(t){return t[1].default}))[0]}},computed:{migrationMessage:function(){return t("settings",'You need to migrate your encryption keys from the old encryption (ownCloud <= 8.0) to the new one. Please enable the "Default encryption module" and run {command}',{command:'"occ encryption:migrate"'})}},methods:{displayWarning:function(){this.encryptionEnabled?(this.encryptionEnabled=!1,this.shouldDisplayWarning=!1):this.shouldDisplayWarning=!this.shouldDisplayWarning},update:function(e,n){var o=this;return I(regeneratorRuntime.mark((function r(){var s,a,c,d,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,j.confirmPassword)();case 2:return s=(0,v.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"core",key:e}),a=n?"yes":"no",r.prev=4,r.next=7,i.default.post(s,{value:a});case 7:u=r.sent,l=u.data,o.handleResponse({status:null===(c=l.ocs)||void 0===c||null===(d=c.meta)||void 0===d?void 0:d.status}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(4),o.handleResponse({errorMessage:t("settings","Unable to update server side encryption config"),error:r.t0});case 15:case"end":return r.stop()}}),r,null,[[4,12]])})))()},checkDefaultModule:function(){var t=this;return I(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.update("default_encryption_module",t.defaultCheckedModule);case 2:case"end":return e.stop()}}),e)})))()},enableEncryption:function(){var t=this;return I(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.encryptionEnabled=!0,e.next=3,t.update("encryption_enabled",!0);case 3:case"end":return e.stop()}}),e)})))()},handleResponse:function(t){return I(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.status,o=t.errorMessage,r=t.error,"ok"!==n&&((0,Z.x2)(o),q.error(o,{error:r}));case 2:case"end":return e.stop()}}),e)})))()}}},$=o(15095),W={};W.styleTagTransform=M(),W.setAttributes=S(),W.insert=k().bind(null,"head"),W.domAPI=x(),W.insertStyleElement=N(),w()($.Z,W),$.Z&&$.Z.locals&&$.Z.locals;var L=(0,B.Z)(U,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{title:t.t("settings","Server-side encryption"),description:t.t("settings","Server-side encryption makes it possible to encrypt files which are uploaded to this server. This comes with limitations like a performance penalty, so enable this only if needed."),"doc-url":t.encryptionAdminDoc}},[e("NcCheckboxRadioSwitch",{attrs:{checked:t.encryptionEnabled||t.shouldDisplayWarning,disabled:t.encryptionEnabled,type:"switch"},on:{"update:checked":t.displayWarning}},[t._v("\n\t\t"+t._s(t.t("settings","Enable server-side encryption"))+"\n\t")]),t._v(" "),t.shouldDisplayWarning&&!t.encryptionEnabled?e("div",{staticClass:"notecard warning",attrs:{role:"alert"}},[e("p",[t._v(t._s(t.t("settings","Please read carefully before activating server-side encryption:")))]),t._v(" "),e("ul",[e("li",[t._v(t._s(t.t("settings","Once encryption is enabled, all files uploaded to the server from that point forward will be encrypted at rest on the server. It will only be possible to disable encryption at a later date if the active encryption module supports that function, and all pre-conditions (e.g. setting a recover key) are met.")))]),t._v(" "),e("li",[t._v(t._s(t.t("settings","Encryption alone does not guarantee security of the system. Please see documentation for more information about how the encryption app works, and the supported use cases.")))]),t._v(" "),e("li",[t._v(t._s(t.t("settings","Be aware that encryption always increases the file size.")))]),t._v(" "),e("li",[t._v(t._s(t.t("settings","It is always good to create regular backups of your data, in case of encryption make sure to backup the encryption keys along with your data.")))])]),t._v(" "),e("p",{staticClass:"margin-bottom"},[t._v("\n\t\t\t"+t._s(t.t("settings","This is the final warning: Do you really want to enable encryption?"))+"\n\t\t")]),t._v(" "),e("NcButton",{attrs:{type:"primary"},on:{click:function(e){return t.enableEncryption()}}},[t._v("\n\t\t\t"+t._s(t.t("settings","Enable encryption"))+"\n\t\t")])],1):t._e(),t._v(" "),t.encryptionEnabled?e("div",[t.encryptionReady?e("div",[0===t.encryptionModules.length?e("p",[t._v("\n\t\t\t\t"+t._s(t.t("settings","No encryption module loaded, please enable an encryption module in the app menu."))+"\n\t\t\t")]):[e("h3",[t._v(t._s(t.t("settings","Select default encryption module:")))]),t._v(" "),e("fieldset",t._l(t.encryptionModules,(function(n,o){return e("NcCheckboxRadioSwitch",{key:o,attrs:{checked:t.defaultCheckedModule,value:o,type:"radio",name:"default_encryption_module"},on:{"update:checked":[function(e){t.defaultCheckedModule=e},t.checkDefaultModule]}},[t._v("\n\t\t\t\t\t\t"+t._s(n.displayName)+"\n\t\t\t\t\t")])})),1)]],2):t.externalBackendsEnabled?e("div",{domProps:{innerHTML:t._s(t.migrationMessage)}}):t._e()]):t._e()],1)}),[],!1,null,"bf04cb9e",null).exports,Y=o(20629);s.ZP.use(Y.ZP);var z={setEnforced:function(t,e){s.ZP.set(t,"enforced",e)},setEnforcedGroups:function(t,e){s.ZP.set(t,"enforcedGroups",e)},setExcludedGroups:function(t,e){s.ZP.set(t,"excludedGroups",e)}},H=new Y.yh({strict:!1,state:{enforced:!1,enforcedGroups:[],excludedGroups:[]},mutations:z});o.nc=btoa(OC.requestToken),s.ZP.prototype.t=t,window.OC=window.OC||{},window.OC.Settings=window.OC.Settings||{},H.replaceState((0,r.j)("settings","mandatory2FAState")),new(s.ZP.extend(T))({store:H}).$mount("#two-factor-auth-settings"),(new(s.ZP.extend(L))).$mount("#vue-admin-encryption")},15095:function(t,e,n){var o=n(87537),r=n.n(o),s=n(23645),i=n.n(s)()(r());i.push([t.id,".notecard.success[data-v-bf04cb9e]{--note-background: rgba(var(--color-success-rgb), 0.2);--note-theme: var(--color-success)}.notecard.error[data-v-bf04cb9e]{--note-background: rgba(var(--color-error-rgb), 0.2);--note-theme: var(--color-error)}.notecard.warning[data-v-bf04cb9e]{--note-background: rgba(var(--color-warning-rgb), 0.2);--note-theme: var(--color-warning)}#body-settings .notecard[data-v-bf04cb9e]{color:var(--color-text-light);background-color:var(--note-background);border:1px solid var(--color-border);border-left:4px solid var(--note-theme);border-radius:var(--border-radius);box-shadow:rgba(43,42,51,.05) 0px 1px 2px 0px;margin:1rem 0;margin-top:1rem;padding:1rem}li[data-v-bf04cb9e]{list-style-type:initial;margin-left:1rem;padding:.25rem 0}.margin-bottom[data-v-bf04cb9e]{margin-bottom:.75rem}","",{version:3,sources:["webpack://./apps/settings/src/components/Encryption.vue"],names:[],mappings:"AAEA,mCACC,sDAAA,CACA,kCAAA,CAGD,iCACC,oDAAA,CACA,gCAAA,CAGD,mCACC,sDAAA,CACA,kCAAA,CAGD,0CACC,6BAAA,CACA,uCAAA,CACA,oCAAA,CACA,uCAAA,CACA,kCAAA,CACA,6CAAA,CACA,aAAA,CACA,eAAA,CACA,YAAA,CAGD,oBACC,uBAAA,CACA,gBAAA,CACA,gBAAA,CAGD,gCACC,oBAAA",sourcesContent:["\n\n.notecard.success {\n\t--note-background: rgba(var(--color-success-rgb), 0.2);\n\t--note-theme: var(--color-success);\n}\n\n.notecard.error {\n\t--note-background: rgba(var(--color-error-rgb), 0.2);\n\t--note-theme: var(--color-error);\n}\n\n.notecard.warning {\n\t--note-background: rgba(var(--color-warning-rgb), 0.2);\n\t--note-theme: var(--color-warning);\n}\n\n#body-settings .notecard {\n\tcolor: var(--color-text-light);\n\tbackground-color: var(--note-background);\n\tborder: 1px solid var(--color-border);\n\tborder-left: 4px solid var(--note-theme);\n\tborder-radius: var(--border-radius);\n\tbox-shadow: rgba(43, 42, 51, 0.05) 0px 1px 2px 0px;\n\tmargin: 1rem 0;\n\tmargin-top: 1rem;\n\tpadding: 1rem;\n}\n\nli {\n\tlist-style-type: initial;\n\tmargin-left: 1rem;\n\tpadding: 0.25rem 0;\n}\n\n.margin-bottom {\n\tmargin-bottom: 0.75rem;\n}\n"],sourceRoot:""}]),e.Z=i},38358:function(t,e,n){var o=n(87537),r=n.n(o),s=n(23645),i=n.n(s)()(r());i.push([t.id,"\n.two-factor-loading[data-v-9ec3edc6] {\n\tdisplay: inline-block;\n\tvertical-align: sub;\n\tmargin-left: -2px;\n\tmargin-right: 1px;\n}\n.top-margin[data-v-9ec3edc6] {\n\tmargin-top: 0.5rem;\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/AdminTwoFactor.vue"],names:[],mappings:";AAkLA;CACA,qBAAA;CACA,mBAAA;CACA,iBAAA;CACA,iBAAA;AACA;AAEA;CACA,kBAAA;AACA",sourcesContent:["<template>\n\t<NcSettingsSection :title=\"t('settings', 'Two-Factor Authentication')\"\n\t\t:description=\"t('settings', 'Two-factor authentication can be enforced for all users and specific groups. If they do not have a two-factor provider configured, they will be unable to log into the system.')\"\n\t\t:doc-url=\"twoFactorAdminDoc\">\n\t\t<p v-if=\"loading\">\n\t\t\t<span class=\"icon-loading-small two-factor-loading\" />\n\t\t\t<span>{{ t('settings', 'Enforce two-factor authentication') }}</span>\n\t\t</p>\n\t\t<NcCheckboxRadioSwitch v-else\n\t\t\tid=\"two-factor-enforced\"\n\t\t\t:checked.sync=\"enforced\"\n\t\t\ttype=\"switch\">\n\t\t\t{{ t('settings', 'Enforce two-factor authentication') }}\n\t\t</NcCheckboxRadioSwitch>\n\t\t<template v-if=\"enforced\">\n\t\t\t<h3>{{ t('settings', 'Limit to groups') }}</h3>\n\t\t\t{{ t('settings', 'Enforcement of two-factor authentication can be set for certain groups only.') }}\n\t\t\t<p class=\"top-margin\">\n\t\t\t\t{{ t('settings', 'Two-factor authentication is enforced for all members of the following groups.') }}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<NcMultiselect v-model=\"enforcedGroups\"\n\t\t\t\t\t:options=\"groups\"\n\t\t\t\t\t:placeholder=\"t('settings', 'Enforced groups')\"\n\t\t\t\t\t:disabled=\"loading\"\n\t\t\t\t\t:multiple=\"true\"\n\t\t\t\t\t:searchable=\"true\"\n\t\t\t\t\t:loading=\"loadingGroups\"\n\t\t\t\t\t:show-no-options=\"false\"\n\t\t\t\t\t:close-on-select=\"false\"\n\t\t\t\t\t@search-change=\"searchGroup\" />\n\t\t\t</p>\n\t\t\t<p class=\"top-margin\">\n\t\t\t\t{{ t('settings', 'Two-factor authentication is not enforced for members of the following groups.') }}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<NcMultiselect v-model=\"excludedGroups\"\n\t\t\t\t\t:options=\"groups\"\n\t\t\t\t\t:placeholder=\"t('settings', 'Excluded groups')\"\n\t\t\t\t\t:disabled=\"loading\"\n\t\t\t\t\t:multiple=\"true\"\n\t\t\t\t\t:searchable=\"true\"\n\t\t\t\t\t:loading=\"loadingGroups\"\n\t\t\t\t\t:show-no-options=\"false\"\n\t\t\t\t\t:close-on-select=\"false\"\n\t\t\t\t\t@search-change=\"searchGroup\" />\n\t\t\t</p>\n\t\t\t<p class=\"top-margin\">\n\t\t\t\t<em>\n\t\t\t\t\t\x3c!-- this text is also found in the documentation. update it there as well if it ever changes --\x3e\n\t\t\t\t\t{{ t('settings', 'When groups are selected/excluded, they use the following logic to determine if a user has 2FA enforced: If no groups are selected, 2FA is enabled for everyone except members of the excluded groups. If groups are selected, 2FA is enabled for all members of these. If a user is both in a selected and excluded group, the selected takes precedence and 2FA is enforced.') }}\n\t\t\t\t</em>\n\t\t\t</p>\n\t\t</template>\n\t\t<p class=\"top-margin\">\n\t\t\t<NcButton v-if=\"dirty\"\n\t\t\t\ttype=\"primary\"\n\t\t\t\t:disabled=\"loading\"\n\t\t\t\t@click=\"saveChanges\">\n\t\t\t\t{{ t('settings', 'Save changes') }}\n\t\t\t</NcButton>\n\t\t</p>\n\t</NcSettingsSection>\n</template>\n\n<script>\nimport axios from '@nextcloud/axios'\nimport NcMultiselect from '@nextcloud/vue/dist/Components/NcMultiselect.js'\nimport NcButton from '@nextcloud/vue/dist/Components/NcButton.js'\nimport NcCheckboxRadioSwitch from '@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js'\nimport NcSettingsSection from '@nextcloud/vue/dist/Components/NcSettingsSection.js'\nimport { loadState } from '@nextcloud/initial-state'\n\nimport _ from 'lodash'\nimport { generateUrl, generateOcsUrl } from '@nextcloud/router'\n\nexport default {\n\tname: 'AdminTwoFactor',\n\tcomponents: {\n\t\tNcMultiselect,\n\t\tNcButton,\n\t\tNcCheckboxRadioSwitch,\n\t\tNcSettingsSection,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tloading: false,\n\t\t\tdirty: false,\n\t\t\tgroups: [],\n\t\t\tloadingGroups: false,\n\t\t\ttwoFactorAdminDoc: loadState('settings', 'two-factor-admin-doc'),\n\t\t}\n\t},\n\tcomputed: {\n\t\tenforced: {\n\t\t\tget() {\n\t\t\t\treturn this.$store.state.enforced\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\tthis.dirty = true\n\t\t\t\tthis.$store.commit('setEnforced', val)\n\t\t\t},\n\t\t},\n\t\tenforcedGroups: {\n\t\t\tget() {\n\t\t\t\treturn this.$store.state.enforcedGroups\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\tthis.dirty = true\n\t\t\t\tthis.$store.commit('setEnforcedGroups', val)\n\t\t\t},\n\t\t},\n\t\texcludedGroups: {\n\t\t\tget() {\n\t\t\t\treturn this.$store.state.excludedGroups\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\tthis.dirty = true\n\t\t\t\tthis.$store.commit('setExcludedGroups', val)\n\t\t\t},\n\t\t},\n\t},\n\tmounted() {\n\t\t// Groups are loaded dynamically, but the assigned ones *should*\n\t\t// be valid groups, so let's add them as initial state\n\t\tthis.groups = _.sortedUniq(_.uniq(this.enforcedGroups.concat(this.excludedGroups)))\n\n\t\t// Populate the groups with a first set so the dropdown is not empty\n\t\t// when opening the page the first time\n\t\tthis.searchGroup('')\n\t},\n\tmethods: {\n\t\tsearchGroup: _.debounce(function(query) {\n\t\t\tthis.loadingGroups = true\n\t\t\taxios.get(generateOcsUrl('cloud/groups?offset=0&search={query}&limit=20', { query }))\n\t\t\t\t.then(res => res.data.ocs)\n\t\t\t\t.then(ocs => ocs.data.groups)\n\t\t\t\t.then(groups => { this.groups = _.sortedUniq(_.uniq(this.groups.concat(groups))) })\n\t\t\t\t.catch(err => console.error('could not search groups', err))\n\t\t\t\t.then(() => { this.loadingGroups = false })\n\t\t}, 500),\n\n\t\tsaveChanges() {\n\t\t\tthis.loading = true\n\n\t\t\tconst data = {\n\t\t\t\tenforced: this.enforced,\n\t\t\t\tenforcedGroups: this.enforcedGroups,\n\t\t\t\texcludedGroups: this.excludedGroups,\n\t\t\t}\n\t\t\taxios.put(generateUrl('/settings/api/admin/twofactorauth'), data)\n\t\t\t\t.then(resp => resp.data)\n\t\t\t\t.then(state => {\n\t\t\t\t\tthis.state = state\n\t\t\t\t\tthis.dirty = false\n\t\t\t\t})\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error('could not save changes', err)\n\t\t\t\t})\n\t\t\t\t.then(() => { this.loading = false })\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.two-factor-loading {\n\t\tdisplay: inline-block;\n\t\tvertical-align: sub;\n\t\tmargin-left: -2px;\n\t\tmargin-right: 1px;\n\t}\n\n\t.top-margin {\n\t\tmargin-top: 0.5rem;\n\t}\n</style>\n"],sourceRoot:""}]),e.Z=i}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var s=o[t]={id:t,loaded:!1,exports:{}};return n[t].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=n,e=[],r.O=function(t,n,o,s){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||i>=s)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},r.j=788,function(){r.b=document.baseURI||self.location.href;var t={788:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,i=n[0],a=n[1],c=n[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var u=c(r)}for(e&&e(n);d<i.length;d++)s=i[d],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),r.nc=void 0;var s=r.O(void 0,[7874],(function(){return r(61482)}));s=r.O(s)}();
//# sourceMappingURL=settings-vue-settings-admin-security.js.map?v=7bded2dedd2fc90bc54d