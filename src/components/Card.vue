<template>
  <div class="grid" style="margin-top: 100px">
    <h3>SEARCH RESULTS</h3>
    <vs-row>
      <vs-col
        w="3"
        lg="3"
        sm="12"
        xs="12"
        :key="index"
        v-for="(data, index) in data"
        style="margin-bottom: 20px"
      >
        <vs-card
          style="margin-left: 30px"
          @click="viewNewsDetails(data.url)"
          :class="activeArticle == index ? 'active' : ''"
        >
          <template #title>
            <h3>{{ data.title }}</h3>
          </template>
          <template #img>
            <img
              :src="
                data.urlToImage ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMgzp0GkUxGF42Z_JSwg_Jlz8ordgiqnukw&usqp=CAU'
              "
              alt=""
            />
          </template>
          <template #text style="text-align: left">
            <p>{{ data.description }}</p>
          </template>
          <template #interactions>
            <!-- <vs-button danger icon>
              <span class="span" primary>
                {{ index }}
              </span>
            </vs-button> -->

            <vs-button
              class="btn-chat"
              shadow
              primary
              style="float: left"
              v-if="data.publishedAt"
            >
              <!-- <i class="bx bx-chat"></i> -->
              <span class="span">
                {{ new Date(data.publishedAt).toDateString() }}
              </span>
            </vs-button>
          </template>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      num: 3,
    };
  },
  props: {
    data: {
      type: Array,
      default: () => {},
    },
    activeArticle: {
      type: Number,
    },
  },
  methods: {
    viewNewsDetails(url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
  },
};
</script>

<style scoped>
.active {
  border-bottom: "10px solid #22289a";
}
</style>