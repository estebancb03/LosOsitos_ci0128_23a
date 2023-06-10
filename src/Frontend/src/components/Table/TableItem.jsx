const TableItem = ({ number, data }) => {
  return (
    <>
      {number && number % 2 === 0 || number === 0 ? (
        <tr className="bg-white">
          {data.map((content, index) => (
            <td key={index} className="p-3 text-sm text-gray-700 whitespace-nowrap">
              {Array.isArray(content) ? (
                <ul>
                  {
                    content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  }
                </ul>
              ) : (
                content
              )}
            </td>
          ))}
        </tr>
      ) : (
        <tr className="bg-gray-50">
          {data.map((content, index) => (
            <td key={index} className="p-3 text-sm text-gray-700 whitespace-nowrap">
              {Array.isArray(content) ? (
                <ul>
                  {
                    content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  }
                </ul>
              ) : (
                content
              )}
            </td>
          ))}
        </tr>
      )}
    </>
  );
};

export default TableItem;
