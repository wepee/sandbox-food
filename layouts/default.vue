<template>
  <v-app>
    <Navbar />
    <v-main class="fill-height">
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '~/components/commons/Navbar'
import Footer from '~/components/commons/Footer'

export default {

  components: {
    Navbar, Footer
  },

  data () {
    return {
    }
  }
}
</script>
