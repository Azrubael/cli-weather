// 'axios' более удобен, чем 'https', т.к. структурирует не только ввод, но и вывод
import axios from 'axios'
// import https from 'https'  // заменен 'axios'
import { getKeyValue, TOKEN_DIC } from './storage-service.js'

// метод получения погоды
async function getWeather(city) {
   const token = await getKeyValue(TOKEN_DIC.token)
   if (!token) {
      throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
   }
   const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
         q: city,
         appid: token,
         lang: 'ru',
         units: 'metric'
      }
   })
   // console.log(data)    // структурированный вывод объекта 'data'
   return data
}

export { getWeather }