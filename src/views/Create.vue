<template>
  <div class="home">
    <Header />
    <div class="centerBox">
      <form class="box" >
          <h1>Create Your Party</h1>
          <input v-model="parties.dmName" class="form-control mb-2 mr-sm-2" type="text" name="dmName" placeholder="Dungeon Master's Name">
          <em>Please enter a 6 digit code, 3 letters and 3 numbers without spaces for your Party Code.</em>
          <input v-model="parties.partyCode" name="partyCode" class="form-control mb-2 mr-sm-2" placeholder="Party Code (use this to find your party and update future details)" pattern="[a-zA-Z0-9-^\S+$]+" maxlength="6" minlength="6">
          <input v-model="parties.xp" class="form-control mb-2 mr-sm-2" type="text" name="xp" placeholder="Experience Points">
          <input v-model="parties.partyMembers" class="form-control mb-2 mr-sm-2" type="text" name="partyMembers" placeholder="List of Party Members">
          <textarea v-model="parties.lastSession" class="form-control mb-2 mr-sm-2" type="text" name="lastSession" placeholder="Last session's notes"></textarea>
          <input @click.prevent="createParty" type="submit" id="submitButton" name="submit" value="Submit" class="btn btn-danger">
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
      parties: {
        dmName: "",
        partyCode: "",
        xp: undefined,
        lastSession: "",
        partyMembers: ""
      },
      members: [],
      API: {
        PARTIES: "https://gameknightserver.herokuapp.com/parties",
        MEMBERS: "https://gameknightserver.herokuapp.com/members"
      }
    };
  },
  methods: {
    createParty() {
      return fetch(this.API.PARTIES, {
        headers: {
          "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(this.parties)
      })
        .then(res => res.json())
        .then(resJSON => console.log(resJSON))
        .then(
          (this.parties = {
            dmName: "",
            partyCode: "",
            xp: 0,
            lastSession: "",
            partyMembers: ""
          })
        );
    }
  }
};
</script>

<style>

</style>
