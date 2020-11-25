/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/passive-voice/passive.js":
/*!***********************************************!*\
  !*** ./node_modules/passive-voice/passive.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var irregulars = [\n  'awoken',\n  'been',\n  'born',\n  'beat',\n  'become',\n  'begun',\n  'bent',\n  'beset',\n  'bet',\n  'bid',\n  'bidden',\n  'bound',\n  'bitten',\n  'bled',\n  'blown',\n  'broken',\n  'bred',\n  'brought',\n  'broadcast',\n  'built',\n  'burnt',\n  'burst',\n  'bought',\n  'cast',\n  'caught',\n  'chosen',\n  'clung',\n  'come',\n  'cost',\n  'crept',\n  'cut',\n  'dealt',\n  'dug',\n  'dived',\n  'done',\n  'drawn',\n  'dreamt',\n  'driven',\n  'drunk',\n  'eaten',\n  'fallen',\n  'fed',\n  'felt',\n  'fought',\n  'found',\n  'fit',\n  'fled',\n  'flung',\n  'flown',\n  'forbidden',\n  'forgotten',\n  'foregone',\n  'forgiven',\n  'forsaken',\n  'frozen',\n  'gotten',\n  'given',\n  'gone',\n  'ground',\n  'grown',\n  'hung',\n  'heard',\n  'hidden',\n  'hit',\n  'held',\n  'hurt',\n  'kept',\n  'knelt',\n  'knit',\n  'known',\n  'laid',\n  'led',\n  'leapt',\n  'learnt',\n  'left',\n  'lent',\n  'let',\n  'lain',\n  'lighted',\n  'lost',\n  'made',\n  'meant',\n  'met',\n  'misspelt',\n  'mistaken',\n  'mown',\n  'overcome',\n  'overdone',\n  'overtaken',\n  'overthrown',\n  'paid',\n  'pled',\n  'proven',\n  'put',\n  'quit',\n  'read',\n  'rid',\n  'ridden',\n  'rung',\n  'risen',\n  'run',\n  'sawn',\n  'said',\n  'seen',\n  'sought',\n  'sold',\n  'sent',\n  'set',\n  'sewn',\n  'shaken',\n  'shaven',\n  'shorn',\n  'shed',\n  'shone',\n  'shod',\n  'shot',\n  'shown',\n  'shrunk',\n  'shut',\n  'sung',\n  'sunk',\n  'sat',\n  'slept',\n  'slain',\n  'slid',\n  'slung',\n  'slit',\n  'smitten',\n  'sown',\n  'spoken',\n  'sped',\n  'spent',\n  'spilt',\n  'spun',\n  'spit',\n  'split',\n  'spread',\n  'sprung',\n  'stood',\n  'stolen',\n  'stuck',\n  'stung',\n  'stunk',\n  'stridden',\n  'struck',\n  'strung',\n  'striven',\n  'sworn',\n  'swept',\n  'swollen',\n  'swum',\n  'swung',\n  'taken',\n  'taught',\n  'torn',\n  'told',\n  'thought',\n  'thrived',\n  'thrown',\n  'thrust',\n  'trodden',\n  'understood',\n  'upheld',\n  'upset',\n  'woken',\n  'worn',\n  'woven',\n  'wed',\n  'wept',\n  'wound',\n  'won',\n  'withheld',\n  'withstood',\n  'wrung',\n  'written'\n];\n\nvar exceptions = [\n  'indeed',\n];\n\nvar re = new RegExp('\\\\b(am|are|were|being|is|been|was|be)\\\\b\\\\s*([\\\\w]+ed|' + irregulars.join('|') + ')\\\\b', 'gi');\nvar byRe; // lazly construct\n\nmodule.exports = function (text, options) {\n  var r = (options && options.by) ?\n          (byRe || constructByRe()) : re; // not sorry\n\n  var suggestions = [];\n  while (match = r.exec(text)) {\n    if (exceptions.indexOf(match[2].toLowerCase()) === -1) {\n      suggestions.push({\n        index: match.index,\n        offset: match[0].length\n      });\n    }\n  }\n  return suggestions;\n}\n\n// lol\nfunction constructByRe () {\n  return byRe = new RegExp(re.toString().slice(1, -3) + '\\\\s*by\\\\b', 'gi');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFzc2l2ZS12b2ljZS9wYXNzaXZlLmpzP2ZmNGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Bhc3NpdmUtdm9pY2UvcGFzc2l2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpcnJlZ3VsYXJzID0gW1xuICAnYXdva2VuJyxcbiAgJ2JlZW4nLFxuICAnYm9ybicsXG4gICdiZWF0JyxcbiAgJ2JlY29tZScsXG4gICdiZWd1bicsXG4gICdiZW50JyxcbiAgJ2Jlc2V0JyxcbiAgJ2JldCcsXG4gICdiaWQnLFxuICAnYmlkZGVuJyxcbiAgJ2JvdW5kJyxcbiAgJ2JpdHRlbicsXG4gICdibGVkJyxcbiAgJ2Jsb3duJyxcbiAgJ2Jyb2tlbicsXG4gICdicmVkJyxcbiAgJ2Jyb3VnaHQnLFxuICAnYnJvYWRjYXN0JyxcbiAgJ2J1aWx0JyxcbiAgJ2J1cm50JyxcbiAgJ2J1cnN0JyxcbiAgJ2JvdWdodCcsXG4gICdjYXN0JyxcbiAgJ2NhdWdodCcsXG4gICdjaG9zZW4nLFxuICAnY2x1bmcnLFxuICAnY29tZScsXG4gICdjb3N0JyxcbiAgJ2NyZXB0JyxcbiAgJ2N1dCcsXG4gICdkZWFsdCcsXG4gICdkdWcnLFxuICAnZGl2ZWQnLFxuICAnZG9uZScsXG4gICdkcmF3bicsXG4gICdkcmVhbXQnLFxuICAnZHJpdmVuJyxcbiAgJ2RydW5rJyxcbiAgJ2VhdGVuJyxcbiAgJ2ZhbGxlbicsXG4gICdmZWQnLFxuICAnZmVsdCcsXG4gICdmb3VnaHQnLFxuICAnZm91bmQnLFxuICAnZml0JyxcbiAgJ2ZsZWQnLFxuICAnZmx1bmcnLFxuICAnZmxvd24nLFxuICAnZm9yYmlkZGVuJyxcbiAgJ2ZvcmdvdHRlbicsXG4gICdmb3JlZ29uZScsXG4gICdmb3JnaXZlbicsXG4gICdmb3JzYWtlbicsXG4gICdmcm96ZW4nLFxuICAnZ290dGVuJyxcbiAgJ2dpdmVuJyxcbiAgJ2dvbmUnLFxuICAnZ3JvdW5kJyxcbiAgJ2dyb3duJyxcbiAgJ2h1bmcnLFxuICAnaGVhcmQnLFxuICAnaGlkZGVuJyxcbiAgJ2hpdCcsXG4gICdoZWxkJyxcbiAgJ2h1cnQnLFxuICAna2VwdCcsXG4gICdrbmVsdCcsXG4gICdrbml0JyxcbiAgJ2tub3duJyxcbiAgJ2xhaWQnLFxuICAnbGVkJyxcbiAgJ2xlYXB0JyxcbiAgJ2xlYXJudCcsXG4gICdsZWZ0JyxcbiAgJ2xlbnQnLFxuICAnbGV0JyxcbiAgJ2xhaW4nLFxuICAnbGlnaHRlZCcsXG4gICdsb3N0JyxcbiAgJ21hZGUnLFxuICAnbWVhbnQnLFxuICAnbWV0JyxcbiAgJ21pc3NwZWx0JyxcbiAgJ21pc3Rha2VuJyxcbiAgJ21vd24nLFxuICAnb3ZlcmNvbWUnLFxuICAnb3ZlcmRvbmUnLFxuICAnb3ZlcnRha2VuJyxcbiAgJ292ZXJ0aHJvd24nLFxuICAncGFpZCcsXG4gICdwbGVkJyxcbiAgJ3Byb3ZlbicsXG4gICdwdXQnLFxuICAncXVpdCcsXG4gICdyZWFkJyxcbiAgJ3JpZCcsXG4gICdyaWRkZW4nLFxuICAncnVuZycsXG4gICdyaXNlbicsXG4gICdydW4nLFxuICAnc2F3bicsXG4gICdzYWlkJyxcbiAgJ3NlZW4nLFxuICAnc291Z2h0JyxcbiAgJ3NvbGQnLFxuICAnc2VudCcsXG4gICdzZXQnLFxuICAnc2V3bicsXG4gICdzaGFrZW4nLFxuICAnc2hhdmVuJyxcbiAgJ3Nob3JuJyxcbiAgJ3NoZWQnLFxuICAnc2hvbmUnLFxuICAnc2hvZCcsXG4gICdzaG90JyxcbiAgJ3Nob3duJyxcbiAgJ3NocnVuaycsXG4gICdzaHV0JyxcbiAgJ3N1bmcnLFxuICAnc3VuaycsXG4gICdzYXQnLFxuICAnc2xlcHQnLFxuICAnc2xhaW4nLFxuICAnc2xpZCcsXG4gICdzbHVuZycsXG4gICdzbGl0JyxcbiAgJ3NtaXR0ZW4nLFxuICAnc293bicsXG4gICdzcG9rZW4nLFxuICAnc3BlZCcsXG4gICdzcGVudCcsXG4gICdzcGlsdCcsXG4gICdzcHVuJyxcbiAgJ3NwaXQnLFxuICAnc3BsaXQnLFxuICAnc3ByZWFkJyxcbiAgJ3NwcnVuZycsXG4gICdzdG9vZCcsXG4gICdzdG9sZW4nLFxuICAnc3R1Y2snLFxuICAnc3R1bmcnLFxuICAnc3R1bmsnLFxuICAnc3RyaWRkZW4nLFxuICAnc3RydWNrJyxcbiAgJ3N0cnVuZycsXG4gICdzdHJpdmVuJyxcbiAgJ3N3b3JuJyxcbiAgJ3N3ZXB0JyxcbiAgJ3N3b2xsZW4nLFxuICAnc3d1bScsXG4gICdzd3VuZycsXG4gICd0YWtlbicsXG4gICd0YXVnaHQnLFxuICAndG9ybicsXG4gICd0b2xkJyxcbiAgJ3Rob3VnaHQnLFxuICAndGhyaXZlZCcsXG4gICd0aHJvd24nLFxuICAndGhydXN0JyxcbiAgJ3Ryb2RkZW4nLFxuICAndW5kZXJzdG9vZCcsXG4gICd1cGhlbGQnLFxuICAndXBzZXQnLFxuICAnd29rZW4nLFxuICAnd29ybicsXG4gICd3b3ZlbicsXG4gICd3ZWQnLFxuICAnd2VwdCcsXG4gICd3b3VuZCcsXG4gICd3b24nLFxuICAnd2l0aGhlbGQnLFxuICAnd2l0aHN0b29kJyxcbiAgJ3dydW5nJyxcbiAgJ3dyaXR0ZW4nXG5dO1xuXG52YXIgZXhjZXB0aW9ucyA9IFtcbiAgJ2luZGVlZCcsXG5dO1xuXG52YXIgcmUgPSBuZXcgUmVnRXhwKCdcXFxcYihhbXxhcmV8d2VyZXxiZWluZ3xpc3xiZWVufHdhc3xiZSlcXFxcYlxcXFxzKihbXFxcXHddK2VkfCcgKyBpcnJlZ3VsYXJzLmpvaW4oJ3wnKSArICcpXFxcXGInLCAnZ2knKTtcbnZhciBieVJlOyAvLyBsYXpseSBjb25zdHJ1Y3RcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucykge1xuICB2YXIgciA9IChvcHRpb25zICYmIG9wdGlvbnMuYnkpID9cbiAgICAgICAgICAoYnlSZSB8fCBjb25zdHJ1Y3RCeVJlKCkpIDogcmU7IC8vIG5vdCBzb3JyeVxuXG4gIHZhciBzdWdnZXN0aW9ucyA9IFtdO1xuICB3aGlsZSAobWF0Y2ggPSByLmV4ZWModGV4dCkpIHtcbiAgICBpZiAoZXhjZXB0aW9ucy5pbmRleE9mKG1hdGNoWzJdLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgc3VnZ2VzdGlvbnMucHVzaCh7XG4gICAgICAgIGluZGV4OiBtYXRjaC5pbmRleCxcbiAgICAgICAgb2Zmc2V0OiBtYXRjaFswXS5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VnZ2VzdGlvbnM7XG59XG5cbi8vIGxvbFxuZnVuY3Rpb24gY29uc3RydWN0QnlSZSAoKSB7XG4gIHJldHVybiBieVJlID0gbmV3IFJlZ0V4cChyZS50b1N0cmluZygpLnNsaWNlKDEsIC0zKSArICdcXFxccypieVxcXFxiJywgJ2dpJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/passive-voice/passive.js\n");

/***/ }),

/***/ "./resources/js/passive-voice.js":
/*!***************************************!*\
  !*** ./resources/js/passive-voice.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var passive = __webpack_require__(/*! passive-voice */ \"./node_modules/passive-voice/passive.js\");\n\nvar passiveVoiceCheck = '';\n\nfunction getPassivePercentage() {\n  var passiveSentences = 0;\n  var sentencesArray = $.trim($($(\"#product-description\").summernote(\"code\")).text()).split(\".\");\n  sentencesArray.forEach(function () {\n    if (passive($(this).text()).length > 0) {\n      passiveSentences++;\n    }\n  });\n  return passiveSentences * sentencesArray.length / 100;\n}\n\nvar passivePercentage = getPassivePercentage();\n\nif ($('#readability-bad-collapsible').children('.seo-passive').length > 0) {\n  $('#readability-bad-collapsible').children('.seo-passive').remove();\n} else if ($('#readability-improve-collapsible').children('.seo-passive').length > 0) {\n  $('#readability-improve-collapsible').children('.seo-passive').remove();\n} else if ($('#readability-good-collapsible').children('.seo-passive').length > 0) {\n  $('#readability-good-collapsible').children('.seo-passive').remove();\n}\n\nif (passivePercentage < 10) {\n  passiveVoiceCheck = '<div class=\"seo-score seo-passive\"><span class=\"seo-score-icon good\"></span><span class=\"seo-score-text\">' + '<a href=\"https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it\" target=\"_blank\">Passive Voice</a>: You\\'re using enough active voice. That\\'s great!' + '</span></div>';\n  $('#readability-good-collapsible').append(passiveVoiceCheck);\n} else if (passivePercentage < 15) {\n  passiveVoiceCheck = '<div class=\"seo-score seo-passive\"><span class=\"seo-score-icon improve\"></span><span class=\"seo-score-text\">' + '<a href=\"https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it\" target=\"_blank\">Passive Voice</a>: ' + passivePercentage + ' of the sentences contain passive voice, which is more than the recommended maximum of 10%. ' + '<a href=\"https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it\" target=\"_blank\">Try to use their active counterparts.</a></span></div>';\n  $('#readability-improve-collapsible').append(passiveVoiceCheck);\n} else {\n  passiveVoiceCheck = '<div class=\"seo-score seo-passive\"><span class=\"seo-score-icon bad\"></span><span class=\"seo-score-text\">' + '<a href=\"https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it\" target=\"_blank\">Passive Voice</a>: ' + passivePercentage + ' of the sentences contain passive voice, which is more than the recommended maximum of 10%. ' + '<a href=\"https://yoast.com/the-passive-voice-what-is-it-and-how-to-avoid-it\" target=\"_blank\">Try to use their active counterparts.</a></span></div>';\n  $('#readability-bad-collapsible').append(passiveVoiceCheck);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFzc2l2ZS12b2ljZS5qcz8xNDU0Il0sIm5hbWVzIjpbInBhc3NpdmUiLCJyZXF1aXJlIiwicGFzc2l2ZVZvaWNlQ2hlY2siLCJnZXRQYXNzaXZlUGVyY2VudGFnZSIsInBhc3NpdmVTZW50ZW5jZXMiLCJzZW50ZW5jZXNBcnJheSIsIiQiLCJ0cmltIiwic3VtbWVybm90ZSIsInRleHQiLCJzcGxpdCIsImZvckVhY2giLCJsZW5ndGgiLCJwYXNzaXZlUGVyY2VudGFnZSIsImNoaWxkcmVuIiwicmVtb3ZlIiwiYXBwZW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsOERBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7O0FBRUEsU0FBU0Msb0JBQVQsR0FBZ0M7QUFDNUIsTUFBSUMsZ0JBQWdCLEdBQUcsQ0FBdkI7QUFDQSxNQUFJQyxjQUFjLEdBQUdDLENBQUMsQ0FBQ0MsSUFBRixDQUFPRCxDQUFDLENBQUNBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCRSxVQUExQixDQUFxQyxNQUFyQyxDQUFELENBQUQsQ0FBZ0RDLElBQWhELEVBQVAsRUFBK0RDLEtBQS9ELENBQXFFLEdBQXJFLENBQXJCO0FBRUFMLGdCQUFjLENBQUNNLE9BQWYsQ0FBdUIsWUFBWTtBQUMvQixRQUFJWCxPQUFPLENBQUNNLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUixFQUFELENBQVAsQ0FBd0JHLE1BQXhCLEdBQWlDLENBQXJDLEVBQXVDO0FBQ25DUixzQkFBZ0I7QUFDbkI7QUFDSixHQUpEO0FBS0EsU0FBUUEsZ0JBQWdCLEdBQUdDLGNBQWMsQ0FBQ08sTUFBbkMsR0FBNkMsR0FBcEQ7QUFDSDs7QUFFRCxJQUFJQyxpQkFBaUIsR0FBR1Ysb0JBQW9CLEVBQTVDOztBQUVBLElBQUlHLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDUSxRQUFsQyxDQUEyQyxjQUEzQyxFQUEyREYsTUFBM0QsR0FBb0UsQ0FBeEUsRUFBMEU7QUFDdEVOLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDUSxRQUFsQyxDQUEyQyxjQUEzQyxFQUEyREMsTUFBM0Q7QUFDSCxDQUZELE1BRU8sSUFBSVQsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NRLFFBQXRDLENBQStDLGNBQS9DLEVBQStERixNQUEvRCxHQUF3RSxDQUE1RSxFQUE4RTtBQUNqRk4sR0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NRLFFBQXRDLENBQStDLGNBQS9DLEVBQStEQyxNQUEvRDtBQUNILENBRk0sTUFFQSxJQUFJVCxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ1EsUUFBbkMsQ0FBNEMsY0FBNUMsRUFBNERGLE1BQTVELEdBQXFFLENBQXpFLEVBQTJFO0FBQzlFTixHQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ1EsUUFBbkMsQ0FBNEMsY0FBNUMsRUFBNERDLE1BQTVEO0FBQ0g7O0FBRUQsSUFBSUYsaUJBQWlCLEdBQUcsRUFBeEIsRUFBMkI7QUFDdkJYLG1CQUFpQixHQUFHLDhHQUNoQixtS0FEZ0IsR0FFaEIsZUFGSjtBQUdBSSxHQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ1UsTUFBbkMsQ0FBMENkLGlCQUExQztBQUNILENBTEQsTUFLTyxJQUFHVyxpQkFBaUIsR0FBRyxFQUF2QixFQUEyQjtBQUM5QlgsbUJBQWlCLEdBQUcsaUhBQ2hCLGtIQURnQixHQUNtR1csaUJBRG5HLEdBQ3FILDhGQURySCxHQUVoQixxSkFGSjtBQUdBUCxHQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ1UsTUFBdEMsQ0FBNkNkLGlCQUE3QztBQUNILENBTE0sTUFLQTtBQUNIQSxtQkFBaUIsR0FBRyw2R0FDaEIsa0hBRGdCLEdBQ21HVyxpQkFEbkcsR0FDcUgsOEZBRHJILEdBRWhCLHFKQUZKO0FBR0FQLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDVSxNQUFsQyxDQUF5Q2QsaUJBQXpDO0FBQ0giLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFzc2l2ZS12b2ljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBwYXNzaXZlID0gcmVxdWlyZSgncGFzc2l2ZS12b2ljZScpO1xubGV0IHBhc3NpdmVWb2ljZUNoZWNrID0gJyc7XG5cbmZ1bmN0aW9uIGdldFBhc3NpdmVQZXJjZW50YWdlKCkge1xuICAgIGxldCBwYXNzaXZlU2VudGVuY2VzID0gMDtcbiAgICBsZXQgc2VudGVuY2VzQXJyYXkgPSAkLnRyaW0oJCgkKFwiI3Byb2R1Y3QtZGVzY3JpcHRpb25cIikuc3VtbWVybm90ZShcImNvZGVcIikpLnRleHQoKSkuc3BsaXQoXCIuXCIpO1xuXG4gICAgc2VudGVuY2VzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChwYXNzaXZlKCQodGhpcykudGV4dCgpKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHBhc3NpdmVTZW50ZW5jZXMrKztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAocGFzc2l2ZVNlbnRlbmNlcyAqIHNlbnRlbmNlc0FycmF5Lmxlbmd0aCkgLyAxMDA7XG59XG5cbmxldCBwYXNzaXZlUGVyY2VudGFnZSA9IGdldFBhc3NpdmVQZXJjZW50YWdlKCk7XG5cbmlmICgkKCcjcmVhZGFiaWxpdHktYmFkLWNvbGxhcHNpYmxlJykuY2hpbGRyZW4oJy5zZW8tcGFzc2l2ZScpLmxlbmd0aCA+IDApe1xuICAgICQoJyNyZWFkYWJpbGl0eS1iYWQtY29sbGFwc2libGUnKS5jaGlsZHJlbignLnNlby1wYXNzaXZlJykucmVtb3ZlKCk7XG59IGVsc2UgaWYgKCQoJyNyZWFkYWJpbGl0eS1pbXByb3ZlLWNvbGxhcHNpYmxlJykuY2hpbGRyZW4oJy5zZW8tcGFzc2l2ZScpLmxlbmd0aCA+IDApe1xuICAgICQoJyNyZWFkYWJpbGl0eS1pbXByb3ZlLWNvbGxhcHNpYmxlJykuY2hpbGRyZW4oJy5zZW8tcGFzc2l2ZScpLnJlbW92ZSgpO1xufSBlbHNlIGlmICgkKCcjcmVhZGFiaWxpdHktZ29vZC1jb2xsYXBzaWJsZScpLmNoaWxkcmVuKCcuc2VvLXBhc3NpdmUnKS5sZW5ndGggPiAwKXtcbiAgICAkKCcjcmVhZGFiaWxpdHktZ29vZC1jb2xsYXBzaWJsZScpLmNoaWxkcmVuKCcuc2VvLXBhc3NpdmUnKS5yZW1vdmUoKTtcbn1cblxuaWYgKHBhc3NpdmVQZXJjZW50YWdlIDwgMTApe1xuICAgIHBhc3NpdmVWb2ljZUNoZWNrID0gJzxkaXYgY2xhc3M9XCJzZW8tc2NvcmUgc2VvLXBhc3NpdmVcIj48c3BhbiBjbGFzcz1cInNlby1zY29yZS1pY29uIGdvb2RcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzZW8tc2NvcmUtdGV4dFwiPicgK1xuICAgICAgICAnPGEgaHJlZj1cImh0dHBzOi8veW9hc3QuY29tL3RoZS1wYXNzaXZlLXZvaWNlLXdoYXQtaXMtaXQtYW5kLWhvdy10by1hdm9pZC1pdFwiIHRhcmdldD1cIl9ibGFua1wiPlBhc3NpdmUgVm9pY2U8L2E+OiBZb3VcXCdyZSB1c2luZyBlbm91Z2ggYWN0aXZlIHZvaWNlLiBUaGF0XFwncyBncmVhdCEnICtcbiAgICAgICAgJzwvc3Bhbj48L2Rpdj4nO1xuICAgICQoJyNyZWFkYWJpbGl0eS1nb29kLWNvbGxhcHNpYmxlJykuYXBwZW5kKHBhc3NpdmVWb2ljZUNoZWNrKTtcbn0gZWxzZSBpZihwYXNzaXZlUGVyY2VudGFnZSA8IDE1KSB7XG4gICAgcGFzc2l2ZVZvaWNlQ2hlY2sgPSAnPGRpdiBjbGFzcz1cInNlby1zY29yZSBzZW8tcGFzc2l2ZVwiPjxzcGFuIGNsYXNzPVwic2VvLXNjb3JlLWljb24gaW1wcm92ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNlby1zY29yZS10ZXh0XCI+JyArXG4gICAgICAgICc8YSBocmVmPVwiaHR0cHM6Ly95b2FzdC5jb20vdGhlLXBhc3NpdmUtdm9pY2Utd2hhdC1pcy1pdC1hbmQtaG93LXRvLWF2b2lkLWl0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+UGFzc2l2ZSBWb2ljZTwvYT46ICcrcGFzc2l2ZVBlcmNlbnRhZ2UrJyBvZiB0aGUgc2VudGVuY2VzIGNvbnRhaW4gcGFzc2l2ZSB2b2ljZSwgd2hpY2ggaXMgbW9yZSB0aGFuIHRoZSByZWNvbW1lbmRlZCBtYXhpbXVtIG9mIDEwJS4gJyArXG4gICAgICAgICc8YSBocmVmPVwiaHR0cHM6Ly95b2FzdC5jb20vdGhlLXBhc3NpdmUtdm9pY2Utd2hhdC1pcy1pdC1hbmQtaG93LXRvLWF2b2lkLWl0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VHJ5IHRvIHVzZSB0aGVpciBhY3RpdmUgY291bnRlcnBhcnRzLjwvYT48L3NwYW4+PC9kaXY+JztcbiAgICAkKCcjcmVhZGFiaWxpdHktaW1wcm92ZS1jb2xsYXBzaWJsZScpLmFwcGVuZChwYXNzaXZlVm9pY2VDaGVjayk7XG59IGVsc2Uge1xuICAgIHBhc3NpdmVWb2ljZUNoZWNrID0gJzxkaXYgY2xhc3M9XCJzZW8tc2NvcmUgc2VvLXBhc3NpdmVcIj48c3BhbiBjbGFzcz1cInNlby1zY29yZS1pY29uIGJhZFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNlby1zY29yZS10ZXh0XCI+JyArXG4gICAgICAgICc8YSBocmVmPVwiaHR0cHM6Ly95b2FzdC5jb20vdGhlLXBhc3NpdmUtdm9pY2Utd2hhdC1pcy1pdC1hbmQtaG93LXRvLWF2b2lkLWl0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+UGFzc2l2ZSBWb2ljZTwvYT46ICcrcGFzc2l2ZVBlcmNlbnRhZ2UrJyBvZiB0aGUgc2VudGVuY2VzIGNvbnRhaW4gcGFzc2l2ZSB2b2ljZSwgd2hpY2ggaXMgbW9yZSB0aGFuIHRoZSByZWNvbW1lbmRlZCBtYXhpbXVtIG9mIDEwJS4gJyArXG4gICAgICAgICc8YSBocmVmPVwiaHR0cHM6Ly95b2FzdC5jb20vdGhlLXBhc3NpdmUtdm9pY2Utd2hhdC1pcy1pdC1hbmQtaG93LXRvLWF2b2lkLWl0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VHJ5IHRvIHVzZSB0aGVpciBhY3RpdmUgY291bnRlcnBhcnRzLjwvYT48L3NwYW4+PC9kaXY+JztcbiAgICAkKCcjcmVhZGFiaWxpdHktYmFkLWNvbGxhcHNpYmxlJykuYXBwZW5kKHBhc3NpdmVWb2ljZUNoZWNrKTtcbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/passive-voice.js\n");

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi ./resources/js/passive-voice.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alexander\Documents\codes\shopify_sandbox\sandbox_shopify\resources\js\passive-voice.js */"./resources/js/passive-voice.js");


/***/ })

/******/ });