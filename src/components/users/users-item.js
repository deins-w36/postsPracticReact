import { Link } from 'react-router-dom'

import './users.scss'

import mailImg from './img/Mail.png'
import phoneImg from './img/Phone.png'

const UsersItem = (props) => {
    const { name, email, phone, strName, onFilterPostsToName } = props

    return (
        <div className="users__item">
            <div className="users__icon">{strName}</div>
            <div className="users__text">
                <Link to="/">
                    <div onClick={onFilterPostsToName} className="users__name">
                        {name}
                    </div>
                </Link>
                <div className="users__email">
                    <img src={mailImg} alt="mail" />
                    <a className="users__email__em" href={`mailto:${email}?subject=Post&body=Hello`}>
                        {email}
                    </a>
                </div>
                <div className="users__phone">
                    <img src={phoneImg} alt="phone" />
                    <a className="users__phone__ph" href={`tel:${phone}`}>
                        {phone}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UsersItem
