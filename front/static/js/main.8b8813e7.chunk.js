(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/mlogos.69dea05e.png"},25:function(e,t,a){e.exports=a.p+"static/media/logo.50a7117f.png"},27:function(e,t,a){e.exports=a(56)},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(23),r=a.n(o),c=a(58),i=a(7),s=a(8),u=a(10),m=a(9),d=a(11),h=a(57),p=a(60),b=a(59),E=(a(33),a(3)),v=a(12),g=a.n(v),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onChangeTitle=a.onChangeTitle.bind(Object(E.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(E.a)(a)),a.onChangeId=a.onChangeId.bind(Object(E.a)(a)),a.onSubmit=a.onSubmit.bind(Object(E.a)(a)),a.state={title:"",body:"",id:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({body:e.target.value})}},{key:"onChangeId",value:function(e){this.setState({id:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={title:this.state.title,body:this.state.body,id:this.state.id};g.a.post("http://localhost:8080/product",t,{headers:{"Content-Type":"application/json"}}).then(function(e){return console.log(e.data)}),this.setState({title:"",body:"",id:""})}},{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:10}},l.a.createElement("h3",null,"Add New Product"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title:  "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.title,onChange:this.onChangeTitle})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.body,onChange:this.onChangeDescription})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"ID: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.id,onChange:this.onChangeId})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Add Product",className:"btn btn-primary"}))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onChangeTitle=a.onChangeTitle.bind(Object(E.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(E.a)(a)),a.onChangeId=a.onChangeId.bind(Object(E.a)(a)),a.onSubmit=a.onSubmit.bind(Object(E.a)(a)),a.state={title:"",body:"",id:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:8080/product/"+this.props.match.params.id).then(function(t){e.setState({title:t.data[0].title,body:t.data[0].body,id:t.data[0].id})}).catch(function(e){console.log(e)})}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({body:e.target.value})}},{key:"onChangeId",value:function(e){this.setState({id:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={title:this.state.title,body:this.state.body,id:this.state.id};g.a.put("http://localhost:8080/product/"+this.props.match.params.id,t).then(function(e){return console.log(e.data)}),this.props.history.push("/list")}},{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:10}},l.a.createElement("h3",{align:"center"},"Update Product"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title:  "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.title,onChange:this.onChangeTitle})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.body,onChange:this.onChangeDescription})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"ID: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.id,onChange:this.onChangeId})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Update Product",className:"btn btn-primary"}))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).delete=a.delete.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"delete",value:function(){g.a.delete("http://localhost:8080/product/"+this.props.obj.id).then(console.log("Deleted")).then(alert("Product Deleted")).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.obj.title),l.a.createElement("td",null,this.props.obj.body),l.a.createElement("td",null,this.props.obj.id),l.a.createElement("td",null,l.a.createElement(h.a,{to:"/list/"+this.props.obj.id,className:"btn btn-primary"},"Edit")),l.a.createElement("td",null,l.a.createElement("button",{onClick:this.delete,className:"btn btn-danger"},"Delete")))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={products:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:8080/product").then(function(t){e.setState({products:t.data})}).catch(function(e){console.log(e)})}},{key:"tabRow",value:function(){return this.state.products.map(function(e,t){return l.a.createElement(j,{obj:e,key:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{align:"center"},"Product List"),l.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"id"),l.a.createElement("th",{colSpan:"2"},"Action"))),l.a.createElement("tbody",null,this.tabRow())))}}]),t}(n.Component),O=a(24),k=a.n(O),N=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"jumbotron"},l.a.createElement("h1",null,"MarketUnity"),l.a.createElement("p",null,l.a.createElement("strong",null,"Integration Platform "),"for Online Marketplaces.",l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("img",{alt:"MarketUnity - Marketplaces Integration",src:k.a,responsive:!0})),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement(h.a,{to:"/list",className:"btn btn-success"},"Head to the List"))))}}]),t}(n.Component),S=a(25),D=a.n(S),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(h.a,{to:"/",className:"navbar-brand"},l.a.createElement("img",{src:D.a,alt:"MarketUnity"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.a,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.a,{to:"/create",className:"nav-link"},"Create")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.a,{to:"/list",className:"nav-link"},"List")))))," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(b.a,{exact:!0,path:"/",component:N}),l.a.createElement(b.a,{exact:!0,path:"/create",component:f}),l.a.createElement(b.a,{path:"/list/:id",component:y}),l.a.createElement(b.a,{path:"/list",component:C}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(c.a,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.8b8813e7.chunk.js.map