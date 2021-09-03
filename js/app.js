/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/calendar.js":
/*!*********************************!*\
  !*** ./src/modules/calendar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calendar)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _selCurDay_Day = /*#__PURE__*/new WeakMap();

var _selCurDay_DayOfWeek = /*#__PURE__*/new WeakMap();

var _selCurDay_Month = /*#__PURE__*/new WeakMap();

var _selCurDay_Year = /*#__PURE__*/new WeakMap();

var _selCal_Year = /*#__PURE__*/new WeakMap();

var _selCal_Month = /*#__PURE__*/new WeakMap();

var _selCalendarGrid = /*#__PURE__*/new WeakMap();

var _selButtonPrevMonth = /*#__PURE__*/new WeakMap();

var _selButtonNextMonth = /*#__PURE__*/new WeakMap();

var _selCalendarCell = /*#__PURE__*/new WeakMap();

var _selLastCellClicked = /*#__PURE__*/new WeakMap();

var _data = /*#__PURE__*/new WeakMap();

var Calendar = /*#__PURE__*/function () {
  function Calendar() {
    _classCallCheck(this, Calendar);

    _selCurDay_Day.set(this, {
      writable: true,
      value: document.getElementById('cur-day')
    });

    _selCurDay_DayOfWeek.set(this, {
      writable: true,
      value: document.getElementById('cur-day-week')
    });

    _selCurDay_Month.set(this, {
      writable: true,
      value: document.getElementById('cur-month')
    });

    _selCurDay_Year.set(this, {
      writable: true,
      value: document.getElementById('cur-year')
    });

    _selCal_Year.set(this, {
      writable: true,
      value: document.querySelector('.calendar__year')
    });

    _selCal_Month.set(this, {
      writable: true,
      value: document.querySelector('.calendar__month')
    });

    _selCalendarGrid.set(this, {
      writable: true,
      value: document.querySelector('.calendar__table')
    });

    _selButtonPrevMonth.set(this, {
      writable: true,
      value: document.querySelector('.calendar__prev-month')
    });

    _selButtonNextMonth.set(this, {
      writable: true,
      value: document.querySelector('.calendar__next-month')
    });

    _selCalendarCell.set(this, {
      writable: true,
      value: void 0
    });

    _selLastCellClicked.set(this, {
      writable: true,
      value: void 0
    });

    _data.set(this, {
      writable: true,
      value: {
        current_day: {},
        calendar: {},
        calendar_date: null,
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      }
    });

    var hoje = new Date();
    _classPrivateFieldGet(this, _data).current_day = {
      day: hoje.getDate(),
      day_off_week: hoje.getDay(),
      month: hoje.getMonth(),
      year: hoje.getFullYear()
    }; // this.#data.calendar = {
    //   month: hoje.getMonth(),
    //   year: hoje.getFullYear()
    // }

    _classPrivateFieldGet(this, _data).calendar_date = hoje;
    this.renderCalendar();
    this.renderCurrentDay();
    this.events();
  }

  _createClass(Calendar, [{
    key: "events",
    value: function events() {
      _classPrivateFieldGet(this, _selButtonPrevMonth).addEventListener('click', this.previousMonth.bind(this));

      _classPrivateFieldGet(this, _selButtonNextMonth).addEventListener('click', this.nextMonth.bind(this));
    }
  }, {
    key: "calendarCellEvents",
    value: function calendarCellEvents() {
      var _this = this;

      _classPrivateFieldSet(this, _selCalendarCell, document.querySelectorAll('.calendar__number'));

      _classPrivateFieldGet(this, _selCalendarCell).forEach(function (el) {
        return el.addEventListener('click', _this.onCellClick.bind(_this));
      });
    }
  }, {
    key: "calendarDate",
    get: function get() {
      return _classPrivateFieldGet(this, _data).calendar_date;
    },
    set: function set(newDate) {
      if (newDate) {
        _classPrivateFieldGet(this, _data).calendar_date = newDate;
        this.renderCalendar();
      }
    }
  }, {
    key: "lastCellClicked",
    get: function get() {
      return _classPrivateFieldGet(this, _selLastCellClicked);
    },
    set: function set(newElem) {
      if (newElem) {
        _classPrivateFieldSet(this, _selLastCellClicked, newElem);
      }
    }
  }, {
    key: "onCellClick",
    value: function onCellClick(evt) {
      if (this.lastCellClicked && this.lastCellClicked.classList.contains('calendar__number--selected') && this.lastCellClicked !== evt.target) {
        this.lastCellClicked.classList.remove('calendar__number--selected');
      }

      this.lastCellClicked = evt.target;
      evt.target.classList.toggle('calendar__number--selected');
    }
  }, {
    key: "previousMonth",
    value: function previousMonth() {
      var prevMonth = this.calendarDate.getMonth() - 1;
      var year = this.calendarDate.getFullYear();
      this.calendarDate = new Date(year, prevMonth, 1);
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      var nextMonth = this.calendarDate.getMonth() + 1;
      var year = this.calendarDate.getFullYear();
      this.calendarDate = new Date(year, nextMonth, 1);
    }
  }, {
    key: "getDay",
    value: function getDay() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _classPrivateFieldGet(this, _data).current_day.day;

      switch (n) {
        case 1:
        case 21:
        case 31:
          return n + '<sup>st</sup>';

        case 2:
        case 22:
          return n + '<sup>nd</sup>';

        case 3:
        case 23:
          return n + '<sup>rd</sup>';

        default:
          return n + '<sup>th</sup>';
      }
    }
  }, {
    key: "getDayOffWeek",
    value: function getDayOffWeek() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _classPrivateFieldGet(this, _data).current_day.day_off_week;
      return _classPrivateFieldGet(this, _data).weekdays[n];
    }
  }, {
    key: "getMonth",
    value: function getMonth() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _classPrivateFieldGet(this, _data).current_day.month;
      return _classPrivateFieldGet(this, _data).months[n];
    }
  }, {
    key: "getYear",
    value: function getYear() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _classPrivateFieldGet(this, _data).current_day.year;
      return n;
    }
  }, {
    key: "renderCalendar",
    value: function renderCalendar() {
      // Set calendar date as first day o month
      //this.#data.calendar_date = new Date(2021, 9, 1)
      _classPrivateFieldGet(this, _data).calendar_date.setDate(1);

      var firstDayOfMonthWeekIndex = _classPrivateFieldGet(this, _data).calendar_date.getDay();

      var lastDayOfMonth = new Date(_classPrivateFieldGet(this, _data).calendar_date.getFullYear(), _classPrivateFieldGet(this, _data).calendar_date.getMonth() + 1, 0);
      var lastDayOfMonthWeekIndex = lastDayOfMonth.getDay();
      lastDayOfMonth = lastDayOfMonth.getDate();
      var previousMonthLastDay = new Date(_classPrivateFieldGet(this, _data).calendar_date.getFullYear(), _classPrivateFieldGet(this, _data).calendar_date.getMonth(), 0).getDate();
      var nextMonthDaysToShow = 7 - lastDayOfMonthWeekIndex - 1;
      _classPrivateFieldGet(this, _data).calendar = {
        month: _classPrivateFieldGet(this, _data).calendar_date.getMonth(),
        year: _classPrivateFieldGet(this, _data).calendar_date.getFullYear()
      };
      this.renderCalendarHeader();
      document.querySelectorAll('.calendar__number').forEach(function (el) {
        return el.remove();
      });
      this.renderCalendarPreviousMonthDays(firstDayOfMonthWeekIndex, previousMonthLastDay);
      this.renderCalendarMonthDays(lastDayOfMonth);
      this.renderNextMonthDays(nextMonthDaysToShow); //this.#selCalendarCell = Array.from[document.querySelectorAll('.calendar__number')]

      this.calendarCellEvents();
    }
  }, {
    key: "renderNextMonthDays",
    value: function renderNextMonthDays(numberOfDays) {
      var days = '';

      for (var j = 1; j <= numberOfDays; j++) {
        days += "<div class=\"calendar__number calendar__number--off\"><div class=\"calendar__day-number\">".concat(j, "</div></div>");
      }

      _classPrivateFieldGet(this, _selCalendarGrid).insertAdjacentHTML('beforeend', days);
    }
  }, {
    key: "renderCalendarMonthDays",
    value: function renderCalendarMonthDays(numberOfDays) {
      var days = '';

      for (var i = 1; i <= numberOfDays; i++) {
        if (i === new Date().getDate() && _classPrivateFieldGet(this, _data).calendar_date.getMonth() === new Date().getMonth()) {
          days += "<div class=\"calendar__number calendar__number--active\"><div class=\"calendar__day-number\">".concat(i, "</div></div>");
        } else {
          days += "<div class=\"calendar__number\"><div class=\"calendar__day-number\">".concat(i, "</div></div>");
        }
      }

      _classPrivateFieldGet(this, _selCalendarGrid).insertAdjacentHTML('beforeend', days);
    }
  }, {
    key: "renderCalendarPreviousMonthDays",
    value: function renderCalendarPreviousMonthDays(firstDayIndex, lastDay) {
      var days = '';

      for (var x = firstDayIndex; x > 0; x--) {
        days += "<div class=\"calendar__number calendar__number--off\"><div class=\"calendar__day-number\">".concat(lastDay - x + 1, "</div></div>");
      }

      _classPrivateFieldGet(this, _selCalendarGrid).insertAdjacentHTML('beforeend', days);
    }
  }, {
    key: "renderCurrentDay",
    value: function renderCurrentDay() {
      _classPrivateFieldGet(this, _selCurDay_DayOfWeek).innerHTML = this.getDayOffWeek();
      _classPrivateFieldGet(this, _selCurDay_Day).innerHTML = this.getDay();
      _classPrivateFieldGet(this, _selCurDay_Month).innerHTML = this.getMonth();
      _classPrivateFieldGet(this, _selCurDay_Year).innerHTML = this.getYear();
    }
  }, {
    key: "renderCalendarHeader",
    value: function renderCalendarHeader() {
      var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _classPrivateFieldGet(this, _data).calendar.year;
      var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _classPrivateFieldGet(this, _data).calendar.month;
      _classPrivateFieldGet(this, _selCal_Year).innerHTML = year;
      _classPrivateFieldGet(this, _selCal_Month).innerHTML = this.getMonth(month);
    }
  }]);

  return Calendar;
}(); //module.exports = Calendar




/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _currentModal = /*#__PURE__*/new WeakMap();

var _selModal = /*#__PURE__*/new WeakMap();

var _selPopUp = /*#__PURE__*/new WeakMap();

var _selDialogButtons = /*#__PURE__*/new WeakMap();

var _cssClassFadeIn = /*#__PURE__*/new WeakMap();

var _cssClassFadeOut = /*#__PURE__*/new WeakMap();

var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);

    _currentModal.set(this, {
      writable: true,
      value: Modal.MODAL_TYPE.COLOR
    });

    _selModal.set(this, {
      writable: true,
      value: document.querySelector('.dialog')
    });

    _selPopUp.set(this, {
      writable: true,
      value: document.querySelector('.dialog__popup')
    });

    _selDialogButtons.set(this, {
      writable: true,
      value: document.querySelectorAll('.dialog button')
    });

    _cssClassFadeIn.set(this, {
      writable: true,
      value: 'dialog--fade-in'
    });

    _cssClassFadeOut.set(this, {
      writable: true,
      value: 'dialog--fade-out'
    });

    this.events();
  }

  _createClass(Modal, [{
    key: "events",
    value: function events() {
      var _this = this;

      _classPrivateFieldGet(this, _selModal).addEventListener('animationend', this.toggleModal.bind(this));

      _classPrivateFieldGet(this, _selPopUp).addEventListener('animationend', this.dialogFadeOutAndClose.bind(this));

      _classPrivateFieldGet(this, _selDialogButtons).forEach(function (el) {
        return el.addEventListener('click', _this.closeModal.bind(_this));
      });
    }
    /**
     * Animation end event listeners
     */
    // After this.closeModal() triggers popup clode animation

  }, {
    key: "dialogFadeOutAndClose",
    value: function dialogFadeOutAndClose(evt) {
      // avoid parent container (.dialog element overlay)
      // to receive this event
      evt.stopPropagation(); // listen only for close animation end not '--open' animation

      if (_classPrivateFieldGet(this, _selPopUp).classList.contains('dialog__popup--close')) {
        _classPrivateFieldGet(this, _selModal).classList.add(_classPrivateFieldGet(this, _cssClassFadeOut));
      }
    }
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      // waits for end of .dialog overlay element animations
      if (_classPrivateFieldGet(this, _selModal).classList.contains(_classPrivateFieldGet(this, _cssClassFadeIn))) {
        _classPrivateFieldGet(this, _selPopUp).classList.add('dialog__popup--open');

        _classPrivateFieldGet(this, _selModal).classList.remove(_classPrivateFieldGet(this, _cssClassFadeIn)); // set current popup property


        switch (_classPrivateFieldGet(this, _currentModal)) {
          case Modal.MODAL_TYPE.COLOR:
            Modal.MODAL_TYPE.COLOR.removeAttribute('hidden');
            break;

          case Modal.MODAL_TYPE.EDITOR:
            Modal.MODAL_TYPE.EDITOR.removeAttribute('hidden');
            break;
        }
      } // close animation


      if (_classPrivateFieldGet(this, _selModal).classList.contains(_classPrivateFieldGet(this, _cssClassFadeOut))) {
        // remove all animations
        _classPrivateFieldGet(this, _selModal).classList.remove(_classPrivateFieldGet(this, _cssClassFadeOut));

        _classPrivateFieldGet(this, _selPopUp).classList.remove('dialog__popup--open', 'dialog__popup--close');

        _classPrivateFieldGet(this, _currentModal).setAttribute('hidden', 'hidden');

        _classPrivateFieldGet(this, _selModal).open = false;
      }
    }
  }, {
    key: "openModal",
    value: function openModal(type) {
      _classPrivateFieldGet(this, _selModal).open = true;

      _classPrivateFieldGet(this, _selModal).classList.add(_classPrivateFieldGet(this, _cssClassFadeIn));

      switch (type) {
        case Modal.MODAL_TYPE.COLOR:
          _classPrivateFieldSet(this, _currentModal, Modal.MODAL_TYPE.COLOR);

          break;

        case Modal.MODAL_TYPE.EDITOR:
          _classPrivateFieldSet(this, _currentModal, Modal.MODAL_TYPE.EDITOR);

          break;
      }
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      _classPrivateFieldGet(this, _selPopUp).classList.add('dialog__popup--close');
    }
  }]);

  return Modal;
}();

_defineProperty(Modal, "MODAL_TYPE", {
  'COLOR': document.querySelector('.color-chooser'),
  'EDITOR': document.querySelector('.note-editor')
});

module.exports = Modal;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calendar */ "./src/modules/calendar.js");


var Modal = __webpack_require__(/*! ./modules/modal */ "./src/modules/modal.js");

new _modules_calendar__WEBPACK_IMPORTED_MODULE_0__.default(); //.calendarDate = new Date(2023, 6, 1)

var modalObj = new Modal();
modalObj.openModal(Modal.MODAL_TYPE.COLOR);
})();

/******/ })()
;
//# sourceMappingURL=app.js.map