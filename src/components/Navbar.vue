<template>
  <div>
    <vs-navbar
      shadow
      square
      center-collapsed
      :value="active"
      style="position: fixed; top: 0"
    >
      <template #left>
        <vs-button @click="$emit('toggle-sidebar', !toggleSidebar)" flat icon>
          <!-- <i class="bx bx-menu"></i> -->
          <IconifyIcon icon="bulletList" />
        </vs-button>
      </template>
      <vs-navbar-item
        :active="active == 'homepage'"
        id="homepage"
        @click="$emit('set-active', 'homepage')"
      >
        Homepage
      </vs-navbar-item>
      <vs-navbar-item
        :active="active == 'docs'"
        id="docs"
        @click="$emit('set-active', 'docs')"
      >
        Documents
      </vs-navbar-item>
      <template #right>
        <!-- <vs-button flat>Login</vs-button> -->
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: "homepage",
    },
  },
  data() {
    return {
      toggleSidebar: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>