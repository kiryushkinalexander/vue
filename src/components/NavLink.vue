<template>
  <li :class="className">
    <router-link :to="link">
      {{ text }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
  },
};
</script>
