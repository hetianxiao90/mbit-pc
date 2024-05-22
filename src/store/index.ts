import React from 'react'
import LangStore from '@store/common/lang.Store'
class RootStore {
  langStore
  constructor() {
    this.langStore = new LangStore()
  }
}
const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)
export { useStore }
