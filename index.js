var btn = document.querySelector(".btn");
var text = document.querySelector(".text");
var generate = document.querySelector(".generate");
var container = document.querySelector(".container");

generate.addEventListener("click", () => {
  const id = Math.floor(Math.random() * 150) + 1;
  let data = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  data
    .then((umar) => {
      return umar.json();
    })
    .then((item) => {
      console.log(item);
      container.innerHTML = `<div class="pokemon">
        <img
          src=${item.sprites.other.dream_world.front_default}
          alt=""
          class="img"
        />
        <h2>${item.abilities[0].ability.name}</h2>
      </div>
      <span class = "moves">Moves : </span>
      <div class="btn">
        <button>${item.moves[0].move.name}</button>
        <button>${item.moves[1].move.name}</button>
      </div>
      <div class="text">
        <h3>${item.stats[0].base_stat}</h3>
        <span>Base Stat</span>
        <h3>${item.stats[0].effort}</h3>
        <span>Effort</span>
      </div>`;
    })
    .catch((err) => {
      console.log(err);
    });
});
