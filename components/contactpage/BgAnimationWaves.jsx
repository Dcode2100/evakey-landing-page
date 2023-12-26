import React from 'react'

const BgAnimationWaves = ({label,className}) => {
    return (
        <section className='wave-animation'>
            <text className={`${className} text-label`}>{label}</text>
            <div className='air air1'></div>
            <div className='air air2'></div>
            <div className='air air3'></div>
            <div className='air air4'></div>
        </section>
    )
}

export default BgAnimationWaves