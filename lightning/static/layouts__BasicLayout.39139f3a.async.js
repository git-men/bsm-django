(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"2DPT":function(e,t,n){var a=n("Edkn"),r=n("m1EQ"),o=r(a);e.exports=o},"4UGB":function(e,t,n){e.exports={"ant-layout":"ant-layout","ant-layout-has-sider":"ant-layout-has-sider","ant-layout-content":"ant-layout-content","ant-layout-footer":"ant-layout-footer","ant-layout-header":"ant-layout-header","ant-layout-sider":"ant-layout-sider","ant-layout-sider-children":"ant-layout-sider-children","ant-layout-sider-has-trigger":"ant-layout-sider-has-trigger","ant-layout-sider-right":"ant-layout-sider-right","ant-layout-sider-trigger":"ant-layout-sider-trigger","ant-layout-sider-zero-width":"ant-layout-sider-zero-width","ant-layout-sider-zero-width-trigger":"ant-layout-sider-zero-width-trigger","ant-layout-sider-zero-width-trigger-right":"ant-layout-sider-zero-width-trigger-right","ant-layout-sider-light":"ant-layout-sider-light"}},"8qAD":function(e,t,n){var a=n("LMZ7"),r=n("HSDy"),o=Object.prototype,i=o.hasOwnProperty,c=r(function(e,t,n){i.call(e,n)?e[n].push(t):a(e,n,[t])});e.exports=c},C6oh:function(e,t,n){var a=n("CjOg"),r=function(e){var t=/[height|width]$/;return t.test(e)},o=function(e){var t="",n=Object.keys(e);return n.forEach(function(o,i){var c=e[o];o=a(o),r(o)&&"number"===typeof c&&(c+="px"),t+=!0===c?o:!1===c?"not "+o:"("+o+": "+c+")",i<n.length-1&&(t+=" and ")}),t},i=function(e){var t="";return"string"===typeof e?e:e instanceof Array?(e.forEach(function(n,a){t+=o(n),a<e.length-1&&(t+=", ")}),t):o(e)};e.exports=i},CjOg:function(e,t){var n=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()};e.exports=n},HSDy:function(e,t,n){var a=n("SJRS"),r=n("rudc"),o=n("hwtI"),i=n("TlA4");function c(e,t){return function(n,c){var l=i(n)?a:r,s=t?t():{};return l(n,e,o(c,2),s)}}e.exports=c},IGtV:function(e,t,n){e.exports={fixedHeader:"antd-pro-layouts-header-fixedHeader"}},JwhZ:function(e,t,n){e.exports={head:"antd-pro-components-top-nav-header-index-head",light:"antd-pro-components-top-nav-header-index-light",main:"antd-pro-components-top-nav-header-index-main",wide:"antd-pro-components-top-nav-header-index-wide",left:"antd-pro-components-top-nav-header-index-left",right:"antd-pro-components-top-nav-header-index-right",logo:"antd-pro-components-top-nav-header-index-logo",menu:"antd-pro-components-top-nav-header-index-menu"}},QyDn:function(e,t,n){e.exports={container:"antd-pro-components-header-dropdown-index-container"}},SJRS:function(e,t){function n(e,t,n,a){var r=-1,o=null==e?0:e.length;while(++r<o){var i=e[r];t(a,i,n(i),e)}return a}e.exports=n},W660:function(e,t,n){e.exports={content:"antd-pro-layouts-basic-layout-content"}},h3zL:function(e,t,n){e.exports={header:"antd-pro-components-global-header-index-header",logo:"antd-pro-components-global-header-index-logo",menu:"antd-pro-components-global-header-index-menu",trigger:"antd-pro-components-global-header-index-trigger",right:"antd-pro-components-global-header-index-right",action:"antd-pro-components-global-header-index-action",search:"antd-pro-components-global-header-index-search",account:"antd-pro-components-global-header-index-account",avatar:"antd-pro-components-global-header-index-avatar",dark:"antd-pro-components-global-header-index-dark",name:"antd-pro-components-global-header-index-name"}},m1EQ:function(e,t,n){var a=n("0Tmo");function r(e,t){return function(n,r){if(null==n)return n;if(!a(n))return e(n,r);var o=n.length,i=t?o:-1,c=Object(n);while(t?i--:++i<o)if(!1===r(c[i],i,c))break;return n}}e.exports=r},m8Tn:function(e,t,n){"use strict";n.r(t);var a=n("uVek"),r=n.n(a),o=n("CxVk"),i=n.n(o),c=n("sXdV"),l=n.n(c),s=(n("Ti7s"),n("t/Nd")),u=(n("oSZX"),n("4Ptb")),d=n("q847"),p=n.n(d),f=n("dLrW"),h=n.n(f),m=n("cjXc"),g=n.n(m),y=n("3m6/"),v=n.n(y),b=n("CIpT"),E=n.n(b),x=n("QetK"),M=n.n(x),C=(n("G3Sx"),n("4UGB"),n("ofQB")),w=n("xIDl");C["b"].Sider=w["b"];var k=C["b"],S=n("qE61"),R=n.n(S),N=n("zYcq"),D=n.n(N),O=n("zQXf"),j=n("OaWn"),P=n.n(j),W=n("Mh+x"),q=n("XqQr"),L=n.n(q),T=n("S5iQ"),z=n("R0F+");function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=n("6cZ6"),V=n.n(K),H=n("5jMs"),_=n.n(H),F=n("C6oh"),U=n.n(F),Q=function(){function e(e,t,n){var a=this;this.nativeMediaQueryList=e.matchMedia(t),this.active=!0,this.cancellableListener=function(){a.matches=a.nativeMediaQueryList.matches,a.active&&n.apply(void 0,arguments)},this.nativeMediaQueryList.addListener(this.cancellableListener),this.matches=this.nativeMediaQueryList.matches}var t=e.prototype;return t.cancel=function(){this.active=!1,this.nativeMediaQueryList.removeListener(this.cancellableListener)},e}(),G=V.a.oneOfType([V.a.string,V.a.object,V.a.arrayOf(V.a.object.isRequired)]),B=function(e){function t(t){var n,a;return n=e.call(this,t)||this,I(A(A(n)),"queries",[]),I(A(A(n)),"getMatches",function(){var e=n.queries.reduce(function(e,t){var n,a=t.name,r=t.mqListener;return Object(T["a"])({},e,(n={},n[a]=r.matches,n))},{});return X(e)}),I(A(A(n)),"updateMatches",function(){var e=n.getMatches();n.setState(function(){return{matches:e}},n.onChange)}),t.query||t.queries||t.query&&t.queries||_()(!1),void 0!==t.defaultMatches&&t.query&&"boolean"!==typeof t.defaultMatches&&_()(!1),void 0!==t.defaultMatches&&t.queries&&"object"!==typeof t.defaultMatches&&_()(!1),"object"!==typeof window?(a=void 0!==t.defaultMatches?t.defaultMatches:!!t.query||Object.keys(n.props.queries).reduce(function(e,t){var n;return Object(T["a"])({},e,(n={},n[t]=!0,n))},{}),n.state={matches:a},A(n)):(n.initialize(),n.state={matches:void 0!==n.props.defaultMatches?n.props.defaultMatches:n.getMatches()},n.onChange(),n)}Object(z["a"])(t,e);var n=t.prototype;return n.initialize=function(){var e=this,t=this.props.targetWindow||window;"function"!==typeof t.matchMedia&&_()(!1);var n=this.props.queries||J(this.props.query);this.queries=Object.keys(n).map(function(a){var r=n[a],o="string"!==typeof r?U()(r):r,i=new Q(t,o,e.updateMatches);return{name:a,mqListener:i}})},n.componentDidMount=function(){this.initialize(),void 0!==this.props.defaultMatches&&this.updateMatches()},n.onChange=function(){var e=this.props.onChange;e&&e(this.state.matches)},n.componentWillUnmount=function(){this.queries.forEach(function(e){var t=e.mqListener;return t.cancel()})},n.render=function(){var e=this.props,t=e.children,n=e.render,a=this.state.matches,r="object"===typeof a?Object.keys(a).some(function(e){return a[e]}):a;return n?r?n(a):null:t?"function"===typeof t?t(a):(!Array.isArray(t)||t.length)&&r?R.a.Children.only(t)&&"string"===typeof R.a.Children.only(t).type?R.a.Children.only(t):R.a.cloneElement(R.a.Children.only(t),{matches:a}):null:null},t}(R.a.Component);function J(e){return{__DEFAULT__:e}}function X(e){var t=Object.keys(e);return 1===t.length&&"__DEFAULT__"===t[0]?e.__DEFAULT__:e}I(B,"propTypes",{defaultMatches:V.a.oneOfType([V.a.bool,V.a.objectOf(V.a.bool)]),query:G,queries:V.a.objectOf(G),render:V.a.func,children:V.a.oneOfType([V.a.node,V.a.func]),targetWindow:V.a.object,onChange:V.a.func});var Z=B,Y=n("zwU1"),$=n.n(Y),ee=(n("KaAb"),n("jr2x")),te=n("ggcP"),ne=n("20nU"),ae=k.Footer,re=function(){return R.a.createElement(ae,{style:{padding:0}},R.a.createElement(te["a"],{links:[{key:ne["g"],title:ne["g"],href:ne["h"],blankTarget:!0},{key:ne["d"],title:ne["d"],href:ne["e"],blankTarget:!0}],copyright:R.a.createElement(S["Fragment"],null,"Copyright ",R.a.createElement(ee["a"],{type:"copyright"})," ",ne["a"])}))},oe=re,ie=(n("qms0"),n("vZs3")),ce=(n("uDqj"),n("X8RW")),le=n("kHhk"),se=n("VT9K"),ue=n("a/es"),de=n.n(ue),pe=n("Se3J"),fe=n.n(pe),he=n("nlJM"),me=n.n(he),ge=n("h3zL"),ye=n.n(ge),ve=(n("NxO5"),n("Hcx2")),be=(n("bNu7"),n("cGtb")),Ee=(n("i1An"),n("evC4")),xe=(n("LUEi"),n("PSOn")),Me=n("AxL8"),Ce=n.n(Me),we=n("PAW5"),ke=n.n(we),Se=n("8qAD"),Re=n.n(Se),Ne=(n("wHx7"),n("dqcz")),De=n("rGn4"),Oe=n.n(De),je=n("QyDn"),Pe=n.n(je);function We(e){var t=qe();return function(){var n,a=M()(e);if(t){var r=M()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return E()(this,n)}}function qe(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var Le=function(e){v()(n,e);var t=We(n);function n(){return h()(this,n),t.apply(this,arguments)}return g()(n,[{key:"render",value:function(){var e=this.props,t=e.overlayClassName,n=Oe()(e,["overlayClassName"]);return R.a.createElement(Ne["a"],i()({overlayClassName:L()(Pe.a.container,t)},n))}}]),n}(S["PureComponent"]),Te=n("fVK0");function ze(e){var t=Ae();return function(){var n,a=M()(e);if(t){var r=M()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return E()(this,n)}}function Ae(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var Ie,Ke,Ve,He=function(e){v()(n,e);var t=ze(n);function n(){var e;h()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.state={visible:!1},e.getUnreadData=function(e){var t={};return Object.entries(e).forEach(function(e){var n=Ce()(e,2),a=n[0],r=n[1];t[a]||(t[a]=0),Array.isArray(r)&&(t[a]=r.filter(function(e){return!e.read}).length)}),t},e.changeReadState=function(t){var n=t.id,a=e.props.dispatch;a({type:"global/changeNoticeReadState",payload:n})},e}return g()(n,[{key:"getNoticeData",value:function(){var e=this.props.notices,t=void 0===e?[]:e;if(0===t.length)return{};var n=t.map(function(e){var t=r()({},e);if(t.datetime&&(t.datetime=ke()(e.datetime).fromNow()),t.id&&(t.key=t.id),t.extra&&t.status){var n={todo:"",processing:"blue",urgent:"red",doing:"gold"}[t.status];t.extra=R.a.createElement(xe["a"],{color:n,style:{marginRight:0}},t.extra)}return t});return Re()(n,"type")}},{key:"render",value:function(){var e=this,t=this.props,n=t.currentUser,a=t.onMenuClick,r=t.theme,o=this.state.visible,i=n.permissions,c=void 0===i?[]:i,l=R.a.createElement(Ee["a"],{className:ye.a.menu,selectedKeys:[],onClick:a},R.a.createElement(Ee["a"].Item,{key:"changePassword"},R.a.createElement(ee["a"],{type:"form"}),"\u4fee\u6539\u5bc6\u7801"),R.a.createElement(Ee["a"].Divider,null),c.includes(Te["a"].CHANGE_SETTING)&&R.a.createElement(Ee["a"].Item,{key:"webSettings"},R.a.createElement(ee["a"],{type:"setting"}),R.a.createElement(le["FormattedMessage"],{id:"menu.account.webSettings",defaultMessage:"webSettings"})),c.includes(Te["a"].CHANGE_SETTING)&&R.a.createElement(Ee["a"].Divider,null),R.a.createElement(Ee["a"].Item,{key:"about"},R.a.createElement(ee["a"],{type:"info-circle"}),R.a.createElement(le["FormattedMessage"],{id:"menu.about",defaultMessage:"about"})),R.a.createElement(Ee["a"].Divider,null),R.a.createElement(Ee["a"].Item,{key:"logout"},R.a.createElement(ee["a"],{type:"logout"}),R.a.createElement(le["FormattedMessage"],{id:"menu.account.logout",defaultMessage:"logout"}))),s=ye.a.right;return"dark"===r&&(s="".concat(ye.a.right,"  ").concat(ye.a.dark)),R.a.createElement("div",{className:s},n.username?R.a.createElement(Le,{overlay:l,onVisibleChange:function(t){return e.setState({visible:t})}},R.a.createElement("span",{className:"".concat(ye.a.action," ").concat(ye.a.account)},R.a.createElement(be["a"],{size:"small",className:ye.a.avatar,src:n.avatar,alt:"avatar",icon:!n.avatar&&"user"}),R.a.createElement("span",{className:ye.a.name},n.nick_name||n.name||n.username),R.a.createElement(ee["a"],{type:o?"caret-up":"caret-down",style:{marginLeft:8,fontSize:16,color:"#595959"}}))):R.a.createElement(ve["a"],{size:"small",style:{marginLeft:8,marginRight:24}}))}}]),n}(S["PureComponent"]);function _e(e){var t=Fe();return function(){var n,a=M()(e);if(t){var r=M()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return E()(this,n)}}function Fe(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var Ue=(Ie=me()(600),Ve=function(e){v()(n,e);var t=_e(n);function n(){var e;h()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.toggle=function(){var t=e.props,n=t.collapsed,a=t.onCollapse;a(!n),e.triggerResizeEvent()},e}return g()(n,[{key:"componentWillUnmount",value:function(){this.triggerResizeEvent.cancel()}},{key:"triggerResizeEvent",value:function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!1),window.dispatchEvent(e)}},{key:"render",value:function(){var e=this.props,t=e.collapsed,n=e.isMobile,a=e.logo;return R.a.createElement("div",{className:ye.a.header},n&&R.a.createElement(fe.a,{to:"/",className:ye.a.logo,key:"logo"},R.a.createElement("img",{src:a,alt:"logo",width:"32"})),R.a.createElement("span",{className:ye.a.trigger,onClick:this.toggle},R.a.createElement(ee["a"],{type:t?"menu-unfold":"menu-fold"})),R.a.createElement(He,this.props))}}]),n}(S["PureComponent"]),Ke=Ve,de()(Ke.prototype,"triggerResizeEvent",[Ie],Object.getOwnPropertyDescriptor(Ke.prototype,"triggerResizeEvent"),Ke.prototype),Ke),Qe=n("oFg3"),Ge=n("pMM0"),Be=n("JwhZ"),Je=n.n(Be);function Xe(e){var t=Ze();return function(){var n,a=M()(e);if(t){var r=M()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return E()(this,n)}}function Ze(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var Ye,$e,et,tt=function(e){v()(n,e);var t=Xe(n);function n(){var e;h()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.state={maxWidth:void 0},e}return g()(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.theme,a=t.contentWidth,r=t.menuData,o=t.logo,c=t.title,l=this.state.maxWidth,s=Object(Ge["b"])(r);return R.a.createElement("div",{className:"".concat(Je.a.head," ").concat("light"===n?Je.a.light:"")},R.a.createElement("div",{ref:function(t){e.maim=t},className:"".concat(Je.a.main," ").concat("Fixed"===a?Je.a.wide:"")},R.a.createElement("div",{className:Je.a.left},R.a.createElement("div",{className:Je.a.logo,key:"logo",id:"logo"},R.a.createElement(fe.a,{to:"/"},R.a.createElement("img",{src:o,alt:"logo"}),R.a.createElement("h1",null,c))),R.a.createElement("div",{style:{maxWidth:l}},R.a.createElement(Qe["default"],i()({},this.props,{flatMenuKeys:s,className:Je.a.menu})))),R.a.createElement(He,this.props)))}}],[{key:"getDerivedStateFromProps",value:function(e){return{maxWidth:("Fixed"===e.contentWidth&&window.innerWidth>1200?1200:window.innerWidth)-280-120-40}}}]),n}(S["PureComponent"]),nt=tt,at=n("IGtV"),rt=n.n(at),ot=n("V6SQ"),it="NA";function ct(e){var t=lt();return function(){var n,a=M()(e);if(t){var r=M()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return E()(this,n)}}function lt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var st,ut,dt,pt=k.Header,ft=(Ye=Object(O["connect"])(function(e){var t=e.global,n=t.release,a=t.build;return{release:n,build:a}}),Ye((et=function(e){v()(n,e);var t=ct(n);function n(){var e;h()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.state={visible:!0,passWordVisible:!1,aboutVisible:!1},e.getHeadWidth=function(){var t=e.props,n=t.isMobile,a=t.collapsed,r=t.setting,o=r.fixedHeader,i=r.layout;return n||!o||"topmenu"===i?"100%":a?"calc(100% - 80px)":"calc(100% - 256px)"},e.handleNoticeClear=function(t){ce["a"].success("".concat(Object(le["formatMessage"])({id:"component.noticeIcon.cleared"})," ").concat(Object(le["formatMessage"])({id:"component.globalHeader.".concat(t)})));var n=e.props.dispatch;n({type:"global/clearNotices",payload:t})},e.handleMenuClick=function(t){var n=t.key,a=e.props.dispatch;"userCenter"!==n?"triggerError"!==n?"userinfo"!==n?("logout"===n&&a({type:"login/logout"}),"webSettings"===n&&P.a.push("/account/settings"),"changePassword"===n&&e.showPassWord(),"about"===n&&(a({type:"global/getVersions"}),e.setState({aboutVisible:!0}))):P.a.push("/account/settings/base"):P.a.push("/exception/trigger"):P.a.push("/account/center")},e.handleNoticeVisibleChange=function(t){if(t){var n=e.props.dispatch;n({type:"global/fetchNotices"})}},e.handScroll=function(){var t=e.props.autoHideHeader,n=e.state.visible;if(t){var a=document.body.scrollTop+document.documentElement.scrollTop;e.ticking||(e.ticking=!0,requestAnimationFrame(function(){e.oldScrollTop>a?e.setState({visible:!0}):a>300&&n?e.setState({visible:!1}):a<300&&!n&&e.setState({visible:!0}),e.oldScrollTop=a,e.ticking=!1}))}},e.handleOkPassWord=function(){e.setState({passWordVisible:!1})},e.handleCancelPassWord=function(){e.setState({passWordVisible:!1})},e.showPassWord=function(){e.setState({passWordVisible:!0})},e}return g()(n,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handScroll)}},{key:"render",value:function(){var e=this,t=this.props,n=t.isMobile,a=t.handleMenuCollapse,r=t.setting,o=t.release,c=t.build,l=r.navTheme,s=r.layout,u=r.fixedHeader,d=this.state,p=d.visible,f=d.passWordVisible,h=d.aboutVisible,m="topmenu"===s,g=this.getHeadWidth(),y=p?R.a.createElement(pt,{style:{padding:0,width:g,zIndex:2},className:u?rt.a.fixedHeader:""},m&&!n?R.a.createElement(nt,i()({theme:l,mode:"horizontal",onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props)):R.a.createElement(Ue,i()({onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props)),R.a.createElement(ot["default"],{visible:f,handleCancel:this.handleCancelPassWord,handleOk:this.handleOkPassWord}),R.a.createElement(ie["a"],{title:"\u5173\u4e8e",visible:h,onOk:function(){e.setState({aboutVisible:!1})},onCancel:function(){e.setState({aboutVisible:!1})}},R.a.createElement("div",null,R.a.createElement("p",null,"\u95ea\u7535\u6570\u636e\u7ba1\u7406\u7cfb\u7edf\u3002\u7531\u6770\u660e\u79d1\u6280\u8363\u8a89\u51fa\u54c1\u3002"),R.a.createElement("p",null,"\u53d1\u884c\u7248\u672c\u53f7\uff1a",o),R.a.createElement("p",null,"\u524d\u7aef\u6784\u5efa\u7248\u672c\uff1a",it),R.a.createElement("p",null,"\u540e\u7aef\u6784\u5efa\u7248\u672c\uff1a",c)))):null;return R.a.createElement(se["a"],{component:"",transitionName:"fade"},y)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.autoHideHeader||t.visible?null:{visible:!0}}}]),n}(S["Component"]),$e=et))||$e),ht=Object(O["connect"])(function(e){var t=e.user,n=e.global,a=e.setting,r=e.loading;return{currentUser:t.currentUser,collapsed:n.collapsed,fetchingMoreNotices:r.effects["global/fetchMoreNotices"],fetchingNotices:r.effects["global/fetchNotices"],notices:n.notices,setting:a}})(ft),mt=n("R1Dz"),gt=(n("Ut3b"),n("xRqD")),yt=n("4CRv"),vt=n.n(yt),bt=n("lyYd"),Et=n.n(bt),xt=n("mR0u"),Mt=n.n(xt),Ct=n("xqX8");function wt(e){var t=kt();return function(){var n,a=M()(e);if(t){var r=M()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return E()(this,n)}}function kt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var St=R.a.lazy(function(){return Promise.resolve().then(n.bind(null,"oFg3"))}),Rt=k.Sider,Nt=!0,Dt=(st=Object(O["connect"])(function(e){var t=e.menu.menuCount;return{menuCount:t}}),st((dt=function(e){v()(n,e);var t=wt(n);function n(e){var a;return h()(this,n),a=t.call(this,e),a.isMainMenu=function(e){var t=a.props.menuData;return t.some(function(t){return!!e&&(t.key===e||t.path===e)})},a.handleOpenChange=function(e){var t=e.filter(function(e){return a.isMainMenu(e)}).length>1;a.setState({openKeys:t?[e.pop()]:Et()(e)})},a.state={openKeys:Object(Ge["a"])(e)},a}return g()(n,[{key:"componentDidMount",value:function(){Nt=!1}},{key:"render",value:function(){var e,t=this.props,n=t.logo,a=t.collapsed,r=t.onCollapse,o=t.fixSiderbar,c=t.theme,l=t.isMobile,s=t.title,u=t.menuCount,d=this.state.openKeys,p=a?{}:{openKeys:d},f=L()(Mt.a.sider,(e={},vt()(e,Mt.a.fixSiderBar,o),vt()(e,Mt.a.light,"light"===c),e));return R.a.createElement(Rt,{trigger:null,collapsible:!0,collapsed:a,breakpoint:"lg",onCollapse:function(e){!Nt&&l||r(e)},width:256,theme:c,className:f},R.a.createElement("div",{className:Mt.a.logo,id:"logo"},R.a.createElement(fe.a,{to:"/"},R.a.createElement("img",{src:n,alt:"logo"}),R.a.createElement("h1",null,s))),R.a.createElement(S["Suspense"],{fallback:R.a.createElement(Ct["default"],null)},R.a.createElement(St,i()({},this.props,{mode:"inline",handleOpenChange:this.handleOpenChange,onOpenChange:this.handleOpenChange,style:{padding:"16px 0",width:"100%"}},p,{key:"".concat(u)}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.pathname,a=t.flatMenuKeysLen;return e.location.pathname!==n||e.flatMenuKeys.length!==a?{pathname:e.location.pathname,flatMenuKeysLen:e.flatMenuKeys.length,openKeys:Object(Ge["a"])(e)}:null}}]),n}(S["PureComponent"]),ut=dt))||ut),Ot=Dt,jt=R.a.memo(function(e){var t=e.isMobile,n=e.menuData,a=e.collapsed,r=e.onCollapse,o=Object(Ge["b"])(n);return t?R.a.createElement(gt["a"],{visible:!a,placement:"left",onClose:function(){return r(!0)},style:{padding:0,height:"100vh"}},R.a.createElement(Ot,i()({},e,{flatMenuKeys:o,collapsed:!t&&a}))):R.a.createElement(Ot,i()({},e,{flatMenuKeys:o}))}),Pt=jt,Wt=n("vbsh"),qt=n("W660"),Lt=n.n(qt),Tt=n("T+dw");function zt(e){var t=At();return function(){var n,a=M()(e);if(t){var r=M()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return E()(this,n)}}function At(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}R.a.lazy(function(){return n.e(50).then(n.bind(null,"PceP"))});var It=k.Content,Kt={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200,maxWidth:1599},"screen-xxl":{minWidth:1600}},Vt=function(e){v()(n,e);var t=zt(n);function n(){var e;h()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.getLayoutStyle=function(){var t=e.props,n=t.fixSiderbar,a=t.isMobile,r=t.collapsed,o=t.layout;return n&&"topmenu"!==o&&!a?{paddingLeft:r?"80px":"256px"}:null},e.handleMenuCollapse=function(t){var n=e.props.dispatch;n({type:"global/changeLayoutCollapsed",payload:t})},e.renderSettingDrawer=function(){return null},e}return g()(n,[{key:"componentDidMount",value:function(){var e=p()(l.a.mark(function e(){var t,n,a,r,o,i,c=this;return l.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this.props,n=t.dispatch,a=t.route,r=a.routes,o=a.path,i=a.authority,Promise.all([n({type:"user/fetchCurrent"}),n({type:"bsmSetting/getSettings"})]).then(function(){var e,t,n=c.props,a=n.user,r=n.bsmSetting;(null===a||void 0===a?void 0:null===(e=a.currentUser)||void 0===e?void 0:null===(t=e.permissions)||void 0===t?void 0:t.includes("can_web_setting__bsm_config"))&&null===(null===r||void 0===r?void 0:r.DB_TIMEZONE)&&u["a"].warn({duration:null,placement:"bottomRight",message:"\u7248\u672c\u517c\u5bb9\u6027\u8b66\u544a",description:"\u672a\u8bbe\u7f6e\u65f6\u533a\uff0c\u5f53\u524d\u7248\u672c\u9700\u8981\u8bbe\u7f6e\u6570\u636e\u5e93\u65f6\u533a",key:"timezone-warning",onClick:function(){P.a.push("/account/settings/website"),u["a"].close("timezone-warning")},btn:R.a.createElement(s["a"],{type:"primary"},"\u524d\u5f80\u8bbe\u7f6e")})}),n({type:"setting/getSetting"}),n({type:"content/getConfig"}).then(function(){return n({type:"menu/getMenuData",payload:{routes:r,path:o,authority:i}})}),Object(Wt["b"])("bsm_config__menu",[Wt["a"].afterCreate,Wt["a"].afterUpdate,Wt["a"].afterDelete],function(){return n({type:"menu/getMenuData",payload:{routes:r,path:o,authority:i}})});case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getContext",value:function(){var e=this.props,t=e.location,n=e.breadcrumbNameMap;return{location:t,breadcrumbNameMap:n}}},{key:"render",value:function(){var e=this,t=this.props,n=t.navTheme,a=t.layout,o=t.children,c=t.isMobile,l=t.menuData,s=t.fixedHeader,u=t.title,d=t.logo,p="topmenu"===a,f=s?{}:{paddingTop:0},h=R.a.createElement(k,null,p&&!c?null:R.a.createElement(Pt,i()({theme:n,onCollapse:this.handleMenuCollapse,menuData:l,isMobile:c},this.props,{logo:d||$.a,title:u||Tt["title"]})),R.a.createElement(k,{style:r()({},this.getLayoutStyle(),{minHeight:"100vh"})},R.a.createElement(ht,i()({menuData:l,handleMenuCollapse:this.handleMenuCollapse,isMobile:c},this.props,{logo:d||$.a,title:u||Tt["title"]})),R.a.createElement(It,{className:Lt.a.content,style:f},o),R.a.createElement(oe,null)));return R.a.createElement(R.a.Fragment,null,R.a.createElement(D.a,{title:u||Tt["title"]},R.a.createElement(W["ContainerQuery"],{query:Kt},function(t){return R.a.createElement(mt["a"].Provider,{value:e.getContext()},R.a.createElement("div",{className:L()(t)},h))})),R.a.createElement(S["Suspense"],{fallback:null},this.renderSettingDrawer()))}}]),n}(R.a.Component);t["default"]=Object(O["connect"])(function(e){var t=e.global,n=e.setting,a=e.menu,o=e.user,i=e.bsmSetting;return r()({collapsed:t.collapsed,layout:n.layout,menuData:a.menuData,breadcrumbNameMap:a.breadcrumbNameMap},n,{user:o,bsmSetting:i})})(function(e){return R.a.createElement(Z,{query:"(max-width: 599px)"},function(t){return R.a.createElement(Vt,i()({},e,{isMobile:t}))})})},mR0u:function(e,t,n){e.exports={logo:"antd-pro-components-sider-menu-index-logo",sider:"antd-pro-components-sider-menu-index-sider",fixSiderBar:"antd-pro-components-sider-menu-index-fixSiderBar",light:"antd-pro-components-sider-menu-index-light",icon:"antd-pro-components-sider-menu-index-icon"}},oFg3:function(e,t,n){"use strict";n.r(t);var a=n("CxVk"),r=n.n(a),o=n("lyYd"),i=n.n(o),c=n("dLrW"),l=n.n(c),s=n("cjXc"),u=n.n(s),d=n("3m6/"),p=n.n(d),f=n("CIpT"),h=n.n(f),m=n("QetK"),g=n.n(m),y=(n("KaAb"),n("jr2x")),v=(n("i1An"),n("evC4")),b=n("qE61"),E=n.n(b),x=n("XqQr"),M=n.n(x),C=n("Se3J"),w=n.n(C),k=n("S/9j"),S=n("pMM0"),R=n("+n12"),N=n("mR0u"),D=n.n(N),O=n("T+dw"),j=y["a"].createFromIconfontCN({scriptUrl:O["iconfontUrl"]}),P=n("Wd+Q");function W(e){var t=q();return function(){var n,a=g()(e);if(t){var r=g()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h()(this,n)}}function q(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}n.d(t,"default",function(){return z});var L=v["a"].SubMenu,T=function(e){return"string"===typeof e?Object(R["f"])(e)?E.a.createElement(y["a"],{component:function(){return E.a.createElement("img",{src:e,alt:"icon",className:D.a.icon})}}):e.startsWith("icon-")?E.a.createElement(j,{type:e}):P["d"].icon({icon:e}):e},z=function(e){p()(n,e);var t=W(n);function n(){var e;l()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.getNavMenuItems=function(t){return t?t.filter(function(e){return e.name&&!e.hideInMenu}).map(function(t){return e.getSubMenuOrItem(t)}).filter(function(e){return e}):[]},e.getSelectedMenuKeys=function(t){var n=e.props.flatMenuKeys;return Object(k["a"])(t).map(function(e){return Object(S["c"])(n,e).pop()}).filter(Boolean).slice(-1)},e.getSubMenuOrItem=function(t){if(t.children&&!t.hideChildrenInMenu&&t.children.some(function(e){return e.name})){var n=t.name;return E.a.createElement(L,{title:t.icon?E.a.createElement("span",null,T(t.icon),E.a.createElement("span",null,n)):n,key:t.path},e.getNavMenuItems(t.children))}return E.a.createElement(v["a"].Item,{key:t.path},e.getMenuItemPath(t))},e.getMenuItemPath=function(t){var n=t.name,a=e.conversionPath(t.path),r=T(t.icon),o=t.target;if(/^https?:\/\//.test(a))return E.a.createElement("a",{href:a,target:o},r,E.a.createElement("span",null,n));var i=e.props,c=i.location,l=i.isMobile,s=i.onCollapse;return E.a.createElement(w.a,{to:a,target:o,replace:a===c.pathname,onClick:l?function(){s(!0)}:void 0},r,E.a.createElement("span",null,n))},e.conversionPath=function(e){return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/")},e.getPopupContainer=function(t,n){return t&&"topmenu"===n?e.wrap:document.body},e.getRef=function(t){e.wrap=t},e}return u()(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.openKeys,a=t.theme,o=t.mode,c=t.location.pathname,l=t.className,s=t.collapsed,u=t.fixedHeader,d=t.layout,p=this.getSelectedMenuKeys(c);!p.length&&n&&(p=[n[n.length-1]]);var f={};n&&!s&&(f={openKeys:0===n.length?i()(p):n});var h=this.props,m=h.handleOpenChange,g=h.style,y=h.menuData,b=M()(l,{"top-nav-menu":"horizontal"===o});return E.a.createElement(E.a.Fragment,null,E.a.createElement(v["a"],r()({key:"Menu",mode:o,theme:a,onOpenChange:m,selectedKeys:p,style:g,className:b},f,{getPopupContainer:function(){return e.getPopupContainer(u,d)}}),this.getNavMenuItems(y)),E.a.createElement("div",{ref:this.getRef}))}}]),n}(b["PureComponent"])},pMM0:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return d});var a=n("lyYd"),r=n.n(a),o=n("k/6o"),i=n.n(o),c=n("S/9j"),l=n("wMBH"),s=function e(t){var n=[];return t.forEach(function(t){n.push(t.path),t.children&&(n=n.concat(e(t.children)))}),n},u=function(e,t){return e.filter(function(e){return!!e&&i()(e).test(t)})},d=function(e){var t=e.location.pathname,n=e.flatMenuKeys;return l["c"][Object(c["a"])(t).reverse().find(function(e){return e in l["c"]})]||Object(c["a"])(t).map(function(e){return u(n,e)[0]}).filter(function(e){return e}).reduce(function(e,t){return[].concat(r()(e),[t])},["/"])}},rudc:function(e,t,n){var a=n("2DPT");function r(e,t,n,r){return a(e,function(e,a,o){t(r,e,n(e),o)}),r}e.exports=r}}]);