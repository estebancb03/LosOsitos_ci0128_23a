import Container from "../components/Containers/Container";
import Title from "../components/Title";
import DatePickerButton from "../components/Buttons/DatePickerButton";
import DropDownSelect from "../components/Buttons/DropDownSelect";
import Button from "../components/Buttons/Button";

import { useState } from "react";
import { getIncomeData, getVisitationData } from "../Queries";
import { downloadXLSX } from "../helpers/fileDownloader";
import NavMenu from "../components/NavMenu/NavMenu";
import Footer from "../components/Footer/Footer";

const reportTypes = ["Income", "Visitors"];

const incomeReportFileName = "income_report";
const visitationReportFileName = "visitation_report";

const Reports = () => {
  const [reportType, setReportType] = useState(reportTypes[0]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportData, setReportData] = useState();

  const setValue = (type, value) => {
    console.log(type, value);
    if (type == "reportType") {
      setReportType(value);
    } else if (type == "startDate") {
      setStartDate(value);
    } else if (type == "endDate") {
      setEndDate(value);
    }
  };

  const generateReport = async () => {
    try {
      const result = await getReportData();
      downloadReport(result);
    } catch (exception) {
      console.error(exception);
    }
  };

  const getReportData = async () => {
    let result = [];
    if (reportType == reportTypes[0]) {
      result = await getIncomeData(startDate, endDate);
      setReportData(result);
    } else if (reportType == reportTypes[1]) {
      result = await getVisitationData(startDate, endDate);
      setReportData(result);
    }
    return result;
  };

  const downloadReport = (result) => {
    let reportFileName = "";
    if (reportType == reportTypes[0]) {
      reportFileName = `${incomeReportFileName}.xlsx`;
    } else if (reportType == reportTypes[1]) {
      reportFileName = `${visitationReportFileName}.xlsx`;
    }
    downloadXLSX(result, reportFileName);
  };

  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Reports" />
        <div className="grid grid-cols-4 gap-4 my-5 sm:grid-cols-2">
          <div>
            <DropDownSelect
              text="Report type"
              typeChange="reportType"
              datacy="select-report-type-dropdown"
              options={reportTypes}
              onChangeFunction={setValue}
            />
          </div>
          <div>
            <DatePickerButton
              text="Start date"
              type="startDate"
              datacy="startdate-datepicker"
              onChangeFunction={setValue}
            />
          </div>
          <div>
            <DatePickerButton
              text="End date"
              type="endDate"
              datacy="enddate-datepicker"
              onChangeFunction={setValue}
            />
          </div>
          <div className="mt-8">
            <Button
              text="Download"
              datacy="download-report-button"
              onclickFunction={generateReport}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Reports;
