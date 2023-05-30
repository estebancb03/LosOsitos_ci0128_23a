import { useState, useEffect, forceUpdate, useReducer, useMemo, useCallback, useRef } from "react";
import Button from "../Buttons/Button";
import DropDownSelect from "../Buttons/DropDownSelect";
import InputButton from "../Buttons/InputButton";
import DatePickerButton from "../Buttons/DatePickerButton";
import axiosClient from "../../config/AxiosClient";
import {
  formatDateDTDDMMYYYY,
  changeDateInISOFormat,
  isDateAfterISO8601,
} from "../../helpers/formatDate";



function FinancialReport() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [reportType, setReportType] = useState("daily");
    const [reportData, setReportData] = useState([]);
    const [reportDataTotal, setReportDataTotal] = useState(0);
    const [reportDataTotalCash, setReportDataTotalCash] = useState(0);
    const [reportDataTotalCard, setReportDataTotalCard] = useState(0);
    const [reportDataTotalOnline, setReportDataTotalOnline] = useState(0);
}

const FinancialReportsPage = () => {
    const [financialData, setFinancialData] = useState([]);
  
    useEffect(() => {
      fetchFinancialData()
        .then((data) => setFinancialData(data))
        .catch((error) => console.error(error));
    }, []);
  
    const fetchFinancialData = async () => {
      try {
        const response = await fetch('/api/mieo/Ayuda?isra');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching financial data:', error);
        return [];
      }
    };
  
    return (
      <div>
        <h1>Financial Reports</h1>
        {financialData.length > 0 ? (
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
        ) : (
          <p>Loading financial data...</p>
        )}
      </div>
    );
  };
  
  export default FinancialReportsPage;