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

   const arrData = xlsx.utils.sheet_to_json(ws, { header: 1, range: 1 });
   arrData.sort((a, b) => {
      return a[6] - b[6];
   });

   console.log(arrData);
};

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

const getNextMonth = (dateString) => {
   // dateString sample >> Jan 23 2023
   const month = dateString.slice(0, 3);
   const day = dateString.slice(4, 6);
   const year = dateString.slice(7, 11);
   // get month and index
   const index = monthMap.findIndex((cv) => cv === month);

   let nextMonth = '';
   if (index !== 11 && index !== 0) {
      //check  if month is from Febuary to November
      nextMonth = `${monthMap[index + 1]} ${day} ${year}`;
   } else if (index == 11) {
      //check  if month is December
      nextMonth = `${monthMap[0]} ${day} ${String(Number(year) + 1)}`;
   } else {
      // check if  month is january and check day 28 to day 29
      const day2829 = Number(day);

      if (day2829 > 28) {
         const getfeb2829 = new Date(year, 2, 0).getDate();
         nextMonth = `${monthMap[1]} ${getfeb2829} ${String(Number(year) + 1)}`;
      } else {
         nextMonth = `${monthMap[1]} ${day} ${String(Number(year) + 1)}`;
      }
   }
   return nextMonth;
};

const newDateFormat = () => {
   const date = new Date();
   const day = date.getDate();
   const month = date.getMonth();
   const year = date.getFullYear();
   // get this month
   const thisMonth = [month, day, year];

   // get nextMonth
   let nextMonth = [0, 0, 0];
   //check  if month is from Febuary to November
   if (index !== 11 && index !== 0) {
      nextMonth = [month + 1, day, year];
   } else if (index == 11) {
      //check  if month is December
      nextMonth = [0, day, year + 1];
   } else {
      // check if  month is january and check day 28 to day 29

      if (day > 28) {
         const getfeb2829 = new Date(year, 2, 0).getDate();
         nextMonth = [1, getfeb2829, year];
      } else {
         nextMonth = [1, day, year];
      }
   }
   return { thisMonth, nextMonth };
};

function getLastWeeksDate() {
   const now = new Date();
   const firsDay = new Date(now.getFullYear(), now.getMonth(), 31).getDay();
   console.log(firsDay);
   console.log(now);
   console.log(new Date(2022, 1, 0).getDate());
   console.log(new Date(2022 - 1, 1, 0).getDate());

   //return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
}

function getNextMonth12(date) {
   let month = 0;
   let day = 0;
   let year = 0;
   if (date.length === 10) {
      month = monthMap.findIndex((val) => val === date.slice(0, 3));
      day = Number(date.slice(4, 5));
      year = Number(date.slice(6, 10));
   } else {
      month = monthMap.findIndex((val) => val === date.slice(0, 3));
      day = Number(date.slice(4, 6));
      year = Number(date.slice(7, 11));
   }

   console.log(month);
   console.log(day);
   console.log(year);
}

///getNextMonth12('Mar 25 2023');
