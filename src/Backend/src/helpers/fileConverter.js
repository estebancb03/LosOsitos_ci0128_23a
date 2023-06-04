import { stringify } from "csv-stringify/sync";
import Excel from "exceljs";

export const generateCSV = (data) => {
  const output = stringify(data, { header: true });
  return output;
};

export const generateXLSX = (data) => {
  const workbook = new Excel.Workbook();
  const sheet = workbook.addWorksheet("Daily Income");

  // Agrega los encabezados de columna
  const headers = Object.keys(data[0]);
  sheet.columns = headers.map((header) => ({
    header,
    key: header,
    width: 10,
  }));

  // Inserta los datos en el archivo de Excel
  data.forEach((item) => {
    sheet.addRow(item);
  });

  // Genera y guarda el archivo de Excel
  workbook.xlsx.writeFile("data.xlsx").then(() => {
      console.log("Archivo de Excel generado exitosamente.");
    }).catch((error) => {
      console.error("Error al generar el archivo de Excel:", error);
    });
};

export const generatePDF = (data) => {};
