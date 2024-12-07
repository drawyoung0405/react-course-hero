import React from "react";
import JobList from "./JobList";

const PAGE_SIZE = 5;

function JobBoard() {
  const [idJobs, setIdJobs] = React.useState([]);
  const [jobs, setJobs] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  async function fetchJobIds(currPage) {
    let jobs = idJobs;
    if (jobs.length === 0) {
      const res = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json");
      const data = await res.json();
      jobs = data;
      setIdJobs(jobs);
    }

    // page 0: start = 0, 5
    // page 1: start = 5, 10
    const start = currPage * PAGE_SIZE; 
    const end = start + PAGE_SIZE;
    return jobs.slice(start, end)
  }

  async function fetchJobs(currPage) {
    const jobIdsForPage = await fetchJobIds(currPage) ; // [1,2,3,4]
    setLoading(true);
    const contentData = await Promise.all(
      jobIdsForPage.map(async (id) => {
        const contentResponse = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        const data = await contentResponse.json();
        return data
      })
    );
    setJobs(prevState => ([...prevState, ...contentData]))
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  function handleLoadMore() {
    setPage(prevState => prevState + 1);
  }

  React.useEffect(() => {
    fetchJobs(page);
  }, [page]);
  
  const hideLoadMore = idJobs.length > jobs.length;

  return (
    <>
      <h1 className="no-underline text-[#FC6501] font-semibold">Jobs Board</h1>
      <JobList 
        jobs={jobs}
        hideLoadMore={hideLoadMore}
        loading={loading} 
        handleLoadMore={handleLoadMore}
      />
    </>
  );
}

export default JobBoard;
