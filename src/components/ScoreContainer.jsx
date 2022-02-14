import React from 'react'

import MatchInfo from './MatchInfo'
import Team from './Team'

import { Container } from '../styles'

export default function ScoreContainer() {
  return (
    <Container>
        <div>
            <h3>Casa</h3>
            <Team 
                teamImg="https://logodownload.org/wp-content/uploads/2016/11/Corinthians-logo-escudo.png"
                teamName="Corinthians"/>
        </div>

        <div>
            <MatchInfo 
                stadium="Neo Química Arena/SP"
                date="26/03/2022"
                hour="19h"/>
        </div>

        <div>
            <h3>Fora</h3>
            <Team  
                teamImg="https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-escudo-novo-4.png"
                teamName="Flamengo"/>
        </div>
    </Container>
  )
}
