<template>
  <v-main>
    <h2 class="text-center">Berita Kita</h2>
    <v-row>
      <v-col cols="12" v-for="(news, index) in listNews" :key="index">
        <card-news :news='news'></card-news>
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
import cardNews from '@/components/cardNews.vue'

export default {
  name: "HomeView",
  components: {
    cardNews
  },
  computed: {
    listNews() {
      return this.$store.state.news.news
    }
  },
  methods: {
    fetchNews() {
      this.$store.dispatch("news/fetchNews")
    }
  },
  mounted() {
    this.fetchNews()
  }
}
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
}

.article {
  width: 50%;
}
</style>
