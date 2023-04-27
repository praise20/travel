import React from 'react'
import data from '../data.js'

function Header(){
    return(
        <div className='header'>
            <h1>Travel Bucketlist</h1>
        </div>
    )
}

function Section(){
    const dataArray= data.map(item =>
        <div className='center'>
            <div className='section'>
            <img className='section-img' src={item.image} alt="image"/>
                <div className='aside'>
                   <span className='location'><img className='icon' src={item.navIcon}/><p>{item.location}</p></span>
                   <h2 className='place-text'>{item.place}</h2>
                   <p className='description'>{item.description}</p>
                </div>
            </div>
        </div>  
    )
    return (
        <div>
            {dataArray}
        </div>
    )
}
function Cards() {

  return (
    <div>
        <Header />
        <Section/>
   </div>
  )
}

export default Cards