import React, { useState } from 'react'
import { Bar, Close } from '../icons'
import { Link, animateScroll as scroll } from 'react-scroll'
const NavLink = ({ Icon, name , link=name }) => {
    return (
        <li>
            <Link 
                 activeClass="text-blue-450" 
                 to={link.toLowerCase()}
                 spy={true} 
                 smooth={true} 
                 offset={0} 
                 duration={1000} 
                 className='cursor-pointer capitalize transition-all font-medium text-sm hover:text-blue-400 text-white' 
                 >
                {
                    Icon && (<Icon className='w-6 h-6' />)
                }

                {name}
            </Link>
        </li>
    )
}


function Header({ logo, className }) {
    const [show, setShow] = useState(false)

  

    return (
        <header className={className}>
            <nav className='container px-5 mx-auto flex items-center justify-between'>
                <a href='/'>
                    <img width={87} height={16} src={logo} alt='props' />
                </a>
                <div className=''>
                    <ul className='hidden  md:flex items-center space-x-5'>
                        <NavLink name='home' />
                        <NavLink name='Services' />
                        <NavLink name='Skils' />
                        <NavLink name='about us' link='about' />
                        <NavLink name='portfolio' />
                        <NavLink name='contact us' link='contact' />
                    </ul>

                    <button onClick={() => setShow(true)} className='block focus:outline-none md:hidden'>
                        <Bar className='fill-current text-white' />
                    </button>
                </div>
            </nav>
            <div className={'transform transition-all duration-200 md:hidden fixed flex items-center  top-0 left-0 w-full h-screen bg-blue-950 z-9999 ' + (show ? 'translate-x-0' : 'translate-x-full')}>

                <button
                    onClick={() => setShow(false)}
                    className='absolute top-10 right-10 block focus:outline-none md:hidden'>
                    <Close className='fill-current text-white' />
                </button>
                <ul className='w-full space-y-5 text-center '>
                    <NavLink name='home' />
                    <NavLink name='Services' />
                    <NavLink name='Skils' />
                    <NavLink name='portfolio' />
                    <NavLink name='contact us' />
                </ul>
            </div>
        </header >
    )
}

export default Header
