import './posts.scss';



const PostsItem = ({title,body,userName, getId}) => {
    return (
        <div className="posts__item">
            <div className="posts__title">{title}</div>
            <div className="posts__name">{userName}</div>
            <div className="posts__text">{body}</div>
            <div onClick={getId} className="posts__next">
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default PostsItem;