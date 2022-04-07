import React from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { FiPlusCircle } from 'react-icons/fi';
import { FiXCircle } from 'react-icons/fi';

export const Header = () => {
    return (
        <div className='flex justify-between h-10 border-b-2 border-black' >
            <h1 className='ml-4 text-center text-2xl  '>
                Explorer
            </h1>
            <div className='flex mr-4'>
                <AiOutlineMinusCircle size={30} />
                <FiPlusCircle size={30} />
                <FiXCircle size={30} />
            </div>
        </div>
    );
};