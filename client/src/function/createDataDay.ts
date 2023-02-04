import React from 'react';

const createDataDay = (year: number, month: number) => {
   let dataBox = new Array(42).fill(0);
   let day = 1;
   // get the a number 0 to 6 , 0 is sunday and 6 is saturday
   const firsDay = new Date(year, month, 1).getDay();
   // get the a number 28,29,30,31
   const endDayMonth = new Date(year, month + 1, 0).getDate();

   // get previous month last day 28,29,30,31
   let lMonthEnd = 0;
   if (month === 0) {
      lMonthEnd = new Date(year - 1, 12, 0).getDate();
   } else {
      lMonthEnd = new Date(year, month, 0).getDate();
   }
   // get first week data
   let firstWeekStart = 0;
   if (firsDay > 0) {
      firstWeekStart = lMonthEnd - (firsDay - 1);
   }
   // start mapping to array
   for (let i = 0; i < dataBox.length; i++) {
      // map first week of the month
      if (firsDay > 0 && firstWeekStart <= lMonthEnd) {
         // map first week of the month
         dataBox[i] = firstWeekStart;
         firstWeekStart++;
      } else if (i >= firsDay && i < endDayMonth + firsDay) {
         // map all days in month
         dataBox[i] = day;
         day++;
      } else if (i >= endDayMonth + firsDay) {
         // map the remaining day an beyond
         if (day > 25) day = 1;
         dataBox[i] = day;
         day++;

         //day = 1;
      }
   }
   return { dataBox, firsDay, endDayMonth };
};

export default createDataDay;
