import React, { useState } from 'react'
import SimpleEditor from './SimpleEditor'

const AddPost = () => {
    return (

        <div className='formDiv text-white flex items-center justify-center bg-amber-300 w-full min-h-[584px]  px-8  h-full'>
            <div className='flex flex-col items-start w-[70%] px-10 py-10 rounded-lg my-[10px] bg-gray-800 gap-[10px] justify-center'>
                <h1 className='text-3xl'>Ask your Question...</h1>
                <form className='flex w-[100%] flex-col gap-5 justify-center'>
                    <div className='flex flex-col items-start'>
                        <label className='text-[17px] my-1' htmlFor="title">Title</label>
                        <input className='w-[100%] outline-none border-2 border-blue-400 px-2 py-1 rounded-sm ' type="text" name="title" id="title" />
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[17px] my-1' htmlFor="desc">Description</label>
                        {/* <textarea className='w-[100%] outline-none border-2 border-blue-400 px-2 py-1 rounded-sm ' name="desc" id="desc" />  */}
                        <SimpleEditor />
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[17px] my-1' htmlFor="tags">Tags</label>
                        <input className='w-[100%] outline-none border-2 border-blue-400 px-2 py-1 rounded-sm ' type="text" name="tags" id="tags" />
                    </div>
                    <div>
                        <button className='w-full bg-blue-500 text-white px-6 py-2 rounded-lg text-[17px] cursor-pointer'>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AddPost
