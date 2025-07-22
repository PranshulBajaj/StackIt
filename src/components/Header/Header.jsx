import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center max-w-full bg-white py-3 px-[80px] justify-between'>
        <div>
            <span className='text-gray-600 text-lg font-mono'>Stackit</span>
        </div>
        {/* credentials : login, sign up, or any other utilities */}
        <div>
            <button className='bg-blue-700 text-white rounded-sm px-[10px] py-[5px] cursor-pointer'>Login</button>
        </div>
    </div>
  )
}

export default Header
