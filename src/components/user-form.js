import { useContext } from "react";
import { UserContext } from "../App";

const UserForm = () => {
    const {users, user, setUser, setUsers} = useContext(UserContext);
    const submitUser = (e) => {
        setUsers([...users, user]);
        setUser({lastName: '', firstName: ''})
    }
    return(
        <div>
            <input value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} />
            <input value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})}/>
            <button onClick={submitUser}>Submit</button>
        </div>
    )
}

export default UserForm;