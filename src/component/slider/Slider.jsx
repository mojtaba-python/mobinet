import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../assets/banner_SlideBanner.webp';
import pic2 from '../../assets/banner_SlideBanner_f5121q.webp';
import pic3 from '../../assets/banner_SlideBanner_m7ASiM.webp';
import './slider.css';

const Slider = ()=>{
    return(
        <>
         <div className='box_carousel_mobile col-lg-12 col-md-12 col-12'>
                <Carousel>
                    <Carousel.Item>
                        <img src={pic1} text="First slide" style={{height:'100%', width:'100%'}} />
                        <Carousel.Caption>
                            <div  className='box_text_slider'>
                            <p>به قیمت بخر</p>
                            <h5>گوشی های ریلمی  </h5>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={pic2} text="First slide" style={{height:'100%', width:'100%'}} />
                        <Carousel.Caption>
                            <div className='box_text_slider'>
                            <p>به قیمت بخر</p>
                            <h5>گوشی های شیائومی و پوکو</h5>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={pic3} text="First slide" style={{height:'100%', width:'100%'}} />
                        <Carousel.Caption>
                            <div  className='box_text_slider'>
                                <p>پر طرفدارترین </p>
                                <h5>گوشی های آنر</h5>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
export default Slider;


