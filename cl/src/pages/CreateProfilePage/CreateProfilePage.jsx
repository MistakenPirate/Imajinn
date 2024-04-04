import React from 'react'
// import AddAvatar from '../../components/AddAvatar'
import CircularComponent from '../../components/CircularComponent'

function CreateProfilePage() {

    return (
        <div className='flex flex-col md:flex-row w-full min-h-screen '>
            <div className=' w-[30%] flex justify-start items-start overflow-hidden'>
                <div className='ml-[10%] mt-[10%] h-[10%]'>
                    <img src="12.png" alt="" className='w-full h-full object-contain' />
                </div>
                <div className='bg-white'>

                </div>
            </div>
            <div className='mx-7 md:w-[65%]'>
                <div className='h-[20%]'>
                    {/*WhiteSpace*/}
                </div>
                <div>
                    <div className='text-3xl font-bold'>
                        Welcome Let's Create Your Profile
                    </div>
                    <div className='mt-2 font-light'>
                        Let others get to know you better! You can do these later
                    </div>
                    <div className='text-l mt-8 font-bold'>
                        Add an Avatar
                    </div>
                    <div className='mt-5 mb-0'>
                        <CircularComponent />
                    </div>
                </div>
                <div className='text-l mt-8 font-bold'>
                    Add your location
                </div>
                <div>
                    <input type="text"
                        name="text"
                        id=""
                        placeholder='Enter your location'
                        className='px-4 py-2  border-b-2 w-[60%] border-gray-300 rounded-md focus:outline-none' />

                </div>
                <div className="group relative">
                    <button
                        type="submit"
                        className="bg-pink-500 mt-10 mb-10 hover:bg-pink-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                    >
                        Next
                    </button>
                    <div className="absolute left-0 text-black bottom-[-25px] mb-[3%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Or press RETURN
                    </div>
                </div>
                <div className='w-[5%]'>

                </div>

            </div>
        </div>
    )
}

export default CreateProfilePage