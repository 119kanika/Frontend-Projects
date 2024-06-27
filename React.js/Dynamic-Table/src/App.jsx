import "./App.css";
import { data } from "./data";

import { useTable, useSortBy, usePagination } from "react-table";

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "GENDER",
    accessor: "gender",
  },
  {
    Header: "SALARY",
    accessor: "salary",
  },
];

function App() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>{column.isSortedDesc ? " ⬆️" : " ⬇️"}</span>
                  )}
                </th>
              ))}
            </tr>
          ))}

          {/* <tr>
            <th>Id</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr> */}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}

          {/* {data.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.gender}</td>
                <td>{elem.salary}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
      <div>
        <button onClick={previousPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default App;
