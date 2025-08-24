import PImage from "./PImage.vue";
import {App} from "vue";

PImage.install = (app: App) => {
    app.component(PImage.name, PImage)
}

export default PImage
