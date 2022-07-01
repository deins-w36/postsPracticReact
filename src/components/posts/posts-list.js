import PostsItem from './posts-item'

import './posts.scss'

const PostsList = (props) => {
    const { onShowMore, visibleDataPostsWithDots, dataUsers, getId, isFilter, onChangeFilter } = props

    const isDisplayFilter = isFilter ? { display: 'block' } : { display: 'none' }
    const isDisplayShowMore = isFilter ? { display: 'none' } : { display: 'block' }

    const posts = visibleDataPostsWithDots.map((item) => {
        let namePersone = ''
        for (let elem of dataUsers) {
            if (item[0] === elem[0]) {
                namePersone = elem[1]
                break
            }
        }

        return <PostsItem key={item[1]} title={item[2]} body={item[3]} userName={namePersone} getId={() => getId(item[1])} />
    })
    return (
        <section className="posts">
            <div className="container">
                <div onClick={onChangeFilter} className="posts__filter" style={isDisplayFilter}>
                    Убрать фильтр
                </div>
                <div className="posts__wrapper">{posts}</div>
                <div onClick={onShowMore} className="posts__more" style={isDisplayShowMore}>
                    Show more/less
                </div>
            </div>
        </section>
    )
}

export default PostsList
