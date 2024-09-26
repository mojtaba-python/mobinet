import React from 'react'
import './category.css';

export default function SubCategory({ data }) {
    return (
        <>
            <div className='box_subCategory'>           
                    <div className='box_imgCategory'>
                        <img className='img_category' src={data.img} alt="" />
                    </div>
                <div className='text_category'>
                    <span>{data.text}</span>
                </div>
            </div>

        </>
    )
}
