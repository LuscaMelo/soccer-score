import React, { useState }from 'react'

import { Button, GoalsNumber } from '../styles'

export default function GoalButton() {

  const [goals, setGoals] = useState(0)

  function makeGoal() {
    setGoals(goals + 1)
  }

  return (
    <GoalsNumber>
      <span>{goals}</span>
      <Button onClick={makeGoal}>Gol</Button>
    </GoalsNumber>
  )
}
