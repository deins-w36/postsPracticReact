import './users.scss';

import mailImg from './img/Mail.png';
import phoneImg from './img/Phone.png';

const UsersItem = (props) => {

    const {name, email, phone} = props;
    
    return (
        <div className="users__item">
            <div className="users__icon"></div>
            <div className="users__text">
                <div className="users__name">{name}</div>
                <div className="users__email">
                    <img src={mailImg} alt="mail"/>
                    <div className="users__email__em">{email}</div>
                </div>
                <div className="users__phone">
                    <img src={phoneImg} alt="phone"/>
                    <div className="users__phone__ph">{phone}</div>
                </div>
            </div>
        </div>
    )
}

export default UsersItem