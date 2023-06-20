export const downloadXLSX = (xlsxBuffer, fileName) => {
  const url = window.URL.createObjectURL(new Blob([xlsxBuffer]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
}
  