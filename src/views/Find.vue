<template>
    <div class="home">
        <Header />
        <form id="userSearch" v-on:submit.prevent="detailsFalse, getGames(userName)">
            <div class="center">
            <input type="text" class="form-control" placeholder="Enter your party ID" v-model="partyId">
            </div>
            <input class="btn btn-danger" id="submit" type="submit" value="Load Party"/>
        </form>
        <div class="centerBox">
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