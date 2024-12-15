const headings = document.querySelectorAll('h1, h2')

const easing = (x) => {
  let clampX = Math.max(0, Math.min(x, 1))
  return clampX < 0.5 ? 4 * clampX * clampX * clampX : 1 - Math.pow(-2 * clampX + 2, 3) / 2
}

headings.forEach((heading) => {
  heading.innerHTML = heading.innerHTML
    .split("")
    .map((letter) => {
      return `<span>${letter}</span>`
    })
    .join("")

    const spans = heading.querySelectorAll('span')

    document.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX
      const mouseY = event.clientY

      spans.forEach((span) => {
        const bounds = span.getBoundingClientRect()
        const spanX = bounds.left + bounds.width / 2
        const spanY = bounds.top + bounds.height / 2

        const diffX = mouseX - spanX
        const diffY = mouseY - spanY

        //pytagon
        const distance = Math.sqrt(diffX * diffX + diffY * diffY)

        const normalizedDistance = distance / 600

        const weight = 900 - 800 * easing(normalizedDistance)
        console.log([distance, normalizedDistance, weight])

        span.style.fontVariationSettings = `'wght' ${weight}`
      })
    })
})