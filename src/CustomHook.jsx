import React from 'react'
import LeaderboardDaily from './components/leaderboard/LeaderboardDaily'
import LeaderboardMontly from './components/leaderboard/LeaderboardMontly'
import LeaderboardWeekly from './components/leaderboard/LeaderboardWeekly'


/* custom hook
- sử dụng để tách code logic và render UI ra độc lập
- để tái sử dụng code logic
- nó là local state, local hook của 1 component
*/

function CustomHook() {
  return (
    <div>
      <h1>CustomHook</h1>

      <LeaderboardDaily />

      <LeaderboardMontly />

      <LeaderboardWeekly />
    </div>
  )
}

export default CustomHook