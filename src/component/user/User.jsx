import './user.css';
import { useRef } from 'react';

const User = ({ users }) => {

    const likeRef = useRef();
   
    return (
        <>
            {
                users.map((user, index) => (
                    <div key={user.id} className="container_user">
                        <div className="box_mess_user">
                            <div>
                                <span>
                                    <i style={{ fontSize: 'x-large' }} class="bi bi-person-circle"></i>
                                </span>
                                <span> {user.name}</span>
                            </div>
                            <div>
                                <i class="bi bi-calendar2-week"></i>
                                <span> {user.date}</span>
                            </div>
                        </div>
                        <p>{user.message}</p>
                        <div className='box_like_user'>
                            <div>
                                <span>مخالفم</span>
                                <i class="bi bi-hand-thumbs-down"></i>
                            </div>

                            <div ref={likeRef}>
                                <span>موافقم</span>
                                <i class="bi bi-hand-thumbs-up"></i>
                            </div>

                        </div>
                    </div>
                ))
            }

        </>
    )
}
export default User;