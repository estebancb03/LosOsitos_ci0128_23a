import Excel from "exceljs";

export const generateIncomeXLSX = (campingIncome, picnicIncome) => {
  const workbook = new Excel.Workbook();
  const campingIncomeSheet = workbook.addWorksheet("Camping");
  const picnicIncomeSheet = workbook.addWorksheet("Picnic");
  const sheetsList = [campingIncomeSheet, picnicIncomeSheet];
  const incomeList = [campingIncome, picnicIncome];

  for (let index = 0; index < sheetsList.length; index += 1) {
    sheetsList[index].mergeCells("A1", "W1");
    sheetsList[index].getCell("A1").value = "SISTEMA NACIONAL DE AREAS DE CONSERVACION";
    sheetsList[index].getCell('A1').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('A1').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'ffffff'} };
    sheetsList[index].getCell('A1').border = { right: {style:'thin'} };

    sheetsList[index].mergeCells("A2", "W2");
    sheetsList[index].getCell("A2").value = "AREA DE CONSERVACION GUANACASTE";
    sheetsList[index].getCell('A2').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('A2').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'ffffff'} };
    sheetsList[index].getCell('A2').border = { right: {style:'thin'} };

    sheetsList[index].mergeCells("A3", "W3");
    sheetsList[index].getCell("A3").value = "Informe de Venta de Tiquetes, Sector Junquillal";
    sheetsList[index].getCell('A3').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('A3').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'ffffff'} };
    sheetsList[index].getCell('A3').border = { right: {style:'thin'} };

    sheetsList[index].mergeCells("A4", "W4");
    sheetsList[index].getCell("A4").value = "R.V.S. Bahía Junquillal";
    sheetsList[index].getCell('A4').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('A4').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'ffffff'} };
    sheetsList[index].getCell('A4').border = { right: {style:'thin'} };
    
    sheetsList[index].mergeCells("A5", "W5");
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

    sheetsList[index].mergeCells("B6", "L6");
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
    sheetsList[index].getCell("D7").value = "Niño (6-12)";
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
    sheetsList[index].getCell("F7").value = "Niño menor (0-6)";
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

    sheetsList[index].mergeCells("H7", "I7");
    sheetsList[index].getCell("H7").value = "Especial";
    sheetsList[index].getCell('H7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('H7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].getCell("H8").value = "Cantidad";
    sheetsList[index].getCell('H8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('H8').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}
    };

    sheetsList[index].getCell("I8").value = "Total";
    sheetsList[index].getCell('I8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('I8').border = { 
      top: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("J7", "K7");
    sheetsList[index].getCell("J7").value = "Adulto mayor";
    sheetsList[index].getCell('J7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('J7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].getCell("J8").value = "Cantidad";
    sheetsList[index].getCell('J8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('J8').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}
    };

    sheetsList[index].getCell("K8").value = "Total";
    sheetsList[index].getCell('K8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'cfe2f3'} };
    sheetsList[index].getCell('K8').border = { 
      top: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("L7", "L8");
    sheetsList[index].getCell("L7").value = "Total de ingresos residentes";
    sheetsList[index].getCell('L7').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('L7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'6fa8dc'} };
    sheetsList[index].getCell('L7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };


    sheetsList[index].mergeCells("M6", "W6");
    sheetsList[index].getCell("M6").value = "No Residentes";
    sheetsList[index].getCell("M6").alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('M6').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('M6').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("M7", "N7");
    sheetsList[index].getCell("M7").value = "Adulto";
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

    sheetsList[index].mergeCells("O7", "P7");
    sheetsList[index].getCell("O7").value = "Niño (6-12)";
    sheetsList[index].getCell('O7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('O7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].getCell("O8").value = "Cantidad";
    sheetsList[index].getCell('O8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('O8').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}
    };

    sheetsList[index].getCell("P8").value = "Total";
    sheetsList[index].getCell('P8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('P8').border = { 
      top: {style:'thin'},
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("Q7", "R7");
    sheetsList[index].getCell("Q7").value = "Niño menor (0-6)";
    sheetsList[index].getCell('Q7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('Q7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].getCell("Q8").value = "Cantidad";
    sheetsList[index].getCell('Q8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('Q8').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}
    };

    sheetsList[index].getCell("R8").value = "Total";
    sheetsList[index].getCell('R8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('R8').border = { 
      top: {style:'thin'},
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("S7", "T7");
    sheetsList[index].getCell("S7").value = "Especial";
    sheetsList[index].getCell('S7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('S7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].getCell("S8").value = "Cantidad";
    sheetsList[index].getCell('S8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('S8').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}
    };

    sheetsList[index].getCell("T8").value = "Total";
    sheetsList[index].getCell('T8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('T8').border = { 
      top: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("U7", "V7");
    sheetsList[index].getCell("U7").value = "Adulto mayor";
    sheetsList[index].getCell('U7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('U7').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].getCell("U8").value = "Cantidad";
    sheetsList[index].getCell('U8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('U8').border = { 
      top: {style:'thin'}, 
      left: {style:'thin'}, 
      bottom: {style:'thin'}
    };

    sheetsList[index].getCell("V8").value = "Total";
    sheetsList[index].getCell('V8').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'d9ead3'} };
    sheetsList[index].getCell('V8').border = { 
      top: {style:'thin'}, 
      bottom: {style:'thin'}, 
      right: {style:'thin'} 
    };

    sheetsList[index].mergeCells("W7", "W8");
    sheetsList[index].getCell("W7").value = "Total de ingresos no residentes";
    sheetsList[index].getCell('W7').alignment = { vertical: 'middle', horizontal: 'center'};
    sheetsList[index].getCell('W7').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'93c47d'} };
    sheetsList[index].getCell('W7').border = { 
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
      { key: 'Cantidad_Nino_Menor_Residente', width: 18.5},
      { key: 'Total_Nino_Menor_Residente', width: 18.5},
      { key: 'Cantidad_Especial_Residente', width: 18.5},
      { key: 'Total_Especial_Residente', width: 18.5},
      { key: 'Cantidad_Adulto_Mayor_Residente', width: 18.5},
      { key: 'Total_Adulto_Mayor_Residente', width: 18.5},
      { key: 'Ingresos_Residente', width: 18.5},
      { key: 'Cantidad_Adulto_Extranjero', width: 18.5},
      { key: 'Total_Adulto_Extranjero', width: 18.5},
      { key: 'Cantidad_Nino_Extranjero', width: 18.5},
      { key: 'Total_Nino_Extranjero', width: 18.5},
      { key: 'Cantidad_Nino_Menor_Extranjero', width: 18.5},
      { key: 'Total_Nino_Menor_Extranjero', width: 18.5},
      { key: 'Cantidad_Especial_Extranjero', width: 18.5},
      { key: 'Total_Especial_Extranjero', width: 18.5},
      { key: 'Cantidad_Adulto_Mayor_Extranjero', width: 18.5},
      { key: 'Total_Adulto_Mayor_Extranjero', width: 18.5},
      { key: 'Ingresos_Extranjero', width: 18.5}
    ]
    
    incomeList[index].forEach((data) => {
      data.Ingresos_Residente = (data?.Total_Adulto_Residente ?? 0) + (data?.Total_Nino_Residente ?? 0) + (data?.Total_Nino_Menor_Residente ?? 0) + (data?.Total_Especial_Residente ?? 0) + (data?.Total_Adulto_Mayor_Residente ?? 0);
      data.Ingresos_Extranjero = (data?.Total_Adulto_Extranjero ?? 0) + (data?.Total_Nino_Extranjero ?? 0) + (data?.Total_Nino_Menor_Extranjero ?? 0) +(data?.Total_Especial_Extranjero ?? 0) + (data?.Total_Adulto_Mayor_Extranjero ?? 0);

      sheetsList[index].addRow({
        'Fecha': data.Fecha,
        'Cantidad_Adulto_Residente': data?.Cantidad_Adulto_Residente ?? 0,
        'Total_Adulto_Residente': data?.Total_Adulto_Residente ?? 0,
        'Cantidad_Nino_Residente':  data?.Cantidad_Nino_Residente ?? 0,
        'Total_Nino_Residente':  data?.Total_Nino_Residente ?? 0,
        'Cantidad_Nino_Menor_Residente':  data?.Cantidad_Nino_Menor_Residente ?? 0,
        'Total_Nino_Menor_Residente':  data?.Total_Nino_Menor_Residente ?? 0,
        'Cantidad_Especial_Residente': data?.Cantidad_Especial_Residente ?? 0,
        'Total_Especial_Residente': data?.Total_Especial_Residente ?? 0,
        'Cantidad_Adulto_Mayor_Residente': data?.Cantidad_Adulto_Mayor_Residente ?? 0,
        'Total_Adulto_Mayor_Residente': data?.Total_Adulto_Mayor_Residente ?? 0,
        'Ingresos_Residente': data?.Ingresos_Residente ?? 0,
        'Cantidad_Adulto_Extranjero': data?.Cantidad_Adulto_Extranjero ?? 0,
        'Total_Adulto_Extranjero': data?.Total_Adulto_Extranjero ?? 0,
        'Cantidad_Nino_Extranjero': data?.Cantidad_Nino_Extranjero ?? 0,
        'Total_Nino_Extranjero': data?.Total_Nino_Extranjero ?? 0,
        'Cantidad_Nino_Menor_Extranjero': data?.Cantidad_Nino_Menor_Extranjero ?? 0,
        'Total_Nino_Menor_Extranjero': data?.Total_Nino_Menor_Extranjero ?? 0,
        'Cantidad_Especial_Extranjero': data?.Cantidad_Especial_Extranjero ?? 0,
        'Total_Especial_Extranjero': data?.Total_Especial_Extranjero ?? 0,
        'Cantidad_Adulto_Mayor_Extranjero': data?.Cantidad_Adulto_Mayor_Extranjero ?? 0,
        'Total_Adulto_Mayor_Extranjero': data?.Total_Adulto_Mayor_Extranjero ?? 0,
        'Ingresos_Extranjero': data?.Ingresos_Extranjero ?? 0
      });

      const rowCount = sheetsList[index].rowCount;

      sheetsList[index].getCell(`C${rowCount}`).numFmt = '₡#,##0.00';
      sheetsList[index].getCell(`E${rowCount}`).numFmt = '₡#,##0.00';
      sheetsList[index].getCell(`G${rowCount}`).numFmt = '₡#,##0.00';
      sheetsList[index].getCell(`I${rowCount}`).numFmt = '₡#,##0.00';
      sheetsList[index].getCell(`K${rowCount}`).numFmt = '₡#,##0.00';
      sheetsList[index].getCell(`L${rowCount}`).numFmt = '₡#,##0.00';
      
      sheetsList[index].getCell(`N${rowCount}`).numFmt = '$#,##0.00';
      sheetsList[index].getCell(`P${rowCount}`).numFmt = '$#,##0.00';
      sheetsList[index].getCell(`R${rowCount}`).numFmt = '$#,##0.00';
      sheetsList[index].getCell(`T${rowCount}`).numFmt = '$#,##0.00';
      sheetsList[index].getCell(`V${rowCount}`).numFmt = '$#,##0.00';
      sheetsList[index].getCell(`W${rowCount}`).numFmt = '$#,##0.00';

      sheetsList[index].getRow(rowCount).eachCell((cell) => {
        cell.border = {
          top: {style:'thin'},
          left: {style:'thin'},
          bottom: {style:'thin'},
          right: {style:'thin'}
        };
      })
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
