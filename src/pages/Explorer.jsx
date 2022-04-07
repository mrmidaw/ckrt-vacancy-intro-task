import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { getFolders } from '../features/explorerSlice';
import { toast } from 'react-toastify';
import axios from 'axios';
import { data } from '../mock/data';

export const Explorer = () => {
    // const dispatch = useAppDispatch();
    // const { folders, isError, isLoading, isSuccess, message } = useAppSelector(state => state.explorer);

    // const someFunction = async () => {
    //     const response = await axios.get('http://vacancy.ckrt.ru/explorer/dumpster.json');
    //     const data = await response.data;
    //     return console.log('data>>>', data);
    // };
    // someFunction();

    // useEffect(() => {
    //     dispatch(getFolders('vacancy.ckrt.ru/explorer/dumpster.json'));
    // }, []);


    // if (message) {
    //     return toast.error(message);
    // }

    return (
        <>
            <div className='w-11/12 bg-slate-200 mx-auto h-full'>
                <div className='flex flex-col h-full '>
                    <div className=' h-8 m-2 border-solid border-2 border-black'>
                        <p className='ml-2'>
                            Path
                        </p>
                    </div>

                    <div className=' flex flex-row max-h-screen m-2 border-solid border-2 border-black h-full'>
                        {data.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <div className='m-2'>
                                {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};