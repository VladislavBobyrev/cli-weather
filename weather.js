#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.services.js";
import { saveKeyValue } from "./services/storage.services.js";

const saveToken = async (token) =>
{
  try
  {
    await saveKeyValue('token', token)
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
}
initCLI()