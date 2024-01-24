import React from 'react'
import Link from 'next/link'
import { ROUTER } from '@/shared/constant/router'
import { activeLinks } from '@/shared/utils/ActiveLinks'
import { useRouter } from 'next/router'

const Navbar: React.FC = () => {
  const {pathname} = useRouter()
  return (
    <>
    <div className='p-4 bg-gray-800 text-gray-400 font-poppins text-xl capitalize '>
        <div className='flex justify-center items-center'>
            <span className='hover:text-blue-400 transition duration-500 text-4xl'>
                <Link href={ROUTER.Home}
                className={
                  activeLinks(ROUTER.Home, pathname)
                  ? " text-sky-300 hover:text-sky-400 transition duration-500"
                  : " text-gray-400   hover:text-sky-300 transition duration-500"
                }
                >
                  Blog
                </Link>
            </span>
            <span className='hover:text-blue-400 transition duration-500 text-4xl ml-4'>
                <Link href={ROUTER.Add}
                className={
                  activeLinks(ROUTER.Add, pathname)
                  ? " text-sky-300 hover:text-sky-400 transition duration-500"
                  : " text-gray-400   hover:text-sky-300 transition duration-500"
                }
                >
                  Add
                </Link>
            </span>
        </div>

    </div>
    </>
  )
}

export default Navbar