(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{YNlN:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,i,o=a("bx4M"),l=(a("g9YV"),a("wCAj")),s=(a("14J3"),a("BMrR")),d=(a("jCWc"),a("kPKH")),c=(a("+L6B"),a("2/Rp")),m=(a("/zsF"),a("PArb")),u=(a("2qtc"),a("kLXV")),p=a("p0pE"),f=a.n(p),y=a("2Taf"),g=a.n(y),h=a("vZ4D"),b=a.n(h),O=a("l4Ni"),M=a.n(O),j=a("ujKo"),w=a.n(j),E=a("rlhR"),v=a.n(E),C=a("MhPg"),x=a.n(C),I=(a("5NDa"),a("5rEg")),R=a("q1tI"),D=a.n(R),k=a("MuoO"),S=a("LLXN"),q=a("wd/R"),A=a.n(q),K=(a("giR+"),a("fyUT")),N=(a("y8nQ"),a("Vl3Y")),V=a("jehZ"),z=a.n(V),B=a("XII7"),T=I["a"].TextArea,Y=function(e){function t(){var e,a;g()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=M()(this,(e=w()(t)).call.apply(e,[this].concat(r))),a.state={show:!1,data:{}},a.handleSubmit=function(){var e=a.state.data,t=a.props,n=t.form,r=t.submit;n.validateFields(function(t,a){t||(console.log(a),a.target&&"string"!==typeof a.target&&(a.target=a.target.key),r(f()({},e,a)))})},a.handleCancel=function(){var e=a.props.cancel;a.setState({show:!1,data:{}}),e&&e()},a.modalShow=function(e){var t=e.type,n=e.data;a.setState({show:!0,data:f()({type:t},n)})},a}return x()(t,e),b()(t,[{key:"render",value:function(){var e=this.state,t=e.show,a=e.data,n=this.props.form.getFieldDecorator,r={labelCol:{span:4},wrapperCol:{span:18}},i="many"!==a.type&&"all"!==a.type;return D.a.createElement(u["a"],{title:Object(S["formatMessage"])({id:"common.edit"}),visible:t,maskClosable:!1,forceRender:"true",onOk:this.handleSubmit,onCancel:this.handleCancel,destroyOnClose:!0},D.a.createElement(N["a"],null,"new"===a.type&&D.a.createElement(N["a"].Item,z()({},r,{label:Object(S["formatMessage"])({id:"danmu.target"})}),n("target",{initialValue:a.target,rules:[{required:!0,message:{message:Object(S["formatMessage"])({id:"danmu.target.fill.tips"})}}]})(D.a.createElement(B["a"],null))),i&&D.a.createElement(N["a"].Item,z()({},r,{label:Object(S["formatMessage"])({id:"danmu.player"})}),n("player",{initialValue:a.player||""})(D.a.createElement(I["a"],null))),D.a.createElement(N["a"].Item,z()({},r,{label:Object(S["formatMessage"])({id:"danmu.content"})}),n("text",{initialValue:a.text||""})(D.a.createElement(T,{rows:4}))),D.a.createElement(N["a"].Item,z()({},r,{label:Object(S["formatMessage"])({id:"danmu.time"})}),n("time",{initialValue:a.time||0})(D.a.createElement(K["a"],null))),D.a.createElement(N["a"].Item,z()({},r,{label:Object(S["formatMessage"])({id:"danmu.color"})}),n("color",{initialValue:a.color||16777215})(D.a.createElement(I["a"],{placeholder:Object(S["formatMessage"])({id:"danmu.color"})})))))}}]),t}(R["PureComponent"]),L=N["a"].create()(Y),P=a("ZeOv"),_=I["a"].Search,F=(n=Object(k["connect"])(function(e){var t=e.danmu,a=e.loading;return{danmu:t,loading:a.models.danmu}}),n((i=function(e){function t(e){var a;g()(this,t),a=M()(this,w()(t).call(this,e)),a.editRef=D.a.createRef(null),a.submit=function(e){var t=a.props.dispatch,n=a.state.selectedRowKeys,r=e.type;if("many"===r||"all"===r||"one"===r){var i="one"===r?[e.id]:"all"===r?[]:n;t({type:"danmu/putDanmuBatch",payload:{data:f()({},e,{ids:i,type:0})}}).then(function(e){e&&a.editRef.handleCancel(),a.initData()})}else t({type:"danmu/postDanmu",payload:{data:f()({},e,{type:0})}}).then(function(e){e&&a.editRef.handleCancel(),a.initData()})},a.editNew=function(){a.edit({type:"new",data:{}})},a.editOne=function(e){var t={target:e.target?e.target._id:null,player:e.player,text:e.text,time:e.time,color:e.color,id:e._id};a.edit({type:"one",data:t})},a.editMany=function(){a.edit({type:"many"})},a.editAll=function(){a.edit({type:"all"})},a.edit=function(e){var t=e.type,n=e.data;a.editRef.modalShow({type:t,data:n})},a.deleteMany=function(){var e=a.state.selectedRowKeys;a.destroy(e)},a.deleteAll=function(){a.destroy([])},a.deleteOne=function(e){return function(){a.destroy([e])}},a.destroy=function(e){var t=a.props.dispatch;u["a"].confirm({title:Object(S["formatMessage"])({id:"danmu.list.delete.danmu"}),content:Object(S["formatMessage"])({id:"common.delete.tips"}),okText:Object(S["formatMessage"])({id:"common.confirm"}),cancelText:Object(S["formatMessage"])({id:"common.cancel"}),onOk:function(){return t({type:"danmu/deleteDanmuBatch",payload:{data:{ids:e}}}).then(function(e){e&&(a.initData(),a.setState({selectedRowKeys:[]}))})}})},a.onSearchVideo=function(e){a.query.title=e,a.query.page=1,a.initData()},a.onChangeTable=function(e,t,n){var r,i,o=e.current,l=e.pageSize,s=t.status?t.status[0]:null;n.order&&(r="descend"===n.order?-1:1,i=n.field),a.query=f()({},a.query,{size:l,page:o,sortBy:i,sortOrder:r,status:s}),a.initData()},a.initData=function(){var e=v()(a),t=e.query,n=a.props.dispatch;n({type:"danmu/queryDanmu",payload:{query:t}});var r=a.props,i=r.location.pathname,o=r.history;o.push({pathname:i,state:a.query})};var n=e.location.state,r=void 0===n?{}:n;return a.state={selectedRowKeys:[]},a.query={title:r.title,size:r.size?r.size:10,page:r.page?r.page:1,sortBy:r.sortBy,sortOrder:r.sortOrder,status:r.status},a}return x()(t,e),b()(t,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=this,t=this.state.selectedRowKeys,a=this.props,n=a.danmu,r=n.list,i=n.total,u=a.loading,p=[{title:Object(S["formatMessage"])({id:"danmu.target"}),dataIndex:"target",render:function(e){return e?e.title:Object(S["formatMessage"])({id:"common.deleted"})}},{title:Object(S["formatMessage"])({id:"danmu.player"}),dataIndex:"player",sorter:!0},{title:Object(S["formatMessage"])({id:"danmu.author"}),dataIndex:"author",sorter:!0},{title:Object(S["formatMessage"])({id:"danmu.content"}),dataIndex:"text"},{title:Object(S["formatMessage"])({id:"danmu.time"}),dataIndex:"time",sorter:!0},{title:Object(S["formatMessage"])({id:"danmu.color"}),dataIndex:"color"},{title:Object(S["formatMessage"])({id:"danmu.type"}),dataIndex:"type",sorter:!0},{title:Object(S["formatMessage"])({id:"danmu.ip"}),dataIndex:"ip",sorter:!0},{title:Object(S["formatMessage"])({id:"danmu.refer"}),dataIndex:"referer",sorter:!0},{title:Object(S["formatMessage"])({id:"danmu.createdAt"}),dataIndex:"createdAt",sorter:!0,render:function(e){return A()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:Object(S["formatMessage"])({id:"danmu.option"}),key:"action",dataIndex:"_id",align:"center",render:function(t,a){return D.a.createElement("span",null,D.a.createElement("a",{onClick:function(){return e.editOne(a)}},Object(S["formatMessage"])({id:"common.edit"})),D.a.createElement(m["a"],{type:"vertical"}),D.a.createElement("a",{onClick:e.deleteOne(t)},Object(S["formatMessage"])({id:"common.delete"})))}}],f={selectedRowKeys:t,onChange:function(t){e.setState({selectedRowKeys:t})}},y=Object(P["h"])(this.query.page,this.query.size,i);return D.a.createElement(o["a"],{className:"tableList",bordered:!1},D.a.createElement(s["a"],{className:"head"},D.a.createElement(d["a"],{span:16},D.a.createElement(c["a"],{icon:"plus",type:"primary",onClick:this.editNew},Object(S["formatMessage"])({id:"common.add.new"})),t.length>0&&D.a.createElement(P["b"],{edit:this.editMany,delete:this.deleteMany}),D.a.createElement(P["a"],{edit:this.editAll,delete:this.deleteAll})),D.a.createElement(d["a"],{span:8},D.a.createElement(_,{placeholder:Object(S["formatMessage"])({id:"danmu.search"}),onSearch:this.onSearchVideo,enterButton:!0}))),D.a.createElement(s["a"],null,D.a.createElement(l["a"],{className:"longTable",loading:u,rowKey:"_id",rowSelection:f,columns:p,onChange:this.onChangeTable,dataSource:r,pagination:y})),D.a.createElement(L,{submit:this.submit,wrappedComponentRef:function(t){return e.editRef=t}}))}}]),t}(R["Component"]),r=i))||r);t["default"]=F}}]);