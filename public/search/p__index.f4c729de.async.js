(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{Gwa3:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var a=t("q1tI"),i=t.n(a),r=i.a.createContext("")},QeBL:function(n,e,t){"use strict";t.r(e);t("DjyN");var a=t("NUBc"),i=(t("IzEo"),t("bx4M")),r=(t("T2oS"),t("W9HT")),o=(t("Znn+"),t("ZTPi")),c=(t("5NDa"),t("5rEg")),l=t("mrSG"),s=t("q1tI"),p=t.n(s),d=t("XfOM"),u=t.n(d),g=t("MuoO"),m=t("3a4m"),h=t.n(m),x=t("LLXN"),f=(t("R9oj"),t("ECub")),y=t("fFZ8"),b=t.n(y),v=t("vOnD"),w=t("xEAY"),E=t("Gwa3"),k=t("YO1i"),z=t("wd/R"),j=t.n(z);function C(){var n=b()(["\n  .list {\n    margin-top: 20px;\n    height: 260px;\n    border-radius: 5px;\n    box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);\n    display: grid;\n    grid-template-columns: 190px 1fr 190px;\n    overflow: hidden;\n    .img {\n      background-color: rgba(0, 0, 0, 0.1);\n      background-size: cover;\n      border-radius: 5px;\n    }\n    .content {\n      padding: 15px;\n      .title {\n        line-height: 40px;\n        font-size: 26px;\n        color: black;\n        cursor: pointer;\n        &:hover {\n          color: ",";\n        }\n      }\n      .info {\n        line-height: 25px;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        span {\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          margin-right: 30px;\n          i {\n            font-size: 12px;\n            opacity: 0.6;\n            margin-right: 5px;\n          }\n          &:nth-child(2) i,\n          &:nth-child(3) i,\n          &:nth-child(4) i {\n            font-size: 15px;\n          }\n        }\n      }\n      .tags {\n        height: 25px;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        font-size: 14px;\n        color: rgba(0, 0, 0, 0.6);\n        span {\n          margin-right: 8px;\n        }\n      }\n      .impress {\n        height: 25px;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        font-size: 14px;\n        color: rgba(0, 0, 0, 0.6);\n      }\n      .introduce {\n        height: 120px;\n        line-height: 20px;\n        opacity: 0.8;\n        word-break: break-all;\n        overflow: hidden;\n        color: rgba(0, 0, 0, 0.75);\n      }\n    }\n    .rate {\n      background-color: rgba(0, 0, 0, 0.2);\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n      padding: 15px;\n      .title {\n        width: 100%;\n        height: 40px;\n        display: flex;\n        justify-content: space-between;\n        span:nth-child(1) {\n          font-size: 1.2em;\n          color: white;\n        }\n      }\n      .star {\n        font-size: 80px;\n        font-weight: solid;\n        height: 160px;\n        line-height: 160px;\n      }\n    }\n  }\n"]);return C=function(){return n},n}function N(){var n=b()(["\n  margin-bottom: 40px;\n  display: grid;\n  grid-gap: 40px 20px;\n  grid-template-columns: repeat(4, calc((100% - 60px) / 4));\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(4, calc((100% - 60px) / 4));\n  }\n  @media (min-width: 992px) {\n    grid-template-columns: repeat(5, calc((100% - 80px) / 5));\n  }\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(6, calc((100% - 100px) / 6));\n  }\n  @media (min-width: 1600px) {\n    grid-template-columns: repeat(8, calc((100% - 140px) / 8));\n  }\n  .top {\n    height: 0;\n    padding-top: 140%;\n    background-color: rgba(0, 0, 0, 0.1);\n    background-size: cover;\n    background-position: center;\n    border-radius: 6px;\n    vertical-align: bottom;\n    position: relative;\n    cursor: pointer;\n    span {\n      display: block;\n      width: 100%;\n      height: 30px;\n      line-height: 30px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      text-align: center;\n    }\n    .update {\n      position: absolute;\n      left: 0;\n      top: 0;\n      padding: 3px 10px;\n      color: white;\n      background-color: rgba(0, 0, 0, 0.5);\n      border-radius: 4px 0 4px 0;\n      &.active {\n        background-color: rgb(242, 93, 142);\n      }\n    }\n    .status {\n      position: absolute;\n      left: 0;\n      top: 0;\n      padding: 3px 10px;\n      color: white;\n      background-color: rgba(0, 0, 0, 0.5);\n      border-radius: 4px 0 4px 0;\n      &.publish {\n        background-color: rgb(242, 93, 142, 0.8);\n      }\n      &.reject {\n        background-color: red;\n      }\n    }\n  }\n"]);return N=function(){return n},n}var O=v["a"].div(N()),q=n=>{window.location.href="/animate/slug/".concat(n)},A=n=>{var e=n.list,t=n.update,a=void 0!==t&&t;return p.a.createElement(p.a.Fragment,null,0===e.length?p.a.createElement(f["a"],{style:{margin:"15px 0 "}}):p.a.createElement(O,null,e.map(n=>p.a.createElement("div",{className:"top",style:{backgroundImage:"url(".concat(n.coverVertical,")")},onClick:()=>{q(n.slug)},key:n.slug},p.a.createElement("span",null,n.title),a&&p.a.createElement("div",{className:Object(w["c"])(n.updatedAt)?"update active":"update"},Object(w["a"])(n.countEposide))))))},M=(v["a"].div(C(),n=>n.color),A);function S(){var n=b()(["\n  .list {\n    margin-top: 20px;\n    height: 260px;\n    border-radius: 5px;\n    box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);\n    display: grid;\n    grid-template-columns: 190px 1fr 190px;\n    overflow: hidden;\n    .img {\n      background-color: rgba(0, 0, 0, 0.1);\n      background-size: cover;\n      border-radius: 5px;\n    }\n    .content {\n      padding: 15px;\n      .title {\n        line-height: 40px;\n        font-size: 26px;\n        color: black;\n        cursor: pointer;\n        &:hover {\n          color: ",";\n        }\n      }\n      .info {\n        line-height: 25px;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        span {\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          margin-right: 30px;\n          i {\n            font-size: 12px;\n            opacity: 0.6;\n            margin-right: 5px;\n          }\n          &:nth-child(2) i,\n          &:nth-child(3) i,\n          &:nth-child(4) i {\n            font-size: 15px;\n          }\n        }\n      }\n      .tags {\n        height: 25px;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        font-size: 14px;\n        color: rgba(0, 0, 0, 0.6);\n        span {\n          margin-right: 8px;\n        }\n      }\n      .impress {\n        height: 25px;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        font-size: 14px;\n        color: rgba(0, 0, 0, 0.6);\n      }\n      .introduce {\n        height: 120px;\n        line-height: 20px;\n        opacity: 0.8;\n        word-break: break-all;\n        overflow: hidden;\n        color: rgba(0, 0, 0, 0.75);\n      }\n    }\n    .rate {\n      background-color: rgba(0, 0, 0, 0.2);\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n      padding: 15px;\n      .title {\n        width: 100%;\n        height: 40px;\n        display: flex;\n        justify-content: space-between;\n        span:nth-child(1) {\n          font-size: 1.2em;\n          color: white;\n        }\n      }\n      .star {\n        font-size: 80px;\n        font-weight: solid;\n        height: 160px;\n        line-height: 160px;\n      }\n    }\n  }\n"]);return S=function(){return n},n}function D(){var n=b()(["\n  margin-bottom: 40px;\n  display: grid;\n  grid-gap: 40px 20px;\n  grid-template-columns: repeat(4, calc((100% - 60px) / 4));\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(4, calc((100% - 60px) / 4));\n  }\n  @media (min-width: 992px) {\n    grid-template-columns: repeat(5, calc((100% - 80px) / 5));\n  }\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(6, calc((100% - 100px) / 6));\n  }\n  @media (min-width: 1600px) {\n    grid-template-columns: repeat(8, calc((100% - 140px) / 8));\n  }\n  .top {\n    height: 0;\n    padding-top: 140%;\n    background-color: rgba(0, 0, 0, 0.1);\n    background-size: cover;\n    background-position: center;\n    border-radius: 6px;\n    vertical-align: bottom;\n    position: relative;\n    cursor: pointer;\n    span {\n      display: block;\n      width: 100%;\n      height: 30px;\n      line-height: 30px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      text-align: center;\n    }\n    .update {\n      position: absolute;\n      left: 0;\n      top: 0;\n      padding: 3px 10px;\n      color: white;\n      background-color: rgba(0, 0, 0, 0.5);\n      border-radius: 4px 0 4px 0;\n      &.active {\n        background-color: rgb(242, 93, 142);\n      }\n    }\n    .status {\n      position: absolute;\n      left: 0;\n      top: 0;\n      padding: 3px 10px;\n      color: white;\n      background-color: rgba(0, 0, 0, 0.5);\n      border-radius: 4px 0 4px 0;\n      &.publish {\n        background-color: rgb(242, 93, 142, 0.8);\n      }\n      &.reject {\n        background-color: red;\n      }\n    }\n  }\n"]);return D=function(){return n},n}var B=v["a"].div(D()),_=n=>{window.location.href="/comic/slug/".concat(n)},P=n=>{var e=n.list,t=n.update,a=void 0!==t&&t;return p.a.createElement(p.a.Fragment,null,0===e.length?p.a.createElement(f["a"],{style:{margin:"15px 0 "}}):p.a.createElement(B,null,e.map(n=>p.a.createElement("div",{className:"top",style:{backgroundImage:"url(".concat(n.coverVertical,")")},onClick:()=>{_(n.slug)},key:n.slug},p.a.createElement("span",null,n.title),a&&p.a.createElement("div",{className:Object(w["c"])(n.updatedAt)?"update active":"update"},Object(w["a"])(n.countEposide))))))},F=(v["a"].div(S(),n=>n.color),P),T=(t("Telt"),t("Tckk")),Y=(t("/zsF"),t("PArb")),I=(t("cWXX"),t("/ezw"));function L(){var n=b()(["\n  .list {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n\n    &:hover {\n      .main {\n        .title {\n          span {\n            color: #1890ff;\n          }\n        }\n      }\n    }\n\n    .main {\n      width: calc(100% - 220px);\n      padding-right: 20px;\n      .title {\n        height: 35px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        span {\n          font-size: 20px;\n          color: #212121;\n        }\n      }\n      .info {\n        line-height: 30px;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        color: #99a2aa;\n\n        span.icon {\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          margin-right: 30px;\n          i {\n            font-size: 12px;\n            margin-right: 5px;\n          }\n          &:nth-child(4) i,\n          &:nth-child(5) i {\n            font-size: 15px;\n          }\n        }\n      }\n      .introduce {\n        height: 40px;\n        line-height: 20px;\n        overflow: hidden;\n        p {\n          margin-bottom: 0;\n          color: #99a2aa;\n        }\n      }\n    }\n    .cover {\n      width: 220px;\n      height: 120px;\n      img {\n        width: 100%;\n        height: 100%;\n        background-size: cover;\n        background-position: center;\n        border-radius: 5px;\n        object-fit: cover;\n        cursor: pointer;\n      }\n    }\n  }\n"]);return L=function(){return n},n}var X=v["a"].div(L()),G=n=>{window.location.href="/post/slug/".concat(n)},Z=n=>{var e=n.list,t=void 0===e?[]:e,a=n.loading,i=Object(s["useContext"])(E["a"]),r=Object(s["useMemo"])(()=>i,[i]);return a?p.a.createElement(I["a"],null):p.a.createElement(p.a.Fragment,null,0===t.length?p.a.createElement(f["a"],{style:{margin:"15px 0 "}}):p.a.createElement(X,{color:r},t.map((n,e)=>p.a.createElement(p.a.Fragment,null,0!==e&&p.a.createElement(Y["a"],{style:{backgroundColor:"#f4f5f7"}}),p.a.createElement("div",{className:"list",key:n._id,onClick:()=>{G(n.slug)}},p.a.createElement("div",{className:"main"},p.a.createElement("div",{className:"title"},p.a.createElement("span",null,n.title)),p.a.createElement("div",{className:"introduce"},p.a.createElement("p",null,n.introduce)),p.a.createElement("div",{className:"info"},p.a.createElement("span",null,p.a.createElement(T["a"],{size:24,icon:"user",src:n.author.avatar}),p.a.createElement("span",{style:{margin:"0 30px 0 5px"}},n.author.name)),p.a.createElement("span",{className:"icon"},p.a.createElement(k["a"],{type:"icon-icon-time"}),j()(n.createdAt).format("YYYY-MM-DD")),p.a.createElement("span",{className:"icon"},p.a.createElement(k["a"],{type:"icon-youtube"}),n.countPlay),p.a.createElement("span",{className:"icon"},p.a.createElement(k["a"],{type:"icon-yizhuifan"}),n.countLike),p.a.createElement("span",{className:"icon"},p.a.createElement(k["a"],{type:"icon-pinglun-tianchong"}),n.countComment))),p.a.createElement("div",{className:"cover"},p.a.createElement("img",{src:n.cover,alt:"cover"})))))))},R=Z;function W(){var n=b()(["\n  display: grid;\n  grid-gap: 24px;\n  grid-template-columns: 1fr;\n  margin-bottom: 30px;\n  margin-top: 10px;\n\n  .list {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 80px 1fr;\n    span {\n      padding: 3px 0;\n    }\n    .right {\n      span {\n        margin-right: 8px;\n        cursor: pointer;\n        display: inline-block;\n        padding: 3px 12px;\n        border-radius: 5px;\n        &.active,\n        &:hover {\n          background-color: #1890ff;\n          color: white;\n        }\n      }\n    }\n  }\n"]);return W=function(){return n},n}var H=v["a"].div(W()),J=n=>{var e=n.onChange,t=n.value,a=void 0===t?"updatedAt":t,i=n.type,r=void 0===i?"animate":i,o={animate:["updatedAt","countPlay","countlike","countComment","countDanmu"],comic:["updatedAt","countPlay","countlike","countComment"],post:["updatedAt","countPlay","countlike","countComment"]};return p.a.createElement(H,null,p.a.createElement("div",{className:"list"},p.a.createElement("span",null,Object(x["formatMessage"])({id:"search.all.filter.sortBy"}),":"),p.a.createElement("div",{className:"right"},o[r].map(n=>p.a.createElement("span",{className:a===n?"active":"",key:n._id,onClick:()=>{e(n)}},Object(x["formatMessage"])({id:"search.sort.".concat(n)}))))))},Q=J,U=c["a"].Search,V=o["a"].TabPane,$=class extends s["Component"]{constructor(n){super(n),this.initData=(()=>{var n=this.props.dispatch,e=this.state,t=e.keyword,a=e.type,i=e.page,r=e.size,o=e.sortBy,c=e.sortOrder;t&&(h.a.push({path:"/",query:{keyword:t,type:a}}),n({type:"search/queryList",payload:{query:{type:a,title:t,page:i,size:r,sortBy:o,sortOrder:c}}}))}),this.valueSync=(n=>{this.setState({keyword:n.target.value})}),this.indexSync=(n=>{this.setState({type:n,page:1,sortBy:"updatedAt"},this.initData)}),this.sortSync=(n=>{this.setState({page:1,sortBy:n},this.initData)}),this.pageChange=((n,e)=>{this.setState({page:n,size:e},this.initData)});var e=n.location;this.state={keyword:e.query&&e.query.keyword,type:e.query&&e.query.type||"queryAnimate",sortBy:"updatedAt",sortOrder:-1,size:20,page:1}}componentDidMount(){this.initData()}render(){var n=this.props,e=n.loading,t=n.search,c=this.state,l=c.keyword,s=c.type,d=c.page,g=c.size,m=c.sortBy,h=t[s].total||0;return p.a.createElement(r["a"],{spinning:!1,size:"large"},p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:u.a.index},p.a.createElement("div",{className:u.a.title},p.a.createElement("img",{src:window.config.logo,alt:""}),p.a.createElement(U,{placeholder:Object(x["formatMessage"])({id:"header.search"}),enterButton:Object(x["formatMessage"])({id:"common.search"}),size:"large",value:l,onSearch:this.initData,onChange:this.valueSync,style:{width:400}})),p.a.createElement("div",{className:u.a.main},p.a.createElement(o["a"],{defaultActiveKey:s,onChange:this.indexSync,tabBarGutter:100,size:"large"},p.a.createElement(V,{tab:Object(x["formatMessage"])({id:"search.menu.video"}),key:"queryAnimate"},p.a.createElement(Q,{type:"animate",value:m,onChange:this.sortSync}),p.a.createElement(i["a"],{style:{marginBottom:"20px"},loading:"queryAnimate"===s&&e&&0===t.queryAnimate.list.length},p.a.createElement(M,{list:t.queryAnimate.list||[]}))),p.a.createElement(V,{tab:Object(x["formatMessage"])({id:"search.menu.comic"}),key:"queryComic"},p.a.createElement(Q,{type:"comic",value:m,onChange:this.sortSync}),p.a.createElement(i["a"],{style:{marginBottom:"20px"},loading:"queryComic"===s&&e&&0===t.queryComic.list.length},p.a.createElement(F,{list:t.queryComic.list||[]}))),p.a.createElement(V,{tab:Object(x["formatMessage"])({id:"search.menu.post"}),key:"queryPost"},p.a.createElement(Q,{type:"post",value:m,onChange:this.sortSync}),p.a.createElement(i["a"],{style:{marginBottom:"20px"},loading:"queryPost"===s&&e&&0===t.queryPost.list.length},p.a.createElement(R,{list:t.queryPost.list||[]}))))),p.a.createElement("div",{className:u.a.footer},p.a.createElement(a["a"],{showTotal:n=>"".concat(Object(x["formatMessage"])({id:"footer.pagination.showtotal1"})).concat(n).concat(Object(x["formatMessage"])({id:"footer.pagination.showtotal2"})),defaultPageSize:g,defaultCurrent:d,total:h,onChange:this.pageChange})))))}};$=Object(l["a"])([Object(g["connect"])(n=>{var e=n.search,t=n.loading;return{search:e,loading:t.effects["search/queryList"]}})],$);e["default"]=$},XfOM:function(n,e,t){n.exports={index:"index___28nWn",title:"title___2cyli",footer:"footer___m_FDZ"}},YO1i:function(n,e,t){"use strict";t("Pwec");var a=t("CtXQ"),i=a["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_825484_l4aikldc86.js"});e["a"]=i},xEAY:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"a",function(){return o}),t.d(e,"c",function(){return c});t("p0pE");var a=t("wd/R"),i=t.n(a),r=(n,e)=>{var t=[];return n=n.substr(1),3===n.length&&(n=n.replace(/(.)/g,"$1$1")),n.replace(/../g,function(n){t.push(parseInt(n,16))}),"rgba(".concat(t.join(","),",").concat(e,")")};function o(n){return 1*n<10?"0".concat(n):n}var c=n=>{var e=i()(n),t=new Date,a=t.getDay();t.setHours(0),t.setMinutes(0),t.setSeconds(0),0===a?a=6:a-=1;var r=t.getTime()-1e3*a*3600*24;return e.valueOf()>r}}}]);