import React from "react";

function JobList({ loading, hideLoadMore, jobs, handleLoadMore }) {
  return (
    <>
      {jobs.map((item) => {
        return (
          <div
            className="w-full border border-gray-500 ml-0 rounded-md"
            key={item.id}
          >
            <div className="text-xl no-underline font-bold ">{item.title}</div>
            <div className="flex flex-row">
              <p>By {item.by}</p>
              <p>.</p>
              <p>{new Date(item.time * 1000).toLocaleDateString("vn-VN")},</p>
              <p>{new Date(item.time * 1000).toLocaleTimeString("vn-VN")}</p>
            </div>
          </div>
        );
      })}
      {loading && (
        <button
          type="button"
          className="bg-[#FC6501] px-2.5 py-2.5 text-white rounded-md hover:bg-[#E65C01]"
        >
          Loading...
        </button>
      )}
      {hideLoadMore && !loading && (
        <button
          type="button"
          className="bg-[#FC6501] px-2.5 py-2.5 text-white rounded-md hover:bg-[#E65C01]"
          onClick={handleLoadMore}
        >
          Load more jobs
        </button>
      )}
    </>
  );
}

export default JobList;
