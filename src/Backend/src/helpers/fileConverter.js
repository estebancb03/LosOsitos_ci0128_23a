import Excel from "exceljs";

export const generateIncomeXLSX = (reservations, prices) => {
  const workbook = new Excel.Workbook();
  const campingIncomeSheet = workbook.addWorksheet("Camping");
  const picnicIncomeSheet = workbook.addWorksheet("Picnic");
  const sheetsList = [campingIncomeSheet, picnicIncomeSheet];

  sheetsList.forEach((sheet) => {
    sheet.mergeCells("A1", "K1");
    sheet.getCell("A1").value = "SISTEMA NACIONAL DE AREAS DE CONSERVACION";
    sheet.getCell('A1').alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.mergeCells("A2", "K2");
    sheet.getCell("A2").value = "AREA DE CONSERVACION GUANACASTE";
    sheet.getCell('A2').alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.mergeCells("A3", "K3");
    sheet.getCell("A3").value = "Informe de Venta de Tiquetes, Sector Junquillal";
    sheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.mergeCells("A4", "K4");
    sheet.getCell("A4").value = "R.V.S. Bahía Junquillal";
    sheet.getCell('A4').alignment = { vertical: 'middle', horizontal: 'center'};
    
    sheet.mergeCells("A5", "K5");
    sheet.getCell("A5").value = "";
    sheet.getCell('A5').alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.getCell("A8").value = "Fecha";
    sheet.getCell('A8').alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.mergeCells("B6", "F6");
    sheet.getCell("B6").value = "Residentes";
    sheet.getCell("B6").alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.getCell("B7").value = "Adulto";
    sheet.getCell("C7").value = "---";
    sheet.getCell("B8").value = "Cantidad";
    sheet.getCell("C8").value = "Total";

    sheet.getCell("D7").value = "Niño";
    sheet.getCell("E7").value = "---";
    sheet.getCell("D8").value = "Cantidad";
    sheet.getCell("E8").value = "Total";

    sheet.getCell("F8").value = "Total de ingresos residentes";
    sheet.getCell('F8').alignment = { vertical: 'middle', horizontal: 'center'};


    sheet.mergeCells("G6", "K6");
    sheet.getCell("G6").value = "No Residentes";
    sheet.getCell("G6").alignment = { vertical: 'middle', horizontal: 'center'};

    sheet.getCell("G7").value = "Adulto";
    sheet.getCell("H7").value = "---";
    sheet.getCell("G8").value = "Cantidad";
    sheet.getCell("H8").value = "Total";

    sheet.getCell("I7").value = "Niño";
    sheet.getCell("J7").value = "---";
    sheet.getCell("I8").value = "Cantidad";
    sheet.getCell("J8").value = "Total";

    sheet.getCell("K8").value = "Total de ingresos no residentes";
    sheet.getCell('K8').alignment = { vertical: 'middle', horizontal: 'center'};

    
    sheet.columns = [
      { key: 'Fecha', width: 18.5},
      { key: 'Cantidad_Adulto_Residente', width: 18.5},
      { key: 'Total_Adulto_Residente', width: 18.5},
      { key: 'Cantidad_Nino_Residente', width: 18.5},
      { key: 'Total_Nino_Residente', width: 18.5},
      { key: 'Ingresos_Residente', width: 18.5},
      { key: 'Cantidad_Adulto_Extranjero', width: 18.5},
      { key: 'Total_Adulto_Extranjero', width: 18.5},
      { key: 'Cantidad_Nino_Extranjero', width: 18.5},
      { key: 'Total_Nino_Extranjero', width: 18.5},
      { key: 'Ingresos_Extranjero', width: 18.5}
    ]

    reservations.forEach((reservation) => {
      sheet.addRow({
        'Fecha': reservation.Fecha,
        'Cantidad_Adulto_Residente': 0,
        'Total_Adulto_Residente': 0,
        'Cantidad_Nino_Residente': 0,
        'Total_Nino_Residente': 0,
        'Ingresos_Residente': 0,
        'Cantidad_Adulto_Extranjero': 0,
        'Total_Adulto_Extranjero': 0,
        'Cantidad_Nino_Extranjero': 0,
        'Total_Nino_Extranjero': 0,
        'Ingresos_Extranjero': 0,
      });
    })
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
