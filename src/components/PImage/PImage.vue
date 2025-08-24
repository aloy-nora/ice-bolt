<script lang="ts">
import {defineComponent} from "vue";
import {imageDefaultProps, textStylePropNames, transformToComponentProps} from "@/defaultProps";
import useComponentCommon from "@/hooks/useComponentCommon";

const defaultProps = transformToComponentProps(imageDefaultProps)
export default defineComponent({
  name: "PImage",
  props: {
    ...defaultProps
  },
  setup(props, {emit}) {
    const {styleProps, handleClick} = useComponentCommon(props, textStylePropNames)
    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<template>
  <img class="p-image-component" :src="src" :style="styleProps" @click.prevent="handleClick"/>
</template>

<style scoped>
.p-image-component {
  max-width: 100%;
  position: relative !important;
}
</style>
