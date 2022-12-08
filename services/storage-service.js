import { homedir } from 'os'
import { join, basename, dirname, relative, isAbsolute } from 'path'  // кроссплатформенное разрешение путей

const filePath = join(homedir(), './weather-data.json')

function saveKeyValue(key, value) {
   console.log(basename(filePath))     // вывод последней части пути
   console.log(dirname(filePath))      // вывод последней части пути
   console.log(relative(filePath, dirname(filePath))) // относительный путь
   console.log(isAbsolute(filePath))
}

export { saveKeyValue } 