'use strict';(window.dullscriptWebpackJsonp=window.dullscriptWebpackJsonp||[]).push([[31],{1201:function(t,E,a){t=a(0);var c=a(84),b=a(15),e=a(137),f=a(39);class d{constructor(A){this.Fga=this.zga=this.Jga=this.Iga=null;this.Zae=this.ree=this.yx=this.qM=!1;this.JSc=this.Iee=null;this.Aee=0;this.nb=this.Gee=null;this.i2=A;this.vA=3;this.Ckb=!0}initialize(A,y,D){this.Iga=this.Ojd(A,y);this.Jga=CommonUIStrings.l_SavingStatus;this.zga=CommonUIStrings.l_ReadOnlyStatus;this.Fga=CommonUIStrings.l_ReviewModeStatus;
this.i2&&this.i2.execute(I=>{I.nYc(Object(c.a)(this,this.lRb,"updateToSavingStatus"))});this.yx=!0;this.nb=D;return!0}gfa(A,y){this.qM=A;this.vA=y;this.US(this.Ckb)}US(A){!this.Ckb&&A&&(this.Gee=new Date);this.Ckb=A;A=null;3===this.vA&&(A=this.Ckb?this.Iga:this.Jga);this.Wnh(A)}Ojd(A,y){return A?String.format(CommonUIStrings.l_SavedToStatus,CommonUIStrings.l_OneDriveName):y&&y.length?String.format(CommonUIStrings.l_SavedToStatus,y):CommonUIStrings.l_SavedStatus}lRb(){this.US(!1)}HYh(){switch(this.vA){case 1:return this.zga;
case 2:return this.Fga;default:return null}}jni(A){return this.ree===this.qM&&this.Aee===this.vA&&this.Iee===A}O9c(A){appChrome.getHeaderApi().then(y=>{y.updateDocumentTitleStatus(this.qM,A,this.HYh(),this.Gee,this.Ckb);this.Zae=!0;return null});this.JSc=null}Wnh(A){this.yx&&e.c()&&!this.jni(A)&&(!this.Zae&&this.nb.getBooleanFeatureGate("Microsoft.Office.SharedOnline.ExpediteFirstSaveStatusAction",!1)?this.O9c(A):f.a.oZf()?(this.JSc&&b.ULS.sendTraceTag(595146389,340,50,"Previous UpdateDocumentTitleStatus idle callback can be cancelled."),
this.JSc=window.requestIdleCallback(()=>{this.O9c(A)})):window.requestAnimationFrame(()=>{this.O9c(A)}),this.ree=this.qM,this.Iee=A,this.Aee=this.vA)}}Object(t.a)(d,"ReactSaveStatusUIHandler",null,[315]);var h=a(164);class m{constructor(A,y){this.Cs=null;this.Iga=CommonUIStrings.l_SavedStatus;this.Jga=CommonUIStrings.l_SavingStatus;this.zga=CommonUIStrings.l_ReadOnlyStatus;this.Fga=CommonUIStrings.l_ReviewModeStatus;this.mVb=y;this.i2=A;this.vA=3;this.Kra=!0}Ss(){this.i2&&this.i2.execute(A=>{A.nYc(Object(c.a)(this,
this.lRb,"updateToSavingStatus"))});this.mVb.execute(A=>{this.Cs=A})}gfa(A,y){this.vA=y;3===y?this.US(this.Kra):2===y?this.Y0d(this.Fga):this.Y0d(this.zga)}lRb(){this.US(!1)}US(A){this.Kra=A;this.Y0d(this.Kra?this.Iga:this.Jga)}Y0d(A){this.Cs&&this.Cs.Sj(h.a.PVj,this.w9g(A))}w9g(A){const y={};y.StatusText=A;return y}}Object(t.a)(m,"SaveStatusPostMessageHandler",null,[315]);var l=a(94),w=a(123),n=a(56);class x{constructor(A,y,D,I){this.Fga=this.zga=this.Jga=this.Iga=null;this.cFa=0;this.DE=this.vTc=
this.pDa=this.ZHc=this.$Fa=null;this.Md=A;this.j9=y;this.i2=D;this.mj=I;this.Mce=!0;this.qM=!1;this.vA=3;this.Kra=!0}initialize(A,y){if(!this.Md)return!1;this.Iga=this.Ojd(A,y);this.Jga=CommonUIStrings.l_SavingStatus;this.zga=CommonUIStrings.l_ReadOnlyStatus;this.Fga=CommonUIStrings.l_ReviewModeStatus;this.Ss();return!0}Ojd(A,y){return A?String.format(CommonUIStrings.l_SavedToStatus,CommonUIStrings.l_OneDriveName):y&&y.length?String.format(CommonUIStrings.l_SavedToStatus,y):CommonUIStrings.l_SavedStatus}Ss(){this.j9&&
this.j9.execute(A=>{A.sOg(Object(c.a)(this,this.sKe,"createStatusAndModeElements"));A.jOg(Object(c.a)(this,this.JHj,"showHideSaveStatusElement"));A.CSj&&this.sKe(null,null)});this.i2&&this.i2.execute(A=>{A.nYc(Object(c.a)(this,this.lRb,"updateToSavingStatus"))})}Yv(){this.DE&&this.Md&&this.Md.HG(this.DE)}JHj(A,y){this.gfa("true"===y,this.vA)}gfa(A,y){this.qM=A;this.vA=y;this.ZHc&&(this.ZHc.style.display=this.qM||3===this.vA||!this.$Fa?"none":"");this.pDa&&(this.pDa.style.display=this.qM||3===this.vA?
"none":"",this.pDa.innerText=1===this.vA?this.zga:this.Fga,this.pDa.title=1===this.vA?CommonUIStrings.l_ReadOnlyStatusTooltip:CommonUIStrings.l_ReviewModeStatusTooltip);this.vTc&&(this.vTc.style.display=this.qM||1===this.vA||!this.$Fa&&!this.pDa?"none":"");this.DE&&(this.DE.style.display=this.qM||1===this.vA?"none":"",this.US(this.Kra),this.DE.title=CommonUIStrings.l_SaveStatusTooltip)}sKe(A,y){A=document.getElementById(l.CuiHelper.Fcf);y&&y.O4j||!A||""===this.Iga||""===this.Jga||""===this.zga||""===
this.Fga||(this.$Fa=document.getElementById(l.CuiHelper.i3b),this.ZHc=l.CuiHelper.Nta(A,"BreadcrumbAppModeDash","-",null,!1),this.pDa=l.CuiHelper.Nta(A,"BreadcrumbAppModeStatus",1===this.vA?this.zga:this.Fga,null,!1),this.Ijg(this.pDa),this.vTc=l.CuiHelper.Nta(A,"BreadcrumbSaveStatusDash","-",null,!1),this.DE=l.CuiHelper.Nta(A,"BreadcrumbSaveStatus",this.Iga,null,!1),this.Ijg(this.DE),this.gfa(this.qM,this.vA))}lRb(){this.US(!1)}US(A){this.Kra=A;this.Y_j(this.Kra?this.Iga:this.Jga)}Y_j(A){!this.DE||
3!==this.vA&&2!==this.vA||(this.Mce&&!this.Kra?(this.cFa=this.DE.offsetWidth<this.cFa?this.cFa:this.DE.offsetWidth,this.SXj(this.Jga),this.Mce=!1):this.DE.innerText=A)}Ijg(A){A.style.direction=this.mj?"rtl":"ltr";A.style.width="auto";A.style.textAlign=this.mj?"right":"left";A.style.display=this.qM?"none":"";A.setAttribute("Unselectable","on")}SXj(A){this.DE&&(this.DE.style.width="",this.DE.innerText=A,this.cFa=this.DE.offsetWidth<this.cFa?this.cFa:this.DE.offsetWidth,A=w.a.kB(this.DE),this.DE.style.width=
this.cFa-n.a.RD(A.paddingLeft)-n.a.RD(A.paddingRight)+1+"px")}}Object(t.a)(x,"SaveStatusUIHandler",null,[315]);var r=a(4),u=a(93);class v{constructor(){this.wTc=this.vSc=this.Tmb=this.$a=null}get name(){return"Common.App.SaveStatus"}Oh(A){this.$a=A;r.AFrameworkApplication.fa.qa("PostMessageEmbedded")&&r.AFrameworkApplication.hideHeaderEmbedded?this.$a.register(m,"Common.App.SaveStatus.SaveStatusPostMessageHandler").as("Common.App.SaveStatus.ISaveStatusUIHandler").wc().Ac(()=>new m(this.$a.Rb("Common.App.HostNotification.EditNotificationEventSource"),
this.$a.Rb("Postmessage.IHostPostmessenger"))):r.AFrameworkApplication.ta.Pa.Inf||(r.AFrameworkApplication.ta.Pa.Gs?this.$a.register(d,"Common.App.SaveStatus.ReactSaveStatusUIHandler").as("Common.App.SaveStatus.ISaveStatusUIHandler").wc().Ac(()=>new d(this.$a.Rb("Common.App.HostNotification.EditNotificationEventSource"))):this.$a.register(x,"Common.App.SaveStatus.SaveStatusUIHandler").as("Common.App.SaveStatus.ISaveStatusUIHandler").wc().Ac(()=>new x(u.EventHandlerManager.instance,this.$a.Rb("Common.App.Header.HeaderEventSource"),
this.$a.Rb("Common.App.HostNotification.EditNotificationEventSource"),r.AFrameworkApplication.isRtl)))}init(){r.AFrameworkApplication.fa.Iu(Object(c.a)(this,this.IB,"onFullAppSettingsReady"))}IB(){const A=r.AFrameworkApplication.fa,y=!!r.AFrameworkApplication.ta.Pa&&4===r.AFrameworkApplication.ta.Pa.Ij;if(A.qa("WordEditorAutoSaveImprovementIsEnabled")||A.qa("PptEditorSaveStatusInHeaderEnabled")||y&&A.qa("SimplifiedReactRibbonUxIsEnabled")||A.qa("ExcelSaveStatusInHeaderEnabled")||A.qa("VisioSaveStatusInHeaderEnabled"))r.AFrameworkApplication.fa.qa("PostMessageEmbedded")&&
r.AFrameworkApplication.hideHeaderEmbedded?(this.wTc=this.$a.resolve("Common.App.SaveStatus.SaveStatusPostMessageHandler"))&&this.wTc.Ss():r.AFrameworkApplication.ta.Pa.Inf||(r.AFrameworkApplication.ta.Pa.Gs?(this.vSc=this.$a.resolve("Common.App.SaveStatus.ReactSaveStatusUIHandler"))&&this.vSc.initialize(A.qa("IsSkyDrive"),A.Xa("HostNameToIncludeInSavedStatus"),r.AFrameworkApplication.fa):(this.Tmb=this.$a.resolve("Common.App.SaveStatus.SaveStatusUIHandler"))&&this.Tmb.initialize(A.qa("IsSkyDrive"),
A.Xa("HostNameToIncludeInSavedStatus")))}dispose(){this.Tmb&&this.Tmb.Yv()}}Object(t.a)(v,"PackageManager",null,[4,5]);var B=a(249);a.d(E,"a",function(){return z});const z=()=>{Type.registerNamespace("Common.App.SaveStatus");B.a.instance.vi(new v)}},1257:function(t,E,a){var c=a(9);t=a(0);var b=a(82),e=a(222),f=a(226),d=a(29),h=a(21);class m{constructor(x,r){this.wke=this.JNc=!1;this.Cza=(u,v)=>{(null===v||void 0===v?0:v.BH)&&d.a.lTg([v.BH])&&(this.$Lb=!0)};this.Ro=()=>{this.$Lb=!1};this.Tc=(u,v)=>
{f.b(v)&&this.gfa(!0);this.$Lb=!1};this.$c=()=>{this.JN=this.$.JN;this.gfa()};this.FIf=()=>{this.US()};this.IHf=()=>{this.JN=this.$.JN};this.sDd=()=>{h.h(this.$).Da.jx(this.sDd);this.JN=this.$.JN};this.x1f=r;this.$=x;this.$.userOperationManager.tr(this.IHf);this.$.$k(this.$c);this.$.ea.ROg(this.FIf);this.$.ea.Xj(this.Tc);this.$.V0b(this.Cza);this.$.ea.EM(this.Ro);this.gfa()}get Fxi(){return this.$.ea?this.$.ea.vqf:!1}get JN(){return this.JNc}set JN(x){x?this.JNc=!0:h.h(this.$)&&h.h(this.$).Da&&(h.h(this.$).Da.r5()?
this.JNc=!1:h.h(this.$).Da.lw(this.sDd));this.US()}get $Lb(){return this.wke}set $Lb(x){this.wke=x;this.US()}dispose(){this.$&&(this.$.ul(this.$c),this.$.Qvc(this.Cza),this.$.userOperationManager&&this.$.userOperationManager.oo(this.IHf),this.$.ea&&(this.$.ea.gkj(this.FIf),this.$.ea.tk(this.Tc),this.$.ea.gS(this.Ro)),h.h(this.$)&&h.h(this.$).Da&&h.h(this.$).Da.jx(this.sDd))}gfa(x=!1){x=!this.$.isEditMode||x;this.x1f.gfa(x,this.$.isEditMode?3:1);this.US()}US(){this.$.isEditMode&&this.x1f.US(!this.JN&&
!this.Fxi&&!this.$Lb)}}Object(t.a)(m,"SaveStatusManager",null,[3]);var l=a(698);class w extends e.a{constructor(x){super();this.Mc=x;this.Fb()}create(){const x=b.a.instance;x.Rb("Common.App.SaveStatus.ISaveStatusUIHandler").execute(r=>{const u=new m(this.Mc,r);x.register(m,"Microsoft.Office.Excel.WebUI.Client.SaveStatus.SaveStatusManager").wc().Ac(()=>u);r=Object(l.a)(this.Mc.da,300,()=>x.resolve("Microsoft.Office.Excel.WebUI.Client.SaveStatus.SaveStatusManager"));this.ob(r)})}static la(x){x.da.Ga(299,
new w(x))}}Object(t.a)(w,"SaveStatusFactory",e.a,[]);a.d(E,"a",function(){return n});const n=()=>{c.a.Fa(w.la)}},1403:function(t,E,a){a.r(E);t=a(1201);a=a(1257);Type.registerNamespace("_Ewa");Object(t.a)();Object(a.a)()}}]);

//# sourceMappingURL=https://artifacts.dev.azure.com/office/_apis/symbol/symsrv/EwaDSEsNext.savestatus.js.map/44c36a802d170782200d59ca474fac10/EwaDSEsNext.savestatus.js.map