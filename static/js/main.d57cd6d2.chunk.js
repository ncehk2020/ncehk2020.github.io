(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){e.exports=a(227)},148:function(e,t,a){},152:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(19),l=a.n(i),r=(a(148),a(37)),c=a.n(r),s=a(45),u=a(66),p=a(13),h=a(14),m=a(16),d=a(15),b=a(17),f=a(293),g=a(102),v=a.n(g),E=a(140),y=(a(152),a(139)),C=Object(y.a)({palette:{type:"dark"},typography:{useNextVariants:!0,fontFamily:'"Noto Sans TC", "Roboto", "Helvetica", "Arial", sans-serif'}}),w=a(27),O=a(5),k=a(287),j=a(81),S=function(e){return{root:{backgroundColor:"#000",position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex"},progress:{flexGrow:1},appMenuDialogTitleRoot:{padding:"16px 10px 16px 18px"},fab:{position:"absolute",bottom:e.spacing(1.5),left:"50%",marginLeft:-26,color:e.palette.common.white,backgroundColor:e.palette.common.black,"&:hover":{backgroundColor:j.a[900]}},snackbar:{bottom:90},fill:{flex:1},qrcodeContainer:{backgroundColor:e.palette.common.white,padding:e.spacing(1)},linkBackground:{marginTop:e.spacing(2),marginBottom:e.spacing(2),paddingLeft:e.spacing(1),paddingRight:e.spacing(1),backgroundColor:j.a[900]}}},D=a(33),x=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).resize=function(e){(Math.abs(e.bounds.height-a.state.dimensions.height)>30||Math.abs(e.bounds.width-a.state.dimensions.width)>30)&&(document.fullscreen||window.innerWidth===window.screen.width&&window.innerHeight===window.screen.height||a.setState({dimensions:e.bounds}))},a.state={dimensions:{width:-1,height:-1}},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.player,a=e.containerWidth,n=e.containerHeight,i=this.state.dimensions,l=i.width,r=i.height;return o.a.createElement(D.a,{bounds:!0,onResize:this.resize},function(e){var i=e.measureRef;return o.a.createElement("div",{ref:i,className:"playerContainer",style:{width:a+"%",height:n+"%"}},o.a.createElement("div",{className:"player facebook"},o.a.createElement("iframe",{src:encodeURI("https://www.facebook.com/plugins/video.php?href={id}".replace("{id}",t["#id"]))+"&height="+parseInt(r)+"&width="+parseInt(l),className:t["#v"]?"v":"h",title:t["#title"],frameBorder:"0",scrolling:"no",allowtransparency:"true",allow:"encrypted-media",allowFullScreen:!0})))})}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1},initCompleted:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({initCompleted:!0})},1e4)}},{key:"render",value:function(){var e=this,t=this.props,a=t.player,n=t.containerWidth,i=t.containerHeight;return o.a.createElement(D.a,{bounds:!0,onResize:this.resize},function(t){var l=t.measureRef;return o.a.createElement("div",{className:"playerContainer",style:{width:n+"%",height:i+"%"}},o.a.createElement("div",{className:"player yahoo"},o.a.createElement("iframe",{ref:l,onMouseOver:function(){e.setState({initCompleted:!0})},src:a["#id"],className:a["#v"]?"v":"h",title:a["#title"],frameBorder:"0",scrolling:"no",allowtransparency:"true",allow:"encrypted-media",allowFullScreen:!0,style:e.state.initCompleted?{}:{flex:0,width:320}})))})}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1}},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.player,a=e.containerWidth,n=e.containerHeight;return o.a.createElement(D.a,{bounds:!0,onResize:this.resize},function(e){var i=e.measureRef;return o.a.createElement("div",{ref:i,className:"playerContainer",style:{width:a+"%",height:n+"%"}},o.a.createElement("div",{className:"player"},o.a.createElement("iframe",{src:t["#id"],className:t["#v"]?"v":"h",title:t["#title"],frameBorder:"0",scrolling:"no",allowtransparency:"true",allow:"encrypted-media",allowFullScreen:!0})))})}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1}},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.data;if(!e)return null;var t=this.state.dimensions,a=t.width,n=t.height,i=e.length,l=1,r=1;i>1&&(2===i?l=2:(1.2*a<n&&i<=4?(l=1,r=i):(l=2,r=2),i>4&&(i<=6?l=3:i>20?(l=5,r=5):i>16?(l=5,r=4):i>12?(l=4,r=4):i>9?(l=4,r=3):(l=3,r=3))));var c=100/l,u=100/r;return(1.2*a>=n||2===i||i>4)&&a<n&&(c=100/r,u=100/l),o.a.createElement(D.a,{bounds:!0,onResize:this.resize},function(t){var a=t.measureRef;return o.a.createElement("div",{ref:a,className:"playerList"},e.map(function(e,t){var a=e.type,n=Object(s.a)(e,["type"]),i={player:n,containerWidth:c,containerHeight:u};switch(a){case"facebook":return o.a.createElement(x,Object.assign({key:n["#id"]},i));case"yahoo":return o.a.createElement(A,Object.assign({key:n["#id"]},i));default:return o.a.createElement(N,Object.assign({key:n["#id"]},i))}}))})}}]),t}(n.Component),R=a(292),M=a(256),V=a(257),z=a(258),W=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.preloadReady,a=e.handleNewDataDialogResult,n=e.classes;return o.a.createElement(R.a,{ClickAwayListenerProps:{onClickAway:function(){}},className:n.snackbar,open:t,onClose:a({confirmed:!1}),anchorOrigin:{vertical:"bottom",horizontal:"center"},message:"New Live(s) Found \u627e\u5230\u65b0\u76f4\u64ad",action:[o.a.createElement(M.a,{key:"watch",color:"secondary",onClick:a({confirmed:!0})},"Watch Now \u7acb\u5373\u6536\u770b"),o.a.createElement(V.a,{key:"close",color:"inherit",onClick:a({confirmed:!1})},o.a.createElement(z.a,null,"close"))]})}}]),t}(n.Component),F=Object(w.a)(Object(O.a)(S,{withTheme:!0}))(W),L=a(288),T=a(259),J=a(263),H=a(56),I=a(290),B=a(260),q=a(278),U=a(279),Q=a(284),_=a(282),G=a(283),$=a(285),K=a(286),X=a(128),Y=a.n(X),Z=a(129),ee=a(261),te=a(262),ae=a(229),ne=a(291),oe=a(276),ie=a(264),le=a(265),re=a(266),ce=a(267),se=a(268),ue=a(269),pe=a(270),he=a(271),me=a(272),de=a(273),be=a(274),fe=a(275),ge=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.handleCloseCopiedMsg=function(){a.setState({copied:!1})},a.state={dimensions:{width:-1,height:-1},copied:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.dimensions,i=t.copied,l=this.props,r=l.open,c=l.handleDialogAction,s=l.classes;return o.a.createElement(n.Fragment,null,o.a.createElement(L.a,{maxWidth:"xs",open:r,onClose:c({action:"close"})},o.a.createElement(T.a,{disableTypography:!0},o.a.createElement(H.a,{noWrap:!0},"\u5206\u4eab\u53cd\u9001\u4e2d\u76f4\u64ad\u53f0"),o.a.createElement(H.a,{noWrap:!0},"Share NCE Lives")),o.a.createElement(B.a,null),o.a.createElement(ee.a,null,o.a.createElement(te.a,{classes:{root:s.qrcodeContainer}},o.a.createElement(D.a,{bounds:!0,onResize:this.resize},function(e){var t=e.measureRef;return o.a.createElement("div",{ref:t},o.a.createElement(Y.a,{size:a.width,value:window.location.href,logo:"./apple-touch-icon.png"}))})),o.a.createElement(ae.a,{square:!0,classes:{root:s.linkBackground}},o.a.createElement(J.a,{container:!0,spacing:1,alignItems:"center"},o.a.createElement(J.a,{item:!0},o.a.createElement(z.a,null,"link")),o.a.createElement(J.a,{item:!0,classes:{item:s.fill}},o.a.createElement(ne.a,{fullWidth:!0,readOnly:!0,value:window.location.href}))))),o.a.createElement(B.a,null),o.a.createElement(ee.a,null,o.a.createElement(J.a,{container:!0,spacing:1},o.a.createElement(J.a,{item:!0},o.a.createElement(ie.a,{url:window.location.href},o.a.createElement(le.a,{size:32,round:!0}))),o.a.createElement(J.a,{item:!0},o.a.createElement(re.a,{url:window.location.href},o.a.createElement(ce.a,{size:32,round:!0}))),o.a.createElement(J.a,{item:!0},o.a.createElement(se.a,{url:window.location.href},o.a.createElement(ue.a,{size:32,round:!0}))),o.a.createElement(J.a,{item:!0},o.a.createElement(pe.a,{url:window.location.href},o.a.createElement(he.a,{size:32,round:!0}))),o.a.createElement(J.a,{item:!0},o.a.createElement(me.a,{url:window.location.href},o.a.createElement(de.a,{size:32,round:!0}))),o.a.createElement(J.a,{item:!0},o.a.createElement(be.a,{url:window.location.href},o.a.createElement(fe.a,{size:32,round:!0}))))),o.a.createElement(B.a,null),o.a.createElement(oe.a,null,o.a.createElement(M.a,{onClick:c({action:"close"}),color:"inherit"},"\u95dc\u9589 Close"),o.a.createElement(Z.CopyToClipboard,{text:window.location.href,onCopy:function(){return e.setState({copied:!0})}},o.a.createElement(M.a,{color:"secondary"},"\u8907\u88fd\u9023\u7d50 Copy Link")))),o.a.createElement(R.a,{className:s.snackbar,anchorOrigin:{vertical:"bottom",horizontal:"center"},open:i,autoHideDuration:3e3,onClose:this.handleCloseCopiedMsg,message:o.a.createElement("span",null,"\u5df2\u5c07\u9023\u7d50\u8907\u88fd\u5728\u526a\u8cbc\u7c3f Link is copied into clipboard")}))}}]),t}(n.Component),ve=Object(w.a)(Object(O.a)(S,{withTheme:!0}))(ge),Ee=a(277),ye=a(294),Ce=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={newVisibleCount:null},e}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.open,n=t.handleDialogAction,i=t.appOptions,l=this.state.newVisibleCount;return o.a.createElement(L.a,{maxWidth:"xs",open:a,onClose:n({action:"close"})},o.a.createElement(T.a,{disableTypography:!0},o.a.createElement(H.a,{noWrap:!0},"\u66f4\u6539\u76f4\u64ad\u4e0a\u9650"),o.a.createElement(H.a,{noWrap:!0},"Change Maximum of Livestream")),o.a.createElement(ee.a,{dividers:!0},o.a.createElement(Ee.a,null,"\u8acb\u6ce8\u610f\uff01\u6578\u64da\u6d41\u91cf\u53d6\u6c7a\u65bc\u60a8\u6536\u770b\u76f4\u64ad\u7684\u6578\u91cf\u3002 ",o.a.createElement("br",null),"Please note that your data usage will increase according to the number of livestreams playing."),o.a.createElement(ye.a,{defaultValue:parseInt(i.visibleCount),getAriaValueText:function(e){return e},"aria-labelledby":"discrete-slider-small-steps",step:1,marks:[{value:4,label:"4"},{value:6,label:"6"},{value:9,label:"9"},{value:12,label:"12"},{value:16,label:"16"},{value:20,label:"20"},{value:25,label:"25"}],min:1,max:25,valueLabelDisplay:"auto",onChangeCommitted:function(t,a){e.setState({newVisibleCount:a})}})),o.a.createElement(oe.a,null,o.a.createElement(M.a,{onClick:n({action:"changeVisibleCount",newValue:l}),color:"inherit"},"\u5132\u5b58 Save")))}}]),t}(n.Component),we=Object(w.a)(Object(O.a)(S,{withTheme:!0}))(Ce),Oe=a(141),ke=a(280),je=a(281),Se=a(289),De=a(138),xe=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).resetState=function(){a.props.appOptions.customPlaylist?a.setState({newVisibleCount:null,checked:JSON.parse(a.props.appOptions.customPlaylist)}):a.setState({newVisibleCount:null,checked:[]})},a.handleCheck=function(e){return function(){var t=a.state.checked.indexOf(e),n=Object(Oe.a)(a.state.checked);-1===t?n.push(e):n.splice(t,1),a.setState({checked:n})}},a.props.appOptions.customPlaylist?a.state={newVisibleCount:null,checked:JSON.parse(a.props.appOptions.customPlaylist)}:a.state={newVisibleCount:null,checked:[]},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.open,n=t.handleDialogAction,i=t.allData,l=this.state.checked;return o.a.createElement(L.a,{maxWidth:"xs",fullWidth:!0,open:a,onClose:function(){e.resetState(),n({action:"close"})()}},o.a.createElement(T.a,{disableTypography:!0},o.a.createElement(H.a,{noWrap:!0},"\u81ea\u8a02\u76f4\u64ad\u983b\u9053"),o.a.createElement(H.a,{noWrap:!0},"Custom Livestreams Playlist")),o.a.createElement(q.a,{style:{maxHeight:"100%",overflow:"auto"}},i.map(function(t){var a=t.type,n=Object(s.a)(t,["type"]);return o.a.createElement(U.a,{key:n["#id"],dense:!0,button:!0,onClick:e.handleCheck(n["#title"])},o.a.createElement(ke.a,null,o.a.createElement(je.a,null,o.a.createElement(De.SocialIcon,{network:a,fgColor:"#FFFFFF"}))),o.a.createElement(_.a,{primary:n["#title"],secondary:n["#source"]}),o.a.createElement(G.a,null,o.a.createElement(Se.a,{edge:"start",checked:-1!==l.indexOf(n["#title"]),onChange:e.handleCheck(n["#title"]),disableRipple:!0})))})),o.a.createElement(oe.a,null,o.a.createElement(M.a,{onClick:function(){e.setState({checked:[]})},color:"inherit"},"\u6e05\u7a7a\u9078\u9805 Clear Options"),o.a.createElement(M.a,{onClick:n({action:"updateCustomPlaylist",newValue:this.state.checked}),color:"inherit"},"\u78ba\u8a8d Confirm")))}}]),t}(n.Component),Ae=Object(w.a)(Object(O.a)(S,{withTheme:!0}))(xe),Ne=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).handleShareDialogAction=function(t){var a=t.action;return function(){"close"===a&&e.setState({openShareDialog:!1})}},e.handleVisibleCountDialogAction=function(t){var a=t.action,n=t.newValue;return function(){"close"===a&&e.setState({openChangeVisibleCountDialog:!1}),"changeVisibleCount"===a&&(e.props.handleAppMenuAction({action:"changeVisibleCount",newValue:n||e.props.appOptions.visibleCount})(),e.setState({openChangeVisibleCountDialog:!1}))}},e.handlePlaylistDialogAction=function(t){var a=t.action,n=t.newValue;return function(){"close"===a&&e.setState({openCustomPlaylistDialog:!1}),"updateCustomPlaylist"===a&&(e.props.handleAppMenuAction({action:"updateCustomPlaylist",newValue:n||[]})(),e.setState({openCustomPlaylistDialog:!1}))}},e.state={openChangeVisibleCountDialog:!1,openShareDialog:!1,openCustomPlaylistDialog:!1},e}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.open,i=t.handleAppMenuAction,l=t.classes,r=t.theme,c=t.appOptions,s=t.allData,u=this.state,p=u.openChangeVisibleCountDialog,h=u.openShareDialog,m=u.openCustomPlaylistDialog,d={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen};return o.a.createElement(n.Fragment,null,o.a.createElement(L.a,{open:a,maxWidth:"xs",fullWidth:!0,onClose:i({action:"close"})},o.a.createElement(T.a,{disableTypography:!0,classes:{root:l.appMenuDialogTitleRoot}},o.a.createElement(J.a,{container:!0,spacing:2,justify:"space-between"},o.a.createElement(J.a,{item:!0},o.a.createElement(H.a,{noWrap:!0},"\u53cd\u9001\u4e2d\u76f4\u64ad\u53f0"),o.a.createElement(H.a,{noWrap:!0},"No China Extradition Live")),o.a.createElement(I.a,{only:"xs"},o.a.createElement(J.a,{item:!0},o.a.createElement(V.a,{onClick:function(){e.setState({openShareDialog:!0})}},o.a.createElement(z.a,null,"share")))))),o.a.createElement(B.a,null),o.a.createElement(q.a,{component:"nav","aria-label":"Main mailbox folders"},o.a.createElement(I.a,{smUp:!0},o.a.createElement(U.a,{button:!0,onClick:function(){e.setState({openShareDialog:!0})}},o.a.createElement(Q.a,null,o.a.createElement(z.a,null,"share")),o.a.createElement(_.a,{primary:"\u5206\u4eab\u53cd\u9001\u4e2d\u76f4\u64ad\u53f0",secondary:"Share NCE Lives"}))),o.a.createElement(U.a,{button:!0,onClick:i({action:"checkSource"})},o.a.createElement(Q.a,null,o.a.createElement(z.a,null,"sync")),o.a.createElement(_.a,{primary:"\u6aa2\u67e5\u65b0\u76f4\u64ad\u4f86\u6e90",secondary:"Check for New Livestreams"})),!(c&&c.customPlaylist)&&o.a.createElement(U.a,{button:!0,onClick:function(){e.setState({openChangeVisibleCountDialog:!0})}},o.a.createElement(Q.a,null,o.a.createElement(z.a,null,"view_module")),o.a.createElement(_.a,{primary:"\u66f4\u6539\u76f4\u64ad\u4e0a\u9650",secondary:"Change Maximum of Livestreams"})),o.a.createElement(U.a,{button:!0,onClick:function(){e.setState({openCustomPlaylistDialog:!0})}},o.a.createElement(Q.a,null,o.a.createElement(z.a,null,"subscriptions")),o.a.createElement(_.a,{primary:"\u81ea\u8a02\u76f4\u64ad\u983b\u9053",secondary:"Custom Livestreams Playlist"}),c&&c.customPlaylist&&o.a.createElement(G.a,null,o.a.createElement(z.a,null,"check_circle"))))),o.a.createElement(ve,{open:h,handleDialogAction:this.handleShareDialogAction}),o.a.createElement(we,{open:p,handleDialogAction:this.handleVisibleCountDialogAction,appOptions:c}),o.a.createElement(Ae,{open:m,handleDialogAction:this.handlePlaylistDialogAction,allData:s,appOptions:c}),o.a.createElement($.a,{in:!0,timeout:d,style:{transitionDelay:"".concat(d.exit,"ms")},unmountOnExit:!0},o.a.createElement(K.a,{className:l.fab,color:"inherit",onClick:i({action:"open"})},o.a.createElement(z.a,null,"menu"))))}}]),t}(n.Component),Pe=Object(w.a)(Object(O.a)(S,{withTheme:!0}))(Ne),Re=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={currentLink:null,mobileOpen:!1},e}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.classes,n=e.loading,i=e.appOptions,l=e.allData,r={preloadReady:e.preloadReady,preloadData:e.preloadData,handleNewDataDialogResult:e.handleNewDataDialogResult},c={open:e.showAppMenu,handleAppMenuAction:e.handleAppMenuAction,appOptions:i,allData:l};return o.a.createElement("div",{className:a.root},n?o.a.createElement("div",{className:a.progress},o.a.createElement(k.a,null)):o.a.createElement(P,{data:t}),o.a.createElement(F,r),o.a.createElement(Pe,c))}}]),t}(n.Component),Me=Object(w.a)(Object(O.a)(S,{withTheme:!0}))(Re),Ve=Object(E.a)(),ze="https://ncehk2019.github.io/nce-live-datasrc/lives.json",We=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).showAppMenu=function(){e.setState({showAppMenu:!0})},e.refresh=Object(u.a)(c.a.mark(function t(){var a,n,o,i,l,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.prev=1,t.next=4,fetch(ze+"?time="+new Date);case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,o=n.visibleCount,i=n.lives,l=[],r=[],e.options&&e.options.visibleCount?o=e.options.visibleCount:(e.options.visibleCount=o,e.options&&e.options.customPlaylist&&(o=e.options.customPlaylist.length)),i.forEach(function(t){var a=t.active,n=Object(s.a)(t,["active"]);a&&(e.options&&e.options.customPlaylist?JSON.parse(e.options.customPlaylist).includes(n["#title"])&&l.push(n):l.length<o&&l.push(n),r.push(n))}),e.setState({loading:!1,data:l,allData:r}),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(1),console.log("refresh error",t.t0),e.setState({loading:!1,data:[],allData:[]});case 20:case"end":return t.stop()}},t,null,[[1,16]])})),e.autoCheckSource=function(){e.cancelAutoCheckSourceJob(),e.autoCheckSourceJob=setInterval(Object(u.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.checkSource();case 2:case"end":return t.stop()}},t)})),3e4)},e.cancelAutoCheckSourceJob=function(){e.autoCheckSourceJob&&clearInterval(e.autoCheckSourceJob)},e.checkSource=Object(u.a)(c.a.mark(function t(){var a,n,o,i,l,r,u,p,h;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.data,!a.preloadReady&&!e.preloadFetching){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,e.preloadFetching=!0,t.next=7,fetch(ze+"?time="+new Date);case 7:return o=t.sent,t.next=10,o.json();case 10:i=t.sent,l=i.visibleCount,r=i.lives,e.options&&e.options.visibleCount?l=e.options.visibleCount:e.options.visibleCount=l,u=[],p=[],h=null,e.options&&e.options.customPlaylist&&(h=JSON.parse(e.options.customPlaylist)),r.forEach(function(e){var t=e.active,a=Object(s.a)(e,["active"]);t&&(h?h.includes(a["#title"])&&u.push(a):u.length<l&&u.push(a),p.push(a))}),JSON.stringify(n)!==JSON.stringify(u)?e.setState({preloadReady:!0,preloadData:u,allData:p}):e.setState({allData:p}),t.next=25;break;case 21:t.prev=21,t.t0=t.catch(3),console.log("checkSource error",t.t0),e.setState({preloadReady:!1,preloadData:[]});case 25:e.preloadFetching=!1;case 26:case"end":return t.stop()}},t,null,[[3,21]])})),e.handleNewDataDialogResult=function(t){var a=t.confirmed;return function(){a?e.setState({data:e.state.preloadData,preloadReady:!1,preloadData:[]}):(e.cancelAutoCheckSourceJob(),e.setState({preloadReady:!1,preloadData:[]}))}},e.handleAppMenuAction=function(t){var a=t.action,n=t.newValue;return function(){"close"===a&&e.setState({showAppMenu:!1}),"open"===a&&e.setState({showAppMenu:!0}),"changeVisibleCount"===a&&(e.options.visibleCount=n,Ve.push({search:"?visibleCount="+n}),e.refresh(),e.setState({showAppMenu:!1})),"checkSource"===a&&(e.setState({showAppMenu:!1}),e.checkSource(),e.autoCheckSource()),"updateCustomPlaylist"===a&&(e.options.customPlaylist=n,Ve.push({search:n.length>0?"?customPlaylist="+JSON.stringify(n):"?visibleCount="+e.options.visibleCount}),e.setState({showAppMenu:!1}))}},e.state={loading:!1,data:[],preloadReady:!1,preloadData:[],showAppMenu:!1,allData:[]},e.preloadFetching=!1,e.options=v.a.parse(Ve.location.search,{ignoreQueryPrefix:!0}),e.unlistenHistory=Ve.listen(function(){var t=v.a.parse(Ve.location.search,{ignoreQueryPrefix:!0});e.options&&(t.visibleCount===e.options.visibleCount&&t.customPlaylist===e.options.customPlaylist||(e.options.visibleCount=t.visibleCount,e.options.customPlaylist=t.customPlaylist,e.refresh()))}),e}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.refresh(),this.autoCheckSource();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.cancelAutoCheckSourceJob(),this.unlistenHistory()}},{key:"render",value:function(){return o.a.createElement(f.a,{theme:C},o.a.createElement(Me,Object.assign({},this.state,{appOptions:this.options,handleNewDataDialogResult:this.handleNewDataDialogResult,handleAppMenuAction:this.handleAppMenuAction})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[143,1,2]]]);