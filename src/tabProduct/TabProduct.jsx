import { useState } from 'react';
import SendMessage from '../component/message/SendMessage';
import User from '../component/user/User';
import './tab.css';
import pic from '../assets/redmiNot 13.webp';

const Tab = ({ cpu, cpuHertz, core, Gpu, sim, Qcamera,
    os, weight, body, hdd, ram, typeRam, LED, sizeLED,
    resColor, resPerPixel, net, NFC, data }) => {

    const [userMessage, setUserMessage] = useState([
        {
            name: "مجتبی بخشی پور",
            date: '1403/05/10',
            message: "این گوشی رو یک ماه خریدم ازش راضی هستم ",
            id: 1,
        },
        {
            name: "سعید منتظری",
            date: '1403/04/15',
            message: " دوربین جلو بسیار ضعیف هستش از خریدش پشیمونم",
            id: 2,
        },
        {
            name: " علی لطیفی",
            date: '1403/06/20',
            message: "تو این رنج قیمت گوشی خوبی هستش ",
            id: 3,
        },

    ]);

    return (
        <>
            <nav dir='rtl' id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">

                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" href="#scrollspyHeading1">مشخصات فنی</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#scrollspyHeading2">نقد و بررسی</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                         href="#" role="button" aria-expanded="false">بیشتر</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#scrollspyHeading3">معرفی محصول</a></li>
                            <li><a class="dropdown-item" href="#scrollspyHeading4"> دیدگاه شما</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#scrollspyHeading5">دیدگاه کاربران</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2"
             data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true"
              class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
                <h4 id="scrollspyHeading1">مشخصات فنی</h4>

                <div className='container_attr'>
                    <div className='col-lg-7'>
                        <div className='box_atts_pro'>

                            <div className='box_att_pro'>
                                <span className='title_attr'>نوع پردازنده - CPU :</span>
                                <span className='body_attr'>{cpu}</span>
                            </div>
                            <div className='box_att_pro'>
                                <span className='title_attr'>فرکانس پردازنده مرکزی :</span>
                                <span className='body_attr'>{cpuHertz}</span>
                            </div>
                        </div>
                        <div className='box_atts_pro'>
                            <div className='box_att_pro'>
                                <span className='title_attr'>تعداد هسته پردازشگر :</span>
                                <span className='body_attr'>{core}</span>
                            </div>
                            <div className='box_att_pro'>
                                <span className='title_attr'>پردازنده گرافیکی - GPU :</span>
                                <span className='body_attr'>{Gpu}</span>
                            </div>
                        </div>
                        <div className='box_atts_pro'>
                            <div className='box_att_pro'>
                                <span className='title_attr'>تعداد سیم کارت :</span>
                                <span className='body_attr'>{sim}</span>
                            </div>
                            <div className='box_att_pro'>
                                <span className='title_attr'>کیفیت دوربین :</span>
                                <span className='body_attr'>{Qcamera}</span>
                            </div>
                        </div>
                        <div className='box_atts_pro'>
                            <div className='box_att_pro'>
                                <span className='title_attr'>حافظه RAM :</span>
                                <span className='body_attr'>{ram}</span>
                            </div>
                            <div className='box_att_pro'>
                                <span className='title_attr'>حافظه داخلی :</span>
                                <span className='body_attr'>{hdd}</span>
                            </div>
                        </div>

                        <div className='box_atts_pro'>
                            <div className='box_att_pro'>
                                <span className='title_attr'>سیستم عامل :</span>
                                <span className='body_attr'>{os}</span>
                            </div>
                            <div className='box_att_pro'>
                                <span className='title_attr'>ابعاد/ وزن :</span>
                                <span className='body_attr'>{weight}</span>
                            </div>
                        </div>
                        <div className='box_atts_pro'>
                            <div className='box_att_pro'>
                                <span className='title_attr'>ساختار بدنه :</span>
                                <span className='body_attr'>{body}</span>
                            </div>
                            <div className='box_att_pro'>
                                <span className='title_attr'>نوع حافظه :</span>
                                <span className='body_attr'>{typeRam}</span>
                            </div>
                        </div>
                        <div className='box_atts_pro'>
                            <div className='box_att_pro'>
                                <span className='title_attr'>نوع صفحه نمایش :</span>
                                <span className='body_attr'>{LED}</span>
                            </div>
                            <div className='box_att_pro'>
                                <span className='title_attr'>سایز صفحه نمایش :</span>
                                <span className='body_attr'>{sizeLED}</span>
                            </div>
                        </div>
                        <div className='box_atts_pro'>
                            <div className='box_att_pro'>
                                <span className='title_attr'>تعداد رنگ/ رزولوشن :</span>
                                <span className='body_attr'>{resColor}</span>
                            </div>
                            <div className='box_att_pro'>
                                <span className='title_attr'>تراکم پیکسل :</span>
                                <span className='body_attr'>{resPerPixel}</span>
                            </div>
                        </div>
                        <div className='box_atts_pro'>
                            <div className='box_att_pro'>
                                <span className='title_attr'>تعداد رنگ/ رزولوشن :</span>
                                <span className='body_attr'>{resColor}</span>
                            </div>
                            <div className='box_att_pro'>
                                <span className='title_attr'>تراکم پیکسل :</span>
                                <span className='body_attr'>{resPerPixel}</span>
                            </div>
                        </div>
                        <div className='box_atts_pro'>
                            <div className='box_att_pro'>
                                <span className='title_attr'>شبکه اینترنت :</span>
                                <span className='body_attr'>{net}</span>
                            </div>
                            <div className='box_att_pro'>
                                <span className='title_attr'>NFC :</span>
                                <span className='body_attr'>{NFC}</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-8 sec2_pro_attrs'>

                        <h5>
                            <i style={{ color: 'rgb(242 255 0)' }} class="bi bi-star-fill">{"      "}</i>
                            پیشنهاد ویژه</h5>

                        <div className='box_sec2'>
                            <img src={pic} alt="" />
                        </div>
                        <p className='text_sec2'>
                            گوشی شیائومی مدل redmiNot 13 Pro ظرفیت 512 گیگ رم 12 گیگ
                        </p>
                        <p className='price_sec2'>14,399,000 تومان</p>
                    </div>

                </div>

                <hr />
                <h4 id="scrollspyHeading2">نقد و بررسی</h4>
                <p style={{ lineHeight: '30px' }}>{data}</p>
                <hr />

                <h4 id="scrollspyHeading3">معرفی محصول</h4>
                <p style={{ lineHeight: '30px' }}>
                    شیائومی 13T یک محصول بسیار با کیفیت و با امکانات بسیار خوب به شمار می‌رود. گوشی هوشمندی که به راحتی می‌تواند با گوشی‌های پرچم‌دار رقابت کند و با توجه به قیمتی که دارد خیلی سریع مورد توجه کاربران قرار بگیرد.
                     این گوشی قاتل پرچم‌دار یکی از جذاب‌ترین محصولات شیائومی در سال ۲۰۲۳ به شمار می‌رود؛ با این حال قبل از خرید گوشی شیائومی 13T بد نیست با مشخصات این گوشی شیائومی بیشتر آشنا شوید.
                </p>
                <hr />

                <h4 id="scrollspyHeading4">دیدگاه شما</h4>
                <SendMessage />
                <hr />
                <h4 id="scrollspyHeading5">دیدگاه کاربران</h4>
                <User users={userMessage} />
            </div>
        </>
    )
}
export default Tab;