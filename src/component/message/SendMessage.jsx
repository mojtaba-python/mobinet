import { useState } from 'react';
import './message.css';

const SendMessage = () => {

    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [allValid, setAllValid] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();
        setSubmitted(true);

        if (name && comment) {
            setAllValid(true);
        }
        setTimeout(() => {
            setAllValid(false);
            setName('');
            setComment('');
            setSubmitted(false);
        }, 3000)
    };

    const nameHandler = (event) => {
        setName(event.target.value);
        console.log(name);
    };
    const commentHandler = (event) => {
        setComment(event.target.value);
        console.log(comment);
    };

    return (
        <>
            {
                allValid && (
                    <div className="box_success_message">
                        <span><i class="bi bi-check-circle"></i> نظر شما با موفقیت ارسال شد</span>
                    </div>
                )}
            <div className='container_message'>

                <div className='box_form_message'>

                    <form onSubmit={submitForm} action="" className='form_send_message'>
                        {submitted && name.length === 0 && (
                            <span>* لطفا نام خود را وارد کنید</span>
                        )}
                        <input value={name} onChange={nameHandler} className='name_send_mess'
                            type="text" placeholder='نام شما' />

                        {submitted && comment.length === 0 && (
                            <span>* لطفا دیدگاه خود را وارد کنید</span>
                        )}
                        <textarea value={comment} onChange={commentHandler}
                            placeholder='دیدگاه شما در رابطه با این محصول...'></textarea>

                        <button className='btn_send' type="submit" >ارسال</button>
                    </form>
                </div>
            </div>

        </>
    )
}
export default SendMessage;