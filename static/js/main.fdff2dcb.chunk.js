(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/Friends-logo-wallpaper.71df5191.jpg"},,,,,function(e,a,t){e.exports=t.p+"static/media/ChandlerBing.7e4e6479.jpg"},function(e,a,t){e.exports=t.p+"static/media/JoeyTribbiani.615bec34.jpg"},function(e,a,t){e.exports=t.p+"static/media/MonicaGeller.52364a29.jpg"},function(e,a,t){e.exports=t.p+"static/media/PhoebeBuffay.7468e84f.jpg"},function(e,a,t){e.exports=t.p+"static/media/RachelGreen.46e33611.jpg"},function(e,a,t){e.exports=t.p+"static/media/RossGeller.bba5338e.jpg"},,,,,function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){var r={"./ChandlerBing.jpg":21,"./Friends-logo-wallpaper.jpg":16,"./JoeyTribbiani.jpg":22,"./MonicaGeller.jpg":23,"./PhoebeBuffay.jpg":24,"./RachelGreen.jpg":25,"./RossGeller.jpg":26};function n(e){var a=c(e);return t(a)}function c(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id=39},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(28),o=t.n(c),l=t(2),s=t(6),i=(t(36),t(7)),m=t(8),h=t(12),p=t(10),u=t(9),d=t(11),g=t(16),f=t.n(g),E=(t(37),t(38),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).characters=["MonicaGeller","RossGeller","RachelGreen","JoeyTribbiani","PhoebeBuffay","ChandlerBing"],t.randomMsgArray={MonicaGeller:["let's do it!","that's my favourite kinda competition!","you're fired!","I'm always the host!","I know I know I know!"],RossGeller:["missisipi 1, missisipi 2 ...","we were on a break!","unagi!","keynote speaker","hey! that's my burger!"],RachelGreen:["Monica, will you stop calling it a 'flower'?"],JoeyTribbiani:["how you doing?","Joey doesn't share food!","soap opera","i'm your best friend!"],PhoebeBuffay:["smelly cat, smelly cat! what are the feeding you?","meet Mr.Rob","uh-huh uh-huh","ross, i don't buy ur words","Janet is your lobster, chandler! "],ChandlerBing:["Mr. bing!"]},t.generateRandomMsg=function(){var e=Math.floor(Math.random()*t.randomMsgArray[t.state.character].length);return console.log(e),t.randomMsgArray[t.state.character][e]},console.log(t.props),t.state={character:t.props.match.params.character,showCompTemp:!1,componentPosition:{left:"0 px",top:"0 px"}},console.log("this.props.match.params.character"+t.props.match.params.character),t.getPosition=t.getPosition.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"getPosition",value:function(e){this.setState({showCompTemp:!0,componentPosition:{left:e.screenX,top:e.screenY-100}}),console.log("this.state.componentPosition : "+JSON.stringify(this.state.componentPosition)),this.generateRandomMsg()}},{key:"render",value:function(){var e="require(../images/"+this.state.character+".jpg)";return console.log(e),n.a.createElement("div",{className:"componentWrapper"},n.a.createElement("header",{className:"displayHeader"},n.a.createElement("p",null,"All about friends the series!")),n.a.createElement("div",{className:"characterWrapper",onClick:this.getPosition.bind(this)},n.a.createElement("div",{className:"character"},n.a.createElement("img",{className:"characterImage",src:t(39)("./"+this.state.character+".jpg"),alt:this.state.character}),n.a.createElement("p",{className:"characterText"},this.state.character)),n.a.createElement("div",{className:"show",style:this.state.componentPosition},this.generateRandomMsg())),n.a.createElement("footer",{className:"displayFooter"},n.a.createElement("p",null,"Monica Geller"),n.a.createElement("p",null,"Ross Geller"),n.a.createElement("p",null,"Joey Tribbiani"),n.a.createElement("p",null,"Phoebe Buffay"),n.a.createElement("p",null,"Rachel Green"),n.a.createElement("p",null,"Chandler Bing"),n.a.createElement("p",null,n.a.createElement(l.b,{to:"/chooseFavCharacter"},"Back"))))}}]),a}(n.a.Component)),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={showTempComp:!1,x:0,y:0},t._onClickOfDiv=t._onClickOfDiv.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"_onClickOfDiv",value:function(e){this.setState({showTempComp:!0,x:e.screenX,y:e.screenY}),this.showRandomComponent()}},{key:"showRandomComponent",value:function(e,a){if(this.state.showTempComp)return n.a.createElement(E,{positionx:e,positiony:a})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header",onClick:this._onClickOfDiv.bind(this)},n.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),n.a.createElement("h1",{className:"intro"},'Welcome to "F.R.I.E.N.D.S" wall of dialogues! '),n.a.createElement(l.b,{to:"/chooseFavCharacter"},n.a.createElement("h2",{className:"App-link"},"choose your favorite character!"))))}}]),a}(n.a.Component),y=(t(44),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).characters=["MonicaGeller","RossGeller","RachelGreen","JoeyTribbiani","PhoebeBuffay","ChandlerBing"],t.state={character:"phoebe"},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("header",{className:"displayHeader"},n.a.createElement("p",null,"All about friends the series!")),n.a.createElement("div",{className:"charactersWrapper"},n.a.createElement("div",{className:"character"},n.a.createElement(l.b,{to:"/displayCharacter"+this.characters[0]},n.a.createElement("img",{src:t(23),alt:"Monica geller",className:"characterImage"}),n.a.createElement("p",{className:"characterText"},"Monica Geller"))),n.a.createElement("div",{className:"character"},n.a.createElement(l.b,{to:"/displayCharacter"+this.characters[1]},n.a.createElement("img",{src:t(26),alt:"Ross geller",className:"characterImage"}),n.a.createElement("p",{className:"characterText"},"Ross Geller"))),n.a.createElement("div",{className:"character"},n.a.createElement(l.b,{to:"/displayCharacter"+this.characters[2]},n.a.createElement("img",{src:t(25),alt:"Rachel Green",className:"characterImage"}),n.a.createElement("p",{className:"characterText"},"Rachel Green"))),n.a.createElement("div",{className:"character"},n.a.createElement(l.b,{to:"/displayCharacter"+this.characters[3]},n.a.createElement("img",{src:t(22),alt:"Joey Tribbiani",className:"characterImage"}),n.a.createElement("p",{className:"characterText"},"Joey Tribbiani"))),n.a.createElement("div",{className:"character"},n.a.createElement(l.b,{to:"/displayCharacter"+this.characters[4]},n.a.createElement("img",{src:t(24),alt:"Phoebe Buffay",className:"characterImage"}),n.a.createElement("p",{className:"characterText"},"Phoebe Buffay"))),n.a.createElement("div",{className:"character"},n.a.createElement(l.b,{to:"/displayCharacter"+this.characters[5]},n.a.createElement("img",{src:t(21),alt:"Chandler Bing",className:"characterImage"}),n.a.createElement("p",{className:"characterText"},"Chandler Bing")))),n.a.createElement("footer",{className:"displayFooter"},n.a.createElement("p",null,"Monica Geller"),n.a.createElement("p",null,"Ross Geller"),n.a.createElement("p",null,"Joey Tribbiani"),n.a.createElement("p",null,"Phoebe Buffay"),n.a.createElement("p",null,"Rachel Green"),n.a.createElement("p",null,"Chandler Bing"),n.a.createElement("p",null,n.a.createElement(l.b,{to:"/"},"Back"))))}}]),a}(n.a.Component));t(45);var v=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"center"},"You seem to have navigated to a page that is not found!"),n.a.createElement("h2",{className:"center"},n.a.createElement("code",null,n.a.createElement(l.b,{to:"/"},"Click here")," to nagivate back to home :)")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n.a.createElement(l.a,null,n.a.createElement("div",null,n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/",component:b}),n.a.createElement(s.a,{path:"/chooseFavCharacter",component:y}),n.a.createElement(s.a,{path:"/displayCharacter:character",component:E}),n.a.createElement(s.a,{component:v}))));o.a.render(N,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[31,1,2]]]);
//# sourceMappingURL=main.fdff2dcb.chunk.js.map