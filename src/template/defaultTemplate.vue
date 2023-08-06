<template>
  <v-app>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Berita Kita</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-text-field v-model="search" label="Search your news" dark flat solo-inverted hide-details clearable
        clear-icon="mdi-close-circle-outline" @keyup.enter="searchNews"></v-text-field>

      <!-- <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

      <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => { }">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>


    <v-card class="pa-12" color="indigo darken-2" flat>
      <v-row>
        <v-col cols="2">
          <v-card elevation="12" width="256">
            <v-navigation-drawer floating permanent>
              <v-list dense>
                <v-list-item v-for="item in items" :key="item.slug" link @click="selectCategory(item.slug)">
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="overflow-y-auto" height="800" max-height="800">
            <v-main>
              <router-view />
            </v-main>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "DefaulTemplate",
  data: () => ({
    search: null,
    items: [
      { title: 'Business', icon: 'mdi-domain', slug: 'business' },
      { title: 'Entertainment', icon: 'mdi-forum', slug: 'entertainment' },
      { title: 'General', icon: 'mdi-view-dashboard', slug: 'general' },
      { title: 'Health', icon: 'mdi-medical-cotton-swab', slug: 'health' },
      { title: 'Science', icon: 'mdi-rocket-launch', slug: 'science' },
      { title: 'Sports', icon: 'mdi-basketball', slug: 'sports' },
      { title: 'Technology', icon: 'mdi-laptop', slug: 'technology' },
    ],
  }),
  methods: {
    selectCategory(slug) {
      this.search = ''
      this.$store.commit("news/fetchByCategory", slug);
      this.$store.dispatch("news/fetchNews")
    },
    searchNews() {
      this.$store.commit("news/fetchByKey", this.search);
      this.$store.dispatch("news/fetchNews")
    }
  },
  // computed:{
  //   filter() {
  //     return this.caseSensitive
  //       ? (item, search, textKey) => item[textKey].indexOf(search) > -1
  //       : undefined
  //   },
  // }

}
</script>

<style></style>