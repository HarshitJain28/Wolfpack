import React from 'react'
import thumbnail from '../media/thumbnail.jpg'
import medium from '../media/medium.jpg'
import large from '../media/large.jpg'
import greyscale from '../media/greyscale.jpg'

export default function Images() {
  return (
    <div className='container my-2'>
        <h6>Thumbnail</h6>
          <img src={thumbnail} alt=""/>
        <h6>Medium</h6>
          <img src={medium} alt=""/>
        <h6>Large</h6>
          <img src={large} alt=""/>
        <h6>Greyscale</h6>
          <img src={greyscale} alt=""/>
    </div>
  )
}
