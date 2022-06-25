import UsersItem from './users-item';

import './users.scss';



const UsersList = ({dataUsers}) => {

    const users = dataUsers.map(item => {

        const strSplit = item[1].split(' ');
        const strName = strSplit[0][0] + strSplit[1][0];

        return (
            <UsersItem key={item[0]} name={item[1]} email={item[2]} phone={item[3]} strName={strName}/>
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