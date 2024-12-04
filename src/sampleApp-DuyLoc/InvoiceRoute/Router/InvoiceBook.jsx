import React from "react";
import { Link, Outlet } from "react-router-dom";

function InvoiceBooks( { data } ) {

  return (
    <>
      <div style={{ display: "flex" }}>
        <nav
          style={{
            marginTop: "10px",
            borderRight: "1px solid black",
            padding: "1rem",
          }}
        >
          {data.map((dataBooks) => (
            <Link
              key={dataBooks.number}
              to={`/invoice/${dataBooks.number}`}
              style={{ display: "block", margin: "1rem 0px" }}
            >
              {" "}
              {dataBooks.name}{" "}
            </Link>
          ))}
        </nav>
        <div style={{ padding: "1rem" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default InvoiceBooks;
