(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["user-status-modal"],{

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcEmojiPicker.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcEmojiPicker.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/*! For license information please see NcEmojiPicker.js.LICENSE.txt */
!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{var e={9456:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var o=a(4462),n=a(1205),i=a(5512),r=a.n(i),s=a(6915),l=a.n(s);const c={name:"NcInputField",components:{NcButton:o.default,AlertCircle:r(),Check:l()},inheritAttrs:!1,props:{value:{type:String,required:!0},type:{type:String,default:"text",validator:e=>["text","password","email","tel","url","search","number"].includes(e)},label:{type:String,default:void 0},labelOutside:{type:Boolean,default:!1},labelVisible:{type:Boolean,default:!1},placeholder:{type:String,default:void 0},showTrailingButton:{type:Boolean,default:!1},trailingButtonLabel:{type:String,default:""},success:{type:Boolean,default:!1},error:{type:Boolean,default:!1},helperText:{type:String,default:""},disabled:{type:Boolean,default:!1},inputClass:{type:[Object,String],default:""}},emits:["update:value","trailing-button-click"],computed:{computedId(){return this.$attrs.id&&""!==this.$attrs.id?this.$attrs.id:this.inputName},inputName:()=>"input"+(0,n.Z)(),hasLeadingIcon(){return this.$slots.default},hasTrailingIcon(){return this.success},hasPlaceholder(){return""!==this.placeholder&&void 0!==this.placeholder},computedPlaceholder(){return this.labelVisible?this.hasPlaceholder?this.placeholder:"":this.hasPlaceholder?this.placeholder:this.label},isValidLabel(){const e=this.label||this.labelOutside;return e||console.warn("You need to add a label to the NcInputField component. Either use the prop label or use an external one, as per the example in the documentation."),e},ariaDescribedby(){const e=[];return this.helperText.length>0&&e.push("".concat(this.inputName,"-helper-text")),this.$attrs["aria-describedby"]&&e.push(this.$attrs["aria-describedby"]),e.join(" ")||null}},methods:{focus(){this.$refs.input.focus()},select(){this.$refs.input.select()},handleInput(e){this.$emit("update:value",e.target.value)},handleTrailingButtonClick(e){this.$emit("trailing-button-click",e)}}}},2727:(e,t,a)=>{"use strict";a.d(t,{s:()=>o,x:()=>n});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"input-field"},[!e.labelOutside&&e.isValidLabel?t("label",{staticClass:"input-field__label",class:{"input-field__label--hidden":!e.labelVisible},attrs:{for:e.computedId}},[e._v("\n\t\t"+e._s(e.label)+"\n\t")]):e._e(),e._v(" "),t("div",{staticClass:"input-field__main-wrapper"},[t("input",e._g(e._b({ref:"input",staticClass:"input-field__input",class:[e.inputClass,{"input-field__input--trailing-icon":e.showTrailingButton||e.hasTrailingIcon,"input-field__input--leading-icon":e.hasLeadingIcon,"input-field__input--success":e.success,"input-field__input--error":e.error}],attrs:{id:e.computedId,type:e.type,disabled:e.disabled,placeholder:e.computedPlaceholder,"aria-describedby":e.ariaDescribedby,"aria-live":"polite"},domProps:{value:e.value},on:{input:e.handleInput}},"input",e.$attrs,!1),e.$listeners)),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.hasLeadingIcon,expression:"hasLeadingIcon"}],staticClass:"input-field__icon input-field__icon--leading"},[e._t("default")],2),e._v(" "),e.showTrailingButton?t("NcButton",{staticClass:"input-field__clear-button",attrs:{type:"tertiary-no-background","aria-label":e.trailingButtonLabel,disabled:e.disabled},on:{click:e.handleTrailingButtonClick},scopedSlots:e._u([{key:"icon",fn:function(){return[e._t("trailing-button-icon")]},proxy:!0}],null,!0)}):e.success||e.error?t("div",{staticClass:"input-field__icon input-field__icon--trailing"},[e.success?t("Check",{attrs:{size:18}}):e.error?t("AlertCircle",{attrs:{size:18}}):e._e()],1):e._e()],1),e._v(" "),e.helperText.length>0?t("p",{staticClass:"input-field__helper-text-message",class:{"input-field__helper-text-message--error":e.error,"input-field__helper-text-message--success":e.success},attrs:{id:"".concat(e.inputName,"-helper-text")}},[e.success?t("Check",{staticClass:"input-field__helper-text-message__icon",attrs:{size:18}}):e.error?t("AlertCircle",{staticClass:"input-field__helper-text-message__icon",attrs:{size:18}}):e._e(),e._v("\n\t\t"+e._s(e.helperText)+"\n\t")],1):e._e()])},n=[]},4462:(e,t,a)=>{"use strict";a.d(t,{default:()=>k});const o={name:"NcButton",props:{disabled:{type:Boolean,default:!1},type:{type:String,validator:e=>-1!==["primary","secondary","tertiary","tertiary-no-background","tertiary-on-primary","error","warning","success"].indexOf(e),default:"secondary"},nativeType:{type:String,validator:e=>-1!==["submit","reset","button"].indexOf(e),default:"button"},wide:{type:Boolean,default:!1},ariaLabel:{type:String,default:null},href:{type:String,default:null},to:{type:[String,Object],default:null},exact:{type:Boolean,default:!1},ariaHidden:{type:Boolean,default:null}},render(e){var t,a,o,n,i,r=this;const s=null===(t=this.$slots.default)||void 0===t||null===(a=t[0])||void 0===a||null===(o=a.text)||void 0===o||null===(n=o.trim)||void 0===n?void 0:n.call(o),l=!!s,c=null===(i=this.$slots)||void 0===i?void 0:i.icon;s||this.ariaLabel||console.warn("You need to fill either the text or the ariaLabel props in the button component.",{text:s,ariaLabel:this.ariaLabel},this);const d=function(){let{navigate:t,isActive:a,isExactActive:o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(r.to||!r.href?"button":"a",{class:["button-vue",{"button-vue--icon-only":c&&!l,"button-vue--text-only":l&&!c,"button-vue--icon-and-text":c&&l,["button-vue--vue-".concat(r.type)]:r.type,"button-vue--wide":r.wide,active:a,"router-link-exact-active":o}],attrs:{"aria-label":r.ariaLabel,disabled:r.disabled,type:r.href?null:r.nativeType,role:r.href?"button":null,href:!r.to&&r.href?r.href:null,...r.$attrs},on:{...r.$listeners,click:e=>{var a,o;null===(a=r.$listeners)||void 0===a||null===(o=a.click)||void 0===o||o.call(a,e),null==t||t(e)}}},[e("span",{class:"button-vue__wrapper"},[c?e("span",{class:"button-vue__icon",attrs:{"aria-hidden":r.ariaHidden}},[r.$slots.icon]):null,l?e("span",{class:"button-vue__text"},[s]):null])])};return this.to?e("router-link",{props:{custom:!0,to:this.to,exact:this.exact},scopedSlots:{default:d}}):d()}};var n=a(3379),i=a.n(n),r=a(7795),s=a.n(r),l=a(569),c=a.n(l),d=a(3565),A=a.n(d),u=a(9216),m=a.n(u),p=a(4589),g=a.n(p),h=a(7196),v={};v.styleTagTransform=g(),v.setAttributes=A(),v.insert=c().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m();i()(h.Z,v);h.Z&&h.Z.locals&&h.Z.locals;var C=a(1900),b=a(2102),f=a.n(b),y=(0,C.Z)(o,undefined,undefined,!1,null,"4d05be2c",null);"function"==typeof f()&&f()(y);const k=y.exports},2297:(e,t,a)=>{"use strict";a.d(t,{default:()=>x});var o=a(9454),n=a(4505),i=a(1206);const r={name:"NcPopover",components:{Dropdown:o.Dropdown},inheritAttrs:!1,props:{popoverBaseClass:{type:String,default:""},focusTrap:{type:Boolean,default:!0},setReturnFocus:{default:void 0,type:[HTMLElement,SVGElement,String,Boolean]}},emits:["after-show","after-hide"],beforeDestroy(){this.clearFocusTrap()},methods:{async useFocusTrap(){var e,t;if(await this.$nextTick(),!this.focusTrap)return;const a=null===(e=this.$refs.popover)||void 0===e||null===(t=e.$refs.popperContent)||void 0===t?void 0:t.$el;a&&(this.$focusTrap=(0,n.createFocusTrap)(a,{escapeDeactivates:!1,allowOutsideClick:!0,setReturnFocus:this.setReturnFocus,trapStack:(0,i.L)()}),this.$focusTrap.activate())},clearFocusTrap(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t;null===(t=this.$focusTrap)||void 0===t||t.deactivate(e),this.$focusTrap=null}catch(e){console.warn(e)}},afterShow(){this.$nextTick((()=>{this.$emit("after-show"),this.useFocusTrap()}))},afterHide(){this.$emit("after-hide"),this.clearFocusTrap()}}},s=r;var l=a(3379),c=a.n(l),d=a(7795),A=a.n(d),u=a(569),m=a.n(u),p=a(3565),g=a.n(p),h=a(9216),v=a.n(h),C=a(4589),b=a.n(C),f=a(1625),y={};y.styleTagTransform=b(),y.setAttributes=g(),y.insert=m().bind(null,"head"),y.domAPI=A(),y.insertStyleElement=v();c()(f.Z,y);f.Z&&f.Z.locals&&f.Z.locals;var k=a(1900),j=a(2405),w=a.n(j),E=(0,k.Z)(s,(function(){var e=this;return(0,e._self._c)("Dropdown",e._g(e._b({ref:"popover",attrs:{distance:10,"arrow-padding":10,"no-auto-focus":!0,"popper-class":e.popoverBaseClass},on:{"apply-show":e.afterShow,"apply-hide":e.afterHide},scopedSlots:e._u([{key:"popper",fn:function(){return[e._t("default")]},proxy:!0}],null,!0)},"Dropdown",e.$attrs,!1),e.$listeners),[e._t("trigger")],2)}),[],!1,null,null,null);"function"==typeof w()&&w()(E);const x=E.exports},6442:(e,t,a)=>{"use strict";a.d(t,{default:()=>h});var o=a(9563),n=a(8618),i=a.n(n),r=a(3875),s=a.n(r);const l=__webpack_require__(/*! vue-material-design-icons/UndoVariant.vue */ "./node_modules/vue-material-design-icons/UndoVariant.vue");var c=a.n(l),d=a(932);const A={name:"NcTextField",components:{NcInputField:o.Z,Close:i(),ArrowRight:s(),Undo:c()},inheritAttrs:!1,props:{...o.Z.props,trailingButtonIcon:{type:String,default:"close",validator:e=>["close","arrowRight","undo"].includes(e)}},emits:["update:value"],computed:{clearTextLabel(){return this.trailingButtonLabel||(0,d.t)("Clear text")}},methods:{focus(){this.$refs.inputField.focus()},select(){this.$refs.inputField.select()},handleInput(e){this.$emit("update:value",e.target.value)}}};var u=a(1900),m=a(5439),p=a.n(m),g=(0,u.Z)(A,(function(){var e=this,t=e._self._c;return t("NcInputField",e._g(e._b({ref:"inputField",attrs:{"trailing-button-label":e.clearTextLabel},on:{input:e.handleInput},scopedSlots:e._u(["search"!==e.type?{key:"trailing-button-icon",fn:function(){return["close"===e.trailingButtonIcon?t("Close",{attrs:{size:20}}):"arrowRight"===e.trailingButtonIcon?t("ArrowRight",{attrs:{size:20}}):"undo"===e.trailingButtonIcon?t("Undo",{attrs:{size:20}}):e._e()]},proxy:!0}:null],null,!0)},"NcInputField",{...e.$attrs,...e.$props},!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);"function"==typeof p()&&p()(g);const h=g.exports},932:(e,t,a)=>{"use strict";a.d(t,{t:()=>r});var o=a(7931);const n=(0,o.getGettextBuilder)().detectLocale();[{locale:"ar",translations:{"{tag} (invisible)":"{tag} (غير مرئي)","{tag} (restricted)":"{tag} (مقيد)",Actions:"الإجراءات",Activities:"النشاطات","Animals & Nature":"الحيوانات والطبيعة","Anything shared with the same group of people will show up here":"أي مادة تمت مشاركتها مع نفس المجموعة من الأشخاص سيتم عرضها هنا","Avatar of {displayName}":"صورة {displayName} الرمزية","Avatar of {displayName}, {status}":"صورة {displayName} الرمزية، {status}","Cancel changes":"إلغاء التغييرات","Change title":"تغيير العنوان",Choose:"إختيار","Clear text":"مسح النص",Close:"أغلق","Close modal":"قفل الشرط","Close navigation":"إغلاق المتصفح","Close sidebar":"قفل الشريط الجانبي","Confirm changes":"تأكيد التغييرات",Custom:"مخصص","Edit item":"تعديل عنصر","Error getting related resources":"خطأ في تحصيل مصادر ذات صلة","External documentation for {title}":"الوثائق الخارجية لـ{title}",Favorite:"مفضلة",Flags:"الأعلام","Food & Drink":"الطعام والشراب","Frequently used":"كثيرا ما تستخدم",Global:"عالمي","Go back to the list":"العودة إلى القائمة","Hide password":"إخفاء كلمة السر","Message limit of {count} characters reached":"تم الوصول إلى الحد الأقصى لعدد الأحرف في الرسالة: {count} حرف","More items …":"عناصر أخرى ...",Next:"التالي","No emoji found":"لم يتم العثور على أي رمز تعبيري","No results":"ليس هناك أية نتيجة",Objects:"الأشياء",Open:"فتح",'Open link to "{resourceTitle}"':'فتح رابط إلى "{resourceTitle}"',"Open navigation":"فتح المتصفح","Password is secure":"كلمة السر مُؤمّنة","Pause slideshow":"إيقاف العرض مؤقتًا","People & Body":"الناس والجسم","Pick an emoji":"اختر رمزًا تعبيريًا","Please select a time zone:":"الرجاء تحديد المنطقة الزمنية:",Previous:"السابق","Related resources":"مصادر ذات صلة",Search:"بحث","Search results":"نتائج البحث","Select a tag":"اختر علامة",Settings:"الإعدادات","Settings navigation":"إعدادات المتصفح","Show password":"أعرض كلمة السر","Smileys & Emotion":"الوجوه و الرموز التعبيرية","Start slideshow":"بدء العرض",Submit:"إرسال",Symbols:"الرموز","Travel & Places":"السفر والأماكن","Type to search time zone":"اكتب للبحث عن منطقة زمنية","Unable to search the group":"تعذر البحث في المجموعة","Undo changes":"التراجع عن التغييرات","Write message, @ to mention someone, : for emoji autocompletion …":"اكتب رسالة، @ للإشارة إلى شخص ما، : للإكمال التلقائي للرموز التعبيرية ..."}},{locale:"br",translations:{"{tag} (invisible)":"{tag} (diwelus)","{tag} (restricted)":"{tag} (bevennet)",Actions:"Oberioù",Activities:"Oberiantizoù","Animals & Nature":"Loened & Natur",Choose:"Dibab",Close:"Serriñ",Custom:"Personelañ",Flags:"Bannieloù","Food & Drink":"Boued & Evajoù","Frequently used":"Implijet alies",Next:"Da heul","No emoji found":"Emoji ebet kavet","No results":"Disoc'h ebet",Objects:"Traoù","Pause slideshow":"Arsav an diaporama","People & Body":"Tud & Korf","Pick an emoji":"Choaz un emoji",Previous:"A-raok",Search:"Klask","Search results":"Disoc'hoù an enklask","Select a tag":"Choaz ur c'hlav",Settings:"Arventennoù","Smileys & Emotion":"Smileyioù & Fromoù","Start slideshow":"Kregiñ an diaporama",Symbols:"Arouezioù","Travel & Places":"Beaj & Lec'hioù","Unable to search the group":"Dibosupl eo klask ar strollad"}},{locale:"ca",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringit)",Actions:"Accions",Activities:"Activitats","Animals & Nature":"Animals i natura","Anything shared with the same group of people will show up here":"Qualsevol cosa compartida amb el mateix grup de persones es mostrarà aquí","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}","Cancel changes":"Cancel·la els canvis","Change title":"Canviar títol",Choose:"Tria","Clear text":"Netejar text",Close:"Tanca","Close modal":"Tancar el mode","Close navigation":"Tanca la navegació","Close sidebar":"Tancar la barra lateral","Confirm changes":"Confirmeu els canvis",Custom:"Personalitzat","Edit item":"Edita l'element","Error getting related resources":"Error obtenint els recursos relacionats","Error parsing svg":"Error en l'anàlisi del svg","External documentation for {title}":"Documentació externa per a {title}",Favorite:"Preferit",Flags:"Marques","Food & Drink":"Menjar i begudes","Frequently used":"Utilitzats recentment",Global:"Global","Go back to the list":"Torna a la llista","Hide password":"Amagar contrasenya","Message limit of {count} characters reached":"S'ha arribat al límit de {count} caràcters per missatge","More items …":"Més artícles...",Next:"Següent","No emoji found":"No s'ha trobat cap emoji","No results":"Sense resultats",Objects:"Objectes",Open:"Obrir",'Open link to "{resourceTitle}"':'Obrir enllaç a "{resourceTitle}"',"Open navigation":"Obre la navegació","Password is secure":"Contrasenya segura<br>","Pause slideshow":"Atura la presentació","People & Body":"Persones i cos","Pick an emoji":"Trieu un emoji","Please select a time zone:":"Seleccioneu una zona horària:",Previous:"Anterior","Related resources":"Recursos relacionats",Search:"Cerca","Search results":"Resultats de cerca","Select a tag":"Seleccioneu una etiqueta",Settings:"Paràmetres","Settings navigation":"Navegació d'opcions","Show password":"Mostrar contrasenya","Smileys & Emotion":"Cares i emocions","Start slideshow":"Inicia la presentació",Submit:"Envia",Symbols:"Símbols","Travel & Places":"Viatges i llocs","Type to search time zone":"Escriviu per cercar la zona horària","Unable to search the group":"No es pot cercar el grup","Undo changes":"Desfés els canvis",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escriu missatge, fes servir "@" per esmentar algú, fes servir ":" per autocompletar emojis...'}},{locale:"cs_CZ",translations:{"{tag} (invisible)":"{tag} (neviditelné)","{tag} (restricted)":"{tag} (omezené)",Actions:"Akce",Activities:"Aktivity","Animals & Nature":"Zvířata a příroda","Anything shared with the same group of people will show up here":"Cokoli nasdíleného stejné skupině lidí se zobrazí zde","Avatar of {displayName}":"Zástupný obrázek uživatele {displayName}","Avatar of {displayName}, {status}":"Zástupný obrázek uživatele {displayName}, {status}","Cancel changes":"Zrušit změny","Change title":"Změnit nadpis",Choose:"Zvolit","Clear text":"Čitelný text",Close:"Zavřít","Close modal":"Zavřít dialogové okno","Close navigation":"Zavřít navigaci","Close sidebar":"Zavřít postranní panel","Confirm changes":"Potvrdit změny",Custom:"Uživatelsky určené","Edit item":"Upravit položku","Error getting related resources":"Chyba při získávání souvisejících prostředků","Error parsing svg":"Chyba při zpracovávání svg","External documentation for {title}":"Externí dokumentace k {title}",Favorite:"Oblíbené",Flags:"Příznaky","Food & Drink":"Jídlo a pití","Frequently used":"Často používané",Global:"Globální","Go back to the list":"Jít zpět na seznam","Hide password":"Skrýt heslo","Message limit of {count} characters reached":"Dosaženo limitu počtu ({count}) znaků zprávy","More items …":"Další položky…",Next:"Následující","No emoji found":"Nenalezeno žádné emoji","No results":"Nic nenalezeno",Objects:"Objekty",Open:"Otevřít",'Open link to "{resourceTitle}"':"Otevřít odkaz na „{resourceTitle}“","Open navigation":"Otevřít navigaci","Password is secure":"Heslo je bezpečné","Pause slideshow":"Pozastavit prezentaci","People & Body":"Lidé a tělo","Pick an emoji":"Vybrat emoji","Please select a time zone:":"Vyberte časovou zónu:",Previous:"Předchozí","Related resources":"Související prostředky",Search:"Hledat","Search results":"Výsledky hledání","Select a tag":"Vybrat štítek",Settings:"Nastavení","Settings navigation":"Pohyb po nastavení","Show password":"Zobrazit heslo","Smileys & Emotion":"Úsměvy a emoce","Start slideshow":"Spustit prezentaci",Submit:"Odeslat",Symbols:"Symboly","Travel & Places":"Cestování a místa","Type to search time zone":"Psaním vyhledejte časovou zónu","Unable to search the group":"Nedaří se hledat skupinu","Undo changes":"Vzít změny zpět",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':"Napište zprávu – pokud chcete někoho zmínit, napište před jeho uživatelským jménem „@“ (zavináč); automatické doplňování emotikonů zahájíte napsáním „:“ (dvojtečky)…"}},{locale:"da",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (begrænset)",Actions:"Handlinger",Activities:"Aktiviteter","Animals & Nature":"Dyr & Natur","Anything shared with the same group of people will show up here":"Alt der deles med samme gruppe af personer vil vises her","Avatar of {displayName}":"Avatar af {displayName}","Avatar of {displayName}, {status}":"Avatar af {displayName}, {status}","Cancel changes":"Annuller ændringer","Change title":"Ret titel",Choose:"Vælg","Clear text":"Ryd tekst",Close:"Luk","Close modal":"Luk vindue","Close navigation":"Luk navigation","Close sidebar":"Luk sidepanel","Confirm changes":"Bekræft ændringer",Custom:"Brugerdefineret","Edit item":"Rediger emne","Error getting related resources":"Kunne ikke hente tilknyttede data","Error parsing svg":"Fejl ved analysering af svg","External documentation for {title}":"Ekstern dokumentation for {title}",Favorite:"Favorit",Flags:"Flag","Food & Drink":"Mad & Drikke","Frequently used":"Ofte brugt",Global:"Global","Go back to the list":"Tilbage til listen","Hide password":"Skjul kodeord","Message limit of {count} characters reached":"Begrænsning på {count} tegn er nået","More items …":"Mere ...",Next:"Videre","No emoji found":"Ingen emoji fundet","No results":"Ingen resultater",Objects:"Objekter",Open:"Åbn",'Open link to "{resourceTitle}"':'Åbn link til "{resourceTitle}"',"Open navigation":"Åbn navigation","Password is secure":"Kodeordet er sikkert","Pause slideshow":"Suspender fremvisning","People & Body":"Mennesker & Menneskekroppen","Pick an emoji":"Vælg en emoji","Please select a time zone:":"Vælg venligst en tidszone:",Previous:"Forrige","Related resources":"Relaterede emner",Search:"Søg","Search results":"Søgeresultater","Select a tag":"Vælg et mærke",Settings:"Indstillinger","Settings navigation":"Naviger i indstillinger","Show password":"Vis kodeord","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start fremvisning",Submit:"Send",Symbols:"Symboler","Travel & Places":"Rejser & Rejsemål","Type to search time zone":"Indtast for at søge efter tidszone","Unable to search the group":"Kan ikke søge på denne gruppe","Undo changes":"Fortryd ændringer",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv besked, brug "@" for at nævne nogen, brug ":" til emoji-autofuldførelse ...'}},{locale:"de",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)",Actions:"Aktionen",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur","Anything shared with the same group of people will show up here":"Alles, das mit derselben Gruppe von Personen geteilt wird, wird hier angezeigt","Avatar of {displayName}":"Avatar von {displayName}","Avatar of {displayName}, {status}":"Avatar von {displayName}, {status}","Cancel changes":"Änderungen verwerfen","Change title":"Titel ändern",Choose:"Auswählen","Clear text":"Klartext",Close:"Schließen","Close modal":"Modal schließen","Close navigation":"Navigation schließen","Close sidebar":"Seitenleiste schließen","Confirm changes":"Änderungen bestätigen",Custom:"Benutzerdefiniert","Edit item":"Objekt bearbeiten","Error getting related resources":"Fehler beim Abrufen verwandter Ressourcen","Error parsing svg":"Fehler beim Einlesen der SVG","External documentation for {title}":"Externe Dokumentation für {title}",Favorite:"Favorit",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet",Global:"Global","Go back to the list":"Zurück zur Liste","Hide password":"Passwort verbergen","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht","More items …":"Weitere Elemente …",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No results":"Keine Ergebnisse",Objects:"Gegenstände",Open:"Öffnen",'Open link to "{resourceTitle}"':'Link zu "{resourceTitle}" öffnen',"Open navigation":"Navigation öffnen","Password is secure":"Passwort ist sicher","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick an emoji":"Ein Emoji auswählen","Please select a time zone:":"Bitte wählen Sie eine Zeitzone:",Previous:"Vorherige","Related resources":"Verwandte Ressourcen",Search:"Suche","Search results":"Suchergebnisse","Select a tag":"Schlagwort auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen für die Navigation","Show password":"Passwort anzeigen","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Type to search time zone":"Tippen, um Zeitzone zu suchen","Unable to search the group":"Die Gruppe konnte nicht durchsucht werden","Undo changes":"Änderungen rückgängig machen",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Nachricht schreiben, "@" um jemanden zu erwähnen, ":" für die automatische Vervollständigung von Emojis …'}},{locale:"de_DE",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)",Actions:"Aktionen",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur","Anything shared with the same group of people will show up here":"Alles, das mit derselben Gruppe von Personen geteilt wird, wird hier angezeigt","Avatar of {displayName}":"Avatar von {displayName}","Avatar of {displayName}, {status}":"Avatar von {displayName}, {status}","Cancel changes":"Änderungen verwerfen","Change title":"Titel ändern",Choose:"Auswählen","Clear text":"Klartext",Close:"Schließen","Close modal":"Modal schließen","Close navigation":"Navigation schließen","Close sidebar":"Seitenleiste schließen","Confirm changes":"Änderungen bestätigen",Custom:"Benutzerdefiniert","Edit item":"Objekt bearbeiten","Error getting related resources":"Fehler beim Abrufen verwandter Ressourcen","Error parsing svg":"Fehler beim Einlesen der SVG","External documentation for {title}":"Externe Dokumentation für {title}",Favorite:"Favorit",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet",Global:"Global","Go back to the list":"Zurück zur Liste","Hide password":"Passwort verbergen","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht","More items …":"Weitere Elemente …",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No results":"Keine Ergebnisse",Objects:"Objekte",Open:"Öffnen",'Open link to "{resourceTitle}"':'Link zu "{resourceTitle}" öffnen',"Open navigation":"Navigation öffnen","Password is secure":"Passwort ist sicher","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick an emoji":"Ein Emoji auswählen","Please select a time zone:":"Bitte eine Zeitzone auswählen:",Previous:"Vorherige","Related resources":"Verwandte Ressourcen",Search:"Suche","Search results":"Suchergebnisse","Select a tag":"Schlagwort auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen für die Navigation","Show password":"Passwort anzeigen","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Type to search time zone":"Tippen, um eine Zeitzone zu suchen","Unable to search the group":"Die Gruppe kann nicht durchsucht werden","Undo changes":"Änderungen rückgängig machen",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Nachricht schreiben, "@" um jemanden zu erwähnen, ":" für die automatische Vervollständigung von Emojis …'}},{locale:"el",translations:{"{tag} (invisible)":"{tag} (αόρατο)","{tag} (restricted)":"{tag} (περιορισμένο)",Actions:"Ενέργειες",Activities:"Δραστηριότητες","Animals & Nature":"Ζώα & Φύση","Anything shared with the same group of people will show up here":"Οτιδήποτε μοιράζεται με την ίδια ομάδα ατόμων θα εμφανίζεται εδώ","Avatar of {displayName}":"Άβαταρ του {displayName}","Avatar of {displayName}, {status}":"Άβαταρ του {displayName}, {status}","Cancel changes":"Ακύρωση αλλαγών","Change title":"Αλλαγή τίτλου",Choose:"Επιλογή","Clear text":"Εκκαθάριση κειμένου",Close:"Κλείσιμο","Close modal":"Βοηθητικό κλείσιμο","Close navigation":"Κλείσιμο πλοήγησης","Close sidebar":"Κλείσιμο πλευρικής μπάρας","Confirm changes":"Επιβεβαίωση αλλαγών",Custom:"Προσαρμογή","Edit item":"Επεξεργασία","Error getting related resources":"Σφάλμα λήψης σχετικών πόρων","Error parsing svg":"Σφάλμα ανάλυσης svg","External documentation for {title}":"Εξωτερική τεκμηρίωση για {title}",Favorite:"Αγαπημένα",Flags:"Σημαίες","Food & Drink":"Φαγητό & Ποτό","Frequently used":"Συχνά χρησιμοποιούμενο",Global:"Καθολικό","Go back to the list":"Επιστροφή στην αρχική λίστα ","Hide password":"Απόκρυψη κωδικού πρόσβασης","Message limit of {count} characters reached":"Συμπληρώθηκε το όριο των {count} χαρακτήρων του μηνύματος","More items …":"Περισσότερα στοιχεία …",Next:"Επόμενο","No emoji found":"Δεν βρέθηκε emoji","No results":"Κανένα αποτέλεσμα",Objects:"Αντικείμενα",Open:"Άνοιγμα",'Open link to "{resourceTitle}"':'Άνοιγμα συνδέσμου στο "{resourceTitle}"',"Open navigation":"Άνοιγμα πλοήγησης","Password is secure":"Ο κωδικός πρόσβασης είναι ασφαλής","Pause slideshow":"Παύση προβολής διαφανειών","People & Body":"Άνθρωποι & Σώμα","Pick an emoji":"Επιλέξτε ένα emoji","Please select a time zone:":"Παρακαλούμε επιλέξτε μια ζώνη ώρας:",Previous:"Προηγούμενο","Related resources":"Σχετικοί πόροι",Search:"Αναζήτηση","Search results":"Αποτελέσματα αναζήτησης","Select a tag":"Επιλογή ετικέτας",Settings:"Ρυθμίσεις","Settings navigation":"Πλοήγηση ρυθμίσεων","Show password":"Εμφάνιση κωδικού πρόσβασης","Smileys & Emotion":"Φατσούλες & Συναίσθημα","Start slideshow":"Έναρξη προβολής διαφανειών",Submit:"Υποβολή",Symbols:"Σύμβολα","Travel & Places":"Ταξίδια & Τοποθεσίες","Type to search time zone":"Πληκτρολογήστε για αναζήτηση ζώνης ώρας","Unable to search the group":"Δεν είναι δυνατή η αναζήτηση της ομάδας","Undo changes":"Αναίρεση Αλλαγών",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Γράψτε μήνυμα, χρησιμοποιείστε "@" για να αναφέρετε κάποιον, χρησιμοποιείστε ":" για αυτόματη συμπλήρωση emoji …'}},{locale:"en_GB",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restricted)",Actions:"Actions",Activities:"Activities","Animals & Nature":"Animals & Nature","Anything shared with the same group of people will show up here":"Anything shared with the same group of people will show up here","Avatar of {displayName}":"Avatar of {displayName}","Avatar of {displayName}, {status}":"Avatar of {displayName}, {status}","Cancel changes":"Cancel changes","Change title":"Change title",Choose:"Choose","Clear text":"Clear text",Close:"Close","Close modal":"Close modal","Close navigation":"Close navigation","Close sidebar":"Close sidebar","Confirm changes":"Confirm changes",Custom:"Custom","Edit item":"Edit item","Error getting related resources":"Error getting related resources","Error parsing svg":"Error parsing svg","External documentation for {title}":"External documentation for {title}",Favorite:"Favourite",Flags:"Flags","Food & Drink":"Food & Drink","Frequently used":"Frequently used",Global:"Global","Go back to the list":"Go back to the list","Hide password":"Hide password","Message limit of {count} characters reached":"Message limit of {count} characters reached","More items …":"More items …",Next:"Next","No emoji found":"No emoji found","No results":"No results",Objects:"Objects",Open:"Open",'Open link to "{resourceTitle}"':'Open link to "{resourceTitle}"',"Open navigation":"Open navigation","Password is secure":"Password is secure","Pause slideshow":"Pause slideshow","People & Body":"People & Body","Pick an emoji":"Pick an emoji","Please select a time zone:":"Please select a time zone:",Previous:"Previous","Related resources":"Related resources",Search:"Search","Search results":"Search results","Select a tag":"Select a tag",Settings:"Settings","Settings navigation":"Settings navigation","Show password":"Show password","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start slideshow",Submit:"Submit",Symbols:"Symbols","Travel & Places":"Travel & Places","Type to search time zone":"Type to search time zone","Unable to search the group":"Unable to search the group","Undo changes":"Undo changes",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Write message, use "@" to mention someone, use ":" for emoji autocompletion …'}},{locale:"eo",translations:{"{tag} (invisible)":"{tag} (kaŝita)","{tag} (restricted)":"{tag} (limigita)",Actions:"Agoj",Activities:"Aktiveco","Animals & Nature":"Bestoj & Naturo",Choose:"Elektu",Close:"Fermu",Custom:"Propra",Flags:"Flagoj","Food & Drink":"Manĝaĵo & Trinkaĵo","Frequently used":"Ofte uzataj","Message limit of {count} characters reached":"La limo je {count} da literoj atingita",Next:"Sekva","No emoji found":"La emoĝio forestas","No results":"La rezulto forestas",Objects:"Objektoj","Pause slideshow":"Payzi bildprezenton","People & Body":"Homoj & Korpo","Pick an emoji":"Elekti emoĝion ",Previous:"Antaŭa",Search:"Serĉi","Search results":"Serĉrezultoj","Select a tag":"Elektu etikedon",Settings:"Agordo","Settings navigation":"Agorda navigado","Smileys & Emotion":"Ridoj kaj Emocioj","Start slideshow":"Komenci bildprezenton",Symbols:"Signoj","Travel & Places":"Vojaĵoj & Lokoj","Unable to search the group":"Ne eblas serĉi en la grupo","Write message, @ to mention someone …":"Mesaĝi, uzu @ por mencii iun ..."}},{locale:"es",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringido)",Actions:"Acciones",Activities:"Actividades","Animals & Nature":"Animales y naturaleza","Anything shared with the same group of people will show up here":"Cualquier cosa que sea compartida con el mismo grupo de personas se mostrará aquí","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}","Cancel changes":"Cancelar cambios","Change title":"Cambiar título",Choose:"Elegir","Clear text":"Limpiar texto",Close:"Cerrar","Close modal":"Cerrar modal","Close navigation":"Cerrar navegación","Close sidebar":"Cerrar barra lateral","Confirm changes":"Confirmar cambios",Custom:"Personalizado","Edit item":"Editar elemento","Error getting related resources":"Se encontró un error al obtener los recursos relacionados","Error parsing svg":"Error procesando svg","External documentation for {title}":"Documentacion externa de {title}",Favorite:"Favorito",Flags:"Banderas","Food & Drink":"Comida y bebida","Frequently used":"Usado con frecuenca",Global:"Global","Go back to the list":"Volver a la lista","Hide password":"Ocultar contraseña","Message limit of {count} characters reached":"El mensaje ha alcanzado el límite de {count} caracteres","More items …":"Más ítems...",Next:"Siguiente","No emoji found":"No hay ningún emoji","No results":" Ningún resultado",Objects:"Objetos",Open:"Abrir",'Open link to "{resourceTitle}"':'Abrir enlace a "{resourceTitle}"',"Open navigation":"Abrir navegación","Password is secure":"La contraseña es segura","Pause slideshow":"Pausar la presentación ","People & Body":"Personas y cuerpos","Pick an emoji":"Elegir un emoji","Please select a time zone:":"Por favor elige un huso de horario:",Previous:"Anterior","Related resources":"Recursos relacionados",Search:"Buscar","Search results":"Resultados de la búsqueda","Select a tag":"Seleccione una etiqueta",Settings:"Ajustes","Settings navigation":"Navegación por ajustes","Show password":"Mostrar contraseña","Smileys & Emotion":"Smileys y emoticonos","Start slideshow":"Iniciar la presentación",Submit:"Enviar",Symbols:"Símbolos","Travel & Places":"Viajes y lugares","Type to search time zone":"Escribe para buscar un huso de horario","Unable to search the group":"No es posible buscar en el grupo","Undo changes":"Deshacer cambios",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escribir mensaje, utilice "@" para mencionar a alguien, utilice ":" para autocompletado de emojis ...'}},{locale:"eu",translations:{"{tag} (invisible)":"{tag} (ikusezina)","{tag} (restricted)":"{tag} (mugatua)",Actions:"Ekintzak",Activities:"Jarduerak","Animals & Nature":"Animaliak eta Natura","Anything shared with the same group of people will show up here":"Pertsona-talde berarekin partekatutako edozer agertuko da hemen","Avatar of {displayName}":"{displayName}-(e)n irudia","Avatar of {displayName}, {status}":"{displayName} -(e)n irudia, {status}","Cancel changes":"Ezeztatu aldaketak","Change title":"Aldatu titulua",Choose:"Aukeratu","Clear text":"Garbitu testua",Close:"Itxi","Close modal":"Itxi modala","Close navigation":"Itxi nabigazioa","Close sidebar":"Itxi albo-barra","Confirm changes":"Baieztatu aldaketak",Custom:"Pertsonalizatua","Edit item":"Editatu elementua","Error getting related resources":"Errorea erlazionatutako baliabideak lortzerakoan","Error parsing svg":"Errore bat gertatu da svg-a analizatzean","External documentation for {title}":"Kanpoko dokumentazioa {title}(r)entzat",Favorite:"Gogokoa",Flags:"Banderak","Food & Drink":"Janaria eta edariak","Frequently used":"Askotan erabilia",Global:"Globala","Go back to the list":"Bueltatu zerrendara","Hide password":"Ezkutatu pasahitza","Message limit of {count} characters reached":"Mezuaren {count} karaketere-limitera heldu zara","More items …":"Elementu gehiago …",Next:"Hurrengoa","No emoji found":"Ez da emojirik aurkitu","No results":"Emaitzarik ez",Objects:"Objektuak",Open:"Ireki",'Open link to "{resourceTitle}"':'Ireki esteka: "{resourceTitle}"',"Open navigation":"Ireki nabigazioa","Password is secure":"Pasahitza segurua da","Pause slideshow":"Pausatu diaporama","People & Body":"Jendea eta gorputza","Pick an emoji":"Hautatu emoji bat","Please select a time zone:":"Mesedez hautatu ordu-zona bat:",Previous:"Aurrekoa","Related resources":"Erlazionatutako baliabideak",Search:"Bilatu","Search results":"Bilaketa emaitzak","Select a tag":"Hautatu etiketa bat",Settings:"Ezarpenak","Settings navigation":"Nabigazio ezarpenak","Show password":"Erakutsi pasahitza","Smileys & Emotion":"Smileyak eta emozioa","Start slideshow":"Hasi diaporama",Submit:"Bidali",Symbols:"Sinboloak","Travel & Places":"Bidaiak eta lekuak","Type to search time zone":"Idatzi ordu-zona bat bilatzeko","Unable to search the group":"Ezin izan da taldea bilatu","Undo changes":"Aldaketak desegin",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Idatzi mezua, erabili "@" norbait aipatzeko, erabili ":" emojiak automatikoki osatzeko...'}},{locale:"fi_FI",translations:{"{tag} (invisible)":"{tag} (näkymätön)","{tag} (restricted)":"{tag} (rajoitettu)",Actions:"Toiminnot",Activities:"Aktiviteetit","Animals & Nature":"Eläimet & luonto","Avatar of {displayName}":"Käyttäjän {displayName} avatar","Avatar of {displayName}, {status}":"Käyttäjän {displayName} avatar, {status}","Cancel changes":"Peruuta muutokset",Choose:"Valitse",Close:"Sulje","Close navigation":"Sulje navigaatio","Confirm changes":"Vahvista muutokset",Custom:"Mukautettu","Edit item":"Muokkaa kohdetta","External documentation for {title}":"Ulkoinen dokumentaatio kohteelle {title}",Flags:"Liput","Food & Drink":"Ruoka & juoma","Frequently used":"Usein käytetyt",Global:"Yleinen","Go back to the list":"Siirry takaisin listaan","Message limit of {count} characters reached":"Viestin merkken enimmäisimäärä {count} täynnä ",Next:"Seuraava","No emoji found":"Emojia ei löytynyt","No results":"Ei tuloksia",Objects:"Esineet & asiat","Open navigation":"Avaa navigaatio","Pause slideshow":"Keskeytä diaesitys","People & Body":"Ihmiset & keho","Pick an emoji":"Valitse emoji","Please select a time zone:":"Valitse aikavyöhyke:",Previous:"Edellinen",Search:"Etsi","Search results":"Hakutulokset","Select a tag":"Valitse tagi",Settings:"Asetukset","Settings navigation":"Asetusnavigaatio","Smileys & Emotion":"Hymiöt & tunteet","Start slideshow":"Aloita diaesitys",Submit:"Lähetä",Symbols:"Symbolit","Travel & Places":"Matkustus & kohteet","Type to search time zone":"Kirjoita etsiäksesi aikavyöhyke","Unable to search the group":"Ryhmää ei voi hakea","Undo changes":"Kumoa muutokset","Write message, @ to mention someone, : for emoji autocompletion …":"Kirjoita viesti, @ mainitaksesi käyttäjän, : emojin automaattitäydennykseen…"}},{locale:"fr",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restreint)",Actions:"Actions",Activities:"Activités","Animals & Nature":"Animaux & Nature","Anything shared with the same group of people will show up here":"Tout ce qui est partagé avec le même groupe de personnes apparaîtra ici","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}","Cancel changes":"Annuler les modifications","Change title":"Modifier le titre",Choose:"Choisir","Clear text":"Effacer le texte",Close:"Fermer","Close modal":"Fermer la fenêtre","Close navigation":"Fermer la navigation","Close sidebar":"Fermer la barre latérale","Confirm changes":"Confirmer les modifications",Custom:"Personnalisé","Edit item":"Éditer l'élément","Error getting related resources":"Erreur à la récupération des ressources liées","Error parsing svg":"Erreur d'analyse SVG","External documentation for {title}":"Documentation externe pour {title}",Favorite:"Favori",Flags:"Drapeaux","Food & Drink":"Nourriture & Boissons","Frequently used":"Utilisés fréquemment",Global:"Global","Go back to the list":"Retourner à la liste","Hide password":"Cacher le mot de passe","Message limit of {count} characters reached":"Limite de messages de {count} caractères atteinte","More items …":"Plus d'éléments...",Next:"Suivant","No emoji found":"Pas d’émoji trouvé","No results":"Aucun résultat",Objects:"Objets",Open:"Ouvrir",'Open link to "{resourceTitle}"':'Ouvrir le lien vers "{resourceTitle}"',"Open navigation":"Ouvrir la navigation","Password is secure":"Le mot de passe est sécurisé","Pause slideshow":"Mettre le diaporama en pause","People & Body":"Personnes & Corps","Pick an emoji":"Choisissez un émoji","Please select a time zone:":"Sélectionnez un fuseau horaire : ",Previous:"Précédent","Related resources":"Ressources liées",Search:"Chercher","Search results":"Résultats de recherche","Select a tag":"Sélectionnez une balise",Settings:"Paramètres","Settings navigation":"Navigation dans les paramètres","Show password":"Afficher le mot de passe","Smileys & Emotion":"Smileys & Émotions","Start slideshow":"Démarrer le diaporama",Submit:"Valider",Symbols:"Symboles","Travel & Places":"Voyage & Lieux","Type to search time zone":"Saisissez les premiers lettres pour rechercher un fuseau horaire","Unable to search the group":"Impossible de chercher le groupe","Undo changes":"Annuler les changements",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Écrire un message, utiliser "@" pour mentionner une personne, ":" pour l\'autocomplétion des émojis...'}},{locale:"gl",translations:{"{tag} (invisible)":"{tag} (invisíbel)","{tag} (restricted)":"{tag} (restrinxido)",Actions:"Accións",Activities:"Actividades","Animals & Nature":"Animais e natureza","Cancel changes":"Cancelar os cambios",Choose:"Escoller",Close:"Pechar","Confirm changes":"Confirma os cambios",Custom:"Personalizado","External documentation for {title}":"Documentación externa para {title}",Flags:"Bandeiras","Food & Drink":"Comida e bebida","Frequently used":"Usado con frecuencia","Message limit of {count} characters reached":"Acadouse o límite de {count} caracteres por mensaxe",Next:"Seguinte","No emoji found":"Non se atopou ningún «emoji»","No results":"Sen resultados",Objects:"Obxectos","Pause slideshow":"Pausar o diaporama","People & Body":"Persoas e corpo","Pick an emoji":"Escolla un «emoji»",Previous:"Anterir",Search:"Buscar","Search results":"Resultados da busca","Select a tag":"Seleccione unha etiqueta",Settings:"Axustes","Settings navigation":"Navegación polos axustes","Smileys & Emotion":"Sorrisos e emocións","Start slideshow":"Iniciar o diaporama",Submit:"Enviar",Symbols:"Símbolos","Travel & Places":"Viaxes e lugares","Unable to search the group":"Non foi posíbel buscar o grupo","Write message, @ to mention someone …":"Escriba a mensaxe, @ para mencionar a alguén…"}},{locale:"he",translations:{"{tag} (invisible)":"{tag} (נסתר)","{tag} (restricted)":"{tag} (מוגבל)",Actions:"פעולות",Activities:"פעילויות","Animals & Nature":"חיות וטבע",Choose:"בחירה",Close:"סגירה",Custom:"בהתאמה אישית",Flags:"דגלים","Food & Drink":"מזון ומשקאות","Frequently used":"בשימוש תדיר",Next:"הבא","No emoji found":"לא נמצא אמוג׳י","No results":"אין תוצאות",Objects:"חפצים","Pause slideshow":"השהיית מצגת","People & Body":"אנשים וגוף","Pick an emoji":"נא לבחור אמוג׳י",Previous:"הקודם",Search:"חיפוש","Search results":"תוצאות חיפוש","Select a tag":"בחירת תגית",Settings:"הגדרות","Smileys & Emotion":"חייכנים ורגשונים","Start slideshow":"התחלת המצגת",Symbols:"סמלים","Travel & Places":"טיולים ומקומות","Unable to search the group":"לא ניתן לחפש בקבוצה"}},{locale:"hu_HU",translations:{"{tag} (invisible)":"{tag} (láthatatlan)","{tag} (restricted)":"{tag} (korlátozott)",Actions:"Műveletek",Activities:"Tevékenységek","Animals & Nature":"Állatok és természet","Anything shared with the same group of people will show up here":"Minden, amit ugyanazzal a csoporttal oszt meg, itt fog megjelenni","Avatar of {displayName}":"{displayName} profilképe","Avatar of {displayName}, {status}":"{displayName} profilképe, {status}","Cancel changes":"Változtatások elvetése","Change title":"Cím megváltoztatása",Choose:"Válassszon","Clear text":"Szöveg törlése",Close:"Bezárás","Close modal":"Ablak bezárása","Close navigation":"Navigáció bezárása","Close sidebar":"Oldalsáv bezárása","Confirm changes":"Változtatások megerősítése",Custom:"Egyéni","Edit item":"Elem szerkesztése","Error getting related resources":"Hiba a kapcsolódó erőforrások lekérésekor","Error parsing svg":"Hiba az SVG feldolgozásakor","External documentation for {title}":"Külső dokumentáció ehhez: {title}",Favorite:"Kedvenc",Flags:"Zászlók","Food & Drink":"Étel és ital","Frequently used":"Gyakran használt",Global:"Globális","Go back to the list":"Ugrás vissza a listához","Hide password":"Jelszó elrejtése","Message limit of {count} characters reached":"{count} karakteres üzenetkorlát elérve","More items …":"További elemek...",Next:"Következő","No emoji found":"Nem található emodzsi","No results":"Nincs találat",Objects:"Tárgyak",Open:"Megnyitás",'Open link to "{resourceTitle}"':"A(z) „{resourceTitle}” hivatkozásának megnyitása","Open navigation":"Navigáció megnyitása","Password is secure":"A jelszó biztonságos","Pause slideshow":"Diavetítés szüneteltetése","People & Body":"Emberek és test","Pick an emoji":"Válasszon egy emodzsit","Please select a time zone:":"Válasszon időzónát:",Previous:"Előző","Related resources":"Kapcsolódó erőforrások",Search:"Keresés","Search results":"Találatok","Select a tag":"Válasszon címkét",Settings:"Beállítások","Settings navigation":"Navigáció a beállításokban","Show password":"Jelszó megjelenítése","Smileys & Emotion":"Mosolyok és érzelmek","Start slideshow":"Diavetítés indítása",Submit:"Beküldés",Symbols:"Szimbólumok","Travel & Places":"Utazás és helyek","Type to search time zone":"Gépeljen az időzóna kereséséhez","Unable to search the group":"A csoport nem kereshető","Undo changes":"Változtatások visszavonása",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':"Írjon egy üzenetet, használja a „@”-ot valaki megemlítéséhet, illetve a „:”-ot az emodzsik automatikus kiegészítéséhez…"}},{locale:"is",translations:{"{tag} (invisible)":"{tag} (ósýnilegt)","{tag} (restricted)":"{tag} (takmarkað)",Actions:"Aðgerðir",Activities:"Aðgerðir","Animals & Nature":"Dýr og náttúra",Choose:"Velja",Close:"Loka",Custom:"Sérsniðið",Flags:"Flögg","Food & Drink":"Matur og drykkur","Frequently used":"Oftast notað",Next:"Næsta","No emoji found":"Ekkert tjáningartákn fannst","No results":"Engar niðurstöður",Objects:"Hlutir","Pause slideshow":"Gera hlé á skyggnusýningu","People & Body":"Fólk og líkami","Pick an emoji":"Veldu tjáningartákn",Previous:"Fyrri",Search:"Leita","Search results":"Leitarniðurstöður","Select a tag":"Veldu merki",Settings:"Stillingar","Smileys & Emotion":"Broskallar og tilfinningar","Start slideshow":"Byrja skyggnusýningu",Symbols:"Tákn","Travel & Places":"Staðir og ferðalög","Unable to search the group":"Get ekki leitað í hópnum"}},{locale:"it",translations:{"{tag} (invisible)":"{tag} (invisibile)","{tag} (restricted)":"{tag} (limitato)",Actions:"Azioni",Activities:"Attività","Animals & Nature":"Animali e natura","Anything shared with the same group of people will show up here":"Tutto ciò che è stato condiviso con lo stesso gruppo di persone viene visualizzato qui","Avatar of {displayName}":"Avatar di {displayName}","Avatar of {displayName}, {status}":"Avatar di {displayName}, {status}","Cancel changes":"Annulla modifiche","Change title":"Modifica il titolo",Choose:"Scegli","Clear text":"Cancella il testo",Close:"Chiudi","Close modal":"Chiudi il messaggio modale","Close navigation":"Chiudi la navigazione","Close sidebar":"Chiudi la barra laterale","Confirm changes":"Conferma modifiche",Custom:"Personalizzato","Edit item":"Modifica l'elemento","Error getting related resources":"Errore nell'ottenere risorse correlate","Error parsing svg":"Errore nell'analizzare l'svg","External documentation for {title}":"Documentazione esterna per {title}",Favorite:"Preferito",Flags:"Bandiere","Food & Drink":"Cibo e bevande","Frequently used":"Usati di frequente",Global:"Globale","Go back to the list":"Torna all'elenco","Hide password":"Nascondi la password","Message limit of {count} characters reached":"Limite dei messaggi di {count} caratteri raggiunto","More items …":"Più elementi ...",Next:"Successivo","No emoji found":"Nessun emoji trovato","No results":"Nessun risultato",Objects:"Oggetti",Open:"Apri",'Open link to "{resourceTitle}"':'Apri il link a "{resourceTitle}"',"Open navigation":"Apri la navigazione","Password is secure":"La password è sicura","Pause slideshow":"Presentazione in pausa","People & Body":"Persone e corpo","Pick an emoji":"Scegli un emoji","Please select a time zone:":"Si prega di selezionare un fuso orario:",Previous:"Precedente","Related resources":"Risorse correlate",Search:"Cerca","Search results":"Risultati di ricerca","Select a tag":"Seleziona un'etichetta",Settings:"Impostazioni","Settings navigation":"Navigazione delle impostazioni","Show password":"Mostra la password","Smileys & Emotion":"Faccine ed emozioni","Start slideshow":"Avvia presentazione",Submit:"Invia",Symbols:"Simboli","Travel & Places":"Viaggi e luoghi","Type to search time zone":"Digita per cercare un fuso orario","Unable to search the group":"Impossibile cercare il gruppo","Undo changes":"Cancella i cambiamenti",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Scrivi un messaggio, "@" per menzionare qualcuno, ":" per il completamento automatico delle emoji ...'}},{locale:"ja_JP",translations:{"{tag} (invisible)":"{タグ} (不可視)","{tag} (restricted)":"{タグ} (制限付)",Actions:"操作",Activities:"アクティビティ","Animals & Nature":"動物と自然","Anything shared with the same group of people will show up here":"同じグループで共有しているものは、全てここに表示されます","Avatar of {displayName}":"{displayName} のアバター","Avatar of {displayName}, {status}":"{displayName}, {status} のアバター","Cancel changes":"変更をキャンセル","Change title":"タイトルを変更",Choose:"選択","Clear text":"テキストをクリア",Close:"閉じる","Close modal":"モーダルを閉じる","Close navigation":"ナビゲーションを閉じる","Close sidebar":"サイドバーを閉じる","Confirm changes":"変更を承認",Custom:"カスタム","Edit item":"編集","Error getting related resources":"関連リソースの取得エラー","Error parsing svg":"svgの解析エラー","External documentation for {title}":"{title} のための添付文書",Favorite:"お気に入り",Flags:"国旗","Food & Drink":"食べ物と飲み物","Frequently used":"よく使うもの",Global:"全体","Go back to the list":"リストに戻る","Hide password":"パスワードを非表示","Message limit of {count} characters reached":"{count} 文字のメッセージ上限に達しています","More items …":"他のアイテム",Next:"次","No emoji found":"絵文字が見つかりません","No results":"なし",Objects:"物",Open:"開く",'Open link to "{resourceTitle}"':'"{resourceTitle}"のリンクを開く',"Open navigation":"ナビゲーションを開く","Password is secure":"パスワードは保護されています","Pause slideshow":"スライドショーを一時停止","People & Body":"様々な人と体の部位","Pick an emoji":"絵文字を選択","Please select a time zone:":"タイムゾーンを選んで下さい：",Previous:"前","Related resources":"関連リソース",Search:"検索","Search results":"検索結果","Select a tag":"タグを選択",Settings:"設定","Settings navigation":"ナビゲーション設定","Show password":"パスワードを表示","Smileys & Emotion":"感情表現","Start slideshow":"スライドショーを開始",Submit:"提出",Symbols:"記号","Travel & Places":"旅行と場所","Type to search time zone":"タイムゾーン検索のため入力してください","Unable to search the group":"グループを検索できません","Undo changes":"変更を取り消し",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'メッセージを記入、"@"でメンション、"："で絵文字の自動補完 ...'}},{locale:"lt_LT",translations:{"{tag} (invisible)":"{tag} (nematoma)","{tag} (restricted)":"{tag} (apribota)",Actions:"Veiksmai",Activities:"Veiklos","Animals & Nature":"Gyvūnai ir gamta",Choose:"Pasirinkti",Close:"Užverti",Custom:"Tinkinti","External documentation for {title}":"Išorinė {title} dokumentacija",Flags:"Vėliavos","Food & Drink":"Maistas ir gėrimai","Frequently used":"Dažniausiai naudoti","Message limit of {count} characters reached":"Pasiekta {count} simbolių žinutės riba",Next:"Kitas","No emoji found":"Nerasta jaustukų","No results":"Nėra rezultatų",Objects:"Objektai","Pause slideshow":"Pristabdyti skaidrių rodymą","People & Body":"Žmonės ir kūnas","Pick an emoji":"Pasirinkti jaustuką",Previous:"Ankstesnis",Search:"Ieškoti","Search results":"Paieškos rezultatai","Select a tag":"Pasirinkti žymę",Settings:"Nustatymai","Settings navigation":"Naršymas nustatymuose","Smileys & Emotion":"Šypsenos ir emocijos","Start slideshow":"Pradėti skaidrių rodymą",Submit:"Pateikti",Symbols:"Simboliai","Travel & Places":"Kelionės ir vietos","Unable to search the group":"Nepavyko atlikti paiešką grupėje","Write message, @ to mention someone …":"Rašykite žinutę, naudokite @ norėdami kažką paminėti…"}},{locale:"lv",translations:{"{tag} (invisible)":"{tag} (neredzams)","{tag} (restricted)":"{tag} (ierobežots)",Choose:"Izvēlēties",Close:"Aizvērt",Next:"Nākamais","No results":"Nav rezultātu","Pause slideshow":"Pauzēt slaidrādi",Previous:"Iepriekšējais","Select a tag":"Izvēlēties birku",Settings:"Iestatījumi","Start slideshow":"Sākt slaidrādi"}},{locale:"mk",translations:{"{tag} (invisible)":"{tag} (невидливо)","{tag} (restricted)":"{tag} (ограничено)",Actions:"Акции",Activities:"Активности","Animals & Nature":"Животни & Природа","Avatar of {displayName}":"Аватар на {displayName}","Avatar of {displayName}, {status}":"Аватар на {displayName}, {status}","Cancel changes":"Откажи ги промените","Change title":"Промени наслов",Choose:"Избери",Close:"Затвори","Close modal":"Затвори модал","Close navigation":"Затвори навигација","Confirm changes":"Потврди ги промените",Custom:"Прилагодени","Edit item":"Уреди","External documentation for {title}":"Надворешна документација за {title}",Favorite:"Фаворити",Flags:"Знамиња","Food & Drink":"Храна & Пијалоци","Frequently used":"Најчесто користени",Global:"Глобално","Go back to the list":"Врати се на листата",items:"ставки","Message limit of {count} characters reached":"Ограничувањето на должината на пораката од {count} карактери е надминато","More {dashboardItemType} …":"Повеќе {dashboardItemType} …",Next:"Следно","No emoji found":"Не се пронајдени емотикони","No results":"Нема резултати",Objects:"Објекти",Open:"Отвори","Open navigation":"Отвори навигација","Pause slideshow":"Пузирај слајдшоу","People & Body":"Луѓе & Тело","Pick an emoji":"Избери емотикон","Please select a time zone:":"Изберете временска зона:",Previous:"Предходно",Search:"Барај","Search results":"Резултати од барувањето","Select a tag":"Избери ознака",Settings:"Параметри","Settings navigation":"Параметри за навигација","Smileys & Emotion":"Смешковци & Емотикони","Start slideshow":"Стартувај слајдшоу",Submit:"Испрати",Symbols:"Симболи","Travel & Places":"Патувања & Места","Type to search time zone":"Напишете за да пребарате временска зона","Unable to search the group":"Неможе да се принајде групата","Undo changes":"Врати ги промените","Write message, @ to mention someone, : for emoji autocompletion …":"Напиши порака, @ за да спомнете некого, : за емотинони автоатско комплетирање ..."}},{locale:"my",translations:{"{tag} (invisible)":"{tag} (ကွယ်ဝှက်ထား)","{tag} (restricted)":"{tag} (ကန့်သတ်)",Actions:"လုပ်ဆောင်ချက်များ",Activities:"ပြုလုပ်ဆောင်တာများ","Animals & Nature":"တိရစ္ဆာန်များနှင့် သဘာဝ","Avatar of {displayName}":"{displayName} ၏ ကိုယ်ပွား","Cancel changes":"ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်",Choose:"ရွေးချယ်ရန်",Close:"ပိတ်ရန်","Confirm changes":"ပြောင်းလဲမှုများ အတည်ပြုရန်",Custom:"အလိုကျချိန်ညှိမှု","External documentation for {title}":"{title} အတွက် ပြင်ပ စာရွက်စာတမ်း",Flags:"အလံများ","Food & Drink":"အစားအသောက်","Frequently used":"မကြာခဏအသုံးပြုသော",Global:"ကမ္ဘာလုံးဆိုင်ရာ","Message limit of {count} characters reached":"ကန့်သတ် စာလုံးရေ {count} လုံး ပြည့်ပါပြီ",Next:"နောက်သို့ဆက်ရန်","No emoji found":"အီမိုဂျီ ရှာဖွေမတွေ့နိုင်ပါ","No results":"ရလဒ်မရှိပါ",Objects:"အရာဝတ္ထုများ","Pause slideshow":"စလိုက်ရှိုး ခေတ္တရပ်ရန်","People & Body":"လူပုဂ္ဂိုလ်များနှင့် ခန္ဓာကိုယ်","Pick an emoji":"အီမိုဂျီရွေးရန်","Please select a time zone:":"ဒေသစံတော်ချိန် ရွေးချယ်ပေးပါ",Previous:"ယခင်",Search:"ရှာဖွေရန်","Search results":"ရှာဖွေမှု ရလဒ်များ","Select a tag":"tag ရွေးချယ်ရန်",Settings:"ချိန်ညှိချက်များ","Settings navigation":"ချိန်ညှိချက်အညွှန်း","Smileys & Emotion":"စမိုင်လီများနှင့် အီမိုရှင်း","Start slideshow":"စလိုက်ရှိုးအား စတင်ရန်",Submit:"တင်သွင်းရန်",Symbols:"သင်္ကေတများ","Travel & Places":"ခရီးသွားလာခြင်းနှင့် နေရာများ","Type to search time zone":"ဒေသစံတော်ချိန်များ ရှာဖွေရန် စာရိုက်ပါ","Unable to search the group":"အဖွဲ့အား ရှာဖွေ၍ မရနိုင်ပါ","Write message, @ to mention someone …":"စာရေးသားရန်၊ တစ်စုံတစ်ဦးအား @ အသုံးပြု ရည်ညွှန်းရန်..."}},{locale:"nb_NO",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (beskyttet)",Actions:"Handlinger",Activities:"Aktiviteter","Animals & Nature":"Dyr og natur","Anything shared with the same group of people will show up here":"Alt som er delt med den samme gruppen vil vises her","Avatar of {displayName}":"Avataren til {displayName}","Avatar of {displayName}, {status}":"{displayName}'s avatar, {status}","Cancel changes":"Avbryt endringer","Change title":"Endre tittel",Choose:"Velg","Clear text":"Fjern tekst",Close:"Lukk","Close modal":"Lukk modal","Close navigation":"Lukk navigasjon","Close sidebar":"Lukk sidepanel","Confirm changes":"Bekreft endringer",Custom:"Tilpasset","Edit item":"Rediger","Error getting related resources":"Feil ved henting av relaterte ressurser","Error parsing svg":"Feil ved parsing av svg","External documentation for {title}":"Ekstern dokumentasjon for {title}",Favorite:"Favoritt",Flags:"Flagg","Food & Drink":"Mat og drikke","Frequently used":"Ofte brukt",Global:"Global","Go back to the list":"Gå tilbake til listen","Hide password":"Skjul passord","Message limit of {count} characters reached":"Karakter begrensing {count} nådd i melding","More items …":"Flere gjenstander...",Next:"Neste","No emoji found":"Fant ingen emoji","No results":"Ingen resultater",Objects:"Objekter",Open:"Åpne",'Open link to "{resourceTitle}"':'Åpne link til "{resourceTitle}"',"Open navigation":"Åpne navigasjon","Password is secure":"Passordet er sikkert","Pause slideshow":"Pause lysbildefremvisning","People & Body":"Mennesker og kropp","Pick an emoji":"Velg en emoji","Please select a time zone:":"Vennligst velg tidssone",Previous:"Forrige","Related resources":"Relaterte ressurser",Search:"Søk","Search results":"Søkeresultater","Select a tag":"Velg en merkelapp",Settings:"Innstillinger","Settings navigation":"Navigasjonsinstillinger","Show password":"Vis passord","Smileys & Emotion":"Smilefjes og følelser","Start slideshow":"Start lysbildefremvisning",Submit:"Send",Symbols:"Symboler","Travel & Places":"Reise og steder","Type to search time zone":"Tast for å søke etter tidssone","Unable to search the group":"Kunne ikke søke i gruppen","Undo changes":"Tilbakestill endringer",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv melding, bruk "@" for å nevne noen, bruk ":" for autofullføring av emoji...'}},{locale:"nl",translations:{"{tag} (invisible)":"{tag} (onzichtbaar)","{tag} (restricted)":"{tag} (beperkt)",Actions:"Acties",Activities:"Activiteiten","Animals & Nature":"Dieren & Natuur","Avatar of {displayName}":"Avatar van {displayName}","Avatar of {displayName}, {status}":"Avatar van {displayName}, {status}","Cancel changes":"Wijzigingen annuleren",Choose:"Kies",Close:"Sluiten","Close navigation":"Navigatie sluiten","Confirm changes":"Wijzigingen bevestigen",Custom:"Aangepast","Edit item":"Item bewerken","External documentation for {title}":"Externe documentatie voor {title}",Flags:"Vlaggen","Food & Drink":"Eten & Drinken","Frequently used":"Vaak gebruikt",Global:"Globaal","Go back to the list":"Ga terug naar de lijst","Message limit of {count} characters reached":"Berichtlimiet van {count} karakters bereikt",Next:"Volgende","No emoji found":"Geen emoji gevonden","No results":"Geen resultaten",Objects:"Objecten","Open navigation":"Navigatie openen","Pause slideshow":"Pauzeer diavoorstelling","People & Body":"Mensen & Lichaam","Pick an emoji":"Kies een emoji","Please select a time zone:":"Selecteer een tijdzone:",Previous:"Vorige",Search:"Zoeken","Search results":"Zoekresultaten","Select a tag":"Selecteer een label",Settings:"Instellingen","Settings navigation":"Instellingen navigatie","Smileys & Emotion":"Smileys & Emotie","Start slideshow":"Start diavoorstelling",Submit:"Verwerken",Symbols:"Symbolen","Travel & Places":"Reizen & Plaatsen","Type to search time zone":"Type om de tijdzone te zoeken","Unable to search the group":"Kan niet in de groep zoeken","Undo changes":"Wijzigingen ongedaan maken","Write message, @ to mention someone, : for emoji autocompletion …":"Schrijf bericht, @ om iemand te noemen, : voor emoji auto-aanvullen ..."}},{locale:"oc",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (limit)",Actions:"Accions",Choose:"Causir",Close:"Tampar",Next:"Seguent","No results":"Cap de resultat","Pause slideshow":"Metre en pausa lo diaporama",Previous:"Precedent","Select a tag":"Seleccionar una etiqueta",Settings:"Paramètres","Start slideshow":"Lançar lo diaporama"}},{locale:"pl",translations:{"{tag} (invisible)":"{tag} (niewidoczna)","{tag} (restricted)":"{tag} (ograniczona)",Actions:"Działania",Activities:"Aktywność","Animals & Nature":"Zwierzęta i natura","Anything shared with the same group of people will show up here":"Tutaj pojawi się wszystko, co zostało udostępnione tej samej grupie osób","Avatar of {displayName}":"Awatar {displayName}","Avatar of {displayName}, {status}":"Awatar {displayName}, {status}","Cancel changes":"Anuluj zmiany","Change title":"Zmień tytuł",Choose:"Wybierz","Clear text":"Wyczyść tekst",Close:"Zamknij","Close modal":"Zamknij modal","Close navigation":"Zamknij nawigację","Close sidebar":"Zamknij pasek boczny","Confirm changes":"Potwierdź zmiany",Custom:"Zwyczajne","Edit item":"Edytuj element","Error getting related resources":"Błąd podczas pobierania powiązanych zasobów","Error parsing svg":"Błąd podczas analizowania svg","External documentation for {title}":"Dokumentacja zewnętrzna dla {title}",Favorite:"Ulubiony",Flags:"Flagi","Food & Drink":"Jedzenie i picie","Frequently used":"Często używane",Global:"Globalnie","Go back to the list":"Powrót do listy","Hide password":"Ukryj hasło","Message limit of {count} characters reached":"Przekroczono limit wiadomości wynoszący {count} znaków","More items …":"Więcej pozycji…",Next:"Następny","No emoji found":"Nie znaleziono emoji","No results":"Brak wyników",Objects:"Obiekty",Open:"Otwórz",'Open link to "{resourceTitle}"':'Otwórz link do "{resourceTitle}"',"Open navigation":"Otwórz nawigację","Password is secure":"Hasło jest bezpieczne","Pause slideshow":"Wstrzymaj pokaz slajdów","People & Body":"Ludzie i ciało","Pick an emoji":"Wybierz emoji","Please select a time zone:":"Wybierz strefę czasową:",Previous:"Poprzedni","Related resources":"Powiązane zasoby",Search:"Szukaj","Search results":"Wyniki wyszukiwania","Select a tag":"Wybierz etykietę",Settings:"Ustawienia","Settings navigation":"Ustawienia nawigacji","Show password":"Pokaż hasło","Smileys & Emotion":"Buźki i emotikony","Start slideshow":"Rozpocznij pokaz slajdów",Submit:"Wyślij",Symbols:"Symbole","Travel & Places":"Podróże i miejsca","Type to search time zone":"Wpisz, aby wyszukać strefę czasową","Unable to search the group":"Nie można przeszukać grupy","Undo changes":"Cofnij zmiany",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Napisz wiadomość, "@" aby o kimś wspomnieć, ":" dla autouzupełniania emoji…'}},{locale:"pt_BR",translations:{"{tag} (invisible)":"{tag} (invisível)","{tag} (restricted)":"{tag} (restrito) ",Actions:"Ações",Activities:"Atividades","Animals & Nature":"Animais & Natureza","Anything shared with the same group of people will show up here":"Qualquer coisa compartilhada com o mesmo grupo de pessoas aparecerá aqui","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}","Cancel changes":"Cancelar alterações","Change title":"Alterar título",Choose:"Escolher","Clear text":"Limpar texto",Close:"Fechar","Close modal":"Fechar modal","Close navigation":"Fechar navegação","Close sidebar":"Fechar barra lateral","Confirm changes":"Confirmar alterações",Custom:"Personalizado","Edit item":"Editar item","Error getting related resources":"Erro ao obter recursos relacionados","Error parsing svg":"Erro ao analisar svg","External documentation for {title}":"Documentação externa para {title}",Favorite:"Favorito",Flags:"Bandeiras","Food & Drink":"Comida & Bebida","Frequently used":"Mais usados",Global:"Global","Go back to the list":"Volte para a lista","Hide password":"Ocultar a senha","Message limit of {count} characters reached":"Limite de mensagem de {count} caracteres atingido","More items …":"Mais itens …",Next:"Próximo","No emoji found":"Nenhum emoji encontrado","No results":"Sem resultados",Objects:"Objetos",Open:"Aberto",'Open link to "{resourceTitle}"':'Abrir link para "{resourceTitle}"',"Open navigation":"Abrir navegação","Password is secure":"A senha é segura","Pause slideshow":"Pausar apresentação de slides","People & Body":"Pessoas & Corpo","Pick an emoji":"Escolha um emoji","Please select a time zone:":"Selecione um fuso horário: ",Previous:"Anterior","Related resources":"Recursos relacionados",Search:"Pesquisar","Search results":"Resultados da pesquisa","Select a tag":"Selecionar uma tag",Settings:"Configurações","Settings navigation":"Navegação de configurações","Show password":"Mostrar senha","Smileys & Emotion":"Smiles & Emoções","Start slideshow":"Iniciar apresentação de slides",Submit:"Enviar",Symbols:"Símbolo","Travel & Places":"Viagem & Lugares","Type to search time zone":"Digite para pesquisar o fuso horário ","Unable to search the group":"Não foi possível pesquisar o grupo","Undo changes":"Desfazer modificações",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escreva mensagens, use "@" para mencionar algum, use ":" for autocompletar emoji …'}},{locale:"pt_PT",translations:{"{tag} (invisible)":"{tag} (invisivel)","{tag} (restricted)":"{tag} (restrito)",Actions:"Ações",Choose:"Escolher",Close:"Fechar",Next:"Seguinte","No results":"Sem resultados","Pause slideshow":"Pausar diaporama",Previous:"Anterior","Select a tag":"Selecionar uma etiqueta",Settings:"Definições","Start slideshow":"Iniciar diaporama","Unable to search the group":"Não é possível pesquisar o grupo"}},{locale:"ro",translations:{"{tag} (invisible)":"{tag} (invizibil)","{tag} (restricted)":"{tag} (restricționat)",Actions:"Acțiuni",Activities:"Activități","Animals & Nature":"Animale și natură","Anything shared with the same group of people will show up here":"Tot ceea ce este partajat cu același grup de persoane va fi afișat aici","Avatar of {displayName}":"Avatarul lui {displayName}","Avatar of {displayName}, {status}":"Avatarul lui {displayName}, {status}","Cancel changes":"Anulează modificările","Change title":"Modificați titlul",Choose:"Alegeți","Clear text":"Șterge textul",Close:"Închideți","Close modal":"Închideți modulul","Close navigation":"Închideți navigarea","Close sidebar":"Închide bara laterală","Confirm changes":"Confirmați modificările",Custom:"Personalizat","Edit item":"Editați elementul","Error getting related resources":" Eroare la returnarea resurselor legate","Error parsing svg":"Eroare de analizare a svg","External documentation for {title}":"Documentație externă pentru {title}",Favorite:"Favorit",Flags:"Marcaje","Food & Drink":"Alimente și băuturi","Frequently used":"Utilizate frecvent",Global:"Global","Go back to the list":"Întoarceți-vă la listă","Hide password":"Ascunde parola","Message limit of {count} characters reached":"Limita mesajului de {count} caractere a fost atinsă","More items …":"Mai multe articole ...",Next:"Următorul","No emoji found":"Nu s-a găsit niciun emoji","No results":"Nu există rezultate",Objects:"Obiecte",Open:"Deschideți",'Open link to "{resourceTitle}"':'Deschide legătura la "{resourceTitle}"',"Open navigation":"Deschideți navigația","Password is secure":"Parola este sigură","Pause slideshow":"Pauză prezentare de diapozitive","People & Body":"Oameni și corp","Pick an emoji":"Alege un emoji","Please select a time zone:":"Vă rugăm să selectați un fus orar:",Previous:"Anterior","Related resources":"Resurse legate",Search:"Căutare","Search results":"Rezultatele căutării","Select a tag":"Selectați o etichetă",Settings:"Setări","Settings navigation":"Navigare setări","Show password":"Arată parola","Smileys & Emotion":"Zâmbete și emoții","Start slideshow":"Începeți prezentarea de diapozitive",Submit:"Trimiteți",Symbols:"Simboluri","Travel & Places":"Călătorii și locuri","Type to search time zone":"Tastați pentru a căuta fusul orar","Unable to search the group":"Imposibilitatea de a căuta în grup","Undo changes":"Anularea modificărilor",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Scrie un mesaj, folosește "@" pentru a menționa pe cineva, folosește ":" pentru autocompletarea cu emoji ...'}},{locale:"ru",translations:{"{tag} (invisible)":"{tag} (невидимое)","{tag} (restricted)":"{tag} (ограниченное)",Actions:"Действия ",Activities:"События","Animals & Nature":"Животные и природа ","Avatar of {displayName}":"Аватар {displayName}","Avatar of {displayName}, {status}":"Фотография {displayName}, {status}","Cancel changes":"Отменить изменения",Choose:"Выберите",Close:"Закрыть","Close modal":"Закрыть модальное окно","Close navigation":"Закрыть навигацию","Confirm changes":"Подтвердить изменения",Custom:"Пользовательское","Edit item":"Изменить элемент","External documentation for {title}":"Внешняя документация для {title}",Flags:"Флаги","Food & Drink":"Еда, напиток","Frequently used":"Часто используемый",Global:"Глобальный","Go back to the list":"Вернуться к списку",items:"элементов","Message limit of {count} characters reached":"Достигнуто ограничение на количество символов в {count}","More {dashboardItemType} …":"Больше {dashboardItemType} …",Next:"Следующее","No emoji found":"Эмодзи не найдено","No results":"Результаты отсуствуют",Objects:"Объекты",Open:"Открыть","Open navigation":"Открыть навигацию","Pause slideshow":"Приостановить показ слйдов","People & Body":"Люди и тело","Pick an emoji":"Выберите эмодзи","Please select a time zone:":"Пожалуйста, выберите часовой пояс:",Previous:"Предыдущее",Search:"Поиск","Search results":"Результаты поиска","Select a tag":"Выберите метку",Settings:"Параметры","Settings navigation":"Навигация по настройкам","Smileys & Emotion":"Смайлики и эмоции","Start slideshow":"Начать показ слайдов",Submit:"Утвердить",Symbols:"Символы","Travel & Places":"Путешествия и места","Type to search time zone":"Введите для поиска часового пояса","Unable to search the group":"Невозможно найти группу","Undo changes":"Отменить изменения","Write message, @ to mention someone, : for emoji autocompletion …":"Напишите сообщение, @ - чтобы упомянуть кого-то, : - для автозаполнения эмодзи …"}},{locale:"sk_SK",translations:{"{tag} (invisible)":"{tag} (neviditeľný)","{tag} (restricted)":"{tag} (obmedzený)",Actions:"Akcie",Activities:"Aktivity","Animals & Nature":"Zvieratá a príroda","Avatar of {displayName}":"Avatar {displayName}","Avatar of {displayName}, {status}":"Avatar {displayName}, {status}","Cancel changes":"Zrušiť zmeny",Choose:"Vybrať",Close:"Zatvoriť","Close navigation":"Zavrieť navigáciu","Confirm changes":"Potvrdiť zmeny",Custom:"Zvyk","Edit item":"Upraviť položku","External documentation for {title}":"Externá dokumentácia pre {title}",Flags:"Vlajky","Food & Drink":"Jedlo a nápoje","Frequently used":"Často používané",Global:"Globálne","Go back to the list":"Naspäť na zoznam","Message limit of {count} characters reached":"Limit správy na {count} znakov dosiahnutý",Next:"Ďalší","No emoji found":"Nenašli sa žiadne emodži","No results":"Žiadne výsledky",Objects:"Objekty","Open navigation":"Otvoriť navigáciu","Pause slideshow":"Pozastaviť prezentáciu","People & Body":"Ľudia a telo","Pick an emoji":"Vyberte si emodži","Please select a time zone:":"Prosím vyberte časovú zónu:",Previous:"Predchádzajúci",Search:"Hľadať","Search results":"Výsledky vyhľadávania","Select a tag":"Vybrať štítok",Settings:"Nastavenia","Settings navigation":"Navigácia v nastaveniach","Smileys & Emotion":"Smajlíky a emócie","Start slideshow":"Začať prezentáciu",Submit:"Odoslať",Symbols:"Symboly","Travel & Places":"Cestovanie a miesta","Type to search time zone":"Začníte písať pre vyhľadávanie časovej zóny","Unable to search the group":"Skupinu sa nepodarilo nájsť","Undo changes":"Vrátiť zmeny","Write message, @ to mention someone, : for emoji autocompletion …":"Napíšte správu, @ ak chcete niekoho spomenúť, : pre automatické dopĺňanie emotikonov…"}},{locale:"sl",translations:{"{tag} (invisible)":"{tag} (nevidno)","{tag} (restricted)":"{tag} (omejeno)",Actions:"Dejanja",Activities:"Dejavnosti","Animals & Nature":"Živali in Narava","Avatar of {displayName}":"Podoba {displayName}","Avatar of {displayName}, {status}":"Prikazna slika {displayName}, {status}","Cancel changes":"Prekliči spremembe","Change title":"Spremeni naziv",Choose:"Izbor","Clear text":"Počisti besedilo",Close:"Zapri","Close modal":"Zapri pojavno okno","Close navigation":"Zapri krmarjenje","Close sidebar":"Zapri stransko vrstico","Confirm changes":"Potrdi spremembe",Custom:"Po meri","Edit item":"Uredi predmet","Error getting related resources":"Napaka pridobivanja povezanih virov","External documentation for {title}":"Zunanja dokumentacija za {title}",Favorite:"Priljubljeno",Flags:"Zastavice","Food & Drink":"Hrana in Pijača","Frequently used":"Pogostost uporabe",Global:"Splošno","Go back to the list":"Vrni se na seznam","Hide password":"Skrij geslo","Message limit of {count} characters reached":"Dosežena omejitev {count} znakov na sporočilo.","More items …":"Več predmetov ...",Next:"Naslednji","No emoji found":"Ni najdenih izraznih ikon","No results":"Ni zadetkov",Objects:"Predmeti",Open:"Odpri",'Open link to "{resourceTitle}"':"Odpri povezavo do »{resourceTitle}«","Open navigation":"Odpri krmarjenje","Password is secure":"Geslo je varno","Pause slideshow":"Ustavi predstavitev","People & Body":"Ljudje in Telo","Pick a date":"Izbor datuma","Pick a date and a time":"Izbor datuma in časa","Pick a month":"Izbor meseca","Pick a time":"Izbor časa","Pick a week":"Izbor tedna","Pick a year":"Izbor leta","Pick an emoji":"Izbor izrazne ikone","Please select a time zone:":"Izbor časovnega pasu:",Previous:"Predhodni","Related resources":"Povezani viri",Search:"Iskanje","Search results":"Zadetki iskanja","Select a tag":"Izbor oznake",Settings:"Nastavitve","Settings navigation":"Krmarjenje nastavitev","Show password":"Pokaži geslo","Smileys & Emotion":"Izrazne ikone","Start slideshow":"Začni predstavitev",Submit:"Pošlji",Symbols:"Simboli","Travel & Places":"Potovanja in Kraji","Type to search time zone":"Vpišite niz za iskanje časovnega pasu","Unable to search the group":"Ni mogoče iskati po skupini","Undo changes":"Razveljavi spremembe","Write message, @ to mention someone, : for emoji autocompletion …":"Napišite sporočilo, za omembo pred ime postavite@, začnite z : za vstavljanje izraznih ikon …"}},{locale:"sr",translations:{"{tag} (invisible)":"{tag} (nevidljivo)","{tag} (restricted)":"{tag} (ograničeno)",Actions:"Radnje",Activities:"Aktivnosti","Animals & Nature":"Životinje i Priroda","Avatar of {displayName}":"Avatar za {displayName}","Avatar of {displayName}, {status}":"Avatar za {displayName}, {status}","Cancel changes":"Otkaži izmene","Change title":"Izmeni naziv",Choose:"Изаберите",Close:"Затвори","Close modal":"Zatvori modal","Close navigation":"Zatvori navigaciju","Close sidebar":"Zatvori bočnu traku","Confirm changes":"Potvrdite promene",Custom:"Po meri","Edit item":"Uredi stavku","External documentation for {title}":"Eksterna dokumentacija za {title}",Favorite:"Omiljeni",Flags:"Zastave","Food & Drink":"Hrana i Piće","Frequently used":"Često korišćeno",Global:"Globalno","Go back to the list":"Natrag na listu",items:"stavke","Message limit of {count} characters reached":"Dostignuto je ograničenje za poruke od {count} znakova","More {dashboardItemType} …":"Više  {dashboardItemType} …",Next:"Следеће","No emoji found":"Nije pronađen nijedan emodži","No results":"Нема резултата",Objects:"Objekti",Open:"Otvori","Open navigation":"Otvori navigaciju","Pause slideshow":"Паузирај слајд шоу","People & Body":"Ljudi i Telo","Pick an emoji":"Izaberi emodži","Please select a time zone:":"Molimo izaberite vremensku zonu:",Previous:"Претходно",Search:"Pretraži","Search results":"Rezultati pretrage","Select a tag":"Изаберите ознаку",Settings:"Поставке","Settings navigation":"Navigacija u podešavanjima","Smileys & Emotion":"Smajli i Emocije","Start slideshow":"Покрени слајд шоу",Submit:"Prihvati",Symbols:"Simboli","Travel & Places":"Putovanja i Mesta","Type to search time zone":"Ukucaj da pretražiš vremenske zone","Unable to search the group":"Nije moguće pretražiti grupu","Undo changes":"Poništi promene","Write message, @ to mention someone, : for emoji autocompletion …":"Napišite poruku, @ da pomenete nekoga, : za automatsko dovršavanje emodžija…"}},{locale:"sv",translations:{"{tag} (invisible)":"{tag} (osynlig)","{tag} (restricted)":"{tag} (begränsad)",Actions:"Åtgärder",Activities:"Aktiviteter","Animals & Nature":"Djur & Natur","Anything shared with the same group of people will show up here":"Något som delats med samma grupp av personer kommer att visas här","Avatar of {displayName}":"{displayName}s avatar","Avatar of {displayName}, {status}":"{displayName}s avatar, {status}","Cancel changes":"Avbryt ändringar","Change title":"Ändra titel",Choose:"Välj","Clear text":"Ta bort text",Close:"Stäng","Close modal":"Stäng modal","Close navigation":"Stäng navigering","Close sidebar":"Stäng sidopanel","Confirm changes":"Bekräfta ändringar",Custom:"Anpassad","Edit item":"Ändra","Error getting related resources":"Problem att hämta relaterade resurser","Error parsing svg":"Fel vid inläsning av svg","External documentation for {title}":"Extern dokumentation för {title}",Favorite:"Favorit",Flags:"Flaggor","Food & Drink":"Mat & Dryck","Frequently used":"Används ofta",Global:"Global","Go back to the list":"Gå tillbaka till listan","Hide password":"Göm lössenordet","Message limit of {count} characters reached":"Meddelandegräns {count} tecken används","More items …":"Fler objekt",Next:"Nästa","No emoji found":"Hittade inga emojis","No results":"Inga resultat",Objects:"Objekt",Open:"Öppna",'Open link to "{resourceTitle}"':'Öppna länk till "{resourceTitle}"',"Open navigation":"Öppna navigering","Password is secure":"Lössenordet är säkert","Pause slideshow":"Pausa bildspelet","People & Body":"Kropp & Själ","Pick an emoji":"Välj en emoji","Please select a time zone:":"Välj tidszon:",Previous:"Föregående","Related resources":"Relaterade resurser",Search:"Sök","Search results":"Sökresultat","Select a tag":"Välj en tag",Settings:"Inställningar","Settings navigation":"Inställningsmeny","Show password":"Visa lössenordet","Smileys & Emotion":"Selfies & Känslor","Start slideshow":"Starta bildspelet",Submit:"Skicka",Symbols:"Symboler","Travel & Places":"Resor & Sevärdigheter","Type to search time zone":"Skriv för att välja tidszon","Unable to search the group":"Kunde inte söka i gruppen","Undo changes":"Ångra ändringar",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv meddelande, använd "@" för att nämna någon, använd ":" för automatiska emojiförslag ...'}},{locale:"tr",translations:{"{tag} (invisible)":"{tag} (görünmez)","{tag} (restricted)":"{tag} (kısıtlı)",Actions:"İşlemler",Activities:"Etkinlikler","Animals & Nature":"Hayvanlar ve Doğa","Anything shared with the same group of people will show up here":"Aynı kişi grubu ile paylaşılan herşey burada görüntülenir","Avatar of {displayName}":"{displayName} avatarı","Avatar of {displayName}, {status}":"{displayName}, {status} avatarı","Cancel changes":"Değişiklikleri iptal et","Change title":"Başlığı değiştir",Choose:"Seçin","Clear text":"Metni temizle",Close:"Kapat","Close modal":"Üste açılan pencereyi kapat","Close navigation":"Gezinmeyi kapat","Close sidebar":"Yan çubuğu kapat","Confirm changes":"Değişiklikleri onayla",Custom:"Özel","Edit item":"Ögeyi düzenle","Error getting related resources":"İlgili kaynaklar alınırken sorun çıktı","Error parsing svg":"svg işlenirken sorun çıktı","External documentation for {title}":"{title} için dış belgeler",Favorite:"Sık kullanılanlara ekle",Flags:"Bayraklar","Food & Drink":"Yeme ve İçme","Frequently used":"Sık kullanılanlar",Global:"Evrensel","Go back to the list":"Listeye dön","Hide password":"Parolayı gizle","Message limit of {count} characters reached":"{count} karakter ileti sınırına ulaşıldı","More items …":"Diğer ögeler…",Next:"Sonraki","No emoji found":"Herhangi bir emoji bulunamadı","No results":"Herhangi bir sonuç bulunamadı",Objects:"Nesneler",Open:"Aç",'Open link to "{resourceTitle}"':'"{resourceTitle}" bağlantısını aç',"Open navigation":"Gezinmeyi aç","Password is secure":"Parola güvenli","Pause slideshow":"Slayt sunumunu duraklat","People & Body":"İnsanlar ve Beden","Pick an emoji":"Bir emoji seçin","Please select a time zone:":"Lütfen bir saat dilimi seçin:",Previous:"Önceki","Related resources":"İlgili kaynaklar",Search:"Arama","Search results":"Arama sonuçları","Select a tag":"Bir etiket seçin",Settings:"Ayarlar","Settings navigation":"Gezinme ayarları","Show password":"Parolayı görüntüle","Smileys & Emotion":"İfadeler ve Duygular","Start slideshow":"Slayt sunumunu başlat",Submit:"Gönder",Symbols:"Simgeler","Travel & Places":"Gezi ve Yerler","Type to search time zone":"Saat dilimi aramak için yazmaya başlayın","Unable to search the group":"Grupta arama yapılamadı","Undo changes":"Değişiklikleri geri al",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'İleti yazın, birini anmak için @, otomatik emoji tamamlamak için ":" kullanın…'}},{locale:"uk",translations:{"{tag} (invisible)":"{tag} (невидимий)","{tag} (restricted)":"{tag} (обмежений)",Actions:"Дії",Activities:"Діяльність","Animals & Nature":"Тварини та природа","Avatar of {displayName}":"Аватар {displayName}","Avatar of {displayName}, {status}":"Аватар {displayName}, {status}","Cancel changes":"Скасувати зміни","Change title":"Змінити назву",Choose:"ВиберітьВиберіть","Clear text":"Очистити текст",Close:"Закрити","Close modal":"Закрити модаль","Close navigation":"Закрити навігацію","Close sidebar":"Закрити бічну панель","Confirm changes":"Підтвердити зміни",Custom:"Власне","Edit item":"Редагувати елемент","External documentation for {title}":"Зовнішня документація для {title}",Favorite:"Улюблений",Flags:"Прапори","Food & Drink":"Їжа та напої","Frequently used":"Найчастіші",Global:"Глобальний","Go back to the list":"Повернутися до списку","Hide password":"Приховати пароль",items:"елементи","Message limit of {count} characters reached":"Вичерпано ліміт у {count} символів для повідомлення","More {dashboardItemType} …":"Більше {dashboardItemType}…",Next:"Вперед","No emoji found":"Емоційки відсутні","No results":"Відсутні результати",Objects:"Об'єкти",Open:"Відкрити","Open navigation":"Відкрити навігацію","Password is secure":"Пароль безпечний","Pause slideshow":"Пауза у показі слайдів","People & Body":"Люди та жести","Pick an emoji":"Виберіть емоційку","Please select a time zone:":"Виберіть часовий пояс:",Previous:"Назад",Search:"Пошук","Search results":"Результати пошуку","Select a tag":"Виберіть позначку",Settings:"Налаштування","Settings navigation":"Навігація у налаштуваннях","Show password":"Показати пароль","Smileys & Emotion":"Смайли та емоції","Start slideshow":"Почати показ слайдів",Submit:"Надіслати",Symbols:"Символи","Travel & Places":"Поїздки та місця","Type to search time zone":"Введіть для пошуку часовий пояс","Unable to search the group":"Неможливо шукати в групі","Undo changes":"Скасувати зміни","Write message, @ to mention someone, : for emoji autocompletion …":"Напишіть повідомлення, @, щоб згадати когось, : для автозаповнення емодзі…"}},{locale:"zh_CN",translations:{"{tag} (invisible)":"{tag} （不可见）","{tag} (restricted)":"{tag} （受限）",Actions:"行为",Activities:"活动","Animals & Nature":"动物 & 自然","Anything shared with the same group of people will show up here":"与同组用户分享的所有内容都会显示于此","Avatar of {displayName}":"{displayName}的头像","Avatar of {displayName}, {status}":"{displayName}的头像，{status}","Cancel changes":"取消更改","Change title":"更改标题",Choose:"选择","Clear text":"清除文本",Close:"关闭","Close modal":"关闭窗口","Close navigation":"关闭导航","Close sidebar":"关闭侧边栏","Confirm changes":"确认更改",Custom:"自定义","Edit item":"编辑项目","Error getting related resources":"获取相关资源时出错","Error parsing svg":"解析 svg 时出错","External documentation for {title}":"{title}的外部文档",Favorite:"喜爱",Flags:"旗帜","Food & Drink":"食物 & 饮品","Frequently used":"经常使用",Global:"全局","Go back to the list":"返回至列表","Hide password":"隐藏密码","Message limit of {count} characters reached":"已达到 {count} 个字符的消息限制","More items …":"更多项目…",Next:"下一个","No emoji found":"表情未找到","No results":"无结果",Objects:"物体",Open:"打开",'Open link to "{resourceTitle}"':'打开"{resourceTitle}"的连接',"Open navigation":"开启导航","Password is secure":"密码安全","Pause slideshow":"暂停幻灯片","People & Body":"人 & 身体","Pick an emoji":"选择一个表情","Please select a time zone:":"请选择一个时区：",Previous:"上一个","Related resources":"相关资源",Search:"搜索","Search results":"搜索结果","Select a tag":"选择一个标签",Settings:"设置","Settings navigation":"设置向导","Show password":"显示密码","Smileys & Emotion":"笑脸 & 情感","Start slideshow":"开始幻灯片",Submit:"提交",Symbols:"符号","Travel & Places":"旅游 & 地点","Type to search time zone":"打字以搜索时区","Unable to search the group":"无法搜索分组","Undo changes":"撤销更改",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'写信息，使用"@"来提及某人，使用":"进行表情符号自动完成 ...'}},{locale:"zh_HK",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)",Actions:"動作",Activities:"活動","Animals & Nature":"動物與自然","Anything shared with the same group of people will show up here":"與同一組人共享的任何內容都會顯示在此處","Avatar of {displayName}":"{displayName} 的頭像","Avatar of {displayName}, {status}":"{displayName} 的頭像，{status}","Cancel changes":"取消更改","Change title":"更改標題",Choose:"選擇","Clear text":"清除文本",Close:"關閉","Close modal":"關閉模態","Close navigation":"關閉導航","Close sidebar":"關閉側邊欄","Confirm changes":"確認更改",Custom:"自定義","Edit item":"編輯項目","Error getting related resources":"獲取相關資源出錯","Error parsing svg":"解析 svg 時出錯","External documentation for {title}":"{title} 的外部文檔",Favorite:"喜愛",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"經常使用",Global:"全球的","Go back to the list":"返回清單","Hide password":"隱藏密碼","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制","More items …":"更多項目 …",Next:"下一個","No emoji found":"未找到表情符號","No results":"無結果",Objects:"物件",Open:"打開",'Open link to "{resourceTitle}"':"打開指向 “{resourceTitle}” 的鏈結","Open navigation":"開啟導航","Password is secure":"密碼是安全的","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick an emoji":"選擇表情符號","Please select a time zone:":"請選擇時區：",Previous:"上一個","Related resources":"相關資源",Search:"搜尋","Search results":"搜尋結果","Select a tag":"選擇標籤",Settings:"設定","Settings navigation":"設定值導覽","Show password":"顯示密碼","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片",Submit:"提交",Symbols:"標誌","Travel & Places":"旅遊與景點","Type to search time zone":"鍵入以搜索時區","Unable to search the group":"無法搜尋群組","Undo changes":"取消更改",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'寫訊息，使用 "@" 來指代某人，使用 ":" 用於表情符號自動填充 ...'}},{locale:"zh_TW",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)",Actions:"動作",Activities:"活動","Animals & Nature":"動物與自然",Choose:"選擇",Close:"關閉",Custom:"自定義",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"最近使用","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制",Next:"下一個","No emoji found":"未找到表情符號","No results":"無結果",Objects:"物件","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick an emoji":"選擇表情符號",Previous:"上一個",Search:"搜尋","Search results":"搜尋結果","Select a tag":"選擇標籤",Settings:"設定","Settings navigation":"設定值導覽","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片",Symbols:"標誌","Travel & Places":"旅遊與景點","Unable to search the group":"無法搜尋群組","Write message, @ to mention someone …":"輸入訊息時可使用 @ 來標示某人..."}}].forEach((e=>{const t={};for(const a in e.translations)e.translations[a].pluralId?t[a]={msgid:a,msgid_plural:e.translations[a].pluralId,msgstr:e.translations[a].msgstr}:t[a]={msgid:a,msgstr:[e.translations[a]]};n.addTranslation(e.locale,{translations:{"":t}})}));const i=n.build(),r=(i.ngettext.bind(i),i.gettext.bind(i))},1205:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=e=>Math.random().toString(36).replace(/[^a-z]+/g,"").slice(0,e||5)},1206:(e,t,a)=>{"use strict";a.d(t,{L:()=>o});a(4505);const o=function(){return Object.assign(window,{_nc_focus_trap:window._nc_focus_trap||[]}),window._nc_focus_trap}},2463:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),n=a.n(o),i=a(3645),r=a.n(i)()(n());r.push([e.id,".emoji-mart,\n.emoji-mart * {\n  box-sizing: border-box;\n  line-height: 1.15;\n}\n\n.emoji-mart {\n  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;\n  font-size: 16px;\n  /* display: inline-block; */\n  display: flex;\n  flex-direction: column;\n  height: 420px;\n  color: #222427;\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  background: #fff;\n}\n\n.emoji-mart-emoji {\n  padding: 6px;\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  border: none;\n  background: none;\n  box-shadow: none;\n}\n\n.emoji-mart-emoji span {\n  display: inline-block;\n}\n\n.emoji-mart-preview-emoji .emoji-mart-emoji span {\n  width: 38px;\n  height: 38px;\n  font-size: 32px;\n}\n\n.emoji-type-native {\n  font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI',\n    'Apple Color Emoji', 'Twemoji Mozilla', 'Noto Color Emoji', 'EmojiOne Color',\n    'Android Emoji';\n  word-break: keep-all;\n}\n\n.emoji-type-image {\n  /* Emoji sheet has 56 columns, see also utils/emoji-data.js, SHEET_COLUMNS variable */\n  /* Here we use (56+1) * 100% to avoid visible edges of nearby icons when scaling for different\n   * screen sizes */\n  background-size: 6100%;\n}\n.emoji-type-image.emoji-set-apple {\n  background-image: url('https://unpkg.com/emoji-datasource-apple@15.0.1/img/apple/sheets-256/64.png');\n}\n.emoji-type-image.emoji-set-facebook {\n  background-image: url('https://unpkg.com/emoji-datasource-facebook@15.0.1/img/facebook/sheets-256/64.png');\n}\n.emoji-type-image.emoji-set-google {\n  background-image: url('https://unpkg.com/emoji-datasource-google@15.0.1/img/google/sheets-256/64.png');\n}\n.emoji-type-image.emoji-set-twitter {\n  background-image: url('https://unpkg.com/emoji-datasource-twitter@15.0.1/img/twitter/sheets-256/64.png');\n}\n\n.emoji-mart-bar {\n  border: 0 solid #d9d9d9;\n}\n.emoji-mart-bar:first-child {\n  border-bottom-width: 1px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.emoji-mart-bar:last-child {\n  border-top-width: 1px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.emoji-mart-scroll {\n  position: relative;\n  overflow-y: scroll;\n  flex: 1;\n  padding: 0 6px 6px 6px;\n  z-index: 0; /* Fix for rendering sticky positioned category labels on Chrome */\n  will-change: transform; /* avoids \"repaints on scroll\" in mobile Chrome */\n  -webkit-overflow-scrolling: touch;\n}\n\n.emoji-mart-anchors {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0 6px;\n  color: #858585;\n  line-height: 0;\n}\n\n.emoji-mart-anchor {\n  position: relative;\n  display: block;\n  flex: 1 1 auto;\n  text-align: center;\n  padding: 12px 4px;\n  overflow: hidden;\n  transition: color 0.1s ease-out;\n  border: none;\n  background: none;\n  box-shadow: none;\n}\n.emoji-mart-anchor:hover,\n.emoji-mart-anchor-selected {\n  color: #464646;\n}\n\n.emoji-mart-anchor-selected .emoji-mart-anchor-bar {\n  bottom: 0;\n}\n\n.emoji-mart-anchor-bar {\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #464646;\n}\n\n.emoji-mart-anchors i {\n  display: inline-block;\n  width: 100%;\n  max-width: 22px;\n}\n\n.emoji-mart-anchors svg {\n  fill: currentColor;\n  max-height: 18px;\n}\n\n.emoji-mart .scroller {\n  height: 250px;\n  position: relative;\n  flex: 1;\n  padding: 0 6px 6px 6px;\n  z-index: 0; /* Fix for rendering sticky positioned category labels on Chrome */\n  will-change: transform; /* avoids \"repaints on scroll\" in mobile Chrome */\n  -webkit-overflow-scrolling: touch;\n}\n\n.emoji-mart-search {\n  margin-top: 6px;\n  padding: 0 6px;\n}\n.emoji-mart-search input {\n  font-size: 16px;\n  display: block;\n  width: 100%;\n  padding: 0.2em 0.6em;\n  border-radius: 25px;\n  border: 1px solid #d9d9d9;\n  outline: 0;\n}\n.emoji-mart-search-results {\n  height: 250px;\n  overflow-y: scroll;\n}\n\n.emoji-mart-category {\n  position: relative;\n}\n\n.emoji-mart-category .emoji-mart-emoji span {\n  z-index: 1;\n  position: relative;\n  text-align: center;\n  cursor: default;\n}\n\n.emoji-mart-category .emoji-mart-emoji:hover:before,\n.emoji-mart-emoji-selected:before {\n  z-index: 0;\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #f4f4f4;\n  border-radius: 100%;\n  opacity: 0;\n}\n.emoji-mart-category .emoji-mart-emoji:hover:before,\n.emoji-mart-emoji-selected:before {\n  opacity: 1;\n}\n\n.emoji-mart-category-label {\n  position: sticky;\n  top: 0;\n}\n.emoji-mart-static .emoji-mart-category-label {\n  z-index: 2;\n  position: relative;\n  /* position: sticky; */\n  /* position: -webkit-sticky; */\n}\n\n.emoji-mart-category-label h3 {\n  display: block;\n  font-size: 16px;\n  width: 100%;\n  font-weight: 500;\n  padding: 5px 6px;\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.95);\n}\n\n.emoji-mart-emoji {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n}\n\n.emoji-mart-no-results {\n  font-size: 14px;\n  text-align: center;\n  padding-top: 70px;\n  color: #858585;\n}\n.emoji-mart-no-results .emoji-mart-category-label {\n  display: none;\n}\n.emoji-mart-no-results .emoji-mart-no-results-label {\n  margin-top: 0.2em;\n}\n.emoji-mart-no-results .emoji-mart-emoji:hover:before {\n  content: none;\n}\n\n.emoji-mart-preview {\n  position: relative;\n  height: 70px;\n}\n\n.emoji-mart-preview-emoji,\n.emoji-mart-preview-data,\n.emoji-mart-preview-skins {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.emoji-mart-preview-emoji {\n  left: 12px;\n}\n\n.emoji-mart-preview-data {\n  left: 68px;\n  right: 12px;\n  word-break: break-all;\n}\n\n.emoji-mart-preview-skins {\n  right: 30px;\n  text-align: right;\n}\n\n.emoji-mart-preview-name {\n  font-size: 14px;\n}\n\n.emoji-mart-preview-shortname {\n  font-size: 12px;\n  color: #888;\n}\n.emoji-mart-preview-shortname + .emoji-mart-preview-shortname,\n.emoji-mart-preview-shortname + .emoji-mart-preview-emoticon,\n.emoji-mart-preview-emoticon + .emoji-mart-preview-emoticon {\n  margin-left: 0.5em;\n}\n\n.emoji-mart-preview-emoticon {\n  font-size: 11px;\n  color: #bbb;\n}\n\n.emoji-mart-title span {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.emoji-mart-title .emoji-mart-emoji {\n  padding: 0;\n}\n\n.emoji-mart-title-label {\n  color: #999a9c;\n  font-size: 21px;\n  font-weight: 300;\n}\n\n.emoji-mart-skin-swatches {\n  font-size: 0;\n  padding: 2px 0;\n  border: 1px solid #d9d9d9;\n  border-radius: 12px;\n  background-color: #fff;\n}\n\n.emoji-mart-skin-swatches-opened .emoji-mart-skin-swatch {\n  width: 16px;\n  padding: 0 2px;\n}\n\n.emoji-mart-skin-swatches-opened .emoji-mart-skin-swatch-selected:after {\n  opacity: 0.75;\n}\n\n.emoji-mart-skin-swatch {\n  display: inline-block;\n  width: 0;\n  vertical-align: middle;\n  transition-property: width, padding;\n  transition-duration: 0.125s;\n  transition-timing-function: ease-out;\n}\n\n.emoji-mart-skin-swatch:nth-child(1) {\n  transition-delay: 0s;\n}\n.emoji-mart-skin-swatch:nth-child(2) {\n  transition-delay: 0.03s;\n}\n.emoji-mart-skin-swatch:nth-child(3) {\n  transition-delay: 0.06s;\n}\n.emoji-mart-skin-swatch:nth-child(4) {\n  transition-delay: 0.09s;\n}\n.emoji-mart-skin-swatch:nth-child(5) {\n  transition-delay: 0.12s;\n}\n.emoji-mart-skin-swatch:nth-child(6) {\n  transition-delay: 0.15s;\n}\n\n.emoji-mart-skin-swatch-selected {\n  position: relative;\n  width: 16px;\n  padding: 0 2px;\n}\n.emoji-mart-skin-swatch-selected:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 4px;\n  height: 4px;\n  margin: -2px 0 0 -2px;\n  background-color: #fff;\n  border-radius: 100%;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.2s ease-out;\n}\n\n.emoji-mart-skin {\n  display: inline-block;\n  width: 100%;\n  padding-top: 100%;\n  max-width: 12px;\n  border-radius: 100%;\n}\n\n.emoji-mart-skin-tone-1 {\n  background-color: #ffc93a;\n}\n.emoji-mart-skin-tone-2 {\n  background-color: #fadcbc;\n}\n.emoji-mart-skin-tone-3 {\n  background-color: #e0bb95;\n}\n.emoji-mart-skin-tone-4 {\n  background-color: #bf8f68;\n}\n.emoji-mart-skin-tone-5 {\n  background-color: #9b643d;\n}\n.emoji-mart-skin-tone-6 {\n  background-color: #594539;\n}\n\n/* vue-virtual-scroller/dist/vue-virtual-scroller.css */\n.emoji-mart .vue-recycle-scroller {\n  position: relative;\n}\n.emoji-mart .vue-recycle-scroller.direction-vertical:not(.page-mode) {\n  overflow-y: auto;\n}\n.emoji-mart .vue-recycle-scroller.direction-horizontal:not(.page-mode) {\n  overflow-x: auto;\n}\n.emoji-mart .vue-recycle-scroller.direction-horizontal {\n  display: flex;\n}\n.emoji-mart .vue-recycle-scroller__slot {\n  flex: auto 0 0;\n}\n.emoji-mart .vue-recycle-scroller__item-wrapper {\n  flex: 1;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n}\n.emoji-mart .vue-recycle-scroller.ready .vue-recycle-scroller__item-view {\n  position: absolute;\n  top: 0;\n  left: 0;\n  will-change: transform;\n}\n.emoji-mart\n  .vue-recycle-scroller.direction-vertical\n  .vue-recycle-scroller__item-wrapper {\n  width: 100%;\n}\n.emoji-mart\n  .vue-recycle-scroller.direction-horizontal\n  .vue-recycle-scroller__item-wrapper {\n  height: 100%;\n}\n.emoji-mart\n  .vue-recycle-scroller.ready.direction-vertical\n  .vue-recycle-scroller__item-view {\n  width: 100%;\n}\n.emoji-mart\n  .vue-recycle-scroller.ready.direction-horizontal\n  .vue-recycle-scroller__item-view {\n  height: 100%;\n}\n.emoji-mart .resize-observer[data-v-b329ee4c] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  pointer-events: none;\n  display: block;\n  overflow: hidden;\n  opacity: 0;\n}\n.emoji-mart .resize-observer[data-v-b329ee4c] object {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n.emoji-mart-search .hidden {\n  display: none;\n  visibility: hidden;\n}\n","",{version:3,sources:["webpack://./node_modules/emoji-mart-vue-fast/css/emoji-mart.css"],names:[],mappings:"AAAA;;EAEE,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,4EAA4E;EAC5E,eAAe;EACf,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE;;mBAEiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,qFAAqF;EACrF;mBACiB;EACjB,sBAAsB;AACxB;AACA;EACE,oGAAoG;AACtG;AACA;EACE,0GAA0G;AAC5G;AACA;EACE,sGAAsG;AACxG;AACA;EACE,wGAAwG;AAC1G;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,wBAAwB;EACxB,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;EACE,qBAAqB;EACrB,8BAA8B;EAC9B,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,OAAO;EACP,sBAAsB;EACtB,UAAU,EAAE,kEAAkE;EAC9E,sBAAsB,EAAE,iDAAiD;EACzE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,cAAc;EACd,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,+BAA+B;EAC/B,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;AAClB;AACA;;EAEE,cAAc;AAChB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,OAAO;EACP,WAAW;EACX,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,OAAO;EACP,sBAAsB;EACtB,UAAU,EAAE,kEAAkE;EAC9E,sBAAsB,EAAE,iDAAiD;EACzE,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;AACA;EACE,eAAe;EACf,cAAc;EACd,WAAW;EACX,oBAAoB;EACpB,mBAAmB;EACnB,yBAAyB;EACzB,UAAU;AACZ;AACA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,UAAU;AACZ;AACA;;EAEE,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,MAAM;AACR;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,sBAAsB;EACtB,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;;;EAGE,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;AAC7B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;AACA;;;EAGE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,QAAQ;EACR,sBAAsB;EACtB,mCAAmC;EACnC,2BAA2B;EAC3B,oCAAoC;AACtC;;AAEA;EACE,oBAAoB;AACtB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,cAAc;AAChB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,qBAAqB;EACrB,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;;AAEA,uDAAuD;AACvD;EACE,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,OAAO;EACP,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,sBAAsB;AACxB;AACA;;;EAGE,WAAW;AACb;AACA;;;EAGE,YAAY;AACd;AACA;;;EAGE,WAAW;AACb;AACA;;;EAGE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,6BAA6B;EAC7B,oBAAoB;EACpB,cAAc;EACd,gBAAgB;EAChB,UAAU;AACZ;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,oBAAoB;EACpB,WAAW;AACb;AACA;EACE,aAAa;EACb,kBAAkB;AACpB",sourcesContent:[".emoji-mart,\n.emoji-mart * {\n  box-sizing: border-box;\n  line-height: 1.15;\n}\n\n.emoji-mart {\n  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;\n  font-size: 16px;\n  /* display: inline-block; */\n  display: flex;\n  flex-direction: column;\n  height: 420px;\n  color: #222427;\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  background: #fff;\n}\n\n.emoji-mart-emoji {\n  padding: 6px;\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  border: none;\n  background: none;\n  box-shadow: none;\n}\n\n.emoji-mart-emoji span {\n  display: inline-block;\n}\n\n.emoji-mart-preview-emoji .emoji-mart-emoji span {\n  width: 38px;\n  height: 38px;\n  font-size: 32px;\n}\n\n.emoji-type-native {\n  font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI',\n    'Apple Color Emoji', 'Twemoji Mozilla', 'Noto Color Emoji', 'EmojiOne Color',\n    'Android Emoji';\n  word-break: keep-all;\n}\n\n.emoji-type-image {\n  /* Emoji sheet has 56 columns, see also utils/emoji-data.js, SHEET_COLUMNS variable */\n  /* Here we use (56+1) * 100% to avoid visible edges of nearby icons when scaling for different\n   * screen sizes */\n  background-size: 6100%;\n}\n.emoji-type-image.emoji-set-apple {\n  background-image: url('https://unpkg.com/emoji-datasource-apple@15.0.1/img/apple/sheets-256/64.png');\n}\n.emoji-type-image.emoji-set-facebook {\n  background-image: url('https://unpkg.com/emoji-datasource-facebook@15.0.1/img/facebook/sheets-256/64.png');\n}\n.emoji-type-image.emoji-set-google {\n  background-image: url('https://unpkg.com/emoji-datasource-google@15.0.1/img/google/sheets-256/64.png');\n}\n.emoji-type-image.emoji-set-twitter {\n  background-image: url('https://unpkg.com/emoji-datasource-twitter@15.0.1/img/twitter/sheets-256/64.png');\n}\n\n.emoji-mart-bar {\n  border: 0 solid #d9d9d9;\n}\n.emoji-mart-bar:first-child {\n  border-bottom-width: 1px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.emoji-mart-bar:last-child {\n  border-top-width: 1px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.emoji-mart-scroll {\n  position: relative;\n  overflow-y: scroll;\n  flex: 1;\n  padding: 0 6px 6px 6px;\n  z-index: 0; /* Fix for rendering sticky positioned category labels on Chrome */\n  will-change: transform; /* avoids \"repaints on scroll\" in mobile Chrome */\n  -webkit-overflow-scrolling: touch;\n}\n\n.emoji-mart-anchors {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0 6px;\n  color: #858585;\n  line-height: 0;\n}\n\n.emoji-mart-anchor {\n  position: relative;\n  display: block;\n  flex: 1 1 auto;\n  text-align: center;\n  padding: 12px 4px;\n  overflow: hidden;\n  transition: color 0.1s ease-out;\n  border: none;\n  background: none;\n  box-shadow: none;\n}\n.emoji-mart-anchor:hover,\n.emoji-mart-anchor-selected {\n  color: #464646;\n}\n\n.emoji-mart-anchor-selected .emoji-mart-anchor-bar {\n  bottom: 0;\n}\n\n.emoji-mart-anchor-bar {\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #464646;\n}\n\n.emoji-mart-anchors i {\n  display: inline-block;\n  width: 100%;\n  max-width: 22px;\n}\n\n.emoji-mart-anchors svg {\n  fill: currentColor;\n  max-height: 18px;\n}\n\n.emoji-mart .scroller {\n  height: 250px;\n  position: relative;\n  flex: 1;\n  padding: 0 6px 6px 6px;\n  z-index: 0; /* Fix for rendering sticky positioned category labels on Chrome */\n  will-change: transform; /* avoids \"repaints on scroll\" in mobile Chrome */\n  -webkit-overflow-scrolling: touch;\n}\n\n.emoji-mart-search {\n  margin-top: 6px;\n  padding: 0 6px;\n}\n.emoji-mart-search input {\n  font-size: 16px;\n  display: block;\n  width: 100%;\n  padding: 0.2em 0.6em;\n  border-radius: 25px;\n  border: 1px solid #d9d9d9;\n  outline: 0;\n}\n.emoji-mart-search-results {\n  height: 250px;\n  overflow-y: scroll;\n}\n\n.emoji-mart-category {\n  position: relative;\n}\n\n.emoji-mart-category .emoji-mart-emoji span {\n  z-index: 1;\n  position: relative;\n  text-align: center;\n  cursor: default;\n}\n\n.emoji-mart-category .emoji-mart-emoji:hover:before,\n.emoji-mart-emoji-selected:before {\n  z-index: 0;\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #f4f4f4;\n  border-radius: 100%;\n  opacity: 0;\n}\n.emoji-mart-category .emoji-mart-emoji:hover:before,\n.emoji-mart-emoji-selected:before {\n  opacity: 1;\n}\n\n.emoji-mart-category-label {\n  position: sticky;\n  top: 0;\n}\n.emoji-mart-static .emoji-mart-category-label {\n  z-index: 2;\n  position: relative;\n  /* position: sticky; */\n  /* position: -webkit-sticky; */\n}\n\n.emoji-mart-category-label h3 {\n  display: block;\n  font-size: 16px;\n  width: 100%;\n  font-weight: 500;\n  padding: 5px 6px;\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.95);\n}\n\n.emoji-mart-emoji {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n}\n\n.emoji-mart-no-results {\n  font-size: 14px;\n  text-align: center;\n  padding-top: 70px;\n  color: #858585;\n}\n.emoji-mart-no-results .emoji-mart-category-label {\n  display: none;\n}\n.emoji-mart-no-results .emoji-mart-no-results-label {\n  margin-top: 0.2em;\n}\n.emoji-mart-no-results .emoji-mart-emoji:hover:before {\n  content: none;\n}\n\n.emoji-mart-preview {\n  position: relative;\n  height: 70px;\n}\n\n.emoji-mart-preview-emoji,\n.emoji-mart-preview-data,\n.emoji-mart-preview-skins {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.emoji-mart-preview-emoji {\n  left: 12px;\n}\n\n.emoji-mart-preview-data {\n  left: 68px;\n  right: 12px;\n  word-break: break-all;\n}\n\n.emoji-mart-preview-skins {\n  right: 30px;\n  text-align: right;\n}\n\n.emoji-mart-preview-name {\n  font-size: 14px;\n}\n\n.emoji-mart-preview-shortname {\n  font-size: 12px;\n  color: #888;\n}\n.emoji-mart-preview-shortname + .emoji-mart-preview-shortname,\n.emoji-mart-preview-shortname + .emoji-mart-preview-emoticon,\n.emoji-mart-preview-emoticon + .emoji-mart-preview-emoticon {\n  margin-left: 0.5em;\n}\n\n.emoji-mart-preview-emoticon {\n  font-size: 11px;\n  color: #bbb;\n}\n\n.emoji-mart-title span {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.emoji-mart-title .emoji-mart-emoji {\n  padding: 0;\n}\n\n.emoji-mart-title-label {\n  color: #999a9c;\n  font-size: 21px;\n  font-weight: 300;\n}\n\n.emoji-mart-skin-swatches {\n  font-size: 0;\n  padding: 2px 0;\n  border: 1px solid #d9d9d9;\n  border-radius: 12px;\n  background-color: #fff;\n}\n\n.emoji-mart-skin-swatches-opened .emoji-mart-skin-swatch {\n  width: 16px;\n  padding: 0 2px;\n}\n\n.emoji-mart-skin-swatches-opened .emoji-mart-skin-swatch-selected:after {\n  opacity: 0.75;\n}\n\n.emoji-mart-skin-swatch {\n  display: inline-block;\n  width: 0;\n  vertical-align: middle;\n  transition-property: width, padding;\n  transition-duration: 0.125s;\n  transition-timing-function: ease-out;\n}\n\n.emoji-mart-skin-swatch:nth-child(1) {\n  transition-delay: 0s;\n}\n.emoji-mart-skin-swatch:nth-child(2) {\n  transition-delay: 0.03s;\n}\n.emoji-mart-skin-swatch:nth-child(3) {\n  transition-delay: 0.06s;\n}\n.emoji-mart-skin-swatch:nth-child(4) {\n  transition-delay: 0.09s;\n}\n.emoji-mart-skin-swatch:nth-child(5) {\n  transition-delay: 0.12s;\n}\n.emoji-mart-skin-swatch:nth-child(6) {\n  transition-delay: 0.15s;\n}\n\n.emoji-mart-skin-swatch-selected {\n  position: relative;\n  width: 16px;\n  padding: 0 2px;\n}\n.emoji-mart-skin-swatch-selected:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 4px;\n  height: 4px;\n  margin: -2px 0 0 -2px;\n  background-color: #fff;\n  border-radius: 100%;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.2s ease-out;\n}\n\n.emoji-mart-skin {\n  display: inline-block;\n  width: 100%;\n  padding-top: 100%;\n  max-width: 12px;\n  border-radius: 100%;\n}\n\n.emoji-mart-skin-tone-1 {\n  background-color: #ffc93a;\n}\n.emoji-mart-skin-tone-2 {\n  background-color: #fadcbc;\n}\n.emoji-mart-skin-tone-3 {\n  background-color: #e0bb95;\n}\n.emoji-mart-skin-tone-4 {\n  background-color: #bf8f68;\n}\n.emoji-mart-skin-tone-5 {\n  background-color: #9b643d;\n}\n.emoji-mart-skin-tone-6 {\n  background-color: #594539;\n}\n\n/* vue-virtual-scroller/dist/vue-virtual-scroller.css */\n.emoji-mart .vue-recycle-scroller {\n  position: relative;\n}\n.emoji-mart .vue-recycle-scroller.direction-vertical:not(.page-mode) {\n  overflow-y: auto;\n}\n.emoji-mart .vue-recycle-scroller.direction-horizontal:not(.page-mode) {\n  overflow-x: auto;\n}\n.emoji-mart .vue-recycle-scroller.direction-horizontal {\n  display: flex;\n}\n.emoji-mart .vue-recycle-scroller__slot {\n  flex: auto 0 0;\n}\n.emoji-mart .vue-recycle-scroller__item-wrapper {\n  flex: 1;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n}\n.emoji-mart .vue-recycle-scroller.ready .vue-recycle-scroller__item-view {\n  position: absolute;\n  top: 0;\n  left: 0;\n  will-change: transform;\n}\n.emoji-mart\n  .vue-recycle-scroller.direction-vertical\n  .vue-recycle-scroller__item-wrapper {\n  width: 100%;\n}\n.emoji-mart\n  .vue-recycle-scroller.direction-horizontal\n  .vue-recycle-scroller__item-wrapper {\n  height: 100%;\n}\n.emoji-mart\n  .vue-recycle-scroller.ready.direction-vertical\n  .vue-recycle-scroller__item-view {\n  width: 100%;\n}\n.emoji-mart\n  .vue-recycle-scroller.ready.direction-horizontal\n  .vue-recycle-scroller__item-view {\n  height: 100%;\n}\n.emoji-mart .resize-observer[data-v-b329ee4c] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  pointer-events: none;\n  display: block;\n  overflow: hidden;\n  opacity: 0;\n}\n.emoji-mart .resize-observer[data-v-b329ee4c] object {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n.emoji-mart-search .hidden {\n  display: none;\n  visibility: hidden;\n}\n"],sourceRoot:""}]);const s=r},7196:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),n=a.n(o),i=a(3645),r=a.n(i)()(n());r.push([e.id,".material-design-icon[data-v-4d05be2c]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.button-vue[data-v-4d05be2c]{position:relative;width:fit-content;overflow:hidden;border:0;padding:0;font-size:var(--default-font-size);font-weight:bold;min-height:44px;min-width:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:22px;transition-property:color,border-color,background-color;transition-duration:.1s;transition-timing-function:linear;color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.button-vue *[data-v-4d05be2c],.button-vue span[data-v-4d05be2c]{cursor:pointer}.button-vue[data-v-4d05be2c]:focus{outline:none}.button-vue[data-v-4d05be2c]:disabled{cursor:default;opacity:.5;filter:saturate(0.7)}.button-vue:disabled *[data-v-4d05be2c]{cursor:default}.button-vue[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-primary-element-light-hover)}.button-vue[data-v-4d05be2c]:active{background-color:var(--color-primary-element-light)}.button-vue__wrapper[data-v-4d05be2c]{display:inline-flex;align-items:center;justify-content:center;width:100%}.button-vue__icon[data-v-4d05be2c]{height:44px;width:44px;min-height:44px;min-width:44px;display:flex;justify-content:center;align-items:center}.button-vue__text[data-v-4d05be2c]{font-weight:bold;margin-bottom:1px;padding:2px 0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.button-vue--icon-only[data-v-4d05be2c]{width:44px !important}.button-vue--text-only[data-v-4d05be2c]{padding:0 12px}.button-vue--text-only .button-vue__text[data-v-4d05be2c]{margin-left:4px;margin-right:4px}.button-vue--icon-and-text[data-v-4d05be2c]{padding:0 16px 0 4px}.button-vue--wide[data-v-4d05be2c]{width:100%}.button-vue[data-v-4d05be2c]:focus-visible{outline:2px solid var(--color-main-text) !important}.button-vue:focus-visible.button-vue--vue-tertiary-on-primary[data-v-4d05be2c]{outline:2px solid var(--color-primary-element-text);border-radius:var(--border-radius);background-color:rgba(0,0,0,0)}.button-vue--vue-primary[data-v-4d05be2c]{background-color:var(--color-primary-element);color:var(--color-primary-element-text)}.button-vue--vue-primary[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-primary-element-hover)}.button-vue--vue-primary[data-v-4d05be2c]:active{background-color:var(--color-primary-element)}.button-vue--vue-secondary[data-v-4d05be2c]{color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.button-vue--vue-secondary[data-v-4d05be2c]:hover:not(:disabled){color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light-hover)}.button-vue--vue-tertiary[data-v-4d05be2c]{color:var(--color-main-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color);background-color:var(--color-background-hover)}.button-vue--vue-tertiary-no-background[data-v-4d05be2c]{color:var(--color-main-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-no-background[data-v-4d05be2c]:hover:not(:disabled){background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-on-primary[data-v-4d05be2c]{color:var(--color-primary-element-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-on-primary[data-v-4d05be2c]:hover:not(:disabled){background-color:rgba(0,0,0,0)}.button-vue--vue-success[data-v-4d05be2c]{background-color:var(--color-success);color:#fff}.button-vue--vue-success[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-success-hover)}.button-vue--vue-success[data-v-4d05be2c]:active{background-color:var(--color-success)}.button-vue--vue-warning[data-v-4d05be2c]{background-color:var(--color-warning);color:#fff}.button-vue--vue-warning[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-warning-hover)}.button-vue--vue-warning[data-v-4d05be2c]:active{background-color:var(--color-warning)}.button-vue--vue-error[data-v-4d05be2c]{background-color:var(--color-error);color:#fff}.button-vue--vue-error[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-error-hover)}.button-vue--vue-error[data-v-4d05be2c]:active{background-color:var(--color-error)}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcButton/NcButton.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,6BACC,iBAAA,CACA,iBAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CACA,kCAAA,CACA,gBAAA,CACA,eCcgB,CDbhB,cCagB,CDZhB,YAAA,CACA,kBAAA,CACA,sBAAA,CAGA,cAAA,CAKA,kBAAA,CACA,uDAAA,CACA,uBAAA,CACA,iCAAA,CAkBA,6CAAA,CACA,mDAAA,CA1BA,iEAEC,cAAA,CAQD,mCACC,YAAA,CAGD,sCACC,cAAA,CAIA,UCIiB,CDFjB,oBAAA,CALA,wCACC,cAAA,CAUF,kDACC,yDAAA,CAKD,oCACC,mDAAA,CAGD,sCACC,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CAGD,mCACC,WCvCe,CDwCf,UCxCe,CDyCf,eCzCe,CD0Cf,cC1Ce,CD2Cf,YAAA,CACA,sBAAA,CACA,kBAAA,CAGD,mCACC,gBAAA,CACA,iBAAA,CACA,aAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CAID,wCACC,qBAAA,CAID,wCACC,cAAA,CACA,0DACC,eAAA,CACA,gBAAA,CAKF,4CACC,oBAAA,CAID,mCACC,UAAA,CAGD,2CACC,mDAAA,CACA,+EACC,mDAAA,CACA,kCAAA,CACA,8BAAA,CAOF,0CACC,6CAAA,CACA,uCAAA,CACA,+DACC,mDAAA,CAID,iDACC,6CAAA,CAKF,4CACC,6CAAA,CACA,mDAAA,CACA,iEACC,6CAAA,CACA,yDAAA,CAKF,2CACC,4BAAA,CACA,8BAAA,CACA,gEACC,6BAAA,CACA,8CAAA,CAKF,yDACC,4BAAA,CACA,8BAAA,CACA,8EACC,8BAAA,CAKF,sDACC,uCAAA,CACA,8BAAA,CAEA,2EACC,8BAAA,CAKF,0CACC,qCAAA,CACA,UAAA,CACA,+DACC,2CAAA,CAID,iDACC,qCAAA,CAKF,0CACC,qCAAA,CACA,UAAA,CACA,+DACC,2CAAA,CAID,iDACC,qCAAA,CAKF,wCACC,mCAAA,CACA,UAAA,CACA,6DACC,yCAAA,CAID,+CACC,mCAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n\n\n.button-vue {\n\tposition: relative;\n\twidth: fit-content;\n\toverflow: hidden;\n\tborder: 0;\n\tpadding: 0;\n\tfont-size: var(--default-font-size);\n\tfont-weight: bold;\n\tmin-height: $clickable-area;\n\tmin-width: $clickable-area;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\t// Cursor pointer on element and all children\n\tcursor: pointer;\n\t& *,\n\tspan {\n\t\tcursor: pointer;\n\t}\n\tborder-radius: math.div($clickable-area, 2);\n\ttransition-property: color, border-color, background-color;\n\ttransition-duration: 0.1s;\n\ttransition-timing-function: linear;\n\n\t// No outline feedback for focus. Handled with a toggled class in js (see data)\n\t&:focus {\n\t\toutline: none;\n\t}\n\n\t&:disabled {\n\t\tcursor: default;\n\t\t& * {\n\t\t\tcursor: default;\n\t\t}\n\t\topacity: $opacity_disabled;\n\t\t// Gives a wash out effect\n\t\tfilter: saturate($opacity_normal);\n\t}\n\n\t// Default button type\n\tcolor: var(--color-primary-element-light-text);\n\tbackground-color: var(--color-primary-element-light);\n\t&:hover:not(:disabled) {\n\t\tbackground-color: var(--color-primary-element-light-hover);\n\t}\n\n\t// Back to the default color for this button when active\n\t// TODO: add ripple effect\n\t&:active {\n\t\tbackground-color: var(--color-primary-element-light);\n\t}\n\n\t&__wrapper {\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t}\n\n\t&__icon {\n\t\theight: $clickable-area;\n\t\twidth: $clickable-area;\n\t\tmin-height: $clickable-area;\n\t\tmin-width: $clickable-area;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n\n\t&__text {\n\t\tfont-weight: bold;\n\t\tmargin-bottom: 1px;\n\t\tpadding: 2px 0;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t}\n\n\t// Icon-only button\n\t&--icon-only {\n\t\twidth: $clickable-area !important;\n\t}\n\n\t// Text-only button\n\t&--text-only {\n\t\tpadding: 0 12px;\n\t\t& .button-vue__text {\n\t\t\tmargin-left: 4px;\n\t\t\tmargin-right: 4px;\n\t\t}\n\t}\n\n\t// Icon and text button\n\t&--icon-and-text {\n\t\tpadding: 0 16px 0 4px;\n\t}\n\n\t// Wide button spans the whole width of the container\n\t&--wide {\n\t\twidth: 100%;\n\t}\n\n\t&:focus-visible {\n\t\toutline: 2px solid var(--color-main-text) !important;\n\t\t&.button-vue--vue-tertiary-on-primary {\n\t\t\toutline: 2px solid var(--color-primary-element-text);\n\t\t\tborder-radius: var(--border-radius);\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Button types\n\n\t// Primary\n\t&--vue-primary {\n\t\tbackground-color: var(--color-primary-element);\n\t\tcolor: var(--color-primary-element-text);\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-primary-element-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-primary-element);\n\t\t}\n\t}\n\n\t// Secondary\n\t&--vue-secondary {\n\t\tcolor: var(--color-primary-element-light-text);\n\t\tbackground-color: var(--color-primary-element-light);\n\t\t&:hover:not(:disabled) {\n\t\t\tcolor: var(--color-primary-element-light-text);\n\t\t\tbackground-color: var(--color-primary-element-light-hover);\n\t\t}\n\t}\n\n\t// Tertiary\n\t&--vue-tertiary {\n\t\tcolor: var(--color-main-text);\n\t\tbackground-color: transparent;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color);\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t}\n\t}\n\n\t// Tertiary, no background\n\t&--vue-tertiary-no-background {\n\t\tcolor: var(--color-main-text);\n\t\tbackground-color: transparent;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Tertiary on primary color (like the header)\n\t&--vue-tertiary-on-primary {\n\t\tcolor: var(--color-primary-element-text);\n\t\tbackground-color: transparent;\n\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Success\n\t&--vue-success {\n\t\tbackground-color: var(--color-success);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-success-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// : add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-success);\n\t\t}\n\t}\n\n\t// Warning\n\t&--vue-warning {\n\t\tbackground-color: var(--color-warning);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-warning-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-warning);\n\t\t}\n\t}\n\n\t// Error\n\t&--vue-error {\n\t\tbackground-color: var(--color-error);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-error-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-error);\n\t\t}\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const s=r},5764:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var o=a(7537),n=a.n(o),i=a(3645),r=a.n(i),s=a(2463),l=r()(n());l.i(s.Z),l.push([e.id,".material-design-icon{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.emoji-mart{background-color:var(--color-main-background) !important;border:0;color:var(--color-main-text) !important}.emoji-mart button{margin:0;padding:0;border:none;background:rgba(0,0,0,0);font-size:inherit;height:36px;width:auto}.emoji-mart button *{cursor:pointer !important}.emoji-mart .emoji-mart-bar,.emoji-mart .emoji-mart-anchors,.emoji-mart .emoji-mart-search,.emoji-mart .emoji-mart-search input,.emoji-mart .emoji-mart-category,.emoji-mart .emoji-mart-category-label,.emoji-mart .emoji-mart-category-label span,.emoji-mart .emoji-mart-skin-swatches{background-color:rgba(0,0,0,0) !important;border-color:var(--color-border) !important;color:inherit !important}.emoji-mart .emoji-mart-search input:focus-visible{box-shadow:inset 0 0 0 2px var(--color-primary-element);outline:none}.emoji-mart .emoji-mart-bar:first-child{border-top-left-radius:var(--border-radius) !important;border-top-right-radius:var(--border-radius) !important}.emoji-mart .emoji-mart-anchors button{border-radius:0;padding:12px 4px;height:auto}.emoji-mart .emoji-mart-anchors button:focus-visible{outline:2px solid var(--color-primary-element)}.emoji-mart .emoji-mart-category{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:start}.emoji-mart .emoji-mart-category .emoji-mart-category-label,.emoji-mart .emoji-mart-category .emoji-mart-emoji{user-select:none;flex-grow:0;flex-shrink:0}.emoji-mart .emoji-mart-category .emoji-mart-category-label{flex-basis:100%;margin:0}.emoji-mart .emoji-mart-category .emoji-mart-emoji{flex-basis:12.5%;text-align:center}.emoji-mart .emoji-mart-category .emoji-mart-emoji:hover::before,.emoji-mart .emoji-mart-category .emoji-mart-emoji.emoji-mart-emoji-selected::before{background-color:var(--color-background-hover) !important;outline:2px solid var(--color-primary-element)}.emoji-mart .emoji-mart-category button:focus-visible{background-color:var(--color-background-hover);border:2px solid var(--color-primary-element) !important;border-radius:50%}.search{padding:0 8px 4px 8px}.search .input-field__label{padding:5px 4px;font-weight:500}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcEmojiPicker/NcEmojiPicker.vue"],names:[],mappings:"AAGA,sBACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCJD,YACC,wDAAA,CACA,QAAA,CACA,uCAAA,CAGA,mBACC,QAAA,CACA,SAAA,CACA,WAAA,CACA,wBAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CAEA,qBACC,yBAAA,CAIF,0RAQC,yCAAA,CACA,2CAAA,CACA,wBAAA,CAGD,mDACC,uDAAA,CACA,YAAA,CAIA,wCACC,sDAAA,CACA,uDAAA,CAKD,uCACC,eAAA,CACA,gBAAA,CACA,WAAA,CACA,qDAEC,8CAAA,CAKH,iCACC,YAAA,CACA,kBAAA,CACA,cAAA,CACA,qBAAA,CAEA,+GAEC,gBAAA,CACA,WAAA,CACA,aAAA,CAGD,4DACC,eAAA,CACA,QAAA,CAGD,mDAEC,gBAAA,CACA,iBAAA,CAEA,sJAEC,yDAAA,CACA,8CAAA,CAKD,sDACC,8CAAA,CACA,wDAAA,CACA,iBAAA,CAOJ,QACC,qBAAA,CACA,4BAEC,eAAA,CACA,eAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n\n@import '~emoji-mart-vue-fast/css/emoji-mart.css';\n\n.emoji-mart {\n\tbackground-color: var(--color-main-background) !important;\n\tborder: 0;\n\tcolor: var(--color-main-text) !important;\n\n\t// default style reset\n\tbutton {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\tfont-size: inherit;\n\t\theight: 36px;\n\t\twidth: auto;\n\n\t\t* {\n\t\t\tcursor: pointer !important;\n\t\t}\n\t}\n\n\t.emoji-mart-bar,\n\t.emoji-mart-anchors,\n\t.emoji-mart-search,\n\t.emoji-mart-search input,\n\t.emoji-mart-category,\n\t.emoji-mart-category-label,\n\t.emoji-mart-category-label span,\n\t.emoji-mart-skin-swatches {\n\t\tbackground-color: transparent !important;\n\t\tborder-color: var(--color-border) !important;\n\t\tcolor: inherit !important;\n\t}\n\n\t.emoji-mart-search input:focus-visible {\n\t\tbox-shadow: inset 0 0 0 2px var(--color-primary-element);\n\t\toutline: none;\n\t}\n\n\t.emoji-mart-bar {\n\t\t&:first-child {\n\t\t\tborder-top-left-radius: var(--border-radius) !important;\n\t\t\tborder-top-right-radius: var(--border-radius) !important;\n\t\t}\n\t}\n\n\t.emoji-mart-anchors {\n\t\tbutton {\n\t\t\tborder-radius: 0;\n\t\t\tpadding: 12px 4px;\n\t\t\theight: auto;\n\t\t\t&:focus-visible {\n\t\t\t\t/* box-shadow: inset 0 0 0 2px var(--color-primary-element); */\n\t\t\t\toutline: 2px solid var(--color-primary-element);\n\t\t\t}\n\t\t}\n\t}\n\n\t.emoji-mart-category {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: start;\n\n\t\t.emoji-mart-category-label,\n\t\t.emoji-mart-emoji {\n\t\t\tuser-select: none;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t}\n\n\t\t.emoji-mart-category-label {\n\t\t\tflex-basis: 100%;\n\t\t\tmargin: 0;\n\t\t}\n\n\t\t.emoji-mart-emoji {\n\t\t\t// 8 emoji per row\n\t\t\tflex-basis: calc(100% / 8);\n\t\t\ttext-align: center;\n\n\t\t\t&:hover::before,\n\t\t\t&.emoji-mart-emoji-selected::before{\n\t\t\t\tbackground-color: var(--color-background-hover) !important;\n\t\t\t\toutline: 2px solid var(--color-primary-element);\n\t\t\t}\n\t\t}\n\t\tbutton {\n\n\t\t\t&:focus-visible {\n\t\t\t\tbackground-color: var(--color-background-hover);\n\t\t\t\tborder: 2px solid var(--color-primary-element) !important;\n\t\t\t\tborder-radius: 50%;\n\t\t\t}\n\t\t}\n\t}\n\n}\n\n.search {\n\tpadding: 0 8px 4px 8px;\n\t.input-field__label {\n\t\t// Match styles in emoji-mart-vue-fast\n\t\tpadding: 5px 4px;\n\t\tfont-weight: 500;\n\t}\n}\n"],sourceRoot:""}]);const c=l},7783:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),n=a.n(o),i=a(3645),r=a.n(i)()(n());r.push([e.id,".material-design-icon[data-v-54e3932c]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.input-field[data-v-54e3932c]{position:relative;width:100%;border-radius:var(--border-radius-large)}.input-field__main-wrapper[data-v-54e3932c]{height:36px;position:relative}.input-field__input[data-v-54e3932c]{margin:0;padding:0 12px;font-size:var(--default-font-size);background-color:var(--color-main-background);color:var(--color-main-text);border:2px solid var(--color-border-maxcontrast);height:36px !important;border-radius:var(--border-radius-large);text-overflow:ellipsis;cursor:pointer;width:100%;-webkit-appearance:textfield !important;-moz-appearance:textfield !important}.input-field__input[data-v-54e3932c]:active:not([disabled]),.input-field__input[data-v-54e3932c]:hover:not([disabled]),.input-field__input[data-v-54e3932c]:focus:not([disabled]){border-color:var(--color-primary-element)}.input-field__input[data-v-54e3932c]:focus{cursor:text}.input-field__input[data-v-54e3932c]:focus-visible{box-shadow:unset !important}.input-field__input--success[data-v-54e3932c]{border-color:var(--color-success) !important}.input-field__input--success[data-v-54e3932c]:focus-visible{box-shadow:#f8fafc 0px 0px 0px 2px,var(--color-primary-element) 0px 0px 0px 4px,rgba(0,0,0,.05) 0px 1px 2px 0px}.input-field__input--error[data-v-54e3932c]{border-color:var(--color-error) !important}.input-field__input--error[data-v-54e3932c]:focus-visible{box-shadow:#f8fafc 0px 0px 0px 2px,var(--color-primary-element) 0px 0px 0px 4px,rgba(0,0,0,.05) 0px 1px 2px 0px}.input-field__input--leading-icon[data-v-54e3932c]{padding-left:28px}.input-field__input--trailing-icon[data-v-54e3932c]{padding-right:28px}.input-field__label[data-v-54e3932c]{padding:4px 0;display:block}.input-field__label--hidden[data-v-54e3932c]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}.input-field__icon[data-v-54e3932c]{position:absolute;height:32px;width:32px;display:flex;align-items:center;justify-content:center;opacity:.7}.input-field__icon--leading[data-v-54e3932c]{bottom:2px;left:2px}.input-field__icon--trailing[data-v-54e3932c]{bottom:2px;right:2px}.input-field__clear-button.button-vue[data-v-54e3932c]{position:absolute;top:2px;right:1px;min-width:unset;min-height:unset;height:32px;width:32px !important;border-radius:var(--border-radius-large)}.input-field__helper-text-message[data-v-54e3932c]{padding:4px 0;display:flex;align-items:center}.input-field__helper-text-message__icon[data-v-54e3932c]{margin-right:8px;align-self:start;margin-top:4px}.input-field__helper-text-message--error[data-v-54e3932c]{color:var(--color-error-text)}.input-field__helper-text-message--success[data-v-54e3932c]{color:var(--color-success-text)}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcInputField/NcInputField.vue"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,8BACC,iBAAA,CACA,UAAA,CACA,wCAAA,CAEA,4CACC,WAAA,CACA,iBAAA,CAGD,qCACC,QAAA,CACA,cAAA,CACA,kCAAA,CACA,6CAAA,CACA,4BAAA,CACA,gDAAA,CACA,sBAAA,CACA,wCAAA,CACA,sBAAA,CACA,cAAA,CACA,UAAA,CACA,uCAAA,CACA,oCAAA,CAEA,kLAGC,yCAAA,CAGD,2CACC,WAAA,CAGD,mDACC,2BAAA,CAGD,8CACC,4CAAA,CACA,4DACC,+GAAA,CAIF,4CACC,0CAAA,CACA,0DACC,+GAAA,CAIF,mDACC,iBAAA,CAGD,oDACC,kBAAA,CAIF,qCACC,aAAA,CACA,aAAA,CAEA,6CACC,iBAAA,CACA,aAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,eAAA,CAIF,oCACC,iBAAA,CACA,WAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CACA,6CACC,UAAA,CACA,QAAA,CAGD,8CACC,UAAA,CACA,SAAA,CAIF,uDACC,iBAAA,CACA,OAAA,CACA,SAAA,CACA,eAAA,CACA,gBAAA,CACA,WAAA,CACA,qBAAA,CACA,wCAAA,CAGD,mDACC,aAAA,CACA,YAAA,CACA,kBAAA,CAEA,yDACC,gBAAA,CACA,gBAAA,CACA,cAAA,CAGD,0DACC,6BAAA,CAGD,4DACC,+BAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n\n\n.input-field {\n\tposition: relative;\n\twidth: 100%;\n\tborder-radius: var(--border-radius-large);\n\n\t&__main-wrapper {\n\t\theight: 36px;\n\t\tposition: relative;\n\t}\n\n\t&__input {\n\t\tmargin: 0;\n\t\tpadding: 0 12px;\n\t\tfont-size: var(--default-font-size);\n\t\tbackground-color: var(--color-main-background);\n\t\tcolor: var(--color-main-text);\n\t\tborder: 2px solid var(--color-border-maxcontrast);\n\t\theight: 36px !important;\n\t\tborder-radius: var(--border-radius-large);\n\t\ttext-overflow: ellipsis;\n\t\tcursor: pointer;\n\t\twidth: 100%;\n\t\t-webkit-appearance: textfield !important;\n\t\t-moz-appearance: textfield !important;\n\n\t\t&:active:not([disabled]),\n\t\t&:hover:not([disabled]),\n\t\t&:focus:not([disabled]) {\n\t\t\tborder-color: var(--color-primary-element);\n\t\t}\n\n\t\t&:focus {\n\t\t\tcursor: text;\n\t\t}\n\n\t\t&:focus-visible {\n\t\t\tbox-shadow: unset !important; // Override server rules\n\t\t}\n\n\t\t&--success {\n\t\t\tborder-color: var(--color-success) !important; //Override hover border color\n\t\t\t&:focus-visible {\n\t\t\t\tbox-shadow: rgb(248, 250, 252) 0px 0px 0px 2px, var(--color-primary-element) 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px\n\t\t\t}\n\t\t}\n\n\t\t&--error {\n\t\t\tborder-color: var(--color-error) !important; //Override hover border color\n\t\t\t&:focus-visible {\n\t\t\t\tbox-shadow: rgb(248, 250, 252) 0px 0px 0px 2px, var(--color-primary-element) 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px\n\t\t\t}\n\t\t}\n\n\t\t&--leading-icon {\n\t\t\tpadding-left: 28px;\n\t\t}\n\n\t\t&--trailing-icon {\n\t\t\tpadding-right: 28px;\n\t\t}\n\t}\n\n\t&__label {\n\t\tpadding: 4px 0;\n\t\tdisplay: block;\n\n\t\t&--hidden {\n\t\t\tposition: absolute;\n\t\t\tleft: -10000px;\n\t\t\ttop: auto;\n\t\t\twidth: 1px;\n\t\t\theight: 1px;\n\t\t\toverflow: hidden;\n\t\t}\n\t}\n\n\t&__icon {\n\t\tposition: absolute;\n\t\theight: 32px;\n\t\twidth: 32px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\topacity: 0.7;\n\t\t&--leading {\n\t\t\tbottom: 2px;\n\t\t\tleft: 2px;\n\t\t}\n\n\t\t&--trailing {\n\t\t\tbottom: 2px;\n\t\t\tright: 2px;\n\t\t}\n\t}\n\n\t&__clear-button.button-vue {\n\t\tposition: absolute;\n\t\ttop: 2px;\n\t\tright: 1px;\n\t\tmin-width: unset;\n\t\tmin-height: unset;\n\t\theight: 32px;\n\t\twidth: 32px !important;\n\t\tborder-radius: var(--border-radius-large);\n\t}\n\n\t&__helper-text-message {\n\t\tpadding: 4px 0;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\n\t\t&__icon {\n\t\t\tmargin-right: 8px;\n\t\t\talign-self: start;\n\t\t\tmargin-top: 4px;\n\t\t}\n\n\t\t&--error {\n\t\t\tcolor: var(--color-error-text);\n\t\t}\n\n\t\t&--success {\n\t\t\tcolor: var(--color-success-text);\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const s=r},1625:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),n=a.n(o),i=a(3645),r=a.n(i)()(n());r.push([e.id,".material-design-icon{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.resize-observer{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:rgba(0,0,0,0);pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}.v-popper--theme-dropdown.v-popper__popper{z-index:100000;top:0;left:0;display:block !important;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.v-popper--theme-dropdown.v-popper__popper .v-popper__inner{padding:0;color:var(--color-main-text);border-radius:var(--border-radius-large);overflow:hidden;background:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper .v-popper__arrow-container{position:absolute;z-index:1;width:0;height:0;border-style:solid;border-color:rgba(0,0,0,0);border-width:10px}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container{bottom:-10px;border-bottom-width:0;border-top-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:-10px;border-top-width:0;border-bottom-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container{left:-10px;border-left-width:0;border-right-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{right:-10px;border-right-width:0;border-left-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[aria-hidden=true]{visibility:hidden;transition:opacity var(--animation-quick),visibility var(--animation-quick);opacity:0}.v-popper--theme-dropdown.v-popper__popper[aria-hidden=false]{visibility:visible;transition:opacity var(--animation-quick);opacity:1}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcPopover/NcPopover.vue"],names:[],mappings:"AAGA,sBACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,iBACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,8BAAA,CACA,mBAAA,CACA,aAAA,CACA,eAAA,CACA,SAAA,CAGD,wBACC,aAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,mBAAA,CACA,UAAA,CAMA,2CACC,cAAA,CACA,KAAA,CACA,MAAA,CACA,wBAAA,CAEA,sDAAA,CAEA,4DACC,SAAA,CACA,4BAAA,CACA,wCAAA,CACA,eAAA,CACA,uCAAA,CAGD,sEACC,iBAAA,CACA,SAAA,CACA,OAAA,CACA,QAAA,CACA,kBAAA,CACA,0BAAA,CACA,iBA1BW,CA6BZ,kGACC,YAAA,CACA,qBAAA,CACA,6CAAA,CAGD,qGACC,SAAA,CACA,kBAAA,CACA,gDAAA,CAGD,oGACC,UAAA,CACA,mBAAA,CACA,+CAAA,CAGD,mGACC,WAAA,CACA,oBAAA,CACA,8CAAA,CAGD,6DACC,iBAAA,CACA,2EAAA,CACA,SAAA,CAGD,8DACC,kBAAA,CACA,yCAAA,CACA,SAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n\n\n.resize-observer {\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\tz-index:-1;\n\twidth:100%;\n\theight:100%;\n\tborder:none;\n\tbackground-color:transparent;\n\tpointer-events:none;\n\tdisplay:block;\n\toverflow:hidden;\n\topacity:0\n}\n\n.resize-observer object {\n\tdisplay:block;\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\theight:100%;\n\twidth:100%;\n\toverflow:hidden;\n\tpointer-events:none;\n\tz-index:-1\n}\n\n$arrow-width: 10px;\n\n.v-popper--theme-dropdown {\n\t&.v-popper__popper {\n\t\tz-index: 100000;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tdisplay: block !important;\n\n\t\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t\t.v-popper__inner {\n\t\t\tpadding: 0;\n\t\t\tcolor: var(--color-main-text);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t\toverflow: hidden;\n\t\t\tbackground: var(--color-main-background);\n\t\t}\n\n\t\t.v-popper__arrow-container {\n\t\t\tposition: absolute;\n\t\t\tz-index: 1;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder-style: solid;\n\t\t\tborder-color: transparent;\n\t\t\tborder-width: $arrow-width;\n\t\t}\n\n\t\t&[data-popper-placement^='top'] .v-popper__arrow-container {\n\t\t\tbottom: -$arrow-width;\n\t\t\tborder-bottom-width: 0;\n\t\t\tborder-top-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='bottom'] .v-popper__arrow-container {\n\t\t\ttop: -$arrow-width;\n\t\t\tborder-top-width: 0;\n\t\t\tborder-bottom-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='right'] .v-popper__arrow-container {\n\t\t\tleft: -$arrow-width;\n\t\t\tborder-left-width: 0;\n\t\t\tborder-right-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='left'] .v-popper__arrow-container {\n\t\t\tright: -$arrow-width;\n\t\t\tborder-right-width: 0;\n\t\t\tborder-left-color: var(--color-main-background);\n\t\t}\n\n\t\t&[aria-hidden='true'] {\n\t\t\tvisibility: hidden;\n\t\t\ttransition: opacity var(--animation-quick), visibility var(--animation-quick);\n\t\t\topacity: 0;\n\t\t}\n\n\t\t&[aria-hidden='false'] {\n\t\t\tvisibility: visible;\n\t\t\ttransition: opacity var(--animation-quick);\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const s=r},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",o=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),o&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),o&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,o,n,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(r[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),a&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=a):d[2]=a),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},7537:e=>{"use strict";e.exports=function(e){var t=e[1],a=e[3];if(!a)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(n," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},8470:(e,t,a)=>{"use strict";var o=a(3379),n=a.n(o),i=a(7795),r=a.n(i),s=a(569),l=a.n(s),c=a(3565),d=a.n(c),A=a(9216),u=a.n(A),m=a(4589),p=a.n(m),g=a(7783),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=u();n()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals},3379:e=>{"use strict";var t=[];function a(e){for(var a=-1,o=0;o<t.length;o++)if(t[o].identifier===e){a=o;break}return a}function o(e,o){for(var i={},r=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],d=i[c]||0,A="".concat(c," ").concat(d);i[c]=d+1;var u=a(A),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var p=n(m,o);o.byIndex=s,t.splice(s,0,{identifier:A,updater:p,references:1})}r.push(A)}return r}function n(e,t){var a=t.domAPI(t);a.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,n){var i=o(e=e||[],n=n||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var s=a(i[r]);t[s].references--}for(var l=o(e,n),c=0;c<i.length;c++){var d=a(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{"use strict";var t={};e.exports=function(e,a){var o=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(a)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,a)=>{"use strict";e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var o="";a.supports&&(o+="@supports (".concat(a.supports,") {")),a.media&&(o+="@media ".concat(a.media," {"));var n=void 0!==a.layer;n&&(o+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),o+=a.css,n&&(o+="}"),a.media&&(o+="}"),a.supports&&(o+="}");var i=a.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},9563:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var o=a(2727),n=a(5495),i=(a(317),a(1900)),r=a(4348),s=a.n(r),l=(0,i.Z)(n.Z,o.s,o.x,!1,null,"54e3932c",null);"function"==typeof s()&&s()(l);const c=l.exports},5495:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a(9456).Z},317:(e,t,a)=>{"use strict";a(8470)},2102:()=>{},882:()=>{},4348:()=>{},2405:()=>{},5439:()=>{},1900:(e,t,a)=>{"use strict";function o(e,t,a,o,n,i,r,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=s?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var A=c.beforeCreate;c.beforeCreate=A?[].concat(A,l):[l]}return{exports:e,options:c}}a.d(t,{Z:()=>o})},7931:e=>{"use strict";e.exports=__webpack_require__(/*! @nextcloud/l10n/gettext */ "./node_modules/@nextcloud/l10n/dist/gettext.js")},8523:e=>{"use strict";e.exports=__webpack_require__(/*! emoji-mart-vue-fast */ "./node_modules/emoji-mart-vue-fast/dist/emoji-mart.js")},1822:e=>{"use strict";e.exports=__webpack_require__(/*! emoji-mart-vue-fast/data/all.json */ "./node_modules/emoji-mart-vue-fast/data/all.json")},9454:e=>{"use strict";e.exports=__webpack_require__(/*! floating-vue */ "./node_modules/floating-vue/dist/floating-vue.es.js")},4505:e=>{"use strict";e.exports=__webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js")},5512:e=>{"use strict";e.exports=__webpack_require__(/*! vue-material-design-icons/AlertCircleOutline.vue */ "./node_modules/vue-material-design-icons/AlertCircleOutline.vue")},3875:e=>{"use strict";e.exports=__webpack_require__(/*! vue-material-design-icons/ArrowRight.vue */ "./node_modules/vue-material-design-icons/ArrowRight.vue")},6915:e=>{"use strict";e.exports=__webpack_require__(/*! vue-material-design-icons/Check.vue */ "./node_modules/vue-material-design-icons/Check.vue")},8618:e=>{"use strict";e.exports=__webpack_require__(/*! vue-material-design-icons/Close.vue */ "./node_modules/vue-material-design-icons/Close.vue")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nc=void 0;var o={};return(()=>{"use strict";a.r(o),a.d(o,{default:()=>S});var e=a(2297),t=a(6442),n=a(932),i=a(8523),r=a(1822),s=a.n(r);const l={name:"NcEmojiPicker",components:{NcPopover:e.default,NcTextField:t.default,Picker:i.Picker},props:{activeSet:{type:String,default:"native"},showPreview:{type:Boolean,default:!1},previewFallbackEmoji:{type:String,default:"grinning"},previewFallbackName:{type:String,default:(0,n.t)("Pick an emoji")},closeOnSelect:{type:Boolean,default:!0},container:{type:[String,Object,Element,Boolean],default:"body"}},emits:["select","select-data"],data:()=>({emojiIndex:new i.EmojiIndex(s()),search:"",i18n:{search:(0,n.t)("Search emoji"),notfound:(0,n.t)("No emoji found"),categories:{search:(0,n.t)("Search results"),recent:(0,n.t)("Frequently used"),smileys:(0,n.t)("Smileys & Emotion"),people:(0,n.t)("People & Body"),nature:(0,n.t)("Animals & Nature"),foods:(0,n.t)("Food & Drink"),activity:(0,n.t)("Activities"),places:(0,n.t)("Travel & Places"),objects:(0,n.t)("Objects"),symbols:(0,n.t)("Symbols"),flags:(0,n.t)("Flags"),custom:(0,n.t)("Custom")}},open:!1}),computed:{native(){return"native"===this.activeSet}},methods:{t:n.t,clearSearch(){var e,t;this.search="";const a=null===(e=this.$refs.search)||void 0===e||null===(t=e.$refs.inputField)||void 0===t?void 0:t.$refs.input;a&&a.focus()},select(e){this.$emit("select",e.native),this.$emit("select-data",e),this.closeOnSelect&&(this.open=!1)},afterShow(){var e,t;this.$refs.picker.$el.addEventListener("keydown",this.checkKeyEvent);const a=null===(e=this.$refs.search)||void 0===e||null===(t=e.$refs.inputField)||void 0===t?void 0:t.$refs.input;a&&a.focus()},afterHide(){this.$refs.picker.$el.removeEventListener("keydown",this.checkKeyEvent)},checkKeyEvent(e){if("Tab"!==e.key)return;const t=this.$refs.picker.$el.querySelectorAll("button, input"),a=t.length-1;t.length<=1?e.preventDefault():!1===e.shiftKey&&e.target===t[a]?(e.preventDefault(),t[0].focus()):!0===e.shiftKey&&e.target===t[0]&&(e.preventDefault(),t[a].focus())}}};var c=a(3379),d=a.n(c),A=a(7795),u=a.n(A),m=a(569),p=a.n(m),g=a(3565),h=a.n(g),v=a(9216),C=a.n(v),b=a(4589),f=a.n(b),y=a(5764),k={};k.styleTagTransform=f(),k.setAttributes=h(),k.insert=p().bind(null,"head"),k.domAPI=u(),k.insertStyleElement=C();d()(y.Z,k);y.Z&&y.Z.locals&&y.Z.locals;var j=a(1900),w=a(882),E=a.n(w),x=(0,j.Z)(l,(function(){var e=this,t=e._self._c;return t("NcPopover",e._g(e._b({attrs:{shown:e.open,container:e.container},on:{"update:shown":function(t){e.open=t},"after-show":e.afterShow,"after-hide":e.afterHide},scopedSlots:e._u([{key:"trigger",fn:function(){return[e._t("default")]},proxy:!0}],null,!0)},"NcPopover",e.$attrs,!1),e.$listeners),[e._v(" "),t("Picker",e._b({ref:"picker",attrs:{"auto-focus":!1,color:"var(--color-primary-element)",data:e.emojiIndex,emoji:e.previewFallbackEmoji,i18n:e.i18n,native:e.native,"emoji-size":20,"per-line":8,"picker-styles":{width:"320px"},"show-preview":e.showPreview,title:e.previewFallbackName},on:{select:e.select},scopedSlots:e._u([{key:"searchTemplate",fn:function(a){return[t("NcTextField",{ref:"search",staticClass:"search",attrs:{value:e.search,label:e.t("Search"),"label-visible":!0,placeholder:e.i18n.search,"trailing-button-icon":"close","trailing-button-label":e.t("Clear search"),"show-trailing-button":""!==e.search},on:{"update:value":[function(t){e.search=t},function(t){return a.onSearch(e.search)}],"trailing-button-click":function(t){e.clearSearch(),a.onSearch(e.search)}}})]}}])},"Picker",e.$attrs,!1))],1)}),[],!1,null,null,null);"function"==typeof E()&&E()(x);const S=x.exports})(),o})()));
//# sourceMappingURL=NcEmojiPicker.js.map

/***/ }),

/***/ "./apps/user_status/src/filters/clearAtFilter.js":
/*!*******************************************************!*\
  !*** ./apps/user_status/src/filters/clearAtFilter.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearAtFilter: function() { return /* binding */ clearAtFilter; }
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_dateService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dateService.js */ "./apps/user_status/src/services/dateService.js");
/**
 * @copyright Copyright (c) 2020 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */





/**
 * Formats a clearAt object to be human readable
 *
 * @param {object} clearAt The clearAt object
 * @return {string|null}
 */
var clearAtFilter = function clearAtFilter(clearAt) {
  if (clearAt === null) {
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', 'Don\'t clear');
  }
  if (clearAt.type === 'end-of') {
    switch (clearAt.time) {
      case 'day':
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', 'Today');
      case 'week':
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', 'This week');
      default:
        return null;
    }
  }
  if (clearAt.type === 'period') {
    return _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1___default().duration(clearAt.time * 1000).humanize();
  }

  // This is not an officially supported type
  // but only used internally to show the remaining time
  // in the Set Status Modal
  if (clearAt.type === '_time') {
    var momentNow = _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1___default()((0,_services_dateService_js__WEBPACK_IMPORTED_MODULE_2__.dateFactory)());
    var momentClearAt = _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1___default()(clearAt.time, 'X');
    return _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1___default().duration(momentNow.diff(momentClearAt)).humanize();
  }
  return null;
};


/***/ }),

/***/ "./apps/user_status/src/services/clearAtOptionsService.js":
/*!****************************************************************!*\
  !*** ./apps/user_status/src/services/clearAtOptionsService.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllClearAtOptions: function() { return /* binding */ getAllClearAtOptions; }
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/**
 * @copyright Copyright (c) 2020 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */



/**
 * Returns an array
 *
 * @return {object[]}
 */
var getAllClearAtOptions = function getAllClearAtOptions() {
  return [{
    label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', 'Don\'t clear'),
    clearAt: null
  }, {
    label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', '30 minutes'),
    clearAt: {
      type: 'period',
      time: 1800
    }
  }, {
    label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', '1 hour'),
    clearAt: {
      type: 'period',
      time: 3600
    }
  }, {
    label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', '4 hours'),
    clearAt: {
      type: 'period',
      time: 14400
    }
  }, {
    label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', 'Today'),
    clearAt: {
      type: 'end-of',
      time: 'day'
    }
  }, {
    label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', 'This week'),
    clearAt: {
      type: 'end-of',
      time: 'week'
    }
  }];
};


/***/ }),

/***/ "./apps/user_status/src/services/statusOptionsService.js":
/*!***************************************************************!*\
  !*** ./apps/user_status/src/services/statusOptionsService.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllStatusOptions: function() { return /* binding */ getAllStatusOptions; }
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/**
 * @copyright Copyright (c) 2020 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 * @author Jan C. Borchardt <hey@jancborchardt.net>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */



/**
 * Returns a list of all user-definable statuses
 *
 * @return {object[]}
 */
var getAllStatusOptions = function getAllStatusOptions() {
  return [{
    type: 'online',
    label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', 'Online'),
    icon: 'icon-user-status-online'
  }, {
    type: 'away',
    label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', 'Away'),
    icon: 'icon-user-status-away'
  }, {
    type: 'dnd',
    label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', 'Do not disturb'),
    subline: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', 'Mute all notifications'),
    icon: 'icon-user-status-dnd'
  }, {
    type: 'invisible',
    label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', 'Invisible'),
    subline: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('user_status', 'Appear offline'),
    icon: 'icon-user-status-invisible'
  }];
};


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/ClearAtSelect.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/ClearAtSelect.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSelect.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSelect.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_clearAtOptionsService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/clearAtOptionsService.js */ "./apps/user_status/src/services/clearAtOptionsService.js");
/* harmony import */ var _filters_clearAtFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filters/clearAtFilter.js */ "./apps/user_status/src/filters/clearAtFilter.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ClearAtSelect',
  components: {
    NcSelect: (_nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    clearAt: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      options: (0,_services_clearAtOptionsService_js__WEBPACK_IMPORTED_MODULE_1__.getAllClearAtOptions)()
    };
  },
  computed: {
    /**
     * Returns an object of the currently selected option
     *
     * @return {object}
     */
    option: function option() {
      return {
        clearAt: this.clearAt,
        label: (0,_filters_clearAtFilter_js__WEBPACK_IMPORTED_MODULE_2__.clearAtFilter)(this.clearAt)
      };
    }
  },
  methods: {
    /**
     * Triggered when the user selects a new option.
     *
     * @param {object=} option The new selected option
     */
    select: function select(option) {
      if (!option) {
        return;
      }
      this.$emit('select-clear-at', option.clearAt);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/CustomMessageInput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/CustomMessageInput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmojiPicker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcEmojiPicker.js */ "./node_modules/@nextcloud/vue/dist/Components/NcEmojiPicker.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmojiPicker_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcEmojiPicker_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CustomMessageInput',
  components: {
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0___default()),
    NcEmojiPicker: (_nextcloud_vue_dist_Components_NcEmojiPicker_js__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: {
    icon: {
      type: String,
      default: '😀'
    },
    message: {
      type: String,
      required: true,
      default: function _default() {
        return '';
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change', 'submit', 'icon-selected'],
  computed: {
    /**
     * Returns the user-set icon or a smiley in case no icon is set
     *
     * @return {string}
     */
    visibleIcon: function visibleIcon() {
      return this.icon || '😀';
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    /**
     * Notifies the parent component about a changed input
     *
     * @param {Event} event The Change Event
     */
    onChange: function onChange(event) {
      this.$emit('change', event.target.value);
    },
    setIcon: function setIcon(icon) {
      this.$emit('select-icon', icon);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'OnlineStatusSelect',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    subline: {
      type: String,
      default: null
    }
  },
  computed: {
    id: function id() {
      return "user-status-online-status-".concat(this.type);
    }
  },
  methods: {
    onChange: function onChange() {
      this.$emit('select', this.type);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatus.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatus.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters_clearAtFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filters/clearAtFilter.js */ "./apps/user_status/src/filters/clearAtFilter.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PredefinedStatus',
  filters: {
    clearAtFilter: _filters_clearAtFilter_js__WEBPACK_IMPORTED_MODULE_0__.clearAtFilter
  },
  props: {
    messageId: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    clearAt: {
      type: Object,
      required: false,
      default: null
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    id: function id() {
      return "user-status-predefined-status-".concat(this.messageId);
    }
  },
  methods: {
    /**
     * Emits an event when the user clicks the row
     */
    select: function select() {
      this.$emit('select');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PredefinedStatus_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PredefinedStatus.vue */ "./apps/user_status/src/components/PredefinedStatus.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PredefinedStatusesList',
  components: {
    PredefinedStatus: _PredefinedStatus_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      lastSelected: null
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    predefinedStatuses: function predefinedStatuses(state) {
      return state.predefinedStatuses.predefinedStatuses;
    },
    messageId: function messageId(state) {
      return state.userStatus.messageId;
    }
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['statusesHaveLoaded'])),
  watch: {
    messageId: {
      immediate: true,
      handler: function handler() {
        this.lastSelected = this.messageId;
      }
    }
  },
  /**
   * Loads all predefined statuses from the server
   * when this component is mounted
   */
  created: function created() {
    this.$store.dispatch('loadAllPredefinedStatuses');
  },
  methods: {
    /**
     * Emits an event when the user selects a status
     *
     * @param {object} status The selected status
     */
    selectStatus: function selectStatus(status) {
      this.lastSelected = status.id;
      this.$emit('select-status', status);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PreviousStatus.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PreviousStatus.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PreviousStatus',
  components: {
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    icon: {
      type: [String, null],
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  methods: {
    /**
     * Emits an event when the user clicks the row
     */
    select: function select() {
      this.$emit('select');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/SetStatusModal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/SetStatusModal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcModal.js */ "./node_modules/@nextcloud/vue/dist/Components/NcModal.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_statusOptionsService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/statusOptionsService.js */ "./apps/user_status/src/services/statusOptionsService.js");
/* harmony import */ var _mixins_OnlineStatusMixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/OnlineStatusMixin.js */ "./apps/user_status/src/mixins/OnlineStatusMixin.js");
/* harmony import */ var _PredefinedStatusesList_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PredefinedStatusesList.vue */ "./apps/user_status/src/components/PredefinedStatusesList.vue");
/* harmony import */ var _PreviousStatus_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PreviousStatus.vue */ "./apps/user_status/src/components/PreviousStatus.vue");
/* harmony import */ var _CustomMessageInput_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomMessageInput.vue */ "./apps/user_status/src/components/CustomMessageInput.vue");
/* harmony import */ var _ClearAtSelect_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ClearAtSelect.vue */ "./apps/user_status/src/components/ClearAtSelect.vue");
/* harmony import */ var _OnlineStatusSelect_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OnlineStatusSelect.vue */ "./apps/user_status/src/components/OnlineStatusSelect.vue");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SetStatusModal',
  components: {
    ClearAtSelect: _ClearAtSelect_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    CustomMessageInput: _CustomMessageInput_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    NcModal: (_nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_1___default()),
    OnlineStatusSelect: _OnlineStatusSelect_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    PredefinedStatusesList: _PredefinedStatusesList_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    PreviousStatus: _PreviousStatus_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2___default())
  },
  mixins: [_mixins_OnlineStatusMixin_js__WEBPACK_IMPORTED_MODULE_4__["default"]],
  data: function data() {
    return {
      clearAt: null,
      editedMessage: '',
      isCustomStatus: true,
      isSavingStatus: false,
      statuses: (0,_services_statusOptionsService_js__WEBPACK_IMPORTED_MODULE_3__.getAllStatusOptions)()
    };
  },
  computed: {
    messageId: function messageId() {
      return this.$store.state.userStatus.messageId;
    },
    icon: function icon() {
      return this.$store.state.userStatus.icon;
    },
    message: function message() {
      return this.$store.state.userStatus.message || '';
    },
    hasBackupStatus: function hasBackupStatus() {
      return this.messageId && (this.backupIcon || this.backupMessage);
    },
    backupIcon: function backupIcon() {
      return this.$store.state.userBackupStatus.icon || '';
    },
    backupMessage: function backupMessage() {
      return this.$store.state.userBackupStatus.message || '';
    },
    resetButtonText: function resetButtonText() {
      if (this.backupIcon && this.backupMessage) {
        return this.$t('user_status', 'Reset status to "{icon} {message}"', {
          icon: this.backupIcon,
          message: this.backupMessage
        });
      } else if (this.backupMessage) {
        return this.$t('user_status', 'Reset status to "{message}"', {
          message: this.backupMessage
        });
      } else if (this.backupIcon) {
        return this.$t('user_status', 'Reset status to "{icon}"', {
          icon: this.backupIcon
        });
      }
      return this.$t('user_status', 'Reset status');
    }
  },
  watch: {
    message: {
      immediate: true,
      handler: function handler(newValue) {
        this.editedMessage = newValue;
      }
    }
  },
  /**
   * Loads the current status when a user opens dialog
   */
  mounted: function mounted() {
    this.$store.dispatch('fetchBackupFromServer');
    if (this.$store.state.userStatus.clearAt !== null) {
      this.clearAt = {
        type: '_time',
        time: this.$store.state.userStatus.clearAt
      };
    }
  },
  methods: {
    /**
     * Closes the Set Status modal
     */
    closeModal: function closeModal() {
      this.$emit('close');
    },
    /**
     * Sets a new icon
     *
     * @param {string} icon The new icon
     */
    setIcon: function setIcon(icon) {
      var _this = this;
      this.isCustomStatus = true;
      this.$store.dispatch('setCustomMessage', {
        message: this.message,
        icon: icon,
        clearAt: this.clearAt
      });
      this.$nextTick(function () {
        _this.$refs.customMessageInput.focus();
      });
    },
    /**
     * Sets a new message
     *
     * @param {string} message The new message
     */
    setMessage: function setMessage(message) {
      this.isCustomStatus = true;
      this.editedMessage = message;
    },
    /**
     * Sets a new clearAt value
     *
     * @param {object} clearAt The new clearAt object
     */
    setClearAt: function setClearAt(clearAt) {
      this.clearAt = clearAt;
    },
    /**
     * Sets new icon/message/clearAt based on a predefined message
     *
     * @param {object} status The predefined status object
     */
    selectPredefinedMessage: function selectPredefinedMessage(status) {
      this.isCustomStatus = false;
      this.clearAt = status.clearAt;
      this.$store.dispatch('setPredefinedMessage', {
        messageId: status.id,
        clearAt: status.clearAt
      });
    },
    /**
     * Saves the status and closes the
     *
     * @return {Promise<void>}
     */
    saveStatus: function saveStatus() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_this2.isSavingStatus) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              _context.prev = 2;
              _this2.isSavingStatus = true;
              if (!_this2.isCustomStatus) {
                _context.next = 7;
                break;
              }
              _context.next = 7;
              return _this2.$store.dispatch('setCustomMessage', {
                message: _this2.editedMessage,
                icon: _this2.icon,
                clearAt: _this2.clearAt
              });
            case 7:
              _context.next = 15;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(_this2.$t('user_status', 'There was an error saving the status'));
              console.debug(_context.t0);
              _this2.isSavingStatus = false;
              return _context.abrupt("return");
            case 15:
              _this2.isSavingStatus = false;
              _this2.closeModal();
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 9]]);
      }))();
    },
    /**
     *
     * @return {Promise<void>}
     */
    clearStatus: function clearStatus() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _this3.isSavingStatus = true;
              _context2.next = 4;
              return _this3.$store.dispatch('clearMessage');
            case 4:
              _context2.next = 12;
              break;
            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(_this3.$t('user_status', 'There was an error clearing the status'));
              console.debug(_context2.t0);
              _this3.isSavingStatus = false;
              return _context2.abrupt("return");
            case 12:
              _this3.isSavingStatus = false;
              _this3.closeModal();
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 6]]);
      }))();
    },
    /**
     *
     * @return {Promise<void>}
     */
    revertBackupFromServer: function revertBackupFromServer() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _this4.isSavingStatus = true;
              _context3.next = 4;
              return _this4.$store.dispatch('revertBackupFromServer', {
                messageId: _this4.messageId
              });
            case 4:
              _context3.next = 12;
              break;
            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(_this4.$t('user_status', 'There was an error reverting the status'));
              console.debug(_context3.t0);
              _this4.isSavingStatus = false;
              return _context3.abrupt("return");
            case 12:
              _this4.isSavingStatus = false;
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 6]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/ClearAtSelect.vue?vue&type=template&id=16308054&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/ClearAtSelect.vue?vue&type=template&id=16308054&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "clear-at-select"
  }, [_c("label", {
    staticClass: "clear-at-select__label",
    attrs: {
      for: "clearStatus"
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.$t("user_status", "Clear status after")) + "\n\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "clear-at-select__select",
    attrs: {
      "input-id": "clearStatus",
      options: _vm.options,
      value: _vm.option,
      clearable: false,
      placement: "top"
    },
    on: {
      "option:selected": _vm.select
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/CustomMessageInput.vue?vue&type=template&id=f8ff5dac&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/CustomMessageInput.vue?vue&type=template&id=f8ff5dac&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "custom-input",
    attrs: {
      role: "group"
    }
  }, [_c("NcEmojiPicker", {
    attrs: {
      container: ".custom-input"
    },
    on: {
      select: _vm.setIcon
    }
  }, [_c("NcButton", {
    staticClass: "custom-input__emoji-button",
    attrs: {
      type: "tertiary",
      "aria-label": _vm.t("user_status", "Emoji for your status message")
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.visibleIcon) + "\n\t\t")])], 1), _vm._v(" "), _c("div", {
    staticClass: "custom-input__container"
  }, [_c("label", {
    staticClass: "hidden-visually",
    attrs: {
      for: "user_status_message"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("user_status", "What is your status?")) + "\n\t\t")]), _vm._v(" "), _c("input", {
    ref: "input",
    attrs: {
      id: "user_status_message",
      maxlength: "80",
      disabled: _vm.disabled,
      placeholder: _vm.$t("user_status", "What is your status?"),
      type: "text"
    },
    domProps: {
      value: _vm.message
    },
    on: {
      input: _vm.onChange
    }
  })])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=template&id=08b51a17&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=template&id=08b51a17&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "user-status-online-select"
  }, [_c("input", {
    staticClass: "hidden-visually user-status-online-select__input",
    attrs: {
      id: _vm.id,
      type: "radio",
      name: "user-status-online"
    },
    domProps: {
      checked: _vm.checked
    },
    on: {
      change: _vm.onChange
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "user-status-online-select__label",
    attrs: {
      for: _vm.id
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.label) + "\n\t\t"), _c("span", {
    class: _vm.icon,
    attrs: {
      "aria-hidden": "true",
      role: "img"
    }
  }), _vm._v(" "), _c("em", {
    staticClass: "user-status-online-select__subline"
  }, [_vm._v(_vm._s(_vm.subline))])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatus.vue?vue&type=template&id=2b4a822e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatus.vue?vue&type=template&id=2b4a822e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "predefined-status"
  }, [_c("input", {
    staticClass: "hidden-visually predefined-status__input",
    attrs: {
      id: _vm.id,
      type: "radio",
      name: "predefined-status"
    },
    domProps: {
      checked: _vm.selected
    },
    on: {
      change: _vm.select
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "predefined-status__label",
    attrs: {
      for: _vm.id
    }
  }, [_c("span", {
    staticClass: "predefined-status__label--icon",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.icon) + "\n\t\t")]), _vm._v(" "), _c("span", {
    staticClass: "predefined-status__label--message"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.message) + "\n\t\t")]), _vm._v(" "), _c("span", {
    staticClass: "predefined-status__label--clear-at"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm._f("clearAtFilter")(_vm.clearAt)) + "\n\t\t")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=template&id=31790e1a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=template&id=31790e1a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.statusesHaveLoaded ? _c("ul", {
    staticClass: "predefined-statuses-list",
    attrs: {
      role: "radiogroup",
      "aria-label": _vm.t("user_status", "Predefined statuses")
    }
  }, _vm._l(_vm.predefinedStatuses, function (status) {
    return _c("PredefinedStatus", {
      key: status.id,
      attrs: {
        "message-id": status.id,
        icon: status.icon,
        message: status.message,
        "clear-at": status.clearAt,
        selected: _vm.lastSelected === status.id
      },
      on: {
        select: function select($event) {
          return _vm.selectStatus(status);
        }
      }
    });
  }), 1) : _c("div", {
    staticClass: "predefined-statuses-list"
  }, [_c("div", {
    staticClass: "icon icon-loading-small"
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PreviousStatus.vue?vue&type=template&id=58cc2542&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PreviousStatus.vue?vue&type=template&id=58cc2542&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "predefined-status backup-status",
    attrs: {
      tabindex: "0"
    },
    on: {
      keyup: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.select.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        return _vm.select.apply(null, arguments);
      }],
      click: _vm.select
    }
  }, [_c("span", {
    staticClass: "predefined-status__icon"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.icon) + "\n\t")]), _vm._v(" "), _c("span", {
    staticClass: "predefined-status__message"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.message) + "\n\t")]), _vm._v(" "), _c("span", {
    staticClass: "predefined-status__clear-at"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.$t("user_status", "Previously set")) + "\n\t")]), _vm._v(" "), _c("div", {
    staticClass: "backup-status__reset-button"
  }, [_c("NcButton", {
    on: {
      click: _vm.select
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.$t("user_status", "Reset status")) + "\n\t\t")])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/SetStatusModal.vue?vue&type=template&id=1a4980a2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/SetStatusModal.vue?vue&type=template&id=1a4980a2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("NcModal", {
    attrs: {
      size: "normal",
      name: _vm.$t("user_status", "Set status")
    },
    on: {
      close: _vm.closeModal
    }
  }, [_c("div", {
    staticClass: "set-status-modal"
  }, [_c("div", {
    staticClass: "set-status-modal__header"
  }, [_c("h2", [_vm._v(_vm._s(_vm.$t("user_status", "Online status")))])]), _vm._v(" "), _c("div", {
    staticClass: "set-status-modal__online-status",
    attrs: {
      role: "radiogroup",
      "aria-label": _vm.$t("user_status", "Online status")
    }
  }, _vm._l(_vm.statuses, function (status) {
    return _c("OnlineStatusSelect", _vm._b({
      key: status.type,
      attrs: {
        checked: status.type === _vm.statusType
      },
      on: {
        select: _vm.changeStatus
      }
    }, "OnlineStatusSelect", status, false));
  }), 1), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveStatus.apply(null, arguments);
      },
      reset: _vm.clearStatus
    }
  }, [_c("div", {
    staticClass: "set-status-modal__header"
  }, [_c("h2", [_vm._v(_vm._s(_vm.$t("user_status", "Status message")))])]), _vm._v(" "), _c("div", {
    staticClass: "set-status-modal__custom-input"
  }, [_c("CustomMessageInput", {
    ref: "customMessageInput",
    attrs: {
      icon: _vm.icon,
      message: _vm.editedMessage
    },
    on: {
      change: _vm.setMessage,
      "select-icon": _vm.setIcon
    }
  })], 1), _vm._v(" "), _vm.hasBackupStatus ? _c("div", {
    staticClass: "set-status-modal__automation-hint"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.$t("user_status", "Your status was set automatically")) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.hasBackupStatus ? _c("PreviousStatus", {
    attrs: {
      icon: _vm.backupIcon,
      message: _vm.backupMessage
    },
    on: {
      select: _vm.revertBackupFromServer
    }
  }) : _vm._e(), _vm._v(" "), _c("PredefinedStatusesList", {
    on: {
      "select-status": _vm.selectPredefinedMessage
    }
  }), _vm._v(" "), _c("ClearAtSelect", {
    attrs: {
      "clear-at": _vm.clearAt
    },
    on: {
      "select-clear-at": _vm.setClearAt
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "status-buttons"
  }, [_c("NcButton", {
    attrs: {
      wide: true,
      type: "tertiary",
      "native-type": "reset",
      "aria-label": _vm.$t("user_status", "Clear status message"),
      disabled: _vm.isSavingStatus
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.$t("user_status", "Clear status message")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      wide: true,
      type: "primary",
      "native-type": "submit",
      "aria-label": _vm.$t("user_status", "Set status message"),
      disabled: _vm.isSavingStatus
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.$t("user_status", "Set status message")) + "\n\t\t\t\t")])], 1)], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/ClearAtSelect.vue?vue&type=style&index=0&id=16308054&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/ClearAtSelect.vue?vue&type=style&index=0&id=16308054&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".clear-at-select[data-v-16308054] {\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n}\n.clear-at-select__label[data-v-16308054] {\n  margin-right: 12px;\n}\n.clear-at-select__select[data-v-16308054] {\n  flex-grow: 1;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/CustomMessageInput.vue?vue&type=style&index=0&id=f8ff5dac&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/CustomMessageInput.vue?vue&type=style&index=0&id=f8ff5dac&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".custom-input[data-v-f8ff5dac] {\n  display: flex;\n  width: 100%;\n}\n.custom-input__emoji-button[data-v-f8ff5dac] {\n  min-height: 36px;\n  padding: 0;\n  border: 2px solid var(--color-border-maxcontrast);\n  border-right: none;\n  border-radius: var(--border-radius) 0 0 var(--border-radius);\n}\n.custom-input__emoji-button[data-v-f8ff5dac]:hover {\n  border-color: var(--color-primary-element);\n}\n.custom-input__container[data-v-f8ff5dac] {\n  width: 100%;\n}\n.custom-input__container input[data-v-f8ff5dac] {\n  width: 100%;\n  margin: 0;\n  border-radius: 0 var(--border-radius) var(--border-radius) 0;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=style&index=0&id=08b51a17&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=style&index=0&id=08b51a17&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".user-status-online-select__label[data-v-08b51a17] {\n  position: relative;\n  display: block;\n  margin: 8px;\n  padding: 8px;\n  padding-left: 40px;\n  border: 2px solid var(--color-main-background);\n  border-radius: var(--border-radius-large);\n  background-color: var(--color-background-hover);\n  background-position: 8px center;\n  background-size: 24px;\n}\n.user-status-online-select__label span[data-v-08b51a17], .user-status-online-select__label[data-v-08b51a17] {\n  cursor: pointer;\n}\n.user-status-online-select__label span[data-v-08b51a17] {\n  position: absolute;\n  top: calc(50% - 12px);\n  left: 8px;\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.user-status-online-select__input:checked + .user-status-online-select__label[data-v-08b51a17] {\n  outline: 2px solid var(--color-main-text);\n  box-shadow: 0 0 0 4px var(--color-main-background);\n}\n.user-status-online-select__input:focus-visible + .user-status-online-select__label[data-v-08b51a17] {\n  outline: 2px solid var(--color-primary-element) !important;\n}\n.user-status-online-select__subline[data-v-08b51a17] {\n  display: block;\n  color: var(--color-text-lighter);\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatus.vue?vue&type=style&index=0&id=2b4a822e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatus.vue?vue&type=style&index=0&id=2b4a822e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.predefined-status__label[data-v-2b4a822e] {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  flex-basis: 100%;\n  border-radius: var(--border-radius);\n  align-items: center;\n  min-height: 44px;\n}\n.predefined-status__label--icon[data-v-2b4a822e] {\n  flex-basis: 40px;\n  text-align: center;\n}\n.predefined-status__label--message[data-v-2b4a822e] {\n  font-weight: bold;\n  padding: 0 6px;\n}\n.predefined-status__label--clear-at[data-v-2b4a822e] {\n  color: var(--color-text-maxcontrast);\n}\n.predefined-status__label--clear-at[data-v-2b4a822e]::before {\n  content: \" – \";\n}\n.predefined-status__input:checked + .predefined-status__label[data-v-2b4a822e], .predefined-status__label[data-v-2b4a822e]:active {\n  outline: 2px solid var(--color-main-text);\n  box-shadow: 0 0 0 4px var(--color-main-background);\n  border-radius: var(--border-radius-large);\n}\n.predefined-status__input:focus-visible + .predefined-status__label[data-v-2b4a822e] {\n  outline: 2px solid var(--color-primary-element) !important;\n  border-radius: var(--border-radius-large);\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=style&index=0&id=31790e1a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=style&index=0&id=31790e1a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".predefined-statuses-list[data-v-31790e1a] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PreviousStatus.vue?vue&type=style&index=0&id=58cc2542&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PreviousStatus.vue?vue&type=style&index=0&id=58cc2542&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.predefined-status[data-v-58cc2542] {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  flex-basis: 100%;\n  border-radius: var(--border-radius);\n  align-items: center;\n  min-height: 44px;\n}\n.predefined-status[data-v-58cc2542]:hover, .predefined-status[data-v-58cc2542]:focus {\n  background-color: var(--color-background-hover);\n}\n.predefined-status[data-v-58cc2542]:active {\n  background-color: var(--color-background-dark);\n}\n.predefined-status__icon[data-v-58cc2542] {\n  flex-basis: 40px;\n  text-align: center;\n}\n.predefined-status__message[data-v-58cc2542] {\n  font-weight: bold;\n  padding: 0 6px;\n}\n.predefined-status__clear-at[data-v-58cc2542] {\n  color: var(--color-text-maxcontrast);\n}\n.predefined-status__clear-at[data-v-58cc2542]::before {\n  content: \" – \";\n}\n.backup-status__reset-button[data-v-58cc2542] {\n  justify-content: flex-end;\n  display: flex;\n  flex-grow: 1;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/SetStatusModal.vue?vue&type=style&index=0&id=1a4980a2&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/SetStatusModal.vue?vue&type=style&index=0&id=1a4980a2&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".set-status-modal[data-v-1a4980a2] {\n  padding: 8px 20px 20px 20px;\n}\n.set-status-modal__header[data-v-1a4980a2] {\n  text-align: center;\n  font-weight: bold;\n  margin: 15px 0;\n}\n.set-status-modal__online-status[data-v-1a4980a2] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.set-status-modal__custom-input[data-v-1a4980a2] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.set-status-modal__automation-hint[data-v-1a4980a2] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 10px;\n  color: var(--color-text-maxcontrast);\n}\n.set-status-modal .status-buttons[data-v-1a4980a2] {\n  display: flex;\n  padding: 3px;\n  padding-left: 0;\n  gap: 3px;\n}\n@media only screen and (max-width: 500px) {\n.set-status-modal__online-status[data-v-1a4980a2] {\n    grid-template-columns: none !important;\n}\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/ClearAtSelect.vue?vue&type=style&index=0&id=16308054&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/ClearAtSelect.vue?vue&type=style&index=0&id=16308054&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearAtSelect_vue_vue_type_style_index_0_id_16308054_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClearAtSelect.vue?vue&type=style&index=0&id=16308054&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/ClearAtSelect.vue?vue&type=style&index=0&id=16308054&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearAtSelect_vue_vue_type_style_index_0_id_16308054_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearAtSelect_vue_vue_type_style_index_0_id_16308054_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearAtSelect_vue_vue_type_style_index_0_id_16308054_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearAtSelect_vue_vue_type_style_index_0_id_16308054_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/CustomMessageInput.vue?vue&type=style&index=0&id=f8ff5dac&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/CustomMessageInput.vue?vue&type=style&index=0&id=f8ff5dac&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomMessageInput_vue_vue_type_style_index_0_id_f8ff5dac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomMessageInput.vue?vue&type=style&index=0&id=f8ff5dac&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/CustomMessageInput.vue?vue&type=style&index=0&id=f8ff5dac&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomMessageInput_vue_vue_type_style_index_0_id_f8ff5dac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomMessageInput_vue_vue_type_style_index_0_id_f8ff5dac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomMessageInput_vue_vue_type_style_index_0_id_f8ff5dac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomMessageInput_vue_vue_type_style_index_0_id_f8ff5dac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=style&index=0&id=08b51a17&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=style&index=0&id=08b51a17&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineStatusSelect_vue_vue_type_style_index_0_id_08b51a17_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OnlineStatusSelect.vue?vue&type=style&index=0&id=08b51a17&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=style&index=0&id=08b51a17&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineStatusSelect_vue_vue_type_style_index_0_id_08b51a17_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineStatusSelect_vue_vue_type_style_index_0_id_08b51a17_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineStatusSelect_vue_vue_type_style_index_0_id_08b51a17_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineStatusSelect_vue_vue_type_style_index_0_id_08b51a17_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatus.vue?vue&type=style&index=0&id=2b4a822e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatus.vue?vue&type=style&index=0&id=2b4a822e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatus_vue_vue_type_style_index_0_id_2b4a822e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PredefinedStatus.vue?vue&type=style&index=0&id=2b4a822e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatus.vue?vue&type=style&index=0&id=2b4a822e&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatus_vue_vue_type_style_index_0_id_2b4a822e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatus_vue_vue_type_style_index_0_id_2b4a822e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatus_vue_vue_type_style_index_0_id_2b4a822e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatus_vue_vue_type_style_index_0_id_2b4a822e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=style&index=0&id=31790e1a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=style&index=0&id=31790e1a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatusesList_vue_vue_type_style_index_0_id_31790e1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PredefinedStatusesList.vue?vue&type=style&index=0&id=31790e1a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=style&index=0&id=31790e1a&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatusesList_vue_vue_type_style_index_0_id_31790e1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatusesList_vue_vue_type_style_index_0_id_31790e1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatusesList_vue_vue_type_style_index_0_id_31790e1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatusesList_vue_vue_type_style_index_0_id_31790e1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PreviousStatus.vue?vue&type=style&index=0&id=58cc2542&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PreviousStatus.vue?vue&type=style&index=0&id=58cc2542&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviousStatus_vue_vue_type_style_index_0_id_58cc2542_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PreviousStatus.vue?vue&type=style&index=0&id=58cc2542&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PreviousStatus.vue?vue&type=style&index=0&id=58cc2542&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviousStatus_vue_vue_type_style_index_0_id_58cc2542_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviousStatus_vue_vue_type_style_index_0_id_58cc2542_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviousStatus_vue_vue_type_style_index_0_id_58cc2542_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviousStatus_vue_vue_type_style_index_0_id_58cc2542_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/SetStatusModal.vue?vue&type=style&index=0&id=1a4980a2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/SetStatusModal.vue?vue&type=style&index=0&id=1a4980a2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SetStatusModal_vue_vue_type_style_index_0_id_1a4980a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetStatusModal.vue?vue&type=style&index=0&id=1a4980a2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/SetStatusModal.vue?vue&type=style&index=0&id=1a4980a2&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SetStatusModal_vue_vue_type_style_index_0_id_1a4980a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SetStatusModal_vue_vue_type_style_index_0_id_1a4980a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SetStatusModal_vue_vue_type_style_index_0_id_1a4980a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SetStatusModal_vue_vue_type_style_index_0_id_1a4980a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/user_status/src/components/ClearAtSelect.vue":
/*!***********************************************************!*\
  !*** ./apps/user_status/src/components/ClearAtSelect.vue ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClearAtSelect_vue_vue_type_template_id_16308054_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClearAtSelect.vue?vue&type=template&id=16308054&scoped=true& */ "./apps/user_status/src/components/ClearAtSelect.vue?vue&type=template&id=16308054&scoped=true&");
/* harmony import */ var _ClearAtSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClearAtSelect.vue?vue&type=script&lang=js& */ "./apps/user_status/src/components/ClearAtSelect.vue?vue&type=script&lang=js&");
/* harmony import */ var _ClearAtSelect_vue_vue_type_style_index_0_id_16308054_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClearAtSelect.vue?vue&type=style&index=0&id=16308054&lang=scss&scoped=true& */ "./apps/user_status/src/components/ClearAtSelect.vue?vue&type=style&index=0&id=16308054&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ClearAtSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClearAtSelect_vue_vue_type_template_id_16308054_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClearAtSelect_vue_vue_type_template_id_16308054_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "16308054",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/user_status/src/components/ClearAtSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/user_status/src/components/CustomMessageInput.vue":
/*!****************************************************************!*\
  !*** ./apps/user_status/src/components/CustomMessageInput.vue ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomMessageInput_vue_vue_type_template_id_f8ff5dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomMessageInput.vue?vue&type=template&id=f8ff5dac&scoped=true& */ "./apps/user_status/src/components/CustomMessageInput.vue?vue&type=template&id=f8ff5dac&scoped=true&");
/* harmony import */ var _CustomMessageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomMessageInput.vue?vue&type=script&lang=js& */ "./apps/user_status/src/components/CustomMessageInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _CustomMessageInput_vue_vue_type_style_index_0_id_f8ff5dac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomMessageInput.vue?vue&type=style&index=0&id=f8ff5dac&lang=scss&scoped=true& */ "./apps/user_status/src/components/CustomMessageInput.vue?vue&type=style&index=0&id=f8ff5dac&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomMessageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomMessageInput_vue_vue_type_template_id_f8ff5dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomMessageInput_vue_vue_type_template_id_f8ff5dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f8ff5dac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/user_status/src/components/CustomMessageInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/user_status/src/components/OnlineStatusSelect.vue":
/*!****************************************************************!*\
  !*** ./apps/user_status/src/components/OnlineStatusSelect.vue ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OnlineStatusSelect_vue_vue_type_template_id_08b51a17_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OnlineStatusSelect.vue?vue&type=template&id=08b51a17&scoped=true& */ "./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=template&id=08b51a17&scoped=true&");
/* harmony import */ var _OnlineStatusSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnlineStatusSelect.vue?vue&type=script&lang=js& */ "./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=script&lang=js&");
/* harmony import */ var _OnlineStatusSelect_vue_vue_type_style_index_0_id_08b51a17_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OnlineStatusSelect.vue?vue&type=style&index=0&id=08b51a17&lang=scss&scoped=true& */ "./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=style&index=0&id=08b51a17&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OnlineStatusSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OnlineStatusSelect_vue_vue_type_template_id_08b51a17_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _OnlineStatusSelect_vue_vue_type_template_id_08b51a17_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "08b51a17",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/user_status/src/components/OnlineStatusSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/user_status/src/components/PredefinedStatus.vue":
/*!**************************************************************!*\
  !*** ./apps/user_status/src/components/PredefinedStatus.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PredefinedStatus_vue_vue_type_template_id_2b4a822e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PredefinedStatus.vue?vue&type=template&id=2b4a822e&scoped=true& */ "./apps/user_status/src/components/PredefinedStatus.vue?vue&type=template&id=2b4a822e&scoped=true&");
/* harmony import */ var _PredefinedStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PredefinedStatus.vue?vue&type=script&lang=js& */ "./apps/user_status/src/components/PredefinedStatus.vue?vue&type=script&lang=js&");
/* harmony import */ var _PredefinedStatus_vue_vue_type_style_index_0_id_2b4a822e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PredefinedStatus.vue?vue&type=style&index=0&id=2b4a822e&lang=scss&scoped=true& */ "./apps/user_status/src/components/PredefinedStatus.vue?vue&type=style&index=0&id=2b4a822e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PredefinedStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PredefinedStatus_vue_vue_type_template_id_2b4a822e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PredefinedStatus_vue_vue_type_template_id_2b4a822e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2b4a822e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/user_status/src/components/PredefinedStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/user_status/src/components/PredefinedStatusesList.vue":
/*!********************************************************************!*\
  !*** ./apps/user_status/src/components/PredefinedStatusesList.vue ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PredefinedStatusesList_vue_vue_type_template_id_31790e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PredefinedStatusesList.vue?vue&type=template&id=31790e1a&scoped=true& */ "./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=template&id=31790e1a&scoped=true&");
/* harmony import */ var _PredefinedStatusesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PredefinedStatusesList.vue?vue&type=script&lang=js& */ "./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=script&lang=js&");
/* harmony import */ var _PredefinedStatusesList_vue_vue_type_style_index_0_id_31790e1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PredefinedStatusesList.vue?vue&type=style&index=0&id=31790e1a&lang=scss&scoped=true& */ "./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=style&index=0&id=31790e1a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PredefinedStatusesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PredefinedStatusesList_vue_vue_type_template_id_31790e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PredefinedStatusesList_vue_vue_type_template_id_31790e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "31790e1a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/user_status/src/components/PredefinedStatusesList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/user_status/src/components/PreviousStatus.vue":
/*!************************************************************!*\
  !*** ./apps/user_status/src/components/PreviousStatus.vue ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreviousStatus_vue_vue_type_template_id_58cc2542_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreviousStatus.vue?vue&type=template&id=58cc2542&scoped=true& */ "./apps/user_status/src/components/PreviousStatus.vue?vue&type=template&id=58cc2542&scoped=true&");
/* harmony import */ var _PreviousStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviousStatus.vue?vue&type=script&lang=js& */ "./apps/user_status/src/components/PreviousStatus.vue?vue&type=script&lang=js&");
/* harmony import */ var _PreviousStatus_vue_vue_type_style_index_0_id_58cc2542_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviousStatus.vue?vue&type=style&index=0&id=58cc2542&lang=scss&scoped=true& */ "./apps/user_status/src/components/PreviousStatus.vue?vue&type=style&index=0&id=58cc2542&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PreviousStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PreviousStatus_vue_vue_type_template_id_58cc2542_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PreviousStatus_vue_vue_type_template_id_58cc2542_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "58cc2542",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/user_status/src/components/PreviousStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/user_status/src/components/SetStatusModal.vue":
/*!************************************************************!*\
  !*** ./apps/user_status/src/components/SetStatusModal.vue ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SetStatusModal_vue_vue_type_template_id_1a4980a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetStatusModal.vue?vue&type=template&id=1a4980a2&scoped=true& */ "./apps/user_status/src/components/SetStatusModal.vue?vue&type=template&id=1a4980a2&scoped=true&");
/* harmony import */ var _SetStatusModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetStatusModal.vue?vue&type=script&lang=js& */ "./apps/user_status/src/components/SetStatusModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _SetStatusModal_vue_vue_type_style_index_0_id_1a4980a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SetStatusModal.vue?vue&type=style&index=0&id=1a4980a2&lang=scss&scoped=true& */ "./apps/user_status/src/components/SetStatusModal.vue?vue&type=style&index=0&id=1a4980a2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SetStatusModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SetStatusModal_vue_vue_type_template_id_1a4980a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SetStatusModal_vue_vue_type_template_id_1a4980a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1a4980a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/user_status/src/components/SetStatusModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/user_status/src/components/ClearAtSelect.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./apps/user_status/src/components/ClearAtSelect.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearAtSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClearAtSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/ClearAtSelect.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearAtSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/user_status/src/components/CustomMessageInput.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./apps/user_status/src/components/CustomMessageInput.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomMessageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomMessageInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/CustomMessageInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomMessageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineStatusSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OnlineStatusSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineStatusSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/user_status/src/components/PredefinedStatus.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./apps/user_status/src/components/PredefinedStatus.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PredefinedStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatus.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatusesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PredefinedStatusesList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatusesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/user_status/src/components/PreviousStatus.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./apps/user_status/src/components/PreviousStatus.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviousStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PreviousStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PreviousStatus.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviousStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/user_status/src/components/SetStatusModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./apps/user_status/src/components/SetStatusModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SetStatusModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetStatusModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/SetStatusModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SetStatusModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/user_status/src/components/ClearAtSelect.vue?vue&type=template&id=16308054&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./apps/user_status/src/components/ClearAtSelect.vue?vue&type=template&id=16308054&scoped=true& ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearAtSelect_vue_vue_type_template_id_16308054_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearAtSelect_vue_vue_type_template_id_16308054_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearAtSelect_vue_vue_type_template_id_16308054_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClearAtSelect.vue?vue&type=template&id=16308054&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/ClearAtSelect.vue?vue&type=template&id=16308054&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/CustomMessageInput.vue?vue&type=template&id=f8ff5dac&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./apps/user_status/src/components/CustomMessageInput.vue?vue&type=template&id=f8ff5dac&scoped=true& ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomMessageInput_vue_vue_type_template_id_f8ff5dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomMessageInput_vue_vue_type_template_id_f8ff5dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomMessageInput_vue_vue_type_template_id_f8ff5dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomMessageInput.vue?vue&type=template&id=f8ff5dac&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/CustomMessageInput.vue?vue&type=template&id=f8ff5dac&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=template&id=08b51a17&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=template&id=08b51a17&scoped=true& ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineStatusSelect_vue_vue_type_template_id_08b51a17_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineStatusSelect_vue_vue_type_template_id_08b51a17_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineStatusSelect_vue_vue_type_template_id_08b51a17_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OnlineStatusSelect.vue?vue&type=template&id=08b51a17&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=template&id=08b51a17&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/PredefinedStatus.vue?vue&type=template&id=2b4a822e&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./apps/user_status/src/components/PredefinedStatus.vue?vue&type=template&id=2b4a822e&scoped=true& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatus_vue_vue_type_template_id_2b4a822e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatus_vue_vue_type_template_id_2b4a822e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatus_vue_vue_type_template_id_2b4a822e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PredefinedStatus.vue?vue&type=template&id=2b4a822e&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatus.vue?vue&type=template&id=2b4a822e&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=template&id=31790e1a&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=template&id=31790e1a&scoped=true& ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatusesList_vue_vue_type_template_id_31790e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatusesList_vue_vue_type_template_id_31790e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatusesList_vue_vue_type_template_id_31790e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PredefinedStatusesList.vue?vue&type=template&id=31790e1a&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=template&id=31790e1a&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/PreviousStatus.vue?vue&type=template&id=58cc2542&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./apps/user_status/src/components/PreviousStatus.vue?vue&type=template&id=58cc2542&scoped=true& ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviousStatus_vue_vue_type_template_id_58cc2542_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviousStatus_vue_vue_type_template_id_58cc2542_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviousStatus_vue_vue_type_template_id_58cc2542_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PreviousStatus.vue?vue&type=template&id=58cc2542&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PreviousStatus.vue?vue&type=template&id=58cc2542&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/SetStatusModal.vue?vue&type=template&id=1a4980a2&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./apps/user_status/src/components/SetStatusModal.vue?vue&type=template&id=1a4980a2&scoped=true& ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SetStatusModal_vue_vue_type_template_id_1a4980a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SetStatusModal_vue_vue_type_template_id_1a4980a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SetStatusModal_vue_vue_type_template_id_1a4980a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetStatusModal.vue?vue&type=template&id=1a4980a2&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/SetStatusModal.vue?vue&type=template&id=1a4980a2&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/ClearAtSelect.vue?vue&type=style&index=0&id=16308054&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./apps/user_status/src/components/ClearAtSelect.vue?vue&type=style&index=0&id=16308054&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearAtSelect_vue_vue_type_style_index_0_id_16308054_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClearAtSelect.vue?vue&type=style&index=0&id=16308054&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/ClearAtSelect.vue?vue&type=style&index=0&id=16308054&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/CustomMessageInput.vue?vue&type=style&index=0&id=f8ff5dac&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./apps/user_status/src/components/CustomMessageInput.vue?vue&type=style&index=0&id=f8ff5dac&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomMessageInput_vue_vue_type_style_index_0_id_f8ff5dac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomMessageInput.vue?vue&type=style&index=0&id=f8ff5dac&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/CustomMessageInput.vue?vue&type=style&index=0&id=f8ff5dac&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=style&index=0&id=08b51a17&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=style&index=0&id=08b51a17&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlineStatusSelect_vue_vue_type_style_index_0_id_08b51a17_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OnlineStatusSelect.vue?vue&type=style&index=0&id=08b51a17&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/OnlineStatusSelect.vue?vue&type=style&index=0&id=08b51a17&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/PredefinedStatus.vue?vue&type=style&index=0&id=2b4a822e&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./apps/user_status/src/components/PredefinedStatus.vue?vue&type=style&index=0&id=2b4a822e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatus_vue_vue_type_style_index_0_id_2b4a822e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PredefinedStatus.vue?vue&type=style&index=0&id=2b4a822e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatus.vue?vue&type=style&index=0&id=2b4a822e&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=style&index=0&id=31790e1a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=style&index=0&id=31790e1a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PredefinedStatusesList_vue_vue_type_style_index_0_id_31790e1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PredefinedStatusesList.vue?vue&type=style&index=0&id=31790e1a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PredefinedStatusesList.vue?vue&type=style&index=0&id=31790e1a&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/PreviousStatus.vue?vue&type=style&index=0&id=58cc2542&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./apps/user_status/src/components/PreviousStatus.vue?vue&type=style&index=0&id=58cc2542&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviousStatus_vue_vue_type_style_index_0_id_58cc2542_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PreviousStatus.vue?vue&type=style&index=0&id=58cc2542&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/PreviousStatus.vue?vue&type=style&index=0&id=58cc2542&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/user_status/src/components/SetStatusModal.vue?vue&type=style&index=0&id=1a4980a2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./apps/user_status/src/components/SetStatusModal.vue?vue&type=style&index=0&id=1a4980a2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SetStatusModal_vue_vue_type_style_index_0_id_1a4980a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetStatusModal.vue?vue&type=style&index=0&id=1a4980a2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_status/src/components/SetStatusModal.vue?vue&type=style&index=0&id=1a4980a2&lang=scss&scoped=true&");


/***/ })

}]);
//# sourceMappingURL=user-status-modal-user-status-modal.js.map?v=5996163a6cdfbcf44508