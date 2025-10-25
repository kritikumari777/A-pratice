import React, { useState } from "react";

const PaginationListsB = () => {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Paginated List</h2>

      {/* Items */}
      <ul>
        {items.slice(currentPage*5 - 5,  currentPage*5).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Pagination */}
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setCurrentPage(currentPage+1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: items.length/5 }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
              margin: "0 5px",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage-1)}
          disabled={currentPage === items?.length/5}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationListsB;
