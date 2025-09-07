import React from 'react'

const Tag = ({content}) => {
  return (
    <div className='p-1.5 inline border-2 rounded-md cursor-pointer'>
      {content}
    </div>
  )
}

export default Tag
