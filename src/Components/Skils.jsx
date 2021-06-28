import React, { useState, useContext, useRef, useEffect } from 'react'
import { Section } from '.'
import { Context } from '../Contaxt'

const Item = ({ name, progress, color }) => {
    const skil = useRef(null)
    const animate = useRef(null)
    const [circumference, setCircumference] = useState(503)
    const [dashoffset, setDashoffset] = useState(0)
    const [count, setCount] = useState(0)
    const xy = 100;
    const r = 80;

    // const progressVal = (p) => {
    //     const _p = circumference - (p * circumference / 100)
    //     setDashoffset(_p)

    // }
    useEffect(() => {
        let p = skil.current.r.baseVal.value * 2 * Math.PI
        setCircumference(Math.round(p))
    }, [])

    useEffect(() => {
        let count = 0
        const intProgr = setInterval(() => {
            const _p = circumference - (count * circumference / 100)
            setDashoffset(_p)
            if (count >= progress) clearInterval(intProgr);
            count++
            setCount(count)
        }, 100)

    }, [progress,circumference])



    return (
        <div className=' space-y- text-white text-center'>
            <div className='relative'>

                <svg className='mx-auto' width={200} height={200}>
                    <circle
                        ref={skil}
                        fill='none'
                        cx={xy}
                        cy={xy}
                        r={r}
                        strokeWidth={12}
                        stroke='#0F0951'
                        className='a'

                    >
                    </circle>

                    <circle
                        className='b'
                        ref={animate}
                        fill='none'
                        cx={xy}
                        cy={xy}
                        r={r}
                        strokeWidth={12}
                        stroke={color}
                        strokeLinecap='round'

                        strokeDasharray={circumference}
                        strokeDashoffset={dashoffset}
                    >

                    </circle>

                </svg>
                <span className='font-black text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3'>
                    {count}%
                </span>
            </div>
            <h4 className='font-bold text-lg'>
                {name}
            </h4>
        </div>
    )
}

function Service() {
    const { skils } = useContext(Context);
    return (
        <Section
            name='skils'
            title={skils.title}
            text={skils.text}
            bg={false}
        >
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 '>

                {
                    skils.skils.map(i =>
                        <Item
                            key={i.id}
                            name={i.name}
                            progress={i.progress}
                            color={i.color}
                        />)
                }
            </div>
        </Section>

    )
}

export default Service
