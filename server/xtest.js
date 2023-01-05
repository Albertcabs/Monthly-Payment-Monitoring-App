import xlsx from 'xlsx';
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

            for (let i = 1; i <= e.r; i++) {
                  ws[xlsx.utils.encode_cell({ r: i, c: 0 })].v = 'A' + i;
            }

            e.r--;
            // move the final range for worksheet
            ws['!ref'] = xlsx.utils.encode_range(s, e);
            // write the new value file
            xlsx.writeFile(wb, './Book1.xlsx');

            console.log(
                  xlsx.utils.sheet_to_json(ws, {
                        raw: false,
                        header: 1,
                  })
            );
      }
};

//deleteRowExcel(1);

export const writeRowExcel = (arrObject) => {
      // get workbook
      const wb = xlsx.readFile('./Book1.xlsx');

      // get workSheet
      const ws = wb.Sheets[wb.SheetNames];

      // get start s is start and e is end
      const { s, e } = xlsx.utils.decode_range(ws['!ref']);
      const rowNo = xlsx.utils.encode_cell({ r: e.r + 1, c: s.c });
      const rowID = rowNo + Math.round(Math.random() * 1000);

      //create a new object with ID key
      const newArrObject = Object.assign({ ID: rowID }, arrObject);

      // write data spicific row
      xlsx.utils.sheet_add_json(ws, [newArrObject], {
            skipHeader: true,
            origin: rowNo,
      });

      // write to excel file
      xlsx.writeFile(wb, './Book1.xlsx');

      console.log(
            xlsx.utils.sheet_to_json(ws, {
                  raw: false,
                  header: 1,
            })
      );
};

// writeRowExcel({
//       customerName: 'Albert',
//       dateStart: 'Dec 25, 1978',
//       dueDate: 'Mar 26,1972',
//       Payment: 'Mon',
//       Price: 1200,
// });

function dateFunction(date) {
      const months = [
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
      // this month data
      const newDate = date;
      const thisMonth = `${
            months[newDate.getMonth()]
      }. ${newDate.getDate()}, ${newDate.getFullYear()}`;

      // next month
      let addMonth = date;
      addMonth.setMonth(addMonth.getMonth() + 1);
      const nextMonth = `${
            months[addMonth.getMonth()]
      } ${addMonth.getDate()} ${addMonth.getFullYear()}`;

      console.log(nextMonth);
}

function dateFormate(date) {
      const newDate = date;

      const thisMonth = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
      }).format(newDate);

      // next month
      let addMonth = date;
      addMonth.setMonth(addMonth.getMonth() + 1);
      const nextMonth = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
      }).format(addMonth);

      console.log(thisMonth, '----', nextMonth);
      return [thisMonth];
}

export const readExcel = () => {
      // get workbook
      const file = './Book1.xlsx';
      const wb = xlsx.readFile(file);

      // get workSheet
      let ws = wb.Sheets[wb.SheetNames];

      // const body = xlsx.utils.sheet_to_json(ws);
      // body.sort((a, b) => {
      //       return a.Days - b.Days;
      // });

      const arrData = xlsx.utils.sheet_to_json(ws,{header:1,range: 1});
      arrData.sort((a,b)=>{return a[6]-b[6]})

      console.log(arrData);
};

readExcel();
