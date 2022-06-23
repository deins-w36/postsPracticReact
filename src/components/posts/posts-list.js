import PostsItem from './posts-item';


import './posts.scss';



const PostsList = () => {
    return (
        <section className="posts">
            <div className="container">
                <div className="posts__wrapper">

                    <PostsItem/>
                
                </div>
            </div>
        </section>
    )
}

export default PostsList;