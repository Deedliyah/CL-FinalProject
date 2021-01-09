import React from 'react'
import styled from 'styled-components'

export const FlipContainer = styled.div`
perspective: 700px;
display: inline-block;
border: 1px solid white;
background: black;

/* &.flipper {
    transition: 0.5s;
    transform-style: preserve-3d;
    position:relative;
    transform: rotateY(180deg);
} */

/* &.flipped {
    transform:rotateY(180deg);
} */
`

export const Flipper = styled(FlipContainer)`
    transition: 0.5s;
    transform-style: preserve-3d;
    position:relative;
    transform: rotateY(180deg);
`

export const Flipped = styled(FlipContainer)`
    transform:rotateY(180deg);
`

export const CardItem = styled.div`
    backface-visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;

/* &.back {
    z-index: 2;
    transform: rotateY(0deg);
}
&.front {
    transform: rotateY(180deg)
} */
`
export const CardItemFront = styled(CardItem)`
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #010101;
    width: 100%;
    height: 100%;
    font-size: 48px;
    font-weight: 700;
`

export const CardItemBack = styled(CardItem)`
    z-index: 2;
    transform: rotateY(0deg);
    background-image: url('./../../img/card-back.svg');
`

