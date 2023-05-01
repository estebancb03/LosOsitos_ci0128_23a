// Method that formats the date from mm-dd-yyyy to dd/mm/yy
const formatDateDDMMYYYY = (date) => {
  const parts = date !== undefined ? date.split("-") : "";
  return parts !== "" ? parts[1] + "/" + parts[0] + "/" + parts[2] : "";
};

// Method that formats tha date form DateTime format
const formatDateFromDataTime = (unformatedDate) => {
  const date = new Date(unformatedDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
};

// Method that formats the date
const formatDateMMDDYYYY = (date) => {
  if (date !== null) {
    const day = "" + date.getDate();
    const month = "" + (date.getMonth() + 1);
    const year = "" + date.getFullYear();
    const result = month + "-" + day + "-" + year;
    return result;
  } else {
    return "";
  }
};

export { 
  formatDateDDMMYYYY, 
  formatDateMMDDYYYY,
  formatDateFromDataTime 
};
