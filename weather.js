#!usr/bin/env node

// При запуске CLI-модуля можут быть установлена директива запуска
// модуля с использованием NodeJS:

import { getArgs } from './helpers/args.js'
import { getWeather, getIcon } from './services/api-service.js'
import { printHelp, printSuccess, printError, printWeather } from './services/log-service.js'
import { saveKeyValue, TOKEN_DIC } from './services/storage-service.js'

async function saveToken(token) {
	if (!token.length) {
		printError('Не передан токен')
		return
	}
	try {
		await saveKeyValue(TOKEN_DIC.token, token)
		printSuccess('Токен сохранен')
	} catch(e) {
		printError(e.message)
	}
}

async function saveCity(city) {
	if (!city.length) {
		printError('Не передан город')
		return
	}
	try {
		await saveKeyValue(TOKEN_DIC.city, city)
		printSuccess('Город сохранен')
	} catch(e) {
		printError(e.message)
	}
}

async function getForecast() {
	try {
		const weather = await getWeather()
		// console.log(weather)
		printWeather(weather, getIcon(weather.weather[0].icon))
	}	catch(e) {
		if(e?.response?.status == 404) {
			printError('Неверно указан город')
		} else if(e?.response?.status == 401) {
			printError('Неверно указан токен')
		} else {
			printError(e.message)
		}
	}
	
}

function initCLI() {
	const args = getArgs(process.argv)
	// console.log(args)
	if (args.h) {
		// Вывод help
		return printHelp()
	}
	if (args.s) {
		// Сохранить город
		console.log('Saved CITY: ', args.s)
		return saveCity(args.s)
	}
	if (args.t) {
		// Сохранить токен
		console.log('Saved API_KEY: ', args.t)
		return saveToken(args.t)
	}
	// Иначе вывести погоду с текущими настройками
		printSuccess('Вывод данных о погоде')
		return getForecast()
}

initCLI()
