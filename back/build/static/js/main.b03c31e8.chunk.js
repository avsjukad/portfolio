(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),l=(a(12),a(2)),s=a.n(l),i=a(3),u=a(1);a(14),a(15);var m=function(e,t){var a=document.querySelector(e);window.scroll({top:a.offsetTop-49,left:0,behavior:"smooth"})};var d=function(e){var t=e.name,a=e.background,r=e.about;return Object(n.useEffect)((function(){document.querySelector(".home").style.setProperty("--home",'url("/img/'.concat(null===a||void 0===a?void 0:a.home,'")'))}),[a]),Object(n.useEffect)((function(){window.addEventListener("load",(function(){var e=window.innerHeight;document.querySelector(".home__textContent").getBoundingClientRect().bottom<e&&(document.querySelector(".home__textContent h1").classList.add("homeText__appearEffect"),document.querySelector(".home__textContent p").classList.add("homeText__appearEffect"),document.querySelector(".home__caretDown").classList.add("caretIcon__appearEffect"))}),[])})),o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"home__textContent"},o.a.createElement("h1",null,"Hi, I'm ",null===t||void 0===t?void 0:t.firstName),o.a.createElement("p",null,null===r||void 0===r?void 0:r.profession)),o.a.createElement("div",{className:"home__caretDown",onClick:function(e){return m(".about",1e3)}},o.a.createElement("i",{className:"fas fa-angle-down"})))};a(16);var _=function(e){var t=e.social;return o.a.createElement("div",{className:"footer"},o.a.createElement("div",{className:"social"},null===t||void 0===t?void 0:t.map((function(e){return o.a.createElement("a",{key:e.name,href:e.url,rel:"noopener noreferrer",target:"blank",onMouseOver:function(t){return t.target.style.backgroundColor=e.color},onMouseOut:function(e){return e.target.style.backgroundColor=""},className:"link ".concat(e.name)},o.a.createElement("i",{className:"fab ".concat(e.icon)}))}))),o.a.createElement("div",{className:"goTop"},o.a.createElement("img",{onClick:function(e){window.scrollTo({top:0,behavior:"smooth"})},className:"scotty",src:"/img/rocket-top.png",alt:""}),o.a.createElement("p",{className:"scottyText"},"Beam me up, scotty")),o.a.createElement("div",{className:"copyrightInfo"},o.a.createElement("p",null,"\xa9 All credit goes to Ashfaq Ahmed - Copyright 2020 Ashfaq Ahmed")))};a(17);var f=function(e){var t=e.logo,a=Object(n.useState)(!1),r=Object(u.a)(a,2),c=r[0],l=r[1],s=Object(n.useState)(!0),i=Object(u.a)(s,2),d=i[0],_=i[1],f=Object(n.useRef)(null),v=Object(n.useRef)(!0);return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){_(window.scrollY<30)})),document.body.addEventListener("click",(function(e){e.target.classList.contains("hamburger")||l(!1)}),!1)}),[]),Object(n.useEffect)((function(){if(v.current)v.current=!1;else{var e=document.querySelector(".nav-links");c?e.classList.add("show__navLinks"):e.classList.remove("show__navLinks")}}),[c]),o.a.createElement("div",{className:"header",style:d?{backgroundColor:"transparent"}:{backgroundColor:"black"}},o.a.createElement("a",{href:"/",className:"logo"},o.a.createElement("img",{src:"".concat("","/").concat(t),alt:""}),o.a.createElement("h1",null,"Ashfaq Ahmed")),o.a.createElement("ul",{className:"nav-links",ref:f},o.a.createElement("li",{onClick:function(e){return m(".about",1e3)}},"About"),o.a.createElement("li",{onClick:function(e){return m(".skills",1e3)}},"Skills"),o.a.createElement("li",{onClick:function(e){return m(".resume",1e3)}},"Resume"),o.a.createElement("li",{onClick:function(e){return m(".works",1e3)}},"Works"),o.a.createElement("li",{onClick:function(e){return m(".contact",1e3)}},"Contact")),o.a.createElement("div",{className:"hamburger",onClick:function(e){return l(!c)}},o.a.createElement("div",{className:"hamburger__top"}),o.a.createElement("div",{className:"hamburger__middle"}),o.a.createElement("div",{className:"hamburger__bottom"})))};a(18);a(19);var v=function(e){var t=e.profilePic,a=e.about;return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.innerHeight;document.querySelector(".about__profilePhoto").getBoundingClientRect().top<e?document.querySelector(".about__profilePhoto").classList.add("about__appearEffect"):document.querySelector(".about__profilePhoto").classList.remove("about__appearEffect"),document.querySelector(".about__description").getBoundingClientRect().top<e?document.querySelector(".about__description").classList.add("about__appearEffect"):document.querySelector(".about__description").classList.remove("about__appearEffect"),document.querySelector(".about__hobbies").getBoundingClientRect().top<e?document.querySelector(".about__hobbies").classList.add("about__appearEffect"):document.querySelector(".about__hobbies").classList.remove("about__appearEffect")}))}),[]),o.a.createElement("div",{className:"about"},o.a.createElement("h1",{className:"section__header"},"A little bit about me"),o.a.createElement("img",{className:"about__profilePhoto",src:"".concat("","/img/").concat(t),alt:""}),o.a.createElement("p",{className:"about__description"},null===a||void 0===a?void 0:a.description),o.a.createElement("p",{className:"about__hobbies"},null===a||void 0===a?void 0:a.hobbies))};a(20);var p=function(e){var t=e.skill;return o.a.createElement("div",{key:t.name,onMouseOver:function(e){return e.target.style.color=t.color},onMouseOut:function(e){return e.target.style.color=""},className:"skill__container ".concat(t.name)},o.a.createElement("i",{className:"".concat(t.icon)}),o.a.createElement("p",{className:"skill__name"},t.name))};a(21);var E=function(e){var t=e.skills,a=e.about;return o.a.createElement("div",{className:"skills"},o.a.createElement("h1",{className:"section__header"},"Skills"),o.a.createElement("p",{className:"skills__description"},null===a||void 0===a?void 0:a.skillsDescription),o.a.createElement("div",{className:"skills__section"},o.a.createElement("h3",null,"Some skills that I have:"),o.a.createElement("div",{className:"skills__container"},null===t||void 0===t?void 0:t.map((function(e){return o.a.createElement(p,{key:e.name,skill:e})})))))};a(22),a(23);var b=function(e){var t=e.name,a=e.description,n=e.image,r=e.url;return o.a.createElement("div",{className:"work"},o.a.createElement("div",{className:"work__background"},o.a.createElement("img",{className:"work__img",src:"".concat("","/img/works/").concat(n),alt:t})),o.a.createElement("div",{className:"work__foreground"},o.a.createElement("a",{href:r,target:"blank",className:"work__link"},o.a.createElement("p",null,o.a.createElement("i",{className:"fas fa-link"}),a)),o.a.createElement("div",{className:"work__name"},o.a.createElement("p",null,t))))};var g=function(e){var t=e.works,a=e.about;return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.innerHeight;document.querySelector(".works__container").getBoundingClientRect().top<e?document.querySelector(".works__container").classList.add("works__appearEffect"):document.querySelector(".works__container").classList.remove("works__appearEffect")}))}),[]),o.a.createElement("div",{className:"works"},o.a.createElement("h1",{className:"section__header"},"What I've Done"),o.a.createElement("p",{className:"works__description"},null===a||void 0===a?void 0:a.worksDescription),o.a.createElement("div",{className:"works__container"},null===t||void 0===t?void 0:t.map((function(e){return o.a.createElement(b,{key:e.name,name:e.name,description:e.description,image:e.image,url:e.url})}))))};a(24);var h=function(e){var t=e.resume,a=e.background;return Object(n.useEffect)((function(){document.querySelector(".resume").style.setProperty("--about",'url("/img/'.concat(null===a||void 0===a?void 0:a.resume,'")'))}),[a]),Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.innerHeight;document.querySelector(".resume__copy a").getBoundingClientRect().bottom<e&&document.querySelector(".resume__copy a").classList.add("resumeBtn__appearEffect")}),[])})),o.a.createElement("div",{className:"resume"},o.a.createElement("div",{className:"resume__container"},o.a.createElement("h1",{className:"section__header"},"Check out my resume"),o.a.createElement("div",{className:"resume__copy"},o.a.createElement("a",{href:t,target:"blank"},"Grab A Copy"))))},y=(a(25),a(6)),k=a.n(y);function S(e){var t=new Date;if(localStorage.getItem(e)){var a=localStorage.getItem(e);(a=a?JSON.parse(a):{}).value=a.value+1,localStorage.setItem(e,JSON.stringify(a))}else{var n={value:0,expiry:t.getTime()+864e5};localStorage.setItem(e,JSON.stringify(n))}}function w(e){var t=localStorage.getItem(e);if(!t)return null;var a=JSON.parse(t);return(new Date).getTime()>a.expiry?(localStorage.removeItem(e),null):a.value}function N(){return(N=Object(i.a)(s.a.mark((function e(t,a,n,o,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.send(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVICEID,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).TEMPLATEID,{subject:o,name:t,emailId:a,phone:n,message:r},Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).USERID).then((function(e){return!0}),(function(e){return!1}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e,t,a,n,o){return N.apply(this,arguments)};var C=function(e,t,a,n,o){var r=[],c=function(e){return e&&""!==e?/^[a-zA-Z ]+$/.test(e)?[!0,"valid name"]:[!1,"Please enter a valid name"]:[!1,"Name field cannot be empty"]}(e);c[0]||r.push(c[1]);var l=function(e){return e&&""!==e?/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?[!0,"valid email"]:[!1,"Please enter a valid email"]:[!1,"Email field cannot be empty"]}(t);l[0]||r.push(l[1]);var s=function(e){if(!e||""===e)return[!1,"Message cannot be empty"];var t=e.replace(/(^\s*)|(\s*$)/gi,"");return(t=(t=(t=t.replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")).split(" ").length)<20?[!1,"Message cannot be less than 20 words"]:[!0,"valid message"]}(a);s[0]||r.push(s[1]);var i=function(e){return e&&""!==e?/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e)?[!0,"valid phone number"]:[!1,"Please enter a valid phone number"]:[!0,"Phone number not mandatory"]}(n);return i[0]||r.push(i[1]),r};var L=function(e){var t=e.nameProp,a=e.emailId,r=e.about,c=Object(n.useState)(""),l=Object(u.a)(c,2),m=l[0],d=l[1],_=Object(n.useState)(""),f=Object(u.a)(_,2),v=f[0],p=f[1],E=Object(n.useState)(""),b=Object(u.a)(E,2),g=b[0],h=b[1],y=Object(n.useState)(""),k=Object(u.a)(y,2),N=k[0],L=k[1],q=Object(n.useState)(""),j=Object(u.a)(q,2),P=j[0],D=j[1],T=function(){var e=Object(i.a)(s.a.mark((function e(a){var n,o,r,c,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!((n=C(m,v,P,g,N)).length>0)){e.next=9;break}return(o=document.querySelector(".form__message")).querySelector("p").innerHTML=n.join("<br/>"),o.style.setProperty("background-color","#FFD2D2"),o.style.setProperty("color","#D8000C"),o.classList.add("message__active"),e.abrupt("return");case 9:if(w(r="portfolioidinlocalstoragewithkeyvalue")||S(r),!(w(r)<2)){e.next=18;break}return e.next=14,O(m,v,g,N,P);case 14:e.sent?(S(r),(c=document.querySelector(".form__message")).querySelector("p").textContent="Your message has been sent to ".concat(null===t||void 0===t?void 0:t.firstName),c.style.setProperty("background-color","#DFF2BF"),c.style.setProperty("color","#4F8A10"),c.classList.add("message__active")):((l=document.querySelector(".form__message")).querySelector("p").textContent="There was an error while submitting your message to ".concat(null===t||void 0===t?void 0:t.firstName,". Please try emailing!"),l.style.setProperty("background-color","#FFD2D2"),l.style.setProperty("color","#D8000C"),l.classList.add("message__active")),e.next=23;break;case 18:(i=document.querySelector(".form__message")).querySelector("p").textContent="You cannot submit more than 2 responses in a day. Please try emailing!",i.style.setProperty("background-color","#FEEFB3"),i.style.setProperty("color","#9F6000"),i.classList.add("message__active");case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=setInterval((function(){var t=document.querySelector(".contact__description").textContent;t&&(document.querySelector(".contact__description").innerHTML=t.split(",").join(", <br/>"),clearInterval(e))}),100);window.addEventListener("scroll",(function(){var e=window.innerHeight;document.querySelector(".form__submit").getBoundingClientRect().top<e&&document.querySelector(".form__submit").classList.add("submit__appearEffect"),document.querySelector(".email__container").getBoundingClientRect().bottom<e&&document.querySelector(".fa-paper-plane").classList.add("plane__appearEffect")}))}),[]),o.a.createElement("div",{className:"contact"},o.a.createElement("h1",{className:"section__header"},"Get in touch"),o.a.createElement("p",{className:"contact__description"},null===r||void 0===r?void 0:r.getInTouchDescription),o.a.createElement("div",{className:"contact__container"},o.a.createElement("div",{className:"contact__form"},o.a.createElement("div",{className:"form__top"},o.a.createElement("i",{className:"fas fa-envelope"}),o.a.createElement("div",{className:"form__message"},o.a.createElement("p",null),o.a.createElement("button",{onClick:function(e){return e.target.parentNode.classList.remove("message__active")}},"X"))),o.a.createElement("form",{action:"",method:"post"},o.a.createElement("div",{className:"form__row"},o.a.createElement("label",{htmlFor:"Name"},"Name ",o.a.createElement("span",null,"*")),o.a.createElement("input",{type:"text",name:"contact__name",id:"contact__name",value:m,onChange:function(e){return d(e.target.value)},required:!0})),o.a.createElement("div",{className:"form__row"},o.a.createElement("label",{htmlFor:"Email"},"Email ",o.a.createElement("span",null,"*")),o.a.createElement("input",{type:"email",name:"contact__email",id:"contact__email",value:v,onChange:function(e){return p(e.target.value)},required:!0})),o.a.createElement("div",{className:"form__row"},o.a.createElement("label",{htmlFor:"Phone"},"Phone "),o.a.createElement("input",{type:"tel",name:"contact__phone",id:"contact__phone",value:g,onChange:function(e){return h(e.target.value)}})),o.a.createElement("div",{className:"form__row"},o.a.createElement("label",{htmlFor:"Subject"},"Subject "),o.a.createElement("input",{type:"text",name:"contact__subject",id:"contact__subject",value:N,onChange:function(e){return L(e.target.value)}})),o.a.createElement("div",{className:"form__row"},o.a.createElement("label",{htmlFor:"Message"},"Message ",o.a.createElement("span",null,"*")),o.a.createElement("textarea",{name:"contact__message",id:"contact__message",cols:"30",rows:"10",value:P,onChange:function(e){return D(e.target.value)},required:!0})),o.a.createElement("button",{onClick:T,className:"form__submit",type:"submit"},"Submit"))),o.a.createElement("div",{className:"contact__email"},o.a.createElement("div",{className:"email__container"},o.a.createElement("i",{className:"far fa-paper-plane"}),o.a.createElement("h2",{className:"section__header"},"Shoot me an email"),o.a.createElement("a",{href:"mailto:".concat(a)},"Say hello")))))};var q=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/resumeData.json")).then((function(e){return e.json()})).then((function(e){return r(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"));var t=document.querySelectorAll(".nav-links li");window.addEventListener("scroll",(function(){var e=document.querySelector(".about").getBoundingClientRect(),a=document.querySelector(".skills").getBoundingClientRect(),n=document.querySelector(".resume").getBoundingClientRect(),o=document.querySelector(".works").getBoundingClientRect(),r=document.querySelector(".contact").getBoundingClientRect();e.top<=50&&e.bottom>=50?t[0].classList.add("active"):t[0].classList.remove("active"),a.top<=50&&a.bottom>=50?t[1].classList.add("active"):t[1].classList.remove("active"),n.top<=50&&n.bottom>=50?t[2].classList.add("active"):t[2].classList.remove("active"),o.top<=50&&o.bottom>=50?t[3].classList.add("active"):t[3].classList.remove("active"),r.top<=50&&r.bottom>=50?t[4].classList.add("active"):t[4].classList.remove("active")}))}),[]),o.a.createElement("div",{className:"app"},o.a.createElement(f,{logo:a.logo}),o.a.createElement(d,{name:a.name,background:a.backgrounds,about:a.about}),o.a.createElement(v,{profilePic:a.profilePic,about:a.about}),o.a.createElement(E,{skills:a.skills,about:a.about}),o.a.createElement(h,{resume:a.resume,background:a.backgrounds}),o.a.createElement(g,{works:a.works,about:a.about}),o.a.createElement(L,{name:a.name,emailId:a.emailId,about:a.about}),o.a.createElement(_,{social:a.social}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b03c31e8.chunk.js.map