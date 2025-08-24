import PText from "@/components/PText";
import {App} from "vue";
import PImage from "@/components/PImage";
import PShape from "@/components/PShape";

const components = [
    PText,
    PImage,
    PShape
]

const install = (app: App) => {
    components.forEach(component => app.component(component.name, component))
}

export {
    PText,
    PImage,
    PShape,
    install
}

export default {install}
