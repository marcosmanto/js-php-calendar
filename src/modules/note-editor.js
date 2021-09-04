export default class NoteEditor {
  #calendarObject
  #dialogObject
  #selButtonPost = document.querySelector('.note-editor .btn--black')
  #selButtonDelete = document.querySelector('.note-editor .btn--danger')

  constructor(dialogObj, calendarObj) {
    if(dialogObj) this.#dialogObject = dialogObj
    if(calendarObj) this.#calendarObject = calendarObj
    this.events()
  }

  events() {
    this.#calendarObject.calendarDaysNodeList
      .forEach(el => el.addEventListener('click',this.onDayClick.bind(this)))
    this.#selButtonPost.addEventListener('click', this.onPostClick.bind(this))
    this.#selButtonDelete.addEventListener('click', this.onDeleteClick.bind(this))
  }

  onDayClick(evt) {
    console.log(evt.target.dataset.uid)
    this.#dialogObject.openModal()
  }

  onPostClick() {
    this.#dialogObject.closeModal()
  }

  onDeleteClick() {
    this.#dialogObject.closeModal()
  }

}
