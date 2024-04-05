import React from 'react'
import NavbarComponent from '../../components/NavbarComponent'
import FooterComponent from '../../components/FooterComponent'

function HomePage() {
  return (
    <div>
      <NavbarComponent />
      <div className='flex flex-col my-16 items-center space-y-4 px-12 text-center'>
        <div className='text-3xl font-bold'>
          Please verify your email...
        </div>
        <div>
          Please verify your email address. We've sent a confirmation email to
        </div>
        <img src="https://static.vecteezy.com/system/resources/previews/000/646/260/non_2x/email-symbol-icon-vector.jpg" alt="" className='w-32' />
        <div>
          mail@mail.com
        </div>
        <div>
          Click the confirmation link in that email to begin using Imajinn.
        </div>
        <div className='flex flex-col items-center'>
          Didn't receive the email? Check your Spam folder, it may have been caught by a filter.
          <div>
            If you still don't see it, you can <span className='text-pink-600 font-semibold'>resend the confirmation email</span>
          </div>
        </div>
        <div>
          Wrong email address? <span className='text-pink-600 font-semibold'>Change it.</span>
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}

export default HomePage