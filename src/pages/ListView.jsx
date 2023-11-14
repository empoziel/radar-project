import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const ListView = ({ openDetail }) => {
  const store = useSelector((store) => store);

  const [itemOffset, setItemOffset] = useState(0);

  //pagination values
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = store?.flights.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(store?.flights.length / itemsPerPage);

  //It works when you are click the page
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % store?.flights.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="list-page">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>Tail Num</th>
            <th>Latitude</th>
            <th>Latitude</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((fly) => (
              <tr>
                <td>{fly.id}</td>
                <td>{fly.code}</td>
                <td>{fly.lat}</td>
                <td>{fly.lan}</td>
                <td>
                  <button onClick={() => openDetail(fly.id)}>Detail</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        activeClassName="active"
      />
    </div>
  );
};

export default ListView;
