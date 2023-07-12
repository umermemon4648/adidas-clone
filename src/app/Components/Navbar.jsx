"use client"
import React, {useRef, useState, useEffect} from 'react'
import Image from 'next/image'


const dropDownData = [
    {
        id: 1,
        title:'black track top'
    },
    {
        id: 2,
        title:'black track pants'
    },
    {
        id: 3,
        title:'white track top'
    },
    {
        id: 4,
        title:'white track pants'
    },
    {
        id: 5,
        title:'bomber jacket'
    },
    {
        id: 6,
        title:'black hoodie'
    },
    {
        id: 7,
        title:'black t-shirt'
    },
    {
        id: 8,
        title:'red crew neck'
    },
    {
        id: 9,
        title:'shop the full collection'
    },
]
const Navbar = () => {
    const dropdownRef = useRef()
    const buttonRef = useRef()
    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleButtonEnter = () => {
    setDropdownOpen(true);
  };

  const handleButtonLeave = () => {
    setDropdownOpen(false);
  };
    // const handleButtonEnter  = ()=>{
    //     buttonRef.current.style.backgroundColor = 'white'
    //     buttonRef.current.style.color = 'black'
    //     dropdownRef.current.style.display = 'block'
    //     dropdownRef.current.style.backgroundColor = 'pink'
    // }
    // const handleButtonLeave = ()=>{
    //     // buttonRef.current.style.backgroundColor = 'white'
    //     // buttonRef.current.style.color = 'black'
    //     // dropdownRef.current.style.display = 'none'
    //     // dropdownRef.current.style.backgroundColor = 'pink'
    // }
    useEffect(()=>{

    },[isDropdownOpen])
  return (
    <div className='text-black border-2 border-red-600 mt-12 px-12 flex justify-between items-center'>
        <div>

    <Image
      src="/logo.svg"
      width={180}
      height={180}
      alt="Picture of the author"
      className=''
      />
      </div>

      <div className="menu flex relative">
        <button ref={buttonRef} 
     className={`btn uppercase relative border-[1px] border-white px-8 py-2 ${isDropdownOpen ? 'bg-white' : 'bg-pink-500'}`}
        onMouseEnter={handleButtonEnter}
        onMouseLeave={handleButtonLeave}
        >shop the collection</button>
         <ul className={`dropdown-menu ${isDropdownOpen ? 'block' : 'hidden'} text-white absolute uppercase w-full top-[40px] border`}>
            {dropDownData.map((list,index)=>(
                <a href="#">
                {/* <li className='px-4 text-xs py-3 border-b-[#C0C0C0] border-[0.5px] hover:text-[#A5A5A5]' key={list.id}>{list.title}</li> */}
                {/* border-b-[#e40000] */} 
                <li style={{
        borderBottom: index !== dropDownData.length - 1 ? '0.1px solid #6b6b6b' : ''
      }}  className=' px-4 text-xs py-2 hover:text-[#A5A5A5]' key={index}>{list.title}</li>
                </a>
            ))}
          
            
        </ul>
      </div>
    </div>
  )
}

export default Navbar