import React from 'react'

function Section({name, children, title, text , bg=true , sy='space-y-16' , className }) {
    return (
        <section id={name} className={`min-h-screen font-Roboto flex items-center py-20 w-full text-white min:h-screen text-center overflow-hidden ${className} ${bg && ('bg-blue-960')}`}>
            <div className={`container px-3  lg:px-20 mx-auto ${sy}`}>
                <div className='space-y-4'>
                    <h3 className='text-3xl uppercase font-black'>
                        {title}
                    </h3>
                    <p className='max-w-xl lowercase  text-lg  mx-auto'>{text}</p>
                </div>
                {children}
            </div>
        </section>
    )
}

export default Section
