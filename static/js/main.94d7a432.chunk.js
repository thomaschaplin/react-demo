(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){e.exports=a(384)},190:function(e,t,a){},191:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),i=a.n(l),c=(a(190),a(191),a(184)),o=a(23),s=a(24),u=a(26),p=a(25),m=a(27),h=a(22),f=a.n(h),v=a(11),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(f.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{title:"Your Name"}),r.a.createElement(v.e,{hintText:"Enter Your First Name",floatingLabelText:"First Name",onChange:a("firstname"),defaultValue:t.firstname}),r.a.createElement("br",null),r.a.createElement(v.e,{hintText:"Enter Your Last Name",floatingLabelText:"Last Name",onChange:a("lastname"),defaultValue:t.lastname}),r.a.createElement("br",null),r.a.createElement(v.d,{label:"Continue",primary:!0,style:{margin:15},onClick:this.continue})))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.previousStep()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(f.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{title:"Email Address"}),r.a.createElement(v.e,{hintText:"Enter Your Email Address",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email}),r.a.createElement("br",null),r.a.createElement(v.d,{label:"Continue",primary:!0,style:{margin:15},onClick:this.continue}),r.a.createElement(v.d,{label:"Back",primary:!1,style:{margin:15},onClick:this.back})))}}]),t}(n.Component),d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.previousStep()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(f.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{title:"Phone Number"}),r.a.createElement(v.e,{hintText:"Enter Your Phone Number",floatingLabelText:"Phone",onChange:a("phone"),defaultValue:t.phone}),r.a.createElement("br",null),r.a.createElement(v.d,{label:"Continue",primary:!0,style:{margin:15},onClick:this.continue}),r.a.createElement(v.d,{label:"Back",primary:!1,style:{margin:15},onClick:this.back})))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.previousStep()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.values,t=e.firstname,a=e.lastname,n=e.email,l=e.phone;return r.a.createElement(f.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{title:"Confirm"}),r.a.createElement(v.b,null,r.a.createElement(v.c,{primaryText:"First Name",secondaryText:t}),r.a.createElement(v.c,{primaryText:"Last Name",secondaryText:a}),r.a.createElement(v.c,{primaryText:"Email",secondaryText:n}),r.a.createElement(v.c,{primaryText:"Phone",secondaryText:l})),r.a.createElement("br",null),r.a.createElement(v.d,{label:"Continue",primary:!0,style:{margin:15},onClick:this.continue}),r.a.createElement(v.d,{label:"Back",primary:!1,style:{margin:15},onClick:this.back})))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,firstname:"",lastname:"",email:"",phone:""},a.nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.previousStep=function(){var e=a.state.step;a.setState({step:e-1})},a.handleChange=function(e){return function(t){a.setState(Object(c.a)({},e,t.target.value))}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t={firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone};switch(this.state.step){case 1:return r.a.createElement(b,{nextStep:this.nextStep,handleChange:this.handleChange,values:t});case 2:return r.a.createElement(E,{nextStep:this.nextStep,previousStep:this.previousStep,handleChange:this.handleChange,values:t});case 3:return r.a.createElement(d,{nextStep:this.nextStep,previousStep:this.previousStep,handleChange:this.handleChange,values:t});case 4:return r.a.createElement(g,{nextStep:this.nextStep,previousStep:this.previousStep,handleChange:this.handleChange,values:t});case 5:return r.a.createElement("h1",null,"Success")}}}]),t}(n.Component);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[185,1,2]]]);
//# sourceMappingURL=main.94d7a432.chunk.js.map