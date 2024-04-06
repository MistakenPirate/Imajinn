import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignUpForm from './pages/SignUpForm/SignUpForm'
import CreateProfilePage from './pages/CreateProfilePage/CreateProfilePage'
// import ChooseAgendaPage from './pages/CreateProfilePage/ChooseAgendaPage'
import EmailPage from './pages/EmailPage/EmailPage'

function App() {


  return (
    <>
    <div className='font-sans'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpForm/>} />
        <Route path='/createprofile' element={<CreateProfilePage/>} />
        <Route path='/emailverify' element={<EmailPage/>} />
        {/* <Route path='/chooseagenda' element={<ChooseAgendaPage/>} /> */}
      </Routes>
    </div>
    </>
  )
}

export default App
