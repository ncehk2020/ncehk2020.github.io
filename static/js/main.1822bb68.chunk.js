(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,a,t){e.exports=t(228)},150:function(e,a,t){},154:function(e,a,t){},228:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(16),r=t.n(o),l=(t(150),t(10)),c=t(33),s=t.n(c),u=t(66),d=t(121),p=t(122),m=t(138),h=t(123),f=t(139),v=t(304),b=t(297),E=t(34),y=t.n(E),g=t(137),O=(t(154),t(136)),w=Object(O.a)({palette:{type:"dark",primary:{main:"#fbc308"},secondary:{main:"#c0392b"}},typography:{useNextVariants:!0,fontFamily:'"Noto Sans TC", "Roboto", "Helvetica", "Arial", sans-serif'}}),C=t(230),k=t(296),j=t(82),S=function(e){return{root:{backgroundColor:"#000",position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex"},progress:{flexGrow:1},appMenuDialogTitleRoot:{padding:"16px 10px 16px 18px"},fab:{position:"absolute",bottom:e.spacing(1.5),left:"50%",marginLeft:-26,color:e.palette.common.white,backgroundColor:e.palette.common.black,"&:hover":{backgroundColor:j.a[900]}},snackbar:{bottom:90},fill:{flex:1},qrcodeContainer:{backgroundColor:e.palette.common.white,padding:e.spacing(1),textAlign:"center"},linkBackground:{marginTop:e.spacing(2),marginBottom:e.spacing(2),paddingLeft:e.spacing(1),paddingRight:e.spacing(1),backgroundColor:j.a[900]},playerAppBar:{backgroundColor:"rgba(0,0,0,0.85)",opacity:0,"&:hover":{opacity:1}},playerAppBarTitle:{flexGrow:1,color:e.palette.common.white},playerAppBarMenuButton:{color:e.palette.common.white},dialogCenterActions:{justifyContent:"center"},shareButton:{marginTop:e.spacing(1)},shareButtonIcon:{marginRight:e.spacing(1)},badge:{padding:e.spacing(0,2)}}},A=t(14),x=t(52),M=t(56),L=t(265),N=t(266),V=t(45),D=t(305),P=t(262),T=t(268),R=t(299),W=t(259),J=t(260),F=t(261),H=t(301),B=t(263),I=t(264);function z(e){e.appOptions;var a=e.open,t=e.handleDialogAction,o=(e.allLives,Object(l.a)(e,["appOptions","open","handleDialogAction","allLives"]),Object(n.useState)(!1)),r=Object(A.a)(o,2),c=r[0],s=r[1];return i.a.createElement(R.a,{maxWidth:"xs",fullWidth:!0,open:a,onClose:function(){s(!1),t({action:"close"})()}},i.a.createElement(W.a,{disableTypography:!0},i.a.createElement(V.a,{noWrap:!0},"\u96b1\u85cf\u76f4\u64ad Hide Livestream")),i.a.createElement(J.a,null,i.a.createElement(F.a,{control:i.a.createElement(H.a,{checked:c,onChange:function(e){s(e.target.checked)}}),label:i.a.createElement(n.Fragment,null,i.a.createElement(V.a,null,"\u96b1\u85cf\u9019\u500b\u5a92\u9ad4\u7684\u6240\u6709\u76f4\u64ad"),i.a.createElement(V.a,null,"Hide all livestreams from this media"))})),i.a.createElement(B.a,null,i.a.createElement(I.a,{onClick:t({action:"close"}),color:"inherit"},"\u53d6\u6d88 Cancel"),i.a.createElement(I.a,{onClick:t(c?{action:"hideMedia"}:{action:"hideVideo"}),color:"primary"},"\u78ba\u8a8d Confirm")))}var _=Object(C.a)(S);function Q(e){var a=e.player,t=e.appOptions,o=e.handlePlayerToolbarAction,r=Object(l.a)(e,["player","appOptions","handlePlayerToolbarAction"]),c=_(r),s=Object(n.useState)(!1),u=Object(A.a)(s,2),d=u[0],p=u[1];return i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"player-app-bar-container"},i.a.createElement(L.a,{position:"sticky",classes:{root:c.playerAppBar}},i.a.createElement(N.a,{variant:"dense"},i.a.createElement(V.a,{variant:"caption",color:"inherit",className:c.playerAppBarTitle},a.videoTitle),i.a.createElement(D.a,{title:"Reload","aria-label":"Reload"},i.a.createElement(P.a,{classes:{root:c.playerAppBarMenuButton},color:"inherit",onClick:o({action:"reload"})},i.a.createElement(T.a,null,"sync"))),!(t&&t.customPlaylist)&&i.a.createElement(D.a,{title:"Hide","aria-label":"Hide"},i.a.createElement(P.a,{classes:{root:c.playerAppBarMenuButton},color:"inherit",onClick:function(){p(!0)}},i.a.createElement(T.a,null,"remove_from_queue")))))),i.a.createElement(z,{open:d,handleDialogAction:function(e){var a=e.action;Object(l.a)(e,["action"]);return function(){if("close"!==a)return"hideVideo"===a?(o({action:"hideVideo"})(),void p(!1)):"hideMedia"===a?(o({action:"hideMedia"})(),void p(!1)):void 0;p(!1)}},appOptions:t}))}var q="https://www.facebook.com/plugins/video.php?href={id}";function U(e){var a=e.player,t=e.containerWidth,o=e.containerHeight,r=e.appOptions,c=Object(l.a)(e,["player","containerWidth","containerHeight","appOptions"]),s=Object(n.useState)({width:-1,height:-1}),u=Object(A.a)(s,2),d=u[0],p=u[1],m=Object(n.useState)(!1),h=Object(A.a)(m,2),f=h[0],v=h[1];Object(n.useEffect)(function(){if(f){var e=setTimeout(function(){v(!1)},2e3);return function(){return clearTimeout(e)}}},[f]);var b=function(e){var t=e.action;Object(l.a)(e,["action"]);return function(){"reload"!==t?"hideVideo"!==t?"hideMedia"!==t||c.handlePlayerToolbarAction({action:t,source:a.media})():c.handlePlayerToolbarAction({action:t,live:a.video})():v(!0)}},E=d.width,y=d.height;return i.a.createElement(x.a,{bounds:!0,onResize:function(e){(Math.abs(e.bounds.height-d.height)>30||Math.abs(e.bounds.width-d.width)>30)&&p(e.bounds)}},function(e){var n=e.measureRef;return i.a.createElement("div",{ref:n,className:"playerContainer",style:{width:t+"%",height:o+"%"}},i.a.createElement("div",{className:"player facebook"},i.a.createElement(Q,{player:a,appOptions:r,handlePlayerToolbarAction:b}),!f&&i.a.createElement("iframe",{src:encodeURI(q.replace("{id}",a.videoSrc))+"&height="+parseInt(y)+"&width="+parseInt(E),title:a.videoTitle,frameBorder:"0",scrolling:"no",allowtransparency:"true",allow:"autoplay; encrypted-media",allowFullScreen:!M.isMobile||M.isMobile&&!M.isAndroid})))})}function G(e){var a=e.player,t=e.containerWidth,n=e.containerHeight;return i.a.createElement("div",{className:"playerContainer",style:{width:t+"%",height:n+"%"}},i.a.createElement("div",{className:"player"},i.a.createElement("iframe",{src:a.videoSrc,title:a.videoTitle,frameBorder:"0",scrolling:"no",allowtransparency:"true",allow:"autoplay; encrypted-media",allowFullScreen:!0})))}var $=1.5,K=1.05,X=.95,Y=X,Z=1.7,ee=.85,ae=Z,te=ee,ne=1.25,ie=.9,oe=1.2,re=1.8,le=.55,ce=oe,se=re;function ue(e){var a=e.showLives,t=e.appOptions,o=e.handlePlayerToolbarAction,r=(Object(l.a)(e,["showLives","appOptions","handlePlayerToolbarAction"]),Object(n.useState)({width:-1,height:-1})),c=Object(A.a)(r,2),s=c[0],u=c[1];if(!a)return null;var d=s.width,p=s.height,m=a.length,h=1,f=1;m>24?d/p<ce?m>27?(h=3,f=10):(h=3,f=9):d/p<se?(h=4,f=7):(h=5,f=5):m>20?d/p<le?(h=2,f=m/2):d/p<ce?m>21?(h=3,f=8):(h=3,f=7):d/p<se?(h=4,f=6):(h=6,f=4):m>18?d/p<le?(h=2,f=10):d/p<ce?(h=3,f=7):d/p<se?(h=4,f=5):(h=5,f=4):m>16?d/p<ie?(h=2,f=9):d/p<oe?(h=3,f=6):d/p<re?(h=4,f=5):(h=5,f=4):m>15?d/p<te?(h=2,f=8):d/p<ne?(h=3,f=6):(h=4,f=4):m>12?d/p<ee?m>14?(h=2,f=8):(h=2,f=7):d/p<ae?m>14?(h=3,f=5):(h=3,f=4):(h=4,f=4):m>9?d/p<Y?m>10?(h=2,f=6):(h=2,f=5):d/p<Z?(h=3,f=4):(h=4,f=3):m>6?d/p<X?m>8?(h=2,f=5):(h=2,f=4):(h=3,f=3):m>4?d/p<X?(h=2,f=3):(h=3,f=2):m>2?d/p<K?(h=1,f=m):(h=2,f=2):m>1?d/p<$?(h=1,f=2):(h=2,f=1):(h=1,f=1);var v=100/h,b=100/f;return i.a.createElement(x.a,{bounds:!0,onResize:function(e){u(e.bounds)}},function(e){var n=e.measureRef;return i.a.createElement("div",{ref:n,className:"playerList"},a.map(function(e,a){var n=e.type,r=Object(l.a)(e,["type"]),c={player:r,appOptions:t,handlePlayerToolbarAction:o,containerWidth:v,containerHeight:b};switch(n){case"facebook":return i.a.createElement(U,Object.assign({key:r.video},c));default:return i.a.createElement(G,Object.assign({key:r.video},c))}}))})}var de=t(302),pe=Object(C.a)(S);function me(e){var a=e.preloadReady,t=e.handleNewDataDialogResult,n=Object(l.a)(e,["preloadReady","handleNewDataDialogResult"]),o=pe(n);return i.a.createElement(de.a,{ClickAwayListenerProps:{onClickAway:function(){}},className:o.snackbar,open:a,onClose:t({confirmed:!1}),anchorOrigin:{vertical:"bottom",horizontal:"center"},message:"New Live(s) Found \u627e\u5230\u65b0\u76f4\u64ad",action:[i.a.createElement(I.a,{key:"watch",color:"secondary",onClick:t({confirmed:!0})},"Watch Now \u7acb\u5373\u6536\u770b"),i.a.createElement(P.a,{key:"close",color:"inherit",onClick:t({confirmed:!1})},i.a.createElement(T.a,null,"close"))]})}var he=t(29),fe=t(292),ve=t(287),be=t(300),Ee=t(269),ye=t(284),ge=t(285),Oe=t(293),we=t(288),Ce=t(289),ke=t(294),je=t(295),Se=t(128),Ae=t.n(Se),xe=t(129),Me=t(270),Le=t(271),Ne=t(272),Ve=t(273),De=t(274),Pe=t(275),Te=t(276),Re=t(277),We=t(278),Je=t(279),Fe=t(280),He=t(281),Be=t(282),Ie=Object(C.a)(S);function ze(e){var a=e.open,t=e.handleDialogAction,o=Object(l.a)(e,["open","handleDialogAction"]),r=Ie(o),c=Object(n.useState)({width:-1,height:-1}),s=Object(A.a)(c,2),u=s[0],d=s[1],p=Object(n.useState)(!1),m=Object(A.a)(p,2),h=m[0],f=m[1];return i.a.createElement(n.Fragment,null,i.a.createElement(x.a,{bounds:!0,onResize:function(e){d(e.bounds)}},function(e){var n=e.measureRef;return i.a.createElement(R.a,{maxWidth:"xs",fullWidth:!0,open:a,onClose:t({action:"close"})},i.a.createElement(W.a,{disableTypography:!0},i.a.createElement(V.a,{noWrap:!0},"\u5206\u4eab\u53cd\u9001\u4e2d\u76f4\u64ad\u53f0"),i.a.createElement(V.a,{noWrap:!0},"Share NCE Lives")),i.a.createElement(Ee.a,null),i.a.createElement(J.a,{ref:n},i.a.createElement(Me.a,{classes:{root:r.qrcodeContainer}},i.a.createElement(Ae.a,{size:u.width-144<u.height-24?u.width-144:u.height-24,value:window.location.href,logo:"./apple-touch-icon.png"})),i.a.createElement(xe.CopyToClipboard,{text:window.location.href,onCopy:function(){return f(!0)}},i.a.createElement(I.a,{fullWidth:!0,classes:{root:r.shareButton},size:"small",color:"primary"},i.a.createElement(T.a,{classes:{root:r.shareButtonIcon}},"file_copy"),"Copy Link \u8907\u5236\u9023\u7d50"))),i.a.createElement(Ee.a,null),i.a.createElement(B.a,{classes:{root:r.dialogCenterActions}},i.a.createElement(Le.a,{url:window.location.href},i.a.createElement(Ne.a,{size:32,round:!0})),i.a.createElement(Ve.a,{url:window.location.href},i.a.createElement(De.a,{size:32,round:!0})),i.a.createElement(Pe.a,{url:window.location.href},i.a.createElement(Te.a,{size:32,round:!0})),i.a.createElement(Re.a,{url:window.location.href},i.a.createElement(We.a,{size:32,round:!0})),i.a.createElement(Je.a,{url:window.location.href},i.a.createElement(Fe.a,{size:32,round:!0})),i.a.createElement(He.a,{url:window.location.href},i.a.createElement(Be.a,{size:32,round:!0}))))}),i.a.createElement(de.a,{className:r.snackbar,anchorOrigin:{vertical:"bottom",horizontal:"center"},open:h,autoHideDuration:3e3,onClose:function(){f(!1)},message:i.a.createElement("span",null,"\u5df2\u5c07\u9023\u7d50\u8907\u88fd\u5728\u526a\u8cbc\u7c3f Link is copied into clipboard")}))}var _e=t(283),Qe=t(303);function qe(e){var a=e.open,t=e.handleDialogAction,o=e.appOptions,r=(Object(l.a)(e,["open","handleDialogAction","appOptions"]),Object(n.useState)(null)),c=Object(A.a)(r,2),s=c[0],u=c[1];return i.a.createElement(R.a,{maxWidth:"xs",open:a,onClose:t({action:"close"})},i.a.createElement(W.a,{disableTypography:!0},i.a.createElement(V.a,{noWrap:!0},"\u66f4\u6539\u76f4\u64ad\u4e0a\u9650"),i.a.createElement(V.a,{noWrap:!0},"Change Maximum of Livestream")),i.a.createElement(J.a,{dividers:!0},i.a.createElement(_e.a,null,"\u66f4\u6539\u4e0a\u9650\u524d\uff0c\u8acb\u6ce8\u610f\u60a8\u7684\u6578\u64da\u4f7f\u7528\u91cf\u3002 ",i.a.createElement("br",null),"Please note that your data usage will increase after you selected to watch more livestreams."),i.a.createElement(Qe.a,{defaultValue:parseInt(o.visibleCount),getAriaValueText:function(e){return e},"aria-labelledby":"discrete-slider-small-steps",step:1,marks:[{value:4,label:"4"},{value:6,label:"6"},{value:9,label:"9"},{value:12,label:"12"},{value:16,label:"16"},{value:20,label:"20"},{value:25,label:"25"}],min:1,max:25,valueLabelDisplay:"auto",onChangeCommitted:function(e,a){u(a)}})),i.a.createElement(B.a,null,i.a.createElement(I.a,{onClick:t({action:"changeVisibleCount",newValue:s}),color:"primary"},"\u5132\u5b58 Save")))}var Ue=t(65),Ge=t(286),$e=t(81);function Ke(e){var a=e.appOptions,t=e.open,o=e.handleDialogAction,r=e.allLives,c=(Object(l.a)(e,["appOptions","open","handleDialogAction","allLives"]),Object(n.useState)(a.customPlaylist?JSON.parse(a.customPlaylist):[])),s=Object(A.a)(c,2),u=s[0],d=s[1],p=function(e){return function(){var a=u.indexOf(e),t=Object(Ue.a)(u);-1===a?t.push(e):t.splice(a,1),d(t)}};return i.a.createElement(R.a,{maxWidth:"xs",fullWidth:!0,open:t,onClose:function(){d(a.customPlaylist?JSON.parse(a.customPlaylist):[]),o({action:"close"})()}},i.a.createElement(W.a,{disableTypography:!0},i.a.createElement(V.a,{noWrap:!0},"\u81ea\u8a02\u76f4\u64ad\u983b\u9053"),i.a.createElement(V.a,{noWrap:!0},"Custom Livestreams Playlist")),i.a.createElement(ye.a,{style:{maxHeight:"100%",overflow:"auto"}},r.map(function(e){var a=e.type,t=Object(l.a)(e,["type"]);return i.a.createElement(ge.a,{key:t.video,dense:!0,button:!0,onClick:p(t.video)},i.a.createElement(Ge.a,null,i.a.createElement(ve.a,null,i.a.createElement($e.SocialIcon,{network:a,fgColor:"#FFFFFF"}))),i.a.createElement(we.a,{primary:t.videoTitle,secondary:t.mediaTitle}),i.a.createElement(Ce.a,null,i.a.createElement(H.a,{edge:"start",checked:-1!==u.indexOf(t.video),onChange:p(t.video),disableRipple:!0})))})),i.a.createElement(B.a,null,i.a.createElement(I.a,{onClick:function(){d([])},color:"inherit"},"\u6e05\u7a7a\u9078\u9805 Clear Options"),i.a.createElement(I.a,{onClick:o({action:"updateCustomPlaylist",newValue:u}),color:"primary"},"\u78ba\u8a8d Confirm")))}var Xe=t(298),Ye=t(290),Ze=t(291),ea=Object(C.a)(S);function aa(e){var a=e.open,t=e.handleDialogAction,o=(e.allLives,e.media,e.hiddenVideos),r=e.hiddenMedia,c=Object(l.a)(e,["open","handleDialogAction","allLives","media","hiddenVideos","hiddenMedia"]),s=ea(c),u=Object(n.useState)([]),d=Object(A.a)(u,2),p=d[0],m=d[1],h=Object(n.useState)([]),f=Object(A.a)(h,2),v=f[0],b=f[1],E=Object(n.useState)(0),y=Object(A.a)(E,2),g=y[0],O=y[1],w=function(e){return function(){var a=p.indexOf(e),t=Object(Ue.a)(p);-1===a?t.push(e):t.splice(a,1),m(t)}},C=function(e){return function(){var a=v.indexOf(e),t=Object(Ue.a)(v);-1===a?t.push(e):t.splice(a,1),b(t)}};return i.a.createElement(R.a,{maxWidth:"xs",fullWidth:!0,open:a,onClose:function(){m([]),b([]),t({action:"close"})()}},i.a.createElement(W.a,{disableTypography:!0},i.a.createElement(V.a,{noWrap:!0},"\u5df2\u96b1\u85cf\u7684\u76f4\u64ad"),i.a.createElement(V.a,{noWrap:!0},"Resume Hidden Livestreams")),i.a.createElement(Xe.a,{variant:"fullWidth",value:g,onChange:function(e,a){O(a)}},i.a.createElement(Ye.a,{label:i.a.createElement(Ze.a,{color:"primary",className:s.badge,badgeContent:o.length},"\u76f4\u64ad Live")}),i.a.createElement(Ye.a,{label:i.a.createElement(Ze.a,{color:"primary",className:s.badge,badgeContent:r.length},"\u5a92\u9ad4 Media")})),i.a.createElement(ye.a,{hidden:0!==g,style:{maxHeight:"100%",overflow:"auto"}},o.map(function(e){var a=e.type,t=Object(l.a)(e,["type"]);return i.a.createElement(ge.a,{key:t.video,dense:!0,button:!0,onClick:w(t.video)},i.a.createElement(Ge.a,null,i.a.createElement(ve.a,null,i.a.createElement($e.SocialIcon,{network:a,fgColor:"#FFFFFF"}))),i.a.createElement(we.a,{primary:t.videoTitle,secondary:t.mediaTitle}),i.a.createElement(Ce.a,null,-1!==p.indexOf(t.video)?i.a.createElement(fe.a,{container:!0,spacing:1,alignItems:"center"},i.a.createElement(fe.a,{item:!0},i.a.createElement(be.a,{only:"xs"},i.a.createElement(V.a,{variant:"caption",color:"primary",onClick:w(t.video)},"\u986f\u793a Visbile"))),i.a.createElement(fe.a,{item:!0},i.a.createElement(T.a,{color:"primary",onClick:w(t.video)},"visibility"))):i.a.createElement(fe.a,{container:!0,spacing:1,alignItems:"center"},i.a.createElement(fe.a,{item:!0},i.a.createElement(be.a,{only:"xs"},i.a.createElement(V.a,{variant:"caption",onClick:w(t.video)},"\u96b1\u85cf Hidden"))),i.a.createElement(fe.a,{item:!0,onClick:w(t.video)},i.a.createElement(T.a,null,"visibility_off")))))})),i.a.createElement(ye.a,{hidden:1!==g,style:{maxHeight:"100%",overflow:"auto"}},r.map(function(e){return i.a.createElement(ge.a,{key:e.media,dense:!0,button:!0,onClick:C(e.media)},i.a.createElement(we.a,{primary:e.mediaTitle}),i.a.createElement(Ce.a,null,-1!==v.indexOf(e.media)?i.a.createElement(fe.a,{container:!0,spacing:1,alignItems:"center"},i.a.createElement(fe.a,{item:!0},i.a.createElement(V.a,{variant:"caption",color:"primary",onClick:C(e.media)},"\u986f\u793a Visbile")),i.a.createElement(fe.a,{item:!0},i.a.createElement(T.a,{color:"primary",onClick:C(e.media)},"visibility"))):i.a.createElement(fe.a,{container:!0,spacing:1,alignItems:"center"},i.a.createElement(fe.a,{item:!0},i.a.createElement(V.a,{variant:"caption",onClick:C(e.media)},"\u96b1\u85cf Hidden")),i.a.createElement(fe.a,{item:!0,onClick:C(e.media)},i.a.createElement(T.a,null,"visibility_off")))))})),i.a.createElement(B.a,null,i.a.createElement(I.a,{onClick:t({action:"resumeHiddenLivestream",resumeVideos:p,resumeMedia:v}),color:"primary"},"\u78ba\u8a8d Confirm")))}var ta=Object(C.a)(S);function na(e){var a=e.open,t=e.handleAppMenuAction,o=e.appOptions,r=e.allLives,c=e.media,s=Object(l.a)(e,["open","handleAppMenuAction","appOptions","allLives","media"]),u=ta(s),d=Object(he.a)(),p=Object(n.useState)(!1),m=Object(A.a)(p,2),h=m[0],f=m[1],v=Object(n.useState)(!1),b=Object(A.a)(v,2),E=b[0],y=b[1],g=Object(n.useState)(!1),O=Object(A.a)(g,2),w=O[0],C=O[1],k=Object(n.useState)(!1),j=Object(A.a)(k,2),S=j[0],x=j[1],L={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},N=[];if(o.hideVideos){var D=JSON.parse(o.hideVideos)||[];r.forEach(function(e){D.includes(e.video)&&N.push(e)})}var J=[];o.hideMedia&&(JSON.parse(o.hideMedia)||[]).forEach(function(e){c[e]&&J.push(c[e])});return i.a.createElement(n.Fragment,null,i.a.createElement(R.a,{open:a,maxWidth:"xs",fullWidth:!0,onClose:t({action:"close"})},i.a.createElement(W.a,{disableTypography:!0,classes:{root:u.appMenuDialogTitleRoot}},i.a.createElement(fe.a,{container:!0,spacing:2,justify:"space-between"},i.a.createElement(fe.a,{item:!0},i.a.createElement(fe.a,{container:!0,spacing:2,justify:"space-between",alignItems:"center"},i.a.createElement(fe.a,{item:!0},i.a.createElement(ve.a,{src:"./apple-touch-icon.png"})),i.a.createElement(fe.a,{item:!0},i.a.createElement(V.a,{noWrap:!0},"\u53cd\u9001\u4e2d\u76f4\u64ad\u53f0"),i.a.createElement(V.a,{noWrap:!0},"No China Extradition Live")))),i.a.createElement(be.a,{only:"xs"},i.a.createElement(fe.a,{item:!0},i.a.createElement(P.a,{onClick:function(){f(!0)}},i.a.createElement(T.a,null,"share")))))),i.a.createElement(Ee.a,null),i.a.createElement(ye.a,{component:"nav","aria-label":"Main mailbox folders"},i.a.createElement(be.a,{smUp:!0},i.a.createElement(ge.a,{button:!0,onClick:function(){f(!0)}},i.a.createElement(Oe.a,null,i.a.createElement(T.a,null,"share")),i.a.createElement(we.a,{primary:"\u5206\u4eab\u53cd\u9001\u4e2d\u76f4\u64ad\u53f0",secondary:"Share NCE Lives"}))),i.a.createElement(ge.a,{button:!0,onClick:t({action:"checkSource"})},i.a.createElement(Oe.a,null,i.a.createElement(T.a,null,"sync")),i.a.createElement(we.a,{primary:"\u6aa2\u67e5\u65b0\u76f4\u64ad\u4f86\u6e90",secondary:"Check for New Livestreams"})),!(o&&o.customPlaylist)&&i.a.createElement(ge.a,{button:!0,onClick:function(){y(!0)}},i.a.createElement(Oe.a,null,i.a.createElement(T.a,null,"view_module")),i.a.createElement(we.a,{primary:"\u66f4\u6539\u76f4\u64ad\u4e0a\u9650",secondary:"Change Maximum of Livestreams"})),(N&&N.length>0||J&&J.length>0)&&i.a.createElement(ge.a,{button:!0,onClick:function(){x(!0)}},i.a.createElement(Oe.a,null,i.a.createElement(T.a,null,"visibility_off")),i.a.createElement(we.a,{primary:"\u5df2\u96b1\u85cf\u7684\u76f4\u64ad",secondary:"Resume Hidden Livestreams"})),i.a.createElement(ge.a,{button:!0,onClick:function(){C(!0)}},i.a.createElement(Oe.a,null,i.a.createElement(T.a,null,"subscriptions")),i.a.createElement(we.a,{primary:"\u81ea\u8a02\u76f4\u64ad\u983b\u9053",secondary:"Custom Livestreams Playlist"}),o&&o.customPlaylist&&i.a.createElement(Ce.a,null,i.a.createElement(T.a,null,"check_circle"))),i.a.createElement(ge.a,{button:!0,onClick:t({action:"popupWindow"})},i.a.createElement(Oe.a,null,i.a.createElement(T.a,null,"open_in_new")),M.isMobile?i.a.createElement(we.a,{primary:"\u5728\u700f\u89bd\u5668\u958b\u5553\u76f4\u64ad\u53f0",secondary:"Open NCE Lives in Browser"}):i.a.createElement(we.a,{primary:"\u5f48\u51fa\u65b0\u8996\u7a97",secondary:"Popup New Window"})))),i.a.createElement(ze,{open:h,handleDialogAction:function(e){var a=e.action;return function(){"close"===a&&f(!1)}}}),i.a.createElement(qe,{open:E,handleDialogAction:function(e){var a=e.action,n=e.newValue;return function(){"close"===a&&y(!1),"changeVisibleCount"===a&&(t({action:"changeVisibleCount",newValue:n||o.visibleCount})(),y(!1))}},appOptions:o}),i.a.createElement(Ke,{open:w,handleDialogAction:function(e){var a=e.action,n=e.newValue;return function(){"close"===a&&C(!1),"updateCustomPlaylist"===a&&(t({action:"updateCustomPlaylist",newValue:n||[]})(),C(!1))}},allLives:r,appOptions:o}),i.a.createElement(aa,{open:S,handleDialogAction:function(e){var a=e.action,n=Object(l.a)(e,["action"]);return function(){if("close"!==a){if("resumeHiddenLivestream"===a){if(0===n.resumeVideos.length&&0===n.resumeMedia.length)return void x(!1);var e=[].concat(N),i=[].concat(J);n.resumeVideos.forEach(function(a){e=e.filter(function(e){return e.video!==a})});var o=e.map(function(e){return e.video});n.resumeMedia.forEach(function(e){i=i.filter(function(a){return a.media!==e})});var r=i.map(function(e){return e.media});return t({action:"updateHiddenLivestream",newValue:{hiddenVideos:o,hiddenMedia:r}})(),void x(!1)}}else x(!1)}},allLives:r,media:c,hiddenVideos:N,hiddenMedia:J}),i.a.createElement(ke.a,{in:!0,timeout:L,style:{transitionDelay:"".concat(L.exit,"ms")},unmountOnExit:!0},i.a.createElement(je.a,{className:u.fab,color:"inherit",onClick:t({action:"open"})},i.a.createElement(T.a,null,"menu"))))}var ia=Object(C.a)(S);function oa(e){var a=e.showLives,t=e.loading,n=e.appOptions,o=e.allLives,r=e.media,c=e.preloadReady,s=e.preloadData,u=e.handleNewDataDialogResult,d=e.handlePlayerToolbarAction,p=e.showAppMenu,m=e.handleAppMenuAction,h=Object(l.a)(e,["showLives","loading","appOptions","allLives","media","preloadReady","preloadData","handleNewDataDialogResult","handlePlayerToolbarAction","showAppMenu","handleAppMenuAction"]),f=ia(h),v={preloadReady:c,preloadData:s,handleNewDataDialogResult:u},b={open:p,handleAppMenuAction:m,appOptions:n,allLives:o,media:r};return i.a.createElement("div",{className:f.root},t?i.a.createElement("div",{className:f.progress},i.a.createElement(k.a,null)):i.a.createElement(ue,{showLives:a,handlePlayerToolbarAction:d,appOptions:n}),i.a.createElement(me,v),i.a.createElement(na,b))}var ra=Object(g.a)(),la="https://ncehk2019.github.io/nce-live-datasrc/current.json",ca=function(e){function a(){var e;return Object(d.a)(this,a),(e=Object(m.a)(this,Object(h.a)(a).call(this))).showAppMenu=function(){e.setState({showAppMenu:!0})},e.refresh=Object(u.a)(s.a.mark(function a(){var t,n,i,o,r,l,c,u,d,p,m,h,f,v;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.setState({loading:!0}),a.prev=1,a.next=4,fetch(la+"?time="+new Date);case 4:return t=a.sent,a.next=7,t.json();case 7:n=a.sent,i=n.config,o=n.current,r=n.sources,l=n.media,c=i.defaultVisibleCount,u=c,d=o,p=[],m=[],e.options&&e.options.visibleCount?u=e.options.visibleCount:(e.options.visibleCount=u,e.options&&e.options.customPlaylist&&(u=e.options.customPlaylist.length)),h=[],e.options&&e.options.customPlaylist&&(h=JSON.parse(e.options.customPlaylist)),f=[],e.options&&e.options.hideVideos&&(f=JSON.parse(e.options.hideVideos)),v=[],e.options&&e.options.hideMedia&&(v=JSON.parse(e.options.hideMedia)),d.forEach(function(e){h.length>0?h.includes(e.video)&&p.push(e):p.length<u&&(f.includes(e.video)||v.includes(e.media)||p.push(e)),m.push(e)}),e.setState({loading:!1,showLives:p,allLives:m,sources:r,media:l}),a.next=29;break;case 25:a.prev=25,a.t0=a.catch(1),console.log("refresh error",a.t0),e.setState({loading:!1,showLives:[],allLives:[],sources:[],media:[]});case 29:case"end":return a.stop()}},a,null,[[1,25]])})),e.autoCheckSource=function(){e.cancelAutoCheckSourceJob(),e.autoCheckSourceJob=setInterval(Object(u.a)(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.checkSource();case 2:case"end":return a.stop()}},a)})),3e4)},e.cancelAutoCheckSourceJob=function(){e.autoCheckSourceJob&&clearInterval(e.autoCheckSourceJob)},e.checkSource=Object(u.a)(s.a.mark(function a(){var t,n,i,o,r,c,u,d,p,m,h,f,v,b,E;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.state,n=t.showLives,!t.preloadReady&&!e.preloadFetching){a.next=3;break}return a.abrupt("return");case 3:return a.prev=3,e.preloadFetching=!0,a.next=7,fetch(la+"?time="+new Date);case 7:return i=a.sent,a.next=10,i.json();case 10:o=a.sent,r=o.config,c=o.current,u=o.sources,d=o.media,p=r.defaultVisibleCount,m=p,e.options&&e.options.visibleCount?m=e.options.visibleCount:e.options.visibleCount=m,h=[],f=[],v=[],e.options&&e.options.customPlaylist&&(v=JSON.parse(e.options.customPlaylist)),b=[],e.options&&e.options.hideVideos&&(b=JSON.parse(e.options.hideVideos)),E=[],e.options&&e.options.hideMedia&&(E=JSON.parse(e.options.hideMedia)),c.forEach(function(e){v.length>0?v.includes(e.video)&&h.push(e):h.length<m&&(b.includes(e.video)||E.includes(e.media)||h.push(e)),f.push(e)}),JSON.stringify(n.map(function(e){e.videoTitle;return Object(l.a)(e,["videoTitle"])}))!==JSON.stringify(h.map(function(e){e.videoTitle;return Object(l.a)(e,["videoTitle"])}))?e.setState({preloadReady:!0,preloadData:h,allLives:f,sources:u,media:d}):e.setState({allLives:f}),a.next=31;break;case 27:a.prev=27,a.t0=a.catch(3),console.log("checkSource error",a.t0),e.setState({preloadReady:!1,preloadData:[]});case 31:e.preloadFetching=!1;case 32:case"end":return a.stop()}},a,null,[[3,27]])})),e.handleNewDataDialogResult=function(a){var t=a.confirmed;return function(){t?e.setState({showLives:e.state.preloadData,preloadReady:!1,preloadData:[]}):(e.cancelAutoCheckSourceJob(),e.setState({preloadReady:!1,preloadData:[]}))}},e.handleAppMenuAction=function(a){var t=a.action,n=a.newValue;Object(l.a)(a,["action","newValue"]);return function(){if("close"!==t)if("open"!==t){if("changeVisibleCount"===t)return e.options.visibleCount=n,ra.push({search:"?visibleCount="+n}),e.refresh(),void e.setState({showAppMenu:!1});if("checkSource"===t)return e.setState({showAppMenu:!1}),e.checkSource(),void e.autoCheckSource();if("updateCustomPlaylist"===t)return e.options.customPlaylist=n,ra.push({search:n.length>0?"?customPlaylist="+JSON.stringify(n):"?visibleCount="+e.options.visibleCount}),void e.setState({showAppMenu:!1});if("popupWindow"!==t){if("updateHiddenLivestream"===t){var a=y.a.parse(ra.location.search,{ignoreQueryPrefix:!0});return n.hiddenVideos.length>0?a.hideVideos=JSON.stringify(n.hiddenVideos):delete a.hideVideos,n.hiddenMedia.length>0?a.hideMedia=JSON.stringify(n.hiddenMedia):delete a.hideMedia,void ra.push({search:y.a.stringify(a)})}}else window.open(document.location.href,"_blank","fullscreen=yes,directories=no,location=no,toolbar=no,scrollbars=no,menubar=no")}else e.setState({showAppMenu:!0});else e.setState({showAppMenu:!1})}},e.handlePlayerToolbarAction=function(e){var a=e.action,t=Object(l.a)(e,["action"]);return function(){if("hideVideo"===a){var e=y.a.parse(ra.location.search,{ignoreQueryPrefix:!0}),n=[];return e.hideVideos&&(n=JSON.parse(e.hideVideos)||[]),void(n.includes(t.live)||(n.push(t.live),e.hideVideos=JSON.stringify(n),ra.push({search:y.a.stringify(e)})))}if("hideMedia"===a){var i=y.a.parse(ra.location.search,{ignoreQueryPrefix:!0}),o=[];return i.hideMedia&&(o=JSON.parse(i.hideMedia)||[]),void(o.includes(t.live)||(o.push(t.live),i.hideMedia=JSON.stringify(o),ra.push({search:y.a.stringify(i)})))}}},e.state={loading:!1,showLives:[],preloadReady:!1,preloadData:[],showAppMenu:!1,allLives:[],media:[],sources:[]},e.preloadFetching=!1,e.options=y.a.parse(ra.location.search,{ignoreQueryPrefix:!0}),e.unlistenHistory=ra.listen(function(){var a=y.a.parse(ra.location.search,{ignoreQueryPrefix:!0});e.options&&(a.visibleCount===e.options.visibleCount&&a.customPlaylist===e.options.customPlaylist&&a.hideVideos===e.options.hideVideos&&a.hideMedia===e.options.hideMedia||(e.options.visibleCount=a.visibleCount,e.options.customPlaylist=a.customPlaylist,e.options.hideVideos=a.hideVideos,e.options.hideMedia=a.hideMedia,e.refresh()))}),e}return Object(f.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.refresh(),this.autoCheckSource();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.cancelAutoCheckSourceJob(),this.unlistenHistory()}},{key:"render",value:function(){return i.a.createElement(v.a,{theme:w},i.a.createElement(b.a,null),i.a.createElement(oa,Object.assign({},this.state,{appOptions:this.options,handleNewDataDialogResult:this.handleNewDataDialogResult,handleAppMenuAction:this.handleAppMenuAction,handlePlayerToolbarAction:this.handlePlayerToolbarAction})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(ca,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[145,1,2]]]);