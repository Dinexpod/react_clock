(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),h=(n(12),n(0)),m=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={time:new Date},e.updateTimeScheduler=void 0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.updateTimeScheduler=setInterval((function(){e.setState({time:new Date}),console.log(e.state.time.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.log("The Clock was renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){void 0!==this.updateTimeScheduler&&clearInterval(this.updateTimeScheduler)}},{key:"render",value:function(){var e=this.state.time,t=this.props.name;return Object(h.jsxs)(h.Fragment,{children:[e.toLocaleTimeString(),-1!==t&&" (".concat(t,")")]})}}]),n}(u.a.Component),d=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={isClockVisible:!1,clockName:-1},e.showClock=function(){e.setState({isClockVisible:!0})},e.hideClock=function(){e.setState({isClockVisible:!1})},e.renameClock=function(){e.setState({clockName:Math.random()})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isClockVisible,n=e.clockName;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),Object(h.jsxs)("p",{children:["Current time:"," ",t&&Object(h.jsx)(m,{name:n})]}),Object(h.jsx)("button",{type:"button",onClick:this.showClock,children:"Show Clock"}),Object(h.jsx)("button",{type:"button",onClick:this.hideClock,children:"Hide Clock"}),Object(h.jsx)("button",{type:"button",onClick:this.renameClock,children:"Set random name"})]})}}]),n}(u.a.Component);o.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.080d4c56.chunk.js.map