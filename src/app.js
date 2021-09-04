import Calendar from "./modules/calendar"
import ColorChooser from "./modules/color-chooser"
const Modal = require('./modules/modal')



const calendar = new Calendar()
  //.calendarDate = new Date(2023, 6, 1)

const modalChooseColor = new Modal(Modal.MODAL_TYPE.COLOR, calendar)
//modalChooseColor.openModal()

const modalEditor = new Modal(Modal.MODAL_TYPE.EDITOR)
//modalEditor.openModal()
//console.log(modalEditor.modalType)

const colorChooser = new ColorChooser(modalChooseColor)

/*colorChooser.dialog.openModal()
console.log(colorChooser.dialog.modalType)*/

/* change theme buttons */
Array.from(document.querySelectorAll('.current-day__btn, .calendar__button .btn'))
  .forEach(el => el.addEventListener('click', () => colorChooser.start()))