import Excel from "exceljs";

export const generateIncomeXLSX = (campingIncome, picnicIncome) => {
  const workbook = new Excel.Workbook();
  const campingIncomeSheet = workbook.addWorksheet("Camping");
  const picnicIncomeSheet = workbook.addWorksheet("Picnic");
  const sheetsList = [campingIncomeSheet, picnicIncomeSheet];
  const incomeList = [campingIncome, picnicIncome];

  for (let index = 0; index < sheetsList.length; index += 1) {
    sheetsList[index].mergeCells("A1", "O1");
    sheetsList[index].getCell("A1").value = "SISTEMA NACIONAL DE AREAS DE CONSERVACION";
    sheetsList[index].getCell('A1').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('A1').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'ffffff'} };
    sheetsList[index].getCell('A1').border = { right: {style:'thin'} };

    sheetsList[index].mergeCells("A2", "O2");
    sheetsList[index].getCell("A2").value = "AREA DE CONSERVACION GUANACASTE";
    sheetsList[index].getCell('A2').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('A2').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'ffffff'} };
    sheetsList[index].getCell('A2').border = { right: {style:'thin'} };

    sheetsList[index].mergeCells("A3", "O3");
    sheetsList[index].getCell("A3").value = "Informe de Venta de Tiquetes, Sector Junquillal";
    sheetsList[index].getCell('A3').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('A3').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'ffffff'} };
    sheetsList[index].getCell('A3').border = { right: {style:'thin'} };

    sheetsList[index].mergeCells("A4", "O4");
    sheetsList[index].getCell("A4").value = "R.V.S. Bahía Junquillal";
    sheetsList[index].getCell('A4').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('A4').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'ffffff'} };
    sheetsList[index].getCell('A4').border = { right: {style:'thin'} };
    
    sheetsList[index].mergeCells("A5", "O5");
    sheetsList[index].getCell("A5").value = "";
    sheetsList[index].getCell('A5').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('A5').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'ffffff'} };
    sheetsList[index].getCell('A5').border = { right: {style:'thin'}, bottom: {style: 'thin'} };

    sheetsList[index].mergeCells("A6", "A8");
    sheetsList[index].getCell("A6").value = "Fecha";
    sheetsList[index].getCell('A6').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('A6').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('A6').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("B6", "H6");
    sheetsList[index].getCell("B6").value = "Residentes";
    sheetsList[index].getCell("B6").alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('B6').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('B6').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("B7", "C7");
    sheetsList[index].getCell("B7").value = "Adulto";
    sheetsList[index].getCell('B7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('B7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].getCell("B8").value = "Cantidad";
    sheetsList[index].getCell('B8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('B8').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}
    };

    sheetsList[index].getCell("C8").value = "Total";
    sheetsList[index].getCell('C8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('C8').border = { 
      top: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("D7", "E7");
    sheetsList[index].getCell("D7").value = "Niño";
    sheetsList[index].getCell('D7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('D7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].getCell("D8").value = "Cantidad";
    sheetsList[index].getCell('D8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('D8').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}
    };

    sheetsList[index].getCell("E8").value = "Total";
    sheetsList[index].getCell('E8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('E8').border = { 
      top: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("F7", "G7");
    sheetsList[index].getCell("F7").value = "Especial";
    sheetsList[index].getCell('F7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('F7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].getCell("F8").value = "Cantidad";
    sheetsList[index].getCell('F8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('F8').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}
    };

    sheetsList[index].getCell("G8").value = "Total";
    sheetsList[index].getCell('G8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('G8').border = { 
      top: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("H7", "H8");
    sheetsList[index].getCell("H7").value = "Total de ingresos residentes";
    sheetsList[index].getCell('H7').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('H7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'6fa8dc'} };
    sheetsList[index].getCell('H7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };


    sheetsList[index].mergeCells("I6", "O6");
    sheetsList[index].getCell("I6").value = "No Residentes";
    sheetsList[index].getCell("I6").alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('I6').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('I6').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("I7", "J7");
    sheetsList[index].getCell("I7").value = "Adulto";
    sheetsList[index].getCell('I7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('I7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].getCell("I8").value = "Cantidad";
    sheetsList[index].getCell('I8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('I8').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}
    };

    sheetsList[index].getCell("J8").value = "Total";
    sheetsList[index].getCell('J8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('J8').border = { 
      top: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("K7", "L7");
    sheetsList[index].getCell("K7").value = "Niño";
    sheetsList[index].getCell('K7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('K7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].getCell("K8").value = "Cantidad";
    sheetsList[index].getCell('K8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('K8').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}
    };

    sheetsList[index].getCell("L8").value = "Total";
    sheetsList[index].getCell('L8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('L8').border = { 
      top: {style:'thin'},
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("M7", "N7");
    sheetsList[index].getCell("M7").value = "Especial";
    sheetsList[index].getCell('M7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('M7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].getCell("M8").value = "Cantidad";
    sheetsList[index].getCell('M8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('M8').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}
    };

    sheetsList[index].getCell("N8").value = "Total";
    sheetsList[index].getCell('N8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('N8').border = { 
      top: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("O7", "O8");
    sheetsList[index].getCell("O7").value = "Total de ingresos no residentes";
    sheetsList[index].getCell('O7').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('O7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'93c47d'} };
    sheetsList[index].getCell('O7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    
    sheetsList[index].columns = [
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
    
    incomeList[index].forEach((data) => {
      data.Ingresos_Residente = (data?.Total_Adulto_Residente ?? 0) + (data?.Total_Nino_Residente ?? 0) + (data?.Total_Especial_Residente ?? 0);
      data.Ingresos_Extranjero = (data?.Total_Adulto_Extranjero ?? 0) + (data?.Total_Nino_Extranjero ?? 0) + (data?.Total_Especial_Extranjero ?? 0);

      sheetsList[index].addRow({
        'Fecha': data.Fecha,
        'Cantidad_Adulto_Residente': data?.Cantidad_Adulto_Residente ?? 0,
        'Total_Adulto_Residente': data?.Total_Adulto_Residente ?? 0,
        'Cantidad_Nino_Residente':  data?.Cantidad_Nino_Residente ?? 0,
        'Total_Nino_Residente':  data?.Total_Nino_Residente ?? 0,
        'Cantidad_Especial_Residente': data?.Cantidad_Especial_Residente ?? 0,
        'Total_Especial_Residente': data?.Total_Especial_Residente ?? 0,
        'Ingresos_Residente': data?.Ingresos_Residente ?? 0,
        'Cantidad_Adulto_Extranjero': data?.Cantidad_Adulto_Extranjero ?? 0,
        'Total_Adulto_Extranjero': data?.Total_Adulto_Extranjero ?? 0,
        'Cantidad_Nino_Extranjero': data?.Cantidad_Nino_Extranjero ?? 0,
        'Total_Nino_Extranjero': data?.Total_Nino_Extranjero ?? 0,
        'Cantidad_Especial_Extranjero': data?.Cantidad_Especial_Extranjero ?? 0,
        'Total_Especial_Extranjero': data?.Total_Especial_Extranjero ?? 0,
        'Ingresos_Extranjero': data?.Ingresos_Extranjero ?? 0
      });

      const rowCount = sheetsList[index].rowCount;

      sheetsList[index].getCell(`C${rowCount}`).numFmt = '₡#,##0.00';
      sheetsList[index].getCell(`E${rowCount}`).numFmt = '₡#,##0.00';
      sheetsList[index].getCell(`G${rowCount}`).numFmt = '₡#,##0.00';
      sheetsList[index].getCell(`H${rowCount}`).numFmt = '₡#,##0.00';
      
      sheetsList[index].getCell(`J${rowCount}`).numFmt = '$#,##0.00';
      sheetsList[index].getCell(`L${rowCount}`).numFmt = '$#,##0.00';
      sheetsList[index].getCell(`N${rowCount}`).numFmt = '$#,##0.00';
      sheetsList[index].getCell(`O${rowCount}`).numFmt = '$#,##0.00';
    })

    for (let row = 1; row <= 8; row += 1) {
      sheetsList[index].getRow(row).font = { bold: true };
      sheetsList[index].getRow(row).eachCell((cell) => {
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true};
      })
    }

    for (let row = 6; row <= 8; row += 1) {
      sheetsList[index].getRow(row).height = 25;
    }

    sheetsList[index].eachRow((row, rowNumber) => {
      row.eachCell((cell) => {
        if (rowNumber > 8) {
          cell.border = {
            top: {style:'thin'},
            left: {style:'thin'},
            bottom: {style:'thin'},
            right: {style:'thin'}
          };
        }
      });
    });
  }
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
  sheet.getRow(6).eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern:'solid',
      fgColor:{argb:'cfe2f3'}
    }
  })
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
      } else {
        cell.fill = {
          type: 'pattern',
          pattern:'solid',
          fgColor:{argb:'ffffff'}
        }
        if (rowNumber < 5) {
          cell.border = {
            right: {style:'thin'}
          };
        } else {
          cell.border = {
            bottom: {style:'thin'},
            right: {style:'thin'}
          };
        }
      }
    })
  })

  return workbook;
};
