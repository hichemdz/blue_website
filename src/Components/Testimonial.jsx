import React, { useContext } from 'react'
import Slider from "react-slick";
import { Section } from '.'
import { Context } from '../Contaxt'

const Item = ({ img, name, jobe, comment }) => {
    return (
        <div className='hover:bg-blue-100 border-r border-l border-blue-960 rounded mt-8 mx-auto shadow relative bg-white  pt-16  pb-8 text-center space-y-5 w-80 px-5  '>

            <div className='flex items-center justify-center top-0 absolute left-1/2 transform  -translate-x-1/2 -translate-y-10  z-50  rounded-full bg-blue-960  w-24 h-24'>
                <img
                    width={242.29}
                    height={318}
                    className='w-16 h-16 rounded-full transition-all duration-150 mx-auto transform hover:scale-105'
                    src={img}
                    alt={name} />
            </div>
            <div>

                <h3 className=' font-bold text-xl text-gray-900'>{name}</h3>
                <h4 className=' text-lg text-gray-400'>{jobe}</h4>
            </div>
            <p className='text-gray-600 text-sm max-w-md'>
                {comment}
            </p>

        </div>
    )
}

function Testimonial() {
    const { testimonial } = useContext(Context);
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 741,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <Section
            name='testimonial'
            title={testimonial.title}
            text={testimonial.text}
        >
            <div className=' '>
                <Slider {...settings}>

                    {
                        testimonial.testimonials.map(i => <Item key={i.id}
                            img={i.img}
                            name={i.name}
                            comment={i.comment}
                            jobe={i.jobe}
                        />)
                    }
                </Slider>

            </div>
        </Section>
    )
}

export default Testimonial
