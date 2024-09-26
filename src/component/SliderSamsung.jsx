import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import SliderXiaomi from './SliderXiaomi';
import { dataProductSamsung } from '../data/data';
import Category from './category/Category';
import Cart from './cart/Cart';
import CountdownTimer from './tcountDownTimer/Countdown ';
import Slider from './slider/Slider';
import Timer from './timer/Timer';
import Offer from './amaizingOffer/Offer';


export default function SliderSamsung() {

    const fetchSamsung = dataProductSamsung();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1200, min: 800 },
            items: 3,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };


    return (
        <>
            <Slider />
            <Offer />
            <div className='container border_slider_samsung'>
                <div className='title_samsung'>
                    <h5 style={{ color: '#fff ' }}>
                        سامسونگ
                    </h5>
                    <div className='box_timer'>
                        <span>  زمان تخفیف</span>
                        <Timer />
                        <i class="bi bi-stopwatch-fill"></i>
                    </div>
                </div>
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all 1s ease-out "
                    transitionDuration={2000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        fetchSamsung.map((product, index) => (
                            <div key={product.id} style={{ padding: '1rem', }}>
                                <div className='div_slider'
                                    style={{ borderBottom: product.discount ? '2px solid red' : '' }}>

                                    <div style={{ width: '70%' }} className='box_img_carousel' >
                                        <Link to={`/product/${product.id}`} >
                                            <img className='img_slider' src={product.photo} alt="img" />
                                        </Link>
                                    </div>
                                    <div className='countdown' style={{ display: product.discount ? "flex" : "none" }}>
                                        <CountdownTimer />
                                    </div>

                                    <div className='div_text_slider' >
                                        <p style={{ paddingTop: '10px' }}>
                                            <Link to={`/product/${product.id}`}
                                                style={{ color: 'black', textDecoration: 'none' }}>
                                                {product.lastname}
                                                {product.fullname}
                                            </Link>
                                        </p>
                                        <div className='div_slider_price'>

                                            <div style={{ color: product.discount ? 'red' : "black" }}>
                                                <div className='box_price_slider '
                                                    style={{ color: product.discount ? 'red' : '#ff7b00' }}>
                                                    <span >تومان</span>
                                                    <span > {product.price} </span>
                                                </div>
                                            </div>
                                            <span className='span_discount' style={{
                                                display: product.discount ? 'flex' : "none"
                                            }}>
                                                10% </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>

            </div>
            <SliderXiaomi />
            <Category />
            <Cart />
        </>
    )
}
