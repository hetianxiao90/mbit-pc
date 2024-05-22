import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLang } from '@utils/index'
// 导入翻译文件
import en from './locales/en.json'
import zh from './locales/zh.json'

// 拼接配置文件
const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
}

// 默认语言
const lng = getLang()
i18n
  .use(initReactI18next) // 将 i18n 实例传递给 react-i18next
  .init({
    resources,
    fallbackLng: lng,
    lng: lng,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })
export default i18n
