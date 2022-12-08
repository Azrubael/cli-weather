#!usr/bin/env node

// При запуске CLI-модуля можут быть установлена директива запуска
// модуля с использованием NodeJS:

import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess } from './services/log-service.js'
import { saveKeyValue } from './services/storage-service.js'

const initCLI = () => {
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
		saveKeyValue('token', args.t)
	}
	// Иначе вывести погоду с текущими настройками
	let msg = ''
	printSuccess(msg)
}

initCLI()
