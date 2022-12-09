import https from 'https'
import { getKeyValue, TOKEN_DIC } from './storage-service.js'

// метод получения погоды
async function getWeather(city) {
   const token = await getKeyValue(TOKEN_DIC.token)
   if (!token) {
      throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
   }
   // const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
   const url = new URL('https://api.openweathermap.org/data/2.5/weather')
   url.searchParams.append('q', city)
   url.searchParams.append('appid', token)
   url.searchParams.append('lang', 'ru')
   url.searchParams.append('units', 'metric')

   https.get(url, (response) => {
      let result = ''
      response.on('data', (chunk) => {
         result += chunk
      })
      response.on('end', () => {
         console.log(result)
      })
   })
}

export { getWeather }