import NavbarComponent from '../../components/NavbarComponent'
import FooterComponent from '../../components/FooterComponent'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../providers/UserContextProvider'
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const { userInfo } = useContext(UserContext);
  // console.log(userInfo)


    return (
        <div>
            <NavbarComponent />
            <div className='px-10 py-2 md:px-40 md:py-8 bg-slate-100 text-center text-2xl'>
                <div className='pb-5'>
                    Hi {userInfo.name}
                </div>
                <img src="hero.png" alt="" className='hidden md:block' />
                <img src="https://assets-global.website-files.com/5e86c7170f1ab21474c3f2a4/609bbba89bb59bed67a73d55_sergey-sokolov-yxJavcfExYs-unsplash.jpg" alt="" className='md:hidden' />
            </div>
            <FooterComponent />
        </div>
    )
}

export default HomePage
