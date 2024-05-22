import React from 'react'
// import { useStore } from '@/store'
// import useForceUpdate from 'use-force-update'
import { BrowserRouter } from 'react-router-dom'
import Router from '@/routers/index'
import AuthRouter from '@/components/public/authRouter'
const App: React.FC = () => {
  // const forceUpdate = useForceUpdate()
  // const { langStore } = useStore()
  // const langChange = (lang: string) => {
  //   langStore.setLang(lang)
  //   forceUpdate()
  // }
  return (
    <BrowserRouter>
      <AuthRouter>
        <Router />
      </AuthRouter>
    </BrowserRouter>
  )
}
export default App
