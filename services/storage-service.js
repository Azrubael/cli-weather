import { homedir } from 'os'
// импортируем библиотеку для кроссплатформенного разрешения путей
import { join, basename, dirname, relative, isAbsolute } from 'path'  
import { promises } from 'fs'

const filePath = join(homedir(), './weather-data.json')

const TOKEN_DIC = {
   token: 'token',
   city: 'city'
}

async function saveKeyValue(key, value) {
   let data = {}
   if (await isExist(filePath)) {
      const file = await promises.readFile(filePath)
      data = JSON.parse(file)
   }
   data[key] = value
   await promises.writeFile(filePath, JSON.stringify(data))
}

// получение 'value' по 'key', если файл существует
const getKeyValue = async (key) => {
   if (await isExist(filePath)) {
      const file = await promises.readFile(filePath)
      let data = JSON.parse(file)
      return data[key]   
   }
   return undefined
}

// проверка существования файла (если путь существует)
const isExist = async (path) => {
   try {
      await promises.stat(path)
      return true
   } catch(e) {
      return false
   }
   
}

export { saveKeyValue, getKeyValue, TOKEN_DIC } 