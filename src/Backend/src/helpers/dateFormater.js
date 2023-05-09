// Method that formats tha date form DateTime format
const formatDateDTDDMMYYYY = (unformatedDate) => {
  if (unformatedDate !== null && unformatedDate !== undefined) {
    const date = new Date(unformatedDate);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }
};

// Method that formats tha date form DateTime format
const formatDateDTMMDDYYYY = (unformatedDate) => {
  const date = new Date(unformatedDate);
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const formatedDate = `${month}-${day}-${year}`;
  return formatedDate;
};

export {
  formatDateDTDDMMYYYY,
  formatDateDTMMDDYYYY
};