<template>
  <div class="home">
    <Header />
    <div class="centerBox">
      <div class="box">
        <section>
          Game Knight was built using Vue, Bootstrap for Vue, Knex, Express, Postgres, Chart.js, and plain old HTML, CSS, and JavaScript.
        </section>
        <section>
          You can find more of my projects <a class="contactLink" href="https://www.linkedin.com/in/trujilloj/" target="_blank">here</a>.
        </section>
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

<style>

</style>