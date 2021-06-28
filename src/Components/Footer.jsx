import React, { useContext } from 'react'
import { Link } from '.'
import { Context } from '../Contaxt'
import {Fb, Tw, Ins, Yt } from '../icons'
function Footer({ Logo }) {
    const { logo, footer ,about } = useContext(Context)
    const {tw,yt,ins,fb} = about
    return (
        <footer className='space-y-16 pt-16 font-Roboto'>
            <div className='container text-center space-y-8 text-white mx-auto'>
                <div className='flex items-center justify-center'>
                    <img className='w-32' src={logo} alt='hichem' />
                </div>
                <p className='max-w-lg mx-auto text-sm leading-6 font-Roboto font-semibold'>{footer.intro}</p>
                
                <div className='flex justify-center '>
                    <div className='flex items-center space-x-3 mx-auto '>

                        <Link className=' transition-all duration-200 hover:text-blue-450 hover:animate-ping' href={fb}>
                            <Fb className='fill-current w-6 h-6' />
                        </Link>
                        <Link className=' transition-all duration-200 hover:text-blue-450 hover:animate-ping' href={ins}>
                            <Ins className='fill-current w-6 h-6' />
                        </Link>
                        <Link className=' transition-all duration-200 hover:text-blue-450 hover:animate-ping' href={tw}>
                            <Tw className='fill-current w-6 h-6' />
                        </Link>
                        <Link className=' transition-all duration-200 hover:text-blue-450 hover:animate-ping' href={yt}>
                            <Yt className='fill-current w-6 h-6' />
                        </Link>

                    </div>
                </div>
            </div>
            <div className='bg-white flex justify-center py-8'>
                 <p className='font-black text-sm'> {new Date().getFullYear()} HMDeveloper. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
