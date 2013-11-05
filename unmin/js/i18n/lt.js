/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-05
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Lithuanian dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "lt",
	"%lang-en": "Lithuanian",
	"%lang-fr": "lituanien",
	"%lang-nat": "Lietuvių kalba",
	"%all": "Visi",
	"%home": "Pradžia",
	"%main-page": "Pagrindinis puslapis",
	"%tphp": "Puslapio viršus",
	"%you-are-in": "Esate",
	"%welcome-to": "Sveiki atvykę į",
	"%load": "pakrovimo ...",
	"%process": "perdirbimo ...",
	"%srch": "Paieška",
	"%srch-terms": "Terminoų paieška:",
	"%no-match": "Atitikmenų nerasta",
	"%matches": {
		"mixin": "[MIXIN] atitikmuo (-enys) rasti"
	},
	"%menu": "Meniu",
	"%settings": "Nustatymai",
	"%langs": "Kalbos",
	"%about": "Apie",
	"%curr": "(dabartinė)",
	"%hide": "Slėpti",
	"%err": "Klaida",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Pradėti",
	"%stop": "Sustoti",
	"%back": "Atgal",
	"%cancel": "Atšaukti",
	"%new-win": " (atsidaro naujas puslapis)",
	"%min-ago": "Prieš minutę",
	"%coup-mins": "Prieš kelias minutes",
	"%mins-ago": {
		"mixin": "Prieš [MIXIN] minutes"
	},
	"%hour-ago": "Prieš valandą",
	"%hours-ago": {
		"mixin": "Prieš [MIXIN] valandas"
	},
	"%days-ago": {
		"mixin": "Prieš [MIXIN] dienas"
	},
	"%yesterday": "Vakar",

	"%nxt": "Sekantis",
	"%nxt-r": "Sekantis (rodyklės dešinėn klavišu)",
	"%prv": "Ankstenis",
	"%prv-l": "Ankstenis (rodyklės dešinėn klavišu)",
	"%first": "Pirmasis",
	"%last": "Paskutinis",
	"%close-esc": "Uždaryti (\"escape\" klavišu)",
	"%show": "Rodyti",

	/* Archived Web page template */
	"%arch-pg": "Šis Web puslapis yra archyvuotas Web'e.",
	/* Menu bar */
	"%sm-hlp": "(atidaryti submeniu su \"enter\" klavišu, o uždaryti su \"escape\" klavišu)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Sustabdyti rotaciją",
		"on": "Pradėti rotaciją"
	},
	"%tab-list": "Skirtukas sąrašas",
	"%tab-pnl-end1": "Šio skirtuko skydelyje pabaiga.",
	"%tab-pnl-end2": "Grįžti į skirtukų sąrašą",
	"%tab-pnl-end3": "ar toliau likusia puslapio dalimi.",
	/* Multimedia player */
	"%play": "Žaisti",
	"%pause": "Pauzė",
	"%open": "Atidaryti",
	"%close": "Uždaryti",
	"%rew": "Atsukti",
	"%ffwd": "Sukti į priekį",
	"%mute": {
		"on": "Užtylinti",
		"off": "Įjungti garsą"
	},
	"%cc": {
		"off": "Slėpti didžiųjų raidžių įjungimą",
		"on": "Rodyti didžiųjų raidžių įjungimą"
	},
	"%cc-err": "Klaida kraunant didžiųjų raidžių įjungimą",
	"%adesc": {
		"on": "Aktyvuoti audio aprašą",
		"off": "Išjungti audio aprašą"
	},
	"%prog-bar": "naudokite kairės ir dešinės rodyklės klavišus pagreitinti arba atsukti",
	"%no-video": "Jūsų naršyklė neturi galimybių paleisti šio video, prašome atsisiųsti žemiau esantį  video",
	"%pos": "Esama pozicija:",
	"%perc": "Atkūrimo procentas:",
	"%dur": "Visas laikas:",
	"%buff": "Užkrautas:",
	/* Share widget */
	"%fav": "Mėgstamas",
	"%email": "El. paštas",
	"%shr-txt": "Dalintis",
	"%shr-hnt": " su {s} ",
	"%shr-email-sub": "Įdomus puslapis",
	"%shr-email-bd": "Manau, kad Jums patiks šis puslapis:\n{t} ({u})",
	"%shr-fav-ttl": "(bookmark šį puslapį)",
	"%shr-man": "Prašome uždaryti dialogą ir spausti  Ctrl-D pažymėti puslapį.",
	"%shr-all": "Rodyti visus ({n})",
	"%shr-all-ttl": "Visos žymės",
	"%shr-disc": "Išreikštų ar numanomų ne bet kokius produktus ar paslaugas įrašas.",
	/* Form validation */
	"%frm-nosubmit": "Formos pateikti negalima, nes ",
	"%errs-fnd": " rastos klaidos.",
	"%err-fnd": " rasta klaida.",
	/* Date picker */
	"%date-hide": "Slėpti kalendorių",
	"%date-show": "Pasirinkti datą iš kalendoriaus:",
	"%date-sel": "Atrinkta",
	/* Calendar */
	"%days": ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
	"%mnths": ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
	"%cal": "Kalendorius",
	"%currDay": "(Šiandien)",
	"%cal-goToLnk": "Eiti į<span class=\"wb-inv\"> mėnesius</span>",
	"%cal-goToTtl": "Eiti į mėnesius",
	"%cal-goToMnth": "Mėnesiai:",
	"%cal-goToYr": "Metai:",
	"%cal-goToBtn": "Eiti",
	"%prvMnth": "Ankstesnis mėnuo: ",
	"%nxtMnth": "Sekantis mėnuo: ",
	/* Slideout */
	"%show-toc": "Rodyti turinį",
	"%hide-toc": "Slėpti turinys",
	"%toc": "turinys",
	/* Lightbox */
	"%lb-curr": "Punktas %curr% iš %total%",
	"%lb-xhr-err": "Turinio nepavyko užkrauti.",
	"%lb-img-err": "Nuotraukos nepavyko užkrauti.",
	/* Charts widget */
	"%table-mention": "Lentelė",
	"%table-following": "Grafika. Daugiau detalių sekančioje lentelėje.",
	/* Session timeout */
	"%st-to-msg-bgn": "Jūsų sesija pasibaigs automatiškai #min# min #sec# sek.",
	"%st-to-msg-end": "Pasirinkite \"Tęsti sesiją\" pratęsti savo sesiją.",
	"%st-msgbx-ttl": "Sesijos laiko įspėjimas",
	"%st-alrdy-to-msg": "Deja, Jūsų sesija jau baigėsi. Prašome prisijungti vėl.",
	"%st-btn-cont": "Tęsti sesiją",
	"%st-btn-end": "Sesijos pabaigos dabar",
	/* Toggle details */
	"%td-toggle": "Perjungti visi",
	"%td-open": "Išskleisti viską",
	"%td-close": "Sutraukti viską",
	"%td-ttl-open": "Išskleisti visus turinio skyrius",
	"%td-ttl-close": "Sutraukti visus turinio skyrius",
	/* Table enhancement */
	"%sortAsc": ": suaktyvinkite didėjimo tvarka rūšiuoti",
	"%sortDesc": ": suaktyvinkite rikiuojama",
	"%emptyTbl": "Nėra duomenų apie vaisto pateiktoje lentelėje",
	"%infoEntr": "Rodoma _START_ iki _END_ iš _TOTAL_ įrašų",
	"%infoEmpty": "Rodoma 0 iki 0 iš 0 įrašų",
	"%infoFilt": "(filtruojamas iš _MAX_ Iš viso įrašų)",
	"%info1000": ",",
	"%lenMenu": "Rodyti _MENU_ įrašai",
	/* Geomap */
	"%geo-mapcontrol": "Žemėlapis kontrolė",
	"%geo-zoomin": "Artinti",
	"%geo-zoomout": "Tolinti",
	"%geo-zoomworld": "Padidinti iki map mastą",
	"%geo-zoomfeature": "Padidinti iki elemento",
	"%geo-scaleline": "Žemėlapio mastelis",
	"%geo-mouseposition": "Platuma ir ilguma pelės žymeklį",
	"%geo-ariamap": "Žemėlapis objektas. Žemėlapio funkcijų aprašymai žemiau pateiktoje lentelėje.",
	"%geo-accessibilize": "<strong>Klaviatūros Vartotojų:</strong> žemėlapis sufokusuotas, naudokite rodyklių klavišus į panoraminį vaizdą, žemėlapį ir pliuso ir minuso klavišus. Rodyklių klavišus nebus przesuniesz žemėlapį, kai didinimas žemėlapyje,.",
	"%geo-accessibilizetitle": "Instrukcijos: Žemėlapis navigacijos",
	"%geo-togglelayer": "Perjungti sluoksnio rodymą",
	"%geo-hiddenlayer": "Šis sluoksnis yra paslėptas.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Kanada bazė žemėlapis (anglų arba prancūzų kalba)",
	"%geo-select": "Pasirinkti",
	"%geo-labelselect": "Patikrinkite, pasirinkite elementą žemėlapyje",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Pagrindinė HTML versija",
	"%wb-enable": "Standartinė versija",
	/* Template */
	"%tmpl-signin": "Prisijungti"
};

window.i18nObj = ind;

})( window );
