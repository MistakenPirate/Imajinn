import NavbarComponent from '../../components/NavbarComponent'
import FooterComponent from '../../components/FooterComponent'
import { useContext } from 'react'
import { UserContext } from '../../providers/UserContextProvider'

function HomePage() {

  const { userInfo } = useContext(UserContext)

  return (
    <div>
      <NavbarComponent />
      <div className='px-40 py-8 bg-slate-100 text-center text-2xl'>
        <div className='pb-5'>
          Hi {userInfo.name}
        </div>
        <img src="hero.png" alt="" />
      </div>
      <FooterComponent />
    </div>
  )
}

export default HomePage