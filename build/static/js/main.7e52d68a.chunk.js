(this["webpackJsonpnetflix-clone-youtube"]=this["webpackJsonpnetflix-clone-youtube"]||[]).push([[0],{103:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(26),a=n.n(i),s=(n(55),n(56),n(57),n(16)),o=n(10),l=(n(58),n(3));var u=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(o.f)(),a=function(){window.scrollY>100?r(!0):r(!1)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[]),Object(l.jsx)("div",{className:"nav ".concat(n&&"nav__black"),children:Object(l.jsxs)("div",{className:"nav__contents",children:[Object(l.jsx)("img",{onClick:function(){return i.push("/")},className:"nav__logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(l.jsx)("img",{onClick:function(){return i.push("/profile")},className:"nav__avatar",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:""})]})})},d=n(13),j=n.n(d),b=n(21),h=(n(65),n(45)),f=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),p="c99e6e307d5dfeb0116bf2ea3aabb4ce",m={fetchTrending:"/trending/all/week?api_key=".concat(p,"&language=en-US"),fetchNetflixOirignals:"/discover/tv?api_key=".concat(p,"&with_networks=213"),fetchTopRated:"/discover/top_rated?api_key=".concat(p,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(p,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(p,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(p,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(p,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(p,"&with_genres=99")};console.log("netflix originals",m);var v=m;var O=function(){var e,t,n=Object(c.useState)([]),r=Object(s.a)(n,2),i=r[0],a=r[1];return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(v.fetchNetflixOirignals);case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),console.log("fetch data",t),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(i),Object(l.jsxs)("header",{className:"banner",style:{backgroundPosition:"center center",backgroundSize:"cover",backgroundImage:"url('https://image.tmdb.org/t/p/original/".concat(null===i||void 0===i?void 0:i.backdrop_path,"')")},children:[Object(l.jsxs)("div",{className:"banner__contents",children:[Object(l.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(l.jsxs)("div",{className:"banner__buttons",children:[Object(l.jsx)("button",{className:"banner__button",children:"Play"}),Object(l.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(l.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(l.jsx)("div",{className:"banner--fadeBottom"})]})},g=(n(83),n(46)),x=n(49),_=n.n(x);var w=function(e){var t=e.title,n=e.fetchUrl,r=e.isLargeRow,i=void 0!==r&&r,a=Object(c.useState)([]),o=Object(s.a)(a,2),u=o[0],d=o[1],h=Object(c.useState)(""),p=Object(s.a)(h,2),m=p[0],v=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,d(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),console.log(u),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("div",{className:"row__posters",children:u.map((function(e){return(i&&e.poster_path||!i&&e.backdrop_path)&&Object(l.jsx)("img",{onClick:function(){return function(e){m?v(""):_()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);v(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(i&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(i?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),m&&Object(l.jsx)(g.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})};var N=function(){return Object(l.jsxs)("div",{className:"homeScreen",children:[Object(l.jsx)(u,{}),Object(l.jsx)(O,{}),Object(l.jsx)(w,{title:"NETFLIX ORIGINALS",fetchUrl:v.fetchNetflixOirignals,isLargeRow:!0}),Object(l.jsx)(w,{title:"Trending Now",fetchUrl:v.fetchTrending}),Object(l.jsx)(w,{title:"Action Movies",fetchUrl:v.fetchActionMovies}),Object(l.jsx)(w,{title:"Comedy Movies",fetchUrl:v.fetchComedyMovies}),Object(l.jsx)(w,{title:"Horror Movies",fetchUrl:v.fetchHorrorMovies}),Object(l.jsx)(w,{title:"Romance Movies",fetchUrl:v.fetchRomanceMovies}),Object(l.jsx)(w,{title:"Documentaries",fetchUrl:v.fetchDocumentaries})]})},S=n(31),k=(n(103),n(35)),y=k.a.initializeApp({apiKey:"AIzaSyA5M2LEu_qjFd-qwX2o8euw5f1-_6TmE34",authDomain:"netflix-clone-6e211.firebaseapp.com",projectId:"netflix-clone-6e211",storageBucket:"netflix-clone-6e211.appspot.com",messagingSenderId:"688737872012",appId:"1:688737872012:web:93bdbb5ad4a78d808233a9"}).firestore(),E=k.a.auth(),I=y;n(109);var C=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null);return Object(l.jsx)("div",{className:"signupScreen",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsx)("input",{ref:e,placeholder:"Email",type:"email"}),Object(l.jsx)("input",{ref:t,placeholder:"Password",type:"password"}),Object(l.jsx)("button",{type:"submit",onClick:function(n){n.preventDefault(),E.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign In"}),Object(l.jsxs)("h4",{children:[Object(l.jsx)("span",{className:"signupScreen__gray",children:"New to Netflix? "}),Object(l.jsx)("span",{className:"signupScreen__link",onClick:function(n){n.preventDefault(),E.createUserWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign up now."})]})]})})};var A=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(l.jsx)("div",{className:"loginScreen",children:Object(l.jsxs)("div",{className:"loginScreen__background",children:[Object(l.jsx)("img",{className:"loginScreen__logo",src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(l.jsx)("button",{className:"loginScreen__button",onClick:function(){return r(!0)},children:"Sign In"}),Object(l.jsx)("div",{className:"loginScreen__gradient"}),Object(l.jsx)("div",{className:"loginScreen__body",children:n?Object(l.jsx)(C,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Unlimited films, TV programmes and more."}),Object(l.jsx)("h2",{children:"Watch anywhere, Cancel at any time."}),Object(l.jsx)("h3",{children:"Ready to watch? Enter your email to create or restart your membership."}),Object(l.jsx)("div",{className:"loginScreen__input",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"email",placeholder:"Email Adress"}),Object(l.jsx)("button",{className:"loginScreen__getStarted",onClick:function(){return r(!0)},children:"GET STARTED"})]})})]})})]})})},M=n(28),U=Object(M.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),R=U.actions,L=R.login,T=R.logout,D=function(e){return e.user.user},P=U.reducer,B=n(20),W=(n(110),n(111),n(50));var F=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(B.c)(D),a=Object(c.useState)(null),o=Object(s.a)(a,2),u=o[0],d=o[1];Object(c.useEffect)((function(){I.collection("customers").doc(i.uid).collection("subscriptions").get().then((function(e){e.forEach(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d({role:t.data().role,current_period_end:t.data().current_period_end.seconds,current_period_start:t.data().current_period_start.seconds});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[i.uid]),console.log(u),Object(c.useEffect)((function(){I.collection("products").where("active","==",!0).get().then((function(e){var t={};e.forEach(function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t[n.id]=n.data(),e.next=3,n.ref.collection("prices").get();case 3:e.sent.docs.forEach((function(e){t[n.id].prices={priceId:e.id,priceData:e.data()}}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r(t)}))}),[]),console.log(n);var h=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.collection("customers").doc(i.uid).collection("checkout_sessions").add({price:t,success_url:window.location.origin,cancel_url:window.location.origin});case 2:e.sent.onSnapshot(function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.data(),c=n.error,r=n.sessionId,c&&alert("An error occured: ".concat(c.message)),!r){e.next=7;break}return e.next=5,Object(W.a)("pk_test_51J2df7CTVwmN6IjA7mwtyhNONamWZ63RtYAxFB47stlHKJGifB5iQ2YjVZf3XirUuTQZwcjsNIx84eI0cwjmGjT900AkAyUrCQ");case 5:e.sent.redirectToCheckout({sessionId:r});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"plansScreen",children:[Object(l.jsx)("br",{}),u&&Object(l.jsxs)("p",{children:["Renewal date: ",new Date(1e3*(null===u||void 0===u?void 0:u.current_period_end)).toLocaleDateString()]}),Object.entries(n).map((function(e){var t,n=Object(s.a)(e,2),c=n[0],r=n[1],i=null===(t=r.name)||void 0===t?void 0:t.toLowerCase().includes(null===u||void 0===u?void 0:u.role);return console.log(i,"is current "),Object(l.jsxs)("div",{className:"".concat(i&&"plansScreen__plan--disabled"," plansScreen__plan"),children:[Object(l.jsxs)("div",{className:"plansScreen__info",children:[Object(l.jsx)("h5",{children:r.name}),Object(l.jsx)("h6",{children:r.description})]}),Object(l.jsx)("button",{onClick:function(){return!i&&h(r.prices.priceId)},children:i?"Current Package":"Subscribe"})]},c)}))]})};var G=function(){var e=Object(B.c)(D);return Object(l.jsxs)("div",{className:"profileScreen",children:[Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"profileScreen__body",children:[Object(l.jsx)("h1",{children:"Edit Profile"}),Object(l.jsxs)("div",{className:"profileScreen__info",children:[Object(l.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:""}),Object(l.jsxs)("div",{className:"profileScreen__details",children:[Object(l.jsx)("h2",{children:e.email}),Object(l.jsxs)("div",{className:"profileScreen__plans",children:[Object(l.jsx)("h3",{children:"Plans"}),Object(l.jsx)(F,{}),Object(l.jsx)("button",{onClick:function(){return E.signOut()},className:"profileScreen__signOut",children:"Sign Out"})]})]})]})]})]})};var H=function(){var e=Object(B.c)(D),t=Object(B.b)();return Object(c.useEffect)((function(){return E.onAuthStateChanged((function(e){t(e?L({uid:e.uid,email:e.email}):T())}))}),[t]),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(S.a,{children:e?Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/profile",children:Object(l.jsx)(G,{})}),Object(l.jsx)(o.a,{path:"/",children:Object(l.jsx)(N,{})})]}):Object(l.jsx)(A,{})}),")"]})},J=Object(M.a)({reducer:{user:P}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(B.a,{store:J,children:Object(l.jsx)(H,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},65:function(e,t,n){},83:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.7e52d68a.chunk.js.map