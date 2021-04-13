/*! For license information please see commons-2a73a2460b7d7aa6e056.js.LICENSE.txt */
(self.webpackChunkvshury=self.webpackChunkvshury||[]).push([[351],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},4731:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);var a=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=a(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},7526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n(1060),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},1060:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var l=a||"<<anonymous>>",s=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+s+"` was not specified in `"+l+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),f=6;f<u;f++)c[f-6]=arguments[f];return e.apply(void 0,[n,r,l,o,s].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},6025:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(2122),a=n(9756),o=Function.prototype.bind.call(Function.prototype.call,[].slice);var i=n(7294);var l=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var s=function(e,t){return(0,i.useMemo)((function(){return function(e,t){var n=l(e),r=l(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},u=n(5439),c=n(8120),f=i.createContext(null),d=function(){},v=i.forwardRef((function(e,t){var n,l,v=e.as,p=void 0===v?"ul":v,m=e.onSelect,h=e.activeKey,b=e.role,y=e.onKeyDown,E=(0,a.Z)(e,["as","onSelect","activeKey","role","onKeyDown"]),x=(0,i.useReducer)((function(e){return!e}),!1)[1],g=(0,i.useRef)(!1),w=(0,i.useContext)(c.Z),N=(0,i.useContext)(f);N&&(b=b||"tablist",h=N.activeKey,n=N.getControlledId,l=N.getControllerId);var Z=(0,i.useRef)(null),C=function(e){var t=Z.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",o(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var i=r.indexOf(a);if(-1===i)return null;var l=i+e;return l>=r.length&&(l=0),l<0&&(l=r.length-1),r[l]},P=function(e,t){null!=e&&(m&&m(e,t),w&&w(e,t))};(0,i.useEffect)((function(){if(Z.current&&g.current){var e=Z.current.querySelector("[data-rb-event-key].active");e&&e.focus()}g.current=!1}));var O=s(t,Z);return i.createElement(c.Z.Provider,{value:P},i.createElement(u.Z.Provider,{value:{role:b,activeKey:(0,c.h)(h),getControlledId:n||d,getControllerId:l||d}},i.createElement(p,(0,r.Z)({},E,{onKeyDown:function(e){var t;switch(y&&y(e),e.key){case"ArrowLeft":case"ArrowUp":t=C(-1);break;case"ArrowRight":case"ArrowDown":t=C(1);break;default:return}t&&(e.preventDefault(),P(t.dataset.rbEventKey,e),g.current=!0,x())},ref:O,role:b}))))}))},4455:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(5900),i=n.n(o),l=n(7294),s=n(4731),u=(n(2473),n(5439)),c=n(8120),f=l.forwardRef((function(e,t){var n=e.active,o=e.className,f=e.eventKey,d=e.onSelect,v=e.onClick,p=e.as,m=(0,a.Z)(e,["active","className","eventKey","onSelect","onClick","as"]),h=(0,c.h)(f,m.href),b=(0,l.useContext)(c.Z),y=(0,l.useContext)(u.Z),E=n;if(y){m.role||"tablist"!==y.role||(m.role="tab");var x=y.getControllerId(h),g=y.getControlledId(h);m["data-rb-event-key"]=h,m.id=x||m.id,m["aria-controls"]=g||m["aria-controls"],E=null==n&&null!=h?y.activeKey===h:n}"tab"===m.role&&(m.disabled&&(m.tabIndex=-1,m["aria-disabled"]=!0),m["aria-selected"]=E);var w=(0,s.Z)((function(e){v&&v(e),null!=h&&(d&&d(h,e),b&&b(h,e))}));return l.createElement(p,(0,r.Z)({},m,{ref:t,onClick:w,className:i()(o,E&&"active")}))}));f.defaultProps={disabled:!1},t.Z=f},6594:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(5900),i=n.n(o),l=n(7294),s=n(9541),u=n(6306),c=l.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,c=e.size,f=e.active,d=e.className,v=e.block,p=e.type,m=e.as,h=(0,a.Z)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=(0,s.vE)(n,"btn"),y=i()(d,b,f&&"active",o&&b+"-"+o,v&&b+"-block",c&&b+"-"+c);if(h.href)return l.createElement(u.Z,(0,r.Z)({},h,{as:m,ref:t,className:i()(y,h.disabled&&"disabled")}));t&&(h.ref=t),p?h.type=p:m||(h.type="button");var E=m||"button";return l.createElement(E,(0,r.Z)({},h,{className:y}))}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c},1476:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(2122),a=n(9756),o=n(5900),i=n.n(o),l=n(7294),s=n(9541),u=n(8870),c=function(e){return l.forwardRef((function(t,n){return l.createElement("div",(0,r.Z)({},t,{ref:n,className:i()(t.className,e)}))}))},f=n(9503),d=l.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.variant,c=e.as,f=void 0===c?"img":c,d=(0,a.Z)(e,["bsPrefix","className","variant","as"]),v=(0,s.vE)(n,"card-img");return l.createElement(f,(0,r.Z)({ref:t,className:i()(u?v+"-"+u:v,o)},d))}));d.displayName="CardImg",d.defaultProps={variant:null};var v=d,p=c("h5"),m=c("h6"),h=(0,u.Z)("card-body"),b=(0,u.Z)("card-title",{Component:p}),y=(0,u.Z)("card-subtitle",{Component:m}),E=(0,u.Z)("card-link",{Component:"a"}),x=(0,u.Z)("card-text",{Component:"p"}),g=(0,u.Z)("card-header"),w=(0,u.Z)("card-footer"),N=(0,u.Z)("card-img-overlay"),Z=l.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.bg,c=e.text,d=e.border,v=e.body,p=e.children,m=e.as,b=void 0===m?"div":m,y=(0,a.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=(0,s.vE)(n,"card"),x=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return l.createElement(f.Z.Provider,{value:x},l.createElement(b,(0,r.Z)({ref:t},y,{className:i()(o,E,u&&"bg-"+u,c&&"text-"+c,d&&"border-"+d)}),v?l.createElement(h,null,p):p))}));Z.displayName="Card",Z.defaultProps={body:!1},Z.Img=v,Z.Title=b,Z.Subtitle=y,Z.Body=h,Z.Link=E,Z.Text=x,Z.Header=g,Z.Footer=w,Z.ImgOverlay=N;var C=Z},9503:function(e,t,n){"use strict";var r=n(7294).createContext(null);r.displayName="CardContext",t.Z=r},7408:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(5900),i=n.n(o),l=n(7294),s=n(9541),u=["xl","lg","md","sm","xs"],c=l.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.as,f=void 0===c?"div":c,d=(0,a.Z)(e,["bsPrefix","className","as"]),v=(0,s.vE)(n,"col"),p=[],m=[];return u.forEach((function(e){var t,n,r,a=d[e];if(delete d[e],"object"==typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var i="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+v+i:""+v+i+"-"+t),null!=r&&m.push("order"+i+"-"+r),null!=n&&m.push("offset"+i+"-"+n)})),p.length||p.push(v),l.createElement(f,(0,r.Z)({},d,{ref:t,className:i().apply(void 0,[o].concat(p,m))}))}));c.displayName="Col",t.Z=c},5439:function(e,t,n){"use strict";var r=n(7294).createContext(null);r.displayName="NavContext",t.Z=r},994:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(5900),i=n.n(o),l=n(7294),s=n(9541),u=["xl","lg","md","sm","xs"],c=l.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.noGutters,f=e.as,d=void 0===f?"div":f,v=(0,a.Z)(e,["bsPrefix","className","noGutters","as"]),p=(0,s.vE)(n,"row"),m=p+"-cols",h=[];return u.forEach((function(e){var t,n=v[e];delete v[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&h.push(""+m+r+"-"+t)})),l.createElement(d,(0,r.Z)({ref:t},v,{className:i().apply(void 0,[o,p,c&&"no-gutters"].concat(h))}))}));c.displayName="Row",c.defaultProps={noGutters:!1},t.Z=c},6306:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(7294),i=n(9758);function l(e){return!e||"#"===e.trim()}var s=o.forwardRef((function(e,t){var n=e.as,s=void 0===n?"a":n,u=e.disabled,c=e.onKeyDown,f=(0,a.Z)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(u||l(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return l(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),u&&(f.tabIndex=-1,f["aria-disabled"]=!0),o.createElement(s,(0,r.Z)({ref:t},f,{onClick:d,onKeyDown:(0,i.Z)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),c)}))}));s.displayName="SafeAnchor",t.Z=s},8120:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});var r=n(7294).createContext(null),a=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.Z=r},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return o}});var r=n(7294),a=r.createContext({});a.Consumer,a.Provider;function o(e,t){var n=(0,r.useContext)(a);return e||n[t]||t}},9758:function(e,t){"use strict";t.Z=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},8870:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(2122),a=n(9756),o=n(5900),i=n.n(o),l=/-(.)/g;var s=n(7294),u=n(9541),c=function(e){return e[0].toUpperCase()+(t=e,t.replace(l,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e,t){var n=void 0===t?{}:t,o=n.displayName,l=void 0===o?c(e):o,f=n.Component,d=n.defaultProps,v=s.forwardRef((function(t,n){var o=t.className,l=t.bsPrefix,c=t.as,d=void 0===c?f||"div":c,v=(0,a.Z)(t,["className","bsPrefix","as"]),p=(0,u.vE)(l,e);return s.createElement(d,(0,r.Z)({ref:n,className:i()(o,p)},v))}));return v.defaultProps=d,v.displayName=l,v}},5513:function(e,t,n){"use strict";n.d(t,{Ch:function(){return s}});var r=n(2122),a=n(9756),o=n(7294);n(1143);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function s(e,t){return Object.keys(t).reduce((function(n,s){var u,c=n,f=c[i(s)],d=c[s],v=(0,a.Z)(c,[i(s),s].map(l)),p=t[s],m=function(e,t,n){var r=(0,o.useRef)(void 0!==e),a=(0,o.useState)(t),i=a[0],l=a[1],s=void 0!==e,u=r.current;return r.current=s,!s&&u&&i!==t&&l(t),[s?e:i,(0,o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),l(e)}),[n])]}(d,f,e[p]),h=m[0],b=m[1];return(0,r.Z)({},v,((u={})[s]=h,u[p]=b,u))}),e)}n(3639)},6268:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ke}});var r=n(7294),a=n(5444),o=n(2122),i=n(9756),l=n(5900),s=n.n(l),u=n(9541),c=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.fluid,l=e.as,c=void 0===l?"div":l,f=e.className,d=(0,i.Z)(e,["bsPrefix","fluid","as","className"]),v=(0,u.vE)(n,"container"),p="string"==typeof a?"-"+a:"-fluid";return r.createElement(c,(0,o.Z)({ref:t},d,{className:s()(f,a?""+v+p:v)}))}));c.displayName="Container",c.defaultProps={fluid:!1};var f=c,d=n(5513),v=n(8870),p=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,l=e.as,c=(0,i.Z)(e,["bsPrefix","className","as"]);n=(0,u.vE)(n,"navbar-brand");var f=l||(c.href?"a":"span");return r.createElement(f,(0,o.Z)({},c,{ref:t,className:s()(a,n)}))}));p.displayName="NavbarBrand";var m=p;function h(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var b=/([A-Z])/g;var y=/^ms-/;function E(e){return function(e){return e.replace(b,"-$1").toLowerCase()}(e).replace(y,"-ms-")}var x=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var g=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(E(t))||function(e,t){return h(e).getComputedStyle(e,t)}(e).getPropertyValue(E(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!x.test(e))}(a)?n+=E(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(E(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},w=n(3552),N=n(3935),Z=!1,C=r.createContext(null),P="unmounted",O="exited",k="entering",S="entered",R="exiting",j=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=O,r.appearStatus=k):a=S:a=t.unmountOnExit||t.mountOnEnter?P:O,r.state={status:a},r.nextCallback=null,r}(0,w.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===P?{status:O}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==k&&n!==S&&(t=k):n!==k&&n!==S||(t=R)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===k?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===O&&this.setState({status:P})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[N.findDOMNode(this),r],o=a[0],i=a[1],l=this.getTimeouts(),s=r?l.appear:l.enter;!e&&!n||Z?this.safeSetState({status:S},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:k},(function(){t.props.onEntering(o,i),t.onTransitionEnd(s,(function(){t.safeSetState({status:S},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:N.findDOMNode(this);t&&!Z?(this.props.onExit(r),this.safeSetState({status:R},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:O},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:O},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===P)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,i.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(C.Provider,{value:null},"function"==typeof n?n(e,a):r.cloneElement(r.Children.only(n),a))},t}(r.Component);function T(){}j.contextType=C,j.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:T,onEntering:T,onEntered:T,onExit:T,onExiting:T,onExited:T},j.UNMOUNTED=P,j.EXITED=O,j.ENTERING=k,j.ENTERED=S,j.EXITING=R;var z=j,A=!("undefined"==typeof window||!window.document||!window.document.createElement),I=!1,L=!1;try{var M={get passive(){return I=!0},get once(){return L=I=!0}};A&&(window.addEventListener("test",M,M),window.removeEventListener("test",M,!0))}catch(Ve){}var D=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!L){var a=r.once,o=r.capture,i=n;!L&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,I?r:o)}e.addEventListener(t,n,r)};var K=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var V=function(e,t,n,r){return D(e,t,n,r),function(){K(e,t,n,r)}};function H(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=V(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function _(e,t,n,r){var a,o;null==n&&(a=g(e,"transitionDuration")||"",o=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*o||0);var i=H(e,n,r),l=V(e,"transitionend",t);return function(){i(),l()}}function U(e,t){var n=g(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function B(e,t){var n=U(e,"transitionDuration"),r=U(e,"transitionDelay"),a=_(e,(function(n){n.target===e&&(a(),t(n))}),n+r)}var F,q=n(9758);var G={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function X(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=G[e];return n+parseInt(g(t,r[0]),10)+parseInt(g(t,r[1]),10)}var Y=((F={}).exited="collapse",F.exiting="collapsing",F.entering="collapsing",F.entered="collapse show",F),$={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:X},W=r.forwardRef((function(e,t){var n=e.onEnter,a=e.onEntering,l=e.onEntered,u=e.onExit,c=e.onExiting,f=e.className,d=e.children,v=e.dimension,p=void 0===v?"height":v,m=e.getDimensionValue,h=void 0===m?X:m,b=(0,i.Z)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),y="function"==typeof p?p():p,E=(0,r.useMemo)((function(){return(0,q.Z)((function(e){e.style[y]="0"}),n)}),[y,n]),x=(0,r.useMemo)((function(){return(0,q.Z)((function(e){var t="scroll"+y[0].toUpperCase()+y.slice(1);e.style[y]=e[t]+"px"}),a)}),[y,a]),g=(0,r.useMemo)((function(){return(0,q.Z)((function(e){e.style[y]=null}),l)}),[y,l]),w=(0,r.useMemo)((function(){return(0,q.Z)((function(e){e.style[y]=h(y,e)+"px",e.offsetHeight}),u)}),[u,h,y]),N=(0,r.useMemo)((function(){return(0,q.Z)((function(e){e.style[y]=null}),c)}),[y,c]);return r.createElement(z,(0,o.Z)({ref:t,addEndListener:B},b,{"aria-expanded":b.role?b.in:null,onEnter:E,onEntering:x,onEntered:g,onExit:w,onExiting:N}),(function(e,t){return r.cloneElement(d,(0,o.Z)({},t,{className:s()(f,d.props.className,Y[e],"width"===y&&"width")}))}))}));W.defaultProps=$;var J=W,Q=r.createContext(null);Q.displayName="NavbarContext";var ee=Q,te=r.forwardRef((function(e,t){var n=e.children,a=e.bsPrefix,l=(0,i.Z)(e,["children","bsPrefix"]);return a=(0,u.vE)(a,"navbar-collapse"),r.createElement(ee.Consumer,null,(function(e){return r.createElement(J,(0,o.Z)({in:!(!e||!e.expanded)},l),r.createElement("div",{ref:t,className:a},n))}))}));te.displayName="NavbarCollapse";var ne=te,re=n(4731),ae=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,l=e.children,c=e.label,f=e.as,d=void 0===f?"button":f,v=e.onClick,p=(0,i.Z)(e,["bsPrefix","className","children","label","as","onClick"]);n=(0,u.vE)(n,"navbar-toggler");var m=(0,r.useContext)(ee)||{},h=m.onToggle,b=m.expanded,y=(0,re.Z)((function(e){v&&v(e),h&&h()}));return"button"===d&&(p.type="button"),r.createElement(d,(0,o.Z)({},p,{ref:t,onClick:y,"aria-label":c,className:s()(a,n,!b&&"collapsed")}),l||r.createElement("span",{className:n+"-icon"}))}));ae.displayName="NavbarToggle",ae.defaultProps={label:"Toggle navigation"};var oe=ae,ie=n(8120),le=(0,v.Z)("navbar-text",{Component:"span"}),se=r.forwardRef((function(e,t){var n=(0,d.Ch)(e,{expanded:"onToggle"}),a=n.bsPrefix,l=n.expand,c=n.variant,f=n.bg,v=n.fixed,p=n.sticky,m=n.className,h=n.children,b=n.as,y=void 0===b?"nav":b,E=n.expanded,x=n.onToggle,g=n.onSelect,w=n.collapseOnSelect,N=(0,i.Z)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),Z=(0,u.vE)(a,"navbar"),C=(0,r.useCallback)((function(){g&&g.apply(void 0,arguments),w&&E&&x&&x(!1)}),[g,w,E,x]);void 0===N.role&&"nav"!==y&&(N.role="navigation");var P=Z+"-expand";"string"==typeof l&&(P=P+"-"+l);var O=(0,r.useMemo)((function(){return{onToggle:function(){return x&&x(!E)},bsPrefix:Z,expanded:!!E}}),[Z,E,x]);return r.createElement(ee.Provider,{value:O},r.createElement(ie.Z.Provider,{value:C},r.createElement(y,(0,o.Z)({ref:t},N,{className:s()(m,Z,l&&P,c&&Z+"-"+c,f&&"bg-"+f,p&&"sticky-"+p,v&&"fixed-"+v)}),h)))}));se.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},se.displayName="Navbar",se.Brand=m,se.Toggle=oe,se.Collapse=ne,se.Text=le;var ue=se,ce=(n(7526),n(9503)),fe=n(6025),de=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,l=e.children,c=e.as,f=void 0===c?"div":c,d=(0,i.Z)(e,["bsPrefix","className","children","as"]);return n=(0,u.vE)(n,"nav-item"),r.createElement(f,(0,o.Z)({},d,{ref:t,className:s()(a,n)}),l)}));de.displayName="NavItem";var ve=de,pe=n(6306),me=n(4455),he={disabled:!1,as:pe.Z},be=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.disabled,l=e.className,c=e.href,f=e.eventKey,d=e.onSelect,v=e.as,p=(0,i.Z)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=(0,u.vE)(n,"nav-link"),r.createElement(me.Z,(0,o.Z)({},p,{href:c,ref:t,eventKey:f,as:v,disabled:a,onSelect:d,className:s()(l,n,a&&"disabled")}))}));be.displayName="NavLink",be.defaultProps=he;var ye=be,Ee=r.forwardRef((function(e,t){var n,a,l,c=(0,d.Ch)(e,{activeKey:"onSelect"}),f=c.as,v=void 0===f?"div":f,p=c.bsPrefix,m=c.variant,h=c.fill,b=c.justify,y=c.navbar,E=c.className,x=c.children,g=c.activeKey,w=(0,i.Z)(c,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),N=(0,u.vE)(p,"nav"),Z=!1,C=(0,r.useContext)(ee),P=(0,r.useContext)(ce.Z);return C?(a=C.bsPrefix,Z=null==y||y):P&&(l=P.cardHeaderBsPrefix),r.createElement(fe.Z,(0,o.Z)({as:v,ref:t,activeKey:g,className:s()(E,(n={},n[N]=!Z,n[a+"-nav"]=Z,n[l+"-"+m]=!!l,n[N+"-"+m]=!!m,n[N+"-fill"]=h,n[N+"-justified"]=b,n))},w),x)}));Ee.displayName="Nav",Ee.defaultProps={justify:!1,fill:!1},Ee.Item=ve,Ee.Link=ye;var xe=Ee,ge=n(6594);function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ne(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ze=(0,r.forwardRef)((function(e,t){var n=e.color,a=e.size,o=Ne(e,["color","size"]);return r.createElement("svg",we({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:n},o),r.createElement("path",{d:"M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"}))}));Ze.defaultProps={color:"currentColor",size:"1em"};var Ce=Ze;function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ke=(0,r.forwardRef)((function(e,t){var n=e.color,a=e.size,o=Oe(e,["color","size"]);return r.createElement("svg",Pe({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:n},o),r.createElement("path",{d:"M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"}))}));ke.defaultProps={color:"currentColor",size:"1em"};var Se=ke;function Re(){return(Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function je(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Te=(0,r.forwardRef)((function(e,t){var n=e.color,a=e.size,o=je(e,["color","size"]);return r.createElement("svg",Re({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:n},o),r.createElement("path",{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}),r.createElement("path",{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}))}));Te.defaultProps={color:"currentColor",size:"1em"};var ze=Te;function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ie(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Le=(0,r.forwardRef)((function(e,t){var n=e.color,a=e.size,o=Ie(e,["color","size"]);return r.createElement("svg",Ae({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:n},o),r.createElement("path",{d:"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"}))}));Le.defaultProps={color:"currentColor",size:"1em"};var Me=Le,De=n.p+"static/resume-e33437cccf5fab7e2dd2d550538d7673.pdf";function Ke(e){var t=e.location,n=e.children;return r.createElement(r.Fragment,null,r.createElement(ue,{variant:"dark",bg:"dark",expand:"md"},r.createElement(ue.Brand,{className:"border-right pr-3",as:a.rU,to:"/"},r.createElement("h3",null,r.createElement(Ce,{size:"25",className:"mr-2",color:"white"}),"Vincent Shury")),r.createElement(ue.Toggle,{className:"p-2","aria-controls":"layout-navbar-nav"}),r.createElement(ue.Collapse,{id:"layout-navbar-nav"},r.createElement(xe,{activeKey:t.pathname,as:"ul"},r.createElement(xe.Item,{as:"li"},r.createElement(xe.Link,{as:a.rU,eventKey:"/",to:"/",activeClassName:"active"},r.createElement(Se,{alt:"house logo",size:"25",className:"mr-2"}),"Home")),r.createElement(xe.Item,{as:"li"},r.createElement(xe.Link,{as:a.rU,eventKey:"/Portfolio/",to:"/Portfolio/",activeClassName:"active"},r.createElement(ze,{size:"25",className:"mr-2"}),"Portfolio")),r.createElement(xe.Item,{as:"li"},r.createElement(ge.Z,{variant:"outline-light",href:De},r.createElement(Me,{size:"25",className:"mr-2"}),"Resume"))))),r.createElement(f,{fluid:"md",className:"my-3"},n))}},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=commons-2a73a2460b7d7aa6e056.js.map