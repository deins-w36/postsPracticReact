import './header.scss';



const Header = () => {
    return (
        <header className="header">
            <div className="header__name">Placeholder - Posts</div>
            <div className="header__burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header__burger-act">
                <div className="header__burger-act__item">Posts</div>
                <div className="header__burger-act__item">Users</div>
            </div>
        </header>
    )
}

export default Header;