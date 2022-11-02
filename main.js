function createGame(player1, hour, player2) {
  return `
  <li>
              <img src="./assets/bandeiras/${player1}.svg" alt="${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/bandeiras/${player2}.svg" alt="${player2}" />
            </li>
  `
}

function createCard(date, day, games) {
  return `
  <div class="card">
          <h2>${date} <span>${day}</span></h2>

          <ul>
            ${games}
          </ul>
        </div>
        `
}

document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logo.svg" alt="Logo NLW Copa" />
      </header>

      <main id="cards">
        ${createCard(
          "24/11",
          "quinta",
          createGame("brasil", "16:00", "sérvia")
        )}
        ${createCard(
          "28/11",
          "segunda",
          createGame("brasil", "13:00", "suíça")
        )}
        ${createCard(
          "02/12",
          "sexta",
          createGame("camarões", "16:00", "brasil")
        )}
      </main>
`
