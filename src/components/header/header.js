import { Component } from 'react';


import './header.scss';



class Header extends Component {
    constructor(props) {
		super(props);

		this.state = {
			active : false,
		}
	}



    onChangeMenuActive = () => {
        this.setState({
            active: !this.state.active
        })
    }

    onChangeMenu = (e) => {
        this.props.onUpdateMenu(e.currentTarget.getAttribute('data-menu'));
    }


    render () {
        const {active} = this.state;

        const clazz = active ? 'header__burger-act active' : 'header__burger-act';

        return (
            <header className="header">
                <div className="header__name">Placeholder - Posts</div>
                <div onClick={() => this.onChangeMenuActive()} className="header__burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={clazz}>
                    <div onClick={this.onChangeMenu} className="header__burger-act__item" 
                    data-menu="posts">Posts</div>
                    <div onClick={this.onChangeMenu} className="header__burger-act__item" 
                    data-menu="users">Users</div>
                </div>
            </header>
        )
    }
}

export default Header;