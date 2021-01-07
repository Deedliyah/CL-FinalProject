import React from 'react'
import { OfferContainer, OfferCard, OfferWrapper, OfferH1, OfferH2, OfferIcon, OfferP } from '../Offer/OfferElements'
import Icon1 from '../../img/svg-2.svg'
import Icon2 from '../../img/svg-2.svg'
import Icon3 from '../../img/svg-2.svg'

const Offer = () => {
    return (
        <OfferContainer id="offer">
            <OfferH1>Coś</OfferH1>
            <OfferWrapper>
                <OfferCard>
                    <OfferIcon src={Icon1} />
                    <OfferH2>lorem</OfferH2>
                    <OfferP>
                        loremloremlorem
                    </OfferP>
                </OfferCard>
                <OfferCard>
                    <OfferIcon src={Icon2} />
                    <OfferH2>lorem</OfferH2>
                    <OfferP>
                        loremloremlorem
                    </OfferP>
                </OfferCard>
                <OfferCard>
                    <OfferIcon src={Icon3} />
                    <OfferH2>lorem</OfferH2>
                    <OfferP>
                        loremloremlorem
                    </OfferP>
                </OfferCard>
            </OfferWrapper>
        </OfferContainer>
    )
}

export default Offer
