import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <>
     <nav className="bg-gray-900 p-4 shadow">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <span className="text-white text-lg font-bold">Houses</span>
        </Link>
        <div>
          <Link href="/">
            <span className="text-gray-300 hover:text-white mx-2">Home</span>
          </Link>
          <Link href="/">
            <span className="text-gray-300 hover:text-white mx-2">About</span>
          </Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header