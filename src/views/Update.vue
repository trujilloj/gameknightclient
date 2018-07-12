<template>
  <div>
    <Header />
    <h1 v-show="!partyForm">Update Your Party</h1>
    <form v-show="!partyForm" id="partySearch" v-on:submit.prevent="findParty(); partyForm = !partyForm">
      <div class="center">
        <input type="text" class="form-control" placeholder="Enter your party ID" v-model="partyCode" pattern="[a-zA-Z0-9-^\S+$]+" maxlength="6" minlength="6">
      </div>
      <input class="btn btn-danger" id="submit" type="submit" value="Load Party"/>
    </form>
    <div class="centerBox" v-show="partyForm">
      <form id="updateParty" class="box" v-on:submit.prevent="updateParty()" v-show="!switchForm">
        <h1>Update Your Party</h1>
        <input id="dmName" type="text" class="form-control  mb-2 mr-sm-2" placeholder="DM Name">
        <input id="xp" type="text" class="form-control  mb-2 mr-sm-2" placeholder="Party XP">
        <input id="partyMembers" type="text" class="form-control  mb-2 mr-sm-2" placeholder="Party Members">
        <textarea id="lastSession" type="text" class="form-control" placeholder="Notes from last session."></textarea>
        <input class="btn btn-danger" id="submit" type="submit" value="Update Party"/>
        <button class="btn btn-danger" @click.prevent="switchForm = !switchForm"> Add a Party Member
        </button>
      </form>
      <div class="box" v-show="switchForm">
      <CreateCharacter class="box" :partyCode="partyCode" :switchView="switchView"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import CreateCharacter from "@/components/CreateCharacter.vue";

export default {
  components: {
    Header,
    Footer,
    CreateCharacter
  },
  data() {
    return {
      partyCode: "",
      partyForm: false,
      switchForm: false,
      parties: {
        dmName: "",
        xp: "",
        lastSession: "",
        partyMembers: ""
      },
      API: {
        PARTIES: "https://gameknightserver.herokuapp.com/parties/",
        MEMBERS: "https://gameknightserver.herokuapp.com/members/"
      }
    };
  },
  methods: {
    findParty() {
      fetch(this.API.PARTIES + this.partyCode)
        .then(res => res.json())
        .then(res => {
          this.parties = res.party;
        })
        .then(res => {
          document.querySelector("#dmName").value = this.parties.dmName;
          document.querySelector("#xp").value = this.parties.xp;
          document.querySelector(
            "#lastSession"
          ).value = this.parties.lastSession;
          document.querySelector(
            "#partyMembers"
          ).value = this.parties.partyMembers;

          if (this.parties == undefined) {
            window.alert("Please enter a valid party code.");
          }
        });
    },
    updateParty() {
      fetch(this.API.PARTIES + this.partyCode, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          dmName: document.querySelector("#dmName").value,
          xp: document.querySelector("#xp").value,
          lastSession: document.querySelector("#lastSession").value,
          partyMembers: document.querySelector("#partyMembers").value
        })
      })
        .then(response => response.json())
        .catch(error => console.error(`Fetch Error =\n`, error));
    },
    switchView() {
      this.switchForm = false;
      this.partyForm = false;
    }
  }
};
</script>

<style>
textarea {
  max-width: 35.5%;
  height: 15rem;
}
.btn {
  margin-top: 10px;
}
</style>