//
import { monthMap } from '../types/Customer.type';


export const thisMonthFormat = (date: Date) => {
      const newDate = date;
      return `${
            monthMap[newDate.getMonth()]
      } ${newDate.getDate()}   ${newDate.getFullYear()}`;
};

export const nextMonthFormat = (date: Date) => {
      // next month

      let addMonth = date;

      const getDate = date.getDate();
      const getMonth = date.getMonth();
      const getYear = date.getFullYear();
      //monitor the month feb and day 28 or 29
      if (getMonth === 0 && getDate >= 28) {
            const day28or29 = new Date(getYear, 2, 0).getDate();
            if (day28or29 === 28) {
                  addMonth.setDate(28);
            }
            if (day28or29 === 29) {
                  addMonth.setDate(29);
            }
      }
      addMonth.setMonth(addMonth.getMonth() + 1);

      const nextMonth = `${
            monthMap[addMonth.getMonth()]
      } ${addMonth.getDate()}   ${addMonth.getFullYear()}`;

      const getDays = addMonth.getDate();

      return { nextMonth, getDays };
};

export const dateFormatTwo = (date: Date) => {
      // this month data
     
};

export const dateFunction = (date: Date) => {
      const thisMonth = new Date(date).toISOString().split('T')[0];
      // next month
      let addMonth = date;
      addMonth.setMonth(addMonth.getMonth() + 1);
      const nextMonth = new Date(addMonth).toISOString().split('T')[0];

      return [thisMonth, nextMonth];
};

export const getNextMonth = (dateString: string) => {
      // dateString sample >> Jan 23 2023
      const month = dateString.slice(0, 3);
      const day = dateString.slice(4, 6);
      const year = dateString.slice(7, 11);
      // get month and index
      const index = monthMap.findIndex((cv) => cv === month);

      let nextMonth = '';
      //check  if month is from Febuary to November
      if (index !== 11 && index !== 0) {
            nextMonth = `${monthMap[index + 1]} ${day} ${year}`;

            //check  if month is December
      } else if (index === 11) {
            nextMonth = `${monthMap[0]} ${day} ${String(Number(year) + 1)}`;

            // check if  month is january and check day 28 to day 29
      } else {
            const day2829 = Number(day);

            if (day2829 > 28) {
                  //set febuary 28 or 29
                  const getfeb2829 = new Date(Number(year), 2, 0).getDate();
                  nextMonth = `${monthMap[1]} ${getfeb2829} ${String(
                        Number(year) + 1
                  )}`;
            } else {
                  //set feb below day 28 
                  nextMonth = `${monthMap[1]} ${day} ${String(
                        Number(year) + 1
                  )}`;
            }
      }
      return nextMonth;
};



export const nextMonthFormat11 = (date: Date) => {
      let addMonth = date;
      addMonth.setMonth(addMonth.getMonth() + 1);
      return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
      }).format(addMonth);
};