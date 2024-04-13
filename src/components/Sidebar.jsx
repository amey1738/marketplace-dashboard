import React from 'react'

const Sidebar = () => {
  return (
    <aside className='h-screen'>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center'>
            <img src="https://img.logoipsum.com/243.svg" 
            alt=""
            className='w-32'
             />
             <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                
             </button>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
