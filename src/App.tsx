import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import TodoItemPage from './components/TodoItemPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import UsersPage from './components/UsersPage';

const App = () => {
  // const users: IUser[] = [
  //   {
  //     "id": 1,
  //     "name": "Leanne Graham",
  //     "email": "Sincere@april.biz",
  //     "address": {
  //       "street": "Kulas Light",
  //       "city": "Gwenborough",
  //       "zipcode": "92998-3874"
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "name": "Ervin Howell",
  //     "email": "Shanna@melissa.tv",
  //     "address": {
  //       "street": "Victor Plains",
  //       "city": "Wisokyburgh",
  //       "zipcode": "90566-7771"
  //     }
  //   }
  // ]

  // const [users, setUsers] = useState<IUser[]>([])
  // const [todos, setTodos] = useState<ITodo[]>([])

  // useEffect(() => {
  //   fetchUsers()
  //   fetchTodos()
  // }, [])

  // async function fetchUsers() {
  //   try {
  //     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  //     setUsers(response.data)
  //   } catch (e) {
  //     alert(e)
  //   }
  // }
  // async function fetchTodos() {
  //   try {
  //     const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     setTodos(response.data)
  //   } catch (e) {
  //     alert(e)
  //   }
  // }

  return (
    <div>
      {/* <EventsExample /> */}
      {/* <Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>App button</button>
        <div>DIV</div>
      </Card> */}
      {/* <UserList users={users}></UserList> */}
      {/* <List
        items={users}
        renderItem={
          (user: IUser) =>
            <UserItem
              user={user}
              onClick={function (user): void { console.log(user.id) }}
              key={user.id}
            />
        }
      /> */}
      {/* <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} /> */}
      {/* <UsersPage /> */}
      {/* <TodosPage /> */}

      <div style={{ marginBottom: 10 }}>APP</div>

      <BrowserRouter>
        <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
          <NavLink to="/users">Users</NavLink>
          <NavLink to='/todos'>Todos</NavLink>
        </div>
        <Routes>
          <Route path={'/users'} element={<UsersPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
          <Route path={'/users/:id'} element={<UserItemPage />} />
          <Route path={'/todos/:id'} element={<TodoItemPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;