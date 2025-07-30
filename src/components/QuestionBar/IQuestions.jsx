import React from 'react'

const IQuestions = () => {
  return (
    <div className='questionCard px-4 py-2 max-w-[80%] flex flex-col items-center mx-auto'>
      <div className='card-wrap'>
        <div className='flex items-center gap-5'>
          <div className='title font-bold text-[1.5rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, impedit?
          </div>
          <div className='replies inline py-1 px-2 rounded-lg border-1 whitespace-nowrap border-black'>
            0 ans
          </div>
        </div>
        <div className='post-by flex items-center gap-2'>
          <img className='w-[35px] rounded-[50%] border-2 border-blue-700' src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg" alt="" />
          <span className=''>John Doe,</span>
          <span> on-  20 July 2016</span>
        </div>
        <div className='tags my-2 flex items-center gap-2'>
          <span className='py-1 px-2 rounded-lg bg-gray-100'>JS</span>
          <span className='py-1 px-2 rounded-lg bg-gray-100'>React</span>
          <span className='py-1 px-2 rounded-lg bg-gray-100'>Node</span>
        </div>
        <div className='description'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio et minus praesentium totam facere quia nobis! Dolor libero totam odit commodi ut in vitae, quam quasi facere accusamus voluptates odio eveniet? Cumque quos at ab rem accusamus fugiat possimus architecto illo aliquid. Neque tempora dolorum maxime aut ipsa odio quia?
          </p>
        </div>
      </div>
    </div>
  )
}

export default IQuestions
