import { Link } from 'react-router-dom'

import './post.scss'

const Post = ({ onePost, onChangeMenuAfterPost }) => {
    return (
        <section className="post">
            <div className="container">
                <div className="post__item">
                    <div className="post__title">{onePost[0][2]}</div>
                    <div className="post__name">{onePost[1]}</div>
                    <div className="post__text">{onePost[0][3]}</div>
                </div>
                <Link to="/">
                    <div onClick={onChangeMenuAfterPost} className="post__back">
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Post
