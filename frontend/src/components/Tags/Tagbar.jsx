import React from 'react'
import tags from './tagData'
import Tag from './Tag'
import { useSelector } from 'react-redux'
import {ToastContainer, toast} from "react-toastify";


const Tagbar = ({setView}) => {
    const {username, isLoggedIn} = useSelector((state)=>state.auth);
    const notify = ()=>{
            toast("Please Login first",{
                type : "warning"
            });
    }

    const verify = ()=>{
        if(!isLoggedIn){
            notify();
            return;
        }

        setView("add");
    }

    return (
        <div className='max-w-full overflow-hidden'>
            <ToastContainer newestOnTop={true} hideProgressBar={true}/>
            <div className='flex items-center overflow-x-scroll gap-5 scrollbar-hide bg-gray-200 py-3 px-2 mt-2 whitespace-nowrap'>
                <div id='1'
          className="p-1.5 inline border-2 rounded-md cursor-pointer"
          onClick={verify}
        >
          Ask New Question
        </div>
                {
                    tags.length > 0 ?
                        tags.map((tag) => (
                                <div key={tag.id} id={tag.id}>
                                    <Tag content={tag.desc} />
                                </div>
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default Tagbar
