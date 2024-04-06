import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularComponent from '../../components/CircularComponent';
import DesignOptionsComponent from '../../components/DesignOptionsComponent';
import { UserContext} from '../../providers/UserContextProvider';
import {Cloudinary} from "@cloudinary/url-gen";


function CreateProfilePage() {
    const [step, setStep] = useState(1);

    const {userInfo} = useContext(UserContext)

    const cld = new Cloudinary({cloud: {cloudName: 'dlywhxskx'}});

    const handleNext = () => {
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen relative overflow-x-hidden">
            <div className="w-[30%] md:w-[15%] flex justify-start items-start overflow-hidden">
                <div className="ml-[10%] mt-[10%] h-[10%] flex">
                    <img src="12.png" alt="" className="w-full h-full object-contain" />
                </div>
                    {step === 2 && (
                        <button className="md:first-line :flex items-center bg-slate-100 justify-center hidden lg:block md:w-12 mt-[20%] lg:w-8 rounded-md px-4 my-5" onClick={handleBack}>
                                {"<"}
                        </button>
                    )}
                <div className="bg-white"></div>
            </div>
            <div className="mx-7 pt-5 w-full md:absolute flex flex-col md:mt-[8%] items-center">
                <div className="h-[20%]"></div>
                {step === 1 ? (
                    <div className="flex flex-col pr-8">
                        <div className="text-3xl font-bold">Welcome Let's Create Your Profile</div>
                        <div className="mt-2 font-light">Let others get to know you better! You can do these later</div>
                        <div className="text-l mt-8 font-bold">Add an Avatar</div>
                        <div className="mt-5 mb-0">
                            <CircularComponent />
                        </div>
                        <div className="text-l mt-8 font-bold">Add your location</div>
                        <div>
                            <input
                                type="text"
                                name="text"
                                id=""
                                placeholder="Enter your location"
                                className="px-4 py-2 border-b-2 w-[60%] border-gray-300 rounded-md focus:outline-none"
                            />
                        </div>
                        <div className="group relative">
                            <button
                                type="submit"
                                className="bg-pink-500 mt-10 mb-10 hover:bg-pink-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                            <div className="absolute left-0 text-black bottom-[-25px] mb-[3%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Or press RETURN
                            </div>
                        </div>
                        <div className="w-[5%]"></div>
                    </div>
                ) : (
                    <div className="flex flex-col md:items-center ">
                        <button className="md:first-line md:absolute lg:hidden :flex items-center bg-slate-100 justify-center md:w-12 mx-[25%] md:ml-0 md:mr-[90%] lg:w-8 rounded-md  my-5"
                        onClick={handleBack}>
                                {"<"}
                        </button>
                        <div className="text-3xl font-bold">What bring's you to Imajinn?</div>
                        <div className="mt-3 font-light">
                            Select the options that best describe you. Don't worry, you can explore other options later.
                        </div>
                        <div className="mt-5 mb-0"></div>
                        <div className="mx-[20%] my-0">
                            <DesignOptionsComponent />
                        </div>
                        <div className="ml-[25%] mr-[25%]">
                            <button
                                type="submit"
                                className="bg-pink-500 mt-10 mb-10 hover:bg-pink-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                            >
                                FINISH
                            </button>
                            <div className=" left-0 text-black bottom-[-42px] ml-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Or press RETURN
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CreateProfilePage;