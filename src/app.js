import Calendar from "./modules/calendar"
const Modal = require('./modules/modal')

new Calendar()
  //.calendarDate = new Date(2023, 6, 1)

const modalObj = new Modal()

modalObj.openModal(Modal.MODAL_TYPE.COLOR)