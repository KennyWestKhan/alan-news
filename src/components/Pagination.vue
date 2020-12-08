<template>
  <div class="center" style="margin-top: 10px">
    <vs-pagination v-model="page" :length="4" disabled />
  </div>
</template>
<script>
export default {
  name: "Pagination",
  data: () => ({
    page: 1,
  }),
};
</script>

        