(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{288:function(e,a,t){e.exports={wrapperDilogs:"Dialogs_wrapperDilogs__W4hJg",dialogs__item:"Dialogs_dialogs__item__3OiOW",active:"Dialogs_active__3QOeU",avatar:"Dialogs_avatar__1DaGS"}},293:function(e,a,t){"use strict";t.r(a);var s=t(126),n=t(0),r=t.n(n),i=t(288),c=t.n(i),m=t(15),o=function(e){var a="/dialogs/"+e.id;return r.a.createElement("div",{className:c.a.dialogs__item},r.a.createElement("img",{className:c.a.avatar,src:"https://cdn.pixabay.com/photo/2017/05/06/18/12/avatar-2290470_960_720.jpg",alt:""}),r.a.createElement(m.b,{to:a},e.name))},l=function(e){return r.a.createElement("div",{className:c.a.messages__item},e.message)},u=t(89),g=t(127),p=t(33),d=t(86),b=Object(d.a)(10),_=Object(g.a)({form:"dialogs"})((function(e){return r.a.createElement("form",{className:c.a.formSendMessage,onSubmit:e.handleSubmit},r.a.createElement(u.a,{component:p.b,name:"newMessageText",validate:[d.b,b]}),r.a.createElement("button",null,"Send message"))})),f=function(e){var a=e.dialogData.map((function(e){return r.a.createElement(o,{name:e.name,id:e.id,key:e.id})})),t=e.messageData.map((function(e){return r.a.createElement(l,{message:e.message,key:e.id})}));return r.a.createElement("div",{className:c.a.wrapperDilogs},r.a.createElement("div",{className:c.a.dialogs},a),r.a.createElement("div",{className:c.a.messages},t,r.a.createElement(_,{onSubmit:function(a){e.sendMessage(a.newMessageText),a.newMessageText=""}})))},v=t(11),h=t(36),E=t(37),D=t(39),O=t(38),j=t(28),w=function(e){return{isAuth:e.auth.isAuth}},x=t(7);a.default=Object(x.d)(Object(v.b)((function(e){return{dialogData:e.messagesPage.dialogData,messageData:e.messagesPage.messageData,messageText:e.messagesPage.messageText}}),(function(e){return{sendMessage:function(a){return e(Object(s.b)(a))}}})),(function(e){var a=function(a){Object(D.a)(s,a);var t=Object(O.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(E.a)(s,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(j.a,{to:"/login"})}}]),s}(r.a.Component);return Object(v.b)(w)(a)}))(f)}}]);
//# sourceMappingURL=4.098ac337.chunk.js.map