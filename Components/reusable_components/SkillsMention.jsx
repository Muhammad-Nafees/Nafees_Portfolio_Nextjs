import React from 'react'
import { FiCheck } from 'react-icons/fi'

const SkillsMention = ({ skill, experience, width }) => {
    return (
        <div className='py-4 w-44 flex items-center'>
            <div className='mx-5 w-[20px] flex items-center justify-center h-[20px] rounded-full bg-black'>
                <FiCheck size={14} color='white' />
            </div>
            <div>
                <h3 className='text-md font-bold'>{skill}</h3>
                <p className='text-sm'>{experience}</p>
            </div>


        </div>
    )
}

export default SkillsMention;
