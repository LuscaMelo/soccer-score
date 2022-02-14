import React from 'react'
import GoalButton from './GoalButton'
import { TeamContainer } from '../styles'

export default function (props) {

    return (
        <TeamContainer>
            <div>
                <img src={props.teamImg} alt="" />
                <h2>{props.teamName}</h2>
            </div>
            <GoalButton />
        </TeamContainer>
  )
}
