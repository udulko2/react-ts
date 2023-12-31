import axios from "axios";
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IUser } from "../types/types";

type UserItemPageParams = {
  id: string;
}

const UserItemPage: FC = () => {

  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>()
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/users')}>Back</button>
      <h2>{user?.name}'s page</h2>
      <div>
        {user?.email}
      </div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;