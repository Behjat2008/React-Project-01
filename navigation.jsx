import React from 'react'

export default function Navigation() {
  return (
    <div>
      <nav className="container">
         <div className="logo">
         <img src="\images\brand_logo.png" alt="Brand Logo" className="h-12" />
        </div>
         <ul className="flex space-x-4 items-center">
           <li>Menu</li>
           <li>Location</li>
           <li>About</li>
           <li>Contact</li>
         </ul>
         <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
       </nav>
    </div>
  )
}


