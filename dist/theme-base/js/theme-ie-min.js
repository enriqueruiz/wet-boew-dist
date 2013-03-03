/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-rc1-development Build: 2013-03-03 08:20 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-base",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,menu:null,init:function(){b.fullhd=pe.header.find("#base-fullhd");b.psnb=pe.header.find("#base-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#base-srchbx");b.bcrumb=pe.header.find("#base-bc");b.title=pe.header.find("#base-title");b.sft=pe.footer.find("#base-sft");b.fullft=pe.footer.find("#base-fullft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){e=pe.menu.navcurrent(pe.secnav,b.bcrumb);d=e.parents("ul");d.prev().children("a").addClass("nav-current")}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var u,E="",e,m,L=pe.dic.get("%settings"),w,r,f,l,J,O="",s='<a data-role="button" data-iconpos="notext"',y=' data-rel="popup" data-position-to="window"',o=s+y,z='<div data-role="popup" data-overlay-theme="a"',B='<div data-role="header"',N=B+"><h1>",x=' data-theme="c" class="ui-corner-all">',p=B+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',K=s+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",H=o+' data-icon="back" class="ui-btn-left"',F=">"+pe.dic.get("%back")+"</a>",M="</div></div>",n='<ul data-role="listview"',v="",C,k,q,g,d,I,t,D,A,G,j;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");r=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");u=z+' id="jqm-wb-mb">'+N+e+"</h1>"+K+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){A=b.bcrumb[0];G=A.getElementsByTagName("a")[0].href;u+='<section><div id="jqm-mb-location-text">'+A.innerHTML+"</div></section>"}else{u+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){E+="<section><div><h2>"+r.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){E+="<section><div><h2>"+b.psnb.children(":header")[0]+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}u+='<div id="jqm-mb-menu"></div></nav></div></div></div>';O+=u;b.menu=E;v+=o+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){m=pe.dic.get("%search");f=b.search[0];l=f.innerHTML;f=f.getElementsByTagName("input");t=f.length;while(t--){f[t].setAttribute("data-role","none")}J=z+' id="jqm-wb-search">'+N+m+"</h1>"+K+'</div><div data-role="content"><div>'+l.substring(l.indexOf("<form"))+"</div></div></div>";O+=J;v+=o+' data-icon="search" href="#jqm-wb-search">'+m+"</a>"}j='<div data-role="header"><div class="ui-title"></div>';j+='<map id="base-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof G!=="undefined"){j+=s+' href="'+G+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){j+=s+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(v.length!==0){j+=v}j+=o+' href="#popupSettings" data-icon="gear">'+L+"</a></map></div>";b.fullhd.children("#base-fullhd-in").before(j);b.title[0].className+=" ui-bar-b";q=b.fullhd.find('li[id*="-lang"]');w=z+' id="popupSettings"'+x;w+=p+L+"</h1>"+K+"</div>";w+=h+n+">";if(q.length!==0){w+='<li><a href="#popupLanguages"'+y+">"+pe.dic.get("%languages")+"</a></li>"}w+='<li class="ui-corner-bottom"><a href="#popupAbout"'+y+">"+pe.dic.get("%about")+"</a></li>";w+="</ul>"+M;if(q.length!==0){w+=z+' id="popupLanguages"'+x;w+=p+pe.dic.get("%languages")+"</h1>"+H+' href="#popupSettings"'+F+K+"</div>";w+=h+n+">";if(q.filter('[id*="-lang-current"]').length===0){w+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}D=q.get();t=D.length;I=t;while(I--){A=D[I];k=A.childNodes[0];w+="<li"+(I===0?' class="ui-corner-bottom"':"");if(A.id.indexOf("-lang-current")!==-1){w+='><a href="javascript:;" class="ui-disabled">'+A.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{w+='><a href="'+k.href+'" lang="'+k.getAttribute("lang")+'">'+k.innerHTML+"</a></li>"}}w+="</ul>"+M}w+=z+' id="popupAbout"'+x;w+=p+pe.dic.get("%about")+"</h1>"+H+' href="#popupSettings"'+F+K+"</div>";w+=h;w+='<div class="site-app-title"><div class="ui-title">'+b.title.text()+"</div></div>";A=pe.main.find("#base-date-mod").children();if(A.length!==0){d=A[1];if(d.getElementsByTagName("time").length===0){w+='<div class="app-version">'+A[0].innerHTML+" "+d.innerHTML+"</div>"}}w+=n+' data-inset="true">';C=b.sft.find(".base-col-head a").get();for(I=0,t=C.length;I!==t;I+=1){k=C[I];A=k.innerHTML;d=A.toLowerCase();w+="<li"+(I===(t-1)?' class="ui-corner-bottom"':"")+'><a href="'+k.href+'">'+A+"</a></li>"}w+="</ul>"+M;pe.bodydiv.append(O+w)}c(document).on("pagecreate",function(){var S=b.fullhd.find("#base-mnavbar"),U=pe.bodydiv.find("#jqm-mb-menu"),T,R,P,Q;if(S.length!==0){S.removeClass("wb-hide");if(U.length!==0){U.append(b.menu);S.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){U.trigger("create");T=U.find(".ui-controlgroup");R=T.get();t=R.length;while(t--){A=R[t];Q=A.getElementsByTagName("li")[0];if(Q.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&Q.className.indexOf("ui-corner-top")===-1){Q.className+=" ui-corner-top"}P=T.eq(t).find(".ui-btn").get();A=P[P.length-1];if(A.className.indexOf("ui-corner-bottom")===-1){A.className+=" ui-corner-bottom"}}})}}function i(W,V,Z,Y){var X;c.mobile.showPageLoadingMsg();X=c.mobile.transitionHandlers.simultaneous("pop",V,Z,Y);X.done(function(){c.mobile.hidePageLoadingMsg()});return X}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));