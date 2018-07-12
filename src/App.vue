<template>
  <div id="app">
    <router-view/>
    <link href="https://fonts.googleapis.com/css?family=Markazi+Text" rel="stylesheet">
  </div>
</template>

<style>
#app {
  font-family: "Markazi Text", serif;
  font-size: 1.4rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
}
body {
  background-image: URL("/background-image2.jpg");
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
.center {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.left {
  display: flex;
  justify-content: flex-end;
  width: 38%;
}
.right {
  display: flex;
  justify-content: flex-start;
  width: 60%;
}
.bold {
  font-weight: bold;
}
ul {
  width: 50%;
  list-style: none;
  margin: 0;
  padding: 2%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
li {
  display: flex;
  justify-content: space-between;
}
img {
  max-width: 100px;
  width: auto;
}
form {
  margin-bottom: 2%;
}
label {
  margin-right: 10px;
}
input {
  max-width: 30%;
}
#myChart {
  margin-top: 20px;
  margin-bottom: 20px;
}
.info {
  text-align: justify;
  margin-top: 10px;
}
.characters {
  display: flex;
  justify-content: center;
  width: 80%;
  flex-wrap: wrap;
  background-color: white;
}
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
.contactLink {
text-decoration: none;
color: red;
}
.contactLink:visited {
  color: red;
}
</style>
