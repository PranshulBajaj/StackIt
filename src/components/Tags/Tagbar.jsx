import React from 'react'
import tags from './tagData'
import Tag from './Tag'

const Tagbar = ({setView}) => {
    return (
        <div className='max-w-full overflow-hidden'>
            
            <div className='flex items-center overflow-x-scroll gap-5 scrollbar-hide bg-gray-200 py-3 px-2 mt-2 whitespace-nowrap'>
                <div id='1'
          className="p-1.5 inline border-2 rounded-md cursor-pointer"
          onClick={() => setView("add")}
        >
          Ask New Question
        </div>
                {
                    tags.length > 0 ?
                        tags.map((tag) => (
                                <div id={tag.id}>
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
