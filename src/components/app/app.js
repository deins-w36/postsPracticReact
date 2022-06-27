import {Component} from 'react';


import Header from '../header/header';
import PostsList from '../posts/posts-list';
import UsersList from '../users/users-list';
import Post from '../post/post';


class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			menu : 'posts',
			dataUsers : [],
			dataPosts : [],
			showMore : false,
			isFilter : false
		}
		this.id = ''
	}


	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					dataPosts : json.map(item => {
						return [item.userId, item.id, item.title, item.body]
					})
				})
			})
			.catch(e => console.log(e));

		fetch('https://jsonplaceholder.typicode.com/users')
  			.then((response) => response.json())
  			.then((json) => {
				this.setState({
					dataUsers : json.map(item => {
						return [item.id, item.name, item.email, item.phone]
					})
				})
			})
			.catch(e => console.log(e));
	}


	onUpdateMenu = (str) => {
		this.setState({
			menu : str
		})
	}

	onShowMore = () => {
		this.setState({
			showMore : !this.state.showMore
		})
	}

	getId = (id) => {
		this.setState({
			menu: 'post'
		})
		this.id = id
	}
	
	dataPostsWithDots = (elem) => {

		const q = elem.map(item => {
			if (item[3].length >= 150) {
				return [item[0], item[1], item[2], item[3].slice(0,150) + '...']
			}
			return item
		})
		return q
	}

	onChangeMenuAfterPost = () => {
		this.setState({
			menu: 'posts'
		})
	}


	onFilterPostsToName = (id) => {
		this.setState({
			menu: 'posts',
			isFilter : true
		})
		
		this.id = id
	}

	onChangeFilter = () => {
		this.setState({
			menu: 'posts',
			isFilter : false
		})
	}

	// qw = () => {
	// 	if (this.state.dataPosts.length === 0) {
	// 		this.setState({
	// 			dataPosts : [['1','1','1','1']]
	// 		})
	// 	}
	// }

    render() {

		const {menu, dataUsers, dataPosts, showMore, isFilter} = this.state;


		let onePost = menu === 'post' ? dataPosts.filter(item => item[1] === this.id) : null
		if (menu === 'post') {
			const q = dataUsers.filter(item => item[0] === onePost[0][0])[0][1]
			onePost = [...onePost, q]
		}

		let visibleDataPosts
		if (isFilter) {
			visibleDataPosts = dataPosts
		} else {
			visibleDataPosts = showMore ? dataPosts : dataPosts.filter(item => item[1] <= '8')
		}

		
		const visibleDataPostsWithDots = this.dataPostsWithDots(visibleDataPosts);

		const filterName = isFilter ? visibleDataPostsWithDots.filter(item => item[0] === this.id) : visibleDataPostsWithDots

		const postsContent = menu === 'posts' ? <PostsList 
		onShowMore={this.onShowMore} 
		visibleDataPostsWithDots={filterName} 
		dataUsers={dataUsers} 
		getId={this.getId}
		isFilter={isFilter}
		onChangeFilter={this.onChangeFilter}/> : null;
		const usersContent = menu === 'users' ? <UsersList dataUsers={dataUsers} onFilterPostsToName={this.onFilterPostsToName}/> : null;
		const postContent = menu === 'post' ? <Post onePost={onePost} onChangeMenuAfterPost={this.onChangeMenuAfterPost}/> : null;


		return (
		    <>
			  	<Header onUpdateMenu={this.onUpdateMenu}/>
			  	{postsContent}
			  	{usersContent}
			  	{postContent}
			</>
		);
	}
}
  
export default App;