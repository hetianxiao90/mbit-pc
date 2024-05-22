import React from 'react'
import { Layout } from 'antd'
import Logo from './components/logo/index'
import Nav from './components/nav/index'
import './index.scss'

// 全局头部
const header = () => {
  const { Header } = Layout
  return (
    <Header data-component='header'>
      <Logo></Logo>
      <div className='header-split'></div>
      <Nav></Nav>
    </Header>
  )
}
export default header
