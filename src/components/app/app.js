import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from '../header/header'
import PostsList from '../posts/posts-list'
import UsersList from '../users/users-list'
import Post from '../post/post'

const App = () => {
    const [menu, setMenu] = useState('posts')
    const [dataUsers, setDataUsers] = useState([])
    const [dataPosts, setDataPosts] = useState([])
    const [showMore, setShowMore] = useState(false)
    const [isFilter, setIsFilter] = useState(false)
    const [idItem, setIdItem] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setDataPosts(
                    json.map((item) => {
                        return [item.userId, item.id, item.title, item.body]
                    })
                )
            })
            .catch((e) => console.log(e))

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                setDataUsers(
                    json.map((item) => {
                        return [item.id, item.name, item.email, item.phone]
                    })
                )
            })
            .catch((e) => console.log(e))
    }, [])

    const onUpdateMenu = (str) => {
        setMenu(str)
    }

    const onShowMore = () => {
        setShowMore((showMore) => !showMore)
    }

    const getId = (id) => {
        setMenu('post')
        setIdItem(id)
    }

    const dataPostsWithDots = (elem) => {
        const temp = elem.map((item) => {
            if (item[3].length >= 150) {
                return [item[0], item[1], item[2], item[3].slice(0, 150) + '...']
            }
            return item
        })
        return temp
    }

    const onChangeMenuAfterPost = () => {
        setMenu('posts')
    }

    const onFilterPostsToName = (id) => {
        setMenu('posts')
        setIsFilter(true)
        setIdItem(id)
    }

    const onChangeFilter = () => {
        setMenu('posts')
        setIsFilter(false)
    }

    /*  */

    let onePost = menu === 'post' ? dataPosts.filter((item) => item[1] === idItem) : null
    if (menu === 'post') {
        const namePersone = dataUsers.filter((item) => item[0] === onePost[0][0])[0][1]

        onePost = [...onePost, namePersone]
    }

    let visibleDataPosts
    if (isFilter) {
        visibleDataPosts = dataPosts
    } else {
        visibleDataPosts = showMore ? dataPosts : dataPosts.filter((item) => item[1] <= '8')
    }

    const visibleDataPostsWithDots = dataPostsWithDots(visibleDataPosts)

    const filterName = isFilter ? visibleDataPostsWithDots.filter((item) => item[0] === idItem) : visibleDataPostsWithDots

    const postsContent =
        menu === 'posts' ? (
            <PostsList
                onShowMore={onShowMore}
                visibleDataPostsWithDots={filterName}
                dataUsers={dataUsers}
                getId={getId}
                isFilter={isFilter}
                onChangeFilter={onChangeFilter}
            />
        ) : null
    const usersContent = menu === 'users' ? <UsersList dataUsers={dataUsers} onFilterPostsToName={onFilterPostsToName} /> : null
    const postContent = menu === 'post' ? <Post onePost={onePost} onChangeMenuAfterPost={onChangeMenuAfterPost} /> : null

    return (
        <Router>
            <Header onUpdateMenu={onUpdateMenu} />
            <Routes>
                <Route exact path="/" element={postsContent} />
                <Route exact path="/users" element={usersContent} />
                <Route exact path="/post/:postId" element={postContent} />
            </Routes>
        </Router>
    )
}

export default App
