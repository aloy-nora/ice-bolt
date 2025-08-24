<script lang="ts">
import {defineComponent} from "vue";
import {shapeDefaultProps, shapeStylePropsNames, transformToComponentProps} from "@/defaultProps";
import useComponentCommon from "@/hooks/useComponentCommon";

const defaultProps = transformToComponentProps(shapeDefaultProps)
export default defineComponent({
  name: 'PShape',
  props: {
    ...defaultProps
  },
  setup(props) {
    const {styleProps, handleClick} = useComponentCommon(props, shapeStylePropsNames)
    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<template>
  <div class="p-shape-component" :style="styleProps" @click="handleClick"></div>
</template>

<style scoped>

</style>
