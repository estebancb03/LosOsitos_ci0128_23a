import {
  useRef
} from "react";
//import * as XLSX from 'xlsx';
import XLSX from 'sheetjs-style';
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import { stringify } from 'csv-stringify';




export const ExportExcel = ({data}) => {
  const tipoArchivo = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const extencionArchivo = '.xlsx';
  const nombreArchivo = 'ReporteAutogenerado';

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dataExcel = new Blob([excelBuffer], { type: tipoArchivo });
    FileSaver.saveAs(dataExcel, nombreArchivo + extencionArchivo);
  };
};


export const ExportPdf = ({data}) => {
  const pdfRef = useRef();
  const input = pdfRef.current;
  const pdf = new jsPDF();
  pdf.addHTML(input, () => {
    pdf.save("output.pdf");
  });
};



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

// export const generateXlsx = () => {
//   const workbook = XLSX.utils.book_new();
//   const worksheet = XLSX.utils.json_to_sheet(data);
//   XLSX.utils.book_append_sheet(workbook, worksheet, "ReporteAutogenerado");

//   // Generate a buffer from the workbook
//   const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

//   // Create a Blob from the buffer
//   const blob = new Blob([excelBuffer], {
//     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//   });

//   // Save the Blob as a file
//   const fileName = "data.xlsx";
//   saveAs(blob, fileName);
// }

export const generatePdf = ({ data }) => {
  const pdfRef = useRef();
  const input = pdfRef.current;
  const pdf = new jsPDF();
  pdf.addHTML(input, () => {
    pdf.save("output.pdf");
  });
};
