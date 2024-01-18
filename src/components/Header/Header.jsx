import React from 'react'


export default function Header() {
  return (
    <div className='bg-slate-200'>
        <div className='flex row justify-between items-center max-w-6xl mx-auto'>
            <h1 className='font-bold'>Auth App</h1>
            <ul >
                <li >Home</li>
                <li >About</li>
                <li >Sign In</li>
            </ul>
        </div> 
    </div>
  )
}
