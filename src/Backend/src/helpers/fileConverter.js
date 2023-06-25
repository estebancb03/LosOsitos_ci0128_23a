import Excel from "exceljs";

export const generateIncomeXLSX = (campingIncome, picnicIncome, prices) => {
  const workbook = new Excel.Workbook();
  const campingIncomeSheet = workbook.addWorksheet("Camping");
  const picnicIncomeSheet = workbook.addWorksheet("Picnic");
  const sheetsList = [campingIncomeSheet, picnicIncomeSheet];

  // console.log(prices);

  sheetsList.forEach((sheet) => {
    sheet.mergeCells("A1", "O1");
    sheet.getCell("A1").value = "SISTEMA NACIONAL DE AREAS DE CONSERVACION";
    sheet.getCell('A1').alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.mergeCells("A2", "O2");
    sheet.getCell("A2").value = "AREA DE CONSERVACION GUANACASTE";
    sheet.getCell('A2').alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.mergeCells("A3", "O3");
    sheet.getCell("A3").value = "Informe de Venta de Tiquetes, Sector Junquillal";
    sheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.mergeCells("A4", "O4");
    sheet.getCell("A4").value = "R.V.S. Bahía Junquillal";
    sheet.getCell('A4').alignment = { vertical: 'middle', horizontal: 'center'};
    
    sheet.mergeCells("A5", "O5");
    sheet.getCell("A5").value = "";
    sheet.getCell('A5').alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.getCell("A8").value = "Fecha";
    sheet.getCell('A8').alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.mergeCells("B6", "H6");
    sheet.getCell("B6").value = "Residentes";
    sheet.getCell("B6").alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.getCell("B7").value = "Adulto";
    sheet.getCell("B8").value = "Cantidad";
    sheet.getCell("C8").value = "Total";

    sheet.getCell("D7").value = "Niño";
    sheet.getCell("D8").value = "Cantidad";
    sheet.getCell("E8").value = "Total";

    sheet.getCell("F7").value = "Especial";
    sheet.getCell("F8").value = "Cantidad";
    sheet.getCell("G8").value = "Total";

    sheet.getCell("H8").value = "Total de ingresos residentes";
    sheet.getCell('H8').alignment = { vertical: 'middle', horizontal: 'center'};


    sheet.mergeCells("I6", "O6");
    sheet.getCell("I6").value = "No Residentes";
    sheet.getCell("I6").alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.getCell("I7").value = "Adulto";
    sheet.getCell("I8").value = "Cantidad";
    sheet.getCell("J8").value = "Total";

    sheet.getCell("K7").value = "Niño";
    sheet.getCell("K8").value = "Cantidad";
    sheet.getCell("L8").value = "Total";

    sheet.getCell("M7").value = "Especial";
    sheet.getCell("M8").value = "Cantidad";
    sheet.getCell("N8").value = "Total";

    sheet.getCell("O8").value = "Total de ingresos no residentes";
    sheet.getCell('O8').alignment = { vertical: 'middle', horizontal: 'center'};

    
    sheet.columns = [
      { key: 'Fecha', width: 18.5},
      { key: 'Cantidad_Adulto_Residente', width: 18.5},
      { key: 'Total_Adulto_Residente', width: 18.5},
      { key: 'Cantidad_Nino_Residente', width: 18.5},
      { key: 'Total_Nino_Residente', width: 18.5},
      { key: 'Cantidad_Especial_Residente', width: 18.5},
      { key: 'Total_Especial_Residente', width: 18.5},
      { key: 'Ingresos_Residente', width: 18.5},
      { key: 'Cantidad_Adulto_Extranjero', width: 18.5},
      { key: 'Total_Adulto_Extranjero', width: 18.5},
      { key: 'Cantidad_Nino_Extranjero', width: 18.5},
      { key: 'Total_Nino_Extranjero', width: 18.5},
      { key: 'Cantidad_Especial_Extranjero', width: 18.5},
      { key: 'Total_Especial_Extranjero', width: 18.5},
      { key: 'Ingresos_Extranjero', width: 18.5}
    ]
  })

  campingIncomeSheet.getCell("C7").value = prices[10].Price
  campingIncomeSheet.getCell("E7").value = prices[2].Price

  campingIncomeSheet.getCell("J7").value = prices[14].Price
  campingIncomeSheet.getCell("L7").value = prices[6].Price

  campingIncome.forEach((data) => {
    campingIncomeSheet.addRow({
      'Fecha': data.Fecha,
      'Cantidad_Adulto_Residente': 'Cantidad_Adulto_Residente' in data ? data.Cantidad_Adulto_Residente : 0,
      'Total_Adulto_Residente': 'Total_Adulto_Residente' in data ? data.Total_Adulto_Residente : 0,
      'Cantidad_Nino_Residente': 'Cantidad_Nino_Residente' in data ? data.Cantidad_Nino_Residente : 0,
      'Total_Nino_Residente': 'Total_Nino_Residente' in data ? data.Total_Nino_Residente : 0,
      'Cantidad_Especial_Residente': 'Cantidad_Especial_Residente' in data ? data.Cantidad_Especial_Residente : 0,
      'Total_Especial_Residente': 'Total_Especial_Residente' in data ? data.Total_Especial_Residente : 0,
      'Ingresos_Residente': 'Ingresos_Residente' in data ? data.Ingresos_Residente : 0,
      'Cantidad_Adulto_Extranjero': 'Cantidad_Adulto_Extranjero' in data ? data.Cantidad_Adulto_Extranjero : 0,
      'Total_Adulto_Extranjero': 'Total_Adulto_Extranjero' in data ? data.Total_Adulto_Extranjero : 0,
      'Cantidad_Nino_Extranjero': 'Cantidad_Nino_Extranjero' in data ? data.Cantidad_Nino_Extranjero : 0,
      'Total_Nino_Extranjero': 'Total_Nino_Extranjero' in data ? data.Total_Nino_Extranjero : 0,
      'Cantidad_Especial_Extranjero': 'Cantidad_Especial_Extranjero' in data ? data.Cantidad_Especial_Extranjero : 0,
      'Total_Especial_Extranjero': 'Total_Especial_Extranjero' in data ? data.Total_Especial_Extranjero : 0,
      'Ingresos_Extranjero': 'Ingresos_Extranjero' in data ? data.Ingresos_Extranjero : 0,
    });
  })


  picnicIncomeSheet.getCell("C7").value = prices[8].Price
  picnicIncomeSheet.getCell("E7").value = prices[0].Price

  picnicIncomeSheet.getCell("J7").value = prices[12].Price
  picnicIncomeSheet.getCell("L7").value = prices[4].Price

  picnicIncome.forEach((data) => {
    picnicIncomeSheet.addRow({
      'Fecha': data.Fecha,
      'Cantidad_Adulto_Residente': 'Cantidad_Adulto_Residente' in data ? data.Cantidad_Adulto_Residente : 0,
      'Total_Adulto_Residente': 'Total_Adulto_Residente' in data ? data.Total_Adulto_Residente : 0,
      'Cantidad_Nino_Residente': 'Cantidad_Nino_Residente' in data ? data.Cantidad_Nino_Residente : 0,
      'Total_Nino_Residente': 'Total_Nino_Residente' in data ? data.Total_Nino_Residente : 0,
      'Cantidad_Especial_Residente': 'Cantidad_Especial_Residente' in data ? data.Cantidad_Especial_Residente : 0,
      'Total_Especial_Residente': 'Total_Especial_Residente' in data ? data.Total_Especial_Residente : 0,
      'Ingresos_Residente': 'Ingresos_Residente' in data ? data.Ingresos_Residente : 0,
      'Cantidad_Adulto_Extranjero': 'Cantidad_Adulto_Extranjero' in data ? data.Cantidad_Adulto_Extranjero : 0,
      'Total_Adulto_Extranjero': 'Total_Adulto_Extranjero' in data ? data.Total_Adulto_Extranjero : 0,
      'Cantidad_Nino_Extranjero': 'Cantidad_Nino_Extranjero' in data ? data.Cantidad_Nino_Extranjero : 0,
      'Total_Nino_Extranjero': 'Total_Nino_Extranjero' in data ? data.Total_Nino_Extranjero : 0,
      'Cantidad_Especial_Extranjero': 'Cantidad_Especial_Extranjero' in data ? data.Cantidad_Especial_Extranjero : 0,
      'Total_Especial_Extranjero': 'Total_Especial_Extranjero' in data ? data.Total_Especial_Extranjero : 0,
      'Ingresos_Extranjero': 'Ingresos_Extranjero' in data ? data.Ingresos_Extranjero : 0,
    });
  })

  return workbook;
}

export const generateVisitationXLSX = (data) => {
  const workbook = new Excel.Workbook();
  const sheet = workbook.addWorksheet("Visitation report");

  sheet.mergeCells("A1", "F1");
  sheet.getCell("A1").value = "SISTEMA NACIONAL DE AREAS DE CONSERVACION";
  sheet.getCell('A1').alignment = { vertical: 'middle', horizontal: 'center'};

  sheet.mergeCells("A2", "F2");
  sheet.getCell("A2").value = "AREA DE CONSERVACION GUANACASTE";
  sheet.getCell('A2').alignment = { vertical: 'middle', horizontal: 'center'};

  sheet.mergeCells("A3", "F3");
  sheet.getCell("A3").value = "REGISTRO DE VISITACIÓN ACG";
  sheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center'};

  sheet.mergeCells("A4", "F4");
  sheet.getCell("A4").value = "R.V.S. Bahía Junquillal";
  sheet.getCell('A4').alignment = { vertical: 'middle', horizontal: 'center'};
  
  sheet.mergeCells("A5", "F5");
  sheet.getCell("A5").value = "";
  sheet.getCell('A5').alignment = { vertical: 'middle', horizontal: 'center'};

  
  sheet.getRow(6).values = ['FECHA', 'TIPO DE VISITANTE', 'PROCEDENCIA', 'TIPO DE VISITA', 'TIPO DE TIQUETE', 'CANTIDAD DE VISITANTES']
  sheet.getCell('A6').fill = {
    type: 'pattern',
    pattern:'solid',
    fgColor:{argb:'BDEAFA'},
  };
  sheet.getCell('B6').fill = {
    type: 'pattern',
    pattern:'solid',
    fgColor:{argb:'BDEAFA'},
  };
  sheet.getCell('C6').fill = {
    type: 'pattern',
    pattern:'solid',
    fgColor:{argb:'BDEAFA'},
  };
  sheet.getCell('D6').fill = {
    type: 'pattern',
    pattern:'solid',
    fgColor:{argb:'BDEAFA'},
  };
  sheet.getCell('E6').fill = {
    type: 'pattern',
    pattern:'solid',
    fgColor:{argb:'BDEAFA'},
  };
  sheet.getCell('F6').fill = {
    type: 'pattern',
    pattern:'solid',
    fgColor:{argb:'BDEAFA'},
  };

  sheet.getRow(6).height = 45
  sheet.getRow(6).alignment = { wrapText: true }

  for (let row = 1; row <= 6; row += 1) {
    sheet.getRow(row).font = { bold: true }
  }

  sheet.columns = [
    { key: 'Fecha', width: 18.5},
    { key: 'Tipo de visitante', width: 18.5},
    { key: 'Procedencia', width: 18.5},
    { key: 'Tipo de visita', width: 18.5},
    { key: 'Tipo de tiquete', width: 18.5},
    { key: 'Cantidad de visitantes', width: 18.5}
  ]

  // Inserta los datos en el archivo de Excel
  data.forEach((item) => {
    sheet.addRow(item);
  });

  sheet.eachRow((row, rowNumber) => {
    row.eachCell((cell) => {
      if (rowNumber >= 6) {
        cell.border = {
          top: {style:'thin'},
          left: {style:'thin'},
          bottom: {style:'thin'},
          right: {style:'thin'}
        };
      }
    })
  })

  return workbook;
};
