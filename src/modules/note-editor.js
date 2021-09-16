import { getRandom } from './utils'
import axios from 'axios'
import qs from 'qs'

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
    this.getNotesFromServer().then(
      notes => {
        if(notes){
          NoteEditor.NOTES = new Map(notes.map(
            note =>
                [
                  note.note_id,
                  {
                    uid: note.note_id,
                    color: note.note_color,
                    content: note.note_text
                  }
                ]
            ))
        }
        this.#calendarObject.renderCalendar()
        this.calendarDayPressEvents()
      }
    )

    this.events()
  }

  events() {
    this.#selButtonPost.addEventListener('click', this.onPostClick.bind(this))
    this.#selButtonDelete.addEventListener('click', this.onDeleteClick.bind(this))
  }

  async getNotesFromServer(){
    //console.log('Getting notes from server...')
    let response
    try {
      response = await axios.post(
        'index.php',
        qs.stringify({
          all_notes: ''
        }),
        {
          timeout: 10000,
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }
      )
    } catch (error) {
      console.log('Failed to get all notes on backend server')
    }

    return response?.data
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

  async onDeleteClick() {
    if(NoteEditor.NOTES.has(this.#calendarObject.lastCellClicked.dataset.uid)) {
      const noteUID = this.#calendarObject.lastCellClicked.dataset.uid
      let response
      try {
        response = await axios.post(
          'index.php',
          qs.stringify({
            note_id: noteUID
          }),
          {
            headers: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          }
        )
        NoteEditor.NOTES.delete(this.#calendarObject.lastCellClicked.dataset.uid)
      } catch (error) {
        console.log('Failed to delete note on backend server')
      }

      console.log(response ?? 'Response not available (could be a server error)')
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
