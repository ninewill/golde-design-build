(function(){"use strict";var a={6747:function(a,d,s){var t=s(9242),i=s(3396);const c={id:"wrapper",class:"layout"};function e(a,d,s,t,e,v){const l=(0,i.up)("Navbar"),o=(0,i.up)("router-view"),n=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(l),(0,i.Wm)(o),(0,i.Wm)(n)])}const v={class:"nav-down"},l=(0,i.uE)('<div class="main-header" data-v-14f158dc><div class="side-left" data-v-14f158dc><div class="logo" data-v-14f158dc><a href="https://www.appedu.com.tw/" target="_blank" class="home-icon" title="金賀獎 golde design award" data-v-14f158dc>金賀獎 golde design award</a></div></div><div class="side-right" data-v-14f158dc><div class="menu-wrap" data-v-14f158dc><ul class="menu" data-v-14f158dc><li data-v-14f158dc><a href="#1" data-v-14f158dc>關於金赫獎</a></li><li data-v-14f158dc><a href="#2" data-v-14f158dc>5th 頒獎典禮</a></li><li data-v-14f158dc><a href="#3" data-v-14f158dc>時線設計展</a></li><li data-v-14f158dc><a href="#4" data-v-14f158dc>時線活動</a></li></ul></div><div class="menu__toggler" data-v-14f158dc><span data-v-14f158dc></span></div></div></div>',1),o=[l];function n(a,d,s,t,c,e){return(0,i.wg)(),(0,i.iD)("header",v,o)}var r={mounted(){$('.menu li a[href^="#"]').click((function(){let a=this.hash,d=$(a).offset().top;console.log(a,d),$(".menu-wrap").removeClass("active"),$(".menu__toggler").removeClass("active"),$(".body").removeClass("hidden"),$("html, body").animate({scrollTop:d})}));const a=document.querySelector(".body"),d=document.querySelector(".menu__toggler"),s=document.querySelector(".menu-wrap");d.addEventListener("click",(()=>{d.classList.toggle("active"),s.classList.toggle("active"),a.classList.toggle("hidden")}))}},p=s(89);const f=(0,p.Z)(r,[["render",n],["__scopeId","data-v-14f158dc"]]);var g=f;const m={id:"footer"},u=(0,i.uE)('<div class="main-footer" data-v-9e08c39a><div class="f-left" data-v-9e08c39a><div class="f-left-logo" data-v-9e08c39a><a class="" href="" target="_blank" title="台灣好設計協會" data-v-9e08c39a> 台灣好設計協會 </a></div><p data-v-9e08c39a>100 台北市中正區忠孝西路一段6號16樓</p><p data-v-9e08c39a>(02)2388-6688 #8006｜平日 9:00-18:30</p><p data-v-9e08c39a>appedu@appedu.com.tw</p></div><div class="f-right" data-v-9e08c39a><p data-v-9e08c39a>台灣好設計交流協會、赫綵設計學院保留活動修改活動內容更改之權利，</p><p data-v-9e08c39a>最新消息已金赫獎官網官網公告為主</p><p class="copy-right" data-v-9e08c39a> © 2022 Taiwan Good Design Associat. All rights reserved. </p></div></div>',1),h=[u];function w(a,d,s,t,c,e){return(0,i.wg)(),(0,i.iD)("footer",m,h)}var b={};const _=(0,p.Z)(b,[["render",w],["__scopeId","data-v-9e08c39a"]]);var y=_,k={name:"HomeView",components:{Navbar:g,Footer:y}};const O=(0,p.Z)(k,[["render",e]]);var x=O,I=s(678);s(9600);const j=[{path:"/",name:"home",component:()=>Promise.resolve().then(s.bind(s,9600))}],D=(0,I.p7)({history:(0,I.PO)("/"),routes:j});var A=D,E=(s(8937),s(8125)),S=s(7749),C=s(8321);E.vI.add(C.z1q),(0,t.ri)(x).use(A).component("font-awesome-icon",S.GN).mount("#app")},9600:function(a,d,s){s.r(d),s.d(d,{default:function(){return ba}});var t=s(3396),i=s.p+"media/gold-design.1ac7e64e.mp4";const c={id:"main",class:"wrap wrap-content"},e=(0,t.uE)('<video autoplay muted loop id="myVideo"><source src="'+i+'" type="video/mp4"></video><section class="section-block s1"><div class="s1-wrap"><div class="s1-txt">5TH GOLDEN</div><div class="s1-txt">DESIGN AWARD</div><div class="s1-txt flex"> DAY-LINE <div class="s1-txtt"><span>第五屆金赫獎</span><span>年度設計展《時線》</span></div></div></div><a href="#1" class="scroll"><svg class="c-circle__def-img c-circle__def-img__origin" viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity=".5" cx="71.5" cy="71.5" r="71" stroke="#fff"></circle></svg><svg class="c-circle__def-img c-circle__def-img__dammy" viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="1" cx="71.5" cy="71.5" r="71" stroke="#fff"></circle></svg><span class="c-circle__def-text-cover"><span class="js-hover__text__translateY c-circle__def-text p-top-philosophy__link-text"><span class="js-hover__text__translateY-inside p-top-philosophy__link-text-inside"> scroll </span><span class="js-hover__text__translateY-inside__dammy p-top-philosophy__link-text-inside__dammy" aria-hidden="true"> SCROLL </span></span></span></a></section>',2),v={id:"1",class:"section-block s2"},l={id:"2",class:"section-block s3"},o={id:"3",class:"section-block s4"},n={id:"4",class:"section-block s5"},r={id:"5",class:"section-block s6"};function p(a,d,s,i,p,f){const g=(0,t.up)("AboutBlock"),m=(0,t.up)("GdaBlock"),u=(0,t.up)("DayLine"),h=(0,t.up)("Info"),w=(0,t.up)("Sponsors");return(0,t.wg)(),(0,t.iD)("div",c,[e,(0,t._)("section",v,[(0,t.Wm)(g)]),(0,t._)("section",l,[(0,t.Wm)(m)]),(0,t._)("section",o,[(0,t.Wm)(u)]),(0,t._)("section",n,[(0,t.Wm)(h)]),(0,t._)("section",r,[(0,t.Wm)(w)])])}var f=s.p+"img/5.8dedb81d.svg",g=s.p+"img/01.ef94a4aa.jpg",m=s.p+"img/3.9d852e77.png",u=s.p+"img/02.39689c96.jpg";const h={class:"about"},w=(0,t.uE)('<div class="s2-title" data-v-41098f28><span class="subtitle" data-v-41098f28>ABOUT 金赫獎年度設計競賽</span><h3 class="h3 h3-en" data-v-41098f28>Golden Design Award</h3><h3 class="h3 h3-ch" data-v-41098f28>追尋 實現夢想的軌跡。</h3><span data-v-41098f28>《金赫獎》為「台灣好設計交流協會」＆ 赫綵設計學院 耗時7年打造的國內設計獎項指標平台，目標推廣台灣設計藝術作品及新生代設計師。藉由《金赫獎》競賽光環以及最嚴謹的評審陣容、制度，為競賽遴選出最具發展潛力的設計藝術作品，更藉此機會為台灣設計創作產業共同努力，發掘新生代的明日之星、將台灣設計軟實力推向更開闊的國際舞台！</span></div><div class="s2-w-100" data-v-41098f28><div class="s2-w-50 s2-w-50-l" data-v-41098f28><div class="s2-img-l-b" data-aos="fade-down-left" data-v-41098f28><img src="'+f+'" alt="" data-v-41098f28></div><div class="s2-w-50-img s2-img-l" data-v-41098f28><img src="'+g+'" alt="" data-v-41098f28></div></div><div class="s2-w-50 s2-w-50-r" data-v-41098f28><div class="s2-img-r-b" data-aos="fade-up" data-v-41098f28><img src="'+m+'" alt="" data-v-41098f28></div><div class="s2-w-50-img s2-img-r" data-v-41098f28><img src="'+u+'" alt="" data-v-41098f28></div><span data-v-41098f28>4th 年度最佳設計 - 劉大維 / 放課後的革命</span></div></div>',2),b=[w];function _(a,d,s,i,c,e){return(0,t.wg)(),(0,t.iD)("div",h,b)}var y={mounted(){AOS.init()}},k=s(89);const O=(0,k.Z)(y,[["render",_],["__scopeId","data-v-41098f28"]]);var x=O,I=s.p+"img/03.bac7634f.jpg",j=s.p+"img/2.3874ea8b.png";const D={class:"gda"},A=(0,t.uE)('<div class="s3-title" data-v-fef529a0><span class="subtitle" data-v-fef529a0>5th GDA 頒獎典禮</span><h3 class="h3 h3-en" data-v-fef529a0>CEREMONY</h3></div><div class="s3-w-100" data-v-fef529a0><div class="s3-w-50" data-v-fef529a0><div class="s3-w-50-img s3-img-l" data-v-fef529a0><img src="'+I+'" alt="" data-v-fef529a0></div></div><div class="s3-w-50 s3-w-50-r" data-v-fef529a0><div class="s3-w-50-r-b" data-aos="zoom-in" data-v-fef529a0><img src="'+j+'" alt="" data-v-fef529a0></div><div class="s3-w-50-info-wrap" data-v-fef529a0><div class="s3-w-50-info" data-v-fef529a0><h3 class="h3" data-v-fef529a0>赫綵學員設計競賽</h3><p data-v-fef529a0> 赫綵設計學院為學員所開辦的設計競賽項目，設立八大設計類別：企業形象設計、廣告海報設計、數位繪畫、攝影、網頁及 UI設計、影視動畫、App 遊戲、空間設計專案，為鼓勵學員踴躍投稿、挑戰自我設計極限，提供每一類別豐富且優越的獎勵條件。 </p></div><div class="s3-w-50-info" data-v-fef529a0><h3 class="h3" data-v-fef529a0>TOPRO盃 - 和平</h3><p data-v-fef529a0> 自第四屆金赫獎起開辦「To Pro盃」，公開徵選傑出設計創作，廣邀台灣各地及赫綵設計學院之國際姐妹校的優秀設計人士共同參與競賽。今年度以「無設限」視覺主軸，象徵設計並無所謂的極限，亦沒有所謂好設計與壞設計之差，並以「和平 Peace」作為徵件主題，用設計闡述個人對社會議題的觀點。 </p></div></div></div></div><div class="awards" data-v-fef529a0><h3 class="h3" data-v-fef529a0>本次頒獎典禮 憑邀請信件入場參加</h3><div class="s3-w-100" data-v-fef529a0><div class="s3-w-50 blur" data-v-fef529a0><span data-v-fef529a0>頒獎典禮 時間</span><h4 class="h4" data-v-fef529a0>12.10 (Sat.) 13:00</h4></div><div class="s3-w-50 blur" data-v-fef529a0><span data-v-fef529a0>頒獎典禮 地點</span><h4 class="h4 h4-ch" data-v-fef529a0>西本願寺樹心會館</h4></div></div></div><div class="map" data-v-fef529a0><iframe src="https://api.mapbox.com/styles/v1/by19950131/clakpimwp000515s5hhky9goe.html?title=false&amp;access_token=pk.eyJ1IjoiYnkxOTk1MDEzMSIsImEiOiJja2JpeG5jc2QwaHRhMnF0ZGhhMGxjeW41In0.AECZoItrQh71Aj5HmDCU4A&amp;zoomwheel=false#17.85/25.03986/121.507059/-28.8/38" title="Monochrome" style="border:none;" data-v-fef529a0></iframe></div>',4),E=[A];function S(a,d,s,i,c,e){return(0,t.wg)(),(0,t.iD)("div",D,E)}var C={mounted(){AOS.init()}};const G=(0,k.Z)(C,[["render",S],["__scopeId","data-v-fef529a0"]]);var T=G,L=s.p+"img/main-visual.720ab041.svg";const N={class:"dayline"},P=(0,t.uE)('<div class="s4-w-100" data-v-3beea1dd><div class="s4-w-20" data-v-3beea1dd><div class="s4-img" data-v-3beea1dd><img src="'+L+'" alt="" data-v-3beea1dd></div></div><div class="s4-w-50" data-v-3beea1dd><div class="s4-w-50-b" data-aos="fade-down-left" data-v-3beea1dd><img src="'+f+'" alt="" data-v-3beea1dd></div><div class="s4-title" data-v-3beea1dd><span class="subtitle" data-v-3beea1dd>時線年度設計展</span><h3 class="h3" data-v-3beea1dd>EXHIBITION</h3></div><p data-v-3beea1dd> 將每一幀的日常細細刻畫即是你我認知中的「時間」 時線。不僅僅是一段一段時間線的累積 在學習亦或是創作的過程中流動、逐步實現心之所向 每個人擁有著相同長度的1天、24小時、1440分鐘、86400秒 </p><p data-v-3beea1dd> 赫綵宛如領航員、培育著每一個夢想成真的豐碩結果，而 時間 是必須付出的多數成本， 紀錄著最重要的軌跡，始終深信只要跟著軌跡前行，就能看見成功的剎那。 </p></div></div>',1),Z=[P];function W(a,d,s,i,c,e){return(0,t.wg)(),(0,t.iD)("div",N,Z)}var M={mounted(){AOS.init()}};const B=(0,k.Z)(M,[["render",W],["__scopeId","data-v-3beea1dd"]]);var F=B,H=s.p+"img/Free.97f4dfca.svg",Y=s.p+"img/time.5f11de02.svg",R=s.p+"img/04.6e613a06.jpg",q=s.p+"img/05.48b82ac2.jpg",z=s.p+"img/06.8258c380.jpg",J=s.p+"img/07.bc3dc349.jpg";const U={class:"info"},V=(0,t.uE)('<div class="s5-w-100 align-left" data-v-14cd05d8><div class="info-txt" data-v-14cd05d8><div class="s5-title" data-v-14cd05d8><span class="subtitle" data-v-14cd05d8>展覽資訊</span><h3 class="h3" data-v-14cd05d8>INFO.</h3></div><div class="s5-title-2" data-v-14cd05d8><h4 class="h4" data-v-14cd05d8>免費入場參觀</h4><div class="s5-title-2-img" data-v-14cd05d8><img src="'+H+'" alt="" data-v-14cd05d8></div></div><div class="s5-title-3" data-v-14cd05d8><div class="s5-title-2-img" data-v-14cd05d8><img src="'+Y+'" alt="" data-v-14cd05d8></div><h4 class="h4" data-v-14cd05d8>【 特殊活動時將延長開放時間 】</h4></div><div class="s5-title-4" data-v-14cd05d8><p data-v-14cd05d8>西本願寺樹心會館</p><p data-v-14cd05d8>台北市萬華區中華路一段 174-2 號</p><p data-v-14cd05d8>捷運西門站 1 號出口步行 3 分鐘</p></div></div><div class="info-img" data-v-14cd05d8><img src="'+R+'" alt="" data-v-14cd05d8></div></div><div class="s5-w-100 align-right line" data-v-14cd05d8><div class="info-txt" data-v-14cd05d8><div class="s5-title" data-v-14cd05d8><span class="subtitle" data-v-14cd05d8>金赫獎年度設計展覽</span><h3 class="h3" data-v-14cd05d8>12/16 - 27</h3></div><div class="s5-title-2" data-v-14cd05d8><h4 class="h4" data-v-14cd05d8>免費入場參觀</h4><div class="s5-title-2-img" data-v-14cd05d8><img src="'+H+'" alt="" data-v-14cd05d8></div></div><div class="s5-title-3" data-v-14cd05d8><div class="s5-title-2-img" data-v-14cd05d8><img src="'+Y+'" alt="" data-v-14cd05d8></div><h4 class="h4" data-v-14cd05d8>【 特殊活動時將延長開放時間 】</h4></div><div class="s5-title-4" data-v-14cd05d8><p data-v-14cd05d8>西本願寺樹心會館</p><p data-v-14cd05d8>台北市萬華區中華路一段 174-2 號</p><p data-v-14cd05d8>捷運西門站 1 號出口步行 3 分鐘</p></div></div><div class="info-img" data-v-14cd05d8><img src="'+q+'" alt="" data-v-14cd05d8></div><div class="s5-img-l-b" data-aos="fade-down-left" data-v-14cd05d8><img src="'+f+'" alt="" data-v-14cd05d8></div></div><div class="s5-w-100 align-left" data-v-14cd05d8><div class="info-txt" data-v-14cd05d8><div class="s5-title" data-v-14cd05d8><span class="subtitle" data-v-14cd05d8>展覽資訊</span><h3 class="h3" data-v-14cd05d8>INFO.</h3></div><div class="s5-title-2" data-v-14cd05d8><h4 class="h4" data-v-14cd05d8>免費入場參觀</h4><div class="s5-title-2-img" data-v-14cd05d8><img src="'+H+'" alt="" data-v-14cd05d8></div></div><div class="s5-title-3" data-v-14cd05d8><div class="s5-title-2-img" data-v-14cd05d8><img src="'+Y+'" alt="" data-v-14cd05d8></div><h4 class="h4" data-v-14cd05d8>【 特殊活動時將延長開放時間 】</h4></div><div class="s5-title-4" data-v-14cd05d8><p data-v-14cd05d8>西本願寺樹心會館</p><p data-v-14cd05d8>台北市萬華區中華路一段 174-2 號</p><p data-v-14cd05d8>捷運西門站 1 號出口步行 3 分鐘</p></div></div><div class="info-img" data-v-14cd05d8><img src="'+z+'" alt="" data-v-14cd05d8></div></div><div class="s5-w-100 align-right" data-v-14cd05d8><div class="info-txt" data-v-14cd05d8><div class="s5-title" data-v-14cd05d8><span class="subtitle" data-v-14cd05d8>展覽資訊</span><h3 class="h3" data-v-14cd05d8>INFO.</h3></div><div class="s5-title-2" data-v-14cd05d8><h4 class="h4" data-v-14cd05d8>免費入場參觀</h4><div class="s5-title-2-img" data-v-14cd05d8><img src="'+H+'" alt="" data-v-14cd05d8></div></div><div class="s5-title-3" data-v-14cd05d8><div class="s5-title-2-img" data-v-14cd05d8><img src="'+Y+'" alt="" data-v-14cd05d8></div><h4 class="h4" data-v-14cd05d8>【 特殊活動時將延長開放時間 】</h4></div><div class="s5-title-4" data-v-14cd05d8><p data-v-14cd05d8>西本願寺樹心會館</p><p data-v-14cd05d8>台北市萬華區中華路一段 174-2 號</p><p data-v-14cd05d8>捷運西門站 1 號出口步行 3 分鐘</p></div></div><div class="info-img" data-v-14cd05d8><img src="'+J+'" alt="" data-v-14cd05d8></div></div>',4),Q=[V];function X(a,d,s,i,c,e){return(0,t.wg)(),(0,t.iD)("div",U,Q)}var K={mounted(){AOS.init()}};const aa=(0,k.Z)(K,[["render",X],["__scopeId","data-v-14cd05d8"]]);var da=aa,sa=s.p+"img/1.9d852e77.png",ta=s.p+"img/4.eeb3b2cd.png",ia=s.p+"img/logo.4d96365e.svg",ca=s.p+"img/tw-good-design.3a7dcd54.svg",ea=s.p+"img/appedu-Logo.aa678404.svg",va=s.p+"img/ud.eae5c1c4.svg",la=s.p+"img/wacom.3cc3d5e9.svg",oa=s.p+"img/amps.2bdb3b19.svg";const na={class:"sponsors-wrap"},ra=(0,t.uE)('<div class="sponsors-wrap-r-b" data-aos="fade-left" data-v-07e5622c><img src="'+sa+'" alt="" data-v-07e5622c></div><div class="sponsors-wrap-l-b" data-aos="fade-right" data-v-07e5622c><img src="'+ta+'" alt="" data-v-07e5622c></div><div class="sponsors-left" data-v-07e5622c><div class="sponsors-main-img" data-v-07e5622c><img src="'+ia+'" alt="" data-v-07e5622c></div></div><div class="sponsors-right" data-v-07e5622c><div class="sponsors-right-t" data-v-07e5622c><div class="sponsors-list" data-v-07e5622c><span class="subtitle" data-v-07e5622c>主辦單位</span><div class="sponsors-list-img" data-v-07e5622c><img src="'+ca+'" alt="" data-v-07e5622c></div></div><div class="sponsors-list" data-v-07e5622c><span class="subtitle" data-v-07e5622c>承辦單位</span><div class="sponsors-list-img" data-v-07e5622c><img src="'+ea+'" alt="" data-v-07e5622c></div></div></div><div class="sponsors-right-b" data-v-07e5622c><div class="sponsors-lis2" data-v-07e5622c><span class="subtitle" data-v-07e5622c>協辦單位</span><ul data-v-07e5622c><li data-v-07e5622c><img src="'+va+'" alt="" data-v-07e5622c></li><li data-v-07e5622c><img src="'+la+'" alt="" data-v-07e5622c></li><li data-v-07e5622c><img src="'+oa+'" alt="" data-v-07e5622c></li></ul></div></div></div>',4),pa=[ra];function fa(a,d,s,i,c,e){return(0,t.wg)(),(0,t.iD)("div",na,pa)}var ga={mounted(){AOS.init()}};const ma=(0,k.Z)(ga,[["render",fa],["__scopeId","data-v-07e5622c"]]);var ua=ma,ha={name:"HomeView",components:{AboutBlock:x,GdaBlock:T,DayLine:F,Info:da,Sponsors:ua},mounted(){$(".scroll").mouseover((function(a){$(".scroll").removeClass("is-hover-out"),$(".scroll").addClass("is-hover"),a.stopPropagation()})),$(".scroll").mouseout((function(a){$(".scroll").removeClass("is-hover"),$(".scroll").addClass("is-hover-out"),a.stopPropagation()})),$(".scroll").click((function(){let a=this.hash,d=$(a).offset().top;$("html, body").animate({scrollTop:d})}))}};const wa=(0,k.Z)(ha,[["render",p]]);var ba=wa}},d={};function s(t){var i=d[t];if(void 0!==i)return i.exports;var c=d[t]={exports:{}};return a[t](c,c.exports,s),c.exports}s.m=a,function(){var a=[];s.O=function(d,t,i,c){if(!t){var e=1/0;for(n=0;n<a.length;n++){t=a[n][0],i=a[n][1],c=a[n][2];for(var v=!0,l=0;l<t.length;l++)(!1&c||e>=c)&&Object.keys(s.O).every((function(a){return s.O[a](t[l])}))?t.splice(l--,1):(v=!1,c<e&&(e=c));if(v){a.splice(n--,1);var o=i();void 0!==o&&(d=o)}}return d}c=c||0;for(var n=a.length;n>0&&a[n-1][2]>c;n--)a[n]=a[n-1];a[n]=[t,i,c]}}(),function(){s.n=function(a){var d=a&&a.__esModule?function(){return a["default"]}:function(){return a};return s.d(d,{a:d}),d}}(),function(){s.d=function(a,d){for(var t in d)s.o(d,t)&&!s.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:d[t]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){s.o=function(a,d){return Object.prototype.hasOwnProperty.call(a,d)}}(),function(){s.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var a={143:0};s.O.j=function(d){return 0===a[d]};var d=function(d,t){var i,c,e=t[0],v=t[1],l=t[2],o=0;if(e.some((function(d){return 0!==a[d]}))){for(i in v)s.o(v,i)&&(s.m[i]=v[i]);if(l)var n=l(s)}for(d&&d(t);o<e.length;o++)c=e[o],s.o(a,c)&&a[c]&&a[c][0](),a[c]=0;return s.O(n)},t=self["webpackChunkGolde_Design"]=self["webpackChunkGolde_Design"]||[];t.forEach(d.bind(null,0)),t.push=d.bind(null,t.push.bind(t))}();var t=s.O(void 0,[998],(function(){return s(6747)}));t=s.O(t)})();
//# sourceMappingURL=app.6843eaa4.js.map