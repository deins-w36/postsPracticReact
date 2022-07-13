import { Link } from 'react-router-dom'

import './posts.scss'

const PostsItem = ({ title, body, userName, getId, idPost }) => {
    return (
        <div className="posts__item">
            <div className="posts__title">{title}</div>
            <div className="posts__name">{userName}</div>
            <div className="posts__text">{body}</div>
            <Link to={`/post/${idPost}`}>
                <div onClick={getId} className="posts__next">
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </div>
    )
}

export default PostsItem
