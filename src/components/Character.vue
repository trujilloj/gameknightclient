<template>
    <b-card id="card-background">

        <ul class="characterList" v-show="!update">
        <h2 class="bold">{{character.characterName}}</h2>
            <li class="characterCard">
                <div class="bold leftCard">Player:</div> 
                <div class="rightCard">{{character.playerName}}</div></li>
            <li class="characterCard">
                <div class="bold leftCard">Race:</div> 
                <div class="rightCard">{{character.race}}</div></li>
            <li class="characterCard">
                <div class="bold leftCard">Class:</div> 
                <div class="rightCard">{{character.class}}</div></li>
            <li class="characterCard">
                <div class="bold leftCard">Loot:</div> 
                <div class="rightCard">{{character.loot}}</div></li>
        </ul>
        <button v-show="!update" class="btn btn-danger" @click.prevent="editCharacter">Edit Character</button>
        <UpdateCharacter :character="character" v-show="update" :editCharacter="editCharacter"/>
    </b-card>
</template>

<script>
import UpdateCharacter from "@/components/UpdateCharacter";

export default {
props: ["character", "findCharacters"],
components: {
UpdateCharacter
},
data() {
return {
    update: false,
    API: {
    PARTIES: "https://gameknightserver.herokuapp.com/parties/",
    MEMBERS: "https://gameknightserver.herokuapp.com/members/"
    }
};
},
methods: {
editCharacter() {
    this.update = !this.update;
    }
}
};
</script>

<style>
UpdateCharacter {
    width: 100%;
}
.characterCard {
display: flex;
justify-content: flex-start;
/* width: 100%; */
}
.characterList {
width: 300px;
display: flex;
justify-content: flex-start;
}
.leftCard {
width: 100px;
}
.rightCard {
width: 200px;
}
</style>