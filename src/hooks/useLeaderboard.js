import React from 'react'

export const useLeaderboard = ({ data }) => {
  const [dataSource, setDataSource] = React.useState([]);
  const [limit, setLimit] = React.useState('All')

  React.useEffect(() => {
    let newData = [];

    if(limit === 'All') {
      newData = data;
    } else {
      newData = data.slice(0, Number(limit))
    }

    // call api
    setDataSource(newData)
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