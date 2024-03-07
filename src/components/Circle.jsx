import React from 'react'

export default function Circle({number , className}) {
  return (
    <div className="text-base font-black text-gray mt-16 mb-6">
        <div className="w-[0.0625rem] h-[5.25rem] bg-gray opacity-25 mx-auto"></div>
        <div className={`${className} w-14 h-14 bg-white rounded-full mx-auto border-2 border-gray border-opacity-25 text-center leading-[3.5rem]`}>
          {number}
        </div>
      </div>
  )
}
