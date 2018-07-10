<template>
  <div class="home">
    <Header />
    <div class="centerBox">
      <div class="box">
        Game Night was built using Vue, Bootstrap for Vue, Knex, Express, Postgres, and plain old HTML, CSS, and JavaScript.
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>