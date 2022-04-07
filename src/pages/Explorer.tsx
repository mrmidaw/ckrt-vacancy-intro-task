import React from 'react';

export const Explorer = () => {
    return (
        <div className='w-11/12 bg-slate-200 mx-auto h-full'>
            <div className='flex flex-col h-full '>
                <div className=' h-8 m-2 border-solid border-2 border-black'>
                    <p>
                        Path
                    </p>
                </div>

                <div className=' max-h-screen m-2 border-solid border-2 border-black h-full'>
                    Content
                </div>
            </div>
        </div>
    );
};