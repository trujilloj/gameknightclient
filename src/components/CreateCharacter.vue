<template>
  <form>
    <h1>Create a Character</h1>
    <input v-model="character.playerName" class="form-control mb-2 mr-sm-2 wide" type="text" name="playerName" placeholder="Player Name">
    <input name="partyCode" class="form-control mb-2 mr-sm-2" :value=partyCode  pattern="[a-zA-Z0-9-^\S+$]+" maxlength="6" minlength="6" readonly>
    <input v-model="character.characterName" class="form-control mb-2 mr-sm-2" type="text" name="characterName" placeholder="Character Name">
    <input v-model="character.race" class="form-control mb-2 mr-sm-2" type="text" name="race" placeholder="Race">
    <input v-model="character.class" class="form-control mb-2 mr-sm-2" type="text" name="class" placeholder="Class">
    <input v-model="character.loot" class="form-control mb-2 mr-sm-2" type="text" name="loot" placeholder="Loot">
    <input @click.prevent="createParty" type="submit" id="submitButton" name="submit" value="Submit" class="btn btn-danger">
    <button class="btn btn-danger" @click.prevent="switchView">Back to Party Search</button>
  </form>
</template>

<script>
export default {
  props: ["partyCode", "switchView"],
  components: {
  },
  data() {
    return {
      character: {
        playerName: "",
        partyCode: "",
        characterName: "",
        race: "",
        class: "",
        loot: ""
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
        this.character.partyCode = partyCode;
      return fetch(this.API.MEMBERS, {
        headers: {
          "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(this.character)
      })
        .then(res => res.json())
        .then(resJSON => console.log(resJSON));
    },

    async mounted() {
      console.log("trigger");
      Promise.all([fetch(this.API.PARTIES).then(res => res.json())]).then(
        res => {
          this.parties = res;
        }
      );
      Promise.all([fetch(this.API.MEMBERS).then(res => res.json())]).then(
        res => {
          this.members = res;
        }
      );
    }
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
.wide {
  width: 500px;
}
</style>
