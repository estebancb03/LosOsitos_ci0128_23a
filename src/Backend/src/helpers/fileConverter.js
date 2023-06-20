import Excel from "exceljs";

export const generateIncomeXLSX = (data) => {

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
