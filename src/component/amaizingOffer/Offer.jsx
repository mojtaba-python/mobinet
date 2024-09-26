import './offer.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/redmi a3.webp';
import img2 from '../../assets/redmiNot 13.webp';
import img3 from '../../assets/samsung.jpeg';
import { useState } from 'react';
import TimerOffer from './TimerOffer';


const Offer = () => {

    const [infoOffer, setInfoOffer] = useState([
        {
            img: "../../assets/redmi a3.webp",
            title: "گوشی شیائومی redmi a3 ram 8G",
            price: "12,000,000  تومان"
        },
        {
            img: "../../assets/redmiNot 13.webp",
            title: "گوشی شیائومی redmiNot 13 ram 8G",
            price: "13,000,000  تومان"
        },
        {
            img: "../../assets/samsung.jpeg",
            title: "گوشی سامسونگ Galaxy s24 ram 12G",
            price: "18,000,000  تومان"
        },
    ])
    return (
        <>
            <div className='container box_offer'>
                <div className=" container_offer">
                    <div className='col-lg-2 sec1_offer'>
                        <p>پیشنهاد</p>
                        <h4>
                            شگفت انگیز روز
                        </h4>
                        <h1>
                            <i class="bi bi-box2-heart-fill"></i>
                        </h1>
                    </div>

                    <div className='col-lg-5 sec2_offer'>
                        <Carousel>
                            <Carousel.Item>
                                <div className='box_carousel_offer'>
                                    <div style={{ width: '40%' }}>
                                        <img src={img1} text="First slide" style={{ height: '100%', width: '100%' }} />
                                    </div>
                                    <div className='text_offer_slider'>

                                        <h5>{infoOffer[0].title}</h5>
                                        <p>{infoOffer[0].price} </p>
                                    </div>
                                </div>


                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='box_carousel_offer'>
                                    <div style={{ width: '40%' }}>
                                        <img src={img2} text="First slide" style={{ height: '100%', width: '100%' }} />
                                    </div>
                                    <div className='text_offer_slider'>

                                        <h5>{infoOffer[1].title}</h5>
                                        <p>{infoOffer[1].price} </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='box_carousel_offer'>
                                    <div style={{ width: '40%' }}>
                                        <img src={img3} text="First slide" style={{ height: '100%', width: '100%' }} />
                                    </div>
                                    <div className='text_offer_slider'>

                                        <h5>{infoOffer[2].title}</h5>
                                        <p>{infoOffer[2].price} </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className='col-lg-3 sec3_offer' >
                        <p>فرصت باقی مانده تا پایان</p>
                        <div>

                            <TimerOffer />
                        </div>
                    </div>

                </div >
            </div>

        </>
    )
}
export default Offer;