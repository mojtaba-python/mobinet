import './login.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='login_page'>
                <div className='box_login_user'>
                    <h4>ورود / عضویت</h4>
                    <form action="" className='form_login'>
                        <input type="text" placeholder='912 345 6789' />
                        <div>
                            <input type="checkbox" name="" id="checkbox_login" />
                            <span id="span_check">مرا بخاطر بسپار</span>
                        </div>
                        <Link to="/" type='submit'>ورود</Link>
                        <div className='box_logo_login'>
                            <img src={logo} alt="" style={{ width: 200, height: 100 }} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;