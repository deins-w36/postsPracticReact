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
		// this.id = ''
	}


	onUpdateMenu = (str) => {
		this.setState({
			menu : str
		})
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
  			.then((response) => response.json())
  			.then((json) => {
				this.setState({
					dataUsers : json.map(item => {
						return [item.id, item.name, item.email, item.phone]
					})
				})
			});
		
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					dataPosts : json.map(item => {
						return [item.userId, item.id, item.title, item.body]
					})
				})
			});
		
	}


	onShowMore = () => {
		this.setState({
			showMore : !this.state.showMore
		})
	}

	// getId = (id) => {
	// 	this.setState({
	// 		menu: 'post'
	// 	})
	// 	this.id = id
	// }
	


    render() {
		const {menu, dataUsers, dataPosts, showMore} = this.state;

		const visibleDataPosts = showMore ? dataPosts : dataPosts.filter(item => item[1] <= '8')

		// const onePost = dataPosts.map(item => {
		// 	if (item[1] === this.id) {
		// 		console.log(item)
		// 		return item
		// 	}
		// })

		const postsContent = menu === 'posts' ? <PostsList 
		onShowMore={this.onShowMore} 
		dataPosts={visibleDataPosts} 
		dataUsers={dataUsers} 
		getId={this.getId}/> : null;
		const usersContent = menu === 'users' ? <UsersList dataUsers={dataUsers}/> : null;
		const postContent = menu === 'post' ? <Post/> : null;


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