import { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
  users: IUser[]
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map(user =>
        <UserItem key={user.id} user={user} onClick={function (user): void { console.log(user.id) }} />
      )}
    </div>
  )
}

export default UserList;