import React from 'react'
import './index.scss'
import navImgUser from '@assets/images/layout/nav_user.png'
import navImgDownload from '@assets/images/layout/nav_download.png'

// 全局头部
const Nav = () => {
  return (
    <div data-component='nav'>
      {/* 导航 */}
      <div className='nav-left'>
        <div className='tab'>充币</div>
        <div className='tab'>行情</div>
        <div className='tab'>币币交易</div>
        <div className='tab'>合约交易</div>
        <div className='tab nav-switch'>
          理财
          <svg className='svg-switch' aria-hidden='true'>
            <use xlinkHref='#nav_switch'></use>
          </svg>
          <div className='nav-hover-con'>
            {/* 质押借贷 */}
            <div className='item'>
              <div className='item-left'>
                <svg aria-hidden='true'>
                  <use xlinkHref='#nav_computing_power'></use>
                </svg>
                算力市场
              </div>
              <svg className='icon-hover' aria-hidden='true'>
                <use xlinkHref='#nav_right'></use>
              </svg>
            </div>
            {/* 算力市场 */}
            <div className='item'>
              <div className='item-left'>
                <svg aria-hidden='true'>
                  <use xlinkHref='#nav_computing_power'></use>
                </svg>
                FIL挖矿
              </div>
              <svg className='icon-hover' aria-hidden='true'>
                <use xlinkHref='#nav_right'></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* 个人中心、切换语言 */}
      <div className='nav-right'>
        {/* 个人中心 */}
        <div className='nav-user'>
          {/* 用户模块，未登录 */}
          <div className='not-logged-in'>
            <div className='login'>登录</div>
            <div className='register'>注册</div>
          </div>
          {/* 用户模块，已登录 */}
          <div className='logged-in'>
            {/* 订单 */}
            <div className='item nav-switch'>
              订单
              <svg className='svg-switch' aria-hidden='true'>
                <use xlinkHref='#nav_switch'></use>
              </svg>
              <div className='nav-hover-con'>
                {/* 币币订单 */}
                <div className='item'>
                  <svg className='svg-border' aria-hidden='true'>
                    <use xlinkHref='#nav_border'></use>
                  </svg>
                  币币订单
                </div>
                {/* 合约订单 */}
                <div className='item'>
                  <svg className='svg-border' aria-hidden='true'>
                    <use xlinkHref='#nav_border'></use>
                  </svg>
                  合约订单
                </div>
              </div>
            </div>
            {/* 资产 */}
            <div className='item nav-switch'>
              资产
              <svg className='svg-switch' aria-hidden='true'>
                <use xlinkHref='#nav_switch'></use>
              </svg>
              <div className='nav-hover-con'>
                {/* 资产管理 */}
                <div className='item'>
                  <svg className='svg-border' aria-hidden='true'>
                    <use xlinkHref='#nav_assets'></use>
                  </svg>
                  资产管理
                </div>
              </div>
            </div>
            {/* 用户头像 */}
            <div className='item nav-switch'>
              <svg className='svg-user' aria-hidden='true'>
                <use xlinkHref='#nav_user'></use>
              </svg>
              <div className='nav-hover-con nav-user-tab'>
                <div className='user-top'>
                  <img src={navImgUser} alt='' />
                  hetianxiao90@163.com
                </div>
                <div className='user-bottom'>
                  {/* 总览 */}
                  <div className='item'>
                    <svg className='svg-border' aria-hidden='true'>
                      <use xlinkHref='#nav_overview'></use>
                    </svg>
                    总览
                  </div>
                  {/* 安全管理 */}
                  <div className='item'>
                    <svg className='svg-border' aria-hidden='true'>
                      <use xlinkHref='#nav_safe'></use>
                    </svg>
                    安全管理
                  </div>
                  {/* 实名认证 */}
                  <div className='item'>
                    <svg className='svg-border' aria-hidden='true'>
                      <use xlinkHref='#nav_card'></use>
                    </svg>
                    实名认证
                  </div>
                  <div className='item-split'></div>
                  {/* 退出登录 */}
                  <div className='item'>
                    <svg className='svg-border' aria-hidden='true'>
                      <use xlinkHref='#nav_out'></use>
                    </svg>
                    退出登录
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 分割 */}
        <div className='header-split'></div>
        {/* 切换语言、下载 */}
        <div className='nav-other'>
          <div className='item nav-switch nav-download'>
            <svg aria-hidden='true'>
              <use xlinkHref='#nav_download'></use>
            </svg>
            <div className='nav-hover-con'>
              <div className='title'>扫码下载app</div>
              <div className='QRCode'>
                <img src={navImgDownload} alt='' />
              </div>
            </div>
          </div>
          <div className='item nav-switch nav-lang'>
            <svg aria-hidden='true'>
              <use xlinkHref='#nav_map'></use>
            </svg>
            <div className='nav-hover-con'>
              <div className='title'>语言</div>
              <div className='item'>
                简体中文
                <svg aria-hidden='true'>
                  <use xlinkHref='#nav_check'></use>
                </svg>
              </div>
              <div className='item'>
                English
                <svg aria-hidden='true'>
                  <use xlinkHref='#nav_check'></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Nav
