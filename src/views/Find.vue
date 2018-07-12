<template>
    <div class="home">
        <Header />
        <h1 v-show="!display">Find Your Party</h1>
        <form v-show="!display" id="userSearch" v-on:submit.prevent="findParty(); findCharacters(); display = !display">
            <div class="center">
        <input type="text" class="form-control" placeholder="Enter your party ID" v-model="partyCode" pattern="[a-zA-Z0-9-^\S+$]+" maxlength="6" minlength="6">
            </div>
            <input class="btn btn-danger" id="submit" type="submit" value="Load Party"/>
        </form>
        <div class="centerBox" v-show="display">
          <div class="box">
          <h1>Your Party</h1>
          <ul>
            <li><div class="left bold">DM:</div> <div class="right">{{parties.dmName}}</div></li>
            <li><div class="left bold">Party Members:</div> <div class="right">{{parties.partyMembers}}</div></li>
            <li><div class="left bold">Party Level:</div> <div class="right" id="partyLevel" :value="partyLevel.length">{{partyLevel.length}}</div></li>        
            <li><div class="left bold">Experience Points:</div> <div class="right" id="xp" :value="parties.xp">{{parties.xp}}</div></li>
            <li><canvas id="myChart"></canvas></li>
            <li><div class="bold">Last Session Notes:</div></li>
            <li><div class="info">{{parties.lastSession}}</div></li>
          </ul>
          </div>
          <div class="box">
            <h1 class="bold">Party Members</h1>
          <div class="characters">
            <Character v-for="character in characters[0]" v-bind:key="character.id" :findCharacters="findCharacters" :character="character"/>
          </div>
            <button class="btn btn-danger" @click.prevent="display = !display">Find another Party</button>
          </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Character from "@/components/Character.vue";

export default {
  components: {
    Header,
    Footer,
    Character
  },
  data() {
    return {
      display: false,
      partyCode: "",
      parties: {},
      characters: [],
      partyLevel: [],
      levelData: [
        0,
        300,
        900,
        2700,
        6500,
        14000,
        23000,
        34000,
        48000,
        64000,
        85000,
        100000,
        120000,
        140000,
        165000,
        195000,
        225000,
        265000,
        305000,
        355000,
        0
      ],
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
          this.levelData[0] = 0;
          this.levelData[20] = this.parties.xp;
          this.findLevel();
          this.createGraph();
        });
    },
    findCharacters() {
      this.characters = [];
      fetch(this.API.MEMBERS + this.partyCode)
        .then(res => res.json())
        .then(res => {
          this.characters.push(res.member);
        });
    },
    createGraph() {
      var ctx = document.getElementById("myChart").getContext("2d");
      var chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Level 1",
            "Level 2",
            "Level 3",
            "Level 4",
            "Level 5",
            "Level 6",
            "Level 7",
            "Level 8",
            "Level 9",
            "Level 10",
            "Level 11",
            "Level 12",
            "Level 13",
            "Level 14",
            "Level 15",
            "Level 16",
            "Level 17",
            "Level 18",
            "Level 19",
            "Level 20",
            "Your XP"
          ],
          datasets: [
            {
              label: "Experience Points for Level",
              backgroundColor: "red",
              data: this.levelData
            }
          ]
        },

        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                },
                scaleLabel: {
                  labelString: "Experience Points",
                  display: true
                }
              }
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }
      });
    },
    async findLevel() {
      this.partyLevel = [];
      for (var i = 0; this.parties.xp >= this.levelData[i]; i++) {
        this.partyLevel.push(this.levelData[i]);
      }
    }
  }
};
</script>

<style>

</style>