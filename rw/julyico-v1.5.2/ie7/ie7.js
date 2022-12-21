/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'julyico\'">' + entity + '</span>' + html;
	}
	var icons = {
		'jdsi-account-solid': '&#xe900;',
		'jdsi-add-user-solid': '&#xe901;',
		'jdsi-alarm-warning-solid': '&#xe902;',
		'jdsi-announcement-solid': '&#xe903;',
		'jdsi-arrow-back-solid': '&#xe904;',
		'jdsi-arrow-begin-solid': '&#xe905;',
		'jdsi-arrow-down-solid': '&#xe906;',
		'jdsi-arrow-end-solid': '&#xe907;',
		'jdsi-arrow-first-solid': '&#xe908;',
		'jdsi-arrow-last-solid': '&#xe909;',
		'jdsi-arrow-left-double-solid': '&#xe90a;',
		'jdsi-arrow-left-long-solid': '&#xe90b;',
		'jdsi-arrow-left-solid': '&#xe90c;',
		'jdsi-arrow-right-double-solid': '&#xe90d;',
		'jdsi-arrow-right-long-solid': '&#xe90e;',
		'jdsi-arrow-right-solid': '&#xe90f;',
		'jdsi-arrow-right-top-solid': '&#xe910;',
		'jdsi-arrow-up-solid': '&#xe911;',
		'jdsi-article-solid': '&#xe912;',
		'jdsi-at-solid': '&#xe913;',
		'jdsi-award-solid': '&#xe914;',
		'jdsi-bank-card-solid': '&#xe915;',
		'jdsi-bar-chart-solid': '&#xe916;',
		'jdsi-barricade-solid': '&#xe917;',
		'jdsi-blueprint-solid': '&#xe918;',
		'jdsi-bolt-solid': '&#xe919;',
		'jdsi-book-open-solid': '&#xe91d;',
		'jdsi-book-solid': '&#xe91e;',
		'jdsi-bookmark-minus-solid': '&#xe91a;',
		'jdsi-bookmark-solid': '&#xe91b;',
		'jdsi-bookmark-star-solid': '&#xe91c;',
		'jdsi-briefcase-solid': '&#xe91f;',
		'jdsi-brush-solid': '&#xe920;',
		'jdsi-bug-solid': '&#xe921;',
		'jdsi-building-solid': '&#xe922;',
		'jdsi-calculate-solid': '&#xe923;',
		'jdsi-calendar-solid': '&#xe924;',
		'jdsi-carrot-down-solid': '&#xe925;',
		'jdsi-carrot-first-solid': '&#xe926;',
		'jdsi-carrot-last-solid': '&#xe927;',
		'jdsi-carrot-left-solid': '&#xe928;',
		'jdsi-carrot-right-solid': '&#xe929;',
		'jdsi-carrot-up-down-solid': '&#xe92a;',
		'jdsi-carrot-up-solid': '&#xe92b;',
		'jdsi-certificate-solid': '&#xe92c;',
		'jdsi-chart-customize-solid': '&#xe92d;',
		'jdsi-chat-solid': '&#xe92e;',
		'jdsi-circle-album-solid': '&#xe92f;',
		'jdsi-clipboard-solid': '&#xe930;',
		'jdsi-clise-solid': '&#xe931;',
		'jdsi-clock-alram-solid': '&#xe932;',
		'jdsi-clock-solid': '&#xe933;',
		'jdsi-cloud-check-solid': '&#xe934;',
		'jdsi-cloud-close-solid': '&#xe935;',
		'jdsi-cloud-crack-solid': '&#xe936;',
		'jdsi-cloud-down-solid': '&#xe937;',
		'jdsi-cloud-off-solid': '&#xe938;',
		'jdsi-cloud-solid': '&#xe939;',
		'jdsi-cloud-up-solid': '&#xe93a;',
		'jdsi-code-solid': '&#xe93b;',
		'jdsi-collapse-around-solid': '&#xe93c;',
		'jdsi-community-building-solid': '&#xe93d;',
		'jdsi-community-solid': '&#xe93e;',
		'jdsi-company-solid': '&#xe93f;',
		'jdsi-compass-solid': '&#xe940;',
		'jdsi-configuration-solid': '&#xe941;',
		'jdsi-confused-solid': '&#xe942;',
		'jdsi-contacts-solid': '&#xe943;',
		'jdsi-copy-solid': '&#xe944;',
		'jdsi-countdown-solid': '&#xe945;',
		'jdsi-cross-box-solid': '&#xe946;',
		'jdsi-cross-circle-solid': '&#xe947;',
		'jdsi-crown-solid': '&#xe948;',
		'jdsi-cup-solid': '&#xe949;',
		'jdsi-currency-boxes-solid': '&#xe94a;',
		'jdsi-cut-solid': '&#xe94b;',
		'jdsi-delete-solid': '&#xe94c;',
		'jdsi-devices-solid': '&#xe94d;',
		'jdsi-diamond-solid': '&#xe94e;',
		'jdsi-documant-solid': '&#xe94f;',
		'jdsi-dollar-solid': '&#xe950;',
		'jdsi-door-lock-solid': '&#xe951;',
		'jdsi-download-solid': '&#xe952;',
		'jdsi-earth-solid': '&#xe953;',
		'jdsi-edit-solid': '&#xe954;',
		'jdsi-education-solid': '&#xe955;',
		'jdsi-error-solid': '&#xe956;',
		'jdsi-excel-files-solid': '&#xe957;',
		'jdsi-excel-solid': '&#xe958;',
		'jdsi-exchange-box-solid': '&#xe959;',
		'jdsi-expand-around-solid': '&#xe95a;',
		'jdsi-eye-off-solid': '&#xe95b;',
		'jdsi-eye-solid': '&#xe95c;',
		'jdsi-face-mask-solid': '&#xe95d;',
		'jdsi-fax-solid': '&#xe95e;',
		'jdsi-female-solid': '&#xe95f;',
		'jdsi-file-pdf-solid': '&#xe960;',
		'jdsi-file-shred-solid': '&#xe961;',
		'jdsi-file-solid': '&#xe962;',
		'jdsi-file-unknow-solid': '&#xe964;',
		'jdsi-files-unknow-solid': '&#xe963;',
		'jdsi-filling-solid': '&#xe965;',
		'jdsi-filter-solid': '&#xe966;',
		'jdsi-fire-solid': '&#xe967;',
		'jdsi-flag-solid': '&#xe968;',
		'jdsi-flag-wind-solid': '&#xe969;',
		'jdsi-focus-solid': '&#xe96a;',
		'jdsi-fold-paper-solid': '&#xe96e;',
		'jdsi-folder-open-solid': '&#xe96b;',
		'jdsi-folder-solid': '&#xe96c;',
		'jdsi-folders-solid': '&#xe96d;',
		'jdsi-forward-solid': '&#xe96f;',
		'jdsi-function-solis': '&#xe970;',
		'jdsi-global-net-solid': '&#xe971;',
		'jdsi-globe-solid': '&#xe972;',
		'jdsi-graph-chart-solid': '&#xe973;',
		'jdsi-grid-solid': '&#xe974;',
		'jdsi-hamburger-solid': '&#xe975;',
		'jdsi-handshake-solid': '&#xe9ef;',
		'jdsi-happy-solid': '&#xe976;',
		'jdsi-heart-solid': '&#xe977;',
		'jdsi-help-box-solid': '&#xe978;',
		'jdsi-help-cercle-solid': '&#xe979;',
		'jdsi-home-solid': '&#xe97a;',
		'jdsi-honour-solid': '&#xe97b;',
		'jdsi-image-place-solid': '&#xe97c;',
		'jdsi-image-solid': '&#xe97d;',
		'jdsi-incognito-solid': '&#xeb0e;',
		'jdsi-industry-solid': '&#xe97e;',
		'jdsi-key-solid': '&#xe97f;',
		'jdsi-laptop-solid': '&#xe980;',
		'jdsi-lifebuoy-solid': '&#xe981;',
		'jdsi-light-flash-solid': '&#xe982;',
		'jdsi-light-solid': '&#xe983;',
		'jdsi-link-solid': '&#xe984;',
		'jdsi-list-solid': '&#xe985;',
		'jdsi-lock-solid': '&#xe986;',
		'jdsi-login-box-solid': '&#xe987;',
		'jdsi-login-circle-solid': '&#xe988;',
		'jdsi-logout-box-solid': '&#xe989;',
		'jdsi-logout-circle-solid': '&#xe98a;',
		'jdsi-magic-solid': '&#xe98b;',
		'jdsi-magnet-solid': '&#xe98c;',
		'jdsi-mail-add-solid': '&#xe98d;',
		'jdsi-mail-check-solid': '&#xe98e;',
		'jdsi-mail-close-solid': '&#xe98f;',
		'jdsi-mail-download-solid': '&#xe990;',
		'jdsi-mail-forbid-solid': '&#xe991;',
		'jdsi-mail-inbox-solid': '&#xe992;',
		'jdsi-mail-lock-solid': '&#xe993;',
		'jdsi-mail-open-solid': '&#xe994;',
		'jdsi-mail-search-solid': '&#xe995;',
		'jdsi-mail-send-solid': '&#xe996;',
		'jdsi-mail-settings-solid': '&#xe997;',
		'jdsi-mail-solid': '&#xe998;',
		'jdsi-mail-star-solid': '&#xe999;',
		'jdsi-mail-unread-solid': '&#xe99a;',
		'jdsi-male-solid': '&#xe99b;',
		'jdsi-manage-solid': '&#xe99c;',
		'jdsi-map-pin-land-solid': '&#xe99d;',
		'jdsi-map-pin-solid': '&#xe99e;',
		'jdsi-measurement-solid': '&#xe99f;',
		'jdsi-message-solid': '&#xe9a0;',
		'jdsi-mic-off-solid': '&#xe9a1;',
		'jdsi-mic-solid': '&#xe9a2;',
		'jdsi-minus-solid': '&#xe9a3;',
		'jdsi-money-box-solid': '&#xe9a4;',
		'jdsi-money-circle-solid': '&#xe9a5;',
		'jdsi-monitor-solid': '&#xe9a6;',
		'jdsi-moon-solid': '&#xe9a7;',
		'jdsi-more-h-solid': '&#xe9a8;',
		'jdsi-more-v-solid': '&#xe9a9;',
		'jdsi-mouse-solid': '&#xe9aa;',
		'jdsi-newspaper-solid': '&#xe9ab;',
		'jdsi-notification-solid': '&#xe9ac;',
		'jdsi-owl-solid': '&#xe9ad;',
		'jdsi-paintbucket-solid': '&#xe9ae;',
		'jdsi-palette-solid': '&#xe9af;',
		'jdsi-participants-solid': '&#xe9b0;',
		'jdsi-pdf-solid': '&#xe9b1;',
		'jdsi-percent-solid': '&#xe9b2;',
		'jdsi-phone-solid': '&#xe9b3;',
		'jdsi-pie-chart-solid': '&#xe9b4;',
		'jdsi-plant-solid': '&#xe9b5;',
		'jdsi-plus-solid': '&#xe9b6;',
		'jdsi-power-solid': '&#xe9b7;',
		'jdsi-printer-solid': '&#xe9b8;',
		'jdsi-project-solid': '&#xe9b9;',
		'jdsi-question-answer-solid': '&#xe9ba;',
		'jdsi-quill-pen-solid': '&#xe9bb;',
		'jdsi-radar-solid': '&#xe9bc;',
		'jdsi-record-solid': '&#xe9bd;',
		'jdsi-refrash-solid': '&#xe9be;',
		'jdsi-reload-solid': '&#xe9bf;',
		'jdsi-reply-all-solid': '&#xe9c0;',
		'jdsi-reply-solid': '&#xe9c1;',
		'jdsi-right-box-solid': '&#xe9c2;',
		'jdsi-right-circle-solid': '&#xe9c3;',
		'jdsi-right-solid': '&#xe9c4;',
		'jdsi-rocket-solid': '&#xe9c5;',
		'jdsi-sad-solid': '&#xe9c6;',
		'jdsi-safe-solid': '&#xe9c7;',
		'jdsi-safe-vault-solid': '&#xe9c8;',
		'jdsi-save-solid': '&#xe9c9;',
		'jdsi-search-solid': '&#xe9ca;',
		'jdsi-secured-solid': '&#xe9cb;',
		'jdsi-security-user-solid': '&#xe9cc;',
		'jdsi-send-solid': '&#xe9cd;',
		'jdsi-sensor-solid': '&#xe9ce;',
		'jdsi-server-solid': '&#xe9cf;',
		'jdsi-settings-solid': '&#xe9d0;',
		'jdsi-share-forward-solid': '&#xe9d1;',
		'jdsi-share-solid': '&#xe9d2;',
		'jdsi-shield-solid': '&#xea49;',
		'jdsi-shield-star-solid': '&#xea4a;',
		'jdsi-small-home-solid': '&#xe9d3;',
		'jdsi-smartphone-solid': '&#xe9d4;',
		'jdsi-stack-solid': '&#xe9d5;',
		'jdsi-star-solid': '&#xe9d6;',
		'jdsi-sun-solid': '&#xe9d7;',
		'jdsi-swap-solid': '&#xe9d8;',
		'jdsi-tablet-solid': '&#xe9d9;',
		'jdsi-team-solid': '&#xe9da;',
		'jdsi-thumb-down-solid': '&#xe9f1;',
		'jdsi-thumb-up-solid': '&#xe9f0;',
		'jdsi-todo-solid': '&#xe9db;',
		'jdsi-tools-manage-solid': '&#xe9dc;',
		'jdsi-trophy-solid': '&#xe9dd;',
		'jdsi-umbrella-solid': '&#xe9de;',
		'jdsi-upload-solid': '&#xe9df;',
		'jdsi-user-solid': '&#xe9e0;',
		'jdsi-vidicon-solid': '&#xe9e1;',
		'jdsi-volume-down-solid': '&#xe9e2;',
		'jdsi-volume-mute-solid': '&#xe9e3;',
		'jdsi-volume-up-solid': '&#xe9e4;',
		'jdsi-wallet-solid': '&#xe9e5;',
		'jdsi-webcam-solid': '&#xe9e6;',
		'jdsi-window-solid': '&#xe9e7;',
		'jdsi-woman-solid': '&#xe9e8;',
		'jdsi-word-files-solid': '&#xe9e9;',
		'jdsi-word-solid': '&#xe9ea;',
		'jdsi-worning-triangle-solid': '&#xe9eb;',
		'jdsi-wpexplorer-solid': '&#xe9ec;',
		'jdsi-zoom-in-solid': '&#xe9ed;',
		'jdsi-zoom-out-solid': '&#xe9ee;',
		'jdsi-Printer': '&#xeac3;',
		'jdsi-account': '&#xe9f2;',
		'jdsi-add-user': '&#xe9f3;',
		'jdsi-alarm-warning': '&#xe9f4;',
		'jdsi-align-center': '&#xe9f5;',
		'jdsi-align-justify': '&#xe9f6;',
		'jdsi-align-left': '&#xe9f7;',
		'jdsi-align-right': '&#xe9f8;',
		'jdsi-announcement': '&#xe9f9;',
		'jdsi-arrow-back': '&#xe9fa;',
		'jdsi-arrow-begin': '&#xe9fb;',
		'jdsi-arrow-down': '&#xe9fc;',
		'jdsi-arrow-end': '&#xe9fd;',
		'jdsi-arrow-first': '&#xe9fe;',
		'jdsi-arrow-last': '&#xe9ff;',
		'jdsi-arrow-left': '&#xea00;',
		'jdsi-arrow-left-double': '&#xea01;',
		'jdsi-arrow-left-long': '&#xea02;',
		'jdsi-arrow-right': '&#xea03;',
		'jdsi-arrow-right-double': '&#xea04;',
		'jdsi-arrow-right-long': '&#xea05;',
		'jdsi-arrow-right-top': '&#xea06;',
		'jdsi-arrow-up': '&#xea07;',
		'jdsi-article': '&#xea08;',
		'jdsi-at': '&#xea09;',
		'jdsi-attachment': '&#xea0a;',
		'jdsi-award': '&#xea0b;',
		'jdsi-bank-card': '&#xea0c;',
		'jdsi-bar-chart': '&#xea0d;',
		'jdsi-barricade': '&#xea0e;',
		'jdsi-blueprint': '&#xea0f;',
		'jdsi-bolt': '&#xea10;',
		'jdsi-book': '&#xea11;',
		'jdsi-book-open': '&#xea15;',
		'jdsi-bookmark': '&#xea12;',
		'jdsi-bookmark-minus': '&#xea13;',
		'jdsi-bookmark-star': '&#xea14;',
		'jdsi-briefcase': '&#xea16;',
		'jdsi-brush': '&#xea17;',
		'jdsi-bug': '&#xea18;',
		'jdsi-building': '&#xea19;',
		'jdsi-calculate': '&#xea1a;',
		'jdsi-calendar': '&#xea1b;',
		'jdsi-certificate': '&#xea1c;',
		'jdsi-chart-customize': '&#xea1d;',
		'jdsi-chat': '&#xea1e;',
		'jdsi-circle-album': '&#xea1f;',
		'jdsi-clipboard': '&#xea20;',
		'jdsi-clock': '&#xea21;',
		'jdsi-clock-alram': '&#xea22;',
		'jdsi-close': '&#xea23;',
		'jdsi-cloud': '&#xea24;',
		'jdsi-cloud-check': '&#xea25;',
		'jdsi-cloud-close': '&#xea26;',
		'jdsi-cloud-crack': '&#xea27;',
		'jdsi-cloud-down': '&#xea28;',
		'jdsi-cloud-off': '&#xea29;',
		'jdsi-cloud-up': '&#xea2a;',
		'jdsi-code': '&#xea2b;',
		'jdsi-collapse-around': '&#xea2c;',
		'jdsi-community': '&#xea2d;',
		'jdsi-community-building': '&#xea2e;',
		'jdsi-company': '&#xea2f;',
		'jdsi-compass': '&#xea30;',
		'jdsi-configuration': '&#xea31;',
		'jdsi-confused': '&#xea32;',
		'jdsi-contacts': '&#xeb0f;',
		'jdsi-copy': '&#xea33;',
		'jdsi-countdown': '&#xea34;',
		'jdsi-cross-box': '&#xea35;',
		'jdsi-cross-circle': '&#xea36;',
		'jdsi-cross-open': '&#xea37;',
		'jdsi-crown': '&#xea38;',
		'jdsi-cup': '&#xea39;',
		'jdsi-currency-boxes': '&#xea3a;',
		'jdsi-cut': '&#xea3b;',
		'jdsi-delete': '&#xea3c;',
		'jdsi-devices': '&#xea3d;',
		'jdsi-diamond': '&#xea3e;',
		'jdsi-documant': '&#xea3f;',
		'jdsi-dollar': '&#xea40;',
		'jdsi-door-lock': '&#xea41;',
		'jdsi-double-quotes-left': '&#xea42;',
		'jdsi-double-quotes-right': '&#xea43;',
		'jdsi-download': '&#xea44;',
		'jdsi-earth': '&#xea45;',
		'jdsi-edit': '&#xea46;',
		'jdsi-education': '&#xea47;',
		'jdsi-enroll': '&#xea48;',
		'jdsi-error': '&#xea4c;',
		'jdsi-error-open': '&#xea4d;',
		'jdsi-excel': '&#xea4e;',
		'jdsi-excel-files': '&#xea4f;',
		'jdsi-exchange-box': '&#xea50;',
		'jdsi-expand-around': '&#xea51;',
		'jdsi-eye': '&#xea52;',
		'jdsi-eye-off': '&#xea53;',
		'jdsi-face-mask': '&#xea54;',
		'jdsi-fax': '&#xea55;',
		'jdsi-female': '&#xea56;',
		'jdsi-file': '&#xea57;',
		'jdsi-file-pdf': '&#xea58;',
		'jdsi-file-shred': '&#xea59;',
		'jdsi-file-unknow': '&#xea5b;',
		'jdsi-files-unknow': '&#xea5a;',
		'jdsi-filter': '&#xea5c;',
		'jdsi-filtering': '&#xea5d;',
		'jdsi-fire': '&#xea5e;',
		'jdsi-flag': '&#xea5f;',
		'jdsi-flag-wind': '&#xea60;',
		'jdsi-focus': '&#xea61;',
		'jdsi-fold-paper': '&#xea65;',
		'jdsi-folder': '&#xea62;',
		'jdsi-folder-open': '&#xea63;',
		'jdsi-folders': '&#xea64;',
		'jdsi-forward': '&#xea66;',
		'jdsi-function': '&#xea67;',
		'jdsi-function-e': '&#xea68;',
		'jdsi-global-net': '&#xea69;',
		'jdsi-globe': '&#xea6a;',
		'jdsi-graph-chart': '&#xea6b;',
		'jdsi-grid': '&#xea6c;',
		'jdsi-hamburger': '&#xea6d;',
		'jdsi-handshake': '&#xeb0b;',
		'jdsi-happy': '&#xea6e;',
		'jdsi-heart': '&#xea6f;',
		'jdsi-help-box': '&#xea70;',
		'jdsi-help-cercle': '&#xea71;',
		'jdsi-help-open': '&#xea72;',
		'jdsi-home': '&#xea73;',
		'jdsi-honour': '&#xea74;',
		'jdsi-ico': '&#xea75;',
		'jdsi-image': '&#xea79;',
		'jdsi-image-place': '&#xea7a;',
		'jdsi-incognito': '&#xeb11;',
		'jdsi-industry': '&#xea7b;',
		'jdsi-key': '&#xea7c;',
		'jdsi-laptop': '&#xea7d;',
		'jdsi-lifebuoy': '&#xea7e;',
		'jdsi-light': '&#xea7f;',
		'jdsi-light-flash': '&#xea80;',
		'jdsi-link': '&#xea81;',
		'jdsi-list': '&#xea82;',
		'jdsi-loading': '&#xea83;',
		'jdsi-lock': '&#xea84;',
		'jdsi-login-box': '&#xea85;',
		'jdsi-login-circle': '&#xea86;',
		'jdsi-logo-july': '&#xea87;',
		'jdsi-logo-unify': '&#xea88;',
		'jdsi-logout-box': '&#xea89;',
		'jdsi-logout-circle': '&#xea8a;',
		'jdsi-magic': '&#xea8b;',
		'jdsi-magnet': '&#xea8c;',
		'jdsi-mail': '&#xea8d;',
		'jdsi-mail-add': '&#xea8e;',
		'jdsi-mail-check': '&#xea8f;',
		'jdsi-mail-close': '&#xea90;',
		'jdsi-mail-download': '&#xea91;',
		'jdsi-mail-forbid': '&#xea92;',
		'jdsi-mail-inbox': '&#xea93;',
		'jdsi-mail-lock': '&#xea94;',
		'jdsi-mail-open': '&#xea95;',
		'jdsi-mail-search': '&#xea96;',
		'jdsi-mail-send': '&#xea97;',
		'jdsi-mail-settings': '&#xea98;',
		'jdsi-mail-star': '&#xea99;',
		'jdsi-mail-unread': '&#xea9a;',
		'jdsi-male': '&#xea9b;',
		'jdsi-manage': '&#xea9c;',
		'jdsi-map-pin': '&#xea9d;',
		'jdsi-map-pin-land': '&#xea9e;',
		'jdsi-measurement': '&#xea9f;',
		'jdsi-message': '&#xeaa0;',
		'jdsi-mic': '&#xeaa1;',
		'jdsi-mic-off': '&#xeaa2;',
		'jdsi-minus': '&#xeaa3;',
		'jdsi-money-box': '&#xeaa4;',
		'jdsi-money-circle': '&#xeaa5;',
		'jdsi-monitor': '&#xeaa6;',
		'jdsi-moon': '&#xeaa7;',
		'jdsi-more-h': '&#xeaa8;',
		'jdsi-more-v': '&#xeaa9;',
		'jdsi-mouse': '&#xeaaa;',
		'jdsi-newspaper': '&#xeaab;',
		'jdsi-notification': '&#xeaac;',
		'jdsi-number0': '&#xeaad;',
		'jdsi-number1': '&#xeaae;',
		'jdsi-number2': '&#xeaaf;',
		'jdsi-number3': '&#xeab0;',
		'jdsi-number4': '&#xeab1;',
		'jdsi-number5': '&#xeab2;',
		'jdsi-number6': '&#xeab3;',
		'jdsi-number7': '&#xeab4;',
		'jdsi-number8': '&#xeab5;',
		'jdsi-number9': '&#xeab6;',
		'jdsi-owl': '&#xeab7;',
		'jdsi-paintbucket': '&#xeab8;',
		'jdsi-palette': '&#xeab9;',
		'jdsi-participants': '&#xeaba;',
		'jdsi-pdf': '&#xeabb;',
		'jdsi-percent': '&#xeabc;',
		'jdsi-phone': '&#xeabd;',
		'jdsi-pie-chart': '&#xeabe;',
		'jdsi-pin': '&#xeabf;',
		'jdsi-plant': '&#xeac0;',
		'jdsi-plus': '&#xeac1;',
		'jdsi-power': '&#xeac2;',
		'jdsi-product': '&#xeac4;',
		'jdsi-project': '&#xeac5;',
		'jdsi-question-answer': '&#xead2;',
		'jdsi-quill-pen': '&#xead3;',
		'jdsi-radar': '&#xead4;',
		'jdsi-record': '&#xead5;',
		'jdsi-refrash': '&#xead6;',
		'jdsi-refresh': '&#xead7;',
		'jdsi-reload': '&#xead8;',
		'jdsi-reply': '&#xead9;',
		'jdsi-reply-all': '&#xeada;',
		'jdsi-right': '&#xeadb;',
		'jdsi-right-box': '&#xeadc;',
		'jdsi-right-circle': '&#xeadd;',
		'jdsi-right-double': '&#xeade;',
		'jdsi-right-open': '&#xeadf;',
		'jdsi-rocket': '&#xeae0;',
		'jdsi-sad': '&#xeae1;',
		'jdsi-safe': '&#xeae2;',
		'jdsi-safe-vault': '&#xeae3;',
		'jdsi-save': '&#xeae4;',
		'jdsi-search': '&#xeae5;',
		'jdsi-secured': '&#xeae6;',
		'jdsi-security-user': '&#xeb12;',
		'jdsi-send': '&#xeae7;',
		'jdsi-sensor': '&#xeae8;',
		'jdsi-server': '&#xeae9;',
		'jdsi-settings': '&#xeaea;',
		'jdsi-share': '&#xeaeb;',
		'jdsi-share-forward': '&#xeaec;',
		'jdsi-shield': '&#xea4b;',
		'jdsi-shield-star': '&#xea76;',
		'jdsi-single-quotes-left': '&#xeaed;',
		'jdsi-single-quotes-right': '&#xeaee;',
		'jdsi-small-home': '&#xeaef;',
		'jdsi-smartphone': '&#xeaf0;',
		'jdsi-stack': '&#xeaf1;',
		'jdsi-star': '&#xeaf2;',
		'jdsi-sun': '&#xeaf3;',
		'jdsi-swap': '&#xeaf4;',
		'jdsi-tablet': '&#xeaf5;',
		'jdsi-team': '&#xeaf6;',
		'jdsi-thumb-down': '&#xeb0d;',
		'jdsi-thumb-up': '&#xeb0c;',
		'jdsi-todo': '&#xeaf7;',
		'jdsi-toogle': '&#xeaf8;',
		'jdsi-tools-manage': '&#xeaf9;',
		'jdsi-trophy': '&#xeafa;',
		'jdsi-umbrella': '&#xeafb;',
		'jdsi-upload': '&#xeafc;',
		'jdsi-user': '&#xeafd;',
		'jdsi-vidicon': '&#xeafe;',
		'jdsi-volume-down': '&#xeaff;',
		'jdsi-volume-mute': '&#xeb00;',
		'jdsi-volume-up': '&#xeb01;',
		'jdsi-wallet': '&#xeb02;',
		'jdsi-webcam': '&#xeb03;',
		'jdsi-window': '&#xeb04;',
		'jdsi-woman': '&#xeb10;',
		'jdsi-word': '&#xeb05;',
		'jdsi-word-files': '&#xeb06;',
		'jdsi-worning-triangle': '&#xeb07;',
		'jdsi-wpexplorer': '&#xeb08;',
		'jdsi-zoom-in': '&#xeb09;',
		'jdsi-zoom-out': '&#xeb0a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/jdsi-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
