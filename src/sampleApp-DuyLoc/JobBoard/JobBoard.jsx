import React from "react";
import JobList from "./JobList";

function JobBoard() {
    const [idJob, setIdJob] = React.useState([]);
    const [contentJob, setContentJob] = React.useState([]);
    const [startIndex, setStartIndex] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const visibleItem = 4;
  
    React.useEffect(() => {
      try {
        async function getId() {
          const res = await fetch(
            "https://hacker-news.firebaseio.com/v0/jobstories.json"
          );
          const dataId = await res.json();
          setIdJob(dataId);
        }
        getId();
      } catch (err) {
        console.log(err);
      }
    }, []);
  
    React.useEffect(() => {
      try {
        async function getContent() {
          setLoading(true);
          const visibleId = idJob.slice(0, startIndex + visibleItem);
          const contentData = await Promise.all(
            visibleId.map(async (id) => {
              const contentResponse = await fetch(
                `https://hacker-news.firebaseio.com/v0/item/${id}.json`
              );
              return await contentResponse.json();
            })
          );
          setTimeout(() => {
            setLoading(false);
          }, 500);
          setContentJob(contentData);
        }
        getContent();
      } catch (err) {
        console.log(err);
      }
    }, [idJob, startIndex]);
    function dataList() {
      setStartIndex((prev) => prev + visibleItem);
    }
    const hasMore = idJob.length > startIndex + visibleItem;
  return (
    <>
      <h1 className="no-underline text-[#FC6501] font-semibold">Jobs Board</h1>
      <JobList 
        dataList={dataList}
        hasMore={hasMore}
        contentJob={contentJob}
        loading={loading} />
    </>
  );
}

export default JobBoard;
