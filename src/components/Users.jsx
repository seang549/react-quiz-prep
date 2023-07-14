import UsersItem from './UsersItem'
const Users = ({users}) => {

    return users.map((user) => (
        <UsersItem user = {user} key={user.id} />
    ))
}

export default Users