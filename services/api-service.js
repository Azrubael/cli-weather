// 'axios' более удобен, чем 'https', т.к. структурирует не только ввод, но и вывод
import axios from 'axios'
// import https from 'https'  // заменен 'axios'
import { getKeyValue, TOKEN_DIC } from './storage-service.js'

// метод получения погоды
async function getWeather() {
   const token = await getKeyValue(TOKEN_DIC.token)
   const city = await getKeyValue(TOKEN_DIC.city)
   if (!token) {
      throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
   }
   if (!city) {
      throw new Error('Не задан город, задайте его через команду -s [CITY]')
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

// метод подбора иконки погоды, как эмодзи
const getIcon = (icon) => {
   switch (icon.slice(0, -1)) {
		case '01':
			return '☀️'
		case '02':
			return '🌤️'
		case '03':
			return '☁️'
		case '04':
			return '☁️'
		case '09':
			return '🌧️'
		case '10':
			return '🌦️'
		case '11':
			return '🌩️'
		case '13':
			return '❄️'
		case '50':
			return '🌫️'
      default: 
         return '🌤️'
   }
}

export { getWeather, getIcon }