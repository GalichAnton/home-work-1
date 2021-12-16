import { useState } from 'react'

interface IUser {
  name: string
}

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  const getUsers = async ()=> {
    try {
      let response = await fetch('https://61bb56d3e943920017784e2b.mockapi.io/users')
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      response.json().then((res) => {
        setUsers(res)
      })
    } catch (error) {
      console.log('Поймал ошибку', error)
    }
  }

  return (
    <div>
      <button onClick={getUsers}>Загрузить</button>
      <ul>
        {users.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
