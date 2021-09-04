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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    _defineProperty(this, "enableKeyboardNavigation", true);

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

      document.addEventListener('keydown', this.keyboardNavigation.bind(this));
    }
  }, {
    key: "keyboardNavigation",
    value: function keyboardNavigation(evt) {
      if (this.enableKeyboardNavigation) {
        switch (evt.keyCode) {
          case 37:
            this.previousMonth();
            break;

          case 39:
            this.nextMonth();
            break;
        }
      }
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
    key: "calendarDaysNodeList",
    get: function get() {
      return Array.from(document.querySelectorAll('.calendar__number:not(.calendar__number--off)'));
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
        var dataUID = new Date(_classPrivateFieldGet(this, _data).calendar_date.getFullYear(), _classPrivateFieldGet(this, _data).calendar_date.getMonth(), i).toLocaleDateString();

        if (i === new Date().getDate() && _classPrivateFieldGet(this, _data).calendar_date.getMonth() === new Date().getMonth()) {
          days += "<div data-uid=\"".concat(dataUID, "\" class=\"calendar__number calendar__number--active\"><div class=\"calendar__day-number\">").concat(i, "</div></div>");
        } else {
          days += "<div data-uid=\"".concat(dataUID, "\" class=\"calendar__number\"><div class=\"calendar__day-number\">").concat(i, "</div></div>");
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

/***/ "./src/modules/color-chooser.js":
/*!**************************************!*\
  !*** ./src/modules/color-chooser.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorChooser)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _selButtonUpdate = /*#__PURE__*/new WeakMap();

var _themeColors = /*#__PURE__*/new WeakMap();

var _dialogObject = /*#__PURE__*/new WeakMap();

var _currentThemeColor = /*#__PURE__*/new WeakMap();

var _selColorOptions = /*#__PURE__*/new WeakMap();

var _previousColorSelection = /*#__PURE__*/new WeakMap();

//import Modal from "./modal"
var ColorChooser = /*#__PURE__*/function () {
  function ColorChooser(dialogObj) {
    _classCallCheck(this, ColorChooser);

    _selButtonUpdate.set(this, {
      writable: true,
      value: document.querySelector('.color-chooser .btn')
    });

    _themeColors.set(this, {
      writable: true,
      value: new Map([['blue', {
        color: '#1B19CD',
        off_color: '#7C7EFB'
      }], ['red', {
        color: '#D01212',
        off_color: '#EEA19B'
      }], ['purple', {
        color: '#721D89',
        off_color: '#EBADFB'
      }], ['green', {
        color: '#158348',
        off_color: '#57C664'
      }], ['orange', {
        color: '#EE742D',
        off_color: '#F7A77A'
      }], ['deep-orange', {
        color: '#F13C26',
        off_color: '#F77D59'
      }], ['baby-blue', {
        color: '#31B2FC',
        off_color: '#3D8DD9'
      }], ['cerise', {
        color: '#EA3D69',
        off_color: '#FCBECC'
      }], ['lime', {
        color: '#2ACC32',
        off_color: '#4FFA4F'
      }], ['teal', {
        color: '#2FCCB9',
        off_color: '#7FE7E3'
      }], ['pink', {
        color: '#F50D7A',
        off_color: '#FFB9EA'
      }], ['black', {
        color: '#212524',
        off_color: '#687E7B'
      }]])
    });

    _dialogObject.set(this, {
      writable: true,
      value: void 0
    });

    _currentThemeColor.set(this, {
      writable: true,
      value: void 0
    });

    _selColorOptions.set(this, {
      writable: true,
      value: document.querySelectorAll('.color-chooser__color-preview')
    });

    _previousColorSelection.set(this, {
      writable: true,
      value: void 0
    });

    var colors = Array.from(_classPrivateFieldGet(this, _themeColors).keys());

    _classPrivateFieldSet(this, _currentThemeColor, colors[Math.floor(Math.random() * colors.length)]);

    _classPrivateFieldSet(this, _dialogObject, dialogObj);

    _classPrivateFieldGet(this, _selColorOptions).forEach(function (el) {
      return el.parentElement.classList.remove('color-chooser__color-option--selected');
    });

    this.events();
  }

  _createClass(ColorChooser, [{
    key: "start",
    value: function start() {
      _classPrivateFieldGet(this, _dialogObject).openModal();
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      _classPrivateFieldGet(this, _selButtonUpdate).addEventListener('click', this.onUpdateClick.bind(this));

      _classPrivateFieldGet(this, _selColorOptions).forEach(function (el) {
        return el.addEventListener('click', _this.onColorSelected.bind(_this));
      });
    }
  }, {
    key: "onColorSelected",
    value: function onColorSelected(evt) {
      if (_classPrivateFieldGet(this, _previousColorSelection)) _classPrivateFieldGet(this, _previousColorSelection).classList.remove('color-chooser__color-option--selected');

      _classPrivateFieldSet(this, _previousColorSelection, evt.target.parentElement);

      _classPrivateFieldSet(this, _currentThemeColor, evt.target.dataset.selectedColor);

      evt.target.parentElement.classList.add('color-chooser__color-option--selected');
    }
  }, {
    key: "onUpdateClick",
    value: function onUpdateClick() {
      this.updateColor();

      _classPrivateFieldGet(this, _dialogObject).closeModal();
    }
  }, {
    key: "updateColor",
    value: function updateColor() {
      var colorPicked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _classPrivateFieldGet(this, _currentThemeColor);
      document.querySelector(':root').style.setProperty('--primary-color', _classPrivateFieldGet(this, _themeColors).get(colorPicked).color);
      document.querySelector(':root').style.setProperty('--off-color', _classPrivateFieldGet(this, _themeColors).get(colorPicked).off_color);
    }
  }, {
    key: "dialog",
    get: function get() {
      return _classPrivateFieldGet(this, _dialogObject);
    }
  }]);

  return ColorChooser;
}();



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

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _currentModal = /*#__PURE__*/new WeakMap();

var _selModal = /*#__PURE__*/new WeakMap();

var _selPopUp = /*#__PURE__*/new WeakMap();

var _selDialogButtons = /*#__PURE__*/new WeakMap();

var _cssClassFadeIn = /*#__PURE__*/new WeakMap();

var _cssClassFadeOut = /*#__PURE__*/new WeakMap();

var _calendar = /*#__PURE__*/new WeakMap();

var Modal = /*#__PURE__*/function () {
  // = Modal.MODAL_TYPE.COLOR
  function Modal(modalType, calendarObj) {
    _classCallCheck(this, Modal);

    _currentModal.set(this, {
      writable: true,
      value: 'xxuuuu'
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

    _calendar.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _currentModal, modalType);

    if (calendarObj) _classPrivateFieldSet(this, _calendar, calendarObj); //this.events()
  }

  _createClass(Modal, [{
    key: "events",
    value: function events() {
      var _this = this;

      _classPrivateFieldGet(this, _selDialogButtons).forEach(function (el) {
        return el.addEventListener('click', _this.closeModal.bind(_this));
      });
    }
  }, {
    key: "attachAnimationEvents",
    value: function attachAnimationEvents() {
      _classPrivateFieldGet(this, _selModal).addEventListener('animationend', this.toggleModal.bind(this));

      _classPrivateFieldGet(this, _selPopUp).addEventListener('animationend', this.dialogFadeOutAndClose.bind(this));
    }
  }, {
    key: "dettachAnimationEvents",
    value: function dettachAnimationEvents() {
      _classPrivateFieldGet(this, _selModal).removeEventListener('animationend', this.toggleModal.bind(this));

      _classPrivateFieldGet(this, _selPopUp).removeEventListener('animationend', this.dialogFadeOutAndClose.bind(this));
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
    key: "modalType",
    get: function get() {
      switch (_classPrivateFieldGet(this, _currentModal)) {
        case Modal.MODAL_TYPE.COLOR:
          return 'COLOR CHOOSE MODAL';

        case Modal.MODAL_TYPE.EDITOR:
          return 'EDITOR MODAL';
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
    value: function openModal() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _classPrivateFieldGet(this, _currentModal);
      _classPrivateFieldGet(this, _selModal).open = true;

      switch (type) {
        case Modal.MODAL_TYPE.COLOR:
          _classPrivateFieldSet(this, _currentModal, Modal.MODAL_TYPE.COLOR);

          break;

        case Modal.MODAL_TYPE.EDITOR:
          _classPrivateFieldSet(this, _currentModal, Modal.MODAL_TYPE.EDITOR);

          break;
      }

      _classPrivateFieldGet(this, _selModal).classList.add(_classPrivateFieldGet(this, _cssClassFadeIn)); // Attach animation events here to avoid objects
      // which openModal was not called to appear. If handler is placed in constructor,
      // even objects that were not ordered to open will open


      this.attachAnimationEvents();
      if (_classPrivateFieldGet(this, _calendar)) _classPrivateFieldGet(this, _calendar).enableKeyboardNavigation = false;
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      _classPrivateFieldGet(this, _selPopUp).classList.add('dialog__popup--close');

      this.dettachAnimationEvents();
      if (_classPrivateFieldGet(this, _calendar)) _classPrivateFieldGet(this, _calendar).enableKeyboardNavigation = true;
    }
  }]);

  return Modal;
}();

_defineProperty(Modal, "MODAL_TYPE", {
  'COLOR': document.querySelector('.color-chooser'),
  'EDITOR': document.querySelector('.note-editor')
});

module.exports = Modal;

/***/ }),

/***/ "./src/modules/note-editor.js":
/*!************************************!*\
  !*** ./src/modules/note-editor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteEditor)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _calendarObject = /*#__PURE__*/new WeakMap();

var _dialogObject = /*#__PURE__*/new WeakMap();

var _selButtonPost = /*#__PURE__*/new WeakMap();

var _selButtonDelete = /*#__PURE__*/new WeakMap();

var NoteEditor = /*#__PURE__*/function () {
  function NoteEditor(dialogObj, calendarObj) {
    _classCallCheck(this, NoteEditor);

    _calendarObject.set(this, {
      writable: true,
      value: void 0
    });

    _dialogObject.set(this, {
      writable: true,
      value: void 0
    });

    _selButtonPost.set(this, {
      writable: true,
      value: document.querySelector('.note-editor .btn--black')
    });

    _selButtonDelete.set(this, {
      writable: true,
      value: document.querySelector('.note-editor .btn--danger')
    });

    if (dialogObj) _classPrivateFieldSet(this, _dialogObject, dialogObj);
    if (calendarObj) _classPrivateFieldSet(this, _calendarObject, calendarObj);
    this.events();
  }

  _createClass(NoteEditor, [{
    key: "events",
    value: function events() {
      var _this = this;

      _classPrivateFieldGet(this, _calendarObject).calendarDaysNodeList.forEach(function (el) {
        return el.addEventListener('click', _this.onDayClick.bind(_this));
      });

      _classPrivateFieldGet(this, _selButtonPost).addEventListener('click', this.onPostClick.bind(this));

      _classPrivateFieldGet(this, _selButtonDelete).addEventListener('click', this.onDeleteClick.bind(this));
    }
  }, {
    key: "onDayClick",
    value: function onDayClick(evt) {
      console.log(evt.target.dataset.uid);

      _classPrivateFieldGet(this, _dialogObject).openModal();
    }
  }, {
    key: "onPostClick",
    value: function onPostClick() {
      _classPrivateFieldGet(this, _dialogObject).closeModal();
    }
  }, {
    key: "onDeleteClick",
    value: function onDeleteClick() {
      _classPrivateFieldGet(this, _dialogObject).closeModal();
    }
  }]);

  return NoteEditor;
}();



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
/* harmony import */ var _modules_color_chooser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/color-chooser */ "./src/modules/color-chooser.js");
/* harmony import */ var _modules_note_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/note-editor */ "./src/modules/note-editor.js");




var Modal = __webpack_require__(/*! ./modules/modal */ "./src/modules/modal.js");
/**
 * Start a new Calendar object
 */


var calendar = new _modules_calendar__WEBPACK_IMPORTED_MODULE_0__.default(); //.calendarDate = new Date(2023, 6, 1)

/**
 * Create variants of modal popup
 */

var modalChooseColor = new Modal(Modal.MODAL_TYPE.COLOR, calendar); //modalChooseColor.openModal()

var modalEditor = new Modal(Modal.MODAL_TYPE.EDITOR, calendar); //modalEditor.openModal()
//console.log(modalEditor.modalType)

/**
 * Start functionalities by instanciating modules
 */

var noteEditor = new _modules_note_editor__WEBPACK_IMPORTED_MODULE_2__.default(modalEditor, calendar);
var colorChooser = new _modules_color_chooser__WEBPACK_IMPORTED_MODULE_1__.default(modalChooseColor);
/*colorChooser.dialog.openModal()
console.log(colorChooser.dialog.modalType)*/

/**
 * start ColorChooser by clicking change theme buttons
 */

Array.from(document.querySelectorAll('.current-day__btn, .calendar__button .btn')).forEach(function (el) {
  return el.addEventListener('click', function () {
    return colorChooser.start();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=app.js.map