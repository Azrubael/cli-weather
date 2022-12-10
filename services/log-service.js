// утилита для вывода в командную сроку
import cc from 'chalk'

function printError(err)  {
   console.log(cc.bgRed(' ERROR  ') + err) 
}

function printSuccess(msg)  {
   console.log(cc.bgGreen(' SUCCESS  ') + msg) 
}

function printHelp()  {
   console.log( cc.bgCyan(' HELP  \n') +
      '\tБез параметров   - вывод погоды с текущими настройками \n' +
      '\t-s [CITY]   - для выбора областного центра \n' +
      '\t-h   - вывод справки HELP \n' +
      '\t-t [API_KEY]   - добавление токена \n') 
}

function printWeather(res, icon)  {
   console.log( cc.bgBlueBright(' WEATHER FORECAST  \n') +
      '\tПогода в городе ' + res.name + '\n' +
      '\t' + icon + '\t' + res.weather[0].description + '\n' +
      '\tТемпература :' + res.main.temp + '\n' +
      '\tОщущается как :' + res.main.feels_like + '\n' +
      '\tВлажность :' + res.main.humidity + '\n' +
      '\tСкорость ветра :' + res.wind.speed + '\n' ) 
}

export { printError, printSuccess, printHelp, printWeather }
