import React, { useEffect, useState } from 'react'
// 1. Import images properly
// import dear from '../public/img/dear.jpg'
// import monkey from '../public/img/monkey.jpg'
// import dinosaur from '../public/img/dinosaur.jpg'
// import hen from '../public/img/hen.jpg'
// import fox from '../public/img/fox.jpg'
// import porcupine from "../public/img/porcupine.jpg"
import SingleCard from './components/SingleCard'


// 2. Use images in array
const cardImg = [
    { src: '/img/dear.jpg',matched:false  },
    { src: '/img/monkey.jpg',matched:false  },
    { src:'/img/dinosaur.jpg',matched:false  },
    { src: '/img/hen.jpg' ,matched:false  },
    { src: '/img/fox.jpg' ,matched:false  },
    { src: '/img/porcupine.jpg',matched:false  }
]

function Game() {

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
  



    // shufflecards
    const shuffleCard = () => {
        const shuffleCard = [...cardImg, ...cardImg].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffleCard)
        setTurns(0)
    }


    // choice
    const handleChoice = (cards) => {
        { choiceOne ? setChoiceTwo(cards) : setChoiceOne(cards) }

    }
    // 
    useEffect(() => {

        if (choiceOne && choiceTwo) {
           
            if (choiceOne.src === choiceTwo.src) {
                // console.log('Both cards are equal');

                setCards(prevCards =>{
                    return prevCards.map((cards)=>{
                        if(cards.src === choiceOne.src){
                            return {...cards,matched:true}
                        }else {
                            return cards
                        }
                    } )
                }
                    
                )
                resetTurns()
            } else {
                console.log('both cards are not equal');
                setTimeout(() => {
                    resetTurns()
                }, 1000);
            }
        }

    }, [choiceOne, choiceTwo])
    console.log(cards);
    
    // reset turns
    const resetTurns = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
    }
// for turns

    return (
        <div>
            <div className="app">
                <h1>Memory Game</h1>
                <button onClick={shuffleCard}>New Game</button>

                <div className="card-grid">
                    {cards?.map((cards) => (
                        <SingleCard key={cards.id}
                            cards={cards}
                            handleChoice={handleChoice}
                            flipped={cards === choiceOne || cards === choiceTwo || cards.matched}
                            
                        />
                    ))}
                </div>
                <p className='fs-4'> Turns: {turns}</p>
            </div>
        </div>
    )
}

export default Game
