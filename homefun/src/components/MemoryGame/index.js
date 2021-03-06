import React, { useState, useEffect } from 'react'
import Board from './Board'

import initializeDeck from './Deck'

export default function MemoryGameBoard() {

    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [dimension, setDimension] = useState(400)
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)



    useEffect(() => {
        // resizeBoard()
        setCards(initializeDeck())
    }, [])

    useEffect(() => {
        preloadImages()
    }, cards)

    // useEffect(() => {
    //     const resizeListener = window.addEventListener('resize', resizeBoard)

    //     return () => window.removeEventListener('resize', resizeListener)
    // })

    const handleClick = (id) => {

        setDisabled(true)
        if (flipped.length === 0) {
            setFlipped([id])
            setDisabled(false)
        } else {
            if (matchCardClicked(id)) return
            setFlipped([flipped[0], id])
            if (isMatch(id)) {
                setSolved([...solved, flipped[0], id])
                resetCards()
            } else {
                setTimeout(resetCards, 2000)
            }
        }

    }

    const preloadImages = () => {
        cards.map(card => {
            const src = `./../img${card.title}.svg`
            new Image().src = src

        })
    }

    const resetCards = () => {
        setFlipped([])
        setDisabled(false)
    }

    const matchCardClicked = (id) => flipped.includes(id)

    const isMatch = (id) => {
        const clickedCard = cards.find((card) => card.id === id)
        const flippedCard = cards.find((card) => flipped[0] === card.id)
        return flippedCard.pair === clickedCard.pair
    }

    // const resizeBoard = () => {
    //     setDimension(Math.min(
    //         document.documentElement.clientWidth,
    //         document.documentElement.clientHeight,

    //     ),
    //     )
    // }

    return (
        <div>
            <h2>Znajdź kartę z ikoną pasująca do słowa</h2>
            <Board
                dimension={dimension}
                cards={cards}
                flipped={flipped}
                handleClick={handleClick}
                disabled={disabled}
                solved={solved}
            />
        </div>
    )
}
