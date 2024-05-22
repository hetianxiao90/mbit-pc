const key = 'lang'
const defaultLang = 'en'
const setLang = (lang: string) => {
  return window.localStorage.setItem(key, lang)
}
const getLang = (): string => {
  return window.localStorage.getItem(key) || defaultLang
}
const removeLang = () => {
  return window.localStorage.removeItem(key)
}
export { setLang, getLang, removeLang }
