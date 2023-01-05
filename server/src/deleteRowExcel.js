const xlsx = require('xlsx');

const deleteRowExcel = (rowDelete) => {
      // get excel file

      // get workbook
      const wb = xlsx.readFile('./Book1.xlsx');

      // get workSheet
      const ws = wb.Sheets[wb.SheetNames];
      // get Start = s and End e from ranage
      const { s, e } = xlsx.utils.decode_range(ws['!ref']);

      if (rowDelete <= e.r && rowDelete > 0) {
            for (var R = rowDelete; R < e.r; ++R) {
                  for (var C = s.c; C <= e.c; ++C) {
                        ws[xlsx.utils.encode_cell({ r: R, c: C })] =
                              ws[xlsx.utils.encode_cell({ r: R + 1, c: C })];
                  }
            }
            e.r--;
            // move the final range for worksheet
            ws['!ref'] = xlsx.utils.encode_range(s, e);
            // write the new value file
            xlsx.writeFile(wb, './Book1.xlsx');
      }
};

module.exports = deleteRowExcel;
