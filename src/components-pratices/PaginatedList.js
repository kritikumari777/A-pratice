import React, { useState } from "react";

const PaginatedList = () => {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Slice items for current page
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Paginated List</h2>

      {/* Items */}
      <ul>
        {currentItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Pagination */}
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
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
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;
