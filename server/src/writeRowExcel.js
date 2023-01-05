const xlsx = require('xlsx');

const writeRowExcel = (arrObject) => {
      // get workbook
      const wb = xlsx.readFile('./Book1.xlsx');

      // get workSheet
      const ws = wb.Sheets[wb.SheetNames];

      // get start s is start and e is end
      const { s, e } = xlsx.utils.decode_range(ws['!ref']);
      const rowID = xlsx.utils.encode_cell({ r: e.r + 1, c: s.c });

      // create a new object with ID key
      const newArrObject = Object.assign({ ID: rowID }, arrObject);

      // write data spicific row
      xlsx.utils.sheet_add_json(ws, [newArrObject], {
            skipHeader: true,
            origin: rowID,
      });

      // write to excel file
      xlsx.writeFile(wb, './Book1.xlsx');
};

module.exports = writeRowExcel;
