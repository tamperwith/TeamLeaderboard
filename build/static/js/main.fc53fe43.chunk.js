(this.webpackJsonpleaderboard=this.webpackJsonpleaderboard||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(2),i=n.n(s),a=n(9),c=n.n(a),l=(n(16),n(11)),o=n(4),r=n(3),d=n(1),j=function(e){var t=e.subtract,n=e.handleClick,s=e.team_id;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{className:"button is-info is-light",onClick:function(){return n(s,t?-1:1)},children:1==t?Object(d.jsx)(r.c,{}):Object(d.jsx)(r.d,{})})})};j.defaultProps={subtract:!1};var u=j,b=function(e){var t=e.handleClick,n=e.team_id,s=e.color;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"button is-"+s,onClick:function(){t(n,s)}})})},h=function(e){var t=e.handleClick,n=e.team_id;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"level-left",children:["black","dark","white","warning","success","primary","info","link","danger"].map((function(e){return Object(d.jsx)(b,{handleClick:t,team_id:n,color:e})}))}),Object(d.jsx)("p",{children:"Color Select"})]})},m=function(e){var t=Object(s.useState)(!1),n=Object(o.a)(t,2),i=n[0],a=n[1];return Object(d.jsxs)("div",{className:"media team "+(e.editMode?"edit":"")+(i?" selected":""),onMouseOver:function(){a(!0)},onMouseLeave:function(){a(!1)},children:[Object(d.jsxs)("div",{className:"media-left",onDoubleClick:e.handlers.handleEdit,children:[e.editMode?Object(d.jsx)("input",{class:"input is-dark",type:"text",onChange:function(t){e.handlers.handleNameChange(e.settings.id,t.target.value)},defaultValue:e.settings.name}):Object(d.jsx)("h1",{className:"title",children:e.settings.name}),Object(d.jsxs)("div",{className:"level",children:[Object(d.jsx)("p",{children:"Points"}),Object(d.jsx)("input",{class:"points input is-dark",type:"number",value:e.settings.points,onChange:function(t){parseInt(t.target.value)&&e.handlers.setPoints(e.settings.id,parseInt(t.target.value))}})]})]}),Object(d.jsx)("div",{className:"media-content",children:e.editMode?Object(d.jsx)(h,{handleClick:e.handlers.handleSetColor,team_id:e.settings.id}):Object(d.jsx)("progress",{className:"progress is-large is-"+e.settings.color,value:e.settings.points,max:e.maxPoints})}),Object(d.jsx)("div",{className:"media-right count-btn",children:e.editMode?Object(d.jsx)("button",{class:"button is-large",onClick:function(){e.handlers.handleRemovingTeam(e.settings.id)},children:Object(d.jsx)(r.f,{})}):Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{handleClick:e.handlers.changePoints,team_id:e.settings.id}),Object(d.jsx)(u,{subtract:!0,handleClick:e.handlers.changePoints,team_id:e.settings.id})]})})]})},O=function(e){var t=e.content,n=Object(s.useState)(!1),i=Object(o.a)(n,2),a=i[0],c=i[1];return Object(d.jsxs)("div",{className:"settings"+(a?" clicked":""),children:[Object(d.jsx)("button",{className:"settings-btn button is-info",onClick:function(){return c(!a)},children:a?Object(d.jsx)(r.a,{}):Object(d.jsx)(r.b,{})}),a&&Object(d.jsx)("div",{className:"menu notification is-info",children:t})]})},x=function(e){var t=e.handlers,n=e.editMode;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:" Settings"}),Object(d.jsx)("p",{children:"Max Points"}),Object(d.jsx)("input",{class:"input is-primary",defaultValue:"100",onChange:t.handleMaxPoints,type:"number"}),Object(d.jsx)("p",{children:"Set points for all Teams"}),Object(d.jsx)("input",{class:"input is-primary",onChange:function(e){e.target.value.length>0&&t.setPoints("all",parseInt(e.target.value))},type:"number"}),Object(d.jsxs)("div",{className:"level",children:[Object(d.jsx)("button",{className:"button is-light",onClick:t.handleEdit,children:n?"Stop Editing":"Edit Teams"}),Object(d.jsx)("button",{className:"button is-danger is-small",onClick:t.handleRemoveAllTeams,children:"Delete All Teams"})]})]})},f=n(10),g=function(e){var t=e.handleClick;return Object(d.jsx)("button",{className:"button is-large is-outlined is-info addTeamButton",onClick:t,children:Object(d.jsx)(f.a,{})})},v=function(e){var t=e.handleClick;return Object(d.jsx)("button",{className:"button is-large is-outlined is-info editButton",onClick:t,children:Object(d.jsx)(r.e,{})})},p=n(8);var C=function(e){var t=e.closeResult,n=e.name,i=Object(s.useState)(!0),a=Object(o.a)(i,2),c=a[0];a[1];return c&&function(){var e=Date.now()+3e3,t={startVelocity:30,spread:360,ticks:60,zIndex:0};function n(e,t){return Math.random()*(t-e)+e}var s=setInterval((function(){var i=e-Date.now();if(i<=0)return clearInterval(s);var a=i/3e3*50;Object(p.a)(Object.assign({},t,{particleCount:a,origin:{x:n(.1,.3),y:Math.random()-.2}})),Object(p.a)(Object.assign({},t,{particleCount:a,origin:{x:n(.7,.9),y:Math.random()-.2}})),document.getElementsByTagName("canvas")[0].style.zIndex=600}),250)}(),Object(d.jsxs)("div",{className:"modal "+(c?"is-active":""),children:[Object(d.jsx)("div",{className:"modal-background"}),Object(d.jsx)("div",{className:"modal-card congratulations",children:Object(d.jsx)("section",{class:"hero is-medium is-info",children:Object(d.jsxs)("div",{class:"hero-body",children:[Object(d.jsx)("p",{class:"title",children:"CONGRATULATIONS!!!"}),Object(d.jsx)("p",{class:"subtitle",children:n})]})})}),Object(d.jsx)("button",{class:"delete is-large mt-5",onClick:t})]})};var k=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)(100),c=Object(o.a)(a,2),r=c[0],j=c[1],u=Object(s.useState)(!1),b=Object(o.a)(u,2),h=b[0],f=b[1],p=Object(s.useState)(void 0),k=Object(o.a)(p,2),N=k[0],y=k[1];function M(){var e=n.find((function(e){return e.points>=r}));void 0!==e&&y(e.name)}function P(e,t){i(n.map((function(n){return n.id!=e&&"all"!=e||(n.points+=t),n}))),M()}function S(e,t){i(n.map((function(n){return n.id!=e&&"all"!=e||(n.points=t),n}))),M()}function T(){f(!h)}function I(e){i(n.filter((function(t){return t.id!=e})))}function E(e,t){i(n.map((function(n){return n.id==e&&(n.name=t),n})))}function w(e,t){i(n.map((function(n){return n.id==e&&(n.color=t),n})))}return document.addEventListener("keydown",(function(e){h&&13==e.keyCode&&T()})),Object(d.jsxs)("div",{className:"section",children:[void 0!==N&&Object(d.jsx)(C,{closeResult:function(){y(void 0)},name:N}),Object(d.jsx)("div",{className:"teams",children:n.map((function(e){return Object(d.jsx)(m,{settings:e,editMode:h,maxPoints:r,handlers:{changePoints:P,setPoints:S,handleRemovingTeam:I,handleNameChange:E,handleEdit:T,handleSetColor:w}},e.id)}))}),Object(d.jsxs)("div",{className:"editButtons "+(h?"edit":""),children:[Object(d.jsx)(g,{handleClick:function(){i([].concat(Object(l.a)(n),[{name:"",points:0,id:0===n.length?0:n[n.length-1].id+1}])),f(!0)}}),Object(d.jsx)(v,{handleClick:T})]}),Object(d.jsx)(O,{content:Object(d.jsx)(x,{handlers:{handleMaxPoints:function(e){j(parseInt(e.target.value)),M()},setPoints:S,handleEdit:T,handleRemoveAllTeams:function(){i([])}},editMode:h})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),N()}},[[18,1,2]]]);
//# sourceMappingURL=main.fc53fe43.chunk.js.map