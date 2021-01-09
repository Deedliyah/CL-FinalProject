import React from 'react'
import PropTypes from 'prop-types'
import { CardItem, CardItemBack, CardItemFront, FlipContainer, Flipped, Flipper } from './memoryGameElements'


export default function Card({ handleClick, id, flipped, height, width, title, disabled, solved }) {
    return (
        <div>
            <FlipContainer className={`FlipContainer ${flipped ? Flipped : ''}`} style={{ width, height }} onClick={() => disabled ? null : handleClick(id)} />
            <Flipper style={{ height, width }}>
                <CardItem style={{ height, width }} className={flipped ? CardItemFront : CardItemBack} src={flipped || solved ? `./../../../img/${title}.svg` : `./../../../img/card-back.svg`} />
            </Flipper>
        </div>
    )
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
}
