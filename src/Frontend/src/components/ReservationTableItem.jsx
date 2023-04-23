const ReservationTableItem = ({ number, data }) => {
  return (
    <>
      {number && number % 2 === 0 ? (
        <tr className="bg-white">
          {data.map((content, index) => (
            <td key={index} className="p-3 text-sm text-gray-700 whitespace-nowrap">
              {content}
            </td>
          ))}
        </tr>
      ) : (
        <tr className="bg-gray-50">
          {data.map((content, index) => (
            <td key={index} className="p-3 text-sm text-gray-700 whitespace-nowrap">
              {content}
            </td>
          ))}
        </tr>
      )}
    </>
  );
};

export default ReservationTableItem;
