import React from 'react'

const IQuestions = ({title, desc, tags, user, created}) => {
  return (
    <div className='questionCard px-4 py-2 max-w-[60vw] rounded-2xl mx-auto my-[10px] bg-amber-200'>
      <div className='card-wrap'>
          <div className='title font-bold text-[1.5rem]'>
            {title}
          </div>
        <div className='post-by flex items-center gap-2'>
          <img className='w-[30px] rounded-[50%] border-2 border-blue-700' src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="" />
          <span>{user}</span>
          <span className=''> on {
              new Date(created).toLocaleString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              })
            }</span>
        </div>
        <div className='tags my-2 flex flex-wrap items-center gap-2'>
          {
            tags.split(" ").map((tag, index)=>{
              return <span key={index}  className='py-1 px-2 rounded-lg bg-gray-100'>{tag}</span>
            })
          }
        </div>
        <div className='description'>
          <p className='px-1'>
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default IQuestions
