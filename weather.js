#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.services.js";
import { printError, printHelp, printSuccess } from "./services/log.services.js";
import { saveKeyValue,TOKEN_DICTIONARY } from "./services/storage.services.js";

const saveToken = async (token) =>
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

const initCLI = () =>
{
  const args = getArgs(process.argv)
  
  if (args.h)
  {
    // вывод help
    printHelp()
  }
  
  if (args.s)
  {
    // созранить город
  }
  
  if (args.t)
  {
   return saveToken(args.t)
  }
  // вывести погоду
  getWeather('moscow')
}
initCLI()