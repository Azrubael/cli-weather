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

export { printError, printSuccess, printHelp }
