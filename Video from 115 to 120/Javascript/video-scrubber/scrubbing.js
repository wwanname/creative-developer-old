const section = document.querySelector('section.vid')
const vid = section.querySelector('video')

vid.pause()

const scroll = () => {
  const distance = window.scrollY - section.offsetTop
  const total = section.clientHeight - window.innerHeight

  let percentage = distance / total
  percentage = Math.max(0, percentage) //avoid negative value, limit
  percentage = Math.min(percentage, 1) //avoid go over one value, limit

  if (vid.duration > 0) {
    vid.currentTime = vid.duration * percentage
  }
  console.log([distance, total, percentage])
}

scroll()
window.addEventListener("scroll", scroll)