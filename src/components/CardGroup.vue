<template>
  <div style="margin-top: 100px; margin-bottom: 100px">
    <vs-row v-if="activeBar == 'homepage'">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <div><h3>homepage</h3></div>
        <vs-card-group>
          <vs-card v-for="item in articleItems" :key="item.id">
            <template #title>
              <h3>{{ item.name }}</h3>
            </template>
            <template #img>
              <img :src="item.picture" alt="" />
            </template>
            <template #text>
              <p>{{ item.description }}</p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class="bx bx-heart"></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span"> {{ item.country }} </span>
              </vs-button>
            </template>
          </vs-card>
        </vs-card-group>
      </vs-col>
    </vs-row>

    <vs-row v-if="activeBar == 'docs'">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <div><h3>docs</h3></div>
        <vs-card-group>
          <vs-card v-for="item in docitems" :key="item.message">
            <template #title>
              <h3>{{ item.message }}</h3>
            </template>
            <template #img>
              <img :src="item.picture" alt="" />
            </template>
            <template #text>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class="bx bx-heart"></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span"> 54 </span>
              </vs-button>
            </template>
          </vs-card>
        </vs-card-group>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      items: [
        {
          message: "Foo",
          picture:
            "https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          message: "Bar",
          picture:
            "https://st2.depositphotos.com/6903990/9767/i/600/depositphotos_97674118-stock-photo-fashion-woman-with-jewelry-set.jpg",
        },
        {
          message: "Fooq",
          picture:
            "https://i.insider.com/5e38494bab49fd614557fcb4?width=600&format=jpeg&auto=webp",
        },
        {
          message: "Barw",
          picture:
            "https://i.pinimg.com/originals/81/6a/45/816a455afd237ac866e10a3611462080.jpg",
        },
        {
          message: "Fooe",
          picture:
            "https://media.istockphoto.com/photos/beautiful-woman-face-portrait-beauty-model-isolated-on-white-picture-id640299760?k=6&m=640299760&s=612x612&w=0&h=LxrbYFczp6etPY2oj1sqzGfyGU_XYtS2UaKNxXTMaIs=",
        },
        {
          message: "Barr",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4kKxl9OMXWhhmg_eIxEpcmfBxmvd54U1BA&usqp=CAU",
        },
        {
          message: "Foot",
          picture:
            "https://www.thebalanceeveryday.com/thmb/9xE6zrdgFMwkTuIihfb5B8Db_7I=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/portrait-of-the-beautiful--young-woman-with-long-brown--hair-528440158-5ad292f2875db900366812b3.jpg",
        },
        {
          message: "Bary",
          picture:
            "https://s3.amazonaws.com/pixpa.com/com/articles/1515071175-image.png",
        },
      ],
      docitems: [
        {
          message: "Foo",
          picture:
            "https://s3.amazonaws.com/pixpa.com/com/articles/1515071175-image.png",
        },
        {
          message: "Bar",
          picture:
            "https://st2.depositphotos.com/6903990/9767/i/600/depositphotos_97674118-stock-photo-fashion-woman-with-jewelry-set.jpg",
        },
        {
          message: "Fooq",
          picture:
            "https://i.insider.com/5e38494bab49fd614557fcb4?width=600&format=jpeg&auto=webp",
        },
        {
          message: "Barw",
          picture:
            "https://i.pinimg.com/originals/81/6a/45/816a455afd237ac866e10a3611462080.jpg",
        },
        {
          message: "Fooe",
          picture:
            "https://media.istockphoto.com/photos/beautiful-woman-face-portrait-beauty-model-isolated-on-white-picture-id640299760?k=6&m=640299760&s=612x612&w=0&h=LxrbYFczp6etPY2oj1sqzGfyGU_XYtS2UaKNxXTMaIs=",
        },
        {
          message: "Barr",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4kKxl9OMXWhhmg_eIxEpcmfBxmvd54U1BA&usqp=CAU",
        },
        {
          message: "Foot",
          picture:
            "https://www.thebalanceeveryday.com/thmb/9xE6zrdgFMwkTuIihfb5B8Db_7I=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/portrait-of-the-beautiful--young-woman-with-long-brown--hair-528440158-5ad292f2875db900366812b3.jpg",
        },
        {
          message: "Bary",
          picture:
            "https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
    };
  },
  props: {
    activeBar: {
      type: String,
    },
    articleItems: {
      type: Array,
    },
  },
};
</script>

<style>
.alanBtn-root {
  z-index: 2;
}
.vs-card__group-cards {
  overflow-x: hidden !important;
}
</style>
