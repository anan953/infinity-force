(this["webpackJsonpinfinity-force"]=this["webpackJsonpinfinity-force"]||[]).push([[11],{451:function(e,t,c){"use strict";var s=c(454),r=c.n(s),n=c(27),a=c(455).a(),i=c(33),o=c(267),l=r.a.create({baseURL:n.a,timeout:6e4}),d="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(i.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(a.push(d),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(i.b),a.push(d),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),o.a.error(t),Promise.reject(e)}));var j=l,h={login:function(e){return j({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return j({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=h},457:function(e,t,c){"use strict";var s=c(0),r=c(37),n=c(3),a=c(4),i=c(6),o=c.n(i),l=c(76),d=function(e,t){var c={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(c[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(c[s[r]]=e[s[r]])}return c},j=function(e){return s.createElement(l.a,null,(function(t){var c,r=t.getPrefixCls,i=t.direction,l=e.prefixCls,j=e.type,h=void 0===j?"horizontal":j,u=e.orientation,b=void 0===u?"center":u,m=e.className,g=e.children,p=e.dashed,x=e.plain,f=d(e,["prefixCls","type","orientation","className","children","dashed","plain"]),O=r("divider",l),v=b.length>0?"-".concat(b):b,w=!!g,y=o()(O,"".concat(O,"-").concat(h),(c={},Object(a.a)(c,"".concat(O,"-with-text"),w),Object(a.a)(c,"".concat(O,"-with-text").concat(v),w),Object(a.a)(c,"".concat(O,"-dashed"),!!p),Object(a.a)(c,"".concat(O,"-plain"),!!x),Object(a.a)(c,"".concat(O,"-rtl"),"rtl"===i),c),m);return s.createElement("div",Object(n.a)({className:y},f,{role:"separator"}),g&&s.createElement("span",{className:"".concat(O,"-inner-text")},g))}))},h=c(105),u=c(510),b=c(507),m=c(435),g=c(513),p=c(514),x=c(1),f=function(){return Object(x.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(x.jsxs)("g",{children:[Object(x.jsx)("path",{fill:"#59C36A",d:"M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62\r l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112\r l134.777,20.558L827.301,875.968z"}),Object(x.jsx)("path",{fill:"#00A66C",d:"M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34\r C633.132,992.661,742.779,947.355,827.301,875.968z"}),Object(x.jsx)("g",{id:"Connected_Home_1_",children:Object(x.jsx)("g",{children:Object(x.jsx)("g",{children:Object(x.jsx)("g",{children:Object(x.jsx)("path",{fill:"#FFDA2D",d:"M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897\r c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154\r C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z"})})})})}),Object(x.jsx)("path",{fill:"#4086F4",d:"M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209\r c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666\r c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412\r C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z"}),Object(x.jsx)("path",{fill:"#4175DF",d:"M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759\r c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412\r H513.772v228.437H743.924z"}),Object(x.jsx)("path",{fill:"#FF641A",d:"M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881\r c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396\r c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18\r c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z"}),Object(x.jsx)("path",{fill:"#F03800",d:"M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643\r c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34\r C569.736,248.34,622.849,266.043,667.966,299.736z"})]})})},O=function(){return Object(x.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(x.jsxs)("g",{children:[Object(x.jsx)("path",{fill:"#4A7AFF",d:"M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524\r C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z"}),Object(x.jsx)("path",{fill:"#FFFFFF",d:"M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709\r H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038\r C593.602,133.68,663.688,149.015,663.688,149.015z"}),Object(x.jsx)("path",{fill:"#DCE1EB",d:"M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387\r h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z"})]})})},v=c(67),w=c(56),y=c(451),C=c(44),F=c(456),M=function(e){var t=Object(C.g)(),c=e.otherSignIn,r=e.showForgetPassword,n=e.hideAuthMessage,a=e.onForgetPasswordClick,i=e.showLoading,o=e.extra,l=e.loading,d=e.showMessage,w=e.message,M=e.authenticated,N=e.showAuthMessage,P=e.token,k=e.redirect,z=e.allowRedirect;Object(s.useEffect)((function(){null!==P&&z&&t.push(k),d&&setTimeout((function(){n()}),3e3)}));var I=Object(x.jsxs)("div",{children:[Object(x.jsx)(j,{children:Object(x.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(x.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(x.jsx)(h.a,{onClick:function(){i()},className:"mr-2",disabled:l,icon:Object(x.jsx)(v.a,{svg:f}),children:"Google"}),Object(x.jsx)(h.a,{onClick:function(){i()},icon:Object(x.jsx)(v.a,{svg:O}),disabled:l,children:"Facebook"})]})]});return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(F.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:d?1:0,marginBottom:d?20:0},children:Object(x.jsx)(u.a,{type:"error",showIcon:!0,message:w})}),Object(x.jsxs)(b.a,{layout:"vertical",name:"login-form",onFinish:function(e){i();y.a.login(e).then((function(e){M("fakeToken")})).then((function(e){N(e)}))},children:[Object(x.jsx)(b.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(x.jsx)(m.a,{prefix:Object(x.jsx)(g.a,{className:"text-primary"})})}),Object(x.jsx)(b.a.Item,{name:"password",label:Object(x.jsxs)("div",{className:"".concat(r?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(x.jsx)("span",{children:"Password"}),r&&Object(x.jsx)("span",{onClick:function(){return a},className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(x.jsx)(m.a.Password,{prefix:Object(x.jsx)(p.a,{className:"text-primary"})})}),Object(x.jsx)(b.a.Item,{children:Object(x.jsx)(h.a,{type:"primary",htmlType:"submit",block:!0,loading:l,children:"Sign In"})}),c?I:null,o]})]})};M.defaultProps={otherSignIn:!0,showForgetPassword:!1};var N={showAuthMessage:w.c,showLoading:w.d,hideAuthMessage:w.b,authenticated:w.a};t.a=Object(r.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),N)(M)},466:function(e,t,c){"use strict";c.r(t);var s=c(17),r=(c(0),c(457)),n=c(459),a=c(460),i=c(506),o=c(37),l=c(1),d={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(o.c)((function(e){return e.theme.currentTheme}));return Object(l.jsx)("div",{className:"h-100",style:d,children:Object(l.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(l.jsx)(n.a,{justify:"center",children:Object(l.jsx)(a.a,{xs:20,sm:20,md:20,lg:7,children:Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"my-4",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===t?"logo.png":"logo-white.png"),alt:""}),Object(l.jsxs)("p",{children:["Don't have an account yet? ",Object(l.jsx)("a",{href:"/auth/register-1",children:"Sign Up"})]})]}),Object(l.jsx)(n.a,{justify:"center",children:Object(l.jsx)(a.a,{xs:24,sm:24,md:20,lg:20,children:Object(l.jsx)(r.a,Object(s.a)({},e))})})]})})})})})})}}}]);
//# sourceMappingURL=11.fa81cec1.chunk.js.map