import React from 'react'
import { FiCheck } from 'react-icons/fi'

const SkillsMention = ({ skill, experience }) => {

    return (
        <div className=''>
            <div className='py-4  md:w-36 w-32 lg:w-44 flex items-center'>

                <div className='mx-4 lg:w-[20px] w-[20px] flex items-center justify-center h-[20px] lg:h-[20px] rounded-full bg-black'>
                    <FiCheck size={14} color='white' />
                </div>

                <div>
                    <h3 className='text-xs md:text-base font-bold'>{skill}</h3>
                    <p className='text-xs sm:text-sm'>{experience}</p>
                </div>

            </div>
        </div>
    )
}
export default SkillsMention;
