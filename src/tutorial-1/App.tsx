import ProfileFC from './components/ProfileFC'
import '../index.css'
import ProfileCC from './components/ProfileCC'

const App = () => {

  return (
    <div className='app'>
      <ProfileFC className='profile' name="Вася Пупкин" registredAt={new Date("2021, 12, 13")} />
      <ProfileCC className='profile' name="Вася Пупкин" registredAt={new Date("2021, 12, 13")}/>
    </div>
  )
}

export default App
