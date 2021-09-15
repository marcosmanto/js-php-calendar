import { getRandom } from './utils'
import axios from 'axios'
export default class NoteEditor {
  #calendarObject
  #dialogObject
  #selButtonPost = document.querySelector('.note-editor .btn--black')
  #selButtonDelete = document.querySelector('.note-editor .btn--danger')
  #selTextarea = document.querySelector('.note-editor textarea')
  static NOTES = new Map()

  constructor(dialogObj, calendarObj) {
    if(dialogObj) this.#dialogObject = dialogObj
    if(calendarObj) this.#calendarObject = calendarObj
    document.body.addEventListener('monthchange', () => this.calendarDayPressEvents())
    this.events()
  }

  events() {
    this.calendarDayPressEvents()
    this.#selButtonPost.addEventListener('click', this.onPostClick.bind(this))
    this.#selButtonDelete.addEventListener('click', this.onDeleteClick.bind(this))
  }

  calendarDayPressEvents() {
    this.#calendarObject.calendarDaysNodeList
      .forEach(el => el.addEventListener('click',this.onDayClick.bind(this)))
  }

  onDayClick(evt) {
    this.#selTextarea.value = ''
    if(NoteEditor.NOTES.has(evt.target.dataset.uid)) {
      this.#selTextarea.value = NoteEditor.NOTES.get(evt.target.dataset.uid).content
    }
    this.#selButtonDelete.style.display = 'block'
    if(this.#selTextarea.value.trim() === '') {
      this.#selButtonDelete.style.display = 'none'
    }
    this.#dialogObject.openModal()
    setTimeout(() => {
      this.#selTextarea.focus()
    }, 1000)
  }

  async onPostClick() {
    console.log('post note')
    if(this.#selTextarea.value) {
      if(NoteEditor.NOTES.has(this.#calendarObject.lastCellClicked.dataset.uid)) {
        //edit record
        NoteEditor.NOTES.get(this.#calendarObject.lastCellClicked.dataset.uid)
          .content = this.#selTextarea.value
      } else {
        // new record
        NoteEditor.NOTES.set(this.#calendarObject.lastCellClicked.dataset.uid,
          {
            uid: this.#calendarObject.lastCellClicked.dataset.uid,
            color: getRandom(1, 6),
            content: this.#selTextarea.value
          }
        )
      }
      console.log(NoteEditor.NOTES.get(this.#calendarObject.lastCellClicked.dataset.uid))
      let response
      try {
        response = await axios.post(
          'index.php',
          NoteEditor.NOTES.get(this.#calendarObject.lastCellClicked.dataset.uid)
        )
      } catch (error) {
        console.log(error)
        console.log('Failed to change note on backend server')
      }

      console.log(response ?? 'Response not available (could be a server error)')

      this.#selTextarea.value = ''
    }
    this.closeOperation()
  }

  onDeleteClick() {
    if(NoteEditor.NOTES.has(this.#calendarObject.lastCellClicked.dataset.uid)) {
      NoteEditor.NOTES.delete(this.#calendarObject.lastCellClicked.dataset.uid)
    }
    this.closeOperation()
  }

  closeOperation() {
    this.#calendarObject.renderCalendar()
    this.calendarDayPressEvents()
    this.#calendarObject.lastCellClicked.click()
    this.#dialogObject.closeModal()
  }

}
