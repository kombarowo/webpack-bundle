export default class DropdownsBlock {
  constructor({
    blockSelector = '.js-db-block',
    dropdownSelector = '.js-db',
    triggerSelector = '.js-db-trigger',
    contentSelector = '.js-db-content',
    once = false,
  } = {}) {
    this.once = once
    this.selectors = {
      block: blockSelector,
      dropdown: dropdownSelector,
      trigger: triggerSelector,
      content: contentSelector,
    }
    this.$blocks = document.querySelectorAll(blockSelector)

    this.init()
  }

  init() {
    this.toggle = this.toggle.bind(this)

    this.$blocks.forEach(block => {

      const triggers = block.querySelectorAll(this.selectors.trigger)

      triggers.forEach(trigger => {
        const db = trigger.closest(this.selectors.dropdown)
        const content = db.querySelector(this.selectors.content)
        content.dataset.height = content.clientHeight + 'px'
        content.style.height = '0px'

        trigger.addEventListener('click', () => this.toggle(block, db))
      })

    })
  }

  toggle(block, db) {
    const isOpen = db.classList.contains('open')

    if (isOpen) {
      this.close(db)
    } else {

      if (this.once) {
        this.closeOther(block, db)
      }

      this.open(db)
    }
  }

  open(db) {
    const content = db.querySelector(this.selectors.content);

    db.classList.add('open');
    content.style.height = content.dataset.height;
  }

  close(db) {
    const content = db.querySelector(this.selectors.content);
    
    content.style.height = '0px';
    db.classList.remove('open');
  }

  closeOther(block, current) {
    const items = block.querySelectorAll(this.selectors.dropdown)

    items.forEach(db => {
      if(db  !== current) {
        this.close(db)
      }
    })
  }
}