import React, { useState } from 'react'
import SimpleEditor from './SimpleEditor'
import axios from "axios";
import DOMPurify from 'dompurify';

const AddPost = () => {
    const [loading, setLoading] = useState(false);
    const [editorkey, setEditorKey] = useState(0);
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        tags: ''
    })

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        setLoading(true);
        try{
            const {data} = await axios.post("/api/v1/questions/post",{
              title : formData.title,
              description: formData.desc,
              tags: formData.tags
            }, {
                withCredentials: true
            });
            setFormData({
                title : '',
                desc :  '',
                tags : ''
            })
            setEditorKey(prev=>prev+1);
            // console.log("Data from AddPost.jsx: ", data);
          }
          catch(error){
            console.log("Error from AddPost.jsx: ", error);
          }
          finally{
            setLoading(false);
          }
    }

    const handleEditorContent = (editorDataWithHTML)=>{
        const data = DOMPurify.sanitize(editorDataWithHTML);
        const withoutTags = data.replace(/(<([^>]+)>)/ig,"");
        setFormData({
            ...formData,
            desc: withoutTags
        })
    }

    return (

        <div className='formDiv text-black flex items-center justify-center bg-blue-800 w-full min-h-[584px]  px-8  h-full'>
            <div className='flex flex-col items-start w-[70%] px-10 py-10 rounded-lg my-[10px] bg-blue-200 gap-[10px] justify-center'>
                <h1 className='text-3xl'>Ask your Question...</h1>
                <form className='flex w-[100%] flex-col gap-5 justify-center' onSubmit={handleSubmit}>
                    <div className='flex flex-col items-start'>
                        <label className='text-[17px] my-1' htmlFor="title">Title</label>
                        <input className='w-[100%] outline-none border-2 border-blue-800 px-2 py-1 rounded-sm ' value={formData.title} type="text" name="title" id="title" onChange={(e)=>{
                            setFormData({...formData, title: e.target.value})
                        }} />
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[17px] my-1'>Description</label>
                        <SimpleEditor key={editorkey} onContentChange={handleEditorContent} />
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[17px] my-1' htmlFor="tags">Tags</label>
                        <input className='w-[100%] outline-none border-2 border-blue-800 px-2 py-1 rounded-sm ' value={formData.tags} type="text" name="tags" id="tags" onChange={(e)=>{
                            setFormData({...formData, tags: e.target.value})
                        }}/>
                    </div>
                    <div>
                        <button disabled={loading} className={`w-full ${loading ? "bg-blue-200" : "bg-blue-500"} text-white px-6 py-2 rounded-lg text-[17px] cursor-pointer`}>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AddPost
