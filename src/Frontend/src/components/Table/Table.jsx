const Table = ({ colums, children }) => {
  return (
    <div className="overflow-auto rounded-lg shadow">
      <table className="my-5 w-full uppercase">
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
        <tbody className="divide-y divide-gray-100">{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
