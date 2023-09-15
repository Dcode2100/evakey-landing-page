import React from 'react'

const BgAnimationWaves = ({label,className}) => {
    return (
        <section className='wave-animation'>
            <text className={`${className} text-label`}>{label}</text>
            <div class='air air1'></div>
            <div class='air air2'></div>
            <div class='air air3'></div>
            <div class='air air4'></div>
        </section>
    )
}

export default BgAnimationWaves