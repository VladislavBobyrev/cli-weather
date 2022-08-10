import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'

// получайм путь до файла в который будем сохранть данные
const filePath = join(homedir(), 'weather-data.json')

// переменнай храник ключи обьекта сохраненного в файл
const TOKEN_DICTIONARY = {
  token: "token",
  city: "city",
}

/**
 * функция сохраняет переданное значение по ключу
 * @param {*} key ключ
 * @param {*} value переданное значение
 */
const saveKeyValue = async (key, value) =>
{
  let data = {}
  // если данные существуют то перезапишем файл
  if (await isExist(filePath))
  {
    const file = await promises.readFile(filePath)
    data = JSON.parse(file)
  }
  // если данные не существуют то запишем в файл
  data[key] = value
  await promises.writeFile(filePath,JSON.stringify(data))
}

/**
 * функция получает значение по ключу
 * @param {*} key ключ
 */
const getKeyValue = async (key) =>
{
  if (await isExist(filePath))
  {
    const file = await promises.readFile(filePath)
    const data = JSON.parse(file)
    return data[key]
  }
  return undefined
}

/**
 * функция проверяет существует ли файл
 * @param {*} key ключ
 */
const isExist = async (path) =>
{
  try
  {
    await promises.stat(path)
    return true
  } catch (e)
  {
    return false
  }
}

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY }