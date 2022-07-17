<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <nav-link :link="links.header.link" className="header__item">
        <img :src="require(`@/assets/logo/${links.header.icon}`)" alt="Logo" />
      </nav-link>

      <nav-link
        v-for="link in links.other"
        :key="link.id"
        :link="link.link"
        :text="link.text"
        className="header__item"
      >
      </nav-link>
    </ul>
  </header>
</template>

<script>
import NavLink from "./NavLink.vue";
export default {
  components: { NavLink },
  computed: {
    links() {
      return this.$store.getters['getHeaderLinks']
    }
  }
};
</script>
