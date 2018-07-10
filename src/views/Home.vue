<template>
  <div class="home">
    <Header />
      <div class="centerBox">
          <div class="box">
            <h2>
              Adulting is a lot more work than most of us thought it would be while we were growing up.
              <br />
              <br />
              Do you know what else is hard work? Remembering what you did in the last few game sessions of a long D&D campaign.
              <br />
              <br />
              Use Game Knight to track session details, including events, and player loot and status.
              <br />
              <br />
              Let's play a game.
            </h2>
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