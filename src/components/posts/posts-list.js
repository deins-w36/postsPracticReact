import PostsItem from './posts-item';


import './posts.scss';



const PostsList = (props) => { 

    const {onShowMore, visibleDataPostsWithDots, dataUsers, getId, isFilter, onChangeFilter} = props;

    const isDisplayFilter = isFilter ? {display : 'block'} : {display : 'none'}
    const isDisplayShowMore = isFilter ? {display : 'none'} : {display : 'block'}

    const posts = visibleDataPostsWithDots.map(item => {
        const names = dataUsers.filter(elem => elem[0] === item[0])
        return (
            <PostsItem key={item[1]} title={item[2]} body={item[3]} userName={names[0][1]} getId={() => getId(item[1])}/>
        )
    })
    return (
        <section className="posts">
            <div className="container">
                <div onClick={onChangeFilter} className="posts__filter" style={isDisplayFilter}>Убрать фильтр</div>
                <div className="posts__wrapper"> 

                    {posts}
                
                </div>
                <div onClick={onShowMore} className="posts__more" style={isDisplayShowMore}>Show more/less</div>
            </div>
        </section>
    )

}

export default PostsList;