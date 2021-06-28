import React, { useContext } from 'react'
import { Section, Input,TextArea } from '.'
import { Context } from '../Contaxt'
import {  Phone, Email, Location } from '../icons'



const Item = ({ Icon, value }) => {

    return (
        <div className='flex items-center space-x-2'>
            <Icon className='w-6 h-6 fill-current text-white' />
            <p className='text-md lowercase'>{value}</p>
        </div>
    )
}

const Left = ({ subTitle, subText, phone, email, location }) => {
    return (
        <div className='relative md:text-left'>
           
            <div className='relative z-50 space-y-4'>
                <h4 className='text-xl  font-bold'>{subTitle}</h4>
                <p className='max-w-md mx-auto md:mx-0 pr-3'>{subText}</p>
                <div className='flex flex-col  items-center md:items-stretch space-y-5'>
                    <Item Icon={Location} value={location} />
                    <Item Icon={Email} value={email} />
                    <Item Icon={Phone} value={phone} />

                </div>
            </div>
        </div>
    )
}

const Right = ({handelInput}) => {
    return (
        <div className='relative z-50 col-span-2 text-gray-500'>
            <form className='text-left w-full space-y-5'>
                <div className='flex items-center space-x-5'>
                    <Input
                        className='w-full'
                        placeholder="Name*"
                        name='name'
                        handelInput={handelInput} 
                        />
                    <Input
                        className='w-full'
                        placeholder="Email*"
                        type='email'
                        name='email'
                        handelInput={handelInput} 
                        />

                </div>
                <div className='flex items-center space-x-5'>
                    <Input
                        className='w-full'
                        placeholder="Subject*"
                        name='subject'
                        handelInput={handelInput} 
                        />
                   
                </div>
                <div className='flex items-center space-x-5'>
                    <TextArea
                        className='w-full'
                        placeholder="Message*"
                        name='message'
                        handelInput={handelInput} 
                        />
                   
                </div>

                <button className='transition-all hover:bg-indigo-200 text-gray-500 text-xs rounded-md uppercase  bg-white focus:outline-none px-5 py-3'>
                  send message
                </button>
            </form>
        </div>
    )
}
function About() {
    const { contact } = useContext(Context);
    return (
        <Section
            name='contact' 
            title={contact.title}
            text={contact.text}
            
            bg={false}
        >
            <div className='items-center  grid grid-cols-1  md:grid-cols-3 gap-8'>
                <Left
                    subTitle={contact.subTitle}
                    subText={contact.subText}

                    phone={contact.phone}
                    email={contact.email}
                    location={contact.location}
                />

                <Right />
               
            </div>
        </Section>
    )
}

export default About
