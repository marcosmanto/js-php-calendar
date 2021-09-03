class Modal {
  static MODAL_TYPE = {
    'COLOR': document.querySelector('.color-chooser'),
    'EDITOR': document.querySelector('.note-editor')
  }
  #currentModal = Modal.MODAL_TYPE.COLOR
  #selModal = document.querySelector('.dialog')
  #selPopUp = document.querySelector('.dialog__popup')
  #selDialogButtons = document.querySelectorAll('.dialog button')
  #cssClassFadeIn = 'dialog--fade-in'
  #cssClassFadeOut = 'dialog--fade-out'


  constructor() {
    this.events()
  }

  events() {
    this.#selModal.addEventListener('animationend', this.toggleModal.bind(this))
    this.#selPopUp.addEventListener('animationend', this.dialogFadeOutAndClose.bind(this))
    this.#selDialogButtons.forEach(el => el.addEventListener('click', this.closeModal.bind(this)))
  }

  /**
   * Animation end event listeners
   */

  // After this.closeModal() triggers popup clode animation
  dialogFadeOutAndClose(evt) {
    // avoid parent container (.dialog element overlay)
    // to receive this event
    evt.stopPropagation()
    // listen only for close animation end not '--open' animation
    if(this.#selPopUp.classList.contains('dialog__popup--close')) {
      this.#selModal.classList.add(this.#cssClassFadeOut)
    }
  }

  toggleModal() {
    // waits for end of .dialog overlay element animations
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
      this.#selPopUp.classList.remove('dialog__popup--open','dialog__popup--close')
      this.#currentModal.setAttribute('hidden', 'hidden')
      this.#selModal.open = false
    }

  }

  openModal(type) {
    this.#selModal.open = true
    this.#selModal.classList.add(this.#cssClassFadeIn)
    switch(type){
      case Modal.MODAL_TYPE.COLOR:
        this.#currentModal = Modal.MODAL_TYPE.COLOR
        break
      case Modal.MODAL_TYPE.EDITOR:
        this.#currentModal = Modal.MODAL_TYPE.EDITOR
        break
    }
  }

  closeModal() {
    this.#selPopUp.classList.add('dialog__popup--close')
  }

}

module.exports = Modal