import {
  useState,
  useEffect,
  forceUpdate,
  useReducer,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { CSVLink } from "react-csv";
import Button from "../Buttons/Button";
import DropDownSelect from "../Buttons/DropDownSelect";
import InputButton from "../Buttons/InputButton";
import DatePickerButton from "../Buttons/DatePickerButton";
import AxiosClient from "../../config/AxiosClient";
import {
  formatDateDTDDMMYYYY,
  changeDateInISOFormat,
  isDateAfterISO8601,
} from "../../helpers/formatDate";

const fetchFinancialData = async () => {
  try {
    const { data } = await AxiosClient.get("url mieo");
    return data;
  } catch (error) {
    console.error("Error fetching financial data:", error);
    return [];
  }
};

const downloadCSV = () => {
  const csvData = financialData.map((report) => ({
    Date: report.date,
    Revenue: report.revenue,
    Expenses: report.expenses,
    Profit: report.profit,
  }));

  const FinancialReportsPage = () => {
    const [financialData, setFinancialData] = useState([]);
    const [endDate, setEndDate] = useState(new Date());
    const [reportType, setReportType] = useState("daily");
    const [reportData, setReportData] = useState([]);
    const [reportDataTotal, setReportDataTotal] = useState(0);
    const [reportDataTotalCash, setReportDataTotalCash] = useState(0);
    const [reportDataTotalCard, setReportDataTotalCard] = useState(0);
    const [reportDataTotalOnline, setReportDataTotalOnline] = useState(0);

    useEffect(() => {
      fetchFinancialData()
        .then((data) => setFinancialData(data))
        .catch((error) => console.error(error));
    }, []);

    const fetchFinancialData = async () => {
      try {
        const { data } = await AxiosClient.get("url mieo");
        return data;
      } catch (error) {
        console.error("Error fetching financial data:", error);
        return [];
      }
    };

    const downloadCSV = () => {
      const csvData = financialData.map((report) => ({
        Date: report.date,
        Revenue: report.revenue,
        Expenses: report.expenses,
        Profit: report.profit,
      }));

      // Generate a unique filename with timestamp
      const filename = `financial_data_${new Date().getTime()}.csv`;

      // Create a CSVLink component with the generated CSV data
      const csvLink = (
        <CSVLink data={csvData} filename={filename}>
          Download CSV
        </CSVLink>
      );

      // Return the CSVLink component
      return csvLink;
    };

    return (
      <div>
        <h1>Financial Reports</h1>
        {financialData.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Revenue</th>
                  <th>Expenses</th>
                  <th>Profit</th>
                </tr>
              </thead>
              <tbody>
                {financialData.map((report) => (
                  <tr key={report.id}>
                    <td>{report.date}</td>
                    <td>{report.revenue}</td>
                    <td>{report.expenses}</td>
                    <td>{report.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {downloadCSV()}
          </div>
        ) : (
          <p>Loading financial data...</p>
        )}
      </div>
    );
  };
};
