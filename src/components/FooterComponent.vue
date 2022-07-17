<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">

            <nav-link
             :link="links.footer.link"
             className="footer__item"
            >
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
                alt="logo"
              />
            </nav-link>

            <nav-link
              v-for="link in links.other"
              :key="link.id"
              className="footer__item"
              :link="link.link"
              :text="link.text"
            >
            </nav-link>

          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: { NavLink },
  data() {
    return {
      links: {
        footer: {
          id: 0,
          link: "/",
          icon: "Logo_black.svg",
        },
        other: [
          {
            id: 1,
            text: "Our coffee",
            link: "/our-coffee",
          },
          {
            id: 2,
            text: "For your pleasure",
            link: "/for-your-pleasure",
          },
          {
            id: 3,
            text: "Contact us",
            link: "/contact-us",
          },
        ],
      },
    };
  },
};
</script>
