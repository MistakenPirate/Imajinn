import React from 'react'
import { FaTwitter, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import { GiFairyWand } from "react-icons/gi";

function FooterComponent() {
    return (
        <div className='flex flex-col bg-slate-50'>
            <div className='md:flex ml-20 mr-20 py-20 justify-around  border-b-2'>
                <div className='flex flex-col text-center md:text-start  md:w-[20%]  items-center md:items-start space-x-3 '>
                    <img src="12.png" alt="" className='w-32' />
                    <div className='my-3'>
                        Imajinn is the world's leading community for creatives to share, grow, and get hired.
                    </div>
                    <div className='flex mt-4 hover:cursor-pointer space-x-2'>
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                        <FaPinterest />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row space-x-4 justify-around hover:cursor-pointer text-center md:text-start pt-6 md:pt-0'>
                    <div className='space-y-1 md:w-[20%]'>
                        <div className='font-bold'>For desingers</div>
                        <div>Go Pro!</div>
                        <div>Explore design work</div>
                        <div>Design blog</div>
                        <div>Overtime podcast</div>
                        <div>Playoffs</div>
                        <div>Weekly warm-ups</div>
                        <div>Refer a friend</div>
                        <div>Code of conduct</div>
                    </div>
                    <div className='space-y-4 pt-6 md:pt-0 md:w-[20%]' >
                        <div className='space-y-1'>
                            <div className='font-bold'>Hire designers</div>
                            <div>Post a job opening</div>
                            <div>Post a freelance project</div>
                            <div>Search for designers</div>
                        </div>
                        <div>
                            <div className='font-bold'>Brands</div>
                            <div>Advertise with us</div>
                        </div>
                    </div>
                    <div className='space-y-1 pt-6 md:pt-0 md:w-[20%]'>
                        <div className='font-bold'>Company</div>
                        <div>About</div>
                        <div>Careers</div>
                        <div>Support</div>
                        <div>Media kit</div>
                        <div>Testimonials</div>
                        <div>API</div>
                        <div>Terms of service</div>
                        <div>Privacy policy</div>
                        <div>Cookie policy</div>
                    </div>
                    <div className='space-y-4 pt-6 md:pt-0 md:w-[20%]'>
                        <div className='space-y-1'>
                            <div className='font-bold'>Directories</div>
                            <div>Design jobs</div>
                            <div>Designers for hire</div>
                            <div>Freelance designers for hire</div>
                            <div>Tags</div>
                            <div>Places</div>
                        </div>
                        <div className='space-y-1'>
                            <div className='font-bold'>Design assets</div>
                            <div>Imajinn Marketplace</div>
                            <div>Creative Market</div>
                            <div>Fontspring</div>
                            <div>Font Squirrel</div>
                        </div>
                    </div>
                    <div className='space-y-1  pt-6 md:pt-0 md:w-[20%]'>
                        <div className='font-bold'>Design Resources</div>
                        <div>Freelancing</div>
                        <div>Design Hiring</div>
                        <div>Design Portfolio</div>
                        <div>Design Education</div>
                        <div>Creative Process</div>
                        <div>Design Industry Trends</div>
                    </div>
                </div>
            </div>
            <div className=' md:flex space-y-3 justify-between pl-32 pr-20 py-10'>
            <div>
            ©2024 Imajinn. All rights reserved.
            </div>
            <div className='flex items-center'>
                <GiFairyWand/>
                <span className='font-bold ml-2 mr-2'>20,501,853</span> ideas Imajinned 
            </div>
            </div>
        </div>
    )
}

export default FooterComponent