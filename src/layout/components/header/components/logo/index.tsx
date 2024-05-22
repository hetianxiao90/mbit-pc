import React from 'react'
import './index.scss'
let staticImgUrl = process.env.REACT_APP_CDN_URL
// 全局头部
const Logo = () => {
  // logo图片
  const logoImg = staticImgUrl + '/layout/logo.png'
  return (
    <div data-component='logo'>
      <a className='logo-a' href='/'>
        <img src={logoImg} alt='' />
      </a>
    </div>
  )
}
export default Logo
