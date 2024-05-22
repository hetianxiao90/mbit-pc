import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import LayoutHeader from './components/header'
import LayoutFooter from './components/footer'

const LayoutIndex = () => {
  const { Content } = Layout
  return (
    <>
      <LayoutHeader></LayoutHeader>
      <Content>
        <Outlet></Outlet>
      </Content>
      <LayoutFooter></LayoutFooter>
    </>
  )
}

export default LayoutIndex
