import React from 'react'

import './Main.css'

import hero from './hero.png'

export default function Main() {
    return (

        <>
            <div className='hero'>
                <div className='hero__title'>Serdtseva Veronika</div>

                <div className="hero__descr">Beginning website layout designer(junior)
                </div>
                <div className="hero__descr">16 years old, Vladivostok</div>

                <div className='hero__lang'>RU | ENG</div>
            </div>

            <img src={hero} alt=""/>
        </>
    )
}
