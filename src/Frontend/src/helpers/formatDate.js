
const formatDateDDMMYYYY = (date) => {
  const parts = date !== undefined ? date.split("-") : "";
  return parts !== "" ? parts[1] + "/" + parts[0] + "/" + parts[2] : "";
};

const formatDateDTDDMMYYYY = (unformatedDate) => {
  if (unformatedDate !== null && unformatedDate !== undefined) {
    const date = new Date(unformatedDate);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }
};

const formatDateDTMMDDYYYY = (unformatedDate) => {
  const date = new Date(unformatedDate);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${month}-${day}-${year}`;
};

const addZerosToDate = (date) => {
  const parts = date.split('-');
  const month = parts[0].padStart(2, '0');
  const day = parts[1];
  const year = parts[2];
  return `${month}-${day}-${year}`;
};

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

const getHoursMinutesFromISOFormat = (date) => {
  return date.slice(11, 16);
};

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

const changeDateInISOFormat2 = (date, ISODate) => {
  const parts = date.split("-");
  const month = parts[0] - 1;
  const day = parts[1];
  const year = parts[2];
  let newDateTime = new Date(ISODate);
  day !== "1" ? newDateTime.setDate(day - 1) : newDateTime.setDate("1");
  newDateTime.setMonth(month);
  newDateTime.setFullYear(year);
  return newDateTime.toISOString();
};

const changeHourInISOFormat = (hours, ISODate) => {
  const parts = hours.split(":");
  const hour = parts[0];
  const minutes = parts[1];
  let newDateTime = new Date(ISODate);

  newDateTime.setUTCHours(hour);
  newDateTime.setUTCMinutes(minutes);
  return newDateTime.toISOString();
};

const isDateAfterISO8601 = (date1, date2) => {
  const parsedDate1 = new Date(date1);
  const parsedDate2 = new Date(date2);
  return parsedDate1 < parsedDate2;
};

const getDaysDifference = (date1, date2) => {
  const d1 = new Date(formatDateDTMMDDYYYY(date1));
  const d2 = new Date(formatDateDTMMDDYYYY(date2));
  const diffInMs = Math.abs(d2 - d1);
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  return diffInDays + 1;
}

const formatDateYYYYMMDD = (date) => {
  const parts = date !== undefined ? date.split("-") : "";
  return parts !== "" ? parts[2] + "/" + parts[0] + "/" + parts[1] : "";
}

const getDateRange = (startDate, endDate) => {
  let dates = [];
  let currentDate = new Date(formatDateYYYYMMDD(startDate));
  let newEndDate = new Date(formatDateYYYYMMDD(endDate));

  while (currentDate <= newEndDate) {
    const temp = currentDate.toISOString();
    const parts = temp.split("T");
    dates.push(parts[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
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
  changeDateInISOFormat2,
  isDateAfterISO8601,
  getDaysDifference,
  formatDateYYYYMMDD,
  getDateRange
};
