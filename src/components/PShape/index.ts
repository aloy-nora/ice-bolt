import PShape from "./PShape.vue";
import {App} from "vue";

PShape.install = (app: App) => {
    app.component(PShape.name, PShape)
}

export default PShape
