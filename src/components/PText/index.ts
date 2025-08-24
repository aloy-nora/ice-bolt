import PText from './PText.vue'
import {App} from "vue";

PText.install = (app: App) => {
    app.component(PText.name, PText)
}

export default PText
