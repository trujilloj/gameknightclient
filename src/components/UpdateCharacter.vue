<template>
    <form class="editChar" v-on:submit.prevent="updateCharacter()">
        <label for="characterName">Character</label>
        <input id="characterName" type="text" class="form-control  mb-2 mr-sm-2" v-model="updatedCharacter.characterName" >
        <input id="race" type="text" class="form-control  mb-2 mr-sm-2" v-model="updatedCharacter.race">
        <input id="class" type="text" class="form-control  mb-2 mr-sm-2" v-model="updatedCharacter.class" >
        <textarea id="loot" type="text" class="form-control" v-model="updatedCharacter.loot" ></textarea>
        <input class="btn btn-danger" id="submit" type="submit" value="Update Character"/>
    </form>
</template>

<script>
export default {
props: ["character", "editCharacter"],
data() {
return {
    updatedCharacter: {
        characterName: this.character.characterName,
        race: this.character.race,
        class: this.character.class,
        loot: this.character.loot
    },
    API: {
    PARTIES: "https://gameknightserver.herokuapp.com/parties/",
    MEMBERS: "https://gameknightserver.herokuapp.com/members/"
    }
};
},
methods: {
updateCharacter() {
    fetch(this.API.MEMBERS + this.character.id, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(this.updatedCharacter)
    })
    .then(response => response.json())
    .catch(error => console.error(`Fetch Error =\n`, error));
}
}
};
</script>

<style>
.editChar input{
max-width: 300px;
}
.editChar textarea{
max-width: 300px;
}
</style>