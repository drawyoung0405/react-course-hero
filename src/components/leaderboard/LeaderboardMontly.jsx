import React from 'react'
import { useLeaderboard } from '../../hooks/useLeaderboard';

let data = [];

for(let i = 0; i < 10; i++) {
  data.push({
    name: 'Monthly' + i,
    id: i + 1,
    score: i * 3
  })
}

function LeaderboardMontly() {
  const { dataSource, limit, onChangeLimit } = useLeaderboard({
    data
  });
  
  return (
    <div>
      <h3>Leaderboard Monthly</h3>

      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>

        {dataSource.map(data => {
          return (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.score}</td>
            </tr>
          )
        })}
      </table>

      <br />
      <div>
        Limit: 
        <select value={limit} onChange={onChangeLimit}>
          <option value="All">All</option>
          <option value="1">1</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  )
}

export default LeaderboardMontly