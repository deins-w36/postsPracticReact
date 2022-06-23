import UsersItem from './users-item';



import './users.scss';



const UsersList = () => {
    return (
        <section className="users">
            <div className="container">
                <div className="users__wrapper">

                    <UsersItem/>
                
                </div>
            </div>
        </section>
    )
}

export default UsersList;