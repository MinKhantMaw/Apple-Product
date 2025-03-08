import React, { useState, useEffect } from "react";

const PageTransaction = ({ activePage, children }) => {
  const [currentPage, setCurrentPage] = useState(activePage);
  const [transaction, setTransaction] = useState(false);

  useEffect(() => {
    if (currentPage !== activePage) {
      setTransaction(true);
      setTimeout(() => {
        setCurrentPage(activePage);
        setTransaction(false);
      }, 500);
    }
  }, [activePage, currentPage]);

  return (
    <div
      className="w-full h-full overflow-hidden"
      style={{ backgroundImage: "url('/images/pages-bg.png')" }}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-500 ${
          transaction ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {children[currentPage]}
      </div>
    </div>
  );
};

export default PageTransaction;
