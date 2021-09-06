import Calendar from "./modules/calendar"
import ColorChooser from "./modules/color-chooser"
import NoteEditor from "./modules/note-editor"
const Modal = require('./modules/modal')

/**
 * Start a new Calendar object
 */
const calendar = new Calendar()
  //.calendarDate = new Date(2023, 6, 1)


/**
 * Create variants of modal popup
 */
const modalChooseColor = new Modal(Modal.MODAL_TYPE.COLOR, calendar)
//modalChooseColor.openModal()

const modalEditor = new Modal(Modal.MODAL_TYPE.EDITOR, calendar)
//modalEditor.openModal()
//console.log(modalEditor.modalType)


/**
 * Start functionalities by instanciating modules
 */
const noteEditor = new NoteEditor(modalEditor, calendar)

const colorChooser = new ColorChooser(modalChooseColor)
/*colorChooser.dialog.openModal()
console.log(colorChooser.dialog.modalType)*/


/**
 * start ColorChooser by clicking change theme buttons
 */
Array.from(document.querySelectorAll('.current-day__btn, .calendar__button .btn'))
  .forEach(el => el.addEventListener('click', () => {
    colorChooser.start()
  }))