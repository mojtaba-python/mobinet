import { useRef } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { IoCartOutline } from "react-icons/io5";
import Menu from './nav/Nav';
import Search from './search/Search';

export default function Navbar({ counter, handlerCounter, infoCart }) {

  const infoCartRef = useRef();

  var count = 0;


  const handlerCart = () => {
    infoCartRef.current.style.display = "block";
    setTimeout(() => {
      infoCartRef.current.style.display = "none";
    }, 5000);
  };

  const handlerClose = () => {
    infoCartRef.current.style.display = "none";
  }

  return (
    <div
      style={{
        boxShadow: '0px 3px 9px 0px rgba(0,0,0,0.3)',
        marginBottom: '1rem',
        backgroundColor: '#fff'
      }}>
      <div className='container'>
        <div className="nav_container" >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to='/' >
              <img src={logo} alt="logo" style={{ width: '200px', height: '80px' }} />
            </Link>
          </div>

          {/* Search  */}
          <Search />

          <div className='div_login'>
            <div className="box_login">
              <Link to="/login" className='btn' >ورود </Link>
              {'|'}
              <Link to="/login" className='btn'>ثبت نام </Link>
            </div>
            <div className='div_kharid'>
              <span>{counter}</span>
              <Link onClick={handlerCart}>
                <IoCartOutline style={{ height: '30px', width: '30px', color: '#fff' }} />
              </Link>

            </div>
            <div ref={infoCartRef} className="box_info_cart">
              <div className='title_info_cart'>
                <span><i onClick={handlerClose} title='close' class="bi bi-x"></i></span>
                <h5>
                  تعداد کالای موجود در سبد شما :  {counter}
                </h5>
              </div>

              <div className='list_product_cart'>
                {
                  infoCart.map((product, index) => (
                    <div>
                      <span>
                        {count++}_{" "}
                        {product.name}
                      </span>
                      <span>{product.price} تومان</span>
                    </div>
                  ))
                }
              </div>
              <button id='btn_success_cart' className="btn btn-success">تکمیل سبد خرید</button>

            </div>

          </div>

        </div>

        <Menu />

      </div>
    </div>

  )
}
