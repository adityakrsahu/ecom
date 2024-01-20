import React from 'react'
import '../assets/style/index.css'

const Trusted = () => {
  return (
    <>
      <div className='brand-section'>
        <div className='container'>
          <h3 className='h3'>Trusted By 1000+ Companies</h3>
          <div className='brand-section-slider'>
            <div className='slider'>
              <img className='img' src='data:image/jpeg;base64,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' alt='........'/>
            </div>
            <div className='slider'>
              <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6HPHIrFlLMTBoEu9GNpq-QINwRAl5qAQ8Q&usqp=CAU' alt='...'/>
            </div>
            <div className='slider'>
              <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zESmqpx3ztLxsRzroe_76K_A1b_tJyPPuQ&usqp=CAU' alt='.....'/>
            </div>
            <div className='slider'>
              <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4Zvzj6iqJT-zewUwDfUpSSd5ddjgr3a43Q&usqp=CAU' alt='.....'/>
            </div>
            <div className='slider'>
              <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdJWFgznrBIkRbih-hfkUoDna95PyJJEtkA&usqp=CAU' alt='.....'/>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Trusted;