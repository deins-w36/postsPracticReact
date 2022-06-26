import PostsItem from './posts-item';


import './posts.scss';



const PostsList = ({onShowMore, visibleDataPostsWithDots, dataUsers, getId}) => {

    const posts = visibleDataPostsWithDots.map(item => {

        const names = dataUsers.filter(elem => elem[0] === item[0])
        return (
            <PostsItem key={item[1]} title={item[2]} body={item[3]} userName={names[0][1]} getId={() => getId(item[1])}/>
        )
    })

    return (
        <section className="posts">
            <div className="container">
                <div className="posts__wrapper">

                    {posts}
                
                </div>
                <div onClick={onShowMore} className="posts__more">Show more/less</div>
            </div>
        </section>
    )
}

export default PostsList;