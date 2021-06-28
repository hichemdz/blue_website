import React from 'react'

function Frame({ className, id }) {
    return (

        <iframe
            className={className}
            width="100%"
            
            src={`https://www.youtube.com/embed/${id}?autoplay`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            llowFullScreen>

        </iframe>
    )
}

export default Frame
