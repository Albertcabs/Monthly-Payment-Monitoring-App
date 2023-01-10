import getNextMonth from './getNextMonth';

const newDateFormat = () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      // get this month
      const thisMonth = [month, day, year];
      //get next month
      const nextMonth = getNextMonth([month, day, year]);

      return { thisMonth, nextMonth };
};

export default newDateFormat;
