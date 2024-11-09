import React from "react";

type Props = {
  totalPages: number;
  currentPage: number;
  onChange: (page: number) => void;
};

const Pagination = ({ totalPages, currentPage, onChange }: Props) => {
  const defaultClass = "border-2 px-2 rounded-md text-sm";
  const activeClass = "bg-blue-900 text-white";

  // Calculate the range of pages to show based on the current page
  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 1); // Start 1 page before current
    const endPage = Math.min(totalPages, currentPage + 1); // End 1 page after current

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex gap-2 justify-center">
      <button
        onClick={() => onChange(currentPage - 1)}
        className={`${defaultClass} ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : activeClass
        }`}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* First Page */}
      {currentPage > 2 && (
        <button onClick={() => onChange(1)} className={defaultClass}>
          1
        </button>
      )}
      {/* Dots if needed */}
      {currentPage > 3 && <span className="text-sm">...</span>}

      {/* Main pagination buttons */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`${defaultClass} ${
            currentPage === page ? activeClass : ""
          }`}
        >
          {page}
        </button>
      ))}

      {/* Dots if needed */}
      {currentPage < totalPages - 2 && <span className="text-sm">...</span>}
      {/* Last Page */}
      {currentPage < totalPages - 1 && (
        <button onClick={() => onChange(totalPages)} className={defaultClass}>
          {totalPages}
        </button>
      )}

      <button
        onClick={() => onChange(currentPage + 1)}
        className={`${defaultClass} ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : activeClass
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
