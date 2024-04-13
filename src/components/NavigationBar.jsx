import React, { useState } from 'react'
import {
    LayoutDashboard,
    Box,
    Boxes,
    ChevronRight,
    
} from 'lucide-react'

import {motion} from 'framer-motion'
import {Link} from 'react-router-dom';

const navLinks = [
    {
        name : "Dashboard",
        icons : LayoutDashboard,
        link : '/'
    },
    {
        name : "Products",
        icons : Box,
        link : '/products'
    },
    {
        name : "Categories",
        icons : Boxes,
        link : '/categories'
    },
    
]

const variants = {
    expanded : { width : "20%"},
    nonExpanded : {width : "5%"}
}

const NavigationBar = () => {

const [activeNav, setactiveNav] = useState(0);

const [isExpanded, setisExpanded] = useState(true);

const handleClick = (link, index) => {
    setactiveNav(index);
}

  return (
    <motion.div 
    animate= {
        isExpanded ? 'isExpanded' : 'nonExpanded'
    }
    variants={variants}
    className='px-10 py-12 flex-col border border-r-1 w-1/6 h-screen relative'>
       <div className='logo-div flex space-x-3 items-center'>
            <h1>logo</h1>
            
       </div>

       <div 
       onClick={()=> setisExpanded(!isExpanded)}
       className='w-5 h-5 bg-red-400 rounded-full absolute -right-3 top-12 flex items-center justify-center'>
            <ChevronRight className='w-4'/>
       </div>

       <div className='mt-10 flex flex-col space-y-8'>
        {navLinks.map((item, index) => 
            <Link to={item.link}>
                <div key={index}
                className={'flex space-x-3 cursor-pointer' + (activeNav === index ? 
                "bg-white text-red-400 font-semibold" : "")}
                onClick={()=> handleClick(item.link, index)}>
                    <item.icons/>
                    <span className={isExpanded ? "block": "hidden"}>{item.name}</span>
                    
                </div>
            </Link>
            
        )}
       </div>
    </motion.div>
  )
}

export default NavigationBar
