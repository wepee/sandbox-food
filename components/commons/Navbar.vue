<template>
  <v-app-bar
    app
    flat
    class="px-15"
  >
    <nuxt-link to="/">
      <v-app-bar-title>
        <strong>Food Analytics</strong>
      </v-app-bar-title>
    </nuxt-link>

    <v-spacer />
    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        class="mx-1"
        nuxt
        :to="item.link"
        text
      >
        {{ item.name }}
      </v-btn>
      <v-btn target="_blank" href="https://food20.fr/" text>
        FoodLab
      </v-btn>
    </div>
    <v-menu
      v-else
      bottom
      left
    >
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          color="grey"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" nuxt :to="item.link">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
        <v-list-item target="_blank" href="https://food20.fr/">
          <v-list-item-title>Food Lab</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>

export default {
  data () {
    return {
      items: [{
        name: 'Categories',
        link: 'categories'
      }, {
        name: 'Families',
        link: 'families'
      }, {
        name: 'Innovations',
        link: 'innovation'
      }, {
        name: 'Ranking',
        link: 'ranking'
      }, {
        name: 'Data Entry',
        link: 'dataEntry'
      }
      ]
    }
  }
}
</script>

<style>
</style>
