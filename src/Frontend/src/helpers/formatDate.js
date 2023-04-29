// Method that formats the date from mm-dd-yyyy to dd/mm/yy
const formatDateDDMMYYYY = (date) => {
  const parts = date !== undefined ? date.split("-") : "";
  return parts !== "" ? parts[1] + "/" + parts[0] + "/" + parts[2] : "";
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

export  {
  formatDateDDMMYYYY,
  formatDateMMDDYYYY
}