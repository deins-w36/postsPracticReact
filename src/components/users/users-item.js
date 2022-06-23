import './users.scss';

import mail from './img/Mail.png';
import phone from './img/Phone.png';

const UsersItem = () => {
    return (
        <div className="users__item">
            <div className="users__icon"></div>
            <div className="users__text">
                <div className="users__name">Leanne Graham</div>
                <div className="users__email">
                    <img src={mail} alt="mail"/>
                    <div className="users__email__em">Sincere@april.biz</div>
                </div>
                <div className="users__phone">
                    <img src={phone} alt="phone"/>
                    <div className="users__phone__ph">1-770-736-8031 x56442</div>
                </div>
            </div>
        </div>
    )
}

export default UsersItem