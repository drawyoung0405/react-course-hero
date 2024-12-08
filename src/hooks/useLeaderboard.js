import React from 'react'

export const useLeaderboard = ({ data, apiUrl }) => {
  const [dataSource, setDataSource] = React.useState([]);
  const [limit, setLimit] = React.useState('All')

  React.useEffect(() => {
    async function fetchDataSource() {
      const response = await fetch(`${apiUrl}?_page=1&_limit=${limit}`)
      const data = await response.json();
      setDataSource(data)
    }
    fetchDataSource();
  }, [limit])

  function onChangeLimit(e) {
    setLimit(e.target.value)
  }

  return {
    dataSource,
    limit,
    onChangeLimit
  }
}