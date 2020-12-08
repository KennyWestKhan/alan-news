  <template>
  <div class="hidden">
    <navbar
      @toggle-sidebar="activeSidebar = $event"
      :active="active"
      @set-active="active = $event"
    />
    <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="general" @click="getNews('general')">
        <template #icon>
          <i class="bx bx-grid-alt"></i>
        </template>
        General news
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-group"></i>
            </template>
            Categories
          </vs-sidebar-item>
        </template>
        <vs-sidebar-item id="health" @click="getNews('health')">
          <template #icon>
            <i class="bx bxl-instagram"></i>
          </template>
          Health
        </vs-sidebar-item>
        <vs-sidebar-item id="sports" @click="getNews('sports')">
          <template #icon>
            <i class="bx bxl-twitter"></i>
          </template>
          Sports
        </vs-sidebar-item>
        <vs-sidebar-item id="tech" @click="getNews('tech')">
          <template #icon>
            <i class="bx bxl-facebook"></i>
          </template>
          Technology
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-group"></i>
            </template>
            Social media
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="Instagram">
          <template #icon>
            <i class="bx bxl-instagram"></i>
          </template>
          Instagram
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <i class="bx bxl-twitter"></i>
          </template>
          Twitter
        </vs-sidebar-item>
        <vs-sidebar-item id="Facebook">
          <template #icon>
            <i class="bx bxl-facebook"></i>
          </template>
          Facebook
        </vs-sidebar-item>
      </vs-sidebar-group>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="" />
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge> 28 </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
    <card
      :data="helpToolTips"
      v-if="active == 'homepage' && newsQueried.length == 0"
    />
    <cards
      :activeBar="active"
      :articleItems="savedSources"
      v-if="savedSources.length > 0"
    />
    <div
      v-show="
        active == 'homepage' && !savedSources.length && newsQueried.length > 0
      "
    >
      <card :data="newsQueried" :activeArticle="activeArticle"/>
      <pagination />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import generalMixin from "@/mixins/generalMixin";
import navbar from "@/components/Navbar";
import cards from "@/components/CardGroup";
import card from "@/components/Card";
import pagination from "@/components/Pagination";
export default {
  name: "Home",
  data: () => ({
    active: "homepage",
    activeSidebar: false,
    helpToolTips: [
      {
        title: "Latest news",
        urlToImage: "",
        description: "Try saying, 'Give me the latest news for today'",
        id: "latest-news",
      },
      {
        title: "News by categories",
        urlToImage: "",
        description: "Try saying, 'Give me the latest technology news'",
        id: "latest-news",
      },
      {
        title: "News by terms",
        urlToImage: "",
        description: `Try saying, 'What's up with PS5`,
        id: "latest-news",
      },
      {
        title: "News by sources",
        urlToImage: "",
        description: `Try saying, 'Show me the news from CNN`,
        id: "latest-news",
      },
    ],
  }),
  mixins: [generalMixin],
  components: { navbar, cards, card, pagination },
  mounted() {},
  created() {
    // this.getNews();
  },
};
</script>
