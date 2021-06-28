import React, { useContext } from 'react'
import { Header, Star } from '.'
import { Context } from '../Contaxt';
import { MainIcon } from '../icons';
import {Link} from 'react-scroll'
const Main = () => {
    const { logo, main } = useContext(Context)

    return (
        <main
            id='home'
            className='shadow overflow-hidden relative w-full h-screen flex items-center justify-center'>
            <Header 
            className='bg-blue-950 z-999 py-5 fixed top-0 left-0 w-full' 
               logo={logo} />

            {
                [...Array(50)].map((i, k) => <Star
                    key={k}
                    left={Math.random() * 100}
                    top={Math.random() * 100}
                    delay={k}
                    className='fill-current text-white star absolute w-8 h-8' />
                )

            }

            <MainIcon className=' w-20 h-20 absolute left-32 top-32 hidden md:block' />
            <MainIcon className=' w-20 h-20 absolute right-32 bottom-32 hidden md:block' />
            <div className='relative z-50 container mx-auto px-3 text-white space-y-4 text-center'>
                <h3 className='font-bold text-lg sm:text-2xl md:text-title tracking-widest uppercase'>
                    {main.title}
                </h3>
                <h1 className='font-bold text-xl sm:text-4xl  lg:text-subTitle tracking-widest uppercase'>
                    {main.subTitle}
                </h1>
                <p className='max-w-md px-2 mx-auto font-medium '>
                    {main.intro} <span className='text-blue-450'>{main.subIntro}</span>
                </p>
                <Link 
                 to='contact'
                 smooth={true} 
                 className='cursor-pointer inline-block transition-all duration-200 text-blue-450 border border-transparent hover:border-blue-450 px-5 py-2 rounded'>contact</Link>
            </div>

        </main>
    )
}

export default Main
