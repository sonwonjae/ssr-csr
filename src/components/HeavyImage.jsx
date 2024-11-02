import React from 'react'



function HeavyImage({ id }) {

    return (
        <img src={`/heavy${id}.jpg`} style={{ objectFit: 'cover', width: '100%'}} />
    )
}

export default HeavyImage;