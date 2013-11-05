/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-05
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Arabic dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "ar",
	"%lang-en": "Arabic",
	"%lang-fr": "arabe",
	"%lang-nat": "العربية",
	"%all": "جميع",
	"%home": "منزل",
	"%main-page": "الصفحة الرئيسية",
	"%tphp": "أعلى الصفحة",
	"%you-are-in": "كنت في",
	"%welcome-to": "مرحبا بكم في",
	"%load": "   تحميل ...",
	"%process": "تجهيز ...",
	"%srch": "البحث",
	"%srch-terms": "البحث عن شروط:",
	"%no-match": "لا نتائج تذكر لل",
	"%matches": {
		"mixin": "العثور على [MIXIN] مباريات"
	},
	"%menu": "قائمة الطعام",
	"%settings": "إعدادات",
	"%langs": "لغات",
	"%about": "حول",
	"%curr": "(الحالي)",
	"%hide": "إخفاء",
	"%err": "خطأ",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": "، ",
	"%space": "&#32;",
	"%start": "بداية",
	"%stop": "توقف",
	"%back": "ظهر",
	"%cancel": "إلغاء",
	"%new-win": " (يفتح في نافذة جديدة)",
	"%min-ago": "منذ دقيقة واحدة",
	"%coup-mins": "بضع دقائق قبل",
	"%mins-ago": {
		"mixin": "منذ [MIXIN] دقيقة"
	},
	"%hour-ago": "قبل ساعة",
	"%hours-ago": {
		"mixin": "منذ [MIXIN] ساعات"
	},
	"%days-ago": {
		"mixin": "منذ [MIXIN] أيام"
	},
	"%yesterday": "أمس",

	"%nxt": "التالي",
	"%nxt-r": "مفتاح السهم الأيمن - التالي",
	"%prv": "سابق",
	"%prv-l": "مفتاح السهم الأيسر - سابق",
	"%first": "الأول",
	"%last": "آخر",
	"%close-esc": "إغلاق - مفتاح الهروب",
	"%show": "عرض",

	/* Archived Web page template */
	"%arch-pg": "وقد حفظت هذه الصفحة على شبكة الإنترنت.",
	/* Menu bar */
	"%sm-hlp": "(فتح القائمة الفرعية مع مفتاح الدخول وثيقة مع مفتاح الهروب)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "ايقاف الدوران علامة التبويب",
		"on": "بدء دوران التبويب"
	},
	"%tab-list": "علامة التبويب قائمة",
	"%tab-pnl-end1": "نهاية هذا الفريق التبويب.",
	"%tab-pnl-end2": "العودة إلى قائمة التبويب",
	"%tab-pnl-end3": "أو الاستمرار في بقية الصفحة.",
	/* Multimedia player */
	"%play": "لعب",
	"%pause": "وقفة",
	"%open": "فتح",
	"%close": "أغلق",
	"%rew": "الترجيع",
	"%ffwd": "سريع إلى الأمام",
	"%mute": {
		"on": "كتم",
		"off": "إلغاء كتمه"
	},
	"%cc": {
		"off": "أغلقت إخفاء السفلية",
		"on": "أغلقت تظهر السفلية"
	},
	"%cc-err": "خطأ في تحميل تعليق مغلق",
	"%adesc": {
		"on": "تمكين الوصف السمعي",
		"off": "تعطيل الوصف السمعي"
	},
	"%prog-bar": "استخدام مفاتيح الأسهم الأيمن والأيسر للنهوض والتقدم ترجيع وسائل الإعلام",
	"%no-video": "متصفحك لا يبدو أن قدرات للعب هذا الفيديو، يرجى تحميل الفيديو أدناه",
	"%pos": "الوظيفة الحالية:",
	"%perc": "قراءة نسبة:",
	"%dur": "إجمالي الوقت:",
	"%buff": "مخزنة:",
	/* Share widget */
	"%fav": "المفضل",
	"%email": "البريد الإلكتروني",
	"%shr-txt": "مشاركة هذه الصفحة",
	"%shr-hnt": " مع {s} ",
	"%shr-email-sub": "صفحة مثيرة للاهتمام",
	"%shr-email-bd": "أعتقد أنك قد تجد هذه الصفحة مثيرة للاهتمام:\n{t} ({u})",
	"%shr-fav-ttl": "(إشارة مرجعية هذه الصفحة)",
	"%shr-man": "الرجاء إغلاق هذا الحوار واضغط على Ctrl-D المرجعية لهذه الصفحة.",
	"%shr-all": "عرض كل ({n})",
	"%shr-all-ttl": "جميع مواقع ارتباطك",
	"%shr-disc": "وأعرب عن تأييد أي أي منتجات أو خدمات أو ضمنية.",
	/* Form validation */
	"%frm-nosubmit": "لا يمكن أن تقدم على شكل ل ",
	"%errs-fnd": " تم العثور على أخطاء.",
	"%err-fnd": " تم العثور على خطأ.",
	/* Date picker */
	"%date-hide": "إخفاء التقويم",
	"%date-show": "اختيار تاريخ من التقويم لحقل:",
	"%date-sel": "مختار",
	/* Calendar */
	"%days": ["الأحد", "يوم الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
	"%mnths": ["يناير", "فبراير", "مسيرة", "أبريل", "قد", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
	"%cal": "تقويم",
	"%currDay": "(اليوم الحالي)",
	"%cal-goToLnk": "<span class=\"wb-inv\">انتقل إلى الشهر </span>من العام",
	"%cal-goToTtl": "انتقل إلى الشهر من العام",
	"%cal-goToMnth": "الشهر:",
	"%cal-goToYr": "العام:",
	"%cal-goToBtn": "تذهب",
	"%prvMnth": "الشهر الماضي: ",
	"%nxtMnth": "الشهر المقبل: ",
	/* Slideout */
	"%show-toc": "عرض جدول المحتويات",
	"%hide-toc": "إخفاء جدول المحتويات",
	"%toc": "جدول المحتويات",
	/* Lightbox */
	"%lb-curr": "البند %curr% من %total%",
	"%lb-xhr-err": "فشل هذا المحتوى ليتم تحميلها.",
	"%lb-img-err": "فشلت هذه الصورة ليتم تحميلها.",
	/* Charts widget */
	"%table-mention": "جدول",
	"%table-following": "الرسم البياني. التفاصيل في الجدول التالي.",
	/* Session timeout */
	"%st-to-msg-bgn": "سوف تنتهي جلسة العمل الخاصة بك تلقائيا في على  #min# دقيقة #sec# ثانية.",
	"%st-to-msg-end": "اختر \"متابعة الجلسة\" لتمديد جلسة العمل الخاصة بك.",
	"%st-msgbx-ttl": "الدورة مهلة الإنذار",
	"%st-alrdy-to-msg": "عذرا انتهت صلاحية جلسة العمل الخاصة بك بالفعل. يرجى تسجيل الدخول مرة أخرى.",
	"%st-btn-cont": "تستمر الدورة",
	"%st-btn-end": "إنهاء جلسة الآن",
	/* Toggle details */
	"%td-toggle": "تبديل جميع",
	"%td-open": "توسيع الكل",
	"%td-close": "طي الكل",
	"%td-ttl-open": "توسيع كافة أقسام محتوى",
	"%td-ttl-close": "انهيار جميع قطاعات المحتوى",
	/* Table enhancement */
	"%sortAsc": ": تفعيل لنوع تصاعدي",
	"%sortDesc": ": تفعيل لفرز تنازلي",
	"%emptyTbl": "لا تتوفر بيانات في الجدول",
	"%infoEntr": "عرض _START_ إلى _END_ من _TOTAL_ مقالات",
	"%infoEmpty": "عرض 0 إلى 0 من 0 مقالات",
	"%infoFilt": "(تمت تصفيتها في الفترة من _MAX_ مجموع المقالات)",
	"%info1000": ",",
	"%lenMenu": "عرض _MENU_ مقالات",
	/* Geomap */
	"%geo-mapcontrol": "خريطة مراقبة",
	"%geo-zoomin": "تكبير",
	"%geo-zoomout": "تصغير",
	"%geo-zoomworld": "التكبير لتعيين حد",
	"%geo-zoomfeature": "تكبير إلى العنصر",
	"%geo-scaleline": "خريطة نطاق",
	"%geo-mouseposition": "خطوط الطول والعرض من مؤشر الماوس",
	"%geo-ariamap": "خريطة الكائن. أوصاف الميزات الخريطة هي في الجدول أدناه.",
	"%geo-accessibilize": "<strong>مستخدمي لوحة المفاتيح:</strong> عندما الخريطة هي في التركيز، استخدم مفاتيح الأسهم لتحريك الخريطة ومفاتيح زائد وناقص لتكبير. فإن مفاتيح الأسهم لا تحريك الخريطة عند التكبير إلى حد الخريطة.",
	"%geo-accessibilizetitle": "تعليمات: خريطة الملاحة",
	"%geo-togglelayer": "تبديل عرض طبقة",
	"%geo-hiddenlayer": "حاليا يتم إخفاء هذه الطبقة.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - كندا قاعدة الخريطة (الإنجليزية أو الفرنسية فقط)",
	"%geo-select": "حدد",
	"%geo-labelselect": "تحقق لتحديد عنصر على الخريطة",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "إصدار HTML الأساسي",
	"%wb-enable": "الإصدار القياسي",
	/* Template */
	"%tmpl-signin": "تسجيل الدخول"
};

window.i18nObj = ind;

})( window );
