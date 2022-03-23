import React from 'react'
import './App.css'

export function Homepage(props){
        return(
        <>
        <div style = {{display: props.disp}}>
        <h1 className='homeHeading'>HOMEPAGE</h1>
        <div>
            <div className='homeGrid1'>
                <div>
                <h2 className='homeSubHeading'>Bring Your Dorm Garden to Life</h2>
                <article>
                Suspendisse vel commodo lorem. Donec nec justo nec ligula maximus convallis. Nunc hendrerit dolor nibh, sit amet pellentesque urna placerat sed.                 Suspendisse vel commodo lorem. Donec nec justo nec ligula maximus convallis. Nunc hendrerit dolor nibh, sit amet pellentesque urna placerat sed.                 Suspendisse vel commodo lorem. Donec nec justo nec ligula maximus convallis. Nunc hendrerit dolor nibh, sit amet pellentesque urna placerat sed.                 Suspendisse vel commodo lorem. Donec nec justo nec ligula maximus convallis. Nunc hendrerit dolor nibh, sit amet pellentesque urna placerat sed.  
                </article>
                </div>
                <img className='img1' src = 'https://thumbs.dreamstime.com/b/florist-man-reading-barcode-potted-plant-shop-29061295.jpg'/>

            </div>
        </div>
        </div>
        </>
        )
    }