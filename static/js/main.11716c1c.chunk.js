(this.webpackJsonpalphadecentralized=this.webpackJsonpalphadecentralized||[]).push([[0],{23:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(9),i=n.n(s),j=n(10),l=n(2),d=n(3),o=n(5),b=n(4),h=Object(c.createContext)(),O=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={data:"Analyze some assets!"},e.setData=function(t){e.setState((function(e){return{data:t}}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.data,n=this.setData;return Object(a.jsx)(h.Provider,{value:{data:t,setData:n},children:e})}}]),n}(c.Component),u=h,p=(n(23),function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var n=e.context.setData,a=(e.state.assetClass,e.state.symbol);fetch("https://dangitsal.pythonanywhere.com/api/stocks?symbol=".concat(a)).then((function(e){return e.json()})).then((function(e){console.log(JSON.stringify(e)),n(e)})).catch((function(e){console.error(e)}))},e.state={symbol:"GOOGL"},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.symbol.symbol;return Object(a.jsx)("div",{className:"queryFormWrapper",children:Object(a.jsxs)("form",{className:"queryForm",onSubmit:this.onSubmit,children:[Object(a.jsxs)("label",{className:"symbolLabel",children:["Symbol:",Object(a.jsx)("input",{type:"text",name:"symbol",value:e,onChange:this.onChange})]}),Object(a.jsx)("div",{className:"queryButtonWrapped",children:Object(a.jsx)("button",{className:"queryButton",type:"submit",children:"Analyze"})})]})})}}]),n}(c.Component));p.contextType=u;var x=n(6),m=n(11),f=n.n(m),N=(n(39),function(){var e=Object(c.useContext)(u);return Object(a.jsxs)("div",{className:"fundamentalWrapper",children:[Object(a.jsx)("h3",{className:"fundamentalH3",children:"Fundamentals"}),Object(a.jsxs)("div",{className:"fundamentalBody",style:{marginTop:"24px"},children:[Object(a.jsxs)("div",{className:"fundamentalHeadings",children:[Object(a.jsx)("p",{children:"1Y Target (Analysts): "}),Object(a.jsx)("p",{children:"Price: "}),Object(a.jsx)("p",{children:"Ask: "}),Object(a.jsx)("p",{children:"Bid: "}),Object(a.jsx)("p",{children:"Open: "}),Object(a.jsx)("p",{children:"Previous Close: "}),Object(a.jsx)("p",{children:"Day's Range: "}),Object(a.jsx)("p",{children:"52 Week Range: "}),Object(a.jsx)("p",{children:"Beta (5Y Monthly): "}),Object(a.jsx)("p",{children:"Avg Volume: "}),Object(a.jsx)("p",{children:"Volume: "}),Object(a.jsx)("p",{children:"Market Cap: "}),Object(a.jsx)("p",{children:"Earnings Date: "}),Object(a.jsx)("p",{children:"Ex-Dividend Date: "}),Object(a.jsx)("p",{children:"Forward Dividend & Yield: "}),Object(a.jsx)("p",{children:"Earnings Per Share: "}),Object(a.jsx)("p",{children:"Price/Earnings Ratio: "})]}),Object(a.jsxs)("div",{className:"fundamentalValues",children:[Object(a.jsx)("p",{children:e.data["1y Target Est"]}),Object(a.jsx)("p",{children:e.data["Quote Price"]}),Object(a.jsx)("p",{children:e.data.Ask}),Object(a.jsx)("p",{children:e.data.Bid}),Object(a.jsx)("p",{children:e.data.Open}),Object(a.jsx)("p",{children:e.data["Previous Close"]}),Object(a.jsx)("p",{children:e.data["Day's Range"]}),Object(a.jsx)("p",{children:e.data["52 Week Range"]}),Object(a.jsx)("p",{children:e.data["Beta (5Y Monthly)"]}),Object(a.jsx)("p",{children:e.data["Avg. Volume"]}),Object(a.jsx)("p",{children:e.data.Volume}),Object(a.jsx)("p",{children:e.data["Market Cap"]}),Object(a.jsx)("p",{children:e.data["Earnings Date"]}),Object(a.jsx)("p",{children:e.data["Ex-Dividend Date"]}),Object(a.jsx)("p",{children:e.data["Forward Dividend & Yield"]}),Object(a.jsx)("p",{children:e.data["EPS (TTM)"]}),Object(a.jsx)("p",{children:e.data["PE Ratio (TTM)"]})]})]})]})}),v=Object(c.createContext)(),g=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={data:"Loading..."},e.setData=function(t){e.setState((function(e){return{data:t}}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.data,n=this.setData;return fetch("https://dangitsal.pythonanywhere.com/api/redditstocks").then((function(e){return e.json()})).then((function(e){console.log(JSON.stringify(e)),n(e)})).catch((function(e){console.error(e)})),Object(a.jsx)(v.Provider,{value:{data:t,setData:n},children:e})}}]),n}(c.Component),y=v,A=n(17),T=(n(40),function(){return Object(a.jsx)(A.a,{trigger:function(e){return Object(a.jsx)("button",{className:"tipbutton",children:"Data Info"})},position:"right center",closeOnDocumentClick:!0,children:Object(a.jsxs)("span",{children:['Mentions are counted from the top threads last 24 hours, not including "more comments" from any comment tree.',Object(a.jsx)("br",{}),"Subreddits include: r/WallStreetBets, r/stocks, r/investing, r/smallstreetbets"]})})}),k=(n(41),function(){var e=new Date,t=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")[e.getDay()],n=function(){var t=e;return/1/.test(parseInt((t+"").charAt(0)))?"th":1==(t=parseInt((t+"").charAt(1)))?"st":2==t?"nd":3==t?"rd":"th"}(),r="9AM "+t+" "+(r+(e.getDate()<10)?"0"+e.getDate()+n:e.getDate()+n)+" of "+new Array("January","February","March","April","May","June","July","August","September","October","November","December")[e.getMonth()]+", "+e.getFullYear(),s=Object(c.useContext)(y);return Object(a.jsxs)("div",{className:"redditStocksWrapper",children:[Object(a.jsx)("h3",{children:"Top Mentioned Stocks on Reddit"}),Object(a.jsx)(T,{}),Object(a.jsx)("p",{children:r}),Object(a.jsxs)("div",{className:"redditStocksBody",style:{marginTop:"24x"},children:[Object(a.jsxs)("div",{className:"tickersColumn",children:[Object(a.jsx)("p",{children:"Ticker"}),Object(a.jsx)("p",{children:s.data[0].ticker}),Object(a.jsx)("p",{children:s.data[1].ticker}),Object(a.jsx)("p",{children:s.data[2].ticker}),Object(a.jsx)("p",{children:s.data[3].ticker}),Object(a.jsx)("p",{children:s.data[4].ticker}),Object(a.jsx)("p",{children:s.data[5].ticker}),Object(a.jsx)("p",{children:s.data[6].ticker}),Object(a.jsx)("p",{children:s.data[7].ticker}),Object(a.jsx)("p",{children:s.data[8].ticker}),Object(a.jsx)("p",{children:s.data[9].ticker})]}),Object(a.jsxs)("div",{className:"mentionsColumn",children:[Object(a.jsx)("p",{children:"Mentions"}),Object(a.jsx)("p",{children:s.data[0].mentions}),Object(a.jsx)("p",{children:s.data[1].mentions}),Object(a.jsx)("p",{children:s.data[2].mentions}),Object(a.jsx)("p",{children:s.data[3].mentions}),Object(a.jsx)("p",{children:s.data[4].mentions}),Object(a.jsx)("p",{children:s.data[5].mentions}),Object(a.jsx)("p",{children:s.data[6].mentions}),Object(a.jsx)("p",{children:s.data[7].mentions}),Object(a.jsx)("p",{children:s.data[8].mentions}),Object(a.jsx)("p",{children:s.data[9].mentions})]})]})]})}),S=(n(15),n(16),n(42),function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"reportWrapper",children:Object(a.jsxs)(f.a,Object(x.a)(Object(x.a)({},{arrows:!1,dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1}),{},{className:"reportSlider",children:[Object(a.jsxs)("div",{className:"financials",children:[Object(a.jsx)("h2",{children:"Financials"}),Object(a.jsx)(N,{className:"fundamentalReport"})]}),Object(a.jsxs)("div",{className:"quantitative",children:[Object(a.jsx)("h2",{children:"Quantitative"}),Object(a.jsx)("div",{className:"quantitativeBody",children:Object(a.jsx)(k,{className:"redditStocksReport"})})]}),Object(a.jsxs)("div",{className:"indicators",children:[Object(a.jsx)("h2",{children:"Indicators"}),Object(a.jsx)("div",{className:"indicatorsBody"})]})]}))})}}]),n}(c.Component)),C=n.p+"static/media/Pandas_logo.47aa8f84.svg";n(43);function E(){return Object(a.jsx)("a",{href:"https://pandas.pydata.org/",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("div",{className:"Pandas-showcase",children:Object(a.jsx)("img",{src:C,className:"Pandas-logo",alt:"Pandas logo"})})})}var z=n.p+"static/media/logo.6ce24c58.svg";n(44);function D(){return Object(a.jsx)("a",{href:"https://reactjs.org",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("div",{className:"React-showcase",children:Object(a.jsx)("img",{src:z,className:"App-logo",alt:"react logo"})})})}n(45);function V(){return Object(a.jsx)("a",{href:"https://www.zipline.io/",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("div",{className:"Zipline-showcase",children:Object(a.jsx)("img",{src:"data:image/png;base64,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",className:"Zipline-logo",alt:"Zipline logo"})})})}n(46);var U=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"sliderWrapper",children:Object(a.jsxs)(f.a,Object(x.a)(Object(x.a)({},{arrows:!1,autoplay:!0,autoplaySpeed:1618,dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1}),{},{className:"showcaseSlider",children:[Object(a.jsx)("div",{children:Object(a.jsx)(D,{})}),Object(a.jsx)("div",{children:Object(a.jsx)(E,{})}),Object(a.jsx)("div",{children:Object(a.jsx)(V,{})})]}))})}}]),n}(c.Component);n(47);function M(){return Object(a.jsx)("div",{className:"appWrapper",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{}),Object(a.jsx)(S,{}),Object(a.jsx)(U,{})]})})}var R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(48);document.title="Alpha, Decentralized.",i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{children:Object(a.jsx)(g,{children:Object(a.jsx)(M,{})})})}),document.getElementById("root")),R()}},[[49,1,2]]]);
//# sourceMappingURL=main.11716c1c.chunk.js.map