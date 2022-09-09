import pButton from './index.vue'

pButton.install = app => {
  app.component(pButton.name, pButton)
}

export default pButton