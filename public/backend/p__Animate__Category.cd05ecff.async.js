(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{ld46:function(e,t,a){e.exports={main:"antd-pro-pages-animate-category-main",leftmenu:"antd-pro-pages-animate-category-leftmenu",right:"antd-pro-pages-animate-category-right",title:"antd-pro-pages-animate-category-title"}},uqNx:function(e,t,a){"use strict";a.r(t);var n=a("2Taf"),i=a.n(n),r=a("vZ4D"),o=a.n(r),s=a("l4Ni"),c=a.n(s),m=a("ujKo"),l=a.n(m),u=a("MhPg"),d=a.n(u),h=(a("lUTK"),a("BvKs")),p=a("q1tI"),g=a.n(p),y=a("3a4m"),f=a.n(y),v=a("LLXN"),k=a("v99g"),w=a("ld46"),E=a.n(w),K=h["a"].Item,M=function(e){function t(e){var a;i()(this,t),a=c()(this,l()(t).call(this,e)),a.getmenu=function(){var e=a.state.menuMap;return Object.keys(e).map(function(t){return g.a.createElement(K,{key:t},e[t])})},a.selectKey=function(e){var t=e.key;f.a.push("/animate/category/".concat(t)),a.setState({selectKey:t})},a.resize=function(){a.main&&requestAnimationFrame(function(){var e="inline",t=a.main.offsetWidth;a.main.offsetWidth<641&&t>400&&(e="horizontal"),window.innerWidth<768&&t>400&&(e="horizontal"),a.setState({mode:e})})};var n=e.match,r=e.location,o={aarea:g.a.createElement(v["FormattedMessage"],{id:"menu.animate.category.area"}),ayear:g.a.createElement(v["FormattedMessage"],{id:"menu.animate.category.year"}),akind:g.a.createElement(v["FormattedMessage"],{id:"menu.animate.category.kind"}),atag:g.a.createElement(v["FormattedMessage"],{id:"menu.animate.category.tag"})},s=r.pathname.replace("".concat(n.path,"/"),"");return a.state={mode:"inline",menuMap:o,selectKey:o[s]?s:"aarea"},a}return d()(t,e),o()(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.state,n=a.mode,i=a.selectKey;return g.a.createElement(k["a"],{style:{height:"100%"}},g.a.createElement("div",{className:E.a.main,ref:function(t){e.main=t}},g.a.createElement("div",{className:E.a.leftmenu},g.a.createElement(h["a"],{mode:n,selectedKeys:[i],onClick:this.selectKey},this.getmenu())),g.a.createElement("div",{className:E.a.right},t)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.match,n=e.location,i=n.pathname.replace("".concat(a.path,"/"),"");return i=t.menuMap[i]?i:"aarea",i!==t.selectKey?{selectKey:i}:null}}]),t}(p["Component"]);t["default"]=M}}]);