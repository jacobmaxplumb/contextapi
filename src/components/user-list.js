import { useContext } from "react";
import { UserContext } from "../App";

const UserList = () => {
    const {users} = useContext(UserContext);
    return(
        <div>
            {users.map((u, i) => (
                <div key={i}>{u.firstName}, {u.lastName}</div>
            ))}
        </div>
    )
}

export default UserList;