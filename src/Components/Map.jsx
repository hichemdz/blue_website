import React from 'react'

function Map(props) {
    return (
        <div>
            <iframe
              title="blida"  
              width="800" 
              height="
              600" 
              style={{border:0}} 
              {...props}
              loading="lazy"></iframe>
        </div>
    )
}

export default Map
