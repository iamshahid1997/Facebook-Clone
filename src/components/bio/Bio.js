import React from 'react'
import { MdOutlineWork, MdSchool, MdLocationOn } from 'react-icons/md'
import { AiFillHeart } from 'react-icons/ai'

const Bio = () => {
    return (
        <div className = 'col-span-4 md:col-span-2 bg-gray-800 rounded-lg p-4 w-full mb-4 md:mb-0'>
            <p className = 'font-semibold text-lg'>Intro</p>
            <div className = 'flex justify-center mt-3'>
                <p className = 'text-sm font-semibold'>Basketball player & Singer</p>
            </div>
            <div className = 'flex flex-col space-y-3 text-sm mt-6 font-semibold'>
                <div className = 'flex space-x-2 items-center'>
                    <MdOutlineWork className = 'text-gray-400 text-xl'/>
                    <p>Junior developer at Belong Ingenious Faces</p>
                </div>
                <div className = 'flex space-x-2 items-center'>
                    <MdSchool className = 'text-gray-400 text-xl'/>
                    <p>Studied at JECRC Foundation</p>
                </div>
                <div className = 'flex space-x-2 items-center'>
                    <MdSchool className = 'text-gray-400 text-xl'/>
                    <p>Went to Atomic Energy Central School, Narora</p>
                </div>
                <div className = 'flex space-x-2 items-center'>
                    <MdLocationOn className = 'text-gray-400 text-xl'/>
                    <p>From Narora</p>
                </div>
                <div className = 'flex space-x-2 items-center'>
                    <AiFillHeart className = 'text-gray-400 text-xl'/>
                    <p>Single</p>
                </div>

            </div>
        </div>
    )
}

export default Bio
