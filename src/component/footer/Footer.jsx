import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div className='footer'>
            <div className='box_footer'>
                <div className='sec1_footer' >
                    <h5>دسترسی سریع</h5>
                    <ul>
                        <li className='before_list_footer'><Link>گوشی سامسونگ</Link></li>
                        <li className='before_list_footer'><Link>گوشی آیفون</Link></li>
                        <li className='before_list_footer'><Link>گوشی شیائومی</Link></li>
                        <li className='before_list_footer'><Link>گوشی پوکو</Link></li>
                        <li className='before_list_footer'><Link> هندزفری بولوتوثی</Link></li>
                    </ul>
                </div>
                <div className='sec2_footer'>
                    <h5>پرفروش ترین محصولات</h5>
                    <ul>
                        <li>
                            <Link>سامسونگ a14</Link>
                        </li>
                        <li>
                            <Link>آیفون 13</Link>
                        </li>
                        <li>
                            <Link>شیائومی ردمی نوت 12</Link>
                        </li>
                        <li>
                            <Link>پوکو x5 پرو</Link>
                        </li>
                        <li>
                            <Link>سامسونگ s24 Ultra</Link>
                        </li>
                    </ul>
                </div>
                <div className='sec3_footer'>
                    <h5>درباره ما</h5>
                    <ul>
                        <li>
                            <span>طراح سایت مجتبی بخشی پور</span>
                        </li>
                        <li>
                            <span>تلفن : 09375674194</span>
                        </li>
                        <li>
                            <span>ایمیل :  mojtaba.klaie@gmail.com</span>
                        </li>
                        
                        <li>
                            <span>شبکه های اجتماعی: </span>
                            <div style={{display:'flex', justifyContent:'space-around', width:'100px', }}>
                                <a href='https://github.com/mojtaba-python' target="_blank" rel="noopener noreferrer">

                                    <span ><i className="bi bi-github github_footer"></i></span>
                                </a>

                                <a href="https://t.me/Poshtekala_admin" target="_blank" rel="noopener noreferrer" >
                                    <i className="bi bi-telegram telegram_footer "></i>
                                </a>

                                <a href="https://Instagram.com/mojtaba.bakhshipour" target="_blank" rel="noopener noreferrer">
                                <i  className="bi bi-instagram insta_footer"></i>
                            </a>
                            </div>


                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
