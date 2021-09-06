class Modal {
  static MODAL_TYPE = {
    'COLOR': document.querySelector('.color-chooser'),
    'EDITOR': document.querySelector('.note-editor')
  }
  #currentModal // = Modal.MODAL_TYPE.COLOR
  #selModal = document.querySelector('.dialog')
  #selPopUp = document.querySelector('.dialog__popup')
  #selOverlay = document.querySelector('.dialog')
  #selCloseButton = document.querySelector('.dialog i')
  #cssClassFadeIn = 'dialog--fade-in'
  #cssClassFadeOut = 'dialog--fade-out'
  #calendar
  #selDialogChildren = document.querySelectorAll('.dialog *')


  constructor(modalType, calendarObj) {
    this.#currentModal = modalType
    if(calendarObj) this.#calendar = calendarObj
    this.events()
  }

  events() {
    this.#selDialogChildren.forEach(el => el.addEventListener('click', (evt) => evt.stopPropagation()))
    this.#selCloseButton.addEventListener('click', () => this.closeModal())
    this.#selOverlay.addEventListener('click', () => this.closeModal())
  }

  attachAnimationEvents() {
    this.attachAnimationPopupEvent()
    this.attachAnimationDialogEvent()
  }

  attachAnimationPopupEvent() {
    this.#selPopUp.addEventListener('animationend', this.onPopupAnimationEnds.bind(this), {once: true, capture: true})
  }

  attachAnimationDialogEvent() {
    this.#selModal.addEventListener('animationend', this.onDialogAnimationEnds.bind(this), {once: true, capture: true})
  }

  dettachAnimationEvents() {
    // this.#selModal.removeEventListener('animationend', this.onPopupAnimationEnds)
    // this.#selPopUp.removeEventListener('animationend', this.onDialogAnimationEnds)
  }

  /**
   * Animation end event listeners
   */

  isEventInPopupContainer(evt) {
    if(evt.target === this.#selModal) {
      return true
    }
    return false
  }

  get isEventInThisModal() {
    // check if parent dialog container has same

    //if(Array.from(this.#currentModal.closest('.dialog').classList).indexOf(this.modalType) > 0) {
    if(this.#currentModal.closest('.dialog').classList.contains(this.modalType)) {
      return true
    }
    return false
  }

  // After this.closeModal() triggers popup clode animation
  onDialogAnimationEnds(evt) {

    // #selModal is parent container so it receives animend event of its children
    // this method avoids popup child animation trigger parent's animationend listener code
    if(!this.isEventInPopupContainer(evt)) return

    //console.log('Dialog anim ends')

    //overlay ends animation toggle correct popup and start popup animation
    if(this.#selModal.classList.contains(this.#cssClassFadeIn)) {
      this.#selPopUp.classList.add('dialog__popup--open')
      this.#selModal.classList.remove(this.#cssClassFadeIn)
      // set current popup property
      switch(this.#currentModal){
        case Modal.MODAL_TYPE.COLOR:
          Modal.MODAL_TYPE.COLOR.removeAttribute('hidden')
          break
        case Modal.MODAL_TYPE.EDITOR:
          Modal.MODAL_TYPE.EDITOR.removeAttribute('hidden')
          break
      }
    }

    // close animation
    if(this.#selModal.classList.contains(this.#cssClassFadeOut)) {
      // remove all animations
      this.#selModal.classList.remove(this.#cssClassFadeOut)
      this.#selModal.classList.remove(this.modalType)
      this.#selPopUp.classList.remove('dialog__popup--open','dialog__popup--close')
      this.#currentModal.setAttribute('hidden', 'hidden')
      this.#selModal.open = false
    }

  }

  onPopupAnimationEnds(evt) {
    evt.stopPropagation()
    //console.log('Popup anim ends')

    if(this.#selPopUp.classList.contains('dialog__popup--open')) {
      //console.log('opened popup')

    }

    if(this.#selPopUp.classList.contains('dialog__popup--close')) {
      //console.log('closed popup')
      this.attachAnimationDialogEvent()
      this.#selModal.classList.add(this.#cssClassFadeOut)
    }

  }

  get modalType() {
    switch(this.#currentModal){
      case Modal.MODAL_TYPE.COLOR:
        return 'color-chooser'
      case Modal.MODAL_TYPE.EDITOR:
        return 'note-editor'
    }
  }


  openModal(type = this.#currentModal) {
    //console.log('open modal')
    this.#selModal.open = true

    switch(type){
      case Modal.MODAL_TYPE.COLOR:
        this.#currentModal = Modal.MODAL_TYPE.COLOR
        break
      case Modal.MODAL_TYPE.EDITOR:
        this.#currentModal = Modal.MODAL_TYPE.EDITOR
        break
    }

    this.#selModal.classList.add(this.#currentModal.classList[0])

    this.#selModal.classList.add(this.#cssClassFadeIn)
    // Attach animation events here to avoid objects
    // which openModal was not called to appear. If handler is placed in constructor,
    // even objects that were not ordered to open will open
    this.attachAnimationEvents()
    if(this.#calendar) this.#calendar.enableKeyboardNavigation = false
  }

  closeModal(evt) {
    if(!this.isEventInThisModal) return

    //console.log('--------------')
    //console.log('close modal action')
    //console.log(Array.from(this.#currentModal.closest('.dialog').classList).pop())
    //console.log(this.modalType)
    //console.log('--------------')

    this.attachAnimationPopupEvent()

    this.#selPopUp.classList.add('dialog__popup--close')
    if(this.#calendar) this.#calendar.enableKeyboardNavigation = true
  }

}

module.exports = Modal