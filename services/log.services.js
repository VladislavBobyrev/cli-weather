import chalk from "chalk"

// функция красиваго вывода в консоль погоды
const printWeather = (res, icon) =>
{
  console.log(`${chalk.bgYellow('  SUCCESS  ')}  ${chalk.bgGreenBright('  Погода в городе  ' + res.name ) }
${chalk.green(`${res.weather[0].description}  ${icon}
Темперетура: ${ res.main.temp} (Ощущается как ${res.main.feels_like})
Влажность: ${res.main.humidity}%
Скорость ветра: ${res.wind.speed} ms`)}
  `)
}

// функция красиваго вывода в консоль ошибки
const printError = (error) =>
{
  console.log(chalk.bgRed(` ERROR ${error}`))
}

// функция красиваго вывода в консоль успешно выполненной задачи
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

export { printError, printHelp, printSuccess, printWeather }