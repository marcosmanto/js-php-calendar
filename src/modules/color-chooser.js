//import Modal from "./modal"

export default class ColorChooser {
  #selButtonUpdate = document.querySelector('.color-chooser .btn')
  #themeColors = new Map([
    ['blue', { color: '#1B19CD', off_color: '#7C7EFB' }],
    ['red', { color: '#D01212', off_color: '#EEA19B' }],
    ['purple', { color: '#721D89', off_color: '#EBADFB' }],
    ['green', { color: '#158348', off_color: '#57C664' }],
    ['orange', { color: '#EE742D', off_color: '#F7A77A' }],
    ['deep-orange', { color: '#F13C26', off_color: '#F77D59' }],
    ['baby-blue', { color: '#31B2FC', off_color: '#3D8DD9' }],
    ['cerise', { color: '#EA3D69', off_color: '#FCBECC' }],
    ['lime', { color: '#2ACC32', off_color: '#4FFA4F' }],
    ['teal', { color: '#2FCCB9', off_color: '#7FE7E3' }],
    ['pink', { color: '#F50D7A', off_color: '#FFB9EA' }],
    ['black', { color: '#212524', off_color: '#687E7B' }],
  ])

  #dialogObject
  #currentThemeColor
  #selColorOptions = document.querySelectorAll('.color-chooser__color-preview')
  #previousColorSelection

  constructor(dialogObj) {
    //const colors = Array.from(this.#themeColors.keys())
    this.#currentThemeColor = 'blue' //colors[Math.floor(Math.random() * colors.length)]
    this.#dialogObject = dialogObj
    this.#previousColorSelection = document.querySelector(`.color-chooser [data-selected-color="${this.#currentThemeColor}"]`).parentElement
    this.#selColorOptions.forEach(el => {
      el.parentElement.classList.remove('color-chooser__color-option--selected')
      if(el.dataset.selectedColor === this.#currentThemeColor){
        el.parentElement.classList.add('color-chooser__color-option--selected')
      }
    })

    this.events()
  }

  start() {
    this.#dialogObject.openModal()
  }

  events() {
    this.#selButtonUpdate.addEventListener('click', this.onUpdateClick.bind(this))
    this.#selColorOptions.forEach(el => el.addEventListener('click',this.onColorSelected.bind(this)))
  }

  onColorSelected(evt) {
    if(this.#previousColorSelection) this.#previousColorSelection.classList.remove('color-chooser__color-option--selected')
    this.#previousColorSelection = evt.target.parentElement
    this.#currentThemeColor = evt.target.dataset.selectedColor
    evt.target.parentElement.classList.add('color-chooser__color-option--selected')
  }

  onUpdateClick() {
    this.updateColor()
    this.#dialogObject.closeModal()
  }

  updateColor(colorPicked = this.#currentThemeColor) {
    document.querySelector(':root').style.setProperty(
      '--primary-color', this.#themeColors.get(colorPicked).color
    )
    document.querySelector(':root').style.setProperty(
      '--off-color', this.#themeColors.get(colorPicked).off_color
    )
  }

  get dialog() {
    return this.#dialogObject
  }

}
