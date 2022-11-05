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

    createGame("catar", "13:00", "equador")
  ) +
  createCard(
    "21/11",
    "segunda",

    createGame("inglaterra", "10:00", "irã") +
      createGame("senegal", "13:00", "holanda") +
      createGame("estados unidos", "16:00", "gales")
  ) +
  createCard(
    "22/11",
    "terça",

    createGame("argentina", "7:00", "arábia saudita") +
      createGame("dinamarca", "10:00", "tunísia") +
      createGame("méxico", "13:00", "polônia") +
      createGame("frança", "16:00", "austrália")
  ) +
  createCard(
    "23/11",
    "quarta",

    createGame("marrocos", "7:00", "croácia") +
      createGame("espanha", "10:00", "costa rica") +
      createGame("alemanha", "13:00", "japão") +
      createGame("bélgica", "16:00", "canadá")
  ) +
  createCard(
    "24/11",
    "quinta",

    createGame("suíça", "7:00", "camarões") +
      createGame("portugal", "10:00", "gana") +
      createGame("uruguai", "13:00", "coreia do sul") +
      createGame("brasil", "16:00", "sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",

    createGame("gales", "7:00", "irã") +
      createGame("holanda", "10:00", "equador") +
      createGame("catar", "13:00", "senegal") +
      createGame("inglaterra", "16:00", "estados unidos")
  ) +
  createCard(
    "26/11",
    "sábado",

    createGame("tunísia", "7:00", "austrália") +
      createGame("frança", "10:00", "dinamarca") +
      createGame("polônia", "13:00", "arábia saudita") +
      createGame("argentina", "16:00", "méxico")
  ) +
  createCard(
    "27/11",
    "domingo",

    createGame("japão", "7:00", "costa rica") +
      createGame("croácia", "10:00", "canadá") +
      createGame("bélgica", "13:00", "marrocos") +
      createGame("espanha", "16:00", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",

    createGame("camarões", "7:00", "sérvia") +
      createGame("brasil", "10:00", "suíça") +
      createGame("coreia do sul", "13:00", "gana") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "terça",

    createGame("equador", "7:00", "senegal") +
      createGame("irã", "10:00", "estados unidos") +
      createGame("holanda", "13:00", "catar") +
      createGame("gales", "16:00", "inglaterra")
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
