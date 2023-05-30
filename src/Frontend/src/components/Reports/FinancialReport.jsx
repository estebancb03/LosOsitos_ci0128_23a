import { useState, useEffect, forceUpdate, useReducer, useMemo, useCallback, useRef } from "react";
import Button from "../Buttons/Button";
import DropDownSelect from "../Buttons/DropDownSelect";
import InputButton from "../Buttons/InputButton";
import DatePickerButton from "../Buttons/DatePickerButton";
import axiosClient from "../../config/AxiosClient";
import {
  formatDateDTDDMMYYYY,
  changeDateInISOFormat,
  isDateAfterISO8601,
} from "../../helpers/formatDate";



function FinancialReport() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [reportType, setReportType] = useState("daily");
    const [reportData, setReportData] = useState([]);
    const [reportDataTotal, setReportDataTotal] = useState(0);
    const [reportDataTotalCash, setReportDataTotalCash] = useState(0);
    const [reportDataTotalCard, setReportDataTotalCard] = useState(0);
    const [reportDataTotalOnline, setReportDataTotalOnline] = useState(0);
}