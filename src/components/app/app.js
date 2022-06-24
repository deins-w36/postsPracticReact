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
			dataUsers : []
		}
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
	}
	


    render() {
		const {menu, dataUsers} = this.state;
	
		const postsContent = menu === 'posts' ? <PostsList/> : null;
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