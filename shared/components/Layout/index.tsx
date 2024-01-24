import React,{PropsWithChildren} from 'react'
import Navbar from '../Navbar'

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
    <Navbar/>
    <main className='min-h-screen'>{children}</main>
    </>
  )
}

export default Layout