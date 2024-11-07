import React from "react";

type Props = {
  totalPages: number;
  currentPage: number;
  onChange: (page: number) => void;
};

const Pagination = ({ totalPages, currentPage, onChange }: Props) => {
  const arrPage = [];
  if (totalPages >= 1) {
    for (let i = 1; i <= totalPages; i++) {
      arrPage.push(i);
    }
  }

  const defaultClass = "border-2 px-2 rounded-md";
  const activeClass = "bg-blue-900 text-white";
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

      {arrPage.map((item, index) => (
        <button
          onClick={() => onChange(item)}
          className={`${defaultClass} ${
            currentPage === item ? activeClass : ""
          }`}
          key={index}
        >
          {item}
        </button>
      ))}

      <button
        onClick={() => onChange(currentPage + 1)}
        className={`${defaultClass} ${
          currentPage === arrPage.length
            ? "opacity-50 cursor-not-allowed"
            : activeClass
        }`}
        disabled={currentPage === arrPage.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
