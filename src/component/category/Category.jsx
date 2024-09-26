import img1 from '../../assets/apple.webp';
import img2 from '../../assets/samsung.jpeg';
import img3 from '../../assets/xiaomi.jpeg';
import img4 from '../../assets/nokia.jpeg';
import SubCategory from './SubCategory';
import './category.css';

const Category = () => {
    const dataCategory = [
        {
            img: img1,
            text: "اپل"
        },
        {
            img: img2,
            text: "سامسونگ"
        },
        {
            img: img3,
            text: "شیائومی"
        },
        {
            img: img4,
            text: "نوکیا"
        },
    ]
    return (
        <>

            <div className="container " style={{ marginBottom: '4rem', marginTop: '4rem' }}>
                <div className='title_category' style={{textAlign:'center'}}> 
                    <span className='span_category'>برندهای موجود </span>
                </div>
                <div className='box_category '>

                    <SubCategory data={dataCategory[0]} />
                    <SubCategory data={dataCategory[1]} />
                    <SubCategory data={dataCategory[2]} />
                    <SubCategory data={dataCategory[3]} />
                </div>
            </div>
  
        </>
    )
}
export default Category