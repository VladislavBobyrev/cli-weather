#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";

const initCLI = () =>
{
  const args = getArgs(process.argv)
  console.log(args)
  
  if (args.h)
  {
    // вывод help
  }
  
  if (args.s)
  {
    // созранить город
  }
  
  if (args.t)
  {
    // вывести погоду
  }
}
initCLI()