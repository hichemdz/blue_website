import React, { useContext, useState } from 'react'
import { Section, Link, Frame } from '.'
import { Context } from '../Contaxt'
import { AboutIcon, Fb, Tw, Ins, Yt, Play, Close } from '../icons'



const Video = ({ id, setShow }) => {
    return (
        <div  className='bg-blue-950 bg-opacity-80 shadow-2xl flex items-center justify-center  w-full h-full fixed z-9999 top-0 left-0'>
            <button
                className='transition-all duration-200 ease-linear   absolute top-10 right-10 focus:outline-none'
                onClick={() => setShow(false)}>
                <Close className='hover:text-indigo-400 w-8 h-8  fill-current text-white' />
            </button>
            <Frame className='h-96 w-full max-w-2xl' id={id} />
        </div>
    )
}

const Left = ({ subTitle, subTitleTow, aboutText, fb, tw, ins, yt }) => {
    return (
        <div className='relative md:text-left'>
            <AboutIcon className='transform  hidden md:block -translate-x-16 -translate-y-48 absolute top-0 left-0' />
            <div className='relative z-50 space-y-3'>
                <h4 className='text-xl  font-bold'>{subTitle}</h4>
                <p className='max-w-md mx-auto md:mx-0 pr-3'>{aboutText}</p>
                <h4 className='text-xl  font-bold'>{subTitleTow}</h4>
                <div className='flex '>
                    <div className='flex items-center space-x-3 mx-auto md:mx-0'>

                        <Link href={fb}>
                            <Fb className='fill-current w-4 h-4' />
                        </Link>
                        <Link href={fb}>
                            <Ins className='fill-current w-4 h-4' />
                        </Link>
                        <Link href={fb}>
                            <Tw className='fill-current w-4 h-4' />
                        </Link>
                        <Link href={fb}>
                            <Yt className='fill-current w-4 h-4' />
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    )
}

const Right = ({ img, setShow }) => {
    return (
        <div className='flex justify-center md:justify-end '>
            <div className='relative border-2 border-white w-full max-w-md h-96 '>
                <div
                    className='flex items-center justify-center right-0 top-0 md:right-10 md:top-10 absolute w-full h-full '
                    style={{ background: `url(${img}) no-repeat center` }}>
                    <button onClick={() => setShow(true)}>
                        <Play className='w-8 h-8 ' />
                    </button>
                </div>
            </div>
        </div>
    )
}
function About() {
    const { about } = useContext(Context);
    const [show, setShow] = useState(false)

    return (
        <React.Fragment>
            <Section 
                name='about'
                className='md:pb-48'
                title={about.title}
                text={about.text}
                sy="space-y-12 md:space-y-48"
            >

                <div className='items-center  grid grid-cols-1  md:grid-cols-2 gap-8'>
                    <Left
                        subTitle={about.subTitle}
                        subTitleTow={about.subTitleTow}
                        aboutText={about.aboutText}
                        fb={about.fb}
                        tw={about.tw}
                        ins={about.ins}
                        yt={about.yt} />

                    <Right img={about.img} setShow={setShow} />
                </div>


            </Section>
            {
                show && (
                    <Video id={about.video}  setShow={setShow}/>
                )
            }
        </React.Fragment>
    )
}

export default About
