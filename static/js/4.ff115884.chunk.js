(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[4],{295:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2abud",dialogsItems:"Dialogs_dialogsItems__2AfyV",item:"Dialogs_item__2DlkR",activeItem:"Dialogs_activeItem__1gopf",messages:"Dialogs_messages__33-2s",dialog:"Dialogs_dialog__bUJtd"}},296:function(e,s,t){"use strict";t.d(s,"a",(function(){return l}));var a=t(3),i=t(21),n=(t(0),t(9)),c=t(15),o=t(12),d=t(1),r=function(e){return{isAuth:e.auth.isAuth}};function l(e){return Object(o.d)(Object(c.b)(r))((function(s){s.isAuth;var t=Object(i.a)(s,["isAuth"]);return s.isAuth?Object(d.jsx)(e,Object(a.a)({},t)):Object(d.jsx)(n.a,{to:"/login"})}))}},304:function(e,s,t){"use strict";t.r(s);var a=t(106),i=(t(0),t(295)),n=t.n(i),c=t(1);var o=function(e){return Object(c.jsx)("div",{className:n.a.dialog,children:e.message})},d=t(20);var r=function(e){return Object(c.jsx)("div",{className:n.a.item,children:Object(c.jsx)(d.b,{to:"/dialogs/"+e.id,activeClassName:n.a.activeItem,children:e.name})})},l=t(129),u=t(130),j=t(67),b=t(89);var g=function(e){var s=e.state.dialogsPage.dialogsData.map((function(e){return Object(c.jsx)(r,{name:e.name,id:e.id},e.id)})),t=e.state.dialogsPage.messagesData.map((function(e){return Object(c.jsx)(o,{message:e.message},e.id)}));return Object(c.jsxs)("div",{className:n.a.dialogs,children:[Object(c.jsx)("div",{className:n.a.dialogsItems,children:s}),Object(c.jsxs)("div",{className:n.a.messages,children:[t,Object(c.jsx)("div",{children:Object(c.jsx)(m,{onSubmit:function(s){e.sendMessageAction(s.addMessageBody)}})})]})]})};var m=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(l.a,{name:"addMessageBody",component:j.b,placeholder:"Enter your message",validate:b.b})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Send"})})]})})),O=t(15),f=t(12),h=t(296);s.default=Object(f.d)(Object(O.b)((function(e){return{state:e}}),(function(e){return{sendMessageAction:function(s){e(Object(a.b)(s))}}})),h.a)(g)}}]);
//# sourceMappingURL=4.ff115884.chunk.js.map