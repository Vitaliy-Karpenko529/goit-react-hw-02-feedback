(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={item:"Statistics_item__ROLOE",result:"Statistics_result__2lMQ5"}},,function(e,t,a){e.exports={button:"Feedback_button__12HCF"}},function(e,t,a){e.exports={title:"Section_title__36ENF",section:"Section_section__14EEU"}},,,,,function(e,t,a){e.exports={message:"Notification_message__tKrNN"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(6),i=a.n(s),r=(a(17),a(7)),o=a(8),l=a(9),u=a(12),b=a(11),d=a(4),j=a.n(d),h=a(0);var m=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("div",{className:j.a.container,children:t.map((function(e){return Object(h.jsx)("button",{className:j.a.button,name:e,type:"button",onClick:a,children:e},e)}))})},f=a(10),O=a.n(f);function v(e){var t=e.massage;return Object(h.jsx)("p",{className:O.a.message,children:t})}v.defaultProps={message:""};var g=v,x=a(5),k=a.n(x);var p=function(e){var t=e.children,a=e.title;return Object(h.jsxs)("section",{className:k.a.section,children:[Object(h.jsx)("h2",{className:k.a.title,children:a}),t]})},_=a(2),N=a.n(_);var F=function(e){var t=e.positivePercentage,a=e.good,n=e.neutral,c=e.bad,s=e.total;return Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{className:N.a.item,children:["Good: ",a]}),Object(h.jsxs)("li",{className:N.a.item,children:["Neutral: ",n]}),Object(h.jsxs)("li",{className:N.a.item,children:["Bad: ",c]}),Object(h.jsxs)("li",{className:N.a.result,children:["Total: ",s]}),Object(h.jsxs)("li",{className:N.a.result,children:["Positive feedback: ",t,"%"]})]})},P=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,a=e.countTotalFeedback();return a?Math.round(t/a*100):0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.feedbackIncrease=function(t){e.setState((function(e){return Object(r.a)({},t.target.name,e[t.target.name]+1)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{title:"Please leave feedback",children:Object(h.jsx)(m,{options:Object.keys(this.state),onLeaveFeedback:this.feedbackIncrease})}),Object(h.jsx)(p,{title:"Statistics",children:0===c?Object(h.jsx)(g,{message:"No feedback given"}):Object(h.jsx)(F,{good:t,neutral:a,bad:n,total:c,positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(n.Component),S=P;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.9de2f07d.chunk.js.map