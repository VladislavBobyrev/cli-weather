import chalk from "chalk"
const printError = (error) =>
{
  console.log(chalk.bgRed(` ERROR ${error}`))
}
const printSuccess = (message) =>
{
  console.log(chalk.bgGreen(` SUCCESS ${message}`))
}
const printHelp = () =>
{
  console.log(`${chalk.bgBlue('  HELP  ')}  
  ${chalk.blue(`Без параметров - вывод погоды
  -s [SITY] для установки города
  -h для вывода помощи
  -t [API_KEY] для сохранения токена`)}`)
}

export { printError, printHelp, printSuccess }