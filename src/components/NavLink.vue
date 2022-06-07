<template>
  <li :class="className">
    <router-link :to="link">
      {{ text }}
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    className: {
      type: String,
      required: true,
    },
  },
};
</script>
