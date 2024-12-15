const ROWS = 6
const COLS = 6
const BLOCK_SIZE = 50
const COOLDOWN = 1000
let isFlipped = false

function createTiles(row, col) {
  const tile = document.createElement("div")
  tile.className = "tile"
  tile.innerHTML = `
    <div class="tile-face tile-front"></div>
    <div class="tile-face tile-back"></div>
  `

  const bgPosition = `${col * 20}% ${row * 20}%`
  tile.querySelector(".tile-front").style.backgroundPosition = bgPosition
  tile.querySelector(".tile-back").style.backgroundPosition = bgPosition

  return tile
}

function createBoard() {
  const board = document.querySelector(".board")
  for (let i = 0; i < ROWS; i++) {
    const row = document.createElement("div")
    row.className = "row"
    for (let j = 0; j < COLS; j++) {
      row.appendChild(createTiles(i, j))
    }
    board.appendChild(row)
  }
}

function initializeTileAnimation() {
  const tiles = document.querySelectorAll(".tile")
  tiles.forEach((tile, index) => {
    let lastEnterTime = 0

    tile.addEventListener("mouseenter", () => {
      const currentTime = Date.now()
      if (currentTime - lastEnterTime > COOLDOWN) {
        lastEnterTime = currentTime

        let tiltY
        if (index % 6 === 0) {
          tiltY = -40
        } else if (index % 6 === 5){
          tiltY = 40
        } else if (index % 6 === 1){
          tiltY = -20
        } else if (index % 6 === 4){
          tiltY = 20
        } else if (index % 6 === 2){
          tiltY = -10
        } else {
          tiltY = 10
        }

        animateTile(tile, tiltY)
      }
    })
  })

  const flipButton = document.getElementById("flipButton")
  flipButton.addEventListener("click", () => flipAllTiles(tiles))
}

function animateTile(tile, tiltY) {
  gsap
    .timeline()
    .set(tile, {rotateX: isFlipped ? 180 : 0, rotateY: 0})
    .to(tile, {rotateX: isFlipped ? 450 : 270, rotateY: tiltY, duration: 0.5, ease: "power2.out"})
    .to(tile, {rotateX: isFlipped ? 540 : 360, rotateY: 0, duration: 0.5, ease: "power2.out"}, "-=0.25")
}

function flipAllTiles(tiles) {
  isFlipped = !isFlipped
  gsap.to(tiles, {
    rotateX: isFlipped ? 180 : 0,
    duration: 1,
    stagger: {
      amount: 0.5,
      from: "random"
    },
    ease: "power2.inOut"
  })
}

function init() {
  createBoard()
  initializeTileAnimation()
}

document.addEventListener("DOMContentLoaded", init)