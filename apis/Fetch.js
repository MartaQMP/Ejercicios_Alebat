function fetch() {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((reponse) => Response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
