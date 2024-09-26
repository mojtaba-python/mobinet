import React from 'react'
import './cart.css';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className='container'>
      <div className='title_cart' style={{ textAlign: 'center' }}>
        <span className='span_cart'> مجله موبی نت </span>
      </div>

      <div className='box_cart'>

        <div className='cart1 col-lg-5 col-md-5'>
          <div className='box_hover_cart'>
            <Link className='link_cart'>ادامه مطلب</Link>
          </div>
        </div>

        <div className='cart2 col-lg-5 col-md-5' >
          <div className='box_hover_cart'>
            <Link className='link_cart'>ادامه مطلب</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
