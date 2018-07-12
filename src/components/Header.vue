<template>
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link to="/">
        <div class="title">
          <img class="logo" src="logo.png" alt="gamenight">
          <a href="" class="text">Game Knight</a>
        </div>
      </router-link>
    </div>
    <div class="rightMenu">
      <router-link to="/Create">Create Your Party</router-link>
      <div> | </div>
      <router-link to="/Update">Update Your Party</router-link>
      <div> | </div>
      <router-link to="/Find">Find Your Party</router-link>
      <div> | </div>
      <router-link to="/About">About</router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {};
</script>

<style scoped>
.rightMenu {
  display: flex;
  justify-content: space-between;
  width: 45%;
  align-items: center;
}
.logo {
  max-width: auto;
  max-height: 80px;
}

nav {
  background-color: gray;
  margin-bottom: 1%;
  max-height: 100px;
  width: 100%;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  font-size: 3.1rem;
  color: black;
  text-decoration: none;
  font-family: "Markazi Text", serif;
}
a:hover {
  text-decoration: none;
  color: white;
}

a {
  margin-left: 12px;
  letter-spacing: 0.3em;
  color: black;
}
</style>