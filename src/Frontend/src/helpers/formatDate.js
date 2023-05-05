// Method that formats the date from mm-dd-yyyy to dd/mm/yy
const formatDateDDMMYYYY = (date) => {
  const parts = date !== undefined ? date.split("-") : "";
  return parts !== "" ? parts[1] + "/" + parts[0] + "/" + parts[2] : "";
};

// Method that formats tha date form DateTime format
const formatDateDTDDMMYYYY = (unformatedDate) => {
  // const date = new Date(unformatedDate);
  // const day = date.getDate().toString().padStart(2, "0");
  // const month = (date.getMonth() + 1).toString().padStart(2, "0");
  // const year = date.getFullYear().toString();
  // return `${day}/${month}/${year}`;
  const date = new Date(unformatedDate);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
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

// Method that formats a date adding zeros
const addZerosToDate = (date) => {
  const parts = date.split("-");
  const day = !Array.isArray(parts[1]) ? "0" + parts[1] : parts[1];
  const month = !Array.isArray(parts[0]) ? "0" + parts[0] : parts[0];
  return month + "-" + day + "-" + parts[2];
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

// Method that gets the hours and minutes of dates in ISO 8601 format
const getHoursMinutesFromISOFormat = (date) => {
  return date.slice(11, 16);
};

// Method that returns an array with the hours in the interval
const createHoursWithIntervals = (startHour, endHour, interval) => {
  let result = [];
  for (let i = startHour; i <= endHour; i++) {
    for (let j = 0; j <= interval; j += interval) {
      let hour = i < 10 ? "0" + i : i;
      let minutes = j === 0 ? "00" : j;
      result.push(hour + ":" + minutes);
    }
  }
  return result;
};

// Method that update the date in a ISO 8601 format
const changeDateInISOFormat = (date, ISODate) => {
  const parts = date.split("-");
  const month = parts[0] - 1;
  const day = parts[1];
  const year = parts[2];
  let newDateTime = new Date(ISODate);

  newDateTime.setDate(day);
  newDateTime.setMonth(month);
  newDateTime.setFullYear(year);
  return newDateTime.toISOString();
};

// Method that update the hours and minutes in a ISO 8601 format
const changeHourInISOFormat = (hours, ISODate) => {
  const parts = hours.split(":");
  const hour = parts[0];
  const minutes = parts[1];
  let newDateTime = new Date(ISODate);

  newDateTime.setUTCHours(hour);
  newDateTime.setUTCMinutes(minutes);
  return newDateTime.toISOString();
};

export {
  formatDateDDMMYYYY,
  formatDateMMDDYYYY,
  formatDateDTDDMMYYYY,
  formatDateDTMMDDYYYY,
  addZerosToDate,
  getHoursMinutesFromISOFormat,
  createHoursWithIntervals,
  changeDateInISOFormat,
  changeHourInISOFormat,
};
