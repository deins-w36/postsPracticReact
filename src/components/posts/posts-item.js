import './posts.scss';



const PostsItem = () => {
    return (
        <div className="posts__item">
            <div className="posts__title">Modern Frontend Applications</div>
            <div className="posts__name">James Lee</div>
            <div className="posts__text">Web Development is an ever-changing field — the way we build websites today is completely different from how we used to do it a couple of years ago. </div>
            <div className="posts__next">
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default PostsItem;