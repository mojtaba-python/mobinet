import { Link, useParams } from 'react-router-dom';
import { AiOutlineAppstoreAdd, AiOutlineSetting } from "react-icons/ai";
import {
    BsCpu,
    BsArrowsFullscreen,
    BsDeviceHdd,
    BsMemory,
    BsCamera,
    BsBattery,
    BsCart2,
    BsShopWindow,
    BsShieldCheck
} from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
import { GREEN, ORIGIN } from '../helpers/colors';
import { dataProduct } from '../data/data';
import Tab from '../tabProduct/TabProduct';
import { useState } from 'react';


export default function Product({ counter, handlerCounter }) {
    const { productId } = useParams();
    console.log(productId);
    const fetchData = dataProduct();

    const [dataTabsProducts, setDataTabs] = useState(
        {
            cpu: "Mediatek Dimensity 8200 Ultra (4 نانومتری)",
            cpuHertz: "1 هسته 3.1 گیگاهرتز Cortex-A78 و 3 هسته 3.0 گیگاهرتز Cortex-A78 و 4 هسته 2.0 گیگاهرتز Cortex-A55",
            core: "هشت هسته",
            Gpu: "Mali-G610 MC6",
            sim: "دو سیم کارت نانو سیم (همزمان فعال)",
            Qcamera: "سه گانه 50 + 50 + 12 مگاپیکسل",
            os: "Android 13 با رابط کاربری MIUI 14، این نسخه برای زمانی است که این گوشی معرفی شده است و ممکن است در هنگام خرید شما، آپدیت جدیدتری برای آن آمده باشد و به اندروید ورژن بالاتر ارتقا پیدا کند.",
            weight: "162.2x75.7x8.5 میلی متر/ 193 گرم",
            body: "جلو شیشه، پشت شیشه یا پلیمر سیلیکون، فریم پلاستیک",
            hdd: "256 گیگابایت",
            ram: "12 گیگابایت",
            typeRam: "UFS 3.1",
            LED: 'AMOLED',
            sizeLED: "6.67 اینچ",
            resColor: "68 میلیارد رنگ/ 1220x2712 پیکسل",
            resPerPixel: "446 پیکسل در هر اینچ",
            net: "5G",
            NFC: "دارد/ بستگی به کشور عرضه کننده",
        }
    );

   
    return (
        <div className='container ' style={{ marginTop: '2rem' }}>
            <div className="container_product">
                <div className='col-7 col-md-6 col-lg-4'>
                    <div style={{ border: "1px solid #b4b5b7", borderRadius: '6px' }}>
                        <img className='img_product' src={fetchData[productId].photo} alt="img" />
                    </div>
                </div>
                <div className='col-md-10 col-lg-4'>

                    <h5 className='mb-3'>
                        {fetchData[productId].fullname}
                    </h5>
                    <span style={{ fontWeight: '300' }}>
                        {fetchData[productId].lastname}
                    </span>

                    <div style={{ padding: "1rem", marginTop: '7px' }}>
                        <p className='props_product'>
                            <span className='color_props_prod'>
                                <BsCpu />
                                {"  "}تراشه پردازنده:  {"  "}
                            </span>
                            {fetchData[productId].cpu}
                        </p>
                        <hr />
                        <p className='props_product'>
                            <span className='color_props_prod'>
                                <BsArrowsFullscreen />
                                {"  "}اندازه صفحه نمایش : {"  "}
                            </span>
                            {fetchData[productId].screen}
                        </p>
                        <hr />
                        <p className='props_product'>
                            <span className='color_props_prod'>
                                <BsDeviceHdd />
                                {"  "}   حافظه داخلی : {"  "}
                            </span>
                            {fetchData[productId].hdd}
                        </p>
                        <hr />
                        <p className='props_product'>
                            <span className='color_props_prod'>
                                <BsMemory /> {"  "}
                                حافظه رم : {"  "}
                            </span>
                            {fetchData[productId].ram}
                        </p>
                        <hr />
                        <p className='props_product'>
                            <span className='color_props_prod'>
                                <BsCamera /> {"  "}

                                کیفیت دوربین : {"  "}
                            </span>
                            {fetchData[productId].camera}
                        </p>
                        <hr />
                        <p className='props_product'>
                            <span className='color_props_prod'>
                                <BsBattery /> {"  "}
                                ظرفیت باتری : {"  "}
                            </span>
                            {fetchData[productId].battry}
                        </p>
                    </div>

                </div>
                <div className='col-md-10 col-lg-3'>
                    <div className='div_cart_product'>
                        <div className='box_title_cart'>
                            <h5>خرید کالا</h5>
                        </div>

                        <div style={{ marginTop: '1rem', padding: '1rem' }}>
                            <div style={{ textAlign: 'right' }}>
                                <p className='props_product'>
                                    <BsShopWindow style={{ color: ORIGIN, fontSize: 'large' }} /> {"  "}
                                    <span>موبی نت</span>
                                </p>

                                <p className='props_product'>
                                    <AiOutlineAppstoreAdd style={{ color: GREEN, fontSize: 'large' }} />
                                    {"  "}
                                    <span>موجود در انبار موبی نت ( ارسال فوری )</span>
                                </p>
                                <p className='props_product'>
                                    <AiOutlineSetting style={{ color: GREEN, fontSize: 'large' }} /> {"  "}
                                    <span>ارزیابی عملکرد : <span style={{ color: GREEN }}>عالی</span></span>
                                </p>
                                <p className='props_product'>
                                    <BsShieldCheck style={{ color: GREEN, fontSize: 'large' }} />  {"  "}
                                    <span>18 ماه گارانتی شرکتی</span>
                                </p>
                                <p className='props_product span_price'>
                                    <IoPricetagOutline style={{ color: GREEN, fontSize: 'large' }} /> {"  "}
                                    <span >قیمت :  {"  "}</span>
                                    {"  "}
                                    <span >{fetchData[productId].price} تومان </span>{"  "}
                                </p>
                            </div>
                        </div>
                        <Link onClick={()=>{
                                handlerCounter(fetchData[productId].fullname,fetchData[productId].price)
                        }} className='btn btn_cart'
                        >افزودن به سبد خرید <BsCart2 style={{ fontSize: 'x-large' }} />
                        </Link>
                    </div>

                </div>
            </div>
            <div className=''>
                <p style={{ lineHeight: '30px', margin:'2rem 0' }}>
                    {fetchData[productId].des}
                </p>
                <Tab {...dataTabsProducts} data={fetchData[productId].des} />

            </div>

        </div>
    )
}
