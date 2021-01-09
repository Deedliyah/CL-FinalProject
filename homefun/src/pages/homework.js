import MemoryGame from './../components/MemoryGame'
import React from 'react'
import styled from 'styled-components'
import QuizHomework from '../components/Quiz'

const PageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
height: 100%;

`

export const homework = () => {
    return (
        <div>
            <h1>Ogólne info o pracach domowych</h1>
        </div>
    )
}

export const newHomework = () => {
    return (
        <PageContainer>
            <QuizHomework />
        </PageContainer>
    )
}

export const archHomework = () => {
    return (
        <PageContainer>
            <h1>To było i juz nie wróci ;P</h1>
        </PageContainer>
    )
}