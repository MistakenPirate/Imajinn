import React from 'react'
import DesignOptionsComponent from '../../components/DesignOptionsComponent'
import {Link} from 'react-router-dom'

function ChooseAgendaPage() {

    return (
        <div className='flex flex-col md:flex-row w-full min-h-screen relative overflow-x-hidden '>
            <div className=' w-[31%] md:w-[15%] flex justify-start items-start overflow-hidden'>
                <div className='ml-[10%] mt-[10%] h-[10%] flex'>
                    <img src="12.png" alt="" className='w-full h-full object-contain' />
                    <button className="flex items-center bg-slate-100 justify-center w-8 rounded-md px-4 my-5">
          <Link to='/createprofile'>
          {"<"}
          </Link>
        </button>
                </div>
                <div className='bg-white'>

                </div>
            </div>
            <div className='mx-7 w-full md:absolute flex flex-col md:mt-[8%] items-center'>
                <div className='h-[20%]'>
                    {/*WhiteSpace*/}
                </div>
                <div className='flex flex-col md:items-center pr-8'>
                    <div className='text-3xl font-bold'>
                        What bring's you to Imajinn?
                    </div>
                    <div className='mt-3 font-light'>
                        Select the options that best describe you. Don't worry, you can explore other options later.
                    </div>
                    <div className='mt-5 mb-0'>
                    </div>
                </div>
                <div className='mx-[20%] my-0'>
                    <DesignOptionsComponent/>
                </div>

                <div className="group">
                    <button
                        type="submit"
                        className="bg-pink-500  mt-10 mb-10 hover:bg-pink-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                    >
                        FINISH
                    </button>
                    <div className=" left-0 text-black bottom-[-25px] ml-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Or press RETURN
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChooseAgendaPage