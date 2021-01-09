import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import styled from 'styled-components'

const GameBoard = styled.div`
padding-left: 400px;
display: flex;
flex-wrap: none;
justify-content: center;
align-items: center;
max-width: 800px;
max-height:800px;
margin: 0;
padding: 0;
`

export default function Board({ cards, flipped, handleClick, dimension, pair, disabled, solved }) {

    return (
        <GameBoard>
            {cards.map((card => <Card
                key={card.id}
                id={card.id}
                title={card.title}
                pair={card.pair}
                width={dimension / 6}
                height={dimension / 6}
                flipped={flipped.includes(card.id)}
                handleClick={handleClick}
                disabled={disabled || solved.includes(card.id)}
                solved={solved.includes(card.id)}
            />))
            }
        </GameBoard>
    )
}

Board.propTypes = {
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    disabled: PropTypes.bool.isRequired,
    pair: PropTypes.string.isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,

}

