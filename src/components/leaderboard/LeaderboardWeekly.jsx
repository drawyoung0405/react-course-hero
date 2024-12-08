import React from 'react'
import { useLeaderboard } from '../../hooks/useLeaderboard';

let data = [];

for(let i = 0; i < 5; i++) {
  data.push({
    name: 'Weekly' + i,
    id: i + 1,
    score: i * 3
  })
}

function LeaderboardWeekly() {
  const { dataSource, limit, onChangeLimit } = useLeaderboard({
    data,
     apiUrl: 'https://jsonplaceholder.typicode.com/photos'
  });

  return (
    <div>
      <h3>LeaderboardWeekly</h3>

      <table border={1}>
        <tr>
          <th>Avatar</th>
          <th>Score</th>
        </tr>

        {dataSource.map(data => {
          return (
            <tr key={data.id}>
              <td><img src={data.thumbnailUrl} alt="" /></td>
              <td>{data.title}</td>
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

export default LeaderboardWeekly