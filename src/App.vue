<template>
  <div id="app">
    <router-view/>
    <link href="https://fonts.googleapis.com/css?family=Chela+One" rel="stylesheet">
  </div>
</template>

<style>
#app {
  font-family: fantasy;
  font-size: 1.2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
}
body {
  background-image: URL('/background-image2.jpg');
  background-size: cover;
  width: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  margin: 0px;
  }

.centerBox {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  }
.box {
  background-color: white;
  width: 80%;
  padding: 40px;
  margin-bottom: 3%;
  color: black;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}  
</style>
