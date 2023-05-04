import React, { useState } from 'react'

import { Button, GoalsNumber, Hr } from '../styles'

export default function GoalButton() {

  const [goals, setGoals] = useState(0)

  function makeGoal() {
    setGoals(goals + 1)
  }

  return (
    <GoalsNumber>
      <span>{goals}</span>
      <Hr />
      <Button onClick={makeGoal}>GOL</Button>
    </GoalsNumber>
  )
}
