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
import XLSX from "xlsx";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import { stringify } from 'csv-stringify';
import {
  formatDateDTDDMMYYYY,
  changeDateInISOFormat,
  isDateAfterISO8601,
} from "../../helpers/formatDate";

export const generateCsv = ({data}) => {
  // Convertir los datos en formato CSV
  stringify(data, { header: true }, (err, output) => {
    if (err) {
      console.error(err);
      return;
    }
    // Crear el archivo CSV y descargarlo
    const csvData = new Blob([output], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvData);
    const tempLink = document.createElement('a');
    tempLink.href = csvUrl;
    tempLink.setAttribute('download', 'data.csv');
    tempLink.click();
  });
};

export const generateXlsx = () => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, "ReporteAutogenerado");

  // Generate a buffer from the workbook
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // Create a Blob from the buffer
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Save the Blob as a file
  const fileName = "data.xlsx";
  saveAs(blob, fileName);
}

export const generatePdf = ({ data }) => {
  const pdfRef = useRef();
  const input = pdfRef.current;
  const pdf = new jsPDF();
  pdf.addHTML(input, () => {
    pdf.save("output.pdf");
  });
};
