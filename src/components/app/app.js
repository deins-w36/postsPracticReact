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
			showMore : false
		}
		this.id = ''
	}


	onUpdateMenu = (str) => {
		this.setState({
			menu : str
		})
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
			});

		fetch('https://jsonplaceholder.typicode.com/users')
  			.then((response) => response.json())
  			.then((json) => {
				this.setState({
					dataUsers : json.map(item => {
						return [item.id, item.name, item.email, item.phone]
					})
				})
			});
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
			menu: 'posts'
		})
		this.id = id

		//Стейт в posts-list на активный фильтр
		//стейт в app на фильтр 
		//логика в app 
	}




    render() {
		const {menu, dataUsers, dataPosts, showMore} = this.state;

		let onePost = menu === 'post' ? dataPosts.filter(item => item[1] === this.id) : null
		if (menu === 'post') {
			const q = dataUsers.filter(item => item[0] === onePost[0][0])[0][1]
			onePost = [...onePost, q]
		}

		const visibleDataPosts = showMore ? dataPosts : dataPosts.filter(item => item[1] <= '8')
		const visibleDataPostsWithDots = this.dataPostsWithDots(visibleDataPosts);

		

		


		const postsContent = menu === 'posts' ? <PostsList 
		onShowMore={this.onShowMore} 
		visibleDataPostsWithDots={visibleDataPostsWithDots} 
		dataUsers={dataUsers} 
		getId={this.getId}/> : null;
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