import NoteEditor from "./note-editor"
export default class Calendar {
  #selCurDay_Day = document.getElementById('cur-day')
  #selCurDay_DayOfWeek = document.getElementById('cur-day-week')
  #selCurDay_Month = document.getElementById('cur-month')
  #selCurDay_Year = document.getElementById('cur-year')
  #selCal_Year = document.querySelector('.calendar__year')
  #selCal_Month = document.querySelector('.calendar__month')
  #selCalendarGrid = document.querySelector('.calendar__table')
  #selButtonPrevMonth = document.querySelector('.calendar__prev-month')
  #selButtonNextMonth = document.querySelector('.calendar__next-month')
  #selCalendarCell
  #selLastCellClicked
  enableKeyboardNavigation = true

  #data = {
    current_day: {},
    calendar: {},
    calendar_date: null,
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    weekdays: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  }

  constructor() {
    const hoje = new Date()
    this.#data.current_day = {
      day: hoje.getDate(),
      day_off_week: hoje.getDay(),
      month: hoje.getMonth(),
      year: hoje.getFullYear()
    }

    // this.#data.calendar = {
    //   month: hoje.getMonth(),
    //   year: hoje.getFullYear()
    // }

    this.#data.calendar_date = hoje

    this.renderCalendar()
    this.renderCurrentDay()
    this.events()
  }

  events() {
    this.#selButtonPrevMonth.addEventListener('click', this.previousMonth.bind(this))
    this.#selButtonNextMonth.addEventListener('click', this.nextMonth.bind(this))
    document.addEventListener('keydown', this.keyboardNavigation.bind(this))
  }

  keyboardNavigation(evt) {
    if(this.enableKeyboardNavigation) {
      switch(evt.keyCode) {
        case 37: this.previousMonth(); break
        case 39: this.nextMonth(); break
      }
    }
  }

  calendarCellEvents() {
    this.#selCalendarCell = document.querySelectorAll('.calendar__number')
    this.#selCalendarCell
      .forEach(el => el.addEventListener('click', this.onCellClick.bind(this)))
  }

  get calendarDate() {
    return this.#data.calendar_date
  }

  set calendarDate(newDate) {
    if(newDate) {
      this.#data.calendar_date = newDate
      this.renderCalendar()
      document.body.dispatchEvent(new Event('monthchange'))
    }
  }

  get lastCellClicked() {
    return this.#selLastCellClicked
  }

  set lastCellClicked(newElem) {
    if(newElem) {
      this.#selLastCellClicked = newElem
    }
  }

  onCellClick(evt) {
    if(this.lastCellClicked &&
       this.lastCellClicked.classList.contains('calendar__number--selected') &&
       this.lastCellClicked !== evt.target) {
      this.lastCellClicked.classList.remove('calendar__number--selected')
    }
    this.lastCellClicked = evt.target
    evt.target.classList.add('calendar__number--selected')
  }

  previousMonth() {
    let prevMonth = this.calendarDate.getMonth() - 1
    let year = this.calendarDate.getFullYear()
    this.calendarDate = new Date(
      year,
      prevMonth,
      1
    )
  }

  nextMonth() {
    let nextMonth = this.calendarDate.getMonth() + 1
    let year = this.calendarDate.getFullYear()
    this.calendarDate = new Date(
      year,
      nextMonth,
      1
    )
  }

  getDay(n = this.#data.current_day.day) {
    switch(n) {
      case 1:
      case 21:
      case 31:
        return n + '<sup>st</sup>'
      case 2:
      case 22:
        return n + '<sup>nd</sup>'
      case 3:
      case 23:
      return n + '<sup>rd</sup>'
      default:
        return n + '<sup>th</sup>'
    }
  }

  getDayOffWeek(n = this.#data.current_day.day_off_week) {
    return this.#data.weekdays[n];
  }

  getMonth(n = this.#data.current_day.month) {
    return this.#data.months[n]
  }

  getYear(n = this.#data.current_day.year) {
    return n
  }

  get calendarDaysNodeList() {
    return Array.from(document.querySelectorAll('.calendar__number:not(.calendar__number--off)'))
  }

  renderCalendar() {
    //console.log(NoteEditor.NOTES)

    // Set calendar date as first day o month
    //this.#data.calendar_date = new Date(2021, 9, 1)
    this.#data.calendar_date.setDate(1)
    const firstDayOfMonthWeekIndex = this.#data.calendar_date.getDay()

    let lastDayOfMonth = new Date(
      this.#data.calendar_date.getFullYear(),
      this.#data.calendar_date.getMonth() + 1,
      0
    )

    const lastDayOfMonthWeekIndex = lastDayOfMonth.getDay()
    lastDayOfMonth = lastDayOfMonth.getDate()

    const previousMonthLastDay = new Date(
      this.#data.calendar_date.getFullYear(),
      this.#data.calendar_date.getMonth(),
      0
    ).getDate()

    const nextMonthDaysToShow = 7 - lastDayOfMonthWeekIndex - 1

    this.#data.calendar = {
      month: this.#data.calendar_date.getMonth(),
      year: this.#data.calendar_date.getFullYear()
    }

    this.renderCalendarHeader()

    document.querySelectorAll('.calendar__number')
    .forEach(el => el.remove())

    this.renderCalendarPreviousMonthDays(firstDayOfMonthWeekIndex, previousMonthLastDay)

    this.renderCalendarMonthDays(lastDayOfMonth)

    this.renderNextMonthDays(nextMonthDaysToShow)

    this.attachNotes()

    this.calendarCellEvents()

  }

  attachNotes() {
    this.calendarDaysNodeList.forEach(el => {
      if(NoteEditor.NOTES.has(el.dataset.uid)) {
        el.classList.add('calendar__number--has-tooltip')
        el.insertAdjacentHTML('beforeend',
          `
          <img src="images/note${NoteEditor.NOTES.get(el.dataset.uid).color}.png" alt="Note">
          <span>${NoteEditor.NOTES.get(el.dataset.uid).content}</span>
          `.trim()
        )
      }
    })
  }

  renderNextMonthDays(numberOfDays) {
    let days = ''
    for (let j = 1; j <= numberOfDays; j++) {
      days += `<div class="calendar__number calendar__number--off"><div class="calendar__day-number">${j}</div></div>`;
    }
    this.#selCalendarGrid.insertAdjacentHTML('beforeend',days)
  }

  renderCalendarMonthDays(numberOfDays) {
    let days = ''
    for (let i = 1; i <= numberOfDays; i++) {
      let dataUID = new Date(
        this.#data.calendar_date.getFullYear(),
        this.#data.calendar_date.getMonth(), i).toLocaleDateString()
      if (
        i === new Date().getDate() &&
        this.#data.calendar_date.getMonth() === new Date().getMonth()
      ) {
        days += `<div data-uid="${dataUID}" class="calendar__number calendar__number--active"><div class="calendar__day-number">${i}</div></div>`
      } else {
        days += `<div data-uid="${dataUID}" class="calendar__number"><div class="calendar__day-number">${i}</div></div>`
      }
    }
    this.#selCalendarGrid.insertAdjacentHTML('beforeend',days)
  }

  renderCalendarPreviousMonthDays(firstDayIndex, lastDay) {
    let days = ''

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="calendar__number calendar__number--off"><div class="calendar__day-number">${lastDay - x + 1}</div></div>`
    }

    this.#selCalendarGrid.insertAdjacentHTML('beforeend',days)
  }

  renderCurrentDay() {
    this.#selCurDay_DayOfWeek.innerHTML = this.getDayOffWeek()
    this.#selCurDay_Day.innerHTML = this.getDay()
    this.#selCurDay_Month.innerHTML = this.getMonth()
    this.#selCurDay_Year.innerHTML = this.getYear()
  }

  renderCalendarHeader(year = this.#data.calendar.year, month = this.#data.calendar.month) {
    this.#selCal_Year.innerHTML = year
    this.#selCal_Month.innerHTML = this.getMonth(month)
  }

}

//module.exports = Calendar