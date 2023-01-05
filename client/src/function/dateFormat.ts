//
import { monthMap } from '../types/Customer.type';


export function dateFormat(date: Date) {
      return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
      }).format(date);
}

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
      const newDate = date;
      const thisMonth = `${
            monthMap[newDate.getMonth()]
      }. ${newDate.getDate()}, ${newDate.getFullYear()}`;

      // next month
      let addMonth = date;
      addMonth.setMonth(addMonth.getMonth() + 1);
      const nextMonth = `${
            monthMap[addMonth.getMonth()]
      } ${addMonth.getDate()} ${addMonth.getFullYear()}`;

      return [thisMonth, nextMonth];
};

export const dateFunction = (date: Date) => {
      const thisMonth = new Date(date).toISOString().split('T')[0];
      // next month
      let addMonth = date;
      addMonth.setMonth(addMonth.getMonth() + 1);
      const nextMonth = new Date(addMonth).toISOString().split('T')[0];

      return [thisMonth, nextMonth];
};
