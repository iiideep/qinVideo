(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{PZnI:function(e,n,t){"use strict";t.r(n);t("T2oS");var a=t("W9HT"),r=t("mrSG"),i=t("q1tI"),o=t.n(i),s=t("MuoO"),l=t("fFZ8"),c=t.n(l),m=t("vOnD"),u=t("Gwa3"),d=t("DNCa"),p=t("YO1i"),g=t("TSYQ"),h=t.n(g),v=t("qHAN"),E=t("rmP6"),f=t.n(E),b=(t("91UR"),e=>{var n=e.value,t={toolbar:!1};return o.a.createElement(f.a,{value:n,theme:"snow",readOnly:!0,modules:t})}),x=b,y=t("qki9"),w=t("wd/R"),k=t.n(w);function N(){var e=c()(["\n  margin-top: 40px;\n\n  .author {\n    height: 60px;\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    .avatar {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      background-color: rgba(0, 0, 0, 0.1);\n      margin-right: 15px;\n      background-size: cover;\n      background-position: center;\n    }\n\n    .info {\n      .name {\n        span:nth-child(1) {\n          font-size: 1.2em;\n          margin-right: 10px;\n        }\n\n        span:nth-child(2) {\n          opacity: 0.7;\n        }\n      }\n\n      .time {\n        span {\n          margin-right: 15px;\n          opacity: 0.8;\n\n          i {\n            margin-right: 5px;\n          }\n        }\n      }\n    }\n  }\n\n  .markdown {\n    background-color: white;\n    margin-bottom: 20px;\n    user-select: text;\n\n    img {\n      width: 100%;\n      margin-bottom: 20px;\n    }\n\n    .ql-container.ql-snow {\n      border: none;\n      padding: 0;\n    }\n\n    .ql-editor {\n      font-size: 1.1em;\n      padding: 0;\n    }\n  }\n\n  .option {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.05);\n    height: 60px;\n\n    .list {\n      padding: 0 40px;\n      color: white;\n      background-color: ",";\n      height: 40px;\n      line-height: 40px;\n      border-radius: 4px;\n      font-size: 1.3em;\n\n      &.active {\n        color: #ffa726;\n      }\n    }\n  }\n\n  .comment {\n    margin: 15px;\n  }\n"]);return N=function(){return e},e}var D=m["a"].div(N(),e=>e.color),O=e=>{var n=e.info,t=e.userAction;!n.author&&(n.author={avatar:window.config.avatar,name:"\u8d26\u53f7\u4e0d\u5b58\u5728",introduce:"\u7528\u6237\u5df2\u5220\u9664",level:0});n.slug;var a=Object(i["useContext"])(u["a"]),r=Object(i["useMemo"])(()=>a,[a]);return Object(i["useEffect"])(()=>{}),o.a.createElement(D,{color:r},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"author"},o.a.createElement("div",{className:"avatar",style:{backgroundImage:"url(".concat(n.author.avatar,")")}}),o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"name"},o.a.createElement("span",null,n.author.name),o.a.createElement("span",null,"Lv:",n.author.level)),o.a.createElement("div",{className:"time"},o.a.createElement("span",null," ",k()(n.createdAt).format("YYYY-MM-DD")),o.a.createElement("span",null,o.a.createElement(p["a"],{type:"icon-youtube"}),n.countPlay),o.a.createElement("span",null,o.a.createElement(p["a"],{type:"icon-comment"}),n.countComment),o.a.createElement("span",null,o.a.createElement(p["a"],{type:"icon-yizhuifan"}),o.a.createElement("span",null,n.countLike))))),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",null,n.title),o.a.createElement("img",{src:n.cover,alt:""}),n.content&&o.a.createElement(x,{value:n.content}))),o.a.createElement("div",{className:"option"},o.a.createElement(y["a"],null,o.a.createElement("div",{className:h()("list",{active:n.isLiked}),onClick:t},o.a.createElement(p["a"],{type:"icon-yizhuifan"}))),o.a.createElement(y["a"],null,o.a.createElement(v["a"],{type:"Post",target:n._id,onModel:"Post"},o.a.createElement("div",{className:"list"},o.a.createElement(p["a"],{type:"icon-guanyuwomen"}))))),o.a.createElement("div",{className:"comment"},o.a.createElement(d["a"],{target:n._id,onModel:"Post",mobile:!0})))},z=O,P=t("zz3R"),j=class extends i["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.slug,n=this.props.dispatch;e&&n({type:"post/getInfo",payload:{params:{slug:e}}}).then(e=>{e&&this.setState({info:e.data})})}),this.userAction=(()=>{var e=this.state.info;P["a"].userAction({data:{type:"Post",target:e._id}}).then(n=>{n&&(e.isLiked=!e.isLiked,this.setState({info:e}))})}),this.state={slug:e.match.params.slug,info:{}}}static getDerivedStateFromProps(e,n){return e.match.params.slug!==n.slug?{slug:e.match.params.slug}:null}componentDidMount(){this.initData()}componentDidUpdate(e,n){n.slug!==this.state.slug&&this.initData()}render(){var e=this.props.loading,n=this.state.info;return o.a.createElement(a["a"],{spinning:e},o.a.createElement(z,{info:n,userAction:this.userAction}))}};j=Object(r["a"])([Object(s["connect"])(e=>{var n=e.user,t=e.post,a=e.loading;return{user:n,post:t,loading:a.effects["post/getInfo"]}})],j);n["default"]=j}}]);