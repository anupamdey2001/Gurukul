(this["webpackJsonpgurukul-e9c87"]=this["webpackJsonpgurukul-e9c87"]||[]).push([[0],{106:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(14),i=a.n(s),l=(a(106),a(13)),r=a(56),o=a(36),j=a(6),d=a(167),u=a(193),b=a(170),m=a(174),O=a(130),h=a(172),x=a(173),f=a(71),p=a.n(f),_=a(72),v=a.n(_),g=a(176),C=a(175),N=a(4),S=Object(d.a)({list:{width:250},fullList:{width:"auto"}});function k(){var e=S(),t=c.a.useState({top:!1}),a=Object(l.a)(t,2),n=a[0],s=a[1],i=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&s(Object(o.a)(Object(o.a)({},n),{},Object(r.a)({},e,t)))}},d=function(t){return Object(N.jsxs)("div",{className:Object(j.a)(e.list,Object(r.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:i(t,!1),onKeyDown:i(t,!1),children:[Object(N.jsx)(b.a,{children:["Inbox","Starred","Send email","Drafts"].map((function(e,t){return Object(N.jsxs)(O.a,{button:!0,children:[Object(N.jsx)(h.a,{children:t%2===0?Object(N.jsx)(p.a,{}):Object(N.jsx)(v.a,{})}),Object(N.jsx)(x.a,{primary:e})]},e)}))}),Object(N.jsx)(m.a,{}),Object(N.jsx)(b.a,{children:["All mail","Trash","Spam"].map((function(e,t){return Object(N.jsxs)(O.a,{button:!0,children:[Object(N.jsx)(h.a,{children:t%2===0?Object(N.jsx)(p.a,{}):Object(N.jsx)(v.a,{})}),Object(N.jsx)(x.a,{primary:e})]},e)}))})]})};return Object(N.jsx)("div",{children:["left"].map((function(t){return Object(N.jsxs)(c.a.Fragment,{children:[Object(N.jsx)(q,{children:Object(N.jsx)(C.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:i(t,!0),children:Object(N.jsx)(g.a,{})})}),Object(N.jsx)(u.a,{anchor:t,open:n[t],onClose:i(t,!1),onOpen:i(t,!0),children:d(t)})]},t)}))})}var w=a(178),y=a(179),A=a(65),I=a(90),D=a(182),U=a(194),T=a(180),J=a(181),E=a(44);a(117);E.a.initializeApp({apiKey:"AIzaSyAPN4Yna117qq9dvPfDkZv5RgUUUJCnA98",authDomain:"gurukul-e9c87.firebaseapp.com",projectId:"gurukul-e9c87",storageBucket:"gurukul-e9c87.appspot.com",messagingSenderId:"686263425083",appId:"1:686263425083:web:3f726ca25d07a77910a41e",measurementId:"G-QZYJTDREE0"});var L=E.a.firestore(),R=E.a.auth(),P=new E.a.auth.GoogleAuthProvider,G=E.a.storage(),M=L,W=Object(n.createContext)();function B(){return Object(n.useContext)(W)}function z(e){var t=e.children,a=Object(n.useState)(!1),c=Object(l.a)(a,2),s=c[0],i=c[1],r=Object(n.useState)(!1),o=Object(l.a)(r,2),j=o[0],d=o[1],u=Object(n.useState)(null),b=Object(l.a)(u,2),m=b[0],O=b[1],h=Object(n.useState)(null),x=Object(l.a)(h,2),f=x[0],p=x[1];Object(n.useEffect)((function(){var e=R.onAuthStateChanged((function(e){e?(p(e.email),O(e)):(p(null),O(null))}));return function(){return e()}}),[]);var _={createClassDialog:s,setCreateClassDialog:i,joinClassDialog:j,setJoinClassDialog:d,login:function(){return R.signInWithPopup(P)},logout:function(){return R.signOut()},loggedInMail:f,loggedInUser:m};return Object(N.jsx)(W.Provider,{value:_,children:t})}var F=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(1),color:"black"},title:{fontSize:"1.38rem",color:"#5f6368",marginLeft:"5px",cursor:"pointer"},appBar:{backgroundColor:"white",color:"black"},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center"},headerWrapper:{display:"flex",alignItems:"center"},header__wrapper__right:{display:"flex",justifyContent:"space-between",alignItems:"center"},icon:{marginRight:"15px",color:"#5f6368",cursor:"pointer"}}})),q=function(e){var t=e.children,a=F(),n=c.a.useState(null),s=Object(l.a)(n,2),i=s[0],r=s[1],o=function(){return r(null)},j=B(),d=j.setCreateClassDialog,u=j.setJoinClassDialog,b=j.loggedInUser,m=j.logout;return Object(N.jsxs)("div",{className:a.root,children:[Object(N.jsx)(w.a,{className:a.appBar,position:"static",children:Object(N.jsxs)(y.a,{className:a.toolbar,children:[Object(N.jsxs)("div",{className:a.headerWrapper,children:[t,Object(N.jsx)("h1",{children:"GURUKUL"}),Object(N.jsx)(A.a,{variant:"h6",className:a.title,children:"Classroom"})]}),Object(N.jsxs)("div",{className:a.header__wrapper__right,children:[Object(N.jsx)(T.a,{onClick:function(e){return r(e.currentTarget)},className:a.icon}),Object(N.jsx)(J.a,{className:a.icon}),Object(N.jsxs)(I.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:o,children:[Object(N.jsx)(D.a,{onClick:function(){o(),u(!0)},children:"Join Class"}),Object(N.jsx)(D.a,{onClick:function(){o(),d(!0)},children:"Create Class"})]}),Object(N.jsx)("div",{children:Object(N.jsx)(U.a,{onClick:function(){return m()},src:null===b||void 0===b?void 0:b.photoURL,className:a.icon})})]})]})}),Object(N.jsx)(ee,{}),Object(N.jsx)(ce,{})]})},K=a(185),Y=a(186),Z=a(192),H=a(183),Q=a(184),V=a(190),X=a(191),$=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),r=i[0],o=i[1],j=Object(n.useState)(""),d=Object(l.a)(j,2),u=d[0],b=d[1],m=Object(n.useState)(""),O=Object(l.a)(m,2),h=O[0],x=O[1],f=B(),p=f.loggedInMail,_=f.setCreateClassDialog;return Object(N.jsxs)("div",{className:"form",children:[Object(N.jsx)("p",{className:"class__title",children:"Create Class"}),Object(N.jsxs)("div",{className:"form__inputs",children:[Object(N.jsx)(V.a,{id:"filled-basic",label:"Class Name (required)",className:"form__input",variant:"filled",value:a,onChange:function(e){return c(e.target.value)}}),Object(N.jsx)(V.a,{id:"filled-basic",label:"Section",className:"form__input",variant:"filled",value:r,onChange:function(e){return o(e.target.value)}}),Object(N.jsx)(V.a,{id:"filled-basic",label:"Subject",className:"form__input",variant:"filled",value:h,onChange:function(e){return x(e.target.value)}}),Object(N.jsx)(V.a,{id:"filled-basic",label:"Room",className:"form__input",variant:"filled",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(N.jsx)(H.a,{children:Object(N.jsx)(Q.a,{onClick:function(e){e.preventDefault();var t=Object(X.a)();M.collection("CreatedClasses").doc(p).collection("classes").doc(t).set({owner:p,className:a,section:r,room:u,id:t}).then((function(){_(!1)}))},color:"primary",children:"Create"})})]})},ee=(a(119),function(){var e=B(),t=e.createClassDialog,a=e.setCreateClassDialog,c=Object(n.useState)(!1),s=Object(l.a)(c,2),i=s[0],r=s[1],o=Object(n.useState)(!1),j=Object(l.a)(o,2),d=j[0],u=j[1];return Object(N.jsx)("div",{children:Object(N.jsx)(K.a,{onClose:function(){return a(!1)},"aria-labelledby":"customized-dialog-title",open:t,maxWidth:d?"lg":"xs",className:"form__dialog",children:d?Object(N.jsx)($,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"class__title",children:"Using Classroom at a school with students?"}),Object(N.jsxs)(Y.a,{className:"class__content",children:[Object(N.jsxs)("p",{className:"class__text",children:[Object(N.jsx)("p",{children:"If so, your school must sign up for a free"}),Object(N.jsx)("a",{href:"/help",className:"class__link",children:"G Suite for Education"}),"account before you can use Classroom",Object(N.jsx)("a",{href:"/learn",className:"class__link2",children:"Learn More."})]}),Object(N.jsxs)("p",{children:["G Suite for Education lets schools decide which Google services their students can use, and provides additional",Object(N.jsx)("a",{href:"/privacy",className:"class__link2 class__link",children:"privacy and security"}),"protections that are important in a school setting. Students cannot use Google Classroom at a school with personal accounts."]}),Object(N.jsxs)("div",{className:"class__checkboxWrapper",children:[Object(N.jsx)(Z.a,{color:"primary",onChange:function(){return r(!i)}}),Object(N.jsx)("p",{children:"I've read and understand the above notice, and I'm not using Classroom at a school with students"})]})]}),Object(N.jsxs)(H.a,{children:[Object(N.jsx)(Q.a,{autoFocus:!0,onClick:function(){return a(!1)},children:"Close"}),Object(N.jsx)(Q.a,{autoFocus:!0,color:"primary",disabled:!i,onClick:function(){return u(!0)},children:"Continue"})]})]})})})}),te=a(177),ae=a(187),ne=(a(120),c.a.forwardRef((function(e,t){return Object(N.jsx)(te.a,Object(o.a)({direction:"up",ref:t},e))}))),ce=function(){var e=B(),t=e.joinClassDialog,a=e.setJoinClassDialog,c=e.loggedInUser,s=Object(n.useState)(""),i=Object(l.a)(s,2),r=i[0],o=i[1],j=Object(n.useState)(""),d=Object(l.a)(j,2),u=d[0],b=d[1],m=Object(n.useState)(),O=Object(l.a)(m,2),h=O[0],x=O[1],f=Object(n.useState)(),p=Object(l.a)(f,2),_=p[0],v=p[1],g=Object(n.useState)(!1),C=Object(l.a)(g,2),S=C[0],k=C[1];return Object(N.jsx)("div",{children:Object(N.jsx)(K.a,{fullScreen:!0,open:t,onClose:function(){return a(!1)},TransitionComponent:ne,children:Object(N.jsxs)("div",{className:"joinClass",children:[Object(N.jsxs)("div",{className:"joinClass__wrapper",children:[Object(N.jsxs)("div",{className:"joinClass__wraper2",onClick:function(){return a(!1)},children:[Object(N.jsx)(ae.a,{className:"joinClass__svg"}),Object(N.jsx)("div",{className:"joinClass__topHead",children:"Join Class"})]}),Object(N.jsx)(Q.a,{className:"joinClass__btn",variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),M.collection("CreatedClasses").doc(u).collection("classes").doc(r).get().then((function(e){if(!e.exists||e.owner===c.email)return x(!0),void k(!1);k(!0),v(e.data()),x(!1)})),!0===S&&M.collection("JoinedClasses").doc(c.email).collection("classes").doc(r).set({joinedData:_}).then((function(){a(!1)}))},children:"Join"})]}),Object(N.jsxs)("div",{className:"joinClass__form",children:[Object(N.jsxs)("p",{className:"joinClass__formText",children:["You're currently signed in as ",null===c||void 0===c?void 0:c.email]}),Object(N.jsxs)("div",{className:"joinClass__loginInfo",children:[Object(N.jsxs)("div",{className:"joinClass__classLeft",children:[Object(N.jsx)(U.a,{src:null===c||void 0===c?void 0:c.photoURL}),Object(N.jsxs)("div",{className:"joinClass__loginText",children:[Object(N.jsx)("div",{className:"joinClass__loginName",children:null===c||void 0===c?void 0:c.displayName}),Object(N.jsx)("div",{className:"joinClass__loginEmail",children:null===c||void 0===c?void 0:c.email})]})]}),Object(N.jsx)(Q.a,{variant:"outlined",color:"primary",children:"Logout"})]})]}),Object(N.jsxs)("div",{className:"joinClass__form",children:[Object(N.jsx)("div",{style:{fontSize:"1.25rem",color:"#3c4043"},className:"joinClass__formText",children:"Class Code"}),Object(N.jsx)("div",{style:{color:"#3c4043",marginTop:"-5px"},className:"joinClass__formText",children:"Ask your teacher for the class code, then enter it here."}),Object(N.jsxs)("div",{className:"joinClass__loginInfo",children:[Object(N.jsx)(V.a,{id:"outlined-basic",label:"Class Code",variant:"outlined",value:r,onChange:function(e){return o(e.target.value)},error:h,helperText:h&&"No class was found"}),Object(N.jsx)(V.a,{id:"outlined-basic",label:"Owner's email",variant:"outlined",value:u,onChange:function(e){return b(e.target.value)}})]})]})]})})})},se=a.p+"static/media/logo.bf7366f2.png",ie=(a(121),function(){var e=B(),t=e.login,a=e.loggedInUser;return console.log(a),Object(N.jsxs)("div",{className:"login",children:[Object(N.jsx)("img",{className:"login__logo",src:se,alt:"Classroom"}),Object(N.jsx)(Q.a,{variant:"contained",color:"default",onClick:function(){return t()},children:"Login Now!"})]})}),le=a(188),re=a(189),oe=a(55),je=(a(122),function(e){var t=e.classData;return Object(N.jsxs)("li",{className:"joined__list",children:[Object(N.jsxs)("div",{className:"joined__wrapper",children:[Object(N.jsxs)("div",{className:"joined__container",children:[Object(N.jsx)("div",{className:"joined__imgWrapper"}),Object(N.jsx)("div",{className:"joined__image"}),Object(N.jsxs)("div",{className:"joined__content",children:[Object(N.jsx)(oe.b,{className:"joined__title",to:"/".concat(t.id),children:Object(N.jsx)("h2",{children:t.className})}),Object(N.jsx)("p",{className:"joined__owner",children:t.owner})]})]}),Object(N.jsx)(U.a,{className:"joined__avatar",src:"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s75-c-fbw=1/photo.jpg"})]}),Object(N.jsxs)("div",{className:"joined__bottom",children:[Object(N.jsx)(le.a,{}),Object(N.jsx)(re.a,{})]})]})}),de=(a(126),function(e){var t=e.classData,a=B().loggedInMail,c=Object(n.useState)(!1),s=Object(l.a)(c,2),i=s[0],r=s[1],o=Object(n.useState)(""),j=Object(l.a)(o,2),d=j[0],u=j[1],b=Object(n.useState)(null),m=Object(l.a)(b,2),O=m[0],h=m[1];return Object(N.jsx)("div",{className:"main",children:Object(N.jsxs)("div",{className:"main__wrapper",children:[Object(N.jsx)("div",{className:"main__content",children:Object(N.jsxs)("div",{className:"main__wrapper1",children:[Object(N.jsx)("div",{className:"main__bgImage",children:Object(N.jsx)("div",{className:"main__emptyStyles"})}),Object(N.jsxs)("div",{className:"main__text",children:[Object(N.jsx)("h1",{className:"main__heading main__overflow",children:t.className}),Object(N.jsx)("div",{className:"main__section main__overflow",children:t.section}),Object(N.jsxs)("div",{className:"main__wrapper2",children:[Object(N.jsx)("em",{className:"main__code",children:"Class Code :"}),Object(N.jsx)("div",{className:"main__id",children:t.id})]})]})]})}),Object(N.jsxs)("div",{className:"main__announce",children:[Object(N.jsxs)("div",{className:"main__status",children:[Object(N.jsx)("p",{children:"Upcoming"}),Object(N.jsx)("p",{className:"main__subText",children:"No work due"})]}),Object(N.jsxs)("div",{className:"main__announcements",children:[Object(N.jsx)("div",{className:"main__announcementsWrapper",children:Object(N.jsx)("div",{className:"main__ancContent",children:i?Object(N.jsxs)("div",{className:"main__form",children:[Object(N.jsx)(V.a,{id:"filled-multiline-flexible",multiline:!0,label:"Announce Something to class",variant:"filled",value:d,onChange:function(e){return u(e.target.value)}}),Object(N.jsxs)("div",{className:"main__buttons",children:[Object(N.jsx)("input",{onChange:function(e){e.target.files[0]&&h(e.target.files[0])},variant:"outlined",color:"primary",type:"file"}),Object(N.jsxs)("div",{children:[Object(N.jsx)(Q.a,{onClick:function(){return r(!1)},children:"Cancel"}),Object(N.jsx)(Q.a,{onClick:function(){G.ref("images/".concat(O.name)).put(O).on("state_changed",(function(){G.ref("images").child(O.name).getDownloadURL().then((function(e){M.collection("announcments").doc("classes").collection(t.id).add({timstamp:E.a.firestore.FieldValue.serverTimestamp(),imageUrl:e,text:d,sender:a})}))}))},color:"primary",variant:"contained",children:"Post"})]})]})]}):Object(N.jsxs)("div",{className:"main__wrapper100",onClick:function(){return r(!0)},children:[Object(N.jsx)(U.a,{}),Object(N.jsx)("div",{children:"Announce Something to class"})]})})}),Object(N.jsx)(ue,{classData:t})]})]})]})})}),ue=(a(127),function(e){var t=e.classData,a=Object(n.useState)([]),c=Object(l.a)(a,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){if(t){var e=M.collection("announcments").doc("classes").collection(t.id).onSnapshot((function(e){i(e.docs.map((function(e){return e.data()})))}));return function(){return e()}}}),[t]),console.log(s),Object(N.jsx)("div",{children:s.map((function(e){return Object(N.jsx)("div",{className:"amt",children:Object(N.jsxs)("div",{className:"amt__Cnt",children:[Object(N.jsxs)("div",{className:"amt__top",children:[Object(N.jsx)(U.a,{}),Object(N.jsx)("div",{children:e.sender})]}),Object(N.jsx)("p",{className:"amt__txt",children:e.text}),Object(N.jsx)("img",{className:"amt__img",src:e.imageUrl,alt:e.text})]})})}))})}),be=a(18),me=a(74),Oe=["user","loggedInPath","children"],he=["user","children"];function xe(e){var t=e.user,a=e.loggedInPath,n=e.children,c=Object(me.a)(e,Oe);return Object(N.jsx)(be.b,Object(o.a)(Object(o.a)({},c),{},{render:function(){return t?t?Object(N.jsx)(be.a,{to:{pathname:a}}):null:n}}))}function fe(e){var t=e.user,a=e.children,n=Object(me.a)(e,he);return Object(N.jsx)(be.b,Object(o.a)(Object(o.a)({},n),{},{render:function(e){var n=e.location;return t?a:t?null:Object(N.jsx)(be.a,{to:{pathname:"signin",state:{from:n}}})}}))}var pe=function(){var e=B().loggedInMail,t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)([]),r=Object(l.a)(i,2),o=r[0],j=r[1];return Object(n.useEffect)((function(){if(e){var t=M.collection("CreatedClasses").doc(e).collection("classes").onSnapshot((function(e){s(e.docs.map((function(e){return e.data()})))}));return function(){return t()}}}),[e]),Object(n.useEffect)((function(){if(e){var t=M.collection("JoinedClasses").doc(e).collection("classes").onSnapshot((function(e){j(e.docs.map((function(e){return e.data().joinedData})))}));return function(){return t()}}}),[e]),Object(N.jsx)(oe.a,{children:Object(N.jsxs)(be.d,{children:[c.map((function(e,t){return Object(N.jsxs)(be.b,{exact:!0,path:"/".concat(e.id),children:[Object(N.jsx)(k,{}),Object(N.jsx)(de,{classData:e})]},t)})),o.map((function(e,t){return Object(N.jsxs)(be.b,{exact:!0,path:"/".concat(e.id),children:[Object(N.jsx)(k,{}),Object(N.jsx)(de,{classData:e})]},t)})),Object(N.jsx)(xe,{user:e,loggedInPath:"/",path:"/signin",exact:!0,children:Object(N.jsx)(ie,{})}),Object(N.jsxs)(fe,{user:e,path:"/",exact:!0,children:[Object(N.jsx)(k,{}),Object(N.jsxs)("ol",{className:"joined",children:[c.map((function(e){return Object(N.jsx)(je,{classData:e})})),o.map((function(e){return Object(N.jsx)(je,{classData:e})}))]})]})]})})};i.a.render(Object(N.jsx)(z,{children:Object(N.jsx)(pe,{})}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.8995b3d0.chunk.js.map