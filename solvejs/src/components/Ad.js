import React from 'react';

const adsList = [
    {
        adImg: '../public/images/demo_ad.png'
    }
]

function Ad() {
    return (
        adsList.map(item => 
            <img className='ad' src={item.adImg} />
            )
    )
}