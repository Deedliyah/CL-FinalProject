import React from 'react'
import PropTypes from 'prop-types'
import { CardItem, CardItemBack, CardItemFront, FlipContainer, Flipped, Flipper } from './memoryGameElements'


export default function Card({ handleClick, id, flipped, height, width, title }) {
    return (
        <div>
            <FlipContainer className={`FlipContainer ${flipped ? Flipped : ''}`} style={{ width, height }} onClick={() => handleClick(id)} />
            <Flipper style={{ height, width }}>
                <CardItem style={{ height, width }} className={flipped ? CardItemFront : CardItemBack} src={flipped ? `../../img/${title}.svg` : CardItemBack} />
            </Flipper>
        </div>
    )
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    flipped: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
} 