import React, { useContext, useState } from 'react'
import { Section } from '.'
import { Context } from '../Contaxt'

const Item = ({ thumbnails, title }) => {
    return (
        <a href={thumbnails} className='space-y-3 relative  text-white text-center'>
                <img
                    width={242.29}
                    height={318}
                    className=' transition-all duration-150 mx-auto transform hover:scale-105'
                    src={thumbnails}
                    alt={title} />
                <h4 className=' font-bold text-xl'>{title}</h4>
            
        </a >
    )
}

function Portfolio() {
    const { portfolio } = useContext(Context);
    const [count, setCount] = useState(8)
    const [active, setActive] = useState(true)

    const works = portfolio.works.filter((i, k) => {
        return k + 1 <= count;
    })

    const more = () => {
        setCount(count + 4)
        if (count + 4 >= portfolio.works.length) setActive(false)

    }

    return (
        <React.Fragment>

            <Section
                name='portfolio'
                title={portfolio.title}
                bg={false}
                text={portfolio.text}>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        works.map(i => <Item 
                            key={i.id}
                            thumbnails={i.thumbnails}
                            title={i.title}
                        />)
                    }
                    <div className=' flex items-center justify-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4'>

                        {
                            active && (<button onClick={more} className='focus:outline-none hover:bg-indigo-500 px-8 py-1 rounded-2xl bg-indigo-400 text-white '> more</button>)
                        }
                    </div>
                </div>
            </Section>
        </React.Fragment>
    )
}

export default Portfolio
