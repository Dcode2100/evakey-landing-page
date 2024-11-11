import React from 'react'
import BgAnimationWaves from "../contactpage/BgAnimationWaves";

const ButtonWave = ({ title }) => {
    return (
        <div className=" relative md:w-max max-md:w-full md:px-12 hover:opacity-70 transition-opacity duration-200 cursor-pointer py-2 px-4 ">
            <BgAnimationWaves />
            <button
                type="submit"
                className="bg-transparent  h-full w-full relative duration-300  z-20 transition-opacity text-text text-xl font-light   focus:outline-none"
            >
                {title}
            </button>
        </div>
    )
}

export default ButtonWave