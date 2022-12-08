#!usr/bin/env node

// При запуске CLI-модуля можут быть установлена директива запуска
// модуля с использованием NodeJS:

import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError } from './services/log-service.js'
import { saveKeyValue, getKeyValue } from './services/storage-service.js'

async function saveToken(token) {
	try {
		await saveKeyValue('token', token)
		printSuccess('Токен сохранен')
	} catch(e) {
		printError(e.message)
	}
	
}


function initCLI() {
	const args = getArgs(process.argv)

	// листинг актуальных аргументов командной строки
	// console.log('weather Application started:')
	// console.log(args)
	if (args.h) {
		// Вывод help
		printHelp()
	}
	if (args.s) {
		// Сохранить город
	
	}
	if (args.t) {
		// Сохранить токен
		return saveToken(args.t)
	}
	// Иначе вывести погоду с текущими настройками
		printSuccess('Вывод данных о погоде')
}

initCLI()
