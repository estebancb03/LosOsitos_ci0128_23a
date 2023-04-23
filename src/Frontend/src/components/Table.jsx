const Table = ({ colums, children }) => {
  return (
    <table className="my-5 w-full">
      <thead className="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          {colums.map((colum, index) => (
            <th
              className="p-3 text-sm font-semibold tracking-wide text-left"
              key={index}
            >
              {colum}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
