import React from 'react'
import './FirstSection.scss'
import { ReikoHeaderSvg } from './ReikoHeaderSvg';
import { HeaderBackground } from './HeaderBackground';

export const FirstSection = () => {
  return (
    <div>
      <div className='first-section' >
        <div className='first-section__text-div'>
          <h1 className='first-section__first-header' >FROM THE STUDIO</h1>
          <h1 className='first-section__second-header' >TO YOUR FANS</h1>
          <p className='first-section__header-description' >
           Reiko is a platform made for <span className='first-section__musicians-span' >musicians</span>,
           built by <span className='first-section__fans-span'>fans</span>.
           </p>
        </div>
        <div className='first-section__header-svg' >
          <ReikoHeaderSvg/>
        </div>
      </div>
      <HeaderBackground/>
    </div>
  )
}
