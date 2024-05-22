import { makeAutoObservable } from 'mobx'
import { setLang, getLang } from '@/utils'
import i18n from 'i18next'

class LangStore {
  lang: string = getLang()
  constructor() {
    makeAutoObservable(this)
  }
  getLang = () => {
    return this.lang
  }
  setLang = (lang: string) => {
    this.lang = lang
    i18n.changeLanguage(this.lang)
    setLang(this.lang)
  }
}
export default LangStore
