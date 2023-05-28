const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";
const pokemonContainer = document.querySelector(".pokemon-todos");

function getRandomNumber() {
  // recuperamos un número aleatorio entre 0 y 1
  const random = Math.random(); // por ejemplo: 0.6803487380457318
  // lo multiplicamos por 10 para que esté entre 0 y 10
  const multiplied = random * 1010; // -> 6.803487380457318
  // redondeamos hacia abajo para que esté entre 0 y 9
  const rounded = Math.floor(multiplied); // -> 6
  // le sumamos uno para que esté entre 1 y 10
  const result = rounded + 1; // -> 7
  // devolvemos el resultado
  return result;
}

var cantidadPokemons = 10;
var myArray = [];
var nombresPokemon = [];

while (myArray.length < cantidadPokemons) {
  var numeroAleatorio = getRandomNumber();
  var existe = false;

  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] == numeroAleatorio) {
      existe = true;
      break;
    }
  }

  if (!existe) {
    myArray[myArray.length] = numeroAleatorio;

    fetch(URL + numeroAleatorio)
      .then((response) => response.json())
      .then((data) => mostrarPokemon(data));
  }
}

/*function myFunction(e) {
  const input = document.getElementById("pokemonName").value.toLowerCase();

  let temp = "";
  const result = nombresPokemon.filter((item) =>
    item.toLowerCase().toString().includes(input)
  );

  if (result.length > 0) {
    result.forEach((item) => {
      mostrarPokemon(item.poke);
    });
  }
}*/

function mostrarPokemon(poke) {
  let tipos = poke.types.map(
    (type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`
  );
  tipos = tipos.join("");

  let pokeId = poke.id.toString();
  if (pokeId.length === 1) {
    pokeId = "00" + pokeId;
  } else if (pokeId.length === 2) {
    pokeId = "0" + pokeId;
  }

  nombresPokemon.push(poke.name);

  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}kg</p>
            </div>
        </div>
    `;
  listaPokemon.append(div);
  createPokemon(poke);
}

function createPokemon(pokemon) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  card.appendChild(spriteContainer);

  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");

  cardBack.appendChild(progressBars(pokemon.stats));

  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  pokemonContainer.appendChild(flipCard);
}

function progressBars(stats) {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  for (let i = 0; i < 3; i++) {
    const stat = stats[i];

    const statPercent = stat.base_stat / 2 + "%";
    const statContainer = document.createElement("stat-container");
    statContainer.classList.add("stat-container");

    const statName = document.createElement("p");
    statName.textContent = stat.stat.name;

    const progress = document.createElement("div");
    progress.classList.add("progress");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 200);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);
  }

  return statsContainer;
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

botonesHeader.forEach((boton) =>
  boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
      fetch(URL + getRandomNumber())
        .then((response) => response.json())
        .then((data) => {
          if (botonId === "ver-todos") {
            nombresPokemon = [];
            mostrarPokemon(data);
          } else {
            const tipos = data.types.map((type) => type.type.name);
            if (tipos.some((tipo) => tipo.includes(botonId))) {
              mostrarPokemon(data);
            }
          }
        });
    }
  })
);
