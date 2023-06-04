//import {
//  useState,
//  useEffect,
//  forceUpdate,
//  useReducer,
//  useMemo,
//  useCallback,
//  useRef,
//} from "react";
//import { CSVLink } from "react-csv";
//import Button from "../Buttons/Button";
//import DropDownSelect from "../Buttons/DropDownSelect";
//import InputButton from "../Buttons/InputButton";
//import DatePickerButton from "../Buttons/DatePickerButton";
//import AxiosClient from "../../config/AxiosClient";
//import XLSX from "xlsx";
//import html2canvas from "html2canvas";
//import jsPDF from "jspdf";
//import { saveAs } from "file-saver";
//import { stringify } from 'csv-stringify';
//import {
//  formatDateDTDDMMYYYY,
//  changeDateInISOFormat,
//  isDateAfterISO8601,
//} from "../../helpers/formatDate";
//
//const fetchFinancialData = async () => {
//  try {
//    const { data } = await AxiosClient.get("url mieo");
//    return data;
//  } catch (error) {
//    console.error("Error fetching financial data:", error);
//    return [];
//  }
//};
//
//const CsvGenerator = ({ data }) => {
//  const generateCsv = () => {
//    // Convertir los datos en formato CSV
//    stringify(data, { header: true }, (err, output) => {
//      if (err) {
//        console.error(err);
//        return;
//      }
//      // Crear el archivo CSV y descargarlo
//      const csvData = new Blob([output], { type: 'text/csv' });
//      const csvUrl = URL.createObjectURL(csvData);
//      const tempLink = document.createElement('a');
//      tempLink.href = csvUrl;
//      tempLink.setAttribute('download', 'data.csv');
//      tempLink.click();
//    });
//  };
//};
//
//const workbook = XLSX.utils.book_new();
//const worksheet = XLSX.utils.json_to_sheet(data);
//XLSX.utils.book_append_sheet(workbook, worksheet, "ReporteAutogenerado");
//
//// Generate a buffer from the workbook
//const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//
//// Create a Blob from the buffer
//const blob = new Blob([excelBuffer], {
//  type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//});
//
//// Save the Blob as a file
//const fileName = "data.xlsx";
//saveAs(blob, fileName);
//
//const PdfGenerator = ({ data }) => {
//  const pdfRef = useRef();
//
//  const generatePDF = () => {
//    const input = pdfRef.current;
//
//    const pdf = new jsPDF();
//    pdf.addHTML(input, () => {
//      pdf.save("output.pdf");
//    });
//  };
//};
//
//const ganerateAndSaveFile = () => {
//  const workbook = XLSX.utils.book_new();
//  const worksheet = XLSX.utils.json_to_sheet(data);
//  XLSX.utils.book_append_sheet(workbook, worksheet, "ReporteAutogenerado");
//
//  // Generate a buffer from the workbook
//  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//
//  // Create a Blob from the buffer
//  const blob = new Blob([excelBuffer], {
//    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//  });
//
//  // Save the Blob as a file
//  const fileName = "data.xlsx";
//  saveAs(blob, fileName);
//};
//
//const downloadCSV = () => {
//  const csvData = financialData.map((report) => ({
//    Date: report.date,
//    Revenue: report.revenue,
//    Expenses: report.expenses,
//    Profit: report.profit,
//  }));
//
//  const FinancialReportsPage = () => {
//    const [financialData, setFinancialData] = useState([]);
//    const [endDate, setEndDate] = useState(new Date());
//    const [reportType, setReportType] = useState("daily");
//    const [reportData, setReportData] = useState([]);
//    const [reportDataTotal, setReportDataTotal] = useState(0);
//    const [reportDataTotalCash, setReportDataTotalCash] = useState(0);
//    const [reportDataTotalCard, setReportDataTotalCard] = useState(0);
//    const [reportDataTotalOnline, setReportDataTotalOnline] = useState(0);
//
//    useEffect(() => {
//      fetchFinancialData()
//        .then((data) => setFinancialData(data))
//        .catch((error) => console.error(error));
//    }, []);
//
//    const fetchFinancialData = async () => {
//      try {
//        const { data } = await AxiosClient.get("url mieo");
//        return data;
//      } catch (error) {
//        console.error("Error fetching financial data:", error);
//        return [];
//      }
//    };
//
//    const downloadCSV = () => {
//      const csvData = financialData.map((report) => ({
//        Date: report.date,
//        Revenue: report.revenue,
//        Expenses: report.expenses,
//        Profit: report.profit,
//      }));
//
//      // Generate a unique filename with timestamp
//      const filename = `financial_data_${new Date().getTime()}.csv`;
//
//      // Create a CSVLink component with the generated CSV data
//      const csvLink = (
//        <CSVLink data={csvData} filename={filename}>
//          Download CSV
//        </CSVLink>
//      );
//
//      // Return the CSVLink component
//      return csvLink;
//    };
//
//    return (
//      <div>
//        <h1>Financial Reports</h1>
//        {financialData.length > 0 ? (
//          <div>
//            <table>
//              <thead>
//                <tr>
//                  <th>Date</th>
//                  <th>Revenue</th>
//                  <th>Expenses</th>
//                  <th>Profit</th>
//                </tr>
//              </thead>
//              <tbody>
//                {financialData.map((report) => (
//                  <tr key={report.id}>
//                    <td>{report.date}</td>
//                    <td>{report.revenue}</td>
//                    <td>{report.expenses}</td>
//                    <td>{report.profit}</td>
//                  </tr>
//                ))}
//              </tbody>
//            </table>
//            {downloadCSV()}
//          </div>
//        ) : (
//          <p>Loading financial data...</p>
//        )}
//      </div>
//    );
//  };
//};

//export default FinancialReport;
