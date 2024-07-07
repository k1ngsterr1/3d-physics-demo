<template>
  <button class="button" :style="{ marginTop: margin }" @click="onClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    margin: {
      type: String,
      required: false,
      default: "0px", // Default margin is set to 0px if not provided
    },
    onClick: {
      type: Function,
      default: () => {}, // Provide a default no-op function if no handler is passed
    },
  },
};
</script>

<style lang="scss" scpoed>
.button {
  width: clamp(125px, 13.02vw, 500px);
  height: clamp(27.5px, 2.8644000000000003vw, 110px);
  cursor: pointer;
  font-size: clamp(10px, 1.0416vw, 40px);
  border: none;
  outline: none;
  background: #f8c630;
  color: #451f55;
  transition: 0.3s all;

  &:hover {
    color: #e54f6d;
    background: #724e91;
  }
}
</style>
