<template>
  <div class="home">
    <Header />
    <form id="partySearch" v-on:submit.prevent="findParty">
      <div class="center">
        <input type="text" class="form-control" placeholder="Party Code (your party's unique 6 digit code)" v-model="partyCode" pattern="[a-zA-Z0-9-^\S+$]+" maxlength="10">
      </div>
      <input class="btn btn-danger" id="submit" type="submit" value="Load Party"/>
    </form>
    <div class="centerBox">
      <ul>
        <li v-for="game in myGames" v-bind:key="game.name" >
          <a :href=game.gamePage  @click.prevent="showDetails = !showDetails, gameId=game.gamePage, getDetails(game.gamePage)">
            <img class ="smallImg" :src=game.image />
            <section>
              <h4>{{game.name}}</h4>
              <p>Players: {{game.minPlayers}} to {{game.maxPlayers}}
                <br>Duration: {{game.minTime}} to {{game.maxTime}} minutes.
              </p>
            </section>
          </a>
        </li>
      </ul>
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
  },
  data() {
    return {
      partyCode: ''
    };
  },
  methods: {
    findParty () {

    }
}
}
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  margin: 10px;
}
ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  list-style: none;
  margin: 0;
  padding: 2%;
  background-color: white;
}
li {
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
img {
  max-width: 100px;
  width: auto;
}
li a {
  color: black;
  text-decoration: none;
}
li a:hover {
  color: grey;
  text-decoration: none;
}
form {
  margin-bottom: 2%;
}
label {
  margin-right: 10px;
}
input {
  max-width: 30%;;
}
</style>