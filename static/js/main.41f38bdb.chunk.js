(this.webpackJsonpalphadecentralized=this.webpackJsonpalphadecentralized||[]).push([[0],{32:function(e,t,n){},51:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(25),i=n.n(s),l=(n(32),n(10)),o=n(3),j=n(4),b=n(6),d=n(5),u=n(26),O=n.n(u),p=(n(51),function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var n=e.state,a=n.apiKey,c=n.symbol;O.a.post("/",{apiKey:a,symbol:c}).then((function(e){}))},e.state={apiKey:"",symbol:""},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.apiKey,n=e.symbol;return Object(a.jsx)("div",{className:"QueryPadder",children:Object(a.jsxs)("form",{className:"QueryForm",onSubmit:this.onSubmit,children:[Object(a.jsx)("h1",{children:"CryptoQ"}),Object(a.jsx)("label",{children:Object(a.jsx)("a",{href:"https://coinlayer.com/signup/free",rel:"noreferrer",target:"_blank",children:"Need a free API Key?"})}),Object(a.jsxs)("label",{className:"CoinLayerKeyLabel",children:["API Key:",Object(a.jsx)("input",{type:"text",name:"apiKey",value:t,onChange:this.onChange})]}),Object(a.jsxs)("label",{className:"SymbolLabel",children:["Symbol(s):",Object(a.jsx)("input",{type:"text",name:"symbol",value:n,onChange:this.onChange})]}),Object(a.jsx)("div",{className:"QueryButtonWrapped",children:Object(a.jsx)("button",{className:"QueryButton",type:"submit",children:"Analyze"})})]})})}}]),n}(c.Component)),h=n(7),f=n(11),N=n.n(f),m=(n(23),n(24),n(67),function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"SliderWrapper",children:Object(a.jsxs)(N.a,Object(h.a)(Object(h.a)({},{arrows:!0,dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1}),{},{className:"ShowcaseSlider",children:[Object(a.jsx)("h2",{children:"Stonks 1"}),Object(a.jsx)("h2",{children:"Stonks 2"}),Object(a.jsx)("h2",{children:"Stonks 3"})]}))})}}]),n}(c.Component)),x=n.p+"static/media/coinlayer_logo.be650831.svg";n(68);function A(){return Object(a.jsx)("a",{href:"https://coinlayer.com",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("div",{className:"CoinLayer-showcase",children:Object(a.jsx)("img",{src:x,className:"CoinLayer-logo",alt:"coinlayer logo"})})})}var S=n.p+"static/media/Pandas_logo.47aa8f84.svg";n(69);function T(){return Object(a.jsx)("a",{href:"https://pandas.pydata.org/",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("div",{className:"Pandas-showcase",children:Object(a.jsx)("img",{src:S,className:"Pandas-logo",alt:"Pandas logo"})})})}var g=n.p+"static/media/logo.6ce24c58.svg";n(70);function z(){return Object(a.jsx)("a",{href:"https://reactjs.org",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("div",{className:"React-showcase",children:Object(a.jsx)("img",{src:g,className:"App-logo",alt:"react logo"})})})}n(71);function C(){return Object(a.jsx)("a",{href:"https://www.zipline.io/",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("div",{className:"Zipline-showcase",children:Object(a.jsx)("img",{src:"data:image/png;base64,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",className:"Zipline-logo",alt:"Zipline logo"})})})}n(72);var k=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"SliderWrapper",children:Object(a.jsxs)(N.a,Object(h.a)(Object(h.a)({},{arrows:!1,autoplay:!0,autoplaySpeed:1618,dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1}),{},{className:"ShowcaseSlider",children:[Object(a.jsx)("div",{children:Object(a.jsx)(z,{})}),Object(a.jsx)("div",{children:Object(a.jsx)(A,{})}),Object(a.jsx)("div",{children:Object(a.jsx)(T,{})}),Object(a.jsx)("div",{children:Object(a.jsx)(C,{})})]}))})}}]),n}(c.Component);n(73);function y(){return Object(a.jsx)("div",{className:"AppWrapper",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{}),Object(a.jsx)(m,{}),Object(a.jsx)(k,{})]})})}var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};document.title="Alpha, Decentralized.",i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),v()}},[[74,1,2]]]);
//# sourceMappingURL=main.41f38bdb.chunk.js.map