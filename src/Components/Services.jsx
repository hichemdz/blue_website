import React, { useContext } from 'react'
import { Section } from '.'
import { Context } from '../Contaxt'

const Item = ({ img, title, description }) => {
    return (
        <div className=' hover:animate-bounce transition-all pb-8 cursor-pointer transform hover:scale-105 hover:shadow-2xl group space-y-3 text-white text-center'>
            <img
                width={242.29}
                height={318}
                className=' mx-auto w-48'
                src={img}
                alt={title} />
            <h4 className='group-hover:text-blue-450 font-bold text-xl'>{title}</h4>
            <p className='max-w-xs px-16 text-xs  mx-auto'>{description}</p>
        </div>
    )
}

function Service() {
    const { services } = useContext(Context);
    return (
        <Section
            name='services'
            title={services.title}
            text={services.text}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    services.services.map(i => <Item key={i.id}
                        img={i.img}
                        title={i.title}
                        description={i.description} />)
                }
            </div>
        </Section>
    )
}

export default Service
