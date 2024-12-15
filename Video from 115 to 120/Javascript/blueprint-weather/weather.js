const panel = document.querySelector('div.weather')
const temp = panel.querySelector('h2')
const weather = panel.querySelector('p')
const body = document.querySelector('body')

const codeToWeather = (code) => {
  switch (code) {
    case 0:
      return "Clear skies"
    case 1:
      return "Mainly clear"
    case 2:
      return "Cloudy"
    case 3:
      return "Overcast"
    default:
      return "Unkown"
  }
}

const codeToClass = (code) => {
  switch (code) {
    case 0:
    case 1:
      return "clear"
    case 2:
    case 3:
      return "cloud"
    default:
      return ""
  }
}

const grab = async () => {
  const request = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=Asia%2FBangkok&forecast_days=1')
  const response = await request.json()

  temp.innerHTML = `${Math.round(response.current.temperature_2m)}°F`
  weather.innerHTML = codeToWeather(response.current.weather_code)
  body.classList.add(codeToClass(response.current.weather_code))
}

grab()