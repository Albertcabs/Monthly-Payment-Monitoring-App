//const xlsx = require('xlsx');
import xlsx from 'xlsx';
function readExcelFile() {
      const file = './Book1.xlsx';
      const wb = xlsx.readFile(file);

      // get workSheet
      let ws = wb.Sheets[wb.SheetNames];

      const { s, e } = xlsx.utils.decode_range(ws['!ref']);
      return { wb, ws, s, e };
}
function cellData(row, col) {
      return xlsx.utils.encode_cell({ r: row, c: col });
}

function reWrite(wb) {
      xlsx.writeFile(wb, './Book1.xlsx');
}

export const readExcel = () => {
      // get workbook
      const { ws } = readExcelFile();

      const value = xlsx.utils.sheet_to_json(ws, {
            raw: false,
            header: 1,
      });
      //  console.log(value)

      return value;
};
export const writeRowExcel = (arrObject) => {
      // get workbook
      const { wb, ws, s, e } = readExcelFile();
      //.....................................................................

      // write data spicific row
      xlsx.utils.sheet_add_json(ws, [arrObject], {
            skipHeader: true,
            origin: xlsx.utils.encode_cell({ r: e.r + 1, c: s.c }),
      });

      reWrite(wb);
};
export const deleteRowExcel = (data) => {
      // get workbook
      const { wb, ws, s, e } = readExcelFile();
      // read or get arr data from excel file
      const value = xlsx.utils.sheet_to_json(ws, {
            raw: false,
            header: 1,
      });
      const index = value.findIndex(
            (cv) => cv[0] === data[0] && cv[1] === data[1]
      );
      if (index <= e.r && index > 0) {
            // copy its cell value from prev
            for (var R = index; R < e.r; ++R) {
                  for (var C = s.c; C <= e.c; ++C) {
                        ws[cellData(R, C)] = ws[cellData(R + 1, C)];
                  }
            }

            e.r--;
            // move the final range for worksheet
            ws['!ref'] = xlsx.utils.encode_range(s, e);
            // write the new value file
            reWrite(wb);
      }
};

export const updateRowExcel = (update) => {
      const { wb, ws, s, e } = readExcelFile();

      const value = xlsx.utils.sheet_to_json(ws, {
            raw: false,
            header: 1,
      });

      const index = value.findIndex((cv) => cv[0] === update[0]);

      for (let Col = s.c; Col < e.c; Col++) {
            ws[cellData(index, Col)].v = update[Col];
      }

      reWrite(wb);
};
