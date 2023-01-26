//const xlsx = require('xlsx');
import xlsx from 'xlsx';
const monthMap = [
   'Jan',
   'Feb',
   'Mar',
   'Apr',
   'May',
   'Jun',
   'Jul',
   'Aug',
   'Sep',
   'Oct',
   'Nov',
   'Dec',
];
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
function dateFormat(dte) {
   let day = '';
   if (dte[1] < 10) {
      day = '0' + String(dte[1]);
   } else {
      day = String(dte[1]);
   }
   const dueDate = `${monthMap[dte[0]]} ${day} ${dte[2]}`;
   return dueDate;
}

export const readExcel = () => {
   // get workbook
   const { ws } = readExcelFile();

   const values = xlsx.utils.sheet_to_json(ws, {
      raw: false,
      header: 1,
   });
   let head = [];
   const names = [];
   const body = [];
   const dueDate = new Array(values.length - 1).fill(0);
   const getDay = new Date().getDate();
   const getMonth = new Date().getMonth();

   values.forEach((val, i) => {
      // get the header value in excell
      if (i === 0) {
         head = val;
      }

      // get the Body value in excell
      if (i > 0) {
         body.push(val.slice(0, 6));
         names.push(val[1]);
         const day = Number(val[7]);
         const month = Number(val[6]);
         // get dueDate Value
         if (getMonth === 11) {
            // this getMonth is Dec
            if (month === 0) {
               dueDate[i - 1] = day < getDay ? 1 : 0;
            } else {
               // monyth is feb or greater month
               dueDate[i - 1] = 2;
            }
         } else {
            const tmp = getMonth + 1;
            // this month is due date and equal to getMonth + 1
            if (tmp === month) {
               dueDate[i - 1] = day < getDay ? 1 : 0;
            } else {
               // month si greater to getMonth + 1
               dueDate[i - 1] = 2;
            }
         }
      }
   });

   return { head, body, names, dueDate };
};

export const writeRowExcel = (arrObject) => {
   // get workbook
   const arr = [];
   const len = arrObject.length;
   let y = 0;

   // month for arr[6] ,day for arr[7], and year for arr[x]

   for (let x = 0; x < 9; x++) {
      if (x < 6) {
         // for arr[0]  to arr[5]
         if (x === 3) {
            // for due date
            arr.push(dateFormat(arrObject[x]));
         } else {
            arr.push(arrObject[x]);
         }
      } else {
         // arr[6],arr[7],arr[8]
         arr.push(arrObject[3][y]);
         y++;
      }
   }

   const { wb, ws } = readExcelFile();

   const values = xlsx.utils.sheet_to_json(ws, {
      raw: false,
      header: 1,
      range: 1,
   });
   values.push(arr);

   const body = values.sort((a, b) => {
      return a[3][1] - b[3][1];
   });

   xlsx.utils.sheet_add_aoa(ws, body, { origin: 'A2' });

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
   const { wb, ws } = readExcelFile();

   const value = xlsx.utils.sheet_to_json(ws, {
      raw: false,
      header: 1,
   });

   const index = value.findIndex((cv) => cv[0] === update[1]);

   ws[cellData(index, 3)].v = dateFormat(update[0]);
   ws[cellData(index, 6)].v = update[0][0];
   ws[cellData(index, 7)].v = update[0][1];

   reWrite(wb);
};
