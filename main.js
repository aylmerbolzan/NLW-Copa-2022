function createGame(player1, hour, player2) {
  return `
  <li>
              <img src="./assets/bandeiras/${player1}.svg" alt="${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/bandeiras/${player2}.svg" alt="${player2}" />
            </li>
  `
}

let delay = -0.5
function createCard(date, day, games) {
  delay = delay + 0.5
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>

          <ul>
            ${games}
          </ul>
        </div>
        `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo",

    createGame("catar", "0 x 2", "equador")
  ) +
  createCard(
    "21/11",
    "segunda",

    createGame("inglaterra", "6 x 2", "irã") +
      createGame("senegal", "0 x 2", "holanda") +
      createGame("estados unidos", "1 x 1", "gales")
  ) +
  createCard(
    "22/11",
    "terça",

    createGame("argentina", "1 x 2", "arábia saudita") +
      createGame("dinamarca", "0 x 0", "tunísia") +
      createGame("méxico", "0 x ", "polônia") +
      createGame("frança", "4 x 1", "austrália")
  ) +
  createCard(
    "23/11",
    "quarta",

    createGame("marrocos", "0 x 0", "croácia") +
      createGame("espanha", "7 x 0", "costa rica") +
      createGame("alemanha", "1 x 2", "japão") +
      createGame("bélgica", "1 x 0", "canadá")
  ) +
  createCard(
    "24/11",
    "quinta",

    createGame("suíça", "1 x 0", "camarões") +
      createGame("portugal", "3 x 2", "gana") +
      createGame("uruguai", "0 x 0", "coreia do sul") +
      createGame("brasil", "2 x 0", "sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",

    createGame("gales", "0 x 2", "irã") +
      createGame("holanda", "1 x 1", "equador") +
      createGame("catar", "1 x 3", "senegal") +
      createGame("inglaterra", "0 x 0", "estados unidos")
  ) +
  createCard(
    "26/11",
    "sábado",

    createGame("tunísia", "0 x ", "austrália") +
      createGame("frança", "2 x 1", "dinamarca") +
      createGame("polônia", "2 x 0", "arábia saudita") +
      createGame("argentina", "2 x 0", "méxico")
  ) +
  createCard(
    "27/11",
    "domingo",

    createGame("japão", "0 x 1", "costa rica") +
      createGame("croácia", "4 x 1", "canadá") +
      createGame("bélgica", "0 x 2", "marrocos") +
      createGame("espanha", "1 x 1", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",

    createGame("camarões", "3 x 3", "sérvia") +
      createGame("brasil", "1 x 0", "suíça") +
      createGame("coreia do sul", "2 x 3", "gana") +
      createGame("portugal", "2 x 0", "uruguai")
  ) +
  createCard(
    "29/11",
    "terça",

    createGame("equador", "1 x 2", "senegal") +
      createGame("irã", "0 x 1", "estados unidos") +
      createGame("holanda", "2 x 0", "catar") +
      createGame("gales", "0 x 3", "inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",

    createGame("tunísia", "7:00", "frança") +
      createGame("polônia", "10:00", "argentina") +
      createGame("austrália", "13:00", "dinamarca") +
      createGame("arábia saudita", "16:00", "méxico")
  ) +
  createCard(
    "01/12",
    "quinta",

    createGame("croácia", "7:00", "bélgica") +
      createGame("japão", "10:00", "espanha") +
      createGame("canadá", "13:00", "marrocos") +
      createGame("costa rica", "16:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",

    createGame("coreia do sul", "7:00", "portugal") +
      createGame("sérvia", "10:00", "suíça") +
      createGame("gana", "13:00", "uruguai") +
      createGame("camarões", "16:00", "brasil")
  ) +
  createCard(
    "03/12",
    "sábado",

    createGame("a confirmar", "12:00", "a confirmar") +
      createGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "04/12",
    "domingo",

    createGame("a confirmar", "12:00", "a confirmar") +
      createGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "05/12",
    "segunda",

    createGame("a confirmar", "12:00", "a confirmar") +
      createGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "06/12",
    "terça",

    createGame("a confirmar", "12:00", "a confirmar") +
      createGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "09/12",
    "sexta",

    createGame("a confirmar", "12:00", "a confirmar") +
      createGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "10/12",
    "sábado",

    createGame("a confirmar", "12:00", "a confirmar") +
      createGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "13/12",
    "terça",

    createGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "14/12",
    "quarta",

    createGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "17/12",
    "sábado",

    createGame("a confirmar", "12:00", "a confirmar")
  ) +
  createCard(
    "18/12",
    "domingo",

    createGame("a confirmar", "12:00", "a confirmar")
  )
