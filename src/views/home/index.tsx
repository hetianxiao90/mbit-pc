import React from 'react'

import './index.scss'
import { testApi } from '@/api'
const test = async () => {
  let data: any = await testApi({ test: 1 })
  console.log(data)
}
const Home = () => {
  return (
    <div className='home' onClick={() => test()}>
      哈哈哈
    </div>
  )
}
export default Home
