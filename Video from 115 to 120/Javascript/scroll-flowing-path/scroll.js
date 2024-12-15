const svg = document.querySelector('svg.squiggle')
const path = svg.querySelector('path')

const scroll = () => {
  const distance = window.scrollY
  const totalDistance = svg.clientHeight - window.innerHeight

  let percentage = distance / totalDistance
  percentage = Math.min(percentage, 1)

  const pathLength = path.getTotalLength()

  path.style.strokeDasharray = `${pathLength}`
  path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`
  console.log([percentage, pathLength * (1 - percentage)])
}

scroll()
window.addEventListener('scroll', scroll)
