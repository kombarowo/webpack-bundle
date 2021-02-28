export default class Tabs {
  constructor({
    blockSelector = '.js-tab-block',
    triggerSelector = '.js-tab-trigger',
    tabSelector = '.js-tab',
  } = {}) {
    this.selectors = {
      block: blockSelector,
      trigger: triggerSelector,
      tab: tabSelector
    }

    this.$blocks = document.querySelectorAll(blockSelector)

    this.init()
  }

  init() {
    this.$blocks.forEach(block => {

      const tabs = block.querySelectorAll(this.selectors.tab)
      const triggers = block.querySelectorAll(this.selectors.trigger)

      tabs.forEach(tab => {
        if (!tab.classList.contains('active')) {
          this.hide(tab)
        }
      })

      triggers.forEach(trigger => {
        const tabId = trigger.dataset.tabId;

        trigger.addEventListener('click', () => this.showTabById(block, tabId, trigger))
      })

    })
  }

  showTabById(block, tabId, trigger) {
    const tabs = block.querySelectorAll(this.selectors.tab)
    const triggers = block.querySelectorAll(this.selectors.trigger)

    triggers.forEach(trigger => {
      trigger.classList.remove('active')
    })

    tabs.forEach(tab => {
      const id = tab.dataset.tabId

      if (tabId !== id) {
        this.hide(tab)
      } else {
        tab.classList.add('active')
        this.show(tab)
      }
    })

    trigger.classList.add('active')
  }

  hide(tab) {
    tab.style.opacity = 0
    tab.style.display = 'none';
  }

  show(tab) {
    tab.style.display = ''
    setTimeout(() => {
      tab.style.opacity = 1
    }, 0);
  }
}