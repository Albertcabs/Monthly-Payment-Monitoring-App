import getNextMonthNum from './getNextMonthNum';

const newDateFormat = () => {
   const date = new Date();
   const day = date.getDate();
   const month = date.getMonth();
   const year = date.getFullYear();
   // get this month
   const thisMonth = [month, day, year];
   //get next month
   const nextMonth = getNextMonthNum([month, day, year]);

   return { thisMonth, nextMonth };
};

export default newDateFormat;
