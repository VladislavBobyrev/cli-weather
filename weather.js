#!/usr/bin/env node
// даем понять среде выполнения что это входной файл

import { getArgs } from "./helpers/args.js";
import { getWeather, getIcon } from "./services/api.services.js";
import { printError, printHelp, printSuccess, printWeather } from "./services/log.services.js";
import { getKeyValue, saveKeyValue,TOKEN_DICTIONARY} from "./services/storage.services.js";

/**
 * функция сохраняет токен для  входа в API токен по умолчанию '-t 6f6a13e515ceb4a014be72883fe7a48f'
 * @param {*} token  токен
 * @returns 
 */
const saveToken = async (token = '6f6a13e515ceb4a014be72883fe7a48f') =>
{
  if (!token.length)
  {
    printError('Не передан токен')
    return
  }
  try
  {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess(' Токен сохранен ')
  } catch (e)
  {
    printError(e.message)
  }
}

/**
 * функция сохраняет город для  получения текущей погоды
 * @param {*} city  город
 */
const saveCity = async (city) =>
{
  if (!city.length)
  {
    printError(' Не передан город ')
    return
  }
  try
  {
    await saveKeyValue(TOKEN_DICTIONARY.city, city)
    printSuccess(' Город сохранен ')
  } catch (e)
  {
    printError(e.message)
  }
}

/**
 * функция собирает информацию о погоде проверяет на ошибки
 */
const getForcast = async () =>
{
  try
  {
    const sity = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
    const weather = await getWeather(sity)
    printWeather(weather, getIcon(weather.weather[0].icon))
  } catch (e)
  {
    console.log(e)
    if (e?.response?.status == 404)
    {
      printError(' Неверно указан город ')
    } else if (e?.response?.status == 401)
    {
      printError(' Неверно указан токен ') 
    } else
    {
      printError(e.message) 
    }
  }
}

// инициализация проекта
const initCLI = () =>
{
  const args = getArgs(process.argv)
  
  if (args.h)
  {
    // вывод help
    return printHelp()
  }
  
  if (args.s)
  {
    // сохранить город
    return saveCity(args.s)
  }
  
  if (args.t)
  {
    // сохранить токен
   return saveToken(args.t)
  }
  // вывод погоды
  return getForcast()
}
initCLI()