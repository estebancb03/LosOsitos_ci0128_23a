import { stringify } from 'csv-stringify/sync';

export const generateCSV = (data) => {
  const output = stringify(data, { header: true });
  return output;
}

export const generateXLSX = (data) => {

}

export const generatePDF = (data) => {

}
