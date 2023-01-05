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
function searchIdkey(key, name) {
      const { ws, e } = readExcelFile();
      let rowNum = 0;

      if (!key) {
            console.log('no value');
            return;
      } else {
            for (let i = 1; i < e.r + 1; i++) {
                  if (
                        ws[cellData(i, 0)].v === key &&
                        ws[cellData(i, 1)].v === name
                  ) {
                        rowNum = i;
                        break;
                  }
            }
      }

      return rowNum;
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
      const header = value[0].slice(0, 6);
      // splice header value
      const dayInMonth = [];
      value.splice(0, 1);
      const body = value.map((val) => {
            dayInMonth.push(val[6]);
            return val.slice(0, 6);
      });

      return {header, body, dayInMonth};
};

export const writeRowExcel = (arrObject) => {
      // get workbook
      const { wb, ws } = readExcelFile();
      // convert object to arr
      const newArrObject = Object.values(arrObject);
      // create a  ID key and copy to ID: storrage
      newArrObject[0] = 'A' + Math.round(Math.random() * 9000 + 1000);

      //.....................................................................
      // read or get arr data from excel file
      const arrData = xlsx.utils.sheet_to_json(ws, { header: 1, range: 1 });
      // add new data to arrData
      arrData.push(newArrObject);
      arrData.sort((a, b) => {
            return a[6] - b[6];
      });
      xlsx.utils.sheet_add_aoa(ws, arrData, { origin: 'A2' });
      reWrite(wb);
};

export const deleteRowExcel = (key, name) => {
      // get workbook
      const { wb, ws, s, e } = readExcelFile();
      //search for the ID key
      const rowNum = searchIdkey(key, name);

      if (rowNum <= e.r && rowNum > 0) {
            for (var R = rowNum; R < e.r; ++R) {
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
      const data = Object.values(update);

      const rowNum = searchIdkey(data[0]);

      const { wb, ws, s, e } = readExcelFile();

      for (let Col = s.c; Col < e.c + 1; Col++) {
            ws[cellData(rowNum, Col)].v = data[Col];
      }

      reWrite(wb);
};
