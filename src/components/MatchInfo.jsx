import React from 'react'

import { Info } from '../styles'

export default function MatchInfo(props) {
    return (
        <Info>
            <h3>{props.stadium}</h3>
            <div>
                <p>{props.date}</p>
                <span>-</span>
                <p>{props.hour}</p>
            </div>
        </Info>
    )
}
