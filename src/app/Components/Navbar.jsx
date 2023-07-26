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
    const buttonRef = useRef(null);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const handleButtonClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleMouseEnter = () => {
      setIsDropdownOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsDropdownOpen(false);
    };
  // const handleTouchStart = () => {
  //   setIsDropdownOpen(true);
  // };  


  return (
    <>
    <div className='text-black mt-8 px-12 flex justify-between items-center'>
        <div>

    <Image
      src="/logo.svg"
      width={180}
      height={180}
      alt="Picture of the author"
      className=''
      />
      </div>


      <div className="menu flex relative h-auto">
      <button
      ref={buttonRef}
        onClick={handleButtonClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // onTouchStart={handleTouchStart}
        className={`btn uppercase border-[1px] h-10 px-8 py-2 ${
          isDropdownOpen ? "bg-white text-black border-none" : "bg-black text-white"
        }`}
        style={{
          transition: 'background-color 0.3s ease',
        }}
      >
        shop the collection
      </button>

      {isDropdownOpen && (
        <ul
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute text-white uppercase w-full h-auto top-[40px] border`}
          style={{ width: buttonRef.current.clientWidth }}
        
        >
          {dropDownData.map((item) => (
            <a href="#" className="" key={item.id}>
              <li
                style={{
                  transform: isDropdownOpen ? 'translateX(0)' : 'translateX(20px)',
                  borderBottom:
                    item.id !== dropDownData.length ? "0.1px solid #6b6b6b" : "",
                }}
                className="cursor-pointer item px-4 text-xs py-2 hover:text-[#A5A5A5] "
              >
                {item.title}
              </li>
            </a>
          ))}
        </ul>
      )}
    </div>




    </div>
    </>
  )
}

export default Navbar