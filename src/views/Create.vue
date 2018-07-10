<template>
  <div class="home">
    <Header />
    <div class="centerBox">
      <form class="box">
          <h1>Create Your Party</h1>
          <input v-model="party.dm" class="form-control mb-2 mr-sm-2" type="text" name="dm" placeholder="Dungeon Master's Name">
          <em>Please enter a 6 digit code, 3 letters and 3 numbers without spaces for your Party Code.</em>
          <input v-model="party.partyCode" name="description" class="form-control mb-2 mr-sm-2" placeholder="Party Code (use this to find your party and update future details)" pattern="[a-zA-Z0-9-^\S+$]+" maxlength="6">
          <input type="submit" id="submitButton" name="submit" value="Submit" class="btn btn-danger">
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      party: {
        dm: "",
        partyCode: ""
      },
      dmName: ''
    };
  }
};
</script>

<style>
#newParty {
  background-color: RGB(70, 68, 68);
  padding: 1% 2% 2% 2%;
  margin-top: 5%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.box input {
  max-width: 35%;
}
em {
  font-size: small;
}
</style>
