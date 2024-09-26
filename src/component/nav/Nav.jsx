import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Menu() {

  const mouseEnter = () => {
    let div = document.getElementById('sec2_xiaomi');
    let div2 = document.getElementById('sec2_samsung');
    div.style.display = 'flex'
    div2.style.display = 'none'
  }
  const mouseEnterSamsung = () => {
    let div = document.getElementById('sec2_xiaomi');
    let div2 = document.getElementById('sec2_samsung');
    div.style.display = 'none'
    div2.style.display = 'flex'
  }

  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid" style={{ paddingRight: 0 }}>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" dir='rtl' 
          style={{ marginRight: 'inherit !important' }}>

            <li class="nav-item nav_item_hover">
              <Link class="nav-link " style={{ marginRight: 0 }} href="#">
                <i class="bi bi-list"></i> محصولات
              </Link>

              <div className='items_nav'>
                <div style={{ display: 'flex' }}>

                  <div className='sec1_items'>
                    <div className="sec1_subItem">
                      <Link onMouseEnter={mouseEnter} className='xiaomi link_hover'>
                        شیائومی  </Link>
                      <i class="bi bi-caret-left bi_menu_nav"></i>
                    </div>

                    <div className="sec1_subItem">
                      <Link onMouseEnter={mouseEnterSamsung} className='link_hover' > سامسونگ</Link>
                      <i class="bi bi-caret-left bi_menu_nav"></i>
                    </div>

                    <div className="sec1_subItem">
                      <Link className='link_hover' > اپل</Link>
                      <i class="bi bi-caret-left bi_menu_nav"></i>
                    </div>

                    <div className="sec1_subItem">
                      <Link className='link_hover' > لوازم جانبی</Link>
                      <i class="bi bi-caret-left bi_menu_nav"></i>
                    </div>
                  </div>

                  <div className='sec2_nav_items'>
                    <div id='sec2_xiaomi'>
                      <Link className='link_hover' >شیائومی redmi 9</Link>
                      <Link className='link_hover' >شیائومی redmiNot 12Pro</Link>
                      <Link className='link_hover' >شیائومی mi 10Pro</Link>

                    </div>
                    <div id='sec2_samsung'>
                      <Link className='link_hover' >سامسونگ Glaxy Not13</Link>
                      <Link className='link_hover' >سامسونگ S24 </Link>
                    </div>
                  </div>
                </div>

              </div>

            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">لینک</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link" href="#" >
                برندها
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link" href="#" >
                مجله موبی نت
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}
