import UsersItem from './users-item';

import './users.scss';



const UsersList = ({dataUsers}) => {

    const users = dataUsers.map(item => {
        return (
            <UsersItem key={item[0]} name={item[1]} email={item[2]} phone={item[3]}/>
        )
    })

    return (
        <section className="users">
            <div className="container">
                <div className="users__wrapper">

                    {users}
                
                </div>
            </div>
        </section>
    )
}

export default UsersList;