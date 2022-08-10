import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.services.js";

/**
 * функция получаения погоды
 * @param sity город для которого хотим узнать погоду
 */
const getWeather = async (city) =>
{
  // пл=олучаем окен для входа в api  https://openweathermap.org/current
  const token = await getKeyValue(TOKEN_DICTIONARY.token)

  if (!token)
  {
    throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
  }

  // передаем запрос по адресу с query параметрами
  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      // передаем город
      q: city,
      // передаем токен из сайта
      appid: token,
      // язык
      lang: 'ru',
      // мере измерения
      units: 'metric',
    }
  })
  // получаем ответ
  return data
}

/**
 *  функция обрабатывает переданную иконку и устанавливает нашу
 * @param {icon} icon  иконка из API
 * @returns эмоджи
 */
const getIcon = (icon) =>
{
  // устанавливаем иконку для погоды
  switch (icon.slice(0, -1))
  {
    case '01': return "☀️"
    case '02': return "​⛅"
    case '03': return "​☁️"
    case '04': return "​​🌧️"
    case '09': return "​​☔"
    case '10': return "​​🌦️"
    case '11': return "​​⛈️"
    case '13': return "​​​❄️"
    case '50': return "​​​🌫️"
  }
}
export { getWeather, getIcon }