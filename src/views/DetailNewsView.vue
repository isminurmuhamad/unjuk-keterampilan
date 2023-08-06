<template>
    <v-main>
        <v-container>
            <v-card>
                <img :src="DetailNews.urlToImage" alt="">
                <v-card-title>
                    <h3>{{ DetailNews.title }}</h3>
                </v-card-title>
                <v-card-subtitle>
                    By: {{ DetailNews.author }}
                    <!-- <span>{{ DetailNews.publishedAt }}</span> -->
                </v-card-subtitle>
                <v-card-text>
                    <p>{{ DetailNews.content }}</p>
                    <span>Lanjutkan baca ke: <a :href="DetailNews.url">Sini</a></span>
                </v-card-text>
                <v-card-actions>
                    <v-btn elevation="2" outlined @click="goBack">Kembali</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {
    name: "DetailNewsView",
    computed: {
        DetailNews() {
            return this.$store.state.news.news
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>
img {
    width: 100%;
}

.detail-author {
    display: flex;
    justify-content: space-between;
}
</style>