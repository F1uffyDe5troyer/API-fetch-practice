fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.results.length; i++) {
      document.getElementById("poke-list").innerHTML += `
        <li><button onclick="getPokemon('${data.results[i].url}')">${data.results[i].name}</button></li>
      `;
    }
  });

function getPokemon(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      document.getElementById("display").innerHTML = `
        <h1>${data.species.name}</h1>
        <img src="${data.sprites.front_default}">
      `;
    });
}
const circle = {
  radius: 1,
  draw(){
    console.log('draw');
  }
};
