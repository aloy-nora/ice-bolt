<script lang="ts">
import {defineComponent} from "vue";
import {textDefaultProps, textStylePropNames, transformToComponentProps} from "@/defaultProps";
import useComponentCommon from "@/hooks/useComponentCommon";

const defaultProps = transformToComponentProps(textDefaultProps)
export default defineComponent({
  name: "PText",
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    ...defaultProps
  },
  setup(props, { emit }) {
    const {styleProps, handleClick} = useComponentCommon(props, textStylePropNames)
    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<template>
  <component :is="tag" :style="styleProps" class="p-text-component" @click="handleClick">
    {{ text }}
  </component>
</template>

<style scoped>
h2.p-text-component, p.p-text-component {
  margin-bottom: 0;
}
button.p-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.p-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>
