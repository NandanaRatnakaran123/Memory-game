import React from 'react'
import './SingleCard.css'
// import boxImg from '../assets/img/box-img.jpeg' // for back side



function SingleCard({cards,handleChoice ,flipped}) {

    const handleClick=()=>{
        handleChoice(cards)
    }

  return (
    <div>
      <div className="card">
                <div className={flipped? "flipped" :""} >
                    <img src={cards.src} className='front' alt="card front" />
                <img src="/img/box-img.jpeg"
                 className='back' 
                 alt="card back" 
                 onClick={handleClick}
                 />
                </div>
            </div>
    </div>
  )
}

export default SingleCard
